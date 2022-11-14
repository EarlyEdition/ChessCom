window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
    web_master_games_callback_player: {
        tokens: [["text", "/callback/games/player"]],
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
    web_game_live: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/game/live"]],
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
    i18n_web_game_live: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/game/live"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_game_pgn_view: {
        tokens: [["variable", "/", "[^/]++", "uuid"], ["text", "/pgns/view"]],
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
    web_game_computer: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/game/computer"]],
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
    i18n_web_game_computer: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/game/computer"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_master_games_view: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/games/view"]],
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
    i18n_web_master_games_view: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/games/view"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_game_daily: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/game/daily"]],
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
    i18n_web_game_daily: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/game/daily"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess-dev.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    }
}),
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[487], {
    55587: function(e, t, a) {
        function getFigurineIndex(e) {
            return e.san.search(/[BKNRQ]/)
        }
        a.d(t, {
            j: function() {
                return getFigurineIndex
            }
        })
    },
    69142: function(e, t, a) {
        a.d(t, {
            t: function() {
                return getIconName
            }
        });
        var n = a(19818)
          , s = a(55587);
        function getIconName(e) {
            const t = e.color === n.lB.WHITE ? n._l.WHITE : n._l.BLACK
              , a = e.san[(0,
            s.j)(e)];
            return `${n.gQ[a]}-${t}`
        }
    },
    77899: function(e, t, a) {
        a.d(t, {
            z: function() {
                return n
            }
        });
        var n = (e=>(e.ClientSide = "?",
        e.MissingValue = "-",
        e))(n || {})
    },
    30892: function(e, t, a) {
        a.d(t, {
            u: function() {
                return formatNumber
            }
        });
        var n = a(77899)
          , s = a(62023);
        function formatNumber({digits: e=2, defaultVal: t=n.z.MissingValue, value: a}) {
            var l;
            return a && null != (l = (0,
            s.jb)({
                method: Math.floor,
                number: a
            }).toFixed(e)) ? l : t
        }
    },
    92361: function(e, t, a) {
        a.d(t, {
            M: function() {
                return sortBy
            }
        });
        const sortBy = (e,t)=>[...e].sort(((e,a)=>e[t] > a[t] ? 1 : -1))
    },
    62023: function(e, t, a) {
        a.d(t, {
            jb: function() {
                return roundToDecimal
            },
            bs: function() {
                return getPercentages
            }
        });
        const roundToDecimal = ({decimals: e=1, method: t=Math.round, number: a})=>{
            const n = 10 ** e;
            return t(a * n) / n
        }
        ;
        function getPercentages(e, t) {
            const {decimalPlaces: a, total: n} = Object.assign({
                total: void 0,
                collection: [],
                decimalPlaces: 1
            }, t)
              , s = n || e.reduce(((e,t)=>e + t))
              , l = 100 * 10 ** a
              , r = e.map((e=>Math.round(e / s * l)))
              , o = r.reduce(((e,t)=>e + t))
              , i = l - o;
            return r[r.length - 1] += i,
            r.map((e=>e / 10 ** a))
        }
    },
    42910: function(e, t, a) {
        a.d(t, {
            vV: function() {
                return isValidEmail
            },
            Ip: function() {
                return isValidZipCode
            },
            jv: function() {
                return isValidUrl
            }
        });
        const isValidEmail = e=>/^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(e)
          , isValidZipCode = e=>/^[0-9]{5}(?:-[0-9]{4})?$/.test(e)
          , isValidUrl = e=>/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-/]))?/.test(e)
    },
    61891: function(e, t, a) {
        a.d(t, {
            d: function() {
                return logSidebarEvent
            }
        });
        var n = a(67104)
          , s = a(75700)
          , l = a(67858)
          , r = a(51878)
          , o = a(32614);
        function logSidebarEvent(e) {
            (0,
            s.K)(e, {
                gameType: l.X.gameType,
                opponent: function getOpponent() {
                    const e = (0,
                    r.D)();
                    if (e === n.lA.ColorsAsWords.White)
                        return o.S.headers.Black;
                    if (e === n.lA.ColorsAsWords.Black)
                        return o.S.headers.White;
                    return null
                }(),
                result: o.S.headers.Result
            })
        }
    },
    59469: function(e, t, a) {
        a.d(t, {
            E: function() {
                return getShowFigurine
            }
        });
        var n = a(67104)
          , s = a(32751);
        function getShowFigurine() {
            return (0,
            s.T)().moveListDisplayType === n.$l.MoveListDisplayTypes.Figurine
        }
    },
    2047: function(e, t, a) {
        a.d(t, {
            o: function() {
                return translateMoveText
            }
        });
        var n = a(19818);
        function getTranslation(e) {
            return (0,
            n.FI)()[e]
        }
        function translateMoveText(e) {
            return e.includes("O-O") ? e : e.replace(/[BKNRQ]/g, getTranslation)
        }
    },
    45908: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return c
            }
        });
        var n = a(67104)
          , s = a(55587)
          , l = a(69142)
          , r = a(2047)
          , o = {
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
                            l.t)({
                                color: e,
                                san: this.san
                            }),
                            index: (0,
                            s.j)({
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
                    r.o)(t) : t
                }
            }
        }
          , i = {
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
        a(51900).Z)(o, (function() {
            var e, t, a = this, n = a.$createElement, s = a._self._c || n;
            return s("span", a._g({
                class: [a.$style.component, (e = {},
                e[a.$style.highlighted] = a.highlighted,
                e)]
            }, a.$listeners), [a.premoveText ? s("span", {
                class: a.$style.premove,
                domProps: {
                    textContent: a._s(a.premoveText)
                }
            }) : a._e(), a._v(" "), s("span", {
                class: a.$style.highlight
            }, [a.figurineSan ? [s("span", {
                class: a.$style.san,
                attrs: {
                    "data-cy": "move-san-san"
                },
                domProps: {
                    textContent: a._s(a.figurineSan.beforeFigurine)
                }
            }), a._v(" "), s("span", {
                ref: "figurine",
                class: [a.$style.figurine, "icon-font-chess", a.figurine.icon, (t = {},
                t[a.$style.trailing] = a.isTrailing,
                t)]
            }), s("span", {
                class: a.$style.afterfigurine,
                domProps: {
                    textContent: a._s(a.figurineSan.afterFigurine)
                }
            })] : s("span", {
                class: a.$style.san,
                attrs: {
                    "data-cy": "move-san-text"
                },
                domProps: {
                    textContent: a._s(a.translatedSan)
                }
            })], 2), a._v(" "), a.postmoveText ? s("span", {
                class: a.$style.postmove,
                domProps: {
                    textContent: a._s(a.postmoveText)
                }
            }) : a._e()])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = i.locals || i
        }
        ), null, null).exports
    },
    5601: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return l
            }
        });
        var n = {
            name: "IconToggle",
            components: {
                IconFont: a(35559).Z
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
          , s = {
            icon: "icon-toggle-icon",
            off: "icon-toggle-off"
        };
        var l = (0,
        a(51900).Z)(n, (function() {
            var e, t = this, a = t.$createElement;
            return (t._self._c || a)("icon-font", {
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
            this.$style = s.locals || s
        }
        ), null, null).exports
    },
    73665: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return l
            }
        });
        var n = {
            name: "SidebarTabContent"
        }
          , s = {
            component: "sidebar-tab-content-component"
        };
        var l = (0,
        a(51900).Z)(n, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                class: e.$style.component
            }, [e._t("default")], 2)
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = s.locals || s
        }
        ), null, null).exports
    },
    51246: function(e, t, a) {
        a.d(t, {
            X: function() {
                return n
            },
            Z: function() {
                return c
            }
        });
        var n, s = a(92866), l = a(5601), r = a(63930);
        (e=>{
            let t;
            var a;
            (a = t = e.Slots || (e.Slots = {})).Left = "left",
            a.Right = "right"
        }
        )(n || (n = {}));
        var o = (0,
        s.aZ)({
            name: "Row",
            components: {
                IconToggle: l.Z
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
                const a = (0,
                s.Fl)((()=>{
                    var t, a;
                    return [{
                        name: "left",
                        value: null == (t = e.data) ? void 0 : t.white
                    }, {
                        name: "right",
                        value: null == (a = e.data) ? void 0 : a.black
                    }]
                }
                ));
                return {
                    showData: (0,
                    s.Fl)((()=>e.data || (0,
                    r.u8)(t))),
                    showToggle: (0,
                    s.Fl)((()=>e.toggleIcon && e.data && !e.isLocked)),
                    slotsContent: a
                }
            }
        })
          , i = {
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
        a(51900).Z)(o, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a(e.elementType, {
                tag: "component",
                class: e.$style.component
            }, [a("div", {
                class: e.$style.label
            }, [e._t("label", (function() {
                return [e.icon ? a("span", {
                    class: e.$style.icon,
                    domProps: {
                        innerHTML: e._s(e.icon)
                    }
                }) : e._e(), e._v("\n      " + e._s(e.label) + "\n    ")]
            }
            ))], 2), e._v(" "), e.showData ? a("div", {
                class: e.$style.data
            }, e._l(e.slotsContent, (function(t) {
                return a("div", {
                    key: t.name,
                    class: e.$style.value
                }, [e._t(t.name, (function() {
                    return [e.isLocked ? a("span", {
                        class: ["icon-font-chess lock", e.$style.lock]
                    }) : a("span", {
                        domProps: {
                            textContent: e._s(t.value)
                        }
                    })]
                }
                ))], 2)
            }
            )), 0) : e._e(), e._v(" "), e.showToggle ? a("div", {
                class: [e.$style.value, e.$style.toggle]
            }, [e._t("toggle", (function() {
                return [a("icon-toggle", {
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
            this.$style = i.locals || i
        }
        ), null, null).exports
    },
    32990: function(e, t, a) {
        a.r(t),
        a.d(t, {
            default: function() {
                return we
            }
        });
        var n = a(92866)
          , s = a(27359)
          , l = a(61682)
          , r = a(33712)
          , o = a(19578)
          , i = a(92361)
          , c = a(32305);
        function getCountryOptions() {
            return o.Y.countries ? (0,
            i.M)([{
                value: "",
                label: `-- ${(0,
                c.dW)("Country")} --`
            }, {
                value: "fd",
                label: (0,
                c.dW)("FIDE")
            }, ...Object.keys(o.Y.countries).map((e=>({
                label: o.Y.countries[e],
                value: e
            })))], "label") : []
        }
        var u = a(73665)
          , d = a(45908)
          , h = (0,
        n.aZ)({
            name: "DetailsSection"
        })
          , m = {
            bold: "details-section-bold",
            header: "details-section-header",
            inactive: "details-section-inactive",
            scrollable: "details-section-scrollable",
            component: "details-section-component",
            content: "details-section-content"
        }
          , p = a(51900);
        var v = (0,
        p.Z)(h, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("section", {
                class: e.$style.component
            }, [e._t("default", (function() {
                return [a("header", {
                    class: e.$style.header
                }, [e._t("header")], 2), e._v(" "), a("div", {
                    class: e.$style.content
                }, [e._t("content")], 2)]
            }
            ))], 2)
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = m.locals || m
        }
        ), null, null).exports
          , y = (0,
        n.aZ)({
            name: "DetailsOpening",
            components: {
                DetailsSection: v,
                MoveSan: d.Z
            },
            props: {
                bookPly: Number,
                opening: String,
                nodeLeavingBook: Object,
                scoreLeavingBook: String,
                showFigurine: Boolean
            }
        })
          , f = {
            component: "details-opening-component",
            row: "details-opening-row"
        };
        var g = (0,
        p.Z)(y, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("DetailsSection", {
                class: e.$style.component,
                scopedSlots: e._u([{
                    key: "header",
                    fn: function() {
                        return [e._v("\n    " + e._s(e.$trans("Opening")) + "\n  ")]
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        return [e.opening ? a("div", {
                            class: e.$style.row
                        }, [a("div", {
                            domProps: {
                                textContent: e._s(e.$trans("ECO Classification"))
                            }
                        }), e._v(" "), a("div", {
                            class: e.$style.eco,
                            domProps: {
                                textContent: e._s(e.opening)
                            }
                        })]) : e._e(), e._v(" "), e.bookPly ? a("div", {
                            class: e.$style.row
                        }, [a("div", {
                            domProps: {
                                textContent: e._s(e.$trans("Book Moves"))
                            }
                        }), e._v(" "), a("div", {
                            domProps: {
                                textContent: e._s(e.bookPly)
                            }
                        })]) : e._e(), e._v(" "), e.scoreLeavingBook ? a("div", {
                            class: e.$style.row
                        }, [a("div", {
                            domProps: {
                                textContent: e._s(e.$trans("Score Leaving Book"))
                            }
                        }), e._v(" "), a("div", {
                            domProps: {
                                textContent: e._s(e.scoreLeavingBook)
                            }
                        })]) : e._e(), e._v(" "), e.nodeLeavingBook ? a("div", {
                            class: e.$style.row
                        }, [a("div", {
                            domProps: {
                                textContent: e._s(e.$trans("Move Leaving Book"))
                            }
                        }), e._v(" "), a("move-san", {
                            class: e.$style.san,
                            attrs: {
                                color: e.nodeLeavingBook.color,
                                san: e.nodeLeavingBook.san,
                                "show-figurine": e.showFigurine
                            }
                        })], 1) : e._e()]
                    },
                    proxy: !0
                }])
            })
        }
        ), [], !1, (function details_opening_injectStyles(e) {
            this.$style = f.locals || f
        }
        ), null, null).exports
          , b = a(51246)
          , k = (0,
        n.aZ)({
            name: "DetailsPerformanceByPiece",
            components: {
                DetailsSection: v,
                DetailsRow: b.Z
            },
            props: {
                tables: {
                    type: Array,
                    default: ()=>[]
                }
            }
        })
          , w = {
            component: "details-performance-by-piece-component",
            table: "details-performance-by-piece-table",
            icon: "details-performance-by-piece-icon"
        };
        var _ = (0,
        p.Z)(k, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.tables.length ? a("details-section", {
                class: e.$style.component,
                scopedSlots: e._u([{
                    key: "header",
                    fn: function() {
                        return [a("details-row", {
                            class: e.$style.title,
                            attrs: {
                                label: e.$trans("Performance by Piece"),
                                data: {
                                    black: e.$trans("Black"),
                                    white: e.$trans("White")
                                }
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        return [a("div", {
                            class: e.$style.content
                        }, e._l(e.tables, (function(t) {
                            return a("div", {
                                key: t.label,
                                class: e.$style.table
                            }, [a("span", {
                                class: [e.$style.icon, t.icon, "icon-font-chess"]
                            }), e._v(" "), e._l(t.rows, (function(t, n) {
                                return a("details-row", e._b({
                                    key: n,
                                    class: [t.className, e.$style.row]
                                }, "details-row", t, !1))
                            }
                            ))], 2)
                        }
                        )), 0)]
                    },
                    proxy: !0
                }], null, !1, 1561754997)
            }) : e._e()
        }
        ), [], !1, (function details_performance_by_piece_injectStyles(e) {
            this.$style = w.locals || w
        }
        ), null, null).exports
          , $ = (0,
        n.aZ)({
            name: "DetailsTable",
            components: {
                DetailsSection: v,
                DetailsRow: b.Z
            },
            props: {
                rows: {
                    type: Array,
                    default: ()=>[]
                },
                title: {
                    type: String
                }
            }
        })
          , S = {
            component: "details-table-component"
        };
        var C = (0,
        p.Z)($, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.rows.length ? a("details-section", {
                class: e.$style.component,
                scopedSlots: e._u([{
                    key: "header",
                    fn: function() {
                        return [e.title ? a("details-row", {
                            class: e.$style.title,
                            attrs: {
                                label: e.title,
                                data: {
                                    black: e.$trans("Black"),
                                    white: e.$trans("White")
                                }
                            }
                        }) : e._e()]
                    },
                    proxy: !0
                }, {
                    key: "content",
                    fn: function() {
                        return e._l(e.rows, (function(t, n) {
                            return a("details-row", e._b({
                                key: n,
                                class: [t.className, e.$style.row]
                            }, "details-row", t, !1))
                        }
                        ))
                    },
                    proxy: !0
                }], null, !1, 408427335)
            }) : e._e()
        }
        ), [], !1, (function details_table_injectStyles(e) {
            this.$style = S.locals || S
        }
        ), null, null).exports
          , x = a(56279)
          , P = a(6898)
          , T = (0,
        n.aZ)({
            name: "IconButton",
            directives: {
                tooltip: P.Z
            },
            props: {
                icon: {
                    type: String,
                    required: !0
                },
                text: {
                    type: String
                },
                off: {
                    type: Boolean,
                    default: !1
                },
                small: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                showText: {
                    type: Boolean,
                    default: !0
                },
                flipIcon: {
                    type: Boolean,
                    default: !1
                },
                tooltipContent: {
                    type: String,
                    defaut: ""
                },
                tooltipPosition: {
                    type: String,
                    default: "top"
                }
            },
            emits: ["click", "mousedown", "mouseup"],
            computed: {
                componentClasses() {
                    return {
                        [this.$style.button]: !0,
                        [this.$style.off]: this.off,
                        [this.$style.small]: this.small,
                        [this.$style.flip]: this.flipIcon
                    }
                },
                tooltip() {
                    return this.tooltipContent ? {
                        content: this.tooltipContent,
                        position: this.tooltipPosition
                    } : this.text && !this.showText ? {
                        content: this.text,
                        position: this.tooltipPosition
                    } : null
                }
            },
            methods: {
                onClick(e) {
                    this.disabled || this.$emit("click", e)
                }
            }
        })
          , M = {
            button: "icon-button-button",
            text: "icon-button-text",
            off: "icon-button-off",
            small: "icon-button-small"
        };
        var B = (0,
        p.Z)(T, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.tooltip,
                    expression: "tooltip"
                }],
                class: e.componentClasses,
                attrs: {
                    disabled: e.disabled
                },
                on: {
                    click: e.onClick,
                    mousedown: function(t) {
                        return e.$emit("mousedown", t)
                    },
                    mouseup: function(t) {
                        return e.$emit("mouseup", t)
                    }
                }
            }, [a("span", {
                class: ["icon-font-chess", e.icon]
            }), e._v(" "), e.showText && e.text ? a("span", {
                class: e.$style.text,
                domProps: {
                    textContent: e._s(e.text)
                }
            }) : e._e(), e._v(" "), e._t("default")], 2)
        }
        ), [], !1, (function icon_button_injectStyles(e) {
            this.$style = M.locals || M
        }
        ), null, null).exports
          , z = a(17828)
          , W = a(42910)
          , F = (0,
        n.aZ)({
            name: "GameDetailsPlayer",
            components: {
                V5Input: x.V5Input,
                V5Select: x.V5Select,
                Avatar: z.Z
            },
            props: {
                player: {
                    type: Object,
                    required: !0
                },
                readOnly: {
                    type: Boolean,
                    required: !0
                },
                countryOptions: {
                    type: Array,
                    required: !0
                }
            },
            emits: ["update-player"],
            data() {
                return {
                    title: this.player.title,
                    avatarUrl: this.player.avatarUrl,
                    country: this.player.country
                }
            },
            computed: {
                titleOptions() {
                    return [{
                        value: "",
                        label: `-- ${this.$trans("Title")} --`
                    }, {
                        value: "GM",
                        label: "GM"
                    }, {
                        value: "IM",
                        label: "IM"
                    }, {
                        value: "FM",
                        label: "FM"
                    }, {
                        value: "WGM",
                        label: "WGM"
                    }, {
                        value: "WIM",
                        label: "WIM"
                    }, {
                        value: "WFM",
                        label: "WFM"
                    }, {
                        value: "CM",
                        label: "CM"
                    }, {
                        value: "WCM",
                        label: "WCM"
                    }, {
                        value: "NM",
                        label: "NM"
                    }]
                },
                validAvatarUrl() {
                    return this.avatarUrl && (0,
                    W.jv)(this.avatarUrl) ? this.avatarUrl : null
                }
            },
            watch: {
                title: "onChange",
                avatarUrl: "onChange",
                country: "onChange",
                player: "onChange"
            },
            methods: {
                onChange(e) {
                    this.$emit("update-player", {
                        player: {
                            avatarUrl: this.avatarUrl,
                            country: this.country,
                            title: this.title
                        }
                    }),
                    (e.avatarUrl || e.country || e.title) && (this.avatarUrl = this.player.avatarUrl,
                    this.country = this.player.country,
                    this.title = this.player.title)
                }
            }
        })
          , j = {
            component: "game-details-player-component",
            avatar: "game-details-player-avatar",
            fields: "game-details-player-fields",
            select: "game-details-player-select"
        };
        var I = (0,
        p.Z)(F, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("avatar", {
                class: e.$style.avatar,
                attrs: {
                    width: "105",
                    height: "105",
                    src: e.avatarUrl
                }
            }), e._v(" "), a("div", {
                class: e.$style.fields
            }, [a("v5-select", {
                class: e.$style.select,
                attrs: {
                    "value-key": "value",
                    "aria-label": e.$trans("Title"),
                    options: e.titleOptions,
                    disabled: e.readOnly
                },
                model: {
                    value: e.title,
                    callback: function(t) {
                        e.title = t
                    },
                    expression: "title"
                }
            }), e._v(" "), a("v5-select", {
                class: e.$style.select,
                attrs: {
                    "value-key": "value",
                    "aria-label": e.$trans("Country"),
                    options: e.countryOptions,
                    disabled: e.readOnly
                },
                model: {
                    value: e.country,
                    callback: function(t) {
                        e.country = t
                    },
                    expression: "country"
                }
            }), e._v(" "), a("v5-input", {
                class: e.$style.input,
                attrs: {
                    "aria-label": e.$trans("Avatar URL"),
                    placeholder: e.$trans("Avatar URL"),
                    disabled: e.readOnly
                },
                model: {
                    value: e.avatarUrl,
                    callback: function(t) {
                        e.avatarUrl = t
                    },
                    expression: "avatarUrl"
                }
            })], 1)], 1)
        }
        ), [], !1, (function game_details_player_injectStyles(e) {
            this.$style = j.locals || j
        }
        ), null, null).exports
          , O = a(65116)
          , D = a(70917)
          , H = a(37398)
          , R = (0,
        n.aZ)({
            name: "UsernameWithSearch",
            components: {
                FormAutocomplete: H.Z,
                V5Input: x.V5Input
            },
            props: {
                exceptionMessage: String,
                isSearching: Boolean,
                placeholder: String,
                query: String,
                readOnly: Boolean,
                searchResults: {
                    type: Array,
                    default: ()=>[]
                },
                username: String
            },
            emits: ["blur", "clear", "search", "select"],
            setup(e, {emit: t}) {
                const a = (0,
                n.iH)(Boolean(e.query && !e.readOnly));
                return {
                    showAutocomplete: a,
                    onBlur: function onBlur() {
                        t("blur"),
                        hideAutocompleteIfNoQuery()
                    },
                    onClear: function onClear() {
                        t("clear"),
                        hideAutocompleteIfNoQuery()
                    },
                    onFocus: function onFocus() {
                        a.value = !0
                    },
                    onSelect: function onSelect(e) {
                        t("select", {
                            selected: e
                        }),
                        hideAutocompleteIfNoQuery()
                    }
                };
                function hideAutocompleteIfNoQuery() {
                    e.query && (a.value = !1)
                }
            }
        })
          , E = {
            field: "username-with-search-field",
            text: "username-with-search-text"
        };
        var L = (0,
        p.Z)(R, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.showAutocomplete ? a("form-autocomplete", {
                ref: "autocomplete",
                attrs: {
                    "label-key": "text",
                    "dropdown-options": e.searchResults,
                    "exception-message": e.exceptionMessage,
                    "initial-input-value": e.username,
                    "input-placeholder": e.placeholder,
                    "is-searching": e.isSearching,
                    "right-icon": null,
                    autofocus: "",
                    popover: ""
                },
                on: {
                    blur: e.onBlur,
                    "clear-input": e.onClear,
                    keyup: function(t) {
                        return e.$emit("search", {
                            query: t
                        })
                    },
                    selected: e.onSelect
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("div", {
                            class: e.$style.field
                        }, [a("span", {
                            class: e.$style.text,
                            domProps: {
                                textContent: e._s(t.option.text)
                            }
                        })])]
                    }
                }], null, !1, 3645399093)
            }) : a("v5-input", {
                attrs: {
                    "aria-label": e.placeholder,
                    placeholder: e.placeholder,
                    value: e.username,
                    disabled: e.readOnly
                },
                on: {
                    focus: function(t) {
                        return t.preventDefault(),
                        e.onFocus.apply(null, arguments)
                    }
                }
            })
        }
        ), [], !1, (function username_with_search_injectStyles(e) {
            this.$style = E.locals || E
        }
        ), null, null)
          , Z = L.exports;
        const A = [{
            label: (0,
            c.dW)("No Result (*)"),
            value: "*"
        }, {
            label: (0,
            c.dW)("White Won (1-0)"),
            value: "1-0"
        }, {
            label: (0,
            c.dW)("Black Won (0-1)"),
            value: "0-1"
        }, {
            label: (0,
            c.dW)("Draw (1/2-1/2)"),
            value: "1/2-1/2"
        }];
        var N = (0,
        n.aZ)({
            name: "DetailsForm",
            components: {
                GameDetailsPlayer: I,
                IconButton: B,
                UsernameWithSearch: Z,
                V5Input: x.V5Input,
                V5Select: x.V5Select
            },
            directives: {
                datepicker: O.Z
            },
            props: {
                countries: {
                    type: Array,
                    default: ()=>[]
                },
                gameURL: String,
                headers: {
                    type: Object,
                    default: ()=>({})
                },
                masterPlayerSearch: Object,
                readOnly: {
                    type: Boolean,
                    default: !1
                },
                termination: String,
                timeControl: String
            },
            emits: ["blur", "clear", "search", "select", "set-header", "start-search"],
            setup(e, {emit: t}) {
                const a = (0,
                n.iH)(!1)
                  , s = (0,
                n.iH)(!1)
                  , l = (0,
                n.Fl)((()=>{
                    var t;
                    return null == (t = e.masterPlayerSearch) ? void 0 : t.results.map((e=>({
                        text: e.name
                    })))
                }
                ));
                return {
                    getHeader: getHeader,
                    getPlayerDetails: function getPlayerDetails(t) {
                        return {
                            avatarUrl: getHeader(e.headers[`${t}Url`]),
                            country: getHeader(e.headers[`${t}Country`]),
                            title: getHeader(e.headers[`${t}Title`])
                        }
                    },
                    isBlackInfoVisible: a,
                    isWhiteInfoVisible: s,
                    onClickDatepicker: {
                        onDateSelect: e=>setHeader({
                            Date: e
                        }),
                        format: "YYYY.MM.DD",
                        placement: "left",
                        replaceWith: "?"
                    },
                    onClickBlackInfo: function onClickBlackInfo() {
                        a.value = !a.value
                    },
                    onClickWhiteInfo: function onClickWhiteInfo() {
                        s.value = !s.value
                    },
                    onUpdateBlackPlayer: function onUpdateBlackPlayer({player: e}) {
                        setHeader(getHeadersFromPlayerDetails("Black", e))
                    },
                    onUpdateWhitePlayer: function onUpdateWhitePlayer({player: e}) {
                        setHeader(getHeadersFromPlayerDetails("White", e))
                    },
                    result: (0,
                    n.Fl)((()=>{
                        var t;
                        return null != (t = e.headers.Result) ? t : "*"
                    }
                    )),
                    resultsConfig: A,
                    searchResults: l,
                    setHeader: setHeader
                };
                function getHeadersFromPlayerDetails(e, t) {
                    return {
                        [`${e}Url`]: t.avatarUrl,
                        [`${e}Country`]: t.country,
                        [`${e}Title`]: t.title
                    }
                }
                function getHeader(e) {
                    return e && "?" !== e ? (0,
                    D.Ak)(e) : ""
                }
                function setHeader(e) {
                    t("set-header", e)
                }
            }
        })
          , q = {
            component: "details-form-component",
            controls: "details-form-controls",
            normal: "details-form-normal",
            short: "details-form-short",
            source: "details-form-source",
            datewrapper: "details-form-datewrapper",
            date: "details-form-date",
            disabled: "details-form-disabled",
            button: "details-form-button",
            withbutton: "details-form-withbutton",
            info: "details-form-info",
            wide: "details-form-wide",
            icon: "details-form-icon",
            spaced: "details-form-spaced"
        };
        var U = (0,
        p.Z)(N, (function() {
            var e, t, a = this, n = a.$createElement, s = a._self._c || n;
            return s("div", {
                class: a.$style.component
            }, [a.gameURL ? s("div", {
                class: a.$style.source
            }, [a._v("\n    " + a._s(a.$trans("Source")) + ": "), s("a", {
                attrs: {
                    href: a.gameURL
                }
            }, [a._v(a._s(a.gameURL))])]) : a._e(), a._v(" "), s("div", {
                class: a.$style.controls
            }, [s("div", {
                class: [a.$style.normal, a.$style.withbutton]
            }, [s("username-with-search", {
                attrs: {
                    "is-searching": a.masterPlayerSearch.isSearching,
                    "exception-message": a.masterPlayerSearch.exception,
                    "search-results": a.searchResults,
                    placeholder: a.$trans("White Player"),
                    query: a.masterPlayerSearch.query,
                    "read-only": a.readOnly,
                    username: a.getHeader(a.headers.White),
                    "data-cy": "details-white-player-input-form"
                },
                on: {
                    blur: function(e) {
                        return a.$emit("blur")
                    },
                    clear: function(e) {
                        return a.$emit("clear")
                    },
                    search: function(e) {
                        return a.$emit("search", Object.assign({}, e, {
                            color: "white"
                        }))
                    },
                    select: function(e) {
                        return a.$emit("select", Object.assign({}, e, {
                            color: "white"
                        }))
                    }
                }
            }), a._v(" "), s("icon-button", {
                class: a.$style.info,
                attrs: {
                    icon: "circle-info"
                },
                on: {
                    click: a.onClickWhiteInfo
                }
            })], 1), a._v(" "), s("v5-input", {
                class: a.$style.short,
                attrs: {
                    "aria-label": a.$trans("Rating"),
                    placeholder: a.$trans("Rating"),
                    value: a.getHeader(a.headers.WhiteElo),
                    disabled: a.readOnly,
                    "data-cy": "details-white-player-rating-input-form"
                },
                on: {
                    input: function(e) {
                        return a.setHeader({
                            WhiteElo: e
                        })
                    }
                }
            })], 1), a._v(" "), a.isWhiteInfoVisible ? s("game-details-player", {
                attrs: {
                    "country-options": a.countries,
                    player: a.getPlayerDetails("White"),
                    "read-only": a.readOnly
                },
                on: {
                    "update-player": a.onUpdateWhitePlayer
                }
            }) : a._e(), a._v(" "), s("div", {
                class: a.$style.controls
            }, [s("div", {
                class: [a.$style.normal, a.$style.withbutton]
            }, [s("username-with-search", {
                attrs: {
                    "is-searching": a.masterPlayerSearch.isSearching,
                    "exception-message": a.masterPlayerSearch.exception,
                    "search-results": a.searchResults,
                    placeholder: a.$trans("Black Player"),
                    query: a.masterPlayerSearch.query,
                    "read-only": a.readOnly,
                    username: a.getHeader(a.headers.Black),
                    "data-cy": "details-black-player-input-form"
                },
                on: {
                    blur: function(e) {
                        return a.$emit("blur")
                    },
                    clear: function(e) {
                        return a.$emit("clear")
                    },
                    search: function(e) {
                        return a.$emit("search", Object.assign({}, e, {
                            color: "black"
                        }))
                    },
                    select: function(e) {
                        return a.$emit("select", Object.assign({}, e, {
                            color: "black"
                        }))
                    }
                }
            }), a._v(" "), s("icon-button", {
                class: a.$style.info,
                attrs: {
                    icon: "circle-info"
                },
                on: {
                    click: a.onClickBlackInfo
                }
            })], 1), a._v(" "), s("v5-input", {
                class: a.$style.short,
                attrs: {
                    "aria-label": a.$trans("Rating"),
                    placeholder: a.$trans("Rating"),
                    value: a.getHeader(a.headers.BlackElo),
                    disabled: a.readOnly,
                    "data-cy": "details-black-player-rating-input-form"
                },
                on: {
                    input: function(e) {
                        return a.setHeader({
                            BlackElo: e
                        })
                    }
                }
            })], 1), a._v(" "), a.isBlackInfoVisible ? s("game-details-player", {
                attrs: {
                    "country-options": a.countries,
                    player: a.getPlayerDetails("Black"),
                    "read-only": a.readOnly
                },
                on: {
                    "update-player": a.onUpdateBlackPlayer
                }
            }) : a._e(), a._v(" "), s("div", {
                class: a.$style.controls
            }, [s("v5-select", {
                class: [a.$style.wide, a.$style.select, (e = {},
                e[a.$style.disabled] = a.readOnly,
                e)],
                attrs: {
                    "value-key": "value",
                    "aria-label": a.$trans("Results"),
                    options: a.resultsConfig,
                    value: a.result,
                    disabled: a.readOnly,
                    "data-cy": "details-result-input-form"
                },
                on: {
                    input: function(e) {
                        return a.setHeader({
                            Result: e
                        })
                    }
                }
            })], 1), a._v(" "), s("div", {
                class: [a.$style.controls, a.$style.spaced]
            }, [s("v5-input", {
                class: a.$style.wide,
                attrs: {
                    "aria-label": a.$trans("Event"),
                    placeholder: a.$trans("Event"),
                    value: a.getHeader(a.headers.Event),
                    disabled: a.readOnly,
                    "data-cy": "details-event-input-form"
                },
                on: {
                    input: function(e) {
                        return a.setHeader({
                            Event: e
                        })
                    }
                }
            })], 1), a._v(" "), s("div", {
                class: [a.$style.controls, a.$style.spaced]
            }, [s("v5-input", {
                class: a.$style.wide,
                attrs: {
                    "aria-label": a.$trans("Time"),
                    placeholder: a.$trans("Time Control"),
                    value: a.timeControl,
                    disabled: a.readOnly,
                    "data-cy": "details-time-control-input-form"
                },
                on: {
                    input: function(e) {
                        return a.setHeader({
                            TimeControl: e
                        })
                    }
                }
            })], 1), a._v(" "), s("div", {
                class: [a.$style.controls, a.$style.spaced]
            }, [s("v5-input", {
                class: a.$style.wide,
                attrs: {
                    "aria-label": a.$trans("Termination"),
                    placeholder: a.$trans("Termination"),
                    value: a.termination,
                    disabled: a.readOnly,
                    "data-cy": "details-termination-input-form"
                },
                on: {
                    input: function(e) {
                        return a.setHeader({
                            Termination: e
                        })
                    }
                }
            })], 1), a._v(" "), s("div", {
                class: a.$style.controls
            }, [s("v5-input", {
                class: a.$style.wide,
                attrs: {
                    "aria-label": a.$trans("Location"),
                    placeholder: a.$trans("Location"),
                    value: a.getHeader(a.headers.Site),
                    disabled: a.readOnly,
                    "data-cy": "details-location-input-form"
                },
                on: {
                    input: function(e) {
                        return a.setHeader({
                            Site: e
                        })
                    }
                }
            })], 1), a._v(" "), s("div", {
                class: a.$style.controls
            }, [s("v5-input", {
                class: a.$style.short,
                attrs: {
                    "aria-label": a.$trans("Round"),
                    placeholder: a.$trans("Round"),
                    value: a.getHeader(a.headers.Round),
                    disabled: a.readOnly,
                    "data-cy": "details-round-input-form"
                },
                on: {
                    input: function(e) {
                        return a.setHeader({
                            Round: e
                        })
                    }
                }
            }), a._v(" "), s("v5-input", {
                class: a.$style.eco,
                attrs: {
                    "aria-label": "ECO",
                    placeholder: "ECO",
                    value: a.headers.ECO,
                    disabled: a.readOnly,
                    "data-cy": "details-ECO-input-form"
                },
                on: {
                    input: function(e) {
                        return a.setHeader({
                            ECO: e
                        })
                    }
                }
            }), a._v(" "), s("div", {
                class: a.$style.datewrapper
            }, [s("v5-input", {
                directives: [{
                    name: "datepicker",
                    rawName: "v-datepicker:click",
                    value: a.onClickDatepicker,
                    expression: "onClickDatepicker",
                    arg: "click"
                }],
                class: [a.$style.date, (t = {},
                t[a.$style.disabled] = a.readOnly,
                t)],
                attrs: {
                    "aria-label": a.$trans("Date"),
                    placeholder: a.$trans("Date"),
                    disabled: a.readOnly,
                    value: a.headers.Date,
                    "data-cy": "details-date-input-form"
                },
                on: {
                    input: function(e) {
                        return a.setHeader({
                            Date: e
                        })
                    }
                }
            }), a._v(" "), a.readOnly ? a._e() : s("button", {
                directives: [{
                    name: "datepicker",
                    rawName: "v-datepicker:click",
                    value: a.onClickDatepicker,
                    expression: "onClickDatepicker",
                    arg: "click"
                }],
                class: a.$style.button,
                attrs: {
                    type: "button",
                    "aria-label": a.$trans("Show Calendar")
                }
            }, [s("span", {
                staticClass: "icon-font-chess calendar",
                class: a.$style.icon,
                attrs: {
                    "data-cy": "details-calendar-display"
                }
            })])], 1)], 1)], 1)
        }
        ), [], !1, (function details_form_injectStyles(e) {
            this.$style = q.locals || q
        }
        ), null, null).exports
          , G = (0,
        n.aZ)({
            name: "DetailsTabView",
            components: {
                DetailsForm: U
            },
            props: {
                countries: {
                    type: Array,
                    default: ()=>[]
                },
                gameUrl: String,
                headers: Object,
                masterPlayerSearch: Object,
                readOnly: Boolean,
                termination: String,
                timeControl: String
            },
            emits: ["blur", "clear", "search", "select", "set-header"]
        })
          , K = {
            component: "details-view-component"
        };
        var V = (0,
        p.Z)(G, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("details-form", {
                attrs: {
                    countries: e.countries,
                    "game-url": e.gameUrl,
                    headers: e.headers,
                    "read-only": e.readOnly,
                    "master-player-search": e.masterPlayerSearch,
                    termination: e.termination,
                    "time-control": e.timeControl
                },
                on: {
                    blur: function(t) {
                        return e.$emit("blur")
                    },
                    clear: function(t) {
                        return e.$emit("clear")
                    },
                    search: function(t) {
                        return e.$emit("search", t)
                    },
                    select: function(t) {
                        return e.$emit("select", t)
                    },
                    "set-header": function(t) {
                        return e.$emit("set-header", t)
                    }
                }
            }), e._v(" "), e._t("content")], 2)
        }
        ), [], !1, (function details_view_injectStyles(e) {
            this.$style = K.locals || K
        }
        ), null, null).exports
          , Q = a(61891)
          , J = a(49458)
          , Y = a(34104)
          , X = a(58819)
          , ee = a(64099)
          , te = a(923)
          , ae = a(59469)
          , ne = a(1463)
          , se = a(67858)
          , le = a(74645)
          , re = a(32614);
        function getMainLine() {
            return (0,
            te.j)().getLine(0)
        }
        var oe, ie = a(48573), ce = a(77498);
        function getTimeControlLabel() {
            try {
                if (re.S.headers.TimeControl) {
                    const e = (0,
                    ie.B)(re.S.headers.TimeControl);
                    return isNaN(e.baseTime) ? re.S.headers.TimeControl : (0,
                    ce.X)(e)
                }
                return ""
            } catch (e) {
                return ""
            }
        }
        (e=>{
            let t;
            var a;
            let n;
            var s;
            (a = t = e.Colors || (e.Colors = {})).White = "white",
            a.Black = "black",
            (s = n = e.MasterTitlesShort || (e.MasterTitlesShort = {})).Master = "M",
            s.Grandmaster = "GM",
            s["FIDE Candidate Master"] = "CM",
            s["FIDE Master"] = "FM",
            s["FIDE Woman Candidate Master"] = "WCM",
            s["International Master"] = "IM",
            s["National Master"] = "NM",
            s["Woman Grandmaster"] = "WGM",
            s["Woman FIDE Master"] = "WFM",
            s["Woman Intl. Master"] = "WIM",
            s["Woman International Master"] = "WIM",
            s["Woman National Master"] = "WNM"
        }
        )(oe || (oe = {}));
        var ue = a(89065)
          , de = a(26908)
          , he = a(98482);
        function getGamePhaseTotalMoves({gamePhases: e, phase: t, totalPositions: a}) {
            var n, s;
            const l = null != (n = e[t - 1]) ? n : 0
              , r = null != (s = e[t]) ? s : a;
            return `${(0,
            c.dW)("Total Moves")}: ${r - l}`
        }
        function getTableGamePhase(e) {
            const t = [de.x.Classifications.Types.Inaccuracy, de.x.Classifications.Types.Mistake, de.x.Classifications.Types.Blunder, de.x.Classifications.Types.MissedWin];
            return [{
                label: String(getGamePhaseTotalMoves({
                    gamePhases: ee.F.gamePhases,
                    phase: e,
                    totalPositions: getMainLine().length + 1
                }))
            }, ...t.map((t=>{
                const {className: a, label: n} = ue.xt[t];
                return {
                    className: `analysis-${a}`,
                    data: {
                        black: getGamePhaseTally({
                            classification: a,
                            phase: e,
                            tally: ee.F.tallies.black
                        }),
                        white: getGamePhaseTally({
                            classification: a,
                            phase: e,
                            tally: ee.F.tallies.white
                        })
                    },
                    isLocked: (0,
                    he.p)(),
                    label: n
                }
            }
            ))]
        }
        function getGamePhaseTally({classification: e, phase: t, tally: a}) {
            return String(a[`${e}GP${t}`])
        }
        var me = a(30892)
          , pe = a(67104);
        function getMoveCounts() {
            return (0,
            te.j)().getLine(0).reduce(((e,t)=>(e[(0,
            pe.RS)(t.color)] += 1,
            e)), {
                black: 0,
                white: 0
            })
        }
        var ve = a(62023);
        const formatPercentage = (e,t=1)=>{
            const a = (0,
            ve.jb)({
                decimals: t,
                number: 100 * e
            });
            return isNaN(a) || !isFinite(a) ? null : `${a}%`
        }
        ;
        function getBestMovePercentage(e, t) {
            const a = e.best + e.book;
            return a && t ? formatPercentage(a / t) : null
        }
        var ye = a(68635);
        function getPieceMoveString({pieceMoves: e, key: t, totalMoves: a}) {
            return e[t] >= 0 && a ? `${e[t]} (${formatPercentage(e[t] / a, 0)})` : null
        }
        var fe = a(57367)
          , ge = a(63754);
        var be = a(39761);
        var ke = (0,
        n.aZ)({
            name: "DetailsTabController",
            components: {
                DetailsTabView: V,
                DetailsTable: C,
                OpeningsTable: g,
                PerformanceByPieceTable: _,
                SidebarTabContent: u.Z
            },
            setup() {
                (0,
                Q.d)(J.Y.Events.Details);
                const e = (0,
                n.iH)(getCountryOptions())
                  , t = (0,
                n.iH)({
                    color: oe.Colors.White,
                    exception: null,
                    isSearching: !1,
                    query: "",
                    results: []
                });
                return (0,
                n.bv)((async()=>{
                    e.value.length || (await (0,
                    r.k)(),
                    e.value = getCountryOptions())
                }
                )),
                {
                    analysisComplete: (0,
                    n.Fl)((()=>(0,
                    X.u)())),
                    bookPly: (0,
                    n.Fl)((()=>ee.F.bookPly)),
                    countries: e,
                    gameUrl: (0,
                    n.Fl)((()=>function getGameURL(e, t) {
                        if (t)
                            return e === be.Q.GameTypes.Live ? ge.Z.generate("web_game_live", {
                                id: t
                            }) : e === be.Q.GameTypes.PGN ? ge.Z.generate("web_game_pgn_view", {
                                uuid: t
                            }) : e === be.Q.GameTypes.VsComputer ? ge.Z.generate("web_game_computer", {
                                id: t
                            }) : e === be.Q.GameTypes.Master ? ge.Z.generate("web_master_games_view", {
                                id: t
                            }) : ge.Z.generate("web_game_daily", {
                                id: t
                            })
                    }(se.X.gameType, se.X.gameId))),
                    headers: (0,
                    n.Fl)((()=>re.S.headers)),
                    pgn: (0,
                    n.Fl)((()=>re.S.pgn)),
                    masterPlayerSearch: t,
                    onBlur: function onBlur() {
                        t.value.query && onSetHeader({
                            [getHeaderColor(t.value.color)]: t.value.query
                        });
                        clearResults()
                    },
                    onClear: function onClear() {
                        clearResults()
                    },
                    onSearch: async function onSearch({color: e, query: a}) {
                        if (t.value.query = a,
                        a.length < 3)
                            return void (t.value.exception = l.Iz.pleaseEnter(3));
                        clearResults(),
                        t.value.color = e,
                        t.value.isSearching = !0;
                        try {
                            const {data: e} = await function searchMasterPlayers(e, t) {
                                return fe.Z.get(ge.Z.generate("web_master_games_callback_player", {
                                    criteria: e,
                                    extra: t
                                }))
                            }(a, !0);
                            if (t.value.isSearching = !1,
                            !(null == e ? void 0 : e.length))
                                return void (t.value.exception = l.Iz.noResult);
                            t.value.results = e
                        } catch (n) {
                            clearResults(),
                            t.value.isSearching = !1
                        }
                    },
                    onSelect: function onSelect({color: e, selected: a}) {
                        var n, s, l;
                        const r = t.value.results.find((e=>e.name === a.text));
                        if (!r)
                            return console.error(`Could not find player with name ${a.text}`);
                        const o = getHeaderColor(e);
                        onSetHeader({
                            [o]: a.text,
                            [`${o}Elo`]: null != (n = r.rating) ? n : "",
                            [`${o}Url`]: r.url,
                            [`${o}Country`]: null != (s = r.country) ? s : "",
                            [`${o}Title`]: null != (l = oe.MasterTitlesShort[r.title]) ? l : ""
                        }),
                        clearResults()
                    },
                    onSetHeader: onSetHeader,
                    opening: (0,
                    n.Fl)((()=>{
                        var e;
                        return null == (e = ee.F.book) ? void 0 : e.name
                    }
                    )),
                    nodeLeavingBook: (0,
                    n.Fl)((()=>getMainLine()[ee.F.bookPly])),
                    readOnly: (0,
                    ne.m)(),
                    scoreLeavingBook: (0,
                    n.Fl)((()=>function getScoreLeavingBook() {
                        const e = (0,
                        Y.N)()[ee.F.bookPly];
                        return (0,
                        s.D4)(null == e ? void 0 : e.playedMove)
                    }())),
                    showFigurine: (0,
                    n.Fl)((()=>(0,
                    ae.E)())),
                    tableEndGame: (0,
                    n.Fl)((()=>getTableGamePhase(2))),
                    tableMidGame: (0,
                    n.Fl)((()=>getTableGamePhase(1))),
                    tablePerformance: (0,
                    n.Fl)((()=>function getTablePerformance() {
                        const {averageDifference: e, tallies: t, CAPS: a, prediction: n} = ee.F
                          , s = getMoveCounts()
                          , l = (0,
                        he.p)()
                          , r = [{
                            label: (0,
                            c.dW)("Accuracy"),
                            isLocked: l,
                            data: {
                                black: (0,
                                me.u)({
                                    value: a.black.all
                                }),
                                white: (0,
                                me.u)({
                                    value: a.white.all
                                })
                            }
                        }, {
                            label: (0,
                            c.dW)("Best Move %"),
                            isLocked: l,
                            data: {
                                black: getBestMovePercentage(t.black, s.black),
                                white: getBestMovePercentage(t.white, s.white)
                            }
                        }, {
                            label: (0,
                            c.dW)("Avg Diff"),
                            isLocked: l,
                            data: {
                                black: (0,
                                me.u)({
                                    value: e.black
                                }),
                                white: (0,
                                me.u)({
                                    value: e.white
                                })
                            }
                        }, {
                            label: (0,
                            c.dW)("Total Moves"),
                            isLocked: !1,
                            data: {
                                black: (0,
                                me.u)({
                                    value: s.black,
                                    digits: 0
                                }),
                                white: (0,
                                me.u)({
                                    value: s.white,
                                    digits: 0
                                })
                            }
                        }];
                        return n && r.unshift({
                            label: (0,
                            c.dW)("Prediction"),
                            isLocked: l,
                            data: {
                                black: formatPercentage(n.b),
                                white: formatPercentage(n.w)
                            }
                        }),
                        r
                    }())),
                    tableTime: (0,
                    n.Fl)((()=>function getTableTime() {
                        if (!ee.F.time)
                            return [];
                        const e = 10
                          , t = (0,
                        he.p)()
                          , a = [de.x.Classifications.Types.Excellent, de.x.Classifications.Types.Inaccuracy, de.x.Classifications.Types.Mistake, de.x.Classifications.Types.Blunder]
                          , n = [{
                            data: {
                                black: (0,
                                me.u)({
                                    value: ee.F.time.black.total / e,
                                    digits: 0
                                }),
                                white: (0,
                                me.u)({
                                    value: ee.F.time.white.total / e,
                                    digits: 0
                                })
                            },
                            isLocked: t,
                            label: (0,
                            c.dW)("Total Time")
                        }, {
                            data: {
                                black: (0,
                                me.u)({
                                    value: ee.F.time.black.longest / e,
                                    digits: 0
                                }),
                                white: (0,
                                me.u)({
                                    value: ee.F.time.white.longest / e,
                                    digits: 0
                                })
                            },
                            isLocked: t,
                            label: (0,
                            c.dW)("Longest Move Time")
                        }, {
                            data: {
                                black: (0,
                                me.u)({
                                    value: ee.F.time.black.totalAve / e,
                                    digits: 0
                                }),
                                white: (0,
                                me.u)({
                                    value: ee.F.time.white.totalAve / e,
                                    digits: 0
                                })
                            },
                            isLocked: t,
                            label: (0,
                            c.dW)("Avg Time/Move")
                        }, ...a.map((a=>{
                            const {className: n, label: s} = ue.xt[a];
                            return {
                                className: `analysis-${n}`,
                                data: {
                                    black: (0,
                                    me.u)({
                                        value: ee.F.time.black[n] / e,
                                        digits: 1
                                    }),
                                    white: (0,
                                    me.u)({
                                        value: ee.F.time.white[n] / e,
                                        digits: 1
                                    })
                                },
                                isLocked: t,
                                label: `${(0,
                                c.dW)("Time/Move")} ${s}`
                            }
                        }
                        ))]
                          , s = getTimeControlLabel();
                        return s && n.unshift({
                            label: `${(0,
                            c.dW)("Time Control:")} ${s}`
                        }),
                        n
                    }())),
                    tablesPerformanceByPiece: (0,
                    n.Fl)((()=>function getTablePerformanceByPiece() {
                        const e = [{
                            icon: "bishop-black",
                            key: ye.J.Response.PieceKeys.Bishop
                        }, {
                            icon: "king-black",
                            key: ye.J.Response.PieceKeys.King
                        }, {
                            icon: "knight-black",
                            key: ye.J.Response.PieceKeys.Knight
                        }, {
                            icon: "pawn-black",
                            key: ye.J.Response.PieceKeys.Pawn
                        }, {
                            icon: "queen-black",
                            key: ye.J.Response.PieceKeys.Queen
                        }, {
                            icon: "rook-black",
                            key: ye.J.Response.PieceKeys.Rook
                        }]
                          , t = getMoveCounts();
                        return e.map((e=>({
                            icon: e.icon,
                            rows: [{
                                className: "wide-values",
                                data: {
                                    black: (0,
                                    me.u)({
                                        value: ee.F.CAPS.black[e.key]
                                    }),
                                    white: (0,
                                    me.u)({
                                        value: ee.F.CAPS.white[e.key]
                                    })
                                },
                                isLocked: (0,
                                he.p)(),
                                label: (0,
                                c.dW)("Accuracy")
                            }, {
                                className: "wide-values",
                                data: {
                                    black: getPieceMoveString({
                                        pieceMoves: ee.F.pieceMoves.black,
                                        key: e.key,
                                        totalMoves: t.black
                                    }),
                                    white: getPieceMoveString({
                                        pieceMoves: ee.F.pieceMoves.white,
                                        key: e.key,
                                        totalMoves: t.white
                                    })
                                },
                                isLocked: (0,
                                he.p)(),
                                label: (0,
                                c.dW)("Moves")
                            }]
                        })))
                    }())),
                    termination: (0,
                    n.Fl)((()=>function formatGameEndReason() {
                        const e = (0,
                        te.j)();
                        return `${(0,
                        le.aX)(re.S.headers.Result)} ${(0,
                        le.WX)(e.getContext().game, function getGameEndType() {
                            var e;
                            const t = null != (e = re.S.headers.Termination) ? e : "";
                            return t.includes("resignation") || t.includes("abandoned") ? le.jl.Resignation : t.includes("time") ? le.jl.Time : t.includes("checkmate") ? le.jl.Checkmate : t.includes("draw") ? le.jl.Draw : void 0
                        }())}`
                    }())),
                    timeControl: (0,
                    n.Fl)((()=>getTimeControlLabel()))
                };
                function clearResults() {
                    t.value.isSearching = !1,
                    t.value.exception = null,
                    t.value.results = []
                }
                function getHeaderColor(e) {
                    return e === oe.Colors.White ? "White" : "Black"
                }
                function onSetHeader(e) {
                    t.value.query = "",
                    (0,
                    te.j)().setGameDetails(e)
                }
            }
        })
          , we = (0,
        p.Z)(ke, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("sidebar-tab-content", [a("details-tab-view", {
                attrs: {
                    countries: e.countries,
                    "game-url": e.gameUrl,
                    headers: e.headers,
                    "master-player-search": e.masterPlayerSearch,
                    termination: e.termination,
                    "time-control": e.timeControl,
                    "read-only": e.readOnly
                },
                on: {
                    blur: e.onBlur,
                    clear: e.onClear,
                    search: e.onSearch,
                    select: e.onSelect,
                    "set-header": e.onSetHeader
                },
                scopedSlots: e._u([e.analysisComplete ? {
                    key: "content",
                    fn: function() {
                        return [a("details-table", {
                            attrs: {
                                rows: e.tablePerformance,
                                title: e.$trans("Performance")
                            }
                        }), e._v(" "), a("performance-by-piece-table", {
                            attrs: {
                                tables: e.tablesPerformanceByPiece
                            }
                        }), e._v(" "), e.opening ? a("openings-table", {
                            attrs: {
                                "book-ply": e.bookPly,
                                opening: e.opening,
                                "node-leaving-book": e.nodeLeavingBook,
                                "score-leaving-book": e.scoreLeavingBook,
                                "show-figurine": e.showFigurine
                            }
                        }) : e._e(), e._v(" "), a("details-table", {
                            attrs: {
                                rows: e.tableMidGame,
                                title: e.$trans("Middlegame")
                            }
                        }), e._v(" "), a("details-table", {
                            attrs: {
                                rows: e.tableEndGame,
                                title: e.$trans("Endgame")
                            }
                        }), e._v(" "), a("details-table", {
                            attrs: {
                                rows: e.tableTime,
                                title: e.$trans("Time")
                            }
                        })]
                    },
                    proxy: !0
                } : null], null, !0)
            })], 1)
        }
        ), [], !1, null, null, null).exports
    }
}]);
