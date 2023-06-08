define(['exports'], ((t) => {
  try { self['workbox:core:6.5.4'] && _(); } catch (t) {} const e = (t, ...e) => { let s = t; return e.length > 0 && (s += ` :: ${JSON.stringify(e)}`), s; }; class s extends Error {constructor(t, s) { super(e(t, s)), this.name = t, this.details = s; }} try { self['workbox:routing:6.5.4'] && _(); } catch (t) {} const n = (t) => (t && typeof t === 'object' ? t : { handle: t }); class r {
    constructor(t, e, s = 'GET') { this.handler = n(e), this.match = t, this.method = s; }

    setCatchHandler(t) { this.catchHandler = n(t); }
  } class i extends r {constructor(t, e, s) { super((({ url: e }) => { const s = t.exec(e.href); if (s && (e.origin === location.origin || s.index === 0)) return s.slice(1); }), e, s); }} class o {
    constructor() { this.t = new Map(), this.i = new Map(); }

    get routes() { return this.t; }

    addFetchListener() { self.addEventListener('fetch', ((t) => { const { request: e } = t; const s = this.handleRequest({ request: e, event: t }); s && t.respondWith(s); })); }

    addCacheListener() { self.addEventListener('message', ((t) => { if (t.data && t.data.type === 'CACHE_URLS') { const { payload: e } = t.data; const s = Promise.all(e.urlsToCache.map(((e) => { typeof e === 'string' && (e = [e]); const s = new Request(...e); return this.handleRequest({ request: s, event: t }); }))); t.waitUntil(s), t.ports && t.ports[0] && s.then((() => t.ports[0].postMessage(!0))); } })); }

    handleRequest({ request: t, event: e }) {
      const s = new URL(t.url, location.href); if (!s.protocol.startsWith('http')) return; const n = s.origin === location.origin; const { params: r, route: i } = this.findMatchingRoute({
        event: e, request: t, sameOrigin: n, url: s,
      }); let o = i && i.handler; const c = t.method; if (!o && this.i.has(c) && (o = this.i.get(c)), !o) return; let a; try {
        a = o.handle({
          url: s, request: t, event: e, params: r,
        });
      } catch (t) { a = Promise.reject(t); } const h = i && i.catchHandler; return a instanceof Promise && (this.o || h) && (a = a.catch((async (n) => {
        if (h) {
          try {
            return await h.handle({
              url: s, request: t, event: e, params: r,
            });
          } catch (t) { t instanceof Error && (n = t); }
        } if (this.o) return this.o.handle({ url: s, request: t, event: e }); throw n;
      }))), a;
    }

    findMatchingRoute({
      url: t, sameOrigin: e, request: s, event: n,
    }) {
      const r = this.t.get(s.method) || []; for (const i of r) {
        let r; const o = i.match({
          url: t, sameOrigin: e, request: s, event: n,
        }); if (o) return r = o, (Array.isArray(r) && r.length === 0 || o.constructor === Object && Object.keys(o).length === 0 || typeof o === 'boolean') && (r = void 0), { route: i, params: r };
      } return {};
    }

    setDefaultHandler(t, e = 'GET') { this.i.set(e, n(t)); }

    setCatchHandler(t) { this.o = n(t); }

    registerRoute(t) { this.t.has(t.method) || this.t.set(t.method, []), this.t.get(t.method).push(t); }

    unregisterRoute(t) { if (!this.t.has(t.method)) throw new s('unregister-route-but-not-found-with-method', { method: t.method }); const e = this.t.get(t.method).indexOf(t); if (!(e > -1)) throw new s('unregister-route-route-not-registered'); this.t.get(t.method).splice(e, 1); }
  } let c; const a = () => (c || (c = new o(), c.addFetchListener(), c.addCacheListener()), c); function h(t, e, n) { let o; if (typeof t === 'string') { const s = new URL(t, location.href); o = new r((({ url: t }) => t.href === s.href), e, n); } else if (t instanceof RegExp)o = new i(t, e, n); else if (typeof t === 'function')o = new r(t, e, n); else { if (!(t instanceof r)) throw new s('unsupported-route-type', { moduleName: 'workbox-routing', funcName: 'registerRoute', paramName: 'capture' }); o = t; } return a().registerRoute(o), o; } try { self['workbox:strategies:6.5.4'] && _(); } catch (t) {} const u = { cacheWillUpdate: async ({ response: t }) => (t.status === 200 || t.status === 0 ? t : null) }; const l = {
    googleAnalytics: 'googleAnalytics', precache: 'precache-v2', prefix: 'workbox', runtime: 'runtime', suffix: typeof registration !== 'undefined' ? registration.scope : '',
  }; const f = (t) => [l.prefix, t, l.suffix].filter(((t) => t && t.length > 0)).join('-'); const w = (t) => t || f(l.precache); const d = (t) => t || f(l.runtime); function p(t, e) { const s = new URL(t); for (const t of e)s.searchParams.delete(t); return s.href; } class y {constructor() { this.promise = new Promise(((t, e) => { this.resolve = t, this.reject = e; })); }} const g = new Set(); function R(t) { return typeof t === 'string' ? new Request(t) : t; } class m {
    constructor(t, e) { this.h = {}, Object.assign(this, e), this.event = e.event, this.u = t, this.l = new y(), this.p = [], this.g = [...t.plugins], this.R = new Map(); for (const t of this.g) this.R.set(t, {}); this.event.waitUntil(this.l.promise); }

    async fetch(t) {
      const { event: e } = this; let n = R(t); if (n.mode === 'navigate' && e instanceof FetchEvent && e.preloadResponse) { const t = await e.preloadResponse; if (t) return t; } const r = this.hasCallback('fetchDidFail') ? n.clone() : null; try { for (const t of this.iterateCallbacks('requestWillFetch'))n = await t({ request: n.clone(), event: e }); } catch (t) { if (t instanceof Error) throw new s('plugin-error-request-will-fetch', { thrownErrorMessage: t.message }); } const i = n.clone(); try { let t; t = await fetch(n, n.mode === 'navigate' ? void 0 : this.u.fetchOptions); for (const s of this.iterateCallbacks('fetchDidSucceed'))t = await s({ event: e, request: i, response: t }); return t; } catch (t) {
        throw r && await this.runCallbacks('fetchDidFail', {
          error: t, event: e, originalRequest: r.clone(), request: i.clone(),
        }), t;
      }
    }

    async fetchAndCachePut(t) { const e = await this.fetch(t); const s = e.clone(); return this.waitUntil(this.cachePut(t, s)), e; }

    async cacheMatch(t) {
      const e = R(t); let s; const { cacheName: n, matchOptions: r } = this.u; const i = await this.getCacheKey(e, 'read'); const o = { ...r, cacheName: n }; s = await caches.match(i, o); for (const t of this.iterateCallbacks('cachedResponseWillBeUsed')) {
        s = await t({
          cacheName: n, matchOptions: r, cachedResponse: s, request: i, event: this.event,
        }) || void 0;
      } return s;
    }

    async cachePut(t, e) {
      const n = R(t); let r; await (r = 0, new Promise(((t) => setTimeout(t, r)))); const i = await this.getCacheKey(n, 'write'); if (!e) throw new s('cache-put-with-no-response', { url: (o = i.url, new URL(String(o), location.href).href.replace(new RegExp(`^${location.origin}`), '')) }); let o; const c = await this.m(e); if (!c) return !1; const { cacheName: a, matchOptions: h } = this.u; const u = await self.caches.open(a); const l = this.hasCallback('cacheDidUpdate'); const f = l ? await (async function (t, e, s, n) { const r = p(e.url, s); if (e.url === r) return t.match(e, n); const i = { ...n, ignoreSearch: !0 }; const o = await t.keys(e, i); for (const e of o) if (r === p(e.url, s)) return t.match(e, n); }(u, i.clone(), ['__WB_REVISION__'], h)) : null; try { await u.put(i, l ? c.clone() : c); } catch (t) { if (t instanceof Error) throw t.name === 'QuotaExceededError' && await (async function () { for (const t of g) await t(); }()), t; } for (const t of this.iterateCallbacks('cacheDidUpdate')) {
        await t({
          cacheName: a, oldResponse: f, newResponse: c.clone(), request: i, event: this.event,
        });
      } return !0;
    }

    async getCacheKey(t, e) {
      const s = `${t.url} | ${e}`; if (!this.h[s]) {
        let n = t; for (const t of this.iterateCallbacks('cacheKeyWillBeUsed')) {
          n = R(await t({
            mode: e, request: n, event: this.event, params: this.params,
          }));
        } this.h[s] = n;
      } return this.h[s];
    }

    hasCallback(t) { for (const e of this.u.plugins) if (t in e) return !0; return !1; }

    async runCallbacks(t, e) { for (const s of this.iterateCallbacks(t)) await s(e); }

    * iterateCallbacks(t) { for (const e of this.u.plugins) if (typeof e[t] === 'function') { const s = this.R.get(e); const n = (n) => { const r = { ...n, state: s }; return e[t](r); }; yield n; } }

    waitUntil(t) { return this.p.push(t), t; }

    async doneWaiting() { let t; for (;t = this.p.shift();) await t; }

    destroy() { this.l.resolve(null); }

    async m(t) { let e = t; let s = !1; for (const t of this.iterateCallbacks('cacheWillUpdate')) if (e = await t({ request: this.request, response: e, event: this.event }) || void 0, s = !0, !e) break; return s || e && e.status !== 200 && (e = void 0), e; }
  } class v {
    constructor(t = {}) { this.cacheName = d(t.cacheName), this.plugins = t.plugins || [], this.fetchOptions = t.fetchOptions, this.matchOptions = t.matchOptions; }

    handle(t) { const [e] = this.handleAll(t); return e; }

    handleAll(t) { t instanceof FetchEvent && (t = { event: t, request: t.request }); const e = t.event; const s = typeof t.request === 'string' ? new Request(t.request) : t.request; const n = 'params' in t ? t.params : void 0; const r = new m(this, { event: e, request: s, params: n }); const i = this.v(r, s, e); return [i, this.q(i, r, s, e)]; }

    async v(t, e, n) { let r; await t.runCallbacks('handlerWillStart', { event: n, request: e }); try { if (r = await this.U(e, t), !r || r.type === 'error') throw new s('no-response', { url: e.url }); } catch (s) { if (s instanceof Error) for (const i of t.iterateCallbacks('handlerDidError')) if (r = await i({ error: s, event: n, request: e }), r) break; if (!r) throw s; } for (const s of t.iterateCallbacks('handlerWillRespond'))r = await s({ event: n, request: e, response: r }); return r; }

    async q(t, e, s, n) {
      let r; let i; try { r = await t; } catch (i) {} try { await e.runCallbacks('handlerDidRespond', { event: n, request: s, response: r }), await e.doneWaiting(); } catch (t) { t instanceof Error && (i = t); } if (await e.runCallbacks('handlerDidComplete', {
        event: n, request: s, response: r, error: i,
      }), e.destroy(), i) throw i;
    }
  } function q(t, e) { const s = e(); return t.waitUntil(s), s; } try { self['workbox:precaching:6.5.4'] && _(); } catch (t) {} function U(t) { if (!t) throw new s('add-to-cache-list-unexpected-type', { entry: t }); if (typeof t === 'string') { const e = new URL(t, location.href); return { cacheKey: e.href, url: e.href }; } const { revision: e, url: n } = t; if (!n) throw new s('add-to-cache-list-unexpected-type', { entry: t }); if (!e) { const t = new URL(n, location.href); return { cacheKey: t.href, url: t.href }; } const r = new URL(n, location.href); const i = new URL(n, location.href); return r.searchParams.set('__WB_REVISION__', e), { cacheKey: r.href, url: i.href }; } class L {constructor() { this.updatedURLs = [], this.notUpdatedURLs = [], this.handlerWillStart = async ({ request: t, state: e }) => { e && (e.originalRequest = t); }, this.cachedResponseWillBeUsed = async ({ event: t, state: e, cachedResponse: s }) => { if (t.type === 'install' && e && e.originalRequest && e.originalRequest instanceof Request) { const t = e.originalRequest.url; s ? this.notUpdatedURLs.push(t) : this.updatedURLs.push(t); } return s; }; }} class b {constructor({ precacheController: t }) { this.cacheKeyWillBeUsed = async ({ request: t, params: e }) => { const s = (e == null ? void 0 : e.cacheKey) || this.L.getCacheKeyForURL(t.url); return s ? new Request(s, { headers: t.headers }) : t; }, this.L = t; }} let E; let C; async function O(t, e) { let n = null; if (t.url) { n = new URL(t.url).origin; } if (n !== self.location.origin) throw new s('cross-origin-copy-response', { origin: n }); const r = t.clone(); const i = { headers: new Headers(r.headers), status: r.status, statusText: r.statusText }; const o = e ? e(i) : i; const c = (function () { if (void 0 === E) { const t = new Response(''); if ('body' in t) try { new Response(t.body), E = !0; } catch (t) { E = !1; }E = !1; } return E; }()) ? r.body : await r.blob(); return new Response(c, o); } class x extends v {
    constructor(t = {}) { t.cacheName = w(t.cacheName), super(t), this._ = !1 !== t.fallbackToNetwork, this.plugins.push(x.copyRedirectedCacheableResponsesPlugin); }

    async U(t, e) { const s = await e.cacheMatch(t); return s || (e.event && e.event.type === 'install' ? await this.C(t, e) : await this.O(t, e)); }

    async O(t, e) { let n; const r = e.params || {}; if (!this._) throw new s('missing-precache-entry', { cacheName: this.cacheName, url: t.url }); { const s = r.integrity; const i = t.integrity; const o = !i || i === s; n = await e.fetch(new Request(t, { integrity: t.mode !== 'no-cors' ? i || s : void 0 })), s && o && t.mode !== 'no-cors' && (this.N(), await e.cachePut(t, n.clone())); } return n; }

    async C(t, e) { this.N(); const n = await e.fetch(t); if (!await e.cachePut(t, n.clone())) throw new s('bad-precaching-response', { url: t.url, status: n.status }); return n; }

    N() { let t = null; let e = 0; for (const [s, n] of this.plugins.entries())n !== x.copyRedirectedCacheableResponsesPlugin && (n === x.defaultPrecacheCacheabilityPlugin && (t = s), n.cacheWillUpdate && e++); e === 0 ? this.plugins.push(x.defaultPrecacheCacheabilityPlugin) : e > 1 && t !== null && this.plugins.splice(t, 1); }
  }x.defaultPrecacheCacheabilityPlugin = { cacheWillUpdate: async ({ response: t }) => (!t || t.status >= 400 ? null : t) }, x.copyRedirectedCacheableResponsesPlugin = { cacheWillUpdate: async ({ response: t }) => (t.redirected ? await O(t) : t) }; class N {
    constructor({ cacheName: t, plugins: e = [], fallbackToNetwork: s = !0 } = {}) { this.W = new Map(), this.k = new Map(), this.K = new Map(), this.u = new x({ cacheName: w(t), plugins: [...e, new b({ precacheController: this })], fallbackToNetwork: s }), this.install = this.install.bind(this), this.activate = this.activate.bind(this); }

    get strategy() { return this.u; }

    precache(t) { this.addToCacheList(t), this.T || (self.addEventListener('install', this.install), self.addEventListener('activate', this.activate), this.T = !0); }

    addToCacheList(t) { const e = []; for (const n of t) { typeof n === 'string' ? e.push(n) : n && void 0 === n.revision && e.push(n.url); const { cacheKey: t, url: r } = U(n); const i = typeof n !== 'string' && n.revision ? 'reload' : 'default'; if (this.W.has(r) && this.W.get(r) !== t) throw new s('add-to-cache-list-conflicting-entries', { firstEntry: this.W.get(r), secondEntry: t }); if (typeof n !== 'string' && n.integrity) { if (this.K.has(t) && this.K.get(t) !== n.integrity) throw new s('add-to-cache-list-conflicting-integrities', { url: r }); this.K.set(t, n.integrity); } if (this.W.set(r, t), this.k.set(r, i), e.length > 0) { const t = `Workbox is precaching URLs without revision info: ${e.join(', ')}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`; console.warn(t); } } }

    install(t) { return q(t, (async () => { const e = new L(); this.strategy.plugins.push(e); for (const [e, s] of this.W) { const n = this.K.get(s); const r = this.k.get(e); const i = new Request(e, { integrity: n, cache: r, credentials: 'same-origin' }); await Promise.all(this.strategy.handleAll({ params: { cacheKey: s }, request: i, event: t })); } const { updatedURLs: s, notUpdatedURLs: n } = e; return { updatedURLs: s, notUpdatedURLs: n }; })); }

    activate(t) { return q(t, (async () => { const t = await self.caches.open(this.strategy.cacheName); const e = await t.keys(); const s = new Set(this.W.values()); const n = []; for (const r of e)s.has(r.url) || (await t.delete(r), n.push(r.url)); return { deletedURLs: n }; })); }

    getURLsToCacheKeys() { return this.W; }

    getCachedURLs() { return [...this.W.keys()]; }

    getCacheKeyForURL(t) { const e = new URL(t, location.href); return this.W.get(e.href); }

    getIntegrityForCacheKey(t) { return this.K.get(t); }

    async matchPrecache(t) { const e = t instanceof Request ? t.url : t; const s = this.getCacheKeyForURL(e); if (s) { return (await self.caches.open(this.strategy.cacheName)).match(s); } }

    createHandlerBoundToURL(t) { const e = this.getCacheKeyForURL(t); if (!e) throw new s('non-precached-url', { url: t }); return (s) => (s.request = new Request(t), s.params = { cacheKey: e, ...s.params }, this.strategy.handle(s)); }
  } const W = () => (C || (C = new N()), C); class k extends r {
    constructor(t, e) {
      super((({ request: s }) => {
        const n = t.getURLsToCacheKeys(); for (const r of (function* (t, {
          ignoreURLParametersMatching: e = [/^utm_/, /^fbclid$/], directoryIndex: s = 'index.html', cleanURLs: n = !0, urlManipulation: r,
        } = {}) { const i = new URL(t, location.href); i.hash = '', yield i.href; const o = (function (t, e = []) { for (const s of [...t.searchParams.keys()])e.some(((t) => t.test(s))) && t.searchParams.delete(s); return t; }(i, e)); if (yield o.href, s && o.pathname.endsWith('/')) { const t = new URL(o.href); t.pathname += s, yield t.href; } if (n) { const t = new URL(o.href); t.pathname += '.html', yield t.href; } if (r) { const t = r({ url: i }); for (const e of t) yield e.href; } }(s.url, e))) { const e = n.get(r); if (e) { return { cacheKey: e, integrity: t.getIntegrityForCacheKey(e) }; } }
      }), t.strategy);
    }
  }t.StaleWhileRevalidate = class extends v {
    constructor(t = {}) { super(t), this.plugins.some(((t) => 'cacheWillUpdate' in t)) || this.plugins.unshift(u); }

    async U(t, e) { const n = e.fetchAndCachePut(t).catch((() => {})); e.waitUntil(n); let r; let i = await e.cacheMatch(t); if (i);else try { i = await n; } catch (t) { t instanceof Error && (r = t); } if (!i) throw new s('no-response', { url: t.url, error: r }); return i; }
  }, t.clientsClaim = function () { self.addEventListener('activate', (() => self.clients.claim())); }, t.precacheAndRoute = function (t, e) { !(function (t) { W().precache(t); }(t)), (function (t) { const e = W(); h(new k(e, t)); }(e)); }, t.registerRoute = h;
}));
// # sourceMappingURL=workbox-f8a04b58.js.map
