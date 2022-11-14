window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
    web_membership: {
        tokens: [["text", "/membership"]],
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
    i18n_web_membership: {
        tokens: [["text", "/membership"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
(("undefined" != typeof self ? self : this).wpChessCom_pB3B = ("undefined" != typeof self ? self : this).wpChessCom_pB3B || []).push([[776], {
    6374: function(t, e, s) {
        s.d(e, {
            C: function() {
                return logUpgradeModalToAmplitude
            }
        });
        var i = s(8096)
          , l = s(7463);
        function logUpgradeModalToAmplitude(t) {
            if (!(0,
            i.nJ)()) {
                const e = "no-ads" === t ? "removeAds" : "page";
                l.Z.logEvent("upgradeModal", {
                    trigger: e,
                    source: t
                })
            }
        }
    },
    2649: function(t, e, s) {
        s.d(e, {
            Z: function() {
                return w
            }
        });
        var i = s(6437)
          , l = s(8470)
          , r = s(6374)
          , o = s(8246)
          , a = {
            name: "TrialSlideshow",
            props: {
                slides: {
                    type: Array,
                    required: !0
                }
            },
            data: ()=>({
                currentSlide: {},
                timer: null,
                rotationInterval: 5e3
            }),
            computed: {
                visibleSlides() {
                    return this.slides.filter((t=>{
                        var e;
                        return t.icon === (null == (e = this.currentSlide) ? void 0 : e.icon)
                    }
                    ))
                }
            },
            created() {
                this.currentSlide = this.slides[0]
            },
            mounted() {
                this.startRotation(),
                this.rotationInterval = 3500
            },
            beforeDestroy() {
                this.clearTimeout()
            },
            methods: {
                clearTimeout() {
                    clearTimeout(this.timer)
                },
                handleClick(t) {
                    this.jump(t),
                    this.clearTimeout()
                },
                startRotation() {
                    this.clearTimeout(),
                    this.timer = setTimeout(this.next, this.rotationInterval)
                },
                next() {
                    const t = this.slides.indexOf(this.currentSlide);
                    let e = {};
                    e = t === this.slides.length - 1 ? this.slides[0] : this.slides[t + 1],
                    this.jump(e)
                },
                jump(t) {
                    this.currentSlide = t,
                    this.startRotation()
                }
            }
        }
          , n = {
            component: "trial-slideshow-component",
            "slideshow-container": "trial-slideshow-slideshow-container",
            slide: "trial-slideshow-slide",
            dots: "trial-slideshow-dots",
            dot: "trial-slideshow-dot",
            active: "trial-slideshow-active",
            "upgrade-icon": "trial-slideshow-upgrade-icon",
            "upgrade-icon-bg": "trial-slideshow-upgrade-icon-bg",
            "upgrade-icon-img": "trial-slideshow-upgrade-icon-img",
            "sprite-lessons": "trial-slideshow-sprite-lessons",
            "sprite-puzzles-battle": "trial-slideshow-sprite-puzzles-battle",
            "sprite-no-ads": "trial-slideshow-sprite-no-ads",
            "sprite-flair": "trial-slideshow-sprite-flair",
            "sprite-puzzles-learning": "trial-slideshow-sprite-puzzles-learning",
            "sprite-analysis": "trial-slideshow-sprite-analysis",
            "sprite-puzzles-rush": "trial-slideshow-sprite-puzzles-rush",
            "sprite-stats": "trial-slideshow-sprite-stats",
            "sprite-pawn": "trial-slideshow-sprite-pawn",
            "sprite-explorer": "trial-slideshow-sprite-explorer",
            "sprite-workout": "trial-slideshow-sprite-workout",
            "sprite-computer": "trial-slideshow-sprite-computer",
            "sprite-library": "trial-slideshow-sprite-library",
            "sprite-daily-puzzle": "trial-slideshow-sprite-daily-puzzle",
            "slide-title": "trial-slideshow-slide-title",
            "slide-subtitle": "trial-slideshow-slide-subtitle"
        }
          , d = s(1900);
        var u = (0,
        d.Z)(a, (function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                class: t.$style.component
            }, [s("transition-group", {
                class: t.$style["slideshow-container"],
                attrs: {
                    "enter-active-class": "animated slide-in-active",
                    "enter-class": "slide-in",
                    "leave-active-class": "animated slide-out-active",
                    "leave-class": "slide-out",
                    name: "slide",
                    tag: "div"
                }
            }, t._l(t.visibleSlides, (function(e) {
                return s("div", {
                    key: e.icon,
                    class: t.$style.slide
                }, [s("div", {
                    class: t.$style["upgrade-icon"]
                }, [s("div", {
                    class: t.$style["upgrade-icon-bg"]
                }), t._v(" "), s("div", {
                    class: [t.$style["upgrade-icon-img"], t.$style["sprite-" + e.icon]]
                })]), t._v(" "), s("h2", {
                    class: t.$style["slide-title"],
                    domProps: {
                        textContent: t._s(e.title)
                    }
                }), t._v(" "), s("h3", {
                    class: t.$style["slide-subtitle"],
                    domProps: {
                        textContent: t._s(e.subtitle)
                    }
                })])
            }
            )), 0), t._v(" "), s("div", {
                class: t.$style.dots
            }, t._l(t.slides, (function(e) {
                var i;
                return s("span", {
                    key: e.icon,
                    class: [t.$style.dot, (i = {},
                    i[t.$style.active] = e.icon === t.currentSlide.icon,
                    i)],
                    on: {
                        click: function(s) {
                            return t.handleClick(e)
                        }
                    }
                })
            }
            )), 0)], 1)
        }
        ), [], !1, (function injectStyles(t) {
            this.$style = n.locals || n
        }
        ), null, null).exports
          , h = s(425)
          , c = s(2305)
          , p = s(2898)
          , m = s(3981)
          , f = {
            name: "ModalTrial",
            components: {
                V5Button: i.V5Button,
                Modal: i.Modal,
                OutsideClose: i.OutsideClose,
                TrialSlideshow: u
            },
            props: {
                autoShow: {
                    type: Boolean,
                    default: !1
                },
                buttonText: {
                    type: String
                },
                closeOnAction: {
                    type: Boolean,
                    default: !0
                },
                hideText: {
                    default: (0,
                    c.dW)("Not Today"),
                    type: String
                },
                referral: {
                    type: String,
                    default: ""
                },
                startingSlide: {
                    type: String
                },
                subtitle: {
                    type: String
                },
                title: {
                    type: String,
                    required: !0
                },
                isGuest: {
                    type: Boolean,
                    default: !1
                },
                eligibleFirstTrial: {
                    type: Boolean,
                    default: !1
                },
                hasSlides: {
                    type: Boolean,
                    default: !0
                }
            },
            emits: ["modal-did-hide"],
            data() {
                return {
                    isLoggedIn: !this.isGuest && m.Z.isLoggedIn()
                }
            },
            computed: {
                isSignUpModal() {
                    return !m.Z.isLoggedIn() || this.isGuest
                },
                isModalWithCustomTitle() {
                    return l.Xw.includes(this.startingSlide)
                },
                slides() {
                    var t;
                    if (this.isGuest) {
                        const t = (0,
                        l.DL)(this.startingSlide).filter((t=>"explorer" !== t.icon));
                        return this.referral === l._G.GUEST_MODAL_SLIDES.pawn ? this.rearrangedSlides(this.referral, t) : t
                    }
                    return m.Z.isLoggedIn() ? (0,
                    l.MR)(null != (t = this.startingSlide) ? t : this.referral) : m.Z.isLoggedIn() || this.referral !== l._G.GUEST_MODAL_SLIDES.pawn ? (0,
                    l.DL)(this.startingSlide) : this.rearrangedSlides(this.referral, (0,
                    l.DL)(this.startingSlide))
                },
                route() {
                    var t, e;
                    return this.isGuest || !m.Z.isLoggedIn() ? (0,
                    o.pv)() : h.Z.generate("web_membership", {
                        c: null != (t = (0,
                        p.c)().referrer) ? t : this.referral,
                        ref_id: null != (e = (0,
                        p.c)().ref_id) ? e : null,
                        returnUrl: window.location.href
                    })
                },
                subtitleText() {
                    return this.subtitle ? this.subtitle : m.Z.eligibleFirstTrial() ? this.$trans("Try Premium for Free.") : m.Z.checkMembershipStatus("isGold") || m.Z.checkMembershipStatus("isPlatinum") ? this.$trans("Go Diamond.") : this.$trans("Go Premium.")
                },
                titleText() {
                    return this.isSignUpModal && !this.isModalWithCustomTitle ? this.$trans("Sign up for full access!") : this.title
                },
                normalizedButtonText() {
                    return this.isSignUpModal ? this.$trans("Sign Up") : this.buttonText ? this.buttonText : m.Z.eligibleFirstTrial() ? this.$trans("Try Free for 7 Days") : m.Z.checkMembershipStatus("isGold") || m.Z.checkMembershipStatus("isPlatinum") ? this.$trans("Upgrade Now") : this.$trans("Go Premium Now")
                },
                buttonTheme() {
                    return m.Z.isLoggedIn() && !this.isGuest ? "secondary" : "primary"
                }
            },
            mounted() {
                this.autoShow && !this.isSignUpModal && (0,
                r.C)(this.referral)
            },
            methods: {
                show() {
                    this.$refs.modalContainer.show(),
                    this.isSignUpModal || (0,
                    r.C)(this.referral)
                },
                hide() {
                    this.$refs.modalContainer.hide()
                },
                rearrangedSlides(t, e) {
                    const s = e.find((e=>e.icon === t)) || e[0]
                      , i = e.filter((t=>t !== s));
                    return i.unshift(s),
                    i
                }
            }
        }
          , g = {
            component: "modal-trial-component",
            modal: "modal-trial-modal",
            header: "modal-trial-header",
            subtitle: "modal-trial-subtitle",
            title: "modal-trial-title",
            guest: "modal-trial-guest",
            body: "modal-trial-body",
            button: "modal-trial-button",
            footer: "modal-trial-footer"
        };
        var w = (0,
        d.Z)(f, (function() {
            var t, e = this, s = e.$createElement, i = e._self._c || s;
            return i("modal", {
                ref: "modalContainer",
                class: [e.$style.component, (t = {},
                t[e.$style.guest] = !e.isLoggedIn,
                t)],
                attrs: {
                    corners: "rounded-lg",
                    "modal-width": "xl",
                    "close-on-action": e.closeOnAction,
                    "auto-show": e.autoShow
                },
                on: {
                    "modal-did-hide": function(t) {
                        return e.$emit("modal-did-hide")
                    }
                }
            }, [i("div", {
                class: e.$style.modal
            }, [i("outside-close", {
                on: {
                    click: function(t) {
                        return e.hide()
                    }
                }
            }), e._v(" "), i("div", {
                class: e.$style.header
            }, [e._t("header"), e._v(" "), i("h3", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.titleText)
                }
            }), e._v(" "), e.isLoggedIn ? i("h3", {
                class: e.$style.subtitle,
                domProps: {
                    textContent: e._s(e.subtitleText)
                }
            }) : e._e()], 2), e._v(" "), i("div", {
                class: e.$style.body
            }, [e.hasSlides ? i("trial-slideshow", {
                attrs: {
                    slides: e.slides
                }
            }) : e._e(), e._v(" "), e._t("body"), e._v(" "), i("div", {
                class: e.$style.button
            }, [i("v5-button", {
                attrs: {
                    size: "large",
                    "full-width": !0,
                    href: e.route,
                    theme: e.buttonTheme
                },
                domProps: {
                    textContent: e._s(e.normalizedButtonText)
                },
                on: {
                    click: e.hide
                }
            })], 1)], 2), e._v(" "), i("div", {
                class: e.$style.footer
            }, [e._t("footer", (function() {
                return [i("button", {
                    attrs: {
                        type: "button"
                    },
                    domProps: {
                        textContent: e._s(e.hideText)
                    },
                    on: {
                        click: e.hide
                    }
                })]
            }
            ))], 2)], 1)])
        }
        ), [], !1, (function modal_trial_injectStyles(t) {
            this.$style = g.locals || g
        }
        ), null, null).exports
    },
    3776: function(t, e, s) {
        s.r(e),
        s.d(e, {
            default: function() {
                return a
            }
        });
        var i = s(3992)
          , l = s(2649)
          , r = (0,
        i.defineComponent)({
            name: "UpgradeModal",
            components: {
                ModalTrial: l.Z
            },
            props: {
                options: {
                    default: ()=>({}),
                    type: Object
                }
            },
            emits: ["modal-did-hide"]
        })
          , o = {
            limit: "upgrade-modal-limit"
        };
        var a = (0,
        s(1900).Z)(r, (function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("ModalTrial", {
                attrs: {
                    "auto-show": "",
                    "button-text": t.options.buttonText,
                    "hide-text": t.options.hideText,
                    "starting-slide": t.options.startingSlide,
                    subtitle: t.options.subtitle,
                    title: t.options.title,
                    referral: t.options.referral
                },
                on: {
                    "modal-did-hide": function(e) {
                        return t.$emit("modal-did-hide")
                    }
                },
                scopedSlots: t._u([t.options.limitText ? {
                    key: "header",
                    fn: function() {
                        return [s("h3", {
                            class: t.$style.limit,
                            domProps: {
                                textContent: t._s(t.options.limitText)
                            }
                        })]
                    },
                    proxy: !0
                } : null], null, !0)
            })
        }
        ), [], !1, (function injectStyles(t) {
            this.$style = o.locals || o
        }
        ), null, null).exports
    }
}]);
