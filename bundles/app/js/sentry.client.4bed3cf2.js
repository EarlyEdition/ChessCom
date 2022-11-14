!function() {
    var e, t, n, r, i = {
        991: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return getGlobalObject
                },
                Y: function() {
                    return getGlobalSingleton
                }
            });
            var r = n(448)
              , i = {};
            function getGlobalObject() {
                return (0,
                r.KV)() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : i
            }
            function getGlobalSingleton(e, t, n) {
                var r = n || getGlobalObject()
                  , i = r.__SENTRY__ = r.__SENTRY__ || {};
                return i[e] || (i[e] = t())
            }
        },
        448: function(e, t, n) {
            "use strict";
            n.d(t, {
                l$: function() {
                    return dynamicRequire
                },
                KV: function() {
                    return isNodeEnv
                }
            }),
            e = n.hmd(e);
            var r = n(155);
            function isNodeEnv() {
                return !function isBrowserBundle() {
                    return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
                }() && "[object process]" === Object.prototype.toString.call(void 0 !== r ? r : 0)
            }
            function dynamicRequire(e, t) {
                return e.require(t)
            }
        },
        170: function(e, t, n) {
            "use strict";
            n.d(t, {
                yW: function() {
                    return u
                },
                ph: function() {
                    return c
                }
            });
            var r = n(991)
              , i = n(448);
            e = n.hmd(e);
            var o = {
                nowSeconds: function() {
                    return Date.now() / 1e3
                }
            };
            var s = (0,
            i.KV)() ? function getNodePerformance() {
                try {
                    return (0,
                    i.l$)(e, "perf_hooks").performance
                } catch (t) {
                    return
                }
            }() : function getBrowserPerformance() {
                var e = (0,
                r.R)().performance;
                if (e && e.now)
                    return {
                        now: function() {
                            return e.now()
                        },
                        timeOrigin: Date.now() - e.now()
                    }
            }()
              , a = void 0 === s ? o : {
                nowSeconds: function() {
                    return (s.timeOrigin + s.now()) / 1e3
                }
            }
              , u = o.nowSeconds.bind(o)
              , c = a.nowSeconds.bind(a);
            !function() {
                var e = (0,
                r.R)().performance;
                if (e && e.now) {
                    var t = 36e5
                      , n = e.now()
                      , i = Date.now()
                      , o = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t
                      , s = o < t
                      , a = e.timing && e.timing.navigationStart
                      , u = "number" == typeof a ? Math.abs(a + n - i) : t;
                    return s || u < t ? o <= u ? ("timeOrigin",
                    e.timeOrigin) : ("navigationStart",
                    a) : ("dateNow",
                    i)
                }
                "none"
            }()
        },
        155: function(e) {
            var t, n, r = e.exports = {};
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined")
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined")
            }
            function runTimeout(e) {
                if (t === setTimeout)
                    return setTimeout(e, 0);
                if ((t === defaultSetTimout || !t) && setTimeout)
                    return t = setTimeout,
                    setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }
            !function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
                } catch (e) {
                    t = defaultSetTimout
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
                } catch (e) {
                    n = defaultClearTimeout
                }
            }();
            var i, o = [], s = !1, a = -1;
            function cleanUpNextTick() {
                s && i && (s = !1,
                i.length ? o = i.concat(o) : a = -1,
                o.length && drainQueue())
            }
            function drainQueue() {
                if (!s) {
                    var e = runTimeout(cleanUpNextTick);
                    s = !0;
                    for (var t = o.length; t; ) {
                        for (i = o,
                        o = []; ++a < t; )
                            i && i[a].run();
                        a = -1,
                        t = o.length
                    }
                    i = null,
                    s = !1,
                    function runClearTimeout(e) {
                        if (n === clearTimeout)
                            return clearTimeout(e);
                        if ((n === defaultClearTimeout || !n) && clearTimeout)
                            return n = clearTimeout,
                            clearTimeout(e);
                        try {
                            return n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(e)
                }
            }
            function Item(e, t) {
                this.fun = e,
                this.array = t
            }
            function noop() {}
            r.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                o.push(new Item(e,t)),
                1 !== o.length || s || runTimeout(drainQueue)
            }
            ,
            Item.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            r.title = "browser",
            r.browser = !0,
            r.env = {},
            r.argv = [],
            r.version = "",
            r.versions = {},
            r.on = noop,
            r.addListener = noop,
            r.once = noop,
            r.off = noop,
            r.removeListener = noop,
            r.removeAllListeners = noop,
            r.emit = noop,
            r.prependListener = noop,
            r.prependOnceListener = noop,
            r.listeners = function(e) {
                return []
            }
            ,
            r.binding = function(e) {
                throw new Error("process.binding is not supported")
            }
            ,
            r.cwd = function() {
                return "/"
            }
            ,
            r.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            r.umask = function() {
                return 0
            }
        }
    }, o = {};
    function __webpack_require__(e) {
        var t = o[e];
        if (void 0 !== t)
            return t.exports;
        var n = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return i[e](n, n.exports, __webpack_require__),
        n.loaded = !0,
        n.exports
    }
    __webpack_require__.d = function(e, t) {
        for (var n in t)
            __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    __webpack_require__.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }),
        e
    }
    ,
    __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    e = __webpack_require__.u,
    t = __webpack_require__.e,
    n = new Map,
    r = new Map,
    __webpack_require__.u = function(t) {
        return e(t) + (n.has(t) ? "?" + n.get(t) : "")
    }
    ,
    __webpack_require__.e = function(i) {
        return t(i).catch((function(t) {
            var o = r.has(i) ? r.get(i) : 2;
            if (o < 1) {
                var s = e(i);
                throw t.message = "Loading chunk " + i + " failed after 2 retries.\n(" + s + ")",
                t.request = s,
                t
            }
            return new Promise((function(e) {
                setTimeout((function() {
                    var t = "cache-bust=true&retry-attempt=" + (2 - o + 1);
                    n.set(i, t),
                    r.set(i, o - 1),
                    e(__webpack_require__.e(i))
                }
                ), 0)
            }
            ))
        }
        ))
    }
    ,
    function() {
        "use strict";
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var extendStatics = function(e, t) {
            return extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            ,
            extendStatics(e, t)
        };
        function __extends(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function __() {
                this.constructor = e
            }
            extendStatics(e, t),
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
            new __)
        }
        var __assign = function() {
            return __assign = Object.assign || function __assign(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ,
            __assign.apply(this, arguments)
        };
        Object.create;
        function __values(e) {
            var t = "function" == typeof Symbol && Symbol.iterator
              , n = t && e[t]
              , r = 0;
            if (n)
                return n.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function tslib_es6_read(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, i, o = n.call(e), s = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
                    s.push(r.value)
            } catch (a) {
                i = {
                    error: a
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return s
        }
        function tslib_es6_spread() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(tslib_es6_read(arguments[t]));
            return e
        }
        Object.create;
        var e = __webpack_require__(991)
          , t = Object.prototype.toString;
        function isError(e) {
            switch (t.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return isInstanceOf(e, Error)
            }
        }
        function isBuiltin(e, n) {
            return t.call(e) === "[object " + n + "]"
        }
        function isErrorEvent(e) {
            return isBuiltin(e, "ErrorEvent")
        }
        function isDOMError(e) {
            return isBuiltin(e, "DOMError")
        }
        function isString(e) {
            return isBuiltin(e, "String")
        }
        function is_isPrimitive(e) {
            return null === e || "object" != typeof e && "function" != typeof e
        }
        function isPlainObject(e) {
            return isBuiltin(e, "Object")
        }
        function isEvent(e) {
            return "undefined" != typeof Event && isInstanceOf(e, Event)
        }
        function isThenable(e) {
            return Boolean(e && e.then && "function" == typeof e.then)
        }
        function isInstanceOf(e, t) {
            try {
                return e instanceof t
            } catch (n) {
                return !1
            }
        }
        function htmlTreeAsString(e, t) {
            try {
                for (var n = e, r = [], i = 0, o = 0, s = " > ".length, a = void 0; n && i++ < 5 && !("html" === (a = _htmlElementAsString(n, t)) || i > 1 && o + r.length * s + a.length >= 80); )
                    r.push(a),
                    o += a.length,
                    n = n.parentNode;
                return r.reverse().join(" > ")
            } catch (u) {
                return "<unknown>"
            }
        }
        function _htmlElementAsString(e, t) {
            var n, r, i, o, s, a = e, u = [];
            if (!a || !a.tagName)
                return "";
            u.push(a.tagName.toLowerCase());
            var c = t && t.length ? t.filter((function(e) {
                return a.getAttribute(e)
            }
            )).map((function(e) {
                return [e, a.getAttribute(e)]
            }
            )) : null;
            if (c && c.length)
                c.forEach((function(e) {
                    u.push("[" + e[0] + '="' + e[1] + '"]')
                }
                ));
            else if (a.id && u.push("#" + a.id),
            (n = a.className) && isString(n))
                for (r = n.split(/\s+/),
                s = 0; s < r.length; s++)
                    u.push("." + r[s]);
            var d = ["type", "name", "title", "alt"];
            for (s = 0; s < d.length; s++)
                i = d[s],
                (o = a.getAttribute(i)) && u.push("[" + i + '="' + o + '"]');
            return u.join("")
        }
        function truncate(e, t) {
            return void 0 === t && (t = 0),
            "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
        }
        function safeJoin(e, t) {
            if (!Array.isArray(e))
                return "";
            for (var n = [], r = 0; r < e.length; r++) {
                var i = e[r];
                try {
                    n.push(String(i))
                } catch (o) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }
        function isMatchingPattern(e, t) {
            return !!isString(e) && (function isRegExp(e) {
                return isBuiltin(e, "RegExp")
            }(t) ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t))
        }
        function fill(e, t, n) {
            if (t in e) {
                var r = e[t]
                  , i = n(r);
                if ("function" == typeof i)
                    try {
                        markFunctionWrapped(i, r)
                    } catch (o) {}
                e[t] = i
            }
        }
        function addNonEnumerableProperty(e, t, n) {
            Object.defineProperty(e, t, {
                value: n,
                writable: !0,
                configurable: !0
            })
        }
        function markFunctionWrapped(e, t) {
            var n = t.prototype || {};
            e.prototype = t.prototype = n,
            addNonEnumerableProperty(e, "__sentry_original__", t)
        }
        function getOriginalFunction(e) {
            return e.__sentry_original__
        }
        function convertToPlainObject(e) {
            var t = e;
            if (isError(e))
                t = __assign({
                    message: e.message,
                    name: e.name,
                    stack: e.stack
                }, getOwnProperties(e));
            else if (isEvent(e)) {
                var n = e;
                t = __assign({
                    type: n.type,
                    target: serializeEventTarget(n.target),
                    currentTarget: serializeEventTarget(n.currentTarget)
                }, getOwnProperties(n)),
                "undefined" != typeof CustomEvent && isInstanceOf(e, CustomEvent) && (t.detail = n.detail)
            }
            return t
        }
        function serializeEventTarget(e) {
            try {
                return function isElement(e) {
                    return "undefined" != typeof Element && isInstanceOf(e, Element)
                }(e) ? htmlTreeAsString(e) : Object.prototype.toString.call(e)
            } catch (t) {
                return "<unknown>"
            }
        }
        function getOwnProperties(e) {
            var t = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }
        function extractExceptionKeysForMessage(e, t) {
            void 0 === t && (t = 40);
            var n = Object.keys(convertToPlainObject(e));
            if (n.sort(),
            !n.length)
                return "[object has no keys]";
            if (n[0].length >= t)
                return truncate(n[0], t);
            for (var r = n.length; r > 0; r--) {
                var i = n.slice(0, r).join(", ");
                if (!(i.length > t))
                    return r === n.length ? i : truncate(i, t)
            }
            return ""
        }
        function dropUndefinedKeys(e) {
            var t, n;
            if (isPlainObject(e)) {
                var r = {};
                try {
                    for (var i = __values(Object.keys(e)), o = i.next(); !o.done; o = i.next()) {
                        var s = o.value;
                        void 0 !== e[s] && (r[s] = dropUndefinedKeys(e[s]))
                    }
                } catch (a) {
                    t = {
                        error: a
                    }
                } finally {
                    try {
                        o && !o.done && (n = i.return) && n.call(i)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return r
            }
            return Array.isArray(e) ? e.map(dropUndefinedKeys) : e
        }
        function uuid4() {
            var t = (0,
            e.R)()
              , n = t.crypto || t.msCrypto;
            if (void 0 !== n && n.getRandomValues) {
                var r = new Uint16Array(8);
                n.getRandomValues(r),
                r[3] = 4095 & r[3] | 16384,
                r[4] = 16383 & r[4] | 32768;
                var pad = function(e) {
                    for (var t = e.toString(16); t.length < 4; )
                        t = "0" + t;
                    return t
                };
                return pad(r[0]) + pad(r[1]) + pad(r[2]) + pad(r[3]) + pad(r[4]) + pad(r[5]) + pad(r[6]) + pad(r[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }
            ))
        }
        function parseUrl(e) {
            if (!e)
                return {};
            var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t)
                return {};
            var n = t[6] || ""
              , r = t[8] || "";
            return {
                host: t[4],
                path: t[5],
                protocol: t[2],
                relative: t[5] + n + r
            }
        }
        function getFirstException(e) {
            return e.exception && e.exception.values ? e.exception.values[0] : void 0
        }
        function getEventDescription(e) {
            var t = e.message
              , n = e.event_id;
            if (t)
                return t;
            var r = getFirstException(e);
            return r ? r.type && r.value ? r.type + ": " + r.value : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }
        function addExceptionTypeValue(e, t, n) {
            var r = e.exception = e.exception || {}
              , i = r.values = r.values || []
              , o = i[0] = i[0] || {};
            o.value || (o.value = t || ""),
            o.type || (o.type = n || "Error")
        }
        function addExceptionMechanism(e, t) {
            var n = getFirstException(e);
            if (n) {
                var r = n.mechanism;
                if (n.mechanism = __assign(__assign(__assign({}, {
                    type: "generic",
                    handled: !0
                }), r), t),
                t && "data"in t) {
                    var i = __assign(__assign({}, r && r.data), t.data);
                    n.mechanism.data = i
                }
            }
        }
        function checkOrSetAlreadyCaught(e) {
            if (e && e.__sentry_captured__)
                return !0;
            try {
                addNonEnumerableProperty(e, "__sentry_captured__", !0)
            } catch (t) {}
            return !1
        }
        var n, r = __webpack_require__(170), i = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, o = (0,
        e.R)(), s = "Sentry Logger ", a = ["debug", "info", "warn", "error", "log", "assert"];
        function consoleSandbox(t) {
            var n = (0,
            e.R)();
            if (!("console"in n))
                return t();
            var r = n.console
              , i = {};
            a.forEach((function(e) {
                var t = r[e] && r[e].__sentry_original__;
                e in n.console && t && (i[e] = r[e],
                r[e] = t)
            }
            ));
            try {
                return t()
            } finally {
                Object.keys(i).forEach((function(e) {
                    r[e] = i[e]
                }
                ))
            }
        }
        function makeLogger() {
            var e = !1
              , t = {
                enable: function() {
                    e = !0
                },
                disable: function() {
                    e = !1
                }
            };
            return i ? a.forEach((function(n) {
                t[n] = function() {
                    for (var t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                    e && consoleSandbox((function() {
                        var e;
                        (e = o.console)[n].apply(e, tslib_es6_spread([s + "[" + n + "]:"], t))
                    }
                    ))
                }
            }
            )) : a.forEach((function(e) {
                t[e] = function() {}
            }
            )),
            t
        }
        n = i ? (0,
        e.Y)("logger", makeLogger) : makeLogger();
        var u = __webpack_require__(448)
          , c = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function resolvedSyncPromise(e) {
            return new d((function(t) {
                t(e)
            }
            ))
        }
        function rejectedSyncPromise(e) {
            return new d((function(t, n) {
                n(e)
            }
            ))
        }
        var d = function() {
            function SyncPromise(e) {
                var t = this;
                this._state = 0,
                this._handlers = [],
                this._resolve = function(e) {
                    t._setResult(1, e)
                }
                ,
                this._reject = function(e) {
                    t._setResult(2, e)
                }
                ,
                this._setResult = function(e, n) {
                    0 === t._state && (isThenable(n) ? n.then(t._resolve, t._reject) : (t._state = e,
                    t._value = n,
                    t._executeHandlers()))
                }
                ,
                this._executeHandlers = function() {
                    if (0 !== t._state) {
                        var e = t._handlers.slice();
                        t._handlers = [],
                        e.forEach((function(e) {
                            e[0] || (1 === t._state && e[1](t._value),
                            2 === t._state && e[2](t._value),
                            e[0] = !0)
                        }
                        ))
                    }
                }
                ;
                try {
                    e(this._resolve, this._reject)
                } catch (n) {
                    this._reject(n)
                }
            }
            return SyncPromise.prototype.then = function(e, t) {
                var n = this;
                return new SyncPromise((function(r, i) {
                    n._handlers.push([!1, function(t) {
                        if (e)
                            try {
                                r(e(t))
                            } catch (n) {
                                i(n)
                            }
                        else
                            r(t)
                    }
                    , function(e) {
                        if (t)
                            try {
                                r(t(e))
                            } catch (n) {
                                i(n)
                            }
                        else
                            i(e)
                    }
                    ]),
                    n._executeHandlers()
                }
                ))
            }
            ,
            SyncPromise.prototype.catch = function(e) {
                return this.then((function(e) {
                    return e
                }
                ), e)
            }
            ,
            SyncPromise.prototype.finally = function(e) {
                var t = this;
                return new SyncPromise((function(n, r) {
                    var i, o;
                    return t.then((function(t) {
                        o = !1,
                        i = t,
                        e && e()
                    }
                    ), (function(t) {
                        o = !0,
                        i = t,
                        e && e()
                    }
                    )).then((function() {
                        o ? r(i) : n(i)
                    }
                    ))
                }
                ))
            }
            ,
            SyncPromise
        }()
          , p = function() {
            function Scope() {
                this._notifyingListeners = !1,
                this._scopeListeners = [],
                this._eventProcessors = [],
                this._breadcrumbs = [],
                this._user = {},
                this._tags = {},
                this._extra = {},
                this._contexts = {},
                this._sdkProcessingMetadata = {}
            }
            return Scope.clone = function(e) {
                var t = new Scope;
                return e && (t._breadcrumbs = tslib_es6_spread(e._breadcrumbs),
                t._tags = __assign({}, e._tags),
                t._extra = __assign({}, e._extra),
                t._contexts = __assign({}, e._contexts),
                t._user = e._user,
                t._level = e._level,
                t._span = e._span,
                t._session = e._session,
                t._transactionName = e._transactionName,
                t._fingerprint = e._fingerprint,
                t._eventProcessors = tslib_es6_spread(e._eventProcessors),
                t._requestSession = e._requestSession),
                t
            }
            ,
            Scope.prototype.addScopeListener = function(e) {
                this._scopeListeners.push(e)
            }
            ,
            Scope.prototype.addEventProcessor = function(e) {
                return this._eventProcessors.push(e),
                this
            }
            ,
            Scope.prototype.setUser = function(e) {
                return this._user = e || {},
                this._session && this._session.update({
                    user: e
                }),
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.getUser = function() {
                return this._user
            }
            ,
            Scope.prototype.getRequestSession = function() {
                return this._requestSession
            }
            ,
            Scope.prototype.setRequestSession = function(e) {
                return this._requestSession = e,
                this
            }
            ,
            Scope.prototype.setTags = function(e) {
                return this._tags = __assign(__assign({}, this._tags), e),
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.setTag = function(e, t) {
                var n;
                return this._tags = __assign(__assign({}, this._tags), ((n = {})[e] = t,
                n)),
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.setExtras = function(e) {
                return this._extra = __assign(__assign({}, this._extra), e),
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.setExtra = function(e, t) {
                var n;
                return this._extra = __assign(__assign({}, this._extra), ((n = {})[e] = t,
                n)),
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.setFingerprint = function(e) {
                return this._fingerprint = e,
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.setLevel = function(e) {
                return this._level = e,
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.setTransactionName = function(e) {
                return this._transactionName = e,
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.setTransaction = function(e) {
                return this.setTransactionName(e)
            }
            ,
            Scope.prototype.setContext = function(e, t) {
                var n;
                return null === t ? delete this._contexts[e] : this._contexts = __assign(__assign({}, this._contexts), ((n = {})[e] = t,
                n)),
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.setSpan = function(e) {
                return this._span = e,
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.getSpan = function() {
                return this._span
            }
            ,
            Scope.prototype.getTransaction = function() {
                var e = this.getSpan();
                return e && e.transaction
            }
            ,
            Scope.prototype.setSession = function(e) {
                return e ? this._session = e : delete this._session,
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.getSession = function() {
                return this._session
            }
            ,
            Scope.prototype.update = function(e) {
                if (!e)
                    return this;
                if ("function" == typeof e) {
                    var t = e(this);
                    return t instanceof Scope ? t : this
                }
                return e instanceof Scope ? (this._tags = __assign(__assign({}, this._tags), e._tags),
                this._extra = __assign(__assign({}, this._extra), e._extra),
                this._contexts = __assign(__assign({}, this._contexts), e._contexts),
                e._user && Object.keys(e._user).length && (this._user = e._user),
                e._level && (this._level = e._level),
                e._fingerprint && (this._fingerprint = e._fingerprint),
                e._requestSession && (this._requestSession = e._requestSession)) : isPlainObject(e) && (e = e,
                this._tags = __assign(__assign({}, this._tags), e.tags),
                this._extra = __assign(__assign({}, this._extra), e.extra),
                this._contexts = __assign(__assign({}, this._contexts), e.contexts),
                e.user && (this._user = e.user),
                e.level && (this._level = e.level),
                e.fingerprint && (this._fingerprint = e.fingerprint),
                e.requestSession && (this._requestSession = e.requestSession)),
                this
            }
            ,
            Scope.prototype.clear = function() {
                return this._breadcrumbs = [],
                this._tags = {},
                this._extra = {},
                this._user = {},
                this._contexts = {},
                this._level = void 0,
                this._transactionName = void 0,
                this._fingerprint = void 0,
                this._requestSession = void 0,
                this._span = void 0,
                this._session = void 0,
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.addBreadcrumb = function(e, t) {
                var n = "number" == typeof t ? Math.min(t, 100) : 100;
                if (n <= 0)
                    return this;
                var i = __assign({
                    timestamp: (0,
                    r.yW)()
                }, e);
                return this._breadcrumbs = tslib_es6_spread(this._breadcrumbs, [i]).slice(-n),
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.clearBreadcrumbs = function() {
                return this._breadcrumbs = [],
                this._notifyScopeListeners(),
                this
            }
            ,
            Scope.prototype.applyToEvent = function(e, t) {
                if (this._extra && Object.keys(this._extra).length && (e.extra = __assign(__assign({}, this._extra), e.extra)),
                this._tags && Object.keys(this._tags).length && (e.tags = __assign(__assign({}, this._tags), e.tags)),
                this._user && Object.keys(this._user).length && (e.user = __assign(__assign({}, this._user), e.user)),
                this._contexts && Object.keys(this._contexts).length && (e.contexts = __assign(__assign({}, this._contexts), e.contexts)),
                this._level && (e.level = this._level),
                this._transactionName && (e.transaction = this._transactionName),
                this._span) {
                    e.contexts = __assign({
                        trace: this._span.getTraceContext()
                    }, e.contexts);
                    var n = this._span.transaction && this._span.transaction.name;
                    n && (e.tags = __assign({
                        transaction: n
                    }, e.tags))
                }
                return this._applyFingerprint(e),
                e.breadcrumbs = tslib_es6_spread(e.breadcrumbs || [], this._breadcrumbs),
                e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0,
                e.sdkProcessingMetadata = this._sdkProcessingMetadata,
                this._notifyEventProcessors(tslib_es6_spread(getGlobalEventProcessors(), this._eventProcessors), e, t)
            }
            ,
            Scope.prototype.setSDKProcessingMetadata = function(e) {
                return this._sdkProcessingMetadata = __assign(__assign({}, this._sdkProcessingMetadata), e),
                this
            }
            ,
            Scope.prototype._notifyEventProcessors = function(e, t, n, r) {
                var i = this;
                return void 0 === r && (r = 0),
                new d((function(o, s) {
                    var a = e[r];
                    if (null === t || "function" != typeof a)
                        o(t);
                    else {
                        var u = a(__assign({}, t), n);
                        isThenable(u) ? u.then((function(t) {
                            return i._notifyEventProcessors(e, t, n, r + 1).then(o)
                        }
                        )).then(null, s) : i._notifyEventProcessors(e, u, n, r + 1).then(o).then(null, s)
                    }
                }
                ))
            }
            ,
            Scope.prototype._notifyScopeListeners = function() {
                var e = this;
                this._notifyingListeners || (this._notifyingListeners = !0,
                this._scopeListeners.forEach((function(t) {
                    t(e)
                }
                )),
                this._notifyingListeners = !1)
            }
            ,
            Scope.prototype._applyFingerprint = function(e) {
                e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [],
                this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint
            }
            ,
            Scope
        }();
        function getGlobalEventProcessors() {
            return (0,
            e.Y)("globalEventProcessors", (function() {
                return []
            }
            ))
        }
        function addGlobalEventProcessor(e) {
            getGlobalEventProcessors().push(e)
        }
        var l = function() {
            function Session(e) {
                this.errors = 0,
                this.sid = uuid4(),
                this.duration = 0,
                this.status = "ok",
                this.init = !0,
                this.ignoreDuration = !1;
                var t = (0,
                r.ph)();
                this.timestamp = t,
                this.started = t,
                e && this.update(e)
            }
            return Session.prototype.update = function(e) {
                if (void 0 === e && (e = {}),
                e.user && (!this.ipAddress && e.user.ip_address && (this.ipAddress = e.user.ip_address),
                this.did || e.did || (this.did = e.user.id || e.user.email || e.user.username)),
                this.timestamp = e.timestamp || (0,
                r.ph)(),
                e.ignoreDuration && (this.ignoreDuration = e.ignoreDuration),
                e.sid && (this.sid = 32 === e.sid.length ? e.sid : uuid4()),
                void 0 !== e.init && (this.init = e.init),
                !this.did && e.did && (this.did = "" + e.did),
                "number" == typeof e.started && (this.started = e.started),
                this.ignoreDuration)
                    this.duration = void 0;
                else if ("number" == typeof e.duration)
                    this.duration = e.duration;
                else {
                    var t = this.timestamp - this.started;
                    this.duration = t >= 0 ? t : 0
                }
                e.release && (this.release = e.release),
                e.environment && (this.environment = e.environment),
                !this.ipAddress && e.ipAddress && (this.ipAddress = e.ipAddress),
                !this.userAgent && e.userAgent && (this.userAgent = e.userAgent),
                "number" == typeof e.errors && (this.errors = e.errors),
                e.status && (this.status = e.status)
            }
            ,
            Session.prototype.close = function(e) {
                e ? this.update({
                    status: e
                }) : "ok" === this.status ? this.update({
                    status: "exited"
                }) : this.update()
            }
            ,
            Session.prototype.toJSON = function() {
                return dropUndefinedKeys({
                    sid: "" + this.sid,
                    init: this.init,
                    started: new Date(1e3 * this.started).toISOString(),
                    timestamp: new Date(1e3 * this.timestamp).toISOString(),
                    status: this.status,
                    errors: this.errors,
                    did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                    duration: this.duration,
                    attrs: {
                        release: this.release,
                        environment: this.environment,
                        ip_address: this.ipAddress,
                        user_agent: this.userAgent
                    }
                })
            }
            ,
            Session
        }()
          , f = function() {
            function Hub(e, t, n) {
                void 0 === t && (t = new p),
                void 0 === n && (n = 4),
                this._version = n,
                this._stack = [{}],
                this.getStackTop().scope = t,
                e && this.bindClient(e)
            }
            return Hub.prototype.isOlderThan = function(e) {
                return this._version < e
            }
            ,
            Hub.prototype.bindClient = function(e) {
                this.getStackTop().client = e,
                e && e.setupIntegrations && e.setupIntegrations()
            }
            ,
            Hub.prototype.pushScope = function() {
                var e = p.clone(this.getScope());
                return this.getStack().push({
                    client: this.getClient(),
                    scope: e
                }),
                e
            }
            ,
            Hub.prototype.popScope = function() {
                return !(this.getStack().length <= 1) && !!this.getStack().pop()
            }
            ,
            Hub.prototype.withScope = function(e) {
                var t = this.pushScope();
                try {
                    e(t)
                } finally {
                    this.popScope()
                }
            }
            ,
            Hub.prototype.getClient = function() {
                return this.getStackTop().client
            }
            ,
            Hub.prototype.getScope = function() {
                return this.getStackTop().scope
            }
            ,
            Hub.prototype.getStack = function() {
                return this._stack
            }
            ,
            Hub.prototype.getStackTop = function() {
                return this._stack[this._stack.length - 1]
            }
            ,
            Hub.prototype.captureException = function(e, t) {
                var n = this._lastEventId = t && t.event_id ? t.event_id : uuid4()
                  , r = t;
                if (!t) {
                    var i = void 0;
                    try {
                        throw new Error("Sentry syntheticException")
                    } catch (e) {
                        i = e
                    }
                    r = {
                        originalException: e,
                        syntheticException: i
                    }
                }
                return this._invokeClient("captureException", e, __assign(__assign({}, r), {
                    event_id: n
                })),
                n
            }
            ,
            Hub.prototype.captureMessage = function(e, t, n) {
                var r = this._lastEventId = n && n.event_id ? n.event_id : uuid4()
                  , i = n;
                if (!n) {
                    var o = void 0;
                    try {
                        throw new Error(e)
                    } catch (s) {
                        o = s
                    }
                    i = {
                        originalException: e,
                        syntheticException: o
                    }
                }
                return this._invokeClient("captureMessage", e, t, __assign(__assign({}, i), {
                    event_id: r
                })),
                r
            }
            ,
            Hub.prototype.captureEvent = function(e, t) {
                var n = t && t.event_id ? t.event_id : uuid4();
                return "transaction" !== e.type && (this._lastEventId = n),
                this._invokeClient("captureEvent", e, __assign(__assign({}, t), {
                    event_id: n
                })),
                n
            }
            ,
            Hub.prototype.lastEventId = function() {
                return this._lastEventId
            }
            ,
            Hub.prototype.addBreadcrumb = function(e, t) {
                var n = this.getStackTop()
                  , i = n.scope
                  , o = n.client;
                if (i && o) {
                    var s = o.getOptions && o.getOptions() || {}
                      , a = s.beforeBreadcrumb
                      , u = void 0 === a ? null : a
                      , c = s.maxBreadcrumbs
                      , d = void 0 === c ? 100 : c;
                    if (!(d <= 0)) {
                        var p = (0,
                        r.yW)()
                          , l = __assign({
                            timestamp: p
                        }, e)
                          , f = u ? consoleSandbox((function() {
                            return u(l, t)
                        }
                        )) : l;
                        null !== f && i.addBreadcrumb(f, d)
                    }
                }
            }
            ,
            Hub.prototype.setUser = function(e) {
                var t = this.getScope();
                t && t.setUser(e)
            }
            ,
            Hub.prototype.setTags = function(e) {
                var t = this.getScope();
                t && t.setTags(e)
            }
            ,
            Hub.prototype.setExtras = function(e) {
                var t = this.getScope();
                t && t.setExtras(e)
            }
            ,
            Hub.prototype.setTag = function(e, t) {
                var n = this.getScope();
                n && n.setTag(e, t)
            }
            ,
            Hub.prototype.setExtra = function(e, t) {
                var n = this.getScope();
                n && n.setExtra(e, t)
            }
            ,
            Hub.prototype.setContext = function(e, t) {
                var n = this.getScope();
                n && n.setContext(e, t)
            }
            ,
            Hub.prototype.configureScope = function(e) {
                var t = this.getStackTop()
                  , n = t.scope
                  , r = t.client;
                n && r && e(n)
            }
            ,
            Hub.prototype.run = function(e) {
                var t = makeMain(this);
                try {
                    e(this)
                } finally {
                    makeMain(t)
                }
            }
            ,
            Hub.prototype.getIntegration = function(e) {
                var t = this.getClient();
                if (!t)
                    return null;
                try {
                    return t.getIntegration(e)
                } catch (r) {
                    return c && n.warn("Cannot retrieve integration " + e.id + " from the current Hub"),
                    null
                }
            }
            ,
            Hub.prototype.startSpan = function(e) {
                return this._callExtensionMethod("startSpan", e)
            }
            ,
            Hub.prototype.startTransaction = function(e, t) {
                return this._callExtensionMethod("startTransaction", e, t)
            }
            ,
            Hub.prototype.traceHeaders = function() {
                return this._callExtensionMethod("traceHeaders")
            }
            ,
            Hub.prototype.captureSession = function(e) {
                if (void 0 === e && (e = !1),
                e)
                    return this.endSession();
                this._sendSessionUpdate()
            }
            ,
            Hub.prototype.endSession = function() {
                var e = this.getStackTop()
                  , t = e && e.scope
                  , n = t && t.getSession();
                n && n.close(),
                this._sendSessionUpdate(),
                t && t.setSession()
            }
            ,
            Hub.prototype.startSession = function(t) {
                var n = this.getStackTop()
                  , r = n.scope
                  , i = n.client
                  , o = i && i.getOptions() || {}
                  , s = o.release
                  , a = o.environment
                  , u = ((0,
                e.R)().navigator || {}).userAgent
                  , c = new l(__assign(__assign(__assign({
                    release: s,
                    environment: a
                }, r && {
                    user: r.getUser()
                }), u && {
                    userAgent: u
                }), t));
                if (r) {
                    var d = r.getSession && r.getSession();
                    d && "ok" === d.status && d.update({
                        status: "exited"
                    }),
                    this.endSession(),
                    r.setSession(c)
                }
                return c
            }
            ,
            Hub.prototype._sendSessionUpdate = function() {
                var e = this.getStackTop()
                  , t = e.scope
                  , n = e.client;
                if (t) {
                    var r = t.getSession && t.getSession();
                    r && n && n.captureSession && n.captureSession(r)
                }
            }
            ,
            Hub.prototype._invokeClient = function(e) {
                for (var t, n = [], r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                var i = this.getStackTop()
                  , o = i.scope
                  , s = i.client;
                s && s[e] && (t = s)[e].apply(t, tslib_es6_spread(n, [o]))
            }
            ,
            Hub.prototype._callExtensionMethod = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                var i = getMainCarrier()
                  , o = i.__SENTRY__;
                if (o && o.extensions && "function" == typeof o.extensions[e])
                    return o.extensions[e].apply(this, t);
                c && n.warn("Extension method " + e + " couldn't be found, doing nothing.")
            }
            ,
            Hub
        }();
        function getMainCarrier() {
            var t = (0,
            e.R)();
            return t.__SENTRY__ = t.__SENTRY__ || {
                extensions: {},
                hub: void 0
            },
            t
        }
        function makeMain(e) {
            var t = getMainCarrier()
              , n = getHubFromCarrier(t);
            return setHubOnCarrier(t, e),
            n
        }
        function getCurrentHub() {
            var e = getMainCarrier();
            return hasHubOnCarrier(e) && !getHubFromCarrier(e).isOlderThan(4) || setHubOnCarrier(e, new f),
            (0,
            u.KV)() ? function getHubFromActiveDomain(e) {
                try {
                    var t = getMainCarrier().__SENTRY__
                      , n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
                    if (!n)
                        return getHubFromCarrier(e);
                    if (!hasHubOnCarrier(n) || getHubFromCarrier(n).isOlderThan(4)) {
                        var r = getHubFromCarrier(e).getStackTop();
                        setHubOnCarrier(n, new f(r.client,p.clone(r.scope)))
                    }
                    return getHubFromCarrier(n)
                } catch (i) {
                    return getHubFromCarrier(e)
                }
            }(e) : getHubFromCarrier(e)
        }
        function hasHubOnCarrier(e) {
            return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
        }
        function getHubFromCarrier(t) {
            return (0,
            e.Y)("hub", (function() {
                return new f
            }
            ), t)
        }
        function setHubOnCarrier(e, t) {
            return !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t,
            !0)
        }
        var h = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        var v, _ = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/], g = function() {
            function InboundFilters(e) {
                void 0 === e && (e = {}),
                this._options = e,
                this.name = InboundFilters.id
            }
            return InboundFilters.prototype.setupOnce = function(e, t) {
                e((function(e) {
                    var r = t();
                    if (r) {
                        var i = r.getIntegration(InboundFilters);
                        if (i) {
                            var o = r.getClient()
                              , s = o ? o.getOptions() : {}
                              , a = function _mergeOptions(e, t) {
                                void 0 === e && (e = {});
                                void 0 === t && (t = {});
                                return {
                                    allowUrls: tslib_es6_spread(e.whitelistUrls || [], e.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                                    denyUrls: tslib_es6_spread(e.blacklistUrls || [], e.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                                    ignoreErrors: tslib_es6_spread(e.ignoreErrors || [], t.ignoreErrors || [], _),
                                    ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                                }
                            }(i._options, s);
                            return function _shouldDropEvent(e, t) {
                                if (t.ignoreInternal && function _isSentryError(e) {
                                    try {
                                        return "SentryError" === e.exception.values[0].type
                                    } catch (t) {}
                                    return !1
                                }(e))
                                    return h && n.warn("Event dropped due to being internal Sentry Error.\nEvent: " + getEventDescription(e)),
                                    !0;
                                if (function _isIgnoredError(e, t) {
                                    if (!t || !t.length)
                                        return !1;
                                    return function _getPossibleEventMessages(e) {
                                        if (e.message)
                                            return [e.message];
                                        if (e.exception)
                                            try {
                                                var t = e.exception.values && e.exception.values[0] || {}
                                                  , r = t.type
                                                  , i = void 0 === r ? "" : r
                                                  , o = t.value
                                                  , s = void 0 === o ? "" : o;
                                                return ["" + s, i + ": " + s]
                                            } catch (a) {
                                                return h && n.error("Cannot extract message for event " + getEventDescription(e)),
                                                []
                                            }
                                        return []
                                    }(e).some((function(e) {
                                        return t.some((function(t) {
                                            return isMatchingPattern(e, t)
                                        }
                                        ))
                                    }
                                    ))
                                }(e, t.ignoreErrors))
                                    return h && n.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + getEventDescription(e)),
                                    !0;
                                if (function _isDeniedUrl(e, t) {
                                    if (!t || !t.length)
                                        return !1;
                                    var n = _getEventFilterUrl(e);
                                    return !!n && t.some((function(e) {
                                        return isMatchingPattern(n, e)
                                    }
                                    ))
                                }(e, t.denyUrls))
                                    return h && n.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + getEventDescription(e) + ".\nUrl: " + _getEventFilterUrl(e)),
                                    !0;
                                if (!function _isAllowedUrl(e, t) {
                                    if (!t || !t.length)
                                        return !0;
                                    var n = _getEventFilterUrl(e);
                                    return !n || t.some((function(e) {
                                        return isMatchingPattern(n, e)
                                    }
                                    ))
                                }(e, t.allowUrls))
                                    return h && n.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + getEventDescription(e) + ".\nUrl: " + _getEventFilterUrl(e)),
                                    !0;
                                return !1
                            }(e, a) ? null : e
                        }
                    }
                    return e
                }
                ))
            }
            ,
            InboundFilters.id = "InboundFilters",
            InboundFilters
        }();
        function _getLastValidUrl(e) {
            void 0 === e && (e = []);
            for (var t = e.length - 1; t >= 0; t--) {
                var n = e[t];
                if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                    return n.filename || null
            }
            return null
        }
        function _getEventFilterUrl(e) {
            try {
                if (e.stacktrace)
                    return _getLastValidUrl(e.stacktrace.frames);
                var t;
                try {
                    t = e.exception.values[0].stacktrace.frames
                } catch (r) {}
                return t ? _getLastValidUrl(t) : null
            } catch (i) {
                return h && n.error("Cannot extract url for event " + getEventDescription(e)),
                null
            }
        }
        var m = function() {
            function FunctionToString() {
                this.name = FunctionToString.id
            }
            return FunctionToString.prototype.setupOnce = function() {
                v = Function.prototype.toString,
                Function.prototype.toString = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    var n = getOriginalFunction(this) || this;
                    return v.apply(n, e)
                }
            }
            ,
            FunctionToString.id = "FunctionToString",
            FunctionToString
        }();
        function stripSentryFramesAndReverse(e) {
            if (!e.length)
                return [];
            var t = e
              , n = t[0].function || ""
              , r = t[t.length - 1].function || "";
            return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)),
            -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)),
            t.slice(0, 50).map((function(e) {
                return __assign(__assign({}, e), {
                    filename: e.filename || t[0].filename,
                    function: e.function || "?"
                })
            }
            )).reverse()
        }
        var y = "<anonymous>";
        function getFunctionName(e) {
            try {
                return e && "function" == typeof e && e.name || y
            } catch (t) {
                return y
            }
        }
        function supportsFetch() {
            if (!("fetch"in (0,
            e.R)()))
                return !1;
            try {
                return new Headers,
                new Request(""),
                new Response,
                !0
            } catch (t) {
                return !1
            }
        }
        function isNativeFetch(e) {
            return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        }
        function supportsReferrerPolicy() {
            if (!supportsFetch())
                return !1;
            try {
                return new Request("_",{
                    referrerPolicy: "origin"
                }),
                !0
            } catch (e) {
                return !1
            }
        }
        var b, E = (0,
        e.R)(), S = {}, w = {};
        function instrument(t) {
            if (!w[t])
                switch (w[t] = !0,
                t) {
                case "console":
                    !function instrumentConsole() {
                        if (!("console"in E))
                            return;
                        a.forEach((function(e) {
                            e in E.console && fill(E.console, e, (function(t) {
                                return function() {
                                    for (var n = [], r = 0; r < arguments.length; r++)
                                        n[r] = arguments[r];
                                    triggerHandlers("console", {
                                        args: n,
                                        level: e
                                    }),
                                    t && t.apply(E.console, n)
                                }
                            }
                            ))
                        }
                        ))
                    }();
                    break;
                case "dom":
                    !function instrumentDOM() {
                        if (!("document"in E))
                            return;
                        var e = triggerHandlers.bind(null, "dom")
                          , t = makeDOMEventHandler(e, !0);
                        E.document.addEventListener("click", t, !1),
                        E.document.addEventListener("keypress", t, !1),
                        ["EventTarget", "Node"].forEach((function(t) {
                            var n = E[t] && E[t].prototype;
                            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (fill(n, "addEventListener", (function(t) {
                                return function(n, r, i) {
                                    if ("click" === n || "keypress" == n)
                                        try {
                                            var o = this
                                              , s = o.__sentry_instrumentation_handlers__ = o.__sentry_instrumentation_handlers__ || {}
                                              , a = s[n] = s[n] || {
                                                refCount: 0
                                            };
                                            if (!a.handler) {
                                                var u = makeDOMEventHandler(e);
                                                a.handler = u,
                                                t.call(this, n, u, i)
                                            }
                                            a.refCount += 1
                                        } catch (c) {}
                                    return t.call(this, n, r, i)
                                }
                            }
                            )),
                            fill(n, "removeEventListener", (function(e) {
                                return function(t, n, r) {
                                    if ("click" === t || "keypress" == t)
                                        try {
                                            var i = this
                                              , o = i.__sentry_instrumentation_handlers__ || {}
                                              , s = o[t];
                                            s && (s.refCount -= 1,
                                            s.refCount <= 0 && (e.call(this, t, s.handler, r),
                                            s.handler = void 0,
                                            delete o[t]),
                                            0 === Object.keys(o).length && delete i.__sentry_instrumentation_handlers__)
                                        } catch (a) {}
                                    return e.call(this, t, n, r)
                                }
                            }
                            )))
                        }
                        ))
                    }();
                    break;
                case "xhr":
                    !function instrumentXHR() {
                        if (!("XMLHttpRequest"in E))
                            return;
                        var e = XMLHttpRequest.prototype;
                        fill(e, "open", (function(e) {
                            return function() {
                                for (var t = [], n = 0; n < arguments.length; n++)
                                    t[n] = arguments[n];
                                var r = this
                                  , i = t[1]
                                  , o = r.__sentry_xhr__ = {
                                    method: isString(t[0]) ? t[0].toUpperCase() : t[0],
                                    url: t[1]
                                };
                                isString(i) && "POST" === o.method && i.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
                                var onreadystatechangeHandler = function() {
                                    if (4 === r.readyState) {
                                        try {
                                            o.status_code = r.status
                                        } catch (e) {}
                                        triggerHandlers("xhr", {
                                            args: t,
                                            endTimestamp: Date.now(),
                                            startTimestamp: Date.now(),
                                            xhr: r
                                        })
                                    }
                                };
                                return "onreadystatechange"in r && "function" == typeof r.onreadystatechange ? fill(r, "onreadystatechange", (function(e) {
                                    return function() {
                                        for (var t = [], n = 0; n < arguments.length; n++)
                                            t[n] = arguments[n];
                                        return onreadystatechangeHandler(),
                                        e.apply(r, t)
                                    }
                                }
                                )) : r.addEventListener("readystatechange", onreadystatechangeHandler),
                                e.apply(r, t)
                            }
                        }
                        )),
                        fill(e, "send", (function(e) {
                            return function() {
                                for (var t = [], n = 0; n < arguments.length; n++)
                                    t[n] = arguments[n];
                                return this.__sentry_xhr__ && void 0 !== t[0] && (this.__sentry_xhr__.body = t[0]),
                                triggerHandlers("xhr", {
                                    args: t,
                                    startTimestamp: Date.now(),
                                    xhr: this
                                }),
                                e.apply(this, t)
                            }
                        }
                        ))
                    }();
                    break;
                case "fetch":
                    !function instrumentFetch() {
                        if (!function supportsNativeFetch() {
                            if (!supportsFetch())
                                return !1;
                            var t = (0,
                            e.R)();
                            if (isNativeFetch(t.fetch))
                                return !0;
                            var r = !1
                              , o = t.document;
                            if (o && "function" == typeof o.createElement)
                                try {
                                    var s = o.createElement("iframe");
                                    s.hidden = !0,
                                    o.head.appendChild(s),
                                    s.contentWindow && s.contentWindow.fetch && (r = isNativeFetch(s.contentWindow.fetch)),
                                    o.head.removeChild(s)
                                } catch (a) {
                                    i && n.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", a)
                                }
                            return r
                        }())
                            return;
                        fill(E, "fetch", (function(e) {
                            return function() {
                                for (var t = [], n = 0; n < arguments.length; n++)
                                    t[n] = arguments[n];
                                var r = {
                                    args: t,
                                    fetchData: {
                                        method: getFetchMethod(t),
                                        url: getFetchUrl(t)
                                    },
                                    startTimestamp: Date.now()
                                };
                                return triggerHandlers("fetch", __assign({}, r)),
                                e.apply(E, t).then((function(e) {
                                    return triggerHandlers("fetch", __assign(__assign({}, r), {
                                        endTimestamp: Date.now(),
                                        response: e
                                    })),
                                    e
                                }
                                ), (function(e) {
                                    throw triggerHandlers("fetch", __assign(__assign({}, r), {
                                        endTimestamp: Date.now(),
                                        error: e
                                    })),
                                    e
                                }
                                ))
                            }
                        }
                        ))
                    }();
                    break;
                case "history":
                    !function instrumentHistory() {
                        if (!function supportsHistory() {
                            var t = (0,
                            e.R)()
                              , n = t.chrome
                              , r = n && n.app && n.app.runtime
                              , i = "history"in t && !!t.history.pushState && !!t.history.replaceState;
                            return !r && i
                        }())
                            return;
                        var t = E.onpopstate;
                        function historyReplacementFunction(e) {
                            return function() {
                                for (var t = [], n = 0; n < arguments.length; n++)
                                    t[n] = arguments[n];
                                var r = t.length > 2 ? t[2] : void 0;
                                if (r) {
                                    var i = b
                                      , o = String(r);
                                    b = o,
                                    triggerHandlers("history", {
                                        from: i,
                                        to: o
                                    })
                                }
                                return e.apply(this, t)
                            }
                        }
                        E.onpopstate = function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            var r = E.location.href
                              , i = b;
                            if (b = r,
                            triggerHandlers("history", {
                                from: i,
                                to: r
                            }),
                            t)
                                try {
                                    return t.apply(this, e)
                                } catch (o) {}
                        }
                        ,
                        fill(E.history, "pushState", historyReplacementFunction),
                        fill(E.history, "replaceState", historyReplacementFunction)
                    }();
                    break;
                case "error":
                    !function instrumentError() {
                        T = E.onerror,
                        E.onerror = function(e, t, n, r, i) {
                            return triggerHandlers("error", {
                                column: r,
                                error: i,
                                line: n,
                                msg: e,
                                url: t
                            }),
                            !!T && T.apply(this, arguments)
                        }
                    }();
                    break;
                case "unhandledrejection":
                    !function instrumentUnhandledRejection() {
                        O = E.onunhandledrejection,
                        E.onunhandledrejection = function(e) {
                            return triggerHandlers("unhandledrejection", e),
                            !O || O.apply(this, arguments)
                        }
                    }();
                    break;
                default:
                    return void (i && n.warn("unknown instrumentation type:", t))
                }
        }
        function addInstrumentationHandler(e, t) {
            S[e] = S[e] || [],
            S[e].push(t),
            instrument(e)
        }
        function triggerHandlers(e, t) {
            var r, o;
            if (e && S[e])
                try {
                    for (var s = __values(S[e] || []), a = s.next(); !a.done; a = s.next()) {
                        var u = a.value;
                        try {
                            u(t)
                        } catch (c) {
                            i && n.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + getFunctionName(u) + "\nError:", c)
                        }
                    }
                } catch (d) {
                    r = {
                        error: d
                    }
                } finally {
                    try {
                        a && !a.done && (o = s.return) && o.call(s)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
        }
        function getFetchMethod(e) {
            return void 0 === e && (e = []),
            "Request"in E && isInstanceOf(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
        }
        function getFetchUrl(e) {
            return void 0 === e && (e = []),
            "string" == typeof e[0] ? e[0] : "Request"in E && isInstanceOf(e[0], Request) ? e[0].url : String(e[0])
        }
        var x, k;
        function makeDOMEventHandler(e, t) {
            return void 0 === t && (t = !1),
            function(n) {
                if (n && k !== n && !function shouldSkipDOMEvent(e) {
                    if ("keypress" !== e.type)
                        return !1;
                    try {
                        var t = e.target;
                        if (!t || !t.tagName)
                            return !0;
                        if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable)
                            return !1
                    } catch (n) {}
                    return !0
                }(n)) {
                    var r = "keypress" === n.type ? "input" : n.type;
                    (void 0 === x || function shouldShortcircuitPreviousDebounce(e, t) {
                        if (!e)
                            return !0;
                        if (e.type !== t.type)
                            return !0;
                        try {
                            if (e.target !== t.target)
                                return !0
                        } catch (n) {}
                        return !1
                    }(k, n)) && (e({
                        event: n,
                        name: r,
                        global: t
                    }),
                    k = n),
                    clearTimeout(x),
                    x = E.setTimeout((function() {
                        x = void 0
                    }
                    ), 1e3)
                }
            }
        }
        var T = null;
        var O = null;
        var R = "6.19.7"
          , C = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function setProtoOf(e, t) {
            return e.__proto__ = t,
            e
        }
        : function mixinProperties(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n]);
            return e
        }
        );
        var F = function(e) {
            function SentryError(t) {
                var n = this.constructor
                  , r = e.call(this, t) || this;
                return r.message = t,
                r.name = n.prototype.constructor.name,
                C(r, n.prototype),
                r
            }
            return __extends(SentryError, e),
            SentryError
        }(Error)
          , I = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function dsnToString(e, t) {
            void 0 === t && (t = !1);
            var n = e.host
              , r = e.path
              , i = e.pass
              , o = e.port
              , s = e.projectId;
            return e.protocol + "://" + e.publicKey + (t && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + s
        }
        function dsnFromComponents(e) {
            return "user"in e && !("publicKey"in e) && (e.publicKey = e.user),
            {
                user: e.publicKey || "",
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            }
        }
        function makeDsn(e) {
            var t = "string" == typeof e ? function dsnFromString(e) {
                var t = I.exec(e);
                if (!t)
                    throw new F("Invalid Sentry Dsn: " + e);
                var n = tslib_es6_read(t.slice(1), 6)
                  , r = n[0]
                  , i = n[1]
                  , o = n[2]
                  , s = void 0 === o ? "" : o
                  , a = n[3]
                  , u = n[4]
                  , c = void 0 === u ? "" : u
                  , d = ""
                  , p = n[5]
                  , l = p.split("/");
                if (l.length > 1 && (d = l.slice(0, -1).join("/"),
                p = l.pop()),
                p) {
                    var f = p.match(/^\d+/);
                    f && (p = f[0])
                }
                return dsnFromComponents({
                    host: a,
                    pass: s,
                    path: d,
                    projectId: p,
                    port: c,
                    protocol: r,
                    publicKey: i
                })
            }(e) : dsnFromComponents(e);
            return function validateDsn(e) {
                if (i) {
                    var t = e.port
                      , n = e.projectId
                      , r = e.protocol;
                    if (["protocol", "publicKey", "host", "projectId"].forEach((function(t) {
                        if (!e[t])
                            throw new F("Invalid Sentry Dsn: " + t + " missing")
                    }
                    )),
                    !n.match(/^\d+$/))
                        throw new F("Invalid Sentry Dsn: Invalid projectId " + n);
                    if (!function isValidProtocol(e) {
                        return "http" === e || "https" === e
                    }(r))
                        throw new F("Invalid Sentry Dsn: Invalid protocol " + r);
                    if (t && isNaN(parseInt(t, 10)))
                        throw new F("Invalid Sentry Dsn: Invalid port " + t);
                    return !0
                }
            }(t),
            t
        }
        function normalize(e, t, n) {
            void 0 === t && (t = 1 / 0),
            void 0 === n && (n = 1 / 0);
            try {
                return visit("", e, t, n)
            } catch (r) {
                return {
                    ERROR: "**non-serializable** (" + r + ")"
                }
            }
        }
        function normalizeToSize(e, t, n) {
            void 0 === t && (t = 3),
            void 0 === n && (n = 102400);
            var r = normalize(e, t);
            return function jsonSize(e) {
                return function utf8Length(e) {
                    return ~-encodeURI(e).split(/%..|./).length
                }(JSON.stringify(e))
            }(r) > n ? normalizeToSize(e, t - 1, n) : r
        }
        function visit(e, t, n, r, i) {
            void 0 === n && (n = 1 / 0),
            void 0 === r && (r = 1 / 0),
            void 0 === i && (i = function memoBuilder() {
                var e = "function" == typeof WeakSet
                  , t = e ? new WeakSet : [];
                return [function memoize(n) {
                    if (e)
                        return !!t.has(n) || (t.add(n),
                        !1);
                    for (var r = 0; r < t.length; r++)
                        if (t[r] === n)
                            return !0;
                    return t.push(n),
                    !1
                }
                , function unmemoize(n) {
                    if (e)
                        t.delete(n);
                    else
                        for (var r = 0; r < t.length; r++)
                            if (t[r] === n) {
                                t.splice(r, 1);
                                break
                            }
                }
                ]
            }());
            var o = tslib_es6_read(i, 2)
              , s = o[0]
              , a = o[1]
              , u = t;
            if (u && "function" == typeof u.toJSON)
                try {
                    return u.toJSON()
                } catch (v) {}
            if (null === t || ["number", "boolean", "string"].includes(typeof t) && !function is_isNaN(e) {
                return "number" == typeof e && e != e
            }(t))
                return t;
            var c = function stringifyValue(e, t) {
                try {
                    return "domain" === e && t && "object" == typeof t && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : void 0 !== __webpack_require__.g && t === __webpack_require__.g ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : function isSyntheticEvent(e) {
                        return isPlainObject(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
                    }(t) ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + getFunctionName(t) + "]" : "symbol" == typeof t ? "[" + String(t) + "]" : "bigint" == typeof t ? "[BigInt: " + String(t) + "]" : "[object " + Object.getPrototypeOf(t).constructor.name + "]"
                } catch (v) {
                    return "**non-serializable** (" + v + ")"
                }
            }(e, t);
            if (!c.startsWith("[object "))
                return c;
            if (0 === n)
                return c.replace("object ", "");
            if (s(t))
                return "[Circular ~]";
            var d = Array.isArray(t) ? [] : {}
              , p = 0
              , l = isError(t) || isEvent(t) ? convertToPlainObject(t) : t;
            for (var f in l)
                if (Object.prototype.hasOwnProperty.call(l, f)) {
                    if (p >= r) {
                        d[f] = "[MaxProperties ~]";
                        break
                    }
                    var h = l[f];
                    d[f] = visit(f, h, n - 1, r, i),
                    p += 1
                }
            return a(t),
            d
        }
        var P = [];
        function filterDuplicates(e) {
            return e.reduce((function(e, t) {
                return e.every((function(e) {
                    return t.name !== e.name
                }
                )) && e.push(t),
                e
            }
            ), [])
        }
        function setupIntegrations(e) {
            var t = {};
            return function getIntegrationsToSetup(e) {
                var t = e.defaultIntegrations && tslib_es6_spread(e.defaultIntegrations) || []
                  , n = e.integrations
                  , r = tslib_es6_spread(filterDuplicates(t));
                Array.isArray(n) ? r = tslib_es6_spread(r.filter((function(e) {
                    return n.every((function(t) {
                        return t.name !== e.name
                    }
                    ))
                }
                )), filterDuplicates(n)) : "function" == typeof n && (r = n(r),
                r = Array.isArray(r) ? r : [r]);
                var i = r.map((function(e) {
                    return e.name
                }
                ))
                  , o = "Debug";
                return -1 !== i.indexOf(o) && r.push.apply(r, tslib_es6_spread(r.splice(i.indexOf(o), 1))),
                r
            }(e).forEach((function(e) {
                t[e.name] = e,
                function setupIntegration(e) {
                    -1 === P.indexOf(e.name) && (e.setupOnce(addGlobalEventProcessor, getCurrentHub),
                    P.push(e.name),
                    h && n.log("Integration installed: " + e.name))
                }(e)
            }
            )),
            addNonEnumerableProperty(t, "initialized", !0),
            t
        }
        var B = "Not capturing exception because it's already been captured."
          , H = function() {
            function BaseClient(e, t) {
                this._integrations = {},
                this._numProcessing = 0,
                this._backend = new e(t),
                this._options = t,
                t.dsn && (this._dsn = makeDsn(t.dsn))
            }
            return BaseClient.prototype.captureException = function(e, t, r) {
                var i = this;
                if (!checkOrSetAlreadyCaught(e)) {
                    var o = t && t.event_id;
                    return this._process(this._getBackend().eventFromException(e, t).then((function(e) {
                        return i._captureEvent(e, t, r)
                    }
                    )).then((function(e) {
                        o = e
                    }
                    ))),
                    o
                }
                h && n.log(B)
            }
            ,
            BaseClient.prototype.captureMessage = function(e, t, n, r) {
                var i = this
                  , o = n && n.event_id
                  , s = is_isPrimitive(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
                return this._process(s.then((function(e) {
                    return i._captureEvent(e, n, r)
                }
                )).then((function(e) {
                    o = e
                }
                ))),
                o
            }
            ,
            BaseClient.prototype.captureEvent = function(e, t, r) {
                if (!(t && t.originalException && checkOrSetAlreadyCaught(t.originalException))) {
                    var i = t && t.event_id;
                    return this._process(this._captureEvent(e, t, r).then((function(e) {
                        i = e
                    }
                    ))),
                    i
                }
                h && n.log(B)
            }
            ,
            BaseClient.prototype.captureSession = function(e) {
                this._isEnabled() ? "string" != typeof e.release ? h && n.warn("Discarded session because of missing or non-string release") : (this._sendSession(e),
                e.update({
                    init: !1
                })) : h && n.warn("SDK not enabled, will not capture session.")
            }
            ,
            BaseClient.prototype.getDsn = function() {
                return this._dsn
            }
            ,
            BaseClient.prototype.getOptions = function() {
                return this._options
            }
            ,
            BaseClient.prototype.getTransport = function() {
                return this._getBackend().getTransport()
            }
            ,
            BaseClient.prototype.flush = function(e) {
                var t = this;
                return this._isClientDoneProcessing(e).then((function(n) {
                    return t.getTransport().close(e).then((function(e) {
                        return n && e
                    }
                    ))
                }
                ))
            }
            ,
            BaseClient.prototype.close = function(e) {
                var t = this;
                return this.flush(e).then((function(e) {
                    return t.getOptions().enabled = !1,
                    e
                }
                ))
            }
            ,
            BaseClient.prototype.setupIntegrations = function() {
                this._isEnabled() && !this._integrations.initialized && (this._integrations = setupIntegrations(this._options))
            }
            ,
            BaseClient.prototype.getIntegration = function(e) {
                try {
                    return this._integrations[e.id] || null
                } catch (t) {
                    return h && n.warn("Cannot retrieve integration " + e.id + " from the current Client"),
                    null
                }
            }
            ,
            BaseClient.prototype._updateSessionFromEvent = function(e, t) {
                var n, r, i = !1, o = !1, s = t.exception && t.exception.values;
                if (s) {
                    o = !0;
                    try {
                        for (var a = __values(s), u = a.next(); !u.done; u = a.next()) {
                            var c = u.value.mechanism;
                            if (c && !1 === c.handled) {
                                i = !0;
                                break
                            }
                        }
                    } catch (p) {
                        n = {
                            error: p
                        }
                    } finally {
                        try {
                            u && !u.done && (r = a.return) && r.call(a)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                }
                var d = "ok" === e.status;
                (d && 0 === e.errors || d && i) && (e.update(__assign(__assign({}, i && {
                    status: "crashed"
                }), {
                    errors: e.errors || Number(o || i)
                })),
                this.captureSession(e))
            }
            ,
            BaseClient.prototype._sendSession = function(e) {
                this._getBackend().sendSession(e)
            }
            ,
            BaseClient.prototype._isClientDoneProcessing = function(e) {
                var t = this;
                return new d((function(n) {
                    var r = 0
                      , i = setInterval((function() {
                        0 == t._numProcessing ? (clearInterval(i),
                        n(!0)) : (r += 1,
                        e && r >= e && (clearInterval(i),
                        n(!1)))
                    }
                    ), 1)
                }
                ))
            }
            ,
            BaseClient.prototype._getBackend = function() {
                return this._backend
            }
            ,
            BaseClient.prototype._isEnabled = function() {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }
            ,
            BaseClient.prototype._prepareEvent = function(e, t, n) {
                var i = this
                  , o = this.getOptions()
                  , s = o.normalizeDepth
                  , a = void 0 === s ? 3 : s
                  , u = o.normalizeMaxBreadth
                  , c = void 0 === u ? 1e3 : u
                  , d = __assign(__assign({}, e), {
                    event_id: e.event_id || (n && n.event_id ? n.event_id : uuid4()),
                    timestamp: e.timestamp || (0,
                    r.yW)()
                });
                this._applyClientOptions(d),
                this._applyIntegrationsMetadata(d);
                var l = t;
                n && n.captureContext && (l = p.clone(l).update(n.captureContext));
                var f = resolvedSyncPromise(d);
                return l && (f = l.applyToEvent(d, n)),
                f.then((function(e) {
                    return e && (e.sdkProcessingMetadata = __assign(__assign({}, e.sdkProcessingMetadata), {
                        normalizeDepth: normalize(a) + " (" + typeof a + ")"
                    })),
                    "number" == typeof a && a > 0 ? i._normalizeEvent(e, a, c) : e
                }
                ))
            }
            ,
            BaseClient.prototype._normalizeEvent = function(e, t, n) {
                if (!e)
                    return null;
                var r = __assign(__assign(__assign(__assign(__assign({}, e), e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map((function(e) {
                        return __assign(__assign({}, e), e.data && {
                            data: normalize(e.data, t, n)
                        })
                    }
                    ))
                }), e.user && {
                    user: normalize(e.user, t, n)
                }), e.contexts && {
                    contexts: normalize(e.contexts, t, n)
                }), e.extra && {
                    extra: normalize(e.extra, t, n)
                });
                return e.contexts && e.contexts.trace && (r.contexts.trace = e.contexts.trace),
                r.sdkProcessingMetadata = __assign(__assign({}, r.sdkProcessingMetadata), {
                    baseClientNormalized: !0
                }),
                r
            }
            ,
            BaseClient.prototype._applyClientOptions = function(e) {
                var t = this.getOptions()
                  , n = t.environment
                  , r = t.release
                  , i = t.dist
                  , o = t.maxValueLength
                  , s = void 0 === o ? 250 : o;
                "environment"in e || (e.environment = "environment"in t ? n : "production"),
                void 0 === e.release && void 0 !== r && (e.release = r),
                void 0 === e.dist && void 0 !== i && (e.dist = i),
                e.message && (e.message = truncate(e.message, s));
                var a = e.exception && e.exception.values && e.exception.values[0];
                a && a.value && (a.value = truncate(a.value, s));
                var u = e.request;
                u && u.url && (u.url = truncate(u.url, s))
            }
            ,
            BaseClient.prototype._applyIntegrationsMetadata = function(e) {
                var t = Object.keys(this._integrations);
                t.length > 0 && (e.sdk = e.sdk || {},
                e.sdk.integrations = tslib_es6_spread(e.sdk.integrations || [], t))
            }
            ,
            BaseClient.prototype._sendEvent = function(e) {
                this._getBackend().sendEvent(e)
            }
            ,
            BaseClient.prototype._captureEvent = function(e, t, r) {
                return this._processEvent(e, t, r).then((function(e) {
                    return e.event_id
                }
                ), (function(e) {
                    h && n.error(e)
                }
                ))
            }
            ,
            BaseClient.prototype._processEvent = function(e, t, n) {
                var r = this
                  , i = this.getOptions()
                  , o = i.beforeSend
                  , s = i.sampleRate
                  , a = this.getTransport();
                function recordLostEvent(e, t) {
                    a.recordLostEvent && a.recordLostEvent(e, t)
                }
                if (!this._isEnabled())
                    return rejectedSyncPromise(new F("SDK not enabled, will not capture event."));
                var u = "transaction" === e.type;
                return !u && "number" == typeof s && Math.random() > s ? (recordLostEvent("sample_rate", "event"),
                rejectedSyncPromise(new F("Discarding event because it's not included in the random sample (sampling rate = " + s + ")"))) : this._prepareEvent(e, n, t).then((function(n) {
                    if (null === n)
                        throw recordLostEvent("event_processor", e.type || "event"),
                        new F("An event processor returned null, will not send event.");
                    return t && t.data && !0 === t.data.__sentry__ || u || !o ? n : function _ensureBeforeSendRv(e) {
                        var t = "`beforeSend` method has to return `null` or a valid event.";
                        if (isThenable(e))
                            return e.then((function(e) {
                                if (!isPlainObject(e) && null !== e)
                                    throw new F(t);
                                return e
                            }
                            ), (function(e) {
                                throw new F("beforeSend rejected with " + e)
                            }
                            ));
                        if (!isPlainObject(e) && null !== e)
                            throw new F(t);
                        return e
                    }(o(n, t))
                }
                )).then((function(t) {
                    if (null === t)
                        throw recordLostEvent("before_send", e.type || "event"),
                        new F("`beforeSend` returned `null`, will not send event.");
                    var i = n && n.getSession && n.getSession();
                    return !u && i && r._updateSessionFromEvent(i, t),
                    r._sendEvent(t),
                    t
                }
                )).then(null, (function(e) {
                    if (e instanceof F)
                        throw e;
                    throw r.captureException(e, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: e
                    }),
                    new F("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
                }
                ))
            }
            ,
            BaseClient.prototype._process = function(e) {
                var t = this;
                this._numProcessing += 1,
                e.then((function(e) {
                    return t._numProcessing -= 1,
                    e
                }
                ), (function(e) {
                    return t._numProcessing -= 1,
                    e
                }
                ))
            }
            ,
            BaseClient
        }();
        !function() {
            function API(e, t, n) {
                void 0 === t && (t = {}),
                this.dsn = e,
                this._dsnObject = makeDsn(e),
                this.metadata = t,
                this._tunnel = n
            }
            API.prototype.getDsn = function() {
                return this._dsnObject
            }
            ,
            API.prototype.forceEnvelope = function() {
                return !!this._tunnel
            }
            ,
            API.prototype.getBaseApiEndpoint = function() {
                return getBaseApiEndpoint(this._dsnObject)
            }
            ,
            API.prototype.getStoreEndpoint = function() {
                return getStoreEndpoint(this._dsnObject)
            }
            ,
            API.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                return getStoreEndpointWithUrlEncodedAuth(this._dsnObject)
            }
            ,
            API.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                return getEnvelopeEndpointWithUrlEncodedAuth(this._dsnObject, this._tunnel)
            }
        }();
        function initAPIDetails(e, t, n) {
            return {
                initDsn: e,
                metadata: t || {},
                dsn: makeDsn(e),
                tunnel: n
            }
        }
        function getBaseApiEndpoint(e) {
            var t = e.protocol ? e.protocol + ":" : ""
              , n = e.port ? ":" + e.port : "";
            return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
        }
        function _getIngestEndpoint(e, t) {
            return "" + getBaseApiEndpoint(e) + e.projectId + "/" + t + "/"
        }
        function _encodedAuth(e) {
            return function urlEncode(e) {
                return Object.keys(e).map((function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }
                )).join("&")
            }({
                sentry_key: e.publicKey,
                sentry_version: "7"
            })
        }
        function getStoreEndpoint(e) {
            return _getIngestEndpoint(e, "store")
        }
        function getStoreEndpointWithUrlEncodedAuth(e) {
            return getStoreEndpoint(e) + "?" + _encodedAuth(e)
        }
        function getEnvelopeEndpointWithUrlEncodedAuth(e, t) {
            return t || function _getEnvelopeEndpoint(e) {
                return _getIngestEndpoint(e, "envelope")
            }(e) + "?" + _encodedAuth(e)
        }
        function createEnvelope(e, t) {
            return void 0 === t && (t = []),
            [e, t]
        }
        function serializeEnvelope(e) {
            var t = tslib_es6_read(e, 2)
              , n = t[0]
              , r = t[1]
              , i = JSON.stringify(n);
            return r.reduce((function(e, t) {
                var n = tslib_es6_read(t, 2)
                  , r = n[0]
                  , i = n[1]
                  , o = is_isPrimitive(i) ? String(i) : JSON.stringify(i);
                return e + "\n" + JSON.stringify(r) + "\n" + o
            }
            ), i)
        }
        function getSdkMetadataForEnvelopeHeader(e) {
            if (e.metadata && e.metadata.sdk) {
                var t = e.metadata.sdk;
                return {
                    name: t.name,
                    version: t.version
                }
            }
        }
        function enhanceEventWithSdkInfo(e, t) {
            return t ? (e.sdk = e.sdk || {},
            e.sdk.name = e.sdk.name || t.name,
            e.sdk.version = e.sdk.version || t.version,
            e.sdk.integrations = tslib_es6_spread(e.sdk.integrations || [], t.integrations || []),
            e.sdk.packages = tslib_es6_spread(e.sdk.packages || [], t.packages || []),
            e) : e
        }
        function createSessionEnvelope(e, t) {
            var n = getSdkMetadataForEnvelopeHeader(t)
              , r = "aggregates"in e ? "sessions" : "session";
            return [createEnvelope(__assign(__assign({
                sent_at: (new Date).toISOString()
            }, n && {
                sdk: n
            }), !!t.tunnel && {
                dsn: dsnToString(t.dsn)
            }), [[{
                type: r
            }, e]]), r]
        }
        var j, N = function() {
            function NoopTransport() {}
            return NoopTransport.prototype.sendEvent = function(e) {
                return resolvedSyncPromise({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: "skipped"
                })
            }
            ,
            NoopTransport.prototype.close = function(e) {
                return resolvedSyncPromise(!0)
            }
            ,
            NoopTransport
        }(), D = function() {
            function BaseBackend(e) {
                this._options = e,
                this._options.dsn || h && n.warn("No DSN provided, backend will not do anything."),
                this._transport = this._setupTransport()
            }
            return BaseBackend.prototype.eventFromException = function(e, t) {
                throw new F("Backend has to implement `eventFromException` method")
            }
            ,
            BaseBackend.prototype.eventFromMessage = function(e, t, n) {
                throw new F("Backend has to implement `eventFromMessage` method")
            }
            ,
            BaseBackend.prototype.sendEvent = function(e) {
                if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                    var t = function createEventEnvelope(e, t) {
                        var n = getSdkMetadataForEnvelopeHeader(t)
                          , r = e.type || "event"
                          , i = (e.sdkProcessingMetadata || {}).transactionSampling || {}
                          , o = i.method
                          , s = i.rate;
                        return enhanceEventWithSdkInfo(e, t.metadata.sdk),
                        e.tags = e.tags || {},
                        e.extra = e.extra || {},
                        e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized || (e.tags.skippedNormalization = !0,
                        e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"),
                        delete e.sdkProcessingMetadata,
                        createEnvelope(__assign(__assign({
                            event_id: e.event_id,
                            sent_at: (new Date).toISOString()
                        }, n && {
                            sdk: n
                        }), !!t.tunnel && {
                            dsn: dsnToString(t.dsn)
                        }), [[{
                            type: r,
                            sample_rates: [{
                                id: o,
                                rate: s
                            }]
                        }, e]])
                    }(e, initAPIDetails(this._options.dsn, this._options._metadata, this._options.tunnel));
                    this._newTransport.send(t).then(null, (function(e) {
                        h && n.error("Error while sending event:", e)
                    }
                    ))
                } else
                    this._transport.sendEvent(e).then(null, (function(e) {
                        h && n.error("Error while sending event:", e)
                    }
                    ))
            }
            ,
            BaseBackend.prototype.sendSession = function(e) {
                if (this._transport.sendSession)
                    if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                        var t = tslib_es6_read(createSessionEnvelope(e, initAPIDetails(this._options.dsn, this._options._metadata, this._options.tunnel)), 1)[0];
                        this._newTransport.send(t).then(null, (function(e) {
                            h && n.error("Error while sending session:", e)
                        }
                        ))
                    } else
                        this._transport.sendSession(e).then(null, (function(e) {
                            h && n.error("Error while sending session:", e)
                        }
                        ));
                else
                    h && n.warn("Dropping session because custom transport doesn't implement sendSession")
            }
            ,
            BaseBackend.prototype.getTransport = function() {
                return this._transport
            }
            ,
            BaseBackend.prototype._setupTransport = function() {
                return new N
            }
            ,
            BaseBackend
        }();
        !function(e) {
            e.Fatal = "fatal",
            e.Error = "error",
            e.Warning = "warning",
            e.Log = "log",
            e.Info = "info",
            e.Debug = "debug",
            e.Critical = "critical"
        }(j || (j = {}));
        var A = "?";
        function createFrame(e, t, n, r) {
            var i = {
                filename: e,
                function: t,
                in_app: !0
            };
            return void 0 !== n && (i.lineno = n),
            void 0 !== r && (i.colno = r),
            i
        }
        var L = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
          , U = /\((\S*)(?::(\d+))(?::(\d+))\)/
          , M = [30, function(e) {
            var t = L.exec(e);
            if (t) {
                if (t[2] && 0 === t[2].indexOf("eval")) {
                    var n = U.exec(t[2]);
                    n && (t[2] = n[1],
                    t[3] = n[2],
                    t[4] = n[3])
                }
                var r = tslib_es6_read(extractSafariExtensionDetails(t[1] || A, t[2]), 2)
                  , i = r[0];
                return createFrame(r[1], i, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0)
            }
        }
        ]
          , q = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
          , z = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
          , W = [50, function(e) {
            var t, n = q.exec(e);
            if (n) {
                if (n[3] && n[3].indexOf(" > eval") > -1) {
                    var r = z.exec(n[3]);
                    r && (n[1] = n[1] || "eval",
                    n[3] = r[1],
                    n[4] = r[2],
                    n[5] = "")
                }
                var i = n[3]
                  , o = n[1] || A;
                return o = (t = tslib_es6_read(extractSafariExtensionDetails(o, i), 2))[0],
                createFrame(i = t[1], o, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0)
            }
        }
        ]
          , G = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
          , Y = [40, function(e) {
            var t = G.exec(e);
            return t ? createFrame(t[2], t[1] || A, +t[3], t[4] ? +t[4] : void 0) : void 0
        }
        ]
          , K = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i
          , X = [10, function(e) {
            var t = K.exec(e);
            return t ? createFrame(t[2], t[3] || A, +t[1]) : void 0
        }
        ]
          , $ = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i
          , J = [20, function(e) {
            var t = $.exec(e);
            return t ? createFrame(t[5], t[3] || t[4] || A, +t[1], +t[2]) : void 0
        }
        ]
          , extractSafariExtensionDetails = function(e, t) {
            var n = -1 !== e.indexOf("safari-extension")
              , r = -1 !== e.indexOf("safari-web-extension");
            return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : A, n ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t]
        };
        function exceptionFromError(e) {
            var t = parseStackFrames(e)
              , n = {
                type: e && e.name,
                value: extractMessage(e)
            };
            return t.length && (n.stacktrace = {
                frames: t
            }),
            void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"),
            n
        }
        function eventFromError(e) {
            return {
                exception: {
                    values: [exceptionFromError(e)]
                }
            }
        }
        function parseStackFrames(e) {
            var t = e.stacktrace || e.stack || ""
              , n = function getPopSize(e) {
                if (e) {
                    if ("number" == typeof e.framesToPop)
                        return e.framesToPop;
                    if (V.test(e.message))
                        return 1
                }
                return 0
            }(e);
            try {
                return function createStackParser() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    var n = e.sort((function(e, t) {
                        return e[0] - t[0]
                    }
                    )).map((function(e) {
                        return e[1]
                    }
                    ));
                    return function(e, t) {
                        var r, i, o, s;
                        void 0 === t && (t = 0);
                        var a = [];
                        try {
                            for (var u = __values(e.split("\n").slice(t)), c = u.next(); !c.done; c = u.next()) {
                                var d = c.value;
                                try {
                                    for (var p = (o = void 0,
                                    __values(n)), l = p.next(); !l.done; l = p.next()) {
                                        var f = (0,
                                        l.value)(d);
                                        if (f) {
                                            a.push(f);
                                            break
                                        }
                                    }
                                } catch (h) {
                                    o = {
                                        error: h
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (s = p.return) && s.call(p)
                                    } finally {
                                        if (o)
                                            throw o.error
                                    }
                                }
                            }
                        } catch (v) {
                            r = {
                                error: v
                            }
                        } finally {
                            try {
                                c && !c.done && (i = u.return) && i.call(u)
                            } finally {
                                if (r)
                                    throw r.error
                            }
                        }
                        return stripSentryFramesAndReverse(a)
                    }
                }(X, J, M, Y, W)(t, n)
            } catch (r) {}
            return []
        }
        var V = /Minified React error #\d+;/i;
        function extractMessage(e) {
            var t = e && e.message;
            return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
        }
        function eventFromUnknownInput(e, t, n, r) {
            var i;
            if (isErrorEvent(e) && e.error)
                return eventFromError(e.error);
            if (isDOMError(e) || function isDOMException(e) {
                return isBuiltin(e, "DOMException")
            }(e)) {
                var o = e;
                if ("stack"in e)
                    i = eventFromError(e);
                else {
                    var s = o.name || (isDOMError(o) ? "DOMError" : "DOMException")
                      , a = o.message ? s + ": " + o.message : s;
                    addExceptionTypeValue(i = eventFromString(a, t, n), a)
                }
                return "code"in o && (i.tags = __assign(__assign({}, i.tags), {
                    "DOMException.code": "" + o.code
                })),
                i
            }
            return isError(e) ? eventFromError(e) : isPlainObject(e) || isEvent(e) ? (i = function eventFromPlainObject(e, t, n) {
                var r = {
                    exception: {
                        values: [{
                            type: isEvent(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                            value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + extractExceptionKeysForMessage(e)
                        }]
                    },
                    extra: {
                        __serialized__: normalizeToSize(e)
                    }
                };
                if (t) {
                    var i = parseStackFrames(t);
                    i.length && (r.stacktrace = {
                        frames: i
                    })
                }
                return r
            }(e, t, r),
            addExceptionMechanism(i, {
                synthetic: !0
            }),
            i) : (addExceptionTypeValue(i = eventFromString(e, t, n), "" + e, void 0),
            addExceptionMechanism(i, {
                synthetic: !0
            }),
            i)
        }
        function eventFromString(e, t, n) {
            var r = {
                message: e
            };
            if (n && t) {
                var i = parseStackFrames(t);
                i.length && (r.stacktrace = {
                    frames: i
                })
            }
            return r
        }
        function makePromiseBuffer(e) {
            var t = [];
            function remove(e) {
                return t.splice(t.indexOf(e), 1)[0]
            }
            return {
                $: t,
                add: function add(n) {
                    if (!function isReady() {
                        return void 0 === e || t.length < e
                    }())
                        return rejectedSyncPromise(new F("Not adding Promise due to buffer limit reached."));
                    var r = n();
                    return -1 === t.indexOf(r) && t.push(r),
                    r.then((function() {
                        return remove(r)
                    }
                    )).then(null, (function() {
                        return remove(r).then(null, (function() {}
                        ))
                    }
                    )),
                    r
                },
                drain: function drain(e) {
                    return new d((function(n, r) {
                        var i = t.length;
                        if (!i)
                            return n(!0);
                        var o = setTimeout((function() {
                            e && e > 0 && n(!1)
                        }
                        ), e);
                        t.forEach((function(e) {
                            resolvedSyncPromise(e).then((function() {
                                --i || (clearTimeout(o),
                                n(!0))
                            }
                            ), r)
                        }
                        ))
                    }
                    ))
                }
            }
        }
        function disabledUntil(e, t) {
            return e[t] || e.all || 0
        }
        function isRateLimited(e, t, n) {
            return void 0 === n && (n = Date.now()),
            disabledUntil(e, t) > n
        }
        function updateRateLimits(e, t, n) {
            var r, i, o, s;
            void 0 === n && (n = Date.now());
            var a = __assign({}, e)
              , u = t["x-sentry-rate-limits"]
              , c = t["retry-after"];
            if (u)
                try {
                    for (var d = __values(u.trim().split(",")), p = d.next(); !p.done; p = d.next()) {
                        var l = p.value.split(":", 2)
                          , f = parseInt(l[0], 10)
                          , h = 1e3 * (isNaN(f) ? 60 : f);
                        if (l[1])
                            try {
                                for (var v = (o = void 0,
                                __values(l[1].split(";"))), _ = v.next(); !_.done; _ = v.next()) {
                                    a[_.value] = n + h
                                }
                            } catch (g) {
                                o = {
                                    error: g
                                }
                            } finally {
                                try {
                                    _ && !_.done && (s = v.return) && s.call(v)
                                } finally {
                                    if (o)
                                        throw o.error
                                }
                            }
                        else
                            a.all = n + h
                    }
                } catch (m) {
                    r = {
                        error: m
                    }
                } finally {
                    try {
                        p && !p.done && (i = d.return) && i.call(d)
                    } finally {
                        if (r)
                            throw r.error
                    }
                }
            else
                c && (a.all = n + function parseRetryAfterHeader(e, t) {
                    void 0 === t && (t = Date.now());
                    var n = parseInt("" + e, 10);
                    if (!isNaN(n))
                        return 1e3 * n;
                    var r = Date.parse("" + e);
                    return isNaN(r) ? 6e4 : r - t
                }(c, n));
            return a
        }
        function eventStatusFromHttpCode(e) {
            return e >= 200 && e < 300 ? "success" : 429 === e ? "rate_limit" : e >= 400 && e < 500 ? "invalid" : e >= 500 ? "failed" : "unknown"
        }
        function createTransport(e, t, n) {
            void 0 === n && (n = makePromiseBuffer(e.bufferSize || 30));
            var r = {};
            return {
                send: function send(e) {
                    var i = function getEnvelopeType(e) {
                        var t = tslib_es6_read(e, 2)
                          , n = tslib_es6_read(t[1], 1);
                        return tslib_es6_read(n[0], 1)[0].type
                    }(e)
                      , o = "event" === i ? "error" : i
                      , s = {
                        category: o,
                        body: serializeEnvelope(e)
                    };
                    return isRateLimited(r, o) ? rejectedSyncPromise({
                        status: "rate_limit",
                        reason: getRateLimitReason(r, o)
                    }) : n.add((function() {
                        return t(s).then((function(e) {
                            var t = e.body
                              , n = e.headers
                              , i = e.reason
                              , s = eventStatusFromHttpCode(e.statusCode);
                            return n && (r = updateRateLimits(r, n)),
                            "success" === s ? resolvedSyncPromise({
                                status: s,
                                reason: i
                            }) : rejectedSyncPromise({
                                status: s,
                                reason: i || t || ("rate_limit" === s ? getRateLimitReason(r, o) : "Unknown transport error")
                            })
                        }
                        ))
                    }
                    ))
                },
                flush: function(e) {
                    return n.drain(e)
                }
            }
        }
        function getRateLimitReason(e, t) {
            return "Too many " + t + " requests, backing off until: " + new Date(disabledUntil(e, t)).toISOString()
        }
        var Q, Z = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, ee = (0,
        e.R)();
        function getNativeFetchImplementation() {
            if (Q)
                return Q;
            if (isNativeFetch(ee.fetch))
                return Q = ee.fetch.bind(ee);
            var e = ee.document
              , t = ee.fetch;
            if (e && "function" == typeof e.createElement)
                try {
                    var r = e.createElement("iframe");
                    r.hidden = !0,
                    e.head.appendChild(r);
                    var i = r.contentWindow;
                    i && i.fetch && (t = i.fetch),
                    e.head.removeChild(r)
                } catch (o) {
                    Z && n.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", o)
                }
            return Q = t.bind(ee)
        }
        function sendReport(e, t) {
            return "[object Navigator]" === Object.prototype.toString.call(ee && ee.navigator) && "function" == typeof ee.navigator.sendBeacon ? ee.navigator.sendBeacon.bind(ee.navigator)(e, t) : supportsFetch() ? function forget(e) {
                e.then(null, (function(e) {
                    console.error(e)
                }
                ))
            }(getNativeFetchImplementation()(e, {
                body: t,
                method: "POST",
                credentials: "omit",
                keepalive: !0
            })) : void 0
        }
        function requestTypeToCategory(e) {
            return "event" === e ? "error" : e
        }
        var te = (0,
        e.R)()
          , ne = function() {
            function BaseTransport(e) {
                var t = this;
                this.options = e,
                this._buffer = makePromiseBuffer(30),
                this._rateLimits = {},
                this._outcomes = {},
                this._api = initAPIDetails(e.dsn, e._metadata, e.tunnel),
                this.url = getStoreEndpointWithUrlEncodedAuth(this._api.dsn),
                this.options.sendClientReports && te.document && te.document.addEventListener("visibilitychange", (function() {
                    "hidden" === te.document.visibilityState && t._flushOutcomes()
                }
                ))
            }
            return BaseTransport.prototype.sendEvent = function(e) {
                return this._sendRequest(function eventToSentryRequest(e, t) {
                    var n, r = getSdkMetadataForEnvelopeHeader(t), i = e.type || "event", o = "transaction" === i || !!t.tunnel, s = (e.sdkProcessingMetadata || {}).transactionSampling || {}, a = s.method, u = s.rate;
                    enhanceEventWithSdkInfo(e, t.metadata.sdk),
                    e.tags = e.tags || {},
                    e.extra = e.extra || {},
                    e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized || (e.tags.skippedNormalization = !0,
                    e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset"),
                    delete e.sdkProcessingMetadata;
                    try {
                        n = JSON.stringify(e)
                    } catch (l) {
                        e.tags.JSONStringifyError = !0,
                        e.extra.JSONStringifyError = l;
                        try {
                            n = JSON.stringify(normalize(e))
                        } catch (f) {
                            var c = f;
                            n = JSON.stringify({
                                message: "JSON.stringify error after renormalization",
                                extra: {
                                    message: c.message,
                                    stack: c.stack
                                }
                            })
                        }
                    }
                    var d = {
                        body: n,
                        type: i,
                        url: o ? getEnvelopeEndpointWithUrlEncodedAuth(t.dsn, t.tunnel) : getStoreEndpointWithUrlEncodedAuth(t.dsn)
                    };
                    if (o) {
                        var p = createEnvelope(__assign(__assign({
                            event_id: e.event_id,
                            sent_at: (new Date).toISOString()
                        }, r && {
                            sdk: r
                        }), !!t.tunnel && {
                            dsn: dsnToString(t.dsn)
                        }), [[{
                            type: i,
                            sample_rates: [{
                                id: a,
                                rate: u
                            }]
                        }, d.body]]);
                        d.body = serializeEnvelope(p)
                    }
                    return d
                }(e, this._api), e)
            }
            ,
            BaseTransport.prototype.sendSession = function(e) {
                return this._sendRequest(function sessionToSentryRequest(e, t) {
                    var n = tslib_es6_read(createSessionEnvelope(e, t), 2)
                      , r = n[0]
                      , i = n[1];
                    return {
                        body: serializeEnvelope(r),
                        type: i,
                        url: getEnvelopeEndpointWithUrlEncodedAuth(t.dsn, t.tunnel)
                    }
                }(e, this._api), e)
            }
            ,
            BaseTransport.prototype.close = function(e) {
                return this._buffer.drain(e)
            }
            ,
            BaseTransport.prototype.recordLostEvent = function(e, t) {
                var r;
                if (this.options.sendClientReports) {
                    var i = requestTypeToCategory(t) + ":" + e;
                    Z && n.log("Adding outcome: " + i),
                    this._outcomes[i] = (null != (r = this._outcomes[i]) ? r : 0) + 1
                }
            }
            ,
            BaseTransport.prototype._flushOutcomes = function() {
                if (this.options.sendClientReports) {
                    var e = this._outcomes;
                    if (this._outcomes = {},
                    Object.keys(e).length) {
                        Z && n.log("Flushing outcomes:\n" + JSON.stringify(e, null, 2));
                        var t = getEnvelopeEndpointWithUrlEncodedAuth(this._api.dsn, this._api.tunnel)
                          , i = function createClientReportEnvelope(e, t, n) {
                            return createEnvelope(t ? {
                                dsn: t
                            } : {}, [[{
                                type: "client_report"
                            }, {
                                timestamp: n || (0,
                                r.yW)(),
                                discarded_events: e
                            }]])
                        }(Object.keys(e).map((function(t) {
                            var n = tslib_es6_read(t.split(":"), 2)
                              , r = n[0];
                            return {
                                reason: n[1],
                                category: r,
                                quantity: e[t]
                            }
                        }
                        )), this._api.tunnel && dsnToString(this._api.dsn));
                        try {
                            sendReport(t, serializeEnvelope(i))
                        } catch (o) {
                            Z && n.error(o)
                        }
                    } else
                        Z && n.log("No outcomes to flush")
                }
            }
            ,
            BaseTransport.prototype._handleResponse = function(e) {
                var t = e.requestType
                  , r = e.response
                  , i = e.headers
                  , o = e.resolve
                  , s = e.reject
                  , a = eventStatusFromHttpCode(r.status);
                this._rateLimits = updateRateLimits(this._rateLimits, i),
                this._isRateLimited(t) && Z && n.warn("Too many " + t + " requests, backing off until: " + this._disabledUntil(t)),
                "success" !== a ? s(r) : o({
                    status: a
                })
            }
            ,
            BaseTransport.prototype._disabledUntil = function(e) {
                var t = requestTypeToCategory(e);
                return new Date(disabledUntil(this._rateLimits, t))
            }
            ,
            BaseTransport.prototype._isRateLimited = function(e) {
                var t = requestTypeToCategory(e);
                return isRateLimited(this._rateLimits, t)
            }
            ,
            BaseTransport
        }()
          , re = function(e) {
            function FetchTransport(t, n) {
                void 0 === n && (n = getNativeFetchImplementation());
                var r = e.call(this, t) || this;
                return r._fetch = n,
                r
            }
            return __extends(FetchTransport, e),
            FetchTransport.prototype._sendRequest = function(e, t) {
                var n = this;
                if (this._isRateLimited(e.type))
                    return this.recordLostEvent("ratelimit_backoff", e.type),
                    Promise.reject({
                        event: t,
                        type: e.type,
                        reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                        status: 429
                    });
                var r = {
                    body: e.body,
                    method: "POST",
                    referrerPolicy: supportsReferrerPolicy() ? "origin" : ""
                };
                return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters),
                void 0 !== this.options.headers && (r.headers = this.options.headers),
                this._buffer.add((function() {
                    return new d((function(t, i) {
                        n._fetch(e.url, r).then((function(r) {
                            var o = {
                                "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": r.headers.get("Retry-After")
                            };
                            n._handleResponse({
                                requestType: e.type,
                                response: r,
                                headers: o,
                                resolve: t,
                                reject: i
                            })
                        }
                        )).catch(i)
                    }
                    ))
                }
                )).then(void 0, (function(t) {
                    throw t instanceof F ? n.recordLostEvent("queue_overflow", e.type) : n.recordLostEvent("network_error", e.type),
                    t
                }
                ))
            }
            ,
            FetchTransport
        }(ne);
        var ie = function(e) {
            function XHRTransport() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(XHRTransport, e),
            XHRTransport.prototype._sendRequest = function(e, t) {
                var n = this;
                return this._isRateLimited(e.type) ? (this.recordLostEvent("ratelimit_backoff", e.type),
                Promise.reject({
                    event: t,
                    type: e.type,
                    reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                    status: 429
                })) : this._buffer.add((function() {
                    return new d((function(t, r) {
                        var i = new XMLHttpRequest;
                        for (var o in i.onreadystatechange = function() {
                            if (4 === i.readyState) {
                                var o = {
                                    "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                    "retry-after": i.getResponseHeader("Retry-After")
                                };
                                n._handleResponse({
                                    requestType: e.type,
                                    response: i,
                                    headers: o,
                                    resolve: t,
                                    reject: r
                                })
                            }
                        }
                        ,
                        i.open("POST", e.url),
                        n.options.headers)
                            Object.prototype.hasOwnProperty.call(n.options.headers, o) && i.setRequestHeader(o, n.options.headers[o]);
                        i.send(e.body)
                    }
                    ))
                }
                )).then(void 0, (function(t) {
                    throw t instanceof F ? n.recordLostEvent("queue_overflow", e.type) : n.recordLostEvent("network_error", e.type),
                    t
                }
                ))
            }
            ,
            XHRTransport
        }(ne)
          , oe = function(e) {
            function BrowserBackend() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(BrowserBackend, e),
            BrowserBackend.prototype.eventFromException = function(e, t) {
                return function eventFromException(e, t, n) {
                    var r = eventFromUnknownInput(e, t && t.syntheticException || void 0, n);
                    return addExceptionMechanism(r),
                    r.level = j.Error,
                    t && t.event_id && (r.event_id = t.event_id),
                    resolvedSyncPromise(r)
                }(e, t, this._options.attachStacktrace)
            }
            ,
            BrowserBackend.prototype.eventFromMessage = function(e, t, n) {
                return void 0 === t && (t = j.Info),
                function eventFromMessage(e, t, n, r) {
                    void 0 === t && (t = j.Info);
                    var i = eventFromString(e, n && n.syntheticException || void 0, r);
                    return i.level = t,
                    n && n.event_id && (i.event_id = n.event_id),
                    resolvedSyncPromise(i)
                }(e, t, n, this._options.attachStacktrace)
            }
            ,
            BrowserBackend.prototype._setupTransport = function() {
                if (!this._options.dsn)
                    return e.prototype._setupTransport.call(this);
                var t = __assign(__assign({}, this._options.transportOptions), {
                    dsn: this._options.dsn,
                    tunnel: this._options.tunnel,
                    sendClientReports: this._options.sendClientReports,
                    _metadata: this._options._metadata
                })
                  , n = initAPIDetails(t.dsn, t._metadata, t.tunnel)
                  , r = getEnvelopeEndpointWithUrlEncodedAuth(n.dsn, n.tunnel);
                if (this._options.transport)
                    return new this._options.transport(t);
                if (supportsFetch()) {
                    var i = __assign({}, t.fetchParameters);
                    return this._newTransport = function makeNewFetchTransport(e, t) {
                        return void 0 === t && (t = getNativeFetchImplementation()),
                        createTransport({
                            bufferSize: e.bufferSize
                        }, (function makeRequest(n) {
                            var r = __assign({
                                body: n.body,
                                method: "POST",
                                referrerPolicy: "origin"
                            }, e.requestOptions);
                            return t(e.url, r).then((function(e) {
                                return e.text().then((function(t) {
                                    return {
                                        body: t,
                                        headers: {
                                            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                                            "retry-after": e.headers.get("Retry-After")
                                        },
                                        reason: e.statusText,
                                        statusCode: e.status
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }({
                        requestOptions: i,
                        url: r
                    }),
                    new re(t)
                }
                return this._newTransport = function makeNewXHRTransport(e) {
                    return createTransport({
                        bufferSize: e.bufferSize
                    }, (function makeRequest(t) {
                        return new d((function(n, r) {
                            var i = new XMLHttpRequest;
                            for (var o in i.onreadystatechange = function() {
                                if (4 === i.readyState) {
                                    var e = {
                                        body: i.response,
                                        headers: {
                                            "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                            "retry-after": i.getResponseHeader("Retry-After")
                                        },
                                        reason: i.statusText,
                                        statusCode: i.status
                                    };
                                    n(e)
                                }
                            }
                            ,
                            i.open("POST", e.url),
                            e.headers)
                                Object.prototype.hasOwnProperty.call(e.headers, o) && i.setRequestHeader(o, e.headers[o]);
                            i.send(t.body)
                        }
                        ))
                    }
                    ))
                }({
                    url: r,
                    headers: t.headers
                }),
                new ie(t)
            }
            ,
            BrowserBackend
        }(D);
        function callOnHub(e) {
            for (var t = [], n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            var r = getCurrentHub();
            if (r && r[e])
                return r[e].apply(r, tslib_es6_spread(t));
            throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
        }
        function captureException(e, t) {
            return callOnHub("captureException", e, {
                captureContext: t,
                originalException: e,
                syntheticException: new Error("Sentry syntheticException")
            })
        }
        function configureScope(e) {
            callOnHub("configureScope", e)
        }
        function withScope(e) {
            callOnHub("withScope", e)
        }
        var se = (0,
        e.R)()
          , ae = 0;
        function shouldIgnoreOnError() {
            return ae > 0
        }
        function ignoreNextOnError() {
            ae += 1,
            setTimeout((function() {
                ae -= 1
            }
            ))
        }
        function wrap(e, t, n) {
            if (void 0 === t && (t = {}),
            "function" != typeof e)
                return e;
            try {
                var r = e.__sentry_wrapped__;
                if (r)
                    return r;
                if (getOriginalFunction(e))
                    return e
            } catch (o) {
                return e
            }
            var sentryWrapped = function() {
                var r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    var i = r.map((function(e) {
                        return wrap(e, t)
                    }
                    ));
                    return e.apply(this, i)
                } catch (o) {
                    throw ignoreNextOnError(),
                    withScope((function(e) {
                        e.addEventProcessor((function(e) {
                            return t.mechanism && (addExceptionTypeValue(e, void 0, void 0),
                            addExceptionMechanism(e, t.mechanism)),
                            e.extra = __assign(__assign({}, e.extra), {
                                arguments: r
                            }),
                            e
                        }
                        )),
                        captureException(o)
                    }
                    )),
                    o
                }
            };
            try {
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) && (sentryWrapped[i] = e[i])
            } catch (s) {}
            markFunctionWrapped(sentryWrapped, e),
            addNonEnumerableProperty(e, "__sentry_wrapped__", sentryWrapped);
            try {
                Object.getOwnPropertyDescriptor(sentryWrapped, "name").configurable && Object.defineProperty(sentryWrapped, "name", {
                    get: function() {
                        return e.name
                    }
                })
            } catch (s) {}
            return sentryWrapped
        }
        function injectReportDialog(e) {
            if (void 0 === e && (e = {}),
            se.document)
                if (e.eventId)
                    if (e.dsn) {
                        var t = se.document.createElement("script");
                        t.async = !0,
                        t.src = function getReportDialogEndpoint(e, t) {
                            var n = makeDsn(e)
                              , r = getBaseApiEndpoint(n) + "embed/error-page/"
                              , i = "dsn=" + dsnToString(n);
                            for (var o in t)
                                if ("dsn" !== o)
                                    if ("user" === o) {
                                        if (!t.user)
                                            continue;
                                        t.user.name && (i += "&name=" + encodeURIComponent(t.user.name)),
                                        t.user.email && (i += "&email=" + encodeURIComponent(t.user.email))
                                    } else
                                        i += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(t[o]);
                            return r + "?" + i
                        }(e.dsn, e),
                        e.onLoad && (t.onload = e.onLoad);
                        var r = se.document.head || se.document.body;
                        r && r.appendChild(t)
                    } else
                        Z && n.error("Missing dsn option in showReportDialog call");
                else
                    Z && n.error("Missing eventId option in showReportDialog call")
        }
        var ue = ["fatal", "error", "warning", "log", "info", "debug", "critical"];
        function severityFromString(e) {
            return "warn" === e ? j.Warning : function isSupportedSeverity(e) {
                return -1 !== ue.indexOf(e)
            }(e) ? e : j.Log
        }
        var ce = function() {
            function Breadcrumbs(e) {
                this.name = Breadcrumbs.id,
                this._options = __assign({
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, e)
            }
            return Breadcrumbs.prototype.addSentryBreadcrumb = function(e) {
                this._options.sentry && getCurrentHub().addBreadcrumb({
                    category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                    event_id: e.event_id,
                    level: e.level,
                    message: getEventDescription(e)
                }, {
                    event: e
                })
            }
            ,
            Breadcrumbs.prototype.setupOnce = function() {
                this._options.console && addInstrumentationHandler("console", _consoleBreadcrumb),
                this._options.dom && addInstrumentationHandler("dom", function _domBreadcrumb(e) {
                    function _innerDomBreadcrumb(t) {
                        var n, r = "object" == typeof e ? e.serializeAttribute : void 0;
                        "string" == typeof r && (r = [r]);
                        try {
                            n = t.event.target ? htmlTreeAsString(t.event.target, r) : htmlTreeAsString(t.event, r)
                        } catch (i) {
                            n = "<unknown>"
                        }
                        0 !== n.length && getCurrentHub().addBreadcrumb({
                            category: "ui." + t.name,
                            message: n
                        }, {
                            event: t.event,
                            name: t.name,
                            global: t.global
                        })
                    }
                    return _innerDomBreadcrumb
                }(this._options.dom)),
                this._options.xhr && addInstrumentationHandler("xhr", _xhrBreadcrumb),
                this._options.fetch && addInstrumentationHandler("fetch", _fetchBreadcrumb),
                this._options.history && addInstrumentationHandler("history", _historyBreadcrumb)
            }
            ,
            Breadcrumbs.id = "Breadcrumbs",
            Breadcrumbs
        }();
        function _consoleBreadcrumb(e) {
            var t = {
                category: "console",
                data: {
                    arguments: e.args,
                    logger: "console"
                },
                level: severityFromString(e.level),
                message: safeJoin(e.args, " ")
            };
            if ("assert" === e.level) {
                if (!1 !== e.args[0])
                    return;
                t.message = "Assertion failed: " + (safeJoin(e.args.slice(1), " ") || "console.assert"),
                t.data.arguments = e.args.slice(1)
            }
            getCurrentHub().addBreadcrumb(t, {
                input: e.args,
                level: e.level
            })
        }
        function _xhrBreadcrumb(e) {
            if (e.endTimestamp) {
                if (e.xhr.__sentry_own_request__)
                    return;
                var t = e.xhr.__sentry_xhr__ || {}
                  , n = t.method
                  , r = t.url
                  , i = t.status_code
                  , o = t.body;
                getCurrentHub().addBreadcrumb({
                    category: "xhr",
                    data: {
                        method: n,
                        url: r,
                        status_code: i
                    },
                    type: "http"
                }, {
                    xhr: e.xhr,
                    input: o
                })
            } else
                ;
        }
        function _fetchBreadcrumb(e) {
            e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? getCurrentHub().addBreadcrumb({
                category: "fetch",
                data: e.fetchData,
                level: j.Error,
                type: "http"
            }, {
                data: e.error,
                input: e.args
            }) : getCurrentHub().addBreadcrumb({
                category: "fetch",
                data: __assign(__assign({}, e.fetchData), {
                    status_code: e.response.status
                }),
                type: "http"
            }, {
                input: e.args,
                response: e.response
            })))
        }
        function _historyBreadcrumb(t) {
            var n = (0,
            e.R)()
              , r = t.from
              , i = t.to
              , o = parseUrl(n.location.href)
              , s = parseUrl(r)
              , a = parseUrl(i);
            s.path || (s = o),
            o.protocol === a.protocol && o.host === a.host && (i = a.relative),
            o.protocol === s.protocol && o.host === s.host && (r = s.relative),
            getCurrentHub().addBreadcrumb({
                category: "navigation",
                data: {
                    from: r,
                    to: i
                }
            })
        }
        var de = function(t) {
            function BrowserClient(e) {
                void 0 === e && (e = {});
                return e._metadata = e._metadata || {},
                e._metadata.sdk = e._metadata.sdk || {
                    name: "sentry.javascript.browser",
                    packages: [{
                        name: "npm:@sentry/browser",
                        version: R
                    }],
                    version: R
                },
                t.call(this, oe, e) || this
            }
            return __extends(BrowserClient, t),
            BrowserClient.prototype.showReportDialog = function(t) {
                void 0 === t && (t = {}),
                (0,
                e.R)().document && (this._isEnabled() ? injectReportDialog(__assign(__assign({}, t), {
                    dsn: t.dsn || this.getDsn()
                })) : Z && n.error("Trying to call showReportDialog with Sentry Client disabled"))
            }
            ,
            BrowserClient.prototype._prepareEvent = function(e, n, r) {
                return e.platform = e.platform || "javascript",
                t.prototype._prepareEvent.call(this, e, n, r)
            }
            ,
            BrowserClient.prototype._sendEvent = function(e) {
                var n = this.getIntegration(ce);
                n && n.addSentryBreadcrumb(e),
                t.prototype._sendEvent.call(this, e)
            }
            ,
            BrowserClient
        }(H)
          , pe = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
          , le = function() {
            function TryCatch(e) {
                this.name = TryCatch.id,
                this._options = __assign({
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0
                }, e)
            }
            return TryCatch.prototype.setupOnce = function() {
                var t = (0,
                e.R)();
                this._options.setTimeout && fill(t, "setTimeout", _wrapTimeFunction),
                this._options.setInterval && fill(t, "setInterval", _wrapTimeFunction),
                this._options.requestAnimationFrame && fill(t, "requestAnimationFrame", _wrapRAF),
                this._options.XMLHttpRequest && "XMLHttpRequest"in t && fill(XMLHttpRequest.prototype, "send", _wrapXHR);
                var n = this._options.eventTarget;
                n && (Array.isArray(n) ? n : pe).forEach(_wrapEventTarget)
            }
            ,
            TryCatch.id = "TryCatch",
            TryCatch
        }();
        function _wrapTimeFunction(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = t[0];
                return t[0] = wrap(r, {
                    mechanism: {
                        data: {
                            function: getFunctionName(e)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }),
                e.apply(this, t)
            }
        }
        function _wrapRAF(e) {
            return function(t) {
                return e.apply(this, [wrap(t, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: getFunctionName(e)
                        },
                        handled: !0,
                        type: "instrument"
                    }
                })])
            }
        }
        function _wrapXHR(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                var r = this
                  , i = ["onload", "onerror", "onprogress", "onreadystatechange"];
                return i.forEach((function(e) {
                    e in r && "function" == typeof r[e] && fill(r, e, (function(t) {
                        var n = {
                            mechanism: {
                                data: {
                                    function: e,
                                    handler: getFunctionName(t)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }
                          , r = getOriginalFunction(t);
                        return r && (n.mechanism.data.handler = getFunctionName(r)),
                        wrap(t, n)
                    }
                    ))
                }
                )),
                e.apply(this, t)
            }
        }
        function _wrapEventTarget(t) {
            var n = (0,
            e.R)()
              , r = n[t] && n[t].prototype;
            r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (fill(r, "addEventListener", (function(e) {
                return function(n, r, i) {
                    try {
                        "function" == typeof r.handleEvent && (r.handleEvent = wrap(r.handleEvent.bind(r), {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: getFunctionName(r),
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    } catch (o) {}
                    return e.apply(this, [n, wrap(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: getFunctionName(r),
                                target: t
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), i])
                }
            }
            )),
            fill(r, "removeEventListener", (function(e) {
                return function(t, n, r) {
                    var i = n;
                    try {
                        var o = i && i.__sentry_wrapped__;
                        o && e.call(this, t, o, r)
                    } catch (s) {}
                    return e.call(this, t, i, r)
                }
            }
            )))
        }
        var fe = function() {
            function GlobalHandlers(e) {
                this.name = GlobalHandlers.id,
                this._installFunc = {
                    onerror: _installGlobalOnErrorHandler,
                    onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
                },
                this._options = __assign({
                    onerror: !0,
                    onunhandledrejection: !0
                }, e)
            }
            return GlobalHandlers.prototype.setupOnce = function() {
                Error.stackTraceLimit = 50;
                var e, t = this._options;
                for (var r in t) {
                    var i = this._installFunc[r];
                    i && t[r] && (e = r,
                    Z && n.log("Global Handler attached: " + e),
                    i(),
                    this._installFunc[r] = void 0)
                }
            }
            ,
            GlobalHandlers.id = "GlobalHandlers",
            GlobalHandlers
        }();
        function _installGlobalOnErrorHandler() {
            addInstrumentationHandler("error", (function(e) {
                var t = tslib_es6_read(getHubAndAttachStacktrace(), 2)
                  , n = t[0]
                  , r = t[1];
                if (n.getIntegration(fe)) {
                    var i = e.msg
                      , o = e.url
                      , s = e.line
                      , a = e.column
                      , u = e.error;
                    if (!(shouldIgnoreOnError() || u && u.__sentry_own_request__)) {
                        var c = void 0 === u && isString(i) ? function _eventFromIncompleteOnError(e, t, n, r) {
                            var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                              , o = isErrorEvent(e) ? e.message : e
                              , s = "Error"
                              , a = o.match(i);
                            a && (s = a[1],
                            o = a[2]);
                            return _enhanceEventWithInitialFrame({
                                exception: {
                                    values: [{
                                        type: s,
                                        value: o
                                    }]
                                }
                            }, t, n, r)
                        }(i, o, s, a) : _enhanceEventWithInitialFrame(eventFromUnknownInput(u || i, void 0, r, !1), o, s, a);
                        c.level = j.Error,
                        addMechanismAndCapture(n, u, c, "onerror")
                    }
                }
            }
            ))
        }
        function _installGlobalOnUnhandledRejectionHandler() {
            addInstrumentationHandler("unhandledrejection", (function(e) {
                var t = tslib_es6_read(getHubAndAttachStacktrace(), 2)
                  , n = t[0]
                  , r = t[1];
                if (n.getIntegration(fe)) {
                    var i = e;
                    try {
                        "reason"in e ? i = e.reason : "detail"in e && "reason"in e.detail && (i = e.detail.reason)
                    } catch (s) {}
                    if (shouldIgnoreOnError() || i && i.__sentry_own_request__)
                        return !0;
                    var o = is_isPrimitive(i) ? function _eventFromRejectionWithPrimitive(e) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: " + String(e)
                                }]
                            }
                        }
                    }(i) : eventFromUnknownInput(i, void 0, r, !0);
                    o.level = j.Error,
                    addMechanismAndCapture(n, i, o, "onunhandledrejection")
                }
            }
            ))
        }
        function _enhanceEventWithInitialFrame(t, n, r, i) {
            var o = t.exception = t.exception || {}
              , s = o.values = o.values || []
              , a = s[0] = s[0] || {}
              , u = a.stacktrace = a.stacktrace || {}
              , c = u.frames = u.frames || []
              , d = isNaN(parseInt(i, 10)) ? void 0 : i
              , p = isNaN(parseInt(r, 10)) ? void 0 : r
              , l = isString(n) && n.length > 0 ? n : function getLocationHref() {
                var t = (0,
                e.R)();
                try {
                    return t.document.location.href
                } catch (n) {
                    return ""
                }
            }();
            return 0 === c.length && c.push({
                colno: d,
                filename: l,
                function: "?",
                in_app: !0,
                lineno: p
            }),
            t
        }
        function addMechanismAndCapture(e, t, n, r) {
            addExceptionMechanism(n, {
                handled: !1,
                type: r
            }),
            e.captureEvent(n, {
                originalException: t
            })
        }
        function getHubAndAttachStacktrace() {
            var e = getCurrentHub()
              , t = e.getClient();
            return [e, t && t.getOptions().attachStacktrace]
        }
        var he = function() {
            function LinkedErrors(e) {
                void 0 === e && (e = {}),
                this.name = LinkedErrors.id,
                this._key = e.key || "cause",
                this._limit = e.limit || 5
            }
            return LinkedErrors.prototype.setupOnce = function() {
                addGlobalEventProcessor((function(e, t) {
                    var n = getCurrentHub().getIntegration(LinkedErrors);
                    return n ? function _handler(e, t, n, r) {
                        if (!(n.exception && n.exception.values && r && isInstanceOf(r.originalException, Error)))
                            return n;
                        var i = _walkErrorTree(t, r.originalException, e);
                        return n.exception.values = tslib_es6_spread(i, n.exception.values),
                        n
                    }(n._key, n._limit, e, t) : e
                }
                ))
            }
            ,
            LinkedErrors.id = "LinkedErrors",
            LinkedErrors
        }();
        function _walkErrorTree(e, t, n, r) {
            if (void 0 === r && (r = []),
            !isInstanceOf(t[n], Error) || r.length + 1 >= e)
                return r;
            var i = exceptionFromError(t[n]);
            return _walkErrorTree(e, t[n], n, tslib_es6_spread([i], r))
        }
        var ve = function() {
            function Dedupe() {
                this.name = Dedupe.id
            }
            return Dedupe.prototype.setupOnce = function(e, t) {
                e((function(e) {
                    var r = t().getIntegration(Dedupe);
                    if (r) {
                        try {
                            if (function dedupe_shouldDropEvent(e, t) {
                                if (!t)
                                    return !1;
                                if (function _isSameMessageEvent(e, t) {
                                    var n = e.message
                                      , r = t.message;
                                    if (!n && !r)
                                        return !1;
                                    if (n && !r || !n && r)
                                        return !1;
                                    if (n !== r)
                                        return !1;
                                    if (!_isSameFingerprint(e, t))
                                        return !1;
                                    if (!_isSameStacktrace(e, t))
                                        return !1;
                                    return !0
                                }(e, t))
                                    return !0;
                                if (function _isSameExceptionEvent(e, t) {
                                    var n = _getExceptionFromEvent(t)
                                      , r = _getExceptionFromEvent(e);
                                    if (!n || !r)
                                        return !1;
                                    if (n.type !== r.type || n.value !== r.value)
                                        return !1;
                                    if (!_isSameFingerprint(e, t))
                                        return !1;
                                    if (!_isSameStacktrace(e, t))
                                        return !1;
                                    return !0
                                }(e, t))
                                    return !0;
                                return !1
                            }(e, r._previousEvent))
                                return Z && n.warn("Event dropped due to being a duplicate of previously captured event."),
                                null
                        } catch (i) {
                            return r._previousEvent = e
                        }
                        return r._previousEvent = e
                    }
                    return e
                }
                ))
            }
            ,
            Dedupe.id = "Dedupe",
            Dedupe
        }();
        function _isSameStacktrace(e, t) {
            var n = _getFramesFromEvent(e)
              , r = _getFramesFromEvent(t);
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            if (n = n,
            (r = r).length !== n.length)
                return !1;
            for (var i = 0; i < r.length; i++) {
                var o = r[i]
                  , s = n[i];
                if (o.filename !== s.filename || o.lineno !== s.lineno || o.colno !== s.colno || o.function !== s.function)
                    return !1
            }
            return !0
        }
        function _isSameFingerprint(e, t) {
            var n = e.fingerprint
              , r = t.fingerprint;
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            n = n,
            r = r;
            try {
                return !(n.join("") !== r.join(""))
            } catch (i) {
                return !1
            }
        }
        function _getExceptionFromEvent(e) {
            return e.exception && e.exception.values && e.exception.values[0]
        }
        function _getFramesFromEvent(e) {
            var t = e.exception;
            if (t)
                try {
                    return t.values[0].stacktrace.frames
                } catch (n) {
                    return
                }
            else if (e.stacktrace)
                return e.stacktrace.frames
        }
        var _e = (0,
        e.R)()
          , ge = function() {
            function UserAgent() {
                this.name = UserAgent.id
            }
            return UserAgent.prototype.setupOnce = function() {
                addGlobalEventProcessor((function(e) {
                    if (getCurrentHub().getIntegration(UserAgent)) {
                        if (!_e.navigator && !_e.location && !_e.document)
                            return e;
                        var t = e.request && e.request.url || _e.location && _e.location.href
                          , n = (_e.document || {}).referrer
                          , r = (_e.navigator || {}).userAgent
                          , i = __assign(__assign(__assign({}, e.request && e.request.headers), n && {
                            Referer: n
                        }), r && {
                            "User-Agent": r
                        })
                          , o = __assign(__assign({}, t && {
                            url: t
                        }), {
                            headers: i
                        });
                        return __assign(__assign({}, e), {
                            request: o
                        })
                    }
                    return e
                }
                ))
            }
            ,
            UserAgent.id = "UserAgent",
            UserAgent
        }()
          , me = [new g, new m, new le, new ce, new fe, new he, new ve, new ge];
        function startSessionOnHub(e) {
            e.startSession({
                ignoreDuration: !0
            }),
            e.captureSession()
        }
        window.location.pathname,
        encodeURIComponent(window.document.title),
        encodeURIComponent(window.location.href);
        const ye = {
            chrome: "Chrome",
            edge: "edge",
            firefox: "Firefox",
            ie: "IE",
            safari: "Safari"
        }
          , be = {
            chrome: 79,
            edge: 79,
            firefox: 75,
            ie: Number.POSITIVE_INFINITY,
            safari: 13.1
        }
          , getBrowser = (e=window.navigator.userAgent)=>{
            let t, n = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (((e=window.navigator.userAgent)=>null !== e.match(/Edg/))(e)) {
                const t = e.indexOf("Edg");
                let n = 4;
                e.match("Edge/") && (n = 5);
                const r = t + n;
                return {
                    name: "Edge",
                    version: parseInt(e.substring(r, e.indexOf(".", r)), 10)
                }
            }
            return /trident/i.test(n[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [],
            {
                name: "IE",
                version: parseInt(t[1] || "-1", 10)
            }) : n[1] === ye.chrome && (t = e.match(/\bOPR\/(\d+)/),
            null != t) ? {
                name: "Opera",
                version: parseInt(t[1], 10)
            } : (n = n[2] ? [n[1], n[2]] : [window.navigator.appName, window.navigator.appVersion, "-?"],
            n[0] === ye.safari && (t = e.match(/version\/(\d+)/i),
            null != t && n.splice(1, 1, t[1])),
            "MSIE" === n[0] ? {
                name: ye.ie,
                version: parseInt(n[1], 10)
            } : {
                name: n[0],
                version: parseInt(n[1], 10)
            })
        }
          , isValidBrowserForSentryReport = e=>{
            var t;
            const n = [ye.chrome.toLowerCase(), ye.edge.toLowerCase(), ye.firefox.toLowerCase(), ye.safari.toLowerCase()]
              , r = getBrowser(e);
            return null != r.name && 0 !== r.name.length && (-1 !== (null == (t = n.indexOf) ? void 0 : t.call(n, r.name.toLowerCase())) && !((e=window.navigator.userAgent)=>{
                const t = getBrowser(e);
                return null != t.name && 0 !== t.name.length && Object.keys(ye).some((e=>t.name.toLowerCase() === ye[e].toLowerCase() && t.version < be[e]))
            }
            )(e))
        }
        ;
        !function init(t) {
            if (void 0 === t && (t = {}),
            void 0 === t.defaultIntegrations && (t.defaultIntegrations = me),
            void 0 === t.release) {
                var r = (0,
                e.R)();
                r.SENTRY_RELEASE && r.SENTRY_RELEASE.id && (t.release = r.SENTRY_RELEASE.id)
            }
            void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
            void 0 === t.sendClientReports && (t.sendClientReports = !0),
            function initAndBind(e, t) {
                !0 === t.debug && (h ? n.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
                var r = getCurrentHub()
                  , i = r.getScope();
                i && i.update(t.initialScope);
                var o = new e(t);
                r.bindClient(o)
            }(de, t),
            t.autoSessionTracking && function startSessionTracking() {
                if (void 0 === (0,
                e.R)().document)
                    return void (Z && n.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
                var t = getCurrentHub();
                if (!t.captureSession)
                    return;
                startSessionOnHub(t),
                addInstrumentationHandler("history", (function(e) {
                    var t = e.from
                      , n = e.to;
                    void 0 !== t && t !== n && startSessionOnHub(getCurrentHub())
                }
                ))
            }()
        }({
            beforeSend: (()=>{
                !function enableSentryFromLocalStorage() {
                    const e = window.localStorage.getItem("enableSentryUntil");
                    e && (Number(e) > Date.now() ? window.chesscom.sudoEnableSentry = !0 : window.localStorage.removeItem("enableSentryUntil"))
                }();
                const e = {};
                return (t,n)=>{
                    var r;
                    const i = null == (r = null == n ? void 0 : n.originalException) ? void 0 : r.message
                      , o = e[i];
                    if (!window.chesscom.enableSentry && !window.chesscom.sudoEnableSentry)
                        return !o && (null == n ? void 0 : n.originalException) && function queueSentryReport(e) {
                            for (window.chesscom.queuedSentryReports = window.chesscom.queuedSentryReports || [],
                            window.chesscom.queuedSentryReports.push(e); window.chesscom.queuedSentryReports.length > 20; )
                                window.chesscom.queuedSentryReports.shift()
                        }(null == n ? void 0 : n.originalException),
                        null;
                    const s = window.chesscom.sudoEnableSentry
                      , a = isValidBrowserForSentryReport(window.navigator.userAgent);
                    if (!s && !a)
                        return null;
                    if (o && (u = o,
                    Date.now() - 6e4 < u.timestamp))
                        return null;
                    var u;
                    if (i && (e[i] = {
                        timestamp: Date.now()
                    }),
                    t.extra.isSudoEnableSentry = s,
                    t.extra.validBrowserForSentryReport = a,
                    window.context && window.context.user && !window.location.href.includes("2fa")) {
                        const e = `${window.chesscom.sentry.incrementCallback}?isPremium=${window.context.isPremium ? "1" : "0"}&optedBeta=${window.context.optedBeta ? "1" : "0"}&isStaff=${window.context.isStaff ? "1" : "0"}&username=${window.context.user.username}`
                          , t = new XMLHttpRequest;
                        t.open("GET", encodeURI(e)),
                        t.send()
                    }
                    return t
                }
            }
            )(),
            dsn: window.chesscom.sentry.sentryKey,
            environment: window.context.environment,
            ignoreErrors: [/top.GLOBALS/i, /Object expected/i, /InvalidStateError/i, /Permission denied/i, /flashtalking\.com/i, /Out of memory/i, /Failed to fetch/i, /Network Error/i, /Request failed with status code/i, /timeout of 0ms exceeded/i, /Unable to decode audio data/i, /QuotaExceededError/i, /NS_ERROR_FILE_CORRUPTED/i, /Can't find variable: performance/i, /Can't find variable: IntersectionObserver/i, /can't redefine non-configurable property "userAgent"/i, /Assignment to read-only properties is not allowed in strict mode/i, /Can't find variable: Promise/i, /Failed to set the 'domain' property on 'Document': Assignment is forbidden for sandboxed iframes/i, /Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded/i, /Failed to set the 'domain' property on 'Document': 'chess.com' is not a suffix of/i, /UnhandledRejection/i, /null is not an object \(evaluating 'window.frameElement'\)/i, /Origin https:\/\/www.chess.com is not allowed by Access-Control-Allow-Origin/i, /a\[b\]\.target\.className\.indexOf is not a function/i, /The operation is insecure/i, /Invalid attempt to spread non-iterable instance/i, /Cannot read property 'animate' of undefined/i, /e\.\$refs\[t\] is undefined/i, /ResizeObserver loop limit exceeded/i, /No error message/i, /Illegal invocation/i, /default is not a constructor/i, /Non-Error promise rejection captured with keys/i, /NotAllowedError/i, /Error: There is no clipping info for given tab/i, /o is not a function$/, /can't access dead object/i, /KÃ¤yttÃ¶ estetty./i, /DLL is not defined/i, /Request aborted/i, /Can't find variable: vueDLL/i, /Failed to get ServiceWorkerRegistration objects/i, /MÃ©moire insuffisante pour cette opÃ©ration/i, /Memoria disponibile insufficiente per completare/i, /Not enough storage is available to complete this operation/i, /Espacio de almacenamiento insuficiente para completar esta operaciÃ³n/i, /There is not enough space on the disk/i, /Access is denied/i, /Acceso denegado/i, /Zugriff verweigert/i, /AccÃ¨s refusÃ©/i, /Adgang nÃ¦gtet/i, /Toegang geweigerd/i, /Ingen tilgang/i, /Odmowa dostÄ™pu/i, /Î”ÎµÎ½ ÎµÏ€Î¹Ï„ÏÎ­Ï€ÎµÏ„Î±Î¹ Î· Ï€ÏÏŒÏƒÎ²Î±ÏƒÎ·/i, /Accesso negato/i, /Acesso negado/i, /ã‚¢ã‚¯ã‚»ã‚¹ãŒæ‹’å¦ã•ã‚Œã¾ã—ãŸ/i, /ÐžÑ‚ÐºÐ°Ð·Ð°Ð½Ð¾ Ð² Ð´Ð¾ÑÑ‚ÑƒÐ¿Ðµ/i, /A hozzÃ¡fÃ©rÃ©s megtagadva/i, /Error: Permission denied/i, /Error: Ã…tkomst nekad/i, /Blocked a frame with origin/i, /angular/i, /TrackJS/i, /Basil is not defined/i, /vendor\/diagrameditorv3/i, /vendor\/diagramviewer/i, /vendor\/chessviewer/i, /_ is not defined/i, /Cannot read property 'color' of undefined/i, /undefined is not an object/i, /this\.gameSetup\.pieces\[pieceId\] is undefined/i, /null is not an object (evaluating 'n\.ctx\.createGain')/i, /^undefined$/, /NotFoundError: Failed to execute 'insertBefore' on 'Node'/, /null is not an object \(evaluating 'x\.length'\)/, /jload in /i, /NS_ERROR_NOT_INITIALIZED/i, /affs in Function/i, /igloo\.php/i, /SyntaxError/, /'\$' is undefined/i, /The play\(\) request was interrupted by a call to pause\(\)/i, /Can't execute code from a freed script/i, /Can't find variable: Tapad/i, /Tapad is not defined/i, /tournament expired/, /cometd spam/, /internal server error/, /Cannot assign to read only property 'twist' of object/i, /setting getter-only property "twist"/, /Array buffer allocation failed/, /Bad moveLan in line/i, /Unable to get property 'documentElement' of undefined or null reference/i, /Unable to get property 'now' of undefined or null reference/i, /Syntax error$/, /null is not an object (evaluating 'a\.title')/, /Loading (CSS )?chunk .+ failed/i, /NavigationDuplicated/, /Avoided redundant navigation to current location/i],
            denyUrls: [/chessviewer/i, /diagramviewer/i, /diagrameditorv3/i, /fe_sentry/i, /graph\.facebook\.com/i, /connect\.facebook\.net\/en_US\/all\.js/i, /eatdifferent\.com\.woopra-ns\.com/i, /static\.woopra\.com\/js\/woopra\.js/i, /extensions\//i, /^chrome:\/\//i, /127\.0\.0\.1:4001\/isrunning/i, /webappstoolbarba\.texthelp\.com\//i, /metrics\.itunes\.apple\.com\.edgesuite\.net\//i],
            release: window.context.commit,
            sampleRate: 1,
            allowUrls: [/(.+)/i, /chesscomfiles([\w-]+)?\.com/i]
        }),
        window.context && (window.context.user && configureScope((e=>{
            e.setUser({
                id: window.context.user.id,
                username: window.context.user.username
            }),
            e.setExtra("optedBeta", window.context.user.optedBeta),
            e.setExtra("isPremium", window.context.user.isPremium),
            e.setExtra("chessboardBeta", window.context.chessboardBeta)
        }
        )),
        configureScope((e=>{
            e.setTag("environment", window.context.environment),
            e.setExtra("environment", window.context.environment),
            e.setExtra("cookie_app", window.chesscom.sentry.appCookie)
        }
        )))
    }()
}();
