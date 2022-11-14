window.chesscom = window.chesscom || {},
window.chesscom.routes = window.chesscom.routes || {},
Object.assign(window.chesscom.routes, {
    web_classroom_room: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/classroom"]],
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
    i18n_web_classroom_room: {
        tokens: [["variable", "/", "[^/]++", "id"], ["text", "/classroom"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
    web_insights: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/insights"]],
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
    i18n_web_insights: {
        tokens: [["variable", "/", "[^/]++", "username"], ["text", "/insights"], ["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]],
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
(("undefined" != typeof self ? self : this).wpChessCom_Yybx = ("undefined" != typeof self ? self : this).wpChessCom_Yybx || []).push([[468], {
    62259: function(e, t, n) {
        "use strict";
        const s = n(87074).Z.create({
            withCredentials: !0
        });
        t.Z = s
    },
    25387: function(e, t, n) {
        "use strict";
        n.d(t, {
            n: function() {
                return publish
            }
        });
        var s = n(62259);
        async function publish(e) {
            var t;
            let n = window.PubSub.options.url[e.service || "base"];
            const r = e.path instanceof Array ? e.path.join("/") : e.path;
            n.endsWith("/") || r.startsWith("/") || (n += "/");
            const i = {};
            ["staging", "prod"].includes("staging") || (i.uid = null == (t = window.context.user) ? void 0 : t.uuid),
            e.params && Object.assign(i, e.params);
            const o = {};
            return e.requestId && (o["x-chesscom-request-id-client"] = e.requestId),
            e.clientId && (o["x-chesscom-play-client"] = e.clientId),
            e.headers && Object.assign(o, e.headers),
            (0,
            s.Z)({
                url: /^http[s]?:/.test(r) ? r : `${n}${r}`,
                data: e.data,
                method: e.method || "post",
                params: i,
                headers: o,
                withCredentials: !0
            })
        }
    },
    298: function(e, t) {
        "use strict";
        let n = 100;
        function delayedAction(e, t) {
            setTimeout((()=>{
                e in window.toaster ? (n = 0,
                window.toaster[e](t)) : (n *= 2,
                delayedAction(e, t))
            }
            ), n)
        }
        t.Z = window.toaster || {
            add(e) {
                delayedAction("add", e)
            },
            remove(e) {
                delayedAction("remove", e)
            }
        }
    },
    16155: function(e, t, n) {
        "use strict";
        n.d(t, {
            t: function() {
                return hideNotifications
            }
        });
        var s = n(15291)
          , r = n(298)
          , i = n(59051)
          , o = n(57643)
          , a = n(7943);
        function hideNotifications(e) {
            o.w.notifications.filter((t=>!e || (!e.keys || e.keys.every((e=>t.keys.includes(e)))) && (!e.type || e.type === t.type) && (!e.id || e.id === t.id))).forEach((e=>{
                e.type === i.k.Toaster ? r.Z.remove(e.id) : e.type === i.k.Alert && (0,
                s.OD)(e.id),
                (0,
                a.A)(o.w.notifications, e)
            }
            ))
        }
    },
    22848: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return showError
            }
        });
        var s = n(53574)
          , r = n(59051)
          , i = Object.defineProperty
          , o = Object.getOwnPropertySymbols
          , a = Object.prototype.hasOwnProperty
          , c = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,n)=>t in e ? i(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        function showAlert(e) {
            (0,
            s.c)(((e,t)=>{
                for (var n in t || (t = {}))
                    a.call(t, n) && __defNormalProp(e, n, t[n]);
                if (o)
                    for (var n of o(t))
                        c.call(t, n) && __defNormalProp(e, n, t[n]);
                return e
            }
            )({
                type: r.k.Alert
            }, e))
        }
        function showError(e) {
            showAlert({
                duration: 1e4,
                theme: "error",
                content: e
            })
        }
    },
    53574: function(e, t, n) {
        "use strict";
        n.d(t, {
            c: function() {
                return showNotification
            }
        });
        var s = n(15291)
          , r = n(298)
          , i = n(16155)
          , o = n(59051)
          , a = n(57643)
          , c = n(54752)
          , u = n.n(c);
        function showNotification(e) {
            var t, n, c, l, d, h;
            const b = {
                type: null != (t = e.type) ? t : o.k.Alert,
                keys: null != (n = e.keys) ? n : [],
                id: u()()
            };
            e.unique && (0,
            i.t)({
                type: e.type,
                keys: e.keys
            }),
            e.duration && setTimeout(i.t, e.duration, {
                id: b.id
            }),
            b.type === o.k.Toaster ? null == (d = r.Z) || d.add({
                id: b.id,
                duration: e.duration,
                content: null != (c = e.content) ? c : "",
                theme: null != (l = e.theme) ? l : "info",
                icon: e.icon,
                links: e.links,
                avatarUrl: e.avatarUrl
            }) : b.type === o.k.Alert && (0,
            s.el)({
                id: b.id,
                type: e.theme || "info",
                message: null != (h = e.content) ? h : ""
            }),
            a.w.notifications.push(b)
        }
    },
    59051: function(e, t, n) {
        "use strict";
        n.d(t, {
            k: function() {
                return s
            }
        });
        var s = (e=>(e[e.Toaster = 0] = "Toaster",
        e[e.Alert = 1] = "Alert",
        e))(s || {})
    },
    57643: function(e, t, n) {
        "use strict";
        n.d(t, {
            w: function() {
                return s
            }
        });
        const s = {
            notifications: []
        }
    },
    16399: function(e, t, n) {
        "use strict";
        function loadLazyStyle(e) {
            const t = document.querySelector(`link[data-href*="/${e}.client"]`);
            t && (t.setAttribute("href", t.getAttribute("data-href")),
            t.removeAttribute("data-href"))
        }
        n.d(t, {
            E: function() {
                return loadLazyStyle
            }
        })
    },
    14164: function(e, t, n) {
        "use strict";
        n.d(t, {
            i: function() {
                return getMessageFromError
            }
        });
        var s = n(49790);
        n(18160);
        const getMessageFromError = e=>{
            if (e.response && 401 !== e.response.status)
                return (e.response.data && e.response.data.message ? e.response.data.message : s.R0.badRequest) || e.response.statusText
        }
    },
    49790: function(e, t, n) {
        "use strict";
        n.d(t, {
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
        var s = n(18160);
        const r = 7e3
          , i = {
            badRequest: s.Z.trans("Oops. Looks like there was an error. Sorry! Please refresh.")
        }
          , o = {
            avatarUploaded: s.Z.trans("Avatar uploaded"),
            commentCreated: s.Z.trans("Thank you for your comment."),
            commentDeleted: s.Z.trans("Comment deleted."),
            commentEmptyContent: s.Z.trans("You cannot send an empty comment"),
            commentUpdated: s.Z.trans("Comment updated."),
            commentLinkCopied: s.Z.trans("Comment link is copied to clipboard"),
            copied: s.Z.trans("Copied to clipboard"),
            forumsMarkedAsRead: s.Z.trans("All forum topics have been marked as read"),
            featureContent: s.Z.trans("Feature Set! It might take a minute or two to appear."),
            inviteEmpty: s.Z.trans("Please select the players for whom to send the invitation"),
            inviteSent: s.Z.trans("Your invitations were sent successfully"),
            pgnCopied: s.Z.trans("PGN copied to buffer")
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
    11302: function(e, t, n) {
        "use strict";
        n.d(t, {
            OD: function() {
                return dismissAlert
            },
            C4: function() {
                return createAlertElement
            }
        });
        var s = n(16399)
          , r = n(49790);
        function dismissAlert(e) {
            const t = document.getElementById(`alert-${e}`);
            t && hideAlertElement(t)
        }
        function createAlertElement(e) {
            var t;
            e.type !== r.V5.success && function dismissAllButLast(e=2) {
                var t;
                const n = getContainer();
                Array.from(null != (t = null == n ? void 0 : n.querySelectorAll(`.alerts-alert:not(:nth-last-child(-n + ${e}))`)) ? t : []).forEach(hideAlertElement)
            }(2),
            (0,
            s.E)("alerts");
            const n = document.createElement("div");
            n.classList.add("alerts-alert"),
            n.classList.add("alerts-enter"),
            n.classList.add(`alerts-${e.type}`),
            n.setAttribute("id", `alert-${e.id}`);
            const i = document.createElement("span");
            i.classList.add("alerts-message"),
            i.innerHTML = e.message;
            const o = document.createElement("button");
            o.classList.add("alerts-close"),
            o.setAttribute("type", "button"),
            o.innerHTML = '<span class="icon-font-chess x"></span>',
            n.appendChild(i),
            n.appendChild(o),
            null == (t = getContainer()) || t.appendChild(n),
            o.addEventListener("click", onClickClose),
            e.type === r.V5.success && setTimeout(hideAlertElement, r.jC, n)
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
            } catch (n) {
                !function clearAlerts() {
                    const e = getContainer();
                    e && (e.innerHTML = "")
                }()
            }
        }
        function onClickClose(e) {
            var t, n;
            const s = null == (n = null == (t = e.target) ? void 0 : t.closest) ? void 0 : n.call(t, ".alerts-alert");
            s && hideAlertElement(s)
        }
    },
    15291: function(e, t, n) {
        "use strict";
        n.d(t, {
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
        var s = n(49790)
          , r = n(11302)
          , i = n(54752)
          , o = n.n(i);
        function createAlert({message: e, type: t, id: n}) {
            (0,
            r.C4)({
                id: null != n ? n : o()(),
                type: t,
                message: e
            })
        }
        function showError(e=s.R0.badRequest) {
            createAlert({
                type: s.V5.error,
                message: e
            })
        }
    },
    68248: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            setupInvitations: function() {
                return setupInvitations
            }
        });
        var s = n(28598)
          , r = n(16155)
          , i = (e=>(e.ClassroomInvitation = "ClassroomInvitation",
        e.PuzzleBattleChallenge = "PuzzleBattleChallenge",
        e.MatcherChallenge = "MatcherChallenge",
        e.InsightsReminder = "InsightsReminder",
        e.SessionExpired = "SessionExpired",
        e))(i || {});
        var o = n(22848)
          , a = n(14164);
        function showHttpError(e) {
            (0,
            o.x)((0,
            a.i)(e))
        }
        var c = n(53574)
          , u = n(59051)
          , l = Object.defineProperty
          , d = Object.getOwnPropertySymbols
          , h = Object.prototype.hasOwnProperty
          , b = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,n)=>t in e ? l(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        function showToaster(e) {
            (0,
            c.c)(((e,t)=>{
                for (var n in t || (t = {}))
                    h.call(t, n) && __defNormalProp(e, n, t[n]);
                if (d)
                    for (var n of d(t))
                        b.call(t, n) && __defNormalProp(e, n, t[n]);
                return e
            }
            )({
                type: u.k.Toaster
            }, e))
        }
        var f = n(25387)
          , m = n(19626)
          , p = n(54752)
          , w = n.n(p)
          , k = Object.defineProperty
          , g = Object.defineProperties
          , y = Object.getOwnPropertyDescriptors
          , v = Object.getOwnPropertySymbols
          , z = Object.prototype.hasOwnProperty
          , C = Object.prototype.propertyIsEnumerable
          , publish_defNormalProp = (e,t,n)=>t in e ? k(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        async function publish_publish(e) {
            var t, n, s, r;
            return (0,
            f.n)((s = ((e,t)=>{
                for (var n in t || (t = {}))
                    z.call(t, n) && publish_defNormalProp(e, n, t[n]);
                if (v)
                    for (var n of v(t))
                        C.call(t, n) && publish_defNormalProp(e, n, t[n]);
                return e
            }
            )({}, e),
            r = {
                requestId: w()(),
                clientId: null == (n = (t = m.q).getClientId) ? void 0 : n.call(t)
            },
            g(s, y(r))))
        }
        var A = n(90425)
          , E = n(32305);
        function handleClassroomMessage({message: e}) {
            e.added.forEach((e=>{
                !function showClassroomInvitation(e) {
                    const t = [i.ClassroomInvitation, e.id]
                      , n = (0,
                    E.dW)("%username% invited you to Classroom", {
                        "%username%": e.creator.username
                    });
                    showToaster({
                        keys: t,
                        icon: "chess-board",
                        duration: 0,
                        avatarUrl: e.creator.avatarUrl,
                        content: n,
                        links: [{
                            label: (0,
                            E.dW)("Decline"),
                            onClick: async()=>{
                                try {
                                    await publish_publish({
                                        path: e.decline
                                    })
                                } catch (n) {
                                    showHttpError(n)
                                }
                                (0,
                                r.t)({
                                    keys: t
                                })
                            }
                        }, {
                            label: (0,
                            E.dW)("Accept"),
                            onClick: async()=>{
                                try {
                                    const {data: {sessionId: t}} = await publish_publish({
                                        path: e.accept
                                    });
                                    window.location.href = A.Z.generate("web_classroom_room", {
                                        id: t
                                    }, !0)
                                } catch (n) {
                                    showHttpError(n)
                                }
                                (0,
                                r.t)({
                                    keys: t
                                })
                            }
                        }]
                    })
                }(e)
            }
            )),
            e.removed.forEach((e=>{
                !function hideClassroomInvitation(e) {
                    (0,
                    r.t)({
                        keys: [i.ClassroomInvitation, e.id]
                    })
                }(e)
            }
            ))
        }
        var S = n(87080);
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        var _ = n(3775);
        function getSubscriptionChannel(e) {
            return (0,
            _.HD)(e) ? e : e.join("/")
        }
        function isAlternativePubSub(e) {
            return Boolean(e && "/pubsub" !== e && "/pubsub/" !== e)
        }
        function getSubscriptionKey({channel: e, pubsub: t}) {
            return isAlternativePubSub(t) ? `${t}$${getSubscriptionChannel(e)}` : getSubscriptionChannel(e)
        }
        function unsubscribePubSubChannel(e) {
            var t;
            const n = getSubscriptionKey(e);
            if (null == (t = S.z.subscriptions[n]) || t.close(),
            delete S.z.subscriptions[n],
            delete S.z.subscribing[n],
            !isAlternativePubSub(e.pubsub))
                return;
            !Object.keys(S.z.subscriptions).filter((t=>t.split("$")[0] === e.pubsub)).length && S.z.clients[e.pubsub] && (S.z.clients[e.pubsub].close(),
            delete S.z.clients[e.pubsub])
        }
        var P = n(72111);
        function isPubSubConnected() {
            return S.z.reactive.isConnected
        }
        var j = n(74158);
        class SubscriptionError extends Error {
            constructor(e, t) {
                super(`failed to subscribe to ${e} (code: ${null == t ? void 0 : t.code})`),
                this.channel = e,
                this.failure = t
            }
        }
        var O = n(8739);
        var T = n(18508);
        async function subscribePubSubChannel(e) {
            if (S.z.waitingForClient)
                return S.z.waitingForClient;
            isAlternativePubSub(e.pubsub) ? await async function connectPubSubClient(e) {
                return e in S.z.connecting ? S.z.connecting[e] : S.z.clients[e] ? void 0 : (S.z.connecting[e] = new Promise(((t,s)=>{
                    var r, i;
                    const o = {
                        debug: !1,
                        maxReconnectionDelayMs: 5e3,
                        reconnectionDelayPowBase: 1.3,
                        uid: null == (i = null == (r = window.context) ? void 0 : r.user) ? void 0 : i.uuid,
                        url: window.PubSub.options.url.pubsub.replace(/\/pubsub$/, e)
                    }
                      , a = {
                        onAttach: ()=>{
                            delete S.z.connecting[e],
                            t()
                        }
                        ,
                        onConnect: ()=>{
                            delete S.z.connecting[e],
                            t()
                        }
                        ,
                        onDetach: ()=>{
                            delete S.z.connecting[e],
                            delete S.z.clients[e],
                            s()
                        }
                        ,
                        onFailure: t=>{
                            delete S.z.connecting[e],
                            delete S.z.clients[e],
                            s(t)
                        }
                    };
                    n.e(9401).then(n.bind(n, 69401)).then((({default: t})=>{
                        S.z.clients[e] = t.connect(o, a)
                    }
                    ))
                }
                )),
                S.z.connecting[e])
            }(e.pubsub) : isPubSubConnected() || await async function waitForPubSubConnection() {
                if (!(0,
                j.q)())
                    throw new Error("PubSub.client script not found in document");
                if (S.z.waitingForClient && await S.z.waitingForClient,
                (0,
                P.R)(),
                !isPubSubConnected())
                    return new Promise((e=>{
                        const onConnect = ()=>{
                            window.PubSub.off(s.LZ.CONNECT, onConnect),
                            window.PubSub.off(s.LZ.RECONNECT, onConnect),
                            e()
                        }
                        ;
                        window.PubSub.on(s.LZ.CONNECT, onConnect),
                        window.PubSub.on(s.LZ.RECONNECT, onConnect)
                    }
                    ))
            }();
            const t = getSubscriptionKey(e);
            return t in S.z.subscribing ? S.z.subscribing[t] : S.z.subscriptions[t] ? void 0 : (S.z.subscribing[t] = new Promise(((n,r)=>{
                const i = getSubscriptionChannel(e.channel)
                  , o = isAlternativePubSub(e.pubsub) ? S.z.clients[e.pubsub] : s.pS
                  , a = setTimeout((()=>{
                    t in S.z.subscribing && ((0,
                    T.T)("time out while subscribing to PubSub", {
                        channel: i
                    }),
                    unsubscribePubSubChannel({
                        channel: i,
                        pubsub: e.pubsub
                    }))
                }
                ), 3e4)
                  , c = o.subscribe(i, {
                    onDetach() {
                        clearTimeout(a)
                    },
                    onAttach() {
                        clearTimeout(a),
                        delete S.z.subscribing[t],
                        S.z.subscriptions[t] = c,
                        n()
                    },
                    onFailure(e) {
                        var n;
                        clearTimeout(a),
                        delete S.z.subscribing[t],
                        n = null == e ? void 0 : e.code,
                        window.chesscom.features.includes("session_expired_redirection_xhr") && 401 === n && (0,
                        O.j)() ? function redirectToLogin() {
                            const e = {
                                returnUrl: window.location.href,
                                customMessage: (0,
                                E.dW)("Your session has expired. Please log in again")
                            }
                              , t = A.Z.generate("web_security_login_and_go", e);
                            window.location.href = t
                        }() : r(new SubscriptionError(i,e))
                    },
                    onMessage(t) {
                        i in S.z.subscribing && (0,
                        T.T)("onMessage PubSub hook fired before onAttach", {
                            channel: i
                        }),
                        Promise.resolve({
                            channel: i,
                            message: t
                        }).then(e.onMessage)
                    },
                    onComplete() {
                        clearTimeout(a),
                        unsubscribePubSubChannel({
                            channel: i,
                            pubsub: e.pubsub
                        }),
                        n()
                    }
                })
            }
            )),
            S.z.subscribing[t])
        }
        async function subscribeAuthenticatedChannel(e, t) {
            var n;
            try {
                await function subscribeChannel(e, t) {
                    return subscribePubSubChannel({
                        channel: e,
                        onMessage: t
                    })
                }(e, t)
            } catch (s) {
                if (401 !== (null == (n = s.failure) ? void 0 : n.code))
                    throw s;
                !function showSessionExpired() {
                    showToaster({
                        keys: [i.SessionExpired],
                        unique: !0,
                        icon: "circle-danger",
                        duration: 0,
                        content: (0,
                        E.dW)("Looks like youâ€™re logged out!"),
                        links: [{
                            label: (0,
                            E.dW)("Please log back in"),
                            onClick: ()=>{
                                window.location.href = A.Z.generate("web_security_login_and_go", {
                                    returnUrl: window.location.href
                                })
                            }
                        }]
                    })
                }()
            }
        }
        function showInsightsReminder() {
            showToaster({
                keys: [i.InsightsReminder],
                unique: !0,
                icon: "lightbulb",
                duration: 0,
                content: (0,
                E.dW)("Your insights are ready!"),
                links: [{
                    label: (0,
                    E.dW)("Click here to see them now"),
                    onClick: ()=>{
                        const e = new URL(A.Z.generate("web_insights", {}, !0));
                        e.searchParams.set("toaster", "true"),
                        window.location.href = e.toString()
                    }
                }]
            })
        }
        function setupInvitations() {
            !async function subscribeClassroom() {
                return subscribeAuthenticatedChannel([s.AM.Invitations, s.jq.Users, ":me"], handleClassroomMessage)
            }(),
            async function subscribeInsights() {
                if (window.location.pathname === A.Z.generate("web_insights"))
                    return;
                return subscribeAuthenticatedChannel([s.AM.Insights, "backfilling", window.context.user.uuid], showInsightsReminder)
            }()
        }
    },
    54752: function(e) {
        e.exports = function uid(e) {
            return e = e || 7,
            Math.random().toString(35).substr(2, e)
        }
    }
}]);
