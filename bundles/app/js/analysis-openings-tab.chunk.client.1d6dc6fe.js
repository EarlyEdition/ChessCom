window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
    web_eco_callback_search_by_starting_position: {
        tokens: [["text", "/callback/eco/search/starting-position"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    },
    web_master_games_search: {
        tokens: [["text", "/games/search"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    },
    i18n_web_master_games_search: {
        tokens: [["text", "/games/search"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    }
}),
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[617], {
    55587: function(e, t, s) {
        function getFigurineIndex(e) {
            return e.san.search(/[BKNRQ]/)
        }
        s.d(t, {
            j: function() {
                return getFigurineIndex
            }
        })
    },
    69142: function(e, t, s) {
        s.d(t, {
            t: function() {
                return getIconName
            }
        });
        var n = s(19818)
          , o = s(55587);
        function getIconName(e) {
            const t = e.color === n.lB.WHITE ? n._l.WHITE : n._l.BLACK
              , s = e.san[(0,
            o.j)(e)];
            return `${n.gQ[s]}-${t}`
        }
    },
    61891: function(e, t, s) {
        s.d(t, {
            d: function() {
                return logSidebarEvent
            }
        });
        var n = s(67104)
          , o = s(75700)
          , r = s(67858)
          , i = s(51878)
          , a = s(32614);
        function logSidebarEvent(e) {
            (0,
            o.K)(e, {
                gameType: r.X.gameType,
                opponent: function getOpponent() {
                    const e = (0,
                    i.D)();
                    if (e === n.lA.ColorsAsWords.White)
                        return a.S.headers.Black;
                    if (e === n.lA.ColorsAsWords.Black)
                        return a.S.headers.White;
                    return null
                }(),
                result: a.S.headers.Result
            })
        }
    },
    59469: function(e, t, s) {
        s.d(t, {
            E: function() {
                return getShowFigurine
            }
        });
        var n = s(67104)
          , o = s(32751);
        function getShowFigurine() {
            return (0,
            o.T)().moveListDisplayType === n.$l.MoveListDisplayTypes.Figurine
        }
    },
    2047: function(e, t, s) {
        s.d(t, {
            o: function() {
                return translateMoveText
            }
        });
        var n = s(19818);
        function getTranslation(e) {
            return (0,
            n.FI)()[e]
        }
        function translateMoveText(e) {
            return e.includes("O-O") ? e : e.replace(/[BKNRQ]/g, getTranslation)
        }
    },
    45908: function(e, t, s) {
        s.d(t, {
            Z: function() {
                return c
            }
        });
        var n = s(67104)
          , o = s(55587)
          , r = s(69142)
          , i = s(2047)
          , a = {
            name: "MoveSan",
            props: {
                color: {
                    type: [String, Number],
                    default: n.lA.ColorsAsNumbers.White
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
                    return "number" != typeof this.color && (e = this.color === n.lA.ColorsAsWords.White ? n.lA.ColorsAsNumbers.White : n.lA.ColorsAsNumbers.Black),
                    e
                },
                figurine() {
                    if (this.showFigurine && this.san) {
                        const e = this.reverseFigurineColor ? (0,
                        n.SH)(this.colorAsNumber) : this.colorAsNumber;
                        return {
                            icon: (0,
                            r.t)({
                                color: e,
                                san: this.san
                            }),
                            index: (0,
                            o.j)({
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
                    i.o)(t) : t
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
        s(51900).Z)(a, (function() {
            var e, t, s = this, n = s.$createElement, o = s._self._c || n;
            return o("span", s._g({
                class: [s.$style.component, (e = {},
                e[s.$style.highlighted] = s.highlighted,
                e)]
            }, s.$listeners), [s.premoveText ? o("span", {
                class: s.$style.premove,
                domProps: {
                    textContent: s._s(s.premoveText)
                }
            }) : s._e(), s._v(" "), o("span", {
                class: s.$style.highlight
            }, [s.figurineSan ? [o("span", {
                class: s.$style.san,
                attrs: {
                    "data-cy": "move-san-san"
                },
                domProps: {
                    textContent: s._s(s.figurineSan.beforeFigurine)
                }
            }), s._v(" "), o("span", {
                ref: "figurine",
                class: [s.$style.figurine, "icon-font-chess", s.figurine.icon, (t = {},
                t[s.$style.trailing] = s.isTrailing,
                t)]
            }), o("span", {
                class: s.$style.afterfigurine,
                domProps: {
                    textContent: s._s(s.figurineSan.afterFigurine)
                }
            })] : o("span", {
                class: s.$style.san,
                attrs: {
                    "data-cy": "move-san-text"
                },
                domProps: {
                    textContent: s._s(s.translatedSan)
                }
            })], 2), s._v(" "), s.postmoveText ? o("span", {
                class: s.$style.postmove,
                domProps: {
                    textContent: s._s(s.postmoveText)
                }
            }) : s._e()])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = l.locals || l
        }
        ), null, null).exports
    },
    73665: function(e, t, s) {
        s.d(t, {
            Z: function() {
                return r
            }
        });
        var n = {
            name: "SidebarTabContent"
        }
          , o = {
            component: "sidebar-tab-content-component"
        };
        var r = (0,
        s(51900).Z)(n, (function() {
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
    62354: function(e, t, s) {
        s.d(t, {
            Z: function() {
                return a
            }
        });
        var n = s(32305)
          , o = s(64647)
          , r = {
            name: "LockedMessage",
            props: {
                asButton: {
                    type: Boolean,
                    default: !1
                },
                message: {
                    type: String,
                    default: (0,
                    n.dW)("Upgrade to View")
                }
            },
            setup: ()=>({
                upgradeRoute: o._.upgradeMembership()
            })
        }
          , i = {
            component: "analysis-upgrade-button-component",
            button: "analysis-upgrade-button-button",
            icon: "analysis-upgrade-button-icon"
        };
        var a = (0,
        s(51900).Z)(r, (function() {
            var e, t = this, s = t.$createElement, n = t._self._c || s;
            return n("a", {
                class: [t.$style.component, (e = {},
                e[t.$style.button] = t.asButton,
                e)],
                attrs: {
                    href: t.upgradeRoute,
                    target: "_blank"
                }
            }, [n("span", {
                class: ["icon-font-chess display-slider", t.$style.icon]
            }), t._v(" "), n("span", {
                domProps: {
                    textContent: t._s(t.message)
                }
            })])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = i.locals || i
        }
        ), null, null).exports
    },
    64: function(e, t, s) {
        s.r(t),
        s.d(t, {
            default: function() {
                return te
            }
        });
        var n = s(92866)
          , o = s(73665)
          , r = s(67104)
          , i = s(45908)
          , a = s(16272)
          , l = s(32305)
          , c = (0,
        n.aZ)({
            name: "OpeningStat",
            props: {
                label: {
                    type: String,
                    required: !0
                },
                percent: {
                    type: Number,
                    required: !0
                },
                type: {
                    type: String,
                    required: !0
                }
            },
            setup(e) {
                const t = (0,
                n.Fl)((()=>100 * e.percent));
                return {
                    percentStyle: (0,
                    n.Fl)((()=>({
                        width: `${t.value}%`
                    }))),
                    percentText: (0,
                    n.Fl)((()=>`${Math.round(t.value)}%`)),
                    show: (0,
                    n.Fl)((()=>e.percent > 0))
                }
            }
        })
          , u = {
            component: "openings-stat-component",
            white: "openings-stat-white",
            fill: "openings-stat-fill",
            draw: "openings-stat-draw",
            black: "openings-stat-black",
            text: "openings-stat-text",
            label: "openings-stat-label"
        }
          , d = s(51900);
        var p = (0,
        d.Z)(c, (function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return e.percent > 0 ? s("li", {
                class: [e.$style.component, e.$style[e.type]]
            }, [s("span", {
                class: e.$style.fill,
                style: e.percentStyle
            }, [e.percent > .1 ? s("span", {
                class: e.$style.text,
                domProps: {
                    textContent: e._s(e.percentText)
                }
            }) : e._e()]), e._v(" "), s("div", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.label)
                }
            })]) : e._e()
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = u.locals || u
        }
        ), null, null).exports
          , h = (0,
        n.aZ)({
            name: "OpeningStats",
            components: {
                Stat: p
            },
            props: {
                stats: {
                    type: Object,
                    default: ()=>({})
                }
            },
            setup: e=>({
                statsConfig: (0,
                n.Fl)((()=>[{
                    label: (0,
                    l.dW)("White Wins"),
                    percent: e.stats.whiteWon,
                    type: "white"
                }, {
                    label: (0,
                    l.dW)("Draw"),
                    percent: e.stats.draw,
                    type: "draw"
                }, {
                    label: (0,
                    l.dW)("Black Wins"),
                    percent: e.stats.blackWon,
                    type: "black"
                }]))
            })
        })
          , g = {
            component: "openings-stats-component"
        };
        var m = (0,
        d.Z)(h, (function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("ul", {
                class: e.$style.component
            }, e._l(e.statsConfig, (function(e) {
                return s("stat", {
                    key: e.type,
                    attrs: {
                        "data-cy": "analysis-opening-stat-" + e.type,
                        label: e.label,
                        percent: e.percent,
                        type: e.type
                    }
                })
            }
            )), 1)
        }
        ), [], !1, (function openings_stats_injectStyles(e) {
            this.$style = g.locals || g
        }
        ), null, null).exports
          , f = s(24073)
          , y = s(84282)
          , v = s(57367)
          , b = s(68033)
          , w = s(63754)
          , _ = s(18160);
        var k = new class Eco {
            constructor() {
                this.bookLoaded = !1,
                this.ecoBook = [],
                this.ecoBookLen = 0,
                this.isLoadingStartingPositions = !1,
                this.pathToEcoJSON = window.Config.pathToEcoJson,
                this.startingPositions = [],
                this.startingPositionsLoaded = !1
            }
            setStartingPositions(e) {
                this.startingPositions = [{
                    name: _.Z.trans("Choose..."),
                    id: "",
                    disabled: !0
                }].concat(e)
            }
            setBookLoaded(e) {
                this.bookLoaded = e
            }
            setEcoBook(e) {
                this.ecoBook = e,
                this.ecoBookLen = e.length
            }
            setIsLoadingStartingPositions(e) {
                this.isLoadingStartingPositions = e
            }
            loadStartingPositions() {
                0 === this.startingPositions.length && this.findStartingPositions()
            }
            findStartingPositions() {
                return this.startingPositionsPromise || (this.startingPositionsPromise = new Promise(((e,t)=>{
                    this.startingPositionsLoaded ? e(this.startingPositions) : this.isLoadingStartingPositions || (this.setIsLoadingStartingPositions(!0),
                    v.Z.get(w.Z.generate("web_eco_callback_search_by_starting_position")).then((t=>{
                        t.data && (this.setStartingPositions(t.data),
                        this.setIsLoadingStartingPositions(!1),
                        e(this.startingPositions))
                    }
                    )).catch((e=>{
                        t(e),
                        this.setIsLoadingStartingPositions(!1)
                    }
                    )).catch(b.Z))
                }
                ))),
                this.startingPositionsPromise
            }
            loadEcoBook() {
                return this.setBookLoaded(!1),
                v.Z.get(this.pathToEcoJSON).then((e=>{
                    this.setBookLoaded(!0),
                    this.setEcoBook(e.data)
                }
                )).catch(b.Z)
            }
        }
        ;
        var P = s(6898)
          , x = {
            name: "SuggestedMoves",
            components: {
                MoveSan: i.Z
            },
            directives: {
                Tooltip: P.Z
            },
            props: {
                calculatePercentages: {
                    type: Boolean,
                    default: !0
                },
                openTotalGamesInNewTab: {
                    type: Boolean,
                    default: !1
                },
                isPremium: {
                    type: Boolean,
                    default: !1
                },
                suggestedMoves: {
                    type: Array
                },
                selectedMoveNodeIndex: {
                    type: Number
                },
                selectedMoveHighlight: {
                    type: String
                }
            },
            emits: ["click-move"],
            data: ()=>({
                formatNumber: a.uf,
                constants: Object.freeze(f.Z),
                gameResultTextOptions: Object.freeze(y.Si),
                openingInfo: []
            }),
            computed: {
                hasSuggestedMoves() {
                    return this.suggestedMoves.length > 0
                }
            },
            watch: {
                suggestedMoves: {
                    handler() {
                        this.openingInfo = [],
                        this.suggestedMoves.forEach(((e,t)=>{
                            this.calculatePercentages && (e.percentWhiteWon = this.calcWinPercent(e.whiteWon, e.totalGames),
                            e.percentDrawn = this.calcWinPercent(e.draw, e.totalGames),
                            e.percentBlackWon = this.calcWinPercent(e.blackWon, e.totalGames));
                            const s = function matchByFen(e, t) {
                                const s = e.split(" ").slice(0, 3).join(" ");
                                let n, o = null;
                                for (n = 0; n < k.ecoBookLen; n += 1)
                                    if (k.ecoBook[n].f === s) {
                                        o = Object.assign({}, k.ecoBook[n]);
                                        break
                                    }
                                return o && ("Undefined" === o.n ? (o.u = null,
                                o.n = _.Z.trans("Starting Position"),
                                o.c = null,
                                o.i = 0,
                                o.m = null) : t && (o.i = t)),
                                o
                            }(e.nextFen);
                            this.openingInfo[t] = s ? s.n : null
                        }
                        ))
                    },
                    immediate: !0
                }
            },
            methods: {
                calcWinPercent: (e,t)=>Math.round(e / t * 100),
                clickMove(e, t) {
                    this.$emit("click-move", t, e)
                },
                getSuggestedMoveNumber() {
                    return -1 === this.selectedMoveNodeIndex ? "1." : (this.selectedMoveNodeIndex + 1) % 2 == 0 ? (this.selectedMoveNodeIndex + 3) / 2 + "." : (this.selectedMoveNodeIndex + 2) / 2 + "..."
                },
                getTotalGamesComponent(e) {
                    return this.getTotalGamesLink(e) ? "a" : "span"
                },
                getTotalGamesLink(e) {
                    return e.totalGamesLink ? e.totalGamesLink : e.nextFen && this.isPremium && e.totalGames <= f.Z.GAME_SEARCH_COUNT_THRESHOLD ? w.Z.generate("web_master_games_search", {
                        fen: e.nextFen
                    }) : void 0
                }
            }
        }
          , S = {
            highlighted: "suggested-moves-highlighted",
            "suggested-moves-items": "suggested-moves-suggested-moves-items",
            "move-type": "suggested-moves-move-type",
            "total-games": "suggested-moves-total-games",
            san: "suggested-moves-san",
            "suggested-moves-list": "suggested-moves-suggested-moves-list",
            "game-info": "suggested-moves-game-info",
            player: "suggested-moves-player",
            result: "suggested-moves-result",
            "percent-label": "suggested-moves-percent-label",
            "suggested-white": "suggested-moves-suggested-white",
            "suggested-draw": "suggested-moves-suggested-draw",
            "suggested-black": "suggested-moves-suggested-black",
            list: "suggested-moves-list"
        };
        var T = (0,
        d.Z)(x, (function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                class: e.$style.component
            }, [e.hasSuggestedMoves ? s("ul", {
                class: e.$style.list
            }, e._l(e.suggestedMoves, (function(t, n) {
                var o;
                return s("li", {
                    key: n,
                    class: e.$style["suggested-moves-items"],
                    attrs: {
                        "data-cy": e.$cy.explorer.moveListSection.suggestedMoves.items
                    }
                }, [s("button", {
                    class: e.$style["move-type"],
                    attrs: {
                        type: "button",
                        "data-cy": e.$cy.explorer.moveListSection.suggestedMoves.moveType
                    },
                    on: {
                        click: function(s) {
                            return e.clickMove(s, t)
                        }
                    }
                }, [s("move-san", e._b({
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: e.$trans(e.openingInfo[n]),
                            delay: 0
                        },
                        expression: "{\n            content: $trans(openingInfo[index]),\n            delay: 0\n          }"
                    }],
                    class: [e.$style.san, (o = {},
                    o[e.$style.highlighted] = t.sanMove === e.selectedMoveHighlight,
                    o)],
                    attrs: {
                        "premove-text": e.getSuggestedMoveNumber(),
                        san: t.sanMove
                    }
                }, "move-san", e.$attrs, !1))], 1), e._v(" "), s("p", {
                    class: e.$style["total-games"],
                    attrs: {
                        "data-cy": e.$cy.explorer.moveListSection.suggestedMoves.totalGames
                    }
                }, [t.totalGames > 1 || !t.gameInfo ? s(e.getTotalGamesComponent(t), {
                    tag: "component",
                    attrs: {
                        href: e.getTotalGamesLink(t),
                        target: e.openTotalGamesInNewTab ? "_blank" : null
                    },
                    domProps: {
                        textContent: e._s(e.formatNumber(t.totalGames))
                    }
                }) : e._e()], 1), e._v(" "), t.gameInfo ? s("div", {
                    class: e.$style["suggested-moves-list"]
                }, [s("div", {
                    class: e.$style["game-info"]
                }, [t.gameInfo.gameResultText === e.gameResultTextOptions.ONE_ZERO ? s("div", {
                    class: [e.$style.result, e.$style["suggested-white"]],
                    domProps: {
                        textContent: e._s(e.gameResultTextOptions.ONE_ZERO)
                    }
                }) : e._e(), e._v(" "), t.gameInfo.gameResultText === e.gameResultTextOptions.HALF_HALF ? s("div", {
                    class: [e.$style.result, e.$style["suggested-draw"]],
                    domProps: {
                        innerHTML: e._s(e.gameResultTextOptions.HALF_HALF_ENTITY)
                    }
                }) : e._e(), e._v(" "), t.gameInfo.gameResultText === e.gameResultTextOptions.ZERO_ONE ? s("div", {
                    class: [e.$style.result, e.$style["suggested-black"]],
                    domProps: {
                        textContent: e._s(e.gameResultTextOptions.ZERO_ONE)
                    }
                }) : e._e(), e._v(" "), s("div", {
                    class: e.$style.player
                }, [t.gameInfo.link ? s("a", {
                    attrs: {
                        href: t.gameInfo.link
                    },
                    domProps: {
                        textContent: e._s(t.gameInfo.title)
                    }
                }) : s("span", {
                    domProps: {
                        textContent: e._s(t.gameInfo.title)
                    }
                })])])]) : s("div", {
                    class: e.$style["suggested-moves-list"]
                }, [t.percentWhiteWon > 0 ? s("div", {
                    class: [e.$style["suggested-moves-percentages"], e.$style["suggested-white"]],
                    style: {
                        flexGrow: t.percentWhiteWon
                    },
                    attrs: {
                        "data-cy": e.$cy.explorer.moveListSection.suggestedMoves.suggestedWhite
                    }
                }, [t.percentWhiteWon > 9 ? s("span", {
                    class: e.$style["percent-label"],
                    domProps: {
                        textContent: e._s(t.percentWhiteWon + "%")
                    }
                }) : e._e()]) : e._e(), e._v(" "), t.percentDrawn > 0 ? s("div", {
                    class: [e.$style["suggested-moves-percentages"], e.$style["suggested-draw"]],
                    style: {
                        flexGrow: t.percentDrawn
                    },
                    attrs: {
                        "data-cy": e.$cy.explorer.moveListSection.suggestedMoves.suggestedDraw
                    }
                }, [t.percentDrawn > 9 ? s("span", {
                    class: e.$style["percent-label"],
                    domProps: {
                        textContent: e._s(t.percentDrawn + "%")
                    }
                }) : e._e()]) : e._e(), e._v(" "), t.percentBlackWon > 0 ? s("div", {
                    class: [e.$style["suggested-moves-percentages"], e.$style["suggested-black"]],
                    style: {
                        flexGrow: t.percentBlackWon
                    },
                    attrs: {
                        "data-cy": e.$cy.explorer.moveListSection.suggestedMoves.suggestedBlack
                    }
                }, [t.percentBlackWon > 9 ? s("span", {
                    class: e.$style["percent-label"],
                    domProps: {
                        textContent: e._s(t.percentBlackWon + "%")
                    }
                }) : e._e()]) : e._e()])])
            }
            )), 0) : e._e()])
        }
        ), [], !1, (function suggested_moves_injectStyles(e) {
            this.$style = S.locals || S
        }
        ), null, null).exports
          , B = s(62354)
          , O = (0,
        n.aZ)({
            name: "SuggestedMoveSection",
            components: {
                SuggestedMoves: T,
                UpgradeButton: B.Z
            },
            props: {
                locked: Boolean,
                opening: {
                    type: Object,
                    required: !0
                },
                isPremium: Boolean,
                selectedMoveIndex: {
                    type: Number,
                    default: 0
                },
                showFigurine: Boolean
            },
            emits: ["click-move"]
        })
          , E = {
            component: "openings-suggested-moves-component",
            upgrade: "openings-suggested-moves-upgrade",
            message: "openings-suggested-moves-message",
            locked: "openings-suggested-moves-locked"
        };
        var $ = (0,
        d.Z)(O, (function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                class: e.$style.component
            }, [e.locked ? s("div", {
                class: e.$style.locked
            }, [s("span", {
                domProps: {
                    textContent: e._s(e.$trans("Please upgrade to explore games at this depth and beyond."))
                }
            }), e._v(" "), s("upgrade-button", {
                class: e.$style.upgrade,
                attrs: {
                    "as-button": !0,
                    message: e.$trans("Unlock Explorer")
                }
            })], 1) : [e.opening.isLoading ? s("div", {
                class: e.$style.message,
                domProps: {
                    textContent: e._s(e.$trans("Loading..."))
                }
            }) : e._e(), e._v(" "), s("suggested-moves", {
                attrs: {
                    "calculate-percentages": !1,
                    "is-premium": e.isPremium,
                    "selected-move-node-index": e.selectedMoveIndex,
                    "suggested-moves": e.opening.suggestedMoves,
                    "selected-move-highlight": e.opening.lastSanMove,
                    "show-figurine": e.showFigurine
                },
                on: {
                    "click-move": function(t) {
                        return e.$emit("click-move", {
                            move: t.sanMove
                        })
                    }
                }
            }), e._v(" "), e.opening.suggestedMoves.length || e.opening.isLoading ? e._e() : s("div", {
                class: e.$style.message,
                domProps: {
                    textContent: e._s(e.$trans("There are no games with this position found in the database."))
                }
            })]], 2)
        }
        ), [], !1, (function openings_suggested_moves_injectStyles(e) {
            this.$style = E.locals || E
        }
        ), null, null).exports
          , M = s(64647)
          , A = (0,
        n.aZ)({
            name: "TabOpeningsView",
            components: {
                SuggestedMoves: $,
                MoveSan: i.Z,
                Stats: m
            },
            props: {
                locked: Boolean,
                opening: Object,
                isPremium: Boolean,
                selectedPly: Number,
                showFigurine: Boolean,
                startingMoveNumber: {
                    type: Number,
                    required: !0
                }
            },
            emits: ["click-move"],
            setup: e=>({
                getMoveNodeTooltip: function getMoveNodeTooltip(e) {
                    return e
                },
                getMoveNumber: function getMoveNumber(t, s) {
                    const n = Math.floor(t.moveNumber / 2) + e.startingMoveNumber;
                    if (t.color === r.lA.ColorsAsNumbers.White)
                        return `${n}.`;
                    if (0 === s)
                        return `${n}...`;
                    return ""
                },
                totalGamesText: (0,
                n.Fl)((function getTotalGamesText() {
                    var t, s, n;
                    const o = null != (n = null == (s = null == (t = e.opening) ? void 0 : t.stats) ? void 0 : s.totalGames) ? n : 0;
                    return (0,
                    l.jn)("{0} 0 Games| {1} 1 Game|]1,Inf] %games% Games", o, {
                        "%games%": (0,
                        a.uf)(o)
                    })
                }
                )),
                totalGamesUrl: (0,
                n.Fl)((()=>{
                    var t, s;
                    return (null == (t = e.opening) ? void 0 : t.fen) ? M._.searchMasterGames(null == (s = e.opening) ? void 0 : s.fen) : null
                }
                ))
            })
        })
          , C = {
            component: "openings-view-component",
            games: "openings-view-games",
            name: "openings-view-name",
            moves: "openings-view-moves",
            empty: "openings-view-empty",
            move: "openings-view-move"
        };
        var N = (0,
        d.Z)(A, (function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return e.opening ? s("div", {
                class: e.$style.component
            }, [s("h3", {
                class: e.$style.name,
                attrs: {
                    "data-cy": "analysis-opening-name"
                },
                domProps: {
                    textContent: e._s(e.opening.name)
                }
            }), e._v(" "), e.opening.playedMoves.length ? s("h4", {
                class: e.$style.moves,
                attrs: {
                    "data-cy": "analysis-opening-moves"
                }
            }, e._l(e.opening.playedMoves, (function(t, n) {
                return s("move-san", {
                    key: n,
                    class: e.$style.move,
                    attrs: {
                        color: t.color,
                        san: t.san,
                        "premove-text": e.getMoveNumber(t, n),
                        "show-figurine": e.showFigurine
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("click-move", {
                                ply: n
                            })
                        }
                    }
                })
            }
            )), 1) : e._e(), e._v(" "), e.opening.stats ? [e.opening.stats ? s("stats", {
                class: e.$style.stats,
                attrs: {
                    stats: e.opening.stats
                }
            }) : e._e(), e._v(" "), e.totalGamesUrl ? s("h3", {
                class: e.$style.games,
                attrs: {
                    "data-cy": "analysis-opening-games"
                }
            }, [s("a", {
                attrs: {
                    target: "_blank",
                    href: e.totalGamesUrl
                },
                domProps: {
                    textContent: e._s(e.totalGamesText)
                }
            })]) : e._e()] : e._e(), e._v(" "), s("suggested-moves", {
                attrs: {
                    "is-premium": e.isPremium,
                    locked: e.locked,
                    opening: e.opening,
                    "selected-move-index": e.selectedPly - 1
                },
                on: {
                    "click-move": function(t) {
                        return e.$emit("click-move", {
                            move: t.move
                        })
                    }
                }
            })], 2) : e._e()
        }
        ), [], !1, (function openings_view_injectStyles(e) {
            this.$style = C.locals || C
        }
        ), null, null).exports
          , R = s(61891)
          , j = s(49458)
          , F = s(923)
          , I = s(59469)
          , L = s(98482)
          , W = s(32614)
          , G = s(84171)
          , D = s(2056)
          , H = s(35174);
        var U = s(56022);
        function deletePromise({key: e, messagePromises: t}) {
            t[e] && t[e].timeout && clearTimeout(t[e].timeout),
            delete t[e]
        }
        function deletePromisesOfType({messagePromises: e, type: t}) {
            const s = function getMessagePromises({messagePromises: e, type: t}) {
                return t ? Object.keys(e).filter((s=>e[s].type === t)).reduce(((t,s)=>(t[s] = e[s],
                t)), {}) : e
            }({
                messagePromises: e,
                type: t
            });
            Object.keys(s).forEach((t=>deletePromise({
                key: t,
                messagePromises: e
            })))
        }
        function postMessage({messagePromises: e, promiseWorkerCall: t, timeout: s=5e3, worker: n}) {
            const o = (0,
            U.g)()
              , r = JSON.stringify(Object.assign(t, {
                pwId: o
            }));
            return n.postMessage(r),
            e[o] = function createExternallyResolvablePromise() {
                let e, t;
                return {
                    promise: new Promise(((s,n)=>{
                        e = s,
                        t = n
                    }
                    )),
                    reject: t,
                    resolve: e
                }
            }(),
            e[o].type = t.fn,
            e[o].timeout = window.setTimeout((()=>{
                if (!e[o])
                    return;
                const t = e[o].reject;
                t && t(`Timed-out after ${s} milliseconds: ${r}`),
                deletePromise({
                    key: o,
                    messagePromises: e
                })
            }
            ), s),
            e[o].promise
        }
        const z = {};
        var Z = s(20477)
          , q = s.n(Z);
        const V = function createPromiseWorkerClient(e) {
            const t = (0,
            H.I)();
            return e.onmessage = e=>function handleWorkerMessage({e: e, emitter: t, messagePromises: s}) {
                let n;
                try {
                    n = JSON.parse(e.data)
                } catch (r) {}
                if (n.event && t.emit(n.event, n.data),
                !n.pwId || !s[n.pwId])
                    return;
                const o = s[n.pwId].resolve;
                o && o(n),
                deletePromise({
                    key: n.pwId,
                    messagePromises: s
                })
            }({
                e: e,
                emitter: t,
                messagePromises: z
            }),
            Object.assign(Object.assign({}, t), {
                deletePromisesOfType: e=>deletePromisesOfType({
                    messagePromises: z,
                    type: e
                }),
                postMessage: (t,s)=>postMessage({
                    messagePromises: z,
                    promiseWorkerCall: t,
                    timeout: s,
                    worker: e
                })
            })
        }(new function Worker_fn() {
            return q()('!function(){"use strict";function postResult(e,t){self.postMessage(JSON.stringify({data:e||"",pwId:t}))}var e=(e=>(e.ECO="chesscom_eco",e.User="chesscom_user",e))(e||{}),t=(e=>(e.ECO="eco",e.User="user",e))(t||{});class Store{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise(((r,o)=>{const n=indexedDB.open(e,1);n.onerror=()=>o(n.error),n.onsuccess=()=>r(n.result),n.onupgradeneeded=()=>{n.result.createObjectStore(t)}}))}_withIDBStore(e,t){return this._dbp.then((r=>new Promise(((o,n)=>{const s=r.transaction(this.storeName,e);s.oncomplete=()=>o(),s.onabort=s.onerror=()=>n(s.error),t(s.objectStore(this.storeName))}))))}}let r;function getDefaultStore(){return r||(r=new Store),r}function get(e,t=getDefaultStore()){let r;return t._withIDBStore("readonly",(t=>{r=t.get(e)})).then((()=>r.result))}const o=new Store(e.ECO,t.ECO),n="IS_POPULATED";async function initDB(e){return async function storeIsPopulated(){return get(n,o).then(Boolean)}().then((t=>t?Promise.resolve():async function populateStore(e){return fetch(e,{method:"GET"}).then((e=>e.json())).then((e=>{!function setMany(e,t){return t._withIDBStore("readwrite",(t=>{e.forEach((e=>{t.put(e,e.f)}))}))}(e,o)}))}(e).then(setPopulated)))}function setPopulated(){return function set(e,t,r=getDefaultStore()){return r._withIDBStore("readwrite",(r=>{r.put(t,e)}))}(n,!0,o)}var s="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==s&&s,i="URLSearchParams"in s,a="Symbol"in s&&"iterator"in Symbol,u="FileReader"in s&&"Blob"in s&&function(){try{return new Blob,!0}catch(e){return!1}}(),h="FormData"in s,f="ArrayBuffer"in s;if(f)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};function normalizeName(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\\-#$%&\'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError(\'Invalid character in header field name: "\'+e+\'"\');return e.toLowerCase()}function normalizeValue(e){return"string"!=typeof e&&(e=String(e)),e}function iteratorFor(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return a&&(t[Symbol.iterator]=function(){return t}),t}function Headers(e){this.map={},e instanceof Headers?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function consumed(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function fileReaderReady(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function readBlobAsArrayBuffer(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsArrayBuffer(e),r}function bufferClone(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function Body(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:u&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:h&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:i&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():f&&u&&function isDataView(e){return e&&DataView.prototype.isPrototypeOf(e)}(e)?(this._bodyArrayBuffer=bufferClone(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):f&&(ArrayBuffer.prototype.isPrototypeOf(e)||d(e))?this._bodyArrayBuffer=bufferClone(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):i&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u&&(this.blob=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=consumed(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(readBlobAsArrayBuffer)}),this.text=function(){var e=consumed(this);if(e)return e;if(this._bodyBlob)return function readBlobAsText(e){var t=new FileReader,r=fileReaderReady(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function readArrayBufferAsText(e){for(var t=new Uint8Array(e),r=new Array(t.length),o=0;o<t.length;o++)r[o]=String.fromCharCode(t[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},h&&(this.formData=function(){return this.text().then(decode)}),this.json=function(){return this.text().then(JSON.parse)},this}Headers.prototype.append=function(e,t){e=normalizeName(e),t=normalizeValue(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},Headers.prototype.delete=function(e){delete this.map[normalizeName(e)]},Headers.prototype.get=function(e){return e=normalizeName(e),this.has(e)?this.map[e]:null},Headers.prototype.has=function(e){return this.map.hasOwnProperty(normalizeName(e))},Headers.prototype.set=function(e,t){this.map[normalizeName(e)]=normalizeValue(t)},Headers.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},Headers.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),iteratorFor(e)},Headers.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),iteratorFor(e)},Headers.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),iteratorFor(e)},a&&(Headers.prototype[Symbol.iterator]=Headers.prototype.entries);var l=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Request(e,t){if(!(this instanceof Request))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');var r=(t=t||{}).body;if(e instanceof Request){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new Headers(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new Headers(t.headers)),this.method=function normalizeMethod(e){var t=e.toUpperCase();return l.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var o=/([?&])_=[^&]*/;if(o.test(this.url))this.url=this.url.replace(o,"$1_="+(new Date).getTime());else{this.url+=(/\\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function decode(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),o=r.shift().replace(/\\+/g," "),n=r.join("=").replace(/\\+/g," ");t.append(decodeURIComponent(o),decodeURIComponent(n))}})),t}function Response(e,t){if(!(this instanceof Response))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new Headers(t.headers),this.url=t.url||"",this._initBody(e)}Request.prototype.clone=function(){return new Request(this,{body:this._bodyInit})},Body.call(Request.prototype),Body.call(Response.prototype),Response.prototype.clone=function(){return new Response(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new Headers(this.headers),url:this.url})},Response.error=function(){var e=new Response(null,{status:0,statusText:""});return e.type="error",e};var p=[301,302,303,307,308];Response.redirect=function(e,t){if(-1===p.indexOf(t))throw new RangeError("Invalid status code");return new Response(null,{status:t,headers:{location:e}})};var y=s.DOMException;try{new y}catch(B){(y=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),y.prototype.constructor=y}function fetch_fetch(e,t){return new Promise((function(r,o){var n=new Request(e,t);if(n.signal&&n.signal.aborted)return o(new y("Aborted","AbortError"));var i=new XMLHttpRequest;function abortXhr(){i.abort()}i.onload=function(){var e,t,o={status:i.status,statusText:i.statusText,headers:(e=i.getAllResponseHeaders()||"",t=new Headers,e.replace(/\\r?\\n[\\t ]+/g," ").split("\\r").map((function(e){return 0===e.indexOf("\\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();t.append(o,n)}})),t)};o.url="responseURL"in i?i.responseURL:o.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;setTimeout((function(){r(new Response(n,o))}),0)},i.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},i.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},i.onabort=function(){setTimeout((function(){o(new y("Aborted","AbortError"))}),0)},i.open(n.method,function fixUrl(e){try{return""===e&&s.location.href?s.location.href:e}catch(t){return e}}(n.url),!0),"include"===n.credentials?i.withCredentials=!0:"omit"===n.credentials&&(i.withCredentials=!1),"responseType"in i&&(u?i.responseType="blob":f&&n.headers.get("Content-Type")&&-1!==n.headers.get("Content-Type").indexOf("application/octet-stream")&&(i.responseType="arraybuffer")),!t||"object"!=typeof t.headers||t.headers instanceof Headers?n.headers.forEach((function(e,t){i.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){i.setRequestHeader(e,normalizeValue(t.headers[e]))})),n.signal&&(n.signal.addEventListener("abort",abortXhr),i.onreadystatechange=function(){4===i.readyState&&n.signal.removeEventListener("abort",abortXhr)}),i.send(void 0===n._bodyInit?null:n._bodyInit)}))}fetch_fetch.polyfill=!0,s.fetch||(s.fetch=fetch_fetch,s.Headers=Headers,s.Request=Request,s.Response=Response);var b=Object.defineProperty,m=Object.defineProperties,w=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&__defNormalProp(e,r,t[r]);if(g)for(var r of g(t))_.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>m(e,w(t));let A;!function createPromiseWorker(e){self.onmessage=function handleMessage(t){let r;try{r=JSON.parse(t.data)}catch(o){}if(r.pwId){r.params||(r.params=[]);const t=Array.isArray(r.params)?e[r.fn](...r.params):e[r.fn](r.params);t.then?t.then((e=>{postResult(e,r.pwId)})):postResult(t,r.pwId)}}}({getECO:async function getECO(e,t){const r=function formatFENsForECOLookup(e){return e.reverse().map((e=>e.split(" ").slice(0,3).join(" ")))}(e);return initDB(t).then((async()=>function getECOValuesFromDB(e){return Promise.all(e.map((e=>get(e,o))))}(r).then((e=>e.find(Boolean)))))},httpGet:async function http_get(e){return fetch(e.url,{method:"GET"}).then((e=>e.json()))},httpPost:async function post(e){return fetch(e.url,{body:JSON.stringify(__spreadProps(__spreadValues({},e.data),{_token:A})),method:"POST"}).then((e=>e.json()))},httpPut:async function put(e){return fetch(e.url,{body:JSON.stringify(__spreadProps(__spreadValues({},e.data),{_token:A})),method:"PUT"}).then((e=>e.json()))},setCSRFToken:function setCSRFToken(e){return A=e,Promise.resolve(A)}})}();', "Worker", void 0, void 0)
        }
        );
        var J = s(3527)
          , K = s.n(J);
        const X = function createOpeningsService() {
            const e = {};
            return {
                fetchFENStats: async function fetchFENStats(t, s) {
                    if (e[t])
                        return e[t];
                    const {data: n} = await v.Z.post(M._.fenStats(), {
                        fen: K().shortenFen(t, 3),
                        encodedMoves: s
                    });
                    return e[t] = n,
                    n
                }
            }
        }();
        var Q = s(1074);
        function setOpening(e) {
            Object.assign(Q.$, e)
        }
        async function loadOpening() {
            const e = (0,
            F.j)()
              , t = e.getSelectedNode()
              , s = e.getFEN()
              , n = e.getCurrentFullLine();
            setOpening({
                fen: s,
                isLoading: !0,
                stats: void 0,
                suggestedMoves: []
            });
            try {
                const o = await function getECO(e, t) {
                    return V.postMessage({
                        fn: "getECO",
                        params: [e, t]
                    }, 2e4).then((e=>e.data))
                }(e.getHistoryFENs(), window.Config.pathToEcoJson);
                if (!o)
                    return setOpening({
                        name: D.O.Config.Text.CustomPosition,
                        playedMoves: n,
                        isLoading: !1
                    });
                setOpening({
                    name: o.n,
                    playedMoves: n
                }),
                G.nn.includes(o.f) && setOpening({
                    name: D.O.Config.Text.StartingPosition
                });
                const r = await X.fetchFENStats(s);
                if (setOpening({
                    isLoading: !1
                }),
                !(null == r ? void 0 : r.stats))
                    return;
                setOpening({
                    stats: {
                        whiteWon: r.stats.whiteWon / 100,
                        blackWon: r.stats.blackWon / 100,
                        draw: r.stats.draw / 100,
                        totalGames: r.stats.totalGames
                    },
                    lastSanMove: null == t ? void 0 : t.san,
                    suggestedMoves: r.moves.map((e=>({
                        nextFen: e.fenString,
                        percentBlackWon: Math.round(e.blackWon),
                        percentDrawn: Math.round(e.draw),
                        percentWhiteWon: Math.round(e.whiteWon),
                        sanMove: e.move,
                        totalGames: e.totalGames
                    })))
                })
            } catch (o) {
                console.log({
                    error: o
                })
            }
        }
        var Y = s(53418)
          , ee = (0,
        n.aZ)({
            name: "OpeningsTabController",
            components: {
                OpeningsTabView: N,
                SidebarTabContent: o.Z
            },
            setup: ()=>((0,
            R.d)(j.Y.Events.Openings),
            (0,
            n.bv)(loadOpening),
            (0,
            n.YP)((()=>W.S.fen), loadOpening),
            {
                locked: (0,
                n.Fl)((()=>(0,
                L.p)() && Q.$.playedMoves.length >= 5)),
                isPremium: Y.E.checkMembershipStatus("isPremium"),
                opening: (0,
                n.Fl)((()=>Q.$)),
                onClickMove: function onClickMove({ply: e, move: t}) {
                    const s = (0,
                    F.j)();
                    t ? s.move({
                        san: t,
                        userGenerated: !0
                    }) : s.selectNode(0, null != e ? e : -1)
                },
                selectedPly: (0,
                n.Fl)((()=>W.S.selectedPly)),
                showFigurine: (0,
                n.Fl)(I.E),
                startingMoveNumber: (0,
                F.j)().getStartingMoveNumber()
            })
        })
          , te = (0,
        d.Z)(ee, (function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("sidebar-tab-content", [s("openings-tab-view", {
                attrs: {
                    locked: e.locked,
                    "is-premium": e.isPremium,
                    opening: e.opening,
                    "selected-ply": e.selectedPly,
                    "show-figurine": e.showFigurine,
                    "starting-move-number": e.startingMoveNumber
                },
                on: {
                    "click-move": e.onClickMove
                }
            })], 1)
        }
        ), [], !1, null, null, null).exports
    },
    20477: function(e) {
        e.exports = function(e, t, s, n) {
            var o = self || window;
            try {
                try {
                    var r;
                    try {
                        r = new o.Blob([e])
                    } catch (c) {
                        (r = new (o.BlobBuilder || o.WebKitBlobBuilder || o.MozBlobBuilder || o.MSBlobBuilder)).append(e),
                        r = r.getBlob()
                    }
                    var i = o.URL || o.webkitURL
                      , a = i.createObjectURL(r)
                      , l = new o[t](a,s);
                    return i.revokeObjectURL(a),
                    l
                } catch (c) {
                    return new o[t]("data:application/javascript,".concat(encodeURIComponent(e)),s)
                }
            } catch (c) {
                if (!n)
                    throw Error("Inline worker is not supported");
                return new o[t](n,s)
            }
        }
    }
}]);
