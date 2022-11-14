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
    }
}),
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[191], {
    15892: function(e, t, n) {
        n.d(t, {
            a: function() {
                return p
            },
            S: function() {
                return setCoach
            }
        });
        var s = n(92866)
          , a = n(20647)
          , o = n(25685)
          , l = n(3510)
          , i = n(57367)
          , r = n(63754)
          , c = Object.defineProperty
          , u = Object.getOwnPropertySymbols
          , d = Object.prototype.hasOwnProperty
          , g = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,n)=>t in e ? c(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        const p = (0,
        s.qj)(function getCoach() {
            return (window.chesscom.features.includes("settings_service_read") ? (0,
            o.w)(["learn.coach"]).then((e=>e["learn.coach"])) : i.Z.get(r.Z.generate("web_learn_get_preferred_coach_callback")).then((e=>e.data.coachCode))).then((e=>{
                var t;
                const n = null != (t = a.H.find((t=>t.name === e))) ? t : a.j;
                Object.assign(p, n)
            }
            )),
            ((e,t)=>{
                for (var n in t || (t = {}))
                    d.call(t, n) && __defNormalProp(e, n, t[n]);
                if (u)
                    for (var n of u(t))
                        g.call(t, n) && __defNormalProp(e, n, t[n]);
                return e
            }
            )({}, a.j)
        }());
        function setCoach(e=a.j) {
            return Object.assign(p, e),
            i.Z.post(r.Z.generate("web_learn_update_preferred_coach_callback"), {
                coachCode: e.name
            }),
            window.chesscom.features.includes("settings_service_data_sync") && (0,
            l.z)({
                "learn.coach": "none" === e.name ? null : e.name
            }),
            e
        }
    },
    20647: function(e, t, n) {
        n.d(t, {
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
    97541: function(e, t, n) {
        n.d(t, {
            y: function() {
                return updateBoardOption
            }
        });
        var s = n(20517)
          , a = n(6159)
          , o = n(57367)
          , l = n(63754);
        async function updateBoardOption(e, t) {
            if (!s.f[e])
                throw new Error(`${e} is not a valid board option`);
            const [n,i] = (0,
            a.M)(e, t);
            await o.Z.post(l.Z.generate(s.f[n]), {
                action: i
            })
        }
    },
    1464: function(e, t, n) {
        n.d(t, {
            b: function() {
                return d
            }
        });
        var s = n(50250)
          , a = Object.defineProperty
          , o = Object.defineProperties
          , l = Object.getOwnPropertyDescriptors
          , i = Object.getOwnPropertySymbols
          , r = Object.prototype.hasOwnProperty
          , c = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,n)=>t in e ? a(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        const u = window.chesscom.features.includes("new_max_analysis_endpoint") ? {
            [s.A.Engine.Options.Latest]: {
                value: s.A.Engine.Options.Latest,
                label: "Stockfish 15"
            }
        } : {
            [s.A.Engine.Options.Latest]: {
                value: s.A.Engine.Options.Latest,
                label: "Stockfish 10"
            },
            [s.A.Engine.Options.StockfishNNUE]: {
                value: s.A.Engine.Options.StockfishNNUE,
                label: "Stockfish 12 NNUE"
            }
        }
          , d = window.chesscom.features.includes("new_max_analysis_endpoint") ? {
            [s.A.Engine.Options.Latest]: {
                value: s.A.Engine.Options.Latest,
                label: "Stockfish 15 NNUE"
            },
            [s.A.Engine.Options.KomodoDragon]: {
                value: s.A.Engine.Options.KomodoDragon,
                label: "Komodo Dragon NNUE"
            }
        } : (g = ((e,t)=>{
            for (var n in t || (t = {}))
                r.call(t, n) && __defNormalProp(e, n, t[n]);
            if (i)
                for (var n of i(t))
                    c.call(t, n) && __defNormalProp(e, n, t[n]);
            return e
        }
        )({}, u),
        p = {
            [s.A.Engine.Options.Komodo13]: {
                value: s.A.Engine.Options.Komodo13,
                label: "Komodo 13"
            },
            [s.A.Engine.Options.KomodoMCTS]: {
                value: s.A.Engine.Options.KomodoMCTS,
                label: "Komodo MCTS"
            }
        },
        o(g, l(p)));
        var g, p
    },
    37142: function(e, t, n) {
        n.d(t, {
            R: function() {
                return canRunMaxAnalysis
            }
        });
        var s = n(12585);
        function canRunMaxAnalysis() {
            return !s.d.uiLocked && s.d.canConfigure
        }
    },
    5601: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var s = {
            name: "IconToggle",
            components: {
                IconFont: n(35559).Z
            },
            props: {
                enabled: {
                    type: Boolean,
                    default: !1
                },
                isDarkMode: {
                    type: Boolean,
                    default: !1
                },
                onIcon: {
                    type: String,
                    required: !0
                },
                offIcon: {
                    type: String,
                    required: !0
                }
            },
            emits: ["toggle"],
            computed: {
                displayedIcon() {
                    return this.enabled ? this.onIcon : this.offIcon
                }
            },
            methods: {
                toggleIconState() {
                    this.$emit("toggle", this.enabled)
                }
            }
        }
          , a = {
            icon: "icon-toggle-icon",
            off: "icon-toggle-off"
        };
        var o = (0,
        n(51900).Z)(s, (function() {
            var e, t = this, n = t.$createElement;
            return (t._self._c || n)("icon-font", {
                class: [t.$style.icon, (e = {},
                e[t.$style.off] = !t.enabled,
                e)],
                attrs: {
                    "is-dark-mode": t.isDarkMode,
                    name: t.displayedIcon
                },
                on: {
                    click: t.toggleIconState
                }
            })
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = a.locals || a
        }
        ), null, null).exports
    },
    8524: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var s = n(5556)
          , a = {
            name: "ModalContainer",
            props: {
                autoShow: {
                    type: Boolean,
                    default: !1
                },
                closeOnBackgroundClick: {
                    type: Boolean,
                    default: !0
                },
                closeOnEscPress: {
                    type: Boolean,
                    default: !1
                },
                centerOverParent: {
                    type: Boolean,
                    default: !1
                },
                centerOverContent: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["background-clicked"],
            data: ()=>({
                visible: !1
            }),
            mounted() {
                this.closeOnEscPress && window.addEventListener("keyup", this.onKeyPress),
                this.autoShow && this.show()
            },
            beforeDestroy() {
                this.closeOnEscPress && window.removeEventListener("keyup", this.onKeyPress)
            },
            methods: {
                hide() {
                    this.visible = !1,
                    this.$emit(s.U3.MODAL_DID_HIDE)
                },
                onBackgroundClick() {
                    this.closeOnBackgroundClick && (this.hide(),
                    this.$emit("background-clicked"))
                },
                onKeyPress(e) {
                    27 === e.keyCode && this.hide()
                },
                show() {
                    this.visible = !0
                }
            }
        }
          , o = {
            component: "modal-container-component",
            "parent-centered": "modal-container-parent-centered",
            bg: "modal-container-bg",
            enter: "modal-container-enter",
            leave: "modal-container-leave",
            "content-centered": "modal-container-content-centered"
        };
        var l = (0,
        n(51900).Z)(a, (function() {
            var e, t, n = this, s = n.$createElement, a = n._self._c || s;
            return a("transition", {
                attrs: {
                    "enter-active-class": n.$style.enter,
                    "leave-active-class": n.$style.leave
                }
            }, [n.visible ? a("div", {
                class: [n.$style.component, (e = {},
                e[n.$style["parent-centered"]] = n.centerOverParent,
                e), (t = {},
                t[n.$style["content-centered"]] = n.centerOverContent,
                t)]
            }, [n.centerOverParent ? n._e() : a("div", {
                class: n.$style.bg,
                on: {
                    click: n.onBackgroundClick
                }
            }), n._v(" "), n._t("default")], 2) : n._e()])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = o.locals || o
        }
        ), null, null).exports
    },
    84715: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var s = {
            name: "ModalContent",
            props: {
                theme: {
                    type: String,
                    default: null
                },
                overflow: String
            }
        }
          , a = {
            component: "modal-content-component",
            "dark-light": "modal-content-dark-light"
        };
        var o = (0,
        n(51900).Z)(s, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("section", {
                class: [e.$style.component, e.$style[e.theme]],
                attrs: {
                    overflow: e.overflow
                }
            }, [e._t("default")], 2)
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = a.locals || a
        }
        ), null, null).exports
    },
    51246: function(e, t, n) {
        n.d(t, {
            X: function() {
                return s
            },
            Z: function() {
                return c
            }
        });
        var s, a = n(92866), o = n(5601), l = n(63930);
        (e=>{
            let t;
            var n;
            (n = t = e.Slots || (e.Slots = {})).Left = "left",
            n.Right = "right"
        }
        )(s || (s = {}));
        var i = (0,
        a.aZ)({
            name: "Row",
            components: {
                IconToggle: o.Z
            },
            props: {
                data: {
                    type: Object
                },
                elementType: {
                    type: String,
                    default: "div"
                },
                icon: {
                    type: String
                },
                label: {
                    type: String
                },
                isLocked: {
                    type: Boolean,
                    default: !1
                },
                toggleIcon: {
                    type: Object
                },
                toggleState: {
                    type: Boolean,
                    default: !1
                }
            },
            setup(e, {slots: t}) {
                const n = (0,
                a.Fl)((()=>{
                    var t, n;
                    return [{
                        name: "left",
                        value: null == (t = e.data) ? void 0 : t.white
                    }, {
                        name: "right",
                        value: null == (n = e.data) ? void 0 : n.black
                    }]
                }
                ));
                return {
                    showData: (0,
                    a.Fl)((()=>e.data || (0,
                    l.u8)(t))),
                    showToggle: (0,
                    a.Fl)((()=>e.toggleIcon && e.data && !e.isLocked)),
                    slotsContent: n
                }
            }
        })
          , r = {
            bold: "details-row-bold",
            header: "details-row-header",
            component: "details-row-component",
            inactive: "details-row-inactive",
            scrollable: "details-row-scrollable",
            data: "details-row-data",
            icon: "details-row-icon",
            lock: "details-row-lock",
            toggle: "details-row-toggle",
            value: "details-row-value",
            hidden: "details-row-hidden"
        };
        var c = (0,
        n(51900).Z)(i, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n(e.elementType, {
                tag: "component",
                class: e.$style.component
            }, [n("div", {
                class: e.$style.label
            }, [e._t("label", (function() {
                return [e.icon ? n("span", {
                    class: e.$style.icon,
                    domProps: {
                        innerHTML: e._s(e.icon)
                    }
                }) : e._e(), e._v("\n      " + e._s(e.label) + "\n    ")]
            }
            ))], 2), e._v(" "), e.showData ? n("div", {
                class: e.$style.data
            }, e._l(e.slotsContent, (function(t) {
                return n("div", {
                    key: t.name,
                    class: e.$style.value
                }, [e._t(t.name, (function() {
                    return [e.isLocked ? n("span", {
                        class: ["icon-font-chess lock", e.$style.lock]
                    }) : n("span", {
                        domProps: {
                            textContent: e._s(t.value)
                        }
                    })]
                }
                ))], 2)
            }
            )), 0) : e._e(), e._v(" "), e.showToggle ? n("div", {
                class: [e.$style.value, e.$style.toggle]
            }, [e._t("toggle", (function() {
                return [n("icon-toggle", {
                    attrs: {
                        enabled: e.toggleState,
                        "off-icon": e.offIcon,
                        "on-icon": e.onIcon
                    },
                    on: {
                        toggle: e.toggleCallback
                    }
                })]
            }
            ))], 2) : e._e()])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = r.locals || r
        }
        ), null, null).exports
    },
    1032: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return Me
            }
        });
        var s = n(92866)
          , a = n(43936)
          , o = n(32751)
          , l = n(6850)
          , i = n(46806)
          , r = n(15892)
          , c = n(20647)
          , u = n(56279)
          , d = n(8524)
          , g = n(84715)
          , p = n(32305)
          , y = n(91353)
          , b = (0,
        s.aZ)({
            name: "AnalysisSettings",
            components: {
                V5Button: u.V5Button,
                V5Select: u.V5Select
            },
            props: {
                analysisSettings: Object,
                browserDepthOptions: Array,
                canChangeDepthSettings: Boolean,
                canRunMaxAnalysis: Boolean,
                defaultFullAnalysisDepth: Object,
                engineOptions: Array,
                evaluationSettings: Object,
                fullAnalysisDepthOptions: Array,
                linesOptions: Array,
                maxAnalysisEngineOptions: Array,
                upgradeRoute: String
            },
            emits: ["click-run-deep-analysis", "update-analysis-setting", "update-evaluation-setting"],
            setup: (e,{emit: t})=>({
                isUsingStockfish15: (0,
                y.FR)("analysis_ceac_stockfish_15"),
                onAnalysisSettingsChange: function onAnalysisSettingsChange(e, n) {
                    t("update-analysis-setting", {
                        [e]: n
                    })
                },
                onEvaluationSettingsChange: function onEvaluationSettingsChange(e, n) {
                    t("update-evaluation-setting", {
                        [e]: n
                    })
                }
            })
        })
          , v = {
            component: "settings-analysis-component",
            settings: "settings-analysis-settings",
            runbutton: "settings-analysis-runbutton",
            setting: "settings-analysis-setting",
            classifications: "settings-analysis-classifications",
            inline: "settings-analysis-inline",
            message: "settings-analysis-message",
            disabled: "settings-analysis-disabled",
            select: "settings-analysis-select",
            label: "settings-analysis-label"
        }
          , m = n(51900);
        var h = (0,
        m.Z)(b, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [n("header", [e._v("\n    " + e._s(e.$trans("Game Review")) + "\n  ")]), e._v(" "), e.canChangeDepthSettings ? e._e() : n("a", {
                class: e.$style.message,
                attrs: {
                    href: e.upgradeRoute
                },
                domProps: {
                    textContent: e._s(e.$trans("Upgrade to Diamond for more options"))
                }
            }), e._v(" "), n("ul", {
                class: e.$style.settings
            }, [e.isUsingStockfish15 ? n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "gameReviewEngine"
                },
                domProps: {
                    textContent: e._s(e.$trans("Chess Engine"))
                }
            }), e._v(" "), n("span", {
                class: e.$style.inline,
                attrs: {
                    name: "gameReviewEngine"
                },
                domProps: {
                    textContent: e._s("Stockfish 15 NNUE")
                }
            })]) : e._e(), e._v(" "), e.canChangeDepthSettings ? n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.$trans("Depth"))
                }
            }), e._v(" "), n("v5-select", {
                class: e.$style.select,
                attrs: {
                    "data-cy": "setting-full-analysis-depth",
                    options: e.fullAnalysisDepthOptions,
                    value: Number(e.analysisSettings.fullAnalysisDepth)
                },
                on: {
                    input: function(t) {
                        e.onAnalysisSettingsChange("fullAnalysisDepth", Number(t))
                    }
                }
            })], 1) : n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.$trans("Default Depth"))
                }
            }), e._v(" "), n("span", {
                class: e.$style.inline,
                domProps: {
                    textContent: e._s(e.defaultFullAnalysisDepth.label)
                }
            })]), e._v(" "), n("v5-button", {
                class: e.$style.runbutton,
                attrs: {
                    "data-cy": "setting-run-deep-analysis",
                    theme: "basic-light"
                },
                on: {
                    click: function(t) {
                        return e.$emit("click-run-deep-analysis", {
                            depth: 30
                        })
                    }
                }
            }, [e._v("\n      " + e._s(e.$trans("Run Depth 30 (3-5 min)")) + "\n    ")])], 1), e._v(" "), n("header", [e._v("\n    " + e._s(e.$trans("Browser Analysis")) + "\n  ")]), e._v(" "), n("ul", {
                class: e.$style.settings
            }, [n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.$trans("Chess Engine"))
                }
            }), e._v(" "), n("v5-select", {
                class: e.$style.select,
                attrs: {
                    "data-cy": "setting-engine-name",
                    options: e.engineOptions,
                    value: e.evaluationSettings.engineName
                },
                on: {
                    input: function(t) {
                        return e.onEvaluationSettingsChange("engineName", t)
                    }
                }
            })], 1), e._v(" "), n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.$trans("Maximum Depth"))
                }
            }), e._v(" "), n("v5-select", {
                class: e.$style.select,
                attrs: {
                    "data-cy": "setting-evaluation-depth",
                    options: e.browserDepthOptions,
                    value: e.evaluationSettings.depth
                },
                on: {
                    input: function(t) {
                        e.onEvaluationSettingsChange("depth", Number(t))
                    }
                }
            })], 1), e._v(" "), n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.$trans("Number of Lines"))
                }
            }), e._v(" "), n("v5-select", {
                class: e.$style.select,
                attrs: {
                    "data-cy": "setting-evaluation-lines",
                    "label-key": null,
                    "value-key": null,
                    options: e.linesOptions,
                    value: e.evaluationSettings.linesCount
                },
                on: {
                    input: function(t) {
                        e.onEvaluationSettingsChange("linesCount", Number(t))
                    }
                }
            })], 1)]), e._v(" "), n("header", [e._v("\n    " + e._s(e.$trans("Cloud Analysis")) + "\n  ")]), e._v(" "), e.canRunMaxAnalysis ? n("ul", {
                class: e.$style.settings
            }, [n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.$trans("Chess Engine"))
                }
            }), e._v(" "), n("v5-select", {
                class: e.$style.select,
                attrs: {
                    "data-cy": "setting-max-analysis-engine",
                    options: e.maxAnalysisEngineOptions,
                    value: e.analysisSettings.maxAnalysisEngine
                },
                on: {
                    input: function(t) {
                        return e.onAnalysisSettingsChange("maxAnalysisEngine", t)
                    }
                }
            })], 1)]) : n("a", {
                class: e.$style.message,
                attrs: {
                    href: e.upgradeRoute
                },
                domProps: {
                    textContent: e._s(e.$trans("Upgrade to Diamond to enable Max Analysis"))
                }
            })])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = v.locals || v
        }
        ), null, null).exports
          , f = n(67783)
          , w = n(6898)
          , _ = (0,
        s.aZ)({
            name: "SettingsField",
            directives: {
                tooltip: w.Z
            },
            props: {
                label: {
                    required: !0,
                    type: String
                },
                tooltip: {
                    required: !1,
                    type: String
                }
            }
        })
          , S = {
            row: "settings-field-row",
            label: "settings-field-label",
            icon: "settings-field-icon"
        };
        var $ = (0,
        m.Z)(_, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: e.$style.row
            }, [e._m(0), e._v(" "), e._t("default"), e._v(" "), n("div", {
                class: e.$style.clearfix
            })], 2)
        }
        ), [function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("label", {
                class: e.$style.label
            }, [e._v("\n    " + e._s(e.label) + "\n    "), e.tooltip ? n("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.tooltip,
                    expression: "tooltip"
                }],
                staticClass: "icon-font-chess circle-question",
                class: e.$style.icon
            }) : e._e()])
        }
        ], !1, (function settings_field_injectStyles(e) {
            this.$style = S.locals || S
        }
        ), null, null).exports
          , C = n(6301)
          , O = (0,
        s.aZ)({
            name: "BoardSettings",
            components: {
                V5Select: u.V5Select,
                V5Switch: u.V5Switch,
                SettingsField: $
            },
            props: {
                boardStyles: {
                    type: Object
                },
                settings: {
                    type: Object,
                    required: !0
                }
            },
            emits: ["update-board-setting"],
            setup(e, {emit: t}) {
                const n = (0,
                s.Fl)((()=>e.settings.playSounds ? e.settings.soundTheme : "none"))
                  , a = (0,
                s.Fl)((()=>{
                    var t;
                    const n = (null == (t = e.boardStyles) ? void 0 : t.sounds) || [];
                    return [{
                        name: (0,
                        p.dW)("None"),
                        id: 0,
                        code: "none"
                    }, ...n]
                }
                ));
                return {
                    animationType: (0,
                    s.Fl)((()=>"battle" === e.settings.animationType ? "default" : e.settings.animationType)),
                    animationTypes: (0,
                    s.Fl)((()=>{
                        var t, n;
                        return null != (n = null == (t = e.boardStyles) ? void 0 : t.animationTypes) ? n : []
                    }
                    )),
                    boardColors: (0,
                    s.Fl)((()=>{
                        var t, n;
                        return null != (n = null == (t = e.boardStyles) ? void 0 : t.boardColors) ? n : []
                    }
                    )),
                    coordinateOptions: f.lu,
                    moveListDisplayTypes: (0,
                    s.Fl)((()=>{
                        var t, n;
                        return null != (n = null == (t = e.boardStyles) ? void 0 : t.moveListDisplayTypes) ? n : []
                    }
                    )),
                    onChange: onChange,
                    onChangeSound: function onChangeSound(e) {
                        "none" === e ? onChange("playSounds", !1) : (onChange("playSounds", !0),
                        onChange("soundTheme", e))
                    },
                    pieceStyles: (0,
                    s.Fl)((()=>{
                        var t, n;
                        return null != (n = null == (t = e.boardStyles) ? void 0 : t.pieceStyles) ? n : []
                    }
                    )),
                    previewFen: (0,
                    C.H)(),
                    selectedSound: n,
                    soundOptions: a
                };
                function onChange(e, n) {
                    t("update-board-setting", {
                        field: e,
                        value: n
                    })
                }
            }
        })
          , k = {
            component: "settings-board-component",
            field: "settings-board-field"
        };
        var E = (0,
        m.Z)(O, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [n("settings-field", {
                attrs: {
                    label: e.$trans("Pieces")
                }
            }, [n("v5-select", {
                class: e.$style.select,
                attrs: {
                    "label-key": "name",
                    "value-key": "code",
                    icon: "caret-down",
                    value: e.settings.pieceStyle,
                    options: e.pieceStyles
                },
                on: {
                    input: function(t) {
                        return e.onChange("pieceStyle", t)
                    }
                }
            })], 1), e._v(" "), n("settings-field", {
                attrs: {
                    label: e.$trans("Board")
                }
            }, [n("v5-select", {
                class: e.$style.select,
                attrs: {
                    "label-key": "name",
                    "value-key": "code",
                    icon: "caret-down",
                    value: e.settings.boardStyle,
                    options: e.boardColors
                },
                on: {
                    input: function(t) {
                        return e.onChange("boardStyle", t)
                    }
                }
            })], 1), e._v(" "), n("settings-field", {
                attrs: {
                    label: e.$trans("Sound Theme")
                }
            }, [n("v5-select", {
                class: e.$style.select,
                attrs: {
                    "label-key": "name",
                    "value-key": "code",
                    icon: "caret-down",
                    value: e.selectedSound,
                    options: e.soundOptions
                },
                on: {
                    input: function(t) {
                        return e.onChangeSound(t)
                    }
                }
            })], 1), e._v(" "), n("settings-field", {
                attrs: {
                    label: e.$trans("Coordinates")
                }
            }, [n("v5-select", {
                class: e.$style.select,
                attrs: {
                    icon: "caret-down",
                    value: e.settings.coordinates,
                    options: e.coordinateOptions
                },
                on: {
                    input: function(t) {
                        return e.onChange("coordinates", t)
                    }
                }
            })], 1), e._v(" "), n("settings-field", {
                attrs: {
                    label: e.$trans("Piece Notation")
                }
            }, [n("v5-select", {
                class: e.$style.select,
                attrs: {
                    "label-key": "name",
                    "value-key": "code",
                    icon: "caret-down",
                    value: e.settings.moveListDisplayType,
                    options: e.moveListDisplayTypes
                },
                on: {
                    input: function(t) {
                        return e.onChange("moveListDisplayType", t)
                    }
                }
            })], 1), e._v(" "), n("settings-field", {
                attrs: {
                    label: e.$trans("Animation Type")
                }
            }, [n("v5-select", {
                class: e.$style.select,
                attrs: {
                    "label-key": "name",
                    "value-key": "code",
                    icon: "caret-down",
                    value: e.animationType,
                    options: e.animationTypes
                },
                on: {
                    input: function(t) {
                        return e.onChange("animationType", t)
                    }
                }
            })], 1), e._v(" "), n("settings-field", {
                attrs: {
                    label: e.$trans("Highlight Moves")
                }
            }, [n("v5-switch", {
                class: e.$style.switch,
                attrs: {
                    name: "highlightMoves",
                    value: e.settings.highlightMoves
                },
                on: {
                    input: function(t) {
                        return e.onChange("highlightMoves", t)
                    }
                }
            })], 1), e._v(" "), n("settings-field", {
                attrs: {
                    label: e.$trans("Play Sounds")
                }
            }, [n("v5-switch", {
                class: e.$style.switch,
                attrs: {
                    name: "playSounds",
                    value: e.settings.playSounds
                },
                on: {
                    input: function(t) {
                        return e.onChange("playSounds", t)
                    }
                }
            })], 1), e._v(" "), n("settings-field", {
                attrs: {
                    label: e.$trans("Show Legal Moves")
                }
            }, [n("v5-switch", {
                class: e.$style.switch,
                attrs: {
                    name: "highlightLegalMoves",
                    value: e.settings.highlightLegalMoves
                },
                on: {
                    input: function(t) {
                        return e.onChange("highlightLegalMoves", t)
                    }
                }
            })], 1)], 1)
        }
        ), [], !1, (function settings_board_injectStyles(e) {
            this.$style = k.locals || k
        }
        ), null, null).exports
          , A = n(67104)
          , x = n(89065)
          , B = n(26908)
          , P = n(5601)
          , T = n(51246)
          , j = n(60456)
          , D = n(67489)
          , M = (0,
        s.aZ)({
            name: "UiSettings",
            components: {
                V5Switch: u.V5Switch,
                RowComponent: T.Z,
                IconToggle: P.Z
            },
            props: {
                analysisSettings: {
                    type: Object,
                    required: !0
                },
                coachEnabled: Boolean,
                isObservedGame: Boolean,
                hasSuggestedArrowsAccess: Boolean
            },
            emits: ["toggle-category", "toggle-classification", "toggle-coach", "update-analysis-setting"],
            setup(e, {emit: t}) {
                const n = (0,
                s.Fl)((()=>e.isObservedGame ? [T.X.Slots.Left] : [T.X.Slots.Left, T.X.Slots.Right]))
                  , a = (0,
                s.Fl)((()=>{
                    const {moveListColors: t} = e.analysisSettings;
                    return e.isObservedGame ? {
                        left: t[D.Z.MoveListColors.Categories.Both]
                    } : {
                        left: t[D.Z.MoveListColors.Categories.Opponent],
                        right: t[D.Z.MoveListColors.Categories.Self]
                    }
                }
                ))
                  , o = (0,
                s.Fl)((()=>{
                    const e = j.C;
                    return window.chesscom.features.includes("analysis_miss_classification") ? delete e[B.x.Classifications.Types.MissedWin] : delete e[B.x.Classifications.Types.Miss],
                    Object.keys(e).map((e=>{
                        const t = x.xt[e];
                        return {
                            className: `analysis-${t.className}`,
                            icon: (0,
                            A.P$)({
                                path: t.icon,
                                size: String(12)
                            }),
                            label: t.label,
                            key: t.key,
                            toggles: getRowToggles(t.key)
                        }
                    }
                    ))
                }
                ));
                return {
                    onAnalysisSettingsChange: function onAnalysisSettingsChange(e, n) {
                        t("update-analysis-setting", {
                            [e]: n
                        })
                    },
                    showWdlBar: (0,
                    y.FR)("wdl_eval_bar_option"),
                    showTablebaseBar: (0,
                    y.FR)("tb_eval_bar_option"),
                    slots: n,
                    categoryToggles: a,
                    isToggleEnabled: function isToggleEnabled(e, t) {
                        var n;
                        return (null == (n = a.value[e]) ? void 0 : n.enabled) && t.toggles[e]
                    },
                    rows: o
                };
                function getRowToggles(t) {
                    var n;
                    return e.isObservedGame ? {
                        left: a.value.left.classifications[t]
                    } : {
                        left: a.value.left.classifications[t],
                        right: null == (n = a.value.right) ? void 0 : n.classifications[t]
                    }
                }
            }
        })
          , Z = {
            component: "settings-ui-component",
            setting: "settings-ui-setting",
            classifications: "settings-ui-classifications",
            "bar-modes": "settings-ui-bar-modes",
            "bar-mode-heading": "settings-ui-bar-mode-heading",
            "bar-option": "settings-ui-bar-option",
            disabled: "settings-ui-disabled",
            player: "settings-ui-player",
            row: "settings-ui-row",
            select: "settings-ui-select",
            label: "settings-ui-label"
        };
        var L = (0,
        m.Z)(M, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("ul", {
                class: e.$style.component
            }, [n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "boardFeedbackEnabled"
                },
                domProps: {
                    textContent: e._s(e.$trans("Show Move Classification On Board"))
                }
            }), e._v(" "), n("v5-switch", {
                attrs: {
                    name: "boardFeedbackEnabled",
                    "data-cy": "show-move-classification-toggle",
                    value: e.analysisSettings.boardFeedbackEnabled
                },
                on: {
                    input: function(t) {
                        return e.onAnalysisSettingsChange("boardFeedbackEnabled", t)
                    }
                }
            })], 1), e._v(" "), n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "feedbackEnabled"
                },
                domProps: {
                    textContent: e._s(e.$trans("Show Best Move"))
                }
            }), e._v(" "), n("v5-switch", {
                attrs: {
                    name: "feedbackEnabled",
                    "data-cy": "show-best-move-toggle",
                    value: e.analysisSettings.feedbackEnabled
                },
                on: {
                    input: function(t) {
                        return e.onAnalysisSettingsChange("feedbackEnabled", t)
                    }
                }
            })], 1), e._v(" "), n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "evalBarEnabled"
                },
                domProps: {
                    textContent: e._s(e.$trans("Show Evaluation Bar"))
                }
            }), e._v(" "), n("v5-switch", {
                attrs: {
                    name: "evalBarEnabled",
                    "data-cy": "show-evaluation-bar-toggle",
                    value: e.analysisSettings.evalBarEnabled
                },
                on: {
                    input: function(t) {
                        return e.onAnalysisSettingsChange("evalBarEnabled", t)
                    }
                }
            })], 1), e._v(" "), e.showWdlBar ? n("li", {
                class: [e.$style.setting, e.$style["bar-modes"]]
            }, [n("div", {
                class: e.$style["bar-mode-heading"]
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "evalBarModesEnabled"
                },
                domProps: {
                    textContent: e._s(e.$trans("Evaluation Bar Modes"))
                }
            }), e._v(" "), n("v5-switch", {
                attrs: {
                    name: "evalBarModesEnabled",
                    value: e.analysisSettings.evalBarModesEnabled
                },
                on: {
                    input: function(t) {
                        return e.onAnalysisSettingsChange("evalBarModesEnabled", t)
                    }
                }
            })], 1), e._v(" "), e.analysisSettings.evalBarModesEnabled ? n("ul", [e.showWdlBar ? n("li", {
                class: [e.$style.setting, e.$style["bar-option"]]
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "wdlBar"
                },
                domProps: {
                    textContent: e._s(e.$trans("WDL for Openings"))
                }
            }), e._v(" "), n("v5-switch", {
                attrs: {
                    name: "wdlBar",
                    value: e.analysisSettings.isWdlBarEnabled
                },
                on: {
                    input: function(t) {
                        return e.onAnalysisSettingsChange("isWdlBarEnabled", t)
                    }
                }
            })], 1) : e._e(), e._v(" "), e.showTablebaseBar ? n("li", {
                class: [e.$style.setting, e.$style["bar-option"]]
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "tablebaseBar"
                },
                domProps: {
                    textContent: e._s(e.$trans("Tablebase in Endgame"))
                }
            }), e._v(" "), n("v5-switch", {
                attrs: {
                    name: "tablebaseBar",
                    value: e.analysisSettings.isTablebaseBarEnabled
                },
                on: {
                    input: function(t) {
                        return e.onAnalysisSettingsChange("isTablebaseBarEnabled", t)
                    }
                }
            })], 1) : e._e()]) : e._e()]) : e._e(), e._v(" "), n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "threatsEnabled"
                },
                domProps: {
                    textContent: e._s(e.$trans("Show Threats"))
                }
            }), e._v(" "), n("v5-switch", {
                attrs: {
                    name: "threatsEnabled",
                    "data-cy": "show-threats-toggle",
                    value: e.analysisSettings.threatsEnabled
                },
                on: {
                    input: function(t) {
                        return e.onAnalysisSettingsChange("threatsEnabled", t)
                    }
                }
            })], 1), e._v(" "), n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "coachEnabled"
                },
                domProps: {
                    textContent: e._s(e.$trans("Show Coach"))
                }
            }), e._v(" "), n("v5-switch", {
                attrs: {
                    name: "coachEnabled",
                    value: e.coachEnabled
                },
                on: {
                    input: function(t) {
                        return e.$emit("toggle-coach")
                    }
                }
            })], 1), e._v(" "), e.hasSuggestedArrowsAccess ? n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "suggestedMoveArrows"
                },
                domProps: {
                    textContent: e._s(e.$trans("Show Suggested Move Arrows"))
                }
            }), e._v(" "), n("v5-switch", {
                attrs: {
                    name: "suggestedMoveArrows",
                    value: e.analysisSettings.suggestedMoveArrows
                },
                on: {
                    input: function(t) {
                        return e.onAnalysisSettingsChange("suggestedMoveArrows", t)
                    }
                }
            })], 1) : e._e(), e._v(" "), n("li", {
                class: e.$style.setting
            }, [n("label", {
                class: e.$style.label,
                attrs: {
                    for: "colorsEnabled"
                },
                domProps: {
                    textContent: e._s(e.$trans("Move Strength Coloring"))
                }
            }), e._v(" "), n("v5-switch", {
                attrs: {
                    name: "colorsEnabled",
                    "data-cy": "show-move-strength-coloring-toggle",
                    value: e.analysisSettings.colorsEnabled
                },
                on: {
                    input: function(t) {
                        return e.onAnalysisSettingsChange("colorsEnabled", t)
                    }
                }
            })], 1), e._v(" "), n("li", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.analysisSettings.colorsEnabled,
                    expression: "analysisSettings.colorsEnabled"
                }],
                class: [e.$style.setting, e.$style.classifications]
            }, [n("row-component", {
                class: e.$style.row,
                scopedSlots: e._u([e._l(e.categoryToggles, (function(t, s) {
                    return {
                        key: s,
                        fn: function() {
                            return [n("span", {
                                key: t.key,
                                class: e.$style.player
                            }, [n("span", {
                                domProps: {
                                    textContent: e._s(t.label)
                                }
                            }), e._v(" "), n("IconToggle", {
                                attrs: {
                                    enabled: t.enabled,
                                    "off-icon": "eye-off",
                                    "on-icon": "eye"
                                },
                                on: {
                                    toggle: function(n) {
                                        return e.$emit("toggle-category", t.key)
                                    }
                                }
                            })], 1)]
                        },
                        proxy: !0
                    }
                }
                ))], null, !0)
            }), e._v(" "), e._l(e.rows, (function(t, s) {
                return n("row-component", {
                    key: t.name,
                    class: [e.$style.row, t.className],
                    attrs: {
                        icon: t.icon,
                        label: t.label
                    },
                    scopedSlots: e._u([e._l(e.slots, (function(a) {
                        return {
                            key: a,
                            fn: function() {
                                var o;
                                return [n("span", {
                                    key: a
                                }, [n("icon-toggle", {
                                    class: (o = {},
                                    o[e.$style.disabled] = !e.categoryToggles[a].enabled,
                                    o),
                                    attrs: {
                                        "data-cy": "show-classification-toggle-icon-" + s,
                                        enabled: e.isToggleEnabled(a, t),
                                        "off-icon": "eye-off",
                                        "on-icon": "eye"
                                    },
                                    on: {
                                        toggle: function(n) {
                                            return e.$emit("toggle-classification", {
                                                classification: t.key,
                                                category: e.categoryToggles[a].key
                                            })
                                        }
                                    }
                                })], 1)]
                            },
                            proxy: !0
                        }
                    }
                    ))], null, !0)
                })
            }
            ))], 2)])
        }
        ), [], !1, (function settings_ui_injectStyles(e) {
            this.$style = Z.locals || Z
        }
        ), null, null).exports;
        const N = {
            [D.Z.Component.Tabs.Analysis]: h,
            [D.Z.Component.Tabs.UI]: L,
            [D.Z.Component.Tabs.Board]: E
        }
          , F = {
            [D.Z.Component.Tabs.Analysis]: {
                icon: "chess-board-search",
                label: (0,
                p.dW)("Analysis")
            },
            [D.Z.Component.Tabs.UI]: {
                icon: "web-view",
                label: (0,
                p.dW)("Interface")
            },
            [D.Z.Component.Tabs.Board]: {
                icon: "chess-board",
                label: (0,
                p.dW)("Board")
            }
        };
        var R = (0,
        s.aZ)({
            name: "SettingsModalView",
            components: {
                ModalContainer: d.Z,
                ModalContent: g.Z,
                V5Button: u.V5Button
            },
            props: {
                analysisSettings: Object,
                boardSettings: {
                    type: Object,
                    required: !0
                },
                boardStyles: {
                    type: Object
                },
                browserDepthOptions: Array,
                coachEnabled: Boolean,
                defaultFullAnalysisDepth: Object,
                engineOptions: Array,
                evaluationSettings: Object,
                fullAnalysisDepthOptions: Array,
                canChangeDepthSettings: Boolean,
                canRunMaxAnalysis: Boolean,
                isObservedGame: Boolean,
                linesOptions: Array,
                maxAnalysisEngineOptions: Array,
                upgradeRoute: String
            },
            emits: ["click-run-deep-analysis", "close", "toggle-category", "toggle-classification", "toggle-coach", "update-analysis-setting", "update-board-setting", "update-evaluation-setting"],
            setup() {
                const e = (0,
                s.iH)(D.Z.Component.Tabs.Analysis);
                return {
                    activeComponent: (0,
                    s.Fl)((()=>N[e.value])),
                    activeTab: e,
                    setActiveTab: function setActiveTab(t) {
                        e.value = t
                    },
                    tabIsActive: function tabIsActive(t) {
                        return t === e.value
                    },
                    tabs: F
                }
            }
        })
          , I = {
            modal: "settings-view-modal",
            close: "settings-view-close",
            tabs: "settings-view-tabs",
            tab: "settings-view-tab",
            active: "settings-view-active",
            label: "settings-view-label",
            icon: "settings-view-icon"
        };
        var K = (0,
        m.Z)(R, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("modal-container", {
                class: e.$style.component,
                attrs: {
                    "auto-show": "",
                    "outside-close-icon": !0
                }
            }, [n("modal-content", {
                class: e.$style.modal,
                attrs: {
                    theme: "dark-light"
                }
            }, [n("span", {
                class: ["icon-font-chess x", e.$style.close],
                attrs: {
                    "data-cy": "analysis-settings-close-button"
                },
                on: {
                    click: function(t) {
                        return e.$emit("close")
                    }
                }
            }), e._v(" "), n("header", {
                class: e.$style.tabs
            }, e._l(e.tabs, (function(t, s) {
                var a;
                return n("v5-button", {
                    key: s,
                    class: [e.$style.tab, (a = {},
                    a[e.$style.active] = e.tabIsActive(s),
                    a)],
                    attrs: {
                        "data-cy": "settings-modal-tabs-" + s,
                        "is-active": e.tabIsActive(s)
                    },
                    on: {
                        click: function() {
                            return e.setActiveTab(s)
                        }
                    }
                }, [n("div", {
                    class: [e.$style.icon, "icon-font-chess", t.icon]
                }), e._v(" "), n("div", {
                    class: e.$style.label,
                    domProps: {
                        textContent: e._s(t.label)
                    }
                })])
            }
            )), 1), e._v(" "), n(e.activeComponent, {
                tag: "component",
                attrs: {
                    "analysis-settings": e.analysisSettings,
                    "board-styles": e.boardStyles,
                    "browser-depth-options": e.browserDepthOptions,
                    "can-change-depth-settings": e.canChangeDepthSettings,
                    "can-run-max-analysis": e.canRunMaxAnalysis,
                    "coach-enabled": e.coachEnabled,
                    "default-full-analysis-depth": e.defaultFullAnalysisDepth,
                    "engine-options": e.engineOptions,
                    "evaluation-settings": e.evaluationSettings,
                    "full-analysis-depth-options": e.fullAnalysisDepthOptions,
                    "is-observed-game": e.isObservedGame,
                    "lines-options": e.linesOptions,
                    "max-analysis-engine-options": e.maxAnalysisEngineOptions,
                    settings: e.boardSettings,
                    "upgrade-route": e.upgradeRoute,
                    "options-only": ""
                },
                on: {
                    "click-run-deep-analysis": function(t) {
                        return e.$emit("click-run-deep-analysis", t)
                    },
                    "toggle-category": function(t) {
                        return e.$emit("toggle-category", t)
                    },
                    "toggle-classification": function(t) {
                        return e.$emit("toggle-classification", t)
                    },
                    "toggle-coach": function(t) {
                        return e.$emit("toggle-coach")
                    },
                    "update-analysis-setting": function(t) {
                        return e.$emit("update-analysis-setting", t)
                    },
                    "update-board-setting": function(t) {
                        return e.$emit("update-board-setting", t)
                    },
                    "update-evaluation-setting": function(t) {
                        return e.$emit("update-evaluation-setting", t)
                    }
                }
            })], 1)], 1)
        }
        ), [], !1, (function settings_view_injectStyles(e) {
            this.$style = I.locals || I
        }
        ), null, null).exports
          , U = n(64647)
          , W = n(82282)
          , V = n(1464)
          , q = n(73253)
          , z = n(57634)
          , G = n(49815)
          , H = n(85571);
        function updateEvaluationSettings(e) {
            [e.engineName, i.v.settings.engineName].includes(G.Y.Engine.Keys.Off) && (0,
            z.B)(e.engineName !== G.Y.Engine.Keys.Off),
            e.engineName && (H.v.engineName = ""),
            (0,
            q.VP)(e)
        }
        var X = n(3527)
          , Y = n.n(X)
          , J = n(87481)
          , Q = Object.defineProperty
          , ee = Object.getOwnPropertySymbols
          , te = Object.prototype.hasOwnProperty
          , ne = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,n)=>t in e ? Q(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        function getEngineOptions() {
            const e = ((e,t)=>{
                for (var n in t || (t = {}))
                    te.call(t, n) && __defNormalProp(e, n, t[n]);
                if (ee)
                    for (var n of ee(t))
                        ne.call(t, n) && __defNormalProp(e, n, t[n]);
                return e
            }
            )({}, J.h$);
            return Object.entries(e).filter(isSupported).map((([e,t])=>({
                value: e,
                label: t.description ? `${t.name} (${t.description})` : t.name
            })))
        }
        function isSupported([e,t]) {
            return Boolean(!t.multithreadingRequired || Y().supportsMultithreading())
        }
        var se = n(53418);
        var ae = n(37142)
          , oe = n(32614)
          , le = n(91322)
          , ie = n(33322)
          , re = n(14965)
          , ce = n(97541)
          , ue = n(594)
          , de = n(75696)
          , ge = n(3510)
          , pe = n(11721);
        async function updateBoardSetting(e) {
            const t = (0,
            o.T)();
            e.field in t && await async function saveBoardOptions(e) {
                if (0 === Object.keys(e).length)
                    return;
                Object.assign(ue.q.boardOptions, e),
                (0,
                re.x)().forEach((t=>{
                    t.game.setOptions(e)
                }
                ));
                const t = Object.keys(e).map((t=>(0,
                ce.y)(t, e[t])));
                await Promise.all(t),
                de.n.setBoardOptions(ue.q.boardOptions),
                (0,
                ie.q)(),
                window.chesscom.features.includes("settings_service_data_sync") && await (0,
                ge.z)((0,
                pe.R)(e))
            }({
                [e.field]: e.value
            })
        }
        var ye = n(59752)
          , be = n(60326)
          , ve = Object.defineProperty
          , me = Object.defineProperties
          , he = Object.getOwnPropertyDescriptors
          , fe = Object.getOwnPropertySymbols
          , we = Object.prototype.hasOwnProperty
          , _e = Object.prototype.propertyIsEnumerable
          , update_move_list_category_setting_defNormalProp = (e,t,n)=>t in e ? ve(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , update_move_list_category_setting_spreadValues = (e,t)=>{
            for (var n in t || (t = {}))
                we.call(t, n) && update_move_list_category_setting_defNormalProp(e, n, t[n]);
            if (fe)
                for (var n of fe(t))
                    _e.call(t, n) && update_move_list_category_setting_defNormalProp(e, n, t[n]);
            return e
        }
          , __spreadProps = (e,t)=>me(e, he(t));
        var Se = Object.defineProperty
          , $e = Object.defineProperties
          , Ce = Object.getOwnPropertyDescriptors
          , Oe = Object.getOwnPropertySymbols
          , ke = Object.prototype.hasOwnProperty
          , Ee = Object.prototype.propertyIsEnumerable
          , update_move_list_classification_setting_defNormalProp = (e,t,n)=>t in e ? Se(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , update_move_list_classification_setting_spreadValues = (e,t)=>{
            for (var n in t || (t = {}))
                ke.call(t, n) && update_move_list_classification_setting_defNormalProp(e, n, t[n]);
            if (Oe)
                for (var n of Oe(t))
                    Ee.call(t, n) && update_move_list_classification_setting_defNormalProp(e, n, t[n]);
            return e
        }
          , update_move_list_classification_setting_spreadProps = (e,t)=>$e(e, Ce(t));
        var Ae = n(99106);
        const xe = {
            18: {
                diamondOnly: !1,
                label: (0,
                p.dW)("18 (~10 sec)")
            },
            20: {
                diamondOnly: !1,
                label: (0,
                p.dW)("20 (~25 sec)")
            },
            22: {
                diamondOnly: !0,
                label: (0,
                p.dW)("22 (~50 sec)")
            },
            24: {
                diamondOnly: !0,
                label: (0,
                p.dW)("24 (~1 min 15 sec)")
            },
            26: {
                diamondOnly: !0,
                label: (0,
                p.dW)("26 (~1 min 40 sec)")
            }
        }
          , Be = [{
            value: 14,
            label: (0,
            p.dW)("14 (~3 sec)")
        }, {
            value: 16,
            label: (0,
            p.dW)("16 (~5 sec)")
        }, {
            value: 18,
            label: (0,
            p.dW)("18 (~10 sec)")
        }, {
            value: 20,
            label: (0,
            p.dW)("20 (~30 sec)")
        }, {
            value: 22,
            label: (0,
            p.dW)("22 (~1 min)")
        }, {
            value: 99,
            label: (0,
            p.dW)("99 (Unlimited)")
        }];
        function getDepthOptions() {
            const e = se.E.checkMembershipStatus("isDiamond");
            return function createOptions(e) {
                return Object.entries(e).map((([e,t])=>({
                    label: t.label,
                    value: Number(e)
                })))
            }(xe).filter((t=>!xe[t.value].diamondOnly || e))
        }
        var Pe = n(24050)
          , Te = n(12089)
          , je = (0,
        s.aZ)({
            el: "#modal-settings",
            name: "SettingsModalController",
            components: {
                SettingsModalView: K
            },
            setup() {
                const e = (0,
                s.iH)(null);
                return (0,
                a.o)().then((()=>{
                    e.value = (0,
                    l.X)()
                }
                )),
                {
                    analysisSettings: (0,
                    s.Fl)((()=>be.Ko)),
                    boardSettings: (0,
                    s.Fl)((()=>(0,
                    o.T)())),
                    boardStyles: e,
                    coachEnabled: (0,
                    s.Fl)((()=>!r.a.isNone)),
                    defaultFullAnalysisDepth: xe[D.Z.Depth.DefaultValues.Full],
                    engineOptions: getEngineOptions,
                    evaluationSettings: i.v.settings,
                    fullAnalysisDepthOptions: getDepthOptions(),
                    browserDepthOptions: Be,
                    canChangeDepthSettings: se.E.checkMembershipStatus("isDiamond"),
                    canRunMaxAnalysis: (0,
                    ae.R)(),
                    linesOptions: [...Array(G.Y.MaxLines).keys()].map((e=>e + 1)),
                    isObservedGame: (0,
                    s.Fl)((()=>!oe.S.userColor)),
                    maxAnalysisEngineOptions: Object.values(V.b),
                    modalIsVisible: (0,
                    s.Fl)((()=>be.BU.modalIsVisible)),
                    onClickRunDeepAnalysis: function onClickRunDeepAnalysis({depth: e}) {
                        (0,
                        W.u)({
                            depth: e,
                            shouldSave: !0,
                            userInitiated: !0
                        }),
                        (0,
                        le.W)(),
                        (0,
                        Pe.K)(Te.Y.Tabs.Review)
                    },
                    onToggleCategory: function onToggleCategory(e) {
                        !function updateMoveListCategorySetting({category: e}) {
                            be.Ko.moveListColors = __spreadProps(update_move_list_category_setting_spreadValues({}, be.Ko.moveListColors), {
                                [e]: __spreadProps(update_move_list_category_setting_spreadValues({}, be.Ko.moveListColors[e]), {
                                    enabled: !be.Ko.moveListColors[e].enabled
                                })
                            }),
                            ye.E.emit(D.Z.Events.MoveListColorSettingsChanged)
                        }({
                            category: e
                        })
                    },
                    onToggleClassification: function onToggleClassification({classification: e, category: t}) {
                        !function updateMoveListClassificationSetting({classification: e, category: t}) {
                            be.Ko.moveListColors = update_move_list_classification_setting_spreadProps(update_move_list_classification_setting_spreadValues({}, be.Ko.moveListColors), {
                                [t]: update_move_list_classification_setting_spreadProps(update_move_list_classification_setting_spreadValues({}, be.Ko.moveListColors[t]), {
                                    classifications: update_move_list_classification_setting_spreadProps(update_move_list_classification_setting_spreadValues({}, be.Ko.moveListColors[t].classifications), {
                                        [e]: !be.Ko.moveListColors[t].classifications[e]
                                    })
                                })
                            }),
                            ye.E.emit(D.Z.Events.MoveListColorSettingsChanged)
                        }({
                            classification: e,
                            category: t
                        })
                    },
                    onToggleCoach: function onToggleCoach() {
                        (0,
                        r.S)(c.H.find((e=>r.a.isNone ? !e.isNone : e.isNone)))
                    },
                    onUpdateAnalysisSetting: function onUpdateAnalysisSetting(e) {
                        (0,
                        Ae.V)(e)
                    },
                    onUpdateBoardSetting: function onUpdateBoardSetting(e) {
                        updateBoardSetting(e)
                    },
                    onUpdateEvaluationSetting: updateEvaluationSettings,
                    toggleModal: le.W,
                    upgradeRoute: U._.upgradeMembership()
                }
            }
        })
          , De = je
          , Me = (0,
        m.Z)(De, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return e.modalIsVisible ? n("settings-modal-view", {
                attrs: {
                    "analysis-settings": e.analysisSettings,
                    "board-settings": e.boardSettings,
                    "board-styles": e.boardStyles,
                    "browser-depth-options": e.browserDepthOptions,
                    "coach-enabled": e.coachEnabled,
                    "default-full-analysis-depth": e.defaultFullAnalysisDepth,
                    "engine-options": e.engineOptions(),
                    "evaluation-settings": e.evaluationSettings,
                    "full-analysis-depth-options": e.fullAnalysisDepthOptions,
                    "can-change-depth-settings": e.canChangeDepthSettings,
                    "can-run-max-analysis": e.canRunMaxAnalysis,
                    "is-observed-game": e.isObservedGame,
                    "lines-options": e.linesOptions,
                    "max-analysis-engine-options": e.maxAnalysisEngineOptions,
                    "upgrade-route": e.upgradeRoute
                },
                on: {
                    "click-run-deep-analysis": e.onClickRunDeepAnalysis,
                    "toggle-category": e.onToggleCategory,
                    "toggle-classification": e.onToggleClassification,
                    "toggle-coach": e.onToggleCoach,
                    "update-analysis-setting": e.onUpdateAnalysisSetting,
                    "update-board-setting": e.onUpdateBoardSetting,
                    "update-evaluation-setting": e.onUpdateEvaluationSetting,
                    close: e.toggleModal
                }
            }) : e._e()
        }
        ), [], !1, null, null, null).exports
    }
}]);
