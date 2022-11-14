"use strict";
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[991], {
    61891: function(e, t, n) {
        n.d(t, {
            d: function() {
                return logSidebarEvent
            }
        });
        var r = n(67104)
          , o = n(75700)
          , l = n(67858)
          , s = n(51878)
          , a = n(32614);
        function logSidebarEvent(e) {
            (0,
            o.K)(e, {
                gameType: l.X.gameType,
                opponent: function getOpponent() {
                    const e = (0,
                    s.D)();
                    if (e === r.lA.ColorsAsWords.White)
                        return a.S.headers.Black;
                    if (e === r.lA.ColorsAsWords.Black)
                        return a.S.headers.White;
                    return null
                }(),
                result: a.S.headers.Result
            })
        }
    },
    73665: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var r = {
            name: "SidebarTabContent"
        }
          , o = {
            component: "sidebar-tab-content-component"
        };
        var l = (0,
        n(51900).Z)(r, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                class: e.$style.component
            }, [e._t("default")], 2)
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = o.locals || o
        }
        ), null, null).exports
    },
    33328: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return y
            }
        });
        var r, o = n(92866), l = n(73665), s = n(61891), a = n(49458), i = n(45157);
        (e=>{
            let t;
            var n;
            (n = t = e.Controllers || (e.Controllers = {})).Analysis = "Analysis",
            n.Setup = "Setup"
        }
        )(r || (r = {}));
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const c = {
            [r.Controllers.Analysis]: ()=>Promise.all([n.e(367), n.e(365)]).then(n.bind(n, 82951)),
            [r.Controllers.Setup]: ()=>Promise.all([n.e(511), n.e(125)]).then(n.bind(n, 35449))
        };
        var p = Object.defineProperty
          , u = Object.getOwnPropertySymbols
          , f = Object.prototype.hasOwnProperty
          , d = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,n)=>t in e ? p(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , b = (0,
        o.aZ)({
            name: "AnalysisTabController",
            components: ((e,t)=>{
                for (var n in t || (t = {}))
                    f.call(t, n) && __defNormalProp(e, n, t[n]);
                if (u)
                    for (var n of u(t))
                        d.call(t, n) && __defNormalProp(e, n, t[n]);
                return e
            }
            )({
                SidebarTabContent: l.Z
            }, c),
            setup: ()=>((0,
            s.d)(a.Y.Events.Analysis),
            {
                controller: (0,
                o.Fl)((()=>i.p.isLoaded ? r.Controllers.Analysis : r.Controllers.Setup))
            })
        })
          , y = (0,
        n(51900).Z)(b, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("sidebar-tab-content", [n(e.controller, {
                tag: "component"
            })], 1)
        }
        ), [], !1, null, null, null).exports
    }
}]);
