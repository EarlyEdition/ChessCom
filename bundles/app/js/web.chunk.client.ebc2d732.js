window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
    web_blog_view: {
        tokens: [["variable", "/", ".+", "url"], ["text", "/blog"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            url: ".+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    i18n_web_blog_view: {
        tokens: [["variable", "/", ".+", "url"], ["text", "/blog"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            url: ".+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_security_register: {
        tokens: [["text", "/register"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    },
    i18n_web_security_register: {
        tokens: [["text", "/register"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    },
    web_security_login_and_go: {
        tokens: [["text", "/login_and_go"]],
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
    i18n_web_security_login_and_go: {
        tokens: [["text", "/login_and_go"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    },
    web_member_callback_block_member: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/member/block"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_user_callback_delete_comment: {
        tokens: [["variable", "/", "\\d+", "id"], ["text", "/callback/comment"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            id: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["DELETE"],
        schemes: ["https"]
    },
    web_user_callback_get_available_flair: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/user/get-available-flair"]],
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
    web_user_callback_load_notes: {
        tokens: [["text", "/callback/user/notes"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    },
    web_member_callback_mute_account: {
        tokens: [["variable", "/", "[^/]++", "user"], ["text", "/callback/member/mute-account"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_user_callback_post_note: {
        tokens: [["text", "/callback/user/note"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_user_callback_set_flair: {
        tokens: [["text", "/callback/user/set-flair"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_user_callback_set_status: {
        tokens: [["text", "/callback/user/set-status"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_user_settings_edit: {
        tokens: [["text", "/settings"]],
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
    },
    web_policies_community: {
        tokens: [["text", "/legal/community"]],
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
    i18n_web_policies_community: {
        tokens: [["text", "/legal/community"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    },
    web_member_callback_disable: {
        tokens: [["variable", "/", "\\d+", "id"], ["text", "/callback/members/disable"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            id: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["DELETE"],
        schemes: ["https"]
    },
    web_member_enable: {
        tokens: [["variable", "/", "\\d+", "id"], ["text", "/members/enable"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            id: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_user_home: {
        tokens: [["text", "/home"]],
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
    web_master_player_view: {
        tokens: [["variable", "/", ".+", "url"], ["text", "/players"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            url: ".+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    },
    i18n_web_master_player_view: {
        tokens: [["variable", "/", ".+", "url"], ["text", "/players"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            url: ".+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    },
    web_member_mute: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/member/mute"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_member_callback_remove_avatar: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/member/remove_avatar"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["DELETE"],
        schemes: ["https"]
    },
    web_user_callback_remove_user_custom_background: {
        tokens: [["variable", "/", "[^/]++", "user"], ["text", "/callback/remove/user_custom_background"]],
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
    web_member_reset_flair: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/member/reset_flair"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_member_unmute: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/member/unmute"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    }
}),
(("undefined" != typeof self ? self : this).wpChessCom_Yybx = ("undefined" != typeof self ? self : this).wpChessCom_Yybx || []).push([[5750], {
    60367: function(e, s, a) {
        "use strict";
        var t = a(94338)
          , r = a(90425)
          , n = a(18160);
        s.Z = {
            name: "CountryFlag",
            directives: {
                tooltip: t.Z
            },
            props: {
                code: {
                    type: [Number, String],
                    required: !1
                },
                name: {
                    type: [String, Object],
                    required: !1
                },
                size: {
                    type: String,
                    required: !1
                }
            },
            computed: {
                decoratedCode() {
                    return this.isChessVerified || this.isSanctioned ? "sanctioned" : this.code
                },
                isChessVerified() {
                    return ["fd", 431].includes(this.code)
                },
                isRussia() {
                    var e;
                    return ["ru", "RU", "116"].includes(null == (e = this.code) ? void 0 : e.toString())
                },
                isSanctioned() {
                    var e, s;
                    return Boolean((null == (s = null == (e = window.chesscom) ? void 0 : e.features) ? void 0 : s.includes("sanction_russia_flag")) && this.isRussia)
                },
                tooltip() {
                    return this.isChessVerified ? n.Z.trans("Due to the ongoing war and resulting international sanctions, Russian and Belarusian flags will not be shown for players in Verified events.") : this.name
                },
                ukraineLink: ()=>r.Z.generate("web_blog_view", {
                    url: "CHESScom/on-the-invasion-of-ukraine"
                })
            }
        }
    },
    83782: function(e, s, a) {
        "use strict";
        var t = a(4744);
        s.Z = {
            name: "Flair",
            props: {
                available: {
                    type: Boolean,
                    default: !0
                },
                showTheNothingFlair: {
                    type: Boolean,
                    default: !1
                },
                code: {
                    type: String,
                    default: t.Wp.code
                },
                size: {
                    type: String
                }
            },
            emits: ["click"],
            computed: {
                isNothing() {
                    return this.code === t.Wp.code
                }
            }
        }
    },
    39546: function(e, s, a) {
        "use strict";
        var t = a(32945)
          , r = a(94338)
          , n = a(7492);
        s.Z = {
            name: "UserFlairIcon",
            components: {
                Flair: t.Z
            },
            directives: {
                Tooltip: r.Z
            },
            mixins: [n.Z],
            props: {
                code: {
                    type: String
                },
                size: {
                    type: String,
                    default: ""
                }
            }
        }
    },
    16091: function(e, s, a) {
        "use strict";
        var t = a(81272)
          , r = a(6269)
          , n = a(81901)
          , c = a(69685)
          , i = a(4744);
        s.Z = {
            name: "UserTagline",
            components: {
                CountryFlag: t.Z,
                UserChessTitle: r.Z,
                UserFlairIcon: n.Z,
                UserUsername: c.Z
            },
            props: {
                country: {
                    type: Object,
                    required: !1
                },
                flairCode: {
                    type: String
                },
                isUsernameClickable: {
                    type: Boolean,
                    default: !0
                },
                isDarkMode: Boolean,
                iconAnchorIsEnabled: {
                    type: Boolean,
                    default: !0
                },
                membership: {
                    type: [Number, String],
                    default: i.p0.basic
                },
                notClickable: {
                    type: Boolean,
                    default: !1
                },
                rating: {
                    type: Number,
                    required: !1
                },
                title: {
                    type: String,
                    required: !1
                },
                url: {
                    type: String,
                    required: !1
                },
                usernameTheme: {
                    type: String,
                    default: "blue"
                },
                titleUrl: {
                    type: String,
                    required: !1
                },
                username: {
                    type: String,
                    required: !0
                },
                openProfileOnNewTab: {
                    type: Boolean,
                    required: !1
                },
                openTitleOnNewTab: {
                    type: Boolean,
                    required: !1
                }
            }
        }
    },
    6109: function(e, s, a) {
        "use strict";
        a.d(s, {
            SY: function() {
                return getFlairHref
            },
            gh: function() {
                return getFlairTooltip
            }
        });
        var t = a(90849)
          , r = a(4744);
        const getFlairHref = ({code: e, flairMembership: s, selfIsPremium: a})=>s >= r.p0.moderator ? r._j.about() : s === r.p0.cheater || s === r.p0.abuser ? t._j.communityGuidelines() : r.yc.includes(e) ? "" : a ? `${t._j.settings()}${t.VI}` : r._j.membership("flair")
          , getFlairTooltip = ({code: e, flairMembership: s})=>s >= r.p0.staff ? r.Iz.staff : s >= r.p0.moderator ? r.Iz.moderator : s < r.p0.basic ? r.Cz[s] : r.yc.includes(e) ? r.Cz[r.p0.unspecifiedClosed] : r.Iz.showYourFlair
    },
    7492: function(e, s, a) {
        "use strict";
        var t = a(6109)
          , r = a(4744)
          , n = a(36745)
          , c = a(38096);
        s.Z = {
            props: {
                membership: {
                    type: Number
                }
            },
            computed: {
                flairHref() {
                    return (0,
                    t.SY)({
                        code: this.standardizedFlairCodeFromMixin,
                        flairMembership: this.membership,
                        selfIsPremium: (0,
                        c.S_)("isPremium"),
                        selfIsModerator: (0,
                        c.S_)("isModerator")
                    })
                },
                flairTooltip() {
                    return (0,
                    t.gh)({
                        code: this.standardizedFlairCodeFromMixin,
                        flairMembership: this.membership
                    })
                },
                shouldSeeUpgradeModal: ()=>!(0,
                c.S_)("isPremium"),
                standardizedFlairCodeFromMixin() {
                    return this.code || this.userFlair && this.userFlair.code || r.Wp.code
                }
            },
            methods: {
                handleFlairClick() {
                    this.shouldSeeUpgradeModal ? (0,
                    n.l)({
                        referral: "flair",
                        startingSlide: "flair",
                        title: this.$trans("Want Your Own Flair?")
                    }) : this.flairHref.length && window.open(this.flairHref, "_blank")
                }
            }
        }
    },
    64694: function(e, s, a) {
        "use strict";
        a.d(s, {
            Y4: function() {
                return r
            },
            Jv: function() {
                return n
            },
            U3: function() {
                return c
            },
            _j: function() {
                return i
            },
            wl: function() {
                return o
            }
        });
        var t = a(90425);
        const r = {
            amplitudeProps: "data-amplitude-props",
            speedChessChampionshipUrl: "data-speed-chess-championship-url",
            challengeUser: "data-challenge-user",
            loginAndGoRoute: "data-route-login-and-go",
            registerRoute: "data-route-register",
            routes: "data-routes"
        }
          , n = {
            ONBOARD: "Onboard - StartReg",
            SEARCH: "Search"
        }
          , c = {
            CLUB_CHAT_MODERATOR_ACTION: "club-chat-moderator-action",
            HIDE_FRIEND_REQUEST: "hide-friend-request",
            MODAL_DID_HIDE: "MODAL_DID_HIDE",
            SEND_NEW_GAME_SEEK: "SEND_NEW_GAME_SEEK",
            SEND_NEW_GAME_SEEK_SUCCESS: "SEND_NEW_GAME_SEEK_SUCCESS",
            SHOW_ONBOARD_MODAL: "SHOW_ONBOARD_MODAL",
            SHOW_UPGRADE_MODAL: "SHOW_UPGRADE_MODAL",
            START_DIRECT_CHAT: "START_DIRECT_CHAT"
        }
          , i = {
            registerRoute: e=>t.Z.generate("web_security_register", {
                redirectUrl: e
            }),
            loginAndGoRoute: e=>t.Z.generate("web_security_login_and_go", {
                redirectUrl: e
            })
        }
          , o = {
            AMPLITUDE_NAV_SELECTION: "[data-amplitude-nav-selection]",
            FRIEND_RESULTS: ".svelte-friend-result",
            LESSONS_CONTAINER: ".lessons-container",
            LOGOUT_FORM: ".form.logout",
            LOGOUT_TRIGGER: "#sb .logout",
            MAIN_NAV: "#sb",
            MAIN_NAV_SOCIAL_LINK: "#sb .link.social",
            MAIN_NAV_HOME_LINK: "#sb .link.home",
            MAIN_NAV_LINKS: "#sb .menu > .link",
            MAIN_NAV_LOGIN_LINK: "#sb .login",
            MAIN_NAV_PLAY_LINK: "#sb .link.play",
            MAIN_NAV_REGISTER_LINK: ".signup.register",
            MAIN_TOP_NAV: "#sb .menu.top",
            MAIN_TOP_NAV_LINKS: "#sb .menu.top > .link",
            SEARCH_INPUT: 'input[name="q"]',
            SIGN_UP: ".signup",
            TOOLTIP: ".svelte-tooltip",
            TOOLTIP_TRIGGER: "[data-tooltip-content]"
        }
    },
    97203: function(e, s, a) {
        "use strict";
        a.d(s, {
            q: function() {
                return pixelDensity
            },
            b: function() {
                return retinaImageSrcset
            }
        });
        const pixelDensity = (e,s)=>{
            if (!e)
                return;
            let a = "@2x";
            return /\.svg$/.test(e) ? e : ([1.5, 3, 4].indexOf(s) > -1 && (a = `@${s}x`),
            e.replace(/(\.\w+)$/, (e=>a + e)))
        }
          , retinaImageSrcset = e=>{
            if (!e)
                return null;
            const s = e.substring(e.lastIndexOf("/") + 1)
              , a = e.replace(s, "");
            return `${e}, ${a}${pixelDensity(s)} 2x`
        }
    },
    74672: function(e, s, a) {
        "use strict";
        function postMessage(e) {
            window.postMessage(e, window.location.origin)
        }
        a.d(s, {
            o: function() {
                return postMessage
            }
        })
    },
    97122: function(e, s, a) {
        "use strict";
        a.d(s, {
            b: function() {
                return generateRoute
            }
        });
        var t = a(90425);
        const generateRoute = (e,s,a)=>{
            let r = e;
            const n = s;
            if (a) {
                const e = document.querySelector("[data-url-locale]")
                  , s = null == e ? void 0 : e.getAttribute("data-url-locale")
                  , t = "en" !== (null == s ? void 0 : s.split("_")[0]) && (null == s ? void 0 : s.split("_")[0]);
                t && n && (r = a,
                n._locale = t)
            }
            return t.Z.generate(r, n)
        }
    },
    90849: function(e, s, a) {
        "use strict";
        a.d(s, {
            VI: function() {
                return b
            },
            _j: function() {
                return w
            }
        });
        var t = a(97122)
          , r = a(18160);
        const n = "web_member_callback_block_member"
          , c = "web_user_callback_delete_comment"
          , i = "web_user_callback_get_available_flair"
          , o = "web_user_callback_load_notes"
          , u = "web_member_callback_mute_account"
          , l = "web_user_callback_post_note"
          , h = "web_user_callback_set_flair"
          , m = "web_user_callback_set_status"
          , d = "web_user_settings_edit"
          , k = "web_member_view"
          , b = "#flair-modal"
          , w = {
            blockUser: e=>(0,
            t.b)(n, {
                username: e
            }),
            communityGuidelines: ()=>(0,
            t.b)("web_policies_community"),
            deleteNote: e=>(0,
            t.b)(c, {
                id: e
            }),
            disableAccount: e=>(0,
            t.b)("web_member_callback_disable", {
                id: e
            }),
            enableAccount: e=>(0,
            t.b)("web_member_enable", {
                id: e
            }),
            getFlair: e=>(0,
            t.b)(i, {
                username: e
            }),
            impersonateUser: e=>(0,
            t.b)("web_user_home", {
                _impersonate: e
            }),
            loadNotes: (e,s,a)=>(0,
            t.b)(o, {
                userId: e,
                itemsPerPage: s,
                page: a
            }),
            masterPlayerLink: e=>(0,
            t.b)("web_master_player_view", {
                url: e
            }),
            muteUser: e=>(0,
            t.b)("web_member_mute", {
                username: e
            }),
            muteUserTemporary: e=>(0,
            t.b)(u, {
                user: e
            }),
            postNote: ()=>(0,
            t.b)(l),
            removeAvatar: e=>(0,
            t.b)("web_member_callback_remove_avatar", {
                username: e
            }),
            removeBackground: e=>(0,
            t.b)("web_user_callback_remove_user_custom_background", {
                user: e
            }),
            resetFlair: e=>(0,
            t.b)("web_member_reset_flair", {
                username: e
            }),
            setCode: ()=>(0,
            t.b)(h),
            setFlairStatus: ()=>(0,
            t.b)(m),
            settings: ()=>(0,
            t.b)(d),
            stopImpersonateUser: (e,s)=>(0,
            t.b)(e, s),
            unmuteUser: e=>(0,
            t.b)("web_member_unmute", {
                username: e
            }),
            userUrl: e=>(0,
            t.b)(k, {
                username: e
            })
        };
        r.Z.trans("Are you sure you want to disable this account?"),
        r.Z.trans("Edit status"),
        r.Z.trans("Are you sure you want to enable this account?"),
        r.Z.trans("Enter a status here"),
        r.Z.trans("Are you sure you want to impersonate this user?"),
        r.Z.trans("Error occurred"),
        r.Z.trans("Are you sure you want to mute this user?"),
        r.Z.trans("Are you sure you want to remove user About section?"),
        r.Z.trans("Are you sure you want to remove this user's avatar?"),
        r.Z.trans("Are you sure you want to remove this user's background?"),
        r.Z.trans("Are you sure you want to report user for spamming?"),
        r.Z.trans("Are you sure you want to reset this user's flair?"),
        r.Z.trans("Save status"),
        r.Z.trans("Your status must be %len% characters or less", {
            "%len%": 50
        }),
        r.Z.trans("Are you sure you want to stop impersonating this user?"),
        r.Z.trans("Are you sure you want to unmute this user?"),
        r.Z.trans("Your post seems to not fit our <a href=%url%>Community Guidelines</a>. Repeated violations may result in your account being restricted. Thank you for helping Chess.com stay a fun and friendly place for all!", {
            "%url%": w.communityGuidelines()
        })
    },
    36745: function(e, s, a) {
        "use strict";
        a.d(s, {
            l: function() {
                return showUpgradeModal
            }
        });
        var t = a(64694)
          , r = a(74672);
        const showUpgradeModal = (e={})=>{
            (0,
            r.o)({
                key: t.U3.SHOW_UPGRADE_MODAL,
                payload: e
            })
        }
    },
    34951: function(e, s) {
        "use strict";
        s.Z = {
            component: "user-flair-icon-component"
        }
    },
    62874: function(e, s) {
        "use strict";
        s.Z = {
            component: "user-tagline-component",
            username: "user-tagline-username",
            "not-clickable": "user-tagline-not-clickable",
            rating: "user-tagline-rating",
            darkMode: "user-tagline-darkMode",
            dark: "user-tagline-dark"
        }
    },
    29340: function(e, s, a) {
        "use strict";
        a.d(s, {
            s: function() {
                return render
            },
            x: function() {
                return t
            }
        });
        var render = function() {
            var e, s, a = this, t = a.$createElement, r = a._self._c || t;
            return a.isSanctioned ? r("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: a.$trans("Click here to see our stance on the war in Ukraine"),
                    expression: "$trans('Click here to see our stance on the war in Ukraine')"
                }],
                class: ["country-flags-component", "country-" + a.decoratedCode, (e = {},
                e["country-flags-" + a.size] = a.size,
                e)],
                attrs: {
                    href: a.ukraineLink,
                    target: "_blank"
                }
            }) : r("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: a.tooltip,
                    expression: "tooltip"
                }],
                class: ["country-flags-component", ("country-" + a.decoratedCode).toLowerCase(), (s = {},
                s["country-flags-" + a.size] = a.size,
                s)]
            })
        }
          , t = []
    },
    54445: function(e, s, a) {
        "use strict";
        a.d(s, {
            s: function() {
                return render
            },
            x: function() {
                return t
            }
        });
        var render = function() {
            var e = this
              , s = e.$createElement
              , a = e._self._c || s;
            return e.showTheNothingFlair || !e.isNothing ? a("span", {
                class: ["flair-component", "flair-" + e.code, "flair-" + e.size],
                on: {
                    click: function(s) {
                        return e.$emit("click", s)
                    }
                }
            }) : e._e()
        }
          , t = []
    },
    64868: function(e, s, a) {
        "use strict";
        a.d(s, {
            s: function() {
                return render
            },
            x: function() {
                return t
            }
        });
        var render = function() {
            var e = this
              , s = e.$createElement
              , a = e._self._c || s;
            return e.code ? a("a", {
                class: e.$style.component,
                attrs: {
                    "aria-label": e.flairTooltip,
                    href: e.flairHref
                },
                on: {
                    click: function(s) {
                        return s.stopPropagation(),
                        s.preventDefault(),
                        e.handleFlairClick.apply(null, arguments)
                    }
                }
            }, [a("flair", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.flairTooltip,
                    expression: "flairTooltip"
                }],
                attrs: {
                    code: e.code,
                    size: e.size
                }
            })], 1) : e._e()
        }
          , t = []
    },
    62438: function(e, s, a) {
        "use strict";
        a.d(s, {
            s: function() {
                return render
            },
            x: function() {
                return t
            }
        });
        var render = function() {
            var e, s, a = this, t = a.$createElement, r = a._self._c || t;
            return r("div", {
                class: [a.$style.component, (e = {},
                e[a.$style.darkMode] = a.isDarkMode,
                e)]
            }, [a.title ? r("user-chess-title", {
                attrs: {
                    "open-new-tab": a.openTitleOnNewTab,
                    url: a.titleUrl,
                    title: a.title
                }
            }) : a._e(), a._v(" "), r("user-username", {
                class: [a.$style.username, (s = {},
                s[a.$style["not-clickable"]] = a.notClickable,
                s)],
                attrs: {
                    "is-clickable": a.isUsernameClickable,
                    "open-new-tab": a.openProfileOnNewTab,
                    theme: a.isDarkMode ? "dark" : a.usernameTheme,
                    url: a.url,
                    "data-test-element": "user-tagline-username",
                    username: a.username
                }
            }), a._v(" "), a.rating ? r("span", {
                class: [a.$style.rating, a.$style[a.usernameTheme]]
            }, [a._v("\n    (" + a._s(a.rating) + ")\n  ")]) : a._e(), a._v(" "), a.country ? r("country-flag", {
                attrs: {
                    code: a.country.code,
                    name: a.country.name
                }
            }) : a._e(), a._v(" "), a.flairCode || a.membership ? r("user-flair-icon", {
                attrs: {
                    code: a.flairCode,
                    membership: a.membership
                }
            }) : a._e(), a._v(" "), a._t("default")], 2)
        }
          , t = []
    },
    81272: function(e, s, a) {
        "use strict";
        var t = a(29340)
          , r = a(46666)
          , n = (0,
        a(51900).Z)(r.Z, t.s, t.x, !1, null, null, null);
        s.Z = n.exports
    },
    32945: function(e, s, a) {
        "use strict";
        var t = a(54445)
          , r = a(41160)
          , n = (0,
        a(51900).Z)(r.Z, t.s, t.x, !1, null, null, null);
        s.Z = n.exports
    },
    6269: function(e, s, a) {
        "use strict";
        a.d(s, {
            Z: function() {
                return c
            }
        });
        var t = a(4744)
          , r = {
            name: "UserChessTitle",
            directives: {
                Tooltip: a(94338).Z
            },
            props: {
                title: {
                    type: String,
                    required: !0
                },
                url: {
                    type: String,
                    required: !1
                },
                openNewTab: {
                    type: Boolean,
                    required: !1
                }
            },
            data() {
                return {
                    fullTitle: t.rP[this.title]
                }
            },
            computed: {
                isLink() {
                    return Boolean(this.url)
                },
                target() {
                    return this.openNewTab ? "_blank" : null
                }
            }
        }
          , n = {
            component: "user-chess-title-component"
        };
        var c = (0,
        a(51900).Z)(r, (function() {
            var e = this
              , s = e.$createElement
              , a = e._self._c || s;
            return e.isLink ? a("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.fullTitle,
                    expression: "fullTitle"
                }],
                class: e.$style.component,
                attrs: {
                    href: e.url,
                    target: e.target
                },
                domProps: {
                    textContent: e._s(e.title)
                }
            }) : a("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.fullTitle,
                    expression: "fullTitle"
                }],
                class: e.$style.component,
                domProps: {
                    textContent: e._s(e.title)
                }
            })
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = n.locals || n
        }
        ), null, null).exports
    },
    81901: function(e, s, a) {
        "use strict";
        var t = a(64868)
          , r = a(43380)
          , n = a(78198);
        var c = (0,
        a(51900).Z)(r.Z, t.s, t.x, !1, (function injectStyles(e) {
            this.$style = n.Z.locals || n.Z
        }
        ), null, null);
        s.Z = c.exports
    },
    65602: function(e, s, a) {
        "use strict";
        var t = a(62438)
          , r = a(43412)
          , n = a(18741);
        var c = (0,
        a(51900).Z)(r.Z, t.s, t.x, !1, (function injectStyles(e) {
            this.$style = n.Z.locals || n.Z
        }
        ), null, null);
        s.Z = c.exports
    },
    69685: function(e, s, a) {
        "use strict";
        a.d(s, {
            Z: function() {
                return n
            }
        });
        var t = {
            name: "UserUsername",
            props: {
                theme: {
                    type: String,
                    required: !0
                },
                isClickable: {
                    type: Boolean,
                    default: !0
                },
                url: {
                    type: String,
                    required: !1
                },
                username: {
                    type: String,
                    required: !0
                },
                openNewTab: {
                    type: Boolean,
                    required: !1
                }
            },
            computed: {
                getTargetIfClickable() {
                    return this.openNewTab ? "_blank" : null
                },
                isLink() {
                    return Boolean(this.url)
                }
            }
        }
          , r = {
            component: "user-username-component",
            link: "user-username-link",
            gray: "user-username-gray",
            darkgray: "user-username-darkgray",
            blue: "user-username-blue",
            lightgray: "user-username-lightgray",
            current: "user-username-current",
            dark: "user-username-dark",
            bright: "user-username-bright",
            "bright-bold": "user-username-bright-bold",
            "blue-with-dark-mode": "user-username-blue-with-dark-mode",
            "blue-to-water": "user-username-blue-to-water"
        };
        var n = (0,
        a(51900).Z)(t, (function() {
            var e, s = this, a = s.$createElement;
            return (s._self._c || a)(s.isClickable ? "a" : "span", {
                tag: "component",
                class: [s.$style.component, s.$style[s.theme], (e = {},
                e[s.$style.link] = s.isClickable,
                e)],
                attrs: {
                    href: s.isClickable ? s.url : null,
                    target: s.getTargetIfClickable
                },
                domProps: {
                    textContent: s._s(s.username)
                }
            })
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = r.locals || r
        }
        ), null, null).exports
    },
    46666: function(e, s, a) {
        "use strict";
        var t = a(60367);
        s.Z = t.Z
    },
    41160: function(e, s, a) {
        "use strict";
        var t = a(83782);
        s.Z = t.Z
    },
    43380: function(e, s, a) {
        "use strict";
        var t = a(39546);
        s.Z = t.Z
    },
    43412: function(e, s, a) {
        "use strict";
        var t = a(16091);
        s.Z = t.Z
    },
    78198: function(e, s, a) {
        "use strict";
        a.d(s, {
            Z: function() {
                return t.Z
            }
        });
        var t = a(34951)
    },
    18741: function(e, s, a) {
        "use strict";
        a.d(s, {
            Z: function() {
                return t.Z
            }
        });
        var t = a(62874)
    },
    86437: function(e, s, a) {
        e.exports = a(84474)(279)
    }
}]);
