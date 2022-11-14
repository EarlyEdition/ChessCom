"use strict";
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[840], {
    78840: function(i, o, s) {
        var p, C, S;
        C = "undefined" != typeof window ? window : this,
        S = function(i) {
            function L(i, o, s, p) {
                i.hasOwnProperty(o) || (i[o] = p.apply(null, s))
            }
            var o = {};
            return L(o, "Core/Globals.js", [], (function() {
                var o, s = void 0 !== i ? i : "undefined" != typeof window ? window : {};
                return function(i) {
                    i.SVG_NS = "http://www.w3.org/2000/svg",
                    i.product = "Highcharts",
                    i.version = "9.1.2",
                    i.win = s,
                    i.doc = i.win.document,
                    i.svg = i.doc && i.doc.createElementNS && !!i.doc.createElementNS(i.SVG_NS, "svg").createSVGRect,
                    i.userAgent = i.win.navigator && i.win.navigator.userAgent || "",
                    i.isChrome = -1 !== i.userAgent.indexOf("Chrome"),
                    i.isFirefox = -1 !== i.userAgent.indexOf("Firefox"),
                    i.isMS = /(edge|msie|trident)/i.test(i.userAgent) && !i.win.opera,
                    i.isSafari = !i.isChrome && -1 !== i.userAgent.indexOf("Safari"),
                    i.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(i.userAgent),
                    i.isWebKit = -1 !== i.userAgent.indexOf("AppleWebKit"),
                    i.deg2rad = 2 * Math.PI / 360,
                    i.hasBidiBug = i.isFirefox && 4 > parseInt(i.userAgent.split("Firefox/")[1], 10),
                    i.hasTouch = !!i.win.TouchEvent,
                    i.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
                    i.noop = function() {}
                    ,
                    i.supportsPassiveEvents = function() {
                        var o = !1;
                        if (!i.isMS) {
                            var s = Object.defineProperty({}, "passive", {
                                get: function() {
                                    o = !0
                                }
                            });
                            i.win.addEventListener && i.win.removeEventListener && (i.win.addEventListener("testPassive", i.noop, s),
                            i.win.removeEventListener("testPassive", i.noop, s))
                        }
                        return o
                    }(),
                    i.charts = [],
                    i.dateFormats = {},
                    i.seriesTypes = {},
                    i.symbolSizes = {},
                    i.chartCount = 0
                }(o || (o = {})),
                o
            }
            )),
            L(o, "Core/Utilities.js", [o["Core/Globals.js"]], (function(i) {
                function v(o, s, p, S) {
                    var M = s ? "Highcharts error" : "Highcharts warning";
                    32 === o && (o = M + ": Deprecated member");
                    var T = h(o)
                      , P = T ? M + " #" + o + ": www.highcharts.com/errors/" + o + "/" : o.toString();
                    if (void 0 !== S) {
                        var O = "";
                        T && (P += "?"),
                        J(S, (function(i, o) {
                            O += "\n - " + o + ": " + i,
                            T && (P += encodeURI(o) + "=" + encodeURI(i))
                        }
                        )),
                        P += O
                    }
                    A(i, "displayError", {
                        chart: p,
                        code: o,
                        message: P,
                        params: S
                    }, (function() {
                        if (s)
                            throw Error(P);
                        C.console && -1 === v.messages.indexOf(P) && console.warn(P)
                    }
                    )),
                    v.messages.push(P)
                }
                function H(i, o) {
                    return parseInt(i, o || 10)
                }
                function x(i) {
                    return "string" == typeof i
                }
                function y(i) {
                    return "[object Array]" === (i = Object.prototype.toString.call(i)) || "[object Array Iterator]" === i
                }
                function G(i, o) {
                    return !(!i || "object" != typeof i || o && y(i))
                }
                function B(i) {
                    return G(i) && "number" == typeof i.nodeType
                }
                function q(i) {
                    var o = i && i.constructor;
                    return !(!G(i, !0) || B(i) || !o || !o.name || "Object" === o.name)
                }
                function h(i) {
                    return "number" == typeof i && !isNaN(i) && 1 / 0 > i && -1 / 0 < i
                }
                function f(i) {
                    return null != i
                }
                function c(i, o, s) {
                    var p;
                    return x(o) ? f(s) ? i.setAttribute(o, s) : i && i.getAttribute && ((p = i.getAttribute(o)) || "class" !== o || (p = i.getAttribute(o + "Name"))) : J(o, (function(o, s) {
                        i.setAttribute(s, o)
                    }
                    )),
                    p
                }
                function e(i, o) {
                    var s;
                    for (s in i || (i = {}),
                    o)
                        i[s] = o[s];
                    return i
                }
                function t() {
                    for (var i = arguments, o = i.length, s = 0; s < o; s++) {
                        var p = i[s];
                        if (null != p)
                            return p
                    }
                }
                function m(o, s) {
                    i.isMS && !i.svg && s && void 0 !== s.opacity && (s.filter = "alpha(opacity=" + 100 * s.opacity + ")"),
                    e(o.style, s)
                }
                function w(i, o, s, C, S) {
                    return i = p.createElement(i),
                    o && e(i, o),
                    S && m(i, {
                        padding: "0",
                        border: "none",
                        margin: "0"
                    }),
                    s && m(i, s),
                    C && C.appendChild(i),
                    i
                }
                function n(i, o) {
                    return parseFloat(i.toPrecision(o || 14))
                }
                function J(i, o, s) {
                    for (var p in i)
                        Object.hasOwnProperty.call(i, p) && o.call(s || i[p], i[p], p, i)
                }
                function K(o, s, p) {
                    function k(s, p) {
                        var C = o.removeEventListener || i.removeEventListenerPolyfill;
                        C && C.call(o, s, p, !1)
                    }
                    function r(i) {
                        var p;
                        if (o.nodeName) {
                            if (s) {
                                var C = {};
                                C[s] = !0
                            } else
                                C = i;
                            J(C, (function(o, s) {
                                if (i[s])
                                    for (p = i[s].length; p--; )
                                        k(s, i[s][p].fn)
                            }
                            ))
                        }
                    }
                    var C = "function" == typeof o && o.prototype || o;
                    if (Object.hasOwnProperty.call(C, "hcEvents")) {
                        var S = C.hcEvents;
                        s ? (C = S[s] || [],
                        p ? (S[s] = C.filter((function(i) {
                            return p !== i.fn
                        }
                        )),
                        k(s, p)) : (r(S),
                        S[s] = [])) : (r(S),
                        delete C.hcEvents)
                    }
                }
                function A(o, s, C, S) {
                    if (C = C || {},
                    p.createEvent && (o.dispatchEvent || o.fireEvent && o !== i)) {
                        var M = p.createEvent("Events");
                        M.initEvent(s, !0, !0),
                        C = e(M, C),
                        o.dispatchEvent ? o.dispatchEvent(C) : o.fireEvent(s, C)
                    } else if (o.hcEvents) {
                        C.target || e(C, {
                            preventDefault: function() {
                                C.defaultPrevented = !0
                            },
                            target: o,
                            type: s
                        }),
                        M = [];
                        for (var T = o, P = !1; T.hcEvents; )
                            Object.hasOwnProperty.call(T, "hcEvents") && T.hcEvents[s] && (M.length && (P = !0),
                            M.unshift.apply(M, T.hcEvents[s])),
                            T = Object.getPrototypeOf(T);
                        P && M.sort((function(i, o) {
                            return i.order - o.order
                        }
                        )),
                        M.forEach((function(i) {
                            !1 === i.fn.call(o, C) && C.preventDefault()
                        }
                        ))
                    }
                    S && !C.defaultPrevented && S.call(o, C)
                }
                var o, s = i.charts, p = i.doc, C = i.win;
                (v || (v = {})).messages = [],
                Math.easeInOutSine = function(i) {
                    return -.5 * (Math.cos(Math.PI * i) - 1)
                }
                ;
                var S = Array.prototype.find ? function(i, o) {
                    return i.find(o)
                }
                : function(i, o) {
                    var s, p = i.length;
                    for (s = 0; s < p; s++)
                        if (o(i[s], s))
                            return i[s]
                }
                ;
                J({
                    map: "map",
                    each: "forEach",
                    grep: "filter",
                    reduce: "reduce",
                    some: "some"
                }, (function(o, s) {
                    i[s] = function(i) {
                        var p;
                        return v(32, !1, void 0, ((p = {})["Highcharts." + s] = "use Array." + o,
                        p)),
                        Array.prototype[o].apply(i, [].slice.call(arguments, 1))
                    }
                }
                ));
                var M, T = function() {
                    var i = Math.random().toString(36).substring(2, 9) + "-"
                      , o = 0;
                    return function() {
                        return "highcharts-" + (M ? "" : i) + o++
                    }
                }();
                return C.jQuery && (C.jQuery.fn.highcharts = function() {
                    var o = [].slice.call(arguments);
                    if (this[0])
                        return o[0] ? (new (i[x(o[0]) ? o.shift() : "Chart"])(this[0],o[0],o[1]),
                        this) : s[c(this[0], "data-highcharts-chart")]
                }
                ),
                {
                    addEvent: function(o, s, p, C) {
                        void 0 === C && (C = {});
                        var S = "function" == typeof o && o.prototype || o;
                        Object.hasOwnProperty.call(S, "hcEvents") || (S.hcEvents = {}),
                        S = S.hcEvents,
                        i.Point && o instanceof i.Point && o.series && o.series.chart && (o.series.chart.runTrackerClick = !0);
                        var M = o.addEventListener || i.addEventListenerPolyfill;
                        return M && M.call(o, s, p, !!i.supportsPassiveEvents && {
                            passive: void 0 === C.passive ? -1 !== s.indexOf("touch") : C.passive,
                            capture: !1
                        }),
                        S[s] || (S[s] = []),
                        S[s].push({
                            fn: p,
                            order: "number" == typeof C.order ? C.order : 1 / 0
                        }),
                        S[s].sort((function(i, o) {
                            return i.order - o.order
                        }
                        )),
                        function() {
                            K(o, s, p)
                        }
                    },
                    arrayMax: function(i) {
                        for (var o = i.length, s = i[0]; o--; )
                            i[o] > s && (s = i[o]);
                        return s
                    },
                    arrayMin: function(i) {
                        for (var o = i.length, s = i[0]; o--; )
                            i[o] < s && (s = i[o]);
                        return s
                    },
                    attr: c,
                    clamp: function(i, o, s) {
                        return i > o ? i < s ? i : s : o
                    },
                    cleanRecursively: function E(i, o) {
                        var s = {};
                        return J(i, (function(p, C) {
                            G(i[C], !0) && !i.nodeType && o[C] ? (p = E(i[C], o[C]),
                            Object.keys(p).length && (s[C] = p)) : (G(i[C]) || i[C] !== o[C]) && (s[C] = i[C])
                        }
                        )),
                        s
                    },
                    clearTimeout: function(i) {
                        f(i) && clearTimeout(i)
                    },
                    correctFloat: n,
                    createElement: w,
                    css: m,
                    defined: f,
                    destroyObjectProperties: function(i, o) {
                        J(i, (function(s, p) {
                            s && s !== o && s.destroy && s.destroy(),
                            delete i[p]
                        }
                        ))
                    },
                    discardElement: function(i) {
                        o || (o = w("div")),
                        i && o.appendChild(i),
                        o.innerHTML = ""
                    },
                    erase: function(i, o) {
                        for (var s = i.length; s--; )
                            if (i[s] === o) {
                                i.splice(s, 1);
                                break
                            }
                    },
                    error: v,
                    extend: e,
                    extendClass: function(i, o) {
                        var g = function() {};
                        return e(g.prototype = new i, o),
                        g
                    },
                    find: S,
                    fireEvent: A,
                    getMagnitude: function(i) {
                        return Math.pow(10, Math.floor(Math.log(i) / Math.LN10))
                    },
                    getNestedProperty: function(i, o) {
                        for (i = i.split("."); i.length && f(o); ) {
                            var s = i.shift();
                            if (void 0 === s || "__proto__" === s)
                                return;
                            if (!f(o = o[s]) || "function" == typeof o || "number" == typeof o.nodeType || o === C)
                                return
                        }
                        return o
                    },
                    getStyle: function l(o, s, p) {
                        var S = i.getStyle || l;
                        if ("width" === s)
                            return s = Math.min(o.offsetWidth, o.scrollWidth),
                            (p = o.getBoundingClientRect && o.getBoundingClientRect().width) < s && p >= s - 1 && (s = Math.floor(p)),
                            Math.max(0, s - (S(o, "padding-left", !0) || 0) - (S(o, "padding-right", !0) || 0));
                        if ("height" === s)
                            return Math.max(0, Math.min(o.offsetHeight, o.scrollHeight) - (S(o, "padding-top", !0) || 0) - (S(o, "padding-bottom", !0) || 0));
                        if (C.getComputedStyle || v(27, !0),
                        o = C.getComputedStyle(o, void 0)) {
                            var M = o.getPropertyValue(s);
                            t(p, "opacity" !== s) && (M = H(M))
                        }
                        return M
                    },
                    inArray: function(i, o, s) {
                        return v(32, !1, void 0, {
                            "Highcharts.inArray": "use Array.indexOf"
                        }),
                        o.indexOf(i, s)
                    },
                    isArray: y,
                    isClass: q,
                    isDOMElement: B,
                    isFunction: function(i) {
                        return "function" == typeof i
                    },
                    isNumber: h,
                    isObject: G,
                    isString: x,
                    keys: function(i) {
                        return v(32, !1, void 0, {
                            "Highcharts.keys": "use Object.keys"
                        }),
                        Object.keys(i)
                    },
                    merge: function() {
                        var i, o = arguments, s = {}, k = function(i, o) {
                            return "object" != typeof i && (i = {}),
                            J(o, (function(s, p) {
                                "__proto__" !== p && "constructor" !== p && (!G(s, !0) || q(s) || B(s) ? i[p] = o[p] : i[p] = k(i[p] || {}, s))
                            }
                            )),
                            i
                        };
                        !0 === o[0] && (s = o[1],
                        o = Array.prototype.slice.call(o, 2));
                        var p = o.length;
                        for (i = 0; i < p; i++)
                            s = k(s, o[i]);
                        return s
                    },
                    normalizeTickInterval: function(i, o, s, p, C) {
                        var S = i
                          , M = i / (s = t(s, 1));
                        for (o || (o = C ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10],
                        !1 === p && (1 === s ? o = o.filter((function(i) {
                            return 0 == i % 1
                        }
                        )) : .1 >= s && (o = [1 / s]))),
                        p = 0; p < o.length && (S = o[p],
                        !(C && S * s >= i || !C && M <= (o[p] + (o[p + 1] || o[p])) / 2)); p++)
                            ;
                        return n(S * s, -Math.round(Math.log(.001) / Math.LN10))
                    },
                    objectEach: J,
                    offset: function(i) {
                        var o = p.documentElement;
                        return {
                            top: (i = i.parentElement || i.parentNode ? i.getBoundingClientRect() : {
                                top: 0,
                                left: 0,
                                width: 0,
                                height: 0
                            }).top + (C.pageYOffset || o.scrollTop) - (o.clientTop || 0),
                            left: i.left + (C.pageXOffset || o.scrollLeft) - (o.clientLeft || 0),
                            width: i.width,
                            height: i.height
                        }
                    },
                    pad: function(i, o, s) {
                        return Array((o || 2) + 1 - String(i).replace("-", "").length).join(s || "0") + i
                    },
                    pick: t,
                    pInt: H,
                    relativeLength: function(i, o, s) {
                        return /%$/.test(i) ? o * parseFloat(i) / 100 + (s || 0) : parseFloat(i)
                    },
                    removeEvent: K,
                    splat: function(i) {
                        return y(i) ? i : [i]
                    },
                    stableSort: function(i, o) {
                        var s, p, C = i.length;
                        for (p = 0; p < C; p++)
                            i[p].safeI = p;
                        for (i.sort((function(i, p) {
                            return 0 === (s = o(i, p)) ? i.safeI - p.safeI : s
                        }
                        )),
                        p = 0; p < C; p++)
                            delete i[p].safeI
                    },
                    syncTimeout: function(i, o, s) {
                        return 0 < o ? setTimeout(i, o, s) : (i.call(0, s),
                        -1)
                    },
                    timeUnits: {
                        millisecond: 1,
                        second: 1e3,
                        minute: 6e4,
                        hour: 36e5,
                        day: 864e5,
                        week: 6048e5,
                        month: 24192e5,
                        year: 314496e5
                    },
                    uniqueKey: T,
                    useSerialIds: function(i) {
                        return M = t(i, M)
                    },
                    wrap: function(i, o, s) {
                        var p = i[o];
                        i[o] = function() {
                            var i = Array.prototype.slice.call(arguments)
                              , o = arguments
                              , C = this;
                            return C.proceed = function() {
                                p.apply(C, arguments.length ? arguments : o)
                            }
                            ,
                            i.unshift(p),
                            i = s.apply(this, i),
                            C.proceed = null,
                            i
                        }
                    }
                }
            }
            )),
            L(o, "Core/Color/Palette.js", [], (function() {
                return {
                    colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
                    backgroundColor: "#ffffff",
                    neutralColor100: "#000000",
                    neutralColor80: "#333333",
                    neutralColor60: "#666666",
                    neutralColor40: "#999999",
                    neutralColor20: "#cccccc",
                    neutralColor10: "#e6e6e6",
                    neutralColor5: "#f2f2f2",
                    neutralColor3: "#f7f7f7",
                    highlightColor100: "#003399",
                    highlightColor80: "#335cad",
                    highlightColor60: "#6685c2",
                    highlightColor20: "#ccd6eb",
                    highlightColor10: "#e6ebf5",
                    positiveColor: "#06b535",
                    negativeColor: "#f21313"
                }
            }
            )),
            L(o, "Core/Chart/ChartDefaults.js", [o["Core/Color/Palette.js"]], (function(i) {
                return {
                    panning: {
                        enabled: !1,
                        type: "x"
                    },
                    styledMode: !1,
                    borderRadius: 0,
                    colorCount: 10,
                    defaultSeriesType: "line",
                    ignoreHiddenSeries: !0,
                    spacing: [10, 10, 15, 10],
                    resetZoomButton: {
                        theme: {
                            zIndex: 6
                        },
                        position: {
                            align: "right",
                            x: -10,
                            y: 10
                        }
                    },
                    zoomBySingleTouch: !1,
                    width: null,
                    height: null,
                    borderColor: i.highlightColor80,
                    backgroundColor: i.backgroundColor,
                    plotBorderColor: i.neutralColor20
                }
            }
            )),
            L(o, "Core/Color/Color.js", [o["Core/Globals.js"], o["Core/Utilities.js"]], (function(i, o) {
                var s = o.isNumber
                  , p = o.merge
                  , C = o.pInt;
                return o = function() {
                    function u(o) {
                        this.parsers = [{
                            regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                            parse: function(i) {
                                return [C(i[1]), C(i[2]), C(i[3]), parseFloat(i[4], 10)]
                            }
                        }, {
                            regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                            parse: function(i) {
                                return [C(i[1]), C(i[2]), C(i[3]), 1]
                            }
                        }],
                        this.rgba = [];
                        var s = i.Color;
                        return s && s !== u ? new s(o) : this instanceof u ? void this.init(o) : new u(o)
                    }
                    return u.parse = function(i) {
                        return new u(i)
                    }
                    ,
                    u.prototype.init = function(i) {
                        var o, s;
                        if ((this.input = i = u.names[i && i.toLowerCase ? i.toLowerCase() : ""] || i) && i.stops)
                            this.stops = i.stops.map((function(i) {
                                return new u(i[1])
                            }
                            ));
                        else {
                            if (i && i.charAt && "#" === i.charAt()) {
                                var p = i.length;
                                i = parseInt(i.substr(1), 16),
                                7 === p ? o = [(16711680 & i) >> 16, (65280 & i) >> 8, 255 & i, 1] : 4 === p && (o = [(3840 & i) >> 4 | (3840 & i) >> 8, (240 & i) >> 4 | 240 & i, (15 & i) << 4 | 15 & i, 1])
                            }
                            if (!o)
                                for (s = this.parsers.length; s-- && !o; ) {
                                    var C = this.parsers[s];
                                    (p = C.regex.exec(i)) && (o = C.parse(p))
                                }
                        }
                        this.rgba = o || []
                    }
                    ,
                    u.prototype.get = function(i) {
                        var o = this.input
                          , C = this.rgba;
                        if (void 0 !== this.stops) {
                            var S = p(o);
                            S.stops = [].concat(S.stops),
                            this.stops.forEach((function(o, s) {
                                S.stops[s] = [S.stops[s][0], o.get(i)]
                            }
                            ))
                        } else
                            S = C && s(C[0]) ? "rgb" === i || !i && 1 === C[3] ? "rgb(" + C[0] + "," + C[1] + "," + C[2] + ")" : "a" === i ? C[3] : "rgba(" + C.join(",") + ")" : o;
                        return S
                    }
                    ,
                    u.prototype.brighten = function(i) {
                        var o, p = this.rgba;
                        if (this.stops)
                            this.stops.forEach((function(o) {
                                o.brighten(i)
                            }
                            ));
                        else if (s(i) && 0 !== i)
                            for (o = 0; 3 > o; o++)
                                p[o] += C(255 * i),
                                0 > p[o] && (p[o] = 0),
                                255 < p[o] && (p[o] = 255);
                        return this
                    }
                    ,
                    u.prototype.setOpacity = function(i) {
                        return this.rgba[3] = i,
                        this
                    }
                    ,
                    u.prototype.tweenTo = function(i, o) {
                        var s = this.rgba
                          , p = i.rgba;
                        return o = p.length && s && s.length ? ((i = 1 !== p[3] || 1 !== s[3]) ? "rgba(" : "rgb(") + Math.round(p[0] + (s[0] - p[0]) * (1 - o)) + "," + Math.round(p[1] + (s[1] - p[1]) * (1 - o)) + "," + Math.round(p[2] + (s[2] - p[2]) * (1 - o)) + (i ? "," + (p[3] + (s[3] - p[3]) * (1 - o)) : "") + ")" : i.input || "none"
                    }
                    ,
                    u.names = {
                        white: "#ffffff",
                        black: "#000000"
                    },
                    u
                }(),
                o
            }
            )),
            L(o, "Core/Time.js", [o["Core/Globals.js"], o["Core/Utilities.js"]], (function(i, o) {
                var s = i.win
                  , p = o.defined
                  , C = o.error
                  , S = o.extend
                  , M = o.isObject
                  , T = o.merge
                  , P = o.objectEach
                  , O = o.pad
                  , D = o.pick
                  , j = o.splat
                  , R = o.timeUnits
                  , X = i.isSafari && Intl && Intl.DateTimeFormat.prototype.formatRange
                  , Y = i.isSafari && Intl && !Intl.DateTimeFormat.prototype.formatRange;
                return o = function() {
                    function w(i) {
                        this.options = {},
                        this.variableTimezone = this.useUTC = !1,
                        this.Date = s.Date,
                        this.getTimezoneOffset = this.timezoneOffsetFunction(),
                        this.update(i)
                    }
                    return w.prototype.get = function(i, o) {
                        if (this.variableTimezone || this.timezoneOffset) {
                            var s = o.getTime()
                              , p = s - this.getTimezoneOffset(o);
                            return o.setTime(p),
                            i = o["getUTC" + i](),
                            o.setTime(s),
                            i
                        }
                        return this.useUTC ? o["getUTC" + i]() : o["get" + i]()
                    }
                    ,
                    w.prototype.set = function(i, o, s) {
                        if (this.variableTimezone || this.timezoneOffset) {
                            if ("Milliseconds" === i || "Seconds" === i || "Minutes" === i && 0 == this.getTimezoneOffset(o) % 36e5)
                                return o["setUTC" + i](s);
                            var p = this.getTimezoneOffset(o);
                            return p = o.getTime() - p,
                            o.setTime(p),
                            o["setUTC" + i](s),
                            i = this.getTimezoneOffset(o),
                            p = o.getTime() + i,
                            o.setTime(p)
                        }
                        return this.useUTC || X && "FullYear" === i ? o["setUTC" + i](s) : o["set" + i](s)
                    }
                    ,
                    w.prototype.update = function(i) {
                        var o = D(i && i.useUTC, !0);
                        this.options = i = T(!0, this.options || {}, i),
                        this.Date = i.Date || s.Date || Date,
                        this.timezoneOffset = (this.useUTC = o) && i.timezoneOffset,
                        this.getTimezoneOffset = this.timezoneOffsetFunction(),
                        this.variableTimezone = o && !(!i.getTimezoneOffset && !i.timezone)
                    }
                    ,
                    w.prototype.makeTime = function(i, o, s, p, C, S) {
                        if (this.useUTC) {
                            var M = this.Date.UTC.apply(0, arguments)
                              , T = this.getTimezoneOffset(M);
                            M += T;
                            var P = this.getTimezoneOffset(M);
                            T !== P ? M += P - T : T - 36e5 !== this.getTimezoneOffset(M - 36e5) || Y || (M -= 36e5)
                        } else
                            M = new this.Date(i,o,D(s, 1),D(p, 0),D(C, 0),D(S, 0)).getTime();
                        return M
                    }
                    ,
                    w.prototype.timezoneOffsetFunction = function() {
                        var i = this
                          , o = this.options
                          , p = o.moment || s.moment;
                        if (!this.useUTC)
                            return function(i) {
                                return 6e4 * new Date(i.toString()).getTimezoneOffset()
                            }
                            ;
                        if (o.timezone) {
                            if (p)
                                return function(i) {
                                    return 6e4 * -p.tz(i, o.timezone).utcOffset()
                                }
                                ;
                            C(25)
                        }
                        return this.useUTC && o.getTimezoneOffset ? function(i) {
                            return 6e4 * o.getTimezoneOffset(i.valueOf())
                        }
                        : function() {
                            return 6e4 * (i.timezoneOffset || 0)
                        }
                    }
                    ,
                    w.prototype.dateFormat = function(o, s, C) {
                        if (!p(s) || isNaN(s))
                            return i.defaultOptions.lang && i.defaultOptions.lang.invalidDate || "";
                        o = D(o, "%Y-%m-%d %H:%M:%S");
                        var M = this
                          , T = new this.Date(s)
                          , j = this.get("Hours", T)
                          , R = this.get("Day", T)
                          , X = this.get("Date", T)
                          , Y = this.get("Month", T)
                          , _ = this.get("FullYear", T)
                          , F = i.defaultOptions.lang
                          , U = F && F.weekdays
                          , V = F && F.shortWeekdays;
                        return T = S({
                            a: V ? V[R] : U[R].substr(0, 3),
                            A: U[R],
                            d: O(X),
                            e: O(X, 2, " "),
                            w: R,
                            b: F.shortMonths[Y],
                            B: F.months[Y],
                            m: O(Y + 1),
                            o: Y + 1,
                            y: _.toString().substr(2, 2),
                            Y: _,
                            H: O(j),
                            k: j,
                            I: O(j % 12 || 12),
                            l: j % 12 || 12,
                            M: O(this.get("Minutes", T)),
                            p: 12 > j ? "AM" : "PM",
                            P: 12 > j ? "am" : "pm",
                            S: O(T.getSeconds()),
                            L: O(Math.floor(s % 1e3), 3)
                        }, i.dateFormats),
                        P(T, (function(i, p) {
                            for (; -1 !== o.indexOf("%" + p); )
                                o = o.replace("%" + p, "function" == typeof i ? i.call(M, s) : i)
                        }
                        )),
                        C ? o.substr(0, 1).toUpperCase() + o.substr(1) : o
                    }
                    ,
                    w.prototype.resolveDTLFormat = function(i) {
                        return M(i, !0) ? i : {
                            main: (i = j(i))[0],
                            from: i[1],
                            to: i[2]
                        }
                    }
                    ,
                    w.prototype.getTimeTicks = function(i, o, s, C) {
                        var M, T = this, P = [], O = {}, j = new T.Date(o), X = i.unitRange, Y = i.count || 1;
                        if (C = D(C, 1),
                        p(o)) {
                            if (T.set("Milliseconds", j, X >= R.second ? 0 : Y * Math.floor(T.get("Milliseconds", j) / Y)),
                            X >= R.second && T.set("Seconds", j, X >= R.minute ? 0 : Y * Math.floor(T.get("Seconds", j) / Y)),
                            X >= R.minute && T.set("Minutes", j, X >= R.hour ? 0 : Y * Math.floor(T.get("Minutes", j) / Y)),
                            X >= R.hour && T.set("Hours", j, X >= R.day ? 0 : Y * Math.floor(T.get("Hours", j) / Y)),
                            X >= R.day && T.set("Date", j, X >= R.month ? 1 : Math.max(1, Y * Math.floor(T.get("Date", j) / Y))),
                            X >= R.month) {
                                T.set("Month", j, X >= R.year ? 0 : Y * Math.floor(T.get("Month", j) / Y));
                                var _ = T.get("FullYear", j)
                            }
                            X >= R.year && T.set("FullYear", j, _ - _ % Y),
                            X === R.week && (_ = T.get("Day", j),
                            T.set("Date", j, T.get("Date", j) - _ + C + (_ < C ? -7 : 0))),
                            _ = T.get("FullYear", j),
                            C = T.get("Month", j);
                            var F = T.get("Date", j)
                              , U = T.get("Hours", j);
                            for (o = j.getTime(),
                            !T.variableTimezone && T.useUTC || !p(s) || (M = s - o > 4 * R.month || T.getTimezoneOffset(o) !== T.getTimezoneOffset(s)),
                            o = j.getTime(),
                            j = 1; o < s; )
                                P.push(o),
                                o = X === R.year ? T.makeTime(_ + j * Y, 0) : X === R.month ? T.makeTime(_, C + j * Y) : !M || X !== R.day && X !== R.week ? M && X === R.hour && 1 < Y ? T.makeTime(_, C, F, U + j * Y) : o + X * Y : T.makeTime(_, C, F + j * Y * (X === R.day ? 1 : 7)),
                                j++;
                            P.push(o),
                            X <= R.hour && 1e4 > P.length && P.forEach((function(i) {
                                0 == i % 18e5 && "000000000" === T.dateFormat("%H%M%S%L", i) && (O[i] = "day")
                            }
                            ))
                        }
                        return P.info = S(i, {
                            higherRanks: O,
                            totalRange: X * Y
                        }),
                        P
                    }
                    ,
                    w
                }(),
                o
            }
            )),
            L(o, "Core/DefaultOptions.js", [o["Core/Globals.js"], o["Core/Chart/ChartDefaults.js"], o["Core/Color/Color.js"], o["Core/Color/Palette.js"], o["Core/Time.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C, S) {
                var M = i.isTouchDevice
                  , T = i.svg;
                s = s.parse;
                var P = S.merge
                  , O = {
                    colors: p.colors,
                    symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                    lang: {
                        loading: "Loading...",
                        months: "January February March April May June July August September October November December".split(" "),
                        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                        decimalPoint: ".",
                        numericSymbols: "kMGTPE".split(""),
                        resetZoom: "Reset zoom",
                        resetZoomTitle: "Reset zoom level 1:1",
                        thousandsSep: " "
                    },
                    global: {},
                    time: {
                        Date: void 0,
                        getTimezoneOffset: void 0,
                        timezone: void 0,
                        timezoneOffset: 0,
                        useUTC: !0
                    },
                    chart: o,
                    title: {
                        text: "Chart title",
                        align: "center",
                        margin: 15,
                        widthAdjust: -44
                    },
                    subtitle: {
                        text: "",
                        align: "center",
                        widthAdjust: -44
                    },
                    caption: {
                        margin: 15,
                        text: "",
                        align: "left",
                        verticalAlign: "bottom"
                    },
                    plotOptions: {},
                    labels: {
                        style: {
                            position: "absolute",
                            color: p.neutralColor80
                        }
                    },
                    legend: {
                        enabled: !0,
                        align: "center",
                        alignColumns: !0,
                        className: "highcharts-no-tooltip",
                        layout: "horizontal",
                        labelFormatter: function() {
                            return this.name
                        },
                        borderColor: p.neutralColor40,
                        borderRadius: 0,
                        navigation: {
                            activeColor: p.highlightColor100,
                            inactiveColor: p.neutralColor20
                        },
                        itemStyle: {
                            color: p.neutralColor80,
                            cursor: "pointer",
                            fontSize: "12px",
                            fontWeight: "bold",
                            textOverflow: "ellipsis"
                        },
                        itemHoverStyle: {
                            color: p.neutralColor100
                        },
                        itemHiddenStyle: {
                            color: p.neutralColor20
                        },
                        shadow: !1,
                        itemCheckboxStyle: {
                            position: "absolute",
                            width: "13px",
                            height: "13px"
                        },
                        squareSymbol: !0,
                        symbolPadding: 5,
                        verticalAlign: "bottom",
                        x: 0,
                        y: 0,
                        title: {
                            style: {
                                fontWeight: "bold"
                            }
                        }
                    },
                    loading: {
                        labelStyle: {
                            fontWeight: "bold",
                            position: "relative",
                            top: "45%"
                        },
                        style: {
                            position: "absolute",
                            backgroundColor: p.backgroundColor,
                            opacity: .5,
                            textAlign: "center"
                        }
                    },
                    tooltip: {
                        enabled: !0,
                        animation: T,
                        borderRadius: 3,
                        dateTimeLabelFormats: {
                            millisecond: "%A, %b %e, %H:%M:%S.%L",
                            second: "%A, %b %e, %H:%M:%S",
                            minute: "%A, %b %e, %H:%M",
                            hour: "%A, %b %e, %H:%M",
                            day: "%A, %b %e, %Y",
                            week: "Week from %A, %b %e, %Y",
                            month: "%B %Y",
                            year: "%Y"
                        },
                        footerFormat: "",
                        padding: 8,
                        snap: M ? 25 : 10,
                        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                        pointFormat: '<span style="color:{point.color}">â—</span> {series.name}: <b>{point.y}</b><br/>',
                        backgroundColor: s(p.neutralColor3).setOpacity(.85).get(),
                        borderWidth: 1,
                        shadow: !0,
                        style: {
                            color: p.neutralColor80,
                            cursor: "default",
                            fontSize: "12px",
                            whiteSpace: "nowrap"
                        }
                    },
                    credits: {
                        enabled: !0,
                        href: "https://www.highcharts.com?credits",
                        position: {
                            align: "right",
                            x: -10,
                            verticalAlign: "bottom",
                            y: -5
                        },
                        style: {
                            cursor: "pointer",
                            color: p.neutralColor40,
                            fontSize: "9px"
                        },
                        text: "Highcharts.com"
                    }
                };
                O.chart.styledMode = !1;
                var D = new C(P(O.global, O.time));
                return {
                    defaultOptions: O,
                    defaultTime: D,
                    getOptions: function() {
                        return O
                    },
                    setOptions: function(o) {
                        return P(!0, O, o),
                        (o.time || o.global) && (i.time ? i.time.update(P(O.global, O.time, o.global, o.time)) : i.time = D),
                        O
                    }
                }
            }
            )),
            L(o, "Core/Animation/Fx.js", [o["Core/Color/Color.js"], o["Core/Globals.js"], o["Core/Utilities.js"]], (function(i, o, s) {
                var p = i.parse
                  , C = o.win
                  , S = s.isNumber
                  , M = s.objectEach;
                return function() {
                    function a(i, o, s) {
                        this.pos = NaN,
                        this.options = o,
                        this.elem = i,
                        this.prop = s
                    }
                    return a.prototype.dSetter = function() {
                        var i = this.paths
                          , o = i && i[0];
                        i = i && i[1];
                        var s = this.now || 0
                          , p = [];
                        if (1 !== s && o && i)
                            if (o.length === i.length && 1 > s)
                                for (var C = 0; C < i.length; C++) {
                                    for (var M = o[C], T = i[C], P = [], O = 0; O < T.length; O++) {
                                        var D = M[O]
                                          , j = T[O];
                                        S(D) && S(j) && ("A" !== T[0] || 4 !== O && 5 !== O) ? P[O] = D + s * (j - D) : P[O] = j
                                    }
                                    p.push(P)
                                }
                            else
                                p = i;
                        else
                            p = this.toD || [];
                        this.elem.attr("d", p, void 0, !0)
                    }
                    ,
                    a.prototype.update = function() {
                        var i = this.elem
                          , o = this.prop
                          , s = this.now
                          , p = this.options.step;
                        this[o + "Setter"] ? this[o + "Setter"]() : i.attr ? i.element && i.attr(o, s, null, !0) : i.style[o] = s + this.unit,
                        p && p.call(i, s, this)
                    }
                    ,
                    a.prototype.run = function(i, o, s) {
                        var p = this
                          , S = p.options
                          , t = function(i) {
                            return !t.stopped && p.step(i)
                        }
                          , M = C.requestAnimationFrame || function(i) {
                            setTimeout(i, 13)
                        }
                          , w = function() {
                            for (var i = 0; i < a.timers.length; i++)
                                a.timers[i]() || a.timers.splice(i--, 1);
                            a.timers.length && M(w)
                        };
                        i !== o || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date,
                        this.start = i,
                        this.end = o,
                        this.unit = s,
                        this.now = this.start,
                        this.pos = 0,
                        t.elem = this.elem,
                        t.prop = this.prop,
                        t() && 1 === a.timers.push(t) && M(w)) : (delete S.curAnim[this.prop],
                        S.complete && 0 === Object.keys(S.curAnim).length && S.complete.call(this.elem))
                    }
                    ,
                    a.prototype.step = function(i) {
                        var o = +new Date
                          , s = this.options
                          , p = this.elem
                          , C = s.complete
                          , S = s.duration
                          , T = s.curAnim;
                        if (p.attr && !p.element)
                            i = !1;
                        else if (i || o >= S + this.startTime) {
                            this.now = this.end,
                            this.pos = 1,
                            this.update();
                            var P = T[this.prop] = !0;
                            M(T, (function(i) {
                                !0 !== i && (P = !1)
                            }
                            )),
                            P && C && C.call(p),
                            i = !1
                        } else
                            this.pos = s.easing((o - this.startTime) / S),
                            this.now = this.start + (this.end - this.start) * this.pos,
                            this.update(),
                            i = !0;
                        return i
                    }
                    ,
                    a.prototype.initPath = function(i, o, s) {
                        function c(i, o) {
                            for (; i.length < D; ) {
                                var s = i[0]
                                  , p = o[D - i.length];
                                p && "M" === s[0] && (i[0] = "C" === p[0] ? ["C", s[1], s[2], s[1], s[2], s[1], s[2]] : ["L", s[1], s[2]]),
                                i.unshift(s),
                                M && (s = i.pop(),
                                i.push(i[i.length - 1], s))
                            }
                        }
                        function e(i, o) {
                            for (; i.length < D; )
                                if ("C" === (o = i[Math.floor(i.length / T) - 1].slice())[0] && (o[1] = o[5],
                                o[2] = o[6]),
                                M) {
                                    var s = i[Math.floor(i.length / T)].slice();
                                    i.splice(i.length / 2, 0, o, s)
                                } else
                                    i.push(o)
                        }
                        var p = i.startX
                          , C = i.endX;
                        s = s.slice();
                        var M = i.isArea
                          , T = M ? 2 : 1;
                        if (!(o = o && o.slice()))
                            return [s, s];
                        if (p && C && C.length) {
                            for (i = 0; i < p.length; i++) {
                                if (p[i] === C[0]) {
                                    var P = i;
                                    break
                                }
                                if (p[0] === C[C.length - p.length + i]) {
                                    P = i;
                                    var O = !0;
                                    break
                                }
                                if (p[p.length - 1] === C[C.length - p.length + i]) {
                                    P = p.length - i;
                                    break
                                }
                            }
                            void 0 === P && (o = [])
                        }
                        if (o.length && S(P)) {
                            var D = s.length + P * T;
                            O ? (c(o, s),
                            e(s, o)) : (c(s, o),
                            e(o, s))
                        }
                        return [o, s]
                    }
                    ,
                    a.prototype.fillSetter = function() {
                        a.prototype.strokeSetter.apply(this, arguments)
                    }
                    ,
                    a.prototype.strokeSetter = function() {
                        this.elem.attr(this.prop, p(this.start).tweenTo(p(this.end), this.pos), null, !0)
                    }
                    ,
                    a.timers = [],
                    a
                }()
            }
            )),
            L(o, "Core/Animation/AnimationUtilities.js", [o["Core/Animation/Fx.js"], o["Core/Utilities.js"]], (function(i, o) {
                function v(i) {
                    return M(i) ? T({
                        duration: 500,
                        defer: 0
                    }, i) : {
                        duration: i ? 500 : 0,
                        defer: 0
                    }
                }
                function H(o, s) {
                    for (var p = i.timers.length; p--; )
                        i.timers[p].elem !== o || s && s !== i.timers[p].prop || (i.timers[p].stopped = !0)
                }
                var s = o.defined
                  , p = o.getStyle
                  , C = o.isArray
                  , S = o.isNumber
                  , M = o.isObject
                  , T = o.merge
                  , P = o.objectEach
                  , O = o.pick;
                return {
                    animate: function(o, s, O) {
                        var D, j, R, X = "";
                        if (!M(O)) {
                            var Y = arguments;
                            O = {
                                duration: Y[2],
                                easing: Y[3],
                                complete: Y[4]
                            }
                        }
                        S(O.duration) || (O.duration = 400),
                        O.easing = "function" == typeof O.easing ? O.easing : Math[O.easing] || Math.easeInOutSine,
                        O.curAnim = T(s),
                        P(s, (function(S, M) {
                            H(o, M),
                            R = new i(o,O,M),
                            j = void 0,
                            "d" === M && C(s.d) ? (R.paths = R.initPath(o, o.pathArray, s.d),
                            R.toD = s.d,
                            D = 0,
                            j = 1) : o.attr ? D = o.attr(M) : (D = parseFloat(p(o, M)) || 0,
                            "opacity" !== M && (X = "px")),
                            j || (j = S),
                            "string" == typeof j && j.match("px") && (j = j.replace(/px/g, "")),
                            R.run(D, j, X)
                        }
                        ))
                    },
                    animObject: v,
                    getDeferredAnimation: function(i, o, p) {
                        var C = v(o)
                          , S = 0
                          , M = 0;
                        return (p ? [p] : i.series).forEach((function(i) {
                            i = v(i.options.animation),
                            S = o && s(o.defer) ? C.defer : Math.max(S, i.duration + i.defer),
                            M = Math.min(C.duration, i.duration)
                        }
                        )),
                        i.renderer.forExport && (S = 0),
                        {
                            defer: Math.max(0, S - M),
                            duration: Math.min(S, M)
                        }
                    },
                    setAnimation: function(i, o) {
                        o.renderer.globalAnimation = O(i, o.options.chart.animation, !0)
                    },
                    stop: H
                }
            }
            )),
            L(o, "Core/Renderer/HTML/AST.js", [o["Core/Globals.js"], o["Core/Utilities.js"]], (function(i, o) {
                var s = i.SVG_NS
                  , p = o.attr
                  , C = o.createElement
                  , S = o.discardElement
                  , M = o.error
                  , T = o.isString
                  , P = o.objectEach
                  , O = o.splat;
                try {
                    var D = !!(new DOMParser).parseFromString("", "text/html")
                } catch (j) {
                    D = !1
                }
                return o = function() {
                    function c(i) {
                        this.nodes = "string" == typeof i ? this.parseMarkup(i) : i
                    }
                    return c.filterUserAttributes = function(i) {
                        return P(i, (function(o, s) {
                            var p = !0;
                            -1 === c.allowedAttributes.indexOf(s) && (p = !1),
                            -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(s) && (p = T(o) && c.allowedReferences.some((function(i) {
                                return 0 === o.indexOf(i)
                            }
                            ))),
                            p || (M("Highcharts warning: Invalid attribute '" + s + "' in config"),
                            delete i[s])
                        }
                        )),
                        i
                    }
                    ,
                    c.setElementHTML = function(i, o) {
                        i.innerHTML = "",
                        o && new c(o).addToDOM(i)
                    }
                    ,
                    c.prototype.addToDOM = function(o) {
                        return function f(o, C) {
                            var S;
                            return O(o).forEach((function(o) {
                                var T = o.tagName
                                  , O = o.textContent ? i.doc.createTextNode(o.textContent) : void 0;
                                if (T)
                                    if ("#text" === T)
                                        var D = O;
                                    else if (-1 !== c.allowedTags.indexOf(T)) {
                                        T = i.doc.createElementNS("svg" === T ? s : C.namespaceURI || s, T);
                                        var j = o.attributes || {};
                                        P(o, (function(i, o) {
                                            "tagName" !== o && "attributes" !== o && "children" !== o && "textContent" !== o && (j[o] = i)
                                        }
                                        )),
                                        p(T, c.filterUserAttributes(j)),
                                        O && T.appendChild(O),
                                        f(o.children || [], T),
                                        D = T
                                    } else
                                        M("Highcharts warning: Invalid tagName '" + T + "' in config");
                                D && C.appendChild(D),
                                S = D
                            }
                            )),
                            S
                        }(this.nodes, o)
                    }
                    ,
                    c.prototype.parseMarkup = function(i) {
                        var o = [];
                        if (D)
                            i = (new DOMParser).parseFromString(i, "text/html");
                        else {
                            var s = C("div");
                            s.innerHTML = i,
                            i = {
                                body: s
                            }
                        }
                        var h = function(i, o) {
                            var s = i.nodeName.toLowerCase()
                              , p = {
                                tagName: s
                            };
                            if ("#text" === s) {
                                if (s = i.textContent || "",
                                /^[\s]*$/.test(s))
                                    return;
                                p.textContent = s
                            }
                            if (s = i.attributes) {
                                var C = {};
                                [].forEach.call(s, (function(i) {
                                    C[i.name] = i.value
                                }
                                )),
                                p.attributes = C
                            }
                            if (i.childNodes.length) {
                                var S = [];
                                [].forEach.call(i.childNodes, (function(i) {
                                    h(i, S)
                                }
                                )),
                                S.length && (p.children = S)
                            }
                            o.push(p)
                        };
                        return [].forEach.call(i.body.childNodes, (function(i) {
                            return h(i, o)
                        }
                        )),
                        s && S(s),
                        o
                    }
                    ,
                    c.allowedTags = "a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" "),
                    c.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 x2 y y1 y2 zIndex".split(" "),
                    c.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" "),
                    c
                }(),
                o
            }
            )),
            L(o, "Core/FormatUtilities.js", [o["Core/DefaultOptions.js"], o["Core/Utilities.js"]], (function(i, o) {
                function v(i, o, p, C) {
                    i = +i || 0,
                    o = +o;
                    var P = s.lang
                      , O = (i.toString().split(".")[1] || "").split("e")[0].length
                      , D = i.toString().split("e")
                      , j = o;
                    if (-1 === o)
                        o = Math.min(O, 20);
                    else if (S(o)) {
                        if (o && D[1] && 0 > D[1]) {
                            var R = o + +D[1];
                            0 <= R ? (D[0] = (+D[0]).toExponential(R).split("e")[0],
                            o = R) : (D[0] = D[0].split(".")[0] || 0,
                            i = 20 > o ? (D[0] * Math.pow(10, D[1])).toFixed(o) : 0,
                            D[1] = 0)
                        }
                    } else
                        o = 2;
                    R = (Math.abs(D[1] ? D[0] : i) + Math.pow(10, -Math.max(o, O) - 1)).toFixed(o);
                    var X = 3 < (O = String(T(R))).length ? O.length % 3 : 0;
                    return p = M(p, P.decimalPoint),
                    C = M(C, P.thousandsSep),
                    i = (0 > i ? "-" : "") + (X ? O.substr(0, X) + C : ""),
                    i = 0 > +D[1] && !j ? "0" : i + O.substr(X).replace(/(\d{3})(?=\d)/g, "$1" + C),
                    o && (i += p + R.slice(-o)),
                    D[1] && 0 != +i && (i += "e" + D[1]),
                    i
                }
                var s = i.defaultOptions
                  , p = i.defaultTime
                  , C = o.getNestedProperty
                  , S = o.isNumber
                  , M = o.pick
                  , T = o.pInt;
                return {
                    dateFormat: function(i, o, s) {
                        return p.dateFormat(i, o, s)
                    },
                    format: function(i, o, S) {
                        var M = "{"
                          , T = !1
                          , P = /f$/
                          , O = /\.([0-9])/
                          , D = s.lang
                          , j = S && S.time || p;
                        S = S && S.numberFormatter || v;
                        for (var R = []; i; ) {
                            var X = i.indexOf(M);
                            if (-1 === X)
                                break;
                            var Y = i.slice(0, X);
                            if (T) {
                                if (Y = Y.split(":"),
                                M = C(Y.shift() || "", o),
                                Y.length && "number" == typeof M)
                                    if (Y = Y.join(":"),
                                    P.test(Y)) {
                                        var _ = parseInt((Y.match(O) || ["", "-1"])[1], 10);
                                        null !== M && (M = S(M, _, D.decimalPoint, -1 < Y.indexOf(",") ? D.thousandsSep : ""))
                                    } else
                                        M = j.dateFormat(Y, M);
                                R.push(M)
                            } else
                                R.push(Y);
                            i = i.slice(X + 1),
                            M = (T = !T) ? "}" : "{"
                        }
                        return R.push(i),
                        R.join("")
                    },
                    numberFormat: v
                }
            }
            )),
            L(o, "Core/Renderer/SVG/SVGElement.js", [o["Core/Animation/AnimationUtilities.js"], o["Core/Renderer/HTML/AST.js"], o["Core/Color/Color.js"], o["Core/Globals.js"], o["Core/Color/Palette.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C, S) {
                var M = i.animate
                  , T = i.animObject
                  , P = i.stop
                  , O = p.deg2rad
                  , D = p.doc
                  , j = p.noop
                  , R = p.svg
                  , X = p.SVG_NS
                  , Y = p.win
                  , _ = S.addEvent
                  , F = S.attr
                  , U = S.createElement
                  , V = S.css
                  , Z = S.defined
                  , $ = S.erase
                  , Q = S.extend
                  , tt = S.fireEvent
                  , et = S.isArray
                  , it = S.isFunction
                  , ot = S.isNumber
                  , st = S.isString
                  , rt = S.merge
                  , nt = S.objectEach
                  , at = S.pick
                  , ht = S.pInt
                  , lt = S.syncTimeout
                  , ct = S.uniqueKey;
                return i = function() {
                    function a() {
                        this.element = void 0,
                        this.onEvents = {},
                        this.opacity = 1,
                        this.renderer = void 0,
                        this.SVG_NS = X,
                        this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ")
                    }
                    return a.prototype._defaultGetter = function(i) {
                        return i = at(this[i + "Value"], this[i], this.element ? this.element.getAttribute(i) : null, 0),
                        /^[\-0-9\.]+$/.test(i) && (i = parseFloat(i)),
                        i
                    }
                    ,
                    a.prototype._defaultSetter = function(i, o, s) {
                        s.setAttribute(o, i)
                    }
                    ,
                    a.prototype.add = function(i) {
                        var o = this.renderer
                          , s = this.element;
                        if (i && (this.parentGroup = i),
                        this.parentInverted = i && i.inverted,
                        void 0 !== this.textStr && "text" === this.element.nodeName && o.buildText(this),
                        this.added = !0,
                        !i || i.handleZ || this.zIndex)
                            var p = this.zIndexSetter();
                        return p || (i ? i.element : o.box).appendChild(s),
                        this.onAdd && this.onAdd(),
                        this
                    }
                    ,
                    a.prototype.addClass = function(i, o) {
                        var s = o ? "" : this.attr("class") || "";
                        return i = (i || "").split(/ /g).reduce((function(i, o) {
                            return -1 === s.indexOf(o) && i.push(o),
                            i
                        }
                        ), s ? [s] : []).join(" "),
                        i !== s && this.attr("class", i),
                        this
                    }
                    ,
                    a.prototype.afterSetters = function() {
                        this.doTransform && (this.updateTransform(),
                        this.doTransform = !1)
                    }
                    ,
                    a.prototype.align = function(i, o, s) {
                        var p, C, S, M = {}, T = this.renderer, P = T.alignedObjects;
                        i ? (this.alignOptions = i,
                        this.alignByTranslate = o,
                        (!s || st(s)) && (this.alignTo = p = s || "renderer",
                        $(P, this),
                        P.push(this),
                        s = void 0)) : (i = this.alignOptions,
                        o = this.alignByTranslate,
                        p = this.alignTo),
                        s = at(s, T[p], "scrollablePlotBox" === p ? T.plotBox : void 0, T),
                        p = i.align;
                        var O = i.verticalAlign;
                        return T = (s.x || 0) + (i.x || 0),
                        P = (s.y || 0) + (i.y || 0),
                        "right" === p ? C = 1 : "center" === p && (C = 2),
                        C && (T += (s.width - (i.width || 0)) / C),
                        M[o ? "translateX" : "x"] = Math.round(T),
                        "bottom" === O ? S = 1 : "middle" === O && (S = 2),
                        S && (P += (s.height - (i.height || 0)) / S),
                        M[o ? "translateY" : "y"] = Math.round(P),
                        this[this.placed ? "animate" : "attr"](M),
                        this.placed = !0,
                        this.alignAttr = M,
                        this
                    }
                    ,
                    a.prototype.alignSetter = function(i) {
                        var o = {
                            left: "start",
                            center: "middle",
                            right: "end"
                        };
                        o[i] && (this.alignValue = i,
                        this.element.setAttribute("text-anchor", o[i]))
                    }
                    ,
                    a.prototype.animate = function(i, o, s) {
                        var p = this
                          , C = T(at(o, this.renderer.globalAnimation, !0));
                        return o = C.defer,
                        at(D.hidden, D.msHidden, D.webkitHidden, !1) && (C.duration = 0),
                        0 !== C.duration ? (s && (C.complete = s),
                        lt((function() {
                            p.element && M(p, i, C)
                        }
                        ), o)) : (this.attr(i, void 0, s),
                        nt(i, (function(i, o) {
                            C.step && C.step.call(this, i, {
                                prop: o,
                                pos: 1,
                                elem: this
                            })
                        }
                        ), this)),
                        this
                    }
                    ,
                    a.prototype.applyTextOutline = function(i) {
                        var o = this.element;
                        -1 !== i.indexOf("contrast") && (i = i.replace(/contrast/g, this.renderer.getContrast(o.style.fill)));
                        var s = i.split(" ");
                        if (i = s[s.length - 1],
                        (s = s[0]) && "none" !== s && p.svg) {
                            this.fakeTS = !0,
                            this.ySetter = this.xSetter,
                            s = s.replace(/(^[\d\.]+)(.*?)$/g, (function(i, o, s) {
                                return 2 * Number(o) + s
                            }
                            )),
                            this.removeTextOutline();
                            var C = D.createElementNS(X, "tspan");
                            F(C, {
                                class: "highcharts-text-outline",
                                fill: i,
                                stroke: i,
                                "stroke-width": s,
                                "stroke-linejoin": "round"
                            }),
                            [].forEach.call(o.childNodes, (function(i) {
                                var o = i.cloneNode(!0);
                                o.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach((function(i) {
                                    return o.removeAttribute(i)
                                }
                                )),
                                C.appendChild(o)
                            }
                            ));
                            var S = D.createElementNS(X, "tspan");
                            S.textContent = "â€‹",
                            ["x", "y"].forEach((function(i) {
                                var s = o.getAttribute(i);
                                s && S.setAttribute(i, s)
                            }
                            )),
                            C.appendChild(S),
                            o.insertBefore(C, o.firstChild)
                        }
                    }
                    ,
                    a.prototype.attr = function(i, o, s, p) {
                        var C, S, M, T = this.element, O = this.symbolCustomAttribs, D = this;
                        if ("string" == typeof i && void 0 !== o) {
                            var j = i;
                            (i = {})[j] = o
                        }
                        return "string" == typeof i ? D = (this[i + "Getter"] || this._defaultGetter).call(this, i, T) : (nt(i, (function(o, s) {
                            S = !1,
                            p || P(this, s),
                            this.symbolName && -1 !== O.indexOf(s) && (C || (this.symbolAttr(i),
                            C = !0),
                            S = !0),
                            !this.rotation || "x" !== s && "y" !== s || (this.doTransform = !0),
                            S || ((M = this[s + "Setter"] || this._defaultSetter).call(this, o, s, T),
                            !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(s) && this.updateShadows(s, o, M))
                        }
                        ), this),
                        this.afterSetters()),
                        s && s.call(this),
                        D
                    }
                    ,
                    a.prototype.clip = function(i) {
                        return this.attr("clip-path", i ? "url(" + this.renderer.url + "#" + i.id + ")" : "none")
                    }
                    ,
                    a.prototype.crisp = function(i, o) {
                        o = o || i.strokeWidth || 0;
                        var s = Math.round(o) % 2 / 2;
                        return i.x = Math.floor(i.x || this.x || 0) + s,
                        i.y = Math.floor(i.y || this.y || 0) + s,
                        i.width = Math.floor((i.width || this.width || 0) - 2 * s),
                        i.height = Math.floor((i.height || this.height || 0) - 2 * s),
                        Z(i.strokeWidth) && (i.strokeWidth = o),
                        i
                    }
                    ,
                    a.prototype.complexColor = function(i, o, p) {
                        var C, S, M, T, P, O, D, j, R, X, Y, _ = this.renderer, F = [];
                        tt(this.renderer, "complexColor", {
                            args: arguments
                        }, (function() {
                            if (i.radialGradient ? S = "radialGradient" : i.linearGradient && (S = "linearGradient"),
                            S) {
                                if (M = i[S],
                                P = _.gradients,
                                O = i.stops,
                                R = p.radialReference,
                                et(M) && (i[S] = M = {
                                    x1: M[0],
                                    y1: M[1],
                                    x2: M[2],
                                    y2: M[3],
                                    gradientUnits: "userSpaceOnUse"
                                }),
                                "radialGradient" === S && R && !Z(M.gradientUnits) && (T = M,
                                M = rt(M, _.getRadialAttr(R, T), {
                                    gradientUnits: "userSpaceOnUse"
                                })),
                                nt(M, (function(i, o) {
                                    "id" !== o && F.push(o, i)
                                }
                                )),
                                nt(O, (function(i) {
                                    F.push(i)
                                }
                                )),
                                F = F.join(","),
                                P[F])
                                    X = P[F].attr("id");
                                else {
                                    M.id = X = ct();
                                    var U = P[F] = _.createElement(S).attr(M).add(_.defs);
                                    U.radAttr = T,
                                    U.stops = [],
                                    O.forEach((function(i) {
                                        0 === i[1].indexOf("rgba") ? (C = s.parse(i[1]),
                                        D = C.get("rgb"),
                                        j = C.get("a")) : (D = i[1],
                                        j = 1),
                                        i = _.createElement("stop").attr({
                                            offset: i[0],
                                            "stop-color": D,
                                            "stop-opacity": j
                                        }).add(U),
                                        U.stops.push(i)
                                    }
                                    ))
                                }
                                Y = "url(" + _.url + "#" + X + ")",
                                p.setAttribute(o, Y),
                                p.gradient = F,
                                i.toString = function() {
                                    return Y
                                }
                            }
                        }
                        ))
                    }
                    ,
                    a.prototype.css = function(i) {
                        var o = this.styles
                          , s = {}
                          , p = this.element
                          , C = ["textOutline", "textOverflow", "width"]
                          , S = ""
                          , M = !o;
                        if (i && i.color && (i.fill = i.color),
                        o && nt(i, (function(i, p) {
                            o && o[p] !== i && (s[p] = i,
                            M = !0)
                        }
                        )),
                        M) {
                            if (o && (i = Q(o, s)),
                            i)
                                if (null === i.width || "auto" === i.width)
                                    delete this.textWidth;
                                else if ("text" === p.nodeName.toLowerCase() && i.width)
                                    var T = this.textWidth = ht(i.width);
                            if (this.styles = i,
                            T && !R && this.renderer.forExport && delete i.width,
                            p.namespaceURI === this.SVG_NS) {
                                var l = function(i, o) {
                                    return "-" + o.toLowerCase()
                                };
                                nt(i, (function(i, o) {
                                    -1 === C.indexOf(o) && (S += o.replace(/([A-Z])/g, l) + ":" + i + ";")
                                }
                                )),
                                S && F(p, "style", S)
                            } else
                                V(p, i);
                            this.added && ("text" === this.element.nodeName && this.renderer.buildText(this),
                            i && i.textOutline && this.applyTextOutline(i.textOutline))
                        }
                        return this
                    }
                    ,
                    a.prototype.dashstyleSetter = function(i) {
                        var o = this["stroke-width"];
                        if ("inherit" === o && (o = 1),
                        i = i && i.toLowerCase()) {
                            var s = i.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                            for (i = s.length; i--; )
                                s[i] = "" + ht(s[i]) * at(o, NaN);
                            i = s.join(",").replace(/NaN/g, "none"),
                            this.element.setAttribute("stroke-dasharray", i)
                        }
                    }
                    ,
                    a.prototype.destroy = function() {
                        var i = this
                          , o = i.element || {}
                          , s = i.renderer
                          , p = o.ownerSVGElement
                          , C = s.isSVG && "SPAN" === o.nodeName && i.parentGroup || void 0;
                        if (o.onclick = o.onmouseout = o.onmouseover = o.onmousemove = o.point = null,
                        P(i),
                        i.clipPath && p) {
                            var S = i.clipPath;
                            [].forEach.call(p.querySelectorAll("[clip-path],[CLIP-PATH]"), (function(i) {
                                -1 < i.getAttribute("clip-path").indexOf(S.element.id) && i.removeAttribute("clip-path")
                            }
                            )),
                            i.clipPath = S.destroy()
                        }
                        if (i.stops) {
                            for (p = 0; p < i.stops.length; p++)
                                i.stops[p].destroy();
                            i.stops.length = 0,
                            i.stops = void 0
                        }
                        for (i.safeRemoveChild(o),
                        s.styledMode || i.destroyShadows(); C && C.div && 0 === C.div.childNodes.length; )
                            o = C.parentGroup,
                            i.safeRemoveChild(C.div),
                            delete C.div,
                            C = o;
                        i.alignTo && $(s.alignedObjects, i),
                        nt(i, (function(o, s) {
                            i[s] && i[s].parentGroup === i && i[s].destroy && i[s].destroy(),
                            delete i[s]
                        }
                        ))
                    }
                    ,
                    a.prototype.destroyShadows = function() {
                        (this.shadows || []).forEach((function(i) {
                            this.safeRemoveChild(i)
                        }
                        ), this),
                        this.shadows = void 0
                    }
                    ,
                    a.prototype.destroyTextPath = function(i, o) {
                        var s = i.getElementsByTagName("text")[0];
                        if (s) {
                            if (s.removeAttribute("dx"),
                            s.removeAttribute("dy"),
                            o.element.setAttribute("id", ""),
                            this.textPathWrapper && s.getElementsByTagName("textPath").length) {
                                for (i = this.textPathWrapper.element.childNodes; i.length; )
                                    s.appendChild(i[0]);
                                s.removeChild(this.textPathWrapper.element)
                            }
                        } else
                            (i.getAttribute("dx") || i.getAttribute("dy")) && (i.removeAttribute("dx"),
                            i.removeAttribute("dy"));
                        this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy())
                    }
                    ,
                    a.prototype.dSetter = function(i, o, s) {
                        et(i) && ("string" == typeof i[0] && (i = this.renderer.pathToSegments(i)),
                        this.pathArray = i,
                        i = i.reduce((function(i, o, s) {
                            return o && o.join ? (s ? i + " " : "") + o.join(" ") : (o || "").toString()
                        }
                        ), "")),
                        /(NaN| {2}|^$)/.test(i) && (i = "M 0 0"),
                        this[o] !== i && (s.setAttribute(o, i),
                        this[o] = i)
                    }
                    ,
                    a.prototype.fadeOut = function(i) {
                        var o = this;
                        o.animate({
                            opacity: 0
                        }, {
                            duration: at(i, 150),
                            complete: function() {
                                o.attr({
                                    y: -9999
                                }).hide()
                            }
                        })
                    }
                    ,
                    a.prototype.fillSetter = function(i, o, s) {
                        "string" == typeof i ? s.setAttribute(o, i) : i && this.complexColor(i, o, s)
                    }
                    ,
                    a.prototype.getBBox = function(i, o) {
                        var s = this.renderer
                          , p = this.element
                          , C = this.styles
                          , S = this.textStr
                          , M = s.cache
                          , T = s.cacheKeys
                          , P = p.namespaceURI === this.SVG_NS;
                        o = at(o, this.rotation, 0);
                        var D, j = s.styledMode ? p && a.prototype.getStyle.call(p, "font-size") : C && C.fontSize;
                        if (Z(S)) {
                            var R = S.toString();
                            -1 === R.indexOf("<") && (R = R.replace(/[0-9]/g, "0")),
                            R += ["", o, j, this.textWidth, C && C.textOverflow, C && C.fontWeight].join()
                        }
                        if (R && !i && (D = M[R]),
                        !D) {
                            if (P || s.forExport) {
                                try {
                                    var X = this.fakeTS && function(i) {
                                        var o = p.querySelector(".highcharts-text-outline");
                                        o && V(o, {
                                            display: i
                                        })
                                    }
                                    ;
                                    it(X) && X("none"),
                                    D = p.getBBox ? Q({}, p.getBBox()) : {
                                        width: p.offsetWidth,
                                        height: p.offsetHeight
                                    },
                                    it(X) && X("")
                                } catch (Y) {}
                                (!D || 0 > D.width) && (D = {
                                    width: 0,
                                    height: 0
                                })
                            } else
                                D = this.htmlGetBBox();
                            if (s.isSVG && (i = D.width,
                            s = D.height,
                            P && (D.height = s = {
                                "11px,17": 14,
                                "13px,20": 16
                            }[C && C.fontSize + "," + Math.round(s)] || s),
                            o && (C = o * O,
                            D.width = Math.abs(s * Math.sin(C)) + Math.abs(i * Math.cos(C)),
                            D.height = Math.abs(s * Math.cos(C)) + Math.abs(i * Math.sin(C)))),
                            R && 0 < D.height) {
                                for (; 250 < T.length; )
                                    delete M[T.shift()];
                                M[R] || T.push(R),
                                M[R] = D
                            }
                        }
                        return D
                    }
                    ,
                    a.prototype.getStyle = function(i) {
                        return Y.getComputedStyle(this.element || this, "").getPropertyValue(i)
                    }
                    ,
                    a.prototype.hasClass = function(i) {
                        return -1 !== ("" + this.attr("class")).split(" ").indexOf(i)
                    }
                    ,
                    a.prototype.hide = function(i) {
                        return i ? this.attr({
                            y: -9999
                        }) : this.attr({
                            visibility: "hidden"
                        }),
                        this
                    }
                    ,
                    a.prototype.htmlGetBBox = function() {
                        return {
                            height: 0,
                            width: 0,
                            x: 0,
                            y: 0
                        }
                    }
                    ,
                    a.prototype.init = function(i, o) {
                        this.element = "span" === o ? U(o) : D.createElementNS(this.SVG_NS, o),
                        this.renderer = i,
                        tt(this, "afterInit")
                    }
                    ,
                    a.prototype.invert = function(i) {
                        return this.inverted = i,
                        this.updateTransform(),
                        this
                    }
                    ,
                    a.prototype.on = function(i, o) {
                        var s = this.onEvents;
                        return s[i] && s[i](),
                        s[i] = _(this.element, i, o),
                        this
                    }
                    ,
                    a.prototype.opacitySetter = function(i, o, s) {
                        this.opacity = i = Number(Number(i).toFixed(3)),
                        s.setAttribute(o, i)
                    }
                    ,
                    a.prototype.removeClass = function(i) {
                        return this.attr("class", ("" + this.attr("class")).replace(st(i) ? new RegExp("(^| )" + i + "( |$)") : i, " ").replace(/ +/g, " ").trim())
                    }
                    ,
                    a.prototype.removeTextOutline = function() {
                        var i = this.element.querySelector("tspan.highcharts-text-outline");
                        i && this.safeRemoveChild(i)
                    }
                    ,
                    a.prototype.safeRemoveChild = function(i) {
                        var o = i.parentNode;
                        o && o.removeChild(i)
                    }
                    ,
                    a.prototype.setRadialReference = function(i) {
                        var o = this.element.gradient && this.renderer.gradients[this.element.gradient];
                        return this.element.radialReference = i,
                        o && o.radAttr && o.animate(this.renderer.getRadialAttr(i, o.radAttr)),
                        this
                    }
                    ,
                    a.prototype.setTextPath = function(i, s) {
                        var p = this.element
                          , C = this.text ? this.text.element : p
                          , S = {
                            textAnchor: "text-anchor"
                        }
                          , M = !1
                          , T = this.textPathWrapper
                          , P = !T;
                        s = rt(!0, {
                            enabled: !0,
                            attributes: {
                                dy: -5,
                                startOffset: "50%",
                                textAnchor: "middle"
                            }
                        }, s);
                        var O = o.filterUserAttributes(s.attributes);
                        if (i && s && s.enabled) {
                            T && null === T.element.parentNode ? (P = !0,
                            T = T.destroy()) : T && this.removeTextOutline.call(T.parentGroup),
                            this.options && this.options.padding && (O.dx = -this.options.padding),
                            T || (this.textPathWrapper = T = this.renderer.createElement("textPath"),
                            M = !0);
                            var D = T.element;
                            if ((s = i.element.getAttribute("id")) || i.element.setAttribute("id", s = ct()),
                            P)
                                for (C.setAttribute("y", 0),
                                ot(O.dx) && C.setAttribute("x", -O.dx),
                                i = [].slice.call(C.childNodes),
                                P = 0; P < i.length; P++) {
                                    var R = i[P];
                                    R.nodeType !== Node.TEXT_NODE && "tspan" !== R.nodeName || D.appendChild(R)
                                }
                            M && T && T.add({
                                element: C
                            }),
                            D.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + s),
                            Z(O.dy) && (D.parentNode.setAttribute("dy", O.dy),
                            delete O.dy),
                            Z(O.dx) && (D.parentNode.setAttribute("dx", O.dx),
                            delete O.dx),
                            nt(O, (function(i, o) {
                                D.setAttribute(S[o] || o, i)
                            }
                            )),
                            p.removeAttribute("transform"),
                            this.removeTextOutline.call(T),
                            this.text && !this.renderer.styledMode && this.attr({
                                fill: "none",
                                "stroke-width": 0
                            }),
                            this.applyTextOutline = this.updateTransform = j
                        } else
                            T && (delete this.updateTransform,
                            delete this.applyTextOutline,
                            this.destroyTextPath(p, i),
                            this.updateTransform(),
                            this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));
                        return this
                    }
                    ,
                    a.prototype.shadow = function(i, o, s) {
                        var p, S = [], M = this.element, T = this.oldShadowOptions, P = {
                            color: C.neutralColor100,
                            offsetX: this.parentInverted ? -1 : 1,
                            offsetY: this.parentInverted ? -1 : 1,
                            opacity: .15,
                            width: 3
                        }, O = !1;
                        if (!0 === i ? p = P : "object" == typeof i && (p = Q(P, i)),
                        p && (p && T && nt(p, (function(i, o) {
                            i !== T[o] && (O = !0)
                        }
                        )),
                        O && this.destroyShadows(),
                        this.oldShadowOptions = p),
                        p) {
                            if (!this.shadows) {
                                var D = p.opacity / p.width
                                  , j = this.parentInverted ? "translate(" + p.offsetY + ", " + p.offsetX + ")" : "translate(" + p.offsetX + ", " + p.offsetY + ")";
                                for (P = 1; P <= p.width; P++) {
                                    var R = M.cloneNode(!1)
                                      , X = 2 * p.width + 1 - 2 * P;
                                    F(R, {
                                        stroke: i.color || C.neutralColor100,
                                        "stroke-opacity": D * P,
                                        "stroke-width": X,
                                        transform: j,
                                        fill: "none"
                                    }),
                                    R.setAttribute("class", (R.getAttribute("class") || "") + " highcharts-shadow"),
                                    s && (F(R, "height", Math.max(F(R, "height") - X, 0)),
                                    R.cutHeight = X),
                                    o ? o.element.appendChild(R) : M.parentNode && M.parentNode.insertBefore(R, M),
                                    S.push(R)
                                }
                                this.shadows = S
                            }
                        } else
                            this.destroyShadows();
                        return this
                    }
                    ,
                    a.prototype.show = function(i) {
                        return this.attr({
                            visibility: i ? "inherit" : "visible"
                        })
                    }
                    ,
                    a.prototype.strokeSetter = function(i, o, s) {
                        this[o] = i,
                        this.stroke && this["stroke-width"] ? (a.prototype.fillSetter.call(this, this.stroke, "stroke", s),
                        s.setAttribute("stroke-width", this["stroke-width"]),
                        this.hasStroke = !0) : "stroke-width" === o && 0 === i && this.hasStroke ? (s.removeAttribute("stroke"),
                        this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (s.setAttribute("stroke-width", this["stroke-width"]),
                        this.hasStroke = !0)
                    }
                    ,
                    a.prototype.strokeWidth = function() {
                        if (!this.renderer.styledMode)
                            return this["stroke-width"] || 0;
                        var i = this.getStyle("stroke-width")
                          , o = 0;
                        if (i.indexOf("px") === i.length - 2)
                            o = ht(i);
                        else if ("" !== i) {
                            var s = D.createElementNS(X, "rect");
                            F(s, {
                                width: i,
                                "stroke-width": 0
                            }),
                            this.element.parentNode.appendChild(s),
                            o = s.getBBox().width,
                            s.parentNode.removeChild(s)
                        }
                        return o
                    }
                    ,
                    a.prototype.symbolAttr = function(i) {
                        var o = this;
                        "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach((function(s) {
                            o[s] = at(i[s], o[s])
                        }
                        )),
                        o.attr({
                            d: o.renderer.symbols[o.symbolName](o.x, o.y, o.width, o.height, o)
                        })
                    }
                    ,
                    a.prototype.textSetter = function(i) {
                        i !== this.textStr && (delete this.textPxLength,
                        this.textStr = i,
                        this.added && this.renderer.buildText(this))
                    }
                    ,
                    a.prototype.titleSetter = function(i) {
                        var o = this.element
                          , s = o.getElementsByTagName("title")[0] || D.createElementNS(this.SVG_NS, "title");
                        o.insertBefore ? o.insertBefore(s, o.firstChild) : o.appendChild(s),
                        s.textContent = String(at(i, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                    }
                    ,
                    a.prototype.toFront = function() {
                        var i = this.element;
                        return i.parentNode.appendChild(i),
                        this
                    }
                    ,
                    a.prototype.translate = function(i, o) {
                        return this.attr({
                            translateX: i,
                            translateY: o
                        })
                    }
                    ,
                    a.prototype.updateShadows = function(i, o, s) {
                        var p = this.shadows;
                        if (p)
                            for (var C = p.length; C--; )
                                s.call(p[C], "height" === i ? Math.max(o - (p[C].cutHeight || 0), 0) : "d" === i ? this.d : o, i, p[C])
                    }
                    ,
                    a.prototype.updateTransform = function() {
                        var i = this.scaleX
                          , o = this.scaleY
                          , s = this.inverted
                          , p = this.rotation
                          , C = this.matrix
                          , S = this.element
                          , M = this.translateX || 0
                          , T = this.translateY || 0;
                        s && (M += this.width,
                        T += this.height),
                        M = ["translate(" + M + "," + T + ")"],
                        Z(C) && M.push("matrix(" + C.join(",") + ")"),
                        s ? M.push("rotate(90) scale(-1,1)") : p && M.push("rotate(" + p + " " + at(this.rotationOriginX, S.getAttribute("x"), 0) + " " + at(this.rotationOriginY, S.getAttribute("y") || 0) + ")"),
                        (Z(i) || Z(o)) && M.push("scale(" + at(i, 1) + " " + at(o, 1) + ")"),
                        M.length && S.setAttribute("transform", M.join(" "))
                    }
                    ,
                    a.prototype.visibilitySetter = function(i, o, s) {
                        "inherit" === i ? s.removeAttribute(o) : this[o] !== i && s.setAttribute(o, i),
                        this[o] = i
                    }
                    ,
                    a.prototype.xGetter = function(i) {
                        return "circle" === this.element.nodeName && ("x" === i ? i = "cx" : "y" === i && (i = "cy")),
                        this._defaultGetter(i)
                    }
                    ,
                    a.prototype.zIndexSetter = function(i, o) {
                        var s = this.renderer
                          , p = this.parentGroup
                          , C = (p || s).element || s.box
                          , S = this.element;
                        s = C === s.box;
                        var M, T = !1, P = this.added;
                        if (Z(i) ? (S.setAttribute("data-z-index", i),
                        i = +i,
                        this[o] === i && (P = !1)) : Z(this[o]) && S.removeAttribute("data-z-index"),
                        this[o] = i,
                        P) {
                            for ((i = this.zIndex) && p && (p.handleZ = !0),
                            M = (o = C.childNodes).length - 1; 0 <= M && !T; M--) {
                                P = (p = o[M]).getAttribute("data-z-index");
                                var O = !Z(P);
                                p !== S && (0 > i && O && !s && !M ? (C.insertBefore(S, o[M]),
                                T = !0) : (ht(P) <= i || O && (!Z(i) || 0 <= i)) && (C.insertBefore(S, o[M + 1] || null),
                                T = !0))
                            }
                            T || (C.insertBefore(S, o[s ? 3 : 0] || null),
                            T = !0)
                        }
                        return T
                    }
                    ,
                    a
                }(),
                i.prototype["stroke-widthSetter"] = i.prototype.strokeSetter,
                i.prototype.yGetter = i.prototype.xGetter,
                i.prototype.matrixSetter = i.prototype.rotationOriginXSetter = i.prototype.rotationOriginYSetter = i.prototype.rotationSetter = i.prototype.scaleXSetter = i.prototype.scaleYSetter = i.prototype.translateXSetter = i.prototype.translateYSetter = i.prototype.verticalAlignSetter = function(i, o) {
                    this[o] = i,
                    this.doTransform = !0
                }
                ,
                i
            }
            )),
            L(o, "Core/Renderer/RendererRegistry.js", [o["Core/Globals.js"]], (function(i) {
                var o;
                return function(o) {
                    var s;
                    o.rendererTypes = {},
                    o.getRendererType = function(i) {
                        return void 0 === i && (i = s),
                        o.rendererTypes[i] || o.rendererTypes[s]
                    }
                    ,
                    o.registerRendererType = function(p, C, S) {
                        o.rendererTypes[p] = C,
                        s && !S || (s = p,
                        i.Renderer = C)
                    }
                }(o || (o = {})),
                o
            }
            )),
            L(o, "Core/Renderer/SVG/SVGLabel.js", [o["Core/Renderer/SVG/SVGElement.js"], o["Core/Utilities.js"]], (function(i, o) {
                var s = this && this.__extends || function() {
                    var a = function(i, o) {
                        return a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        ,
                        a(i, o)
                    };
                    return function(i, o) {
                        function e() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype,
                        new e)
                    }
                }()
                  , p = o.defined
                  , C = o.extend
                  , S = o.isNumber
                  , M = o.merge
                  , T = o.pick
                  , P = o.removeEvent;
                return function(o) {
                    function f(i, s, p, C, S, M, T, P, O, D) {
                        var j, R = o.call(this) || this;
                        return R.paddingLeftSetter = R.paddingSetter,
                        R.paddingRightSetter = R.paddingSetter,
                        R.init(i, "g"),
                        R.textStr = s,
                        R.x = p,
                        R.y = C,
                        R.anchorX = M,
                        R.anchorY = T,
                        R.baseline = O,
                        R.className = D,
                        R.addClass("button" === D ? "highcharts-no-tooltip" : "highcharts-label"),
                        D && R.addClass("highcharts-" + D),
                        R.text = i.text("", 0, 0, P).attr({
                            zIndex: 1
                        }),
                        "string" == typeof S && ((j = /^url\((.*?)\)$/.test(S)) || R.renderer.symbols[S]) && (R.symbolKey = S),
                        R.bBox = f.emptyBBox,
                        R.padding = 3,
                        R.baselineOffset = 0,
                        R.needsBox = i.styledMode || j,
                        R.deferredAttr = {},
                        R.alignFactor = 0,
                        R
                    }
                    return s(f, o),
                    f.prototype.alignSetter = function(i) {
                        (i = {
                            left: 0,
                            center: .5,
                            right: 1
                        }[i]) !== this.alignFactor && (this.alignFactor = i,
                        this.bBox && S(this.xSetting) && this.attr({
                            x: this.xSetting
                        }))
                    }
                    ,
                    f.prototype.anchorXSetter = function(i, o) {
                        this.anchorX = i,
                        this.boxAttr(o, Math.round(i) - this.getCrispAdjust() - this.xSetting)
                    }
                    ,
                    f.prototype.anchorYSetter = function(i, o) {
                        this.anchorY = i,
                        this.boxAttr(o, i - this.ySetting)
                    }
                    ,
                    f.prototype.boxAttr = function(i, o) {
                        this.box ? this.box.attr(i, o) : this.deferredAttr[i] = o
                    }
                    ,
                    f.prototype.css = function(o) {
                        if (o) {
                            var s = {};
                            o = M(o),
                            f.textProps.forEach((function(i) {
                                void 0 !== o[i] && (s[i] = o[i],
                                delete o[i])
                            }
                            )),
                            this.text.css(s);
                            var p = "width"in s;
                            "fontSize"in s || "fontWeight"in s ? this.updateTextPadding() : p && this.updateBoxSize()
                        }
                        return i.prototype.css.call(this, o)
                    }
                    ,
                    f.prototype.destroy = function() {
                        P(this.element, "mouseenter"),
                        P(this.element, "mouseleave"),
                        this.text && this.text.destroy(),
                        this.box && (this.box = this.box.destroy()),
                        i.prototype.destroy.call(this)
                    }
                    ,
                    f.prototype.fillSetter = function(i, o) {
                        i && (this.needsBox = !0),
                        this.fill = i,
                        this.boxAttr(o, i)
                    }
                    ,
                    f.prototype.getBBox = function() {
                        this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
                        var i = this.padding
                          , o = T(this.paddingLeft, i);
                        return {
                            width: this.width,
                            height: this.height,
                            x: this.bBox.x - o,
                            y: this.bBox.y - i
                        }
                    }
                    ,
                    f.prototype.getCrispAdjust = function() {
                        return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
                    }
                    ,
                    f.prototype.heightSetter = function(i) {
                        this.heightSetting = i
                    }
                    ,
                    f.prototype.on = function(o, s) {
                        var p = this
                          , C = p.text
                          , S = C && "SPAN" === C.element.tagName ? C : void 0;
                        if (S) {
                            var n = function(i) {
                                ("mouseenter" === o || "mouseleave" === o) && i.relatedTarget instanceof Element && (p.element.compareDocumentPosition(i.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY || S.element.compareDocumentPosition(i.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY) || s.call(p.element, i)
                            };
                            S.on(o, n)
                        }
                        return i.prototype.on.call(p, o, n || s),
                        p
                    }
                    ,
                    f.prototype.onAdd = function() {
                        var i = this.textStr;
                        this.text.add(this),
                        this.attr({
                            text: p(i) ? i : "",
                            x: this.x,
                            y: this.y
                        }),
                        this.box && p(this.anchorX) && this.attr({
                            anchorX: this.anchorX,
                            anchorY: this.anchorY
                        })
                    }
                    ,
                    f.prototype.paddingSetter = function(i, o) {
                        S(i) ? i !== this[o] && (this[o] = i,
                        this.updateTextPadding()) : this[o] = void 0
                    }
                    ,
                    f.prototype.rSetter = function(i, o) {
                        this.boxAttr(o, i)
                    }
                    ,
                    f.prototype.shadow = function(i) {
                        return i && !this.renderer.styledMode && (this.updateBoxSize(),
                        this.box && this.box.shadow(i)),
                        this
                    }
                    ,
                    f.prototype.strokeSetter = function(i, o) {
                        this.stroke = i,
                        this.boxAttr(o, i)
                    }
                    ,
                    f.prototype["stroke-widthSetter"] = function(i, o) {
                        i && (this.needsBox = !0),
                        this["stroke-width"] = i,
                        this.boxAttr(o, i)
                    }
                    ,
                    f.prototype["text-alignSetter"] = function(i) {
                        this.textAlign = i
                    }
                    ,
                    f.prototype.textSetter = function(i) {
                        void 0 !== i && this.text.attr({
                            text: i
                        }),
                        this.updateTextPadding()
                    }
                    ,
                    f.prototype.updateBoxSize = function() {
                        var i = this.text.element.style
                          , o = {}
                          , s = this.padding
                          , M = this.bBox = S(this.widthSetting) && S(this.heightSetting) && !this.textAlign || !p(this.text.textStr) ? f.emptyBBox : this.text.getBBox();
                        this.width = this.getPaddedWidth(),
                        this.height = (this.heightSetting || M.height || 0) + 2 * s,
                        i = this.renderer.fontMetrics(i && i.fontSize, this.text),
                        this.baselineOffset = s + Math.min((this.text.firstLineMetrics || i).b, M.height || 1 / 0),
                        this.heightSetting && (this.baselineOffset += (this.heightSetting - i.h) / 2),
                        this.needsBox && (this.box || ((s = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect()).addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")),
                        s.add(this)),
                        s = this.getCrispAdjust(),
                        o.x = s,
                        o.y = (this.baseline ? -this.baselineOffset : 0) + s,
                        o.width = Math.round(this.width),
                        o.height = Math.round(this.height),
                        this.box.attr(C(o, this.deferredAttr)),
                        this.deferredAttr = {})
                    }
                    ,
                    f.prototype.updateTextPadding = function() {
                        var i = this.text;
                        this.updateBoxSize();
                        var o = this.baseline ? 0 : this.baselineOffset
                          , s = T(this.paddingLeft, this.padding);
                        p(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (s += {
                            center: .5,
                            right: 1
                        }[this.textAlign] * (this.widthSetting - this.bBox.width)),
                        s === i.x && o === i.y || (i.attr("x", s),
                        i.hasBoxWidthChanged && (this.bBox = i.getBBox(!0)),
                        void 0 !== o && i.attr("y", o)),
                        i.x = s,
                        i.y = o
                    }
                    ,
                    f.prototype.widthSetter = function(i) {
                        this.widthSetting = S(i) ? i : void 0
                    }
                    ,
                    f.prototype.getPaddedWidth = function() {
                        var i = this.padding
                          , o = T(this.paddingLeft, i);
                        return i = T(this.paddingRight, i),
                        (this.widthSetting || this.bBox.width || 0) + o + i
                    }
                    ,
                    f.prototype.xSetter = function(i) {
                        this.x = i,
                        this.alignFactor && (i -= this.alignFactor * this.getPaddedWidth(),
                        this["forceAnimate:x"] = !0),
                        this.xSetting = Math.round(i),
                        this.attr("translateX", this.xSetting)
                    }
                    ,
                    f.prototype.ySetter = function(i) {
                        this.ySetting = this.y = Math.round(i),
                        this.attr("translateY", this.ySetting)
                    }
                    ,
                    f.emptyBBox = {
                        width: 0,
                        height: 0,
                        x: 0,
                        y: 0
                    },
                    f.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" "),
                    f
                }(i)
            }
            )),
            L(o, "Core/Renderer/SVG/Symbols.js", [o["Core/Utilities.js"]], (function(i) {
                function v(i, s, C, S, M) {
                    var T = [];
                    if (M) {
                        var P = M.start || 0
                          , O = p(M.r, C);
                        C = p(M.r, S || C);
                        var D = (M.end || 0) - .001;
                        S = M.innerR;
                        var j = p(M.open, .001 > Math.abs((M.end || 0) - P - 2 * Math.PI))
                          , R = Math.cos(P)
                          , X = Math.sin(P)
                          , Y = Math.cos(D)
                          , _ = Math.sin(D);
                        P = p(M.longArc, .001 > D - P - Math.PI ? 0 : 1),
                        T.push(["M", i + O * R, s + C * X], ["A", O, C, 0, P, p(M.clockwise, 1), i + O * Y, s + C * _]),
                        o(S) && T.push(j ? ["M", i + S * Y, s + S * _] : ["L", i + S * Y, s + S * _], ["A", S, S, 0, P, o(M.clockwise) ? 1 - M.clockwise : 0, i + S * R, s + S * X]),
                        j || T.push(["Z"])
                    }
                    return T
                }
                function E(i, o, s, p, C) {
                    return C && C.r ? H(i, o, s, p, C) : [["M", i, o], ["L", i + s, o], ["L", i + s, o + p], ["L", i, o + p], ["Z"]]
                }
                function H(i, o, s, p, C) {
                    return [["M", i + (C = C && C.r || 0), o], ["L", i + s - C, o], ["C", i + s, o, i + s, o, i + s, o + C], ["L", i + s, o + p - C], ["C", i + s, o + p, i + s, o + p, i + s - C, o + p], ["L", i + C, o + p], ["C", i, o + p, i, o + p, i, o + p - C], ["L", i, o + C], ["C", i, o, i, o, i + C, o]]
                }
                var o = i.defined
                  , s = i.isNumber
                  , p = i.pick;
                return {
                    arc: v,
                    callout: function(i, o, p, C, S) {
                        var M = Math.min(S && S.r || 0, p, C)
                          , T = M + 6
                          , P = S && S.anchorX;
                        S = S && S.anchorY || 0;
                        var O = H(i, o, p, C, {
                            r: M
                        });
                        return s(P) ? (i + P >= p ? S > o + T && S < o + C - T ? O.splice(3, 1, ["L", i + p, S - 6], ["L", i + p + 6, S], ["L", i + p, S + 6], ["L", i + p, o + C - M]) : O.splice(3, 1, ["L", i + p, C / 2], ["L", P, S], ["L", i + p, C / 2], ["L", i + p, o + C - M]) : 0 >= i + P ? S > o + T && S < o + C - T ? O.splice(7, 1, ["L", i, S + 6], ["L", i - 6, S], ["L", i, S - 6], ["L", i, o + M]) : O.splice(7, 1, ["L", i, C / 2], ["L", P, S], ["L", i, C / 2], ["L", i, o + M]) : S && S > C && P > i + T && P < i + p - T ? O.splice(5, 1, ["L", P + 6, o + C], ["L", P, o + C + 6], ["L", P - 6, o + C], ["L", i + M, o + C]) : S && 0 > S && P > i + T && P < i + p - T && O.splice(1, 1, ["L", P - 6, o], ["L", P, o - 6], ["L", P + 6, o], ["L", p - M, o]),
                        O) : O
                    },
                    circle: function(i, o, s, p) {
                        return v(i + s / 2, o + p / 2, s / 2, p / 2, {
                            start: .5 * Math.PI,
                            end: 2.5 * Math.PI,
                            open: !1
                        })
                    },
                    diamond: function(i, o, s, p) {
                        return [["M", i + s / 2, o], ["L", i + s, o + p / 2], ["L", i + s / 2, o + p], ["L", i, o + p / 2], ["Z"]]
                    },
                    rect: E,
                    roundedRect: H,
                    square: E,
                    triangle: function(i, o, s, p) {
                        return [["M", i + s / 2, o], ["L", i + s, o + p], ["L", i, o + p], ["Z"]]
                    },
                    "triangle-down": function(i, o, s, p) {
                        return [["M", i, o], ["L", i + s, o], ["L", i + s / 2, o + p], ["Z"]]
                    }
                }
            }
            )),
            L(o, "Core/Renderer/SVG/TextBuilder.js", [o["Core/Renderer/HTML/AST.js"], o["Core/Globals.js"], o["Core/Utilities.js"]], (function(i, o, s) {
                var p = o.doc
                  , C = o.SVG_NS
                  , S = s.attr
                  , M = s.isString
                  , T = s.objectEach
                  , P = s.pick;
                return function() {
                    function h(i) {
                        var o = i.styles;
                        this.renderer = i.renderer,
                        this.svgElement = i,
                        this.width = i.textWidth,
                        this.textLineHeight = o && o.lineHeight,
                        this.textOutline = o && o.textOutline,
                        this.ellipsis = !(!o || "ellipsis" !== o.textOverflow),
                        this.noWrap = !(!o || "nowrap" !== o.whiteSpace),
                        this.fontSize = o && o.fontSize
                    }
                    return h.prototype.buildSVG = function() {
                        var o = this.svgElement
                          , s = o.element
                          , C = o.renderer
                          , S = P(o.textStr, "").toString()
                          , T = -1 !== S.indexOf("<")
                          , O = s.childNodes
                          , D = O.length;
                        C = this.width && !o.added && C.box;
                        var j = [S, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join();
                        if (j !== o.textCache) {
                            for (o.textCache = j,
                            delete o.actualWidth; D--; )
                                s.removeChild(O[D]);
                            T || this.ellipsis || this.width || -1 !== S.indexOf(" ") && (!this.noWrap || /<br.*?>/g.test(S)) ? "" !== S && (C && C.appendChild(s),
                            S = new i(S),
                            this.modifyTree(S.nodes),
                            S.addToDOM(o.element),
                            this.modifyDOM(),
                            this.ellipsis && -1 !== (s.textContent || "").indexOf("â€¦") && o.attr("title", this.unescapeEntities(o.textStr || "", ["&lt;", "&gt;"])),
                            C && C.removeChild(s)) : s.appendChild(p.createTextNode(this.unescapeEntities(S))),
                            M(this.textOutline) && o.applyTextOutline && o.applyTextOutline(this.textOutline)
                        }
                    }
                    ,
                    h.prototype.modifyDOM = function() {
                        var i = this
                          , o = this.svgElement
                          , s = S(o.element, "x");
                        o.firstLineMetrics = void 0,
                        [].forEach.call(o.element.querySelectorAll("tspan.highcharts-br"), (function(p, C) {
                            p.nextSibling && p.previousSibling && (0 === C && 1 === p.previousSibling.nodeType && (o.firstLineMetrics = o.renderer.fontMetrics(void 0, p.previousSibling)),
                            S(p, {
                                dy: i.getLineHeight(p.nextSibling),
                                x: s
                            }))
                        }
                        ));
                        var M = this.width || 0;
                        if (M) {
                            var m = function(T, P) {
                                var O = T.textContent || ""
                                  , D = O.replace(/([^\^])-/g, "$1- ").split(" ")
                                  , j = !i.noWrap && (1 < D.length || 1 < o.element.childNodes.length)
                                  , R = i.getLineHeight(P)
                                  , X = 0
                                  , Y = o.actualWidth;
                                if (i.ellipsis)
                                    O && i.truncate(T, O, void 0, 0, Math.max(0, M - parseInt(i.fontSize || 12, 10)), (function(i, o) {
                                        return i.substring(0, o) + "â€¦"
                                    }
                                    ));
                                else if (j) {
                                    for (O = [],
                                    j = []; P.firstChild && P.firstChild !== T; )
                                        j.push(P.firstChild),
                                        P.removeChild(P.firstChild);
                                    for (; D.length; )
                                        D.length && !i.noWrap && 0 < X && (O.push(T.textContent || ""),
                                        T.textContent = D.join(" ").replace(/- /g, "-")),
                                        i.truncate(T, void 0, D, 0 === X && Y || 0, M, (function(i, o) {
                                            return D.slice(0, o).join(" ").replace(/- /g, "-")
                                        }
                                        )),
                                        Y = o.actualWidth,
                                        X++;
                                    j.forEach((function(i) {
                                        P.insertBefore(i, T)
                                    }
                                    )),
                                    O.forEach((function(i) {
                                        P.insertBefore(p.createTextNode(i), T),
                                        (i = p.createElementNS(C, "tspan")).textContent = "â€‹",
                                        S(i, {
                                            dy: R,
                                            x: s
                                        }),
                                        P.insertBefore(i, T)
                                    }
                                    ))
                                }
                            }
                              , w = function(i) {
                                [].slice.call(i.childNodes).forEach((function(s) {
                                    s.nodeType === Node.TEXT_NODE ? m(s, i) : (-1 !== s.className.baseVal.indexOf("highcharts-br") && (o.actualWidth = 0),
                                    w(s))
                                }
                                ))
                            };
                            w(o.element)
                        }
                    }
                    ,
                    h.prototype.getLineHeight = function(i) {
                        var o;
                        return i = i.nodeType === Node.TEXT_NODE ? i.parentElement : i,
                        this.renderer.styledMode || (o = i && /(px|em)$/.test(i.style.fontSize) ? i.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12),
                        this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(o, i || this.svgElement.element).h
                    }
                    ,
                    h.prototype.modifyTree = function(i) {
                        var o = this
                          , e = function(s, p) {
                            var C = s.tagName
                              , S = o.renderer.styledMode
                              , T = s.attributes || {};
                            "b" === C || "strong" === C ? S ? T.class = "highcharts-strong" : T.style = "font-weight:bold;" + (T.style || "") : "i" !== C && "em" !== C || (S ? T.class = "highcharts-emphasized" : T.style = "font-style:italic;" + (T.style || "")),
                            M(T.style) && (T.style = T.style.replace(/(;| |^)color([ :])/, "$1fill$2")),
                            "br" === C && (T.class = "highcharts-br",
                            s.textContent = "â€‹",
                            (p = i[p + 1]) && p.textContent && (p.textContent = p.textContent.replace(/^ +/gm, ""))),
                            "#text" !== C && "a" !== C && (s.tagName = "tspan"),
                            s.attributes = T,
                            s.children && s.children.filter((function(i) {
                                return "#text" !== i.tagName
                            }
                            )).forEach(e)
                        };
                        for (i.forEach(e); i[0] && "tspan" === i[0].tagName && !i[0].children; )
                            i.splice(0, 1)
                    }
                    ,
                    h.prototype.truncate = function(i, o, s, p, C, S) {
                        var M, T = this.svgElement, P = T.renderer, O = T.rotation, D = [], j = s ? 1 : 0, R = (o || s || "").length, X = R, b = function(C, M) {
                            M = M || C;
                            var O = i.parentNode;
                            if (O && void 0 === D[M])
                                if (O.getSubStringLength)
                                    try {
                                        D[M] = p + O.getSubStringLength(0, s ? M + 1 : M)
                                    } catch (j) {}
                                else
                                    P.getSpanWidth && (i.textContent = S(o || s, C),
                                    D[M] = p + P.getSpanWidth(T, i));
                            return D[M]
                        };
                        T.rotation = 0;
                        var Y = b(i.textContent.length);
                        if (p + Y > C) {
                            for (; j <= R; )
                                X = Math.ceil((j + R) / 2),
                                s && (M = S(s, X)),
                                Y = b(X, M && M.length - 1),
                                j === R ? j = R + 1 : Y > C ? R = X - 1 : j = X;
                            0 === R ? i.textContent = "" : o && R === o.length - 1 || (i.textContent = M || S(o || s, X))
                        }
                        s && s.splice(0, X),
                        T.actualWidth = Y,
                        T.rotation = O
                    }
                    ,
                    h.prototype.unescapeEntities = function(i, o) {
                        return T(this.renderer.escapes, (function(s, p) {
                            o && -1 !== o.indexOf(s) || (i = i.toString().replace(new RegExp(s,"g"), p))
                        }
                        )),
                        i
                    }
                    ,
                    h
                }()
            }
            )),
            L(o, "Core/Renderer/SVG/SVGRenderer.js", [o["Core/Renderer/HTML/AST.js"], o["Core/Color/Color.js"], o["Core/Globals.js"], o["Core/Color/Palette.js"], o["Core/Renderer/RendererRegistry.js"], o["Core/Renderer/SVG/SVGElement.js"], o["Core/Renderer/SVG/SVGLabel.js"], o["Core/Renderer/SVG/Symbols.js"], o["Core/Renderer/SVG/TextBuilder.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C, S, M, T, P, O) {
                var D, j = s.charts, R = s.deg2rad, X = s.doc, Y = s.isFirefox, _ = s.isMS, F = s.isWebKit, U = s.noop, V = s.SVG_NS, Z = s.symbolSizes, $ = s.win, Q = O.addEvent, tt = O.attr, et = O.createElement, it = O.css, ot = O.defined, st = O.destroyObjectProperties, rt = O.extend, nt = O.isArray, at = O.isNumber, ht = O.isObject, lt = O.isString, ct = O.merge, dt = O.pick, pt = O.pInt, ut = O.uniqueKey;
                return s = function() {
                    function z(i, o, s, p, C, S, M) {
                        this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0,
                        this.init(i, o, s, p, C, S, M)
                    }
                    return z.prototype.init = function(i, o, s, p, C, S, M) {
                        var T, P = this.createElement("svg").attr({
                            version: "1.1",
                            class: "highcharts-root"
                        }), O = P.element;
                        M || P.css(this.getStyle(p)),
                        i.appendChild(O),
                        tt(i, "dir", "ltr"),
                        -1 === i.innerHTML.indexOf("xmlns") && tt(O, "xmlns", this.SVG_NS),
                        this.isSVG = !0,
                        this.box = O,
                        this.boxWrapper = P,
                        this.alignedObjects = [],
                        this.url = this.getReferenceURL(),
                        this.createElement("desc").add().element.appendChild(X.createTextNode("Created with Highcharts 9.1.2")),
                        this.defs = this.createElement("defs").add(),
                        this.allowHTML = S,
                        this.forExport = C,
                        this.styledMode = M,
                        this.gradients = {},
                        this.cache = {},
                        this.cacheKeys = [],
                        this.imgCount = 0,
                        this.setSize(o, s, !1),
                        Y && i.getBoundingClientRect && ((o = function() {
                            it(i, {
                                left: 0,
                                top: 0
                            }),
                            T = i.getBoundingClientRect(),
                            it(i, {
                                left: Math.ceil(T.left) - T.left + "px",
                                top: Math.ceil(T.top) - T.top + "px"
                            })
                        }
                        )(),
                        this.unSubPixelFix = Q($, "resize", o))
                    }
                    ,
                    z.prototype.definition = function(o) {
                        return new i([o]).addToDOM(this.defs.element)
                    }
                    ,
                    z.prototype.getReferenceURL = function() {
                        if ((Y || F) && X.getElementsByTagName("base").length) {
                            if (!ot(D)) {
                                var o = ut();
                                o = new i([{
                                    tagName: "svg",
                                    attributes: {
                                        width: 8,
                                        height: 8
                                    },
                                    children: [{
                                        tagName: "defs",
                                        children: [{
                                            tagName: "clipPath",
                                            attributes: {
                                                id: o
                                            },
                                            children: [{
                                                tagName: "rect",
                                                attributes: {
                                                    width: 4,
                                                    height: 4
                                                }
                                            }]
                                        }]
                                    }, {
                                        tagName: "rect",
                                        attributes: {
                                            id: "hitme",
                                            width: 8,
                                            height: 8,
                                            "clip-path": "url(#" + o + ")",
                                            fill: "rgba(0,0,0,0.001)"
                                        }
                                    }]
                                }]).addToDOM(X.body),
                                it(o, {
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    zIndex: 9e5
                                });
                                var s = X.elementFromPoint(6, 6);
                                D = "hitme" === (s && s.id),
                                X.body.removeChild(o)
                            }
                            if (D)
                                return $.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20")
                        }
                        return ""
                    }
                    ,
                    z.prototype.getStyle = function(i) {
                        return this.style = rt({
                            fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                            fontSize: "12px"
                        }, i)
                    }
                    ,
                    z.prototype.setStyle = function(i) {
                        this.boxWrapper.css(this.getStyle(i))
                    }
                    ,
                    z.prototype.isHidden = function() {
                        return !this.boxWrapper.getBBox().width
                    }
                    ,
                    z.prototype.destroy = function() {
                        var i = this.defs;
                        return this.box = null,
                        this.boxWrapper = this.boxWrapper.destroy(),
                        st(this.gradients || {}),
                        this.gradients = null,
                        i && (this.defs = i.destroy()),
                        this.unSubPixelFix && this.unSubPixelFix(),
                        this.alignedObjects = null
                    }
                    ,
                    z.prototype.createElement = function(i) {
                        var o = new this.Element;
                        return o.init(this, i),
                        o
                    }
                    ,
                    z.prototype.getRadialAttr = function(i, o) {
                        return {
                            cx: i[0] - i[2] / 2 + (o.cx || 0) * i[2],
                            cy: i[1] - i[2] / 2 + (o.cy || 0) * i[2],
                            r: (o.r || 0) * i[2]
                        }
                    }
                    ,
                    z.prototype.buildText = function(i) {
                        new P(i).buildSVG()
                    }
                    ,
                    z.prototype.getContrast = function(i) {
                        return (i = o.parse(i).rgba)[0] *= 1,
                        i[1] *= 1.2,
                        i[2] *= .5,
                        459 < i[0] + i[1] + i[2] ? "#000000" : "#FFFFFF"
                    }
                    ,
                    z.prototype.button = function(o, s, C, S, M, T, P, O, D, j) {
                        var R = this.label(o, s, C, D, void 0, void 0, j, void 0, "button")
                          , X = this.styledMode
                          , Y = 0
                          , F = M ? ct(M) : {};
                        if (o = F && F.style || {},
                        F = i.filterUserAttributes(F),
                        R.attr(ct({
                            padding: 8,
                            r: 2
                        }, F)),
                        !X) {
                            var U = (F = ct({
                                fill: p.neutralColor3,
                                stroke: p.neutralColor20,
                                "stroke-width": 1,
                                style: {
                                    color: p.neutralColor80,
                                    cursor: "pointer",
                                    fontWeight: "normal"
                                }
                            }, {
                                style: o
                            }, F)).style;
                            delete F.style;
                            var V = (T = ct(F, {
                                fill: p.neutralColor10
                            }, i.filterUserAttributes(T || {}))).style;
                            delete T.style;
                            var Z = (P = ct(F, {
                                fill: p.highlightColor10,
                                style: {
                                    color: p.neutralColor100,
                                    fontWeight: "bold"
                                }
                            }, i.filterUserAttributes(P || {}))).style;
                            delete P.style;
                            var $ = (O = ct(F, {
                                style: {
                                    color: p.neutralColor20
                                }
                            }, i.filterUserAttributes(O || {}))).style;
                            delete O.style
                        }
                        return Q(R.element, _ ? "mouseover" : "mouseenter", (function() {
                            3 !== Y && R.setState(1)
                        }
                        )),
                        Q(R.element, _ ? "mouseout" : "mouseleave", (function() {
                            3 !== Y && R.setState(Y)
                        }
                        )),
                        R.setState = function(i) {
                            1 !== i && (R.state = Y = i),
                            R.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][i || 0]),
                            X || R.attr([F, T, P, O][i || 0]).css([U, V, Z, $][i || 0])
                        }
                        ,
                        X || R.attr(F).css(rt({
                            cursor: "default"
                        }, U)),
                        R.on("touchstart", (function(i) {
                            return i.stopPropagation()
                        }
                        )).on("click", (function(i) {
                            3 !== Y && S.call(R, i)
                        }
                        ))
                    }
                    ,
                    z.prototype.crispLine = function(i, o, s) {
                        void 0 === s && (s = "round");
                        var p = i[0]
                          , C = i[1];
                        return ot(p[1]) && p[1] === C[1] && (p[1] = C[1] = Math[s](p[1]) - o % 2 / 2),
                        ot(p[2]) && p[2] === C[2] && (p[2] = C[2] = Math[s](p[2]) + o % 2 / 2),
                        i
                    }
                    ,
                    z.prototype.path = function(i) {
                        var o = this.styledMode ? {} : {
                            fill: "none"
                        };
                        return nt(i) ? o.d = i : ht(i) && rt(o, i),
                        this.createElement("path").attr(o)
                    }
                    ,
                    z.prototype.circle = function(i, o, s) {
                        return i = ht(i) ? i : void 0 === i ? {} : {
                            x: i,
                            y: o,
                            r: s
                        },
                        (o = this.createElement("circle")).xSetter = o.ySetter = function(i, o, s) {
                            s.setAttribute("c" + o, i)
                        }
                        ,
                        o.attr(i)
                    }
                    ,
                    z.prototype.arc = function(i, o, s, p, C, S) {
                        return ht(i) ? (o = (p = i).y,
                        s = p.r,
                        i = p.x) : p = {
                            innerR: p,
                            start: C,
                            end: S
                        },
                        (i = this.symbol("arc", i, o, s, s, p)).r = s,
                        i
                    }
                    ,
                    z.prototype.rect = function(i, o, s, p, C, S) {
                        C = ht(i) ? i.r : C;
                        var M = this.createElement("rect");
                        return i = ht(i) ? i : void 0 === i ? {} : {
                            x: i,
                            y: o,
                            width: Math.max(s, 0),
                            height: Math.max(p, 0)
                        },
                        this.styledMode || (void 0 !== S && (i["stroke-width"] = S,
                        i = M.crisp(i)),
                        i.fill = "none"),
                        C && (i.r = C),
                        M.rSetter = function(i, o, s) {
                            M.r = i,
                            tt(s, {
                                rx: i,
                                ry: i
                            })
                        }
                        ,
                        M.rGetter = function() {
                            return M.r || 0
                        }
                        ,
                        M.attr(i)
                    }
                    ,
                    z.prototype.setSize = function(i, o, s) {
                        this.width = i,
                        this.height = o,
                        this.boxWrapper.animate({
                            width: i,
                            height: o
                        }, {
                            step: function() {
                                this.attr({
                                    viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                                })
                            },
                            duration: dt(s, !0) ? void 0 : 0
                        }),
                        this.alignElements()
                    }
                    ,
                    z.prototype.g = function(i) {
                        var o = this.createElement("g");
                        return i ? o.attr({
                            class: "highcharts-" + i
                        }) : o
                    }
                    ,
                    z.prototype.image = function(i, o, s, p, C, S) {
                        var M = {
                            preserveAspectRatio: "none"
                        }
                          , l = function(i, o) {
                            i.setAttributeNS ? i.setAttributeNS("http://www.w3.org/1999/xlink", "href", o) : i.setAttribute("hc-svg-href", o)
                        };
                        1 < arguments.length && rt(M, {
                            x: o,
                            y: s,
                            width: p,
                            height: C
                        });
                        var T = this.createElement("image").attr(M);
                        if (M = function(o) {
                            l(T.element, i),
                            S.call(T, o)
                        }
                        ,
                        S) {
                            l(T.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
                            var P = new $.Image;
                            Q(P, "load", M),
                            P.src = i,
                            P.complete && M({})
                        } else
                            l(T.element, i);
                        return T
                    }
                    ,
                    z.prototype.symbol = function(i, o, s, p, C, S) {
                        var M, T = this, P = /^url\((.*?)\)$/, O = P.test(i), D = !O && (this.symbols[i] ? i : "circle"), R = D && this.symbols[D];
                        if (R) {
                            "number" == typeof o && (M = R.call(this.symbols, Math.round(o || 0), Math.round(s || 0), p || 0, C || 0, S));
                            var Y = this.path(M);
                            T.styledMode || Y.attr("fill", "none"),
                            rt(Y, {
                                symbolName: D || void 0,
                                x: o,
                                y: s,
                                width: p,
                                height: C
                            }),
                            S && rt(Y, S)
                        } else if (O) {
                            var _ = i.match(P)[1]
                              , F = Y = this.image(_);
                            F.imgwidth = dt(Z[_] && Z[_].width, S && S.width),
                            F.imgheight = dt(Z[_] && Z[_].height, S && S.height);
                            var m = function(i) {
                                return i.attr({
                                    width: i.width,
                                    height: i.height
                                })
                            };
                            ["width", "height"].forEach((function(i) {
                                F[i + "Setter"] = function(i, o) {
                                    var s = this["img" + o];
                                    this[o] = i,
                                    ot(s) && (S && "within" === S.backgroundSize && this.width && this.height && (s = Math.round(s * Math.min(this.width / this.imgwidth, this.height / this.imgheight))),
                                    this.element && this.element.setAttribute(o, s),
                                    this.alignByTranslate || (i = ((this[o] || 0) - s) / 2,
                                    this.attr("width" === o ? {
                                        translateX: i
                                    } : {
                                        translateY: i
                                    })))
                                }
                            }
                            )),
                            ot(o) && F.attr({
                                x: o,
                                y: s
                            }),
                            F.isImg = !0,
                            ot(F.imgwidth) && ot(F.imgheight) ? m(F) : (F.attr({
                                width: 0,
                                height: 0
                            }),
                            et("img", {
                                onload: function() {
                                    var i = j[T.chartIndex];
                                    0 === this.width && (it(this, {
                                        position: "absolute",
                                        top: "-999em"
                                    }),
                                    X.body.appendChild(this)),
                                    Z[_] = {
                                        width: this.width,
                                        height: this.height
                                    },
                                    F.imgwidth = this.width,
                                    F.imgheight = this.height,
                                    F.element && m(F),
                                    this.parentNode && this.parentNode.removeChild(this),
                                    T.imgCount--,
                                    T.imgCount || !i || i.hasLoaded || i.onload()
                                },
                                src: _
                            }),
                            this.imgCount++)
                        }
                        return Y
                    }
                    ,
                    z.prototype.clipRect = function(i, o, s, p) {
                        var C = ut() + "-"
                          , S = this.createElement("clipPath").attr({
                            id: C
                        }).add(this.defs);
                        return (i = this.rect(i, o, s, p, 0).add(S)).id = C,
                        i.clipPath = S,
                        i.count = 0,
                        i
                    }
                    ,
                    z.prototype.text = function(i, o, s, p) {
                        var C = {};
                        return !p || !this.allowHTML && this.forExport ? (C.x = Math.round(o || 0),
                        s && (C.y = Math.round(s)),
                        ot(i) && (C.text = i),
                        i = this.createElement("text").attr(C),
                        p || (i.xSetter = function(i, o, s) {
                            for (var p, C = s.getElementsByTagName("tspan"), S = s.getAttribute(o), M = 0; M < C.length; M++)
                                (p = C[M]).getAttribute(o) === S && p.setAttribute(o, i);
                            s.setAttribute(o, i)
                        }
                        ),
                        i) : this.html(i, o, s)
                    }
                    ,
                    z.prototype.fontMetrics = function(i, o) {
                        return i = !this.styledMode && /px/.test(i) || !$.getComputedStyle ? i || o && o.style && o.style.fontSize || this.style && this.style.fontSize : o && S.prototype.getStyle.call(o, "font-size"),
                        {
                            h: o = 24 > (i = /px/.test(i) ? pt(i) : 12) ? i + 3 : Math.round(1.2 * i),
                            b: Math.round(.8 * o),
                            f: i
                        }
                    }
                    ,
                    z.prototype.rotCorr = function(i, o, s) {
                        var p = i;
                        return o && s && (p = Math.max(p * Math.cos(o * R), 4)),
                        {
                            x: -i / 3 * Math.sin(o * R),
                            y: p
                        }
                    }
                    ,
                    z.prototype.pathToSegments = function(i) {
                        for (var o = [], s = [], p = {
                            A: 8,
                            C: 7,
                            H: 2,
                            L: 3,
                            M: 3,
                            Q: 5,
                            S: 5,
                            T: 3,
                            V: 2
                        }, C = 0; C < i.length; C++)
                            lt(s[0]) && at(i[C]) && s.length === p[s[0].toUpperCase()] && i.splice(C, 0, s[0].replace("M", "L").replace("m", "l")),
                            "string" == typeof i[C] && (s.length && o.push(s.slice(0)),
                            s.length = 0),
                            s.push(i[C]);
                        return o.push(s.slice(0)),
                        o
                    }
                    ,
                    z.prototype.label = function(i, o, s, p, C, S, T, P, O) {
                        return new M(this,i,o,s,p,C,S,T,P,O)
                    }
                    ,
                    z.prototype.alignElements = function() {
                        this.alignedObjects.forEach((function(i) {
                            return i.align()
                        }
                        ))
                    }
                    ,
                    z
                }(),
                rt(s.prototype, {
                    Element: S,
                    SVG_NS: V,
                    escapes: {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "'": "&#39;",
                        '"': "&quot;"
                    },
                    symbols: T,
                    draw: U
                }),
                C.registerRendererType("svg", s, !0),
                s
            }
            )),
            L(o, "Core/Renderer/HTML/HTMLElement.js", [o["Core/Globals.js"], o["Core/Renderer/SVG/SVGElement.js"], o["Core/Utilities.js"]], (function(i, o, s) {
                var p = this && this.__extends || function() {
                    var a = function(i, o) {
                        return a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        ,
                        a(i, o)
                    };
                    return function(i, o) {
                        function f() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (f.prototype = o.prototype,
                        new f)
                    }
                }()
                  , C = i.isFirefox
                  , S = i.isMS
                  , M = i.isWebKit
                  , T = i.win
                  , P = s.css
                  , O = s.defined
                  , D = s.extend
                  , j = s.pick
                  , R = s.pInt;
                return function(i) {
                    function m() {
                        return null !== i && i.apply(this, arguments) || this
                    }
                    return p(m, i),
                    m.compose = function(i) {
                        i = i.prototype;
                        var o = m.prototype;
                        i.getSpanCorrection = o.getSpanCorrection,
                        i.htmlCss = o.htmlCss,
                        i.htmlGetBBox = o.htmlGetBBox,
                        i.htmlUpdateTransform = o.htmlUpdateTransform,
                        i.setSpanRotation = o.setSpanRotation
                    }
                    ,
                    m.prototype.getSpanCorrection = function(i, o, s) {
                        this.xCorr = -i * s,
                        this.yCorr = -o
                    }
                    ,
                    m.prototype.htmlCss = function(i) {
                        var o = "SPAN" === this.element.tagName && i && "width"in i
                          , s = j(o && i.width, void 0);
                        if (o) {
                            delete i.width,
                            this.textWidth = s;
                            var p = !0
                        }
                        return i && "ellipsis" === i.textOverflow && (i.whiteSpace = "nowrap",
                        i.overflow = "hidden"),
                        this.styles = D(this.styles, i),
                        P(this.element, i),
                        p && this.htmlUpdateTransform(),
                        this
                    }
                    ,
                    m.prototype.htmlGetBBox = function() {
                        var i = this.element;
                        return {
                            x: i.offsetLeft,
                            y: i.offsetTop,
                            width: i.offsetWidth,
                            height: i.offsetHeight
                        }
                    }
                    ,
                    m.prototype.htmlUpdateTransform = function() {
                        if (this.added) {
                            var i = this.renderer
                              , o = this.element
                              , s = this.translateX || 0
                              , p = this.translateY || 0
                              , C = this.x || 0
                              , S = this.y || 0
                              , M = this.textAlign || "left"
                              , T = {
                                left: 0,
                                center: .5,
                                right: 1
                            }[M]
                              , D = this.styles;
                            if (D = D && D.whiteSpace,
                            P(o, {
                                marginLeft: s,
                                marginTop: p
                            }),
                            !i.styledMode && this.shadows && this.shadows.forEach((function(i) {
                                P(i, {
                                    marginLeft: s + 1,
                                    marginTop: p + 1
                                })
                            }
                            )),
                            this.inverted && [].forEach.call(o.childNodes, (function(s) {
                                i.invertChild(s, o)
                            }
                            )),
                            "SPAN" === o.tagName) {
                                var j = this.rotation
                                  , X = this.textWidth && R(this.textWidth)
                                  , Y = [j, M, o.innerHTML, this.textWidth, this.textAlign].join()
                                  , _ = void 0;
                                (_ = X !== this.oldTextWidth) && !(_ = X > this.oldTextWidth) && ((_ = this.textPxLength) || (P(o, {
                                    width: "",
                                    whiteSpace: D || "nowrap"
                                }),
                                _ = o.offsetWidth),
                                _ = _ > X),
                                _ && (/[ \-]/.test(o.textContent || o.innerText) || "ellipsis" === o.style.textOverflow) ? (P(o, {
                                    width: X + "px",
                                    display: "block",
                                    whiteSpace: D || "normal"
                                }),
                                this.oldTextWidth = X,
                                this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1,
                                Y !== this.cTT && (_ = i.fontMetrics(o.style.fontSize, o).b,
                                !O(j) || j === (this.oldRotation || 0) && M === this.oldAlign || this.setSpanRotation(j, T, _),
                                this.getSpanCorrection(!O(j) && this.textPxLength || o.offsetWidth, _, T, j, M)),
                                P(o, {
                                    left: C + (this.xCorr || 0) + "px",
                                    top: S + (this.yCorr || 0) + "px"
                                }),
                                this.cTT = Y,
                                this.oldRotation = j,
                                this.oldAlign = M
                            }
                        } else
                            this.alignOnAdd = !0
                    }
                    ,
                    m.prototype.setSpanRotation = function(i, o, s) {
                        var p = {}
                          , O = S && !/Edge/.test(T.navigator.userAgent) ? "-ms-transform" : M ? "-webkit-transform" : C ? "MozTransform" : T.opera ? "-o-transform" : void 0;
                        O && (p[O] = p.transform = "rotate(" + i + "deg)",
                        p[O + (C ? "Origin" : "-origin")] = p.transformOrigin = 100 * o + "% " + s + "px",
                        P(this.element, p))
                    }
                    ,
                    m
                }(o)
            }
            )),
            L(o, "Core/Renderer/HTML/HTMLRenderer.js", [o["Core/Renderer/HTML/AST.js"], o["Core/Renderer/SVG/SVGElement.js"], o["Core/Renderer/SVG/SVGRenderer.js"], o["Core/Utilities.js"]], (function(i, o, s, p) {
                var C = this && this.__extends || function() {
                    var a = function(i, o) {
                        return a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        ,
                        a(i, o)
                    };
                    return function(i, o) {
                        function e() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype,
                        new e)
                    }
                }()
                  , S = p.attr
                  , M = p.createElement
                  , T = p.extend
                  , P = p.pick;
                return function(s) {
                    function f() {
                        return null !== s && s.apply(this, arguments) || this
                    }
                    return C(f, s),
                    f.compose = function(i) {
                        i.prototype.html = f.prototype.html
                    }
                    ,
                    f.prototype.html = function(s, p, C) {
                        var O = this.createElement("span")
                          , D = O.element
                          , j = O.renderer
                          , R = j.isSVG
                          , t = function(i, s) {
                            ["opacity", "visibility"].forEach((function(p) {
                                i[p + "Setter"] = function(C, S, M) {
                                    var T = i.div ? i.div.style : s;
                                    o.prototype[p + "Setter"].call(this, C, S, M),
                                    T && (T[S] = C)
                                }
                            }
                            )),
                            i.addedSetters = !0
                        };
                        return O.textSetter = function(o) {
                            o !== this.textStr && (delete this.bBox,
                            delete this.oldTextWidth,
                            i.setElementHTML(this.element, P(o, "")),
                            this.textStr = o,
                            O.doTransform = !0)
                        }
                        ,
                        R && t(O, O.element.style),
                        O.xSetter = O.ySetter = O.alignSetter = O.rotationSetter = function(i, o) {
                            "align" === o ? O.alignValue = O.textAlign = i : O[o] = i,
                            O.doTransform = !0
                        }
                        ,
                        O.afterSetters = function() {
                            this.doTransform && (this.htmlUpdateTransform(),
                            this.doTransform = !1)
                        }
                        ,
                        O.attr({
                            text: s,
                            x: Math.round(p),
                            y: Math.round(C)
                        }).css({
                            position: "absolute"
                        }),
                        j.styledMode || O.css({
                            fontFamily: this.style.fontFamily,
                            fontSize: this.style.fontSize
                        }),
                        D.style.whiteSpace = "nowrap",
                        O.css = O.htmlCss,
                        R && (O.add = function(i) {
                            var o = j.box.parentNode
                              , s = [];
                            if (this.parentGroup = i) {
                                var p = i.div;
                                if (!p) {
                                    for (; i; )
                                        s.push(i),
                                        i = i.parentGroup;
                                    s.reverse().forEach((function(i) {
                                        function b(o, s) {
                                            i[s] = o,
                                            "translateX" === s ? D.left = o + "px" : D.top = o + "px",
                                            i.doTransform = !0
                                        }
                                        var C = S(i.element, "class")
                                          , P = i.styles || {}
                                          , D = (p = i.div = i.div || M("div", C ? {
                                            className: C
                                        } : void 0, {
                                            position: "absolute",
                                            left: (i.translateX || 0) + "px",
                                            top: (i.translateY || 0) + "px",
                                            display: i.display,
                                            opacity: i.opacity,
                                            cursor: P.cursor,
                                            pointerEvents: P.pointerEvents
                                        }, p || o)).style;
                                        T(i, {
                                            classSetter: function(i) {
                                                return function(o) {
                                                    this.element.setAttribute("class", o),
                                                    i.className = o
                                                }
                                            }(p),
                                            on: function() {
                                                return s[0].div && O.on.apply({
                                                    element: s[0].div,
                                                    onEvents: O.onEvents
                                                }, arguments),
                                                i
                                            },
                                            translateXSetter: b,
                                            translateYSetter: b
                                        }),
                                        i.addedSetters || t(i)
                                    }
                                    ))
                                }
                            } else
                                p = o;
                            return p.appendChild(D),
                            O.added = !0,
                            O.alignOnAdd && O.htmlUpdateTransform(),
                            O
                        }
                        ),
                        O
                    }
                    ,
                    f
                }(s)
            }
            )),
            L(o, "Core/Foundation.js", [o["Core/Utilities.js"]], (function(i) {
                var o = i.addEvent
                  , s = i.isFunction
                  , p = i.objectEach
                  , C = i.removeEvent;
                return {
                    registerEventOptions: function(i, S) {
                        i.eventOptions = i.eventOptions || {},
                        p(S.events, (function(p, S) {
                            s(p) && i.eventOptions[S] !== p && (s(i.eventOptions[S]) && C(i, S, i.eventOptions[S]),
                            i.eventOptions[S] = p,
                            o(i, S, p))
                        }
                        ))
                    }
                }
            }
            )),
            L(o, "Core/Axis/AxisDefaults.js", [o["Core/Color/Palette.js"]], (function(i) {
                var o;
                return function(o) {
                    o.defaultXAxisOptions = {
                        alignTicks: !0,
                        allowDecimals: void 0,
                        panningEnabled: !0,
                        zIndex: 2,
                        zoomEnabled: !0,
                        dateTimeLabelFormats: {
                            millisecond: {
                                main: "%H:%M:%S.%L",
                                range: !1
                            },
                            second: {
                                main: "%H:%M:%S",
                                range: !1
                            },
                            minute: {
                                main: "%H:%M",
                                range: !1
                            },
                            hour: {
                                main: "%H:%M",
                                range: !1
                            },
                            day: {
                                main: "%e. %b"
                            },
                            week: {
                                main: "%e. %b"
                            },
                            month: {
                                main: "%b '%y"
                            },
                            year: {
                                main: "%Y"
                            }
                        },
                        endOnTick: !1,
                        gridLineDashStyle: "Solid",
                        gridZIndex: 1,
                        labels: {
                            autoRotation: void 0,
                            autoRotationLimit: 80,
                            distance: void 0,
                            enabled: !0,
                            indentation: 10,
                            overflow: "justify",
                            padding: 5,
                            reserveSpace: void 0,
                            rotation: void 0,
                            staggerLines: 0,
                            step: 0,
                            useHTML: !1,
                            x: 0,
                            zIndex: 7,
                            style: {
                                color: i.neutralColor60,
                                cursor: "default",
                                fontSize: "11px"
                            }
                        },
                        maxPadding: .01,
                        minorGridLineDashStyle: "Solid",
                        minorTickLength: 2,
                        minorTickPosition: "outside",
                        minPadding: .01,
                        offset: void 0,
                        opposite: !1,
                        reversed: void 0,
                        reversedStacks: !1,
                        showEmpty: !0,
                        showFirstLabel: !0,
                        showLastLabel: !0,
                        startOfWeek: 1,
                        startOnTick: !1,
                        tickLength: 10,
                        tickPixelInterval: 100,
                        tickmarkPlacement: "between",
                        tickPosition: "outside",
                        title: {
                            align: "middle",
                            rotation: 0,
                            useHTML: !1,
                            x: 0,
                            y: 0,
                            style: {
                                color: i.neutralColor60
                            }
                        },
                        type: "linear",
                        uniqueNames: !0,
                        visible: !0,
                        minorGridLineColor: i.neutralColor5,
                        minorGridLineWidth: 1,
                        minorTickColor: i.neutralColor40,
                        lineColor: i.highlightColor20,
                        lineWidth: 1,
                        gridLineColor: i.neutralColor10,
                        gridLineWidth: void 0,
                        tickColor: i.highlightColor20
                    },
                    o.defaultYAxisOptions = {
                        reversedStacks: !0,
                        endOnTick: !0,
                        maxPadding: .05,
                        minPadding: .05,
                        tickPixelInterval: 72,
                        showLastLabel: !0,
                        labels: {
                            x: -8
                        },
                        startOnTick: !0,
                        title: {
                            rotation: 270,
                            text: "Values"
                        },
                        stackLabels: {
                            animation: {},
                            allowOverlap: !1,
                            enabled: !1,
                            crop: !0,
                            overflow: "justify",
                            formatter: function() {
                                return (0,
                                this.axis.chart.numberFormatter)(this.total, -1)
                            },
                            style: {
                                color: i.neutralColor100,
                                fontSize: "11px",
                                fontWeight: "bold",
                                textOutline: "1px contrast"
                            }
                        },
                        gridLineWidth: 1,
                        lineWidth: 0
                    },
                    o.defaultLeftAxisOptions = {
                        labels: {
                            x: -15
                        },
                        title: {
                            rotation: 270
                        }
                    },
                    o.defaultRightAxisOptions = {
                        labels: {
                            x: 15
                        },
                        title: {
                            rotation: 90
                        }
                    },
                    o.defaultBottomAxisOptions = {
                        labels: {
                            autoRotation: [-45],
                            x: 0
                        },
                        margin: 15,
                        title: {
                            rotation: 0
                        }
                    },
                    o.defaultTopAxisOptions = {
                        labels: {
                            autoRotation: [-45],
                            x: 0
                        },
                        margin: 15,
                        title: {
                            rotation: 0
                        }
                    }
                }(o || (o = {})),
                o
            }
            )),
            L(o, "Core/Axis/Tick.js", [o["Core/FormatUtilities.js"], o["Core/Globals.js"], o["Core/Utilities.js"]], (function(i, o, s) {
                var p = o.deg2rad
                  , C = s.clamp
                  , S = s.correctFloat
                  , M = s.defined
                  , T = s.destroyObjectProperties
                  , P = s.extend
                  , O = s.fireEvent
                  , D = s.isNumber
                  , j = s.merge
                  , R = s.objectEach
                  , X = s.pick;
                return o = function() {
                    function m(i, o, s, p, C) {
                        this.isNewLabel = this.isNew = !0,
                        this.axis = i,
                        this.pos = o,
                        this.type = s || "",
                        this.parameters = C || {},
                        this.tickmarkOffset = this.parameters.tickmarkOffset,
                        this.options = this.parameters.options,
                        O(this, "init"),
                        s || p || this.addLabel()
                    }
                    return m.prototype.addLabel = function() {
                        var o = this
                          , s = o.axis
                          , p = s.options
                          , C = s.chart
                          , T = s.categories
                          , j = s.logarithmic
                          , R = s.names
                          , Y = o.pos
                          , _ = X(o.options && o.options.labels, p.labels)
                          , F = s.tickPositions
                          , U = Y === F[0]
                          , V = Y === F[F.length - 1]
                          , Z = (!_.step || 1 === _.step) && 1 === s.tickInterval;
                        F = F.info;
                        var $, Q = o.label;
                        if (T = this.parameters.category || (T ? X(T[Y], R[Y], Y) : Y),
                        j && D(T) && (T = S(j.lin2log(T))),
                        s.dateTime && F)
                            var tt = C.time.resolveDTLFormat(p.dateTimeLabelFormats[!p.grid && F.higherRanks[Y] || F.unitName])
                              , et = tt.main;
                        o.isFirst = U,
                        o.isLast = V;
                        var it = {
                            axis: s,
                            chart: C,
                            dateTimeLabelFormat: et,
                            isFirst: U,
                            isLast: V,
                            pos: Y,
                            tick: o,
                            tickPositionInfo: F,
                            value: T
                        };
                        O(this, "labelFormat", it);
                        var W = function(o) {
                            return _.formatter ? _.formatter.call(o, o) : _.format ? (o.text = s.defaultLabelFormatter.call(o),
                            i.format(_.format, o, C)) : s.defaultLabelFormatter.call(o, o)
                        };
                        p = W.call(it, it);
                        var ot = tt && tt.list;
                        o.shortenLabel = ot ? function() {
                            for ($ = 0; $ < ot.length; $++)
                                if (P(it, {
                                    dateTimeLabelFormat: ot[$]
                                }),
                                Q.attr({
                                    text: W.call(it, it)
                                }),
                                Q.getBBox().width < s.getSlotWidth(o) - 2 * _.padding)
                                    return;
                            Q.attr({
                                text: ""
                            })
                        }
                        : void 0,
                        Z && s._addedPlotLB && o.moveLabel(p, _),
                        M(Q) || o.movedLabel ? Q && Q.textStr !== p && !Z && (!Q.textWidth || _.style.width || Q.styles.width || Q.css({
                            width: null
                        }),
                        Q.attr({
                            text: p
                        }),
                        Q.textPxLength = Q.getBBox().width) : (o.label = Q = o.createLabel({
                            x: 0,
                            y: 0
                        }, p, _),
                        o.rotation = 0)
                    }
                    ,
                    m.prototype.createLabel = function(i, o, s) {
                        var p = this.axis
                          , C = p.chart;
                        return (i = M(o) && s.enabled ? C.renderer.text(o, i.x, i.y, s.useHTML).add(p.labelGroup) : null) && (C.styledMode || i.css(j(s.style)),
                        i.textPxLength = i.getBBox().width),
                        i
                    }
                    ,
                    m.prototype.destroy = function() {
                        T(this, this.axis)
                    }
                    ,
                    m.prototype.getPosition = function(i, o, s, p) {
                        var M = this.axis
                          , T = M.chart
                          , P = p && T.oldChartHeight || T.chartHeight;
                        return (i = {
                            x: i ? S(M.translate(o + s, null, null, p) + M.transB) : M.left + M.offset + (M.opposite ? (p && T.oldChartWidth || T.chartWidth) - M.right - M.left : 0),
                            y: i ? P - M.bottom + M.offset - (M.opposite ? M.height : 0) : S(P - M.translate(o + s, null, null, p) - M.transB)
                        }).y = C(i.y, -1e5, 1e5),
                        O(this, "afterGetPosition", {
                            pos: i
                        }),
                        i
                    }
                    ,
                    m.prototype.getLabelPosition = function(i, o, s, C, S, T, P, D) {
                        var j = this.axis
                          , R = j.transA
                          , X = j.isLinked && j.linkedParent ? j.linkedParent.reversed : j.reversed
                          , Y = j.staggerLines
                          , _ = j.tickRotCorr || {
                            x: 0,
                            y: 0
                        }
                          , F = C || j.reserveSpaceDefault ? 0 : -j.labelOffset * ("center" === j.labelAlign ? .5 : 1)
                          , U = {}
                          , V = S.y;
                        return M(V) || (V = 0 === j.side ? s.rotation ? -8 : -s.getBBox().height : 2 === j.side ? _.y + 8 : Math.cos(s.rotation * p) * (_.y - s.getBBox(!1, 0).height / 2)),
                        i = i + S.x + F + _.x - (T && C ? T * R * (X ? -1 : 1) : 0),
                        o = o + V - (T && !C ? T * R * (X ? 1 : -1) : 0),
                        Y && (s = P / (D || 1) % Y,
                        j.opposite && (s = Y - s - 1),
                        o += j.labelOffset / Y * s),
                        U.x = i,
                        U.y = Math.round(o),
                        O(this, "afterGetLabelPosition", {
                            pos: U,
                            tickmarkOffset: T,
                            index: P
                        }),
                        U
                    }
                    ,
                    m.prototype.getLabelSize = function() {
                        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
                    }
                    ,
                    m.prototype.getMarkPath = function(i, o, s, p, C, S) {
                        return S.crispLine([["M", i, o], ["L", i + (C ? 0 : -s), o + (C ? s : 0)]], p)
                    }
                    ,
                    m.prototype.handleOverflow = function(i) {
                        var o = this.axis
                          , s = o.options.labels
                          , C = i.x
                          , S = o.chart.chartWidth
                          , M = o.chart.spacing
                          , T = X(o.labelLeft, Math.min(o.pos, M[3]));
                        M = X(o.labelRight, Math.max(o.isRadial ? 0 : o.pos + o.len, S - M[1]));
                        var P, O = this.label, D = this.rotation, j = {
                            left: 0,
                            center: .5,
                            right: 1
                        }[o.labelAlign || O.attr("align")], R = O.getBBox().width, Y = o.getSlotWidth(this), _ = {}, F = Y, U = 1;
                        D || "justify" !== s.overflow ? 0 > D && C - j * R < T ? P = Math.round(C / Math.cos(D * p) - T) : 0 < D && C + j * R > M && (P = Math.round((S - C) / Math.cos(D * p))) : (S = C + (1 - j) * R,
                        C - j * R < T ? F = i.x + F * (1 - j) - T : S > M && (F = M - i.x + F * j,
                        U = -1),
                        (F = Math.min(Y, F)) < Y && "center" === o.labelAlign && (i.x += U * (Y - F - j * (Y - Math.min(R, F)))),
                        (R > F || o.autoRotation && (O.styles || {}).width) && (P = F)),
                        P && (this.shortenLabel ? this.shortenLabel() : (_.width = Math.floor(P) + "px",
                        (s.style || {}).textOverflow || (_.textOverflow = "ellipsis"),
                        O.css(_)))
                    }
                    ,
                    m.prototype.moveLabel = function(i, o) {
                        var s = this
                          , p = s.label
                          , C = s.axis
                          , S = C.reversed
                          , M = !1;
                        if (p && p.textStr === i ? (s.movedLabel = p,
                        M = !0,
                        delete s.label) : R(C.ticks, (function(o) {
                            M || o.isNew || o === s || !o.label || o.label.textStr !== i || (s.movedLabel = o.label,
                            M = !0,
                            o.labelPos = s.movedLabel.xy,
                            delete o.label)
                        }
                        )),
                        !M && (s.labelPos || p)) {
                            var T = s.labelPos || p.xy;
                            p = C.horiz ? S ? 0 : C.width + C.left : T.x,
                            C = C.horiz ? T.y : S ? C.width + C.left : 0,
                            s.movedLabel = s.createLabel({
                                x: p,
                                y: C
                            }, i, o),
                            s.movedLabel && s.movedLabel.attr({
                                opacity: 0
                            })
                        }
                    }
                    ,
                    m.prototype.render = function(i, o, s) {
                        var p = this.axis
                          , C = p.horiz
                          , S = this.pos
                          , M = X(this.tickmarkOffset, p.tickmarkOffset);
                        M = (S = this.getPosition(C, S, M, o)).x;
                        var T = S.y;
                        p = C && M === p.pos + p.len || !C && T === p.pos ? -1 : 1,
                        C = X(s, this.label && this.label.newOpacity, 1),
                        s = X(s, 1),
                        this.isActive = !0,
                        this.renderGridLine(o, s, p),
                        this.renderMark(S, s, p),
                        this.renderLabel(S, o, C, i),
                        this.isNew = !1,
                        O(this, "afterRender")
                    }
                    ,
                    m.prototype.renderGridLine = function(i, o, s) {
                        var p = this.axis
                          , C = p.options
                          , S = {}
                          , M = this.pos
                          , T = this.type
                          , P = X(this.tickmarkOffset, p.tickmarkOffset)
                          , O = p.chart.renderer
                          , D = this.gridLine
                          , j = C.gridLineWidth
                          , R = C.gridLineColor
                          , Y = C.gridLineDashStyle;
                        "minor" === this.type && (j = C.minorGridLineWidth,
                        R = C.minorGridLineColor,
                        Y = C.minorGridLineDashStyle),
                        D || (p.chart.styledMode || (S.stroke = R,
                        S["stroke-width"] = j || 0,
                        S.dashstyle = Y),
                        T || (S.zIndex = 1),
                        i && (o = 0),
                        this.gridLine = D = O.path().attr(S).addClass("highcharts-" + (T ? T + "-" : "") + "grid-line").add(p.gridGroup)),
                        D && (s = p.getPlotLinePath({
                            value: M + P,
                            lineWidth: D.strokeWidth() * s,
                            force: "pass",
                            old: i
                        })) && D[i || this.isNew ? "attr" : "animate"]({
                            d: s,
                            opacity: o
                        })
                    }
                    ,
                    m.prototype.renderMark = function(i, o, s) {
                        var p = this.axis
                          , C = p.options
                          , S = p.chart.renderer
                          , M = this.type
                          , T = p.tickSize(M ? M + "Tick" : "tick")
                          , P = i.x;
                        i = i.y;
                        var O = X(C["minor" !== M ? "tickWidth" : "minorTickWidth"], !M && p.isXAxis ? 1 : 0);
                        C = C["minor" !== M ? "tickColor" : "minorTickColor"];
                        var D = this.mark
                          , j = !D;
                        T && (p.opposite && (T[0] = -T[0]),
                        D || (this.mark = D = S.path().addClass("highcharts-" + (M ? M + "-" : "") + "tick").add(p.axisGroup),
                        p.chart.styledMode || D.attr({
                            stroke: C,
                            "stroke-width": O
                        })),
                        D[j ? "attr" : "animate"]({
                            d: this.getMarkPath(P, i, T[0], D.strokeWidth() * s, p.horiz, S),
                            opacity: o
                        }))
                    }
                    ,
                    m.prototype.renderLabel = function(i, o, s, p) {
                        var C = this.axis
                          , S = C.horiz
                          , M = C.options
                          , T = this.label
                          , P = M.labels
                          , O = P.step;
                        C = X(this.tickmarkOffset, C.tickmarkOffset);
                        var j = i.x;
                        i = i.y;
                        var R = !0;
                        T && D(j) && (T.xy = i = this.getLabelPosition(j, i, T, S, P, C, p, O),
                        this.isFirst && !this.isLast && !M.showFirstLabel || this.isLast && !this.isFirst && !M.showLastLabel ? R = !1 : !S || P.step || P.rotation || o || 0 === s || this.handleOverflow(i),
                        O && p % O && (R = !1),
                        R && D(i.y) ? (i.opacity = s,
                        T[this.isNewLabel ? "attr" : "animate"](i),
                        this.isNewLabel = !1) : (T.attr("y", -9999),
                        this.isNewLabel = !0))
                    }
                    ,
                    m.prototype.replaceMovedLabel = function() {
                        var i = this.label
                          , o = this.axis
                          , s = o.reversed;
                        if (i && !this.isNew) {
                            var p = o.horiz ? s ? o.left : o.width + o.left : i.xy.x;
                            s = o.horiz ? i.xy.y : s ? o.width + o.top : o.top,
                            i.animate({
                                x: p,
                                y: s,
                                opacity: 0
                            }, void 0, i.destroy),
                            delete this.label
                        }
                        o.isDirty = !0,
                        this.label = this.movedLabel,
                        delete this.movedLabel
                    }
                    ,
                    m
                }(),
                o
            }
            )),
            L(o, "Core/Axis/Axis.js", [o["Core/Animation/AnimationUtilities.js"], o["Core/Color/Color.js"], o["Core/Color/Palette.js"], o["Core/DefaultOptions.js"], o["Core/Foundation.js"], o["Core/Globals.js"], o["Core/Utilities.js"], o["Core/Axis/AxisDefaults.js"], o["Core/Axis/Tick.js"]], (function(i, o, s, p, C, S, M, T, P) {
                var O = i.animObject
                  , D = C.registerEventOptions
                  , j = S.deg2rad
                  , R = p.defaultOptions
                  , X = M.arrayMax
                  , Y = M.arrayMin
                  , _ = M.clamp
                  , F = M.correctFloat
                  , U = M.defined
                  , V = M.destroyObjectProperties
                  , Z = M.erase
                  , $ = M.error
                  , Q = M.extend
                  , tt = M.fireEvent
                  , et = M.getMagnitude
                  , it = M.isArray
                  , ot = M.isNumber
                  , st = M.isString
                  , rt = M.merge
                  , nt = M.normalizeTickInterval
                  , at = M.objectEach
                  , ht = M.pick
                  , lt = M.relativeLength
                  , ct = M.removeEvent
                  , dt = M.splat
                  , pt = M.syncTimeout;
                return i = function() {
                    function a(i, o) {
                        this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0,
                        this.init(i, o)
                    }
                    return a.prototype.init = function(i, o) {
                        var s = o.isX;
                        this.chart = i,
                        this.horiz = i.inverted && !this.isZAxis ? !s : s,
                        this.isXAxis = s,
                        this.coll = this.coll || (s ? "xAxis" : "yAxis"),
                        tt(this, "init", {
                            userOptions: o
                        }),
                        this.opposite = ht(o.opposite, this.opposite),
                        this.side = ht(o.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3),
                        this.setOptions(o);
                        var p = this.options
                          , C = p.labels
                          , S = p.type;
                        this.userOptions = o,
                        this.minPixelPadding = 0,
                        this.reversed = ht(p.reversed, this.reversed),
                        this.visible = p.visible,
                        this.zoomEnabled = p.zoomEnabled,
                        this.hasNames = "category" === S || !0 === p.categories,
                        this.categories = p.categories || this.hasNames,
                        this.names || (this.names = [],
                        this.names.keys = {}),
                        this.plotLinesAndBandsGroups = {},
                        this.positiveValuesOnly = !!this.logarithmic,
                        this.isLinked = U(p.linkedTo),
                        this.ticks = {},
                        this.labelEdge = [],
                        this.minorTicks = {},
                        this.plotLinesAndBands = [],
                        this.alternateBands = {},
                        this.len = 0,
                        this.minRange = this.userMinRange = p.minRange || p.maxZoom,
                        this.range = p.range,
                        this.offset = p.offset || 0,
                        this.min = this.max = null,
                        o = ht(p.crosshair, dt(i.options.tooltip.crosshairs)[s ? 0 : 1]),
                        this.crosshair = !0 === o ? {} : o,
                        -1 === i.axes.indexOf(this) && (s ? i.axes.splice(i.xAxis.length, 0, this) : i.axes.push(this),
                        i[this.coll].push(this)),
                        this.series = this.series || [],
                        i.inverted && !this.isZAxis && s && void 0 === this.reversed && (this.reversed = !0),
                        this.labelRotation = ot(C.rotation) ? C.rotation : void 0,
                        D(this, p),
                        tt(this, "afterInit")
                    }
                    ,
                    a.prototype.setOptions = function(i) {
                        this.options = rt(T.defaultXAxisOptions, "yAxis" === this.coll && T.defaultYAxisOptions, [T.defaultTopAxisOptions, T.defaultRightAxisOptions, T.defaultBottomAxisOptions, T.defaultLeftAxisOptions][this.side], rt(R[this.coll], i)),
                        tt(this, "afterSetOptions", {
                            userOptions: i
                        })
                    }
                    ,
                    a.prototype.defaultLabelFormatter = function(i) {
                        var o = this.axis;
                        i = this.chart.numberFormatter;
                        var s = ot(this.value) ? this.value : NaN
                          , p = o.chart.time
                          , C = this.dateTimeLabelFormat
                          , S = R.lang
                          , M = S.numericSymbols;
                        S = S.numericSymbolMagnitude || 1e3;
                        var T = o.logarithmic ? Math.abs(s) : o.tickInterval
                          , P = M && M.length;
                        if (o.categories)
                            var O = "" + this.value;
                        else if (C)
                            O = p.dateFormat(C, s);
                        else if (P && 1e3 <= T)
                            for (; P-- && void 0 === O; )
                                T >= (o = Math.pow(S, P + 1)) && 0 == 10 * s % o && null !== M[P] && 0 !== s && (O = i(s / o, -1) + M[P]);
                        return void 0 === O && (O = 1e4 <= Math.abs(s) ? i(s, -1) : i(s, -1, void 0, "")),
                        O
                    }
                    ,
                    a.prototype.getSeriesExtremes = function() {
                        var i, o = this, s = o.chart;
                        tt(this, "getSeriesExtremes", null, (function() {
                            o.hasVisibleSeries = !1,
                            o.dataMin = o.dataMax = o.threshold = null,
                            o.softThreshold = !o.isXAxis,
                            o.stacking && o.stacking.buildStacks(),
                            o.series.forEach((function(p) {
                                if (p.visible || !s.options.chart.ignoreHiddenSeries) {
                                    var C = p.options
                                      , S = C.threshold;
                                    if (o.hasVisibleSeries = !0,
                                    o.positiveValuesOnly && 0 >= S && (S = null),
                                    o.isXAxis) {
                                        if ((C = p.xData).length) {
                                            C = o.logarithmic ? C.filter(o.validatePositiveValue) : C;
                                            var M = (i = p.getXExtremes(C)).min
                                              , T = i.max;
                                            ot(M) || M instanceof Date || (C = C.filter(ot),
                                            M = (i = p.getXExtremes(C)).min,
                                            T = i.max),
                                            C.length && (o.dataMin = Math.min(ht(o.dataMin, M), M),
                                            o.dataMax = Math.max(ht(o.dataMax, T), T))
                                        }
                                    } else
                                        p = p.applyExtremes(),
                                        ot(p.dataMin) && (M = p.dataMin,
                                        o.dataMin = Math.min(ht(o.dataMin, M), M)),
                                        ot(p.dataMax) && (T = p.dataMax,
                                        o.dataMax = Math.max(ht(o.dataMax, T), T)),
                                        U(S) && (o.threshold = S),
                                        (!C.softThreshold || o.positiveValuesOnly) && (o.softThreshold = !1)
                                }
                            }
                            ))
                        }
                        )),
                        tt(this, "afterGetSeriesExtremes")
                    }
                    ,
                    a.prototype.translate = function(i, o, s, p, C, S) {
                        var M = this.linkedParent || this
                          , T = p && M.old ? M.old.min : M.min
                          , P = M.minPixelPadding;
                        C = (M.isOrdinal || M.brokenAxis && M.brokenAxis.hasBreaks || M.logarithmic && C) && M.lin2val;
                        var O = 1
                          , D = 0;
                        return (p = p && M.old ? M.old.transA : M.transA) || (p = M.transA),
                        s && (O *= -1,
                        D = M.len),
                        M.reversed && (D -= (O *= -1) * (M.sector || M.len)),
                        o ? (i = (i * O + D - P) / p + T,
                        C && (i = M.lin2val(i))) : (C && (i = M.val2lin(i)),
                        i = ot(T) ? O * (i - T) * p + D + O * P + (ot(S) ? p * S : 0) : void 0),
                        i
                    }
                    ,
                    a.prototype.toPixels = function(i, o) {
                        return this.translate(i, !1, !this.horiz, null, !0) + (o ? 0 : this.pos)
                    }
                    ,
                    a.prototype.toValue = function(i, o) {
                        return this.translate(i - (o ? 0 : this.pos), !0, !this.horiz, null, !0)
                    }
                    ,
                    a.prototype.getPlotLinePath = function(i) {
                        function a(i, o, s) {
                            return ("pass" !== V && i < o || i > s) && (V ? i = _(i, o, s) : S = !0),
                            i
                        }
                        var o, s, p, C, S, M = this, T = M.chart, P = M.left, O = M.top, D = i.old, j = i.value, R = i.lineWidth, X = D && T.oldChartHeight || T.chartHeight, Y = D && T.oldChartWidth || T.chartWidth, F = M.transB, U = i.translatedValue, V = i.force;
                        return i = {
                            value: j,
                            lineWidth: R,
                            old: D,
                            force: V,
                            acrossPanes: i.acrossPanes,
                            translatedValue: U
                        },
                        tt(this, "getPlotLinePath", i, (function(i) {
                            U = ht(U, M.translate(j, null, null, D)),
                            U = _(U, -1e5, 1e5),
                            o = p = Math.round(U + F),
                            s = C = Math.round(X - U - F),
                            ot(U) ? M.horiz ? (s = O,
                            C = X - M.bottom,
                            o = p = a(o, P, P + M.width)) : (o = P,
                            p = Y - M.right,
                            s = C = a(s, O, O + M.height)) : (S = !0,
                            V = !1),
                            i.path = S && !V ? null : T.renderer.crispLine([["M", o, s], ["L", p, C]], R || 1)
                        }
                        )),
                        i.path
                    }
                    ,
                    a.prototype.getLinearTickPositions = function(i, o, s) {
                        var p = F(Math.floor(o / i) * i);
                        s = F(Math.ceil(s / i) * i);
                        var C, S = [];
                        if (F(p + i) === p && (C = 20),
                        this.single)
                            return [o];
                        for (o = p; o <= s && (S.push(o),
                        (o = F(o + i, C)) !== M); )
                            var M = o;
                        return S
                    }
                    ,
                    a.prototype.getMinorTickInterval = function() {
                        var i = this.options;
                        return !0 === i.minorTicks ? ht(i.minorTickInterval, "auto") : !1 === i.minorTicks ? null : i.minorTickInterval
                    }
                    ,
                    a.prototype.getMinorTickPositions = function() {
                        var i = this.options
                          , o = this.tickPositions
                          , s = this.minorTickInterval
                          , p = this.pointRangePadding || 0
                          , C = this.min - p
                          , S = (p = this.max + p) - C
                          , M = [];
                        if (S && S / s < this.len / 3) {
                            var T = this.logarithmic;
                            if (T)
                                this.paddedTicks.forEach((function(i, o, p) {
                                    o && M.push.apply(M, T.getLogTickPositions(s, p[o - 1], p[o], !0))
                                }
                                ));
                            else if (this.dateTime && "auto" === this.getMinorTickInterval())
                                M = M.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(s), C, p, i.startOfWeek));
                            else
                                for (i = C + (o[0] - C) % s; i <= p && i !== M[0]; i += s)
                                    M.push(i)
                        }
                        return 0 !== M.length && this.trimTicks(M),
                        M
                    }
                    ,
                    a.prototype.adjustForMinRange = function() {
                        var i, o, s, p, C = this.options, S = this.logarithmic, M = this.min, T = this.max, P = 0;
                        if (this.isXAxis && void 0 === this.minRange && !S && (U(C.min) || U(C.max) ? this.minRange = null : (this.series.forEach((function(C) {
                            if (s = C.xData,
                            p = C.xIncrement ? 1 : s.length - 1,
                            1 < s.length)
                                for (i = p; 0 < i; i--)
                                    o = s[i] - s[i - 1],
                                    (!P || o < P) && (P = o)
                        }
                        )),
                        this.minRange = Math.min(5 * P, this.dataMax - this.dataMin))),
                        T - M < this.minRange) {
                            var O = this.dataMax - this.dataMin >= this.minRange
                              , D = this.minRange
                              , j = (D - T + M) / 2;
                            j = [M - j, ht(C.min, M - j)],
                            O && (j[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin),
                            T = [(M = X(j)) + D, ht(C.max, M + D)],
                            O && (T[2] = S ? S.log2lin(this.dataMax) : this.dataMax),
                            (T = Y(T)) - M < D && (j[0] = T - D,
                            j[1] = ht(C.min, T - D),
                            M = X(j))
                        }
                        this.min = M,
                        this.max = T
                    }
                    ,
                    a.prototype.getClosest = function() {
                        var i;
                        return this.categories ? i = 1 : this.series.forEach((function(o) {
                            var s = o.closestPointRange
                              , p = o.visible || !o.chart.options.chart.ignoreHiddenSeries;
                            !o.noSharedTooltip && U(s) && p && (i = U(i) ? Math.min(i, s) : s)
                        }
                        )),
                        i
                    }
                    ,
                    a.prototype.nameToX = function(i) {
                        var o = it(this.categories)
                          , s = o ? this.categories : this.names
                          , p = i.options.x;
                        if (i.series.requireSorting = !1,
                        U(p) || (p = this.options.uniqueNames ? o ? s.indexOf(i.name) : ht(s.keys[i.name], -1) : i.series.autoIncrement()),
                        -1 === p) {
                            if (!o)
                                var C = s.length
                        } else
                            C = p;
                        return void 0 !== C && (this.names[C] = i.name,
                        this.names.keys[i.name] = C),
                        C
                    }
                    ,
                    a.prototype.updateNames = function() {
                        var i = this
                          , o = this.names;
                        0 < o.length && (Object.keys(o.keys).forEach((function(i) {
                            delete o.keys[i]
                        }
                        )),
                        o.length = 0,
                        this.minRange = this.userMinRange,
                        (this.series || []).forEach((function(o) {
                            o.xIncrement = null,
                            o.points && !o.isDirtyData || (i.max = Math.max(i.max, o.xData.length - 1),
                            o.processData(),
                            o.generatePoints()),
                            o.data.forEach((function(s, p) {
                                if (s && s.options && void 0 !== s.name) {
                                    var C = i.nameToX(s);
                                    void 0 !== C && C !== s.x && (s.x = C,
                                    o.xData[p] = C)
                                }
                            }
                            ))
                        }
                        )))
                    }
                    ,
                    a.prototype.setAxisTranslation = function() {
                        var i = this
                          , o = i.max - i.min
                          , s = i.linkedParent
                          , p = !!i.categories
                          , C = i.isXAxis
                          , S = i.axisPointRange || 0
                          , M = 0
                          , T = 0
                          , P = i.transA;
                        if (C || p || S) {
                            var O = i.getClosest();
                            s ? (M = s.minPointOffset,
                            T = s.pointRangePadding) : i.series.forEach((function(o) {
                                var s = p ? 1 : C ? ht(o.options.pointRange, O, 0) : i.axisPointRange || 0
                                  , P = o.options.pointPlacement;
                                S = Math.max(S, s),
                                i.single && !p || (o = o.is("xrange") ? !C : C,
                                M = Math.max(M, o && st(P) ? 0 : s / 2),
                                T = Math.max(T, o && "on" === P ? 0 : s))
                            }
                            )),
                            s = i.ordinal && i.ordinal.slope && O ? i.ordinal.slope / O : 1,
                            i.minPointOffset = M *= s,
                            i.pointRangePadding = T *= s,
                            i.pointRange = Math.min(S, i.single && p ? 1 : o),
                            C && (i.closestPointRange = O)
                        }
                        i.translationSlope = i.transA = P = i.staticScale || i.len / (o + T || 1),
                        i.transB = i.horiz ? i.left : i.bottom,
                        i.minPixelPadding = P * M,
                        tt(this, "afterSetAxisTranslation")
                    }
                    ,
                    a.prototype.minFromRange = function() {
                        return this.max - this.range
                    }
                    ,
                    a.prototype.setTickInterval = function(i) {
                        var o = this
                          , s = o.chart
                          , p = o.logarithmic
                          , C = o.options
                          , S = o.isXAxis
                          , M = o.isLinked
                          , T = C.tickPixelInterval
                          , P = o.categories
                          , O = o.softThreshold
                          , D = C.maxPadding
                          , j = C.minPadding
                          , R = C.tickInterval
                          , X = ot(o.threshold) ? o.threshold : null;
                        o.dateTime || P || M || this.getTickAmount();
                        var Y = ht(o.userMin, C.min)
                          , _ = ht(o.userMax, C.max);
                        if (M) {
                            o.linkedParent = s[o.coll][C.linkedTo];
                            var V = o.linkedParent.getExtremes();
                            o.min = ht(V.min, V.dataMin),
                            o.max = ht(V.max, V.dataMax),
                            C.type !== o.linkedParent.options.type && $(11, 1, s)
                        } else {
                            if (O && U(X))
                                if (o.dataMin >= X)
                                    V = X,
                                    j = 0;
                                else if (o.dataMax <= X) {
                                    var Z = X;
                                    D = 0
                                }
                            o.min = ht(Y, V, o.dataMin),
                            o.max = ht(_, Z, o.dataMax)
                        }
                        p && (o.positiveValuesOnly && !i && 0 >= Math.min(o.min, ht(o.dataMin, o.min)) && $(10, 1, s),
                        o.min = F(p.log2lin(o.min), 16),
                        o.max = F(p.log2lin(o.max), 16)),
                        o.range && U(o.max) && (o.userMin = o.min = Y = Math.max(o.dataMin, o.minFromRange()),
                        o.userMax = _ = o.max,
                        o.range = null),
                        tt(o, "foundExtremes"),
                        o.beforePadding && o.beforePadding(),
                        o.adjustForMinRange(),
                        !(P || o.axisPointRange || o.stacking && o.stacking.usePercentage || M) && U(o.min) && U(o.max) && (s = o.max - o.min) && (!U(Y) && j && (o.min -= s * j),
                        !U(_) && D && (o.max += s * D)),
                        ot(o.userMin) || (ot(C.softMin) && C.softMin < o.min && (o.min = Y = C.softMin),
                        ot(C.floor) && (o.min = Math.max(o.min, C.floor))),
                        ot(o.userMax) || (ot(C.softMax) && C.softMax > o.max && (o.max = _ = C.softMax),
                        ot(C.ceiling) && (o.max = Math.min(o.max, C.ceiling))),
                        O && U(o.dataMin) && (X = X || 0,
                        !U(Y) && o.min < X && o.dataMin >= X ? o.min = o.options.minRange ? Math.min(X, o.max - o.minRange) : X : !U(_) && o.max > X && o.dataMax <= X && (o.max = o.options.minRange ? Math.max(X, o.min + o.minRange) : X)),
                        ot(o.min) && ot(o.max) && !this.chart.polar && o.min > o.max && (U(o.options.min) ? o.max = o.min : U(o.options.max) && (o.min = o.max)),
                        o.tickInterval = o.min === o.max || void 0 === o.min || void 0 === o.max ? 1 : M && o.linkedParent && !R && T === o.linkedParent.options.tickPixelInterval ? R = o.linkedParent.tickInterval : ht(R, this.tickAmount ? (o.max - o.min) / Math.max(this.tickAmount - 1, 1) : void 0, P ? 1 : (o.max - o.min) * T / Math.max(o.len, T)),
                        S && !i && o.series.forEach((function(i) {
                            i.processData(o.min !== (o.old && o.old.min) || o.max !== (o.old && o.old.max))
                        }
                        )),
                        o.setAxisTranslation(),
                        tt(this, "initialAxisTranslation"),
                        o.pointRange && !R && (o.tickInterval = Math.max(o.pointRange, o.tickInterval)),
                        i = ht(C.minTickInterval, o.dateTime && !o.series.some((function(i) {
                            return i.noSharedTooltip
                        }
                        )) ? o.closestPointRange : 0),
                        !R && o.tickInterval < i && (o.tickInterval = i),
                        o.dateTime || o.logarithmic || R || (o.tickInterval = nt(o.tickInterval, void 0, et(o.tickInterval), ht(C.allowDecimals, .5 > o.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount)),
                        this.tickAmount || (o.tickInterval = o.unsquish()),
                        this.setTickPositions()
                    }
                    ,
                    a.prototype.setTickPositions = function() {
                        var i = this.options
                          , o = i.tickPositions
                          , s = this.getMinorTickInterval()
                          , p = this.hasVerticalPanning()
                          , C = "colorAxis" === this.coll
                          , S = (C || !p) && i.startOnTick;
                        p = (C || !p) && i.endOnTick,
                        C = i.tickPositioner,
                        this.tickmarkOffset = this.categories && "between" === i.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0,
                        this.minorTickInterval = "auto" === s && this.tickInterval ? this.tickInterval / 5 : s,
                        this.single = this.min === this.max && U(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== i.allowDecimals),
                        this.tickPositions = s = o && o.slice(),
                        !s && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? s = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, i.units), this.min, this.max, i.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (s = [this.min, this.max],
                        $(19, !1, this.chart)),
                        s.length > this.len && (s = [s[0], s.pop()])[0] === s[1] && (s.length = 1),
                        this.tickPositions = s,
                        C && (C = C.apply(this, [this.min, this.max]))) && (this.tickPositions = s = C),
                        this.paddedTicks = s.slice(0),
                        this.trimTicks(s, S, p),
                        this.isLinked || (this.single && 2 > s.length && !this.categories && !this.series.some((function(i) {
                            return i.is("heatmap") && "between" === i.options.pointPlacement
                        }
                        )) && (this.min -= .5,
                        this.max += .5),
                        o || C || this.adjustTickAmount()),
                        tt(this, "afterSetTickPositions")
                    }
                    ,
                    a.prototype.trimTicks = function(i, o, s) {
                        var p = i[0]
                          , C = i[i.length - 1]
                          , S = !this.isOrdinal && this.minPointOffset || 0;
                        if (tt(this, "trimTicks"),
                        !this.isLinked) {
                            if (o && -1 / 0 !== p)
                                this.min = p;
                            else
                                for (; this.min - S > i[0]; )
                                    i.shift();
                            if (s)
                                this.max = C;
                            else
                                for (; this.max + S < i[i.length - 1]; )
                                    i.pop();
                            0 === i.length && U(p) && !this.options.tickPositions && i.push((C + p) / 2)
                        }
                    }
                    ,
                    a.prototype.alignToOthers = function() {
                        var i, o = {}, s = this.options;
                        return !1 !== this.chart.options.chart.alignTicks && s.alignTicks && !1 !== s.startOnTick && !1 !== s.endOnTick && !this.logarithmic && this.chart[this.coll].forEach((function(s) {
                            var p = s.options;
                            p = [s.horiz ? p.left : p.top, p.width, p.height, p.pane].join(),
                            s.series.length && (o[p] ? i = !0 : o[p] = 1)
                        }
                        )),
                        i
                    }
                    ,
                    a.prototype.getTickAmount = function() {
                        var i = this.options
                          , o = i.tickPixelInterval
                          , s = i.tickAmount;
                        !U(i.tickInterval) && !s && this.len < o && !this.isRadial && !this.logarithmic && i.startOnTick && i.endOnTick && (s = 2),
                        !s && this.alignToOthers() && (s = Math.ceil(this.len / o) + 1),
                        4 > s && (this.finalTickAmt = s,
                        s = 5),
                        this.tickAmount = s
                    }
                    ,
                    a.prototype.adjustTickAmount = function() {
                        var i = this.options
                          , o = this.tickInterval
                          , s = this.tickPositions
                          , p = this.tickAmount
                          , C = this.finalTickAmt
                          , S = s && s.length
                          , M = ht(this.threshold, this.softThreshold ? 0 : null);
                        if (this.hasData() && ot(this.min) && ot(this.max)) {
                            if (S < p) {
                                for (; s.length < p; )
                                    s.length % 2 || this.min === M ? s.push(F(s[s.length - 1] + o)) : s.unshift(F(s[0] - o));
                                this.transA *= (S - 1) / (p - 1),
                                this.min = i.startOnTick ? s[0] : Math.min(this.min, s[0]),
                                this.max = i.endOnTick ? s[s.length - 1] : Math.max(this.max, s[s.length - 1])
                            } else
                                S > p && (this.tickInterval *= 2,
                                this.setTickPositions());
                            if (U(C)) {
                                for (o = i = s.length; o--; )
                                    (3 === C && 1 == o % 2 || 2 >= C && 0 < o && o < i - 1) && s.splice(o, 1);
                                this.finalTickAmt = void 0
                            }
                        }
                    }
                    ,
                    a.prototype.setScale = function() {
                        var i = !1
                          , o = !1;
                        this.series.forEach((function(s) {
                            i = i || s.isDirtyData || s.isDirty,
                            o = o || s.xAxis && s.xAxis.isDirty || !1
                        }
                        )),
                        this.setAxisSize();
                        var s = this.len !== (this.old && this.old.len);
                        s || i || o || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(),
                        this.forceRedraw = !1,
                        this.getSeriesExtremes(),
                        this.setTickInterval(),
                        this.isDirty || (this.isDirty = s || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks(),
                        i && this.panningState && (this.panningState.isDirty = !0),
                        tt(this, "afterSetScale")
                    }
                    ,
                    a.prototype.setExtremes = function(i, o, s, p, C) {
                        var S = this
                          , M = S.chart;
                        s = ht(s, !0),
                        S.series.forEach((function(i) {
                            delete i.kdTree
                        }
                        )),
                        C = Q(C, {
                            min: i,
                            max: o
                        }),
                        tt(S, "setExtremes", C, (function() {
                            S.userMin = i,
                            S.userMax = o,
                            S.eventArgs = C,
                            s && M.redraw(p)
                        }
                        ))
                    }
                    ,
                    a.prototype.zoom = function(i, o) {
                        var s = this
                          , p = this.dataMin
                          , C = this.dataMax
                          , S = this.options
                          , M = Math.min(p, ht(S.min, p))
                          , T = Math.max(C, ht(S.max, C));
                        return tt(this, "zoom", i = {
                            newMin: i,
                            newMax: o
                        }, (function(i) {
                            var o = i.newMin
                              , S = i.newMax;
                            o === s.min && S === s.max || (s.allowZoomOutside || (U(p) && (o < M && (o = M),
                            o > T && (o = T)),
                            U(C) && (S < M && (S = M),
                            S > T && (S = T))),
                            s.displayBtn = void 0 !== o || void 0 !== S,
                            s.setExtremes(o, S, !1, void 0, {
                                trigger: "zoom"
                            })),
                            i.zoomed = !0
                        }
                        )),
                        i.zoomed
                    }
                    ,
                    a.prototype.setAxisSize = function() {
                        var i = this.chart
                          , o = this.options
                          , s = o.offsets || [0, 0, 0, 0]
                          , p = this.horiz
                          , C = this.width = Math.round(lt(ht(o.width, i.plotWidth - s[3] + s[1]), i.plotWidth))
                          , S = this.height = Math.round(lt(ht(o.height, i.plotHeight - s[0] + s[2]), i.plotHeight))
                          , M = this.top = Math.round(lt(ht(o.top, i.plotTop + s[0]), i.plotHeight, i.plotTop));
                        o = this.left = Math.round(lt(ht(o.left, i.plotLeft + s[3]), i.plotWidth, i.plotLeft)),
                        this.bottom = i.chartHeight - S - M,
                        this.right = i.chartWidth - C - o,
                        this.len = Math.max(p ? C : S, 0),
                        this.pos = p ? o : M
                    }
                    ,
                    a.prototype.getExtremes = function() {
                        var i = this.logarithmic;
                        return {
                            min: i ? F(i.lin2log(this.min)) : this.min,
                            max: i ? F(i.lin2log(this.max)) : this.max,
                            dataMin: this.dataMin,
                            dataMax: this.dataMax,
                            userMin: this.userMin,
                            userMax: this.userMax
                        }
                    }
                    ,
                    a.prototype.getThreshold = function(i) {
                        var o = this.logarithmic
                          , s = o ? o.lin2log(this.min) : this.min;
                        return o = o ? o.lin2log(this.max) : this.max,
                        null === i || -1 / 0 === i ? i = s : 1 / 0 === i ? i = o : s > i ? i = s : o < i && (i = o),
                        this.translate(i, 0, 1, 0, 1)
                    }
                    ,
                    a.prototype.autoLabelAlign = function(i) {
                        var o = (ht(i, 0) - 90 * this.side + 720) % 360;
                        return tt(this, "autoLabelAlign", i = {
                            align: "center"
                        }, (function(i) {
                            15 < o && 165 > o ? i.align = "right" : 195 < o && 345 > o && (i.align = "left")
                        }
                        )),
                        i.align
                    }
                    ,
                    a.prototype.tickSize = function(i) {
                        var o = this.options
                          , s = ht(o["tick" === i ? "tickWidth" : "minorTickWidth"], "tick" === i && this.isXAxis && !this.categories ? 1 : 0)
                          , p = o["tick" === i ? "tickLength" : "minorTickLength"];
                        if (s && p) {
                            "inside" === o[i + "Position"] && (p = -p);
                            var C = [p, s]
                        }
                        return tt(this, "afterTickSize", i = {
                            tickSize: C
                        }),
                        i.tickSize
                    }
                    ,
                    a.prototype.labelMetrics = function() {
                        var i = this.tickPositions && this.tickPositions[0] || 0;
                        return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[i] && this.ticks[i].label)
                    }
                    ,
                    a.prototype.unsquish = function() {
                        var i, o, s = this.options.labels, p = this.horiz, C = this.tickInterval, S = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / C), M = s.rotation, T = this.labelMetrics(), P = Math.max(this.max - this.min, 0), f = function(i) {
                            var o = i / (S || 1);
                            return (o = 1 < o ? Math.ceil(o) : 1) * C > P && 1 / 0 !== i && 1 / 0 !== S && P && (o = Math.ceil(P / C)),
                            F(o * C)
                        }, O = C, D = Number.MAX_VALUE;
                        if (p) {
                            if (!s.staggerLines && !s.step)
                                if (ot(M))
                                    var R = [M];
                                else
                                    S < s.autoRotationLimit && (R = s.autoRotation);
                            R && R.forEach((function(s) {
                                if (s === M || s && -90 <= s && 90 >= s) {
                                    var p = (o = f(Math.abs(T.h / Math.sin(j * s)))) + Math.abs(s / 360);
                                    p < D && (D = p,
                                    i = s,
                                    O = o)
                                }
                            }
                            ))
                        } else
                            s.step || (O = f(T.h));
                        return this.autoRotation = R,
                        this.labelRotation = ht(i, ot(M) ? M : 0),
                        O
                    }
                    ,
                    a.prototype.getSlotWidth = function(i) {
                        var o = this.chart
                          , s = this.horiz
                          , p = this.options.labels
                          , C = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1)
                          , S = o.margin[3];
                        if (i && ot(i.slotWidth))
                            return i.slotWidth;
                        if (s && 2 > p.step)
                            return p.rotation ? 0 : (this.staggerLines || 1) * this.len / C;
                        if (!s) {
                            if (void 0 !== (i = p.style.width))
                                return parseInt(String(i), 10);
                            if (S)
                                return S - o.spacing[3]
                        }
                        return .33 * o.chartWidth
                    }
                    ,
                    a.prototype.renderUnsquish = function() {
                        var i = this.chart
                          , o = i.renderer
                          , s = this.tickPositions
                          , p = this.ticks
                          , C = this.options.labels
                          , S = C.style
                          , M = this.horiz
                          , T = this.getSlotWidth()
                          , P = Math.max(1, Math.round(T - 2 * C.padding))
                          , O = {}
                          , D = this.labelMetrics()
                          , j = S.textOverflow
                          , R = 0;
                        if (st(C.rotation) || (O.rotation = C.rotation || 0),
                        s.forEach((function(i) {
                            (i = p[i]).movedLabel && i.replaceMovedLabel(),
                            i && i.label && i.label.textPxLength > R && (R = i.label.textPxLength)
                        }
                        )),
                        this.maxLabelLength = R,
                        this.autoRotation)
                            R > P && R > D.h ? O.rotation = this.labelRotation : this.labelRotation = 0;
                        else if (T) {
                            var X = P;
                            if (!j) {
                                var Y = "clip";
                                for (P = s.length; !M && P--; ) {
                                    var _ = s[P];
                                    (_ = p[_].label) && (_.styles && "ellipsis" === _.styles.textOverflow ? _.css({
                                        textOverflow: "clip"
                                    }) : _.textPxLength > T && _.css({
                                        width: T + "px"
                                    }),
                                    _.getBBox().height > this.len / s.length - (D.h - D.f) && (_.specificTextOverflow = "ellipsis"))
                                }
                            }
                        }
                        O.rotation && (X = R > .5 * i.chartHeight ? .33 * i.chartHeight : R,
                        j || (Y = "ellipsis")),
                        (this.labelAlign = C.align || this.autoLabelAlign(this.labelRotation)) && (O.align = this.labelAlign),
                        s.forEach((function(i) {
                            var o = (i = p[i]) && i.label
                              , s = S.width
                              , C = {};
                            o && (o.attr(O),
                            i.shortenLabel ? i.shortenLabel() : X && !s && "nowrap" !== S.whiteSpace && (X < o.textPxLength || "SPAN" === o.element.tagName) ? (C.width = X + "px",
                            j || (C.textOverflow = o.specificTextOverflow || Y),
                            o.css(C)) : o.styles && o.styles.width && !C.width && !s && o.css({
                                width: null
                            }),
                            delete o.specificTextOverflow,
                            i.rotation = O.rotation)
                        }
                        ), this),
                        this.tickRotCorr = o.rotCorr(D.b, this.labelRotation || 0, 0 !== this.side)
                    }
                    ,
                    a.prototype.hasData = function() {
                        return this.series.some((function(i) {
                            return i.hasData()
                        }
                        )) || this.options.showEmpty && U(this.min) && U(this.max)
                    }
                    ,
                    a.prototype.addTitle = function(i) {
                        var o, s = this.chart.renderer, p = this.horiz, C = this.opposite, S = this.options.title, M = this.chart.styledMode;
                        this.axisTitle || ((o = S.textAlign) || (o = (p ? {
                            low: "left",
                            middle: "center",
                            high: "right"
                        } : {
                            low: C ? "right" : "left",
                            middle: "center",
                            high: C ? "left" : "right"
                        })[S.align]),
                        this.axisTitle = s.text(S.text || "", 0, 0, S.useHTML).attr({
                            zIndex: 7,
                            rotation: S.rotation,
                            align: o
                        }).addClass("highcharts-axis-title"),
                        M || this.axisTitle.css(rt(S.style)),
                        this.axisTitle.add(this.axisGroup),
                        this.axisTitle.isNew = !0),
                        M || S.style.width || this.isRadial || this.axisTitle.css({
                            width: this.len + "px"
                        }),
                        this.axisTitle[i ? "show" : "hide"](i)
                    }
                    ,
                    a.prototype.generateTick = function(i) {
                        var o = this.ticks;
                        o[i] ? o[i].addLabel() : o[i] = new P(this,i)
                    }
                    ,
                    a.prototype.getOffset = function() {
                        var i = this
                          , o = this
                          , s = o.chart
                          , p = s.renderer
                          , C = o.options
                          , S = o.tickPositions
                          , M = o.ticks
                          , T = o.horiz
                          , P = o.side
                          , O = s.inverted && !o.isZAxis ? [1, 0, 3, 2][P] : P
                          , D = o.hasData()
                          , j = C.title
                          , R = C.labels
                          , X = s.axisOffset;
                        s = s.clipOffset;
                        var Y, _ = [-1, 1, 1, -1][P], F = C.className, V = o.axisParent, Z = 0, $ = 0, Q = 0;
                        if (o.showAxis = Y = D || C.showEmpty,
                        o.staggerLines = o.horiz && R.staggerLines || void 0,
                        !o.axisGroup) {
                            var J = function(o, s, C) {
                                return p.g(o).attr({
                                    zIndex: C
                                }).addClass("highcharts-" + i.coll.toLowerCase() + s + " " + (i.isRadial ? "highcharts-radial-axis" + s + " " : "") + (F || "")).add(V)
                            };
                            o.gridGroup = J("grid", "-grid", C.gridZIndex),
                            o.axisGroup = J("axis", "", C.zIndex),
                            o.labelGroup = J("axis-labels", "-labels", R.zIndex)
                        }
                        if (D || o.isLinked ? (S.forEach((function(i) {
                            o.generateTick(i)
                        }
                        )),
                        o.renderUnsquish(),
                        o.reserveSpaceDefault = 0 === P || 2 === P || {
                            1: "left",
                            3: "right"
                        }[P] === o.labelAlign,
                        ht(R.reserveSpace, "center" === o.labelAlign || null, o.reserveSpaceDefault) && S.forEach((function(i) {
                            Q = Math.max(M[i].getLabelSize(), Q)
                        }
                        )),
                        o.staggerLines && (Q *= o.staggerLines),
                        o.labelOffset = Q * (o.opposite ? -1 : 1)) : at(M, (function(i, o) {
                            i.destroy(),
                            delete M[o]
                        }
                        )),
                        j && j.text && !1 !== j.enabled && (o.addTitle(Y),
                        Y && !1 !== j.reserveSpace)) {
                            o.titleOffset = Z = o.axisTitle.getBBox()[T ? "height" : "width"];
                            var et = j.offset;
                            $ = U(et) ? 0 : ht(j.margin, T ? 5 : 10)
                        }
                        o.renderLine(),
                        o.offset = _ * ht(C.offset, X[P] ? X[P] + (C.margin || 0) : 0),
                        o.tickRotCorr = o.tickRotCorr || {
                            x: 0,
                            y: 0
                        },
                        j = 0 === P ? -o.labelMetrics().h : 2 === P ? o.tickRotCorr.y : 0,
                        D = Math.abs(Q) + $,
                        Q && (D = D - j + _ * (T ? ht(R.y, o.tickRotCorr.y + 8 * _) : R.x)),
                        o.axisTitleMargin = ht(et, D),
                        o.getMaxLabelDimensions && (o.maxLabelDimensions = o.getMaxLabelDimensions(M, S)),
                        T = this.tickSize("tick"),
                        X[P] = Math.max(X[P], (o.axisTitleMargin || 0) + Z + _ * o.offset, D, S && S.length && T ? T[0] + _ * o.offset : 0),
                        C = C.offset ? 0 : 2 * Math.floor(o.axisLine.strokeWidth() / 2),
                        s[O] = Math.max(s[O], C),
                        tt(this, "afterGetOffset")
                    }
                    ,
                    a.prototype.getLinePath = function(i) {
                        var o = this.chart
                          , s = this.opposite
                          , p = this.offset
                          , C = this.horiz
                          , S = this.left + (s ? this.width : 0) + p;
                        return p = o.chartHeight - this.bottom - (s ? this.height : 0) + p,
                        s && (i *= -1),
                        o.renderer.crispLine([["M", C ? this.left : S, C ? p : this.top], ["L", C ? o.chartWidth - this.right : S, C ? p : o.chartHeight - this.bottom]], i)
                    }
                    ,
                    a.prototype.renderLine = function() {
                        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
                        this.chart.styledMode || this.axisLine.attr({
                            stroke: this.options.lineColor,
                            "stroke-width": this.options.lineWidth,
                            zIndex: 7
                        }))
                    }
                    ,
                    a.prototype.getTitlePosition = function() {
                        var i = this.horiz
                          , o = this.left
                          , s = this.top
                          , p = this.len
                          , C = this.options.title
                          , S = i ? o : s
                          , M = this.opposite
                          , T = this.offset
                          , P = C.x
                          , O = C.y
                          , D = this.axisTitle
                          , j = this.chart.renderer.fontMetrics(C.style.fontSize, D);
                        return D = Math.max(D.getBBox(null, 0).height - j.h - 1, 0),
                        p = {
                            low: S + (i ? 0 : p),
                            middle: S + p / 2,
                            high: S + (i ? p : 0)
                        }[C.align],
                        o = (i ? s + this.height : o) + (i ? 1 : -1) * (M ? -1 : 1) * this.axisTitleMargin + [-D, D, j.f, -D][this.side],
                        i = {
                            x: i ? p + P : o + (M ? this.width : 0) + T + P,
                            y: i ? o + O - (M ? this.height : 0) + T : p + O
                        },
                        tt(this, "afterGetTitlePosition", {
                            titlePosition: i
                        }),
                        i
                    }
                    ,
                    a.prototype.renderMinorTick = function(i, o) {
                        var s = this.minorTicks;
                        s[i] || (s[i] = new P(this,i,"minor")),
                        o && s[i].isNew && s[i].render(null, !0),
                        s[i].render(null, !1, 1)
                    }
                    ,
                    a.prototype.renderTick = function(i, o, s) {
                        var p = this.ticks;
                        (!this.isLinked || i >= this.min && i <= this.max || this.grid && this.grid.isColumn) && (p[i] || (p[i] = new P(this,i)),
                        s && p[i].isNew && p[i].render(o, !0, -1),
                        p[i].render(o))
                    }
                    ,
                    a.prototype.render = function() {
                        var i, o, s = this, p = s.chart, C = s.logarithmic, M = s.options, T = s.isLinked, D = s.tickPositions, j = s.axisTitle, R = s.ticks, X = s.minorTicks, Y = s.alternateBands, _ = M.stackLabels, F = M.alternateGridColor, U = s.tickmarkOffset, V = s.axisLine, Z = s.showAxis, $ = O(p.renderer.globalAnimation);
                        if (s.labelEdge.length = 0,
                        s.overlap = !1,
                        [R, X, Y].forEach((function(i) {
                            at(i, (function(i) {
                                i.isActive = !1
                            }
                            ))
                        }
                        )),
                        s.hasData() || T) {
                            var Q = s.chart.hasRendered && s.old && ot(s.old.min);
                            s.minorTickInterval && !s.categories && s.getMinorTickPositions().forEach((function(i) {
                                s.renderMinorTick(i, Q)
                            }
                            )),
                            D.length && (D.forEach((function(i, o) {
                                s.renderTick(i, o, Q)
                            }
                            )),
                            U && (0 === s.min || s.single) && (R[-1] || (R[-1] = new P(s,-1,null,!0)),
                            R[-1].render(-1))),
                            F && D.forEach((function(M, T) {
                                o = void 0 !== D[T + 1] ? D[T + 1] + U : s.max - U,
                                0 == T % 2 && M < s.max && o <= s.max + (p.polar ? -U : U) && (Y[M] || (Y[M] = new S.PlotLineOrBand(s)),
                                i = M + U,
                                Y[M].options = {
                                    from: C ? C.lin2log(i) : i,
                                    to: C ? C.lin2log(o) : o,
                                    color: F,
                                    className: "highcharts-alternate-grid"
                                },
                                Y[M].render(),
                                Y[M].isActive = !0)
                            }
                            )),
                            s._addedPlotLB || (s._addedPlotLB = !0,
                            (M.plotLines || []).concat(M.plotBands || []).forEach((function(i) {
                                s.addPlotBandOrLine(i)
                            }
                            )))
                        }
                        [R, X, Y].forEach((function(i) {
                            var o = []
                              , s = $.duration;
                            at(i, (function(i, s) {
                                i.isActive || (i.render(s, !1, 0),
                                i.isActive = !1,
                                o.push(s))
                            }
                            )),
                            pt((function() {
                                for (var s = o.length; s--; )
                                    i[o[s]] && !i[o[s]].isActive && (i[o[s]].destroy(),
                                    delete i[o[s]])
                            }
                            ), i !== Y && p.hasRendered && s ? s : 0)
                        }
                        )),
                        V && (V[V.isPlaced ? "animate" : "attr"]({
                            d: this.getLinePath(V.strokeWidth())
                        }),
                        V.isPlaced = !0,
                        V[Z ? "show" : "hide"](Z)),
                        j && Z && (M = s.getTitlePosition(),
                        ot(M.y) ? (j[j.isNew ? "attr" : "animate"](M),
                        j.isNew = !1) : (j.attr("y", -9999),
                        j.isNew = !0)),
                        _ && _.enabled && s.stacking && s.stacking.renderStackTotals(),
                        s.old = {
                            len: s.len,
                            max: s.max,
                            min: s.min,
                            transA: s.transA,
                            userMax: s.userMax,
                            userMin: s.userMin
                        },
                        s.isDirty = !1,
                        tt(this, "afterRender")
                    }
                    ,
                    a.prototype.redraw = function() {
                        this.visible && (this.render(),
                        this.plotLinesAndBands.forEach((function(i) {
                            i.render()
                        }
                        ))),
                        this.series.forEach((function(i) {
                            i.isDirty = !0
                        }
                        ))
                    }
                    ,
                    a.prototype.getKeepProps = function() {
                        return this.keepProps || a.keepProps
                    }
                    ,
                    a.prototype.destroy = function(i) {
                        var o = this
                          , s = o.plotLinesAndBands
                          , p = this.eventOptions;
                        if (tt(this, "destroy", {
                            keepEvents: i
                        }),
                        i || ct(o),
                        [o.ticks, o.minorTicks, o.alternateBands].forEach((function(i) {
                            V(i)
                        }
                        )),
                        s)
                            for (i = s.length; i--; )
                                s[i].destroy();
                        for (var C in "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach((function(i) {
                            o[i] && (o[i] = o[i].destroy())
                        }
                        )),
                        o.plotLinesAndBandsGroups)
                            o.plotLinesAndBandsGroups[C] = o.plotLinesAndBandsGroups[C].destroy();
                        at(o, (function(i, s) {
                            -1 === o.getKeepProps().indexOf(s) && delete o[s]
                        }
                        )),
                        this.eventOptions = p
                    }
                    ,
                    a.prototype.drawCrosshair = function(i, p) {
                        var C, S = this.crosshair, M = ht(S && S.snap, !0), T = this.chart, P = this.cross;
                        if (tt(this, "drawCrosshair", {
                            e: i,
                            point: p
                        }),
                        i || (i = this.cross && this.cross.e),
                        S && !1 !== (U(p) || !M)) {
                            if (M ? U(p) && (C = ht("colorAxis" !== this.coll ? p.crosshairPos : null, this.isXAxis ? p.plotX : this.len - p.plotY)) : C = i && (this.horiz ? i.chartX - this.pos : this.len - i.chartY + this.pos),
                            U(C)) {
                                var O = {
                                    value: p && (this.isXAxis ? p.x : ht(p.stackY, p.y)),
                                    translatedValue: C
                                };
                                T.polar && Q(O, {
                                    isCrosshair: !0,
                                    chartX: i && i.chartX,
                                    chartY: i && i.chartY,
                                    point: p
                                }),
                                O = this.getPlotLinePath(O) || null
                            }
                            if (!U(O))
                                return void this.hideCrosshair();
                            M = this.categories && !this.isRadial,
                            P || (this.cross = P = T.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (M ? "category " : "thin ") + (S.className || "")).attr({
                                zIndex: ht(S.zIndex, 2)
                            }).add(),
                            T.styledMode || (P.attr({
                                stroke: S.color || (M ? o.parse(s.highlightColor20).setOpacity(.25).get() : s.neutralColor20),
                                "stroke-width": ht(S.width, 1)
                            }).css({
                                "pointer-events": "none"
                            }),
                            S.dashStyle && P.attr({
                                dashstyle: S.dashStyle
                            }))),
                            P.show().attr({
                                d: O
                            }),
                            M && !S.width && P.attr({
                                "stroke-width": this.transA
                            }),
                            this.cross.e = i
                        } else
                            this.hideCrosshair();
                        tt(this, "afterDrawCrosshair", {
                            e: i,
                            point: p
                        })
                    }
                    ,
                    a.prototype.hideCrosshair = function() {
                        this.cross && this.cross.hide(),
                        tt(this, "afterHideCrosshair")
                    }
                    ,
                    a.prototype.hasVerticalPanning = function() {
                        var i = this.chart.options.chart.panning;
                        return !!(i && i.enabled && /y/.test(i.type))
                    }
                    ,
                    a.prototype.validatePositiveValue = function(i) {
                        return ot(i) && 0 < i
                    }
                    ,
                    a.prototype.update = function(i, o) {
                        var s = this.chart;
                        i = rt(this.userOptions, i),
                        this.destroy(!0),
                        this.init(s, i),
                        s.isDirtyBox = !0,
                        ht(o, !0) && s.redraw()
                    }
                    ,
                    a.prototype.remove = function(i) {
                        for (var o = this.chart, s = this.coll, p = this.series, C = p.length; C--; )
                            p[C] && p[C].remove(!1);
                        Z(o.axes, this),
                        Z(o[s], this),
                        o[s].forEach((function(i, o) {
                            i.options.index = i.userOptions.index = o
                        }
                        )),
                        this.destroy(),
                        o.isDirtyBox = !0,
                        ht(i, !0) && o.redraw()
                    }
                    ,
                    a.prototype.setTitle = function(i, o) {
                        this.update({
                            title: i
                        }, o)
                    }
                    ,
                    a.prototype.setCategories = function(i, o) {
                        this.update({
                            categories: i
                        }, o)
                    }
                    ,
                    a.defaultOptions = T.defaultXAxisOptions,
                    a.keepProps = "extKey hcEvents names series userMax userMin".split(" "),
                    a
                }(),
                i
            }
            )),
            L(o, "Core/Axis/DateTimeAxis.js", [o["Core/Axis/Axis.js"], o["Core/Utilities.js"]], (function(i, o) {
                var s = o.addEvent
                  , p = o.getMagnitude
                  , C = o.normalizeTickInterval
                  , S = o.timeUnits
                  , M = function() {
                    function a(i) {
                        this.axis = i
                    }
                    return a.prototype.normalizeTimeTickInterval = function(i, o) {
                        var s = o || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
                        o = s[s.length - 1];
                        var M, T = S[o[0]], P = o[1];
                        for (M = 0; M < s.length && (o = s[M],
                        T = S[o[0]],
                        P = o[1],
                        !(s[M + 1] && i <= (T * P[P.length - 1] + S[s[M + 1][0]]) / 2)); M++)
                            ;
                        return T === S.year && i < 5 * T && (P = [1, 2, 5]),
                        {
                            unitRange: T,
                            count: i = C(i / T, P, "year" === o[0] ? Math.max(p(i / T), 1) : 1),
                            unitName: o[0]
                        }
                    }
                    ,
                    a
                }();
                return o = function() {
                    function a() {}
                    return a.compose = function(i) {
                        i.keepProps.push("dateTime"),
                        i.prototype.getTimeTicks = function() {
                            return this.chart.time.getTimeTicks.apply(this.chart.time, arguments)
                        }
                        ,
                        s(i, "init", (function(i) {
                            "datetime" !== i.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new M(this))
                        }
                        ))
                    }
                    ,
                    a.AdditionsClass = M,
                    a
                }(),
                o.compose(i),
                o
            }
            )),
            L(o, "Core/Axis/LogarithmicAxis.js", [o["Core/Axis/Axis.js"], o["Core/Utilities.js"]], (function(i, o) {
                var s = o.addEvent
                  , p = o.getMagnitude
                  , C = o.normalizeTickInterval
                  , S = o.pick
                  , M = function() {
                    function a(i) {
                        this.axis = i
                    }
                    return a.prototype.getLogTickPositions = function(i, o, s, M) {
                        var T = this.axis
                          , P = T.len
                          , O = T.options
                          , D = [];
                        if (M || (this.minorAutoInterval = void 0),
                        .5 <= i)
                            i = Math.round(i),
                            D = T.getLinearTickPositions(i, o, s);
                        else if (.08 <= i) {
                            var j, R = Math.floor(o), X = O = void 0;
                            for (P = .3 < i ? [1, 2, 4] : .15 < i ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; R < s + 1 && !X; R++) {
                                var Y = P.length;
                                for (j = 0; j < Y && !X; j++) {
                                    var _ = this.log2lin(this.lin2log(R) * P[j]);
                                    _ > o && (!M || O <= s) && void 0 !== O && D.push(O),
                                    O > s && (X = !0),
                                    O = _
                                }
                            }
                        } else
                            o = this.lin2log(o),
                            s = this.lin2log(s),
                            i = M ? T.getMinorTickInterval() : O.tickInterval,
                            i = S("auto" === i ? null : i, this.minorAutoInterval, O.tickPixelInterval / (M ? 5 : 1) * (s - o) / ((M ? P / T.tickPositions.length : P) || 1)),
                            i = C(i, void 0, p(i)),
                            D = T.getLinearTickPositions(i, o, s).map(this.log2lin),
                            M || (this.minorAutoInterval = i / 5);
                        return M || (T.tickInterval = i),
                        D
                    }
                    ,
                    a.prototype.lin2log = function(i) {
                        return Math.pow(10, i)
                    }
                    ,
                    a.prototype.log2lin = function(i) {
                        return Math.log(i) / Math.LN10
                    }
                    ,
                    a
                }();
                return o = function() {
                    function a() {}
                    return a.compose = function(i) {
                        i.keepProps.push("logarithmic"),
                        s(i, "init", (function(i) {
                            var o = this.logarithmic;
                            "logarithmic" !== i.userOptions.type ? this.logarithmic = void 0 : o || (this.logarithmic = new M(this))
                        }
                        )),
                        s(i, "afterInit", (function() {
                            var i = this.logarithmic;
                            i && (this.lin2val = function(o) {
                                return i.lin2log(o)
                            }
                            ,
                            this.val2lin = function(o) {
                                return i.log2lin(o)
                            }
                            )
                        }
                        ))
                    }
                    ,
                    a
                }(),
                o.compose(i),
                o
            }
            )),
            L(o, "Core/Axis/PlotLineOrBand.js", [o["Core/Axis/Axis.js"], o["Core/Color/Palette.js"], o["Core/Utilities.js"]], (function(i, o, s) {
                var p = s.arrayMax
                  , C = s.arrayMin
                  , S = s.defined
                  , M = s.destroyObjectProperties
                  , T = s.erase
                  , P = s.extend
                  , O = s.fireEvent
                  , D = s.isNumber
                  , j = s.merge
                  , R = s.objectEach
                  , X = s.pick
                  , Y = function() {
                    function a(i, o) {
                        this.axis = i,
                        o && (this.options = o,
                        this.id = o.id)
                    }
                    return a.prototype.render = function() {
                        O(this, "render");
                        var i = this
                          , s = i.axis
                          , p = s.horiz
                          , C = s.logarithmic
                          , M = i.options
                          , T = M.label
                          , P = i.label
                          , D = M.to
                          , Y = M.from
                          , _ = M.value
                          , F = S(Y) && S(D)
                          , U = S(_)
                          , V = i.svgElem
                          , Z = !V
                          , $ = []
                          , Q = M.color
                          , tt = X(M.zIndex, 0)
                          , et = M.events;
                        $ = {
                            class: "highcharts-plot-" + (F ? "band " : "line ") + (M.className || "")
                        };
                        var it = {}
                          , ot = s.chart.renderer
                          , st = F ? "bands" : "lines";
                        if (C && (Y = C.log2lin(Y),
                        D = C.log2lin(D),
                        _ = C.log2lin(_)),
                        s.chart.styledMode || (U ? ($.stroke = Q || o.neutralColor40,
                        $["stroke-width"] = X(M.width, 1),
                        M.dashStyle && ($.dashstyle = M.dashStyle)) : F && ($.fill = Q || o.highlightColor10,
                        M.borderWidth && ($.stroke = M.borderColor,
                        $["stroke-width"] = M.borderWidth))),
                        it.zIndex = tt,
                        st += "-" + tt,
                        (C = s.plotLinesAndBandsGroups[st]) || (s.plotLinesAndBandsGroups[st] = C = ot.g("plot-" + st).attr(it).add()),
                        Z && (i.svgElem = V = ot.path().attr($).add(C)),
                        U)
                            $ = s.getPlotLinePath({
                                value: _,
                                lineWidth: V.strokeWidth(),
                                acrossPanes: M.acrossPanes
                            });
                        else {
                            if (!F)
                                return;
                            $ = s.getPlotBandPath(Y, D, M)
                        }
                        return !i.eventsAdded && et && (R(et, (function(o, s) {
                            V.on(s, (function(o) {
                                et[s].apply(i, [o])
                            }
                            ))
                        }
                        )),
                        i.eventsAdded = !0),
                        (Z || !V.d) && $ && $.length ? V.attr({
                            d: $
                        }) : V && ($ ? (V.show(!0),
                        V.animate({
                            d: $
                        })) : V.d && (V.hide(),
                        P && (i.label = P = P.destroy()))),
                        T && (S(T.text) || S(T.formatter)) && $ && $.length && 0 < s.width && 0 < s.height && !$.isFlat ? (T = j({
                            align: p && F && "center",
                            x: p ? !F && 4 : 10,
                            verticalAlign: !p && F && "middle",
                            y: p ? F ? 16 : 10 : F ? 6 : -4,
                            rotation: p && !F && 90
                        }, T),
                        this.renderLabel(T, $, F, tt)) : P && P.hide(),
                        i
                    }
                    ,
                    a.prototype.renderLabel = function(i, o, s, S) {
                        var M = this.label
                          , T = this.axis.chart.renderer;
                        M || ((M = {
                            align: i.textAlign || i.align,
                            rotation: i.rotation,
                            class: "highcharts-plot-" + (s ? "band" : "line") + "-label " + (i.className || "")
                        }).zIndex = S,
                        S = this.getLabelText(i),
                        this.label = M = T.text(S, 0, 0, i.useHTML).attr(M).add(),
                        this.axis.chart.styledMode || M.css(i.style)),
                        T = o.xBounds || [o[0][1], o[1][1], s ? o[2][1] : o[0][1]],
                        o = o.yBounds || [o[0][2], o[1][2], s ? o[2][2] : o[0][2]],
                        s = C(T),
                        S = C(o),
                        M.align(i, !1, {
                            x: s,
                            y: S,
                            width: p(T) - s,
                            height: p(o) - S
                        }),
                        M.show(!0)
                    }
                    ,
                    a.prototype.getLabelText = function(i) {
                        return S(i.formatter) ? i.formatter.call(this) : i.text
                    }
                    ,
                    a.prototype.destroy = function() {
                        T(this.axis.plotLinesAndBands, this),
                        delete this.axis,
                        M(this)
                    }
                    ,
                    a
                }();
                return P(i.prototype, {
                    getPlotBandPath: function(i, o, s) {
                        void 0 === s && (s = this.options);
                        var p = this.getPlotLinePath({
                            value: o,
                            force: !0,
                            acrossPanes: s.acrossPanes
                        });
                        s = this.getPlotLinePath({
                            value: i,
                            force: !0,
                            acrossPanes: s.acrossPanes
                        });
                        var C = []
                          , S = this.horiz
                          , M = 1;
                        if (i = !D(this.min) || !D(this.max) || i < this.min && o < this.min || i > this.max && o > this.max,
                        s && p) {
                            if (i) {
                                var T = s.toString() === p.toString();
                                M = 0
                            }
                            for (i = 0; i < s.length; i += 2) {
                                o = s[i];
                                var P = s[i + 1]
                                  , O = p[i]
                                  , j = p[i + 1];
                                "M" !== o[0] && "L" !== o[0] || "M" !== P[0] && "L" !== P[0] || "M" !== O[0] && "L" !== O[0] || "M" !== j[0] && "L" !== j[0] || (S && O[1] === o[1] ? (O[1] += M,
                                j[1] += M) : S || O[2] !== o[2] || (O[2] += M,
                                j[2] += M),
                                C.push(["M", o[1], o[2]], ["L", P[1], P[2]], ["L", j[1], j[2]], ["L", O[1], O[2]], ["Z"])),
                                C.isFlat = T
                            }
                        }
                        return C
                    },
                    addPlotBand: function(i) {
                        return this.addPlotBandOrLine(i, "plotBands")
                    },
                    addPlotLine: function(i) {
                        return this.addPlotBandOrLine(i, "plotLines")
                    },
                    addPlotBandOrLine: function(i, o) {
                        var s = this
                          , p = new Y(this,i)
                          , C = this.userOptions;
                        if (this.visible && (p = p.render()),
                        p) {
                            if (this._addedPlotLB || (this._addedPlotLB = !0,
                            (C.plotLines || []).concat(C.plotBands || []).forEach((function(i) {
                                s.addPlotBandOrLine(i)
                            }
                            ))),
                            o) {
                                var S = C[o] || [];
                                S.push(i),
                                C[o] = S
                            }
                            this.plotLinesAndBands.push(p)
                        }
                        return p
                    },
                    removePlotBandOrLine: function(i) {
                        var o = this.plotLinesAndBands
                          , s = this.options
                          , p = this.userOptions;
                        if (o) {
                            for (var C = o.length; C--; )
                                o[C].id === i && o[C].destroy();
                            [s.plotLines || [], p.plotLines || [], s.plotBands || [], p.plotBands || []].forEach((function(o) {
                                for (C = o.length; C--; )
                                    (o[C] || {}).id === i && T(o, o[C])
                            }
                            ))
                        }
                    },
                    removePlotBand: function(i) {
                        this.removePlotBandOrLine(i)
                    },
                    removePlotLine: function(i) {
                        this.removePlotBandOrLine(i)
                    }
                }),
                Y
            }
            )),
            L(o, "Core/Tooltip.js", [o["Core/FormatUtilities.js"], o["Core/Globals.js"], o["Core/Color/Palette.js"], o["Core/Renderer/RendererRegistry.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C) {
                var S = i.format
                  , M = o.doc
                  , T = C.clamp
                  , P = C.css
                  , O = C.defined
                  , D = C.discardElement
                  , j = C.extend
                  , R = C.fireEvent
                  , X = C.isArray
                  , Y = C.isNumber
                  , _ = C.isString
                  , F = C.merge
                  , U = C.pick
                  , V = C.splat
                  , Z = C.syncTimeout
                  , $ = C.timeUnits;
                return i = function() {
                    function a(i, o) {
                        this.container = void 0,
                        this.crosshairs = [],
                        this.distance = 0,
                        this.isHidden = !0,
                        this.isSticky = !1,
                        this.now = {},
                        this.options = {},
                        this.outside = !1,
                        this.chart = i,
                        this.init(i, o)
                    }
                    return a.prototype.applyFilter = function() {
                        var i = this.chart;
                        i.renderer.definition({
                            tagName: "filter",
                            attributes: {
                                id: "drop-shadow-" + i.index,
                                opacity: .5
                            },
                            children: [{
                                tagName: "feGaussianBlur",
                                attributes: {
                                    in: "SourceAlpha",
                                    stdDeviation: 1
                                }
                            }, {
                                tagName: "feOffset",
                                attributes: {
                                    dx: 1,
                                    dy: 1
                                }
                            }, {
                                tagName: "feComponentTransfer",
                                children: [{
                                    tagName: "feFuncA",
                                    attributes: {
                                        type: "linear",
                                        slope: .3
                                    }
                                }]
                            }, {
                                tagName: "feMerge",
                                children: [{
                                    tagName: "feMergeNode"
                                }, {
                                    tagName: "feMergeNode",
                                    attributes: {
                                        in: "SourceGraphic"
                                    }
                                }]
                            }]
                        })
                    }
                    ,
                    a.prototype.bodyFormatter = function(i) {
                        return i.map((function(i) {
                            var o = i.series.tooltipOptions;
                            return (o[(i.point.formatPrefix || "point") + "Formatter"] || i.point.tooltipFormatter).call(i.point, o[(i.point.formatPrefix || "point") + "Format"] || "")
                        }
                        ))
                    }
                    ,
                    a.prototype.cleanSplit = function(i) {
                        this.chart.series.forEach((function(o) {
                            var s = o && o.tt;
                            s && (!s.isActive || i ? o.tt = s.destroy() : s.isActive = !1)
                        }
                        ))
                    }
                    ,
                    a.prototype.defaultFormatter = function(i) {
                        var o = this.points || V(this)
                          , s = [i.tooltipFooterHeaderFormatter(o[0])];
                        return (s = s.concat(i.bodyFormatter(o))).push(i.tooltipFooterHeaderFormatter(o[0], !0)),
                        s
                    }
                    ,
                    a.prototype.destroy = function() {
                        this.label && (this.label = this.label.destroy()),
                        this.split && this.tt && (this.cleanSplit(this.chart, !0),
                        this.tt = this.tt.destroy()),
                        this.renderer && (this.renderer = this.renderer.destroy(),
                        D(this.container)),
                        C.clearTimeout(this.hideTimer),
                        C.clearTimeout(this.tooltipTimeout)
                    }
                    ,
                    a.prototype.getAnchor = function(i, o) {
                        var s, p, C = this.chart, S = C.pointer, M = C.inverted, T = C.plotTop, P = C.plotLeft, O = 0, D = 0;
                        return i = V(i),
                        this.followPointer && o ? (void 0 === o.chartX && (o = S.normalize(o)),
                        S = [o.chartX - P, o.chartY - T]) : i[0].tooltipPos ? S = i[0].tooltipPos : (i.forEach((function(i) {
                            s = i.series.yAxis,
                            p = i.series.xAxis,
                            O += i.plotX || 0,
                            D += i.plotLow ? (i.plotLow + (i.plotHigh || 0)) / 2 : i.plotY || 0,
                            p && s && (M ? (O += T + C.plotHeight - p.len - p.pos,
                            D += P + C.plotWidth - s.len - s.pos) : (O += p.pos - P,
                            D += s.pos - T))
                        }
                        )),
                        O /= i.length,
                        D /= i.length,
                        S = [M ? C.plotWidth - D : O, M ? C.plotHeight - O : D],
                        this.shared && 1 < i.length && o && (M ? S[0] = o.chartX - P : S[1] = o.chartY - T)),
                        S.map(Math.round)
                    }
                    ,
                    a.prototype.getDateFormat = function(i, o, s, p) {
                        var C = this.chart.time
                          , S = C.dateFormat("%m-%d %H:%M:%S.%L", o)
                          , M = {
                            millisecond: 15,
                            second: 12,
                            minute: 9,
                            hour: 6,
                            day: 3
                        }
                          , T = "millisecond";
                        for (P in $) {
                            if (i === $.week && +C.dateFormat("%w", o) === s && "00:00:00.000" === S.substr(6)) {
                                var P = "week";
                                break
                            }
                            if ($[P] > i) {
                                P = T;
                                break
                            }
                            if (M[P] && S.substr(M[P]) !== "01-01 00:00:00.000".substr(M[P]))
                                break;
                            "week" !== P && (T = P)
                        }
                        if (P)
                            var O = C.resolveDTLFormat(p[P]).main;
                        return O
                    }
                    ,
                    a.prototype.getLabel = function() {
                        var i, s = this, C = this.chart.renderer, S = this.chart.styledMode, M = this.options, T = "tooltip" + (O(M.className) ? " " + M.className : ""), D = M.style && M.style.pointerEvents || (!this.followPointer && M.stickOnContact ? "auto" : "none");
                        if (!this.label) {
                            if (this.outside) {
                                var j = this.chart.options.chart.style
                                  , R = p.getRendererType();
                                this.container = i = o.doc.createElement("div"),
                                i.className = "highcharts-tooltip-container",
                                P(i, {
                                    position: "absolute",
                                    top: "1px",
                                    pointerEvents: D,
                                    zIndex: Math.max(this.options.style && this.options.style.zIndex || 0, (j && j.zIndex || 0) + 3)
                                }),
                                o.doc.body.appendChild(i),
                                this.renderer = C = new R(i,0,0,j,void 0,void 0,C.styledMode)
                            }
                            if (this.split ? this.label = C.g(T) : (this.label = C.label("", 0, 0, M.shape || "callout", null, null, M.useHTML, null, T).attr({
                                padding: M.padding,
                                r: M.borderRadius
                            }),
                            S || this.label.attr({
                                fill: M.backgroundColor,
                                "stroke-width": M.borderWidth
                            }).css(M.style).css({
                                pointerEvents: D
                            }).shadow(M.shadow)),
                            S && M.shadow && (this.applyFilter(),
                            this.label.attr({
                                filter: "url(#drop-shadow-" + this.chart.index + ")"
                            })),
                            s.outside && !s.split) {
                                var X = this.label
                                  , Y = X.xSetter
                                  , _ = X.ySetter;
                                X.xSetter = function(o) {
                                    Y.call(X, s.distance),
                                    i.style.left = o + "px"
                                }
                                ,
                                X.ySetter = function(o) {
                                    _.call(X, s.distance),
                                    i.style.top = o + "px"
                                }
                            }
                            this.label.on("mouseenter", (function() {
                                s.inContact = !0
                            }
                            )).on("mouseleave", (function() {
                                var i = s.chart.hoverSeries;
                                s.inContact = !1,
                                i && i.onMouseOut && i.onMouseOut()
                            }
                            )).attr({
                                zIndex: 8
                            }).add()
                        }
                        return this.label
                    }
                    ,
                    a.prototype.getPosition = function(i, o, s) {
                        var p, C = this.chart, S = this.distance, T = {}, P = C.inverted && s.h || 0, O = this.outside, D = O ? M.documentElement.clientWidth - 2 * S : C.chartWidth, j = O ? Math.max(M.body.scrollHeight, M.documentElement.scrollHeight, M.body.offsetHeight, M.documentElement.offsetHeight, M.documentElement.clientHeight) : C.chartHeight, R = C.pointer.getChartPosition(), n = function(p) {
                            var M = "x" === p;
                            return [p, M ? D : j, M ? i : o].concat(O ? [M ? i * R.scaleX : o * R.scaleY, M ? R.left - S + (s.plotX + C.plotLeft) * R.scaleX : R.top - S + (s.plotY + C.plotTop) * R.scaleY, 0, M ? D : j] : [M ? i : o, M ? s.plotX + C.plotLeft : s.plotY + C.plotTop, M ? C.plotLeft : C.plotTop, M ? C.plotLeft + C.plotWidth : C.plotTop + C.plotHeight])
                        }, X = n("y"), Y = n("x"), _ = !this.followPointer && U(s.ttBelow, !C.inverted == !!s.negative), A = function(i, o, s, p, C, M, D) {
                            var j = O ? "y" === i ? S * R.scaleY : S * R.scaleX : S
                              , X = (s - p) / 2
                              , Y = p < C - S
                              , F = C + S + p < o
                              , U = C - j - s + X;
                            if (C = C + j - X,
                            _ && F)
                                T[i] = C;
                            else if (!_ && Y)
                                T[i] = U;
                            else if (Y)
                                T[i] = Math.min(D - p, 0 > U - P ? U : U - P);
                            else {
                                if (!F)
                                    return !1;
                                T[i] = Math.max(M, C + P + s > o ? C : C + P)
                            }
                        }, J = function(i, o, s, p, C) {
                            var M;
                            return C < S || C > o - S ? M = !1 : T[i] = C < s / 2 ? 1 : C > o - p / 2 ? o - p - 2 : C - s / 2,
                            M
                        }, u = function(i) {
                            var o = X;
                            X = Y,
                            Y = o,
                            p = i
                        }, I = function() {
                            !1 !== A.apply(0, X) ? !1 !== J.apply(0, Y) || p || (u(!0),
                            I()) : p ? T.x = T.y = 0 : (u(!0),
                            I())
                        };
                        return (C.inverted || 1 < this.len) && u(),
                        I(),
                        T
                    }
                    ,
                    a.prototype.getXDateFormat = function(i, o, s) {
                        o = o.dateTimeLabelFormats;
                        var p = s && s.closestPointRange;
                        return (p ? this.getDateFormat(p, i.x, s.options.startOfWeek, o) : o.day) || o.year
                    }
                    ,
                    a.prototype.hide = function(i) {
                        var o = this;
                        C.clearTimeout(this.hideTimer),
                        i = U(i, this.options.hideDelay, 500),
                        this.isHidden || (this.hideTimer = Z((function() {
                            o.getLabel().fadeOut(i ? void 0 : i),
                            o.isHidden = !0
                        }
                        ), i))
                    }
                    ,
                    a.prototype.init = function(i, o) {
                        this.chart = i,
                        this.options = o,
                        this.crosshairs = [],
                        this.now = {
                            x: 0,
                            y: 0
                        },
                        this.isHidden = !0,
                        this.split = o.split && !i.inverted && !i.polar,
                        this.shared = o.shared || this.split,
                        this.outside = U(o.outside, !(!i.scrollablePixelsX && !i.scrollablePixelsY))
                    }
                    ,
                    a.prototype.isStickyOnContact = function() {
                        return !(this.followPointer || !this.options.stickOnContact || !this.inContact)
                    }
                    ,
                    a.prototype.move = function(i, o, s, p) {
                        var S = this
                          , M = S.now
                          , T = !1 !== S.options.animation && !S.isHidden && (1 < Math.abs(i - M.x) || 1 < Math.abs(o - M.y))
                          , P = S.followPointer || 1 < S.len;
                        j(M, {
                            x: T ? (2 * M.x + i) / 3 : i,
                            y: T ? (M.y + o) / 2 : o,
                            anchorX: P ? void 0 : T ? (2 * M.anchorX + s) / 3 : s,
                            anchorY: P ? void 0 : T ? (M.anchorY + p) / 2 : p
                        }),
                        S.getLabel().attr(M),
                        S.drawTracker(),
                        T && (C.clearTimeout(this.tooltipTimeout),
                        this.tooltipTimeout = setTimeout((function() {
                            S && S.move(i, o, s, p)
                        }
                        ), 32))
                    }
                    ,
                    a.prototype.refresh = function(i, o) {
                        var p = this.chart
                          , S = this.options
                          , M = V(i)
                          , T = M[0]
                          , P = {}
                          , O = []
                          , D = S.formatter || this.defaultFormatter;
                        P = this.shared;
                        var j = p.styledMode;
                        if (S.enabled) {
                            C.clearTimeout(this.hideTimer),
                            this.followPointer = !this.split && T.series.tooltipOptions.followPointer;
                            var Y = this.getAnchor(i, o)
                              , _ = Y[0]
                              , F = Y[1];
                            if (!P || !X(i) && i.series && i.series.noSharedTooltip ? P = T.getLabelConfig() : (p.pointer.applyInactiveState(M),
                            M.forEach((function(i) {
                                i.setState("hover"),
                                O.push(i.getLabelConfig())
                            }
                            )),
                            (P = {
                                x: T.category,
                                y: T.y
                            }).points = O),
                            this.len = O.length,
                            i = D.call(P, this),
                            D = T.series,
                            this.distance = U(D.tooltipOptions.distance, 16),
                            !1 === i)
                                this.hide();
                            else {
                                if (this.split)
                                    this.renderSplit(i, M);
                                else {
                                    if (M = _,
                                    P = F,
                                    o && p.pointer.isDirectTouch && (M = o.chartX - p.plotLeft,
                                    P = o.chartY - p.plotTop),
                                    !p.polar && !1 !== D.options.clip && !D.shouldShowTooltip(M, P))
                                        return void this.hide();
                                    o = this.getLabel(),
                                    S.style.width && !j || o.css({
                                        width: this.chart.spacingBox.width + "px"
                                    }),
                                    o.attr({
                                        text: i && i.join ? i.join("") : i
                                    }),
                                    o.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + U(T.colorIndex, D.colorIndex)),
                                    j || o.attr({
                                        stroke: S.borderColor || T.color || D.color || s.neutralColor60
                                    }),
                                    this.updatePosition({
                                        plotX: _,
                                        plotY: F,
                                        negative: T.negative,
                                        ttBelow: T.ttBelow,
                                        h: Y[2] || 0
                                    })
                                }
                                this.isHidden && this.label && this.label.attr({
                                    opacity: 1
                                }).show(),
                                this.isHidden = !1
                            }
                            R(this, "refresh")
                        }
                    }
                    ,
                    a.prototype.renderSplit = function(i, p) {
                        function b(i, o, s, p, S) {
                            return void 0 === S && (S = !0),
                            s ? (o = at ? 0 : dt,
                            i = T(i - p / 2, st.left, st.right - p - (C.outside ? ht : 0))) : (o -= lt,
                            i = T(i = S ? i - p - et : i + et, S ? i : st.left, st.right)),
                            {
                                x: i,
                                y: o
                            }
                        }
                        var C = this
                          , S = C.chart
                          , P = C.chart
                          , O = P.chartWidth
                          , D = P.chartHeight
                          , R = P.plotHeight
                          , X = P.plotLeft
                          , Y = P.plotTop
                          , F = P.pointer
                          , V = P.scrollablePixelsY;
                        V = void 0 === V ? 0 : V;
                        var Z = P.scrollablePixelsX
                          , $ = P.scrollingContainer
                          , Q = ($ = void 0 === $ ? {
                            scrollLeft: 0,
                            scrollTop: 0
                        } : $).scrollLeft;
                        $ = $.scrollTop;
                        var tt = P.styledMode
                          , et = C.distance
                          , it = C.options
                          , ot = C.options.positioner
                          , st = C.outside && "number" != typeof Z ? M.documentElement.getBoundingClientRect() : {
                            left: Q,
                            right: Q + O,
                            top: $,
                            bottom: $ + D
                        }
                          , rt = C.getLabel()
                          , nt = this.renderer || S.renderer
                          , at = !(!S.xAxis[0] || !S.xAxis[0].opposite)
                          , ht = (S = F.getChartPosition()).left;
                        S = S.top;
                        var lt = Y + $
                          , ct = 0
                          , dt = R - V;
                        _(i) && (i = [!1, i]),
                        i = i.slice(0, p.length + 1).reduce((function(i, o, S) {
                            if (!1 !== o && "" !== o) {
                                var M = (S = p[S - 1] || {
                                    isHeader: !0,
                                    plotX: p[0].plotX,
                                    plotY: R,
                                    series: {}
                                }).isHeader
                                  , P = M ? C : S.series;
                                o = o.toString();
                                var O = P.tt
                                  , D = S.isHeader
                                  , j = S.series
                                  , _ = "highcharts-color-" + U(S.colorIndex, j.colorIndex, "none");
                                if (O || (O = {
                                    padding: it.padding,
                                    r: it.borderRadius
                                },
                                tt || (O.fill = it.backgroundColor,
                                O["stroke-width"] = it.borderWidth),
                                O = nt.label("", 0, 0, it[D ? "headerShape" : "shape"] || "callout", void 0, void 0, it.useHTML).addClass((D ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + _).attr(O).add(rt)),
                                O.isActive = !0,
                                O.attr({
                                    text: o
                                }),
                                tt || O.css(it.style).shadow(it.shadow).attr({
                                    stroke: it.borderColor || S.color || j.color || s.neutralColor80
                                }),
                                o = (D = (P = P.tt = O).getBBox()).width + P.strokeWidth(),
                                M && (ct = D.height,
                                dt += ct,
                                at && (lt -= ct)),
                                j = void 0 === (j = S.plotX) ? 0 : j,
                                _ = void 0 === (_ = S.plotY) ? 0 : _,
                                O = S.series,
                                S.isHeader) {
                                    j = X + j;
                                    var F = Y + R / 2
                                } else {
                                    var V = O.xAxis
                                      , Z = O.yAxis;
                                    j = V.pos + T(j, -et, V.len + et),
                                    O.shouldShowTooltip(0, Z.pos - Y + _, {
                                        ignoreX: !0
                                    }) && (F = Z.pos + _)
                                }
                                j = T(j, st.left - et, st.right + et),
                                "number" == typeof F ? (D = D.height + 1,
                                _ = ot ? ot.call(C, o, D, S) : b(j, F, M, o),
                                i.push({
                                    align: ot ? 0 : void 0,
                                    anchorX: j,
                                    anchorY: F,
                                    boxWidth: o,
                                    point: S,
                                    rank: U(_.rank, M ? 1 : 0),
                                    size: D,
                                    target: _.y,
                                    tt: P,
                                    x: _.x
                                })) : P.isActive = !1
                            }
                            return i
                        }
                        ), []),
                        !ot && i.some((function(i) {
                            var o = (C.outside ? ht : 0) + i.anchorX;
                            return o < st.left && o + i.boxWidth < st.right || o < ht - st.left + i.boxWidth && st.right - o > o
                        }
                        )) && (i = i.map((function(i) {
                            var o = b(i.anchorX, i.anchorY, i.point.isHeader, i.boxWidth, !1);
                            return j(i, {
                                target: o.y,
                                x: o.x
                            })
                        }
                        ))),
                        C.cleanSplit(),
                        o.distribute(i, dt);
                        var pt = ht
                          , ut = ht;
                        i.forEach((function(i) {
                            var o = i.x
                              , s = i.boxWidth;
                            (i = i.isHeader) || (C.outside && ht + o < pt && (pt = ht + o),
                            !i && C.outside && pt + s > ut && (ut = ht + o))
                        }
                        )),
                        i.forEach((function(i) {
                            var o = i.x
                              , s = i.anchorX
                              , p = i.pos
                              , S = i.point.isHeader;
                            if (p = {
                                visibility: void 0 === p ? "hidden" : "inherit",
                                x: o,
                                y: p + lt,
                                anchorX: s,
                                anchorY: i.anchorY
                            },
                            C.outside && o < s) {
                                var M = ht - pt;
                                0 < M && (S || (p.x = o + M,
                                p.anchorX = s + M),
                                S && (p.x = (ut - pt) / 2,
                                p.anchorX = s + M))
                            }
                            i.tt.attr(p)
                        }
                        )),
                        i = C.container,
                        V = C.renderer,
                        C.outside && i && V && (P = rt.getBBox(),
                        V.setSize(P.width + P.x, P.height + P.y, !1),
                        i.style.left = pt + "px",
                        i.style.top = S + "px")
                    }
                    ,
                    a.prototype.drawTracker = function() {
                        if (this.followPointer || !this.options.stickOnContact)
                            this.tracker && this.tracker.destroy();
                        else {
                            var i = this.chart
                              , o = this.label
                              , s = this.shared ? i.hoverPoints : i.hoverPoint;
                            if (o && s) {
                                var p = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                };
                                s = this.getAnchor(s);
                                var C = o.getBBox();
                                s[0] += i.plotLeft - o.translateX,
                                s[1] += i.plotTop - o.translateY,
                                p.x = Math.min(0, s[0]),
                                p.y = Math.min(0, s[1]),
                                p.width = 0 > s[0] ? Math.max(Math.abs(s[0]), C.width - s[0]) : Math.max(Math.abs(s[0]), C.width),
                                p.height = 0 > s[1] ? Math.max(Math.abs(s[1]), C.height - Math.abs(s[1])) : Math.max(Math.abs(s[1]), C.height),
                                this.tracker ? this.tracker.attr(p) : (this.tracker = o.renderer.rect(p).addClass("highcharts-tracker").add(o),
                                i.styledMode || this.tracker.attr({
                                    fill: "rgba(0,0,0,0)"
                                }))
                            }
                        }
                    }
                    ,
                    a.prototype.styledModeFormat = function(i) {
                        return i.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"')
                    }
                    ,
                    a.prototype.tooltipFooterHeaderFormatter = function(i, o) {
                        var s = o ? "footer" : "header"
                          , p = i.series
                          , C = p.tooltipOptions
                          , M = C.xDateFormat
                          , T = p.xAxis
                          , P = T && "datetime" === T.options.type && Y(i.key)
                          , O = C[s + "Format"];
                        return R(this, "headerFormatter", o = {
                            isFooter: o,
                            labelConfig: i
                        }, (function(o) {
                            P && !M && (M = this.getXDateFormat(i, C, T)),
                            P && M && (i.point && i.point.tooltipDateKeys || ["key"]).forEach((function(i) {
                                O = O.replace("{point." + i + "}", "{point." + i + ":" + M + "}")
                            }
                            )),
                            p.chart.styledMode && (O = this.styledModeFormat(O)),
                            o.text = S(O, {
                                point: i,
                                series: p
                            }, this.chart)
                        }
                        )),
                        o.text
                    }
                    ,
                    a.prototype.update = function(i) {
                        this.destroy(),
                        F(!0, this.chart.options.tooltip.userOptions, i),
                        this.init(this.chart, F(!0, this.options, i))
                    }
                    ,
                    a.prototype.updatePosition = function(i) {
                        var o = this.chart
                          , s = o.pointer
                          , p = this.getLabel()
                          , C = i.plotX + o.plotLeft;
                        if (o = i.plotY + o.plotTop,
                        s = s.getChartPosition(),
                        i = (this.options.positioner || this.getPosition).call(this, p.width, p.height, i),
                        this.outside) {
                            var S = (this.options.borderWidth || 0) + 2 * this.distance;
                            this.renderer.setSize(p.width + S, p.height + S, !1),
                            1 === s.scaleX && 1 === s.scaleY || (P(this.container, {
                                transform: "scale(" + s.scaleX + ", " + s.scaleY + ")"
                            }),
                            C *= s.scaleX,
                            o *= s.scaleY),
                            C += s.left - i.x,
                            o += s.top - i.y
                        }
                        this.move(Math.round(i.x), Math.round(i.y || 0), C, o)
                    }
                    ,
                    a
                }(),
                o.Tooltip = i,
                o.Tooltip
            }
            )),
            L(o, "Core/Pointer.js", [o["Core/Color/Color.js"], o["Core/Globals.js"], o["Core/Color/Palette.js"], o["Core/Tooltip.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C) {
                var S = i.parse
                  , M = o.charts
                  , T = o.noop
                  , P = C.addEvent
                  , O = C.attr
                  , D = C.css
                  , j = C.defined
                  , R = C.extend
                  , X = C.find
                  , Y = C.fireEvent
                  , _ = C.isNumber
                  , F = C.isObject
                  , U = C.objectEach
                  , V = C.offset
                  , Z = C.pick
                  , $ = C.splat;
                return i = function() {
                    function a(i, o) {
                        this.lastValidTouch = {},
                        this.pinchDown = [],
                        this.runChartClick = !1,
                        this.eventsToUnbind = [],
                        this.chart = i,
                        this.hasDragged = !1,
                        this.options = o,
                        this.init(i, o)
                    }
                    return a.prototype.applyInactiveState = function(i) {
                        var o, s = [];
                        (i || []).forEach((function(i) {
                            o = i.series,
                            s.push(o),
                            o.linkedParent && s.push(o.linkedParent),
                            o.linkedSeries && (s = s.concat(o.linkedSeries)),
                            o.navigatorSeries && s.push(o.navigatorSeries)
                        }
                        )),
                        this.chart.series.forEach((function(i) {
                            -1 === s.indexOf(i) ? i.setState("inactive", !0) : i.options.inactiveOtherPoints && i.setAllPointsToState("inactive")
                        }
                        ))
                    }
                    ,
                    a.prototype.destroy = function() {
                        var i = this;
                        this.eventsToUnbind.forEach((function(i) {
                            return i()
                        }
                        )),
                        this.eventsToUnbind = [],
                        o.chartCount || (a.unbindDocumentMouseUp && (a.unbindDocumentMouseUp = a.unbindDocumentMouseUp()),
                        a.unbindDocumentTouchEnd && (a.unbindDocumentTouchEnd = a.unbindDocumentTouchEnd())),
                        clearInterval(i.tooltipTimeout),
                        U(i, (function(o, s) {
                            i[s] = void 0
                        }
                        ))
                    }
                    ,
                    a.prototype.drag = function(i) {
                        var o = this.chart
                          , p = o.options.chart
                          , C = this.zoomHor
                          , M = this.zoomVert
                          , T = o.plotLeft
                          , P = o.plotTop
                          , O = o.plotWidth
                          , D = o.plotHeight
                          , j = this.mouseDownX || 0
                          , R = this.mouseDownY || 0
                          , X = F(p.panning) ? p.panning && p.panning.enabled : p.panning
                          , Y = p.panKey && i[p.panKey + "Key"]
                          , _ = i.chartX
                          , U = i.chartY
                          , V = this.selectionMarker;
                        if ((!V || !V.touch) && (_ < T ? _ = T : _ > T + O && (_ = T + O),
                        U < P ? U = P : U > P + D && (U = P + D),
                        this.hasDragged = Math.sqrt(Math.pow(j - _, 2) + Math.pow(R - U, 2)),
                        10 < this.hasDragged)) {
                            var Z = o.isInsidePlot(j - T, R - P, {
                                visiblePlotOnly: !0
                            });
                            o.hasCartesianSeries && (this.zoomX || this.zoomY) && Z && !Y && !V && (this.selectionMarker = V = o.renderer.rect(T, P, C ? 1 : O, M ? 1 : D, 0).attr({
                                class: "highcharts-selection-marker",
                                zIndex: 7
                            }).add(),
                            o.styledMode || V.attr({
                                fill: p.selectionMarkerFill || S(s.highlightColor80).setOpacity(.25).get()
                            })),
                            V && C && (C = _ - j,
                            V.attr({
                                width: Math.abs(C),
                                x: (0 < C ? 0 : C) + j
                            })),
                            V && M && (C = U - R,
                            V.attr({
                                height: Math.abs(C),
                                y: (0 < C ? 0 : C) + R
                            })),
                            Z && !V && X && o.pan(i, p.panning)
                        }
                    }
                    ,
                    a.prototype.dragStart = function(i) {
                        var o = this.chart;
                        o.mouseIsDown = i.type,
                        o.cancelClick = !1,
                        o.mouseDownX = this.mouseDownX = i.chartX,
                        o.mouseDownY = this.mouseDownY = i.chartY
                    }
                    ,
                    a.prototype.drop = function(i) {
                        var o = this
                          , s = this.chart
                          , p = this.hasPinched;
                        if (this.selectionMarker) {
                            var C, S = {
                                originalEvent: i,
                                xAxis: [],
                                yAxis: []
                            }, M = this.selectionMarker, T = M.attr ? M.attr("x") : M.x, P = M.attr ? M.attr("y") : M.y, O = M.attr ? M.attr("width") : M.width, X = M.attr ? M.attr("height") : M.height;
                            (this.hasDragged || p) && (s.axes.forEach((function(s) {
                                if (s.zoomEnabled && j(s.min) && (p || o[{
                                    xAxis: "zoomX",
                                    yAxis: "zoomY"
                                }[s.coll]]) && _(T) && _(P)) {
                                    var M = s.horiz
                                      , D = "touchend" === i.type ? s.minPixelPadding : 0
                                      , R = s.toValue((M ? T : P) + D);
                                    M = s.toValue((M ? T + O : P + X) - D),
                                    S[s.coll].push({
                                        axis: s,
                                        min: Math.min(R, M),
                                        max: Math.max(R, M)
                                    }),
                                    C = !0
                                }
                            }
                            )),
                            C && Y(s, "selection", S, (function(i) {
                                s.zoom(R(i, p ? {
                                    animation: !1
                                } : null))
                            }
                            ))),
                            _(s.index) && (this.selectionMarker = this.selectionMarker.destroy()),
                            p && this.scaleGroups()
                        }
                        s && _(s.index) && (D(s.container, {
                            cursor: s._cursor
                        }),
                        s.cancelClick = 10 < this.hasDragged,
                        s.mouseIsDown = this.hasDragged = this.hasPinched = !1,
                        this.pinchDown = [])
                    }
                    ,
                    a.prototype.findNearestKDPoint = function(i, o, s) {
                        var p, C = this.chart, S = C.hoverPoint;
                        return C = C.tooltip,
                        S && C && C.isStickyOnContact() ? S : (i.forEach((function(i) {
                            var C = !(i.noSharedTooltip && o) && 0 > i.options.findNearestPointBy.indexOf("y");
                            if (i = i.searchPoint(s, C),
                            (C = F(i, !0) && i.series) && !(C = !F(p, !0))) {
                                C = p.distX - i.distX;
                                var S = p.dist - i.dist
                                  , M = (i.series.group && i.series.group.zIndex) - (p.series.group && p.series.group.zIndex);
                                C = 0 < (0 !== C && o ? C : 0 !== S ? S : 0 !== M ? M : p.series.index > i.series.index ? -1 : 1)
                            }
                            C && (p = i)
                        }
                        )),
                        p)
                    }
                    ,
                    a.prototype.getChartCoordinatesFromPoint = function(i, o) {
                        var s = i.series
                          , p = s.xAxis;
                        s = s.yAxis;
                        var C = i.shapeArgs;
                        if (p && s) {
                            var S = Z(i.clientX, i.plotX)
                              , M = i.plotY || 0;
                            return i.isNode && C && _(C.x) && _(C.y) && (S = C.x,
                            M = C.y),
                            o ? {
                                chartX: s.len + s.pos - M,
                                chartY: p.len + p.pos - S
                            } : {
                                chartX: S + p.pos,
                                chartY: M + s.pos
                            }
                        }
                        if (C && C.x && C.y)
                            return {
                                chartX: C.x,
                                chartY: C.y
                            }
                    }
                    ,
                    a.prototype.getChartPosition = function() {
                        if (this.chartPosition)
                            return this.chartPosition;
                        var i = this.chart.container
                          , o = V(i);
                        this.chartPosition = {
                            left: o.left,
                            top: o.top,
                            scaleX: 1,
                            scaleY: 1
                        };
                        var s = i.offsetWidth;
                        return i = i.offsetHeight,
                        2 < s && 2 < i && (this.chartPosition.scaleX = o.width / s,
                        this.chartPosition.scaleY = o.height / i),
                        this.chartPosition
                    }
                    ,
                    a.prototype.getCoordinates = function(i) {
                        var o = {
                            xAxis: [],
                            yAxis: []
                        };
                        return this.chart.axes.forEach((function(s) {
                            o[s.isXAxis ? "xAxis" : "yAxis"].push({
                                axis: s,
                                value: s.toValue(i[s.horiz ? "chartX" : "chartY"])
                            })
                        }
                        )),
                        o
                    }
                    ,
                    a.prototype.getHoverData = function(i, o, s, p, C, S) {
                        var M = [];
                        p = !(!p || !i);
                        var T = {
                            chartX: S ? S.chartX : void 0,
                            chartY: S ? S.chartY : void 0,
                            shared: C
                        };
                        Y(this, "beforeGetHoverData", T);
                        var P = o && !o.stickyTracking ? [o] : s.filter((function(i) {
                            return T.filter ? T.filter(i) : i.visible && !(!C && i.directTouch) && Z(i.options.enableMouseTracking, !0) && i.stickyTracking
                        }
                        ))
                          , O = p || !S ? i : this.findNearestKDPoint(P, C, S);
                        return o = O && O.series,
                        O && (C && !o.noSharedTooltip ? (P = s.filter((function(i) {
                            return T.filter ? T.filter(i) : i.visible && !(!C && i.directTouch) && Z(i.options.enableMouseTracking, !0) && !i.noSharedTooltip
                        }
                        ))).forEach((function(i) {
                            var o = X(i.points, (function(i) {
                                return i.x === O.x && !i.isNull
                            }
                            ));
                            F(o) && (i.chart.isBoosting && (o = i.getPoint(o)),
                            M.push(o))
                        }
                        )) : M.push(O)),
                        Y(this, "afterGetHoverData", T = {
                            hoverPoint: O
                        }),
                        {
                            hoverPoint: T.hoverPoint,
                            hoverSeries: o,
                            hoverPoints: M
                        }
                    }
                    ,
                    a.prototype.getPointFromEvent = function(i) {
                        i = i.target;
                        for (var o; i && !o; )
                            o = i.point,
                            i = i.parentNode;
                        return o
                    }
                    ,
                    a.prototype.onTrackerMouseOut = function(i) {
                        i = i.relatedTarget || i.toElement;
                        var o = this.chart.hoverSeries;
                        this.isDirectTouch = !1,
                        !o || !i || o.stickyTracking || this.inClass(i, "highcharts-tooltip") || this.inClass(i, "highcharts-series-" + o.index) && this.inClass(i, "highcharts-tracker") || o.onMouseOut()
                    }
                    ,
                    a.prototype.inClass = function(i, o) {
                        for (var s; i; ) {
                            if (s = O(i, "class")) {
                                if (-1 !== s.indexOf(o))
                                    return !0;
                                if (-1 !== s.indexOf("highcharts-container"))
                                    return !1
                            }
                            i = i.parentNode
                        }
                    }
                    ,
                    a.prototype.init = function(i, o) {
                        this.options = o,
                        this.chart = i,
                        this.runChartClick = !(!o.chart.events || !o.chart.events.click),
                        this.pinchDown = [],
                        this.lastValidTouch = {},
                        p && (i.tooltip = new p(i,o.tooltip),
                        this.followTouchMove = Z(o.tooltip.followTouchMove, !0)),
                        this.setDOMEvents()
                    }
                    ,
                    a.prototype.normalize = function(i, o) {
                        var s = i.touches
                          , p = s ? s.length ? s.item(0) : Z(s.changedTouches, i.changedTouches)[0] : i;
                        return o || (o = this.getChartPosition()),
                        s = p.pageX - o.left,
                        p = p.pageY - o.top,
                        s /= o.scaleX,
                        p /= o.scaleY,
                        R(i, {
                            chartX: Math.round(s),
                            chartY: Math.round(p)
                        })
                    }
                    ,
                    a.prototype.onContainerClick = function(i) {
                        var o = this.chart
                          , s = o.hoverPoint;
                        i = this.normalize(i);
                        var p = o.plotLeft
                          , C = o.plotTop;
                        o.cancelClick || (s && this.inClass(i.target, "highcharts-tracker") ? (Y(s.series, "click", R(i, {
                            point: s
                        })),
                        o.hoverPoint && s.firePointEvent("click", i)) : (R(i, this.getCoordinates(i)),
                        o.isInsidePlot(i.chartX - p, i.chartY - C, {
                            visiblePlotOnly: !0
                        }) && Y(o, "click", i)))
                    }
                    ,
                    a.prototype.onContainerMouseDown = function(i) {
                        var s = 1 == (1 & (i.buttons || i.button));
                        i = this.normalize(i),
                        o.isFirefox && 0 !== i.button && this.onContainerMouseMove(i),
                        (void 0 === i.button || s) && (this.zoomOption(i),
                        s && i.preventDefault && i.preventDefault(),
                        this.dragStart(i))
                    }
                    ,
                    a.prototype.onContainerMouseLeave = function(i) {
                        var o = M[Z(a.hoverChartIndex, -1)]
                          , s = this.chart.tooltip;
                        i = this.normalize(i),
                        o && (i.relatedTarget || i.toElement) && (o.pointer.reset(),
                        o.pointer.chartPosition = void 0),
                        s && !s.isHidden && this.reset()
                    }
                    ,
                    a.prototype.onContainerMouseEnter = function(i) {
                        delete this.chartPosition
                    }
                    ,
                    a.prototype.onContainerMouseMove = function(i) {
                        var o = this.chart;
                        i = this.normalize(i),
                        this.setHoverChartIndex(),
                        i.preventDefault || (i.returnValue = !1),
                        ("mousedown" === o.mouseIsDown || this.touchSelect(i)) && this.drag(i),
                        o.openMenu || !this.inClass(i.target, "highcharts-tracker") && !o.isInsidePlot(i.chartX - o.plotLeft, i.chartY - o.plotTop, {
                            visiblePlotOnly: !0
                        }) || (this.inClass(i.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(i))
                    }
                    ,
                    a.prototype.onDocumentTouchEnd = function(i) {
                        var o = M[Z(a.hoverChartIndex, -1)];
                        o && o.pointer.drop(i)
                    }
                    ,
                    a.prototype.onContainerTouchMove = function(i) {
                        this.touchSelect(i) ? this.onContainerMouseMove(i) : this.touch(i)
                    }
                    ,
                    a.prototype.onContainerTouchStart = function(i) {
                        this.touchSelect(i) ? this.onContainerMouseDown(i) : (this.zoomOption(i),
                        this.touch(i, !0))
                    }
                    ,
                    a.prototype.onDocumentMouseMove = function(i) {
                        var o = this.chart
                          , s = this.chartPosition;
                        i = this.normalize(i, s);
                        var p = o.tooltip;
                        !s || p && p.isStickyOnContact() || o.isInsidePlot(i.chartX - o.plotLeft, i.chartY - o.plotTop, {
                            visiblePlotOnly: !0
                        }) || this.inClass(i.target, "highcharts-tracker") || this.reset()
                    }
                    ,
                    a.prototype.onDocumentMouseUp = function(i) {
                        var o = M[Z(a.hoverChartIndex, -1)];
                        o && o.pointer.drop(i)
                    }
                    ,
                    a.prototype.pinch = function(i) {
                        var o = this
                          , s = o.chart
                          , p = o.pinchDown
                          , C = i.touches || []
                          , S = C.length
                          , M = o.lastValidTouch
                          , P = o.hasZoom
                          , O = {}
                          , D = 1 === S && (o.inClass(i.target, "highcharts-tracker") && s.runTrackerClick || o.runChartClick)
                          , j = {}
                          , X = o.selectionMarker;
                        1 < S && (o.initiated = !0),
                        P && o.initiated && !D && !1 !== i.cancelable && i.preventDefault(),
                        [].map.call(C, (function(i) {
                            return o.normalize(i)
                        }
                        )),
                        "touchstart" === i.type ? ([].forEach.call(C, (function(i, o) {
                            p[o] = {
                                chartX: i.chartX,
                                chartY: i.chartY
                            }
                        }
                        )),
                        M.x = [p[0].chartX, p[1] && p[1].chartX],
                        M.y = [p[0].chartY, p[1] && p[1].chartY],
                        s.axes.forEach((function(i) {
                            if (i.zoomEnabled) {
                                var o = s.bounds[i.horiz ? "h" : "v"]
                                  , p = i.minPixelPadding
                                  , C = i.toPixels(Math.min(Z(i.options.min, i.dataMin), i.dataMin))
                                  , S = i.toPixels(Math.max(Z(i.options.max, i.dataMax), i.dataMax))
                                  , M = Math.max(C, S);
                                o.min = Math.min(i.pos, Math.min(C, S) - p),
                                o.max = Math.max(i.pos + i.len, M + p)
                            }
                        }
                        )),
                        o.res = !0) : o.followTouchMove && 1 === S ? this.runPointActions(o.normalize(i)) : p.length && (X || (o.selectionMarker = X = R({
                            destroy: T,
                            touch: !0
                        }, s.plotBox)),
                        o.pinchTranslate(p, C, O, X, j, M),
                        o.hasPinched = P,
                        o.scaleGroups(O, j),
                        o.res && (o.res = !1,
                        this.reset(!1, 0)))
                    }
                    ,
                    a.prototype.pinchTranslate = function(i, o, s, p, C, S) {
                        this.zoomHor && this.pinchTranslateDirection(!0, i, o, s, p, C, S),
                        this.zoomVert && this.pinchTranslateDirection(!1, i, o, s, p, C, S)
                    }
                    ,
                    a.prototype.pinchTranslateDirection = function(i, o, s, p, C, S, M, T) {
                        var P = this.chart
                          , O = i ? "x" : "y"
                          , D = i ? "X" : "Y"
                          , j = "chart" + D
                          , R = i ? "width" : "height"
                          , X = P["plot" + (i ? "Left" : "Top")]
                          , Y = P.inverted
                          , _ = P.bounds[i ? "h" : "v"]
                          , F = 1 === o.length
                          , U = o[0][j]
                          , V = !F && o[1][j];
                        o = function() {
                            "number" == typeof et && 20 < Math.abs(U - V) && (Q = T || Math.abs(tt - et) / Math.abs(U - V)),
                            $ = (X - tt) / Q + U,
                            Z = P["plot" + (i ? "Width" : "Height")] / Q
                        }
                        ;
                        var Z, $, Q = T || 1, tt = s[0][j], et = !F && s[1][j];
                        if (o(),
                        (s = $) < _.min) {
                            s = _.min;
                            var it = !0
                        } else
                            s + Z > _.max && (s = _.max - Z,
                            it = !0);
                        it ? (tt -= .8 * (tt - M[O][0]),
                        "number" == typeof et && (et -= .8 * (et - M[O][1])),
                        o()) : M[O] = [tt, et],
                        Y || (S[O] = $ - X,
                        S[R] = Z),
                        S = Y ? 1 / Q : Q,
                        C[R] = Z,
                        C[O] = s,
                        p[Y ? i ? "scaleY" : "scaleX" : "scale" + D] = Q,
                        p["translate" + D] = S * X + (tt - S * U)
                    }
                    ,
                    a.prototype.reset = function(i, o) {
                        var s = this.chart
                          , p = s.hoverSeries
                          , C = s.hoverPoint
                          , S = s.hoverPoints
                          , M = s.tooltip
                          , T = M && M.shared ? S : C;
                        i && T && $(T).forEach((function(o) {
                            o.series.isCartesian && void 0 === o.plotX && (i = !1)
                        }
                        )),
                        i ? M && T && $(T).length && (M.refresh(T),
                        M.shared && S ? S.forEach((function(i) {
                            i.setState(i.state, !0),
                            i.series.isCartesian && (i.series.xAxis.crosshair && i.series.xAxis.drawCrosshair(null, i),
                            i.series.yAxis.crosshair && i.series.yAxis.drawCrosshair(null, i))
                        }
                        )) : C && (C.setState(C.state, !0),
                        s.axes.forEach((function(i) {
                            i.crosshair && C.series[i.coll] === i && i.drawCrosshair(null, C)
                        }
                        )))) : (C && C.onMouseOut(),
                        S && S.forEach((function(i) {
                            i.setState()
                        }
                        )),
                        p && p.onMouseOut(),
                        M && M.hide(o),
                        this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()),
                        s.axes.forEach((function(i) {
                            i.hideCrosshair()
                        }
                        )),
                        this.hoverX = s.hoverPoints = s.hoverPoint = null)
                    }
                    ,
                    a.prototype.runPointActions = function(i, o) {
                        var s = this.chart
                          , p = s.tooltip && s.tooltip.options.enabled ? s.tooltip : void 0
                          , C = !!p && p.shared
                          , S = o || s.hoverPoint
                          , T = S && S.series || s.hoverSeries;
                        S = (o = this.getHoverData(S, T, s.series, (!i || "touchmove" !== i.type) && (!!o || T && T.directTouch && this.isDirectTouch), C, i)).hoverPoint,
                        T = o.hoverSeries;
                        var O = o.hoverPoints;
                        if (o = T && T.tooltipOptions.followPointer && !T.tooltipOptions.split,
                        C = C && T && !T.noSharedTooltip,
                        S && (S !== s.hoverPoint || p && p.isHidden)) {
                            if ((s.hoverPoints || []).forEach((function(i) {
                                -1 === O.indexOf(i) && i.setState()
                            }
                            )),
                            s.hoverSeries !== T && T.onMouseOver(),
                            this.applyInactiveState(O),
                            (O || []).forEach((function(i) {
                                i.setState("hover")
                            }
                            )),
                            s.hoverPoint && s.hoverPoint.firePointEvent("mouseOut"),
                            !S.series)
                                return;
                            s.hoverPoints = O,
                            s.hoverPoint = S,
                            S.firePointEvent("mouseOver"),
                            p && p.refresh(C ? O : S, i)
                        } else
                            o && p && !p.isHidden && (S = p.getAnchor([{}], i),
                            s.isInsidePlot(S[0], S[1], {
                                visiblePlotOnly: !0
                            }) && p.updatePosition({
                                plotX: S[0],
                                plotY: S[1]
                            }));
                        this.unDocMouseMove || (this.unDocMouseMove = P(s.container.ownerDocument, "mousemove", (function(i) {
                            var o = M[a.hoverChartIndex];
                            o && o.pointer.onDocumentMouseMove(i)
                        }
                        )),
                        this.eventsToUnbind.push(this.unDocMouseMove)),
                        s.axes.forEach((function(o) {
                            var p, C = Z((o.crosshair || {}).snap, !0);
                            C && ((p = s.hoverPoint) && p.series[o.coll] === o || (p = X(O, (function(i) {
                                return i.series[o.coll] === o
                            }
                            )))),
                            p || !C ? o.drawCrosshair(i, p) : o.hideCrosshair()
                        }
                        ))
                    }
                    ,
                    a.prototype.scaleGroups = function(i, o) {
                        var s = this.chart;
                        s.series.forEach((function(p) {
                            var C = i || p.getPlotBox();
                            p.xAxis && p.xAxis.zoomEnabled && p.group && (p.group.attr(C),
                            p.markerGroup && (p.markerGroup.attr(C),
                            p.markerGroup.clip(o ? s.clipRect : null)),
                            p.dataLabelsGroup && p.dataLabelsGroup.attr(C))
                        }
                        )),
                        s.clipRect.attr(o || s.clipBox)
                    }
                    ,
                    a.prototype.setDOMEvents = function() {
                        var i = this
                          , s = this.chart.container
                          , p = s.ownerDocument;
                        s.onmousedown = this.onContainerMouseDown.bind(this),
                        s.onmousemove = this.onContainerMouseMove.bind(this),
                        s.onclick = this.onContainerClick.bind(this),
                        this.eventsToUnbind.push(P(s, "mouseenter", this.onContainerMouseEnter.bind(this))),
                        this.eventsToUnbind.push(P(s, "mouseleave", this.onContainerMouseLeave.bind(this))),
                        a.unbindDocumentMouseUp || (a.unbindDocumentMouseUp = P(p, "mouseup", this.onDocumentMouseUp.bind(this)));
                        for (var C = this.chart.renderTo.parentElement; C && "BODY" !== C.tagName; )
                            this.eventsToUnbind.push(P(C, "scroll", (function() {
                                delete i.chartPosition
                            }
                            ))),
                            C = C.parentElement;
                        o.hasTouch && (this.eventsToUnbind.push(P(s, "touchstart", this.onContainerTouchStart.bind(this), {
                            passive: !1
                        })),
                        this.eventsToUnbind.push(P(s, "touchmove", this.onContainerTouchMove.bind(this), {
                            passive: !1
                        })),
                        a.unbindDocumentTouchEnd || (a.unbindDocumentTouchEnd = P(p, "touchend", this.onDocumentTouchEnd.bind(this), {
                            passive: !1
                        })))
                    }
                    ,
                    a.prototype.setHoverChartIndex = function() {
                        var i = this.chart
                          , s = o.charts[Z(a.hoverChartIndex, -1)];
                        s && s !== i && s.pointer.onContainerMouseLeave({
                            relatedTarget: !0
                        }),
                        s && s.mouseIsDown || (a.hoverChartIndex = i.index)
                    }
                    ,
                    a.prototype.touch = function(i, o) {
                        var s = this.chart;
                        if (this.setHoverChartIndex(),
                        1 === i.touches.length)
                            if (i = this.normalize(i),
                            s.isInsidePlot(i.chartX - s.plotLeft, i.chartY - s.plotTop, {
                                visiblePlotOnly: !0
                            }) && !s.openMenu) {
                                if (o && this.runPointActions(i),
                                "touchmove" === i.type)
                                    var p = !!(o = this.pinchDown)[0] && 4 <= Math.sqrt(Math.pow(o[0].chartX - i.chartX, 2) + Math.pow(o[0].chartY - i.chartY, 2));
                                Z(p, !0) && this.pinch(i)
                            } else
                                o && this.reset();
                        else
                            2 === i.touches.length && this.pinch(i)
                    }
                    ,
                    a.prototype.touchSelect = function(i) {
                        return !(!this.chart.options.chart.zoomBySingleTouch || !i.touches || 1 !== i.touches.length)
                    }
                    ,
                    a.prototype.zoomOption = function(i) {
                        var o = this.chart
                          , s = o.options.chart;
                        o = o.inverted;
                        var p = s.zoomType || "";
                        /touch/.test(i.type) && (p = Z(s.pinchType, p)),
                        this.zoomX = i = /x/.test(p),
                        this.zoomY = s = /y/.test(p),
                        this.zoomHor = i && !o || s && o,
                        this.zoomVert = s && !o || i && o,
                        this.hasZoom = i || s
                    }
                    ,
                    a
                }(),
                i
            }
            )),
            L(o, "Core/MSPointer.js", [o["Core/Globals.js"], o["Core/Pointer.js"], o["Core/Utilities.js"]], (function(i, o, s) {
                function v() {
                    var i = [];
                    return i.item = function(i) {
                        return this[i]
                    }
                    ,
                    D(R, (function(o) {
                        i.push({
                            pageX: o.pageX,
                            pageY: o.pageY,
                            target: o.target
                        })
                    }
                    )),
                    i
                }
                function x(i, s, p, S) {
                    var T = C[o.hoverChartIndex || NaN];
                    "touch" !== i.pointerType && i.pointerType !== i.MSPOINTER_TYPE_TOUCH || !T || (T = T.pointer,
                    S(i),
                    T[s]({
                        type: p,
                        target: i.currentTarget,
                        preventDefault: M,
                        touches: v()
                    }))
                }
                var p = this && this.__extends || function() {
                    var a = function(i, o) {
                        return a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        ,
                        a(i, o)
                    };
                    return function(i, o) {
                        function f() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (f.prototype = o.prototype,
                        new f)
                    }
                }()
                  , C = i.charts
                  , S = i.doc
                  , M = i.noop
                  , T = i.win
                  , P = s.addEvent
                  , O = s.css
                  , D = s.objectEach
                  , j = s.removeEvent
                  , R = {}
                  , X = !!T.PointerEvent;
                return function(o) {
                    function l() {
                        return null !== o && o.apply(this, arguments) || this
                    }
                    return p(l, o),
                    l.isRequired = function() {
                        return !(i.hasTouch || !T.PointerEvent && !T.MSPointerEvent)
                    }
                    ,
                    l.prototype.batchMSEvents = function(i) {
                        i(this.chart.container, X ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown),
                        i(this.chart.container, X ? "pointermove" : "MSPointerMove", this.onContainerPointerMove),
                        i(S, X ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                    }
                    ,
                    l.prototype.destroy = function() {
                        this.batchMSEvents(j),
                        o.prototype.destroy.call(this)
                    }
                    ,
                    l.prototype.init = function(i, s) {
                        o.prototype.init.call(this, i, s),
                        this.hasZoom && O(i.container, {
                            "-ms-touch-action": "none",
                            "touch-action": "none"
                        })
                    }
                    ,
                    l.prototype.onContainerPointerDown = function(i) {
                        x(i, "onContainerTouchStart", "touchstart", (function(i) {
                            R[i.pointerId] = {
                                pageX: i.pageX,
                                pageY: i.pageY,
                                target: i.currentTarget
                            }
                        }
                        ))
                    }
                    ,
                    l.prototype.onContainerPointerMove = function(i) {
                        x(i, "onContainerTouchMove", "touchmove", (function(i) {
                            R[i.pointerId] = {
                                pageX: i.pageX,
                                pageY: i.pageY
                            },
                            R[i.pointerId].target || (R[i.pointerId].target = i.currentTarget)
                        }
                        ))
                    }
                    ,
                    l.prototype.onDocumentPointerUp = function(i) {
                        x(i, "onDocumentTouchEnd", "touchend", (function(i) {
                            delete R[i.pointerId]
                        }
                        ))
                    }
                    ,
                    l.prototype.setDOMEvents = function() {
                        o.prototype.setDOMEvents.call(this),
                        (this.hasZoom || this.followTouchMove) && this.batchMSEvents(P)
                    }
                    ,
                    l
                }(o)
            }
            )),
            L(o, "Core/Series/Point.js", [o["Core/Renderer/HTML/AST.js"], o["Core/Animation/AnimationUtilities.js"], o["Core/FormatUtilities.js"], o["Core/Globals.js"], o["Core/DefaultOptions.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C, S) {
                var M = o.animObject
                  , T = s.format
                  , P = C.defaultOptions
                  , O = S.addEvent
                  , D = S.defined
                  , j = S.erase
                  , R = S.extend
                  , X = S.fireEvent
                  , Y = S.getNestedProperty
                  , _ = S.isArray
                  , F = S.isFunction
                  , U = S.isNumber
                  , V = S.isObject
                  , Z = S.merge
                  , $ = S.objectEach
                  , Q = S.pick
                  , tt = S.syncTimeout
                  , et = S.removeEvent
                  , it = S.uniqueKey;
                return o = function() {
                    function g() {
                        this.colorIndex = this.category = void 0,
                        this.formatPrefix = "point",
                        this.id = void 0,
                        this.isNull = !1,
                        this.percentage = this.options = this.name = void 0,
                        this.selected = !1,
                        this.total = this.series = void 0,
                        this.visible = !0,
                        this.x = void 0
                    }
                    return g.prototype.animateBeforeDestroy = function() {
                        var i, o = this, s = {
                            x: o.startXPos,
                            opacity: 0
                        }, p = o.getGraphicalProps();
                        p.singular.forEach((function(p) {
                            i = "dataLabel" === p,
                            o[p] = o[p].animate(i ? {
                                x: o[p].startXPos,
                                y: o[p].startYPos,
                                opacity: 0
                            } : s)
                        }
                        )),
                        p.plural.forEach((function(i) {
                            o[i].forEach((function(i) {
                                i.element && i.animate(R({
                                    x: o.startXPos
                                }, i.startYPos ? {
                                    x: i.startXPos,
                                    y: i.startYPos
                                } : {}))
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    g.prototype.applyOptions = function(i, o) {
                        var s = this.series
                          , p = s.options.pointValKey || s.pointValKey;
                        return i = g.prototype.optionsToObject.call(this, i),
                        R(this, i),
                        this.options = this.options ? R(this.options, i) : i,
                        i.group && delete this.group,
                        i.dataLabels && delete this.dataLabels,
                        p && (this.y = g.prototype.getNestedProperty.call(this, p)),
                        this.formatPrefix = (this.isNull = Q(this.isValid && !this.isValid(), null === this.x || !U(this.y))) ? "null" : "point",
                        this.selected && (this.state = "select"),
                        "name"in this && void 0 === o && s.xAxis && s.xAxis.hasNames && (this.x = s.xAxis.nameToX(this)),
                        void 0 === this.x && s && (this.x = void 0 === o ? s.autoIncrement(this) : o),
                        this
                    }
                    ,
                    g.prototype.destroy = function() {
                        function a() {
                            for (p in (i.graphic || i.dataLabel || i.dataLabels) && (et(i),
                            i.destroyElements()),
                            i)
                                i[p] = null
                        }
                        var i = this
                          , o = i.series
                          , s = o.chart;
                        o = o.options.dataSorting;
                        var p, C = s.hoverPoints, S = M(i.series.chart.renderer.globalAnimation);
                        i.legendItem && s.legend.destroyItem(i),
                        C && (i.setState(),
                        j(C, i),
                        C.length || (s.hoverPoints = null)),
                        i === s.hoverPoint && i.onMouseOut(),
                        o && o.enabled ? (this.animateBeforeDestroy(),
                        tt(a, S.duration)) : a(),
                        s.pointCount--
                    }
                    ,
                    g.prototype.destroyElements = function(i) {
                        var o = this;
                        (i = o.getGraphicalProps(i)).singular.forEach((function(i) {
                            o[i] = o[i].destroy()
                        }
                        )),
                        i.plural.forEach((function(i) {
                            o[i].forEach((function(i) {
                                i.element && i.destroy()
                            }
                            )),
                            delete o[i]
                        }
                        ))
                    }
                    ,
                    g.prototype.firePointEvent = function(i, o, s) {
                        var p = this
                          , C = this.series.options;
                        (C.point.events[i] || p.options && p.options.events && p.options.events[i]) && p.importEvents(),
                        "click" === i && C.allowPointSelect && (s = function(i) {
                            p.select && p.select(null, i.ctrlKey || i.metaKey || i.shiftKey)
                        }
                        ),
                        X(p, i, o, s)
                    }
                    ,
                    g.prototype.getClassName = function() {
                        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                    }
                    ,
                    g.prototype.getGraphicalProps = function(i) {
                        var o, s = this, p = [], C = {
                            singular: [],
                            plural: []
                        };
                        for ((i = i || {
                            graphic: 1,
                            dataLabel: 1
                        }).graphic && p.push("graphic", "upperGraphic", "shadowGroup"),
                        i.dataLabel && p.push("dataLabel", "dataLabelUpper", "connector"),
                        o = p.length; o--; ) {
                            var S = p[o];
                            s[S] && C.singular.push(S)
                        }
                        return ["dataLabel", "connector"].forEach((function(o) {
                            var p = o + "s";
                            i[o] && s[p] && C.plural.push(p)
                        }
                        )),
                        C
                    }
                    ,
                    g.prototype.getLabelConfig = function() {
                        return {
                            x: this.category,
                            y: this.y,
                            color: this.color,
                            colorIndex: this.colorIndex,
                            key: this.name || this.category,
                            series: this.series,
                            point: this,
                            percentage: this.percentage,
                            total: this.total || this.stackTotal
                        }
                    }
                    ,
                    g.prototype.getNestedProperty = function(i) {
                        if (i)
                            return 0 === i.indexOf("custom.") ? Y(i, this.options) : this[i]
                    }
                    ,
                    g.prototype.getZone = function() {
                        var i = this.series
                          , o = i.zones;
                        i = i.zoneAxis || "y";
                        var s, p = 0;
                        for (s = o[p]; this[i] >= s.value; )
                            s = o[++p];
                        return this.nonZonedColor || (this.nonZonedColor = this.color),
                        this.color = s && s.color && !this.options.color ? s.color : this.nonZonedColor,
                        s
                    }
                    ,
                    g.prototype.hasNewShapeType = function() {
                        return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType
                    }
                    ,
                    g.prototype.init = function(i, o, s) {
                        return this.series = i,
                        this.applyOptions(o, s),
                        this.id = D(this.id) ? this.id : it(),
                        this.resolveColor(),
                        i.chart.pointCount++,
                        X(this, "afterInit"),
                        this
                    }
                    ,
                    g.prototype.optionsToObject = function(i) {
                        var o = {}
                          , s = this.series
                          , p = s.options.keys
                          , C = p || s.pointArrayMap || ["y"]
                          , S = C.length
                          , M = 0
                          , T = 0;
                        if (U(i) || null === i)
                            o[C[0]] = i;
                        else if (_(i))
                            for (!p && i.length > S && ("string" == (s = typeof i[0]) ? o.name = i[0] : "number" === s && (o.x = i[0]),
                            M++); T < S; )
                                p && void 0 === i[M] || (0 < C[T].indexOf(".") ? g.prototype.setNestedProperty(o, i[M], C[T]) : o[C[T]] = i[M]),
                                M++,
                                T++;
                        else
                            "object" == typeof i && (o = i,
                            i.dataLabels && (s._hasPointLabels = !0),
                            i.marker && (s._hasPointMarkers = !0));
                        return o
                    }
                    ,
                    g.prototype.resolveColor = function() {
                        var i = this.series
                          , o = i.chart.options.chart.colorCount
                          , s = i.chart.styledMode;
                        if (delete this.nonZonedColor,
                        i.options.colorByPoint) {
                            if (!s) {
                                var p = (o = i.options.colors || i.chart.options.colors)[i.colorCounter];
                                o = o.length
                            }
                            s = i.colorCounter,
                            i.colorCounter++,
                            i.colorCounter === o && (i.colorCounter = 0)
                        } else
                            s || (p = i.color),
                            s = i.colorIndex;
                        this.colorIndex = Q(this.options.colorIndex, s),
                        this.color = Q(this.options.color, p)
                    }
                    ,
                    g.prototype.setNestedProperty = function(i, o, s) {
                        return s.split(".").reduce((function(i, s, p, C) {
                            return i[s] = C.length - 1 === p ? o : V(i[s], !0) ? i[s] : {},
                            i[s]
                        }
                        ), i),
                        i
                    }
                    ,
                    g.prototype.tooltipFormatter = function(i) {
                        var o = this.series
                          , s = o.tooltipOptions
                          , p = Q(s.valueDecimals, "")
                          , C = s.valuePrefix || ""
                          , S = s.valueSuffix || "";
                        return o.chart.styledMode && (i = o.chart.tooltip.styledModeFormat(i)),
                        (o.pointArrayMap || ["y"]).forEach((function(o) {
                            o = "{point." + o,
                            (C || S) && (i = i.replace(RegExp(o + "}", "g"), C + o + "}" + S)),
                            i = i.replace(RegExp(o + "}", "g"), o + ":,." + p + "f}")
                        }
                        )),
                        T(i, {
                            point: this,
                            series: this.series
                        }, o.chart)
                    }
                    ,
                    g.prototype.update = function(i, o, s, p) {
                        function g() {
                            S.applyOptions(i);
                            var p = T && S.hasDummyGraphic;
                            p = null === S.y ? !p : p,
                            T && p && (S.graphic = T.destroy(),
                            delete S.hasDummyGraphic),
                            V(i, !0) && (T && T.element && i && i.marker && void 0 !== i.marker.symbol && (S.graphic = T.destroy()),
                            i && i.dataLabels && S.dataLabel && (S.dataLabel = S.dataLabel.destroy()),
                            S.connector && (S.connector = S.connector.destroy())),
                            C = S.index,
                            M.updateParallelArrays(S, C),
                            O.data[C] = V(O.data[C], !0) || V(i, !0) ? S.options : Q(i, O.data[C]),
                            M.isDirty = M.isDirtyData = !0,
                            !M.fixedBox && M.hasCartesianSeries && (P.isDirtyBox = !0),
                            "point" === O.legendType && (P.isDirtyLegend = !0),
                            o && P.redraw(s)
                        }
                        var C, S = this, M = S.series, T = S.graphic, P = M.chart, O = M.options;
                        o = Q(o, !0),
                        !1 === p ? g() : S.firePointEvent("update", {
                            options: i
                        }, g)
                    }
                    ,
                    g.prototype.remove = function(i, o) {
                        this.series.removePoint(this.series.data.indexOf(this), i, o)
                    }
                    ,
                    g.prototype.select = function(i, o) {
                        var s = this
                          , p = s.series
                          , C = p.chart;
                        this.selectedStaging = i = Q(i, !s.selected),
                        s.firePointEvent(i ? "select" : "unselect", {
                            accumulate: o
                        }, (function() {
                            s.selected = s.options.selected = i,
                            p.options.data[p.data.indexOf(s)] = s.options,
                            s.setState(i && "select"),
                            o || C.getSelectedPoints().forEach((function(i) {
                                var o = i.series;
                                i.selected && i !== s && (i.selected = i.options.selected = !1,
                                o.options.data[o.data.indexOf(i)] = i.options,
                                i.setState(C.hoverPoints && o.options.inactiveOtherPoints ? "inactive" : ""),
                                i.firePointEvent("unselect"))
                            }
                            ))
                        }
                        )),
                        delete this.selectedStaging
                    }
                    ,
                    g.prototype.onMouseOver = function(i) {
                        var o = this.series.chart
                          , s = o.pointer;
                        i = i ? s.normalize(i) : s.getChartCoordinatesFromPoint(this, o.inverted),
                        s.runPointActions(i, this)
                    }
                    ,
                    g.prototype.onMouseOut = function() {
                        var i = this.series.chart;
                        this.firePointEvent("mouseOut"),
                        this.series.options.inactiveOtherPoints || (i.hoverPoints || []).forEach((function(i) {
                            i.setState()
                        }
                        )),
                        i.hoverPoints = i.hoverPoint = null
                    }
                    ,
                    g.prototype.importEvents = function() {
                        if (!this.hasImportedEvents) {
                            var i = this
                              , o = Z(i.series.options.point, i.options).events;
                            i.events = o,
                            $(o, (function(o, s) {
                                F(o) && O(i, s, o)
                            }
                            )),
                            this.hasImportedEvents = !0
                        }
                    }
                    ,
                    g.prototype.setState = function(o, s) {
                        var p, C = this.series, S = this.state, M = C.options.states[o || "normal"] || {}, T = P.plotOptions[C.type].marker && C.options.marker, O = T && !1 === T.enabled, D = T && T.states && T.states[o || "normal"] || {}, j = !1 === D.enabled, Y = C.stateMarkerGraphic, _ = this.marker || {}, F = C.chart, V = C.halo, Z = T && C.markerAttribs;
                        if (!((o = o || "") === this.state && !s || this.selected && "select" !== o || !1 === M.enabled || o && (j || O && !1 === D.enabled) || o && _.states && _.states[o] && !1 === _.states[o].enabled)) {
                            if (this.state = o,
                            Z && (p = C.markerAttribs(this, o)),
                            this.graphic && !this.hasDummyGraphic) {
                                if (S && this.graphic.removeClass("highcharts-point-" + S),
                                o && this.graphic.addClass("highcharts-point-" + o),
                                !F.styledMode) {
                                    var $ = C.pointAttribs(this, o)
                                      , tt = Q(F.options.chart.animation, M.animation);
                                    C.options.inactiveOtherPoints && U($.opacity) && ((this.dataLabels || []).forEach((function(i) {
                                        i && i.animate({
                                            opacity: $.opacity
                                        }, tt)
                                    }
                                    )),
                                    this.connector && this.connector.animate({
                                        opacity: $.opacity
                                    }, tt)),
                                    this.graphic.animate($, tt)
                                }
                                p && this.graphic.animate(p, Q(F.options.chart.animation, D.animation, T.animation)),
                                Y && Y.hide()
                            } else
                                o && D && (S = _.symbol || C.symbol,
                                Y && Y.currentSymbol !== S && (Y = Y.destroy()),
                                p && (Y ? Y[s ? "animate" : "attr"]({
                                    x: p.x,
                                    y: p.y
                                }) : S && (C.stateMarkerGraphic = Y = F.renderer.symbol(S, p.x, p.y, p.width, p.height).add(C.markerGroup),
                                Y.currentSymbol = S)),
                                !F.styledMode && Y && Y.attr(C.pointAttribs(this, o))),
                                Y && (Y[o && this.isInside ? "show" : "hide"](),
                                Y.element.point = this);
                            M = M.halo,
                            p = (Y = this.graphic || Y) && Y.visibility || "inherit",
                            M && M.size && Y && "hidden" !== p && !this.isCluster ? (V || (C.halo = V = F.renderer.path().add(Y.parentGroup)),
                            V.show()[s ? "animate" : "attr"]({
                                d: this.haloPath(M.size)
                            }),
                            V.attr({
                                class: "highcharts-halo highcharts-color-" + Q(this.colorIndex, C.colorIndex) + (this.className ? " " + this.className : ""),
                                visibility: p,
                                zIndex: -1
                            }),
                            V.point = this,
                            F.styledMode || V.attr(R({
                                fill: this.color || C.color,
                                "fill-opacity": M.opacity
                            }, i.filterUserAttributes(M.attributes || {})))) : V && V.point && V.point.haloPath && V.animate({
                                d: V.point.haloPath(0)
                            }, null, V.hide),
                            X(this, "afterSetState", {
                                state: o
                            })
                        }
                    }
                    ,
                    g.prototype.haloPath = function(i) {
                        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - i, this.plotY - i, 2 * i, 2 * i)
                    }
                    ,
                    g
                }(),
                p.Point = o
            }
            )),
            L(o, "Core/Legend.js", [o["Core/Animation/AnimationUtilities.js"], o["Core/FormatUtilities.js"], o["Core/Globals.js"], o["Core/Series/Point.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C) {
                var S = i.animObject
                  , M = i.setAnimation
                  , T = o.format;
                i = s.isFirefox;
                var P = s.marginNames;
                o = s.win;
                var O = C.addEvent
                  , D = C.createElement
                  , j = C.css
                  , R = C.defined
                  , X = C.discardElement
                  , Y = C.find
                  , _ = C.fireEvent
                  , F = C.isNumber
                  , U = C.merge
                  , V = C.pick
                  , Z = C.relativeLength
                  , $ = C.stableSort
                  , Q = C.syncTimeout;
                C = C.wrap;
                var tt = function() {
                    function a(i, o) {
                        this.allItems = [],
                        this.contentGroup = this.box = void 0,
                        this.display = !1,
                        this.group = void 0,
                        this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0,
                        this.options = {},
                        this.padding = 0,
                        this.pages = [],
                        this.proximate = !1,
                        this.scrollGroup = void 0,
                        this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0,
                        this.chart = i,
                        this.init(i, o)
                    }
                    return a.prototype.init = function(i, o) {
                        this.chart = i,
                        this.setOptions(o),
                        o.enabled && (this.render(),
                        O(this.chart, "endResize", (function() {
                            this.legend.positionCheckboxes()
                        }
                        )),
                        this.proximate ? this.unchartrender = O(this.chart, "render", (function() {
                            this.legend.proximatePositions(),
                            this.legend.positionItems()
                        }
                        )) : this.unchartrender && this.unchartrender())
                    }
                    ,
                    a.prototype.setOptions = function(i) {
                        var o = V(i.padding, 8);
                        this.options = i,
                        this.chart.styledMode || (this.itemStyle = i.itemStyle,
                        this.itemHiddenStyle = U(this.itemStyle, i.itemHiddenStyle)),
                        this.itemMarginTop = i.itemMarginTop || 0,
                        this.itemMarginBottom = i.itemMarginBottom || 0,
                        this.padding = o,
                        this.initialItemY = o - 5,
                        this.symbolWidth = V(i.symbolWidth, 16),
                        this.pages = [],
                        this.proximate = "proximate" === i.layout && !this.chart.inverted,
                        this.baseline = void 0
                    }
                    ,
                    a.prototype.update = function(i, o) {
                        var s = this.chart;
                        this.setOptions(U(!0, this.options, i)),
                        this.destroy(),
                        s.isDirtyLegend = s.isDirtyBox = !0,
                        V(o, !0) && s.redraw(),
                        _(this, "afterUpdate")
                    }
                    ,
                    a.prototype.colorizeItem = function(i, o) {
                        if (i.legendGroup[o ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"),
                        !this.chart.styledMode) {
                            var s = this.options
                              , p = i.legendItem
                              , C = i.legendLine
                              , S = i.legendSymbol
                              , M = this.itemHiddenStyle.color;
                            s = o ? s.itemStyle.color : M;
                            var T = o && i.color || M
                              , P = i.options && i.options.marker
                              , O = {
                                fill: T
                            };
                            p && p.css({
                                fill: s,
                                color: s
                            }),
                            C && C.attr({
                                stroke: T
                            }),
                            S && (P && S.isMarker && (O = i.pointAttribs(),
                            o || (O.stroke = O.fill = M)),
                            S.attr(O))
                        }
                        _(this, "afterColorizeItem", {
                            item: i,
                            visible: o
                        })
                    }
                    ,
                    a.prototype.positionItems = function() {
                        this.allItems.forEach(this.positionItem, this),
                        this.chart.isResizing || this.positionCheckboxes()
                    }
                    ,
                    a.prototype.positionItem = function(i) {
                        var o = this
                          , s = this.options
                          , p = s.symbolPadding
                          , C = !s.rtl
                          , S = i._legendItemPos;
                        s = S[0],
                        S = S[1];
                        var M = i.checkbox
                          , T = i.legendGroup;
                        T && T.element && (p = {
                            translateX: C ? s : this.legendWidth - s - 2 * p - 4,
                            translateY: S
                        },
                        C = function() {
                            _(o, "afterPositionItem", {
                                item: i
                            })
                        }
                        ,
                        R(T.translateY) ? T.animate(p, void 0, C) : (T.attr(p),
                        C())),
                        M && (M.x = s,
                        M.y = S)
                    }
                    ,
                    a.prototype.destroyItem = function(i) {
                        var o = i.checkbox;
                        ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach((function(o) {
                            i[o] && (i[o] = i[o].destroy())
                        }
                        )),
                        o && X(i.checkbox)
                    }
                    ,
                    a.prototype.destroy = function() {
                        function a(i) {
                            this[i] && (this[i] = this[i].destroy())
                        }
                        this.getAllItems().forEach((function(i) {
                            ["legendItem", "legendGroup"].forEach(a, i)
                        }
                        )),
                        "clipRect up down pager nav box title group".split(" ").forEach(a, this),
                        this.display = null
                    }
                    ,
                    a.prototype.positionCheckboxes = function() {
                        var i = this.group && this.group.alignAttr
                          , o = this.clipHeight || this.legendHeight
                          , s = this.titleHeight;
                        if (i) {
                            var p = i.translateY;
                            this.allItems.forEach((function(C) {
                                var S = C.checkbox;
                                if (S) {
                                    var M = p + s + S.y + (this.scrollOffset || 0) + 3;
                                    j(S, {
                                        left: i.translateX + C.checkboxOffset + S.x - 20 + "px",
                                        top: M + "px",
                                        display: this.proximate || M > p - 6 && M < p + o - 6 ? "" : "none"
                                    })
                                }
                            }
                            ), this)
                        }
                    }
                    ,
                    a.prototype.renderTitle = function() {
                        var i = this.options
                          , o = this.padding
                          , s = i.title
                          , p = 0;
                        s.text && (this.title || (this.title = this.chart.renderer.label(s.text, o - 3, o - 4, null, null, null, i.useHTML, null, "legend-title").attr({
                            zIndex: 1
                        }),
                        this.chart.styledMode || this.title.css(s.style),
                        this.title.add(this.group)),
                        s.width || this.title.css({
                            width: this.maxLegendWidth + "px"
                        }),
                        p = (i = this.title.getBBox()).height,
                        this.offsetWidth = i.width,
                        this.contentGroup.attr({
                            translateY: p
                        })),
                        this.titleHeight = p
                    }
                    ,
                    a.prototype.setText = function(i) {
                        var o = this.options;
                        i.legendItem.attr({
                            text: o.labelFormat ? T(o.labelFormat, i, this.chart) : o.labelFormatter.call(i)
                        })
                    }
                    ,
                    a.prototype.renderItem = function(i) {
                        var o = this.chart
                          , s = o.renderer
                          , p = this.options
                          , C = this.symbolWidth
                          , S = p.symbolPadding || 0
                          , M = this.itemStyle
                          , T = this.itemHiddenStyle
                          , P = "horizontal" === p.layout ? V(p.itemDistance, 20) : 0
                          , O = !p.rtl
                          , D = i.legendItem
                          , j = !i.series
                          , R = !j && i.series.drawLegendSymbol ? i.series : i
                          , X = R.options
                          , Y = this.createCheckboxForItem && X && X.showCheckbox;
                        X = C + S + P + (Y ? 20 : 0);
                        var _ = p.useHTML
                          , F = i.options.className;
                        D || (i.legendGroup = s.g("legend-item").addClass("highcharts-" + R.type + "-series highcharts-color-" + i.colorIndex + (F ? " " + F : "") + (j ? " highcharts-series-" + i.index : "")).attr({
                            zIndex: 1
                        }).add(this.scrollGroup),
                        i.legendItem = D = s.text("", O ? C + S : -S, this.baseline || 0, _),
                        o.styledMode || D.css(U(i.visible ? M : T)),
                        D.attr({
                            align: O ? "left" : "right",
                            zIndex: 2
                        }).add(i.legendGroup),
                        this.baseline || (this.fontMetrics = s.fontMetrics(o.styledMode ? 12 : M.fontSize, D),
                        this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop,
                        D.attr("y", this.baseline),
                        this.symbolHeight = p.symbolHeight || this.fontMetrics.f,
                        p.squareSymbol && (this.symbolWidth = V(p.symbolWidth, Math.max(this.symbolHeight, 16)),
                        X = this.symbolWidth + S + P + (Y ? 20 : 0),
                        O && D.attr("x", this.symbolWidth + S))),
                        R.drawLegendSymbol(this, i),
                        this.setItemEvents && this.setItemEvents(i, D, _)),
                        Y && !i.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(i),
                        this.colorizeItem(i, i.visible),
                        !o.styledMode && M.width || D.css({
                            width: (p.itemWidth || this.widthOption || o.spacingBox.width) - X + "px"
                        }),
                        this.setText(i),
                        o = D.getBBox(),
                        i.itemWidth = i.checkboxOffset = p.itemWidth || i.legendItemWidth || o.width + X,
                        this.maxItemWidth = Math.max(this.maxItemWidth, i.itemWidth),
                        this.totalItemWidth += i.itemWidth,
                        this.itemHeight = i.itemHeight = Math.round(i.legendItemHeight || o.height || this.symbolHeight)
                    }
                    ,
                    a.prototype.layoutItem = function(i) {
                        var o = this.options
                          , s = this.padding
                          , p = "horizontal" === o.layout
                          , C = i.itemHeight
                          , S = this.itemMarginBottom
                          , M = this.itemMarginTop
                          , T = p ? V(o.itemDistance, 20) : 0
                          , P = this.maxLegendWidth;
                        o = o.alignColumns && this.totalItemWidth > P ? this.maxItemWidth : i.itemWidth,
                        p && this.itemX - s + o > P && (this.itemX = s,
                        this.lastLineHeight && (this.itemY += M + this.lastLineHeight + S),
                        this.lastLineHeight = 0),
                        this.lastItemY = M + this.itemY + S,
                        this.lastLineHeight = Math.max(C, this.lastLineHeight),
                        i._legendItemPos = [this.itemX, this.itemY],
                        p ? this.itemX += o : (this.itemY += M + C + S,
                        this.lastLineHeight = C),
                        this.offsetWidth = this.widthOption || Math.max((p ? this.itemX - s - (i.checkbox ? 0 : T) : o) + s, this.offsetWidth)
                    }
                    ,
                    a.prototype.getAllItems = function() {
                        var i = [];
                        return this.chart.series.forEach((function(o) {
                            var s = o && o.options;
                            o && V(s.showInLegend, !R(s.linkedTo) && void 0, !0) && (i = i.concat(o.legendItems || ("point" === s.legendType ? o.data : o)))
                        }
                        )),
                        _(this, "afterGetAllItems", {
                            allItems: i
                        }),
                        i
                    }
                    ,
                    a.prototype.getAlignment = function() {
                        var i = this.options;
                        return this.proximate ? i.align.charAt(0) + "tv" : i.floating ? "" : i.align.charAt(0) + i.verticalAlign.charAt(0) + i.layout.charAt(0)
                    }
                    ,
                    a.prototype.adjustMargins = function(i, o) {
                        var s = this.chart
                          , p = this.options
                          , C = this.getAlignment();
                        C && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach((function(S, M) {
                            S.test(C) && !R(i[M]) && (s[P[M]] = Math.max(s[P[M]], s.legend[(M + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][M] * p[M % 2 ? "x" : "y"] + V(p.margin, 12) + o[M] + (s.titleOffset[M] || 0)))
                        }
                        ))
                    }
                    ,
                    a.prototype.proximatePositions = function() {
                        var i = this.chart
                          , o = []
                          , p = "left" === this.options.align;
                        this.allItems.forEach((function(s) {
                            var C, S = p;
                            if (s.yAxis) {
                                s.xAxis.options.reversed && (S = !S),
                                s.points && (C = Y(S ? s.points : s.points.slice(0).reverse(), (function(i) {
                                    return F(i.plotY)
                                }
                                ))),
                                S = this.itemMarginTop + s.legendItem.getBBox().height + this.itemMarginBottom;
                                var M = s.yAxis.top - i.plotTop;
                                s.visible ? (C = C ? C.plotY : s.yAxis.height,
                                C += M - .3 * S) : C = M + s.yAxis.height,
                                o.push({
                                    target: C,
                                    size: S,
                                    item: s
                                })
                            }
                        }
                        ), this),
                        s.distribute(o, i.plotHeight),
                        o.forEach((function(o) {
                            o.item._legendItemPos[1] = i.plotTop - i.spacing[0] + o.pos
                        }
                        ))
                    }
                    ,
                    a.prototype.render = function() {
                        var i = this.chart
                          , o = i.renderer
                          , s = this.group
                          , p = this.box
                          , C = this.options
                          , S = this.padding;
                        this.itemX = S,
                        this.itemY = this.initialItemY,
                        this.lastItemY = this.offsetWidth = 0,
                        this.widthOption = Z(C.width, i.spacingBox.width - S);
                        var M = i.spacingBox.width - 2 * S - C.x;
                        -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (M /= 2),
                        this.maxLegendWidth = this.widthOption || M,
                        s || (this.group = s = o.g("legend").addClass(C.className || "").attr({
                            zIndex: 7
                        }).add(),
                        this.contentGroup = o.g().attr({
                            zIndex: 1
                        }).add(s),
                        this.scrollGroup = o.g().add(this.contentGroup)),
                        this.renderTitle();
                        var T = this.getAllItems();
                        $(T, (function(i, o) {
                            return (i.options && i.options.legendIndex || 0) - (o.options && o.options.legendIndex || 0)
                        }
                        )),
                        C.reversed && T.reverse(),
                        this.allItems = T,
                        this.display = M = !!T.length,
                        this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0,
                        T.forEach(this.renderItem, this),
                        T.forEach(this.layoutItem, this),
                        T = (this.widthOption || this.offsetWidth) + S;
                        var P = this.lastItemY + this.lastLineHeight + this.titleHeight;
                        P = this.handleOverflow(P),
                        P += S,
                        p || (this.box = p = o.rect().addClass("highcharts-legend-box").attr({
                            r: C.borderRadius
                        }).add(s),
                        p.isNew = !0),
                        i.styledMode || p.attr({
                            stroke: C.borderColor,
                            "stroke-width": C.borderWidth || 0,
                            fill: C.backgroundColor || "none"
                        }).shadow(C.shadow),
                        0 < T && 0 < P && (p[p.isNew ? "attr" : "animate"](p.crisp.call({}, {
                            x: 0,
                            y: 0,
                            width: T,
                            height: P
                        }, p.strokeWidth())),
                        p.isNew = !1),
                        p[M ? "show" : "hide"](),
                        i.styledMode && "none" === s.getStyle("display") && (T = P = 0),
                        this.legendWidth = T,
                        this.legendHeight = P,
                        M && this.align(),
                        this.proximate || this.positionItems(),
                        _(this, "afterRender")
                    }
                    ,
                    a.prototype.align = function(i) {
                        void 0 === i && (i = this.chart.spacingBox);
                        var o = this.chart
                          , s = this.options
                          , p = i.y;
                        /(lth|ct|rth)/.test(this.getAlignment()) && 0 < o.titleOffset[0] ? p += o.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < o.titleOffset[2] && (p -= o.titleOffset[2]),
                        p !== i.y && (i = U(i, {
                            y: p
                        })),
                        this.group.align(U(s, {
                            width: this.legendWidth,
                            height: this.legendHeight,
                            verticalAlign: this.proximate ? "top" : s.verticalAlign
                        }), !0, i)
                    }
                    ,
                    a.prototype.handleOverflow = function(i) {
                        var o = this
                          , s = this.chart
                          , p = s.renderer
                          , C = this.options
                          , S = C.y
                          , M = this.padding;
                        S = s.spacingBox.height + ("top" === C.verticalAlign ? -S : S) - M;
                        var T, P, O = C.maxHeight, D = this.clipRect, j = C.navigation, R = V(j.animation, !0), X = j.arrowSize || 12, Y = this.nav, _ = this.pages, F = this.allItems, I = function(i) {
                            "number" == typeof i ? D.attr({
                                height: i
                            }) : D && (o.clipRect = D.destroy(),
                            o.contentGroup.clip()),
                            o.contentGroup.div && (o.contentGroup.div.style.clip = i ? "rect(" + M + "px,9999px," + (M + i) + "px,0)" : "auto")
                        }, N = function(i) {
                            return o[i] = p.circle(0, 0, 1.3 * X).translate(X / 2, X / 2).add(Y),
                            s.styledMode || o[i].attr("fill", "rgba(0,0,0,0.0001)"),
                            o[i]
                        };
                        return "horizontal" !== C.layout || "middle" === C.verticalAlign || C.floating || (S /= 2),
                        O && (S = Math.min(S, O)),
                        _.length = 0,
                        i && 0 < S && i > S && !1 !== j.enabled ? (this.clipHeight = T = Math.max(S - 20 - this.titleHeight - M, 0),
                        this.currentPage = V(this.currentPage, 1),
                        this.fullHeight = i,
                        F.forEach((function(i, o) {
                            var s = i._legendItemPos[1]
                              , p = Math.round(i.legendItem.getBBox().height)
                              , C = _.length;
                            (!C || s - _[C - 1] > T && (P || s) !== _[C - 1]) && (_.push(P || s),
                            C++),
                            i.pageIx = C - 1,
                            P && (F[o - 1].pageIx = C - 1),
                            o === F.length - 1 && s + p - _[C - 1] > T && s !== P && (_.push(s),
                            i.pageIx = C),
                            s !== P && (P = s)
                        }
                        )),
                        D || (D = o.clipRect = p.clipRect(0, M, 9999, 0),
                        o.contentGroup.clip(D)),
                        I(T),
                        Y || (this.nav = Y = p.g().attr({
                            zIndex: 1
                        }).add(this.group),
                        this.up = p.symbol("triangle", 0, 0, X, X).add(Y),
                        N("upTracker").on("click", (function() {
                            o.scroll(-1, R)
                        }
                        )),
                        this.pager = p.text("", 15, 10).addClass("highcharts-legend-navigation"),
                        s.styledMode || this.pager.css(j.style),
                        this.pager.add(Y),
                        this.down = p.symbol("triangle-down", 0, 0, X, X).add(Y),
                        N("downTracker").on("click", (function() {
                            o.scroll(1, R)
                        }
                        ))),
                        o.scroll(0),
                        i = S) : Y && (I(),
                        this.nav = Y.destroy(),
                        this.scrollGroup.attr({
                            translateY: 1
                        }),
                        this.clipHeight = 0),
                        i
                    }
                    ,
                    a.prototype.scroll = function(i, o) {
                        var s = this
                          , p = this.chart
                          , C = this.pages
                          , T = C.length
                          , P = this.currentPage + i;
                        i = this.clipHeight;
                        var O = this.options.navigation
                          , D = this.pager
                          , j = this.padding;
                        P > T && (P = T),
                        0 < P && (void 0 !== o && M(o, p),
                        this.nav.attr({
                            translateX: j,
                            translateY: i + this.padding + 7 + this.titleHeight,
                            visibility: "visible"
                        }),
                        [this.up, this.upTracker].forEach((function(i) {
                            i.attr({
                                class: 1 === P ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                            })
                        }
                        )),
                        D.attr({
                            text: P + "/" + T
                        }),
                        [this.down, this.downTracker].forEach((function(i) {
                            i.attr({
                                x: 18 + this.pager.getBBox().width,
                                class: P === T ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                            })
                        }
                        ), this),
                        p.styledMode || (this.up.attr({
                            fill: 1 === P ? O.inactiveColor : O.activeColor
                        }),
                        this.upTracker.css({
                            cursor: 1 === P ? "default" : "pointer"
                        }),
                        this.down.attr({
                            fill: P === T ? O.inactiveColor : O.activeColor
                        }),
                        this.downTracker.css({
                            cursor: P === T ? "default" : "pointer"
                        })),
                        this.scrollOffset = -C[P - 1] + this.initialItemY,
                        this.scrollGroup.animate({
                            translateY: this.scrollOffset
                        }),
                        this.currentPage = P,
                        this.positionCheckboxes(),
                        o = S(V(o, p.renderer.globalAnimation, !0)),
                        Q((function() {
                            _(s, "afterScroll", {
                                currentPage: P
                            })
                        }
                        ), o.duration))
                    }
                    ,
                    a.prototype.setItemEvents = function(i, o, s) {
                        var C = this
                          , S = C.chart.renderer.boxWrapper
                          , M = i instanceof p
                          , T = "highcharts-legend-" + (M ? "point" : "series") + "-active"
                          , P = C.chart.styledMode;
                        (s ? [o, i.legendSymbol] : [i.legendGroup]).forEach((function(s) {
                            s && s.on("mouseover", (function() {
                                i.visible && C.allItems.forEach((function(o) {
                                    i !== o && o.setState("inactive", !M)
                                }
                                )),
                                i.setState("hover"),
                                i.visible && S.addClass(T),
                                P || o.css(C.options.itemHoverStyle)
                            }
                            )).on("mouseout", (function() {
                                C.chart.styledMode || o.css(U(i.visible ? C.itemStyle : C.itemHiddenStyle)),
                                C.allItems.forEach((function(o) {
                                    i !== o && o.setState("", !M)
                                }
                                )),
                                S.removeClass(T),
                                i.setState()
                            }
                            )).on("click", (function(o) {
                                var c = function() {
                                    i.setVisible && i.setVisible(),
                                    C.allItems.forEach((function(o) {
                                        i !== o && o.setState(i.visible ? "inactive" : "", !M)
                                    }
                                    ))
                                };
                                S.removeClass(T),
                                o = {
                                    browserEvent: o
                                },
                                i.firePointEvent ? i.firePointEvent("legendItemClick", o, c) : _(i, "legendItemClick", o, c)
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    a.prototype.createCheckboxForItem = function(i) {
                        i.checkbox = D("input", {
                            type: "checkbox",
                            className: "highcharts-legend-checkbox",
                            checked: i.selected,
                            defaultChecked: i.selected
                        }, this.options.itemCheckboxStyle, this.chart.container),
                        O(i.checkbox, "click", (function(o) {
                            _(i.series || i, "checkboxClick", {
                                checked: o.target.checked,
                                item: i
                            }, (function() {
                                i.select()
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    a
                }();
                return (/Trident\/7\.0/.test(o.navigator && o.navigator.userAgent) || i) && C(tt.prototype, "positionItem", (function(i, o) {
                    var s = this
                      , c = function() {
                        o._legendItemPos && i.call(s, o)
                    };
                    c(),
                    s.bubbleLegend || setTimeout(c)
                }
                )),
                s.Legend = tt,
                s.Legend
            }
            )),
            L(o, "Core/Series/SeriesRegistry.js", [o["Core/Globals.js"], o["Core/DefaultOptions.js"], o["Core/Series/Point.js"], o["Core/Utilities.js"]], (function(i, o, s, p) {
                var C, S = o.defaultOptions, M = p.error, T = p.extendClass, P = p.merge;
                return function(o) {
                    function f(i, p) {
                        var C = S.plotOptions || {}
                          , M = p.defaultOptions;
                        p.prototype.pointClass || (p.prototype.pointClass = s),
                        p.prototype.type = i,
                        M && (C[i] = M),
                        o.seriesTypes[i] = p
                    }
                    o.seriesTypes = i.seriesTypes,
                    o.getSeries = function(i, s) {
                        void 0 === s && (s = {});
                        var p = i.options.chart;
                        p = s.type || p.type || p.defaultSeriesType || "";
                        var C = o.seriesTypes[p];
                        return o || M(17, !0, i, {
                            missingModuleFor: p
                        }),
                        "function" == typeof (p = new C).init && p.init(i, s),
                        p
                    }
                    ,
                    o.registerSeriesType = f,
                    o.seriesType = function(i, p, C, M, O) {
                        var D = S.plotOptions || {};
                        return p = p || "",
                        D[i] = P(D[p], C),
                        f(i, T(o.seriesTypes[p] || function() {}
                        , M)),
                        o.seriesTypes[i].prototype.type = i,
                        O && (o.seriesTypes[i].prototype.pointClass = T(s, O)),
                        o.seriesTypes[i]
                    }
                }(C || (C = {})),
                i.seriesType = C.seriesType,
                C
            }
            )),
            L(o, "Core/Chart/Chart.js", [o["Core/Animation/AnimationUtilities.js"], o["Core/Axis/Axis.js"], o["Core/FormatUtilities.js"], o["Core/Foundation.js"], o["Core/Globals.js"], o["Core/Legend.js"], o["Core/MSPointer.js"], o["Core/DefaultOptions.js"], o["Core/Color/Palette.js"], o["Core/Pointer.js"], o["Core/Renderer/RendererRegistry.js"], o["Core/Series/SeriesRegistry.js"], o["Core/Time.js"], o["Core/Utilities.js"], o["Core/Renderer/HTML/AST.js"]], (function(i, o, s, p, C, S, M, T, P, O, D, j, R, X, Y) {
                var _ = i.animate
                  , F = i.animObject
                  , U = i.setAnimation
                  , V = s.numberFormat
                  , Z = p.registerEventOptions
                  , $ = C.charts
                  , Q = C.doc
                  , tt = C.marginNames
                  , et = C.win
                  , it = T.defaultOptions
                  , ot = T.defaultTime
                  , st = j.seriesTypes
                  , rt = X.addEvent
                  , nt = X.attr
                  , at = X.cleanRecursively
                  , ht = X.createElement
                  , lt = X.css
                  , ct = X.defined
                  , dt = X.discardElement
                  , pt = X.erase
                  , ut = X.error
                  , ft = X.extend
                  , gt = X.find
                  , mt = X.fireEvent
                  , yt = X.getStyle
                  , vt = X.isArray
                  , xt = X.isNumber
                  , bt = X.isObject
                  , Ct = X.isString
                  , kt = X.merge
                  , St = X.objectEach
                  , wt = X.pick
                  , Mt = X.pInt
                  , Tt = X.relativeLength
                  , At = X.removeEvent
                  , Pt = X.splat
                  , Lt = X.syncTimeout
                  , Ot = X.uniqueKey;
                return i = function() {
                    function a(i, o, s) {
                        this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0,
                        this.sharedClips = {},
                        this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0,
                        this.getArgs(i, o, s)
                    }
                    return a.chart = function(i, o, s) {
                        return new a(i,o,s)
                    }
                    ,
                    a.prototype.getArgs = function(i, o, s) {
                        Ct(i) || i.nodeName ? (this.renderTo = i,
                        this.init(o, s)) : this.init(i, o)
                    }
                    ,
                    a.prototype.init = function(i, o) {
                        var s = i.plotOptions || {};
                        mt(this, "init", {
                            args: arguments
                        }, (function() {
                            var p = kt(it, i)
                              , S = p.chart;
                            St(p.plotOptions, (function(i, o) {
                                bt(i) && (i.tooltip = s[o] && kt(s[o].tooltip) || void 0)
                            }
                            )),
                            p.tooltip.userOptions = i.chart && i.chart.forExport && i.tooltip.userOptions || i.tooltip,
                            this.userOptions = i,
                            this.margin = [],
                            this.spacing = [],
                            this.bounds = {
                                h: {},
                                v: {}
                            },
                            this.labelCollectors = [],
                            this.callback = o,
                            this.isResizing = 0,
                            this.options = p,
                            this.axes = [],
                            this.series = [],
                            this.time = i.time && Object.keys(i.time).length ? new R(i.time) : C.time,
                            this.numberFormatter = S.numberFormatter || V,
                            this.styledMode = S.styledMode,
                            this.hasCartesianSeries = S.showAxes,
                            this.index = $.length,
                            $.push(this),
                            C.chartCount++,
                            Z(this, S),
                            this.xAxis = [],
                            this.yAxis = [],
                            this.pointCount = this.colorCounter = this.symbolCounter = 0,
                            mt(this, "afterInit"),
                            this.firstRender()
                        }
                        ))
                    }
                    ,
                    a.prototype.initSeries = function(i) {
                        var o = this.options.chart;
                        o = i.type || o.type || o.defaultSeriesType;
                        var s = st[o];
                        return s || ut(17, !0, this, {
                            missingModuleFor: o
                        }),
                        "function" == typeof (o = new s).init && o.init(this, i),
                        o
                    }
                    ,
                    a.prototype.setSeriesData = function() {
                        this.getSeriesOrderByLinks().forEach((function(i) {
                            i.points || i.data || !i.enabledDataSorting || i.setData(i.options.data, !1)
                        }
                        ))
                    }
                    ,
                    a.prototype.getSeriesOrderByLinks = function() {
                        return this.series.concat().sort((function(i, o) {
                            return i.linkedSeries.length || o.linkedSeries.length ? o.linkedSeries.length - i.linkedSeries.length : 0
                        }
                        ))
                    }
                    ,
                    a.prototype.orderSeries = function(i) {
                        var o = this.series;
                        i = i || 0;
                        for (var s = o.length; i < s; ++i)
                            o[i] && (o[i].index = i,
                            o[i].name = o[i].getName())
                    }
                    ,
                    a.prototype.isInsidePlot = function(i, o, s) {
                        void 0 === s && (s = {});
                        var p = this.inverted
                          , C = this.plotBox
                          , S = this.plotLeft
                          , M = this.plotTop
                          , T = this.scrollablePlotBox
                          , P = 0
                          , O = 0;
                        s.visiblePlotOnly && this.scrollingContainer && (P = (O = this.scrollingContainer).scrollLeft,
                        O = O.scrollTop);
                        var D = s.series;
                        if (C = s.visiblePlotOnly && T || C,
                        i = {
                            x: T = s.inverted ? o : i,
                            y: o = s.inverted ? i : o,
                            isInsidePlot: !0
                        },
                        !s.ignoreX) {
                            var j = D && (p ? D.yAxis : D.xAxis) || {
                                pos: S,
                                len: 1 / 0
                            };
                            (T = s.paneCoordinates ? j.pos + T : S + T) >= Math.max(P + S, j.pos) && T <= Math.min(P + S + C.width, j.pos + j.len) || (i.isInsidePlot = !1)
                        }
                        return !s.ignoreY && i.isInsidePlot && (p = D && (p ? D.xAxis : D.yAxis) || {
                            pos: M,
                            len: 1 / 0
                        },
                        (s = s.paneCoordinates ? p.pos + o : M + o) >= Math.max(O + M, p.pos) && s <= Math.min(O + M + C.height, p.pos + p.len) || (i.isInsidePlot = !1)),
                        mt(this, "afterIsInsidePlot", i),
                        i.isInsidePlot
                    }
                    ,
                    a.prototype.redraw = function(i) {
                        mt(this, "beforeRedraw");
                        var o = this.hasCartesianSeries ? this.axes : this.colorAxis || []
                          , s = this.series
                          , p = this.pointer
                          , C = this.legend
                          , S = this.userOptions.legend
                          , M = this.renderer
                          , T = M.isHidden()
                          , P = []
                          , O = this.isDirtyBox
                          , D = this.isDirtyLegend;
                        for (this.setResponsive && this.setResponsive(!1),
                        U(!!this.hasRendered && i, this),
                        T && this.temporaryDisplay(),
                        this.layOutTitles(),
                        i = s.length; i--; ) {
                            var j = s[i];
                            if (j.options.stacking || j.options.centerInCategory) {
                                var R = !0;
                                if (j.isDirty) {
                                    var X = !0;
                                    break
                                }
                            }
                        }
                        if (X)
                            for (i = s.length; i--; )
                                (j = s[i]).options.stacking && (j.isDirty = !0);
                        s.forEach((function(i) {
                            i.isDirty && ("point" === i.options.legendType ? ("function" == typeof i.updateTotals && i.updateTotals(),
                            D = !0) : S && (S.labelFormatter || S.labelFormat) && (D = !0)),
                            i.isDirtyData && mt(i, "updatedData")
                        }
                        )),
                        D && C && C.options.enabled && (C.render(),
                        this.isDirtyLegend = !1),
                        R && this.getStacks(),
                        o.forEach((function(i) {
                            i.updateNames(),
                            i.setScale()
                        }
                        )),
                        this.getMargins(),
                        o.forEach((function(i) {
                            i.isDirty && (O = !0)
                        }
                        )),
                        o.forEach((function(i) {
                            var o = i.min + "," + i.max;
                            i.extKey !== o && (i.extKey = o,
                            P.push((function() {
                                mt(i, "afterSetExtremes", ft(i.eventArgs, i.getExtremes())),
                                delete i.eventArgs
                            }
                            ))),
                            (O || R) && i.redraw()
                        }
                        )),
                        O && this.drawChartBox(),
                        mt(this, "predraw"),
                        s.forEach((function(i) {
                            (O || i.isDirty) && i.visible && i.redraw(),
                            i.isDirtyData = !1
                        }
                        )),
                        p && p.reset(!0),
                        M.draw(),
                        mt(this, "redraw"),
                        mt(this, "render"),
                        T && this.temporaryDisplay(!0),
                        P.forEach((function(i) {
                            i.call()
                        }
                        ))
                    }
                    ,
                    a.prototype.get = function(i) {
                        function b(o) {
                            return o.id === i || o.options && o.options.id === i
                        }
                        for (var o = this.series, s = gt(this.axes, b) || gt(this.series, b), p = 0; !s && p < o.length; p++)
                            s = gt(o[p].points || [], b);
                        return s
                    }
                    ,
                    a.prototype.getAxes = function() {
                        var i = this
                          , s = this.options
                          , p = s.xAxis = Pt(s.xAxis || {});
                        s = s.yAxis = Pt(s.yAxis || {}),
                        mt(this, "getAxes"),
                        p.forEach((function(i, o) {
                            i.index = o,
                            i.isX = !0
                        }
                        )),
                        s.forEach((function(i, o) {
                            i.index = o
                        }
                        )),
                        p.concat(s).forEach((function(s) {
                            new o(i,s)
                        }
                        )),
                        mt(this, "afterGetAxes")
                    }
                    ,
                    a.prototype.getSelectedPoints = function() {
                        var i = [];
                        return this.series.forEach((function(o) {
                            i = i.concat(o.getPointsCollection().filter((function(i) {
                                return wt(i.selectedStaging, i.selected)
                            }
                            )))
                        }
                        )),
                        i
                    }
                    ,
                    a.prototype.getSelectedSeries = function() {
                        return this.series.filter((function(i) {
                            return i.selected
                        }
                        ))
                    }
                    ,
                    a.prototype.setTitle = function(i, o, s) {
                        this.applyDescription("title", i),
                        this.applyDescription("subtitle", o),
                        this.applyDescription("caption", void 0),
                        this.layOutTitles(s)
                    }
                    ,
                    a.prototype.applyDescription = function(i, o) {
                        var s = this
                          , p = "title" === i ? {
                            color: P.neutralColor80,
                            fontSize: this.options.isStock ? "16px" : "18px"
                        } : {
                            color: P.neutralColor60
                        };
                        p = this.options[i] = kt(!this.styledMode && {
                            style: p
                        }, this.options[i], o);
                        var C = this[i];
                        C && o && (this[i] = C = C.destroy()),
                        p && !C && ((C = this.renderer.text(p.text, 0, 0, p.useHTML).attr({
                            align: p.align,
                            class: "highcharts-" + i,
                            zIndex: p.zIndex || 4
                        }).add()).update = function(o) {
                            s[{
                                title: "setTitle",
                                subtitle: "setSubtitle",
                                caption: "setCaption"
                            }[i]](o)
                        }
                        ,
                        this.styledMode || C.css(p.style),
                        this[i] = C)
                    }
                    ,
                    a.prototype.layOutTitles = function(i) {
                        var o = [0, 0, 0]
                          , s = this.renderer
                          , p = this.spacingBox;
                        ["title", "subtitle", "caption"].forEach((function(i) {
                            var C, S = this[i], M = this.options[i], T = M.verticalAlign || "top";
                            if (i = "title" === i ? "top" === T ? -3 : 0 : "top" === T ? o[0] + 2 : 0,
                            S) {
                                this.styledMode || (C = M.style && M.style.fontSize),
                                C = s.fontMetrics(C, S).b,
                                S.css({
                                    width: (M.width || p.width + (M.widthAdjust || 0)) + "px"
                                });
                                var P = Math.round(S.getBBox(M.useHTML).height);
                                S.align(ft({
                                    y: "bottom" === T ? C : i + C,
                                    height: P
                                }, M), !1, "spacingBox"),
                                M.floating || ("top" === T ? o[0] = Math.ceil(o[0] + P) : "bottom" === T && (o[2] = Math.ceil(o[2] + P)))
                            }
                        }
                        ), this),
                        o[0] && "top" === (this.options.title.verticalAlign || "top") && (o[0] += this.options.title.margin),
                        o[2] && "bottom" === this.options.caption.verticalAlign && (o[2] += this.options.caption.margin);
                        var C = !this.titleOffset || this.titleOffset.join(",") !== o.join(",");
                        this.titleOffset = o,
                        mt(this, "afterLayOutTitles"),
                        !this.isDirtyBox && C && (this.isDirtyBox = this.isDirtyLegend = C,
                        this.hasRendered && wt(i, !0) && this.isDirtyBox && this.redraw())
                    }
                    ,
                    a.prototype.getChartSize = function() {
                        var i = this.options.chart
                          , o = i.width;
                        i = i.height;
                        var s = this.renderTo;
                        ct(o) || (this.containerWidth = yt(s, "width")),
                        ct(i) || (this.containerHeight = yt(s, "height")),
                        this.chartWidth = Math.max(0, o || this.containerWidth || 600),
                        this.chartHeight = Math.max(0, Tt(i, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                    }
                    ,
                    a.prototype.temporaryDisplay = function(i) {
                        var o = this.renderTo;
                        if (i)
                            for (; o && o.style; )
                                o.hcOrigStyle && (lt(o, o.hcOrigStyle),
                                delete o.hcOrigStyle),
                                o.hcOrigDetached && (Q.body.removeChild(o),
                                o.hcOrigDetached = !1),
                                o = o.parentNode;
                        else
                            for (; o && o.style && (Q.body.contains(o) || o.parentNode || (o.hcOrigDetached = !0,
                            Q.body.appendChild(o)),
                            ("none" === yt(o, "display", !1) || o.hcOricDetached) && (o.hcOrigStyle = {
                                display: o.style.display,
                                height: o.style.height,
                                overflow: o.style.overflow
                            },
                            i = {
                                display: "block",
                                overflow: "hidden"
                            },
                            o !== this.renderTo && (i.height = 0),
                            lt(o, i),
                            o.offsetWidth || o.style.setProperty("display", "block", "important")),
                            (o = o.parentNode) !== Q.body); )
                                ;
                    }
                    ,
                    a.prototype.setClassName = function(i) {
                        this.container.className = "highcharts-container " + (i || "")
                    }
                    ,
                    a.prototype.getContainer = function() {
                        var i, o = this.options, s = o.chart, p = Ot(), C = this.renderTo;
                        C || (this.renderTo = C = s.renderTo),
                        Ct(C) && (this.renderTo = C = Q.getElementById(C)),
                        C || ut(13, !0, this);
                        var S = Mt(nt(C, "data-highcharts-chart"));
                        xt(S) && $[S] && $[S].hasRendered && $[S].destroy(),
                        nt(C, "data-highcharts-chart", this.index),
                        C.innerHTML = "",
                        s.skipClone || C.offsetWidth || this.temporaryDisplay(),
                        this.getChartSize(),
                        S = this.chartWidth;
                        var M = this.chartHeight;
                        if (lt(C, {
                            overflow: "hidden"
                        }),
                        this.styledMode || (i = ft({
                            position: "relative",
                            overflow: "hidden",
                            width: S + "px",
                            height: M + "px",
                            textAlign: "left",
                            lineHeight: "normal",
                            zIndex: 0,
                            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                            userSelect: "none",
                            "touch-action": "manipulation",
                            outline: "none"
                        }, s.style || {})),
                        this.container = p = ht("div", {
                            id: p
                        }, i, C),
                        this._cursor = p.style.cursor,
                        this.renderer = new (D.getRendererType(s.renderer))(p,S,M,void 0,s.forExport,o.exporting && o.exporting.allowHTML,this.styledMode),
                        U(void 0, this),
                        this.setClassName(s.className),
                        this.styledMode)
                            for (var T in o.defs)
                                this.renderer.definition(o.defs[T]);
                        else
                            this.renderer.setStyle(s.style);
                        this.renderer.chartIndex = this.index,
                        mt(this, "afterGetContainer")
                    }
                    ,
                    a.prototype.getMargins = function(i) {
                        var o = this.spacing
                          , s = this.margin
                          , p = this.titleOffset;
                        this.resetMargins(),
                        p[0] && !ct(s[0]) && (this.plotTop = Math.max(this.plotTop, p[0] + o[0])),
                        p[2] && !ct(s[2]) && (this.marginBottom = Math.max(this.marginBottom, p[2] + o[2])),
                        this.legend && this.legend.display && this.legend.adjustMargins(s, o),
                        mt(this, "getMargins"),
                        i || this.getAxisMargins()
                    }
                    ,
                    a.prototype.getAxisMargins = function() {
                        var i = this
                          , o = i.axisOffset = [0, 0, 0, 0]
                          , s = i.colorAxis
                          , p = i.margin
                          , g = function(i) {
                            i.forEach((function(i) {
                                i.visible && i.getOffset()
                            }
                            ))
                        };
                        i.hasCartesianSeries ? g(i.axes) : s && s.length && g(s),
                        tt.forEach((function(s, C) {
                            ct(p[C]) || (i[s] += o[C])
                        }
                        )),
                        i.setChartSize()
                    }
                    ,
                    a.prototype.reflow = function(i) {
                        var o = this
                          , s = o.options.chart
                          , p = o.renderTo
                          , C = ct(s.width) && ct(s.height)
                          , S = s.width || yt(p, "width");
                        s = s.height || yt(p, "height"),
                        p = i ? i.target : et,
                        delete o.pointer.chartPosition,
                        C || o.isPrinting || !S || !s || p !== et && p !== Q || (S === o.containerWidth && s === o.containerHeight || (X.clearTimeout(o.reflowTimeout),
                        o.reflowTimeout = Lt((function() {
                            o.container && o.setSize(void 0, void 0, !1)
                        }
                        ), i ? 100 : 0)),
                        o.containerWidth = S,
                        o.containerHeight = s)
                    }
                    ,
                    a.prototype.setReflow = function(i) {
                        var o = this;
                        !1 === i || this.unbindReflow ? !1 === i && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = rt(et, "resize", (function(i) {
                            o.options && o.reflow(i)
                        }
                        )),
                        rt(this, "destroy", this.unbindReflow))
                    }
                    ,
                    a.prototype.setSize = function(i, o, s) {
                        var p = this
                          , C = p.renderer;
                        p.isResizing += 1,
                        U(s, p),
                        s = C.globalAnimation,
                        p.oldChartHeight = p.chartHeight,
                        p.oldChartWidth = p.chartWidth,
                        void 0 !== i && (p.options.chart.width = i),
                        void 0 !== o && (p.options.chart.height = o),
                        p.getChartSize(),
                        p.styledMode || (s ? _ : lt)(p.container, {
                            width: p.chartWidth + "px",
                            height: p.chartHeight + "px"
                        }, s),
                        p.setChartSize(!0),
                        C.setSize(p.chartWidth, p.chartHeight, s),
                        p.axes.forEach((function(i) {
                            i.isDirty = !0,
                            i.setScale()
                        }
                        )),
                        p.isDirtyLegend = !0,
                        p.isDirtyBox = !0,
                        p.layOutTitles(),
                        p.getMargins(),
                        p.redraw(s),
                        p.oldChartHeight = null,
                        mt(p, "resize"),
                        Lt((function() {
                            p && mt(p, "endResize", null, (function() {
                                --p.isResizing
                            }
                            ))
                        }
                        ), F(s).duration)
                    }
                    ,
                    a.prototype.setChartSize = function(i) {
                        var o, s, p, C, S = this.inverted, M = this.renderer, T = this.chartWidth, P = this.chartHeight, O = this.options.chart, D = this.spacing, j = this.clipOffset;
                        this.plotLeft = o = Math.round(this.plotLeft),
                        this.plotTop = s = Math.round(this.plotTop),
                        this.plotWidth = p = Math.max(0, Math.round(T - o - this.marginRight)),
                        this.plotHeight = C = Math.max(0, Math.round(P - s - this.marginBottom)),
                        this.plotSizeX = S ? C : p,
                        this.plotSizeY = S ? p : C,
                        this.plotBorderWidth = O.plotBorderWidth || 0,
                        this.spacingBox = M.spacingBox = {
                            x: D[3],
                            y: D[0],
                            width: T - D[3] - D[1],
                            height: P - D[0] - D[2]
                        },
                        this.plotBox = M.plotBox = {
                            x: o,
                            y: s,
                            width: p,
                            height: C
                        },
                        S = 2 * Math.floor(this.plotBorderWidth / 2),
                        T = Math.ceil(Math.max(S, j[3]) / 2),
                        P = Math.ceil(Math.max(S, j[0]) / 2),
                        this.clipBox = {
                            x: T,
                            y: P,
                            width: Math.floor(this.plotSizeX - Math.max(S, j[1]) / 2 - T),
                            height: Math.max(0, Math.floor(this.plotSizeY - Math.max(S, j[2]) / 2 - P))
                        },
                        i || (this.axes.forEach((function(i) {
                            i.setAxisSize(),
                            i.setAxisTranslation()
                        }
                        )),
                        M.alignElements()),
                        mt(this, "afterSetChartSize", {
                            skipAxes: i
                        })
                    }
                    ,
                    a.prototype.resetMargins = function() {
                        mt(this, "resetMargins");
                        var i = this
                          , o = i.options.chart;
                        ["margin", "spacing"].forEach((function(s) {
                            var p = o[s]
                              , C = bt(p) ? p : [p, p, p, p];
                            ["Top", "Right", "Bottom", "Left"].forEach((function(p, S) {
                                i[s][S] = wt(o[s + p], C[S])
                            }
                            ))
                        }
                        )),
                        tt.forEach((function(o, s) {
                            i[o] = wt(i.margin[s], i.spacing[s])
                        }
                        )),
                        i.axisOffset = [0, 0, 0, 0],
                        i.clipOffset = [0, 0, 0, 0]
                    }
                    ,
                    a.prototype.drawChartBox = function() {
                        var i, o = this.options.chart, s = this.renderer, p = this.chartWidth, C = this.chartHeight, S = this.styledMode, M = this.plotBGImage, T = o.backgroundColor, P = o.plotBackgroundColor, O = o.plotBackgroundImage, D = this.plotLeft, j = this.plotTop, R = this.plotWidth, X = this.plotHeight, Y = this.plotBox, _ = this.clipRect, F = this.clipBox, U = this.chartBackground, V = this.plotBackground, Z = this.plotBorder, $ = "animate";
                        if (U || (this.chartBackground = U = s.rect().addClass("highcharts-background").add(),
                        $ = "attr"),
                        S)
                            var Q = i = U.strokeWidth();
                        else
                            i = (Q = o.borderWidth || 0) + (o.shadow ? 8 : 0),
                            T = {
                                fill: T || "none"
                            },
                            (Q || U["stroke-width"]) && (T.stroke = o.borderColor,
                            T["stroke-width"] = Q),
                            U.attr(T).shadow(o.shadow);
                        U[$]({
                            x: i / 2,
                            y: i / 2,
                            width: p - i - Q % 2,
                            height: C - i - Q % 2,
                            r: o.borderRadius
                        }),
                        $ = "animate",
                        V || ($ = "attr",
                        this.plotBackground = V = s.rect().addClass("highcharts-plot-background").add()),
                        V[$](Y),
                        S || (V.attr({
                            fill: P || "none"
                        }).shadow(o.plotShadow),
                        O && (M ? (O !== M.attr("href") && M.attr("href", O),
                        M.animate(Y)) : this.plotBGImage = s.image(O, D, j, R, X).add())),
                        _ ? _.animate({
                            width: F.width,
                            height: F.height
                        }) : this.clipRect = s.clipRect(F),
                        $ = "animate",
                        Z || ($ = "attr",
                        this.plotBorder = Z = s.rect().addClass("highcharts-plot-border").attr({
                            zIndex: 1
                        }).add()),
                        S || Z.attr({
                            stroke: o.plotBorderColor,
                            "stroke-width": o.plotBorderWidth || 0,
                            fill: "none"
                        }),
                        Z[$](Z.crisp({
                            x: D,
                            y: j,
                            width: R,
                            height: X
                        }, -Z.strokeWidth())),
                        this.isDirtyBox = !1,
                        mt(this, "afterDrawChartBox")
                    }
                    ,
                    a.prototype.propFromSeries = function() {
                        var i, o, s, p = this, C = p.options.chart, S = p.options.series;
                        ["inverted", "angular", "polar"].forEach((function(M) {
                            for (o = st[C.type || C.defaultSeriesType],
                            s = C[M] || o && o.prototype[M],
                            i = S && S.length; !s && i--; )
                                (o = st[S[i].type]) && o.prototype[M] && (s = !0);
                            p[M] = s
                        }
                        ))
                    }
                    ,
                    a.prototype.linkSeries = function() {
                        var i = this
                          , o = i.series;
                        o.forEach((function(i) {
                            i.linkedSeries.length = 0
                        }
                        )),
                        o.forEach((function(o) {
                            var s = o.options.linkedTo;
                            Ct(s) && (s = ":previous" === s ? i.series[o.index - 1] : i.get(s)) && s.linkedParent !== o && (s.linkedSeries.push(o),
                            o.linkedParent = s,
                            s.enabledDataSorting && o.setDataSortingOptions(),
                            o.visible = wt(o.options.visible, s.options.visible, o.visible))
                        }
                        )),
                        mt(this, "afterLinkSeries")
                    }
                    ,
                    a.prototype.renderSeries = function() {
                        this.series.forEach((function(i) {
                            i.translate(),
                            i.render()
                        }
                        ))
                    }
                    ,
                    a.prototype.renderLabels = function() {
                        var i = this
                          , o = i.options.labels;
                        o.items && o.items.forEach((function(s) {
                            var p = ft(o.style, s.style)
                              , C = Mt(p.left) + i.plotLeft
                              , S = Mt(p.top) + i.plotTop + 12;
                            delete p.left,
                            delete p.top,
                            i.renderer.text(s.html, C, S).attr({
                                zIndex: 2
                            }).css(p).add()
                        }
                        ))
                    }
                    ,
                    a.prototype.render = function() {
                        var i = this.axes
                          , o = this.colorAxis
                          , s = this.renderer
                          , p = this.options
                          , e = function(i) {
                            i.forEach((function(i) {
                                i.visible && i.render()
                            }
                            ))
                        }
                          , C = 0;
                        this.setTitle(),
                        this.legend = new S(this,p.legend),
                        this.getStacks && this.getStacks(),
                        this.getMargins(!0),
                        this.setChartSize(),
                        p = this.plotWidth,
                        i.some((function(i) {
                            if (i.horiz && i.visible && i.options.labels.enabled && i.series.length)
                                return C = 21,
                                !0
                        }
                        ));
                        var M = this.plotHeight = Math.max(this.plotHeight - C, 0);
                        i.forEach((function(i) {
                            i.setScale()
                        }
                        )),
                        this.getAxisMargins();
                        var T = 1.1 < p / this.plotWidth
                          , P = 1.05 < M / this.plotHeight;
                        (T || P) && (i.forEach((function(i) {
                            (i.horiz && T || !i.horiz && P) && i.setTickInterval(!0)
                        }
                        )),
                        this.getMargins()),
                        this.drawChartBox(),
                        this.hasCartesianSeries ? e(i) : o && o.length && e(o),
                        this.seriesGroup || (this.seriesGroup = s.g("series-group").attr({
                            zIndex: 3
                        }).add()),
                        this.renderSeries(),
                        this.renderLabels(),
                        this.addCredits(),
                        this.setResponsive && this.setResponsive(),
                        this.hasRendered = !0
                    }
                    ,
                    a.prototype.addCredits = function(i) {
                        var o = this
                          , s = kt(!0, this.options.credits, i);
                        s.enabled && !this.credits && (this.credits = this.renderer.text(s.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", (function() {
                            s.href && (et.location.href = s.href)
                        }
                        )).attr({
                            align: s.position.align,
                            zIndex: 8
                        }),
                        o.styledMode || this.credits.css(s.style),
                        this.credits.add().align(s.position),
                        this.credits.update = function(i) {
                            o.credits = o.credits.destroy(),
                            o.addCredits(i)
                        }
                        )
                    }
                    ,
                    a.prototype.destroy = function() {
                        var i, o = this, s = o.axes, p = o.series, S = o.container, M = S && S.parentNode;
                        for (mt(o, "destroy"),
                        o.renderer.forExport ? pt($, o) : $[o.index] = void 0,
                        C.chartCount--,
                        o.renderTo.removeAttribute("data-highcharts-chart"),
                        At(o),
                        i = s.length; i--; )
                            s[i] = s[i].destroy();
                        for (this.scroller && this.scroller.destroy && this.scroller.destroy(),
                        i = p.length; i--; )
                            p[i] = p[i].destroy();
                        "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach((function(i) {
                            var s = o[i];
                            s && s.destroy && (o[i] = s.destroy())
                        }
                        )),
                        S && (S.innerHTML = "",
                        At(S),
                        M && dt(S)),
                        St(o, (function(i, s) {
                            delete o[s]
                        }
                        ))
                    }
                    ,
                    a.prototype.firstRender = function() {
                        var i = this
                          , o = i.options;
                        i.isReadyToRender && !i.isReadyToRender() || (i.getContainer(),
                        i.resetMargins(),
                        i.setChartSize(),
                        i.propFromSeries(),
                        i.getAxes(),
                        (vt(o.series) ? o.series : []).forEach((function(o) {
                            i.initSeries(o)
                        }
                        )),
                        i.linkSeries(),
                        i.setSeriesData(),
                        mt(i, "beforeRender"),
                        O && (M.isRequired() ? i.pointer = new M(i,o) : i.pointer = new O(i,o)),
                        i.render(),
                        i.pointer.getChartPosition(),
                        i.renderer.imgCount || i.hasLoaded || i.onload(),
                        i.temporaryDisplay(!0))
                    }
                    ,
                    a.prototype.onload = function() {
                        this.callbacks.concat([this.callback]).forEach((function(i) {
                            i && void 0 !== this.index && i.apply(this, [this])
                        }
                        ), this),
                        mt(this, "load"),
                        mt(this, "render"),
                        ct(this.index) && this.setReflow(this.options.chart.reflow),
                        this.hasLoaded = !0
                    }
                    ,
                    a.prototype.addSeries = function(i, o, s) {
                        var p, C = this;
                        return i && (o = wt(o, !0),
                        mt(C, "addSeries", {
                            options: i
                        }, (function() {
                            p = C.initSeries(i),
                            C.isDirtyLegend = !0,
                            C.linkSeries(),
                            p.enabledDataSorting && p.setData(i.data, !1),
                            mt(C, "afterAddSeries", {
                                series: p
                            }),
                            o && C.redraw(s)
                        }
                        ))),
                        p
                    }
                    ,
                    a.prototype.addAxis = function(i, o, s, p) {
                        return this.createAxis(o ? "xAxis" : "yAxis", {
                            axis: i,
                            redraw: s,
                            animation: p
                        })
                    }
                    ,
                    a.prototype.addColorAxis = function(i, o, s) {
                        return this.createAxis("colorAxis", {
                            axis: i,
                            redraw: o,
                            animation: s
                        })
                    }
                    ,
                    a.prototype.createAxis = function(i, s) {
                        var p = "colorAxis" === i
                          , S = s.redraw
                          , M = s.animation;
                        return i = kt(s.axis, {
                            index: this[i].length,
                            isX: "xAxis" === i
                        }),
                        i = p ? new C.ColorAxis(this,i) : new o(this,i),
                        p && (this.isDirtyLegend = !0,
                        this.axes.forEach((function(i) {
                            i.series = []
                        }
                        )),
                        this.series.forEach((function(i) {
                            i.bindAxes(),
                            i.isDirtyData = !0
                        }
                        ))),
                        wt(S, !0) && this.redraw(M),
                        i
                    }
                    ,
                    a.prototype.showLoading = function(i) {
                        var o = this
                          , s = o.options
                          , p = s.loading
                          , e = function() {
                            C && lt(C, {
                                left: o.plotLeft + "px",
                                top: o.plotTop + "px",
                                width: o.plotWidth + "px",
                                height: o.plotHeight + "px"
                            })
                        }
                          , C = o.loadingDiv
                          , S = o.loadingSpan;
                        C || (o.loadingDiv = C = ht("div", {
                            className: "highcharts-loading highcharts-loading-hidden"
                        }, null, o.container)),
                        S || (o.loadingSpan = S = ht("span", {
                            className: "highcharts-loading-inner"
                        }, null, C),
                        rt(o, "redraw", e)),
                        C.className = "highcharts-loading",
                        Y.setElementHTML(S, wt(i, s.lang.loading, "")),
                        o.styledMode || (lt(C, ft(p.style, {
                            zIndex: 10
                        })),
                        lt(S, p.labelStyle),
                        o.loadingShown || (lt(C, {
                            opacity: 0,
                            display: ""
                        }),
                        _(C, {
                            opacity: p.style.opacity || .5
                        }, {
                            duration: p.showDuration || 0
                        }))),
                        o.loadingShown = !0,
                        e()
                    }
                    ,
                    a.prototype.hideLoading = function() {
                        var i = this.options
                          , o = this.loadingDiv;
                        o && (o.className = "highcharts-loading highcharts-loading-hidden",
                        this.styledMode || _(o, {
                            opacity: 0
                        }, {
                            duration: i.loading.hideDuration || 100,
                            complete: function() {
                                lt(o, {
                                    display: "none"
                                })
                            }
                        })),
                        this.loadingShown = !1
                    }
                    ,
                    a.prototype.update = function(i, o, s, p) {
                        var C, S, M = this, T = {
                            credits: "addCredits",
                            title: "setTitle",
                            subtitle: "setSubtitle",
                            caption: "setCaption"
                        }, P = i.isResponsiveOptions, O = [];
                        mt(M, "update", {
                            options: i
                        }),
                        P || M.setResponsive(!1, !0),
                        i = at(i, M.options),
                        M.userOptions = kt(M.userOptions, i);
                        var D = i.chart;
                        if (D) {
                            if (kt(!0, M.options.chart, D),
                            "className"in D && M.setClassName(D.className),
                            "reflow"in D && M.setReflow(D.reflow),
                            "inverted"in D || "polar"in D || "type"in D) {
                                M.propFromSeries();
                                var j = !0
                            }
                            "alignTicks"in D && (j = !0),
                            "events"in D && Z(this, D),
                            St(D, (function(i, o) {
                                -1 !== M.propsRequireUpdateSeries.indexOf("chart." + o) && (C = !0),
                                -1 !== M.propsRequireDirtyBox.indexOf(o) && (M.isDirtyBox = !0),
                                -1 !== M.propsRequireReflow.indexOf(o) && (P ? M.isDirtyBox = !0 : S = !0)
                            }
                            )),
                            !M.styledMode && "style"in D && M.renderer.setStyle(D.style)
                        }
                        !M.styledMode && i.colors && (this.options.colors = i.colors),
                        i.time && (this.time === ot && (this.time = new R(i.time)),
                        kt(!0, M.options.time, i.time)),
                        St(i, (function(o, s) {
                            M[s] && "function" == typeof M[s].update ? M[s].update(o, !1) : "function" == typeof M[T[s]] ? M[T[s]](o) : "colors" !== s && -1 === M.collectionsWithUpdate.indexOf(s) && kt(!0, M.options[s], i[s]),
                            "chart" !== s && -1 !== M.propsRequireUpdateSeries.indexOf(s) && (C = !0)
                        }
                        )),
                        this.collectionsWithUpdate.forEach((function(o) {
                            if (i[o]) {
                                var p = [];
                                M[o].forEach((function(i, o) {
                                    i.options.isInternal || p.push(wt(i.options.index, o))
                                }
                                )),
                                Pt(i[o]).forEach((function(i, C) {
                                    var S, T = ct(i.id);
                                    T && (S = M.get(i.id)),
                                    !S && M[o] && (S = M[o][p ? p[C] : C]) && T && ct(S.options.id) && (S = void 0),
                                    S && S.coll === o && (S.update(i, !1),
                                    s && (S.touched = !0)),
                                    !S && s && M.collectionsWithInit[o] && (M.collectionsWithInit[o][0].apply(M, [i].concat(M.collectionsWithInit[o][1] || []).concat([!1])).touched = !0)
                                }
                                )),
                                s && M[o].forEach((function(i) {
                                    i.touched || i.options.isInternal ? delete i.touched : O.push(i)
                                }
                                ))
                            }
                        }
                        )),
                        O.forEach((function(i) {
                            i.chart && i.remove(!1)
                        }
                        )),
                        j && M.axes.forEach((function(i) {
                            i.update({}, !1)
                        }
                        )),
                        C && M.getSeriesOrderByLinks().forEach((function(i) {
                            i.chart && i.update({}, !1)
                        }
                        ), this),
                        j = D && D.width,
                        D = D && (Ct(D.height) ? Tt(D.height, j || M.chartWidth) : D.height),
                        S || xt(j) && j !== M.chartWidth || xt(D) && D !== M.chartHeight ? M.setSize(j, D, p) : wt(o, !0) && M.redraw(p),
                        mt(M, "afterUpdate", {
                            options: i,
                            redraw: o,
                            animation: p
                        })
                    }
                    ,
                    a.prototype.setSubtitle = function(i, o) {
                        this.applyDescription("subtitle", i),
                        this.layOutTitles(o)
                    }
                    ,
                    a.prototype.setCaption = function(i, o) {
                        this.applyDescription("caption", i),
                        this.layOutTitles(o)
                    }
                    ,
                    a.prototype.showResetZoom = function() {
                        function a() {
                            i.zoomOut()
                        }
                        var i = this
                          , o = it.lang
                          , s = i.options.chart.resetZoomButton
                          , p = s.theme
                          , C = p.states
                          , S = "chart" === s.relativeTo || "spacingBox" === s.relativeTo ? null : "scrollablePlotBox";
                        mt(this, "beforeShowResetZoom", null, (function() {
                            i.resetZoomButton = i.renderer.button(o.resetZoom, null, null, a, p, C && C.hover).attr({
                                align: s.position.align,
                                title: o.resetZoomTitle
                            }).addClass("highcharts-reset-zoom").add().align(s.position, !1, S)
                        }
                        )),
                        mt(this, "afterShowResetZoom")
                    }
                    ,
                    a.prototype.zoomOut = function() {
                        mt(this, "selection", {
                            resetSelection: !0
                        }, this.zoom)
                    }
                    ,
                    a.prototype.zoom = function(i) {
                        var o, s = this, p = s.pointer, C = s.inverted ? p.mouseDownX : p.mouseDownY, S = !1;
                        !i || i.resetSelection ? (s.axes.forEach((function(i) {
                            o = i.zoom()
                        }
                        )),
                        p.initiated = !1) : i.xAxis.concat(i.yAxis).forEach((function(i) {
                            var M = i.axis
                              , T = s.inverted ? M.left : M.top
                              , P = s.inverted ? T + M.width : T + M.height
                              , O = M.isXAxis
                              , D = !1;
                            (!O && C >= T && C <= P || O || !ct(C)) && (D = !0),
                            p[O ? "zoomX" : "zoomY"] && D && (o = M.zoom(i.min, i.max),
                            M.displayBtn && (S = !0))
                        }
                        ));
                        var M = s.resetZoomButton;
                        S && !M ? s.showResetZoom() : !S && bt(M) && (s.resetZoomButton = M.destroy()),
                        o && s.redraw(wt(s.options.chart.animation, i && i.animation, 100 > s.pointCount))
                    }
                    ,
                    a.prototype.pan = function(i, o) {
                        var s = this
                          , p = s.hoverPoints;
                        o = "object" == typeof o ? o : {
                            enabled: o,
                            type: "x"
                        };
                        var C = s.options.chart
                          , S = s.options.mapNavigation && s.options.mapNavigation.enabled;
                        C && C.panning && (C.panning = o);
                        var M, T = o.type;
                        mt(this, "pan", {
                            originalEvent: i
                        }, (function() {
                            p && p.forEach((function(i) {
                                i.setState()
                            }
                            ));
                            var o = s.xAxis;
                            "xy" === T ? o = o.concat(s.yAxis) : "y" === T && (o = s.yAxis);
                            var C = {};
                            o.forEach((function(o) {
                                if (o.options.panningEnabled && !o.options.isInternal) {
                                    var p = o.horiz
                                      , P = i[p ? "chartX" : "chartY"]
                                      , O = s[p = p ? "mouseDownX" : "mouseDownY"]
                                      , D = o.minPointOffset || 0
                                      , j = o.reversed && !s.inverted || !o.reversed && s.inverted ? -1 : 1
                                      , R = o.getExtremes()
                                      , X = o.toValue(O - P, !0) + D * j
                                      , Y = o.toValue(O + o.len - P, !0) - (D * j || o.isXAxis && o.pointRangePadding || 0)
                                      , _ = Y < X;
                                    j = o.hasVerticalPanning(),
                                    O = _ ? Y : X,
                                    X = _ ? X : Y;
                                    var F = o.panningState;
                                    !j || o.isXAxis || F && !F.isDirty || o.series.forEach((function(i) {
                                        var o = i.getProcessedData(!0);
                                        o = i.getExtremes(o.yData, !0),
                                        F || (F = {
                                            startMin: Number.MAX_VALUE,
                                            startMax: -Number.MAX_VALUE
                                        }),
                                        xt(o.dataMin) && xt(o.dataMax) && (F.startMin = Math.min(wt(i.options.threshold, 1 / 0), o.dataMin, F.startMin),
                                        F.startMax = Math.max(wt(i.options.threshold, -1 / 0), o.dataMax, F.startMax))
                                    }
                                    )),
                                    j = Math.min(wt(F && F.startMin, R.dataMin), D ? R.min : o.toValue(o.toPixels(R.min) - o.minPixelPadding)),
                                    Y = Math.max(wt(F && F.startMax, R.dataMax), D ? R.max : o.toValue(o.toPixels(R.max) + o.minPixelPadding)),
                                    o.panningState = F,
                                    o.isOrdinal || (0 < (D = j - O) && (X += D,
                                    O = j),
                                    0 < (D = X - Y) && (X = Y,
                                    O -= D),
                                    o.series.length && O !== R.min && X !== R.max && O >= j && X <= Y && (o.setExtremes(O, X, !1, !1, {
                                        trigger: "pan"
                                    }),
                                    s.resetZoomButton || S || O === j || X === Y || !T.match("y") || (s.showResetZoom(),
                                    o.displayBtn = !1),
                                    M = !0),
                                    C[p] = P)
                                }
                            }
                            )),
                            St(C, (function(i, o) {
                                s[o] = i
                            }
                            )),
                            M && s.redraw(!1),
                            lt(s.container, {
                                cursor: "move"
                            })
                        }
                        ))
                    }
                    ,
                    a
                }(),
                ft(i.prototype, {
                    callbacks: [],
                    collectionsWithInit: {
                        xAxis: [i.prototype.addAxis, [!0]],
                        yAxis: [i.prototype.addAxis, [!1]],
                        series: [i.prototype.addSeries]
                    },
                    collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
                    propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
                    propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
                    propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
                }),
                i
            }
            )),
            L(o, "Mixins/LegendSymbol.js", [o["Core/Globals.js"], o["Core/Utilities.js"]], (function(i, o) {
                var s = o.merge
                  , p = o.pick;
                return i.LegendSymbolMixin = {
                    drawRectangle: function(i, o) {
                        var s = i.symbolHeight
                          , C = i.options.squareSymbol;
                        o.legendSymbol = this.chart.renderer.rect(C ? (i.symbolWidth - s) / 2 : 0, i.baseline - s + 1, C ? s : i.symbolWidth, s, p(i.options.symbolRadius, s / 2)).addClass("highcharts-point").attr({
                            zIndex: 3
                        }).add(o.legendGroup)
                    },
                    drawLineMarker: function(i) {
                        var o = this.options
                          , C = o.marker
                          , S = i.symbolWidth
                          , M = i.symbolHeight
                          , T = M / 2
                          , P = this.chart.renderer
                          , O = this.legendGroup;
                        i = i.baseline - Math.round(.3 * i.fontMetrics.b);
                        var D = {};
                        this.chart.styledMode || (D = {
                            "stroke-width": o.lineWidth || 0
                        },
                        o.dashStyle && (D.dashstyle = o.dashStyle)),
                        this.legendLine = P.path([["M", 0, i], ["L", S, i]]).addClass("highcharts-graph").attr(D).add(O),
                        C && !1 !== C.enabled && S && (o = Math.min(p(C.radius, T), T),
                        0 === this.symbol.indexOf("url") && (C = s(C, {
                            width: M,
                            height: M
                        }),
                        o = 0),
                        this.legendSymbol = C = P.symbol(this.symbol, S / 2 - o, i - o, 2 * o, 2 * o, C).addClass("highcharts-point").add(O),
                        C.isMarker = !0)
                    }
                }
            }
            )),
            L(o, "Core/Series/Series.js", [o["Core/Animation/AnimationUtilities.js"], o["Core/Foundation.js"], o["Core/Globals.js"], o["Mixins/LegendSymbol.js"], o["Core/DefaultOptions.js"], o["Core/Color/Palette.js"], o["Core/Series/Point.js"], o["Core/Series/SeriesRegistry.js"], o["Core/Renderer/SVG/SVGElement.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C, S, M, T, P, O) {
                var D = i.animObject
                  , j = i.setAnimation
                  , R = o.registerEventOptions
                  , X = s.hasTouch
                  , Y = s.svg
                  , _ = s.win
                  , F = C.defaultOptions
                  , U = T.seriesTypes
                  , V = O.addEvent
                  , Z = O.arrayMax
                  , $ = O.arrayMin
                  , Q = O.clamp
                  , tt = O.cleanRecursively
                  , et = O.correctFloat
                  , it = O.defined
                  , ot = O.erase
                  , st = O.error
                  , rt = O.extend
                  , nt = O.find
                  , at = O.fireEvent
                  , ht = O.getNestedProperty
                  , lt = O.isArray
                  , ct = O.isNumber
                  , dt = O.isString
                  , pt = O.merge
                  , ut = O.objectEach
                  , ft = O.pick
                  , gt = O.removeEvent
                  , mt = O.splat
                  , yt = O.syncTimeout;
                return i = function() {
                    function a() {
                        this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0
                    }
                    return a.prototype.init = function(i, o) {
                        at(this, "init", {
                            options: o
                        });
                        var s = this
                          , p = i.series;
                        this.eventsToUnbind = [],
                        s.chart = i,
                        s.options = s.setOptions(o),
                        o = s.options,
                        s.linkedSeries = [],
                        s.bindAxes(),
                        rt(s, {
                            name: o.name,
                            state: "",
                            visible: !1 !== o.visible,
                            selected: !0 === o.selected
                        }),
                        R(this, o);
                        var C, S = o.events;
                        (S && S.click || o.point && o.point.events && o.point.events.click || o.allowPointSelect) && (i.runTrackerClick = !0),
                        s.getColor(),
                        s.getSymbol(),
                        s.parallelArrays.forEach((function(i) {
                            s[i + "Data"] || (s[i + "Data"] = [])
                        }
                        )),
                        s.isCartesian && (i.hasCartesianSeries = !0),
                        p.length && (C = p[p.length - 1]),
                        s._i = ft(C && C._i, -1) + 1,
                        s.opacity = s.options.opacity,
                        i.orderSeries(this.insert(p)),
                        o.dataSorting && o.dataSorting.enabled ? s.setDataSortingOptions() : s.points || s.data || s.setData(o.data, !1),
                        at(this, "afterInit")
                    }
                    ,
                    a.prototype.is = function(i) {
                        return U[i] && this instanceof U[i]
                    }
                    ,
                    a.prototype.insert = function(i) {
                        var o, s = this.options.index;
                        if (ct(s)) {
                            for (o = i.length; o--; )
                                if (s >= ft(i[o].options.index, i[o]._i)) {
                                    i.splice(o + 1, 0, this);
                                    break
                                }
                            -1 === o && i.unshift(this),
                            o += 1
                        } else
                            i.push(this);
                        return ft(o, i.length - 1)
                    }
                    ,
                    a.prototype.bindAxes = function() {
                        var i, o = this, s = o.options, p = o.chart;
                        at(this, "bindAxes", null, (function() {
                            (o.axisTypes || []).forEach((function(C) {
                                var S = 0;
                                p[C].forEach((function(p) {
                                    i = p.options,
                                    (s[C] === S && !i.isInternal || void 0 !== s[C] && s[C] === i.id || void 0 === s[C] && 0 === i.index) && (o.insert(p.series),
                                    o[C] = p,
                                    p.isDirty = !0),
                                    i.isInternal || S++
                                }
                                )),
                                o[C] || o.optionalAxis === C || st(18, !0, p)
                            }
                            ))
                        }
                        )),
                        at(this, "afterBindAxes")
                    }
                    ,
                    a.prototype.updateParallelArrays = function(i, o) {
                        var s = i.series
                          , p = arguments
                          , C = ct(o) ? function(p) {
                            var C = "y" === p && s.toYData ? s.toYData(i) : i[p];
                            s[p + "Data"][o] = C
                        }
                        : function(i) {
                            Array.prototype[o].apply(s[i + "Data"], Array.prototype.slice.call(p, 2))
                        }
                        ;
                        s.parallelArrays.forEach(C)
                    }
                    ,
                    a.prototype.hasData = function() {
                        return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && 0 < this.yData.length
                    }
                    ,
                    a.prototype.autoIncrement = function() {
                        var i, o = this.options, s = this.xIncrement, p = o.pointIntervalUnit, C = this.chart.time;
                        return s = ft(s, o.pointStart, 0),
                        this.pointInterval = i = ft(this.pointInterval, o.pointInterval, 1),
                        p && (o = new C.Date(s),
                        "day" === p ? C.set("Date", o, C.get("Date", o) + i) : "month" === p ? C.set("Month", o, C.get("Month", o) + i) : "year" === p && C.set("FullYear", o, C.get("FullYear", o) + i),
                        i = o.getTime() - s),
                        this.xIncrement = s + i,
                        s
                    }
                    ,
                    a.prototype.setDataSortingOptions = function() {
                        var i = this.options;
                        rt(this, {
                            requireSorting: !1,
                            sorted: !1,
                            enabledDataSorting: !0,
                            allowDG: !1
                        }),
                        it(i.pointRange) || (i.pointRange = 1)
                    }
                    ,
                    a.prototype.setOptions = function(i) {
                        var o = this.chart
                          , s = o.options
                          , p = s.plotOptions
                          , C = o.userOptions || {};
                        i = pt(i),
                        o = o.styledMode;
                        var S = {
                            plotOptions: p,
                            userOptions: i
                        };
                        at(this, "setOptions", S);
                        var M = S.plotOptions[this.type]
                          , T = C.plotOptions || {};
                        return this.userOptions = S.userOptions,
                        C = pt(M, p.series, C.plotOptions && C.plotOptions[this.type], i),
                        this.tooltipOptions = pt(F.tooltip, F.plotOptions.series && F.plotOptions.series.tooltip, F.plotOptions[this.type].tooltip, s.tooltip.userOptions, p.series && p.series.tooltip, p[this.type].tooltip, i.tooltip),
                        this.stickyTracking = ft(i.stickyTracking, T[this.type] && T[this.type].stickyTracking, T.series && T.series.stickyTracking, !(!this.tooltipOptions.shared || this.noSharedTooltip) || C.stickyTracking),
                        null === M.marker && delete C.marker,
                        this.zoneAxis = C.zoneAxis,
                        s = this.zones = (C.zones || []).slice(),
                        !C.negativeColor && !C.negativeFillColor || C.zones || (p = {
                            value: C[this.zoneAxis + "Threshold"] || C.threshold || 0,
                            className: "highcharts-negative"
                        },
                        o || (p.color = C.negativeColor,
                        p.fillColor = C.negativeFillColor),
                        s.push(p)),
                        s.length && it(s[s.length - 1].value) && s.push(o ? {} : {
                            color: this.color,
                            fillColor: this.fillColor
                        }),
                        at(this, "afterSetOptions", {
                            options: C
                        }),
                        C
                    }
                    ,
                    a.prototype.getName = function() {
                        return ft(this.options.name, "Series " + (this.index + 1))
                    }
                    ,
                    a.prototype.getCyclic = function(i, o, s) {
                        var p = this.chart
                          , C = this.userOptions
                          , S = i + "Index"
                          , M = i + "Counter"
                          , T = s ? s.length : ft(p.options.chart[i + "Count"], p[i + "Count"]);
                        if (!o) {
                            var P = ft(C[S], C["_" + S]);
                            it(P) || (p.series.length || (p[M] = 0),
                            C["_" + S] = P = p[M] % T,
                            p[M] += 1),
                            s && (o = s[P])
                        }
                        void 0 !== P && (this[S] = P),
                        this[i] = o
                    }
                    ,
                    a.prototype.getColor = function() {
                        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = S.neutralColor20 : this.getCyclic("color", this.options.color || F.plotOptions[this.type].color, this.chart.options.colors)
                    }
                    ,
                    a.prototype.getPointsCollection = function() {
                        return (this.hasGroupedData ? this.points : this.data) || []
                    }
                    ,
                    a.prototype.getSymbol = function() {
                        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
                    }
                    ,
                    a.prototype.findPointIndex = function(i, o) {
                        var s, p = i.id, C = i.x, S = this.points, M = this.options.dataSorting;
                        if (p)
                            var T = this.chart.get(p);
                        else if (this.linkedParent || this.enabledDataSorting) {
                            var P = M && M.matchByName ? "name" : "index";
                            if (T = nt(S, (function(o) {
                                return !o.touched && o[P] === i[P]
                            }
                            )),
                            !T)
                                return
                        }
                        if (T) {
                            var O = T && T.index;
                            void 0 !== O && (s = !0)
                        }
                        return void 0 === O && ct(C) && (O = this.xData.indexOf(C, o)),
                        -1 !== O && void 0 !== O && this.cropped && (O = O >= this.cropStart ? O - this.cropStart : O),
                        !s && S[O] && S[O].touched && (O = void 0),
                        O
                    }
                    ,
                    a.prototype.updateData = function(i, o) {
                        var s, p, C, S = this.options, M = S.dataSorting, T = this.points, P = [], O = this.requireSorting, D = i.length === T.length, j = !0;
                        if (this.xIncrement = null,
                        i.forEach((function(i, o) {
                            var p = it(i) && this.pointClass.prototype.optionsToObject.call({
                                series: this
                            }, i) || {}
                              , j = p.x;
                            p.id || ct(j) ? (-1 === (j = this.findPointIndex(p, C)) || void 0 === j ? P.push(i) : T[j] && i !== S.data[j] ? (T[j].update(i, !1, null, !1),
                            T[j].touched = !0,
                            O && (C = j + 1)) : T[j] && (T[j].touched = !0),
                            (!D || o !== j || M && M.enabled || this.hasDerivedData) && (s = !0)) : P.push(i)
                        }
                        ), this),
                        s)
                            for (i = T.length; i--; )
                                (p = T[i]) && !p.touched && p.remove && p.remove(!1, o);
                        else
                            !D || M && M.enabled ? j = !1 : (i.forEach((function(i, o) {
                                i !== T[o].y && T[o].update && T[o].update(i, !1, null, !1)
                            }
                            )),
                            P.length = 0);
                        return T.forEach((function(i) {
                            i && (i.touched = !1)
                        }
                        )),
                        !!j && (P.forEach((function(i) {
                            this.addPoint(i, !1, null, null, !1)
                        }
                        ), this),
                        null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = Z(this.xData),
                        this.autoIncrement()),
                        !0)
                    }
                    ,
                    a.prototype.setData = function(i, o, s, p) {
                        var C, S = this, M = S.points, T = M && M.length || 0, P = S.options, O = S.chart, D = P.dataSorting, j = null, R = S.xAxis;
                        j = P.turboThreshold;
                        var X, Y = this.xData, _ = this.yData, F = (C = S.pointArrayMap) && C.length, U = P.keys, V = 0, Z = 1;
                        if (C = (i = i || []).length,
                        o = ft(o, !0),
                        D && D.enabled && (i = this.sortData(i)),
                        !1 !== p && C && T && !S.cropped && !S.hasGroupedData && S.visible && !S.isSeriesBoosting && (X = this.updateData(i, s)),
                        !X) {
                            if (S.xIncrement = null,
                            S.colorCounter = 0,
                            this.parallelArrays.forEach((function(i) {
                                S[i + "Data"].length = 0
                            }
                            )),
                            j && C > j)
                                if (j = S.getFirstValidPoint(i),
                                ct(j))
                                    for (s = 0; s < C; s++)
                                        Y[s] = this.autoIncrement(),
                                        _[s] = i[s];
                                else if (lt(j))
                                    if (F)
                                        for (s = 0; s < C; s++)
                                            p = i[s],
                                            Y[s] = p[0],
                                            _[s] = p.slice(1, F + 1);
                                    else
                                        for (U && (V = 0 <= (V = U.indexOf("x")) ? V : 0,
                                        Z = 0 <= (Z = U.indexOf("y")) ? Z : 1),
                                        s = 0; s < C; s++)
                                            p = i[s],
                                            Y[s] = p[V],
                                            _[s] = p[Z];
                                else
                                    st(12, !1, O);
                            else
                                for (s = 0; s < C; s++)
                                    void 0 !== i[s] && (p = {
                                        series: S
                                    },
                                    S.pointClass.prototype.applyOptions.apply(p, [i[s]]),
                                    S.updateParallelArrays(p, s));
                            for (_ && dt(_[0]) && st(14, !0, O),
                            S.data = [],
                            S.options.data = S.userOptions.data = i,
                            s = T; s--; )
                                M[s] && M[s].destroy && M[s].destroy();
                            R && (R.minRange = R.userMinRange),
                            S.isDirty = O.isDirtyBox = !0,
                            S.isDirtyData = !!M,
                            s = !1
                        }
                        "point" === P.legendType && (this.processData(),
                        this.generatePoints()),
                        o && O.redraw(s)
                    }
                    ,
                    a.prototype.sortData = function(i) {
                        var o = this
                          , s = o.options.dataSorting.sortKey || "y"
                          , e = function(i, o) {
                            return it(o) && i.pointClass.prototype.optionsToObject.call({
                                series: i
                            }, o) || {}
                        };
                        return i.forEach((function(s, p) {
                            i[p] = e(o, s),
                            i[p].index = p
                        }
                        ), this),
                        i.concat().sort((function(i, o) {
                            return i = ht(s, i),
                            (o = ht(s, o)) < i ? -1 : o > i ? 1 : 0
                        }
                        )).forEach((function(i, o) {
                            i.x = o
                        }
                        ), this),
                        o.linkedSeries && o.linkedSeries.forEach((function(o) {
                            var s = o.options
                              , p = s.data;
                            s.dataSorting && s.dataSorting.enabled || !p || (p.forEach((function(s, C) {
                                p[C] = e(o, s),
                                i[C] && (p[C].x = i[C].x,
                                p[C].index = C)
                            }
                            )),
                            o.setData(p, !1))
                        }
                        )),
                        i
                    }
                    ,
                    a.prototype.getProcessedData = function(i) {
                        var o = this.xData
                          , s = this.yData
                          , p = o.length
                          , C = 0
                          , S = this.xAxis
                          , M = this.options
                          , T = M.cropThreshold
                          , P = i || this.getExtremesFromAll || M.getExtremesFromAll
                          , O = this.isCartesian;
                        i = S && S.val2lin,
                        M = !(!S || !S.logarithmic);
                        var D = this.requireSorting;
                        if (S)
                            var j = (S = S.getExtremes()).min
                              , R = S.max;
                        if (O && this.sorted && !P && (!T || p > T || this.forceCrop))
                            if (o[p - 1] < j || o[0] > R)
                                o = [],
                                s = [];
                            else if (this.yData && (o[0] < j || o[p - 1] > R)) {
                                o = (C = this.cropData(this.xData, this.yData, j, R)).xData,
                                s = C.yData,
                                C = C.start;
                                var X = !0
                            }
                        for (T = o.length || 1; --T; )
                            if (0 < (p = M ? i(o[T]) - i(o[T - 1]) : o[T] - o[T - 1]) && (void 0 === Y || p < Y))
                                var Y = p;
                            else
                                0 > p && D && (st(15, !1, this.chart),
                                D = !1);
                        return {
                            xData: o,
                            yData: s,
                            cropped: X,
                            cropStart: C,
                            closestPointRange: Y
                        }
                    }
                    ,
                    a.prototype.processData = function(i) {
                        var o = this.xAxis;
                        if (this.isCartesian && !this.isDirty && !o.isDirty && !this.yAxis.isDirty && !i)
                            return !1;
                        i = this.getProcessedData(),
                        this.cropped = i.cropped,
                        this.cropStart = i.cropStart,
                        this.processedXData = i.xData,
                        this.processedYData = i.yData,
                        this.closestPointRange = this.basePointRange = i.closestPointRange
                    }
                    ,
                    a.prototype.cropData = function(i, o, s, p, C) {
                        var S, M = i.length, T = 0, P = M;
                        for (C = ft(C, this.cropShoulder),
                        S = 0; S < M; S++)
                            if (i[S] >= s) {
                                T = Math.max(0, S - C);
                                break
                            }
                        for (s = S; s < M; s++)
                            if (i[s] > p) {
                                P = s + C;
                                break
                            }
                        return {
                            xData: i.slice(T, P),
                            yData: o.slice(T, P),
                            start: T,
                            end: P
                        }
                    }
                    ,
                    a.prototype.generatePoints = function() {
                        var i, o, s = this.options, p = s.data, C = this.data, S = this.processedXData, M = this.processedYData, T = this.pointClass, P = S.length, O = this.cropStart || 0, D = this.hasGroupedData, j = s.keys, R = [];
                        for (s = s.dataGrouping && s.dataGrouping.groupAll ? O : 0,
                        C || D || ((C = []).length = p.length,
                        C = this.data = C),
                        j && D && (this.options.keys = !1),
                        o = 0; o < P; o++) {
                            var X = O + o;
                            if (D) {
                                var Y = (new T).init(this, [S[o]].concat(mt(M[o])));
                                Y.dataGroup = this.groupMap[s + o],
                                Y.dataGroup.options && (Y.options = Y.dataGroup.options,
                                rt(Y, Y.dataGroup.options),
                                delete Y.dataLabels)
                            } else
                                (Y = C[X]) || void 0 === p[X] || (C[X] = Y = (new T).init(this, p[X], S[o]));
                            Y && (Y.index = D ? s + o : X,
                            R[o] = Y)
                        }
                        if (this.options.keys = j,
                        C && (P !== (i = C.length) || D))
                            for (o = 0; o < i; o++)
                                o !== O || D || (o += P),
                                C[o] && (C[o].destroyElements(),
                                C[o].plotX = void 0);
                        this.data = C,
                        this.points = R,
                        at(this, "afterGeneratePoints")
                    }
                    ,
                    a.prototype.getXExtremes = function(i) {
                        return {
                            min: $(i),
                            max: Z(i)
                        }
                    }
                    ,
                    a.prototype.getExtremes = function(i, o) {
                        var s, p = this.xAxis, C = this.yAxis, S = this.processedXData || this.xData, M = [], T = 0, P = 0, O = 0, D = this.requireSorting ? this.cropShoulder : 0, j = !!C && C.positiveValuesOnly;
                        for (C = (i = i || this.stackedYData || this.processedYData || []).length,
                        p && (P = (O = p.getExtremes()).min,
                        O = O.max),
                        s = 0; s < C; s++) {
                            var R = S[s]
                              , X = i[s]
                              , Y = (ct(X) || lt(X)) && (X.length || 0 < X || !j);
                            if (R = o || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !p || (S[s + D] || R) >= P && (S[s - D] || R) <= O,
                            Y && R)
                                if (Y = X.length)
                                    for (; Y--; )
                                        ct(X[Y]) && (M[T++] = X[Y]);
                                else
                                    M[T++] = X
                        }
                        return i = {
                            dataMin: $(M),
                            dataMax: Z(M)
                        },
                        at(this, "afterGetExtremes", {
                            dataExtremes: i
                        }),
                        i
                    }
                    ,
                    a.prototype.applyExtremes = function() {
                        var i = this.getExtremes();
                        return this.dataMin = i.dataMin,
                        this.dataMax = i.dataMax,
                        i
                    }
                    ,
                    a.prototype.getFirstValidPoint = function(i) {
                        for (var o = null, s = i.length, p = 0; null === o && p < s; )
                            o = i[p],
                            p++;
                        return o
                    }
                    ,
                    a.prototype.translate = function() {
                        this.processedXData || this.processData(),
                        this.generatePoints();
                        var i, o, s = this.options, p = s.stacking, C = this.xAxis, S = C.categories, M = this.enabledDataSorting, T = this.yAxis, P = this.points, O = P.length, D = !!this.modifyValue, j = this.pointPlacementToXValue(), R = !!j, X = s.threshold, Y = s.startFromThreshold ? X : 0, _ = this.zoneAxis || "y", F = Number.MAX_VALUE;
                        for (i = 0; i < O; i++) {
                            var U = P[i]
                              , V = U.x
                              , Z = U.y
                              , $ = U.low
                              , tt = p && T.stacking && T.stacking.stacks[(this.negStacks && Z < (Y ? 0 : X) ? "-" : "") + this.stackKey]
                              , ot = void 0
                              , st = void 0;
                            if ((T.positiveValuesOnly && !T.validatePositiveValue(Z) || C.positiveValuesOnly && !C.validatePositiveValue(V)) && (U.isNull = !0),
                            U.plotX = o = et(Q(C.translate(V, 0, 0, 0, 1, j, "flags" === this.type), -1e5, 1e5)),
                            p && this.visible && tt && tt[V]) {
                                var rt = this.getStackIndicator(rt, V, this.index);
                                U.isNull || (st = (ot = tt[V]).points[rt.key])
                            }
                            if (lt(st) && ($ = st[0],
                            Z = st[1],
                            $ === Y && rt.key === tt[V].base && ($ = ft(ct(X) && X, T.min)),
                            T.positiveValuesOnly && 0 >= $ && ($ = null),
                            U.total = U.stackTotal = ot.total,
                            U.percentage = ot.total && U.y / ot.total * 100,
                            U.stackY = Z,
                            this.irregularWidths || ot.setOffset(this.pointXOffset || 0, this.barW || 0)),
                            U.yBottom = it($) ? Q(T.translate($, 0, 1, 0, 1), -1e5, 1e5) : null,
                            D && (Z = this.modifyValue(Z, U)),
                            U.plotY = void 0,
                            ct(Z) && void 0 !== (Z = T.translate(Z, !1, !0, !1, !0)) && (U.plotY = Q(Z, -1e5, 1e5)),
                            U.isInside = this.isPointInside(U),
                            U.clientX = R ? et(C.translate(V, 0, 0, 0, 1, j)) : o,
                            U.negative = U[_] < (s[_ + "Threshold"] || X || 0),
                            U.category = S && void 0 !== S[U.x] ? S[U.x] : U.x,
                            !U.isNull && !1 !== U.visible) {
                                void 0 !== nt && (F = Math.min(F, Math.abs(o - nt)));
                                var nt = o
                            }
                            U.zone = this.zones.length && U.getZone(),
                            !U.graphic && this.group && M && (U.isNew = !0)
                        }
                        this.closestPointRangePx = F,
                        at(this, "afterTranslate")
                    }
                    ,
                    a.prototype.getValidPoints = function(i, o, s) {
                        var p = this.chart;
                        return (i || this.points || []).filter((function(i) {
                            return !(o && !p.isInsidePlot(i.plotX, i.plotY, {
                                inverted: p.inverted
                            })) && !1 !== i.visible && (s || !i.isNull)
                        }
                        ))
                    }
                    ,
                    a.prototype.getClipBox = function(i, o) {
                        var s = this.options
                          , p = this.chart
                          , C = p.inverted
                          , S = this.xAxis
                          , M = S && this.yAxis
                          , T = p.options.chart.scrollablePlotArea || {};
                        return i && !1 === s.clip && M ? i = C ? {
                            y: -p.chartWidth + M.len + M.pos,
                            height: p.chartWidth,
                            width: p.chartHeight,
                            x: -p.chartHeight + S.len + S.pos
                        } : {
                            y: -M.pos,
                            height: p.chartHeight,
                            width: p.chartWidth,
                            x: -S.pos
                        } : (i = this.clipBox || p.clipBox,
                        o && (i.width = p.plotSizeX,
                        i.x = (p.scrollablePixelsX || 0) * (T.scrollPositionX || 0))),
                        o ? {
                            width: i.width,
                            x: i.x
                        } : i
                    }
                    ,
                    a.prototype.getSharedClipKey = function(i) {
                        if (this.sharedClipKey)
                            return this.sharedClipKey;
                        var o = [i && i.duration, i && i.easing, i && i.defer, this.getClipBox(i).height, this.options.xAxis, this.options.yAxis].join();
                        return (!1 !== this.options.clip || i) && (this.sharedClipKey = o),
                        o
                    }
                    ,
                    a.prototype.setClip = function(i) {
                        var o = this.chart
                          , s = this.options
                          , p = o.renderer
                          , C = o.inverted
                          , S = this.clipBox
                          , M = this.getClipBox(i)
                          , T = this.getSharedClipKey(i)
                          , P = o.sharedClips[T]
                          , O = o.sharedClips[T + "m"];
                        i && (M.width = 0,
                        C && (M.x = o.plotHeight + (!1 !== s.clip ? 0 : o.plotTop))),
                        P ? o.hasLoaded || P.attr(M) : (i && (o.sharedClips[T + "m"] = O = p.clipRect(C ? (o.plotSizeX || 0) + 99 : -99, C ? -o.plotLeft : -o.plotTop, 99, C ? o.chartWidth : o.chartHeight)),
                        o.sharedClips[T] = P = p.clipRect(M),
                        P.count = {
                            length: 0
                        }),
                        i && !P.count[this.index] && (P.count[this.index] = !0,
                        P.count.length += 1),
                        (!1 !== s.clip || i) && (this.group.clip(i || S ? P : o.clipRect),
                        this.markerGroup.clip(O)),
                        i || (P.count[this.index] && (delete P.count[this.index],
                        --P.count.length),
                        0 === P.count.length && (S || (o.sharedClips[T] = P.destroy()),
                        O && (o.sharedClips[T + "m"] = O.destroy())))
                    }
                    ,
                    a.prototype.animate = function(i) {
                        var o = this.chart
                          , s = D(this.options.animation)
                          , p = this.sharedClipKey;
                        if (i)
                            this.setClip(s);
                        else if (p) {
                            i = o.sharedClips[p],
                            p = o.sharedClips[p + "m"];
                            var C = this.getClipBox(s, !0);
                            i && i.animate(C, s),
                            p && p.animate({
                                width: C.width + 99,
                                x: C.x - (o.inverted ? 0 : 99)
                            }, s)
                        }
                    }
                    ,
                    a.prototype.afterAnimate = function() {
                        this.setClip(),
                        at(this, "afterAnimate"),
                        this.finishedAnimating = !0
                    }
                    ,
                    a.prototype.drawPoints = function() {
                        var i, o, s = this.points, p = this.chart, C = this.options.marker, S = this[this.specialGroup] || this.markerGroup, M = this.xAxis, T = ft(C.enabled, !(M && !M.isRadial) || null, this.closestPointRangePx >= C.enabledThreshold * C.radius);
                        if (!1 !== C.enabled || this._hasPointMarkers)
                            for (i = 0; i < s.length; i++) {
                                var P = s[i]
                                  , O = (o = P.graphic) ? "animate" : "attr"
                                  , D = P.marker || {}
                                  , j = !!P.marker;
                                if ((T && void 0 === D.enabled || D.enabled) && !P.isNull && !1 !== P.visible) {
                                    var R = ft(D.symbol, this.symbol, "rect")
                                      , X = this.markerAttribs(P, P.selected && "select");
                                    this.enabledDataSorting && (P.startXPos = M.reversed ? -(X.width || 0) : M.width);
                                    var Y = !1 !== P.isInside;
                                    o ? o[Y ? "show" : "hide"](Y).animate(X) : Y && (0 < (X.width || 0) || P.hasImage) && (P.graphic = o = p.renderer.symbol(R, X.x, X.y, X.width, X.height, j ? D : C).add(S),
                                    this.enabledDataSorting && p.hasRendered && (o.attr({
                                        x: P.startXPos
                                    }),
                                    O = "animate")),
                                    o && "animate" === O && o[Y ? "show" : "hide"](Y).animate(X),
                                    o && !p.styledMode && o[O](this.pointAttribs(P, P.selected && "select")),
                                    o && o.addClass(P.getClassName(), !0)
                                } else
                                    o && (P.graphic = o.destroy())
                            }
                    }
                    ,
                    a.prototype.markerAttribs = function(i, o) {
                        var s = this.options
                          , p = s.marker
                          , C = i.marker || {}
                          , S = C.symbol || p.symbol
                          , M = ft(C.radius, p.radius);
                        return o && (p = p.states[o],
                        o = C.states && C.states[o],
                        M = ft(o && o.radius, p && p.radius, M + (p && p.radiusPlus || 0))),
                        i.hasImage = S && 0 === S.indexOf("url"),
                        i.hasImage && (M = 0),
                        i = {
                            x: s.crisp ? Math.floor(i.plotX - M) : i.plotX - M,
                            y: i.plotY - M
                        },
                        M && (i.width = i.height = 2 * M),
                        i
                    }
                    ,
                    a.prototype.pointAttribs = function(i, o) {
                        var s = this.options.marker
                          , p = i && i.options
                          , C = p && p.marker || {}
                          , S = this.color
                          , M = p && p.color
                          , T = i && i.color;
                        p = ft(C.lineWidth, s.lineWidth);
                        var P = i && i.zone && i.zone.color;
                        return i = 1,
                        S = M || P || T || S,
                        M = C.fillColor || s.fillColor || S,
                        S = C.lineColor || s.lineColor || S,
                        o = o || "normal",
                        s = s.states[o],
                        o = C.states && C.states[o] || {},
                        p = ft(o.lineWidth, s.lineWidth, p + ft(o.lineWidthPlus, s.lineWidthPlus, 0)),
                        M = o.fillColor || s.fillColor || M,
                        {
                            stroke: S = o.lineColor || s.lineColor || S,
                            "stroke-width": p,
                            fill: M,
                            opacity: i = ft(o.opacity, s.opacity, i)
                        }
                    }
                    ,
                    a.prototype.destroy = function(i) {
                        var o, s, p, C = this, S = C.chart, M = /AppleWebKit\/533/.test(_.navigator.userAgent), T = C.data || [];
                        for (at(C, "destroy"),
                        this.removeEvents(i),
                        (C.axisTypes || []).forEach((function(i) {
                            (p = C[i]) && p.series && (ot(p.series, C),
                            p.isDirty = p.forceRedraw = !0)
                        }
                        )),
                        C.legendItem && C.chart.legend.destroyItem(C),
                        o = T.length; o--; )
                            (s = T[o]) && s.destroy && s.destroy();
                        C.clips && C.clips.forEach((function(i) {
                            return i.destroy()
                        }
                        )),
                        O.clearTimeout(C.animationTimeout),
                        ut(C, (function(i, o) {
                            i instanceof P && !i.survive && i[M && "group" === o ? "hide" : "destroy"]()
                        }
                        )),
                        S.hoverSeries === C && (S.hoverSeries = void 0),
                        ot(S.series, C),
                        S.orderSeries(),
                        ut(C, (function(o, s) {
                            i && "hcEvents" === s || delete C[s]
                        }
                        ))
                    }
                    ,
                    a.prototype.applyZones = function() {
                        var i, o, s, p, C, S, M, T, P = this, O = this.chart, D = O.renderer, j = this.zones, R = this.clips || [], X = this.graph, Y = this.area, _ = Math.max(O.chartWidth, O.chartHeight), F = this[(this.zoneAxis || "y") + "Axis"], U = O.inverted, V = !1;
                        if (j.length && (X || Y) && F && void 0 !== F.min) {
                            var Z = F.reversed
                              , $ = F.horiz;
                            X && !this.showLine && X.hide(),
                            Y && Y.hide();
                            var tt = F.getExtremes();
                            j.forEach((function(j, et) {
                                i = Z ? $ ? O.plotWidth : 0 : $ ? 0 : F.toPixels(tt.min) || 0,
                                i = Q(ft(o, i), 0, _),
                                o = Q(Math.round(F.toPixels(ft(j.value, tt.max), !0) || 0), 0, _),
                                V && (i = o = F.toPixels(tt.max)),
                                p = Math.abs(i - o),
                                C = Math.min(i, o),
                                S = Math.max(i, o),
                                F.isXAxis ? (s = {
                                    x: U ? S : C,
                                    y: 0,
                                    width: p,
                                    height: _
                                },
                                $ || (s.x = O.plotHeight - s.x)) : (s = {
                                    x: 0,
                                    y: U ? S : C,
                                    width: _,
                                    height: p
                                },
                                $ && (s.y = O.plotWidth - s.y)),
                                U && D.isVML && (s = F.isXAxis ? {
                                    x: 0,
                                    y: Z ? C : S,
                                    height: s.width,
                                    width: O.chartWidth
                                } : {
                                    x: s.y - O.plotLeft - O.spacingBox.x,
                                    y: 0,
                                    width: s.height,
                                    height: O.chartHeight
                                }),
                                R[et] ? R[et].animate(s) : R[et] = D.clipRect(s),
                                M = P["zone-area-" + et],
                                T = P["zone-graph-" + et],
                                X && T && T.clip(R[et]),
                                Y && M && M.clip(R[et]),
                                V = j.value > tt.max,
                                P.resetZones && 0 === o && (o = void 0)
                            }
                            )),
                            this.clips = R
                        } else
                            P.visible && (X && X.show(!0),
                            Y && Y.show(!0))
                    }
                    ,
                    a.prototype.invertGroups = function(i) {
                        function b() {
                            ["group", "markerGroup"].forEach((function(p) {
                                o[p] && (s.renderer.isVML && o[p].attr({
                                    width: o.yAxis.len,
                                    height: o.xAxis.len
                                }),
                                o[p].width = o.yAxis.len,
                                o[p].height = o.xAxis.len,
                                o[p].invert(!o.isRadialSeries && i))
                            }
                            ))
                        }
                        var o = this
                          , s = o.chart;
                        o.xAxis && (o.eventsToUnbind.push(V(s, "resize", b)),
                        b(),
                        o.invertGroups = b)
                    }
                    ,
                    a.prototype.plotGroup = function(i, o, s, p, C) {
                        var S = this[i]
                          , M = !S;
                        return s = {
                            visibility: s,
                            zIndex: p || .1
                        },
                        void 0 === this.opacity || this.chart.styledMode || "inactive" === this.state || (s.opacity = this.opacity),
                        M && (this[i] = S = this.chart.renderer.g().add(C)),
                        S.addClass("highcharts-" + o + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (it(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (S.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0),
                        S.attr(s)[M ? "attr" : "animate"](this.getPlotBox()),
                        S
                    }
                    ,
                    a.prototype.getPlotBox = function() {
                        var i = this.chart
                          , o = this.xAxis
                          , s = this.yAxis;
                        return i.inverted && (o = s,
                        s = this.xAxis),
                        {
                            translateX: o ? o.left : i.plotLeft,
                            translateY: s ? s.top : i.plotTop,
                            scaleX: 1,
                            scaleY: 1
                        }
                    }
                    ,
                    a.prototype.removeEvents = function(i) {
                        i || gt(this),
                        this.eventsToUnbind.length && (this.eventsToUnbind.forEach((function(i) {
                            i()
                        }
                        )),
                        this.eventsToUnbind.length = 0)
                    }
                    ,
                    a.prototype.render = function() {
                        var i = this
                          , o = i.chart
                          , s = i.options
                          , p = D(s.animation)
                          , C = !i.finishedAnimating && o.renderer.isSVG && p.duration
                          , S = i.visible ? "inherit" : "hidden"
                          , M = s.zIndex
                          , T = i.hasRendered
                          , P = o.seriesGroup
                          , O = o.inverted;
                        at(this, "render");
                        var j = i.plotGroup("group", "series", S, M, P);
                        i.markerGroup = i.plotGroup("markerGroup", "markers", S, M, P),
                        C && i.animate && i.animate(!0),
                        j.inverted = !!ft(i.invertible, i.isCartesian) && O,
                        i.drawGraph && (i.drawGraph(),
                        i.applyZones()),
                        i.visible && i.drawPoints(),
                        i.drawDataLabels && i.drawDataLabels(),
                        i.redrawPoints && i.redrawPoints(),
                        i.drawTracker && !1 !== i.options.enableMouseTracking && i.drawTracker(),
                        i.invertGroups(O),
                        !1 === s.clip || i.sharedClipKey || T || j.clip(o.clipRect),
                        C && i.animate && i.animate(),
                        T || (C && p.defer && (C += p.defer),
                        i.animationTimeout = yt((function() {
                            i.afterAnimate()
                        }
                        ), C || 0)),
                        i.isDirty = !1,
                        i.hasRendered = !0,
                        at(i, "afterRender")
                    }
                    ,
                    a.prototype.redraw = function() {
                        var i = this.chart
                          , o = this.isDirty || this.isDirtyData
                          , s = this.group
                          , p = this.xAxis
                          , C = this.yAxis;
                        s && (i.inverted && s.attr({
                            width: i.plotWidth,
                            height: i.plotHeight
                        }),
                        s.animate({
                            translateX: ft(p && p.left, i.plotLeft),
                            translateY: ft(C && C.top, i.plotTop)
                        })),
                        this.translate(),
                        this.render(),
                        o && delete this.kdTree
                    }
                    ,
                    a.prototype.searchPoint = function(i, o) {
                        var s = this.xAxis
                          , p = this.yAxis
                          , C = this.chart.inverted;
                        return this.searchKDTree({
                            clientX: C ? s.len - i.chartY + s.pos : i.chartX - s.pos,
                            plotY: C ? p.len - i.chartX + p.pos : i.chartY - p.pos
                        }, o, i)
                    }
                    ,
                    a.prototype.buildKDTree = function(i) {
                        function b(i, s, p) {
                            var C;
                            if (C = i && i.length) {
                                var S = o.kdAxisArray[s % p];
                                return i.sort((function(i, o) {
                                    return i[S] - o[S]
                                }
                                )),
                                {
                                    point: i[C = Math.floor(C / 2)],
                                    left: b(i.slice(0, C), s + 1, p),
                                    right: b(i.slice(C + 1), s + 1, p)
                                }
                            }
                        }
                        this.buildingKdTree = !0;
                        var o = this
                          , s = -1 < o.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                        delete o.kdTree,
                        yt((function() {
                            o.kdTree = b(o.getValidPoints(null, !o.directTouch), s, s),
                            o.buildingKdTree = !1
                        }
                        ), o.options.kdNow || i && "touchstart" === i.type ? 0 : 1)
                    }
                    ,
                    a.prototype.searchKDTree = function(i, o, s) {
                        var p = this
                          , C = this.kdAxisArray[0]
                          , S = this.kdAxisArray[1]
                          , M = o ? "distX" : "dist";
                        if (o = -1 < p.options.findNearestPointBy.indexOf("y") ? 2 : 1,
                        this.kdTree || this.buildingKdTree || this.buildKDTree(s),
                        this.kdTree)
                            return function e(i, o, s, T) {
                                var P = o.point
                                  , O = p.kdAxisArray[s % T]
                                  , D = P
                                  , j = it(i[C]) && it(P[C]) ? Math.pow(i[C] - P[C], 2) : null
                                  , R = it(i[S]) && it(P[S]) ? Math.pow(i[S] - P[S], 2) : null;
                                return R = (j || 0) + (R || 0),
                                P.dist = it(R) ? Math.sqrt(R) : Number.MAX_VALUE,
                                P.distX = it(j) ? Math.sqrt(j) : Number.MAX_VALUE,
                                j = 0 > (O = i[O] - P[O]) ? "right" : "left",
                                o[R = 0 > O ? "left" : "right"] && (D = (R = e(i, o[R], s + 1, T))[M] < D[M] ? R : P),
                                o[j] && Math.sqrt(O * O) < D[M] && (D = (i = e(i, o[j], s + 1, T))[M] < D[M] ? i : D),
                                D
                            }(i, this.kdTree, o, o)
                    }
                    ,
                    a.prototype.pointPlacementToXValue = function() {
                        var i = this.options
                          , o = i.pointRange
                          , s = this.xAxis;
                        return "between" === (i = i.pointPlacement) && (i = s.reversed ? -.5 : .5),
                        ct(i) ? i * (o || s.pointRange) : 0
                    }
                    ,
                    a.prototype.isPointInside = function(i) {
                        return void 0 !== i.plotY && void 0 !== i.plotX && 0 <= i.plotY && i.plotY <= this.yAxis.len && 0 <= i.plotX && i.plotX <= this.xAxis.len
                    }
                    ,
                    a.prototype.drawTracker = function() {
                        var i = this
                          , o = i.options
                          , s = o.trackByArea
                          , p = [].concat(s ? i.areaPath : i.graphPath)
                          , C = i.chart
                          , S = C.pointer
                          , M = C.renderer
                          , T = C.options.tooltip.snap
                          , P = i.tracker
                          , h = function(o) {
                            C.hoverSeries !== i && i.onMouseOver()
                        }
                          , O = "rgba(192,192,192," + (Y ? 1e-4 : .002) + ")";
                        P ? P.attr({
                            d: p
                        }) : i.graph && (i.tracker = M.path(p).attr({
                            visibility: i.visible ? "visible" : "hidden",
                            zIndex: 2
                        }).addClass(s ? "highcharts-tracker-area" : "highcharts-tracker-line").add(i.group),
                        C.styledMode || i.tracker.attr({
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            stroke: O,
                            fill: s ? O : "none",
                            "stroke-width": i.graph.strokeWidth() + (s ? 0 : 2 * T)
                        }),
                        [i.tracker, i.markerGroup, i.dataLabelsGroup].forEach((function(i) {
                            i && (i.addClass("highcharts-tracker").on("mouseover", h).on("mouseout", (function(i) {
                                S.onTrackerMouseOut(i)
                            }
                            )),
                            o.cursor && !C.styledMode && i.css({
                                cursor: o.cursor
                            }),
                            X) && i.on("touchstart", h)
                        }
                        ))),
                        at(this, "afterDrawTracker")
                    }
                    ,
                    a.prototype.addPoint = function(i, o, s, p, C) {
                        var S = this.options
                          , M = this.data
                          , T = this.chart
                          , P = this.xAxis;
                        P = P && P.hasNames && P.names;
                        var O, D = S.data, j = this.xData;
                        o = ft(o, !0);
                        var R = {
                            series: this
                        };
                        this.pointClass.prototype.applyOptions.apply(R, [i]);
                        var X = R.x
                          , Y = j.length;
                        if (this.requireSorting && X < j[Y - 1])
                            for (O = !0; Y && j[Y - 1] > X; )
                                Y--;
                        this.updateParallelArrays(R, "splice", Y, 0, 0),
                        this.updateParallelArrays(R, Y),
                        P && R.name && (P[X] = R.name),
                        D.splice(Y, 0, i),
                        O && (this.data.splice(Y, 0, null),
                        this.processData()),
                        "point" === S.legendType && this.generatePoints(),
                        s && (M[0] && M[0].remove ? M[0].remove(!1) : (M.shift(),
                        this.updateParallelArrays(R, "shift"),
                        D.shift())),
                        !1 !== C && at(this, "addPoint", {
                            point: R
                        }),
                        this.isDirtyData = this.isDirty = !0,
                        o && T.redraw(p)
                    }
                    ,
                    a.prototype.removePoint = function(i, o, s) {
                        var p = this
                          , C = p.data
                          , S = C[i]
                          , M = p.points
                          , T = p.chart
                          , h = function() {
                            M && M.length === C.length && M.splice(i, 1),
                            C.splice(i, 1),
                            p.options.data.splice(i, 1),
                            p.updateParallelArrays(S || {
                                series: p
                            }, "splice", i, 1),
                            S && S.destroy(),
                            p.isDirty = !0,
                            p.isDirtyData = !0,
                            o && T.redraw()
                        };
                        j(s, T),
                        o = ft(o, !0),
                        S ? S.firePointEvent("remove", null, h) : h()
                    }
                    ,
                    a.prototype.remove = function(i, o, s, p) {
                        function e() {
                            C.destroy(p),
                            S.isDirtyLegend = S.isDirtyBox = !0,
                            S.linkSeries(),
                            ft(i, !0) && S.redraw(o)
                        }
                        var C = this
                          , S = C.chart;
                        !1 !== s ? at(C, "remove", null, e) : e()
                    }
                    ,
                    a.prototype.update = function(i, o) {
                        i = tt(i, this.userOptions),
                        at(this, "update", {
                            options: i
                        });
                        var s, p = this, C = p.chart, S = p.userOptions, M = p.initialType || p.type, T = C.options.plotOptions, P = i.type || S.type || C.options.chart.type, O = !(this.hasDerivedData || P && P !== this.type || void 0 !== i.pointStart || void 0 !== i.pointInterval || p.hasOptionChanged("dataGrouping") || p.hasOptionChanged("pointStart") || p.hasOptionChanged("pointInterval") || p.hasOptionChanged("pointIntervalUnit") || p.hasOptionChanged("keys")), D = U[M].prototype, j = ["eventOptions", "navigatorSeries", "baseSeries"], R = p.finishedAnimating && {
                            animation: !1
                        }, X = {};
                        if (P = P || M,
                        O && (j.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"),
                        !1 !== i.visible && j.push("area", "graph"),
                        p.parallelArrays.forEach((function(i) {
                            j.push(i + "Data")
                        }
                        )),
                        i.data && (i.dataSorting && rt(p.options.dataSorting, i.dataSorting),
                        this.setData(i.data, !1))),
                        i = pt(S, R, {
                            index: void 0 === S.index ? p.index : S.index,
                            pointStart: ft(T && T.series && T.series.pointStart, S.pointStart, p.xData[0])
                        }, !O && {
                            data: p.options.data
                        }, i),
                        O && i.data && (i.data = p.options.data),
                        (j = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(j)).forEach((function(i) {
                            j[i] = p[i],
                            delete p[i]
                        }
                        )),
                        S = !1,
                        U[P]) {
                            if (S = P !== p.type,
                            p.remove(!1, !1, !1, !0),
                            S)
                                if (Object.setPrototypeOf)
                                    Object.setPrototypeOf(p, U[P].prototype);
                                else {
                                    for (s in T = Object.hasOwnProperty.call(p, "hcEvents") && p.hcEvents,
                                    D)
                                        p[s] = void 0;
                                    rt(p, U[P].prototype),
                                    T ? p.hcEvents = T : delete p.hcEvents
                                }
                        } else
                            st(17, !0, C, {
                                missingModuleFor: P
                            });
                        if (j.forEach((function(i) {
                            p[i] = j[i]
                        }
                        )),
                        p.init(C, i),
                        O && this.points) {
                            var Y = p.options;
                            !1 === Y.visible ? (X.graphic = 1,
                            X.dataLabel = 1) : p._hasPointLabels || (i = Y.marker,
                            P = Y.dataLabels,
                            i && (!1 === i.enabled || "symbol"in i) && (X.graphic = 1),
                            P && !1 === P.enabled && (X.dataLabel = 1)),
                            this.points.forEach((function(i) {
                                i && i.series && (i.resolveColor(),
                                Object.keys(X).length && i.destroyElements(X),
                                !1 === Y.showInLegend && i.legendItem && C.legend.destroyItem(i))
                            }
                            ), this)
                        }
                        p.initialType = M,
                        C.linkSeries(),
                        S && p.linkedSeries.length && (p.isDirtyData = !0),
                        at(this, "afterUpdate"),
                        ft(o, !0) && C.redraw(!!O && void 0)
                    }
                    ,
                    a.prototype.setName = function(i) {
                        this.name = this.options.name = this.userOptions.name = i,
                        this.chart.isDirtyLegend = !0
                    }
                    ,
                    a.prototype.hasOptionChanged = function(i) {
                        var o = this.options[i]
                          , s = this.chart.options.plotOptions
                          , p = this.userOptions[i];
                        return p ? o !== p : o !== ft(s && s[this.type] && s[this.type][i], s && s.series && s.series[i], o)
                    }
                    ,
                    a.prototype.onMouseOver = function() {
                        var i = this.chart
                          , o = i.hoverSeries;
                        i.pointer.setHoverChartIndex(),
                        o && o !== this && o.onMouseOut(),
                        this.options.events.mouseOver && at(this, "mouseOver"),
                        this.setState("hover"),
                        i.hoverSeries = this
                    }
                    ,
                    a.prototype.onMouseOut = function() {
                        var i = this.options
                          , o = this.chart
                          , s = o.tooltip
                          , p = o.hoverPoint;
                        o.hoverSeries = null,
                        p && p.onMouseOut(),
                        this && i.events.mouseOut && at(this, "mouseOut"),
                        !s || this.stickyTracking || s.shared && !this.noSharedTooltip || s.hide(),
                        o.series.forEach((function(i) {
                            i.setState("", !0)
                        }
                        ))
                    }
                    ,
                    a.prototype.setState = function(i, o) {
                        var s = this
                          , p = s.options
                          , C = s.graph
                          , S = p.inactiveOtherPoints
                          , M = p.states
                          , T = p.lineWidth
                          , P = p.opacity
                          , O = ft(M[i || "normal"] && M[i || "normal"].animation, s.chart.options.chart.animation);
                        if (p = 0,
                        i = i || "",
                        s.state !== i && ([s.group, s.markerGroup, s.dataLabelsGroup].forEach((function(o) {
                            o && (s.state && o.removeClass("highcharts-series-" + s.state),
                            i && o.addClass("highcharts-series-" + i))
                        }
                        )),
                        s.state = i,
                        !s.chart.styledMode)) {
                            if (M[i] && !1 === M[i].enabled)
                                return;
                            if (i && (T = M[i].lineWidth || T + (M[i].lineWidthPlus || 0),
                            P = ft(M[i].opacity, P)),
                            C && !C.dashstyle)
                                for (M = {
                                    "stroke-width": T
                                },
                                C.animate(M, O); s["zone-graph-" + p]; )
                                    s["zone-graph-" + p].animate(M, O),
                                    p += 1;
                            S || [s.group, s.markerGroup, s.dataLabelsGroup, s.labelBySeries].forEach((function(i) {
                                i && i.animate({
                                    opacity: P
                                }, O)
                            }
                            ))
                        }
                        o && S && s.points && s.setAllPointsToState(i || void 0)
                    }
                    ,
                    a.prototype.setAllPointsToState = function(i) {
                        this.points.forEach((function(o) {
                            o.setState && o.setState(i)
                        }
                        ))
                    }
                    ,
                    a.prototype.setVisible = function(i, o) {
                        var s = this
                          , p = s.chart
                          , C = s.legendItem
                          , S = p.options.chart.ignoreHiddenSeries
                          , M = s.visible
                          , T = (s.visible = i = s.options.visible = s.userOptions.visible = void 0 === i ? !M : i) ? "show" : "hide";
                        ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach((function(i) {
                            s[i] && s[i][T]()
                        }
                        )),
                        p.hoverSeries !== s && (p.hoverPoint && p.hoverPoint.series) !== s || s.onMouseOut(),
                        C && p.legend.colorizeItem(s, i),
                        s.isDirty = !0,
                        s.options.stacking && p.series.forEach((function(i) {
                            i.options.stacking && i.visible && (i.isDirty = !0)
                        }
                        )),
                        s.linkedSeries.forEach((function(o) {
                            o.setVisible(i, !1)
                        }
                        )),
                        S && (p.isDirtyBox = !0),
                        at(s, T),
                        !1 !== o && p.redraw()
                    }
                    ,
                    a.prototype.show = function() {
                        this.setVisible(!0)
                    }
                    ,
                    a.prototype.hide = function() {
                        this.setVisible(!1)
                    }
                    ,
                    a.prototype.select = function(i) {
                        this.selected = i = this.options.selected = void 0 === i ? !this.selected : i,
                        this.checkbox && (this.checkbox.checked = i),
                        at(this, i ? "select" : "unselect")
                    }
                    ,
                    a.prototype.shouldShowTooltip = function(i, o, s) {
                        return void 0 === s && (s = {}),
                        s.series = this,
                        s.visiblePlotOnly = !0,
                        this.chart.isInsidePlot(i, o, s)
                    }
                    ,
                    a.defaultOptions = {
                        lineWidth: 2,
                        allowPointSelect: !1,
                        crisp: !0,
                        showCheckbox: !1,
                        animation: {
                            duration: 1e3
                        },
                        events: {},
                        marker: {
                            enabledThreshold: 2,
                            lineColor: S.backgroundColor,
                            lineWidth: 0,
                            radius: 4,
                            states: {
                                normal: {
                                    animation: !0
                                },
                                hover: {
                                    animation: {
                                        duration: 50
                                    },
                                    enabled: !0,
                                    radiusPlus: 2,
                                    lineWidthPlus: 1
                                },
                                select: {
                                    fillColor: S.neutralColor20,
                                    lineColor: S.neutralColor100,
                                    lineWidth: 2
                                }
                            }
                        },
                        point: {
                            events: {}
                        },
                        dataLabels: {
                            animation: {},
                            align: "center",
                            defer: !0,
                            formatter: function() {
                                var i = this.series.chart.numberFormatter;
                                return "number" != typeof this.y ? "" : i(this.y, -1)
                            },
                            padding: 5,
                            style: {
                                fontSize: "11px",
                                fontWeight: "bold",
                                color: "contrast",
                                textOutline: "1px contrast"
                            },
                            verticalAlign: "bottom",
                            x: 0,
                            y: 0
                        },
                        cropThreshold: 300,
                        opacity: 1,
                        pointRange: 0,
                        softThreshold: !0,
                        states: {
                            normal: {
                                animation: !0
                            },
                            hover: {
                                animation: {
                                    duration: 50
                                },
                                lineWidthPlus: 1,
                                marker: {},
                                halo: {
                                    size: 10,
                                    opacity: .25
                                }
                            },
                            select: {
                                animation: {
                                    duration: 0
                                }
                            },
                            inactive: {
                                animation: {
                                    duration: 50
                                },
                                opacity: .2
                            }
                        },
                        stickyTracking: !0,
                        turboThreshold: 1e3,
                        findNearestPointBy: "x"
                    },
                    a
                }(),
                rt(i.prototype, {
                    axisTypes: ["xAxis", "yAxis"],
                    coll: "series",
                    colorCounter: 0,
                    cropShoulder: 1,
                    directTouch: !1,
                    drawLegendSymbol: p.drawLineMarker,
                    isCartesian: !0,
                    kdAxisArray: ["clientX", "plotY"],
                    parallelArrays: ["x", "y"],
                    pointClass: M,
                    requireSorting: !0,
                    sorted: !0
                }),
                T.series = i,
                i
            }
            )),
            L(o, "Extensions/ScrollablePlotArea.js", [o["Core/Animation/AnimationUtilities.js"], o["Core/Axis/Axis.js"], o["Core/Chart/Chart.js"], o["Core/Series/Series.js"], o["Core/Renderer/RendererRegistry.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C, S) {
                var M = i.stop
                  , T = S.addEvent
                  , P = S.createElement
                  , O = S.merge
                  , D = S.pick;
                T(s, "afterSetChartSize", (function(i) {
                    var s = this.options.chart.scrollablePlotArea
                      , p = s && s.minWidth;
                    if (s = s && s.minHeight,
                    !this.renderer.forExport) {
                        if (p) {
                            if (this.scrollablePixelsX = p = Math.max(0, p - this.chartWidth)) {
                                this.scrollablePlotBox = this.renderer.scrollablePlotBox = O(this.plotBox),
                                this.plotBox.width = this.plotWidth += p,
                                this.inverted ? this.clipBox.height += p : this.clipBox.width += p;
                                var C = {
                                    1: {
                                        name: "right",
                                        value: p
                                    }
                                }
                            }
                        } else
                            s && (this.scrollablePixelsY = p = Math.max(0, s - this.chartHeight)) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = O(this.plotBox),
                            this.plotBox.height = this.plotHeight += p,
                            this.inverted ? this.clipBox.width += p : this.clipBox.height += p,
                            C = {
                                2: {
                                    name: "bottom",
                                    value: p
                                }
                            });
                        C && !i.skipAxes && this.axes.forEach((function(i) {
                            C[i.side] ? i.getPlotLinePath = function() {
                                var s = C[i.side].name
                                  , p = this[s];
                                this[s] = p - C[i.side].value;
                                var S = o.prototype.getPlotLinePath.apply(this, arguments);
                                return this[s] = p,
                                S
                            }
                            : (i.setAxisSize(),
                            i.setAxisTranslation())
                        }
                        ))
                    }
                }
                )),
                T(s, "render", (function() {
                    this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(),
                    this.applyFixed()) : this.fixedDiv && this.applyFixed()
                }
                )),
                s.prototype.setUpScrolling = function() {
                    var i = this
                      , o = {
                        WebkitOverflowScrolling: "touch",
                        overflowX: "hidden",
                        overflowY: "hidden"
                    };
                    this.scrollablePixelsX && (o.overflowX = "auto"),
                    this.scrollablePixelsY && (o.overflowY = "auto"),
                    this.scrollingParent = P("div", {
                        className: "highcharts-scrolling-parent"
                    }, {
                        position: "relative"
                    }, this.renderTo),
                    this.scrollingContainer = P("div", {
                        className: "highcharts-scrolling"
                    }, o, this.scrollingParent),
                    T(this.scrollingContainer, "scroll", (function() {
                        i.pointer && delete i.pointer.chartPosition
                    }
                    )),
                    this.innerContainer = P("div", {
                        className: "highcharts-inner-container"
                    }, null, this.scrollingContainer),
                    this.innerContainer.appendChild(this.container),
                    this.setUpScrolling = null
                }
                ,
                s.prototype.moveFixedElements = function() {
                    var i, o = this.container, s = this.fixedRenderer, p = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" ");
                    this.scrollablePixelsX && !this.inverted ? i = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted || this.scrollablePixelsY && !this.inverted ? i = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (i = ".highcharts-yaxis"),
                    i && p.push(i + ":not(.highcharts-radial-axis)", i + "-labels:not(.highcharts-radial-axis-labels)"),
                    p.forEach((function(i) {
                        [].forEach.call(o.querySelectorAll(i), (function(i) {
                            (i.namespaceURI === s.SVG_NS ? s.box : s.box.parentNode).appendChild(i),
                            i.style.pointerEvents = "auto"
                        }
                        ))
                    }
                    ))
                }
                ,
                s.prototype.applyFixed = function() {
                    var i = !this.fixedDiv
                      , o = this.options.chart
                      , s = o.scrollablePlotArea
                      , p = C.getRendererType();
                    i ? (this.fixedDiv = P("div", {
                        className: "highcharts-fixed"
                    }, {
                        position: "absolute",
                        overflow: "hidden",
                        pointerEvents: "none",
                        zIndex: (o.style && o.style.zIndex || 0) + 2,
                        top: 0
                    }, null, !0),
                    this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer),
                    this.renderTo.style.overflow = "visible",
                    this.fixedRenderer = o = new p(this.fixedDiv,this.chartWidth,this.chartHeight,this.options.chart.style),
                    this.scrollableMask = o.path().attr({
                        fill: this.options.chart.backgroundColor || "#fff",
                        "fill-opacity": D(s.opacity, .85),
                        zIndex: -1
                    }).addClass("highcharts-scrollable-mask").add(),
                    T(this, "afterShowResetZoom", this.moveFixedElements),
                    T(this, "afterDrilldown", this.moveFixedElements),
                    T(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight),
                    (this.scrollableDirty || i) && (this.scrollableDirty = !1,
                    this.moveFixedElements()),
                    o = this.chartWidth + (this.scrollablePixelsX || 0),
                    p = this.chartHeight + (this.scrollablePixelsY || 0),
                    M(this.container),
                    this.container.style.width = o + "px",
                    this.container.style.height = p + "px",
                    this.renderer.boxWrapper.attr({
                        width: o,
                        height: p,
                        viewBox: [0, 0, o, p].join(" ")
                    }),
                    this.chartBackground.attr({
                        width: o,
                        height: p
                    }),
                    this.scrollingContainer.style.height = this.chartHeight + "px",
                    i && (s.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * s.scrollPositionX),
                    s.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * s.scrollPositionY)),
                    p = this.axisOffset,
                    i = this.plotTop - p[0] - 1,
                    s = this.plotLeft - p[3] - 1,
                    o = this.plotTop + this.plotHeight + p[2] + 1,
                    p = this.plotLeft + this.plotWidth + p[1] + 1;
                    var S = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0)
                      , O = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
                    i = this.scrollablePixelsX ? [["M", 0, i], ["L", this.plotLeft - 1, i], ["L", this.plotLeft - 1, o], ["L", 0, o], ["Z"], ["M", S, i], ["L", this.chartWidth, i], ["L", this.chartWidth, o], ["L", S, o], ["Z"]] : this.scrollablePixelsY ? [["M", s, 0], ["L", s, this.plotTop - 1], ["L", p, this.plotTop - 1], ["L", p, 0], ["Z"], ["M", s, O], ["L", s, this.chartHeight], ["L", p, this.chartHeight], ["L", p, O], ["Z"]] : [["M", 0, 0]],
                    "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
                        d: i
                    })
                }
                ,
                T(o, "afterInit", (function() {
                    this.chart.scrollableDirty = !0
                }
                )),
                T(p, "show", (function() {
                    this.chart.scrollableDirty = !0
                }
                ))
            }
            )),
            L(o, "Core/Axis/StackingAxis.js", [o["Core/Animation/AnimationUtilities.js"], o["Core/Utilities.js"]], (function(i, o) {
                var s = i.getDeferredAnimation
                  , p = o.addEvent
                  , C = o.destroyObjectProperties
                  , S = o.fireEvent
                  , M = o.isNumber
                  , T = o.objectEach
                  , P = function() {
                    function a(i) {
                        this.oldStacks = {},
                        this.stacks = {},
                        this.stacksTouched = 0,
                        this.axis = i
                    }
                    return a.prototype.buildStacks = function() {
                        var i, o = this.axis, s = o.series, p = o.options.reversedStacks, C = s.length;
                        if (!o.isXAxis) {
                            for (this.usePercentage = !1,
                            i = C; i--; ) {
                                var M = s[p ? i : C - i - 1];
                                M.setStackedPoints(),
                                M.setGroupedPoints()
                            }
                            for (i = 0; i < C; i++)
                                s[i].modifyStacks();
                            S(o, "afterBuildStacks")
                        }
                    }
                    ,
                    a.prototype.cleanStacks = function() {
                        if (!this.axis.isXAxis) {
                            if (this.oldStacks)
                                var i = this.stacks = this.oldStacks;
                            T(i, (function(i) {
                                T(i, (function(i) {
                                    i.cumulative = i.total
                                }
                                ))
                            }
                            ))
                        }
                    }
                    ,
                    a.prototype.resetStacks = function() {
                        var i = this
                          , o = this.stacks;
                        this.axis.isXAxis || T(o, (function(o) {
                            T(o, (function(s, p) {
                                M(s.touched) && s.touched < i.stacksTouched ? (s.destroy(),
                                delete o[p]) : (s.total = null,
                                s.cumulative = null)
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    a.prototype.renderStackTotals = function() {
                        var i = this.axis
                          , o = i.chart
                          , p = o.renderer
                          , C = this.stacks;
                        i = s(o, i.options.stackLabels && i.options.stackLabels.animation || !1);
                        var S = this.stackTotalGroup = this.stackTotalGroup || p.g("stack-labels").attr({
                            visibility: "visible",
                            zIndex: 6,
                            opacity: 0
                        }).add();
                        S.translate(o.plotLeft, o.plotTop),
                        T(C, (function(i) {
                            T(i, (function(i) {
                                i.render(S)
                            }
                            ))
                        }
                        )),
                        S.animate({
                            opacity: 1
                        }, i)
                    }
                    ,
                    a
                }();
                return function() {
                    function a() {}
                    return a.compose = function(i) {
                        p(i, "init", a.onInit),
                        p(i, "destroy", a.onDestroy)
                    }
                    ,
                    a.onDestroy = function() {
                        var i = this.stacking;
                        if (i) {
                            var o = i.stacks;
                            T(o, (function(i, s) {
                                C(i),
                                o[s] = null
                            }
                            )),
                            i && i.stackTotalGroup && i.stackTotalGroup.destroy()
                        }
                    }
                    ,
                    a.onInit = function() {
                        this.stacking || (this.stacking = new P(this))
                    }
                    ,
                    a
                }()
            }
            )),
            L(o, "Extensions/Stacking.js", [o["Core/Axis/Axis.js"], o["Core/Chart/Chart.js"], o["Core/FormatUtilities.js"], o["Core/Globals.js"], o["Core/Series/Series.js"], o["Core/Axis/StackingAxis.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C, S, M) {
                var T = s.format
                  , P = M.correctFloat
                  , O = M.defined
                  , D = M.destroyObjectProperties
                  , j = M.isArray
                  , R = M.isNumber
                  , X = M.objectEach
                  , Y = M.pick
                  , _ = function() {
                    function a(i, o, s, p, C) {
                        var S = i.chart.inverted;
                        this.axis = i,
                        this.isNegative = s,
                        this.options = o = o || {},
                        this.x = p,
                        this.total = null,
                        this.points = {},
                        this.hasValidPoints = !1,
                        this.stack = C,
                        this.rightCliff = this.leftCliff = 0,
                        this.alignOptions = {
                            align: o.align || (S ? s ? "left" : "right" : "center"),
                            verticalAlign: o.verticalAlign || (S ? "middle" : s ? "bottom" : "top"),
                            y: o.y,
                            x: o.x
                        },
                        this.textAlign = o.textAlign || (S ? s ? "right" : "left" : "center")
                    }
                    return a.prototype.destroy = function() {
                        D(this, this.axis)
                    }
                    ,
                    a.prototype.render = function(i) {
                        var o = this.axis.chart
                          , s = this.options
                          , p = s.format;
                        p = p ? T(p, this, o) : s.formatter.call(this),
                        this.label ? this.label.attr({
                            text: p,
                            visibility: "hidden"
                        }) : (this.label = o.renderer.label(p, null, null, s.shape, null, null, s.useHTML, !1, "stack-labels"),
                        p = {
                            r: s.borderRadius || 0,
                            text: p,
                            rotation: s.rotation,
                            padding: Y(s.padding, 5),
                            visibility: "hidden"
                        },
                        o.styledMode || (p.fill = s.backgroundColor,
                        p.stroke = s.borderColor,
                        p["stroke-width"] = s.borderWidth,
                        this.label.css(s.style)),
                        this.label.attr(p),
                        this.label.added || this.label.add(i)),
                        this.label.labelrank = o.plotSizeY
                    }
                    ,
                    a.prototype.setOffset = function(i, o, s, p, S) {
                        var M = this.axis
                          , T = M.chart;
                        p = M.translate(M.stacking.usePercentage ? 100 : p || this.total, 0, 0, 0, 1),
                        s = M.translate(s || 0),
                        s = O(p) && Math.abs(p - s),
                        i = Y(S, T.xAxis[0].translate(this.x)) + i,
                        M = O(p) && this.getStackBox(T, this, i, p, o, s, M),
                        o = this.label,
                        s = this.isNegative,
                        i = "justify" === Y(this.options.overflow, "justify");
                        var P = this.textAlign;
                        o && M && (S = o.getBBox(),
                        p = o.padding,
                        P = "left" === P ? T.inverted ? -p : p : "right" === P ? S.width : T.inverted && "center" === P ? S.width / 2 : T.inverted ? s ? S.width + p : -p : S.width / 2,
                        s = T.inverted ? S.height / 2 : s ? -p : S.height,
                        this.alignOptions.x = Y(this.options.x, 0),
                        this.alignOptions.y = Y(this.options.y, 0),
                        M.x -= P,
                        M.y -= s,
                        o.align(this.alignOptions, null, M),
                        T.isInsidePlot(o.alignAttr.x + P - this.alignOptions.x, o.alignAttr.y + s - this.alignOptions.y) ? o.show() : (o.alignAttr.y = -9999,
                        i = !1),
                        i && C.prototype.justifyDataLabel.call(this.axis, o, this.alignOptions, o.alignAttr, S, M),
                        o.attr({
                            x: o.alignAttr.x,
                            y: o.alignAttr.y
                        }),
                        Y(!i && this.options.crop, !0) && ((T = R(o.x) && R(o.y) && T.isInsidePlot(o.x - p + o.width, o.y) && T.isInsidePlot(o.x + p, o.y)) || o.hide()))
                    }
                    ,
                    a.prototype.getStackBox = function(i, o, s, p, C, S, M) {
                        var T = o.axis.reversed
                          , P = i.inverted
                          , O = M.height + M.pos - (P ? i.plotLeft : i.plotTop);
                        return o = o.isNegative && !T || !o.isNegative && T,
                        {
                            x: P ? o ? p - M.right : p - S + M.pos - i.plotLeft : s + i.xAxis[0].transB - i.plotLeft,
                            y: P ? M.height - s - C : o ? O - p - S : O - p,
                            width: P ? S : C,
                            height: P ? C : S
                        }
                    }
                    ,
                    a
                }();
                return o.prototype.getStacks = function() {
                    var i = this
                      , o = i.inverted;
                    i.yAxis.forEach((function(i) {
                        i.stacking && i.stacking.stacks && i.hasVisibleSeries && (i.stacking.oldStacks = i.stacking.stacks)
                    }
                    )),
                    i.series.forEach((function(s) {
                        var p = s.xAxis && s.xAxis.options || {};
                        !s.options.stacking || !0 !== s.visible && !1 !== i.options.chart.ignoreHiddenSeries || (s.stackKey = [s.type, Y(s.options.stack, ""), o ? p.top : p.left, o ? p.height : p.width].join())
                    }
                    ))
                }
                ,
                S.compose(i),
                C.prototype.setGroupedPoints = function() {
                    var i = this.yAxis.stacking;
                    this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? C.prototype.setStackedPoints.call(this, "group") : i && X(i.stacks, (function(o, s) {
                        "group" === s.slice(-5) && (X(o, (function(i) {
                            return i.destroy()
                        }
                        )),
                        delete i.stacks[s])
                    }
                    ))
                }
                ,
                C.prototype.setStackedPoints = function(i) {
                    var o = i || this.options.stacking;
                    if (o && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                        var s = this.processedXData
                          , p = this.processedYData
                          , C = []
                          , S = p.length
                          , M = this.options
                          , T = M.threshold
                          , D = Y(M.startFromThreshold && T, 0);
                        M = M.stack;
                        var R, X, F = "-" + (i = i ? this.type + "," + o : this.stackKey), U = this.negStacks, V = this.yAxis, Z = V.stacking.stacks, $ = V.stacking.oldStacks;
                        for (V.stacking.stacksTouched += 1,
                        X = 0; X < S; X++) {
                            var Q = s[X]
                              , tt = p[X]
                              , et = this.getStackIndicator(et, Q, this.index)
                              , it = et.key
                              , ot = (R = U && tt < (D ? 0 : T)) ? F : i;
                            Z[ot] || (Z[ot] = {}),
                            Z[ot][Q] || ($[ot] && $[ot][Q] ? (Z[ot][Q] = $[ot][Q],
                            Z[ot][Q].total = null) : Z[ot][Q] = new _(V,V.options.stackLabels,R,Q,M)),
                            ot = Z[ot][Q],
                            null !== tt ? (ot.points[it] = ot.points[this.index] = [Y(ot.cumulative, D)],
                            O(ot.cumulative) || (ot.base = it),
                            ot.touched = V.stacking.stacksTouched,
                            0 < et.index && !1 === this.singleStacks && (ot.points[it][0] = ot.points[this.index + "," + Q + ",0"][0])) : ot.points[it] = ot.points[this.index] = null,
                            "percent" === o ? (R = R ? i : F,
                            U && Z[R] && Z[R][Q] ? (R = Z[R][Q],
                            ot.total = R.total = Math.max(R.total, ot.total) + Math.abs(tt) || 0) : ot.total = P(ot.total + (Math.abs(tt) || 0))) : "group" === o ? (j(tt) && (tt = tt[0]),
                            null !== tt && (ot.total = (ot.total || 0) + 1)) : ot.total = P(ot.total + (tt || 0)),
                            ot.cumulative = "group" === o ? (ot.total || 1) - 1 : Y(ot.cumulative, D) + (tt || 0),
                            null !== tt && (ot.points[it].push(ot.cumulative),
                            C[X] = ot.cumulative,
                            ot.hasValidPoints = !0)
                        }
                        "percent" === o && (V.stacking.usePercentage = !0),
                        "group" !== o && (this.stackedYData = C),
                        V.stacking.oldStacks = {}
                    }
                }
                ,
                C.prototype.modifyStacks = function() {
                    var i, o = this, s = o.stackKey, p = o.yAxis.stacking.stacks, C = o.processedXData, S = o.options.stacking;
                    o[S + "Stacker"] && [s, "-" + s].forEach((function(s) {
                        for (var M, T, P = C.length; P--; )
                            M = C[P],
                            i = o.getStackIndicator(i, M, o.index, s),
                            (T = (M = p[s] && p[s][M]) && M.points[i.key]) && o[S + "Stacker"](T, M, P)
                    }
                    ))
                }
                ,
                C.prototype.percentStacker = function(i, o, s) {
                    o = o.total ? 100 / o.total : 0,
                    i[0] = P(i[0] * o),
                    i[1] = P(i[1] * o),
                    this.stackedYData[s] = i[1]
                }
                ,
                C.prototype.getStackIndicator = function(i, o, s, p) {
                    return !O(i) || i.x !== o || p && i.key !== p ? i = {
                        x: o,
                        index: 0,
                        key: p
                    } : i.index++,
                    i.key = [s, o, i.index].join(),
                    i
                }
                ,
                p.StackItem = _,
                p.StackItem
            }
            )),
            L(o, "Series/Line/LineSeries.js", [o["Core/Color/Palette.js"], o["Core/Series/Series.js"], o["Core/Series/SeriesRegistry.js"], o["Core/Utilities.js"]], (function(i, o, s, p) {
                var C = this && this.__extends || function() {
                    var a = function(i, o) {
                        return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        )(i, o)
                    };
                    return function(i, o) {
                        function f() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (f.prototype = o.prototype,
                        new f)
                    }
                }()
                  , S = p.defined
                  , M = p.merge;
                return p = function(s) {
                    function q() {
                        var i = null !== s && s.apply(this, arguments) || this;
                        return i.data = void 0,
                        i.options = void 0,
                        i.points = void 0,
                        i
                    }
                    return C(q, s),
                    q.prototype.drawGraph = function() {
                        var o = this
                          , s = this.options
                          , p = (this.gappedPath || this.getGraphPath).call(this)
                          , C = this.chart.styledMode
                          , S = [["graph", "highcharts-graph"]];
                        C || S[0].push(s.lineColor || this.color || i.neutralColor20, s.dashStyle),
                        (S = o.getZonesGraphs(S)).forEach((function(i, S) {
                            var M = i[0]
                              , T = o[M]
                              , P = T ? "animate" : "attr";
                            T ? (T.endX = o.preventGraphAnimation ? null : p.xMap,
                            T.animate({
                                d: p
                            })) : p.length && (o[M] = T = o.chart.renderer.path(p).addClass(i[1]).attr({
                                zIndex: 1
                            }).add(o.group)),
                            T && !C && (M = {
                                stroke: i[2],
                                "stroke-width": s.lineWidth,
                                fill: o.fillGraph && o.color || "none"
                            },
                            i[3] ? M.dashstyle = i[3] : "square" !== s.linecap && (M["stroke-linecap"] = M["stroke-linejoin"] = "round"),
                            T[P](M).shadow(2 > S && s.shadow)),
                            T && (T.startX = p.xMap,
                            T.isArea = p.isArea)
                        }
                        ))
                    }
                    ,
                    q.prototype.getGraphPath = function(i, o, s) {
                        var p, C, M = this, T = M.options, P = T.step, O = [], D = [];
                        return (p = (i = i || M.points).reversed) && i.reverse(),
                        (P = {
                            right: 1,
                            center: 2
                        }[P] || P && 3) && p && (P = 4 - P),
                        (i = this.getValidPoints(i, !1, !(T.connectNulls && !o && !s))).forEach((function(p, j) {
                            var R = p.plotX
                              , X = p.plotY
                              , Y = i[j - 1];
                            (p.leftCliff || Y && Y.rightCliff) && !s && (C = !0),
                            p.isNull && !S(o) && 0 < j ? C = !T.connectNulls : p.isNull && !o ? C = !0 : (0 === j || C ? j = [["M", p.plotX, p.plotY]] : M.getPointSpline ? j = [M.getPointSpline(i, p, j)] : P ? (j = 1 === P ? [["L", Y.plotX, X]] : 2 === P ? [["L", (Y.plotX + R) / 2, Y.plotY], ["L", (Y.plotX + R) / 2, X]] : [["L", R, Y.plotY]]).push(["L", R, X]) : j = [["L", R, X]],
                            D.push(p.x),
                            P && (D.push(p.x),
                            2 === P && D.push(p.x)),
                            O.push.apply(O, j),
                            C = !1)
                        }
                        )),
                        O.xMap = D,
                        M.graphPath = O
                    }
                    ,
                    q.prototype.getZonesGraphs = function(i) {
                        return this.zones.forEach((function(o, s) {
                            s = ["zone-graph-" + s, "highcharts-graph highcharts-zone-graph-" + s + " " + (o.className || "")],
                            this.chart.styledMode || s.push(o.color || this.color, o.dashStyle || this.options.dashStyle),
                            i.push(s)
                        }
                        ), this),
                        i
                    }
                    ,
                    q.defaultOptions = M(o.defaultOptions, {}),
                    q
                }(o),
                s.registerSeriesType("line", p),
                p
            }
            )),
            L(o, "Series/Area/AreaSeries.js", [o["Core/Color/Color.js"], o["Mixins/LegendSymbol.js"], o["Core/Series/SeriesRegistry.js"], o["Core/Utilities.js"]], (function(i, o, s, p) {
                var C = this && this.__extends || function() {
                    var a = function(i, o) {
                        return a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        ,
                        a(i, o)
                    };
                    return function(i, o) {
                        function f() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (f.prototype = o.prototype,
                        new f)
                    }
                }()
                  , S = i.parse
                  , M = s.seriesTypes.line;
                i = p.extend;
                var T = p.merge
                  , P = p.objectEach
                  , O = p.pick;
                return p = function(i) {
                    function c() {
                        var o = null !== i && i.apply(this, arguments) || this;
                        return o.data = void 0,
                        o.options = void 0,
                        o.points = void 0,
                        o
                    }
                    return C(c, i),
                    c.prototype.drawGraph = function() {
                        this.areaPath = [],
                        i.prototype.drawGraph.apply(this);
                        var o = this
                          , s = this.areaPath
                          , p = this.options
                          , C = [["area", "highcharts-area", this.color, p.fillColor]];
                        this.zones.forEach((function(i, s) {
                            C.push(["zone-area-" + s, "highcharts-area highcharts-zone-area-" + s + " " + i.className, i.color || o.color, i.fillColor || p.fillColor])
                        }
                        )),
                        C.forEach((function(i) {
                            var C = i[0]
                              , M = o[C]
                              , T = M ? "animate" : "attr"
                              , P = {};
                            M ? (M.endX = o.preventGraphAnimation ? null : s.xMap,
                            M.animate({
                                d: s
                            })) : (P.zIndex = 0,
                            (M = o[C] = o.chart.renderer.path(s).addClass(i[1]).add(o.group)).isArea = !0),
                            o.chart.styledMode || (P.fill = O(i[3], S(i[2]).setOpacity(O(p.fillOpacity, .75)).get())),
                            M[T](P),
                            M.startX = s.xMap,
                            M.shiftUnit = p.step ? 2 : 1
                        }
                        ))
                    }
                    ,
                    c.prototype.getGraphPath = function(i) {
                        var o, s = M.prototype.getGraphPath, p = this.options, C = p.stacking, S = this.yAxis, T = [], P = [], D = this.index, j = S.stacking.stacks[this.stackKey], R = p.threshold, X = Math.round(S.getThreshold(p.threshold));
                        p = O(p.connectNulls, "percent" === C);
                        var b = function(o, s, p) {
                            var M = i[o];
                            o = C && j[M.x].points[D];
                            var O = M[p + "Null"] || 0;
                            if (p = M[p + "Cliff"] || 0,
                            M = !0,
                            p || O) {
                                var Y = (O ? o[0] : o[1]) + p
                                  , F = o[0] + p;
                                M = !!O
                            } else
                                !C && i[s] && i[s].isNull && (Y = F = R);
                            void 0 !== Y && (P.push({
                                plotX: _,
                                plotY: null === Y ? X : S.getThreshold(Y),
                                isNull: M,
                                isCliff: !0
                            }),
                            T.push({
                                plotX: _,
                                plotY: null === F ? X : S.getThreshold(F),
                                doCurve: !1
                            }))
                        };
                        for (i = i || this.points,
                        C && (i = this.getStackPoints(i)),
                        o = 0; o < i.length; o++) {
                            C || (i[o].leftCliff = i[o].rightCliff = i[o].leftNull = i[o].rightNull = void 0);
                            var Y = i[o].isNull
                              , _ = O(i[o].rectPlotX, i[o].plotX)
                              , F = C ? O(i[o].yBottom, X) : X;
                            Y && !p || (p || b(o, o - 1, "left"),
                            Y && !C && p || (P.push(i[o]),
                            T.push({
                                x: o,
                                plotX: _,
                                plotY: F
                            })),
                            p || b(o, o + 1, "right"))
                        }
                        return o = s.call(this, P, !0, !0),
                        T.reversed = !0,
                        (F = (Y = s.call(this, T, !0, !0))[0]) && "M" === F[0] && (Y[0] = ["L", F[1], F[2]]),
                        (Y = o.concat(Y)).length && Y.push(["Z"]),
                        s = s.call(this, P, !1, p),
                        Y.xMap = o.xMap,
                        this.areaPath = Y,
                        s
                    }
                    ,
                    c.prototype.getStackPoints = function(i) {
                        var o = this
                          , s = []
                          , p = []
                          , C = this.xAxis
                          , S = this.yAxis
                          , M = S.stacking.stacks[this.stackKey]
                          , T = {}
                          , D = S.series
                          , j = D.length
                          , R = S.options.reversedStacks ? 1 : -1
                          , X = D.indexOf(o);
                        if (i = i || this.points,
                        this.options.stacking) {
                            for (var Y = 0; Y < i.length; Y++)
                                i[Y].leftNull = i[Y].rightNull = void 0,
                                T[i[Y].x] = i[Y];
                            P(M, (function(i, o) {
                                null !== i.total && p.push(o)
                            }
                            )),
                            p.sort((function(i, o) {
                                return i - o
                            }
                            ));
                            var _ = D.map((function(i) {
                                return i.visible
                            }
                            ));
                            p.forEach((function(i, P) {
                                var Y, F, U = 0;
                                if (T[i] && !T[i].isNull)
                                    s.push(T[i]),
                                    [-1, 1].forEach((function(s) {
                                        var C = 1 === s ? "rightNull" : "leftNull"
                                          , S = 0
                                          , O = M[p[P + s]];
                                        if (O)
                                            for (var U = X; 0 <= U && U < j; ) {
                                                var V = D[U].index;
                                                (Y = O.points[V]) || (V === o.index ? T[i][C] = !0 : _[U] && (F = M[i].points[V]) && (S -= F[1] - F[0])),
                                                U += R
                                            }
                                        T[i][1 === s ? "rightCliff" : "leftCliff"] = S
                                    }
                                    ));
                                else {
                                    for (var V = X; 0 <= V && V < j; ) {
                                        if (Y = M[i].points[D[V].index]) {
                                            U = Y[1];
                                            break
                                        }
                                        V += R
                                    }
                                    U = O(U, 0),
                                    U = S.translate(U, 0, 1, 0, 1),
                                    s.push({
                                        isNull: !0,
                                        plotX: C.translate(i, 0, 0, 0, 1),
                                        x: i,
                                        plotY: U,
                                        yBottom: U
                                    })
                                }
                            }
                            ))
                        }
                        return s
                    }
                    ,
                    c.defaultOptions = T(M.defaultOptions, {
                        threshold: 0
                    }),
                    c
                }(M),
                i(p.prototype, {
                    singleStacks: !1,
                    drawLegendSymbol: o.drawRectangle
                }),
                s.registerSeriesType("area", p),
                p
            }
            )),
            L(o, "Series/Spline/SplineSeries.js", [o["Core/Series/SeriesRegistry.js"], o["Core/Utilities.js"]], (function(i, o) {
                var s = this && this.__extends || function() {
                    var a = function(i, o) {
                        return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        )(i, o)
                    };
                    return function(i, o) {
                        function h() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (h.prototype = o.prototype,
                        new h)
                    }
                }()
                  , p = i.seriesTypes.line
                  , C = o.merge
                  , S = o.pick;
                return o = function(i) {
                    function u() {
                        var o = null !== i && i.apply(this, arguments) || this;
                        return o.data = void 0,
                        o.options = void 0,
                        o.points = void 0,
                        o
                    }
                    return s(u, i),
                    u.prototype.getPointSpline = function(i, o, s) {
                        var p = o.plotX || 0
                          , C = o.plotY || 0
                          , M = i[s - 1];
                        if (s = i[s + 1],
                        M && !M.isNull && !1 !== M.doCurve && !o.isCliff && s && !s.isNull && !1 !== s.doCurve && !o.isCliff) {
                            i = M.plotY || 0;
                            var T = s.plotX || 0;
                            s = s.plotY || 0;
                            var P = 0
                              , O = (1.5 * p + (M.plotX || 0)) / 2.5
                              , D = (1.5 * C + i) / 2.5
                              , j = (1.5 * C + s) / 2.5;
                            (T = (1.5 * p + T) / 2.5) !== O && (P = (j - D) * (T - p) / (T - O) + C - j),
                            j += P,
                            (D += P) > i && D > C ? j = 2 * C - (D = Math.max(i, C)) : D < i && D < C && (j = 2 * C - (D = Math.min(i, C))),
                            j > s && j > C ? D = 2 * C - (j = Math.max(s, C)) : j < s && j < C && (D = 2 * C - (j = Math.min(s, C))),
                            o.rightContX = T,
                            o.rightContY = j
                        }
                        return o = ["C", S(M.rightContX, M.plotX, 0), S(M.rightContY, M.plotY, 0), S(O, p, 0), S(D, C, 0), p, C],
                        M.rightContX = M.rightContY = void 0,
                        o
                    }
                    ,
                    u.defaultOptions = C(p.defaultOptions),
                    u
                }(p),
                i.registerSeriesType("spline", o),
                o
            }
            )),
            L(o, "Series/AreaSpline/AreaSplineSeries.js", [o["Series/Area/AreaSeries.js"], o["Series/Spline/SplineSeries.js"], o["Mixins/LegendSymbol.js"], o["Core/Series/SeriesRegistry.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C) {
                var S = this && this.__extends || function() {
                    var a = function(i, o) {
                        return a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        ,
                        a(i, o)
                    };
                    return function(i, o) {
                        function e() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype,
                        new e)
                    }
                }()
                  , M = i.prototype
                  , T = C.extend
                  , P = C.merge;
                return C = function(s) {
                    function f() {
                        var i = null !== s && s.apply(this, arguments) || this;
                        return i.data = void 0,
                        i.points = void 0,
                        i.options = void 0,
                        i
                    }
                    return S(f, s),
                    f.defaultOptions = P(o.defaultOptions, i.defaultOptions),
                    f
                }(o),
                T(C.prototype, {
                    getGraphPath: M.getGraphPath,
                    getStackPoints: M.getStackPoints,
                    drawGraph: M.drawGraph,
                    drawLegendSymbol: s.drawRectangle
                }),
                p.registerSeriesType("areaspline", C),
                C
            }
            )),
            L(o, "Series/Column/ColumnSeries.js", [o["Core/Animation/AnimationUtilities.js"], o["Core/Color/Color.js"], o["Core/Globals.js"], o["Mixins/LegendSymbol.js"], o["Core/Color/Palette.js"], o["Core/Series/Series.js"], o["Core/Series/SeriesRegistry.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C, S, M, T) {
                var P = this && this.__extends || function() {
                    var a = function(i, o) {
                        return a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        ,
                        a(i, o)
                    };
                    return function(i, o) {
                        function c() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (c.prototype = o.prototype,
                        new c)
                    }
                }()
                  , O = i.animObject
                  , D = o.parse
                  , j = s.hasTouch;
                i = s.noop;
                var R = T.clamp
                  , X = T.css
                  , Y = T.defined
                  , _ = T.extend
                  , F = T.fireEvent
                  , U = T.isArray
                  , V = T.isNumber
                  , Z = T.merge
                  , $ = T.pick
                  , Q = T.objectEach;
                return T = function(i) {
                    function d() {
                        var o = null !== i && i.apply(this, arguments) || this;
                        return o.borderWidth = void 0,
                        o.data = void 0,
                        o.group = void 0,
                        o.options = void 0,
                        o.points = void 0,
                        o
                    }
                    return P(d, i),
                    d.prototype.animate = function(i) {
                        var o = this
                          , s = this.yAxis
                          , p = o.options
                          , C = this.chart.inverted
                          , S = {}
                          , M = C ? "translateX" : "translateY";
                        if (i)
                            S.scaleY = .001,
                            i = R(s.toPixels(p.threshold), s.pos, s.pos + s.len),
                            C ? S.translateX = i - s.len : S.translateY = i,
                            o.clipBox && o.setClip(),
                            o.group.attr(S);
                        else {
                            var T = Number(o.group.attr(M));
                            o.group.animate({
                                scaleY: 1
                            }, _(O(o.options.animation), {
                                step: function(i, p) {
                                    o.group && (S[M] = T + p.pos * (s.pos - T),
                                    o.group.attr(S))
                                }
                            }))
                        }
                    }
                    ,
                    d.prototype.init = function(o, s) {
                        i.prototype.init.apply(this, arguments);
                        var p = this;
                        (o = p.chart).hasRendered && o.series.forEach((function(i) {
                            i.type === p.type && (i.isDirty = !0)
                        }
                        ))
                    }
                    ,
                    d.prototype.getColumnMetrics = function() {
                        var i = this
                          , o = i.options
                          , s = i.xAxis
                          , p = i.yAxis
                          , C = s.options.reversedStacks;
                        C = s.reversed && !C || !s.reversed && C;
                        var S, M = {}, T = 0;
                        !1 === o.grouping ? T = 1 : i.chart.series.forEach((function(o) {
                            var s = o.yAxis
                              , C = o.options;
                            if (o.type === i.type && (o.visible || !i.chart.options.chart.ignoreHiddenSeries) && p.len === s.len && p.pos === s.pos) {
                                if (C.stacking && "group" !== C.stacking) {
                                    S = o.stackKey,
                                    void 0 === M[S] && (M[S] = T++);
                                    var P = M[S]
                                } else
                                    !1 !== C.grouping && (P = T++);
                                o.columnIndex = P
                            }
                        }
                        ));
                        var P = Math.min(Math.abs(s.transA) * (s.ordinal && s.ordinal.slope || o.pointRange || s.closestPointRange || s.tickInterval || 1), s.len)
                          , O = P * o.groupPadding
                          , D = (P - 2 * O) / (T || 1);
                        return o = Math.min(o.maxPointWidth || s.len, $(o.pointWidth, D * (1 - 2 * o.pointPadding))),
                        i.columnMetrics = {
                            width: o,
                            offset: (D - o) / 2 + (O + ((i.columnIndex || 0) + (C ? 1 : 0)) * D - P / 2) * (C ? -1 : 1),
                            paddedWidth: D,
                            columnCount: T
                        },
                        i.columnMetrics
                    }
                    ,
                    d.prototype.crispCol = function(i, o, s, p) {
                        var C = this.chart
                          , S = this.borderWidth
                          , M = -(S % 2 ? .5 : 0);
                        return S = S % 2 ? .5 : 1,
                        C.inverted && C.renderer.isVML && (S += 1),
                        this.options.crisp && (s = Math.round(i + s) + M,
                        s -= i = Math.round(i) + M),
                        p = Math.round(o + p) + S,
                        M = .5 >= Math.abs(o) && .5 < p,
                        p -= o = Math.round(o) + S,
                        M && p && (--o,
                        p += 1),
                        {
                            x: i,
                            y: o,
                            width: s,
                            height: p
                        }
                    }
                    ,
                    d.prototype.adjustForMissingColumns = function(i, o, s, p) {
                        var C = this
                          , S = this.options.stacking;
                        if (!s.isNull && 1 < p.columnCount) {
                            var M = 0
                              , T = 0;
                            Q(this.yAxis.stacking && this.yAxis.stacking.stacks, (function(i) {
                                if ("number" == typeof s.x && (i = i[s.x.toString()])) {
                                    var o = i.points[C.index]
                                      , p = i.total;
                                    S ? (o && (M = T),
                                    i.hasValidPoints && T++) : U(o) && (M = o[1],
                                    T = p || 0)
                                }
                            }
                            )),
                            i = (s.plotX || 0) + ((T - 1) * p.paddedWidth + o) / 2 - o - M * p.paddedWidth
                        }
                        return i
                    }
                    ,
                    d.prototype.translate = function() {
                        var i = this
                          , o = i.chart
                          , s = i.options
                          , p = i.dense = 2 > i.closestPointRange * i.xAxis.transA;
                        p = i.borderWidth = $(s.borderWidth, p ? 0 : 1);
                        var C = i.xAxis
                          , M = i.yAxis
                          , T = s.threshold
                          , P = i.translatedThreshold = M.getThreshold(T)
                          , O = $(s.minPointLength, 5)
                          , D = i.getColumnMetrics()
                          , j = D.width
                          , X = i.barW = Math.max(j, 1 + 2 * p)
                          , _ = i.pointXOffset = D.offset
                          , F = i.dataMin
                          , U = i.dataMax;
                        o.inverted && (P -= .5),
                        s.pointPadding && (X = Math.ceil(X)),
                        S.prototype.translate.apply(i),
                        i.points.forEach((function(p) {
                            var S = $(p.yBottom, P)
                              , Z = 999 + Math.abs(S)
                              , Q = j
                              , tt = p.plotX || 0;
                            Z = R(p.plotY, -Z, M.len + Z),
                            tt += _;
                            var et = X
                              , it = Math.min(Z, S)
                              , ot = Math.max(Z, S) - it;
                            if (O && Math.abs(ot) < O) {
                                ot = O;
                                var st = !M.reversed && !p.negative || M.reversed && p.negative;
                                V(T) && V(U) && p.y === T && U <= T && (M.min || 0) < T && (F !== U || (M.max || 0) <= T) && (st = !st),
                                it = Math.abs(it - P) > O ? S - O : P - (st ? O : 0)
                            }
                            Y(p.options.pointWidth) && (Q = et = Math.ceil(p.options.pointWidth),
                            tt -= Math.round((Q - j) / 2)),
                            s.centerInCategory && (tt = i.adjustForMissingColumns(tt, Q, p, D)),
                            p.barX = tt,
                            p.pointWidth = Q,
                            p.tooltipPos = o.inverted ? [R(M.len + M.pos - o.plotLeft - Z, M.pos - o.plotLeft, M.len + M.pos - o.plotLeft), C.len + C.pos - o.plotTop - tt - et / 2, ot] : [C.left - o.plotLeft + tt + et / 2, R(Z + M.pos - o.plotTop, M.pos - o.plotTop, M.len + M.pos - o.plotTop), ot],
                            p.shapeType = i.pointClass.prototype.shapeType || "rect",
                            p.shapeArgs = i.crispCol.apply(i, p.isNull ? [tt, P, et, 0] : [tt, it, et, ot])
                        }
                        ))
                    }
                    ,
                    d.prototype.drawGraph = function() {
                        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
                    }
                    ,
                    d.prototype.pointAttribs = function(i, o) {
                        var s = this.options
                          , p = this.pointAttrToOptions || {}
                          , C = p.stroke || "borderColor"
                          , S = p["stroke-width"] || "borderWidth"
                          , M = i && i.color || this.color
                          , T = i && i[C] || s[C] || M
                          , P = i && i[S] || s[S] || this[S] || 0;
                        p = i && i.options.dashStyle || s.dashStyle;
                        var O = $(i && i.opacity, s.opacity, 1);
                        if (i && this.zones.length) {
                            var j = i.getZone();
                            M = i.options.color || j && (j.color || i.nonZonedColor) || this.color,
                            j && (T = j.borderColor || T,
                            p = j.dashStyle || p,
                            P = j.borderWidth || P)
                        }
                        return o && i && (o = (i = Z(s.states[o], i.options.states && i.options.states[o] || {})).brightness,
                        M = i.color || void 0 !== o && D(M).brighten(i.brightness).get() || M,
                        T = i[C] || T,
                        P = i[S] || P,
                        p = i.dashStyle || p,
                        O = $(i.opacity, O)),
                        C = {
                            fill: M,
                            stroke: T,
                            "stroke-width": P,
                            opacity: O
                        },
                        p && (C.dashstyle = p),
                        C
                    }
                    ,
                    d.prototype.drawPoints = function() {
                        var i, o = this, s = this.chart, p = o.options, C = s.renderer, S = p.animationLimit || 250;
                        o.points.forEach((function(M) {
                            var T = M.graphic
                              , P = !!T
                              , O = T && s.pointCount < S ? "animate" : "attr";
                            V(M.plotY) && null !== M.y ? (i = M.shapeArgs,
                            T && M.hasNewShapeType() && (T = T.destroy()),
                            o.enabledDataSorting && (M.startXPos = o.xAxis.reversed ? -(i && i.width || 0) : o.xAxis.width),
                            T || (M.graphic = T = C[M.shapeType](i).add(M.group || o.group)) && o.enabledDataSorting && s.hasRendered && s.pointCount < S && (T.attr({
                                x: M.startXPos
                            }),
                            P = !0,
                            O = "animate"),
                            T && P && T[O](Z(i)),
                            p.borderRadius && T[O]({
                                r: p.borderRadius
                            }),
                            s.styledMode || T[O](o.pointAttribs(M, M.selected && "select")).shadow(!1 !== M.allowShadow && p.shadow, null, p.stacking && !p.borderRadius),
                            T && (T.addClass(M.getClassName(), !0),
                            T.attr({
                                visibility: M.visible ? "inherit" : "hidden"
                            }))) : T && (M.graphic = T.destroy())
                        }
                        ))
                    }
                    ,
                    d.prototype.drawTracker = function() {
                        var i, o = this, s = o.chart, p = s.pointer, f = function(i) {
                            var o = p.getPointFromEvent(i);
                            void 0 !== o && (p.isDirectTouch = !0,
                            o.onMouseOver(i))
                        };
                        o.points.forEach((function(o) {
                            i = U(o.dataLabels) ? o.dataLabels : o.dataLabel ? [o.dataLabel] : [],
                            o.graphic && (o.graphic.element.point = o),
                            i.forEach((function(i) {
                                i.div ? i.div.point = o : i.element.point = o
                            }
                            ))
                        }
                        )),
                        o._hasTracking || (o.trackerGroups.forEach((function(i) {
                            o[i] && (o[i].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", (function(i) {
                                p.onTrackerMouseOut(i)
                            }
                            )),
                            j && o[i].on("touchstart", f),
                            !s.styledMode && o.options.cursor && o[i].css(X).css({
                                cursor: o.options.cursor
                            }))
                        }
                        )),
                        o._hasTracking = !0),
                        F(this, "afterDrawTracker")
                    }
                    ,
                    d.prototype.remove = function() {
                        var i = this
                          , o = i.chart;
                        o.hasRendered && o.series.forEach((function(o) {
                            o.type === i.type && (o.isDirty = !0)
                        }
                        )),
                        S.prototype.remove.apply(i, arguments)
                    }
                    ,
                    d.defaultOptions = Z(S.defaultOptions, {
                        borderRadius: 0,
                        centerInCategory: !1,
                        groupPadding: .2,
                        marker: null,
                        pointPadding: .1,
                        minPointLength: 0,
                        cropThreshold: 50,
                        pointRange: null,
                        states: {
                            hover: {
                                halo: !1,
                                brightness: .1
                            },
                            select: {
                                color: C.neutralColor20,
                                borderColor: C.neutralColor100
                            }
                        },
                        dataLabels: {
                            align: void 0,
                            verticalAlign: void 0,
                            y: void 0
                        },
                        startFromThreshold: !0,
                        stickyTracking: !1,
                        tooltip: {
                            distance: 6
                        },
                        threshold: 0,
                        borderColor: C.backgroundColor
                    }),
                    d
                }(S),
                _(T.prototype, {
                    cropShoulder: 0,
                    directTouch: !0,
                    drawLegendSymbol: p.drawRectangle,
                    getSymbol: i,
                    negStacks: !0,
                    trackerGroups: ["group", "dataLabelsGroup"]
                }),
                M.registerSeriesType("column", T),
                T
            }
            )),
            L(o, "Series/Bar/BarSeries.js", [o["Series/Column/ColumnSeries.js"], o["Core/Series/SeriesRegistry.js"], o["Core/Utilities.js"]], (function(i, o, s) {
                var p = this && this.__extends || function() {
                    var a = function(i, o) {
                        return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        )(i, o)
                    };
                    return function(i, o) {
                        function h() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (h.prototype = o.prototype,
                        new h)
                    }
                }()
                  , C = s.extend
                  , S = s.merge;
                return s = function(o) {
                    function x() {
                        var i = null !== o && o.apply(this, arguments) || this;
                        return i.data = void 0,
                        i.options = void 0,
                        i.points = void 0,
                        i
                    }
                    return p(x, o),
                    x.defaultOptions = S(i.defaultOptions, {}),
                    x
                }(i),
                C(s.prototype, {
                    inverted: !0
                }),
                o.registerSeriesType("bar", s),
                s
            }
            )),
            L(o, "Series/Scatter/ScatterSeries.js", [o["Series/Column/ColumnSeries.js"], o["Series/Line/LineSeries.js"], o["Core/Series/SeriesRegistry.js"], o["Core/Utilities.js"]], (function(i, o, s, p) {
                var C = this && this.__extends || function() {
                    var a = function(i, o) {
                        return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        )(i, o)
                    };
                    return function(i, o) {
                        function c() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (c.prototype = o.prototype,
                        new c)
                    }
                }()
                  , S = p.addEvent
                  , M = p.extend
                  , T = p.merge;
                return p = function(i) {
                    function h() {
                        var o = null !== i && i.apply(this, arguments) || this;
                        return o.data = void 0,
                        o.options = void 0,
                        o.points = void 0,
                        o
                    }
                    return C(h, i),
                    h.prototype.applyJitter = function() {
                        var i = this
                          , o = this.options.jitter
                          , s = this.points.length;
                        o && this.points.forEach((function(p, C) {
                            ["x", "y"].forEach((function(S, M) {
                                var T = "plot" + S.toUpperCase();
                                if (o[S] && !p.isNull) {
                                    var P = i[S + "Axis"]
                                      , O = o[S] * P.transA;
                                    if (P && !P.isLog) {
                                        var D = Math.max(0, p[T] - O);
                                        P = Math.min(P.len, p[T] + O),
                                        M = 1e4 * Math.sin(C + M * s),
                                        p[T] = D + (P - D) * (M - Math.floor(M)),
                                        "x" === S && (p.clientX = p.plotX)
                                    }
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    h.prototype.drawGraph = function() {
                        this.options.lineWidth ? i.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy())
                    }
                    ,
                    h.defaultOptions = T(o.defaultOptions, {
                        lineWidth: 0,
                        findNearestPointBy: "xy",
                        jitter: {
                            x: 0,
                            y: 0
                        },
                        marker: {
                            enabled: !0
                        },
                        tooltip: {
                            headerFormat: '<span style="color:{point.color}">â—</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                        }
                    }),
                    h
                }(o),
                M(p.prototype, {
                    drawTracker: i.prototype.drawTracker,
                    sorted: !1,
                    requireSorting: !1,
                    noSharedTooltip: !0,
                    trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
                    takeOrdinalPosition: !1
                }),
                S(p, "afterTranslate", (function() {
                    this.applyJitter()
                }
                )),
                s.registerSeriesType("scatter", p),
                p
            }
            )),
            L(o, "Mixins/CenteredSeries.js", [o["Core/Globals.js"], o["Core/Series/Series.js"], o["Core/Utilities.js"]], (function(i, o, s) {
                var p = s.isNumber
                  , C = s.pick
                  , S = s.relativeLength
                  , M = i.deg2rad;
                return i.CenteredSeriesMixin = {
                    getCenter: function() {
                        var i = this.options
                          , s = this.chart
                          , p = 2 * (i.slicedOffset || 0)
                          , M = s.plotWidth - 2 * p
                          , T = s.plotHeight - 2 * p
                          , P = i.center
                          , O = Math.min(M, T)
                          , D = i.size
                          , j = i.innerSize || 0;
                        for ("string" == typeof D && (D = parseFloat(D)),
                        "string" == typeof j && (j = parseFloat(j)),
                        i = [C(P[0], "50%"), C(P[1], "50%"), C(D && 0 > D ? void 0 : i.size, "100%"), C(j && 0 > j ? void 0 : i.innerSize || 0, "0%")],
                        !s.angular || this instanceof o || (i[3] = 0),
                        P = 0; 4 > P; ++P)
                            D = i[P],
                            s = 2 > P || 2 === P && /%$/.test(D),
                            i[P] = S(D, [M, T, O, i[2]][P]) + (s ? p : 0);
                        return i[3] > i[2] && (i[3] = i[2]),
                        i
                    },
                    getStartAndEndRadians: function(i, o) {
                        return i = p(i) ? i : 0,
                        o = p(o) && o > i && 360 > o - i ? o : i + 360,
                        {
                            start: M * (i + -90),
                            end: M * (o + -90)
                        }
                    }
                }
            }
            )),
            L(o, "Series/Pie/PiePoint.js", [o["Core/Animation/AnimationUtilities.js"], o["Core/Series/Point.js"], o["Core/Utilities.js"]], (function(i, o, s) {
                var p = this && this.__extends || function() {
                    var a = function(i, o) {
                        return a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        ,
                        a(i, o)
                    };
                    return function(i, o) {
                        function f() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (f.prototype = o.prototype,
                        new f)
                    }
                }()
                  , C = i.setAnimation
                  , S = s.addEvent
                  , M = s.defined;
                i = s.extend;
                var T = s.isNumber
                  , P = s.pick
                  , O = s.relativeLength;
                return s = function(i) {
                    function c() {
                        var o = null !== i && i.apply(this, arguments) || this;
                        return o.labelDistance = void 0,
                        o.options = void 0,
                        o.series = void 0,
                        o
                    }
                    return p(c, i),
                    c.prototype.getConnectorPath = function() {
                        var i = this.labelPosition
                          , o = this.series.options.dataLabels
                          , s = o.connectorShape
                          , p = this.connectorShapes;
                        return p[s] && (s = p[s]),
                        s.call(this, {
                            x: i.final.x,
                            y: i.final.y,
                            alignment: i.alignment
                        }, i.connectorPosition, o)
                    }
                    ,
                    c.prototype.getTranslate = function() {
                        return this.sliced ? this.slicedTranslation : {
                            translateX: 0,
                            translateY: 0
                        }
                    }
                    ,
                    c.prototype.haloPath = function(i) {
                        var o = this.shapeArgs;
                        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(o.x, o.y, o.r + i, o.r + i, {
                            innerR: o.r - 1,
                            start: o.start,
                            end: o.end
                        })
                    }
                    ,
                    c.prototype.init = function() {
                        o.prototype.init.apply(this, arguments);
                        var i = this;
                        i.name = P(i.name, "Slice");
                        var c = function(o) {
                            i.slice("select" === o.type)
                        };
                        return S(i, "select", c),
                        S(i, "unselect", c),
                        i
                    }
                    ,
                    c.prototype.isValid = function() {
                        return T(this.y) && 0 <= this.y
                    }
                    ,
                    c.prototype.setVisible = function(i, o) {
                        var s = this
                          , p = s.series
                          , C = p.chart
                          , S = p.options.ignoreHiddenPoint;
                        o = P(o, S),
                        i !== s.visible && (s.visible = s.options.visible = i = void 0 === i ? !s.visible : i,
                        p.options.data[p.data.indexOf(s)] = s.options,
                        ["graphic", "dataLabel", "connector", "shadowGroup"].forEach((function(o) {
                            s[o] && s[o][i ? "show" : "hide"](i)
                        }
                        )),
                        s.legendItem && C.legend.colorizeItem(s, i),
                        i || "hover" !== s.state || s.setState(""),
                        S && (p.isDirty = !0),
                        o && C.redraw())
                    }
                    ,
                    c.prototype.slice = function(i, o, s) {
                        var p = this.series;
                        C(s, p.chart),
                        P(o, !0),
                        this.sliced = this.options.sliced = M(i) ? i : !this.sliced,
                        p.options.data[p.data.indexOf(this)] = this.options,
                        this.graphic && this.graphic.animate(this.getTranslate()),
                        this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                    }
                    ,
                    c
                }(o),
                i(s.prototype, {
                    connectorShapes: {
                        fixedOffset: function(i, o, s) {
                            var p = o.breakAt;
                            return o = o.touchingSliceAt,
                            [["M", i.x, i.y], s.softConnector ? ["C", i.x + ("left" === i.alignment ? -5 : 5), i.y, 2 * p.x - o.x, 2 * p.y - o.y, p.x, p.y] : ["L", p.x, p.y], ["L", o.x, o.y]]
                        },
                        straight: function(i, o) {
                            return o = o.touchingSliceAt,
                            [["M", i.x, i.y], ["L", o.x, o.y]]
                        },
                        crookedLine: function(i, o, s) {
                            o = o.touchingSliceAt;
                            var p = this.series
                              , C = p.center[0]
                              , S = p.chart.plotWidth
                              , M = p.chart.plotLeft;
                            p = i.alignment;
                            var T = this.shapeArgs.r;
                            return s = O(s.crookDistance, 1),
                            s = ["L", S = "left" === p ? C + T + (S + M - C - T) * (1 - s) : M + (C - T) * s, i.y],
                            C = !0,
                            ("left" === p ? S > i.x || S < o.x : S < i.x || S > o.x) && (C = !1),
                            i = [["M", i.x, i.y]],
                            C && i.push(s),
                            i.push(["L", o.x, o.y]),
                            i
                        }
                    }
                }),
                s
            }
            )),
            L(o, "Series/Pie/PieSeries.js", [o["Mixins/CenteredSeries.js"], o["Series/Column/ColumnSeries.js"], o["Core/Globals.js"], o["Mixins/LegendSymbol.js"], o["Core/Color/Palette.js"], o["Series/Pie/PiePoint.js"], o["Core/Series/Series.js"], o["Core/Series/SeriesRegistry.js"], o["Core/Renderer/SVG/Symbols.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C, S, M, T, P, O) {
                var D = this && this.__extends || function() {
                    var a = function(i, o) {
                        return a = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(i, o) {
                            i.__proto__ = o
                        }
                        || function(i, o) {
                            for (var s in o)
                                o.hasOwnProperty(s) && (i[s] = o[s])
                        }
                        ,
                        a(i, o)
                    };
                    return function(i, o) {
                        function f() {
                            this.constructor = i
                        }
                        a(i, o),
                        i.prototype = null === o ? Object.create(o) : (f.prototype = o.prototype,
                        new f)
                    }
                }()
                  , j = i.getStartAndEndRadians;
                s = s.noop;
                var R = O.clamp
                  , X = O.extend
                  , Y = O.fireEvent
                  , _ = O.merge
                  , F = O.pick
                  , U = O.relativeLength;
                return O = function(i) {
                    function h() {
                        var o = null !== i && i.apply(this, arguments) || this;
                        return o.center = void 0,
                        o.data = void 0,
                        o.maxLabelDistance = void 0,
                        o.options = void 0,
                        o.points = void 0,
                        o
                    }
                    return D(h, i),
                    h.prototype.animate = function(i) {
                        var o = this
                          , s = o.points
                          , p = o.startAngleRad;
                        i || s.forEach((function(i) {
                            var s = i.graphic
                              , C = i.shapeArgs;
                            s && C && (s.attr({
                                r: F(i.startR, o.center && o.center[3] / 2),
                                start: p,
                                end: p
                            }),
                            s.animate({
                                r: C.r,
                                start: C.start,
                                end: C.end
                            }, o.options.animation))
                        }
                        ))
                    }
                    ,
                    h.prototype.drawEmpty = function() {
                        var i = this.startAngleRad
                          , o = this.endAngleRad
                          , s = this.options;
                        if (0 === this.total && this.center) {
                            var p = this.center[0]
                              , S = this.center[1];
                            this.graph || (this.graph = this.chart.renderer.arc(p, S, this.center[1] / 2, 0, i, o).addClass("highcharts-empty-series").add(this.group)),
                            this.graph.attr({
                                d: P.arc(p, S, this.center[2] / 2, 0, {
                                    start: i,
                                    end: o,
                                    innerR: this.center[3] / 2
                                })
                            }),
                            this.chart.styledMode || this.graph.attr({
                                "stroke-width": s.borderWidth,
                                fill: s.fillColor || "none",
                                stroke: s.color || C.neutralColor20
                            })
                        } else
                            this.graph && (this.graph = this.graph.destroy())
                    }
                    ,
                    h.prototype.drawPoints = function() {
                        var i = this.chart.renderer;
                        this.points.forEach((function(o) {
                            o.graphic && o.hasNewShapeType() && (o.graphic = o.graphic.destroy()),
                            o.graphic || (o.graphic = i[o.shapeType](o.shapeArgs).add(o.series.group),
                            o.delayedRendering = !0)
                        }
                        ))
                    }
                    ,
                    h.prototype.generatePoints = function() {
                        i.prototype.generatePoints.call(this),
                        this.updateTotals()
                    }
                    ,
                    h.prototype.getX = function(i, o, s) {
                        var p = this.center
                          , C = this.radii ? this.radii[s.index] || 0 : p[2] / 2;
                        return i = Math.asin(R((i - p[1]) / (C + s.labelDistance), -1, 1)),
                        p[0] + (o ? -1 : 1) * Math.cos(i) * (C + s.labelDistance) + (0 < s.labelDistance ? (o ? -1 : 1) * this.options.dataLabels.padding : 0)
                    }
                    ,
                    h.prototype.hasData = function() {
                        return !!this.processedXData.length
                    }
                    ,
                    h.prototype.redrawPoints = function() {
                        var i, o, s, p, C = this, S = C.chart, M = S.renderer, T = C.options.shadow;
                        this.drawEmpty(),
                        !T || C.shadowGroup || S.styledMode || (C.shadowGroup = M.g("shadow").attr({
                            zIndex: -1
                        }).add(C.group)),
                        C.points.forEach((function(P) {
                            var O = {};
                            if (o = P.graphic,
                            !P.isNull && o) {
                                var D = void 0;
                                p = P.shapeArgs,
                                i = P.getTranslate(),
                                S.styledMode || (D = P.shadowGroup,
                                T && !D && (D = P.shadowGroup = M.g("shadow").add(C.shadowGroup)),
                                D && D.attr(i),
                                s = C.pointAttribs(P, P.selected && "select")),
                                P.delayedRendering ? (o.setRadialReference(C.center).attr(p).attr(i),
                                S.styledMode || o.attr(s).attr({
                                    "stroke-linejoin": "round"
                                }).shadow(T, D),
                                P.delayedRendering = !1) : (o.setRadialReference(C.center),
                                S.styledMode || _(!0, O, s),
                                _(!0, O, p, i),
                                o.animate(O)),
                                o.attr({
                                    visibility: P.visible ? "inherit" : "hidden"
                                }),
                                o.addClass(P.getClassName(), !0)
                            } else
                                o && (P.graphic = o.destroy())
                        }
                        ))
                    }
                    ,
                    h.prototype.sortByAngle = function(i, o) {
                        i.sort((function(i, s) {
                            return void 0 !== i.angle && (s.angle - i.angle) * o
                        }
                        ))
                    }
                    ,
                    h.prototype.translate = function(i) {
                        this.generatePoints();
                        var o = 0
                          , s = this.options
                          , p = s.slicedOffset
                          , C = p + (s.borderWidth || 0)
                          , S = j(s.startAngle, s.endAngle)
                          , M = this.startAngleRad = S.start;
                        S = (this.endAngleRad = S.end) - M;
                        var T = this.points
                          , P = s.dataLabels.distance;
                        s = s.ignoreHiddenPoint;
                        var O, D = T.length;
                        for (i || (this.center = i = this.getCenter()),
                        O = 0; O < D; O++) {
                            var R = T[O]
                              , X = M + o * S;
                            !R.isValid() || s && !R.visible || (o += R.percentage / 100);
                            var _ = M + o * S
                              , V = {
                                x: i[0],
                                y: i[1],
                                r: i[2] / 2,
                                innerR: i[3] / 2,
                                start: Math.round(1e3 * X) / 1e3,
                                end: Math.round(1e3 * _) / 1e3
                            };
                            R.shapeType = "arc",
                            R.shapeArgs = V,
                            R.labelDistance = F(R.options.dataLabels && R.options.dataLabels.distance, P),
                            R.labelDistance = U(R.labelDistance, V.r),
                            this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, R.labelDistance),
                            (_ = (_ + X) / 2) > 1.5 * Math.PI ? _ -= 2 * Math.PI : _ < -Math.PI / 2 && (_ += 2 * Math.PI),
                            R.slicedTranslation = {
                                translateX: Math.round(Math.cos(_) * p),
                                translateY: Math.round(Math.sin(_) * p)
                            },
                            V = Math.cos(_) * i[2] / 2;
                            var Z = Math.sin(_) * i[2] / 2;
                            R.tooltipPos = [i[0] + .7 * V, i[1] + .7 * Z],
                            R.half = _ < -Math.PI / 2 || _ > Math.PI / 2 ? 1 : 0,
                            R.angle = _,
                            X = Math.min(C, R.labelDistance / 5),
                            R.labelPosition = {
                                natural: {
                                    x: i[0] + V + Math.cos(_) * R.labelDistance,
                                    y: i[1] + Z + Math.sin(_) * R.labelDistance
                                },
                                final: {},
                                alignment: 0 > R.labelDistance ? "center" : R.half ? "right" : "left",
                                connectorPosition: {
                                    breakAt: {
                                        x: i[0] + V + Math.cos(_) * X,
                                        y: i[1] + Z + Math.sin(_) * X
                                    },
                                    touchingSliceAt: {
                                        x: i[0] + V,
                                        y: i[1] + Z
                                    }
                                }
                            }
                        }
                        Y(this, "afterTranslate")
                    }
                    ,
                    h.prototype.updateTotals = function() {
                        var i, o = 0, s = this.points, p = s.length, C = this.options.ignoreHiddenPoint;
                        for (i = 0; i < p; i++) {
                            var S = s[i];
                            !S.isValid() || C && !S.visible || (o += S.y)
                        }
                        for (this.total = o,
                        i = 0; i < p; i++)
                            (S = s[i]).percentage = 0 < o && (S.visible || !C) ? S.y / o * 100 : 0,
                            S.total = o
                    }
                    ,
                    h.defaultOptions = _(M.defaultOptions, {
                        center: [null, null],
                        clip: !1,
                        colorByPoint: !0,
                        dataLabels: {
                            allowOverlap: !0,
                            connectorPadding: 5,
                            connectorShape: "fixedOffset",
                            crookDistance: "70%",
                            distance: 30,
                            enabled: !0,
                            formatter: function() {
                                return this.point.isNull ? void 0 : this.point.name
                            },
                            softConnector: !0,
                            x: 0
                        },
                        fillColor: void 0,
                        ignoreHiddenPoint: !0,
                        inactiveOtherPoints: !0,
                        legendType: "point",
                        marker: null,
                        size: null,
                        showInLegend: !1,
                        slicedOffset: 10,
                        stickyTracking: !1,
                        tooltip: {
                            followPointer: !0
                        },
                        borderColor: C.backgroundColor,
                        borderWidth: 1,
                        lineWidth: void 0,
                        states: {
                            hover: {
                                brightness: .1
                            }
                        }
                    }),
                    h
                }(M),
                X(O.prototype, {
                    axisTypes: [],
                    directTouch: !0,
                    drawGraph: void 0,
                    drawLegendSymbol: p.drawRectangle,
                    drawTracker: o.prototype.drawTracker,
                    getCenter: i.getCenter,
                    getSymbol: s,
                    isCartesian: !1,
                    noSharedTooltip: !0,
                    pointAttribs: o.prototype.pointAttribs,
                    pointClass: S,
                    requireSorting: !1,
                    searchPoint: s,
                    trackerGroups: ["group", "dataLabelsGroup"]
                }),
                T.registerSeriesType("pie", O),
                O
            }
            )),
            L(o, "Core/Series/DataLabels.js", [o["Core/Animation/AnimationUtilities.js"], o["Core/FormatUtilities.js"], o["Core/Globals.js"], o["Core/Color/Palette.js"], o["Core/Series/Series.js"], o["Core/Series/SeriesRegistry.js"], o["Core/Utilities.js"]], (function(i, o, s, p, C, S, M) {
                var T = i.getDeferredAnimation
                  , P = o.format;
                i = s.noop,
                S = S.seriesTypes;
                var O = M.arrayMax
                  , D = M.clamp
                  , j = M.defined
                  , R = M.extend
                  , X = M.fireEvent
                  , Y = M.isArray
                  , _ = M.merge
                  , F = M.objectEach
                  , U = M.pick
                  , V = M.relativeLength
                  , Z = M.splat
                  , $ = M.stableSort;
                s.distribute = function(i, o, p) {
                    function b(i, o) {
                        return i.target - o.target
                    }
                    var C, S = !0, M = i, T = [], P = 0, O = M.reducedLen || o;
                    for (C = i.length; C--; )
                        P += i[C].size;
                    if (P > O) {
                        for ($(i, (function(i, o) {
                            return (o.rank || 0) - (i.rank || 0)
                        }
                        )),
                        P = C = 0; P <= O; )
                            P += i[C].size,
                            C++;
                        T = i.splice(C - 1, i.length)
                    }
                    for ($(i, b),
                    i = i.map((function(i) {
                        return {
                            size: i.size,
                            targets: [i.target],
                            align: U(i.align, .5)
                        }
                    }
                    )); S; ) {
                        for (C = i.length; C--; )
                            S = i[C],
                            P = (Math.min.apply(0, S.targets) + Math.max.apply(0, S.targets)) / 2,
                            S.pos = D(P - S.size * S.align, 0, o - S.size);
                        for (C = i.length,
                        S = !1; C--; )
                            0 < C && i[C - 1].pos + i[C - 1].size > i[C].pos && (i[C - 1].size += i[C].size,
                            i[C - 1].targets = i[C - 1].targets.concat(i[C].targets),
                            i[C - 1].align = .5,
                            i[C - 1].pos + i[C - 1].size > o && (i[C - 1].pos = o - i[C - 1].size),
                            i.splice(C, 1),
                            S = !0)
                    }
                    M.push.apply(M, T),
                    C = 0,
                    i.some((function(i) {
                        var S = 0;
                        if (i.targets.some((function() {
                            if (M[C].pos = i.pos + S,
                            void 0 !== p && Math.abs(M[C].pos - M[C].target) > p)
                                return M.slice(0, C + 1).forEach((function(i) {
                                    delete i.pos
                                }
                                )),
                                M.reducedLen = (M.reducedLen || o) - .1 * o,
                                M.reducedLen > .1 * o && s.distribute(M, o, p),
                                !0;
                            S += M[C].size,
                            C++
                        }
                        )))
                            return !0
                    }
                    )),
                    $(M, b)
                }
                ,
                C.prototype.drawDataLabels = function() {
                    function d(i, o) {
                        var s, p = [];
                        if (Y(i) && !Y(o))
                            p = i.map((function(i) {
                                return _(i, o)
                            }
                            ));
                        else if (Y(o) && !Y(i))
                            p = o.map((function(o) {
                                return _(i, o)
                            }
                            ));
                        else if (Y(i) || Y(o))
                            for (s = Math.max(i.length, o.length); s--; )
                                p[s] = _(i[s], o[s]);
                        else
                            p = _(i, o);
                        return p
                    }
                    var i = this
                      , o = i.chart
                      , s = i.options
                      , C = s.dataLabels
                      , S = i.points
                      , M = i.hasRendered || 0
                      , O = C.animation;
                    O = C.defer ? T(o, O, i) : {
                        defer: 0,
                        duration: 0
                    };
                    var D = o.renderer;
                    if (C = d(d(o.options.plotOptions && o.options.plotOptions.series && o.options.plotOptions.series.dataLabels, o.options.plotOptions && o.options.plotOptions[i.type] && o.options.plotOptions[i.type].dataLabels), C),
                    X(this, "drawDataLabels"),
                    Y(C) || C.enabled || i._hasPointLabels) {
                        var R = i.plotGroup("dataLabelsGroup", "data-labels", M ? "inherit" : "hidden", C.zIndex || 6);
                        R.attr({
                            opacity: +M
                        }),
                        !M && (M = i.dataLabelsGroup) && (i.visible && R.show(!0),
                        M[s.animation ? "animate" : "attr"]({
                            opacity: 1
                        }, O)),
                        S.forEach((function(S) {
                            Z(d(C, S.dlOptions || S.options && S.options.dataLabels)).forEach((function(C, M) {
                                var T = C.enabled && (!S.isNull || S.dataLabelOnNull) && function a(i, o) {
                                    var s = o.filter;
                                    return !s || (o = s.operator,
                                    i = i[s.property],
                                    s = s.value,
                                    ">" === o && i > s || "<" === o && i < s || ">=" === o && i >= s || "<=" === o && i <= s || "==" === o && i == s || "===" === o && i === s)
                                }(S, C)
                                  , O = S.dataLabels ? S.dataLabels[M] : S.dataLabel
                                  , X = S.connectors ? S.connectors[M] : S.connector
                                  , Y = U(C.distance, S.labelDistance)
                                  , _ = !O;
                                if (T) {
                                    var V = S.getLabelConfig()
                                      , Z = U(C[S.formatPrefix + "Format"], C.format);
                                    V = j(Z) ? P(Z, V, o) : (C[S.formatPrefix + "Formatter"] || C.formatter).call(V, C),
                                    Z = C.style;
                                    var $ = C.rotation;
                                    o.styledMode || (Z.color = U(C.color, Z.color, i.color, p.neutralColor100),
                                    "contrast" === Z.color ? (S.contrastColor = D.getContrast(S.color || i.color),
                                    Z.color = !j(Y) && C.inside || 0 > Y || s.stacking ? S.contrastColor : p.neutralColor100) : delete S.contrastColor,
                                    s.cursor && (Z.cursor = s.cursor));
                                    var Q = {
                                        r: C.borderRadius || 0,
                                        rotation: $,
                                        padding: C.padding,
                                        zIndex: 1
                                    };
                                    o.styledMode || (Q.fill = C.backgroundColor,
                                    Q.stroke = C.borderColor,
                                    Q["stroke-width"] = C.borderWidth),
                                    F(Q, (function(i, o) {
                                        void 0 === i && delete Q[o]
                                    }
                                    ))
                                }
                                !O || T && j(V) ? T && j(V) && (O ? Q.text = V : (S.dataLabels = S.dataLabels || [],
                                O = S.dataLabels[M] = $ ? D.text(V, 0, -9999, C.useHTML).addClass("highcharts-data-label") : D.label(V, 0, -9999, C.shape, null, null, C.useHTML, null, "data-label"),
                                M || (S.dataLabel = O),
                                O.addClass(" highcharts-data-label-color-" + S.colorIndex + " " + (C.className || "") + (C.useHTML ? " highcharts-tracker" : ""))),
                                O.options = C,
                                O.attr(Q),
                                o.styledMode || O.css(Z).shadow(C.shadow),
                                O.added || O.add(R),
                                C.textPath && !C.useHTML && (O.setTextPath(S.getDataLabelPath && S.getDataLabelPath(O) || S.graphic, C.textPath),
                                S.dataLabelPath && !C.textPath.enabled && (S.dataLabelPath = S.dataLabelPath.destroy())),
                                i.alignDataLabel(S, O, C, null, _)) : (S.dataLabel = S.dataLabel && S.dataLabel.destroy(),
                                S.dataLabels && (1 === S.dataLabels.length ? delete S.dataLabels : delete S.dataLabels[M]),
                                M || delete S.dataLabel,
                                X && (S.connector = S.connector.destroy(),
                                S.connectors && (1 === S.connectors.length ? delete S.connectors : delete S.connectors[M])))
                            }
                            ))
                        }
                        ))
                    }
                    X(this, "afterDrawDataLabels")
                }
                ,
                C.prototype.alignDataLabel = function(i, o, s, p, C) {
                    var S = this
                      , M = this.chart
                      , T = this.isCartesian && M.inverted
                      , P = this.enabledDataSorting
                      , O = U(i.dlBox && i.dlBox.centerX, i.plotX, -9999)
                      , D = U(i.plotY, -9999)
                      , j = o.getBBox()
                      , X = s.rotation
                      , Y = s.align
                      , _ = M.isInsidePlot(O, Math.round(D), {
                        inverted: T,
                        paneCoordinates: !0,
                        series: S
                    })
                      , F = "justify" === U(s.overflow, P ? "none" : "justify")
                      , V = this.visible && !1 !== i.visible && (i.series.forceDL || P && !F || _ || U(s.inside, !!this.options.stacking) && p && M.isInsidePlot(O, T ? p.x + 1 : p.y + p.height - 1, {
                        inverted: T,
                        paneCoordinates: !0,
                        series: S
                    }))
                      , A = function(s) {
                        P && S.xAxis && !F && S.setDataLabelStartPos(i, o, C, _, s)
                    };
                    if (V) {
                        var Z = M.renderer.fontMetrics(M.styledMode ? void 0 : s.style.fontSize, o).b;
                        p = R({
                            x: T ? this.yAxis.len - D : O,
                            y: Math.round(T ? this.xAxis.len - O : D),
                            width: 0,
                            height: 0
                        }, p),
                        R(s, {
                            width: j.width,
                            height: j.height
                        }),
                        X ? (F = !1,
                        O = M.renderer.rotCorr(Z, X),
                        A(O = {
                            x: p.x + (s.x || 0) + p.width / 2 + O.x,
                            y: p.y + (s.y || 0) + {
                                top: 0,
                                middle: .5,
                                bottom: 1
                            }[s.verticalAlign] * p.height
                        }),
                        o[C ? "attr" : "animate"](O).attr({
                            align: Y
                        }),
                        A = 180 < (A = (X + 720) % 360) && 360 > A,
                        "left" === Y ? O.y -= A ? j.height : 0 : "center" === Y ? (O.x -= j.width / 2,
                        O.y -= j.height / 2) : "right" === Y && (O.x -= j.width,
                        O.y -= A ? 0 : j.height),
                        o.placed = !0,
                        o.alignAttr = O) : (A(p),
                        o.align(s, void 0, p),
                        O = o.alignAttr),
                        F && 0 <= p.height ? this.justifyDataLabel(o, s, O, j, p, C) : U(s.crop, !0) && (V = M.isInsidePlot(O.x, O.y, {
                            paneCoordinates: !0,
                            series: S
                        }) && M.isInsidePlot(O.x + j.width, O.y + j.height, {
                            paneCoordinates: !0,
                            series: S
                        })),
                        s.shape && !X && o[C ? "attr" : "animate"]({
                            anchorX: T ? M.plotWidth - i.plotY : i.plotX,
                            anchorY: T ? M.plotHeight - i.plotX : i.plotY
                        })
                    }
                    C && P && (o.placed = !1),
                    V || P && !F || (o.hide(!0),
                    o.placed = !1)
                }
                ,
                C.prototype.setDataLabelStartPos = function(i, o, s, p, C) {
                    var S = this.chart
                      , M = S.inverted
                      , T = this.xAxis
                      , P = T.reversed
                      , O = M ? o.height / 2 : o.width / 2;
                    i = (i = i.pointWidth) ? i / 2 : 0,
                    T = M ? C.x : P ? -O - i : T.width - O + i,
                    C = M ? P ? this.yAxis.height - O + i : -O - i : C.y,
                    o.startXPos = T,
                    o.startYPos = C,
                    p ? "hidden" === o.visibility && (o.show(),
                    o.attr({
                        opacity: 0
                    }).animate({
                        opacity: 1
                    })) : o.attr({
                        opacity: 1
                    }).animate({
                        opacity: 0
                    }, void 0, o.hide),
                    S.hasRendered && (s && o.attr({
                        x: o.startXPos,
                        y: o.startYPos
                    }),
                    o.placed = !0)
                }
                ,
                C.prototype.justifyDataLabel = function(i, o, s, p, C, S) {
                    var M = this.chart
                      , T = o.align
                      , P = o.verticalAlign
                      , O = i.box ? 0 : i.padding || 0
                      , D = o.x;
                    D = void 0 === D ? 0 : D;
                    var j = o.y
                      , R = void 0 === j ? 0 : j;
                    if (0 > (j = (s.x || 0) + O)) {
                        "right" === T && 0 <= D ? (o.align = "left",
                        o.inside = !0) : D -= j;
                        var X = !0
                    }
                    return (j = (s.x || 0) + p.width - O) > M.plotWidth && ("left" === T && 0 >= D ? (o.align = "right",
                    o.inside = !0) : D += M.plotWidth - j,
                    X = !0),
                    0 > (j = s.y + O) && ("bottom" === P && 0 <= R ? (o.verticalAlign = "top",
                    o.inside = !0) : R -= j,
                    X = !0),
                    (j = (s.y || 0) + p.height - O) > M.plotHeight && ("top" === P && 0 >= R ? (o.verticalAlign = "bottom",
                    o.inside = !0) : R += M.plotHeight - j,
                    X = !0),
                    X && (o.x = D,
                    o.y = R,
                    i.placed = !S,
                    i.align(o, void 0, C)),
                    X
                }
                ,
                S.pie && (S.pie.prototype.dataLabelPositioners = {
                    radialDistributionY: function(i) {
                        return i.top + i.distributeBox.pos
                    },
                    radialDistributionX: function(i, o, s, p) {
                        return i.getX(s < o.top + 2 || s > o.bottom - 2 ? p : s, o.half, o)
                    },
                    justify: function(i, o, s) {
                        return s[0] + (i.half ? -1 : 1) * (o + i.labelDistance)
                    },
                    alignToPlotEdges: function(i, o, s, p) {
                        return i = i.getBBox().width,
                        o ? i + p : s - i - p
                    },
                    alignToConnectors: function(i, o, s, p) {
                        var C, S = 0;
                        return i.forEach((function(i) {
                            (C = i.dataLabel.getBBox().width) > S && (S = C)
                        }
                        )),
                        o ? S + p : s - S - p
                    }
                },
                S.pie.prototype.drawDataLabels = function() {
                    var i, o, S, M, T, P, D, R, X, Y, F, V, Z = this, $ = Z.data, Q = Z.chart, tt = Z.options.dataLabels || {}, et = tt.connectorPadding, it = Q.plotWidth, ot = Q.plotHeight, st = Q.plotLeft, rt = Math.round(Q.chartWidth / 3), nt = Z.center, at = nt[2] / 2, ht = nt[1], lt = [[], []], ct = [0, 0, 0, 0], dt = Z.dataLabelPositioners;
                    Z.visible && (tt.enabled || Z._hasPointLabels) && ($.forEach((function(i) {
                        i.dataLabel && i.visible && i.dataLabel.shortened && (i.dataLabel.attr({
                            width: "auto"
                        }).css({
                            width: "auto",
                            textOverflow: "clip"
                        }),
                        i.dataLabel.shortened = !1)
                    }
                    )),
                    C.prototype.drawDataLabels.apply(Z),
                    $.forEach((function(i) {
                        i.dataLabel && (i.visible ? (lt[i.half].push(i),
                        i.dataLabel._pos = null,
                        !j(tt.style.width) && !j(i.options.dataLabels && i.options.dataLabels.style && i.options.dataLabels.style.width) && i.dataLabel.getBBox().width > rt && (i.dataLabel.css({
                            width: Math.round(.7 * rt) + "px"
                        }),
                        i.dataLabel.shortened = !0)) : (i.dataLabel = i.dataLabel.destroy(),
                        i.dataLabels && 1 === i.dataLabels.length && delete i.dataLabels))
                    }
                    )),
                    lt.forEach((function(o, p) {
                        var C, S = o.length, O = [];
                        if (S) {
                            if (Z.sortByAngle(o, p - .5),
                            0 < Z.maxLabelDistance) {
                                var _ = Math.max(0, ht - at - Z.maxLabelDistance)
                                  , $ = Math.min(ht + at + Z.maxLabelDistance, Q.plotHeight);
                                o.forEach((function(i) {
                                    0 < i.labelDistance && i.dataLabel && (i.top = Math.max(0, ht - at - i.labelDistance),
                                    i.bottom = Math.min(ht + at + i.labelDistance, Q.plotHeight),
                                    C = i.dataLabel.getBBox().height || 21,
                                    i.distributeBox = {
                                        target: i.labelPosition.natural.y - i.top + C / 2,
                                        size: C,
                                        rank: i.y
                                    },
                                    O.push(i.distributeBox))
                                }
                                )),
                                _ = $ + C - _,
                                s.distribute(O, _, _ / 5)
                            }
                            for (F = 0; F < S; F++) {
                                if (i = o[F],
                                P = i.labelPosition,
                                M = i.dataLabel,
                                Y = !1 === i.visible ? "hidden" : "inherit",
                                X = _ = P.natural.y,
                                O && j(i.distributeBox) && (void 0 === i.distributeBox.pos ? Y = "hidden" : (D = i.distributeBox.size,
                                X = dt.radialDistributionY(i))),
                                delete i.positionIndex,
                                tt.justify)
                                    R = dt.justify(i, at, nt);
                                else
                                    switch (tt.alignTo) {
                                    case "connectors":
                                        R = dt.alignToConnectors(o, p, it, st);
                                        break;
                                    case "plotEdges":
                                        R = dt.alignToPlotEdges(M, p, it, st);
                                        break;
                                    default:
                                        R = dt.radialDistributionX(Z, i, X, _)
                                    }
                                M._attr = {
                                    visibility: Y,
                                    align: P.alignment
                                },
                                V = i.options.dataLabels || {},
                                M._pos = {
                                    x: R + U(V.x, tt.x) + ({
                                        left: et,
                                        right: -et
                                    }[P.alignment] || 0),
                                    y: X + U(V.y, tt.y) - 10
                                },
                                P.final.x = R,
                                P.final.y = X,
                                U(tt.crop, !0) && (T = M.getBBox().width,
                                _ = null,
                                R - T < et && 1 === p ? (_ = Math.round(T - R + et),
                                ct[3] = Math.max(_, ct[3])) : R + T > it - et && 0 === p && (_ = Math.round(R + T - it + et),
                                ct[1] = Math.max(_, ct[1])),
                                0 > X - D / 2 ? ct[0] = Math.max(Math.round(D / 2 - X), ct[0]) : X + D / 2 > ot && (ct[2] = Math.max(Math.round(X + D / 2 - ot), ct[2])),
                                M.sideOverflow = _)
                            }
                        }
                    }
                    )),
                    0 === O(ct) || this.verifyDataLabelOverflow(ct)) && (this.placeDataLabels(),
                    this.points.forEach((function(i) {
                        var s;
                        V = _(tt, i.options.dataLabels),
                        (o = U(V.connectorWidth, 1)) && (S = i.connector,
                        (M = i.dataLabel) && M._pos && i.visible && 0 < i.labelDistance ? (Y = M._attr.visibility,
                        (s = !S) && (i.connector = S = Q.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + i.colorIndex + (i.className ? " " + i.className : "")).add(Z.dataLabelsGroup),
                        Q.styledMode || S.attr({
                            "stroke-width": o,
                            stroke: V.connectorColor || i.color || p.neutralColor60
                        })),
                        S[s ? "attr" : "animate"]({
                            d: i.getConnectorPath()
                        }),
                        S.attr("visibility", Y)) : S && (i.connector = S.destroy()))
                    }
                    )))
                }
                ,
                S.pie.prototype.placeDataLabels = function() {
                    this.points.forEach((function(i) {
                        var o, s = i.dataLabel;
                        s && i.visible && ((o = s._pos) ? (s.sideOverflow && (s._attr.width = Math.max(s.getBBox().width - s.sideOverflow, 0),
                        s.css({
                            width: s._attr.width + "px",
                            textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
                        }),
                        s.shortened = !0),
                        s.attr(s._attr),
                        s[s.moved ? "animate" : "attr"](o),
                        s.moved = !0) : s && s.attr({
                            y: -9999
                        })),
                        delete i.distributeBox
                    }
                    ), this)
                }
                ,
                S.pie.prototype.alignDataLabel = i,
                S.pie.prototype.verifyDataLabelOverflow = function(i) {
                    var o = this.center
                      , s = this.options
                      , p = s.center
                      , C = s.minSize || 80
                      , S = null !== s.size;
                    if (!S) {
                        if (null !== p[0])
                            var M = Math.max(o[2] - Math.max(i[1], i[3]), C);
                        else
                            M = Math.max(o[2] - i[1] - i[3], C),
                            o[0] += (i[3] - i[1]) / 2;
                        null !== p[1] ? M = D(M, C, o[2] - Math.max(i[0], i[2])) : (M = D(M, C, o[2] - i[0] - i[2]),
                        o[1] += (i[0] - i[2]) / 2),
                        M < o[2] ? (o[2] = M,
                        o[3] = Math.min(V(s.innerSize || 0, M), M),
                        this.translate(o),
                        this.drawDataLabels && this.drawDataLabels()) : S = !0
                    }
                    return S
                }
                ),
                S.column && (S.column.prototype.alignDataLabel = function(i, o, s, p, S) {
                    var M = this.chart.inverted
                      , T = i.series
                      , P = i.dlBox || i.shapeArgs
                      , O = U(i.below, i.plotY > U(this.translatedThreshold, T.yAxis.len))
                      , D = U(s.inside, !!this.options.stacking);
                    P && (0 > (p = _(P)).y && (p.height += p.y,
                    p.y = 0),
                    0 < (P = p.y + p.height - T.yAxis.len) && P < p.height && (p.height -= P),
                    M && (p = {
                        x: T.yAxis.len - p.y - p.height,
                        y: T.xAxis.len - p.x - p.width,
                        width: p.height,
                        height: p.width
                    }),
                    D || (M ? (p.x += O ? 0 : p.width,
                    p.width = 0) : (p.y += O ? p.height : 0,
                    p.height = 0))),
                    s.align = U(s.align, !M || D ? "center" : O ? "right" : "left"),
                    s.verticalAlign = U(s.verticalAlign, M || D ? "middle" : O ? "top" : "bottom"),
                    C.prototype.alignDataLabel.call(this, i, o, s, p, S),
                    s.inside && i.contrastColor && o.css({
                        color: i.contrastColor
                    })
                }
                )
            }
            )),
            L(o, "Extensions/OverlappingDataLabels.js", [o["Core/Chart/Chart.js"], o["Core/Utilities.js"]], (function(i, o) {
                function v(i, o) {
                    var s = !1;
                    if (i) {
                        var C = i.newOpacity;
                        i.oldOpacity !== C && (i.alignAttr && i.placed ? (i[C ? "removeClass" : "addClass"]("highcharts-data-label-hidden"),
                        s = !0,
                        i.alignAttr.opacity = C,
                        i[i.isOld ? "animate" : "attr"](i.alignAttr, null, (function() {
                            o.styledMode || i.css({
                                pointerEvents: C ? "auto" : "none"
                            })
                        }
                        )),
                        p(o, "afterHideOverlappingLabel")) : i.attr({
                            opacity: C
                        })),
                        i.isOld = !0
                    }
                    return s
                }
                var s = o.addEvent
                  , p = o.fireEvent
                  , C = o.isArray
                  , S = o.isNumber
                  , M = o.objectEach
                  , T = o.pick;
                s(i, "render", (function() {
                    var i = this
                      , o = [];
                    (this.labelCollectors || []).forEach((function(i) {
                        o = o.concat(i())
                    }
                    )),
                    (this.yAxis || []).forEach((function(i) {
                        i.stacking && i.options.stackLabels && !i.options.stackLabels.allowOverlap && M(i.stacking.stacks, (function(i) {
                            M(i, (function(i) {
                                i.label && "hidden" !== i.label.visibility && o.push(i.label)
                            }
                            ))
                        }
                        ))
                    }
                    )),
                    (this.series || []).forEach((function(s) {
                        var p = s.options.dataLabels;
                        s.visible && (!1 !== p.enabled || s._hasPointLabels) && (p = function(s) {
                            return s.forEach((function(s) {
                                s.visible && (C(s.dataLabels) ? s.dataLabels : s.dataLabel ? [s.dataLabel] : []).forEach((function(p) {
                                    var C = p.options;
                                    p.labelrank = T(C.labelrank, s.labelrank, s.shapeArgs && s.shapeArgs.height),
                                    C.allowOverlap ? (p.oldOpacity = p.opacity,
                                    p.newOpacity = 1,
                                    v(p, i)) : o.push(p)
                                }
                                ))
                            }
                            ))
                        }
                        ,
                        p(s.nodes || []),
                        p(s.points))
                    }
                    )),
                    this.hideOverlappingLabels(o)
                }
                )),
                i.prototype.hideOverlappingLabels = function(i) {
                    var o, s, C, M = this, T = i.length, P = M.renderer, O = !1, l = function(i) {
                        var o, s, p = i.box ? 0 : i.padding || 0, C = o = 0;
                        if (i && (!i.alignAttr || i.placed)) {
                            var M = i.alignAttr || {
                                x: i.attr("x"),
                                y: i.attr("y")
                            }
                              , T = i.parentGroup;
                            i.width || (o = i.getBBox(),
                            i.width = o.width,
                            i.height = o.height,
                            o = P.fontMetrics(null, i.element).h);
                            var O = i.width - 2 * p;
                            return (s = {
                                left: "0",
                                center: "0.5",
                                right: "1"
                            }[i.alignValue]) ? C = +s * O : S(i.x) && Math.round(i.x) !== i.translateX && (C = i.x - i.translateX),
                            {
                                x: M.x + (T.translateX || 0) + p - (C || 0),
                                y: M.y + (T.translateY || 0) + p - o,
                                width: i.width - 2 * p,
                                height: i.height - 2 * p
                            }
                        }
                    };
                    for (s = 0; s < T; s++)
                        (o = i[s]) && (o.oldOpacity = o.opacity,
                        o.newOpacity = 1,
                        o.absoluteBox = l(o));
                    for (i.sort((function(i, o) {
                        return (o.labelrank || 0) - (i.labelrank || 0)
                    }
                    )),
                    s = 0; s < T; s++) {
                        var D = (l = i[s]) && l.absoluteBox;
                        for (o = s + 1; o < T; ++o) {
                            var j = (C = i[o]) && C.absoluteBox;
                            !D || !j || l === C || 0 === l.newOpacity || 0 === C.newOpacity || j.x >= D.x + D.width || j.x + j.width <= D.x || j.y >= D.y + D.height || j.y + j.height <= D.y || ((l.labelrank < C.labelrank ? l : C).newOpacity = 0)
                        }
                    }
                    i.forEach((function(i) {
                        v(i, M) && (O = !0)
                    }
                    )),
                    O && p(M, "afterHideAllOverlappingLabels")
                }
            }
            )),
            L(o, "Core/Responsive.js", [o["Core/Utilities.js"]], (function(i) {
                var o = i.extend
                  , s = i.find
                  , p = i.isArray
                  , C = i.isObject
                  , S = i.merge
                  , M = i.objectEach
                  , T = i.pick
                  , P = i.splat
                  , O = i.uniqueKey
                  , D = function() {
                    function a() {}
                    return a.prototype.currentOptions = function(i) {
                        var o = this
                          , s = {};
                        return function c(i, s, S, T) {
                            var O;
                            M(i, (function(i, M) {
                                if (!T && -1 < o.collectionsWithUpdate.indexOf(M) && s[M])
                                    for (i = P(i),
                                    S[M] = [],
                                    O = 0; O < Math.max(i.length, s[M].length); O++)
                                        s[M][O] && (void 0 === i[O] ? S[M][O] = s[M][O] : (S[M][O] = {},
                                        c(i[O], s[M][O], S[M][O], T + 1)));
                                else
                                    C(i) ? (S[M] = p(i) ? [] : {},
                                    c(i, s[M] || {}, S[M], T + 1)) : S[M] = void 0 === s[M] ? null : s[M]
                            }
                            ))
                        }(i, this.options, s, 0),
                        s
                    }
                    ,
                    a.prototype.matchResponsiveRule = function(i, o) {
                        var s = i.condition;
                        (s.callback || function() {
                            return this.chartWidth <= T(s.maxWidth, Number.MAX_VALUE) && this.chartHeight <= T(s.maxHeight, Number.MAX_VALUE) && this.chartWidth >= T(s.minWidth, 0) && this.chartHeight >= T(s.minHeight, 0)
                        }
                        ).call(this) && o.push(i._id)
                    }
                    ,
                    a.prototype.setResponsive = function(i, o) {
                        var p = this.options.responsive
                          , C = this.currentResponsive
                          , M = [];
                        !o && p && p.rules && p.rules.forEach((function(i) {
                            void 0 === i._id && (i._id = O()),
                            this.matchResponsiveRule(i, M)
                        }
                        ), this),
                        o = S.apply(void 0, M.map((function(i) {
                            return s((p || {}).rules || [], (function(o) {
                                return o._id === i
                            }
                            ))
                        }
                        )).map((function(i) {
                            return i && i.chartOptions
                        }
                        ))),
                        o.isResponsiveOptions = !0,
                        (M = M.toString() || void 0) !== (C && C.ruleIds) && (C && this.update(C.undoOptions, i, !0),
                        M ? ((C = this.currentOptions(o)).isResponsiveOptions = !0,
                        this.currentResponsive = {
                            ruleIds: M,
                            mergedOptions: o,
                            undoOptions: C
                        },
                        this.update(o, i, !0)) : this.currentResponsive = void 0)
                    }
                    ,
                    a
                }();
                return i = function() {
                    function a() {}
                    return a.compose = function(i) {
                        return o(i.prototype, D.prototype),
                        i
                    }
                    ,
                    a
                }()
            }
            )),
            L(o, "masters/highcharts.src.js", [o["Core/Globals.js"], o["Core/Utilities.js"], o["Core/DefaultOptions.js"], o["Core/Animation/Fx.js"], o["Core/Animation/AnimationUtilities.js"], o["Core/Renderer/HTML/AST.js"], o["Core/FormatUtilities.js"], o["Core/Renderer/SVG/SVGElement.js"], o["Core/Renderer/SVG/SVGRenderer.js"], o["Core/Renderer/HTML/HTMLElement.js"], o["Core/Renderer/HTML/HTMLRenderer.js"], o["Core/Axis/Axis.js"], o["Core/Axis/PlotLineOrBand.js"], o["Core/Axis/Tick.js"], o["Core/Pointer.js"], o["Core/MSPointer.js"], o["Core/Chart/Chart.js"], o["Core/Series/Series.js"], o["Core/Responsive.js"], o["Core/Color/Color.js"], o["Core/Time.js"]], (function(i, o, s, p, C, S, M, T, P, O, D, j, R, X, Y, _, F, U, V, Z, $) {
                return i.animate = C.animate,
                i.animObject = C.animObject,
                i.getDeferredAnimation = C.getDeferredAnimation,
                i.setAnimation = C.setAnimation,
                i.stop = C.stop,
                i.timers = p.timers,
                i.AST = S,
                i.Axis = j,
                i.Chart = F,
                i.chart = F.chart,
                i.Fx = p,
                i.PlotLineOrBand = R,
                i.Pointer = _.isRequired() ? _ : Y,
                i.Series = U,
                i.SVGElement = T,
                i.SVGRenderer = P,
                i.Tick = X,
                i.Time = $,
                i.Color = Z,
                i.color = Z.parse,
                D.compose(P),
                O.compose(T),
                i.defaultOptions = s.defaultOptions,
                i.getOptions = s.getOptions,
                i.time = s.defaultTime,
                i.setOptions = s.setOptions,
                i.dateFormat = M.dateFormat,
                i.format = M.format,
                i.numberFormat = M.numberFormat,
                i.addEvent = o.addEvent,
                i.arrayMax = o.arrayMax,
                i.arrayMin = o.arrayMin,
                i.attr = o.attr,
                i.clearTimeout = o.clearTimeout,
                i.correctFloat = o.correctFloat,
                i.createElement = o.createElement,
                i.css = o.css,
                i.defined = o.defined,
                i.destroyObjectProperties = o.destroyObjectProperties,
                i.discardElement = o.discardElement,
                i.erase = o.erase,
                i.error = o.error,
                i.extend = o.extend,
                i.extendClass = o.extendClass,
                i.find = o.find,
                i.fireEvent = o.fireEvent,
                i.getMagnitude = o.getMagnitude,
                i.getStyle = o.getStyle,
                i.inArray = o.inArray,
                i.isArray = o.isArray,
                i.isClass = o.isClass,
                i.isDOMElement = o.isDOMElement,
                i.isFunction = o.isFunction,
                i.isNumber = o.isNumber,
                i.isObject = o.isObject,
                i.isString = o.isString,
                i.keys = o.keys,
                i.merge = o.merge,
                i.normalizeTickInterval = o.normalizeTickInterval,
                i.objectEach = o.objectEach,
                i.offset = o.offset,
                i.pad = o.pad,
                i.pick = o.pick,
                i.pInt = o.pInt,
                i.relativeLength = o.relativeLength,
                i.removeEvent = o.removeEvent,
                i.splat = o.splat,
                i.stableSort = o.stableSort,
                i.syncTimeout = o.syncTimeout,
                i.timeUnits = o.timeUnits,
                i.uniqueKey = o.uniqueKey,
                i.useSerialIds = o.useSerialIds,
                i.wrap = o.wrap,
                V.compose(F),
                i
            }
            )),
            o["masters/highcharts.src.js"]._modules = o,
            o["masters/highcharts.src.js"]
        }
        ,
        i.exports ? (S.default = S,
        i.exports = C.document ? S(C) : S) : void 0 === (p = function() {
            return S(C)
        }
        .call(o, s, o, i)) || (i.exports = p)
    }
}]);
