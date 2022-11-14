window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
    web_member_view: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/member"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    i18n_web_member_view: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/member"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    }
}),
(("undefined" != typeof self ? self : this).wpChessCom_Yybx = ("undefined" != typeof self ? self : this).wpChessCom_Yybx || []).push([[3171], {
    93897: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return me
            }
        });
        var i = n(23992)
          , s = n(86437)
          , l = n(62649)
          , a = n(97203)
          , o = {
            name: "Avatar",
            props: {
                alt: {
                    type: String,
                    default: ""
                },
                src: {
                    type: String,
                    default: ""
                },
                width: {
                    type: [Number, String],
                    default: "50"
                },
                height: {
                    type: [Number, String],
                    default: "50"
                }
            },
            emits: ["click"],
            data: ()=>({
                failed: !1,
                failedSrcSet: !1,
                defaultAvatar: (0,
                l.n)("bundles/web/images/user-image.svg")
            }),
            computed: {
                avatarSrcset() {
                    return this.failedSrcSet ? null : (0,
                    a.b)(this.avatarUrl)
                },
                avatarUrl() {
                    return this.failed || !this.src ? this.defaultAvatar : this.src
                }
            },
            watch: {
                src(e, t) {
                    e !== t && (this.failed = !1,
                    this.failedSrcSet = !1)
                }
            },
            methods: {
                onError() {
                    this.avatarSrcset ? this.failedSrcSet = !0 : this.failed = !0
                }
            }
        }
          , c = {
            component: "avatar-component"
        }
          , r = n(51900);
        var d = (0,
        r.Z)(o, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("img", {
                class: e.$style.component,
                attrs: {
                    alt: e.alt,
                    src: e.avatarUrl,
                    srcset: e.avatarSrcset,
                    width: e.width,
                    height: e.height
                },
                on: {
                    error: e.onError,
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            })
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = c.locals || c
        }
        ), null, null).exports
          , h = n(65602)
          , u = n(90425);
        function getTimeControlIcon(e, t="chess") {
            return "chess960" === t ? "live" === e.timeType ? "live960" : "chess960" : "chess" !== t ? t : function getTimeControlType(e) {
                if ("daily" === e.timeType)
                    return "daily";
                const {baseTime: t, timeIncrement: n} = e
                  , i = Number(t) + 40 * (n ? 1 * n : 0);
                return i < 180 ? "bullet" : i >= 600 ? "rapid" : "blitz"
            }(e)
        }
        var g = n(32305);
        var m = (0,
        i.defineComponent)({
            name: "GameType",
            props: {
                gameIcon: {
                    type: String,
                    required: !0
                },
                iconBackgroundColor: String,
                isChallenge: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: {
                componentClasses() {
                    return this.isChallenge ? {
                        [this.$style.component]: !0,
                        [this.$style[this.gameIcon]]: this.$style[this.gameIcon],
                        [this.$style.defaultIcon]: !this.$style[this.gameIcon],
                        "icon-font-chess membership-gold": "twitch-subscriber" === this.gameIcon,
                        "icon-font-chess threecheck": "threecheck" === this.gameIcon,
                        "icon-font-chess kingofthehill": "kingofthehill" === this.gameIcon,
                        "icon-font-chess chess960": "chess960" === this.gameIcon,
                        "icon-font-chess live960": "live960" === this.gameIcon
                    } : {
                        [this.$style.component]: !0,
                        [`icon-font-chess ${this.gameIcon}`]: !this.$style[this.gameIcon],
                        [this.$style.defaultIcon]: !this.$style[this.gameIcon]
                    }
                },
                componentStyle() {
                    return this.iconBackgroundColor ? {
                        backgroundImage: this.iconBackgroundColor
                    } : {}
                }
            }
        })
          , f = {
            component: "game-type-component",
            defaultIcon: "game-type-defaultIcon",
            bullet: "game-type-bullet",
            rapid: "game-type-rapid",
            blitz: "game-type-blitz",
            daily: "game-type-daily",
            crazyhouse: "game-type-crazyhouse",
            bughouse: "game-type-bughouse",
            threecheck: "game-type-threecheck",
            kingofthehill: "game-type-kingofthehill",
            chess960: "game-type-chess960",
            live960: "game-type-live960",
            "twitch-subscriber": "game-type-twitch-subscriber"
        };
        var p = (0,
        r.Z)(m, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                class: e.componentClasses,
                style: e.componentStyle
            })
        }
        ), [], !1, (function game_type_injectStyles(e) {
            this.$style = f.locals || f
        }
        ), null, null).exports
          , b = (0,
        i.defineComponent)({
            name: "ChallengeItem",
            components: {
                Avatar: d,
                UserTagline: h.Z,
                GameType: p,
                V5Button: s.V5Button
            },
            props: {
                challenge: {
                    type: Object,
                    required: !0
                },
                isOutgoing: {
                    type: Boolean,
                    required: !0
                }
            },
            emits: ["accept-challenge", "decline-challenge"],
            computed: {
                subtitle() {
                    if (!this.challenge.timeControl)
                        return this.$trans("Daily");
                    const e = function getTimeControlLabel(e) {
                        const {baseTime: t, timeIncrement: n, timeType: i} = e;
                        if ("none" === i)
                            return "--";
                        if ("daily" === i)
                            return (0,
                            g.jn)("{1} 1 day|]1,Inf] %1$s% days", t, {
                                "%1$s%": t
                            }).trim();
                        if (n && t < 60)
                            return `${(0,
                            g.jn)("{1} 1 sec|]1,Inf] %1$s% sec", Number(t.toFixed(0)), {
                                "%1$s%": t.toFixed(0)
                            }).trim()} | ${n.toFixed(0)}`;
                        const s = t % 60;
                        return n && t ? s > 0 ? `${Math.floor(t / 60)}:${String(s).padStart(2, "0")} | ${n.toFixed(0)}` : `${(t / 60).toFixed(0)} | ${n.toFixed(0)}` : t < 60 ? (0,
                        g.jn)("{1} 1 sec|]1,Inf] %1$s% sec", Number(t.toFixed(0)), {
                            "%1$s%": t.toFixed(0)
                        }).trim() : s > 0 ? `${Math.floor(t / 60)}:${String(s).padStart(2, "0")}` : (0,
                        g.jn)("{1} 1 min|]1,Inf] %1$s% min", Number((t / 60).toFixed(0)), {
                            "%1$s%": (t / 60).toFixed(0)
                        }).trim()
                    }(this.challenge.timeControl)
                      , t = this.challenge.rated ? "" : `(${this.$trans("Unrated")})`;
                    return this.$trans("%timeRatedLabel% %ratingType%", {
                        "%timeRatedLabel%": e,
                        "%ratingType%": t
                    })
                },
                gameIcon() {
                    var e;
                    return this.challenge.isTwitchSubscriber ? "twitch-subscriber" : this.challenge.timeControl && (null == (e = this.challenge.timeControl) ? void 0 : e.timeType) ? getTimeControlIcon(this.challenge.timeControl, this.challenge.gameType) : "daily"
                },
                dailyChallengeUrl() {
                    if (this.challenge.route)
                        return this.challenge.route
                },
                profileUrl() {
                    return u.Z.generate("web_member_view", {
                        username: this.challenge.username
                    })
                }
            }
        })
          , y = {
            component: "challenge-list-item-component",
            avatar: "challenge-list-item-avatar",
            info: "challenge-list-item-info",
            subtitle: "challenge-list-item-subtitle",
            player: "challenge-list-item-player",
            actions: "challenge-list-item-actions",
            button: "challenge-list-item-button"
        };
        var v = (0,
        r.Z)(b, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [n("avatar", {
                class: e.$style.avatar,
                attrs: {
                    width: "72",
                    height: "72",
                    src: e.challenge.avatarUrl
                }
            }), e._v(" "), n("game-type", {
                attrs: {
                    "game-icon": e.gameIcon
                }
            }), e._v(" "), n("div", {
                class: e.$style.info
            }, [e.challenge ? n("user-tagline", {
                class: e.$style.player,
                attrs: {
                    "username-theme": "black",
                    country: e.challenge.country,
                    "is-username-clickable": "",
                    "open-profile-on-new-tab": "",
                    rating: e.challenge.rating,
                    title: e.challenge.chessTitle && e.challenge.chessTitle.toUpperCase(),
                    "flair-code": e.challenge.flairCode,
                    membership: e.challenge.membership,
                    url: e.profileUrl,
                    username: e.challenge.username
                }
            }) : e._e(), e._v(" "), n("a", {
                class: e.$style.subtitle,
                attrs: {
                    href: e.dailyChallengeUrl
                },
                domProps: {
                    textContent: e._s(e.subtitle)
                }
            })], 1), e._v(" "), n("div", {
                class: e.$style.actions
            }, [n("v5-button", {
                class: e.$style.button,
                attrs: {
                    size: "x-small",
                    title: e.isOutgoing ? e.$trans("Dismiss") : e.$trans("Decline")
                },
                on: {
                    click: function(t) {
                        return e.$emit("decline-challenge", e.challenge)
                    }
                }
            }, [n("span", {
                staticClass: "icon-font-chess ui_v5-button-icon incorrect"
            })]), e._v(" "), e.isOutgoing ? e._e() : n("v5-button", {
                class: e.$style.button,
                attrs: {
                    size: "x-small",
                    theme: "primary",
                    title: e.$trans("Accept")
                },
                on: {
                    click: function(t) {
                        return e.$emit("accept-challenge", e.challenge)
                    }
                }
            }, [n("span", {
                staticClass: "icon-font-chess ui_v5-button-icon correct"
            })])], 1)], 1)
        }
        ), [], !1, (function challenge_list_item_injectStyles(e) {
            this.$style = y.locals || y
        }
        ), null, null).exports
          , $ = (0,
        i.defineComponent)({
            name: "FloatingActionButton",
            props: {
                isExpanded: {
                    type: Boolean,
                    required: !0
                },
                selectedTab: {
                    type: String,
                    required: !0
                },
                tabs: {
                    type: Array,
                    required: !0
                }
            },
            emits: ["set-tab"]
        })
          , C = {
            component: "floating-action-button-component",
            expanded: "floating-action-button-expanded",
            container: "floating-action-button-container",
            tab: "floating-action-button-tab",
            selected: "floating-action-button-selected",
            badge: "floating-action-button-badge",
            active: "floating-action-button-active",
            icon: "floating-action-button-icon",
            "fade-enter": "floating-action-button-fade-enter",
            "fade-enter-to": "floating-action-button-fade-enter-to",
            "fade-enter-active": "floating-action-button-fade-enter-active",
            "fade-leave-to": "floating-action-button-fade-leave-to",
            "fade-enter-from": "floating-action-button-fade-enter-from",
            "fade-leave-active": "floating-action-button-fade-leave-active"
        };
        var _ = (0,
        r.Z)($, (function() {
            var e, t = this, n = t.$createElement, i = t._self._c || n;
            return i("div", {
                class: [t.$style.component, (e = {},
                e[t.$style.expanded] = t.isExpanded,
                e)]
            }, [i("transition-group", {
                class: t.$style.container,
                attrs: {
                    tag: "div",
                    appear: "",
                    "enter-active-class": t.$style["fade-enter-active"],
                    "enter-class": t.$style["fade-enter"],
                    "enter-from-class": t.$style["fade-enter-from"],
                    "enter-to-class": t.$style["fade-enter-to"],
                    "leave-active-class": t.$style["fade-leave-active"],
                    "leave-class": t.$style["fade-leave"],
                    "leave-to-class": t.$style["fade-leave-to"]
                }
            }, t._l(t.tabs, (function(e) {
                var n, s;
                return i("div", {
                    key: e.title,
                    class: [t.$style.tab, (n = {},
                    n[t.$style.active] = t.isExpanded,
                    n[t.$style.selected] = t.isExpanded && e.id === t.selectedTab,
                    n)],
                    attrs: {
                        title: e.title
                    },
                    on: {
                        click: function(n) {
                            return t.$emit("set-tab", e.id)
                        }
                    }
                }, [e.badge ? i("div", {
                    class: [t.$style.badge, (s = {},
                    s[t.$style.active] = !t.isExpanded || e.id !== t.selectedTab,
                    s)]
                }, [i("span", {
                    class: t.$style.count,
                    domProps: {
                        textContent: t._s(e.badge)
                    }
                })]) : t._e(), t._v(" "), i("span", {
                    class: [e.icon, "icon-font-chess", t.$style.icon]
                })])
            }
            )), 0)], 1)
        }
        ), [], !1, (function floating_action_button_injectStyles(e) {
            this.$style = C.locals || C
        }
        ), null, null).exports
          , k = (0,
        i.defineComponent)({
            name: "HeaderTabs",
            props: {
                selectedTab: {
                    type: String,
                    required: !0
                },
                tabs: {
                    type: Array,
                    required: !0
                }
            },
            emits: ["set-tab"]
        })
          , w = {
            component: "header-tabs-component",
            tab: "header-tabs-tab",
            selected: "header-tabs-selected",
            disabled: "header-tabs-disabled",
            count: "header-tabs-count"
        };
        var T = (0,
        r.Z)(k, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, e._l(e.tabs, (function(t) {
                var i;
                return n("div", {
                    key: t.id,
                    class: [e.$style.tab, (i = {},
                    i[e.$style.selected] = e.selectedTab === t.id,
                    i[e.$style.disabled] = !t.badge,
                    i)],
                    on: {
                        click: function(n) {
                            return e.$emit("set-tab", t.id)
                        }
                    }
                }, [e._v("\n    " + e._s(t.title) + "\n    "), n("div", {
                    class: e.$style.count,
                    domProps: {
                        textContent: e._s(t.badge)
                    }
                })])
            }
            )), 0)
        }
        ), [], !1, (function header_tabs_injectStyles(e) {
            this.$style = w.locals || w
        }
        ), null, null).exports
          , S = (0,
        i.defineComponent)({
            name: "HeaderMenu",
            components: {
                HeaderTabs: T
            },
            props: {
                challenges: {
                    type: Array,
                    required: !0
                },
                declineAllLabel: {
                    type: String,
                    required: !0
                },
                filters: {
                    type: Array,
                    required: !0
                },
                notifications: {
                    type: Array,
                    required: !0
                },
                selectedFilter: {
                    type: String,
                    required: !0
                },
                isDeclineAllLabelVisible: {
                    type: Boolean,
                    required: !0
                }
            },
            emits: ["clear", "set-filter"]
        })
          , x = {
            component: "header-menu-component",
            options: "header-menu-options"
        };
        var I = (0,
        r.Z)(S, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [n("header-tabs", {
                attrs: {
                    "selected-tab": e.selectedFilter,
                    tabs: e.filters
                },
                on: {
                    "set-tab": function(t) {
                        return e.$emit("set-filter", t)
                    }
                }
            }), e._v(" "), e.isDeclineAllLabelVisible ? n("div", {
                class: e.$style.options,
                domProps: {
                    textContent: e._s(e.declineAllLabel)
                },
                on: {
                    click: function(t) {
                        return e.$emit("clear")
                    }
                }
            }) : e._e()], 1)
        }
        ), [], !1, (function header_menu_injectStyles(e) {
            this.$style = x.locals || x
        }
        ), null, null).exports
          , L = (0,
        i.defineComponent)({
            name: "List",
            props: {
                isExpanded: Boolean
            },
            computed: {
                containerClasses() {
                    return [this.$style.container, {
                        [this.$style.expanded]: this.isExpanded,
                        [this.$style.collapsed]: !this.isExpanded
                    }]
                }
            }
        })
          , A = {
            component: "list-component",
            container: "list-container",
            expanded: "list-expanded",
            collapsed: "list-collapsed"
        };
        var F = (0,
        r.Z)(L, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [n("div", {
                class: e.containerClasses
            }, [e._t("default")], 2)])
        }
        ), [], !1, (function list_injectStyles(e) {
            this.$style = A.locals || A
        }
        ), null, null).exports
          , N = n(94338)
          , E = (0,
        i.defineComponent)({
            name: "NotificationListItem",
            components: {
                Avatar: d,
                GameType: p,
                V5Button: s.V5Button
            },
            directives: {
                tooltip: N.Z
            },
            props: {
                notification: {
                    type: Object,
                    required: !0
                }
            },
            emits: ["dismiss-notification"],
            data: ()=>({
                animationDurationOffset: 0,
                widthOffset: 100
            }),
            computed: {
                durationStyle() {
                    return this.notification.duration && this.notification.durationCountdownVisible ? {
                        "--duration-width-offset": `${this.widthOffset}%`,
                        "animation-duration": `${Number(this.notification.duration + this.animationDurationOffset)}ms`
                    } : {}
                },
                isDismissVisible() {
                    return !this.notification.links || !this.notification.links.filter((e=>e.label === this.$trans("Decline"))).length
                }
            },
            mounted() {
                this.calcDuration()
            },
            methods: {
                calcDuration() {
                    var e;
                    (null == (e = this.notification) ? void 0 : e.duration) && (this.animationDurationOffset = Number(this.notification.timestamp) - (new Date).getTime(),
                    this.widthOffset = 100 - this.animationDurationOffset / this.notification.duration * -100)
                },
                handleClick() {
                    this.notification.clicked && this.notification.clicked()
                },
                handleDismiss() {
                    this.notification.closed && this.notification.closed(),
                    this.$emit("dismiss-notification", this.notification)
                },
                sortNotificationLinks(e) {
                    return e ? [...e].sort((e=>e.label === this.$trans("Decline") ? -1 : 1)) : []
                },
                generateButtonClass({label: e}) {
                    return e === this.$trans("Approve") ? this.$style["approve-button"] : e === this.$trans("Accept") ? this.$style["accept-button"] : e === this.$trans("View") ? this.$style["view-button"] : void 0
                },
                generateLegacyLinkIcon(e) {
                    return e.label === this.$trans("Decline") ? "incorrect" : "correct"
                }
            }
        })
          , D = {
            component: "notification-list-item-component",
            clickable: "notification-list-item-clickable",
            "accept-button": "notification-list-item-accept-button",
            "approve-button": "notification-list-item-approve-button",
            "view-button": "notification-list-item-view-button",
            duration: "notification-list-item-duration",
            slide: "notification-list-item-slide",
            subtitle: "notification-list-item-subtitle",
            actions: "notification-list-item-actions",
            button: "notification-list-item-button"
        };
        var O = (0,
        r.Z)(E, (function() {
            var e, t = this, n = t.$createElement, i = t._self._c || n;
            return i("div", {
                class: [t.$style.component, (e = {},
                e[t.$style.clickable] = t.notification.clicked || t.notification.route,
                e)],
                on: {
                    click: t.handleClick
                }
            }, [t.notification.achievementUrl || t.notification.avatar || t.notification.avatarUrl ? i("avatar", {
                attrs: {
                    height: "75",
                    width: "75",
                    src: t.notification.achievementUrl || t.notification.avatar || t.notification.avatarUrl,
                    alt: t.notification.content
                }
            }) : t._e(), t._v(" "), t.notification.icon ? i("game-type", {
                class: t.$style.icon,
                attrs: {
                    "icon-background-color": t.notification.iconBackgroundColor,
                    "is-challenge": !1,
                    "game-icon": t.notification.icon
                }
            }) : t._e(), t._v(" "), i(t.notification.route ? "a" : "div", {
                tag: "component",
                class: t.$style.subtitle,
                attrs: {
                    href: t.notification.route
                },
                domProps: {
                    innerHTML: t._s(t.notification.content)
                }
            }), t._v(" "), i("div", {
                class: t.$style.actions
            }, [t._l(t.sortNotificationLinks(t.notification.links), (function(e, n) {
                return i("v5-button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: e.label,
                        expression: "link.label"
                    }],
                    key: n,
                    class: [t.$style.button, t.generateButtonClass(e)],
                    attrs: {
                        size: "small",
                        title: e.label
                    },
                    on: {
                        click: function(t) {
                            return t.preventDefault(),
                            e.onClick.apply(null, arguments)
                        }
                    }
                }, [i("span", {
                    class: ["icon-font-chess ui_v5-button-icon", e.icon || t.generateLegacyLinkIcon(e)]
                })])
            }
            )), t._v(" "), t.notification.closable && t.isDismissVisible ? i("v5-button", {
                class: [t.$style.button, t.$style["dismiss-button"]],
                attrs: {
                    size: "x-small",
                    title: t.$trans("Dismiss")
                },
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.handleDismiss.apply(null, arguments)
                    }
                }
            }, [i("span", {
                staticClass: "icon-font-chess ui_v5-button-icon incorrect"
            })]) : t._e()], 2), t._v(" "), t.notification.duration ? i("div", {
                class: t.$style.duration,
                style: t.durationStyle
            }) : t._e()], 1)
        }
        ), [], !1, (function notification_list_item_injectStyles(e) {
            this.$style = D.locals || D
        }
        ), null, null)
          , q = O.exports
          , j = (0,
        i.defineComponent)({
            name: "Settings",
            components: {
                V5Switch: s.V5Switch
            },
            props: {
                settings: Array
            },
            emits: ["change-setting"]
        })
          , z = {
            component: "settings-component",
            row: "settings-row"
        };
        var B = (0,
        r.Z)(j, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: e.$style.component
            }, [n("div", {
                class: e.$style.row,
                domProps: {
                    textContent: e._s(e.$trans("Settings"))
                }
            }), e._v(" "), e._l(e.settings, (function(t, i) {
                return n("div", {
                    key: "setting-" + i,
                    class: e.$style.row
                }, [e._v("\n    " + e._s(t.title) + "\n    "), n("v5-switch", {
                    class: e.$style.switch,
                    attrs: {
                        name: t.id,
                        value: t.value
                    },
                    on: {
                        input: function(n) {
                            return e.$emit("change-setting", {
                                value: n,
                                setting: t
                            })
                        }
                    }
                })], 1)
            }
            ))], 2)
        }
        ), [], !1, (function settings_injectStyles(e) {
            this.$style = z.locals || z
        }
        ), null, null).exports
          , R = n(24367)
          , V = n(46832)
          , U = (0,
        i.defineComponent)({
            name: "ToasterCenter",
            components: {
                List: F,
                ChallengeListItem: v,
                NotificationListItem: q,
                HeaderMenu: I,
                FloatingActionButton: _,
                Settings: B
            },
            props: {
                isDeclineAllLabelVisible: Boolean,
                isExpanded: Boolean,
                tabs: Array,
                filters: Array,
                challenges: {
                    type: Array,
                    required: !0
                },
                notifications: {
                    type: Array,
                    required: !0
                },
                settings: {
                    type: Array,
                    required: !0
                },
                selectedFilter: String,
                selectedTab: String,
                headerEnabled: {
                    type: Boolean,
                    required: !0,
                    default: !0
                }
            },
            emits: ["accept-challenge", "change-setting", "collapse", "clear", "decline-challenge", "mousemove", "dismiss-notification", "set-tab", "set-filter"],
            data: ()=>({
                Tabs: R.m
            }),
            computed: {
                settingsTabSelected() {
                    return this.selectedTab === R.m.Settings
                },
                isOutgoing() {
                    return this.selectedFilter === V.l.Outgoing
                },
                itemComponent() {
                    return this.selectedTab === R.m.Requests ? v : q
                },
                items() {
                    return this.selectedTab === R.m.Requests ? this.challenges : this.notifications
                },
                declineAllLabel() {
                    return this.selectedTab === R.m.Notifications ? this.$trans("Clear all") : this.selectedFilter === V.l.Incoming ? this.$trans("Decline all") : this.$trans("Cancel all")
                }
            },
            watch: {
                "items.length": function(e, t) {
                    e < t || this.scrollToBottom()
                }
            },
            methods: {
                scrollToBottom() {
                    this.$nextTick((()=>{
                        const e = this.$refs.scrollbox;
                        null == e || e.scrollTo({
                            top: e.scrollHeight,
                            behavior: "smooth"
                        })
                    }
                    ))
                }
            }
        })
          , Z = {
            component: "toaster-center-component",
            scrollbox: "toaster-center-scrollbox",
            collapse: "toaster-center-collapse"
        };
        var P = (0,
        r.Z)(U, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: e.$style.component,
                on: {
                    mousemove: function(t) {
                        return e.$emit("mousemove", t)
                    }
                }
            }, [e.isExpanded ? n("div", {
                class: ["icon-font-chess x", e.$style.collapse],
                on: {
                    click: function(t) {
                        return e.$emit("collapse", t)
                    }
                }
            }) : e._e(), e._v(" "), n("list", {
                attrs: {
                    "is-expanded": e.isExpanded
                }
            }, [n("transition", {
                attrs: {
                    name: "toaster-center-header"
                }
            }, [e.headerEnabled ? n("header-menu", {
                attrs: {
                    challenges: e.challenges,
                    "decline-all-label": e.declineAllLabel,
                    filters: e.filters,
                    notifications: e.notifications,
                    "selected-filter": e.selectedFilter,
                    "is-decline-all-label-visible": e.isDeclineAllLabelVisible
                },
                on: {
                    clear: function(t) {
                        return e.$emit("clear", t)
                    },
                    "set-filter": function(t) {
                        return e.$emit("set-filter", t)
                    }
                }
            }) : e._e()], 1), e._v(" "), e.settingsTabSelected ? n("Settings", {
                attrs: {
                    settings: e.settings
                },
                on: {
                    "change-setting": function(t) {
                        return e.$emit("change-setting", t)
                    }
                }
            }) : n("div", {
                ref: "scrollbox",
                class: e.$style.scrollbox
            }, e._l(e.items, (function(t) {
                return n(e.itemComponent, {
                    key: t.id,
                    tag: "component",
                    attrs: {
                        challenge: t,
                        notification: t,
                        "is-outgoing": e.isOutgoing
                    },
                    on: {
                        "decline-challenge": function(t) {
                            return e.$emit("decline-challenge", t)
                        },
                        "accept-challenge": function(t) {
                            return e.$emit("accept-challenge", t)
                        },
                        "dismiss-notification": function(t) {
                            return e.$emit("dismiss-notification", t)
                        }
                    }
                })
            }
            )), 1)], 1), e._v(" "), n("floating-action-button", {
                attrs: {
                    "selected-tab": e.selectedTab,
                    "is-expanded": e.isExpanded,
                    tabs: e.tabs
                },
                on: {
                    "set-tab": function(t) {
                        return e.$emit("set-tab", t)
                    }
                }
            })], 1)
        }
        ), [], !1, (function toaster_center_injectStyles(e) {
            this.$style = Z.locals || Z
        }
        ), null, null).exports
          , M = (e=>(e[e.Live = 0] = "Live",
        e[e.RCN = 1] = "RCN",
        e))(M || {})
          , H = n(86536)
          , W = n(46647)
          , Y = n(9524)
          , G = n(36157);
        var K = n(42330)
          , J = n(43695);
        var Q = n(78441)
          , X = n(7943)
          , ee = n(41103);
        async function declineChallenge(e) {
            e.alertId && (0,
            ee.K)(e.alertId);
            const t = J.i.challenges.outgoing.includes(e)
              , n = e.id;
            n && (e.type === M.Live && W.Y.emit(t ? H.L.CancelLiveChallenge : H.L.DeclineLiveChallenge, {
                challengeId: n
            }),
            e.type === M.RCN && W.Y.emit(t ? H.L.CancelRcnChallenge : H.L.DeclineRcnChallenge, {
                challengeId: n
            }),
            (0,
            X.A)(J.i.challenges[J.i.selectedFilter], e))
        }
        function declineAllChallenges() {
            const e = J.i.challenges[J.i.selectedFilter];
            for (; e.length; )
                declineChallenge(e[0])
        }
        var te = n(12562);
        function getSelectedTab() {
            return J.i.selectedTab
        }
        function dismissAllInTab() {
            getSelectedTab() === R.m.Notifications && function dismissAllNotifications() {
                const {notifications: e} = J.i;
                for (; e.length; )
                    (0,
                    te.N)(e[0].id)
            }(),
            getSelectedTab() === R.m.Requests && declineAllChallenges()
        }
        var ne = n(34272);
        function setChallengeFilter(e) {
            J.i.selectedFilter = e
        }
        var ie = n(22211);
        function getIncomingChallenges() {
            return J.i.challenges.incoming
        }
        var se = n(2201);
        function getFilteredChallenges() {
            return J.i.selectedFilter === V.l.Outgoing ? (0,
            se.r)() : getIncomingChallenges()
        }
        function getNotifications() {
            return J.i.notifications
        }
        function getTotalChallengeLength() {
            return (0,
            se.r)().concat(getIncomingChallenges()).length
        }
        var le = n(4074);
        var ae = n(71942);
        var oe = Object.defineProperty
          , ce = Object.defineProperties
          , re = Object.getOwnPropertyDescriptors
          , de = Object.getOwnPropertySymbols
          , he = Object.prototype.hasOwnProperty
          , ue = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,n)=>t in e ? oe(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
          , ge = (0,
        i.defineComponent)({
            el: "#toaster-center",
            name: "ToasterCenterController",
            components: {
                ToasterCenter: P
            },
            computed: {
                notifications: ()=>getNotifications(),
                incomingChallenges: ()=>getIncomingChallenges(),
                isDeclineAllLabelVisible: ()=>function isDeclineAllLabelVisible() {
                    return getSelectedTab() === R.m.Notifications ? getNotifications().length > 1 : getSelectedTab() === R.m.Requests && getFilteredChallenges().length > 1
                }(),
                outgoingChallenges: ()=>(0,
                se.r)(),
                filteredChallenges: ()=>getFilteredChallenges(),
                totalLength: ()=>function getTotalLength() {
                    return getTotalChallengeLength() + getNotifications().length
                }(),
                settings: ()=>function getToasterCenterSettings() {
                    const e = J.i.settings.find((e=>e.id === ae.V.AutoExpandAll));
                    return e && !e.value ? [e] : J.i.settings
                }(),
                selectedFilter: ()=>function getSelectedFilter() {
                    return J.i.selectedFilter
                }(),
                selectedTab: ()=>getSelectedTab(),
                headerEnabled: ()=>function isHeaderEnabled() {
                    if (getSelectedTab() === R.m.Notifications && getNotifications().length > 1)
                        return !0;
                    if (getSelectedTab() === R.m.Requests) {
                        if (getIncomingChallenges().length > 0 && (0,
                        se.r)().length > 0)
                            return !0;
                        if ((0,
                        se.r)().length > 0)
                            return !0;
                        if (getIncomingChallenges().length > 1)
                            return !0
                    }
                    return !1
                }(),
                isExpanded: ()=>(0,
                le.u)(),
                tabs: ()=>function getTabs() {
                    const e = [];
                    return (0,
                    le.u)() && e.push({
                        id: R.m.Settings,
                        icon: "circle-gearwheel",
                        title: (0,
                        g.dW)("Settings")
                    }),
                    getTotalChallengeLength() && e.push({
                        id: R.m.Requests,
                        badge: getTotalChallengeLength(),
                        icon: "chess-board-plus",
                        title: (0,
                        g.dW)("Challenges")
                    }),
                    getNotifications().length && e.push({
                        id: R.m.Notifications,
                        badge: getNotifications().length,
                        icon: "bell",
                        title: (0,
                        g.dW)("Notifications")
                    }),
                    e
                }(),
                filters: ()=>function getChallengeFilters() {
                    const e = [];
                    return getSelectedTab() === R.m.Notifications ? [] : (getIncomingChallenges().length && e.push({
                        id: V.l.Incoming,
                        title: (0,
                        g.dW)("Incoming"),
                        badge: getIncomingChallenges().length
                    }),
                    (0,
                    se.r)().length && e.push({
                        id: V.l.Outgoing,
                        title: (0,
                        g.dW)("Outgoing"),
                        badge: (0,
                        se.r)().length
                    }),
                    e)
                }()
            },
            watch: {
                totalLength(e) {
                    this.updateFilter(),
                    !e && this.isExpanded && (0,
                    Y.g)()
                }
            },
            mounted() {
                this.updateFilter()
            },
            methods: {
                handleAcceptChallenge(e) {
                    !async function acceptChallenge(e) {
                        (0,
                        Y.g)();
                        const t = e.id;
                        t && (W.Y.emit(e.type === M.Live ? H.L.AcceptLiveChallenge : H.L.AcceptRcnChallenge, {
                            challengeId: t
                        }),
                        (0,
                        G.o)(t))
                    }(e)
                },
                handleChangeSetting({value: e, setting: t}) {
                    var n, i;
                    !function changeToasterCenterSetting(e) {
                        const t = J.i.settings.findIndex((t=>t.id === e.id));
                        Object.assign(J.i.settings[t], e);
                        const n = J.i.settings.map((e=>({
                            id: e.id,
                            value: e.value
                        })));
                        window.localStorage.setItem(K.d, JSON.stringify(n))
                    }((n = ((e,t)=>{
                        for (var n in t || (t = {}))
                            he.call(t, n) && __defNormalProp(e, n, t[n]);
                        if (de)
                            for (var n of de(t))
                                ue.call(t, n) && __defNormalProp(e, n, t[n]);
                        return e
                    }
                    )({}, t),
                    i = {
                        value: e
                    },
                    ce(n, re(i))))
                },
                handleCollapse() {
                    (0,
                    Y.g)()
                },
                handleDeclineChallenge(e) {
                    declineChallenge(e)
                },
                handleDeclineAll() {
                    declineAllChallenges()
                },
                handleSetTab(e) {
                    (0,
                    le.u)() && getSelectedTab() === e ? (0,
                    Y.g)() : ((0,
                    ie.I)(e),
                    (0,
                    le.u)() || (0,
                    ne.m)())
                },
                handleSetFilter(e) {
                    setChallengeFilter(e)
                },
                handleClear() {
                    dismissAllInTab()
                },
                handleDismissNotification(e) {
                    (0,
                    te.N)(e.id)
                },
                handleMouseMove() {
                    (0,
                    Q.M)()
                },
                updateFilter() {
                    this.selectedFilter === V.l.Incoming && 0 === this.incomingChallenges.length && setChallengeFilter(V.l.Outgoing),
                    this.selectedFilter === V.l.Outgoing && 0 === this.outgoingChallenges.length && setChallengeFilter(V.l.Incoming),
                    this.selectedTab === R.m.Settings && (0,
                    ie.I)(R.m.Notifications),
                    this.selectedTab !== R.m.Notifications || this.notifications.length || (0,
                    ie.I)(R.m.Requests),
                    this.selectedTab === R.m.Requests && !getTotalChallengeLength() && this.notifications.length && (0,
                    ie.I)(R.m.Notifications)
                }
            }
        })
          , me = (0,
        r.Z)(ge, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("toaster-center", {
                attrs: {
                    challenges: e.filteredChallenges,
                    filters: e.filters,
                    "header-enabled": e.headerEnabled,
                    "is-expanded": e.isExpanded,
                    "is-decline-all-label-visible": e.isDeclineAllLabelVisible,
                    notifications: e.notifications,
                    settings: e.settings,
                    "selected-filter": e.selectedFilter,
                    "selected-tab": e.selectedTab,
                    tabs: e.tabs
                },
                on: {
                    "accept-challenge": e.handleAcceptChallenge,
                    clear: e.handleClear,
                    "change-setting": e.handleChangeSetting,
                    collapse: e.handleCollapse,
                    "decline-challenge": e.handleDeclineChallenge,
                    "dismiss-notification": e.handleDismissNotification,
                    mousemove: e.handleMouseMove,
                    "set-filter": e.handleSetFilter,
                    "set-tab": e.handleSetTab
                }
            })
        }
        ), [], !1, null, null, null).exports
    }
}]);
