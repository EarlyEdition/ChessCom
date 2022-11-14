window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
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
    web_game_daily: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/game/daily"]],
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
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_search_redirect: {
        tokens: [["text", "/search/redirect"]],
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
    i18n_web_search_redirect: {
        tokens: [["text", "/search/redirect"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_live: {
        tokens: [["text", "/live"]],
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
    i18n_web_live: {
        tokens: [["text", "/live"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_security_logout: {
        tokens: [["text", "/logout"]],
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
    },
    web_message_index: {
        tokens: [["text", "/messages"]],
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
    web_member_play: {
        tokens: [["variable", "/", "[^/]++", "opponent"], ["text", "/play"]],
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
    i18n_web_member_play: {
        tokens: [["variable", "/", "[^/]++", "opponent"], ["text", "/play"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_stats: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/stats"]],
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
    i18n_web_stats: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/stats"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_user_settings_themes: {
        tokens: [["text", "/settings/themes"]],
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
    web_play: {
        tokens: [["text", "/play/online"]],
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
    i18n_web_play: {
        tokens: [["text", "/play/online"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_tv: {
        tokens: [["text", "/tv"]],
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
    i18n_web_tv: {
        tokens: [["text", "/tv"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_user_game_settings_email_callback_animation_type: {
        tokens: [["text", "/callback/settings/user/email/animationType"]],
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
    web_user_game_settings_email_callback_board_color: {
        tokens: [["text", "/callback/settings/user/email/boardColor"]],
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
    web_user_game_settings_email_callback_coordinates: {
        tokens: [["text", "/callback/settings/user/email/coordinates"]],
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
    web_user_game_settings_callback_dark_mode_toggle: {
        tokens: [["text", "/callback/settings/user/darkModeToggle"]],
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
    web_user_game_settings_email_callback_show_legal_moves_toggle: {
        tokens: [["text", "/callback/settings/user/email/showLegalMovesToggle"]],
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
    web_user_game_settings_email_callback_highlight_last_move_toggle: {
        tokens: [["text", "/callback/settings/user/email/highlightLastMoveToggle"]],
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
    web_user_game_settings_email_callback_is_white_on_bottom_toggle: {
        tokens: [["text", "/callback/settings/user/email/isWhiteOnBottom"]],
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
    web_user_game_settings_email_callback_move_list_display_type: {
        tokens: [["text", "/callback/settings/user/email/moveListDisplayType"]],
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
    web_user_game_settings_email_callback_move_method: {
        tokens: [["text", "/callback/settings/user/email/moveMethod"]],
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
    web_user_game_settings_email_callback_piece: {
        tokens: [["text", "/callback/settings/user/email/pieceStyle"]],
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
    web_user_game_settings_email_callback_sound_toggle: {
        tokens: [["text", "/callback/settings/user/email/soundToggle"]],
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
    web_user_game_settings_email_callback_show_timestamps: {
        tokens: [["text", "/callback/settings/user/email/showTimestamps"]],
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
    web_user_game_settings_email_callback_sound_theme: {
        tokens: [["text", "/callback/settings/user/email/soundTheme"]],
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
    web_user_callback_get_board_settings: {
        tokens: [["text", "/callback/board-settings"]],
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
    web_2fa_login: {
        tokens: [["text", "/2fa"]],
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
    i18n_web_2fa_login: {
        tokens: [["text", "/2fa"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_article_callback_list_authors: {
        tokens: [["text", "/callback/articles/authors"]],
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
    web_content_callback_load_more: {
        tokens: [["variable", "/", "[1-9]+[0-9]*", "page"], ["variable", "/", "article|news|blog", "contentType"], ["text", "/callback/content/list"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            page: "[1-9]+[0-9]*",
            contentType: "article|news|blog",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    i18n_web_content_callback_load_more: {
        tokens: [["variable", "/", "[1-9]+[0-9]*", "page"], ["variable", "/", "article|news|blog", "contentType"], ["text", "/callback/content/list"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            page: "[1-9]+[0-9]*",
            contentType: "article|news|blog",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_content_callback_feature_article: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/callback/content/feature/article"]],
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
    web_content_callback_feature_blog: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/callback/content/feature/blog"]],
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
    web_blog_callback_feature: {
        tokens: [["text", "/headline"], ["variable", "/", "[^/]++", "id"], ["text", "/callback/blog"]],
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
    web_content_callback_feature_lesson_course: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/callback/content/feature/lesson_course"]],
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
    web_content_callback_feature_news: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/callback/content/feature/news"]],
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
    web_content_callback_feature_chess_video: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/callback/content/feature/chess_video"]],
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
    web_user_callback_set_content_language: {
        tokens: [["text", "/callback/user/content-language/set"]],
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
    web_article_view: {
        tokens: [["variable", "/", "[^/]++", "url"], ["text", "/article/view"]],
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
    i18n_web_article_view: {
        tokens: [["variable", "/", "[^/]++", "url"], ["text", "/article/view"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_survey_callback_vote: {
        tokens: [["variable", "/", "\\d+", "optionId"], ["text", "/vote"], ["variable", "/", "\\d+", "id"], ["text", "/callback/survey"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            id: "\\d+",
            optionId: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_team_match_view: {
        tokens: [["variable", "/", "\\d+", "match"], ["text", "/club/matches"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            match: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    i18n_web_team_match_view: {
        tokens: [["variable", "/", "\\d+", "match"], ["text", "/club/matches"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            match: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_tournament_view: {
        tokens: [["variable", "/", "[^/]++", "url"], ["text", "/tournament"]],
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
    i18n_web_tournament_view: {
        tokens: [["variable", "/", "[^/]++", "url"], ["text", "/tournament"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_user_callback_report_user: {
        tokens: [["text", "/callback/report-user"]],
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
    web_tv_callback_report: {
        tokens: [["variable", "/", "[^/]++", "video"], ["variable", "/", "[^/]++", "reason"], ["text", "/chess-tv/callback/report"]],
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
    web_user_callback_popup: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/user/popup"]],
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
    web_about: {
        tokens: [["text", "/about"]],
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
    web_user_callback_username_search: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/user/search"]],
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
    web_league_division: {
        tokens: [["variable", "/", "[\\w]{6,}", "division"], ["variable", "/", "\\w+", "league"], ["text", "/leagues"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            league: "\\w+",
            division: "[\\w]{6,}",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    i18n_web_league_division: {
        tokens: [["variable", "/", "[\\w]{6,}", "division"], ["variable", "/", "\\w+", "league"], ["text", "/leagues"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            league: "\\w+",
            division: "[\\w]{6,}",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_friend_request_callback: {
        tokens: [["variable", "/", "[^/]++", "user"], ["text", "/callback/friend/request"]],
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
    web_friend_accept_request_callback: {
        tokens: [["variable", "/", "[^/]++", "user"], ["text", "/callback/friend/accept"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["PUT"],
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
    web_friend_cancel_request_callback: {
        tokens: [["variable", "/", "[^/]++", "user"], ["text", "/callback/friend/cancel/request"]],
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
    web_user_callback_valid_username: {
        tokens: [["text", "/callback/user/valid"]],
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
    i18n_web_user_callback_valid_username: {
        tokens: [["text", "/callback/user/valid"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_friend_decline_request_callback: {
        tokens: [["variable", "/", "[^/]++", "user"], ["text", "/callback/friend/decline/request"]],
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
    web_friend_delete_callback: {
        tokens: [["variable", "/", "[^/]++", "user"], ["text", "/callback/friend/delete"]],
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
    web_user_callback_dismiss_follow_suggestion: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/user/dismiss_follow"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            id: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_user_callback_report_reasons: {
        tokens: [["text", "/callback/report-user"]],
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
    pubapi_player_profile: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/pub/player"]],
        defaults: [],
        requirements: [],
        hosttokens: [["text", "api.chess.com"]],
        methods: [],
        schemes: ["https"]
    },
    web_user_callback_follow_suggestions: {
        tokens: [["text", "/callback/user/follow_suggestions"]],
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
    web_friend_callback_friends_search: {
        tokens: [["text", "/search"], ["variable", "/", "[^/]++", "user"], ["text", "/callback/friends"]],
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
    web_user_callback_recent_opponents: {
        tokens: [["text", "/callback/recent/opponents"]],
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
    web_security_callback_user_roles: {
        tokens: [["text", "/callback/security/user/roles"]],
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
    web_guest_update_skill_level: {
        tokens: [["text", "/guest/update-skill-level"]],
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
    web_user_callback_set_archive_view: {
        tokens: [["text", "/callback/user/archive-view"]],
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
    web_user_callback_set_fair_play_agree: {
        tokens: [["variable", "/", "1|0", "fairPlayAgree"], ["text", "/callback/user/set-fair-play-agree"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            fairPlayAgree: "1|0",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_user_callback_set_home_recent_content_type: {
        tokens: [["text", "/callback/user/home-recent-content-type"]],
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
    web_member_callback_track_member: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/member/track"]],
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
    web_member_callback_unblock_member: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/member/unblock"]],
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
    web_member_callback_untrack_member: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/member/untrack"]],
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
    web_search: {
        tokens: [["text", "/search"]],
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
    i18n_web_search: {
        tokens: [["text", "/search"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_puzzles_mode: {
        tokens: [["variable", "/", "[^/]++", "mode"], ["text", "/puzzles"]],
        defaults: {
            mode: "",
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    i18n_web_puzzles_mode: {
        tokens: [["variable", "/", "[^/]++", "mode"], ["text", "/puzzles"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            mode: "",
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
    web_tactics_battle_callback_challenge_deny: {
        tokens: [["text", "/deny"], ["variable", "/", "[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}", "id"], ["text", "/callback/tactics/battle-challenges"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            id: "[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_tactics_battle_callback_challenge_list: {
        tokens: [["text", "/callback/tactics/battle-challenges"]],
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
    web_achievement_callback_delete_new_achievements: {
        tokens: [["text", "/callback/achievements/new"]],
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
    web_friend_count_online_friends_callback: {
        tokens: [["text", "/callback/friend/count-online"]],
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
    web_user_callback_navigation_data: {
        tokens: [["text", "/callback/user/navigation-data"]],
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
    web_alert_callback_ignore_offline_challenge: {
        tokens: [["variable", "/", "\\d+", "id"], ["text", "/callback/alert/ignore/offline-challenge"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            id: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_alert_callback_alerts: {
        tokens: [["text", "/callback/alert/alerts"]],
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
    web_user_callback_notices: {
        tokens: [["text", "/callback/user/notices"]],
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
    web_alert_callback_ignore_achievement: {
        tokens: [["text", "/callback/alert/ignore/achievement"]],
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
    web_alert_callback_ignore_comment: {
        tokens: [["variable", "/", "\\w+", "contentType"], ["variable", "/", ".+", "contentId"], ["text", "/callback/alert/ignore/comment"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            contentId: ".+",
            contentType: "\\w+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_alert_callback_ignore_new_comments: {
        tokens: [["text", "/callback/alert/ignore/new-comments"]],
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
    web_alert_callback_ignore_new_content: {
        tokens: [["text", "/callback/alert/ignore/new-content"]],
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
    web_alert_callback_ignore_all: {
        tokens: [["text", "/callback/alert/ignore/all"]],
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
    web_alert_callback_ignore: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/callback/alert/ignore"]],
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
    web_club_callback_manage_user_group_request: {
        tokens: [["variable", "/", ".+", "username"], ["variable", "/", "\\d+", "id"], ["text", "/callback/club/group-request/manage"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            id: "\\d+",
            username: ".+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_tv_callback_get_announcement: {
        tokens: [["variable", "/", "[^/]++", "locale"], ["text", "/callback/tv/getAnnouncement"]],
        defaults: {
            locale: null,
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    },
    pubapi_player_clubs: {
        tokens: [["text", "/clubs"], ["variable", "/", "[^/]++", "username"], ["text", "/pub/player"]],
        defaults: [],
        requirements: [],
        hosttokens: [["text", "api.chess.com"]],
        methods: [],
        schemes: ["https"]
    },
    pubapi_navbar_panels_watch: {
        tokens: [["text", "/int/navbar/panels/watch"]],
        defaults: [],
        requirements: [],
        hosttokens: [["text", "api.chess.com"]],
        methods: [],
        schemes: ["https"]
    },
    web_awards_books: {
        tokens: [["text", "/books"], ["variable", "/", "[^/]++", "username"], ["text", "/awards"]],
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
    i18n_web_awards_books: {
        tokens: [["text", "/books"], ["variable", "/", "[^/]++", "username"], ["text", "/awards"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_awards_achievements: {
        tokens: [["text", "/achievements"], ["variable", "/", "[^/]++", "username"], ["text", "/awards"]],
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
    i18n_web_awards_achievements: {
        tokens: [["text", "/achievements"], ["variable", "/", "[^/]++", "username"], ["text", "/awards"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_user_settings_notifications: {
        tokens: [["text", "/settings/notifications"]],
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
    web_awards_member: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/awards"]],
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
    i18n_web_awards_member: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/awards"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_user_settings_board: {
        tokens: [["text", "/settings/board"]],
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
    web_daily_seek: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/daily/seek"]],
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
    web_daily_index: {
        tokens: [["text", "/daily"]],
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
    i18n_web_daily_index: {
        tokens: [["text", "/daily"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_club_forum: {
        tokens: [["variable", "/", "[^/]++", "url"], ["text", "/clubs/forum"]],
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
    i18n_web_club_forum: {
        tokens: [["variable", "/", "[^/]++", "url"], ["text", "/clubs/forum"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_forum_view: {
        tokens: [["variable", "/", ".+", "url"], ["text", "/forum/view"]],
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
    i18n_web_forum_view: {
        tokens: [["variable", "/", ".+", "url"], ["text", "/forum/view"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_club_announcements: {
        tokens: [["text", "/announcements"], ["variable", "/", ".+", "club"], ["text", "/club"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            club: ".+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_news_view: {
        tokens: [["variable", "/", "[^/]++", "url"], ["text", "/news/view"]],
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
    i18n_web_news_view: {
        tokens: [["variable", "/", "[^/]++", "url"], ["text", "/news/view"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_club_profile: {
        tokens: [["variable", "/", "[^/]++", "url"], ["text", "/club"]],
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
    i18n_web_club_profile: {
        tokens: [["variable", "/", "[^/]++", "url"], ["text", "/club"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_club_pending_requests: {
        tokens: [["variable", "/", ".+", "url"], ["text", "/clubs/requests"]],
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
    web_club: {
        tokens: [["text", "/clubs"]],
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
    i18n_web_club: {
        tokens: [["text", "/clubs"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_user_settings_daily: {
        tokens: [["text", "/settings/daily"]],
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
    web_friends_find: {
        tokens: [["text", "/friends/find"]],
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
    web_friends_invite: {
        tokens: [["text", "/friends/invite"]],
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
    web_friends: {
        tokens: [["text", "/friends"]],
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
    web_user_settings_home: {
        tokens: [["text", "/settings/home"]],
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
    web_play_live_arena: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/play/arena"]],
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
    i18n_web_play_live_arena: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/play/arena"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_play_daily: {
        tokens: [["text", "/play/online/daily"]],
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
    i18n_web_play_daily: {
        tokens: [["text", "/play/online/daily"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_play_live_tournament: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/play/tournament"]],
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
    i18n_web_play_live_tournament: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/play/tournament"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_user_settings_livechess: {
        tokens: [["text", "/settings/live"]],
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
    web_team_match_live_view: {
        tokens: [["variable", "/", "\\d+", "match"], ["text", "/club/matches/live"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            match: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    i18n_web_team_match_live_view: {
        tokens: [["variable", "/", "\\d+", "match"], ["text", "/club/matches/live"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            match: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_club_open_matches: {
        tokens: [["text", "/clubs/matches/open"]],
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
    i18n_web_club_open_matches: {
        tokens: [["text", "/clubs/matches/open"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_awards_trophies: {
        tokens: [["text", "/trophies"], ["variable", "/", "[^/]++", "username"], ["text", "/awards"]],
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
    i18n_web_awards_trophies: {
        tokens: [["text", "/trophies"], ["variable", "/", "[^/]++", "username"], ["text", "/awards"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_awards_view_trophy: {
        tokens: [["variable", "/", "\\d+", "userTrophyId"], ["variable", "/", "arena|trophy", "type"], ["variable", "/", "[^/]++", "username"], ["text", "/awards"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            type: "arena|trophy",
            userTrophyId: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    },
    i18n_web_awards_view_trophy: {
        tokens: [["variable", "/", "\\d+", "userTrophyId"], ["variable", "/", "arena|trophy", "type"], ["variable", "/", "[^/]++", "username"], ["text", "/awards"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            type: "arena|trophy",
            userTrophyId: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["GET"],
        schemes: ["https"]
    },
    web_votechess: {
        tokens: [["text", "/votechess"]],
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
    i18n_web_votechess: {
        tokens: [["text", "/votechess"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_votechess_game: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/votechess/game"]],
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
    i18n_web_votechess_game: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/votechess/game"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    share_league_promotion_image: {
        tokens: [["variable", "/", "\\w+", "code"], ["variable", "/", "[^/]++", "username"], ["text", "/share/league_promotion"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            code: "\\w+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    i18n_share_league_promotion_image: {
        tokens: [["variable", "/", "\\w+", "code"], ["variable", "/", "[^/]++", "username"], ["text", "/share/league_promotion"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
        defaults: {
            subdomain: "www",
            _locale: ""
        },
        requirements: {
            code: "\\w+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
            _locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_game_seek_challenge: {
        tokens: [["variable", "/", "[^/]++", "shortUuid"], ["text", "/challenge"]],
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
    web_game_callback_shareable_chess_challenge: {
        tokens: [["text", "/callback/game/shareable/challenge"]],
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
    web_game_callback_daily_chess_challenge: {
        tokens: [["variable", "/", "[^/]++", "opponent"], ["text", "/callback/game/daily/challenge"]],
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
    web_dynboard: {
        tokens: [["text", "/dynboard"]],
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
    web_game_seek_callback_open_seeks: {
        tokens: [["text", "/callback/game_seek/open"]],
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
    web_index: {
        tokens: [["text", "/"]],
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
    i18n_web_index: {
        tokens: [["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_tournaments_callback_joinable: {
        tokens: [["text", "/callback/tournament/joinable"]],
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
    web_page_play: {
        tokens: [["text", "/play"]],
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
    i18n_web_page_play: {
        tokens: [["text", "/play"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_play_computer: {
        tokens: [["text", "/play/computer"]],
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
    i18n_web_play_computer: {
        tokens: [["text", "/play/computer"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_game_callback_random_daily_chess_challenge: {
        tokens: [["text", "/callback/game/random/daily/challenge"]],
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
    web_eco_callback_search_by_starting_position: {
        tokens: [["text", "/callback/eco/search/starting-position"]],
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
    web_game_callback_ratings: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/game_seek/ratings"]],
        defaults: {
            username: null,
            subdomain: "www"
        },
        requirements: {
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
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
    },
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
    },
    web_home_daily_display: {
        tokens: [["text", "/callback/home/daily-display"]],
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
    web_user_callback_set_home_settings: {
        tokens: [["text", "/callback/user/set-home-settings"]],
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
    web_tactics_callback_rated_next: {
        tokens: [["text", "/callback/tactics/rated/next"]],
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
    web_message_thread: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/messages"]],
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
    web_message_callback_archive: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/messages/archive"]],
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
    web_message_callback_archive_bulk: {
        tokens: [["text", "/callback/messages/bulk/archive"]],
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
    web_message_callback_add_captcha: {
        tokens: [["text", "/callback/messages/limited"]],
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
    web_message_callback_bulk_delete: {
        tokens: [["text", "/callback/messages/bulk/delete"]],
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
    web_message_callback_delete: {
        tokens: [["variable", "/", "\\d+", "messageId"], ["text", "/callback/messages/delete"]],
        defaults: {
            subdomain: "www"
        },
        requirements: {
            messageId: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: ["POST"],
        schemes: ["https"]
    },
    web_message_callback_show: {
        tokens: [["variable", "/", "\\d+", "page"], ["variable", "/", "[^/]++", "username"], ["text", "/callback/messages/show"]],
        defaults: {
            page: 1,
            subdomain: "www"
        },
        requirements: {
            page: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_message_callback_mark_all_as_read: {
        tokens: [["text", "/callback/messages/mark-all-as-read"]],
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
    web_message_callback_unarchive: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/messages/unarchive"]],
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
    web_message_callback_create: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/callback/messages"]],
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
    web_message_callback_list: {
        tokens: [["variable", "/", "\\d+", "page"], ["variable", "/", "inbox|archived|unread", "type"], ["text", "/callback/messages/list"]],
        defaults: {
            page: 1,
            subdomain: "www"
        },
        requirements: {
            type: "inbox|archived|unread",
            page: "\\d+",
            subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
        },
        hosttokens: [["text", ".chess.com"], ["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]],
        methods: [],
        schemes: ["https"]
    },
    web_user_callback_update_navigation_state: {
        tokens: [["variable", "/", "[^/]++", "state"], ["text", "/callback/user/update-navigation-state"]],
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
    web_search_callback_autofill: {
        tokens: [["variable", "/", "[^/]++", "keyword"], ["text", "/search/callback/autofill"]],
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
    i18n_web_search_callback_autofill: {
        tokens: [["variable", "/", "[^/]++", "keyword"], ["text", "/search/callback/autofill"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    i18n_web_languages_callback: {
        tokens: [["text", "/callback/languages"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_languages_callback: {
        tokens: [["text", "/callback/languages"]],
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
    web_article_index: {
        tokens: [["text", "/articles"]],
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
    i18n_web_article_index: {
        tokens: [["text", "/articles"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_forum_index: {
        tokens: [["text", "/forum"]],
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
    i18n_web_forum_index: {
        tokens: [["text", "/forum"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_page_learn: {
        tokens: [["text", "/learn"]],
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
    i18n_web_page_learn: {
        tokens: [["text", "/learn"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_openings_index: {
        tokens: [["text", "/openings"]],
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
    i18n_web_openings_index: {
        tokens: [["text", "/openings"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_language_set: {
        tokens: [["variable", "/", "[^/]++", "locale"], ["text", "/callback/language"]],
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
function() {
    var e, t, a, s, n, r, o, i, c, l, u = {
        2293: function(e, t) {
            "use strict";
            t.Z = {
                name: "SectionTitleDismissible",
                emits: ["close"]
            }
        },
        8033: function(e, t, a) {
            "use strict";
            var s = a(9790)
              , n = a(5291)
              , r = a(4164);
            t.Z = e=>{
                const t = (0,
                r.i)(e);
                return t && (0,
                n.el)({
                    type: s.V5.error,
                    message: t
                }),
                Promise.reject(e)
            }
        },
        4903: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return addCsrfToken
                }
            });
            var s = a(1692);
            const n = ["delete", "patch", "post", "put"];
            function addCsrfToken(e) {
                return e && !(0,
                s.q)(e.url) && n.includes(e.method) ? (e.data instanceof FormData || e.data instanceof URLSearchParams ? e.data.append("_token", window.context.csrf.token) : e.data = Object.assign({
                    _token: window.context.csrf.token
                }, e.data || {}),
                e) : e
            }
        },
        175: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return addRequestId
                }
            });
            var s = a(169);
            const random = ()=>Math.random().toString(36).substring(2, 15);
            function addRequestId(e) {
                return (()=>{
                    const e = document.getElementById(s.GO.NAV_ROOT);
                    return !!e && Boolean(e.dataset.featureClientRequestId)
                }
                )() && (e.headers.common["X-Chesscom-Request-Id"] = (e=>{
                    let t = random();
                    for (; t.length < e; )
                        t += random();
                    return t.substring(0, e)
                }
                )(32)),
                e
            }
        },
        6770: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return castBoolsToInts
                }
            });
            var s = a(1692);
            const boolToInt = e=>(Object.keys(e).forEach((t=>{
                const a = e[t];
                "boolean" == typeof a && (e[t] = Number(a)),
                "object" == typeof a && null !== a && (e[t] = boolToInt(a))
            }
            )),
            e);
            function castBoolsToInts(e) {
                return !e || (0,
                s.q)(e.url) || "object" == typeof e.data && (e.data = boolToInt(e.data)),
                e
            }
        },
        1992: function(e, t, a) {
            "use strict";
            var s = a(4903)
              , n = a(175)
              , r = a(6770);
            t.Z = [s.Z, n.Z, r.Z]
        },
        2898: function(e, t, a) {
            "use strict";
            a.d(t, {
                c: function() {
                    return URLSearchParamEntries
                }
            });
            const URLSearchParamEntries = (e=window.location.search)=>[...new URLSearchParams(e).entries()].reduce(((e,[t,a])=>Object.assign({
                [t]: a
            }, e)), {})
        },
        4606: function(e, t) {
            var a, s, n, r;
            r = function() {
                "use strict";
                var e = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a)
                            Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }
                  , t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                  , a = function() {
                    function defineProperties(e, t) {
                        for (var a = 0; a < t.length; a++) {
                            var s = t[a];
                            s.enumerable = s.enumerable || !1,
                            s.configurable = !0,
                            "value"in s && (s.writable = !0),
                            Object.defineProperty(e, s.key, s)
                        }
                    }
                    return function(e, t, a) {
                        return t && defineProperties(e.prototype, t),
                        a && defineProperties(e, a),
                        e
                    }
                }();
                function _classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                var s = function() {
                    function Router2(e, t) {
                        _classCallCheck(this, Router2),
                        this.context_ = e || {
                            base_url: "",
                            prefix: "",
                            host: "",
                            port: "",
                            scheme: "",
                            locale: ""
                        },
                        this.setRoutes(t || {})
                    }
                    return a(Router2, [{
                        key: "setRoutingData",
                        value: function setRoutingData(e) {
                            this.setBaseUrl(e.base_url),
                            this.setRoutes(e.routes),
                            "prefix"in e && this.setPrefix(e.prefix),
                            "port"in e && this.setPort(e.port),
                            "locale"in e && this.setLocale(e.locale),
                            this.setHost(e.host),
                            this.setScheme(e.scheme)
                        }
                    }, {
                        key: "setRoutes",
                        value: function setRoutes(e) {
                            this.routes_ = Object.freeze(e)
                        }
                    }, {
                        key: "getRoutes",
                        value: function getRoutes() {
                            return this.routes_
                        }
                    }, {
                        key: "setBaseUrl",
                        value: function setBaseUrl(e) {
                            this.context_.base_url = e
                        }
                    }, {
                        key: "getBaseUrl",
                        value: function getBaseUrl() {
                            return this.context_.base_url
                        }
                    }, {
                        key: "setPrefix",
                        value: function setPrefix(e) {
                            this.context_.prefix = e
                        }
                    }, {
                        key: "setScheme",
                        value: function setScheme(e) {
                            this.context_.scheme = e
                        }
                    }, {
                        key: "getScheme",
                        value: function getScheme() {
                            return this.context_.scheme
                        }
                    }, {
                        key: "setHost",
                        value: function setHost(e) {
                            this.context_.host = e
                        }
                    }, {
                        key: "getHost",
                        value: function getHost() {
                            return this.context_.host
                        }
                    }, {
                        key: "setPort",
                        value: function setPort(e) {
                            this.context_.port = e
                        }
                    }, {
                        key: "getPort",
                        value: function getPort() {
                            return this.context_.port
                        }
                    }, {
                        key: "setLocale",
                        value: function setLocale(e) {
                            this.context_.locale = e
                        }
                    }, {
                        key: "getLocale",
                        value: function getLocale() {
                            return this.context_.locale
                        }
                    }, {
                        key: "buildQueryParams",
                        value: function buildQueryParams(e, a, s) {
                            var n = this
                              , r = void 0
                              , o = new RegExp(/\[\]$/);
                            if (a instanceof Array)
                                a.forEach((function(a, r) {
                                    o.test(e) ? s(e, a) : n.buildQueryParams(e + "[" + ("object" === (void 0 === a ? "undefined" : t(a)) ? r : "") + "]", a, s)
                                }
                                ));
                            else if ("object" === (void 0 === a ? "undefined" : t(a)))
                                for (r in a)
                                    this.buildQueryParams(e + "[" + r + "]", a[r], s);
                            else
                                s(e, a)
                        }
                    }, {
                        key: "getRoute",
                        value: function getRoute(e) {
                            var t = [this.context_.prefix + e, e + "." + this.context_.locale, this.context_.prefix + e + "." + this.context_.locale, e];
                            for (var a in t)
                                if (t[a]in this.routes_)
                                    return this.routes_[t[a]];
                            throw new Error('The route "' + e + '" does not exist.')
                        }
                    }, {
                        key: "generate",
                        value: function generate(t, a) {
                            var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                              , n = this.getRoute(t)
                              , r = a || {}
                              , o = e({}, r)
                              , i = ""
                              , c = !0
                              , l = ""
                              , u = void 0 === this.getPort() || null === this.getPort() ? "" : this.getPort();
                            if (n.tokens.forEach((function(e) {
                                if ("text" === e[0])
                                    return i = Router2.encodePathComponent(e[1]) + i,
                                    void (c = !1);
                                if ("variable" !== e[0])
                                    throw new Error('The token type "' + e[0] + '" is not supported.');
                                var a = n.defaults && e[3]in n.defaults;
                                if (!1 === c || !a || e[3]in r && r[e[3]] != n.defaults[e[3]]) {
                                    var s = void 0;
                                    if (e[3]in r)
                                        s = r[e[3]],
                                        delete o[e[3]];
                                    else {
                                        if (!a) {
                                            if (c)
                                                return;
                                            throw new Error('The route "' + t + '" requires the parameter "' + e[3] + '".')
                                        }
                                        s = n.defaults[e[3]]
                                    }
                                    if (!0 !== s && !1 !== s && "" !== s || !c) {
                                        var l = Router2.encodePathComponent(s);
                                        "null" === l && null === s && (l = ""),
                                        i = e[1] + l + i
                                    }
                                    c = !1
                                } else
                                    a && e[3]in o && delete o[e[3]]
                            }
                            )),
                            "" === i && (i = "/"),
                            n.hosttokens.forEach((function(e) {
                                var t = void 0;
                                "text" !== e[0] ? "variable" === e[0] && (e[3]in r ? (t = r[e[3]],
                                delete o[e[3]]) : n.defaults && e[3]in n.defaults && (t = n.defaults[e[3]]),
                                l = e[1] + t + l) : l = e[1] + l
                            }
                            )),
                            i = this.context_.base_url + i,
                            n.requirements && "_scheme"in n.requirements && this.getScheme() != n.requirements._scheme) {
                                var d = l || this.getHost();
                                i = n.requirements._scheme + "://" + d + (d.indexOf(":" + u) > -1 || "" === u ? "" : ":" + u) + i
                            } else if (void 0 !== n.schemes && void 0 !== n.schemes[0] && this.getScheme() !== n.schemes[0]) {
                                var h = l || this.getHost();
                                i = n.schemes[0] + "://" + h + (h.indexOf(":" + u) > -1 || "" === u ? "" : ":" + u) + i
                            } else
                                l && this.getHost() !== l + (l.indexOf(":" + u) > -1 || "" === u ? "" : ":" + u) ? i = this.getScheme() + "://" + l + (l.indexOf(":" + u) > -1 || "" === u ? "" : ":" + u) + i : !0 === s && (i = this.getScheme() + "://" + this.getHost() + (this.getHost().indexOf(":" + u) > -1 || "" === u ? "" : ":" + u) + i);
                            if (Object.keys(o).length > 0) {
                                var b = void 0
                                  , m = []
                                  , w = function add2(e, t) {
                                    t = null === (t = "function" == typeof t ? t() : t) ? "" : t,
                                    m.push(Router2.encodeQueryComponent(e) + "=" + Router2.encodeQueryComponent(t))
                                };
                                for (b in o)
                                    this.buildQueryParams(b, o[b], w);
                                i = i + "?" + m.join("&")
                            }
                            return i
                        }
                    }], [{
                        key: "getInstance",
                        value: function getInstance() {
                            return n
                        }
                    }, {
                        key: "setData",
                        value: function setData(e) {
                            Router2.getInstance().setRoutingData(e)
                        }
                    }, {
                        key: "customEncodeURIComponent",
                        value: function customEncodeURIComponent(e) {
                            return encodeURIComponent(e).replace(/%2F/g, "/").replace(/%40/g, "@").replace(/%3A/g, ":").replace(/%21/g, "!").replace(/%3B/g, ";").replace(/%2C/g, ",").replace(/%2A/g, "*").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27")
                        }
                    }, {
                        key: "encodePathComponent",
                        value: function encodePathComponent(e) {
                            return Router2.customEncodeURIComponent(e).replace(/%3D/g, "=").replace(/%2B/g, "+").replace(/%21/g, "!").replace(/%7C/g, "|")
                        }
                    }, {
                        key: "encodeQueryComponent",
                        value: function encodeQueryComponent(e) {
                            return Router2.customEncodeURIComponent(e).replace(/%3F/g, "?")
                        }
                    }]),
                    Router2
                }();
                s.Route,
                s.Context;
                var n = new s;
                return {
                    Router: s,
                    Routing: n
                }
            }(),
            s = [],
            a = r.Routing,
            void 0 === (n = "function" == typeof a ? a.apply(t, s) : a) || (e.exports = n)
        },
        2085: function(e, t, a) {
            "use strict";
            a.d(t, {
                y: function() {
                    return toggleBodyClass
                }
            });
            var s = a(3775);
            function toggleBodyClass(e, t) {
                !function toggleClass(e, t, a) {
                    const n = e.classList
                      , r = n.contains(t)
                      , o = (0,
                    s.jn)(a) ? a : !r;
                    o !== r && (o ? n.add(t) : n.remove(t))
                }(document.body, e, t)
            }
        },
        7686: function(e, t, a) {
            "use strict";
            var s;
            a.d(t, {
                I: function() {
                    return s
                }
            }),
            (e=>{
                let t;
                var a;
                (a = t = e.BodyClass || (e.BodyClass = {})).Ad = "with-und",
                a.Analysis = "with-analysis",
                a.AnalysisCollapsed = "with-analysis-collapsed",
                a.Comments = "with-comments",
                a.DoubleBoard = "double-board",
                a.Evaluation = "with-evaluation",
                a.Pseudo3d = "pseudo-3d",
                a.FocusMode = "focus-mode",
                a.HandPieces = "with-pieces",
                a.HideBoardIcons = "hide-board-icons",
                a.MobileBoardHidden = "mobile-board-hidden",
                a.OutsideCoords = "outside-coords",
                a.Players = "with-players",
                a.Real3d = "real-3d",
                a.Tabs = "with-tabs",
                a.TheatreMode = "theatre-mode",
                a.Videos = "with-videos"
            }
            )(s || (s = {}))
        },
        4694: function(e, t, a) {
            "use strict";
            a.d(t, {
                Y4: function() {
                    return n
                },
                Jv: function() {
                    return r
                },
                S6: function() {
                    return o
                },
                l8: function() {
                    return i
                },
                q_: function() {
                    return c
                },
                U3: function() {
                    return l
                },
                _j: function() {
                    return u
                },
                wl: function() {
                    return d
                }
            });
            var s = a(425);
            const n = {
                amplitudeProps: "data-amplitude-props",
                speedChessChampionshipUrl: "data-speed-chess-championship-url",
                challengeUser: "data-challenge-user",
                loginAndGoRoute: "data-route-login-and-go",
                registerRoute: "data-route-register",
                routes: "data-routes"
            }
              , r = {
                ONBOARD: "Onboard - StartReg",
                SEARCH: "Search"
            }
              , o = 100
              , i = 100
              , c = {
                ALERTS: "alerts",
                CHALLENGES: "challenges",
                CHAT_MESSAGES: "chatMessages",
                GAMES: "games",
                MESSAGES: "messages"
            }
              , l = {
                CLUB_CHAT_MODERATOR_ACTION: "club-chat-moderator-action",
                HIDE_FRIEND_REQUEST: "hide-friend-request",
                MODAL_DID_HIDE: "MODAL_DID_HIDE",
                SEND_NEW_GAME_SEEK: "SEND_NEW_GAME_SEEK",
                SEND_NEW_GAME_SEEK_SUCCESS: "SEND_NEW_GAME_SEEK_SUCCESS",
                SHOW_ONBOARD_MODAL: "SHOW_ONBOARD_MODAL",
                SHOW_UPGRADE_MODAL: "SHOW_UPGRADE_MODAL",
                START_DIRECT_CHAT: "START_DIRECT_CHAT"
            }
              , u = {
                registerRoute: e=>s.Z.generate("web_security_register", {
                    redirectUrl: e
                }),
                loginAndGoRoute: e=>s.Z.generate("web_security_login_and_go", {
                    redirectUrl: e
                })
            }
              , d = {
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
        8246: function(e, t, a) {
            "use strict";
            a.d(t, {
                CN: function() {
                    return commentIcon
                },
                xg: function() {
                    return generateMyTurnsLink
                },
                tq: function() {
                    return i
                },
                pv: function() {
                    return joinUrl
                },
                x4: function() {
                    return loginUrl
                }
            });
            var s = a(4694)
              , n = a(992);
            const r = "ontouchstart"in window || window.navigator.maxTouchPoints > 0 || /firefox/i.test(window.navigator.userAgent) && "TouchEvent"in window;
            a(2793),
            a(9801),
            Object.defineProperty,
            Object.defineProperties,
            Object.getOwnPropertyDescriptors,
            Object.getOwnPropertySymbols,
            Object.prototype.hasOwnProperty,
            Object.prototype.propertyIsEnumerable;
            let o = document.querySelector(s.wl.MAIN_NAV);
            const generateMyTurnsLink = e=>(0,
            n.lw)(e)
              , getMainNav = ()=>(null == o && (o = document.querySelector(s.wl.MAIN_NAV)),
            o)
              , commentIcon = e=>({
                article: "page",
                blog: "paper-pencil",
                chess_video: "play",
                chess_term: "chat",
                club: "users",
                forum_topic: "chat",
                game: "chess-move",
                lesson_course: "chat",
                master_player: "chat",
                news: "news",
                opening: "book-alt",
                survey: "question",
                tactics: "chess-board-puzzle",
                tournament: "order",
                team_match: "crossed-swords",
                votechess: "checkbox"
            }[e])
              , i = r
              , joinUrl = e=>{
                const t = e || window.location.href
                  , a = getMainNav();
                return a ? `${a.getAttribute(s.Y4.registerRoute)}?redirectUrl=${encodeURI(t)}` : s._j.registerRoute(e)
            }
              , loginUrl = e=>{
                const t = e || window.location.href
                  , a = getMainNav();
                return a ? `${a.getAttribute(s.Y4.loginAndGoRoute)}?redirectUrl=${encodeURI(t)}` : s._j.loginAndGoRoute(e)
            }
        },
        992: function(e, t, a) {
            "use strict";
            a.d(t, {
                lw: function() {
                    return dailyPlay
                },
                _j: function() {
                    return o
                }
            });
            var s = a(8261)
              , n = a(425);
            const dailyPlay = e=>n.Z.generate("web_game_daily", {
                id: e
            })
              , r = window.context && window.context.locale ? window.context.locale : s.Z.I18N_DEFAULT_LOCALE
              , o = {
                home: n.Z.generate("web_user_home"),
                live: n.Z.generate("web_live"),
                loginAndGoRoute: e=>n.Z.generate("web_security_login_and_go", {
                    redirectUrl: e
                }),
                logout: n.Z.generate("web_security_logout"),
                membership: n.Z.generate("web_membership", {
                    c: "navbar"
                }),
                messages: n.Z.generate("web_message_index"),
                playUrl: e=>`chess.com${n.Z.generate("web_member_play", {
                    opponent: e
                })}`,
                stats: n.Z.generate("web_stats"),
                themes: n.Z.generate("web_user_settings_themes"),
                registerRoute: e=>n.Z.generate("web_security_register", {
                    redirectUrl: e
                }),
                settings: n.Z.generate("web_user_settings_edit"),
                support: "https://support.chess.com/",
                topPlayerObserve: e=>`${n.Z.generate("web_play")}?action=follow&member=${e}`,
                tv: ["en_US", "en"].includes(r) ? n.Z.generate("web_tv") : n.Z.generate("i18n_web_tv", {
                    _locale: r.substr(0, 2)
                })
            }
        },
        169: function(e, t, a) {
            "use strict";
            a.d(t, {
                GO: function() {
                    return s
                }
            });
            const s = {
                PUZZLE_BATTLE_CHALLENGE_TOASTER: "puzzle-battle-challenge-toaster",
                PUZZLE_BATTLE_CHALLENGE_USER: "puzzle-battle-challenge-user",
                HOME_NOTIFICATIONS: "home-sb-notifications",
                LOGIN_REGISTER_MODAL: "login-register-modal",
                OFFLINE_CHALLENGE_TOASTER: "offline-challenge-toaster",
                NAV_ROOT: "sb",
                NOTIFICATION_TOASTERS: "notification-toasters",
                SHAREABLE_GAME_URL_MODAL: "shareable-game-url-modal",
                SHAREABLE_GAME_SHORT_UUID: "shareable-game-short-uuid"
            }
        },
        7427: function(e, t, a) {
            "use strict";
            a.d(t, {
                z: function() {
                    return s
                }
            });
            const s = {
                CONNECT: "connect",
                DISCONNECT: "disconnect",
                FAILURE: "failure",
                MESSAGE: "message",
                RECONNECT: "reconnect",
                SUBSCRIBE: "subscribe",
                SUBSCRIBE_FAIL: "subscribe_fail",
                UNSUBSCRIBE: "unsubscribe",
                ERROR: "error"
            }
        },
        2002: function(e, t, a) {
            "use strict";
            a.d(t, {
                fz: function() {
                    return n
                },
                AM: function() {
                    return s
                },
                pS: function() {
                    return r
                }
            });
            a(7427);
            var s = (e=>(e.Base = "base",
            e.Chat = "chat",
            e.Classroom = "classroom",
            e.Matcher = "matcher",
            e.Play = "play",
            e.Presence = "presence",
            e.Ratings = "ratings",
            e.Insights = "insights",
            e.TopPlayers = "topplayers",
            e.Users = "users",
            e.Invitations = "invitations",
            e.Settings = "settings",
            e))(s || {})
              , n = (e=>(e.Users = "users",
            e))(n || {});
            const r = window.PubSub
        },
        9164: function(e, t, a) {
            "use strict";
            a.d(t, {
                M: function() {
                    return getPubSub
                }
            });
            const getPubSub = async()=>window.PubSub && window.PubSub.client ? Promise.resolve(window.PubSub) : (await new Promise((e=>{
                setTimeout(e, 500)
            }
            )),
            getPubSub())
        },
        517: function(e, t, a) {
            "use strict";
            a.d(t, {
                f: function() {
                    return s
                }
            });
            const s = {
                animationType: "web_user_game_settings_email_callback_animation_type",
                boardStyle: "web_user_game_settings_email_callback_board_color",
                coordinates: "web_user_game_settings_email_callback_coordinates",
                darkMode: "web_user_game_settings_callback_dark_mode_toggle",
                highlightLegalMoves: "web_user_game_settings_email_callback_show_legal_moves_toggle",
                highlightMoves: "web_user_game_settings_email_callback_highlight_last_move_toggle",
                isWhiteOnBottom: "web_user_game_settings_email_callback_is_white_on_bottom_toggle",
                moveListDisplayType: "web_user_game_settings_email_callback_move_list_display_type",
                moveMethod: "web_user_game_settings_email_callback_move_method",
                pieceStyle: "web_user_game_settings_email_callback_piece",
                playSounds: "web_user_game_settings_email_callback_sound_toggle",
                showTimestamps: "web_user_game_settings_email_callback_show_timestamps",
                soundTheme: "web_user_game_settings_email_callback_sound_theme"
            }
        },
        8480: function(e, t, a) {
            "use strict";
            a.d(t, {
                R: function() {
                    return fetchBoardOptions
                }
            });
            var s = a(2002);
            var n = a(2180)
              , r = a(4620);
            const o = ["off", "inside", "outside"];
            function toCoordinatesValue(e) {
                const t = Number.parseInt(e, 10);
                return Number.isInteger(t) ? o[t] : e
            }
            var i = a(9660)
              , c = a(7074)
              , l = a(425);
            const u = {}
              , d = {};
            async function fetchBoardOptions() {
                const e = (0,
                i.KZ)();
                if (window.chesscom.features.includes("settings_service_read")) {
                    const t = await async function fetchSettings(e) {
                        const {data: t} = await s.pS.fetch({
                            method: "get",
                            path: "users/me",
                            service: s.AM.Settings,
                            params: {
                                include: e.join(",")
                            }
                        });
                        return t
                    }(["board.animation_type", "board.board_style", "board.coordinates", "board.show_legal_moves", "board.highlight_moves", "board.white_always_on_bottom", "board.move_list_style", "board.move_method", "board.pieces_style", "board.play_sounds", "board.sound_theme", "gameplay.show_timestamps"]);
                    return {
                        animationType: (0,
                        n.E)(t["board.animation_type"]),
                        boardSize: "auto",
                        boardStyle: t["board.board_style"],
                        coordinates: t["board.coordinates"],
                        darkMode: e,
                        highlightLegalMoves: t["board.show_legal_moves"],
                        highlightMoves: t["board.highlight_moves"],
                        isWhiteOnBottom: t["board.white_always_on_bottom"],
                        moveListDisplayType: t["board.move_list_style"],
                        moveMethod: (0,
                        r.z)(t["board.move_method"]),
                        pieceStyle: "modern" === t["board.pieces_style"] ? "modern2" : t["board.pieces_style"],
                        playSounds: t["board.play_sounds"],
                        soundTheme: t["board.sound_theme"],
                        showTimestamps: t["gameplay.show_timestamps"]
                    }
                }
                const {data: t} = await async function fetch(e) {
                    var t;
                    const a = c.Z.get(l.Z.generate(e))
                      , s = await a;
                    return u[e] = s,
                    null == (t = d[e]) || t.forEach((t=>t(u[e]))),
                    s
                }("web_user_callback_get_board_settings")
                  , {animationType: a, boardCoords: o, boardSize: h, colorScheme: b, highlightLegalMoves: m, highlightMoves: w, isWhiteOnBottom: p, moveListDisplayType: _, moveMethod: g, pieceStyle: f, playSounds: k, soundTheme: v, showTimestamps: y} = t;
                return {
                    animationType: (0,
                    n.E)(a),
                    boardSize: h,
                    boardStyle: b,
                    coordinates: toCoordinatesValue(o),
                    darkMode: e,
                    highlightLegalMoves: "1" === m,
                    highlightMoves: "1" === w,
                    isWhiteOnBottom: p,
                    moveListDisplayType: _,
                    moveMethod: g,
                    pieceStyle: f,
                    playSounds: "1" === k,
                    soundTheme: v,
                    showTimestamps: Boolean(y)
                }
            }
        },
        3510: function(e, t, a) {
            "use strict";
            a.d(t, {
                z: function() {
                    return saveSettings
                }
            });
            var s = a(2002);
            async function saveSettings(e) {
                window.chesscom.features.includes("settings_service_data_sync") && Object.keys(e).length > 0 && await s.pS.publish({
                    method: "post",
                    service: s.AM.Settings,
                    path: "users/me",
                    data: e
                })
            }
        },
        528: function(e, t, a) {
            "use strict";
            a.d(t, {
                Q: function() {
                    return parse
                },
                P: function() {
                    return stringify
                }
            });
            const parse = (e,...t)=>JSON.parse(e, ...t)
              , stringify = (e,...t)=>JSON.stringify(e, ...t)
        },
        6159: function(e, t, a) {
            "use strict";
            a.d(t, {
                M: function() {
                    return formatBoardSetting
                }
            });
            const formatBoardSetting = (e,t)=>[e, transformValue(e, t)]
              , transformValue = (e,t)=>"coordinates" === e ? transformCoordinatesValue(t) : t
              , transformCoordinatesValue = e=>["off", "inside", "outside"].includes(e) ? ["off", "inside", "outside"].indexOf(e) : e
        },
        1721: function(e, t, a) {
            "use strict";
            a.d(t, {
                R: function() {
                    return formatBoardOptionsForSettingsService
                }
            });
            var s = a(2180)
              , n = a(4620);
            const formatBoardOptionsForSettingsService = e=>Object.entries(e).reduce(((e,[t,a])=>{
                const [s,n] = formatSetting(t, a);
                return e[s] = n,
                e
            }
            ), {})
              , formatSetting = (e,t)=>{
                const a = transformKey(e);
                return [a, transformValue(a, t)]
            }
              , transformKey = e=>{
                switch (e) {
                case "animationType":
                    return "board.animation_type";
                case "boardStyle":
                    return "board.board_style";
                case "coordinates":
                    return "board.coordinates";
                case "highlightLegalMoves":
                    return "board.show_legal_moves";
                case "highlightMoves":
                    return "board.highlight_moves";
                case "isWhiteOnBottom":
                    return "board.white_always_on_bottom";
                case "moveListDisplayType":
                    return "board.move_list_style";
                case "moveMethod":
                    return "board.move_method";
                case "pieceStyle":
                    return "board.pieces_style";
                case "playSounds":
                    return "board.play_sounds";
                case "soundTheme":
                    return "board.sound_theme";
                case "showTimestamps":
                    return "gameplay.show_timestamps";
                default:
                    return e
                }
            }
              , transformValue = (e,t)=>{
                switch (e) {
                case "board.pieces_style":
                    return "modern2" === t ? "modern" : t;
                case "board.animation_type":
                    return (0,
                    s.C)(t);
                case "board.move_method":
                    return (0,
                    n.N)(t);
                case "board.coordinates":
                    return ["off", "inside", "outside"].includes(t) ? t : ["off", "inside", "outside"][t];
                default:
                    return t
                }
            }
        },
        2180: function(e, t, a) {
            "use strict";
            function fromAnimationType(e) {
                return e && "default" !== e ? e : "medium"
            }
            function toAnimationType(e) {
                return e && "medium" !== e && "battle" !== e ? e : "default"
            }
            a.d(t, {
                C: function() {
                    return fromAnimationType
                },
                E: function() {
                    return toAnimationType
                }
            })
        },
        4620: function(e, t, a) {
            "use strict";
            function toBoardMoveMethods(e) {
                switch (e) {
                case "drag_only":
                    return "drag-only";
                case "click":
                    return "click";
                default:
                    return "drag"
                }
            }
            function fromBoardMoveMethods(e) {
                switch (e) {
                case "click":
                    return "click";
                case "drag-only":
                    return "drag_only";
                default:
                    return "drag"
                }
            }
            a.d(t, {
                z: function() {
                    return toBoardMoveMethods
                },
                N: function() {
                    return fromBoardMoveMethods
                }
            })
        },
        1128: function(e, t, a) {
            "use strict";
            a.d(t, {
                U: function() {
                    return getAmplitude
                }
            });
            var s = a(5750);
            Object.create,
            Object.defineProperty,
            Object.getOwnPropertyDescriptor,
            Object.getOwnPropertyNames,
            Object.getPrototypeOf,
            Object.prototype.hasOwnProperty;
            let n;
            function getAmplitude() {
                var e;
                return (null == (e = window.chesscom) ? void 0 : e.amplitude) ? window.chesscom.amplitude : (n || (n = a.e(790).then(a.t.bind(a, 3790, 23)).then((({default: e})=>{
                    var t, a, n, r;
                    const {user: o, amplitudeKey: i} = window.context || {}
                      , c = o && !o.isGuest ? o.id : null
                      , l = {
                        includeUtm: !0,
                        includeReferrer: !0,
                        includeGclid: !0,
                        saveParamsReferrerOncePerSession: !1
                    };
                    if (null == (a = null == (t = window.chesscom) ? void 0 : t.features) ? void 0 : a.includes("amplitude_domain_proxy")) {
                        ["www.chess.com", "www.chess-4.com"].includes(window.location.hostname) && (l.apiEndpoint = window.location.hostname.replace("www", "amplitude"))
                    }
                    if (e.getInstance().init(i, null, l),
                    e.getInstance().setUserId(c),
                    null == (r = null == (n = window.chesscom) ? void 0 : n.features) ? void 0 : r.includes("marketing_middleware_serverside_device_id_generation")) {
                        const t = (0,
                        s.ej)("me");
                        if (t) {
                            const a = JSON.parse(t);
                            e.getInstance().setDeviceId(a.deviceId)
                        }
                    }
                    return window.chesscom.amplitude = e,
                    e
                }
                ))),
                n)
            }
        },
        4647: function(e, t, a) {
            "use strict";
            a.d(t, {
                K: function() {
                    return logEvent
                }
            });
            var s = a(1128)
              , n = a(1395)
              , r = a(4329);
            var o = function baseForOwn(e, t) {
                return e && (0,
                n.Z)(e, t, r.Z)
            }
              , i = a(9203);
            var c = function castFunction(e) {
                return "function" == typeof e ? e : i.Z
            };
            var l = function forOwn(e, t) {
                return e && o(e, c(t))
            };
            async function logEvent(e, t, a, n) {
                const r = await (0,
                s.U)();
                await async function logUserProperties(e) {
                    const t = await (0,
                    s.U)();
                    null != e && t.getInstance().setUserProperties(e)
                }(a),
                await async function incrementUserProperties(e) {
                    const t = await (0,
                    s.U)();
                    if (null == e)
                        return;
                    const a = new t.Identify;
                    l(e, ((e,t)=>{
                        a.add(t, e)
                    }
                    )),
                    t.getInstance().identify(a)
                }(n),
                r.getInstance().logEvent(e, t || {})
            }
        },
        7101: function(e, t, a) {
            "use strict";
            a.d(t, {
                b: function() {
                    return logSocialShare
                }
            });
            var s = a(4647);
            async function logSocialShare() {
                await (0,
                s.K)("Social - SocialShare", null, null, {
                    numSocialShares: 1
                })
            }
        },
        7463: function(e, t, a) {
            "use strict";
            var s = a(1128)
              , n = a(4647);
            t.Z = {
                init: s.U,
                logEvent: n.K
            }
        },
        6910: function(e, t, a) {
            "use strict";
            a.d(t, {
                n: function() {
                    return generateUrl
                }
            });
            var s = {
                "bundles/web/images/game-preview-loading.png": "bundles/web/images/game-preview-loading.8677fb94.png",
                "bundles/web/images/image-default.svg": "bundles/web/images/image-default.445cb543.svg",
                "bundles/web/images/noavatar_l.gif": "bundles/web/images/noavatar_l.84a92436.gif",
                "bundles/web/images/svg/tic.svg": "bundles/web/images/svg/tic.b039b4f5.svg",
                "bundles/web/images/svg/white-tic.svg": "bundles/web/images/svg/white-tic.18d3027b.svg",
                "bundles/web/images/webgl_data/2d/arcade/active-field-black-glow.png": "bundles/web/images/webgl_data/2d/arcade/active-field-black-glow.7c9242cd.png",
                "bundles/web/images/user-image.svg": "bundles/web/images/user-image.007dad08.svg",
                "bundles/web/images/webgl_data/2d/arcade/active-field-white-glow.png": "bundles/web/images/webgl_data/2d/arcade/active-field-white-glow.e5108d71.png",
                "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.f0a77302.json",
                "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.3c3eb885.json",
                "bundles/web/images/web/learn-to-play.png": "bundles/web/images/web/learn-to-play.0c67b86d.png",
                "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.0be1a673.png",
                "bundles/web/images/web/tablet.jpg": "bundles/web/images/web/tablet.b306eb58.jpg",
                "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.json": "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.29ffee8a.json",
                "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.png": "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.cc061aa2.png",
                "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.c1afe5c5.png",
                "bundles/web/images/webgl_data/2d/arcade/check-lightning.json": "bundles/web/images/webgl_data/2d/arcade/check-lightning.9818146c.json",
                "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.090095b9.json",
                "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.8e89a03e.json",
                "bundles/web/images/webgl_data/2d/arcade/check-lightning.png": "bundles/web/images/webgl_data/2d/arcade/check-lightning.f218018f.png",
                "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-black.png": "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-black.6af38a2b.png",
                "bundles/web/images/webgl_data/2d/arcade/lightning-horizontal.png": "bundles/web/images/webgl_data/2d/arcade/lightning-horizontal.36ca9442.png",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.d04ec1d5.json",
                "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-white.png": "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-white.e89a9a43.png",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.16dcf372.json",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.2f52761e.json",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.4ca4b640.png",
                "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.bc7ee14a.png",
                "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.18832d80.png",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.a668575c.png",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.8d776f5a.json",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.e1f5d8cf.json",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.7092cc85.png",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.176b669e.png",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.e4b8d4a8.json",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.46ff1e1e.json",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.2106320a.png",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.1f5242b2.png",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.d2c18ae4.json",
                "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.3407e009.json",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.2ffd0edb.png",
                "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.3ee6b29c.png",
                "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.6c02602b.json",
                "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.52c977e3.png",
                "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.7f512106.png",
                "bundles/web/images/webgl_data/2d/capture-dust.json": "bundles/web/images/webgl_data/2d/capture-dust.221e5b9d.json",
                "bundles/web/images/webgl_data/2d/capture-dust.png": "bundles/web/images/webgl_data/2d/capture-dust.f3616e72.png",
                "bundles/web/images/webgl_data/2d/dust-big.png": "bundles/web/images/webgl_data/2d/dust-big.ffc81b67.png",
                "bundles/web/images/webgl_data/2d/dust-regular.json": "bundles/web/images/webgl_data/2d/dust-regular.c277df9e.json",
                "bundles/web/images/webgl_data/2d/dust-small.json": "bundles/web/images/webgl_data/2d/dust-small.e988c379.json",
                "bundles/web/images/webgl_data/2d/dust-regular.png": "bundles/web/images/webgl_data/2d/dust-regular.d14f1094.png",
                "bundles/web/images/webgl_data/2d/dust-small.png": "bundles/web/images/webgl_data/2d/dust-small.88f7d20e.png",
                "bundles/web/images/webgl_data/2d/hand.json": "bundles/web/images/webgl_data/2d/hand.a9ba7da1.json",
                "bundles/web/images/webgl_data/2d/hand.png": "bundles/web/images/webgl_data/2d/hand.f56ab65c.png",
                "bundles/web/images/webgl_data/2d/field-shadow.png": "bundles/web/images/webgl_data/2d/field-shadow.12436cf1.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_8_bit.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_8_bit.a40a4bb3.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_8_bit_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_8_bit_notation.a3bf6bb5.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_bases_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_bases_notation.4fa42cab.png",
                "bundles/web/images/webgl_data/2d/dust-big.json": "bundles/web/images/webgl_data/2d/dust-big.3978c9b2.json",
                "bundles/web/images/webgl_data/3d/board/textures/board_blue_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_blue_notation.76a72805.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite_notation.e3bdbf81.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_blue.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_blue.11b21efb.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_brown_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_brown_notation.24d88929.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite.7f3f4fa7.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_brown.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_brown.c93ac4fc.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum_notation.b8a64cec.png",
                "bundles/web/images/webgl_data/3d/board/board.json": "bundles/web/images/webgl_data/3d/board/board.f425db44.json",
                "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood_notation.071f30bd.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood_notation.7b7a3981.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_dash.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_dash.91592ef2.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood.f270813d.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum.c76cf59d.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_glass_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_glass_notation.5d17abfd.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_dash_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_dash_notation.3913780e.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_green.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_green.b245f458.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_graffiti_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_graffiti_notation.237e1f51.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood.4448353a.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_grey.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_grey.e2b96c1c.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_glass.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_glass.dd597983.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_grey_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_grey_notation.14778c8c.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea_notation.8a2dbe83.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_light.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_light.be5733d7.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_light_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_light_notation.ca37c558.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_bases.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_bases.79a27acd.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_lolz_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_lolz_notation.eefaa48a.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea.638d6526.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_marble_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marble_notation.9aa8f92f.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_marble.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marble.b09462c0.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue_notation.d626537b.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_lolz.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_lolz.015a977a.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown_notation.131bd8fc.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue.9556bc69.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen_notation.1f01d417.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown.9ae0f295.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen.3c7ff3a7.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_metal.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_metal.12c374ae.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_neon_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_neon_notation.88a17bf8.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_newspaper_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_newspaper_notation.7a8b8d59.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_metal_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_metal_notation.36055507.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_orange.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_orange.b3c6741b.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_orange_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_orange_notation.50c2f2ba.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_neon.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_neon.5f0236a0.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_green_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_green_notation.e1239e77.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_overlay.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_overlay.38852d01.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_parchment_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_parchment_notation.3cabbba4.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_overlay_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_overlay_notation.6ec789e4.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_pink.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_pink.d1fb1b2d.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_purple.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_purple.80a4705d.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_purple_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_purple_notation.f0ff6785.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_pink_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_pink_notation.6fd670e8.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_newspaper.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_newspaper.c308d776.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_red.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_red.8e069f1e.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_red_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_red_notation.74784555.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_sand_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_sand_notation.1c09ddd0.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_shadow.png": "bundles/web/images/webgl_data/3d/board/textures/board_shadow.e9919a3b.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_sky_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_sky_notation.5b781a27.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_sky.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_sky.274da40b.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_parchment.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_parchment.5ff4ab17.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_sand.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_sand.b83b5a0e.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_tournament.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_tournament.d7746600.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_stone_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_stone_notation.c31e84f2.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_tournament_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_tournament_notation.9fd35fd1.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_translucent_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_translucent_notation.3ce8dc03.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_translucent.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_translucent.400f363b.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_tan_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_tan_notation.6fe5a0a0.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_stone.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_stone.411cdedf.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_walnut_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_walnut_notation.cfb242b2.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_winboard.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_winboard.b060d48e.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_winboard_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_winboard_notation.9fe65525.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_tan.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_tan.82741031.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_wood_notation.1bb169b8.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_wooddark_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_wooddark_notation.7b7a3981.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_wooddark.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_wooddark.4448353a.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_woodlight_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodlight_notation.d7654fd8.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_wood.0df0259b.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_walnut.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_walnut.58ccd234.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_woodmid_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodmid_notation.3828ff12.png",
                "bundles/web/images/webgl_data/3d/board/textures/board_woodolive_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodolive_notation.be36a764.png",
                "bundles/web/images/webgl_data/3d/marking_arrow_L.json": "bundles/web/images/webgl_data/3d/marking_arrow_L.be09e498.json",
                "bundles/web/images/webgl_data/3d/board/textures/board_woodlight.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodlight.63227ad0.jpg",
                "bundles/web/images/webgl_data/3d/marking_arrow_straight.json": "bundles/web/images/webgl_data/3d/marking_arrow_straight.a6b956b9.json",
                "bundles/web/images/webgl_data/3d/board/textures/board_woodmid.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodmid.54a8a227.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_woodolive.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodolive.97141fbf.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_black.7b326cb2.jpg",
                "bundles/web/images/webgl_data/3d/board/textures/board_graffiti.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_graffiti.1418935c.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_black.e9190478.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_white.1c85b3f2.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/pawn.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/pawn.32238b68.json",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop.7395ab28.json",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_white.465f396a.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_black.a4d6db0c.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight.b9912c7a.json",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_black.e6e65399.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_white.e71bfaa9.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_white.a0a10f07.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/bishop_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/bishop_shadow.7aca2e88.png",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/king.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/king.fc9672f5.json",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negy.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negy.163c07c7.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posy.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posy.b97290e6.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook.76894e32.json",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negx.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negx.81709478.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negz.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negz.f7e26d93.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/king_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/king_shadow.d2e689b3.png",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/knight_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/knight_shadow.da573039.png",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posz.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posz.dcbe8ca2.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/pawn_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/pawn_shadow.24e9cbc0.png",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_black.59af0793.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posx.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posx.b034e0f3.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_black.7a8a7a16.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen.8793f6ab.json",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_black.7c7aa93c.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_black.b047e850.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_white.677392ee.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_white.47bc0cd0.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/queen_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/queen_shadow.32aec9b8.png",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/rook_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/rook_shadow.6f48c570.png",
                "bundles/web/images/webgl_data/README.md": "bundles/web/images/webgl_data/README.ce99e081.md",
                "bundles/web/images/webgl_data/three-d/board/board.glb": "bundles/web/images/webgl_data/three-d/board/board.4d718342.glb",
                "bundles/web/images/webgl_data/three-d/board/board.json": "bundles/web/images/webgl_data/three-d/board/board.f425db44.json",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_white.a0bb951f.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_8_bit_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_8_bit_notation.3b0e5987.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_8_bit.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_8_bit.90f44ee3.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_bases_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_bases_notation.583cf009.png",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_white.2d6201c7.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_blue.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_blue.3d8bf522.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_blackwhite_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_blackwhite_notation.a16af582.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_brown_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_brown_notation.d91c4dfa.png",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_black.c7c69176.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_brown.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_brown.77111896.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_bubblegum_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_bubblegum_notation.c0566f9d.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_bubblegum.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_bubblegum.2abf245c.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_blackwhite.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_blackwhite.223497db.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_burled_wood_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_burled_wood_notation.ab7033dc.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_blue_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_blue_notation.aede7d52.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_bases.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_bases.aa2e4c86.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_dark_wood_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_dark_wood_notation.29e0c91f.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_dash_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_dash_notation.c61d909b.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_glass.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_glass.ab30ff7c.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_glass_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_glass_notation.1f0ac1c3.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_dash.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_dash.0c3e4676.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_green.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_green.e84cead6.jpg",
                "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_white.8c735a4d.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_green_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_green_notation.47e1aaef.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_grey_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_grey_notation.4a29af67.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_grey.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_grey.637ff9bf.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_burled_wood.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_burled_wood.39c56017.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_icy_sea_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_icy_sea_notation.a02159fa.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_light.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_light.30b1a562.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_light_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_light_notation.91439e75.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_lolz_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_lolz_notation.827bf308.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_dark_wood.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_dark_wood.e34eac17.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_icy_sea.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_icy_sea.7e97a7c5.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_marble.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_marble.45ef834a.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_marble_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_marble_notation.44705b60.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_graffiti.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_graffiti.5082fb97.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_marblebrown_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_marblebrown_notation.a181658b.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_marbleblue_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_marbleblue_notation.c399953b.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_lolz.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_lolz.7916363f.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_marblegreen_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_marblegreen_notation.7b971c8f.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_marblebrown.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_marblebrown.9b30f4d0.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_metal_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_metal_notation.350f725a.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_metal.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_metal.a60195b2.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_neon_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_neon_notation.9b0f7f4c.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_neon.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_neon.79099362.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_newspaper_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_newspaper_notation.1a91be12.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_marblegreen.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_marblegreen.f291a625.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_orange.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_orange.e48910d8.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_overlay.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_overlay.b76a5834.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_overlay_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_overlay_notation.75b3e753.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_orange_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_orange_notation.dc2fa5a8.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_parchment_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_parchment_notation.ee873515.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_graffiti_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_graffiti_notation.2ad3950b.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_pink.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_pink.765cea32.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_pink_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_pink_notation.973fb303.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_purple_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_purple_notation.507fac47.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_newspaper.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_newspaper.4646c695.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_red.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_red.1a8a520d.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_red_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_red_notation.dcb36f85.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_sand_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_sand_notation.814e444f.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_sky.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_sky.388f5ac1.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_shadow.png": "bundles/web/images/webgl_data/three-d/board/textures/board_shadow.735e7124.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_purple.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_purple.600cc1aa.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_marbleblue.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_marbleblue.21e1edfc.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_stone_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_stone_notation.c31e84f2.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_tan.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_tan.82741031.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_tan_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_tan_notation.6fe5a0a0.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_sand.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_sand.e647afaa.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_tournament_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_tournament_notation.9fd35fd1.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_translucent.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_translucent.400f363b.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_translucent_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_translucent_notation.3ce8dc03.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_tournament.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_tournament.d7746600.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_walnut_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_walnut_notation.cfb242b2.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_winboard.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_winboard.b060d48e.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_winboard_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_winboard_notation.9fe65525.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_parchment.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_parchment.590f22f2.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_stone.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_stone.411cdedf.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_walnut.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_walnut.58ccd234.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_wood_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_wood_notation.1bb169b8.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_wooddark_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_wooddark_notation.7b7a3981.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_woodlight_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_woodlight_notation.d7654fd8.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_wood.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_wood.0df0259b.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_woodmid_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_woodmid_notation.3828ff12.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_woodmid.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_woodmid.54a8a227.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_woodolive_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_woodolive_notation.be36a764.png",
                "bundles/web/images/webgl_data/three-d/marking_arrow_L.json": "bundles/web/images/webgl_data/three-d/marking_arrow_L.be09e498.json",
                "bundles/web/images/webgl_data/three-d/marking_arrow_straight.json": "bundles/web/images/webgl_data/three-d/marking_arrow_straight.a6b956b9.json",
                "bundles/web/images/webgl_data/three-d/board/textures/board_sky_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_sky_notation.ac5ae5f9.png",
                "bundles/web/images/webgl_data/three-d/board/textures/board_woodlight.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_woodlight.63227ad0.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop_promotion_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop_promotion_black.6306a530.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_woodolive.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_woodolive.97141fbf.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/king.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/king.ba7be557.glb",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop_promotion_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop_promotion_white.0bf5df26.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop.7395ab28.json",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop.daa7525a.glb",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight.cc479485.glb",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight_promotion_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight_promotion_black.261592a2.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/pawn.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/pawn.bf3f69fe.glb",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/king.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/king.fc9672f5.json",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight_promotion_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight_promotion_white.b59acd14.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight.b9912c7a.json",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen.917dc323.glb",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen_promotion_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen_promotion_black.6a0bd0f7.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen_promotion_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen_promotion_white.6188702b.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook_promotion_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook_promotion_black.98a85326.jpg",
                "bundles/web/images/webgl_data/three-d/board/textures/board_wooddark.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_wooddark.4448353a.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook.dee6e7fe.glb",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook_promotion_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook_promotion_white.021ec599.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/bishop_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/bishop_shadow.81034108.png",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/pawn.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/pawn.32238b68.json",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negy.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negy.1c661a52.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posx.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posx.14520376.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negz.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negz.a00cb4ee.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook.76894e32.json",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posy.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posy.3e0a3920.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/king_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/king_shadow.457e2513.png",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posz.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posz.b6b76cab.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen.8793f6ab.json",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/knight_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/knight_shadow.c316f979.png",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/pawn_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/pawn_shadow.f670cc1c.png",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_black.a6baa788.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_metal_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_metal_white.912daa6a.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_plastic_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_plastic_black.0745ac58.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_plastic_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_plastic_white.187e6d33.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_metal_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_metal_black.512d416b.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_white.9720cdd6.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_marble_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_marble_black.dd379acf.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_marble_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_marble_white.0913fcd8.jpg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/queen_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/queen_shadow.85654319.png",
                "bundles/web/images/webgl_data/two-d/arcade/capture-hint-hide.svg": "bundles/web/images/webgl_data/two-d/arcade/capture-hint-hide.cb0a5257.svg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/rook_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/rook_shadow.50084b35.png",
                "bundles/web/images/webgl_data/two-d/arcade/capture-hint-out.svg": "bundles/web/images/webgl_data/two-d/arcade/capture-hint-out.aa61e3ed.svg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_wood_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_wood_white.b1665db1.jpg",
                "bundles/web/images/webgl_data/two-d/arcade/capture-hint-over.svg": "bundles/web/images/webgl_data/two-d/arcade/capture-hint-over.7a59bf2e.svg",
                "bundles/web/images/webgl_data/two-d/arcade/move-hint-hide.svg": "bundles/web/images/webgl_data/two-d/arcade/move-hint-hide.cde15d35.svg",
                "bundles/web/images/webgl_data/two-d/arcade/move-hint-out.svg": "bundles/web/images/webgl_data/two-d/arcade/move-hint-out.042ddeda.svg",
                "bundles/web/images/webgl_data/two-d/arcade/capture-hint-show.svg": "bundles/web/images/webgl_data/two-d/arcade/capture-hint-show.d7ea418e.svg",
                "bundles/web/images/webgl_data/two-d/arcade/move-hint-show.svg": "bundles/web/images/webgl_data/two-d/arcade/move-hint-show.ff97950b.svg",
                "bundles/web/images/webgl_data/two-d/arcade/move-hint-over.svg": "bundles/web/images/webgl_data/two-d/arcade/move-hint-over.1b1f1248.svg",
                "bundles/web/images/webgl_data/two-d/arcade/piece-grab.svg": "bundles/web/images/webgl_data/two-d/arcade/piece-grab.1588c507.svg",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_wood_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_wood_black.dc9f25a5.jpg",
                "bundles/web/images/webgl_data/two-d/arcade/piece-trail.svg": "bundles/web/images/webgl_data/two-d/arcade/piece-trail.6811d769.svg",
                "bundles/web/images/webgl_data/two-d/arcade/square-fill.svg": "bundles/web/images/webgl_data/two-d/arcade/square-fill.93f6954f.svg",
                "bundles/web/images/webgl_data/two-d/arcade/piece-release.svg": "bundles/web/images/webgl_data/two-d/arcade/piece-release.06538853.svg",
                "bundles/web/images/webgl_data/two-d/arcade/piece-capture.svg": "bundles/web/images/webgl_data/two-d/arcade/piece-capture.02f0dfd7.svg",
                "bundles/web/images/webgl_data/two-d/hover-square.png": "bundles/web/images/webgl_data/two-d/hover-square.949e81d1.png",
                "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negx.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negx.a3a0c6c9.jpg",
                "bundles/web/images/webgl_data/two-d/arcade/king-check.svg": "bundles/web/images/webgl_data/two-d/arcade/king-check.7f0928d1.svg",
                "bundles/web/images/webgl_data/two-d/natural/piece-trail.png": "bundles/web/images/webgl_data/two-d/natural/piece-trail.bb4aaf99.png",
                "bundles/web/images/webgl_data/two-d/natural/piece-trail-long.png": "bundles/web/images/webgl_data/two-d/natural/piece-trail-long.6ba59bc2.png"
            };
            let n;
            n = window.Config["domain.static"] && !window.Config.cypress ? "https" : "http";
            const generateUrl = (e,t=!0,a=n)=>`${t ? `${a}:${window.Config["domain.static"]}` : ""}/${null != s[e] ? s[e] : e}`
        },
        2793: function(e, t, a) {
            "use strict";
            a.d(t, {
                j7: function() {
                    return getWindowTitle
                },
                bM: function() {
                    return getWindowLocation
                },
                k_: function() {
                    return s
                },
                qD: function() {
                    return n
                },
                e0: function() {
                    return r
                },
                sJ: function() {
                    return bookmarkPage
                },
                up: function() {
                    return o
                },
                kY: function() {
                    return printWindow
                },
                Cz: function() {
                    return sendEmail
                },
                tq: function() {
                    return isMobile
                },
                qs: function() {
                    return getBrowser
                },
                jv: function() {
                    return getWindowsVersion
                },
                eN: function() {
                    return isOldBrowser
                }
            });
            const getWindowTitle = ()=>encodeURIComponent(window.document.title)
              , getWindowLocation = ()=>encodeURIComponent(window.location.href)
              , s = window.location.pathname
              , n = getWindowTitle()
              , r = getWindowLocation()
              , bookmarkPage = ()=>{
                if (window.sidebar && window.sidebar.addPanel)
                    window.sidebar.addPanel(n, r, "");
                else if (window.external && "AddFavorite"in window.external)
                    window.external.AddFavorite(r, n);
                else {
                    const e = -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac") ? "Cmd" : "Ctrl";
                    alert(`Press ${e}+D to bookmark this page.`)
                }
            }
              , o = {
                chrome: "Chrome",
                edge: "edge",
                firefox: "Firefox",
                ie: "IE",
                safari: "Safari"
            }
              , i = {
                chrome: 79,
                edge: 79,
                firefox: 75,
                ie: Number.POSITIVE_INFINITY,
                safari: 13.1
            }
              , printWindow = ()=>{
                window.print()
            }
              , sendEmail = (e,t)=>{
                window.location.href = `mailto:?${e}&${t}`
            }
              , version = (e,t)=>t.appVersion.indexOf(e) > -1
              , isMobile = (e=window.navigator.userAgent)=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
              , getBrowser = (e=window.navigator.userAgent)=>{
                let t, a = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (((e=window.navigator.userAgent)=>null !== e.match(/Edg/))(e)) {
                    const t = e.indexOf("Edg");
                    let a = 4;
                    e.match("Edge/") && (a = 5);
                    const s = t + a;
                    return {
                        name: "Edge",
                        version: parseInt(e.substring(s, e.indexOf(".", s)), 10)
                    }
                }
                return /trident/i.test(a[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [],
                {
                    name: "IE",
                    version: parseInt(t[1] || "-1", 10)
                }) : a[1] === o.chrome && (t = e.match(/\bOPR\/(\d+)/),
                null != t) ? {
                    name: "Opera",
                    version: parseInt(t[1], 10)
                } : (a = a[2] ? [a[1], a[2]] : [window.navigator.appName, window.navigator.appVersion, "-?"],
                a[0] === o.safari && (t = e.match(/version\/(\d+)/i),
                null != t && a.splice(1, 1, t[1])),
                "MSIE" === a[0] ? {
                    name: o.ie,
                    version: parseInt(a[1], 10)
                } : {
                    name: a[0],
                    version: parseInt(a[1], 10)
                })
            }
              , getWindowsVersion = (e=window.navigator)=>version("NT", e) ? version("Windows NT 5.1", e) || version("Windows NT 6.0", e) ? 6 : version("Windows NT 6.1", e) ? 7 : version("Windows NT 6.2", e) || version("Windows NT 6.3", e) ? 8 : 10 : -1
              , isOldBrowser = (e=window.navigator.userAgent)=>{
                const t = getBrowser(e);
                return null != t.name && 0 !== t.name.length && Object.keys(o).some((e=>t.name.toLowerCase() === o[e].toLowerCase() && t.version < i[e]))
            }
        },
        1681: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return s
                }
            });
            class CacheProvider {
                constructor() {
                    this.enabled = function localStorageWorks() {
                        const e = "test";
                        try {
                            return localStorage.setItem(e, e),
                            localStorage.removeItem(e),
                            !0
                        } catch (t) {
                            return !1
                        }
                    }()
                }
                get(e) {
                    return JSON.parse(localStorage.getItem(e))
                }
                set(e, t) {
                    localStorage.setItem(e, JSON.stringify(t))
                }
            }
            var s = new class CacheService {
                constructor(e, t={}) {
                    this.cache = new CacheProvider,
                    this.cacheKey = e,
                    this.memory = t
                }
                get ready() {
                    return !1 !== this.cache.enabled
                }
                get(e, t=null) {
                    return this.memory[e] ? this.memory[e] : this.ready ? (this.pull(),
                    void 0 !== this.memory[e] ? this.memory[e] : t) : t
                }
                pull() {
                    return this.memory = this.cache.get(this.cacheKey) || {},
                    this
                }
                push() {
                    return this.cache.set(this.cacheKey, this.memory),
                    this
                }
                remove(e) {
                    return this.ready ? (this.pull(),
                    void 0 === this.memory[e] ? this : (delete this.memory[e],
                    this.push())) : this
                }
                set(e, t) {
                    return this.ready ? (this.pull(),
                    this.memory[e] = t,
                    this.push()) : this
                }
            }
            ("json_settings")
        },
        5750: function(e, t, a) {
            "use strict";
            a.d(t, {
                d8: function() {
                    return setCookie
                },
                ej: function() {
                    return getCookie
                }
            });
            function setCookie(e, t, a) {
                let s = "";
                if (a) {
                    const e = new Date;
                    e.setTime(e.getTime() + 24 * Math.min(90, a) * 60 * 60 * 1e3);
                    s = `; expires=${e.toUTCString()}`
                }
                document.cookie = `${e}=${t || ""}${s}; path=/; samesite=none; secure`
            }
            function getCookie(e) {
                const t = {};
                return document.cookie.split("; ").forEach((e=>{
                    const [a,s] = e.split("=");
                    a && s && (t[a] = s)
                }
                )),
                t[e] || null
            }
        },
        9660: function(e, t, a) {
            "use strict";
            a.d(t, {
                KZ: function() {
                    return getIsDarkMode
                },
                Yc: function() {
                    return o
                },
                C8: function() {
                    return setDarkMode
                },
                Un: function() {
                    return setDarkModeCookie
                },
                WH: function() {
                    return setEditorDarkMode
                },
                QY: function() {
                    return setEmbeddedTweetDarkMode
                }
            });
            var s = a(9816)
              , n = a(5750);
            const r = "dark-mode"
              , getIsDarkMode = ()=>document.body.classList.contains(r)
              , o = getIsDarkMode()
              , setDarkMode = e=>e ? document.body.classList.add(r) : document.body.classList.remove(r)
              , setDarkModeCookie = e=>e ? (0,
            n.d8)(s._G.USER_COLOR_SCHEME, r, 30) : (0,
            n.d8)(s._G.USER_COLOR_SCHEME, "", 30)
              , setEditorDarkMode = e=>{
                const t = window.tinymce;
                null == t || t.editors.forEach((({id: a})=>{
                    e ? (t.get(a).settings.body_class = r,
                    t.get(a).getBody().classList.add(r)) : (t.get(a).settings.body_class = "",
                    t.get(a).getBody().classList.remove(r))
                }
                ))
            }
              , setEmbeddedTweetDarkMode = e=>{
                const t = document.querySelectorAll("[data-tweet-id]")
                  , a = e ? "theme=light" : "theme=dark"
                  , n = e ? "theme=dark" : "theme=light";
                t.forEach((e=>{
                    const t = e.getAttribute(s.Y4.SRC);
                    e.setAttribute(s.Y4.SRC, t ? t.replace(a, n) : "")
                }
                ))
            }
        },
        4657: function(e, t, a) {
            "use strict";
            function getArrayOfElements(e) {
                return [...document.querySelectorAll(e)]
            }
            a.d(t, {
                U: function() {
                    return getArrayOfElements
                }
            })
        },
        6399: function(e, t, a) {
            "use strict";
            function loadLazyStyle(e) {
                const t = document.querySelector(`link[data-href*="/${e}.client"]`);
                t && (t.setAttribute("href", t.getAttribute("data-href")),
                t.removeAttribute("data-href"))
            }
            a.d(t, {
                E: function() {
                    return loadLazyStyle
                }
            })
        },
        3302: function(e, t, a) {
            "use strict";
            var s = a(9669)
              , n = a.n(s);
            t.Z = n()
        },
        4164: function(e, t, a) {
            "use strict";
            a.d(t, {
                i: function() {
                    return getMessageFromError
                },
                W: function() {
                    return getMessageFromErrorOrDefault
                }
            });
            var s = a(9790)
              , n = a(8160);
            const getMessageFromError = e=>{
                if (e.response && 401 !== e.response.status)
                    return (e.response.data && e.response.data.message ? e.response.data.message : s.R0.badRequest) || e.response.statusText
            }
              , getMessageFromErrorOrDefault = e=>getMessageFromError(e) || n.Z.trans("An error occurred")
        },
        7074: function(e, t, a) {
            "use strict";
            var s = a(3302);
            (0,
            a(580).w)(s.Z),
            t.Z = s.Z
        },
        1692: function(e, t, a) {
            "use strict";
            function isSpecialRequest(e) {
                return function isPlatformRequest(e) {
                    return e.startsWith("/service/") || e.includes(".com/service/")
                }(e) || function isChessbombRequest(e) {
                    return e.includes("chessbomb.com")
                }(e) || function isSubdomainRequest(e) {
                    return /https:\/\/(?!www)([\S]+)chess.com/.test(e)
                }(e)
            }
            a.d(t, {
                q: function() {
                    return isSpecialRequest
                }
            })
        },
        580: function(e, t, a) {
            "use strict";
            a.d(t, {
                w: function() {
                    return registerInterceptors
                }
            });
            var s = a(1992)
              , n = a(3831)
              , r = a(4437);
            function findExistingInterceptor(e, t) {
                var a;
                if (!t.name)
                    throw new Error("interceptor must be a named function");
                return null == (a = e.handlers) ? void 0 : a.find((e=>{
                    var a;
                    return (null == (a = e.fulfilled) ? void 0 : a.name) === t.name
                }
                ))
            }
            function registerInterceptors(e) {
                s.Z.forEach((t=>{
                    findExistingInterceptor(e.interceptors.request, t) || e.interceptors.request.use(t)
                }
                )),
                findExistingInterceptor(e.interceptors.response, r.Z) || e.interceptors.response.use(r.Z, n.Z)
            }
        },
        3831: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return responseErrorInterceptor
                }
            });
            var s = a(3302);
            function responseErrorInterceptor(e) {
                const t = e.config
                  , a = e.response;
                if ("Cancel" === e.toString())
                    return Promise.reject(e);
                try {
                    t.data = JSON.parse(t.data)
                } catch (n) {
                    return Promise.reject(e)
                }
                if (a && 403 === a.status && a.headers["x-chesscom-csrf-token"] && t && !t.data.retry) {
                    const e = a.headers["x-chesscom-csrf-token"];
                    return t.data._token = e,
                    t.data.retry = !0,
                    window.context.csrf.token = e,
                    (0,
                    s.Z)(t)
                }
                return Promise.reject(e)
            }
        },
        4437: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return responseInterceptor
                }
            });
            var s = a(7969);
            function responseInterceptor(e) {
                return e.headers && e.headers["x-chesscom-request-id-cdn"] && ((0,
                s.cM)({
                    key: "x-chesscom-request-id-cdn",
                    value: e.headers["x-chesscom-request-id-cdn"]
                }),
                (0,
                s.cM)({
                    key: "x-chesscom-request-id-lb",
                    value: e.headers["x-chesscom-request-id-lb"]
                })),
                e
            }
        },
        7203: function(e, t, a) {
            "use strict";
            a.d(t, {
                q: function() {
                    return pixelDensity
                },
                b: function() {
                    return retinaImageSrcset
                }
            });
            const pixelDensity = (e,t)=>{
                if (!e)
                    return;
                let a = "@2x";
                return /\.svg$/.test(e) ? e : ([1.5, 3, 4].indexOf(t) > -1 && (a = `@${t}x`),
                e.replace(/(\.\w+)$/, (e=>a + e)))
            }
              , retinaImageSrcset = e=>{
                if (!e)
                    return null;
                const t = e.substring(e.lastIndexOf("/") + 1)
                  , a = e.replace(t, "");
                return `${e}, ${a}${pixelDensity(t)} 2x`
            }
        },
        2220: function(e, t, a) {
            "use strict";
            var s = a(425);
            t.Z = ()=>-1 !== window.location.href.indexOf(s.Z.generate("web_2fa_login"))
        },
        7969: function(e, t, a) {
            "use strict";
            a.d(t, {
                cM: function() {
                    return log
                }
            });
            var s = a(869)
              , n = a(2863);
            const checkWindowObject = ()=>{
                (0,
                n.z)({
                    key: "logData",
                    value: {}
                })
            }
              , log = ({key: e, value: t})=>{
                checkWindowObject(),
                window.chesscom.logData[e] = t,
                (0,
                s.$)({
                    [e]: t
                })
            }
        },
        2365: function(e, t, a) {
            "use strict";
            a.d(t, {
                b: function() {
                    return copyRoute
                }
            });
            var s = a(1264);
            function copyRoute(e) {
                var t, a, n;
                const r = (0,
                s.w)();
                if (!r.routes_[e]) {
                    try {
                        Object.assign(r.context_, {
                            base_url: "",
                            prefix: "",
                            host: "www.chess.com",
                            port: "",
                            scheme: "https",
                            locale: ""
                        })
                    } catch (o) {}
                    if (Object.isFrozen(r.routes_) && (r.routes_ = Object.assign({}, r.routes_)),
                    null == (a = null == (t = window.chesscom) ? void 0 : t.routes) ? void 0 : a[e]) {
                        const t = window.chesscom.routes[e]
                          , a = ".chess-dev.com"
                          , s = window.location.host.replace(/^[^.]+/, "");
                        s && (null == (n = t.hosttokens) || n.forEach((e=>{
                            e.forEach(((t,n)=>{
                                t.includes(a) && (e[n] = t.replace(a, s))
                            }
                            ))
                        }
                        ))),
                        r.routes_[e] = t
                    }
                }
            }
        },
        1264: function(e, t, a) {
            "use strict";
            a.d(t, {
                w: function() {
                    return getRouting
                }
            });
            var s = a(4606)
              , n = a.n(s);
            function getRouting() {
                return n()
            }
        },
        425: function(e, t, a) {
            "use strict";
            var s = a(2365)
              , n = a(1264);
            a(8508);
            t.Z = new class Router {
                generate(e, t, a) {
                    const r = t || {};
                    "string" == typeof r.username && (r.username = r.username.toLowerCase()),
                    (0,
                    s.b)(e);
                    try {
                        return (0,
                        n.w)().generate(e, r, a)
                    } catch (o) {
                        const t = new Error(`Couldn't find missing route '${e}'.`);
                        return console.error(t),
                        "/"
                    }
                }
                i18nable(e) {
                    return `i18n_${e}`in window.chesscom.routes
                }
                i18n(e, t, a) {
                    var s, n;
                    let r = e;
                    const o = t || {};
                    if ((null == (n = null == (s = window.context) ? void 0 : s.route) ? void 0 : n.startsWith("i18n")) && this.i18nable(e)) {
                        o["_locale"] = window.context.locale.slice(0, 2),
                        r = `i18n_${e}`
                    }
                    const i = this.generate(r, o, a);
                    return a ? i : i.replace(/^.*\/\/[^/]+/, "")
                }
            }
        },
        8508: function(e, t, a) {
            "use strict";
            a.d(t, {
                T: function() {
                    return captureException
                }
            });
            var s = a(6883)
              , n = a(4770)
              , r = a(3207);
            async function captureException(e, t) {
                if (!(await (0,
                r.U)()))
                    return;
                (0,
                s.V)();
                const a = await (0,
                n.m)()
                  , o = e instanceof Error ? e : new Error(e);
                t ? a.withScope((e=>{
                    Object.keys(t).forEach((a=>e.setExtra(a, t[a]))),
                    a.captureException(o)
                }
                )) : a.captureException(o)
            }
        },
        6883: function(e, t, a) {
            "use strict";
            a.d(t, {
                V: function() {
                    return enableSentry
                }
            });
            var s = a(4770)
              , n = a(3207);
            async function enableSentry(e=0) {
                var t;
                if (!(await (0,
                n.U)()))
                    return;
                window.chesscom.sudoEnableSentry = !0;
                const a = await (0,
                s.m)();
                for (; null == (t = window.chesscom.queuedSentryReports) ? void 0 : t.length; )
                    a.captureException(window.chesscom.queuedSentryReports.shift());
                if (e > 0) {
                    const t = Date.now() + 24 * e * 60 * 60 * 1e3;
                    window.localStorage.setItem("enableSentryUntil", t.toString())
                }
            }
        },
        4770: function(e, t, a) {
            "use strict";
            a.d(t, {
                m: function() {
                    return getSentryBrowser
                }
            });
            Object.create,
            Object.defineProperty,
            Object.getOwnPropertyDescriptor,
            Object.getOwnPropertyNames,
            Object.getPrototypeOf,
            Object.prototype.hasOwnProperty;
            async function getSentryBrowser() {
                return a.e(48).then(a.bind(a, 6048))
            }
        },
        3207: function(e, t, a) {
            "use strict";
            a.d(t, {
                U: function() {
                    return isSentryAvailable
                }
            });
            var s = a(4770);
            async function isSentryAvailable() {
                try {
                    const e = await (0,
                    s.m)();
                    return Boolean(e.getCurrentHub().getClient())
                } catch (e) {
                    return !1
                }
            }
        },
        869: function(e, t, a) {
            "use strict";
            a.d(t, {
                $: function() {
                    return setSentryContext
                }
            });
            var s = a(4770)
              , n = a(3207);
            async function setSentryContext(e) {
                if (!(await (0,
                n.U)()))
                    return;
                (await (0,
                s.m)()).configureScope((t=>{
                    Object.keys(e).forEach((a=>{
                        t.setExtra(a, e[a])
                    }
                    ))
                }
                ))
            }
        },
        2305: function(e, t, a) {
            "use strict";
            a.d(t, {
                dW: function() {
                    return trans
                },
                jn: function() {
                    return transChoice
                },
                $H: function() {
                    return c
                }
            });
            var s, n, r = a(9402), o = a.n(r);
            const i = "fr_FR" === (null == (n = null == (s = window.context) ? void 0 : s.i18n) ? void 0 : n.locale);
            o().placeHolderPrefix = "",
            o().placeHolderSuffix = "";
            const escapeParameters = e=>{
                const t = {};
                return null != e && Object.keys(e).forEach((a=>{
                    const s = a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                    null != s && s.length > 0 && (t[s] = e[a])
                }
                )),
                t
            }
              , getTranslatedPhrase = (e,t="messages",a)=>window.chesscom_translations && window.chesscom_translations[t] && window.chesscom_translations[t][e] ? window.chesscom_translations[t][e] : window.chesscom_live_translations && window.chesscom_live_translations[t] && window.chesscom_live_translations[t][e] ? window.chesscom_live_translations[t][e] : "live" === t && window.i18n_phrases && window.i18n_phrases[e] ? window.i18n_phrases : "countries" === t && window.Country && window.Country[e] ? window.Country : a ? void 0 : "javascript" !== t ? getTranslatedPhrase(e, "javascript") : e
              , trans = (e,t,a)=>o().trans(getTranslatedPhrase(e, a), escapeParameters(t), a)
              , transChoice = (e,t,a,s)=>{
                if (void 0 === t)
                    return "";
                const n = getTranslatedPhrase(e, s)
                  , r = escapeParameters(a);
                return i ? function frenchTransChoice(e, t, a, s) {
                    const [n,r,i] = e.split("|").map((e=>e.trim()));
                    if (0 === t || 1 === t)
                        return o().trans(n, a, s);
                    if (t % 1e6 == 0)
                        return o().trans(r, a, s);
                    return o().trans(i, a, s)
                }(n, t, r, s) : o().transChoice(n, t, r)
            }
            ;
            const c = {
                trans: trans,
                transChoice: transChoice
            }
        },
        8160: function(e, t, a) {
            "use strict";
            var s = a(2305);
            t.Z = s.$H
        },
        3775: function(e, t, a) {
            "use strict";
            function isNull(e) {
                return null === e
            }
            function isObject(e) {
                return !isNull(e) && "object" == typeof e
            }
            function isFunction(e) {
                return "function" == typeof e
            }
            function isBoolean(e) {
                return "boolean" == typeof e
            }
            a.d(t, {
                Kn: function() {
                    return isObject
                },
                mf: function() {
                    return isFunction
                },
                jn: function() {
                    return isBoolean
                }
            })
        },
        9801: function(e, t, a) {
            "use strict";
            a.d(t, {
                x: function() {
                    return openWindow
                }
            });
            var s = a(7101);
            const openWindow = e=>{
                (0,
                s.b)();
                const t = `left=${window.screen.width / 2 - 280}, top=${window.screen.height / 2 - 340}`;
                window.open(e, "_blank", `width=560, height=510,${t},resizable=no, status=no, menubar=no, scrollbars=no`)
            }
        },
        4672: function(e, t, a) {
            "use strict";
            function postMessage(e) {
                window.postMessage(e, window.location.origin)
            }
            a.d(t, {
                o: function() {
                    return postMessage
                }
            })
        },
        2863: function(e, t, a) {
            "use strict";
            a.d(t, {
                z: function() {
                    return register
                }
            });
            const register = ({key: e, value: t})=>{
                window.chesscom || (window.chesscom = {}),
                window.chesscom[e] || (window.chesscom[e] = t)
            }
        },
        9790: function(e, t, a) {
            "use strict";
            a.d(t, {
                jC: function() {
                    return n
                },
                R0: function() {
                    return r
                },
                xL: function() {
                    return o
                },
                V5: function() {
                    return i
                }
            });
            var s = a(8160);
            const n = 7e3
              , r = {
                badRequest: s.Z.trans("Oops. Looks like there was an error. Sorry! Please refresh.")
            }
              , o = (s.Z.trans("Avatar uploaded"),
            s.Z.trans("Thank you for your comment."),
            s.Z.trans("Comment deleted."),
            s.Z.trans("You cannot send an empty comment"),
            s.Z.trans("Comment updated."),
            s.Z.trans("Comment link is copied to clipboard"),
            s.Z.trans("Copied to clipboard"),
            s.Z.trans("All forum topics have been marked as read"),
            s.Z.trans("Feature Set! It might take a minute or two to appear."),
            s.Z.trans("Please select the players for whom to send the invitation"),
            s.Z.trans("Your invitations were sent successfully"),
            s.Z.trans("PGN copied to buffer"),
            {
                ALERT_FLASH_CONTAINER: "widget-alert-flash",
                DISMISSING: "alert-banner-dismissing"
            })
              , i = {
                error: "error",
                info: "info",
                success: "success"
            };
            i.error,
            r.badRequest
        },
        1302: function(e, t, a) {
            "use strict";
            a.d(t, {
                OD: function() {
                    return dismissAlert
                },
                Kd: function() {
                    return clearAlerts
                },
                C4: function() {
                    return createAlertElement
                }
            });
            var s = a(6399)
              , n = a(9790);
            function dismissAlert(e) {
                const t = document.getElementById(`alert-${e}`);
                t && hideAlertElement(t)
            }
            function clearAlerts() {
                const e = getContainer();
                e && (e.innerHTML = "")
            }
            function createAlertElement(e) {
                var t;
                e.type !== n.V5.success && function dismissAllButLast(e=2) {
                    var t;
                    const a = getContainer();
                    Array.from(null != (t = null == a ? void 0 : a.querySelectorAll(`.alerts-alert:not(:nth-last-child(-n + ${e}))`)) ? t : []).forEach(hideAlertElement)
                }(2),
                (0,
                s.E)("alerts");
                const a = document.createElement("div");
                a.classList.add("alerts-alert"),
                a.classList.add("alerts-enter"),
                a.classList.add(`alerts-${e.type}`),
                a.setAttribute("id", `alert-${e.id}`);
                const r = document.createElement("span");
                r.classList.add("alerts-message"),
                r.innerHTML = e.message;
                const o = document.createElement("button");
                o.classList.add("alerts-close"),
                o.setAttribute("type", "button"),
                o.innerHTML = '<span class="icon-font-chess x"></span>',
                a.appendChild(r),
                a.appendChild(o),
                null == (t = getContainer()) || t.appendChild(a),
                o.addEventListener("click", onClickClose),
                e.type === n.V5.success && setTimeout(hideAlertElement, n.jC, a)
            }
            function getContainer() {
                return document.getElementById(n.xL.ALERT_FLASH_CONTAINER)
            }
            function hideAlertElement(e) {
                e.classList.add("alerts-leave"),
                setTimeout(removeAlertElement, 200, e)
            }
            function removeAlertElement(e) {
                var t;
                try {
                    null == (t = getContainer()) || t.removeChild(e)
                } catch (a) {
                    clearAlerts()
                }
            }
            function onClickClose(e) {
                var t, a;
                const s = null == (a = null == (t = e.target) ? void 0 : t.closest) ? void 0 : a.call(t, ".alerts-alert");
                s && hideAlertElement(s)
            }
        },
        5291: function(e, t, a) {
            "use strict";
            a.d(t, {
                OD: function() {
                    return s.OD
                },
                Kd: function() {
                    return s.Kd
                },
                el: function() {
                    return createAlert
                }
            });
            a(9790);
            var s = a(1302)
              , n = a(4752)
              , r = a.n(n);
            function createAlert({message: e, type: t, id: a}) {
                (0,
                s.C4)({
                    id: null != a ? a : r()(),
                    type: t,
                    message: e
                })
            }
        },
        8225: function(e, t, a) {
            "use strict";
            a.d(t, {
                U: function() {
                    return s
                }
            });
            const s = {
                CHANGE_STEP: "change-step",
                CLEAR_ERROR: "clear-error",
                CLOSE_MODAL: "close-modal",
                HANDLE_INPUT: "handle-input",
                HANDLE_SELECTED_SUGGESTION: "handle-selected-suggestion",
                LOGIN_AS_GUEST: "login-as-guest",
                PLAY_AS_GUEST: "play-as-guest",
                SHOW_AUTHENTICATION_MODAL: "show-authentication-modal",
                SHOW_ERROR_MESSAGE: "show-error-message",
                SHOW_LOGIN_MODAL: "show-login-modal",
                SKILL_LEVEL_UPDATED: "skill-level-updated"
            }
        },
        2844: function(e, t, a) {
            "use strict";
            a.d(t, {
                x: function() {
                    return s
                }
            });
            const s = {
                AUTHENTICATION_MODAL: "authentication-modal",
                AUTHENTICATION_MODAL_TRIGGER: "authentication-modal-trigger",
                LOGIN_MODAL: "login-modal",
                LOGIN_MODAL_TRIGGER: "login-modal-trigger"
            }
        },
        6133: function(e, t, a) {
            "use strict";
            a.d(t, {
                t: function() {
                    return s
                }
            });
            const s = {
                AUTHENTICATION_INTRO: "intro",
                AUTHENTICATION_SIGNUP: "signup"
            }
        },
        9816: function(e, t, a) {
            "use strict";
            a.d(t, {
                Y4: function() {
                    return u
                },
                ZC: function() {
                    return d
                },
                _G: function() {
                    return h
                },
                Iz: function() {
                    return b
                },
                xL: function() {
                    return m
                },
                U3: function() {
                    return w
                },
                _j: function() {
                    return p
                }
            });
            var s, n, r, o, i = a(1838), c = a(425), l = a(8160);
            const u = {
                ARIA_CONTROLS: "aria-controls",
                ARIA_LABEL: "aria-label",
                ARIA_SELECTED: "aria-selected",
                AVATAR: "data-avatar",
                ALIGN_DROPDOWN: "data-align-dropdown",
                BORDER_TOP: "data-border-top",
                BORDER_TOP_WIDE: "data-border-top-wide",
                BUTTON_TEXT: "data-button-text",
                CATEGORIES: "data-categories",
                CONTROL_LABEL_TEXT: "data-control-label-text",
                CUSTOM_BTN_CLASS: "data-custom-btn-class",
                CUSTOM_COLLAPSE_CLASS: "data-custom-collapse-class",
                DARK_MODE: "data-dark-mode",
                HIDDEN: "hidden",
                ICON_BUTTON: "data-icon-button",
                NEXT_LESSON_HINT: "data-next-lesson-hint",
                OPTIONS: "data-options",
                SHOW_ICON: "data-show-icon",
                SELECTED_LANGUAGES: "data-selected-languages",
                SELECTED_PAGE: "data-selected-page",
                SELECTED_VALUE: "data-selected-value",
                SLOTS: "data-stats-slots",
                SRC: "src",
                STATS: "data-stats",
                SURVEY_DATA: "data-survey",
                SURVEY_VOTED: "data-voted-survey",
                TAB_URL_PARAM: "data-tab-url-param",
                TYPE: "data-type",
                USERNAME: "data-username",
                USER_LANGUAGE: "data-user-language",
                VALUE: "data-value",
                VS_STATS: "data-vs-stats"
            }
              , d = {
                getArticleAuthors: "web_article_callback_list_authors",
                getContent: "web_content_callback_load_more",
                setArticleFeature: "web_content_callback_feature_article",
                setBlogFeature: (null == (n = null == (s = window.chesscom) ? void 0 : s.features) ? void 0 : n.includes("blogs_modern_featuring_write")) ? "web_content_callback_feature_blog" : "web_blog_callback_feature",
                setLessonsFeature: "web_content_callback_feature_lesson_course",
                setNewsFeature: "web_content_callback_feature_news",
                setVideoFeature: "web_content_callback_feature_chess_video"
            }
              , h = {
                BLOG: "blog",
                CSRF_TOKEN: null == (o = null == (r = window.context) ? void 0 : r.csrf) ? void 0 : o.token,
                DARK_MODE: "dark-mode",
                DEFAULT_LOCALE: "en_US",
                LESSONS: "lessons",
                NEWS: "news",
                VIDEO: "video",
                GRID_VIEW: "grid",
                LIST_VIEW: "list",
                LOCALE: window.context && window.context.locale || "en_US",
                LOGGED_IN: window.context && window.context.user,
                TIME: {
                    hour: 36e5
                },
                USERNAME: window.context && window.context.user ? window.context.user.username : null,
                USER_COLOR_SCHEME: "COLOR_SCHEME"
            }
              , b = {
                category: e=>l.Z.trans(e, {}, "dynamic"),
                commentsSynced: l.Z.trans("Comment count will be recalculated in few moments"),
                daysOfWeek: [l.Z.trans("Sunday"), l.Z.trans("Monday"), l.Z.trans("Tuesday"), l.Z.trans("Wednesday"), l.Z.trans("Thursday"), l.Z.trans("Friday"), l.Z.trans("Saturday")],
                loading: l.Z.trans("Loading..."),
                months: [l.Z.trans("January"), l.Z.trans("February"), l.Z.trans("March"), l.Z.trans("April"), l.Z.trans("May"), l.Z.trans("June"), l.Z.trans("July"), l.Z.trans("August"), l.Z.trans("September"), l.Z.trans("October"), l.Z.trans("November"), l.Z.trans("December")],
                monthsAbbreviated: [l.Z.trans("Jan"), l.Z.trans("Feb"), l.Z.trans("Mar"), l.Z.trans("Apr"), l.Z.trans("May"), l.Z.trans("Jun"), l.Z.trans("Jul"), l.Z.trans("Aug"), l.Z.trans("Sep"), l.Z.trans("Oct"), l.Z.trans("Nov"), l.Z.trans("Dec")],
                noResult: l.Z.trans("No results found."),
                pleaseEnter: e=>l.Z.trans("Please enter %number% or more characters", {
                    "%number%": e
                }),
                showMore: l.Z.trans("More"),
                showLess: l.Z.trans("Less"),
                lessonsHintMessage: l.Z.trans("Let me help you learn everything you need to know with this guide."),
                nextLessonHintMessage: l.Z.trans("Your next lesson is ready. Study daily if you really want to improve!"),
                openingsHintMessage: l.Z.trans("Let me help you improve your openings!")
            }
              , m = {
                AMPLITUDE_LOGGER: "amplitude-logger",
                AMPLITUDE_LOG_SELECTION: "[data-log-selection-to-amplitude]",
                BOARD_POPOVER: i.s.BOARD_POPOVER,
                CAPTCHA: "captcha",
                COLLAPSE: "v-toggle-collapse",
                COLLAPSED: "toggle-collapsed",
                CONTENT_AD: "content-ad",
                CONTENT_CATEGORY_SELECT: "content-category-select",
                CONTENT_LANGUAGE_SELECT: "content-language-select",
                CONFIRM_OPEN: "confirm-open",
                CONFIRM_POPOVER: "v-confirm-popover",
                CONFIRM_POPOVER_INLINE: "confirm-popover-inline",
                DELETE_CONTENT: "post-category-link-delete",
                DELETE_SPAM_CONTENT: "post-category-link-delete-spam",
                DONATE_MODAL: "donate-modal",
                FEATURE_SIDEBAR_LINK: "post-category-link-feature",
                FILTERS: "page-filters",
                FOLLOW_UNFOLLOW_AUTHOR: "follow-unfollow-author",
                FORM_DATEPICKER: "v-datepicker",
                FORM_DROPDOWN: "form-dropdown",
                GAME_PREVIEW: "game-preview",
                GIFT_MEMBERSHIP_BUTTON: "give-gift-membership",
                GIFT_MEMBERSHIP_MODAL: "gift-membership-modal",
                HEADLINE_CONTENT: "post-category-link-headline",
                HEADLINE_SIDEBAR_LINK: "post-category-link-headline",
                HIDDEN: "toggle-hidden",
                HINT_WRAPPER: "hint-wrapper",
                LANGUAGE_DROPDOWN: "post-view-languages",
                MESSAGE_PARENT: "vue-message",
                NAVIGATION_FOOTER: "navigation-footer",
                NEW_GAME: "new-game",
                PAGINATION_BOTTOM: "pagination-bottom",
                PAGINATION_BUTTON: "ui_pagination-item-component",
                PAGINATION_TOP: "pagination-top",
                PAGINATION_SCROLL_TOP: ".pagination-scroll-to-top",
                POST_AUTHOR_FOLLOW: "post-author-follow",
                POST_CAN_EDIT_URL: "post-can-edit-url",
                POST_EDIT_URL: "post-edit-url",
                POST_EDIT_URL_FIELD: "post-edit-url-field",
                POST_IMAGE_BUTTON: "image-upload-button",
                POST_IMAGE_THUMBNAIL: "image-upload-thumbnail",
                PUBLISH_CONTENT: "post-category-link-publish",
                SCROLL_TOP_ANCHOR: "scroll-top-anchor",
                SHORT_SIDEBAR_AD_BOTTOM: "short-sidebar-ad-bottom",
                SHORT_SIDEBAR_AD_TOP: "short-sidebar-ad-top",
                SIDEBAR_STATS: "sidebar-stats",
                SIDEBAR_SURVEY: "sidebar-survey",
                SIDEBAR_TOGGLE_BUTTON_TEXT: "toggle-content-button-text",
                SIDEBAR_TOGGLE_ICON: "toggle-content-icon",
                SIDEBAR_USER_ITEMS: "sidebar-users-grid-toggle-item",
                SIDEBAR_USERS_TOGGLE_BUTTON: "toggle-content-button",
                STAT_CHART: "stat-chart",
                TABS_BUTTON: "v5-tabs-button",
                TABS_PANEL: "v5-tabs-panel",
                TABS_WRAPPER: "v5-tabs-wrapper",
                TIMEZONES: "page-timezones",
                TOOLTIP: i.s.TOOLTIP,
                TOOLTIP_CLASS: "tooltip",
                TOOLTIP_TOP: "top",
                UPGRADE_ACCORDION: "upgrade-accordion",
                USER_LEAGUE: "user-league",
                USER_TAGLINE: "post-view-meta-user",
                VERSION_DROPDOWN: "version-dropdown"
            }
              , w = {
                CONFIRM_POPOVER_YES: "confirm-popover-yes",
                SHOW_MODAL: "show-confirm-popover",
                VOTE_COUNTED: "vote-counted",
                VIEW_CHANGE: "view-change",
                VIEW_GRID: "view-grid",
                VIEW_LIST: "view-list"
            }
              , p = {
                changeContentLanguage: ()=>c.Z.generate("web_user_callback_set_content_language"),
                enPassant: ()=>c.Z.generate("web_article_view", {
                    url: "how-to-capture-en-passant"
                }),
                inviteLink: (e,t,a)=>c.Z.generate(e, {
                    url: t,
                    secret: a
                }),
                loginPage: c.Z.generate("web_security_login_and_go"),
                redirectToLoginPage: e=>c.Z.generate("web_security_login_and_go", {
                    redirectUrl: e
                }),
                surveyVote: (e,t)=>c.Z.generate("web_survey_callback_vote", {
                    id: e,
                    optionId: t
                }),
                teamMatch: e=>c.Z.generate("web_team_match_view", {
                    match: e
                }),
                tournament: e=>c.Z.generate("web_tournament_view", {
                    url: e
                }),
                userProfile: e=>c.Z.generate("web_member_view", {
                    username: e
                })
            }
        },
        1838: function(e, t, a) {
            "use strict";
            a.d(t, {
                s: function() {
                    return s
                }
            });
            const s = {
                BOARD_POPOVER: "v-board-popover",
                TOOLTIP: "v-tooltip",
                USER_POPOVER: "v-user-popover"
            }
        },
        7122: function(e, t, a) {
            "use strict";
            a.d(t, {
                b: function() {
                    return generateRoute
                }
            });
            var s = a(425);
            const generateRoute = (e,t,a)=>{
                let n = e;
                const r = t;
                if (a) {
                    const e = document.querySelector("[data-url-locale]")
                      , t = null == e ? void 0 : e.getAttribute("data-url-locale")
                      , s = "en" !== (null == t ? void 0 : t.split("_")[0]) && (null == t ? void 0 : t.split("_")[0]);
                    s && r && (n = a,
                    r._locale = s)
                }
                return s.Z.generate(n, r)
            }
        },
        8470: function(e, t, a) {
            "use strict";
            a.d(t, {
                U3: function() {
                    return i
                },
                xL: function() {
                    return o.x
                },
                Iz: function() {
                    return c
                },
                _G: function() {
                    return l
                },
                Xw: function() {
                    return u
                },
                F$: function() {
                    return h
                },
                DL: function() {
                    return getGuestSlides
                },
                MR: function() {
                    return getUpgradeSlides
                }
            });
            var s, n, r = a(2305), o = a(6169), i = (e=>(e.HIDE_MODAL = "hide-modal",
            e.HIDE_MODAL_BACKGROUND_CLICK = "hide-background",
            e.HIDE_MODAL_SOCIAL_SHARE = "hide-modal-social-share",
            e.LOGIN_OR_REGISTER_MODAL = "LOGIN_OR_REGISTER_MODAL",
            e.MODAL_DID_HIDE = "modal-did-hide",
            e.SHOW_GUEST_MODAL = "show-guest-modal",
            e.SHOW_MODAL_SOCIAL_SHARE = "show-modal-social-share",
            e.SHOW_UPGRADE_MODAL = "show-upgrade-modal",
            e))(i || {});
            const c = {
                GUEST_MODAL_TITLE: {
                    analysis: (0,
                    r.dW)("Sign up to analyze your games!"),
                    lessons: (0,
                    r.dW)("Sign up to unlock Lessons!"),
                    pawn: (0,
                    r.dW)("Sign up to use this feature."),
                    "puzzles-learning": (0,
                    r.dW)("Sign up to keep solving puzzles!"),
                    stats: (0,
                    r.dW)("Sign up to track your progress!")
                },
                GUEST_MODAL_FOOTER_TEXT: (0,
                r.dW)("Already have an account? Log in")
            }
              , l = {
                GUEST_MODAL_SLIDES: {
                    analysis: "analysis",
                    lessons: "lessons",
                    pawn: "pawn",
                    puzzles: "puzzles-learning",
                    stats: "stats"
                }
            }
              , u = ["analysis", "lessons", "puzzles-learning", "puzzles-rush", "puzzles-battle"]
              , d = [{
                title: (0,
                r.dW)("Play, Learn and Connect"),
                subtitle: (0,
                r.dW)("Join millions of chess players."),
                icon: "pawn"
            }, {
                title: (null == (n = null == (s = window.chesscom) ? void 0 : s.features) ? void 0 : n.includes("update_puzzle_modal_puzzle_count")) ? (0,
                r.jn)("]1,Inf[ %number%K+ puzzles", 500, {
                    "%number%": 500
                }) : (0,
                r.dW)("150k+ Puzzles"),
                subtitle: (0,
                r.dW)("Play every day to improve"),
                icon: "puzzles-learning"
            }, {
                title: (0,
                r.dW)("1500+ Lessons"),
                subtitle: (0,
                r.dW)("Learn from chess masters!"),
                icon: "lessons"
            }, {
                title: (0,
                r.dW)("Full Game Analysis"),
                subtitle: (0,
                r.dW)("Learn from every game!"),
                icon: "analysis"
            }, {
                title: (0,
                r.dW)("Get a Rating"),
                subtitle: (0,
                r.dW)("Save your games!"),
                icon: "stats"
            }, {
                title: (0,
                r.dW)("Explore Full Openings"),
                subtitle: (0,
                r.dW)("See moves played by masters!"),
                icon: "explorer"
            }]
              , h = "dismissedOnboardModalId"
              , b = [{
                title: (0,
                r.dW)("Full Analysis"),
                subtitle: (0,
                r.dW)("Full Report, Accuracy, Key Moments"),
                icon: "analysis",
                generic: !0
            }, {
                title: (0,
                r.dW)("Unlimited Puzzles"),
                subtitle: (0,
                r.dW)("Solve 8+ Puzzles/day to improve fast"),
                icon: "puzzles-learning",
                generic: !0
            }, {
                title: (0,
                r.dW)("Unlimited Lessons"),
                subtitle: (0,
                r.dW)("Your step-by-step path to mastery"),
                icon: "lessons",
                generic: !0
            }, {
                title: (0,
                r.dW)("Remove Ads"),
                subtitle: (0,
                r.dW)("Get the best Chess.com experience"),
                icon: "no-ads",
                generic: !0
            }, {
                title: (0,
                r.dW)("Unlimited Puzzle Rush"),
                subtitle: (0,
                r.dW)("3 strikes and you're out!"),
                icon: "puzzles-rush"
            }, {
                title: (0,
                r.dW)("Unlimited Puzzle Battles"),
                subtitle: (0,
                r.dW)("Rush another player to win!"),
                icon: "puzzles-battle"
            }, {
                title: (0,
                r.dW)("Get Your Own Flair"),
                subtitle: (0,
                r.dW)("Share your unique personality"),
                icon: "flair"
            }, {
                title: (0,
                r.dW)("Explore Full Openings"),
                subtitle: (0,
                r.dW)("See moves played by masters!"),
                icon: "explorer"
            }, {
                title: (0,
                r.dW)("Master Every Position"),
                subtitle: (0,
                r.dW)("Practice means everything!"),
                icon: "workout"
            }, {
                title: (0,
                r.dW)("Unlock All Bots"),
                subtitle: (0,
                r.dW)("Play vs various skills and styles."),
                icon: "computer"
            }, {
                title: (0,
                r.dW)("Unlimited Collections"),
                subtitle: (0,
                r.dW)("Build and organize your library"),
                icon: "library",
                id: 12
            }, {
                title: (0,
                r.dW)("Unlimited Daily Puzzles"),
                subtitle: (0,
                r.dW)("Unlock all daily puzzles."),
                icon: "daily-puzzle"
            }]
              , getGuestSlides = e=>{
                const t = d.find((t=>t.icon === e)) || d[0]
                  , a = d.filter((e=>e !== t));
                return a.unshift(t),
                a
            }
              , getUpgradeSlides = e=>{
                const t = b.find((t=>t.icon === e)) || b[0]
                  , a = b.filter((e=>e.generic && e !== t));
                return a.unshift(t),
                a
            }
              , m = "clubs"
              , w = "explorer"
              , p = "leagues"
              , _ = "lessons"
              , g = "library"
              , f = "openings"
              , k = "solo"
              , v = "tournaments"
              , y = "vision";
            (0,
            r.dW)("Play bots with various strengths and styles"),
            (0,
            r.dW)("Use optional coaching features for insights"),
            (0,
            r.dW)("Practice at any time - with no pressure"),
            (0,
            r.dW)("Start"),
            (0,
            r.dW)("Challenge the computer to an online chess game."),
            (0,
            r.dW)("Chess Computer"),
            (0,
            r.dW)("Search millions of master games"),
            (0,
            r.dW)("Choose specific players to explore"),
            (0,
            r.dW)("Find winning moves from your games"),
            (0,
            r.dW)("See moves chess masters have made and the outcome of the game from any position."),
            (0,
            r.dW)("Chess Explorer"),
            (0,
            r.dW)("Search more than 3,000 opening lines"),
            (0,
            r.dW)("Find the perfect chess opening for you"),
            (0,
            r.dW)("Explore variations and master chess games"),
            (0,
            r.dW)("Learn and explore chess openings to try in your chess games."),
            (0,
            r.dW)("Chess Openings"),
            (0,
            r.dW)("Capture a piece with every move until just one remains"),
            (0,
            r.dW)("No piece may capture more than 2 times per puzzle"),
            (0,
            r.dW)("If there is a King on the board, it must be the final piece"),
            (0,
            r.dW)("Try for a perfect run in Challenge Mode!"),
            (0,
            r.dW)("Start"),
            (0,
            r.dW)("How to Play"),
            (0,
            r.dW)("Solo Chess"),
            (0,
            r.dW)("Improve vision with coordinate training"),
            (0,
            r.dW)("Identify squares or make moves"),
            (0,
            r.dW)("Answer as many as you can in 30 seconds"),
            (0,
            r.dW)("Start"),
            (0,
            r.dW)("Learn to quickly follow and record chess coordinates and annotation."),
            (0,
            r.dW)("Vision Trainer"),
            (0,
            r.dW)("Watch videos to learn concepts"),
            (0,
            r.dW)("Test knowledge with Challenges"),
            (0,
            r.dW)("Level up to achieve Mastery"),
            (0,
            r.dW)("Learn from interactive lessons created by chess masters."),
            (0,
            r.dW)("Chess Lessons"),
            (0,
            r.dW)("Represent your club in matches"),
            (0,
            r.dW)("Chat in private forums"),
            (0,
            r.dW)("Organize your team"),
            (0,
            r.dW)("Join an Online Chess Club and connect and compete with your friends in matches."),
            (0,
            r.dW)("Chess Clubs"),
            (0,
            r.dW)("Join tournaments starting every few minutes"),
            (0,
            r.dW)("Compete in Daily, multi-game tournaments"),
            (0,
            r.dW)("Win trophies to display on your Profile"),
            (0,
            r.dW)("Compete in online chess tournaments or join an online Arena, where anyone can win."),
            (0,
            r.dW)("Chess Tournaments"),
            (0,
            r.dW)("Create collections from games played online, offline, or uploaded."),
            (0,
            r.dW)("Open, analyze, edit, and re-save your games to your collection."),
            (0,
            r.dW)("Organize, tag, and share your collections with others."),
            (0,
            r.dW)("Compile your very own Collection of personal, master, and all other games."),
            (0,
            r.dW)("Library"),
            (0,
            r.dW)("Play and win games to earn points"),
            (0,
            r.dW)("All major formats supported - bullet, blitz, rapid & arena"),
            (0,
            r.dW)("The longer the time control, the more points you earn"),
            (0,
            r.dW)("Earn trophies and advance to the Next League by playing games."),
            (0,
            r.dW)("Players Leagues")
        },
        6169: function(e, t, a) {
            "use strict";
            a.d(t, {
                x: function() {
                    return s
                }
            });
            const s = {
                AUTHENTICATION_MODAL: "authentication-modal",
                FIRST_TIME_MODAL: "first-time-modal",
                GUEST_MODAL: "guest-modal",
                GUEST_MODAL_TRIGGER: "guest-modal-trigger",
                NEW_ACCOUNT: "new-account-modal",
                UPGRADE_MODAL: "upgrade-modal"
            }
        },
        4744: function(e, t, a) {
            "use strict";
            a.d(t, {
                yc: function() {
                    return h
                },
                Wp: function() {
                    return d
                },
                ZC: function() {
                    return u
                },
                U3: function() {
                    return g
                },
                rP: function() {
                    return _
                },
                p0: function() {
                    return s
                },
                Cz: function() {
                    return p
                },
                xL: function() {
                    return b
                },
                Zj: function() {
                    return f
                },
                _j: function() {
                    return m
                },
                Iz: function() {
                    return w
                }
            });
            const s = {
                guest: 0,
                cheater: 5,
                abuser: 6,
                voluntarilyClosed: 7,
                unspecifiedClosed: 8,
                basic: 10,
                silver: 20,
                gold: 30,
                platinum: 40,
                diamond: 50,
                moderator: 80,
                staff: 90
            };
            var n = a(425)
              , r = a(8160)
              , o = Object.defineProperty
              , i = Object.getOwnPropertySymbols
              , c = Object.prototype.hasOwnProperty
              , l = Object.prototype.propertyIsEnumerable
              , __defNormalProp = (e,t,a)=>t in e ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[t] = a;
            const u = {
                REPORT_USER: "web_user_callback_report_user",
                REPORT_TV_USER: "web_tv_callback_report",
                USER_POPUP: "web_user_callback_popup"
            }
              , d = (r.Z.trans("Membership Icons"),
            r.Z.trans("Emoji"),
            r.Z.trans("Chess"),
            r.Z.trans("Holiday"),
            r.Z.trans("Hosts"),
            r.Z.trans("Computer Chess"),
            r.Z.trans("PRO Chess League"),
            {
                category: "membership_icons",
                code: "nothing",
                description: r.Z.trans("Nothing"),
                id: 206,
                imageCode: "nothing",
                membershipLevelCode: "staff",
                name: r.Z.trans("Nothing"),
                status: ""
            })
              , h = ["blocked", "clear", "clear_light"]
              , b = {
                USER_FLAIR: "user-flair",
                USER_SEARCH: "user-search",
                USER_POPOVER_CONTAINER: "user-popover"
            }
              , m = {
                about: ()=>n.Z.generate("web_about"),
                membership: (e="icon")=>n.Z.generate("web_membership", {
                    c: e
                }),
                usernameSearch: e=>n.Z.generate("web_user_callback_username_search", ((e,t)=>{
                    for (var a in t || (t = {}))
                        c.call(t, a) && __defNormalProp(e, a, t[a]);
                    if (i)
                        for (var a of i(t))
                            l.call(t, a) && __defNormalProp(e, a, t[a]);
                    return e
                }
                )({
                    activeDays: 4e3
                }, e)),
                userDivision: ({league: e, division: t})=>n.Z.generate("web_league_division", {
                    league: e,
                    division: t
                }),
                userProfile: e=>n.Z.generate("web_member_view", {
                    username: e
                })
            }
              , w = {
                acceptFriendRequest: r.Z.trans("Accept Friend Request"),
                addFriend: r.Z.trans("Add Friend"),
                block: r.Z.trans("Block"),
                blockConfirm: r.Z.trans("Are you sure you want to block this user?"),
                blockUser: e=>r.Z.trans("Block %username%?", {
                    "%username%": e
                }),
                cancel: r.Z.trans("Cancel"),
                cancelFriendRequest: r.Z.trans("Cancel Friend Request"),
                challenge: r.Z.trans("Challenge"),
                follow: r.Z.trans("Follow"),
                gameArchive: r.Z.trans("Game Archive"),
                giftMembership: r.Z.trans("Gift Membership"),
                giveTrophy: r.Z.trans("Give Award"),
                joinedDate: e=>r.Z.trans("Joined %1$s%", {
                    "%1$s%": e
                }),
                lastOnline: e=>r.Z.trans("Online %1$s%", {
                    "%1$s%": e
                }),
                moderator: r.Z.trans("Moderator"),
                onlineNow: r.Z.trans("Online Now"),
                inLiveNow: r.Z.trans("In Live"),
                removeFriend: r.Z.trans("Remove Friend"),
                removeFriendConfirm: r.Z.trans("Are you sure you want to remove this friend from your list?"),
                report: r.Z.trans("Report"),
                reportUser: e=>r.Z.trans("Report %username%", {
                    "%username%": e
                }),
                sendMessage: r.Z.trans("Send Message"),
                showYourFlair: r.Z.trans("Show your flair!"),
                staff: r.Z.trans("Staff"),
                unblock: r.Z.trans("Unblock"),
                unfollow: r.Z.trans("Unfollow"),
                userReportError: r.Z.trans("Tell us more...")
            }
              , p = (s.diamond,
            s.abuser,
            s.cheater,
            s.voluntarilyClosed,
            s.unspecifiedClosed,
            s.gold,
            s.moderator,
            s.platinum,
            s.staff,
            {
                [s.basic]: r.Z.trans("Basic Membership"),
                [s.diamond]: r.Z.trans("Diamond Membership"),
                [s.cheater]: r.Z.trans("Closed: Fair Play"),
                [s.abuser]: r.Z.trans("Closed: Abuse"),
                [s.voluntarilyClosed]: r.Z.trans("Closed: Inactive"),
                [s.unspecifiedClosed]: r.Z.trans("Account Closed"),
                [s.gold]: r.Z.trans("Gold Membership"),
                [s.moderator]: r.Z.trans("Moderator Account"),
                [s.platinum]: r.Z.trans("Platinum Membership"),
                [s.silver]: r.Z.trans("Silver Membership"),
                [s.staff]: r.Z.trans("Staff Account")
            })
              , _ = {
                GM: r.Z.trans("Grandmaster"),
                WGM: r.Z.trans("Woman Grandmaster"),
                IM: r.Z.trans("International Master"),
                WIM: r.Z.trans("Woman International Master"),
                FM: r.Z.trans("FIDE Master"),
                WFM: r.Z.trans("Woman FIDE Master"),
                NM: r.Z.trans("National Master"),
                CM: r.Z.trans("FIDE Candidate Master"),
                WCM: r.Z.trans("FIDE Woman Candidate Master"),
                WNM: r.Z.trans("Woman National Master")
            }
              , g = {
                AUTOCOMPLETE_CLEAR_SELECTED: "form-autocomplete-clear-selected"
            }
              , f = {
                FETCH_ROLES: "fetchRoles"
            }
        },
        8096: function(e, t, a) {
            "use strict";
            a.d(t, {
                jl: function() {
                    return s.j
                },
                sQ: function() {
                    return isImpersonating
                },
                nJ: function() {
                    return o.n
                },
                S_: function() {
                    return checkUserStatus
                },
                gK: function() {
                    return getAdditionalUserInfo
                },
                yO: function() {
                    return getMembershipNumber
                },
                $j: function() {
                    return getMembershipName
                }
            });
            var s = a(8739)
              , n = a(9660)
              , r = (a(425),
            a(4744))
              , o = a(2476);
            const i = window.context
              , isImpersonating = ()=>{
                var e;
                return !(!(0,
                s.j)() || !(null == (e = i.user) ? void 0 : e.isImpersonating))
            }
              , checkUserStatus = e=>{
                if (!(0,
                s.j)())
                    return !1;
                let t = !1;
                switch (e) {
                case "isActivated":
                    t = i.user.isActivated;
                    break;
                case "isStaff":
                    t = i.user.membershipLevel >= r.p0.staff;
                    break;
                case "isStaffOnly":
                    t = i.user.membershipLevel === r.p0.staff;
                    break;
                case "isModerator":
                    t = i.user.membershipLevel >= r.p0.moderator;
                    break;
                case "isModeratorOnly":
                    t = i.user.membershipLevel === r.p0.moderator;
                    break;
                case "isDiamond":
                    t = i.user.membershipLevel >= r.p0.diamond;
                    break;
                case "isDiamondOnly":
                    t = i.user.membershipLevel === r.p0.diamond;
                    break;
                case "isPlatinum":
                    t = i.user.membershipLevel >= r.p0.platinum;
                    break;
                case "isPlatinumOnly":
                    t = i.user.membershipLevel === r.p0.platinum;
                    break;
                case "isSilver":
                case "isPremium":
                    t = i.user.membershipLevel >= r.p0.silver;
                    break;
                case "isSilverOnly":
                    t = i.user.membershipLevel === r.p0.silver;
                    break;
                case "isGold":
                    t = i.user.membershipLevel >= r.p0.gold;
                    break;
                case "isGoldOnly":
                    t = i.user.membershipLevel === r.p0.gold;
                    break;
                case "isBasic":
                    t = i.user.membershipLevel === r.p0.basic;
                    break;
                case "isNewlyRegistered":
                    t = i.user.isNewlyRegistered;
                    break;
                case "isGuest":
                    t = i.user.isGuest;
                    break;
                case "chessTitle":
                    t = i.user.chessTitle;
                    break;
                default:
                    t = !1
                }
                return t
            }
              , getAdditionalUserInfo = e=>{
                var t, a, r, o, c, l, u, d, h, b, m, w, p, _, g, f, k, v, y;
                let z = !1;
                if (!(0,
                s.j)()) {
                    switch (e) {
                    case "diagramSettings":
                        z = {};
                        break;
                    case "isDarkMode":
                        z = (0,
                        n.KZ)();
                        break;
                    default:
                        z = null
                    }
                    return z
                }
                switch (e) {
                case "cohort":
                    z = null == (t = i.user) ? void 0 : t.cohort;
                    break;
                case "country":
                    z = null == (a = i.user) ? void 0 : a.country;
                    break;
                case "flairCode":
                    z = null == (r = i.user) ? void 0 : r.flairCode;
                    break;
                case "getUserId":
                    z = null == (o = i.user) ? void 0 : o.id;
                    break;
                case "getUsername":
                    z = null == (c = i.user) ? void 0 : c.username;
                    break;
                case "getAvatarUrl":
                    z = null == (l = i.user) ? void 0 : l.avatarUrl;
                    break;
                case "getAvatarLargeUrl":
                    z = null == (u = i.user) ? void 0 : u.avatarLargeUrl;
                    break;
                case "getSettingsAvatarUrl":
                    z = null == (d = i.user) ? void 0 : d.settingsAvatarUrl;
                    break;
                case "getLastLoginDate":
                    z = null == (h = i.user) ? void 0 : h.lastLoginDate;
                    break;
                case "registerDate":
                    z = null == (b = i.user) ? void 0 : b.registerDate;
                    break;
                case "getBrowserTimezone":
                    z = window.jstz.determine().name();
                    break;
                case "getTimezone":
                    z = null == (m = i.user) ? void 0 : m.timezone;
                    break;
                case "getDiagramSettings":
                    z = i.diagramSettings;
                    break;
                case "language":
                    z = i.i18n.locale;
                    break;
                case "contentLanguage":
                    z = i.i18n.contentLanguage;
                    break;
                case "speaksEnglish":
                    z = "en_US" === i.i18n.locale;
                    break;
                case "eligibleFirstTrial":
                    z = null == (w = i.user) ? void 0 : w.eligibleFirstTrial;
                    break;
                case "fairPlayAgree":
                    z = null == (p = i.user) ? void 0 : p.fairPlayAgree;
                    break;
                case "getArchiveView":
                    z = (null == (_ = i.user) ? void 0 : _.archiveView) ? i.user.archiveView : "grid";
                    break;
                case "homeContentType":
                    z = "following";
                    break;
                case "getMembershipLevel":
                    z = null == (g = i.user) ? void 0 : g.membershipLevel;
                    break;
                case "isContentHidden":
                    z = null == (f = i.user) ? void 0 : f.isContentHidden;
                    break;
                case "isDarkMode":
                    z = (0,
                    n.KZ)();
                    break;
                case "rating":
                    z = null == (k = i.user) ? void 0 : k.rating;
                    break;
                case "safeMode":
                    z = null == (v = i.user) ? void 0 : v.safeMode;
                    break;
                case "uuid":
                    z = null == (y = i.user) ? void 0 : y.uuid;
                    break;
                default:
                    z = !1
                }
                return z
            }
              , getMembershipNumber = (e,t)=>!t && e >= r.p0.basic ? r.p0.unspecifiedClosed : e
              , getMembershipName = e=>Object.keys(r.p0).filter((t=>r.p0[t] === e || t === e))[0]
        },
        2476: function(e, t, a) {
            "use strict";
            function isGuest() {
                var e, t;
                return Boolean(null == (t = null == (e = window.context) ? void 0 : e.user) ? void 0 : t.isGuest)
            }
            a.d(t, {
                n: function() {
                    return isGuest
                }
            })
        },
        8739: function(e, t, a) {
            "use strict";
            a.d(t, {
                j: function() {
                    return isLoggedIn
                }
            });
            var s = a(2220);
            function isLoggedIn() {
                var e;
                return Boolean((null == (e = window.context) ? void 0 : e.user) && !(0,
                s.Z)())
            }
        },
        4904: function(e, t, a) {
            "use strict";
            a.d(t, {
                m: function() {
                    return showSignUpModal
                }
            });
            var s = a(8225)
              , n = a(2844)
              , r = a(6133)
              , o = a(4672)
              , i = (Object.create,
            Object.defineProperty)
              , c = (Object.getOwnPropertyDescriptor,
            Object.getOwnPropertyNames,
            Object.getOwnPropertySymbols)
              , l = (Object.getPrototypeOf,
            Object.prototype.hasOwnProperty)
              , u = Object.prototype.propertyIsEnumerable
              , __defNormalProp = (e,t,a)=>t in e ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[t] = a;
            const d = {
                show: r.t.AUTHENTICATION_SIGNUP,
                updateForm: !0
            };
            function showSignUpModal(e=d) {
                Promise.all([a.e(820), a.e(180)]).then(a.bind(a, 8180)).then((({default: t})=>{
                    t.createInstance(n.x.AUTHENTICATION_MODAL),
                    (0,
                    o.o)(((e,t)=>{
                        for (var a in t || (t = {}))
                            l.call(t, a) && __defNormalProp(e, a, t[a]);
                        if (c)
                            for (var a of c(t))
                                u.call(t, a) && __defNormalProp(e, a, t[a]);
                        return e
                    }
                    )({
                        key: s.U.SHOW_AUTHENTICATION_MODAL
                    }, e))
                }
                ))
            }
        },
        3981: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return W
                }
            });
            var s = a(4744)
              , n = a(528)
              , r = a(1681)
              , o = Object.defineProperty
              , i = Object.getOwnPropertySymbols
              , c = Object.prototype.hasOwnProperty
              , l = Object.prototype.propertyIsEnumerable
              , __defNormalProp = (e,t,a)=>t in e ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[t] = a
              , __spreadValues = (e,t)=>{
                for (var a in t || (t = {}))
                    c.call(t, a) && __defNormalProp(e, a, t[a]);
                if (i)
                    for (var a of i(t))
                        l.call(t, a) && __defNormalProp(e, a, t[a]);
                return e
            }
            ;
            const u = "chessComAppState"
              , d = ["id", "enabled", "allowMarkings", "captureKeyStrokes", "fadeSetup", "fetched", "flipBoard", "flipped", "highlightColor", "highlightOpacity", "moveListContextMenuEnabled", "overlayInAnalysisMode"]
              , h = {
                getBoardOptions() {
                    var e;
                    const t = (0,
                    n.Q)(r.Z.get(u))
                      , a = Object.assign({}, null == (e = null == t ? void 0 : t.board) ? void 0 : e.boardOptions);
                    return d.forEach((e=>{
                        delete a[e]
                    }
                    )),
                    a.highlightColor = void 0,
                    a
                },
                setBoardOptions(e) {
                    var t;
                    let a = (0,
                    n.Q)(r.Z.get(u));
                    (null == (t = null == a ? void 0 : a.board) ? void 0 : t.boardOptions) ? Object.assign(a.board.boardOptions, __spreadValues({}, e)) : a = {
                        board: {
                            boardOptions: __spreadValues({}, e)
                        }
                    },
                    d.forEach((e=>{
                        delete a.board.boardOptions[e]
                    }
                    )),
                    r.Z.set(u, (0,
                    n.P)(a))
                }
            };
            var b = a(7074)
              , m = a(425)
              , w = a(5174);
            function noop() {}
            function getDefaultBoardOptions() {
                return {
                    animationType: "default",
                    boardSize: "auto",
                    boardStyle: "green",
                    coordinates: "inside",
                    darkMode: !0,
                    highlightLegalMoves: !0,
                    highlightMoves: !0,
                    isWhiteOnBottom: !1,
                    moveListDisplayType: "text",
                    moveMethod: "drag",
                    pieceStyle: "neo",
                    playSounds: !0,
                    soundTheme: "default"
                }
            }
            function createAddFriend(e) {
                return function addFriend(t, a=!1) {
                    const {actionQueue: s, http: n, Router: r} = e
                      , o = {
                        user: t
                    };
                    return a && (o.recommendation = 1),
                    s.add(n.post, r.generate("web_friend_request_callback", o))
                }
            }
            function createApproveFriendRequest(e) {
                return function approveFriendRequest(t) {
                    const {actionQueue: a, http: s, Router: n} = e;
                    return a.add(s.put, n.generate("web_friend_accept_request_callback", {
                        user: t
                    }))
                }
            }
            function createBlockUser(e) {
                return function blockUser(t) {
                    const {actionQueue: a, CSRFToken: s, http: n, Router: r} = e;
                    return a.add(n.post, r.generate("web_member_callback_block_member", {
                        username: t
                    }), {
                        _token: s
                    })
                }
            }
            function createCancelFriendRequest(e) {
                return function cancelFriendRequest(t) {
                    const {actionQueue: a, http: s, Router: n} = e;
                    return a.add(s.post, n.generate("web_friend_cancel_request_callback", {
                        user: t
                    }))
                }
            }
            function createCheckMembershipStatus(e) {
                return function checkMembershipStatus(t) {
                    const {membership: a, service: s, user: n} = e;
                    if (!s.isLoggedIn())
                        return !1;
                    let r = !1;
                    switch (t) {
                    case "isActivated":
                        r = n.isActivated;
                        break;
                    case "isStaff":
                        r = n.membershipLevel >= a.staff;
                        break;
                    case "isStaffOnly":
                        r = n.membershipLevel === a.staff;
                        break;
                    case "isModerator":
                        r = n.membershipLevel >= a.moderator;
                        break;
                    case "isModeratorOnly":
                        r = n.membershipLevel === a.moderator;
                        break;
                    case "isDiamond":
                        r = n.membershipLevel >= a.diamond;
                        break;
                    case "isDiamondOnly":
                        r = n.membershipLevel === a.diamond;
                        break;
                    case "isPlatinum":
                        r = n.membershipLevel >= a.platinum;
                        break;
                    case "isPlatinumOnly":
                        r = n.membershipLevel === a.platinum;
                        break;
                    case "isSilver":
                    case "isPremium":
                        r = n.membershipLevel >= a.silver;
                        break;
                    case "isSilverOnly":
                        r = n.membershipLevel === a.silver;
                        break;
                    case "isGold":
                        r = n.membershipLevel >= a.gold;
                        break;
                    case "isGoldOnly":
                        r = n.membershipLevel === a.gold;
                        break;
                    case "isBasic":
                        r = n.membershipLevel === a.basic;
                        break;
                    default:
                        r = !1
                    }
                    return r
                }
            }
            function createCheckValidUsername(e) {
                return function checkValidUsername(t) {
                    const {http: a, Router: s} = e;
                    return a.get(s.generate("web_user_callback_valid_username", {
                        username: t
                    }))
                }
            }
            function createDeclineFriendRequest(e) {
                return function declineFriendRequest(t) {
                    const {actionQueue: a, http: s, Router: n} = e;
                    return a.add(s.post, n.generate("web_friend_decline_request_callback", {
                        user: t
                    }))
                }
            }
            function createDeleteFriend(e) {
                return function deleteFriend(t) {
                    const {actionQueue: a, http: s, Router: n} = e;
                    return a.add(s.delete, n.generate("web_friend_delete_callback", {
                        user: t
                    }))
                }
            }
            function createDismissFollowSuggestion(e) {
                return function dismissFollowSuggestion(t) {
                    const {actionQueue: a, http: s, Router: n} = e;
                    return a.add(s.post, n.generate("web_user_callback_dismiss_follow_suggestion", {
                        username: t
                    }))
                }
            }
            function createEligibleFirstTrial(e) {
                return function EligibleFirstTrial() {
                    const {service: t, user: a} = e;
                    return t.isLoggedIn() && a.eligibleFirstTrial
                }
            }
            var p = a(8480)
              , _ = a(2220);
            function createFetchReportReasonsData(e) {
                return function fetchReportReasonsData() {
                    const {http: t, Router: a} = e;
                    return t.get(a.generate("web_user_callback_report_reasons"))
                }
            }
            function createGenerateProfileLink(e) {
                return function generateProfileLink(t) {
                    const {Router: a} = e;
                    return t ? `<a href="${a.generate("web_member_view", {
                        username: t
                    })}" target="_self">${t}</a>` : ""
                }
            }
            function createGet(e) {
                return function get(t) {
                    const {user: a} = e;
                    return a ? t ? a[t] : a : null
                }
            }
            function createGetAvatar(e) {
                return function getAvatar(t) {
                    const {http: a, Router: s} = e;
                    return a.get(s.generate("pubapi_player_profile", {
                        username: t
                    }))
                }
            }
            function createGetFollowSuggestions(e) {
                return function getFollowSuggestions() {
                    const {http: t, Router: a} = e;
                    return t.get(a.generate("web_user_callback_follow_suggestions"))
                }
            }
            function createGetFriends(e) {
                return function getFriends(t) {
                    const {http: a, Router: s} = e;
                    return a.get(s.generate("web_friend_callback_friends_search", t))
                }
            }
            function createGetOpponents(e) {
                return function getOpponents() {
                    const {http: t, Router: a} = e;
                    return t.get(a.generate("web_user_callback_recent_opponents"))
                }
            }
            var g = a(8096);
            function getPromises() {
                return window.chesscom.promises || (window.chesscom.promises = {}),
                window.chesscom.promises
            }
            function createGetRoles(e) {
                return function getRoles() {
                    const {http: t, Router: a} = e;
                    return (0,
                    g.jl)() ? function execAndCache({id: e, promise: t}) {
                        const a = getPromises();
                        return a[e] || (a[e] = new Promise(((e,a)=>{
                            t().then(e).catch(a)
                        }
                        ))),
                        a[e]
                    }({
                        id: s.Zj.FETCH_ROLES,
                        promise: ()=>t.get(a.generate("web_security_callback_user_roles"))
                    }) : []
                }
            }
            function createGetUser(e) {
                return function getUser(t) {
                    const {http: a, Router: s} = e;
                    return a.get(s.generate("web_user_callback_popup", {
                        username: t
                    }))
                }
            }
            function createGuestUpdateSkillLevel(e) {
                return function guestUpdateSkillLevel(t) {
                    const {http: a, Router: s} = e;
                    return a.post(s.generate("web_guest_update_skill_level"), {
                        skill_level: Number(t)
                    })
                }
            }
            function createIsEnabled(e) {
                return function isEnabled() {
                    const {service: t, user: a} = e;
                    return t.isLoggedIn() && a.isEnabled
                }
            }
            function createIsImpersonating(e) {
                return function isImpersonating() {
                    const {service: t, user: a} = e;
                    return t.isLoggedIn() && a.isImpersonating
                }
            }
            function createIsLoggedIn(e) {
                return function isLoggedIn() {
                    const {is2FARoute: t, user: a} = e;
                    return a && a.id && !t()
                }
            }
            function createReportUser(e) {
                return function reportUser(t) {
                    const {callbacks: a, http: s, Router: n} = e;
                    return s.post(n.generate(a.REPORT_USER), t)
                }
            }
            var f = a(2085)
              , k = a(7686);
            var v = a(517)
              , y = a(3510)
              , z = a(6159)
              , x = a(1721)
              , S = Object.defineProperty
              , j = Object.defineProperties
              , T = Object.getOwnPropertyDescriptors
              , C = Object.getOwnPropertySymbols
              , O = Object.prototype.hasOwnProperty
              , A = Object.prototype.propertyIsEnumerable
              , save_board_setting_defNormalProp = (e,t,a)=>t in e ? S(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[t] = a;
            function createSaveBoardSetting(e) {
                return async function saveBoardSetting(t, a) {
                    const s = function createUndoAction(t, a) {
                        const {service: s, update: n} = e
                          , {boardOptions: r} = s.get();
                        return n("boardOptions", (o = ((e,t)=>{
                            for (var a in t || (t = {}))
                                O.call(t, a) && save_board_setting_defNormalProp(e, a, t[a]);
                            if (C)
                                for (var a of C(t))
                                    A.call(t, a) && save_board_setting_defNormalProp(e, a, t[a]);
                            return e
                        }
                        )({}, r),
                        i = {
                            [t]: a
                        },
                        j(o, T(i))));
                        var o, i
                    }(t, a);
                    return function toggleUiClasses(e, t) {
                        "coordinates" === e && function toggleOutsideCoords(e) {
                            (0,
                            f.y)(k.I.BodyClass.OutsideCoords, e)
                        }("outside" === t)
                    }(t, a),
                    Promise.all([createSavePromise(t, a), createSettingsServiceSavePromise(t, a)]).then(e.emitUser).catch((()=>{
                        s(),
                        e.emitUser()
                    }
                    ))
                }
                ;
                function createSavePromise(t, a) {
                    const {actionQueue: s, http: n, Router: r} = e
                      , [o,i] = (0,
                    z.M)(t, a);
                    return s.add(n.post, r.generate(v.f[o]), {
                        action: i
                    })
                }
                function createSettingsServiceSavePromise(e, t) {
                    if (!window.chesscom.features.includes("settings_service_data_sync"))
                        return Promise.resolve();
                    const a = (0,
                    x.R)({
                        [e]: t
                    });
                    return (0,
                    y.z)(a)
                }
            }
            var L = Object.defineProperty
              , N = Object.getOwnPropertySymbols
              , R = Object.prototype.hasOwnProperty
              , P = Object.prototype.propertyIsEnumerable
              , search_username_defNormalProp = (e,t,a)=>t in e ? L(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[t] = a;
            function createSearchUsername(e) {
                return function searchUsername(t, a={}) {
                    const {http: s, routes: n} = e;
                    return s.get(n.usernameSearch(((e,t)=>{
                        for (var a in t || (t = {}))
                            R.call(t, a) && search_username_defNormalProp(e, a, t[a]);
                        if (N)
                            for (var a of N(t))
                                P.call(t, a) && search_username_defNormalProp(e, a, t[a]);
                        return e
                    }
                    )({
                        query: t
                    }, a)))
                }
            }
            function createSet(e) {
                return function set(t, a) {
                    const {user: s} = e;
                    return s ? (s[t] = a,
                    s) : null
                }
            }
            function createSetArchiveView(e) {
                return function setArchiveView(t) {
                    const {emitUser: a, http: s, Router: n, update: r} = e
                      , o = r("archiveView", t);
                    return s.post(n.generate("web_user_callback_set_archive_view"), {
                        archiveView: t
                    }).then(a).catch((()=>{
                        o(),
                        a()
                    }
                    ))
                }
            }
            function createSetFairPlayAgree(e) {
                return function setFairPlayAgree(t) {
                    const {emitUser: a, http: s, Router: n, update: r} = e
                      , o = r("fairPlayAgree", t);
                    return s.post(n.generate("web_user_callback_set_fair_play_agree", {
                        fairPlayAgree: t ? 1 : 0
                    })).then(a).catch((()=>{
                        o(),
                        a()
                    }
                    ))
                }
            }
            function createSetHomeContentType(e) {
                return function setHomeContentType(t) {
                    const {emitUser: a, http: s, Router: n, update: r} = e
                      , o = r("homeContentType", t);
                    return s.post(n.generate("web_user_callback_set_home_recent_content_type"), {
                        recentContentType: t
                    }).then(a).catch((()=>{
                        o(),
                        a()
                    }
                    ))
                }
            }
            function createTrackUser(e) {
                return function trackUser(t) {
                    const {actionQueue: a, CSRFToken: s, http: n, Router: r} = e;
                    return a.add(n.post, r.generate("web_member_callback_track_member", {
                        username: t
                    }), {
                        _token: s
                    })
                }
            }
            function createUnblockUser(e) {
                return function unblockUser(t) {
                    const {actionQueue: a, CSRFToken: s, http: n, Router: r} = e;
                    return a.add(n.post, r.generate("web_member_callback_unblock_member", {
                        username: t
                    }), {
                        _token: s
                    })
                }
            }
            function createUntrackUser(e) {
                return function untrackUser(t) {
                    const {actionQueue: a, CSRFToken: s, http: n, Router: r} = e;
                    return a.add(n.post, r.generate("web_member_callback_untrack_member", {
                        username: t
                    }), {
                        _token: s
                    })
                }
            }
            var I = Object.defineProperty
              , q = Object.getOwnPropertySymbols
              , Z = Object.prototype.hasOwnProperty
              , M = Object.prototype.propertyIsEnumerable
              , service_defNormalProp = (e,t,a)=>t in e ? I(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[t] = a;
            const $ = {
                getToken: function getToken() {
                    return window.context && window.context.csrf && window.context.csrf.token
                }
            };
            const U = function createUserService({cache: e, callbacks: t, CSRF: a, getCurrentUser: n, http: r, includeBoardOptions: o=!1, Router: i, routes: c}) {
                const l = function createQueue(e=!0) {
                    const t = [];
                    let a = !1;
                    return {
                        add: function add(s, ...n) {
                            let r = noop
                              , o = noop;
                            const i = new Promise(((e,t)=>{
                                o = e,
                                r = t
                            }
                            ));
                            return t.push({
                                fn: s,
                                params: n,
                                reject: r,
                                resolve: o
                            }),
                            e && !1 === a && flush(),
                            i
                        },
                        clear: function clear() {
                            a = !1,
                            t.length = 0
                        },
                        flush: flush,
                        getEntries: function getEntries() {
                            return t
                        }
                    };
                    async function flush() {
                        const e = t.shift();
                        if (e) {
                            a = !0;
                            try {
                                const t = await e.fn(...e.params);
                                return e.resolve(t),
                                flush()
                            } catch (s) {
                                e.reject(s)
                            }
                        } else
                            a = !1
                    }
                }(!0)
                  , u = (0,
                w.I)()
                  , d = function getInitialUser() {
                    const t = n()
                      , a = function getDefaultUser() {
                        var e;
                        return {
                            avatarUrl: null == (e = null == window ? void 0 : window.Config) ? void 0 : e.noAvatar,
                            archiveView: "grid",
                            boardOptions: {
                                animationType: "default",
                                boardSize: "auto",
                                boardStyle: "green",
                                coordinates: "inside",
                                darkMode: !0,
                                highlightLegalMoves: !0,
                                highlightMoves: !0,
                                isWhiteOnBottom: !1,
                                moveListDisplayType: "text",
                                moveMethod: "drag",
                                pieceStyle: "neo",
                                playSounds: !0,
                                soundTheme: "default"
                            },
                            country: null,
                            features: {},
                            flag: null,
                            friends: [],
                            homeContentType: "following",
                            isLoggedIn: !1,
                            loading: {
                                friends: !1,
                                opponents: !1
                            },
                            membership: null,
                            opponents: [],
                            rating: null,
                            roles: [],
                            username: ""
                        }
                    }();
                    if (!t)
                        return a;
                    const s = Object.assign({}, a, t);
                    if (!t.isImpersonating) {
                        const t = e.getBoardOptions();
                        Object.keys(t).length && Object.assign(s.boardOptions, function pick(e, t) {
                            return t.reduce(((t,a)=>(Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]),
                            t)), {})
                        }(t, ["animationType", "boardSize", "boardStyle", "coordinates", "darkMode", "highlightLegalMoves", "highlightMoves", "isWhiteOnBottom", "moveListDisplayType", "moveMethod", "pieceStyle", "playSounds", "soundTheme"]))
                    }
                    return s
                }()
                  , h = {
                    actionQueue: l,
                    callbacks: t,
                    CSRFToken: a.getToken(),
                    emitUser: emitUser,
                    http: r,
                    is2FARoute: _.Z,
                    membership: s.p0,
                    Router: i,
                    routes: c,
                    update: function update(t, a) {
                        const s = d[t];
                        return d[t] = a,
                        e.setBoardOptions(a),
                        function undo() {
                            d[t] = s,
                            e.setBoardOptions(s)
                        }
                    },
                    user: d
                }
                  , b = ((e,t)=>{
                    for (var a in t || (t = {}))
                        Z.call(t, a) && service_defNormalProp(e, a, t[a]);
                    if (q)
                        for (var a of q(t))
                            M.call(t, a) && service_defNormalProp(e, a, t[a]);
                    return e
                }
                )({
                    addFriend: createAddFriend(h),
                    approveFriendRequest: createApproveFriendRequest(h),
                    blockUser: createBlockUser(h),
                    cancelFriendRequest: createCancelFriendRequest(h),
                    checkMembershipStatus: createCheckMembershipStatus(h),
                    checkValidUsername: createCheckValidUsername(h),
                    declineFriendRequest: createDeclineFriendRequest(h),
                    deleteFriend: createDeleteFriend(h),
                    dismissFollowSuggestion: createDismissFollowSuggestion(h),
                    eligibleFirstTrial: createEligibleFirstTrial(h),
                    fetchBoardOptions: o ? function fetchBoardOptions() {
                        return (0,
                        _.Z)() ? Promise.resolve() : (0,
                        p.R)().catch(getDefaultBoardOptions)
                    }
                    : void 0,
                    fetchReportReasonsData: createFetchReportReasonsData(h),
                    generateProfileLine: createGenerateProfileLink(h),
                    get: createGet(h),
                    getAvatar: createGetAvatar(h),
                    getFollowSuggestions: createGetFollowSuggestions(h),
                    getFriends: createGetFriends(h),
                    getOpponents: createGetOpponents(h),
                    getRoles: createGetRoles(h),
                    getUser: createGetUser(h),
                    guestUpdateSkillLevel: createGuestUpdateSkillLevel(h),
                    isEnabled: createIsEnabled(h),
                    isImpersonating: createIsImpersonating(h),
                    isLoggedIn: createIsLoggedIn(h),
                    reportUser: createReportUser(h),
                    saveBoardSetting: createSaveBoardSetting(h),
                    searchUsername: createSearchUsername(h),
                    set: createSet(h),
                    setArchiveView: createSetArchiveView(h),
                    setFairPlayAgree: createSetFairPlayAgree(h),
                    setHomeContentType: createSetHomeContentType(h),
                    trackUser: createTrackUser(h),
                    unblockUser: createUnblockUser(h),
                    untrackUser: createUntrackUser(h)
                }, u);
                return async function fetchAndApplyBoardOptions() {
                    if (b.fetchBoardOptions)
                        try {
                            const t = await b.fetchBoardOptions();
                            b.set("boardOptions", t),
                            e.setBoardOptions(t),
                            emitUser()
                        } catch (t) {}
                }(),
                b.acceptFollowSuggestion = b.trackUser,
                h.service = b,
                b;
                function emitUser(e) {
                    u.emit(e, d)
                }
            }({
                callbacks: s.ZC,
                cache: h,
                CSRF: $,
                getCurrentUser: function getUserFromContext() {
                    var e;
                    return null == (e = window.context) ? void 0 : e.user
                },
                http: b.Z,
                Router: m.Z,
                routes: s._j
            });
            var W = U
        },
        8261: function(e, t) {
            "use strict";
            t.Z = {
                GAME_ILLEGAL_MOVE: 100,
                RATING_MAX: 3500,
                RATING_MIN: 0,
                ACTIVE_DAY_CUTOFF: 365,
                TIME_WARNING_SECONDS: 28800,
                MAX_DAY_PER_MOVE: 14,
                TIME_MULTIPLIER: 10,
                DEFAULT_NAME: "Let's Play!",
                WELCOME_NAME: "Welcome to Chess.com!",
                MIN_CHEAT_POLICY_RATING: 2e3,
                MIN_SUSPICIOUS_PLAY_RATING: 2e3,
                MIN_SUSPICIOUS_PLAY_TOGGLE_PERC: 75,
                MIN_SUSPICIOUS_PLAY_PLY_COUNT: 40,
                MIN_PLY_COUNT_RATED: 6,
                SPAM_CHECK_GAMES_MIN_LIMIT: 5,
                SPAM_CHECK_NEW_PLAYERS_GAMES_MIN_LIMIT: 10,
                DEFAULT_FEN_SHORT: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq",
                DEFAULT_FEN: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                ACCESS_LEVEL_SUPER_ADMIN: "super_admin",
                ACCESS_LEVEL_ADMIN: "admin",
                ACCESS_LEVEL_MEMBER: "member",
                ACTIVITY_TYPE_NEWS: "news",
                ACTIVITY_TYPE_EVENT: "event",
                ACTIVITY_TYPE_FORUM: "forum",
                ACTIVITY_TYPE_NOTES: "notes",
                POINT_VALUE: 1,
                LAST_ACTIVITY_DATE_EXPIRATION_IN_MINUTES: 10,
                MAX_PROBLEMS_PER_DAY_DEFAULT: 3,
                AVERAGE_TIME_PER_MOVE: 30,
                MIN_ATTEMPT_COUNT: 20,
                MIN_SCORE_TO_BE_QUEUED: 5,
                BEST_SCORE: 0,
                DEAD_SCORE: 10,
                MIN_RATING: 400,
                MAX_ATTEMPT_LOGGED_OUT: 10,
                USER_FEED_MAX_PAGES: 4,
                USER_FEED_ITEMS_FIRST_PAGE: 5,
                USER_FEED_ITEMS_PER_PAGE: 20,
                STD_PROP_LIST: 1,
                ARRAY_AS_PROPS: 2,
                DEFAULT_LOCALE: "en_US",
                DEFAULT_LANGUAGE_CODE: "en",
                DEFAULT_LANGUAGE_DIRECTION: "ltr",
                DEFAULT_MAX_YEAR_INCREASE: 5,
                CONTENT_ITEMS_PER_PAGE: 25,
                LEADERBOARD_ITEMS_PER_PAGE: 50,
                I18N_DEFAULT_LOCALE: "en_US"
            }
        },
        4356: function(e, t, a) {
            "use strict";
            a.d(t, {
                Jv: function() {
                    return o
                },
                w8: function() {
                    return i
                },
                Sh: function() {
                    return c
                },
                U3: function() {
                    return l
                },
                _j: function() {
                    return u
                },
                wl: function() {
                    return d
                },
                bC: function() {
                    return h
                },
                qQ: function() {
                    return b
                },
                gY: function() {
                    return m
                }
            });
            var s = a(425)
              , n = a(2305)
              , r = a(2898);
            const o = {
                ONBOARD: "Onboard - StartReg",
                SEARCH: "Search",
                NAV_CLICK: "Navclick",
                SEARCH_AUTOFILL: "searchAutoFill"
            }
              , i = {
                CONNECT: "connect",
                HEADER_NOTIFICATION: "header-notification",
                HEADER_SETTINGS: "header-settings",
                HEADER: "header",
                HOME_AWARDS: "home-awards",
                HOME_FREETRIAL: "home-freetrial",
                HOME_HOME: "home-home",
                HOME_LOGOUT: "home-logout",
                HOME_MEMBERSHIP: "home-membership",
                HOME_MESSAGES: "home-messages",
                HOME_PROFILE: "home-profile",
                HOME_STATS: "home-stats",
                HOME: "home",
                LEARN_ANALYSIS: "learn-analysis",
                LEARN_CLASSROOM: "learn-classroom",
                LEARN_ENDGAMES: "learn-endgames",
                LEARN_INSIGHTS: "learn-insights",
                LEARN_LESSONS: "learn-lessons",
                LEARN_OPENINGS: "learn-openings",
                LEARN_PRACTICE: "learn-practice",
                LEARN: "learn",
                MORE_BLOGS: "more-blogs",
                MORE_CHESSKID: "more-chesskid",
                MORE_CHESSTERMS: "more-chessterms",
                MORE_COMPUTERCHAMPIONSHIP: "more-computerchampionship",
                MORE_EXPLORER: "more-explorer",
                MORE_LIBRARY: "more-library",
                MORE_MASTERGAMES: "more-mastergames",
                MORE_MERCH: "more-merch",
                MORE_MOBILEAPPS: "more-mobileapps",
                MORE_RESOURCES: "more-resources",
                MORE_RULES: "more-rules",
                MORE_SHOP: "more-shop",
                MORE_SOLOCHESS: "more-solochess",
                MORE_TOOLS: "more-tools",
                MORE_TREASURE: "more-treasure",
                MORE_VERIFIED: "more-verified",
                MORE_VIDEOS: "more-videos",
                MORE_VISION: "more-vision",
                MORE_VOTECHESS: "more-votechess",
                MORE: "more",
                NEWS_ARTICLES: "news-articles",
                NEWS_CHESSRANKINGS: "news-chessrankings",
                NEWS_CHESSTODAY: "today-chesstoday",
                NEWS_NEWS: "news-news",
                NEWS_TOPPLAYERS: "news-topplayers",
                PLAY_ARCHIVE: "play-archive",
                PLAY_COMPUTER: "play-computer",
                PLAY_LEADERBOARD: "play-leaderboard",
                PLAY_LIVECHESS: "play-livechess",
                PLAY_MYTURN: "play-myturn",
                PLAY_PLAY: "play-play",
                PLAY_TOURNAMENTS: "play-tournaments",
                PLAY_VARIANTS: "play-variants",
                PLAY: "play",
                PUZZLES_CUSTOM: "puzzles-custom",
                PUZZLES_DAILYPUZZLE: "puzzles-dailypuzzle",
                PUZZLES_ENDGAMES: "puzzles-endgames",
                PUZZLES_PUZZLEBATTLE: "puzzles-puzzlebattle",
                PUZZLES_PUZZLERUSH: "puzzles-puzzlerush",
                PUZZLES_PUZZLES: "puzzles-puzzles",
                PUZZLES_RATED: "puzzles-ratedpuzzles",
                PUZZLES: "puzzles",
                SOCIAL_BLOGS: "social-blogs",
                SOCIAL_CHATTAB: "social-chattab",
                SOCIAL_CLUBS: "social-clubs",
                SOCIAL_CLUBSTAB: "social-clubstab",
                SOCIAL_COACHES: "social-coaches",
                SOCIAL_FORUMS: "social-forums",
                SOCIAL_FRIENDS: "social-friends",
                SOCIAL_FRIENDSTAB: "social-friendstab",
                SOCIAL_MEMBERS: "social-members",
                SUBNAV_COLLAPSEEXPAND: "subnav-collapseexpand",
                SUBNAV_HELP_ASKAQUESTION: "subnav-help-askaquestion",
                SUBNAV_HELP_BILLINGISSUES: "subnav-help-billingissues",
                SUBNAV_HELP_MAKEASUGGESTION: "subnav-help-makeasuggestion",
                SUBNAV_HELP_REPORTABUG: "subnav-help-reportabug",
                SUBNAV_HELP_REPORTABUSE: "subnav-help-reportabuse",
                SUBNAV_HELP: "subnav-help",
                SUBNAV_SEARCH_ENTER: "subnav-search-enter",
                SUBNAV_SEARCH: "subnav-search",
                SUBNAV_SETTINGS_ALLSETTINGS: "subnav-settings-allsettings",
                SUBNAV_SETTINGS_BOARDPIECES: "subnav-settings-boardpieces",
                SUBNAV_SETTINGS_LOGOUT: "subnav-settings-logout",
                SUBNAV_SETTINGS_THEME: "subnav-settings-theme",
                SUBNAV_SETTINGS: "subnav-settings",
                TODAY: "today",
                WATCH_CHESSTV: "watch-chesstv",
                WATCH_EVENTS: "watch-events",
                WATCH_PLAYINGNOW: "watch-playingnow",
                WATCH_STREAMERS: "watch-streamers"
            }
              , c = {
                CLOSE: "close",
                COLLAPSED: "collapsed",
                HOVER: "hover",
                NO_REDIRECT: "noredirect",
                OPEN: "open",
                WIDE: "wide"
            }
              , l = {
                CLUB_CHAT_MODERATOR_ACTION: "club-chat-moderator-action",
                MODAL_DID_HIDE: "MODAL_DID_HIDE",
                SEND_NEW_GAME_SEEK: "SEND_NEW_GAME_SEEK",
                SEND_NEW_GAME_SEEK_SUCCESS: "SEND_NEW_GAME_SEEK_SUCCESS",
                SHOW_UPGRADE_MODAL: "SHOW_UPGRADE_MODAL",
                START_DIRECT_CHAT: "START_DIRECT_CHAT"
            }
              , u = {
                registerRoute: e=>s.Z.generate("web_security_register", {
                    redirectUrl: e
                }),
                loginAndGoRoute: e=>s.Z.generate("web_security_login_and_go", {
                    redirectUrl: e
                }),
                searchRoute: e=>s.Z.generate("web_search", {
                    q: e
                }),
                upgradeMembershipUrl: e=>{
                    var t, a;
                    return s.Z.generate("web_membership", {
                        c: null != (t = (0,
                        r.c)().referrer) ? t : e,
                        ref_id: null != (a = (0,
                        r.c)().ref_id) ? a : null
                    })
                }
            }
              , d = {
                HOME_NOTIFICATIONS: "#home-sb-notifications",
                LOGOUT_LINK: "#sb [data-logout-link]",
                MAIN_NAV_SOCIAL_LINK: '#sb [data-nav-link="social"]',
                MAIN_NAV_HOME_LINK: '#sb [data-nav-link="home"]',
                MAIN_NAV_MORE_LINK: '#sb [data-nav-link="more"]',
                MAIN_NAV_PLAY_LINK: '#sb [data-nav-link="play"]',
                MAIN_NAV: "#sb",
                MAIN_TOP_NAV_LINKS: "#sb [data-nav-link]",
                NAV_SETTINGS: "#sb [data-nav-settings]",
                NOTIFICATION_TOASTERS: "#notification-toasters",
                SEARCH_INPUT: 'input[name="q"]',
                TOOLTIP_TRIGGER: "[data-tooltip-content]",
                MAIN_NAV_SOCIAL_PANEL: '[data-nav-panel="social"]',
                MAIN_NAV_LEARN_PANEL: '[data-nav-panel="learn"]',
                MAIN_NAV_MORE_PANEL: '[data-nav-panel="more"]',
                MAIN_NAV_NEWS_PANEL: '[data-nav-panel="news"]',
                MAIN_NAV_PLAY_PANEL: '[data-nav-panel="play"]',
                MAIN_NAV_PUZZLES_PANEL: '[data-nav-panel="puzzles"]',
                MAIN_NAV_TOP: "[data-nav-top]"
            }
              , h = 5
              , b = 3
              , m = {
                storageKey: "dismissedOnboardModalId",
                items: [{
                    label: (0,
                    n.dW)("Game Review"),
                    icon: "coach"
                }, {
                    label: (0,
                    n.dW)("Puzzles"),
                    icon: "puzzles-3d"
                }, {
                    label: (0,
                    n.dW)("Lessons"),
                    icon: "lessons"
                }, {
                    label: (0,
                    n.dW)("Insights"),
                    icon: "idea"
                }]
            }
        },
        6691: function(e, t, a) {
            "use strict";
            a.d(t, {
                b: function() {
                    return amplitudeLogNavClick
                }
            });
            var s = a(7463)
              , n = a(4356);
            function amplitudeLogNavClick(e) {
                "string" == typeof e && s.Z.logEvent(n.Jv.NAV_CLICK, {
                    selection: e
                })
            }
        },
        2185: function(e, t, a) {
            "use strict";
            a.d(t, {
                V: function() {
                    return acceptChallenge
                },
                gy: function() {
                    return actions_declineChallenge
                },
                S1: function() {
                    return init
                }
            });
            var s = a(7427)
              , n = a(425);
            const r = "cancelled"
              , routes_challengeAccept = e=>`${n.Z.generate("web_puzzles_mode", {
                mode: "battle"
            })}#accept=${e}`
              , routes_puzzleBattle = ()=>n.Z.generate("web_puzzles_mode", {
                mode: "battle"
            })
              , o = "register_challenge_toaster_handler"
              , i = "unregister_challenge_toaster_handler";
            var c = a(8096);
            const getUserChallengesChannel = ()=>`battle/challenges/${(0,
            c.gK)("uuid")}`;
            var l = a(9164)
              , u = a(7685);
            var d = function arrayMap(e, t) {
                for (var a = -1, s = null == e ? 0 : e.length, n = Array(s); ++a < s; )
                    n[a] = t(e[a], a, e);
                return n
            }
              , h = a(7771)
              , b = a(2714)
              , m = u.Z ? u.Z.prototype : void 0
              , w = m ? m.toString : void 0;
            var p = function baseToString(e) {
                if ("string" == typeof e)
                    return e;
                if ((0,
                h.Z)(e))
                    return d(e, baseToString) + "";
                if ((0,
                b.Z)(e))
                    return w ? w.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -Infinity ? "-0" : t
            };
            var _ = function toString_toString(e) {
                return null == e ? "" : p(e)
            };
            var g = function baseSlice(e, t, a) {
                var s = -1
                  , n = e.length;
                t < 0 && (t = -t > n ? 0 : n + t),
                (a = a > n ? n : a) < 0 && (a += n),
                n = t > a ? 0 : a - t >>> 0,
                t >>>= 0;
                for (var r = Array(n); ++s < n; )
                    r[s] = e[s + t];
                return r
            };
            var f = function castSlice(e, t, a) {
                var s = e.length;
                return a = void 0 === a ? s : a,
                !t && a >= s ? e : g(e, t, a)
            }
              , k = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            var v = function hasUnicode(e) {
                return k.test(e)
            };
            var y = function asciiToArray(e) {
                return e.split("")
            }
              , z = "[\\ud800-\\udfff]"
              , x = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]"
              , S = "\\ud83c[\\udffb-\\udfff]"
              , j = "[^\\ud800-\\udfff]"
              , T = "(?:\\ud83c[\\udde6-\\uddff]){2}"
              , C = "[\\ud800-\\udbff][\\udc00-\\udfff]"
              , O = "(?:" + x + "|" + S + ")" + "?"
              , A = "[\\ufe0e\\ufe0f]?"
              , L = A + O + ("(?:\\u200d(?:" + [j, T, C].join("|") + ")" + A + O + ")*")
              , N = "(?:" + [j + x + "?", x, T, C, z].join("|") + ")"
              , R = RegExp(S + "(?=" + S + ")|" + N + L, "g");
            var P = function unicodeToArray(e) {
                return e.match(R) || []
            };
            var I = function stringToArray(e) {
                return v(e) ? P(e) : y(e)
            };
            var q = function createCaseFirst(e) {
                return function(t) {
                    t = _(t);
                    var a = v(t) ? I(t) : void 0
                      , s = a ? a[0] : t.charAt(0)
                      , n = a ? f(a, 1).join("") : t.slice(1);
                    return s[e]() + n
                }
            }("toUpperCase");
            var Z = function capitalize(e) {
                return q(_(e).toLowerCase())
            };
            var M = function arrayReduce(e, t, a, s) {
                var n = -1
                  , r = null == e ? 0 : e.length;
                for (s && r && (a = e[++n]); ++n < r; )
                    a = t(a, e[n], n, e);
                return a
            };
            var $ = function basePropertyOf(e) {
                return function(t) {
                    return null == e ? void 0 : e[t]
                }
            }({
                "Ã€": "A",
                "Ã": "A",
                "Ã‚": "A",
                "Ãƒ": "A",
                "Ã„": "A",
                "Ã…": "A",
                "Ã ": "a",
                "Ã¡": "a",
                "Ã¢": "a",
                "Ã£": "a",
                "Ã¤": "a",
                "Ã¥": "a",
                "Ã‡": "C",
                "Ã§": "c",
                "Ã": "D",
                "Ã°": "d",
                "Ãˆ": "E",
                "Ã‰": "E",
                "ÃŠ": "E",
                "Ã‹": "E",
                "Ã¨": "e",
                "Ã©": "e",
                "Ãª": "e",
                "Ã«": "e",
                "ÃŒ": "I",
                "Ã": "I",
                "ÃŽ": "I",
                "Ã": "I",
                "Ã¬": "i",
                "Ã­": "i",
                "Ã®": "i",
                "Ã¯": "i",
                "Ã‘": "N",
                "Ã±": "n",
                "Ã’": "O",
                "Ã“": "O",
                "Ã”": "O",
                "Ã•": "O",
                "Ã–": "O",
                "Ã˜": "O",
                "Ã²": "o",
                "Ã³": "o",
                "Ã´": "o",
                "Ãµ": "o",
                "Ã¶": "o",
                "Ã¸": "o",
                "Ã™": "U",
                "Ãš": "U",
                "Ã›": "U",
                "Ãœ": "U",
                "Ã¹": "u",
                "Ãº": "u",
                "Ã»": "u",
                "Ã¼": "u",
                "Ã": "Y",
                "Ã½": "y",
                "Ã¿": "y",
                "Ã†": "Ae",
                "Ã¦": "ae",
                "Ãž": "Th",
                "Ã¾": "th",
                "ÃŸ": "ss",
                "Ä€": "A",
                "Ä‚": "A",
                "Ä„": "A",
                "Ä": "a",
                "Äƒ": "a",
                "Ä…": "a",
                "Ä†": "C",
                "Äˆ": "C",
                "ÄŠ": "C",
                "ÄŒ": "C",
                "Ä‡": "c",
                "Ä‰": "c",
                "Ä‹": "c",
                "Ä": "c",
                "ÄŽ": "D",
                "Ä": "D",
                "Ä": "d",
                "Ä‘": "d",
                "Ä’": "E",
                "Ä”": "E",
                "Ä–": "E",
                "Ä˜": "E",
                "Äš": "E",
                "Ä“": "e",
                "Ä•": "e",
                "Ä—": "e",
                "Ä™": "e",
                "Ä›": "e",
                "Äœ": "G",
                "Äž": "G",
                "Ä ": "G",
                "Ä¢": "G",
                "Ä": "g",
                "ÄŸ": "g",
                "Ä¡": "g",
                "Ä£": "g",
                "Ä¤": "H",
                "Ä¦": "H",
                "Ä¥": "h",
                "Ä§": "h",
                "Ä¨": "I",
                "Äª": "I",
                "Ä¬": "I",
                "Ä®": "I",
                "Ä°": "I",
                "Ä©": "i",
                "Ä«": "i",
                "Ä­": "i",
                "Ä¯": "i",
                "Ä±": "i",
                "Ä´": "J",
                "Äµ": "j",
                "Ä¶": "K",
                "Ä·": "k",
                "Ä¸": "k",
                "Ä¹": "L",
                "Ä»": "L",
                "Ä½": "L",
                "Ä¿": "L",
                "Å": "L",
                "Äº": "l",
                "Ä¼": "l",
                "Ä¾": "l",
                "Å€": "l",
                "Å‚": "l",
                "Åƒ": "N",
                "Å…": "N",
                "Å‡": "N",
                "ÅŠ": "N",
                "Å„": "n",
                "Å†": "n",
                "Åˆ": "n",
                "Å‹": "n",
                "ÅŒ": "O",
                "ÅŽ": "O",
                "Å": "O",
                "Å": "o",
                "Å": "o",
                "Å‘": "o",
                "Å”": "R",
                "Å–": "R",
                "Å˜": "R",
                "Å•": "r",
                "Å—": "r",
                "Å™": "r",
                "Åš": "S",
                "Åœ": "S",
                "Åž": "S",
                "Å ": "S",
                "Å›": "s",
                "Å": "s",
                "ÅŸ": "s",
                "Å¡": "s",
                "Å¢": "T",
                "Å¤": "T",
                "Å¦": "T",
                "Å£": "t",
                "Å¥": "t",
                "Å§": "t",
                "Å¨": "U",
                "Åª": "U",
                "Å¬": "U",
                "Å®": "U",
                "Å°": "U",
                "Å²": "U",
                "Å©": "u",
                "Å«": "u",
                "Å­": "u",
                "Å¯": "u",
                "Å±": "u",
                "Å³": "u",
                "Å´": "W",
                "Åµ": "w",
                "Å¶": "Y",
                "Å·": "y",
                "Å¸": "Y",
                "Å¹": "Z",
                "Å»": "Z",
                "Å½": "Z",
                "Åº": "z",
                "Å¼": "z",
                "Å¾": "z",
                "Ä²": "IJ",
                "Ä³": "ij",
                "Å’": "Oe",
                "Å“": "oe",
                "Å‰": "'n",
                "Å¿": "s"
            })
              , U = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
              , W = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
            var B = function deburr(e) {
                return (e = _(e)) && e.replace(U, $).replace(W, "")
            }
              , D = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
            var H = function asciiWords(e) {
                return e.match(D) || []
            }
              , F = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            var G = function hasUnicodeWord(e) {
                return F.test(e)
            }
              , V = "\\u2700-\\u27bf"
              , K = "a-z\\xdf-\\xf6\\xf8-\\xff"
              , Y = "A-Z\\xc0-\\xd6\\xd8-\\xde"
              , J = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000"
              , Q = "[" + J + "]"
              , X = "\\d+"
              , ee = "[\\u2700-\\u27bf]"
              , te = "[" + K + "]"
              , ae = "[^\\ud800-\\udfff" + J + X + V + K + Y + "]"
              , se = "(?:\\ud83c[\\udde6-\\uddff]){2}"
              , ne = "[\\ud800-\\udbff][\\udc00-\\udfff]"
              , re = "[" + Y + "]"
              , oe = "(?:" + te + "|" + ae + ")"
              , ie = "(?:" + re + "|" + ae + ")"
              , ce = "(?:['â€™](?:d|ll|m|re|s|t|ve))?"
              , le = "(?:['â€™](?:D|LL|M|RE|S|T|VE))?"
              , ue = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?"
              , de = "[\\ufe0e\\ufe0f]?"
              , he = de + ue + ("(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", se, ne].join("|") + ")" + de + ue + ")*")
              , be = "(?:" + [ee, se, ne].join("|") + ")" + he
              , me = RegExp([re + "?" + te + "+" + ce + "(?=" + [Q, re, "$"].join("|") + ")", ie + "+" + le + "(?=" + [Q, re + oe, "$"].join("|") + ")", re + "?" + oe + "+" + ce, re + "+" + le, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", X, be].join("|"), "g");
            var we = function unicodeWords(e) {
                return e.match(me) || []
            };
            var pe = function words(e, t, a) {
                return e = _(e),
                void 0 === (t = a ? void 0 : t) ? G(e) ? we(e) : H(e) : e.match(t) || []
            }
              , _e = RegExp("['â€™]", "g");
            var ge = function createCompounder(e) {
                return function(t) {
                    return M(pe(B(t).replace(_e, "")), e, "")
                }
            }((function(e, t, a) {
                return t = t.toLowerCase(),
                e + (a ? Z(t) : t)
            }
            ));
            Object.defineProperty,
            Object.defineProperties,
            Object.getOwnPropertyDescriptors,
            Object.getOwnPropertySymbols,
            Object.prototype.hasOwnProperty,
            Object.prototype.propertyIsEnumerable;
            const objectHasProp = (e={},t)=>Object.prototype.hasOwnProperty.call(e, t)
              , propsToCamelCase = e=>{
                const t = {};
                for (const a in e)
                    if (objectHasProp(e, a)) {
                        const s = "object" == typeof e[a] ? propsToCamelCase(e[a]) : e[a];
                        t[ge(a)] = s
                    }
                return t
            }
            ;
            var fe = a(209)
              , ke = a(7074);
            let ve, ye;
            async function init() {
                window.addEventListener("message", onWindowMessage),
                async function actions_fetchChallenges() {
                    const e = await function fetchChallenges() {
                        return ke.Z.get(n.Z.generate("web_tactics_battle_callback_challenge_list", {
                            direction: "incoming"
                        }))
                    }()
                      , {challenges: t} = e.data;
                    t && (fe.N.challenges = t.filter((e=>e.id !== function getExcludedChallengeId() {
                        const e = (t = window.location.hash,
                        t && "#" === t[0] ? (t.match(/[^#&=]+/g) || []).reduce(((e,t,a,s)=>(a % 2 ? e[s[a - 1]] = t : e[t] = null,
                        e)), {}) : {});
                        var t;
                        if (e.accept && window.location.href.includes(routes_puzzleBattle()))
                            return e.accept
                    }())))
                }(),
                ve = await (0,
                l.M)(),
                function initPubsub() {
                    ve.isAttached() ? subscribe() : ve.on(s.z.CONNECT, subscribe);
                    ve.on(`${s.z.MESSAGE}:${getUserChallengesChannel()}`, handleChallengeMessage)
                }()
            }
            function subscribe() {
                ve.subscribe(getUserChallengesChannel())
            }
            function acceptChallenge(e) {
                removeChallengeById(e.id),
                ye ? ye.accept(e) : window.location.href = routes_challengeAccept(e.id)
            }
            function actions_declineChallenge(e) {
                if (removeChallengeById(e.id),
                !ye)
                    return function declineChallenge(e) {
                        return ke.Z.post(n.Z.generate("web_tactics_battle_callback_challenge_deny", {
                            id: e
                        }))
                    }(e.id);
                ye.decline(e)
            }
            function handleChallengeMessage({message: {event: e, challenge: t}}) {
                if (e === r)
                    removeChallengeById(t.id);
                else
                    !function addChallenge(e) {
                        if (ye && !ye.filter(e))
                            return;
                        fe.N.challenges.push(e)
                    }(propsToCamelCase(t))
            }
            function removeChallengeById(e) {
                fe.N.challenges = fe.N.challenges.filter((t=>t.id !== e))
            }
            function onWindowMessage({data: e}) {
                if (null == e ? void 0 : e.event)
                    switch (e.event) {
                    case o:
                        ye = window.chesscom.puzzleBattleChallengeHandler,
                        function filterChallenges() {
                            ye && (fe.N.challenges = fe.N.challenges.filter((e=>ye.filter(e))))
                        }();
                        break;
                    case i:
                        ye = null
                    }
            }
        },
        209: function(e, t, a) {
            "use strict";
            a.d(t, {
                N: function() {
                    return s
                }
            });
            const s = (0,
            a(3992).reactive)({
                challenges: []
            })
        },
        651: function(e, t, a) {
            "use strict";
            function getDefaultState() {
                return {
                    captcha: "",
                    userCaptchaTry: "",
                    errorMessage: "",
                    isSending: !1,
                    hasSent: !1,
                    message: "",
                    user: {
                        avatar_url: "",
                        isFriendable: !1,
                        isMessageable: !0,
                        is_in_livechess: !1,
                        is_online: !1,
                        notMessageableReasonCode: 0,
                        userId: 0,
                        username: ""
                    }
                }
            }
            a.d(t, {
                m: function() {
                    return getDefaultState
                },
                a: function() {
                    return s
                }
            });
            const s = (0,
            a(3992).reactive)({
                captcha: "",
                userCaptchaTry: "",
                errorMessage: "",
                isSending: !1,
                hasSent: !1,
                message: "",
                user: {
                    avatar_url: "",
                    isFriendable: !1,
                    isMessageable: !0,
                    is_in_livechess: !1,
                    is_online: !1,
                    notMessageableReasonCode: 0,
                    userId: 0,
                    username: ""
                }
            })
        },
        1392: function(e, t, a) {
            "use strict";
            a.d(t, {
                w: function() {
                    return s
                }
            });
            const s = (0,
            a(3992).reactive)({
                badges: {
                    alerts: 1,
                    challenges: 0,
                    chatMessages: 0,
                    games: 0,
                    messages: 0
                },
                fetched: !1,
                games: [],
                isFetching: !1,
                isSubscribed: !1,
                notifications: []
            })
        },
        8558: function(e, t, a) {
            "use strict";
            a.d(t, {
                I: function() {
                    return add
                },
                O: function() {
                    return remove
                }
            });
            var s = a(9071)
              , n = Object.defineProperty
              , r = Object.getOwnPropertySymbols
              , o = Object.prototype.hasOwnProperty
              , i = Object.prototype.propertyIsEnumerable
              , __defNormalProp = (e,t,a)=>t in e ? n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: a
            }) : e[t] = a;
            function add(e) {
                const t = ((e,t)=>{
                    for (var a in t || (t = {}))
                        o.call(t, a) && __defNormalProp(e, a, t[a]);
                    if (r)
                        for (var a of r(t))
                            i.call(t, a) && __defNormalProp(e, a, t[a]);
                    return e
                }
                )({
                    closable: !0,
                    id: Date.now()
                }, e);
                if (t.duration && (t.timeoutToRemove = setTimeout((()=>{
                    remove(t.id)
                }
                ), t.duration)),
                s.X.toasters.push(t),
                s.X.toasters.length > 3) {
                    const e = s.X.toasters.shift();
                    (null == e ? void 0 : e.timeoutToRemove) && clearTimeout(e.timeoutToRemove)
                }
            }
            function remove(e) {
                const t = s.X.toasters.findIndex((t=>t.id === e));
                if (-1 === t)
                    return;
                const a = s.X.toasters[t];
                a.timeoutToRemove && clearTimeout(a.timeoutToRemove),
                s.X.toasters.splice(t, 1)
            }
        },
        9071: function(e, t, a) {
            "use strict";
            a.d(t, {
                X: function() {
                    return s
                }
            });
            const s = (0,
            a(3992).reactive)({
                toasters: []
            })
        },
        7681: function(e, t) {
            "use strict";
            t.Z = {
                component: "section-title-dismissible-upd-component",
                name: "section-title-dismissible-upd-name",
                close: "section-title-dismissible-upd-close",
                icon: "section-title-dismissible-upd-icon"
            }
        },
        5174: function(e, t, a) {
            "use strict";
            function createEventEmitter() {
                const e = [];
                return {
                    emit: function emit(t, a) {
                        let s;
                        for (s of e)
                            s.type !== t && "all" !== s.type || s.handler(a)
                    },
                    listeners: e,
                    off: off,
                    offAll: function offAll(e) {
                        return off({
                            handler: e,
                            type: "all"
                        })
                    },
                    offMany: function offMany(e=[]) {
                        e.forEach((e=>off(e)))
                    },
                    on: on,
                    onAll: function onAll(e) {
                        on("all", e)
                    },
                    onMany: function onMany(e=[], t) {
                        e.forEach((e=>on(e, t)))
                    },
                    once: function once(t, a) {
                        const s = {
                            handler: (...e)=>{
                                off(s),
                                a(...e)
                            }
                            ,
                            type: t
                        };
                        e.push(s)
                    }
                };
                function off(t) {
                    const a = e.findIndex((e=>t.type === e.type && t.handler === e.handler));
                    -1 !== a && e.splice(a, 1)
                }
                function on(t, a) {
                    const s = {
                        handler: a,
                        type: t
                    };
                    e.push(s)
                }
            }
            a.d(t, {
                I: function() {
                    return createEventEmitter
                }
            })
        },
        9669: function(e, t, a) {
            e.exports = a(1609)
        },
        5448: function(e, t, a) {
            "use strict";
            var s = a(4867)
              , n = a(6026)
              , r = a(4372)
              , o = a(5327)
              , i = a(4097)
              , c = a(4109)
              , l = a(7985)
              , u = a(5061)
              , d = a(5655)
              , h = a(5263);
            e.exports = function xhrAdapter(e) {
                return new Promise((function dispatchXhrRequest(t, a) {
                    var b, m = e.data, w = e.headers, p = e.responseType;
                    function done() {
                        e.cancelToken && e.cancelToken.unsubscribe(b),
                        e.signal && e.signal.removeEventListener("abort", b)
                    }
                    s.isFormData(m) && delete w["Content-Type"];
                    var _ = new XMLHttpRequest;
                    if (e.auth) {
                        var g = e.auth.username || ""
                          , f = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        w.Authorization = "Basic " + btoa(g + ":" + f)
                    }
                    var k = i(e.baseURL, e.url);
                    function onloadend() {
                        if (_) {
                            var s = "getAllResponseHeaders"in _ ? c(_.getAllResponseHeaders()) : null
                              , r = {
                                data: p && "text" !== p && "json" !== p ? _.response : _.responseText,
                                status: _.status,
                                statusText: _.statusText,
                                headers: s,
                                config: e,
                                request: _
                            };
                            n((function _resolve(e) {
                                t(e),
                                done()
                            }
                            ), (function _reject(e) {
                                a(e),
                                done()
                            }
                            ), r),
                            _ = null
                        }
                    }
                    if (_.open(e.method.toUpperCase(), o(k, e.params, e.paramsSerializer), !0),
                    _.timeout = e.timeout,
                    "onloadend"in _ ? _.onloadend = onloadend : _.onreadystatechange = function handleLoad() {
                        _ && 4 === _.readyState && (0 !== _.status || _.responseURL && 0 === _.responseURL.indexOf("file:")) && setTimeout(onloadend)
                    }
                    ,
                    _.onabort = function handleAbort() {
                        _ && (a(u("Request aborted", e, "ECONNABORTED", _)),
                        _ = null)
                    }
                    ,
                    _.onerror = function handleError() {
                        a(u("Network Error", e, null, _)),
                        _ = null
                    }
                    ,
                    _.ontimeout = function handleTimeout() {
                        var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
                          , s = e.transitional || d.transitional;
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                        a(u(t, e, s.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", _)),
                        _ = null
                    }
                    ,
                    s.isStandardBrowserEnv()) {
                        var v = (e.withCredentials || l(k)) && e.xsrfCookieName ? r.read(e.xsrfCookieName) : void 0;
                        v && (w[e.xsrfHeaderName] = v)
                    }
                    "setRequestHeader"in _ && s.forEach(w, (function setRequestHeader(e, t) {
                        void 0 === m && "content-type" === t.toLowerCase() ? delete w[t] : _.setRequestHeader(t, e)
                    }
                    )),
                    s.isUndefined(e.withCredentials) || (_.withCredentials = !!e.withCredentials),
                    p && "json" !== p && (_.responseType = e.responseType),
                    "function" == typeof e.onDownloadProgress && _.addEventListener("progress", e.onDownloadProgress),
                    "function" == typeof e.onUploadProgress && _.upload && _.upload.addEventListener("progress", e.onUploadProgress),
                    (e.cancelToken || e.signal) && (b = function(e) {
                        _ && (a(!e || e && e.type ? new h("canceled") : e),
                        _.abort(),
                        _ = null)
                    }
                    ,
                    e.cancelToken && e.cancelToken.subscribe(b),
                    e.signal && (e.signal.aborted ? b() : e.signal.addEventListener("abort", b))),
                    m || (m = null),
                    _.send(m)
                }
                ))
            }
        },
        1609: function(e, t, a) {
            "use strict";
            var s = a(4867)
              , n = a(1849)
              , r = a(321)
              , o = a(7185);
            var i = function createInstance(e) {
                var t = new r(e)
                  , a = n(r.prototype.request, t);
                return s.extend(a, r.prototype, t),
                s.extend(a, t),
                a.create = function create(t) {
                    return createInstance(o(e, t))
                }
                ,
                a
            }(a(5655));
            i.Axios = r,
            i.Cancel = a(5263),
            i.CancelToken = a(4972),
            i.isCancel = a(6502),
            i.VERSION = a(7288).version,
            i.all = function all(e) {
                return Promise.all(e)
            }
            ,
            i.spread = a(8713),
            i.isAxiosError = a(6268),
            e.exports = i,
            e.exports.default = i
        },
        5263: function(e) {
            "use strict";
            function Cancel(e) {
                this.message = e
            }
            Cancel.prototype.toString = function toString() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }
            ,
            Cancel.prototype.__CANCEL__ = !0,
            e.exports = Cancel
        },
        4972: function(e, t, a) {
            "use strict";
            var s = a(5263);
            function CancelToken(e) {
                if ("function" != typeof e)
                    throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function promiseExecutor(e) {
                    t = e
                }
                ));
                var a = this;
                this.promise.then((function(e) {
                    if (a._listeners) {
                        var t, s = a._listeners.length;
                        for (t = 0; t < s; t++)
                            a._listeners[t](e);
                        a._listeners = null
                    }
                }
                )),
                this.promise.then = function(e) {
                    var t, s = new Promise((function(e) {
                        a.subscribe(e),
                        t = e
                    }
                    )).then(e);
                    return s.cancel = function reject() {
                        a.unsubscribe(t)
                    }
                    ,
                    s
                }
                ,
                e((function cancel(e) {
                    a.reason || (a.reason = new s(e),
                    t(a.reason))
                }
                ))
            }
            CancelToken.prototype.throwIfRequested = function throwIfRequested() {
                if (this.reason)
                    throw this.reason
            }
            ,
            CancelToken.prototype.subscribe = function subscribe(e) {
                this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
            }
            ,
            CancelToken.prototype.unsubscribe = function unsubscribe(e) {
                if (this._listeners) {
                    var t = this._listeners.indexOf(e);
                    -1 !== t && this._listeners.splice(t, 1)
                }
            }
            ,
            CancelToken.source = function source() {
                var e;
                return {
                    token: new CancelToken((function executor(t) {
                        e = t
                    }
                    )),
                    cancel: e
                }
            }
            ,
            e.exports = CancelToken
        },
        6502: function(e) {
            "use strict";
            e.exports = function isCancel(e) {
                return !(!e || !e.__CANCEL__)
            }
        },
        321: function(e, t, a) {
            "use strict";
            var s = a(4867)
              , n = a(5327)
              , r = a(782)
              , o = a(3572)
              , i = a(7185)
              , c = a(4875)
              , l = c.validators;
            function Axios(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new r,
                    response: new r
                }
            }
            Axios.prototype.request = function request(e, t) {
                if ("string" == typeof e ? (t = t || {}).url = e : t = e || {},
                !t.url)
                    throw new Error("Provided config url is not valid");
                (t = i(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                var a = t.transitional;
                void 0 !== a && c.assertOptions(a, {
                    silentJSONParsing: l.transitional(l.boolean),
                    forcedJSONParsing: l.transitional(l.boolean),
                    clarifyTimeoutError: l.transitional(l.boolean)
                }, !1);
                var s = []
                  , n = !0;
                this.interceptors.request.forEach((function unshiftRequestInterceptors(e) {
                    "function" == typeof e.runWhen && !1 === e.runWhen(t) || (n = n && e.synchronous,
                    s.unshift(e.fulfilled, e.rejected))
                }
                ));
                var r, u = [];
                if (this.interceptors.response.forEach((function pushResponseInterceptors(e) {
                    u.push(e.fulfilled, e.rejected)
                }
                )),
                !n) {
                    var d = [o, void 0];
                    for (Array.prototype.unshift.apply(d, s),
                    d = d.concat(u),
                    r = Promise.resolve(t); d.length; )
                        r = r.then(d.shift(), d.shift());
                    return r
                }
                for (var h = t; s.length; ) {
                    var b = s.shift()
                      , m = s.shift();
                    try {
                        h = b(h)
                    } catch (w) {
                        m(w);
                        break
                    }
                }
                try {
                    r = o(h)
                } catch (w) {
                    return Promise.reject(w)
                }
                for (; u.length; )
                    r = r.then(u.shift(), u.shift());
                return r
            }
            ,
            Axios.prototype.getUri = function getUri(e) {
                if (!e.url)
                    throw new Error("Provided config url is not valid");
                return e = i(this.defaults, e),
                n(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }
            ,
            s.forEach(["delete", "get", "head", "options"], (function forEachMethodNoData(e) {
                Axios.prototype[e] = function(t, a) {
                    return this.request(i(a || {}, {
                        method: e,
                        url: t,
                        data: (a || {}).data
                    }))
                }
            }
            )),
            s.forEach(["post", "put", "patch"], (function forEachMethodWithData(e) {
                Axios.prototype[e] = function(t, a, s) {
                    return this.request(i(s || {}, {
                        method: e,
                        url: t,
                        data: a
                    }))
                }
            }
            )),
            e.exports = Axios
        },
        782: function(e, t, a) {
            "use strict";
            var s = a(4867);
            function InterceptorManager() {
                this.handlers = []
            }
            InterceptorManager.prototype.use = function use(e, t, a) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!a && a.synchronous,
                    runWhen: a ? a.runWhen : null
                }),
                this.handlers.length - 1
            }
            ,
            InterceptorManager.prototype.eject = function eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            ,
            InterceptorManager.prototype.forEach = function forEach(e) {
                s.forEach(this.handlers, (function forEachHandler(t) {
                    null !== t && e(t)
                }
                ))
            }
            ,
            e.exports = InterceptorManager
        },
        4097: function(e, t, a) {
            "use strict";
            var s = a(1793)
              , n = a(7303);
            e.exports = function buildFullPath(e, t) {
                return e && !s(t) ? n(e, t) : t
            }
        },
        5061: function(e, t, a) {
            "use strict";
            var s = a(481);
            e.exports = function createError(e, t, a, n, r) {
                var o = new Error(e);
                return s(o, t, a, n, r)
            }
        },
        3572: function(e, t, a) {
            "use strict";
            var s = a(4867)
              , n = a(8527)
              , r = a(6502)
              , o = a(5655)
              , i = a(5263);
            function throwIfCancellationRequested(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(),
                e.signal && e.signal.aborted)
                    throw new i("canceled")
            }
            e.exports = function dispatchRequest(e) {
                return throwIfCancellationRequested(e),
                e.headers = e.headers || {},
                e.data = n.call(e, e.data, e.headers, e.transformRequest),
                e.headers = s.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
                s.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function cleanHeaderConfig(t) {
                    delete e.headers[t]
                }
                )),
                (e.adapter || o.adapter)(e).then((function onAdapterResolution(t) {
                    return throwIfCancellationRequested(e),
                    t.data = n.call(e, t.data, t.headers, e.transformResponse),
                    t
                }
                ), (function onAdapterRejection(t) {
                    return r(t) || (throwIfCancellationRequested(e),
                    t && t.response && (t.response.data = n.call(e, t.response.data, t.response.headers, e.transformResponse))),
                    Promise.reject(t)
                }
                ))
            }
        },
        481: function(e) {
            "use strict";
            e.exports = function enhanceError(e, t, a, s, n) {
                return e.config = t,
                a && (e.code = a),
                e.request = s,
                e.response = n,
                e.isAxiosError = !0,
                e.toJSON = function toJSON() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }
                ,
                e
            }
        },
        7185: function(e, t, a) {
            "use strict";
            var s = a(4867);
            e.exports = function mergeConfig(e, t) {
                t = t || {};
                var a = {};
                function getMergedValue(e, t) {
                    return s.isPlainObject(e) && s.isPlainObject(t) ? s.merge(e, t) : s.isPlainObject(t) ? s.merge({}, t) : s.isArray(t) ? t.slice() : t
                }
                function mergeDeepProperties(a) {
                    return s.isUndefined(t[a]) ? s.isUndefined(e[a]) ? void 0 : getMergedValue(void 0, e[a]) : getMergedValue(e[a], t[a])
                }
                function valueFromConfig2(e) {
                    if (!s.isUndefined(t[e]))
                        return getMergedValue(void 0, t[e])
                }
                function defaultToConfig2(a) {
                    return s.isUndefined(t[a]) ? s.isUndefined(e[a]) ? void 0 : getMergedValue(void 0, e[a]) : getMergedValue(void 0, t[a])
                }
                function mergeDirectKeys(a) {
                    return a in t ? getMergedValue(e[a], t[a]) : a in e ? getMergedValue(void 0, e[a]) : void 0
                }
                var n = {
                    url: valueFromConfig2,
                    method: valueFromConfig2,
                    data: valueFromConfig2,
                    baseURL: defaultToConfig2,
                    transformRequest: defaultToConfig2,
                    transformResponse: defaultToConfig2,
                    paramsSerializer: defaultToConfig2,
                    timeout: defaultToConfig2,
                    timeoutMessage: defaultToConfig2,
                    withCredentials: defaultToConfig2,
                    adapter: defaultToConfig2,
                    responseType: defaultToConfig2,
                    xsrfCookieName: defaultToConfig2,
                    xsrfHeaderName: defaultToConfig2,
                    onUploadProgress: defaultToConfig2,
                    onDownloadProgress: defaultToConfig2,
                    decompress: defaultToConfig2,
                    maxContentLength: defaultToConfig2,
                    maxBodyLength: defaultToConfig2,
                    transport: defaultToConfig2,
                    httpAgent: defaultToConfig2,
                    httpsAgent: defaultToConfig2,
                    cancelToken: defaultToConfig2,
                    socketPath: defaultToConfig2,
                    responseEncoding: defaultToConfig2,
                    validateStatus: mergeDirectKeys
                };
                return s.forEach(Object.keys(e).concat(Object.keys(t)), (function computeConfigValue(e) {
                    var t = n[e] || mergeDeepProperties
                      , r = t(e);
                    s.isUndefined(r) && t !== mergeDirectKeys || (a[e] = r)
                }
                )),
                a
            }
        },
        6026: function(e, t, a) {
            "use strict";
            var s = a(5061);
            e.exports = function settle(e, t, a) {
                var n = a.config.validateStatus;
                a.status && n && !n(a.status) ? t(s("Request failed with status code " + a.status, a.config, null, a.request, a)) : e(a)
            }
        },
        8527: function(e, t, a) {
            "use strict";
            var s = a(4867)
              , n = a(5655);
            e.exports = function transformData(e, t, a) {
                var r = this || n;
                return s.forEach(a, (function transform(a) {
                    e = a.call(r, e, t)
                }
                )),
                e
            }
        },
        5655: function(e, t, a) {
            "use strict";
            var s = a(4155)
              , n = a(4867)
              , r = a(6016)
              , o = a(481)
              , i = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function setContentTypeIfUnset(e, t) {
                !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var c = {
                transitional: {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                adapter: function getDefaultAdapter() {
                    var e;
                    return ("undefined" != typeof XMLHttpRequest || void 0 !== s && "[object process]" === Object.prototype.toString.call(s)) && (e = a(5448)),
                    e
                }(),
                transformRequest: [function transformRequest(e, t) {
                    return r(t, "Accept"),
                    r(t, "Content-Type"),
                    n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (setContentTypeIfUnset(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()) : n.isObject(e) || t && "application/json" === t["Content-Type"] ? (setContentTypeIfUnset(t, "application/json"),
                    function stringifySafely(e, t, a) {
                        if (n.isString(e))
                            try {
                                return (t || JSON.parse)(e),
                                n.trim(e)
                            } catch (s) {
                                if ("SyntaxError" !== s.name)
                                    throw s
                            }
                        return (a || JSON.stringify)(e)
                    }(e)) : e
                }
                ],
                transformResponse: [function transformResponse(e) {
                    var t = this.transitional || c.transitional
                      , a = t && t.silentJSONParsing
                      , s = t && t.forcedJSONParsing
                      , r = !a && "json" === this.responseType;
                    if (r || s && n.isString(e) && e.length)
                        try {
                            return JSON.parse(e)
                        } catch (i) {
                            if (r) {
                                if ("SyntaxError" === i.name)
                                    throw o(i, this, "E_JSON_PARSE");
                                throw i
                            }
                        }
                    return e
                }
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function validateStatus(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            n.forEach(["delete", "get", "head"], (function forEachMethodNoData(e) {
                c.headers[e] = {}
            }
            )),
            n.forEach(["post", "put", "patch"], (function forEachMethodWithData(e) {
                c.headers[e] = n.merge(i)
            }
            )),
            e.exports = c
        },
        7288: function(e) {
            e.exports = {
                version: "0.25.0"
            }
        },
        1849: function(e) {
            "use strict";
            e.exports = function bind(e, t) {
                return function wrap() {
                    for (var a = new Array(arguments.length), s = 0; s < a.length; s++)
                        a[s] = arguments[s];
                    return e.apply(t, a)
                }
            }
        },
        5327: function(e, t, a) {
            "use strict";
            var s = a(4867);
            function encode(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function buildURL(e, t, a) {
                if (!t)
                    return e;
                var n;
                if (a)
                    n = a(t);
                else if (s.isURLSearchParams(t))
                    n = t.toString();
                else {
                    var r = [];
                    s.forEach(t, (function serialize(e, t) {
                        null != e && (s.isArray(e) ? t += "[]" : e = [e],
                        s.forEach(e, (function parseValue(e) {
                            s.isDate(e) ? e = e.toISOString() : s.isObject(e) && (e = JSON.stringify(e)),
                            r.push(encode(t) + "=" + encode(e))
                        }
                        )))
                    }
                    )),
                    n = r.join("&")
                }
                if (n) {
                    var o = e.indexOf("#");
                    -1 !== o && (e = e.slice(0, o)),
                    e += (-1 === e.indexOf("?") ? "?" : "&") + n
                }
                return e
            }
        },
        7303: function(e) {
            "use strict";
            e.exports = function combineURLs(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        },
        4372: function(e, t, a) {
            "use strict";
            var s = a(4867);
            e.exports = s.isStandardBrowserEnv() ? function standardBrowserEnv() {
                return {
                    write: function write(e, t, a, n, r, o) {
                        var i = [];
                        i.push(e + "=" + encodeURIComponent(t)),
                        s.isNumber(a) && i.push("expires=" + new Date(a).toGMTString()),
                        s.isString(n) && i.push("path=" + n),
                        s.isString(r) && i.push("domain=" + r),
                        !0 === o && i.push("secure"),
                        document.cookie = i.join("; ")
                    },
                    read: function read(e) {
                        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove: function remove(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                }
            }() : {
                write: function write() {},
                read: function read() {
                    return null
                },
                remove: function remove() {}
            }
        },
        1793: function(e) {
            "use strict";
            e.exports = function isAbsoluteURL(e) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
            }
        },
        6268: function(e, t, a) {
            "use strict";
            var s = a(4867);
            e.exports = function isAxiosError(e) {
                return s.isObject(e) && !0 === e.isAxiosError
            }
        },
        7985: function(e, t, a) {
            "use strict";
            var s = a(4867);
            e.exports = s.isStandardBrowserEnv() ? function standardBrowserEnv() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a");
                function resolveURL(e) {
                    var s = e;
                    return t && (a.setAttribute("href", s),
                    s = a.href),
                    a.setAttribute("href", s),
                    {
                        href: a.href,
                        protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
                        host: a.host,
                        search: a.search ? a.search.replace(/^\?/, "") : "",
                        hash: a.hash ? a.hash.replace(/^#/, "") : "",
                        hostname: a.hostname,
                        port: a.port,
                        pathname: "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname
                    }
                }
                return e = resolveURL(window.location.href),
                function isURLSameOrigin(t) {
                    var a = s.isString(t) ? resolveURL(t) : t;
                    return a.protocol === e.protocol && a.host === e.host
                }
            }() : function isURLSameOrigin() {
                return !0
            }
        },
        6016: function(e, t, a) {
            "use strict";
            var s = a(4867);
            e.exports = function normalizeHeaderName(e, t) {
                s.forEach(e, (function processHeader(a, s) {
                    s !== t && s.toUpperCase() === t.toUpperCase() && (e[t] = a,
                    delete e[s])
                }
                ))
            }
        },
        4109: function(e, t, a) {
            "use strict";
            var s = a(4867)
              , n = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function parseHeaders(e) {
                var t, a, r, o = {};
                return e ? (s.forEach(e.split("\n"), (function parser(e) {
                    if (r = e.indexOf(":"),
                    t = s.trim(e.substr(0, r)).toLowerCase(),
                    a = s.trim(e.substr(r + 1)),
                    t) {
                        if (o[t] && n.indexOf(t) >= 0)
                            return;
                        o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([a]) : o[t] ? o[t] + ", " + a : a
                    }
                }
                )),
                o) : o
            }
        },
        8713: function(e) {
            "use strict";
            e.exports = function spread(e) {
                return function wrap(t) {
                    return e.apply(null, t)
                }
            }
        },
        4875: function(e, t, a) {
            "use strict";
            var s = a(7288).version
              , n = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                n[e] = function validator(a) {
                    return typeof a === e || "a" + (t < 1 ? "n " : " ") + e
                }
            }
            ));
            var r = {};
            n.transitional = function transitional(e, t, a) {
                function formatMessage(e, t) {
                    return "[Axios v" + s + "] Transitional option '" + e + "'" + t + (a ? ". " + a : "")
                }
                return function(a, s, n) {
                    if (!1 === e)
                        throw new Error(formatMessage(s, " has been removed" + (t ? " in " + t : "")));
                    return t && !r[s] && (r[s] = !0,
                    console.warn(formatMessage(s, " has been deprecated since v" + t + " and will be removed in the near future"))),
                    !e || e(a, s, n)
                }
            }
            ,
            e.exports = {
                assertOptions: function assertOptions(e, t, a) {
                    if ("object" != typeof e)
                        throw new TypeError("options must be an object");
                    for (var s = Object.keys(e), n = s.length; n-- > 0; ) {
                        var r = s[n]
                          , o = t[r];
                        if (o) {
                            var i = e[r]
                              , c = void 0 === i || o(i, r, e);
                            if (!0 !== c)
                                throw new TypeError("option " + r + " must be " + c)
                        } else if (!0 !== a)
                            throw Error("Unknown option " + r)
                    }
                },
                validators: n
            }
        },
        4867: function(e, t, a) {
            "use strict";
            var s = a(1849)
              , n = Object.prototype.toString;
            function isArray(e) {
                return Array.isArray(e)
            }
            function isUndefined(e) {
                return void 0 === e
            }
            function isArrayBuffer(e) {
                return "[object ArrayBuffer]" === n.call(e)
            }
            function isObject(e) {
                return null !== e && "object" == typeof e
            }
            function isPlainObject(e) {
                if ("[object Object]" !== n.call(e))
                    return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
            function isFunction(e) {
                return "[object Function]" === n.call(e)
            }
            function forEach(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]),
                    isArray(e))
                        for (var a = 0, s = e.length; a < s; a++)
                            t.call(null, e[a], a, e);
                    else
                        for (var n in e)
                            Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
            }
            e.exports = {
                isArray: isArray,
                isArrayBuffer: isArrayBuffer,
                isBuffer: function isBuffer(e) {
                    return null !== e && !isUndefined(e) && null !== e.constructor && !isUndefined(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function isFormData(e) {
                    return "[object FormData]" === n.call(e)
                },
                isArrayBufferView: function isArrayBufferView(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && isArrayBuffer(e.buffer)
                },
                isString: function isString(e) {
                    return "string" == typeof e
                },
                isNumber: function isNumber(e) {
                    return "number" == typeof e
                },
                isObject: isObject,
                isPlainObject: isPlainObject,
                isUndefined: isUndefined,
                isDate: function isDate(e) {
                    return "[object Date]" === n.call(e)
                },
                isFile: function isFile(e) {
                    return "[object File]" === n.call(e)
                },
                isBlob: function isBlob(e) {
                    return "[object Blob]" === n.call(e)
                },
                isFunction: isFunction,
                isStream: function isStream(e) {
                    return isObject(e) && isFunction(e.pipe)
                },
                isURLSearchParams: function isURLSearchParams(e) {
                    return "[object URLSearchParams]" === n.call(e)
                },
                isStandardBrowserEnv: function isStandardBrowserEnv() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                },
                forEach: forEach,
                merge: function merge() {
                    var e = {};
                    function assignValue(t, a) {
                        isPlainObject(e[a]) && isPlainObject(t) ? e[a] = merge(e[a], t) : isPlainObject(t) ? e[a] = merge({}, t) : isArray(t) ? e[a] = t.slice() : e[a] = t
                    }
                    for (var t = 0, a = arguments.length; t < a; t++)
                        forEach(arguments[t], assignValue);
                    return e
                },
                extend: function extend(e, t, a) {
                    return forEach(t, (function assignValue(t, n) {
                        e[n] = a && "function" == typeof t ? s(t, a) : t
                    }
                    )),
                    e
                },
                trim: function trim(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function stripBOM(e) {
                    return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
                    e
                }
            }
        },
        6077: function(e, t, a) {
            "use strict";
            a.d(t, {
                s: function() {
                    return render
                },
                x: function() {
                    return s
                }
            });
            var render = function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    class: e.$style.component
                }, [a("span", {
                    class: e.$style.name
                }, [e._t("default")], 2), e._v(" "), a("button", {
                    class: e.$style.close,
                    attrs: {
                        type: "button",
                        "aria-label": e.$trans("Close")
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("close")
                        }
                    }
                }, [a("span", {
                    staticClass: "icon-font-chess x",
                    class: e.$style.icon
                })])])
            }
              , s = []
        },
        4155: function(e) {
            var t, a, s = e.exports = {};
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined")
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined")
            }
            function runTimeout(e) {
                if (t === setTimeout)
                    return setTimeout(e, 0);
                if ((t === defaultSetTimout || !t) && setTimeout)
                    return t = setTimeout,
                    setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (a) {
                    try {
                        return t.call(null, e, 0)
                    } catch (a) {
                        return t.call(this, e, 0)
                    }
                }
            }
            !function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
                } catch (e) {
                    t = defaultSetTimout
                }
                try {
                    a = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
                } catch (e) {
                    a = defaultClearTimeout
                }
            }();
            var n, r = [], o = !1, i = -1;
            function cleanUpNextTick() {
                o && n && (o = !1,
                n.length ? r = n.concat(r) : i = -1,
                r.length && drainQueue())
            }
            function drainQueue() {
                if (!o) {
                    var e = runTimeout(cleanUpNextTick);
                    o = !0;
                    for (var t = r.length; t; ) {
                        for (n = r,
                        r = []; ++i < t; )
                            n && n[i].run();
                        i = -1,
                        t = r.length
                    }
                    n = null,
                    o = !1,
                    function runClearTimeout(e) {
                        if (a === clearTimeout)
                            return clearTimeout(e);
                        if ((a === defaultClearTimeout || !a) && clearTimeout)
                            return a = clearTimeout,
                            clearTimeout(e);
                        try {
                            return a(e)
                        } catch (t) {
                            try {
                                return a.call(null, e)
                            } catch (t) {
                                return a.call(this, e)
                            }
                        }
                    }(e)
                }
            }
            function Item(e, t) {
                this.fun = e,
                this.array = t
            }
            function noop() {}
            s.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var a = 1; a < arguments.length; a++)
                        t[a - 1] = arguments[a];
                r.push(new Item(e,t)),
                1 !== r.length || o || runTimeout(drainQueue)
            }
            ,
            Item.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            s.title = "browser",
            s.browser = !0,
            s.env = {},
            s.argv = [],
            s.version = "",
            s.versions = {},
            s.on = noop,
            s.addListener = noop,
            s.once = noop,
            s.off = noop,
            s.removeListener = noop,
            s.removeAllListeners = noop,
            s.emit = noop,
            s.prependListener = noop,
            s.prependOnceListener = noop,
            s.listeners = function(e) {
                return []
            }
            ,
            s.binding = function(e) {
                throw new Error("process.binding is not supported")
            }
            ,
            s.cwd = function() {
                return "/"
            }
            ,
            s.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            s.umask = function() {
                return 0
            }
        },
        4279: function(e) {
            function E() {}
            E.prototype = {
                on: function(e, t, a) {
                    var s = this.e || (this.e = {});
                    return (s[e] || (s[e] = [])).push({
                        fn: t,
                        ctx: a
                    }),
                    this
                },
                once: function(e, t, a) {
                    var s = this;
                    function listener() {
                        s.off(e, listener),
                        t.apply(a, arguments)
                    }
                    return listener._ = t,
                    this.on(e, listener, a)
                },
                emit: function(e) {
                    for (var t = [].slice.call(arguments, 1), a = ((this.e || (this.e = {}))[e] || []).slice(), s = 0, n = a.length; s < n; s++)
                        a[s].fn.apply(a[s].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var a = this.e || (this.e = {})
                      , s = a[e]
                      , n = [];
                    if (s && t)
                        for (var r = 0, o = s.length; r < o; r++)
                            s[r].fn !== t && s[r].fn._ !== t && n.push(s[r]);
                    return n.length ? a[e] = n : delete a[e],
                    this
                }
            },
            e.exports = E,
            e.exports.TinyEmitter = E
        },
        4752: function(e) {
            e.exports = function uid(e) {
                return e = e || 7,
                Math.random().toString(35).substr(2, e)
            }
        },
        4886: function(e, t, a) {
            "use strict";
            var s = a(6077)
              , n = a(4069)
              , r = a(7327);
            var o = (0,
            a(1900).Z)(n.Z, s.s, s.x, !1, (function injectStyles(e) {
                this.$style = r.Z.locals || r.Z
            }
            ), null, null);
            t.Z = o.exports
        },
        3349: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return i
                }
            });
            var s = a(6910)
              , n = a(7203)
              , r = {
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
                    s.n)("bundles/web/images/user-image.svg")
                }),
                computed: {
                    avatarSrcset() {
                        return this.failedSrcSet ? null : (0,
                        n.b)(this.avatarUrl)
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
              , o = {
                component: "avatar-component"
            };
            var i = (0,
            a(1900).Z)(r, (function() {
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
                this.$style = o.locals || o
            }
            ), null, null).exports
        },
        9685: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return r
                }
            });
            var s = {
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
              , n = {
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
            var r = (0,
            a(1900).Z)(s, (function() {
                var e, t = this, a = t.$createElement;
                return (t._self._c || a)(t.isClickable ? "a" : "span", {
                    tag: "component",
                    class: [t.$style.component, t.$style[t.theme], (e = {},
                    e[t.$style.link] = t.isClickable,
                    e)],
                    attrs: {
                        href: t.isClickable ? t.url : null,
                        target: t.getTargetIfClickable
                    },
                    domProps: {
                        textContent: t._s(t.username)
                    }
                })
            }
            ), [], !1, (function injectStyles(e) {
                this.$style = n.locals || n
            }
            ), null, null).exports
        },
        3324: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return r
                }
            });
            var s = (0,
            a(3992).defineComponent)({
                name: "ThreeLoadBounce",
                props: {
                    theme: String
                }
            })
              , n = {
                component: "three-load-bounce-component",
                dot: "three-load-bounce-dot",
                dark: "three-load-bounce-dark",
                light: "three-load-bounce-light",
                right: "three-load-bounce-right",
                animate: "three-load-bounce-animate",
                bounce1: "three-load-bounce-bounce1",
                bounce2: "three-load-bounce-bounce2"
            };
            var r = (0,
            a(1900).Z)(s, (function() {
                var e = this
                  , t = e.$createElement
                  , a = e._self._c || t;
                return a("div", {
                    class: [e.$style.component, e.$style[e.theme]]
                }, [a("div", {
                    class: [e.$style.dot, e.$style.bounce1]
                }), e._v(" "), a("div", {
                    class: [e.$style.dot, e.$style.bounce2]
                }), e._v(" "), a("div", {
                    class: e.$style.dot
                })])
            }
            ), [], !1, (function injectStyles(e) {
                this.$style = n.locals || n
            }
            ), null, null).exports
        },
        4069: function(e, t, a) {
            "use strict";
            var s = a(2293);
            t.Z = s.Z
        },
        7327: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return s.Z
                }
            });
            var s = a(7681)
        },
        1900: function(e, t, a) {
            "use strict";
            function normalizeComponent(e, t, a, s, n, r, o, i) {
                var c, l = "function" == typeof e ? e.options : e;
                if (t && (l.render = t,
                l.staticRenderFns = a,
                l._compiled = !0),
                s && (l.functional = !0),
                r && (l._scopeId = "data-v-" + r),
                o ? (c = function(e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                    n && n.call(this, e),
                    e && e._registeredComponents && e._registeredComponents.add(o)
                }
                ,
                l._ssrRegister = c) : n && (c = i ? function() {
                    n.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot)
                }
                : n),
                c)
                    if (l.functional) {
                        l._injectStyles = c;
                        var u = l.render;
                        l.render = function renderWithStyleInjection(e, t) {
                            return c.call(t),
                            u(e, t)
                        }
                    } else {
                        var d = l.beforeCreate;
                        l.beforeCreate = d ? [].concat(d, c) : [c]
                    }
                return {
                    exports: e,
                    options: l
                }
            }
            a.d(t, {
                Z: function() {
                    return normalizeComponent
                }
            })
        },
        2439: function(e, t, a) {
            e.exports = a(4474)(110)
        },
        6437: function(e, t, a) {
            e.exports = a(4474)(279)
        },
        9402: function(e, t, a) {
            e.exports = a(4474)(475)
        },
        3992: function(e, t, a) {
            e.exports = a(4474)(866)
        },
        2009: function(e, t, a) {
            e.exports = a(4474)(883)
        },
        4474: function(e) {
            "use strict";
            e.exports = vueDLL
        },
        7685: function(e, t, a) {
            "use strict";
            var s = a(6092).Z.Symbol;
            t.Z = s
        },
        7668: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return u
                }
            });
            var s = function baseTimes(e, t) {
                for (var a = -1, s = Array(e); ++a < e; )
                    s[a] = t(a);
                return s
            }
              , n = a(9169)
              , r = a(7771)
              , o = a(7008)
              , i = a(6009)
              , c = a(8843)
              , l = Object.prototype.hasOwnProperty;
            var u = function arrayLikeKeys(e, t) {
                var a = (0,
                r.Z)(e)
                  , u = !a && (0,
                n.Z)(e)
                  , d = !a && !u && (0,
                o.Z)(e)
                  , h = !a && !u && !d && (0,
                c.Z)(e)
                  , b = a || u || d || h
                  , m = b ? s(e.length, String) : []
                  , w = m.length;
                for (var p in e)
                    !t && !l.call(e, p) || b && ("length" == p || d && ("offset" == p || "parent" == p) || h && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || (0,
                    i.Z)(p, w)) || m.push(p);
                return m
            }
        },
        1395: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return s
                }
            });
            var s = function createBaseFor(e) {
                return function(t, a, s) {
                    for (var n = -1, r = Object(t), o = s(t), i = o.length; i--; ) {
                        var c = o[e ? i : ++n];
                        if (!1 === a(r[c], c, r))
                            break
                    }
                    return t
                }
            }()
        },
        3589: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return h
                }
            });
            var s = a(7685)
              , n = Object.prototype
              , r = n.hasOwnProperty
              , o = n.toString
              , i = s.Z ? s.Z.toStringTag : void 0;
            var c = function getRawTag(e) {
                var t = r.call(e, i)
                  , a = e[i];
                try {
                    e[i] = void 0;
                    var s = !0
                } catch (c) {}
                var n = o.call(e);
                return s && (t ? e[i] = a : delete e[i]),
                n
            }
              , l = Object.prototype.toString;
            var u = function objectToString(e) {
                return l.call(e)
            }
              , d = s.Z ? s.Z.toStringTag : void 0;
            var h = function baseGetTag(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : d && d in Object(e) ? c(e) : u(e)
            }
        },
        1162: function(e, t) {
            "use strict";
            t.Z = function baseUnary(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        3413: function(e, t) {
            "use strict";
            var a = "object" == typeof global && global && global.Object === Object && global;
            t.Z = a
        },
        6009: function(e, t) {
            "use strict";
            var a = /^(?:0|[1-9]\d*)$/;
            t.Z = function isIndex(e, t) {
                var s = typeof e;
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == s || "symbol" != s && a.test(e)) && e > -1 && e % 1 == 0 && e < t
            }
        },
        2764: function(e, t) {
            "use strict";
            var a = Object.prototype;
            t.Z = function isPrototype(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || a)
            }
        },
        8351: function(e, t, a) {
            "use strict";
            var s = a(3413)
              , n = "object" == typeof exports && exports && !exports.nodeType && exports
              , r = n && "object" == typeof module && module && !module.nodeType && module
              , o = r && r.exports === n && s.Z.process
              , i = function() {
                try {
                    var e = r && r.require && r.require("util").types;
                    return e || o && o.binding && o.binding("util")
                } catch (t) {}
            }();
            t.Z = i
        },
        1851: function(e, t) {
            "use strict";
            t.Z = function overArg(e, t) {
                return function(a) {
                    return e(t(a))
                }
            }
        },
        6092: function(e, t, a) {
            "use strict";
            var s = a(3413)
              , n = "object" == typeof self && self && self.Object === Object && self
              , r = s.Z || n || Function("return this")();
            t.Z = r
        },
        9203: function(e, t) {
            "use strict";
            t.Z = function identity(e) {
                return e
            }
        },
        9169: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return u
                }
            });
            var s = a(3589)
              , n = a(8533);
            var r = function baseIsArguments(e) {
                return (0,
                n.Z)(e) && "[object Arguments]" == (0,
                s.Z)(e)
            }
              , o = Object.prototype
              , i = o.hasOwnProperty
              , c = o.propertyIsEnumerable
              , l = r(function() {
                return arguments
            }()) ? r : function(e) {
                return (0,
                n.Z)(e) && i.call(e, "callee") && !c.call(e, "callee")
            }
              , u = l
        },
        7771: function(e, t) {
            "use strict";
            var a = Array.isArray;
            t.Z = a
        },
        585: function(e, t, a) {
            "use strict";
            var s = a(3234)
              , n = a(1656);
            t.Z = function isArrayLike(e) {
                return null != e && (0,
                n.Z)(e.length) && !(0,
                s.Z)(e)
            }
        },
        7008: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return c
                }
            });
            var s = a(6092);
            var n = function stubFalse() {
                return !1
            }
              , r = "object" == typeof exports && exports && !exports.nodeType && exports
              , o = r && "object" == typeof module && module && !module.nodeType && module
              , i = o && o.exports === r ? s.Z.Buffer : void 0
              , c = (i ? i.isBuffer : void 0) || n
        },
        3234: function(e, t, a) {
            "use strict";
            var s = a(3589)
              , n = a(7226);
            t.Z = function isFunction(e) {
                if (!(0,
                n.Z)(e))
                    return !1;
                var t = (0,
                s.Z)(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        1656: function(e, t) {
            "use strict";
            t.Z = function isLength(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        },
        7226: function(e, t) {
            "use strict";
            t.Z = function isObject(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        8533: function(e, t) {
            "use strict";
            t.Z = function isObjectLike(e) {
                return null != e && "object" == typeof e
            }
        },
        2714: function(e, t, a) {
            "use strict";
            var s = a(3589)
              , n = a(8533);
            t.Z = function isSymbol(e) {
                return "symbol" == typeof e || (0,
                n.Z)(e) && "[object Symbol]" == (0,
                s.Z)(e)
            }
        },
        8843: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return d
                }
            });
            var s = a(3589)
              , n = a(1656)
              , r = a(8533)
              , o = {};
            o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0,
            o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
            var i = function baseIsTypedArray(e) {
                return (0,
                r.Z)(e) && (0,
                n.Z)(e.length) && !!o[(0,
                s.Z)(e)]
            }
              , c = a(1162)
              , l = a(8351)
              , u = l.Z && l.Z.isTypedArray
              , d = u ? (0,
            c.Z)(u) : i
        },
        4329: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return l
                }
            });
            var s = a(7668)
              , n = a(2764)
              , r = (0,
            a(1851).Z)(Object.keys, Object)
              , o = Object.prototype.hasOwnProperty;
            var i = function baseKeys(e) {
                if (!(0,
                n.Z)(e))
                    return r(e);
                var t = [];
                for (var a in Object(e))
                    o.call(e, a) && "constructor" != a && t.push(a);
                return t
            }
              , c = a(585);
            var l = function keys(e) {
                return (0,
                c.Z)(e) ? (0,
                s.Z)(e) : i(e)
            }
        }
    }, d = {};
    function __webpack_require__(e) {
        var t = d[e];
        if (void 0 !== t)
            return t.exports;
        var a = d[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return u[e].call(a.exports, a, a.exports, __webpack_require__),
        a.loaded = !0,
        a.exports
    }
    __webpack_require__.m = u,
    __webpack_require__.amdO = {},
    __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return __webpack_require__.d(t, {
            a: t
        }),
        t
    }
    ,
    t = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    __webpack_require__.t = function(a, s) {
        if (1 & s && (a = this(a)),
        8 & s)
            return a;
        if ("object" == typeof a && a) {
            if (4 & s && a.__esModule)
                return a;
            if (16 & s && "function" == typeof a.then)
                return a
        }
        var n = Object.create(null);
        __webpack_require__.r(n);
        var r = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var o = 2 & s && a; "object" == typeof o && !~e.indexOf(o); o = t(o))
            Object.getOwnPropertyNames(o).forEach((function(e) {
                r[e] = function() {
                    return a[e]
                }
            }
            ));
        return r.default = function() {
            return a
        }
        ,
        __webpack_require__.d(n, r),
        n
    }
    ,
    __webpack_require__.d = function(e, t) {
        for (var a in t)
            __webpack_require__.o(t, a) && !__webpack_require__.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
    }
    ,
    __webpack_require__.f = {},
    __webpack_require__.e = function(e) {
        return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t, a) {
            return __webpack_require__.f[a](e, t),
            t
        }
        ), []))
    }
    ,
    __webpack_require__.u = function(e) {
        return 48 === e ? "web.chunk.client.cf8a60c9.js" : 790 === e ? "web.chunk.client.57b42de2.js" : 849 === e ? "web.chunk.client.d9a720cc.js" : 435 === e ? "guest-modal.chunk.client.d47e1662.js" : 820 === e ? "web.chunk.client.9d792d88.js" : 180 === e ? "web.chunk.client.4dae7f0a.js" : 326 === e ? "web.chunk.client.644069e8.js" : 776 === e ? "web.chunk.client.57702b80.js" : 657 === e ? "web.chunk.client.eb8e2fec.js" : 761 === e ? "web.chunk.client.606ca806.js" : 908 === e ? "web.chunk.client.a0458e92.js" : 520 === e ? "web.chunk.client.ca3a874e.js" : 392 === e ? "web.chunk.client.14737f14.js" : 757 === e ? "web.chunk.client.a56153b7.js" : void 0
    }
    ,
    __webpack_require__.miniCssF = function(e) {
        return 384 === e ? "navigation.client.fd5f0bc0.css" : 849 === e ? "web.chunk.client.349155f9.css" : 435 === e ? "guest-modal.chunk.client.a6000603.css" : 180 === e ? "web.chunk.client.433dbb16.css" : 326 === e ? "web.chunk.client.aa5c2c04.css" : 776 === e ? "web.chunk.client.8cf27621.css" : 657 === e ? "web.chunk.client.738cbb14.css" : 761 === e ? "web.chunk.client.28edc6bb.css" : 908 === e ? "web.chunk.client.e6c9aac1.css" : 520 === e ? "web.chunk.client.f53c96bd.css" : 392 === e ? "web.chunk.client.80585f1f.css" : 757 === e ? "web.chunk.client.1162b874.css" : void 0
    }
    ,
    __webpack_require__.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    __webpack_require__.hmd = function(e) {
        return (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function() {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }),
        e
    }
    ,
    __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    a = {},
    s = "client:",
    __webpack_require__.l = function(e, t, n, r) {
        if (a[e])
            a[e].push(t);
        else {
            var o, i;
            if (void 0 !== n)
                for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                    var u = c[l];
                    if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == s + n) {
                        o = u;
                        break
                    }
                }
            o || (i = !0,
            (o = document.createElement("script")).charset = "utf-8",
            o.timeout = 120,
            __webpack_require__.nc && o.setAttribute("nonce", __webpack_require__.nc),
            o.setAttribute("data-webpack", s + n),
            o.src = e),
            a[e] = [t];
            var onScriptComplete = function(t, s) {
                o.onerror = o.onload = null,
                clearTimeout(d);
                var n = a[e];
                if (delete a[e],
                o.parentNode && o.parentNode.removeChild(o),
                n && n.forEach((function(e) {
                    return e(s)
                }
                )),
                t)
                    return t(s)
            }
              , d = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
            o.onerror = onScriptComplete.bind(null, o.onerror),
            o.onload = onScriptComplete.bind(null, o.onload),
            i && document.head.appendChild(o)
        }
    }
    ,
    __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    __webpack_require__.p = "/bundles/app/js/",
    n = __webpack_require__.u,
    r = __webpack_require__.e,
    o = new Map,
    i = new Map,
    __webpack_require__.u = function(e) {
        return n(e) + (o.has(e) ? "?" + o.get(e) : "")
    }
    ,
    __webpack_require__.e = function(e) {
        return r(e).catch((function(t) {
            var a = i.has(e) ? i.get(e) : 2;
            if (a < 1) {
                var s = n(e);
                throw t.message = "Loading chunk " + e + " failed after 2 retries.\n(" + s + ")",
                t.request = s,
                t
            }
            return new Promise((function(t) {
                setTimeout((function() {
                    var s = "cache-bust=true&retry-attempt=" + (2 - a + 1);
                    o.set(e, s),
                    i.set(e, a - 1),
                    t(__webpack_require__.e(e))
                }
                ), 0)
            }
            ))
        }
        ))
    }
    ,
    c = function(e) {
        return new Promise((function(t, a) {
            var s = __webpack_require__.miniCssF(e)
              , n = window.__CHESSCOM_RTL__
              , r = "/bundles/app/css/" + s;
            if (function(e, t) {
                for (var a = document.getElementsByTagName("link"), s = 0; s < a.length; s++) {
                    var n = (o = a[s]).getAttribute("data-href") || o.getAttribute("href");
                    if ("stylesheet" === o.rel && (n === e || n === t))
                        return o
                }
                var r = document.getElementsByTagName("style");
                for (s = 0; s < r.length; s++) {
                    var o;
                    if ((n = (o = r[s]).getAttribute("data-href")) === e || n === t)
                        return o
                }
            }(s, r))
                return t();
            n && (r = r.replace(/\.css/i, ".rtl.css")),
            function(e, t, a, s) {
                var n = document.createElement("link");
                n.rel = "stylesheet",
                n.type = "text/css",
                n.onerror = n.onload = function(r) {
                    if (n.onerror = n.onload = null,
                    "load" === r.type)
                        a();
                    else {
                        var o = r && ("load" === r.type ? "missing" : r.type)
                          , i = r && r.target && r.target.href || t
                          , c = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                        c.code = "CSS_CHUNK_LOAD_FAILED",
                        c.type = o,
                        c.request = i,
                        n.parentNode.removeChild(n),
                        s(c)
                    }
                }
                ,
                n.href = t,
                document.head.appendChild(n)
            }(e, r, t, a)
        }
        ))
    }
    ,
    l = {
        384: 0
    },
    __webpack_require__.f.miniCss = function(e, t) {
        l[e] ? t.push(l[e]) : 0 !== l[e] && {
            180: 1,
            326: 1,
            392: 1,
            435: 1,
            520: 1,
            657: 1,
            757: 1,
            761: 1,
            776: 1,
            849: 1,
            908: 1
        }[e] && t.push(l[e] = c(e).then((function() {
            l[e] = 0
        }
        ), (function(t) {
            throw delete l[e],
            t
        }
        )))
    }
    ,
    function() {
        var e = {
            384: 0
        };
        __webpack_require__.f.j = function(t, a) {
            var s = __webpack_require__.o(e, t) ? e[t] : void 0;
            if (0 !== s)
                if (s)
                    a.push(s[2]);
                else {
                    var n = new Promise((function(a, n) {
                        s = e[t] = [a, n]
                    }
                    ));
                    a.push(s[2] = n);
                    var r = __webpack_require__.p + __webpack_require__.u(t)
                      , o = new Error;
                    __webpack_require__.l(r, (function(a) {
                        if (__webpack_require__.o(e, t) && (0 !== (s = e[t]) && (e[t] = void 0),
                        s)) {
                            var n = a && ("load" === a.type ? "missing" : a.type)
                              , r = a && a.target && a.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + n + ": " + r + ")",
                            o.name = "ChunkLoadError",
                            o.type = n,
                            o.request = r,
                            s[1](o)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var webpackJsonpCallback = function(t, a) {
            var s, n, r = a[0], o = a[1], i = a[2], c = 0;
            if (r.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (s in o)
                    __webpack_require__.o(o, s) && (__webpack_require__.m[s] = o[s]);
                if (i)
                    i(__webpack_require__)
            }
            for (t && t(a); c < r.length; c++)
                n = r[c],
                __webpack_require__.o(e, n) && e[n] && e[n][0](),
                e[n] = 0
        }
          , t = ("undefined" != typeof self ? self : this).wpChessCom_pB3B = ("undefined" != typeof self ? self : this).wpChessCom_pB3B || [];
        t.forEach(webpackJsonpCallback.bind(null, 0)),
        t.push = webpackJsonpCallback.bind(null, t.push.bind(t))
    }(),
    function() {
        "use strict"
    }(),
    function() {
        "use strict";
        var e = __webpack_require__(7074)
          , t = __webpack_require__(425);
        const updateAchievementDesc = e=>{
            if (!e.match(/(.*?)\[(.*?)\]\((.*?)\)/))
                return e;
            const [t,a,s,n] = e.split(/[\[\]\(\)]/).filter((e=>e));
            return `${t} <a target="_blank" href="${s}">${a}</a>${n}`
        }
          , a = "data-badge-count"
          , s = "data-badge-text"
          , n = "data-badge"
          , r = "data-constant-message-unread-count-max"
          , o = "data-notifications-limit"
          , i = "NOTIFICATIONS_FETCHED"
          , c = "SHOW_MESSAGE_MODAL"
          , l = {
            ACHIEVMENTS: "user_achievements",
            ARENA_TROPHY: "user_arena_trophy",
            CHALLENGE: "game_seek",
            CLUB_FORUM_UPDATE: "user_group_forum_new",
            CLUB_FORUM: "user_group_forum",
            CLUB_NEWS_UPDATE: "user_group_news_new",
            CLUB_NEWS: "user_group_news",
            CLUB_NOTE: "user_group_note",
            COMMENT: "new_comment",
            CONTENT: "has_new_content",
            FRIEND_ACTIVITY: "friend_activity",
            FRIEND_REQUEST: "friend_request",
            GAME: "game",
            GAMES_DRAW_OFFERED: "game_draw_offered",
            GAMES_LOW_TIME: "game_low_time",
            GAMES_MESSAGE: "game_message",
            GAMES_STARTED: "game_started",
            GROUP_ACTIVITY: "user_group_activity",
            GROUP_REQUEST: "user_group_request",
            NOTE: "user_comment",
            OFFLINE_CHALLENGE: "offline_challenges",
            TEAM_LIVE_COMPETITION: "team_live_competition",
            TEAM_MATCH: "team_match_game",
            TOURNAMENT: "tournament_game",
            TROPHY: "user_trophy",
            VOTE_CHESS_GAME: "votechess_game",
            INSIGHTS: "insights"
        }
          , u = "web_achievement_callback_delete_new_achievements"
          , d = "web_friend_count_online_friends_callback"
          , h = "web_user_callback_navigation_data"
          , b = "web_friend_accept_request_callback"
          , m = "web_friend_decline_request_callback"
          , w = "web_alert_callback_ignore_offline_challenge"
          , p = "web_alert_callback_alerts"
          , _ = "web_user_callback_notices"
          , g = "web_alert_callback_ignore_achievement"
          , f = "web_alert_callback_ignore_comment"
          , k = "web_alert_callback_ignore_new_comments"
          , v = "web_alert_callback_ignore_new_content"
          , y = "web_alert_callback_ignore_all"
          , z = "web_alert_callback_ignore"
          , x = "web_club_callback_manage_user_group_request"
          , S = "web_user_callback_username_search"
          , j = "web_tv_callback_get_announcement"
          , T = "pubapi_player_clubs"
          , C = "pubapi_navbar_panels_watch"
          , O = "#sb [data-badge]"
          , A = "#message-modal";
        const L = [];
        [a=>{
            if (a.headers["x-chesscom-achievement-award"]) {
                const s = JSON.parse(a.headers["x-chesscom-achievement-award"]);
                s.forEach((e=>{
                    L.includes(e.code) || (window.toaster.add({
                        achievementUrl: e.image_url,
                        clicked: ()=>{
                            const {username: a} = window.context.user
                              , s = e.code.startsWith("book_") ? "web_awards_books" : "web_awards_achievements";
                            window.location.href = `${t.Z.generate(s, {
                                username: a
                            })}#achievement_${e.code}`
                        }
                        ,
                        content: `<strong>${e.name}</strong><br/>${updateAchievementDesc(e.description)}`,
                        duration: 5e3,
                        settings: e=>{
                            e.stopPropagation(),
                            window.location.href = t.Z.generate("web_user_settings_notifications")
                        }
                    }),
                    L.push(e.code))
                }
                )),
                s.length && (!function deleteAchievements() {
                    const a = t.Z.generate(u);
                    return e.Z.delete(a)
                }(),
                s.length = 0)
            }
            return a
        }
        ].forEach((t=>e.Z.interceptors.response.use(t, (e=>Promise.reject(e)))));
        const N = {
            de: "4ab3867c-ae14-4c9f-9c71-0845a6ead933",
            en: "f5e62c4f-e67c-4a7e-84fb-ff86cff9ceac",
            es: "ca72a765-6436-4601-b205-bc7f36248177",
            fr: "32c36bce-c9c1-4788-8fb3-c04e817d0a59",
            ka: "ea9675c3-40a8-400c-aa88-620552131fff",
            it: "ca6633b4-6b8c-4f3c-a448-3ca298aa7ff7",
            nl: "4c50f1dc-58fc-4458-9df8-9db2bd5fbbab",
            pl: "281954ca-ab13-4660-9e3a-996ce54b77a0",
            pt: "c5cf1f87-b558-44ef-a103-08edc509d0e2",
            ru: "6c5d280e-28f0-4889-9723-32cd976a4d77",
            tr: "56658742-0c0a-4bad-92fa-d3afd9f27c5d",
            uk: "f260e4ff-c20d-4156-aa15-e538c86eb191"
        }
          , R = {
            GUEST_USER: "Guest"
        }
          , P = 17218
          , I = 17219;
        var q = __webpack_require__(8096)
          , Z = __webpack_require__(992);
        const configureHelpScout = ()=>{
            const e = window.context.user
              , t = window.context.i18n.locale.split("_")[0]
              , a = N[t] ? N[t] : N.en;
            var s;
            window.Beacon("init", a),
            window.Beacon("open"),
            window.BeaconVisible = !0,
            e && window.Beacon("identify", {
                name: e.username
            }),
            window.Beacon("prefill", {
                fields: [{
                    id: P,
                    value: e ? (s = (0,
                    q.$j)(e.membershipLevel),
                    "string" == typeof s ? s.toLowerCase().replace(/(?:^|\s|-)\S/g, (e=>e.toUpperCase())) : s) : R.GUEST_USERNAME
                }, {
                    id: I,
                    value: e ? e.username : R.GUEST_USERNAME
                }]
            }),
            window.Beacon("config", {
                display: {
                    zIndex: 9001
                }
            }),
            window.Beacon("on", "close", (()=>{
                window.Beacon("destroy"),
                window.BeaconVisible = !1
            }
            ))
        }
          , showHelpScout = ()=>{
            if (window.crossOriginIsolated)
                return void window.open(Z._j.support, "_blank");
            if (void 0 !== window.Beacon)
                return void (window.BeaconVisible || configureHelpScout());
            window.Beacon = (e,t,a)=>{
                window.Beacon.readyQueue.push({
                    method: e,
                    options: t,
                    data: a
                })
            }
            ,
            window.Beacon.readyQueue = [];
            const e = document.getElementsByTagName("head")[0]
              , t = document.createElement("script");
            t.type = "text/javascript",
            t.src = "//beacon-v2.helpscout.net",
            e.appendChild(t),
            configureHelpScout()
        }
        ;
        [...document.querySelectorAll(".help-scout")].forEach((e=>e.addEventListener("click", showHelpScout)));
        const M = {}
          , hasFeatureAccess = e=>{
            var t, a;
            return !!(null == (a = null == (t = window.chesscom) ? void 0 : t.features) ? void 0 : a.includes(e)) || Boolean(M[e])
        }
        ;
        var $ = __webpack_require__(8508)
          , U = __webpack_require__(6883);
        const W = "1bc2b6c0-7c78-406c-90b8-ff2c29e3bf58";
        function showWidget() {
            window.Usersnap.show(W).then((e=>e.open()))
        }
        const showUserSnap = ()=>{
            (function fetchTraceData() {
                return e.Z.get("https://www.chess.com/cdn-cgi/trace")
            }
            )().then((e=>{
                window.traceData = e.data
            }
            )).finally((()=>{
                if (void 0 === window.Usersnap) {
                    if (!hasFeatureAccess("usersnap_console_logger")) {
                        const e = document.getElementsByTagName("head")[0]
                          , t = document.createElement("script");
                        t.type = "text/javascript",
                        t.src = "//widget.usersnap.com/global/load/e8122a5e-b494-4aa2-b150-56648d6aca48?onload=onUsersnapLoad",
                        e.appendChild(t)
                    }
                } else
                    showWidget()
            }
            ))
        }
        ;
        null == window.onUsersnapLoad && (window.onUsersnapLoad = e=>{
            const t = Date.now();
            e.on("open", (e=>{
                (0,
                U.V)(3);
                const a = {
                    branch: window.context.branch,
                    chessboardBeta: window.context.chessboardBeta,
                    commit: window.context.commit,
                    cookies: window.context.cookies,
                    devicePixelRatio: window.devicePixelRatio,
                    environment: window.context.environment,
                    ip: window.context.ip,
                    locale: window.context.locale,
                    requestId: window.context.requestId,
                    server: window.context.server,
                    version: window.context.version
                };
                if (window.context.user) {
                    const e = window.context.live ? "207506" : "198358";
                    a.sentryLink = `https://sentry.io/organizations/chesscom/issues/?project=${e}&query=${t}`,
                    a.user = {
                        username: window.context.user.username,
                        optedBeta: window.context.user.optedBeta,
                        isStaff: window.context.user.isStaff,
                        isPremium: window.context.user.isPremium
                    },
                    window.context.user.cohort && (a.user.cohort = window.context.user.cohort),
                    window.context.live && (a.live = window.context.live)
                }
                window.context.play && (a.play = window.context.play),
                window.chesscom && window.chesscom.logData && (a.logData = window.chesscom.logData),
                window.traceData && (a.traceData = window.traceData.trim().split("\n")),
                window.context.chessboardOptionsByVersion && (a.chessboardOptions = [],
                Object.keys(window.context.chessboardOptionsByVersion).forEach((e=>{
                    a.chessboardOptions.push({
                        version: e,
                        options: window.context.chessboardOptionsByVersion[e]
                    })
                }
                ))),
                e.api.setValue("custom", a)
            }
            )),
            e.on("submit", (()=>{
                setTimeout((()=>{
                    !function hideWidget() {
                        window.Usersnap.show(W).then((e=>e.close()))
                    }(),
                    (0,
                    $.T)(`usersnap report submitted: https://chesscom.atlassian.net/issues/?jql=text+~+"${t}"+AND+reporter+in+(usersnap)+ORDER+BY+created+DESC`)
                }
                ), 1e3)
            }
            )),
            e.init({
                button: null,
                label: null,
                assignee: null,
                title: null,
                colors: {
                    primary: "#769656",
                    secondary: "#878787"
                },
                fields: {
                    email: {
                        label: "Your email address",
                        required: !1
                    },
                    comment: {
                        label: "Your suggestion or bug report",
                        multiline: !0,
                        required: !0
                    }
                }
            }),
            window.Usersnap = e,
            hasFeatureAccess("usersnap_console_logger") || showWidget()
        }
        ),
        hasFeatureAccess("usersnap_console_logger") && function loadUserSnap() {
            window.addEventListener("load", (()=>{
                const e = document.getElementsByTagName("head")[0]
                  , t = document.createElement("script");
                t.type = "text/javascript",
                t.src = "//widget.usersnap.com/global/load/e8122a5e-b494-4aa2-b150-56648d6aca48?onload=onUsersnapLoad",
                e.appendChild(t)
            }
            ))
        }();
        const B = document.querySelectorAll(".user-snap");
        Array.from(B).forEach((e=>e.addEventListener("click", showUserSnap)));
        var D = __webpack_require__(4694)
          , H = __webpack_require__(4657)
          , F = __webpack_require__(6691);
        var G = __webpack_require__(7463);
        (0,
        H.U)(D.wl.AMPLITUDE_NAV_SELECTION).forEach((e=>{
            e.addEventListener("click", (()=>{
                e.dataset.amplitudeNavSelection && (0,
                F.b)(e.dataset.amplitudeNavSelection)
            }
            ))
        }
        )),
        (0,
        H.U)(D.wl.SEARCH_INPUT).forEach((e=>{
            var t;
            null == (t = null == e ? void 0 : e.form) || t.addEventListener("submit", (()=>{
                G.Z.logEvent(D.Jv.SEARCH, {
                    searchTerm: e.value
                })
            }
            ))
        }
        )),
        (0,
        H.U)(D.wl.SIGN_UP).forEach((e=>{
            e.addEventListener("click", (()=>{
                const t = JSON.parse(e.getAttribute(D.Y4.amplitudeProps));
                G.Z.logEvent(D.Jv.ONBOARD, t)
            }
            ))
        }
        ));
        var V = __webpack_require__(4356);
        function submitLogoutForm() {
            document.querySelector("[data-logout-form]").submit()
        }
        const onClick = e=>{
            e.preventDefault(),
            submitLogoutForm()
        }
          , K = document.querySelectorAll(V.wl.LOGOUT_LINK);
        Array.from(K).forEach((e=>e.addEventListener("click", onClick)));
        var Y = __webpack_require__(1392);
        window.addEventListener("message", (({data: e})=>{
            var t;
            if (e.key === D.U3.HIDE_FRIEND_REQUEST) {
                const a = null == (t = Y.w.notifications) ? void 0 : t.find((e=>e.type.id === l.FRIEND_REQUEST));
                a && (a.notifications = a.notifications.filter((t=>t.userId !== e.id)))
            }
        }
        ));
        var J = __webpack_require__(2793);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        (0,
        J.eN)() && __webpack_require__.e(849).then(__webpack_require__.bind(__webpack_require__, 4892)).then((e=>e.loadOldBrowserModal()));
        var Q = __webpack_require__(8246)
          , X = __webpack_require__(2220);
        const ee = window.context
          , isLoggedIn = ()=>Boolean(ee && ee.user) && !(0,
        X.Z)();
        var te = __webpack_require__(3992)
          , ae = __webpack_require__(2439);
        function renderRootComponent({component: e, on: t, props: a, router: s, plugins: n, target: r}) {
            const o = (0,
            te.ref)(!1);
            let i = null;
            null == n || n.forEach((e=>ae.default.use(e)));
            return {
                hide: ()=>o.value = !1,
                show: ()=>{
                    o.value = !0,
                    i || (i = new ae.default({
                        render: s=>o.value && s(e, {
                            props: a,
                            on: t
                        }),
                        router: s
                    }).$mount(r))
                }
            }
        }
        var se = __webpack_require__(9164)
          , ne = __webpack_require__(9816);
        const re = "top"
          , oe = "right"
          , ie = "bottom"
          , ce = "left"
          , le = "bottom-left"
          , positionTooltip = (e,t,a,s=0)=>{
            if (!e || !t)
                return null;
            const n = ((e,t,a,s=0)=>{
                if (!e || !t)
                    return null;
                const n = e.getBoundingClientRect()
                  , r = {}
                  , o = window.innerWidth - n.x
                  , canFitTop = ()=>n.top - (t.clientHeight + s) > 0
                  , canFitLeft = ()=>n.left - (t.clientWidth + s) > 0;
                return a === re && canFitTop() || a === ie && !(n.bottom + t.clientHeight + s < window.innerHeight) ? (r.left = n.left - (t.clientWidth - n.width) / 2,
                r.rtlLeft = o - t.clientWidth / 2 - n.width / 2,
                r.top = n.top - t.clientHeight - s,
                r.placement = re) : a === ie || a === re && !canFitTop() ? (r.left = n.left - (t.clientWidth - n.width) / 2,
                r.rtlLeft = o - t.clientWidth / 2 - n.width / 2,
                r.top = n.bottom + s,
                r.placement = ie) : a === ce && canFitLeft() || a === oe && !(n.right + t.clientWidth + s < window.innerWidth) ? (r.left = n.left - t.clientWidth - s,
                r.rtlLeft = n.rtlLeft - t.clientWidth - s,
                r.top = n.top - (t.clientHeight - n.height) / 2,
                r.placement = ce) : a === oe || a === ce && !canFitLeft() ? (r.left = n.right + s,
                r.rtlLeft = n.rtlLeft + s,
                r.top = n.top - (t.clientHeight - n.height) / 2,
                r.placement = oe) : a === le && (r.left = n.right - n.width / 2 - t.clientWidth - s,
                r.rtlLeft = n.rtlLeft - t.clientWidth - s,
                r.top = n.bottom + s,
                r.placement = le),
                {
                    left: Math.round(r.left),
                    placement: r.placement,
                    rtlLeft: Math.round(r.rtlLeft),
                    top: Math.round(r.top)
                }
            }
            )(e, t, a, s);
            return "rtl" === document.querySelector("html").getAttribute("dir") ? t.style.transform = `translate(-${n.rtlLeft}px, ${n.top}px)` : t.style.transform = `translate(${n.left}px, ${n.top}px)`,
            t.classList.add(n.placement),
            t
        }
        ;
        function isNull(e) {
            return null === e
        }
        function isUndefined(e) {
            return void 0 === e
        }
        function isObject(e) {
            return !isNull(e) && "object" == typeof e
        }
        var ue = {
            isString: e=>"string" == typeof e,
            isFunction: e=>"function" == typeof e,
            isNumber: e=>"number" == typeof e,
            isNil: e=>isNull(e) || isUndefined(e),
            isObject: isObject,
            isPlainObject: e=>!!isObject(e) && (e.constructor && "Object" === e.constructor.name),
            isArray: e=>Array.isArray(e),
            isError(e) {
                if (!isObject(e))
                    return !1;
                const t = Object.prototype.toString.call(e);
                return "[object Error]" === t || "[object DOMException]" === t
            },
            isUndefined: isUndefined
        };
        const getValue = (e,t)=>ue.isString(t) && ue.isObject(e) ? e[t] : ue.isFunction(t) ? t(e) : void 0
          , compareValues = (e,t,a,s)=>{
            const n = getValue(e, a)
              , r = getValue(t, a);
            return null == n ? 1 : null == r ? -1 : n > r ? "desc" === s ? -1 : 1 : n < r ? "desc" === s ? 1 : -1 : 0
        }
        ;
        var de = {
            remove(e, t) {
                const a = ue.isFunction(t) ? e.findIndex(t) : e.indexOf(t);
                -1 !== a && e.splice(a, 1)
            },
            range(e, t) {
                const a = [];
                for (let s = e; s < t; s++)
                    a.push(s);
                return a
            },
            uniq: (e,t)=>ue.isFunction(t) ? e.filter(((a,s)=>e.findIndex((e=>t(e) === t(a))) === s)) : t ? e.filter(((a,s)=>e.findIndex((e=>e[t] === a[t])) === s)) : e.filter(((t,a)=>e.indexOf(t) === a)),
            sortBy(e, t, a) {
                const s = ue.isArray(t) ? t : [t]
                  , n = ue.isArray(a) ? a : [a]
                  , r = e.slice(0);
                return r.sort(((e,t)=>{
                    let a = 0;
                    for (let r = 0; r < s.length && 0 === a; r++)
                        a = compareValues(e, t, s[r], n[r]);
                    return a
                }
                )),
                r
            }
        };
        let he;
        he = "undefined" != typeof window ? window : void 0 !== __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {};
        var be = he;
        const me = {};
        ["setTimeout", "setInterval", "clearTimeout", "clearInterval"].forEach((e=>{
            me[e] = be[e].bind(be)
        }
        ));
        var we = me;
        const getOptions = e=>ue.isString(e.value) ? {
            content: e.value
        } : e.value
          , noop = ()=>{}
        ;
        var pe = {
            name: "Tooltip",
            created() {
                this.active = null,
                this.hideOnDocumentVisibilityChangeHandler = noop,
                this.hideOnScrollHandler = noop,
                this.instances = []
            },
            beforeDestroy() {
                this.instances = null,
                this.clearTooltip()
            },
            methods: {
                bind(e, t) {
                    this.instances.push({
                        element: e,
                        options: getOptions(t || {
                            value: e.getAttribute("title")
                        })
                    }),
                    e.removeAttribute("title"),
                    e.addEventListener("mouseenter", this.showTooltip),
                    e.addEventListener("focus", this.showTooltip)
                },
                update(e, t) {
                    const a = this.instances.find((t=>t.element === e));
                    a && (a.options = getOptions(t))
                },
                unbind(e) {
                    const t = this.instances.find((t=>t.element === e));
                    t && (this.active === t && this.hideTooltip({
                        target: t.element
                    }),
                    de.remove(this.instances, t),
                    e.removeEventListener("mouseenter", this.showTooltip),
                    e.removeEventListener("focus", this.showTooltip),
                    e.removeEventListener("mouseleave", this.hideTooltip),
                    e.removeEventListener("blur", this.hideTooltip))
                },
                showTooltip({target: e}) {
                    const t = this.instances.find((t=>t.element === e));
                    if (!t || !t.options || !t.options.content)
                        return;
                    const a = t.options.delay || 400
                      , s = t.options.position || "top"
                      , n = t.options.padding || 0;
                    this.clearTooltip(),
                    t.element.classList.contains(ne.xL.CONFIRM_OPEN) || (this.active = t,
                    t.element.addEventListener("mouseleave", this.hideTooltip),
                    t.element.addEventListener("blur", this.hideTooltip),
                    this.showTimeout = we.setTimeout((()=>{
                        this.showFrame = window.requestAnimationFrame((()=>{
                            this.$refs && this.$refs.content && t.options && (this.$refs.content.textContent = t.options.content),
                            this.$el.classList.add(s),
                            positionTooltip(t.element, this.$el, s, n)
                        }
                        ))
                    }
                    ), a)),
                    !1 !== t.options.closeOnScroll && this.hideOnScroll(e),
                    this.hideOnDocumentVisibilityChange(e)
                },
                hideOnDocumentVisibilityChange(e) {
                    this.hideOnDocumentVisibilityChangeHandler = ()=>{
                        this.hideTooltip({
                            target: e
                        })
                    }
                    ,
                    document.addEventListener("visibilitychange", this.hideOnDocumentVisibilityChangeHandler)
                },
                hideOnScroll(e) {
                    this.hideOnScrollHandler = ()=>{
                        this.hideTooltip({
                            target: e
                        })
                    }
                    ,
                    window.addEventListener("scroll", this.hideOnScrollHandler)
                },
                hideTooltip({target: e}) {
                    this.instances.find((t=>t.element === e)) && (this.clearTooltip(),
                    this.hideFrame = window.requestAnimationFrame((()=>{
                        var e;
                        this.$refs && this.$refs.content && (this.$refs.content.textContent = null),
                        (e = this.$el) && (e.style.transform = "translate(-100%, -100%)",
                        e.classList.remove(ce, oe, ie, re))
                    }
                    )))
                },
                clearTooltip() {
                    this.active && (this.active.element.removeEventListener("mouseleave", this.hideTooltip),
                    this.active.element.removeEventListener("blur", this.hideTooltip),
                    this.active = null),
                    we.clearTimeout(this.showTimeout),
                    window.cancelAnimationFrame(this.hideFrame),
                    window.cancelAnimationFrame(this.showFrame),
                    window.removeEventListener("scroll", this.hideOnScrollHandler),
                    document.removeEventListener("visibilitychange", this.hideOnDocumentVisibilityChangeHandler)
                }
            }
        }
          , _e = pe
          , ge = __webpack_require__(1900)
          , fe = (0,
        ge.Z)(_e, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "tooltip tip vue-tooltip"
            }, [a("div", {
                staticClass: "arrow"
            }), e._v(" "), a("div", {
                ref: "content",
                staticClass: "inner"
            })])
        }
        ), [], !1, null, null, null).exports;
        const ke = ae.default.extend(fe);
        let ve, ye = !1;
        const getTooltip = ()=>{
            if (ve || (ve = new ke),
            !ye) {
                const e = document.createElement("div");
                document.body.appendChild(e),
                ve.$mount(e),
                ye = !0
            }
            return ve
        }
        ;
        var ze = {
            bind: (e,t)=>getTooltip().bind(e, t),
            componentUpdated: (e,t)=>getTooltip().update(e, t),
            unbind: (e,t)=>getTooltip().unbind(e, t)
        }
          , xe = __webpack_require__(2305);
        let Ee = null;
        (0,
        se.M)().then((e=>{
            Ee = e
        }
        ));
        var Se = (0,
        te.defineComponent)({
            name: "UserConnection",
            directives: {
                tooltip: ze
            },
            setup() {
                const e = null == Ee ? void 0 : Ee.client.getQuality()
                  , t = (0,
                te.computed)((()=>{
                    switch (e) {
                    case 1:
                        return (0,
                        xe.dW)("lag.connection_poor", null, "live");
                    case 2:
                        return (0,
                        xe.dW)("lag.connection_ok", null, "live");
                    case 3:
                        return (0,
                        xe.dW)("lag.connection_good", null, "live");
                    case 4:
                        return (0,
                        xe.dW)("lag.connection_excellent", null, "live");
                    default:
                        return (0,
                        xe.dW)("lag.connection_offline", null, "live")
                    }
                }
                ));
                return {
                    connectionQuality: e,
                    connectionTooltip: t
                }
            }
        })
          , je = {
            component: "user-connection-component",
            "signal-0": "user-connection-signal-0",
            signal: "user-connection-signal",
            "signal-1": "user-connection-signal-1",
            "signal-2": "user-connection-signal-2",
            "signal-3": "user-connection-signal-3",
            "signal-4": "user-connection-signal-4"
        };
        var Te = (0,
        ge.Z)(Se, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return null !== e.connectionQuality ? a("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: {
                        content: e.connectionTooltip,
                        delay: 400,
                        position: "right"
                    },
                    expression: "{\n    content: connectionTooltip,\n    delay: 400,\n    position: 'right',\n  }"
                }],
                class: [e.$style.component, e.$style["signal-" + e.connectionQuality]]
            }, [a("span", {
                class: [e.$style.signal, "icon-font-chess signal"]
            }), e._v(" "), a("span", {
                class: [e.$style.signal, "icon-font-chess signal"]
            }), e._v(" "), a("span", {
                class: [e.$style.signal, "icon-font-chess signal"]
            }), e._v(" "), a("span", {
                class: [e.$style.signal, "icon-font-chess signal"]
            })]) : e._e()
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = je.locals || je
        }
        ), null, null).exports
          , Ce = (0,
        te.defineComponent)({
            name: "NavPanel",
            components: {
                UserConnection: Te
            },
            props: {
                name: {
                    required: !0,
                    type: String
                }
            }
        })
          , Oe = {
            component: "nav-panel-component",
            shade: "nav-panel-shade",
            "theme-bg": "nav-panel-theme-bg",
            "panel-footer": "nav-panel-panel-footer"
        };
        var Ae = (0,
        ge.Z)(Ce, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: [e.$style.component, "dark-mode"],
                attrs: {
                    "data-nav-panel": e.name
                }
            }, [a("div", {
                class: ["theme-bg", e.$style["theme-bg"]]
            }), e._v(" "), a("div", {
                class: e.$style.shade
            }, [e._t("default"), e._v(" "), a("div", {
                class: e.$style["panel-footer"]
            }, [a("UserConnection")], 1)], 2)])
        }
        ), [], !1, (function nav_panel_injectStyles(e) {
            this.$style = Oe.locals || Oe
        }
        ), null, null).exports
          , Le = __webpack_require__(8470)
          , Ne = __webpack_require__(8739)
          , Re = __webpack_require__(4672);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        function showGuestModal({slide: e, title: t}={}) {
            __webpack_require__.e(435).then(__webpack_require__.bind(__webpack_require__, 9911)).then((({default: a})=>{
                a.createInstance(Le.xL.GUEST_MODAL);
                const s = (0,
                Ne.j)() ? void 0 : Le._G.GUEST_MODAL_SLIDES.pawn;
                (0,
                Re.o)({
                    key: Le.U3.SHOW_GUEST_MODAL,
                    slide: e || s,
                    title: t
                })
            }
            ))
        }
        var Pe = __webpack_require__(4904)
          , Ie = (0,
        te.defineComponent)({
            name: "NavLink",
            props: {
                href: String,
                icon: {
                    required: !1,
                    type: String
                },
                text: {
                    required: !1,
                    type: String
                }
            },
            emits: ["click"]
        })
          , qe = {
            component: "nav-link-component",
            "top-level": "nav-link-top-level",
            button: "nav-link-button",
            "main-design": "nav-link-main-design",
            "main-link": "nav-link-main-link",
            hover: "nav-link-hover",
            "nav-panel": "nav-link-nav-panel",
            text: "nav-link-text",
            badge: "nav-link-badge"
        };
        var Ze = (0,
        ge.Z)(Ie, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("a", {
                class: [e.$style.component, e.$style["main-link"], e.icon && "sprite && " + e.icon],
                attrs: {
                    target: "_self",
                    href: e.href
                },
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }, [e.text ? a("span", {
                class: e.$style.text,
                domProps: {
                    textContent: e._s(e.text)
                }
            }) : e._t("default")], 2)
        }
        ), [], !1, (function nav_link_injectStyles(e) {
            this.$style = qe.locals || qe
        }
        ), null, null).exports
          , Me = __webpack_require__(169);
        const $e = {}
          , Ue = document.getElementById(Me.GO.NAV_ROOT)
          , getConstant = (e,t)=>($e[e] || (Ue && Ue.getAttribute(e) ? $e[e] = Number(Ue.getAttribute(e)) : $e[e] = t),
        $e[e]);
        var We = (0,
        te.defineComponent)({
            props: {
                badge: {
                    required: !0,
                    type: String
                },
                text: {
                    default: "",
                    type: String
                }
            },
            setup: e=>({
                badgeCount: (0,
                te.computed)((()=>{
                    const t = Y.w.badges[e.badge]
                      , a = getConstant(r, D.S6)
                      , s = getConstant(o, D.l8);
                    return e.badge === D.q_.MESSAGES && t >= a ? `${a}+` : e.badge === D.q_.ALERTS && t >= s ? `${s}+` : t
                }
                ))
            })
        })
          , Be = {
            component: "navigation-badge-component",
            green: "navigation-badge-green"
        };
        var De = (0,
        ge.Z)(We, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.badgeCount ? a("span", {
                class: e.$style.component,
                attrs: {
                    "data-badge": e.badge
                }
            }, [e._t("default", (function() {
                return [e._v(e._s(e.text || e.badgeCount))]
            }
            ))], 2) : e._e()
        }
        ), [], !1, (function navigation_badge_injectStyles(e) {
            this.$style = Be.locals || Be
        }
        ), null, null).exports
          , He = (0,
        te.defineComponent)({
            name: "HomeLinks",
            components: {
                Badge: De,
                NavLink: Ze
            },
            props: {
                user: {
                    required: !0,
                    type: Object
                }
            },
            setup: ()=>({
                amplitudeLogNavClick: F.b,
                amplitudeSelections: V.w8,
                handleClick: (e,t,a)=>{
                    (0,
                    F.b)(t),
                    (0,
                    q.nJ)() && (e.preventDefault(),
                    showGuestModal({
                        slide: a
                    }))
                }
                ,
                handleLogoutFormSubmit: e=>{
                    (0,
                    F.b)(e),
                    submitLogoutForm()
                }
                ,
                joinUrl: Q.pv,
                memberRoute: e=>t.Z.generate("web_member_view", {
                    username: e
                }),
                membershipRouteWithCode: e=>t.Z.generate("web_membership", {
                    c: e
                }),
                modalConstants: Le._G,
                routes: Z._j,
                showSignUpModal: Pe.m,
                trophiesRoute: e=>t.Z.generate("web_awards_member", {
                    username: e
                })
            })
        })
          , Fe = {
            avatar: "notifications-links-avatar",
            trial: "notifications-links-trial"
        };
        var Ge = (0,
        ge.Z)(He, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("NavLink", {
                attrs: {
                    icon: "home",
                    href: e.routes.home,
                    text: e.$trans("Home")
                },
                on: {
                    click: function(t) {
                        return e.handleClick(t, e.amplitudeSelections.HOME_HOME)
                    }
                }
            }), e._v(" "), e.user.isGuest ? a("NavLink", {
                class: e.$style.trial,
                attrs: {
                    icon: "profile",
                    href: e.joinUrl,
                    text: e.$trans("Sign Up")
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.showSignUpModal.apply(null, arguments)
                    }
                }
            }) : e.user.eligibleFirstTrial ? a("NavLink", {
                class: e.$style.trial,
                attrs: {
                    icon: "diamond",
                    href: e.membershipRouteWithCode("navHome"),
                    text: e.$trans("Free Trial")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.HOME_FREETRIAL)
                    }
                }
            }) : e.user.isPremium ? e._e() : a("NavLink", {
                attrs: {
                    icon: "diamond",
                    href: e.routes.membership,
                    text: e.$trans("Membership")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.HOME_MEMBERSHIP)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    icon: "messages",
                    href: e.routes.messages
                },
                on: {
                    click: function(t) {
                        return e.handleClick(t, e.amplitudeSelections.HOME_MESSAGES)
                    }
                }
            }, [e._v("\n    " + e._s(e.$trans("Messages")) + "\n    "), e.user.isGuest ? e._e() : a("Badge", {
                attrs: {
                    badge: "messages"
                }
            })], 1), e._v(" "), a("NavLink", {
                attrs: {
                    icon: "stats",
                    href: e.routes.stats,
                    text: e.$trans("Stats")
                },
                on: {
                    click: function(t) {
                        return e.handleClick(t, e.amplitudeSelections.HOME_STATS, e.modalConstants.GUEST_MODAL_SLIDES.stats)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    icon: "awards",
                    href: e.trophiesRoute(e.user.username)
                },
                domProps: {
                    textContent: e._s(e.$trans("Awards"))
                },
                on: {
                    click: function(t) {
                        return e.handleClick(t, e.amplitudeSelections.HOME_AWARDS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.memberRoute(e.user.username)
                },
                on: {
                    click: function(t) {
                        return e.handleClick(t, e.amplitudeSelections.HOME_PROFILE)
                    }
                }
            }, [a("img", {
                class: e.$style.avatar,
                attrs: {
                    alt: e.$trans("Home"),
                    height: "25",
                    width: "25",
                    src: e.user.avatarUrl
                }
            }), e._v(" "), a("span", {
                domProps: {
                    textContent: e._s(e.$trans("Profile"))
                }
            })]), e._v(" "), e.user.isPremium ? a("NavLink", {
                attrs: {
                    icon: "diamond",
                    href: e.routes.membership,
                    text: e.$trans("Membership")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.HOME_MEMBERSHIP)
                    }
                }
            }) : e._e(), e._v(" "), a("NavLink", {
                attrs: {
                    href: "#",
                    icon: "logout",
                    text: e.$trans("Log Out")
                },
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.handleLogoutFormSubmit(e.amplitudeSelections.HOME_LOGOUT)
                    }
                }
            })], 1)
        }
        ), [], !1, (function notifications_links_injectStyles(e) {
            this.$style = Fe.locals || Fe
        }
        ), null, null)
          , Ve = Ge.exports
          , Ke = (0,
        te.defineComponent)({
            name: "NavSectionHeader",
            props: {
                href: String,
                text: String,
                showArrow: {
                    type: Boolean,
                    default: !0
                }
            },
            setup: e=>({
                component: (0,
                te.computed)((()=>e.href ? "a" : "header"))
            })
        })
          , Ye = {
            component: "nav-section-header-component",
            clickable: "nav-section-header-clickable",
            icon: "nav-section-header-icon"
        };
        var Je = (0,
        ge.Z)(Ke, (function() {
            var e, t = this, a = t.$createElement, s = t._self._c || a;
            return s(t.component, {
                tag: "component",
                class: [t.$style.component, (e = {},
                e[t.$style.clickable] = t.href,
                e)],
                attrs: {
                    target: "_self",
                    href: t.href
                }
            }, [t.text ? s("span", {
                domProps: {
                    textContent: t._s(t.text)
                }
            }) : t._t("default"), t._v(" "), t.href && t.showArrow ? s("span", {
                class: [t.$style.icon, "icon-font-chess chevron-right"]
            }) : t._e()], 2)
        }
        ), [], !1, (function nav_section_header_injectStyles(e) {
            this.$style = Ye.locals || Ye
        }
        ), null, null).exports
          , Qe = __webpack_require__(3324);
        function ignore(a) {
            const s = t.Z.generate(z, {
                id: a
            });
            return e.Z.post(s)
        }
        function ignoreComments() {
            const a = t.Z.generate(k);
            return e.Z.post(a)
        }
        function ignoreNotifications() {
            const a = t.Z.generate(y);
            return e.Z.post(a)
        }
        function ignoreAllNotifications() {
            return Y.w.notifications = Y.w.notifications.filter((e=>e.type.id === l.FRIEND_REQUEST)),
            Y.w.badges.alerts = Y.w.notifications.reduce(((e,t)=>e + t.notifications.length), 0),
            Promise.all([ignoreComments(), ignoreNotifications()])
        }
        var Xe = {
            achievements: e=>t.Z.generate("web_awards_achievements", {
                username: e
            }),
            activity: `${t.Z.generate("web_user_home", {
                alert: "content"
            })}#new_content`,
            boardSettings: t.Z.generate("web_user_settings_board"),
            challenge: e=>t.Z.generate("web_daily_seek", {
                id: e
            }),
            challenges: t.Z.generate("web_daily_index"),
            clubForum: e=>t.Z.generate("web_club_forum", {
                url: e
            }),
            clubForumUpdate: e=>t.Z.generate("web_forum_view", {
                url: e
            }),
            clubNews: e=>t.Z.generate("web_club_announcements", {
                club: e
            }),
            clubNewsUpdate: e=>t.Z.generate("web_news_view", {
                url: e
            }),
            clubNote: e=>t.Z.generate("web_club_profile", {
                url: e
            }),
            clubRequest: e=>t.Z.generate("web_club_pending_requests", {
                url: e
            }),
            clubs: t.Z.generate("web_club"),
            comment: e=>e,
            comments: t.Z.generate("web_user_home"),
            dailySettings: t.Z.generate("web_user_settings_daily"),
            friendProgressiveAchievement: e=>t.Z.generate("web_member_view", {
                username: e,
                alert: "friend_progress_achievement"
            }),
            friendFind: t.Z.generate("web_friends_find"),
            friendInvite: t.Z.generate("web_friends_invite"),
            friendRequest: e=>t.Z.generate("web_member_view", {
                username: e
            }),
            friendRequests: t.Z.generate("web_friends"),
            home: t.Z.generate("web_user_settings_home"),
            game: e=>t.Z.generate("web_game_daily", {
                id: e
            }),
            live: e=>`${t.Z.generate("web_play")}?action=acceptLiveChallenge&challengeId=${e}`,
            liveEvent: (e,a)=>`${t.Z.generate("web_live")}#${a}=${e}`,
            playLiveArena: e=>t.Z.generate("web_play_live_arena", {
                id: e
            }),
            playDaily: t.Z.generate("web_play_daily"),
            playLiveTournament: e=>t.Z.generate("web_play_live_tournament", {
                id: e
            }),
            liveEventType: {
                "Chess\\WebBundle\\Entity\\LiveTournament": "t",
                "Chess\\WebBundle\\Entity\\LiveArena": "r",
                "Chess\\WebBundle\\Entity\\TeamMatchLive": "tm"
            },
            liveSettings: t.Z.generate("web_user_settings_livechess"),
            liveTeamMatch: e=>t.Z.generate("web_team_match_live_view", {
                match: e
            }),
            logout: t.Z.generate("web_security_logout"),
            note: e=>`${t.Z.generate("web_member_view", {
                username: e,
                alert: "notes"
            })}#new-notes`,
            notifications: t.Z.generate("web_user_settings_notifications"),
            settings: t.Z.generate("web_user_settings_edit"),
            support: "https://support.chess.com/",
            teamMatch: e=>t.Z.generate("web_game_daily", {
                id: e
            }),
            teamMaches: t.Z.generate("web_club_open_matches"),
            themes: t.Z.generate("web_user_settings_themes"),
            topPlayerObserve: e=>`${t.Z.generate("web_play")}?action=follow&member=${e}`,
            tournament: e=>t.Z.generate("web_game_daily", {
                id: e
            }),
            trophies: e=>t.Z.generate("web_awards_trophies", {
                username: e
            }),
            trophy: (e,a)=>t.Z.generate("web_awards_view_trophy", {
                username: e,
                type: "trophy",
                userTrophyId: a
            }),
            arenaTrophy: (e,a)=>t.Z.generate("web_awards_view_trophy", {
                username: e,
                type: "arena",
                userTrophyId: a
            }),
            voteChess: t.Z.generate("web_votechess"),
            voteChessGame: e=>t.Z.generate("web_votechess_game", {
                id: e
            }),
            insights: e=>e,
            promotionImage: (e,a)=>t.Z.generate("share_league_promotion_image", {
                username: e,
                code: a
            })
        }
          , et = (0,
        te.defineComponent)({
            name: "NotificationControls",
            components: {
                ThreeLoadBounce: Qe.Z
            },
            props: {
                isHomeSidebar: Boolean,
                isPopover: Boolean
            },
            setup() {
                const e = (0,
                te.computed)((()=>Y.w.notifications.length > 0));
                return {
                    amplitudeLogNavClick: F.b,
                    amplitudeSelections: V.w8,
                    hasNotifications: e,
                    ignoreAllNotifications: ignoreAllNotifications,
                    notificationsState: Y.w,
                    routes: Xe
                }
            }
        })
          , tt = {
            component: "notification-controls-component",
            "has-notifications": "notification-controls-has-notifications",
            popover: "notification-controls-popover",
            settings: "notification-controls-settings",
            clear: "notification-controls-clear",
            loading: "notification-controls-loading"
        };
        var at = (0,
        ge.Z)(et, (function() {
            var e, t, a = this, s = a.$createElement, n = a._self._c || s;
            return n("div", {
                class: [a.$style.component, (e = {},
                e[a.$style["has-notifications"]] = a.hasNotifications && !a.isHomeSidebar,
                e[a.$style.popover] = a.isPopover,
                e)]
            }, [a.hasNotifications ? n("button", {
                class: a.$style.clear,
                attrs: {
                    type: "button",
                    "aria-label": a.$trans("Clear Alerts")
                },
                domProps: {
                    textContent: a._s(a.$trans("Clear Alerts"))
                },
                on: {
                    click: a.ignoreAllNotifications
                }
            }) : a._e(), a._v(" "), a.notificationsState.isFetching ? n("div", {
                class: a.$style.loading
            }, [n("ThreeLoadBounce", {
                attrs: {
                    theme: a.isPopover ? null : "light"
                }
            })], 1) : a._e(), a._v(" "), a.hasNotifications ? n("a", {
                class: [a.$style.settings, (t = {},
                t["icon-font"] = !a.isPopover,
                t)],
                attrs: {
                    href: a.routes.notifications,
                    target: "_self"
                },
                on: {
                    click: function(e) {
                        return a.amplitudeLogNavClick(a.amplitudeSelections.HEADER_SETTINGS)
                    }
                }
            }, [n("span", {
                staticClass: "icon-font-chess circle-gearwheel"
            })]) : a._e()])
        }
        ), [], !1, (function notification_controls_injectStyles(e) {
            this.$style = tt.locals || tt
        }
        ), null, null).exports;
        function accept_friend_request_acceptFriendRequest({userId: a}) {
            return function acceptFriendRequest(a) {
                const s = t.Z.generate(b, {
                    user: a
                });
                return e.Z.put(s)
            }(a)
        }
        function accept_group_request_acceptGroupRequest({contentId: a, username: s}) {
            return function acceptGroupRequest(a, s) {
                const n = t.Z.generate(x, {
                    id: a,
                    username: s,
                    action: "approve"
                });
                return e.Z.post(n)
            }(a, s)
        }
        var st = __webpack_require__(9790)
          , nt = __webpack_require__(5291);
        const rt = "bughouse"
          , ot = "chess"
          , it = "chess960"
          , ct = "crazyhouse"
          , lt = "kingofthehill"
          , ut = "threecheck"
          , dt = "analysis"
          , ht = 0
          , bt = 1
          , mt = 2
          , wt = [{
            description: (0,
            xe.dW)("Normal rules of chess."),
            icon: "chess-board",
            isDaily: !0,
            isLive: !0,
            label: (0,
            xe.dW)("Standard"),
            value: ot
        }, {
            description: (0,
            xe.dW)("Normal rules, but starting position is random."),
            icon: "chess960",
            isDaily: !0,
            isLive: !1,
            label: (0,
            xe.dW)("Chess960"),
            value: it
        }, {
            description: (0,
            xe.dW)("Normal rules, but starting position is random."),
            icon: "live960",
            isDaily: !1,
            isLive: !0,
            label: (0,
            xe.dW)("Live960"),
            value: it
        }, {
            description: (0,
            xe.dW)("First to check the other king 3 times wins."),
            icon: "threecheck",
            isDaily: !1,
            isLive: !0,
            label: (0,
            xe.dW)("3 Check"),
            value: ut
        }, {
            description: (0,
            xe.dW)("First to get king to middle 4 squares wins."),
            icon: "kingofthehill",
            isDaily: !1,
            isLive: !0,
            label: (0,
            xe.dW)("King of the Hill"),
            value: lt
        }, {
            description: (0,
            xe.dW)("When you capture a piece, you can drop it on your turn!"),
            icon: "crazyhouse",
            isDaily: !1,
            isLive: !0,
            label: (0,
            xe.dW)("Crazyhouse"),
            value: ct
        }, {
            description: (0,
            xe.dW)("Team up with another player and you can drop the pieces that they capture."),
            icon: "bughouse",
            isDaily: !1,
            isLive: !0,
            label: (0,
            xe.dW)("Bughouse"),
            value: rt
        }, {
            description: (0,
            xe.dW)("An interactive & graphical tool for analysing chess positions and games in real time."),
            icon: "chess-board-search",
            isDaily: !1,
            isLive: !0,
            label: (0,
            xe.dW)("Live Analysis Board"),
            value: dt
        }];
        (0,
        xe.dW)("Random"),
        (0,
        xe.dW)("White"),
        (0,
        xe.dW)("Black"),
        (0,
        xe.dW)("Any"),
        (0,
        xe.dW)("12 hours"),
        (0,
        xe.dW)("6 hours"),
        (0,
        xe.dW)("3 hours");
        var pt = __webpack_require__(4164)
          , _t = __webpack_require__(8160)
          , gt = Object.defineProperty
          , ft = Object.getOwnPropertySymbols
          , kt = Object.prototype.hasOwnProperty
          , vt = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,a)=>t in e ? gt(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a
          , __spreadValues = (e,t)=>{
            for (var a in t || (t = {}))
                kt.call(t, a) && __defNormalProp(e, a, t[a]);
            if (ft)
                for (var a of ft(t))
                    vt.call(t, a) && __defNormalProp(e, a, t[a]);
            return e
        }
        ;
        function getLocale(e="", t="-") {
            return (e || (Object.prototype.hasOwnProperty.call(window, "context") ? window.context.i18n.locale : "en-US")).replace("_", t)
        }
        const yt = 31536e6
          , zt = (()=>{
            const e = 864e5;
            switch ((new Date).getMonth()) {
            case 3:
            case 5:
            case 8:
            case 10:
                return 30 * e;
            case 1:
                return (new Date).getFullYear() % 4 == 0 ? 29 * e : 28 * e;
            default:
                return 31 * e
            }
        }
        )()
          , xt = 864e5
          , Et = 36e5
          , St = 6e4
          , jt = {
            mergeOptions: e=>__spreadValues({
                abbreviateHours: !1,
                abbreviateMinutes: !0,
                includeDays: !1
            }, e),
            getUnitsInInt(e, t={}) {
                let a = 0
                  , s = 0
                  , n = 0
                  , r = e;
                return !0 === jt.mergeOptions(t).includeDays && (a = Math.floor(r / 86400),
                r -= 86400 * a),
                s = Math.floor(r / 3600),
                r -= 3600 * s,
                n = Math.floor(r / 60),
                {
                    minutes: n,
                    hours: s,
                    days: a
                }
            },
            getDaysHoursMinutesAsString(e, t={}) {
                const a = jt.getDaysHoursMinutesAsObject(e, t)
                  , {minutes: s, hours: n, days: r} = jt.getUnitsInInt(e, t)
                  , o = [];
                return r > 0 && o.push(a.days),
                n > 0 && o.push(a.hours),
                (s > 0 || 0 === o.length) && o.push(a.minutes),
                o.join(" ")
            },
            getDaysHoursMinutesAsObject(e, t={}) {
                const a = jt.mergeOptions(t)
                  , {minutes: s, hours: n, days: r} = jt.getUnitsInInt(e, t)
                  , o = _t.Z.transChoice("{0} 0 days|{1} 1 day|]1,Inf] %1$s% days", r, {
                    "%1$s%": r
                });
                let i = _t.Z.transChoice("{0} 0 hours|{1} 1 hour|]1,Inf] %1$s% hours", Math.floor(n), {
                    "%1$s%": n
                })
                  , c = _t.Z.transChoice("{0} 0 min|{1} 1 min|]1,Inf] %1$s% min", s, {
                    "%1$s%": s
                });
                return a.abbreviateHours && (i = _t.Z.transChoice("{0} 0 hrs|{1} 1 hr|]1,Inf] %1$s% hrs", Math.floor(n), {
                    "%1$s%": n
                })),
                a.abbreviateMinutes || (c = _t.Z.transChoice("{1} 1 minute|]1,Inf] %1$s% minutes", s, {
                    "%1$s%": s
                })),
                {
                    days: o,
                    hours: i,
                    minutes: c
                }
            },
            long: (e=new Date,t={})=>{
                const a = e instanceof Date ? e : new Date(e);
                return new Intl.DateTimeFormat(getLocale(),__spreadValues(__spreadValues({}, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }), t)).format(a)
            }
            ,
            full: (e=new Date,t={})=>{
                const a = e instanceof Date ? e : new Date(e);
                return new Intl.DateTimeFormat(getLocale(),__spreadValues(__spreadValues({}, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }), t)).format(a)
            }
            ,
            numeric: (e=new Date,t={})=>{
                const a = e instanceof Date ? e : new Date(e);
                if (window.Intl) {
                    const e = getLocale();
                    return new Intl.DateTimeFormat(e,Object.assign({
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                    }, t)).format(a)
                }
                return `${`0${a.getMonth() + 1}`.slice(-2)}/${`0${a.getDate()}`.slice(-2)}/${a.getFullYear()}`
            }
            ,
            relative: (e,t=!0,a=!0,s=!1,n=Date.now())=>{
                let r, o;
                const i = (e instanceof Date ? e : new Date(e)).getTime()
                  , c = s ? i - n : n - i;
                if (Math.abs(c) > zt && t) {
                    const e = {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    };
                    return new Intl.DateTimeFormat(getLocale(),e).format(i)
                }
                if (c >= yt)
                    o = "year",
                    r = Math.abs(Math.floor(c / yt));
                else if (c >= zt)
                    o = "month",
                    r = Math.abs(Math.floor(c / zt));
                else if (c >= xt)
                    o = "day",
                    r = Math.abs(Math.floor(c / xt));
                else if (c >= Et)
                    o = "hour",
                    r = Math.abs(Math.floor(c / Et));
                else {
                    if (!(c >= St))
                        return s ? _t.Z.trans("Right now") : _t.Z.trans("Just now");
                    o = "minute",
                    r = Math.abs(Math.floor(c / St))
                }
                return function getTimeAgo(e, t, a) {
                    return "year" === e ? t ? _t.Z.transChoice("{1} 1 year ago|]1,Inf] %1$s% years ago", a, {
                        "%1$s%": a
                    }) : _t.Z.transChoice("{1} 1 year|]1,Inf] %1$s% years", a, {
                        "%1$s%": a
                    }) : "month" === e ? t ? _t.Z.transChoice("{1} 1 month ago|]1,Inf] %1$s% months ago", a, {
                        "%1$s%": a
                    }) : _t.Z.transChoice("{1} 1 month|]1,Inf] %1$s% months", a, {
                        "%1$s%": a
                    }) : "day" === e ? t ? _t.Z.transChoice("{1} 1 day ago|]1,Inf] %1$s% days ago", a, {
                        "%1$s%": a
                    }) : _t.Z.transChoice("{1} 1 day|]1,Inf] %1$s% days", a, {
                        "%1$s%": a
                    }) : "hour" === e ? t ? _t.Z.transChoice("{1} 1 hour ago|]1,Inf] %1$s% hours ago", a, {
                        "%1$s%": a
                    }) : _t.Z.transChoice("{1} 1 hour|]1,Inf] %1$s% hours", a, {
                        "%1$s%": a
                    }) : "minute" === e ? t ? _t.Z.transChoice("{1} 1 minute ago|]1,Inf] %1$s% minutes ago", a, {
                        "%1$s%": a
                    }) : _t.Z.transChoice("{1} 1 minute|]1,Inf] %1$s% minutes", a, {
                        "%1$s%": a
                    }) : ""
                }(o, Math.abs(c) === c && a, r)
            }
            ,
            customNumericDate: (e=new Date,t="/",a="m/d/y")=>{
                const s = e instanceof Date ? e : new Date(e)
                  , n = {
                    d: `0${s.getDate()}`.slice(-2),
                    m: `0${s.getMonth() + 1}`.slice(-2),
                    y: `${s.getFullYear()}`
                };
                if (!["m", "d", "y"].every((e=>a.split("/").includes(e))))
                    return `${n.m}${t}${n.d}${t}${n.y}`;
                return a.split("/").reduce(((e,t)=>(e.push(n[t]),
                e)), []).join(t)
            }
            ,
            userDate: e=>{
                const t = window.context.user ? new Date(1e3 * e).toLocaleString("en-US", {
                    timeZone: window.context.user.timezone
                }) : new Date(1e3 * e)
                  , a = new Date(t).setMilliseconds(0)
                  , s = new Date(a)
                  , n = ne.Iz.daysOfWeek[s.getDay()]
                  , r = s.getDate()
                  , o = ne.Iz.months[s.getMonth()]
                  , i = s.toLocaleTimeString(getLocale())
                  , c = i.split(" ").length > 1 ? i.split(" ")[1] : ""
                  , l = i.split(" ")[0].split(":");
                l.pop();
                return `${n}, ${o} ${r}, ${l.join(":")}${c}`
            }
        };
        var Tt = __webpack_require__(7203)
          , Ct = (__webpack_require__(9801),
        __webpack_require__(4744))
          , Ot = (t.Z.generate("web_game_callback_shareable_chess_challenge"),
        t.Z.generate("web_game_seek_callback_open_seeks"),
        t.Z.generate("web_index", {}, !0),
        t.Z.generate("web_tournaments_callback_joinable"),
        t.Z.generate("web_live"),
        t.Z.generate("web_live"),
        t.Z.generate("web_game_callback_random_daily_chess_challenge"),
        t.Z.generate("web_user_callback_recent_opponents"),
        t.Z.generate("web_eco_callback_search_by_starting_position"),
        t.Z.generate("web_game_callback_ratings"),
        (0,
        xe.dW)("Allow Takebacks?"),
        (0,
        xe.dW)("Apply"),
        (0,
        xe.dW)("Avoid Time-Outs"),
        (0,
        xe.dW)("Challenge Friend"),
        (0,
        xe.dW)("Challenge Link"),
        (0,
        xe.dW)("Challenge via Email"),
        (0,
        xe.dW)("Chessboard Preview"),
        (0,
        xe.dW)("Change"),
        (0,
        xe.dW)("Choose..."),
        (0,
        xe.dW)("Choose Type"),
        (0,
        xe.dW)("Choose a Chess.com member."),
        (0,
        xe.dW)("Computer"),
        (0,
        xe.dW)("Create Challenge"),
        (0,
        xe.dW)("Create Challenge Link"),
        (0,
        xe.dW)("Custom Challenge"),
        (0,
        xe.dW)("Custom Time"),
        (0,
        xe.dW)("daily", {}, "mobile"),
        (0,
        xe.dW)("Daily Challenges"),
        (0,
        xe.dW)("Email"),
        (0,
        xe.dW)("Friends"),
        (0,
        xe.dW)("inc"),
        (0,
        xe.dW)("I Play As"),
        (0,
        xe.dW)("Join a Tournament"),
        (0,
        xe.dW)("Live"),
        (0,
        xe.dW)("Live Challenges"),
        (0,
        xe.dW)("Max time per move"),
        (0,
        xe.dW)("min"),
        (0,
        xe.dW)("Minimum Games Played"),
        e=>(0,
        xe.dW)("%amount% min", {
            "%amount%": e
        }))
          , At = ((0,
        xe.dW)("More"),
        (0,
        xe.dW)("Move Speed"),
        (0,
        xe.dW)("New Game"),
        (0,
        xe.dW)("OK"),
        (0,
        xe.dW)("Online"),
        (0,
        xe.dW)("Open Challenges"),
        (0,
        xe.dW)("Opponent Rating"),
        (0,
        xe.dW)("Optional"),
        (0,
        xe.dW)("Options"),
        (0,
        xe.dW)("Play"),
        (0,
        xe.dW)("Players"),
        (0,
        xe.dW)("Premium Members Only"),
        (0,
        xe.dW)("Quick Play"),
        (0,
        xe.dW)("Rated"),
        (0,
        xe.dW)("Recent Opponents"),
        (0,
        xe.dW)("sec"),
        e=>(0,
        xe.dW)("%amount% sec", {
            "%amount%": e
        }));
        (0,
        xe.dW)("Select Time"),
        (0,
        xe.dW)("Send a link for anyone to play."),
        (0,
        xe.dW)("Setup"),
        (0,
        xe.dW)("Sign Up"),
        (0,
        xe.dW)("Starts"),
        (0,
        xe.dW)("Time"),
        (0,
        xe.dW)("Title"),
        (0,
        xe.dW)("Total time per side"),
        (0,
        xe.dW)("Type"),
        (0,
        xe.dW)("Username"),
        (0,
        xe.dW)("Username or Email"),
        (0,
        xe.dW)("vs Random");
        const getLiveTimeLabel = ({baseTime: e, increment: t})=>(e=>{
            const {mins: t, secs: a, inc: s} = e;
            return s ? t > 0 ? `${t} | ${s}` : `${Number(a / 100).toFixed(2)} | ${s}` : t > 0 ? Ot(t) : At(a)
        }
        )((({baseTime: e, increment: t})=>{
            let a = Math.trunc(e / 10)
              , s = 0;
            return a >= 60 && (s = Math.trunc(a / 60),
            a = 0),
            {
                inc: t / 10,
                mins: s,
                secs: a
            }
        }
        )({
            baseTime: e,
            increment: t
        }))
          , handleError = e=>{
            const t = (0,
            pt.W)(e);
            (0,
            nt.el)({
                type: st.V5.error,
                message: t
            })
        }
          , helpers_isLoggedIn = ()=>Boolean(window.context.user) && !(0,
        X.Z)();
        function decline_friend_request_declineFriendRequest({userId: a}) {
            return function declineFriendRequest(a) {
                const s = t.Z.generate(m, {
                    user: a
                });
                return e.Z.delete(s)
            }(a)
        }
        function decline_group_request_declineGroupRequest({contentId: a, username: s}) {
            return function declineGroupRequest(a, s) {
                const n = t.Z.generate(x, {
                    id: a,
                    username: s,
                    action: "deny"
                });
                return e.Z.post(n)
            }(a, s)
        }
        function decline_offline_challenge_declineOfflineChallenge(a) {
            return function declineOfflineChallenge(a) {
                const s = t.Z.generate(w, {
                    id: a
                });
                return e.Z.post(s, {
                    _token: window.context.csrf.token
                })
            }(a.id)
        }
        async function declineRequest(e) {
            const t = {
                [l.FRIEND_REQUEST]: ()=>decline_friend_request_declineFriendRequest(e),
                [l.GROUP_REQUEST]: ()=>decline_group_request_declineGroupRequest(e),
                [l.OFFLINE_CHALLENGE]: ()=>decline_offline_challenge_declineOfflineChallenge(e)
            };
            if (t[e.alertType])
                try {
                    await t[e.alertType]()
                } catch (a) {
                    return handleError(a)
                }
            remove(e)
        }
        var Lt = Object.getOwnPropertySymbols
          , Nt = Object.prototype.hasOwnProperty
          , Rt = Object.prototype.propertyIsEnumerable;
        const transformNotification = e=>Object.assign(e, (e=>{
            var t, a, s;
            const {alertSubType: n, alertType: r} = e
              , o = null != (s = null == (a = null == (t = window.context) ? void 0 : t.user) ? void 0 : a.username) ? s : "";
            switch (r === l.GROUP_ACTIVITY ? n : r) {
            case l.ACHIEVMENTS:
                return {
                    content: e.title,
                    route: Xe.achievements(o)
                };
            case l.CONTENT:
                return {
                    content: _t.Z.trans("New post from %user%", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: e.viewUrl || Xe.activity
                };
            case l.CHALLENGE:
                return {
                    content: _t.Z.trans("%user% wants to play", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: Xe.challenge(e.contentId)
                };
            case l.CLUB_FORUM:
                return {
                    content: _t.Z.trans("%club% has a new topic", {
                        "%club%": `<strong>${e.groupName}</strong>`
                    }),
                    route: Xe.clubForum(e.groupUrl)
                };
            case l.CLUB_FORUM_UPDATE:
                return {
                    content: `${_t.Z.trans("%club% has a new topic", {
                        "%club%": `<strong>${e.groupName}</strong>`
                    })} <strong>${e.title}</strong>`,
                    route: Xe.clubForumUpdate(e.viewUrl)
                };
            case l.CLUB_NEWS:
                return {
                    content: _t.Z.trans("%club% posted news", {
                        "%club%": `<strong>${e.groupName}</strong>`
                    }),
                    route: Xe.clubNews(e.groupUrl)
                };
            case l.CLUB_NEWS_UPDATE:
                return {
                    content: `${_t.Z.trans("%club% posted news", {
                        "%club%": `<strong>${e.groupName}</strong>`
                    })} <strong>${e.title}</strong>`,
                    route: e.viewUrl ? Xe.clubNewsUpdate(e.viewUrl) : Xe.clubNews(e.groupUrl)
                };
            case l.CLUB_NOTE:
                return {
                    content: _t.Z.trans("%club% has a new note", {
                        "%club%": `<strong>${e.groupName}</strong>`
                    }),
                    route: Xe.clubNote(e.groupUrl)
                };
            case l.GROUP_REQUEST:
                return {
                    content: `${_t.Z.trans("%user% wants to join", {
                        "%user%": `<strong>${e.username}</strong>`
                    })} <strong>${e.groupName}</strong>`,
                    route: Xe.clubRequest(e.groupUrl)
                };
            case l.COMMENT:
                return {
                    content: `<strong>${e.title}</strong> <span>(${_t.Z.transChoice("{0} 0 new |{1} 1 new |]1,Inf] %commentsCount% new", e.newCommentCount, {
                        "%commentsCount%": e.newCommentCount
                    })})</span>`,
                    route: Xe.comment(e.viewUrl)
                };
            case l.FRIEND_REQUEST:
                {
                    let t = `<strong>${e.username}</strong>`;
                    return e.flairCode !== Ct.Wp.code && (t += ` <span class="flair-component flair-inline flair-${e.flairCode}"></span>`),
                    {
                        content: _t.Z.trans("%user% wants to be friends", {
                            "%user%": t
                        }),
                        route: Xe.friendRequest(e.username)
                    }
                }
            case l.GAME:
                return {
                    content: _t.Z.trans("Game over vs %user%. See what happened!", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: Xe.game(e.contentId)
                };
            case l.GAMES_DRAW_OFFERED:
                return {
                    content: _t.Z.trans("%user% offered you a draw", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: Xe.game(e.contentId)
                };
            case l.GAMES_LOW_TIME:
                return {
                    content: _t.Z.trans("You're low on time in your game against %user%", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: Xe.game(e.contentId)
                };
            case l.GAMES_MESSAGE:
                return {
                    content: _t.Z.trans("You have a new chat message from %user%", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: Xe.game(e.contentId)
                };
            case l.GAMES_STARTED:
                return {
                    content: _t.Z.trans("Itâ€™s your move against %user%", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: Xe.game(e.contentId)
                };
            case l.NOTE:
                return {
                    content: _t.Z.trans("%user% left you a note", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: Xe.note(o)
                };
            case l.OFFLINE_CHALLENGE:
                {
                    const {baseTime: t, flairCode: a, from: s, fromRating: n, gameType: r, increment: o, rated: i} = e;
                    let c = `<strong id="offline-challenge-toaster-${s}">${s}</strong>`;
                    n && (c += ` <span class="user-rating">(${n})</span>`),
                    a !== Ct.Wp.code && (c += ` <span class="flair-component flair-inline flair-${a}"></span>`);
                    const l = wt.find((e=>e.value === r));
                    let u = `${r} `;
                    l && (u = l.value === ot ? "" : `${l.label} `);
                    const d = i ? "" : ` ${_t.Z.trans("unrated")}`
                      , h = `<span class="live-time-label">(${u}${getLiveTimeLabel({
                        baseTime: t,
                        increment: o
                    })}${d})</span>`;
                    return {
                        content: _t.Z.trans("%user% wants to play %time%", {
                            "%user%": c,
                            "%time%": h
                        }),
                        from: e.from,
                        route: Xe.live(e.id)
                    }
                }
            case l.TEAM_MATCH:
                return {
                    content: _t.Z.trans("Check your game vs %user%", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: Xe.teamMatch(e.contentId)
                };
            case l.TOURNAMENT:
                return {
                    content: _t.Z.trans("%user% wants to join", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: Xe.tournament(e.contentId)
                };
            case l.TROPHY:
                return {
                    content: `${_t.Z.trans("%user% sent you a trophy", {
                        "%user%": `<strong>${e.username}</strong>`
                    })} <strong>${e.trophyName}</strong>`,
                    route: Xe.trophy(o, e.userTrophyId)
                };
            case l.ARENA_TROPHY:
                return {
                    content: _t.Z.trans("You earned <strong>%trophyName%</strong> trophy", {
                        "%trophyName%": e.trophyName
                    }),
                    route: Xe.arenaTrophy(o, e.userTrophyId)
                };
            case l.VOTE_CHESS_GAME:
                return {
                    content: _t.Z.trans("Update in %game%", {
                        "%game%": `<strong>${e.gameName}</strong>`
                    }),
                    route: Xe.voteChessGame(e.contentId)
                };
            case l.TEAM_LIVE_COMPETITION:
                {
                    const t = jt.relative(1e3 * e.startAt, !1, !1, !0)
                      , a = Xe.liveEventType[e.competitionType]
                      , s = e.contentId;
                    return {
                        content: _t.Z.trans("%event% starts in %time%", {
                            "%event%": `<strong>${e.title}</strong>`,
                            "%time%": `<strong>${t}</strong>`
                        }),
                        route: "r" === a ? Xe.playLiveArena(s) : Xe.playLiveTournament(s)
                    }
                }
            case l.FRIEND_ACTIVITY:
                {
                    const [t] = e.achievementName.match(/.+?(?=%)/);
                    return {
                        content: _t.Z.trans("Congratulate %username% on achieving a rating of %rating% in %category%!", {
                            "%username%": `<strong>${e.username}</strong>`,
                            "%rating%": e.threshold,
                            "%category%": t.trim()
                        }),
                        route: Xe.friendProgressiveAchievement(e.username)
                    }
                }
            case l.INSIGHTS:
                return {
                    content: `<strong>${e.title}</strong>`,
                    route: Xe.insights(e.viewUrl)
                }
            }
        }
        )(e), (e=>e.image ? {
            srcset: (0,
            Tt.q)(e.image)
        } : {})(e))
          , transformNotifications = e=>e.map(transformNotification)
          , transformNotificationGroup = (e,t)=>{
            const a = e
              , {data: s} = a
              , n = ((e,t)=>{
                var a = {};
                for (var s in e)
                    Nt.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
                if (null != e && Lt)
                    for (var s of Lt(e))
                        t.indexOf(s) < 0 && Rt.call(e, s) && (a[s] = e[s]);
                return a
            }
            )(a, ["data"]);
            return {
                type: Object.assign(n, {
                    id: t
                }),
                notifications: transformNotifications(e.data)
            }
        }
          , transformNotificationGroups = e=>Object.keys(e).reduce(((t,a)=>{
            const s = transformNotificationGroup(e[a], a);
            return a === l.OFFLINE_CHALLENGE ? t.unshift(s) : t.push(s),
            t
        }
        ), []);
        function fetch_notifications_fetchNotifications(a={}) {
            const {forceReload: s=!1} = a;
            return Y.w.fetched && !s || Y.w.isFetching ? Promise.resolve() : (Y.w.isFetching = !0,
            function fetchNotifications() {
                const a = t.Z.generate(p);
                return e.Z.get(a)
            }().then((e=>e.data || {})).catch((()=>(Y.w.isFetching = !1,
            {}))).then((e=>{
                const {alerts: t=[], readyGames: a=[]} = e;
                return get_notification_counts_getNotificationCounts(),
                Y.w.games = a,
                t
            }
            )).then(transformNotificationGroups).then((e=>{
                Y.w.notifications = e,
                window.postMessage(i, window.location.origin),
                Y.w.fetched = !0,
                Y.w.isFetching = !1
            }
            )))
        }
        async function get_notification_counts_getNotificationCounts(a=!1) {
            if (!window.context.user)
                return Promise.resolve();
            const {username: s} = window.context.user
              , {data: n} = await async function getNotificationCounts(a) {
                const s = t.Z.generate(_, {
                    username: a.toLowerCase()
                });
                return e.Z.get(s)
            }(s);
            if (function updateNotificationCounts(e) {
                const {badges: t} = Y.w
                  , a = e.challenge_waiting;
                let s = !1;
                const n = {
                    alerts: t.alerts !== e.notifications,
                    challenges: t.challenges !== e.challenge_waiting,
                    games: t.games !== e.games_to_move
                };
                (n.alerts || n.games || n.challenges) && (Y.w.fetched = !1);
                n.challenges && (s = !0);
                (n.games || n.challenges) && (0,
                Re.o)({
                    games: e.games_to_move,
                    key: "game-notifications-change"
                });
                t.alerts = e.notifications + e.new_messages + a,
                t.challenges = a,
                t.games = e.games_to_move,
                t.messages = e.new_messages,
                s && fetch_notifications_fetchNotifications()
            }(n),
            !a || Y.w.isSubscribed)
                return;
            const {uuid: r} = window.context.user
              , o = `notification/users/${r}/notices`;
            window.PubSub.subscribe(o, {
                onMessage: get_notification_counts_getNotificationCounts
            }),
            Y.w.isSubscribed = !0
        }
        function ignore_achievement_ignoreAchievement({code: a}) {
            return function ignoreAchievement(a) {
                const s = t.Z.generate(g, {
                    code: a
                });
                return e.Z.post(s)
            }(a)
        }
        function ignore_comment_ignoreComment({contentId: a, contentType: s}) {
            return function ignoreComment(a, s) {
                const n = t.Z.generate(f, {
                    contentId: a,
                    contentType: s
                });
                return e.Z.post(n)
            }(a, s)
        }
        function ignore_content_ignoreContent() {
            return function ignoreContent() {
                const a = t.Z.generate(v);
                return e.Z.post(a)
            }()
        }
        async function ignoreRequest(e) {
            const t = {
                [l.COMMENT]: ()=>ignore_comment_ignoreComment(e),
                [l.GROUP_ACTIVITY]: ()=>ignore(e.alertId),
                [l.CONTENT]: ()=>ignore_content_ignoreContent(),
                [l.ACHIEVMENTS]: ()=>ignore_achievement_ignoreAchievement(e)
            };
            try {
                t[e.alertType] ? await t[e.alertType]() : await ignore(e.alertId)
            } catch (a) {}
            remove(e)
        }
        function remove({alertType: e, notificationId: t}) {
            if ("string" != typeof e || "string" != typeof t)
                return;
            const a = Y.w.notifications.findIndex((({type: t})=>t.id === e));
            if (-1 === a)
                return;
            const s = Y.w.notifications[a].notifications.findIndex((e=>e.notificationId === t));
            -1 !== s && (Y.w.notifications[a].notifications.splice(s, 1),
            Y.w.notifications[a].notifications.length || Y.w.notifications.splice(a, 1),
            function decrementNotificationCount(e) {
                Y.w.badges[e] = Math.max(Y.w.badges[e] - 1, 0)
            }("alerts"))
        }
        var Pt = (0,
        te.defineComponent)({
            name: "NotificationItem",
            props: {
                group: {
                    required: !0,
                    type: Object
                },
                isPopover: Boolean,
                lightModeSupport: Boolean,
                notification: {
                    required: !0,
                    type: Object
                }
            },
            emits: ["click"],
            setup(e) {
                const t = (0,
                te.ref)(!1)
                  , a = (0,
                te.computed)((()=>["friend_request", "offline_challenges", "user_group_request"].includes(e.notification.alertType)));
                return {
                    accept: async()=>{
                        t.value = !0,
                        e.notification.alertType !== l.OFFLINE_CHALLENGE ? (await async function acceptRequest(e) {
                            const t = {
                                [l.FRIEND_REQUEST]: ()=>accept_friend_request_acceptFriendRequest(e),
                                [l.GROUP_REQUEST]: ()=>accept_group_request_acceptGroupRequest(e)
                            };
                            if (t[e.alertType])
                                try {
                                    await t[e.alertType]()
                                } catch (a) {
                                    return handleError(a)
                                }
                            remove(e)
                        }(e.notification),
                        t.value = !1) : window.location.href = Xe.live(Number(e.notification.id))
                    }
                    ,
                    commentIcon: Q.CN,
                    decline: async()=>{
                        t.value = !0,
                        await declineRequest(e.notification),
                        t.value = !1
                    }
                    ,
                    disappearing: t,
                    ignore: async()=>{
                        t.value = !0,
                        await ignoreRequest(e.notification),
                        t.value = !1
                    }
                    ,
                    isActionable: a,
                    notificationTypes: l
                }
            }
        })
          , It = Pt
          , qt = {
            component: "notification-item-component",
            disappearing: "notification-item-disappearing",
            close: "notification-item-close",
            action: "notification-item-action",
            popover: "notification-item-popover",
            request: "notification-item-request",
            accept: "notification-item-accept",
            decline: "notification-item-decline",
            "light-mode-support": "notification-item-light-mode-support",
            content: "notification-item-content",
            "country-flags-component": "notification-item-country-flags-component",
            "live-time-label": "notification-item-live-time-label",
            icon: "notification-item-icon",
            image: "notification-item-image"
        };
        var Zt = (0,
        ge.Z)(It, (function() {
            var e, t, a, s = this, n = s.$createElement, r = s._self._c || n;
            return r("a", {
                class: [s.$style.component, (e = {},
                e[s.$style.disappearing] = s.disappearing,
                e[s.$style.popover] = s.isPopover,
                e)],
                attrs: {
                    target: "_self",
                    href: s.notification.route
                },
                on: {
                    click: function(e) {
                        return s.$emit("click", e)
                    }
                }
            }, [s.notification.alertType === s.notificationTypes.COMMENT ? r("span", {
                staticClass: "icon-font-chess",
                class: [s.$style.icon, s.commentIcon(s.notification.contentType)]
            }) : r("img", {
                class: s.$style.image,
                attrs: {
                    height: "32",
                    width: "32",
                    alt: s.notification.alertType,
                    src: s.notification.image,
                    srcset: s.notification.srcset
                }
            }), s._v(" "), r("div", {
                class: s.$style.content,
                domProps: {
                    innerHTML: s._s(s.notification.content)
                }
            }), s._v(" "), s.isActionable ? [r("button", {
                class: [s.$style.action, s.$style.request, s.$style.decline, (t = {},
                t[s.$style["light-mode-support"]] = s.lightModeSupport,
                t)],
                attrs: {
                    type: "button",
                    "aria-label": s.$trans("Close")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        s.decline.apply(null, arguments)
                    }
                }
            }, [r("span", {
                staticClass: "icon-font-chess x"
            })]), s._v(" "), r("button", {
                class: [s.$style.action, s.$style.request, s.$style.accept, (a = {},
                a[s.$style["light-mode-support"]] = s.lightModeSupport,
                a)],
                attrs: {
                    type: "button",
                    "aria-label": s.$trans("Accept")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        s.accept.apply(null, arguments)
                    }
                }
            }, [r("span", {
                staticClass: "icon-font-chess checkmark"
            })])] : r("button", {
                class: [s.$style.action, s.$style.close],
                attrs: {
                    type: "button",
                    "aria-label": s.$trans("Close")
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        e.preventDefault(),
                        s.ignore.apply(null, arguments)
                    }
                }
            }, [r("span", {
                staticClass: "icon-font-chess x"
            })])], 2)
        }
        ), [], !1, (function notification_item_injectStyles(e) {
            this.$style = qt.locals || qt
        }
        ), null, null)
          , Mt = Zt.exports
          , $t = (0,
        te.defineComponent)({
            name: "NotificationsPanel",
            components: {
                NavSectionHeader: Je,
                NotificationControls: at,
                NotificationItem: Mt
            },
            props: {
                areControlsVisible: Boolean,
                isPopover: Boolean,
                lightModeSupport: {
                    type: Boolean,
                    default: !1
                }
            },
            setup() {
                const e = (0,
                te.computed)((()=>Y.w.notifications))
                  , t = (0,
                te.computed)((()=>0 === Y.w.notifications.length))
                  , a = (0,
                te.computed)((()=>!Y.w.isFetching && t.value));
                return {
                    amplitudeLogNavClick: F.b,
                    amplitudeSelections: V.w8,
                    getGroupTypeTitle: ({type: e})=>e.id === l.GAME ? (0,
                    xe.dW)("Game Ended") : e.title,
                    groups: e,
                    isEmpty: t,
                    showNoAlerts: a
                }
            }
        })
          , Ut = {
            component: "notifications-component",
            empty: "notifications-empty",
            group: "notifications-group"
        };
        var Wt = (0,
        ge.Z)($t, (function() {
            var e, t = this, a = t.$createElement, s = t._self._c || a;
            return s("div", {
                class: t.$style.component
            }, [t.areControlsVisible ? s("NotificationControls", {
                attrs: {
                    "is-popover": t.isPopover
                }
            }) : t._e(), t._v(" "), s("div", {
                class: (e = {},
                e[t.$style.empty] = t.isEmpty,
                e)
            }, [t.showNoAlerts ? s("span", {
                domProps: {
                    textContent: t._s(t.$trans("No Alerts"))
                }
            }) : t._e(), t._v(" "), t._l(t.groups, (function(e, a) {
                return s("div", {
                    key: a,
                    on: {
                        click: function(e) {
                            return t.amplitudeLogNavClick(t.amplitudeSelections.HEADER_NOTIFICATION)
                        }
                    }
                }, [s("div", {
                    class: t.$style.group
                }, [s("NavSectionHeader", {
                    attrs: {
                        href: e.type.url,
                        text: t.getGroupTypeTitle(e)
                    }
                })], 1), t._v(" "), t._l(e.notifications, (function(a) {
                    return s("NotificationItem", {
                        key: a.alertId,
                        attrs: {
                            group: e,
                            "is-popover": t.isPopover,
                            "light-mode-support": t.lightModeSupport,
                            notification: a
                        }
                    })
                }
                ))], 2)
            }
            ))], 2)], 1)
        }
        ), [], !1, (function notifications_injectStyles(e) {
            this.$style = Ut.locals || Ut
        }
        ), null, null).exports
          , Bt = (0,
        te.defineComponent)({
            name: "NotificationsPanel",
            components: {
                NavPanel: Ae,
                Notifications: Wt,
                NotificationsLinks: Ve
            },
            setup: ()=>({
                user: window.context.user
            })
        })
          , Dt = (0,
        ge.Z)(Bt, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("NavPanel", {
                attrs: {
                    name: "notifications"
                }
            }, [a("NotificationsLinks", {
                attrs: {
                    user: e.user
                }
            }), e._v(" "), a("Notifications", {
                attrs: {
                    "are-controls-visible": ""
                }
            })], 1)
        }
        ), [], !1, null, null, null).exports;
        const {show: Ht, hide: Ft} = renderRootComponent({
            component: Dt,
            target: document.querySelector('#sb [data-nav-panel="home"]')
        })
          , Gt = Ft;
        (0,
        xe.dW)("Accept"),
        (0,
        xe.dW)("Achievements"),
        (0,
        xe.dW)("Alerts"),
        (0,
        xe.dW)("analysis", {}, "mobile"),
        (0,
        xe.dW)("Archive"),
        (0,
        xe.dW)("articles", {}, "mobile"),
        (0,
        xe.dW)("Awards"),
        (0,
        xe.dW)("Blogs"),
        (0,
        xe.dW)("Books"),
        (0,
        xe.dW)("Cancel"),
        (0,
        xe.dW)("Enter text to continue"),
        (0,
        xe.dW)("Coaches"),
        (0,
        xe.dW)("Change settings"),
        (0,
        xe.dW)("Chat"),
        (0,
        xe.dW)("ChessKid"),
        (0,
        xe.dW)("ChessTV", {}, "mobile"),
        (0,
        xe.dW)("Chess Today"),
        (0,
        xe.dW)("Clear Alerts"),
        (0,
        xe.dW)("Clubs"),
        (0,
        xe.dW)("computer", {}, "mobile"),
        (0,
        xe.dW)("Computer Championship"),
        (0,
        xe.dW)("lag.connection_excellent", null, "live"),
        (0,
        xe.dW)("lag.connection_good", null, "live"),
        (0,
        xe.dW)("lag.connection_offline", null, "live"),
        (0,
        xe.dW)("lag.connection_ok", null, "live"),
        (0,
        xe.dW)("lag.connection_poor", null, "live"),
        (0,
        xe.dW)("Copy"),
        (0,
        xe.dW)("daily_chess", {}, "mobile"),
        (0,
        xe.dW)("Daily Puzzle"),
        (0,
        xe.dW)("Decline"),
        (0,
        xe.dW)("Endgames"),
        (0,
        xe.dW)("Events"),
        (0,
        xe.dW)("Explorer"),
        (0,
        xe.dW)("forums", {}, "mobile"),
        (0,
        xe.dW)("4 Player Chess"),
        (0,
        xe.dW)("Free Trial"),
        (0,
        xe.dW)("friends", {}, "mobile"),
        (0,
        xe.dW)("Want Your Own Flair?"),
        (0,
        xe.dW)("Help"),
        (0,
        xe.dW)("Home"),
        (0,
        xe.dW)("Join"),
        (0,
        xe.dW)("Leaderboard"),
        (0,
        xe.dW)("lessons", {}, "mobile"),
        (0,
        xe.dW)("Library"),
        (0,
        xe.dW)("Link expires in"),
        (0,
        xe.dW)("Live"),
        (0,
        xe.dW)("live_chess", {}, "mobile"),
        (0,
        xe.dW)("Chess Rankings"),
        (0,
        xe.dW)("Loading"),
        (0,
        xe.dW)("Login"),
        (0,
        xe.dW)("Login or join to play"),
        (0,
        xe.dW)("Log Out"),
        (0,
        xe.dW)("Master Games"),
        (0,
        xe.dW)("Members"),
        (0,
        xe.dW)("Membership"),
        (0,
        xe.dW)("Merch"),
        (0,
        xe.dW)("Message"),
        (0,
        xe.dW)("messages", {}, "mobile"),
        (0,
        xe.dW)("Mobile Apps"),
        (0,
        xe.dW)("My Turn"),
        (0,
        xe.dW)("New Game"),
        (0,
        xe.dW)("New"),
        (0,
        xe.dW)("news", {}, "mobile"),
        (0,
        xe.dW)("No Alerts"),
        (0,
        xe.dW)("Start Free Trial"),
        (0,
        xe.dW)("Skip Trial"),
        (0,
        xe.dW)("Get the tools you need to master the game of chess."),
        (0,
        xe.dW)("Try Chess.com Premium for Free"),
        (0,
        xe.dW)("Openings"),
        (0,
        xe.dW)("or"),
        (0,
        xe.dW)("Other Games"),
        (0,
        xe.dW)("Play"),
        (0,
        xe.dW)("Playing Now"),
        (0,
        xe.dW)("Please enter %number% or more characters", {
            "%number%": 3
        }),
        (0,
        xe.dW)("Practice (Drills)"),
        (0,
        xe.dW)("PRO Chess League"),
        (0,
        xe.dW)("Profile"),
        (0,
        xe.dW)("Puzzle Battle"),
        (0,
        xe.dW)("Puzzle Rush"),
        (0,
        xe.dW)("Puzzles"),
        (0,
        xe.dW)("Resources"),
        (0,
        xe.dW)("Rules"),
        (0,
        xe.dW)("Search username..."),
        (0,
        xe.dW)("Send"),
        (0,
        xe.dW)("Send Friend Request"),
        (0,
        xe.dW)("settings", {}, "mobile"),
        (0,
        xe.dW)("Share this link with anyone to play."),
        (0,
        xe.dW)("Shop"),
        (0,
        xe.dW)("Sign Up"),
        (0,
        xe.dW)("Solo Chess"),
        (0,
        xe.dW)("Speed Chess Championship"),
        (0,
        xe.dW)("stats", {}, "mobile"),
        (0,
        xe.dW)("Streamers"),
        (0,
        xe.dW)("tactics", {}, "mobile"),
        (0,
        xe.dW)("Chess Terms"),
        (0,
        xe.dW)("Theme"),
        (0,
        xe.dW)("Themes"),
        (0,
        xe.dW)("Top Players"),
        (0,
        xe.dW)("tournaments", {}, "mobile"),
        (0,
        xe.dW)("Type club name..."),
        (0,
        xe.dW)("Type friend name..."),
        (0,
        xe.dW)("Variants"),
        (0,
        xe.dW)("videos", {}, "mobile"),
        (0,
        xe.dW)("vision", {}, "mobile"),
        (0,
        xe.dW)("Vote Chess"),
        (0,
        xe.dW)("Wait here for your opponent.");
        const Vt = "menu"
          , Kt = "Lessons - Home"
          , Yt = "Tactics - Home"
          , Jt = "CCCC";
        var Qt = (0,
        te.defineComponent)({
            name: "LearnPanel",
            components: {
                NavLink: Ze,
                NavPanel: Ae
            },
            props: {
                routes: {
                    required: !0,
                    type: Object
                }
            },
            setup: ()=>({
                amplitudeLogNavClick: F.b,
                amplitudeSelections: V.w8,
                handleLessonsClick: ()=>{
                    G.Z.logEvent(Kt, {
                        source: Vt
                    }),
                    (0,
                    F.b)(V.w8.LEARN_LESSONS)
                }
            })
        })
          , Xt = (0,
        ge.Z)(Qt, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("NavPanel", {
                attrs: {
                    name: "learn"
                }
            }, [a("NavLink", {
                attrs: {
                    href: e.routes.lessons,
                    icon: "learn"
                },
                on: {
                    click: e.handleLessonsClick
                }
            }, [e._v("\n    " + e._s(e.$trans("Lessons")) + "\n  ")]), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.insights,
                    icon: "insights",
                    text: e.$trans("Insights")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.LEARN_INSIGHTS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.openings,
                    icon: "openings",
                    text: e.$trans("Openings")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.LEARN_OPENINGS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.endgames,
                    icon: "endgames",
                    text: e.$trans("Endgames")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.LEARN_ENDGAMES)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.practice,
                    icon: "practice",
                    text: e.$trans("Practice")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.LEARN_PRACTICE)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.classroom,
                    icon: "classroom",
                    text: e.$trans("Classroom")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.LEARN_CLASSROOM)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.analysis,
                    icon: "analysis",
                    text: e.$trans("Analysis")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.LEARN_ANALYSIS)
                    }
                }
            })], 1)
        }
        ), [], !1, null, null, null).exports;
        const ea = document.querySelector('#sb [data-nav-panel="learn"]')
          , ta = ea && JSON.parse(ea.getAttribute(D.Y4.routes))
          , {show: aa, hide: sa} = renderRootComponent({
            component: Xt,
            target: ea,
            props: {
                routes: ta
            }
        });
        const handleGuestClick = e=>{
            (0,
            q.nJ)() && (e.preventDefault(),
            showGuestModal())
        }
        ;
        var na = (0,
        te.defineComponent)({
            name: "MorePanel",
            components: {
                NavLink: Ze,
                NavPanel: Ae,
                NavSectionHeader: Je
            },
            props: {
                routes: {
                    required: !0,
                    type: Object
                }
            },
            setup: ()=>({
                amplitudeLogNavClick: F.b,
                amplitudeSelections: V.w8,
                handleComputerChampionshipClick: ()=>{
                    G.Z.logEvent(Jt),
                    (0,
                    F.b)(V.w8.MORE_COMPUTERCHAMPIONSHIP)
                }
                ,
                handleVotechessClick: e=>{
                    handleGuestClick(e),
                    (0,
                    F.b)(V.w8.MORE_VOTECHESS)
                }
            })
        })
          , ra = (0,
        ge.Z)(na, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("NavPanel", {
                attrs: {
                    name: "more"
                }
            }, [a("NavSectionHeader", {
                attrs: {
                    text: e.$trans("Features")
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.library,
                    icon: "library",
                    text: e.$trans("Library")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_LIBRARY)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.explorer,
                    icon: "explorer",
                    text: e.$trans("Explorer")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_EXPLORER)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.soloChess,
                    icon: "solo-chess",
                    text: e.$trans("Solo Chess")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_SOLOCHESS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.vision,
                    icon: "vision",
                    text: e.$trans("Vision")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_VISION)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.voteChess,
                    icon: "vote-chess",
                    text: e.$trans("Vote Chess")
                },
                on: {
                    click: function(t) {
                        return e.handleVotechessClick(t)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.mobileApps,
                    icon: "mobile-apps",
                    text: e.$trans("Mobile Apps")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_MOBILEAPPS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: "https://www.chesskid.com",
                    icon: "chess-kid",
                    text: e.$trans("ChessKid")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_CHESSKID)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: "https://treasure.chess.com",
                    icon: "treasure",
                    text: e.$trans("Treasure Chess")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_TREASURE)
                    }
                }
            }), e._v(" "), a("NavSectionHeader", {
                attrs: {
                    text: e.$trans("Resources")
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.videos,
                    icon: "videos",
                    text: e.$trans("Videos")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_VIDEOS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.masterGames,
                    icon: "more",
                    text: e.$trans("Games Database")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_MASTERGAMES)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.terms,
                    icon: "terms",
                    text: e.$trans("Chess Terms")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_CHESSTERMS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.rules,
                    icon: "play",
                    text: e.$trans("Rules")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_RULES)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.resourcesPage,
                    icon: "resources",
                    text: e.$trans("Tools")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_TOOLS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: "https://chesscomshop.com",
                    target: "_blank",
                    rel: "nofollow noreferrer noopener",
                    icon: "shop",
                    text: e.$trans("Shop")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_SHOP)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: "https://merch.chess.com",
                    target: "_blank",
                    rel: "nofollow noreferrer noopener",
                    icon: "merch",
                    text: e.$trans("Merch")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_MERCH)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.computerChampionship,
                    icon: "cpu-champs",
                    text: e.$trans("Computer Championship")
                },
                on: {
                    click: e.handleComputerChampionshipClick
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.verified,
                    icon: "verified",
                    text: e.$trans("Verified")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.MORE_VERIFIED)
                    }
                }
            })], 1)
        }
        ), [], !1, null, null, null).exports;
        const oa = document.querySelector('#sb [data-nav-panel="more"]')
          , ia = oa && JSON.parse(oa.getAttribute(D.Y4.routes))
          , {show: ca, hide: la} = renderRootComponent({
            component: ra,
            target: oa,
            props: {
                routes: ia
            }
        });
        var ua = (0,
        te.defineComponent)({
            name: "NewsPanel",
            components: {
                NavLink: Ze,
                NavPanel: Ae
            },
            props: {
                routes: {
                    required: !0,
                    type: Object
                }
            },
            setup: ()=>({
                amplitudeLogNavClick: F.b,
                amplitudeSelections: V.w8
            })
        })
          , da = (0,
        ge.Z)(ua, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("NavPanel", {
                attrs: {
                    name: "news"
                }
            }, [a("NavLink", {
                attrs: {
                    icon: "chess-today",
                    href: e.routes.chessToday,
                    text: e.$trans("Chess Today")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.NEWS_CHESSTODAY)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.news,
                    icon: "news",
                    text: e.$trans("News")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.NEWS_NEWS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.articles,
                    icon: "articles",
                    text: e.$trans("Articles")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.NEWS_ARTICLES)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.topPlayers,
                    icon: "top-players",
                    text: e.$trans("Top Players")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.NEWS_TOPPLAYERS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.liveRankings,
                    icon: "live-rankings",
                    text: e.$trans("Chess Rankings")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.NEWS_CHESSRANKINGS)
                    }
                }
            })], 1)
        }
        ), [], !1, null, null, null).exports;
        const ha = document.querySelector('#sb [data-nav-panel="news"]')
          , ba = ha && JSON.parse(ha.getAttribute(D.Y4.routes))
          , {show: ma, hide: wa} = renderRootComponent({
            component: da,
            target: ha,
            props: {
                routes: ba
            }
        });
        var pa = (0,
        te.defineComponent)({
            name: "MyTurns",
            components: {
                NavSectionHeader: Je
            },
            props: {
                routes: {
                    type: Object
                }
            },
            setup() {
                const e = (0,
                te.computed)((()=>Y.w.games));
                return {
                    amplitudeLogNavClick: F.b,
                    amplitudeSelections: V.w8,
                    games: e,
                    generateMyTurnsLink: Q.xg
                }
            }
        })
          , _a = {
            username: "my-turns-username",
            "time-left": "my-turns-time-left",
            myTurnWrap: "my-turns-myTurnWrap",
            badge: "my-turns-badge",
            "my-turn": "my-turns-my-turn",
            arrow: "my-turns-arrow"
        };
        var ga = (0,
        ge.Z)(pa, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.games && e.games.length > 0 ? a("div", {
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.PLAY_MYTURN)
                    }
                }
            }, [a("NavSectionHeader", {
                attrs: {
                    href: e.routes.daily
                }
            }, [a("div", {
                class: e.$style.myTurnWrap
            }, [a("span", {
                domProps: {
                    textContent: e._s(e.$trans("My Turn"))
                }
            }), e._v(" "), a("span", {
                class: [e.$style.badge, "nav-badge"],
                domProps: {
                    textContent: e._s(e.games.length)
                }
            })])]), e._v(" "), e._l(e.games, (function(t) {
                return a("a", {
                    key: t.id,
                    class: e.$style["my-turn"],
                    attrs: {
                        href: e.generateMyTurnsLink(t.id),
                        target: "_self"
                    }
                }, [a("img", {
                    attrs: {
                        alt: t.opponent.username,
                        height: "22",
                        width: "22",
                        src: t.opponent.image
                    }
                }), e._v(" "), a("span", {
                    class: e.$style.username
                }, [e._v(e._s(t.opponent.username))]), e._v(" "), a("span", {
                    class: e.$style["time-left"]
                }, [e._v(e._s(t.timeLeftDisplay))])])
            }
            ))], 2) : e._e()
        }
        ), [], !1, (function my_turns_injectStyles(e) {
            this.$style = _a.locals || _a
        }
        ), null, null).exports
          , fa = (0,
        te.defineComponent)({
            name: "PlayPanel",
            components: {
                NavPanel: Ae,
                NavLink: Ze,
                MyTurns: ga
            },
            props: {
                isGuest: {
                    type: Boolean
                },
                routes: {
                    required: !0,
                    type: Object
                },
                user: {
                    type: Object
                }
            },
            setup() {
                var e, t;
                return {
                    amplitudeLogNavClick: F.b,
                    amplitudeSelections: V.w8,
                    handleClick: (e,t)=>{
                        (0,
                        F.b)(t),
                        handleGuestClick(e)
                    }
                    ,
                    isNavHideLiveEnabled: null == (t = null == (e = window.chesscom) ? void 0 : e.features) ? void 0 : t.includes("nav_hide_live")
                }
            }
        })
          , ka = (0,
        ge.Z)(fa, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("NavPanel", {
                attrs: {
                    name: "play"
                }
            }, [a("NavLink", {
                attrs: {
                    href: e.routes.playOnline,
                    text: e.$trans("Play"),
                    icon: "play"
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.PLAY_PLAY)
                    }
                }
            }), e._v(" "), e.isGuest || e.isNavHideLiveEnabled ? e._e() : a("NavLink", {
                attrs: {
                    href: e.routes.live,
                    icon: "live",
                    text: e.$trans("Live Chess")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.PLAY_LIVECHESS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.computer,
                    icon: "computer",
                    text: e.$trans("Computer")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.PLAY_COMPUTER)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.tournaments,
                    icon: "tournaments",
                    text: e.$trans("Tournaments")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.PLAY_TOURNAMENTS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.variants,
                    icon: "variants",
                    text: e.$trans("4 Player & Variants")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.PLAY_VARIANTS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.leaderboard,
                    icon: "leaderboard",
                    text: e.$trans("Leaderboard")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.PLAY_LEADERBOARD)
                    }
                }
            }), e._v(" "), e.user ? a("NavLink", {
                attrs: {
                    href: e.routes.gameArchive,
                    icon: "archive",
                    text: e.$trans("Archive")
                },
                on: {
                    click: function(t) {
                        return e.handleClick(t, e.amplitudeSelections.PLAY_ARCHIVE)
                    }
                }
            }) : e._e(), e._v(" "), a("MyTurns", {
                attrs: {
                    routes: e.routes
                }
            })], 1)
        }
        ), [], !1, null, null, null).exports;
        const va = document.querySelector('#sb [data-nav-panel="play"]')
          , ya = va && JSON.parse(va.getAttribute(D.Y4.routes))
          , {show: za, hide: xa} = renderRootComponent({
            component: ka,
            target: va,
            props: {
                isGuest: (0,
                q.nJ)(),
                routes: ya,
                user: window.context.user
            }
        })
          , Ea = xa;
        var Sa = (0,
        te.defineComponent)({
            name: "PuzzlesPanel",
            components: {
                NavLink: Ze,
                NavPanel: Ae
            },
            props: {
                routes: {
                    required: !0,
                    type: Object
                }
            },
            setup: ()=>({
                amplitudeLogNavClick: F.b,
                amplitudeSelections: V.w8,
                handlePuzzlesClick: ()=>{
                    G.Z.logEvent(Yt, {
                        source: Vt
                    }),
                    (0,
                    F.b)(V.w8.PUZZLES_RATED)
                }
                ,
                handlePuzzleRushClick: ()=>{
                    G.Z.logEvent(Yt, {
                        source: Vt
                    }),
                    (0,
                    F.b)(V.w8.PUZZLES_PUZZLERUSH)
                }
            })
        })
          , ja = (0,
        ge.Z)(Sa, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("NavPanel", {
                attrs: {
                    name: "puzzles"
                }
            }, [a("NavLink", {
                attrs: {
                    href: e.routes.puzzlesRated,
                    icon: "tactics",
                    text: e.$trans("Puzzles")
                },
                on: {
                    click: e.handlePuzzlesClick
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.puzzlesRush,
                    icon: "puzzles",
                    text: e.$trans("Puzzle Rush")
                },
                on: {
                    click: e.handlePuzzleRushClick
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.puzzleBattle,
                    icon: "puzzle-battle",
                    text: e.$trans("Puzzle Battle")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.PUZZLES_PUZZLEBATTLE)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.dailyPuzzle,
                    icon: "daily-puzzle",
                    text: e.$trans("Daily Puzzle")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.PUZZLES_DAILYPUZZLE)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.puzzlesCustom,
                    icon: "custom",
                    text: e.$trans("Custom Puzzles")
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.PUZZLES_CUSTOM)
                    }
                }
            })], 1)
        }
        ), [], !1, null, null, null).exports;
        const Ta = document.querySelector('#sb [data-nav-panel="puzzles"]')
          , Ca = Ta && JSON.parse(Ta.getAttribute(D.Y4.routes))
          , {show: Oa, hide: Aa} = renderRootComponent({
            component: ja,
            target: Ta,
            props: {
                routes: Ca
            }
        });
        var La = (0,
        te.defineComponent)({
            name: "ChatAvatar",
            props: {
                chat: {
                    type: Object,
                    required: !0
                },
                online: {
                    type: Boolean,
                    default: !1
                },
                size: {
                    type: Number,
                    default: 30
                }
            },
            setup: e=>({
                srcSet: (0,
                te.computed)((()=>"isGroup"in e.chat ? "" : e.chat.avatarUrl && (0,
                Tt.b)(e.chat.avatarUrl))),
                style: (0,
                te.computed)((()=>({
                    lineHeight: `${e.size}px`
                })))
            })
        })
          , Na = {
            component: "chat-avatar-component",
            status: "chat-avatar-status",
            online: "chat-avatar-online"
        };
        var Ra = (0,
        ge.Z)(La, (function() {
            var e, t = this, a = t.$createElement, s = t._self._c || a;
            return s("span", {
                class: t.$style.component
            }, [t.chat.state.avatarUrl ? s("img", {
                style: t.style,
                attrs: {
                    alt: t.chat.state.name,
                    src: t.chat.state.avatarUrl,
                    srcset: t.srcSet,
                    width: t.size,
                    height: t.size
                }
            }) : s("span", {
                class: t.$style.placeholder,
                style: t.style
            }, [s("span", {
                class: ["icon-font-chess", t.chat.isDirect ? "user" : "users"]
            })]), t._v(" "), s("span", {
                class: [t.$style.status, (e = {},
                e[t.$style.online] = t.chat.state.isOnline,
                e)]
            })])
        }
        ), [], !1, (function chat_avatar_injectStyles(e) {
            this.$style = Na.locals || Na
        }
        ), null, null).exports;
        const Pa = document.getElementById("sb")
          , Ia = document.getElementById("sb-cover")
          , qa = document.getElementById("tb");
        function toggleOpenClass(e) {
            [document.body, Ia, Pa, qa].forEach((t=>null == t ? void 0 : t.classList.toggle(V.Sh.OPEN, e)))
        }
        var Za = __webpack_require__(6437)
          , Ma = (0,
        te.defineComponent)({
            name: "ConnectSearch",
            components: {
                V5InputGroup: Za.V5InputGroup
            },
            props: {
                placeholder: String
            },
            emits: ["input"]
        })
          , $a = {
            component: "connect-search-component",
            input: "connect-search-input"
        };
        var Ua = (0,
        ge.Z)(Ma, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("v5-input-group", {
                class: e.$style.input,
                attrs: {
                    autocapitalize: "none",
                    autocomplete: "off",
                    autocorrect: "off",
                    "force-theme": "dark",
                    "icon-right": "magnifying-glass",
                    spellcheck: "false",
                    placeholder: e.placeholder
                },
                on: {
                    input: function(t) {
                        return e.$emit("input", t)
                    }
                }
            })], 1)
        }
        ), [], !1, (function connect_search_injectStyles(e) {
            this.$style = $a.locals || $a
        }
        ), null, null).exports;
        const Wa = {
            friends: {
                amplitude_selection: V.w8.SOCIAL_FRIENDSTAB,
                code: "friends",
                name: (0,
                xe.dW)("Friends")
            },
            clubs: {
                amplitude_selection: V.w8.SOCIAL_CLUBSTAB,
                code: "clubs",
                name: (0,
                xe.dW)("Clubs")
            },
            chats: {
                amplitude_selection: V.w8.SOCIAL_CHATTAB,
                code: "chats",
                name: (0,
                xe.dW)("Chat")
            }
        }
          , Ba = (0,
        te.reactive)({
            chats: {
                hasFetched: !1,
                list: {}
            },
            clubs: {
                hasFetched: !1,
                isFetching: !1,
                list: [],
                searchString: ""
            },
            friends: {
                eTag: "",
                hasFetched: !1,
                isFetching: !1,
                isSearching: !1,
                list: [],
                searchResults: [],
                searchString: ""
            },
            currentTab: Wa.friends.code
        });
        var Da = (0,
        te.defineComponent)({
            name: "ConnectTabChat",
            components: {
                ConnectSearch: Ua,
                ChatAvatar: Ra
            },
            setup() {
                const e = (0,
                te.computed)((()=>Ba.chats.list));
                return (0,
                te.onMounted)((()=>{
                    var t, a;
                    return null == (a = (t = e.value).loadOnlineStatus) ? void 0 : a.call(t)
                }
                )),
                {
                    hideNav: ()=>{
                        hidePanels(),
                        window.innerWidth < 960 && toggleOpenClass(!1)
                    }
                    ,
                    list: e
                }
            }
        })
          , Ha = Da
          , Fa = {
            searchContainer: "connect-tab-chat-searchContainer",
            startGroupChat: "connect-tab-chat-startGroupChat",
            item: "connect-tab-chat-item",
            name: "connect-tab-chat-name",
            deactivate: "connect-tab-chat-deactivate",
            counter: "connect-tab-chat-counter",
            inactiveToggler: "connect-tab-chat-inactiveToggler"
        };
        var Ga = (0,
        ge.Z)(Ha, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("div", {
                class: e.$style.searchContainer
            }, [a("ConnectSearch", {
                attrs: {
                    placeholder: e.$trans("Search username...")
                },
                on: {
                    input: function(t) {
                        return e.list.setSearchString(t)
                    }
                }
            }), e._v(" "), a("button", {
                class: e.$style.startGroupChat,
                attrs: {
                    type: "button"
                },
                on: {
                    click: function(t) {
                        e.list.startGroupChat(),
                        e.hideNav()
                    }
                }
            }, [a("span", {
                staticClass: "icon-font-chess plus"
            })])], 1), e._v(" "), e._l(e.list.state.panel, (function(t) {
                return a("div", {
                    key: t.id,
                    class: e.$style.item,
                    on: {
                        click: function(a) {
                            t.open(),
                            e.hideNav()
                        }
                    }
                }, [a("ChatAvatar", {
                    attrs: {
                        chat: t,
                        size: 25
                    }
                }), e._v(" "), a("span", {
                    class: e.$style.name,
                    domProps: {
                        textContent: e._s(t.state.name)
                    }
                }), e._v(" "), t.state.isActive ? a("button", {
                    class: e.$style.deactivate,
                    attrs: {
                        type: "button",
                        title: e.$trans("Hide")
                    },
                    on: {
                        click: function(a) {
                            return a.stopPropagation(),
                            e.list.deactivateChat(t)
                        }
                    }
                }, [a("span", {
                    staticClass: "icon-font-chess x"
                })]) : e._e(), e._v(" "), t.state.newMessages ? a("span", {
                    class: e.$style.counter,
                    domProps: {
                        textContent: e._s(t.state.newMessages)
                    }
                }) : e._e()], 1)
            }
            )), e._v(" "), e.list.state.inactiveChatsCounter ? a("button", {
                class: e.$style.inactiveToggler,
                attrs: {
                    type: "button"
                },
                domProps: {
                    textContent: e._s(e.list.state.showInactiveChats ? e.$trans("Active chats") : e.$trans("Inactive chats"))
                },
                on: {
                    click: function(t) {
                        return e.list.toggleInactiveChats()
                    }
                }
            }) : e._e()], 2)
        }
        ), [], !1, (function connect_tab_chat_injectStyles(e) {
            this.$style = Fa.locals || Fa
        }
        ), null, null).exports
          , Va = (0,
        te.defineComponent)({
            name: "NavAvatar",
            props: {
                alt: {
                    type: String,
                    required: !1,
                    default: ""
                },
                isOnline: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                isPlaying: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                size: Number,
                src: String
            },
            setup: e=>({
                srcSet: (0,
                te.computed)((()=>(0,
                Tt.b)(e.src)))
            })
        })
          , Ka = {
            component: "nav-avatar-component",
            image: "nav-avatar-image",
            status: "nav-avatar-status",
            online: "nav-avatar-online",
            playing: "nav-avatar-playing"
        };
        var Ya = (0,
        ge.Z)(Va, (function() {
            var e, t = this, a = t.$createElement, s = t._self._c || a;
            return s("span", {
                class: t.$style.component
            }, [s("img", {
                class: t.$style.image,
                attrs: {
                    alt: t.alt,
                    height: t.size,
                    src: t.src,
                    srcset: t.srcSet,
                    width: t.size
                }
            }), t._v(" "), s("span", {
                class: [t.$style.status, (e = {},
                e[t.$style.online] = t.isOnline,
                e[t.$style.playing] = t.isPlaying,
                e)]
            })])
        }
        ), [], !1, (function nav_avatar_injectStyles(e) {
            this.$style = Ka.locals || Ka
        }
        ), null, null).exports
          , Ja = (0,
        te.defineComponent)({
            name: "ConnectTabClubs",
            components: {
                ConnectSearch: Ua,
                NavAvatar: Ya
            },
            setup() {
                const e = (0,
                te.computed)((()=>{
                    const e = Ba.clubs.searchString.toLowerCase()
                      , t = Ba.clubs.list;
                    return e ? t.filter((({name: t})=>t.toLowerCase().includes(e))) : t
                }
                ));
                return {
                    filteredClubs: e,
                    onClubSearch: e=>Ba.clubs.searchString = e.toLowerCase().trim()
                }
            }
        })
          , Qa = Ja
          , Xa = {
            link: "connect-tab-clubs-link",
            name: "connect-tab-clubs-name"
        };
        var es = (0,
        ge.Z)(Qa, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("ConnectSearch", {
                attrs: {
                    placeholder: e.$trans("Type club name...")
                },
                on: {
                    input: e.onClubSearch
                }
            }), e._v(" "), e._l(e.filteredClubs, (function(t) {
                return a("a", {
                    key: t.id,
                    class: e.$style.link,
                    attrs: {
                        href: t.url,
                        target: "_self"
                    }
                }, [a("NavAvatar", {
                    attrs: {
                        username: t.name,
                        size: 25,
                        src: t.icon
                    }
                }), e._v(" "), a("span", {
                    class: e.$style.name,
                    domProps: {
                        textContent: e._s(t.name)
                    }
                })], 1)
            }
            ))], 2)
        }
        ), [], !1, (function connect_tab_clubs_injectStyles(e) {
            this.$style = Xa.locals || Xa
        }
        ), null, null).exports
          , ts = __webpack_require__(7226)
          , as = __webpack_require__(6092)
          , lodash_es_now = function() {
            return as.Z.Date.now()
        }
          , ss = __webpack_require__(2714)
          , ns = /^\s+|\s+$/g
          , rs = /^[-+]0x[0-9a-f]+$/i
          , os = /^0b[01]+$/i
          , is = /^0o[0-7]+$/i
          , cs = parseInt;
        var ls = function toNumber(e) {
            if ("number" == typeof e)
                return e;
            if ((0,
            ss.Z)(e))
                return NaN;
            if ((0,
            ts.Z)(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = (0,
                ts.Z)(t) ? t + "" : t
            }
            if ("string" != typeof e)
                return 0 === e ? e : +e;
            e = e.replace(ns, "");
            var a = os.test(e);
            return a || is.test(e) ? cs(e.slice(2), a ? 2 : 8) : rs.test(e) ? NaN : +e
        }
          , us = Math.max
          , ds = Math.min;
        var hs = function debounce(e, t, a) {
            var s, n, r, o, i, c, l = 0, u = !1, d = !1, h = !0;
            if ("function" != typeof e)
                throw new TypeError("Expected a function");
            function invokeFunc(t) {
                var a = s
                  , r = n;
                return s = n = void 0,
                l = t,
                o = e.apply(r, a)
            }
            function leadingEdge(e) {
                return l = e,
                i = setTimeout(timerExpired, t),
                u ? invokeFunc(e) : o
            }
            function shouldInvoke(e) {
                var a = e - c;
                return void 0 === c || a >= t || a < 0 || d && e - l >= r
            }
            function timerExpired() {
                var e = lodash_es_now();
                if (shouldInvoke(e))
                    return trailingEdge(e);
                i = setTimeout(timerExpired, function remainingWait(e) {
                    var a = t - (e - c);
                    return d ? ds(a, r - (e - l)) : a
                }(e))
            }
            function trailingEdge(e) {
                return i = void 0,
                h && s ? invokeFunc(e) : (s = n = void 0,
                o)
            }
            function debounced() {
                var e = lodash_es_now()
                  , a = shouldInvoke(e);
                if (s = arguments,
                n = this,
                c = e,
                a) {
                    if (void 0 === i)
                        return leadingEdge(c);
                    if (d)
                        return clearTimeout(i),
                        i = setTimeout(timerExpired, t),
                        invokeFunc(c)
                }
                return void 0 === i && (i = setTimeout(timerExpired, t)),
                o
            }
            return t = ls(t) || 0,
            (0,
            ts.Z)(a) && (u = !!a.leading,
            r = (d = "maxWait"in a) ? us(ls(a.maxWait) || 0, t) : r,
            h = "trailing"in a ? !!a.trailing : h),
            debounced.cancel = function cancel() {
                void 0 !== i && clearTimeout(i),
                l = 0,
                s = c = n = i = void 0
            }
            ,
            debounced.flush = function flush() {
                return void 0 === i ? o : trailingEdge(lodash_es_now())
            }
            ,
            debounced
        }
          , bs = hs;
        function fetchClubs() {
            const a = null != (n = null == (s = window.context.user) ? void 0 : s.username) ? n : "";
            var s, n;
            const r = t.Z.generate(T, {
                username: a
            });
            return e.Z.get(r)
        }
        async function searchFriends(a) {
            const s = Ba.friends
              , n = a.trim();
            s.searchString = n,
            n && (s.isSearching = !0,
            s.searchResults = [],
            s.searchResults = await async function searchFriendsService(a) {
                const s = t.Z.generate(S, {
                    onlyFriendsOfMine: 1,
                    avatarSize: 25,
                    query: a
                });
                return e.Z.get(s).then((({data: e})=>(null == e ? void 0 : e.length) ? e : []))
            }(n),
            s.isSearching = !1)
        }
        function startDirectChat(e) {
            hidePanels();
            const t = V.U3.START_DIRECT_CHAT
              , a = {
                avatarUrl: e.avatar_url,
                id: e.uuid,
                username: e.username
            };
            (0,
            Re.o)({
                key: t,
                payload: a
            })
        }
        var ms = (0,
        te.defineComponent)({
            name: "ConnectTabFriends",
            components: {
                ConnectSearch: Ua,
                NavAvatar: Ya,
                ThreeLoadBounce: Qe.Z
            },
            directives: {
                tooltip: ze
            },
            setup() {
                const e = Ba.friends
                  , a = (0,
                te.computed)((()=>e.searchString ? e.searchResults : e.list))
                  , s = bs(searchFriends, 250);
                function logToAmplitude(e) {
                    G.Z.logEvent("presenceUiClick", {
                        selection: e,
                        location: "navbar"
                    })
                }
                return {
                    friends: a,
                    friendsState: e,
                    handleChallengeClick: function handleChallengeClick() {
                        logToAmplitude("challenge")
                    },
                    handleWatchClick: function handleWatchClick() {
                        logToAmplitude("watch")
                    },
                    onFriendSearch: s,
                    profileUrl: e=>t.Z.generate("web_member_view", {
                        username: e
                    }),
                    startDirectChat: startDirectChat
                }
            }
        })
          , ws = {
            link: "connect-tab-friends-link",
            name: "connect-tab-friends-name",
            "actions-wrapper": "connect-tab-friends-actions-wrapper",
            action: "connect-tab-friends-action",
            hover: "connect-tab-friends-hover"
        };
        var ps = (0,
        ge.Z)(ms, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", [a("ConnectSearch", {
                attrs: {
                    placeholder: e.$trans("Type friend name...")
                },
                on: {
                    input: e.onFriendSearch
                }
            }), e._v(" "), e.friendsState.searchString ? [e.friendsState.searchString.length < 3 ? a("span", {
                domProps: {
                    textContent: e._s(e.$trans("Please enter %number% or more characters", {
                        "%number%": 3
                    }))
                }
            }) : e.friendsState.isSearching ? a("span", [a("ThreeLoadBounce", {
                attrs: {
                    theme: "light"
                }
            })], 1) : e._e()] : e._e(), e._v(" "), e._l(e.friends, (function(t) {
                return a("a", {
                    key: t.id,
                    class: e.$style.link,
                    attrs: {
                        href: e.profileUrl(t.username),
                        target: "_self"
                    }
                }, [a("NavAvatar", {
                    attrs: {
                        "is-online": t.is_online,
                        "is-playing": t.is_playing,
                        size: 25,
                        src: t.avatar_url,
                        username: t.username
                    }
                }), e._v(" "), a("span", {
                    class: e.$style.name,
                    domProps: {
                        textContent: e._s(t.username)
                    }
                }), e._v(" "), a("span", {
                    class: e.$style["actions-wrapper"]
                }, [a("button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: e.$trans("Chat"),
                            position: "bottom"
                        },
                        expression: "{\n          content: $trans('Chat'),\n          position: 'bottom',\n        }"
                    }],
                    class: [e.$style.action, "icon-font-chess chat"],
                    on: {
                        click: function(a) {
                            return a.preventDefault(),
                            e.startDirectChat(t)
                        }
                    }
                }), e._v(" "), t.now_playing_link ? a("a", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: e.$trans("Watch"),
                            position: "bottom"
                        },
                        expression: "{\n          content: $trans('Watch'),\n          position: 'bottom',\n        }"
                    }],
                    class: [e.$style.action, "icon-font-chess binoculars"],
                    attrs: {
                        href: t.now_playing_link
                    },
                    on: {
                        click: function(a) {
                            return e.handleWatchClick(t)
                        }
                    }
                }) : a("a", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: e.$trans("Challenge"),
                            position: "bottom"
                        },
                        expression: "{\n          content: $trans('Challenge'),\n          position: 'bottom',\n        }"
                    }],
                    class: [e.$style.action, "icon-font-chess chess-board-plus"],
                    attrs: {
                        href: t.challenge_link
                    },
                    on: {
                        click: function(a) {
                            return e.handleChallengeClick(t)
                        }
                    }
                })])], 1)
            }
            ))], 2)
        }
        ), [], !1, (function connect_tab_friends_injectStyles(e) {
            this.$style = ws.locals || ws
        }
        ), null, null).exports;
        function sortClubs(e, t) {
            return e.last_activity < t.last_activity ? 1 : -1
        }
        var _s = __webpack_require__(2002);
        var gs = e.Z.create({
            withCredentials: !0
        });
        var fs = Object.defineProperty
          , ks = Object.getOwnPropertySymbols
          , vs = Object.prototype.hasOwnProperty
          , ys = Object.prototype.propertyIsEnumerable
          , fetch_defNormalProp = (e,t,a)=>t in e ? fs(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a;
        async function fetch(e) {
            return async function publish(e) {
                var t;
                let a = window.PubSub.options.url[e.service || "base"];
                const s = e.path instanceof Array ? e.path.join("/") : e.path;
                a.endsWith("/") || s.startsWith("/") || (a += "/");
                const n = {};
                ["staging", "prod"].includes("staging") || (n.uid = null == (t = window.context.user) ? void 0 : t.uuid),
                e.params && Object.assign(n, e.params);
                const r = {};
                return e.requestId && (r["x-chesscom-request-id-client"] = e.requestId),
                e.clientId && (r["x-chesscom-play-client"] = e.clientId),
                e.headers && Object.assign(r, e.headers),
                gs({
                    url: /^http[s]?:/.test(s) ? s : `${a}${s}`,
                    data: e.data,
                    method: e.method || "post",
                    params: n,
                    headers: r,
                    withCredentials: !0
                })
            }(((e,t)=>{
                for (var a in t || (t = {}))
                    vs.call(t, a) && fetch_defNormalProp(e, a, t[a]);
                if (ks)
                    for (var a of ks(t))
                        ys.call(t, a) && fetch_defNormalProp(e, a, t[a]);
                return e
            }
            )({
                method: "get"
            }, e))
        }
        var zs = (e=>(e.None = "none",
        e.Playing = "playing",
        e))(zs || {})
          , xs = (e=>(e.Offline = "offline",
        e.Online = "online",
        e))(xs || {});
        async function getUsersOnlineStatuses(e) {
            const {data: a} = await async function getUsersPresenceData(e) {
                return fetch({
                    service: _s.AM.Presence,
                    path: [_s.fz.Users],
                    params: {
                        ids: e.slice(0, 25).join(",")
                    }
                })
            }(e);
            return a.users.reduce(((e,a)=>(e[a.id] = function transformUserPresenceDto(e) {
                var a, s;
                const {activity: n, activityContext: r, id: o, status: i, statusAt: c, statusAtUncertain: l} = e
                  , u = {
                    battleLink: void 0,
                    eventLink: void 0,
                    gameLink: void 0,
                    id: o,
                    isOfflineStatusUncertain: void 0,
                    isOnline: i === xs.Online,
                    isPlaying: n === zs.Playing,
                    offlineSince: void 0,
                    statusAt: c
                };
                if (i === xs.Offline && (u.offlineSince = c),
                null == (a = null == r ? void 0 : r.games) ? void 0 : a.length) {
                    const e = r.games[0]
                      , a = e.legacyId ? "web_game_live" : "web_game_rcn"
                      , s = e.legacyId || e.id;
                    u.gameLink = t.Z.generate(a, {
                        id: s
                    })
                } else if (null == (s = null == r ? void 0 : r.battles) ? void 0 : s.length) {
                    const e = r.battles[0].id;
                    u.battleLink = t.Z.generate("web_puzzles_mode_battle_view", {
                        shortUuid: e
                    })
                }
                return u.isOfflineStatusUncertain = l,
                u
            }(a),
            e)), {})
        }
        let Es = null;
        async function getFriends() {
            const a = Ba.friends;
            a.isFetching = !0;
            let s = [];
            if (Es)
                s = Es;
            else {
                const n = await async function fetchFriends(a) {
                    const s = t.Z.generate(h);
                    return e.Z.get(s, {
                        headers: {
                            "if-none-match": a
                        }
                    })
                }(a.eTag);
                a.eTag = n.headers.etag,
                s = n.data.friends,
                Es = s
            }
            if (!s.length)
                return a.list = [],
                a.isFetching = !1,
                void (a.hasFetched = !0);
            const n = s.map((e=>e.uuid))
              , r = await getUsersOnlineStatuses(n);
            a.list = s.map((e=>{
                if (!r[e.uuid])
                    return e;
                const {battleLink: a, gameLink: s, isOnline: n, isPlaying: o, statusAt: i} = r[e.uuid];
                return e.is_online = n,
                e.is_playing = o,
                e.challenge_link = t.Z.generate("web_play_new", {
                    opponent: e.username
                }),
                e.now_playing_link = null != s ? s : a,
                e.online_status_updated_at = new Date(i).getTime(),
                e
            }
            )).sort(((e,t)=>{
                const a = Number(t.is_online) - Number(e.is_online);
                return a || Math.sign(t.online_status_updated_at - e.online_status_updated_at)
            }
            )),
            a.isFetching = !1,
            a.hasFetched = !0
        }
        var Ss = (0,
        te.defineComponent)({
            name: "ConnectTabs",
            components: {
                ConnectTabChat: Ga,
                ConnectTabClubs: es,
                ConnectTabFriends: ps,
                ThreeLoadBounce: Qe.Z
            },
            setup() {
                const e = {
                    [Wa.chats.code]: Ga,
                    [Wa.clubs.code]: es,
                    [Wa.friends.code]: ps
                }
                  , t = (0,
                te.computed)((()=>({
                    chats: !0,
                    clubs: Boolean(Ba.clubs.list.length),
                    friends: Boolean(Ba.friends.list.length)
                })))
                  , a = (0,
                te.computed)((()=>Object.keys(Wa).filter((e=>t.value[e]))))
                  , s = (0,
                te.computed)((()=>{
                    if (a.value.find((e=>e === Ba.currentTab)))
                        return Wa[Ba.currentTab];
                    const [e] = a.value;
                    return e ? Wa[e] : null
                }
                ))
                  , n = (0,
                te.computed)((()=>s.value && e[s.value.code]));
                const r = (0,
                te.computed)((()=>{
                    const {chats: e, clubs: t, friends: a} = Ba;
                    return [e, t, a].every((e=>e.hasFetched))
                }
                ))
                  , o = (0,
                te.computed)((()=>{
                    var e;
                    return null == (e = s.value) ? void 0 : e.code
                }
                ))
                  , i = (0,
                te.computed)((()=>{
                    var e;
                    return null == (e = s.value) ? void 0 : e.amplitude_selection
                }
                ));
                return (0,
                te.onMounted)((()=>{
                    !async function getClubs() {
                        var e;
                        const t = Ba.clubs;
                        t.isFetching = !0;
                        const {data: a} = await fetchClubs();
                        (null == (e = a.clubs) ? void 0 : e.length) && (t.list = a.clubs.sort(sortClubs)),
                        t.isFetching = !1,
                        t.hasFetched = !0
                    }(),
                    getFriends()
                }
                )),
                {
                    activeContent: s,
                    activeContentAmplitudeSelection: i,
                    activeContentCode: o,
                    amplitudeLogNavClick: F.b,
                    hasFetched: r,
                    selectTab: function selectTab(e) {
                        Ba.currentTab = e
                    },
                    tabComponentToUse: n,
                    tabs: Wa,
                    visibleTabs: a
                }
            }
        })
          , js = {
            "tabs-container": "connect-tabs-tabs-container",
            tabs: "connect-tabs-tabs",
            tab: "connect-tabs-tab",
            active: "connect-tabs-active",
            "tab-content": "connect-tabs-tab-content",
            "tabless-label": "connect-tabs-tabless-label",
            "loader-container": "connect-tabs-loader-container"
        };
        var Ts = (0,
        ge.Z)(Ss, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style["tabs-container"]
            }, [e.hasFetched ? [e.visibleTabs.length > 1 ? a("div", {
                class: e.$style.tabs
            }, e._l(e.visibleTabs, (function(t) {
                var s;
                return a("button", {
                    key: t,
                    class: (s = {},
                    s[e.$style.tab] = !0,
                    s[e.$style.active] = e.activeContentCode === t,
                    s),
                    domProps: {
                        textContent: e._s(e.tabs[t].name)
                    },
                    on: {
                        click: function(a) {
                            return e.selectTab(t)
                        }
                    }
                })
            }
            )), 0) : e._e(), e._v(" "), e.activeContent ? a("div", {
                class: e.$style["tab-content"],
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.activeContentAmplitudeSelection)
                    }
                }
            }, [1 === e.visibleTabs.length ? a("div", {
                class: e.$style["tabless-label"],
                domProps: {
                    textContent: e._s(e.activeContent.name)
                }
            }) : e._e(), e._v(" "), a(e.tabComponentToUse, {
                tag: "component"
            })], 1) : e._e()] : a("div", {
                class: e.$style["loader-container"]
            }, [a("ThreeLoadBounce", {
                attrs: {
                    theme: "light"
                }
            })], 1)], 2)
        }
        ), [], !1, (function connect_tabs_injectStyles(e) {
            this.$style = js.locals || js
        }
        ), null, null).exports
          , Cs = (0,
        te.defineComponent)({
            name: "SocialPanel",
            components: {
                ConnectTabs: Ts,
                NavLink: Ze,
                NavPanel: Ae
            },
            props: {
                routes: {
                    required: !0,
                    type: Object
                }
            },
            setup: ()=>({
                amplitudeLogNavClick: F.b,
                amplitudeSelections: V.w8,
                handleFriendsClick: e=>{
                    handleGuestClick(e),
                    (0,
                    F.b)(V.w8.SOCIAL_FRIENDS)
                }
                ,
                isGuest: (0,
                q.nJ)(),
                isLoggedIn: isLoggedIn()
            })
        })
          , Os = (0,
        ge.Z)(Cs, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("NavPanel", {
                attrs: {
                    name: "social"
                }
            }, [e.isLoggedIn ? a("NavLink", {
                attrs: {
                    href: e.routes.friends,
                    icon: "friends"
                },
                domProps: {
                    textContent: e._s(e.$trans("Friends"))
                },
                on: {
                    click: function(t) {
                        return e.handleFriendsClick(t)
                    }
                }
            }) : e._e(), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.clubs,
                    icon: "clubs"
                },
                domProps: {
                    textContent: e._s(e.$trans("Clubs"))
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.SOCIAL_CLUBS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.forums,
                    icon: "connect"
                },
                domProps: {
                    textContent: e._s(e.$trans("Forums"))
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.SOCIAL_FORUMS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.members,
                    icon: "members"
                },
                domProps: {
                    textContent: e._s(e.$trans("Members"))
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.SOCIAL_MEMBERS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.blogs,
                    icon: "blogs"
                },
                domProps: {
                    textContent: e._s(e.$trans("Blogs"))
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.SOCIAL_BLOGS)
                    }
                }
            }), e._v(" "), a("NavLink", {
                attrs: {
                    href: e.routes.coaches,
                    icon: "coaches"
                },
                domProps: {
                    textContent: e._s(e.$trans("Coaches"))
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.SOCIAL_COACHES)
                    }
                }
            }), e._v(" "), e.isLoggedIn && !e.isGuest ? a("ConnectTabs") : e._e()], 1)
        }
        ), [], !1, null, null, null).exports;
        const As = document.querySelector('#sb [data-nav-panel="social"]')
          , Ls = As && JSON.parse(As.getAttribute(D.Y4.routes))
          , {show: Ns, hide: Rs} = renderRootComponent({
            component: Os,
            target: As,
            props: {
                routes: Ls
            }
        });
        var Ps = {
            name: "CountryFlag",
            directives: {
                tooltip: ze
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
                    var e, t;
                    return Boolean((null == (t = null == (e = window.chesscom) ? void 0 : e.features) ? void 0 : t.includes("sanction_russia_flag")) && this.isRussia)
                },
                tooltip() {
                    return this.isChessVerified ? _t.Z.trans("Due to the ongoing war and resulting international sanctions, Russian and Belarusian flags will not be shown for players in Verified events.") : this.name
                },
                ukraineLink: ()=>t.Z.generate("web_blog_view", {
                    url: "CHESScom/on-the-invasion-of-ukraine"
                })
            }
        }
          , Is = (0,
        ge.Z)(Ps, (function() {
            var e, t, a = this, s = a.$createElement, n = a._self._c || s;
            return a.isSanctioned ? n("a", {
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
            }) : n("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: a.tooltip,
                    expression: "tooltip"
                }],
                class: ["country-flags-component", ("country-" + a.decoratedCode).toLowerCase(), (t = {},
                t["country-flags-" + a.size] = a.size,
                t)]
            })
        }
        ), [], !1, null, null, null).exports
          , qs = __webpack_require__(3349)
          , Zs = (0,
        te.defineComponent)({
            name: "NavSection"
        })
          , Ms = {
            component: "nav-section-component"
        };
        var $s = (0,
        ge.Z)(Zs, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                class: e.$style.component
            }, [e._t("default")], 2)
        }
        ), [], !1, (function nav_section_injectStyles(e) {
            this.$style = Ms.locals || Ms
        }
        ), null, null).exports;
        const Us = document.getElementById("sb")
          , Ws = null == Us ? void 0 : Us.classList
          , Bs = (0,
        te.reactive)({
            authenticated: isLoggedIn(),
            collapsed: null == Ws ? void 0 : Ws.contains("collapsed"),
            eTag: "",
            forceCollapse: null == Ws ? void 0 : Ws.contains("force-collapse"),
            tvAnnouncement: {
                hash: null,
                isHeadline: !1,
                title: null,
                language: "",
                defaultLanguage: ""
            },
            watchPanels: {
                streamers: [],
                top_events: [],
                top_players: []
            }
        });
        var Ds = (0,
        te.defineComponent)({
            name: "PlayingNow",
            components: {
                Avatar: qs.Z,
                CountryFlag: Is,
                NavSection: $s,
                NavSectionHeader: Je
            },
            emits: ["click"],
            setup() {
                var e, t;
                return {
                    countryCode: e=>{
                        var t;
                        return null == (t = e.country_code) ? void 0 : t.toLowerCase()
                    }
                    ,
                    players: Bs.watchPanels.top_players,
                    getPlayerObserveLink: Xe.topPlayerObserve,
                    sanctionRussiaFlag: null == (t = null == (e = window.chesscom) ? void 0 : e.features) ? void 0 : t.includes("sanction_russia_flag")
                }
            }
        })
          , Hs = {
            header: "playing-now-header",
            avatar: "playing-now-avatar",
            flag: "playing-now-flag",
            badge: "playing-now-badge",
            name: "playing-now-name",
            rating: "playing-now-rating"
        };
        var Fs = (0,
        ge.Z)(Ds, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.players.length ? a("div", {
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }, [a("NavSectionHeader", {
                class: e.$style.header,
                attrs: {
                    text: e.$trans("Playing Now")
                }
            }), e._v(" "), a("NavSection", e._l(e.players, (function(t) {
                return a("a", {
                    key: t.username,
                    staticClass: "nav-result-item",
                    attrs: {
                        href: e.getPlayerObserveLink(t.username),
                        target: "_blank"
                    }
                }, [a("Avatar", {
                    class: e.$style.avatar,
                    attrs: {
                        src: t.avatar,
                        username: t.username
                    }
                }), e._v(" "), t.title ? a("span", {
                    class: [e.$style.badge, "nav-badge"],
                    domProps: {
                        textContent: e._s(t.title)
                    }
                }) : e._e(), e._v(" "), a("span", {
                    class: e.$style.name,
                    domProps: {
                        textContent: e._s(t.username)
                    }
                }), e._v(" "), a("span", {
                    class: e.$style.rating,
                    domProps: {
                        textContent: e._s("(" + t.rating + ")")
                    }
                }), e._v(" "), e.sanctionRussiaFlag ? a("country-flag", {
                    class: e.$style.flag,
                    attrs: {
                        code: e.countryCode(t)
                    }
                }) : a("span", {
                    class: [e.$style.flag, "country-flags-component", "country-" + e.countryCode(t)]
                })], 1)
            }
            )), 0)], 1) : e._e()
        }
        ), [], !1, (function playing_now_injectStyles(e) {
            this.$style = Hs.locals || Hs
        }
        ), null, null).exports
          , Gs = (0,
        te.defineComponent)({
            name: "WatchEvents",
            components: {
                NavSection: $s,
                NavSectionHeader: Je
            },
            props: {
                routes: {
                    required: !0,
                    type: Object
                }
            },
            emits: ["click"],
            setup: ()=>({
                events: Bs.watchPanels.top_events
            })
        })
          , Vs = {
            title: "watch-events-title",
            image: "watch-events-image"
        };
        var Ks = (0,
        ge.Z)(Gs, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }, [a("NavSectionHeader", {
                staticClass: "sprite events",
                attrs: {
                    href: e.routes.events,
                    text: e.$trans("Events")
                }
            }), e._v(" "), a("NavSection", e._l(e.events, (function(t) {
                return a("a", {
                    key: t.username,
                    class: ["nav-result-item", "top-event", {
                        sprite: !t.imageUrl
                    }],
                    attrs: {
                        href: t.url,
                        target: "_self",
                        title: t.title
                    }
                }, [t.imageUrl ? a("img", {
                    class: e.$style.image,
                    attrs: {
                        src: t.imageUrl,
                        height: "22",
                        width: "22"
                    }
                }) : e._e(), e._v(" "), a("span", {
                    class: e.$style.title,
                    domProps: {
                        textContent: e._s(t.title)
                    }
                })])
            }
            )), 0)], 1)
        }
        ), [], !1, (function watch_events_injectStyles(e) {
            this.$style = Vs.locals || Vs
        }
        ), null, null).exports
          , Ys = (0,
        te.defineComponent)({
            name: "WatchStreamers",
            components: {
                Avatar: qs.Z,
                NavSection: $s,
                NavSectionHeader: Je
            },
            props: {
                routes: {
                    required: !0,
                    type: Object
                }
            },
            emits: ["click"],
            setup: ()=>({
                streamers: Bs.watchPanels.streamers
            })
        })
          , Js = {
            avatar: "watch-streamers-avatar",
            name: "watch-streamers-name",
            badgeContainer: "watch-streamers-badgeContainer",
            badge: "watch-streamers-badge",
            program: "watch-streamers-program"
        };
        var Qs = (0,
        ge.Z)(Ys, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }, [a("NavSectionHeader", {
                staticClass: "sprite streamers",
                attrs: {
                    href: e.routes.streamers,
                    text: e.$trans("Streamers")
                }
            }), e._v(" "), e.streamers.length ? a("NavSection", e._l(e.streamers, (function(t) {
                var s;
                return a("a", {
                    key: t.username,
                    staticClass: "nav-result-item",
                    attrs: {
                        href: t.url,
                        target: "_blank"
                    }
                }, [a("Avatar", {
                    class: e.$style.avatar,
                    attrs: {
                        src: t.avatar,
                        username: t.username
                    }
                }), e._v(" "), a("span", {
                    class: e.$style.name,
                    domProps: {
                        textContent: e._s(t.username)
                    }
                }), e._v(" "), a("span", {
                    class: [[e.$style.badgeContainer], "nav-badge", (s = {},
                    s[e.$style.program] = !t.community_streamer,
                    s)]
                }, [a("span", {
                    class: [[e.$style.badge], "icon-font-chess", t.community_streamer ? "tracked-content" : "streamer"]
                })])], 1)
            }
            )), 0) : e._e()], 1)
        }
        ), [], !1, (function watch_streamers_injectStyles(e) {
            this.$style = Js.locals || Js
        }
        ), null, null).exports
          , Xs = (0,
        te.defineComponent)({
            name: "WatchTv",
            components: {
                NavLink: Ze,
                NavSection: $s,
                NavSectionHeader: Je
            },
            emits: ["click"],
            setup: ()=>({
                isLive: (0,
                te.computed)((()=>{
                    var e;
                    return Boolean(null == (e = Bs.tvAnnouncement) ? void 0 : e.title)
                }
                )),
                routes: Z._j,
                tvAnnouncement: Bs.tvAnnouncement
            })
        })
          , en = {
            section: "watch-tv-section",
            title: "watch-tv-title",
            live: "watch-tv-live"
        };
        var tn = (0,
        ge.Z)(Xs, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.isLive ? a("div", {
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }, [a("NavSectionHeader", {
                staticClass: "sprite tv",
                attrs: {
                    href: e.routes.tv,
                    text: e.$trans("ChessTV", {}, "mobile")
                }
            }), e._v(" "), a("NavSection", [e.isLive ? a("a", {
                staticClass: "nav-result-item",
                attrs: {
                    href: e.routes.tv
                }
            }, [a("span", {
                class: [e.$style.title, "sub-link"],
                domProps: {
                    textContent: e._s(e.tvAnnouncement.title)
                }
            }), e._v(" "), a("span", {
                class: [e.$style.live, "nav-badge"],
                domProps: {
                    textContent: e._s(e.$trans("Live"))
                }
            })]) : e._e()])], 1) : a("div", [a("NavLink", {
                attrs: {
                    href: e.routes.tv,
                    icon: "tv",
                    text: e.$trans("ChessTV", {}, "mobile")
                }
            })], 1)
        }
        ), [], !1, (function watch_tv_injectStyles(e) {
            this.$style = en.locals || en
        }
        ), null, null).exports
          , an = (0,
        te.defineComponent)({
            name: "WatchPanel",
            components: {
                NavPanel: Ae,
                PlayingNow: Fs,
                WatchEvents: Ks,
                WatchTv: tn,
                WatchStreamers: Qs
            },
            props: {
                routes: {
                    required: !0,
                    type: Object
                }
            },
            setup: ()=>({
                amplitudeLogNavClick: F.b,
                amplitudeSelections: V.w8
            })
        })
          , sn = (0,
        ge.Z)(an, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("NavPanel", {
                attrs: {
                    name: "watch"
                }
            }, [a("WatchTv", {
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.WATCH_CHESSTV)
                    }
                }
            }), e._v(" "), a("WatchStreamers", {
                attrs: {
                    routes: e.routes
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.WATCH_STREAMERS)
                    }
                }
            }), e._v(" "), a("WatchEvents", {
                attrs: {
                    routes: e.routes
                },
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.WATCH_EVENTS)
                    }
                }
            }), e._v(" "), a("PlayingNow", {
                on: {
                    click: function(t) {
                        return e.amplitudeLogNavClick(e.amplitudeSelections.WATCH_PLAYINGNOW)
                    }
                }
            })], 1)
        }
        ), [], !1, null, null, null).exports;
        const nn = document.querySelector('#sb [data-nav-panel="watch"]')
          , rn = nn && JSON.parse(nn.getAttribute(D.Y4.routes))
          , {show: cn, hide: ln} = renderRootComponent({
            component: sn,
            target: nn,
            props: {
                routes: rn
            }
        })
          , un = {
            ["learn"]: {
                load: aa,
                remove: sa
            },
            ["home"]: {
                load: ()=>{
                    if (isLoggedIn())
                        return fetch_notifications_fetchNotifications(),
                        Ht()
                }
                ,
                remove: Gt
            },
            ["play"]: {
                load: ()=>(isLoggedIn() && fetch_notifications_fetchNotifications(),
                za()),
                remove: Ea
            },
            ["watch"]: {
                load: cn,
                remove: ln
            },
            ["more"]: {
                load: ca,
                remove: la
            },
            ["puzzles"]: {
                load: Oa,
                remove: Aa
            },
            ["news"]: {
                load: ma,
                remove: wa
            },
            ["social"]: {
                load: Ns,
                remove: Rs
            }
        }
          , dn = (0,
        H.U)(V.wl.MAIN_TOP_NAV_LINKS)
          , hidePanel = e=>{
            var t;
            null != e && (e.classList.remove(V.Sh.HOVER),
            t = e.getAttribute("data-nav-link"),
            un[t] && un[t].remove())
        }
          , hidePanels = ()=>{
            null != dn && dn.forEach((e=>{
                e.classList && e.classList.contains(V.Sh.HOVER) && hidePanel(e)
            }
            ))
        }
          , showPanel = e=>{
            var t;
            null != e && (t = e.getAttribute("data-nav-link"),
            un[t] && un[t].load(),
            e.classList.add(V.Sh.HOVER))
        }
          , hn = 100
          , bn = {
            false: hn,
            true: 1500
        };
        window.chesscom = Object.assign(window.chesscom || {}, {
            isLongDelay: !1
        });
        const getNavDropdownDelay = ()=>bn[window.chesscom.isLongDelay];
        let mn = 0
          , wn = null;
        const mouseEnterEvent = e=>{
            const t = e.target;
            wn = t,
            mn++,
            setTimeout((()=>{
                mn--,
                wn === t && (hidePanels(),
                showPanel(t))
            }
            ), getNavDropdownDelay())
        }
          , mouseLeaveEvent = ()=>{
            wn = null,
            setTimeout((()=>{
                const e = document.querySelector(".nav-panel-component:hover");
                e ? e.addEventListener("mouseleave", mouseLeaveEvent) : (0 === mn || getNavDropdownDelay() > hn) && hidePanels()
            }
            ), hn)
        }
        ;
        Q.tq && (()=>{
            Array.from(document.querySelectorAll(V.wl.MAIN_TOP_NAV_LINKS)).forEach((e=>e.addEventListener("click", (t=>{
                !e.href && !e.getAttribute("goto") || e.classList.contains(V.Sh.HOVER) || (t.preventDefault(),
                t.stopImmediatePropagation(),
                hidePanels(),
                showPanel(e))
            }
            ))));
            const e = document.querySelector(V.wl.NAV_SETTINGS);
            if (!e)
                return;
            let t = 0;
            e.addEventListener("click", (e=>{
                t++,
                t < 2 && e.preventDefault()
            }
            ))
        }
        )(),
        dn.forEach((e=>{
            e.addEventListener("mouseenter", mouseEnterEvent),
            e.addEventListener("mouseleave", mouseLeaveEvent)
        }
        ));
        var pn = {
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
          , _n = {
            component: "loader-three-bounce-component",
            circle: "loader-three-bounce-circle",
            dot: "loader-three-bounce-dot",
            animate: "loader-three-bounce-animate",
            bounce1: "loader-three-bounce-bounce1",
            bounce2: "loader-three-bounce-bounce2"
        };
        var gn = (0,
        ge.Z)(pn, (function() {
            var e, t = this, a = t.$createElement, s = t._self._c || a;
            return s("div", {
                class: [t.$style.component, (e = {},
                e[t.$style.circle] = t.isCircle,
                e)],
                style: {
                    width: t.size + "px"
                },
                attrs: {
                    "data-test-element": "loader-three-bounce"
                }
            }, [s("div", {
                class: [t.$style.dot, t.$style.bounce1],
                style: t.dotCss
            }), t._v(" "), s("div", {
                class: [t.$style.dot, t.$style.bounce2],
                style: t.dotCss
            }), t._v(" "), s("div", {
                class: t.$style.dot,
                style: t.dotCss
            })])
        }
        ), [], !1, (function loader_three_bounce_injectStyles(e) {
            this.$style = _n.locals || _n
        }
        ), null, null).exports
          , fn = (0,
        te.defineComponent)({
            name: "PopoverFriends",
            components: {
                LoaderThreeBounce: gn,
                NavAvatar: Ya,
                V5InputGroup: Za.V5InputGroup
            },
            directives: {
                tooltip: ze
            },
            setup() {
                const e = (0,
                te.computed)((()=>Ba.friends.hasFetched))
                  , a = Ba.friends
                  , s = (0,
                te.computed)((()=>a.searchString ? a.searchResults : a.list))
                  , n = (0,
                te.computed)((()=>s.value.slice(0, 15)))
                  , r = (0,
                te.computed)((()=>a.searchString && a.searchString.length < 3))
                  , o = (0,
                te.computed)((()=>a.isSearching || !e.value))
                  , i = bs(searchFriends, 250);
                function logToAmplitude(e) {
                    G.Z.logEvent("presenceUiClick", {
                        selection: e,
                        location: "navbar"
                    })
                }
                return {
                    filteredFriends: n,
                    friendsState: a,
                    handleChallengeClick: function handleChallengeClick() {
                        logToAmplitude("challenge")
                    },
                    handleWatchClick: function handleWatchClick() {
                        logToAmplitude("watch")
                    },
                    hasFetched: e,
                    isLoading: o,
                    onFriendSearch: i,
                    profileUrl: e=>t.Z.generate("web_member_view", {
                        username: e
                    }),
                    routes: Xe,
                    showError: r,
                    startDirectChat: startDirectChat
                }
            }
        })
          , kn = {
            component: "popover-friends-component",
            header: "popover-friends-header",
            "header-link": "popover-friends-header-link",
            "header-name": "popover-friends-header-name",
            "header-icon": "popover-friends-header-icon",
            item: "popover-friends-item",
            action: "popover-friends-action",
            title: "popover-friends-title",
            content: "popover-friends-content",
            avatar: "popover-friends-avatar",
            username: "popover-friends-username",
            "time-left": "popover-friends-time-left",
            chevron: "popover-friends-chevron",
            "play-chevron": "popover-friends-play-chevron",
            "message-chevron": "popover-friends-message-chevron",
            "friends-chevron": "popover-friends-friends-chevron",
            tagline: "popover-friends-tagline",
            input: "popover-friends-input",
            "empty-buttons": "popover-friends-empty-buttons",
            "no-results": "popover-friends-no-results",
            button: "popover-friends-button",
            "results-block": "popover-friends-results-block",
            "actions-wrapper": "popover-friends-actions-wrapper",
            "action-watch": "popover-friends-action-watch"
        };
        var vn = (0,
        ge.Z)(fn, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component,
                attrs: {
                    "data-popover-friends-component": ""
                }
            }, [a("div", {
                class: [e.$style.chevron, e.$style["friends-chevron"]]
            }), e._v(" "), a("div", {
                class: e.$style.header
            }, [a("a", {
                staticClass: "v5-header-link",
                class: e.$style["header-link"],
                attrs: {
                    href: e.routes.friendRequests
                }
            }, [a("span", {
                staticClass: "v5-header-name",
                class: e.$style["header-name"],
                domProps: {
                    textContent: e._s(e.$trans("Friends"))
                }
            }), e._v(" "), a("span", {
                staticClass: "icon-font-chess v5-header-chevron chevron-right",
                class: e.$style["header-icon"]
            })])]), e._v(" "), a("div", {
                class: e.$style.content
            }, [a("v5-input-group", {
                class: e.$style.input,
                attrs: {
                    "icon-right": "magnifying-glass",
                    placeholder: e.$trans("Type friend name...")
                },
                on: {
                    input: e.onFriendSearch
                }
            }), e._v(" "), e.isLoading || e.showError ? a("div", {
                class: e.$style["no-results"]
            }, [e.showError ? a("span", {
                domProps: {
                    textContent: e._s(e.$trans("Please enter %number% or more characters", {
                        "%number%": 3
                    }))
                }
            }) : e.isLoading ? a("LoaderThreeBounce", {
                attrs: {
                    "is-circle": "",
                    size: 40
                }
            }) : e._e()], 1) : e._e(), e._v(" "), a("div", {
                class: e.$style["results-block"]
            }, [e.hasFetched ? a("div", e._l(e.filteredFriends, (function(t) {
                return a("a", {
                    key: t.id,
                    class: e.$style.item,
                    attrs: {
                        href: e.profileUrl(t.username)
                    }
                }, [a("NavAvatar", {
                    attrs: {
                        "is-online": t.is_online,
                        "is-playing": t.is_playing,
                        size: 32,
                        src: t.avatar_url,
                        username: t.username
                    }
                }), e._v(" "), a("span", {
                    class: e.$style.username,
                    domProps: {
                        textContent: e._s(t.username)
                    }
                }), e._v(" "), a("span", {
                    class: e.$style["actions-wrapper"]
                }, [a("button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: e.$trans("Chat"),
                            position: "bottom"
                        },
                        expression: "{\n                content: $trans('Chat'),\n                position: 'bottom',\n              }"
                    }],
                    class: [e.$style.action, "icon-font-chess chat"],
                    on: {
                        click: function(a) {
                            return a.preventDefault(),
                            e.startDirectChat(t)
                        }
                    }
                }), e._v(" "), t.now_playing_link ? a("a", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: e.$trans("Watch"),
                            position: "bottom"
                        },
                        expression: "{\n                content: $trans('Watch'),\n                position: 'bottom',\n              }"
                    }],
                    class: [e.$style.action, e.$style["action-watch"], "icon-font-chess binoculars"],
                    attrs: {
                        href: t.now_playing_link
                    },
                    on: {
                        click: function(a) {
                            return e.handleWatchClick(t)
                        }
                    }
                }) : a("a", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: e.$trans("Challenge"),
                            position: "bottom"
                        },
                        expression: "{\n                content: $trans('Challenge'),\n                position: 'bottom',\n              }"
                    }],
                    class: [e.$style.action, "icon-font-chess chess-board-plus"],
                    attrs: {
                        href: t.challenge_link
                    },
                    on: {
                        click: function(a) {
                            return e.handleChallengeClick(t)
                        }
                    }
                })])], 1)
            }
            )), 0) : e._e(), e._v(" "), !e.friendsState.searchString && e.hasFetched && 0 === e.filteredFriends.length ? a("div", {
                class: e.$style["no-results"]
            }, [e._v("\n        " + e._s(e.$trans("No friends yet")) + "\n\n        "), a("div", {
                class: e.$style["empty-buttons"]
            }, [a("a", {
                staticClass: "ui_v5-button-component ui_v5-button-basic ui_v5-button-small",
                class: e.$style.button,
                attrs: {
                    href: e.routes.friendFind
                },
                domProps: {
                    textContent: e._s(e.$trans("Find"))
                }
            }), e._v(" "), a("a", {
                staticClass: "ui_v5-button-component ui_v5-button-basic ui_v5-button-small",
                class: e.$style.button,
                attrs: {
                    href: e.routes.friendInvite
                },
                domProps: {
                    textContent: e._s(e.$trans("Invite"))
                }
            })])]) : e._e(), e._v(" "), e.friendsState.searchString.length >= 3 && !e.friendsState.isSearching && 0 === e.filteredFriends.length ? a("div", {
                class: e.$style["no-results"],
                domProps: {
                    textContent: e._s(e.$trans("No friends found"))
                }
            }) : e._e()])], 1)])
        }
        ), [], !1, (function popover_friends_injectStyles(e) {
            this.$style = kn.locals || kn
        }
        ), null, null).exports;
        const yn = document.querySelector("[data-toolbar-friends]")
          , zn = document.querySelector("[data-popover-friends]")
          , xn = document.querySelector("[data-popover-friends-wrapper]");
        let En = !0;
        const Sn = renderRootComponent({
            component: vn,
            target: zn
        });
        null == yn || yn.addEventListener("mouseenter", (()=>{
            En && (En = !1,
            function getFriendsOnlineCount() {
                const a = t.Z.generate(d);
                return e.Z.get(a)
            }().then((({data: e})=>{
                e.count > 0 ? yn.classList.add("is-online") : yn.classList.remove("is-online")
            }
            )),
            getFriends(),
            setTimeout((()=>{
                En = !0
            }
            ), 1e4)),
            xn.classList.contains("is-ready") || (Sn.show(),
            xn.classList.add("is-ready"))
        }
        )),
        null == yn || yn.addEventListener("click", (e=>{
            zn && "hidden" !== window.getComputedStyle(xn).visibility || e.preventDefault()
        }
        ));
        var jn = {
            name: "UserChessTitle",
            directives: {
                Tooltip: ze
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
                    fullTitle: Ct.rP[this.title]
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
          , Tn = {
            component: "user-chess-title-component"
        };
        var Cn = (0,
        ge.Z)(jn, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
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
        ), [], !1, (function user_chess_title_injectStyles(e) {
            this.$style = Tn.locals || Tn
        }
        ), null, null).exports
          , On = {
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
                    default: Ct.Wp.code
                },
                size: {
                    type: String
                }
            },
            emits: ["click"],
            computed: {
                isNothing() {
                    return this.code === Ct.Wp.code
                }
            }
        }
          , An = (0,
        ge.Z)(On, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.showTheNothingFlair || !e.isNothing ? a("span", {
                class: ["flair-component", "flair-" + e.code, "flair-" + e.size],
                on: {
                    click: function(t) {
                        return e.$emit("click", t)
                    }
                }
            }) : e._e()
        }
        ), [], !1, null, null, null).exports
          , Ln = __webpack_require__(7122);
        const Nn = "web_user_settings_edit"
          , profile_config_routes_communityGuidelines = ()=>(0,
        Ln.b)("web_policies_community")
          , profile_config_routes_settings = ()=>(0,
        Ln.b)(Nn);
        _t.Z.trans("Are you sure you want to disable this account?"),
        _t.Z.trans("Edit status"),
        _t.Z.trans("Are you sure you want to enable this account?"),
        _t.Z.trans("Enter a status here"),
        _t.Z.trans("Are you sure you want to impersonate this user?"),
        _t.Z.trans("Error occurred"),
        _t.Z.trans("Are you sure you want to mute this user?"),
        _t.Z.trans("Are you sure you want to remove user About section?"),
        _t.Z.trans("Are you sure you want to remove this user's avatar?"),
        _t.Z.trans("Are you sure you want to remove this user's background?"),
        _t.Z.trans("Are you sure you want to report user for spamming?"),
        _t.Z.trans("Are you sure you want to reset this user's flair?"),
        _t.Z.trans("Save status"),
        _t.Z.trans("Your status must be %len% characters or less", {
            "%len%": 50
        }),
        _t.Z.trans("Are you sure you want to stop impersonating this user?"),
        _t.Z.trans("Are you sure you want to unmute this user?"),
        _t.Z.trans("Your post seems to not fit our <a href=%url%>Community Guidelines</a>. Repeated violations may result in your account being restricted. Thank you for helping Chess.com stay a fun and friendly place for all!", {
            "%url%": profile_config_routes_communityGuidelines()
        });
        var Rn = {
            name: "UserFlairIcon",
            components: {
                Flair: An
            },
            directives: {
                Tooltip: ze
            },
            mixins: [{
                props: {
                    membership: {
                        type: Number
                    }
                },
                computed: {
                    flairHref() {
                        return (({code: e, flairMembership: t, selfIsPremium: a})=>t >= Ct.p0.moderator ? Ct._j.about() : t === Ct.p0.cheater || t === Ct.p0.abuser ? profile_config_routes_communityGuidelines() : Ct.yc.includes(e) ? "" : a ? `${profile_config_routes_settings()}#flair-modal` : Ct._j.membership("flair"))({
                            code: this.standardizedFlairCodeFromMixin,
                            flairMembership: this.membership,
                            selfIsPremium: (0,
                            q.S_)("isPremium"),
                            selfIsModerator: (0,
                            q.S_)("isModerator")
                        })
                    },
                    flairTooltip() {
                        return (({code: e, flairMembership: t})=>t >= Ct.p0.staff ? Ct.Iz.staff : t >= Ct.p0.moderator ? Ct.Iz.moderator : t < Ct.p0.basic ? Ct.Cz[t] : Ct.yc.includes(e) ? Ct.Cz[Ct.p0.unspecifiedClosed] : Ct.Iz.showYourFlair)({
                            code: this.standardizedFlairCodeFromMixin,
                            flairMembership: this.membership
                        })
                    },
                    shouldSeeUpgradeModal: ()=>!(0,
                    q.S_)("isPremium"),
                    standardizedFlairCodeFromMixin() {
                        return this.code || this.userFlair && this.userFlair.code || Ct.Wp.code
                    }
                },
                methods: {
                    handleFlairClick() {
                        this.shouldSeeUpgradeModal ? ((e={})=>{
                            (0,
                            Re.o)({
                                key: D.U3.SHOW_UPGRADE_MODAL,
                                payload: e
                            })
                        }
                        )({
                            referral: "flair",
                            startingSlide: "flair",
                            title: this.$trans("Want Your Own Flair?")
                        }) : this.flairHref.length && window.open(this.flairHref, "_blank")
                    }
                }
            }],
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
          , Pn = {
            component: "user-flair-icon-component"
        };
        var In = (0,
        ge.Z)(Rn, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.code ? a("a", {
                class: e.$style.component,
                attrs: {
                    "aria-label": e.flairTooltip,
                    href: e.flairHref
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        t.preventDefault(),
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
        ), [], !1, (function user_flair_icon_injectStyles(e) {
            this.$style = Pn.locals || Pn
        }
        ), null, null)
          , qn = {
            name: "UserTagline",
            components: {
                CountryFlag: Is,
                UserChessTitle: Cn,
                UserFlairIcon: In.exports,
                UserUsername: __webpack_require__(9685).Z
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
                    default: Ct.p0.basic
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
          , Zn = {
            component: "user-tagline-component",
            username: "user-tagline-username",
            "not-clickable": "user-tagline-not-clickable",
            rating: "user-tagline-rating",
            darkMode: "user-tagline-darkMode",
            dark: "user-tagline-dark"
        };
        var Mn = (0,
        ge.Z)(qn, (function() {
            var e, t, a = this, s = a.$createElement, n = a._self._c || s;
            return n("div", {
                class: [a.$style.component, (e = {},
                e[a.$style.darkMode] = a.isDarkMode,
                e)]
            }, [a.title ? n("user-chess-title", {
                attrs: {
                    "open-new-tab": a.openTitleOnNewTab,
                    url: a.titleUrl,
                    title: a.title
                }
            }) : a._e(), a._v(" "), n("user-username", {
                class: [a.$style.username, (t = {},
                t[a.$style["not-clickable"]] = a.notClickable,
                t)],
                attrs: {
                    "is-clickable": a.isUsernameClickable,
                    "open-new-tab": a.openProfileOnNewTab,
                    theme: a.isDarkMode ? "dark" : a.usernameTheme,
                    url: a.url,
                    "data-test-element": "user-tagline-username",
                    username: a.username
                }
            }), a._v(" "), a.rating ? n("span", {
                class: [a.$style.rating, a.$style[a.usernameTheme]]
            }, [a._v("\n    (" + a._s(a.rating) + ")\n  ")]) : a._e(), a._v(" "), a.country ? n("country-flag", {
                attrs: {
                    code: a.country.code,
                    name: a.country.name
                }
            }) : a._e(), a._v(" "), a.flairCode || a.membership ? n("user-flair-icon", {
                attrs: {
                    code: a.flairCode,
                    membership: a.membership
                }
            }) : a._e(), a._v(" "), a._t("default")], 2)
        }
        ), [], !1, (function user_tagline_injectStyles(e) {
            this.$style = Zn.locals || Zn
        }
        ), null, null).exports;
        const cleanTinyMCE = e=>{
            const t = (e=>e.replace(/(<(?!img|\/?iframe)([^>]+)>)/gi, ""))(e)
              , a = (e=>e.replace(/&nbsp;/g, ""))(t);
            return a.trim()
        }
        ;
        var $n = __webpack_require__(8033);
        _t.Z.trans("Articles"),
        _t.Z.trans("Following"),
        _t.Z.trans("News"),
        _t.Z.trans("Premium Content"),
        _t.Z.trans("Top Blogs"),
        _t.Z.trans("Videos"),
        [5, 10, 20].map((e=>({
            name: _t.Z.transChoice("{1} 1 Game|]1,Inf] %count% Games", e, {
                "%count%": e
            }),
            value: e
        })));
        const Un = "web_user_game_settings_callback_dark_mode_toggle"
          , Wn = ([4, 8, 12, 24].map((e=>({
            name: _t.Z.transChoice("{1} 1 Game|]1,Inf] %count% Games", e, {
                "%count%": e
            }),
            value: e
        }))),
        [1, 2, 3, 4].map((e=>({
            name: _t.Z.transChoice("{1} 1 Row|]1,Inf] %count% Rows", e, {
                "%count%": e
            }),
            value: e
        }))),
        {
            new_game: _t.Z.trans("New Game"),
            puzzles: _t.Z.trans("Puzzles"),
            lessons: _t.Z.trans("Lessons"),
            computer: _t.Z.trans("vs Computer"),
            tournaments: _t.Z.trans("Tournaments"),
            stats: _t.Z.trans("Stats"),
            chess_today: _t.Z.trans("Chess Today"),
            arena: _t.Z.trans("Arena"),
            analysis: _t.Z.trans("Analysis"),
            four_player_chess: _t.Z.trans("Four Player Chess"),
            vote: _t.Z.trans("Vote Chess"),
            chess_tv: _t.Z.trans("ChessTV"),
            forums: _t.Z.trans("Forums"),
            puzzle_battle: _t.Z.trans("Puzzle Battle"),
            puzzle_rush: _t.Z.trans("Puzzle Rush"),
            events: _t.Z.trans("Events"),
            archive: _t.Z.trans("Archive")
        })
          , Bn = (Object.keys(Wn).map((e=>({
            name: Wn[e],
            value: e
        }))),
        {
            daily: t.Z.generate("web_play_daily"),
            play: t.Z.generate("web_play"),
            playPage: t.Z.generate("web_page_play"),
            nextPuzzle: t.Z.generate("web_tactics_callback_rated_next"),
            messages: t.Z.generate("web_message_index"),
            messageThread: e=>t.Z.generate("web_message_thread", {
                username: e
            })
        });
        _t.Z.trans("Activity"),
        _t.Z.trans("Alerts"),
        _t.Z.trans("Archive"),
        _t.Z.trans("Awards"),
        _t.Z.trans("ChessTV"),
        _t.Z.trans("Club Events"),
        _t.Z.trans("Clubs"),
        _t.Z.trans("Daily Puzzle"),
        _t.Z.trans("daily", {}, "mobile"),
        _t.Z.trans("Feature Intro"),
        _t.Z.trans("Friends"),
        _t.Z.trans("Friends"),
        _t.Z.trans("Game Of The Day"),
        _t.Z.trans("Leagues"),
        _t.Z.trans("Messages"),
        _t.Z.trans("Notes"),
        _t.Z.trans("Quick Links"),
        _t.Z.trans("Quick Links"),
        _t.Z.trans("Popular features"),
        _t.Z.trans("Stats"),
        _t.Z.trans("Streamers"),
        _t.Z.trans("Tournaments");
        function markAllAsRead() {
            const a = t.Z.generate("web_message_callback_mark_all_as_read");
            return e.Z.post(a)
        }
        function list(a, s) {
            const n = t.Z.generate("web_message_callback_list", {
                type: a,
                page: s
            });
            return e.Z.get(n)
        }
        var Dn = (0,
        te.defineComponent)({
            name: "PopoverMessages",
            components: {
                UserTagline: Mn
            },
            setup() {
                const e = (0,
                te.ref)(!1)
                  , t = (0,
                te.ref)([])
                  , a = (0,
                te.ref)(!0)
                  , s = (0,
                te.computed)((()=>Y.w.badges.messages > 0))
                  , n = document.querySelector('[data-badge="messages"]');
                return (0,
                te.onMounted)((async()=>{
                    const {data: e} = await list("inbox", 1);
                    t.value = e.slice(0, 7)
                }
                )),
                {
                    cleanTinyMCE: cleanTinyMCE,
                    formatDate: jt.relative,
                    hasNewMessages: s,
                    isMarkedAllAsRead: e,
                    markAllAsReadHandler: ()=>{
                        e.value = !0,
                        markAllAsRead().then((()=>{
                            n.dataset.badgeCount = "0",
                            a.value = !1,
                            fetch_notifications_fetchNotifications()
                        }
                        )).catch($n.Z)
                    }
                    ,
                    messages: t,
                    messageThread: Bn.messageThread,
                    messagesRoute: Bn.messages,
                    pixelDensity: Tt.q,
                    showMarkAllAsRead: a
                }
            }
        })
          , Hn = {
            component: "popover-messages-component",
            header: "popover-messages-header",
            "header-link": "popover-messages-header-link",
            "header-name": "popover-messages-header-name",
            "header-icon": "popover-messages-header-icon",
            item: "popover-messages-item",
            action: "popover-messages-action",
            title: "popover-messages-title",
            content: "popover-messages-content",
            avatar: "popover-messages-avatar",
            username: "popover-messages-username",
            "time-left": "popover-messages-time-left",
            chevron: "popover-messages-chevron",
            "play-chevron": "popover-messages-play-chevron",
            "message-chevron": "popover-messages-message-chevron",
            "friends-chevron": "popover-messages-friends-chevron",
            tagline: "popover-messages-tagline",
            button: "popover-messages-button",
            unread: "popover-messages-unread",
            date: "popover-messages-date",
            preview: "popover-messages-preview",
            "content-message": "popover-messages-content-message"
        };
        var Fn = (0,
        ge.Z)(Dn, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return e.messages && e.messages.length > 0 ? a("div", {
                class: e.$style.component,
                attrs: {
                    "data-popover-message-component": ""
                }
            }, [a("div", {
                class: [e.$style.chevron, e.$style["message-chevron"]]
            }), e._v(" "), a("div", {
                class: e.$style.header
            }, [a("a", {
                staticClass: "v5-header-link",
                class: e.$style["header-link"],
                attrs: {
                    href: e.messagesRoute
                }
            }, [a("span", {
                staticClass: "v5-header-name",
                class: e.$style["header-name"],
                domProps: {
                    textContent: e._s(e.$trans("Messages"))
                }
            }), e._v(" "), a("span", {
                staticClass: "icon-font-chess v5-header-chevron chevron-right",
                class: e.$style["header-icon"]
            })]), e._v(" "), e.showMarkAllAsRead && e.hasNewMessages ? a("button", {
                class: e.$style.button,
                attrs: {
                    type: "button",
                    disabled: e.isMarkedAllAsRead
                },
                domProps: {
                    textContent: e._s(e.$trans("Mark all as read"))
                },
                on: {
                    click: e.markAllAsReadHandler
                }
            }) : e._e()]), e._v(" "), a("div", {
                class: e.$style.content
            }, e._l(e.messages, (function(t, s) {
                var n;
                return a("a", {
                    key: s,
                    class: [e.$style.item, (n = {},
                    n[e.$style.unread] = t.new_messages_count > 0 && !e.isMarkedAllAsRead,
                    n)],
                    attrs: {
                        href: e.messageThread(t.user.username)
                    }
                }, [a("img", {
                    class: e.$style.avatar,
                    attrs: {
                        height: 32,
                        src: t.user_avatar_url,
                        srcset: e.pixelDensity(t.user_avatar_url),
                        width: 32
                    }
                }), e._v(" "), a("div", {
                    class: e.$style["content-message"]
                }, [a("user-tagline", {
                    class: e.$style.tagline,
                    attrs: {
                        "username-theme": "blue-with-dark-mode",
                        country: Object.assign({}, t.user.country, {
                            code: t.user.country.code.toLowerCase()
                        }),
                        "flair-code": t.flair_code,
                        title: t.user.chess_title,
                        username: t.user.username
                    }
                }), e._v(" "), a("div", {
                    class: e.$style.preview,
                    domProps: {
                        textContent: e._s(e.cleanTinyMCE(t.last_message_content))
                    }
                })], 1), e._v(" "), a("div", {
                    class: e.$style.date,
                    domProps: {
                        textContent: e._s(e.formatDate(t.last_message_created_at))
                    }
                })])
            }
            )), 0)]) : e._e()
        }
        ), [], !1, (function popover_messages_injectStyles(e) {
            this.$style = Hn.locals || Hn
        }
        ), null, null).exports;
        const Gn = document.querySelector("[data-toolbar-messages]")
          , Vn = document.querySelector("[data-popover-messages]")
          , Kn = document.querySelector("[data-popover-messages-wrapper]")
          , Yn = renderRootComponent({
            component: Fn,
            target: Vn
        })
          , handle_popover_messages_showComponent = ()=>{
            Yn.show(),
            Kn.classList.add("is-ready"),
            null == Gn || Gn.removeEventListener("mouseenter", handle_popover_messages_showComponent)
        }
        ;
        null == Gn || Gn.addEventListener("mouseenter", handle_popover_messages_showComponent),
        null == Gn || Gn.addEventListener("click", (e=>{
            Vn && "hidden" !== window.getComputedStyle(Kn).visibility || e.preventDefault()
        }
        ));
        const clickOutside = e=>new Promise((t=>{
            const documentListener = a=>{
                (void 0 === a.target.contains || a.target !== e && !e.contains(a.target)) && (t(),
                document.removeEventListener("click", documentListener))
            }
            ;
            setTimeout((()=>{
                document.addEventListener("click", documentListener)
            }
            ))
        }
        ));
        var Jn = (0,
        te.defineComponent)({
            name: "PopoverNotifications",
            components: {
                Notifications: Wt
            }
        })
          , Qn = {
            component: "popover-notifications-component",
            content: "popover-notifications-content",
            chevron: "popover-notifications-chevron"
        };
        var Xn = (0,
        ge.Z)(Jn, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component,
                attrs: {
                    "data-popover-notifications-component": ""
                }
            }, [a("div", {
                class: e.$style.chevron
            }), e._v(" "), a("Notifications", {
                class: e.$style.content,
                attrs: {
                    "are-controls-visible": "",
                    "is-popover": ""
                }
            })], 1)
        }
        ), [], !1, (function popover_notifications_injectStyles(e) {
            this.$style = Qn.locals || Qn
        }
        ), null, null).exports;
        const er = document.querySelector("[data-toolbar-notifications]")
          , tr = document.querySelector("[data-toolbar-new-notifications]")
          , ar = document.querySelector("[data-popover-notifications-wrapper]")
          , sr = renderRootComponent({
            component: Xn,
            target: document.querySelector("[data-popover-notifications]")
        })
          , listener = ()=>{
            fetch_notifications_fetchNotifications(),
            sr.show(),
            ar.classList.add("is-active"),
            null == er || er.removeEventListener("click", listener),
            clickOutside(document.querySelector("[data-popover-notifications-component]")).then((()=>{
                ar.classList.remove("is-active"),
                null == er || er.addEventListener("click", listener)
            }
            ))
        }
        ;
        null == er || er.addEventListener("click", listener);
        const handle_popover_notifications_showComponent = ()=>{
            fetch_notifications_fetchNotifications(),
            sr.show(),
            ar.classList.add("is-ready"),
            null == tr || tr.removeEventListener("mouseenter", handle_popover_notifications_showComponent)
        }
        ;
        null == tr || tr.addEventListener("mouseenter", handle_popover_notifications_showComponent),
        null == tr || tr.addEventListener("click", (e=>{
            "hidden" === window.getComputedStyle(ar).visibility && e.preventDefault()
        }
        ));
        var nr = (0,
        te.defineComponent)({
            name: "PopoverSettings",
            props: {
                routes: {
                    type: Object
                }
            },
            setup: ()=>({
                submitLogoutForm: submitLogoutForm
            })
        })
          , rr = {
            component: "popover-settings-component",
            header: "popover-settings-header",
            "header-link": "popover-settings-header-link",
            "header-name": "popover-settings-header-name",
            "header-icon": "popover-settings-header-icon",
            item: "popover-settings-item",
            title: "popover-settings-title",
            icon: "popover-settings-icon",
            chevron: "popover-settings-chevron",
            content: "popover-settings-content"
        };
        var or = (0,
        ge.Z)(nr, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component,
                attrs: {
                    "data-popover-settings-component": ""
                }
            }, [a("div", {
                class: e.$style.chevron
            }), e._v(" "), a("div", {
                class: e.$style.header
            }, [a("a", {
                staticClass: "v5-header-link",
                class: e.$style["header-link"],
                attrs: {
                    href: e.routes.settings
                }
            }, [a("span", {
                staticClass: "v5-header-name",
                class: e.$style["header-name"],
                domProps: {
                    textContent: e._s(e.$trans("Settings"))
                }
            }), e._v(" "), a("span", {
                staticClass: "icon-font-chess v5-header-chevron chevron-right",
                class: e.$style["header-icon"]
            })])]), e._v(" "), a("div", {
                class: e.$style.content
            }, [a("a", {
                class: e.$style.item,
                attrs: {
                    href: e.routes.settings
                }
            }, [a("span", {
                staticClass: "icon-font-chess",
                class: [e.$style.icon, "user"]
            }), e._v(" "), a("span", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.$trans("Profile"))
                }
            })]), e._v(" "), a("a", {
                class: e.$style.item,
                attrs: {
                    href: e.routes.boardSettings
                }
            }, [a("span", {
                staticClass: "icon-font-chess chess-board",
                class: e.$style.icon
            }), e._v(" "), a("span", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.$trans("Board and Pieces"))
                }
            })]), e._v(" "), a("a", {
                class: e.$style.item,
                attrs: {
                    href: e.routes.themes
                }
            }, [a("span", {
                staticClass: "icon-font-chess square-brush",
                class: e.$style.icon
            }), e._v(" "), a("span", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.$trans("Themes"))
                }
            })]), e._v(" "), a("a", {
                class: e.$style.item,
                attrs: {
                    href: e.routes.liveSettings
                }
            }, [a("span", {
                staticClass: "icon-font-chess circle-timer",
                class: e.$style.icon
            }), e._v(" "), a("span", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.$trans("Live Chess"))
                }
            })]), e._v(" "), a("a", {
                class: e.$style.item,
                attrs: {
                    href: e.routes.dailySettings
                }
            }, [a("span", {
                staticClass: "icon-font-chess daily",
                class: e.$style.icon
            }), e._v(" "), a("span", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.$trans("Daily Chess"))
                }
            })]), e._v(" "), a("a", {
                class: e.$style.item,
                attrs: {
                    href: e.routes.home
                }
            }, [a("span", {
                staticClass: "icon-font-chess custom-home",
                class: e.$style.icon
            }), e._v(" "), a("span", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.$trans("Home Settings"))
                }
            })]), e._v(" "), a("a", {
                class: e.$style.item,
                on: {
                    click: e.submitLogoutForm
                }
            }, [a("span", {
                staticClass: "icon-font-chess",
                class: [e.$style.icon, "exit"]
            }), e._v(" "), a("span", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.$trans("Log Out"))
                }
            })])])])
        }
        ), [], !1, (function popover_settings_injectStyles(e) {
            this.$style = rr.locals || rr
        }
        ), null, null).exports;
        const ir = document.querySelector("[data-toolbar-settings]")
          , cr = document.querySelector("[data-toolbar-new-settings]")
          , lr = document.querySelector("[data-popover-settings-wrapper]")
          , ur = renderRootComponent({
            component: or,
            target: document.querySelector("[data-popover-settings]"),
            props: {
                routes: Xe
            }
        })
          , handle_popover_settings_listener = ()=>{
            ur.show(),
            lr.classList.add("is-active"),
            null == ir || ir.removeEventListener("click", handle_popover_settings_listener),
            clickOutside(document.querySelector("[data-popover-settings-component]")).then((()=>{
                lr.classList.remove("is-active"),
                null == ir || ir.addEventListener("click", handle_popover_settings_listener)
            }
            ))
        }
        ;
        null == ir || ir.addEventListener("click", handle_popover_settings_listener);
        const handle_popover_settings_showComponent = ()=>{
            ur.show(),
            lr.classList.add("is-ready"),
            null == cr || cr.removeEventListener("mouseenter", handle_popover_settings_showComponent)
        }
        ;
        null == cr || cr.addEventListener("mouseenter", handle_popover_settings_showComponent),
        null == cr || cr.addEventListener("click", (e=>{
            "hidden" === window.getComputedStyle(lr).visibility && e.preventDefault()
        }
        ));
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const dr = document.querySelector("[data-toolbar-play]")
          , hr = document.querySelector("[data-popover-play]")
          , br = document.querySelector("[data-popover-play-wrapper]");
        let mr;
        const handle_popover_play_showComponent = async()=>{
            fetch_notifications_fetchNotifications(),
            mr || (mr = renderRootComponent({
                component: (await __webpack_require__.e(326).then(__webpack_require__.bind(__webpack_require__, 7326))).default,
                target: hr
            })),
            mr.show(),
            br.classList.add("is-ready"),
            null == dr || dr.removeEventListener("mouseenter", handle_popover_play_showComponent)
        }
        ;
        null == dr || dr.addEventListener("mouseenter", handle_popover_play_showComponent),
        null == dr || dr.addEventListener("click", (e=>{
            hr && "hidden" !== window.getComputedStyle(br).visibility || e.preventDefault()
        }
        ));
        const wr = "nav-collapsed"
          , pr = "collapsed"
          , _r = document.getElementById("sb")
          , gr = document.querySelector("[data-nav-resize]")
          , handleResize = ()=>{
            let a = "vertical-expanded";
            Bs.collapsed ? (document.body.classList.remove(wr),
            _r.classList.remove(pr),
            Bs.collapsed = !1) : (document.body.classList.add(wr),
            _r.classList.add(pr),
            Bs.collapsed = !0,
            a = "vertical-collapsed"),
            e.Z.post(t.Z.generate("web_user_callback_update_navigation_state", {
                state: a
            })),
            window.dispatchEvent(new Event("resize"))
        }
        ;
        gr && gr.addEventListener("click", handleResize);
        const fr = document.querySelector("[data-nav-action-search]")
          , kr = document.querySelector("[data-nav-toggle-search-box]")
          , vr = document.querySelector("[data-nav-popover-search]");
        null == fr || fr.addEventListener("click", (e=>{
            Q.tq || e.preventDefault()
        }
        )),
        null == kr || kr.addEventListener("click", (()=>{
            if (!Q.tq && !(null == vr ? void 0 : vr.classList.contains("open"))) {
                const e = document.querySelector(".autofocus input");
                null == vr || vr.classList.add("open"),
                null == e || e.focus(),
                clickOutside(vr).then((()=>{
                    null == vr || vr.classList.remove("open")
                }
                ))
            }
        }
        ));
        const yr = document.querySelectorAll("[data-mobile-nav-toggle]");
        Array.from(yr).forEach((e=>{
            e.addEventListener("click", (()=>{
                if (e.classList.contains(V.Sh.CLOSE))
                    hidePanels();
                else {
                    const e = helpers_isLoggedIn() ? V.wl.MAIN_NAV_HOME_LINK : V.wl.MAIN_NAV_PLAY_LINK;
                    showPanel(document.querySelector(e)),
                    window.scrollTo(0, 0)
                }
                toggleOpenClass()
            }
            ))
        }
        )),
        new ae.default({
            el: "#search",
            directives: {
                tooltip: ze
            },
            setup: ()=>({
                collapseTooltip: (0,
                te.computed)((()=>{
                    if (Bs.collapsed)
                        return {
                            content: _t.Z.trans("Search"),
                            position: "right"
                        }
                }
                ))
            })
        });
        const zr = document.querySelector("#resize");
        zr && new ae.default({
            el: zr,
            directives: {
                tooltip: ze
            },
            setup: ()=>({
                collapseTooltip: (0,
                te.computed)((()=>{
                    if (Bs.collapsed)
                        return {
                            content: _t.Z.trans("Expand"),
                            position: "right"
                        }
                }
                ))
            })
        });
        var xr = __webpack_require__(9660)
          , Er = __webpack_require__(3510);
        const Sr = document.querySelector("[data-nav-ui-mode]");
        null == Sr || Sr.addEventListener("click", (()=>{
            const a = (0,
            xr.KZ)();
            var s;
            (0,
            xr.C8)(!a),
            (0,
            xr.WH)(!a),
            (0,
            xr.Un)(!a),
            (0,
            xr.QY)(!a),
            (0,
            q.jl)() && (s = !a,
            window.chesscom.features.includes("settings_service_data_sync") && (0,
            Er.z)({
                "ui.mode": s ? "dark" : "light"
            }),
            e.Z.post(t.Z.generate(Un), {
                action: s
            }))
        }
        ));
        var jr = __webpack_require__(4279);
        var Tr = new (__webpack_require__.n(jr)());
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const Cr = (0,
        te.reactive)({});
        let Or;
        window.addEventListener("message", (async({data: e})=>{
            Or || (Or = renderRootComponent({
                component: (await __webpack_require__.e(776).then(__webpack_require__.bind(__webpack_require__, 3776))).default,
                props: {
                    options: Cr
                },
                on: {
                    "modal-did-hide": function() {
                        Or.hide(),
                        Tr.emit(Le.U3.MODAL_DID_HIDE)
                    }
                },
                target: document.body.appendChild(document.createElement("div"))
            })),
            (null == e ? void 0 : e.key) === V.U3.SHOW_UPGRADE_MODAL && (Object.assign(Cr, e.payload),
            Or.show())
        }
        ));
        var Ar = __webpack_require__(1681)
          , Lr = __webpack_require__(3981);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        (function shouldUserSeeOnboardModal() {
            if (!Lr.Z.isLoggedIn())
                return !1;
            const e = Ar.Z.get(Le.F$) === Lr.Z.get("id");
            return function shouldShowOnboardModal(e, t, a, s) {
                const n = Math.round((new Date).getTime() / 1e3);
                return !(!t || a || s || e <= n - 3600)
            }(Lr.Z.get("registerDate"), Lr.Z.eligibleFirstTrial(), Lr.Z.get("isGuest"), e)
        }
        )() && ((0,
        nt.Kd)(),
        hasFeatureAccess("freetrial_upgrade_modal_test") ? __webpack_require__.e(657).then(__webpack_require__.bind(__webpack_require__, 5657)).then((({default: e})=>{
            renderRootComponent({
                component: e,
                target: document.body.appendChild(document.createElement("div"))
            }).show()
        }
        )) : ((0,
        Re.o)({
            key: D.U3.SHOW_UPGRADE_MODAL,
            payload: {
                buttonText: _t.Z.trans("Start Free Trial"),
                cssClass: "onboard",
                hideText: _t.Z.trans("Skip Trial"),
                referral: "onboarding-modal",
                startingSlide: "lessons",
                subtitle: _t.Z.trans("Get the tools you need to master the game of chess."),
                title: _t.Z.trans("Try Chess.com Premium for Free")
            }
        }),
        Tr.on(Le.U3.MODAL_DID_HIDE, (()=>{
            Ar.Z.set(Le.F$, Lr.Z.get("id"))
        }
        ))));
        const Nr = document.querySelector(V.wl.MAIN_NAV_MORE_LINK);
        null == Nr || Nr.addEventListener("click", (()=>{
            window.location.href = Nr.getAttribute("goto")
        }
        ));
        const createDiv = e=>{
            const t = document.createElement("div");
            return Object.assign(t.style, e),
            t
        }
        ;
        var Rr = __webpack_require__(528);
        const Pr = window.context ? window.context.iterableKey : ""
          , Ir = {
            ITERABLE_API_TRACK_URL: `https://api.iterable.com/api/events/track?apiKey=${Pr}`,
            ITERABLE_API_UPDATE_URL: `https://api.iterable.com/api/users/update?apiKey=${Pr}`
        }
          , {user: qr, iterableMuteApiCallsFeature: Zr} = window.context || {}
          , Mr = qr ? String(qr.id) : ""
          , $r = qr && !qr.isGuest && !Zr;
        var Ur = (e=>(e.CHAT_LIST_LOADED = "chat-list-loaded",
        e.INIT_CHESS_TV_CHAT = "init-chess-tv-chat",
        e.INIT_CLUB_CHAT = "init-club-chat",
        e.INIT_EVENT_CHAT = "init-event-chat",
        e.OPEN_POPOUT_CLUB_CHAT = "open-popout-club-chat",
        e))(Ur || {});
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        function renderBadges() {
            (0,
            H.U)(O).forEach((e=>{
                const t = e.getAttribute(n)
                  , r = Number(e.getAttribute(a));
                t && (!function setBadgeCount(e, t) {
                    ae.default.set(Y.w.badges, e, t)
                }(t, r),
                new ae.default({
                    render: t=>t(De, {
                        props: {
                            badge: e.getAttribute(n),
                            text: e.getAttribute(s)
                        }
                    })
                }).$mount(e))
            }
            ))
        }
        var Wr = (0,
        te.defineComponent)({
            components: {
                Notifications: Wt,
                NotificationControls: at
            },
            setup: ()=>({
                showWidget: (0,
                te.computed)((()=>!(0,
                q.nJ)() && (Y.w.isFetching || Y.w.notifications.length > 0)))
            })
        })
          , Br = {
            component: "home-notifications-component",
            loaded: "home-notifications-loaded",
            controls: "home-notifications-controls",
            notifications: "home-notifications-notifications"
        };
        var Dr = (0,
        ge.Z)(Wr, (function() {
            var e, t = this, a = t.$createElement, s = t._self._c || a;
            return t.showWidget ? s("div", {
                class: ["v5-section", "v5-overflow-hidden", t.$style.component, (e = {},
                e[t.$style.loaded] = !t.isFetching,
                e)]
            }, [s("div", {
                staticClass: "v5-header"
            }, [s("span", {
                staticClass: "v5-header-name",
                domProps: {
                    textContent: t._s(t.$trans("Alerts"))
                }
            }), t._v(" "), s("NotificationControls", {
                class: t.$style.controls,
                attrs: {
                    "is-home-sidebar": ""
                }
            })], 1), t._v(" "), s("Notifications", {
                class: t.$style.notifications,
                attrs: {
                    "light-mode-support": ""
                }
            })], 1) : t._e()
        }
        ), [], !1, (function home_notifications_injectStyles(e) {
            this.$style = Br.locals || Br
        }
        ), null, null).exports
          , Hr = __webpack_require__(9071)
          , Fr = (Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty,
        (0,
        te.defineComponent)({
            name: "NotificationToasters",
            components: {
                NotificationToaster: ()=>__webpack_require__.e(908).then(__webpack_require__.bind(__webpack_require__, 2908)),
                PuzzleBattleChallengeToaster: ()=>__webpack_require__.e(520).then(__webpack_require__.bind(__webpack_require__, 520))
            },
            setup: ()=>({
                toasters: Hr.X.toasters
            })
        }))
          , Gr = {
            component: "notification-toasters-component",
            list: "notification-toasters-list"
        };
        var Vr = (0,
        ge.Z)(Fr, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                class: e.$style.component
            }, [a("div", {
                class: e.$style.list
            }, [e._l(e.toasters, (function(e) {
                return a("NotificationToaster", {
                    key: e.id,
                    attrs: {
                        toaster: e
                    }
                })
            }
            )), e._v(" "), a("PuzzleBattleChallengeToaster")], 2)])
        }
        ), [], !1, (function notification_toasters_injectStyles(e) {
            this.$style = Gr.locals || Gr
        }
        ), null, null).exports
          , Kr = __webpack_require__(8558);
        var Yr = {
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
          , Jr = {
            component: "spinner-ring-component",
            spin: "spinner-ring-spin",
            light: "spinner-ring-light",
            dark: "spinner-ring-dark",
            small: "spinner-ring-small",
            large: "spinner-ring-large"
        };
        var Qr = (0,
        ge.Z)(Yr, (function() {
            var e, t = this, a = t.$createElement;
            return (t._self._c || a)("div", {
                class: [t.$style.component, t.$style[t.size], (e = {},
                e[t.$style.dark] = "dark" == t.forceTheme,
                e[t.$style.light] = "light" == t.forceTheme,
                e)]
            })
        }
        ), [], !1, (function spinner_ring_injectStyles(e) {
            this.$style = Jr.locals || Jr
        }
        ), null, null).exports;
        let Xr = null;
        var eo = new class VisibilityObserver {
            constructor() {
                return null == Xr && (Xr = this,
                this.observer = new IntersectionObserver((e=>{
                    e.forEach((e=>{
                        e.intersectionRatio > 0 && (Tr.emit("visibility-observer-change", e.target),
                        this.observer.unobserve(e.target))
                    }
                    ))
                }
                ),{
                    rootMargin: "200px 0px",
                    threshold: .01
                })),
                Xr
            }
            observe(e) {
                this.observer.observe(e)
            }
            unobserve(e) {
                this.observer.unobserve(e)
            }
        }
        ;
        const cacheBinding = (e,t)=>{
            e.dataset.chessSrc = t.value.src,
            e.dataset.chessSrcset = t.value.srcset
        }
          , setAttributes = e=>{
            const t = e.dataset.chessSrc
              , a = "false" !== e.dataset.chessSrcset ? `${(0,
            Tt.q)(t)} 2x` : void 0;
            t && e.setAttribute("src", t),
            a && e.setAttribute("srcset", a)
        }
        ;
        var to = {
            bind: (e,t)=>{
                (null == t ? void 0 : t.value) && (cacheBinding(e, t),
                Tr.on("visibility-observer-change", (t=>{
                    t === e && (setAttributes(e),
                    e.dataset.visible = !0,
                    eo.unobserve(e))
                }
                )),
                eo.observe(e))
            }
            ,
            componentUpdated(e, t) {
                (null == t ? void 0 : t.value) && (cacheBinding(e, t),
                void 0 !== e.dataset.visible && setAttributes(e))
            }
        }
          , ao = (0,
        te.defineComponent)({
            name: "Autocomplete",
            directives: {
                ImageDefer: to,
                Tooltip: ze
            },
            components: {
                CountryFlag: Is,
                SpinnerRing: Qr,
                V5InputGroup: Za.V5InputGroup
            },
            props: {
                ariaLabel: {
                    type: String,
                    default: ""
                },
                autofocus: {
                    type: Boolean,
                    default: !1
                },
                iconRight: {
                    type: String,
                    default: ""
                },
                forceTheme: {
                    type: String
                },
                loading: {
                    type: Boolean,
                    default: !1
                },
                maxlength: {
                    type: Number,
                    default: 32
                },
                name: {
                    type: String,
                    default: ""
                },
                placeholder: {
                    type: String,
                    default: ""
                },
                size: {
                    type: String,
                    default: "small"
                },
                options: {
                    type: Array,
                    default: ()=>[]
                }
            },
            emits: ["clear", "input", "search-submit", "select-item"],
            setup(e, {emit: t}) {
                var a, s;
                (0,
                te.watch)((()=>e.options), (()=>{
                    setJsonMockData()
                }
                ));
                const n = (0,
                te.ref)("")
                  , r = (0,
                te.ref)(0)
                  , o = (0,
                te.ref)([])
                  , i = (0,
                te.ref)(!1)
                  , c = (0,
                te.ref)("")
                  , l = (0,
                te.ref)(!0);
                function getSelectedOption() {
                    return r.value === o.value.length ? "" : o.value[r.value]
                }
                function setJsonMockData() {
                    const t = JSON.parse(JSON.stringify(e.options));
                    o.value = t.filter((e=>e.divider ? e : e.title.toLowerCase())),
                    r.value = 0
                }
                function setInputValue(e) {
                    i.value = !1,
                    c.value = e || n.value,
                    setJsonMockData()
                }
                function updateFocusList() {
                    const e = o.value.length;
                    r.value > e ? r.value = 0 : r.value < 0 && (r.value = e)
                }
                return {
                    clearSearch: function clearSearch() {
                        c.value = "",
                        t("clear", "")
                    },
                    clearSearchIcon: (0,
                    te.computed)((()=>c.value.length && !e.loading ? "x" : "")),
                    enteredKeyword: n,
                    focusList: r,
                    getSelectedOption: getSelectedOption,
                    jsonMockData: o,
                    isActiveItem: function isActiveItem(e) {
                        return e === r.value
                    },
                    isOpen: i,
                    hideSuggestionsList: l,
                    keyword: c,
                    onBlur: function onBlur() {
                        setTimeout((()=>{
                            i.value = !1
                        }
                        ), 250)
                    },
                    onFocus: function onFocus() {
                        r.value = -1,
                        i.value = c.value.trim().length >= 3
                    },
                    onInput: function onInput() {
                        const e = c.value.trim()
                          , a = e.length;
                        n.value = e.replace(/(<([^>]+)>)/gi, ""),
                        i.value = a > 0,
                        l.value = a < 3,
                        l.value ? t("clear", e) : t("input", e),
                        setJsonMockData()
                    },
                    onKeydown: function onKeydown(e) {
                        var a, s, n;
                        const l = e.keyCode;
                        if (i.value) {
                            let u = r.value + 1
                              , d = "";
                            switch (l) {
                            case 40:
                                (null == (a = o.value[u]) ? void 0 : a.divider) ? r.value += 2 : r.value++,
                                updateFocusList(),
                                e.preventDefault();
                                break;
                            case 38:
                                u = r.value - 1,
                                (null == (s = o.value[u]) ? void 0 : s.divider) ? r.value -= 2 : r.value--,
                                updateFocusList(),
                                e.preventDefault();
                                break;
                            case 13:
                                e.preventDefault(),
                                d = c.value.trim(),
                                d.length >= 3 && (t("select-item", getSelectedOption()),
                                t("search-submit", getSelectedOption()),
                                setInputValue(null == (n = o.value[r.value]) ? void 0 : n.title),
                                i.value = !1);
                                break;
                            case 27:
                                i.value = !1
                            }
                        }
                    },
                    onMousemove: function onMousemove(e) {
                        r.value = e
                    },
                    optionIcon: function optionIcon(e) {
                        return e.icon.includes("https") ? e.icon : `/bundles/web/images/color-icons/${e.icon}.svg`
                    },
                    sanctionRussiaFlag: null == (s = null == (a = window.chesscom) ? void 0 : a.features) ? void 0 : s.includes("sanction_russia_flag"),
                    setJsonMockData: setJsonMockData,
                    setInputValue: setInputValue,
                    setListText: function setListText(e) {
                        const t = new RegExp(n.value,"i")
                          , a = e.match(t);
                        return a ? e.replace(t, `<b>${a[0]}</b>`) : e
                    }
                }
            }
        })
          , so = {
            component: "autocomplete-component",
            "input-group": "autocomplete-input-group",
            loading: "autocomplete-loading",
            list: "autocomplete-list",
            "list-item": "autocomplete-list-item",
            active: "autocomplete-active",
            "list-group": "autocomplete-list-group",
            preview: "autocomplete-preview",
            query: "autocomplete-query",
            "query-icon": "autocomplete-query-icon",
            "user-detail": "autocomplete-user-detail",
            divider: "autocomplete-divider",
            enter: "autocomplete-enter",
            appearing: "autocomplete-appearing",
            leave: "autocomplete-leave"
        };
        var no = (0,
        ge.Z)(ao, (function() {
            var e, t = this, a = t.$createElement, s = t._self._c || a;
            return s("div", {
                class: t.$style.component
            }, [s("div", {
                class: t.$style["input-group"]
            }, [s("v5-input-group", {
                class: {
                    autofocus: t.autofocus
                },
                attrs: {
                    "aria-label": t.ariaLabel,
                    "force-theme": t.forceTheme,
                    "clear-button-icon": t.clearSearchIcon,
                    "icon-right": t.hideSuggestionsList ? t.iconRight : "",
                    maxlength: t.maxlength,
                    name: t.name,
                    placeholder: t.placeholder,
                    size: t.size
                },
                on: {
                    blur: t.onBlur,
                    "clear-button-action": t.clearSearch,
                    focus: t.onFocus,
                    input: t.onInput,
                    keydown: t.onKeydown
                },
                model: {
                    value: t.keyword,
                    callback: function(e) {
                        t.keyword = e
                    },
                    expression: "keyword"
                }
            }), t._v(" "), s("spinner-ring", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isOpen && t.loading && !t.hideSuggestionsList,
                    expression: "isOpen && loading && !hideSuggestionsList"
                }],
                class: t.$style.loading,
                attrs: {
                    size: "small",
                    "force-theme": t.forceTheme
                }
            })], 1), t._v(" "), s("transition", {
                attrs: {
                    "enter-active-class": t.$style.enter,
                    "leave-active-class": t.$style.leave
                }
            }, [s("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isOpen && !t.loading,
                    expression: "isOpen && !loading"
                }],
                class: t.$style.list
            }, [t._l(t.jsonMockData, (function(e, a) {
                var n;
                return s("li", {
                    key: a,
                    class: [(n = {},
                    n[t.$style.active] = t.isActiveItem(a) && !e.divider,
                    n), t.$style["list-item"]],
                    on: {
                        mousemove: function(s) {
                            !e.divider && t.onMousemove(a)
                        },
                        click: function(a) {
                            return t.$emit("select-item", e)
                        }
                    }
                }, [e.divider ? s("div", {
                    class: t.$style.divider
                }) : s("a", {
                    class: t.$style["list-group"],
                    attrs: {
                        href: e.url
                    }
                }, [s("img", {
                    directives: [{
                        name: "image-defer",
                        rawName: "v-image-defer",
                        value: {
                            src: t.optionIcon(e),
                            srcset: !1
                        },
                        expression: "{\n              src: optionIcon(item),\n              srcset: false,\n            }"
                    }],
                    class: t.$style.preview,
                    attrs: {
                        src: "/bundles/web/images/image-default.svg",
                        width: "20",
                        height: "20"
                    }
                }), t._v(" "), e.chess_title ? s("span", {
                    class: ["post-view-meta-title", t.$style["user-detail"]],
                    domProps: {
                        textContent: t._s(e.chess_title)
                    }
                }) : t._e(), t._v(" "), s("span", {
                    class: t.$style["user-detail"],
                    domProps: {
                        innerHTML: t._s(t.setListText(e.title))
                    }
                }), t._v(" "), t.sanctionRussiaFlag && e.country_id ? s("country-flag", {
                    class: t.$style["user-detail"],
                    attrs: {
                        code: e.country_id
                    }
                }) : e.country_id ? s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: e.country_name,
                        expression: "item.country_name"
                    }],
                    class: ["country-flags-component", "country-" + e.country_id, t.$style["user-detail"]]
                }) : t._e(), t._v(" "), e.flair_code && "nothing" !== e.flair_code ? s("span", {
                    class: ["flair-component", "flair-" + e.flair_code, t.$style["user-detail"]]
                }) : t._e()], 1)])
            }
            )), t._v(" "), s("li", {
                class: [(e = {},
                e[t.$style.active] = t.isActiveItem(t.jsonMockData.length),
                e), t.$style["list-item"], t.$style.query],
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.$emit("search-submit")
                    },
                    mousemove: function(e) {
                        return t.onMousemove(t.jsonMockData.length)
                    }
                }
            }, [s("div", {
                class: t.$style["list-group"]
            }, [s("span", {
                staticClass: "icon-font-chess magnifying-glass",
                class: t.$style["query-icon"]
            }), t._v(" "), s("div", {
                domProps: {
                    innerHTML: t._s(t.$trans("All Results for %enteredKeyword%", {
                        "%enteredKeyword%": "<strong>" + t.enteredKeyword + "</strong>"
                    }))
                }
            })])])], 2)])], 1)
        }
        ), [], !1, (function autocomplete_injectStyles(e) {
            this.$style = so.locals || so
        }
        ), null, null).exports
          , ro = Object.defineProperty
          , oo = Object.defineProperties
          , io = Object.getOwnPropertyDescriptors
          , co = Object.getOwnPropertySymbols
          , lo = Object.prototype.hasOwnProperty
          , uo = Object.prototype.propertyIsEnumerable
          , search_defNormalProp = (e,t,a)=>t in e ? ro(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a;
        function getAutofillResults(a, s) {
            var n, r;
            let o = "web_search_callback_autofill"
              , i = {
                keyword: a
            };
            const c = null == (r = null == (n = window.context) ? void 0 : n.i18n) ? void 0 : r.locale;
            var l, u;
            s && Object.assign(i, {
                type: s
            }),
            c !== ne._G.DEFAULT_LOCALE && (o = "i18n_web_search_callback_autofill",
            l = ((e,t)=>{
                for (var a in t || (t = {}))
                    lo.call(t, a) && search_defNormalProp(e, a, t[a]);
                if (co)
                    for (var a of co(t))
                        uo.call(t, a) && search_defNormalProp(e, a, t[a]);
                return e
            }
            )({}, i),
            u = {
                _locale: c.split("_")[0]
            },
            i = oo(l, io(u)));
            const d = t.Z.generate(o, i);
            return e.Z.get(d)
        }
        var ho = (0,
        te.defineComponent)({
            name: "NavAutofillSearch",
            components: {
                Autocomplete: no
            },
            props: {
                autofocus: Boolean,
                forceTheme: String
            },
            setup() {
                const e = (0,
                te.ref)([])
                  , t = (0,
                te.ref)("")
                  , a = (0,
                te.ref)(!0)
                  , s = (0,
                te.ref)(!0)
                  , n = (0,
                te.ref)(!0)
                  , r = (0,
                te.ref)([])
                  , o = (0,
                te.ref)([]);
                (0,
                te.watch)([s, n], (()=>{
                    e.value = o.value.length ? [...r.value, {
                        divider: !0
                    }, ...o.value] : r.value,
                    a.value = s.value || n.value
                }
                ));
                const i = bs((async t=>{
                    e.value = [],
                    s.value = !0,
                    n.value = !0,
                    getAutofillResults(t, "feature").then((({data: {feature: e}})=>{
                        r.value = e,
                        s.value = !1
                    }
                    )),
                    getAutofillResults(t, "member").then((({data: {member: e}})=>{
                        o.value = e,
                        n.value = !1
                    }
                    ))
                }
                ), 500);
                return (0,
                te.onMounted)((()=>{
                    window.addEventListener("keydown", (e=>{
                        if (!document.querySelector(".nav-search .open") && (e.metaKey || e.ctrlKey) && 75 === e.keyCode) {
                            e.preventDefault();
                            const t = document.querySelector(".nav-search-form input");
                            null == t || t.focus()
                        }
                    }
                    ))
                }
                )),
                {
                    keyword: t,
                    loading: a,
                    onClear: function onClear() {
                        e.value = [],
                        a.value = !0
                    },
                    onInput: e=>{
                        a.value = !0,
                        i(e)
                    }
                    ,
                    onSelectItem: function onSelectItem(e) {
                        e && G.Z.logEvent(V.Jv.SEARCH_AUTOFILL, {
                            fill: e.title
                        })
                    },
                    onSubmit: function onSubmit(e) {
                        e || G.Z.logEvent(V.Jv.SEARCH, {
                            searchTerm: t.value
                        }),
                        window.location.href = (null == e ? void 0 : e.url) || V._j.searchRoute(t.value)
                    },
                    options: e
                }
            }
        })
          , bo = ho
          , mo = (0,
        ge.Z)(bo, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("Autocomplete", {
                attrs: {
                    "aria-label": e.$trans("Search"),
                    autofocus: e.autofocus,
                    "force-theme": e.forceTheme,
                    loading: e.loading,
                    name: "keyword",
                    options: e.options,
                    placeholder: e.$trans("Search")
                },
                on: {
                    clear: e.onClear,
                    input: e.onInput,
                    "search-submit": e.onSubmit,
                    "select-item": e.onSelectItem
                },
                model: {
                    value: e.keyword,
                    callback: function(t) {
                        e.keyword = t
                    },
                    expression: "keyword"
                }
            })
        }
        ), [], !1, null, null, null).exports;
        function render_search() {
            return function multivue(e, t, a, s, n) {
                const r = (0,
                H.U)(e)
                  , o = [];
                let i = {};
                if (0 === r.length)
                    return o;
                for (const c of r) {
                    let e = !0;
                    "function" == typeof a && (i = a(c)),
                    s && (c.dataset[s] ? e = !1 : c.dataset[s] = !0);
                    const r = {
                        el: c
                    };
                    if (n && (r.store = n),
                    e) {
                        const e = Object.assign(r, t, {
                            propsData: i
                        });
                        o.push(new ae.default(e))
                    }
                }
                return o
            }(".nav-autofill-search", mo, (e=>({
                autofocus: Boolean(e.getAttribute("data-autofocus")),
                forceTheme: String(e.getAttribute("data-force-theme"))
            })))
        }
        const wo = "offline-challenge";
        function updateOfflineChallengeToasters() {
            const {toAdd: e, toRemove: t} = function getDiff() {
                const e = function getOfflineChallengeNotifications() {
                    var e, t;
                    return null != (t = null == (e = Y.w.notifications.filter((e=>e.type.id === l.OFFLINE_CHALLENGE))[0]) ? void 0 : e.notifications) ? t : []
                }()
                  , t = function getOfflineChallengeToasters() {
                    return Hr.X.toasters.filter((e=>String(e.id).startsWith(wo)))
                }();
                return {
                    toAdd: e.filter((e=>!t.find((t=>t.id === getToasterId(e))))),
                    toRemove: t.filter((t=>!e.find((e=>getToasterId(e) === t.id))))
                }
            }();
            e.forEach(addToaster),
            t.forEach((e=>(0,
            Kr.O)(e.id)))
        }
        function addToaster(e) {
            const t = getToasterId(e);
            (0,
            Kr.I)({
                avatarUrl: e.image,
                id: t,
                content: e.content,
                closed: ()=>declineRequest(e),
                links: [{
                    onClick: ()=>{
                        window.location.href = e.route
                    }
                    ,
                    label: (0,
                    xe.dW)("Accept")
                }, {
                    onClick: ()=>{
                        (0,
                        Kr.O)(t),
                        declineRequest(e)
                    }
                    ,
                    label: (0,
                    xe.dW)("Decline")
                }]
            })
        }
        function getToasterId(e) {
            return `${wo}-${e.id}`
        }
        var po = __webpack_require__(2185);
        var _o = __webpack_require__(651);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        async function getTvAnnouncement() {
            const {data: a} = await async function getTvAnnouncementData() {
                const a = t.Z.generate(j);
                return e.Z.get(a)
            }()
              , s = function getTvByUserLanguage(e) {
                if (!e)
                    return;
                const t = [e].flat()
                  , {contentLanguage: a, locale: s} = window.context.i18n
                  , n = t.find((({language: e})=>s === e));
                if (n)
                    return n;
                if ("default_and_user" === a || "any" === a)
                    return t.find((({language: e, defaultLanguage: t})=>t === e));
                return
            }(a);
            s && (Bs.tvAnnouncement = s)
        }
        var go = Object.defineProperty
          , fo = Object.defineProperties
          , ko = Object.getOwnPropertyDescriptors
          , vo = Object.getOwnPropertySymbols
          , yo = Object.prototype.hasOwnProperty
          , zo = Object.prototype.propertyIsEnumerable
          , get_watch_panel_data_defNormalProp = (e,t,a)=>t in e ? go(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: a
        }) : e[t] = a;
        async function getWatchPanelData() {
            var a, s;
            const {data: n} = await async function getWatchPanel() {
                const a = t.Z.generate(C);
                return e.Z.get(a)
            }();
            var r, o;
            Bs.watchPanels = {
                streamers: null != (o = n.streamers,
                a = null == o ? void 0 : o.slice(0, V.qQ)) ? a : [],
                top_events: n.top_events,
                top_players: null != (r = n.top_players,
                s = null == r ? void 0 : r.map((e=>{
                    var t, a, s;
                    return a = ((e,t)=>{
                        for (var a in t || (t = {}))
                            yo.call(t, a) && get_watch_panel_data_defNormalProp(e, a, t[a]);
                        if (vo)
                            for (var a of vo(t))
                                zo.call(t, a) && get_watch_panel_data_defNormalProp(e, a, t[a]);
                        return e
                    }
                    )({}, e),
                    s = {
                        title: null == (t = e.title) ? void 0 : t.toUpperCase()
                    },
                    fo(a, ko(s))
                }
                )).sort(((e,t)=>e.rating < t.rating ? 1 : -1)).slice(0, V.bC)) ? s : []
            }
        }
        window.chesscom.features.includes("toaster_center_beta") || (window.toaster = (new ae.default({
            render: e=>e(Vr)
        }).$mount(document.querySelector(V.wl.NOTIFICATION_TOASTERS)),
        {
            add: Kr.I,
            remove: Kr.O
        })),
        (()=>{
            const e = createDiv({
                height: "50px",
                overflow: "auto",
                width: "30px"
            })
              , t = createDiv({
                height: "60px",
                width: "100%"
            });
            e.appendChild(t),
            document.body.appendChild(e),
            30 !== t.clientWidth && document.body.classList.add("scrollbar-obtrusive"),
            document.body.removeChild(e)
        }
        )(),
        (0,
        H.U)(`.${ne.xL.AMPLITUDE_LOGGER}`).forEach((t=>{
            const a = t.dataset.eventName
              , s = (0,
            Rr.Q)(t.dataset.eventProps || null)
              , n = (0,
            Rr.Q)(t.dataset.userProps || null)
              , r = (0,
            Rr.Q)(t.dataset.incUserProps || null);
            var o;
            G.Z.logEvent(a, s, n, r),
            ((t,a)=>{
                $r && e.Z.post(Ir.ITERABLE_API_TRACK_URL, {
                    userId: Mr,
                    eventName: t,
                    createdAt: Date.now(),
                    dataFields: a || {}
                })
            }
            )(a, s),
            n && (o = n,
            $r && e.Z.post(Ir.ITERABLE_API_UPDATE_URL, {
                userId: Mr,
                dataFields: o || {}
            }))
        }
        )),
        document.addEventListener("DOMContentLoaded", (()=>{
            var e;
            renderBadges(),
            (()=>{
                const e = document.querySelector(V.wl.HOME_NOTIFICATIONS);
                if (e) {
                    fetch_notifications_fetchNotifications();
                    const viewBootedEvent = ({data: t})=>{
                        "HOME_MOUNTED" === t && renderRootComponent({
                            component: Dr,
                            target: e
                        }).show()
                    }
                    ;
                    window.addEventListener("message", viewBootedEvent)
                }
            }
            )(),
            render_search(),
            getWatchPanelData(),
            helpers_isLoggedIn() && (getTvAnnouncement(),
            function listenForMessageModal() {
                let e;
                window.addEventListener("message", (async({data: t})=>{
                    (null == t ? void 0 : t.event) === c && (e || (e = renderRootComponent({
                        component: (await __webpack_require__.e(392).then(__webpack_require__.bind(__webpack_require__, 2392))).default,
                        target: document.querySelector(A),
                        on: {
                            hide: ()=>e.hide()
                        }
                    })),
                    Object.assign(_o.a.user, t.user),
                    e.show())
                }
                ))
            }(),
            (0,
            po.S1)(),
            (()=>{
                const e = Lr.Z.get("freeDiamondCampaign");
                e && Object.keys(e).length && (e.showGiftReceivedModal || e.showGiftExpireModal) && __webpack_require__.e(761).then(__webpack_require__.bind(__webpack_require__, 761)).then((t=>{
                    renderRootComponent({
                        component: t.default,
                        props: {
                            isGiftExpireModal: e.showGiftExpireModal,
                            username: Lr.Z.get("username")
                        },
                        target: "#free-diamond-month-modal"
                    }).show()
                }
                ))
            }
            )(),
            (null == (e = window.chesscom.features) ? void 0 : e.includes("isLive")) ? window.addEventListener("message", (({data: e})=>{
                "navAlertsUpdateCount" === e && get_notification_counts_getNotificationCounts(!1)
            }
            )) : get_notification_counts_getNotificationCounts(!0)),
            (()=>{
                var e;
                return Boolean(null == (e = window.Config) ? void 0 : e.isLive)
            }
            )() || (()=>{
                var e;
                return Boolean(null == (e = window.Config) ? void 0 : e.isPlay)
            }
            )() || window.addEventListener("message", (({data: e})=>{
                e === i && updateOfflineChallengeToasters()
            }
            ))
        }
        )),
        window.addEventListener("message", (({data: e})=>{
            (null == e ? void 0 : e.key) === Ur.CHAT_LIST_LOADED && function initChatModule() {
                Ba.chats.hasFetched = !0,
                Ba.chats.list = window.chesscom.chatList,
                delete window.chesscom.chatList,
                (0,
                te.watch)((()=>Ba.chats.list.state.newMessages), (e=>{
                    Y.w.badges.chatMessages = e,
                    e && (Ba.currentTab = Wa.chats.code)
                }
                ))
            }()
        }
        ))
    }(),
    function() {
        "use strict";
        var e = "OPEN_LANGUAGE_PICKER";
        const t = "language-picker-modal";
        var a, s, n, r, o = __webpack_require__(2009), i = __webpack_require__(2439), c = __webpack_require__(8096), l = __webpack_require__(425), u = __webpack_require__(8160);
        const d = "en_US" !== (null == (s = null == (a = window.context) ? void 0 : a.i18n) ? void 0 : s.locale)
          , h = !(0,
        c.jl)() && d
          , b = h ? null == (r = null == (n = window.context) ? void 0 : n.i18n) ? void 0 : r.locale.substr(0, 2) : null
          , m = h ? "i18n_web_languages_callback" : "web_languages_callback"
          , w = {
            articles: l.Z.generate("web_article_index"),
            billingIssues: "https://support.chess.com/category/135-membership-and-billing",
            forums: l.Z.generate("web_forum_index"),
            home: l.Z.generate("web_user_home"),
            languages: l.Z.generate(m, {
                _locale: b
            }),
            learn: l.Z.generate("web_page_learn"),
            openings: l.Z.generate("web_openings_index"),
            reportAbuse: "https://support.chess.com/collection/136-community-safety",
            support: "https://support.chess.com/",
            generateLanguageSet: (e,t)=>l.Z.generate("web_language_set", {
                locale: e,
                returnUrl: t
            }),
            generatei18n: e=>l.Z.generate("i18n_web_index", {
                _locale: e
            })
        };
        u.Z.trans("About"),
        u.Z.trans("Analysis"),
        u.Z.trans("Archive"),
        u.Z.trans("Articles"),
        u.Z.trans("Ask a Question"),
        u.Z.trans("Billing Issues"),
        u.Z.trans("Blogs"),
        u.Z.trans("Can you solve this puzzle?"),
        u.Z.trans("ChessKid"),
        u.Z.trans("ChessTV"),
        u.Z.trans("Clubs"),
        u.Z.trans("Coaches"),
        u.Z.trans("Collapse"),
        u.Z.trans("Computer"),
        u.Z.trans("Connect"),
        (new Date).getFullYear(),
        u.Z.trans("Daily Chess"),
        u.Z.trans("Daily Puzzle"),
        u.Z.trans("Expand"),
        u.Z.trans("Explorer"),
        u.Z.trans("First Steps"),
        u.Z.trans("Forums"),
        u.Z.trans("Free Trial"),
        u.Z.trans("Friends"),
        u.Z.trans("Four Player"),
        u.Z.trans("Games"),
        u.Z.trans("Help"),
        u.Z.trans("Hide"),
        u.Z.trans("Home"),
        u.Z.trans("Jobs"),
        u.Z.trans("Language"),
        u.Z.trans("Leaderboard"),
        u.Z.trans("Learn"),
        u.Z.trans("Lessons"),
        u.Z.trans("Live Chess"),
        u.Z.trans("Log In"),
        u.Z.trans("Log Out"),
        u.Z.trans("Make a Suggestion"),
        u.Z.trans("Members"),
        u.Z.trans("Membership"),
        u.Z.trans("Menu on Left"),
        u.Z.trans("Messages"),
        u.Z.trans("News"),
        u.Z.trans("Old Chess.com"),
        u.Z.trans("Old Site"),
        u.Z.trans("Openings"),
        u.Z.trans("Play"),
        u.Z.trans("Play Online"),
        u.Z.trans("Practice"),
        u.Z.trans("PRO Chess League"),
        u.Z.trans("Profile"),
        u.Z.trans("Puzzle"),
        u.Z.trans("Ready Games"),
        u.Z.trans("Report a Bug"),
        u.Z.trans("Report Abuse"),
        u.Z.trans("Rules"),
        u.Z.trans("Search"),
        u.Z.trans("Settings"),
        u.Z.trans("Share"),
        u.Z.trans("Sign Up"),
        u.Z.trans("Stats"),
        u.Z.trans("Stop"),
        u.Z.trans("Streamers"),
        u.Z.trans("Tactics"),
        u.Z.trans("Terms & Privacy"),
        u.Z.trans("Themes"),
        u.Z.trans("Top Menu"),
        u.Z.trans("Tournaments"),
        u.Z.trans("Awards"),
        u.Z.trans("Videos"),
        u.Z.trans("Vision"),
        u.Z.trans("Vote Chess");
        var p = __webpack_require__(8470)
          , _ = {
            name: "ModalContainer",
            props: {
                autoShow: {
                    type: Boolean,
                    default: !1
                },
                closeOnBackgroundClick: {
                    type: Boolean,
                    default: !0
                },
                closeOnEscPress: {
                    type: Boolean,
                    default: !1
                },
                centerOverParent: {
                    type: Boolean,
                    default: !1
                },
                centerOverContent: {
                    type: Boolean,
                    default: !1
                }
            },
            emits: ["background-clicked"],
            data: ()=>({
                visible: !1
            }),
            mounted() {
                this.closeOnEscPress && window.addEventListener("keyup", this.onKeyPress),
                this.autoShow && this.show()
            },
            beforeDestroy() {
                this.closeOnEscPress && window.removeEventListener("keyup", this.onKeyPress)
            },
            methods: {
                hide() {
                    this.visible = !1,
                    this.$emit(p.U3.MODAL_DID_HIDE)
                },
                onBackgroundClick() {
                    this.closeOnBackgroundClick && (this.hide(),
                    this.$emit("background-clicked"))
                },
                onKeyPress(e) {
                    27 === e.keyCode && this.hide()
                },
                show() {
                    this.visible = !0
                }
            }
        }
          , g = {
            component: "modal-container-component",
            "parent-centered": "modal-container-parent-centered",
            bg: "modal-container-bg",
            enter: "modal-container-enter",
            leave: "modal-container-leave",
            "content-centered": "modal-container-content-centered"
        }
          , f = __webpack_require__(1900);
        var k = (0,
        f.Z)(_, (function() {
            var e, t, a = this, s = a.$createElement, n = a._self._c || s;
            return n("transition", {
                attrs: {
                    "enter-active-class": a.$style.enter,
                    "leave-active-class": a.$style.leave
                }
            }, [a.visible ? n("div", {
                class: [a.$style.component, (e = {},
                e[a.$style["parent-centered"]] = a.centerOverParent,
                e), (t = {},
                t[a.$style["content-centered"]] = a.centerOverContent,
                t)]
            }, [a.centerOverParent ? a._e() : n("div", {
                class: a.$style.bg,
                on: {
                    click: a.onBackgroundClick
                }
            }), a._v(" "), a._t("default")], 2) : a._e()])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = g.locals || g
        }
        ), null, null)
          , v = k.exports
          , y = {
            name: "ModalContent",
            props: {
                theme: {
                    type: String,
                    default: null
                },
                overflow: String
            }
        }
          , z = {
            component: "modal-content-component",
            "dark-light": "modal-content-dark-light"
        };
        var x = (0,
        f.Z)(y, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("section", {
                class: [e.$style.component, e.$style[e.theme]],
                attrs: {
                    overflow: e.overflow
                }
            }, [e._t("default")], 2)
        }
        ), [], !1, (function modal_content_injectStyles(e) {
            this.$style = z.locals || z
        }
        ), null, null).exports
          , S = __webpack_require__(4886)
          , j = __webpack_require__(1681)
          , T = __webpack_require__(7074)
          , C = {
            name: "ModalLanguagePicker",
            components: {
                ModalContainer: v,
                ModalContent: x,
                SectionTitleDismissibleUpd: S.Z
            },
            data() {
                return {
                    routes: w,
                    heading: this.$trans("Choose Your Preferred Language"),
                    languages: [],
                    I18N_DEFAULT_LOCALE: "en_US"
                }
            },
            mounted() {
                this.getLanguages().then(this.$refs.modal.show()),
                window.addEventListener("message", (t=>{
                    t.data === e && this.$refs.modal.show()
                }
                ))
            },
            methods: {
                generateUrl(e) {
                    if ((0,
                    c.jl)() || this.I18N_DEFAULT_LOCALE === e.locale) {
                        const t = window.location.pathname.split("/");
                        t.splice(0, 1),
                        (0,
                        c.jl)() || this.I18N_DEFAULT_LOCALE !== e.locale || t.splice(0, 1);
                        const a = `${window.location.origin}/${t.join("/")}`;
                        return this.routes.generateLanguageSet(e.locale, a)
                    }
                    return this.routes.generatei18n(e.languageCodePrimaryAware)
                },
                getLanguages() {
                    return T.Z.post(w.languages).then((e=>{
                        this.languages = e.data
                    }
                    ))
                },
                setLanguage(e) {
                    j.Z.set("cclocale", e)
                },
                hide() {
                    this.$refs.modal.hide()
                }
            }
        }
          , O = C
          , A = {
            component: "modal-language-picker-component",
            list: "modal-language-picker-list",
            item: "modal-language-picker-item",
            link: "modal-language-picker-link",
            selected: "modal-language-picker-selected",
            translation: "modal-language-picker-translation"
        };
        var L = (0,
        f.Z)(O, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("modal-container", {
                ref: "modal"
            }, [a("modal-content", {
                ref: "modal",
                class: e.$style.modal,
                attrs: {
                    theme: "dark-light"
                }
            }, [a("section-title-dismissible-upd", {
                on: {
                    close: e.hide
                }
            }, [e._v("\n      " + e._s(e.heading) + "\n    ")]), e._v(" "), a("div", {
                class: e.$style.component
            }, [a("ul", {
                class: e.$style.list
            }, e._l(e.languages, (function(t) {
                var s;
                return a("li", {
                    key: t.name,
                    class: e.$style.item
                }, [a("a", {
                    class: [e.$style.link, (s = {},
                    s[e.$style.selected] = t.isSelected,
                    s)],
                    attrs: {
                        href: e.generateUrl(t)
                    },
                    on: {
                        click: function(a) {
                            return e.setLanguage(t.locale)
                        }
                    }
                }, [a("div", [e._v(e._s(t.name))]), e._v(" "), a("small", {
                    class: e.$style.translation
                }, [e._v(e._s(t.englishName))])])])
            }
            )), 0)])], 1)], 1)
        }
        ), [], !1, (function modal_language_picker_injectStyles(e) {
            this.$style = A.locals || A
        }
        ), null, null)
          , N = L.exports
          , R = __webpack_require__(4657)
          , P = __webpack_require__(4672);
        let I = null;
        const q = (0,
        R.U)(".language-select");
        null == q || q.forEach((t=>{
            t.addEventListener("click", (()=>{
                (0,
                P.o)(e)
            }
            ))
        }
        )),
        window.addEventListener("message", (a=>{
            a.data !== e || I || (I = new i.default({
                el: `#${t}`,
                render: e=>e(N),
                store: o.default
            }))
        }
        ))
    }()
}();
