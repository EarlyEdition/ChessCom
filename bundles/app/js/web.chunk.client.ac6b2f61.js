(("undefined" != typeof self ? self : this).wpChessCom_Yybx = ("undefined" != typeof self ? self : this).wpChessCom_Yybx || []).push([[1966], {
    5752: function(e, t, r) {
        "use strict";
        var n, o = r(70655), i = r(31313), a = r(14594), s = ((n = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
        n["bad-app-name"] = "Illegal App name: '{$appName}",
        n["duplicate-app"] = "Firebase App named '{$appName}' already exists",
        n["app-deleted"] = "Firebase App named '{$appName}' already deleted",
        n["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        n), c = new i.ErrorFactory("app","Firebase",s), u = "[DEFAULT]", l = function() {
            function FirebaseAppImpl(e, t, r) {
                var n = this;
                this.firebase_ = r,
                this.isDeleted_ = !1,
                this.services_ = {},
                this.tokenListeners_ = [],
                this.analyticsEventRequests_ = [],
                this.name_ = t.name,
                this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1,
                this.options_ = i.deepCopy(e);
                var o = this;
                this.INTERNAL = {
                    getUid: function() {
                        return null
                    },
                    getToken: function() {
                        return Promise.resolve(null)
                    },
                    addAuthTokenListener: function(e) {
                        n.tokenListeners_.push(e),
                        setTimeout((function() {
                            return e(null)
                        }
                        ), 0)
                    },
                    removeAuthTokenListener: function(e) {
                        n.tokenListeners_ = n.tokenListeners_.filter((function(t) {
                            return t !== e
                        }
                        ))
                    },
                    analytics: {
                        logEvent: function() {
                            o.analyticsEventRequests_.push(arguments)
                        }
                    }
                }
            }
            return Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
                get: function() {
                    return this.checkDestroyed_(),
                    this.automaticDataCollectionEnabled_
                },
                set: function(e) {
                    this.checkDestroyed_(),
                    this.automaticDataCollectionEnabled_ = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(FirebaseAppImpl.prototype, "name", {
                get: function() {
                    return this.checkDestroyed_(),
                    this.name_
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(FirebaseAppImpl.prototype, "options", {
                get: function() {
                    return this.checkDestroyed_(),
                    this.options_
                },
                enumerable: !0,
                configurable: !0
            }),
            FirebaseAppImpl.prototype.delete = function() {
                var e = this;
                return new Promise((function(t) {
                    e.checkDestroyed_(),
                    t()
                }
                )).then((function() {
                    e.firebase_.INTERNAL.removeApp(e.name_);
                    for (var t = [], r = 0, n = Object.keys(e.services_); r < n.length; r++)
                        for (var o = n[r], i = 0, a = Object.keys(e.services_[o]); i < a.length; i++) {
                            var s = a[i];
                            t.push(e.services_[o][s])
                        }
                    return Promise.all(t.filter((function(e) {
                        return "INTERNAL"in e
                    }
                    )).map((function(e) {
                        return e.INTERNAL.delete()
                    }
                    )))
                }
                )).then((function() {
                    e.isDeleted_ = !0,
                    e.services_ = {}
                }
                ))
            }
            ,
            FirebaseAppImpl.prototype._getService = function(e, t) {
                if (void 0 === t && (t = u),
                this.checkDestroyed_(),
                this.services_[e] || (this.services_[e] = {}),
                !this.services_[e][t]) {
                    var r = t !== u ? t : void 0
                      , n = this.firebase_.INTERNAL.factories[e](this, this.extendApp.bind(this), r);
                    this.services_[e][t] = n
                }
                return this.services_[e][t]
            }
            ,
            FirebaseAppImpl.prototype._removeServiceInstance = function(e, t) {
                void 0 === t && (t = u),
                this.services_[e] && this.services_[e][t] && delete this.services_[e][t]
            }
            ,
            FirebaseAppImpl.prototype.extendApp = function(e) {
                if (i.deepExtend(this, e),
                e.INTERNAL) {
                    if (e.INTERNAL.addAuthTokenListener) {
                        for (var t = 0, r = this.tokenListeners_; t < r.length; t++) {
                            var n = r[t];
                            this.INTERNAL.addAuthTokenListener(n)
                        }
                        this.tokenListeners_ = []
                    }
                    if (e.INTERNAL.analytics) {
                        for (var o = 0, a = this.analyticsEventRequests_; o < a.length; o++) {
                            var s = a[o];
                            this.INTERNAL.analytics.logEvent.apply(void 0, s)
                        }
                        this.analyticsEventRequests_ = []
                    }
                }
            }
            ,
            FirebaseAppImpl.prototype.checkDestroyed_ = function() {
                if (this.isDeleted_)
                    throw c.create("app-deleted", {
                        appName: this.name_
                    })
            }
            ,
            FirebaseAppImpl
        }();
        l.prototype.name && l.prototype.options || l.prototype.delete || console.log("dc");
        var f = new a.Logger("@firebase/app");
        /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        if (i.isBrowser() && void 0 !== self.firebase) {
            f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
            var p = self.firebase.SDK_VERSION;
            p && p.indexOf("LITE") >= 0 && f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
        }
        var d = /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function createFirebaseNamespace() {
            var e = /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
            function createFirebaseNamespaceCore(e) {
                var t = {}
                  , r = {}
                  , n = {}
                  , o = {
                    __esModule: !0,
                    initializeApp: function initializeApp(r, n) {
                        void 0 === n && (n = {}),
                        "object" == typeof n && null !== n || (n = {
                            name: n
                        });
                        var a = n;
                        void 0 === a.name && (a.name = u);
                        var s = a.name;
                        if ("string" != typeof s || !s)
                            throw c.create("bad-app-name", {
                                appName: String(s)
                            });
                        if (i.contains(t, s))
                            throw c.create("duplicate-app", {
                                appName: s
                            });
                        var l = new e(r,a,o);
                        return t[s] = l,
                        callAppHooks(l, "create"),
                        l
                    },
                    app: app,
                    apps: null,
                    SDK_VERSION: "7.2.3",
                    INTERNAL: {
                        registerService: function registerService(t, a, s, u, l) {
                            if (void 0 === l && (l = !1),
                            r[t])
                                return f.debug("There were multiple attempts to register service " + t + "."),
                                o[t];
                            function serviceNamespace(e) {
                                if (void 0 === e && (e = app()),
                                "function" != typeof e[t])
                                    throw c.create("invalid-app-argument", {
                                        appName: t
                                    });
                                return e[t]()
                            }
                            return r[t] = a,
                            u && (n[t] = u,
                            getApps().forEach((function(e) {
                                u("create", e)
                            }
                            ))),
                            void 0 !== s && i.deepExtend(serviceNamespace, s),
                            o[t] = serviceNamespace,
                            e.prototype[t] = function() {
                                for (var e = [], r = 0; r < arguments.length; r++)
                                    e[r] = arguments[r];
                                return this._getService.bind(this, t).apply(this, l ? e : [])
                            }
                            ,
                            serviceNamespace
                        },
                        removeApp: function removeApp(e) {
                            callAppHooks(t[e], "delete"),
                            delete t[e]
                        },
                        factories: r,
                        useAsService: useAsService
                    }
                };
                function app(e) {
                    if (e = e || u,
                    !i.contains(t, e))
                        throw c.create("no-app", {
                            appName: e
                        });
                    return t[e]
                }
                function getApps() {
                    return Object.keys(t).map((function(e) {
                        return t[e]
                    }
                    ))
                }
                function callAppHooks(e, t) {
                    for (var o = 0, i = Object.keys(r); o < i.length; o++) {
                        var a = useAsService(e, i[o]);
                        if (null === a)
                            return;
                        n[a] && n[a](t, e)
                    }
                }
                function useAsService(e, t) {
                    return "serverAuth" === t ? null : t
                }
                return o.default = o,
                Object.defineProperty(o, "apps", {
                    get: getApps
                }),
                app.App = e,
                o
            }(l);
            return e.INTERNAL = o.__assign(o.__assign({}, e.INTERNAL), {
                createFirebaseNamespace: createFirebaseNamespace,
                extendNamespace: function extendNamespace(t) {
                    i.deepExtend(e, t)
                },
                createSubscribe: i.createSubscribe,
                ErrorFactory: i.ErrorFactory,
                deepExtend: i.deepExtend
            }),
            e
        }()
          , h = d.initializeApp;
        d.initializeApp = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return i.isNode() && f.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),
            h.apply(void 0, e)
        }
        ;
        var g = d;
        t.ZP = g
    },
    14594: function(e, t, r) {
        "use strict";
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        function __spreadArrays() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                e += arguments[t].length;
            var n = Array(e)
              , o = 0;
            for (t = 0; t < r; t++)
                for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
                o++)
                    n[o] = i[a];
            return n
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        r.r(t),
        r.d(t, {
            LogLevel: function() {
                return n
            },
            Logger: function() {
                return a
            },
            setLogLevel: function() {
                return setLogLevel
            }
        });
        var n, o = [];
        !function(e) {
            e[e.DEBUG = 0] = "DEBUG",
            e[e.VERBOSE = 1] = "VERBOSE",
            e[e.INFO = 2] = "INFO",
            e[e.WARN = 3] = "WARN",
            e[e.ERROR = 4] = "ERROR",
            e[e.SILENT = 5] = "SILENT"
        }(n || (n = {}));
        var i = n.INFO
          , defaultLogHandler = function(e, t) {
            for (var r = [], o = 2; o < arguments.length; o++)
                r[o - 2] = arguments[o];
            if (!(t < e.logLevel)) {
                var i = (new Date).toISOString();
                switch (t) {
                case n.DEBUG:
                case n.VERBOSE:
                    console.log.apply(console, __spreadArrays(["[" + i + "]  " + e.name + ":"], r));
                    break;
                case n.INFO:
                    console.info.apply(console, __spreadArrays(["[" + i + "]  " + e.name + ":"], r));
                    break;
                case n.WARN:
                    console.warn.apply(console, __spreadArrays(["[" + i + "]  " + e.name + ":"], r));
                    break;
                case n.ERROR:
                    console.error.apply(console, __spreadArrays(["[" + i + "]  " + e.name + ":"], r));
                    break;
                default:
                    throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")")
                }
            }
        }
          , a = function() {
            function Logger(e) {
                this.name = e,
                this._logLevel = i,
                this._logHandler = defaultLogHandler,
                o.push(this)
            }
            return Object.defineProperty(Logger.prototype, "logLevel", {
                get: function() {
                    return this._logLevel
                },
                set: function(e) {
                    if (!(e in n))
                        throw new TypeError("Invalid value assigned to `logLevel`");
                    this._logLevel = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(Logger.prototype, "logHandler", {
                get: function() {
                    return this._logHandler
                },
                set: function(e) {
                    if ("function" != typeof e)
                        throw new TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Logger.prototype.debug = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                this._logHandler.apply(this, __spreadArrays([this, n.DEBUG], e))
            }
            ,
            Logger.prototype.log = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                this._logHandler.apply(this, __spreadArrays([this, n.VERBOSE], e))
            }
            ,
            Logger.prototype.info = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                this._logHandler.apply(this, __spreadArrays([this, n.INFO], e))
            }
            ,
            Logger.prototype.warn = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                this._logHandler.apply(this, __spreadArrays([this, n.WARN], e))
            }
            ,
            Logger.prototype.error = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                this._logHandler.apply(this, __spreadArrays([this, n.ERROR], e))
            }
            ,
            Logger
        }();
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function setLogLevel(e) {
            o.forEach((function(t) {
                t.logLevel = e
            }
            ))
        }
    },
    95928: function(e, t, r) {
        "use strict";
        var n, o = r(5752), i = r(70655), a = r(31313), s = r(98676), c = 1e4, u = "w:0.3.3", l = "FIS_v2", f = 36e5, p = ((n = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"',
        n["not-registered"] = "Firebase Installation is not registered.",
        n["installation-not-found"] = "Firebase Installation not found.",
        n["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
        n["app-offline"] = "Could not process request. Application offline.",
        n["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.",
        n), d = new a.ErrorFactory("installations","Installations",p);
        function isServerError(e) {
            return e instanceof a.FirebaseError && e.code.includes("request-failed")
        }
        /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function extractAppConfig(e) {
            var t, r;
            if (!e || !e.options)
                throw getMissingValueError("App Configuration");
            if (!e.name)
                throw getMissingValueError("App Name");
            try {
                for (var n = (0,
                i.__values)(["projectId", "apiKey", "appId"]), o = n.next(); !o.done; o = n.next()) {
                    var a = o.value;
                    if (!e.options[a])
                        throw getMissingValueError(a)
                }
            } catch (s) {
                t = {
                    error: s
                }
            } finally {
                try {
                    o && !o.done && (r = n.return) && r.call(n)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return {
                appName: e.name,
                projectId: e.options.projectId,
                apiKey: e.options.apiKey,
                appId: e.options.appId
            }
        }
        function getMissingValueError(e) {
            return d.create("missing-app-config-values", {
                valueName: e
            })
        }
        /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function getInstallationsEndpoint(e) {
            return "https://firebaseinstallations.googleapis.com/v1/projects/" + e.projectId + "/installations"
        }
        function extractAuthTokenInfoFromResponse(e) {
            return {
                token: e.token,
                requestStatus: 2,
                expiresIn: (t = e.expiresIn,
                Number(t.replace("s", "000"))),
                creationTime: Date.now()
            };
            var t
        }
        function getErrorFromResponse(e, t) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var r, n;
                return (0,
                i.__generator)(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, t.json()];
                    case 1:
                        return r = o.sent(),
                        n = r.error,
                        [2, d.create("request-failed", {
                            requestName: e,
                            serverCode: n.code,
                            serverMessage: n.message,
                            serverStatus: n.status
                        })]
                    }
                }
                ))
            }
            ))
        }
        function getHeaders(e) {
            var t = e.apiKey;
            return new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
                "x-goog-api-key": t
            })
        }
        function getHeadersWithAuth(e, t) {
            var r = t.refreshToken
              , n = getHeaders(e);
            return n.append("Authorization", function getAuthorizationHeader(e) {
                return "FIS_v2 " + e
            }/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
            (r)),
            n
        }
        function retryIfServerError(e) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var t;
                return (0,
                i.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, e()];
                    case 1:
                        return (t = r.sent()).status >= 500 && t.status < 600 ? [2, e()] : [2, t]
                    }
                }
                ))
            }
            ))
        }
        function createInstallation(e, t) {
            var r = t.fid;
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var t, n, o, a, s, c;
                return (0,
                i.__generator)(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return t = getInstallationsEndpoint(e),
                        n = getHeaders(e),
                        o = {
                            fid: r,
                            authVersion: l,
                            appId: e.appId,
                            sdkVersion: u
                        },
                        a = {
                            method: "POST",
                            headers: n,
                            body: JSON.stringify(o)
                        },
                        [4, retryIfServerError((function() {
                            return fetch(t, a)
                        }
                        ))];
                    case 1:
                        return (s = i.sent()).ok ? [4, s.json()] : [3, 3];
                    case 2:
                        return c = i.sent(),
                        [2, {
                            fid: c.fid || r,
                            registrationStatus: 2,
                            refreshToken: c.refreshToken,
                            authToken: extractAuthTokenInfoFromResponse(c.authToken)
                        }];
                    case 3:
                        return [4, getErrorFromResponse("Create Installation", s)];
                    case 4:
                        throw i.sent()
                    }
                }
                ))
            }
            ))
        }
        /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function sleep(e) {
            return new Promise((function(t) {
                setTimeout(t, e)
            }
            ))
        }
        /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var h = /^[cdef][\w-]{21}$/;
        function generateFid() {
            try {
                var e = new Uint8Array(17);
                (self.crypto || self.msCrypto).getRandomValues(e),
                e[0] = 112 + e[0] % 16;
                var t = function encode(e) {
                    return function bufferToBase64UrlSafe(e) {
                        return btoa(String.fromCharCode.apply(String, (0,
                        i.__spread)(e))).replace(/\+/g, "-").replace(/\//g, "_")
                    }(e).substr(0, 22)
                }/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                (e);
                return h.test(t) ? t : ""
            } catch (n) {
                return ""
            }
        }
        var g, v = "firebase-installations-store", b = null;
        function getDbPromise() {
            return b || (b = (0,
            s.openDb)("firebase-installations-database", 1, (function(e) {
                if (0 === e.oldVersion)
                    e.createObjectStore(v)
            }
            ))),
            b
        }
        function set(e, t) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var r, n, o;
                return (0,
                i.__generator)(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return r = getKey(e),
                        [4, getDbPromise()];
                    case 1:
                        return n = i.sent(),
                        [4, (o = n.transaction(v, "readwrite")).objectStore(v).put(t, r)];
                    case 2:
                        return i.sent(),
                        [4, o.complete];
                    case 3:
                        return i.sent(),
                        [2, t]
                    }
                }
                ))
            }
            ))
        }
        function remove(e) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var t, r, n;
                return (0,
                i.__generator)(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return t = getKey(e),
                        [4, getDbPromise()];
                    case 1:
                        return r = o.sent(),
                        [4, (n = r.transaction(v, "readwrite")).objectStore(v).delete(t)];
                    case 2:
                        return o.sent(),
                        [4, n.complete];
                    case 3:
                        return o.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        function update(e, t) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var r, n, o, a, s, c;
                return (0,
                i.__generator)(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return r = getKey(e),
                        [4, getDbPromise()];
                    case 1:
                        return n = i.sent(),
                        o = n.transaction(v, "readwrite"),
                        [4, (a = o.objectStore(v)).get(r)];
                    case 2:
                        return s = i.sent(),
                        void 0 !== (c = t(s)) ? [3, 4] : [4, a.delete(r)];
                    case 3:
                        return i.sent(),
                        [3, 6];
                    case 4:
                        return [4, a.put(c, r)];
                    case 5:
                        i.sent(),
                        i.label = 6;
                    case 6:
                        return [4, o.complete];
                    case 7:
                        return i.sent(),
                        [2, c]
                    }
                }
                ))
            }
            ))
        }
        function getKey(e) {
            return e.appName + "!" + e.appId
        }
        /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function getInstallationEntry(e) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var t, r, n;
                return (0,
                i.__generator)(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return [4, update(e, (function(r) {
                            var n = function updateOrCreateInstallationEntry(e) {
                                return clearTimedOutRequest(e || {
                                    fid: generateFid(),
                                    registrationStatus: 0
                                })
                            }(r)
                              , o = function triggerRegistrationIfNecessary(e, t) {
                                if (0 === t.registrationStatus) {
                                    if (!navigator.onLine)
                                        return {
                                            installationEntry: t,
                                            registrationPromise: Promise.reject(d.create("app-offline"))
                                        };
                                    var r = {
                                        fid: t.fid,
                                        registrationStatus: 1,
                                        registrationTime: Date.now()
                                    }
                                      , n = function registerInstallation(e, t) {
                                        return (0,
                                        i.__awaiter)(this, void 0, void 0, (function() {
                                            var r, n;
                                            return (0,
                                            i.__generator)(this, (function(o) {
                                                switch (o.label) {
                                                case 0:
                                                    return o.trys.push([0, 2, , 7]),
                                                    [4, createInstallation(e, t)];
                                                case 1:
                                                    return r = o.sent(),
                                                    [2, set(e, r)];
                                                case 2:
                                                    return isServerError(n = o.sent()) && 409 === n.serverCode ? [4, remove(e)] : [3, 4];
                                                case 3:
                                                    return o.sent(),
                                                    [3, 6];
                                                case 4:
                                                    return [4, set(e, {
                                                        fid: t.fid,
                                                        registrationStatus: 0
                                                    })];
                                                case 5:
                                                    o.sent(),
                                                    o.label = 6;
                                                case 6:
                                                    throw n;
                                                case 7:
                                                    return [2]
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }(e, r);
                                    return {
                                        installationEntry: r,
                                        registrationPromise: n
                                    }
                                }
                                return 1 === t.registrationStatus ? {
                                    installationEntry: t,
                                    registrationPromise: waitUntilFidRegistration(e)
                                } : {
                                    installationEntry: t
                                }
                            }(e, n);
                            return t = o.registrationPromise,
                            o.installationEntry
                        }
                        ))];
                    case 1:
                        return "" !== (r = o.sent()).fid ? [3, 3] : (n = {},
                        [4, t]);
                    case 2:
                        return [2, (n.installationEntry = o.sent(),
                        n)];
                    case 3:
                        return [2, {
                            installationEntry: r,
                            registrationPromise: t
                        }]
                    }
                }
                ))
            }
            ))
        }
        function waitUntilFidRegistration(e) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var t, r, n, o;
                return (0,
                i.__generator)(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, updateInstallationRequest(e)];
                    case 1:
                        t = i.sent(),
                        i.label = 2;
                    case 2:
                        return 1 !== t.registrationStatus ? [3, 5] : [4, sleep(100)];
                    case 3:
                        return i.sent(),
                        [4, updateInstallationRequest(e)];
                    case 4:
                        return t = i.sent(),
                        [3, 2];
                    case 5:
                        return 0 !== t.registrationStatus ? [3, 7] : [4, getInstallationEntry(e)];
                    case 6:
                        return r = i.sent(),
                        n = r.installationEntry,
                        (o = r.registrationPromise) ? [2, o] : [2, n];
                    case 7:
                        return [2, t]
                    }
                }
                ))
            }
            ))
        }
        function updateInstallationRequest(e) {
            return update(e, (function(e) {
                if (!e)
                    throw d.create("installation-not-found");
                return clearTimedOutRequest(e)
            }
            ))
        }
        function clearTimedOutRequest(e) {
            return function hasInstallationRequestTimedOut(e) {
                return 1 === e.registrationStatus && e.registrationTime + c < Date.now()
            }/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
            (e) ? {
                fid: e.fid,
                registrationStatus: 0
            } : e
        }
        function generateAuthToken(e, t) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var r, n, o, a, s, c;
                return (0,
                i.__generator)(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return r = function getGenerateAuthTokenEndpoint(e, t) {
                            var r = t.fid;
                            return getInstallationsEndpoint(e) + "/" + r + "/authTokens:generate"
                        }/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                        (e, t),
                        n = getHeadersWithAuth(e, t),
                        o = {
                            installation: {
                                sdkVersion: u
                            }
                        },
                        a = {
                            method: "POST",
                            headers: n,
                            body: JSON.stringify(o)
                        },
                        [4, retryIfServerError((function() {
                            return fetch(r, a)
                        }
                        ))];
                    case 1:
                        return (s = i.sent()).ok ? [4, s.json()] : [3, 3];
                    case 2:
                        return c = i.sent(),
                        [2, extractAuthTokenInfoFromResponse(c)];
                    case 3:
                        return [4, getErrorFromResponse("Generate Auth Token", s)];
                    case 4:
                        throw i.sent()
                    }
                }
                ))
            }
            ))
        }
        function refreshAuthToken(e, t) {
            return void 0 === t && (t = !1),
            (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var r, n, o;
                return (0,
                i.__generator)(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, update(e, (function(n) {
                            if (!isEntryRegistered(n))
                                throw d.create("not-registered");
                            var o = n.authToken;
                            if (!t && function isAuthTokenValid(e) {
                                return 2 === e.requestStatus && !function isAuthTokenExpired(e) {
                                    var t = Date.now();
                                    return t < e.creationTime || e.creationTime + e.expiresIn < t + f
                                }(e)
                            }(o))
                                return n;
                            if (1 === o.requestStatus)
                                return r = function waitUntilAuthTokenRequest(e, t) {
                                    return (0,
                                    i.__awaiter)(this, void 0, void 0, (function() {
                                        var r, n;
                                        return (0,
                                        i.__generator)(this, (function(o) {
                                            switch (o.label) {
                                            case 0:
                                                return [4, updateAuthTokenRequest(e)];
                                            case 1:
                                                r = o.sent(),
                                                o.label = 2;
                                            case 2:
                                                return 1 !== r.authToken.requestStatus ? [3, 5] : [4, sleep(100)];
                                            case 3:
                                                return o.sent(),
                                                [4, updateAuthTokenRequest(e)];
                                            case 4:
                                                return r = o.sent(),
                                                [3, 2];
                                            case 5:
                                                return 0 === (n = r.authToken).requestStatus ? [2, refreshAuthToken(e, t)] : [2, n]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }(e, t),
                                n;
                            if (!navigator.onLine)
                                throw d.create("app-offline");
                            var a = function makeAuthTokenRequestInProgressEntry(e) {
                                var t = {
                                    requestStatus: 1,
                                    requestTime: Date.now()
                                };
                                return (0,
                                i.__assign)((0,
                                i.__assign)({}, e), {
                                    authToken: t
                                })
                            }(n);
                            return r = function fetchAuthTokenFromServer(e, t) {
                                return (0,
                                i.__awaiter)(this, void 0, void 0, (function() {
                                    var r, n, o;
                                    return (0,
                                    i.__generator)(this, (function(a) {
                                        switch (a.label) {
                                        case 0:
                                            return a.trys.push([0, 3, , 8]),
                                            [4, generateAuthToken(e, t)];
                                        case 1:
                                            return r = a.sent(),
                                            o = (0,
                                            i.__assign)((0,
                                            i.__assign)({}, t), {
                                                authToken: r
                                            }),
                                            [4, set(e, o)];
                                        case 2:
                                            return a.sent(),
                                            [2, r];
                                        case 3:
                                            return !isServerError(n = a.sent()) || 401 !== n.serverCode && 404 !== n.serverCode ? [3, 5] : [4, remove(e)];
                                        case 4:
                                            return a.sent(),
                                            [3, 7];
                                        case 5:
                                            return o = (0,
                                            i.__assign)((0,
                                            i.__assign)({}, t), {
                                                authToken: {
                                                    requestStatus: 0
                                                }
                                            }),
                                            [4, set(e, o)];
                                        case 6:
                                            a.sent(),
                                            a.label = 7;
                                        case 7:
                                            throw n;
                                        case 8:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }(e, a),
                            a
                        }
                        ))];
                    case 1:
                        return n = a.sent(),
                        r ? [4, r] : [3, 3];
                    case 2:
                        return o = a.sent(),
                        [3, 4];
                    case 3:
                        o = n.authToken,
                        a.label = 4;
                    case 4:
                        return [2, o]
                    }
                }
                ))
            }
            ))
        }
        function updateAuthTokenRequest(e) {
            return update(e, (function(e) {
                if (!isEntryRegistered(e))
                    throw d.create("not-registered");
                return function hasAuthTokenRequestTimedOut(e) {
                    return 1 === e.requestStatus && e.requestTime + c < Date.now()
                }/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                (e.authToken) ? (0,
                i.__assign)((0,
                i.__assign)({}, e), {
                    authToken: {
                        requestStatus: 0
                    }
                }) : e
            }
            ))
        }
        function isEntryRegistered(e) {
            return void 0 !== e && 2 === e.registrationStatus
        }
        function completeInstallationRegistration(e) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var t;
                return (0,
                i.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, getInstallationEntry(e)];
                    case 1:
                        return (t = r.sent().registrationPromise) ? [4, t] : [3, 3];
                    case 2:
                        r.sent(),
                        r.label = 3;
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        /**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function deleteInstallation(e, t) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var r, n, o, a;
                return (0,
                i.__generator)(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        return r = function getDeleteEndpoint(e, t) {
                            var r = t.fid;
                            return getInstallationsEndpoint(e) + "/" + r
                        }/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                        (e, t),
                        n = getHeadersWithAuth(e, t),
                        o = {
                            method: "DELETE",
                            headers: n
                        },
                        [4, retryIfServerError((function() {
                            return fetch(r, o)
                        }
                        ))];
                    case 1:
                        return (a = i.sent()).ok ? [3, 3] : [4, getErrorFromResponse("Delete Installation", a)];
                    case 2:
                        throw i.sent();
                    case 3:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        !/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function registerInstallations(e) {
            e.INTERNAL.registerService("installations", (function(e) {
                return extractAppConfig(e),
                {
                    app: e,
                    getId: function() {
                        return function getId(e) {
                            return (0,
                            i.__awaiter)(this, void 0, void 0, (function() {
                                var t, r, n, o;
                                return (0,
                                i.__generator)(this, (function(i) {
                                    switch (i.label) {
                                    case 0:
                                        return [4, getInstallationEntry(t = extractAppConfig(e))];
                                    case 1:
                                        return r = i.sent(),
                                        n = r.installationEntry,
                                        (o = r.registrationPromise) ? o.catch(console.error) : refreshAuthToken(t).catch(console.error),
                                        [2, n.fid]
                                    }
                                }
                                ))
                            }
                            ))
                        }/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                        (e)
                    },
                    getToken: function(t) {
                        return function getToken(e, t) {
                            return void 0 === t && (t = !1),
                            (0,
                            i.__awaiter)(this, void 0, void 0, (function() {
                                var r;
                                return (0,
                                i.__generator)(this, (function(n) {
                                    switch (n.label) {
                                    case 0:
                                        return [4, completeInstallationRegistration(r = extractAppConfig(e))];
                                    case 1:
                                        return n.sent(),
                                        [4, refreshAuthToken(r, t)];
                                    case 2:
                                        return [2, n.sent().token]
                                    }
                                }
                                ))
                            }
                            ))
                        }(e, t)
                    },
                    delete: function() {
                        return function deleteInstallation$1(e) {
                            return (0,
                            i.__awaiter)(this, void 0, void 0, (function() {
                                var t, r;
                                return (0,
                                i.__generator)(this, (function(n) {
                                    switch (n.label) {
                                    case 0:
                                        return [4, update(t = extractAppConfig(e), (function(e) {
                                            if (!e || 0 !== e.registrationStatus)
                                                return e
                                        }
                                        ))];
                                    case 1:
                                        if (!(r = n.sent()))
                                            return [3, 6];
                                        if (1 !== r.registrationStatus)
                                            return [3, 2];
                                        throw d.create("delete-pending-registration");
                                    case 2:
                                        if (2 !== r.registrationStatus)
                                            return [3, 6];
                                        if (navigator.onLine)
                                            return [3, 3];
                                        throw d.create("app-offline");
                                    case 3:
                                        return [4, deleteInstallation(t, r)];
                                    case 4:
                                        return n.sent(),
                                        [4, remove(t)];
                                    case 5:
                                        n.sent(),
                                        n.label = 6;
                                    case 6:
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }(e)
                    }
                }
            }
            ))
        }(o.ZP);
        var _, y = ((g = {})["only-available-in-window"] = "This method is available in a Window context.",
        g["only-available-in-sw"] = "This method is available in a service worker context.",
        g["should-be-overriden"] = "This method should be overriden by extended classes.",
        g["bad-sender-id"] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",
        g["permission-default"] = "The required permissions were not granted and dismissed instead.",
        g["permission-blocked"] = "The required permissions were not granted and blocked instead.",
        g["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.",
        g["notifications-blocked"] = "Notifications have been blocked.",
        g["failed-serviceworker-registration"] = "We are unable to register the default service worker. {$browserErrorMessage}",
        g["sw-registration-expected"] = "A service worker registration was the expected input.",
        g["get-subscription-failed"] = "There was an error when trying to get any existing Push Subscriptions.",
        g["invalid-saved-token"] = "Unable to access details of the saved token.",
        g["sw-reg-redundant"] = "The service worker being used for push was made redundant.",
        g["token-subscribe-failed"] = "A problem occured while subscribing the user to FCM: {$errorInfo}",
        g["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.",
        g["token-unsubscribe-failed"] = "A problem occured while unsubscribing the user from FCM: {$errorInfo}",
        g["token-update-failed"] = "A problem occured while updating the user from FCM: {$errorInfo}",
        g["token-update-no-token"] = "FCM returned no token when updating the user to push.",
        g["use-sw-before-get-token"] = "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
        g["invalid-delete-token"] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().",
        g["delete-token-not-found"] = "The deletion attempt for token could not be performed as the token was not found.",
        g["delete-scope-not-found"] = "The deletion attempt for service worker scope could not be performed as the scope was not found.",
        g["bg-handler-function-expected"] = "The input to setBackgroundMessageHandler() must be a function.",
        g["no-window-client-to-msg"] = "An attempt was made to message a non-existant window client.",
        g["unable-to-resubscribe"] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",
        g["no-fcm-token-for-resubscribe"] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",
        g["failed-to-delete-token"] = "Unable to delete the currently saved token.",
        g["no-sw-in-reg"] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.",
        g["bad-scope"] = "The service worker scope must be a string with at least one character.",
        g["bad-vapid-key"] = "The public VAPID key is not a Uint8Array with 65 bytes.",
        g["bad-subscription"] = "The subscription must be a valid PushSubscription.",
        g["bad-token"] = "The FCM Token used for storage / lookup was not a valid token string.",
        g["failed-delete-vapid-key"] = "The VAPID key could not be deleted.",
        g["invalid-public-vapid-key"] = "The public VAPID key must be a string.",
        g["use-public-key-before-get-token"] = "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",
        g["public-vapid-key-decryption-failed"] = "The public VAPID key did not equal 65 bytes when decrypted.",
        g), w = new a.ErrorFactory("messaging","Messaging",y), m = new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110]), S = "google.c.a.c_id";
        /**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function isArrayBufferEqual(e, t) {
            if (null == e || null == t)
                return !1;
            if (e === t)
                return !0;
            if (e.byteLength !== t.byteLength)
                return !1;
            for (var r = new DataView(e), n = new DataView(t), o = 0; o < e.byteLength; o++)
                if (r.getUint8(o) !== n.getUint8(o))
                    return !1;
            return !0
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function arrayBufferToBase64(e) {
            var t = function toBase64(e) {
                var t = new Uint8Array(e);
                return btoa(String.fromCharCode.apply(String, (0,
                i.__spread)(t)))
            }(e);
            return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        !function(e) {
            e.PUSH_MSG_RECEIVED = "push-msg-received",
            e.NOTIFICATION_CLICKED = "notification-clicked"
        }(_ || (_ = {}));
        var k = function() {
            function SubscriptionManager() {}
            return SubscriptionManager.prototype.getToken = function(e, t, r) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var n, o, a, s, c, u;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, index_esm_getHeaders(e)];
                        case 1:
                            n = i.sent(),
                            o = getBody(t, r),
                            a = {
                                method: "POST",
                                headers: n,
                                body: JSON.stringify(o)
                            },
                            i.label = 2;
                        case 2:
                            return i.trys.push([2, 5, , 6]),
                            [4, fetch(getEndpoint(e), a)];
                        case 3:
                            return [4, i.sent().json()];
                        case 4:
                            return s = i.sent(),
                            [3, 6];
                        case 5:
                            throw c = i.sent(),
                            w.create("token-subscribe-failed", {
                                errorInfo: c
                            });
                        case 6:
                            if (s.error)
                                throw u = s.error.message,
                                w.create("token-subscribe-failed", {
                                    errorInfo: u
                                });
                            if (!s.token)
                                throw w.create("token-subscribe-no-token");
                            return [2, s.token]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            SubscriptionManager.prototype.updateToken = function(e, t, r, n) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var o, a, s, c, u, l;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, index_esm_getHeaders(t)];
                        case 1:
                            o = i.sent(),
                            a = getBody(r, n),
                            s = {
                                method: "PATCH",
                                headers: o,
                                body: JSON.stringify(a)
                            },
                            i.label = 2;
                        case 2:
                            return i.trys.push([2, 5, , 6]),
                            [4, fetch(getEndpoint(t) + "/" + e.fcmToken, s)];
                        case 3:
                            return [4, i.sent().json()];
                        case 4:
                            return c = i.sent(),
                            [3, 6];
                        case 5:
                            throw u = i.sent(),
                            w.create("token-update-failed", {
                                errorInfo: u
                            });
                        case 6:
                            if (c.error)
                                throw l = c.error.message,
                                w.create("token-update-failed", {
                                    errorInfo: l
                                });
                            if (!c.token)
                                throw w.create("token-update-no-token");
                            return [2, c.token]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            SubscriptionManager.prototype.deleteToken = function(e, t) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var r, n, o, a, s;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, index_esm_getHeaders(e)];
                        case 1:
                            r = i.sent(),
                            n = {
                                method: "DELETE",
                                headers: r
                            },
                            i.label = 2;
                        case 2:
                            return i.trys.push([2, 5, , 6]),
                            [4, fetch(getEndpoint(e) + "/" + t.fcmToken, n)];
                        case 3:
                            return [4, i.sent().json()];
                        case 4:
                            if ((o = i.sent()).error)
                                throw a = o.error.message,
                                w.create("token-unsubscribe-failed", {
                                    errorInfo: a
                                });
                            return [3, 6];
                        case 5:
                            throw s = i.sent(),
                            w.create("token-unsubscribe-failed", {
                                errorInfo: s
                            });
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            SubscriptionManager
        }();
        function getEndpoint(e) {
            return "https://fcmregistrations.googleapis.com/v1/projects/" + e.options.projectId + "/registrations"
        }
        function index_esm_getHeaders(e) {
            return (0,
            i.__awaiter)(this, void 0, void 0, (function() {
                var t;
                return (0,
                i.__generator)(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, e.installations().getToken()];
                    case 1:
                        return t = r.sent(),
                        [2, new Headers({
                            "Content-Type": "application/json",
                            Accept: "application/json",
                            "x-goog-api-key": e.options.apiKey,
                            "x-goog-firebase-installations-auth": "FIS " + t
                        })]
                    }
                }
                ))
            }
            ))
        }
        function getBody(e, t) {
            var r = arrayBufferToBase64(e.getKey("p256dh"))
              , n = arrayBufferToBase64(e.getKey("auth"))
              , o = {
                web: {
                    endpoint: e.endpoint,
                    p256dh: r,
                    auth: n
                }
            };
            return isArrayBufferEqual(t.buffer, m.buffer) || (o.web.applicationPubKey = arrayBufferToBase64(t)),
            o
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function base64ToArrayBuffer(e) {
            for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), r = atob(t), n = new Uint8Array(r.length), o = 0; o < r.length; ++o)
                n[o] = r.charCodeAt(o);
            return n
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var T = "undefined"
          , E = "fcm_token_object_Store";
        function cleanV1(e) {
            var t = indexedDB.open(T);
            t.onerror = function(e) {}
            ,
            t.onsuccess = function(r) {
                !function handleDb(e, t) {
                    if (e.objectStoreNames.contains(E)) {
                        var r = e.transaction(E).objectStore(E)
                          , n = new k
                          , o = r.openCursor();
                        o.onerror = function(e) {
                            console.warn("Unable to cleanup old IDB.", e)
                        }
                        ,
                        o.onsuccess = function() {
                            var r = o.result;
                            if (r) {
                                var i = r.value;
                                n.deleteToken(t, i),
                                r.continue()
                            } else
                                e.close(),
                                indexedDB.deleteDatabase(T)
                        }
                    }
                }(t.result, e)
            }
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var A = function() {
            function DbInterface() {
                this.dbPromise = null
            }
            return DbInterface.prototype.get = function(e) {
                return this.createTransaction((function(t) {
                    return t.get(e)
                }
                ))
            }
            ,
            DbInterface.prototype.getIndex = function(e, t) {
                return this.createTransaction((function runRequest(r) {
                    return r.index(e).get(t)
                }
                ))
            }
            ,
            DbInterface.prototype.put = function(e) {
                return this.createTransaction((function(t) {
                    return t.put(e)
                }
                ), "readwrite")
            }
            ,
            DbInterface.prototype.delete = function(e) {
                return this.createTransaction((function(t) {
                    return t.delete(e)
                }
                ), "readwrite")
            }
            ,
            DbInterface.prototype.closeDatabase = function() {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return this.dbPromise ? [4, this.dbPromise] : [3, 2];
                        case 1:
                            e.sent().close(),
                            this.dbPromise = null,
                            e.label = 2;
                        case 2:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            DbInterface.prototype.createTransaction = function(e, t) {
                return void 0 === t && (t = "readonly"),
                (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var r, n, o, a;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this.getDb()];
                        case 1:
                            return r = i.sent(),
                            n = r.transaction(this.objectStoreName, t),
                            o = n.objectStore(this.objectStoreName),
                            [4, promisify(e(o))];
                        case 2:
                            return a = i.sent(),
                            [2, new Promise((function(e, t) {
                                n.oncomplete = function() {
                                    e(a)
                                }
                                ,
                                n.onerror = function() {
                                    t(n.error)
                                }
                            }
                            ))]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            DbInterface.prototype.getDb = function() {
                var e = this;
                return this.dbPromise || (this.dbPromise = new Promise((function(t, r) {
                    var n = indexedDB.open(e.dbName, e.dbVersion);
                    n.onsuccess = function() {
                        t(n.result)
                    }
                    ,
                    n.onerror = function() {
                        e.dbPromise = null,
                        r(n.error)
                    }
                    ,
                    n.onupgradeneeded = function(t) {
                        return e.onDbUpgrade(n, t)
                    }
                }
                ))),
                this.dbPromise
            }
            ,
            DbInterface
        }();
        function promisify(e) {
            return new Promise((function(t, r) {
                e.onsuccess = function() {
                    t(e.result)
                }
                ,
                e.onerror = function() {
                    r(e.error)
                }
            }
            ))
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var C = function(e) {
            function TokenDetailsModel(t) {
                var r = e.call(this) || this;
                return r.app = t,
                r.dbName = "fcm_token_details_db",
                r.dbVersion = 4,
                r.objectStoreName = "fcm_token_object_Store",
                r
            }
            return (0,
            i.__extends)(TokenDetailsModel, e),
            TokenDetailsModel.prototype.onDbUpgrade = function(e, t) {
                var r = e.result;
                switch (t.oldVersion) {
                case 0:
                    (o = r.createObjectStore(this.objectStoreName, {
                        keyPath: "swScope"
                    })).createIndex("fcmSenderId", "fcmSenderId", {
                        unique: !1
                    }),
                    o.createIndex("fcmToken", "fcmToken", {
                        unique: !0
                    });
                case 1:
                    cleanV1(this.app);
                case 2:
                    var n = (o = e.transaction.objectStore(this.objectStoreName)).openCursor();
                    n.onsuccess = function() {
                        var e = n.result;
                        if (e) {
                            var t = e.value
                              , r = (0,
                            i.__assign)({}, t);
                            t.createTime || (r.createTime = Date.now()),
                            "string" == typeof t.vapidKey && (r.vapidKey = base64ToArrayBuffer(t.vapidKey)),
                            "string" == typeof t.auth && (r.auth = base64ToArrayBuffer(t.auth).buffer),
                            "string" == typeof t.auth && (r.p256dh = base64ToArrayBuffer(t.p256dh).buffer),
                            "string" == typeof t.fcmPushSet && delete r.fcmPushSet,
                            e.update(r),
                            e.continue()
                        }
                    }
                    ;
                    break;
                case 3:
                    var o, a = (o = e.transaction.objectStore(this.objectStoreName)).openCursor();
                    a.onsuccess = function() {
                        var e = a.result;
                        if (e) {
                            var t = e.value
                              , r = (0,
                            i.__assign)({}, t);
                            "string" == typeof t.fcmPushSet && delete r.fcmPushSet,
                            e.update(r),
                            e.continue()
                        }
                    }
                }
            }
            ,
            TokenDetailsModel.prototype.getTokenDetailsFromToken = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(t) {
                        if (!e)
                            throw w.create("bad-token");
                        return validateInputs({
                            fcmToken: e
                        }),
                        [2, this.getIndex("fcmToken", e)]
                    }
                    ))
                }
                ))
            }
            ,
            TokenDetailsModel.prototype.getTokenDetailsFromSWScope = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(t) {
                        if (!e)
                            throw w.create("bad-scope");
                        return validateInputs({
                            swScope: e
                        }),
                        [2, this.get(e)]
                    }
                    ))
                }
                ))
            }
            ,
            TokenDetailsModel.prototype.saveTokenDetails = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(t) {
                        if (!e.swScope)
                            throw w.create("bad-scope");
                        if (!e.vapidKey)
                            throw w.create("bad-vapid-key");
                        if (!e.endpoint || !e.auth || !e.p256dh)
                            throw w.create("bad-subscription");
                        if (!e.fcmSenderId)
                            throw w.create("bad-sender-id");
                        if (!e.fcmToken)
                            throw w.create("bad-token");
                        return validateInputs(e),
                        [2, this.put(e)]
                    }
                    ))
                }
                ))
            }
            ,
            TokenDetailsModel.prototype.deleteToken = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0,
                    i.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return "string" != typeof e || 0 === e.length ? [2, Promise.reject(w.create("invalid-delete-token"))] : [4, this.getTokenDetailsFromToken(e)];
                        case 1:
                            if (!(t = r.sent()))
                                throw w.create("delete-token-not-found");
                            return [4, this.delete(t.swScope)];
                        case 2:
                            return r.sent(),
                            [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            TokenDetailsModel
        }(A);
        function validateInputs(e) {
            if (e.fcmToken && ("string" != typeof e.fcmToken || 0 === e.fcmToken.length))
                throw w.create("bad-token");
            if (e.swScope && ("string" != typeof e.swScope || 0 === e.swScope.length))
                throw w.create("bad-scope");
            if (e.vapidKey && (!(e.vapidKey instanceof Uint8Array) || 65 !== e.vapidKey.length))
                throw w.create("bad-vapid-key");
            if (e.endpoint && ("string" != typeof e.endpoint || 0 === e.endpoint.length))
                throw w.create("bad-subscription");
            if (e.auth && !(e.auth instanceof ArrayBuffer))
                throw w.create("bad-subscription");
            if (e.p256dh && !(e.p256dh instanceof ArrayBuffer))
                throw w.create("bad-subscription");
            if (e.fcmSenderId && ("string" != typeof e.fcmSenderId || 0 === e.fcmSenderId.length))
                throw w.create("bad-sender-id")
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var I = function(e) {
            function VapidDetailsModel() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dbName = "fcm_vapid_details_db",
                t.dbVersion = 1,
                t.objectStoreName = "fcm_vapid_object_Store",
                t
            }
            return (0,
            i.__extends)(VapidDetailsModel, e),
            VapidDetailsModel.prototype.onDbUpgrade = function(e) {
                e.result.createObjectStore(this.objectStoreName, {
                    keyPath: "swScope"
                })
            }
            ,
            VapidDetailsModel.prototype.getVapidFromSWScope = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0,
                    i.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            if ("string" != typeof e || 0 === e.length)
                                throw w.create("bad-scope");
                            return [4, this.get(e)];
                        case 1:
                            return [2, (t = r.sent()) ? t.vapidKey : void 0]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            VapidDetailsModel.prototype.saveVapidDetails = function(e, t) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var r;
                    return (0,
                    i.__generator)(this, (function(n) {
                        if ("string" != typeof e || 0 === e.length)
                            throw w.create("bad-scope");
                        if (null === t || 65 !== t.length)
                            throw w.create("bad-vapid-key");
                        return r = {
                            swScope: e,
                            vapidKey: t
                        },
                        [2, this.put(r)]
                    }
                    ))
                }
                ))
            }
            ,
            VapidDetailsModel.prototype.deleteVapidDetails = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0,
                    i.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.getVapidFromSWScope(e)];
                        case 1:
                            if (!(t = r.sent()))
                                throw w.create("delete-scope-not-found");
                            return [4, this.delete(e)];
                        case 2:
                            return r.sent(),
                            [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            VapidDetailsModel
        }(A)
          , D = function() {
            function BaseController(e) {
                var t = this;
                if (this.app = e,
                this.vapidDetailsModel = new I,
                this.subscriptionManager = new k,
                !e.options.messagingSenderId || "string" != typeof e.options.messagingSenderId)
                    throw w.create("bad-sender-id");
                this.INTERNAL = {
                    delete: function() {
                        return t.delete()
                    }
                },
                this.tokenDetailsModel = new C(e)
            }
            return BaseController.prototype.getToken = function() {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var e, t, r, n, o;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            if ("denied" === (e = this.getNotificationPermission_()))
                                throw w.create("notifications-blocked");
                            return "granted" !== e ? [2, null] : [4, this.getSWRegistration_()];
                        case 1:
                            return t = i.sent(),
                            [4, this.getPublicVapidKey_()];
                        case 2:
                            return r = i.sent(),
                            [4, this.getPushSubscription(t, r)];
                        case 3:
                            return n = i.sent(),
                            [4, this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];
                        case 4:
                            return (o = i.sent()) ? [2, this.manageExistingToken(t, n, r, o)] : [2, this.getNewToken(t, n, r)]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            BaseController.prototype.manageExistingToken = function(e, t, r, n) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var o;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return o = function isTokenStillValid(e, t, r) {
                                if (!r.vapidKey || !isArrayBufferEqual(t.buffer, r.vapidKey.buffer))
                                    return !1;
                                var n = e.endpoint === r.endpoint
                                  , o = isArrayBufferEqual(e.getKey("auth"), r.auth)
                                  , i = isArrayBufferEqual(e.getKey("p256dh"), r.p256dh);
                                return n && o && i
                            }/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                            (t, r, n),
                            o ? Date.now() < n.createTime + 6048e5 ? [2, n.fcmToken] : [2, this.updateToken(e, t, r, n)] : [3, 1];
                        case 1:
                            return [4, this.deleteTokenFromDB(n.fcmToken)];
                        case 2:
                            return i.sent(),
                            [2, this.getNewToken(e, t, r)];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            BaseController.prototype.updateToken = function(e, t, r, n) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var o, a, s;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return i.trys.push([0, 4, , 6]),
                            [4, this.subscriptionManager.updateToken(n, this.app, t, r)];
                        case 1:
                            return o = i.sent(),
                            a = {
                                swScope: e.scope,
                                vapidKey: r,
                                fcmSenderId: this.app.options.messagingSenderId,
                                fcmToken: o,
                                createTime: Date.now(),
                                endpoint: t.endpoint,
                                auth: t.getKey("auth"),
                                p256dh: t.getKey("p256dh")
                            },
                            [4, this.tokenDetailsModel.saveTokenDetails(a)];
                        case 2:
                            return i.sent(),
                            [4, this.vapidDetailsModel.saveVapidDetails(e.scope, r)];
                        case 3:
                            return i.sent(),
                            [2, o];
                        case 4:
                            return s = i.sent(),
                            [4, this.deleteToken(n.fcmToken)];
                        case 5:
                            throw i.sent(),
                            s;
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            BaseController.prototype.getNewToken = function(e, t, r) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var n, o;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this.subscriptionManager.getToken(this.app, t, r)];
                        case 1:
                            return n = i.sent(),
                            o = {
                                swScope: e.scope,
                                vapidKey: r,
                                fcmSenderId: this.app.options.messagingSenderId,
                                fcmToken: n,
                                createTime: Date.now(),
                                endpoint: t.endpoint,
                                auth: t.getKey("auth"),
                                p256dh: t.getKey("p256dh")
                            },
                            [4, this.tokenDetailsModel.saveTokenDetails(o)];
                        case 2:
                            return i.sent(),
                            [4, this.vapidDetailsModel.saveVapidDetails(e.scope, r)];
                        case 3:
                            return i.sent(),
                            [2, n]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            BaseController.prototype.deleteToken = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var t, r;
                    return (0,
                    i.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, this.deleteTokenFromDB(e)];
                        case 1:
                            return n.sent(),
                            [4, this.getSWRegistration_()];
                        case 2:
                            return (t = n.sent()) ? [4, t.pushManager.getSubscription()] : [3, 4];
                        case 3:
                            if (r = n.sent())
                                return [2, r.unsubscribe()];
                            n.label = 4;
                        case 4:
                            return [2, !0]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            BaseController.prototype.deleteTokenFromDB = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0,
                    i.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.tokenDetailsModel.deleteToken(e)];
                        case 1:
                            return t = r.sent(),
                            [4, this.subscriptionManager.deleteToken(this.app, t)];
                        case 2:
                            return r.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            BaseController.prototype.getPushSubscription = function(e, t) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var r;
                    return (0,
                    i.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, e.pushManager.getSubscription()];
                        case 1:
                            return (r = n.sent()) ? [2, r] : [2, e.pushManager.subscribe({
                                userVisibleOnly: !0,
                                applicationServerKey: t
                            })]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            BaseController.prototype.requestPermission = function() {
                throw w.create("only-available-in-window")
            }
            ,
            BaseController.prototype.useServiceWorker = function(e) {
                throw w.create("only-available-in-window")
            }
            ,
            BaseController.prototype.usePublicVapidKey = function(e) {
                throw w.create("only-available-in-window")
            }
            ,
            BaseController.prototype.onMessage = function(e, t, r) {
                throw w.create("only-available-in-window")
            }
            ,
            BaseController.prototype.onTokenRefresh = function(e, t, r) {
                throw w.create("only-available-in-window")
            }
            ,
            BaseController.prototype.setBackgroundMessageHandler = function(e) {
                throw w.create("only-available-in-sw")
            }
            ,
            BaseController.prototype.delete = function() {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, Promise.all([this.tokenDetailsModel.closeDatabase(), this.vapidDetailsModel.closeDatabase()])];
                        case 1:
                            return e.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            BaseController.prototype.getNotificationPermission_ = function() {
                return Notification.permission
            }
            ,
            BaseController.prototype.getTokenDetailsModel = function() {
                return this.tokenDetailsModel
            }
            ,
            BaseController.prototype.getVapidDetailsModel = function() {
                return this.vapidDetailsModel
            }
            ,
            BaseController.prototype.getSubscriptionManager = function() {
                return this.subscriptionManager
            }
            ,
            BaseController
        }();
        var O = function(e) {
            function SwController(t) {
                var r = e.call(this, t) || this;
                return r.bgMessageHandler = null,
                self.addEventListener("push", (function(e) {
                    r.onPush(e)
                }
                )),
                self.addEventListener("pushsubscriptionchange", (function(e) {
                    r.onSubChange(e)
                }
                )),
                self.addEventListener("notificationclick", (function(e) {
                    r.onNotificationClick(e)
                }
                )),
                r
            }
            return (0,
            i.__extends)(SwController, e),
            SwController.prototype.onPush = function(e) {
                e.waitUntil(this.onPush_(e))
            }
            ,
            SwController.prototype.onSubChange = function(e) {
                e.waitUntil(this.onSubChange_(e))
            }
            ,
            SwController.prototype.onNotificationClick = function(e) {
                e.waitUntil(this.onNotificationClick_(e))
            }
            ,
            SwController.prototype.onPush_ = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var t, r, n, o, a, s;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            if (!e.data)
                                return [2];
                            try {
                                t = e.data.json()
                            } catch (c) {
                                return [2]
                            }
                            return [4, this.hasVisibleClients_()];
                        case 1:
                            return i.sent() ? [2, this.sendMessageToWindowClients_(t)] : (r = this.getNotificationData_(t)) ? (n = r.title || "",
                            [4, this.getSWRegistration_()]) : [3, 3];
                        case 2:
                            return o = i.sent(),
                            a = r.actions,
                            s = Notification.maxActions,
                            a && s && a.length > s && console.warn("This browser only supports " + s + " actions.The remaining actions will not be displayed."),
                            [2, o.showNotification(n, r)];
                        case 3:
                            return this.bgMessageHandler ? [4, this.bgMessageHandler(t)] : [3, 5];
                        case 4:
                            return i.sent(),
                            [2];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            SwController.prototype.onSubChange_ = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var e, t, r, n;
                    return (0,
                    i.__generator)(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return o.trys.push([0, 2, , 3]),
                            [4, this.getSWRegistration_()];
                        case 1:
                            return e = o.sent(),
                            [3, 3];
                        case 2:
                            throw t = o.sent(),
                            w.create("unable-to-resubscribe", {
                                errorInfo: t
                            });
                        case 3:
                            return o.trys.push([3, 5, , 8]),
                            [4, e.pushManager.getSubscription()];
                        case 4:
                            return o.sent(),
                            [3, 8];
                        case 5:
                            return r = o.sent(),
                            [4, this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];
                        case 6:
                            if (!(n = o.sent()))
                                throw r;
                            return [4, this.deleteToken(n.fcmToken)];
                        case 7:
                            throw o.sent(),
                            r;
                        case 8:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            SwController.prototype.onNotificationClick_ = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var t, r, n, o;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            if (!(e.notification && e.notification.data && e.notification.data.FCM_MSG))
                                return [2];
                            if (e.action)
                                return [2];
                            if (e.stopImmediatePropagation(),
                            e.notification.close(),
                            !(t = e.notification.data.FCM_MSG).notification)
                                return [2];
                            if (!(r = t.fcmOptions && t.fcmOptions.link || t.notification.click_action)) {
                                if (!t.data || !(S in t.data))
                                    return [2];
                                r = self.location.origin
                            }
                            return [4, this.getWindowClient_(r)];
                        case 1:
                            return (n = i.sent()) ? [3, 4] : [4, self.clients.openWindow(r)];
                        case 2:
                            return n = i.sent(),
                            [4, (a = 3e3,
                            new Promise((function(e) {
                                setTimeout(e, a)
                            }
                            )))];
                        case 3:
                            return i.sent(),
                            [3, 6];
                        case 4:
                            return [4, n.focus()];
                        case 5:
                            n = i.sent(),
                            i.label = 6;
                        case 6:
                            return n ? (delete t.notification,
                            delete t.fcmOptions,
                            o = createNewMsg(_.NOTIFICATION_CLICKED, t),
                            [2, this.attemptToMessageClient_(n, o)]) : [2]
                        }
                        var a;
                        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                    }
                    ))
                }
                ))
            }
            ,
            SwController.prototype.getNotificationData_ = function(e) {
                var t;
                if (e && "object" == typeof e.notification) {
                    var r = (0,
                    i.__assign)({}, e.notification);
                    return r.data = (0,
                    i.__assign)((0,
                    i.__assign)({}, e.notification.data), ((t = {}).FCM_MSG = e,
                    t)),
                    r
                }
            }
            ,
            SwController.prototype.setBackgroundMessageHandler = function(e) {
                if (!e || "function" != typeof e)
                    throw w.create("bg-handler-function-expected");
                this.bgMessageHandler = e
            }
            ,
            SwController.prototype.getWindowClient_ = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var t, r, n, o;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return t = new URL(e,self.location.href).href,
                            [4, getClientList()];
                        case 1:
                            for (r = i.sent(),
                            n = null,
                            o = 0; o < r.length; o++)
                                if (new URL(r[o].url,self.location.href).href === t) {
                                    n = r[o];
                                    break
                                }
                            return [2, n]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            SwController.prototype.attemptToMessageClient_ = function(e, t) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(r) {
                        if (!e)
                            throw w.create("no-window-client-to-msg");
                        return e.postMessage(t),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            SwController.prototype.hasVisibleClients_ = function() {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, getClientList()];
                        case 1:
                            return [2, e.sent().some((function(e) {
                                return "visible" === e.visibilityState && !e.url.startsWith("chrome-extension://")
                            }
                            ))]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            SwController.prototype.sendMessageToWindowClients_ = function(e) {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var t, r, n = this;
                    return (0,
                    i.__generator)(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, getClientList()];
                        case 1:
                            return t = o.sent(),
                            r = createNewMsg(_.PUSH_MSG_RECEIVED, e),
                            [4, Promise.all(t.map((function(e) {
                                return n.attemptToMessageClient_(e, r)
                            }
                            )))];
                        case 2:
                            return o.sent(),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            SwController.prototype.getSWRegistration_ = function() {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(e) {
                        return [2, self.registration]
                    }
                    ))
                }
                ))
            }
            ,
            SwController.prototype.getPublicVapidKey_ = function() {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var e, t;
                    return (0,
                    i.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this.getSWRegistration_()];
                        case 1:
                            if (!(e = r.sent()))
                                throw w.create("sw-registration-expected");
                            return [4, this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];
                        case 2:
                            return null == (t = r.sent()) ? [2, m] : [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            SwController
        }(D);
        function getClientList() {
            return self.clients.matchAll({
                type: "window",
                includeUncontrolled: !0
            })
        }
        function createNewMsg(e, t) {
            return {
                firebaseMessagingType: e,
                firebaseMessagingData: t
            }
        }
        var P = function(e) {
            function WindowController(t) {
                var r = e.call(this, t) || this;
                return r.registrationToUse = null,
                r.publicVapidKeyToUse = null,
                r.messageObserver = null,
                r.tokenRefreshObserver = null,
                r.onMessageInternal = (0,
                a.createSubscribe)((function(e) {
                    r.messageObserver = e
                }
                )),
                r.onTokenRefreshInternal = (0,
                a.createSubscribe)((function(e) {
                    r.tokenRefreshObserver = e
                }
                )),
                r.setupSWMessageListener_(),
                r
            }
            return (0,
            i.__extends)(WindowController, e),
            WindowController.prototype.requestPermission = function() {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return (0,
                    i.__generator)(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return "granted" === this.getNotificationPermission_() ? [2] : [4, Notification.requestPermission()];
                        case 1:
                            if ("granted" === (e = t.sent()))
                                return [2];
                            throw "denied" === e ? w.create("permission-blocked") : w.create("permission-default")
                        }
                    }
                    ))
                }
                ))
            }
            ,
            WindowController.prototype.useServiceWorker = function(e) {
                if (!(e instanceof ServiceWorkerRegistration))
                    throw w.create("sw-registration-expected");
                if (null != this.registrationToUse)
                    throw w.create("use-sw-before-get-token");
                this.registrationToUse = e
            }
            ,
            WindowController.prototype.usePublicVapidKey = function(e) {
                if ("string" != typeof e)
                    throw w.create("invalid-public-vapid-key");
                if (null != this.publicVapidKeyToUse)
                    throw w.create("use-public-key-before-get-token");
                var t = base64ToArrayBuffer(e);
                if (65 !== t.length)
                    throw w.create("public-vapid-key-decryption-failed");
                this.publicVapidKeyToUse = t
            }
            ,
            WindowController.prototype.onMessage = function(e, t, r) {
                return "function" == typeof e ? this.onMessageInternal(e, t, r) : this.onMessageInternal(e)
            }
            ,
            WindowController.prototype.onTokenRefresh = function(e, t, r) {
                return "function" == typeof e ? this.onTokenRefreshInternal(e, t, r) : this.onTokenRefreshInternal(e)
            }
            ,
            WindowController.prototype.waitForRegistrationToActivate_ = function(e) {
                var t = e.installing || e.waiting || e.active;
                return new Promise((function(r, n) {
                    if (t)
                        if ("activated" !== t.state)
                            if ("redundant" !== t.state) {
                                var stateChangeListener = function() {
                                    if ("activated" === t.state)
                                        r(e);
                                    else {
                                        if ("redundant" !== t.state)
                                            return;
                                        n(w.create("sw-reg-redundant"))
                                    }
                                    t.removeEventListener("statechange", stateChangeListener)
                                };
                                t.addEventListener("statechange", stateChangeListener)
                            } else
                                n(w.create("sw-reg-redundant"));
                        else
                            r(e);
                    else
                        n(w.create("no-sw-in-reg"))
                }
                ))
            }
            ,
            WindowController.prototype.getSWRegistration_ = function() {
                var e = this;
                return this.registrationToUse ? this.waitForRegistrationToActivate_(this.registrationToUse) : (this.registrationToUse = null,
                navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                    scope: "/firebase-cloud-messaging-push-scope"
                }).catch((function(e) {
                    throw w.create("failed-serviceworker-registration", {
                        browserErrorMessage: e.message
                    })
                }
                )).then((function(t) {
                    return e.waitForRegistrationToActivate_(t).then((function() {
                        return e.registrationToUse = t,
                        t.update(),
                        t
                    }
                    ))
                }
                )))
            }
            ,
            WindowController.prototype.getPublicVapidKey_ = function() {
                return (0,
                i.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    i.__generator)(this, (function(e) {
                        return this.publicVapidKeyToUse ? [2, this.publicVapidKeyToUse] : [2, m]
                    }
                    ))
                }
                ))
            }
            ,
            WindowController.prototype.setupSWMessageListener_ = function() {
                var e = this;
                navigator.serviceWorker.addEventListener("message", (function(t) {
                    if (t.data && t.data.firebaseMessagingType && t.data.firebaseMessagingData) {
                        var r = t.data
                          , n = r.firebaseMessagingType
                          , o = r.firebaseMessagingData;
                        e.messageObserver && e.messageObserver.next(o);
                        var i = o.data;
                        if (i && S in i && "1" === i["google.c.a.e"]) {
                            var a = function getEventType(e) {
                                switch (e) {
                                case _.NOTIFICATION_CLICKED:
                                    return "notification_open";
                                case _.PUSH_MSG_RECEIVED:
                                    return "notification_foreground";
                                default:
                                    throw new Error
                                }
                            }/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
                            (n);
                            e.app.INTERNAL.analytics.logEvent(a, {
                                message_name: i["google.c.a.c_l"],
                                message_id: i[S],
                                message_time: i["google.c.a.ts"],
                                message_device_time: Math.floor(Date.now() / 1e3)
                            })
                        }
                    }
                }
                ), !1)
            }
            ,
            WindowController
        }(D);
        function isSupported() {
            return self && "ServiceWorkerGlobalScope"in self ? function isSWControllerSupported() {
                return "PushManager"in self && "Notification"in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
            }() : function isWindowControllerSupported() {
                return navigator.cookieEnabled && "serviceWorker"in navigator && "PushManager"in window && "Notification"in window && "fetch"in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
            }()
        }
        !function registerMessaging(e) {
            var t = {
                isSupported: isSupported
            };
            e.INTERNAL.registerService("messaging", (function(e) {
                if (!isSupported())
                    throw w.create("unsupported-browser");
                return self && "ServiceWorkerGlobalScope"in self ? new O(e) : new P(e)
            }
            ), t)
        }(o.ZP)
    },
    31313: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(70655)
          , o = {
            NODE_CLIENT: !1,
            NODE_ADMIN: !1,
            SDK_VERSION: "${JSCORE_VERSION}"
        }
          , assert = function(e, t) {
            if (!e)
                throw assertionError(t)
        }
          , assertionError = function(e) {
            return new Error("Firebase Database (" + o.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
        }
          , stringToByteArray = function(e) {
            for (var t = [], r = 0, n = 0; n < e.length; n++) {
                var o = e.charCodeAt(n);
                o < 128 ? t[r++] = o : o < 2048 ? (t[r++] = o >> 6 | 192,
                t[r++] = 63 & o | 128) : 55296 == (64512 & o) && n + 1 < e.length && 56320 == (64512 & e.charCodeAt(n + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++n)),
                t[r++] = o >> 18 | 240,
                t[r++] = o >> 12 & 63 | 128,
                t[r++] = o >> 6 & 63 | 128,
                t[r++] = 63 & o | 128) : (t[r++] = o >> 12 | 224,
                t[r++] = o >> 6 & 63 | 128,
                t[r++] = 63 & o | 128)
            }
            return t
        }
          , i = {
            byteToCharMap_: null,
            charToByteMap_: null,
            byteToCharMapWebSafe_: null,
            charToByteMapWebSafe_: null,
            ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            get ENCODED_VALS() {
                return this.ENCODED_VALS_BASE + "+/="
            },
            get ENCODED_VALS_WEBSAFE() {
                return this.ENCODED_VALS_BASE + "-_."
            },
            HAS_NATIVE_SUPPORT: "function" == typeof atob,
            encodeByteArray: function(e, t) {
                if (!Array.isArray(e))
                    throw Error("encodeByteArray takes an array as a parameter");
                this.init_();
                for (var r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, n = [], o = 0; o < e.length; o += 3) {
                    var i = e[o]
                      , a = o + 1 < e.length
                      , s = a ? e[o + 1] : 0
                      , c = o + 2 < e.length
                      , u = c ? e[o + 2] : 0
                      , l = i >> 2
                      , f = (3 & i) << 4 | s >> 4
                      , p = (15 & s) << 2 | u >> 6
                      , d = 63 & u;
                    c || (d = 64,
                    a || (p = 64)),
                    n.push(r[l], r[f], r[p], r[d])
                }
                return n.join("")
            },
            encodeString: function(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(stringToByteArray(e), t)
            },
            decodeString: function(e, t) {
                return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                    for (var t = [], r = 0, n = 0; r < e.length; ) {
                        var o = e[r++];
                        if (o < 128)
                            t[n++] = String.fromCharCode(o);
                        else if (o > 191 && o < 224) {
                            var i = e[r++];
                            t[n++] = String.fromCharCode((31 & o) << 6 | 63 & i)
                        } else if (o > 239 && o < 365) {
                            var a = ((7 & o) << 18 | (63 & (i = e[r++])) << 12 | (63 & (s = e[r++])) << 6 | 63 & e[r++]) - 65536;
                            t[n++] = String.fromCharCode(55296 + (a >> 10)),
                            t[n++] = String.fromCharCode(56320 + (1023 & a))
                        } else {
                            i = e[r++];
                            var s = e[r++];
                            t[n++] = String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & s)
                        }
                    }
                    return t.join("")
                }(this.decodeStringToByteArray(e, t))
            },
            decodeStringToByteArray: function(e, t) {
                this.init_();
                for (var r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, n = [], o = 0; o < e.length; ) {
                    var i = r[e.charAt(o++)]
                      , a = o < e.length ? r[e.charAt(o)] : 0
                      , s = ++o < e.length ? r[e.charAt(o)] : 64
                      , c = ++o < e.length ? r[e.charAt(o)] : 64;
                    if (++o,
                    null == i || null == a || null == s || null == c)
                        throw Error();
                    var u = i << 2 | a >> 4;
                    if (n.push(u),
                    64 !== s) {
                        var l = a << 4 & 240 | s >> 2;
                        if (n.push(l),
                        64 !== c) {
                            var f = s << 6 & 192 | c;
                            n.push(f)
                        }
                    }
                }
                return n
            },
            init_: function() {
                if (!this.byteToCharMap_) {
                    this.byteToCharMap_ = {},
                    this.charToByteMap_ = {},
                    this.byteToCharMapWebSafe_ = {},
                    this.charToByteMapWebSafe_ = {};
                    for (var e = 0; e < this.ENCODED_VALS.length; e++)
                        this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e),
                        this.charToByteMap_[this.byteToCharMap_[e]] = e,
                        this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e),
                        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e,
                        e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e,
                        this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                }
            }
        }
          , base64Decode = function(e) {
            try {
                return i.decodeString(e, !0)
            } catch (t) {
                console.error("base64Decode failed: ", t)
            }
            return null
        };
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function deepExtend(e, t) {
            if (!(t instanceof Object))
                return t;
            switch (t.constructor) {
            case Date:
                return new Date(t.getTime());
            case Object:
                void 0 === e && (e = {});
                break;
            case Array:
                e = [];
                break;
            default:
                return t
            }
            for (var r in t)
                t.hasOwnProperty(r) && (e[r] = deepExtend(e[r], t[r]));
            return e
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var a = function() {
            function Deferred() {
                var e = this;
                this.reject = function() {}
                ,
                this.resolve = function() {}
                ,
                this.promise = new Promise((function(t, r) {
                    e.resolve = t,
                    e.reject = r
                }
                ))
            }
            return Deferred.prototype.wrapCallback = function(e) {
                var t = this;
                return function(r, n) {
                    r ? t.reject(r) : t.resolve(n),
                    "function" == typeof e && (t.promise.catch((function() {}
                    )),
                    1 === e.length ? e(r) : e(r, n))
                }
            }
            ,
            Deferred
        }();
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function getUA() {
            return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var s = function(e) {
            function FirebaseError(t, r) {
                var n = e.call(this, r) || this;
                return n.code = t,
                n.name = "FirebaseError",
                Object.setPrototypeOf(n, FirebaseError.prototype),
                Error.captureStackTrace && Error.captureStackTrace(n, c.prototype.create),
                n
            }
            return n.__extends(FirebaseError, e),
            FirebaseError
        }(Error)
          , c = function() {
            function ErrorFactory(e, t, r) {
                this.service = e,
                this.serviceName = t,
                this.errors = r
            }
            return ErrorFactory.prototype.create = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++)
                    t[r - 1] = arguments[r];
                for (var n = t[0] || {}, o = this.service + "/" + e, i = this.errors[e], a = i ? replaceTemplate(i, n) : "Error", c = this.serviceName + ": " + a + " (" + o + ").", u = new s(o,c), l = 0, f = Object.keys(n); l < f.length; l++) {
                    var p = f[l];
                    "_" !== p.slice(-1) && (p in u && console.warn('Overwriting FirebaseError base field "' + p + '" can cause unexpected behavior.'),
                    u[p] = n[p])
                }
                return u
            }
            ,
            ErrorFactory
        }();
        function replaceTemplate(e, t) {
            return e.replace(u, (function(e, r) {
                var n = t[r];
                return null != n ? n.toString() : "<" + r + "?>"
            }
            ))
        }
        var u = /\{\$([^}]+)}/g;
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function jsonEval(e) {
            return JSON.parse(e)
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var decode = function(e) {
            var t = {}
              , r = {}
              , n = {}
              , o = "";
            try {
                var i = e.split(".");
                t = jsonEval(base64Decode(i[0]) || ""),
                r = jsonEval(base64Decode(i[1]) || ""),
                o = i[2],
                n = r.d || {},
                delete r.d
            } catch (a) {}
            return {
                header: t,
                claims: r,
                data: n,
                signature: o
            }
        };
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        var l = function() {
            function Sha1() {
                this.chain_ = [],
                this.buf_ = [],
                this.W_ = [],
                this.pad_ = [],
                this.inbuf_ = 0,
                this.total_ = 0,
                this.blockSize = 64,
                this.pad_[0] = 128;
                for (var e = 1; e < this.blockSize; ++e)
                    this.pad_[e] = 0;
                this.reset()
            }
            return Sha1.prototype.reset = function() {
                this.chain_[0] = 1732584193,
                this.chain_[1] = 4023233417,
                this.chain_[2] = 2562383102,
                this.chain_[3] = 271733878,
                this.chain_[4] = 3285377520,
                this.inbuf_ = 0,
                this.total_ = 0
            }
            ,
            Sha1.prototype.compress_ = function(e, t) {
                t || (t = 0);
                var r = this.W_;
                if ("string" == typeof e)
                    for (var n = 0; n < 16; n++)
                        r[n] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3),
                        t += 4;
                else
                    for (n = 0; n < 16; n++)
                        r[n] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3],
                        t += 4;
                for (n = 16; n < 80; n++) {
                    var o = r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16];
                    r[n] = 4294967295 & (o << 1 | o >>> 31)
                }
                var i, a, s = this.chain_[0], c = this.chain_[1], u = this.chain_[2], l = this.chain_[3], f = this.chain_[4];
                for (n = 0; n < 80; n++) {
                    n < 40 ? n < 20 ? (i = l ^ c & (u ^ l),
                    a = 1518500249) : (i = c ^ u ^ l,
                    a = 1859775393) : n < 60 ? (i = c & u | l & (c | u),
                    a = 2400959708) : (i = c ^ u ^ l,
                    a = 3395469782);
                    o = (s << 5 | s >>> 27) + i + f + a + r[n] & 4294967295;
                    f = l,
                    l = u,
                    u = 4294967295 & (c << 30 | c >>> 2),
                    c = s,
                    s = o
                }
                this.chain_[0] = this.chain_[0] + s & 4294967295,
                this.chain_[1] = this.chain_[1] + c & 4294967295,
                this.chain_[2] = this.chain_[2] + u & 4294967295,
                this.chain_[3] = this.chain_[3] + l & 4294967295,
                this.chain_[4] = this.chain_[4] + f & 4294967295
            }
            ,
            Sha1.prototype.update = function(e, t) {
                if (null != e) {
                    void 0 === t && (t = e.length);
                    for (var r = t - this.blockSize, n = 0, o = this.buf_, i = this.inbuf_; n < t; ) {
                        if (0 === i)
                            for (; n <= r; )
                                this.compress_(e, n),
                                n += this.blockSize;
                        if ("string" == typeof e) {
                            for (; n < t; )
                                if (o[i] = e.charCodeAt(n),
                                ++n,
                                ++i === this.blockSize) {
                                    this.compress_(o),
                                    i = 0;
                                    break
                                }
                        } else
                            for (; n < t; )
                                if (o[i] = e[n],
                                ++n,
                                ++i === this.blockSize) {
                                    this.compress_(o),
                                    i = 0;
                                    break
                                }
                    }
                    this.inbuf_ = i,
                    this.total_ += t
                }
            }
            ,
            Sha1.prototype.digest = function() {
                var e = []
                  , t = 8 * this.total_;
                this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                for (var r = this.blockSize - 1; r >= 56; r--)
                    this.buf_[r] = 255 & t,
                    t /= 256;
                this.compress_(this.buf_);
                var n = 0;
                for (r = 0; r < 5; r++)
                    for (var o = 24; o >= 0; o -= 8)
                        e[n] = this.chain_[r] >> o & 255,
                        ++n;
                return e
            }
            ,
            Sha1
        }();
        var f = function() {
            function ObserverProxy(e, t) {
                var r = this;
                this.observers = [],
                this.unsubscribes = [],
                this.observerCount = 0,
                this.task = Promise.resolve(),
                this.finalized = !1,
                this.onNoObservers = t,
                this.task.then((function() {
                    e(r)
                }
                )).catch((function(e) {
                    r.error(e)
                }
                ))
            }
            return ObserverProxy.prototype.next = function(e) {
                this.forEachObserver((function(t) {
                    t.next(e)
                }
                ))
            }
            ,
            ObserverProxy.prototype.error = function(e) {
                this.forEachObserver((function(t) {
                    t.error(e)
                }
                )),
                this.close(e)
            }
            ,
            ObserverProxy.prototype.complete = function() {
                this.forEachObserver((function(e) {
                    e.complete()
                }
                )),
                this.close()
            }
            ,
            ObserverProxy.prototype.subscribe = function(e, t, r) {
                var n, o = this;
                if (void 0 === e && void 0 === t && void 0 === r)
                    throw new Error("Missing Observer.");
                void 0 === (n = function implementsAnyMethods(e, t) {
                    if ("object" != typeof e || null === e)
                        return !1;
                    for (var r = 0, n = t; r < n.length; r++) {
                        var o = n[r];
                        if (o in e && "function" == typeof e[o])
                            return !0
                    }
                    return !1
                }(e, ["next", "error", "complete"]) ? e : {
                    next: e,
                    error: t,
                    complete: r
                }).next && (n.next = noop),
                void 0 === n.error && (n.error = noop),
                void 0 === n.complete && (n.complete = noop);
                var i = this.unsubscribeOne.bind(this, this.observers.length);
                return this.finalized && this.task.then((function() {
                    try {
                        o.finalError ? n.error(o.finalError) : n.complete()
                    } catch (e) {}
                }
                )),
                this.observers.push(n),
                i
            }
            ,
            ObserverProxy.prototype.unsubscribeOne = function(e) {
                void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e],
                this.observerCount -= 1,
                0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
            }
            ,
            ObserverProxy.prototype.forEachObserver = function(e) {
                if (!this.finalized)
                    for (var t = 0; t < this.observers.length; t++)
                        this.sendOne(t, e)
            }
            ,
            ObserverProxy.prototype.sendOne = function(e, t) {
                var r = this;
                this.task.then((function() {
                    if (void 0 !== r.observers && void 0 !== r.observers[e])
                        try {
                            t(r.observers[e])
                        } catch (n) {
                            "undefined" != typeof console && console.error && console.error(n)
                        }
                }
                ))
            }
            ,
            ObserverProxy.prototype.close = function(e) {
                var t = this;
                this.finalized || (this.finalized = !0,
                void 0 !== e && (this.finalError = e),
                this.task.then((function() {
                    t.observers = void 0,
                    t.onNoObservers = void 0
                }
                )))
            }
            ,
            ObserverProxy
        }();
        function noop() {}
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function errorPrefix(e, t, r) {
            var n = "";
            switch (t) {
            case 1:
                n = r ? "first" : "First";
                break;
            case 2:
                n = r ? "second" : "Second";
                break;
            case 3:
                n = r ? "third" : "Third";
                break;
            case 4:
                n = r ? "fourth" : "Fourth";
                break;
            default:
                throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
            }
            var o = e + " failed: ";
            return o += n + " argument "
        }
        t.CONSTANTS = o,
        t.Deferred = a,
        t.ErrorFactory = c,
        t.FirebaseError = s,
        t.Sha1 = l,
        t.assert = assert,
        t.assertionError = assertionError,
        t.async = function async(e, t) {
            return function() {
                for (var r = [], n = 0; n < arguments.length; n++)
                    r[n] = arguments[n];
                Promise.resolve(!0).then((function() {
                    e.apply(void 0, r)
                }
                )).catch((function(e) {
                    t && t(e)
                }
                ))
            }
        }
        ,
        t.base64 = i,
        t.base64Decode = base64Decode,
        t.base64Encode = function(e) {
            var t = stringToByteArray(e);
            return i.encodeByteArray(t, !0)
        }
        ,
        t.contains = /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function contains(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.createSubscribe = function createSubscribe(e, t) {
            var r = new f(e,t);
            return r.subscribe.bind(r)
        }
        ,
        t.decode = decode,
        t.deepCopy = /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        function deepCopy(e) {
            return deepExtend(void 0, e)
        }
        ,
        t.deepExtend = deepExtend,
        t.errorPrefix = errorPrefix,
        t.getUA = getUA,
        t.isAdmin = function(e) {
            var t = decode(e).claims;
            return "object" == typeof t && !0 === t.admin
        }
        ,
        t.isBrowser = function isBrowser() {
            return "object" == typeof self && self.self === self
        }
        ,
        t.isEmpty = function isEmpty(e) {
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t))
                    return !1;
            return !0
        }
        ,
        t.isMobileCordova = function isMobileCordova() {
            return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())
        }
        ,
        t.isNode = function isNode() {
            try {
                return "[object process]" === Object.prototype.toString.call(r.g.process)
            } catch (e) {
                return !1
            }
        }
        ,
        t.isNodeSdk = function isNodeSdk() {
            return !0 === o.NODE_CLIENT || !0 === o.NODE_ADMIN
        }
        ,
        t.isReactNative = function isReactNative() {
            return "object" == typeof navigator && "ReactNative" === navigator.product
        }
        ,
        t.isValidFormat = function(e) {
            var t = decode(e).claims;
            return !!t && "object" == typeof t && t.hasOwnProperty("iat")
        }
        ,
        t.isValidTimestamp = function(e) {
            var t = decode(e).claims
              , r = Math.floor((new Date).getTime() / 1e3)
              , n = 0
              , o = 0;
            return "object" == typeof t && (t.hasOwnProperty("nbf") ? n = t.nbf : t.hasOwnProperty("iat") && (n = t.iat),
            o = t.hasOwnProperty("exp") ? t.exp : n + 86400),
            !!r && !!n && !!o && r >= n && r <= o
        }
        ,
        t.issuedAtTime = function(e) {
            var t = decode(e).claims;
            return "object" == typeof t && t.hasOwnProperty("iat") ? t.iat : null
        }
        ,
        t.jsonEval = jsonEval,
        t.map = function map(e, t, r) {
            var n = {};
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && (n[o] = t.call(r, e[o], o, e));
            return n
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        ,
        t.querystring = function querystring(e) {
            for (var t = [], _loop_1 = function(e, r) {
                Array.isArray(r) ? r.forEach((function(r) {
                    t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r))
                }
                )) : t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r))
            }, r = 0, n = Object.entries(e); r < n.length; r++) {
                var o = n[r];
                _loop_1(o[0], o[1])
            }
            return t.length ? "&" + t.join("&") : ""
        }
        ,
        t.querystringDecode = function querystringDecode(e) {
            var t = {};
            return e.replace(/^\?/, "").split("&").forEach((function(e) {
                if (e) {
                    var r = e.split("=");
                    t[r[0]] = r[1]
                }
            }
            )),
            t
        }
        ,
        t.safeGet = function safeGet(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
        }
        ,
        t.stringLength = function(e) {
            for (var t = 0, r = 0; r < e.length; r++) {
                var n = e.charCodeAt(r);
                n < 128 ? t++ : n < 2048 ? t += 2 : n >= 55296 && n <= 56319 ? (t += 4,
                r++) : t += 3
            }
            return t
        }
        ,
        t.stringToByteArray = function(e) {
            for (var t = [], r = 0, n = 0; n < e.length; n++) {
                var o = e.charCodeAt(n);
                if (o >= 55296 && o <= 56319) {
                    var i = o - 55296;
                    n++,
                    assert(n < e.length, "Surrogate pair missing trail surrogate."),
                    o = 65536 + (i << 10) + (e.charCodeAt(n) - 56320)
                }
                o < 128 ? t[r++] = o : o < 2048 ? (t[r++] = o >> 6 | 192,
                t[r++] = 63 & o | 128) : o < 65536 ? (t[r++] = o >> 12 | 224,
                t[r++] = o >> 6 & 63 | 128,
                t[r++] = 63 & o | 128) : (t[r++] = o >> 18 | 240,
                t[r++] = o >> 12 & 63 | 128,
                t[r++] = o >> 6 & 63 | 128,
                t[r++] = 63 & o | 128)
            }
            return t
        }
        ,
        t.stringify = function stringify(e) {
            return JSON.stringify(e)
        }
        ,
        t.validateArgCount = function(e, t, r, n) {
            var o;
            if (n < t ? o = "at least " + t : n > r && (o = 0 === r ? "none" : "no more than " + r),
            o)
                throw new Error(e + " failed: Was called with " + n + (1 === n ? " argument." : " arguments.") + " Expects " + o + ".")
        }
        ,
        t.validateCallback = function validateCallback(e, t, r, n) {
            if ((!n || r) && "function" != typeof r)
                throw new Error(errorPrefix(e, t, n) + "must be a valid function.")
        }
        ,
        t.validateContextObject = function validateContextObject(e, t, r, n) {
            if ((!n || r) && ("object" != typeof r || null === r))
                throw new Error(errorPrefix(e, t, n) + "must be a valid context object.")
        }
        /**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        ,
        t.validateNamespace = function validateNamespace(e, t, r, n) {
            if ((!n || r) && "string" != typeof r)
                throw new Error(errorPrefix(e, t, n) + "must be a valid firebase namespace.")
        }
    },
    98676: function(e, t) {
        !function(e) {
            "use strict";
            function toArray(e) {
                return Array.prototype.slice.call(e)
            }
            function promisifyRequest(e) {
                return new Promise((function(t, r) {
                    e.onsuccess = function() {
                        t(e.result)
                    }
                    ,
                    e.onerror = function() {
                        r(e.error)
                    }
                }
                ))
            }
            function promisifyRequestCall(e, t, r) {
                var n, o = new Promise((function(o, i) {
                    promisifyRequest(n = e[t].apply(e, r)).then(o, i)
                }
                ));
                return o.request = n,
                o
            }
            function promisifyCursorRequestCall(e, t, r) {
                var n = promisifyRequestCall(e, t, r);
                return n.then((function(e) {
                    if (e)
                        return new Cursor(e,n.request)
                }
                ))
            }
            function proxyProperties(e, t, r) {
                r.forEach((function(r) {
                    Object.defineProperty(e.prototype, r, {
                        get: function() {
                            return this[t][r]
                        },
                        set: function(e) {
                            this[t][r] = e
                        }
                    })
                }
                ))
            }
            function proxyRequestMethods(e, t, r, n) {
                n.forEach((function(n) {
                    n in r.prototype && (e.prototype[n] = function() {
                        return promisifyRequestCall(this[t], n, arguments)
                    }
                    )
                }
                ))
            }
            function proxyMethods(e, t, r, n) {
                n.forEach((function(n) {
                    n in r.prototype && (e.prototype[n] = function() {
                        return this[t][n].apply(this[t], arguments)
                    }
                    )
                }
                ))
            }
            function proxyCursorRequestMethods(e, t, r, n) {
                n.forEach((function(n) {
                    n in r.prototype && (e.prototype[n] = function() {
                        return promisifyCursorRequestCall(this[t], n, arguments)
                    }
                    )
                }
                ))
            }
            function Index(e) {
                this._index = e
            }
            function Cursor(e, t) {
                this._cursor = e,
                this._request = t
            }
            function ObjectStore(e) {
                this._store = e
            }
            function Transaction(e) {
                this._tx = e,
                this.complete = new Promise((function(t, r) {
                    e.oncomplete = function() {
                        t()
                    }
                    ,
                    e.onerror = function() {
                        r(e.error)
                    }
                    ,
                    e.onabort = function() {
                        r(e.error)
                    }
                }
                ))
            }
            function UpgradeDB(e, t, r) {
                this._db = e,
                this.oldVersion = t,
                this.transaction = new Transaction(r)
            }
            function DB(e) {
                this._db = e
            }
            function openDb(e, t, r) {
                var n = promisifyRequestCall(indexedDB, "open", [e, t])
                  , o = n.request;
                return o && (o.onupgradeneeded = function(e) {
                    r && r(new UpgradeDB(o.result,e.oldVersion,o.transaction))
                }
                ),
                n.then((function(e) {
                    return new DB(e)
                }
                ))
            }
            function deleteDb(e) {
                return promisifyRequestCall(indexedDB, "deleteDatabase", [e])
            }
            proxyProperties(Index, "_index", ["name", "keyPath", "multiEntry", "unique"]),
            proxyRequestMethods(Index, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]),
            proxyCursorRequestMethods(Index, "_index", IDBIndex, ["openCursor", "openKeyCursor"]),
            proxyProperties(Cursor, "_cursor", ["direction", "key", "primaryKey", "value"]),
            proxyRequestMethods(Cursor, "_cursor", IDBCursor, ["update", "delete"]),
            ["advance", "continue", "continuePrimaryKey"].forEach((function(e) {
                e in IDBCursor.prototype && (Cursor.prototype[e] = function() {
                    var t = this
                      , r = arguments;
                    return Promise.resolve().then((function() {
                        return t._cursor[e].apply(t._cursor, r),
                        promisifyRequest(t._request).then((function(e) {
                            if (e)
                                return new Cursor(e,t._request)
                        }
                        ))
                    }
                    ))
                }
                )
            }
            )),
            ObjectStore.prototype.createIndex = function() {
                return new Index(this._store.createIndex.apply(this._store, arguments))
            }
            ,
            ObjectStore.prototype.index = function() {
                return new Index(this._store.index.apply(this._store, arguments))
            }
            ,
            proxyProperties(ObjectStore, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]),
            proxyRequestMethods(ObjectStore, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]),
            proxyCursorRequestMethods(ObjectStore, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]),
            proxyMethods(ObjectStore, "_store", IDBObjectStore, ["deleteIndex"]),
            Transaction.prototype.objectStore = function() {
                return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments))
            }
            ,
            proxyProperties(Transaction, "_tx", ["objectStoreNames", "mode"]),
            proxyMethods(Transaction, "_tx", IDBTransaction, ["abort"]),
            UpgradeDB.prototype.createObjectStore = function() {
                return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments))
            }
            ,
            proxyProperties(UpgradeDB, "_db", ["name", "version", "objectStoreNames"]),
            proxyMethods(UpgradeDB, "_db", IDBDatabase, ["deleteObjectStore", "close"]),
            DB.prototype.transaction = function() {
                return new Transaction(this._db.transaction.apply(this._db, arguments))
            }
            ,
            proxyProperties(DB, "_db", ["name", "version", "objectStoreNames"]),
            proxyMethods(DB, "_db", IDBDatabase, ["close"]),
            ["openCursor", "openKeyCursor"].forEach((function(e) {
                [ObjectStore, Index].forEach((function(t) {
                    e in t.prototype && (t.prototype[e.replace("open", "iterate")] = function() {
                        var t = toArray(arguments)
                          , r = t[t.length - 1]
                          , n = this._store || this._index
                          , o = n[e].apply(n, t.slice(0, -1));
                        o.onsuccess = function() {
                            r(o.result)
                        }
                    }
                    )
                }
                ))
            }
            )),
            [Index, ObjectStore].forEach((function(e) {
                e.prototype.getAll || (e.prototype.getAll = function(e, t) {
                    var r = this
                      , n = [];
                    return new Promise((function(o) {
                        r.iterateCursor(e, (function(e) {
                            e ? (n.push(e.value),
                            void 0 === t || n.length != t ? e.continue() : o(n)) : o(n)
                        }
                        ))
                    }
                    ))
                }
                )
            }
            )),
            e.openDb = openDb,
            e.deleteDb = deleteDb,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(t)
    },
    70655: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            __extends: function() {
                return __extends
            },
            __assign: function() {
                return __assign
            },
            __rest: function() {
                return __rest
            },
            __decorate: function() {
                return __decorate
            },
            __param: function() {
                return __param
            },
            __metadata: function() {
                return __metadata
            },
            __awaiter: function() {
                return __awaiter
            },
            __generator: function() {
                return __generator
            },
            __createBinding: function() {
                return n
            },
            __exportStar: function() {
                return __exportStar
            },
            __values: function() {
                return __values
            },
            __read: function() {
                return __read
            },
            __spread: function() {
                return __spread
            },
            __spreadArrays: function() {
                return __spreadArrays
            },
            __spreadArray: function() {
                return __spreadArray
            },
            __await: function() {
                return __await
            },
            __asyncGenerator: function() {
                return __asyncGenerator
            },
            __asyncDelegator: function() {
                return __asyncDelegator
            },
            __asyncValues: function() {
                return __asyncValues
            },
            __makeTemplateObject: function() {
                return __makeTemplateObject
            },
            __importStar: function() {
                return __importStar
            },
            __importDefault: function() {
                return __importDefault
            },
            __classPrivateFieldGet: function() {
                return __classPrivateFieldGet
            },
            __classPrivateFieldSet: function() {
                return __classPrivateFieldSet
            }
        });
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var extendStatics = function(e, t) {
            return extendStatics = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            ,
            extendStatics(e, t)
        };
        function __extends(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function __() {
                this.constructor = e
            }
            extendStatics(e, t),
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
            new __)
        }
        var __assign = function() {
            return __assign = Object.assign || function __assign(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ,
            __assign.apply(this, arguments)
        };
        function __rest(e, t) {
            var r = {};
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
            }
            return r
        }
        function __decorate(e, t, r, n) {
            var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(e, t, r, n);
            else
                for (var s = e.length - 1; s >= 0; s--)
                    (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
            return i > 3 && a && Object.defineProperty(t, r, a),
            a
        }
        function __param(e, t) {
            return function(r, n) {
                t(r, n, e)
            }
        }
        function __metadata(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                return Reflect.metadata(e, t)
        }
        function __awaiter(e, t, r, n) {
            return new (r || (r = Promise))((function(o, i) {
                function fulfilled(e) {
                    try {
                        step(n.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function rejected(e) {
                    try {
                        step(n.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function step(e) {
                    e.done ? o(e.value) : function adopt(e) {
                        return e instanceof r ? e : new r((function(t) {
                            t(e)
                        }
                        ))
                    }(e.value).then(fulfilled, rejected)
                }
                step((n = n.apply(e, t || [])).next())
            }
            ))
        }
        function __generator(e, t) {
            var r, n, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function verb(i) {
                return function(s) {
                    return function step(i) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (r = 1,
                                n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, i[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    n = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = a.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = t.call(e, a)
                            } catch (s) {
                                i = [6, s],
                                n = 0
                            } finally {
                                r = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
        var n = Object.create ? function(e, t, r, n) {
            void 0 === n && (n = r),
            Object.defineProperty(e, n, {
                enumerable: !0,
                get: function() {
                    return t[r]
                }
            })
        }
        : function(e, t, r, n) {
            void 0 === n && (n = r),
            e[n] = t[r]
        }
        ;
        function __exportStar(e, t) {
            for (var r in e)
                "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
        }
        function __values(e) {
            var t = "function" == typeof Symbol && Symbol.iterator
              , r = t && e[t]
              , n = 0;
            if (r)
                return r.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && n >= e.length && (e = void 0),
                        {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function __read(e, t) {
            var r = "function" == typeof Symbol && e[Symbol.iterator];
            if (!r)
                return e;
            var n, o, i = r.call(e), a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
                    a.push(n.value)
            } catch (s) {
                o = {
                    error: s
                }
            } finally {
                try {
                    n && !n.done && (r = i.return) && r.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
        function __spread() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e = e.concat(__read(arguments[t]));
            return e
        }
        function __spreadArrays() {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++)
                e += arguments[t].length;
            var n = Array(e)
              , o = 0;
            for (t = 0; t < r; t++)
                for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
                o++)
                    n[o] = i[a];
            return n
        }
        function __spreadArray(e, t, r) {
            if (r || 2 === arguments.length)
                for (var n, o = 0, i = t.length; o < i; o++)
                    !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)),
                    n[o] = t[o]);
            return e.concat(n || Array.prototype.slice.call(t))
        }
        function __await(e) {
            return this instanceof __await ? (this.v = e,
            this) : new __await(e)
        }
        function __asyncGenerator(e, t, r) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var n, o = r.apply(e, t || []), i = [];
            return n = {},
            verb("next"),
            verb("throw"),
            verb("return"),
            n[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            n;
            function verb(e) {
                o[e] && (n[e] = function(t) {
                    return new Promise((function(r, n) {
                        i.push([e, t, r, n]) > 1 || resume(e, t)
                    }
                    ))
                }
                )
            }
            function resume(e, t) {
                try {
                    !function step(e) {
                        e.value instanceof __await ? Promise.resolve(e.value.v).then(fulfill, reject) : settle(i[0][2], e)
                    }(o[e](t))
                } catch (r) {
                    settle(i[0][3], r)
                }
            }
            function fulfill(e) {
                resume("next", e)
            }
            function reject(e) {
                resume("throw", e)
            }
            function settle(e, t) {
                e(t),
                i.shift(),
                i.length && resume(i[0][0], i[0][1])
            }
        }
        function __asyncDelegator(e) {
            var t, r;
            return t = {},
            verb("next"),
            verb("throw", (function(e) {
                throw e
            }
            )),
            verb("return"),
            t[Symbol.iterator] = function() {
                return this
            }
            ,
            t;
            function verb(n, o) {
                t[n] = e[n] ? function(t) {
                    return (r = !r) ? {
                        value: __await(e[n](t)),
                        done: "return" === n
                    } : o ? o(t) : t
                }
                : o
            }
        }
        function __asyncValues(e) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, r = e[Symbol.asyncIterator];
            return r ? r.call(e) : (e = __values(e),
            t = {},
            verb("next"),
            verb("throw"),
            verb("return"),
            t[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            t);
            function verb(r) {
                t[r] = e[r] && function(t) {
                    return new Promise((function(n, o) {
                        (function settle(e, t, r, n) {
                            Promise.resolve(n).then((function(t) {
                                e({
                                    value: t,
                                    done: r
                                })
                            }
                            ), t)
                        }
                        )(n, o, (t = e[r](t)).done, t.value)
                    }
                    ))
                }
            }
        }
        function __makeTemplateObject(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t,
            e
        }
        var o = Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        ;
        function __importStar(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var r in e)
                    "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
            return o(t, e),
            t
        }
        function __importDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function __classPrivateFieldGet(e, t, r, n) {
            if ("a" === r && !n)
                throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
        }
        function __classPrivateFieldSet(e, t, r, n, o) {
            if ("m" === n)
                throw new TypeError("Private method is not writable");
            if ("a" === n && !o)
                throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !o : !t.has(e))
                throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r),
            r
        }
    },
    2693: function(e, t, r) {
        "use strict";
        var n = r(93242)
          , o = r(17179);
        t.Z = function baseForOwn(e, t) {
            return e && (0,
            n.Z)(e, t, o.Z)
        }
    },
    68882: function(e, t, r) {
        "use strict";
        var n = r(69203);
        t.Z = function castFunction(e) {
            return "function" == typeof e ? e : n.Z
        }
    },
    92414: function(e, t, r) {
        "use strict";
        var n = r(2693)
          , o = r(68882);
        t.Z = function forOwn(e, t) {
            return e && (0,
            n.Z)(e, (0,
            o.Z)(t))
        }
    }
}]);
