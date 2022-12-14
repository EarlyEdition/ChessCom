window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
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
    web_league_callback_division_start_check: {
        tokens: [["text", "/callback/leagues/division-start-check"]],
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
    i18n_web_league_callback_division_start_check: {
        tokens: [["text", "/callback/leagues/division-start-check"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_league_callback_promotion_check: {
        tokens: [["text", "/callback/leagues/promotion-check"]],
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
    i18n_web_league_callback_promotion_check: {
        tokens: [["text", "/callback/leagues/promotion-check"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_club_news: {
        tokens: [["text", "/news"], ["variable", "/", ".+", "club"], ["text", "/club"]],
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
    }
}),
(("undefined" != typeof self ? self : this).wpChessCom_Yybx = ("undefined" != typeof self ? self : this).wpChessCom_Yybx || []).push([[5158], {
    44903: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return addCsrfToken
            }
        });
        var a = s(71692);
        const r = ["delete", "patch", "post", "put"];
        function addCsrfToken(e) {
            return e && !(0,
            a.q)(e.url) && r.includes(e.method) ? (e.data instanceof FormData || e.data instanceof URLSearchParams ? e.data.append("_token", window.context.csrf.token) : e.data = Object.assign({
                _token: window.context.csrf.token
            }, e.data || {}),
            e) : e
        }
    },
    90175: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return addRequestId
            }
        });
        var a = s(20169);
        const random = ()=>Math.random().toString(36).substring(2, 15);
        function addRequestId(e) {
            return (()=>{
                const e = document.getElementById(a.GO.NAV_ROOT);
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
    16770: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return castBoolsToInts
            }
        });
        var a = s(71692);
        const boolToInt = e=>(Object.keys(e).forEach((t=>{
            const s = e[t];
            "boolean" == typeof s && (e[t] = Number(s)),
            "object" == typeof s && null !== s && (e[t] = boolToInt(s))
        }
        )),
        e);
        function castBoolsToInts(e) {
            return !e || (0,
            a.q)(e.url) || "object" == typeof e.data && (e.data = boolToInt(e.data)),
            e
        }
    },
    61992: function(e, t, s) {
        "use strict";
        var a = s(44903)
          , r = s(90175)
          , n = s(16770);
        t.Z = [a.Z, r.Z, n.Z]
    },
    20169: function(e, t, s) {
        "use strict";
        s.d(t, {
            GO: function() {
                return a
            }
        });
        const a = {
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
    28598: function(e, t, s) {
        "use strict";
        s.d(t, {
            jq: function() {
                return n
            },
            fz: function() {
                return o
            },
            AM: function() {
                return r
            },
            pS: function() {
                return c
            },
            LZ: function() {
                return a
            }
        });
        const a = {
            CONNECT: "connect",
            DISCONNECT: "disconnect",
            FAILURE: "failure",
            MESSAGE: "message",
            RECONNECT: "reconnect",
            SUBSCRIBE: "subscribe",
            SUBSCRIBE_FAIL: "subscribe_fail",
            UNSUBSCRIBE: "unsubscribe",
            ERROR: "error"
        };
        var r = (e=>(e.Base = "base",
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
        e))(r || {})
          , n = (e=>(e.Users = "users",
        e))(n || {})
          , o = (e=>(e.Users = "users",
        e))(o || {});
        const c = window.PubSub
    },
    20517: function(e, t, s) {
        "use strict";
        s.d(t, {
            f: function() {
                return a
            }
        });
        const a = {
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
    40904: function(e, t, s) {
        "use strict";
        s.d(t, {
            R: function() {
                return fetchBoardOptions
            }
        });
        var a = s(25685)
          , r = s(52180)
          , n = s(34620)
          , o = s(17668)
          , c = s(99660)
          , i = s(5134);
        async function fetchBoardOptions() {
            const e = (0,
            c.KZ)();
            if (window.chesscom.features.includes("settings_service_read")) {
                const t = await (0,
                a.w)(["board.animation_type", "board.board_style", "board.coordinates", "board.show_legal_moves", "board.highlight_moves", "board.white_always_on_bottom", "board.move_list_style", "board.move_method", "board.pieces_style", "board.play_sounds", "board.sound_theme", "gameplay.show_timestamps"]);
                return {
                    animationType: (0,
                    r.E)(t["board.animation_type"]),
                    boardSize: "auto",
                    boardStyle: t["board.board_style"],
                    coordinates: t["board.coordinates"],
                    darkMode: e,
                    highlightLegalMoves: t["board.show_legal_moves"],
                    highlightMoves: t["board.highlight_moves"],
                    isWhiteOnBottom: t["board.white_always_on_bottom"],
                    moveListDisplayType: t["board.move_list_style"],
                    moveMethod: (0,
                    n.z)(t["board.move_method"]),
                    pieceStyle: "modern" === t["board.pieces_style"] ? "modern2" : t["board.pieces_style"],
                    playSounds: t["board.play_sounds"],
                    soundTheme: t["board.sound_theme"],
                    showTimestamps: t["gameplay.show_timestamps"]
                }
            }
            const {data: t} = await (0,
            i.h)("web_user_callback_get_board_settings")
              , {animationType: s, boardCoords: u, boardSize: l, colorScheme: h, highlightLegalMoves: d, highlightMoves: m, isWhiteOnBottom: b, moveListDisplayType: w, moveMethod: k, pieceStyle: f, playSounds: p, soundTheme: g, showTimestamps: _} = t;
            return {
                animationType: (0,
                r.E)(s),
                boardSize: l,
                boardStyle: h,
                coordinates: (0,
                o.P)(u),
                darkMode: e,
                highlightLegalMoves: "1" === d,
                highlightMoves: "1" === m,
                isWhiteOnBottom: b,
                moveListDisplayType: w,
                moveMethod: k,
                pieceStyle: f,
                playSounds: "1" === p,
                soundTheme: g,
                showTimestamps: Boolean(_)
            }
        }
    },
    86536: function(e, t, s) {
        "use strict";
        s.d(t, {
            L: function() {
                return a
            }
        });
        var a = (e=>(e[e.AcceptLiveChallenge = 0] = "AcceptLiveChallenge",
        e[e.CancelLiveChallenge = 1] = "CancelLiveChallenge",
        e[e.DeclineLiveChallenge = 2] = "DeclineLiveChallenge",
        e[e.AcceptRcnChallenge = 3] = "AcceptRcnChallenge",
        e[e.CancelRcnChallenge = 4] = "CancelRcnChallenge",
        e[e.DeclineRcnChallenge = 5] = "DeclineRcnChallenge",
        e[e.ShowIncomingChallenge = 6] = "ShowIncomingChallenge",
        e[e.HideIncomingChallenge = 7] = "HideIncomingChallenge",
        e[e.ShowOutgoingChallenge = 8] = "ShowOutgoingChallenge",
        e[e.HideOutgoingChallenge = 9] = "HideOutgoingChallenge",
        e))(a || {})
    },
    46647: function(e, t, s) {
        "use strict";
        s.d(t, {
            Y: function() {
                return a
            }
        });
        const a = (0,
        s(54713).QD)({
            broadcastChannelId: "notifications"
        })
    },
    72111: function(e, t, s) {
        "use strict";
        s.d(t, {
            R: function() {
                return updateConnectionStatus
            }
        });
        var a = s(28598)
          , r = s(14309)
          , n = s(87080)
          , o = s(2185);
        function updateConnectionStatus() {
            if (!a.pS.client)
                return;
            const e = Boolean(a.pS.isAttached());
            e !== n.z.reactive.isConnected && r.f.emit(e ? o.L.Established : o.L.Interrupted),
            n.z.reactive.isConnected = e,
            n.z.reactive.connectionQuality = a.pS.client.getQuality() || 0
        }
    },
    19626: function(e, t, s) {
        "use strict";
        s.d(t, {
            q: function() {
                return a
            }
        });
        const a = (0,
        s(54713).kr)()
    },
    14309: function(e, t, s) {
        "use strict";
        s.d(t, {
            f: function() {
                return a
            }
        });
        const a = (0,
        s(35174).I)()
    },
    74158: function(e, t, s) {
        "use strict";
        s.d(t, {
            q: function() {
                return isPubSubEnabled
            }
        });
        var a = s(87080);
        function isPubSubEnabled() {
            return a.z.isEnabled
        }
    },
    87080: function(e, t, s) {
        "use strict";
        s.d(t, {
            z: function() {
                return a
            }
        });
        const a = {
            clients: {},
            connecting: {},
            subscriptions: {},
            subscribing: {},
            isEnabled: Boolean(document.querySelector('script[src*="pubsub-connection"]')),
            waitingForClient: null,
            reactive: {
                isConnected: !1,
                connectionQuality: 0
            }
        }
    },
    2185: function(e, t, s) {
        "use strict";
        s.d(t, {
            L: function() {
                return a
            }
        });
        var a = (e=>(e[e.Established = 0] = "Established",
        e[e.Interrupted = 1] = "Interrupted",
        e))(a || {})
    },
    25685: function(e, t, s) {
        "use strict";
        s.d(t, {
            w: function() {
                return fetchSettings
            }
        });
        var a = s(28598);
        async function fetchSettings(e) {
            const {data: t} = await a.pS.fetch({
                method: "get",
                path: "users/me",
                service: a.AM.Settings,
                params: {
                    include: e.join(",")
                }
            });
            return t
        }
    },
    3510: function(e, t, s) {
        "use strict";
        s.d(t, {
            z: function() {
                return saveSettings
            }
        });
        var a = s(28598);
        async function saveSettings(e) {
            window.chesscom.features.includes("settings_service_data_sync") && Object.keys(e).length > 0 && await a.pS.publish({
                method: "post",
                service: a.AM.Settings,
                path: "users/me",
                data: e
            })
        }
    },
    70528: function(e, t, s) {
        "use strict";
        s.d(t, {
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
    6159: function(e, t, s) {
        "use strict";
        s.d(t, {
            M: function() {
                return formatBoardSetting
            }
        });
        const formatBoardSetting = (e,t)=>[e, transformValue(e, t)]
          , transformValue = (e,t)=>"coordinates" === e ? transformCoordinatesValue(t) : t
          , transformCoordinatesValue = e=>["off", "inside", "outside"].includes(e) ? ["off", "inside", "outside"].indexOf(e) : e
    },
    11721: function(e, t, s) {
        "use strict";
        s.d(t, {
            R: function() {
                return formatBoardOptionsForSettingsService
            }
        });
        var a = s(52180)
          , r = s(34620);
        const formatBoardOptionsForSettingsService = e=>Object.entries(e).reduce(((e,[t,s])=>{
            const [a,r] = formatSetting(t, s);
            return e[a] = r,
            e
        }
        ), {})
          , formatSetting = (e,t)=>{
            const s = transformKey(e);
            return [s, transformValue(s, t)]
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
                a.C)(t);
            case "board.move_method":
                return (0,
                r.N)(t);
            case "board.coordinates":
                return ["off", "inside", "outside"].includes(t) ? t : ["off", "inside", "outside"][t];
            default:
                return t
            }
        }
    },
    52180: function(e, t, s) {
        "use strict";
        function fromAnimationType(e) {
            return e && "default" !== e ? e : "medium"
        }
        function toAnimationType(e) {
            return e && "medium" !== e && "battle" !== e ? e : "default"
        }
        s.d(t, {
            C: function() {
                return fromAnimationType
            },
            E: function() {
                return toAnimationType
            }
        })
    },
    34620: function(e, t, s) {
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
        s.d(t, {
            z: function() {
                return toBoardMoveMethods
            },
            N: function() {
                return fromBoardMoveMethods
            }
        })
    },
    17668: function(e, t, s) {
        "use strict";
        s.d(t, {
            P: function() {
                return toCoordinatesValue
            }
        });
        const a = ["off", "inside", "outside"];
        function toCoordinatesValue(e) {
            const t = Number.parseInt(e, 10);
            return Number.isInteger(t) ? a[t] : e
        }
    },
    7943: function(e, t, s) {
        "use strict";
        s.d(t, {
            A: function() {
                return removeFromArray
            }
        });
        var a = s(3775);
        function removeFromArray(e, t) {
            const s = (0,
            a.mf)(t) ? e.findIndex(t) : e.indexOf(t);
            -1 !== s && e.splice(s, 1)
        }
    },
    32793: function(e, t, s) {
        "use strict";
        s.d(t, {
            j7: function() {
                return getWindowTitle
            },
            bM: function() {
                return getWindowLocation
            },
            k_: function() {
                return a
            },
            qD: function() {
                return r
            },
            e0: function() {
                return n
            },
            sJ: function() {
                return bookmarkPage
            },
            kY: function() {
                return c
            },
            Cz: function() {
                return sendEmail
            },
            tq: function() {
                return isMobile
            },
            qs: function() {
                return getBrowser
            }
        });
        const getWindowTitle = ()=>encodeURIComponent(window.document.title)
          , getWindowLocation = ()=>encodeURIComponent(window.location.href)
          , a = window.location.pathname
          , r = getWindowTitle()
          , n = getWindowLocation()
          , bookmarkPage = ()=>{
            if (window.sidebar && window.sidebar.addPanel)
                window.sidebar.addPanel(r, n, "");
            else if (window.external && "AddFavorite"in window.external)
                window.external.AddFavorite(n, r);
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
          , c = (Number.POSITIVE_INFINITY,
        ()=>{
            window.print()
        }
        )
          , sendEmail = (e,t)=>{
            window.location.href = `mailto:?${e}&${t}`
        }
          , isMobile = (e=window.navigator.userAgent)=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
          , getBrowser = (e=window.navigator.userAgent)=>{
            let t, s = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (((e=window.navigator.userAgent)=>null !== e.match(/Edg/))(e)) {
                const t = e.indexOf("Edg");
                let s = 4;
                e.match("Edge/") && (s = 5);
                const a = t + s;
                return {
                    name: "Edge",
                    version: parseInt(e.substring(a, e.indexOf(".", a)), 10)
                }
            }
            return /trident/i.test(s[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [],
            {
                name: "IE",
                version: parseInt(t[1] || "-1", 10)
            }) : s[1] === o.chrome && (t = e.match(/\bOPR\/(\d+)/),
            null != t) ? {
                name: "Opera",
                version: parseInt(t[1], 10)
            } : (s = s[2] ? [s[1], s[2]] : [window.navigator.appName, window.navigator.appVersion, "-?"],
            s[0] === o.safari && (t = e.match(/version\/(\d+)/i),
            null != t && s.splice(1, 1, t[1])),
            "MSIE" === s[0] ? {
                name: o.ie,
                version: parseInt(s[1], 10)
            } : {
                name: s[0],
                version: parseInt(s[1], 10)
            })
        }
    },
    74241: function(e, t, s) {
        "use strict";
        s.d(t, {
            Q: function() {
                return CacheService
            }
        });
        var a = s(93497);
        class CacheService {
            constructor(e, t={}) {
                this.cache = new a.n,
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
    },
    23643: function(e, t, s) {
        "use strict";
        s.d(t, {
            P: function() {
                return a
            }
        });
        const a = "json_settings"
    },
    93497: function(e, t, s) {
        "use strict";
        s.d(t, {
            n: function() {
                return CacheProvider
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
    },
    66248: function(e, t, s) {
        "use strict";
        var a = s(74241)
          , r = s(23643);
        t.Z = new a.Q(r.P)
    },
    35750: function(e, t, s) {
        "use strict";
        s.d(t, {
            ej: function() {
                return getCookie
            }
        });
        function getCookie(e) {
            const t = {};
            return document.cookie.split("; ").forEach((e=>{
                const [s,a] = e.split("=");
                s && a && (t[s] = a)
            }
            )),
            t[e] || null
        }
    },
    99660: function(e, t, s) {
        "use strict";
        s.d(t, {
            KZ: function() {
                return getIsDarkMode
            },
            Yc: function() {
                return r
            }
        });
        s(79816),
        s(35750);
        const a = "dark-mode"
          , getIsDarkMode = ()=>document.body.classList.contains(a)
          , r = getIsDarkMode()
    },
    86673: function(e, t, s) {
        "use strict";
        var a = s(74279);
        const r = new (s.n(a)());
        t.Z = r
    },
    63302: function(e, t, s) {
        "use strict";
        var a = s(9669)
          , r = s.n(a);
        t.Z = r()
    },
    5134: function(e, t, s) {
        "use strict";
        s.d(t, {
            h: function() {
                return fetch
            }
        });
        var a = s(87074)
          , r = s(90425);
        const n = {}
          , o = {};
        async function fetch(e) {
            var t;
            const s = a.Z.get(r.Z.generate(e))
              , c = await s;
            return n[e] = c,
            null == (t = o[e]) || t.forEach((t=>t(n[e]))),
            c
        }
    },
    87074: function(e, t, s) {
        "use strict";
        var a = s(63302);
        (0,
        s(70580).w)(a.Z),
        t.Z = a.Z
    },
    71692: function(e, t, s) {
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
        s.d(t, {
            q: function() {
                return isSpecialRequest
            }
        })
    },
    70580: function(e, t, s) {
        "use strict";
        s.d(t, {
            w: function() {
                return registerInterceptors
            }
        });
        var a = s(61992)
          , r = s(93831)
          , n = s(4437);
        function findExistingInterceptor(e, t) {
            var s;
            if (!t.name)
                throw new Error("interceptor must be a named function");
            return null == (s = e.handlers) ? void 0 : s.find((e=>{
                var s;
                return (null == (s = e.fulfilled) ? void 0 : s.name) === t.name
            }
            ))
        }
        function registerInterceptors(e) {
            a.Z.forEach((t=>{
                findExistingInterceptor(e.interceptors.request, t) || e.interceptors.request.use(t)
            }
            )),
            findExistingInterceptor(e.interceptors.response, n.Z) || e.interceptors.response.use(n.Z, r.Z)
        }
    },
    93831: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return responseErrorInterceptor
            }
        });
        var a = s(63302);
        function responseErrorInterceptor(e) {
            const t = e.config
              , s = e.response;
            if ("Cancel" === e.toString())
                return Promise.reject(e);
            try {
                t.data = JSON.parse(t.data)
            } catch (r) {
                return Promise.reject(e)
            }
            if (s && 403 === s.status && s.headers["x-chesscom-csrf-token"] && t && !t.data.retry) {
                const e = s.headers["x-chesscom-csrf-token"];
                return t.data._token = e,
                t.data.retry = !0,
                window.context.csrf.token = e,
                (0,
                a.Z)(t)
            }
            return Promise.reject(e)
        }
    },
    4437: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return responseInterceptor
            }
        });
        var a = s(57969);
        function responseInterceptor(e) {
            return e.headers && e.headers["x-chesscom-request-id-cdn"] && ((0,
            a.cM)({
                key: "x-chesscom-request-id-cdn",
                value: e.headers["x-chesscom-request-id-cdn"]
            }),
            (0,
            a.cM)({
                key: "x-chesscom-request-id-lb",
                value: e.headers["x-chesscom-request-id-lb"]
            })),
            e
        }
    },
    16272: function(e, t, s) {
        "use strict";
        s.d(t, {
            Kd: function() {
                return getLocale
            },
            p6: function() {
                return b
            },
            uf: function() {
                return formatNumber
            }
        });
        var a = s(79816)
          , r = s(18160)
          , n = Object.defineProperty
          , o = Object.getOwnPropertySymbols
          , c = Object.prototype.hasOwnProperty
          , i = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? n(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s
          , __spreadValues = (e,t)=>{
            for (var s in t || (t = {}))
                c.call(t, s) && __defNormalProp(e, s, t[s]);
            if (o)
                for (var s of o(t))
                    i.call(t, s) && __defNormalProp(e, s, t[s]);
            return e
        }
        ;
        function getLocale(e="", t="-") {
            return (e || (Object.prototype.hasOwnProperty.call(window, "context") ? window.context.i18n.locale : "en-US")).replace("_", t)
        }
        const u = 31536e6
          , l = (()=>{
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
          , h = 864e5
          , d = 36e5
          , m = 6e4
          , b = {
            mergeOptions: e=>__spreadValues({
                abbreviateHours: !1,
                abbreviateMinutes: !0,
                includeDays: !1
            }, e),
            getUnitsInInt(e, t={}) {
                let s = 0
                  , a = 0
                  , r = 0
                  , n = e;
                return !0 === b.mergeOptions(t).includeDays && (s = Math.floor(n / 86400),
                n -= 86400 * s),
                a = Math.floor(n / 3600),
                n -= 3600 * a,
                r = Math.floor(n / 60),
                {
                    minutes: r,
                    hours: a,
                    days: s
                }
            },
            getDaysHoursMinutesAsString(e, t={}) {
                const s = b.getDaysHoursMinutesAsObject(e, t)
                  , {minutes: a, hours: r, days: n} = b.getUnitsInInt(e, t)
                  , o = [];
                return n > 0 && o.push(s.days),
                r > 0 && o.push(s.hours),
                (a > 0 || 0 === o.length) && o.push(s.minutes),
                o.join(" ")
            },
            getDaysHoursMinutesAsObject(e, t={}) {
                const s = b.mergeOptions(t)
                  , {minutes: a, hours: n, days: o} = b.getUnitsInInt(e, t)
                  , c = r.Z.transChoice("{0} 0 days|{1} 1 day|]1,Inf] %1$s% days", o, {
                    "%1$s%": o
                });
                let i = r.Z.transChoice("{0} 0 hours|{1} 1 hour|]1,Inf] %1$s% hours", Math.floor(n), {
                    "%1$s%": n
                })
                  , u = r.Z.transChoice("{0} 0 min|{1} 1 min|]1,Inf] %1$s% min", a, {
                    "%1$s%": a
                });
                return s.abbreviateHours && (i = r.Z.transChoice("{0} 0 hrs|{1} 1 hr|]1,Inf] %1$s% hrs", Math.floor(n), {
                    "%1$s%": n
                })),
                s.abbreviateMinutes || (u = r.Z.transChoice("{1} 1 minute|]1,Inf] %1$s% minutes", a, {
                    "%1$s%": a
                })),
                {
                    days: c,
                    hours: i,
                    minutes: u
                }
            },
            long: (e=new Date,t={})=>{
                const s = e instanceof Date ? e : new Date(e);
                return new Intl.DateTimeFormat(getLocale(),__spreadValues(__spreadValues({}, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                }), t)).format(s)
            }
            ,
            full: (e=new Date,t={})=>{
                const s = e instanceof Date ? e : new Date(e);
                return new Intl.DateTimeFormat(getLocale(),__spreadValues(__spreadValues({}, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    timeZoneName: "short"
                }), t)).format(s)
            }
            ,
            numeric: (e=new Date,t={})=>{
                const s = e instanceof Date ? e : new Date(e);
                if (window.Intl) {
                    const e = getLocale();
                    return new Intl.DateTimeFormat(e,Object.assign({
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                    }, t)).format(s)
                }
                return `${`0${s.getMonth() + 1}`.slice(-2)}/${`0${s.getDate()}`.slice(-2)}/${s.getFullYear()}`
            }
            ,
            relative: (e,t=!0,s=!0,a=!1,n=Date.now())=>{
                let o, c;
                const i = (e instanceof Date ? e : new Date(e)).getTime()
                  , b = a ? i - n : n - i;
                if (Math.abs(b) > l && t) {
                    const e = {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    };
                    return new Intl.DateTimeFormat(getLocale(),e).format(i)
                }
                if (b >= u)
                    c = "year",
                    o = Math.abs(Math.floor(b / u));
                else if (b >= l)
                    c = "month",
                    o = Math.abs(Math.floor(b / l));
                else if (b >= h)
                    c = "day",
                    o = Math.abs(Math.floor(b / h));
                else if (b >= d)
                    c = "hour",
                    o = Math.abs(Math.floor(b / d));
                else {
                    if (!(b >= m))
                        return a ? r.Z.trans("Right now") : r.Z.trans("Just now");
                    c = "minute",
                    o = Math.abs(Math.floor(b / m))
                }
                return function getTimeAgo(e, t, s) {
                    return "year" === e ? t ? r.Z.transChoice("{1} 1 year ago|]1,Inf] %1$s% years ago", s, {
                        "%1$s%": s
                    }) : r.Z.transChoice("{1} 1 year|]1,Inf] %1$s% years", s, {
                        "%1$s%": s
                    }) : "month" === e ? t ? r.Z.transChoice("{1} 1 month ago|]1,Inf] %1$s% months ago", s, {
                        "%1$s%": s
                    }) : r.Z.transChoice("{1} 1 month|]1,Inf] %1$s% months", s, {
                        "%1$s%": s
                    }) : "day" === e ? t ? r.Z.transChoice("{1} 1 day ago|]1,Inf] %1$s% days ago", s, {
                        "%1$s%": s
                    }) : r.Z.transChoice("{1} 1 day|]1,Inf] %1$s% days", s, {
                        "%1$s%": s
                    }) : "hour" === e ? t ? r.Z.transChoice("{1} 1 hour ago|]1,Inf] %1$s% hours ago", s, {
                        "%1$s%": s
                    }) : r.Z.transChoice("{1} 1 hour|]1,Inf] %1$s% hours", s, {
                        "%1$s%": s
                    }) : "minute" === e ? t ? r.Z.transChoice("{1} 1 minute ago|]1,Inf] %1$s% minutes ago", s, {
                        "%1$s%": s
                    }) : r.Z.transChoice("{1} 1 minute|]1,Inf] %1$s% minutes", s, {
                        "%1$s%": s
                    }) : ""
                }(c, Math.abs(b) === b && s, o)
            }
            ,
            customNumericDate: (e=new Date,t="/",s="m/d/y")=>{
                const a = e instanceof Date ? e : new Date(e)
                  , r = {
                    d: `0${a.getDate()}`.slice(-2),
                    m: `0${a.getMonth() + 1}`.slice(-2),
                    y: `${a.getFullYear()}`
                };
                if (!["m", "d", "y"].every((e=>s.split("/").includes(e))))
                    return `${r.m}${t}${r.d}${t}${r.y}`;
                return s.split("/").reduce(((e,t)=>(e.push(r[t]),
                e)), []).join(t)
            }
            ,
            userDate: e=>{
                const t = window.context.user ? new Date(1e3 * e).toLocaleString("en-US", {
                    timeZone: window.context.user.timezone
                }) : new Date(1e3 * e)
                  , s = new Date(t).setMilliseconds(0)
                  , r = new Date(s)
                  , n = a.Iz.daysOfWeek[r.getDay()]
                  , o = r.getDate()
                  , c = a.Iz.months[r.getMonth()]
                  , i = r.toLocaleTimeString(getLocale())
                  , u = i.split(" ").length > 1 ? i.split(" ")[1] : ""
                  , l = i.split(" ")[0].split(":");
                l.pop();
                return `${n}, ${c} ${o}, ${l.join(":")}${u}`
            }
        };
        function formatNumber(e, t="", s={}) {
            return new Intl.NumberFormat([getLocale(t), "en-US"],s).format(e)
        }
    },
    82220: function(e, t, s) {
        "use strict";
        var a = s(90425);
        t.Z = ()=>-1 !== window.location.href.indexOf(a.Z.generate("web_2fa_login"))
    },
    57969: function(e, t, s) {
        "use strict";
        s.d(t, {
            cM: function() {
                return log
            }
        });
        var a = s(30869)
          , r = s(72863);
        const checkWindowObject = ()=>{
            (0,
            r.z)({
                key: "logData",
                value: {}
            })
        }
          , log = ({key: e, value: t})=>{
            checkWindowObject(),
            window.chesscom.logData[e] = t,
            (0,
            a.$)({
                [e]: t
            })
        }
    },
    12365: function(e, t, s) {
        "use strict";
        s.d(t, {
            b: function() {
                return copyRoute
            }
        });
        var a = s(21264);
        function copyRoute(e) {
            var t, s, r;
            const n = (0,
            a.w)();
            if (!n.routes_[e]) {
                try {
                    Object.assign(n.context_, {
                        base_url: "",
                        prefix: "",
                        host: "www.chess.com",
                        port: "",
                        scheme: "https",
                        locale: ""
                    })
                } catch (o) {}
                if (Object.isFrozen(n.routes_) && (n.routes_ = Object.assign({}, n.routes_)),
                null == (s = null == (t = window.chesscom) ? void 0 : t.routes) ? void 0 : s[e]) {
                    const t = window.chesscom.routes[e]
                      , s = ".chess-dev.com"
                      , a = window.location.host.replace(/^[^.]+/, "");
                    a && (null == (r = t.hosttokens) || r.forEach((e=>{
                        e.forEach(((t,r)=>{
                            t.includes(s) && (e[r] = t.replace(s, a))
                        }
                        ))
                    }
                    ))),
                    n.routes_[e] = t
                }
            }
        }
    },
    21264: function(e, t, s) {
        "use strict";
        s.d(t, {
            w: function() {
                return getRouting
            }
        });
        var a = s(84606)
          , r = s.n(a);
        function getRouting() {
            return r()
        }
    },
    90425: function(e, t, s) {
        "use strict";
        var a = s(12365)
          , r = s(21264);
        s(18508);
        t.Z = new class Router {
            generate(e, t, s) {
                const n = t || {};
                "string" == typeof n.username && (n.username = n.username.toLowerCase()),
                (0,
                a.b)(e);
                try {
                    return (0,
                    r.w)().generate(e, n, s)
                } catch (o) {
                    const t = new Error(`Couldn't find missing route '${e}'.`);
                    return console.error(t),
                    "/"
                }
            }
            i18nable(e) {
                return `i18n_${e}`in window.chesscom.routes
            }
            i18n(e, t, s) {
                var a, r;
                let n = e;
                const o = t || {};
                if ((null == (r = null == (a = window.context) ? void 0 : a.route) ? void 0 : r.startsWith("i18n")) && this.i18nable(e)) {
                    o["_locale"] = window.context.locale.slice(0, 2),
                    n = `i18n_${e}`
                }
                const c = this.generate(n, o, s);
                return s ? c : c.replace(/^.*\/\/[^/]+/, "")
            }
        }
    },
    18508: function(e, t, s) {
        "use strict";
        s.d(t, {
            T: function() {
                return captureException
            }
        });
        var a = s(46883)
          , r = s(84770)
          , n = s(63207);
        async function captureException(e, t) {
            if (!(await (0,
            n.U)()))
                return;
            (0,
            a.V)();
            const s = await (0,
            r.m)()
              , o = e instanceof Error ? e : new Error(e);
            t ? s.withScope((e=>{
                Object.keys(t).forEach((s=>e.setExtra(s, t[s]))),
                s.captureException(o)
            }
            )) : s.captureException(o)
        }
    },
    46883: function(e, t, s) {
        "use strict";
        s.d(t, {
            V: function() {
                return enableSentry
            }
        });
        var a = s(84770)
          , r = s(63207);
        async function enableSentry(e=0) {
            var t;
            if (!(await (0,
            r.U)()))
                return;
            window.chesscom.sudoEnableSentry = !0;
            const s = await (0,
            a.m)();
            for (; null == (t = window.chesscom.queuedSentryReports) ? void 0 : t.length; )
                s.captureException(window.chesscom.queuedSentryReports.shift());
            if (e > 0) {
                const t = Date.now() + 24 * e * 60 * 60 * 1e3;
                window.localStorage.setItem("enableSentryUntil", t.toString())
            }
        }
    },
    84770: function(e, t, s) {
        "use strict";
        s.d(t, {
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
            return s.e(890).then(s.bind(s, 10890))
        }
    },
    63207: function(e, t, s) {
        "use strict";
        s.d(t, {
            U: function() {
                return isSentryAvailable
            }
        });
        var a = s(84770);
        async function isSentryAvailable() {
            try {
                const e = await (0,
                a.m)();
                return Boolean(e.getCurrentHub().getClient())
            } catch (e) {
                return !1
            }
        }
    },
    30869: function(e, t, s) {
        "use strict";
        s.d(t, {
            $: function() {
                return setSentryContext
            }
        });
        var a = s(84770)
          , r = s(63207);
        async function setSentryContext(e) {
            if (!(await (0,
            r.U)()))
                return;
            (await (0,
            a.m)()).configureScope((t=>{
                Object.keys(e).forEach((s=>{
                    t.setExtra(s, e[s])
                }
                ))
            }
            ))
        }
    },
    32305: function(e, t, s) {
        "use strict";
        s.d(t, {
            dW: function() {
                return trans
            },
            jn: function() {
                return transChoice
            },
            $H: function() {
                return i
            }
        });
        var a, r, n = s(89402), o = s.n(n);
        const c = "fr_FR" === (null == (r = null == (a = window.context) ? void 0 : a.i18n) ? void 0 : r.locale);
        o().placeHolderPrefix = "",
        o().placeHolderSuffix = "";
        const escapeParameters = e=>{
            const t = {};
            return null != e && Object.keys(e).forEach((s=>{
                const a = s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                null != a && a.length > 0 && (t[a] = e[s])
            }
            )),
            t
        }
          , getTranslatedPhrase = (e,t="messages",s)=>window.chesscom_translations && window.chesscom_translations[t] && window.chesscom_translations[t][e] ? window.chesscom_translations[t][e] : window.chesscom_live_translations && window.chesscom_live_translations[t] && window.chesscom_live_translations[t][e] ? window.chesscom_live_translations[t][e] : "live" === t && window.i18n_phrases && window.i18n_phrases[e] ? window.i18n_phrases : "countries" === t && window.Country && window.Country[e] ? window.Country : s ? void 0 : "javascript" !== t ? getTranslatedPhrase(e, "javascript") : e
          , trans = (e,t,s)=>o().trans(getTranslatedPhrase(e, s), escapeParameters(t), s)
          , transChoice = (e,t,s,a)=>{
            if (void 0 === t)
                return "";
            const r = getTranslatedPhrase(e, a)
              , n = escapeParameters(s);
            return c ? function frenchTransChoice(e, t, s, a) {
                const [r,n,c] = e.split("|").map((e=>e.trim()));
                if (0 === t || 1 === t)
                    return o().trans(r, s, a);
                if (t % 1e6 == 0)
                    return o().trans(n, s, a);
                return o().trans(c, s, a)
            }(r, t, n, a) : o().transChoice(r, t, n)
        }
        ;
        const i = {
            trans: trans,
            transChoice: transChoice
        }
    },
    18160: function(e, t, s) {
        "use strict";
        var a = s(32305);
        t.Z = a.$H
    },
    3775: function(e, t, s) {
        "use strict";
        function isNull(e) {
            return null === e
        }
        function isObject(e) {
            return !isNull(e) && "object" == typeof e
        }
        function isString(e) {
            return "string" == typeof e
        }
        function isFunction(e) {
            return "function" == typeof e
        }
        function isBoolean(e) {
            return "boolean" == typeof e
        }
        s.d(t, {
            Kn: function() {
                return isObject
            },
            HD: function() {
                return isString
            },
            mf: function() {
                return isFunction
            },
            jn: function() {
                return isBoolean
            }
        })
    },
    72863: function(e, t, s) {
        "use strict";
        s.d(t, {
            z: function() {
                return register
            }
        });
        const register = ({key: e, value: t})=>{
            window.chesscom || (window.chesscom = {}),
            window.chesscom[e] || (window.chesscom[e] = t)
        }
    },
    62844: function(e, t, s) {
        "use strict";
        s.d(t, {
            x: function() {
                return a
            }
        });
        const a = {
            AUTHENTICATION_MODAL: "authentication-modal",
            AUTHENTICATION_MODAL_TRIGGER: "authentication-modal-trigger",
            LOGIN_MODAL: "login-modal",
            LOGIN_MODAL_TRIGGER: "login-modal-trigger"
        }
    },
    79816: function(e, t, s) {
        "use strict";
        s.d(t, {
            Y4: function() {
                return l
            },
            _G: function() {
                return h
            },
            $y: function() {
                return d
            },
            Iz: function() {
                return m
            },
            xL: function() {
                return b
            },
            U3: function() {
                return w
            },
            _j: function() {
                return k
            }
        });
        var a, r, n, o, c = s(51838), i = s(90425), u = s(18160);
        const l = {
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
          , h = (null == (r = null == (a = window.chesscom) ? void 0 : a.features) || r.includes("blogs_modern_featuring_write"),
        {
            BLOG: "blog",
            CSRF_TOKEN: null == (o = null == (n = window.context) ? void 0 : n.csrf) ? void 0 : o.token,
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
        })
          , d = {
            CHESS_960: "chess960"
        }
          , m = {
            category: e=>u.Z.trans(e, {}, "dynamic"),
            commentsSynced: u.Z.trans("Comment count will be recalculated in few moments"),
            daysOfWeek: [u.Z.trans("Sunday"), u.Z.trans("Monday"), u.Z.trans("Tuesday"), u.Z.trans("Wednesday"), u.Z.trans("Thursday"), u.Z.trans("Friday"), u.Z.trans("Saturday")],
            loading: u.Z.trans("Loading..."),
            months: [u.Z.trans("January"), u.Z.trans("February"), u.Z.trans("March"), u.Z.trans("April"), u.Z.trans("May"), u.Z.trans("June"), u.Z.trans("July"), u.Z.trans("August"), u.Z.trans("September"), u.Z.trans("October"), u.Z.trans("November"), u.Z.trans("December")],
            monthsAbbreviated: [u.Z.trans("Jan"), u.Z.trans("Feb"), u.Z.trans("Mar"), u.Z.trans("Apr"), u.Z.trans("May"), u.Z.trans("Jun"), u.Z.trans("Jul"), u.Z.trans("Aug"), u.Z.trans("Sep"), u.Z.trans("Oct"), u.Z.trans("Nov"), u.Z.trans("Dec")],
            noResult: u.Z.trans("No results found."),
            pleaseEnter: e=>u.Z.trans("Please enter %number% or more characters", {
                "%number%": e
            }),
            showMore: u.Z.trans("More"),
            showLess: u.Z.trans("Less"),
            lessonsHintMessage: u.Z.trans("Let me help you learn everything you need to know with this guide."),
            nextLessonHintMessage: u.Z.trans("Your next lesson is ready. Study daily if you really want to improve!"),
            openingsHintMessage: u.Z.trans("Let me help you improve your openings!")
        }
          , b = {
            AMPLITUDE_LOGGER: "amplitude-logger",
            AMPLITUDE_LOG_SELECTION: "[data-log-selection-to-amplitude]",
            BOARD_POPOVER: c.s.BOARD_POPOVER,
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
            TOOLTIP: c.s.TOOLTIP,
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
          , k = {
            changeContentLanguage: ()=>i.Z.generate("web_user_callback_set_content_language"),
            enPassant: ()=>i.Z.generate("web_article_view", {
                url: "how-to-capture-en-passant"
            }),
            inviteLink: (e,t,s)=>i.Z.generate(e, {
                url: t,
                secret: s
            }),
            loginPage: i.Z.generate("web_security_login_and_go"),
            redirectToLoginPage: e=>i.Z.generate("web_security_login_and_go", {
                redirectUrl: e
            }),
            surveyVote: (e,t)=>i.Z.generate("web_survey_callback_vote", {
                id: e,
                optionId: t
            }),
            teamMatch: e=>i.Z.generate("web_team_match_view", {
                match: e
            }),
            tournament: e=>i.Z.generate("web_tournament_view", {
                url: e
            }),
            userProfile: e=>i.Z.generate("web_member_view", {
                username: e
            })
        }
    },
    51838: function(e, t, s) {
        "use strict";
        s.d(t, {
            s: function() {
                return a
            }
        });
        const a = {
            BOARD_POPOVER: "v-board-popover",
            TOOLTIP: "v-tooltip",
            USER_POPOVER: "v-user-popover"
        }
    },
    18470: function(e, t, s) {
        "use strict";
        s.d(t, {
            U3: function() {
                return c
            },
            xL: function() {
                return o.x
            },
            Iz: function() {
                return i
            },
            _G: function() {
                return u
            },
            Xw: function() {
                return l
            },
            F$: function() {
                return d
            },
            DL: function() {
                return getGuestSlides
            },
            MR: function() {
                return getUpgradeSlides
            },
            s7: function() {
                return b
            },
            aB: function() {
                return getFirstTimeModalConfig
            }
        });
        var a, r, n = s(32305), o = s(16169), c = (e=>(e.HIDE_MODAL = "hide-modal",
        e.HIDE_MODAL_BACKGROUND_CLICK = "hide-background",
        e.HIDE_MODAL_SOCIAL_SHARE = "hide-modal-social-share",
        e.LOGIN_OR_REGISTER_MODAL = "LOGIN_OR_REGISTER_MODAL",
        e.MODAL_DID_HIDE = "modal-did-hide",
        e.SHOW_GUEST_MODAL = "show-guest-modal",
        e.SHOW_MODAL_SOCIAL_SHARE = "show-modal-social-share",
        e.SHOW_UPGRADE_MODAL = "show-upgrade-modal",
        e))(c || {});
        const i = {
            GUEST_MODAL_TITLE: {
                analysis: (0,
                n.dW)("Sign up to analyze your games!"),
                lessons: (0,
                n.dW)("Sign up to unlock Lessons!"),
                pawn: (0,
                n.dW)("Sign up to use this feature."),
                "puzzles-learning": (0,
                n.dW)("Sign up to keep solving puzzles!"),
                stats: (0,
                n.dW)("Sign up to track your progress!")
            },
            GUEST_MODAL_FOOTER_TEXT: (0,
            n.dW)("Already have an account? Log in")
        }
          , u = {
            GUEST_MODAL_SLIDES: {
                analysis: "analysis",
                lessons: "lessons",
                pawn: "pawn",
                puzzles: "puzzles-learning",
                stats: "stats"
            }
        }
          , l = ["analysis", "lessons", "puzzles-learning", "puzzles-rush", "puzzles-battle"]
          , h = [{
            title: (0,
            n.dW)("Play, Learn and Connect"),
            subtitle: (0,
            n.dW)("Join millions of chess players."),
            icon: "pawn"
        }, {
            title: (null == (r = null == (a = window.chesscom) ? void 0 : a.features) ? void 0 : r.includes("update_puzzle_modal_puzzle_count")) ? (0,
            n.jn)("]1,Inf[ %number%K+ puzzles", 500, {
                "%number%": 500
            }) : (0,
            n.dW)("150k+ Puzzles"),
            subtitle: (0,
            n.dW)("Play every day to improve"),
            icon: "puzzles-learning"
        }, {
            title: (0,
            n.dW)("1500+ Lessons"),
            subtitle: (0,
            n.dW)("Learn from chess masters!"),
            icon: "lessons"
        }, {
            title: (0,
            n.dW)("Full Game Analysis"),
            subtitle: (0,
            n.dW)("Learn from every game!"),
            icon: "analysis"
        }, {
            title: (0,
            n.dW)("Get a Rating"),
            subtitle: (0,
            n.dW)("Save your games!"),
            icon: "stats"
        }, {
            title: (0,
            n.dW)("Explore Full Openings"),
            subtitle: (0,
            n.dW)("See moves played by masters!"),
            icon: "explorer"
        }]
          , d = "dismissedOnboardModalId"
          , m = [{
            title: (0,
            n.dW)("Full Analysis"),
            subtitle: (0,
            n.dW)("Full Report, Accuracy, Key Moments"),
            icon: "analysis",
            generic: !0
        }, {
            title: (0,
            n.dW)("Unlimited Puzzles"),
            subtitle: (0,
            n.dW)("Solve 8+ Puzzles/day to improve fast"),
            icon: "puzzles-learning",
            generic: !0
        }, {
            title: (0,
            n.dW)("Unlimited Lessons"),
            subtitle: (0,
            n.dW)("Your step-by-step path to mastery"),
            icon: "lessons",
            generic: !0
        }, {
            title: (0,
            n.dW)("Remove Ads"),
            subtitle: (0,
            n.dW)("Get the best Chess.com experience"),
            icon: "no-ads",
            generic: !0
        }, {
            title: (0,
            n.dW)("Unlimited Puzzle Rush"),
            subtitle: (0,
            n.dW)("3 strikes and you're out!"),
            icon: "puzzles-rush"
        }, {
            title: (0,
            n.dW)("Unlimited Puzzle Battles"),
            subtitle: (0,
            n.dW)("Rush another player to win!"),
            icon: "puzzles-battle"
        }, {
            title: (0,
            n.dW)("Get Your Own Flair"),
            subtitle: (0,
            n.dW)("Share your unique personality"),
            icon: "flair"
        }, {
            title: (0,
            n.dW)("Explore Full Openings"),
            subtitle: (0,
            n.dW)("See moves played by masters!"),
            icon: "explorer"
        }, {
            title: (0,
            n.dW)("Master Every Position"),
            subtitle: (0,
            n.dW)("Practice means everything!"),
            icon: "workout"
        }, {
            title: (0,
            n.dW)("Unlock All Bots"),
            subtitle: (0,
            n.dW)("Play vs various skills and styles."),
            icon: "computer"
        }, {
            title: (0,
            n.dW)("Unlimited Collections"),
            subtitle: (0,
            n.dW)("Build and organize your library"),
            icon: "library",
            id: 12
        }, {
            title: (0,
            n.dW)("Unlimited Daily Puzzles"),
            subtitle: (0,
            n.dW)("Unlock all daily puzzles."),
            icon: "daily-puzzle"
        }]
          , getGuestSlides = e=>{
            const t = h.find((t=>t.icon === e)) || h[0]
              , s = h.filter((e=>e !== t));
            return s.unshift(t),
            s
        }
          , getUpgradeSlides = e=>{
            const t = m.find((t=>t.icon === e)) || m[0]
              , s = m.filter((e=>e.generic && e !== t));
            return s.unshift(t),
            s
        }
          , b = {
            CLUBS: "clubs",
            COMPUTER: "computer",
            EXPLORER: "explorer",
            LEAGUES: "leagues",
            LESSONS: "lessons",
            LIBRARY: "library",
            OPENINGS: "openings",
            SOLO_CHESS: "solo",
            TOURNAMENTS: "tournaments",
            VISION: "vision"
        }
          , w = {
            [b.COMPUTER]: {
                bullets: [{
                    icon: "select",
                    text: (0,
                    n.dW)("Play bots with various strengths and styles")
                }, {
                    icon: "chip",
                    text: (0,
                    n.dW)("Use optional coaching features for insights")
                }, {
                    icon: "user",
                    text: (0,
                    n.dW)("Practice at any time - with no pressure")
                }],
                buttonText: (0,
                n.dW)("Start"),
                icon: "computer",
                storageKey: "vs_computer_intro_modal_dismissed",
                subtitle: (0,
                n.dW)("Challenge the computer to an online chess game."),
                title: (0,
                n.dW)("Chess Computer")
            },
            [b.EXPLORER]: {
                bullets: [{
                    icon: "magnifying-glass",
                    text: (0,
                    n.dW)("Search millions of master games")
                }, {
                    icon: "user",
                    text: (0,
                    n.dW)("Choose specific players to explore")
                }, {
                    icon: "chess-move-alt",
                    text: (0,
                    n.dW)("Find winning moves from your games")
                }],
                icon: "explorer",
                storageKey: "explorer_intro_modal_dismissed",
                subtitleBottom: (0,
                n.dW)("See moves chess masters have made and the outcome of the game from any position."),
                title: (0,
                n.dW)("Chess Explorer")
            },
            [b.OPENINGS]: {
                bullets: [{
                    icon: "magnifying-glass",
                    text: (0,
                    n.dW)("Search more than 3,000 opening lines")
                }, {
                    icon: "book-open",
                    text: (0,
                    n.dW)("Find the perfect chess opening for you")
                }, {
                    icon: "circle-compass",
                    text: (0,
                    n.dW)("Explore variations and master chess games")
                }],
                icon: "openings",
                storageKey: "openings_intro_modal_dismissed",
                subtitleBottom: (0,
                n.dW)("Learn and explore chess openings to try in your chess games."),
                title: (0,
                n.dW)("Chess Openings")
            },
            [b.SOLO_CHESS]: {
                bullets: [{
                    icon: "incorrect",
                    text: (0,
                    n.dW)("Capture a piece with every move until just one remains")
                }, {
                    icon: "circle-stop",
                    text: (0,
                    n.dW)("No piece may capture more than 2 times per puzzle")
                }, {
                    icon: "king-fill",
                    text: (0,
                    n.dW)("If there is a King on the board, it must be the final piece")
                }, {
                    icon: "circle-checkmark",
                    text: (0,
                    n.dW)("Try for a perfect run in Challenge Mode!")
                }],
                buttonText: (0,
                n.dW)("Start"),
                icon: "solo",
                modalWidth: "lg",
                storageKey: "solo_intro_modal_dismissed",
                subtitleTop: (0,
                n.dW)("How to Play"),
                title: (0,
                n.dW)("Solo Chess")
            },
            [b.VISION]: {
                bullets: [{
                    icon: "chess-board-vision",
                    text: (0,
                    n.dW)("Improve vision with coordinate training")
                }, {
                    icon: "chess-board-arrow-down",
                    text: (0,
                    n.dW)("Identify squares or make moves")
                }, {
                    icon: "live",
                    text: (0,
                    n.dW)("Answer as many as you can in 30 seconds")
                }],
                buttonText: (0,
                n.dW)("Start"),
                icon: "vision",
                showConfirmButton: !0,
                storageKey: "vision_intro_modal_dismissed",
                subtitleBottom: (0,
                n.dW)("Learn to quickly follow and record chess coordinates and annotation."),
                title: (0,
                n.dW)("Vision Trainer")
            },
            [b.LESSONS]: {
                bullets: [{
                    icon: "play",
                    text: (0,
                    n.dW)("Watch videos to learn concepts")
                }, {
                    icon: "circle-checkmark",
                    text: (0,
                    n.dW)("Test knowledge with Challenges")
                }, {
                    icon: "king-fill",
                    text: (0,
                    n.dW)("Level up to achieve Mastery")
                }],
                icon: "lessons",
                storageKey: "lessons_intro_modal_dismissed",
                subtitleBottom: (0,
                n.dW)("Learn from interactive lessons created by chess masters."),
                title: (0,
                n.dW)("Chess Lessons")
            },
            [b.CLUBS]: {
                bullets: [{
                    icon: "teammatch",
                    text: (0,
                    n.dW)("Represent your club in matches")
                }, {
                    icon: "chat",
                    text: (0,
                    n.dW)("Chat in private forums")
                }, {
                    icon: "square-four",
                    text: (0,
                    n.dW)("Organize your team")
                }],
                icon: "clubs",
                storageKey: "clubs_intro_modal_dismissed",
                subtitleBottom: (0,
                n.dW)("Join an Online Chess Club and connect and compete with your friends in matches."),
                title: (0,
                n.dW)("Chess Clubs")
            },
            [b.TOURNAMENTS]: {
                bullets: [{
                    icon: "circle-timer",
                    text: (0,
                    n.dW)("Join tournaments starting every few minutes")
                }, {
                    icon: "calendar",
                    text: (0,
                    n.dW)("Compete in Daily, multi-game tournaments")
                }, {
                    icon: "cup",
                    text: (0,
                    n.dW)("Win trophies to display on your Profile")
                }],
                icon: "tournaments",
                storageKey: "tournaments_intro_modal_dismissed",
                subtitleBottom: (0,
                n.dW)("Compete in online chess tournaments or join an online Arena, where anyone can win."),
                title: (0,
                n.dW)("Chess Tournaments")
            },
            [b.LIBRARY]: {
                bullets: [{
                    icon: "chess-board",
                    text: (0,
                    n.dW)("Create collections from games played online, offline, or uploaded.")
                }, {
                    icon: "magnifying-glass",
                    text: (0,
                    n.dW)("Open, analyze, edit, and re-save your games to your collection.")
                }, {
                    icon: "users",
                    text: (0,
                    n.dW)("Organize, tag, and share your collections with others.")
                }],
                icon: "library",
                storageKey: "library_intro_modal_dismissed",
                subtitleBottom: (0,
                n.dW)("Compile your very own Collection of personal, master, and all other games."),
                title: (0,
                n.dW)("Library")
            },
            [b.LEAGUES]: {
                bullets: [{
                    icon: "circle-timer",
                    text: (0,
                    n.dW)("Play and win games to earn points")
                }, {
                    icon: "calendar",
                    text: (0,
                    n.dW)("All major formats supported - bullet, blitz, rapid & arena")
                }, {
                    icon: "cup",
                    text: (0,
                    n.dW)("The longer the time control, the more points you earn")
                }],
                icon: "cup",
                storageKey: "leagues_intro_modal_dismissed",
                subtitleBottom: (0,
                n.dW)("Earn trophies and advance to the Next League by playing games."),
                title: (0,
                n.dW)("Players Leagues")
            }
        }
          , getFirstTimeModalConfig = e=>w[e]
    },
    16169: function(e, t, s) {
        "use strict";
        s.d(t, {
            x: function() {
                return a
            }
        });
        const a = {
            AUTHENTICATION_MODAL: "authentication-modal",
            FIRST_TIME_MODAL: "first-time-modal",
            GUEST_MODAL: "guest-modal",
            GUEST_MODAL_TRIGGER: "guest-modal-trigger",
            NEW_ACCOUNT: "new-account-modal",
            UPGRADE_MODAL: "upgrade-modal"
        }
    },
    423: function(e, t, s) {
        "use strict";
        s.d(t, {
            U3: function() {
                return o
            },
            xL: function() {
                return c
            },
            Iz: function() {
                return i
            },
            _G: function() {
                return u
            },
            zC: function() {
                return l
            },
            R6: function() {
                return d
            }
        });
        var a, r, n = s(18160);
        const o = {
            NOTIFICATIONS_REQUEST_CONFIRM: "notifications-request-confirm",
            NOTIFICATIONS_REQUEST_DECLINE: "notifications-request-decline",
            SHOW_CUSTOM_REQUEST: "show-custom-request"
        }
          , c = {
            ENABLE_NOTIFICATIONS: ".enable-push-notifications",
            ENABLE_NOTIFICATIONS_MESSAGE: ".enable-push-notifications-message",
            NOTIFICATIONS_REQUEST: "notifications-request"
        }
          , i = {
            header: n.Z.trans("Get Notifications in Your Browser?"),
            list: [n.Z.trans("It????????s your move - or someone wants to play"), n.Z.trans("You get a new Message or Friend Request"), n.Z.trans("Your favorite chess celebrities are playing live"), n.Z.trans("A ChessTV featured event begins")],
            textMain: n.Z.trans("Enable Chess.com notifications in your browser, and instantly know when???????"),
            tip: n.Z.trans("(You can choose the events that matter to you in your Chess.com Notification settings.)")
        }
          , u = {
            MAX_REQUESTS: 2,
            USER: window.context.user
        }
          , l = u.USER && u.USER.allowBrowserNotifications && u.USER.allowBrowserNotifications.length > 0 ? u.USER.allowBrowserNotifications : null
          , h = Date.now() / 1e3
          , d = h - (null != (r = null == (a = window.context.user) ? void 0 : a.registerDate) ? r : h)
    },
    4744: function(e, t, s) {
        "use strict";
        s.d(t, {
            yc: function() {
                return d
            },
            Wp: function() {
                return h
            },
            ZC: function() {
                return l
            },
            U3: function() {
                return p
            },
            rP: function() {
                return f
            },
            p0: function() {
                return a
            },
            Cz: function() {
                return k
            },
            xL: function() {
                return m
            },
            Zj: function() {
                return g
            },
            _j: function() {
                return b
            },
            Iz: function() {
                return w
            }
        });
        const a = {
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
        var r = s(90425)
          , n = s(18160)
          , o = Object.defineProperty
          , c = Object.getOwnPropertySymbols
          , i = Object.prototype.hasOwnProperty
          , u = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? o(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        const l = {
            REPORT_USER: "web_user_callback_report_user",
            REPORT_TV_USER: "web_tv_callback_report",
            USER_POPUP: "web_user_callback_popup"
        }
          , h = (n.Z.trans("Membership Icons"),
        n.Z.trans("Emoji"),
        n.Z.trans("Chess"),
        n.Z.trans("Holiday"),
        n.Z.trans("Hosts"),
        n.Z.trans("Computer Chess"),
        n.Z.trans("PRO Chess League"),
        {
            category: "membership_icons",
            code: "nothing",
            description: n.Z.trans("Nothing"),
            id: 206,
            imageCode: "nothing",
            membershipLevelCode: "staff",
            name: n.Z.trans("Nothing"),
            status: ""
        })
          , d = ["blocked", "clear", "clear_light"]
          , m = {
            USER_FLAIR: "user-flair",
            USER_SEARCH: "user-search",
            USER_POPOVER_CONTAINER: "user-popover"
        }
          , b = {
            about: ()=>r.Z.generate("web_about"),
            membership: (e="icon")=>r.Z.generate("web_membership", {
                c: e
            }),
            usernameSearch: e=>r.Z.generate("web_user_callback_username_search", ((e,t)=>{
                for (var s in t || (t = {}))
                    i.call(t, s) && __defNormalProp(e, s, t[s]);
                if (c)
                    for (var s of c(t))
                        u.call(t, s) && __defNormalProp(e, s, t[s]);
                return e
            }
            )({
                activeDays: 4e3
            }, e)),
            userDivision: ({league: e, division: t})=>r.Z.generate("web_league_division", {
                league: e,
                division: t
            }),
            userProfile: e=>r.Z.generate("web_member_view", {
                username: e
            })
        }
          , w = {
            acceptFriendRequest: n.Z.trans("Accept Friend Request"),
            addFriend: n.Z.trans("Add Friend"),
            block: n.Z.trans("Block"),
            blockConfirm: n.Z.trans("Are you sure you want to block this user?"),
            blockUser: e=>n.Z.trans("Block %username%?", {
                "%username%": e
            }),
            cancel: n.Z.trans("Cancel"),
            cancelFriendRequest: n.Z.trans("Cancel Friend Request"),
            challenge: n.Z.trans("Challenge"),
            follow: n.Z.trans("Follow"),
            gameArchive: n.Z.trans("Game Archive"),
            giftMembership: n.Z.trans("Gift Membership"),
            giveTrophy: n.Z.trans("Give Award"),
            joinedDate: e=>n.Z.trans("Joined %1$s%", {
                "%1$s%": e
            }),
            lastOnline: e=>n.Z.trans("Online %1$s%", {
                "%1$s%": e
            }),
            moderator: n.Z.trans("Moderator"),
            onlineNow: n.Z.trans("Online Now"),
            inLiveNow: n.Z.trans("In Live"),
            removeFriend: n.Z.trans("Remove Friend"),
            removeFriendConfirm: n.Z.trans("Are you sure you want to remove this friend from your list?"),
            report: n.Z.trans("Report"),
            reportUser: e=>n.Z.trans("Report %username%", {
                "%username%": e
            }),
            sendMessage: n.Z.trans("Send Message"),
            showYourFlair: n.Z.trans("Show your flair!"),
            staff: n.Z.trans("Staff"),
            unblock: n.Z.trans("Unblock"),
            unfollow: n.Z.trans("Unfollow"),
            userReportError: n.Z.trans("Tell us more...")
        }
          , k = (a.diamond,
        a.abuser,
        a.cheater,
        a.voluntarilyClosed,
        a.unspecifiedClosed,
        a.gold,
        a.moderator,
        a.platinum,
        a.staff,
        {
            [a.basic]: n.Z.trans("Basic Membership"),
            [a.diamond]: n.Z.trans("Diamond Membership"),
            [a.cheater]: n.Z.trans("Closed: Fair Play"),
            [a.abuser]: n.Z.trans("Closed: Abuse"),
            [a.voluntarilyClosed]: n.Z.trans("Closed: Inactive"),
            [a.unspecifiedClosed]: n.Z.trans("Account Closed"),
            [a.gold]: n.Z.trans("Gold Membership"),
            [a.moderator]: n.Z.trans("Moderator Account"),
            [a.platinum]: n.Z.trans("Platinum Membership"),
            [a.silver]: n.Z.trans("Silver Membership"),
            [a.staff]: n.Z.trans("Staff Account")
        })
          , f = {
            GM: n.Z.trans("Grandmaster"),
            WGM: n.Z.trans("Woman Grandmaster"),
            IM: n.Z.trans("International Master"),
            WIM: n.Z.trans("Woman International Master"),
            FM: n.Z.trans("FIDE Master"),
            WFM: n.Z.trans("Woman FIDE Master"),
            NM: n.Z.trans("National Master"),
            CM: n.Z.trans("FIDE Candidate Master"),
            WCM: n.Z.trans("FIDE Woman Candidate Master"),
            WNM: n.Z.trans("Woman National Master")
        }
          , p = {
            AUTOCOMPLETE_CLEAR_SELECTED: "form-autocomplete-clear-selected"
        }
          , g = {
            FETCH_ROLES: "fetchRoles"
        }
    },
    38096: function(e, t, s) {
        "use strict";
        s.d(t, {
            jl: function() {
                return a.j
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
            }
        });
        var a = s(8739)
          , r = s(99660)
          , n = (s(90425),
        s(4744))
          , o = s(52476);
        const c = window.context
          , isImpersonating = ()=>{
            var e;
            return !(!(0,
            a.j)() || !(null == (e = c.user) ? void 0 : e.isImpersonating))
        }
          , checkUserStatus = e=>{
            if (!(0,
            a.j)())
                return !1;
            let t = !1;
            switch (e) {
            case "isActivated":
                t = c.user.isActivated;
                break;
            case "isStaff":
                t = c.user.membershipLevel >= n.p0.staff;
                break;
            case "isStaffOnly":
                t = c.user.membershipLevel === n.p0.staff;
                break;
            case "isModerator":
                t = c.user.membershipLevel >= n.p0.moderator;
                break;
            case "isModeratorOnly":
                t = c.user.membershipLevel === n.p0.moderator;
                break;
            case "isDiamond":
                t = c.user.membershipLevel >= n.p0.diamond;
                break;
            case "isDiamondOnly":
                t = c.user.membershipLevel === n.p0.diamond;
                break;
            case "isPlatinum":
                t = c.user.membershipLevel >= n.p0.platinum;
                break;
            case "isPlatinumOnly":
                t = c.user.membershipLevel === n.p0.platinum;
                break;
            case "isSilver":
            case "isPremium":
                t = c.user.membershipLevel >= n.p0.silver;
                break;
            case "isSilverOnly":
                t = c.user.membershipLevel === n.p0.silver;
                break;
            case "isGold":
                t = c.user.membershipLevel >= n.p0.gold;
                break;
            case "isGoldOnly":
                t = c.user.membershipLevel === n.p0.gold;
                break;
            case "isBasic":
                t = c.user.membershipLevel === n.p0.basic;
                break;
            case "isNewlyRegistered":
                t = c.user.isNewlyRegistered;
                break;
            case "isGuest":
                t = c.user.isGuest;
                break;
            case "chessTitle":
                t = c.user.chessTitle;
                break;
            default:
                t = !1
            }
            return t
        }
          , getAdditionalUserInfo = e=>{
            var t, s, n, o, i, u, l, h, d, m, b, w, k, f, p, g, _, v, y;
            let z = !1;
            if (!(0,
            a.j)()) {
                switch (e) {
                case "diagramSettings":
                    z = {};
                    break;
                case "isDarkMode":
                    z = (0,
                    r.KZ)();
                    break;
                default:
                    z = null
                }
                return z
            }
            switch (e) {
            case "cohort":
                z = null == (t = c.user) ? void 0 : t.cohort;
                break;
            case "country":
                z = null == (s = c.user) ? void 0 : s.country;
                break;
            case "flairCode":
                z = null == (n = c.user) ? void 0 : n.flairCode;
                break;
            case "getUserId":
                z = null == (o = c.user) ? void 0 : o.id;
                break;
            case "getUsername":
                z = null == (i = c.user) ? void 0 : i.username;
                break;
            case "getAvatarUrl":
                z = null == (u = c.user) ? void 0 : u.avatarUrl;
                break;
            case "getAvatarLargeUrl":
                z = null == (l = c.user) ? void 0 : l.avatarLargeUrl;
                break;
            case "getSettingsAvatarUrl":
                z = null == (h = c.user) ? void 0 : h.settingsAvatarUrl;
                break;
            case "getLastLoginDate":
                z = null == (d = c.user) ? void 0 : d.lastLoginDate;
                break;
            case "registerDate":
                z = null == (m = c.user) ? void 0 : m.registerDate;
                break;
            case "getBrowserTimezone":
                z = window.jstz.determine().name();
                break;
            case "getTimezone":
                z = null == (b = c.user) ? void 0 : b.timezone;
                break;
            case "getDiagramSettings":
                z = c.diagramSettings;
                break;
            case "language":
                z = c.i18n.locale;
                break;
            case "contentLanguage":
                z = c.i18n.contentLanguage;
                break;
            case "speaksEnglish":
                z = "en_US" === c.i18n.locale;
                break;
            case "eligibleFirstTrial":
                z = null == (w = c.user) ? void 0 : w.eligibleFirstTrial;
                break;
            case "fairPlayAgree":
                z = null == (k = c.user) ? void 0 : k.fairPlayAgree;
                break;
            case "getArchiveView":
                z = (null == (f = c.user) ? void 0 : f.archiveView) ? c.user.archiveView : "grid";
                break;
            case "homeContentType":
                z = "following";
                break;
            case "getMembershipLevel":
                z = null == (p = c.user) ? void 0 : p.membershipLevel;
                break;
            case "isContentHidden":
                z = null == (g = c.user) ? void 0 : g.isContentHidden;
                break;
            case "isDarkMode":
                z = (0,
                r.KZ)();
                break;
            case "rating":
                z = null == (_ = c.user) ? void 0 : _.rating;
                break;
            case "safeMode":
                z = null == (v = c.user) ? void 0 : v.safeMode;
                break;
            case "uuid":
                z = null == (y = c.user) ? void 0 : y.uuid;
                break;
            default:
                z = !1
            }
            return z
        }
          , getMembershipNumber = (e,t)=>!t && e >= n.p0.basic ? n.p0.unspecifiedClosed : e
    },
    52476: function(e, t, s) {
        "use strict";
        function isGuest() {
            var e, t;
            return Boolean(null == (t = null == (e = window.context) ? void 0 : e.user) ? void 0 : t.isGuest)
        }
        s.d(t, {
            n: function() {
                return isGuest
            }
        })
    },
    8739: function(e, t, s) {
        "use strict";
        s.d(t, {
            j: function() {
                return isLoggedIn
            }
        });
        var a = s(82220);
        function isLoggedIn() {
            var e;
            return Boolean((null == (e = window.context) ? void 0 : e.user) && !(0,
            a.Z)())
        }
    },
    89177: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return W
            }
        });
        var a = s(4744)
          , r = s(70528)
          , n = s(66248)
          , o = Object.defineProperty
          , c = Object.getOwnPropertySymbols
          , i = Object.prototype.hasOwnProperty
          , u = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? o(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s
          , __spreadValues = (e,t)=>{
            for (var s in t || (t = {}))
                i.call(t, s) && __defNormalProp(e, s, t[s]);
            if (c)
                for (var s of c(t))
                    u.call(t, s) && __defNormalProp(e, s, t[s]);
            return e
        }
        ;
        const l = "chessComAppState"
          , h = ["id", "enabled", "allowMarkings", "captureKeyStrokes", "fadeSetup", "fetched", "flipBoard", "flipped", "highlightColor", "highlightOpacity", "moveListContextMenuEnabled", "overlayInAnalysisMode"]
          , d = {
            getBoardOptions() {
                var e;
                const t = (0,
                r.Q)(n.Z.get(l))
                  , s = Object.assign({}, null == (e = null == t ? void 0 : t.board) ? void 0 : e.boardOptions);
                return h.forEach((e=>{
                    delete s[e]
                }
                )),
                s.highlightColor = void 0,
                s
            },
            setBoardOptions(e) {
                var t;
                let s = (0,
                r.Q)(n.Z.get(l));
                (null == (t = null == s ? void 0 : s.board) ? void 0 : t.boardOptions) ? Object.assign(s.board.boardOptions, __spreadValues({}, e)) : s = {
                    board: {
                        boardOptions: __spreadValues({}, e)
                    }
                },
                h.forEach((e=>{
                    delete s.board.boardOptions[e]
                }
                )),
                n.Z.set(l, (0,
                r.P)(s))
            }
        };
        var m = s(87074)
          , b = s(90425)
          , w = s(35174)
          , k = s(73167)
          , f = s(92591);
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
            return function addFriend(t, s=!1) {
                const {actionQueue: a, http: r, Router: n} = e
                  , o = {
                    user: t
                };
                return s && (o.recommendation = 1),
                a.add(r.post, n.generate("web_friend_request_callback", o))
            }
        }
        function createApproveFriendRequest(e) {
            return function approveFriendRequest(t) {
                const {actionQueue: s, http: a, Router: r} = e;
                return s.add(a.put, r.generate("web_friend_accept_request_callback", {
                    user: t
                }))
            }
        }
        function createBlockUser(e) {
            return function blockUser(t) {
                const {actionQueue: s, CSRFToken: a, http: r, Router: n} = e;
                return s.add(r.post, n.generate("web_member_callback_block_member", {
                    username: t
                }), {
                    _token: a
                })
            }
        }
        function createCancelFriendRequest(e) {
            return function cancelFriendRequest(t) {
                const {actionQueue: s, http: a, Router: r} = e;
                return s.add(a.post, r.generate("web_friend_cancel_request_callback", {
                    user: t
                }))
            }
        }
        function createCheckMembershipStatus(e) {
            return function checkMembershipStatus(t) {
                const {membership: s, service: a, user: r} = e;
                if (!a.isLoggedIn())
                    return !1;
                let n = !1;
                switch (t) {
                case "isActivated":
                    n = r.isActivated;
                    break;
                case "isStaff":
                    n = r.membershipLevel >= s.staff;
                    break;
                case "isStaffOnly":
                    n = r.membershipLevel === s.staff;
                    break;
                case "isModerator":
                    n = r.membershipLevel >= s.moderator;
                    break;
                case "isModeratorOnly":
                    n = r.membershipLevel === s.moderator;
                    break;
                case "isDiamond":
                    n = r.membershipLevel >= s.diamond;
                    break;
                case "isDiamondOnly":
                    n = r.membershipLevel === s.diamond;
                    break;
                case "isPlatinum":
                    n = r.membershipLevel >= s.platinum;
                    break;
                case "isPlatinumOnly":
                    n = r.membershipLevel === s.platinum;
                    break;
                case "isSilver":
                case "isPremium":
                    n = r.membershipLevel >= s.silver;
                    break;
                case "isSilverOnly":
                    n = r.membershipLevel === s.silver;
                    break;
                case "isGold":
                    n = r.membershipLevel >= s.gold;
                    break;
                case "isGoldOnly":
                    n = r.membershipLevel === s.gold;
                    break;
                case "isBasic":
                    n = r.membershipLevel === s.basic;
                    break;
                default:
                    n = !1
                }
                return n
            }
        }
        function createCheckValidUsername(e) {
            return function checkValidUsername(t) {
                const {http: s, Router: a} = e;
                return s.get(a.generate("web_user_callback_valid_username", {
                    username: t
                }))
            }
        }
        function createDeclineFriendRequest(e) {
            return function declineFriendRequest(t) {
                const {actionQueue: s, http: a, Router: r} = e;
                return s.add(a.post, r.generate("web_friend_decline_request_callback", {
                    user: t
                }))
            }
        }
        function createDeleteFriend(e) {
            return function deleteFriend(t) {
                const {actionQueue: s, http: a, Router: r} = e;
                return s.add(a.delete, r.generate("web_friend_delete_callback", {
                    user: t
                }))
            }
        }
        function createDismissFollowSuggestion(e) {
            return function dismissFollowSuggestion(t) {
                const {actionQueue: s, http: a, Router: r} = e;
                return s.add(a.post, r.generate("web_user_callback_dismiss_follow_suggestion", {
                    username: t
                }))
            }
        }
        function createEligibleFirstTrial(e) {
            return function EligibleFirstTrial() {
                const {service: t, user: s} = e;
                return t.isLoggedIn() && s.eligibleFirstTrial
            }
        }
        var p = s(40904)
          , g = s(82220);
        function createFetchReportReasonsData(e) {
            return function fetchReportReasonsData() {
                const {http: t, Router: s} = e;
                return t.get(s.generate("web_user_callback_report_reasons"))
            }
        }
        function createGenerateProfileLink(e) {
            return function generateProfileLink(t) {
                const {Router: s} = e;
                return t ? `<a href="${s.generate("web_member_view", {
                    username: t
                })}" target="_self">${t}</a>` : ""
            }
        }
        function createGet(e) {
            return function get(t) {
                const {user: s} = e;
                return s ? t ? s[t] : s : null
            }
        }
        function createGetAvatar(e) {
            return function getAvatar(t) {
                const {http: s, Router: a} = e;
                return s.get(a.generate("pubapi_player_profile", {
                    username: t
                }))
            }
        }
        function createGetFollowSuggestions(e) {
            return function getFollowSuggestions() {
                const {http: t, Router: s} = e;
                return t.get(s.generate("web_user_callback_follow_suggestions"))
            }
        }
        function createGetFriends(e) {
            return function getFriends(t) {
                const {http: s, Router: a} = e;
                return s.get(a.generate("web_friend_callback_friends_search", t))
            }
        }
        function createGetOpponents(e) {
            return function getOpponents() {
                const {http: t, Router: s} = e;
                return t.get(s.generate("web_user_callback_recent_opponents"))
            }
        }
        var _ = s(38096);
        function getPromises() {
            return window.chesscom.promises || (window.chesscom.promises = {}),
            window.chesscom.promises
        }
        function createGetRoles(e) {
            return function getRoles() {
                const {http: t, Router: s} = e;
                return (0,
                _.jl)() ? function execAndCache({id: e, promise: t}) {
                    const s = getPromises();
                    return s[e] || (s[e] = new Promise(((e,s)=>{
                        t().then(e).catch(s)
                    }
                    ))),
                    s[e]
                }({
                    id: a.Zj.FETCH_ROLES,
                    promise: ()=>t.get(s.generate("web_security_callback_user_roles"))
                }) : []
            }
        }
        function createGetUser(e) {
            return function getUser(t) {
                const {http: s, Router: a} = e;
                return s.get(a.generate("web_user_callback_popup", {
                    username: t
                }))
            }
        }
        function createGuestUpdateSkillLevel(e) {
            return function guestUpdateSkillLevel(t) {
                const {http: s, Router: a} = e;
                return s.post(a.generate("web_guest_update_skill_level"), {
                    skill_level: Number(t)
                })
            }
        }
        function createIsEnabled(e) {
            return function isEnabled() {
                const {service: t, user: s} = e;
                return t.isLoggedIn() && s.isEnabled
            }
        }
        function createIsImpersonating(e) {
            return function isImpersonating() {
                const {service: t, user: s} = e;
                return t.isLoggedIn() && s.isImpersonating
            }
        }
        function createIsLoggedIn(e) {
            return function isLoggedIn() {
                const {is2FARoute: t, user: s} = e;
                return s && s.id && !t()
            }
        }
        function createReportUser(e) {
            return function reportUser(t) {
                const {callbacks: s, http: a, Router: r} = e;
                return a.post(r.generate(s.REPORT_USER), t)
            }
        }
        var v, y = s(3775);
        function toggleBodyClass(e, t) {
            !function toggleClass(e, t, s) {
                const a = e.classList
                  , r = a.contains(t)
                  , n = (0,
                y.jn)(s) ? s : !r;
                n !== r && (n ? a.add(t) : a.remove(t))
            }(document.body, e, t)
        }
        (e=>{
            let t;
            var s;
            (s = t = e.BodyClass || (e.BodyClass = {})).Ad = "with-und",
            s.Analysis = "with-analysis",
            s.AnalysisCollapsed = "with-analysis-collapsed",
            s.Comments = "with-comments",
            s.DoubleBoard = "double-board",
            s.Evaluation = "with-evaluation",
            s.Pseudo3d = "pseudo-3d",
            s.FocusMode = "focus-mode",
            s.HandPieces = "with-pieces",
            s.HideBoardIcons = "hide-board-icons",
            s.MobileBoardHidden = "mobile-board-hidden",
            s.OutsideCoords = "outside-coords",
            s.Players = "with-players",
            s.Real3d = "real-3d",
            s.Tabs = "with-tabs",
            s.TheatreMode = "theatre-mode",
            s.Videos = "with-videos"
        }
        )(v || (v = {}));
        var z = s(20517)
          , O = s(3510)
          , T = s(6159)
          , E = s(11721)
          , S = Object.defineProperty
          , j = Object.defineProperties
          , I = Object.getOwnPropertyDescriptors
          , C = Object.getOwnPropertySymbols
          , R = Object.prototype.hasOwnProperty
          , A = Object.prototype.propertyIsEnumerable
          , save_board_setting_defNormalProp = (e,t,s)=>t in e ? S(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        function createSaveBoardSetting(e) {
            return async function saveBoardSetting(t, s) {
                const a = function createUndoAction(t, s) {
                    const {service: a, update: r} = e
                      , {boardOptions: n} = a.get();
                    return r("boardOptions", (o = ((e,t)=>{
                        for (var s in t || (t = {}))
                            R.call(t, s) && save_board_setting_defNormalProp(e, s, t[s]);
                        if (C)
                            for (var s of C(t))
                                A.call(t, s) && save_board_setting_defNormalProp(e, s, t[s]);
                        return e
                    }
                    )({}, n),
                    c = {
                        [t]: s
                    },
                    j(o, I(c))));
                    var o, c
                }(t, s);
                return function toggleUiClasses(e, t) {
                    "coordinates" === e && function toggleOutsideCoords(e) {
                        toggleBodyClass(v.BodyClass.OutsideCoords, e)
                    }("outside" === t)
                }(t, s),
                Promise.all([createSavePromise(t, s), createSettingsServiceSavePromise(t, s)]).then(e.emitUser).catch((()=>{
                    a(),
                    e.emitUser()
                }
                ))
            }
            ;
            function createSavePromise(t, s) {
                const {actionQueue: a, http: r, Router: n} = e
                  , [o,c] = (0,
                T.M)(t, s);
                return a.add(r.post, n.generate(z.f[o]), {
                    action: c
                })
            }
            function createSettingsServiceSavePromise(e, t) {
                if (!window.chesscom.features.includes("settings_service_data_sync"))
                    return Promise.resolve();
                const s = (0,
                E.R)({
                    [e]: t
                });
                return (0,
                O.z)(s)
            }
        }
        var x = Object.defineProperty
          , P = Object.getOwnPropertySymbols
          , L = Object.prototype.hasOwnProperty
          , N = Object.prototype.propertyIsEnumerable
          , search_username_defNormalProp = (e,t,s)=>t in e ? x(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        function createSearchUsername(e) {
            return function searchUsername(t, s={}) {
                const {http: a, routes: r} = e;
                return a.get(r.usernameSearch(((e,t)=>{
                    for (var s in t || (t = {}))
                        L.call(t, s) && search_username_defNormalProp(e, s, t[s]);
                    if (P)
                        for (var s of P(t))
                            N.call(t, s) && search_username_defNormalProp(e, s, t[s]);
                    return e
                }
                )({
                    query: t
                }, s)))
            }
        }
        function createSet(e) {
            return function set(t, s) {
                const {user: a} = e;
                return a ? (a[t] = s,
                a) : null
            }
        }
        function createSetArchiveView(e) {
            return function setArchiveView(t) {
                const {emitUser: s, http: a, Router: r, update: n} = e
                  , o = n("archiveView", t);
                return a.post(r.generate("web_user_callback_set_archive_view"), {
                    archiveView: t
                }).then(s).catch((()=>{
                    o(),
                    s()
                }
                ))
            }
        }
        function createSetFairPlayAgree(e) {
            return function setFairPlayAgree(t) {
                const {emitUser: s, http: a, Router: r, update: n} = e
                  , o = n("fairPlayAgree", t);
                return a.post(r.generate("web_user_callback_set_fair_play_agree", {
                    fairPlayAgree: t ? 1 : 0
                })).then(s).catch((()=>{
                    o(),
                    s()
                }
                ))
            }
        }
        function createSetHomeContentType(e) {
            return function setHomeContentType(t) {
                const {emitUser: s, http: a, Router: r, update: n} = e
                  , o = n("homeContentType", t);
                return a.post(r.generate("web_user_callback_set_home_recent_content_type"), {
                    recentContentType: t
                }).then(s).catch((()=>{
                    o(),
                    s()
                }
                ))
            }
        }
        function createTrackUser(e) {
            return function trackUser(t) {
                const {actionQueue: s, CSRFToken: a, http: r, Router: n} = e;
                return s.add(r.post, n.generate("web_member_callback_track_member", {
                    username: t
                }), {
                    _token: a
                })
            }
        }
        function createUnblockUser(e) {
            return function unblockUser(t) {
                const {actionQueue: s, CSRFToken: a, http: r, Router: n} = e;
                return s.add(r.post, n.generate("web_member_callback_unblock_member", {
                    username: t
                }), {
                    _token: a
                })
            }
        }
        function createUntrackUser(e) {
            return function untrackUser(t) {
                const {actionQueue: s, CSRFToken: a, http: r, Router: n} = e;
                return s.add(r.post, n.generate("web_member_callback_untrack_member", {
                    username: t
                }), {
                    _token: a
                })
            }
        }
        var M = Object.defineProperty
          , U = Object.getOwnPropertySymbols
          , D = Object.prototype.hasOwnProperty
          , Z = Object.prototype.propertyIsEnumerable
          , service_defNormalProp = (e,t,s)=>t in e ? M(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        const B = {
            getToken: function getToken() {
                return window.context && window.context.csrf && window.context.csrf.token
            }
        };
        const q = function createUserService({cache: e, callbacks: t, CSRF: s, getCurrentUser: r, http: n, includeBoardOptions: o=!1, Router: c, routes: i}) {
            const u = (0,
            f.j)(!0)
              , l = (0,
            w.I)()
              , h = function getInitialUser() {
                const t = r()
                  , s = function getDefaultUser() {
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
                    return s;
                const a = Object.assign({}, s, t);
                if (!t.isImpersonating) {
                    const t = e.getBoardOptions();
                    Object.keys(t).length && Object.assign(a.boardOptions, (0,
                    k.ei)(t, ["animationType", "boardSize", "boardStyle", "coordinates", "darkMode", "highlightLegalMoves", "highlightMoves", "isWhiteOnBottom", "moveListDisplayType", "moveMethod", "pieceStyle", "playSounds", "soundTheme"]))
                }
                return a
            }()
              , d = {
                actionQueue: u,
                callbacks: t,
                CSRFToken: s.getToken(),
                emitUser: emitUser,
                http: n,
                is2FARoute: g.Z,
                membership: a.p0,
                Router: c,
                routes: i,
                update: function update(t, s) {
                    const a = h[t];
                    return h[t] = s,
                    e.setBoardOptions(s),
                    function undo() {
                        h[t] = a,
                        e.setBoardOptions(a)
                    }
                },
                user: h
            }
              , m = ((e,t)=>{
                for (var s in t || (t = {}))
                    D.call(t, s) && service_defNormalProp(e, s, t[s]);
                if (U)
                    for (var s of U(t))
                        Z.call(t, s) && service_defNormalProp(e, s, t[s]);
                return e
            }
            )({
                addFriend: createAddFriend(d),
                approveFriendRequest: createApproveFriendRequest(d),
                blockUser: createBlockUser(d),
                cancelFriendRequest: createCancelFriendRequest(d),
                checkMembershipStatus: createCheckMembershipStatus(d),
                checkValidUsername: createCheckValidUsername(d),
                declineFriendRequest: createDeclineFriendRequest(d),
                deleteFriend: createDeleteFriend(d),
                dismissFollowSuggestion: createDismissFollowSuggestion(d),
                eligibleFirstTrial: createEligibleFirstTrial(d),
                fetchBoardOptions: o ? function fetchBoardOptions() {
                    return (0,
                    g.Z)() ? Promise.resolve() : (0,
                    p.R)().catch(getDefaultBoardOptions)
                }
                : void 0,
                fetchReportReasonsData: createFetchReportReasonsData(d),
                generateProfileLine: createGenerateProfileLink(d),
                get: createGet(d),
                getAvatar: createGetAvatar(d),
                getFollowSuggestions: createGetFollowSuggestions(d),
                getFriends: createGetFriends(d),
                getOpponents: createGetOpponents(d),
                getRoles: createGetRoles(d),
                getUser: createGetUser(d),
                guestUpdateSkillLevel: createGuestUpdateSkillLevel(d),
                isEnabled: createIsEnabled(d),
                isImpersonating: createIsImpersonating(d),
                isLoggedIn: createIsLoggedIn(d),
                reportUser: createReportUser(d),
                saveBoardSetting: createSaveBoardSetting(d),
                searchUsername: createSearchUsername(d),
                set: createSet(d),
                setArchiveView: createSetArchiveView(d),
                setFairPlayAgree: createSetFairPlayAgree(d),
                setHomeContentType: createSetHomeContentType(d),
                trackUser: createTrackUser(d),
                unblockUser: createUnblockUser(d),
                untrackUser: createUntrackUser(d)
            }, l);
            return async function fetchAndApplyBoardOptions() {
                if (m.fetchBoardOptions)
                    try {
                        const t = await m.fetchBoardOptions();
                        m.set("boardOptions", t),
                        e.setBoardOptions(t),
                        emitUser()
                    } catch (t) {}
            }(),
            m.acceptFollowSuggestion = m.trackUser,
            d.service = m,
            m;
            function emitUser(e) {
                l.emit(e, h)
            }
        }({
            callbacks: a.ZC,
            cache: d,
            CSRF: B,
            getCurrentUser: function getUserFromContext() {
                var e;
                return null == (e = window.context) ? void 0 : e.user
            },
            http: m.Z,
            Router: b.Z,
            routes: a._j
        });
        var W = q
    },
    55208: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            initGlobal: function() {
                return initGlobal
            }
        });
        var a = s(54713);
        const r = (0,
        a.kr)()
          , n = (0,
        a.ko)({
            context: r
        });
        var o = s(87080)
          , c = s(28598)
          , i = s(72111)
          , u = s(74158);
        const l = (0,
        a.eI)({
            init(e) {
                (0,
                u.q)() && ((0,
                i.R)(),
                e.then(i.R),
                c.pS.on(c.LZ.CONNECT, i.R),
                c.pS.on(c.LZ.DISCONNECT, i.R),
                c.pS.on(c.LZ.ERROR, i.R),
                c.pS.on(c.LZ.FAILURE, i.R),
                c.pS.on(c.LZ.RECONNECT, i.R),
                c.pS.client.addQualityListener(i.R))
            }
        });
        var h = s(19626);
        const d = (0,
        a.ko)({
            clients: [l],
            state: [o.z.reactive],
            context: h.q
        });
        var m = s(51838);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const b = (0,
        a.eI)({
            init() {
                (function shouldLoadBoardPopover() {
                    return Boolean(document.querySelector(`[${m.s.BOARD_POPOVER}]`))
                }
                )() && Promise.all([s.e(4579), s.e(7523), s.e(2649), s.e(9694)]).then(s.bind(s, 1997)).then((e=>e.default()))
            }
        });
        var w = s(18470);
        var k = s(66248)
          , f = s(89177);
        function shouldUserSeeOnboardModal() {
            if (!f.Z.isLoggedIn())
                return !1;
            const e = k.Z.get(w.F$) === f.Z.get("id");
            return function shouldShowOnboardModal(e, t, s, a) {
                const r = Math.round((new Date).getTime() / 1e3);
                return !(!t || s || a || e <= r - 3600)
            }(f.Z.get("registerDate"), f.Z.eligibleFirstTrial(), f.Z.get("isGuest"), e)
        }
        var p = s(423);
        const g = navigator.cookieEnabled && "serviceWorker"in navigator && "PushManager"in window && "Notification"in window && "fetch"in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey");
        var _ = s(38096)
          , v = s(86673);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const initDialog = ()=>{
            Promise.all([s.e(4579), s.e(1966), s.e(7992)]).then(s.bind(s, 805)).then((e=>e.default.createInstance(p.xL.NOTIFICATIONS_REQUEST))).then((()=>v.Z.emit(p.U3.SHOW_CUSTOM_REQUEST)))
        }
        ;
        function loadNotifications() {
            const e = document.querySelector(p.xL.ENABLE_NOTIFICATIONS)
              , t = document.querySelector(p.xL.ENABLE_NOTIFICATIONS_MESSAGE)
              , s = window.chesscom.dismissTrialBox;
            if (!(shouldUserSeeOnboardModal() || void 0 !== s && ((e,t)=>{
                if (shouldUserSeeOnboardModal())
                    return !1;
                if (e.freeDiamondCampaign && e.freeDiamondCampaign.showGiftExpireModal)
                    return !1;
                if (!e.eligibleFirstTrial)
                    return !1;
                const s = Math.round((new Date).getTime() / 1e3)
                  , a = 86400;
                return !t && e.registerDate <= s - a || e.registerDate <= s - 691200 && (!t || t <= s - 604800)
            }
            )(window.context.user, s) || p.R6 / 3600 / 24 < 5))
                if (g) {
                    const t = p.zC && p.zC.length > 0 ? p.zC[p.zC.length - 1] : null;
                    if ((0,
                    _.jl)() && !p.zC && initDialog(),
                    p.zC && p.zC.length > 0 && p.zC.length < p._G.MAX_REQUESTS) {
                        const e = Date.now() - 2592e6
                          , s = 1e3 * t.timestamp;
                        t && !t.allowed && s < e && initDialog()
                    }
                    e && t && !t.allowed && e.addEventListener("click", (e=>{
                        e.preventDefault(),
                        initDialog()
                    }
                    ))
                } else
                    t && t.remove()
        }
        const y = (0,
        a.eI)({
            init() {
                loadNotifications()
            }
        });
        var z = s(52476)
          , O = s(8739);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const T = (0,
        a.eI)({
            init() {
                (0,
                O.j)() && !(0,
                z.n)() && g && Promise.all([s.e(4579), s.e(1966), s.e(1753)]).then(s.bind(s, 48204))
            }
        })
          , E = (0,
        a.eI)({
            init() {
                const e = document.getElementById("navigation-footer");
                e && e.classList.remove("navigation-footer-hide")
            }
        });
        var S = s(16169);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const j = (0,
        a.eI)({
            init() {
                if ((0,
                O.j)() && !(0,
                z.n)())
                    return;
                const e = function getGuestModalTriggerElements() {
                    return [...document.querySelectorAll(`.${S.x.GUEST_MODAL_TRIGGER}`)]
                }();
                e.length && s.e(9905).then(s.bind(s, 71261)).then((({setupGuestModalTriggers: t})=>{
                    t(e)
                }
                ))
            }
        });
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const I = (0,
        a.eI)({
            init() {
                const e = function getDeferredImages() {
                    return [...document.getElementsByClassName("img-defer")]
                }();
                e.length && s.e(3431).then(s.bind(s, 39713)).then((t=>t.setupDeferredImages(e)))
            }
        });
        function isInvitationsEnabled() {
            return Boolean((0,
            O.j)() && !(0,
            z.n)() && window.PubSub && window.PubSub.options)
        }
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const C = (0,
        a.eI)({
            init() {
                isInvitationsEnabled() && s.e(468).then(s.bind(s, 68248)).then((({setupInvitations: e})=>{
                    e()
                }
                ))
            }
        });
        var R = s(87074)
          , A = s(90425)
          , x = s(23992);
        function useLocalStorage(e, t, s={
            deep: !0
        }) {
            var a;
            const r = (0,
            x.ref)(null != (a = k.Z.get(e)) ? a : t);
            return (0,
            x.watch)(r, (()=>k.Z.set(e, r.value)), s),
            r
        }
        const P = {
            currentWeek: function getWeekNumber(e=new Date) {
                const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()));
                t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7));
                const s = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
                return Math.ceil(((t.getTime() - s.getTime()) / 864e5 + 1) / 7)
            }(),
            divisionStartedModalFetchedWeek: useLocalStorage("league-division-started-modal-fetched-week", -1),
            promotionModalFetchedWeek: useLocalStorage("league-promotion-modal-fetched-week", -1),
            showedPromotionoModal: k.Z.get("leagues_promotion_modal")
        };
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const L = (0,
        a.eI)({
            async init() {
                if (!function shouldGetLeagueData() {
                    return !!window.context.user && !!window.context.user.optedLeagues
                }())
                    return;
                const e = await function getPromotionModalData() {
                    if (P.promotionModalFetchedWeek.value === P.currentWeek)
                        return new Promise((e=>{
                            e(void 0)
                        }
                        ));
                    P.promotionModalFetchedWeek.value = P.currentWeek;
                    const e = A.Z.generate("web_league_callback_promotion_check");
                    return R.Z.get(e).then((e=>null == e ? void 0 : e.data)).catch((()=>new Promise(((e,t)=>{
                        t()
                    }
                    ))))
                }();
                (null == e ? void 0 : e.notify) && (null == e ? void 0 : e.code) !== P.showedPromotionoModal && (Promise.all([s.e(2649), s.e(2355)]).then(s.bind(s, 22355)).then((({showLeaguePromotionModal: t})=>{
                    t(e.code)
                }
                )),
                window.addEventListener("message", (e=>{
                    "show-league-promotion-share-modal" === e.data.event && Promise.all([s.e(4579), s.e(7617)]).then(s.bind(s, 37617)).then((({showLeaguePromotionShareModal: t})=>{
                        t(e.data.leagueName)
                    }
                    ))
                }
                )));
                const t = await function getDivisionStartedModalData() {
                    if (P.divisionStartedModalFetchedWeek.value === P.currentWeek)
                        return new Promise((e=>{
                            e(void 0)
                        }
                        ));
                    const e = A.Z.generate("web_league_callback_division_start_check");
                    return R.Z.get(e).then((e=>{
                        var t;
                        return (null == (t = null == e ? void 0 : e.data) ? void 0 : t.notify) && (P.divisionStartedModalFetchedWeek.value = P.currentWeek),
                        null == e ? void 0 : e.data
                    }
                    )).catch((()=>new Promise(((e,t)=>{
                        t()
                    }
                    ))))
                }();
                (null == t ? void 0 : t.notify) && s.e(9570).then(s.bind(s, 19570)).then((({showDivisionStartedModal: e})=>{
                    e(t)
                }
                ))
            }
        });
        var N = s(62844);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const M = (0,
        a.eI)({
            init() {
                if ((0,
                O.j)() && !(0,
                z.n)())
                    return;
                const e = function getLoginModalTriggerElements() {
                    return [...document.querySelectorAll(`.${N.x.LOGIN_MODAL_TRIGGER}`)]
                }();
                e.length && s.e(1323).then(s.bind(s, 96709)).then((({setupLoginModalTriggers: t})=>{
                    t(e)
                }
                ))
            }
        });
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const U = (0,
        a.eI)({
            init() {
                document.querySelector("[data-presence-user-item]") && Promise.all([s.e(4579), s.e(3974)]).then(s.bind(s, 4898)).then((({createPresenceWidgets: e})=>{
                    e()
                }
                ))
            }
        });
        function handleDeferredScript(e) {
            var t;
            const s = e.getAttribute("data-src");
            if (s) {
                const a = document.createElement("script");
                a.setAttribute("src", s),
                a.defer = !0,
                document.body.appendChild(a),
                null == (t = e.parentNode) || t.removeChild(e)
            }
        }
        const D = (0,
        a.eI)({
            init() {
                (function getDeferredScripts() {
                    return [...document.querySelectorAll("script[data-src]")]
                }
                )().forEach(handleDeferredScript)
            }
        });
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const Z = (0,
        a.eI)({
            init() {
                if ((0,
                O.j)() && !(0,
                z.n)())
                    return;
                const e = function getSignUpModalTriggerElements() {
                    return [...document.querySelectorAll(`.${N.x.AUTHENTICATION_MODAL_TRIGGER}`)]
                }();
                e.length && s.e(6562).then(s.bind(s, 44616)).then((({setupSignUpModalTriggers: t})=>{
                    t(e)
                }
                ))
            }
        });
        var B = s(86536)
          , q = s(46647)
          , W = s(32793)
          , F = s(34272)
          , G = s(43695);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        function initializeToasterCenter() {
            G.i.controllerInitialized || ((0,
            a.tL)(Promise.all([s.e(2649), s.e(4338), s.e(5750), s.e(3171)]).then(s.bind(s, 93897))),
            G.i.controllerInitialized = !0)
        }
        var H = s(22211)
          , $ = s(78441)
          , K = s(9524);
        var V = s(4074);
        function startAutoCollapseTimeout() {
            G.i.autoCollapseTimeout && (0,
            $.M)(),
            (0,
            V.u)() && (G.i.autoCollapseTimeout = setTimeout(K.g, 5e3))
        }
        var Y = s(24367);
        function getToasterCenterSetting(e) {
            const t = G.i.settings.find((t=>t.id === e));
            return Boolean(null == t ? void 0 : t.value)
        }
        var Q = s(71942);
        var J = s(12562);
        function getSeenAlertIds() {
            return G.i.seenAlertIds
        }
        var X = (e=>(e.ACHIEVMENTS = "user_achievements",
        e.ARENA_TROPHY = "user_arena_trophy",
        e.CHALLENGE = "game_seek",
        e.CLUB_FORUM_UPDATE = "user_group_forum_new",
        e.CLUB_FORUM = "user_group_forum",
        e.CLUB_NEWS_UPDATE = "user_group_news_new",
        e.CLUB_NEWS = "user_group_news",
        e.CLUB_NOTE = "user_group_note",
        e.COMMENT = "new_comment",
        e.CONTENT = "has_new_content",
        e.FRIEND_ACTIVITY = "friend_activity",
        e.FRIEND_REQUEST = "friend_request",
        e.GAME = "game",
        e.GROUP_ACTIVITY = "user_group_activity",
        e.GROUP_REQUEST = "user_group_request",
        e.NOTE = "user_comment",
        e.OFFLINE_CHALLENGE = "offline_challenges",
        e.TEAM_LIVE_COMPETITION = "team_live_competition",
        e.TEAM_MATCH = "team_match_game",
        e.TOURNAMENT = "tournament_game",
        e.TROPHY = "user_trophy",
        e.VOTE_CHESS_GAME = "votechess_game",
        e.INSIGHTS = "insights",
        e))(X || {})
          , ee = Object.defineProperty
          , te = Object.getOwnPropertySymbols
          , se = Object.prototype.hasOwnProperty
          , ae = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? ee(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        function addNotification(e) {
            initializeToasterCenter();
            const t = getSeenAlertIds()
              , {alertId: s} = e || {}
              , a = ((e,t)=>{
                for (var s in t || (t = {}))
                    se.call(t, s) && __defNormalProp(e, s, t[s]);
                if (te)
                    for (var s of te(t))
                        ae.call(t, s) && __defNormalProp(e, s, t[s]);
                return e
            }
            )({
                id: Date.now(),
                timestamp: (new Date).getTime(),
                closable: !0
            }, e);
            G.i.notifications.push(a),
            a.duration && (a.timeoutToRemove = setTimeout((()=>{
                (0,
                J.N)(a.id)
            }
            ), a.duration)),
            (0,
            H.I)(Y.m.Notifications),
            getToasterCenterSetting(Q.V.AutoExpandAll) && (a.alertType !== X.FRIEND_REQUEST || getToasterCenterSetting(Q.V.AutoExpandFriendRequests)) && (a.alertType !== X.GROUP_REQUEST || getToasterCenterSetting(Q.V.AutoExpandGroupRequests)) && ((0,
            W.tq)() || s && t.includes(s) || (s && function addSeenAlertId(e) {
                G.i.seenAlertIds.push(e)
            }(s),
            (0,
            F.m)(),
            startAutoCollapseTimeout()))
        }
        var re = s(2201);
        var ne = s(75491);
        function persistSeenAlertIds() {
            const e = getSeenAlertIds();
            e.length ? window.localStorage.setItem(ne.T, JSON.stringify(e)) : window.localStorage.removeItem(ne.T)
        }
        var oe = s(20169);
        const ce = {}
          , ie = document.getElementById(oe.GO.NAV_ROOT)
          , hasFeatureAccess = (e,t)=>{
            var s, a;
            if (null == (a = null == (s = window.chesscom) ? void 0 : s.features) ? void 0 : a.includes(e))
                return !0;
            const r = t || ie;
            return ce[e] || (ce[e] = Boolean(r && r.getAttribute(e))),
            ce[e]
        }
        ;
        var ue = s(16272)
          , le = s(18160);
        const he = {
            [X.ACHIEVMENTS]: (e,t)=>({
                content: e.title,
                route: A.Z.generate("web_awards_achievements", {
                    username: t
                })
            }),
            [X.CONTENT]: e=>({
                content: le.Z.trans("New post from %user%", {
                    "%user%": `<strong>${e.username}</strong>`
                }),
                route: e.viewUrl || `${A.Z.generate("web_user_home", {
                    alert: "content"
                })}#new_content`
            }),
            [X.CHALLENGE]: e=>({
                content: le.Z.trans("%user% wants to play", {
                    "%user%": `<strong>${e.username}</strong>`
                }),
                avatarUrl: e.image,
                route: A.Z.generate("web_daily_seek", {
                    id: e.contentId
                })
            }),
            [X.CLUB_FORUM]: e=>({
                content: le.Z.trans("%club% has a new topic", {
                    "%club%": `<strong>${e.groupName}</strong>`
                }),
                route: A.Z.generate("web_club_forum", {
                    url: e.groupUrl
                })
            }),
            [X.CLUB_FORUM_UPDATE]: e=>({
                content: `${le.Z.trans("%club% has a new topic", {
                    "%club%": `<strong>${e.groupName}</strong>`
                })} <strong>${e.title}</strong>`,
                route: A.Z.generate("web_forum_view", {
                    url: e.viewUrl
                })
            }),
            [X.CLUB_NEWS]: e=>({
                content: le.Z.trans("%club% posted news", {
                    "%club%": `<strong>${e.groupName}</strong>`
                }),
                route: A.Z.generate(hasFeatureAccess("club_post_announcement") ? "web_club_announcements" : "web_club_news", {
                    club: e.groupUrl
                })
            }),
            [X.CLUB_NEWS_UPDATE]: e=>({
                content: `${le.Z.trans("%club% posted news", {
                    "%club%": `<strong>${e.groupName}</strong>`
                })} <strong>${e.title}</strong>`,
                route: e.viewUrl ? A.Z.generate("web_news_view", {
                    url: e.viewUrl
                }) : A.Z.generate(hasFeatureAccess("club_post_announcement") ? "web_club_announcements" : "web_club_news", {
                    club: e.groupUrl
                })
            }),
            [X.CLUB_NOTE]: e=>({
                content: le.Z.trans("%club% has a new note", {
                    "%club%": `<strong>${e.groupName}</strong>`
                }),
                route: A.Z.generate("web_club_profile", {
                    url: e.groupUrl
                })
            }),
            [X.GROUP_REQUEST]: e=>{
                var t;
                return {
                    alertType: e.alertType,
                    content: `${le.Z.trans("%user% wants to join", {
                        "%user%": `<strong>${e.username}</strong>`
                    })} <strong>${e.groupName}</strong>`,
                    route: A.Z.generate("web_club_pending_requests", {
                        url: e.groupUrl
                    }),
                    image: null != (t = e.highResImage) ? t : e.image,
                    links: [{
                        label: le.Z.trans("Approve"),
                        onClick: ()=>{
                            (0,
                            J.N)(e.alertId),
                            R.Z.post(A.Z.generate("web_club_callback_manage_user_group_request", {
                                id: e.userId,
                                username: e.username,
                                action: "approve"
                            }))
                        }
                    }, {
                        label: le.Z.trans("Decline"),
                        onClick: ()=>{
                            (0,
                            J.N)(e.alertId),
                            R.Z.post(A.Z.generate("web_club_callback_manage_user_group_request", {
                                id: e.userId,
                                username: e.username,
                                action: "deny"
                            }))
                        }
                    }]
                }
            }
            ,
            [X.COMMENT]: e=>({
                content: `<strong>${e.title}</strong> <span>(${le.Z.transChoice("{0} 0 new |{1} 1 new |]1,Inf] %commentsCount% new", e.newCommentCount, {
                    "%commentsCount%": e.newCommentCount
                })})</span>`,
                route: e.viewUrl
            }),
            [X.COMMENT]: e=>({
                content: `<strong>${e.title}</strong> <span>(${le.Z.transChoice("{0} 0 new |{1} 1 new |]1,Inf] %commentsCount% new", e.newCommentCount, {
                    "%commentsCount%": e.newCommentCount
                })})</span>`,
                route: e.viewUrl
            }),
            [X.FRIEND_REQUEST]: e=>{
                var t, s;
                let a = `<strong>${e.username}</strong>`;
                return "nothing" !== e.flairCode && (a += ` <span class="flair-component flair-inline flair-${e.flairCode}"></span>`),
                {
                    alertType: e.alertType,
                    content: le.Z.trans("%user% wants to be friends", {
                        "%user%": a
                    }),
                    route: A.Z.generate("web_member_view", {
                        username: e.username
                    }),
                    image: null != (t = e.highResImage) ? t : e.image,
                    avatar: null != (s = e.highResImage) ? s : e.image,
                    links: [{
                        label: le.Z.trans("Decline"),
                        onClick: ()=>{
                            const {userId: t, alertId: s} = e;
                            t && async function declineFriendRequest(e) {
                                const t = A.Z.generate("web_friend_decline_request_callback", {
                                    user: e
                                });
                                return R.Z.delete(t)
                            }(t),
                            s && (0,
                            J.N)(s)
                        }
                    }, {
                        label: le.Z.trans("Accept"),
                        onClick: ()=>{
                            const {userId: t, alertId: s} = e;
                            t && async function acceptFriendRequest(e) {
                                const t = A.Z.generate("web_friend_accept_request_callback", {
                                    user: e
                                });
                                return R.Z.put(t)
                            }(t),
                            s && (0,
                            J.N)(s)
                        }
                    }]
                }
            }
            ,
            [X.GAME]: e=>({
                content: le.Z.trans("Check your game vs %user%", {
                    "%user%": `<strong>${e.username}</strong>`
                }),
                route: A.Z.generate("web_game_daily", {
                    id: e.contentId
                })
            }),
            [X.NOTE]: (e,t)=>({
                content: le.Z.trans("%user% left you a note", {
                    "%user%": `<strong>${e.username}</strong>`
                }),
                route: `${A.Z.generate("web_member_view", {
                    username: t,
                    alert: "notes"
                })}#new-notes`
            }),
            [X.TEAM_MATCH]: e=>{
                var t;
                return {
                    avatarUrl: null != (t = e.avatarUrl) ? t : e.image,
                    content: le.Z.trans("Check your game vs %user%", {
                        "%user%": `<strong>${e.username}</strong>`
                    }),
                    route: A.Z.generate("web_game_daily", {
                        id: e.contentId
                    })
                }
            }
            ,
            [X.TOURNAMENT]: e=>({
                content: le.Z.trans("%user% wants to join", {
                    "%user%": `<strong>${e.username}</strong>`
                }),
                route: A.Z.generate("web_game_daily", {
                    id: e.contentId
                })
            }),
            [X.TROPHY]: (e,t)=>({
                content: `${le.Z.trans("%user% sent you a trophy", {
                    "%user%": `<strong>${e.username}</strong>`
                })} <strong>${e.trophyName}</strong>`,
                route: A.Z.generate("web_awards_view_trophy", {
                    username: t,
                    type: "trophy",
                    userTrophyId: e.userTrophyId
                })
            }),
            [X.ARENA_TROPHY]: (e,t)=>({
                content: le.Z.trans("You earned <strong>%trophyName%</strong> trophy", {
                    "%trophyName%": e.trophyName
                }),
                route: A.Z.generate("web_awards_view_trophy", {
                    username: t,
                    type: "arena",
                    userTrophyId: e.userTrophyId
                })
            }),
            [X.VOTE_CHESS_GAME]: e=>({
                content: le.Z.trans("Update in %game%", {
                    "%game%": `<strong>${e.gameName}</strong>`
                }),
                route: A.Z.generate("web_votechess_game", {
                    id: e.contentId
                })
            }),
            [X.TEAM_LIVE_COMPETITION]: e=>{
                const t = ue.p6.relative(1e3 * e.startAt, !1, !1, !0)
                  , s = {
                    "Chess\\WebBundle\\Entity\\LiveTournament": "t",
                    "Chess\\WebBundle\\Entity\\LiveArena": "r",
                    "Chess\\WebBundle\\Entity\\TeamMatchLive": "tm"
                }[e.competitionType]
                  , a = e.contentId;
                return {
                    content: le.Z.trans("%event% starts in %time%", {
                        "%event%": `<strong>${e.title}</strong>`,
                        "%time%": `<strong>${t}</strong>`
                    }),
                    route: "r" === s ? A.Z.generate("web_play_live_arena", {
                        id: a
                    }) : A.Z.generate("web_play_live_tournament", {
                        id: a
                    })
                }
            }
            ,
            [X.FRIEND_ACTIVITY]: e=>{
                const [t] = e.achievementName.match(/.+?(?=%)/);
                return {
                    content: le.Z.trans("Congratulate %username% on achieving a rating of %rating% in %category%!", {
                        "%username%": `<strong>${e.username}</strong>`,
                        "%rating%": e.threshold,
                        "%category%": t.trim()
                    }),
                    route: A.Z.generate("web_member_view", {
                        username: e.username,
                        alert: "friend_progress_achievement"
                    })
                }
            }
            ,
            [X.INSIGHTS]: e=>({
                content: `<strong>${e.title}</strong>`,
                route: e.viewUrl
            }),
            [X.OFFLINE_CHALLENGE]: e=>({
                route: `${A.Z.generate("web_play")}?action=acceptLiveChallenge&challengeId=${e.id}`,
                content: le.Z.trans("%user% wants to play", {
                    "%user%": `<strong>${e.from}</strong>`
                })
            })
        };
        var de = Object.defineProperty
          , me = Object.defineProperties
          , be = Object.getOwnPropertyDescriptors
          , we = Object.getOwnPropertySymbols
          , ke = Object.prototype.hasOwnProperty
          , fe = Object.prototype.propertyIsEnumerable
          , format_xhr_toaster_defNormalProp = (e,t,s)=>t in e ? de(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s
          , format_xhr_toaster_spreadValues = (e,t)=>{
            for (var s in t || (t = {}))
                ke.call(t, s) && format_xhr_toaster_defNormalProp(e, s, t[s]);
            if (we)
                for (var s of we(t))
                    fe.call(t, s) && format_xhr_toaster_defNormalProp(e, s, t[s]);
            return e
        }
        ;
        function formatXHRToaster(e, t) {
            var s, a, r;
            const {alertSubType: n} = e
              , o = null != (r = null == (a = null == (s = window.context) ? void 0 : s.user) ? void 0 : a.username) ? r : ""
              , c = t === X.GROUP_ACTIVITY ? n : t
              , i = he[c](e, o);
            return u = format_xhr_toaster_spreadValues(format_xhr_toaster_spreadValues({}, e), i),
            l = {
                id: e.id || e.alertId
            },
            me(u, be(l));
            var u, l
        }
        var pe = Object.defineProperty
          , ge = Object.getOwnPropertySymbols
          , _e = Object.prototype.hasOwnProperty
          , ve = Object.prototype.propertyIsEnumerable
          , fetch_alerts_defNormalProp = (e,t,s)=>t in e ? pe(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        async function fetchAlerts() {
            var e;
            if ((0,
            z.n)() || !(0,
            O.j)())
                return;
            const {data: t} = await R.Z.get(A.Z.generate("web_alert_callback_alerts"))
              , {alerts: s} = t;
            window.postMessage("NOTIFICATIONS_FETCHED", window.location.origin);
            const a = Object.keys(s)
              , r = [X.FRIEND_REQUEST, X.GROUP_REQUEST];
            (null == (e = window.chesscom.features) ? void 0 : e.includes("toaster_center_beta_offline_challenges")) && r.push(X.OFFLINE_CHALLENGE, X.CHALLENGE, X.TEAM_MATCH),
            a.length || (!function clearAllSeenAlertIds() {
                G.i.seenAlertIds = []
            }(),
            persistSeenAlertIds()),
            r.forEach((e=>{
                const t = s[e];
                null == t || t.data.forEach((t=>{
                    addNotification(formatXHRToaster(((e,t)=>{
                        for (var s in t || (t = {}))
                            _e.call(t, s) && fetch_alerts_defNormalProp(e, s, t[s]);
                        if (ge)
                            for (var s of ge(t))
                                ve.call(t, s) && fetch_alerts_defNormalProp(e, s, t[s]);
                        return e
                    }
                    )({}, t), e))
                }
                ))
            }
            ))
        }
        var ye = s(36157)
          , ze = s(7943);
        const Oe = (0,
        a.eI)({
            async init() {
                window.toaster = {
                    add: addNotification,
                    remove: J.N
                },
                q.Y.on(B.L.ShowIncomingChallenge, this.onAddIncomingChallenge),
                q.Y.on(B.L.ShowOutgoingChallenge, this.onAddOutgoingChallenge),
                q.Y.on(B.L.HideIncomingChallenge, this.onRemoveIncomingChallenge),
                q.Y.on(B.L.HideOutgoingChallenge, this.onRemoveOutgoingChallenge),
                window.addEventListener("beforeunload", persistSeenAlertIds),
                fetchAlerts()
            },
            onAddIncomingChallenge({challenge: e}) {
                !function addIncomingChallenge(e) {
                    initializeToasterCenter(),
                    G.i.challenges.incoming.find((t=>t.id === e.id)) || (G.i.challenges.incoming.push(e),
                    (0,
                    H.I)(Y.m.Requests),
                    getToasterCenterSetting(Q.V.AutoExpandAll) && ((0,
                    W.tq)() || ((0,
                    F.m)(),
                    startAutoCollapseTimeout())))
                }(e)
            },
            onAddOutgoingChallenge({challenge: e}) {
                !function addOutgoingChallenge(e) {
                    initializeToasterCenter(),
                    G.i.challenges.outgoing.find((t=>t.id === e.id)) || (G.i.challenges.outgoing.push(e),
                    (0,
                    H.I)(Y.m.Requests),
                    (0,
                    W.tq)() || (0,
                    re.r)().length > 1 && ((0,
                    F.m)(),
                    startAutoCollapseTimeout()))
                }(e)
            },
            onRemoveIncomingChallenge({challengeId: e}) {
                (0,
                ye.o)(e)
            },
            onRemoveOutgoingChallenge({challengeId: e}) {
                !function removeOutgoingChallenge(e) {
                    (0,
                    ze.A)(G.i.challenges.outgoing, (t=>t.id === e))
                }(e)
            }
        });
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const Te = (0,
        a.eI)({
            init() {
                (function shouldLoadTooltips() {
                    return Boolean(document.querySelector(`[${m.s.TOOLTIP}]`))
                }
                )() && Promise.all([s.e(4338), s.e(3660)]).then(s.bind(s, 94922)).then((e=>e.default()))
            }
        });
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const Ee = (0,
        a.eI)({
            init() {
                (function shouldLoadUserPopover() {
                    return Boolean(document.querySelectorAll(`[${m.s.USER_POPOVER}]`))
                }
                )() && Promise.all([s.e(4579), s.e(2649), s.e(4338), s.e(5750), s.e(2179)]).then(s.bind(s, 71240)).then((e=>e.default()))
            }
        });
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const Se = (0,
        a.eI)({
            init() {
                const e = function getDeferredVideos() {
                    return [...document.getElementsByClassName("video-defer")]
                }();
                e.length && s.e(4417).then(s.bind(s, 41248)).then((t=>t.setupDeferredVideos(e)))
            }
        });
        function initGlobal() {
            const e = [b, y, T, E, j, I, C, L, M, U, D, Z, Te, Ee, Se]
              , t = []
              , s = [];
            isInvitationsEnabled() && t.push(n({}), d({})),
            window.chesscom.features.includes("toaster_center_beta") && (e.push(Oe),
            s.push(G.i)),
            (0,
            a.QB)({
                clients: e,
                extensions: t,
                state: s
            })
        }
    },
    78441: function(e, t, s) {
        "use strict";
        s.d(t, {
            M: function() {
                return clearAutoCollapseTimeout
            }
        });
        var a = s(43695);
        function clearAutoCollapseTimeout() {
            a.i.autoCollapseTimeout && (clearTimeout(a.i.autoCollapseTimeout),
            a.i.autoCollapseTimeout = null)
        }
    },
    12562: function(e, t, s) {
        "use strict";
        s.d(t, {
            N: function() {
                return dismissNotification
            }
        });
        var a = s(7943)
          , r = s(41103)
          , n = s(43695);
        function dismissNotification(e) {
            const t = n.i.notifications.find((t=>t.id === e));
            t && (t.closed && t.closed(),
            t.timeoutToRemove && clearTimeout(t.timeoutToRemove),
            (0,
            a.A)(n.i.notifications, t),
            t.alertId && (0,
            r.K)(t.alertId))
        }
    },
    34272: function(e, t, s) {
        "use strict";
        s.d(t, {
            m: function() {
                return expandToasterCenter
            }
        });
        var a = s(43695);
        function expandToasterCenter() {
            a.i.isExpanded = !0
        }
    },
    9524: function(e, t, s) {
        "use strict";
        s.d(t, {
            g: function() {
                return hideToasterCenter
            }
        });
        var a = s(43695);
        function hideToasterCenter() {
            a.i.isExpanded = !1
        }
    },
    41103: function(e, t, s) {
        "use strict";
        s.d(t, {
            K: function() {
                return ignoreAlert
            }
        });
        var a = s(87074)
          , r = s(90425)
          , n = s(7943)
          , o = s(43695);
        function ignoreAlert(e) {
            return function clearSeenAlertId(e) {
                (0,
                n.A)(o.i.seenAlertIds, e)
            }(e),
            a.Z.post(r.Z.generate("web_alert_callback_ignore", {
                id: e
            }))
        }
    },
    36157: function(e, t, s) {
        "use strict";
        s.d(t, {
            o: function() {
                return removeIncomingChallenge
            }
        });
        var a = s(7943)
          , r = s(43695);
        function removeIncomingChallenge(e) {
            (0,
            a.A)(r.i.challenges.incoming, (t=>t.id === e))
        }
    },
    22211: function(e, t, s) {
        "use strict";
        s.d(t, {
            I: function() {
                return setTab
            }
        });
        var a = s(43695);
        function setTab(e) {
            a.i.selectedTab = e
        }
    },
    24367: function(e, t, s) {
        "use strict";
        s.d(t, {
            m: function() {
                return a
            }
        });
        var a = (e=>(e.Settings = "settings",
        e.Requests = "requests",
        e.Notifications = "notifications",
        e))(a || {})
    },
    42330: function(e, t, s) {
        "use strict";
        s.d(t, {
            d: function() {
                return a
            }
        });
        const a = "globalToasterCenterSettings"
    },
    75491: function(e, t, s) {
        "use strict";
        s.d(t, {
            T: function() {
                return a
            }
        });
        const a = "globalToasterCenterSeenAlerts"
    },
    2201: function(e, t, s) {
        "use strict";
        s.d(t, {
            r: function() {
                return getOutgoingChallenges
            }
        });
        var a = s(43695);
        function getOutgoingChallenges() {
            return a.i.challenges.outgoing
        }
    },
    4074: function(e, t, s) {
        "use strict";
        s.d(t, {
            u: function() {
                return isExpanded
            }
        });
        var a = s(43695);
        function isExpanded() {
            return a.i.isExpanded
        }
    },
    43695: function(e, t, s) {
        "use strict";
        s.d(t, {
            i: function() {
                return w
            }
        });
        var a = s(24367)
          , r = s(75491);
        var n = s(42330)
          , o = s(32305)
          , c = s(71942);
        const i = [{
            id: c.V.AutoExpandAll,
            title: o.$H.trans("Automatically expand popup notifications?"),
            value: !0
        }, {
            id: c.V.AutoExpandFriendRequests,
            title: o.$H.trans("Automatically expand friend requests?"),
            value: !0
        }, {
            id: c.V.AutoExpandGroupRequests,
            title: o.$H.trans("Automatically expand club requests?"),
            value: !0
        }];
        var u = Object.defineProperty
          , l = Object.defineProperties
          , h = Object.getOwnPropertyDescriptors
          , d = Object.getOwnPropertySymbols
          , m = Object.prototype.hasOwnProperty
          , b = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? u(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s;
        const w = {
            autoCollapseTimeout: null,
            controllerInitialized: !1,
            isExpanded: !1,
            selectedFilter: s(46832).l.Incoming,
            selectedTab: a.m.Notifications,
            challenges: {
                incoming: [],
                outgoing: []
            },
            notifications: [],
            seenAlertIds: function getPersistedSeenAlertIds() {
                const e = window.localStorage.getItem(r.T);
                return e ? JSON.parse(e) : []
            }(),
            settings: function getPersistedSettings() {
                const e = window.localStorage.getItem(n.d);
                if (!e)
                    return i;
                const t = JSON.parse(e);
                return i.forEach(((e,s)=>{
                    const a = t.find((t=>(null == t ? void 0 : t.id) === e.id));
                    var r, n;
                    a && (i[s] = (r = ((e,t)=>{
                        for (var s in t || (t = {}))
                            m.call(t, s) && __defNormalProp(e, s, t[s]);
                        if (d)
                            for (var s of d(t))
                                b.call(t, s) && __defNormalProp(e, s, t[s]);
                        return e
                    }
                    )({}, e),
                    n = {
                        value: a.value
                    },
                    l(r, h(n))))
                }
                )),
                i
            }()
        }
    },
    46832: function(e, t, s) {
        "use strict";
        s.d(t, {
            l: function() {
                return a
            }
        });
        var a = (e=>(e.Outgoing = "outgoing",
        e.Incoming = "incoming",
        e))(a || {})
    },
    71942: function(e, t, s) {
        "use strict";
        s.d(t, {
            V: function() {
                return a
            }
        });
        var a = (e=>(e.AutoExpandAll = "auto-expand-all",
        e.AutoExpandFriendRequests = "auto-expand-friend-requests",
        e.AutoExpandGroupRequests = "auto-expand-group-requests",
        e))(a || {})
    },
    52439: function(e, t, s) {
        e.exports = s(84474)(110)
    },
    89402: function(e, t, s) {
        e.exports = s(84474)(475)
    },
    23992: function(e, t, s) {
        e.exports = s(84474)(866)
    }
}]);
