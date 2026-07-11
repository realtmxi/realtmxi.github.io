(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  ready(function () {
    var smallViewport = window.matchMedia("(max-width: 924px)");
    var nav = document.querySelector("#site-nav");
    var navButton = document.querySelector("#site-nav > button");
    var navLinks = document.querySelector("#site-nav .hidden-links");
    var authorWrap = document.querySelector(".author__urls-wrapper");
    var authorButton = document.querySelector(".author__urls-wrapper button");
    var authorLinks = document.querySelector(".author__urls-wrapper .author__urls");

    function closeAuthorLinks() {
      if (!authorButton || !authorLinks || !smallViewport.matches) {
        return;
      }

      authorButton.classList.remove("open");
      authorButton.setAttribute("aria-expanded", "false");
      authorLinks.style.display = "none";
    }

    function syncAuthorState() {
      if (!authorButton || !authorLinks) {
        return;
      }

      var isOpen = window.getComputedStyle(authorLinks).display !== "none";
      authorButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }

    function closeNavLinks() {
      if (!navButton || !navLinks) {
        return;
      }

      navButton.classList.remove("close");
      navButton.setAttribute("aria-expanded", "false");
      navButton.setAttribute("aria-label", "Open navigation menu");
      navLinks.classList.add("hidden");
    }

    function syncNavState() {
      if (!navButton || !navLinks) {
        return;
      }

      var isOpen = !navLinks.classList.contains("hidden");
      navButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    }

    if (authorButton) {
      authorButton.addEventListener("click", function () {
        closeNavLinks();
        window.setTimeout(syncAuthorState, 0);
      });
    }

    if (navButton) {
      navButton.addEventListener("click", function () {
        closeAuthorLinks();
        window.setTimeout(syncNavState, 0);
      });
    }

    document.addEventListener("click", function (event) {
      if (authorWrap && !authorWrap.contains(event.target)) {
        closeAuthorLinks();
      }

      if (nav && !nav.contains(event.target)) {
        closeNavLinks();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeAuthorLinks();
        closeNavLinks();
      }
    });

    window.addEventListener("resize", function () {
      if (!smallViewport.matches && authorLinks) {
        authorLinks.style.display = "";
      }

      syncAuthorState();
      syncNavState();
    });

    syncAuthorState();
    syncNavState();

    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var finePointer = window.matchMedia("(pointer: fine)");
    var hero = document.querySelector(".home-hero");

    if (hero && finePointer.matches && !reducedMotion.matches) {
      var pointerFrame;

      hero.addEventListener("pointermove", function (event) {
        if (pointerFrame) {
          window.cancelAnimationFrame(pointerFrame);
        }

        pointerFrame = window.requestAnimationFrame(function () {
          var bounds = hero.getBoundingClientRect();
          var x = ((event.clientX - bounds.left) / bounds.width) * 100;
          var y = ((event.clientY - bounds.top) / bounds.height) * 100;

          hero.style.setProperty("--pointer-x", Math.max(0, Math.min(100, x)) + "%");
          hero.style.setProperty("--pointer-y", Math.max(0, Math.min(100, y)) + "%");
        });
      });

      hero.addEventListener("pointerleave", function () {
        hero.style.setProperty("--pointer-x", "72%");
        hero.style.setProperty("--pointer-y", "28%");
      });
    }

    if ("IntersectionObserver" in window && !reducedMotion.matches) {
      var revealItems = document.querySelectorAll([
        "[data-reveal]",
        ".experience-page .research-entry",
        ".publications-page .pub-entry",
        ".projects-page .project-entry"
      ].join(", "));
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      }, {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08
      });

      Array.prototype.forEach.call(revealItems, function (item) {
        if (item.getBoundingClientRect().top > window.innerHeight * 0.92) {
          item.classList.add("will-reveal");
          revealObserver.observe(item);
        }
      });
    }
  });
}());
