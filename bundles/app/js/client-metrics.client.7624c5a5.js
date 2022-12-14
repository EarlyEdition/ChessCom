!function() {
    "use strict";
    var e, t, l, _, h = {
        76940: function(e, t, l) {
            l.r(t),
            t.default = "1.14.3"
        }
    }, y = {};
    function __webpack_require__(e) {
        var t = y[e];
        if (void 0 !== t)
            return t.exports;
        var l = y[e] = {
            exports: {}
        };
        return h[e](l, l.exports, __webpack_require__),
        l.exports
    }
    __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    e = __webpack_require__.u,
    t = __webpack_require__.e,
    l = new Map,
    _ = new Map,
    __webpack_require__.u = function(t) {
        return e(t) + (l.has(t) ? "?" + l.get(t) : "")
    }
    ,
    __webpack_require__.e = function(h) {
        return t(h).catch((function(t) {
            var y = _.has(h) ? _.get(h) : 2;
            if (y < 1) {
                var b = e(h);
                throw t.message = "Loading chunk " + h + " failed after 2 retries.\n(" + b + ")",
                t.request = b,
                t
            }
            return new Promise((function(e) {
                setTimeout((function() {
                    var t = "cache-bust=true&retry-attempt=" + (2 - y + 1);
                    l.set(h, t),
                    _.set(h, y - 1),
                    e(__webpack_require__.e(h))
                }
                ), 0)
            }
            ))
        }
        ))
    }
    ,
    function() {
        var e, t, l, _, h, y, b, r = function(e, t) {
            return {
                name: e,
                value: void 0 === t ? -1 : t,
                delta: 0,
                entries: [],
                id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            }
        }, a = function(e, t) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    if ("first-input" === e && !("PerformanceEventTiming"in self))
                        return;
                    var l = new PerformanceObserver((function(e) {
                        return e.getEntries().map(t)
                    }
                    ));
                    return l.observe({
                        type: e,
                        buffered: !0
                    }),
                    l
                }
            } catch (e) {}
        }, o = function(e, t) {
            var l = function n(l) {
                "pagehide" !== l.type && "hidden" !== document.visibilityState || (e(l),
                t && (removeEventListener("visibilitychange", n, !0),
                removeEventListener("pagehide", n, !0)))
            };
            addEventListener("visibilitychange", l, !0),
            addEventListener("pagehide", l, !0)
        }, u = function(e) {
            addEventListener("pageshow", (function(t) {
                t.persisted && e(t)
            }
            ), !0)
        }, c = function(e, t, l) {
            var _;
            return function(h) {
                t.value >= 0 && (h || l) && (t.delta = t.value - (_ || 0),
                (t.delta || void 0 === _) && (_ = t.value,
                e(t)))
            }
        }, T = -1, s = function() {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        }, m = function() {
            o((function(e) {
                var t = e.timeStamp;
                T = t
            }
            ), !0)
        }, v = function() {
            return T < 0 && (T = s(),
            m(),
            u((function() {
                setTimeout((function() {
                    T = s(),
                    m()
                }
                ), 0)
            }
            ))),
            {
                get firstHiddenTime() {
                    return T
                }
            }
        }, d = function(e, t) {
            var l, _ = v(), h = r("FCP"), f = function(e) {
                "first-contentful-paint" === e.name && (b && b.disconnect(),
                e.startTime < _.firstHiddenTime && (h.value = e.startTime,
                h.entries.push(e),
                l(!0)))
            }, y = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0], b = y ? null : a("paint", f);
            (y || b) && (l = c(e, h, t),
            y && f(y),
            u((function(_) {
                h = r("FCP"),
                l = c(e, h, t),
                requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        h.value = performance.now() - _.timeStamp,
                        l(!0)
                    }
                    ))
                }
                ))
            }
            )))
        }, L = !1, k = -1, P = {
            passive: !0,
            capture: !0
        }, q = new Date, g = function(_, h) {
            e || (e = h,
            t = _,
            l = new Date,
            w(removeEventListener),
            E())
        }, E = function() {
            if (t >= 0 && t < l - q) {
                var h = {
                    entryType: "first-input",
                    name: e.type,
                    target: e.target,
                    cancelable: e.cancelable,
                    startTime: e.timeStamp,
                    processingStart: e.timeStamp + t
                };
                _.forEach((function(e) {
                    e(h)
                }
                )),
                _ = []
            }
        }, S = function(e) {
            if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function(e, t) {
                    var n = function() {
                        g(e, t),
                        r()
                    }
                      , i = function() {
                        r()
                    }
                      , r = function() {
                        removeEventListener("pointerup", n, P),
                        removeEventListener("pointercancel", i, P)
                    };
                    addEventListener("pointerup", n, P),
                    addEventListener("pointercancel", i, P)
                }(t, e) : g(t, e)
            }
        }, w = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                return e(t, S, P)
            }
            ))
        }, C = {};
        if ("prod" === window.context.environment) {
            const l = {
                appVersion: null != (h = window.context.appVersion) ? h : "latest",
                chessboardVersion: null != (y = window.context.chessboardVersion) ? y : function getChessboardFullVersion() {
                    const {default: e} = __webpack_require__(76940);
                    return e
                }(),
                cumulativeLayoutShift: 0,
                domLoaded: 0,
                environment: "prod",
                firstContentfulPaint: 0,
                firstInputDelay: 0,
                largestContentfulPaint: 0,
                timeToFirstByte: 0,
                url: window.context.route || `${window.location.origin}${window.location.pathname}`,
                userAgent: window.navigator.userAgent,
                userUuid: null == (b = window.context.user) ? void 0 : b.uuid,
                windowLoaded: 0
            }
              , record = e=>t=>{
                l[e] = t.value
            }
            ;
            !function(e, t) {
                L || (d((function(e) {
                    k = e.value
                }
                )),
                L = !0);
                var l, i = function(t) {
                    k > -1 && e(t)
                }, _ = r("CLS", 0), h = 0, y = [], v = function(e) {
                    if (!e.hadRecentInput) {
                        var t = y[0]
                          , b = y[y.length - 1];
                        h && e.startTime - b.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (h += e.value,
                        y.push(e)) : (h = e.value,
                        y = [e]),
                        h > _.value && (_.value = h,
                        _.entries = y,
                        l())
                    }
                }, b = a("layout-shift", v);
                b && (l = c(i, _, t),
                o((function() {
                    b.takeRecords().map(v),
                    l(!0)
                }
                )),
                u((function() {
                    h = 0,
                    k = -1,
                    _ = r("CLS", 0),
                    l = c(i, _, t)
                }
                )))
            }(record("cumulativeLayoutShift")),
            d(record("firstContentfulPaint")),
            function(l, h) {
                var y, b = v(), T = r("FID"), p = function(e) {
                    e.startTime < b.firstHiddenTime && (T.value = e.processingStart - e.startTime,
                    T.entries.push(e),
                    y(!0))
                }, L = a("first-input", p);
                y = c(l, T, h),
                L && o((function() {
                    L.takeRecords().map(p),
                    L.disconnect()
                }
                ), !0),
                L && u((function() {
                    var b;
                    T = r("FID"),
                    y = c(l, T, h),
                    _ = [],
                    t = -1,
                    e = null,
                    w(addEventListener),
                    b = p,
                    _.push(b),
                    E()
                }
                ))
            }(record("firstInputDelay")),
            function(e, t) {
                var l, _ = v(), h = r("LCP"), s = function(e) {
                    var t = e.startTime;
                    t < _.firstHiddenTime && (h.value = t,
                    h.entries.push(e),
                    l())
                }, y = a("largest-contentful-paint", s);
                if (y) {
                    l = c(e, h, t);
                    var d = function() {
                        C[h.id] || (y.takeRecords().map(s),
                        y.disconnect(),
                        C[h.id] = !0,
                        l(!0))
                    };
                    ["keydown", "click"].forEach((function(e) {
                        addEventListener(e, d, {
                            once: !0,
                            capture: !0
                        })
                    }
                    )),
                    o(d, !0),
                    u((function(_) {
                        h = r("LCP"),
                        l = c(e, h, t),
                        requestAnimationFrame((function() {
                            requestAnimationFrame((function() {
                                h.value = performance.now() - _.timeStamp,
                                C[h.id] = !0,
                                l(!0)
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
            }(record("largestContentfulPaint")),
            function(e) {
                var t, l = r("TTFB");
                t = function() {
                    try {
                        var t = performance.getEntriesByType("navigation")[0] || function() {
                            var e = performance.timing
                              , t = {
                                entryType: "navigation",
                                startTime: 0
                            };
                            for (var l in e)
                                "navigationStart" !== l && "toJSON" !== l && (t[l] = Math.max(e[l] - e.navigationStart, 0));
                            return t
                        }();
                        if (l.value = l.delta = t.responseStart,
                        l.value < 0 || l.value > performance.now())
                            return;
                        l.entries = [t],
                        e(l)
                    } catch (e) {}
                }
                ,
                "complete" === document.readyState ? setTimeout(t, 0) : addEventListener("load", (function() {
                    return setTimeout(t, 0)
                }
                ))
            }(record("timeToFirstByte"));
            const onVisibilityChange = ()=>{
                var e, t;
                if ("hidden" === document.visibilityState) {
                    const {domContentLoadedEventEnd: _=0, domContentLoadedEventStart: h=0, loadEventEnd: y=0, loadEventStart: b=0} = null != (t = null == (e = window.performance.getEntriesByType("navigation")) ? void 0 : e[0]) ? t : {};
                    l.domLoaded = _ - h,
                    l.windowLoaded = y - b;
                    const T = Object.entries(l).reduce(((e,[t,l])=>(l && (e[t] = l.toString()),
                    e)), {});
                    "latest" === T.appVersion && delete T.appVersion,
                    window.navigator.sendBeacon("", new URLSearchParams(T)),
                    document.removeEventListener("visibilitychange", onVisibilityChange)
                }
            }
            ;
            document.addEventListener("visibilitychange", onVisibilityChange)
        }
    }()
}();
