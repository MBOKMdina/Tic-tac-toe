// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"96hhY":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "dd9617626d6c392e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"7Gioj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _colourJs = require("./colour.js");
var _ticTacCircleWebp = require("../image/tic-tac-circle.webp");
var _ticTacCircleWebpDefault = parcelHelpers.interopDefault(_ticTacCircleWebp);
var _ticTacXWebp = require("../image/tic-tac-x.webp");
var _ticTacXWebpDefault = parcelHelpers.interopDefault(_ticTacXWebp);
var _xWebp = require("../image/x.webp");
var _xWebpDefault = parcelHelpers.interopDefault(_xWebp);
var _previousePageWebp = require("../image/previouse-page.webp");
var _previousePageWebpDefault = parcelHelpers.interopDefault(_previousePageWebp);
var _doubleBackArrowWebp = require("../image/double-back-arrow.webp");
var _doubleBackArrowWebpDefault = parcelHelpers.interopDefault(_doubleBackArrowWebp);
let classTile = '';
let classTitle = '';
let introduction = JSON.parse(localStorage.getItem('introduction'));
let intervalId;
let playerMove = 'player1';
let tiles = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
];
let tileFree = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
];
let score = JSON.parse(localStorage.getItem('score-pvp')) || {
    player1W: 0,
    player2W: 0
};
let colour = localStorage.getItem('colour') || 'default';
if (introduction) {
    setTimeout(()=>{
        document.querySelector('.js-introduction').innerHTML = '';
        tileActivation();
    }, 5000);
    (0, _colourJs.setBackground)(colour);
    introduction = false;
    localStorage.setItem('introduction', JSON.stringify(introduction));
} else {
    document.querySelector('.js-introduction').innerHTML = '';
    tileActivation();
}
if (colour === 'yellow' || colour === 'white') {
    classTile = "tile-alternate";
    classTitle = "title-black";
}
document.querySelectorAll('.js-player2-score-digit').forEach((player2Score)=>{
    player2Score.innerHTML = `${score.player2W}`;
});
document.querySelectorAll('.js-player1-score-digit').forEach((player1Score)=>{
    player1Score.innerHTML = `${score.player1W}`;
});
/*document.querySelector('.js-options-new-game').addEventListener('mouseover', ()=>
{
    document.querySelector('.js-options-new-game').innerHTML = `
    <img class="icon" src="image/new-game-hover.webp">
    <div class="js-new-game">New Game</div>
    `;
})

document.querySelector('.js-options-new-game').addEventListener('mouseout', ()=>
{
    document.querySelector('.js-options-new-game').innerHTML = `
    <img class="icon" src="image/newGame.webp">
    <div class="js-new-game">New Game</div>
    `;
});*/ document.querySelector('.js-new-game-click').addEventListener('mouseover', ()=>{
    document.querySelector('.js-options-new-game').classList.add('options-div-hover');
});
document.querySelector('.js-new-game-click').addEventListener('mouseout', ()=>{
    document.querySelector('.js-options-new-game').classList.remove('options-div-hover');
});
document.querySelector('.js-settings-click').addEventListener('mouseover', ()=>{
    document.querySelector('.js-options-settings').classList.add('options-div-hover');
});
document.querySelector('.js-settings-click').addEventListener('mouseout', ()=>{
    document.querySelector('.js-options-settings').classList.remove('options-div-hover');
});
document.querySelector('.js-info-click').addEventListener('mouseover', ()=>{
    document.querySelector('.js-options-info').classList.add('options-div-hover');
});
document.querySelector('.js-info-click').addEventListener('mouseout', ()=>{
    document.querySelector('.js-options-info').classList.remove('options-div-hover');
});
document.querySelector('.js-mode-click').addEventListener('mouseover', ()=>{
    document.querySelector('.js-options-mode').classList.add('options-div-hover');
});
document.querySelector('.js-mode-click').addEventListener('mouseout', ()=>{
    document.querySelector('.js-options-mode').classList.remove('options-div-hover');
});
function checkGamestatus() {
    if (tiles[0] === 'player1' && tiles[1] === 'player1' && tiles[2] === 'player1') {
        score.player1W++;
        document.querySelectorAll('.js-player1-score-digit').forEach((player1Score)=>{
            player1Score.innerHTML = `${score.player1W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player O wins!');
    } else if (tiles[3] === 'player1' && tiles[4] === 'player1' && tiles[5] === 'player1') {
        score.player1W++;
        document.querySelectorAll('.js-player1-score-digit').forEach((player1Score)=>{
            player1Score.innerHTML = `${score.player1W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player O wins!');
    } else if (tiles[6] === 'player1' && tiles[7] === 'player1' && tiles[8] === 'player1') {
        score.player1W++;
        document.querySelectorAll('.js-player1-score-digit').forEach((player1Score)=>{
            player1Score.innerHTML = `${score.player1W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player O wins!');
    } else if (tiles[0] === 'player1' && tiles[3] === 'player1' && tiles[6] === 'player1') {
        score.player1W++;
        document.querySelectorAll('.js-player1-score-digit').forEach((player1Score)=>{
            player1Score.innerHTML = `${score.player1W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player O wins!');
    } else if (tiles[1] === 'player1' && tiles[4] === 'player1' && tiles[7] === 'player1') {
        score.player1W++;
        document.querySelectorAll('.js-player1-score-digit').forEach((player1Score)=>{
            player1Score.innerHTML = `${score.player1W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player O wins!');
    } else if (tiles[2] === 'player1' && tiles[5] === 'player1' && tiles[8] === 'player1') {
        score.player1W++;
        document.querySelectorAll('.js-player1-score-digit').forEach((player1Score)=>{
            player1Score.innerHTML = `${score.player1W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player O wins!');
    } else if (tiles[2] === 'player1' && tiles[4] === 'player1' && tiles[6] === 'player1') {
        score.player1W++;
        document.querySelectorAll('.js-player1-score-digit').forEach((player1Score)=>{
            player1Score.innerHTML = `${score.player1W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player O wins!');
    } else if (tiles[0] === 'player1' && tiles[4] === 'player1' && tiles[8] === 'player1') {
        score.player1W++;
        document.querySelectorAll('.js-player1-score-digit').forEach((player1Score)=>{
            player1Score.innerHTML = `${score.player1W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player O wins!');
    } else if (tiles[0] === 'player2' && tiles[1] === 'player2' && tiles[2] === 'player2') {
        score.player2W++;
        document.querySelectorAll('.js-player2-score-digit').forEach((player2Score)=>{
            player2Score.innerHTML = `${score.player2W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player X wins!');
    } else if (tiles[3] === 'player2' && tiles[4] === 'player2' && tiles[5] === 'player2') {
        score.player2W++;
        document.querySelectorAll('.js-player2-score-digit').forEach((player2Score)=>{
            player2Score.innerHTML = `${score.player2W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player X wins!');
    } else if (tiles[6] === 'player2' && tiles[7] === 'player2' && tiles[8] === 'player2') {
        score.player2W++;
        document.querySelectorAll('.js-player2-score-digit').forEach((player2Score)=>{
            player2Score.innerHTML = `${score.player2W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player X wins!');
    } else if (tiles[0] === 'player2' && tiles[3] === 'player2' && tiles[6] === 'player2') {
        score.player2W++;
        document.querySelectorAll('.js-player2-score-digit').forEach((player2Score)=>{
            player2Score.innerHTML = `${score.player2W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player X wins!');
    } else if (tiles[1] === 'player2' && tiles[4] === 'player2' && tiles[7] === 'player2') {
        score.player2W++;
        document.querySelectorAll('.js-player2-score-digit').forEach((player2Score)=>{
            player2Score.innerHTML = `${score.player2W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player X wins!');
    } else if (tiles[2] === 'player2' && tiles[5] === 'player2' && tiles[8] === 'player2') {
        score.player2W++;
        document.querySelectorAll('.js-player2-score-digit').forEach((player2Score)=>{
            player2Score.innerHTML = `${score.player2W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player X wins!');
    } else if (tiles[2] === 'player2' && tiles[4] === 'player2' && tiles[6] === 'player2') {
        score.player2W++;
        document.querySelectorAll('.js-player2-score-digit').forEach((player2Score)=>{
            player2Score.innerHTML = `${score.player2W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player X wins!');
    } else if (tiles[0] === 'player2' && tiles[4] === 'player2' && tiles[8] === 'player2') {
        score.player2W++;
        document.querySelectorAll('.js-player2-score-digit').forEach((player2Score)=>{
            player2Score.innerHTML = `${score.player2W}`;
        });
        localStorage.setItem('score-pvp', JSON.stringify(score));
        winnerMessage('Player X wins!');
    } else {
        let check = [
            tileFree[0],
            tileFree[1],
            tileFree[2],
            tileFree[3],
            tileFree[4],
            tileFree[5],
            tileFree[6],
            tileFree[7],
            tileFree[8]
        ];
        let countSpace = 0;
        for(let i = 0; i < check.length; i++)if (check[i] === false) countSpace++;
        if (countSpace === 9) reset();
    }
}
function reset() {
    tileFree = [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
    ];
    tiles = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        ''
    ];
    document.querySelectorAll(`.js-tile`).forEach((tile)=>{
        tile.innerHTML = '';
    });
}
document.querySelector('.js-new-game-click').addEventListener('click', ()=>{
    newGameClick();
});
let newGame = document.querySelectorAll(".js-options-new-game");
newGame.forEach((gameDiv)=>{
    gameDiv.addEventListener("click", ()=>{
        newGameClick();
    });
});
document.querySelector('.js-settings-click').addEventListener('click', ()=>{
    settingsClick();
});
let settings = document.querySelectorAll(".js-options-settings");
settings.forEach((settingsDiv)=>{
    settingsDiv.addEventListener("click", ()=>{
        settingsClick();
    });
});
function winnerMessage(statement) {
    document.querySelector('.js-containment-interface').innerHTML = `
    <div class="title ${classTitle} js-title">tic-tac-toe</div>
    <div class="interface">
        <div class="tile js-tile-1 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-2 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-3 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-4 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-5 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-6 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-7 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-8 js-tile-color ${classTile}"></div>
        <div class="tile js-tile-9 js-tile-color ${classTile}"></div>
    </div>
    <div class=" js-status-message status-message">
        <div class="status-message-inside-content">
            <div>${statement}</div>
        </div>
    </div>
    `;
    setTimeout(()=>{
        document.querySelector('.js-status-message').classList.add('fade-out');
    }, 2000);
    setTimeout(()=>{
        clearInterval(intervalId);
        document.querySelector('.js-containment-interface').innerHTML = `
        <div class="title ${classTitle} js-title">tic-tac-toe</div>
        <div class="interface">
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
        </div>
        <div class="temp-disable-div js-temp-disable"></div>
        `;
        tileActivation();
    }, 3000);
}
document.querySelector('.js-info-click').addEventListener('click', ()=>{
    infoClick();
});
let info = document.querySelectorAll(".js-options-info");
info.forEach((infoDiv)=>{
    infoDiv.addEventListener("click", ()=>{
        infoClick();
    });
});
document.querySelector('.js-mode-click').addEventListener('click', ()=>{
    modeClick();
});
let mode = document.querySelectorAll(".js-options-mode");
mode.forEach((modeDiv)=>{
    modeDiv.addEventListener("click", ()=>{
        modeClick();
    });
});
function tileActivation() {
    reset();
    document.querySelectorAll(`.js-tile`).forEach((tile)=>{
        tile.addEventListener('click', ()=>{
            let tileIndex = tile.dataset.tileNo - 1;
            if (tileFree[tileIndex] && playerMove === 'player1') {
                playerMove = 'player2';
                tile.innerHTML = `<img class="js-move grow move" src="${0, _ticTacCircleWebpDefault.default}">`;
                tileFree[tileIndex] = false;
                tiles[tileIndex] = 'player1';
                technicalities();
                let check = [
                    tileFree[0],
                    tileFree[1],
                    tileFree[2],
                    tileFree[3],
                    tileFree[4],
                    tileFree[5],
                    tileFree[6],
                    tileFree[7],
                    tileFree[8]
                ];
                let countSpace = 0;
            } else if (tileFree[tileIndex] && playerMove === 'player2') {
                playerMove = 'player1';
                tile.innerHTML = `<img class="js-move grow move" src="${0, _ticTacXWebpDefault.default}">`;
                tileFree[tileIndex] = false;
                tiles[tileIndex] = 'player2';
                technicalities();
                let check = [
                    tileFree[0],
                    tileFree[1],
                    tileFree[2],
                    tileFree[3],
                    tileFree[4],
                    tileFree[5],
                    tileFree[6],
                    tileFree[7],
                    tileFree[8]
                ];
                let countSpace = 0;
            }
        });
    });
}
function closeWindowSettings() {
    document.querySelector('.js-x-div').addEventListener('click', ()=>{
        document.querySelector('.js-containment-interface').innerHTML = `
        <div class="title ${classTitle} js-title">tic-tac-toe</div>
        <div class="interface">
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
        </div>
        <div class="temp-disable-div js-temp-disable"></div>
        `;
        tileActivation();
    });
}
function previousePage() {
    document.querySelector('.js-previouse-div').addEventListener('click', ()=>{
        document.querySelector('.js-containment-interface').innerHTML = `
        <div class="title ${classTitle} js-title">tic-tac-toe</div>
        <div class="interface">
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
        </div>
        <div class="settings-ui">
            <div class="settings-heading">
                <div class="settings">Settings</div>
                <div class="x-div js-x-div">
                    <img class="x-img" src="${0, _xWebpDefault.default}">
                </div>
            </div>
            <div>
                <div class="colour-div js-colour-div">Change background colour</div>
                <div class="difficulty-div js-difficulty-div">Change difficulty level</div>
            </div>
        </div>
        `;
        closeWindowSettings();
        document.querySelector('.js-difficulty-div').addEventListener('click', ()=>{
            document.querySelector('.js-containment-interface').innerHTML = `
            <div class="title ${classTitle} js-title">tic-tac-toe</div>
            <div class="interface">
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
            </div>
            <div class="settings-ui-difficulty">
                <div class="settings-heading">
                    <div class="settings-difficulty">Settings</div>
                    <div class="x-div js-x-div">
                        <img class="x-img" src="${0, _xWebpDefault.default}">
                    </div>
                    <div class="previouse-div js-previouse-div">
                        <img class="previouse-img" src="${0, _previousePageWebpDefault.default}">
                    </div>
                </div>
                <div>
                    <div class="difficulty-div js-easy">Easy</div>
                    <div class="difficulty-div js-medium">Medium</div>
                    <div class="difficulty-div js-hard">Hard</div>
                </div>
            </div>
            `;
            closeWindowSettings();
            previousePage();
            selectDifficulty();
        });
        document.querySelector('.js-colour-div').addEventListener('click', ()=>{
            document.querySelector('.js-containment-interface').innerHTML = `
            <div class="title ${classTitle} js-title">tic-tac-toe</div>
            <div class="interface">
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
                <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
            </div>
            <div class="settings-ui">
                <div class="settings-heading">
                    <div class="settings">Settings</div>
                    <div class="x-div js-x-div">
                        <img class="x-img" src="${0, _xWebpDefault.default}">
                    </div>
                    <div class="previouse-div js-previouse-div">
                        <img class="previouse-img" src="${0, _previousePageWebpDefault.default}">
                    </div>
                </div>
                <div class="settings-content-colour">
                    <div class="colour-palette">
                        <div class="default js-default"></div>
                        <div class="purple js-purple"></div>
                        <div class="blue js-blue"></div>
                        <div class="green js-green"></div>
                        <div class="black js-black"></div>
                        <div class="brown js-brown"></div>
                        <div class="orange js-orange"></div>
                        <div class="yellow js-yellow"></div>
                        <div class="white js-white"></div>
                    </div>
                </div>
            </div>
            `;
            closeWindowSettings();
            document.querySelector('.js-default').addEventListener('click', ()=>{
                (0, _colourJs.setBackground)('default', classTile);
                colour = 'default';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            document.querySelector('.js-purple').addEventListener('click', ()=>{
                (0, _colourJs.setBackground)('purple', classTile);
                colour = 'purple';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            document.querySelector('.js-blue').addEventListener('click', ()=>{
                (0, _colourJs.setBackground)('blue', classTile);
                colour = 'blue';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            document.querySelector('.js-green').addEventListener('click', ()=>{
                (0, _colourJs.setBackground)('green', classTile);
                colour = 'green';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            document.querySelector('.js-black').addEventListener('click', ()=>{
                (0, _colourJs.setBackground)('black', classTile);
                colour = 'black';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            document.querySelector('.js-brown').addEventListener('click', ()=>{
                (0, _colourJs.setBackground)('brown', classTile);
                colour = 'brown';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            document.querySelector('.js-orange').addEventListener('click', ()=>{
                (0, _colourJs.setBackground)('orange', classTile);
                colour = 'orange';
                localStorage.setItem('colour', colour);
                classTile = '';
            });
            document.querySelector('.js-yellow').addEventListener('click', ()=>{
                (0, _colourJs.setBackground)('yellow', classTile);
                colour = 'yellow';
                localStorage.setItem('colour', colour);
                classTile = 'tile-alternate';
            });
            document.querySelector('.js-white').addEventListener('click', ()=>{
                (0, _colourJs.setBackground)('white', classTile);
                colour = 'white';
                localStorage.setItem('colour', colour);
                classTile = 'tile-alternate';
            });
            previousePage();
        });
    });
}
function newGameClick() {
    reset();
    localStorage.removeItem('score-pvp');
    score = {
        player1W: 0,
        player2W: 0
    };
    document.querySelectorAll('.js-player2-score-digit').forEach((player2Score)=>{
        player2Score.innerHTML = `${score.player2W}`;
    });
    document.querySelectorAll('.js-player1-score-digit').forEach((player1Score)=>{
        player1Score.innerHTML = `${score.player1W}`;
    });
}
function settingsClick() {
    document.querySelector('.js-containment-interface').innerHTML = `
    <div class="title ${classTitle} js-title">tic-tac-toe</div>
    <div class="interface">
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
        <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
    </div>
    <div class="settings-ui">
        <div class="settings-heading">
            <div class="settings">Settings</div>
            <div class="x-div js-x-div">
                <img class="x-img" src="${0, _xWebpDefault.default}">
            </div>
        </div>
        <div class="settings-content-colour">
            <div class="colour-palette">
                <div class="default js-default"></div>
                <div class="purple js-purple"></div>
                <div class="blue js-blue"></div>
                <div class="green js-green"></div>
                <div class="black js-black"></div>
                <div class="brown js-brown"></div>
                <div class="orange js-orange"></div>
                <div class="yellow js-yellow"></div>
                <div class="white js-white"></div>
            </div>
        </div>
    </div>
    `;
    closeWindowSettings();
    document.querySelector('.js-default').addEventListener('click', ()=>{
        (0, _colourJs.setBackground)('default', classTile);
        colour = 'default';
        localStorage.setItem('colour', colour);
        classTile = '';
        classTitle = '';
    });
    document.querySelector('.js-purple').addEventListener('click', ()=>{
        (0, _colourJs.setBackground)('purple', classTile);
        colour = 'purple';
        localStorage.setItem('colour', colour);
        classTile = '';
        classTitle = '';
    });
    document.querySelector('.js-blue').addEventListener('click', ()=>{
        (0, _colourJs.setBackground)('blue', classTile);
        colour = 'blue';
        localStorage.setItem('colour', colour);
        classTile = '';
        classTitle = '';
    });
    document.querySelector('.js-green').addEventListener('click', ()=>{
        (0, _colourJs.setBackground)('green', classTile);
        colour = 'green';
        localStorage.setItem('colour', colour);
        classTile = '';
        classTitle = '';
    });
    document.querySelector('.js-black').addEventListener('click', ()=>{
        (0, _colourJs.setBackground)('black', classTile);
        colour = 'black';
        localStorage.setItem('colour', colour);
        classTile = '';
        classTitle = '';
    });
    document.querySelector('.js-brown').addEventListener('click', ()=>{
        (0, _colourJs.setBackground)('brown', classTile);
        colour = 'brown';
        localStorage.setItem('colour', colour);
        classTile = '';
        classTitle = '';
    });
    document.querySelector('.js-orange').addEventListener('click', ()=>{
        (0, _colourJs.setBackground)('orange', classTile);
        colour = 'orange';
        localStorage.setItem('colour', colour);
        classTile = '';
        classTitle = "title-black";
    });
    document.querySelector('.js-yellow').addEventListener('click', ()=>{
        (0, _colourJs.setBackground)('yellow', classTile);
        colour = 'yellow';
        localStorage.setItem('colour', colour);
        classTile = 'tile-alternate';
        classTitle = "title-black";
    });
    document.querySelector('.js-white').addEventListener('click', ()=>{
        (0, _colourJs.setBackground)('white', classTile);
        colour = 'white';
        localStorage.setItem('colour', colour);
        classTile = 'tile-alternate';
        classTitle = "title-black";
    });
}
function infoClick() {
    document.querySelector('.js-containment-interface').innerHTML = `
    <div class="info-ui">
        <div class="info-heading">
            <div class="x-info-div js-close">
                <div class="x-info-container">
                    <img class="x-info" src="${0, _doubleBackArrowWebpDefault.default}">
                </div>
                <div class="x-info-text">Back</div>
            </div>
        </div>
        <div class="references">
            <p class="paragraph-title">References</p>
            <p class="paragraph">
                All icons/images used in this program were sourced from google and is not my own design. A list of references is provided below
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/setting_2040504?term=settings&page=1&position=1&origin=tag&related_id=2040504" title="settings icons">Settings icon</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/versus_14611398?term=vs&page=1&position=7&origin=tag&related_id=14611398" title="vs icons">Vs icon</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/add-post_11366824?term=add+list&page=1&position=5&origin=tag&related_id=11366824" title="add list icons">Start new game icon</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/information_545674?term=information&page=1&position=5&origin=tag&related_id=545674" title="information icons">information icon</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/profile-picture_12225935" title="profile picture icons">Player profile picture icon</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/keyboard-and-mouse_18258975?term=keyboard+and+mouse&page=1&position=79&origin=search&related_id=18258975" title="keyboard icons">PC profile picture icon</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/left-arrow_2926229?term=double+back+arrow&page=4&position=18&origin=search&related_id=2926229" title="left arrow icons">double back arrow decorative</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/remote-control_1758162?term=controller&page=2&position=55&origin=search&related_id=1758162" title="vr gaming icons">back to gamemode select creen icon</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/arrow_5772124?term=back+arrow&page=2&position=7&origin=search&related_id=5772124" title="back arrow icons">previouse window icon</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/tic-tac-toe_13072605?term=tic+tac+toe&page=1&position=26&origin=tag&related_id=13072605" title="tic tac toe icons">tic tac toe poster image</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/versus_6327905" title="versus icons">player vs player icon</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/desktop-computer_2704234?term=computer&page=1&position=35&origin=tag&related_id=2704234" title="computer icons">player vs computer icon</a>
                <br>
                <br>
                <a href="https://www.flaticon.com/free-icon/cancel_722133?term=close&page=1&position=74&origin=search&related_id=722133" title="close icons">Close UI icon</a>
                <br>
                <br>
                <a href="https://commons.wikimedia.org/wiki/File:NotoSans_-_Cancellation_X_-_1F5D9.svg" title="x-icon">X-move</a>
                <br>
                <br>
                <a href="https://webpimg.com/image/87386" title="o-icon">O-move</a>
            </p>
        </div>
    </div>`;
    document.querySelector('.js-close').addEventListener('click', ()=>{
        document.querySelector('.js-containment-interface').innerHTML = `
        <div class="title ${classTitle} js-title">tic-tac-toe</div>
        <div class="interface">
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="1"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="2"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="3"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="4"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="5"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="6"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="7"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="8"></div>
            <div class="tile js-tile js-tile-color ${classTile}" data-tile-no="9"></div>
        </div>
        <div class="temp-disable-div js-temp-disable"></div>
        `;
        tileActivation();
    });
}
function modeClick() {
    window.close('pvc.html');
    window.open('index.html');
}
function technicalities() {
    document.querySelectorAll(`.js-move`).forEach((move)=>{
        move.addEventListener("animationend", ()=>{
            move.classList.remove("grow");
            checkGamestatus();
        });
    });
}

},{"./colour.js":"3uSij","../image/tic-tac-circle.webp":"7pcK7","../image/tic-tac-x.webp":"1nMvw","../image/x.webp":"hPdVO","../image/previouse-page.webp":"cZL7t","../image/double-back-arrow.webp":"5xQPP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3uSij":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setBackground", ()=>setBackground);
function setBackground(colour) {
    if (colour === 'default') {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if (body.classList.contains('purple-back-ground')) body.classList.remove('purple-back-ground');
        else if (body.classList.contains('blue-back-ground')) body.classList.remove('blue-back-ground');
        else if (body.classList.contains('green-back-ground')) body.classList.remove('green-back-ground');
        else if (body.classList.contains('black-back-ground')) body.classList.remove('black-back-ground');
        else if (body.classList.contains('brown-back-ground')) body.classList.remove('brown-back-ground');
        else if (body.classList.contains('orange-back-ground')) body.classList.remove('orange-back-ground');
        else if (body.classList.contains('yellow-back-ground')) body.classList.remove('yellow-back-ground');
        else if (body.classList.contains('white-back-ground')) body.classList.remove('white-back-ground');
        if (title.classList.contains('title-black')) title.classList.remove('title-black');
        for(let i = 0; i < tile.length; i++)if (tile[i].classList.contains('tile-alternate')) tile[i].classList.remove('tile-alternate');
    } else if (colour === 'purple') {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if (body.classList.contains('blue-back-ground')) body.classList.remove('blue-back-ground');
        else if (body.classList.contains('green-back-ground')) body.classList.remove('green-back-ground');
        else if (body.classList.contains('black-back-ground')) body.classList.remove('black-back-ground');
        else if (body.classList.contains('brown-back-ground')) body.classList.remove('brown-back-ground');
        else if (body.classList.contains('orange-back-ground')) body.classList.remove('orange-back-ground');
        else if (body.classList.contains('yellow-back-ground')) body.classList.remove('yellow-back-ground');
        else if (body.classList.contains('white-back-ground')) body.classList.remove('white-back-ground');
        body.classList.add('purple-back-ground');
        if (title.classList.contains('title-black')) title.classList.remove('title-black');
        for(let i = 0; i < tile.length; i++)if (tile[i].classList.contains('tile-alternate')) tile[i].classList.remove('tile-alternate');
    } else if (colour === 'blue') {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if (body.classList.contains('purple-back-ground')) body.classList.remove('purple-back-ground');
        else if (body.classList.contains('green-back-ground')) body.classList.remove('green-back-ground');
        else if (body.classList.contains('black-back-ground')) body.classList.remove('black-back-ground');
        else if (body.classList.contains('brown-back-ground')) body.classList.remove('brown-back-ground');
        else if (body.classList.contains('orange-back-ground')) body.classList.remove('orange-back-ground');
        else if (body.classList.contains('yellow-back-ground')) body.classList.remove('yellow-back-ground');
        else if (body.classList.contains('white-back-ground')) body.classList.remove('white-back-ground');
        body.classList.add('blue-back-ground');
        if (title.classList.contains('title-black')) title.classList.remove('title-black');
        for(let i = 0; i < tile.length; i++)if (tile[i].classList.contains('tile-alternate')) tile[i].classList.remove('tile-alternate');
    } else if (colour === 'green') {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if (body.classList.contains('purple-back-ground')) body.classList.remove('purple-back-ground');
        else if (body.classList.contains('blue-back-ground')) body.classList.remove('blue-back-ground');
        else if (body.classList.contains('black-back-ground')) body.classList.remove('black-back-ground');
        else if (body.classList.contains('brown-back-ground')) body.classList.remove('brown-back-ground');
        else if (body.classList.contains('orange-back-ground')) body.classList.remove('orange-back-ground');
        else if (body.classList.contains('yellow-back-ground')) body.classList.remove('yellow-back-ground');
        else if (body.classList.contains('white-back-ground')) body.classList.remove('white-back-ground');
        body.classList.add('green-back-ground');
        if (title.classList.contains('title-black')) title.classList.remove('title-black');
        for(let i = 0; i < tile.length; i++)if (tile[i].classList.contains('tile-alternate')) tile[i].classList.remove('tile-alternate');
    } else if (colour === 'black') {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if (body.classList.contains('purple-back-ground')) body.classList.remove('purple-back-ground');
        else if (body.classList.contains('blue-back-ground')) body.classList.remove('blue-back-ground');
        else if (body.classList.contains('green-back-ground')) body.classList.remove('green-back-ground');
        else if (body.classList.contains('brown-back-ground')) body.classList.remove('brown-back-ground');
        else if (body.classList.contains('orange-back-ground')) body.classList.remove('orange-back-ground');
        else if (body.classList.contains('yellow-back-ground')) body.classList.remove('yellow-back-ground');
        else if (body.classList.contains('white-back-ground')) body.classList.remove('white-back-ground');
        body.classList.add('black-back-ground');
        if (title.classList.contains('title-black')) title.classList.remove('title-black');
        for(let i = 0; i < tile.length; i++)if (tile[i].classList.contains('tile-alternate')) tile[i].classList.remove('tile-alternate');
    } else if (colour === 'brown') {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if (body.classList.contains('purple-back-ground')) body.classList.remove('purple-back-ground');
        else if (body.classList.contains('blue-back-ground')) body.classList.remove('blue-back-ground');
        else if (body.classList.contains('green-back-ground')) body.classList.remove('green-back-ground');
        else if (body.classList.contains('black-back-ground')) body.classList.remove('black-back-ground');
        else if (body.classList.contains('orange-back-ground')) body.classList.remove('orange-back-ground');
        else if (body.classList.contains('yellow-back-ground')) body.classList.remove('yellow-back-ground');
        else if (body.classList.contains('white-back-ground')) body.classList.remove('white-back-ground');
        body.classList.add('brown-back-ground');
        if (title.classList.contains('title-black')) title.classList.remove('title-black');
        for(let i = 0; i < tile.length; i++)if (tile[i].classList.contains('tile-alternate')) tile[i].classList.remove('tile-alternate');
    } else if (colour === 'orange') {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if (body.classList.contains('purple-back-ground')) body.classList.remove('purple-back-ground');
        else if (body.classList.contains('blue-back-ground')) body.classList.remove('blue-back-ground');
        else if (body.classList.contains('green-back-ground')) body.classList.remove('green-back-ground');
        else if (body.classList.contains('black-back-ground')) body.classList.remove('black-back-ground');
        else if (body.classList.contains('brown-back-ground')) body.classList.remove('brown-back-ground');
        else if (body.classList.contains('yellow-back-ground')) body.classList.remove('yellow-back-ground');
        else if (body.classList.contains('white-back-ground')) body.classList.remove('white-back-ground');
        body.classList.add('orange-back-ground');
        if (title.classList.contains('title-black')) ;
        else title.classList.add('title-black');
        for(let i = 0; i < tile.length; i++)if (tile[i].classList.contains('tile-alternate')) tile[i].classList.remove('tile-alternate');
    } else if (colour === 'yellow') {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if (body.classList.contains('purple-back-ground')) body.classList.remove('purple-back-ground');
        else if (body.classList.contains('blue-back-ground')) body.classList.remove('blue-back-ground');
        else if (body.classList.contains('green-back-ground')) body.classList.remove('green-back-ground');
        else if (body.classList.contains('black-back-ground')) body.classList.remove('black-back-ground');
        else if (body.classList.contains('brown-back-ground')) body.classList.remove('brown-back-ground');
        else if (body.classList.contains('orange-back-ground')) body.classList.remove('orange-back-ground');
        else if (body.classList.contains('white-back-ground')) body.classList.remove('white-back-ground');
        body.classList.add('yellow-back-ground');
        if (title.classList.contains('title-black')) ;
        else title.classList.add('title-black');
        for(let i = 0; i < tile.length; i++){
            if (tile[i].classList.contains('tile-alternate')) ;
            else tile[i].classList.add('tile-alternate');
        }
    } else if (colour === 'white') {
        let body = document.querySelector('.js-body');
        let title = document.querySelector('.js-title');
        let tile = document.querySelectorAll('.js-tile-color');
        if (body.classList.contains('purple-back-ground')) body.classList.remove('purple-back-ground');
        else if (body.classList.contains('blue-back-ground')) body.classList.remove('blue-back-ground');
        else if (body.classList.contains('green-back-ground')) body.classList.remove('green-back-ground');
        else if (body.classList.contains('black-back-ground')) body.classList.remove('black-back-ground');
        else if (body.classList.contains('brown-back-ground')) body.classList.remove('brown-back-ground');
        else if (body.classList.contains('orange-back-ground')) body.classList.remove('orange-back-ground');
        else if (body.classList.contains('yellow-back-ground')) body.classList.remove('yellow-back-ground');
        body.classList.add('white-back-ground');
        if (title.classList.contains('title-black')) ;
        else title.classList.add('title-black');
        for(let i = 0; i < tile.length; i++){
            if (tile[i].classList.contains('tile-alternate')) ;
            else tile[i].classList.add('tile-alternate');
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7pcK7":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("tic-tac-circle.4d92d27d.webp") + "?" + Date.now();

},{}],"1nMvw":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("tic-tac-x.e950ecb0.webp") + "?" + Date.now();

},{}],"hPdVO":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("x.04901b13.webp") + "?" + Date.now();

},{}],"cZL7t":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("previouse-page.d4c14804.webp") + "?" + Date.now();

},{}],"5xQPP":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("double-back-arrow.117632e5.webp") + "?" + Date.now();

},{}]},["96hhY","7Gioj"], "7Gioj", "parcelRequire94c2", {}, "./", "/")

//# sourceMappingURL=pvp.6d6c392e.js.map
