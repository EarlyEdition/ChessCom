(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[790], {
    63790: function(e, t, n) {
        var r = n(34155);
        e.exports = function() {
            "use strict";
            var e = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};
            function createCommonjsModule(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports),
                t.exports
            }
            createCommonjsModule((function(t, n) {
                /*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
                (function() {
                    var r = !1
                      , o = {
                        function: !0,
                        object: !0
                    }
                      , i = o.object && n && !n.nodeType && n
                      , s = o[typeof window] && window || this
                      , a = i && o.object && t && !t.nodeType && "object" == typeof e && e;
                    function runInContext(e, t) {
                        e || (e = s.Object()),
                        t || (t = s.Object());
                        var n = e.Number || s.Number
                          , r = e.String || s.String
                          , i = e.Object || s.Object
                          , a = e.Date || s.Date
                          , u = e.SyntaxError || s.SyntaxError
                          , c = e.TypeError || s.TypeError
                          , l = e.Math || s.Math
                          , p = e.JSON || s.JSON;
                        "object" == typeof p && p && (t.stringify = p.stringify,
                        t.parse = p.parse);
                        var d, f, h, g = i.prototype, v = g.toString, m = new a(-0xc782b5b800cec);
                        try {
                            m = -109252 == m.getUTCFullYear() && 0 === m.getUTCMonth() && 1 === m.getUTCDate() && 10 == m.getUTCHours() && 37 == m.getUTCMinutes() && 6 == m.getUTCSeconds() && 708 == m.getUTCMilliseconds()
                        } catch (k) {}
                        function has(e) {
                            if (has[e] !== h)
                                return has[e];
                            var o;
                            if ("bug-string-char-index" == e)
                                o = "a" != "a"[0];
                            else if ("json" == e)
                                o = has("json-stringify") && has("json-parse");
                            else {
                                var i, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                if ("json-stringify" == e) {
                                    var u = t.stringify
                                      , c = "function" == typeof u && m;
                                    if (c) {
                                        (i = function() {
                                            return 1
                                        }
                                        ).toJSON = i;
                                        try {
                                            c = "0" === u(0) && "0" === u(new n) && '""' == u(new r) && u(v) === h && u(h) === h && u() === h && "1" === u(i) && "[1]" == u([i]) && "[null]" == u([h]) && "null" == u(null) && "[null,null,null]" == u([h, v, null]) && u({
                                                a: [i, !0, !1, null, "\0\b\n\f\r\t"]
                                            }) == s && "1" === u(null, i) && "[\n 1,\n 2\n]" == u([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == u(new a(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == u(new a(864e13)) && '"-000001-01-01T00:00:00.000Z"' == u(new a(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == u(new a(-1))
                                        } catch (k) {
                                            c = !1
                                        }
                                    }
                                    o = c
                                }
                                if ("json-parse" == e) {
                                    var l = t.parse;
                                    if ("function" == typeof l)
                                        try {
                                            if (0 === l("0") && !l(!1)) {
                                                var p = 5 == (i = l(s)).a.length && 1 === i.a[0];
                                                if (p) {
                                                    try {
                                                        p = !l('"\t"')
                                                    } catch (k) {}
                                                    if (p)
                                                        try {
                                                            p = 1 !== l("01")
                                                        } catch (k) {}
                                                    if (p)
                                                        try {
                                                            p = 1 !== l("1.")
                                                        } catch (k) {}
                                                }
                                            }
                                        } catch (k) {
                                            p = !1
                                        }
                                    o = p
                                }
                            }
                            return has[e] = !!o
                        }
                        if (!has("json")) {
                            var y = "[object Function]"
                              , _ = "[object Date]"
                              , b = "[object Number]"
                              , w = "[object String]"
                              , I = "[object Array]"
                              , E = "[object Boolean]"
                              , S = has("bug-string-char-index");
                            if (!m)
                                var C = l.floor
                                  , O = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                                  , getDay = function(e, t) {
                                    return O[t] + 365 * (e - 1970) + C((e - 1969 + (t = +(t > 1))) / 4) - C((e - 1901 + t) / 100) + C((e - 1601 + t) / 400)
                                };
                            if ((d = g.hasOwnProperty) || (d = function(e) {
                                var t, n = {};
                                return (n.__proto__ = null,
                                n.__proto__ = {
                                    toString: 1
                                },
                                n).toString != v ? d = function(e) {
                                    var t = this.__proto__
                                      , n = e in (this.__proto__ = null,
                                    this);
                                    return this.__proto__ = t,
                                    n
                                }
                                : (t = n.constructor,
                                d = function(e) {
                                    var n = (this.constructor || t).prototype;
                                    return e in this && !(e in n && this[e] === n[e])
                                }
                                ),
                                n = null,
                                d.call(this, e)
                            }
                            ),
                            f = function(e, t) {
                                var n, r, i, s = 0;
                                for (i in (n = function() {
                                    this.valueOf = 0
                                }
                                ).prototype.valueOf = 0,
                                r = new n)
                                    d.call(r, i) && s++;
                                return n = r = null,
                                s ? f = 2 == s ? function(e, t) {
                                    var n, r = {}, o = v.call(e) == y;
                                    for (n in e)
                                        o && "prototype" == n || d.call(r, n) || !(r[n] = 1) || !d.call(e, n) || t(n)
                                }
                                : function(e, t) {
                                    var n, r, o = v.call(e) == y;
                                    for (n in e)
                                        o && "prototype" == n || !d.call(e, n) || (r = "constructor" === n) || t(n);
                                    (r || d.call(e, n = "constructor")) && t(n)
                                }
                                : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                                f = function(e, t) {
                                    var n, i, s = v.call(e) == y, a = !s && "function" != typeof e.constructor && o[typeof e.hasOwnProperty] && e.hasOwnProperty || d;
                                    for (n in e)
                                        s && "prototype" == n || !a.call(e, n) || t(n);
                                    for (i = r.length; n = r[--i]; a.call(e, n) && t(n))
                                        ;
                                }
                                ),
                                f(e, t)
                            }
                            ,
                            !has("json-stringify")) {
                                var A = {
                                    92: "\\\\",
                                    34: '\\"',
                                    8: "\\b",
                                    12: "\\f",
                                    10: "\\n",
                                    13: "\\r",
                                    9: "\\t"
                                }
                                  , N = "000000"
                                  , toPaddedString = function(e, t) {
                                    return (N + (t || 0)).slice(-e)
                                }
                                  , T = "\\u00"
                                  , quote = function(e) {
                                    for (var t = '"', n = 0, r = e.length, o = !S || r > 10, i = o && (S ? e.split("") : e); n < r; n++) {
                                        var s = e.charCodeAt(n);
                                        switch (s) {
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 12:
                                        case 13:
                                        case 34:
                                        case 92:
                                            t += A[s];
                                            break;
                                        default:
                                            if (s < 32) {
                                                t += T + toPaddedString(2, s.toString(16));
                                                break
                                            }
                                            t += o ? i[n] : e.charAt(n)
                                        }
                                    }
                                    return t + '"'
                                }
                                  , serialize = function(e, t, n, r, o, i, s) {
                                    var a, u, l, p, g, m, y, S, O, A, N, T, x, j, P, R;
                                    try {
                                        a = t[e]
                                    } catch (k) {}
                                    if ("object" == typeof a && a)
                                        if ((u = v.call(a)) != _ || d.call(a, "toJSON"))
                                            "function" == typeof a.toJSON && (u != b && u != w && u != I || d.call(a, "toJSON")) && (a = a.toJSON(e));
                                        else if (a > -1 / 0 && a < 1 / 0) {
                                            if (getDay) {
                                                for (g = C(a / 864e5),
                                                l = C(g / 365.2425) + 1970 - 1; getDay(l + 1, 0) <= g; l++)
                                                    ;
                                                for (p = C((g - getDay(l, 0)) / 30.42); getDay(l, p + 1) <= g; p++)
                                                    ;
                                                g = 1 + g - getDay(l, p),
                                                y = C((m = (a % 864e5 + 864e5) % 864e5) / 36e5) % 24,
                                                S = C(m / 6e4) % 60,
                                                O = C(m / 1e3) % 60,
                                                A = m % 1e3
                                            } else
                                                l = a.getUTCFullYear(),
                                                p = a.getUTCMonth(),
                                                g = a.getUTCDate(),
                                                y = a.getUTCHours(),
                                                S = a.getUTCMinutes(),
                                                O = a.getUTCSeconds(),
                                                A = a.getUTCMilliseconds();
                                            a = (l <= 0 || l >= 1e4 ? (l < 0 ? "-" : "+") + toPaddedString(6, l < 0 ? -l : l) : toPaddedString(4, l)) + "-" + toPaddedString(2, p + 1) + "-" + toPaddedString(2, g) + "T" + toPaddedString(2, y) + ":" + toPaddedString(2, S) + ":" + toPaddedString(2, O) + "." + toPaddedString(3, A) + "Z"
                                        } else
                                            a = null;
                                    if (n && (a = n.call(t, e, a)),
                                    null === a)
                                        return "null";
                                    if ((u = v.call(a)) == E)
                                        return "" + a;
                                    if (u == b)
                                        return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                    if (u == w)
                                        return quote("" + a);
                                    if ("object" == typeof a) {
                                        for (j = s.length; j--; )
                                            if (s[j] === a)
                                                throw c();
                                        if (s.push(a),
                                        N = [],
                                        P = i,
                                        i += o,
                                        u == I) {
                                            for (x = 0,
                                            j = a.length; x < j; x++)
                                                T = serialize(x, a, n, r, o, i, s),
                                                N.push(T === h ? "null" : T);
                                            R = N.length ? o ? "[\n" + i + N.join(",\n" + i) + "\n" + P + "]" : "[" + N.join(",") + "]" : "[]"
                                        } else
                                            f(r || a, (function(e) {
                                                var t = serialize(e, a, n, r, o, i, s);
                                                t !== h && N.push(quote(e) + ":" + (o ? " " : "") + t)
                                            }
                                            )),
                                            R = N.length ? o ? "{\n" + i + N.join(",\n" + i) + "\n" + P + "}" : "{" + N.join(",") + "}" : "{}";
                                        return s.pop(),
                                        R
                                    }
                                };
                                t.stringify = function(e, t, n) {
                                    var r, i, s, a;
                                    if (o[typeof t] && t)
                                        if ((a = v.call(t)) == y)
                                            i = t;
                                        else if (a == I) {
                                            s = {};
                                            for (var u, c = 0, l = t.length; c < l; u = t[c++],
                                            ((a = v.call(u)) == w || a == b) && (s[u] = 1))
                                                ;
                                        }
                                    if (n)
                                        if ((a = v.call(n)) == b) {
                                            if ((n -= n % 1) > 0)
                                                for (r = "",
                                                n > 10 && (n = 10); r.length < n; r += " ")
                                                    ;
                                        } else
                                            a == w && (r = n.length <= 10 ? n : n.slice(0, 10));
                                    return serialize("", ((u = {})[""] = e,
                                    u), i, s, r, "", [])
                                }
                            }
                            if (!has("json-parse")) {
                                var x, j, P = r.fromCharCode, R = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: "\t",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                }, abort = function() {
                                    throw x = j = null,
                                    u()
                                }, lex = function() {
                                    for (var e, t, n, r, o, i = j, s = i.length; x < s; )
                                        switch (o = i.charCodeAt(x)) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            x++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            return e = S ? i.charAt(x) : i[x],
                                            x++,
                                            e;
                                        case 34:
                                            for (e = "@",
                                            x++; x < s; )
                                                if ((o = i.charCodeAt(x)) < 32)
                                                    abort();
                                                else if (92 == o)
                                                    switch (o = i.charCodeAt(++x)) {
                                                    case 92:
                                                    case 34:
                                                    case 47:
                                                    case 98:
                                                    case 116:
                                                    case 110:
                                                    case 102:
                                                    case 114:
                                                        e += R[o],
                                                        x++;
                                                        break;
                                                    case 117:
                                                        for (t = ++x,
                                                        n = x + 4; x < n; x++)
                                                            (o = i.charCodeAt(x)) >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || abort();
                                                        e += P("0x" + i.slice(t, x));
                                                        break;
                                                    default:
                                                        abort()
                                                    }
                                                else {
                                                    if (34 == o)
                                                        break;
                                                    for (o = i.charCodeAt(x),
                                                    t = x; o >= 32 && 92 != o && 34 != o; )
                                                        o = i.charCodeAt(++x);
                                                    e += i.slice(t, x)
                                                }
                                            if (34 == i.charCodeAt(x))
                                                return x++,
                                                e;
                                            abort();
                                        default:
                                            if (t = x,
                                            45 == o && (r = !0,
                                            o = i.charCodeAt(++x)),
                                            o >= 48 && o <= 57) {
                                                for (48 == o && (o = i.charCodeAt(x + 1)) >= 48 && o <= 57 && abort(),
                                                r = !1; x < s && (o = i.charCodeAt(x)) >= 48 && o <= 57; x++)
                                                    ;
                                                if (46 == i.charCodeAt(x)) {
                                                    for (n = ++x; n < s && (o = i.charCodeAt(n)) >= 48 && o <= 57; n++)
                                                        ;
                                                    n == x && abort(),
                                                    x = n
                                                }
                                                if (101 == (o = i.charCodeAt(x)) || 69 == o) {
                                                    for (43 != (o = i.charCodeAt(++x)) && 45 != o || x++,
                                                    n = x; n < s && (o = i.charCodeAt(n)) >= 48 && o <= 57; n++)
                                                        ;
                                                    n == x && abort(),
                                                    x = n
                                                }
                                                return +i.slice(t, x)
                                            }
                                            if (r && abort(),
                                            "true" == i.slice(x, x + 4))
                                                return x += 4,
                                                !0;
                                            if ("false" == i.slice(x, x + 5))
                                                return x += 5,
                                                !1;
                                            if ("null" == i.slice(x, x + 4))
                                                return x += 4,
                                                null;
                                            abort()
                                        }
                                    return "$"
                                }, get = function(e) {
                                    var t, n;
                                    if ("$" == e && abort(),
                                    "string" == typeof e) {
                                        if ("@" == (S ? e.charAt(0) : e[0]))
                                            return e.slice(1);
                                        if ("[" == e) {
                                            for (t = []; "]" != (e = lex()); n || (n = !0))
                                                n && ("," == e ? "]" == (e = lex()) && abort() : abort()),
                                                "," == e && abort(),
                                                t.push(get(e));
                                            return t
                                        }
                                        if ("{" == e) {
                                            for (t = {}; "}" != (e = lex()); n || (n = !0))
                                                n && ("," == e ? "}" == (e = lex()) && abort() : abort()),
                                                "," != e && "string" == typeof e && "@" == (S ? e.charAt(0) : e[0]) && ":" == lex() || abort(),
                                                t[e.slice(1)] = get(lex());
                                            return t
                                        }
                                        abort()
                                    }
                                    return e
                                }, update = function(e, t, n) {
                                    var r = walk(e, t, n);
                                    r === h ? delete e[t] : e[t] = r
                                }, walk = function(e, t, n) {
                                    var r, o = e[t];
                                    if ("object" == typeof o && o)
                                        if (v.call(o) == I)
                                            for (r = o.length; r--; )
                                                update(o, r, n);
                                        else
                                            f(o, (function(e) {
                                                update(o, e, n)
                                            }
                                            ));
                                    return n.call(e, t, o)
                                };
                                t.parse = function(e, t) {
                                    var n, r;
                                    return x = 0,
                                    j = "" + e,
                                    n = get(lex()),
                                    "$" != lex() && abort(),
                                    x = j = null,
                                    t && v.call(t) == y ? walk(((r = {})[""] = n,
                                    r), "", t) : n
                                }
                            }
                        }
                        return t.runInContext = runInContext,
                        t
                    }
                    if (!a || a.global !== a && a.window !== a && a.self !== a || (s = a),
                    i && !r)
                        runInContext(s, i);
                    else {
                        var u = s.JSON
                          , c = s.JSON3
                          , l = !1
                          , p = runInContext(s, s.JSON3 = {
                            noConflict: function() {
                                return l || (l = !0,
                                s.JSON = u,
                                s.JSON3 = c,
                                u = c = null),
                                p
                            }
                        });
                        s.JSON = {
                            parse: p.parse,
                            stringify: p.stringify
                        }
                    }
                    r && (void 0)((function() {
                        return p
                    }
                    ))
                }
                ).call(e)
            }
            ));
            var t = {
                DEFAULT_INSTANCE: "$default_instance",
                API_VERSION: 2,
                MAX_STRING_LENGTH: 4096,
                MAX_PROPERTY_KEYS: 1e3,
                IDENTIFY_EVENT: "$identify",
                LAST_EVENT_ID: "amplitude_lastEventId",
                LAST_EVENT_TIME: "amplitude_lastEventTime",
                LAST_IDENTIFY_ID: "amplitude_lastIdentifyId",
                LAST_SEQUENCE_NUMBER: "amplitude_lastSequenceNumber",
                SESSION_ID: "amplitude_sessionId",
                DEVICE_ID: "amplitude_deviceId",
                OPT_OUT: "amplitude_optOut",
                USER_ID: "amplitude_userId",
                COOKIE_TEST: "amplitude_cookie_test",
                REVENUE_EVENT: "revenue_amount",
                REVENUE_PRODUCT_ID: "$productId",
                REVENUE_QUANTITY: "$quantity",
                REVENUE_PRICE: "$price",
                REVENUE_REVENUE_TYPE: "$revenueType",
                AMP_DEVICE_ID_PARAM: "amp_device_id"
            }
              , o = {
                encode: function encode(e) {
                    for (var t = "", n = 0; n < e.length; n++) {
                        var r = e.charCodeAt(n);
                        r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
                        t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
                        t += String.fromCharCode(r >> 6 & 63 | 128),
                        t += String.fromCharCode(63 & r | 128))
                    }
                    return t
                },
                decode: function decode(e) {
                    for (var t = "", n = 0, r = 0, o = 0, i = 0; n < e.length; )
                        (r = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(r),
                        n++) : r > 191 && r < 224 ? (o = e.charCodeAt(n + 1),
                        t += String.fromCharCode((31 & r) << 6 | 63 & o),
                        n += 2) : (o = e.charCodeAt(n + 1),
                        i = e.charCodeAt(n + 2),
                        t += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i),
                        n += 3);
                    return t
                }
            }
              , i = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encode: function encode(e) {
                    try {
                        if (window.btoa && window.atob)
                            return window.btoa(unescape(encodeURIComponent(e)))
                    } catch (t) {}
                    return i._encode(e)
                },
                _encode: function _encode(e) {
                    var t, n, r, s, a, u, c, l = "", p = 0;
                    for (e = o.encode(e); p < e.length; )
                        s = (t = e.charCodeAt(p++)) >> 2,
                        a = (3 & t) << 4 | (n = e.charCodeAt(p++)) >> 4,
                        u = (15 & n) << 2 | (r = e.charCodeAt(p++)) >> 6,
                        c = 63 & r,
                        isNaN(n) ? u = c = 64 : isNaN(r) && (c = 64),
                        l = l + i._keyStr.charAt(s) + i._keyStr.charAt(a) + i._keyStr.charAt(u) + i._keyStr.charAt(c);
                    return l
                },
                decode: function decode(e) {
                    try {
                        if (window.btoa && window.atob)
                            return decodeURIComponent(escape(window.atob(e)))
                    } catch (t) {}
                    return i._decode(e)
                },
                _decode: function _decode(e) {
                    var t, n, r, s, a, u, c = "", l = 0;
                    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length; )
                        t = i._keyStr.indexOf(e.charAt(l++)) << 2 | (s = i._keyStr.indexOf(e.charAt(l++))) >> 4,
                        n = (15 & s) << 4 | (a = i._keyStr.indexOf(e.charAt(l++))) >> 2,
                        r = (3 & a) << 6 | (u = i._keyStr.indexOf(e.charAt(l++))),
                        c += String.fromCharCode(t),
                        64 !== a && (c += String.fromCharCode(n)),
                        64 !== u && (c += String.fromCharCode(r));
                    return c = o.decode(c)
                }
            }
              , s = createCommonjsModule((function(e, t) {
                function port(e) {
                    switch (e) {
                    case "http:":
                        return 80;
                    case "https:":
                        return 443;
                    default:
                        return location.port
                    }
                }
                t.parse = function(e) {
                    var t = document.createElement("a");
                    return t.href = e,
                    {
                        href: t.href,
                        host: t.host || location.host,
                        port: "0" === t.port || "" === t.port ? port(t.protocol) : t.port,
                        hash: t.hash,
                        hostname: t.hostname || location.hostname,
                        pathname: "/" != t.pathname.charAt(0) ? "/" + t.pathname : t.pathname,
                        protocol: t.protocol && ":" != t.protocol ? t.protocol : location.protocol,
                        search: t.search,
                        query: t.search.slice(1)
                    }
                }
                ,
                t.isAbsolute = function(e) {
                    return 0 == e.indexOf("//") || !!~e.indexOf("://")
                }
                ,
                t.isRelative = function(e) {
                    return !t.isAbsolute(e)
                }
                ,
                t.isCrossDomain = function(e) {
                    e = t.parse(e);
                    var n = t.parse(window.location.href);
                    return e.hostname !== n.hostname || e.port !== n.port || e.protocol !== n.protocol
                }
            }
            ))
              , a = 1e3
              , u = 60 * a
              , c = 60 * u
              , l = 24 * c
              , p = 365.25 * l
              , ms = function(e, t) {
                t = t || {};
                var n = typeof e;
                if ("string" === n && e.length > 0)
                    return parse$1(e);
                if ("number" === n && !1 === isNaN(e))
                    return t.long ? fmtLong(e) : fmtShort(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            };
            function parse$1(e) {
                if (!((e = String(e)).length > 100)) {
                    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (t) {
                        var n = parseFloat(t[1]);
                        switch ((t[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * p;
                        case "days":
                        case "day":
                        case "d":
                            return n * l;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * c;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * u;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * a;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return
                        }
                    }
                }
            }
            function fmtShort(e) {
                return e >= l ? Math.round(e / l) + "d" : e >= c ? Math.round(e / c) + "h" : e >= u ? Math.round(e / u) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms"
            }
            function fmtLong(e) {
                return plural(e, l, "day") || plural(e, c, "hour") || plural(e, u, "minute") || plural(e, a, "second") || e + " ms"
            }
            function plural(e, t, n) {
                if (!(e < t))
                    return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
            }
            var d = createCommonjsModule((function(e, t) {
                function selectColor(e) {
                    var n, r = 0;
                    for (n in e)
                        r = (r << 5) - r + e.charCodeAt(n),
                        r |= 0;
                    return t.colors[Math.abs(r) % t.colors.length]
                }
                function createDebug(e) {
                    var n;
                    function debug() {
                        if (debug.enabled) {
                            var e = debug
                              , r = +new Date
                              , o = r - (n || r);
                            e.diff = o,
                            e.prev = n,
                            e.curr = r,
                            n = r;
                            for (var i = new Array(arguments.length), s = 0; s < i.length; s++)
                                i[s] = arguments[s];
                            i[0] = t.coerce(i[0]),
                            "string" != typeof i[0] && i.unshift("%O");
                            var a = 0;
                            i[0] = i[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                                if ("%%" === n)
                                    return n;
                                a++;
                                var o = t.formatters[r];
                                if ("function" == typeof o) {
                                    var s = i[a];
                                    n = o.call(e, s),
                                    i.splice(a, 1),
                                    a--
                                }
                                return n
                            }
                            )),
                            t.formatArgs.call(e, i),
                            (debug.log || t.log || console.log.bind(console)).apply(e, i)
                        }
                    }
                    return debug.namespace = e,
                    debug.enabled = t.enabled(e),
                    debug.useColors = t.useColors(),
                    debug.color = selectColor(e),
                    debug.destroy = destroy,
                    "function" == typeof t.init && t.init(debug),
                    t.instances.push(debug),
                    debug
                }
                function destroy() {
                    var e = t.instances.indexOf(this);
                    return -1 !== e && (t.instances.splice(e, 1),
                    !0)
                }
                function enable(e) {
                    var n;
                    t.save(e),
                    t.names = [],
                    t.skips = [];
                    var r = ("string" == typeof e ? e : "").split(/[\s,]+/)
                      , o = r.length;
                    for (n = 0; n < o; n++)
                        r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
                    for (n = 0; n < t.instances.length; n++) {
                        var i = t.instances[n];
                        i.enabled = t.enabled(i.namespace)
                    }
                }
                function disable() {
                    t.enable("")
                }
                function enabled(e) {
                    if ("*" === e[e.length - 1])
                        return !0;
                    var n, r;
                    for (n = 0,
                    r = t.skips.length; n < r; n++)
                        if (t.skips[n].test(e))
                            return !1;
                    for (n = 0,
                    r = t.names.length; n < r; n++)
                        if (t.names[n].test(e))
                            return !0;
                    return !1
                }
                function coerce(e) {
                    return e instanceof Error ? e.stack || e.message : e
                }
                (t = e.exports = createDebug.debug = createDebug.default = createDebug).coerce = coerce,
                t.disable = disable,
                t.enable = enable,
                t.enabled = enabled,
                t.humanize = ms,
                t.instances = [],
                t.names = [],
                t.skips = [],
                t.formatters = {}
            }
            ))
              , f = createCommonjsModule((function(e, t) {
                function useColors() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                }
                function formatArgs(e) {
                    var n = this.useColors;
                    if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff),
                    n) {
                        var r = "color: " + this.color;
                        e.splice(1, 0, r, "color: inherit");
                        var o = 0
                          , i = 0;
                        e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                            "%%" !== e && (o++,
                            "%c" === e && (i = o))
                        }
                        )),
                        e.splice(i, 0, r)
                    }
                }
                function log() {
                    return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }
                function save(e) {
                    try {
                        null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                    } catch (n) {}
                }
                function load() {
                    var e;
                    try {
                        e = t.storage.debug
                    } catch (n) {}
                    return !e && void 0 !== r && "env"in r && (e = r.env.DEBUG),
                    e
                }
                function localstorage() {
                    try {
                        return window.localStorage
                    } catch (e) {}
                }
                (t = e.exports = d).log = log,
                t.formatArgs = formatArgs,
                t.save = save,
                t.load = load,
                t.useColors = useColors,
                t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : localstorage(),
                t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
                t.formatters.j = function(e) {
                    try {
                        return JSON.stringify(e)
                    } catch (t) {
                        return "[UnexpectedJSONParseError]: " + t.message
                    }
                }
                ,
                t.enable(load())
            }
            ))
              , h = f("cookie")
              , componentCookie = function(e, t, n) {
                switch (arguments.length) {
                case 3:
                case 2:
                    return set$1(e, t, n);
                case 1:
                    return get$1(e);
                default:
                    return all()
                }
            };
            function set$1(e, t, n) {
                n = n || {};
                var r = encode(e) + "=" + encode(t);
                null == t && (n.maxage = -1),
                n.maxage && (n.expires = new Date(+new Date + n.maxage)),
                n.path && (r += "; path=" + n.path),
                n.domain && (r += "; domain=" + n.domain),
                n.expires && (r += "; expires=" + n.expires.toUTCString()),
                n.secure && (r += "; secure"),
                document.cookie = r
            }
            function all() {
                var e;
                try {
                    e = document.cookie
                } catch (t) {
                    return "undefined" != typeof console && "function" == typeof console.error && console.error(t.stack || t),
                    {}
                }
                return parse(e)
            }
            function get$1(e) {
                return all()[e]
            }
            function parse(e) {
                var t, n = {}, r = e.split(/ *; */);
                if ("" == r[0])
                    return n;
                for (var o = 0; o < r.length; ++o)
                    n[decode((t = r[o].split("="))[0])] = decode(t[1]);
                return n
            }
            function encode(e) {
                try {
                    return encodeURIComponent(e)
                } catch (t) {
                    h("error `encode(%o)` - %o", e, t)
                }
            }
            function decode(e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    h("error `decode(%o)` - %o", e, t)
                }
            }
            var g, v = createCommonjsModule((function(e, t) {
                var n = s.parse;
                function domain(e) {
                    for (var n = t.cookie, r = t.levels(e), o = 0; o < r.length; ++o) {
                        var i = "__tld__"
                          , s = r[o]
                          , a = {
                            domain: "." + s
                        };
                        if (n(i, 1, a),
                        n(i))
                            return n(i, null, a),
                            s
                    }
                    return ""
                }
                domain.levels = function(e) {
                    var t = n(e).hostname.split(".")
                      , r = t[t.length - 1]
                      , o = [];
                    if (4 === t.length && r === parseInt(r, 10))
                        return o;
                    if (t.length <= 1)
                        return o;
                    for (var i = t.length - 2; i >= 0; --i)
                        o.push(t.slice(i).join("."));
                    return o
                }
                ,
                domain.cookie = componentCookie,
                t = e.exports = domain
            }
            )), m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , y = Object.prototype.toString, type = function(e) {
                switch (y.call(e)) {
                case "[object Date]":
                    return "date";
                case "[object RegExp]":
                    return "regexp";
                case "[object Arguments]":
                    return "arguments";
                case "[object Array]":
                    return "array";
                case "[object Error]":
                    return "error"
                }
                return null === e ? "null" : void 0 === e ? "undefined" : e != e ? "nan" : e && 1 === e.nodeType ? "element" : "undefined" != typeof Buffer && Buffer.isBuffer(e) ? "buffer" : void 0 === (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e)) ? "undefined" : m(e)
            }, _ = "WARN", b = {
                DISABLE: 0,
                ERROR: 1,
                WARN: 2,
                INFO: 3
            }, w = {
                error: function error(e) {
                    _ >= b.ERROR && I(e)
                },
                warn: function warn(e) {
                    _ >= b.WARN && I(e)
                },
                info: function info(e) {
                    _ >= b.INFO && I(e)
                }
            }, I = function _log(e) {
                try {
                    console.log("[Amplitude] " + e)
                } catch (t) {}
            }, E = function truncate(e) {
                if ("array" === type(e))
                    for (var t = 0; t < e.length; t++)
                        e[t] = truncate(e[t]);
                else if ("object" === type(e))
                    for (var n in e)
                        e.hasOwnProperty(n) && (e[n] = truncate(e[n]));
                else
                    e = S(e);
                return e
            }, S = function _truncateValue(e) {
                return "string" === type(e) && e.length > t.MAX_STRING_LENGTH ? e.substring(0, t.MAX_STRING_LENGTH) : e
            }, C = function validateInput(e, t, n) {
                return type(e) === n || (w.error("Invalid " + t + " input type. Expected " + n + " but received " + type(e)),
                !1)
            }, O = function validateProperties(e) {
                var n = type(e);
                if ("object" !== n)
                    return w.error("Error: invalid properties format. Expecting Javascript object, received " + n + ", ignoring"),
                    {};
                if (Object.keys(e).length > t.MAX_PROPERTY_KEYS)
                    return w.error("Error: too many properties (more than 1000), ignoring"),
                    {};
                var r = {};
                for (var o in e)
                    if (e.hasOwnProperty(o)) {
                        var i = o
                          , s = type(i);
                        "string" !== s && (i = String(i),
                        w.warn("WARNING: Non-string property key, received type " + s + ', coercing to string "' + i + '"'));
                        var a = N(i, e[o]);
                        null !== a && (r[i] = a)
                    }
                return r
            }, A = ["null", "nan", "undefined", "function", "arguments", "regexp", "element"], N = function validatePropertyValue(e, t) {
                var n = type(t);
                if (-1 !== A.indexOf(n))
                    w.warn('WARNING: Property key "' + e + '" with invalid value type ' + n + ", ignoring"),
                    t = null;
                else if ("error" === n)
                    t = String(t),
                    w.warn('WARNING: Property key "' + e + '" with value type error, coercing to ' + t);
                else if ("array" === n) {
                    for (var r = [], o = 0; o < t.length; o++) {
                        var i = t[o]
                          , s = type(i);
                        "array" !== s && "object" !== s ? r.push(validatePropertyValue(e, i)) : w.warn("WARNING: Cannot have " + s + " nested in an array property value, skipping")
                    }
                    t = r
                } else
                    "object" === n && (t = O(t));
                return t
            }, T = function validateGroups(e) {
                var t = type(e);
                if ("object" !== t)
                    return w.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"),
                    {};
                var n = {};
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var o = r
                          , i = type(o);
                        "string" !== i && (o = String(o),
                        w.warn("WARNING: Non-string groupType, received type " + i + ', coercing to string "' + o + '"'));
                        var s = x(o, e[r]);
                        null !== s && (n[o] = s)
                    }
                return n
            }, x = function validateGroupName(e, t) {
                var n = type(t);
                if ("string" === n)
                    return t;
                if ("date" === n || "number" === n || "boolean" === n)
                    return t = String(t),
                    w.warn("WARNING: Non-string groupName, received type " + n + ', coercing to string "' + t + '"'),
                    t;
                if ("array" === n) {
                    for (var r = [], o = 0; o < t.length; o++) {
                        var i = t[o]
                          , s = type(i);
                        "array" !== s && "object" !== s ? "string" === s ? r.push(i) : "date" !== s && "number" !== s && "boolean" !== s || (i = String(i),
                        w.warn("WARNING: Non-string groupName, received type " + s + ', coercing to string "' + i + '"'),
                        r.push(i)) : w.warn("WARNING: Skipping nested " + s + " in array groupName")
                    }
                    return r
                }
                w.warn("WARNING: Non-string groupName, received type " + n + ". Please use strings or array of strings for groupName")
            }, j = {
                setLogLevel: function setLogLevel(e) {
                    _ = b[e] || _
                },
                getLogLevel: function getLogLevel() {
                    return _
                },
                log: w,
                isEmptyString: function isEmptyString(e) {
                    return !e || 0 === e.length
                },
                getQueryParam: function getQueryParam(e, t) {
                    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                    var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                    return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "))
                },
                sessionStorageEnabled: function sessionStorageEnabled() {
                    try {
                        if (window.sessionStorage)
                            return !0
                    } catch (e) {}
                    return !1
                },
                truncate: E,
                validateGroups: T,
                validateInput: C,
                validateProperties: O
            }, P = {
                expirationDays: void 0,
                domain: void 0
            }, R = function options(e) {
                if (0 === arguments.length)
                    return P;
                e = e || {},
                P.expirationDays = e.expirationDays;
                var t = j.isEmptyString(e.domain) ? "." + v(window.location.href) : e.domain
                  , n = Math.random();
                P.domain = t,
                F("amplitude_test", n);
                var r = U("amplitude_test");
                r && r === n || (t = null),
                M("amplitude_test"),
                P.domain = t
            }, k = function _domainSpecific(e) {
                var t = "";
                return P.domain && (t = "." === P.domain.charAt(0) ? P.domain.substring(1) : P.domain),
                e + t
            }, U = function get(e) {
                try {
                    for (var t = k(e) + "=", n = document.cookie.split(";"), r = null, o = 0; o < n.length; o++) {
                        for (var s = n[o]; " " === s.charAt(0); )
                            s = s.substring(1, s.length);
                        if (0 === s.indexOf(t)) {
                            r = s.substring(t.length, s.length);
                            break
                        }
                    }
                    return r ? JSON.parse(i.decode(r)) : null
                } catch (a) {
                    return null
                }
            }, F = function set(e, t) {
                try {
                    return D(k(e), i.encode(JSON.stringify(t)), P),
                    !0
                } catch (n) {
                    return !1
                }
            }, D = function _set(e, t, n) {
                var r = null !== t ? n.expirationDays : -1;
                if (r) {
                    var o = new Date;
                    o.setTime(o.getTime() + 24 * r * 60 * 60 * 1e3),
                    r = o
                }
                var i = e + "=" + t;
                r && (i += "; expires=" + r.toUTCString()),
                i += "; path=/",
                n.domain && (i += "; domain=" + n.domain),
                document.cookie = i
            }, M = function remove(e) {
                try {
                    return D(k(e), null, P),
                    !0
                } catch (t) {
                    return !1
                }
            }, L = {
                reset: function reset() {
                    P = {
                        expirationDays: void 0,
                        domain: void 0
                    }
                },
                options: R,
                get: U,
                set: F,
                remove: M
            };
            function windowLocalStorageAvailable() {
                var e, t = new Date;
                try {
                    return window.localStorage.setItem(t, t),
                    e = window.localStorage.getItem(t) === String(t),
                    window.localStorage.removeItem(t),
                    e
                } catch (n) {}
                return !1
            }
            if (windowLocalStorageAvailable())
                g = window.localStorage;
            else if (window.globalStorage)
                try {
                    g = window.globalStorage[window.location.hostname]
                } catch (Tn) {}
            else {
                var q = document.createElement("div")
                  , V = "localStorage";
                q.style.display = "none",
                document.getElementsByTagName("head")[0].appendChild(q),
                q.addBehavior && (q.addBehavior("#default#userdata"),
                g = {
                    length: 0,
                    setItem: function setItem(e, t) {
                        q.load(V),
                        q.getAttribute(e) || this.length++,
                        q.setAttribute(e, t),
                        q.save(V)
                    },
                    getItem: function getItem(e) {
                        return q.load(V),
                        q.getAttribute(e)
                    },
                    removeItem: function removeItem(e) {
                        q.load(V),
                        q.getAttribute(e) && this.length--,
                        q.removeAttribute(e),
                        q.save(V)
                    },
                    clear: function clear() {
                        q.load(V);
                        for (var e, t = 0; e = q.XMLDocument.documentElement.attributes[t++]; )
                            q.removeAttribute(e.name);
                        q.save(V),
                        this.length = 0
                    },
                    key: function key(e) {
                        return q.load(V),
                        q.XMLDocument.documentElement.attributes[e]
                    }
                },
                q.load(V),
                g.length = q.XMLDocument.documentElement.attributes.length)
            }
            g || (g = {
                length: 0,
                setItem: function setItem(e, t) {},
                getItem: function getItem(e) {},
                removeItem: function removeItem(e) {},
                clear: function clear() {},
                key: function key(e) {}
            });
            var G = g
              , K = function cookieStorage() {
                this.storage = null
            };
            K.prototype._cookiesEnabled = function() {
                var e, n = String(new Date);
                try {
                    return L.set(t.COOKIE_TEST, n),
                    e = L.get(t.COOKIE_TEST) === n,
                    L.remove(t.COOKIE_TEST),
                    e
                } catch (Tn) {}
                return !1
            }
            ,
            K.prototype.getStorage = function() {
                if (null !== this.storage)
                    return this.storage;
                if (this._cookiesEnabled())
                    this.storage = L;
                else {
                    var e = "amp_cookiestore_";
                    this.storage = {
                        _options: {
                            expirationDays: void 0,
                            domain: void 0
                        },
                        reset: function reset() {
                            this._options = {
                                expirationDays: void 0,
                                domain: void 0
                            }
                        },
                        options: function options(e) {
                            return 0 === arguments.length || (e = e || {},
                            this._options.expirationDays = e.expirationDays || this._options.expirationDays,
                            this._options.domain = e.domain || this._options.domain || window.location.hostname),
                            this._options
                        },
                        get: function get(t) {
                            try {
                                return JSON.parse(G.getItem(e + t))
                            } catch (Tn) {}
                            return null
                        },
                        set: function set(t, n) {
                            try {
                                return G.setItem(e + t, JSON.stringify(n)),
                                !0
                            } catch (Tn) {}
                            return !1
                        },
                        remove: function remove(t) {
                            try {
                                G.removeItem(e + t)
                            } catch (Tn) {
                                return !1
                            }
                        }
                    }
                }
                return this.storage
            }
            ;
            var $ = function getUtmData(e, t) {
                var n = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : ""
                  , r = function fetchParam(e, t, n, r) {
                    return j.getQueryParam(e, t) || j.getQueryParam(n, r)
                }
                  , o = r("utm_source", t, "utmcsr", n)
                  , i = r("utm_medium", t, "utmcmd", n)
                  , s = r("utm_campaign", t, "utmccn", n)
                  , a = r("utm_term", t, "utmctr", n)
                  , u = r("utm_content", t, "utmcct", n)
                  , c = {}
                  , l = function addIfNotNull(e, t) {
                    j.isEmptyString(t) || (c[e] = t)
                };
                return l("utm_source", o),
                l("utm_medium", i),
                l("utm_campaign", s),
                l("utm_term", a),
                l("utm_content", u),
                c
            }
              , B = "$add"
              , J = "$append"
              , z = "$clearAll"
              , W = "$prepend"
              , H = "$set"
              , Q = "$setOnce"
              , Y = "$unset"
              , X = function Identify() {
                this.userPropertiesOperations = {},
                this.properties = []
            };
            X.prototype.add = function(e, t) {
                return "number" === type(t) || "string" === type(t) ? this._addOperation(B, e, t) : j.log.error("Unsupported type for value: " + type(t) + ", expecting number or string"),
                this
            }
            ,
            X.prototype.append = function(e, t) {
                return this._addOperation(J, e, t),
                this
            }
            ,
            X.prototype.clearAll = function() {
                return Object.keys(this.userPropertiesOperations).length > 0 ? (this.userPropertiesOperations.hasOwnProperty(z) || j.log.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll"),
                this) : (this.userPropertiesOperations[z] = "-",
                this)
            }
            ,
            X.prototype.prepend = function(e, t) {
                return this._addOperation(W, e, t),
                this
            }
            ,
            X.prototype.set = function(e, t) {
                return this._addOperation(H, e, t),
                this
            }
            ,
            X.prototype.setOnce = function(e, t) {
                return this._addOperation(Q, e, t),
                this
            }
            ,
            X.prototype.unset = function(e) {
                return this._addOperation(Y, e, "-"),
                this
            }
            ,
            X.prototype._addOperation = function(e, t, n) {
                this.userPropertiesOperations.hasOwnProperty(z) ? j.log.error("This identify already contains a $clearAll operation, skipping operation " + e) : -1 === this.properties.indexOf(t) ? (this.userPropertiesOperations.hasOwnProperty(e) || (this.userPropertiesOperations[e] = {}),
                this.userPropertiesOperations[e][t] = n,
                this.properties.push(t)) : j.log.error('User property "' + t + '" already used in this identify, skipping operation ' + e)
            }
            ;
            var Z = createCommonjsModule((function(t) {
                !function(e) {
                    function safeAdd(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                    }
                    function bitRotateLeft(e, t) {
                        return e << t | e >>> 32 - t
                    }
                    function md5cmn(e, t, n, r, o, i) {
                        return safeAdd(bitRotateLeft(safeAdd(safeAdd(t, e), safeAdd(r, i)), o), n)
                    }
                    function md5ff(e, t, n, r, o, i, s) {
                        return md5cmn(t & n | ~t & r, e, t, o, i, s)
                    }
                    function md5gg(e, t, n, r, o, i, s) {
                        return md5cmn(t & r | n & ~r, e, t, o, i, s)
                    }
                    function md5hh(e, t, n, r, o, i, s) {
                        return md5cmn(t ^ n ^ r, e, t, o, i, s)
                    }
                    function md5ii(e, t, n, r, o, i, s) {
                        return md5cmn(n ^ (t | ~r), e, t, o, i, s)
                    }
                    function binlMD5(e, t) {
                        var n, r, o, i, s;
                        e[t >> 5] |= 128 << t % 32,
                        e[14 + (t + 64 >>> 9 << 4)] = t;
                        var a = 1732584193
                          , u = -271733879
                          , c = -1732584194
                          , l = 271733878;
                        for (n = 0; n < e.length; n += 16)
                            r = a,
                            o = u,
                            i = c,
                            s = l,
                            a = md5ff(a, u, c, l, e[n], 7, -680876936),
                            l = md5ff(l, a, u, c, e[n + 1], 12, -389564586),
                            c = md5ff(c, l, a, u, e[n + 2], 17, 606105819),
                            u = md5ff(u, c, l, a, e[n + 3], 22, -1044525330),
                            a = md5ff(a, u, c, l, e[n + 4], 7, -176418897),
                            l = md5ff(l, a, u, c, e[n + 5], 12, 1200080426),
                            c = md5ff(c, l, a, u, e[n + 6], 17, -1473231341),
                            u = md5ff(u, c, l, a, e[n + 7], 22, -45705983),
                            a = md5ff(a, u, c, l, e[n + 8], 7, 1770035416),
                            l = md5ff(l, a, u, c, e[n + 9], 12, -1958414417),
                            c = md5ff(c, l, a, u, e[n + 10], 17, -42063),
                            u = md5ff(u, c, l, a, e[n + 11], 22, -1990404162),
                            a = md5ff(a, u, c, l, e[n + 12], 7, 1804603682),
                            l = md5ff(l, a, u, c, e[n + 13], 12, -40341101),
                            c = md5ff(c, l, a, u, e[n + 14], 17, -1502002290),
                            a = md5gg(a, u = md5ff(u, c, l, a, e[n + 15], 22, 1236535329), c, l, e[n + 1], 5, -165796510),
                            l = md5gg(l, a, u, c, e[n + 6], 9, -1069501632),
                            c = md5gg(c, l, a, u, e[n + 11], 14, 643717713),
                            u = md5gg(u, c, l, a, e[n], 20, -373897302),
                            a = md5gg(a, u, c, l, e[n + 5], 5, -701558691),
                            l = md5gg(l, a, u, c, e[n + 10], 9, 38016083),
                            c = md5gg(c, l, a, u, e[n + 15], 14, -660478335),
                            u = md5gg(u, c, l, a, e[n + 4], 20, -405537848),
                            a = md5gg(a, u, c, l, e[n + 9], 5, 568446438),
                            l = md5gg(l, a, u, c, e[n + 14], 9, -1019803690),
                            c = md5gg(c, l, a, u, e[n + 3], 14, -187363961),
                            u = md5gg(u, c, l, a, e[n + 8], 20, 1163531501),
                            a = md5gg(a, u, c, l, e[n + 13], 5, -1444681467),
                            l = md5gg(l, a, u, c, e[n + 2], 9, -51403784),
                            c = md5gg(c, l, a, u, e[n + 7], 14, 1735328473),
                            a = md5hh(a, u = md5gg(u, c, l, a, e[n + 12], 20, -1926607734), c, l, e[n + 5], 4, -378558),
                            l = md5hh(l, a, u, c, e[n + 8], 11, -2022574463),
                            c = md5hh(c, l, a, u, e[n + 11], 16, 1839030562),
                            u = md5hh(u, c, l, a, e[n + 14], 23, -35309556),
                            a = md5hh(a, u, c, l, e[n + 1], 4, -1530992060),
                            l = md5hh(l, a, u, c, e[n + 4], 11, 1272893353),
                            c = md5hh(c, l, a, u, e[n + 7], 16, -155497632),
                            u = md5hh(u, c, l, a, e[n + 10], 23, -1094730640),
                            a = md5hh(a, u, c, l, e[n + 13], 4, 681279174),
                            l = md5hh(l, a, u, c, e[n], 11, -358537222),
                            c = md5hh(c, l, a, u, e[n + 3], 16, -722521979),
                            u = md5hh(u, c, l, a, e[n + 6], 23, 76029189),
                            a = md5hh(a, u, c, l, e[n + 9], 4, -640364487),
                            l = md5hh(l, a, u, c, e[n + 12], 11, -421815835),
                            c = md5hh(c, l, a, u, e[n + 15], 16, 530742520),
                            a = md5ii(a, u = md5hh(u, c, l, a, e[n + 2], 23, -995338651), c, l, e[n], 6, -198630844),
                            l = md5ii(l, a, u, c, e[n + 7], 10, 1126891415),
                            c = md5ii(c, l, a, u, e[n + 14], 15, -1416354905),
                            u = md5ii(u, c, l, a, e[n + 5], 21, -57434055),
                            a = md5ii(a, u, c, l, e[n + 12], 6, 1700485571),
                            l = md5ii(l, a, u, c, e[n + 3], 10, -1894986606),
                            c = md5ii(c, l, a, u, e[n + 10], 15, -1051523),
                            u = md5ii(u, c, l, a, e[n + 1], 21, -2054922799),
                            a = md5ii(a, u, c, l, e[n + 8], 6, 1873313359),
                            l = md5ii(l, a, u, c, e[n + 15], 10, -30611744),
                            c = md5ii(c, l, a, u, e[n + 6], 15, -1560198380),
                            u = md5ii(u, c, l, a, e[n + 13], 21, 1309151649),
                            a = md5ii(a, u, c, l, e[n + 4], 6, -145523070),
                            l = md5ii(l, a, u, c, e[n + 11], 10, -1120210379),
                            c = md5ii(c, l, a, u, e[n + 2], 15, 718787259),
                            u = md5ii(u, c, l, a, e[n + 9], 21, -343485551),
                            a = safeAdd(a, r),
                            u = safeAdd(u, o),
                            c = safeAdd(c, i),
                            l = safeAdd(l, s);
                        return [a, u, c, l]
                    }
                    function binl2rstr(e) {
                        var t, n = "", r = 32 * e.length;
                        for (t = 0; t < r; t += 8)
                            n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                        return n
                    }
                    function rstr2binl(e) {
                        var t, n = [];
                        for (n[(e.length >> 2) - 1] = void 0,
                        t = 0; t < n.length; t += 1)
                            n[t] = 0;
                        var r = 8 * e.length;
                        for (t = 0; t < r; t += 8)
                            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                        return n
                    }
                    function rstrMD5(e) {
                        return binl2rstr(binlMD5(rstr2binl(e), 8 * e.length))
                    }
                    function rstrHMACMD5(e, t) {
                        var n, r, o = rstr2binl(e), i = [], s = [];
                        for (i[15] = s[15] = void 0,
                        o.length > 16 && (o = binlMD5(o, 8 * e.length)),
                        n = 0; n < 16; n += 1)
                            i[n] = 909522486 ^ o[n],
                            s[n] = 1549556828 ^ o[n];
                        return r = binlMD5(i.concat(rstr2binl(t)), 512 + 8 * t.length),
                        binl2rstr(binlMD5(s.concat(r), 640))
                    }
                    function rstr2hex(e) {
                        var t, n, r = "0123456789abcdef", o = "";
                        for (n = 0; n < e.length; n += 1)
                            t = e.charCodeAt(n),
                            o += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                        return o
                    }
                    function str2rstrUTF8(e) {
                        return unescape(encodeURIComponent(e))
                    }
                    function rawMD5(e) {
                        return rstrMD5(str2rstrUTF8(e))
                    }
                    function hexMD5(e) {
                        return rstr2hex(rawMD5(e))
                    }
                    function rawHMACMD5(e, t) {
                        return rstrHMACMD5(str2rstrUTF8(e), str2rstrUTF8(t))
                    }
                    function hexHMACMD5(e, t) {
                        return rstr2hex(rawHMACMD5(e, t))
                    }
                    function md5(e, t, n) {
                        return t ? n ? rawHMACMD5(t, e) : hexHMACMD5(t, e) : n ? rawMD5(e) : hexMD5(e)
                    }
                    t.exports ? t.exports = md5 : e.md5 = md5
                }(e)
            }
            ))
              , ee = "object" == typeof e && e && e.Object === Object && e
              , te = "object" == typeof self && self && self.Object === Object && self
              , ne = ee || te || Function("return this")()
              , re = ne.Symbol
              , oe = Object.prototype
              , ie = oe.hasOwnProperty
              , se = oe.toString
              , ae = re ? re.toStringTag : void 0;
            function getRawTag(e) {
                var t = ie.call(e, ae)
                  , n = e[ae];
                try {
                    e[ae] = void 0;
                    var r = !0
                } catch (Tn) {}
                var o = se.call(e);
                return r && (t ? e[ae] = n : delete e[ae]),
                o
            }
            var ue = getRawTag
              , ce = Object.prototype.toString;
            function objectToString(e) {
                return ce.call(e)
            }
            var le = objectToString
              , pe = "[object Null]"
              , de = "[object Undefined]"
              , fe = re ? re.toStringTag : void 0;
            function baseGetTag(e) {
                return null == e ? void 0 === e ? de : pe : fe && fe in Object(e) ? ue(e) : le(e)
            }
            var he = baseGetTag;
            function isObject(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
            var ge = isObject
              , ve = "[object AsyncFunction]"
              , me = "[object Function]"
              , ye = "[object GeneratorFunction]"
              , _e = "[object Proxy]";
            function isFunction(e) {
                if (!ge(e))
                    return !1;
                var t = he(e);
                return t == me || t == ye || t == ve || t == _e
            }
            var be, we = isFunction, Ie = ne["__core-js_shared__"], Ee = (be = /[^.]+$/.exec(Ie && Ie.keys && Ie.keys.IE_PROTO || "")) ? "Symbol(src)_1." + be : "";
            function isMasked(e) {
                return !!Ee && Ee in e
            }
            var Se = isMasked
              , Ce = Function.prototype.toString;
            function toSource(e) {
                if (null != e) {
                    try {
                        return Ce.call(e)
                    } catch (Tn) {}
                    try {
                        return e + ""
                    } catch (Tn) {}
                }
                return ""
            }
            var Oe = toSource
              , Ae = /[\\^$.*+?()[\]{}|]/g
              , Ne = /^\[object .+?Constructor\]$/
              , Te = Function.prototype
              , xe = Object.prototype
              , je = Te.toString
              , Pe = xe.hasOwnProperty
              , Re = RegExp("^" + je.call(Pe).replace(Ae, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            function baseIsNative(e) {
                return !(!ge(e) || Se(e)) && (we(e) ? Re : Ne).test(Oe(e))
            }
            var ke = baseIsNative;
            function getValue(e, t) {
                return null == e ? void 0 : e[t]
            }
            var Ue = getValue;
            function getNative(e, t) {
                var n = Ue(e, t);
                return ke(n) ? n : void 0
            }
            var Fe = getNative
              , De = function() {
                try {
                    var e = Fe(Object, "defineProperty");
                    return e({}, "", {}),
                    e
                } catch (Tn) {}
            }();
            function baseAssignValue(e, t, n) {
                "__proto__" == t && De ? De(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[t] = n
            }
            var Me = baseAssignValue;
            function eq(e, t) {
                return e === t || e != e && t != t
            }
            var Le = eq
              , qe = Object.prototype.hasOwnProperty;
            function assignValue(e, t, n) {
                var r = e[t];
                qe.call(e, t) && Le(r, n) && (void 0 !== n || t in e) || Me(e, t, n)
            }
            var Ve = assignValue;
            function copyObject(e, t, n, r) {
                var o = !n;
                n || (n = {});
                for (var i = -1, s = t.length; ++i < s; ) {
                    var a = t[i]
                      , u = r ? r(n[a], e[a], a, n, e) : void 0;
                    void 0 === u && (u = e[a]),
                    o ? Me(n, a, u) : Ve(n, a, u)
                }
                return n
            }
            var Ge = copyObject;
            function identity(e) {
                return e
            }
            var Ke = identity;
            function apply(e, t, n) {
                switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }
            var $e = apply
              , Be = Math.max;
            function overRest(e, t, n) {
                return t = Be(void 0 === t ? e.length - 1 : t, 0),
                function() {
                    for (var r = arguments, o = -1, i = Be(r.length - t, 0), s = Array(i); ++o < i; )
                        s[o] = r[t + o];
                    o = -1;
                    for (var a = Array(t + 1); ++o < t; )
                        a[o] = r[o];
                    return a[t] = n(s),
                    $e(e, this, a)
                }
            }
            var Je = overRest;
            function constant(e) {
                return function() {
                    return e
                }
            }
            var ze = constant
              , We = De ? function(e, t) {
                return De(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: ze(t),
                    writable: !0
                })
            }
            : Ke
              , He = 800
              , Qe = 16
              , Ye = Date.now;
            function shortOut(e) {
                var t = 0
                  , n = 0;
                return function() {
                    var r = Ye()
                      , o = Qe - (r - n);
                    if (n = r,
                    o > 0) {
                        if (++t >= He)
                            return arguments[0]
                    } else
                        t = 0;
                    return e.apply(void 0, arguments)
                }
            }
            var Xe = shortOut(We);
            function baseRest(e, t) {
                return Xe(Je(e, t, Ke), e + "")
            }
            var Ze = baseRest
              , et = 9007199254740991;
            function isLength(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= et
            }
            var tt = isLength;
            function isArrayLike(e) {
                return null != e && tt(e.length) && !we(e)
            }
            var nt = isArrayLike
              , rt = 9007199254740991
              , ot = /^(?:0|[1-9]\d*)$/;
            function isIndex(e, t) {
                return !!(t = null == t ? rt : t) && ("number" == typeof e || ot.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
            var it = isIndex;
            function isIterateeCall(e, t, n) {
                if (!ge(n))
                    return !1;
                var r = typeof t;
                return !!("number" == r ? nt(n) && it(t, n.length) : "string" == r && t in n) && Le(n[t], e)
            }
            var st = isIterateeCall;
            function createAssigner(e) {
                return Ze((function(t, n) {
                    var r = -1
                      , o = n.length
                      , i = o > 1 ? n[o - 1] : void 0
                      , s = o > 2 ? n[2] : void 0;
                    for (i = e.length > 3 && "function" == typeof i ? (o--,
                    i) : void 0,
                    s && st(n[0], n[1], s) && (i = o < 3 ? void 0 : i,
                    o = 1),
                    t = Object(t); ++r < o; ) {
                        var a = n[r];
                        a && e(t, a, r, i)
                    }
                    return t
                }
                ))
            }
            var at = createAssigner
              , ut = Object.prototype;
            function isPrototype(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || ut)
            }
            var ct = isPrototype;
            function baseTimes(e, t) {
                for (var n = -1, r = Array(e); ++n < e; )
                    r[n] = t(n);
                return r
            }
            var lt = baseTimes;
            function isObjectLike(e) {
                return null != e && "object" == typeof e
            }
            var pt = isObjectLike
              , dt = "[object Arguments]";
            function baseIsArguments(e) {
                return pt(e) && he(e) == dt
            }
            var ft = baseIsArguments
              , ht = Object.prototype
              , gt = ht.hasOwnProperty
              , vt = ht.propertyIsEnumerable
              , mt = ft(function() {
                return arguments
            }()) ? ft : function(e) {
                return pt(e) && gt.call(e, "callee") && !vt.call(e, "callee")
            }
              , yt = mt
              , _t = Array.isArray;
            function stubFalse() {
                return !1
            }
            var bt = stubFalse
              , wt = createCommonjsModule((function(e, t) {
                var n = t && !t.nodeType && t
                  , r = n && e && !e.nodeType && e
                  , o = r && r.exports === n ? ne.Buffer : void 0
                  , i = (o ? o.isBuffer : void 0) || bt;
                e.exports = i
            }
            ))
              , It = "[object Arguments]"
              , Et = "[object Array]"
              , St = "[object Boolean]"
              , Ct = "[object Date]"
              , Ot = "[object Error]"
              , At = "[object Function]"
              , Nt = "[object Map]"
              , Tt = "[object Number]"
              , xt = "[object Object]"
              , jt = "[object RegExp]"
              , Pt = "[object Set]"
              , Rt = "[object String]"
              , kt = "[object WeakMap]"
              , Ut = "[object ArrayBuffer]"
              , Ft = "[object DataView]"
              , Dt = "[object Float64Array]"
              , Mt = "[object Int8Array]"
              , Lt = "[object Int16Array]"
              , qt = "[object Int32Array]"
              , Vt = "[object Uint8Array]"
              , Gt = "[object Uint8ClampedArray]"
              , Kt = "[object Uint16Array]"
              , $t = "[object Uint32Array]"
              , Bt = {};
            function baseIsTypedArray(e) {
                return pt(e) && tt(e.length) && !!Bt[he(e)]
            }
            Bt["[object Float32Array]"] = Bt[Dt] = Bt[Mt] = Bt[Lt] = Bt[qt] = Bt[Vt] = Bt[Gt] = Bt[Kt] = Bt[$t] = !0,
            Bt[It] = Bt[Et] = Bt[Ut] = Bt[St] = Bt[Ft] = Bt[Ct] = Bt[Ot] = Bt[At] = Bt[Nt] = Bt[Tt] = Bt[xt] = Bt[jt] = Bt[Pt] = Bt[Rt] = Bt[kt] = !1;
            var Jt = baseIsTypedArray;
            function baseUnary(e) {
                return function(t) {
                    return e(t)
                }
            }
            var zt = baseUnary
              , Wt = createCommonjsModule((function(e, t) {
                var n = t && !t.nodeType && t
                  , r = n && e && !e.nodeType && e
                  , o = r && r.exports === n && ee.process
                  , i = function() {
                    try {
                        return o && o.binding && o.binding("util")
                    } catch (Tn) {}
                }();
                e.exports = i
            }
            ))
              , Ht = Wt && Wt.isTypedArray
              , Qt = Ht ? zt(Ht) : Jt
              , Yt = Object.prototype.hasOwnProperty;
            function arrayLikeKeys(e, t) {
                var n = _t(e)
                  , r = !n && yt(e)
                  , o = !n && !r && wt(e)
                  , i = !n && !r && !o && Qt(e)
                  , s = n || r || o || i
                  , a = s ? lt(e.length, String) : []
                  , u = a.length;
                for (var c in e)
                    !t && !Yt.call(e, c) || s && ("length" == c || o && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || it(c, u)) || a.push(c);
                return a
            }
            var Xt = arrayLikeKeys;
            function overArg(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
            var Zt = overArg(Object.keys, Object)
              , en = Object.prototype.hasOwnProperty;
            function baseKeys(e) {
                if (!ct(e))
                    return Zt(e);
                var t = [];
                for (var n in Object(e))
                    en.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
            var tn = baseKeys;
            function keys(e) {
                return nt(e) ? Xt(e) : tn(e)
            }
            var nn = keys
              , rn = Object.prototype.hasOwnProperty
              , on = at((function(e, t) {
                if (ct(t) || nt(t))
                    Ge(t, nn(t), e);
                else
                    for (var n in t)
                        rn.call(t, n) && Ve(e, n, t[n])
            }
            ));
            function hasOwnProperty$7(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var sn = Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ;
            function stringifyPrimitive(e) {
                switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
                }
            }
            function stringify(e, t, n, r) {
                return t = t || "&",
                n = n || "=",
                null === e && (e = void 0),
                "object" == typeof e ? map(an(e), (function(r) {
                    var o = encodeURIComponent(stringifyPrimitive(r)) + n;
                    return sn(e[r]) ? map(e[r], (function(e) {
                        return o + encodeURIComponent(stringifyPrimitive(e))
                    }
                    )).join(t) : o + encodeURIComponent(stringifyPrimitive(e[r]))
                }
                )).join(t) : r ? encodeURIComponent(stringifyPrimitive(r)) + n + encodeURIComponent(stringifyPrimitive(e)) : ""
            }
            function map(e, t) {
                if (e.map)
                    return e.map(t);
                for (var n = [], r = 0; r < e.length; r++)
                    n.push(t(e[r], r));
                return n
            }
            var an = Object.keys || function(e) {
                var t = [];
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }
            ;
            function parse$2(e, t, n, r) {
                t = t || "&",
                n = n || "=";
                var o = {};
                if ("string" != typeof e || 0 === e.length)
                    return o;
                var i = /\+/g;
                e = e.split(t);
                var s = 1e3;
                r && "number" == typeof r.maxKeys && (s = r.maxKeys);
                var a = e.length;
                s > 0 && a > s && (a = s);
                for (var u = 0; u < a; ++u) {
                    var c, l, p, d, f = e[u].replace(i, "%20"), h = f.indexOf(n);
                    h >= 0 ? (c = f.substr(0, h),
                    l = f.substr(h + 1)) : (c = f,
                    l = ""),
                    p = decodeURIComponent(c),
                    d = decodeURIComponent(l),
                    hasOwnProperty$7(o, p) ? sn(o[p]) ? o[p].push(d) : o[p] = [o[p], d] : o[p] = d
                }
                return o
            }
            var un = {
                encode: stringify,
                stringify: stringify,
                decode: parse$2,
                parse: parse$2
            }
              , cn = function Request(e, t) {
                this.url = e,
                this.data = t || {}
            };
            cn.prototype.send = function(e) {
                if (window.XDomainRequest) {
                    var t = new window.XDomainRequest;
                    t.open("POST", this.url, !0),
                    t.onload = function() {
                        e(200, t.responseText)
                    }
                    ,
                    t.onerror = function() {
                        "Request Entity Too Large" === t.responseText ? e(413, t.responseText) : e(500, t.responseText)
                    }
                    ,
                    t.ontimeout = function() {}
                    ,
                    t.onprogress = function() {}
                    ,
                    t.send(un.stringify(this.data))
                } else {
                    var n = new XMLHttpRequest;
                    n.open("POST", this.url, !0),
                    n.onreadystatechange = function() {
                        4 === n.readyState && e(n.status, n.responseText)
                    }
                    ,
                    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                    n.send(un.stringify(this.data))
                }
            }
            ;
            var ln = function Revenue() {
                this._price = null,
                this._productId = null,
                this._quantity = 1,
                this._revenueType = null,
                this._properties = null
            };
            ln.prototype.setProductId = function setProductId(e) {
                return "string" !== type(e) ? j.log.error("Unsupported type for productId: " + type(e) + ", expecting string") : j.isEmptyString(e) ? j.log.error("Invalid empty productId") : this._productId = e,
                this
            }
            ,
            ln.prototype.setQuantity = function setQuantity(e) {
                return "number" !== type(e) ? j.log.error("Unsupported type for quantity: " + type(e) + ", expecting number") : this._quantity = parseInt(e),
                this
            }
            ,
            ln.prototype.setPrice = function setPrice(e) {
                return "number" !== type(e) ? j.log.error("Unsupported type for price: " + type(e) + ", expecting number") : this._price = e,
                this
            }
            ,
            ln.prototype.setRevenueType = function setRevenueType(e) {
                return "string" !== type(e) ? j.log.error("Unsupported type for revenueType: " + type(e) + ", expecting string") : this._revenueType = e,
                this
            }
            ,
            ln.prototype.setEventProperties = function setEventProperties(e) {
                return "object" !== type(e) ? j.log.error("Unsupported type for eventProperties: " + type(e) + ", expecting object") : this._properties = j.validateProperties(e),
                this
            }
            ,
            ln.prototype._isValidRevenue = function _isValidRevenue() {
                return "number" === type(this._price) || (j.log.error("Invalid revenue, need to set price field"),
                !1)
            }
            ,
            ln.prototype._toJSONObject = function _toJSONObject() {
                var e = "object" === type(this._properties) ? this._properties : {};
                return null !== this._productId && (e[t.REVENUE_PRODUCT_ID] = this._productId),
                null !== this._quantity && (e[t.REVENUE_QUANTITY] = this._quantity),
                null !== this._price && (e[t.REVENUE_PRICE] = this._price),
                null !== this._revenueType && (e[t.REVENUE_REVENUE_TYPE] = this._revenueType),
                e
            }
            ;
            var pn = createCommonjsModule((function(t, n) {
                !function(e, r) {
                    var o = "0.7.10"
                      , i = ""
                      , s = "?"
                      , a = "function"
                      , u = "undefined"
                      , c = "object"
                      , l = "string"
                      , p = "major"
                      , d = "model"
                      , f = "name"
                      , h = "type"
                      , g = "vendor"
                      , v = "version"
                      , m = "architecture"
                      , y = "console"
                      , _ = "mobile"
                      , b = "tablet"
                      , w = "smarttv"
                      , I = "wearable"
                      , E = "embedded"
                      , S = {
                        extend: function(e, t) {
                            var n = {};
                            for (var r in e)
                                t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                            return n
                        },
                        has: function(e, t) {
                            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return typeof e === l ? e.split(".")[0] : r
                        }
                    }
                      , C = {
                        rgx: function() {
                            for (var e, t, n, o, i, s, l, p = 0, d = arguments; p < d.length && !s; ) {
                                var f = d[p]
                                  , h = d[p + 1];
                                if (typeof e === u)
                                    for (o in e = {},
                                    h)
                                        h.hasOwnProperty(o) && (typeof (i = h[o]) === c ? e[i[0]] = r : e[i] = r);
                                for (t = n = 0; t < f.length && !s; )
                                    if (s = f[t++].exec(this.getUA()))
                                        for (o = 0; o < h.length; o++)
                                            l = s[++n],
                                            typeof (i = h[o]) === c && i.length > 0 ? 2 == i.length ? typeof i[1] == a ? e[i[0]] = i[1].call(this, l) : e[i[0]] = i[1] : 3 == i.length ? typeof i[1] !== a || i[1].exec && i[1].test ? e[i[0]] = l ? l.replace(i[1], i[2]) : r : e[i[0]] = l ? i[1].call(this, l, i[2]) : r : 4 == i.length && (e[i[0]] = l ? i[3].call(this, l.replace(i[1], i[2])) : r) : e[i] = l || r;
                                p += 2
                            }
                            return e
                        },
                        str: function(e, t) {
                            for (var n in t)
                                if (typeof t[n] === c && t[n].length > 0) {
                                    for (var o = 0; o < t[n].length; o++)
                                        if (S.has(t[n][o], e))
                                            return n === s ? r : n
                                } else if (S.has(t[n], e))
                                    return n === s ? r : n;
                            return e
                        }
                    }
                      , O = {
                        browser: {
                            oldsafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            },
                            name: {
                                "Opera Mobile": "Opera Mobi",
                                "IE Mobile": "IEMobile"
                            }
                        },
                        device: {
                            amazon: {
                                model: {
                                    "Fire Phone": ["SD", "KF"]
                                }
                            },
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                },
                                name: {
                                    "Windows Phone": "Windows Phone OS"
                                }
                            }
                        }
                    }
                      , A = {
                        browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [f, v], [/(OPiOS)[\/\s]+([\w\.]+)/i], [[f, "Opera Mini"], v], [/\s(opr)\/([\w\.]+)/i], [[f, "Opera"], v], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [f, v], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[f, "IE"], v], [/(edge)\/((\d+)?[\w\.]+)/i], [f, v], [/(yabrowser)\/([\w\.]+)/i], [[f, "Yandex"], v], [/(comodo_dragon)\/([\w\.]+)/i], [[f, /_/g, " "], v], [/((?:android.+)crmo|crios)\/([\w\.]+)/i, /android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i], [[f, "Chrome Mobile"], v], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [f, v], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i], [[f, "UCBrowser"], v], [/(dolfin)\/([\w\.]+)/i], [[f, "Dolphin"], v], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [v, [f, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [v, [f, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [v, [f, "Facebook"]], [/fxios\/([\w\.-]+)/i], [v, [f, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [v, [f, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [v, f], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [f, [v, C.str, O.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [f, v], [/(blackberry)\\s?\/([\w\.]+)/i], [[f, "BlackBerry"], v], [/(navigator|netscape)\/([\w\.-]+)/i], [[f, "Netscape"], v], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [f, v]],
                        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[m, "amd64"]], [/(ia32(?=;))/i], [[m, S.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[m, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[m, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[m, /ower/, "", S.lowerize]], [/(sun4\w)[;\)]/i], [[m, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[m, S.lowerize]]],
                        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [d, g, [h, b]], [/applecoremedia\/[\w\.]+ \((ipad)/], [d, [g, "Apple"], [h, b]], [/(apple\s{0,1}tv)/i], [[d, "Apple TV"], [g, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [g, d, [h, b]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [d, [g, "Amazon"], [h, b]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[d, C.str, O.device.amazon.model], [g, "Amazon"], [h, _]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [d, g, [h, _]], [/\((ip[honed|\s\w*]+);/i], [d, [g, "Apple"], [h, _]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [g, d, [h, _]], [/\(bb10;\s(\w+)/i], [d, [g, "BlackBerry"], [h, _]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [d, [g, "Asus"], [h, b]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[g, "Sony"], [d, "Xperia Tablet"], [h, b]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[g, "Sony"], [d, "Xperia Phone"], [h, _]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [g, d, [h, y]], [/android.+;\s(shield)\sbuild/i], [d, [g, "Nvidia"], [h, y]], [/(playstation\s[34portablevi]+)/i], [d, [g, "Sony"], [h, y]], [/(sprint\s(\w+))/i], [[g, C.str, O.device.sprint.vendor], [d, C.str, O.device.sprint.model], [h, _]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [g, d, [h, b]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [g, [d, /_/g, " "], [h, _]], [/(nexus\s9)/i], [d, [g, "HTC"], [h, b]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [d, [g, "Microsoft"], [h, y]], [/(kin\.[onetw]{3})/i], [[d, /\./g, " "], [g, "Microsoft"], [h, _]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i], [d, [g, "Motorola"], [h, _]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [d, [g, "Motorola"], [h, b]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[g, "Samsung"], d, [h, b]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[g, "Samsung"], d, [h, _]], [/(samsung);smarttv/i], [g, d, [h, w]], [/\(dtv[\);].+(aquos)/i], [d, [g, "Sharp"], [h, w]], [/sie-(\w+)*/i], [d, [g, "Siemens"], [h, _]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[g, "Nokia"], d, [h, _]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [d, [g, "Acer"], [h, b]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[g, "LG"], d, [h, b]], [/(lg) netcast\.tv/i], [g, d, [h, w]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [d, [g, "LG"], [h, _]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [d, [g, "Lenovo"], [h, b]], [/linux;.+((jolla));/i], [g, d, [h, _]], [/((pebble))app\/[\d\.]+\s/i], [g, d, [h, I]], [/android.+;\s(glass)\s\d/i], [d, [g, "Google"], [h, I]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [[d, /_/g, " "], [g, "Xiaomi"], [h, _]], [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i], [[h, S.lowerize], g, d]],
                        engine: [[/windows.+\sedge\/([\w\.]+)/i], [v, [f, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [f, v], [/rv\:([\w\.]+).*(gecko)/i], [v, f]],
                        os: [[/microsoft\s(windows)\s(vista|xp)/i], [f, v], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [[f, C.str, O.os.windows.name], [v, C.str, O.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[f, "Windows"], [v, C.str, O.os.windows.version]], [/\((bb)(10);/i], [[f, "BlackBerry"], v], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [f, v], [/(symbian\s?o?s?|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[f, "Symbian"], v], [/\((series40);/i], [f], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[f, "Firefox OS"], v], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [[f, "Linux"], v], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[f, "Chromium OS"], v], [/(sunos)\s?([\w\.]+\d)*/i], [[f, "Solaris"], v], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [[f, "Linux"], v], [/(iphone)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[f, "iPhone"], [v, /_/g, "."]], [/(ipad)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[f, "iPad"], [v, /_/g, "."]], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[f, "iOS"], [v, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[f, "Mac"], [v, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [f, v]]
                    }
                      , UAParser = function(t, n) {
                        if (!(this instanceof UAParser))
                            return new UAParser(t,n).getResult();
                        var r = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : i)
                          , o = n ? S.extend(A, n) : A;
                        return this.getBrowser = function() {
                            var e = C.rgx.apply(this, o.browser);
                            return e.major = S.major(e.version),
                            e
                        }
                        ,
                        this.getCPU = function() {
                            return C.rgx.apply(this, o.cpu)
                        }
                        ,
                        this.getDevice = function() {
                            return C.rgx.apply(this, o.device)
                        }
                        ,
                        this.getEngine = function() {
                            return C.rgx.apply(this, o.engine)
                        }
                        ,
                        this.getOS = function() {
                            return C.rgx.apply(this, o.os)
                        }
                        ,
                        this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }
                        ,
                        this.getUA = function() {
                            return r
                        }
                        ,
                        this.setUA = function(e) {
                            return r = e,
                            this
                        }
                        ,
                        this
                    };
                    UAParser.VERSION = o,
                    UAParser.BROWSER = {
                        NAME: f,
                        MAJOR: p,
                        VERSION: v
                    },
                    UAParser.CPU = {
                        ARCHITECTURE: m
                    },
                    UAParser.DEVICE = {
                        MODEL: d,
                        VENDOR: g,
                        TYPE: h,
                        CONSOLE: y,
                        MOBILE: _,
                        SMARTTV: w,
                        TABLET: b,
                        WEARABLE: I,
                        EMBEDDED: E
                    },
                    UAParser.ENGINE = {
                        NAME: f,
                        VERSION: v
                    },
                    UAParser.OS = {
                        NAME: f,
                        VERSION: v
                    },
                    "object" !== u ? ("object" !== u && t.exports && (n = t.exports = UAParser),
                    n.UAParser = UAParser) : typeof r === a && r.amd ? r("ua-parser-js", [], (function() {
                        return UAParser
                    }
                    )) : e.UAParser = UAParser;
                    var N = e.jQuery || e.Zepto;
                    if (typeof N !== u) {
                        var T = new UAParser;
                        N.ua = T.getResult(),
                        N.ua.get = function() {
                            return T.getUA()
                        }
                        ,
                        N.ua.set = function(e) {
                            T.setUA(e);
                            var t = T.getResult();
                            for (var n in t)
                                N.ua[n] = t[n]
                        }
                    }
                }("object" == typeof window ? window : e)
            }
            ))
              , dn = function uuid(e) {
                return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid)
            }
              , fn = "4.2.1"
              , hn = {
                apiEndpoint: "",
                cookieExpiration: 3650,
                cookieName: "amplitude_id",
                domain: "",
                includeReferrer: !1,
                includeUtm: !1,
                language: function getLanguage() {
                    return navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || void 0
                }(),
                logLevel: "WARN",
                optOut: !1,
                platform: "Web",
                savedMaxCount: 1e3,
                saveEvents: !0,
                sessionTimeout: 18e5,
                unsentKey: "amplitude_unsent",
                unsentIdentifyKey: "amplitude_unsent_identify",
                uploadBatchSize: 100,
                batchEvents: !1,
                eventUploadThreshold: 30,
                eventUploadPeriodMillis: 3e4,
                forceHttps: !0,
                includeGclid: !1,
                saveParamsReferrerOncePerSession: !0,
                deviceIdFromUrlParam: !1
            }
              , gn = function AmplitudeClient(e) {
                this._instanceName = j.isEmptyString(e) ? t.DEFAULT_INSTANCE : e.toLowerCase(),
                this._legacyStorageSuffix = this._instanceName === t.DEFAULT_INSTANCE ? "" : "_" + this._instanceName,
                this._unsentEvents = [],
                this._unsentIdentifys = [],
                this._ua = new pn(navigator.userAgent).getResult(),
                this.options = on({}, hn),
                this.cookieStorage = (new K).getStorage(),
                this._q = [],
                this._sending = !1,
                this._updateScheduled = !1,
                this._eventId = 0,
                this._identifyId = 0,
                this._lastEventTime = null,
                this._newSession = !1,
                this._sequenceNumber = 0,
                this._sessionId = null,
                this._userAgent = navigator && navigator.userAgent || null
            };
            gn.prototype.Identify = X,
            gn.prototype.Revenue = ln,
            gn.prototype.init = function init(e, n, r, o) {
                if ("string" !== type(e) || j.isEmptyString(e))
                    j.log.error("Invalid apiKey. Please re-initialize with a valid apiKey");
                else
                    try {
                        if (this.options.apiKey = e,
                        this._storageSuffix = "_" + e + this._legacyStorageSuffix,
                        vn(this.options, r),
                        this.cookieStorage.options({
                            expirationDays: this.options.cookieExpiration,
                            domain: this.options.domain
                        }),
                        this.options.domain = this.cookieStorage.options().domain,
                        this._instanceName === t.DEFAULT_INSTANCE && mn(this),
                        yn(this),
                        this.options.deviceId = "object" === type(r) && "string" === type(r.deviceId) && !j.isEmptyString(r.deviceId) && r.deviceId || this.options.deviceIdFromUrlParam && this._getDeviceIdFromUrlParam(this._getUrlParams()) || this.options.deviceId || dn() + "R",
                        this.options.userId = "string" === type(n) && !j.isEmptyString(n) && n || "number" === type(n) && n.toString() || this.options.userId || null,
                        this.options.saveEvents) {
                            this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey),
                            this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey);
                            for (var i = 0; i < this._unsentEvents.length; i++) {
                                var s = this._unsentEvents[i].event_properties
                                  , a = this._unsentEvents[i].groups;
                                this._unsentEvents[i].event_properties = j.validateProperties(s),
                                this._unsentEvents[i].groups = j.validateGroups(a)
                            }
                            for (var u = 0; u < this._unsentIdentifys.length; u++) {
                                var c = this._unsentIdentifys[u].user_properties
                                  , l = this._unsentIdentifys[u].groups;
                                this._unsentIdentifys[u].user_properties = j.validateProperties(c),
                                this._unsentIdentifys[u].groups = j.validateGroups(l)
                            }
                        }
                        var p = (new Date).getTime();
                        (!this._sessionId || !this._lastEventTime || p - this._lastEventTime > this.options.sessionTimeout) && (this._newSession = !0,
                        this._sessionId = p,
                        this.options.saveParamsReferrerOncePerSession && this._trackParamsAndReferrer()),
                        this.options.saveParamsReferrerOncePerSession || this._trackParamsAndReferrer(),
                        this._lastEventTime = p,
                        bn(this),
                        this._sendEventsIfReady()
                    } catch (Tn) {
                        j.log.error(Tn)
                    } finally {
                        "function" === type(o) && o(this)
                    }
            }
            ,
            gn.prototype._trackParamsAndReferrer = function _trackParamsAndReferrer() {
                this.options.includeUtm && this._initUtmData(),
                this.options.includeReferrer && this._saveReferrer(this._getReferrer()),
                this.options.includeGclid && this._saveGclid(this._getUrlParams())
            }
            ;
            var vn = function _parseConfig(e, t) {
                if ("object" === type(t)) {
                    var n = function parseValidateAndLoad(n) {
                        if (hn.hasOwnProperty(n)) {
                            var r = t[n]
                              , o = type(hn[n]);
                            j.validateInput(r, n + " option", o) && ("boolean" === o ? e[n] = !!r : ("string" === o && !j.isEmptyString(r) || "number" === o && r > 0) && (e[n] = r))
                        }
                    };
                    for (var r in t)
                        t.hasOwnProperty(r) && n(r)
                }
            };
            gn.prototype.runQueuedFunctions = function() {
                for (var e = 0; e < this._q.length; e++) {
                    var t = this[this._q[e][0]];
                    "function" === type(t) && t.apply(this, this._q[e].slice(1))
                }
                this._q = []
            }
            ,
            gn.prototype._apiKeySet = function _apiKeySet(e) {
                return !j.isEmptyString(this.options.apiKey) || (j.log.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e),
                !1)
            }
            ,
            gn.prototype._loadSavedUnsentEvents = function _loadSavedUnsentEvents(e) {
                var t = this._getFromStorage(G, e)
                  , n = this._parseSavedUnsentEventsString(t, e)
                  , r = this._getFromStorageLegacy(G, e)
                  , o = this._parseSavedUnsentEventsString(r, e).concat(n);
                return this._removeFromLegacyStorage(G, e),
                this._setInStorage(G, e, JSON.stringify(o)),
                o
            }
            ,
            gn.prototype._removeFromLegacyStorage = function _removeFromLegacyStorage(e, t) {
                e.removeItem(t + this._legacyStorageSuffix)
            }
            ,
            gn.prototype._parseSavedUnsentEventsString = function _parseSavedUnsentEventsString(e, t) {
                if (j.isEmptyString(e))
                    return [];
                if ("string" === type(e))
                    try {
                        var n = JSON.parse(e);
                        if ("array" === type(n))
                            return n
                    } catch (Tn) {}
                return j.log.error("Unable to load " + t + " events. Restart with a new empty queue."),
                []
            }
            ,
            gn.prototype.isNewSession = function isNewSession() {
                return this._newSession
            }
            ,
            gn.prototype.getSessionId = function getSessionId() {
                return this._sessionId
            }
            ,
            gn.prototype.nextEventId = function nextEventId() {
                return this._eventId++,
                this._eventId
            }
            ,
            gn.prototype.nextIdentifyId = function nextIdentifyId() {
                return this._identifyId++,
                this._identifyId
            }
            ,
            gn.prototype.nextSequenceNumber = function nextSequenceNumber() {
                return this._sequenceNumber++,
                this._sequenceNumber
            }
            ,
            gn.prototype._unsentCount = function _unsentCount() {
                return this._unsentEvents.length + this._unsentIdentifys.length
            }
            ,
            gn.prototype._sendEventsIfReady = function _sendEventsIfReady(e) {
                return 0 !== this._unsentCount() && (this.options.batchEvents ? this._unsentCount() >= this.options.eventUploadThreshold ? (this.sendEvents(e),
                !0) : (this._updateScheduled || (this._updateScheduled = !0,
                setTimeout(function() {
                    this._updateScheduled = !1,
                    this.sendEvents()
                }
                .bind(this), this.options.eventUploadPeriodMillis)),
                !1) : (this.sendEvents(e),
                !0))
            }
            ,
            gn.prototype._getFromStorage = function _getFromStorage(e, t) {
                return e.getItem(t + this._storageSuffix)
            }
            ,
            gn.prototype._getFromStorageLegacy = function _getFromStorageLegacy(e, t) {
                return e.getItem(t + this._legacyStorageSuffix)
            }
            ,
            gn.prototype._setInStorage = function _setInStorage(e, t, n) {
                e.setItem(t + this._storageSuffix, n)
            }
            ;
            var mn = function _upgradeCookeData(e) {
                var n = e.cookieStorage.get(e.options.cookieName + e._storageSuffix);
                if ("object" !== type(n) && (n = e.cookieStorage.get(e.options.cookieName + e._legacyStorageSuffix),
                !("object" === type(n) && n.deviceId && n.sessionId && n.lastEventTime))) {
                    var r = function _getAndRemoveFromLocalStorage(e) {
                        var t = G.getItem(e);
                        return G.removeItem(e),
                        t
                    }
                      , o = "string" === type(e.options.apiKey) && "_" + e.options.apiKey.slice(0, 6) || ""
                      , i = r(t.DEVICE_ID + o)
                      , s = r(t.USER_ID + o)
                      , a = r(t.OPT_OUT + o);
                    null != a && (a = "true" === String(a));
                    var u = parseInt(r(t.SESSION_ID))
                      , c = parseInt(r(t.LAST_EVENT_TIME))
                      , l = parseInt(r(t.LAST_EVENT_ID))
                      , p = parseInt(r(t.LAST_IDENTIFY_ID))
                      , d = parseInt(r(t.LAST_SEQUENCE_NUMBER))
                      , f = function _getFromCookie(e) {
                        return "object" === type(n) && n[e]
                    };
                    e.options.deviceId = f("deviceId") || i,
                    e.options.userId = f("userId") || s,
                    e._sessionId = f("sessionId") || u || e._sessionId,
                    e._lastEventTime = f("lastEventTime") || c || e._lastEventTime,
                    e._eventId = f("eventId") || l || e._eventId,
                    e._identifyId = f("identifyId") || p || e._identifyId,
                    e._sequenceNumber = f("sequenceNumber") || d || e._sequenceNumber,
                    e.options.optOut = a || !1,
                    n && void 0 !== n.optOut && null !== n.optOut && (e.options.optOut = "true" === String(n.optOut)),
                    bn(e)
                }
            }
              , yn = function _loadCookieData(e) {
                var t = e.cookieStorage.get(e.options.cookieName + e._storageSuffix);
                if ("object" === type(t))
                    _n(e, t);
                else {
                    var n = e.cookieStorage.get(e.options.cookieName + e._legacyStorageSuffix);
                    "object" === type(n) && (e.cookieStorage.remove(e.options.cookieName + e._legacyStorageSuffix),
                    _n(e, n))
                }
            }
              , _n = function _loadCookieDataProps(e, t) {
                t.deviceId && (e.options.deviceId = t.deviceId),
                t.userId && (e.options.userId = t.userId),
                null !== t.optOut && void 0 !== t.optOut && (e.options.optOut = t.optOut),
                t.sessionId && (e._sessionId = parseInt(t.sessionId)),
                t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime)),
                t.eventId && (e._eventId = parseInt(t.eventId)),
                t.identifyId && (e._identifyId = parseInt(t.identifyId)),
                t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber))
            }
              , bn = function _saveCookieData(e) {
                e.cookieStorage.set(e.options.cookieName + e._storageSuffix, {
                    deviceId: e.options.deviceId,
                    userId: e.options.userId,
                    optOut: e.options.optOut,
                    sessionId: e._sessionId,
                    lastEventTime: e._lastEventTime,
                    eventId: e._eventId,
                    identifyId: e._identifyId,
                    sequenceNumber: e._sequenceNumber
                })
            };
            gn.prototype._initUtmData = function _initUtmData(e, t) {
                e = e || this._getUrlParams(),
                t = t || this.cookieStorage.get("__utmz");
                var n = $(t, e);
                wn(this, n)
            }
            ;
            var wn = function _sendParamsReferrerUserProperties(e, t) {
                if ("object" === type(t) && 0 !== Object.keys(t).length) {
                    var n = new X;
                    for (var r in t)
                        t.hasOwnProperty(r) && (n.setOnce("initial_" + r, t[r]),
                        n.set(r, t[r]));
                    e.identify(n)
                }
            };
            gn.prototype._getReferrer = function _getReferrer() {
                return document.referrer
            }
            ,
            gn.prototype._getUrlParams = function _getUrlParams() {
                return location.search
            }
            ,
            gn.prototype._saveGclid = function _saveGclid(e) {
                var t = j.getQueryParam("gclid", e);
                j.isEmptyString(t) || wn(this, {
                    gclid: t
                })
            }
            ,
            gn.prototype._getDeviceIdFromUrlParam = function _getDeviceIdFromUrlParam(e) {
                return j.getQueryParam(t.AMP_DEVICE_ID_PARAM, e)
            }
            ,
            gn.prototype._getReferringDomain = function _getReferringDomain(e) {
                if (j.isEmptyString(e))
                    return null;
                var t = e.split("/");
                return t.length >= 3 ? t[2] : null
            }
            ,
            gn.prototype._saveReferrer = function _saveReferrer(e) {
                if (!j.isEmptyString(e)) {
                    var t = {
                        referrer: e,
                        referring_domain: this._getReferringDomain(e)
                    };
                    wn(this, t)
                }
            }
            ,
            gn.prototype.saveEvents = function saveEvents() {
                try {
                    this._setInStorage(G, this.options.unsentKey, JSON.stringify(this._unsentEvents))
                } catch (Tn) {}
                try {
                    this._setInStorage(G, this.options.unsentIdentifyKey, JSON.stringify(this._unsentIdentifys))
                } catch (Tn) {}
            }
            ,
            gn.prototype.setDomain = function setDomain(e) {
                if (j.validateInput(e, "domain", "string"))
                    try {
                        this.cookieStorage.options({
                            domain: e
                        }),
                        this.options.domain = this.cookieStorage.options().domain,
                        yn(this),
                        bn(this)
                    } catch (Tn) {
                        j.log.error(Tn)
                    }
            }
            ,
            gn.prototype.setUserId = function setUserId(e) {
                try {
                    this.options.userId = null != e && "" + e || null,
                    bn(this)
                } catch (Tn) {
                    j.log.error(Tn)
                }
            }
            ,
            gn.prototype.setGroup = function(e, n) {
                if (this._apiKeySet("setGroup()") && j.validateInput(e, "groupType", "string") && !j.isEmptyString(e)) {
                    var r = {};
                    r[e] = n;
                    var o = (new X).set(e, n);
                    this._logEvent(t.IDENTIFY_EVENT, null, null, o.userPropertiesOperations, r, null, null)
                }
            }
            ,
            gn.prototype.setOptOut = function setOptOut(e) {
                if (j.validateInput(e, "enable", "boolean"))
                    try {
                        this.options.optOut = e,
                        bn(this)
                    } catch (Tn) {
                        j.log.error(Tn)
                    }
            }
            ,
            gn.prototype.setSessionId = function setSessionId(e) {
                if (j.validateInput(e, "sessionId", "number"))
                    try {
                        this._sessionId = e,
                        bn(this)
                    } catch (Tn) {
                        j.log.error(Tn)
                    }
            }
            ,
            gn.prototype.resetSessionId = function resetSessionId() {
                this.setSessionId((new Date).getTime())
            }
            ,
            gn.prototype.regenerateDeviceId = function regenerateDeviceId() {
                this.setDeviceId(dn() + "R")
            }
            ,
            gn.prototype.setDeviceId = function setDeviceId(e) {
                if (j.validateInput(e, "deviceId", "string"))
                    try {
                        j.isEmptyString(e) || (this.options.deviceId = "" + e,
                        bn(this))
                    } catch (Tn) {
                        j.log.error(Tn)
                    }
            }
            ,
            gn.prototype.setUserProperties = function setUserProperties(e) {
                if (this._apiKeySet("setUserProperties()") && j.validateInput(e, "userProperties", "object")) {
                    var t = j.truncate(j.validateProperties(e));
                    if (0 !== Object.keys(t).length) {
                        var n = new X;
                        for (var r in t)
                            t.hasOwnProperty(r) && n.set(r, t[r]);
                        this.identify(n)
                    }
                }
            }
            ,
            gn.prototype.clearUserProperties = function clearUserProperties() {
                if (this._apiKeySet("clearUserProperties()")) {
                    var e = new X;
                    e.clearAll(),
                    this.identify(e)
                }
            }
            ;
            var In = function _convertProxyObjectToRealObject(e, t) {
                for (var n = 0; n < t._q.length; n++) {
                    var r = e[t._q[n][0]];
                    "function" === type(r) && r.apply(e, t._q[n].slice(1))
                }
                return e
            };
            gn.prototype.identify = function(e, n) {
                if (this._apiKeySet("identify()")) {
                    if ("object" === type(e) && e.hasOwnProperty("_q") && (e = In(new X, e)),
                    e instanceof X) {
                        if (Object.keys(e.userPropertiesOperations).length > 0)
                            return this._logEvent(t.IDENTIFY_EVENT, null, null, e.userPropertiesOperations, null, null, n)
                    } else
                        j.log.error("Invalid identify input type. Expected Identify object but saw " + type(e));
                    "function" === type(n) && n(0, "No request sent")
                } else
                    "function" === type(n) && n(0, "No request sent")
            }
            ,
            gn.prototype.setVersionName = function setVersionName(e) {
                j.validateInput(e, "versionName", "string") && (this.options.versionName = e)
            }
            ,
            gn.prototype._logEvent = function _logEvent(e, n, r, o, i, s, a) {
                if (yn(this),
                e && !this.options.optOut)
                    try {
                        var u;
                        u = e === t.IDENTIFY_EVENT ? this.nextIdentifyId() : this.nextEventId();
                        var c = this.nextSequenceNumber()
                          , l = "number" === type(s) ? s : (new Date).getTime();
                        (!this._sessionId || !this._lastEventTime || l - this._lastEventTime > this.options.sessionTimeout) && (this._sessionId = l),
                        this._lastEventTime = l,
                        bn(this),
                        o = o || {},
                        r = r || {},
                        n = n || {},
                        i = i || {};
                        var p = {
                            device_id: this.options.deviceId,
                            user_id: this.options.userId,
                            timestamp: l,
                            event_id: u,
                            session_id: this._sessionId || -1,
                            event_type: e,
                            version_name: this.options.versionName || null,
                            platform: this.options.platform,
                            os_name: this._ua.browser.name || null,
                            os_version: this._ua.browser.major || null,
                            device_model: this._ua.os.name || null,
                            language: this.options.language,
                            api_properties: r,
                            event_properties: j.truncate(j.validateProperties(n)),
                            user_properties: j.truncate(j.validateProperties(o)),
                            uuid: dn(),
                            library: {
                                name: "amplitude-js",
                                version: fn
                            },
                            sequence_number: c,
                            groups: j.truncate(j.validateGroups(i)),
                            user_agent: this._userAgent
                        };
                        return e === t.IDENTIFY_EVENT ? (this._unsentIdentifys.push(p),
                        this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push(p),
                        this._limitEventsQueued(this._unsentEvents)),
                        this.options.saveEvents && this.saveEvents(),
                        this._sendEventsIfReady(a) || "function" !== type(a) || a(0, "No request sent"),
                        u
                    } catch (Tn) {
                        j.log.error(Tn)
                    }
                else
                    "function" === type(a) && a(0, "No request sent")
            }
            ,
            gn.prototype._limitEventsQueued = function _limitEventsQueued(e) {
                e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount)
            }
            ,
            gn.prototype.logEvent = function logEvent(e, t, n) {
                return this.logEventWithTimestamp(e, t, null, n)
            }
            ,
            gn.prototype.logEventWithTimestamp = function logEvent(e, t, n, r) {
                return this._apiKeySet("logEvent()") && j.validateInput(e, "eventType", "string") && !j.isEmptyString(e) ? this._logEvent(e, t, null, null, null, n, r) : ("function" === type(r) && r(0, "No request sent"),
                -1)
            }
            ,
            gn.prototype.logEventWithGroups = function(e, t, n, r) {
                return this._apiKeySet("logEventWithGroup()") && j.validateInput(e, "eventType", "string") ? this._logEvent(e, t, null, null, n, null, r) : ("function" === type(r) && r(0, "No request sent"),
                -1)
            }
            ;
            var En = function _isNumber(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            };
            gn.prototype.logRevenueV2 = function logRevenueV2(e) {
                if (this._apiKeySet("logRevenueV2()"))
                    if ("object" === type(e) && e.hasOwnProperty("_q") && (e = In(new ln, e)),
                    e instanceof ln) {
                        if (e && e._isValidRevenue())
                            return this.logEvent(t.REVENUE_EVENT, e._toJSONObject())
                    } else
                        j.log.error("Invalid revenue input type. Expected Revenue object but saw " + type(e))
            }
            ,
            gn.prototype.logRevenue = function logRevenue(e, n, r) {
                return this._apiKeySet("logRevenue()") && En(e) && (void 0 === n || En(n)) ? this._logEvent(t.REVENUE_EVENT, {}, {
                    productId: r,
                    special: "revenue_amount",
                    quantity: n || 1,
                    price: e
                }, null, null, null, null) : -1
            }
            ,
            gn.prototype.removeEvents = function removeEvents(e, t) {
                Sn(this, "_unsentEvents", e),
                Sn(this, "_unsentIdentifys", t)
            }
            ;
            var Sn = function _removeEvents(e, t, n) {
                if (!(n < 0)) {
                    for (var r = [], o = 0; o < e[t].length; o++)
                        e[t][o].event_id > n && r.push(e[t][o]);
                    e[t] = r
                }
            };
            gn.prototype.sendEvents = function sendEvents(e) {
                if (!this._apiKeySet("sendEvents()") || this._sending || this.options.optOut || 0 === this._unsentCount())
                    "function" === type(e) && e(0, "No request sent");
                else {
                    this._sending = !0;
                    var n = (this.options.forceHttps || "https:" === window.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint + "/"
                      , r = Math.min(this._unsentCount(), this.options.uploadBatchSize)
                      , o = this._mergeEventsAndIdentifys(r)
                      , i = o.maxEventId
                      , s = o.maxIdentifyId
                      , a = JSON.stringify(o.eventsToSend)
                      , u = (new Date).getTime()
                      , c = {
                        client: this.options.apiKey,
                        e: a,
                        v: t.API_VERSION,
                        upload_time: u,
                        checksum: Z(t.API_VERSION + this.options.apiKey + a + u)
                    }
                      , l = this;
                    new cn(n,c).send((function(t, n) {
                        l._sending = !1;
                        try {
                            200 === t && "success" === n ? (l.removeEvents(i, s),
                            l.options.saveEvents && l.saveEvents(),
                            l._sendEventsIfReady(e) || "function" !== type(e) || e(t, n)) : 413 === t ? (1 === l.options.uploadBatchSize && l.removeEvents(i, s),
                            l.options.uploadBatchSize = Math.ceil(r / 2),
                            l.sendEvents(e)) : "function" === type(e) && e(t, n)
                        } catch (Tn) {}
                    }
                    ))
                }
            }
            ,
            gn.prototype._mergeEventsAndIdentifys = function _mergeEventsAndIdentifys(e) {
                for (var t = [], n = 0, r = -1, o = 0, i = -1; t.length < e; ) {
                    var s, a = o >= this._unsentIdentifys.length, u = n >= this._unsentEvents.length;
                    if (u && a) {
                        j.log.error("Merging Events and Identifys, less events and identifys than expected");
                        break
                    }
                    a ? r = (s = this._unsentEvents[n++]).event_id : u ? i = (s = this._unsentIdentifys[o++]).event_id : !("sequence_number"in this._unsentEvents[n]) || this._unsentEvents[n].sequence_number < this._unsentIdentifys[o].sequence_number ? r = (s = this._unsentEvents[n++]).event_id : i = (s = this._unsentIdentifys[o++]).event_id,
                    t.push(s)
                }
                return {
                    eventsToSend: t,
                    maxEventId: r,
                    maxIdentifyId: i
                }
            }
            ,
            gn.prototype.setGlobalUserProperties = function setGlobalUserProperties(e) {
                this.setUserProperties(e)
            }
            ,
            gn.prototype.__VERSION__ = fn;
            var Cn = function Amplitude() {
                this.options = on({}, hn),
                this._q = [],
                this._instances = {}
            };
            Cn.prototype.Identify = X,
            Cn.prototype.Revenue = ln,
            Cn.prototype.getInstance = function getInstance(e) {
                e = j.isEmptyString(e) ? t.DEFAULT_INSTANCE : e.toLowerCase();
                var n = this._instances[e];
                return void 0 === n && (n = new gn(e),
                this._instances[e] = n),
                n
            }
            ,
            Cn.prototype.init = function init(e, t, n, r) {
                this.getInstance().init(e, t, n, function(e) {
                    this.options = e.options,
                    "function" === type(r) && r(e)
                }
                .bind(this))
            }
            ,
            Cn.prototype.runQueuedFunctions = function() {
                for (var e = 0; e < this._q.length; e++) {
                    var t = this[this._q[e][0]];
                    "function" === type(t) && t.apply(this, this._q[e].slice(1))
                }
                for (var n in this._q = [],
                this._instances)
                    this._instances.hasOwnProperty(n) && this._instances[n].runQueuedFunctions()
            }
            ,
            Cn.prototype.isNewSession = function isNewSession() {
                return this.getInstance().isNewSession()
            }
            ,
            Cn.prototype.getSessionId = function getSessionId() {
                return this.getInstance().getSessionId()
            }
            ,
            Cn.prototype.nextEventId = function nextEventId() {
                return this.getInstance().nextEventId()
            }
            ,
            Cn.prototype.nextIdentifyId = function nextIdentifyId() {
                return this.getInstance().nextIdentifyId()
            }
            ,
            Cn.prototype.nextSequenceNumber = function nextSequenceNumber() {
                return this.getInstance().nextSequenceNumber()
            }
            ,
            Cn.prototype.saveEvents = function saveEvents() {
                this.getInstance().saveEvents()
            }
            ,
            Cn.prototype.setDomain = function setDomain(e) {
                this.getInstance().setDomain(e)
            }
            ,
            Cn.prototype.setUserId = function setUserId(e) {
                this.getInstance().setUserId(e)
            }
            ,
            Cn.prototype.setGroup = function(e, t) {
                this.getInstance().setGroup(e, t)
            }
            ,
            Cn.prototype.setOptOut = function setOptOut(e) {
                this.getInstance().setOptOut(e)
            }
            ,
            Cn.prototype.regenerateDeviceId = function regenerateDeviceId() {
                this.getInstance().regenerateDeviceId()
            }
            ,
            Cn.prototype.setDeviceId = function setDeviceId(e) {
                this.getInstance().setDeviceId(e)
            }
            ,
            Cn.prototype.setUserProperties = function setUserProperties(e) {
                this.getInstance().setUserProperties(e)
            }
            ,
            Cn.prototype.clearUserProperties = function clearUserProperties() {
                this.getInstance().clearUserProperties()
            }
            ,
            Cn.prototype.identify = function(e, t) {
                this.getInstance().identify(e, t)
            }
            ,
            Cn.prototype.setVersionName = function setVersionName(e) {
                this.getInstance().setVersionName(e)
            }
            ,
            Cn.prototype.logEvent = function logEvent(e, t, n) {
                return this.getInstance().logEvent(e, t, n)
            }
            ,
            Cn.prototype.logEventWithGroups = function(e, t, n, r) {
                return this.getInstance().logEventWithGroups(e, t, n, r)
            }
            ,
            Cn.prototype.logRevenueV2 = function logRevenueV2(e) {
                return this.getInstance().logRevenueV2(e)
            }
            ,
            Cn.prototype.logRevenue = function logRevenue(e, t, n) {
                return this.getInstance().logRevenue(e, t, n)
            }
            ,
            Cn.prototype.removeEvents = function removeEvents(e, t) {
                this.getInstance().removeEvents(e, t)
            }
            ,
            Cn.prototype.sendEvents = function sendEvents(e) {
                this.getInstance().sendEvents(e)
            }
            ,
            Cn.prototype.setGlobalUserProperties = function setGlobalUserProperties(e) {
                this.getInstance().setUserProperties(e)
            }
            ,
            Cn.prototype.__VERSION__ = fn;
            var On = window.amplitude || {}
              , An = new Cn;
            for (var Nn in An._q = On._q || [],
            On._iq)
                On._iq.hasOwnProperty(Nn) && (An.getInstance(Nn)._q = On._iq[Nn]._q || []);
            return An
        }()
    }
}]);
