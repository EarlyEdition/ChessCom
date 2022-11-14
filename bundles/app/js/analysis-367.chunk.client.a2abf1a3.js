window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
    web_user_settings_themes: {
        tokens: [["text", "/settings/themes"]],
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
    web_user_settings_board: {
        tokens: [["text", "/settings/board"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    }
}),
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[367], {
    65063: function(e, t, i) {
        i.d(t, {
            o2: function() {
                return s.o
            }
        });
        i(19818),
        i(69142);
        var s = i(2047);
        i(93798),
        i(43635)
    },
    55587: function(e, t, i) {
        function getFigurineIndex(e) {
            return e.san.search(/[BKNRQ]/)
        }
        i.d(t, {
            j: function() {
                return getFigurineIndex
            }
        })
    },
    69142: function(e, t, i) {
        i.d(t, {
            t: function() {
                return getIconName
            }
        });
        var s = i(19818)
          , n = i(55587);
        function getIconName(e) {
            const t = e.color === s.lB.WHITE ? s._l.WHITE : s._l.BLACK
              , i = e.san[(0,
            n.j)(e)];
            return `${s.gQ[i]}-${t}`
        }
    },
    2047: function(e, t, i) {
        i.d(t, {
            o: function() {
                return translateMoveText
            }
        });
        var s = i(19818);
        function getTranslation(e) {
            return (0,
            s.FI)()[e]
        }
        function translateMoveText(e) {
            return e.includes("O-O") ? e : e.replace(/[BKNRQ]/g, getTranslation)
        }
    },
    56367: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return p
            }
        });
        var s = i(67104)
          , n = i(27359)
          , o = i(88520)
          , a = i(45908)
          , r = i(42964)
          , l = i(35559)
          , c = i(65063)
          , h = i(83851);
        const d = {
            fen: null,
            highlightSquares: null,
            position: null
        };
        var u = {
            name: "EngineLine",
            components: {
                IconFont: l.Z,
                GamePreview: h.Z,
                MoveSan: a.Z,
                ScoreText: r.Z
            },
            props: {
                boardOptions: {
                    type: Object,
                    default: ()=>({})
                },
                boardIsFlipped: {
                    type: Boolean
                },
                fen: {
                    type: String
                },
                isEngineEvaluatingNewPosition: {
                    type: Boolean,
                    default: !1
                },
                isEngineRunning: {
                    type: Boolean,
                    default: !1
                },
                line: {
                    type: Object,
                    default: ()=>({})
                },
                lineEndIcon: {
                    type: [String, Boolean],
                    default: e=>!1 !== e && "caret-down"
                },
                nodeLimit: {
                    type: Number
                },
                nodesClickable: {
                    type: Boolean,
                    default: !0
                },
                highlightedNodeIndex: {
                    type: Number
                },
                reverseFigurineColor: {
                    type: Boolean
                },
                selectedPly: {
                    type: Number,
                    required: !0
                },
                showBoardPreview: {
                    type: Boolean,
                    default: !1
                },
                showScore: {
                    type: Boolean,
                    default: !0
                },
                sendScoreOnLineClick: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["icon-click", "node-click"],
            data: ()=>({
                isOpen: !1,
                preview: d,
                previewSize: 20,
                showEngineLine: !0
            }),
            computed: {
                lineExists() {
                    const e = this.line.pvSan || [];
                    return Boolean(e.length)
                },
                previewStyles() {
                    const e = this.preview.position || {}
                      , t = 8 * this.previewSize / 2;
                    return {
                        left: `${e.left - (t - e.width / 2) || 0}px`,
                        top: `${e.top || 0}px`
                    }
                },
                pvSanNodes() {
                    return Number.isInteger(this.nodeLimit) ? this.line.pvSan.slice(0, this.nodeLimit) : this.line.pvSan
                },
                scoreText() {
                    return (0,
                    n.D4)(this.line)
                },
                scoreAvailable() {
                    return !isNaN(this.line.score)
                },
                showGamePreview() {
                    return this.preview.fen && this.line.pv.includes(this.preview.highlightSquares)
                },
                showThinking() {
                    return this.isEngineRunning && (!this.lineExists || this.isEngineEvaluatingNewPosition)
                }
            },
            watch: {
                lineExists: "determineShowEngineLine",
                isEngineRunning: "determineShowEngineLine",
                isEngineEvaluatingNewPosition: "determineShowEngineLine"
            },
            methods: {
                determineShowEngineLine() {
                    return setTimeout((()=>{
                        this.showEngineLine = this.lineExists || this.isEngineRunning && this.isEngineEvaluatingNewPosition
                    }
                    ), 500)
                },
                getMoveText(e, t) {
                    return `${this.getPreMoveText(t)}${(0,
                    c.o2)(e)} `
                },
                getNodeColor(e) {
                    return (this.selectedPly + e) % 2 == 0 ? s.lA.ColorsAsNumbers.White : s.lA.ColorsAsNumbers.Black
                },
                getPreMoveText(e) {
                    const t = this.getNodeColor(e) === s.lA.ColorsAsNumbers.White;
                    if (e > 0 && !t)
                        return "";
                    let i = `${Math.ceil((this.selectedPly + e + 1) / 2)}.`;
                    return 0 !== e || t || (i += ".."),
                    i
                },
                handleNodeClick(e) {
                    if (this.nodesClickable) {
                        const t = this.line.pvSan.slice(0, e + 1);
                        this.hidePreview(),
                        this.sendScoreOnLineClick ? this.$emit("node-click", {
                            sanMoves: t,
                            score: this.scoreAvailable ? this.scoreText : null
                        }) : this.$emit("node-click", t)
                    }
                },
                handleNodeMouseover(e, t) {
                    this.showBoardPreview && this.fen && this.getPreview(e, t)
                },
                getPreview(e, t) {
                    const {pv: i} = this.line
                      , s = i[t]
                      , n = o.Z.getFenFromMoves(this.fen, i.slice(0, t + 1));
                    if (n) {
                        const t = e.target.getBoundingClientRect()
                          , i = {
                            left: t.left,
                            height: t.height,
                            top: t.top,
                            width: t.width,
                            clientWidth: e.target.clientWidth
                        };
                        this.preview = {
                            fen: n,
                            highlightSquares: s,
                            position: i
                        }
                    }
                },
                hidePreview() {
                    this.preview = d
                },
                handleIconClick() {
                    this.$listeners["icon-click"] ? this.$emit("icon-click") : this.isOpen = !this.isOpen
                }
            }
        }
          , g = {
            component: "engine-line-component",
            withicon: "engine-line-withicon",
            open: "engine-line-open",
            icon: "engine-line-icon",
            inverted: "engine-line-inverted",
            node: "engine-line-node",
            clickable: "engine-line-clickable",
            thinking: "engine-line-thinking",
            preview: "engine-line-preview"
        };
        var p = (0,
        i(51900).Z)(u, (function() {
            var e, t, i = this, s = i.$createElement, n = i._self._c || s;
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: i.showEngineLine,
                    expression: "showEngineLine"
                }],
                class: [i.$style.component, (e = {},
                e[i.$style.open] = i.isOpen,
                e[i.$style.withicon] = Boolean(i.lineEndIcon),
                e)]
            }, [n("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: i.showThinking,
                    expression: "showThinking"
                }],
                class: i.$style.thinking
            }), i._v(" "), i.lineExists && !i.showThinking ? [n("score-text", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: i.showScore,
                    expression: "showScore"
                }],
                attrs: {
                    value: i.scoreText
                }
            }), i._v(" "), i._l(i.pvSanNodes, (function(e, t) {
                var s;
                return n("move-san", i._b({
                    key: t,
                    class: [i.$style.node, (s = {},
                    s[i.$style.clickable] = i.nodesClickable,
                    s)],
                    attrs: {
                        "data-cy": "engine-line-move-san-" + t,
                        color: i.getNodeColor(t),
                        "figurine-size": 2,
                        highlighted: t === i.highlightedNodeIndex,
                        "premove-text": i.getPreMoveText(t),
                        "reverse-figurine-color": i.reverseFigurineColor,
                        san: e
                    },
                    on: {
                        click: function(e) {
                            return i.handleNodeClick(t)
                        },
                        mouseover: function(e) {
                            return i.handleNodeMouseover(e, t)
                        },
                        mouseout: i.hidePreview
                    }
                }, "move-san", i.$attrs, !1))
            }
            )), i._v(" "), i.lineEndIcon ? n("icon-font", {
                class: [i.$style.icon, (t = {},
                t[i.$style.inverted] = i.isOpen,
                t)],
                attrs: {
                    family: "chess",
                    name: i.lineEndIcon,
                    theme: "primary"
                },
                on: {
                    click: i.handleIconClick
                }
            }) : i._e()] : i._e(), i._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: i.showGamePreview,
                    expression: "showGamePreview"
                }],
                class: i.$style.preview,
                style: i.previewStyles
            }, [n("game-preview", i._b({
                attrs: {
                    "color-scheme": i.boardOptions.boardStyle,
                    fen: i.preview.fen,
                    "flip-board": i.boardIsFlipped,
                    "is-board-popover": !0,
                    "highlight-squares": i.preview.highlightSquares,
                    "piece-style": i.boardOptions.pieceStyle,
                    size: i.previewSize
                }
            }, "game-preview", i.$attrs, !1))], 1)], 2)
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = g.locals || g
        }
        ), null, null).exports
    },
    45908: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return c
            }
        });
        var s = i(67104)
          , n = i(55587)
          , o = i(69142)
          , a = i(2047)
          , r = {
            name: "MoveSan",
            props: {
                color: {
                    type: [String, Number],
                    default: s.lA.ColorsAsNumbers.White
                },
                figurineSize: {
                    type: Number
                },
                highlighted: {
                    type: Boolean
                },
                premoveText: {
                    type: String,
                    default: ""
                },
                postmoveText: {
                    type: String,
                    default: ""
                },
                reverseFigurineColor: {
                    type: Boolean
                },
                san: {
                    type: String,
                    required: !0
                },
                showFigurine: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                colorAsNumber() {
                    let e = this.color;
                    return "number" != typeof this.color && (e = this.color === s.lA.ColorsAsWords.White ? s.lA.ColorsAsNumbers.White : s.lA.ColorsAsNumbers.Black),
                    e
                },
                figurine() {
                    if (this.showFigurine && this.san) {
                        const e = this.reverseFigurineColor ? (0,
                        s.SH)(this.colorAsNumber) : this.colorAsNumber;
                        return {
                            icon: (0,
                            o.t)({
                                color: e,
                                san: this.san
                            }),
                            index: (0,
                            n.j)({
                                san: this.san
                            })
                        }
                    }
                    return null
                },
                isTrailing() {
                    var e;
                    return (null == (e = this.figurine) ? void 0 : e.index) > 0
                },
                figurineSan() {
                    return !this.figurine || this.figurine.index < 0 ? null : {
                        beforeFigurine: this.translatedSan.slice(0, this.figurine.index),
                        afterFigurine: this.translatedSan.slice(this.figurine.index)
                    }
                },
                translatedSan() {
                    var e;
                    const t = this.showFigurine ? null == (e = this.san) ? void 0 : e.replace(/[BKNRQ]/g, "") : this.san;
                    return t ? (0,
                    a.o)(t) : t
                }
            }
        }
          , l = {
            component: "move-san-component",
            highlighted: "move-san-highlighted",
            highlight: "move-san-highlight",
            premove: "move-san-premove",
            postmove: "move-san-postmove",
            figurine: "move-san-figurine",
            trailing: "move-san-trailing",
            san: "move-san-san",
            afterfigurine: "move-san-afterfigurine"
        };
        var c = (0,
        i(51900).Z)(r, (function() {
            var e, t, i = this, s = i.$createElement, n = i._self._c || s;
            return n("span", i._g({
                class: [i.$style.component, (e = {},
                e[i.$style.highlighted] = i.highlighted,
                e)]
            }, i.$listeners), [i.premoveText ? n("span", {
                class: i.$style.premove,
                domProps: {
                    textContent: i._s(i.premoveText)
                }
            }) : i._e(), i._v(" "), n("span", {
                class: i.$style.highlight
            }, [i.figurineSan ? [n("span", {
                class: i.$style.san,
                attrs: {
                    "data-cy": "move-san-san"
                },
                domProps: {
                    textContent: i._s(i.figurineSan.beforeFigurine)
                }
            }), i._v(" "), n("span", {
                ref: "figurine",
                class: [i.$style.figurine, "icon-font-chess", i.figurine.icon, (t = {},
                t[i.$style.trailing] = i.isTrailing,
                t)]
            }), n("span", {
                class: i.$style.afterfigurine,
                domProps: {
                    textContent: i._s(i.figurineSan.afterFigurine)
                }
            })] : n("span", {
                class: i.$style.san,
                attrs: {
                    "data-cy": "move-san-text"
                },
                domProps: {
                    textContent: i._s(i.translatedSan)
                }
            })], 2), i._v(" "), i.postmoveText ? n("span", {
                class: i.$style.postmove,
                domProps: {
                    textContent: i._s(i.postmoveText)
                }
            }) : i._e()])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = l.locals || l
        }
        ), null, null).exports
    },
    42964: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return o
            }
        });
        var s = {
            name: "ScoreText",
            props: {
                value: {
                    type: String,
                    required: !0
                }
            },
            data: ()=>({
                helpUrl: "//support.chess.com/article/656-what-do-the-computer-evaluation-numbers-mean-like-225"
            }),
            computed: {
                isNegative() {
                    return "-" === this.value.charAt(0) || "0-1" === this.value
                }
            }
        }
          , n = {
            score: "score-text-score",
            negative: "score-text-negative"
        };
        var o = (0,
        i(51900).Z)(s, (function() {
            var e, t = this, i = t.$createElement;
            return (t._self._c || i)("a", {
                class: [t.$style.score, (e = {},
                e[t.$style.negative] = t.isNegative,
                e)],
                attrs: {
                    target: "_blank",
                    href: t.helpUrl
                },
                domProps: {
                    textContent: t._s(t.value)
                }
            })
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = n.locals || n
        }
        ), null, null).exports
    },
    83851: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return u
            }
        });
        const s = {
            default: ["#B58863", "#F0D9B5", null, ".png", "#ffff33"],
            "8_bit": ["#6a9b41", "#f3f3f4", "8_bit", ".png", "#ffff33"],
            bases: ["#c26b38", "#efcca1", "bases", ".jpg", "#f5cc2a"],
            blue: ["#4D6D92", "#ECECD7", "blue", ".png", "#00a5ff"],
            brown: ["#B58863", "#F0D9B5", "brown", ".png", "#ffff33"],
            bubblegum: ["#f9cdd3", "#fff3f3", "bubblegum", ".png", "#de5d6f"],
            burled_wood: ["#895132", "#d9b088", "burled_wood", ".jpg", "#ee9016"],
            dark_wood: ["#8d675e", "#e7cdb2", "dark_wood", ".jpg", "#cc9122"],
            dash: ["#6b3a27", "#bd9257", "dash", ".jpg", "#eca722"],
            glass: ["#282f3f", "#667188", "glass", ".png", "#5b91b3"],
            graffiti: ["#b96f18", "#aeaeae", "graffiti", ".jpg", "#f39011"],
            green: ["#779952", "#edeed1", "green", ".png", "#ffff33"],
            icy_sea: ["#7a9db2", "#c5d5dc", "icy_sea", ".jpg", "#5ed7f1"],
            light: ["#aaaaaa", "#dcdcdc", "light", ".png", "#a4b8c4"],
            lolz: ["#909898", "#e0e9e9", "lolz", ".jpg", "#a3becd"],
            marble: ["#706b66", "#c7bdaa", "marble", ".jpg", "#f0db86"],
            metal: ["#6e6e6e", "#c9c9c9", "metal", ".jpg", "#a3becd"],
            nature: ["#8c976e", "#c3d1a4", "translucent", ".png", "#eef396"],
            neon: ["#636363", "#b9b9b9", "neon", ".png", "#6d90a6"],
            newspaper: ["#5a5956", "#5a5956", "newspaper", ".jpg", "#99976e"],
            orange: ["#D08B18", "#FCE4B2", "orange", ".png", "#ffff33"],
            overlay: ["#789ebd", "#4878a0", "overlay", ".png", "#0d9acf"],
            parchment: ["#B58863", "#F0D9B5", "parchment", ".jpg", "#d8cc66"],
            purple: ["#8877B7", "#EFEFEF", "purple", ".png", "#7dacc9"],
            red: ["#BA5546", "#F0D8BF", "red", ".png", "#f8f893"],
            sand: ["#b8a590", "#e5d3c4", "sand", ".jpg", "#e2bc87"],
            sky: ["#c2d7e2", "#efefef", "sky", ".png", "#65daf7"],
            stone: ["#666463", "#c8c3bd", "stone", ".jpg", "#36525f"],
            tan: ["#D08B18", "#FCE4B2", "tan", ".png", "#f7d84a"],
            tournament: ["#316549", "#ebece8", "tournament", ".jpg", "#a4c25b"],
            translucent: ["#667188", "#282f3f", "translucent", ".png", "#5b91b3"],
            walnut: ["#835f42", "#c0a684", "walnut", ".jpg", "#d1a52d"],
            wood: ["#8d675e", "#e7cdb2", "dark_wood", ".jpg", "#cc9122"],
            grey: ["#aaaaaa", "#dcdcdc", "light", ".png", "#a4b8c4"],
            pink: ["#f9cdd3", "#fff3f3", "bubblegum", ".png", "#de5d6f"],
            natural: ["#D08B18", "#FCE4B2", "tan", ".png", "#f0e464"],
            winboard: ["#316549", "#ebece8", "tournament", ".jpg", "#a4c25b"],
            blackwhite: ["#667188", "#282f3f", "translucent", ".png", "#5b91b3"],
            marbleblue: ["#c2d7e2", "#efefef", "marbleblue", ".jpg", "#65daf7"],
            marblebrown: ["#b96f18", "#aeaeae", "graffiti", ".jpg", "#f39011"],
            marblegreen: ["#706b66", "#c7bdaa", "marblegreen", ".jpg", "#f0db86"],
            wooddark: ["#895132", "#d9b088", "burled_wood", ".jpg", "#ee9016"],
            woodlight: ["#B58863", "#F0D9B5", "parchment", ".jpg", "#d8cc66"],
            woodmid: ["#8d675e", "#e7cdb2", "dark_wood", ".jpg", "#cc9122"],
            woodolive: ["#6e6e6e", "#c9c9c9", "woodolive", ".jpg", "#a3becd"]
        }
          , n = {
            modern2: {
                imgPath: "modern",
                imgFormat: ".png"
            },
            lines: {
                imgPath: "alpha",
                imgFormat: ".png"
            },
            "3dwood": {
                imgPath: "3d_wood",
                imgFormat: ".png"
            },
            "3dplastic": {
                imgPath: "3d_plastic",
                imgFormat: ".png"
            },
            "3dchesskid": {
                imgPath: "3d_chesskid",
                imgFormat: ".png"
            }
        }
          , getPieceScheme = e=>n[e] ? n[e] : {
            imgPath: e,
            imgFormat: ".png"
        };
        new Array(76).join().split(",").map(((e,t)=>2 * t)).slice(22);
        var o = i(86910)
          , a = i(63754);
        const r = (new class Configuration {
            constructor() {
                const e = Object.assign({}, window.Config);
                e.MainDomain || (e.MainDomain = e["domain.main"]),
                e.StaticDomain || (e.StaticDomain = e["domain.static"]),
                e.FilesDomain || (e.FilesDomain = e["domain.files"]),
                e.LiveDomain || (e.LiveDomain = e["domain.live"]),
                e.LiveWebSocketDomain || (e.LiveWebSocketDomain = e["domain.livews"]),
                e.LiveSecureWebSocketDomain || (e.LiveSecureWebSocketDomain = e["domain.livewss"]),
                e.VoiceDomain || (e.VoiceDomain = e["domain.voice"]),
                e.CssJsDomain || (e.CssJsDomain = e["domain.cssjs"]),
                e.ImagesDomain || (e.ImagesDomain = e["domain.images"]),
                e.AvatarsDomain || (e.AvatarsDomain = e["domain.avatars"]),
                e.ChessBoardAssetsDomain || (e.ChessBoardAssetsDomain = "/chess-themes"),
                e.ChessBoardLocalAssetsDomain || (e.ChessBoardLocalAssetsDomain = "bundles/web/images/chess-themes/pieces"),
                e.AppVersion || (e.AppVersion = e["application.version"]),
                e.AppVersion || (e.AppVersion = Math.floor(1e4 * Math.random()) + 1e4),
                e.DocumentRoot || (e.DocumentRoot = ""),
                void 0 === e.oldThemes && (e.oldThemes = !0),
                e.GfxUrl || (e.GfxUrl = e.ChessBoardAssetsDomain),
                e.GfxLocalUrl || (e.GfxLocalUrl = e.ChessBoardLocalAssetsDomain),
                e.ChessBoardPiecesPath || (e.ChessBoardPiecesPath = "/pieces"),
                e.ChessBoardBackgroundsPath || (e.ChessBoardBackgroundsPath = "/boards"),
                e.ChessBoardArrowsPath || (e.ChessBoardArrowsPath = "/arrows"),
                e.AudioSet || (e.AudioSet = "default"),
                e.AudioUrl || (e.AudioUrl = `${e.ChessBoardAssetsDomain}/sounds/`),
                e.DiagramGetPostUrl || (e.DiagramGetPostUrl = "/api/get_diagram"),
                e.DailyPuzzleGetUrl || (e.DailyPuzzleGetUrl = "/api/get_puzzle"),
                this.config = e
            }
        }
        ).config;
        var l = {
            name: "GamePreview",
            props: {
                autoResize: {
                    type: Boolean
                },
                colorScheme: {
                    type: String,
                    default: "green"
                },
                fen: {
                    type: String
                },
                flipBoard: {
                    type: Boolean
                },
                highlightColor: {
                    type: String
                },
                highlightSquares: {
                    type: String
                },
                is960Board: {
                    type: Boolean
                },
                is960Title: {
                    type: Boolean
                },
                isBoardPopover: {
                    type: Boolean
                },
                pieceStyle: {
                    type: String,
                    default: "neo"
                },
                size: {
                    type: [String, Number]
                },
                staticBoard: {
                    type: [Boolean, String]
                },
                hideHandPieces: {
                    type: Boolean
                }
            },
            data: ()=>({
                squares: [],
                squareWidth: 12.5,
                isRetina: window.devicePixelRatio > 1,
                backgroundImage: null,
                board: null,
                pieces: []
            }),
            computed: {
                isThreeD: ()=>!1,
                loadStaticBoard() {
                    return "boolean" != typeof this.staticBoard ? "true" === this.staticBoard : this.staticBoard
                },
                watchedProps() {
                    return this.fen,
                    this.size,
                    this.flipBoard,
                    this.autoResize,
                    this.isBoardPopover,
                    this.colorScheme,
                    this.pieceStyle,
                    this.highlightColor,
                    this.highlightSquares,
                    Date.now()
                },
                gamePreviewScheme() {
                    return `game-preview-${this.colorScheme}`
                }
            },
            watch: {
                watchedProps() {
                    this.updatePreview()
                }
            },
            created() {
                this.updatePreview()
            },
            methods: {
                updatePreview() {
                    this.staticBoard || (this.board = this.getBoard()),
                    this.pieces = this.getPieces(),
                    this.squares = this.getHighlightedSquares()
                },
                getHighlightedSquares() {
                    const e = []
                      , t = {
                        a: 0,
                        b: 1,
                        c: 2,
                        d: 3,
                        e: 4,
                        f: 5,
                        g: 6,
                        h: 7
                    }
                      , i = this.squareWidth
                      , n = this.highlightSquares
                      , o = this.flipBoard || !1
                      , a = this.colorScheme || "green"
                      , r = s[a] || s.default
                      , l = this.highlightColor || r[4];
                    if (r[2] || (r[2] = a),
                    "string" == typeof n)
                        for (let s = 0; s < n.length; s += 2) {
                            let a = t[n.substr(s, 1)]
                              , r = 8 - Number(n.substr(s + 1, 1));
                            o && (a = 7 - a,
                            r = 7 - r);
                            const c = 7 * i - r * i
                              , h = a * i;
                            if (isNaN(c) || isNaN(h))
                                break;
                            e.push({
                                backgroundColor: l,
                                bottom: `${c}%`,
                                height: `${this.squareWidth}%`,
                                key: `${a}${r}${this.highlightSquares}`,
                                left: `${h}%`,
                                opacity: ".5",
                                position: "absolute",
                                right: 100 - h - i + "%",
                                top: 100 - c - i + "%",
                                width: `${this.squareWidth}%`
                            })
                        }
                    return e
                },
                getBoardUrl() {
                    const e = r.GfxUrl + r.ChessBoardBackgroundsPath;
                    let t = Math.max(20, Number(this.size || 0));
                    const i = this.colorScheme || "green"
                      , n = s[i] || s.green;
                    this.isRetina && (t *= 2);
                    let o = n[2];
                    "overlay" === o && (o = "translucent");
                    return `${e}/${o}/${t}${n[3]}`
                },
                getBoard() {
                    const e = Math.max(10, Number(this.size || 0));
                    let t = 8 * e
                      , i = "none"
                      , s = "0";
                    return this.autoResize && (i = "100%",
                    t = 0,
                    s = "100%"),
                    {
                        width: `${8 * e}px`,
                        height: `${t}px`,
                        maxWidth: i,
                        paddingBottom: s,
                        backgroundImage: `url(${this.getBoardUrl()})`
                    }
                },
                getPieces() {
                    return this.fen ? this.parseFEN() : []
                },
                parsePiece(e, t) {
                    let i = e;
                    const s = this.flipBoard
                      , n = Math.max(20, Number(this.size || 0));
                    let o = 0
                      , a = "";
                    for (; i >= 8; )
                        o += 1,
                        i -= 8;
                    return /[A-Z]/.test(t) ? a = "w" : /[a-z]/.test(t) && (a = "b"),
                    s && (i = 7 - i,
                    o = 7 - o),
                    {
                        bottom: 7 * this.squareWidth - o * this.squareWidth,
                        left: i * this.squareWidth,
                        size: n,
                        type: t.toLowerCase(),
                        color: a
                    }
                },
                getPieceUrl(e, t) {
                    let i = r.GfxUrl + r.ChessBoardPiecesPath
                      , s = Math.max(30, Number(this.size || 0))
                      , n = this.pieceStyle || "preview";
                    const l = window.location.href.indexOf(a.Z.generate("web_user_settings_themes"))
                      , c = window.location.href.indexOf(a.Z.generate("web_user_settings_board"));
                    return "real3d" === n && -1 !== l || "real3d" === n && -1 !== c ? i = r.GfxLocalUrl : n = "real3d" === n ? "3d_wood" : getPieceScheme(n).imgPath,
                    this.isRetina && (s *= 2),
                    i === r.GfxLocalUrl ? (0,
                    o.n)(`${i}/${n}/${s}/${e}${t}.png`) : `${i}/${n}/${s}/${e}${t}.png`
                },
                parseFEN() {
                    const e = []
                      , t = this.fen.split(/\s/g)[0];
                    let i = 0;
                    for (let s = 0; s < t.length; s += 1) {
                        const n = t.substr(s, 1);
                        if (n.match(/[A-Z]/i)) {
                            const t = this.parsePiece(i, n);
                            let s = "";
                            n === n.toLowerCase() ? s += "b" : s += "w",
                            s += n.toLowerCase(),
                            i += 1,
                            (!this.hideHandPieces || t.bottom >= 0) && e.push({
                                url: this.getPieceUrl(t.color, t.type),
                                bottom: `${t.bottom}%`,
                                left: `${t.left}%`,
                                size: t.size,
                                code: s
                            })
                        }
                        n.match(/[0-8]/) && (i += n / 1)
                    }
                    return e
                },
                pieceClass(e) {
                    let t = this.pieceStyle;
                    "modern2" === t ? t = "modern" : "real3d" === t ? t = "3d_wood" : /3d[^_]/.test(t) && (t = `3d_${t.substr(2)}`);
                    let i = `sprite-piece sprite-piece-60 sprite-piece-${t}`;
                    return this.isThreeD ? i += ` sprite-3d-piece sprite-3d-piece-${e.code}` : i += ` sprite-piece-${e.code}`,
                    i
                }
            }
        }
          , c = {
            component: "game-preview-component",
            piece: "game-preview-piece",
            "icon-wrapper": "game-preview-icon-wrapper",
            icon: "game-preview-icon",
            "chess960-title": "game-preview-chess960-title"
        }
          , h = i(51900);
        var d = {
            name: "GamePreview",
            extends: (0,
            h.Z)(l, (function() {
                var e = this
                  , t = e.$createElement
                  , i = e._self._c || t;
                return e.loadStaticBoard ? i("div", {
                    class: e.$style.component
                }, [i("div", {
                    staticClass: "game-preview-board",
                    class: e.gamePreviewScheme
                }), e._v(" "), e._l(e.squares, (function(e) {
                    return i("div", {
                        key: e.key,
                        staticClass: "highlight-square",
                        style: e
                    })
                }
                )), e._v(" "), e._l(e.pieces, (function(t, s) {
                    return i("div", {
                        key: s,
                        class: e.pieceClass(t),
                        style: {
                            bottom: t.bottom,
                            left: t.left
                        }
                    })
                }
                ))], 2) : i("div", {
                    class: e.$style.component,
                    style: e.board
                }, [e.is960Board ? i("div", {
                    class: e.$style["icon-wrapper"]
                }, [i("span", {
                    staticClass: "icon-font-chess chess960",
                    class: e.$style.icon
                })]) : e._e(), e._v(" "), e.is960Title ? i("div", {
                    class: e.$style["chess960-title"],
                    domProps: {
                        textContent: e._s("Chess960")
                    }
                }) : e._e(), e._v(" "), e._l(e.squares, (function(e) {
                    return i("div", {
                        key: e.key,
                        style: e
                    })
                }
                )), e._v(" "), e._l(e.pieces, (function(t, s) {
                    return i("img", {
                        key: s,
                        class: e.$style.piece,
                        style: {
                            width: e.squareWidth + "%",
                            height: e.squareWidth + "%",
                            bottom: t.bottom,
                            left: t.left
                        },
                        attrs: {
                            alt: t.pieceCode,
                            src: t.url,
                            width: "20",
                            height: "20"
                        }
                    })
                }
                ))], 2)
            }
            ), [], !1, (function injectStyles(e) {
                this.$style = c.locals || c
            }
            ), null, null).exports,
            computed: {
                isThreeD() {
                    return this.$store.user.isThreeD
                }
            }
        }
          , u = (0,
        h.Z)(d, undefined, undefined, !1, null, null, null).exports
    }
}]);
