"use strict";
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[813], {
    75813: function(e, a, t) {
        t.r(a),
        t.d(a, {
            default: function() {
                return G
            }
        });
        var l = t(92866)
          , s = t(73253)
          , i = t(22643)
          , n = t(86833)
          , r = (0,
        l.aZ)({
            name: "EvaluationLoader",
            props: {
                loadProgress: {
                    type: Number,
                    required: !0
                }
            },
            setup: e=>({
                loadingStyles: (0,
                l.Fl)((()=>({
                    transform: `translate3d(0, ${100 * (1 - e.loadProgress)}%, 0)`
                })))
            })
        })
          , o = {
            bar: "evaluation-loader-bar",
            clickable: "evaluation-loader-clickable",
            flipped: "evaluation-loader-flipped",
            scoreAbbreviated: "evaluation-loader-scoreAbbreviated",
            loader: "evaluation-loader-loader",
            score: "evaluation-loader-score",
            fill: "evaluation-loader-fill",
            color: "evaluation-loader-color",
            white: "evaluation-loader-white",
            black: "evaluation-loader-black",
            draw: "evaluation-loader-draw",
            "loading-message": "evaluation-loader-loading-message",
            dark: "evaluation-loader-dark",
            light: "evaluation-loader-light",
            "score-long": "evaluation-loader-score-long"
        }
          , d = t(51900);
        var u, c = (0,
        d.Z)(r, (function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                class: [e.$style.bar, e.$style.component]
            }, [t("div", {
                class: e.$style.fill
            }, [t("div", {
                class: e.$style.color,
                style: e.loadingStyles
            })])])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = o.locals || o
        }
        ), null, null).exports, v = t(67104), h = t(27359), b = t(42203), p = t(10942), m = t(75213), w = t(53291), E = {
            bar: "evaluation-bar-bar",
            clickable: "evaluation-bar-clickable",
            flipped: "evaluation-bar-flipped",
            scoreAbbreviated: "evaluation-bar-scoreAbbreviated",
            loader: "evaluation-bar-loader",
            score: "evaluation-bar-score",
            fill: "evaluation-bar-fill",
            color: "evaluation-bar-color",
            white: "evaluation-bar-white",
            black: "evaluation-bar-black",
            draw: "evaluation-bar-draw",
            "loading-message": "evaluation-bar-loading-message",
            dark: "evaluation-bar-dark",
            light: "evaluation-bar-light",
            "score-long": "evaluation-bar-score-long"
        }, $ = t(6301), y = t(18160), g = t(16989);
        class EvaluationBar extends m.H {
            constructor() {
                super(),
                this.engineName = "",
                this.barPercentage = 50,
                this.onEvaluationUpdateHandler = this.onEvaluationUpdate.bind(this),
                this.onUpdateOptionsHandler = this.onUpdateOptions.bind(this)
            }
            static get observedAttributes() {
                return [w._.ObservedAttributes.BoardId, w._.ObservedAttributes.EngineName, w._.ObservedAttributes.UpdateManually, w._.ObservedAttributes.GameId]
            }
            attributeChangedCallback(e) {
                super.attributeChangedCallback(),
                e === w._.ObservedAttributes.GameId && this.onGameIdChange()
            }
            boardReady() {
                this.removeListeners(),
                this.addListeners(),
                this.onUpdateOptions(),
                this.hasAttribute(w._.ObservedAttributes.UpdateManually) || this.onEvaluationUpdate()
            }
            componentDestroy() {
                this.removeListeners()
            }
            addListeners() {
                this.hasAttribute(w._.ObservedAttributes.UpdateManually) ? b.H.on("evaluation.override", this.onEvaluationUpdateHandler) : b.H.on("evaluation.update", this.onEvaluationUpdateHandler),
                this.addBoardEventListener(v.QY.OptionsEvents.Update, this.onUpdateOptionsHandler)
            }
            removeListeners() {
                b.H.off({
                    type: "evaluation.update",
                    handler: this.onEvaluationUpdateHandler
                }),
                this.removeBoardEventListener(v.QY.OptionsEvents.Update, this.onUpdateOptionsHandler)
            }
            componentReady() {
                this.readEngineName(),
                this.style.flex = "1 1 auto",
                this.innerHTML = `\n      <div class="${E.bar} ${E["thin-bar"]} ${(0,
                p.F)("wdl_eval_bar_option") ? E.clickable : ""}">\n        <span class="${E.scoreAbbreviated}"></span>\n        <span class="${E.score}"></span>\n        <div class="${E.fill}">\n          <div class="${E.color} ${E.black}"></div>\n          <div class="${E.color} ${E.draw}"></div>\n          <div class="${E.color} ${E.white}" style="transform: translate3d(0, 50%, 0)"></div>\n        </div>\n      </div>\n    `,
                this.barElement = this.querySelector(`.${E.color}.${E.white}`),
                this.blackBarElement = this.querySelector(`.${E.color}.${E.black}`),
                this.scoreElement = this.querySelector(`.${E.scoreAbbreviated}`),
                this.scoreHoverElement = this.querySelector(`.${E.score}`),
                this.updateBar()
            }
            attributesChanged() {
                this.removeListeners(),
                this.addListeners(),
                this.readEngineName()
            }
            onUpdateOptions() {
                var e, a;
                const t = this.querySelector(`.${E.bar}`);
                (null == (a = null == (e = this.board) ? void 0 : e.game) ? void 0 : a.getOptions().flipped) ? null == t || t.classList.add(E.flipped) : null == t || t.classList.remove(E.flipped)
            }
            onGameIdChange() {
                this.updateScore({
                    score: 0
                }),
                this.barPercentage = 0,
                this.updateBar()
            }
            onEvaluationUpdate(e) {
                var a;
                let t = null != e ? e : (0,
                i.y0)().lines[0];
                if (this.hasAttribute("is-default-fen-automatic") && (0,
                $.H)() === (null == (a = this.board) ? void 0 : a.game.getFEN()) && (t = {
                    score: 0
                }),
                !t)
                    return;
                (0,
                p.F)("tb_eval_bar_option") ? (t.tablebaseOutcome = null,
                (0,
                i.y0)().tablebaseOutcome && (this.blackBarElement && this.barElement && (this.blackBarElement.style.transitionDuration = "0.5s",
                this.barElement.style.transitionDuration = "0.5s"),
                t.tablebaseOutcome = (0,
                i.y0)().tablebaseOutcome)) : this.barElement.style.transitionDuration = "";
                const l = (0,
                h.tu)(t);
                if ((0,
                p.F)("tb_eval_bar_option") && t.tablebaseOutcome === v.lA.Results.Draw)
                    return this.updateBar(),
                    this.showTablebaseDraw(),
                    this.updateScore(t),
                    void (this.barPercentage = 0);
                l !== this.barPercentage && (this.barPercentage = l,
                this.updateBar()),
                this.isInTablebaseDraw && this.blackBarElement && (this.isInTablebaseDraw = !1,
                this.blackBarElement.style.transform = "translate3d(0, 0%, 0)"),
                this.updateScore(t)
            }
            updateBar() {
                this.barElement && (this.barElement.style.transform = `translate3d(0, ${100 - this.barPercentage}%, 0)`)
            }
            showTablebaseDraw() {
                this.barElement && this.blackBarElement && (this.isInTablebaseDraw = !0,
                this.barElement.style.transform = "translate3d(0, 100%, 0)",
                this.blackBarElement.style.transform = "translate3d(0, -100%, 0)")
            }
            updateScore(e) {
                if (!this.scoreHoverElement || !e)
                    return;
                let a = e.stalemate || e.score >= 0 ? E.dark : E.light
                  , t = "";
                (0,
                p.F)("tb_eval_bar_option") && "1/2-1/2" === (null == e ? void 0 : e.tablebaseOutcome) && (a = E.draw);
                const l = [(0,
                h.D4)(e)];
                this.getAttribute("is-display-engine-details") && (l.push(this.engineName),
                e.depth && l.push(y.Z.trans("Depth=%depth%", {
                    "%depth%": e.depth
                })),
                t = E["score-long"]),
                this.scoreHoverElement.className = `${E.score} ${a} ${t}`,
                this.scoreHoverElement.innerHTML = l.join("<br>"),
                this.scoreElement.className = `${E.scoreAbbreviated} ${a}`,
                this.scoreElement.textContent = (0,
                h.zl)(e)
            }
            readEngineName() {
                var e;
                this.engineName = this.getAttribute("engine-name") || (null == (e = (0,
                g.YE)((0,
                s.Gw)().engineName)) ? void 0 : e.name) || ""
            }
        }
        (e=>{
            let a;
            var t;
            (t = a = e.PredictionKeys || (e.PredictionKeys = {})).Win = "win",
            t.Draw = "draw",
            t.Loss = "loss"
        }
        )(u || (u = {}));
        var f = t(60803)
          , B = "wdl-evaluation-bar-bar"
          , U = "wdl-evaluation-bar-clickable"
          , k = "wdl-evaluation-bar-flipped"
          , O = "wdl-evaluation-bar-score"
          , H = "wdl-evaluation-bar-labels"
          , L = "wdl-evaluation-bar-fill"
          , S = "wdl-evaluation-bar-color"
          , _ = "wdl-evaluation-bar-score-wrap"
          , A = "wdl-evaluation-bar-white"
          , D = "wdl-evaluation-bar-black"
          , C = "wdl-evaluation-bar-draw"
          , q = "wdl-evaluation-bar-row"
          , P = "wdl-evaluation-bar-cell"
          , N = "wdl-evaluation-bar-right"
          , M = "wdl-evaluation-bar-eval"
          , F = "wdl-evaluation-bar-label"
          , I = "wdl-evaluation-bar-whiteLabel"
          , T = "wdl-evaluation-bar-blackLabel"
          , x = "wdl-evaluation-bar-drawLabel"
          , Z = t(57367);
        class WDLBar extends m.H {
            constructor() {
                super(),
                this.plugin = null,
                this.onEvaluationUpdateHandler = this.onEvaluationUpdate.bind(this),
                this.onUpdateOptionsHandler = this.onUpdateOptions.bind(this)
            }
            boardReady() {
                var e;
                this.removeListeners(),
                this.addListeners(),
                this.onUpdateOptions(),
                this.onEvaluationUpdate(),
                this.board && !(null == (e = this.board) ? void 0 : e.game.plugins.has(v.th.ECO)) && (this.plugin = (0,
                v.Kh)({
                    ecoPath: (0,
                    f.K)(),
                    http: Z.Z
                }),
                this.board.game.plugins.add(this.plugin))
            }
            componentDestroy() {
                var e, a, t, l, s, i;
                this.removeListeners(),
                this.plugin && !(null == (a = null == (e = this.board) ? void 0 : e.game) ? void 0 : a.listeners.some((e=>"UpdateECO" === e.type))) && (null == (i = null == (l = null == (t = this.board) ? void 0 : t.game) ? void 0 : (s = l.plugins).remove) || i.call(s, this.plugin.name),
                this.plugin = null)
            }
            addListeners() {
                b.H.on("evaluation.update-wdl", this.onEvaluationUpdateHandler),
                b.H.on("evaluation.update", this.onEvaluationUpdateHandler),
                b.H.on("evaluation.override", this.onEvaluationUpdateHandler),
                this.addBoardEventListener(v.QY.OptionsEvents.Update, this.onUpdateOptionsHandler)
            }
            removeListeners() {
                b.H.off({
                    type: "evaluation.update-wdl",
                    handler: this.onEvaluationUpdateHandler
                }),
                this.removeBoardEventListener(v.QY.OptionsEvents.Update, this.onUpdateOptionsHandler)
            }
            componentReady() {
                this.style.flex = "1 1 auto",
                this.innerHTML = `\n      <div class="${B} ${U}" data-wdl-bar>\n        <div class="${_}">\n          <div class="${O}" data-score>\n            <div class="${q}">\n              <div class="${P}">${y.Z.trans("White")}:</div>\n              <div class="${P} ${N}" data-win-score></div>\n            </div>\n\n            <div class="${q}">\n              <div class="${P}">${y.Z.trans("Draw")}:</div>\n              <div class="${P} ${N}" data-draw-score></div>\n            </div>\n\n            <div class="${q}">\n              <div class="${P}">${y.Z.trans("Black")}:</div>\n              <div class="${P} ${N}" data-loss-score></div>\n            </div>\n\n            <div class="${q} ${M}">\n              <div class="${P}">${y.Z.trans("Eval")}:</div>\n              <div class="${P} ${N}" data-eval-score></div>\n            </div>\n          </div>\n        </div>\n\n        <div class="${L}">\n          <div class="${S} ${D}" data-loss-bar></div>\n          <div class="${S} ${A}" data-win-bar></div>\n        </div>\n\n        <div class="${H}">\n          <div class="${F} ${T}" data-loss-label></div>\n          <div class="${F} ${x}" data-draw-label></div>\n          <div class="${F} ${I}" data-win-label></div>\n        </div>\n      </div>\n    `,
                this.component = this.querySelector("[data-wdl-bar]"),
                this.winBarElement = this.querySelector("[data-win-bar]"),
                this.lossBarElement = this.querySelector("[data-loss-bar]"),
                this.scoreElement = this.querySelector("[data-score]"),
                this.scoreElements = {
                    win: this.querySelector("[data-win-score]"),
                    draw: this.querySelector("[data-draw-score]"),
                    loss: this.querySelector("[data-loss-score]")
                },
                this.labelElements = {
                    win: this.querySelector("[data-win-label]"),
                    draw: this.querySelector("[data-draw-label]"),
                    loss: this.querySelector("[data-loss-label]")
                },
                this.evalScoreElement = this.querySelector("[data-eval-score]"),
                this.updateScore({
                    score: 0,
                    stalemate: !1
                })
            }
            onUpdateOptions() {
                var e, a;
                const t = this.querySelector(`.${B}`);
                (null == (a = null == (e = this.board) ? void 0 : e.game) ? void 0 : a.getOptions().flipped) ? null == t || t.classList.add(k) : null == t || t.classList.remove(k)
            }
            onEvaluationUpdate() {
                var e;
                const {lines: a} = (0,
                i.y0)();
                let t = a[0];
                (!t || this.hasAttribute("is-default-fen-automatic") && (0,
                $.H)() === (null == (e = this.board) ? void 0 : e.game.getFEN())) && (t = {
                    score: 0
                }),
                this.updateScore(t),
                this.updateBar()
            }
            updateBar() {
                const {wdlBar: e} = (0,
                i.y0)();
                e && (this.winBarElement.style.transform = `translate3d(0, ${100 * (1 - e.win)}%, 0)`,
                this.lossBarElement.style.transform = `translate3d(0, ${100 * (e.loss - 1)}%, 0)`)
            }
            updateScore(e) {
                if (!this.scoreElement || !e)
                    return;
                const {wdlBar: a} = (0,
                i.y0)();
                let t = C;
                if (!a)
                    return;
                a.win >= .5 ? t = A : a.loss >= .5 && (t = D),
                this.scoreElement.className = `${O} ${t}`;
                const l = {
                    win: Math.round(100 * a.win),
                    loss: Math.round(100 * a.loss),
                    draw: Math.round(100 * a.draw)
                };
                Object.values(u.PredictionKeys).forEach((e=>{
                    const a = `${l[e]}%`;
                    this.scoreElements[e].innerText = a,
                    this.labelElements[e].innerText = l[e] > 8 && l[e] <= 100 ? `${l[e]} \n%` : "",
                    this.component.style.setProperty(`--${e}-chance`, a)
                }
                )),
                this.evalScoreElement.innerText = (0,
                h.D4)(e)
            }
        }
        function defineCustomElement(e, a) {
            customElements.get(e) || customElements.define(e, a)
        }
        var W = t(91353)
          , R = (0,
        l.aZ)({
            el: "#evaluation",
            name: "EvaluationBarController",
            components: {
                EvaluationLoader: c
            },
            computed: {
                boardId: ()=>n.a.getActiveChessboardElementId(),
                isDefaultFenAutomatic() {
                    var e, a, t;
                    return null != (t = null == (a = (e = n.a).isDefaultFenAutomatic) ? void 0 : a.call(e)) && t
                },
                shouldShowWDLBar() {
                    var e, a;
                    return Boolean((0,
                    W.FR)("wdl_eval_bar_option") && (null == (a = (e = n.a).isWdlBarEnabled) ? void 0 : a.call(e)) && (0,
                    i.y0)().wdlBar)
                },
                loadProgress() {
                    var e, a, t;
                    return null != (t = null == (a = (e = n.a).getEvaluationProgress) ? void 0 : a.call(e)) ? t : 1
                },
                isVisible() {
                    var e, a, t;
                    return null != (t = null == (a = (e = n.a).isEvaluationBarVisible) ? void 0 : a.call(e)) && t
                },
                updateManually() {
                    var e, a;
                    return null == (a = (e = n.a).updateManually) ? void 0 : a.call(e)
                }
            },
            created() {
                defineCustomElement("evaluation-bar", EvaluationBar),
                defineCustomElement("wdl-bar", WDLBar)
            },
            methods: {
                onClickBar(e) {
                    window.chesscom.features.includes("wdl_eval_bar_option") && (0,
                    s.VP)({
                        hasChosenWdlBar: e
                    })
                }
            }
        })
          , G = (0,
        d.Z)(R, (function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return e.isVisible ? e.loadProgress < 1 ? t("evaluation-loader", {
                attrs: {
                    "load-progress": e.loadProgress,
                    "data-cy": "evaluation-bar-loader"
                }
            }) : e.shouldShowWDLBar ? t("wdl-bar", {
                attrs: {
                    "board-id": e.boardId,
                    "is-default-fen-automatic": e.isDefaultFenAutomatic,
                    "update-manually": e.updateManually,
                    "data-cy": "wdl-bar"
                },
                on: {
                    click: function(a) {
                        return e.onClickBar(!1)
                    }
                }
            }) : t("evaluation-bar", {
                attrs: {
                    "board-id": e.boardId,
                    "is-default-fen-automatic": e.isDefaultFenAutomatic,
                    "update-manually": e.updateManually,
                    "data-cy": "evaluation-bar"
                },
                on: {
                    click: function(a) {
                        return e.onClickBar(!0)
                    }
                }
            }) : t("div")
        }
        ), [], !1, null, null, null).exports
    }
}]);
