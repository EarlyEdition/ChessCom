window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
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
    web_user_callback_id_to_user_data: {
        tokens: [["text", "/callback/user/id-to-data"]],
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
    var e, t, s, r, a, n, i, o, c, u, l = {
        44903: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return addCsrfToken
                }
            });
            var r = s(71692);
            const a = ["delete", "patch", "post", "put"];
            function addCsrfToken(e) {
                return e && !(0,
                r.q)(e.url) && a.includes(e.method) ? (e.data instanceof FormData || e.data instanceof URLSearchParams ? e.data.append("_token", window.context.csrf.token) : e.data = Object.assign({
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
            var r = s(20169);
            const random = ()=>Math.random().toString(36).substring(2, 15);
            function addRequestId(e) {
                return (()=>{
                    const e = document.getElementById(r.GO.NAV_ROOT);
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
            var r = s(71692);
            const boolToInt = e=>(Object.keys(e).forEach((t=>{
                const s = e[t];
                "boolean" == typeof s && (e[t] = Number(s)),
                "object" == typeof s && null !== s && (e[t] = boolToInt(s))
            }
            )),
            e);
            function castBoolsToInts(e) {
                return !e || (0,
                r.q)(e.url) || "object" == typeof e.data && (e.data = boolToInt(e.data)),
                e
            }
        },
        61992: function(e, t, s) {
            "use strict";
            var r = s(44903)
              , a = s(90175)
              , n = s(16770);
            t.Z = [r.Z, a.Z, n.Z]
        },
        84606: function(e, t) {
            var s, r, a, n;
            n = function() {
                "use strict";
                var e = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s)
                            Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }
                  , t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                  , s = function() {
                    function defineProperties(e, t) {
                        for (var s = 0; s < t.length; s++) {
                            var r = t[s];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value"in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(e, t, s) {
                        return t && defineProperties(e.prototype, t),
                        s && defineProperties(e, s),
                        e
                    }
                }();
                function _classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                var r = function() {
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
                    return s(Router2, [{
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
                        value: function buildQueryParams(e, s, r) {
                            var a = this
                              , n = void 0
                              , i = new RegExp(/\[\]$/);
                            if (s instanceof Array)
                                s.forEach((function(s, n) {
                                    i.test(e) ? r(e, s) : a.buildQueryParams(e + "[" + ("object" === (void 0 === s ? "undefined" : t(s)) ? n : "") + "]", s, r)
                                }
                                ));
                            else if ("object" === (void 0 === s ? "undefined" : t(s)))
                                for (n in s)
                                    this.buildQueryParams(e + "[" + n + "]", s[n], r);
                            else
                                r(e, s)
                        }
                    }, {
                        key: "getRoute",
                        value: function getRoute(e) {
                            var t = [this.context_.prefix + e, e + "." + this.context_.locale, this.context_.prefix + e + "." + this.context_.locale, e];
                            for (var s in t)
                                if (t[s]in this.routes_)
                                    return this.routes_[t[s]];
                            throw new Error('The route "' + e + '" does not exist.')
                        }
                    }, {
                        key: "generate",
                        value: function generate(t, s) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                              , a = this.getRoute(t)
                              , n = s || {}
                              , i = e({}, n)
                              , o = ""
                              , c = !0
                              , u = ""
                              , l = void 0 === this.getPort() || null === this.getPort() ? "" : this.getPort();
                            if (a.tokens.forEach((function(e) {
                                if ("text" === e[0])
                                    return o = Router2.encodePathComponent(e[1]) + o,
                                    void (c = !1);
                                if ("variable" !== e[0])
                                    throw new Error('The token type "' + e[0] + '" is not supported.');
                                var s = a.defaults && e[3]in a.defaults;
                                if (!1 === c || !s || e[3]in n && n[e[3]] != a.defaults[e[3]]) {
                                    var r = void 0;
                                    if (e[3]in n)
                                        r = n[e[3]],
                                        delete i[e[3]];
                                    else {
                                        if (!s) {
                                            if (c)
                                                return;
                                            throw new Error('The route "' + t + '" requires the parameter "' + e[3] + '".')
                                        }
                                        r = a.defaults[e[3]]
                                    }
                                    if (!0 !== r && !1 !== r && "" !== r || !c) {
                                        var u = Router2.encodePathComponent(r);
                                        "null" === u && null === r && (u = ""),
                                        o = e[1] + u + o
                                    }
                                    c = !1
                                } else
                                    s && e[3]in i && delete i[e[3]]
                            }
                            )),
                            "" === o && (o = "/"),
                            a.hosttokens.forEach((function(e) {
                                var t = void 0;
                                "text" !== e[0] ? "variable" === e[0] && (e[3]in n ? (t = n[e[3]],
                                delete i[e[3]]) : a.defaults && e[3]in a.defaults && (t = a.defaults[e[3]]),
                                u = e[1] + t + u) : u = e[1] + u
                            }
                            )),
                            o = this.context_.base_url + o,
                            a.requirements && "_scheme"in a.requirements && this.getScheme() != a.requirements._scheme) {
                                var h = u || this.getHost();
                                o = a.requirements._scheme + "://" + h + (h.indexOf(":" + l) > -1 || "" === l ? "" : ":" + l) + o
                            } else if (void 0 !== a.schemes && void 0 !== a.schemes[0] && this.getScheme() !== a.schemes[0]) {
                                var d = u || this.getHost();
                                o = a.schemes[0] + "://" + d + (d.indexOf(":" + l) > -1 || "" === l ? "" : ":" + l) + o
                            } else
                                u && this.getHost() !== u + (u.indexOf(":" + l) > -1 || "" === l ? "" : ":" + l) ? o = this.getScheme() + "://" + u + (u.indexOf(":" + l) > -1 || "" === l ? "" : ":" + l) + o : !0 === r && (o = this.getScheme() + "://" + this.getHost() + (this.getHost().indexOf(":" + l) > -1 || "" === l ? "" : ":" + l) + o);
                            if (Object.keys(i).length > 0) {
                                var f = void 0
                                  , _ = []
                                  , p = function add2(e, t) {
                                    t = null === (t = "function" == typeof t ? t() : t) ? "" : t,
                                    _.push(Router2.encodeQueryComponent(e) + "=" + Router2.encodeQueryComponent(t))
                                };
                                for (f in i)
                                    this.buildQueryParams(f, i[f], p);
                                o = o + "?" + _.join("&")
                            }
                            return o
                        }
                    }], [{
                        key: "getInstance",
                        value: function getInstance() {
                            return a
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
                r.Route,
                r.Context;
                var a = new r;
                return {
                    Router: r,
                    Routing: a
                }
            }(),
            r = [],
            s = n.Routing,
            void 0 === (a = "function" == typeof s ? s.apply(t, r) : s) || (e.exports = a)
        },
        20169: function(e, t, s) {
            "use strict";
            s.d(t, {
                GO: function() {
                    return r
                }
            });
            const r = {
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
        27427: function(e, t, s) {
            "use strict";
            s.d(t, {
                z: function() {
                    return r
                }
            });
            const r = {
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
        74241: function(e, t, s) {
            "use strict";
            s.d(t, {
                Q: function() {
                    return CacheService
                }
            });
            var r = s(93497);
            class CacheService {
                constructor(e, t={}) {
                    this.cache = new r.n,
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
        43608: function(e, t, s) {
            "use strict";
            var r = s(53434);
            t.Z = r.Z
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
                    const [s,r] = e.split("=");
                    s && r && (t[s] = r)
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
                    return a
                }
            });
            s(79816),
            s(35750);
            const r = "dark-mode"
              , getIsDarkMode = ()=>document.body.classList.contains(r)
              , a = getIsDarkMode()
        },
        63302: function(e, t, s) {
            "use strict";
            var r = s(9669)
              , a = s.n(r);
            t.Z = a()
        },
        87074: function(e, t, s) {
            "use strict";
            var r = s(63302);
            (0,
            s(70580).w)(r.Z),
            t.Z = r.Z
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
            var r = s(61992)
              , a = s(93831)
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
                r.Z.forEach((t=>{
                    findExistingInterceptor(e.interceptors.request, t) || e.interceptors.request.use(t)
                }
                )),
                findExistingInterceptor(e.interceptors.response, n.Z) || e.interceptors.response.use(n.Z, a.Z)
            }
        },
        93831: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return responseErrorInterceptor
                }
            });
            var r = s(63302);
            function responseErrorInterceptor(e) {
                const t = e.config
                  , s = e.response;
                if ("Cancel" === e.toString())
                    return Promise.reject(e);
                try {
                    t.data = JSON.parse(t.data)
                } catch (a) {
                    return Promise.reject(e)
                }
                if (s && 403 === s.status && s.headers["x-chesscom-csrf-token"] && t && !t.data.retry) {
                    const e = s.headers["x-chesscom-csrf-token"];
                    return t.data._token = e,
                    t.data.retry = !0,
                    window.context.csrf.token = e,
                    (0,
                    r.Z)(t)
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
            var r = s(57969);
            function responseInterceptor(e) {
                return e.headers && e.headers["x-chesscom-request-id-cdn"] && ((0,
                r.cM)({
                    key: "x-chesscom-request-id-cdn",
                    value: e.headers["x-chesscom-request-id-cdn"]
                }),
                (0,
                r.cM)({
                    key: "x-chesscom-request-id-lb",
                    value: e.headers["x-chesscom-request-id-lb"]
                })),
                e
            }
        },
        82220: function(e, t, s) {
            "use strict";
            var r = s(90425);
            t.Z = ()=>-1 !== window.location.href.indexOf(r.Z.generate("web_2fa_login"))
        },
        57969: function(e, t, s) {
            "use strict";
            s.d(t, {
                cM: function() {
                    return log
                }
            });
            var r = s(30869)
              , a = s(72863);
            const checkWindowObject = ()=>{
                (0,
                a.z)({
                    key: "logData",
                    value: {}
                })
            }
              , log = ({key: e, value: t})=>{
                checkWindowObject(),
                window.chesscom.logData[e] = t,
                (0,
                r.$)({
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
            var r = s(21264);
            function copyRoute(e) {
                var t, s, a;
                const n = (0,
                r.w)();
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
                    } catch (i) {}
                    if (Object.isFrozen(n.routes_) && (n.routes_ = Object.assign({}, n.routes_)),
                    null == (s = null == (t = window.chesscom) ? void 0 : t.routes) ? void 0 : s[e]) {
                        const t = window.chesscom.routes[e]
                          , s = ".chess-dev.com"
                          , r = window.location.host.replace(/^[^.]+/, "");
                        r && (null == (a = t.hosttokens) || a.forEach((e=>{
                            e.forEach(((t,a)=>{
                                t.includes(s) && (e[a] = t.replace(s, r))
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
            var r = s(84606)
              , a = s.n(r);
            function getRouting() {
                return a()
            }
        },
        90425: function(e, t, s) {
            "use strict";
            var r = s(12365)
              , a = s(21264);
            s(18508);
            t.Z = new class Router {
                generate(e, t, s) {
                    const n = t || {};
                    "string" == typeof n.username && (n.username = n.username.toLowerCase()),
                    (0,
                    r.b)(e);
                    try {
                        return (0,
                        a.w)().generate(e, n, s)
                    } catch (i) {
                        const t = new Error(`Couldn't find missing route '${e}'.`);
                        return console.error(t),
                        "/"
                    }
                }
                i18nable(e) {
                    return `i18n_${e}`in window.chesscom.routes
                }
                i18n(e, t, s) {
                    var r, a;
                    let n = e;
                    const i = t || {};
                    if ((null == (a = null == (r = window.context) ? void 0 : r.route) ? void 0 : a.startsWith("i18n")) && this.i18nable(e)) {
                        i["_locale"] = window.context.locale.slice(0, 2),
                        n = `i18n_${e}`
                    }
                    const o = this.generate(n, i, s);
                    return s ? o : o.replace(/^.*\/\/[^/]+/, "")
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
            var r = s(46883)
              , a = s(84770)
              , n = s(63207);
            async function captureException(e, t) {
                if (!(await (0,
                n.U)()))
                    return;
                (0,
                r.V)();
                const s = await (0,
                a.m)()
                  , i = e instanceof Error ? e : new Error(e);
                t ? s.withScope((e=>{
                    Object.keys(t).forEach((s=>e.setExtra(s, t[s]))),
                    s.captureException(i)
                }
                )) : s.captureException(i)
            }
        },
        46883: function(e, t, s) {
            "use strict";
            s.d(t, {
                V: function() {
                    return enableSentry
                }
            });
            var r = s(84770)
              , a = s(63207);
            async function enableSentry(e=0) {
                var t;
                if (!(await (0,
                a.U)()))
                    return;
                window.chesscom.sudoEnableSentry = !0;
                const s = await (0,
                r.m)();
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
                return s.e(48).then(s.bind(s, 26048))
            }
        },
        63207: function(e, t, s) {
            "use strict";
            s.d(t, {
                U: function() {
                    return isSentryAvailable
                }
            });
            var r = s(84770);
            async function isSentryAvailable() {
                try {
                    const e = await (0,
                    r.m)();
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
            var r = s(84770)
              , a = s(63207);
            async function setSentryContext(e) {
                if (!(await (0,
                a.U)()))
                    return;
                (await (0,
                r.m)()).configureScope((t=>{
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
                ox: function() {
                    return getCountries
                },
                $H: function() {
                    return c
                }
            });
            var r, a, n = s(89402), i = s.n(n);
            const o = "fr_FR" === (null == (a = null == (r = window.context) ? void 0 : r.i18n) ? void 0 : a.locale);
            i().placeHolderPrefix = "",
            i().placeHolderSuffix = "";
            const escapeParameters = e=>{
                const t = {};
                return null != e && Object.keys(e).forEach((s=>{
                    const r = s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                    null != r && r.length > 0 && (t[r] = e[s])
                }
                )),
                t
            }
              , getTranslatedPhrase = (e,t="messages",s)=>window.chesscom_translations && window.chesscom_translations[t] && window.chesscom_translations[t][e] ? window.chesscom_translations[t][e] : window.chesscom_live_translations && window.chesscom_live_translations[t] && window.chesscom_live_translations[t][e] ? window.chesscom_live_translations[t][e] : "live" === t && window.i18n_phrases && window.i18n_phrases[e] ? window.i18n_phrases : "countries" === t && window.Country && window.Country[e] ? window.Country : s ? void 0 : "javascript" !== t ? getTranslatedPhrase(e, "javascript") : e
              , trans = (e,t,s)=>i().trans(getTranslatedPhrase(e, s), escapeParameters(t), s)
              , transChoice = (e,t,s,r)=>{
                if (void 0 === t)
                    return "";
                const a = getTranslatedPhrase(e, r)
                  , n = escapeParameters(s);
                return o ? function frenchTransChoice(e, t, s, r) {
                    const [a,n,o] = e.split("|").map((e=>e.trim()));
                    if (0 === t || 1 === t)
                        return i().trans(a, s, r);
                    if (t % 1e6 == 0)
                        return i().trans(n, s, r);
                    return i().trans(o, s, r)
                }(a, t, n, r) : i().transChoice(a, t, n)
            }
            ;
            const getCountries = ()=>window.chesscom_translations && window.chesscom_translations.countries ? window.chesscom_translations.countries : window.chesscom_live_translations && window.chesscom_live_translations.countries ? window.chesscom_live_translations.countries : window.Country ? window.Country : void 0
              , c = {
                trans: trans,
                transChoice: transChoice
            }
        },
        18160: function(e, t, s) {
            "use strict";
            var r = s(32305);
            t.Z = r.$H
        },
        74672: function(e, t, s) {
            "use strict";
            function postMessage(e) {
                window.postMessage(e, window.location.origin)
            }
            s.d(t, {
                o: function() {
                    return postMessage
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
        79208: function(e, t, s) {
            "use strict";
            s.d(t, {
                E: function() {
                    return ChatApiTransport
                }
            });
            var r = s(87074)
              , a = s(9508)
              , n = s(93969)
              , i = s(94224)
              , o = Object.defineProperty
              , c = Object.getOwnPropertySymbols
              , u = Object.prototype.hasOwnProperty
              , l = Object.prototype.propertyIsEnumerable
              , __defNormalProp = (e,t,s)=>t in e ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s
            }) : e[t] = s
              , __spreadValues = (e,t)=>{
                for (var s in t || (t = {}))
                    u.call(t, s) && __defNormalProp(e, s, t[s]);
                if (c)
                    for (var s of c(t))
                        l.call(t, s) && __defNormalProp(e, s, t[s]);
                return e
            }
            ;
            class ChatApiTransport {
                constructor() {
                    this.httpConfig = {
                        headers: {
                            accept: "application/json"
                        },
                        withCredentials: !0
                    }
                }
                async deleteRequest({url: e}) {
                    const t = __spreadValues({
                        data: {}
                    }, this.httpConfig)
                      , {data: s} = await r.Z.delete(e, t);
                    return s
                }
                getPostUsersDataToSandboxUrl() {
                    return `${n.h.users}details`
                }
                getSandboxApiKey() {
                    var e;
                    return null != (e = PubSub.options.sandboxApiKey) ? e : ""
                }
                async getRequest({url: e, payload: t={}, needHeaders: s=!0}) {
                    const a = Object.assign({
                        data: {},
                        params: t
                    }, s ? this.httpConfig : {})
                      , {data: n} = await r.Z.get(e, a);
                    return n
                }
                async postRequest({url: e, payload: t={}, headers: s={}}) {
                    const a = Object.assign(this.httpConfig, {
                        headers: s
                    })
                      , {data: n} = await r.Z.post(e, t, a);
                    return n
                }
                async putRequest({url: e, payload: t}) {
                    const s = __spreadValues({
                        data: {}
                    }, this.httpConfig)
                      , {data: a} = await r.Z.put(e, t, s);
                    return a
                }
                wrapUrl(e) {
                    let t = `${n.h.chat}${e}`;
                    if (i.W) {
                        t += `${e.includes("?") ? "&" : "?"}uid=${a.W}`
                    }
                    return t
                }
            }
        },
        59924: function(e, t, s) {
            "use strict";
            s.d(t, {
                L: function() {
                    return CacheManager
                }
            });
            var r = s(74241)
              , a = s(22919)
              , n = s(9508)
              , i = s(92631);
            let o = null;
            class CacheManager {
                constructor(e) {
                    if (this.chatsSavingTimeout = 1e3,
                    this.keys = {
                        core: `chat-cache-${n.W}`,
                        openChats: "chat-open-chats",
                        openChatsHtml: "chat-open-chats-html",
                        newMessages: "chat-new-messages"
                    },
                    this.storage = new r.Q(this.keys.core),
                    this.activityTracker = {},
                    this.isAlreadyListening = !1,
                    this.saveHtmlTimer = null,
                    this.shouldBeUpdated = !1,
                    e && (this.updateParentStateTrigger = e,
                    this.addEventListeners()),
                    o)
                        return o;
                    this.addEventListeners(),
                    setTimeout((()=>this.flushObsoleteCache()), 1e4),
                    o = this
                }
                getChatCachedState(e) {
                    var t;
                    return this.activityTracker[e] = !0,
                    null == (t = this.getOpenChats()) ? void 0 : t[e]
                }
                getNewMessages() {
                    return Number(this.storage.get(this.keys.newMessages, 0))
                }
                getOpenClubChats() {
                    return Object.values(this.getOpenChats()).filter((e=>e.type === i.z.CLUB))
                }
                getOpenChatsHtml() {
                    return this.storage.get(this.keys.openChatsHtml, "")
                }
                removeChat(e) {
                    var t;
                    const s = null != (t = this.getOpenChats()) ? t : {};
                    s[e] && (delete s[e],
                    this.setOpenChats(s))
                }
                saveChat(e) {
                    var t;
                    this.activityTracker[e.id] = !0;
                    const s = null != (t = this.getOpenChats()) ? t : {};
                    e.openedAt ? s[e.id] = e : delete s[e.id],
                    this.setOpenChats(s),
                    this.planOpenChatsHtmlSave()
                }
                setNewMessages(e) {
                    return this.storage.set(this.keys.newMessages, e)
                }
                addEventListeners() {
                    this.isAlreadyListening || (window.addEventListener("storage", (e=>{
                        e.key === this.keys.openChats && ("visible" === document.visibilityState ? this.runUpdate() : this.shouldBeUpdated || (document.addEventListener("visibilitychange", this.runUpdate.bind(this), {
                            once: !0
                        }),
                        this.shouldBeUpdated = !0))
                    }
                    )),
                    this.isAlreadyListening = !0)
                }
                flushObsoleteCache() {
                    const e = this.getOpenChats()
                      , t = {};
                    Object.keys(this.activityTracker).forEach((s=>{
                        t[s] = e[s] || {}
                    }
                    )),
                    this.setOpenChats(t),
                    this.planOpenChatsHtmlSave()
                }
                getOpenChats() {
                    return this.storage.get(this.keys.openChats, {})
                }
                planOpenChatsHtmlSave() {
                    this.saveHtmlTimer && clearTimeout(this.saveHtmlTimer),
                    this.saveHtmlTimer = window.setTimeout((()=>this.saveOpenChatsHtml()), this.chatsSavingTimeout)
                }
                runUpdate() {
                    var e;
                    null == (e = this.updateParentStateTrigger) || e.call(this),
                    this.shouldBeUpdated = !1
                }
                saveOpenChatsHtml() {
                    var e;
                    if (!this.saveHtmlTimer)
                        return;
                    const t = null == (e = document.querySelector(a.w.MOUNTED_CHATS_CONTAINER)) ? void 0 : e.innerHTML;
                    this.storage.set(this.keys.openChatsHtml, t),
                    this.saveHtmlTimer = null
                }
                setOpenChats(e) {
                    return this.storage.set(this.keys.openChats, e)
                }
            }
        },
        47394: function(e, t, s) {
            "use strict";
            s.d(t, {
                x: function() {
                    return PubSubManager
                }
            });
            var r = s(27427)
              , a = s(81744);
            let n = null;
            class PubSubManager {
                constructor(e) {
                    var t;
                    if (this.isConnected = !1,
                    this.subscriptions = {},
                    n)
                        return n;
                    this.updateConnectionStatus(),
                    n = this,
                    null == (t = PubSub.on) || t.call(PubSub, r.z.FAILURE, (()=>null == e ? void 0 : e()))
                }
                getPersonalChannel(e) {
                    return `chat/users/${e}`
                }
                getUserStatusChannel(e) {
                    return `presence/users/${e}`
                }
                subscribe(e, t) {
                    if (!this.isConnected)
                        return void setTimeout((()=>{
                            this.subscribe(e, t)
                        }
                        ), a._.INTERVAL_GET_PUBSUB_STATE_INITIAL);
                    const s = this.subscriptions[e];
                    if (s)
                        return void (s.handlers = this.mergeHandlers(s.handlers, t));
                    const r = PubSub.subscribe(e, {
                        onMessage: t=>{
                            this.handleMessage(e, t)
                        }
                    });
                    this.subscriptions[e] = {
                        handlers: t,
                        subscription: r
                    }
                }
                unsubscribe(e) {
                    this.subscriptions[e] && (this.subscriptions[e].subscription.close(),
                    delete this.subscriptions[e])
                }
                handleMessage(e, t) {
                    this.subscriptions[e].handlers.filter((e=>{
                        var s, r, a;
                        if ((!e.types || e.types.includes(null == (s = t.metadata) ? void 0 : s.message_type)) && (!e.actions || (null == (a = e.actions) ? void 0 : a.includes(null == (r = t.data) ? void 0 : r.action))))
                            return !e.filter || e.filter(t)
                    }
                    )).forEach((e=>e.callback(t)))
                }
                updateConnectionStatus() {
                    var e;
                    const t = Boolean(null == (e = PubSub.isAttached) ? void 0 : e.call(PubSub));
                    let s = a._.INTERVAL_GET_PUBSUB_STATE_INITIAL;
                    t && (s = a._.INTERVAL_GET_PUBSUB_STATE),
                    this.isConnected = t,
                    setTimeout((()=>this.updateConnectionStatus()), s)
                }
                mergeHandlers(e, t) {
                    return t.forEach((t=>{
                        t.handlerId && e.some((e=>e.handlerId === t.handlerId)) || e.push(t)
                    }
                    )),
                    e
                }
            }
        },
        81744: function(e, t, s) {
            "use strict";
            s.d(t, {
                _: function() {
                    return r
                }
            });
            var r = (e=>(e.BADGE_KEY = "chatMessages",
            e[e.BASIC_USER_TV_MESSAGES_INTERVAL = 1e4] = "BASIC_USER_TV_MESSAGES_INTERVAL",
            e[e.BIG_EMOTES_LIMIT = 4] = "BIG_EMOTES_LIMIT",
            e[e.DEFAULT_CHAT_WINDOW_HEIGHT = 400] = "DEFAULT_CHAT_WINDOW_HEIGHT",
            e[e.DEFAULT_CHAT_WINDOW_WIDTH = 350] = "DEFAULT_CHAT_WINDOW_WIDTH",
            e[e.CHAT_WINDOW_MOVE_TRESHOLD = 30] = "CHAT_WINDOW_MOVE_TRESHOLD",
            e[e.CHAT_WINDOW_WIDTH_ON_MOBILE = .9] = "CHAT_WINDOW_WIDTH_ON_MOBILE",
            e.CHESS_COM_BOT_USER_ID = "83ab9400-ffcd-11db-8054-000000000000",
            e.CHESS_COM_BOT_USER_NAME = "chesscombot",
            e[e.CHESS_TV_CHAT_POPOUT_HEIGHT = 500] = "CHESS_TV_CHAT_POPOUT_HEIGHT",
            e[e.CHESS_TV_CHAT_POPOUT_WIDTH = 300] = "CHESS_TV_CHAT_POPOUT_WIDTH",
            e.CHESS_TV_DEFAULT_LANG = "en",
            e[e.EMOTES_IN_A_ROW = 3] = "EMOTES_IN_A_ROW",
            e[e.HTTP_CODE_TOO_MUCH_REQUESTS = 429] = "HTTP_CODE_TOO_MUCH_REQUESTS",
            e[e.HTTP_CODE_FORBIDDEN = 403] = "HTTP_CODE_FORBIDDEN",
            e[e.INTERVAL_BETWEEN_BASIC_USER_MESSAGES = 1e4] = "INTERVAL_BETWEEN_BASIC_USER_MESSAGES",
            e[e.INTERVAL_GET_PUBSUB_STATE = 3e3] = "INTERVAL_GET_PUBSUB_STATE",
            e[e.INTERVAL_GET_PUBSUB_STATE_INITIAL = 500] = "INTERVAL_GET_PUBSUB_STATE_INITIAL",
            e[e.INTERVAL_AUTO_SCROLL = 15e3] = "INTERVAL_AUTO_SCROLL",
            e.KEY_ALT = "Alt",
            e[e.MAX_MESSAGES_IN_TV_CHAT = 300] = "MAX_MESSAGES_IN_TV_CHAT",
            e[e.MESSAGE_FIELD_MAX_HEIGHT = 100] = "MESSAGE_FIELD_MAX_HEIGHT",
            e[e.MESSAGE_MAX_LENGTH = 500] = "MESSAGE_MAX_LENGTH",
            e[e.MESSAGE_MAX_LENGTH_FOR_BASIC = 100] = "MESSAGE_MAX_LENGTH_FOR_BASIC",
            e[e.MESSAGES_PER_REQUEST = 20] = "MESSAGES_PER_REQUEST",
            e[e.MESSAGES_PER_REQUEST_CHESS_TV = 100] = "MESSAGES_PER_REQUEST_CHESS_TV",
            e[e.MIN_CHAT_WINDOW_HEIGHT = 200] = "MIN_CHAT_WINDOW_HEIGHT",
            e[e.MIN_CHAT_WINDOW_WIDTH = 300] = "MIN_CHAT_WINDOW_WIDTH",
            e.ONLINE_STATUS = "online",
            e.PENDING_MESSAGE_ID = "pending_message",
            e.PUBSUB_ACTION_CREATED = "created",
            e[e.RETRY_REQUEST_TIMEOUT = 200] = "RETRY_REQUEST_TIMEOUT",
            e[e.WINDOW_RESIZE_DEBOUNCE = 250] = "WINDOW_RESIZE_DEBOUNCE",
            e[e.SCROLL_HEIGHT_TRIGGER = 100] = "SCROLL_HEIGHT_TRIGGER",
            e.SYSTEM_USER_ID = "1414b520-62de-11dd-8050-000000000000",
            e[e.TIMEOUT_TILL_MESSAGE_IS_READ = 500] = "TIMEOUT_TILL_MESSAGE_IS_READ",
            e[e.UNREAD_MESSAGE_BADGE_ANIMATION = 1e3] = "UNREAD_MESSAGE_BADGE_ANIMATION",
            e[e.USER_MUTE_MESSAGES_AMOUNT = 60] = "USER_MUTE_MESSAGES_AMOUNT",
            e[e.USER_MUTE_TIMEOUT = 1e4] = "USER_MUTE_TIMEOUT",
            e.USER_CLUB_CHAT_MUTE_TIMEOUT = "PT60M",
            e[e.USERS_PER_REQUEST = 30] = "USERS_PER_REQUEST",
            e[e.USERS_TRACK_STATUS_LIMIT = 25] = "USERS_TRACK_STATUS_LIMIT",
            e))(r || {})
        },
        22919: function(e, t, s) {
            "use strict";
            s.d(t, {
                w: function() {
                    return r
                }
            });
            const r = {
                CLUB_CHAT_CONTAINER: ".club-chat-container",
                CLUB_CHAT_WIDGET: ".club-chat-widget",
                EVENT_CHAT_CONTAINER: ".event-chat-container",
                OPENED_CHATS_CONTAINER: ".opened-chats-container",
                MOUNTED_CHATS_CONTAINER: ".open-chats-component",
                TV_CHAT_CONTAINER: ".tv-chat-container"
            }
        },
        2142: function(e, t, s) {
            "use strict";
            s.d(t, {
                L: function() {
                    return a
                }
            });
            const r = window.context.user || {}
              , a = {
                avatarUrl: r.avatarUrl,
                chessTitle: r.chessTitle || void 0,
                flairCode: r.flairCode,
                id: r.uuid,
                membership: r.membershipCode,
                username: r.username
            }
        },
        9508: function(e, t, s) {
            "use strict";
            s.d(t, {
                W: function() {
                    return r
                }
            });
            const r = (0,
            s(38096).gK)("uuid")
        },
        93969: function(e, t, s) {
            "use strict";
            s.d(t, {
                h: function() {
                    return r
                }
            });
            const r = self.PubSub.options.url
        },
        94224: function(e, t, s) {
            "use strict";
            s.d(t, {
                W: function() {
                    return r
                }
            });
            const r = "dev" === self.context.environment
        },
        71869: function(e, t, s) {
            "use strict";
            var r, a;
            s.d(t, {
                h: function() {
                    return n
                }
            });
            const n = Boolean(null == (a = null == (r = window.context) ? void 0 : r.user) ? void 0 : a.isStaff)
        },
        44701: function(e, t, s) {
            "use strict";
            s.d(t, {
                L: function() {
                    return r
                }
            });
            var r = (e=>(e.ACCEPTED = "accepted",
            e.PENDING = "pending",
            e.REJECTED = "rejected",
            e.REJECTED_EXPIRED = "rejected_expired",
            e))(r || {})
        },
        92631: function(e, t, s) {
            "use strict";
            s.d(t, {
                z: function() {
                    return r
                }
            });
            var r = (e=>(e.CLUB = "club",
            e.DIRECT = "direct",
            e.GROUP = "group",
            e.EVENT = "event",
            e.TV = "tv",
            e))(r || {})
        },
        75270: function(e, t, s) {
            "use strict";
            var r;
            s.d(t, {
                p: function() {
                    return r
                }
            }),
            (e=>{
                let t;
                var s;
                let r;
                var a;
                (s = t = e.ActionTypes || (e.ActionTypes = {})).CREATED = "created",
                s.DELETED = "deleted",
                s.JOINED = "joined",
                s.LEFT = "left",
                s.UPDATED = "updated",
                (a = r = e.MessageTypes || (e.MessageTypes = {})).ACTIVATED = "activate",
                a.SUBSCRIPTION_MESSAGE = "subscription",
                a.CLUB_MESSAGE = "club_message",
                a.CLUB_MESSAGES = "club_messages",
                a.COMMAND = "command",
                a.CREATE = "create",
                a.EVENT_MESSAGE = "event_message",
                a.GIFT_MESSAGE = "gifts",
                a.MUTED = "mute",
                a.PARTICIPANT = "participant",
                a.TV_MESSAGE = "tv_message",
                a.TV_MESSAGES_DELETION = "tv_messages_deletion",
                a.UNMUTED = "unmute",
                a.UPDATE = "update",
                a.WARNED = "warn"
            }
            )(r || (r = {}))
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
                    return f
                },
                xL: function() {
                    return _
                },
                U3: function() {
                    return p
                },
                _j: function() {
                    return m
                }
            });
            var r, a, n, i, o = s(51838), c = s(90425), u = s(18160);
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
              , h = (null == (a = null == (r = window.chesscom) ? void 0 : r.features) || a.includes("blogs_modern_featuring_write"),
            {
                BLOG: "blog",
                CSRF_TOKEN: null == (i = null == (n = window.context) ? void 0 : n.csrf) ? void 0 : i.token,
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
              , f = {
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
              , _ = {
                AMPLITUDE_LOGGER: "amplitude-logger",
                AMPLITUDE_LOG_SELECTION: "[data-log-selection-to-amplitude]",
                BOARD_POPOVER: o.s.BOARD_POPOVER,
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
                TOOLTIP: o.s.TOOLTIP,
                TOOLTIP_CLASS: "tooltip",
                TOOLTIP_TOP: "top",
                UPGRADE_ACCORDION: "upgrade-accordion",
                USER_LEAGUE: "user-league",
                USER_TAGLINE: "post-view-meta-user",
                VERSION_DROPDOWN: "version-dropdown"
            }
              , p = {
                CONFIRM_POPOVER_YES: "confirm-popover-yes",
                SHOW_MODAL: "show-confirm-popover",
                VOTE_COUNTED: "vote-counted",
                VIEW_CHANGE: "view-change",
                VIEW_GRID: "view-grid",
                VIEW_LIST: "view-list"
            }
              , m = {
                changeContentLanguage: ()=>c.Z.generate("web_user_callback_set_content_language"),
                enPassant: ()=>c.Z.generate("web_article_view", {
                    url: "how-to-capture-en-passant"
                }),
                inviteLink: (e,t,s)=>c.Z.generate(e, {
                    url: t,
                    secret: s
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
        51838: function(e, t, s) {
            "use strict";
            s.d(t, {
                s: function() {
                    return r
                }
            });
            const r = {
                BOARD_POPOVER: "v-board-popover",
                TOOLTIP: "v-tooltip",
                USER_POPOVER: "v-user-popover"
            }
        },
        87692: function(e, t, s) {
            "use strict";
            s.d(t, {
                ZC: function() {
                    return l
                },
                Wp: function() {
                    return h
                },
                yc: function() {
                    return d
                },
                xL: function() {
                    return f
                },
                _j: function() {
                    return _
                },
                Iz: function() {
                    return p
                },
                p0: function() {
                    return r.p
                },
                Cz: function() {
                    return m
                },
                rP: function() {
                    return b
                },
                U3: function() {
                    return w
                },
                Zj: function() {
                    return v
                }
            });
            var r = s(83229)
              , a = s(90425)
              , n = s(18160)
              , i = Object.defineProperty
              , o = Object.getOwnPropertySymbols
              , c = Object.prototype.hasOwnProperty
              , u = Object.prototype.propertyIsEnumerable
              , __defNormalProp = (e,t,s)=>t in e ? i(e, t, {
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
              , f = {
                USER_FLAIR: "user-flair",
                USER_SEARCH: "user-search",
                USER_POPOVER_CONTAINER: "user-popover"
            }
              , _ = {
                about: ()=>a.Z.generate("web_about"),
                membership: (e="icon")=>a.Z.generate("web_membership", {
                    c: e
                }),
                usernameSearch: e=>a.Z.generate("web_user_callback_username_search", ((e,t)=>{
                    for (var s in t || (t = {}))
                        c.call(t, s) && __defNormalProp(e, s, t[s]);
                    if (o)
                        for (var s of o(t))
                            u.call(t, s) && __defNormalProp(e, s, t[s]);
                    return e
                }
                )({
                    activeDays: 4e3
                }, e)),
                userDivision: ({league: e, division: t})=>a.Z.generate("web_league_division", {
                    league: e,
                    division: t
                }),
                userProfile: e=>a.Z.generate("web_member_view", {
                    username: e
                })
            }
              , p = {
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
              , m = (r.p.diamond,
            r.p.abuser,
            r.p.cheater,
            r.p.voluntarilyClosed,
            r.p.unspecifiedClosed,
            r.p.gold,
            r.p.moderator,
            r.p.platinum,
            r.p.staff,
            {
                [r.p.basic]: n.Z.trans("Basic Membership"),
                [r.p.diamond]: n.Z.trans("Diamond Membership"),
                [r.p.cheater]: n.Z.trans("Closed: Fair Play"),
                [r.p.abuser]: n.Z.trans("Closed: Abuse"),
                [r.p.voluntarilyClosed]: n.Z.trans("Closed: Inactive"),
                [r.p.unspecifiedClosed]: n.Z.trans("Account Closed"),
                [r.p.gold]: n.Z.trans("Gold Membership"),
                [r.p.moderator]: n.Z.trans("Moderator Account"),
                [r.p.platinum]: n.Z.trans("Platinum Membership"),
                [r.p.silver]: n.Z.trans("Silver Membership"),
                [r.p.staff]: n.Z.trans("Staff Account")
            })
              , b = {
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
              , w = {
                AUTOCOMPLETE_CLEAR_SELECTED: "form-autocomplete-clear-selected"
            }
              , v = {
                FETCH_ROLES: "fetchRoles"
            }
        },
        83229: function(e, t, s) {
            "use strict";
            s.d(t, {
                p: function() {
                    return r
                }
            });
            const r = {
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
            }
        },
        38096: function(e, t, s) {
            "use strict";
            s.d(t, {
                jl: function() {
                    return r.j
                },
                sQ: function() {
                    return isImpersonating
                },
                nJ: function() {
                    return i.n
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
            var r = s(8739)
              , a = s(99660)
              , n = (s(90425),
            s(87692))
              , i = s(52476);
            const o = window.context
              , isImpersonating = ()=>{
                var e;
                return !(!(0,
                r.j)() || !(null == (e = o.user) ? void 0 : e.isImpersonating))
            }
              , checkUserStatus = e=>{
                if (!(0,
                r.j)())
                    return !1;
                let t = !1;
                switch (e) {
                case "isActivated":
                    t = o.user.isActivated;
                    break;
                case "isStaff":
                    t = o.user.membershipLevel >= n.p0.staff;
                    break;
                case "isStaffOnly":
                    t = o.user.membershipLevel === n.p0.staff;
                    break;
                case "isModerator":
                    t = o.user.membershipLevel >= n.p0.moderator;
                    break;
                case "isModeratorOnly":
                    t = o.user.membershipLevel === n.p0.moderator;
                    break;
                case "isDiamond":
                    t = o.user.membershipLevel >= n.p0.diamond;
                    break;
                case "isDiamondOnly":
                    t = o.user.membershipLevel === n.p0.diamond;
                    break;
                case "isPlatinum":
                    t = o.user.membershipLevel >= n.p0.platinum;
                    break;
                case "isPlatinumOnly":
                    t = o.user.membershipLevel === n.p0.platinum;
                    break;
                case "isSilver":
                case "isPremium":
                    t = o.user.membershipLevel >= n.p0.silver;
                    break;
                case "isSilverOnly":
                    t = o.user.membershipLevel === n.p0.silver;
                    break;
                case "isGold":
                    t = o.user.membershipLevel >= n.p0.gold;
                    break;
                case "isGoldOnly":
                    t = o.user.membershipLevel === n.p0.gold;
                    break;
                case "isBasic":
                    t = o.user.membershipLevel === n.p0.basic;
                    break;
                case "isNewlyRegistered":
                    t = o.user.isNewlyRegistered;
                    break;
                case "isGuest":
                    t = o.user.isGuest;
                    break;
                case "chessTitle":
                    t = o.user.chessTitle;
                    break;
                default:
                    t = !1
                }
                return t
            }
              , getAdditionalUserInfo = e=>{
                var t, s, n, i, c, u, l, h, d, f, _, p, m, b, w, v, k, g, E;
                let T = !1;
                if (!(0,
                r.j)()) {
                    switch (e) {
                    case "diagramSettings":
                        T = {};
                        break;
                    case "isDarkMode":
                        T = (0,
                        a.KZ)();
                        break;
                    default:
                        T = null
                    }
                    return T
                }
                switch (e) {
                case "cohort":
                    T = null == (t = o.user) ? void 0 : t.cohort;
                    break;
                case "country":
                    T = null == (s = o.user) ? void 0 : s.country;
                    break;
                case "flairCode":
                    T = null == (n = o.user) ? void 0 : n.flairCode;
                    break;
                case "getUserId":
                    T = null == (i = o.user) ? void 0 : i.id;
                    break;
                case "getUsername":
                    T = null == (c = o.user) ? void 0 : c.username;
                    break;
                case "getAvatarUrl":
                    T = null == (u = o.user) ? void 0 : u.avatarUrl;
                    break;
                case "getAvatarLargeUrl":
                    T = null == (l = o.user) ? void 0 : l.avatarLargeUrl;
                    break;
                case "getSettingsAvatarUrl":
                    T = null == (h = o.user) ? void 0 : h.settingsAvatarUrl;
                    break;
                case "getLastLoginDate":
                    T = null == (d = o.user) ? void 0 : d.lastLoginDate;
                    break;
                case "registerDate":
                    T = null == (f = o.user) ? void 0 : f.registerDate;
                    break;
                case "getBrowserTimezone":
                    T = window.jstz.determine().name();
                    break;
                case "getTimezone":
                    T = null == (_ = o.user) ? void 0 : _.timezone;
                    break;
                case "getDiagramSettings":
                    T = o.diagramSettings;
                    break;
                case "language":
                    T = o.i18n.locale;
                    break;
                case "contentLanguage":
                    T = o.i18n.contentLanguage;
                    break;
                case "speaksEnglish":
                    T = "en_US" === o.i18n.locale;
                    break;
                case "eligibleFirstTrial":
                    T = null == (p = o.user) ? void 0 : p.eligibleFirstTrial;
                    break;
                case "fairPlayAgree":
                    T = null == (m = o.user) ? void 0 : m.fairPlayAgree;
                    break;
                case "getArchiveView":
                    T = (null == (b = o.user) ? void 0 : b.archiveView) ? o.user.archiveView : "grid";
                    break;
                case "homeContentType":
                    T = "following";
                    break;
                case "getMembershipLevel":
                    T = null == (w = o.user) ? void 0 : w.membershipLevel;
                    break;
                case "isContentHidden":
                    T = null == (v = o.user) ? void 0 : v.isContentHidden;
                    break;
                case "isDarkMode":
                    T = (0,
                    a.KZ)();
                    break;
                case "rating":
                    T = null == (k = o.user) ? void 0 : k.rating;
                    break;
                case "safeMode":
                    T = null == (g = o.user) ? void 0 : g.safeMode;
                    break;
                case "uuid":
                    T = null == (E = o.user) ? void 0 : E.uuid;
                    break;
                default:
                    T = !1
                }
                return T
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
            var r = s(82220);
            function isLoggedIn() {
                var e;
                return Boolean((null == (e = window.context) ? void 0 : e.user) && !(0,
                r.Z)())
            }
        },
        97451: function(e, t, s) {
            "use strict";
            s.d(t, {
                U3: function() {
                    return a
                }
            });
            s(90425);
            var r = s(32305);
            const a = {
                CLUB_CHAT_MODERATOR_ACTION: "club-chat-moderator-action",
                MODAL_DID_HIDE: "MODAL_DID_HIDE",
                SEND_NEW_GAME_SEEK: "SEND_NEW_GAME_SEEK",
                SEND_NEW_GAME_SEEK_SUCCESS: "SEND_NEW_GAME_SEEK_SUCCESS",
                SHOW_UPGRADE_MODAL: "SHOW_UPGRADE_MODAL",
                START_DIRECT_CHAT: "START_DIRECT_CHAT"
            };
            (0,
            r.dW)("Game Review"),
            (0,
            r.dW)("Puzzles"),
            (0,
            r.dW)("Lessons"),
            (0,
            r.dW)("Insights")
        },
        9669: function(e, t, s) {
            e.exports = s(51609)
        },
        55448: function(e, t, s) {
            "use strict";
            var r = s(64867)
              , a = s(36026)
              , n = s(4372)
              , i = s(15327)
              , o = s(94097)
              , c = s(84109)
              , u = s(67985)
              , l = s(85061)
              , h = s(45655)
              , d = s(65263);
            e.exports = function xhrAdapter(e) {
                return new Promise((function dispatchXhrRequest(t, s) {
                    var f, _ = e.data, p = e.headers, m = e.responseType;
                    function done() {
                        e.cancelToken && e.cancelToken.unsubscribe(f),
                        e.signal && e.signal.removeEventListener("abort", f)
                    }
                    r.isFormData(_) && delete p["Content-Type"];
                    var b = new XMLHttpRequest;
                    if (e.auth) {
                        var w = e.auth.username || ""
                          , v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        p.Authorization = "Basic " + btoa(w + ":" + v)
                    }
                    var k = o(e.baseURL, e.url);
                    function onloadend() {
                        if (b) {
                            var r = "getAllResponseHeaders"in b ? c(b.getAllResponseHeaders()) : null
                              , n = {
                                data: m && "text" !== m && "json" !== m ? b.response : b.responseText,
                                status: b.status,
                                statusText: b.statusText,
                                headers: r,
                                config: e,
                                request: b
                            };
                            a((function _resolve(e) {
                                t(e),
                                done()
                            }
                            ), (function _reject(e) {
                                s(e),
                                done()
                            }
                            ), n),
                            b = null
                        }
                    }
                    if (b.open(e.method.toUpperCase(), i(k, e.params, e.paramsSerializer), !0),
                    b.timeout = e.timeout,
                    "onloadend"in b ? b.onloadend = onloadend : b.onreadystatechange = function handleLoad() {
                        b && 4 === b.readyState && (0 !== b.status || b.responseURL && 0 === b.responseURL.indexOf("file:")) && setTimeout(onloadend)
                    }
                    ,
                    b.onabort = function handleAbort() {
                        b && (s(l("Request aborted", e, "ECONNABORTED", b)),
                        b = null)
                    }
                    ,
                    b.onerror = function handleError() {
                        s(l("Network Error", e, null, b)),
                        b = null
                    }
                    ,
                    b.ontimeout = function handleTimeout() {
                        var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
                          , r = e.transitional || h.transitional;
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                        s(l(t, e, r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", b)),
                        b = null
                    }
                    ,
                    r.isStandardBrowserEnv()) {
                        var g = (e.withCredentials || u(k)) && e.xsrfCookieName ? n.read(e.xsrfCookieName) : void 0;
                        g && (p[e.xsrfHeaderName] = g)
                    }
                    "setRequestHeader"in b && r.forEach(p, (function setRequestHeader(e, t) {
                        void 0 === _ && "content-type" === t.toLowerCase() ? delete p[t] : b.setRequestHeader(t, e)
                    }
                    )),
                    r.isUndefined(e.withCredentials) || (b.withCredentials = !!e.withCredentials),
                    m && "json" !== m && (b.responseType = e.responseType),
                    "function" == typeof e.onDownloadProgress && b.addEventListener("progress", e.onDownloadProgress),
                    "function" == typeof e.onUploadProgress && b.upload && b.upload.addEventListener("progress", e.onUploadProgress),
                    (e.cancelToken || e.signal) && (f = function(e) {
                        b && (s(!e || e && e.type ? new d("canceled") : e),
                        b.abort(),
                        b = null)
                    }
                    ,
                    e.cancelToken && e.cancelToken.subscribe(f),
                    e.signal && (e.signal.aborted ? f() : e.signal.addEventListener("abort", f))),
                    _ || (_ = null),
                    b.send(_)
                }
                ))
            }
        },
        51609: function(e, t, s) {
            "use strict";
            var r = s(64867)
              , a = s(91849)
              , n = s(30321)
              , i = s(47185);
            var o = function createInstance(e) {
                var t = new n(e)
                  , s = a(n.prototype.request, t);
                return r.extend(s, n.prototype, t),
                r.extend(s, t),
                s.create = function create(t) {
                    return createInstance(i(e, t))
                }
                ,
                s
            }(s(45655));
            o.Axios = n,
            o.Cancel = s(65263),
            o.CancelToken = s(14972),
            o.isCancel = s(26502),
            o.VERSION = s(97288).version,
            o.all = function all(e) {
                return Promise.all(e)
            }
            ,
            o.spread = s(8713),
            o.isAxiosError = s(16268),
            e.exports = o,
            e.exports.default = o
        },
        65263: function(e) {
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
        14972: function(e, t, s) {
            "use strict";
            var r = s(65263);
            function CancelToken(e) {
                if ("function" != typeof e)
                    throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function promiseExecutor(e) {
                    t = e
                }
                ));
                var s = this;
                this.promise.then((function(e) {
                    if (s._listeners) {
                        var t, r = s._listeners.length;
                        for (t = 0; t < r; t++)
                            s._listeners[t](e);
                        s._listeners = null
                    }
                }
                )),
                this.promise.then = function(e) {
                    var t, r = new Promise((function(e) {
                        s.subscribe(e),
                        t = e
                    }
                    )).then(e);
                    return r.cancel = function reject() {
                        s.unsubscribe(t)
                    }
                    ,
                    r
                }
                ,
                e((function cancel(e) {
                    s.reason || (s.reason = new r(e),
                    t(s.reason))
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
        26502: function(e) {
            "use strict";
            e.exports = function isCancel(e) {
                return !(!e || !e.__CANCEL__)
            }
        },
        30321: function(e, t, s) {
            "use strict";
            var r = s(64867)
              , a = s(15327)
              , n = s(80782)
              , i = s(13572)
              , o = s(47185)
              , c = s(54875)
              , u = c.validators;
            function Axios(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new n,
                    response: new n
                }
            }
            Axios.prototype.request = function request(e, t) {
                if ("string" == typeof e ? (t = t || {}).url = e : t = e || {},
                !t.url)
                    throw new Error("Provided config url is not valid");
                (t = o(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                var s = t.transitional;
                void 0 !== s && c.assertOptions(s, {
                    silentJSONParsing: u.transitional(u.boolean),
                    forcedJSONParsing: u.transitional(u.boolean),
                    clarifyTimeoutError: u.transitional(u.boolean)
                }, !1);
                var r = []
                  , a = !0;
                this.interceptors.request.forEach((function unshiftRequestInterceptors(e) {
                    "function" == typeof e.runWhen && !1 === e.runWhen(t) || (a = a && e.synchronous,
                    r.unshift(e.fulfilled, e.rejected))
                }
                ));
                var n, l = [];
                if (this.interceptors.response.forEach((function pushResponseInterceptors(e) {
                    l.push(e.fulfilled, e.rejected)
                }
                )),
                !a) {
                    var h = [i, void 0];
                    for (Array.prototype.unshift.apply(h, r),
                    h = h.concat(l),
                    n = Promise.resolve(t); h.length; )
                        n = n.then(h.shift(), h.shift());
                    return n
                }
                for (var d = t; r.length; ) {
                    var f = r.shift()
                      , _ = r.shift();
                    try {
                        d = f(d)
                    } catch (p) {
                        _(p);
                        break
                    }
                }
                try {
                    n = i(d)
                } catch (p) {
                    return Promise.reject(p)
                }
                for (; l.length; )
                    n = n.then(l.shift(), l.shift());
                return n
            }
            ,
            Axios.prototype.getUri = function getUri(e) {
                if (!e.url)
                    throw new Error("Provided config url is not valid");
                return e = o(this.defaults, e),
                a(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }
            ,
            r.forEach(["delete", "get", "head", "options"], (function forEachMethodNoData(e) {
                Axios.prototype[e] = function(t, s) {
                    return this.request(o(s || {}, {
                        method: e,
                        url: t,
                        data: (s || {}).data
                    }))
                }
            }
            )),
            r.forEach(["post", "put", "patch"], (function forEachMethodWithData(e) {
                Axios.prototype[e] = function(t, s, r) {
                    return this.request(o(r || {}, {
                        method: e,
                        url: t,
                        data: s
                    }))
                }
            }
            )),
            e.exports = Axios
        },
        80782: function(e, t, s) {
            "use strict";
            var r = s(64867);
            function InterceptorManager() {
                this.handlers = []
            }
            InterceptorManager.prototype.use = function use(e, t, s) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!s && s.synchronous,
                    runWhen: s ? s.runWhen : null
                }),
                this.handlers.length - 1
            }
            ,
            InterceptorManager.prototype.eject = function eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            ,
            InterceptorManager.prototype.forEach = function forEach(e) {
                r.forEach(this.handlers, (function forEachHandler(t) {
                    null !== t && e(t)
                }
                ))
            }
            ,
            e.exports = InterceptorManager
        },
        94097: function(e, t, s) {
            "use strict";
            var r = s(91793)
              , a = s(7303);
            e.exports = function buildFullPath(e, t) {
                return e && !r(t) ? a(e, t) : t
            }
        },
        85061: function(e, t, s) {
            "use strict";
            var r = s(80481);
            e.exports = function createError(e, t, s, a, n) {
                var i = new Error(e);
                return r(i, t, s, a, n)
            }
        },
        13572: function(e, t, s) {
            "use strict";
            var r = s(64867)
              , a = s(18527)
              , n = s(26502)
              , i = s(45655)
              , o = s(65263);
            function throwIfCancellationRequested(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(),
                e.signal && e.signal.aborted)
                    throw new o("canceled")
            }
            e.exports = function dispatchRequest(e) {
                return throwIfCancellationRequested(e),
                e.headers = e.headers || {},
                e.data = a.call(e, e.data, e.headers, e.transformRequest),
                e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
                r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function cleanHeaderConfig(t) {
                    delete e.headers[t]
                }
                )),
                (e.adapter || i.adapter)(e).then((function onAdapterResolution(t) {
                    return throwIfCancellationRequested(e),
                    t.data = a.call(e, t.data, t.headers, e.transformResponse),
                    t
                }
                ), (function onAdapterRejection(t) {
                    return n(t) || (throwIfCancellationRequested(e),
                    t && t.response && (t.response.data = a.call(e, t.response.data, t.response.headers, e.transformResponse))),
                    Promise.reject(t)
                }
                ))
            }
        },
        80481: function(e) {
            "use strict";
            e.exports = function enhanceError(e, t, s, r, a) {
                return e.config = t,
                s && (e.code = s),
                e.request = r,
                e.response = a,
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
        47185: function(e, t, s) {
            "use strict";
            var r = s(64867);
            e.exports = function mergeConfig(e, t) {
                t = t || {};
                var s = {};
                function getMergedValue(e, t) {
                    return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                }
                function mergeDeepProperties(s) {
                    return r.isUndefined(t[s]) ? r.isUndefined(e[s]) ? void 0 : getMergedValue(void 0, e[s]) : getMergedValue(e[s], t[s])
                }
                function valueFromConfig2(e) {
                    if (!r.isUndefined(t[e]))
                        return getMergedValue(void 0, t[e])
                }
                function defaultToConfig2(s) {
                    return r.isUndefined(t[s]) ? r.isUndefined(e[s]) ? void 0 : getMergedValue(void 0, e[s]) : getMergedValue(void 0, t[s])
                }
                function mergeDirectKeys(s) {
                    return s in t ? getMergedValue(e[s], t[s]) : s in e ? getMergedValue(void 0, e[s]) : void 0
                }
                var a = {
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
                return r.forEach(Object.keys(e).concat(Object.keys(t)), (function computeConfigValue(e) {
                    var t = a[e] || mergeDeepProperties
                      , n = t(e);
                    r.isUndefined(n) && t !== mergeDirectKeys || (s[e] = n)
                }
                )),
                s
            }
        },
        36026: function(e, t, s) {
            "use strict";
            var r = s(85061);
            e.exports = function settle(e, t, s) {
                var a = s.config.validateStatus;
                s.status && a && !a(s.status) ? t(r("Request failed with status code " + s.status, s.config, null, s.request, s)) : e(s)
            }
        },
        18527: function(e, t, s) {
            "use strict";
            var r = s(64867)
              , a = s(45655);
            e.exports = function transformData(e, t, s) {
                var n = this || a;
                return r.forEach(s, (function transform(s) {
                    e = s.call(n, e, t)
                }
                )),
                e
            }
        },
        45655: function(e, t, s) {
            "use strict";
            var r = s(34155)
              , a = s(64867)
              , n = s(16016)
              , i = s(80481)
              , o = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function setContentTypeIfUnset(e, t) {
                !a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var c = {
                transitional: {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                adapter: function getDefaultAdapter() {
                    var e;
                    return ("undefined" != typeof XMLHttpRequest || void 0 !== r && "[object process]" === Object.prototype.toString.call(r)) && (e = s(55448)),
                    e
                }(),
                transformRequest: [function transformRequest(e, t) {
                    return n(t, "Accept"),
                    n(t, "Content-Type"),
                    a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (setContentTypeIfUnset(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()) : a.isObject(e) || t && "application/json" === t["Content-Type"] ? (setContentTypeIfUnset(t, "application/json"),
                    function stringifySafely(e, t, s) {
                        if (a.isString(e))
                            try {
                                return (t || JSON.parse)(e),
                                a.trim(e)
                            } catch (r) {
                                if ("SyntaxError" !== r.name)
                                    throw r
                            }
                        return (s || JSON.stringify)(e)
                    }(e)) : e
                }
                ],
                transformResponse: [function transformResponse(e) {
                    var t = this.transitional || c.transitional
                      , s = t && t.silentJSONParsing
                      , r = t && t.forcedJSONParsing
                      , n = !s && "json" === this.responseType;
                    if (n || r && a.isString(e) && e.length)
                        try {
                            return JSON.parse(e)
                        } catch (o) {
                            if (n) {
                                if ("SyntaxError" === o.name)
                                    throw i(o, this, "E_JSON_PARSE");
                                throw o
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
            a.forEach(["delete", "get", "head"], (function forEachMethodNoData(e) {
                c.headers[e] = {}
            }
            )),
            a.forEach(["post", "put", "patch"], (function forEachMethodWithData(e) {
                c.headers[e] = a.merge(o)
            }
            )),
            e.exports = c
        },
        97288: function(e) {
            e.exports = {
                version: "0.25.0"
            }
        },
        91849: function(e) {
            "use strict";
            e.exports = function bind(e, t) {
                return function wrap() {
                    for (var s = new Array(arguments.length), r = 0; r < s.length; r++)
                        s[r] = arguments[r];
                    return e.apply(t, s)
                }
            }
        },
        15327: function(e, t, s) {
            "use strict";
            var r = s(64867);
            function encode(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function buildURL(e, t, s) {
                if (!t)
                    return e;
                var a;
                if (s)
                    a = s(t);
                else if (r.isURLSearchParams(t))
                    a = t.toString();
                else {
                    var n = [];
                    r.forEach(t, (function serialize(e, t) {
                        null != e && (r.isArray(e) ? t += "[]" : e = [e],
                        r.forEach(e, (function parseValue(e) {
                            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)),
                            n.push(encode(t) + "=" + encode(e))
                        }
                        )))
                    }
                    )),
                    a = n.join("&")
                }
                if (a) {
                    var i = e.indexOf("#");
                    -1 !== i && (e = e.slice(0, i)),
                    e += (-1 === e.indexOf("?") ? "?" : "&") + a
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
        4372: function(e, t, s) {
            "use strict";
            var r = s(64867);
            e.exports = r.isStandardBrowserEnv() ? function standardBrowserEnv() {
                return {
                    write: function write(e, t, s, a, n, i) {
                        var o = [];
                        o.push(e + "=" + encodeURIComponent(t)),
                        r.isNumber(s) && o.push("expires=" + new Date(s).toGMTString()),
                        r.isString(a) && o.push("path=" + a),
                        r.isString(n) && o.push("domain=" + n),
                        !0 === i && o.push("secure"),
                        document.cookie = o.join("; ")
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
        91793: function(e) {
            "use strict";
            e.exports = function isAbsoluteURL(e) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
            }
        },
        16268: function(e, t, s) {
            "use strict";
            var r = s(64867);
            e.exports = function isAxiosError(e) {
                return r.isObject(e) && !0 === e.isAxiosError
            }
        },
        67985: function(e, t, s) {
            "use strict";
            var r = s(64867);
            e.exports = r.isStandardBrowserEnv() ? function standardBrowserEnv() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");
                function resolveURL(e) {
                    var r = e;
                    return t && (s.setAttribute("href", r),
                    r = s.href),
                    s.setAttribute("href", r),
                    {
                        href: s.href,
                        protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
                        host: s.host,
                        search: s.search ? s.search.replace(/^\?/, "") : "",
                        hash: s.hash ? s.hash.replace(/^#/, "") : "",
                        hostname: s.hostname,
                        port: s.port,
                        pathname: "/" === s.pathname.charAt(0) ? s.pathname : "/" + s.pathname
                    }
                }
                return e = resolveURL(window.location.href),
                function isURLSameOrigin(t) {
                    var s = r.isString(t) ? resolveURL(t) : t;
                    return s.protocol === e.protocol && s.host === e.host
                }
            }() : function isURLSameOrigin() {
                return !0
            }
        },
        16016: function(e, t, s) {
            "use strict";
            var r = s(64867);
            e.exports = function normalizeHeaderName(e, t) {
                r.forEach(e, (function processHeader(s, r) {
                    r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = s,
                    delete e[r])
                }
                ))
            }
        },
        84109: function(e, t, s) {
            "use strict";
            var r = s(64867)
              , a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function parseHeaders(e) {
                var t, s, n, i = {};
                return e ? (r.forEach(e.split("\n"), (function parser(e) {
                    if (n = e.indexOf(":"),
                    t = r.trim(e.substr(0, n)).toLowerCase(),
                    s = r.trim(e.substr(n + 1)),
                    t) {
                        if (i[t] && a.indexOf(t) >= 0)
                            return;
                        i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([s]) : i[t] ? i[t] + ", " + s : s
                    }
                }
                )),
                i) : i
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
        54875: function(e, t, s) {
            "use strict";
            var r = s(97288).version
              , a = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                a[e] = function validator(s) {
                    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e
                }
            }
            ));
            var n = {};
            a.transitional = function transitional(e, t, s) {
                function formatMessage(e, t) {
                    return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (s ? ". " + s : "")
                }
                return function(s, r, a) {
                    if (!1 === e)
                        throw new Error(formatMessage(r, " has been removed" + (t ? " in " + t : "")));
                    return t && !n[r] && (n[r] = !0,
                    console.warn(formatMessage(r, " has been deprecated since v" + t + " and will be removed in the near future"))),
                    !e || e(s, r, a)
                }
            }
            ,
            e.exports = {
                assertOptions: function assertOptions(e, t, s) {
                    if ("object" != typeof e)
                        throw new TypeError("options must be an object");
                    for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
                        var n = r[a]
                          , i = t[n];
                        if (i) {
                            var o = e[n]
                              , c = void 0 === o || i(o, n, e);
                            if (!0 !== c)
                                throw new TypeError("option " + n + " must be " + c)
                        } else if (!0 !== s)
                            throw Error("Unknown option " + n)
                    }
                },
                validators: a
            }
        },
        64867: function(e, t, s) {
            "use strict";
            var r = s(91849)
              , a = Object.prototype.toString;
            function isArray(e) {
                return Array.isArray(e)
            }
            function isUndefined(e) {
                return void 0 === e
            }
            function isArrayBuffer(e) {
                return "[object ArrayBuffer]" === a.call(e)
            }
            function isObject(e) {
                return null !== e && "object" == typeof e
            }
            function isPlainObject(e) {
                if ("[object Object]" !== a.call(e))
                    return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
            function isFunction(e) {
                return "[object Function]" === a.call(e)
            }
            function forEach(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]),
                    isArray(e))
                        for (var s = 0, r = e.length; s < r; s++)
                            t.call(null, e[s], s, e);
                    else
                        for (var a in e)
                            Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
            }
            e.exports = {
                isArray: isArray,
                isArrayBuffer: isArrayBuffer,
                isBuffer: function isBuffer(e) {
                    return null !== e && !isUndefined(e) && null !== e.constructor && !isUndefined(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function isFormData(e) {
                    return "[object FormData]" === a.call(e)
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
                    return "[object Date]" === a.call(e)
                },
                isFile: function isFile(e) {
                    return "[object File]" === a.call(e)
                },
                isBlob: function isBlob(e) {
                    return "[object Blob]" === a.call(e)
                },
                isFunction: isFunction,
                isStream: function isStream(e) {
                    return isObject(e) && isFunction(e.pipe)
                },
                isURLSearchParams: function isURLSearchParams(e) {
                    return "[object URLSearchParams]" === a.call(e)
                },
                isStandardBrowserEnv: function isStandardBrowserEnv() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                },
                forEach: forEach,
                merge: function merge() {
                    var e = {};
                    function assignValue(t, s) {
                        isPlainObject(e[s]) && isPlainObject(t) ? e[s] = merge(e[s], t) : isPlainObject(t) ? e[s] = merge({}, t) : isArray(t) ? e[s] = t.slice() : e[s] = t
                    }
                    for (var t = 0, s = arguments.length; t < s; t++)
                        forEach(arguments[t], assignValue);
                    return e
                },
                extend: function extend(e, t, s) {
                    return forEach(t, (function assignValue(t, a) {
                        e[a] = s && "function" == typeof t ? r(t, s) : t
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
        34155: function(e) {
            var t, s, r = e.exports = {};
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
                } catch (s) {
                    try {
                        return t.call(null, e, 0)
                    } catch (s) {
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
                    s = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
                } catch (e) {
                    s = defaultClearTimeout
                }
            }();
            var a, n = [], i = !1, o = -1;
            function cleanUpNextTick() {
                i && a && (i = !1,
                a.length ? n = a.concat(n) : o = -1,
                n.length && drainQueue())
            }
            function drainQueue() {
                if (!i) {
                    var e = runTimeout(cleanUpNextTick);
                    i = !0;
                    for (var t = n.length; t; ) {
                        for (a = n,
                        n = []; ++o < t; )
                            a && a[o].run();
                        o = -1,
                        t = n.length
                    }
                    a = null,
                    i = !1,
                    function runClearTimeout(e) {
                        if (s === clearTimeout)
                            return clearTimeout(e);
                        if ((s === defaultClearTimeout || !s) && clearTimeout)
                            return s = clearTimeout,
                            clearTimeout(e);
                        try {
                            return s(e)
                        } catch (t) {
                            try {
                                return s.call(null, e)
                            } catch (t) {
                                return s.call(this, e)
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
            r.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var s = 1; s < arguments.length; s++)
                        t[s - 1] = arguments[s];
                n.push(new Item(e,t)),
                1 !== n.length || i || runTimeout(drainQueue)
            }
            ,
            Item.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            r.title = "browser",
            r.browser = !0,
            r.env = {},
            r.argv = [],
            r.version = "",
            r.versions = {},
            r.on = noop,
            r.addListener = noop,
            r.once = noop,
            r.off = noop,
            r.removeListener = noop,
            r.removeAllListeners = noop,
            r.emit = noop,
            r.prependListener = noop,
            r.prependOnceListener = noop,
            r.listeners = function(e) {
                return []
            }
            ,
            r.binding = function(e) {
                throw new Error("process.binding is not supported")
            }
            ,
            r.cwd = function() {
                return "/"
            }
            ,
            r.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            r.umask = function() {
                return 0
            }
        },
        52439: function(e, t, s) {
            e.exports = s(84474)(110)
        },
        89402: function(e, t, s) {
            e.exports = s(84474)(475)
        },
        23992: function(e, t, s) {
            e.exports = s(84474)(866)
        },
        84474: function(e) {
            "use strict";
            e.exports = vueDLL
        },
        17685: function(e, t, s) {
            "use strict";
            var r = s(66092).Z.Symbol;
            t.Z = r
        },
        34492: function(e, t, s) {
            "use strict";
            var r = s(17685)
              , a = s(9432)
              , n = s(80699)
              , i = r.Z ? r.Z.toStringTag : void 0;
            t.Z = function baseGetTag(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? (0,
                a.Z)(e) : (0,
                n.Z)(e)
            }
        },
        13413: function(e, t) {
            "use strict";
            var s = "object" == typeof global && global && global.Object === Object && global;
            t.Z = s
        },
        9432: function(e, t, s) {
            "use strict";
            var r = s(17685)
              , a = Object.prototype
              , n = a.hasOwnProperty
              , i = a.toString
              , o = r.Z ? r.Z.toStringTag : void 0;
            t.Z = function getRawTag(e) {
                var t = n.call(e, o)
                  , s = e[o];
                try {
                    e[o] = void 0;
                    var r = !0
                } catch (c) {}
                var a = i.call(e);
                return r && (t ? e[o] = s : delete e[o]),
                a
            }
        },
        80699: function(e, t) {
            "use strict";
            var s = Object.prototype.toString;
            t.Z = function objectToString(e) {
                return s.call(e)
            }
        },
        66092: function(e, t, s) {
            "use strict";
            var r = s(13413)
              , a = "object" == typeof self && self && self.Object === Object && self
              , n = r.Z || a || Function("return this")();
            t.Z = n
        },
        53434: function(e, t, s) {
            "use strict";
            var r = s(77226)
              , a = s(25222)
              , n = s(25742)
              , i = Math.max
              , o = Math.min;
            t.Z = function debounce(e, t, s) {
                var c, u, l, h, d, f, _ = 0, p = !1, m = !1, b = !0;
                if ("function" != typeof e)
                    throw new TypeError("Expected a function");
                function invokeFunc(t) {
                    var s = c
                      , r = u;
                    return c = u = void 0,
                    _ = t,
                    h = e.apply(r, s)
                }
                function leadingEdge(e) {
                    return _ = e,
                    d = setTimeout(timerExpired, t),
                    p ? invokeFunc(e) : h
                }
                function shouldInvoke(e) {
                    var s = e - f;
                    return void 0 === f || s >= t || s < 0 || m && e - _ >= l
                }
                function timerExpired() {
                    var e = (0,
                    a.Z)();
                    if (shouldInvoke(e))
                        return trailingEdge(e);
                    d = setTimeout(timerExpired, function remainingWait(e) {
                        var s = t - (e - f);
                        return m ? o(s, l - (e - _)) : s
                    }(e))
                }
                function trailingEdge(e) {
                    return d = void 0,
                    b && c ? invokeFunc(e) : (c = u = void 0,
                    h)
                }
                function debounced() {
                    var e = (0,
                    a.Z)()
                      , s = shouldInvoke(e);
                    if (c = arguments,
                    u = this,
                    f = e,
                    s) {
                        if (void 0 === d)
                            return leadingEdge(f);
                        if (m)
                            return clearTimeout(d),
                            d = setTimeout(timerExpired, t),
                            invokeFunc(f)
                    }
                    return void 0 === d && (d = setTimeout(timerExpired, t)),
                    h
                }
                return t = (0,
                n.Z)(t) || 0,
                (0,
                r.Z)(s) && (p = !!s.leading,
                l = (m = "maxWait"in s) ? i((0,
                n.Z)(s.maxWait) || 0, t) : l,
                b = "trailing"in s ? !!s.trailing : b),
                debounced.cancel = function cancel() {
                    void 0 !== d && clearTimeout(d),
                    _ = 0,
                    c = f = u = d = void 0
                }
                ,
                debounced.flush = function flush() {
                    return void 0 === d ? h : trailingEdge((0,
                    a.Z)())
                }
                ,
                debounced
            }
        },
        77226: function(e, t) {
            "use strict";
            t.Z = function isObject(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        18533: function(e, t) {
            "use strict";
            t.Z = function isObjectLike(e) {
                return null != e && "object" == typeof e
            }
        },
        72714: function(e, t, s) {
            "use strict";
            var r = s(34492)
              , a = s(18533);
            t.Z = function isSymbol(e) {
                return "symbol" == typeof e || (0,
                a.Z)(e) && "[object Symbol]" == (0,
                r.Z)(e)
            }
        },
        25222: function(e, t, s) {
            "use strict";
            var r = s(66092);
            t.Z = function() {
                return r.Z.Date.now()
            }
        },
        25742: function(e, t, s) {
            "use strict";
            var r = s(77226)
              , a = s(72714)
              , n = /^\s+|\s+$/g
              , i = /^[-+]0x[0-9a-f]+$/i
              , o = /^0b[01]+$/i
              , c = /^0o[0-7]+$/i
              , u = parseInt;
            t.Z = function toNumber(e) {
                if ("number" == typeof e)
                    return e;
                if ((0,
                a.Z)(e))
                    return NaN;
                if ((0,
                r.Z)(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = (0,
                    r.Z)(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(n, "");
                var s = o.test(e);
                return s || c.test(e) ? u(e.slice(2), s ? 2 : 8) : i.test(e) ? NaN : +e
            }
        }
    }, h = {};
    function __webpack_require__(e) {
        var t = h[e];
        if (void 0 !== t)
            return t.exports;
        var s = h[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return l[e].call(s.exports, s, s.exports, __webpack_require__),
        s.loaded = !0,
        s.exports
    }
    __webpack_require__.m = l,
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
    __webpack_require__.t = function(s, r) {
        if (1 & r && (s = this(s)),
        8 & r)
            return s;
        if ("object" == typeof s && s) {
            if (4 & r && s.__esModule)
                return s;
            if (16 & r && "function" == typeof s.then)
                return s
        }
        var a = Object.create(null);
        __webpack_require__.r(a);
        var n = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var i = 2 & r && s; "object" == typeof i && !~e.indexOf(i); i = t(i))
            Object.getOwnPropertyNames(i).forEach((function(e) {
                n[e] = function() {
                    return s[e]
                }
            }
            ));
        return n.default = function() {
            return s
        }
        ,
        __webpack_require__.d(a, n),
        a
    }
    ,
    __webpack_require__.d = function(e, t) {
        for (var s in t)
            __webpack_require__.o(t, s) && !__webpack_require__.o(e, s) && Object.defineProperty(e, s, {
                enumerable: !0,
                get: t[s]
            })
    }
    ,
    __webpack_require__.f = {},
    __webpack_require__.e = function(e) {
        return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t, s) {
            return __webpack_require__.f[s](e, t),
            t
        }
        ), []))
    }
    ,
    __webpack_require__.u = function(e) {
        return 116 === e ? "web.chunk.client.9c34282c.js" : 493 === e ? "web.chunk.client.d2d8e1c0.js" : 522 === e ? "web.chunk.client.5b0b91c4.js" : 77 === e ? "chat-mount.chunk.client.932c0201.js" : 48 === e ? "web.chunk.client.5c36f0d1.js" : 790 === e ? "web.chunk.client.f1346cdd.js" : 614 === e ? "gift-membership-modal.chunk.client.22579c50.js" : 210 === e ? "user-report-modal.chunk.client.bba8bf00.js" : 284 === e ? "trophy-popover.chunk.client.6d593a9f.js" : 539 === e ? "report-modal.chunk.client.58b57b73.js" : 430 === e ? "success-modal.chunk.client.1dc0a075.js" : 379 === e ? "payment-method-paypal.chunk.client.570adaa3.js" : void 0
    }
    ,
    __webpack_require__.miniCssF = function(e) {
        return 77 === e ? "chat-mount.chunk.client.261874cd.css" : 614 === e ? "gift-membership-modal.chunk.client.e6f55884.css" : 210 === e ? "user-report-modal.chunk.client.de994533.css" : 284 === e ? "trophy-popover.chunk.client.3089e1fa.css" : 539 === e ? "report-modal.chunk.client.51e30c14.css" : 430 === e ? "success-modal.chunk.client.798a8048.css" : 379 === e ? "payment-method-paypal.chunk.client.1a5f8dff.css" : void 0
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
    s = {},
    r = "client:",
    __webpack_require__.l = function(e, t, a, n) {
        if (s[e])
            s[e].push(t);
        else {
            var i, o;
            if (void 0 !== a)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var l = c[u];
                    if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == r + a) {
                        i = l;
                        break
                    }
                }
            i || (o = !0,
            (i = document.createElement("script")).charset = "utf-8",
            i.timeout = 120,
            __webpack_require__.nc && i.setAttribute("nonce", __webpack_require__.nc),
            i.setAttribute("data-webpack", r + a),
            i.src = e),
            s[e] = [t];
            var onScriptComplete = function(t, r) {
                i.onerror = i.onload = null,
                clearTimeout(h);
                var a = s[e];
                if (delete s[e],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((function(e) {
                    return e(r)
                }
                )),
                t)
                    return t(r)
            }
              , h = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: i
            }), 12e4);
            i.onerror = onScriptComplete.bind(null, i.onerror),
            i.onload = onScriptComplete.bind(null, i.onload),
            o && document.head.appendChild(i)
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
    a = __webpack_require__.u,
    n = __webpack_require__.e,
    i = new Map,
    o = new Map,
    __webpack_require__.u = function(e) {
        return a(e) + (i.has(e) ? "?" + i.get(e) : "")
    }
    ,
    __webpack_require__.e = function(e) {
        return n(e).catch((function(t) {
            var s = o.has(e) ? o.get(e) : 2;
            if (s < 1) {
                var r = a(e);
                throw t.message = "Loading chunk " + e + " failed after 2 retries.\n(" + r + ")",
                t.request = r,
                t
            }
            return new Promise((function(t) {
                setTimeout((function() {
                    var r = "cache-bust=true&retry-attempt=" + (2 - s + 1);
                    i.set(e, r),
                    o.set(e, s - 1),
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
        return new Promise((function(t, s) {
            var r = __webpack_require__.miniCssF(e)
              , a = window.__CHESSCOM_RTL__
              , n = "/bundles/app/css/" + r;
            if (function(e, t) {
                for (var s = document.getElementsByTagName("link"), r = 0; r < s.length; r++) {
                    var a = (i = s[r]).getAttribute("data-href") || i.getAttribute("href");
                    if ("stylesheet" === i.rel && (a === e || a === t))
                        return i
                }
                var n = document.getElementsByTagName("style");
                for (r = 0; r < n.length; r++) {
                    var i;
                    if ((a = (i = n[r]).getAttribute("data-href")) === e || a === t)
                        return i
                }
            }(r, n))
                return t();
            a && (n = n.replace(/\.css/i, ".rtl.css")),
            function(e, t, s, r) {
                var a = document.createElement("link");
                a.rel = "stylesheet",
                a.type = "text/css",
                a.onerror = a.onload = function(n) {
                    if (a.onerror = a.onload = null,
                    "load" === n.type)
                        s();
                    else {
                        var i = n && ("load" === n.type ? "missing" : n.type)
                          , o = n && n.target && n.target.href || t
                          , c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                        c.code = "CSS_CHUNK_LOAD_FAILED",
                        c.type = i,
                        c.request = o,
                        a.parentNode.removeChild(a),
                        r(c)
                    }
                }
                ,
                a.href = t,
                document.head.appendChild(a)
            }(e, n, t, s)
        }
        ))
    }
    ,
    u = {
        196: 0
    },
    __webpack_require__.f.miniCss = function(e, t) {
        u[e] ? t.push(u[e]) : 0 !== u[e] && {
            77: 1,
            210: 1,
            284: 1,
            379: 1,
            430: 1,
            539: 1,
            614: 1
        }[e] && t.push(u[e] = c(e).then((function() {
            u[e] = 0
        }
        ), (function(t) {
            throw delete u[e],
            t
        }
        )))
    }
    ,
    function() {
        var e = {
            196: 0
        };
        __webpack_require__.f.j = function(t, s) {
            var r = __webpack_require__.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    s.push(r[2]);
                else {
                    var a = new Promise((function(s, a) {
                        r = e[t] = [s, a]
                    }
                    ));
                    s.push(r[2] = a);
                    var n = __webpack_require__.p + __webpack_require__.u(t)
                      , i = new Error;
                    __webpack_require__.l(n, (function(s) {
                        if (__webpack_require__.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var a = s && ("load" === s.type ? "missing" : s.type)
                              , n = s && s.target && s.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + n + ")",
                            i.name = "ChunkLoadError",
                            i.type = a,
                            i.request = n,
                            r[1](i)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var webpackJsonpCallback = function(t, s) {
            var r, a, n = s[0], i = s[1], o = s[2], c = 0;
            if (n.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (r in i)
                    __webpack_require__.o(i, r) && (__webpack_require__.m[r] = i[r]);
                if (o)
                    o(__webpack_require__)
            }
            for (t && t(s); c < n.length; c++)
                a = n[c],
                __webpack_require__.o(e, a) && e[a] && e[a][0](),
                e[a] = 0
        }
          , t = ("undefined" != typeof self ? self : this).wpChessCom_ivp1 = ("undefined" != typeof self ? self : this).wpChessCom_ivp1 || [];
        t.forEach(webpackJsonpCallback.bind(null, 0)),
        t.push = webpackJsonpCallback.bind(null, t.push.bind(t))
    }(),
    function() {
        "use strict";
        var e = __webpack_require__(23992)
          , t = __webpack_require__(74672)
          , s = __webpack_require__(43608)
          , r = __webpack_require__(90425)
          , a = __webpack_require__(79208)
          , n = __webpack_require__(81744)
          , i = __webpack_require__(9508)
          , o = __webpack_require__(93969);
        class ChatListApi {
            constructor() {
                this.transport = new a.E
            }
            async getChatsList(e) {
                const t = this.transport.wrapUrl(`users/${i.W}`)
                  , s = {
                    with_counters: !0
                };
                return e && (s.with_inactive = !0),
                this.transport.getRequest({
                    url: t,
                    payload: s
                })
            }
            async getUsersData(e) {
                const t = r.Z.generate("web_user_callback_id_to_user_data")
                  , s = {
                    uuids: e
                };
                return this.transport.getRequest({
                    url: t,
                    payload: s,
                    needHeaders: !1
                })
            }
            async getUsersOnlineStatus(e) {
                const t = `${o.h.presence}users`
                  , s = {
                    ids: e.slice(0, n._.USERS_TRACK_STATUS_LIMIT).join(",")
                };
                return this.transport.getRequest({
                    url: t,
                    payload: s
                })
            }
        }
        var c = __webpack_require__(59924)
          , u = __webpack_require__(52439)
          , l = (e=>(e.CHAT_LIST_LOADED = "chat-list-loaded",
        e.INIT_CHESS_TV_CHAT = "init-chess-tv-chat",
        e.INIT_CLUB_CHAT = "init-club-chat",
        e.INIT_EVENT_CHAT = "init-event-chat",
        e.OPEN_POPOUT_CLUB_CHAT = "open-popout-club-chat",
        e))(l || {})
          , h = __webpack_require__(22919);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        class PublicChatsInitializer {
            constructor(e) {
                this.chatList = e
            }
            init() {
                window.addEventListener("message", (({data: e})=>{
                    (null == e ? void 0 : e.key) === l.INIT_CHESS_TV_CHAT && this.initTvChat(),
                    (null == e ? void 0 : e.key) === l.INIT_CLUB_CHAT && this.initClubChats(),
                    (null == e ? void 0 : e.key) === l.INIT_EVENT_CHAT && this.initEventChats()
                }
                )),
                this.initClubChats(),
                this.initEventChats(),
                this.initTvChat()
            }
            initClubChats() {
                Array.from(document.querySelectorAll(h.w.CLUB_CHAT_CONTAINER)).forEach((async e=>{
                    const t = e.getAttribute("data-id")
                      , s = Boolean(e.getAttribute("data-show-users-list"))
                      , r = e.getAttribute("data-force-theme") || "";
                    if (!t)
                        return;
                    const {ClubChat: a, PublicChatWidget: n} = await this.provideChatModule()
                      , i = new a({
                        id: t,
                        showSidebar: s,
                        forceTheme: r
                    });
                    this.chatList.addPublicChat(i),
                    new u.default({
                        render: e=>e(n, {
                            props: {
                                chat: i
                            }
                        })
                    }).$mount(e)
                }
                ))
            }
            initEventChats() {
                Array.from(document.querySelectorAll(h.w.EVENT_CHAT_CONTAINER)).forEach((async e=>{
                    const t = e.getAttribute("data-chat-id");
                    if (!t)
                        return;
                    const {EventChat: s, PublicChatWidget: r} = await this.provideChatModule()
                      , a = new s({
                        id: t
                    });
                    this.chatList.addPublicChat(a),
                    new u.default({
                        render: e=>e(r, {
                            props: {
                                chat: a
                            }
                        })
                    }).$mount(e)
                }
                ))
            }
            async initTvChat() {
                const e = document.querySelector(h.w.TV_CHAT_CONTAINER);
                if (!e)
                    return;
                const t = e.getAttribute("data-chat-id")
                  , s = t ? t.split("_")[0] : n._.CHESS_TV_DEFAULT_LANG
                  , r = Boolean(e.getAttribute("data-is-standalone"))
                  , a = Boolean(e.getAttribute("data-user-can-chat"))
                  , {PublicChatWidget: i, TvChat: o} = await this.provideChatModule()
                  , c = new o({
                    id: s,
                    isStandalone: r,
                    isUserCanChat: a
                });
                this.chatList.addPublicChat(c),
                new u.default({
                    render: e=>e(i, {
                        props: {
                            chat: c
                        }
                    })
                }).$mount(e)
            }
            async provideChatModule() {
                const [{ClubChat: e},{EventChat: t},{TvChat: s},r] = await Promise.all([Promise.all([__webpack_require__.e(116), __webpack_require__.e(493), __webpack_require__.e(522), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 51401)), Promise.all([__webpack_require__.e(116), __webpack_require__.e(493), __webpack_require__.e(522), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 59452)), Promise.all([__webpack_require__.e(116), __webpack_require__.e(493), __webpack_require__.e(522), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 4819)), Promise.all([__webpack_require__.e(116), __webpack_require__.e(493), __webpack_require__.e(522), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 89308))]);
                return {
                    ClubChat: e,
                    EventChat: t,
                    PublicChatWidget: r.default,
                    TvChat: s
                }
            }
        }
        var d = __webpack_require__(47394)
          , f = __webpack_require__(2142)
          , _ = __webpack_require__(71869)
          , p = __webpack_require__(44701)
          , m = __webpack_require__(92631)
          , b = __webpack_require__(75270)
          , w = __webpack_require__(97451);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        const v = new class ChatList {
            constructor() {
                this.api = new ChatListApi,
                this.cachedHtml = "",
                this.inactiveChatsCounter = 0,
                this.inactiveChatsLoaded = !1,
                this.isUpdateRequired = !1,
                this.privateChats = {},
                this.publicChats = {},
                this.publicChatsInit = new PublicChatsInitializer(this),
                this.searchString = "",
                this.showInactiveChats = !1,
                this.pubsub = new d.x,
                this.fetchPrivateChats(),
                this.subscribeToUserChannel(),
                this.addEventListeners(),
                this.publicChatsInit.init(),
                this.state = (0,
                e.reactive)(this.getReactiveState()),
                this.updateTrigger = this.planStateUpdate.bind(this),
                this.updateFromCacheTrigger = this.updateStateFromCache.bind(this),
                this.cache = new c.L(this.updateFromCacheTrigger),
                setTimeout((()=>{
                    this.cachedHtml = this.cache.getOpenChatsHtml(),
                    this.cachedHtml && (this.updateReactiveState(),
                    setTimeout((()=>this.scrollAllOpenChats())))
                }
                ))
            }
            activateChat(e) {
                this.privateChats[e] ? (this.privateChats[e].activate(),
                this.inactiveChatsCounter--,
                this.updateReactiveState(),
                this.openDirectChatWithStaff(e)) : this.fetchPrivateChats(this.inactiveChatsLoaded)
            }
            addPublicChat(e) {
                this.publicChats[e.id] = e
            }
            async deactivateChat(e) {
                e.deactivate(),
                this.inactiveChatsCounter++;
                Object.values(this.privateChats).filter((t=>!t.isChatInitiationForm && e.isActive)).length || (this.showInactiveChats = !1),
                this.updateReactiveState()
            }
            async fetchPrivateChats(e=!1) {
                const {chats: t, inactive_chats_counter: s, participants: r} = await this.api.getChatsList(e);
                for (const a of t.direct)
                    if (!this.privateChats[a.id]) {
                        const e = this.cache.getChatCachedState(a.id);
                        await this.createPrivateChatInstance({
                            type: m.z.DIRECT,
                            chatDto: a,
                            participants: r,
                            cachedState: e
                        })
                    }
                for (const a of t.group)
                    if (!this.privateChats[a.id]) {
                        const e = this.cache.getChatCachedState(a.id);
                        await this.createPrivateChatInstance({
                            type: m.z.GROUP,
                            chatDto: a,
                            participants: r,
                            cachedState: e
                        })
                    }
                this.cache.getOpenClubChats().forEach((e=>{
                    const {avatarUrl: t, id: s, name: r} = e;
                    this.openClubChatPopout({
                        avatarUrl: t,
                        id: s,
                        name: r
                    }, e)
                }
                )),
                this.inactiveChatsCounter = s,
                this.inactiveChatsLoaded = e,
                this.removeObsoleteOpenChats(),
                await Promise.all(this.getListOfOpenChats().map((e=>e.loadMessages()))),
                this.loadOnlineStatus(),
                setTimeout((()=>{
                    this.cachedHtml = "",
                    this.updateReactiveState()
                }
                ), 50)
            }
            getListOfOpenChats() {
                return [...Object.values(this.privateChats), ...Object.values(this.publicChats).filter((e=>e.isPopout))].filter((e=>e.openedAt)).sort(((e,t)=>t.openedAt - e.openedAt))
            }
            getPanelList() {
                const e = this.searchString.trim().toLowerCase();
                return Object.values(this.privateChats).filter((e=>!e.isChatInitiationForm && (this.showInactiveChats || e.isActive))).filter((t=>{
                    var s;
                    return !e || (null == (s = t.name) ? void 0 : s.toLowerCase().includes(e))
                }
                )).sort(this.sortFilteredList)
            }
            async handleChatCreation(e) {
                const t = this.findTheSameChat(e)
                  , s = e.type === m.z.GROUP
                  , {DirectChat: r, GroupChat: a} = await this.provideChatModule()
                  , n = s ? new a(e,this.updateTrigger) : new r(e,this.updateTrigger);
                let i = !1;
                t && (n.users = t.users,
                t.openedAt && (t.close(),
                i = !0),
                delete this.privateChats[t.id]),
                this.privateChats[e.id] = n,
                i && n.open()
            }
            async loadOnlineStatus() {
                const e = (await this.getDirectChats()).map((e=>e.interlocutorId));
                if (!e.length)
                    return;
                const t = await this.api.getUsersOnlineStatus(e)
                  , s = {};
                t.users.forEach((e=>s[e.id] = "online" === e.status)),
                this.updateOnlineStatus(s)
            }
            setSearchString(e) {
                this.searchString = e,
                this.updateReactiveState()
            }
            async startDirectChat(e, t) {
                const s = (await this.getDirectChats()).find((t=>t.interlocutorId === e.id));
                return s ? (t && await s.sendMessage(t),
                void s.open()) : this.inactiveChatsLoaded ? void this.openEmptyPrivateChat({
                    message: t,
                    type: m.z.DIRECT,
                    user: e
                }) : (await this.fetchPrivateChats(!0),
                void this.startDirectChat(e, t))
            }
            startGroupChat() {
                const e = this.getGroupChatCreationForm();
                e && e.isMinimized ? e.maximize() : this.openEmptyPrivateChat({
                    type: m.z.GROUP
                })
            }
            toggleInactiveChats() {
                this.inactiveChatsLoaded ? (this.showInactiveChats = !this.showInactiveChats,
                this.updateReactiveState()) : this.fetchPrivateChats(!0).then((()=>this.toggleInactiveChats()))
            }
            async updateOnlineStatus(e) {
                (await this.getDirectChats()).filter((t=>"boolean" == typeof e[t.interlocutorId])).forEach((t=>t.updateOnlineStatus(e[t.interlocutorId])))
            }
            updateReactiveState() {
                const e = this.state
                  , t = this.getReactiveState();
                t.openChats.length && setTimeout((()=>this.checkOpenChatsLimit())),
                t.newMessages !== e.newMessages && this.cache.setNewMessages(t.newMessages),
                Object.assign(this.state, t)
            }
            updateStateFromCache() {
                Object.values(this.privateChats).forEach((e=>{
                    const t = this.cache.getChatCachedState(e.id);
                    t && e.updateStateFromCache(t)
                }
                )),
                this.updateReactiveState()
            }
            addEventListeners() {
                window.addEventListener("keydown", (({key: e})=>{
                    e === n._.KEY_ALT && this.getAllChats().forEach((e=>e.disableAutoScroll()))
                }
                )),
                window.addEventListener("keyup", (({key: e})=>{
                    e === n._.KEY_ALT && this.getAllChats().forEach((e=>e.enableAutoScroll()))
                }
                )),
                window.addEventListener("resize", (0,
                s.Z)((()=>{
                    this.checkOpenChatsLimit(),
                    this.checkOpenChatsHeight()
                }
                ), n._.WINDOW_RESIZE_DEBOUNCE)),
                window.addEventListener("message", (({data: e})=>{
                    if ((null == e ? void 0 : e.key) === w.U3.START_DIRECT_CHAT) {
                        const t = e.payload.message;
                        this.startDirectChat(e.payload, t)
                    }
                    if ((null == e ? void 0 : e.key) === l.OPEN_POPOUT_CLUB_CHAT) {
                        const {avatarUrl: t, chatId: s, name: r} = e;
                        this.openClubChatPopout({
                            avatarUrl: t,
                            id: s,
                            name: r
                        })
                    }
                }
                ))
            }
            checkOpenChatsHeight() {
                this.getListOfOpenChats().forEach((e=>e.checkWindowHeight()))
            }
            checkOpenChatsLimit() {
                const e = this.getListOfOpenChats().filter((e=>!e.isDetached()));
                if (e.reduce(((e,t)=>e + t.getWindowWidth()), 0) + n._.DEFAULT_CHAT_WINDOW_WIDTH > window.innerWidth && e.length > 1) {
                    const [t] = e.slice(-1);
                    t.close(),
                    this.checkOpenChatsLimit()
                } else if (1 === e.length) {
                    const t = e[0]
                      , s = window.innerWidth < t.getWindowWidth()
                      , r = t.getWindowWidth() < n._.MIN_CHAT_WINDOW_WIDTH;
                    (s || r) && t.setWindowWidth(window.innerWidth * n._.CHAT_WINDOW_WIDTH_ON_MOBILE)
                }
            }
            async createPrivateChatInstance({chatDto: e, type: t, participants: s, cachedState: r}) {
                var a;
                e.type = t,
                e.participants = {
                    [i.W]: f.L
                },
                null == (a = e.confirmations) || a.forEach((({user: t})=>{
                    (null == s ? void 0 : s[t]) && (e.participants[t] = s[t])
                }
                ));
                const {DirectChat: n, GroupChat: o} = await this.provideChatModule()
                  , c = new (t === m.z.DIRECT ? n : o)(e,this.updateTrigger);
                return r && c.updateStateFromCache(r),
                this.privateChats[e.id] = c,
                c
            }
            findTheSameChat(e) {
                if (this.privateChats[e.id])
                    return this.privateChats[e.id];
                const t = (e.confirmations || []).map((({user: e})=>e)).sort().join("")
                  , s = Object.values(this.privateChats).filter((e=>e.usersIds.sort().join("") === t));
                return s.length > 1 ? s.find((e=>e.type === m.z.DIRECT)) : s[0]
            }
            firePlannedStateUpdate() {
                this.isUpdateRequired && (this.updateReactiveState(),
                this.isUpdateRequired = !1)
            }
            getAllChats() {
                return [...Object.values(this.privateChats), ...Object.values(this.publicChats)]
            }
            async getDirectChats() {
                const e = Object.values(this.privateChats);
                if (0 === e.length)
                    return [];
                const {DirectChat: t} = await this.provideChatModule();
                return e.filter((e=>e instanceof t))
            }
            getGroupChatCreationForm() {
                return this.getListOfOpenChats().filter((e=>e.type === m.z.GROUP)).find((e=>e.isChatInitiationForm))
            }
            getNewMessagesCounter() {
                return Object.values(this.privateChats).filter((e=>e.isActive)).reduce(((e,t)=>e + t.getNewMessagesCounter()), 0)
            }
            getReactiveState() {
                return {
                    cachedHtml: this.cachedHtml,
                    inactiveChatsCounter: this.inactiveChatsCounter,
                    newMessages: this.getNewMessagesCounter(),
                    openChats: this.getListOfOpenChats(),
                    panel: this.getPanelList(),
                    showInactiveChats: this.showInactiveChats
                }
            }
            async openClubChatPopout({avatarUrl: e, id: t, name: s}, r) {
                const {ClubChat: a} = await this.provideChatModule()
                  , n = new a({
                    avatarUrl: e,
                    id: t,
                    isPopout: !0,
                    name: s,
                    showSidebar: !0,
                    forceTheme: "light",
                    chatListUpdateTrigger: this.updateTrigger
                });
                this.addPublicChat(n),
                r && n.updateStateFromCache(r),
                this.updateReactiveState()
            }
            async openEmptyPrivateChat(e) {
                const t = (new Date).toISOString()
                  , s = e.type === m.z.DIRECT ? `temporary-chat-with-${e.user.id}` : `temporary-group-chat-${Date.now()}`
                  , r = [{
                    user: i.W,
                    status: p.L.ACCEPTED
                }];
                e.type === m.z.DIRECT && r.push({
                    user: e.user.id,
                    status: p.L.PENDING
                });
                const a = {
                    active: !0,
                    channel: "",
                    confirmations: r,
                    created_at: t,
                    id: s,
                    isChatInitiationForm: !0,
                    participants: {},
                    type: e.type,
                    unread_count: 0,
                    updated_at: t
                }
                  , n = "user"in e ? {
                    [e.user.id]: e.user
                } : {}
                  , o = await this.createPrivateChatInstance({
                    chatDto: a,
                    type: e.type,
                    participants: n
                });
                o.open(),
                e.message && o.onFormConfirm(e.message)
            }
            planStateUpdate() {
                this.isUpdateRequired || (this.isUpdateRequired = !0,
                setTimeout((()=>this.firePlannedStateUpdate()), 50))
            }
            removeObsoleteOpenChats() {
                const e = "data-platform-chat-id";
                Array.from(document.querySelectorAll(`[${e}]`)).map((t=>t.getAttribute(e))).forEach((t=>{
                    var s;
                    !t || this.privateChats[t] || this.publicChats[t] || (null == (s = document.querySelector(`[${e}="${t}"]`)) || s.remove(),
                    this.cache.removeChat(t))
                }
                ))
            }
            scrollAllOpenChats() {
                const e = Array.from(document.querySelectorAll("[data-chat-messages-list]"));
                this.cachedHtml && !e.length && setTimeout((()=>this.scrollAllOpenChats()), 100),
                e.forEach((e=>{
                    e.scrollTop = e.scrollHeight
                }
                ))
            }
            sortFilteredList(e, t) {
                return t.newMessages && !e.newMessages ? 1 : e.newMessages && !t.newMessages ? -1 : t.isStatusPending() ? 1 : e.isStatusPending() ? -1 : t.lastMessageTimestamp > e.lastMessageTimestamp ? 1 : -1
            }
            subscribeToUserChannel() {
                this.pubsub.subscribe(this.pubsub.getPersonalChannel(i.W), [{
                    types: [b.p.MessageTypes.ACTIVATED],
                    callback: ({data: e})=>this.activateChat(e.id)
                }, {
                    types: [b.p.MessageTypes.CREATE],
                    callback: ({data: e})=>this.handleChatCreation(e)
                }, {
                    types: [b.p.MessageTypes.UPDATE],
                    callback: ({data: e})=>this.updatePrivateChatConfirmations(e.id, e.confirmations || [])
                }])
            }
            updatePrivateChatConfirmations(e, t) {
                var s;
                null == (s = this.privateChats[e]) || s.updateConfirmations(t)
            }
            openDirectChatWithStaff(e) {
                setTimeout((()=>{
                    const t = this.privateChats[e]
                      , s = "isDirect"in t && t.isDirect
                      , r = t.getInterlocutors().some((e=>e.isStaff));
                    s && !_.h && r && t.open()
                }
                ), 1e3)
            }
            async provideChatModule() {
                const [{ClubChat: e},{DirectChat: t},{GroupChat: s}] = await Promise.all([Promise.all([__webpack_require__.e(116), __webpack_require__.e(493), __webpack_require__.e(522), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 51401)), Promise.all([__webpack_require__.e(116), __webpack_require__.e(493), __webpack_require__.e(522), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 87695)), Promise.all([__webpack_require__.e(116), __webpack_require__.e(493), __webpack_require__.e(522), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 24776))]);
                return {
                    ClubChat: e,
                    DirectChat: t,
                    GroupChat: s
                }
            }
        }
        ;
        window.chesscom.chatList = v,
        (0,
        t.o)({
            key: l.CHAT_LIST_LOADED
        });
        let k = !1;
        setTimeout((async()=>{
            (0,
            e.watch)(v.state, (async()=>{
                if (!k && (v.state.openChats.length > 0 || v.state.cachedHtml)) {
                    k = !0;
                    const {mount: e} = await Promise.all([__webpack_require__.e(116), __webpack_require__.e(493), __webpack_require__.e(522), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 14640));
                    e(v)
                }
            }
            ))
        }
        ))
    }()
}();
