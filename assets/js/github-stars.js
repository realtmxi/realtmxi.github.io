(function () {
  "use strict";

  var refreshInterval = 5 * 60 * 1000;
  var maxCacheAge = 24 * 60 * 60 * 1000;
  var cachePrefix = "github-stars:v1:";
  var repositories = new Map();

  document.querySelectorAll("[data-github-repo]").forEach(function (element) {
    var repo = element.getAttribute("data-github-repo");
    if (!/^[\w.-]+\/[\w.-]+$/.test(repo) || !element.querySelector("[data-star-count]")) return;
    if (!repositories.has(repo)) repositories.set(repo, { elements: [], cached: null, retryAt: 0, pending: false });
    repositories.get(repo).elements.push(element);
  });

  if (!repositories.size || !window.fetch) return;

  function validCache(cached) {
    var validCount = cached && (cached.source === "shields" ?
      typeof cached.display === "string" && /^\d+(?:[.,]\d+)*[kMB]?$/.test(cached.display) :
      Number.isSafeInteger(cached.count) && cached.count >= 0);
    return validCount &&
      Number.isFinite(cached.fetchedAt) && cached.fetchedAt <= Date.now() &&
      Date.now() - cached.fetchedAt < maxCacheAge;
  }

  function readCache(repo) {
    try {
      var cached = JSON.parse(window.localStorage.getItem(cachePrefix + repo));
      return validCache(cached) ? cached : null;
    } catch (_) {
      return null;
    }
  }

  function render(repo, state, cached) {
    var count = cached ? (cached.source === "shields" ? cached.display : cached.count.toLocaleString("en-US")) : "Stars";
    var label = cached ? count + " stars on " + repo : "View " + repo + " stars on GitHub";
    state.elements.forEach(function (element) {
      element.querySelector("[data-star-count]").textContent = count;
      element.setAttribute("aria-label", label);
      element.setAttribute("title", label);
    });
  }

  async function refresh(repo, state) {
    if (document.hidden || state.pending) return;
    var cached = readCache(repo) || (validCache(state.cached) ? state.cached : null);
    state.cached = cached;
    render(repo, state, cached);
    if ((cached && Date.now() - cached.fetchedAt < refreshInterval) || Date.now() < state.retryAt) return;

    state.pending = true;
    state.retryAt = Date.now() + refreshInterval;
    var controller = new AbortController();
    var timeout = window.setTimeout(function () { controller.abort(); }, 8000);
    try {
      var response = await window.fetch("https://api.github.com/repos/" + repo, {
        headers: { Accept: "application/vnd.github+json" },
        credentials: "omit",
        referrerPolicy: "no-referrer",
        signal: controller.signal
      });
      if (!response.ok) {
        if (response.status === 403 || response.status === 429) {
          var resetAt = Number(response.headers.get("x-ratelimit-reset")) * 1000;
          var retryAfter = Number(response.headers.get("retry-after")) * 1000;
          if (Number.isFinite(resetAt)) state.retryAt = Math.max(state.retryAt, resetAt);
          if (Number.isFinite(retryAfter)) state.retryAt = Math.max(state.retryAt, Date.now() + retryAfter);
        }
        throw new Error("GitHub stars unavailable");
      }
      var data = await response.json();
      if (!Number.isSafeInteger(data.stargazers_count) || data.stargazers_count < 0) throw new Error("Invalid star count");
      cached = { count: data.stargazers_count, fetchedAt: Date.now() };
      state.cached = cached;
      try { window.localStorage.setItem(cachePrefix + repo, JSON.stringify(cached)); } catch (_) { /* Storage can be disabled. */ }
      render(repo, state, cached);
    } catch (_) {
      // Shields has its own GitHub quota; keep retrieval details out of the UI.
      if (!validCache(state.cached)) {
        window.clearTimeout(timeout);
        controller = new AbortController();
        timeout = window.setTimeout(function () { controller.abort(); }, 8000);
        try {
          var fallback = await window.fetch("https://img.shields.io/github/stars/" + repo + ".json", {
            credentials: "omit", referrerPolicy: "no-referrer", signal: controller.signal
          });
          if (!fallback.ok) throw new Error("Cached stars unavailable");
          var badge = await fallback.json();
          var snapshot = { source: "shields", display: badge.message, fetchedAt: Date.now() };
          if (!validCache(snapshot)) throw new Error("Invalid cached star count");
          state.cached = snapshot;
          try { window.localStorage.setItem(cachePrefix + repo, JSON.stringify(snapshot)); } catch (_) { /* Storage can be disabled. */ }
        } catch (_) { /* A working GitHub link remains when both sources fail. */ }
      }
      render(repo, state, validCache(state.cached) ? state.cached : null);
    } finally {
      window.clearTimeout(timeout);
      state.pending = false;
    }
  }

  function refreshAll() {
    repositories.forEach(function (state, repo) { refresh(repo, state); });
  }

  refreshAll();
  window.setInterval(refreshAll, refreshInterval);
  document.addEventListener("visibilitychange", refreshAll);
}());
