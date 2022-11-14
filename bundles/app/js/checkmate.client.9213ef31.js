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
    }
}),
function() {
    var e, t, s, a, r, n, o = {
        84606: function(e, t) {
            var s, a, r, n;
            n = function() {
                "use strict";
                var e = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s)
                            Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
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
                            var a = t[s];
                            a.enumerable = a.enumerable || !1,
                            a.configurable = !0,
                            "value"in a && (a.writable = !0),
                            Object.defineProperty(e, a.key, a)
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
                var a = function() {
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
                        value: function buildQueryParams(e, s, a) {
                            var r = this
                              , n = void 0
                              , o = new RegExp(/\[\]$/);
                            if (s instanceof Array)
                                s.forEach((function(s, n) {
                                    o.test(e) ? a(e, s) : r.buildQueryParams(e + "[" + ("object" === (void 0 === s ? "undefined" : t(s)) ? n : "") + "]", s, a)
                                }
                                ));
                            else if ("object" === (void 0 === s ? "undefined" : t(s)))
                                for (n in s)
                                    this.buildQueryParams(e + "[" + n + "]", s[n], a);
                            else
                                a(e, s)
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
                            var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                              , r = this.getRoute(t)
                              , n = s || {}
                              , o = e({}, n)
                              , c = ""
                              , i = !0
                              , u = ""
                              , h = void 0 === this.getPort() || null === this.getPort() ? "" : this.getPort();
                            if (r.tokens.forEach((function(e) {
                                if ("text" === e[0])
                                    return c = Router2.encodePathComponent(e[1]) + c,
                                    void (i = !1);
                                if ("variable" !== e[0])
                                    throw new Error('The token type "' + e[0] + '" is not supported.');
                                var s = r.defaults && e[3]in r.defaults;
                                if (!1 === i || !s || e[3]in n && n[e[3]] != r.defaults[e[3]]) {
                                    var a = void 0;
                                    if (e[3]in n)
                                        a = n[e[3]],
                                        delete o[e[3]];
                                    else {
                                        if (!s) {
                                            if (i)
                                                return;
                                            throw new Error('The route "' + t + '" requires the parameter "' + e[3] + '".')
                                        }
                                        a = r.defaults[e[3]]
                                    }
                                    if (!0 !== a && !1 !== a && "" !== a || !i) {
                                        var u = Router2.encodePathComponent(a);
                                        "null" === u && null === a && (u = ""),
                                        c = e[1] + u + c
                                    }
                                    i = !1
                                } else
                                    s && e[3]in o && delete o[e[3]]
                            }
                            )),
                            "" === c && (c = "/"),
                            r.hosttokens.forEach((function(e) {
                                var t = void 0;
                                "text" !== e[0] ? "variable" === e[0] && (e[3]in n ? (t = n[e[3]],
                                delete o[e[3]]) : r.defaults && e[3]in r.defaults && (t = r.defaults[e[3]]),
                                u = e[1] + t + u) : u = e[1] + u
                            }
                            )),
                            c = this.context_.base_url + c,
                            r.requirements && "_scheme"in r.requirements && this.getScheme() != r.requirements._scheme) {
                                var l = u || this.getHost();
                                c = r.requirements._scheme + "://" + l + (l.indexOf(":" + h) > -1 || "" === h ? "" : ":" + h) + c
                            } else if (void 0 !== r.schemes && void 0 !== r.schemes[0] && this.getScheme() !== r.schemes[0]) {
                                var d = u || this.getHost();
                                c = r.schemes[0] + "://" + d + (d.indexOf(":" + h) > -1 || "" === h ? "" : ":" + h) + c
                            } else
                                u && this.getHost() !== u + (u.indexOf(":" + h) > -1 || "" === h ? "" : ":" + h) ? c = this.getScheme() + "://" + u + (u.indexOf(":" + h) > -1 || "" === h ? "" : ":" + h) + c : !0 === a && (c = this.getScheme() + "://" + this.getHost() + (this.getHost().indexOf(":" + h) > -1 || "" === h ? "" : ":" + h) + c);
                            if (Object.keys(o).length > 0) {
                                var k = void 0
                                  , w = []
                                  , m = function add2(e, t) {
                                    t = null === (t = "function" == typeof t ? t() : t) ? "" : t,
                                    w.push(Router2.encodeQueryComponent(e) + "=" + Router2.encodeQueryComponent(t))
                                };
                                for (k in o)
                                    this.buildQueryParams(k, o[k], m);
                                c = c + "?" + w.join("&")
                            }
                            return c
                        }
                    }], [{
                        key: "getInstance",
                        value: function getInstance() {
                            return r
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
                a.Route,
                a.Context;
                var r = new a;
                return {
                    Router: a,
                    Routing: r
                }
            }(),
            a = [],
            s = n.Routing,
            void 0 === (r = "function" == typeof s ? s.apply(t, a) : s) || (e.exports = r)
        },
        52439: function(e, t, s) {
            e.exports = s(84474)(110)
        },
        86437: function(e, t, s) {
            e.exports = s(84474)(279)
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
        }
    }, c = {};
    function __webpack_require__(e) {
        var t = c[e];
        if (void 0 !== t)
            return t.exports;
        var s = c[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return o[e].call(s.exports, s, s.exports, __webpack_require__),
        s.loaded = !0,
        s.exports
    }
    __webpack_require__.m = o,
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
        if (48 === e)
            return "web.chunk.client.5c36f0d1.js"
    }
    ,
    __webpack_require__.miniCssF = function(e) {
        if (532 === e)
            return "checkmate.client.13c05815.css"
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
    e = {},
    t = "client:",
    __webpack_require__.l = function(s, a, r, n) {
        if (e[s])
            e[s].push(a);
        else {
            var o, c;
            if (void 0 !== r)
                for (var i = document.getElementsByTagName("script"), u = 0; u < i.length; u++) {
                    var h = i[u];
                    if (h.getAttribute("src") == s || h.getAttribute("data-webpack") == t + r) {
                        o = h;
                        break
                    }
                }
            o || (c = !0,
            (o = document.createElement("script")).charset = "utf-8",
            o.timeout = 120,
            __webpack_require__.nc && o.setAttribute("nonce", __webpack_require__.nc),
            o.setAttribute("data-webpack", t + r),
            o.src = s),
            e[s] = [a];
            var onScriptComplete = function(t, a) {
                o.onerror = o.onload = null,
                clearTimeout(l);
                var r = e[s];
                if (delete e[s],
                o.parentNode && o.parentNode.removeChild(o),
                r && r.forEach((function(e) {
                    return e(a)
                }
                )),
                t)
                    return t(a)
            }
              , l = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: o
            }), 12e4);
            o.onerror = onScriptComplete.bind(null, o.onerror),
            o.onload = onScriptComplete.bind(null, o.onload),
            c && document.head.appendChild(o)
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
    s = __webpack_require__.u,
    a = __webpack_require__.e,
    r = new Map,
    n = new Map,
    __webpack_require__.u = function(e) {
        return s(e) + (r.has(e) ? "?" + r.get(e) : "")
    }
    ,
    __webpack_require__.e = function(e) {
        return a(e).catch((function(t) {
            var a = n.has(e) ? n.get(e) : 2;
            if (a < 1) {
                var o = s(e);
                throw t.message = "Loading chunk " + e + " failed after 2 retries.\n(" + o + ")",
                t.request = o,
                t
            }
            return new Promise((function(t) {
                setTimeout((function() {
                    var s = "cache-bust=true&retry-attempt=" + (2 - a + 1);
                    r.set(e, s),
                    n.set(e, a - 1),
                    t(__webpack_require__.e(e))
                }
                ), 0)
            }
            ))
        }
        ))
    }
    ,
    function() {
        var e = {
            532: 0
        };
        __webpack_require__.f.j = function(t, s) {
            var a = __webpack_require__.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a)
                    s.push(a[2]);
                else {
                    var r = new Promise((function(s, r) {
                        a = e[t] = [s, r]
                    }
                    ));
                    s.push(a[2] = r);
                    var n = __webpack_require__.p + __webpack_require__.u(t)
                      , o = new Error;
                    __webpack_require__.l(n, (function(s) {
                        if (__webpack_require__.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0),
                        a)) {
                            var r = s && ("load" === s.type ? "missing" : s.type)
                              , n = s && s.target && s.target.src;
                            o.message = "Loading chunk " + t + " failed.\n(" + r + ": " + n + ")",
                            o.name = "ChunkLoadError",
                            o.type = r,
                            o.request = n,
                            a[1](o)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var webpackJsonpCallback = function(t, s) {
            var a, r, n = s[0], o = s[1], c = s[2], i = 0;
            if (n.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (a in o)
                    __webpack_require__.o(o, a) && (__webpack_require__.m[a] = o[a]);
                if (c)
                    c(__webpack_require__)
            }
            for (t && t(s); i < n.length; i++)
                r = n[i],
                __webpack_require__.o(e, r) && e[r] && e[r][0](),
                e[r] = 0
        }
          , t = ("undefined" != typeof self ? self : this).wpChessCom_ivp1 = ("undefined" != typeof self ? self : this).wpChessCom_ivp1 || [];
        t.forEach(webpackJsonpCallback.bind(null, 0)),
        t.push = webpackJsonpCallback.bind(null, t.push.bind(t))
    }(),
    function() {
        "use strict";
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
        var e, t, s = new class CacheService {
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
        ("json_settings"), a = __webpack_require__(89402), r = __webpack_require__.n(a);
        const n = "fr_FR" === (null == (t = null == (e = window.context) ? void 0 : e.i18n) ? void 0 : t.locale);
        r().placeHolderPrefix = "",
        r().placeHolderSuffix = "";
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
          , trans = (e,t,s)=>r().trans(getTranslatedPhrase(e, s), escapeParameters(t), s)
          , transChoice = (e,t,s,a)=>{
            if (void 0 === t)
                return "";
            const o = getTranslatedPhrase(e, a)
              , c = escapeParameters(s);
            return n ? function frenchTransChoice(e, t, s, a) {
                const [n,o,c] = e.split("|").map((e=>e.trim()));
                if (0 === t || 1 === t)
                    return r().trans(n, s, a);
                if (t % 1e6 == 0)
                    return r().trans(o, s, a);
                return r().trans(c, s, a)
            }(o, t, c, a) : r().transChoice(o, t, c)
        }
        ;
        const o = {
            trans: trans,
            transChoice: transChoice
        };
        var c = {
            methods: {
                $trans: trans,
                $transChoice: transChoice
            }
        }
          , i = __webpack_require__(52439)
          , u = Object.defineProperty
          , h = Object.defineProperties
          , l = Object.getOwnPropertyDescriptors
          , d = Object.getOwnPropertySymbols
          , k = Object.prototype.hasOwnProperty
          , w = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,s)=>t in e ? u(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s
          , __spreadValues = (e,t)=>{
            for (var s in t || (t = {}))
                k.call(t, s) && __defNormalProp(e, s, t[s]);
            if (d)
                for (var s of d(t))
                    w.call(t, s) && __defNormalProp(e, s, t[s]);
            return e
        }
        ;
        i.default.mixin(c);
        const instantiate = e=>{
            return new i.default((t = __spreadValues({}, e),
            s = {
                el: e.el,
                render: t=>t(e.component, {
                    props: e.propsData
                }),
                store: e.store
            },
            h(t, l(s))));
            var t, s
        }
        ;
        var m = __webpack_require__(84606)
          , b = __webpack_require__.n(m);
        function getRouting() {
            return b()
        }
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        var f = new class router_Router {
            generate(e, t, s) {
                const a = t || {};
                "string" == typeof a.username && (a.username = a.username.toLowerCase()),
                function copyRoute(e) {
                    var t, s, a;
                    const r = getRouting();
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
                        } catch (n) {}
                        if (Object.isFrozen(r.routes_) && (r.routes_ = Object.assign({}, r.routes_)),
                        null == (s = null == (t = window.chesscom) ? void 0 : t.routes) ? void 0 : s[e]) {
                            const t = window.chesscom.routes[e]
                              , s = ".chess-dev.com"
                              , n = window.location.host.replace(/^[^.]+/, "");
                            n && (null == (a = t.hosttokens) || a.forEach((e=>{
                                e.forEach(((t,a)=>{
                                    t.includes(s) && (e[a] = t.replace(s, n))
                                }
                                ))
                            }
                            ))),
                            r.routes_[e] = t
                        }
                    }
                }(e);
                try {
                    return getRouting().generate(e, a, s)
                } catch (r) {
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
          , _ = __webpack_require__(23992)
          , p = __webpack_require__(86437)
          , v = (0,
        _.defineComponent)({
            name: "BottomBanner",
            components: {
                V5Button: p.V5Button
            },
            props: {
                additionalButtonText: String,
                additionalButtonAction: Function,
                hide: {
                    type: Function,
                    required: !0
                },
                icon: String,
                iconColor: String,
                message: {
                    type: String,
                    required: !0
                },
                show: {
                    type: Boolean,
                    required: !0
                }
            }
        })
          , y = {
            component: "bottom-banner-component",
            button: "bottom-banner-button",
            content: "bottom-banner-content",
            close: "bottom-banner-close",
            icon: "bottom-banner-icon",
            orange: "bottom-banner-orange",
            blue: "bottom-banner-blue",
            wrapper: "bottom-banner-wrapper"
        };
        function normalizeComponent(e, t, s, a, r, n, o, c) {
            var i, u = "function" == typeof e ? e.options : e;
            if (t && (u.render = t,
            u.staticRenderFns = s,
            u._compiled = !0),
            a && (u.functional = !0),
            n && (u._scopeId = "data-v-" + n),
            o ? (i = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                r && r.call(this, e),
                e && e._registeredComponents && e._registeredComponents.add(o)
            }
            ,
            u._ssrRegister = i) : r && (i = c ? function() {
                r.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot)
            }
            : r),
            i)
                if (u.functional) {
                    u._injectStyles = i;
                    var h = u.render;
                    u.render = function renderWithStyleInjection(e, t) {
                        return i.call(t),
                        h(e, t)
                    }
                } else {
                    var l = u.beforeCreate;
                    u.beforeCreate = l ? [].concat(l, i) : [i]
                }
            return {
                exports: e,
                options: u
            }
        }
        var g = normalizeComponent(v, (function() {
            var e = this
              , t = e.$createElement
              , s = e._self._c || t;
            return e.show ? s("div", {
                class: e.$style.component
            }, [s("div", {
                class: e.$style.wrapper
            }, [s("div", {
                class: e.$style.content
            }, [e.icon ? s("span", {
                class: ["icon-font-chess", e.icon, e.$style.icon, e.$style[e.iconColor]]
            }) : e._e(), e._v(" "), s("span", {
                class: e.$style.message,
                domProps: {
                    innerHTML: e._s(e.message)
                }
            })]), e._v(" "), e.additionalButtonText ? s("v5-button", {
                class: e.$style.button,
                attrs: {
                    size: "small",
                    theme: "primary"
                },
                domProps: {
                    textContent: e._s(e.additionalButtonText)
                },
                on: {
                    click: e.additionalButtonAction
                }
            }) : e._e()], 1), e._v(" "), s("button", {
                class: e.$style.close,
                on: {
                    click: e.hide
                }
            }, [s("span", {
                staticClass: "icon-font-chess x"
            })])]) : e._e()
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = y.locals || y
        }
        ), null, null)
          , z = g.exports
          , x = o;
        const routes_membership = e=>f.generate("web_membership", {
            c: e
        })
          , j = "checkmate"
          , q = x.trans('We notice you are using an ad blocker. Please consider supporting Chess.com by <a href="%link%" target="_blank">upgrading</a> your account. Thanks!', {
            "%link%": routes_membership("ad-blocker")
        });
        function is_logged_in_isLoggedIn() {
            var e;
            return Boolean((null == (e = window.context) ? void 0 : e.user) && !(-1 !== window.location.href.indexOf(f.generate("web_2fa_login"))))
        }
        var C, O, R, B;
        null == (O = null == (C = window.chesscom) ? void 0 : C.features) || O.includes("blogs_modern_featuring_write"),
        null == (B = null == (R = window.context) ? void 0 : R.csrf) || B.token,
        window.context && window.context.locale,
        window.context && window.context.user,
        window.context && window.context.user && window.context.user.username,
        x.trans("Comment count will be recalculated in few moments"),
        x.trans("Sunday"),
        x.trans("Monday"),
        x.trans("Tuesday"),
        x.trans("Wednesday"),
        x.trans("Thursday"),
        x.trans("Friday"),
        x.trans("Saturday"),
        x.trans("Loading..."),
        x.trans("January"),
        x.trans("February"),
        x.trans("March"),
        x.trans("April"),
        x.trans("May"),
        x.trans("June"),
        x.trans("July"),
        x.trans("August"),
        x.trans("September"),
        x.trans("October"),
        x.trans("November"),
        x.trans("December"),
        x.trans("Jan"),
        x.trans("Feb"),
        x.trans("Mar"),
        x.trans("Apr"),
        x.trans("May"),
        x.trans("Jun"),
        x.trans("Jul"),
        x.trans("Aug"),
        x.trans("Sep"),
        x.trans("Oct"),
        x.trans("Nov"),
        x.trans("Dec"),
        x.trans("No results found."),
        x.trans("More"),
        x.trans("Less"),
        x.trans("Let me help you learn everything you need to know with this guide."),
        x.trans("Your next lesson is ready. Study daily if you really want to improve!"),
        x.trans("Let me help you improve your openings!"),
        f.generate("web_security_login_and_go");
        const P = "dark-mode"
          , getIsDarkMode = ()=>document.body.classList.contains(P)
          , S = (getIsDarkMode(),
        5)
          , E = 6
          , T = 7
          , H = 8
          , M = 10
          , I = 20
          , W = 30
          , A = 40
          , $ = 50
          , L = 80
          , K = 90;
        Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
        x.trans("Membership Icons"),
        x.trans("Emoji"),
        x.trans("Chess"),
        x.trans("Holiday"),
        x.trans("Hosts"),
        x.trans("Computer Chess"),
        x.trans("PRO Chess League"),
        x.trans("Nothing"),
        x.trans("Nothing"),
        x.trans("Accept Friend Request"),
        x.trans("Add Friend"),
        x.trans("Block"),
        x.trans("Are you sure you want to block this user?"),
        x.trans("Cancel"),
        x.trans("Cancel Friend Request"),
        x.trans("Challenge"),
        x.trans("Follow"),
        x.trans("Game Archive"),
        x.trans("Gift Membership"),
        x.trans("Give Award"),
        x.trans("Moderator"),
        x.trans("Online Now"),
        x.trans("In Live"),
        x.trans("Remove Friend"),
        x.trans("Are you sure you want to remove this friend from your list?"),
        x.trans("Report"),
        x.trans("Send Message"),
        x.trans("Show your flair!"),
        x.trans("Staff"),
        x.trans("Unblock"),
        x.trans("Unfollow"),
        x.trans("Tell us more..."),
        x.trans("Basic Membership"),
        x.trans("Diamond Membership"),
        x.trans("Closed: Fair Play"),
        x.trans("Closed: Abuse"),
        x.trans("Closed: Inactive"),
        x.trans("Account Closed"),
        x.trans("Gold Membership"),
        x.trans("Moderator Account"),
        x.trans("Platinum Membership"),
        x.trans("Silver Membership"),
        x.trans("Staff Account"),
        x.trans("Grandmaster"),
        x.trans("Woman Grandmaster"),
        x.trans("International Master"),
        x.trans("Woman International Master"),
        x.trans("FIDE Master"),
        x.trans("Woman FIDE Master"),
        x.trans("National Master"),
        x.trans("FIDE Candidate Master"),
        x.trans("FIDE Woman Candidate Master"),
        x.trans("Woman National Master");
        window.context;
        var F = (0,
        _.defineComponent)({
            name: "AdblockerCheck",
            components: {
                BottomBanner: z
            },
            setup() {
                var e, t;
                const a = Date.now() + 6048e5
                  , r = (null != (t = null == (e = window.context.user) ? void 0 : e.membershipLevel) ? t : 0) < 30
                  , n = (0,
                _.ref)(is_logged_in_isLoggedIn() && r);
                return {
                    hide: ()=>{
                        s.set("adblockerMessageExpiration", a),
                        n.value = !1
                    }
                    ,
                    isVisible: n,
                    message: q
                }
            }
        });
        const D = ((e={})=>{
            const t = {}
              , createInstance = (s,a={})=>e[s] && Object.keys(e[s]).length ? (t[s] = t[s] || instantiate(__spreadValues(__spreadValues({}, e[s]), a)),
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
        )({
            AdblockerCheck: {
                component: normalizeComponent(F, (function() {
                    var e = this
                      , t = e.$createElement;
                    return (e._self._c || t)("bottom-banner", {
                        attrs: {
                            icon: "membership-diamond",
                            "icon-color": "blue",
                            hide: e.hide,
                            message: e.message,
                            show: e.isVisible
                        }
                    })
                }
                ), [], !1, null, null, null).exports,
                el: `#${j}`
            }
        });
        document.getElementById(j) && !window.location.pathname.includes(f.generate("web_membership")) && window.setTimeout((function showAdblockerBanner() {
            const e = Date.now()
              , t = document.querySelector("body")
              , a = document.createElement("div");
            if (a.innerHTML = "&nbsp;",
            a.className = "adsbox",
            t.appendChild(a),
            0 === a.offsetHeight) {
                if (t.classList.add("adblock"),
                s.get("adblockerMessageExpiration") > e)
                    return;
                D.createInstance("AdblockerCheck")
            }
            a.parentNode.removeChild(a)
        }
        ), 100)
    }()
}();
