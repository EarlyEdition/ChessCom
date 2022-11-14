!function() {
    var e, t, n, r, c, i, u, o, _, a, s = {
        84474: function(e) {
            "use strict";
            e.exports = vueDLL
        }
    }, l = {};
    function __webpack_require__(e) {
        var t = l[e];
        if (void 0 !== t)
            return t.exports;
        var n = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(n.exports, n, n.exports, __webpack_require__),
        n.loaded = !0,
        n.exports
    }
    __webpack_require__.m = s,
    __webpack_require__.amdO = {},
    __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return __webpack_require__.d(t, {
            a: t
        }),
        t
    }
    ,
    t = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    __webpack_require__.t = function(n, r) {
        if (1 & r && (n = this(n)),
        8 & r)
            return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule)
                return n;
            if (16 & r && "function" == typeof n.then)
                return n
        }
        var c = Object.create(null);
        __webpack_require__.r(c);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var u = 2 & r && n; "object" == typeof u && !~e.indexOf(u); u = t(u))
            Object.getOwnPropertyNames(u).forEach((function(e) {
                i[e] = function() {
                    return n[e]
                }
            }
            ));
        return i.default = function() {
            return n
        }
        ,
        __webpack_require__.d(c, i),
        c
    }
    ,
    __webpack_require__.d = function(e, t) {
        for (var n in t)
            __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    __webpack_require__.f = {},
    __webpack_require__.e = function(e) {
        return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t, n) {
            return __webpack_require__.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    __webpack_require__.u = function(e) {
        return 4905 === e ? "web.chunk.client.371423a5.js" : 5158 === e ? "global-app-init.chunk.client.f7a0d053.js" : 890 === e ? "web.chunk.client.89a43ec5.js" : 4579 === e ? "web.chunk.client.3c414d7b.js" : 7523 === e ? "web.chunk.client.1806fdb5.js" : 2649 === e ? "web.chunk.client.e90ffc84.js" : 9694 === e ? "global-setup-board-popover.chunk.client.8b15dca8.js" : 1966 === e ? "web.chunk.client.ac6b2f61.js" : 7992 === e ? "notification-request.chunk.client.f70e0b78.js" : 1753 === e ? "global-fcm.chunk.client.06f79a14.js" : 9905 === e ? "global-setup-guest-modal.chunk.client.5ce494e7.js" : 3431 === e ? "global-setup-image-defer.chunk.client.cbe199f9.js" : 468 === e ? "global-setup-invitations.chunk.client.40bfa6c2.js" : 2355 === e ? "web.chunk.client.197b9cb2.js" : 7617 === e ? "web.chunk.client.eaabcc1f.js" : 9570 === e ? "web.chunk.client.06e4534f.js" : 1323 === e ? "global-setup-login-modal.chunk.client.0292a700.js" : 3974 === e ? "global-setup-online-indicators.chunk.client.e10737e8.js" : 6562 === e ? "global-setup-sign-up-modal.chunk.client.3c28a7fd.js" : 4338 === e ? "web.chunk.client.701c5c6a.js" : 5750 === e ? "web.chunk.client.ebc2d732.js" : 3171 === e ? "toaster-center-controller.chunk.client.2395e6fa.js" : 3660 === e ? "global-setup-tooltip.chunk.client.b6b88678.js" : 2179 === e ? "global-setup-user-popover.chunk.client.cb289d4f.js" : 4417 === e ? "global-setup-video-defer.chunk.client.e13d81af.js" : 525 === e ? "web.chunk.client.d1a87a4f.js" : 2804 === e ? "web.chunk.client.ea4eabb6.js" : 2155 === e ? "web.chunk.client.a7bbea21.js" : 8442 === e ? "web.chunk.client.a38b0496.js" : 3790 === e ? "web.chunk.client.e5ef6806.js" : 5435 === e ? "guest-modal.chunk.client.8a7f6c23.js" : 9401 === e ? "web.chunk.client.b1dd3415.js" : 6583 === e ? "web.chunk.client.c76eed98.js" : 4652 === e ? "web.chunk.client.b3e2f1f3.js" : 6602 === e ? "web.chunk.client.84f466ac.js" : 614 === e ? "gift-membership-modal.chunk.client.bf71058e.js" : 2210 === e ? "user-report-modal.chunk.client.2de4cea0.js" : 2284 === e ? "trophy-popover.chunk.client.091116ee.js" : 3379 === e ? "payment-method-paypal.chunk.client.a37229da.js" : void 0
    }
    ,
    __webpack_require__.miniCssF = function(e) {
        return 9694 === e ? "global-setup-board-popover.chunk.client.873367da.css" : 7992 === e ? "notification-request.chunk.client.9c11796d.css" : 2355 === e ? "web.chunk.client.be07cc46.css" : 7617 === e ? "web.chunk.client.5c3d586b.css" : 9570 === e ? "web.chunk.client.29072a29.css" : 3974 === e ? "global-setup-online-indicators.chunk.client.4aa25768.css" : 3171 === e ? "toaster-center-controller.chunk.client.0c8e51f8.css" : 2179 === e ? "global-setup-user-popover.chunk.client.55fccd0c.css" : 5435 === e ? "guest-modal.chunk.client.a6000603.css" : 6583 === e ? "web.chunk.client.7d191eca.css" : 6602 === e ? "web.chunk.client.433dbb16.css" : 614 === e ? "gift-membership-modal.chunk.client.e6f55884.css" : 2210 === e ? "user-report-modal.chunk.client.de994533.css" : 2284 === e ? "trophy-popover.chunk.client.82c63bc4.css" : 3379 === e ? "payment-method-paypal.chunk.client.1a5f8dff.css" : void 0
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
    n = {},
    r = "client:",
    __webpack_require__.l = function(e, t, c, i) {
        if (n[e])
            n[e].push(t);
        else {
            var u, o;
            if (void 0 !== c)
                for (var _ = document.getElementsByTagName("script"), a = 0; a < _.length; a++) {
                    var s = _[a];
                    if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == r + c) {
                        u = s;
                        break
                    }
                }
            u || (o = !0,
            (u = document.createElement("script")).charset = "utf-8",
            u.timeout = 120,
            __webpack_require__.nc && u.setAttribute("nonce", __webpack_require__.nc),
            u.setAttribute("data-webpack", r + c),
            u.src = e),
            n[e] = [t];
            var onScriptComplete = function(t, r) {
                u.onerror = u.onload = null,
                clearTimeout(l);
                var c = n[e];
                if (delete n[e],
                u.parentNode && u.parentNode.removeChild(u),
                c && c.forEach((function(e) {
                    return e(r)
                }
                )),
                t)
                    return t(r)
            }
              , l = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: u
            }), 12e4);
            u.onerror = onScriptComplete.bind(null, u.onerror),
            u.onload = onScriptComplete.bind(null, u.onload),
            o && document.head.appendChild(u)
        }
    }
    ,
    __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    __webpack_require__.p = "/bundles/app/js/",
    c = __webpack_require__.u,
    i = __webpack_require__.e,
    u = new Map,
    o = new Map,
    __webpack_require__.u = function(e) {
        return c(e) + (u.has(e) ? "?" + u.get(e) : "")
    }
    ,
    __webpack_require__.e = function(e) {
        return i(e).catch((function(t) {
            var n = o.has(e) ? o.get(e) : 2;
            if (n < 1) {
                var r = c(e);
                throw t.message = "Loading chunk " + e + " failed after 2 retries.\n(" + r + ")",
                t.request = r,
                t
            }
            return new Promise((function(t) {
                setTimeout((function() {
                    var r = "cache-bust=true&retry-attempt=" + (2 - n + 1);
                    u.set(e, r),
                    o.set(e, n - 1),
                    t(__webpack_require__.e(e))
                }
                ), 0)
            }
            ))
        }
        ))
    }
    ,
    _ = function(e) {
        return new Promise((function(t, n) {
            var r = __webpack_require__.miniCssF(e)
              , c = window.__CHESSCOM_RTL__
              , i = "/bundles/app/css/" + r;
            if (function(e, t) {
                for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                    var c = (u = n[r]).getAttribute("data-href") || u.getAttribute("href");
                    if ("stylesheet" === u.rel && (c === e || c === t))
                        return u
                }
                var i = document.getElementsByTagName("style");
                for (r = 0; r < i.length; r++) {
                    var u;
                    if ((c = (u = i[r]).getAttribute("data-href")) === e || c === t)
                        return u
                }
            }(r, i))
                return t();
            c && (i = i.replace(/\.css/i, ".rtl.css")),
            function(e, t, n, r) {
                var c = document.createElement("link");
                c.rel = "stylesheet",
                c.type = "text/css",
                c.onerror = c.onload = function(i) {
                    if (c.onerror = c.onload = null,
                    "load" === i.type)
                        n();
                    else {
                        var u = i && ("load" === i.type ? "missing" : i.type)
                          , o = i && i.target && i.target.href || t
                          , _ = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                        _.code = "CSS_CHUNK_LOAD_FAILED",
                        _.type = u,
                        _.request = o,
                        c.parentNode.removeChild(c),
                        r(_)
                    }
                }
                ,
                c.href = t,
                document.head.appendChild(c)
            }(e, i, t, n)
        }
        ))
    }
    ,
    a = {
        2172: 0
    },
    __webpack_require__.f.miniCss = function(e, t) {
        a[e] ? t.push(a[e]) : 0 !== a[e] && {
            614: 1,
            2179: 1,
            2210: 1,
            2284: 1,
            2355: 1,
            3171: 1,
            3379: 1,
            3974: 1,
            5435: 1,
            6583: 1,
            6602: 1,
            7617: 1,
            7992: 1,
            9570: 1,
            9694: 1
        }[e] && t.push(a[e] = _(e).then((function() {
            a[e] = 0
        }
        ), (function(t) {
            throw delete a[e],
            t
        }
        )))
    }
    ,
    function() {
        var e = {
            2172: 0
        };
        __webpack_require__.f.j = function(t, n) {
            var r = __webpack_require__.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else {
                    var c = new Promise((function(n, c) {
                        r = e[t] = [n, c]
                    }
                    ));
                    n.push(r[2] = c);
                    var i = __webpack_require__.p + __webpack_require__.u(t)
                      , u = new Error;
                    __webpack_require__.l(i, (function(n) {
                        if (__webpack_require__.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var c = n && ("load" === n.type ? "missing" : n.type)
                              , i = n && n.target && n.target.src;
                            u.message = "Loading chunk " + t + " failed.\n(" + c + ": " + i + ")",
                            u.name = "ChunkLoadError",
                            u.type = c,
                            u.request = i,
                            r[1](u)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var webpackJsonpCallback = function(t, n) {
            var r, c, i = n[0], u = n[1], o = n[2], _ = 0;
            if (i.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (r in u)
                    __webpack_require__.o(u, r) && (__webpack_require__.m[r] = u[r]);
                if (o)
                    o(__webpack_require__)
            }
            for (t && t(n); _ < i.length; _++)
                c = i[_],
                __webpack_require__.o(e, c) && e[c] && e[c][0](),
                e[c] = 0
        }
          , t = ("undefined" != typeof self ? self : this).wpChessCom_Yybx = ("undefined" != typeof self ? self : this).wpChessCom_Yybx || [];
        t.forEach(webpackJsonpCallback.bind(null, 0)),
        t.push = webpackJsonpCallback.bind(null, t.push.bind(t))
    }(),
    function() {
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        window.addEventListener("load", (()=>{
            Promise.all([__webpack_require__.e(4905), __webpack_require__.e(5158)]).then(__webpack_require__.bind(__webpack_require__, 55208)).then((({initGlobal: e})=>{
                e()
            }
            ))
        }
        ))
    }()
}();
