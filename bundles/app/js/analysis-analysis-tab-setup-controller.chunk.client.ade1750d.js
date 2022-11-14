window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
    web_game_archive_callback: {
        tokens: [["text", "/callback/games/archive"]],
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
    web_library_collections: {
        tokens: [["text", "/callback/library/collections"]],
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
    web_library_bookmarks: {
        tokens: [["text", "/callback/library/bookmarks"]],
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
    web_library_shared_collections: {
        tokens: [["text", "/callback/library/shared"]],
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
    web_library_community_collections: {
        tokens: [["text", "/callback/library/community/collections"]],
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
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[125], {
    48597: function(e, t, a) {
        a.d(t, {
            M: function() {
                return initThumbnailPath
            }
        });
        var n = a(35584)
          , s = a(97203);
        function initThumbnailPath(e, t=1) {
            if (!n.v3.includes(e.replace(".png", "")))
                return e;
            const a = `/bundles/web/images/library/collection-images/${e}`;
            return t > 1 ? (0,
            s.q)(a, t) : a
        }
    },
    26136: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return r
            }
        });
        var n = {
            name: "FormCheckbox",
            mixins: [a(69947).Z],
            props: {
                disabled: {
                    type: Boolean,
                    default: !1
                },
                id: {
                    type: String
                },
                label: {
                    type: String,
                    required: !0
                },
                name: {
                    type: String,
                    required: !0
                },
                value: {
                    type: Boolean,
                    required: !0
                }
            },
            emits: ["input"],
            methods: {
                setCheckboxStatus(e) {
                    this.$emit("input", e)
                }
            }
        }
          , s = {
            component: "form-checkbox-component",
            label: "form-checkbox-label",
            checkbox: "form-checkbox-checkbox"
        };
        var r = (0,
        a(51900).Z)(n, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: [e.$style.component, e.themeClasses]
            }, [a("input", {
                class: e.$style.checkbox,
                attrs: {
                    id: e.id || e.name,
                    type: "checkbox",
                    disabled: e.disabled,
                    name: e.name
                },
                domProps: {
                    checked: e.value
                },
                on: {
                    change: function(t) {
                        return e.setCheckboxStatus(t.target.checked)
                    }
                }
            }), e._v(" "), a("label", {
                class: e.$style.label,
                attrs: {
                    for: e.name
                }
            }, [e._v("\n    " + e._s(e.label) + "\n  ")])])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = s.locals || s
        }
        ), null, null).exports
    },
    3559: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return r
            }
        });
        var n = {
            name: "FormError"
        }
          , s = {
            component: "form-error-component"
        };
        var r = (0,
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
    6566: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return l
            }
        });
        var n = a(56279)
          , s = a(61682)
          , r = a(18160)
          , o = {
            name: "Pagination",
            components: {
                PaginationItem: n.PaginationItem,
                PaginationSpread: n.PaginationSpread
            },
            props: {
                changePage: {
                    type: Function,
                    required: !0
                },
                currentPage: {
                    type: Number,
                    required: !0
                },
                forceTheme: {
                    type: String,
                    default: null
                },
                hasMoreProp: {
                    type: Boolean
                },
                morePages: {
                    type: Boolean,
                    default: !1
                },
                totalPages: {
                    type: Number,
                    default: 0
                },
                totalResultsCount: {
                    type: Number,
                    required: !1
                },
                scrollOnPageChange: {
                    type: Boolean,
                    default: !1
                },
                scrollTo: {
                    type: String
                },
                shouldHide: {
                    type: Boolean,
                    default: !1
                },
                showFirstLastButtons: {
                    type: Boolean,
                    default: !0
                },
                showTopButton: {
                    type: Boolean,
                    default: !1
                },
                updateURL: {
                    type: Boolean,
                    default: !1
                }
            },
            data: ()=>({
                tabLimit: 4
            }),
            computed: {
                isFirstPage() {
                    return 1 === this.currentPage
                },
                isLastPage() {
                    return this.hasMoreProp ? !1 === this.morePages : this.currentPage === this.totalPages
                },
                isLastPageHidden() {
                    return !this.pages.includes(this.totalPages)
                },
                pages() {
                    if (this.totalPages > 1)
                        return this.generatePagesFromTotalPages();
                    if (this.hasMoreProp && this.morePages && 1 === this.currentPage)
                        return [1, 2];
                    if (this.hasMoreProp && this.morePages && this.currentPage > 1) {
                        const e = [];
                        for (let t = this.currentPage + 1; t > 0; t -= 1)
                            e.push(t);
                        return e.reverse()
                    }
                    if (this.hasMoreProp && !this.morePages) {
                        const e = [];
                        for (let t = this.currentPage; t > 0; t -= 1)
                            e.push(t);
                        return e.reverse()
                    }
                    return [1]
                },
                showLowerEllipsis() {
                    return this.currentPage > 1 && -1 === this.pages.indexOf(1) && !this.hasMoreProp
                },
                showPaginator() {
                    return !this.shouldHide && (!(!this.hasMoreProp && this.totalPages <= 1) && !(this.hasMoreProp && !this.morePages && 1 === this.currentPage))
                },
                showUpperEllipsis() {
                    return this.isLastPageHidden && !this.hasMoreProp
                }
            },
            methods: {
                isSamePage(e) {
                    return this.currentPage === e
                },
                generatePagesFromTotalPages() {
                    const e = [];
                    if (this.totalPages <= this.tabLimit) {
                        for (let t = 1; t <= this.totalPages; t += 1)
                            e.push(t);
                        return e
                    }
                    if (this.currentPage + this.tabLimit <= this.totalPages) {
                        for (let t = this.currentPage; t < this.currentPage + this.tabLimit; t += 1)
                            e.push(t);
                        return e
                    }
                    for (let t = this.totalPages; t > this.totalPages - 4; t -= 1)
                        e.push(t);
                    return e.reverse()
                },
                pageNumber(e) {
                    return this.isSamePage(e) ? r.Z.trans("Current Page, Page %pageNumber%", {
                        "%pageNumber%": e
                    }) : (this.scrollOnPageChange && this.goToTop(),
                    r.Z.trans("Page %pageNumber%", {
                        "%pageNumber%": e
                    }))
                },
                goToTop() {
                    let e = document.getElementById(this.scrollTo);
                    e || (e = document.getElementById(s.xL.SCROLL_TOP_ANCHOR)),
                    e.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                }
            }
        }
          , l = (0,
        a(51900).Z)(o, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "ui_pagination-component"
            }, [e.showTopButton ? a("PaginationItem", {
                staticClass: "ui_pagination-top",
                attrs: {
                    icon: "chevron-up",
                    "aria-label": e.$trans("Back to Top"),
                    content: e.$trans("Top"),
                    "force-theme": e.forceTheme
                },
                on: {
                    click: function(t) {
                        return e.goToTop()
                    }
                }
            }) : e._e(), e._v(" "), e.showPaginator ? a("nav", {
                staticClass: "ui_pagination-navigation"
            }, [e.isFirstPage || e.hasMoreProp || !e.showFirstLastButtons ? e._e() : a("PaginationItem", {
                attrs: {
                    "aria-label": e.$trans("First Page"),
                    content: e.$trans("First"),
                    "force-theme": e.forceTheme
                },
                on: {
                    click: function(t) {
                        return e.changePage(1)
                    }
                }
            }), e._v(" "), a("PaginationItem", {
                attrs: {
                    icon: "chevron-left",
                    "aria-label": e.$trans("Previous Page"),
                    disabled: e.isFirstPage,
                    "force-theme": e.forceTheme
                },
                on: {
                    click: function(t) {
                        return e.changePage(e.currentPage - 1)
                    }
                }
            }), e._v(" "), e.showLowerEllipsis ? a("PaginationSpread", {
                attrs: {
                    "force-theme": e.forceTheme
                }
            }) : e._e(), e._v(" "), e._l(e.pages, (function(t, n) {
                return a("PaginationItem", {
                    key: n,
                    attrs: {
                        active: e.isSamePage(t),
                        "aria-label": e.pageNumber(t),
                        "force-theme": e.forceTheme
                    },
                    domProps: {
                        textContent: e._s(t.toString())
                    },
                    on: {
                        click: function(a) {
                            return e.changePage(t)
                        }
                    }
                })
            }
            )), e._v(" "), e.showUpperEllipsis ? a("PaginationSpread", {
                attrs: {
                    "force-theme": e.forceTheme
                }
            }) : e._e(), e._v(" "), a("PaginationItem", {
                attrs: {
                    icon: "chevron-right",
                    "aria-label": e.$trans("Next Page"),
                    disabled: e.isLastPage,
                    "force-theme": e.forceTheme
                },
                on: {
                    click: function(t) {
                        return e.changePage(e.currentPage + 1)
                    }
                }
            }), e._v(" "), e.isLastPage || e.hasMoreProp || !e.showFirstLastButtons ? e._e() : a("PaginationItem", {
                attrs: {
                    "aria-label": e.$trans("Last Page"),
                    content: e.$trans("Last"),
                    "force-theme": e.forceTheme
                },
                on: {
                    click: function(t) {
                        return e.changePage(0 !== e.totalPages ? e.totalPages : -1)
                    }
                }
            })], 2) : e._e()], 1)
        }
        ), [], !1, null, null, null).exports
    },
    69476: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return r
            }
        });
        var n = {
            name: "Spinner",
            props: {
                forceTheme: {
                    type: String,
                    default: ""
                },
                size: {
                    default: "",
                    type: String
                }
            }
        }
          , s = {
            component: "spinner-ring-component",
            spin: "spinner-ring-spin",
            light: "spinner-ring-light",
            dark: "spinner-ring-dark",
            small: "spinner-ring-small",
            large: "spinner-ring-large"
        };
        var r = (0,
        a(51900).Z)(n, (function() {
            var e, t = this, a = t.$createElement;
            return (t._self._c || a)("div", {
                class: [t.$style.component, t.$style[t.size], (e = {},
                e[t.$style.dark] = "dark" == t.forceTheme,
                e[t.$style.light] = "light" == t.forceTheme,
                e)]
            })
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = s.locals || s
        }
        ), null, null).exports
    },
    35449: function(e, t, a) {
        a.r(t),
        a.d(t, {
            default: function() {
                return kt
            }
        });
        var n = a(92866)
          , s = a(84171)
          , r = a(32937)
          , o = a(919);
        var l = a(30461)
          , i = a(57367)
          , c = a(63754)
          , u = Object.defineProperty
          , d = Object.defineProperties
          , m = Object.getOwnPropertyDescriptors
          , p = Object.getOwnPropertySymbols
          , h = Object.prototype.hasOwnProperty
          , g = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,a)=>t in e ? u(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a;
        async function loadGameArchive(e=null) {
            o.F.isLoading = !0,
            e || (o.F.currentPage = 1,
            o.F.totalPages = 0);
            const {data: t} = await i.Z.get(c.Z.generate("web_game_archive_callback", (a = ((e,t)=>{
                for (var a in t || (t = {}))
                    h.call(t, a) && __defNormalProp(e, a, t[a]);
                if (p)
                    for (var a of p(t))
                        g.call(t, a) && __defNormalProp(e, a, t[a]);
                return e
            }
            )({}, o.F.searchParams),
            n = {
                page: e || 1,
                username: o.F.username || l.R.getCurrentUser().username
            },
            d(a, m(n)))));
            var a, n;
            o.F.games.reset(t.data),
            o.F.currentPage = t.meta.currentPage,
            o.F.totalPages = t.meta.totalPages,
            o.F.isLoading = !1
        }
        var v = a(7943);
        function selectArchiveGame(e) {
            const t = o.F.games.find(e);
            t && (o.F.selectedGames.includes(t) ? (0,
            v.A)(o.F.selectedGames, t) : o.F.selectedGames.push(t))
        }
        function setArchiveUsername(e) {
            o.F.username = e
        }
        function getSelectedArchiveGames() {
            return o.F.selectedGames
        }
        var y = a(56279)
          , f = (0,
        n.aZ)({
            name: "AddGamesButton",
            components: {
                V5Button: y.V5Button
            },
            props: {
                selectedGamesCount: {
                    type: Number,
                    required: !0
                }
            },
            emits: ["click"],
            computed: {
                addGamesButtonText() {
                    return this.$transChoice("{0} Add 0 Games| {1} Add 1 Game|]1,Inf] Add %games% Games", this.selectedGamesCount, {
                        "%games%": this.selectedGamesCount
                    })
                }
            }
        })
          , b = {
            button: "add-games-button-button"
        }
          , $ = a(51900);
        var S = (0,
        $.Z)(f, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.selectedGamesCount > 0 ? a("v5-button", {
                class: e.$style.button,
                attrs: {
                    "data-cy": "add-games-setup-btn",
                    theme: "primary",
                    disabled: e.selectedGamesCount > 100
                },
                domProps: {
                    textContent: e._s(e.addGamesButtonText)
                },
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }) : e._e()
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = b.locals || b
        }
        ), null, null).exports
          , _ = a(6566)
          , C = (0,
        n.aZ)({
            name: "LoadFromArchive",
            components: {
                Pagination: _.Z,
                AddGamesButton: S
            },
            props: {
                scrollTo: {
                    type: String,
                    required: !0
                },
                currentPage: {
                    type: Number,
                    required: !0
                },
                totalPages: {
                    type: Number,
                    required: !0
                },
                selectedGamesCount: {
                    type: Number,
                    required: !0
                }
            },
            emits: ["change-page", "load-selected-games"],
            methods: {
                onChangePage(e) {
                    this.$emit("change-page", {
                        page: e
                    })
                }
            }
        })
          , k = {
            pagination: "add-games-footer-pagination",
            footer: "add-games-footer-footer"
        };
        var P = (0,
        $.Z)(C, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.footer
            }, [e.totalPages > 1 ? a("pagination", {
                class: e.$style.pagination,
                attrs: {
                    "change-page": e.onChangePage,
                    "current-page": e.currentPage,
                    "show-first-last-buttons": !1,
                    "show-top-button": !0,
                    "total-pages": e.totalPages,
                    "scroll-to": e.scrollTo
                }
            }) : e._e(), e._v(" "), e.selectedGamesCount > 0 ? a("add-games-button", {
                attrs: {
                    "selected-games-count": e.selectedGamesCount
                },
                on: {
                    click: function(t) {
                        return e.$emit("load-selected-games", t)
                    }
                }
            }) : e._e()], 1)
        }
        ), [], !1, (function add_games_footer_injectStyles(e) {
            this.$style = k.locals || k
        }
        ), null, null).exports
          , w = (0,
        n.aZ)({
            name: "Checkbox",
            props: {
                id: {
                    type: String,
                    required: !0
                },
                value: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["input"],
            methods: {
                onChange(e) {
                    this.$emit("input", e)
                }
            }
        })
          , x = {
            component: "checkbox-component",
            input: "checkbox-input",
            label: "checkbox-label"
        };
        var G = (0,
        $.Z)(w, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component,
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [a("input", {
                class: e.$style.input,
                attrs: {
                    id: e.id,
                    type: "checkbox",
                    disabled: e.disabled,
                    name: e.id
                },
                domProps: {
                    checked: e.value
                },
                on: {
                    change: function(t) {
                        return e.onChange(t.target.checked)
                    }
                }
            }), e._v(" "), a("label", {
                class: e.$style.label,
                attrs: {
                    for: e.id
                }
            })])
        }
        ), [], !1, (function checkbox_injectStyles(e) {
            this.$style = x.locals || x
        }
        ), null, null).exports
          , T = (0,
        n.aZ)({
            name: "CaretIcon",
            props: {
                flip: {
                    type: Boolean,
                    default: !1
                },
                small: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["click"],
            computed: {
                componentClasses() {
                    const e = [this.$style.component, this.flip ? "caret-up" : "caret-down"];
                    return this.small && e.push(this.$style.small),
                    e
                }
            }
        })
          , A = {
            component: "caret-icon-component",
            small: "caret-icon-small"
        };
        var I = (0,
        $.Z)(T, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("span", {
                staticClass: "icon-font-chess",
                class: e.componentClasses,
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            })
        }
        ), [], !1, (function caret_icon_injectStyles(e) {
            this.$style = A.locals || A
        }
        ), null, null).exports
          , F = a(47680)
          , L = (0,
        n.aZ)({
            name: "GameItem",
            components: {
                UserTagline: F.Z,
                Checkbox: G,
                CaretIcon: I
            },
            props: {
                blackName: {
                    type: String,
                    required: !0
                },
                blackRating: {
                    type: Number,
                    required: !1
                },
                blackTitle: {
                    type: String,
                    required: !1
                },
                gameId: {
                    type: [String, Number],
                    required: !0
                },
                hasLost: {
                    type: Boolean,
                    default: !1
                },
                hasWon: {
                    type: Boolean,
                    default: !1
                },
                icon: {
                    type: String,
                    required: !1
                },
                isExpanded: {
                    type: Boolean,
                    default: !1
                },
                isSelected: {
                    type: Boolean,
                    required: !0
                },
                result: {
                    type: String,
                    required: !0
                },
                time: {
                    type: [String, Number],
                    required: !0
                },
                whiteName: {
                    type: String,
                    required: !0
                },
                whiteRating: {
                    type: Number,
                    required: !1
                },
                whiteTitle: {
                    type: String,
                    required: !1
                }
            },
            emits: ["expand-game", "select-game"],
            computed: {
                componentClasses() {
                    return {
                        [this.$style.component]: !0,
                        [this.$style.won]: this.hasWon,
                        [this.$style.lost]: this.hasLost
                    }
                }
            },
            methods: {
                onSelectGame() {
                    this.$emit("select-game", {
                        gameId: this.gameId
                    })
                },
                onClickExpand() {
                    this.$emit("expand-game", {
                        gameId: this.gameId
                    })
                }
            }
        })
          , B = {
            component: "game-item-component",
            player: "game-item-player",
            rating: "game-item-rating",
            type: "game-item-type",
            result: "game-item-result",
            time: "game-item-time",
            expand: "game-item-expand",
            won: "game-item-won",
            lost: "game-item-lost"
        };
        var E = (0,
        $.Z)(L, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.componentClasses,
                attrs: {
                    "data-cy": "game-item-" + e.gameId
                },
                on: {
                    click: e.onClickExpand
                }
            }, [e.icon ? a("div", {
                staticClass: "icon-font-chess icon-colored",
                class: [e.$style.type, e.icon]
            }) : e._e(), e._v(" "), a("user-tagline", {
                class: e.$style.player,
                attrs: {
                    "username-theme": "blue-with-dark-mode",
                    title: e.whiteTitle,
                    username: e.whiteName
                }
            }), e._v(" "), a("span", {
                class: e.$style.rating,
                domProps: {
                    textContent: e._s(e.whiteRating ? "(" + e.whiteRating + ")" : "--")
                }
            }), e._v(" "), a("user-tagline", {
                class: e.$style.player,
                attrs: {
                    "username-theme": "blue-with-dark-mode",
                    title: e.blackTitle,
                    username: e.blackName
                }
            }), e._v(" "), a("span", {
                class: e.$style.rating,
                domProps: {
                    textContent: e._s(e.blackRating ? "(" + e.blackRating + ")" : "--")
                }
            }), e._v(" "), a("div", {
                class: e.$style.expand
            }, [a("caret-icon", {
                attrs: {
                    small: "",
                    flip: e.isExpanded
                }
            })], 1), e._v(" "), a("div", {
                class: e.$style.result,
                domProps: {
                    textContent: e._s(e.result)
                }
            }), e._v(" "), a("div", {
                class: e.$style.time,
                domProps: {
                    textContent: e._s(e.time)
                }
            }), e._v(" "), a("checkbox", {
                attrs: {
                    id: "toggle-game-" + e.gameId,
                    value: e.isSelected
                },
                on: {
                    input: e.onSelectGame
                }
            })], 1)
        }
        ), [], !1, (function game_item_injectStyles(e) {
            this.$style = B.locals || B
        }
        ), null, null).exports
          , N = (0,
        n.aZ)({
            name: "GamePreview",
            props: {
                boardId: {
                    type: String,
                    required: !0
                }
            }
        })
          , M = {
            preview: "game-preview-preview"
        };
        var q = (0,
        $.Z)(N, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.preview
            }, [a("horizontal-move-list", {
                attrs: {
                    "board-id": e.boardId
                }
            })], 1)
        }
        ), [], !1, (function game_preview_injectStyles(e) {
            this.$style = M.locals || M
        }
        ), null, null).exports
          , O = a(69476)
          , R = (0,
        n.aZ)({
            name: "ListWithHeader",
            components: {
                CaretIcon: I,
                Checkbox: G,
                SpinnerRing: O.Z
            },
            props: {
                currentSort: {
                    type: String,
                    required: !1
                },
                emptyText: {
                    type: String,
                    required: !1
                },
                headerColumns: {
                    type: Array,
                    required: !0
                },
                isLoading: {
                    type: Boolean,
                    required: !0
                },
                scrollAnchorId: {
                    type: String,
                    required: !0
                },
                scrollable: {
                    type: Boolean,
                    default: !0
                }
            },
            emits: ["select-all", "sort-list"],
            computed: {
                scrollClasses() {
                    return {
                        [this.$style.scroll]: !0,
                        [this.$style.scrollable]: this.scrollable
                    }
                }
            },
            methods: {
                onSelectAll(e) {
                    this.$emit("select-all", {
                        isSelected: e
                    })
                },
                onClickSort(e) {
                    this.$emit("sort-list", {
                        column: e
                    })
                }
            }
        })
          , Z = {
            component: "list-with-header-component",
            scroll: "list-with-header-scroll",
            scrollable: "list-with-header-scrollable",
            header: "list-with-header-header",
            column: "list-with-header-column",
            sort: "list-with-header-sort",
            checkbox: "list-with-header-checkbox",
            loading: "list-with-header-loading",
            spinner: "list-with-header-spinner",
            empty: "list-with-header-empty"
        };
        var j = (0,
        $.Z)(R, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("div", {
                class: e.$style.header
            }, [e._l(e.headerColumns, (function(t, n) {
                return a("div", {
                    key: n,
                    class: [e.$style.column, t.className]
                }, [e._v("\n      " + e._s(t.label) + "\n      "), t.sort ? a("caret-icon", {
                    class: e.$style.sort,
                    attrs: {
                        small: "",
                        flip: t.sort === e.currentSort
                    },
                    on: {
                        click: function(a) {
                            return e.onClickSort(t.sort)
                        }
                    }
                }) : e._e()], 1)
            }
            )), e._v(" "), a("checkbox", {
                class: e.$style.checkbox,
                attrs: {
                    id: "toggle-all",
                    value: !1
                },
                on: {
                    input: e.onSelectAll
                }
            })], 2), e._v(" "), a("div", {
                class: e.scrollClasses
            }, [a("div", {
                attrs: {
                    id: e.scrollAnchorId
                }
            }), e._v(" "), e.isLoading ? a("div", {
                class: e.$style.loading
            }, [a("spinner-ring", {
                class: e.$style.spinner,
                attrs: {
                    "force-theme": "light"
                }
            })], 1) : e.emptyText ? a("div", {
                class: e.$style.empty,
                domProps: {
                    textContent: e._s(e.emptyText)
                }
            }) : [e._t("default")]], 2)])
        }
        ), [], !1, (function list_with_header_injectStyles(e) {
            this.$style = Z.locals || Z
        }
        ), null, null).exports
          , V = (0,
        n.aZ)({
            name: "ArchiveGames",
            components: {
                GameItem: E,
                GamePreview: q,
                ListWithHeader: j
            },
            props: {
                boardId: {
                    type: String,
                    required: !0
                },
                currentUsername: {
                    type: String,
                    required: !0
                },
                games: {
                    type: Array,
                    required: !0
                },
                isLoading: {
                    type: Boolean,
                    required: !0
                },
                isSearching: {
                    type: Boolean,
                    required: !0
                },
                previewGameId: {
                    type: Number,
                    required: !1
                },
                selectedGames: {
                    type: Array,
                    required: !0
                },
                username: {
                    type: String,
                    required: !1
                },
                scrollable: {
                    type: Boolean,
                    default: !0
                }
            },
            emits: ["select-game", "expand-game", "select-all-games"],
            computed: {
                emptyText() {
                    return this.games.length ? "" : this.isSearching ? this.$trans("No Games found.") : this.$trans("You have not created any Games yet.")
                },
                headerColumns() {
                    return [{
                        label: "",
                        className: this.$style["header-type"]
                    }, {
                        label: this.$trans("Player"),
                        className: this.$style["header-player"]
                    }, {
                        label: this.$trans("Rating"),
                        className: this.$style["header-rating"]
                    }, {
                        label: this.$trans("Player"),
                        className: this.$style["header-player"]
                    }, {
                        label: this.$trans("Rating"),
                        className: this.$style["header-rating"]
                    }, {
                        label: "",
                        className: this.$style["header-expand"]
                    }, {
                        label: this.$trans("Result"),
                        className: this.$style["header-result"]
                    }, {
                        label: this.$trans("Time"),
                        className: this.$style["header-time"]
                    }]
                }
            },
            methods: {
                isSelected(e) {
                    return this.selectedGames.some((t=>t.id === e))
                }
            }
        })
          , U = {
            "header-type": "archive-games-header-type",
            "header-player": "archive-games-header-player",
            "header-rating": "archive-games-header-rating",
            "header-expand": "archive-games-header-expand",
            "header-result": "archive-games-header-result",
            "header-time": "archive-games-header-time"
        };
        var D = (0,
        $.Z)(V, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("list-with-header", {
                attrs: {
                    "scroll-anchor-id": "archive-scroll-anchor",
                    "is-loading": e.isLoading,
                    "empty-text": e.emptyText,
                    scrollable: e.scrollable,
                    "header-columns": e.headerColumns
                },
                on: {
                    "select-all": function(t) {
                        return e.$emit("select-all-games", t)
                    }
                }
            }, [e._l(e.games, (function(t) {
                return [a("game-item", {
                    key: t.id,
                    attrs: {
                        "black-name": t.user2.username,
                        "black-rating": t.user2Rating,
                        "black-title": t.user2.title,
                        "game-id": t.id,
                        "has-lost": t.hasLost(e.username || e.currentUsername),
                        "has-won": t.hasWon(e.username || e.currentUsername),
                        icon: t.getTimeControlIcon(),
                        "is-expanded": t.id === e.previewGameId,
                        "is-selected": e.isSelected(t.id),
                        result: t.getResultLabel(),
                        time: t.getTimeControlLabel(),
                        "white-name": t.user1.username,
                        "white-rating": t.user1Rating,
                        "white-title": t.user1.title
                    },
                    on: {
                        "expand-game": function(t) {
                            return e.$emit("expand-game", t)
                        },
                        "select-game": function(t) {
                            return e.$emit("select-game", t)
                        }
                    }
                }), e._v(" "), t.id === e.previewGameId ? a("game-preview", {
                    key: "preview-" + t.id,
                    attrs: {
                        "board-id": e.boardId
                    }
                }) : e._e()]
            }
            ))], 2)
        }
        ), [], !1, (function archive_games_injectStyles(e) {
            this.$style = U.locals || U
        }
        ), null, null).exports
          , z = a(65116)
          , W = (0,
        n.aZ)({
            name: "ArchiveFilter",
            components: {
                V5Input: y.V5Input,
                V5InputGroup: y.V5InputGroup,
                V5Select: y.V5Select
            },
            directives: {
                datepicker: z.Z
            },
            props: {
                openings: {
                    type: Array,
                    required: !0
                },
                isAdvancedVisible: {
                    type: Boolean,
                    default: !1
                },
                isOpponentVisible: {
                    type: Boolean,
                    default: !0
                }
            },
            emits: [],
            data() {
                return {
                    gameResultOptions: [{
                        label: this.$trans("Any Result"),
                        value: ""
                    }, {
                        label: this.$trans("Won"),
                        value: "won"
                    }, {
                        label: this.$trans("- Won By timeout"),
                        value: "win_timeout"
                    }, {
                        label: this.$trans("- Won By checkmate"),
                        value: "win_checkmated"
                    }, {
                        label: this.$trans("- Won By resignation"),
                        value: "win_resigned"
                    }, {
                        label: this.$trans("- Won By abandonment"),
                        value: "win_abandoned"
                    }, {
                        label: this.$trans("Lost"),
                        value: "lost"
                    }, {
                        label: this.$trans("- Lost By timeout"),
                        value: "timeout"
                    }, {
                        label: this.$trans("- Lost By checkmate"),
                        value: "checkmated"
                    }, {
                        label: this.$trans("- Lost By resignation"),
                        value: "resigned"
                    }, {
                        label: this.$trans("- Lost By abandonment"),
                        value: "abandoned"
                    }, {
                        label: this.$trans("Draw"),
                        value: "draw"
                    }, {
                        label: this.$trans("- Draw By Agreement"),
                        value: "agreed"
                    }, {
                        label: this.$trans("- Draw By Repetition"),
                        value: "repetition"
                    }, {
                        label: this.$trans("- Draw By Stalemate"),
                        value: "stalemate"
                    }, {
                        label: this.$trans("- Draw By Insufficient Material"),
                        value: "insufficient"
                    }, {
                        label: this.$trans("- Draw By Timeout vs Insufficient Material"),
                        value: "timevsinsufficient"
                    }, {
                        label: this.$trans("- Draw By 50 Move Rule"),
                        value: "50move"
                    }],
                    gameSourceOptions: [{
                        label: this.$trans("All Recent Games"),
                        value: "all"
                    }, {
                        label: this.$trans("Daily Games"),
                        value: "daily"
                    }, {
                        label: this.$trans("Live Games"),
                        value: "live"
                    }],
                    timeSortOptions: [{
                        label: this.$trans("Newest"),
                        value: "desc"
                    }, {
                        label: this.$trans("Oldest"),
                        value: "asc"
                    }],
                    opponentTitleOptions: [{
                        label: this.$trans("Opponent Title"),
                        value: ""
                    }, {
                        label: this.$trans("GM"),
                        value: "GM"
                    }, {
                        label: this.$trans("WGM"),
                        value: "WGM"
                    }, {
                        label: this.$trans("IM"),
                        value: "IM"
                    }, {
                        label: this.$trans("WIM"),
                        value: "WIM"
                    }, {
                        label: this.$trans("FM"),
                        value: "FM"
                    }, {
                        label: this.$trans("WFM"),
                        value: "WFM"
                    }, {
                        label: this.$trans("NM"),
                        value: "NM"
                    }, {
                        label: this.$trans("WNM"),
                        value: "WNM"
                    }, {
                        label: this.$trans("CM"),
                        value: "CM"
                    }, {
                        label: this.$trans("WCM"),
                        value: "WCM"
                    }],
                    ratedOptions: [{
                        label: this.$trans("Rated + Unrated"),
                        value: ""
                    }, {
                        label: this.$trans("Rated"),
                        value: "rated"
                    }, {
                        label: this.$trans("Unrated"),
                        value: "unrated"
                    }],
                    colorOptions: [{
                        label: this.$trans("Color"),
                        value: ""
                    }, {
                        label: this.$trans("White"),
                        value: "white"
                    }, {
                        label: this.$trans("Black"),
                        value: "black"
                    }],
                    matchTypeOptions: [{
                        label: this.$trans("Match Type"),
                        value: ""
                    }, {
                        label: this.$trans("Tournament"),
                        value: "tournament"
                    }, {
                        label: this.$trans("Team Match"),
                        value: "teammatch"
                    }],
                    gameResult: "",
                    gameSource: "",
                    opponent: "",
                    timeSort: "",
                    opponentTitle: "",
                    opening: "",
                    rated: "",
                    color: "",
                    matchType: "",
                    startDate: "",
                    endDate: "",
                    ratingMin: "",
                    ratingMax: ""
                }
            },
            computed: {
                openingOptions() {
                    const e = this.openings.map((e=>({
                        label: e.replace("_", "-"),
                        value: e
                    })));
                    return [{
                        label: this.$trans("Opening"),
                        value: ""
                    }, ...e]
                }
            },
            created() {
                this.reset()
            },
            methods: {
                getParams() {
                    return {
                        color: this.color,
                        endDate: this.endDate,
                        location: this.gameSource,
                        opening: this.opening,
                        opponent: this.opponent,
                        opponentTitle: this.opponentTitle,
                        rated: this.rated,
                        ratingFrom: Number(this.ratingMin),
                        ratingTo: Number(this.ratingMax),
                        result: this.gameResult,
                        timeSort: this.timeSort,
                        startDate: this.startDate,
                        tournamentOrTeam: this.matchType
                    }
                },
                reset() {
                    this.gameResult = "",
                    this.gameSource = "all",
                    this.opponent = "",
                    this.timeSort = "desc",
                    this.opponentTitle = "",
                    this.opening = "",
                    this.rated = "",
                    this.color = "",
                    this.matchType = "",
                    this.startDate = "",
                    this.endDate = "",
                    this.ratingMin = "",
                    this.ratingMax = ""
                },
                getDatepickerOptions: e=>({
                    onDateSelect: e,
                    format: "YYYY-MM-DD",
                    placement: "left"
                }),
                onSelectStartDate(e) {
                    this.startDate = e
                },
                onSelectEndDate(e) {
                    this.endDate = e
                }
            }
        })
          , H = {
            component: "archive-filter-component",
            rating: "archive-filter-rating"
        };
        var Y = (0,
        $.Z)(W, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("v5-select", {
                attrs: {
                    options: e.gameResultOptions
                },
                model: {
                    value: e.gameResult,
                    callback: function(t) {
                        e.gameResult = t
                    },
                    expression: "gameResult"
                }
            }), e._v(" "), a("v5-select", {
                attrs: {
                    options: e.gameSourceOptions
                },
                model: {
                    value: e.gameSource,
                    callback: function(t) {
                        e.gameSource = t
                    },
                    expression: "gameSource"
                }
            }), e._v(" "), e.isOpponentVisible ? a("v5-input", {
                attrs: {
                    placeholder: e.$trans("Opponent")
                },
                model: {
                    value: e.opponent,
                    callback: function(t) {
                        e.opponent = t
                    },
                    expression: "opponent"
                }
            }) : e._e(), e._v(" "), e.isOpponentVisible ? a("v5-select", {
                attrs: {
                    options: e.opponentTitleOptions,
                    "placeholder-text": e.$trans("Opponent Title")
                },
                model: {
                    value: e.opponentTitle,
                    callback: function(t) {
                        e.opponentTitle = t
                    },
                    expression: "opponentTitle"
                }
            }) : e._e(), e._v(" "), e.isAdvancedVisible ? a("v5-select", {
                attrs: {
                    options: e.timeSortOptions
                },
                model: {
                    value: e.timeSort,
                    callback: function(t) {
                        e.timeSort = t
                    },
                    expression: "timeSort"
                }
            }) : e._e(), e._v(" "), e.isAdvancedVisible ? a("v5-select", {
                attrs: {
                    options: e.openingOptions
                },
                model: {
                    value: e.opening,
                    callback: function(t) {
                        e.opening = t
                    },
                    expression: "opening"
                }
            }) : e._e(), e._v(" "), e.isAdvancedVisible ? a("v5-select", {
                attrs: {
                    options: e.ratedOptions
                },
                model: {
                    value: e.rated,
                    callback: function(t) {
                        e.rated = t
                    },
                    expression: "rated"
                }
            }) : e._e(), e._v(" "), e.isAdvancedVisible ? a("v5-select", {
                attrs: {
                    options: e.colorOptions
                },
                model: {
                    value: e.color,
                    callback: function(t) {
                        e.color = t
                    },
                    expression: "color"
                }
            }) : e._e(), e._v(" "), e.isAdvancedVisible ? a("v5-input-group", {
                directives: [{
                    name: "datepicker",
                    rawName: "v-datepicker:click",
                    value: e.getDatepickerOptions(e.onSelectStartDate),
                    expression: "getDatepickerOptions(onSelectStartDate)",
                    arg: "click"
                }],
                attrs: {
                    placeholder: e.$trans("Start Date"),
                    readonly: "",
                    "icon-right": "calendar"
                },
                model: {
                    value: e.startDate,
                    callback: function(t) {
                        e.startDate = t
                    },
                    expression: "startDate"
                }
            }) : e._e(), e._v(" "), e.isAdvancedVisible ? a("v5-input-group", {
                directives: [{
                    name: "datepicker",
                    rawName: "v-datepicker:click",
                    value: e.getDatepickerOptions(e.onSelectEndDate),
                    expression: "getDatepickerOptions(onSelectEndDate)",
                    arg: "click"
                }],
                attrs: {
                    placeholder: e.$trans("End Date"),
                    readonly: "",
                    "icon-right": "calendar"
                },
                model: {
                    value: e.endDate,
                    callback: function(t) {
                        e.endDate = t
                    },
                    expression: "endDate"
                }
            }) : e._e(), e._v(" "), e.isAdvancedVisible ? a("v5-select", {
                attrs: {
                    options: e.matchTypeOptions
                },
                model: {
                    value: e.matchType,
                    callback: function(t) {
                        e.matchType = t
                    },
                    expression: "matchType"
                }
            }) : e._e(), e._v(" "), e.isAdvancedVisible ? a("div", {
                class: e.$style.rating
            }, [a("v5-input", {
                attrs: {
                    type: "number",
                    placeholder: e.$trans("Rating Min")
                },
                model: {
                    value: e.ratingMin,
                    callback: function(t) {
                        e.ratingMin = t
                    },
                    expression: "ratingMin"
                }
            }), e._v(" "), a("v5-input", {
                attrs: {
                    type: "number",
                    placeholder: e.$trans("Rating Max")
                },
                model: {
                    value: e.ratingMax,
                    callback: function(t) {
                        e.ratingMax = t
                    },
                    expression: "ratingMax"
                }
            })], 1) : e._e()], 1)
        }
        ), [], !1, (function archive_filter_injectStyles(e) {
            this.$style = H.locals || H
        }
        ), null, null).exports
          , K = (0,
        n.aZ)({
            name: "ToggleFilterLink",
            components: {},
            props: {
                isVisible: {
                    type: Boolean,
                    required: !0
                },
                hideLabel: {
                    type: String,
                    required: !0
                },
                showLabel: {
                    type: String,
                    required: !0
                }
            },
            emits: ["click"]
        })
          , Q = {
            component: "toggle-filter-link-component"
        };
        var J = (0,
        $.Z)(K, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component,
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }, [e._v("\n  " + e._s(e.isVisible ? e.hideLabel : e.showLabel) + "\n  "), a("span", {
                staticClass: "icon-font-chess",
                class: e.isVisible ? "chevron-up" : "chevron-bottom"
            })])
        }
        ), [], !1, (function toggle_filter_link_injectStyles(e) {
            this.$style = Q.locals || Q
        }
        ), null, null).exports
          , X = a(37398)
          , ee = a(67946)
          , te = (0,
        n.aZ)({
            name: "UsernameSearchAutocomplete",
            components: {
                FormAutocomplete: X.Z,
                UserFlairIcon: ee.Z
            },
            props: {
                allowEmail: {
                    type: Boolean,
                    default: !1
                },
                ariaLabel: String,
                autofocus: {
                    type: Boolean,
                    default: !1
                },
                clearIcon: {
                    type: String,
                    required: !1
                },
                disableIcons: {
                    type: Boolean,
                    default: !1
                },
                dontClearInput: {
                    type: Boolean,
                    default: !1
                },
                initialInputValue: String,
                inputId: String,
                inputName: String,
                lightMode: {
                    type: Boolean,
                    default: !1
                },
                placeholder: String,
                popover: {
                    type: Boolean,
                    default: !0
                },
                popoverClass: String,
                size: String,
                isSearching: {
                    type: Boolean,
                    default: !1
                },
                searchExceptionMessage: {
                    type: String,
                    default: ""
                },
                showInitialOptions: {
                    type: Boolean,
                    default: !1
                },
                userSearchResults: {
                    type: Array,
                    required: !0
                },
                showAvatar: {
                    type: Boolean,
                    default: !0
                }
            },
            emits: ["blur", "clear-user", "enter", "search-user", "select-user"],
            computed: {
                searchPlaceholder() {
                    return this.placeholder || this.$trans("Search Members")
                }
            },
            methods: {
                onSelected(e) {
                    this.$emit("select-user", {
                        user: e
                    })
                },
                onKeyUp(e) {
                    this.$emit("search-user", {
                        query: e
                    })
                }
            }
        })
          , ae = {
            field: "username-search-autocomplete-field",
            "invite-option": "username-search-autocomplete-invite-option",
            avatar: "username-search-autocomplete-avatar",
            username: "username-search-autocomplete-username"
        };
        var ne = (0,
        $.Z)(te, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("form-autocomplete", {
                ref: "input",
                attrs: {
                    autocapitalize: "none",
                    autocorrect: "off",
                    "input-autocomplete": "off",
                    "label-key": "username",
                    spellcheck: "false",
                    "aria-label": e.ariaLabel,
                    autofocus: e.autofocus,
                    "dropdown-options": e.userSearchResults,
                    "dont-clear-input": e.dontClearInput,
                    "exception-message": e.searchExceptionMessage,
                    "initial-input-value": e.initialInputValue,
                    "input-id": e.inputId,
                    "input-name": e.inputName,
                    "input-placeholder": e.searchPlaceholder,
                    "is-searching": e.isSearching,
                    "right-icon": e.clearIcon,
                    "left-icon": e.disableIcons ? "none" : "magnifying-glass",
                    "light-mode": e.lightMode,
                    "popover-class": e.popoverClass,
                    popover: e.popover,
                    "show-initial-options": e.showInitialOptions,
                    size: e.size
                },
                on: {
                    enter: function(t) {
                        return e.$emit("enter", t)
                    },
                    "clear-input": function(t) {
                        return e.$emit("clear-user", t)
                    },
                    blur: function(t) {
                        return e.$emit("blur", t)
                    },
                    keyup: e.onKeyUp,
                    selected: e.onSelected
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(t) {
                        return [a("div", {
                            class: e.$style.field
                        }, [e.showAvatar ? a("img", {
                            class: e.$style.avatar,
                            attrs: {
                                alt: t.option.username,
                                src: t.option.avatar_url,
                                width: "30",
                                height: "30"
                            }
                        }) : e._e(), e._v(" "), a("span", {
                            class: e.$style.username,
                            domProps: {
                                textContent: e._s(t.option.username)
                            }
                        }), e._v(" "), t.option.flair_code ? a("user-flair-icon", {
                            attrs: {
                                code: t.option.flair_code,
                                membership: t.option.membership_level
                            }
                        }) : e._e()], 1)]
                    }
                }])
            })
        }
        ), [], !1, (function username_search_autocomplete_injectStyles(e) {
            this.$style = ae.locals || ae
        }
        ), null, null).exports
          , se = a(37481)
          , re = (0,
        n.aZ)({
            name: "UsernameSearchInput",
            components: {
                UsernameSearchAutocomplete: ne
            },
            props: {
                showAvatar: {
                    type: Boolean,
                    default: !0
                },
                placeholder: {
                    type: String,
                    required: !0
                },
                userSearch: {
                    type: Object,
                    required: !0
                },
                username: {
                    type: String,
                    required: !1
                },
                clearInput: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["blur", "search-user", "clear-user", "enter-user", "select-user"],
            computed: {
                userSearchResults() {
                    return (0,
                    se.q)(this.userSearch.userSearchResults, [e=>e.are_friends ? 0 : 1])
                }
            }
        })
          , oe = {
            input: "username-search-input-input"
        };
        var le = (0,
        $.Z)(re, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("username-search-autocomplete", {
                class: e.$style.input,
                attrs: {
                    "input-id": "username-search-input",
                    "input-name": "username-search-input",
                    "show-initial-options": "",
                    "dont-clear-input": !e.clearInput,
                    "clear-icon": "circle-x",
                    placeholder: e.placeholder,
                    "is-searching": e.userSearch.isSearchingUser,
                    "user-search-results": e.userSearchResults,
                    "search-exception-message": e.userSearch.userSearchMessage,
                    autofocus: !1,
                    "initial-input-value": e.username,
                    "show-avatar": e.showAvatar
                },
                on: {
                    blur: function(t) {
                        return e.$emit("blur", t)
                    },
                    enter: function(t) {
                        return e.$emit("enter-user", t)
                    },
                    "clear-user": function(t) {
                        return e.$emit("clear-user", t)
                    },
                    "search-user": function(t) {
                        return e.$emit("search-user", t)
                    },
                    "select-user": function(t) {
                        return e.$emit("select-user", t)
                    }
                }
            })
        }
        ), [], !1, (function username_search_input_injectStyles(e) {
            this.$style = oe.locals || oe
        }
        ), null, null).exports
          , ie = (0,
        n.aZ)({
            name: "ArchiveSearchForm",
            components: {
                UsernameSearchInput: le,
                V5Button: y.V5Button,
                ArchiveFilter: Y,
                ToggleFilterLink: J
            },
            props: {
                openings: {
                    type: Array,
                    required: !0
                },
                userSearch: {
                    type: Object,
                    required: !0
                }
            },
            emits: ["load-archive-games", "search-user", "clear-user", "enter-user", "select-user"],
            data: ()=>({
                isAdvancedVisible: !1
            }),
            mounted() {
                this.onClickReset()
            },
            methods: {
                onClickSearch() {
                    this.$emit("load-archive-games", {
                        params: this.$refs.archiveFilter.getParams()
                    })
                },
                onClickReset() {
                    this.$refs.archiveFilter.reset()
                },
                toggleAdvancedOptions() {
                    this.isAdvancedVisible = !this.isAdvancedVisible
                }
            }
        })
          , ce = {
            component: "archive-search-form-component",
            username: "archive-search-form-username",
            buttons: "archive-search-form-buttons",
            button: "archive-search-form-button"
        };
        var ue = (0,
        $.Z)(ie, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("username-search-input", {
                class: e.$style.username,
                attrs: {
                    placeholder: e.$trans("Search Username"),
                    "user-search": e.userSearch
                },
                on: {
                    enter: function(t) {
                        return e.$emit("enter-user", t)
                    },
                    "clear-user": function(t) {
                        return e.$emit("clear-user", t)
                    },
                    "search-user": function(t) {
                        return e.$emit("search-user", t)
                    },
                    "select-user": function(t) {
                        return e.$emit("select-user", t)
                    }
                }
            }), e._v(" "), a("archive-filter", {
                ref: "archiveFilter",
                attrs: {
                    openings: e.openings,
                    "is-advanced-visible": e.isAdvancedVisible
                }
            }), e._v(" "), a("div", {
                class: e.$style.buttons
            }, [a("toggle-filter-link", {
                attrs: {
                    "is-visible": e.isAdvancedVisible,
                    "hide-label": e.$trans("Hide"),
                    "show-label": e.$trans("search_option_advanced")
                },
                on: {
                    click: e.toggleAdvancedOptions
                }
            }), e._v(" "), a("v5-button", {
                class: e.$style.button,
                attrs: {
                    size: "x-small",
                    theme: "primary"
                },
                domProps: {
                    textContent: e._s(e.$trans("Search"))
                },
                on: {
                    click: e.onClickSearch
                }
            }), e._v(" "), a("v5-button", {
                class: e.$style.button,
                attrs: {
                    size: "x-small"
                },
                domProps: {
                    textContent: e._s(e.$trans("Reset"))
                },
                on: {
                    click: e.onClickReset
                }
            })], 1)], 1)
        }
        ), [], !1, (function archive_search_form_injectStyles(e) {
            this.$style = ce.locals || ce
        }
        ), null, null).exports
          , de = (0,
        n.aZ)({
            name: "LoadFromArchive",
            components: {
                AddGamesFooter: P,
                ArchiveSearchForm: ue,
                ArchiveGames: D
            },
            props: {
                boardId: {
                    type: String,
                    required: !0
                },
                currentPage: {
                    type: Number,
                    required: !0
                },
                currentUsername: {
                    type: String,
                    required: !0
                },
                games: {
                    type: Array,
                    required: !0
                },
                isLoading: {
                    type: Boolean,
                    required: !0
                },
                isSearching: {
                    type: Boolean,
                    required: !0
                },
                openings: {
                    type: Array,
                    required: !0
                },
                previewGameId: {
                    type: Number,
                    required: !1
                },
                selectedGames: {
                    type: Array,
                    required: !0
                },
                totalPages: {
                    type: Number,
                    required: !0
                },
                username: {
                    type: String,
                    required: !0
                },
                userSearch: {
                    type: Object,
                    required: !0
                }
            },
            emits: ["change-page", "clear-user", "enter-user", "load-archive-games", "load-selected-games", "search-user", "select-game", "expand-game", "select-user", "select-all-games"],
            methods: {
                loadArchiveGames() {
                    this.$emit("load-archive-games")
                }
            }
        })
          , me = {
            component: "load-from-archive-component"
        };
        var pe = (0,
        $.Z)(de, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("archive-search-form", {
                attrs: {
                    "user-search": e.userSearch,
                    openings: e.openings
                },
                on: {
                    enter: function(t) {
                        return e.$emit("enter-user", t)
                    },
                    "clear-user": function(t) {
                        return e.$emit("clear-user", t)
                    },
                    "search-user": function(t) {
                        return e.$emit("search-user", t)
                    },
                    "select-user": function(t) {
                        return e.$emit("select-user", t)
                    },
                    "load-archive-games": function(t) {
                        return e.$emit("load-archive-games", t)
                    }
                }
            }), e._v(" "), a("archive-games", {
                attrs: {
                    "board-id": e.boardId,
                    "current-username": e.currentUsername,
                    games: e.games,
                    "is-loading": e.isLoading,
                    "is-searching": e.isSearching,
                    "preview-game-id": e.previewGameId,
                    "selected-games": e.selectedGames,
                    username: e.username
                },
                on: {
                    "expand-game": function(t) {
                        return e.$emit("expand-game", t)
                    },
                    "select-all-games": function(t) {
                        return e.$emit("select-all-games", t)
                    },
                    "select-game": function(t) {
                        return e.$emit("select-game", t)
                    }
                }
            }), e._v(" "), a("add-games-footer", {
                attrs: {
                    "scroll-to": "archive-scroll-anchor",
                    "total-pages": e.totalPages,
                    "current-page": e.currentPage,
                    "selected-games-count": e.selectedGames.length
                },
                on: {
                    "change-page": function(t) {
                        return e.$emit("change-page", t)
                    },
                    "load-selected-games": function(t) {
                        return e.$emit("load-selected-games", t)
                    }
                }
            })], 1)
        }
        ), [], !1, (function load_from_archive_injectStyles(e) {
            this.$style = me.locals || me
        }
        ), null, null).exports
          , he = Object.defineProperty
          , ge = Object.defineProperties
          , ve = Object.getOwnPropertyDescriptors
          , ye = Object.getOwnPropertySymbols
          , fe = Object.prototype.hasOwnProperty
          , be = Object.prototype.propertyIsEnumerable
          , load_from_archivevue_type_script_lang_ts_defNormalProp = (e,t,a)=>t in e ? he(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a
          , $e = (0,
        n.aZ)({
            name: "LoadFromArchiveController",
            components: {
                LoadFromArchive: pe
            },
            computed: {
                boardId: ()=>l.R.getActiveChessboardElementId(),
                previewGameId: ()=>l.R.getGamePreviewId(),
                archiveGames: ()=>function getArchiveGames() {
                    return o.F.games
                }(),
                archiveUsername: ()=>function getArchiveUsername() {
                    return o.F.username
                }(),
                currentUsername: ()=>l.R.getCurrentUser().username,
                isLoadingArchive: ()=>function isLoadingArchive() {
                    return o.F.isLoading
                }(),
                isSearchingArchive: ()=>function isSearchingArchive() {
                    return !Object.keys(o.F.searchParams).every((e=>"timeSort" === e || "all" === o.F.searchParams[e] || 0 === o.F.searchParams[e] || "" === o.F.searchParams[e]))
                }(),
                archiveCurrentPage: ()=>function getArchiveCurrentPage() {
                    return o.F.currentPage
                }(),
                archiveTotalPages: ()=>function getArchiveTotalPages() {
                    return o.F.totalPages
                }(),
                openings: ()=>function getOpenings() {
                    var e, t;
                    return (null == (t = null == (e = window.chesscom) ? void 0 : e.classroom) ? void 0 : t.openings) || []
                }(),
                selectedGames: ()=>getSelectedArchiveGames(),
                userSearch() {
                    const e = l.R.getUserSearch();
                    return this.archiveUsername ? e : (t = ((e,t)=>{
                        for (var a in t || (t = {}))
                            fe.call(t, a) && load_from_archivevue_type_script_lang_ts_defNormalProp(e, a, t[a]);
                        if (ye)
                            for (var a of ye(t))
                                be.call(t, a) && load_from_archivevue_type_script_lang_ts_defNormalProp(e, a, t[a]);
                        return e
                    }
                    )({}, e),
                    a = {
                        userSearchResults: l.R.getDefaultUserSearchResults()
                    },
                    ge(t, ve(a)));
                    var t, a
                }
            },
            created() {
                this.onLoadArchiveGames()
            },
            beforeDestroy() {
                var e, t;
                l.R.clearUserSearch(),
                null == (t = (e = l.R).onBeforeDestroy) || t.call(e),
                function clearArchiveGameSelection() {
                    o.F.selectedGames.splice(0, o.F.selectedGames.length)
                }()
            },
            methods: {
                onLoadArchiveGames({params: e}={}) {
                    !function setArchiveSearchParams(e) {
                        o.F.searchParams = e
                    }(e || {}),
                    loadGameArchive()
                },
                onSelectAllGames({isSelected: e}) {
                    !function selectAllArchiveGames(e) {
                        const t = e ? o.F.games : [];
                        o.F.selectedGames.splice(0, o.F.selectedGames.length, ...t)
                    }(e)
                },
                onSelectGame({gameId: e}) {
                    selectArchiveGame(e)
                },
                onExpandGame({gameId: e}) {
                    l.R.loadGamePreview(this.archiveGames.find(e)),
                    function isGameSelected(e) {
                        return getSelectedArchiveGames().some((t=>t.id === e))
                    }(e) || selectArchiveGame(e)
                },
                onLoadSelectedGames() {
                    l.R.addGamesFromArchive(this.selectedGames)
                },
                onSearchUser({query: e}) {
                    l.R.searchUser(e),
                    setArchiveUsername(e)
                },
                onClearUser() {
                    l.R.clearUserSearch()
                },
                onEnterUser() {
                    loadGameArchive()
                },
                onSelectUser({user: e}) {
                    setArchiveUsername(e.username || ""),
                    loadGameArchive()
                },
                onChangeArchivePage({page: e}) {
                    l.R.clearGamePreview(),
                    loadGameArchive(e)
                }
            }
        })
          , Se = (0,
        $.Z)($e, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("load-from-archive", {
                attrs: {
                    "board-id": e.boardId,
                    "current-page": e.archiveCurrentPage,
                    "current-username": e.currentUsername,
                    games: e.archiveGames,
                    "is-loading": e.isLoadingArchive,
                    "is-searching": e.isSearchingArchive,
                    openings: e.openings,
                    "preview-game-id": e.previewGameId,
                    "selected-games": e.selectedGames,
                    "total-pages": e.archiveTotalPages,
                    "user-search": e.userSearch,
                    username: e.archiveUsername
                },
                on: {
                    "change-page": e.onChangeArchivePage,
                    "clear-user": e.onClearUser,
                    "enter-user": e.onEnterUser,
                    "load-archive-games": e.onLoadArchiveGames,
                    "load-selected-games": e.onLoadSelectedGames,
                    "search-user": e.onSearchUser,
                    "select-all-games": e.onSelectAllGames,
                    "select-game": e.onSelectGame,
                    "expand-game": e.onExpandGame,
                    "select-user": e.onSelectUser
                }
            })
        }
        ), [], !1, null, null, null).exports;
        var _e = a(49825);
        var Ce = a(54713)
          , ke = a(5169)
          , Pe = a(99497)
          , we = a(3527)
          , xe = a.n(we);
        function getTypeFromVariant(e) {
            switch (e) {
            case "3-check":
                return "threecheck";
            case "King of the Hill":
                return "kingofthehill";
            default:
                return e ? e.toLowerCase() : "chess"
            }
        }
        var Ge = a(48573);
        async function loadCollectionGames(e, t) {
            var a, n;
            const {data: {data: s, meta: r}} = await (0,
            ke.k)(e.id, {
                page: null != t ? t : Number(null != (n = null == (a = e.gamesMeta) ? void 0 : a.currentPage) ? n : 0) + 1
            });
            t && e.games.reset(),
            s.forEach((t=>{
                const a = t.typeSpecificData.pgn
                  , n = function getPGNHeaders(e) {
                    try {
                        return xe().pgnToJson(e, 0).headers
                    } catch (t) {
                        return {}
                    }
                }(a)
                  , s = e.games.add({
                    id: t.lucgId,
                    pgn: a,
                    result: n.Result || "*",
                    gameType: getTypeFromVariant(n.Variant || "chess"),
                    timeControl: n.TimeControl ? (0,
                    Ge.B)(n.TimeControl) : null
                });
                (0,
                Ce.Uc)(s.whitePlayer, {
                    name: n.White || "",
                    rating: n.WhiteElo && Number(n.WhiteElo)
                }),
                (0,
                Ce.Uc)(s.blackPlayer, {
                    name: n.Black || "",
                    rating: n.BlackElo && Number(n.BlackElo)
                })
            }
            )),
            e.gamesMeta || (e.gamesMeta = new Pe.m),
            Object.assign(e.gamesMeta, r)
        }
        var Te = a(35584)
          , Ae = (e=>(e.Name = "name",
        e.Games = "numberOfItems",
        e.Date = "createTime",
        e))(Ae || {})
          , Ie = (e=>(e.MyCollections = "web_library_collections",
        e.MyBookmarks = "web_library_bookmarks",
        e.SharedCollections = "web_library_shared_collections",
        e.CommunityCollections = "web_library_community_collections",
        e))(Ie || {});
        async function loadCollections(e) {
            var t;
            _e.c.isLoadingCollections = !0,
            _e.c.isSearchingCollections = Boolean(null == e ? void 0 : e.search);
            const a = _e.c.sort;
            _e.c.sort === (null == e ? void 0 : e.sort) ? _e.c.sort = null : (null == e ? void 0 : e.sort) && (_e.c.sort = null == e ? void 0 : e.sort),
            (null == e ? void 0 : e.sort) && (_e.c.sortParam = {
                [Ae.Name]: a === Ae.Name ? 7 : 8,
                [Ae.Date]: a === Ae.Date ? 9 : 10,
                [Ae.Games]: a === Ae.Games ? 5 : 6
            }[e.sort]);
            const n = c.Z.generate(null != (t = null == e ? void 0 : e.source) ? t : Ie.MyCollections)
              , {data: s} = await i.Z.get(n, {
                params: {
                    tab: Te._G.YOUR_COLLECTIONS,
                    page: (null == e ? void 0 : e.page) || _e.c.meta.currentPage,
                    name: (null == e ? void 0 : e.search) || "",
                    sort: _e.c.sortParam
                }
            });
            Object.assign(_e.c.meta, s.meta),
            _e.c.collections.reset(s.data),
            _e.c.isLoadingCollections = !1
        }
        var Fe = a(3775);
        function toggleCollectionSelection(e, t, a) {
            const n = _e.c.selectedCollections.find(e.id)
              , s = (null == n ? void 0 : n.allGames) || Boolean(null == n ? void 0 : n.games.find((e=>e.id === (null == t ? void 0 : t.id))));
            if ((0,
            Fe.jn)(a) ? a : !s)
                _e.c.selectedCollections.update({
                    id: e.id,
                    allGames: !t,
                    games: t ? ((null == n ? void 0 : n.games) || []).concat({
                        id: t.id,
                        pgn: t.pgn
                    }) : [],
                    totalGamesCount: e.numberOfItems
                });
            else if (t) {
                const a = (null == n ? void 0 : n.allGames) ? e.games.map((e=>({
                    id: e.id,
                    pgn: e.pgn
                }))) : (null == n ? void 0 : n.games) || [];
                _e.c.selectedCollections.update({
                    id: e.id,
                    allGames: !1,
                    games: a.filter((e=>e.id !== t.id)),
                    totalGamesCount: n.games.length
                })
            } else
                _e.c.selectedCollections.remove(e.id)
        }
        var Le = a(58611);
        function getCollectionSelections() {
            return _e.c.selectedCollections
        }
        function getCollections() {
            return _e.c.collections
        }
        function getCollectionsMeta() {
            return _e.c.meta
        }
        function getCollectionsSort() {
            return _e.c.sort
        }
        function getSelectedGamesCount() {
            return _e.c.selectedCollections.reduce(((e,t)=>t.allGames ? e + t.totalGamesCount : e + t.games.length), 0)
        }
        function isLoadingCollections() {
            return _e.c.isLoadingCollections
        }
        function isSearchingCollections() {
            return _e.c.isSearchingCollections
        }
        var Be = a(48597)
          , Ee = a(78830)
          , Ne = a(16272)
          , Me = (0,
        n.aZ)({
            name: "CollectionItem",
            components: {
                Checkbox: G,
                CaretIcon: I
            },
            props: {
                collection: {
                    type: Ee.I,
                    required: !0
                },
                isSelected: {
                    type: Boolean,
                    required: !0
                }
            },
            emits: ["expand-collection", "toggle-select-collection"],
            computed: {
                componentClasses() {
                    return {
                        [this.$style.component]: !0,
                        [this.$style.empty]: this.isEmpty
                    }
                },
                isEmpty() {
                    return 0 === this.collection.numberOfItems
                },
                thumbnail() {
                    return this.collection.customThumbnailUrl ? this.collection.customThumbnailUrl : this.collection.thumbnail ? (0,
                    Be.M)(this.collection.thumbnail) : Te._G.PLACEHOLDER_IMG
                }
            },
            methods: {
                onClickCollection() {
                    this.isEmpty || this.$emit("expand-collection", {
                        collection: this.collection
                    })
                },
                onToggleSelectCollection() {
                    this.$emit("toggle-select-collection", {
                        collection: this.collection
                    })
                },
                formatDate: e=>Ne.p6.long(new Date(e))
            }
        })
          , qe = {
            component: "collection-item-component",
            empty: "collection-item-empty",
            thumbnail: "collection-item-thumbnail",
            name: "collection-item-name",
            expand: "collection-item-expand",
            games: "collection-item-games",
            date: "collection-item-date",
            checkbox: "collection-item-checkbox"
        };
        var Oe = (0,
        $.Z)(Me, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.componentClasses,
                attrs: {
                    "data-cy": "load-collection-" + e.collection.id,
                    "aria-label": e.$trans("Load Collection")
                },
                on: {
                    click: e.onClickCollection
                }
            }, [a("img", {
                class: e.$style.thumbnail,
                attrs: {
                    height: "24",
                    width: "24",
                    alt: e.collection.name,
                    src: e.thumbnail
                }
            }), e._v(" "), a("span", {
                class: e.$style.name,
                domProps: {
                    textContent: e._s(e.collection.name)
                }
            }), e._v(" "), a("div", {
                class: e.$style.expand
            }, [a("caret-icon", {
                attrs: {
                    small: "",
                    flip: e.collection.isExpanded()
                }
            })], 1), e._v(" "), a("span", {
                class: e.$style.games,
                domProps: {
                    textContent: e._s(e.collection.numberOfItems)
                }
            }), e._v(" "), a("span", {
                class: e.$style.date,
                domProps: {
                    textContent: e._s(e.formatDate(e.collection.createTime))
                }
            }), e._v(" "), a("checkbox", {
                class: e.$style.checkbox,
                attrs: {
                    id: "toggle-collection-" + e.collection.id,
                    value: e.isSelected,
                    disabled: e.isEmpty
                },
                on: {
                    input: e.onToggleSelectCollection
                }
            })], 1)
        }
        ), [], !1, (function collection_item_injectStyles(e) {
            this.$style = qe.locals || qe
        }
        ), null, null).exports
          , Re = a(3559)
          , Ze = (0,
        n.aZ)({
            name: "LibrarySearchForm",
            components: {
                V5Select: y.V5Select,
                FormError: Re.Z,
                V5InputGroup: y.V5InputGroup
            },
            props: {
                search: {
                    type: String,
                    required: !0
                },
                source: {
                    type: String,
                    required: !0
                }
            },
            emits: ["search-collection"],
            data: ()=>({
                errorMessage: ""
            }),
            computed: {
                sourceOptions() {
                    return [{
                        label: this.$trans("Your Collections"),
                        value: Ie.MyCollections
                    }, {
                        label: this.$trans("Shared Collections"),
                        value: Ie.SharedCollections
                    }, {
                        label: this.$trans("Bookmarked Collections"),
                        value: Ie.MyBookmarks
                    }, {
                        label: this.$trans("Community Collections"),
                        value: Ie.CommunityCollections
                    }]
                }
            },
            methods: {
                onInputSearch(e) {
                    this.isSearchInputValid(e) ? (this.errorMessage = "",
                    this.$emit("search-collection", {
                        search: e,
                        source: this.source
                    })) : this.errorMessage = Te.sY.SEARCH_EXCEPTION_MESSAGE
                },
                onInputSource(e) {
                    this.$emit("search-collection", {
                        search: this.search,
                        source: e
                    })
                },
                onClickReset() {
                    this.$emit("search-collection", {
                        search: "",
                        source: Ie.MyCollections
                    })
                },
                isSearchInputValid: e=>0 === e.length || e.length >= 3
            }
        })
          , je = {
            component: "library-search-form-component",
            reset: "library-search-form-reset",
            error: "library-search-form-error"
        };
        var Ve = (0,
        $.Z)(Ze, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("v5-select", {
                class: e.$style.select,
                attrs: {
                    options: e.sourceOptions,
                    value: e.source
                },
                on: {
                    input: e.onInputSource
                }
            }), e._v(" "), a("v5-input-group", {
                class: e.$style.input,
                attrs: {
                    required: "",
                    type: "text",
                    placeholder: e.$trans("Search for a Collection"),
                    "icon-left": "magnifying-glass",
                    value: e.search
                },
                on: {
                    input: e.onInputSearch
                }
            }), e._v(" "), a("button", {
                class: e.$style.reset,
                domProps: {
                    textContent: e._s(e.$trans("Reset"))
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.onClickReset.apply(null, arguments)
                    }
                }
            }), e._v(" "), a("div", {
                class: e.$style.error
            }, [e.errorMessage.length > 0 ? a("form-error", {
                domProps: {
                    textContent: e._s(e.errorMessage)
                }
            }) : e._e()], 1)], 1)
        }
        ), [], !1, (function library_search_form_injectStyles(e) {
            this.$style = je.locals || je
        }
        ), null, null)
          , Ue = Ve.exports
          , De = (0,
        n.aZ)({
            name: "LoadFromLibrary",
            components: {
                AddGamesFooter: P,
                CollectionItem: Oe,
                GameItem: E,
                GamePreview: q,
                LibrarySearchForm: Ue,
                ListWithHeader: j,
                Pagination: _.Z
            },
            props: {
                boardId: {
                    type: String,
                    required: !0
                },
                collections: {
                    type: Array,
                    required: !0
                },
                currentSort: {
                    type: String,
                    required: !1
                },
                isLoading: {
                    type: Boolean,
                    required: !0
                },
                isSearching: {
                    type: Boolean,
                    required: !0
                },
                meta: {
                    type: Pe.m,
                    required: !0
                },
                previewGameId: {
                    type: String,
                    required: !1
                },
                search: {
                    type: String,
                    required: !0
                },
                selectedCollections: {
                    type: Array,
                    required: !0
                },
                selectedGamesCount: {
                    type: Number,
                    required: !0
                },
                source: {
                    type: String,
                    required: !0
                }
            },
            emits: ["add-games", "change-page", "change-games-page", "expand-collection", "expand-game", "search-collection", "select-game", "sort-collections", "toggle-select-all-collections", "toggle-select-collection"],
            data: ()=>({
                errorMessage: ""
            }),
            computed: {
                emptyText() {
                    if (this.collections.length)
                        return "";
                    if (this.isSearching)
                        return this.$trans("No Collections found.");
                    switch (this.source) {
                    case Ie.MyCollections:
                        return this.$trans("You have not created any Collections yet.");
                    case Ie.MyBookmarks:
                        return this.$trans("You have not bookmarked any Collections yet.");
                    case Ie.SharedCollections:
                        return this.$trans("You don't have any shared Collections yet.");
                    case Ie.CommunityCollections:
                        return this.$trans("No public Collections found.");
                    default:
                        return this.$trans("No Collections found.")
                    }
                },
                headerColumns() {
                    return [{
                        label: "",
                        className: this.$style["header-icon"]
                    }, {
                        label: this.$trans("Collection Name"),
                        className: this.$style["header-name"],
                        sort: Ae.Name
                    }, {
                        label: "",
                        className: this.$style["header-expand"]
                    }, {
                        label: this.$trans("Games"),
                        className: this.$style["header-games"],
                        sort: Ae.Games
                    }, {
                        label: this.$trans("Created"),
                        className: this.$style["header-date"],
                        sort: Ae.Date
                    }]
                }
            },
            methods: {
                isCollectionSelected(e) {
                    const t = this.selectedCollections.find((t=>t.id === e));
                    return Boolean(null == t ? void 0 : t.allGames)
                },
                isCollectionGameSelected(e, t) {
                    const a = this.selectedCollections.find((t=>t.id === e));
                    return Boolean((null == a ? void 0 : a.allGames) || (null == a ? void 0 : a.games.find((e=>e.id === t))))
                },
                onClickAddGames(e) {
                    this.$emit("add-games", e)
                },
                onToggleAllCollections(e) {
                    this.$emit("toggle-select-all-collections", {
                        isSelected: e
                    })
                },
                onSelectGame(e, t) {
                    this.$emit("select-game", {
                        collection: e,
                        game: t
                    })
                },
                onExpandGame(e, t) {
                    this.$emit("expand-game", {
                        collection: e,
                        game: t
                    })
                },
                onChangeGamesPage(e) {
                    return t=>this.$emit("change-games-page", {
                        collection: e,
                        page: t
                    })
                }
            }
        })
          , ze = {
            component: "load-from-library-component",
            game: "load-from-library-game",
            preview: "load-from-library-preview",
            "header-icon": "load-from-library-header-icon",
            "header-name": "load-from-library-header-name",
            "header-expand": "load-from-library-header-expand",
            "header-games": "load-from-library-header-games",
            "header-date": "load-from-library-header-date",
            "games-footer": "load-from-library-games-footer",
            range: "load-from-library-range",
            pagination: "load-from-library-pagination"
        };
        var We = (0,
        $.Z)(De, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("library-search-form", {
                attrs: {
                    search: e.search,
                    source: e.source
                },
                on: {
                    "search-collection": function(t) {
                        return e.$emit("search-collection", t)
                    }
                }
            }), e._v(" "), a("list-with-header", {
                attrs: {
                    "scroll-anchor-id": "collection-scroll-anchor",
                    "is-loading": e.isLoading,
                    "empty-text": e.emptyText,
                    "header-columns": e.headerColumns,
                    "current-sort": e.currentSort
                },
                on: {
                    "sort-list": function(t) {
                        return e.$emit("sort-collections", t)
                    },
                    "select-all": e.onToggleAllCollections
                }
            }, [e._l(e.collections, (function(t) {
                return [a("collection-item", {
                    key: t.id,
                    attrs: {
                        collection: t,
                        "is-selected": e.isCollectionSelected(t.id)
                    },
                    on: {
                        "expand-collection": function(t) {
                            return e.$emit("expand-collection", t)
                        },
                        "toggle-select-collection": function(t) {
                            return e.$emit("toggle-select-collection", t)
                        }
                    }
                }), e._v(" "), t.isExpanded() ? [e._l(t.games, (function(n) {
                    return [a("game-item", {
                        key: n.id,
                        class: e.$style.game,
                        attrs: {
                            "black-name": n.blackPlayer.getName(),
                            "black-rating": n.blackPlayer.rating,
                            "black-title": n.blackPlayer.title,
                            "game-id": n.id,
                            icon: n.getTimeControlIcon(),
                            "is-expanded": n.id === e.previewGameId,
                            "is-selected": e.isCollectionGameSelected(t.id, n.id),
                            result: n.getResult(),
                            time: n.getTimeControlLabel(),
                            "white-name": n.whitePlayer.getName(),
                            "white-rating": n.whitePlayer.rating,
                            "white-title": n.whitePlayer.title
                        },
                        on: {
                            "expand-game": function(a) {
                                return e.onExpandGame(t, n)
                            },
                            "select-game": function(a) {
                                return e.onSelectGame(t, n)
                            }
                        }
                    }), e._v(" "), n.id === e.previewGameId ? a("game-preview", {
                        key: "preview-" + n.id,
                        class: e.$style.preview,
                        attrs: {
                            "board-id": e.boardId
                        }
                    }) : e._e()]
                }
                )), e._v(" "), t.gamesMeta.getTotalPages() > 1 ? a("div", {
                    key: "more-" + t.id,
                    class: e.$style["games-footer"]
                }, [a("div", {
                    class: e.$style.range,
                    domProps: {
                        textContent: e._s(t.gamesMeta.getRange())
                    }
                }), e._v(" "), a("pagination", {
                    class: e.$style.pagination,
                    attrs: {
                        "change-page": e.onChangeGamesPage(t),
                        "current-page": t.gamesMeta.getCurrentPage(),
                        "show-first-last-buttons": !1,
                        "show-top-button": !1,
                        "total-pages": t.gamesMeta.getTotalPages()
                    }
                })], 1) : e._e()] : e._e()]
            }
            ))], 2), e._v(" "), a("add-games-footer", {
                attrs: {
                    "scroll-to": "collection-scroll-anchor",
                    "total-pages": e.meta.getTotalPages(),
                    "current-page": e.meta.getCurrentPage(),
                    "selected-games-count": e.selectedGamesCount
                },
                on: {
                    "change-page": function(t) {
                        return e.$emit("change-page", t)
                    },
                    "load-selected-games": e.onClickAddGames
                }
            })], 1)
        }
        ), [], !1, (function load_from_library_injectStyles(e) {
            this.$style = ze.locals || ze
        }
        ), null, null).exports
          , He = (0,
        n.aZ)({
            name: "LoadFromLibraryController",
            components: {
                LoadFromLibrary: We
            },
            setup() {
                loadCollections(),
                (0,
                n.Jd)((()=>{
                    Le.R.clearGamePreview(),
                    function clearCollectionSelection() {
                        _e.c.collections.reset(),
                        _e.c.selectedCollections.reset()
                    }()
                }
                ));
                const e = (0,
                n.iH)("")
                  , t = (0,
                n.iH)(Ie.MyCollections)
                  , a = (0,
                n.Fl)(Le.R.getActiveChessboardElementId)
                  , s = (0,
                n.Fl)(Le.R.getGamePreviewId)
                  , r = (0,
                n.Fl)(getCollectionsMeta)
                  , o = (0,
                n.Fl)(getCollections)
                  , l = (0,
                n.Fl)(isSearchingCollections)
                  , i = (0,
                n.Fl)(isLoadingCollections)
                  , c = (0,
                n.Fl)(getCollectionSelections)
                  , u = (0,
                n.Fl)(getSelectedGamesCount)
                  , d = (0,
                n.Fl)(getCollectionsSort);
                function collapseCollection(e) {
                    e.isExpanded() && (s.value && e.games.includes(s.value) && Le.R.clearGamePreview(),
                    async function clearCollectionGames(e) {
                        e.gamesMeta = null,
                        e.games.reset()
                    }(e))
                }
                return {
                    addGamesFromLibrary: function addGamesFromLibrary() {
                        Le.R.addGamesFromLibrary(c.value)
                    },
                    boardId: a,
                    collections: o,
                    currentSort: d,
                    isLoading: i,
                    isSearching: l,
                    meta: r,
                    onChangeGamesPage: function onChangeGamesPage({collection: e, page: t}) {
                        loadCollectionGames(e, t)
                    },
                    onChangePage: function onChangePage({page: a}) {
                        loadCollections({
                            page: a,
                            search: e.value,
                            source: t.value
                        })
                    },
                    onExpandCollection: function onExpandCollection({collection: e}) {
                        e.isExpanded() ? collapseCollection(e) : (o.value.forEach(collapseCollection),
                        loadCollectionGames(e))
                    },
                    onExpandGame: function onExpandGame({collection: e, game: t}) {
                        Le.R.loadGamePreview(t),
                        toggleCollectionSelection(e, t, !0)
                    },
                    onSearchCollections: function onSearchCollections(a) {
                        e.value = a.search,
                        t.value = a.source,
                        loadCollections({
                            search: e.value,
                            source: t.value
                        })
                    },
                    onSortCollections: function onSortCollections({column: a}) {
                        loadCollections({
                            sort: a,
                            search: e.value,
                            source: t.value
                        })
                    },
                    onSelectGame: function onSelectGame({collection: e, game: t}) {
                        toggleCollectionSelection(e, t)
                    },
                    onToggleSelectAllCollections: function onToggleSelectAllCollections({isSelected: e}) {
                        o.value.forEach((t=>{
                            toggleCollectionSelection(t, null, e)
                        }
                        ))
                    },
                    onToggleSelectCollection: function onToggleSelectCollection({collection: e}) {
                        toggleCollectionSelection(e)
                    },
                    previewGameId: s,
                    selectedCollections: c,
                    selectedGamesCount: u,
                    search: e,
                    source: t
                }
            }
        })
          , Ye = (0,
        $.Z)(He, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("load-from-library", {
                attrs: {
                    "board-id": e.boardId,
                    collections: e.collections,
                    "is-loading": e.isLoading,
                    "is-searching": e.isSearching,
                    meta: e.meta,
                    "preview-game-id": e.previewGameId,
                    search: e.search,
                    "selected-collections": e.selectedCollections,
                    "selected-games-count": e.selectedGamesCount,
                    "current-sort": e.currentSort,
                    source: e.source
                },
                on: {
                    "add-games": e.addGamesFromLibrary,
                    "change-page": e.onChangePage,
                    "change-games-page": e.onChangeGamesPage,
                    "expand-collection": e.onExpandCollection,
                    "expand-game": e.onExpandGame,
                    "search-collection": e.onSearchCollections,
                    "select-game": e.onSelectGame,
                    "sort-collections": e.onSortCollections,
                    "toggle-select-all-collections": e.onToggleSelectAllCollections,
                    "toggle-select-collection": e.onToggleSelectCollection
                }
            })
        }
        ), [], !1, null, null, null).exports
          , Ke = a(91410)
          , Qe = {
            name: "Accordion",
            props: {
                actionIcon: {
                    type: String
                },
                contentClass: {
                    type: [String, Array],
                    default: ""
                },
                headerIcon: {
                    type: String
                },
                headerText: {
                    type: String
                },
                isOpen: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["header-click", "action-click", "click"],
            computed: {
                iconRight() {
                    return this.actionIcon || this.caretIcon
                },
                caretIcon() {
                    return "caret-" + (this.isOpen ? "down" : "right")
                }
            },
            methods: {
                handleActionIconClick() {
                    this.actionIcon ? this.$emit("action-click") : this.$emit("header-click")
                }
            }
        }
          , Je = {
            component: "accordion-component",
            heading: "accordion-heading",
            trigger: "accordion-trigger",
            icon: "accordion-icon",
            big: "accordion-big",
            right: "accordion-right",
            content: "accordion-content",
            open: "accordion-open"
        };
        var Xe = (0,
        $.Z)(Qe, (function() {
            var e, t = this, a = t.$createElement, n = t._self._c || a;
            return n("div", {
                class: t.$style.component,
                on: {
                    click: function(e) {
                        return t.$emit("click", e)
                    }
                }
            }, [n("div", {
                class: t.$style.heading
            }, [n("button", {
                class: t.$style.trigger,
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(e) {
                        return t.$emit("header-click")
                    }
                }
            }, [t.headerIcon ? n("span", {
                staticClass: "icon-font-chess",
                class: [t.$style.icon, t.$style.big, t.headerIcon]
            }) : t._e(), t._v(" "), n("span", {
                domProps: {
                    textContent: t._s(t.headerText)
                }
            }), t._v(" "), n("span", {
                class: ["icon-font-chess", t.$style.icon, t.$style.right, t.iconRight],
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.handleActionIconClick.apply(null, arguments)
                    }
                }
            })])]), t._v(" "), t.isOpen ? n("section", {
                class: [t.contentClass, t.$style.content, (e = {},
                e[t.$style.open] = t.isOpen,
                e)]
            }, [t._t("default")], 2) : t._e()])
        }
        ), [], !1, (function accordion_injectStyles(e) {
            this.$style = Je.locals || Je
        }
        ), null, null)
          , et = Xe.exports
          , tt = a(32305)
          , at = a(51247)
          , nt = (0,
        n.aZ)({
            name: "LoadFromPgn",
            components: {
                V5Button: y.V5Button,
                V5Textarea: y.V5Textarea
            },
            emits: ["load"],
            setup(e, {emit: t}) {
                const a = (0,
                n.iH)("");
                return {
                    input: a,
                    onLoad: function onLoad() {
                        if ((0,
                        at.I)({
                            fen: a.value
                        }))
                            return t("load", {
                                fen: a.value
                            });
                        return t("load", {
                            pgn: a.value
                        })
                    },
                    placeholder: (0,
                    tt.dW)("Paste a FEN or one or more PGNs. Include a blank line between PGNs if inserting more than one.")
                }
            }
        })
          , st = {
            button: "setup-pgn-button",
            textarea: "setup-pgn-textarea"
        };
        var rt = (0,
        $.Z)(nt, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("v5-textarea", {
                class: e.$style.textarea,
                attrs: {
                    "data-cy": "setup-pgn-input",
                    "aria-label": e.placeholder,
                    placeholder: e.placeholder
                },
                model: {
                    value: e.input,
                    callback: function(t) {
                        e.input = t
                    },
                    expression: "input"
                }
            }), e._v(" "), a("v5-button", {
                class: e.$style.button,
                attrs: {
                    "data-cy": "setup-pgn-load-button",
                    size: "small",
                    theme: "primary"
                },
                domProps: {
                    textContent: e._s(e.$trans("Load"))
                },
                on: {
                    click: e.onLoad
                }
            })], 1)
        }
        ), [], !1, (function setup_pgn_injectStyles(e) {
            this.$style = st.locals || st
        }
        ), null, null).exports
          , ot = a(67104)
          , lt = a(26136)
          , it = a(6898);
        var ct = a(93705)
          , ut = (0,
        n.aZ)({
            name: "SetupPosition",
            components: {
                FormCheckbox: lt.Z,
                V5Button: y.V5Button,
                V5Input: y.V5Input,
                V5Select: y.V5Select,
                V5Textarea: y.V5Textarea
            },
            directives: {
                tooltip: it.Z
            },
            props: {
                boardId: {
                    type: String,
                    required: !0
                },
                fen: {
                    type: String,
                    required: !0
                },
                pgn: {
                    type: String,
                    required: !0
                }
            },
            emits: ["clear-board", "close", "flip-board", "update", "load", "reset-board"],
            setup(e, {emit: t}) {
                const a = (0,
                n.iH)(e.pgn)
                  , s = (0,
                n.Fl)((()=>e.fen.split(" ")))
                  , r = (0,
                n.Fl)((()=>s.value[1]))
                  , o = (0,
                n.Fl)((()=>s.value[2]))
                  , l = (0,
                n.Fl)((()=>({
                    K: o.value.includes(ct.k.Setup.Castling.K),
                    Q: o.value.includes(ct.k.Setup.Castling.Q),
                    k: o.value.includes(ct.k.Setup.Castling.k),
                    q: o.value.includes(ct.k.Setup.Castling.q)
                })));
                return (0,
                n.YP)((()=>e.pgn), updatePGN),
                {
                    localPGN: a,
                    castlingPieces: ct.k.Setup.Castling,
                    castlingRules: l,
                    onBlurPGN: function onBlurPGN() {
                        if (a.value === e.pgn)
                            return;
                        if (!function isPgnValid(e) {
                            return !1 !== xe().pgnToJson(e, 0)
                        }(a.value))
                            return void (a.value = e.pgn);
                        t("update", {
                            pgn: a.value
                        })
                    },
                    onChangeCastlingRule: function onChangeCastlingRule(e, t) {
                        const a = s.value[2]
                          , n = Object.values(ct.k.Setup.Castling).filter((n=>n === e ? t : a.includes(n)));
                        s.value[2] = n.join(""),
                        handleFENParts(s.value)
                    },
                    onChangePlayerToMove: function onChangePlayerToMove(e) {
                        s.value[1] = e,
                        handleFENParts(s.value)
                    },
                    onInputFEN: function onInputFEN(e) {
                        if (!function isFenValid(e) {
                            return !1 !== xe().getPositionInfo(e)
                        }(e))
                            return;
                        updateFEN(e)
                    },
                    playerToMove: r,
                    playerToMoveOptions: [{
                        label: (0,
                        tt.dW)("White to move"),
                        value: ot.lA.ColorsAsLetters.White
                    }, {
                        label: (0,
                        tt.dW)("Black to move"),
                        value: ot.lA.ColorsAsLetters.Black
                    }],
                    updateFEN: updateFEN,
                    updatePGN: updatePGN
                };
                function handleFENParts(e) {
                    updateFEN(e.join(" "))
                }
                function updateFEN(e) {
                    t("update", {
                        fen: e
                    })
                }
                function updatePGN(e) {
                    a.value = e
                }
            }
        })
          , dt = {
            component: "setup-position-component",
            pieces: "setup-position-pieces",
            bottom: "setup-position-bottom",
            icon: "setup-position-icon",
            options: "setup-position-options",
            controls: "setup-position-controls",
            labels: "setup-position-labels",
            player: "setup-position-player",
            fen: "setup-position-fen",
            pgn: "setup-position-pgn"
        };
        var mt = (0,
        $.Z)(ut, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("div", {
                class: e.$style.pieces
            }, [a("hand-pieces", {
                attrs: {
                    direction: "horizontal",
                    "board-id": e.boardId,
                    "data-cy": "setup-hand-pieces"
                }
            })], 1), e._v(" "), a("div", {
                class: e.$style.bottom
            }, [a("div", {
                class: e.$style.options
            }, [a("V5Select", {
                attrs: {
                    "aria-label": e.$trans("Color to move"),
                    "data-cy": "setup-color-selection",
                    options: e.playerToMoveOptions,
                    value: e.playerToMove
                },
                on: {
                    input: e.onChangePlayerToMove
                }
            }), e._v(" "), a("div", {
                class: e.$style.controls
            }, [a("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.$trans("Flip Board"),
                    expression: "$trans('Flip Board')"
                }],
                staticClass: "icon-font-chess repeat",
                class: e.$style.icon,
                attrs: {
                    "data-cy": "setup-flip-board"
                },
                on: {
                    click: function(t) {
                        return e.$emit("flip-board")
                    }
                }
            }), e._v(" "), a("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.$trans("Reset Board"),
                    expression: "$trans('Reset Board')"
                }],
                staticClass: "icon-font-chess undo",
                class: e.$style.icon,
                attrs: {
                    "data-cy": "setup-reset-board"
                },
                on: {
                    click: function(t) {
                        return e.$emit("reset-board")
                    }
                }
            }), e._v(" "), a("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.$trans("Clear Board"),
                    expression: "$trans('Clear Board')"
                }],
                staticClass: "icon-font-chess trash",
                class: e.$style.icon,
                attrs: {
                    "data-cy": "setup-clear-board"
                },
                on: {
                    click: function(t) {
                        return e.$emit("clear-board")
                    }
                }
            })])], 1), e._v(" "), a("div", {
                class: e.$style.labels
            }, [a("label", {
                class: e.$style.player,
                domProps: {
                    textContent: e._s(e.$trans("White"))
                }
            }), e._v(" "), a("label", {
                class: e.$style.player,
                domProps: {
                    textContent: e._s(e.$trans("Black"))
                }
            }), e._v(" "), a("form-checkbox", {
                attrs: {
                    "data-cy": "setup-castling-rule-K",
                    label: "(O-O)",
                    name: "castling-rule-K",
                    value: e.castlingRules[e.castlingPieces.K]
                },
                on: {
                    input: function(t) {
                        return e.onChangeCastlingRule(e.castlingPieces.K, t)
                    }
                }
            }), e._v(" "), a("form-checkbox", {
                attrs: {
                    "data-cy": "setup-castling-rule-k",
                    label: "(O-O)",
                    name: "castling-rule-k",
                    value: e.castlingRules[e.castlingPieces.k]
                },
                on: {
                    input: function(t) {
                        return e.onChangeCastlingRule(e.castlingPieces.k, t)
                    }
                }
            }), e._v(" "), a("form-checkbox", {
                attrs: {
                    "data-cy": "setup-castling-rule-Q",
                    label: "(O-O-O)",
                    name: "castling-rule-Q",
                    value: e.castlingRules[e.castlingPieces.Q]
                },
                on: {
                    input: function(t) {
                        return e.onChangeCastlingRule(e.castlingPieces.Q, t)
                    }
                }
            }), e._v(" "), a("form-checkbox", {
                attrs: {
                    "data-cy": "setup-castling-rule-q",
                    label: "(O-O-O)",
                    name: "castling-rule-q",
                    value: e.castlingRules[e.castlingPieces.q]
                },
                on: {
                    input: function(t) {
                        return e.onChangeCastlingRule(e.castlingPieces.q, t)
                    }
                }
            })], 1), e._v(" "), a("v5-input", {
                class: e.$style.fen,
                attrs: {
                    "data-cy": "setup-enter-fen",
                    placeholder: e.$trans("Enter FEN"),
                    value: e.fen
                },
                on: {
                    input: e.onInputFEN
                }
            }), e._v(" "), a("v5-textarea", {
                class: e.$style.pgn,
                attrs: {
                    "data-cy": "setup-enter-pgn",
                    placeholder: e.$trans("Enter PGN"),
                    value: e.localPGN
                },
                on: {
                    blur: e.onBlurPGN,
                    input: e.updatePGN
                }
            }), e._v(" "), a("v5-button", {
                attrs: {
                    "data-cy": "setup-load-button",
                    size: "small",
                    theme: "primary"
                },
                domProps: {
                    textContent: e._s(e.$trans("Load"))
                },
                on: {
                    click: function(t) {
                        return e.$emit("load", {
                            pgn: e.localPGN
                        })
                    }
                }
            })], 1)])
        }
        ), [], !1, (function setup_position_injectStyles(e) {
            this.$style = dt.locals || dt
        }
        ), null, null).exports
          , pt = (0,
        n.aZ)({
            components: {
                Accordion: et,
                SetupPgn: rt,
                SetupPosition: mt
            },
            props: {
                activeTab: String,
                cachedAnalysis: String,
                fen: {
                    type: String,
                    required: !0
                },
                pgn: {
                    type: String,
                    required: !0
                }
            },
            emits: ["clear-board", "close", "flip-board", "load", "reset-board", "update-active-tab", "update"],
            setup: e=>({
                boardId: (0,
                Ke.H)(),
                isActive: function isActive(t) {
                    return t === e.activeTab
                },
                tabs: ct.k.Setup.Tabs
            })
        })
          , ht = {
            component: "setup-view-component",
            accordion: "setup-view-accordion",
            expand: "setup-view-expand"
        };
        var gt = (0,
        $.Z)(pt, (function() {
            var e, t, a, n, s = this, r = s.$createElement, o = s._self._c || r;
            return o("div", {
                class: s.$style.component,
                attrs: {
                    "data-cy": "analysis-tab-setup"
                }
            }, [o("accordion", {
                class: [s.$style.accordion, (e = {},
                e[s.$style.expand] = s.activeTab === s.tabs.SetupPosition,
                e)],
                attrs: {
                    "data-cy": "analysis-tab-setup-setup-position",
                    "header-icon": "plus",
                    "header-text": s.$trans("Set Up Position"),
                    "is-open": s.isActive(s.tabs.SetupPosition)
                },
                on: {
                    "header-click": function(e) {
                        return s.$emit("update-active-tab", s.tabs.SetupPosition)
                    }
                }
            }, [o("setup-position", {
                attrs: {
                    "board-id": s.boardId,
                    fen: s.fen,
                    pgn: s.pgn
                },
                on: {
                    "clear-board": function(e) {
                        return s.$emit("clear-board")
                    },
                    close: function(e) {
                        return s.updateActiveTab(void 0)
                    },
                    "flip-board": function(e) {
                        return s.$emit("flip-board")
                    },
                    load: function(e) {
                        return s.$emit("load", e)
                    },
                    "reset-board": function(e) {
                        return s.$emit("reset-board")
                    },
                    update: function(e) {
                        return s.$emit("update", e)
                    }
                }
            })], 1), s._v(" "), o("accordion", {
                class: [s.$style.accordion, (t = {},
                t[s.$style.expand] = s.isActive(s.tabs.LoadFromPGN),
                t)],
                attrs: {
                    "data-cy": "analysis-tab-setup-load-pgn",
                    "header-icon": "chess-board",
                    "header-text": s.$trans("Paste FEN/PGN(s)"),
                    "is-open": s.activeTab === s.tabs.LoadFromPGN
                },
                on: {
                    "header-click": function(e) {
                        return s.$emit("update-active-tab", s.tabs.LoadFromPGN)
                    }
                }
            }, [o("setup-pgn", {
                on: {
                    load: function(e) {
                        return s.$emit("load", e)
                    }
                }
            })], 1), s._v(" "), o("accordion", {
                class: [s.$style.accordion, (a = {},
                a[s.$style.expand] = s.activeTab === s.tabs.LoadFromLibrary,
                a)],
                attrs: {
                    "data-cy": "analysis-tab-setup-load-library",
                    "header-icon": "library",
                    "header-text": s.$trans("Load From Library"),
                    "is-open": s.activeTab === s.tabs.LoadFromLibrary
                },
                on: {
                    "header-click": function(e) {
                        return s.$emit("update-active-tab", s.tabs.LoadFromLibrary)
                    }
                }
            }, [s._t("load-from-library")], 2), s._v(" "), o("accordion", {
                class: [s.$style.accordion, (n = {},
                n[s.$style.expand] = s.activeTab === s.tabs.LoadFromArchive,
                n)],
                attrs: {
                    "data-cy": "analysis-tab-load-from-archive",
                    "header-icon": "chess-board-folder",
                    "header-text": s.$trans("Load From Archive"),
                    "is-open": s.activeTab === s.tabs.LoadFromArchive
                },
                on: {
                    "header-click": function(e) {
                        return s.$emit("update-active-tab", s.tabs.LoadFromArchive)
                    }
                }
            }, [s._t("load-from-archive")], 2), s._v(" "), s.cachedAnalysis ? o("accordion", {
                class: s.$style.accordion,
                attrs: {
                    "data-cy": "analysis-tab-setup-load-cached",
                    "header-icon": "circle-clock-alt",
                    "header-text": s.$trans("Load Previous Analysis")
                },
                on: {
                    "header-click": function(e) {
                        return s.$emit("load", {
                            pgn: s.cachedAnalysis
                        })
                    }
                }
            }) : s._e()], 1)
        }
        ), [], !1, (function setup_view_injectStyles(e) {
            this.$style = ht.locals || ht
        }
        ), null, null).exports
          , vt = a(94202)
          , yt = a(61681);
        var ft = a(45157)
          , bt = a(923)
          , $t = a(19107);
        const St = ot.nT.create();
        function setSetupMode() {
            (0,
            bt.j)().setMode(St)
        }
        var _t = a(32614)
          , Ct = (0,
        n.aZ)({
            name: "SetupController",
            components: {
                LoadFromArchiveController: Se,
                LoadFromLibraryController: Ye,
                SetupView: gt
            },
            setup() {
                return (0,
                n.bv)((()=>{
                    isSetup() && setSetupMode()
                }
                )),
                {
                    activeTab: (0,
                    n.Fl)((()=>ft.p.selectedSetupTab)),
                    cachedAnalysis: yt.Z.get(ct.k.Cache.Key, null),
                    fen: (0,
                    n.Fl)((()=>_t.S.fen)),
                    isRedesign: window.chesscom.features.includes("client_analysis_redesign"),
                    pgn: (0,
                    n.Fl)((()=>_t.S.pgn)),
                    onClearBoard: function onClearBoard() {
                        (0,
                        bt.j)().load({
                            fen: s.cS
                        })
                    },
                    onFlipBoard: function onFlipBoard() {
                        (0,
                        r.v)()
                    },
                    onLoad: function onLoad(e) {
                        isSetup() && (0,
                        $t.G)();
                        ft.p.selectedSetupTab = void 0,
                        (0,
                        vt.w)(e)
                    },
                    onResetBoard: function onResetBoard() {
                        (0,
                        bt.j)().load({
                            fen: s.nn
                        })
                    },
                    onUpdate: function onUpdate(e) {
                        (0,
                        bt.j)().load(e)
                    },
                    onUpdateActiveTab: function onUpdateActiveTab(e) {
                        isSetup() && (0,
                        $t.G)();
                        ft.p.selectedSetupTab = e && ft.p.selectedSetupTab !== e ? e : void 0,
                        isSetup() && setSetupMode()
                    }
                };
                function isSetup() {
                    return ft.p.selectedSetupTab === ct.k.Setup.Tabs.SetupPosition
                }
            }
        })
          , kt = (0,
        $.Z)(Ct, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("setup-view", {
                attrs: {
                    "active-tab": e.activeTab,
                    "cached-analysis": e.cachedAnalysis,
                    fen: e.fen,
                    pgn: e.pgn
                },
                on: {
                    "clear-board": e.onClearBoard,
                    load: e.onLoad,
                    "flip-board": e.onFlipBoard,
                    "reset-board": e.onResetBoard,
                    update: e.onUpdate,
                    "update-active-tab": e.onUpdateActiveTab
                },
                scopedSlots: e._u([{
                    key: "load-from-library",
                    fn: function() {
                        return [a("load-from-library-controller")]
                    },
                    proxy: !0
                }, {
                    key: "load-from-archive",
                    fn: function() {
                        return [a("load-from-archive-controller")]
                    },
                    proxy: !0
                }])
            })
        }
        ), [], !1, null, null, null).exports
    }
}]);
