window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
    web_fcm_callback_register: {
        tokens: [["text", "/callback/fcm/register"]],
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
    web_fcm_callback_browser_permission_request: {
        tokens: [["text", "/callback/fcm/browser-permission-request"]],
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
(("undefined" != typeof self ? self : this).wpChessCom_Yybx = ("undefined" != typeof self ? self : this).wpChessCom_Yybx || []).push([[1753], {
    41128: function(e, t, s) {
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
        let o;
        function getAmplitude() {
            var e;
            return (null == (e = window.chesscom) ? void 0 : e.amplitude) ? window.chesscom.amplitude : (o || (o = s.e(3790).then(s.t.bind(s, 63790, 23)).then((({default: e})=>{
                var t, s, o, i;
                const {user: c, amplitudeKey: r} = window.context || {}
                  , a = c && !c.isGuest ? c.id : null
                  , u = {
                    includeUtm: !0,
                    includeReferrer: !0,
                    includeGclid: !0,
                    saveParamsReferrerOncePerSession: !1
                };
                if (null == (s = null == (t = window.chesscom) ? void 0 : t.features) ? void 0 : s.includes("amplitude_domain_proxy")) {
                    ["www.chess.com", "www.chess-4.com"].includes(window.location.hostname) && (u.apiEndpoint = window.location.hostname.replace("www", "amplitude"))
                }
                if (e.getInstance().init(r, null, u),
                e.getInstance().setUserId(a),
                null == (i = null == (o = window.chesscom) ? void 0 : o.features) ? void 0 : i.includes("marketing_middleware_serverside_device_id_generation")) {
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
            o)
        }
    },
    22163: function(e, t, s) {
        s.d(t, {
            t: function() {
                return incrementUserProperties
            }
        });
        var n = s(41128)
          , o = s(50547);
        async function incrementUserProperties(e) {
            const t = await (0,
            n.U)();
            if (null == e)
                return;
            const s = new t.Identify;
            (0,
            o.Z)(e, ((e,t)=>{
                s.add(t, e)
            }
            )),
            t.getInstance().identify(s)
        }
    },
    93989: function(e, t, s) {
        s.d(t, {
            K: function() {
                return logEvent
            }
        });
        var n = s(41128)
          , o = s(22163)
          , i = s(14300);
        async function logEvent(e, t, s, c) {
            const r = await (0,
            n.U)();
            await (0,
            i.j)(s),
            await (0,
            o.t)(c),
            r.getInstance().logEvent(e, t || {})
        }
    },
    14300: function(e, t, s) {
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
    50547: function(e, t, s) {
        var n = s(92414);
        t.Z = n.Z
    },
    48204: function(e, t, s) {
        s.r(t),
        s.d(t, {
            requestHandler: function() {
                return requestHandler
            }
        });
        var n = s(5752)
          , o = s(423)
          , i = s(93989);
        var c = s(32793);
        const r = {
            apiKey: "AIzaSyAoMkjy3zKkqAcPqb2tazB-IOe98QR9psc",
            authDomain: "chesscom.firebaseapp.com",
            databaseURL: "https://chesscom.firebaseio.com",
            projectId: "chesscom",
            storageBucket: "chesscom.appspot.com",
            messagingSenderId: "27129061667",
            appId: "1:27129061667:web:0099c30132ad07e0d22c96"
        }
          , a = "BD1OOymDvZcsnbr0x6yb4QQFP29QOC1e_UzFXNQ1Km5F1K-KinJjBZW86K6_huzwMklH0hJSVXOyoax3RiKULLM";
        var u = s(87074)
          , d = s(90425);
        s(95928);
        let l = null
          , w = "";
        function getMessagingToken(e=!0) {
            l.getToken().then((e=>{
                e && u.Z.post(d.Z.generate("web_fcm_callback_register"), {
                    token: e,
                    browser: `${(0,
                    c.qs)().name}${(0,
                    c.qs)().version}`
                })
            }
            )).catch((()=>{
                e && getMessagingToken(!1)
            }
            ))
        }
        function requestPermission() {
            const e = "default" === Notification.permission;
            Notification.requestPermission().then((t=>{
                const s = "granted" === t;
                s && getMessagingToken(),
                e && "default" !== t && async function logNotificationBrowserPromptClick(e) {
                    window.chesscom.features.includes("notification_modal_amplitude") && await (0,
                    i.K)("Notifs System Prompt Clicked", {
                        buttonClicked: e ? "allowNotifs" : "blockNotifs"
                    }, {
                        pushNotifsEnabled: e
                    })
                }(s)
            }
            ))
        }
        function customDialogShown(e) {
            u.Z.post(d.Z.generate("web_fcm_callback_browser_permission_request"), {
                allowed: e
            })
        }
        function requestHandler(e) {
            e === o.U3.NOTIFICATIONS_REQUEST_CONFIRM && (customDialogShown(!0),
            requestPermission()),
            e === o.U3.NOTIFICATIONS_REQUEST_DECLINE && customDialogShown(!1)
        }
        window.context.user && async function boot() {
            const e = await function registerWorker() {
                const e = window.Config.pathToFCMWorker;
                if (e)
                    return navigator.serviceWorker.register(e).catch((()=>!1))
            }();
            e && (n.ZP.initializeApp(r),
            l = n.ZP.messaging(),
            l.usePublicVapidKey(a),
            l.useServiceWorker(e),
            o.zC && o.zC.forEach((e=>{
                e.allowed && requestPermission()
            }
            )),
            l.onTokenRefresh((()=>{
                getMessagingToken()
            }
            )),
            l.onMessage((({data: e})=>{
                if (void 0 === e)
                    return;
                const t = e.body + e.link;
                if (t === w)
                    return;
                w = t;
                const s = {
                    body: e.body,
                    icon: e.icon
                };
                new Notification(e.title,s).onclick = ()=>{
                    window.open(e.link, "_blank")
                }
            }
            )))
        }()
    }
}]);
