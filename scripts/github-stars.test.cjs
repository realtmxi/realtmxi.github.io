const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../assets/js/github-stars.js'), 'utf8');
const interval = 5 * 60 * 1000;
const repo = 'HarvardMadSys/RouteWise';
const key = 'github-stars:v1:' + repo;
const initialTime = Date.parse('2026-09-14T12:00:00Z');
const settle = () => new Promise(setImmediate);

function response(count, status = 200, headers = {}) {
  return { ok: status === 200, status, headers: { get: name => headers[name] ?? null }, json: async () => ({ stargazers_count: count }) };
}

function page(options = {}) {
  let now = initialTime;
  const storage = new Map(Object.entries(options.storage || {}));
  const requests = [];
  const events = {};
  const timeouts = new Map();
  let refresh;
  const elements = (options.repos || [repo]).map(name => ({
    count: { textContent: 'Stars' },
    attributes: { 'data-github-repo': name },
    getAttribute(name) { return this.attributes[name]; },
    setAttribute(name, value) { this.attributes[name] = value; },
    querySelector() { return this.count; }
  }));
  const document = {
    hidden: !!options.hidden,
    querySelectorAll: () => elements,
    addEventListener: (name, fn) => { events[name] = fn; }
  };
  const window = {
    fetch: async (url, init) => {
      requests.push({ url, init });
      return options.fetch ? options.fetch(url, init) : response(4156);
    },
    localStorage: {
      getItem(name) { if (options.blockStorage) throw new Error('Storage disabled'); return storage.get(name) || null; },
      setItem(name, value) { if (options.blockStorage) throw new Error('Storage disabled'); storage.set(name, value); }
    },
    setTimeout(fn) { const id = Symbol(); timeouts.set(id, fn); return id; },
    clearTimeout(id) { timeouts.delete(id); },
    setInterval(fn, delay) { assert.equal(delay, interval); refresh = fn; }
  };
  class ClockDate extends Date { static now() { return now; } }
  vm.runInNewContext(source, { document, window, AbortController, Date: ClockDate });
  return { elements, storage, requests, document, timeouts,
    advance(ms) { now += ms; },
    refresh() { refresh(); },
    visible(value) { document.hidden = !value; events.visibilitychange(); }
  };
}

test('renders exact live counts, caches them, and deduplicates repeated repo badges', async () => {
  const p = page({ repos: [repo, repo] });
  await settle();
  assert.equal(p.requests.length, 1);
  assert.equal(p.requests[0].url, 'https://api.github.com/repos/' + repo);
  assert.equal(p.requests[0].init.credentials, 'omit');
  assert.deepEqual(p.elements.map(el => el.count.textContent), ['4,156', '4,156']);
  assert.equal(JSON.parse(p.storage.get(key)).count, 4156);
  p.refresh();
  await settle();
  assert.equal(p.requests.length, 1);
});

test('fresh cached counts avoid a request, then refresh after five minutes', async () => {
  const p = page({ storage: { [key]: JSON.stringify({ count: 7, fetchedAt: initialTime }) } });
  await settle();
  assert.equal(p.elements[0].count.textContent, '7');
  assert.equal(p.requests.length, 0);
  p.advance(interval);
  p.refresh();
  await settle();
  assert.equal(p.elements[0].count.textContent, '4,156');
  assert.equal(p.requests.length, 1);
});

test('API errors retain the count without exposing cache state and respect rate-limit reset', async () => {
  const p = page({
    storage: { [key]: JSON.stringify({ count: 7, fetchedAt: initialTime - interval }) },
    fetch: async () => response(null, 403, { 'x-ratelimit-reset': (initialTime + 3600000) / 1000 })
  });
  await settle();
  assert.equal(p.elements[0].count.textContent, '7');
  assert.equal(p.elements[0].attributes.title, '7 stars on ' + repo);
  assert.equal(p.elements[0].attributes['aria-label'], '7 stars on ' + repo);
  p.advance(interval);
  p.refresh();
  await settle();
  assert.equal(p.requests.length, 1);
  p.advance(3600000);
  p.refresh();
  await settle();
  assert.equal(p.requests.length, 2);
});

test('missing or invalid API counts never turn into a fabricated zero', async () => {
  for (const count of [undefined, null, -1, 1.5, '7']) {
    const p = page({ fetch: async () => response(count) });
    await settle();
    assert.equal(p.elements[0].count.textContent, 'Stars');
    assert.equal(p.storage.size, 0);
  }
  const p = page({ fetch: async () => response(0) });
  await settle();
  assert.equal(p.elements[0].count.textContent, '0');
});

test('expired or malformed cache data is discarded when the network fails', async () => {
  for (const cached of ['broken JSON', JSON.stringify({ count: 99, fetchedAt: initialTime - 86400000 }), JSON.stringify({ count: 99, fetchedAt: initialTime + 1 })]) {
    const p = page({ storage: { [key]: cached }, fetch: async () => { throw new Error('offline'); } });
    await settle();
    assert.equal(p.elements[0].count.textContent, 'Stars');
  }
});

test('disabled browser storage does not prevent loading or cause repeated requests', async () => {
  const p = page({ blockStorage: true });
  await settle();
  assert.equal(p.elements[0].count.textContent, '4,156');
  p.refresh();
  await settle();
  assert.equal(p.requests.length, 1);
});

test('hidden pages pause requests and refresh on returning to the page', async () => {
  const p = page({ hidden: true });
  await settle();
  assert.equal(p.requests.length, 0);
  p.visible(true);
  await settle();
  assert.equal(p.requests.length, 1);
  p.visible(false);
  p.advance(interval);
  p.refresh();
  await settle();
  assert.equal(p.requests.length, 1);
  p.visible(true);
  await settle();
  assert.equal(p.requests.length, 2);
});

test('hung requests and their fallback time out and can be retried later', async () => {
  const p = page({ fetch: (url, init) => new Promise((resolve, reject) => {
    init.signal.addEventListener('abort', () => reject(new Error('aborted')));
  }) });
  assert.equal(p.requests.length, 1);
  p.refresh();
  assert.equal(p.requests.length, 1);
  [...p.timeouts.values()].forEach(fn => fn());
  await settle();
  assert.equal(p.requests.length, 2);
  [...p.timeouts.values()].forEach(fn => fn());
  await settle();
  assert.equal(p.elements[0].count.textContent, 'Stars');
  assert.equal(p.timeouts.size, 0);
  p.advance(interval);
  p.refresh();
  assert.equal(p.requests.length, 3);
});

test('a rate-limited first visit displays the fallback count without technical status', async () => {
  const p = page({ fetch: async url => url.startsWith('https://api.github.com/') ?
    response(null, 403) : { ok: true, json: async () => ({ message: '4.2k' }) }
  });
  await settle();
  assert.equal(p.requests.length, 2);
  assert.equal(p.requests[1].url, 'https://img.shields.io/github/stars/' + repo + '.json');
  assert.equal(p.elements[0].count.textContent, '4.2k');
  assert.equal(p.elements[0].attributes.title, '4.2k stars on ' + repo);
  assert.equal(p.elements[0].attributes['aria-label'], '4.2k stars on ' + repo);
  assert.equal(JSON.parse(p.storage.get(key)).source, 'shields');
});
