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
    },
    web_verification_index: {
        tokens: [["text", "/verified"]],
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
    i18n_web_verification_index: {
        tokens: [["text", "/verified"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_play_new: {
        tokens: [["text", "/play/online/new"]],
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
    i18n_web_play_new: {
        tokens: [["text", "/play/online/new"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_archive_index: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/games/archive"]],
        defaults: {
            username: null,
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    i18n_web_archive_index: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/games/archive"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            username: null,
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
    web_member_callback_trophy_list: {
        tokens: [["variable", "/", "[^/]++", "trophyType"], ["variable", "/", "[^/]++", "username"], ["text", "/callback/member/trophy"]],
        defaults: {
            trophyType: null,
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_callback_get_trophies: {
        tokens: [["text", "/callback/trophies"]],
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
    web_user_trophy_showcase_callback: {
        tokens: [["text", "/showcase"], ["variable", "/", "[^/]++", "username"], ["text", "/callback/user/trophy"]],
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
    web_callback_count_user_trophies: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/count/user_trophy"]],
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
    web_feature_trophy_callback: {
        tokens: [["variable", "/", "0|1", "featured"], ["variable", "/", "\\d+", "id"], ["text", "/callback/feature/trophy"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            id: "\\d+",
            featured: "0|1",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_award_trophy_callback: {
        tokens: [["variable", "/", "\\d+", "trophyId"], ["variable", "/", "[^/]++", "username"], ["text", "/callback/award/trophy"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            trophyId: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_user_callback_lifetime_score: {
        tokens: [["variable", "/", "[^/]++", "opponent"], ["variable", "/", "[^/]++", "user"], ["text", "/callback/user/lifetime-score"]],
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
    web_game_live: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/game/live"]],
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
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_game_rcn: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/game/rcn"]],
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
    i18n_web_game_rcn: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/game/rcn"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_puzzles_mode_battle_view: {
        tokens: [["variable", "/", "[^/]++", "shortUuid"], ["text", "/puzzles/battle"]],
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
    i18n_web_puzzles_mode_battle_view: {
        tokens: [["variable", "/", "[^/]++", "shortUuid"], ["text", "/puzzles/battle"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
(("undefined" != typeof self ? self : this).wpChessCom_Yybx = ("undefined" != typeof self ? self : this).wpChessCom_Yybx || []).push([[2179], {
    5221: function(e, t) {
        "use strict";
        t.Z = {
            name: "IconFont",
            props: {
                isDarkMode: {
                    type: Boolean,
                    default: !1
                },
                name: {
                    type: String,
                    required: !0
                },
                theme: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                iconFamilyTheme() {
                    return this.theme ? `icon-font-${this.theme}` : ""
                }
            }
        }
    },
    89664: function(e, t, s) {
        "use strict";
        var n = s(8868);
        t.Z = {
            name: "AdminActions",
            components: {
                IconButton: n.Z
            },
            props: {
                canModerate: {
                    type: Boolean,
                    default: !1
                },
                canMuteOnChat: {
                    type: Boolean,
                    default: !1
                },
                clientName: String,
                canWarnOnChat: Boolean,
                canModerateOnChat: Boolean,
                userAlreadyMutedOnChat: Boolean
            },
            emits: ["chat-kick-user", "chat-unmute-user", "chat-mute-user-remove-messages", "chat-mute-user", "chat-warn-user", "ban-user", "kick-user", "mute-user", "warn-user"]
        }
    },
    45020: function(e, t, s) {
        "use strict";
        var n = s(94338)
          , r = s(27689)
          , i = Object.defineProperty
          , o = Object.getOwnPropertySymbols
          , a = Object.prototype.hasOwnProperty
          , c = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? i(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        t.Z = {
            name: "AnalysisOptionsDropdown",
            directives: {
                Tooltip: n.Z
            },
            mixins: [r.Z],
            props: {
                target: {
                    type: HTMLElement,
                    required: !0
                },
                position: {
                    type: Object,
                    required: !0
                },
                analysisOptions: {
                    type: Array,
                    default: ()=>[]
                }
            },
            emits: ["option-selected", "hide"],
            data() {
                return ((e,t)=>{
                    for (var s in t || (t = {}))
                        a.call(t, s) && __defNormalProp(e, s, t[s]);
                    if (o)
                        for (var s of o(t))
                            c.call(t, s) && __defNormalProp(e, s, t[s]);
                    return e
                }
                )({}, this.createDropdown(["analysis"]))
            },
            mounted() {
                const e = {
                    target: this.target
                };
                this.showDropdown(e, "analysis", (e=>{
                    e.left -= this.position.left,
                    e.top -= this.position.top
                }
                ))
            },
            methods: {
                onClickOption(e, t) {
                    e.examineId = t,
                    this.$emit("option-selected", e)
                }
            }
        }
    },
    62253: function(e, t, s) {
        "use strict";
        var n = s(94338)
          , r = s(27689)
          , i = Object.defineProperty
          , o = Object.getOwnPropertySymbols
          , a = Object.prototype.hasOwnProperty
          , c = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? i(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        t.Z = {
            name: "ChatOptionsDropdown",
            directives: {
                Tooltip: n.Z
            },
            mixins: [r.Z],
            props: {
                target: {
                    type: HTMLElement,
                    required: !0
                },
                position: {
                    type: Object,
                    required: !0
                },
                chatOptions: {
                    type: Array,
                    default: ()=>[]
                }
            },
            emits: ["option-selected", "hide"],
            data() {
                return ((e,t)=>{
                    for (var s in t || (t = {}))
                        a.call(t, s) && __defNormalProp(e, s, t[s]);
                    if (o)
                        for (var s of o(t))
                            c.call(t, s) && __defNormalProp(e, s, t[s]);
                    return e
                }
                )({}, this.createDropdown(["chat"]))
            },
            mounted() {
                const e = {
                    target: this.target
                };
                this.showDropdown(e, "chat", (e=>{
                    e.left -= this.position.left,
                    e.top -= this.position.top
                }
                ))
            },
            methods: {
                onClickOption(e, t) {
                    e.roomId = t,
                    this.$emit("option-selected", e)
                }
            }
        }
    },
    42227: function(e, t, s) {
        "use strict";
        var n = s(94338);
        t.Z = {
            name: "IconButton",
            directives: {
                Tooltip: n.Z
            },
            props: {
                action: Function,
                btnColor: String,
                iconName: {
                    type: String,
                    required: !0
                },
                label: {
                    type: String,
                    required: !0
                }
            },
            emits: ["click"],
            methods: {
                onClick(e) {
                    this.action ? this.action(e) : this.$emit("click", e)
                }
            }
        }
    },
    52576: function(e, t, s) {
        "use strict";
        var n = s(94338);
        t.Z = {
            name: "IconLink",
            directives: {
                Tooltip: n.Z
            },
            props: {
                url: String,
                iconColor: String,
                iconName: {
                    type: String,
                    required: !0
                },
                label: {
                    type: String,
                    required: !0
                }
            },
            emits: ["click"]
        }
    },
    474: function(e, t) {
        "use strict";
        t.Z = {
            name: "LabeledIconButton",
            props: {
                action: Function,
                btnColor: String,
                iconName: {
                    type: String,
                    required: !0
                },
                label: {
                    type: String,
                    required: !0
                }
            },
            emits: ["click"],
            methods: {
                onClick(e) {
                    this.action ? this.action(e) : this.$emit("click", e)
                }
            }
        }
    },
    84906: function(e, t) {
        "use strict";
        t.Z = {
            name: "LabeledIconButton",
            props: {
                url: String,
                iconColor: String,
                iconName: {
                    type: String,
                    required: !0
                },
                label: {
                    type: String,
                    required: !0
                }
            },
            emits: ["click"]
        }
    },
    67631: function(e, t) {
        "use strict";
        t.Z = {
            name: "OnlineStatus",
            props: {
                isInLivechess: Boolean,
                isOnline: Boolean
            },
            computed: {
                classes() {
                    return [this.$style.component, {
                        [this.$style.online]: this.isOnline
                    }, {
                        [this.$style.live]: this.isInLivechess
                    }]
                }
            }
        }
    },
    29629: function(e, t, s) {
        "use strict";
        var n = s(28658)
          , r = s(53656)
          , i = s(1960)
          , o = s(8868)
          , a = s(37095)
          , c = s(39018)
          , l = s(70006);
        t.Z = {
            name: "UserActions",
            components: {
                IconFont: n.Z,
                IconButton: o.Z,
                IconLink: a.Z,
                LabeledIconButton: c.Z,
                LabeledIconLink: l.Z,
                ChatOptionsDropdown: i.Z,
                AnalysisOptionsDropdown: r.Z
            },
            props: {
                avatar: String,
                canAddFriend: Boolean,
                canBlockUser: Boolean,
                canReportUser: Boolean,
                canCreateChallenge: Boolean,
                canFollowUser: Boolean,
                canGiftMembership: Boolean,
                canRemoveFriend: Boolean,
                canSendMessage: Boolean,
                canInviteToChat: Boolean,
                canSendTrophy: Boolean,
                canUnblockUser: Boolean,
                canUnfollowUser: Boolean,
                canUseGlobalChat: Boolean,
                isEnabled: Boolean,
                hasInboundFriendRequest: Boolean,
                hasOutboundFriendRequest: Boolean,
                loggedAsAnother: Boolean,
                username: String,
                canObserveGame: {
                    type: Boolean,
                    default: !1
                },
                isBughousePartner: {
                    type: Boolean,
                    default: !1
                },
                challengeUrl: String,
                canCancelFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                canDeclineFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                canAcceptFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                archiveUrl: String,
                chatOptions: {
                    type: Array,
                    default: ()=>[]
                },
                position: {
                    type: Object,
                    default: ()=>({})
                },
                canInviteToAnalysis: {
                    type: Boolean,
                    default: !1
                },
                analysisOptions: {
                    type: Array,
                    default: ()=>[]
                },
                isConfirmVisible: {
                    type: Boolean,
                    default: !1
                },
                showBughousePartner: {
                    type: Boolean,
                    default: !1
                },
                membershipUrl: String,
                dynamicActions: Array
            },
            emits: ["show-archive", "show-gift", "show-trophy", "decline-friend-request", "cancel-friend-request", "add-friend", "invite-analysis", "request-chat", "send-message", "create-challenge", "user-popover-hide", "remove-friend", "accept-friend-request", "follow-user", "unfollow-user", "block-user", "unblock-user", "show-report", "observe-user", "bughouse-partner", "bughouse-unpartner", "start-direct-chat"],
            data: ()=>({
                allActions: !1,
                chatDropdownTarget: null,
                analysisDropdownTarget: null,
                buttonsListStyle: null
            }),
            computed: {
                showGlobalChatButton() {
                    return this.canUseGlobalChat && !this.canInviteToChat
                }
            },
            methods: {
                getIconComponent: e=>e ? a.Z : o.Z,
                getIconLabeledComponent: e=>e ? l.Z : c.Z,
                hidePopover() {
                    this.$emit("user-popover-hide")
                },
                onClickChallenge(e) {
                    this.challengeUrl ? this.hidePopover() : (e.username = this.username,
                    e.avatar = this.avatar,
                    this.$emit("create-challenge", e))
                },
                onClickMessage(e) {
                    e.username = this.username,
                    e.avatar = this.avatar,
                    this.$emit("send-message", e)
                },
                onClickChat(e) {
                    this.chatOptions.length ? this.chatDropdownTarget = e.target : this.onClickChatOption(e)
                },
                onClickChatOption(e) {
                    this.hideChatDropdown(),
                    this.$emit("request-chat", e)
                },
                onClickAnalysis(e) {
                    this.analysisDropdownTarget = e.target
                },
                onClickAnalysisOption(e) {
                    this.hideAnalysisDropdown(),
                    this.$emit("invite-analysis", e)
                },
                onClickAddFriend() {
                    this.$emit("add-friend")
                },
                onClickCancelFriendRequest() {
                    this.$emit("cancel-friend-request")
                },
                onClickDeclineFriendRequest() {
                    this.$emit("decline-friend-request")
                },
                onClickTrophy(e) {
                    e.username = this.username,
                    this.$emit("show-trophy", e)
                },
                onClickGift() {
                    this.$emit("show-gift")
                },
                onClickArchive(e) {
                    this.archiveUrl ? this.hidePopover() : (e.username = this.username,
                    this.$emit("show-archive", e))
                },
                onClickRemoveFriend() {
                    this.$emit("remove-friend")
                },
                onClickAcceptFriendRequest() {
                    this.$emit("accept-friend-request")
                },
                onClickFollowUser() {
                    this.$emit("follow-user")
                },
                onClickUnfollowUser() {
                    this.$emit("unfollow-user")
                },
                onClickBlockUser() {
                    this.$emit("block-user")
                },
                onClickUnblockUser() {
                    this.$emit("unblock-user")
                },
                onClickReport() {
                    this.$emit("show-report")
                },
                onClickObserve() {
                    this.$emit("observe-user")
                },
                onClickPartner() {
                    this.$emit("bughouse-partner")
                },
                onClickUnpartner() {
                    this.$emit("bughouse-unpartner")
                },
                showAllActions() {
                    this.allActions = !0,
                    this.$nextTick((()=>{
                        const e = document.getElementsByClassName(this.$style.buttonsList)[0];
                        if (e) {
                            const t = [...e.children]
                              , s = Math.max(...t.map((e=>e.offsetHeight)));
                            this.buttonsListStyle = {
                                height: s * Math.round(t.length / 2) + "px"
                            }
                        }
                    }
                    ))
                },
                startDirectChat() {
                    this.hidePopover(),
                    this.$emit("start-direct-chat")
                },
                hideChatDropdown() {
                    this.chatDropdownTarget = null
                },
                hideAnalysisDropdown() {
                    this.analysisDropdownTarget = null
                }
            }
        }
    },
    72053: function(e, t, s) {
        "use strict";
        var n = s(94271)
          , r = s(62649)
          , i = s(29973)
          , o = s(69977);
        t.Z = {
            name: "UserAvatar",
            directives: {
                ImageDefer: i.Z
            },
            components: {
                OnlineStatus: n.Z,
                PresenceSquare: o.Z
            },
            props: {
                alt: {
                    type: String,
                    default: ""
                },
                image: {
                    type: [String, null]
                },
                isLive: {
                    type: Boolean,
                    default: !1
                },
                presenceData: {
                    type: Object,
                    default: void 0
                },
                presenceSize: {
                    type: Number,
                    default: 1.5
                },
                isOnline: {
                    type: Boolean,
                    default: !1
                },
                url: {
                    type: String,
                    required: !1
                }
            },
            computed: {
                blankImage: ()=>(0,
                r.n)("bundles/web/images/user-image.svg"),
                imageDefer() {
                    return this.image ? {
                        src: this.image,
                        srcset: !0
                    } : void 0
                }
            }
        }
    },
    11853: function(e, t) {
        "use strict";
        t.Z = {
            name: "UserFlairStatus",
            props: {
                status: {
                    type: String,
                    required: !0
                }
            }
        }
    },
    40994: function(e, t, s) {
        "use strict";
        var n = s(86437)
          , r = s(24452)
          , i = s(4744)
          , o = s(27508)
          , a = s(64694)
          , c = s(87879)
          , l = s(59556)
          , u = s(18898)
          , d = s(24540)
          , h = s(56450)
          , p = s(13022)
          , m = s(16352)
          , f = s(65602)
          , v = s(26924)
          , b = s(94338)
          , g = s(16272)
          , y = s(90425)
          , k = s(74672)
          , w = s(37153)
          , _ = s(38096)
          , C = s(93186);
        t.Z = {
            name: "UserPopover",
            components: {
                LoaderThreeBounce: c.Z,
                UserAvatar: d.Z,
                UserFlairStatus: h.Z,
                UserRating: m.Z,
                UserTagline: f.Z,
                UserActions: u.Z,
                UserLifetimeScore: p.Z,
                AdminActions: l.Z,
                V5Button: n.V5Button,
                V5Input: n.V5Input,
                PresenceButton: C.Z
            },
            directives: {
                Tooltip: b.Z,
                ClickOutside: v.Z
            },
            props: {
                avatar: {
                    type: String,
                    default: ""
                },
                ratings: {
                    type: Array,
                    required: !0
                },
                chessTitle: {
                    type: String,
                    required: !1
                },
                country: {
                    type: Object,
                    required: !1
                },
                flair: {
                    type: Object,
                    default: ()=>({
                        code: "",
                        status: ""
                    })
                },
                isEnabled: {
                    type: Boolean
                },
                isGuest: {
                    type: Boolean,
                    default: !1
                },
                isLoading: {
                    type: Boolean,
                    default: !1
                },
                joinedDate: String,
                lastLoginDate: String,
                membership: {
                    type: Number,
                    required: !1
                },
                onlineStatus: {
                    type: [Boolean, String],
                    required: !1
                },
                usernameElementRef: {
                    type: HTMLElement,
                    required: !0
                },
                username: {
                    type: String,
                    required: !1
                },
                isFideVerified: {
                    type: Boolean,
                    default: !1
                },
                canAddFriend: Boolean,
                canBlockUser: Boolean,
                canUseGlobalChat: Boolean,
                canReportUser: Boolean,
                canCreateChallenge: Boolean,
                canFollowUser: Boolean,
                canGiftMembership: Boolean,
                canRemoveFriend: Boolean,
                canSendMessage: Boolean,
                canInviteToChat: Boolean,
                canSendTrophy: Boolean,
                canUnblockUser: Boolean,
                canUnfollowUser: Boolean,
                loggedAsAnother: Boolean,
                canMuteUser: {
                    type: Boolean,
                    default: !1
                },
                canObserveGame: {
                    type: Boolean,
                    default: !1
                },
                isBughousePartner: {
                    type: Boolean,
                    default: !1
                },
                shouldShowModeration: {
                    type: Boolean,
                    default: !1
                },
                challengeUrl: String,
                canCancelFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                canDeclineFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                canAcceptFriendRequest: {
                    type: Boolean,
                    default: !1
                },
                archiveUrl: String,
                chatOptions: {
                    type: Array,
                    default: ()=>[]
                },
                canInviteToAnalysis: {
                    type: Boolean,
                    default: !1
                },
                analysisOptions: {
                    type: Array,
                    default: ()=>[]
                },
                canModerate: {
                    type: Boolean,
                    default: !1
                },
                clientName: String,
                canWarnOnChat: Boolean,
                canModerateOnChat: Boolean,
                showBughousePartner: {
                    type: Boolean,
                    default: !1
                },
                openProfileOnNewTab: {
                    type: Boolean,
                    required: !1
                },
                membershipUrl: String,
                dynamicActions: Array,
                clubChatIdForModeratorActions: String,
                popoverPosition: {
                    type: Object,
                    default: null
                },
                presenceDetails: {
                    type: Object,
                    default: null
                },
                showProfileUrls: {
                    type: Boolean,
                    default: !0
                },
                userAlreadyMutedOnChat: Boolean,
                uuid: String,
                leagueCode: String,
                leagueDivision: String,
                leagueName: String,
                opponent: Object,
                lifetimeScore: Object
            },
            emits: ["chat-kick-user", "chat-mute-user", "chat-warn-user", "ban-user", "kick-user", "mute-user", "warn-user", "block-user", "remove-friend", "user-popover-hide", "request-chat", "invite-analysis", "bughouse-unpartner", "bughouse-partner", "observe-user", "show-trophy", "show-report", "unblock-user", "unfollow-user", "follow-user", "accept-friend-request", "start-direct-chat", "show-archive", "show-gift", "decline-friend-request", "cancel-friend-request", "add-friend", "send-message", "create-challenge"],
            data: ()=>({
                clubChatModeratorMessage: "",
                isLoggedIn: (0,
                _.jl)(),
                offset: 12,
                translations: i.Iz,
                confirmMessage: null,
                confirmCallback: null,
                position: {
                    x: 0,
                    y: 0,
                    top: 0,
                    left: 0
                }
            }),
            computed: {
                adminActionsIsVisible() {
                    return this.canModerate || this.canWarnOnChat || this.canModerateOnChat || this.clubChatIdForModeratorActions
                },
                formatedJoinedDate() {
                    return (0,
                    _.jl)() ? this.joinedDate : g.p6.relative(this.joinedDate)
                },
                formatedLastLoginDate() {
                    return (0,
                    _.jl)() ? this.presenceLastLoginDate : g.p6.relative(this.presenceLastLoginDate)
                },
                memberUrl() {
                    return y.Z.generate("web_member_view", {
                        username: this.username
                    })
                },
                fideUrl: ()=>y.Z.generate("web_verification_index"),
                ratingsToShow() {
                    return this.ratings.slice(0, 3)
                },
                isConfirmVisible() {
                    return !!this.confirmMessage && !!this.confirmCallback
                },
                isFideEnabledAndVerified() {
                    return this.isFideVerified
                },
                isLeaguePlayer() {
                    return this.leagueCode && this.leagueDivision && this.username
                },
                showOfflineText() {
                    return this.presenceDetails && !this.presenceDetails.isOnline
                },
                presenceLastLoginDate() {
                    var e;
                    return !(null == (e = this.presenceDetails) ? void 0 : e.offlineSince) || this.presenceDetails.isOfflineStatusUncertain ? this.lastLoginDate || "" : g.p6.relative(new Date(this.presenceDetails.offlineSince))
                },
                inlineStyles() {
                    return (0,
                    o.M)(this.position)
                },
                userDivision() {
                    return i._j.userDivision({
                        league: this.leagueCode,
                        division: this.leagueDivision
                    })
                }
            },
            mounted() {
                this.popoverPosition ? this.position = this.popoverPosition : this.updatePopoverPosition()
            },
            methods: {
                onMouseEnter() {
                    clearTimeout(this.hideTimeout)
                },
                onMouseLeave() {
                    this.hideTimeout = setTimeout((()=>{
                        this.hidePopover()
                    }
                    ), 500)
                },
                hidePopover() {
                    this.$emit("user-popover-hide")
                },
                onConfirmYes() {
                    this.confirmCallback && this.confirmCallback(),
                    this.onConfirmNo()
                },
                onConfirmNo() {
                    this.confirmMessage = null,
                    this.confirmCallback = null
                },
                onClickRemoveFriend() {
                    this.confirmMessage = this.$trans("Are you sure you want to remove this friend from your list?"),
                    this.confirmCallback = ()=>this.$emit("remove-friend")
                },
                onClickBlockUser() {
                    this.confirmMessage = this.$trans("Are you sure you want to block this user?"),
                    this.confirmCallback = ()=>this.$emit("block-user")
                },
                onClickWarn() {
                    this.confirmMessage = this.$trans("Are you sure you want to warn this user?"),
                    this.confirmCallback = ()=>this.$emit("warn-user")
                },
                onClickMute() {
                    this.confirmMessage = this.$trans("Are you sure you want to mute this user?"),
                    this.confirmCallback = ()=>this.$emit("mute-user")
                },
                onClickKick() {
                    this.confirmMessage = this.$trans("Are you sure you want to kick this user?"),
                    this.confirmCallback = ()=>this.$emit("kick-user")
                },
                onClickBan() {
                    this.confirmMessage = this.$trans("Are you sure you want to ban this user?"),
                    this.confirmCallback = ()=>this.$emit("ban-user")
                },
                onClickChatWarn() {
                    this.confirmMessage = this.$trans("Are you sure you want to warn this user?"),
                    this.clubChatIdForModeratorActions ? this.confirmCallback = this.onClubChatAction(w.x.WARN) : this.confirmCallback = ()=>this.$emit("chat-warn-user")
                },
                onClickChatMute() {
                    this.confirmMessage = this.$trans("Are you sure you want to mute this user?"),
                    this.clubChatIdForModeratorActions ? this.confirmCallback = this.onClubChatAction(w.x.MUTE) : this.confirmCallback = ()=>this.$emit("chat-mute-user")
                },
                onClickChatMuteRemoveMessages() {
                    this.confirmMessage = this.$trans("Are you sure you want to mute this user?"),
                    this.confirmCallback = this.onClubChatAction(w.x.MUTE, !0)
                },
                onClickChatUnMute() {
                    this.confirmMessage = this.$trans("Are you sure you want to unmute this user?"),
                    this.confirmCallback = this.onClubChatAction(w.x.UNMUTE)
                },
                onClickChatKick() {
                    this.confirmMessage = this.$trans("Are you sure you want to kick this user?"),
                    this.clubChatIdForModeratorActions || (this.confirmCallback = ()=>this.$emit("chat-kick-user"))
                },
                onClubChatAction(e, t) {
                    const s = {
                        chatId: this.clubChatIdForModeratorActions,
                        key: a.U3.CLUB_CHAT_MODERATOR_ACTION,
                        type: e,
                        userId: this.uuid
                    };
                    return t && (s.hideMessages = !0),
                    ()=>{
                        s.message = this.clubChatModeratorMessage,
                        (0,
                        k.o)(s)
                    }
                },
                updatePopoverPosition() {
                    if (!this.usernameElementRef || !this.$refs.userPopover)
                        return;
                    const e = this.usernameElementRef.getBoundingClientRect()
                      , {clientHeight: t, clientWidth: s} = this.$refs.userPopover;
                    this.position = (0,
                    r.MD)(e, t, s)
                }
            }
        }
    },
    20043: function(e, t, s) {
        "use strict";
        var n = s(28658);
        t.Z = {
            name: "UserRating",
            components: {
                IconFont: n.Z
            },
            props: {
                icon: {
                    type: String,
                    required: !0
                },
                rating: {
                    type: Number,
                    required: !0
                }
            }
        }
    },
    19594: function(e, t, s) {
        "use strict";
        var n = s(86437)
          , r = s(57463)
          , i = s(16272)
          , o = s(90425);
        t.Z = {
            name: "PresenceButton",
            components: {
                V5Button: n.V5Button
            },
            props: {
                username: {
                    type: String,
                    required: !0
                },
                userPresence: {
                    type: Object,
                    required: !0
                },
                isButtonSmall: {
                    type: Boolean,
                    default: !1
                },
                isIconsOnly: {
                    type: Boolean,
                    default: !1
                },
                isShowLastOnline: {
                    type: Boolean,
                    default: !1
                },
                isWatchOnly: {
                    type: Boolean,
                    default: !1
                },
                location: {
                    type: String,
                    default: "N/A"
                }
            },
            computed: {
                buttonData() {
                    const {battleLink: e, eventLink: t, gameLink: s, isOnline: n, isPlaying: r, offlineSince: a} = this.userPresence;
                    return r ? {
                        theme: this.isIconsOnly ? "" : "danger",
                        text: this.isIconsOnly ? "" : this.$trans("Watch"),
                        icon: "binoculars",
                        show: !0,
                        href: t || s || e
                    } : n ? {
                        theme: this.isIconsOnly ? "" : "primary",
                        text: this.isIconsOnly ? "" : this.$trans("Challenge"),
                        icon: "chess-board-plus",
                        show: !this.isWatchOnly,
                        href: o.Z.generate("web_play_new", {
                            opponent: this.username
                        })
                    } : this.isShowLastOnline ? {
                        lastOnline: i.p6.relative(new Date(a)),
                        show: !1
                    } : {
                        show: !1
                    }
                }
            },
            methods: {
                handleClick() {
                    const e = this.userPresence.isPlaying ? "watch" : "challenge"
                      , t = this.location;
                    r.Z.logEvent("presenceUiClick", {
                        selection: e,
                        location: t
                    })
                }
            }
        }
    },
    42547: function(e, t) {
        "use strict";
        t.Z = {
            name: "PresenceSquare",
            props: {
                size: {
                    type: Number,
                    required: !1,
                    default: 3
                },
                userPresence: {
                    type: Object,
                    required: !0
                }
            },
            computed: {
                squareColor() {
                    var e, t;
                    return (null == (e = this.userPresence) ? void 0 : e.isPlaying) ? this.$style.red : (null == (t = this.userPresence) ? void 0 : t.isOnline) ? this.$style.green : ""
                },
                squareStyle() {
                    return `width: ${this.size}rem; height: ${this.size}rem;`
                }
            }
        }
    },
    42952: function(e, t, s) {
        "use strict";
        var n = s(24452)
          , r = s(4744)
          , i = s(38096)
          , o = s(27508)
          , a = s(64694)
          , c = s(10588)
          , l = s(92957)
          , u = s(26121)
          , d = s(64007)
          , h = s(86673)
          , p = s(90425)
          , m = s(74338)
          , f = (Object.create,
        Object.defineProperty)
          , v = Object.defineProperties
          , b = (Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyDescriptors)
          , g = (Object.getOwnPropertyNames,
        Object.getOwnPropertySymbols)
          , y = (Object.getPrototypeOf,
        Object.prototype.hasOwnProperty)
          , k = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? f(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s
          , __spreadValues = (e,t)=>{
            for (var s in t || (t = {}))
                y.call(t, s) && __defNormalProp(e, s, t[s]);
            if (g)
                for (var s of g(t))
                    k.call(t, s) && __defNormalProp(e, s, t[s]);
            return e
        }
          , __spreadProps = (e,t)=>v(e, b(t));
        t.Z = {
            name: "UserPopoverWidget",
            components: {
                giftMembershipModal: ()=>({
                    component: s.e(614).then(s.bind(s, 96783))
                }),
                UserReportModal: ()=>({
                    component: s.e(2210).then(s.bind(s, 11828))
                }),
                UserPopover: c.Z,
                TrophyPopover: ()=>({
                    component: s.e(2284).then(s.bind(s, 17120))
                })
            },
            data: ()=>({
                clubChatIdForModeratorActions: !1,
                clickListener: null,
                dynamicActions: null,
                isLoading: !1,
                showGiftMembershipModal: !1,
                isUserReportModalVisible: !1,
                isChallengePopoverVisible: !1,
                isTrophyPopoverVisible: !1,
                scrollContainer: null,
                elementRef: null,
                userAlreadyMutedOnChat: !1
            }),
            computed: __spreadProps(__spreadValues({}, (0,
            m.mapState)({
                currentUser: e=>e.user,
                currentUserIsGuest: e=>e.user.isGuest,
                show: e=>e.userPopover.show,
                user: e=>e.userPopover.user,
                username: e=>e.user.username,
                lifetimeScore: e=>e.userPopover.lifetimeScore,
                position: e=>e.userPopover.position,
                presenceDetails: e=>e.userPopover.presenceDetails
            })), {
                leagueData() {
                    var e;
                    const t = {
                        leagueCode: "",
                        leagueDivision: "",
                        leagueName: ""
                    }
                      , {isOptedIn: s, division: n} = null != (e = this.user.userLeagueData) ? e : {};
                    return s && n && Object.assign(t, {
                        leagueCode: n.league.code,
                        leagueDivision: n.name.slice(1),
                        leagueName: n.league.name
                    }),
                    t
                },
                ratings() {
                    const {bestRating: e, bestRatingType: t, topPuzzleRushScore: s} = this.user
                      , n = [{
                        type: t,
                        icon: t,
                        value: e
                    }];
                    return s && n.push({
                        type: "puzzle",
                        icon: "fire-puzzle",
                        value: s
                    }),
                    n
                },
                canAddFriend() {
                    return this.loggedAsAnother && !this.user.areFriends && !this.user.isFriendRequestFromUserExists && !this.user.isFriendRequestExists && this.user.isEnabled
                },
                canBlockUser() {
                    return this.loggedAsAnother && !this.user.areFriends && !this.user.isBlocked && this.user.isEnabled && this.user.membership && this.user.membership.level < r.p0.moderator
                },
                canUseGlobalChat() {
                    return this.loggedAsAnother && this.user.isEnabled
                },
                canCreateChallenge() {
                    return this.loggedAsAnother && this.user.isEnabled
                },
                canFollowUser() {
                    return this.loggedAsAnother && !this.user.isTracked && this.user.isEnabled
                },
                canGiftMembership() {
                    return this.user.canReceiveGiftMembership && this.user.isEnabled
                },
                canRemoveFriend() {
                    return this.loggedAsAnother && this.user.areFriends
                },
                canReportUser() {
                    return this.loggedAsAnother && !this.user.isModerator && !this.user.isStaff
                },
                canSendMessage() {
                    return this.loggedAsAnother && this.user.isMessageable && this.user.isEnabled
                },
                canSendTrophy() {
                    return this.canSendMessage && this.user.isEnabled
                },
                canUnblockUser() {
                    return this.loggedAsAnother && this.user.isBlocked && this.user.isEnabled
                },
                canUnfollowUser() {
                    return this.loggedAsAnother && this.user.isTracked && this.user.isEnabled
                },
                hasInboundFriendRequest() {
                    return this.loggedAsAnother && this.user.isFriendRequestFromUserExists
                },
                hasOutboundFriendRequest() {
                    return this.loggedAsAnother && this.user.isFriendRequestExists
                },
                canCancelFriendRequest() {
                    return this.hasOutboundFriendRequest && !this.hasInboundFriendRequest
                },
                canAcceptFriendRequest() {
                    return this.hasInboundFriendRequest
                },
                loggedAsAnother() {
                    return this.username && this.username !== this.user.username
                },
                membershipNumber() {
                    return (0,
                    i.yO)(this.user.membership ? this.user.membership.level : null, this.user.isEnabled)
                },
                inlineStyles() {
                    return (0,
                    o.M)(this.position)
                },
                areFriends() {
                    return this.user.areFriends
                },
                isGuest() {
                    return this.currentUserIsGuest || this.user.isGuest
                }
            }),
            created() {
                (0,
                l.X)({
                    modalMessages: u.Z,
                    trophies: d.Z
                })
            },
            mounted() {
                this.scrollContainer = window,
                h.Z.on("userPopover/show", (({actions: e, clubChatIdForModeratorActions: t, userAlreadyMutedOnChat: s, username: i},o)=>{
                    if (this.dynamicActions = e,
                    this.clubChatIdForModeratorActions = t,
                    this.userAlreadyMutedOnChat = s,
                    this.$store.dispatch("userPopover/fetchUserPopover", i).then((()=>{
                        this.isLoading = !1
                    }
                    )),
                    this.$store.commit("userPopover/resetUser"),
                    null == i)
                        return;
                    this.clickListener = document.addEventListener("click", (e=>{
                        (this.user.userNotExist || this.$refs.userPopover && e.target !== this.$refs.userPopover.$el && !this.$refs.userPopover.$el.contains(e.target) && !document.getElementById(r.xL.USER_POPOVER_CONTAINER).contains(e.target)) && this.hideUserPopup()
                    }
                    ), !0),
                    setTimeout((()=>{
                        this.user.username || this.user.userNotExist || (this.isLoading = !0)
                    }
                    ), 500),
                    this.scrollContainer.addEventListener("scroll", this.hideUserPopup),
                    this.elementRef = o;
                    const a = (0,
                    n.MD)(o.getBoundingClientRect());
                    this.$store.commit("userPopover/setPosition", a),
                    this.$store.commit("userPopover/showUserPopover")
                }
                )),
                h.Z.on("userPopover/hide", this.hideUserPopup)
            },
            beforeDestroy() {
                this.removeListeners()
            },
            methods: __spreadProps(__spreadValues({}, (0,
            m.mapMutations)({
                hideUserPopover: "userPopover/hideUserPopover",
                setRecipientIsFriend: "trophies/setRecipientIsFriend",
                setRecipientUsername: "trophies/setRecipientUsername"
            })), {
                onChallenge({username: e}) {
                    window.location = p.Z.generate("web_play_new", {
                        opponent: e
                    })
                },
                onMessage(e) {
                    this.hideUserPopup(),
                    window.postMessage({
                        event: "SHOW_MESSAGE_MODAL",
                        user: {
                            avatar_url: e.avatar,
                            username: e.username
                        }
                    }, window.location.origin)
                },
                onTrophy(e) {
                    this.hideUserPopup(),
                    this.setRecipientUsername(e.username),
                    this.isTrophyPopoverVisible = !0
                },
                acceptFriendRequest() {
                    this.$store.dispatch("user/approveFriendRequest", this.user.userId).then(this.reload)
                },
                addFriend() {
                    this.$store.dispatch("user/addFriend", this.user.userId).then(this.reload)
                },
                blockUser() {
                    this.$store.dispatch("user/blockUser", this.user.username).then(this.reload)
                },
                cancelFriendRequest() {
                    this.$store.dispatch("user/cancelFriendRequest", this.user.userId).then(this.reload)
                },
                deleteFriend() {
                    this.$store.dispatch("user/deleteFriend", this.user.userId).then(this.reload)
                },
                hideUserPopup() {
                    this.setRecipientIsFriend(this.areFriends),
                    this.hideUserPopover(),
                    this.removeListeners(),
                    this.isLoading = !1
                },
                reload() {
                    return this.$store.dispatch("userPopover/fetchUserPopover", this.user.username)
                },
                removeListeners() {
                    document.removeEventListener("click", this.clickListener, !0),
                    this.scrollContainer.removeEventListener("scroll", this.hideUserPopup)
                },
                trackUser() {
                    this.$store.dispatch("user/trackUser", this.user.username).then(this.reload)
                },
                unblockUser() {
                    this.$store.dispatch("user/unblockUser", this.user.username).then(this.reload)
                },
                untrackUser() {
                    this.$store.dispatch("user/untrackUser", this.user.username).then(this.reload)
                },
                showGiftModal() {
                    this.hideUserPopup(),
                    this.showGiftMembershipModal = !0
                },
                hideGiftMembershipModal() {
                    this.showGiftMembershipModal = !1
                },
                showReportModal() {
                    this.hideUserPopup(),
                    this.isUserReportModalVisible = !0
                },
                hideUserReportModal() {
                    this.isUserReportModalVisible = !1
                },
                hideChallengePopover() {
                    this.isChallengePopoverVisible = !1
                },
                hideTrophyPopover() {
                    this.isTrophyPopoverVisible = !1
                },
                showArchive(e) {
                    window.location.href = p.Z.generate("web_archive_index", {
                        username: e.username
                    })
                },
                startDirectChat() {
                    const e = a.U3.START_DIRECT_CHAT
                      , t = {
                        avatarUrl: this.user.avatarUrl,
                        id: this.user.uuid,
                        username: this.user.username
                    };
                    window.postMessage({
                        key: e,
                        payload: t
                    }, window.location.origin)
                }
            })
        }
    },
    29973: function(e, t, s) {
        "use strict";
        var n = s(85707)
          , r = s(86673)
          , i = s(97203);
        const cacheBinding = (e,t)=>{
            e.dataset.chessSrc = t.value.src,
            e.dataset.chessSrcset = t.value.srcset
        }
          , setAttributes = e=>{
            const t = e.dataset.chessSrc
              , s = "false" !== e.dataset.chessSrcset ? `${(0,
            i.q)(t)} 2x` : void 0;
            t && e.setAttribute("src", t),
            s && e.setAttribute("srcset", s)
        }
        ;
        t.Z = {
            bind: (e,t)=>{
                (null == t ? void 0 : t.value) && (cacheBinding(e, t),
                r.Z.on("visibility-observer-change", (t=>{
                    t === e && (setAttributes(e),
                    e.dataset.visible = !0,
                    n.Z.unobserve(e))
                }
                )),
                n.Z.observe(e))
            }
            ,
            componentUpdated(e, t) {
                (null == t ? void 0 : t.value) && (cacheBinding(e, t),
                void 0 !== e.dataset.visible && setAttributes(e))
            }
        }
    },
    39571: function(e, t, s) {
        "use strict";
        var n = s(92957)
          , r = s(92009)
          , i = s(64662)
          , o = s(59066)
          , a = s(86673)
          , c = s(41252)
          , l = s(12041);
        (0,
        n.X)({
            user: i.Z,
            userPopover: o.Z
        });
        const u = (0,
        c.Z)({
            userPopover: {
                component: l.Z,
                el: "#user-popover",
                store: r.default
            }
        })
          , d = window;
        let h, p = 0;
        const documentClickListener = e=>{
            const t = document.getElementById("userPopover");
            if (!t || e.target !== t && !t.contains(e.target)) {
                document.removeEventListener("click", documentClickListener, !0);
                const t = !h || e.target !== h && !h.contains(e.target)
                  , s = null === h.getAttribute("href");
                t ? p = 0 : s && setTimeout((()=>{
                    p = 0
                }
                ), 0)
            }
        }
          , documentScrollListener = ()=>{
            d.removeEventListener("scroll", documentScrollListener),
            p = 0
        }
          , directiveClickListener = e=>{
            h = e.target,
            0 === p && (p += 1,
            u.createInstance("userPopover"),
            a.Z.emit("userPopover/show", e.currentTarget.userPopoverProps, e.target),
            e.preventDefault(),
            document.addEventListener("click", documentClickListener, !0),
            d.addEventListener("scroll", documentScrollListener))
        }
          , normalizeProps = e=>"string" == typeof e ? {
            username: e
        } : e;
        t.Z = {
            bind: (e,t)=>{
                if (!t.value)
                    return !1;
                e.userPopoverProps = normalizeProps(t.value),
                e.addEventListener("click", directiveClickListener)
            }
            ,
            unbind: e=>{
                e.removeEventListener("click", directiveClickListener)
            }
            ,
            update: (e,t)=>{
                if (!t.value)
                    return !1;
                const s = normalizeProps(t.value);
                e.userPopoverProps.username = s.username,
                s.actions && e.userPopoverProps.actions.splice(0, s.actions.length, ...s.actions)
            }
        }
    },
    85707: function(e, t, s) {
        "use strict";
        var n = s(86673);
        let r = null;
        t.Z = new class VisibilityObserver {
            constructor() {
                return null == r && (r = this,
                this.observer = new IntersectionObserver((e=>{
                    e.forEach((e=>{
                        e.intersectionRatio > 0 && (n.Z.emit("visibility-observer-change", e.target),
                        this.observer.unobserve(e.target))
                    }
                    ))
                }
                ),{
                    rootMargin: "200px 0px",
                    threshold: .01
                })),
                r
            }
            observe(e) {
                this.observer.observe(e)
            }
            unobserve(e) {
                this.observer.unobserve(e)
            }
        }
    },
    27689: function(e, t, s) {
        "use strict";
        var n = s(24452);
        t.Z = {
            methods: {
                hasVisibleDropdown() {
                    return Object.values(this.dropdown).some((e=>"block" === e.display))
                },
                createDropdown(e) {
                    const t = {
                        dropdown: {}
                    };
                    return e.forEach((e=>{
                        t.dropdown[e] = {
                            display: "none",
                            transform: "translate(0, 0)"
                        }
                    }
                    )),
                    t
                },
                hideDropdown() {
                    Object.keys(this.dropdown).forEach((e=>{
                        this.dropdown[e].display = "none"
                    }
                    ))
                },
                showDropdown(e, t, s) {
                    const r = document.querySelector(`ul[data-dropdown="${t}"]`);
                    r && ("block" === this.dropdown[t].display ? this.dropdown[t].display = "none" : (this.hideDropdown(),
                    this.dropdown[t].display = "block",
                    this.$nextTick((()=>{
                        const i = e.target.getBoundingClientRect()
                          , {width: o, height: a} = r.getBoundingClientRect()
                          , c = (0,
                        n.MD)(i, a, o);
                        s && s(c);
                        const {left: l, top: u} = c;
                        this.dropdown[t].transform = `translate(${l}px, ${u}px)`
                    }
                    ))))
                }
            }
        }
    },
    83793: function(e, t, s) {
        "use strict";
        function isValidArchiveView(e) {
            return ["grid", "list"].includes(e)
        }
        s.d(t, {
            o: function() {
                return isValidArchiveView
            }
        })
    },
    28389: function(e, t, s) {
        "use strict";
        function isValidHomeContentType(e) {
            return ["following", "my_activity"].includes(e)
        }
        s.d(t, {
            c: function() {
                return isValidHomeContentType
            }
        })
    },
    27508: function(e, t, s) {
        "use strict";
        s.d(t, {
            Y: function() {
                return defaultUserState
            },
            M: function() {
                return setPopoverPosition
            }
        });
        var n = s(93644)
          , r = s(32793);
        const defaultUserState = ()=>({
            avatarUrl: "",
            bestRating: 0,
            bestRatingType: "",
            chessTitle: "",
            country: {},
            joinDate: "",
            lastLoginDate: "",
            membership: {},
            onlineStatus: "",
            username: ""
        });
        function setPopoverPosition(e) {
            const t = (0,
            r.tq)() && window.innerWidth < 768;
            let s;
            return (0,
            n.t)() ? s = `left: auto; right: ${e.right}px; top: ${e.top}px;` : (s = `transform: translate(${e.left}px, ${e.top}px);`,
            t && (s = `transform: translateY(${e.top}px);`)),
            s
        }
    },
    47086: function(e, t, s) {
        "use strict";
        var n = s(28338);
        t.Z = (0,
        n.r)()
    },
    28338: function(e, t, s) {
        "use strict";
        function createContextLocaleService() {
            var e, t, s, n, r, i;
            const o = {
                contentLanguage: null == (t = null == (e = window.context) ? void 0 : e.i18n) ? void 0 : t.contentLanguage,
                language: null == (n = null == (s = window.context) ? void 0 : s.i18n) ? void 0 : n.locale,
                speaksEnglish: "en_US" === (null == (i = null == (r = window.context) ? void 0 : r.i18n) ? void 0 : i.locale)
            };
            return {
                get: function get(e) {
                    return o[e]
                }
            }
        }
        s.d(t, {
            r: function() {
                return createContextLocaleService
            }
        })
    },
    92957: function(e, t, s) {
        "use strict";
        s.d(t, {
            X: function() {
                return registerModules
            }
        });
        var n = s(92009);
        const registerModules = e=>{
            Object.keys(e).forEach((t=>{
                const s = e[t];
                n.default.state && n.default.state[t] || n.default.registerModule(t, s)
            }
            ))
        }
    },
    26121: function(e, t, s) {
        "use strict";
        var n = s(39898)
          , r = s(24946);
        t.Z = {
            namespaced: !0,
            mutations: n.Z,
            state: r.Z
        }
    },
    39898: function(e, t) {
        "use strict";
        t.Z = {
            newMessage: (e,t)=>{
                e.message = t
            }
        }
    },
    24946: function(e, t) {
        "use strict";
        t.Z = {
            message: null
        }
    },
    48957: function(e, t, s) {
        "use strict";
        var n = s(49790)
          , r = s(15291)
          , i = s(66248)
          , o = s(70917)
          , a = s(87074)
          , c = s(90425)
          , l = s(18160);
        t.Z = {
            getUserTrophies: ({commit: e},t)=>{
                const s = {
                    username: t.username,
                    trophyType: t.trophyType
                };
                return a.Z.get(c.Z.generate("web_member_callback_trophy_list", s)).then((t=>{
                    if (t.data)
                        return e("setUserTrophies", t.data),
                        i.Z.set("user_trophies", t.data, 60),
                        t.data
                }
                )).catch((()=>{
                    const e = n.V5.error;
                    (0,
                    r.el)({
                        type: e,
                        message: n.R0.badRequest
                    })
                }
                ))
            }
            ,
            getAllTrophies: ({commit: e, state: t},s)=>{
                e("setFinishedLoading", !1);
                const i = Object.assign({}, {
                    type: t.trophyType
                }, s);
                return a.Z.get(c.Z.generate("web_callback_get_trophies", i)).then((t=>{
                    t.data && e("setAllTrophies", t.data)
                }
                )).catch((()=>{
                    const e = n.V5.error;
                    (0,
                    r.el)({
                        type: e,
                        message: n.R0.badRequest
                    })
                }
                ))
            }
            ,
            getTrophyShowcase: ({commit: e},t)=>a.Z.get(c.Z.generate("web_user_trophy_showcase_callback", {
                username: t
            })).then((t=>{
                t.data && e("setUserShowcaseTrophies", t.data)
            }
            )).catch((()=>{
                const e = n.V5.error;
                (0,
                r.el)({
                    type: e,
                    message: n.R0.badRequest
                })
            }
            )),
            getUserTrophyCount: ({commit: e},t)=>a.Z.get(c.Z.generate("web_callback_count_user_trophies", {
                username: t
            })).then((t=>{
                t.data && e("setUserTrophiesCount", t.data.count)
            }
            )).catch((()=>{
                const e = n.V5.error;
                (0,
                r.el)({
                    type: e,
                    message: n.R0.badRequest
                })
            }
            )),
            featureTrophy: ({dispatch: e},{trophyId: t, featured: s, username: i})=>{
                const o = {
                    id: t,
                    featured: s
                };
                return a.Z.post(c.Z.generate("web_feature_trophy_callback", o)).then((t=>{
                    const s = n.V5.success
                      , o = (e=>{
                        var t, s;
                        return null != (s = null == (t = e.data) ? void 0 : t.message) ? s : n.R0.badRequest
                    }
                    )(t);
                    (0,
                    r.el)({
                        type: s,
                        message: o
                    }),
                    e("getTrophyShowcase", i)
                }
                )).catch((()=>{
                    const e = n.V5.error
                      , t = l.Z.trans("Error featuring trophies. Please try again later.");
                    (0,
                    r.el)({
                        type: e,
                        message: t
                    })
                }
                ))
            }
            ,
            sendTrophyToUser: ({commit: e, state: t})=>{
                const s = {
                    username: t.recipientUsername,
                    trophyId: t.selectedTrophy.id,
                    message: (0,
                    o.Ak)(t.message)
                };
                return "number" == typeof t.gameId && (s[t.isLiveGame ? "gameLiveId" : "gameId"] = t.gameId),
                e("disableSendButton", !0),
                a.Z.post(c.Z.generate("web_award_trophy_callback", s)).then((()=>{
                    e("disableSendButton", !1)
                }
                )).catch((t=>(e("setErrorMessage", t.response.data.message),
                e("disableSendButton", !1),
                Promise.reject(t))))
            }
        }
    },
    64007: function(e, t, s) {
        "use strict";
        var n = s(48957)
          , r = s(20352)
          , i = s(78601);
        t.Z = {
            namespaced: !0,
            actions: n.Z,
            mutations: r.Z,
            state: i.Z
        }
    },
    20352: function(e, t) {
        "use strict";
        t.Z = {
            disableSendButton: (e,t)=>{
                e.disableSendButton = t
            }
            ,
            setUserTrophies: (e,t)=>{
                e.userTrophies = t
            }
            ,
            setAllTrophies: (e,t)=>{
                e.trophies = t.data,
                e.meta = t.meta,
                e.allTrophiesToGive = t.data,
                e.finishedLoadingTrophies = !0
            }
            ,
            setErrorMessage: (e,t)=>{
                e.errorMessage = t
            }
            ,
            setFinishedLoading: (e,t)=>{
                e.finishedLoadingTrophies = t
            }
            ,
            setGameId: (e,t)=>{
                e.gameId = t
            }
            ,
            setIsLiveGame: (e,t)=>{
                e.isLiveGame = t
            }
            ,
            setMessage: (e,t)=>{
                e.message = t
            }
            ,
            setModalState: (e,t)=>{
                e.modalState = t
            }
            ,
            setRecipientIsFriend: (e,t)=>{
                e.recipientIsFriend = t
            }
            ,
            setRecipientUsername: (e,t)=>{
                e.recipientUsername = t
            }
            ,
            setSelectedTrophy: (e,t)=>{
                e.selectedTrophy = t
            }
            ,
            setTrophyType: (e,t)=>{
                e.trophyType = t
            }
            ,
            setUserShowcaseTrophies: (e,t)=>{
                e.hideShowcase = 0 === t.length,
                e.userShowcaseTrophies = t
            }
            ,
            setUserTrophiesCount: (e,t)=>{
                e.userTrophyCount = t
            }
        }
    },
    78601: function(e, t, s) {
        "use strict";
        var n = s(2468);
        t.Z = {
            allTrophiesToGive: [],
            disableSendButton: !1,
            errorMessage: "",
            finishedLoadingTrophies: !1,
            gameId: null,
            hideShowcase: !1,
            isLiveGame: !1,
            message: "",
            meta: {
                currentPage: 1,
                morePages: !1
            },
            recipientIsFriend: !1,
            modalState: n.Z.modalStates.select,
            recipientUsername: null,
            selectedTrophy: null,
            trophies: [],
            trophyType: "social",
            userShowcaseTrophies: [],
            userTrophies: [],
            userTrophyCount: 0
        }
    },
    96273: function(e, t, s) {
        "use strict";
        s.d(t, {
            T: function() {
                return createUserActions
            }
        });
        var n = s(49790)
          , r = s(15291)
          , i = s(18160)
          , o = s(83793)
          , a = s(28389);
        const prepAlertMessage = e=>e.data && e.data.message || n.R0.badRequest;
        function createUserActions(e) {
            return {
                init: ({dispatch: t})=>{
                    e.isLoggedIn() && (t("getFriends"),
                    t("getOpponents"))
                }
                ,
                getFriends: ({commit: t})=>(t("setLoading", !0),
                e.getFriends({
                    user: e.get("id"),
                    avatarSize: 50
                }).then((e=>{
                    t("setLoading", !1),
                    t("setFriends", e.data.friends)
                }
                )).catch((()=>{
                    t("setLoading", !1),
                    (0,
                    r.el)({
                        type: n.V5.error,
                        message: n.R0.badRequest
                    })
                }
                ))),
                getOpponents: ({commit: t})=>(t("setLoading", !0),
                e.getOpponents().then((e=>{
                    t("setLoading", !1),
                    t("setOpponents", e.data)
                }
                )).catch((()=>{
                    t("setLoading", !1),
                    (0,
                    r.el)({
                        type: n.V5.error,
                        message: n.R0.badRequest
                    })
                }
                ))),
                getFollowSuggestions: ({commit: t})=>e.getFollowSuggestions().then((e=>{
                    if (e.data.users && e.data.users.length > 0) {
                        t("setFollowSuggestions", e.data.users);
                        let s = i.Z.trans("Consider following...");
                        e.data.notYetFollowing && (s = i.Z.trans("You are not currently following anyone. Here are a few suggestions...")),
                        t("setFollowMessage", s)
                    } else
                        t("setFollowMessage", null)
                }
                )).catch((()=>(0,
                r.el)({
                    type: n.V5.error,
                    message: n.R0.badRequest
                }))),
                acceptFollowSuggestion: ({commit: e, dispatch: t},s)=>{
                    e("removeFollowSuggestedUser", s),
                    t("trackUser", s)
                }
                ,
                dismissFollowSuggestion: ({commit: t},s)=>(t("removeFollowSuggestedUser", s),
                e.dismissFollowSuggestion(s).catch((()=>{
                    (0,
                    r.el)({
                        type: n.V5.error,
                        message: n.R0.badRequest
                    })
                }
                ))),
                getAvatar: ({commit: t},s)=>{
                    if (!e.get("avatarUrl"))
                        return e.getAvatar(s).then((e=>{
                            t("setAvatarUrl", e.data.avatar)
                        }
                        ))
                }
                ,
                addFriend: ({commit: t, dispatch: s},i)=>{
                    const o = i.userId || i
                      , a = i.dispatchCallback || "getFriends";
                    return t("setLoading", !0),
                    e.addFriend(o).then((e=>{
                        t("setLoading", !1),
                        (0,
                        r.el)({
                            type: n.V5.success,
                            message: prepAlertMessage(e)
                        })
                    }
                    )).then((()=>{
                        a.includes("/") ? s(a, null, {
                            root: !0
                        }) : s(a)
                    }
                    )).catch((e=>{
                        t("setLoading", !1),
                        (0,
                        r.el)({
                            type: n.V5.error,
                            message: e.response.data.message
                        })
                    }
                    ))
                }
                ,
                deleteFriend: ({commit: t, dispatch: s},i)=>{
                    const o = i.userId || i
                      , a = i.dispatchCallback || "getFriends";
                    return t("setLoading", !0),
                    e.deleteFriend(o).then((e=>{
                        t("setLoading", !1),
                        (0,
                        r.el)({
                            type: n.V5.success,
                            message: prepAlertMessage(e)
                        })
                    }
                    )).then((()=>{
                        a.includes("/") ? s(a, null, {
                            root: !0
                        }) : s(a)
                    }
                    )).catch((()=>{
                        t("setLoading", !1),
                        (0,
                        r.el)({
                            type: n.V5.error,
                            message: n.R0.badRequest
                        })
                    }
                    ))
                }
                ,
                approveFriendRequest: ({dispatch: t},s)=>{
                    const i = s.userId || s
                      , o = s.dispatchCallback || "getFriends";
                    return e.approveFriendRequest(i).then((e=>{
                        (0,
                        r.el)({
                            type: n.V5.success,
                            message: prepAlertMessage(e)
                        })
                    }
                    )).then((()=>{
                        o.includes("/") ? t(o, null, {
                            root: !0
                        }) : t(o)
                    }
                    )).catch((()=>{
                        (0,
                        r.el)({
                            type: n.V5.error,
                            message: n.R0.badRequest
                        })
                    }
                    ))
                }
                ,
                blockUser: (t,s)=>e.blockUser(s).then((e=>{
                    (0,
                    r.el)({
                        type: n.V5.success,
                        message: prepAlertMessage(e)
                    })
                }
                )).catch((()=>{
                    (0,
                    r.el)({
                        type: n.V5.error,
                        message: n.R0.badRequest
                    })
                }
                )),
                unblockUser: (t,s)=>e.unblockUser(s).then((e=>{
                    (0,
                    r.el)({
                        type: n.V5.success,
                        message: prepAlertMessage(e)
                    })
                }
                )).catch((()=>{
                    (0,
                    r.el)({
                        type: n.V5.error,
                        message: n.R0.badRequest
                    })
                }
                )),
                trackUser: (t,s)=>e.trackUser(s).then((e=>{
                    (0,
                    r.el)({
                        type: n.V5.success,
                        message: prepAlertMessage(e)
                    })
                }
                )).catch((()=>{
                    (0,
                    r.el)({
                        type: n.V5.error,
                        message: n.R0.badRequest
                    })
                }
                )),
                untrackUser: (t,s)=>e.untrackUser(s).then((e=>{
                    (0,
                    r.el)({
                        type: n.V5.success,
                        message: prepAlertMessage(e)
                    })
                }
                )).catch((()=>{
                    (0,
                    r.el)({
                        type: n.V5.error,
                        message: n.R0.badRequest
                    })
                }
                )),
                setArchiveView: ({commit: t},s)=>{
                    if ((0,
                    o.o)(s))
                        return e.get("archiveView") !== s ? e.setArchiveView(s).then((()=>{
                            t("setArchiveView", s)
                        }
                        )) : void 0
                }
                ,
                setFairPlayAgree: ({commit: t})=>(t("setFairPlayAgree", !0),
                e.setFairPlayAgree(!0)),
                setHomeContentType: ({commit: t},s)=>{
                    if ((0,
                    a.c)(s))
                        return t("setHomeContentType", s),
                        e.setHomeContentType(s)
                }
                ,
                setIsThreeD: ({commit: e},t)=>{
                    e("setIsThreeD", t)
                }
                ,
                cancelFriendRequest: (t,s)=>e.cancelFriendRequest(s).then((e=>{
                    (0,
                    r.el)({
                        type: n.V5.success,
                        message: prepAlertMessage(e)
                    })
                }
                )).catch((()=>{
                    (0,
                    r.el)({
                        type: n.V5.error,
                        message: n.R0.badRequest
                    })
                }
                )),
                declineFriendRequest: (t,s)=>e.declineFriendRequest(s).then((e=>{
                    (0,
                    r.el)({
                        type: n.V5.success,
                        message: prepAlertMessage(e)
                    })
                }
                )).catch((()=>{
                    (0,
                    r.el)({
                        type: n.V5.error,
                        message: n.R0.badRequest
                    })
                }
                )),
                refreshUserRoles({commit: t}) {
                    if (e.isLoggedIn())
                        return e.getRoles().then((e=>{
                            t("setRoles", e.data)
                        }
                        ))
                },
                checkValidUsername: (t,s)=>e.checkValidUsername(s).then((e=>e.data)).catch((()=>(0,
                r.el)({
                    type: n.V5.error,
                    message: n.R0.badRequest
                })))
            }
        }
    },
    62917: function(e, t) {
        "use strict";
        t.Z = {
            chessTitle: e=>e.chessTitle,
            isActivated: e=>e.isActivated,
            id: e=>e.id,
            isImpersonating: e=>e.isImpersonating,
            isLoggedIn: e=>e.isLoggedIn,
            username: e=>e.username,
            roles: e=>e.roles,
            isPremium: e=>e.isPremium,
            hyphenatedLanguage: e=>(e.language || "").replace("_", "-")
        }
    },
    64662: function(e, t, s) {
        "use strict";
        var n = s(47086)
          , r = s(89177)
          , i = s(96273)
          , o = s(62917)
          , a = s(68355)
          , c = s(84840);
        t.Z = {
            namespaced: !0,
            mutations: a.Z,
            actions: (0,
            i.T)(r.Z),
            state: (0,
            c.H)(r.Z, n.Z),
            getters: o.Z
        }
    },
    68355: function(e, t) {
        "use strict";
        t.Z = {
            setLoading: (e,t)=>{
                e.loading = t
            }
            ,
            setLoadingUser: (e,t)=>{
                e.loadingUser[t.username] = t.loading
            }
            ,
            setLoadingFriends: (e,t)=>{
                e.loading.friends = t
            }
            ,
            setFriends: (e,t)=>{
                e.friends = t
            }
            ,
            setLoadingOpponents: (e,t)=>{
                e.loading.opponents = t
            }
            ,
            setOpponents: (e,t)=>{
                e.opponents = t
            }
            ,
            setAvatarUrl: (e,t)=>{
                e.avatarUrl = t
            }
            ,
            setSettingsAvatarUrl: (e,t)=>{
                e.settingsAvatarUrl = t
            }
            ,
            setArchiveView: (e,t)=>{
                e.archiveView = t
            }
            ,
            setFairPlayAgree: (e,t)=>{
                e.fairPlayAgree = t
            }
            ,
            setHomeContentType: (e,t)=>{
                e.homeContentType = t
            }
            ,
            setIsThreeD: (e,t)=>{
                e.isThreeD = t
            }
            ,
            setFollowSuggestions: (e,t)=>{
                e.followSuggestions = t
            }
            ,
            removeFollowSuggestedUser: (e,t)=>{
                const s = e.followSuggestions
                  , n = s.findIndex((e=>e.username === t));
                -1 !== n && (s.splice(n, 1),
                e.followSuggestions = s)
            }
            ,
            setFollowMessage: (e,t)=>{
                e.followMessage = t
            }
            ,
            setRoles: (e,t)=>{
                e.roles = t
            }
            ,
            setRating: (e,t)=>{
                e.rating = t
            }
            ,
            setLoggedIn: (e,t)=>{
                e.isLoggedIn = t
            }
            ,
            setUsername: (e,t)=>{
                e.username = t
            }
            ,
            setMembershipLevel(e, t) {
                e.membershipLevel = t
            }
        }
    },
    10001: function(e, t, s) {
        "use strict";
        var n = s(87074)
          , r = s(90425)
          , i = s(89177)
          , o = s(21693)
          , a = Object.defineProperty
          , c = Object.defineProperties
          , l = Object.getOwnPropertyDescriptors
          , u = Object.getOwnPropertySymbols
          , d = Object.prototype.hasOwnProperty
          , h = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? a(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        t.Z = {
            async fetchUserPopover({rootState: e, commit: t}, s) {
                let a, p = !1;
                try {
                    a = (await i.Z.getUser(s)).data,
                    p = !0
                } catch (f) {
                    t("setUser", {
                        userNotExist: !0
                    })
                }
                if (p) {
                    const i = await (0,
                    o.A)(a.uuid)
                      , {user: p} = e;
                    if ((null == p ? void 0 : p.id) && a && a.userId !== p.id)
                        try {
                            const {data: e} = await n.Z.post(r.Z.generate("web_user_callback_lifetime_score", {
                                user: a.userId,
                                opponent: p.id
                            }));
                            t("setLifetimeScore", e)
                        } catch (f) {
                            t("setLifetimeScore", null)
                        }
                    t("setUser", (m = ((e,t)=>{
                        for (var s in t || (t = {}))
                            d.call(t, s) && __defNormalProp(e, s, t[s]);
                        if (u)
                            for (var s of u(t))
                                h.call(t, s) && __defNormalProp(e, s, t[s]);
                        return e
                    }
                    )({}, a),
                    c(m, l({
                        username: s
                    })))),
                    t("setPresenceDetails", i)
                }
                var m
            }
        }
    },
    59066: function(e, t, s) {
        "use strict";
        var n = s(10001)
          , r = s(1216)
          , i = s(44494);
        t.Z = {
            namespaced: !0,
            mutations: r.Z,
            actions: n.Z,
            state: i.Z
        }
    },
    1216: function(e, t, s) {
        "use strict";
        var n = s(27508);
        t.Z = {
            hideUserPopover: e=>{
                e.isHovered = !1,
                e.show = !1
            }
            ,
            hover: e=>{
                e.isHovered = !0
            }
            ,
            resetUser: e=>{
                e.user = (0,
                n.Y)(),
                e.presenceDetails = null,
                e.lifetimeScore = null
            }
            ,
            showUserPopover: e=>{
                e.show = !0
            }
            ,
            setPosition: (e,t)=>{
                e.position = t
            }
            ,
            setUser: (e,t)=>{
                e.user = t
            }
            ,
            setPresenceDetails: (e,t)=>{
                e.presenceDetails = t
            }
            ,
            setLifetimeScore: (e,t)=>{
                e.lifetimeScore = t
            }
        }
    },
    44494: function(e, t, s) {
        "use strict";
        var n = s(27508);
        t.Z = {
            isHovered: !1,
            show: !1,
            user: (0,
            n.Y)(),
            position: {
                x: "right",
                y: "bottom",
                top: 0,
                left: 0
            },
            presenceDetails: null,
            lifetimeScore: null
        }
    },
    84840: function(e, t, s) {
        "use strict";
        function createUserState(e, t) {
            var s;
            return {
                chessTitle: e.get("chessTitle") || "",
                cohort: e.get("cohort"),
                flairCode: e.get("flairCode"),
                friends: e.get("friends"),
                roles: e.get("roles"),
                opponents: e.get("opponents"),
                boardSettings: e.get("boardSettings"),
                loading: !1,
                eligibleFirstTrial: e.eligibleFirstTrial(),
                isActivated: e.checkMembershipStatus("isActivated"),
                isLoggedIn: e.isLoggedIn(),
                isEnabled: e.isEnabled("isEnabled"),
                isImpersonating: e.isImpersonating(),
                isStaff: e.checkMembershipStatus("isStaff"),
                isStaffOnly: e.checkMembershipStatus("isStaffOnly"),
                isModerator: e.checkMembershipStatus("isModerator"),
                isModeratorOnly: e.checkMembershipStatus("isModeratorOnly"),
                isDiamond: e.checkMembershipStatus("isDiamond"),
                isDiamondOnly: e.checkMembershipStatus("isDiamondOnly"),
                isPlatinum: e.checkMembershipStatus("isPlatinum"),
                isPlatinumOnly: e.checkMembershipStatus("isPlatinumOnly"),
                isSilver: e.checkMembershipStatus("isSilver"),
                isSilverOnly: e.checkMembershipStatus("isSilverOnly"),
                isGold: e.checkMembershipStatus("isGold"),
                isGoldOnly: e.checkMembershipStatus("isGoldOnly"),
                isGuest: e.get("isGuest"),
                isPremium: e.checkMembershipStatus("isPremium"),
                isBasic: e.checkMembershipStatus("isBasic"),
                id: e.get("id"),
                language: t.get("language"),
                contentLanguage: t.get("contentLanguage"),
                username: e.get("username"),
                avatarUrl: e.get("avatarUrl"),
                settingsAvatarUrl: e.get("settingsAvatarUrl"),
                avatarLargeUrl: e.get("avatarLargeUrl"),
                lastLoginDate: e.get("lastLoginDate"),
                registerDate: e.get("registerDate"),
                timezone: e.get("timezone"),
                diagramSettings: e.get("diagramSettings"),
                speaksEnglish: t.get("speaksEnglish"),
                isThreeD: !1,
                archiveView: e.get("getArchiveView"),
                homeContentType: e.get("homeContentType"),
                membershipLevel: e.get("membershipLevel"),
                isContentHidden: e.get("isContentHidden"),
                fairPlayAgree: e.get("fairPlayAgree"),
                features: e.get("features"),
                followSuggestions: [],
                followMessage: "",
                country: e.get("country"),
                flag: null == (s = e.get("country")) ? void 0 : s.id,
                rating: e.get("rating"),
                membership: e.get("membership"),
                safeMode: e.get("safeMode"),
                uuid: e.get("uuid")
            }
        }
        s.d(t, {
            H: function() {
                return createUserState
            }
        })
    },
    25607: function(e, t, s) {
        "use strict";
        s.d(t, {
            h: function() {
                return fetch
            }
        });
        var n = s(25387)
          , r = Object.defineProperty
          , i = Object.getOwnPropertySymbols
          , o = Object.prototype.hasOwnProperty
          , a = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        async function fetch(e) {
            return (0,
            n.n)(((e,t)=>{
                for (var s in t || (t = {}))
                    o.call(t, s) && __defNormalProp(e, s, t[s]);
                if (i)
                    for (var s of i(t))
                        a.call(t, s) && __defNormalProp(e, s, t[s]);
                return e
            }
            )({
                method: "get"
            }, e))
        }
    },
    62259: function(e, t, s) {
        "use strict";
        const n = s(87074).Z.create({
            withCredentials: !0
        });
        t.Z = n
    },
    25387: function(e, t, s) {
        "use strict";
        s.d(t, {
            n: function() {
                return publish
            }
        });
        var n = s(62259);
        async function publish(e) {
            var t;
            let s = window.PubSub.options.url[e.service || "base"];
            const r = e.path instanceof Array ? e.path.join("/") : e.path;
            s.endsWith("/") || r.startsWith("/") || (s += "/");
            const i = {};
            ["staging", "prod"].includes("staging") || (i.uid = null == (t = window.context.user) ? void 0 : t.uuid),
            e.params && Object.assign(i, e.params);
            const o = {};
            return e.requestId && (o["x-chesscom-request-id-client"] = e.requestId),
            e.clientId && (o["x-chesscom-play-client"] = e.clientId),
            e.headers && Object.assign(o, e.headers),
            (0,
            n.Z)({
                url: /^http[s]?:/.test(r) ? r : `${s}${r}`,
                data: e.data,
                method: e.method || "post",
                params: i,
                headers: o,
                withCredentials: !0
            })
        }
    },
    60593: function(e, t, s) {
        "use strict";
        var n = s(23992)
          , r = s(65602)
          , i = s(90425);
        t.Z = (0,
        n.defineComponent)({
            name: "UserLifetimeScore",
            components: {
                UserTagline: r.Z
            },
            props: {
                opponent: Object,
                username: String,
                lifetimeScore: {
                    type: Object,
                    default: ()=>({
                        win: 0,
                        lose: 0,
                        draw: 0
                    })
                }
            },
            computed: {
                opponentUrl() {
                    var e;
                    return (null == (e = this.opponent) ? void 0 : e.username) ? i.Z.generate("web_member_view", {
                        username: this.opponent.username
                    }) : null
                },
                archiveUrl() {
                    var e;
                    return (null == (e = this.opponent) ? void 0 : e.username) && this.username ? i.Z.generate("web_archive_index", {
                        username: this.opponent.username,
                        opponent: this.username
                    }) : null
                },
                opponentTitle() {
                    var e, t;
                    return (null == (e = this.opponent) ? void 0 : e.chessTitle) ? this.opponent.chessTitle : (null == (t = this.opponent) ? void 0 : t.title) ? this.opponent.title.toUpperCase() : null
                }
            }
        })
    },
    41128: function(e, t, s) {
        "use strict";
        s.d(t, {
            U: function() {
                return getAmplitude
            }
        });
        var n = s(35750);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        let r;
        function getAmplitude() {
            var e;
            return (null == (e = window.chesscom) ? void 0 : e.amplitude) ? window.chesscom.amplitude : (r || (r = s.e(3790).then(s.t.bind(s, 63790, 23)).then((({default: e})=>{
                var t, s, r, i;
                const {user: o, amplitudeKey: a} = window.context || {}
                  , c = o && !o.isGuest ? o.id : null
                  , l = {
                    includeUtm: !0,
                    includeReferrer: !0,
                    includeGclid: !0,
                    saveParamsReferrerOncePerSession: !1
                };
                if (null == (s = null == (t = window.chesscom) ? void 0 : t.features) ? void 0 : s.includes("amplitude_domain_proxy")) {
                    ["www.chess.com", "www.chess-4.com"].includes(window.location.hostname) && (l.apiEndpoint = window.location.hostname.replace("www", "amplitude"))
                }
                if (e.getInstance().init(a, null, l),
                e.getInstance().setUserId(c),
                null == (i = null == (r = window.chesscom) ? void 0 : r.features) ? void 0 : i.includes("marketing_middleware_serverside_device_id_generation")) {
                    const t = (0,
                    n.ej)("me");
                    if (t) {
                        const s = JSON.parse(t);
                        e.getInstance().setDeviceId(s.deviceId)
                    }
                }
                return window.chesscom.amplitude = e,
                e
            }
            ))),
            r)
        }
    },
    22163: function(e, t, s) {
        "use strict";
        s.d(t, {
            t: function() {
                return incrementUserProperties
            }
        });
        var n = s(41128)
          , r = s(50547);
        async function incrementUserProperties(e) {
            const t = await (0,
            n.U)();
            if (null == e)
                return;
            const s = new t.Identify;
            (0,
            r.Z)(e, ((e,t)=>{
                s.add(t, e)
            }
            )),
            t.getInstance().identify(s)
        }
    },
    93989: function(e, t, s) {
        "use strict";
        s.d(t, {
            K: function() {
                return logEvent
            }
        });
        var n = s(41128)
          , r = s(22163)
          , i = s(14300);
        async function logEvent(e, t, s, o) {
            const a = await (0,
            n.U)();
            await (0,
            i.j)(s),
            await (0,
            r.t)(o),
            a.getInstance().logEvent(e, t || {})
        }
    },
    14300: function(e, t, s) {
        "use strict";
        s.d(t, {
            j: function() {
                return logUserProperties
            }
        });
        var n = s(41128);
        async function logUserProperties(e) {
            const t = await (0,
            n.U)();
            null != e && t.getInstance().setUserProperties(e)
        }
    },
    57463: function(e, t, s) {
        "use strict";
        var n = s(41128)
          , r = s(93989);
        t.Z = {
            init: n.U,
            logEvent: r.K
        }
    },
    50547: function(e, t, s) {
        "use strict";
        var n = s(92414);
        t.Z = n.Z
    },
    26924: function(e, t, s) {
        "use strict";
        var n = s(3775);
        const r = {
            name: "click-outside",
            bind(e, t) {
                let s, r, i = 1, o = "click";
                if ((0,
                n.mf)(t.value) ? s = t.value : (0,
                n.Kn)(t.value) && (s = t.value.handler,
                i = t.value.delay,
                o = t.value.clickEvent || "click"),
                !(0,
                n.mf)(s))
                    throw new Error("must pass function to click-outside");
                const onClickElement = e=>e.stopPropagation()
                  , onClickDocument = t=>e !== t.target && s(e, t);
                e.$unbindClickOutside && e.$unbindClickOutside(),
                e.$unbindClickOutside = ()=>{
                    clearTimeout(r),
                    e.removeEventListener(o, onClickElement),
                    document.removeEventListener(o, onClickDocument),
                    delete e.$unbindClickOutside
                }
                ,
                r = setTimeout((()=>{
                    e.addEventListener(o, onClickElement),
                    document.addEventListener(o, onClickDocument)
                }
                ), i)
            },
            unbind(e) {
                e.$unbindClickOutside && e.$unbindClickOutside()
            }
        };
        t.Z = r
    },
    16399: function(e, t, s) {
        "use strict";
        function loadLazyStyle(e) {
            const t = document.querySelector(`link[data-href*="/${e}.client"]`);
            t && (t.setAttribute("href", t.getAttribute("data-href")),
            t.removeAttribute("data-href"))
        }
        s.d(t, {
            E: function() {
                return loadLazyStyle
            }
        })
    },
    70917: function(e, t, s) {
        "use strict";
        s.d(t, {
            KZ: function() {
                return removeHtmlWhiteSpace
            },
            Ak: function() {
                return htmlEncode
            },
            Io: function() {
                return userMention
            }
        });
        const removeHtmlWhiteSpace = e=>e.replace(/&nbsp;/g, "")
          , htmlEncode = e=>{
            if (!e)
                return e;
            const t = [60, 62];
            let s = e.length;
            const n = [];
            for (; s--; ) {
                const r = e[s].charCodeAt();
                t.indexOf(r) > -1 ? n[s] = `&#${r};` : n[s] = e[s]
            }
            return n.join("")
        }
          , userMention = e=>String(e).replace(/(^|[^a-zA-Z0-9_!#$%&*@ï¼ ])([@ï¼ ]([a-zA-Z0-9_-]{3,25}))/g, ((e,t,s,n)=>`${t}<span class="v-user-popover" v-user-popover="'${n}'" data-username="'${n}'"> ${s}</span>`))
    },
    41252: function(e, t, s) {
        "use strict";
        var n = s(19958)
          , r = s(52439)
          , i = Object.defineProperty
          , o = Object.defineProperties
          , a = Object.getOwnPropertyDescriptors
          , c = Object.getOwnPropertySymbols
          , l = Object.prototype.hasOwnProperty
          , u = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? i(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s
          , __spreadValues = (e,t)=>{
            for (var s in t || (t = {}))
                l.call(t, s) && __defNormalProp(e, s, t[s]);
            if (c)
                for (var s of c(t))
                    u.call(t, s) && __defNormalProp(e, s, t[s]);
            return e
        }
        ;
        r.default.mixin(n.Z);
        const instantiate = e=>{
            return new r.default((t = __spreadValues({}, e),
            s = {
                el: e.el,
                render: t=>t(e.component, {
                    props: e.propsData
                }),
                store: e.store
            },
            o(t, a(s))));
            var t, s
        }
        ;
        t.Z = (e={})=>{
            const t = {}
              , createInstance = (s,n={})=>e[s] && Object.keys(e[s]).length ? (t[s] = t[s] || instantiate(__spreadValues(__spreadValues({}, e[s]), n)),
            t[s]) : null;
            return {
                createInstance: createInstance,
                createInstances: e=>{
                    e.forEach((e=>createInstance(e)))
                }
                ,
                instances: t
            }
        }
    },
    19958: function(e, t, s) {
        "use strict";
        var n = s(32305);
        t.Z = {
            methods: {
                $trans: n.dW,
                $transChoice: n.jn
            }
        }
    },
    37153: function(e, t, s) {
        "use strict";
        s.d(t, {
            x: function() {
                return n
            }
        });
        var n = (e=>(e.MUTE = "mute",
        e.UNMUTE = "unmute",
        e.WARN = "warn",
        e))(n || {})
    },
    49790: function(e, t, s) {
        "use strict";
        s.d(t, {
            jC: function() {
                return r
            },
            R0: function() {
                return i
            },
            sY: function() {
                return o
            },
            xL: function() {
                return a
            },
            V5: function() {
                return c
            }
        });
        var n = s(18160);
        const r = 7e3
          , i = {
            badRequest: n.Z.trans("Oops. Looks like there was an error. Sorry! Please refresh.")
        }
          , o = {
            avatarUploaded: n.Z.trans("Avatar uploaded"),
            commentCreated: n.Z.trans("Thank you for your comment."),
            commentDeleted: n.Z.trans("Comment deleted."),
            commentEmptyContent: n.Z.trans("You cannot send an empty comment"),
            commentUpdated: n.Z.trans("Comment updated."),
            commentLinkCopied: n.Z.trans("Comment link is copied to clipboard"),
            copied: n.Z.trans("Copied to clipboard"),
            forumsMarkedAsRead: n.Z.trans("All forum topics have been marked as read"),
            featureContent: n.Z.trans("Feature Set! It might take a minute or two to appear."),
            inviteEmpty: n.Z.trans("Please select the players for whom to send the invitation"),
            inviteSent: n.Z.trans("Your invitations were sent successfully"),
            pgnCopied: n.Z.trans("PGN copied to buffer")
        }
          , a = {
            ALERT_FLASH_CONTAINER: "widget-alert-flash",
            DISMISSING: "alert-banner-dismissing"
        }
          , c = {
            error: "error",
            info: "info",
            success: "success"
        };
        c.error,
        i.badRequest
    },
    11302: function(e, t, s) {
        "use strict";
        s.d(t, {
            OD: function() {
                return dismissAlert
            },
            C4: function() {
                return createAlertElement
            }
        });
        var n = s(16399)
          , r = s(49790);
        function dismissAlert(e) {
            const t = document.getElementById(`alert-${e}`);
            t && hideAlertElement(t)
        }
        function createAlertElement(e) {
            var t;
            e.type !== r.V5.success && function dismissAllButLast(e=2) {
                var t;
                const s = getContainer();
                Array.from(null != (t = null == s ? void 0 : s.querySelectorAll(`.alerts-alert:not(:nth-last-child(-n + ${e}))`)) ? t : []).forEach(hideAlertElement)
            }(2),
            (0,
            n.E)("alerts");
            const s = document.createElement("div");
            s.classList.add("alerts-alert"),
            s.classList.add("alerts-enter"),
            s.classList.add(`alerts-${e.type}`),
            s.setAttribute("id", `alert-${e.id}`);
            const i = document.createElement("span");
            i.classList.add("alerts-message"),
            i.innerHTML = e.message;
            const o = document.createElement("button");
            o.classList.add("alerts-close"),
            o.setAttribute("type", "button"),
            o.innerHTML = '<span class="icon-font-chess x"></span>',
            s.appendChild(i),
            s.appendChild(o),
            null == (t = getContainer()) || t.appendChild(s),
            o.addEventListener("click", onClickClose),
            e.type === r.V5.success && setTimeout(hideAlertElement, r.jC, s)
        }
        function getContainer() {
            return document.getElementById(r.xL.ALERT_FLASH_CONTAINER)
        }
        function hideAlertElement(e) {
            e.classList.add("alerts-leave"),
            setTimeout(removeAlertElement, 200, e)
        }
        function removeAlertElement(e) {
            var t;
            try {
                null == (t = getContainer()) || t.removeChild(e)
            } catch (s) {
                !function clearAlerts() {
                    const e = getContainer();
                    e && (e.innerHTML = "")
                }()
            }
        }
        function onClickClose(e) {
            var t, s;
            const n = null == (s = null == (t = e.target) ? void 0 : t.closest) ? void 0 : s.call(t, ".alerts-alert");
            n && hideAlertElement(n)
        }
    },
    15291: function(e, t, s) {
        "use strict";
        s.d(t, {
            OD: function() {
                return r.OD
            },
            el: function() {
                return createAlert
            },
            x2: function() {
                return showError
            }
        });
        var n = s(49790)
          , r = s(11302)
          , i = s(54752)
          , o = s.n(i);
        function createAlert({message: e, type: t, id: s}) {
            (0,
            r.C4)({
                id: null != s ? s : o()(),
                type: t,
                message: e
            })
        }
        function showError(e=n.R0.badRequest) {
            createAlert({
                type: n.V5.error,
                message: e
            })
        }
    },
    2468: function(e, t, s) {
        "use strict";
        t.Z = {
            modalStates: {
                select: "select",
                send: "send",
                sent: "sent"
            },
            types: {
                game: "game",
                social: "social"
            }
        }
    },
    71240: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return __WEBPACK_DEFAULT_EXPORT__
            }
        });
        var n = s(39571);
        function __WEBPACK_DEFAULT_EXPORT__() {
            var e;
            const t = "v-user-popover";
            null == (e = document.querySelectorAll(`[${t}]`)) || e.forEach((e=>{
                var s;
                const r = e.getAttribute(t);
                n.Z.bind(e, {
                    name: "UserPopover",
                    value: null != (s = null == r ? void 0 : r.replace(/^['"]|['"]$/g, "")) ? s : ""
                })
            }
            ))
        }
    },
    21693: function(e, t, s) {
        "use strict";
        s.d(t, {
            A: function() {
                return getUserOnlineStatus
            }
        });
        var n = s(86889);
        async function getUserOnlineStatus(e) {
            return (await (0,
            n.I)([e]))[e]
        }
    },
    29267: function(e, t, s) {
        "use strict";
        s.d(t, {
            K: function() {
                return getUsersPresenceData
            }
        });
        var n = s(28598)
          , r = s(25607);
        async function getUsersPresenceData(e) {
            return (0,
            r.h)({
                service: n.AM.Presence,
                path: [n.fz.Users],
                params: {
                    ids: e.slice(0, 25).join(",")
                }
            })
        }
    },
    86889: function(e, t, s) {
        "use strict";
        s.d(t, {
            I: function() {
                return getUsersOnlineStatuses
            }
        });
        var n = s(29267)
          , r = s(72416);
        async function getUsersOnlineStatuses(e) {
            const {data: t} = await (0,
            n.K)(e);
            return t.users.reduce(((e,t)=>(e[t.id] = (0,
            r.O)(t),
            e)), {})
        }
    },
    72416: function(e, t, s) {
        "use strict";
        s.d(t, {
            O: function() {
                return transformUserPresenceDto
            }
        });
        var n = s(90425)
          , r = s(36676);
        function transformUserPresenceDto(e) {
            var t, s;
            const {activity: i, activityContext: o, id: a, status: c, statusAt: l, statusAtUncertain: u} = e
              , d = {
                battleLink: void 0,
                eventLink: void 0,
                gameLink: void 0,
                id: a,
                isOfflineStatusUncertain: void 0,
                isOnline: c === r.p.Online,
                isPlaying: i === r.V.Playing,
                offlineSince: void 0,
                statusAt: l
            };
            if (c === r.p.Offline && (d.offlineSince = l),
            null == (t = null == o ? void 0 : o.games) ? void 0 : t.length) {
                const e = o.games[0]
                  , t = e.legacyId ? "web_game_live" : "web_game_rcn"
                  , s = e.legacyId || e.id;
                d.gameLink = n.Z.generate(t, {
                    id: s
                })
            } else if (null == (s = null == o ? void 0 : o.battles) ? void 0 : s.length) {
                const e = o.battles[0].id;
                d.battleLink = n.Z.generate("web_puzzles_mode_battle_view", {
                    shortUuid: e
                })
            }
            return d.isOfflineStatusUncertain = u,
            d
        }
    },
    36676: function(e, t, s) {
        "use strict";
        s.d(t, {
            V: function() {
                return n
            },
            p: function() {
                return r
            }
        });
        var n = (e=>(e.None = "none",
        e.Playing = "playing",
        e))(n || {})
          , r = (e=>(e.Offline = "offline",
        e.Online = "online",
        e))(r || {})
    },
    42887: function(e, t) {
        "use strict";
        t.Z = {
            component: "admin-actions-component",
            separator: "admin-actions-separator"
        }
    },
    47076: function(e, t) {
        "use strict";
        t.Z = {
            component: "analysis-options-dropdown-component",
            close: "analysis-options-dropdown-close",
            title: "analysis-options-dropdown-title"
        }
    },
    16817: function(e, t) {
        "use strict";
        t.Z = {
            component: "chat-options-dropdown-component",
            close: "chat-options-dropdown-close",
            title: "chat-options-dropdown-title"
        }
    },
    60842: function(e, t) {
        "use strict";
        t.Z = {
            link: "icon-button-link",
            icon: "icon-button-icon",
            label: "icon-button-label",
            blue: "icon-button-blue",
            grey: "icon-button-grey",
            red: "icon-button-red",
            translucent: "icon-button-translucent"
        }
    },
    94157: function(e, t) {
        "use strict";
        t.Z = {
            link: "icon-link-link",
            icon: "icon-link-icon",
            label: "icon-link-label",
            blue: "icon-link-blue",
            grey: "icon-link-grey",
            red: "icon-link-red",
            translucent: "icon-link-translucent"
        }
    },
    61398: function(e, t) {
        "use strict";
        t.Z = {
            link: "labeled-icon-button-link",
            icon: "labeled-icon-button-icon",
            label: "labeled-icon-button-label",
            blue: "labeled-icon-button-blue",
            grey: "labeled-icon-button-grey",
            red: "labeled-icon-button-red",
            translucent: "labeled-icon-button-translucent"
        }
    },
    36730: function(e, t) {
        "use strict";
        t.Z = {
            link: "labeled-icon-link-link",
            icon: "labeled-icon-link-icon",
            label: "labeled-icon-link-label",
            blue: "labeled-icon-link-blue",
            grey: "labeled-icon-link-grey",
            red: "labeled-icon-link-red",
            translucent: "labeled-icon-link-translucent"
        }
    },
    30872: function(e, t) {
        "use strict";
        t.Z = {
            component: "online-status-component",
            online: "online-status-online",
            live: "online-status-live"
        }
    },
    75945: function(e, t) {
        "use strict";
        t.Z = {
            component: "user-actions-component",
            "icons-list": "user-actions-icons-list",
            more: "user-actions-more",
            caret: "user-actions-caret",
            buttonsList: "user-actions-buttonsList"
        }
    },
    92846: function(e, t) {
        "use strict";
        t.Z = {
            component: "user-avatar-component",
            image: "user-avatar-image"
        }
    },
    66713: function(e, t) {
        "use strict";
        t.Z = {
            component: "user-flair-status-component"
        }
    },
    45991: function(e, t) {
        "use strict";
        t.Z = {
            component: "user-lifetime-score-component",
            tagline: "user-lifetime-score-tagline",
            win: "user-lifetime-score-win",
            lose: "user-lifetime-score-lose",
            icon: "user-lifetime-score-icon"
        }
    },
    25847: function(e, t) {
        "use strict";
        t.Z = {
            popover: "user-popover-popover",
            bottom: "user-popover-bottom",
            top: "user-popover-top",
            component: "user-popover-component",
            "avatar-placeholder": "user-popover-avatar-placeholder",
            profile: "user-popover-profile",
            meta: "user-popover-meta",
            info: "user-popover-info",
            onlive: "user-popover-onlive",
            online: "user-popover-online",
            status: "user-popover-status",
            details: "user-popover-details",
            secondary: "user-popover-secondary",
            loader: "user-popover-loader",
            actions: "user-popover-actions",
            ratings: "user-popover-ratings",
            confirm: "user-popover-confirm",
            "moderator-message": "user-popover-moderator-message",
            badge: "user-popover-badge"
        }
    },
    40476: function(e, t) {
        "use strict";
        t.Z = {
            component: "user-rating-component",
            icon: "user-rating-icon",
            rating: "user-rating-rating"
        }
    },
    18642: function(e, t) {
        "use strict";
        t.Z = {
            component: "presence-button-component",
            placeholder: "presence-button-placeholder",
            visible: "presence-button-visible",
            hidden: "presence-button-hidden",
            narrow: "presence-button-narrow",
            watchIconOnly: "presence-button-watchIconOnly",
            challengeIconOnly: "presence-button-challengeIconOnly"
        }
    },
    21554: function(e, t) {
        "use strict";
        t.Z = {
            component: "presence-square-component",
            square: "presence-square-square",
            round: "presence-square-round",
            red: "presence-square-red",
            green: "presence-square-green"
        }
    },
    62270: function(e, t) {
        "use strict";
        t.Z = {
            "placeholder-popover": "user-popover-placeholder-popover",
            bottom: "user-popover-bottom",
            top: "user-popover-top",
            "placeholder-component": "user-popover-placeholder-component",
            "placeholder-profile": "user-popover-placeholder-profile",
            "placeholder-avatar": "user-popover-placeholder-avatar",
            "placeholder-info": "user-popover-placeholder-info"
        }
    },
    27998: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e, t = this, s = t.$createElement, n = t._self._c || s;
            return n("div", t._g({
                class: ["icon-font-component", (e = {},
                e["icon-font-darkMode"] = t.isDarkMode,
                e)]
            }, t.$listeners), [n("span", {
                class: ["icon-font-chess", t.name, t.iconFamilyTheme]
            })])
        }
          , n = []
    },
    48385: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                class: e.$style.component
            }, [e.canModerate ? s("icon-button", {
                attrs: {
                    "icon-name": "flag",
                    "btn-color": "red",
                    label: e.$trans("Warn")
                },
                on: {
                    click: function(t) {
                        return e.$emit("warn-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerate ? s("icon-button", {
                attrs: {
                    "icon-name": "chat-x",
                    "btn-color": "red",
                    label: e.$trans("Mute")
                },
                on: {
                    click: function(t) {
                        return e.$emit("mute-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerate ? s("icon-button", {
                attrs: {
                    "icon-name": "exit",
                    "btn-color": "red",
                    label: e.$trans("Kick")
                },
                on: {
                    click: function(t) {
                        return e.$emit("kick-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerate ? s("icon-button", {
                attrs: {
                    "icon-name": "user-block",
                    "btn-color": "red",
                    label: e.$trans("Ban")
                },
                on: {
                    click: function(t) {
                        return e.$emit("ban-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerate && e.clientName ? s("icon-button", {
                attrs: {
                    "icon-name": "circle-info",
                    label: e.clientName
                }
            }) : e._e(), e._v(" "), e.canModerate && (e.canWarnOnChat || e.canModerateOnChat) ? s("div", {
                class: e.$style.separator
            }) : e._e(), e._v(" "), e.canWarnOnChat && !e.userAlreadyMutedOnChat ? s("icon-button", {
                attrs: {
                    "icon-name": "flag",
                    "btn-color": "red",
                    label: e.$trans("Chat Warn")
                },
                on: {
                    click: function(t) {
                        return e.$emit("chat-warn-user")
                    }
                }
            }) : e._e(), e._v(" "), !e.canModerateOnChat && !e.canMuteOnChat || e.userAlreadyMutedOnChat ? e._e() : s("icon-button", {
                attrs: {
                    "icon-name": "chat-x",
                    "btn-color": "red",
                    label: e.$trans("Chat Mute")
                },
                on: {
                    click: function(t) {
                        return e.$emit("chat-mute-user")
                    }
                }
            }), e._v(" "), e.canMuteOnChat && !e.userAlreadyMutedOnChat ? s("icon-button", {
                attrs: {
                    "icon-name": "trash",
                    "btn-color": "red",
                    label: e.$trans("Chat Mute and remove messages")
                },
                on: {
                    click: function(t) {
                        return e.$emit("chat-mute-user-remove-messages")
                    }
                }
            }) : e._e(), e._v(" "), e.canMuteOnChat && e.userAlreadyMutedOnChat ? s("icon-button", {
                attrs: {
                    "icon-name": "chat-alt",
                    "btn-color": "blue",
                    label: e.$trans("Chat Unmute")
                },
                on: {
                    click: function(t) {
                        return e.$emit("chat-unmute-user")
                    }
                }
            }) : e._e(), e._v(" "), e.canModerateOnChat ? s("icon-button", {
                attrs: {
                    "icon-name": "exit",
                    "btn-color": "red",
                    label: e.$trans("Chat Kick")
                },
                on: {
                    click: function(t) {
                        return e.$emit("chat-kick-user")
                    }
                }
            }) : e._e()], 1)
        }
          , n = []
    },
    69430: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("ul", {
                class: e.$style.component,
                style: e.dropdown.analysis,
                attrs: {
                    "data-dropdown": "analysis"
                }
            }, [e._l(e.analysisOptions, (function(t) {
                return s("li", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.title,
                        expression: "analysisOption.title"
                    }],
                    key: t.examineId,
                    domProps: {
                        textContent: e._s(t.title)
                    },
                    on: {
                        click: function(s) {
                            return e.onClickOption(s, t.examineId)
                        }
                    }
                })
            }
            )), e._v(" "), e._m(0), e._v(" "), s("i", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.$trans("Close"),
                    expression: "$trans('Close')"
                }],
                class: [e.$style.close, "icon-x"],
                on: {
                    click: function(t) {
                        return e.$emit("hide")
                    }
                }
            })], 2)
        }
          , n = [function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("span", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.$trans("Analysis Board"))
                }
            })
        }
        ]
    },
    71011: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("ul", {
                class: e.$style.component,
                style: e.dropdown.chat,
                attrs: {
                    "data-dropdown": "chat"
                }
            }, [e._l(e.chatOptions, (function(t) {
                return s("li", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.title,
                        expression: "chatOption.title"
                    }],
                    key: t.roomId,
                    domProps: {
                        textContent: e._s(t.title)
                    },
                    on: {
                        click: function(s) {
                            return e.onClickOption(s, t.roomId)
                        }
                    }
                })
            }
            )), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), s("i", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.$trans("Close"),
                    expression: "$trans('Close')"
                }],
                class: [e.$style.close, "icon-x"],
                on: {
                    click: function(t) {
                        return e.$emit("hide")
                    }
                }
            })], 2)
        }
          , n = [function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("li", {
                domProps: {
                    textContent: e._s(e.$trans("Private Chat"))
                },
                on: {
                    click: function(t) {
                        return e.onClickOption(t)
                    }
                }
            })
        }
        , function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("span", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.$trans("Chat"))
                }
            })
        }
        ]
    },
    36323: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: {
                        content: e.label,
                        delay: 100
                    },
                    expression: "{\n    content: label,\n    delay: 100\n  }"
                }],
                class: [e.$style.link, e.$style[e.btnColor]],
                attrs: {
                    type: "button",
                    "aria-label": e.label
                },
                on: {
                    click: e.onClick
                }
            }, [s("span", {
                class: [e.$style.icon, e.iconName, "icon-font-chess"]
            })])
        }
          , n = []
    },
    71854: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: {
                        content: e.label,
                        delay: 100
                    },
                    expression: "{\n    content: label,\n    delay: 100\n  }"
                }],
                class: [e.$style.link, e.$style[e.iconColor]],
                attrs: {
                    href: e.url
                },
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }, [s("span", {
                class: [e.$style.icon, e.iconName, "icon-font-chess"]
            })])
        }
          , n = []
    },
    90174: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("button", {
                class: [e.$style.link, e.$style[e.btnColor]],
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.onClick
                }
            }, [s("span", {
                class: [e.$style.icon, e.iconName, "icon-font-chess"]
            }), e._v(" "), s("span", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.label)
                }
            })])
        }
          , n = []
    },
    27033: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("a", {
                class: [e.$style.link, e.$style[e.iconColor]],
                attrs: {
                    href: e.url
                },
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }, [s("span", {
                class: [e.$style.icon, e.iconName, "icon-font-chess"]
            }), e._v(" "), s("span", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.label)
                }
            })])
        }
          , n = []
    },
    98250: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                class: e.classes
            })
        }
          , n = []
    },
    54804: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                class: e.$style.component
            }, [e.allActions ? e._e() : s("div", {
                class: e.$style["icons-list"]
            }, [e.canCreateChallenge ? s(e.getIconComponent(e.challengeUrl), {
                tag: "component",
                attrs: {
                    "icon-name": "chess-board-plus",
                    label: e.$trans("Challenge"),
                    url: e.challengeUrl
                },
                on: {
                    click: e.onClickChallenge
                }
            }) : e._e(), e._v(" "), e.showGlobalChatButton ? s("icon-button", {
                attrs: {
                    "icon-name": "chat",
                    label: e.$trans("Chat")
                },
                on: {
                    click: e.startDirectChat
                }
            }) : e._e(), e._v(" "), e.loggedAsAnother ? s("icon-button", {
                attrs: {
                    "icon-name": "mail-plus",
                    label: e.$trans("Message")
                },
                on: {
                    click: e.onClickMessage
                }
            }) : e._e(), e._v(" "), e.canInviteToChat ? s("icon-button", {
                attrs: {
                    "icon-name": "chat",
                    label: e.$trans("Chat")
                },
                on: {
                    click: e.onClickChat
                }
            }) : e._e(), e._v(" "), e.canAddFriend ? s("icon-button", {
                attrs: {
                    "icon-name": "user-plus",
                    label: e.$trans("Add Friend")
                },
                on: {
                    click: e.onClickAddFriend
                }
            }) : e._e(), e._v(" "), e.canAcceptFriendRequest ? s("icon-button", {
                attrs: {
                    "icon-name": "user-plus",
                    label: e.$trans("Accept Request")
                },
                on: {
                    click: e.onClickAcceptFriendRequest
                }
            }) : e._e(), e._v(" "), e.canDeclineFriendRequest ? s("icon-button", {
                attrs: {
                    "btn-color": "grey",
                    "icon-name": "user-x",
                    label: e.$trans("Decline Request")
                },
                on: {
                    click: e.onClickDeclineFriendRequest
                }
            }) : e._e(), e._v(" "), e.canCancelFriendRequest ? s("icon-button", {
                attrs: {
                    "btn-color": "grey",
                    "icon-name": "user-x",
                    label: e.$trans("Cancel Request")
                },
                on: {
                    click: e.onClickCancelFriendRequest
                }
            }) : e._e(), e._v(" "), e.canRemoveFriend ? s("icon-button", {
                attrs: {
                    "icon-name": "user-x",
                    label: e.$trans("Remove Friend")
                },
                on: {
                    click: e.onClickRemoveFriend
                }
            }) : e._e(), e._v(" "), e.canGiftMembership ? s(e.getIconComponent(e.membershipUrl), {
                tag: "component",
                attrs: {
                    "btn-color": "blue",
                    "icon-color": "blue",
                    "icon-name": "display-slider",
                    label: e.$trans("Gift Membership"),
                    url: e.membershipUrl
                },
                on: {
                    click: e.onClickGift
                }
            }) : e._e(), e._v(" "), e.canObserveGame ? s("icon-button", {
                attrs: {
                    "icon-name": "binoculars",
                    label: e.$trans("Observe Game")
                },
                on: {
                    click: e.onClickObserve
                }
            }) : e._e(), e._v(" "), e.canReportUser ? s("icon-button", {
                attrs: {
                    "icon-name": "circle-danger",
                    label: e.$trans("Report")
                },
                on: {
                    click: e.onClickReport
                }
            }) : e._e(), e._v(" "), e.loggedAsAnother ? e._e() : s(e.getIconComponent(e.archiveUrl), {
                tag: "component",
                attrs: {
                    "icon-name": "chess-board-folder",
                    label: e.$trans("Archive"),
                    url: e.archiveUrl
                },
                on: {
                    click: e.onClickArchive
                }
            }), e._v(" "), e.loggedAsAnother && e.isEnabled ? s("button", {
                class: e.$style.more,
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.showAllActions
                }
            }, [e._v("\n      " + e._s(e.$trans("More")) + "\n      "), s("icon-font", {
                class: e.$style.caret,
                attrs: {
                    name: "caret-down",
                    theme: "primary"
                }
            })], 1) : e._e()], 1), e._v(" "), e.allActions && !e.isConfirmVisible ? s("div", {
                class: e.$style.buttonsList,
                style: e.buttonsListStyle
            }, [e.canCreateChallenge ? s(e.getIconLabeledComponent(e.challengeUrl), {
                tag: "component",
                attrs: {
                    "icon-name": "chess-board-plus",
                    label: e.$trans("Challenge"),
                    url: e.challengeUrl
                },
                on: {
                    click: e.onClickChallenge
                }
            }) : e._e(), e._v(" "), e.showGlobalChatButton ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "chat",
                    label: e.$trans("Chat")
                },
                on: {
                    click: e.startDirectChat
                }
            }) : e._e(), e._v(" "), e.loggedAsAnother ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "mail-plus",
                    label: e.$trans("Message")
                },
                on: {
                    click: e.onClickMessage
                }
            }) : e._e(), e._v(" "), e.canInviteToChat ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "chat",
                    label: e.$trans("Chat")
                },
                on: {
                    click: e.onClickChat
                }
            }) : e._e(), e._v(" "), e.canAddFriend ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "user-plus",
                    label: e.$trans("Add Friend")
                },
                on: {
                    click: e.onClickAddFriend
                }
            }) : e._e(), e._v(" "), e.canAcceptFriendRequest ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "user-plus",
                    label: e.$trans("Accept Request")
                },
                on: {
                    click: e.onClickAcceptFriendRequest
                }
            }) : e._e(), e._v(" "), e.canDeclineFriendRequest ? s("labeled-icon-button", {
                attrs: {
                    "btn-color": "grey",
                    "icon-name": "user-x",
                    label: e.$trans("Decline Request")
                },
                on: {
                    click: e.onClickDeclineFriendRequest
                }
            }) : e._e(), e._v(" "), e.canCancelFriendRequest ? s("labeled-icon-button", {
                attrs: {
                    "btn-color": "grey",
                    "icon-name": "user-x",
                    label: e.$trans("Cancel Request")
                },
                on: {
                    click: e.onClickCancelFriendRequest
                }
            }) : e._e(), e._v(" "), e.canRemoveFriend ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "user-x",
                    label: e.$trans("Remove Friend")
                },
                on: {
                    click: e.onClickRemoveFriend
                }
            }) : e._e(), e._v(" "), e.canObserveGame ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "binoculars",
                    label: e.$trans("Observe")
                },
                on: {
                    click: e.onClickObserve
                }
            }) : e._e(), e._v(" "), e.canFollowUser ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "follow",
                    label: e.$trans("Follow")
                },
                on: {
                    click: e.onClickFollowUser
                }
            }) : e._e(), e._v(" "), e.canUnfollowUser ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "unfollow",
                    label: e.$trans("Unfollow")
                },
                on: {
                    click: e.onClickUnfollowUser
                }
            }) : e._e(), e._v(" "), e.canGiftMembership ? s("labeled-icon-button", {
                attrs: {
                    "btn-color": "blue",
                    "icon-name": "display-slider",
                    label: e.$trans("Gift Membership")
                },
                on: {
                    click: e.onClickGift
                }
            }) : e._e(), e._v(" "), e.canSendTrophy ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "trophy-plus",
                    label: e.$trans("Give Award")
                },
                on: {
                    click: e.onClickTrophy
                }
            }) : e._e(), e._v(" "), e.showBughousePartner && !e.isBughousePartner ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "bughouse",
                    label: e.$trans("Partner")
                },
                on: {
                    click: e.onClickPartner
                }
            }) : e._e(), e._v(" "), e.showBughousePartner && e.isBughousePartner ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "bughouse",
                    label: e.$trans("Unpartner")
                },
                on: {
                    click: e.onClickUnpartner
                }
            }) : e._e(), e._v(" "), e.canInviteToAnalysis ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "chess-board-search",
                    label: e.$trans("Analysis Board")
                },
                on: {
                    click: e.onClickAnalysis
                }
            }) : e._e(), e._v(" "), s(e.getIconLabeledComponent(e.archiveUrl), {
                tag: "component",
                attrs: {
                    "icon-name": "chess-board-folder",
                    label: e.$trans("Archive"),
                    url: e.archiveUrl
                },
                on: {
                    click: e.onClickArchive
                }
            }), e._v(" "), e.canBlockUser ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "circle-block",
                    label: e.$trans("Block")
                },
                on: {
                    click: e.onClickBlockUser
                }
            }) : e._e(), e._v(" "), e.canUnblockUser ? s("labeled-icon-button", {
                attrs: {
                    "btn-color": "red",
                    "icon-name": "circle-block",
                    label: e.$trans("Unblock")
                },
                on: {
                    click: e.onClickUnblockUser
                }
            }) : e._e(), e._v(" "), e.canReportUser ? s("labeled-icon-button", {
                attrs: {
                    "icon-name": "circle-danger",
                    label: e.$trans("Report")
                },
                on: {
                    click: e.onClickReport
                }
            }) : e._e(), e._v(" "), e.dynamicActions ? e._l(e.dynamicActions, (function(e, t) {
                return s("labeled-icon-button", {
                    key: t,
                    attrs: {
                        "icon-name": e.iconName,
                        label: e.label
                    },
                    on: {
                        click: e.handler
                    }
                })
            }
            )) : e._e()], 2) : e._e(), e._v(" "), e.chatDropdownTarget ? s("chat-options-dropdown", {
                attrs: {
                    target: e.chatDropdownTarget,
                    position: e.position,
                    "chat-options": e.chatOptions
                },
                on: {
                    "option-selected": e.onClickChatOption,
                    hide: e.hideChatDropdown
                }
            }) : e._e(), e._v(" "), e.analysisDropdownTarget ? s("analysis-options-dropdown", {
                attrs: {
                    target: e.analysisDropdownTarget,
                    position: e.position,
                    "analysis-options": e.analysisOptions
                },
                on: {
                    "option-selected": e.onClickAnalysisOption,
                    hide: e.hideAnalysisDropdown
                }
            }) : e._e()], 1)
        }
          , n = []
    },
    34845: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s(e.url ? "a" : "div", {
                tag: "component",
                class: e.$style.component,
                attrs: {
                    href: e.url
                }
            }, [s("img", {
                directives: [{
                    name: "image-defer",
                    rawName: "v-image-defer",
                    value: e.imageDefer,
                    expression: "imageDefer"
                }],
                class: e.$style.image,
                attrs: {
                    alt: e.alt.length ? e.alt : null,
                    src: e.blankImage,
                    width: "50",
                    height: "50"
                }
            }), e._v(" "), e.presenceData ? s("presence-square", {
                attrs: {
                    size: e.presenceSize,
                    "user-presence": e.presenceData
                }
            }) : s("online-status", {
                attrs: {
                    "is-in-live-chess": e.isLive,
                    "is-online": e.isOnline
                }
            })], 1)
        }
          , n = []
    },
    17985: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return e.status.length ? s("div", {
                class: e.$style.component,
                domProps: {
                    textContent: e._s(e.status)
                }
            }) : e._e()
        }
          , n = []
    },
    69013: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s(e.archiveUrl ? "a" : "div", {
                tag: "component",
                class: e.$style.component,
                attrs: {
                    href: e.archiveUrl,
                    target: "_blank"
                }
            }, [s("span", {
                class: e.$style.win,
                domProps: {
                    textContent: e._s(e.lifetimeScore.win)
                }
            }), e._v(" "), s("span", {
                class: e.$style.divider,
                domProps: {
                    textContent: e._s("/")
                }
            }), e._v(" "), s("span", {
                domProps: {
                    textContent: e._s(e.lifetimeScore.draw)
                }
            }), e._v(" "), s("span", {
                class: e.$style.divider,
                domProps: {
                    textContent: e._s("/")
                }
            }), e._v(" "), s("span", {
                class: e.$style.lose,
                domProps: {
                    textContent: e._s(e.lifetimeScore.lose)
                }
            }), e._v(" "), s("span", {
                domProps: {
                    textContent: e._s(e.$trans("vs"))
                }
            }), e._v(" "), s("user-tagline", {
                class: e.$style.tagline,
                attrs: {
                    title: e.opponentTitle,
                    username: e.opponent.username,
                    "is-dark-mode": !1,
                    "username-theme": "darkgray",
                    "is-username-clickable": !1
                }
            }), e._v(" "), e.archiveUrl ? s("span", {
                class: ["icon-font-chess", "square-out", e.$style.icon]
            }) : e._e()], 1)
        }
          , n = []
    },
    12511: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: e.onMouseLeave,
                    expression: "onMouseLeave"
                }],
                ref: "userPopover",
                class: [e.$style.popover, e.$style[e.position.x], e.$style[e.position.y]],
                style: e.inlineStyles,
                on: {
                    mouseenter: e.onMouseEnter,
                    mouseleave: e.onMouseLeave
                }
            }, [s("div", {
                class: e.$style.component
            }, [s("div", {
                class: e.$style.profile
            }, [s("div", {
                class: e.$style.meta
            }, [e.username ? s("user-avatar", {
                attrs: {
                    image: e.avatar,
                    "presence-data": e.presenceDetails,
                    url: e.showProfileUrls ? e.memberUrl : null
                }
            }) : e._e(), e._v(" "), e.username ? e._e() : s("div", {
                class: e.$style["avatar-placeholder"]
            }), e._v(" "), e.username ? s("div", {
                class: e.$style.info
            }, [s("user-tagline", {
                attrs: {
                    "username-theme": "blue",
                    country: e.country,
                    "flair-code": e.flair ? e.flair.code : "",
                    membership: e.membership,
                    "not-clickable": !e.showProfileUrls,
                    "open-profile-on-new-tab": e.openProfileOnNewTab,
                    title: e.chessTitle,
                    url: e.showProfileUrls ? e.memberUrl : null,
                    username: e.username
                }
            }), e._v(" "), e.isEnabled ? s("user-flair-status", {
                attrs: {
                    status: e.flair ? e.flair.status : ""
                }
            }) : e._e(), e._v(" "), s("div", {
                class: e.$style.ratings
            }, e._l(e.ratingsToShow, (function(e) {
                return s("user-rating", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: e.label,
                        expression: "rating.label"
                    }],
                    key: e.type,
                    attrs: {
                        icon: e.icon,
                        rating: e.value
                    }
                })
            }
            )), 1)], 1) : e._e(), e._v(" "), e.isLeaguePlayer ? s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.$trans("%leagueName% Division", {
                        "%leagueName%": e.leagueName
                    }),
                    expression: "$trans('%leagueName% Division', { '%leagueName%': leagueName })"
                }],
                class: e.$style.badge,
                attrs: {
                    href: e.userDivision
                }
            }, [s("img", {
                attrs: {
                    src: "/bundles/web/images/leagues/badges/" + e.leagueCode + ".svg",
                    width: "38",
                    height: "28"
                }
            })]) : e._e(), e._v(" "), e.isFideEnabledAndVerified ? s("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.$trans("Verified"),
                    expression: "$trans('Verified')"
                }],
                class: e.$style.badge,
                attrs: {
                    href: e.fideUrl
                }
            }, [s("img", {
                attrs: {
                    alt: e.$trans("Verified"),
                    width: "30",
                    height: "28",
                    src: "/bundles/web/images/color-icons/verified.svg"
                }
            })]) : e._e(), e._v(" "), e.username ? e._e() : s("div", {
                class: e.$style.info
            }, [s("loader-three-bounce", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isLoading,
                    expression: "isLoading"
                }],
                class: e.$style.loader,
                attrs: {
                    size: 40
                }
            })], 1)], 1), e._v(" "), e.joinedDate && e.username ? s("div", {
                class: e.$style.secondary
            }, [s("div", {
                domProps: {
                    textContent: e._s(e.translations.joinedDate(e.formatedJoinedDate))
                }
            }), e._v(" "), s("div", {
                class: e.$style.status
            }, [e.presenceDetails && e.loggedAsAnother ? s("presence-button", {
                attrs: {
                    location: "user-popover",
                    username: e.username,
                    "user-presence": e.presenceDetails
                }
            }) : e._e(), e._v(" "), e.presenceLastLoginDate && e.showOfflineText ? s("div", {
                domProps: {
                    textContent: e._s(e.translations.lastOnline(e.formatedLastLoginDate))
                }
            }) : e._e()], 1)]) : e._e(), e._v(" "), e.username ? e._e() : s("div", {
                class: e.$style.secondary
            }), e._v(" "), e.lifetimeScore && e.opponent && e.username ? s("user-lifetime-score", {
                attrs: {
                    username: e.username,
                    opponent: e.opponent,
                    "lifetime-score": e.lifetimeScore
                }
            }) : e._e()], 1), e._v(" "), e.adminActionsIsVisible ? s("admin-actions", {
                attrs: {
                    "can-moderate": e.canModerate,
                    "client-name": e.clientName,
                    "can-mute-on-chat": Boolean(e.clubChatIdForModeratorActions),
                    "can-warn-on-chat": e.canWarnOnChat || Boolean(e.clubChatIdForModeratorActions),
                    "can-moderate-on-chat": e.canModerateOnChat,
                    "user-already-muted-on-chat": e.userAlreadyMutedOnChat
                },
                on: {
                    "warn-user": e.onClickWarn,
                    "mute-user": e.onClickMute,
                    "kick-user": e.onClickKick,
                    "ban-user": e.onClickBan,
                    "chat-warn-user": e.onClickChatWarn,
                    "chat-mute-user": e.onClickChatMute,
                    "chat-unmute-user": e.onClickChatUnMute,
                    "chat-mute-user-remove-messages": e.onClickChatMuteRemoveMessages,
                    "chat-kick-user": e.onClickChatKick
                }
            }) : e._e(), e._v(" "), e.isLoggedIn && !e.isGuest ? s("div", {
                class: e.$style.actions
            }, [e.username ? s("user-actions", {
                attrs: {
                    avatar: e.avatar,
                    "can-add-friend": e.canAddFriend,
                    "can-block-user": e.canBlockUser,
                    "can-create-challenge": e.canCreateChallenge,
                    "can-follow-user": e.canFollowUser,
                    "can-gift-membership": e.canGiftMembership,
                    "can-remove-friend": e.canRemoveFriend,
                    "can-report-user": e.canReportUser,
                    "can-send-message": e.canSendMessage,
                    "can-invite-to-chat": e.canInviteToChat,
                    "can-send-trophy": e.canSendTrophy,
                    "can-unblock-user": e.canUnblockUser,
                    "can-unfollow-user": e.canUnfollowUser,
                    "can-use-global-chat": e.canUseGlobalChat,
                    "can-cancel-friend-request": e.canCancelFriendRequest,
                    "can-decline-friend-request": e.canDeclineFriendRequest,
                    "can-accept-friend-request": e.canAcceptFriendRequest,
                    "dynamic-actions": e.dynamicActions,
                    "logged-as-another": e.loggedAsAnother,
                    username: e.username,
                    "can-observe-game": e.canObserveGame,
                    "is-bughouse-partner": e.isBughousePartner,
                    "challenge-url": e.challengeUrl,
                    "archive-url": e.archiveUrl,
                    "chat-options": e.chatOptions,
                    position: e.position,
                    "can-invite-to-analysis": e.canInviteToAnalysis,
                    "analysis-options": e.analysisOptions,
                    "is-enabled": e.isEnabled,
                    "is-confirm-visible": e.isConfirmVisible,
                    "show-bughouse-partner": e.showBughousePartner,
                    "membership-url": e.membershipUrl
                },
                on: {
                    "remove-friend": e.onClickRemoveFriend,
                    "block-user": e.onClickBlockUser,
                    "user-popover-hide": e.hidePopover,
                    "create-challenge": function(t) {
                        return e.$emit("create-challenge", t)
                    },
                    "send-message": function(t) {
                        return e.$emit("send-message", t)
                    },
                    "add-friend": function(t) {
                        return e.$emit("add-friend", t)
                    },
                    "cancel-friend-request": function(t) {
                        return e.$emit("cancel-friend-request", t)
                    },
                    "decline-friend-request": function(t) {
                        return e.$emit("decline-friend-request", t)
                    },
                    "show-gift": function(t) {
                        return e.$emit("show-gift", t)
                    },
                    "show-archive": function(t) {
                        return e.$emit("show-archive", t)
                    },
                    "start-direct-chat": function(t) {
                        return e.$emit("start-direct-chat")
                    },
                    "mute-user": function(t) {
                        return e.$emit("mute-user", t)
                    },
                    "accept-friend-request": function(t) {
                        return e.$emit("accept-friend-request", t)
                    },
                    "follow-user": function(t) {
                        return e.$emit("follow-user", t)
                    },
                    "unfollow-user": function(t) {
                        return e.$emit("unfollow-user", t)
                    },
                    "unblock-user": function(t) {
                        return e.$emit("unblock-user", t)
                    },
                    "show-report": function(t) {
                        return e.$emit("show-report", t)
                    },
                    "show-trophy": function(t) {
                        return e.$emit("show-trophy", t)
                    },
                    "observe-user": function(t) {
                        return e.$emit("observe-user", t)
                    },
                    "bughouse-partner": function(t) {
                        return e.$emit("bughouse-partner", t)
                    },
                    "bughouse-unpartner": function(t) {
                        return e.$emit("bughouse-unpartner", t)
                    },
                    "request-chat": function(t) {
                        return e.$emit("request-chat", t)
                    },
                    "invite-analysis": function(t) {
                        return e.$emit("invite-analysis", t)
                    }
                }
            }) : e._e()], 1) : e._e()], 1), e._v(" "), e.isConfirmVisible ? s("div", {
                class: e.$style.confirm
            }, [s("p", {
                domProps: {
                    innerHTML: e._s(e.confirmMessage)
                }
            }), e._v(" "), e.clubChatIdForModeratorActions && !e.userAlreadyMutedOnChat ? s("p", [e._v("\n      " + e._s(e.$trans("Message to user:")) + "\n      "), s("v5-input", {
                class: e.$style["moderator-message"],
                attrs: {
                    "force-theme": "light"
                },
                model: {
                    value: e.clubChatModeratorMessage,
                    callback: function(t) {
                        e.clubChatModeratorMessage = t
                    },
                    expression: "clubChatModeratorMessage"
                }
            })], 1) : e._e(), e._v(" "), s("div", [s("v5-button", {
                attrs: {
                    size: "x-small",
                    theme: "basic-light"
                },
                domProps: {
                    textContent: e._s(e.$trans("No"))
                },
                on: {
                    click: e.onConfirmNo
                }
            }), e._v(" "), s("v5-button", {
                attrs: {
                    size: "x-small",
                    theme: "primary"
                },
                domProps: {
                    textContent: e._s(e.$trans("Yes"))
                },
                on: {
                    click: e.onConfirmYes
                }
            })], 1)]) : e._e()])
        }
          , n = []
    },
    63318: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("span", {
                class: e.$style.component
            }, [s("icon-font", {
                class: e.$style.icon,
                attrs: {
                    theme: "primary",
                    name: e.icon
                }
            }), e._v(" "), s("span", {
                class: e.$style.rating
            }, [e._v("\n    " + e._s(e.rating) + "\n  ")])], 1)
        }
          , n = []
    },
    2891: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e, t, s, n, r = this, i = r.$createElement, o = r._self._c || i;
            return o("div", {
                class: [r.$style.component, (e = {},
                e[r.$style.narrow] = r.isIconsOnly,
                e), (t = {},
                t[r.$style.visible] = r.buttonData.show,
                t), (s = {},
                s[r.$style.hidden] = !r.buttonData.show,
                s)]
            }, [r.buttonData.show ? o("v5-button", {
                class: (n = {
                    staffGreen: "primary" === r.buttonData.theme
                },
                n[r.$style.challengeIconOnly] = r.isIconsOnly && r.userPresence.isOnline && !r.userPresence.isPlaying,
                n[r.$style.watchIconOnly] = r.isIconsOnly && r.userPresence.isPlaying,
                n),
                attrs: {
                    href: r.buttonData.href,
                    size: r.isButtonSmall ? "x-small" : "small",
                    theme: r.buttonData.theme
                },
                on: {
                    click: function(e) {
                        return r.handleClick(e)
                    }
                }
            }, [o("span", {
                domProps: {
                    textContent: r._s(r.buttonData.text)
                }
            }), r._v(" "), o("span", {
                class: ["icon-font-chess ui_v5-button-icon", r.buttonData.icon]
            })]) : r.isShowLastOnline && r.buttonData.lastOnline ? o("div", {
                domProps: {
                    textContent: r._s(r.buttonData.lastOnline)
                }
            }) : o("div", {
                class: r.$style.placeholder
            })], 1)
        }
          , n = []
    },
    38572: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e, t = this, s = t.$createElement, n = t._self._c || s;
            return n("div", {
                class: t.$style.component
            }, [n("div", {
                class: [t.$style.square, t.squareColor, (e = {},
                e[t.$style.round] = t.size > 2,
                e)],
                style: t.squareStyle
            })])
        }
          , n = []
    },
    86494: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return render
            },
            x: function() {
                return n
            }
        });
        var render = function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return s("div", [e.user.userNotExist ? e._e() : s("div", {
                attrs: {
                    id: "user-popover"
                }
            }, [e.show ? s("user-popover", {
                ref: "userPopover",
                attrs: {
                    "dynamic-actions": e.dynamicActions,
                    avatar: e.user.avatarUrl,
                    "is-fide-verified": e.user.isFideVerified,
                    "can-add-friend": e.canAddFriend,
                    "can-block-user": e.canBlockUser,
                    "can-create-challenge": e.canCreateChallenge,
                    "can-follow-user": e.canFollowUser,
                    "can-gift-membership": e.canGiftMembership,
                    "can-remove-friend": e.canRemoveFriend,
                    "can-report-user": e.canReportUser,
                    "can-send-message": e.canSendMessage,
                    "can-send-trophy": e.canSendTrophy,
                    "can-unblock-user": e.canUnblockUser,
                    "can-unfollow-user": e.canUnfollowUser,
                    "can-use-global-chat": e.canUseGlobalChat,
                    "can-cancel-friend-request": e.canCancelFriendRequest,
                    "can-accept-friend-request": e.canAcceptFriendRequest,
                    "chess-title": e.user.chessTitle,
                    country: {
                        name: e.user.countryName,
                        code: e.user.countryId
                    },
                    flair: e.user.flair,
                    "club-chat-id-for-moderator-actions": e.clubChatIdForModeratorActions,
                    "is-enabled": e.user.isEnabled,
                    "is-guest": e.isGuest,
                    "is-loading": e.isLoading,
                    "joined-date": e.user.joinDate,
                    "last-login-date": e.user.lastLoginDate,
                    "logged-as-another": e.loggedAsAnother,
                    membership: e.membershipNumber,
                    "popover-position": e.position,
                    "presence-details": e.presenceDetails,
                    ratings: e.ratings,
                    username: e.user.username,
                    "username-element-ref": e.elementRef,
                    "user-already-muted-on-chat": e.userAlreadyMutedOnChat,
                    uuid: e.user.uuid,
                    "league-code": e.leagueData.leagueCode,
                    "league-division": e.leagueData.leagueDivision,
                    "league-name": e.leagueData.leagueName,
                    "lifetime-score": e.lifetimeScore,
                    opponent: e.currentUser
                },
                on: {
                    "accept-friend-request": e.acceptFriendRequest,
                    "add-friend": e.addFriend,
                    "block-user": e.blockUser,
                    "cancel-friend-request": e.cancelFriendRequest,
                    "create-challenge": e.onChallenge,
                    "follow-user": e.trackUser,
                    "remove-friend": e.deleteFriend,
                    "send-message": e.onMessage,
                    "show-archive": e.showArchive,
                    "show-gift": e.showGiftModal,
                    "show-report": e.showReportModal,
                    "show-trophy": e.onTrophy,
                    "start-direct-chat": e.startDirectChat,
                    "unblock-user": e.unblockUser,
                    "unfollow-user": e.untrackUser,
                    "user-popover-hide": e.hideUserPopup
                }
            }) : e._e(), e._v(" "), e.isUserReportModalVisible ? s("user-report-modal", {
                attrs: {
                    username: e.user.username
                },
                on: {
                    "modal-did-hide": e.hideUserReportModal
                }
            }) : e._e(), e._v(" "), e.showGiftMembershipModal ? s("gift-membership-modal", {
                attrs: {
                    "receiver-username": e.user.username,
                    "receiver-id": e.user.userId,
                    "sender-username": e.username
                },
                on: {
                    "hide-modal": e.hideGiftMembershipModal
                }
            }) : e._e(), e._v(" "), e.isTrophyPopoverVisible ? s("trophy-popover", {
                on: {
                    hide: e.hideTrophyPopover
                }
            }) : e._e()], 1), e._v(" "), e.user.userNotExist && e.show ? s("div", {
                class: [e.$style["placeholder-popover"], e.$style[e.position.x], e.$style[e.position.y]],
                style: e.inlineStyles
            }, [s("div", {
                class: e.$style["placeholder-component"]
            }, [s("div", {
                class: e.$style["placeholder-profile"]
            }, [s("div", {
                class: e.$style["placeholder-avatar"]
            }), e._v(" "), s("div", {
                class: e.$style["placeholder-info"],
                domProps: {
                    textContent: e._s(e.$trans("Member name does not exist"))
                }
            })])])]) : e._e()])
        }
          , n = []
    },
    54752: function(e) {
        e.exports = function uid(e) {
            return e = e || 7,
            Math.random().toString(35).substr(2, e)
        }
    },
    28658: function(e, t, s) {
        "use strict";
        var n = s(27998)
          , r = s(90628)
          , i = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, null, null, null);
        t.Z = i.exports
    },
    87879: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return i
            }
        });
        var n = {
            name: "LoaderThreeBounce",
            props: {
                isCircle: {
                    type: Boolean,
                    default: !1
                },
                size: {
                    type: Number,
                    default: 80
                }
            },
            computed: {
                dotCss() {
                    const e = `${Math.round(this.size / 4)}px`;
                    return {
                        width: e,
                        height: e
                    }
                }
            }
        }
          , r = {
            component: "loader-three-bounce-component",
            circle: "loader-three-bounce-circle",
            dot: "loader-three-bounce-dot",
            animate: "loader-three-bounce-animate",
            bounce1: "loader-three-bounce-bounce1",
            bounce2: "loader-three-bounce-bounce2"
        };
        var i = (0,
        s(51900).Z)(n, (function() {
            var e, t = this, s = t.$createElement, n = t._self._c || s;
            return n("div", {
                class: [t.$style.component, (e = {},
                e[t.$style.circle] = t.isCircle,
                e)],
                style: {
                    width: t.size + "px"
                },
                attrs: {
                    "data-test-element": "loader-three-bounce"
                }
            }, [n("div", {
                class: [t.$style.dot, t.$style.bounce1],
                style: t.dotCss
            }), t._v(" "), n("div", {
                class: [t.$style.dot, t.$style.bounce2],
                style: t.dotCss
            }), t._v(" "), n("div", {
                class: t.$style.dot,
                style: t.dotCss
            })])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = r.locals || r
        }
        ), null, null).exports
    },
    59556: function(e, t, s) {
        "use strict";
        var n = s(48385)
          , r = s(94610)
          , i = s(22319);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    53656: function(e, t, s) {
        "use strict";
        var n = s(22727)
          , r = s(32276)
          , i = s(71434);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    1960: function(e, t, s) {
        "use strict";
        var n = s(39602)
          , r = s(23255)
          , i = s(60681);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    8868: function(e, t, s) {
        "use strict";
        var n = s(36323)
          , r = s(21159)
          , i = s(21397);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    37095: function(e, t, s) {
        "use strict";
        var n = s(71854)
          , r = s(88726)
          , i = s(8913);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    39018: function(e, t, s) {
        "use strict";
        var n = s(90174)
          , r = s(67357)
          , i = s(56079);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    70006: function(e, t, s) {
        "use strict";
        var n = s(27033)
          , r = s(58570)
          , i = s(59118);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    94271: function(e, t, s) {
        "use strict";
        var n = s(98250)
          , r = s(36294)
          , i = s(94095);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    18898: function(e, t, s) {
        "use strict";
        var n = s(54804)
          , r = s(32095)
          , i = s(67189);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    24540: function(e, t, s) {
        "use strict";
        var n = s(34845)
          , r = s(61928)
          , i = s(17818);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    56450: function(e, t, s) {
        "use strict";
        var n = s(17985)
          , r = s(33427)
          , i = s(89646);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    13022: function(e, t, s) {
        "use strict";
        var n = s(69013)
          , r = s(57719)
          , i = s(46406);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    10588: function(e, t, s) {
        "use strict";
        var n = s(12511)
          , r = s(49097)
          , i = s(3453);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    16352: function(e, t, s) {
        "use strict";
        var n = s(63318)
          , r = s(41943)
          , i = s(85328);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    93186: function(e, t, s) {
        "use strict";
        var n = s(2891)
          , r = s(53898)
          , i = s(23935);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    69977: function(e, t, s) {
        "use strict";
        var n = s(38572)
          , r = s(52129)
          , i = s(91081);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    12041: function(e, t, s) {
        "use strict";
        var n = s(86494)
          , r = s(98692)
          , i = s(50280);
        var o = (0,
        s(51900).Z)(r.Z, n.s, n.x, !1, (function injectStyles(e) {
            this.$style = i.Z.locals || i.Z
        }
        ), null, null);
        t.Z = o.exports
    },
    90628: function(e, t, s) {
        "use strict";
        var n = s(5221);
        t.Z = n.Z
    },
    94610: function(e, t, s) {
        "use strict";
        var n = s(89664);
        t.Z = n.Z
    },
    32276: function(e, t, s) {
        "use strict";
        var n = s(45020);
        t.Z = n.Z
    },
    23255: function(e, t, s) {
        "use strict";
        var n = s(62253);
        t.Z = n.Z
    },
    21159: function(e, t, s) {
        "use strict";
        var n = s(42227);
        t.Z = n.Z
    },
    88726: function(e, t, s) {
        "use strict";
        var n = s(52576);
        t.Z = n.Z
    },
    67357: function(e, t, s) {
        "use strict";
        var n = s(474);
        t.Z = n.Z
    },
    58570: function(e, t, s) {
        "use strict";
        var n = s(84906);
        t.Z = n.Z
    },
    36294: function(e, t, s) {
        "use strict";
        var n = s(67631);
        t.Z = n.Z
    },
    32095: function(e, t, s) {
        "use strict";
        var n = s(29629);
        t.Z = n.Z
    },
    61928: function(e, t, s) {
        "use strict";
        var n = s(72053);
        t.Z = n.Z
    },
    33427: function(e, t, s) {
        "use strict";
        var n = s(11853);
        t.Z = n.Z
    },
    49097: function(e, t, s) {
        "use strict";
        var n = s(40994);
        t.Z = n.Z
    },
    41943: function(e, t, s) {
        "use strict";
        var n = s(20043);
        t.Z = n.Z
    },
    53898: function(e, t, s) {
        "use strict";
        var n = s(19594);
        t.Z = n.Z
    },
    52129: function(e, t, s) {
        "use strict";
        var n = s(42547);
        t.Z = n.Z
    },
    98692: function(e, t, s) {
        "use strict";
        var n = s(42952);
        t.Z = n.Z
    },
    57719: function(e, t, s) {
        "use strict";
        var n = s(60593);
        t.Z = n.Z
    },
    22319: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(42887)
    },
    71434: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(47076)
    },
    60681: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(16817)
    },
    21397: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(60842)
    },
    8913: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(94157)
    },
    56079: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(61398)
    },
    59118: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(36730)
    },
    94095: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(30872)
    },
    67189: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(75945)
    },
    17818: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(92846)
    },
    89646: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(66713)
    },
    46406: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(45991)
    },
    3453: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(25847)
    },
    85328: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(40476)
    },
    23935: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(18642)
    },
    91081: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(21554)
    },
    50280: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return n.Z
            }
        });
        var n = s(62270)
    },
    22727: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return n.s
            },
            x: function() {
                return n.x
            }
        });
        var n = s(69430)
    },
    39602: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return n.s
            },
            x: function() {
                return n.x
            }
        });
        var n = s(71011)
    },
    74338: function(e, t, s) {
        e.exports = s(84474)(629)
    },
    92009: function(e, t, s) {
        e.exports = s(84474)(883)
    },
    2693: function(e, t, s) {
        "use strict";
        var n = s(93242)
          , r = s(17179);
        t.Z = function baseForOwn(e, t) {
            return e && (0,
            n.Z)(e, t, r.Z)
        }
    },
    68882: function(e, t, s) {
        "use strict";
        var n = s(69203);
        t.Z = function castFunction(e) {
            return "function" == typeof e ? e : n.Z
        }
    },
    92414: function(e, t, s) {
        "use strict";
        var n = s(2693)
          , r = s(68882);
        t.Z = function forOwn(e, t) {
            return e && (0,
            n.Z)(e, (0,
            r.Z)(t))
        }
    }
}]);
