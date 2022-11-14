window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
    web_learn_get_preferred_coach_callback: {
        tokens: [["text", "/callback/learn/get-preferred-coach"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_learn_update_preferred_coach_callback: {
        tokens: [["text", "/callback/learn/update-preferred-coach"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_user_callback_get_board_settings: {
        tokens: [["text", "/callback/board-settings"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_themes_data_callback: {
        tokens: [["text", "/callback/themes/data"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    }
}),
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[177], {
    15892: function(e, t, o) {
        o.d(t, {
            a: function() {
                return p
            },
            S: function() {
                return setCoach
            }
        });
        var s = o(92866)
          , a = o(20647)
          , n = o(25685)
          , r = o(3510)
          , i = o(57367)
          , l = o(63754)
          , c = Object.defineProperty
          , d = Object.getOwnPropertySymbols
          , u = Object.prototype.hasOwnProperty
          , m = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,o)=>t in e ? c(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o;
        const p = (0,
        s.qj)(function getCoach() {
            return (window.chesscom.features.includes("settings_service_read") ? (0,
            n.w)(["learn.coach"]).then((e=>e["learn.coach"])) : i.Z.get(l.Z.generate("web_learn_get_preferred_coach_callback")).then((e=>e.data.coachCode))).then((e=>{
                var t;
                const o = null != (t = a.H.find((t=>t.name === e))) ? t : a.j;
                Object.assign(p, o)
            }
            )),
            ((e,t)=>{
                for (var o in t || (t = {}))
                    u.call(t, o) && __defNormalProp(e, o, t[o]);
                if (d)
                    for (var o of d(t))
                        m.call(t, o) && __defNormalProp(e, o, t[o]);
                return e
            }
            )({}, a.j)
        }());
        function setCoach(e=a.j) {
            return Object.assign(p, e),
            i.Z.post(l.Z.generate("web_learn_update_preferred_coach_callback"), {
                coachCode: e.name
            }),
            window.chesscom.features.includes("settings_service_data_sync") && (0,
            r.z)({
                "learn.coach": "none" === e.name ? null : e.name
            }),
            e
        }
    },
    20647: function(e, t, o) {
        o.d(t, {
            H: function() {
                return s
            },
            j: function() {
                return a
            }
        });
        const s = [{
            name: "none",
            imagePrimary: "",
            isNone: !0
        }, {
            name: "david",
            imagePrimary: "/bundles/web/images/lessons/coachdavid.png",
            isNone: !1
        }, {
            name: "nadia",
            imagePrimary: "/bundles/web/images/lessons/coachnadia.png",
            isNone: !1
        }, {
            name: "dante",
            imagePrimary: "/bundles/web/images/lessons/coachdante.png",
            isNone: !1
        }, {
            name: "mae",
            imagePrimary: "/bundles/web/images/lessons/coachmae.png",
            isNone: !1
        }, {
            name: "tanay",
            imagePrimary: "/bundles/web/images/lessons/coachtanay.png",
            isNone: !1
        }, {
            name: "monica",
            imagePrimary: "/bundles/web/images/lessons/coachmonica.png",
            isNone: !1
        }, {
            name: "anton",
            imagePrimary: "/bundles/web/images/lessons/coachanton.png",
            isNone: !1
        }, {
            name: "danny",
            imagePrimary: "/bundles/web/images/lessons/coachdanny.png",
            isNone: !1
        }]
          , a = s[1]
    },
    77899: function(e, t, o) {
        o.d(t, {
            z: function() {
                return s
            }
        });
        var s = (e=>(e.ClientSide = "?",
        e.MissingValue = "-",
        e))(s || {})
    },
    97541: function(e, t, o) {
        o.d(t, {
            y: function() {
                return updateBoardOption
            }
        });
        var s = o(20517)
          , a = o(6159)
          , n = o(57367)
          , r = o(63754);
        async function updateBoardOption(e, t) {
            if (!s.f[e])
                throw new Error(`${e} is not a valid board option`);
            const [o,i] = (0,
            a.M)(e, t);
            await n.Z.post(r.Z.generate(s.f[o]), {
                action: i
            })
        }
    },
    30892: function(e, t, o) {
        o.d(t, {
            u: function() {
                return formatNumber
            }
        });
        var s = o(77899)
          , a = o(62023);
        function formatNumber({digits: e=2, defaultVal: t=s.z.MissingValue, value: o}) {
            var n;
            return o && null != (n = (0,
            a.jb)({
                method: Math.floor,
                number: o
            }).toFixed(e)) ? n : t
        }
    },
    62023: function(e, t, o) {
        o.d(t, {
            jb: function() {
                return roundToDecimal
            },
            bs: function() {
                return getPercentages
            }
        });
        const roundToDecimal = ({decimals: e=1, method: t=Math.round, number: o})=>{
            const s = 10 ** e;
            return t(o * s) / s
        }
        ;
        function getPercentages(e, t) {
            const {decimalPlaces: o, total: s} = Object.assign({
                total: void 0,
                collection: [],
                decimalPlaces: 1
            }, t)
              , a = s || e.reduce(((e,t)=>e + t))
              , n = 100 * 10 ** o
              , r = e.map((e=>Math.round(e / a * n)))
              , i = r.reduce(((e,t)=>e + t))
              , l = n - i;
            return r[r.length - 1] += l,
            r.map((e=>e / 10 ** o))
        }
    },
    61891: function(e, t, o) {
        o.d(t, {
            d: function() {
                return logSidebarEvent
            }
        });
        var s = o(67104)
          , a = o(75700)
          , n = o(67858)
          , r = o(51878)
          , i = o(32614);
        function logSidebarEvent(e) {
            (0,
            a.K)(e, {
                gameType: n.X.gameType,
                opponent: function getOpponent() {
                    const e = (0,
                    r.D)();
                    if (e === s.lA.ColorsAsWords.White)
                        return i.S.headers.Black;
                    if (e === s.lA.ColorsAsWords.Black)
                        return i.S.headers.White;
                    return null
                }(),
                result: i.S.headers.Result
            })
        }
    },
    37726: function(e, t, o) {
        function assignYValue(e, t) {
            return e >= t ? t : e <= -t ? -t : e
        }
        o.d(t, {
            y: function() {
                return assignYValue
            }
        })
    },
    63455: function(e, t, o) {
        function getMainSeriesWithBackground({currentMoveNumber: e, getPoint: t, limit: o, positions: s, positionsWithFiller: a}) {
            return [getMainSeries({
                getPoint: t,
                positions: a
            }), getBackgroundSeries({
                positions: s,
                positive: !0,
                currentMoveNumber: e,
                limit: o
            }), getBackgroundSeries({
                positions: s,
                positive: !1,
                currentMoveNumber: e,
                limit: o
            })]
        }
        function getMainSeries({getPoint: e, positions: t, type: o="column"}) {
            return {
                allowPointSelect: !0,
                data: t.map(e),
                pointStart: 1,
                type: o,
                zIndex: 1
            }
        }
        function getBackgroundSeries({currentMoveNumber: e, limit: t, positions: o, positive: s}) {
            return {
                className: "highcharts-series-background",
                data: o.map(((o,a)=>({
                    color: "transparent",
                    hideTooltip: !0,
                    selected: e === a,
                    y: s ? t : -t
                }))),
                grouping: !1,
                pointStart: 1,
                type: "column",
                zIndex: 0
            }
        }
        o.d(t, {
            w2: function() {
                return getMainSeriesWithBackground
            },
            Zn: function() {
                return getMainSeries
            },
            cS: function() {
                return getBackgroundSeries
            }
        })
    },
    59808: function(e, t, o) {
        o.d(t, {
            G: function() {
                return onPositionChange
            }
        });
        var s = o(10268);
        function onPositionChange({chart: e, chartIndex: t=1, currentMoveNumber: o}) {
            const a = e.series[t]
              , n = e.series.slice(t);
            n.map((e=>function deselectSeries(e) {
                return e.data.filter((e=>e.selected)).forEach((e=>e.select(!1)))
            }(e))),
            o >= 0 && (null == a ? void 0 : a.data[o]) && n.map((e=>e.data[o].select(!0, !0))),
            e.scrollingContainer && setTimeout((()=>{
                const t = a.data ? a.data.length : 0;
                e.scrollingContainer.scrollLeft = o / t * (s.G.ColumnWidth * t) - e.renderTo.clientWidth / 2
            }
            ))
        }
    },
    34561: function(e, t, o) {
        o.d(t, {
            j: function() {
                return getMainLineParentMoveNumber
            }
        });
        var s = o(51e3);
        function getMainLineParentMoveNumber() {
            var e, t;
            return null != (t = null == (e = (0,
            s.n)()) ? void 0 : e.ids.move) ? t : -1
        }
    },
    28426: function(e, t, o) {
        o.d(t, {
            Z: function() {
                return r
            }
        });
        var s = o(78840)
          , a = o.n(s)
          , n = {
            name: "HighchartsChart",
            props: {
                autoUpdate: {
                    type: Boolean,
                    default: !0
                },
                constructorType: {
                    type: String,
                    default: "chart",
                    validator: e=>["chart", "mapChart", "stockChart"].includes(e)
                },
                options: {
                    type: Object,
                    required: !0
                },
                loading: {
                    type: Boolean,
                    default: !1
                },
                onLoad: {
                    type: Function
                },
                updateArgs: {
                    type: Array,
                    default: ()=>[!0, !0, {
                        duration: 1e3
                    }]
                },
                updateCallback: {
                    type: Function
                }
            },
            computed: {
                hasOptionsAndAcceptableConstructor() {
                    return this.options && a()[this.constructorType]
                }
            },
            watch: {
                loading(e) {
                    var t, o;
                    e ? null == (t = this.chart) || t.showLoading() : null == (o = this.chart) || o.hideLoading()
                },
                options: {
                    handler() {
                        this.autoUpdate && this.update()
                    },
                    deep: !0
                }
            },
            mounted() {
                this.hasOptionsAndAcceptableConstructor && this.createChart()
            },
            beforeDestroy() {
                var e;
                return null == (e = this.chart) ? void 0 : e.destroy()
            },
            methods: {
                createChart() {
                    var e;
                    this.chart = a()[this.constructorType](this.$refs.chart, this.options, this.onLoad),
                    this.loading && (null == (e = this.chart) || e.showLoading())
                },
                update() {
                    var e;
                    null == (e = this.chart) || e.update(this.options, ...this.updateArgs),
                    this.updateCallback && this.chart && this.updateCallback(this.chart)
                }
            }
        }
          , r = (0,
        o(51900).Z)(n, (function() {
            var e = this.$createElement;
            return (this._self._c || e)("div", {
                ref: "chart"
            })
        }
        ), [], !1, null, null, null).exports
    },
    32271: function(e, t, o) {
        o.d(t, {
            Z: function() {
                return n
            }
        });
        var s = {
            name: "SectionTitleDismissible",
            emits: ["close"]
        }
          , a = {
            component: "section-title-dismissible-upd-component",
            name: "section-title-dismissible-upd-name",
            close: "section-title-dismissible-upd-close",
            icon: "section-title-dismissible-upd-icon"
        };
        var n = (0,
        o(51900).Z)(s, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component
            }, [o("span", {
                class: e.$style.name
            }, [e._t("default")], 2), e._v(" "), o("button", {
                class: e.$style.close,
                attrs: {
                    type: "button",
                    "aria-label": e.$trans("Close")
                },
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }, [o("span", {
                staticClass: "icon-font-chess x",
                class: e.$style.icon
            })])])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = a.locals || a
        }
        ), null, null).exports
    },
    73665: function(e, t, o) {
        o.d(t, {
            Z: function() {
                return n
            }
        });
        var s = {
            name: "SidebarTabContent"
        }
          , a = {
            component: "sidebar-tab-content-component"
        };
        var n = (0,
        o(51900).Z)(s, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                class: e.$style.component
            }, [e._t("default")], 2)
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = a.locals || a
        }
        ), null, null).exports
    },
    99153: function(e, t, o) {
        o.r(t),
        o.d(t, {
            default: function() {
                return ba
            }
        });
        var s = o(92866)
          , a = o(26888)
          , n = o(15892)
          , r = o(75700)
          , i = o(67104)
          , l = o(56279)
          , c = o(89065)
          , d = o(26908);
        var u = o(43608);
        var m = (0,
        s.aZ)({
            name: "ReviewFlowButtons",
            components: {
                V5Button: l.V5Button
            },
            props: {
                buttons: {
                    type: Array,
                    default: ()=>[]
                },
                watchOverflow: Boolean
            },
            setup(e) {
                const t = (0,
                s.iH)([])
                  , o = (0,
                s.iH)(areButtonsOverflowing());
                return e.watchOverflow && (!function useEventListener(e, t, o, a) {
                    e.addEventListener(t, o, a),
                    (0,
                    s.Ah)((()=>{
                        e.removeEventListener(t, o, a)
                    }
                    ))
                }(window, "resize", (0,
                u.Z)(updateButtonSize, 100)),
                (0,
                s.m0)(updateButtonSize)),
                {
                    buttonsOverflowing: o,
                    elements: t
                };
                function areButtonsOverflowing() {
                    return !!e.watchOverflow && t.value.some((e=>function isOverflowing({clientWidth: e, clientHeight: t, scrollWidth: o, scrollHeight: s}) {
                        return s > t || o > e
                    }(e)))
                }
                function updateButtonSize() {
                    o.value || (o.value = areButtonsOverflowing())
                }
            }
        })
          , p = {
            component: "flow-buttons-component",
            overflowing: "flow-buttons-overflowing",
            button: "flow-buttons-button",
            icon: "flow-buttons-icon",
            label: "flow-buttons-label"
        }
          , v = o(51900);
        var h = (0,
        v.Z)(m, (function() {
            var e, t = this, o = t.$createElement, s = t._self._c || o;
            return s("div", {
                class: [t.$style.component, (e = {},
                e[t.$style.overflowing] = t.buttonsOverflowing,
                e)]
            }, t._l(t.buttons, (function(e) {
                return s("v5-button", {
                    key: e.label,
                    class: t.$style.button,
                    attrs: {
                        "data-cy": e.dataCy,
                        theme: e.theme,
                        size: "small"
                    },
                    on: {
                        click: e.onClick
                    }
                }, [s("span", {
                    class: [t.$style.icon, "icon-font-chess", e.icon]
                }), t._v(" "), s("span", {
                    ref: "elements",
                    refInFor: !0,
                    class: t.$style.label,
                    domProps: {
                        textContent: t._s(e.label)
                    }
                })])
            }
            )), 1)
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = p.locals || p
        }
        ), null, null).exports
          , y = o(80510)
          , g = o(77899)
          , b = o(32305);
        var w = o(30892)
          , f = o(86910)
          , k = o(6898)
          , _ = o(97203)
          , $ = (0,
        s.aZ)({
            name: "AccuracyScore",
            directives: {
                tooltip: k.Z
            },
            props: {
                avatarUrl: String,
                accuracy: Number,
                color: {
                    type: String,
                    required: !0
                },
                progress: {
                    type: Number,
                    required: !1
                },
                gameResult: String,
                isBasicAnalysis: Boolean,
                showAvatar: Boolean
            },
            setup(e) {
                const t = (0,
                s.Fl)((()=>e.avatarUrl ? {
                    isFallback: !1,
                    url: e.avatarUrl
                } : {
                    isFallback: !0,
                    url: (0,
                    f.n)(`bundles/web/images/${e.color}_400.png`)
                }))
                  , o = (0,
                s.Fl)((()=>e.progress))
                  , a = (0,
                f.n)("bundles/web/images/faces/danny_omg.svg")
                  , n = (0,
                s.Fl)((()=>t.value.isFallback ? t.value.url : (0,
                _.b)(t.value.url)))
                  , r = (0,
                s.Fl)((()=>e.isBasicAnalysis ? g.z.ClientSide : (0,
                w.u)({
                    digits: 1,
                    defaultVal: g.z.MissingValue,
                    value: e.accuracy
                })))
                  , l = (0,
                s.Fl)((()=>e.gameResult === i.lA.Results.White ? i.lA.ColorsAsWords.White : e.gameResult === i.lA.Results.Black ? i.lA.ColorsAsWords.Black : null));
                return {
                    avatar: t,
                    avatarSrcset: n,
                    accuracyTooltip: (c = e.isBasicAnalysis,
                    c ? (0,
                    b.dW)("Player Accuracy is calculated during Full Analysis only. Upgrade today for Unlimited Analysis.") : (0,
                    b.dW)("Game accuracy is a score measuring the accuracy of your moves on a scale of 0 - 100 when compared to the top chess computer moves")),
                    easterEgg: a,
                    formattedAccuracy: r,
                    placeholder: g.z.MissingValue,
                    progressAnalysis: o,
                    winningColor: l
                };
                var c
            }
        })
          , S = {
            bold: "accuracy-score-bold",
            header: "accuracy-score-header",
            inactive: "accuracy-score-inactive",
            scrollable: "accuracy-score-scrollable",
            component: "accuracy-score-component",
            "fade-enter-active": "accuracy-score-fade-enter-active",
            "fade-leave-active": "accuracy-score-fade-leave-active",
            "fade-enter": "accuracy-score-fade-enter",
            black: "accuracy-score-black",
            label: "accuracy-score-label",
            white: "accuracy-score-white",
            loser: "accuracy-score-loser",
            winner: "accuracy-score-winner",
            avatar: "accuracy-score-avatar",
            icon: "accuracy-score-icon",
            text: "accuracy-score-text",
            value: "accuracy-score-value"
        };
        var C = (0,
        v.Z)($, (function() {
            var e, t = this, o = t.$createElement, s = t._self._c || o;
            return s("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: t.accuracyTooltip,
                    expression: "accuracyTooltip"
                }],
                class: [t.$style.component, t.$style[t.color], (e = {},
                e[t.$style.loser] = t.winningColor && t.winningColor !== t.color,
                e[t.$style.winner] = t.winningColor === t.color,
                e)],
                attrs: {
                    "data-cy": "game-review-accuracy-" + t.color
                }
            }, [s("div", {
                class: t.$style.text
            }, [s("transition", {
                attrs: {
                    name: "review-player-accuracy-fade",
                    mode: "out-in"
                }
            }, [0 === t.accuracy && 1 === t.progressAnalysis ? s("div", {
                class: t.$style.value
            }, [s("img", {
                class: t.$style.value,
                attrs: {
                    src: t.easterEgg,
                    width: "24",
                    height: "24",
                    alt: "easter_egg"
                }
            })]) : t.formattedAccuracy === t.placeholder ? s("div", {
                key: "dash",
                class: t.$style.value,
                domProps: {
                    textContent: t._s(t.placeholder)
                }
            }) : s("div", {
                key: "number",
                class: t.$style.value,
                domProps: {
                    textContent: t._s(t.formattedAccuracy)
                }
            })]), t._v(" "), s("div", {
                class: t.$style.label,
                domProps: {
                    textContent: t._s(t.$trans("Accuracy"))
                }
            })], 1), t._v(" "), t.showAvatar ? s("img", {
                class: t.$style.avatar,
                attrs: {
                    src: t.avatar.url,
                    srcset: t.avatarSrcset,
                    width: "50",
                    height: "50",
                    alt: "avatar"
                }
            }) : t._e()])
        }
        ), [], !1, (function accuracy_score_injectStyles(e) {
            this.$style = S.locals || S
        }
        ), null, null).exports
          , x = o(64099)
          , A = (0,
        s.aZ)({
            name: "Accuracy",
            components: {
                AccuracyScore: C
            },
            props: {
                accuracies: {
                    type: Object,
                    default: ()=>({
                        white: {
                            all: null
                        },
                        black: {
                            all: null
                        }
                    })
                },
                avatars: Object,
                gameResult: String,
                isBasicAnalysis: Boolean
            },
            setup(e) {
                const t = (0,
                s.Fl)((()=>x.F.progress));
                return {
                    result: (0,
                    s.Fl)((()=>e.gameResult === i.lA.Results.None ? g.z.MissingValue : e.gameResult)),
                    progress: t,
                    showAvatars: (0,
                    s.Fl)((()=>{
                        var t;
                        return Object.values(null != (t = e.avatars) ? t : {}).some(isNotDefaultAvatar)
                    }
                    ))
                };
                function isNotDefaultAvatar(e) {
                    return e && !e.includes("noavatar")
                }
            }
        })
          , M = {
            component: "accuracy-component",
            score: "accuracy-score"
        };
        var P = (0,
        v.Z)(A, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component
            }, [o("accuracy-score", {
                attrs: {
                    accuracy: e.accuracies.white.all,
                    color: "white",
                    "game-result": e.gameResult,
                    "is-basic-analysis": e.isBasicAnalysis,
                    "avatar-url": e.avatars.white,
                    "show-avatar": e.showAvatars,
                    progress: e.progress
                }
            }), e._v(" "), o("span", {
                class: e.$style.score,
                domProps: {
                    textContent: e._s(e.result)
                }
            }), e._v(" "), o("accuracy-score", {
                attrs: {
                    accuracy: e.accuracies.black.all,
                    color: "black",
                    "game-result": e.gameResult,
                    "is-basic-analysis": e.isBasicAnalysis,
                    "avatar-url": e.avatars.black,
                    "show-avatar": e.showAvatars,
                    progress: e.progress
                }
            })], 1)
        }
        ), [], !1, (function accuracy_injectStyles(e) {
            this.$style = M.locals || M
        }
        ), null, null).exports
          , T = {
            name: "DropdownMenu",
            directives: {
                clickOutside: o(26924).Z
            },
            props: {
                alignRight: {
                    type: Boolean,
                    default: !0
                },
                icon: {
                    type: String,
                    default: "caret-down"
                },
                options: {
                    type: Array,
                    required: !0
                },
                selectedOption: {
                    type: [String, Boolean],
                    required: !0,
                    validator: e=>"string" == typeof e || !1 === e
                },
                prefixLabel: String
            },
            emits: ["menu-change"],
            data: ()=>({
                isOpen: !1
            }),
            computed: {
                labelText() {
                    return this.prefixLabel ? `${this.prefixLabel} ${this.currentOption.label}` : this.currentOption.label
                },
                currentOption() {
                    return this.options.find((e=>e.type === this.selectedOption))
                }
            },
            methods: {
                onClickSetOption(e) {
                    this.isOpen = !1,
                    this.$emit("menu-change", {
                        option: e
                    })
                },
                onClickToggle() {
                    this.isOpen = !this.isOpen
                },
                onClickOutside() {
                    this.isOpen = !1
                }
            }
        }
          , B = {
            component: "dropdown-menu-component",
            right: "dropdown-menu-right",
            dropdown: "dropdown-menu-dropdown",
            toggle: "dropdown-menu-toggle",
            icon: "dropdown-menu-icon",
            button: "dropdown-menu-button"
        };
        var N = (0,
        v.Z)(T, (function() {
            var e, t = this, o = t.$createElement, s = t._self._c || o;
            return s("div", {
                class: [t.$style.component, (e = {},
                e[t.$style.right] = t.alignRight,
                e)]
            }, [s("button", {
                class: t.$style.toggle,
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.onClickToggle
                }
            }, [!1 !== t.selectedOption ? s("span", {
                domProps: {
                    textContent: t._s(t.labelText)
                }
            }) : t._e(), t._v(" "), s("span", {
                class: [t.$style.icon, "icon-font-chess", t.icon]
            })]), t._v(" "), t.isOpen ? s("ul", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: t.onClickOutside,
                    expression: "onClickOutside"
                }],
                class: t.$style.dropdown
            }, t._l(t.options, (function(e) {
                return s("li", {
                    key: e.type
                }, [s("button", {
                    class: t.$style.button,
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(o) {
                            return t.onClickSetOption(e.type)
                        }
                    }
                }, [e.icon ? s("span", {
                    class: [t.$style.icon, "icon-font-chess", e.icon, "colored-icon"]
                }) : t._e(), t._v("\n\n        " + t._s(e.label) + "\n      ")])])
            }
            )), 0) : t._e()])
        }
        ), [], !1, (function dropdown_menu_injectStyles(e) {
            this.$style = B.locals || B
        }
        ), null, null).exports
          , L = o(22964)
          , F = (0,
        s.aZ)({
            name: "ColorSelection",
            components: {
                DropdownMenu: N
            },
            props: {
                selectedColor: {
                    type: String,
                    required: !0
                }
            },
            emits: ["select-color"],
            setup: ()=>({
                dropdownOptions: [{
                    label: (0,
                    b.dW)("Black"),
                    type: i.lA.ColorsAsWords.Black
                }, {
                    label: (0,
                    b.dW)("White"),
                    type: i.lA.ColorsAsWords.White
                }, {
                    label: (0,
                    b.dW)("Both"),
                    type: L.b.Colors.Both
                }]
            })
        })
          , Z = {
            component: "color-selection-component",
            title: "color-selection-title"
        };
        var O = (0,
        v.Z)(F, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: [e.$style.component]
            }, [o("dropdown-menu", {
                class: e.$style.title,
                attrs: {
                    "align-right": !1,
                    "data-cy": "game-review-color-selection",
                    icon: "chevron-bottom",
                    options: e.dropdownOptions,
                    "prefix-label": e.$trans("Reviewing as"),
                    "selected-option": e.selectedColor
                },
                on: {
                    "menu-change": function(t) {
                        return e.$emit("select-color", t)
                    }
                }
            })], 1)
        }
        ), [], !1, (function color_selection_injectStyles(e) {
            this.$style = Z.locals || Z
        }
        ), null, null).exports;
        const j = [(0,
        b.dW)("Analyzing Game..."), (0,
        b.dW)("Finding Tips for You..."), (0,
        b.dW)("Checking Mistakes..."), (0,
        b.dW)("Looking for Missed Wins..."), (0,
        b.dW)("Evaluating Positions..."), (0,
        b.dW)("Calculating Variations..."), (0,
        b.dW)("Examining Tactics..."), (0,
        b.dW)("Generating Training Plan...")]
          , I = {
            magnifyingGlass: "M30.38 26.556c.414.413.62.812.62 1.19 0 .584-.399 1.273-1.19 2.068-.79.79-1.48 1.186-2.068 1.186-.413 0-.826-.206-1.239-.62l-5.423-5.423c-2.31 1.48-4.805 2.218-7.492 2.218-2.446 0-4.71-.609-6.792-1.833-2.086-1.222-3.738-2.877-4.962-4.959C.612 18.301 0 16.033 0 13.591s.612-4.71 1.834-6.795C3.058 4.714 4.71 3.058 6.796 1.837 8.878.612 11.142 0 13.588 0c2.446 0 4.71.612 6.795 1.834 2.086 1.22 3.737 2.876 4.962 4.958 1.221 2.086 1.834 4.35 1.834 6.796 0 2.719-.76 5.217-2.271 7.492l5.473 5.476zm-11.729-4.21c1.55-.913 2.782-2.145 3.695-3.695.914-1.55 1.369-3.237 1.369-5.063 0-1.827-.455-3.514-1.369-5.064-.913-1.55-2.145-2.778-3.695-3.695-1.55-.91-3.237-1.365-5.063-1.365-1.823 0-3.514.455-5.064 1.368-1.55.914-2.782 2.146-3.695 3.696-.91 1.55-1.365 3.236-1.365 5.063 0 1.827.455 3.513 1.368 5.064.914 1.55 2.146 2.781 3.696 3.695 1.55.913 3.236 1.368 5.063 1.368 1.823 0 3.51-.458 5.06-1.372z",
            spinner: "M12.608 12.541l6.878-4.812c.871 1.245 1.366 2.613 1.488 4.102.12 1.494-.128 2.917-.746 4.28-.618 1.361-1.544 2.47-2.786 3.338l-4.834-6.908zM5.7 17.375c-.868-1.242-1.358-2.605-1.473-4.092-.112-1.488.141-2.912.766-4.275.624-1.357 1.558-2.473 2.803-3.344l4.812 6.877-6.907 4.834z"
        };
        var E = (0,
        s.aZ)({
            name: "LoadingScreen",
            props: {
                depth: {
                    type: Number,
                    required: !0
                },
                progress: {
                    type: Number,
                    default: 0
                }
            },
            setup(e) {
                const t = (0,
                s.Fl)((()=>{
                    const t = 236 * e.progress;
                    return {
                        "stroke-dasharray": `${t} ${236 - t}`
                    }
                }
                ))
                  , o = (0,
                s.iH)(0);
                let a;
                return (0,
                s.bv)((()=>{
                    a = setInterval((()=>{
                        o.value = o.value >= j.length - 1 ? 0 : o.value + 1
                    }
                    ), 1500)
                }
                )),
                (0,
                s.Ah)((()=>{
                    clearInterval(a)
                }
                )),
                {
                    loadingRectangleStyles: t,
                    phrase: (0,
                    s.Fl)((()=>j[o.value])),
                    paths: I
                }
            }
        })
          , q = {
            component: "loading-screen-component",
            depth: "loading-screen-depth",
            loading: "loading-screen-loading",
            rect: "loading-screen-rect",
            rectangle: "loading-screen-rectangle",
            spinner: "loading-screen-spinner",
            mag: "loading-screen-mag",
            text: "loading-screen-text",
            "fade-enter-active": "loading-screen-fade-enter-active",
            "fade-leave-active": "loading-screen-fade-leave-active",
            "fade-enter": "loading-screen-fade-enter",
            horizontalLineGrow: "loading-screen-horizontalLineGrow",
            verticalLineGrow: "loading-screen-verticalLineGrow"
        };
        var W = (0,
        v.Z)(E, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component
            }, [o("svg", {
                class: e.$style.rect,
                attrs: {
                    width: "63",
                    height: "63",
                    fill: "none",
                    viewBox: "0 0 63 63"
                }
            }, [o("rect", {
                class: e.$style.rectangle,
                attrs: {
                    width: "59",
                    height: "59",
                    x: "2",
                    y: "2",
                    "stroke-width": "4",
                    rx: "8"
                }
            }), e._v(" "), o("path", {
                class: e.$style.loading,
                style: e.loadingRectangleStyles,
                attrs: {
                    width: "59",
                    height: "59",
                    d: "M2 10C2 5.58172 5.58172 2 10 2H32H53C57.4183 2 61 5.58172 61 10V53C61\n      57.4183 57.4183 61 53 61H10C5.58172 61 2 57.4183 2 53V10Z",
                    x: "2",
                    y: "2",
                    "stroke-width": "4",
                    rx: "8"
                }
            }), e._v(" "), o("svg", {
                attrs: {
                    width: "63",
                    height: "51",
                    fill: "none",
                    viewBox: "0 -15 31 51"
                }
            }, [o("path", {
                class: e.$style.mag,
                attrs: {
                    "fill-opacity": "0.65",
                    d: e.paths.magnifyingGlass
                }
            }), e._v(" "), o("svg", {
                attrs: {
                    width: "25",
                    height: "25",
                    fill: "none",
                    viewBox: "-1 -1 25 25"
                }
            }, [o("path", {
                class: e.$style.spinner,
                attrs: {
                    "fill-opacity": "0.65",
                    d: e.paths.spinner
                }
            })])])]), e._v(" "), o("transition", {
                attrs: {
                    name: "loading-screen-fade",
                    mode: "out-in"
                }
            }, [o("span", {
                key: e.phrase,
                class: e.$style.text,
                domProps: {
                    textContent: e._s(e.phrase)
                }
            })]), e._v(" "), e.depth ? o("span", {
                class: e.$style.depth,
                domProps: {
                    textContent: e._s("Depth=" + e.depth)
                }
            }) : e._e()], 1)
        }
        ), [], !1, (function loading_screen_injectStyles(e) {
            this.$style = q.locals || q
        }
        ), null, null).exports
          , R = (0,
        s.aZ)({
            name: "CoachComment",
            props: {
                coachAvatar: {
                    type: String
                },
                commentClass: {
                    type: String,
                    default: ""
                }
            }
        })
          , z = {
            component: "coach-comment-component"
        };
        var D = (0,
        v.Z)(R, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                class: [e.$style.component, e.commentClass]
            }, [e._t("default")], 2)
        }
        ), [], !1, (function coach_comment_injectStyles(e) {
            this.$style = z.locals || z
        }
        ), null, null).exports
          , G = (0,
        s.aZ)({
            name: "Coach",
            directives: {
                tooltip: k.Z
            },
            props: {
                coachAvatar: {
                    type: String
                },
                commentClass: {
                    type: String,
                    default: ""
                }
            },
            emits: ["show-modal"]
        })
          , V = {
            component: "coach-component",
            coach: "coach-coach",
            coachimage: "coach-coachimage",
            content: "coach-content",
            label: "coach-label"
        };
        var U = (0,
        v.Z)(G, (function() {
            var e, t = this, o = t.$createElement, s = t._self._c || o;
            return s("div", {
                class: [t.$style.component, (e = {},
                e[t.$style["no-avatar"]] = !t.coachAvatar,
                e)]
            }, [t.coachAvatar ? s("div", {
                class: t.$style.coach
            }, [s("img", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: t.$trans("Chess.com Coach"),
                    expression: "$trans('Chess.com Coach')"
                }],
                class: t.$style.coachimage,
                attrs: {
                    alt: t.$trans("Chess.com Coach"),
                    height: 40,
                    width: 40,
                    src: t.coachAvatar
                }
            }), t._v(" "), s("div", {
                class: t.$style.label,
                on: {
                    click: function(e) {
                        return t.$emit("show-modal")
                    }
                }
            }, [t._v("\n      " + t._s(t.$trans("coach")) + "\n\n      "), s("span", {
                class: ["icon-font-chess", "chevron-bottom"]
            })])]) : t._e(), t._v(" "), s("div", {
                class: t.$style.content
            }, [t._t("default")], 2)])
        }
        ), [], !1, (function coach_injectStyles(e) {
            this.$style = V.locals || V
        }
        ), null, null).exports
          , H = (0,
        s.aZ)({
            name: "Themes",
            components: {
                Coach: U,
                CoachComment: D
            },
            props: {
                coachAvatar: String,
                insights: {
                    type: Array,
                    default: ()=>[]
                },
                lessons: {
                    type: Array,
                    default: ()=>[]
                },
                puzzles: {
                    type: Array,
                    default: ()=>[]
                }
            },
            emits: ["click-theme", "show-coach-modal"],
            setup: e=>({
                categories: (0,
                s.Fl)((()=>({
                    insights: {
                        name: (0,
                        b.dW)("Insights"),
                        icon: "insights-top",
                        values: e.insights
                    },
                    lessons: {
                        name: (0,
                        b.dW)("Lessons"),
                        icon: "learn-top",
                        values: e.lessons
                    },
                    puzzles: {
                        name: (0,
                        b.dW)("Puzzles"),
                        icon: "puzzles-top",
                        values: e.puzzles
                    }
                })))
            })
        })
          , Y = {
            component: "themes-component",
            nocoach: "themes-nocoach",
            wrap: "themes-wrap",
            title: "themes-title",
            header: "themes-header",
            icon: "themes-icon",
            "insights-top": "themes-insights-top",
            "learn-top": "themes-learn-top",
            "puzzles-top": "themes-puzzles-top",
            row: "themes-row"
        };
        var K = (0,
        v.Z)(H, (function() {
            var e, t = this, o = t.$createElement, s = t._self._c || o;
            return t.lessons.length || t.puzzles.length || t.insights.length ? s("div", {
                class: [t.$style.component, (e = {},
                e[t.$style.nocoach] = !t.coachAvatar,
                e)],
                attrs: {
                    "data-cy": "game-review-themes"
                }
            }, [s("coach", {
                class: t.$style.component,
                attrs: {
                    "coach-avatar": t.coachAvatar
                },
                on: {
                    "show-modal": function(e) {
                        return t.$emit("show-coach-modal")
                    }
                }
            }, [s("coach-comment", [s("div", {
                class: t.$style.title,
                domProps: {
                    textContent: t._s(t.$trans("Great job completing this Game Review."))
                }
            }), t._v(" "), s("div", {
                domProps: {
                    textContent: t._s(t.$trans("Based on this game, I have some training suggestions for you."))
                }
            })])], 1), t._v(" "), t._l(t.categories, (function(e, o) {
                return [e.values.length ? s("div", {
                    key: o,
                    class: t.$style.wrap,
                    attrs: {
                        "data-cy": "game-review-themes-" + e.name
                    }
                }, [s("div", {
                    class: [t.$style[e.icon], t.$style.header, t.$style.icon],
                    domProps: {
                        textContent: t._s(e.name)
                    }
                }), t._v(" "), t._l(e.values, (function(a) {
                    return [a.url ? s("a", {
                        key: e.name + "-" + a.label,
                        class: t.$style.row,
                        on: {
                            click: function(e) {
                                return e.preventDefault(),
                                t.$emit("click-theme", {
                                    url: a.url,
                                    type: o
                                })
                            }
                        }
                    }, [s("span", {
                        class: t.$style.theme,
                        domProps: {
                            textContent: t._s(a.label)
                        }
                    })]) : t._e()]
                }
                ))], 2) : t._e()]
            }
            ))], 2) : t._e()
        }
        ), [], !1, (function themes_injectStyles(e) {
            this.$style = Y.locals || Y
        }
        ), null, null).exports
          , J = o(49458)
          , X = o(3366)
          , Q = (0,
        s.aZ)({
            name: "ReviewTabView",
            components: {
                Accuracy: P,
                ColorSelection: O,
                FlowButtons: h,
                LoadingScreen: W,
                ThemesList: K,
                V5Switch: l.V5Switch
            },
            props: {
                accuracies: Object,
                avatars: Object,
                coachAvatar: String,
                depth: {
                    type: Number,
                    required: !0
                },
                progress: {
                    type: Number,
                    default: 0
                },
                gameResult: String,
                isBasicAnalysis: Boolean,
                isLocked: Boolean,
                selectedColor: {
                    type: String,
                    required: !0
                },
                showBestMode: Boolean,
                showCoachSummary: Boolean,
                themes: Object
            },
            emits: ["click-theme", "select-color", "show-coach-modal", "toggle-show-best-mode"],
            setup: (e,{emit: t})=>((0,
            s.bv)((()=>{
                e.showBestMode && (0,
                r.K)(J.Y.Events.ShowBestMoveModeActive)
            }
            )),
            {
                headerIcon: (0,
                i.P$)({
                    path: c.xt[d.x.Classifications.Types.BestMove].icon,
                    size: String(32)
                }),
                loading: (0,
                s.Fl)((()=>e.progress < 1)),
                makeSvgIcon: i.P$,
                newGameButton: (0,
                X.i)(X.E.NewGame, y.l.Primary),
                elements: L.b.Elements,
                toggleShowBestMode: function toggleShowBestMode(e) {
                    t("toggle-show-best-mode", {
                        open: e
                    }),
                    (0,
                    r.K)(J.Y.Events.ShowBestMoveModeActive, {
                        type: e
                    })
                }
            })
        })
          , ee = {
            bold: "review-view-bold",
            header: "review-view-header",
            inactive: "review-view-inactive",
            scrollable: "review-view-scrollable",
            buttons: "review-view-buttons",
            button: "review-view-button",
            expanded: "review-view-expanded",
            coach: "review-view-coach",
            component: "review-view-component",
            main: "review-view-main",
            arc: "review-view-arc",
            movelist: "review-view-movelist",
            invisible: "review-view-invisible",
            icon: "review-view-icon",
            review: "review-view-review",
            players: "review-view-players",
            section: "review-view-section",
            bottom: "review-view-bottom",
            accuracy: "review-view-accuracy",
            depth: "review-view-depth",
            selection: "review-view-selection",
            showbest: "review-view-showbest"
        };
        var te = (0,
        v.Z)(Q, (function() {
            var e, t, o, s = this, a = s.$createElement, n = s._self._c || a;
            return n("div", {
                class: [s.$style.component, s.elements.Content]
            }, [n("section", {
                class: [s.$style.section, s.$style.arc, s.elements.Arc]
            }, [s._t("game-arc")], 2), s._v(" "), n("div", {
                class: [s.$style.main, s.elements.ScrollContainer]
            }, [n("div", {
                class: s.$style.depth
            }, [s._v("\n      Depth " + s._s(s.depth) + "\n    ")]), s._v(" "), n("div", {
                class: s.$style.review
            }, [n("span", {
                class: s.$style.icon,
                domProps: {
                    innerHTML: s._s(s.headerIcon)
                }
            }), s._v(" "), n("span", {
                domProps: {
                    textContent: s._s(s.$trans("Game Review"))
                }
            })]), s._v(" "), n("section", {
                class: [s.$style.section, s.$style.accuracy]
            }, [n("accuracy", {
                attrs: {
                    accuracies: s.accuracies,
                    avatars: s.avatars,
                    "game-result": s.gameResult,
                    "is-basic-analysis": s.isBasicAnalysis
                }
            })], 1), s._v(" "), -1 === s.selectedMoveNumber ? n("flow-buttons", {
                class: [s.$style.button, (e = {},
                e[s.$style.shift] = !s.canViewCoachCommentary,
                e)],
                attrs: {
                    buttons: s.flowButtons
                }
            }) : s._e(), s._v(" "), n("transition", {
                attrs: {
                    name: "review-game-summary",
                    mode: "out-in",
                    appear: ""
                }
            }, [s.loading ? n("section", {
                key: "loading",
                class: s.$style.section
            }, [n("loading-screen", {
                attrs: {
                    depth: s.depth,
                    progress: s.progress,
                    "data-cy": "game-review-loading-screen"
                }
            })], 1) : n("section", {
                key: "loaded",
                class: [s.$style.section, s.$style.tallies]
            }, [s._t("tallies")], 2)]), s._v(" "), n("transition", {
                attrs: {
                    name: "review-move-list",
                    mode: "out-in",
                    appear: ""
                }
            }, [s.loading ? s._e() : n("div", {
                key: "move-list",
                class: s.elements.MoveList
            }, [n("section", {
                class: [s.$style.section]
            }, [s._t("coach-summary")], 2), s._v(" "), s.isBasicAnalysis ? s._e() : n("section", {
                class: [s.$style.section, s.$style.selection]
            }, [n("color-selection", {
                class: [s.$style.colors, (t = {},
                t[s.$style.invisible] = s.loading,
                t)],
                attrs: {
                    "selected-color": s.selectedColor
                },
                on: {
                    "select-color": function(e) {
                        return s.$emit("select-color", e)
                    }
                }
            }), s._v(" "), n("div", {
                class: s.$style.showbest,
                attrs: {
                    "data-cy": "game-review-show-best-toggle"
                }
            }, [n("span", {
                domProps: {
                    textContent: s._s(s.$trans("Show Best Moves"))
                }
            }), s._v(" "), n("v5-switch", {
                attrs: {
                    name: "best-move-mode",
                    value: s.showBestMode
                },
                on: {
                    input: s.toggleShowBestMode
                }
            })], 1)], 1), s._v(" "), n("section", {
                class: [s.$style.section, s.$style.movelist]
            }, [s._t("move-list")], 2), s._v(" "), n("section", {
                class: [s.$style.section]
            }, [s._t("summary")], 2), s._v(" "), n("section", {
                class: [s.$style.section, s.$style.bottom]
            }, [n("themes-list", s._b({
                attrs: {
                    "coach-avatar": s.coachAvatar
                },
                on: {
                    "click-theme": function(e) {
                        return s.$emit("click-theme", e)
                    },
                    "show-coach-modal": function(e) {
                        return s.$emit("show-coach-modal")
                    }
                }
            }, "themes-list", s.themes.collection, !1)), s._v(" "), n("flow-buttons", {
                class: [s.$style.button, (o = {},
                o[s.$style.expanded] = !s.coachAvatar,
                o)],
                attrs: {
                    buttons: [s.newGameButton]
                }
            })], 1)])])], 1)])
        }
        ), [], !1, (function review_view_injectStyles(e) {
            this.$style = ee.locals || ee
        }
        ), null, null).exports
          , oe = o(73665)
          , se = (0,
        s.aZ)({
            name: "CoachSummary",
            components: {
                Coach: U,
                CoachComment: D,
                FlowButtons: h
            },
            props: {
                canViewCoachCommentary: Boolean,
                coachAvatar: String,
                label: String,
                phrase: String,
                selectedMoveNumber: Number,
                uiLocked: Boolean
            },
            emits: ["show-coach-modal"],
            setup: e=>({
                flowButtons: (0,
                s.Fl)((()=>e.uiLocked ? [(0,
                X.i)(X.E.Upgrade)] : e.canViewCoachCommentary ? [(0,
                X.i)(X.E.Start)] : [(0,
                X.i)(X.E.Upgrade), (0,
                X.i)(X.E.Start)]))
            })
        })
          , ae = {
            component: "coach-summary-component",
            button: "coach-summary-button",
            shift: "coach-summary-shift"
        };
        var ne, re = (0,
        v.Z)(se, (function() {
            var e, t, o = this, s = o.$createElement, a = o._self._c || s;
            return !o.canViewCoachCommentary || o.label && o.phrase ? a("div", {
                class: o.$style.component,
                attrs: {
                    "data-cy": "game-review-coach-summary"
                }
            }, [-1 === o.selectedMoveNumber ? a("flow-buttons", {
                class: [o.$style.button, (e = {},
                e[o.$style.shift] = !o.canViewCoachCommentary,
                e)],
                attrs: {
                    buttons: o.flowButtons
                }
            }) : o._e(), o._v(" "), a("coach", {
                attrs: {
                    "coach-avatar": o.coachAvatar
                },
                on: {
                    "show-modal": function(e) {
                        return o.$emit("show-coach-modal")
                    }
                }
            }, [a("coach-comment", [o.canViewCoachCommentary ? a("div", {
                class: [(t = {},
                t[o.$style.arc] = !o.canViewCoachCommentary,
                t)]
            }, [a("span", {
                class: o.$style.title,
                domProps: {
                    textContent: o._s(o.label)
                }
            }), o._v(" "), o.phrase ? a("span", {
                class: o.$style.separator,
                domProps: {
                    textContent: o._s("â€”")
                }
            }) : o._e(), o._v(" "), a("span", {
                class: [o.$style.phrase, o.$style.description],
                domProps: {
                    textContent: o._s(o.phrase)
                }
            })]) : a("span", {
                class: o.$style.phrase,
                domProps: {
                    textContent: o._s(o.$trans("Hi! Let me walk you through this game. I'd love to explain each move in detail. If you are interested, upgrade to Diamond!"))
                }
            })])], 1)], 1) : o._e()
        }
        ), [], !1, (function coach_summary_injectStyles(e) {
            this.$style = ae.locals || ae
        }
        ), null, null).exports, ie = o(12585);
        (e=>{
            let t;
            var o;
            (o = t = e.Events || (e.Events = {})).Close = "close",
            o.SelectCoach = "selectedCoach"
        }
        )(ne || (ne = {}));
        var le = (0,
        s.aZ)({
            name: "CoachSelectionButton",
            props: {
                coach: {
                    type: Object,
                    default: ()=>({})
                },
                selected: {
                    type: Boolean,
                    default: !1
                },
                supportsDarkMode: {
                    type: Boolean,
                    default: !1
                }
            },
            setup: (e,{emit: t})=>({
                src: (0,
                f.n)(e.coach.imagePrimary),
                srcSet: (0,
                _.b)(e.coach.imagePrimary),
                select: function select() {
                    t(ne.Events.SelectCoach, e.coach)
                }
            })
        })
          , ce = {
            container: "coach-selection-button-container",
            darkModeSupport: "coach-selection-button-darkModeSupport",
            borderButton: "coach-selection-button-borderButton",
            iconContainer: "coach-selection-button-iconContainer",
            label: "coach-selection-button-label",
            none: "coach-selection-button-none",
            iconX: "coach-selection-button-iconX",
            selected: "coach-selection-button-selected"
        };
        var de = (0,
        v.Z)(le, (function() {
            var e, t, o, s = this, a = s.$createElement, n = s._self._c || a;
            return n("div", {
                class: [s.$style.container, (e = {},
                e[s.$style.darkModeSupport] = s.supportsDarkMode,
                e)]
            }, [n("button", {
                class: [s.$style.borderButton, (t = {},
                t[s.$style.selected] = s.selected,
                t), (o = {},
                o[s.$style.none] = s.coach.isNone,
                o)],
                on: {
                    click: s.select
                }
            }, [s.coach.isNone ? n("div", {
                class: s.$style.iconContainer
            }, [n("div", {
                class: ["icon-font-chess", "x", s.$style.iconX]
            })]) : n("img", {
                attrs: {
                    alt: s.coach.name,
                    srcset: s.srcSet,
                    src: s.src,
                    width: "85",
                    height: "85"
                }
            })]), s._v(" "), n("div", {
                class: s.$style.label,
                domProps: {
                    textContent: s._s(s.coach.name)
                }
            })])
        }
        ), [], !1, (function coach_selection_button_injectStyles(e) {
            this.$style = ce.locals || ce
        }
        ), null, null).exports
          , ue = o(20647)
          , me = (0,
        s.aZ)({
            name: "CoachSelectionMenu",
            components: {
                CoachSelectionButton: de
            },
            props: {
                supportsDarkMode: Boolean
            },
            setup: ()=>({
                coaches: ue.H,
                isSelected: function(e) {
                    var t;
                    return (null == (t = n.a) ? void 0 : t.name) === e.name
                },
                setCoach: n.S
            })
        })
          , pe = me
          , ve = {
            container: "coach-selection-menu-container"
        };
        var he = (0,
        v.Z)(pe, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.container
            }, e._l(e.coaches, (function(t) {
                return o("coach-selection-button", {
                    key: t.name,
                    attrs: {
                        "supports-dark-mode": e.supportsDarkMode,
                        selected: e.isSelected(t),
                        coach: t
                    },
                    on: {
                        selectedCoach: e.setCoach
                    }
                })
            }
            )), 1)
        }
        ), [], !1, (function coach_selection_menu_injectStyles(e) {
            this.$style = ve.locals || ve
        }
        ), null, null)
          , ye = he.exports
          , ge = o(32271)
          , be = (0,
        s.aZ)({
            name: "BoardSettings",
            components: {
                Modal: l.Modal,
                CoachSelectionMenu: ye,
                SectionTitleDismissibleUpd: ge.Z
            },
            props: {
                fields: {
                    type: Array,
                    default: ()=>[]
                }
            },
            methods: {
                close() {
                    this.$emit(ne.Events.Close)
                }
            }
        })
          , we = {
            container: "coach-settings-container",
            close: "coach-settings-close",
            body: "coach-settings-body",
            header: "coach-settings-header"
        };
        var fe = (0,
        v.Z)(be, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("Modal", {
                class: e.$style.container,
                attrs: {
                    "auto-show": "",
                    corners: "rounded-sm",
                    "bg-color": "dark-light"
                },
                on: {
                    "modal-did-hide": e.close
                }
            }, [o("section-title-dismissible-upd", {
                class: e.$style.header,
                on: {
                    close: function(t) {
                        return e.close()
                    }
                }
            }, [e._v("\n    " + e._s(e.$trans("Coach Settings")) + "\n  ")]), e._v(" "), o("div", {
                class: e.$style.body
            }, [o("coach-selection-menu", {
                attrs: {
                    "supports-dark-mode": ""
                }
            })], 1)], 1)
        }
        ), [], !1, (function coach_settings_injectStyles(e) {
            this.$style = we.locals || we
        }
        ), null, null).exports
          , ke = o(31663);
        function createCoachSelection(e) {
            const t = function renderRootComponent({component: e, on: t, props: o, router: a, plugins: n, target: r}) {
                const i = (0,
                s.iH)(!1);
                let l = null;
                return null == n || n.forEach((e=>ke.default.use(e))),
                {
                    hide: ()=>i.value = !1,
                    show: ()=>{
                        i.value = !0,
                        l || (l = new ke.default({
                            render: s=>i.value && s(e, {
                                props: o,
                                on: t
                            }),
                            router: a
                        }).$mount(r))
                    }
                }
            }({
                component: fe,
                target: e,
                on: {
                    [ne.Events.Close]() {
                        t.hide()
                    }
                }
            });
            return {
                show: t.show
            }
        }
        let _e;
        function showCoachModal() {
            _e || (_e = createCoachSelection("#modal-coach")),
            _e.show()
        }
        var $e = o(18160);
        const Se = {
            balanced: {
                desc: $e.Z.trans("Neither player ever had an advantage."),
                label: $e.Z.trans("Balanced"),
                scenarios: {
                    drawEven: $e.Z.trans("That was a very even game."),
                    drawLosing: null,
                    drawWinning: null,
                    lossLosing: $e.Z.trans("That was quite a close game."),
                    lossWinningFlag: null,
                    winLosingFlag: null,
                    winWinning: $e.Z.trans("You won a close game - well done!")
                }
            },
            rough: {
                desc: $e.Z.trans("That was a serious game!"),
                label: $e.Z.trans("Intense"),
                scenarios: {
                    drawEven: $e.Z.trans("You had winning chances but in the end it was even."),
                    drawLosing: $e.Z.trans("You escaped with the draw!"),
                    drawWinning: $e.Z.trans("Unfortunate draw - you were winning!"),
                    lossLosing: $e.Z.trans("Tough game. Your opponent played well."),
                    lossWinningFlag: $e.Z.trans("You were winning - but you ran out of time!"),
                    winLosingFlag: $e.Z.trans("Saved by the clock!"),
                    winWinning: $e.Z.trans("Nice win. You were never in trouble.")
                }
            },
            sharp: {
                desc: $e.Z.trans("A back and forth game where both players had chances."),
                label: $e.Z.trans("Sharp"),
                scenarios: {
                    drawEven: $e.Z.trans("When the dust settled, it was even."),
                    drawLosing: $e.Z.trans("You had your chances, but the draw was still a good outcome."),
                    drawWinning: $e.Z.trans("Even though you were winning at one point, at least you got the draw."),
                    lossLosing: $e.Z.trans("That could have gone either way - a very dynamic game!"),
                    lossWinningFlag: $e.Z.trans("You ended up with the advantage, but unfortunately too late."),
                    winLosingFlag: $e.Z.trans("A back and forth game - but you were quicker."),
                    winWinning: $e.Z.trans("That was a real battle - but you earned the win!")
                }
            },
            smooth: {
                desc: $e.Z.trans("One player took the advantage and never let go."),
                label: $e.Z.trans("Smooth"),
                scenarios: {
                    drawEven: null,
                    drawLosing: $e.Z.trans("Nice save - could have been worse!"),
                    drawWinning: $e.Z.trans("You were winning but settled for the draw."),
                    lossLosing: $e.Z.trans("Looks like this game didn't go your way."),
                    lossWinningFlag: $e.Z.trans("Watch the clock - you were winning!"),
                    winLosingFlag: $e.Z.trans("Saved by the clock!"),
                    winWinning: $e.Z.trans("You had the advantage from start to finish!")
                }
            },
            throwAway: {
                desc: $e.Z.trans("One player was winning, but then gave it away."),
                label: $e.Z.trans("Giveaway"),
                scenarios: {
                    drawEven: null,
                    drawLosing: $e.Z.trans("You went from winning to losing, but at least got the draw."),
                    drawWinning: $e.Z.trans("That should have been your win!"),
                    lossLosing: $e.Z.trans("Looks like that game slipped through your fingers."),
                    lossWinningFlag: $e.Z.trans("You fought back, but not quickly enough."),
                    winLosingFlag: $e.Z.trans("You lost the advantage but were saved by the clock!"),
                    winWinning: $e.Z.trans("Nice comeback win!")
                }
            },
            sudden: {
                desc: $e.Z.trans("A close game that was lost by a mistake."),
                label: $e.Z.trans("Sudden"),
                scenarios: {
                    drawEven: null,
                    drawLosing: $e.Z.trans("You got into trouble but escaped with the draw!"),
                    drawWinning: $e.Z.trans("You weren't quite able to convert your advantage."),
                    lossLosing: $e.Z.trans("One mistake made all the difference."),
                    lossWinningFlag: $e.Z.trans("You broke through, but ran out of time."),
                    winLosingFlag: $e.Z.trans("You outlasted your opponent even after making a mistake."),
                    winWinning: $e.Z.trans("Great win! You saw your chance and took it.")
                }
            },
            wild: {
                desc: $e.Z.trans("A chaotic game where both players had many chances to win."),
                label: $e.Z.trans("Wild"),
                scenarios: {
                    drawEven: $e.Z.trans("A back and forth game that settled peacefully!"),
                    drawLosing: $e.Z.trans("That battle could have ended worse - good draw!"),
                    drawWinning: $e.Z.trans("You fought for an advantage, but ended up with a draw."),
                    lossLosing: $e.Z.trans("A back and forth fight that didn't go your way."),
                    lossWinningFlag: $e.Z.trans("You were finally winning - until the clock ran out."),
                    winLosingFlag: $e.Z.trans("Chances on both sides, but you were quicker."),
                    winWinning: $e.Z.trans("A wild game - and you came out on top!")
                }
            }
        };
        var Ce = o(48894)
          , xe = o(32614)
          , Ae = (0,
        s.aZ)({
            name: "CoachSummaryController",
            components: {
                CoachSummary: re
            },
            setup: ()=>({
                canViewCoachCommentary: (0,
                s.Fl)((()=>ie.d.canViewCoachCommentary)),
                coachAvatar: (0,
                s.Fl)((()=>n.a.imagePrimary)),
                onShowCoachModal: showCoachModal,
                selectedMoveNumber: (0,
                s.Fl)((()=>Ce.j.selectedMoveNumber)),
                summary: (0,
                s.Fl)((()=>function getCoachSummary(e) {
                    var t;
                    if (!x.F.arc)
                        return {
                            label: void 0,
                            phrase: void 0
                        };
                    const o = e && (0,
                    i.RS)(e)
                      , s = Se[x.F.arc]
                      , a = o && x.F.arcPlayerScenarios[o];
                    return a ? {
                        label: s.label,
                        phrase: null != (t = s.scenarios[a]) ? t : s.desc
                    } : {
                        label: s.label,
                        phrase: s.desc
                    }
                }(xe.S.userColor))),
                uiLocked: (0,
                s.Fl)((()=>ie.d.uiLocked))
            })
        })
          , Me = Ae
          , Pe = (0,
        v.Z)(Me, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("coach-summary", {
                attrs: {
                    "can-view-coach-commentary": e.canViewCoachCommentary,
                    "coach-avatar": e.coachAvatar,
                    label: e.summary.label,
                    phrase: e.summary.phrase,
                    "selected-move-number": e.selectedMoveNumber,
                    "ui-locked": e.uiLocked
                },
                on: {
                    "show-coach-modal": e.onShowCoachModal
                }
            })
        }
        ), [], !1, null, null, null).exports
          , Te = o(28426)
          , Be = (0,
        s.aZ)({
            name: "LoadingChart",
            props: {
                progress: {
                    type: Number,
                    default: 0
                }
            },
            setup: e=>({
                loadingLineStyles: (0,
                s.Fl)((()=>({
                    width: 100 * e.progress + "%"
                })))
            })
        })
          , Ne = {
            component: "loading-chart-component",
            finished: "loading-chart-finished",
            grid: "loading-chart-grid",
            loadline: "loading-chart-loadline",
            vertical: "loading-chart-vertical",
            horizontal: "loading-chart-horizontal",
            depth: "loading-chart-depth",
            graph: "loading-chart-graph",
            verticalLineGrow: "loading-chart-verticalLineGrow",
            horizontalLineGrow: "loading-chart-horizontalLineGrow"
        };
        var Le = (0,
        v.Z)(Be, (function() {
            var e, t = this, o = t.$createElement, s = t._self._c || o;
            return s("div", {
                class: [t.$style.component, (e = {},
                e[t.$style.finished] = 1 === t.progress,
                e)]
            }, [s("div", {
                class: t.$style.graph
            }, [s("div", {
                class: t.$style.grid
            }, [s("svg", {
                attrs: {
                    height: "70",
                    fill: "none",
                    width: "100%"
                }
            }, [s("g", {
                class: t.$style.vertical
            }, t._l(19, (function(e) {
                return s("path", {
                    key: e,
                    attrs: {
                        d: "M1 0v100"
                    }
                })
            }
            )), 0), t._v(" "), s("g", {
                class: t.$style.horizontal
            }, t._l(5, (function(e) {
                return s("path", {
                    key: e,
                    attrs: {
                        d: "M1 0h466"
                    }
                })
            }
            )), 0)]), t._v(" "), s("div", {
                class: t.$style.loadline,
                style: t.loadingLineStyles
            })])])])
        }
        ), [], !1, (function loading_chart_injectStyles(e) {
            this.$style = Ne.locals || Ne
        }
        ), null, null).exports
          , Fe = o(59808)
          , Ze = (0,
        s.aZ)({
            name: "GameArc",
            components: {
                Chart: Te.Z,
                LoadingChart: Le
            },
            props: {
                currentPosition: {
                    type: Number,
                    default: -1
                },
                options: {
                    type: Object,
                    required: !0
                },
                progress: {
                    type: Number,
                    default: 0
                }
            },
            setup(e) {
                const t = (0,
                s.iH)();
                return (0,
                s.YP)((()=>e.currentPosition), (function onPositionChange(e) {
                    (0,
                    s.Y3)((()=>{
                        var o;
                        t.value && (0,
                        Fe.G)({
                            chart: null == (o = t.value) ? void 0 : o.chart,
                            chartIndex: 0,
                            currentMoveNumber: e
                        })
                    }
                    ))
                }
                )),
                {
                    chart: t
                }
            }
        })
          , Oe = Ze
          , je = {
            component: "game-arc-component",
            description: "game-arc-description",
            charts: "game-arc-charts",
            "animate-enter-active": "game-arc-animate-enter-active",
            "animate-leave-active": "game-arc-animate-leave-active",
            "animate-enter-to": "game-arc-animate-enter-to",
            "animate-enter": "game-arc-animate-enter",
            "animate-leave-to": "game-arc-animate-leave-to",
            loader: "game-arc-loader",
            chart: "game-arc-chart",
            example: "game-arc-example"
        };
        var Ie = (0,
        v.Z)(Oe, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component
            }, [o("div", {
                class: e.$style.chart
            }, [o("transition", {
                attrs: {
                    appear: "",
                    name: "review-game-arc-animate"
                }
            }, [1 === e.progress ? o("chart", {
                ref: "chart",
                attrs: {
                    "data-cy": "game-review-game-arc-chart",
                    options: e.options
                }
            }) : e._e()], 1), e._v(" "), o("loading-chart", {
                class: e.$style.loader,
                attrs: {
                    progress: e.progress,
                    "data-cy": "game-review-game-arc-loader"
                }
            })], 1)])
        }
        ), [], !1, (function game_arc_injectStyles(e) {
            this.$style = je.locals || je
        }
        ), null, null).exports
          , Ee = o(34104)
          , qe = o(27359)
          , We = o(10268)
          , Re = o(45156)
          , ze = o(37726);
        var De = o(63455);
        function getGameArcChart({hideClassifications: e, keyMoves: t, positions: o}) {
            return {
                chart: {
                    backgroundColor: "transparent",
                    className: "highcharts-game-arc " + (e ? "no-classifications" : ""),
                    height: 70,
                    margin: [0, 0, 0, 0],
                    spacing: [0, 0, 0, 0],
                    type: "areaspline"
                },
                credits: {
                    enabled: !1
                },
                legend: {
                    enabled: !1
                },
                title: {
                    text: ""
                },
                plotOptions: {
                    series: {
                        className: "arc-color",
                        cursor: "pointer",
                        marker: {
                            enabled: !0,
                            radius: 3,
                            states: {
                                hover: {
                                    radiusPlus: 0
                                },
                                select: {
                                    radius: 4
                                }
                            }
                        },
                        negativeColor: !0,
                        point: {
                            events: {
                                click() {
                                    Re.e.emit(We.G.Events.ClickNode, {
                                        move: this.index
                                    })
                                }
                            }
                        },
                        states: {
                            inactive: {
                                enabled: !1
                            }
                        },
                        trackByArea: !0
                    }
                },
                series: [(0,
                De.Zn)({
                    getPoint: e=>function getPoint(e, t) {
                        const o = c.xt[e.classification]
                          , {score: s} = e.playedMove
                          , a = (0,
                        ze.y)(s, We.G.Limits.GameArc - .75);
                        return {
                            className: `analysis-${o.className}-bg ${t.includes(e.moveNumber) ? "key-move" : ""}`,
                            y: a
                        }
                    }(e, t),
                    positions: o,
                    type: "areaspline"
                }), (0,
                De.cS)({
                    currentMoveNumber: 0,
                    limit: We.G.Limits.GameArc,
                    positions: o,
                    positive: !0
                }), (0,
                De.cS)({
                    currentMoveNumber: 0,
                    limit: We.G.Limits.GameArc,
                    positions: o,
                    positive: !1
                })],
                tooltip: {
                    enabled: !0,
                    formatter() {
                        var e;
                        const {playedMove: t} = null != (e = o[this.x - 1]) ? e : {};
                        return `<strong>${(0,
                        qe.D4)(t)}</strong>`
                    }
                },
                xAxis: {
                    crosshair: {
                        width: 2
                    },
                    labels: {
                        enabled: !1
                    }
                },
                yAxis: {
                    max: We.G.Limits.GameArc,
                    min: -We.G.Limits.GameArc,
                    title: {
                        text: ""
                    }
                }
            }
        }
        var Ge = o(37921)
          , Ve = o(48120)
          , Ue = o(34561)
          , He = (0,
        s.aZ)({
            name: "GameArcController",
            components: {
                GameArc: Ie
            },
            setup: ()=>({
                currentPosition: (0,
                s.Fl)(Ue.j),
                options: (0,
                s.Fl)((()=>getGameArcChart({
                    hideClassifications: !(0,
                    Ge.i)(),
                    positions: (0,
                    Ee.N)(),
                    keyMoves: (0,
                    Ve.K)()
                }))),
                progress: (0,
                s.Fl)((()=>x.F.progress))
            })
        })
          , Ye = (0,
        v.Z)(He, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("game-arc", {
                ref: "component",
                attrs: {
                    "current-position": e.currentPosition,
                    options: e.options,
                    progress: e.progress
                }
            })
        }
        ), [], !1, null, null, null).exports
          , Ke = o(2047)
          , Je = (0,
        s.aZ)({
            name: "MoveNode",
            props: {
                color: {
                    type: String,
                    required: !0
                },
                position: {
                    type: Object,
                    required: !0
                },
                isColorSelected: Boolean,
                isSelected: Boolean
            },
            emits: ["select-node"],
            setup: e=>({
                classification: (0,
                s.Fl)((()=>{
                    var t;
                    return null != (t = c.xt[e.position.classification]) ? t : {}
                }
                )),
                highlightMove: (0,
                s.Fl)((()=>e.position.isLastBookMove || e.isColorSelected && e.position.isKeyMove)),
                makeSvgIcon: i.P$,
                translateMoveText: Ke.o
            })
        })
          , Xe = {
            component: "move-list-node-component",
            white: "move-list-node-white",
            black: "move-list-node-black",
            selected: "move-list-node-selected",
            text: "move-list-node-text",
            icon: "move-list-node-icon"
        };
        var Qe = (0,
        v.Z)(Je, (function() {
            var e, t, o = this, s = o.$createElement, a = o._self._c || s;
            return a("div", {
                class: [o.$style.component, o.$style[o.color], (e = {},
                e[o.$style.selected] = o.isSelected,
                e)],
                attrs: {
                    "data-cy": "game-review-move-node-" + o.position.ids.move,
                    "data-move-number": o.position.ids.move
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        o.$emit("select-node")
                    }
                }
            }, [o.highlightMove ? a("span", {
                class: o.$style.icon,
                domProps: {
                    innerHTML: o._s(o.makeSvgIcon({
                        path: o.classification.icon,
                        size: 16
                    }))
                }
            }) : a("span", {
                class: o.$style.icon
            }), o._v(" "), a("span", {
                class: [o.$style.text, (t = {},
                t["analysis-" + o.classification.className] = o.highlightMove,
                t)]
            }, [o._v(o._s(o.translateMoveText(o.position.san)))])])
        }
        ), [], !1, (function move_list_node_injectStyles(e) {
            this.$style = Xe.locals || Xe
        }
        ), null, null).exports;
        function isRowSelected(e, t) {
            var o, s;
            return (null == (o = e.white) ? void 0 : o.ids.move) === t || (null == (s = e.black) ? void 0 : s.ids.move) === t
        }
        var et = (0,
        s.aZ)({
            name: "MoveRow",
            components: {
                MoveNode: Qe
            },
            props: {
                positions: {
                    type: Object,
                    required: !0
                },
                moveNumber: {
                    type: Number,
                    required: !0
                },
                selectedColors: {
                    type: Array,
                    required: !0
                },
                selectedMoveNumber: {
                    type: Number,
                    required: !0
                }
            },
            emits: ["select-node"],
            setup: e=>({
                rowSelected: (0,
                s.Fl)((()=>isRowSelected(e.positions, e.selectedMoveNumber)))
            })
        })
          , tt = {
            component: "move-list-row-component",
            content: "move-list-row-content",
            open: "move-list-row-open"
        };
        var ot = (0,
        v.Z)(et, (function() {
            var e, t = this, o = t.$createElement, s = t._self._c || o;
            return s("div", {
                class: [t.$style.component, (e = {},
                e[t.$style.open] = t.rowSelected,
                e)]
            }, [s("div", {
                class: t.$style.content
            }, [s("div", {
                class: t.$style.number
            }, [t._v("\n      " + t._s(t.moveNumber) + ".\n    ")]), t._v(" "), t._l(Object.entries(t.positions), (function(e) {
                var o = e[0]
                  , a = e[1];
                return [a ? s("move-node", {
                    key: o,
                    attrs: {
                        color: o,
                        position: a,
                        "is-color-selected": t.selectedColors.includes(o),
                        "is-selected": a.ids.move === t.selectedMoveNumber
                    },
                    on: {
                        "select-node": function(e) {
                            return t.$emit("select-node", {
                                move: a.ids.move
                            })
                        }
                    }
                }) : t._e()]
            }
            ))], 2), t._v(" "), t._t("default")], 2)
        }
        ), [], !1, (function move_list_row_injectStyles(e) {
            this.$style = tt.locals || tt
        }
        ), null, null).exports
          , st = o(36292)
          , at = (0,
        s.aZ)({
            name: "StaticOpening",
            directives: {
                Tooltip: k.Z
            },
            props: {
                opening: {
                    type: Object,
                    required: !0
                },
                includeArrow: {
                    type: Boolean,
                    default: !1
                }
            },
            setup: e=>({
                link: (0,
                s.Fl)((()=>(0,
                st.c)(e.opening.url))),
                tooltip: (0,
                s.Fl)((()=>`${e.opening.code}: ${e.opening.name}`))
            })
        })
          , nt = {
            component: "static-opening-component",
            text: "static-opening-text",
            icon: "static-opening-icon",
            endicon: "static-opening-endicon"
        };
        var rt = (0,
        v.Z)(at, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("a", {
                class: e.$style.component,
                attrs: {
                    href: e.link,
                    "data-cy": "game-review-opening"
                }
            }, [o("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.tooltip,
                    expression: "tooltip"
                }],
                class: e.$style.text
            }, [o("span", {
                class: ["icon-font-chess circle-compass", e.$style.icon]
            }), e._v(" "), o("span", {
                domProps: {
                    textContent: e._s(e.opening.name)
                }
            })]), e._v(" "), e.includeArrow ? o("span", {
                class: ["icon-font-chess chevron-right", e.$style.endicon]
            }) : e._e()])
        }
        ), [], !1, (function static_opening_injectStyles(e) {
            this.$style = nt.locals || nt
        }
        ), null, null).exports
          , it = (0,
        s.aZ)({
            name: "MoveList",
            components: {
                Row: ot,
                StaticOpening: rt
            },
            props: {
                opening: Object,
                rows: Array,
                selectedColors: {
                    type: Array,
                    required: !0
                },
                selectedMoveNumber: {
                    type: Number,
                    required: !0
                }
            },
            emits: ["select-node"],
            setup: e=>({
                isRowSelected: isRowSelected,
                showOpening: function showOpening(t) {
                    var o, s;
                    return Boolean(e.opening) && (null == (o = t.positions.white) ? void 0 : o.isLastBookMove) || (null == (s = t.positions.black) ? void 0 : s.isLastBookMove)
                }
            })
        })
          , lt = {
            component: "move-list-component",
            coach: "move-list-coach",
            opening: "move-list-opening",
            result: "move-list-result",
            icon: "move-list-icon",
            "king-white": "move-list-king-white",
            "king-black": "move-list-king-black",
            content: "move-list-content"
        };
        var ct = (0,
        v.Z)(it, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component,
                attrs: {
                    "data-cy": "game-review-move-list"
                }
            }, [e._l(e.rows, (function(t) {
                return [o("row", {
                    key: t.moveNumber,
                    attrs: {
                        positions: t.positions,
                        "move-number": t.moveNumber,
                        "selected-colors": e.selectedColors,
                        "selected-move-number": e.selectedMoveNumber
                    },
                    on: {
                        "select-node": function(t) {
                            return e.$emit("select-node", t)
                        }
                    }
                }, [e.showOpening(t) ? o("static-opening", {
                    class: e.$style.opening,
                    attrs: {
                        opening: e.opening
                    }
                }) : e._e()], 1), e._v(" "), e.isRowSelected(t.positions, e.selectedMoveNumber) ? o("div", {
                    key: "feedback-" + t.moveNumber,
                    class: e.$style.content
                }, [e._t("feedback")], 2) : e._e()]
            }
            ))], 2)
        }
        ), [], !1, (function move_list_injectStyles(e) {
            this.$style = lt.locals || lt
        }
        ), null, null).exports
          , dt = o(53950)
          , ut = o(14610)
          , mt = o(39237)
          , pt = o(32751)
          , vt = o(54987)
          , ht = o(81786)
          , yt = o(74338)
          , gt = o(23344);
        var bt = o(91857);
        const wt = (0,
        o(35174).I)();
        var ft = (e=>(e.SecondaryMovePlayed = "SecondaryMovePlayed",
        e))(ft || {})
          , kt = o(9894);
        async function loadLine({isSecondaryPosition: e, moveLan: t, playSounds: o, pv: s, selectedIds: a, startingNodeSelected: n}) {
            const r = bt.$.getGameAPI();
            r.load({
                moves: s
            }, {
                atCurrent: !0,
                method: "merge"
            });
            const i = r.getNodeIds().line;
            e ? (r.promoteVariation(i, -1),
            n ? r.selectNode(r.getNodeIds().line, 0) : (r.selectNode(0, a.move),
            await async function playSecondaryPositionMove({moveLan: e, playSounds: t}) {
                const o = bt.$.getGameAPI()
                  , s = o.getNodeIds();
                o.setOptions({
                    playSounds: t
                }),
                o.selectNode(s.line, s.move - 1),
                await (0,
                kt.D)(1e3),
                o.move({
                    from: e.slice(0, 2),
                    to: e.slice(2, 4),
                    userGenerated: !1
                }),
                wt.emit(ft.SecondaryMovePlayed, {
                    ids: o.getNodeIds()
                })
            }({
                moveLan: t,
                playSounds: o
            }))) : r.selectNode(i, 0)
        }
        var _t = o(43153);
        function gameLineMatchesGivenLine({gameLineNumber: e, givenLine: t, getLine: o}) {
            if (!e)
                return !1;
            const s = o(e);
            return !(!s || !t || s.length !== t.length) && (null == t ? void 0 : t.every(((e,t)=>{
                const o = s[t + 1];
                return o && e === (0,
                _t.S)(o)
            }
            )))
        }
        async function showLine({line: e, moveLan: t, positionIds: o, selectedIds: s}) {
            var n, r, l, c;
            (0,
            a.h)();
            const d = bt.$.getGameAPI()
              , {playSounds: u} = bt.$.getBoardOptions()
              , m = function is_secondary_position_isSecondaryPosition({positionIds: e, selectedIds: t}) {
                return !e || t.line !== (null == e ? void 0 : e.line) || t.move !== (null == e ? void 0 : e.move)
            }({
                positionIds: o,
                selectedIds: s
            })
              , p = d.getNodeIds()
              , v = function isStartingNodeSelected({getLine: e, positionIds: t, pv: o, startingIds: s}) {
                return t ? s.line === t.line && s.move === t.move : gameLineMatchesGivenLine({
                    getLine: e,
                    givenLine: o,
                    gameLineNumber: s.line
                })
            }({
                getLine: d.getLine,
                positionIds: o,
                pv: e,
                startingIds: p
            })
              , h = function formatLine({isSecondaryPosition: e, moveLan: t, line: o, startingNodeSelected: s}) {
                return e && !s ? [t, ...o] : o
            }({
                isSecondaryPosition: m,
                moveLan: t,
                line: e,
                startingNodeSelected: v
            });
            d.setOptions({
                playSounds: !1
            }),
            function setUpPosition({isSecondaryPosition: e, positionIds: t, selectedIds: o, startingIds: s, startingNodeSelected: a}) {
                const n = bt.$.getGameAPI();
                a || (function isCurrentPosition() {
                    return s.line === o.line && s.move === o.move
                }() && e ? n.selectNode(o.line, o.move - 1) : t && !e ? n.selectNode(t.line, t.move) : n.selectNode(0, o.move - 1))
            }({
                isSecondaryPosition: m,
                positionIds: o,
                selectedIds: s,
                startingIds: p,
                startingNodeSelected: v
            });
            const y = function getExistingLine({isSecondaryPosition: e, getLine: t, getNodeByIds: o, positionIds: s, pv: a}) {
                var n;
                if (e || !s)
                    return;
                const r = o(s);
                return (0,
                i.UG)(r) && r.lines ? null == (n = r.lines) ? void 0 : n.find((e=>gameLineMatchesGivenLine({
                    gameLineNumber: e,
                    givenLine: a,
                    getLine: t
                }))) : void 0
            }({
                isSecondaryPosition: m,
                getLine: d.getLine,
                getNodeByIds: d.getNodeByIds,
                positionIds: o,
                pv: h
            });
            m || y || d.createContinuation(),
            y ? d.selectNode(y, 0) : await loadLine({
                isSecondaryPosition: m,
                moveLan: t,
                playSounds: u,
                pv: h,
                selectedIds: s,
                startingNodeSelected: v
            }),
            d.setOptions({
                playSounds: u
            });
            const g = null != (r = null == (n = d.getSelectedNode()) ? void 0 : n.ids) ? r : d.getNodeIds();
            gt.I.openLines.add({
                length: null != (c = null == (l = d.getLine(g.line)) ? void 0 : l.length) ? c : 0,
                number: g.line,
                parent: null != o ? o : g
            }),
            gt.I.interval = setInterval((()=>function makeNextMove({isSecondaryPosition: e, pv: t, startingNodeSelected: o}) {
                const s = bt.$.getGameAPI()
                  , n = t.length - (e && !o ? 1 : 0)
                  , r = s.getNodeIds();
                s.selectNode(r.line, r.move + 1),
                (s.isAtEndOfLine() || r.move >= n) && (0,
                a.h)()
            }({
                isSecondaryPosition: m,
                pv: h,
                startingNodeSelected: v
            })), 1e3)
        }
        function getOpenLine(e) {
            if (e)
                return gt.I.openLines.find((t=>t.parent.line === e.line && t.parent.move === e.move))
        }
        var $t = o(56367)
          , St = o(45908)
          , Ct = o(42964)
          , xt = (0,
        s.aZ)({
            name: "AnalysisType",
            props: {
                activeAnalysisType: String,
                san: String,
                speech: Array
            },
            emits: ["analysis-type-clicked", "clear-arrows-and-squares", "mark-arrows-and-squares"],
            setup(e, {emit: t}) {
                const o = (0,
                s.iH)();
                return (0,
                s.YP)((()=>e.activeAnalysisType), (()=>{
                    o.value = e.activeAnalysisType
                }
                )),
                {
                    markArrowsAndSquares: function markArrowsAndSquares(o) {
                        var s;
                        t("mark-arrows-and-squares", {
                            markings: {
                                arrows: e.speech[o].arrows,
                                squares: null == (s = e.speech[o]) ? void 0 : s.squares
                            }
                        })
                    },
                    clearArrowsAndSquares: function clearArrowsAndSquares() {
                        t("clear-arrows-and-squares")
                    },
                    analysisTypeClicked: function analysisTypeClicked(o, s) {
                        var a;
                        t("analysis-type-clicked", {
                            type: s,
                            markings: {
                                arrows: e.speech[o].arrows,
                                squares: null == (a = e.speech[o]) ? void 0 : a.squares
                            }
                        })
                    },
                    activeType: o
                }
            }
        })
          , At = {
            active: "analysis-type-active",
            highlighted: "analysis-type-highlighted",
            sentence: "analysis-type-sentence"
        };
        var Mt = (0,
        v.Z)(xt, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component
            }, [e._l(e.speech, (function(t, s) {
                return [e._l(t.sentence, (function(t, a) {
                    return [a === e.speech[s].arrowsSquaresStringIndex && (e.speech[s].arrows.length > 0 || e.speech[s].squares.length > 0) ? o("span", {
                        key: t + "-" + e.san,
                        class: [e.activeType === t + "-" + e.san ? e.$style.active : e.$style.highlighted],
                        attrs: {
                            "data-cy": "game-review-analysis-type-" + t + "-" + e.san
                        },
                        domProps: {
                            textContent: e._s(t)
                        },
                        on: {
                            click: function(o) {
                                return e.analysisTypeClicked(s, t)
                            },
                            mouseenter: function(t) {
                                return e.markArrowsAndSquares(s)
                            },
                            mouseleave: e.clearArrowsAndSquares
                        }
                    }) : o("span", {
                        key: t + "-" + a,
                        attrs: {
                            "data-type": t
                        }
                    }, [e._v("\n        " + e._s(t) + "\n      ")])]
                }
                ))]
            }
            ))], 2)
        }
        ), [], !1, (function analysis_type_injectStyles(e) {
            this.$style = At.locals || At
        }
        ), null, null)
          , Pt = Mt.exports;
        const Tt = {
            positive: "positive",
            negative: "negative"
        };
        var Bt = (0,
        s.aZ)({
            components: {
                V5Button: l.V5Button
            },
            props: {
                icon: String,
                iconClass: String,
                label: {
                    type: String,
                    required: !0
                }
            },
            emits: ["click"]
        })
          , Nt = {
            button: "feedback-action-button",
            icon: "feedback-action-icon"
        };
        var Lt = (0,
        v.Z)(Bt, (function() {
            var e, t = this, o = t.$createElement, s = t._self._c || o;
            return s("v5-button", {
                class: t.$style.button,
                attrs: {
                    size: "x-small"
                },
                on: {
                    click: function(e) {
                        return t.$emit("click")
                    }
                }
            }, [t.icon ? s("span", {
                class: ["icon-font-chess", t.$style.icon, t.icon, (e = {},
                e[t.$style[t.iconClass]] = t.iconClass,
                e)]
            }) : t._e(), t._v(" "), s("span", {
                class: t.$style.text,
                domProps: {
                    textContent: t._s(t.label)
                }
            })])
        }
        ), [], !1, (function feedback_action_injectStyles(e) {
            this.$style = Nt.locals || Nt
        }
        ), null, null).exports
          , Ft = o(66426)
          , Zt = o(91353)
          , Ot = o(3775)
          , jt = (0,
        s.aZ)({
            name: "MoveFeedbackBox",
            components: {
                AnalysisType: Pt,
                CoachComment: D,
                EngineLine: $t.Z,
                FeedbackAction: Lt,
                MoveSan: St.Z,
                LoaderThreeBounce: Ft.Z,
                ScoreText: Ct.Z
            },
            props: {
                analysisType: String,
                additionalCommentary: String,
                activeAnalysisType: String,
                boardOptions: {
                    type: Object,
                    default: ()=>({})
                },
                canViewTypes: Boolean,
                canVoteOnTypes: Boolean,
                classificationKey: {
                    type: String,
                    default: ""
                },
                color: {
                    type: [Number, String],
                    required: !0
                },
                eval: {
                    type: Object,
                    default: ()=>({
                        pv: [],
                        pvSan: []
                    })
                },
                fen: {
                    type: String,
                    required: !0
                },
                isBook: Boolean,
                isFlipped: Boolean,
                isLastBookMove: Boolean,
                isLoading: Boolean,
                isLocked: Boolean,
                lineModel: Object,
                san: {
                    type: String,
                    required: !0
                },
                score: Object,
                selectedIds: Object,
                selectedPly: {
                    type: Number,
                    required: !0
                },
                useNewSpeech: Boolean,
                vote: String
            },
            emits: ["analysis-type-clicked", "clear-arrows-and-squares", "click-node", "explore", "mark-arrows-and-squares", "toggle-line", "submit-types-feedback"],
            setup(e, {emit: t}) {
                const o = (0,
                s.Fl)((()=>{
                    var t;
                    return null != (t = c.xt[e.classificationKey]) ? t : {}
                }
                ))
                  , a = (0,
                s.Fl)((()=>{
                    var t;
                    if (e.lineModel && e.selectedIds && (null == (t = e.selectedIds) ? void 0 : t.line) === e.lineModel.number)
                        return e.selectedIds.move - 1
                }
                ))
                  , n = (0,
                s.iH)(!1)
                  , r = (0,
                s.iH)("");
                return {
                    analysisTypeClicked: function analysisTypeClicked(e) {
                        t("analysis-type-clicked", e)
                    },
                    castVote: function castVote(e) {
                        e === Tt.positive ? t("submit-types-feedback", {
                            type: e
                        }) : toggleUserFeedbackBox(!0)
                    },
                    classification: o,
                    clearArrowsAndSquares: function clearArrowsAndSquares() {
                        t("clear-arrows-and-squares")
                    },
                    colorClass: (0,
                    s.Fl)((()=>o.value.key ? `analysis-${o.value.className}` : "")),
                    highlightedNodeIndex: a,
                    makeSvgIcon: i.P$,
                    markArrowsAndSquares: function markArrowsAndSquares(e) {
                        t("mark-arrows-and-squares", e)
                    },
                    onClickNode: function onClickNode(o) {
                        if (!e.lineModel)
                            return;
                        t("click-node", {
                            line: e.lineModel.number,
                            moves: o
                        })
                    },
                    scoreText: (0,
                    s.Fl)((()=>{
                        var t;
                        return (0,
                        Ot.hj)(null == (t = e.score) ? void 0 : t.score) && (0,
                        qe.D4)(e.score)
                    }
                    )),
                    selectedMoveNumber: (0,
                    s.Fl)((()=>{
                        var t;
                        return e.lineModel && (null == (t = e.selectedIds) ? void 0 : t.line) === e.lineModel.number
                    }
                    )),
                    showFigurine: (0,
                    s.Fl)((()=>e.boardOptions.moveListDisplayType === i.$l.MoveListDisplayTypes.Figurine)),
                    showNewAnalysisType: (0,
                    s.Fl)((()=>e.useNewSpeech && (0,
                    Zt.FR)("analysis_speech_from_cee_v2"))),
                    showUserFeedbackBox: n,
                    toggleUserFeedbackBox: toggleUserFeedbackBox,
                    userFeedback: r,
                    votingTypes: Tt
                };
                function toggleUserFeedbackBox(e) {
                    n.value = e
                }
            }
        })
          , It = {
            bold: "move-feedback-box-bold",
            header: "move-feedback-box-header",
            inactive: "move-feedback-box-inactive",
            scrollable: "move-feedback-box-scrollable",
            component: "move-feedback-box-component",
            engine: "move-feedback-box-engine",
            "feedback-textarea": "move-feedback-box-feedback-textarea",
            submit: "move-feedback-box-submit",
            "submit-icon": "move-feedback-box-submit-icon",
            content: "move-feedback-box-content",
            icon: "move-feedback-box-icon",
            number: "move-feedback-box-number",
            san: "move-feedback-box-san",
            score: "move-feedback-box-score",
            move: "move-feedback-box-move",
            row: "move-feedback-box-row",
            actions: "move-feedback-box-actions",
            action: "move-feedback-box-action",
            thumb: "move-feedback-box-thumb",
            "no-hover": "move-feedback-box-no-hover",
            type: "move-feedback-box-type"
        };
        var Et = (0,
        v.Z)(jt, (function() {
            var e, t = this, o = t.$createElement, s = t._self._c || o;
            return s("coach-comment", {
                class: t.$style.component
            }, [t.isLoading ? s("loader-three-bounce", {
                attrs: {
                    "is-circle": !0,
                    size: 40
                }
            }) : [s("div", {
                class: t.$style.content
            }, [!t.isLocked && t.classification.key ? s("div", {
                class: t.$style.icon,
                attrs: {
                    "data-cy": "game-review-classification-icon"
                },
                domProps: {
                    innerHTML: t._s(t.makeSvgIcon({
                        path: t.classification.icon,
                        size: 24
                    }))
                }
            }) : t._e(), t._v(" "), s("div", {
                class: t.$style.move
            }, [s("move-san", {
                class: [t.$style.san, (e = {},
                e[t.$style.colored] = !t.isLocked,
                e[t.colorClass] = !t.isLocked,
                e)],
                attrs: {
                    color: t.color,
                    san: t.san,
                    "show-figurine": t.showFigurine
                }
            }), t._v(" "), t.isLocked ? t._e() : s("div", {
                class: [t.$style.description, t.$style.colored, t.colorClass],
                attrs: {
                    "data-cy": "game-review-move-description"
                },
                domProps: {
                    textContent: t._s(t.isLastBookMove ? t.$trans("is the last book move") : t.classification.description)
                }
            })], 1), t._v(" "), t.scoreText ? s("score-text", {
                class: t.$style.score,
                attrs: {
                    value: t.scoreText
                }
            }) : t._e()], 1), t._v(" "), Boolean(t.lineModel) ? s("engine-line", {
                class: t.$style.engine,
                attrs: {
                    "data-cy": "game-review-engine-line",
                    "board-options": t.boardOptions,
                    "board-is-flipped": t.isFlipped,
                    fen: t.fen,
                    "is-expandable": !1,
                    "highlighted-node-index": t.highlightedNodeIndex,
                    line: t.eval,
                    "line-end-icon": !1,
                    "selected-ply": t.selectedPly,
                    "show-board-preview": "",
                    "show-figurine": t.showFigurine,
                    "show-score": !1
                },
                on: {
                    "node-click": t.onClickNode
                }
            }) : t._e(), t._v(" "), t.analysisType && t.analysisType.length > 0 && t.canViewTypes && !t.isLocked ? s("div", {
                class: t.$style.row
            }, [t.showNewAnalysisType && "string" != typeof t.analysisType && t.canViewTypes && t.analysisType.length > 0 ? s("analysis-type", {
                attrs: {
                    "active-analysis-type": t.activeAnalysisType,
                    speech: t.analysisType,
                    san: t.san
                },
                on: {
                    "analysis-type-clicked": t.analysisTypeClicked,
                    "clear-arrows-and-squares": t.clearArrowsAndSquares,
                    "mark-arrows-and-squares": t.markArrowsAndSquares
                }
            }) : !t.showNewAnalysisType && t.canViewTypes || "string" == typeof t.analysisType ? s("div", {
                class: t.$style.type,
                attrs: {
                    "data-cy": "game-review-analysis-type"
                }
            }, [t._v("\n        " + t._s(t.analysisType) + " " + t._s(t.additionalCommentary) + "\n      ")]) : t._e(), t._v(" "), t.vote || !t.canVoteOnTypes || t.isLocked ? t._e() : [s("div", {
                staticClass: "icon-font-chess thumbs-up",
                class: t.$style.thumb,
                on: {
                    click: function(e) {
                        return t.castVote(t.votingTypes.positive)
                    }
                }
            }), t._v(" "), s("div", {
                staticClass: "icon-font-chess thumbs-down",
                class: t.$style.thumb,
                on: {
                    click: function(e) {
                        return t.castVote(t.votingTypes.negative)
                    }
                }
            })]], 2) : t._e(), t._v(" "), t.showUserFeedbackBox && t.canVoteOnTypes && !t.vote ? s("div", [s("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.userFeedback,
                    expression: "userFeedback"
                }],
                class: t.$style["feedback-textarea"],
                attrs: {
                    placeholder: t.$trans("Let us know your feedback..."),
                    rows: "5"
                },
                domProps: {
                    value: t.userFeedback
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.userFeedback = e.target.value)
                    }
                }
            }), t._v(" "), s("div", {
                class: t.$style.submit
            }, [s("div", {
                staticClass: "icon-font-chess checkmark",
                class: t.$style["submit-icon"],
                on: {
                    click: function(e) {
                        return t.$emit("submit-types-feedback", {
                            type: t.votingTypes.negative,
                            userFeedback: t.userFeedback
                        })
                    }
                }
            }), t._v(" "), s("div", {
                staticClass: "icon-font-chess x",
                class: t.$style["submit-icon"],
                on: {
                    click: function(e) {
                        return t.toggleUserFeedbackBox(!1)
                    }
                }
            })])]) : t._e(), t._v(" "), t.vote && t.canVoteOnTypes ? [t.vote === t.votingTypes.positive ? s("div", {
                staticClass: "icon-font-chess checkmark",
                class: t.$style.thumb
            }) : t._e(), t._v(" "), t.vote === t.votingTypes.negative ? s("div", {
                domProps: {
                    textContent: t._s(t.$trans("Thank you for your feedback!"))
                }
            }) : t._e()] : t._e(), t._v(" "), t._t("default"), t._v(" "), t.isLocked ? t._e() : s("div", {
                class: t.$style.actions
            }, [t.isBook ? s("feedback-action", {
                class: t.$style.action,
                attrs: {
                    "data-cy": "game-review-explore-btn",
                    icon: "circle-compass",
                    label: t.$trans("Explore")
                },
                on: {
                    click: function(e) {
                        return t.$emit("explore")
                    }
                }
            }) : t._e(), t._v(" "), !t.isBook && t.eval.pvSan && t.eval.pvSan.length ? s("feedback-action", {
                class: t.$style.action,
                attrs: {
                    "data-cy": "game-review-show-line-btn",
                    icon: "chess",
                    label: t.lineModel ? t.$trans("Hide Moves") : t.$trans("Show Moves")
                },
                on: {
                    click: function(e) {
                        return t.$emit("toggle-line")
                    }
                }
            }) : t._e()], 1)]], 2)
        }
        ), [], !1, (function move_feedback_box_injectStyles(e) {
            this.$style = It.locals || It
        }
        ), null, null).exports
          , qt = (0,
        s.aZ)({
            name: "WinLossDraw",
            props: {
                percentBlackWon: {
                    type: Number,
                    required: !0
                },
                percentWhiteWon: {
                    type: Number,
                    required: !0
                },
                percentDrawn: {
                    type: Number,
                    required: !0
                }
            },
            setup: e=>({
                values: (0,
                s.Fl)((()=>({
                    white: e.percentWhiteWon,
                    draw: e.percentDrawn,
                    black: e.percentBlackWon
                })))
            })
        })
          , Wt = {
            "suggested-moves-list": "win-loss-draw-suggested-moves-list",
            "game-info": "win-loss-draw-game-info",
            player: "win-loss-draw-player",
            result: "win-loss-draw-result",
            "percent-label": "win-loss-draw-percent-label",
            "suggested-white": "win-loss-draw-suggested-white",
            "suggested-draw": "win-loss-draw-suggested-draw",
            "suggested-black": "win-loss-draw-suggested-black"
        };
        var Rt = (0,
        v.Z)(qt, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style["suggested-moves-list"]
            }, [e._l(e.values, (function(t, s) {
                return [t > 0 ? o("div", {
                    key: s,
                    class: [e.$style["suggested-moves-percentages"], e.$style["suggested-" + s]],
                    style: {
                        width: t + "%"
                    }
                }, [t > 9 ? o("span", {
                    class: e.$style["percent-label"],
                    domProps: {
                        textContent: e._s(Math.round(t) + "%")
                    }
                }) : e._e()]) : e._e()]
            }
            ))], 2)
        }
        ), [], !1, (function win_loss_draw_injectStyles(e) {
            this.$style = Wt.locals || Wt
        }
        ), null, null).exports
          , zt = o(16272)
          , Dt = o(62023)
          , Gt = {
            name: "TricolorBar",
            props: {
                alignLoss: {
                    type: String,
                    default: "left"
                },
                barData: {
                    type: Object,
                    required: !0
                },
                drawRoute: {
                    type: String
                },
                lossRoute: {
                    type: String
                },
                passIcons: {
                    type: Boolean,
                    default: !1
                },
                placeholder: {
                    type: String,
                    default: "--"
                },
                showTop: {
                    type: Boolean,
                    default: !0
                },
                type: {
                    type: String,
                    default: "game"
                },
                winRoute: {
                    type: String
                }
            },
            computed: {
                isData() {
                    return 0 !== Object.values(this.barData).reduce(((e,t)=>e + t))
                },
                percentTotals() {
                    return (0,
                    Dt.bs)([this.barData.wins, this.barData.draws, this.barData.losses], {
                        decimalPlaces: 0
                    })
                },
                winPercent() {
                    return this.getAverage("win")
                },
                lossPercent() {
                    return this.getAverage("loss")
                },
                drawPercent() {
                    return this.getAverage("draw")
                },
                resultStrings() {
                    return {
                        game: {
                            drawn: this.$transChoice("{0} 0 Drawn |{1} 1 Drawn|]1,Inf] %amount% Drawn", this.barData.draws, {
                                "%amount%": this.isData ? (0,
                                zt.uf)(this.barData.draws) : this.placeholder
                            }),
                            lost: this.$transChoice("{0} 0 Lost |{1} 1 Lost|]1,Inf] %amount% Lost", this.barData.losses, {
                                "%amount%": this.isData ? (0,
                                zt.uf)(this.barData.losses) : this.placeholder
                            }),
                            won: this.$transChoice("{0} 0 Won |{1} 1 Won|]1,Inf] %amount% Won", this.barData.wins, {
                                "%amount%": this.isData ? (0,
                                zt.uf)(this.barData.wins) : this.placeholder
                            })
                        },
                        puzzle: {
                            lost: this.$transChoice("{0} 0 Incorrect |{1} 1 Incorrect|]1,Inf] %amount% Incorrect", this.barData.losses, {
                                "%amount%": this.isData ? (0,
                                zt.uf)(this.barData.losses) : this.placeholder
                            }),
                            won: this.$transChoice("{0} 0 Correct |{1} 1 Correct|]1,Inf] %amount% Correct", this.barData.wins, {
                                "%amount%": this.isData ? (0,
                                zt.uf)(this.barData.wins) : this.placeholder
                            })
                        }
                    }[this.type]
                }
            },
            methods: {
                optional(e) {
                    return e || this.placeholder
                },
                getAverage(e) {
                    if (!this.isData)
                        return "game" === this.type ? 33.33 : "draws" === e ? 0 : 50;
                    return this.percentTotals[{
                        win: 0,
                        draw: 1,
                        loss: 2
                    }[e]]
                }
            }
        }
          , Vt = Gt
          , Ut = {
            bar: "tricolor-bar-bar",
            green: "tricolor-bar-green",
            red: "tricolor-bar-red",
            grey: "tricolor-bar-grey",
            icon: "tricolor-bar-icon",
            section: "tricolor-bar-section",
            header: "tricolor-bar-header",
            text: "tricolor-bar-text",
            bottomText: "tricolor-bar-bottomText",
            top: "tricolor-bar-top",
            bottom: "tricolor-bar-bottom"
        };
        var Ht = (0,
        v.Z)(Vt, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", [e.showTop ? o("div", {
                class: [e.$style.header, e.$style.top]
            }, [o(e.winRoute ? "a" : "span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.winPercent > 1,
                    expression: "winPercent > 1"
                }],
                tag: "component",
                class: [e.$style.green, e.$style.section],
                style: {
                    flexBasis: e.winPercent + "%"
                },
                attrs: {
                    href: e.winRoute
                }
            }, [o("div", {
                class: e.$style.text
            }, [o("span", {
                class: [e.$style.icon, "icon-font-chess", e.passIcons ? "square-checkmark" : "square-plus"]
            }), e._v("\n\n        " + e._s(e.winPercent) + "%\n      ")])]), e._v(" "), o(e.drawRoute ? "a" : "span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.drawPercent > 1,
                    expression: "drawPercent > 1"
                }],
                tag: "component",
                class: [e.$style.grey, e.$style.section],
                style: {
                    flexBasis: e.drawPercent + "%"
                },
                attrs: {
                    href: e.drawRoute
                }
            }, [o("div", {
                class: e.$style.text
            }, [o("span", {
                class: [e.$style.icon, "icon-font-chess", (e.passIcons,
                "square-equal")]
            }), e._v("\n\n        " + e._s(e.drawPercent) + "%\n      ")])]), e._v(" "), o(e.lossRoute ? "a" : "span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.lossPercent > 1,
                    expression: "lossPercent > 1"
                }],
                tag: "component",
                class: [e.$style.red, e.$style.section],
                style: {
                    flexBasis: e.lossPercent + "%"
                },
                attrs: {
                    href: e.lossRoute
                }
            }, [o("div", {
                class: e.$style.text
            }, [o("span", {
                class: [e.$style.icon, "icon-font-chess", e.passIcons ? "square-x" : "square-minus"]
            }), e._v("\n\n        " + e._s(e.lossPercent) + "%\n      ")])])], 1) : e._e(), e._v(" "), o("div", {
                class: e.$style.bar
            }, [o("span", {
                class: [e.$style.green, e.$style.section],
                style: {
                    flexGrow: e.winPercent
                }
            }), e._v(" "), o("span", {
                class: [e.$style.grey, e.$style.section],
                style: {
                    flexGrow: e.drawPercent
                }
            }), e._v(" "), o("span", {
                class: [e.$style.red, e.$style.section],
                style: {
                    flexGrow: e.lossPercent
                }
            })]), e._v(" "), o("div", {
                class: [e.$style.header, e.$style.bottom]
            }, [o(e.winRoute ? "a" : "span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.winPercent > 1,
                    expression: "winPercent > 1"
                }],
                tag: "component",
                class: [e.$style.green, e.$style.section],
                style: {
                    flexBasis: e.winPercent + "%"
                },
                attrs: {
                    href: e.winRoute
                },
                domProps: {
                    textContent: e._s(e.optional(e.resultStrings.won))
                }
            }), e._v(" "), o(e.drawRoute ? "a" : "span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.drawPercent > 1,
                    expression: "drawPercent > 1"
                }],
                tag: "component",
                class: [e.$style.grey, e.$style.section],
                style: {
                    flexBasis: e.drawPercent + "%"
                },
                attrs: {
                    href: e.drawRoute
                },
                domProps: {
                    textContent: e._s(e.optional(e.resultStrings.drawn))
                }
            }), e._v(" "), o(e.lossRoute ? "a" : "span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.lossPercent > 1,
                    expression: "lossPercent > 1"
                }],
                tag: "component",
                class: [e.$style.red, e.$style.section],
                style: {
                    flexBasis: e.lossPercent + "%"
                },
                attrs: {
                    href: e.lossRoute
                },
                domProps: {
                    textContent: e._s(e.lossPercent > 5 ? e.resultStrings.lost : "")
                }
            })], 1)])
        }
        ), [], !1, (function tricolor_bar_injectStyles(e) {
            this.$style = Ut.locals || Ut
        }
        ), null, null).exports
          , Yt = (0,
        s.aZ)({
            name: "MoveFeedbackLastBookMove",
            components: {
                TricolorBar: Ht,
                WinLossDraw: Rt
            },
            props: {
                color: {
                    type: Number,
                    required: !0
                },
                limit: {
                    type: Number,
                    default: 3
                },
                openingStats: {
                    type: Object,
                    required: !0
                },
                suggestedLeavingBookMoves: {
                    type: Array,
                    default: ()=>[]
                },
                wholeMoveNumber: {
                    type: Number,
                    required: !0
                }
            },
            emits: ["hover-move", "open-openings-modal"],
            setup(e) {
                const t = (0,
                s.iH)(e.suggestedLeavingBookMoves.length <= e.limit)
                  , o = e.color === i.lA.ColorsAsNumbers.White ? `${e.wholeMoveNumber}...` : `${e.wholeMoveNumber + 1}.`;
                return {
                    formatWinLossDraw: function formatWinLossDraw(e, t) {
                        return t / e.totalGames * 100
                    },
                    isShowingAllMoves: t,
                    moveNumberPrefix: o,
                    showAllMoves: function showAllMoves() {
                        t.value = !0
                    }
                }
            }
        })
          , Kt = {
            component: "move-feedback-last-book-move-component",
            bar: "move-feedback-last-book-move-bar",
            chart: "move-feedback-last-book-move-chart",
            button: "move-feedback-last-book-move-button",
            label: "move-feedback-last-book-move-label",
            down: "move-feedback-last-book-move-down",
            master: "move-feedback-last-book-move-master",
            more: "move-feedback-last-book-move-more",
            icon: "move-feedback-last-book-move-icon",
            show: "move-feedback-last-book-move-show",
            stats: "move-feedback-last-book-move-stats"
        };
        var Jt = (0,
        v.Z)(Yt, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component
            }, [e.openingStats && e.openingStats.total > 0 ? [o("span", {
                class: e.$style.stats,
                domProps: {
                    innerHTML: e._s(e.openingStats.commentary.title)
                },
                on: {
                    click: function(t) {
                        return e.$emit("open-openings-modal")
                    }
                }
            }), e._v(" "), o("span", {
                class: e.$style.stats,
                domProps: {
                    innerHTML: e._s(e.openingStats.commentary.stats)
                }
            }), e._v(" "), o("TricolorBar", {
                class: e.$style.bar,
                attrs: {
                    "bar-data": e.openingStats,
                    "show-top": !1
                }
            })] : e._e(), e._v(" "), e.suggestedLeavingBookMoves.length ? [o("span", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.$trans("Master Games"))
                }
            }), e._v(" "), e._l(e.suggestedLeavingBookMoves, (function(t, s) {
                return o("div", {
                    key: t.sanMove
                }, [e.isShowingAllMoves || s < e.limit ? o("div", {
                    class: e.$style.master,
                    on: {
                        mouseover: function(o) {
                            return e.$emit("hover-move", {
                                type: o,
                                san: t.sanMove
                            })
                        },
                        mouseleave: function(o) {
                            return e.$emit("hover-move", {
                                type: o,
                                san: t.sanMove
                            })
                        }
                    }
                }, [o("a", {
                    attrs: {
                        href: t.link,
                        target: "_blank"
                    }
                }, [e._v("\n          " + e._s(e.moveNumberPrefix) + " " + e._s(t.sanMove) + "\n        ")]), e._v(" "), o("win-loss-draw", {
                    class: e.$style.chart,
                    attrs: {
                        "percent-black-won": e.formatWinLossDraw(t, t.blackWon),
                        "percent-white-won": e.formatWinLossDraw(t, t.whiteWon),
                        "percent-drawn": e.formatWinLossDraw(t, t.draw)
                    }
                })], 1) : e._e()])
            }
            )), e._v(" "), o("div", {
                class: e.$style.more
            }, [e.isShowingAllMoves ? e._e() : o("span", {
                class: e.$style.show,
                on: {
                    click: e.showAllMoves
                }
            }, [e._v("\n        " + e._s(e.$trans("More")) + "\n        "), o("span", {
                class: [e.$style.down, "icon-font-chess", "chevron-bottom"]
            })])])] : e._e()], 2)
        }
        ), [], !1, (function move_feedback_last_book_move_injectStyles(e) {
            this.$style = Kt.locals || Kt
        }
        ), null, null).exports
          , Xt = (0,
        s.aZ)({
            name: "MoveFeedback",
            components: {
                Coach: U
            },
            props: {
                coachAvatar: String
            },
            emits: ["show-modal"]
        })
          , Qt = {
            bold: "move-feedback-bold",
            header: "move-feedback-header",
            inactive: "move-feedback-inactive",
            scrollable: "move-feedback-scrollable",
            component: "move-feedback-component"
        };
        var eo = (0,
        v.Z)(Xt, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component
            }, [o("coach", {
                class: e.$style.component,
                attrs: {
                    "coach-avatar": e.coachAvatar
                },
                on: {
                    "show-modal": function(t) {
                        return e.$emit("show-modal")
                    }
                }
            }, [e._t("default")], 2)], 1)
        }
        ), [], !1, (function move_feedback_injectStyles(e) {
            this.$style = Qt.locals || Qt
        }
        ), null, null).exports
          , to = o(81057)
          , oo = o(923)
          , so = o(93225);
        var ao = o(53418);
        function useTypesFeedback() {
            return {
                submitUserFeedback: function submitUserFeedback(e, t) {
                    var o, s, a, n;
                    const r = {
                        analysisType: null != (o = e.analysisType) ? o : "",
                        fen: xe.S.fen,
                        halfPly: Ce.j.selectedMoveNumber,
                        lang: window.context.locale,
                        timestamp: Date.now(),
                        url: null != (a = null == (s = window.chesscom.analysis) ? void 0 : s.url) ? a : "",
                        username: ao.E.get("username"),
                        userFeedback: null != (n = t.userFeedback) ? n : "",
                        voteType: t.type
                    };
                    !function saveFeedback(e, t) {
                        Ce.j.typesFeedbackVotes.add({
                            id: e.id,
                            voteType: t
                        })
                    }(e, r.voteType)
                }
            }
        }
        var no = o(25292)
          , ro = o(24392)
          , io = o(91862)
          , lo = o(66391)
          , co = o(84542);
        var uo = o(92333)
          , mo = o(57878)
          , po = o(41733)
          , vo = Object.defineProperty
          , ho = Object.defineProperties
          , yo = Object.getOwnPropertyDescriptors
          , go = Object.getOwnPropertySymbols
          , bo = Object.prototype.hasOwnProperty
          , wo = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,o)=>t in e ? vo(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o
          , __spreadValues = (e,t)=>{
            for (var o in t || (t = {}))
                bo.call(t, o) && __defNormalProp(e, o, t[o]);
            if (go)
                for (var o of go(t))
                    wo.call(t, o) && __defNormalProp(e, o, t[o]);
            return e
        }
          , fo = (0,
        s.aZ)({
            name: "MoveFeedbackController",
            components: {
                FlowButtons: h,
                LastBookMoveFeedback: Jt,
                MoveFeedback: eo,
                MoveFeedbackBox: Et
            },
            props: {
                coachAvatar: String
            },
            setup() {
                const e = (window.chesscom.analysis.ceeSupportedLocales.includes(window.context.i18n.locale) || "pt_BR" === window.context.i18n.locale || "default_and_user" === window.context.i18n.contentLanguage) && (0,
                Zt.FR)("analysis_speech_from_cee")
                  , {selectedPosition: t} = function useSelectedPosition() {
                    return {
                        selectedPosition: (0,
                        s.Fl)(so.C)
                    }
                }()
                  , {submitUserFeedback: o} = useTypesFeedback()
                  , n = (0,
                s.iH)(ut.t.activeType)
                  , l = (0,
                s.Fl)((()=>(0,
                io.u)()))
                  , c = (0,
                s.Fl)((()=>{
                    if (e)
                        return;
                    const o = x.F.gamePhases[1] - 1;
                    return t.value && t.value.moveNumber === o ? function getEndgameComment(e, t) {
                        var o;
                        const s = (0,
                        i.RS)(e.color)
                          , a = (0,
                        co.N)({
                            color: s,
                            playedMove: e.playedMove
                        })
                          , n = null == (o = null == a ? void 0 : a[s]) ? void 0 : o.toLowerCase();
                        return n ? e.color === t ? (0,
                        b.dW)("This is the start of the endgame and you are %status%.", {
                            "%status%": n
                        }) : (0,
                        b.dW)("This is the start of the endgame and %color% is %status%.", {
                            "%color%": s,
                            "%status%": n
                        }) : ""
                    }(t.value, xe.S.userColor) : void 0
                }
                ));
                return (0,
                s.bv)((()=>{
                    (0,
                    lo.k)() && wt.on(ft.SecondaryMovePlayed, updateBestMovePositionIds),
                    dt.I.on(mt.d.MarkingsUpdated, updateArrowsAndSquaresActiveState)
                }
                )),
                (0,
                s.Ah)((()=>{
                    (0,
                    lo.k)() && wt.off({
                        type: ft.SecondaryMovePlayed,
                        handler: updateBestMovePositionIds
                    }),
                    dt.I.off({
                        type: mt.d.MarkingsUpdated,
                        handler: updateArrowsAndSquaresActiveState
                    }),
                    (0,
                    vt.f)()
                }
                )),
                {
                    activeType: n,
                    canUseSpeech: e,
                    boardOptions: (0,
                    s.Fl)((()=>(0,
                    pt.T)())),
                    canVoteOnTypes: (0,
                    Zt.FR)("analysis_types_voting"),
                    canViewCoachCommentary: (0,
                    s.Fl)((()=>ie.d.canViewCoachCommentary)),
                    clearArrowsAndSquares: function clearArrowsAndSquares() {
                        dt.I.emit(mt.d.MarkingsCleared)
                    },
                    firstEndgameMoveComment: c,
                    flowButtons: (0,
                    s.Fl)((()=>(0,
                    ro.p)())),
                    getOpenLine: getOpenLine,
                    getVote: function getVote(e) {
                        var t;
                        return null == (t = Ce.j.typesFeedbackVotes.find(e)) ? void 0 : t.voteType
                    },
                    handleAnalysisTypeClicked: async function handleAnalysisTypeClicked(e, o, s) {
                        var a, n, r, i, c, d;
                        const {type: u, markings: m} = e;
                        if (s && lo.k && !(null == o ? void 0 : o.line))
                            return await (0,
                            ht.k)(Ce.j.selectedMoveNumber, (0,
                            so.C)().suggestedMove.moveLan),
                            updateBestMovePositionIds({
                                ids: __spreadValues({}, (0,
                                oo.j)().getSelectedNode().ids)
                            }),
                            void dt.I.emit(mt.d.ActiveStateChanged, {
                                markings: m,
                                type: u,
                                san: null != (n = null == (a = l.value) ? void 0 : a.san) ? n : ""
                            });
                        const {line: p, move: v} = o;
                        (0,
                        oo.j)().selectNode(p, v),
                        dt.I.emit(mt.d.ActiveStateChanged, {
                            markings: m,
                            type: u,
                            san: s ? null != (i = null == (r = l.value) ? void 0 : r.san) ? i : "" : null != (d = null == (c = t.value) ? void 0 : c.san) ? d : ""
                        })
                    },
                    isFlipped: (0,
                    s.Fl)((()=>(0,
                    to.x)().isFlipped)),
                    isLocked: (0,
                    s.Fl)((()=>x.F.isBasicAnalysis)),
                    markArrowsAndSquares: function markArrowsAndSquares(e, t) {
                        if (ut.t.activeType || (null == t ? void 0 : t.line) !== xe.S.ids.line || (null == t ? void 0 : t.move) !== xe.S.ids.move)
                            return;
                        const {markings: o} = e;
                        dt.I.emit(mt.d.MarkingsAdded, {
                            markings: o
                        })
                    },
                    openingStats: (0,
                    s.Fl)((()=>Ce.j.openingStats)),
                    onClickNode: function onClickNode({line: e, moves: t}) {
                        (0,
                        a.h)(),
                        (0,
                        oo.j)().selectNode(e, t.length)
                    },
                    onExplore: function onExplore(e) {
                        window.open((0,
                        no.E)({
                            useMasterGames: e
                        }), "_blank")
                    },
                    onHoverMove: function onHoverMove({type: e, san: t}) {
                        const o = (0,
                        oo.j)().getContext().game.getMove(t);
                        if (!o || !o.from || !o.to)
                            return;
                        const s = "hoverMove";
                        "mouseover" === e ? (0,
                        oo.j)().markings.addOne({
                            data: {
                                color: L.b.ArrowColor,
                                from: o.from,
                                to: o.to
                            },
                            key: [s],
                            type: "arrow"
                        }) : "mouseleave" === e && (0,
                        oo.j)().markings.removeAllWhere({
                            tags: [s]
                        })
                    },
                    onOpenOpeningsModal: function onOpenOpeningsModal() {
                        (0,
                        uo.h)(mo.n.Types.Openings)
                    },
                    onShowCoachModal: showCoachModal,
                    onToggleLine: async function onToggleLine(e) {
                        ie.d.canViewCoachCommentary || (po.B.visibleModal = mo.n.Types.Upgrade);
                        const o = getOpenLine(e.ids);
                        o ? (o.number === xe.S.ids.line && ((0,
                        a.h)(),
                        (0,
                        oo.j)().selectNode(o.parent.line, o.parent.move)),
                        function closeLine(e) {
                            gt.I.openLines.remove(e)
                        }(o.number)) : ((0,
                        yt.q)() && (0,
                        vt.f)(),
                        await showLine({
                            line: e.playedMove.eval.pv,
                            moveLan: e.playedMove.moveLan,
                            positionIds: e.ids,
                            selectedIds: t.value.ids
                        }),
                        e.ids || x.F.positions.update((s = __spreadValues({}, e),
                        n = {
                            ids: xe.S.ids
                        },
                        ho(s, yo(n)))));
                        var s, n;
                        (0,
                        r.K)(J.Y.Events.ShowLine)
                    },
                    secondaryPosition: l,
                    selectedIds: (0,
                    s.Fl)((()=>xe.S.ids)),
                    selectedPosition: t,
                    submitUserFeedback: o,
                    suggestedLeavingBookMoves: (0,
                    s.Fl)((()=>Ce.j.suggestedLeavingBookMoves))
                };
                function updateArrowsAndSquaresActiveState() {
                    n.value = ut.t.activeType
                }
                function updateBestMovePositionIds(e) {
                    var t;
                    l.value && !(null == (t = l.value) ? void 0 : t.ids) && (l.value.ids = e.ids)
                }
            }
        })
          , ko = fo
          , _o = {
            button: "move-feedback-button"
        };
        var $o = (0,
        v.Z)(ko, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("move-feedback", {
                attrs: {
                    "coach-avatar": e.coachAvatar
                },
                on: {
                    "show-modal": e.onShowCoachModal
                }
            }, [e.selectedPosition ? o("move-feedback-box", {
                attrs: {
                    "data-cy": "game-review-primary-move-box",
                    "active-analysis-type": e.activeType,
                    "analysis-type": e.canUseSpeech ? e.selectedPosition.playedMove.speech : e.selectedPosition.analysisType,
                    "additional-commentary": e.firstEndgameMoveComment,
                    "board-options": e.boardOptions,
                    "can-view-types": e.canViewCoachCommentary,
                    "can-vote-on-types": e.canVoteOnTypes && e.canViewCoachCommentary,
                    "classification-key": e.selectedPosition.classification,
                    color: e.selectedPosition.color,
                    eval: e.selectedPosition.playedMove.eval,
                    fen: e.selectedPosition.fen,
                    "is-book": Boolean(e.selectedPosition.scenarios.book),
                    "is-flipped": e.isFlipped,
                    "is-last-book-move": e.selectedPosition.isLastBookMove,
                    "is-locked": e.isLocked,
                    "line-model": e.getOpenLine(e.selectedPosition.ids),
                    san: e.selectedPosition.san,
                    score: e.selectedPosition.playedMove,
                    "selected-ids": e.selectedIds,
                    "selected-ply": e.selectedPosition.ply,
                    "use-new-speech": e.canUseSpeech,
                    "whole-move-number": e.selectedPosition.wholeMoveNumber,
                    vote: e.getVote(e.selectedPosition.id)
                },
                on: {
                    "analysis-type-clicked": function(t) {
                        return e.handleAnalysisTypeClicked(t, e.selectedPosition.ids)
                    },
                    "clear-arrows-and-squares": e.clearArrowsAndSquares,
                    "mark-arrows-and-squares": function(t) {
                        return e.markArrowsAndSquares(t, e.selectedPosition.ids)
                    },
                    "click-node": function(t) {
                        return e.onClickNode(t)
                    },
                    explore: e.onExplore,
                    "toggle-line": function() {
                        return e.onToggleLine(e.selectedPosition)
                    },
                    "submit-types-feedback": function(t) {
                        return e.submitUserFeedback(e.selectedPosition, t)
                    }
                }
            }, [e.selectedPosition.isLastBookMove && e.openingStats ? o("last-book-move-feedback", {
                attrs: {
                    color: e.selectedPosition.color,
                    "opening-stats": e.openingStats,
                    "suggested-leaving-book-moves": e.suggestedLeavingBookMoves,
                    "whole-move-number": e.selectedPosition.wholeMoveNumber
                },
                on: {
                    "hover-move": e.onHoverMove,
                    "open-openings-modal": e.onOpenOpeningsModal
                }
            }) : e._e()], 1) : e._e(), e._v(" "), e.secondaryPosition ? o("move-feedback-box", {
                attrs: {
                    "data-cy": "game-review-secondary-move-box",
                    "active-analysis-type": e.activeType,
                    "analysis-type": e.canUseSpeech ? e.secondaryPosition.playedMove.speech : e.secondaryPosition.analysisType,
                    "board-options": e.boardOptions,
                    "can-view-types": e.canViewCoachCommentary,
                    "can-vote-on-types": e.canVoteOnTypes && e.canViewCoachCommentary,
                    "classification-key": e.secondaryPosition.classification,
                    color: e.secondaryPosition.color,
                    eval: e.secondaryPosition.playedMove.eval,
                    fen: e.secondaryPosition.fen,
                    "is-book": Boolean(e.secondaryPosition.scenarios.book),
                    "is-flipped": e.isFlipped,
                    "is-loading": e.secondaryPosition.loading,
                    "is-locked": e.isLocked,
                    "line-model": e.getOpenLine(e.secondaryPosition.ids),
                    san: e.secondaryPosition.san,
                    score: {
                        mateIn: e.secondaryPosition.playedMove.mateIn,
                        score: e.secondaryPosition.playedMove.score
                    },
                    "selected-ids": e.selectedIds,
                    "selected-ply": e.selectedPosition.ply,
                    "use-new-speech": e.canUseSpeech,
                    "whole-move-number": e.selectedPosition.wholeMoveNumber,
                    vote: e.getVote(e.secondaryPosition.id)
                },
                on: {
                    "analysis-type-clicked": function(t) {
                        return e.handleAnalysisTypeClicked(t, e.secondaryPosition.ids, !0)
                    },
                    "clear-arrows-and-squares": e.clearArrowsAndSquares,
                    "mark-arrows-and-squares": function(t) {
                        return e.markArrowsAndSquares(t, e.secondaryPosition.ids)
                    },
                    "click-node": function(t) {
                        return e.onClickNode(t, !0)
                    },
                    explore: e.onExplore,
                    "toggle-line": function() {
                        return e.onToggleLine(e.secondaryPosition, !0)
                    },
                    "submit-types-feedback": function(t) {
                        return e.submitUserFeedback(e.secondaryPosition, t)
                    }
                }
            }) : e._e(), e._v(" "), e.isLocked ? e._e() : o("flow-buttons", {
                class: [e.$style.button],
                attrs: {
                    buttons: e.flowButtons,
                    "watch-overflow": ""
                }
            })], 1)
        }
        ), [], !1, (function game_review_move_feedback_injectStyles(e) {
            this.$style = _o.locals || _o
        }
        ), null, null).exports
          , So = o(63193)
          , Co = o(28287);
        function getSelectedColors() {
            return Ce.j.selectedColor === L.b.Colors.Both ? [i.lA.ColorsAsWords.Black, i.lA.ColorsAsWords.White] : [Ce.j.selectedColor]
        }
        const {White: xo, Black: Ao} = i.lA.ColorsAsNumbers;
        function getMoveListRows() {
            return (0,
            Ee.N)().reduce(((e,t,o)=>(0 === o && t.color === Ao || t.color === xo ? e.push(function createNewMoveRow(e) {
                const t = e.color === xo ? Ao : xo;
                return {
                    moveNumber: e.wholeMoveNumber,
                    positions: {
                        [(0,
                        i.RS)(e.color)]: e,
                        [(0,
                        i.RS)(t)]: void 0
                    }
                }
            }(t)) : e[e.length - 1].positions.black = t,
            e)), [])
        }
        var Mo = (0,
        s.aZ)({
            name: "MoveListController",
            components: {
                MoveFeedbackController: $o,
                MoveList: ct
            },
            props: {
                coachAvatar: String
            },
            setup: ()=>((0,
            s.bv)((()=>{
                (0,
                oo.j)().selectNode(0, (0,
                Ue.j)()),
                Ce.j.selectedMoveNumber = xe.S.ids.move,
                (0,
                So.Z)()
            }
            )),
            {
                onSelectNode: function onSelectNode({move: e}) {
                    (0,
                    Co.g)(e)
                },
                opening: (0,
                s.Fl)((()=>x.F.book)),
                rows: (0,
                s.Fl)(getMoveListRows),
                selectedColors: (0,
                s.Fl)(getSelectedColors),
                selectedMoveNumber: (0,
                s.Fl)((()=>Ce.j.selectedMoveNumber))
            })
        })
          , Po = (0,
        v.Z)(Mo, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("move-list", {
                attrs: {
                    opening: e.opening,
                    rows: e.rows,
                    "selected-colors": e.selectedColors,
                    "selected-move-number": e.selectedMoveNumber
                },
                on: {
                    "select-node": e.onSelectNode
                },
                scopedSlots: e._u([{
                    key: "feedback",
                    fn: function() {
                        return [o("move-feedback-controller", {
                            attrs: {
                                "coach-avatar": e.coachAvatar
                            }
                        })]
                    },
                    proxy: !0
                }])
            })
        }
        ), [], !1, null, null, null).exports
          , To = o(56950)
          , Bo = o(71001)
          , No = o(88017);
        var Lo = {
            props: {
                formatLanguage: {
                    type: String
                }
            },
            computed: {
                formatter() {
                    if (this.formatLanguage)
                        return new Intl.NumberFormat(this.formatLanguage)
                }
            },
            methods: {
                formatNumber(e) {
                    return this.formatter ? this.formatter.format(e) : e
                }
            }
        }
          , Fo = {
            mixins: [Lo],
            props: {
                delay: {
                    type: Number,
                    default: 1e3
                },
                duration: {
                    type: Number,
                    default: 1e3
                },
                from: {
                    type: Number,
                    required: !0
                },
                to: {
                    type: Number,
                    required: !0
                }
            },
            emits: ["complete"],
            data() {
                return {
                    endTimestamp: null,
                    number: this.from,
                    startTimestamp: null
                }
            },
            watch: {
                to() {
                    this.number = this.from,
                    setTimeout(this.animate, this.delay)
                }
            },
            mounted() {
                null !== this.delay && setTimeout(this.animate, this.delay)
            },
            methods: {
                animate() {
                    this.startTimestamp = Date.now(),
                    this.endTimestamp = this.startTimestamp + this.duration,
                    requestAnimationFrame(this.animationFrame)
                },
                animationFrame() {
                    const e = Date.now();
                    if (e >= this.endTimestamp)
                        return this.number = this.to,
                        void this.$emit("complete");
                    const t = (({currentPosition: e, end: t, start: o})=>(e - o) / (t - o))({
                        currentPosition: e,
                        end: this.endTimestamp,
                        start: this.startTimestamp
                    })
                      , o = this.to - this.from
                      , s = Math.floor(o * t);
                    this.number = this.from + s,
                    requestAnimationFrame(this.animationFrame)
                }
            }
        }
          , Zo = {
            component: "animated-number-component"
        };
        var Oo = {
            name: "SummaryAccuracy",
            components: {
                AnimatedNumber: (0,
                v.Z)(Fo, (function() {
                    var e, t = this, o = t.$createElement;
                    return (t._self._c || o)("span", {
                        class: (e = {},
                        e[t.$style.component] = !t.formatLanguage,
                        e),
                        attrs: {
                            "data-cy": t.$cy.puzzles.ratedPage.animatedNumber
                        },
                        domProps: {
                            textContent: t._s(t.formatNumber(t.number))
                        }
                    })
                }
                ), [], !1, (function animated_number_injectStyles(e) {
                    this.$style = Zo.locals || Zo
                }
                ), null, null).exports
            },
            props: {
                adjustedAccuracy: {
                    type: Number
                },
                color: {
                    type: String,
                    required: !0
                },
                originalAccuracy: {
                    type: Number
                }
            },
            setup: e=>({
                improvement: (0,
                s.Fl)((()=>e.adjustedAccuracy && e.originalAccuracy ? (0,
                Dt.jb)({
                    decimals: 1,
                    method: Math.round,
                    number: e.adjustedAccuracy - e.originalAccuracy
                }) : 0))
            })
        }
          , jo = {
            component: "summary-accuracy-component",
            improvement: "summary-accuracy-improvement",
            negative: "summary-accuracy-negative",
            positive: "summary-accuracy-positive",
            number: "summary-accuracy-number"
        };
        var Io = (0,
        v.Z)(Oo, (function() {
            var e, t = this, o = t.$createElement, s = t._self._c || o;
            return t.adjustedAccuracy && t.originalAccuracy ? s("div", {
                key: t.color,
                class: t.$style.component,
                attrs: {
                    "data-cy": "game-review-revised-accuracy-" + t.color
                }
            }, [s("animated-number", {
                class: t.$style.number,
                attrs: {
                    duration: 500,
                    from: t.originalAccuracy,
                    to: t.adjustedAccuracy
                }
            }), t._v(" "), isNaN(t.improvement) ? t._e() : s("div", {
                class: [t.$style.improvement, (e = {},
                e[t.$style.negative] = t.improvement < 0,
                e[t.$style.positive] = t.improvement >= 0,
                e)],
                domProps: {
                    textContent: t._s((t.improvement >= 0 ? "+" : "") + t.improvement)
                }
            })], 1) : t._e()
        }
        ), [], !1, (function summary_accuracy_injectStyles(e) {
            this.$style = jo.locals || jo
        }
        ), null, null).exports
          , Eo = o(19818);
        var qo = o(86673)
          , Wo = o(93644);
        o(61682);
        var Ro, zo, Do = o(20629), Go = o(24452), Vo = o(83851), Uo = Object.defineProperty, Ho = Object.defineProperties, Yo = Object.getOwnPropertyDescriptors, Ko = Object.getOwnPropertySymbols, Jo = Object.prototype.hasOwnProperty, Xo = Object.prototype.propertyIsEnumerable, board_popover_defNormalProp = (e,t,o)=>t in e ? Uo(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o, Qo = {
            name: "board-popover",
            components: {
                GamePreview: Vo.Z
            },
            data: ()=>({
                data: null,
                defaultSide: "right",
                flipBoard: !1,
                popoverSquareSize: 20,
                position: {},
                referenceElement: null,
                scrollElement: null,
                visible: !1
            }),
            computed: (Ro = ((e,t)=>{
                for (var o in t || (t = {}))
                    Jo.call(t, o) && board_popover_defNormalProp(e, o, t[o]);
                if (Ko)
                    for (var o of Ko(t))
                        Xo.call(t, o) && board_popover_defNormalProp(e, o, t[o]);
                return e
            }
            )({}, (0,
            Do.rn)(["boardOptions"])),
            zo = {
                classes() {
                    return {
                        [this.$style.component]: !0,
                        [this.$style[this.position.placement]]: this.position.placement
                    }
                },
                popoverStyles() {
                    const e = this.position
                      , t = {
                        left: `${e.left || 0}px`,
                        top: `${e.top || 0}px`
                    };
                    return (0,
                    Wo.t)() && (t.left = `${window.innerWidth - e.left - 10 || 0}px`),
                    t
                }
            },
            Ho(Ro, Yo(zo))),
            watch: {
                visible(e) {
                    e ? (this.referenceElement.addEventListener("mouseout", this.hide),
                    this.scrollElement.addEventListener("scroll", this.hide)) : (this.referenceElement.removeEventListener("mouseout", this.hide),
                    this.scrollElement.removeEventListener("scroll", this.hide))
                }
            },
            methods: {
                hide() {
                    this.visible = !1
                },
                initializeAndShow(e, t) {
                    e && e.fen && (this.data = e,
                    this.defaultSide = e.modifier || this.defaultSide,
                    this.referenceElement = t,
                    this.flipBoard = e.flipBoard || this.boardOptions.flipBoard,
                    this.scrollElement = window,
                    this.show())
                },
                show() {
                    this.visible = !0,
                    this.$nextTick((()=>{
                        this.position = (0,
                        Go.bt)(this.referenceElement, this.$refs.popover, this.defaultSide, 15)
                    }
                    ))
                }
            }
        }, es = {
            mixins: [Qo],
            mounted() {
                qo.Z.on("boardPopover/show", this.initializeAndShow),
                qo.Z.on("boardPopover/hide", this.hide)
            }
        }, ts = {
            component: "board-popover-component",
            right: "board-popover-right",
            left: "board-popover-left",
            top: "board-popover-top",
            bottom: "board-popover-bottom"
        };
        var os = (0,
        v.Z)(es, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return e.visible ? o("div", {
                ref: "popover",
                class: e.classes,
                style: e.popoverStyles
            }, [o("game-preview", {
                attrs: {
                    "color-scheme": e.boardOptions.boardStyle,
                    fen: e.data.fen,
                    "flip-board": e.flipBoard,
                    "is-board-popover": !0,
                    "highlight-squares": e.data.highlightedSquares,
                    "piece-style": e.boardOptions.pieceStyle,
                    size: e.popoverSquareSize
                }
            }), e._v(" "), e.data.component ? o(e.data.component, {
                tag: "component",
                attrs: {
                    data: e.data
                }
            }) : e._e()], 1) : e._e()
        }
        ), [], !1, (function board_popover_injectStyles(e) {
            this.$style = ts.locals || ts
        }
        ), null, null).exports
          , ss = o(92957)
          , as = o(92685)
          , ns = (o(11721),
        o(9669),
        o(27376),
        o(97541),
        o(3510),
        o(99660))
          , rs = (o(63754),
        o(20517));
        rs.f;
        var board_service_getDefaultOptions = ()=>({
            allowMarkings: !0,
            animationType: i.$l.Animation.Types.Default,
            autoPromote: !1,
            boardStyle: "green",
            captureKeyStrokes: !0,
            coordinates: i.$l.CoordinatesPositions.Inside,
            darkMode: ns.Yc,
            diagramStyle: !0,
            enabled: !0,
            highlightColor: "#f8f893",
            highlightLegalMoves: !1,
            highlightMoves: !0,
            highlightOpacity: .5,
            isWhiteOnBottom: !1,
            legalPositionCheck: "full",
            moveMethod: i.$l.MoveMethods.Drag,
            overlayInAnalysisMode: !0,
            pieceStyle: "neo",
            playSounds: !0,
            premoveHighlightColor: "#f42a32",
            premoveHighlightOpacity: .5,
            real3D: !1,
            rounded: !0,
            soundTheme: "default",
            showTimestamps: !1
        })
          , is = o(45381)
          , ls = o(70125)
          , cs = o(61681);
        const ds = (0,
        ls.Q)(cs.Z.get("chessComAppState"))
          , us = ds && ds.user && ds.user.isImpersonating || (0,
        is.sQ)()
          , ms = (0,
        Ot.Kn)(ds) && ds.board;
        var ps = !us && ms ? ds : {
            board: {}
        }
          , vs = o(76992).Z;
        const hs = board_service_getDefaultOptions()
          , ys = {
            allowMarkings: !0,
            captureKeyStrokes: !0,
            enabled: !0,
            fadeSetup: 0,
            fetched: !1,
            flipBoard: !1,
            flipped: !1,
            highlightColor: null,
            highlightOpacity: hs.highlightOpacity
        };
        var gs = {
            namespaced: !0,
            state: vs(hs, {
                highlightMovesUI: !0,
                maxWidth: 0
            }, ps.board.boardOptions, ys)
        }
          , bs = o(38960).Z
          , ws = o(41252);
        var fs = Object.defineProperty
          , ks = Object.defineProperties
          , _s = Object.getOwnPropertyDescriptors
          , $s = Object.getOwnPropertySymbols
          , Ss = Object.prototype.hasOwnProperty
          , Cs = Object.prototype.propertyIsEnumerable
          , directives_board_popover_defNormalProp = (e,t,o)=>t in e ? fs(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o;
        (0,
        ss.X)({
            boardOptions: gs
        });
        const xs = {}
          , As = (0,
        ws.Z)({
            boardPopover: {
                component: os,
                el: "#board-popover",
                store: as.Z
            }
        })
          , showBoardPopover = ({currentTarget: e})=>{
            As.createInstance("boardPopover"),
            qo.Z.emit("boardPopover/show", xs[e.dataset.boardPopover], e)
        }
        ;
        var Ms = {
            bind: (e,t)=>{
                var o;
                let s = null;
                t.modifiers && (null == (o = Object.keys(t.modifiers)) ? void 0 : o.length) && (s = Object.keys(t.modifiers)[0]);
                const a = Math.random().toString(36).substring(2, 15)
                  , n = t.value
                  , {element: r} = n
                  , i = ((e,t)=>{
                    var o = {};
                    for (var s in e)
                        Ss.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
                    if (null != e && $s)
                        for (var s of $s(e))
                            t.indexOf(s) < 0 && Cs.call(e, s) && (o[s] = e[s]);
                    return o
                }
                )(n, ["element"]);
                e.dataset.boardPopover = a,
                xs[a] = ((e,t)=>ks(e, _s(t)))(((e,t)=>{
                    for (var o in t || (t = {}))
                        Ss.call(t, o) && directives_board_popover_defNormalProp(e, o, t[o]);
                    if ($s)
                        for (var o of $s(t))
                            Cs.call(t, o) && directives_board_popover_defNormalProp(e, o, t[o]);
                    return e
                }
                )({}, bs(i)), {
                    element: r,
                    modifier: s
                }),
                e.addEventListener("mouseover", showBoardPopover)
            }
            ,
            componentUpdated: (e,t)=>{
                Object.assign(xs[e.dataset.boardPopover], t.value)
            }
            ,
            unbind: e=>{
                delete xs[e.dataset.boardPopover],
                e.removeEventListener("mouseover", showBoardPopover)
            }
        }
          , Ps = o(65063)
          , Ts = (0,
        s.aZ)({
            name: "RetryMove",
            components: {
                MoveSan: St.Z,
                ScoreText: Ct.Z
            },
            directives: {
                BoardPopover: Ms
            },
            props: {
                flipBoard: {
                    type: Boolean,
                    default: !1
                },
                move: {
                    type: Object,
                    required: !0
                },
                showFigurine: {
                    type: Boolean,
                    default: !1
                },
                showIcon: {
                    type: Boolean,
                    default: !1
                },
                viewedAnswer: Boolean
            },
            setup(e) {
                (0,
                s.Ah)((()=>{
                    qo.Z.emit("boardPopover/hide")
                }
                ));
                const t = (0,
                s.Fl)((()=>{
                    var t, o;
                    return null != (o = c.xt[null != (t = e.move.classification) ? t : ""]) ? o : {}
                }
                ))
                  , o = (0,
                s.Fl)((()=>t.value.icon ? (({path: e="", size: t=24, viewBox: o="0 0 18 19"})=>`\n  <svg width="${t}" height="${t}" viewBox="${o}">\n    ${e}\n  </svg>\n`)({
                    path: t.value.icon
                }) : null))
                  , a = (0,
                s.Fl)((()=>{
                    var t;
                    return {
                        fen: e.move.fen,
                        flipBoard: e.flipBoard,
                        highlightedSquares: null == (t = e.move.playedMove) ? void 0 : t.moveLan
                    }
                }
                ));
                return {
                    classificationIcon: o,
                    classification: t,
                    colorClass: (0,
                    s.Fl)((()=>t.value.className ? `analysis-${t.value.className}-bg` : "")),
                    popover: a,
                    score: (0,
                    s.Fl)((()=>(0,
                    qe.D4)(e.move.playedMove))),
                    text: (0,
                    s.Fl)((()=>{
                        var t;
                        return `${(0,
                        Ps.o2)(e.move.san)}${null != (t = e.move.symbol) ? t : ""}`
                    }
                    ))
                }
            }
        })
          , Bs = {
            component: "summary-retry-move-component",
            classification: "summary-retry-move-classification",
            icon: "summary-retry-move-icon",
            svg: "summary-retry-move-svg",
            answer: "summary-retry-move-answer",
            move: "summary-retry-move-move",
            node: "summary-retry-move-node",
            background: "summary-retry-move-background",
            score: "summary-retry-move-score",
            text: "summary-retry-move-text"
        };
        var Ns = (0,
        v.Z)(Ts, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: [e.$style.component],
                attrs: {
                    "data-cy": "game-review-retry-summary-" + e.move.moveNumber
                }
            }, [o("div", {
                class: e.$style.move
            }, [o("div", {
                directives: [{
                    name: "board-popover",
                    rawName: "v-board-popover",
                    value: e.popover,
                    expression: "popover"
                }],
                class: e.$style.node
            }, [o("div", {
                class: e.$style.text
            }, [o("move-san", {
                attrs: {
                    color: e.move.color,
                    "figurine-size": 2,
                    "postmove-text": e.move.symbol || "",
                    san: e.move.san,
                    "show-figurine": e.showFigurine
                }
            })], 1), e._v(" "), o("div", {
                class: [e.$style.background, e.colorClass]
            })])]), e._v(" "), o("div", {
                class: e.$style.classification
            }, [e.move.playedMove ? o("score-text", {
                class: e.$style.score,
                attrs: {
                    value: e.score
                }
            }) : e._e(), e._v(" "), e.showIcon ? o("div", {
                class: e.$style.icon
            }, [e.viewedAnswer ? o("span", {
                class: [e.$style.answer, "icon-font-chess", "perfect"],
                attrs: {
                    name: "perfect"
                }
            }) : e.classificationIcon ? o("div", {
                class: [e.$style.svg],
                domProps: {
                    innerHTML: e._s(e.classificationIcon)
                }
            }) : e._e()]) : e._e()], 1)])
        }
        ), [], !1, (function summary_retry_move_injectStyles(e) {
            this.$style = Bs.locals || Bs
        }
        ), null, null).exports
          , Ls = (0,
        s.aZ)({
            name: "RetryRow",
            components: {
                RetryMove: Ns
            },
            props: {
                attempt: {
                    type: Object,
                    required: !0
                },
                boardOptions: {
                    type: Object,
                    default: ()=>({})
                },
                parent: {
                    type: Object,
                    required: !0
                },
                viewedAnswer: Boolean
            },
            emits: ["click"],
            setup: e=>({
                moveNumberText: (0,
                s.Fl)((()=>`${e.parent.wholeMoveNumber}${e.parent.color === i.lA.ColorsAsNumbers.Black ? "... " : ". "}`)),
                showFigurine: (0,
                s.Fl)((()=>e.boardOptions.moveListDisplayType === Eo.hV.FIGURINE))
            })
        })
          , Fs = {
            bold: "summary-retry-row-bold",
            header: "summary-retry-row-header",
            inactive: "summary-retry-row-inactive",
            scrollable: "summary-retry-row-scrollable",
            section: "summary-retry-row-section",
            component: "summary-retry-row-component",
            boxes: "summary-retry-row-boxes",
            moves: "summary-retry-row-moves",
            number: "summary-retry-row-number"
        };
        var Zs = (0,
        v.Z)(Ls, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component,
                on: {
                    click: function(t) {
                        return e.$emit("click")
                    }
                }
            }, [o("div", {
                class: e.$style.section
            }, [o("div", {
                class: e.$style.number,
                domProps: {
                    textContent: e._s(e.moveNumberText)
                }
            }), e._v(" "), o("retry-move", e._b({
                class: e.$style.boxes,
                attrs: {
                    "flip-board": e.boardOptions.flipped,
                    move: e.parent,
                    "show-figurine": e.showFigurine
                }
            }, "retry-move", e.$attrs, !1))], 1), e._v(" "), o("div", {
                class: e.$style.section
            }, [o("retry-move", {
                attrs: {
                    "flip-board": e.boardOptions.flipped,
                    move: e.attempt,
                    "show-figurine": e.showFigurine,
                    "viewed-answer": e.viewedAnswer,
                    "show-icon": ""
                }
            })], 1)])
        }
        ), [], !1, (function summary_retry_row_injectStyles(e) {
            this.$style = Fs.locals || Fs
        }
        ), null, null).exports
          , Os = (0,
        s.aZ)({
            name: "KeyMovesSummary",
            components: {
                RetryRow: Zs,
                SummaryAccuracy: Io
            },
            props: {
                adjustedAccuracies: {
                    type: Object,
                    required: !0
                },
                attempts: {
                    type: Array,
                    default: ()=>[]
                },
                boardOptions: {
                    type: Object,
                    default: ()=>({})
                },
                colors: {
                    type: Array,
                    default: ()=>[]
                },
                serverAccuracies: {
                    type: Object,
                    required: !0
                }
            },
            emits: ["click-row"]
        })
          , js = {
            bold: "summary-bold",
            header: "summary-header",
            inactive: "summary-inactive",
            scrollable: "summary-scrollable",
            rowlabel: "summary-rowlabel",
            accuracies: "summary-accuracies",
            label: "summary-label",
            players: "summary-players",
            retry: "summary-retry",
            rowlabels: "summary-rowlabels",
            section: "summary-section",
            retries: "summary-retries"
        };
        var Is = (0,
        v.Z)(Os, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                staticClass: "review-summary",
                attrs: {
                    "data-cy": "game-review-summary-section"
                }
            }, [Object.values(e.adjustedAccuracies).some((function(e) {
                return Boolean(e)
            }
            )) ? o("section", {
                class: e.$style.section
            }, [o("header", {
                class: e.$style.header,
                domProps: {
                    textContent: e._s(e.$trans("Adjusted Accuracy After Retries"))
                }
            }), e._v(" "), o("div", {
                class: e.$style.accuracies
            }, e._l(e.colors, (function(t) {
                return o("summary-accuracy", {
                    key: t,
                    attrs: {
                        "adjusted-accuracy": e.adjustedAccuracies[t],
                        color: t,
                        "original-accuracy": e.serverAccuracies[t]
                    }
                })
            }
            )), 1)]) : e._e(), e._v(" "), e.attempts.length ? o("section", {
                class: [e.$style.section, e.$style.retries]
            }, [o("div", {
                class: e.$style.rowlabels
            }, [o("span", {
                class: e.$style.rowlabel,
                domProps: {
                    textContent: e._s(e.$trans("You Played"))
                }
            }), e._v(" "), o("span", {
                class: e.$style.rowlabel,
                domProps: {
                    textContent: e._s(e.$trans("New Move"))
                }
            })]), e._v(" "), o("div", {
                class: e.$style.rows
            }, [e._l(e.attempts, (function(t) {
                return [t.retry ? o("retry-row", {
                    key: t.parent.id,
                    class: e.$style.retry,
                    attrs: {
                        "board-options": e.boardOptions,
                        attempt: t.retry,
                        parent: t.parent,
                        "viewed-answer": t.viewedAnswer
                    },
                    on: {
                        click: function(o) {
                            return e.$emit("click-row", {
                                move: t.parent.ids.move
                            })
                        }
                    }
                }) : e._e()]
            }
            ))], 2)]) : e._e()])
        }
        ), [], !1, (function summary_injectStyles(e) {
            this.$style = js.locals || js
        }
        ), null, null).exports
          , Es = o(26525)
          , qs = o(57367)
          , Ws = o(68635)
          , Rs = o(67866)
          , zs = o(67858)
          , Ds = o(71221);
        var Gs = o(4843)
          , Vs = Object.defineProperty
          , Us = Object.defineProperties
          , Hs = Object.getOwnPropertyDescriptors
          , Ys = Object.getOwnPropertySymbols
          , Ks = Object.prototype.hasOwnProperty
          , Js = Object.prototype.propertyIsEnumerable
          , summaryvue_type_script_lang_ts_defNormalProp = (e,t,o)=>t in e ? Vs(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o
          , Xs = (0,
        s.aZ)({
            name: "KeyMovesSummaryController",
            components: {
                KeyMovesSummary: Is
            },
            setup() {
                const e = (0,
                s.iH)({
                    black: void 0,
                    white: void 0
                })
                  , t = (0,
                s.Fl)((()=>Bo.D.collection.filter((e=>(0,
                Gs.i)(e.color))).map((e=>((e,t)=>Us(e, Hs(t)))(((e,t)=>{
                    for (var o in t || (t = {}))
                        Ks.call(t, o) && summaryvue_type_script_lang_ts_defNormalProp(e, o, t[o]);
                    if (Ys)
                        for (var o of Ys(t))
                            Js.call(t, o) && summaryvue_type_script_lang_ts_defNormalProp(e, o, t[o]);
                    return e
                }
                )({}, e), {
                    parent: (0,
                    Es.b)(e.parentMoveKey),
                    retry: (0,
                    Es.b)(e.attemptMoveKey)
                })))))
                  , o = (0,
                s.Fl)((()=>({
                    black: (0,
                    Dt.jb)({
                        decimals: 1,
                        method: Math.round,
                        number: x.F.CAPS.black.all
                    }),
                    white: (0,
                    Dt.jb)({
                        decimals: 1,
                        method: Math.round,
                        number: x.F.CAPS.white.all
                    })
                })))
                  , a = (0,
                s.Fl)((()=>Ce.j.selectedColor));
                return (0,
                s.bv)((()=>{
                    updateAccuracy(),
                    To.m.on(No.h.RetryCompleted, updateAccuracy)
                }
                )),
                (0,
                s.YP)((()=>({
                    selectedColor: a.value
                })), updateAccuracy),
                {
                    adjustedAccuracies: e,
                    attempts: t,
                    boardOptions: (0,
                    s.Fl)((()=>(0,
                    pt.T)())),
                    colors: (0,
                    s.Fl)((()=>Object.values(i.lA.ColorsAsWords).filter(Gs.i))),
                    onClickRow: function onClickRow({move: e}) {
                        (0,
                        Co.g)(e)
                    },
                    serverAccuracies: o,
                    selectedColor: a
                };
                async function updateAccuracy() {
                    try {
                        const t = Bo.D.collection.some((e=>(0,
                        Gs.i)(e.color) && !e.viewedAnswer)) ? await async function getRevisedAccuracies(e) {
                            const t = await (0,
                            Ds.h)()
                              , o = {
                                action: Ws.J.Actions.Caps,
                                positions: (0,
                                Ee.N)().map((e=>({
                                    playedMove: {
                                        mateIn: e.playedMove.mateIn,
                                        moveLan: e.playedMove.moveLan,
                                        score: e.playedMove.score
                                    },
                                    suggestedMove: {
                                        mateIn: e.suggestedMove.mateIn,
                                        moveLan: e.suggestedMove.moveLan,
                                        score: e.suggestedMove.score
                                    },
                                    retriedMove: formatRetryPosition(e)
                                }))),
                                options: {
                                    doCEECaps2: !0,
                                    source: {
                                        client: "web",
                                        gameId: zs.X.gameId,
                                        gameType: zs.X.gameType,
                                        token: t.token
                                    },
                                    variant: (0,
                                    oo.j)().getVariant()
                                },
                                startingFen: e
                            };
                            return (0,
                            Zt.FR)("cee_experimental") && (o.options = Object.assign(o.options || {}, {
                                ceemPreproduction: !0
                            })),
                            (0,
                            Zt.FR)("analysis_staging_shadow_request") && qs.Z.post(Ws.J.ShadowPostUrl, o),
                            new Promise(((e,s)=>{
                                Rs.z.on(Ws.J.Events.CAPSStream, (function onMessage(t) {
                                    Rs.z.off({
                                        type: Ws.J.Events.CAPSStream,
                                        handler: onMessage
                                    }),
                                    t.err && s(t.message),
                                    e({
                                        black: t.black.all,
                                        white: t.white.all
                                    })
                                }
                                )),
                                t.send(JSON.stringify(o))
                            }
                            ));
                            function formatRetryPosition(e) {
                                const t = Bo.D.collection.find((t=>t.parentMoveKey === e.id && !t.viewedAnswer));
                                if (!t)
                                    return null;
                                const o = (0,
                                Es.b)(t.attemptMoveKey);
                                return o ? {
                                    mateIn: o.playedMove.mateIn,
                                    moveLan: o.playedMove.moveLan,
                                    score: o.playedMove.score,
                                    eval: o.playedMove.eval && {
                                        pv: o.playedMove.eval.pv,
                                        cp: o.playedMove.eval.cp,
                                        mateIn: o.playedMove.eval.mateIn,
                                        mate: o.playedMove.eval.mate,
                                        depth: o.playedMove.eval.depth
                                    }
                                } : null
                            }
                        }(x.F.startingFen) : o.value;
                        e.value = {
                            black: (0,
                            Dt.jb)({
                                decimals: 1,
                                method: Math.round,
                                number: t[i.lA.ColorsAsWords.Black]
                            }),
                            white: (0,
                            Dt.jb)({
                                decimals: 1,
                                method: Math.round,
                                number: t[i.lA.ColorsAsWords.White]
                            })
                        }
                    } catch (t) {}
                }
            }
        })
          , Qs = Xs
          , ea = (0,
        v.Z)(Qs, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("key-moves-summary", {
                attrs: {
                    "adjusted-accuracies": e.adjustedAccuracies,
                    attempts: e.attempts,
                    "board-options": e.boardOptions,
                    colors: e.colors,
                    "server-accuracies": e.serverAccuracies
                },
                on: {
                    "click-row": e.onClickRow
                }
            })
        }
        ), [], !1, null, null, null).exports;
        const ta = {
            [d.x.Classifications.Types.BestMove]: $e.Z.trans("The chess engine's top choice."),
            [d.x.Classifications.Types.Book]: $e.Z.trans("A conventional opening move."),
            [d.x.Classifications.Types.Blunder]: $e.Z.trans("A very bad move that could lose material or end the game."),
            [d.x.Classifications.Types.Brilliant]: $e.Z.trans("The best move - and tricky to find too!"),
            [d.x.Classifications.Types.Excellent]: $e.Z.trans("Almost as good as the Best move."),
            [d.x.Classifications.Types.Good]: $e.Z.trans("A decent move but not the best."),
            [d.x.Classifications.Types.Inaccuracy]: $e.Z.trans("A weak move."),
            [d.x.Classifications.Types.MissedWin]: $e.Z.trans("A move was missed that would have won material - or the game."),
            [d.x.Classifications.Types.Mistake]: $e.Z.trans("A bad move that immediately worsens your position."),
            [d.x.Classifications.Types.GreatFind]: $e.Z.trans("A move that altered the course of the game!"),
            [d.x.Classifications.Types.Miss]: $e.Z.trans("A move was missed that would have won material - or the game.")
        };
        var oa = (0,
        s.aZ)({
            name: "Tallies",
            directives: {
                tooltip: k.Z
            },
            props: {
                lockedRows: {
                    type: Array,
                    default: ()=>[]
                },
                rows: {
                    type: Array,
                    required: !0
                }
            },
            emits: ["click-row"],
            setup: ()=>({
                colors: {
                    black: i.lA.ColorsAsNumbers.Black,
                    white: i.lA.ColorsAsNumbers.White
                },
                tooltips: ta
            })
        })
          , sa = {
            icon: "tallies-icon",
            label: "tallies-label",
            row: "tallies-row",
            hoverable: "tallies-hoverable",
            value: "tallies-value"
        };
        var aa = (0,
        v.Z)(oa, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component,
                attrs: {
                    "data-cy": "game-review-tallies"
                }
            }, e._l(e.rows, (function(t) {
                return o("div", {
                    key: t.name,
                    class: [e.$style.row, t.className],
                    attrs: {
                        "data-cy": "tallies-row-" + t.name
                    }
                }, [o("div", {
                    class: [e.$style.value, e.$style.hoverable],
                    domProps: {
                        textContent: e._s(e.lockedRows.includes(t.name) ? "?" : t.data.white)
                    },
                    on: {
                        click: function(o) {
                            return e.$emit("click-row", {
                                key: t.name,
                                color: e.colors.white
                            })
                        }
                    }
                }), e._v(" "), o("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: e.tooltips[t.name],
                        expression: "tooltips[row.name]"
                    }],
                    class: e.$style.label
                }, [o("span", {
                    class: e.$style.icon,
                    domProps: {
                        innerHTML: e._s(t.icon)
                    }
                }), e._v(" "), o("span", {
                    domProps: {
                        textContent: e._s(t.label)
                    }
                })]), e._v(" "), o("div", {
                    class: [e.$style.value, e.$style.hoverable],
                    domProps: {
                        textContent: e._s(e.lockedRows.includes(t.name) ? "?" : t.data.black)
                    },
                    on: {
                        click: function(o) {
                            return e.$emit("click-row", {
                                key: t.name,
                                color: e.colors.black
                            })
                        }
                    }
                })])
            }
            )), 0)
        }
        ), [], !1, (function tallies_injectStyles(e) {
            this.$style = sa.locals || sa
        }
        ), null, null).exports;
        const na = {
            [d.x.Classifications.Types.Brilliant]: "brilliant",
            [d.x.Classifications.Types.BestMove]: "best",
            [d.x.Classifications.Types.Excellent]: "excellent",
            [d.x.Classifications.Types.Good]: "good",
            [d.x.Classifications.Types.Book]: "book",
            [d.x.Classifications.Types.Inaccuracy]: "inaccuracy",
            [d.x.Classifications.Types.Mistake]: "mistake",
            [d.x.Classifications.Types.Blunder]: "blunder",
            [d.x.Classifications.Types.Miss]: "miss",
            [d.x.Classifications.Types.MissedWin]: "missedWin",
            [d.x.Classifications.Types.GreatFind]: "greatFind"
        };
        var ra = (0,
        s.aZ)({
            name: "TalliesController",
            components: {
                Tallies: aa
            },
            setup() {
                const e = (0,
                s.Fl)((()=>x.F.isBasicAnalysis ? [d.x.Classifications.Types.Brilliant, d.x.Classifications.Types.GreatFind] : []))
                  , t = (0,
                s.Fl)((()=>{
                    const e = [d.x.Classifications.Types.Brilliant, d.x.Classifications.Types.GreatFind, d.x.Classifications.Types.BestMove, d.x.Classifications.Types.Excellent, d.x.Classifications.Types.Good, d.x.Classifications.Types.Book, d.x.Classifications.Types.Inaccuracy, d.x.Classifications.Types.Mistake, d.x.Classifications.Types.Blunder];
                    return (0,
                    Zt.FR)("analysis_miss_classification") ? e.splice(e.length - 1, 0, d.x.Classifications.Types.Miss) : e.push(d.x.Classifications.Types.MissedWin),
                    e
                }
                ));
                return {
                    lockedRows: e,
                    onRowClick: function onRowClick(e) {
                        const t = function findFirstPositionOfClassification({color: e, key: t}) {
                            return (0,
                            Ee.N)().find((o=>(!e || e === o.color) && o.classification === t))
                        }(e);
                        t && (0,
                        Co.g)(t.ids.move)
                    },
                    rows: (o = t.value,
                    o.map((e=>{
                        var t, o;
                        const {className: s, icon: a, label: n} = c.xt[e];
                        return {
                            className: e ? `analysis-${s}` : void 0,
                            data: {
                                black: String(null != (t = x.F.tallies.black[na[e]]) ? t : 0),
                                white: String(null != (o = x.F.tallies.white[na[e]]) ? o : 0)
                            },
                            icon: a ? (0,
                            i.P$)({
                                path: a,
                                size: String(12)
                            }) : null,
                            label: n,
                            name: e
                        }
                    }
                    )))
                };
                var o
            }
        })
          , ia = {
            component: "tallies-component"
        };
        var la = (0,
        v.Z)(ra, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("div", {
                class: e.$style.component
            }, [o("tallies", {
                attrs: {
                    "locked-rows": e.lockedRows,
                    rows: e.rows
                },
                on: {
                    "click-row": e.onRowClick
                }
            })], 1)
        }
        ), [], !1, (function game_review_tallies_injectStyles(e) {
            this.$style = ia.locals || ia
        }
        ), null, null).exports
          , ca = o(61891)
          , da = o(15350)
          , ua = o(40784)
          , ma = o(8002)
          , pa = o(12601)
          , va = o(21308)
          , ha = o(59775)
          , ya = o(46018)
          , ga = (0,
        s.aZ)({
            name: "ReviewTabController",
            components: {
                CoachSummaryController: Pe,
                GameArcController: Ye,
                MoveListController: Po,
                ReviewTabRoot: te,
                SidebarTabContent: oe.Z,
                SummaryController: ea,
                TalliesController: la
            },
            setup: ()=>((0,
            ca.d)(J.Y.Events.Review),
            (0,
            s.Ah)((()=>{
                (0,
                a.h)()
            }
            )),
            {
                accuracies: (0,
                s.Fl)((()=>x.F.CAPS)),
                avatars: (0,
                s.Fl)((()=>({
                    black: ha.F.black.avatarUrl,
                    white: ha.F.white.avatarUrl
                }))),
                coachAvatar: (0,
                s.Fl)((()=>n.a.imagePrimary)),
                depth: (0,
                s.Fl)((()=>Number(x.F.analysisDepth))),
                gameResult: (0,
                s.Fl)((()=>xe.S.headers.Result)),
                isBasicAnalysis: (0,
                s.Fl)((()=>x.F.isBasicAnalysis)),
                onShowCoachModal: showCoachModal,
                progress: (0,
                s.Fl)((()=>x.F.progress)),
                reviewControls: ma.v,
                selectedColor: (0,
                s.Fl)((()=>Ce.j.selectedColor)),
                showAccuracyAvatar: (0,
                s.Fl)(da.B),
                showCoachSummary: (0,
                s.Fl)((()=>Boolean(!xe.S.selectedNode))),
                onClickTheme: function onClickTheme({url: e, type: t}) {
                    (0,
                    r.K)(J.Y.Events.Training, {
                        type: t
                    }),
                    window.open(e, "_blank")
                },
                onToggleShowBestMode: function onToggleShowBestMode({open: e}) {
                    Ce.j.showBestMoveMode = e,
                    pa.e.emit(L.b.Events.ToggleShowBestMoveMode, {
                        state: e
                    })
                },
                onSelectColor: function onSelectColor({option: e}) {
                    (0,
                    ua.O)(e)
                },
                showBestMoveMode: (0,
                s.Fl)((()=>(0,
                lo.k)())),
                themes: (0,
                s.Fl)((()=>ya.z)),
                scoreOverride: (0,
                s.Fl)(va.m)
            })
        })
          , ba = (0,
        v.Z)(ga, (function() {
            var e = this
              , t = e.$createElement
              , o = e._self._c || t;
            return o("sidebar-tab-content", [o("review-tab-root", {
                attrs: {
                    accuracies: e.accuracies,
                    avatars: e.avatars,
                    "coach-avatar": e.coachAvatar,
                    depth: e.depth,
                    "game-result": e.gameResult,
                    "is-basic-analysis": e.isBasicAnalysis,
                    progress: e.progress,
                    "selected-color": e.selectedColor,
                    "show-accuracy-avatar": e.showAccuracyAvatar,
                    "show-best-mode": e.showBestMoveMode,
                    "show-coach-summary": e.showCoachSummary,
                    themes: e.themes
                },
                on: {
                    "click-theme": e.onClickTheme,
                    "select-color": e.onSelectColor,
                    "show-coach-modal": e.onShowCoachModal,
                    "toggle-show-best-mode": e.onToggleShowBestMode
                },
                scopedSlots: e._u([{
                    key: "game-arc",
                    fn: function() {
                        return [o("game-arc-controller")]
                    },
                    proxy: !0
                }, {
                    key: "tallies",
                    fn: function() {
                        return [o("tallies-controller")]
                    },
                    proxy: !0
                }, {
                    key: "coach-summary",
                    fn: function() {
                        return [o("coach-summary-controller")]
                    },
                    proxy: !0
                }, {
                    key: "move-list",
                    fn: function() {
                        return [o("move-list-controller", {
                            attrs: {
                                "coach-avatar": e.coachAvatar
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "summary",
                    fn: function() {
                        return [e.showBestMoveMode || e.isBasicAnalysis ? e._e() : o("summary-controller")]
                    },
                    proxy: !0
                }])
            })], 1)
        }
        ), [], !1, null, null, null).exports
    }
}]);
