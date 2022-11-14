"use strict";
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[365], {
    92361: function(e, n, s) {
        s.d(n, {
            M: function() {
                return sortBy
            }
        });
        const sortBy = (e,n)=>[...e].sort(((e,s)=>e[n] > s[n] ? 1 : -1))
    },
    1464: function(e, n, s) {
        s.d(n, {
            b: function() {
                return u
            }
        });
        var a = s(50250)
          , i = Object.defineProperty
          , o = Object.defineProperties
          , t = Object.getOwnPropertyDescriptors
          , l = Object.getOwnPropertySymbols
          , r = Object.prototype.hasOwnProperty
          , c = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,n,s)=>n in e ? i(e, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[n] = s;
        const d = window.chesscom.features.includes("new_max_analysis_endpoint") ? {
            [a.A.Engine.Options.Latest]: {
                value: a.A.Engine.Options.Latest,
                label: "Stockfish 15"
            }
        } : {
            [a.A.Engine.Options.Latest]: {
                value: a.A.Engine.Options.Latest,
                label: "Stockfish 10"
            },
            [a.A.Engine.Options.StockfishNNUE]: {
                value: a.A.Engine.Options.StockfishNNUE,
                label: "Stockfish 12 NNUE"
            }
        }
          , u = window.chesscom.features.includes("new_max_analysis_endpoint") ? {
            [a.A.Engine.Options.Latest]: {
                value: a.A.Engine.Options.Latest,
                label: "Stockfish 15 NNUE"
            },
            [a.A.Engine.Options.KomodoDragon]: {
                value: a.A.Engine.Options.KomodoDragon,
                label: "Komodo Dragon NNUE"
            }
        } : (v = ((e,n)=>{
            for (var s in n || (n = {}))
                r.call(n, s) && __defNormalProp(e, s, n[s]);
            if (l)
                for (var s of l(n))
                    c.call(n, s) && __defNormalProp(e, s, n[s]);
            return e
        }
        )({}, d),
        g = {
            [a.A.Engine.Options.Komodo13]: {
                value: a.A.Engine.Options.Komodo13,
                label: "Komodo 13"
            },
            [a.A.Engine.Options.KomodoMCTS]: {
                value: a.A.Engine.Options.KomodoMCTS,
                label: "Komodo MCTS"
            }
        },
        o(v, t(g)));
        var v, g
    },
    37142: function(e, n, s) {
        s.d(n, {
            R: function() {
                return canRunMaxAnalysis
            }
        });
        var a = s(12585);
        function canRunMaxAnalysis() {
            return !a.d.uiLocked && a.d.canConfigure
        }
    },
    62354: function(e, n, s) {
        s.d(n, {
            Z: function() {
                return l
            }
        });
        var a = s(32305)
          , i = s(64647)
          , o = {
            name: "LockedMessage",
            props: {
                asButton: {
                    type: Boolean,
                    default: !1
                },
                message: {
                    type: String,
                    default: (0,
                    a.dW)("Upgrade to View")
                }
            },
            setup: ()=>({
                upgradeRoute: i._.upgradeMembership()
            })
        }
          , t = {
            component: "analysis-upgrade-button-component",
            button: "analysis-upgrade-button-button",
            icon: "analysis-upgrade-button-icon"
        };
        var l = (0,
        s(51900).Z)(o, (function() {
            var e, n = this, s = n.$createElement, a = n._self._c || s;
            return a("a", {
                class: [n.$style.component, (e = {},
                e[n.$style.button] = n.asButton,
                e)],
                attrs: {
                    href: n.upgradeRoute,
                    target: "_blank"
                }
            }, [a("span", {
                class: ["icon-font-chess display-slider", n.$style.icon]
            }), n._v(" "), a("span", {
                domProps: {
                    textContent: n._s(n.message)
                }
            })])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = t.locals || t
        }
        ), null, null).exports
    },
    82951: function(e, n, s) {
        s.r(n),
        s.d(n, {
            default: function() {
                return xn
            }
        });
        var a = s(92866)
          , i = s(5556)
          , o = s(45381)
          , t = s(92535)
          , l = s(32751)
          , r = s(46806)
          , c = s(88520);
        function hasInsufficientMaterial({fen: e, gameType: n}) {
            const s = function getPositionInfo({fen: e, gameType: n}) {
                return c.Z.getPositionInfo(e, {
                    variant: "chess960" === n
                })
            }({
                fen: e,
                gameType: n
            });
            return s ? s.insufficient : null
        }
        var d = s(67104)
          , u = s(56279)
          , v = s(91410)
          , g = s(56367)
          , y = {
            name: "EngineLines",
            components: {
                EngineLine: g.Z
            },
            props: {
                evaluatedLines: {
                    type: Array,
                    default: ()=>[]
                },
                linesCount: {
                    type: Number,
                    default: 0
                }
            }
        }
          , p = s(51900)
          , f = (0,
        p.Z)(y, (function() {
            var e = this
              , n = e.$createElement
              , s = e._self._c || n;
            return s("div", e._l(e.linesCount, (function(n, a) {
                return s("engine-line", e._g(e._b({
                    key: a,
                    attrs: {
                        line: e.evaluatedLines[a],
                        "line-index": a
                    }
                }, "engine-line", e.$attrs, !1), e.$listeners))
            }
            )), 1)
        }
        ), [], !1, null, null, null).exports
          , m = s(32305)
          , b = s(6898)
          , h = (0,
        a.aZ)({
            name: "BasicSwitch",
            components: {
                V5Switch: u.V5Switch
            },
            props: {
                disabled: Boolean,
                name: String,
                label: String,
                value: [String, Number, Boolean]
            },
            emits: ["input"]
        })
          , k = {
            component: "switch-component",
            disabled: "switch-disabled",
            switch: "switch-switch"
        };
        var w = (0,
        p.Z)(h, (function() {
            var e, n = this, s = n.$createElement, a = n._self._c || s;
            return a("div", {
                class: [n.$style.component, (e = {},
                e[n.$style.disabled] = n.disabled,
                e)]
            }, [a("label", {
                attrs: {
                    for: n.name
                },
                domProps: {
                    textContent: n._s(n.label)
                }
            }), n._v(" "), a("v5-switch", {
                class: n.$style.switch,
                attrs: {
                    "data-cy": "switch-" + n.name,
                    name: n.name,
                    disabled: n.disabled,
                    value: n.value
                },
                on: {
                    input: function(e) {
                        return n.$emit("input", e)
                    }
                }
            })], 1)
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = k.locals || k
        }
        ), null, null).exports
          , S = (0,
        a.aZ)({
            name: "AnalysisOptions",
            components: {
                BasicSwitch: w
            },
            directives: {
                Tooltip: b.Z
            },
            props: {
                analysisComplete: Boolean,
                canRunMaxAnalysis: Boolean,
                engineDepth: Number,
                engineName: String,
                engineEnabled: Boolean,
                isBasicAnalysis: Boolean,
                isEvalBarShowing: Boolean,
                isFullAnalysis: Boolean,
                isMaxAnalysisRunning: Boolean,
                showLines: Boolean
            },
            emits: ["click-settings", "toggle-eval-bar", "toggle-feedback", "toggle-max-analysis", "toggle-show-lines"],
            setup(e, {emit: n}) {
                const s = (0,
                a.Fl)((()=>`${e.engineDepth ? `depth=${e.engineDepth}` : ""}${e.engineName && e.engineDepth ? " | " : ""}${e.engineName ? e.engineName : ""}`));
                return {
                    depth: (0,
                    a.Fl)((()=>{
                        var n;
                        return `depth=${null != (n = e.engineDepth) ? n : 0}`
                    }
                    )),
                    engineDescription: s,
                    onToggleEvalBar: function onToggleEvalBar(e) {
                        n("toggle-eval-bar", {
                            value: e
                        })
                    },
                    onToggleFeedback: function onToggleFeedback(e) {
                        n("toggle-feedback", {
                            value: e
                        })
                    },
                    onToggleShowLines: function onToggleShowLines(e) {
                        n("toggle-show-lines", {
                            value: e
                        })
                    }
                }
            }
        })
          , C = {
            component: "analysis-options-component",
            bar: "analysis-options-bar",
            toggles: "analysis-options-toggles",
            toggle: "analysis-options-toggle",
            right: "analysis-options-right",
            icon: "analysis-options-icon",
            depth: "analysis-options-depth",
            maxdepth: "analysis-options-maxdepth",
            button: "analysis-options-button",
            maxanalysis: "analysis-options-maxanalysis",
            running: "analysis-options-running"
        };
        var A = (0,
        p.Z)(S, (function() {
            var e, n, s = this, a = s.$createElement, i = s._self._c || a;
            return i("div", {
                class: s.$style.component
            }, [i("div", {
                class: s.$style.bar
            }, [i("div", {
                class: s.$style.toggles
            }, [i("basic-switch", {
                class: s.$style.toggle,
                attrs: {
                    name: "evaluation",
                    label: s.$trans("Evaluation"),
                    value: s.isEvalBarShowing
                },
                on: {
                    input: s.onToggleEvalBar
                }
            }), s._v(" "), i("basic-switch", {
                class: s.$style.toggle,
                attrs: {
                    name: "lines",
                    disabled: !s.engineEnabled,
                    label: s.$trans("Lines"),
                    value: Boolean(s.showLines)
                },
                on: {
                    input: s.onToggleShowLines
                }
            }), s._v(" "), s.analysisComplete && !s.isBasicAnalysis ? i("basic-switch", {
                class: s.$style.toggle,
                attrs: {
                    name: "feedback",
                    label: s.$trans("Feedback"),
                    value: s.isFullAnalysis && !s.isBasicAnalysis
                },
                on: {
                    input: s.onToggleFeedback
                }
            }) : s._e()], 1), s._v(" "), i("div", {
                class: s.$style.right
            }, [s.canRunMaxAnalysis ? i("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: s.isMaxAnalysisRunning ? s.$trans("Stop Cloud Analysis") : s.$trans("Run Cloud Analysis"),
                    expression: "isMaxAnalysisRunning ? $trans('Stop Cloud Analysis') : $trans('Run Cloud Analysis')"
                }],
                class: [s.$style.maxanalysis, s.$style.icon, "icon-font-chess max-analysis", (e = {},
                e[s.$style.running] = s.isMaxAnalysisRunning,
                e)],
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        s.$emit("toggle-max-analysis")
                    }
                }
            }) : s._e(), s._v(" "), i("div", {
                class: [s.$style.depth, (n = {},
                n[s.$style.maxdepth] = s.isMaxAnalysisRunning,
                n)],
                domProps: {
                    textContent: s._s(s.engineDescription)
                }
            }), s._v(" "), i("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: s.$trans("Settings"),
                    expression: "$trans('Settings')"
                }],
                class: [s.$style.icon, "icon-font-chess circle-gearwheel"],
                attrs: {
                    type: "button",
                    "data-cy": "analysis-options-settings-button"
                },
                on: {
                    click: function(e) {
                        return s.$emit("click-settings")
                    }
                }
            })])])])
        }
        ), [], !1, (function analysis_options_injectStyles(e) {
            this.$style = C.locals || C
        }
        ), null, null).exports
          , E = (0,
        a.aZ)({
            props: {
                savedAnalysisUrl: {
                    type: String,
                    required: !0
                }
            },
            emits: ["click-saved-analysis"]
        })
          , $ = {
            component: "analysis-saved-game-link-component",
            link: "analysis-saved-game-link-link",
            icon: "analysis-saved-game-link-icon"
        };
        var M = (0,
        p.Z)(E, (function() {
            var e = this
              , n = e.$createElement
              , s = e._self._c || n;
            return s("div", {
                class: e.$style.component
            }, [s("a", {
                class: e.$style.link,
                attrs: {
                    href: e.savedAnalysisUrl
                },
                on: {
                    click: function(n) {
                        return e.$emit("click-saved-analysis")
                    }
                }
            }, [s("span", {
                staticClass: "icon-font-chess chess-board-folder",
                class: e.$style.icon
            }), e._v("\n\n    " + e._s(e.$trans("Saved Analysis")) + "\n  ")])])
        }
        ), [], !1, (function analysis_saved_game_link_injectStyles(e) {
            this.$style = $.locals || $
        }
        ), null, null).exports
          , _ = s(62354)
          , F = s(25077)
          , x = Object.defineProperty
          , B = Object.defineProperties
          , N = Object.getOwnPropertyDescriptors
          , L = Object.getOwnPropertySymbols
          , O = Object.prototype.hasOwnProperty
          , P = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,n,s)=>n in e ? x(e, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[n] = s
          , __spreadValues = (e,n)=>{
            for (var s in n || (n = {}))
                O.call(n, s) && __defNormalProp(e, s, n[s]);
            if (L)
                for (var s of L(n))
                    P.call(n, s) && __defNormalProp(e, s, n[s]);
            return e
        }
          , __spreadProps = (e,n)=>B(e, N(n))
          , I = (0,
        a.aZ)({
            name: "AnalysisView",
            components: {
                EngineLines: f,
                Options: A,
                SavedGameLink: M,
                UpgradeButton: _.Z,
                V5Button: u.V5Button
            },
            props: {
                analysisComplete: Boolean,
                engineDepth: Number,
                engineName: String,
                engineEnabled: Boolean,
                evaluation: {
                    type: Object,
                    required: !0
                },
                featureControl: {
                    type: Object
                },
                isAnalysisRunning: Boolean,
                isBasicAnalysis: Boolean,
                isEvalBarShowing: Boolean,
                isFullAnalysis: Boolean,
                isMaxAnalysisRunning: Boolean,
                isSaving: Boolean,
                hasDepthChanged: Boolean,
                hasPgnChanged: Boolean,
                headers: {
                    type: Object,
                    required: !0
                },
                maxAnalysis: Object,
                savedAnalysisUrl: {
                    type: String,
                    required: !0
                }
            },
            emits: ["click-run-full-analysis", "click-saved-analysis", "click-settings", "click-node", "save-self-analysis", "select-self-analysis", "toggle-eval-bar", "toggle-feedback", "toggle-max-analysis", "toggle-show-lines"],
            setup(e) {
                const n = (0,
                a.Fl)((()=>e.isSaving ? (0,
                m.dW)("Saving...") : e.hasPgnChanged ? (0,
                m.dW)("Save") : (0,
                m.dW)("Saved")))
                  , s = (0,
                a.Fl)((()=>{
                    var n, s;
                    const a = null == (n = e.maxAnalysis) ? void 0 : n.eval;
                    if (!(null == (s = null == a ? void 0 : a.pv) ? void 0 : s.length))
                        return;
                    const i = [__spreadProps(__spreadValues({}, (0,
                    F.M)({
                        fen: e.evaluation.fen,
                        pv: a.pv
                    })), {
                        mateIn: a.mateIn,
                        score: a.cp / 100
                    })];
                    return __spreadProps(__spreadValues({}, e.evaluation), {
                        evaluatedLines: i,
                        isEngineRunning: !1
                    })
                }
                ))
                  , i = (0,
                a.Fl)((()=>{
                    const {Date: n, Event: s, Site: a} = e.headers
                      , i = n && "????.??.??" !== n
                      , o = s && "?" !== s;
                    return `${a && "?" !== a ? `${a}${o || i ? ":" : ""} ` : ""}\n        ${o ? `${s}${i ? ":" : ""} ` : ""}\n        ${i ? `${n}` : ""}`
                }
                ))
                  , o = (0,
                a.Fl)((()=>!e.isFullAnalysis && (e.headers.Black !== d.lA.EmptyPGNHeaders.Black || e.headers.White !== d.lA.EmptyPGNHeaders.White)));
                return {
                    boardId: (0,
                    v.H)(),
                    gameRowText: i,
                    hmlScrollId: "analysis-hml-scroll-container",
                    maxAnalysisLines: s,
                    saveText: n,
                    showFigurine: (0,
                    a.Fl)((()=>e.evaluation.boardOptions.moveListDisplayType === d.$l.MoveListDisplayTypes.Figurine)),
                    showGameDetails: o
                }
            }
        })
          , T = {
            actions: "analysis-view-actions",
            component: "analysis-view-component",
            scrollable: "analysis-view-scrollable",
            button: "analysis-view-button",
            lines: "analysis-view-lines",
            maxlines: "analysis-view-maxlines",
            movelist: "analysis-view-movelist",
            initiating: "analysis-view-initiating",
            players: "analysis-view-players",
            opening: "analysis-view-opening"
        };
        var j = (0,
        p.Z)(I, (function() {
            var e = this
              , n = e.$createElement
              , s = e._self._c || n;
            return s("div", {
                class: e.$style.component,
                attrs: {
                    "data-cy": "analysis-tab-analysis"
                }
            }, [s("options", {
                attrs: {
                    "analysis-complete": e.analysisComplete,
                    "can-run-max-analysis": e.featureControl.canRunMaxAnalysis,
                    "engine-depth": e.engineDepth,
                    "engine-name": e.engineName,
                    "engine-enabled": e.engineEnabled,
                    "is-basic-analysis": e.isBasicAnalysis,
                    "is-eval-bar-showing": e.isEvalBarShowing,
                    "is-full-analysis": e.isFullAnalysis,
                    "is-max-analysis-running": e.isMaxAnalysisRunning,
                    "show-lines": e.evaluation.showLines,
                    "data-cy": "analysis-tab-analysis-options"
                },
                on: {
                    "click-settings": function(n) {
                        return e.$emit("click-settings")
                    },
                    "toggle-eval-bar": function(n) {
                        return e.$emit("toggle-eval-bar", n)
                    },
                    "toggle-feedback": function(n) {
                        return e.$emit("toggle-feedback", n)
                    },
                    "toggle-max-analysis": function(n) {
                        return e.$emit("toggle-max-analysis")
                    },
                    "toggle-show-lines": function(n) {
                        return e.$emit("toggle-show-lines", n)
                    }
                }
            }), e._v(" "), e._t("feedback"), e._v(" "), e.isMaxAnalysisRunning || e.maxAnalysisLines ? s("div", {
                class: e.$style.maxlines
            }, [e.maxAnalysisLines ? s("engine-lines", e._b({
                attrs: {
                    "data-cy": "analysis-tab-analysis-max-analysis-lines",
                    "lines-count": 1,
                    "reverse-figurine-color": !0,
                    "send-score-on-line-click": "",
                    "show-figurine": e.showFigurine
                },
                on: {
                    "node-click": function(n) {
                        return e.$emit("click-node", n)
                    }
                }
            }, "engine-lines", e.maxAnalysisLines, !1)) : s("div", {
                class: e.$style.initiating,
                domProps: {
                    textContent: e._s(e.$trans("Initiating max analysis..."))
                }
            })], 1) : e._e(), e._v(" "), e.evaluation.showLines ? s("engine-lines", e._b({
                class: e.$style.lines,
                attrs: {
                    "data-cy": "analysis-tab-analysis-lines",
                    "send-score-on-line-click": "",
                    "show-figurine": e.showFigurine
                },
                on: {
                    "node-click": function(n) {
                        return e.$emit("click-node", n)
                    }
                }
            }, "engine-lines", e.evaluation, !1)) : e._e(), e._v(" "), s("eco-opening", {
                class: e.$style.opening,
                attrs: {
                    "board-id": e.boardId,
                    "data-cy": "analysis-tab-analysis-opening",
                    "opening-is-clickable": "",
                    "explorer-is-clickable": "",
                    "link-to-explorer": ""
                }
            }), e._v(" "), s("div", {
                class: [e.$style.content, e.$style.scrollable],
                attrs: {
                    id: e.hmlScrollId
                }
            }, [e.showGameDetails ? s("div", {
                class: e.$style.players,
                attrs: {
                    "data-cy": "analysis-tab-analysis-game-details"
                }
            }, [s("div", [s("span", [e._v(e._s(e.headers.White || "?"))]), e._v(" vs. "), s("span", [e._v(e._s(e.headers.Black || "?"))])]), e._v(" "), s("div", {
                domProps: {
                    textContent: e._s(e.gameRowText)
                }
            })]) : e._e(), e._v(" "), s("horizontal-move-list", {
                class: e.$style.movelist,
                attrs: {
                    "board-id": e.boardId,
                    "scroll-container-id": e.hmlScrollId
                }
            }), e._v(" "), e.featureControl.canViewSaveButton ? [e.featureControl.canSave ? s("v5-button", {
                class: e.$style.button,
                attrs: {
                    size: "small",
                    theme: "primary",
                    "data-cy": "analysis-tab-analysis-save-button",
                    disabled: !e.hasPgnChanged || e.isSaving
                },
                domProps: {
                    textContent: e._s(e.saveText)
                },
                on: {
                    click: function(n) {
                        return e.$emit("save-self-analysis")
                    }
                }
            }) : s("upgrade-button", {
                class: [e.$style.button, e.$style.locked],
                attrs: {
                    "as-button": "",
                    "data-cy": "analysis-tab-analysis-upgrade-button",
                    message: e.$trans("Upgrade to Save")
                }
            })] : e._e()], 2), e._v(" "), s("div", {
                class: e.$style.actions
            }, [!e.isFullAnalysis && !e.isAnalysisRunning && !e.analysisComplete || e.hasDepthChanged ? s("v5-button", {
                class: e.$style.button,
                attrs: {
                    size: "small",
                    "data-cy": "analysis-tab-analysis-run-button",
                    disabled: !e.featureControl.canRunFullAnalysis,
                    theme: "basic"
                },
                on: {
                    click: function(n) {
                        return e.$emit("click-run-full-analysis")
                    }
                }
            }, [s("span", {
                staticClass: "icon-font-chess ui_v5-button-icon comp-analysis"
            }), e._v(" "), s("span", {
                domProps: {
                    textContent: e._s(e.$trans("Game Review"))
                }
            })]) : e._e(), e._v(" "), e.featureControl.isLoggedIn ? s("saved-game-link", {
                attrs: {
                    "data-cy": "analysis-tab-analysis-saved-game-link",
                    "saved-analysis-url": e.savedAnalysisUrl
                },
                on: {
                    "click-saved-analysis": function(n) {
                        return e.$emit("click-saved-analysis")
                    }
                }
            }) : e._e()], 1)], 2)
        }
        ), [], !1, (function analysis_view_injectStyles(e) {
            this.$style = T.locals || T
        }
        ), null, null).exports
          , D = s(64647)
          , R = s(3527)
          , Z = s.n(R)
          , K = s(92361)
          , Q = s(89065)
          , W = s(45908)
          , q = s(42964)
          , z = (0,
        a.aZ)({
            name: "AnalysisFeedbackRow",
            components: {
                EngineLine: g.Z,
                MoveSan: W.Z,
                ScoreText: q.Z
            },
            props: {
                boardOptions: {
                    type: Object,
                    required: !0
                },
                boardIsFlipped: {
                    type: Boolean
                },
                canClickSan: {
                    type: Boolean
                },
                classificationKey: {
                    type: String,
                    default: ""
                },
                color: {
                    type: Number,
                    required: !0
                },
                fen: {
                    type: String,
                    required: !0
                },
                line: {
                    type: Object,
                    default: ()=>({})
                },
                san: {
                    type: String,
                    required: !0
                },
                score: {
                    type: String
                },
                selectedPly: {
                    type: Number,
                    required: !0
                }
            },
            emits: ["click-node"],
            setup(e, {emit: n}) {
                const s = (0,
                a.Fl)((()=>Q.xt[e.classificationKey]));
                return {
                    classification: s,
                    colorAsWord: (0,
                    a.Fl)((()=>(0,
                    d.RS)(e.color))),
                    colorClass: (0,
                    a.Fl)((()=>{
                        var e;
                        return (null == (e = s.value) ? void 0 : e.key) ? `analysis-${s.value.className}` : ""
                    }
                    )),
                    description: (0,
                    a.Fl)((()=>{
                        var e, n;
                        return null != (n = null == (e = s.value) ? void 0 : e.description) ? n : (0,
                        m.dW)("was played")
                    }
                    )),
                    engineLineIcon: "magnifying-glass",
                    hasLine: (0,
                    a.Fl)((()=>{
                        var n, s;
                        return null == (s = null == (n = e.line) ? void 0 : n.pvSan) ? void 0 : s.length
                    }
                    )),
                    makeSvg: d.P$,
                    onIconOrSanClick: function onIconOrSanClick() {
                        n("click-node", {
                            goToStart: !0,
                            sanMoves: e.line.pvSan,
                            score: e.score
                        })
                    },
                    showFigurine: (0,
                    a.Fl)((()=>e.boardOptions.moveListDisplayType === d.$l.MoveListDisplayTypes.Figurine))
                }
            }
        })
          , U = {
            bold: "analysis-feedback-row-bold",
            header: "analysis-feedback-row-header",
            inactive: "analysis-feedback-row-inactive",
            scrollable: "analysis-feedback-row-scrollable",
            score: "analysis-feedback-row-score",
            negative: "analysis-feedback-row-negative",
            component: "analysis-feedback-row-component",
            icon: "analysis-feedback-row-icon",
            lineicon: "analysis-feedback-row-lineicon",
            colored: "analysis-feedback-row-colored",
            enginewrap: "analysis-feedback-row-enginewrap",
            engine: "analysis-feedback-row-engine",
            prefix: "analysis-feedback-row-prefix",
            line: "analysis-feedback-row-line",
            description: "analysis-feedback-row-description",
            moves: "analysis-feedback-row-moves",
            indicator: "analysis-feedback-row-indicator",
            black: "analysis-feedback-row-black",
            white: "analysis-feedback-row-white",
            san: "analysis-feedback-row-san",
            clickable: "analysis-feedback-row-clickable",
            scenario: "analysis-feedback-row-scenario",
            hidden: "analysis-feedback-row-hidden",
            topline: "analysis-feedback-row-topline"
        };
        var V = (0,
        p.Z)(z, (function() {
            var e = this
              , n = e.$createElement
              , s = e._self._c || n;
            return s("div", {
                class: e.$style.component
            }, [e._t("default", (function() {
                var n;
                return [e.classification ? s("div", {
                    class: e.$style.icon,
                    domProps: {
                        innerHTML: e._s(e.makeSvg({
                            path: e.classification.icon,
                            size: 26
                        }))
                    }
                }) : s("div", {
                    class: [e.$style.indicator, e.$style[e.colorAsWord]]
                }), e._v(" "), s("div", {
                    class: e.$style.line
                }, [s("div", {
                    class: e.$style.topline
                }, [s("move-san", {
                    class: [e.$style.san, e.$style.colored, e.colorClass, (n = {},
                    n[e.$style.clickable] = e.canClickSan,
                    n)],
                    attrs: {
                        color: e.color,
                        "figurine-size": 3,
                        san: e.san
                    },
                    on: {
                        click: function() {
                            return e.canClickSan ? e.onIconOrSanClick() : null
                        }
                    }
                }), e._v(" "), s("div", {
                    class: [e.$style.description, e.$style.colored, e.colorClass],
                    attrs: {
                        "data-cy": "analysis-feedback-row-description"
                    },
                    domProps: {
                        textContent: e._s(e.description)
                    }
                })], 1), e._v(" "), s("div", {
                    class: [e.$style.moves]
                }, [e.hasLine ? s("div", {
                    class: e.$style.enginewrap
                }, [s("engine-line", {
                    class: [e.$style.engine],
                    attrs: {
                        "board-options": e.boardOptions,
                        "board-is-flipped": e.boardIsFlipped,
                        "data-cy": "analysis-engine-line-component",
                        fen: e.fen,
                        "is-expandable": !1,
                        line: e.line,
                        "line-end-icon": !1,
                        "selected-ply": e.selectedPly,
                        "send-score-on-line-click": "",
                        "show-board-preview": "",
                        "show-figurine": e.showFigurine,
                        "show-score": !1
                    },
                    on: {
                        "node-click": function(n) {
                            return e.$emit("click-node", n)
                        }
                    }
                }), e._v(" "), s("span", {
                    class: [e.$style.lineicon, "icon-font-chess magnifying-glass"],
                    attrs: {
                        "data-cy": "analysis-feedback-row-magnifying-glass"
                    },
                    on: {
                        click: e.onIconOrSanClick
                    }
                })], 1) : e._e()])]), e._v(" "), e.score ? s("score-text", {
                    class: e.$style.score,
                    attrs: {
                        value: e.score
                    }
                }) : s("div", {
                    class: [e.$style.score, e.$style.hidden]
                })]
            }
            ))], 2)
        }
        ), [], !1, (function analysis_feedback_row_injectStyles(e) {
            this.$style = U.locals || U
        }
        ), null, null).exports
          , G = s(66426)
          , H = (0,
        a.aZ)({
            name: "AnalysisFeedback",
            components: {
                LoaderThreeBounce: G.Z
            },
            props: {
                loading: Boolean
            },
            setup: ()=>({})
        })
          , Y = {
            component: "analysis-feedback-component",
            full: "analysis-feedback-full",
            loading: "analysis-feedback-loading"
        };
        var J = (0,
        p.Z)(H, (function() {
            var e = this
              , n = e.$createElement
              , s = e._self._c || n;
            return s("div", {
                class: e.$style.component,
                attrs: {
                    "data-cy": "analysis-feedback-component"
                }
            }, [e._t("default"), e._v(" "), e.loading ? s("div", {
                class: e.$style.loading,
                attrs: {
                    "data-cy": "analysis-feedback-loading"
                }
            }, [s("loader-three-bounce", {
                attrs: {
                    "is-circle": !0,
                    size: 40
                }
            })], 1) : e._e()], 2)
        }
        ), [], !1, (function analysis_feedback_injectStyles(e) {
            this.$style = Y.locals || Y
        }
        ), null, null).exports
          , X = s(81057)
          , ee = s(923)
          , ne = s(27359)
          , se = s(26908)
          , ae = s(99208)
          , ie = s(26525)
          , oe = s(72308)
          , te = s(43153)
          , le = s(56022)
          , re = s(91047)
          , ce = s(46979)
          , de = s(64300);
        function processQueue(e) {
            if (de.Q.queue.length) {
                const n = de.Q.queue.shift();
                e.claimed = !0,
                getMoveEval(n, e)
            }
        }
        function getMoveEval(e, n) {
            if (!de.Q.analyses.find(e.analysisId))
                return n.claimed = !1,
                void processQueue(n);
            const s = {
                depth: 0,
                done: !1,
                eval: [],
                isBook: e.isBook,
                moveId: e.moveId,
                time: 0
            };
            n.getBestMove(e, (function onDone() {
                var a;
                s.done = !0,
                null == (a = de.Q.analyses.find(e.analysisId)) || a.onEval(s),
                n.claimed = !1,
                processQueue(n)
            }
            ), (function onStream(e) {
                let n;
                e.pv && e.multipv && !e.upperbound && !e.lowerbound && (e.pv.length > 2 || e.depth < 6 || e.mateIn && Math.abs(e.mateIn) <= 2) && (n = e.multipv - 1,
                s.depth = e.depth,
                s.eval[n] = e)
            }
            ))
        }
        function queue(e) {
            const n = function findEngine() {
                return de.Q.engines.find((e=>!e.claimed && (function claimEngine(e) {
                    e.claimed = !0
                }(e),
                e)))
            }();
            n ? getMoveEval(e, n) : de.Q.queue.push(e)
        }
        let ue;
        async function fetchAnalysisEvals(e, n) {
            const s = de.Q.analyses.find(e);
            if (!s)
                return;
            const a = await function fetchBook(e=window.Config.pathToBook) {
                return new Promise(((n,s)=>{
                    ue && n(ue),
                    Z().loadECO(e, ((e,a,i)=>{
                        e && s(e),
                        ue = i,
                        n(i)
                    }
                    ))
                }
                ))
            }();
            s.moves.forEach(((i,o)=>{
                queue({
                    analysisId: e,
                    depth: n,
                    isBook: a[s.hashes[o]] ? 1 : 0,
                    is960: s.variant === d.lA.Variants.Chess960,
                    fen: s.startingFen,
                    moveId: o,
                    moves: s.moves[o],
                    movetime: null,
                    multiPv: 2
                })
            }
            ))
        }
        var ve = Math.ceil
          , ge = Math.max;
        var ye = function baseRange(e, n, s, a) {
            for (var i = -1, o = ge(ve((n - e) / (s || 1)), 0), t = Array(o); o--; )
                t[a ? o : ++i] = e,
                e += s;
            return t
        }
          , pe = s(50439)
          , fe = s(43878)
          , me = 1 / 0;
        var be = function toFinite(e) {
            return e ? (e = (0,
            fe.Z)(e)) === me || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
        };
        var he = function createRange(e) {
            return function(n, s, a) {
                return a && "number" != typeof a && (0,
                pe.Z)(n, s, a) && (s = a = void 0),
                n = be(n),
                void 0 === s ? (s = n,
                n = 0) : s = be(s),
                a = void 0 === a ? n < s ? 1 : -1 : be(a),
                ye(n, s, a, e)
            }
        }();
        var ke = s(87481);
        function initializeEngines(e) {
            !function stopEngines() {
                de.Q.engines.forEach((e=>{
                    e.stopAll(),
                    e.quit()
                }
                )),
                de.Q.engines = []
            }();
            const {paths: n} = ke.h$[e];
            he(0, function getNumberOfEngines() {
                var e, n;
                const s = null != (n = null == (e = window.navigator) ? void 0 : e.hardwareConcurrency) ? n : 1;
                return Math.max(Math.floor(s / 2), 1)
            }()).forEach(((s,a)=>{
                var i, o, t, l, r, c, d, u;
                const v = Z()({
                    enginePath: null != (t = null == n ? void 0 : n.pathToEngineWorker) ? t : null == (o = null == (i = null == n ? void 0 : n.engines) ? void 0 : i.singleThreaded) ? void 0 : o.loader,
                    pathToWasmEngine: null != (c = null == n ? void 0 : n.pathToWasmEngine) ? c : null == (r = null == (l = null == n ? void 0 : n.engines) ? void 0 : l.singleThreaded) ? void 0 : r.engine,
                    pathToNonWasmEngine: null != (u = null == n ? void 0 : n.pathToNonWasmEngine) ? u : null == (d = null == n ? void 0 : n.engines) ? void 0 : d.asm
                });
                v.claimed = !1,
                v.id = a,
                v.type = e,
                de.Q.engines[a] = v
            }
            ))
        }
        var we = s(29983)
          , Se = s(72829)
          , Ce = s(37869);
        var Ae = s(75536)
          , Ee = Object.defineProperty
          , $e = Object.defineProperties
          , Me = Object.getOwnPropertyDescriptors
          , _e = Object.getOwnPropertySymbols
          , Fe = Object.prototype.hasOwnProperty
          , xe = Object.prototype.propertyIsEnumerable
          , analyze_position_defNormalProp = (e,n,s)=>n in e ? Ee(e, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[n] = s
          , analyze_position_spreadValues = (e,n)=>{
            for (var s in n || (n = {}))
                Fe.call(n, s) && analyze_position_defNormalProp(e, s, n[s]);
            if (_e)
                for (var s of _e(n))
                    xe.call(n, s) && analyze_position_defNormalProp(e, s, n[s]);
            return e
        }
          , analyze_position_spreadProps = (e,n)=>$e(e, Me(n));
        async function analyzePosition({depth: e=18, node: n, options: s}) {
            return new Promise(((a,i)=>{
                const o = r.v.settings.engineName;
                (0,
                ce.P)(),
                function shouldInitializeEngines() {
                    return !de.Q.engines.length || de.Q.engines[0].type !== r.v.settings.engineName
                }() && initializeEngines(o);
                const t = (0,
                ee.j)().getVariant()
                  , l = Z().createGame(analyze_position_spreadProps(analyze_position_spreadValues({}, s), {
                    analysis: !0,
                    options: {
                        rejectNullMoves: !0,
                        skipBadLines: !0
                    },
                    variant: t
                }));
                if (!l)
                    return void i(new Error((0,
                    m.dW)("Invalid game")));
                const c = Z().gameFingerprints({
                    analysis: !0,
                    game: l
                });
                if (c.variant && "Chess960" !== c.variant)
                    return void i(new Error((0,
                    m.dW)("Unsupported variant")));
                const d = de.Q.analyses.add({
                    depth: e,
                    hashes: c.hashes,
                    id: (0,
                    le.g)(),
                    moves: c.moves,
                    onEval: function onEval(e) {
                        d.evals.push(e),
                        d.evals.length >= d.moves.length && function fetch() {
                            try {
                                const {WhiteElo: e, BlackElo: n} = (0,
                                ee.j)().getHeaders()
                                  , s = (0,
                                K.M)(d.evals, "moveId");
                                (0,
                                Ce.q)().fetch({
                                    action: "analysis",
                                    evals: s.map((e=>e.eval)),
                                    moves: d.moves[d.moves.length - 1].split(" ").map(((e,n)=>({
                                        moveLan: e,
                                        isBook: s[n + 1].isBook
                                    }))),
                                    startFen: d.startingFen,
                                    variant: d.variant,
                                    options: {
                                        WhiteElo: e,
                                        BlackElo: n,
                                        ScoreWhiteToMove: !0,
                                        SerializeLikeCEAC: !0
                                    }
                                }, onDone, onError)
                            } catch (e) {
                                onError(e)
                            }
                        }()
                    },
                    startingFen: c.startingFen,
                    variant: t
                });
                function onError(n) {
                    (0,
                    re.T)("CEE position analysis error", analyze_position_spreadProps(analyze_position_spreadValues({}, n), {
                        depth: e
                    })),
                    console.error(n),
                    i(new Error((0,
                    m.dW)("There was an error classifying the move.")))
                }
                function onDone(e) {
                    var s;
                    (null == (s = e.positions) ? void 0 : s.length) && ((0,
                    Ae.F)({
                        data: {
                            fromClient: !0
                        },
                        node: n,
                        position: e.positions[e.positions.length - 1]
                    }),
                    Se.u.emit(we.O.Events.CeeClassificationReceived),
                    a())
                }
                fetchAnalysisEvals(d.id, e)
            }
            ))
        }
        var Be = s(23624)
          , Ne = s(32614)
          , Le = s(60326);
        async function analyze_position_analyzePosition(e=4) {
            if (!Ne.S.selectedNode)
                return;
            const n = function getParentPosition() {
                var e;
                if (!(null == (e = Ne.S.selectedNode) ? void 0 : e.previous))
                    return;
                const {line: n, move: s} = Ne.S.selectedNode.previous
                  , a = (0,
                ee.j)().getNodeByIds({
                    line: n,
                    move: s + 1
                });
                if (!(0,
                d.UG)(a))
                    return;
                return (0,
                ie.b)(a)
            }();
            if ((null == n ? void 0 : n.suggestedMove.moveLan) === (0,
            te.S)(Ne.S.selectedNode) && n.classification !== se.x.Classifications.Types.Book) {
                const e = (0,
                Be.u)({
                    position: n,
                    node: Ne.S.selectedNode
                });
                return void (0,
                Ae.F)({
                    node: Ne.S.selectedNode,
                    next: e,
                    position: e
                })
            }
            const s = (0,
            ee.j)().getCurrentFullLine().slice(Ne.S.selectedNode.moveNumber > e ? -e : Ne.S.selectedNode.moveNumber);
            return await analyzePosition({
                depth: Le.Ko.fullAnalysisDepth,
                node: Ne.S.selectedNode,
                options: {
                    fen: s[0].beforeFen,
                    moves: s.map(te.S).join(" ")
                }
            }),
            null
        }
        var Oe = s(20318);
        function getBestLineForNextPosition() {
            var e;
            if (!Ne.S.selectedNode)
                return;
            const n = (0,
            ee.j)()
              , s = n.getNodeIds()
              , a = n.getNodeByIds({
                line: s.line,
                move: s.move + 1
            });
            return null == (e = (0,
            ie.b)(a)) ? void 0 : e.suggestedMove
        }
        var Pe = s(50653)
          , Ie = s(84300);
        var Te = Object.defineProperty
          , je = Object.defineProperties
          , De = Object.getOwnPropertyDescriptors
          , Re = Object.getOwnPropertySymbols
          , Ze = Object.prototype.hasOwnProperty
          , Ke = Object.prototype.propertyIsEnumerable
          , use_feedback_defNormalProp = (e,n,s)=>n in e ? Te(e, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[n] = s
          , use_feedback_spreadValues = (e,n)=>{
            for (var s in n || (n = {}))
                Ze.call(n, s) && use_feedback_defNormalProp(e, s, n[s]);
            if (Re)
                for (var s of Re(n))
                    Ke.call(n, s) && use_feedback_defNormalProp(e, s, n[s]);
            return e
        }
          , use_feedback_spreadProps = (e,n)=>je(e, De(n));
        function useFeedback() {
            const e = (0,
            a.iH)(!1)
              , n = (0,
            a.iH)()
              , s = (0,
            a.iH)(getBestLineForNextPosition())
              , i = (0,
            a.iH)()
              , o = (0,
            a.iH)()
              , t = (0,
            a.Fl)((()=>{
                var e, n;
                return (null == (e = o.value) ? void 0 : e.san) === (null == (n = i.value) ? void 0 : n.san)
            }
            ));
            return (0,
            a.bv)(update),
            function usePositionChange(e) {
                (0,
                a.YP)((()=>Ne.S.fen), (()=>e()))
            }(update),
            {
                bestLineForNextPosition: s,
                bestMove: i,
                loading: e,
                playedMove: o,
                playedMoveIsBest: t,
                selectedPosition: n,
                shouldIgnoreBestMove: (0,
                a.Fl)((()=>{
                    var e;
                    return !Le.Ko.feedbackEnabled || Oe.x.IgnoreBestMoveClassifications.includes(null == (e = n.value) ? void 0 : e.classification)
                }
                ))
            };
            function getBestMove(e) {
                var n;
                const s = Ne.S.selectedNode.beforeFen
                  , {fen: a, san: i} = (0,
                Pe.X)({
                    beforeFen: s,
                    moveLan: e.suggestedMove.moveLan
                })
                  , {pv: o, pvSan: t} = (0,
                Ie.D)({
                    fen: a,
                    line: use_feedback_spreadProps(use_feedback_spreadValues({}, e.suggestedMove), {
                        eval: {
                            pv: e.suggestedMove.eval.pv.slice(1),
                            pvCutoff: null != (n = e.suggestedMove.eval.pvCutoff) ? n : 0
                        }
                    }),
                    nodeLimit: Oe.x.NodeLimit
                });
                if (o && t)
                    return {
                        classificationKey: se.x.Classifications.Types.BestMove,
                        color: e.color,
                        fen: a,
                        line: {
                            pv: o,
                            pvSan: t,
                            san: i
                        },
                        san: i,
                        score: (0,
                        ne.D4)(e.suggestedMove)
                    }
            }
            function getPlayedMove(e) {
                return use_feedback_spreadProps(use_feedback_spreadValues({}, getPlayedMoveNode()), {
                    classificationKey: e.classification,
                    line: function getLine() {
                        if (e.playedMove.eval)
                            return e.playedMove.eval;
                        s.value && (0,
                        Ie.D)({
                            fen: Ne.S.fen,
                            line: s.value,
                            nodeLimit: Oe.x.NodeLimit
                        });
                        return {}
                    }(),
                    score: (0,
                    ne.D4)(e.playedMove)
                })
            }
            function getPlayedMoveNode() {
                return {
                    color: Ne.S.selectedNode.color,
                    fen: Ne.S.fen,
                    san: Ne.S.selectedNode.san
                }
            }
            async function update() {
                if (e.value = !1,
                s.value = void 0,
                i.value = void 0,
                o.value = void 0,
                Ne.S.selectedNode) {
                    if (o.value = getPlayedMoveNode(),
                    n.value = (0,
                    oe.W)(),
                    n.value)
                        return s.value = getBestLineForNextPosition(),
                        i.value = getBestMove(n.value),
                        void (o.value = getPlayedMove(n.value));
                    !async function analyzeAlternateLine() {
                        try {
                            if (e.value = !0,
                            await analyze_position_analyzePosition(),
                            e.value = !1,
                            !Ne.S.selectedNode)
                                return;
                            const s = (0,
                            ie.b)(Ne.S.selectedNode);
                            if (!s)
                                return;
                            n.value = s,
                            i.value = getBestMove(s),
                            o.value = getPlayedMove(s)
                        } catch (s) {
                            e.value = !1,
                            (0,
                            ae.x)(s.message)
                        }
                    }()
                }
            }
        }
        var Qe = s(67438)
          , We = (0,
        a.aZ)({
            name: "AnalysisFeedbackController",
            components: {
                Feedback: J,
                FeedbackRow: V
            },
            setup() {
                const {loading: e, bestMove: n, playedMove: s, playedMoveIsBest: i, shouldIgnoreBestMove: o} = useFeedback();
                return {
                    boardDetails: (0,
                    a.Fl)((()=>({
                        boardOptions: (0,
                        l.T)(),
                        boardIsFlipped: (0,
                        X.x)().isFlipped,
                        selectedPly: Ne.S.selectedPly
                    }))),
                    onClickBestMoveNode: function onClickBestMoveNode({goToStart: e, sanMoves: s}) {
                        if (i.value)
                            return onClickPlayedMoveNode({
                                sanMoves: s
                            });
                        const a = [n.value.san, ...s];
                        (0,
                        ee.j)().moveBackward();
                        const o = Ne.S.fen
                          , t = Ne.S.ids.move;
                        (0,
                        Qe.s)({
                            moves: a,
                            score: n.value.score
                        }),
                        e && selectFirstNodeOfLine({
                            firstMove: a[0],
                            startingFen: o,
                            startingMoveNumber: t
                        })
                    },
                    onClickPlayedMoveNode: onClickPlayedMoveNode,
                    loading: e,
                    bestMove: n,
                    playedMove: s,
                    playedMoveIsBest: i,
                    selectedNode: (0,
                    a.Fl)((()=>Ne.S.selectedNode)),
                    shouldIgnoreBestMove: o
                };
                function selectFirstNodeOfLine({firstMove: e, startingFen: n, startingMoveNumber: s}) {
                    const a = (0,
                    ee.j)()
                      , i = Z().getFenFromMoves(n, [{
                        san: e
                    }])
                      , o = (0,
                    K.M)(a.getRawLines().flat(), "moveNumber").find((e=>e.moveNumber >= s && e.fen === i));
                    o && a.selectNode(o.ids.line, o.ids.move)
                }
                function onClickPlayedMoveNode({goToStart: e, sanMoves: n}) {
                    const a = Ne.S.fen
                      , i = Ne.S.ids.move;
                    (0,
                    Qe.s)({
                        moves: n,
                        score: s.value.score
                    }),
                    e && selectFirstNodeOfLine({
                        firstMove: n[0],
                        startingFen: a,
                        startingMoveNumber: i
                    })
                }
            }
        })
          , qe = (0,
        p.Z)(We, (function() {
            var e = this
              , n = e.$createElement
              , s = e._self._c || n;
            return e.selectedNode ? s("feedback", {
                attrs: {
                    loading: e.loading
                }
            }, [e.shouldIgnoreBestMove || !e.playedMoveIsBest ? s("feedback-row", e._b({
                on: {
                    "click-node": e.onClickPlayedMoveNode
                }
            }, "feedback-row", Object.assign({}, e.playedMove, e.boardDetails), !1)) : e._e(), e._v(" "), e.bestMove && e.bestMove.san && !e.shouldIgnoreBestMove ? s("feedback-row", e._b({
                attrs: {
                    "can-click-san": ""
                },
                on: {
                    "click-node": e.onClickBestMoveNode
                }
            }, "feedback-row", Object.assign({}, e.bestMove, e.boardDetails), !1)) : e._e()], 1) : e._e()
        }
        ), [], !1, null, null, null).exports
          , ze = s(82282)
          , Ue = s(64099)
          , Ve = s(39761)
          , Ge = s(67858)
          , He = s(67489);
        const {Both: Ye, Opponent: Je, Self: Xe} = He.Z.MoveListColors.Categories;
        function updateMoveListColorsAndAnnotations(e) {
            if (Ue.F.isBasicAnalysis)
                return;
            const n = (0,
            ee.j)();
            n.getRawLines()[0].forEach((function assignColor(n) {
                const s = (0,
                ie.b)(n);
                if (!s)
                    return;
                const a = s.classification
                  , i = function getCategory() {
                    if (Ne.S.userColor)
                        return s.color === Ne.S.userColor ? Xe : Je;
                    return Ye
                }()
                  , {color: o, annotation: t} = Q.xt[s.classification];
                !function shouldSetColor() {
                    if (e)
                        return e && a === e;
                    return Ge.X.analysisMode === Ve.Q.AnalysisModes.Full && Le.Ko.colorsEnabled && Le.Ko.moveListColors[i].enabled && Le.Ko.moveListColors[i].classifications[a]
                }() ? n.customColor && (n.customColor = "",
                n.annotation && t && (n.annotation = "")) : (n.customColor = o,
                t && (n.annotation = t))
            }
            )),
            n.getContext().respond(d.QY.APIEvents.CreateGame)
        }
        var en = s(70962)
          , nn = s(72212)
          , sn = s(58819)
          , an = s(37620)
          , on = s(75109)
          , tn = s(81763)
          , ln = s(12885)
          , rn = s(64536)
          , cn = s(78291)
          , dn = s(73972)
          , un = s(49059)
          , vn = s(76088)
          , gn = s(72922)
          , yn = s(68517)
          , pn = s(79321)
          , fn = s(85571);
        function getEngineDepth() {
            var e;
            const n = (0,
            ln.Q)();
            return n ? n.depth : null == (e = fn.v.evaluation.lines[0]) ? void 0 : e.depth
        }
        var mn = s(37142)
          , bn = s(37921)
          , hn = s(96257)
          , kn = s(12585)
          , wn = s(91322)
          , Sn = s(99106)
          , Cn = s(59752)
          , An = s(24050)
          , En = s(12089)
          , $n = s(1464);
        function getEngineName() {
            var e, n;
            return (0,
            ln.Q)() ? null != (n = null == (e = $n.b[Le.Ko.maxAnalysisEngine]) ? void 0 : e.label) ? n : "" : fn.v.engineName
        }
        var Mn = s(53418)
          , _n = (0,
        a.aZ)({
            name: "AnalysisController",
            components: {
                AnalysisView: j,
                AnalysisFeedback: qe
            },
            setup() {
                (0,
                a.bv)(updateColors),
                gn.s.on(Ve.Q.Events.SetAnalysisMode, updateColors),
                nn.y.on(en.A.Events.AnalysisComplete, updateColors),
                Cn.E.on(He.Z.Events.MoveListColorSettingsChanged, updateColors);
                const e = fn.v.evaluation
                  , n = (0,
                a.Fl)((()=>({
                    boardOptions: (0,
                    l.T)(),
                    boardIsFlipped: (0,
                    X.x)().isFlipped,
                    evaluatedLines: e.lines,
                    fen: Ne.S.fen,
                    isEngineRunning: e.isRunning,
                    isEngineEvaluatingNewPosition: e.isNewPosition,
                    linesCount: r.v.settings.linesCount,
                    selectedPly: Ne.S.selectedPly,
                    showBoardPreview: !0,
                    showFigurine: !1,
                    showLines: fn.v.engineEnabled && Le.Ko.selfAnalysisLinesEnabled,
                    sendScoreOnLineClick: !0
                })))
                  , s = (0,
                o.nJ)()
                  , c = (0,
                a.Fl)((()=>({
                    canRunFullAnalysis: Ne.S.nodes.length >= en.A.MinimumMovesToRunAnalysis,
                    canRunMaxAnalysis: (0,
                    mn.R)() && !hasInsufficientMaterial({
                        fen: Ne.S.fen
                    }),
                    canSave: (0,
                    hn.q)(),
                    canViewCompleteAnalysis: (0,
                    bn.i)(),
                    canViewSaveButton: Mn.E.isLoggedIn() && (!(0,
                    yn.i)() || kn.d.canSaveLibraryGames),
                    isLoggedIn: Mn.E.isLoggedIn(),
                    isGuest: s
                })))
                  , d = (0,
                a.Fl)((()=>Ge.X.analysisMode === Ve.Q.AnalysisModes.Full))
                  , u = (0,
                a.Fl)(sn.u);
                return {
                    analysisComplete: u,
                    engineDepth: (0,
                    a.Fl)(getEngineDepth),
                    engineName: (0,
                    a.Fl)(getEngineName),
                    engineEnabled: (0,
                    a.Fl)((()=>fn.v.engineEnabled)),
                    evaluation: n,
                    featureControl: c,
                    isAnalysisRunning: (0,
                    a.Fl)(an.r),
                    isBasicAnalysis: (0,
                    a.Fl)((()=>Ue.F.isBasicAnalysis)),
                    isEvalBarShowing: (0,
                    a.Fl)((()=>Le.Ko.evalBarEnabled)),
                    isMaxAnalysisRunning: (0,
                    a.Fl)(rn.L),
                    isFullAnalysis: d,
                    isSaving: (0,
                    a.Fl)((()=>vn.h.isSaving)),
                    hasDepthChanged: (0,
                    a.Fl)((()=>Number(Ue.F.analysisDepth) !== Number(Le.Ko.fullAnalysisDepth))),
                    hasPgnChanged: (0,
                    a.Fl)(un.K),
                    headers: (0,
                    a.Fl)((()=>Ne.S.headers)),
                    maxAnalysis: (0,
                    a.Fl)(ln.Q),
                    onClickNode: function onClickNode({sanMoves: e, score: n}) {
                        (0,
                        Qe.s)({
                            moves: e,
                            score: n
                        })
                    },
                    onClickRunFullAnalysis: function onClickRunFullAnalysis() {
                        (0,
                        ze.u)({
                            shouldSave: !0,
                            userInitiated: !0
                        }),
                        (0,
                        An.K)(En.Y.Tabs.Review)
                    },
                    onClickSavedAnalysis: function onClickSavedAnalysis(e) {
                        s && (e.preventDefault(),
                        e.stopPropagation(),
                        (0,
                        t.Y)({
                            slide: i._G.GUEST_MODAL_SLIDES.analysis
                        }))
                    },
                    onClickSettings: function onClickSettings() {
                        (0,
                        wn.W)()
                    },
                    onSaveSelfAnalysis: function onSaveSelfAnalysis() {
                        (0,
                        dn.K)()
                    },
                    onToggleEvalBar: function onToggleEvalBar({value: e}) {
                        (0,
                        Sn.V)({
                            evalBarEnabled: e
                        })
                    },
                    onToggleFeedback: function onToggleFeedback({value: e}) {
                        e ? (0,
                        ze.u)({
                            shouldSave: !0,
                            userInitiated: !0
                        }) : (0,
                        pn.G)(Ve.Q.AnalysisModes.Self)
                    },
                    onToggleMaxAnalysis: function onToggleMaxAnalysis() {
                        cn.V.activeId ? (0,
                        tn.l)() : (0,
                        on.I)()
                    },
                    onToggleShowLines: function onToggleShowLines({value: e}) {
                        (0,
                        Sn.V)({
                            selfAnalysisLinesEnabled: e
                        })
                    },
                    savedAnalysisUrl: D._.webAnalysisSaved(),
                    showFeedback: (0,
                    a.Fl)((()=>u.value && d.value && !Ue.F.isBasicAnalysis))
                };
                function updateColors() {
                    u.value && (0,
                    a.Y3)(updateMoveListColorsAndAnnotations)
                }
            }
        })
          , Fn = _n
          , xn = (0,
        p.Z)(Fn, (function() {
            var e = this
              , n = e.$createElement
              , s = e._self._c || n;
            return s("analysis-view", {
                attrs: {
                    "analysis-complete": e.analysisComplete,
                    "engine-depth": e.engineDepth,
                    "engine-name": e.engineName,
                    "engine-enabled": e.engineEnabled,
                    evaluation: e.evaluation,
                    "feature-control": e.featureControl,
                    headers: e.headers,
                    "is-analysis-running": e.isAnalysisRunning,
                    "is-basic-analysis": e.isBasicAnalysis,
                    "is-eval-bar-showing": e.isEvalBarShowing,
                    "is-max-analysis-running": e.isMaxAnalysisRunning,
                    "is-full-analysis": e.isFullAnalysis,
                    "is-saving": e.isSaving,
                    "max-analysis": e.maxAnalysis,
                    "has-depth-changed": e.hasDepthChanged,
                    "has-pgn-changed": e.hasPgnChanged,
                    "saved-analysis-url": e.savedAnalysisUrl
                },
                on: {
                    "click-node": e.onClickNode,
                    "click-run-full-analysis": e.onClickRunFullAnalysis,
                    "click-saved-analysis": e.onClickSavedAnalysis,
                    "click-settings": e.onClickSettings,
                    "save-self-analysis": e.onSaveSelfAnalysis,
                    "toggle-eval-bar": e.onToggleEvalBar,
                    "toggle-feedback": e.onToggleFeedback,
                    "toggle-max-analysis": e.onToggleMaxAnalysis,
                    "toggle-show-lines": e.onToggleShowLines
                },
                scopedSlots: e._u([e.showFeedback ? {
                    key: "feedback",
                    fn: function() {
                        return [s("analysis-feedback")]
                    },
                    proxy: !0
                } : null], null, !0)
            })
        }
        ), [], !1, null, null, null).exports
    },
    50439: function(e, n, s) {
        var a = s(79651)
          , i = s(50585)
          , o = s(56009)
          , t = s(77226);
        n.Z = function isIterateeCall(e, n, s) {
            if (!(0,
            t.Z)(s))
                return !1;
            var l = typeof n;
            return !!("number" == l ? (0,
            i.Z)(s) && (0,
            o.Z)(n, s.length) : "string" == l && n in s) && (0,
            a.Z)(s[n], e)
        }
    },
    79651: function(e, n) {
        n.Z = function eq(e, n) {
            return e === n || e != e && n != n
        }
    }
}]);
