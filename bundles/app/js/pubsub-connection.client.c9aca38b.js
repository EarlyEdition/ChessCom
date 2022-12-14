!function() {
    var e, t, n, i, r, o, s = {
        669: function(e, t, n) {
            e.exports = n(609)
        },
        448: function(e, t, n) {
            "use strict";
            var i = n(867)
              , r = n(26)
              , o = n(372)
              , s = n(327)
              , a = n(97)
              , c = n(109)
              , u = n(985)
              , l = n(61)
              , h = n(419)
              , f = n(263);
            e.exports = function xhrAdapter(e) {
                return new Promise((function dispatchXhrRequest(t, n) {
                    var d, p = e.data, _ = e.headers, v = e.responseType;
                    function done() {
                        e.cancelToken && e.cancelToken.unsubscribe(d),
                        e.signal && e.signal.removeEventListener("abort", d)
                    }
                    i.isFormData(p) && delete _["Content-Type"];
                    var y = new XMLHttpRequest;
                    if (e.auth) {
                        var g = e.auth.username || ""
                          , b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        _.Authorization = "Basic " + btoa(g + ":" + b)
                    }
                    var m = a(e.baseURL, e.url);
                    function onloadend() {
                        if (y) {
                            var i = "getAllResponseHeaders"in y ? c(y.getAllResponseHeaders()) : null
                              , o = {
                                data: v && "text" !== v && "json" !== v ? y.response : y.responseText,
                                status: y.status,
                                statusText: y.statusText,
                                headers: i,
                                config: e,
                                request: y
                            };
                            r((function _resolve(e) {
                                t(e),
                                done()
                            }
                            ), (function _reject(e) {
                                n(e),
                                done()
                            }
                            ), o),
                            y = null
                        }
                    }
                    if (y.open(e.method.toUpperCase(), s(m, e.params, e.paramsSerializer), !0),
                    y.timeout = e.timeout,
                    "onloadend"in y ? y.onloadend = onloadend : y.onreadystatechange = function handleLoad() {
                        y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:")) && setTimeout(onloadend)
                    }
                    ,
                    y.onabort = function handleAbort() {
                        y && (n(l("Request aborted", e, "ECONNABORTED", y)),
                        y = null)
                    }
                    ,
                    y.onerror = function handleError() {
                        n(l("Network Error", e, null, y)),
                        y = null
                    }
                    ,
                    y.ontimeout = function handleTimeout() {
                        var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
                          , i = e.transitional || h.transitional;
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                        n(l(t, e, i.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", y)),
                        y = null
                    }
                    ,
                    i.isStandardBrowserEnv()) {
                        var w = (e.withCredentials || u(m)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
                        w && (_[e.xsrfHeaderName] = w)
                    }
                    "setRequestHeader"in y && i.forEach(_, (function setRequestHeader(e, t) {
                        void 0 === p && "content-type" === t.toLowerCase() ? delete _[t] : y.setRequestHeader(t, e)
                    }
                    )),
                    i.isUndefined(e.withCredentials) || (y.withCredentials = !!e.withCredentials),
                    v && "json" !== v && (y.responseType = e.responseType),
                    "function" == typeof e.onDownloadProgress && y.addEventListener("progress", e.onDownloadProgress),
                    "function" == typeof e.onUploadProgress && y.upload && y.upload.addEventListener("progress", e.onUploadProgress),
                    (e.cancelToken || e.signal) && (d = function(e) {
                        y && (n(!e || e && e.type ? new f("canceled") : e),
                        y.abort(),
                        y = null)
                    }
                    ,
                    e.cancelToken && e.cancelToken.subscribe(d),
                    e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d))),
                    p || (p = null),
                    y.send(p)
                }
                ))
            }
        },
        609: function(e, t, n) {
            "use strict";
            var i = n(867)
              , r = n(849)
              , o = n(321)
              , s = n(185);
            var a = function createInstance(e) {
                var t = new o(e)
                  , n = r(o.prototype.request, t);
                return i.extend(n, o.prototype, t),
                i.extend(n, t),
                n.create = function create(t) {
                    return createInstance(s(e, t))
                }
                ,
                n
            }(n(419));
            a.Axios = o,
            a.Cancel = n(263),
            a.CancelToken = n(972),
            a.isCancel = n(502),
            a.VERSION = n(288).version,
            a.all = function all(e) {
                return Promise.all(e)
            }
            ,
            a.spread = n(713),
            a.isAxiosError = n(268),
            e.exports = a,
            e.exports.default = a
        },
        263: function(e) {
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
        972: function(e, t, n) {
            "use strict";
            var i = n(263);
            function CancelToken(e) {
                if ("function" != typeof e)
                    throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function promiseExecutor(e) {
                    t = e
                }
                ));
                var n = this;
                this.promise.then((function(e) {
                    if (n._listeners) {
                        var t, i = n._listeners.length;
                        for (t = 0; t < i; t++)
                            n._listeners[t](e);
                        n._listeners = null
                    }
                }
                )),
                this.promise.then = function(e) {
                    var t, i = new Promise((function(e) {
                        n.subscribe(e),
                        t = e
                    }
                    )).then(e);
                    return i.cancel = function reject() {
                        n.unsubscribe(t)
                    }
                    ,
                    i
                }
                ,
                e((function cancel(e) {
                    n.reason || (n.reason = new i(e),
                    t(n.reason))
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
        502: function(e) {
            "use strict";
            e.exports = function isCancel(e) {
                return !(!e || !e.__CANCEL__)
            }
        },
        321: function(e, t, n) {
            "use strict";
            var i = n(867)
              , r = n(327)
              , o = n(782)
              , s = n(572)
              , a = n(185)
              , c = n(875)
              , u = c.validators;
            function Axios(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new o,
                    response: new o
                }
            }
            Axios.prototype.request = function request(e, t) {
                if ("string" == typeof e ? (t = t || {}).url = e : t = e || {},
                !t.url)
                    throw new Error("Provided config url is not valid");
                (t = a(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                var n = t.transitional;
                void 0 !== n && c.assertOptions(n, {
                    silentJSONParsing: u.transitional(u.boolean),
                    forcedJSONParsing: u.transitional(u.boolean),
                    clarifyTimeoutError: u.transitional(u.boolean)
                }, !1);
                var i = []
                  , r = !0;
                this.interceptors.request.forEach((function unshiftRequestInterceptors(e) {
                    "function" == typeof e.runWhen && !1 === e.runWhen(t) || (r = r && e.synchronous,
                    i.unshift(e.fulfilled, e.rejected))
                }
                ));
                var o, l = [];
                if (this.interceptors.response.forEach((function pushResponseInterceptors(e) {
                    l.push(e.fulfilled, e.rejected)
                }
                )),
                !r) {
                    var h = [s, void 0];
                    for (Array.prototype.unshift.apply(h, i),
                    h = h.concat(l),
                    o = Promise.resolve(t); h.length; )
                        o = o.then(h.shift(), h.shift());
                    return o
                }
                for (var f = t; i.length; ) {
                    var d = i.shift()
                      , p = i.shift();
                    try {
                        f = d(f)
                    } catch (_) {
                        p(_);
                        break
                    }
                }
                try {
                    o = s(f)
                } catch (_) {
                    return Promise.reject(_)
                }
                for (; l.length; )
                    o = o.then(l.shift(), l.shift());
                return o
            }
            ,
            Axios.prototype.getUri = function getUri(e) {
                if (!e.url)
                    throw new Error("Provided config url is not valid");
                return e = a(this.defaults, e),
                r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }
            ,
            i.forEach(["delete", "get", "head", "options"], (function forEachMethodNoData(e) {
                Axios.prototype[e] = function(t, n) {
                    return this.request(a(n || {}, {
                        method: e,
                        url: t,
                        data: (n || {}).data
                    }))
                }
            }
            )),
            i.forEach(["post", "put", "patch"], (function forEachMethodWithData(e) {
                Axios.prototype[e] = function(t, n, i) {
                    return this.request(a(i || {}, {
                        method: e,
                        url: t,
                        data: n
                    }))
                }
            }
            )),
            e.exports = Axios
        },
        782: function(e, t, n) {
            "use strict";
            var i = n(867);
            function InterceptorManager() {
                this.handlers = []
            }
            InterceptorManager.prototype.use = function use(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }),
                this.handlers.length - 1
            }
            ,
            InterceptorManager.prototype.eject = function eject(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            ,
            InterceptorManager.prototype.forEach = function forEach(e) {
                i.forEach(this.handlers, (function forEachHandler(t) {
                    null !== t && e(t)
                }
                ))
            }
            ,
            e.exports = InterceptorManager
        },
        97: function(e, t, n) {
            "use strict";
            var i = n(793)
              , r = n(303);
            e.exports = function buildFullPath(e, t) {
                return e && !i(t) ? r(e, t) : t
            }
        },
        61: function(e, t, n) {
            "use strict";
            var i = n(481);
            e.exports = function createError(e, t, n, r, o) {
                var s = new Error(e);
                return i(s, t, n, r, o)
            }
        },
        572: function(e, t, n) {
            "use strict";
            var i = n(867)
              , r = n(527)
              , o = n(502)
              , s = n(419)
              , a = n(263);
            function throwIfCancellationRequested(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(),
                e.signal && e.signal.aborted)
                    throw new a("canceled")
            }
            e.exports = function dispatchRequest(e) {
                return throwIfCancellationRequested(e),
                e.headers = e.headers || {},
                e.data = r.call(e, e.data, e.headers, e.transformRequest),
                e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
                i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function cleanHeaderConfig(t) {
                    delete e.headers[t]
                }
                )),
                (e.adapter || s.adapter)(e).then((function onAdapterResolution(t) {
                    return throwIfCancellationRequested(e),
                    t.data = r.call(e, t.data, t.headers, e.transformResponse),
                    t
                }
                ), (function onAdapterRejection(t) {
                    return o(t) || (throwIfCancellationRequested(e),
                    t && t.response && (t.response.data = r.call(e, t.response.data, t.response.headers, e.transformResponse))),
                    Promise.reject(t)
                }
                ))
            }
        },
        481: function(e) {
            "use strict";
            e.exports = function enhanceError(e, t, n, i, r) {
                return e.config = t,
                n && (e.code = n),
                e.request = i,
                e.response = r,
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
        185: function(e, t, n) {
            "use strict";
            var i = n(867);
            e.exports = function mergeConfig(e, t) {
                t = t || {};
                var n = {};
                function getMergedValue(e, t) {
                    return i.isPlainObject(e) && i.isPlainObject(t) ? i.merge(e, t) : i.isPlainObject(t) ? i.merge({}, t) : i.isArray(t) ? t.slice() : t
                }
                function mergeDeepProperties(n) {
                    return i.isUndefined(t[n]) ? i.isUndefined(e[n]) ? void 0 : getMergedValue(void 0, e[n]) : getMergedValue(e[n], t[n])
                }
                function valueFromConfig2(e) {
                    if (!i.isUndefined(t[e]))
                        return getMergedValue(void 0, t[e])
                }
                function defaultToConfig2(n) {
                    return i.isUndefined(t[n]) ? i.isUndefined(e[n]) ? void 0 : getMergedValue(void 0, e[n]) : getMergedValue(void 0, t[n])
                }
                function mergeDirectKeys(n) {
                    return n in t ? getMergedValue(e[n], t[n]) : n in e ? getMergedValue(void 0, e[n]) : void 0
                }
                var r = {
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
                return i.forEach(Object.keys(e).concat(Object.keys(t)), (function computeConfigValue(e) {
                    var t = r[e] || mergeDeepProperties
                      , o = t(e);
                    i.isUndefined(o) && t !== mergeDirectKeys || (n[e] = o)
                }
                )),
                n
            }
        },
        26: function(e, t, n) {
            "use strict";
            var i = n(61);
            e.exports = function settle(e, t, n) {
                var r = n.config.validateStatus;
                n.status && r && !r(n.status) ? t(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
            }
        },
        527: function(e, t, n) {
            "use strict";
            var i = n(867)
              , r = n(419);
            e.exports = function transformData(e, t, n) {
                var o = this || r;
                return i.forEach(n, (function transform(n) {
                    e = n.call(o, e, t)
                }
                )),
                e
            }
        },
        419: function(e, t, n) {
            "use strict";
            var i = n(155)
              , r = n(867)
              , o = n(16)
              , s = n(481)
              , a = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function setContentTypeIfUnset(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var c = {
                transitional: {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                adapter: function getDefaultAdapter() {
                    var e;
                    return ("undefined" != typeof XMLHttpRequest || void 0 !== i && "[object process]" === Object.prototype.toString.call(i)) && (e = n(448)),
                    e
                }(),
                transformRequest: [function transformRequest(e, t) {
                    return o(t, "Accept"),
                    o(t, "Content-Type"),
                    r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (setContentTypeIfUnset(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()) : r.isObject(e) || t && "application/json" === t["Content-Type"] ? (setContentTypeIfUnset(t, "application/json"),
                    function stringifySafely(e, t, n) {
                        if (r.isString(e))
                            try {
                                return (t || JSON.parse)(e),
                                r.trim(e)
                            } catch (i) {
                                if ("SyntaxError" !== i.name)
                                    throw i
                            }
                        return (n || JSON.stringify)(e)
                    }(e)) : e
                }
                ],
                transformResponse: [function transformResponse(e) {
                    var t = this.transitional || c.transitional
                      , n = t && t.silentJSONParsing
                      , i = t && t.forcedJSONParsing
                      , o = !n && "json" === this.responseType;
                    if (o || i && r.isString(e) && e.length)
                        try {
                            return JSON.parse(e)
                        } catch (a) {
                            if (o) {
                                if ("SyntaxError" === a.name)
                                    throw s(a, this, "E_JSON_PARSE");
                                throw a
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
            r.forEach(["delete", "get", "head"], (function forEachMethodNoData(e) {
                c.headers[e] = {}
            }
            )),
            r.forEach(["post", "put", "patch"], (function forEachMethodWithData(e) {
                c.headers[e] = r.merge(a)
            }
            )),
            e.exports = c
        },
        288: function(e) {
            e.exports = {
                version: "0.25.0"
            }
        },
        849: function(e) {
            "use strict";
            e.exports = function bind(e, t) {
                return function wrap() {
                    for (var n = new Array(arguments.length), i = 0; i < n.length; i++)
                        n[i] = arguments[i];
                    return e.apply(t, n)
                }
            }
        },
        327: function(e, t, n) {
            "use strict";
            var i = n(867);
            function encode(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function buildURL(e, t, n) {
                if (!t)
                    return e;
                var r;
                if (n)
                    r = n(t);
                else if (i.isURLSearchParams(t))
                    r = t.toString();
                else {
                    var o = [];
                    i.forEach(t, (function serialize(e, t) {
                        null != e && (i.isArray(e) ? t += "[]" : e = [e],
                        i.forEach(e, (function parseValue(e) {
                            i.isDate(e) ? e = e.toISOString() : i.isObject(e) && (e = JSON.stringify(e)),
                            o.push(encode(t) + "=" + encode(e))
                        }
                        )))
                    }
                    )),
                    r = o.join("&")
                }
                if (r) {
                    var s = e.indexOf("#");
                    -1 !== s && (e = e.slice(0, s)),
                    e += (-1 === e.indexOf("?") ? "?" : "&") + r
                }
                return e
            }
        },
        303: function(e) {
            "use strict";
            e.exports = function combineURLs(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        },
        372: function(e, t, n) {
            "use strict";
            var i = n(867);
            e.exports = i.isStandardBrowserEnv() ? function standardBrowserEnv() {
                return {
                    write: function write(e, t, n, r, o, s) {
                        var a = [];
                        a.push(e + "=" + encodeURIComponent(t)),
                        i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
                        i.isString(r) && a.push("path=" + r),
                        i.isString(o) && a.push("domain=" + o),
                        !0 === s && a.push("secure"),
                        document.cookie = a.join("; ")
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
        793: function(e) {
            "use strict";
            e.exports = function isAbsoluteURL(e) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
            }
        },
        268: function(e, t, n) {
            "use strict";
            var i = n(867);
            e.exports = function isAxiosError(e) {
                return i.isObject(e) && !0 === e.isAxiosError
            }
        },
        985: function(e, t, n) {
            "use strict";
            var i = n(867);
            e.exports = i.isStandardBrowserEnv() ? function standardBrowserEnv() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
                function resolveURL(e) {
                    var i = e;
                    return t && (n.setAttribute("href", i),
                    i = n.href),
                    n.setAttribute("href", i),
                    {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return e = resolveURL(window.location.href),
                function isURLSameOrigin(t) {
                    var n = i.isString(t) ? resolveURL(t) : t;
                    return n.protocol === e.protocol && n.host === e.host
                }
            }() : function isURLSameOrigin() {
                return !0
            }
        },
        16: function(e, t, n) {
            "use strict";
            var i = n(867);
            e.exports = function normalizeHeaderName(e, t) {
                i.forEach(e, (function processHeader(n, i) {
                    i !== t && i.toUpperCase() === t.toUpperCase() && (e[t] = n,
                    delete e[i])
                }
                ))
            }
        },
        109: function(e, t, n) {
            "use strict";
            var i = n(867)
              , r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function parseHeaders(e) {
                var t, n, o, s = {};
                return e ? (i.forEach(e.split("\n"), (function parser(e) {
                    if (o = e.indexOf(":"),
                    t = i.trim(e.substr(0, o)).toLowerCase(),
                    n = i.trim(e.substr(o + 1)),
                    t) {
                        if (s[t] && r.indexOf(t) >= 0)
                            return;
                        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
                    }
                }
                )),
                s) : s
            }
        },
        713: function(e) {
            "use strict";
            e.exports = function spread(e) {
                return function wrap(t) {
                    return e.apply(null, t)
                }
            }
        },
        875: function(e, t, n) {
            "use strict";
            var i = n(288).version
              , r = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                r[e] = function validator(n) {
                    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                }
            }
            ));
            var o = {};
            r.transitional = function transitional(e, t, n) {
                function formatMessage(e, t) {
                    return "[Axios v" + i + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                }
                return function(n, i, r) {
                    if (!1 === e)
                        throw new Error(formatMessage(i, " has been removed" + (t ? " in " + t : "")));
                    return t && !o[i] && (o[i] = !0,
                    console.warn(formatMessage(i, " has been deprecated since v" + t + " and will be removed in the near future"))),
                    !e || e(n, i, r)
                }
            }
            ,
            e.exports = {
                assertOptions: function assertOptions(e, t, n) {
                    if ("object" != typeof e)
                        throw new TypeError("options must be an object");
                    for (var i = Object.keys(e), r = i.length; r-- > 0; ) {
                        var o = i[r]
                          , s = t[o];
                        if (s) {
                            var a = e[o]
                              , c = void 0 === a || s(a, o, e);
                            if (!0 !== c)
                                throw new TypeError("option " + o + " must be " + c)
                        } else if (!0 !== n)
                            throw Error("Unknown option " + o)
                    }
                },
                validators: r
            }
        },
        867: function(e, t, n) {
            "use strict";
            var i = n(849)
              , r = Object.prototype.toString;
            function isArray(e) {
                return Array.isArray(e)
            }
            function isUndefined(e) {
                return void 0 === e
            }
            function isArrayBuffer(e) {
                return "[object ArrayBuffer]" === r.call(e)
            }
            function isObject(e) {
                return null !== e && "object" == typeof e
            }
            function isPlainObject(e) {
                if ("[object Object]" !== r.call(e))
                    return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
            function isFunction(e) {
                return "[object Function]" === r.call(e)
            }
            function forEach(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]),
                    isArray(e))
                        for (var n = 0, i = e.length; n < i; n++)
                            t.call(null, e[n], n, e);
                    else
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
            }
            e.exports = {
                isArray: isArray,
                isArrayBuffer: isArrayBuffer,
                isBuffer: function isBuffer(e) {
                    return null !== e && !isUndefined(e) && null !== e.constructor && !isUndefined(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function isFormData(e) {
                    return "[object FormData]" === r.call(e)
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
                    return "[object Date]" === r.call(e)
                },
                isFile: function isFile(e) {
                    return "[object File]" === r.call(e)
                },
                isBlob: function isBlob(e) {
                    return "[object Blob]" === r.call(e)
                },
                isFunction: isFunction,
                isStream: function isStream(e) {
                    return isObject(e) && isFunction(e.pipe)
                },
                isURLSearchParams: function isURLSearchParams(e) {
                    return "[object URLSearchParams]" === r.call(e)
                },
                isStandardBrowserEnv: function isStandardBrowserEnv() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                },
                forEach: forEach,
                merge: function merge() {
                    var e = {};
                    function assignValue(t, n) {
                        isPlainObject(e[n]) && isPlainObject(t) ? e[n] = merge(e[n], t) : isPlainObject(t) ? e[n] = merge({}, t) : isArray(t) ? e[n] = t.slice() : e[n] = t
                    }
                    for (var t = 0, n = arguments.length; t < n; t++)
                        forEach(arguments[t], assignValue);
                    return e
                },
                extend: function extend(e, t, n) {
                    return forEach(t, (function assignValue(t, r) {
                        e[r] = n && "function" == typeof t ? i(t, n) : t
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
        155: function(e) {
            var t, n, i = e.exports = {};
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
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
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
                    n = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
                } catch (e) {
                    n = defaultClearTimeout
                }
            }();
            var r, o = [], s = !1, a = -1;
            function cleanUpNextTick() {
                s && r && (s = !1,
                r.length ? o = r.concat(o) : a = -1,
                o.length && drainQueue())
            }
            function drainQueue() {
                if (!s) {
                    var e = runTimeout(cleanUpNextTick);
                    s = !0;
                    for (var t = o.length; t; ) {
                        for (r = o,
                        o = []; ++a < t; )
                            r && r[a].run();
                        a = -1,
                        t = o.length
                    }
                    r = null,
                    s = !1,
                    function runClearTimeout(e) {
                        if (n === clearTimeout)
                            return clearTimeout(e);
                        if ((n === defaultClearTimeout || !n) && clearTimeout)
                            return n = clearTimeout,
                            clearTimeout(e);
                        try {
                            return n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
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
            i.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                o.push(new Item(e,t)),
                1 !== o.length || s || runTimeout(drainQueue)
            }
            ,
            Item.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            i.title = "browser",
            i.browser = !0,
            i.env = {},
            i.argv = [],
            i.version = "",
            i.versions = {},
            i.on = noop,
            i.addListener = noop,
            i.once = noop,
            i.off = noop,
            i.removeListener = noop,
            i.removeAllListeners = noop,
            i.emit = noop,
            i.prependListener = noop,
            i.prependOnceListener = noop,
            i.listeners = function(e) {
                return []
            }
            ,
            i.binding = function(e) {
                throw new Error("process.binding is not supported")
            }
            ,
            i.cwd = function() {
                return "/"
            }
            ,
            i.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            i.umask = function() {
                return 0
            }
        }
    }, a = {};
    function __webpack_require__(e) {
        var t = a[e];
        if (void 0 !== t)
            return t.exports;
        var n = a[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e](n, n.exports, __webpack_require__),
        n.loaded = !0,
        n.exports
    }
    __webpack_require__.m = s,
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
        for (var n in t)
            __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    __webpack_require__.f = {},
    __webpack_require__.e = function(e) {
        return Promise.all(Object.keys(__webpack_require__.f).reduce((function(t, n) {
            return __webpack_require__.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    __webpack_require__.u = function(e) {
        if (48 === e)
            return "web.chunk.client.db1b19c0.js"
    }
    ,
    __webpack_require__.miniCssF = function(e) {}
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
    __webpack_require__.l = function(n, i, r, o) {
        if (e[n])
            e[n].push(i);
        else {
            var s, a;
            if (void 0 !== r)
                for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var l = c[u];
                    if (l.getAttribute("src") == n || l.getAttribute("data-webpack") == t + r) {
                        s = l;
                        break
                    }
                }
            s || (a = !0,
            (s = document.createElement("script")).charset = "utf-8",
            s.timeout = 120,
            __webpack_require__.nc && s.setAttribute("nonce", __webpack_require__.nc),
            s.setAttribute("data-webpack", t + r),
            s.src = n),
            e[n] = [i];
            var onScriptComplete = function(t, i) {
                s.onerror = s.onload = null,
                clearTimeout(h);
                var r = e[n];
                if (delete e[n],
                s.parentNode && s.parentNode.removeChild(s),
                r && r.forEach((function(e) {
                    return e(i)
                }
                )),
                t)
                    return t(i)
            }
              , h = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: s
            }), 12e4);
            s.onerror = onScriptComplete.bind(null, s.onerror),
            s.onload = onScriptComplete.bind(null, s.onload),
            a && document.head.appendChild(s)
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
    i = __webpack_require__.e,
    r = new Map,
    o = new Map,
    __webpack_require__.u = function(e) {
        return n(e) + (r.has(e) ? "?" + r.get(e) : "")
    }
    ,
    __webpack_require__.e = function(e) {
        return i(e).catch((function(t) {
            var i = o.has(e) ? o.get(e) : 2;
            if (i < 1) {
                var s = n(e);
                throw t.message = "Loading chunk " + e + " failed after 2 retries.\n(" + s + ")",
                t.request = s,
                t
            }
            return new Promise((function(t) {
                setTimeout((function() {
                    var n = "cache-bust=true&retry-attempt=" + (2 - i + 1);
                    r.set(e, n),
                    o.set(e, i - 1),
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
            173: 0
        };
        __webpack_require__.f.j = function(t, n) {
            var i = __webpack_require__.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i)
                    n.push(i[2]);
                else {
                    var r = new Promise((function(n, r) {
                        i = e[t] = [n, r]
                    }
                    ));
                    n.push(i[2] = r);
                    var o = __webpack_require__.p + __webpack_require__.u(t)
                      , s = new Error;
                    __webpack_require__.l(o, (function(n) {
                        if (__webpack_require__.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0),
                        i)) {
                            var r = n && ("load" === n.type ? "missing" : n.type)
                              , o = n && n.target && n.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")",
                            s.name = "ChunkLoadError",
                            s.type = r,
                            s.request = o,
                            i[1](s)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var webpackJsonpCallback = function(t, n) {
            var i, r, o = n[0], s = n[1], a = n[2], c = 0;
            if (o.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (i in s)
                    __webpack_require__.o(s, i) && (__webpack_require__.m[i] = s[i]);
                if (a)
                    a(__webpack_require__)
            }
            for (t && t(n); c < o.length; c++)
                r = o[c],
                __webpack_require__.o(e, r) && e[r] && e[r][0](),
                e[r] = 0
        }
          , t = ("undefined" != typeof self ? self : this).wpChessCom_REIg = ("undefined" != typeof self ? self : this).wpChessCom_REIg || [];
        t.forEach(webpackJsonpCallback.bind(null, 0)),
        t.push = webpackJsonpCallback.bind(null, t.push.bind(t))
    }(),
    function() {
        "use strict";
        var e = __webpack_require__(155);
        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function _createClass(e, t, n) {
            return t && _defineProperties(e.prototype, t),
            n && _defineProperties(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
        function _defineProperty(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var t, n, i, r, o, s;
        function ownKeys$2(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function _objectSpread$2(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys$2(Object(n), !0).forEach((function(t) {
                    _defineProperty(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys$2(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function createClientFailure(e, n) {
            switch (e) {
            case t.TRANSPORT_NOT_SUPPORTED:
                return _objectSpread$2({
                    code: t.TRANSPORT_NOT_SUPPORTED,
                    message: "transport not supported"
                }, n);
            case t.MALFORMED_URL:
                return _objectSpread$2({
                    code: t.MALFORMED_URL,
                    message: "malformed url"
                }, n);
            case t.UNAUTHENTICATED:
                return _objectSpread$2({
                    code: t.UNAUTHENTICATED,
                    message: "unauthenticated"
                }, n)
            }
        }
        function _arrayLikeToArray(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function _unsupportedIterableToArray(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return _arrayLikeToArray(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
            }
        }
        function _slicedToArray(e, t) {
            return function _arrayWithHoles(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function _iterableToArrayLimit(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var i, r, o = [], s = !0, a = !1;
                    try {
                        for (n = n.call(e); !(s = (i = n.next()).done) && (o.push(i.value),
                        !t || o.length !== t); s = !0)
                            ;
                    } catch (err) {
                        a = !0,
                        r = err
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (a)
                                throw r
                        }
                    }
                    return o
                }
            }(e, t) || _unsupportedIterableToArray(e, t) || function _nonIterableRest() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        !function(e) {
            e[e.TRANSPORT_NOT_SUPPORTED = 1] = "TRANSPORT_NOT_SUPPORTED",
            e[e.MALFORMED_URL = 2] = "MALFORMED_URL",
            e[e.UNAUTHENTICATED = 3] = "UNAUTHENTICATED"
        }(t || (t = {})),
        function(e) {
            e.WEB_SOCKETS_NOT_SUPPORTED = "web_socket_not_supported",
            e.WEB_SOCKET_ERROR = "web_socket_error",
            e.CLIENT_OFFLINE = "client_offline",
            e.WELCOME_TIMEOUT = "welcome_timeout",
            e.WELCOME_EXPECTED = "welcome_expected",
            e.WELCOME_INCONSISTENT = "welcome_inconsitent",
            e.CORRUPTED_PACKET = "corrupted_packet",
            e.CORRUPTED_OFFSET = "corrupted_offset",
            e.CONNECTION_ERROR = "connection_error",
            e.CONNECTION_CLOSED = "connection_closed",
            e.KEEPALIVE_TIMEOUT = "keepalive_timeout",
            e.CHANNEL_FAILURE = "channel_failure",
            e.REGISTER_TIMEOUT = "register_timeout",
            e.SUBSCRIBE_TIMEOUT = "subscribe_timeout",
            e.UNSUBSCRIBE_TIMEOUT = "unsubscribe_timeout"
        }(n || (n = {})),
        function(e) {
            e.SUBSCRIBE = "1",
            e.UNSUBSCRIBE = "2",
            e.ACK = "3",
            e.SUBSCRIBED = "5",
            e.UNSUBSCRIBED = "6",
            e.MESSAGE = "7",
            e.POSITION = "8"
        }(i || (i = {})),
        function(e) {
            e.OPEN = "0",
            e.CLOSE = "1",
            e.PING = "2",
            e.PONG = "3",
            e.MESSAGE = "4",
            e.PRESENCE = "5"
        }(r || (r = {})),
        function(e) {
            e.REGISTER = "1",
            e.REGISTERED = "2"
        }(o || (o = {})),
        function(e) {
            e[e.OFFLINE = 0] = "OFFLINE",
            e[e.POOR = 1] = "POOR",
            e[e.OK = 2] = "OK",
            e[e.GOOD = 3] = "GOOD",
            e[e.EXCELLENT = 4] = "EXCELLENT"
        }(s || (s = {}));
        var a, c, u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {}, l = {
            exports: {}
        };
        function _typeof(e) {
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            _typeof(e)
        }
        a = l,
        c = "undefined" != typeof self ? self : "undefined" != typeof window ? window : u,
        a.exports = function(e) {
            var t, n = (e = e || {}).Base64, i = "2.6.4", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = function(e) {
                for (var t = {}, n = 0, i = e.length; n < i; n++)
                    t[e.charAt(n)] = n;
                return t
            }(r), s = String.fromCharCode, c = function cb_utob(e) {
                if (e.length < 2)
                    return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? s(192 | t >>> 6) + s(128 | 63 & t) : s(224 | t >>> 12 & 15) + s(128 | t >>> 6 & 63) + s(128 | 63 & t);
                var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                return s(240 | t >>> 18 & 7) + s(128 | t >>> 12 & 63) + s(128 | t >>> 6 & 63) + s(128 | 63 & t)
            }, u = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, l = function utob(e) {
                return e.replace(u, c)
            }, h = function cb_encode(e) {
                var t = [0, 2, 1][e.length % 3]
                  , n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                return [r.charAt(n >>> 18), r.charAt(n >>> 12 & 63), t >= 2 ? "=" : r.charAt(n >>> 6 & 63), t >= 1 ? "=" : r.charAt(63 & n)].join("")
            }, f = e.btoa && "function" == typeof e.btoa ? function(t) {
                return e.btoa(t)
            }
            : function(e) {
                if (e.match(/[^\x00-\xFF]/))
                    throw new RangeError("The string contains invalid characters.");
                return e.replace(/[\s\S]{1,3}/g, h)
            }
            , d = function _encode(e) {
                return f(l(String(e)))
            }, p = function mkUriSafe(e) {
                return e.replace(/[+\/]/g, (function(e) {
                    return "+" == e ? "-" : "_"
                }
                )).replace(/=/g, "")
            }, _ = function encode(e, t) {
                return t ? p(d(e)) : d(e)
            }, v = function encodeURI(e) {
                return _(e, !0)
            };
            e.Uint8Array && (t = function fromUint8Array(e, t) {
                for (var n = "", i = 0, o = e.length; i < o; i += 3) {
                    var s = e[i]
                      , a = e[i + 1]
                      , c = e[i + 2]
                      , u = s << 16 | a << 8 | c;
                    n += r.charAt(u >>> 18) + r.charAt(u >>> 12 & 63) + (void 0 !== a ? r.charAt(u >>> 6 & 63) : "=") + (void 0 !== c ? r.charAt(63 & u) : "=")
                }
                return t ? p(n) : n
            }
            );
            var y, g = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, b = function cb_btou(e) {
                switch (e.length) {
                case 4:
                    var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                    return s(55296 + (t >>> 10)) + s(56320 + (1023 & t));
                case 3:
                    return s((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                default:
                    return s((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                }
            }, m = function btou(e) {
                return e.replace(g, b)
            }, w = function cb_decode(e) {
                var t = e.length
                  , n = t % 4
                  , i = (t > 0 ? o[e.charAt(0)] << 18 : 0) | (t > 1 ? o[e.charAt(1)] << 12 : 0) | (t > 2 ? o[e.charAt(2)] << 6 : 0) | (t > 3 ? o[e.charAt(3)] : 0)
                  , r = [s(i >>> 16), s(i >>> 8 & 255), s(255 & i)];
                return r.length -= [0, 0, 2, 1][n],
                r.join("")
            }, k = e.atob && "function" == typeof e.atob ? function(t) {
                return e.atob(t)
            }
            : function(e) {
                return e.replace(/\S{1,4}/g, w)
            }
            , E = function atob(e) {
                return k(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""))
            }, S = function _decode(e) {
                return m(k(e))
            }, C = function _fromURI(e) {
                return String(e).replace(/[-_]/g, (function(e) {
                    return "-" == e ? "+" : "/"
                }
                )).replace(/[^A-Za-z0-9\+\/]/g, "")
            }, P = function decode(e) {
                return S(C(e))
            };
            e.Uint8Array && (y = function toUint8Array(e) {
                return Uint8Array.from(E(C(e)), (function(e) {
                    return e.charCodeAt(0)
                }
                ))
            }
            );
            var O = function noConflict() {
                var t = e.Base64;
                return e.Base64 = n,
                t
            };
            if (e.Base64 = {
                VERSION: i,
                atob: E,
                btoa: f,
                fromBase64: P,
                toBase64: _,
                utob: l,
                encode: _,
                encodeURI: v,
                btou: m,
                decode: P,
                noConflict: O,
                fromUint8Array: t,
                toUint8Array: y
            },
            "function" == typeof Object.defineProperty) {
                var A = function noEnum(e) {
                    return {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                };
                e.Base64.extendString = function() {
                    Object.defineProperty(String.prototype, "fromBase64", A((function() {
                        return P(this)
                    }
                    ))),
                    Object.defineProperty(String.prototype, "toBase64", A((function(e) {
                        return _(this, e)
                    }
                    ))),
                    Object.defineProperty(String.prototype, "toBase64URI", A((function() {
                        return _(this, !0)
                    }
                    )))
                }
            }
            return e.Meteor && (Base64 = e.Base64),
            a.exports && (a.exports.Base64 = e.Base64),
            {
                Base64: e.Base64
            }
        }(c);
        var h = {};
        !function(e) {
            var t = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
            function _has(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            e.assign = function(e) {
                for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
                    var n = t.shift();
                    if (n) {
                        if ("object" !== _typeof(n))
                            throw new TypeError(n + "must be non-object");
                        for (var i in n)
                            _has(n, i) && (e[i] = n[i])
                    }
                }
                return e
            }
            ,
            e.shrinkBuf = function(e, t) {
                return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t,
                e)
            }
            ;
            var n = {
                arraySet: function arraySet(e, t, n, i, r) {
                    if (t.subarray && e.subarray)
                        e.set(t.subarray(n, n + i), r);
                    else
                        for (var o = 0; o < i; o++)
                            e[r + o] = t[n + o]
                },
                flattenChunks: function flattenChunks(e) {
                    var t, n, i, r, o, s;
                    for (i = 0,
                    t = 0,
                    n = e.length; t < n; t++)
                        i += e[t].length;
                    for (s = new Uint8Array(i),
                    r = 0,
                    t = 0,
                    n = e.length; t < n; t++)
                        o = e[t],
                        s.set(o, r),
                        r += o.length;
                    return s
                }
            }
              , i = {
                arraySet: function arraySet(e, t, n, i, r) {
                    for (var o = 0; o < i; o++)
                        e[r + o] = t[n + o]
                },
                flattenChunks: function flattenChunks(e) {
                    return [].concat.apply([], e)
                }
            };
            e.setTyped = function(t) {
                t ? (e.Buf8 = Uint8Array,
                e.Buf16 = Uint16Array,
                e.Buf32 = Int32Array,
                e.assign(e, n)) : (e.Buf8 = Array,
                e.Buf16 = Array,
                e.Buf32 = Array,
                e.assign(e, i))
            }
            ,
            e.setTyped(t)
        }(h);
        var f = {}
          , d = {}
          , p = {}
          , _ = h;
        function zero$1(e) {
            for (var t = e.length; --t >= 0; )
                e[t] = 0
        }
        var v = 256
          , y = 286
          , g = 30
          , b = 15
          , m = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
          , w = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
          , k = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
          , E = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
          , S = new Array(576);
        zero$1(S);
        var C = new Array(60);
        zero$1(C);
        var P = new Array(512);
        zero$1(P);
        var O = new Array(256);
        zero$1(O);
        var A = new Array(29);
        zero$1(A);
        var T, R, j, x = new Array(g);
        function StaticTreeDesc(e, t, n, i, r) {
            this.static_tree = e,
            this.extra_bits = t,
            this.extra_base = n,
            this.elems = i,
            this.max_length = r,
            this.has_stree = e && e.length
        }
        function TreeDesc(e, t) {
            this.dyn_tree = e,
            this.max_code = 0,
            this.stat_desc = t
        }
        function d_code(e) {
            return e < 256 ? P[e] : P[256 + (e >>> 7)]
        }
        function put_short(e, t) {
            e.pending_buf[e.pending++] = 255 & t,
            e.pending_buf[e.pending++] = t >>> 8 & 255
        }
        function send_bits(e, t, n) {
            e.bi_valid > 16 - n ? (e.bi_buf |= t << e.bi_valid & 65535,
            put_short(e, e.bi_buf),
            e.bi_buf = t >> 16 - e.bi_valid,
            e.bi_valid += n - 16) : (e.bi_buf |= t << e.bi_valid & 65535,
            e.bi_valid += n)
        }
        function send_code(e, t, n) {
            send_bits(e, n[2 * t], n[2 * t + 1])
        }
        function bi_reverse(e, t) {
            var n = 0;
            do {
                n |= 1 & e,
                e >>>= 1,
                n <<= 1
            } while (--t > 0);
            return n >>> 1
        }
        function gen_codes(e, t, n) {
            var i, r, o = new Array(16), s = 0;
            for (i = 1; i <= b; i++)
                o[i] = s = s + n[i - 1] << 1;
            for (r = 0; r <= t; r++) {
                var a = e[2 * r + 1];
                0 !== a && (e[2 * r] = bi_reverse(o[a]++, a))
            }
        }
        function init_block(e) {
            var t;
            for (t = 0; t < y; t++)
                e.dyn_ltree[2 * t] = 0;
            for (t = 0; t < g; t++)
                e.dyn_dtree[2 * t] = 0;
            for (t = 0; t < 19; t++)
                e.bl_tree[2 * t] = 0;
            e.dyn_ltree[512] = 1,
            e.opt_len = e.static_len = 0,
            e.last_lit = e.matches = 0
        }
        function bi_windup(e) {
            e.bi_valid > 8 ? put_short(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
            e.bi_buf = 0,
            e.bi_valid = 0
        }
        function smaller(e, t, n, i) {
            var r = 2 * t
              , o = 2 * n;
            return e[r] < e[o] || e[r] === e[o] && i[t] <= i[n]
        }
        function pqdownheap(e, t, n) {
            for (var i = e.heap[n], r = n << 1; r <= e.heap_len && (r < e.heap_len && smaller(t, e.heap[r + 1], e.heap[r], e.depth) && r++,
            !smaller(t, i, e.heap[r], e.depth)); )
                e.heap[n] = e.heap[r],
                n = r,
                r <<= 1;
            e.heap[n] = i
        }
        function compress_block(e, t, n) {
            var i, r, o, s, a = 0;
            if (0 !== e.last_lit)
                do {
                    i = e.pending_buf[e.d_buf + 2 * a] << 8 | e.pending_buf[e.d_buf + 2 * a + 1],
                    r = e.pending_buf[e.l_buf + a],
                    a++,
                    0 === i ? send_code(e, r, t) : (send_code(e, (o = O[r]) + v + 1, t),
                    0 !== (s = m[o]) && send_bits(e, r -= A[o], s),
                    send_code(e, o = d_code(--i), n),
                    0 !== (s = w[o]) && send_bits(e, i -= x[o], s))
                } while (a < e.last_lit);
            send_code(e, 256, t)
        }
        function build_tree(e, t) {
            var n, i, r, o = t.dyn_tree, s = t.stat_desc.static_tree, a = t.stat_desc.has_stree, c = t.stat_desc.elems, u = -1;
            for (e.heap_len = 0,
            e.heap_max = 573,
            n = 0; n < c; n++)
                0 !== o[2 * n] ? (e.heap[++e.heap_len] = u = n,
                e.depth[n] = 0) : o[2 * n + 1] = 0;
            for (; e.heap_len < 2; )
                o[2 * (r = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1,
                e.depth[r] = 0,
                e.opt_len--,
                a && (e.static_len -= s[2 * r + 1]);
            for (t.max_code = u,
            n = e.heap_len >> 1; n >= 1; n--)
                pqdownheap(e, o, n);
            r = c;
            do {
                n = e.heap[1],
                e.heap[1] = e.heap[e.heap_len--],
                pqdownheap(e, o, 1),
                i = e.heap[1],
                e.heap[--e.heap_max] = n,
                e.heap[--e.heap_max] = i,
                o[2 * r] = o[2 * n] + o[2 * i],
                e.depth[r] = (e.depth[n] >= e.depth[i] ? e.depth[n] : e.depth[i]) + 1,
                o[2 * n + 1] = o[2 * i + 1] = r,
                e.heap[1] = r++,
                pqdownheap(e, o, 1)
            } while (e.heap_len >= 2);
            e.heap[--e.heap_max] = e.heap[1],
            function gen_bitlen(e, t) {
                var n, i, r, o, s, a, c = t.dyn_tree, u = t.max_code, l = t.stat_desc.static_tree, h = t.stat_desc.has_stree, f = t.stat_desc.extra_bits, d = t.stat_desc.extra_base, p = t.stat_desc.max_length, _ = 0;
                for (o = 0; o <= b; o++)
                    e.bl_count[o] = 0;
                for (c[2 * e.heap[e.heap_max] + 1] = 0,
                n = e.heap_max + 1; n < 573; n++)
                    (o = c[2 * c[2 * (i = e.heap[n]) + 1] + 1] + 1) > p && (o = p,
                    _++),
                    c[2 * i + 1] = o,
                    i > u || (e.bl_count[o]++,
                    s = 0,
                    i >= d && (s = f[i - d]),
                    a = c[2 * i],
                    e.opt_len += a * (o + s),
                    h && (e.static_len += a * (l[2 * i + 1] + s)));
                if (0 !== _) {
                    do {
                        for (o = p - 1; 0 === e.bl_count[o]; )
                            o--;
                        e.bl_count[o]--,
                        e.bl_count[o + 1] += 2,
                        e.bl_count[p]--,
                        _ -= 2
                    } while (_ > 0);
                    for (o = p; 0 !== o; o--)
                        for (i = e.bl_count[o]; 0 !== i; )
                            (r = e.heap[--n]) > u || (c[2 * r + 1] !== o && (e.opt_len += (o - c[2 * r + 1]) * c[2 * r],
                            c[2 * r + 1] = o),
                            i--)
                }
            }(e, t),
            gen_codes(o, u, e.bl_count)
        }
        function scan_tree(e, t, n) {
            var i, r, o = -1, s = t[1], a = 0, c = 7, u = 4;
            for (0 === s && (c = 138,
            u = 3),
            t[2 * (n + 1) + 1] = 65535,
            i = 0; i <= n; i++)
                r = s,
                s = t[2 * (i + 1) + 1],
                ++a < c && r === s || (a < u ? e.bl_tree[2 * r] += a : 0 !== r ? (r !== o && e.bl_tree[2 * r]++,
                e.bl_tree[32]++) : a <= 10 ? e.bl_tree[34]++ : e.bl_tree[36]++,
                a = 0,
                o = r,
                0 === s ? (c = 138,
                u = 3) : r === s ? (c = 6,
                u = 3) : (c = 7,
                u = 4))
        }
        function send_tree(e, t, n) {
            var i, r, o = -1, s = t[1], a = 0, c = 7, u = 4;
            for (0 === s && (c = 138,
            u = 3),
            i = 0; i <= n; i++)
                if (r = s,
                s = t[2 * (i + 1) + 1],
                !(++a < c && r === s)) {
                    if (a < u)
                        do {
                            send_code(e, r, e.bl_tree)
                        } while (0 != --a);
                    else
                        0 !== r ? (r !== o && (send_code(e, r, e.bl_tree),
                        a--),
                        send_code(e, 16, e.bl_tree),
                        send_bits(e, a - 3, 2)) : a <= 10 ? (send_code(e, 17, e.bl_tree),
                        send_bits(e, a - 3, 3)) : (send_code(e, 18, e.bl_tree),
                        send_bits(e, a - 11, 7));
                    a = 0,
                    o = r,
                    0 === s ? (c = 138,
                    u = 3) : r === s ? (c = 6,
                    u = 3) : (c = 7,
                    u = 4)
                }
        }
        zero$1(x);
        var I = !1;
        function _tr_stored_block(e, t, n, i) {
            send_bits(e, 0 + (i ? 1 : 0), 3),
            function copy_block(e, t, n, i) {
                bi_windup(e),
                i && (put_short(e, n),
                put_short(e, ~n)),
                _.arraySet(e.pending_buf, e.window, t, n, e.pending),
                e.pending += n
            }(e, t, n, !0)
        }
        p._tr_init = function _tr_init(e) {
            I || (!function tr_static_init() {
                var e, t, n, i, r, o = new Array(16);
                for (n = 0,
                i = 0; i < 28; i++)
                    for (A[i] = n,
                    e = 0; e < 1 << m[i]; e++)
                        O[n++] = i;
                for (O[n - 1] = i,
                r = 0,
                i = 0; i < 16; i++)
                    for (x[i] = r,
                    e = 0; e < 1 << w[i]; e++)
                        P[r++] = i;
                for (r >>= 7; i < g; i++)
                    for (x[i] = r << 7,
                    e = 0; e < 1 << w[i] - 7; e++)
                        P[256 + r++] = i;
                for (t = 0; t <= b; t++)
                    o[t] = 0;
                for (e = 0; e <= 143; )
                    S[2 * e + 1] = 8,
                    e++,
                    o[8]++;
                for (; e <= 255; )
                    S[2 * e + 1] = 9,
                    e++,
                    o[9]++;
                for (; e <= 279; )
                    S[2 * e + 1] = 7,
                    e++,
                    o[7]++;
                for (; e <= 287; )
                    S[2 * e + 1] = 8,
                    e++,
                    o[8]++;
                for (gen_codes(S, 287, o),
                e = 0; e < g; e++)
                    C[2 * e + 1] = 5,
                    C[2 * e] = bi_reverse(e, 5);
                T = new StaticTreeDesc(S,m,257,y,b),
                R = new StaticTreeDesc(C,w,0,g,b),
                j = new StaticTreeDesc(new Array(0),k,0,19,7)
            }(),
            I = !0),
            e.l_desc = new TreeDesc(e.dyn_ltree,T),
            e.d_desc = new TreeDesc(e.dyn_dtree,R),
            e.bl_desc = new TreeDesc(e.bl_tree,j),
            e.bi_buf = 0,
            e.bi_valid = 0,
            init_block(e)
        }
        ,
        p._tr_stored_block = _tr_stored_block,
        p._tr_flush_block = function _tr_flush_block(e, t, n, i) {
            var r, o, s = 0;
            e.level > 0 ? (2 === e.strm.data_type && (e.strm.data_type = function detect_data_type(e) {
                var t, n = 4093624447;
                for (t = 0; t <= 31; t++,
                n >>>= 1)
                    if (1 & n && 0 !== e.dyn_ltree[2 * t])
                        return 0;
                if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26])
                    return 1;
                for (t = 32; t < v; t++)
                    if (0 !== e.dyn_ltree[2 * t])
                        return 1;
                return 0
            }(e)),
            build_tree(e, e.l_desc),
            build_tree(e, e.d_desc),
            s = function build_bl_tree(e) {
                var t;
                for (scan_tree(e, e.dyn_ltree, e.l_desc.max_code),
                scan_tree(e, e.dyn_dtree, e.d_desc.max_code),
                build_tree(e, e.bl_desc),
                t = 18; t >= 3 && 0 === e.bl_tree[2 * E[t] + 1]; t--)
                    ;
                return e.opt_len += 3 * (t + 1) + 5 + 5 + 4,
                t
            }(e),
            r = e.opt_len + 3 + 7 >>> 3,
            (o = e.static_len + 3 + 7 >>> 3) <= r && (r = o)) : r = o = n + 5,
            n + 4 <= r && -1 !== t ? _tr_stored_block(e, t, n, i) : 4 === e.strategy || o === r ? (send_bits(e, 2 + (i ? 1 : 0), 3),
            compress_block(e, S, C)) : (send_bits(e, 4 + (i ? 1 : 0), 3),
            function send_all_trees(e, t, n, i) {
                var r;
                for (send_bits(e, t - 257, 5),
                send_bits(e, n - 1, 5),
                send_bits(e, i - 4, 4),
                r = 0; r < i; r++)
                    send_bits(e, e.bl_tree[2 * E[r] + 1], 3);
                send_tree(e, e.dyn_ltree, t - 1),
                send_tree(e, e.dyn_dtree, n - 1)
            }(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1),
            compress_block(e, e.dyn_ltree, e.dyn_dtree)),
            init_block(e),
            i && bi_windup(e)
        }
        ,
        p._tr_tally = function _tr_tally(e, t, n) {
            return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
            e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t,
            e.pending_buf[e.l_buf + e.last_lit] = 255 & n,
            e.last_lit++,
            0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++,
            t--,
            e.dyn_ltree[2 * (O[n] + v + 1)]++,
            e.dyn_dtree[2 * d_code(t)]++),
            e.last_lit === e.lit_bufsize - 1
        }
        ,
        p._tr_align = function _tr_align(e) {
            send_bits(e, 2, 3),
            send_code(e, 256, S),
            function bi_flush(e) {
                16 === e.bi_valid ? (put_short(e, e.bi_buf),
                e.bi_buf = 0,
                e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf,
                e.bi_buf >>= 8,
                e.bi_valid -= 8)
            }(e)
        }
        ;
        var U = function adler32$2(e, t, n, i) {
            for (var r = 65535 & e | 0, o = e >>> 16 & 65535 | 0, s = 0; 0 !== n; ) {
                n -= s = n > 2e3 ? 2e3 : n;
                do {
                    o = o + (r = r + t[i++] | 0) | 0
                } while (--s);
                r %= 65521,
                o %= 65521
            }
            return r | o << 16 | 0
        };
        var D = function makeTable() {
            for (var e, t = [], n = 0; n < 256; n++) {
                e = n;
                for (var i = 0; i < 8; i++)
                    e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                t[n] = e
            }
            return t
        }();
        var B, M = function crc32$2(e, t, n, i) {
            var r = D
              , o = i + n;
            e ^= -1;
            for (var s = i; s < o; s++)
                e = e >>> 8 ^ r[255 & (e ^ t[s])];
            return -1 ^ e
        }, N = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        }, q = h, L = p, F = U, z = M, H = N, Q = -2, V = 258, W = 262, Z = 103, K = 113, $ = 666;
        function err(e, t) {
            return e.msg = H[t],
            t
        }
        function rank(e) {
            return (e << 1) - (e > 4 ? 9 : 0)
        }
        function zero(e) {
            for (var t = e.length; --t >= 0; )
                e[t] = 0
        }
        function flush_pending(e) {
            var t = e.state
              , n = t.pending;
            n > e.avail_out && (n = e.avail_out),
            0 !== n && (q.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out),
            e.next_out += n,
            t.pending_out += n,
            e.total_out += n,
            e.avail_out -= n,
            t.pending -= n,
            0 === t.pending && (t.pending_out = 0))
        }
        function flush_block_only(e, t) {
            L._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t),
            e.block_start = e.strstart,
            flush_pending(e.strm)
        }
        function put_byte(e, t) {
            e.pending_buf[e.pending++] = t
        }
        function putShortMSB(e, t) {
            e.pending_buf[e.pending++] = t >>> 8 & 255,
            e.pending_buf[e.pending++] = 255 & t
        }
        function longest_match(e, t) {
            var n, i, r = e.max_chain_length, o = e.strstart, s = e.prev_length, a = e.nice_match, c = e.strstart > e.w_size - W ? e.strstart - (e.w_size - W) : 0, u = e.window, l = e.w_mask, h = e.prev, f = e.strstart + V, d = u[o + s - 1], p = u[o + s];
            e.prev_length >= e.good_match && (r >>= 2),
            a > e.lookahead && (a = e.lookahead);
            do {
                if (u[(n = t) + s] === p && u[n + s - 1] === d && u[n] === u[o] && u[++n] === u[o + 1]) {
                    o += 2,
                    n++;
                    do {} while (u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && u[++o] === u[++n] && o < f);
                    if (i = V - (f - o),
                    o = f - V,
                    i > s) {
                        if (e.match_start = t,
                        s = i,
                        i >= a)
                            break;
                        d = u[o + s - 1],
                        p = u[o + s]
                    }
                }
            } while ((t = h[t & l]) > c && 0 != --r);
            return s <= e.lookahead ? s : e.lookahead
        }
        function fill_window(e) {
            var t, n, i, r, o, s, a, c, u, l, h = e.w_size;
            do {
                if (r = e.window_size - e.lookahead - e.strstart,
                e.strstart >= h + (h - W)) {
                    q.arraySet(e.window, e.window, h, h, 0),
                    e.match_start -= h,
                    e.strstart -= h,
                    e.block_start -= h,
                    t = n = e.hash_size;
                    do {
                        i = e.head[--t],
                        e.head[t] = i >= h ? i - h : 0
                    } while (--n);
                    t = n = h;
                    do {
                        i = e.prev[--t],
                        e.prev[t] = i >= h ? i - h : 0
                    } while (--n);
                    r += h
                }
                if (0 === e.strm.avail_in)
                    break;
                if (s = e.strm,
                a = e.window,
                c = e.strstart + e.lookahead,
                u = r,
                l = void 0,
                (l = s.avail_in) > u && (l = u),
                n = 0 === l ? 0 : (s.avail_in -= l,
                q.arraySet(a, s.input, s.next_in, l, c),
                1 === s.state.wrap ? s.adler = F(s.adler, a, l, c) : 2 === s.state.wrap && (s.adler = z(s.adler, a, l, c)),
                s.next_in += l,
                s.total_in += l,
                l),
                e.lookahead += n,
                e.lookahead + e.insert >= 3)
                    for (o = e.strstart - e.insert,
                    e.ins_h = e.window[o],
                    e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[o + 3 - 1]) & e.hash_mask,
                    e.prev[o & e.w_mask] = e.head[e.ins_h],
                    e.head[e.ins_h] = o,
                    o++,
                    e.insert--,
                    !(e.lookahead + e.insert < 3)); )
                        ;
            } while (e.lookahead < W && 0 !== e.strm.avail_in)
        }
        function deflate_fast(e, t) {
            for (var n, i; ; ) {
                if (e.lookahead < W) {
                    if (fill_window(e),
                    e.lookahead < W && 0 === t)
                        return 1;
                    if (0 === e.lookahead)
                        break
                }
                if (n = 0,
                e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask,
                n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                e.head[e.ins_h] = e.strstart),
                0 !== n && e.strstart - n <= e.w_size - W && (e.match_length = longest_match(e, n)),
                e.match_length >= 3)
                    if (i = L._tr_tally(e, e.strstart - e.match_start, e.match_length - 3),
                    e.lookahead -= e.match_length,
                    e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                        e.match_length--;
                        do {
                            e.strstart++,
                            e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask,
                            n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                            e.head[e.ins_h] = e.strstart
                        } while (0 != --e.match_length);
                        e.strstart++
                    } else
                        e.strstart += e.match_length,
                        e.match_length = 0,
                        e.ins_h = e.window[e.strstart],
                        e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                else
                    i = L._tr_tally(e, 0, e.window[e.strstart]),
                    e.lookahead--,
                    e.strstart++;
                if (i && (flush_block_only(e, !1),
                0 === e.strm.avail_out))
                    return 1
            }
            return e.insert = e.strstart < 2 ? e.strstart : 2,
            4 === t ? (flush_block_only(e, !0),
            0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (flush_block_only(e, !1),
            0 === e.strm.avail_out) ? 1 : 2
        }
        function deflate_slow(e, t) {
            for (var n, i, r; ; ) {
                if (e.lookahead < W) {
                    if (fill_window(e),
                    e.lookahead < W && 0 === t)
                        return 1;
                    if (0 === e.lookahead)
                        break
                }
                if (n = 0,
                e.lookahead >= 3 && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask,
                n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                e.head[e.ins_h] = e.strstart),
                e.prev_length = e.match_length,
                e.prev_match = e.match_start,
                e.match_length = 2,
                0 !== n && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - W && (e.match_length = longest_match(e, n),
                e.match_length <= 5 && (1 === e.strategy || 3 === e.match_length && e.strstart - e.match_start > 4096) && (e.match_length = 2)),
                e.prev_length >= 3 && e.match_length <= e.prev_length) {
                    r = e.strstart + e.lookahead - 3,
                    i = L._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3),
                    e.lookahead -= e.prev_length - 1,
                    e.prev_length -= 2;
                    do {
                        ++e.strstart <= r && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask,
                        n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                        e.head[e.ins_h] = e.strstart)
                    } while (0 != --e.prev_length);
                    if (e.match_available = 0,
                    e.match_length = 2,
                    e.strstart++,
                    i && (flush_block_only(e, !1),
                    0 === e.strm.avail_out))
                        return 1
                } else if (e.match_available) {
                    if ((i = L._tr_tally(e, 0, e.window[e.strstart - 1])) && flush_block_only(e, !1),
                    e.strstart++,
                    e.lookahead--,
                    0 === e.strm.avail_out)
                        return 1
                } else
                    e.match_available = 1,
                    e.strstart++,
                    e.lookahead--
            }
            return e.match_available && (i = L._tr_tally(e, 0, e.window[e.strstart - 1]),
            e.match_available = 0),
            e.insert = e.strstart < 2 ? e.strstart : 2,
            4 === t ? (flush_block_only(e, !0),
            0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (flush_block_only(e, !1),
            0 === e.strm.avail_out) ? 1 : 2
        }
        function Config(e, t, n, i, r) {
            this.good_length = e,
            this.max_lazy = t,
            this.nice_length = n,
            this.max_chain = i,
            this.func = r
        }
        function DeflateState() {
            this.strm = null,
            this.status = 0,
            this.pending_buf = null,
            this.pending_buf_size = 0,
            this.pending_out = 0,
            this.pending = 0,
            this.wrap = 0,
            this.gzhead = null,
            this.gzindex = 0,
            this.method = 8,
            this.last_flush = -1,
            this.w_size = 0,
            this.w_bits = 0,
            this.w_mask = 0,
            this.window = null,
            this.window_size = 0,
            this.prev = null,
            this.head = null,
            this.ins_h = 0,
            this.hash_size = 0,
            this.hash_bits = 0,
            this.hash_mask = 0,
            this.hash_shift = 0,
            this.block_start = 0,
            this.match_length = 0,
            this.prev_match = 0,
            this.match_available = 0,
            this.strstart = 0,
            this.match_start = 0,
            this.lookahead = 0,
            this.prev_length = 0,
            this.max_chain_length = 0,
            this.max_lazy_match = 0,
            this.level = 0,
            this.strategy = 0,
            this.good_match = 0,
            this.nice_match = 0,
            this.dyn_ltree = new q.Buf16(1146),
            this.dyn_dtree = new q.Buf16(122),
            this.bl_tree = new q.Buf16(78),
            zero(this.dyn_ltree),
            zero(this.dyn_dtree),
            zero(this.bl_tree),
            this.l_desc = null,
            this.d_desc = null,
            this.bl_desc = null,
            this.bl_count = new q.Buf16(16),
            this.heap = new q.Buf16(573),
            zero(this.heap),
            this.heap_len = 0,
            this.heap_max = 0,
            this.depth = new q.Buf16(573),
            zero(this.depth),
            this.l_buf = 0,
            this.lit_bufsize = 0,
            this.last_lit = 0,
            this.d_buf = 0,
            this.opt_len = 0,
            this.static_len = 0,
            this.matches = 0,
            this.insert = 0,
            this.bi_buf = 0,
            this.bi_valid = 0
        }
        function deflateResetKeep(e) {
            var t;
            return e && e.state ? (e.total_in = e.total_out = 0,
            e.data_type = 2,
            (t = e.state).pending = 0,
            t.pending_out = 0,
            t.wrap < 0 && (t.wrap = -t.wrap),
            t.status = t.wrap ? 42 : K,
            e.adler = 2 === t.wrap ? 0 : 1,
            t.last_flush = 0,
            L._tr_init(t),
            0) : err(e, Q)
        }
        function deflateReset(e) {
            var t = deflateResetKeep(e);
            return 0 === t && function lm_init(e) {
                e.window_size = 2 * e.w_size,
                zero(e.head),
                e.max_lazy_match = B[e.level].max_lazy,
                e.good_match = B[e.level].good_length,
                e.nice_match = B[e.level].nice_length,
                e.max_chain_length = B[e.level].max_chain,
                e.strstart = 0,
                e.block_start = 0,
                e.lookahead = 0,
                e.insert = 0,
                e.match_length = e.prev_length = 2,
                e.match_available = 0,
                e.ins_h = 0
            }(e.state),
            t
        }
        function deflateInit2(e, t, n, i, r, o) {
            if (!e)
                return Q;
            var s = 1;
            if (-1 === t && (t = 6),
            i < 0 ? (s = 0,
            i = -i) : i > 15 && (s = 2,
            i -= 16),
            r < 1 || r > 9 || 8 !== n || i < 8 || i > 15 || t < 0 || t > 9 || o < 0 || o > 4)
                return err(e, Q);
            8 === i && (i = 9);
            var a = new DeflateState;
            return e.state = a,
            a.strm = e,
            a.wrap = s,
            a.gzhead = null,
            a.w_bits = i,
            a.w_size = 1 << a.w_bits,
            a.w_mask = a.w_size - 1,
            a.hash_bits = r + 7,
            a.hash_size = 1 << a.hash_bits,
            a.hash_mask = a.hash_size - 1,
            a.hash_shift = ~~((a.hash_bits + 3 - 1) / 3),
            a.window = new q.Buf8(2 * a.w_size),
            a.head = new q.Buf16(a.hash_size),
            a.prev = new q.Buf16(a.w_size),
            a.lit_bufsize = 1 << r + 6,
            a.pending_buf_size = 4 * a.lit_bufsize,
            a.pending_buf = new q.Buf8(a.pending_buf_size),
            a.d_buf = 1 * a.lit_bufsize,
            a.l_buf = 3 * a.lit_bufsize,
            a.level = t,
            a.strategy = o,
            a.method = n,
            deflateReset(e)
        }
        B = [new Config(0,0,0,0,(function deflate_stored(e, t) {
            var n = 65535;
            for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
                if (e.lookahead <= 1) {
                    if (fill_window(e),
                    0 === e.lookahead && 0 === t)
                        return 1;
                    if (0 === e.lookahead)
                        break
                }
                e.strstart += e.lookahead,
                e.lookahead = 0;
                var i = e.block_start + n;
                if ((0 === e.strstart || e.strstart >= i) && (e.lookahead = e.strstart - i,
                e.strstart = i,
                flush_block_only(e, !1),
                0 === e.strm.avail_out))
                    return 1;
                if (e.strstart - e.block_start >= e.w_size - W && (flush_block_only(e, !1),
                0 === e.strm.avail_out))
                    return 1
            }
            return e.insert = 0,
            4 === t ? (flush_block_only(e, !0),
            0 === e.strm.avail_out ? 3 : 4) : (e.strstart > e.block_start && (flush_block_only(e, !1),
            e.strm.avail_out),
            1)
        }
        )), new Config(4,4,8,4,deflate_fast), new Config(4,5,16,8,deflate_fast), new Config(4,6,32,32,deflate_fast), new Config(4,4,16,16,deflate_slow), new Config(8,16,32,32,deflate_slow), new Config(8,16,128,128,deflate_slow), new Config(8,32,128,256,deflate_slow), new Config(32,128,258,1024,deflate_slow), new Config(32,258,258,4096,deflate_slow)],
        d.deflateInit = function deflateInit(e, t) {
            return deflateInit2(e, t, 8, 15, 8, 0)
        }
        ,
        d.deflateInit2 = deflateInit2,
        d.deflateReset = deflateReset,
        d.deflateResetKeep = deflateResetKeep,
        d.deflateSetHeader = function deflateSetHeader(e, t) {
            return e && e.state ? 2 !== e.state.wrap ? Q : (e.state.gzhead = t,
            0) : Q
        }
        ,
        d.deflate = function deflate$2(e, t) {
            var n, i, r, o;
            if (!e || !e.state || t > 5 || t < 0)
                return e ? err(e, Q) : Q;
            if (i = e.state,
            !e.output || !e.input && 0 !== e.avail_in || i.status === $ && 4 !== t)
                return err(e, 0 === e.avail_out ? -5 : Q);
            if (i.strm = e,
            n = i.last_flush,
            i.last_flush = t,
            42 === i.status)
                if (2 === i.wrap)
                    e.adler = 0,
                    put_byte(i, 31),
                    put_byte(i, 139),
                    put_byte(i, 8),
                    i.gzhead ? (put_byte(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)),
                    put_byte(i, 255 & i.gzhead.time),
                    put_byte(i, i.gzhead.time >> 8 & 255),
                    put_byte(i, i.gzhead.time >> 16 & 255),
                    put_byte(i, i.gzhead.time >> 24 & 255),
                    put_byte(i, 9 === i.level ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0),
                    put_byte(i, 255 & i.gzhead.os),
                    i.gzhead.extra && i.gzhead.extra.length && (put_byte(i, 255 & i.gzhead.extra.length),
                    put_byte(i, i.gzhead.extra.length >> 8 & 255)),
                    i.gzhead.hcrc && (e.adler = z(e.adler, i.pending_buf, i.pending, 0)),
                    i.gzindex = 0,
                    i.status = 69) : (put_byte(i, 0),
                    put_byte(i, 0),
                    put_byte(i, 0),
                    put_byte(i, 0),
                    put_byte(i, 0),
                    put_byte(i, 9 === i.level ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0),
                    put_byte(i, 3),
                    i.status = K);
                else {
                    var s = 8 + (i.w_bits - 8 << 4) << 8;
                    s |= (i.strategy >= 2 || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6,
                    0 !== i.strstart && (s |= 32),
                    s += 31 - s % 31,
                    i.status = K,
                    putShortMSB(i, s),
                    0 !== i.strstart && (putShortMSB(i, e.adler >>> 16),
                    putShortMSB(i, 65535 & e.adler)),
                    e.adler = 1
                }
            if (69 === i.status)
                if (i.gzhead.extra) {
                    for (r = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > r && (e.adler = z(e.adler, i.pending_buf, i.pending - r, r)),
                    flush_pending(e),
                    r = i.pending,
                    i.pending !== i.pending_buf_size)); )
                        put_byte(i, 255 & i.gzhead.extra[i.gzindex]),
                        i.gzindex++;
                    i.gzhead.hcrc && i.pending > r && (e.adler = z(e.adler, i.pending_buf, i.pending - r, r)),
                    i.gzindex === i.gzhead.extra.length && (i.gzindex = 0,
                    i.status = 73)
                } else
                    i.status = 73;
            if (73 === i.status)
                if (i.gzhead.name) {
                    r = i.pending;
                    do {
                        if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > r && (e.adler = z(e.adler, i.pending_buf, i.pending - r, r)),
                        flush_pending(e),
                        r = i.pending,
                        i.pending === i.pending_buf_size)) {
                            o = 1;
                            break
                        }
                        o = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0,
                        put_byte(i, o)
                    } while (0 !== o);
                    i.gzhead.hcrc && i.pending > r && (e.adler = z(e.adler, i.pending_buf, i.pending - r, r)),
                    0 === o && (i.gzindex = 0,
                    i.status = 91)
                } else
                    i.status = 91;
            if (91 === i.status)
                if (i.gzhead.comment) {
                    r = i.pending;
                    do {
                        if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > r && (e.adler = z(e.adler, i.pending_buf, i.pending - r, r)),
                        flush_pending(e),
                        r = i.pending,
                        i.pending === i.pending_buf_size)) {
                            o = 1;
                            break
                        }
                        o = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0,
                        put_byte(i, o)
                    } while (0 !== o);
                    i.gzhead.hcrc && i.pending > r && (e.adler = z(e.adler, i.pending_buf, i.pending - r, r)),
                    0 === o && (i.status = Z)
                } else
                    i.status = Z;
            if (i.status === Z && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && flush_pending(e),
            i.pending + 2 <= i.pending_buf_size && (put_byte(i, 255 & e.adler),
            put_byte(i, e.adler >> 8 & 255),
            e.adler = 0,
            i.status = K)) : i.status = K),
            0 !== i.pending) {
                if (flush_pending(e),
                0 === e.avail_out)
                    return i.last_flush = -1,
                    0
            } else if (0 === e.avail_in && rank(t) <= rank(n) && 4 !== t)
                return err(e, -5);
            if (i.status === $ && 0 !== e.avail_in)
                return err(e, -5);
            if (0 !== e.avail_in || 0 !== i.lookahead || 0 !== t && i.status !== $) {
                var a = 2 === i.strategy ? function deflate_huff(e, t) {
                    for (var n; ; ) {
                        if (0 === e.lookahead && (fill_window(e),
                        0 === e.lookahead)) {
                            if (0 === t)
                                return 1;
                            break
                        }
                        if (e.match_length = 0,
                        n = L._tr_tally(e, 0, e.window[e.strstart]),
                        e.lookahead--,
                        e.strstart++,
                        n && (flush_block_only(e, !1),
                        0 === e.strm.avail_out))
                            return 1
                    }
                    return e.insert = 0,
                    4 === t ? (flush_block_only(e, !0),
                    0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (flush_block_only(e, !1),
                    0 === e.strm.avail_out) ? 1 : 2
                }(i, t) : 3 === i.strategy ? function deflate_rle(e, t) {
                    for (var n, i, r, o, s = e.window; ; ) {
                        if (e.lookahead <= V) {
                            if (fill_window(e),
                            e.lookahead <= V && 0 === t)
                                return 1;
                            if (0 === e.lookahead)
                                break
                        }
                        if (e.match_length = 0,
                        e.lookahead >= 3 && e.strstart > 0 && (i = s[r = e.strstart - 1]) === s[++r] && i === s[++r] && i === s[++r]) {
                            o = e.strstart + V;
                            do {} while (i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && r < o);
                            e.match_length = V - (o - r),
                            e.match_length > e.lookahead && (e.match_length = e.lookahead)
                        }
                        if (e.match_length >= 3 ? (n = L._tr_tally(e, 1, e.match_length - 3),
                        e.lookahead -= e.match_length,
                        e.strstart += e.match_length,
                        e.match_length = 0) : (n = L._tr_tally(e, 0, e.window[e.strstart]),
                        e.lookahead--,
                        e.strstart++),
                        n && (flush_block_only(e, !1),
                        0 === e.strm.avail_out))
                            return 1
                    }
                    return e.insert = 0,
                    4 === t ? (flush_block_only(e, !0),
                    0 === e.strm.avail_out ? 3 : 4) : e.last_lit && (flush_block_only(e, !1),
                    0 === e.strm.avail_out) ? 1 : 2
                }(i, t) : B[i.level].func(i, t);
                if (3 !== a && 4 !== a || (i.status = $),
                1 === a || 3 === a)
                    return 0 === e.avail_out && (i.last_flush = -1),
                    0;
                if (2 === a && (1 === t ? L._tr_align(i) : 5 !== t && (L._tr_stored_block(i, 0, 0, !1),
                3 === t && (zero(i.head),
                0 === i.lookahead && (i.strstart = 0,
                i.block_start = 0,
                i.insert = 0))),
                flush_pending(e),
                0 === e.avail_out))
                    return i.last_flush = -1,
                    0
            }
            return 4 !== t ? 0 : i.wrap <= 0 ? 1 : (2 === i.wrap ? (put_byte(i, 255 & e.adler),
            put_byte(i, e.adler >> 8 & 255),
            put_byte(i, e.adler >> 16 & 255),
            put_byte(i, e.adler >> 24 & 255),
            put_byte(i, 255 & e.total_in),
            put_byte(i, e.total_in >> 8 & 255),
            put_byte(i, e.total_in >> 16 & 255),
            put_byte(i, e.total_in >> 24 & 255)) : (putShortMSB(i, e.adler >>> 16),
            putShortMSB(i, 65535 & e.adler)),
            flush_pending(e),
            i.wrap > 0 && (i.wrap = -i.wrap),
            0 !== i.pending ? 0 : 1)
        }
        ,
        d.deflateEnd = function deflateEnd(e) {
            var t;
            return e && e.state ? 42 !== (t = e.state.status) && 69 !== t && 73 !== t && 91 !== t && t !== Z && t !== K && t !== $ ? err(e, Q) : (e.state = null,
            t === K ? err(e, -3) : 0) : Q
        }
        ,
        d.deflateSetDictionary = function deflateSetDictionary(e, t) {
            var n, i, r, o, s, a, c, u, l = t.length;
            if (!e || !e.state)
                return Q;
            if (2 === (o = (n = e.state).wrap) || 1 === o && 42 !== n.status || n.lookahead)
                return Q;
            for (1 === o && (e.adler = F(e.adler, t, l, 0)),
            n.wrap = 0,
            l >= n.w_size && (0 === o && (zero(n.head),
            n.strstart = 0,
            n.block_start = 0,
            n.insert = 0),
            u = new q.Buf8(n.w_size),
            q.arraySet(u, t, l - n.w_size, n.w_size, 0),
            t = u,
            l = n.w_size),
            s = e.avail_in,
            a = e.next_in,
            c = e.input,
            e.avail_in = l,
            e.next_in = 0,
            e.input = t,
            fill_window(n); n.lookahead >= 3; ) {
                i = n.strstart,
                r = n.lookahead - 2;
                do {
                    n.ins_h = (n.ins_h << n.hash_shift ^ n.window[i + 3 - 1]) & n.hash_mask,
                    n.prev[i & n.w_mask] = n.head[n.ins_h],
                    n.head[n.ins_h] = i,
                    i++
                } while (--r);
                n.strstart = i,
                n.lookahead = 2,
                fill_window(n)
            }
            return n.strstart += n.lookahead,
            n.block_start = n.strstart,
            n.insert = n.lookahead,
            n.lookahead = 0,
            n.match_length = n.prev_length = 2,
            n.match_available = 0,
            e.next_in = a,
            e.input = c,
            e.avail_in = s,
            n.wrap = o,
            0
        }
        ,
        d.deflateInfo = "pako deflate (from Nodeca project)";
        var G = {}
          , J = h
          , X = !0
          , Y = !0;
        try {
            String.fromCharCode.apply(null, [0])
        } catch (Fn) {
            X = !1
        }
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch (Fn) {
            Y = !1
        }
        for (var ee = new J.Buf8(256), te = 0; te < 256; te++)
            ee[te] = te >= 252 ? 6 : te >= 248 ? 5 : te >= 240 ? 4 : te >= 224 ? 3 : te >= 192 ? 2 : 1;
        function buf2binstring(e, t) {
            if (t < 65534 && (e.subarray && Y || !e.subarray && X))
                return String.fromCharCode.apply(null, J.shrinkBuf(e, t));
            for (var n = "", i = 0; i < t; i++)
                n += String.fromCharCode(e[i]);
            return n
        }
        ee[254] = ee[254] = 1,
        G.string2buf = function(e) {
            var t, n, i, r, o, s = e.length, a = 0;
            for (r = 0; r < s; r++)
                55296 == (64512 & (n = e.charCodeAt(r))) && r + 1 < s && 56320 == (64512 & (i = e.charCodeAt(r + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320),
                r++),
                a += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
            for (t = new J.Buf8(a),
            o = 0,
            r = 0; o < a; r++)
                55296 == (64512 & (n = e.charCodeAt(r))) && r + 1 < s && 56320 == (64512 & (i = e.charCodeAt(r + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320),
                r++),
                n < 128 ? t[o++] = n : n < 2048 ? (t[o++] = 192 | n >>> 6,
                t[o++] = 128 | 63 & n) : n < 65536 ? (t[o++] = 224 | n >>> 12,
                t[o++] = 128 | n >>> 6 & 63,
                t[o++] = 128 | 63 & n) : (t[o++] = 240 | n >>> 18,
                t[o++] = 128 | n >>> 12 & 63,
                t[o++] = 128 | n >>> 6 & 63,
                t[o++] = 128 | 63 & n);
            return t
        }
        ,
        G.buf2binstring = function(e) {
            return buf2binstring(e, e.length)
        }
        ,
        G.binstring2buf = function(e) {
            for (var t = new J.Buf8(e.length), n = 0, i = t.length; n < i; n++)
                t[n] = e.charCodeAt(n);
            return t
        }
        ,
        G.buf2string = function(e, t) {
            var n, i, r, o, s = t || e.length, a = new Array(2 * s);
            for (i = 0,
            n = 0; n < s; )
                if ((r = e[n++]) < 128)
                    a[i++] = r;
                else if ((o = ee[r]) > 4)
                    a[i++] = 65533,
                    n += o - 1;
                else {
                    for (r &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < s; )
                        r = r << 6 | 63 & e[n++],
                        o--;
                    o > 1 ? a[i++] = 65533 : r < 65536 ? a[i++] = r : (r -= 65536,
                    a[i++] = 55296 | r >> 10 & 1023,
                    a[i++] = 56320 | 1023 & r)
                }
            return buf2binstring(a, i)
        }
        ,
        G.utf8border = function(e, t) {
            var n;
            for ((t = t || e.length) > e.length && (t = e.length),
            n = t - 1; n >= 0 && 128 == (192 & e[n]); )
                n--;
            return n < 0 || 0 === n ? t : n + ee[e[n]] > t ? n : t
        }
        ;
        var ne = function ZStream$2() {
            this.input = null,
            this.next_in = 0,
            this.avail_in = 0,
            this.total_in = 0,
            this.output = null,
            this.next_out = 0,
            this.avail_out = 0,
            this.total_out = 0,
            this.msg = "",
            this.state = null,
            this.data_type = 2,
            this.adler = 0
        }
          , ie = d
          , re = h
          , oe = G
          , se = N
          , ae = ne
          , ce = Object.prototype.toString;
        function Deflate(e) {
            if (!(this instanceof Deflate))
                return new Deflate(e);
            this.options = re.assign({
                level: -1,
                method: 8,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: 0,
                to: ""
            }, e || {});
            var t = this.options;
            t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16),
            this.err = 0,
            this.msg = "",
            this.ended = !1,
            this.chunks = [],
            this.strm = new ae,
            this.strm.avail_out = 0;
            var n = ie.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
            if (0 !== n)
                throw new Error(se[n]);
            if (t.header && ie.deflateSetHeader(this.strm, t.header),
            t.dictionary) {
                var i;
                if (i = "string" == typeof t.dictionary ? oe.string2buf(t.dictionary) : "[object ArrayBuffer]" === ce.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary,
                0 !== (n = ie.deflateSetDictionary(this.strm, i)))
                    throw new Error(se[n]);
                this._dict_set = !0
            }
        }
        function deflate$1(e, t) {
            var n = new Deflate(t);
            if (n.push(e, !0),
            n.err)
                throw n.msg || se[n.err];
            return n.result
        }
        Deflate.prototype.push = function(e, t) {
            var n, i, r = this.strm, o = this.options.chunkSize;
            if (this.ended)
                return !1;
            i = t === ~~t ? t : !0 === t ? 4 : 0,
            "string" == typeof e ? r.input = oe.string2buf(e) : "[object ArrayBuffer]" === ce.call(e) ? r.input = new Uint8Array(e) : r.input = e,
            r.next_in = 0,
            r.avail_in = r.input.length;
            do {
                if (0 === r.avail_out && (r.output = new re.Buf8(o),
                r.next_out = 0,
                r.avail_out = o),
                1 !== (n = ie.deflate(r, i)) && 0 !== n)
                    return this.onEnd(n),
                    this.ended = !0,
                    !1;
                0 !== r.avail_out && (0 !== r.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(oe.buf2binstring(re.shrinkBuf(r.output, r.next_out))) : this.onData(re.shrinkBuf(r.output, r.next_out)))
            } while ((r.avail_in > 0 || 0 === r.avail_out) && 1 !== n);
            return 4 === i ? (n = ie.deflateEnd(this.strm),
            this.onEnd(n),
            this.ended = !0,
            0 === n) : 2 !== i || (this.onEnd(0),
            r.avail_out = 0,
            !0)
        }
        ,
        Deflate.prototype.onData = function(e) {
            this.chunks.push(e)
        }
        ,
        Deflate.prototype.onEnd = function(e) {
            0 === e && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = re.flattenChunks(this.chunks)),
            this.chunks = [],
            this.err = e,
            this.msg = this.strm.msg
        }
        ,
        f.Deflate = Deflate,
        f.deflate = deflate$1,
        f.deflateRaw = function deflateRaw(e, t) {
            return (t = t || {}).raw = !0,
            deflate$1(e, t)
        }
        ,
        f.gzip = function gzip(e, t) {
            return (t = t || {}).gzip = !0,
            deflate$1(e, t)
        }
        ;
        var ue = {}
          , le = {}
          , he = h
          , fe = 15
          , de = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]
          , pe = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]
          , _e = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]
          , ve = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]
          , ye = h
          , ge = U
          , be = M
          , me = function inflate_fast(e, t) {
            var n, i, r, o, s, a, c, u, l, h, f, d, p, _, v, y, g, b, m, w, k, E, S, C, P;
            n = e.state,
            i = e.next_in,
            C = e.input,
            r = i + (e.avail_in - 5),
            o = e.next_out,
            P = e.output,
            s = o - (t - e.avail_out),
            a = o + (e.avail_out - 257),
            c = n.dmax,
            u = n.wsize,
            l = n.whave,
            h = n.wnext,
            f = n.window,
            d = n.hold,
            p = n.bits,
            _ = n.lencode,
            v = n.distcode,
            y = (1 << n.lenbits) - 1,
            g = (1 << n.distbits) - 1;
            e: do {
                p < 15 && (d += C[i++] << p,
                p += 8,
                d += C[i++] << p,
                p += 8),
                b = _[d & y];
                t: for (; ; ) {
                    if (d >>>= m = b >>> 24,
                    p -= m,
                    0 === (m = b >>> 16 & 255))
                        P[o++] = 65535 & b;
                    else {
                        if (!(16 & m)) {
                            if (0 == (64 & m)) {
                                b = _[(65535 & b) + (d & (1 << m) - 1)];
                                continue t
                            }
                            if (32 & m) {
                                n.mode = 12;
                                break e
                            }
                            e.msg = "invalid literal/length code",
                            n.mode = 30;
                            break e
                        }
                        w = 65535 & b,
                        (m &= 15) && (p < m && (d += C[i++] << p,
                        p += 8),
                        w += d & (1 << m) - 1,
                        d >>>= m,
                        p -= m),
                        p < 15 && (d += C[i++] << p,
                        p += 8,
                        d += C[i++] << p,
                        p += 8),
                        b = v[d & g];
                        n: for (; ; ) {
                            if (d >>>= m = b >>> 24,
                            p -= m,
                            !(16 & (m = b >>> 16 & 255))) {
                                if (0 == (64 & m)) {
                                    b = v[(65535 & b) + (d & (1 << m) - 1)];
                                    continue n
                                }
                                e.msg = "invalid distance code",
                                n.mode = 30;
                                break e
                            }
                            if (k = 65535 & b,
                            p < (m &= 15) && (d += C[i++] << p,
                            (p += 8) < m && (d += C[i++] << p,
                            p += 8)),
                            (k += d & (1 << m) - 1) > c) {
                                e.msg = "invalid distance too far back",
                                n.mode = 30;
                                break e
                            }
                            if (d >>>= m,
                            p -= m,
                            k > (m = o - s)) {
                                if ((m = k - m) > l && n.sane) {
                                    e.msg = "invalid distance too far back",
                                    n.mode = 30;
                                    break e
                                }
                                if (E = 0,
                                S = f,
                                0 === h) {
                                    if (E += u - m,
                                    m < w) {
                                        w -= m;
                                        do {
                                            P[o++] = f[E++]
                                        } while (--m);
                                        E = o - k,
                                        S = P
                                    }
                                } else if (h < m) {
                                    if (E += u + h - m,
                                    (m -= h) < w) {
                                        w -= m;
                                        do {
                                            P[o++] = f[E++]
                                        } while (--m);
                                        if (E = 0,
                                        h < w) {
                                            w -= m = h;
                                            do {
                                                P[o++] = f[E++]
                                            } while (--m);
                                            E = o - k,
                                            S = P
                                        }
                                    }
                                } else if (E += h - m,
                                m < w) {
                                    w -= m;
                                    do {
                                        P[o++] = f[E++]
                                    } while (--m);
                                    E = o - k,
                                    S = P
                                }
                                for (; w > 2; )
                                    P[o++] = S[E++],
                                    P[o++] = S[E++],
                                    P[o++] = S[E++],
                                    w -= 3;
                                w && (P[o++] = S[E++],
                                w > 1 && (P[o++] = S[E++]))
                            } else {
                                E = o - k;
                                do {
                                    P[o++] = P[E++],
                                    P[o++] = P[E++],
                                    P[o++] = P[E++],
                                    w -= 3
                                } while (w > 2);
                                w && (P[o++] = P[E++],
                                w > 1 && (P[o++] = P[E++]))
                            }
                            break
                        }
                    }
                    break
                }
            } while (i < r && o < a);
            i -= w = p >> 3,
            d &= (1 << (p -= w << 3)) - 1,
            e.next_in = i,
            e.next_out = o,
            e.avail_in = i < r ? r - i + 5 : 5 - (i - r),
            e.avail_out = o < a ? a - o + 257 : 257 - (o - a),
            n.hold = d,
            n.bits = p
        }
          , we = function inflate_table(e, t, n, i, r, o, s, a) {
            var c, u, l, h, f, d, p, _, v, y = a.bits, g = 0, b = 0, m = 0, w = 0, k = 0, E = 0, S = 0, C = 0, P = 0, O = 0, A = null, T = 0, R = new he.Buf16(16), j = new he.Buf16(16), x = null, I = 0;
            for (g = 0; g <= fe; g++)
                R[g] = 0;
            for (b = 0; b < i; b++)
                R[t[n + b]]++;
            for (k = y,
            w = fe; w >= 1 && 0 === R[w]; w--)
                ;
            if (k > w && (k = w),
            0 === w)
                return r[o++] = 20971520,
                r[o++] = 20971520,
                a.bits = 1,
                0;
            for (m = 1; m < w && 0 === R[m]; m++)
                ;
            for (k < m && (k = m),
            C = 1,
            g = 1; g <= fe; g++)
                if (C <<= 1,
                (C -= R[g]) < 0)
                    return -1;
            if (C > 0 && (0 === e || 1 !== w))
                return -1;
            for (j[1] = 0,
            g = 1; g < fe; g++)
                j[g + 1] = j[g] + R[g];
            for (b = 0; b < i; b++)
                0 !== t[n + b] && (s[j[t[n + b]]++] = b);
            if (0 === e ? (A = x = s,
            d = 19) : 1 === e ? (A = de,
            T -= 257,
            x = pe,
            I -= 257,
            d = 256) : (A = _e,
            x = ve,
            d = -1),
            O = 0,
            b = 0,
            g = m,
            f = o,
            E = k,
            S = 0,
            l = -1,
            h = (P = 1 << k) - 1,
            1 === e && P > 852 || 2 === e && P > 592)
                return 1;
            for (; ; ) {
                p = g - S,
                s[b] < d ? (_ = 0,
                v = s[b]) : s[b] > d ? (_ = x[I + s[b]],
                v = A[T + s[b]]) : (_ = 96,
                v = 0),
                c = 1 << g - S,
                m = u = 1 << E;
                do {
                    r[f + (O >> S) + (u -= c)] = p << 24 | _ << 16 | v | 0
                } while (0 !== u);
                for (c = 1 << g - 1; O & c; )
                    c >>= 1;
                if (0 !== c ? (O &= c - 1,
                O += c) : O = 0,
                b++,
                0 == --R[g]) {
                    if (g === w)
                        break;
                    g = t[n + s[b]]
                }
                if (g > k && (O & h) !== l) {
                    for (0 === S && (S = k),
                    f += m,
                    C = 1 << (E = g - S); E + S < w && !((C -= R[E + S]) <= 0); )
                        E++,
                        C <<= 1;
                    if (P += 1 << E,
                    1 === e && P > 852 || 2 === e && P > 592)
                        return 1;
                    r[l = O & h] = k << 24 | E << 16 | f - o | 0
                }
            }
            return 0 !== O && (r[f + O] = g - S << 24 | 64 << 16 | 0),
            a.bits = k,
            0
        }
          , ke = -2
          , Ee = 12
          , Se = 30;
        function zswap32(e) {
            return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
        }
        function InflateState() {
            this.mode = 0,
            this.last = !1,
            this.wrap = 0,
            this.havedict = !1,
            this.flags = 0,
            this.dmax = 0,
            this.check = 0,
            this.total = 0,
            this.head = null,
            this.wbits = 0,
            this.wsize = 0,
            this.whave = 0,
            this.wnext = 0,
            this.window = null,
            this.hold = 0,
            this.bits = 0,
            this.length = 0,
            this.offset = 0,
            this.extra = 0,
            this.lencode = null,
            this.distcode = null,
            this.lenbits = 0,
            this.distbits = 0,
            this.ncode = 0,
            this.nlen = 0,
            this.ndist = 0,
            this.have = 0,
            this.next = null,
            this.lens = new ye.Buf16(320),
            this.work = new ye.Buf16(288),
            this.lendyn = null,
            this.distdyn = null,
            this.sane = 0,
            this.back = 0,
            this.was = 0
        }
        function inflateResetKeep(e) {
            var t;
            return e && e.state ? (t = e.state,
            e.total_in = e.total_out = t.total = 0,
            e.msg = "",
            t.wrap && (e.adler = 1 & t.wrap),
            t.mode = 1,
            t.last = 0,
            t.havedict = 0,
            t.dmax = 32768,
            t.head = null,
            t.hold = 0,
            t.bits = 0,
            t.lencode = t.lendyn = new ye.Buf32(852),
            t.distcode = t.distdyn = new ye.Buf32(592),
            t.sane = 1,
            t.back = -1,
            0) : ke
        }
        function inflateReset(e) {
            var t;
            return e && e.state ? ((t = e.state).wsize = 0,
            t.whave = 0,
            t.wnext = 0,
            inflateResetKeep(e)) : ke
        }
        function inflateReset2(e, t) {
            var n, i;
            return e && e.state ? (i = e.state,
            t < 0 ? (n = 0,
            t = -t) : (n = 1 + (t >> 4),
            t < 48 && (t &= 15)),
            t && (t < 8 || t > 15) ? ke : (null !== i.window && i.wbits !== t && (i.window = null),
            i.wrap = n,
            i.wbits = t,
            inflateReset(e))) : ke
        }
        function inflateInit2(e, t) {
            var n, i;
            return e ? (i = new InflateState,
            e.state = i,
            i.window = null,
            0 !== (n = inflateReset2(e, t)) && (e.state = null),
            n) : ke
        }
        var Ce, Pe, Oe = !0;
        function fixedtables(e) {
            if (Oe) {
                var t;
                for (Ce = new ye.Buf32(512),
                Pe = new ye.Buf32(32),
                t = 0; t < 144; )
                    e.lens[t++] = 8;
                for (; t < 256; )
                    e.lens[t++] = 9;
                for (; t < 280; )
                    e.lens[t++] = 7;
                for (; t < 288; )
                    e.lens[t++] = 8;
                for (we(1, e.lens, 0, 288, Ce, 0, e.work, {
                    bits: 9
                }),
                t = 0; t < 32; )
                    e.lens[t++] = 5;
                we(2, e.lens, 0, 32, Pe, 0, e.work, {
                    bits: 5
                }),
                Oe = !1
            }
            e.lencode = Ce,
            e.lenbits = 9,
            e.distcode = Pe,
            e.distbits = 5
        }
        function updatewindow(e, t, n, i) {
            var r, o = e.state;
            return null === o.window && (o.wsize = 1 << o.wbits,
            o.wnext = 0,
            o.whave = 0,
            o.window = new ye.Buf8(o.wsize)),
            i >= o.wsize ? (ye.arraySet(o.window, t, n - o.wsize, o.wsize, 0),
            o.wnext = 0,
            o.whave = o.wsize) : ((r = o.wsize - o.wnext) > i && (r = i),
            ye.arraySet(o.window, t, n - i, r, o.wnext),
            (i -= r) ? (ye.arraySet(o.window, t, n - i, i, 0),
            o.wnext = i,
            o.whave = o.wsize) : (o.wnext += r,
            o.wnext === o.wsize && (o.wnext = 0),
            o.whave < o.wsize && (o.whave += r))),
            0
        }
        le.inflateReset = inflateReset,
        le.inflateReset2 = inflateReset2,
        le.inflateResetKeep = inflateResetKeep,
        le.inflateInit = function inflateInit(e) {
            return inflateInit2(e, 15)
        }
        ,
        le.inflateInit2 = inflateInit2,
        le.inflate = function inflate$2(e, t) {
            var n, i, r, o, s, a, c, u, l, h, f, d, p, _, v, y, g, b, m, w, k, E, S, C, P = 0, O = new ye.Buf8(4), A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in)
                return ke;
            (n = e.state).mode === Ee && (n.mode = 13),
            s = e.next_out,
            r = e.output,
            c = e.avail_out,
            o = e.next_in,
            i = e.input,
            a = e.avail_in,
            u = n.hold,
            l = n.bits,
            h = a,
            f = c,
            E = 0;
            e: for (; ; )
                switch (n.mode) {
                case 1:
                    if (0 === n.wrap) {
                        n.mode = 13;
                        break
                    }
                    for (; l < 16; ) {
                        if (0 === a)
                            break e;
                        a--,
                        u += i[o++] << l,
                        l += 8
                    }
                    if (2 & n.wrap && 35615 === u) {
                        n.check = 0,
                        O[0] = 255 & u,
                        O[1] = u >>> 8 & 255,
                        n.check = be(n.check, O, 2, 0),
                        u = 0,
                        l = 0,
                        n.mode = 2;
                        break
                    }
                    if (n.flags = 0,
                    n.head && (n.head.done = !1),
                    !(1 & n.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
                        e.msg = "incorrect header check",
                        n.mode = Se;
                        break
                    }
                    if (8 != (15 & u)) {
                        e.msg = "unknown compression method",
                        n.mode = Se;
                        break
                    }
                    if (l -= 4,
                    k = 8 + (15 & (u >>>= 4)),
                    0 === n.wbits)
                        n.wbits = k;
                    else if (k > n.wbits) {
                        e.msg = "invalid window size",
                        n.mode = Se;
                        break
                    }
                    n.dmax = 1 << k,
                    e.adler = n.check = 1,
                    n.mode = 512 & u ? 10 : Ee,
                    u = 0,
                    l = 0;
                    break;
                case 2:
                    for (; l < 16; ) {
                        if (0 === a)
                            break e;
                        a--,
                        u += i[o++] << l,
                        l += 8
                    }
                    if (n.flags = u,
                    8 != (255 & n.flags)) {
                        e.msg = "unknown compression method",
                        n.mode = Se;
                        break
                    }
                    if (57344 & n.flags) {
                        e.msg = "unknown header flags set",
                        n.mode = Se;
                        break
                    }
                    n.head && (n.head.text = u >> 8 & 1),
                    512 & n.flags && (O[0] = 255 & u,
                    O[1] = u >>> 8 & 255,
                    n.check = be(n.check, O, 2, 0)),
                    u = 0,
                    l = 0,
                    n.mode = 3;
                case 3:
                    for (; l < 32; ) {
                        if (0 === a)
                            break e;
                        a--,
                        u += i[o++] << l,
                        l += 8
                    }
                    n.head && (n.head.time = u),
                    512 & n.flags && (O[0] = 255 & u,
                    O[1] = u >>> 8 & 255,
                    O[2] = u >>> 16 & 255,
                    O[3] = u >>> 24 & 255,
                    n.check = be(n.check, O, 4, 0)),
                    u = 0,
                    l = 0,
                    n.mode = 4;
                case 4:
                    for (; l < 16; ) {
                        if (0 === a)
                            break e;
                        a--,
                        u += i[o++] << l,
                        l += 8
                    }
                    n.head && (n.head.xflags = 255 & u,
                    n.head.os = u >> 8),
                    512 & n.flags && (O[0] = 255 & u,
                    O[1] = u >>> 8 & 255,
                    n.check = be(n.check, O, 2, 0)),
                    u = 0,
                    l = 0,
                    n.mode = 5;
                case 5:
                    if (1024 & n.flags) {
                        for (; l < 16; ) {
                            if (0 === a)
                                break e;
                            a--,
                            u += i[o++] << l,
                            l += 8
                        }
                        n.length = u,
                        n.head && (n.head.extra_len = u),
                        512 & n.flags && (O[0] = 255 & u,
                        O[1] = u >>> 8 & 255,
                        n.check = be(n.check, O, 2, 0)),
                        u = 0,
                        l = 0
                    } else
                        n.head && (n.head.extra = null);
                    n.mode = 6;
                case 6:
                    if (1024 & n.flags && ((d = n.length) > a && (d = a),
                    d && (n.head && (k = n.head.extra_len - n.length,
                    n.head.extra || (n.head.extra = new Array(n.head.extra_len)),
                    ye.arraySet(n.head.extra, i, o, d, k)),
                    512 & n.flags && (n.check = be(n.check, i, d, o)),
                    a -= d,
                    o += d,
                    n.length -= d),
                    n.length))
                        break e;
                    n.length = 0,
                    n.mode = 7;
                case 7:
                    if (2048 & n.flags) {
                        if (0 === a)
                            break e;
                        d = 0;
                        do {
                            k = i[o + d++],
                            n.head && k && n.length < 65536 && (n.head.name += String.fromCharCode(k))
                        } while (k && d < a);
                        if (512 & n.flags && (n.check = be(n.check, i, d, o)),
                        a -= d,
                        o += d,
                        k)
                            break e
                    } else
                        n.head && (n.head.name = null);
                    n.length = 0,
                    n.mode = 8;
                case 8:
                    if (4096 & n.flags) {
                        if (0 === a)
                            break e;
                        d = 0;
                        do {
                            k = i[o + d++],
                            n.head && k && n.length < 65536 && (n.head.comment += String.fromCharCode(k))
                        } while (k && d < a);
                        if (512 & n.flags && (n.check = be(n.check, i, d, o)),
                        a -= d,
                        o += d,
                        k)
                            break e
                    } else
                        n.head && (n.head.comment = null);
                    n.mode = 9;
                case 9:
                    if (512 & n.flags) {
                        for (; l < 16; ) {
                            if (0 === a)
                                break e;
                            a--,
                            u += i[o++] << l,
                            l += 8
                        }
                        if (u !== (65535 & n.check)) {
                            e.msg = "header crc mismatch",
                            n.mode = Se;
                            break
                        }
                        u = 0,
                        l = 0
                    }
                    n.head && (n.head.hcrc = n.flags >> 9 & 1,
                    n.head.done = !0),
                    e.adler = n.check = 0,
                    n.mode = Ee;
                    break;
                case 10:
                    for (; l < 32; ) {
                        if (0 === a)
                            break e;
                        a--,
                        u += i[o++] << l,
                        l += 8
                    }
                    e.adler = n.check = zswap32(u),
                    u = 0,
                    l = 0,
                    n.mode = 11;
                case 11:
                    if (0 === n.havedict)
                        return e.next_out = s,
                        e.avail_out = c,
                        e.next_in = o,
                        e.avail_in = a,
                        n.hold = u,
                        n.bits = l,
                        2;
                    e.adler = n.check = 1,
                    n.mode = Ee;
                case Ee:
                    if (5 === t || 6 === t)
                        break e;
                case 13:
                    if (n.last) {
                        u >>>= 7 & l,
                        l -= 7 & l,
                        n.mode = 27;
                        break
                    }
                    for (; l < 3; ) {
                        if (0 === a)
                            break e;
                        a--,
                        u += i[o++] << l,
                        l += 8
                    }
                    switch (n.last = 1 & u,
                    l -= 1,
                    3 & (u >>>= 1)) {
                    case 0:
                        n.mode = 14;
                        break;
                    case 1:
                        if (fixedtables(n),
                        n.mode = 20,
                        6 === t) {
                            u >>>= 2,
                            l -= 2;
                            break e
                        }
                        break;
                    case 2:
                        n.mode = 17;
                        break;
                    case 3:
                        e.msg = "invalid block type",
                        n.mode = Se
                    }
                    u >>>= 2,
                    l -= 2;
                    break;
                case 14:
                    for (u >>>= 7 & l,
                    l -= 7 & l; l < 32; ) {
                        if (0 === a)
                            break e;
                        a--,
                        u += i[o++] << l,
                        l += 8
                    }
                    if ((65535 & u) != (u >>> 16 ^ 65535)) {
                        e.msg = "invalid stored block lengths",
                        n.mode = Se;
                        break
                    }
                    if (n.length = 65535 & u,
                    u = 0,
                    l = 0,
                    n.mode = 15,
                    6 === t)
                        break e;
                case 15:
                    n.mode = 16;
                case 16:
                    if (d = n.length) {
                        if (d > a && (d = a),
                        d > c && (d = c),
                        0 === d)
                            break e;
                        ye.arraySet(r, i, o, d, s),
                        a -= d,
                        o += d,
                        c -= d,
                        s += d,
                        n.length -= d;
                        break
                    }
                    n.mode = Ee;
                    break;
                case 17:
                    for (; l < 14; ) {
                        if (0 === a)
                            break e;
                        a--,
                        u += i[o++] << l,
                        l += 8
                    }
                    if (n.nlen = 257 + (31 & u),
                    u >>>= 5,
                    l -= 5,
                    n.ndist = 1 + (31 & u),
                    u >>>= 5,
                    l -= 5,
                    n.ncode = 4 + (15 & u),
                    u >>>= 4,
                    l -= 4,
                    n.nlen > 286 || n.ndist > 30) {
                        e.msg = "too many length or distance symbols",
                        n.mode = Se;
                        break
                    }
                    n.have = 0,
                    n.mode = 18;
                case 18:
                    for (; n.have < n.ncode; ) {
                        for (; l < 3; ) {
                            if (0 === a)
                                break e;
                            a--,
                            u += i[o++] << l,
                            l += 8
                        }
                        n.lens[A[n.have++]] = 7 & u,
                        u >>>= 3,
                        l -= 3
                    }
                    for (; n.have < 19; )
                        n.lens[A[n.have++]] = 0;
                    if (n.lencode = n.lendyn,
                    n.lenbits = 7,
                    S = {
                        bits: n.lenbits
                    },
                    E = we(0, n.lens, 0, 19, n.lencode, 0, n.work, S),
                    n.lenbits = S.bits,
                    E) {
                        e.msg = "invalid code lengths set",
                        n.mode = Se;
                        break
                    }
                    n.have = 0,
                    n.mode = 19;
                case 19:
                    for (; n.have < n.nlen + n.ndist; ) {
                        for (; y = (P = n.lencode[u & (1 << n.lenbits) - 1]) >>> 16 & 255,
                        g = 65535 & P,
                        !((v = P >>> 24) <= l); ) {
                            if (0 === a)
                                break e;
                            a--,
                            u += i[o++] << l,
                            l += 8
                        }
                        if (g < 16)
                            u >>>= v,
                            l -= v,
                            n.lens[n.have++] = g;
                        else {
                            if (16 === g) {
                                for (C = v + 2; l < C; ) {
                                    if (0 === a)
                                        break e;
                                    a--,
                                    u += i[o++] << l,
                                    l += 8
                                }
                                if (u >>>= v,
                                l -= v,
                                0 === n.have) {
                                    e.msg = "invalid bit length repeat",
                                    n.mode = Se;
                                    break
                                }
                                k = n.lens[n.have - 1],
                                d = 3 + (3 & u),
                                u >>>= 2,
                                l -= 2
                            } else if (17 === g) {
                                for (C = v + 3; l < C; ) {
                                    if (0 === a)
                                        break e;
                                    a--,
                                    u += i[o++] << l,
                                    l += 8
                                }
                                l -= v,
                                k = 0,
                                d = 3 + (7 & (u >>>= v)),
                                u >>>= 3,
                                l -= 3
                            } else {
                                for (C = v + 7; l < C; ) {
                                    if (0 === a)
                                        break e;
                                    a--,
                                    u += i[o++] << l,
                                    l += 8
                                }
                                l -= v,
                                k = 0,
                                d = 11 + (127 & (u >>>= v)),
                                u >>>= 7,
                                l -= 7
                            }
                            if (n.have + d > n.nlen + n.ndist) {
                                e.msg = "invalid bit length repeat",
                                n.mode = Se;
                                break
                            }
                            for (; d--; )
                                n.lens[n.have++] = k
                        }
                    }
                    if (n.mode === Se)
                        break;
                    if (0 === n.lens[256]) {
                        e.msg = "invalid code -- missing end-of-block",
                        n.mode = Se;
                        break
                    }
                    if (n.lenbits = 9,
                    S = {
                        bits: n.lenbits
                    },
                    E = we(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, S),
                    n.lenbits = S.bits,
                    E) {
                        e.msg = "invalid literal/lengths set",
                        n.mode = Se;
                        break
                    }
                    if (n.distbits = 6,
                    n.distcode = n.distdyn,
                    S = {
                        bits: n.distbits
                    },
                    E = we(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, S),
                    n.distbits = S.bits,
                    E) {
                        e.msg = "invalid distances set",
                        n.mode = Se;
                        break
                    }
                    if (n.mode = 20,
                    6 === t)
                        break e;
                case 20:
                    n.mode = 21;
                case 21:
                    if (a >= 6 && c >= 258) {
                        e.next_out = s,
                        e.avail_out = c,
                        e.next_in = o,
                        e.avail_in = a,
                        n.hold = u,
                        n.bits = l,
                        me(e, f),
                        s = e.next_out,
                        r = e.output,
                        c = e.avail_out,
                        o = e.next_in,
                        i = e.input,
                        a = e.avail_in,
                        u = n.hold,
                        l = n.bits,
                        n.mode === Ee && (n.back = -1);
                        break
                    }
                    for (n.back = 0; y = (P = n.lencode[u & (1 << n.lenbits) - 1]) >>> 16 & 255,
                    g = 65535 & P,
                    !((v = P >>> 24) <= l); ) {
                        if (0 === a)
                            break e;
                        a--,
                        u += i[o++] << l,
                        l += 8
                    }
                    if (y && 0 == (240 & y)) {
                        for (b = v,
                        m = y,
                        w = g; y = (P = n.lencode[w + ((u & (1 << b + m) - 1) >> b)]) >>> 16 & 255,
                        g = 65535 & P,
                        !(b + (v = P >>> 24) <= l); ) {
                            if (0 === a)
                                break e;
                            a--,
                            u += i[o++] << l,
                            l += 8
                        }
                        u >>>= b,
                        l -= b,
                        n.back += b
                    }
                    if (u >>>= v,
                    l -= v,
                    n.back += v,
                    n.length = g,
                    0 === y) {
                        n.mode = 26;
                        break
                    }
                    if (32 & y) {
                        n.back = -1,
                        n.mode = Ee;
                        break
                    }
                    if (64 & y) {
                        e.msg = "invalid literal/length code",
                        n.mode = Se;
                        break
                    }
                    n.extra = 15 & y,
                    n.mode = 22;
                case 22:
                    if (n.extra) {
                        for (C = n.extra; l < C; ) {
                            if (0 === a)
                                break e;
                            a--,
                            u += i[o++] << l,
                            l += 8
                        }
                        n.length += u & (1 << n.extra) - 1,
                        u >>>= n.extra,
                        l -= n.extra,
                        n.back += n.extra
                    }
                    n.was = n.length,
                    n.mode = 23;
                case 23:
                    for (; y = (P = n.distcode[u & (1 << n.distbits) - 1]) >>> 16 & 255,
                    g = 65535 & P,
                    !((v = P >>> 24) <= l); ) {
                        if (0 === a)
                            break e;
                        a--,
                        u += i[o++] << l,
                        l += 8
                    }
                    if (0 == (240 & y)) {
                        for (b = v,
                        m = y,
                        w = g; y = (P = n.distcode[w + ((u & (1 << b + m) - 1) >> b)]) >>> 16 & 255,
                        g = 65535 & P,
                        !(b + (v = P >>> 24) <= l); ) {
                            if (0 === a)
                                break e;
                            a--,
                            u += i[o++] << l,
                            l += 8
                        }
                        u >>>= b,
                        l -= b,
                        n.back += b
                    }
                    if (u >>>= v,
                    l -= v,
                    n.back += v,
                    64 & y) {
                        e.msg = "invalid distance code",
                        n.mode = Se;
                        break
                    }
                    n.offset = g,
                    n.extra = 15 & y,
                    n.mode = 24;
                case 24:
                    if (n.extra) {
                        for (C = n.extra; l < C; ) {
                            if (0 === a)
                                break e;
                            a--,
                            u += i[o++] << l,
                            l += 8
                        }
                        n.offset += u & (1 << n.extra) - 1,
                        u >>>= n.extra,
                        l -= n.extra,
                        n.back += n.extra
                    }
                    if (n.offset > n.dmax) {
                        e.msg = "invalid distance too far back",
                        n.mode = Se;
                        break
                    }
                    n.mode = 25;
                case 25:
                    if (0 === c)
                        break e;
                    if (d = f - c,
                    n.offset > d) {
                        if ((d = n.offset - d) > n.whave && n.sane) {
                            e.msg = "invalid distance too far back",
                            n.mode = Se;
                            break
                        }
                        d > n.wnext ? (d -= n.wnext,
                        p = n.wsize - d) : p = n.wnext - d,
                        d > n.length && (d = n.length),
                        _ = n.window
                    } else
                        _ = r,
                        p = s - n.offset,
                        d = n.length;
                    d > c && (d = c),
                    c -= d,
                    n.length -= d;
                    do {
                        r[s++] = _[p++]
                    } while (--d);
                    0 === n.length && (n.mode = 21);
                    break;
                case 26:
                    if (0 === c)
                        break e;
                    r[s++] = n.length,
                    c--,
                    n.mode = 21;
                    break;
                case 27:
                    if (n.wrap) {
                        for (; l < 32; ) {
                            if (0 === a)
                                break e;
                            a--,
                            u |= i[o++] << l,
                            l += 8
                        }
                        if (f -= c,
                        e.total_out += f,
                        n.total += f,
                        f && (e.adler = n.check = n.flags ? be(n.check, r, f, s - f) : ge(n.check, r, f, s - f)),
                        f = c,
                        (n.flags ? u : zswap32(u)) !== n.check) {
                            e.msg = "incorrect data check",
                            n.mode = Se;
                            break
                        }
                        u = 0,
                        l = 0
                    }
                    n.mode = 28;
                case 28:
                    if (n.wrap && n.flags) {
                        for (; l < 32; ) {
                            if (0 === a)
                                break e;
                            a--,
                            u += i[o++] << l,
                            l += 8
                        }
                        if (u !== (4294967295 & n.total)) {
                            e.msg = "incorrect length check",
                            n.mode = Se;
                            break
                        }
                        u = 0,
                        l = 0
                    }
                    n.mode = 29;
                case 29:
                    E = 1;
                    break e;
                case Se:
                    E = -3;
                    break e;
                case 31:
                    return -4;
                default:
                    return ke
                }
            return e.next_out = s,
            e.avail_out = c,
            e.next_in = o,
            e.avail_in = a,
            n.hold = u,
            n.bits = l,
            (n.wsize || f !== e.avail_out && n.mode < Se && (n.mode < 27 || 4 !== t)) && updatewindow(e, e.output, e.next_out, f - e.avail_out),
            h -= e.avail_in,
            f -= e.avail_out,
            e.total_in += h,
            e.total_out += f,
            n.total += f,
            n.wrap && f && (e.adler = n.check = n.flags ? be(n.check, r, f, e.next_out - f) : ge(n.check, r, f, e.next_out - f)),
            e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === Ee ? 128 : 0) + (20 === n.mode || 15 === n.mode ? 256 : 0),
            (0 === h && 0 === f || 4 === t) && 0 === E && (E = -5),
            E
        }
        ,
        le.inflateEnd = function inflateEnd(e) {
            if (!e || !e.state)
                return ke;
            var t = e.state;
            return t.window && (t.window = null),
            e.state = null,
            0
        }
        ,
        le.inflateGetHeader = function inflateGetHeader(e, t) {
            var n;
            return e && e.state ? 0 == (2 & (n = e.state).wrap) ? ke : (n.head = t,
            t.done = !1,
            0) : ke
        }
        ,
        le.inflateSetDictionary = function inflateSetDictionary(e, t) {
            var n, i = t.length;
            return e && e.state ? 0 !== (n = e.state).wrap && 11 !== n.mode ? ke : 11 === n.mode && ge(1, t, i, 0) !== n.check ? -3 : updatewindow(e, t, i, i) ? (n.mode = 31,
            -4) : (n.havedict = 1,
            0) : ke
        }
        ,
        le.inflateInfo = "pako inflate (from Nodeca project)";
        var Ae = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
        };
        var Te = le
          , Re = h
          , je = G
          , xe = Ae
          , Ie = N
          , Ue = ne
          , De = function GZheader$1() {
            this.text = 0,
            this.time = 0,
            this.xflags = 0,
            this.os = 0,
            this.extra = null,
            this.extra_len = 0,
            this.name = "",
            this.comment = "",
            this.hcrc = 0,
            this.done = !1
        }
          , Be = Object.prototype.toString;
        function Inflate(e) {
            if (!(this instanceof Inflate))
                return new Inflate(e);
            this.options = Re.assign({
                chunkSize: 16384,
                windowBits: 0,
                to: ""
            }, e || {});
            var t = this.options;
            t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits,
            0 === t.windowBits && (t.windowBits = -15)),
            !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32),
            t.windowBits > 15 && t.windowBits < 48 && 0 == (15 & t.windowBits) && (t.windowBits |= 15),
            this.err = 0,
            this.msg = "",
            this.ended = !1,
            this.chunks = [],
            this.strm = new Ue,
            this.strm.avail_out = 0;
            var n = Te.inflateInit2(this.strm, t.windowBits);
            if (n !== xe.Z_OK)
                throw new Error(Ie[n]);
            if (this.header = new De,
            Te.inflateGetHeader(this.strm, this.header),
            t.dictionary && ("string" == typeof t.dictionary ? t.dictionary = je.string2buf(t.dictionary) : "[object ArrayBuffer]" === Be.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)),
            t.raw && (n = Te.inflateSetDictionary(this.strm, t.dictionary)) !== xe.Z_OK))
                throw new Error(Ie[n])
        }
        function inflate$1(e, t) {
            var n = new Inflate(t);
            if (n.push(e, !0),
            n.err)
                throw n.msg || Ie[n.err];
            return n.result
        }
        Inflate.prototype.push = function(e, t) {
            var n, i, r, o, s, a = this.strm, c = this.options.chunkSize, u = this.options.dictionary, l = !1;
            if (this.ended)
                return !1;
            i = t === ~~t ? t : !0 === t ? xe.Z_FINISH : xe.Z_NO_FLUSH,
            "string" == typeof e ? a.input = je.binstring2buf(e) : "[object ArrayBuffer]" === Be.call(e) ? a.input = new Uint8Array(e) : a.input = e,
            a.next_in = 0,
            a.avail_in = a.input.length;
            do {
                if (0 === a.avail_out && (a.output = new Re.Buf8(c),
                a.next_out = 0,
                a.avail_out = c),
                (n = Te.inflate(a, xe.Z_NO_FLUSH)) === xe.Z_NEED_DICT && u && (n = Te.inflateSetDictionary(this.strm, u)),
                n === xe.Z_BUF_ERROR && !0 === l && (n = xe.Z_OK,
                l = !1),
                n !== xe.Z_STREAM_END && n !== xe.Z_OK)
                    return this.onEnd(n),
                    this.ended = !0,
                    !1;
                a.next_out && (0 !== a.avail_out && n !== xe.Z_STREAM_END && (0 !== a.avail_in || i !== xe.Z_FINISH && i !== xe.Z_SYNC_FLUSH) || ("string" === this.options.to ? (r = je.utf8border(a.output, a.next_out),
                o = a.next_out - r,
                s = je.buf2string(a.output, r),
                a.next_out = o,
                a.avail_out = c - o,
                o && Re.arraySet(a.output, a.output, r, o, 0),
                this.onData(s)) : this.onData(Re.shrinkBuf(a.output, a.next_out)))),
                0 === a.avail_in && 0 === a.avail_out && (l = !0)
            } while ((a.avail_in > 0 || 0 === a.avail_out) && n !== xe.Z_STREAM_END);
            return n === xe.Z_STREAM_END && (i = xe.Z_FINISH),
            i === xe.Z_FINISH ? (n = Te.inflateEnd(this.strm),
            this.onEnd(n),
            this.ended = !0,
            n === xe.Z_OK) : i !== xe.Z_SYNC_FLUSH || (this.onEnd(xe.Z_OK),
            a.avail_out = 0,
            !0)
        }
        ,
        Inflate.prototype.onData = function(e) {
            this.chunks.push(e)
        }
        ,
        Inflate.prototype.onEnd = function(e) {
            e === xe.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = Re.flattenChunks(this.chunks)),
            this.chunks = [],
            this.err = e,
            this.msg = this.strm.msg
        }
        ,
        ue.Inflate = Inflate,
        ue.inflate = inflate$1,
        ue.inflateRaw = function inflateRaw(e, t) {
            return (t = t || {}).raw = !0,
            inflate$1(e, t)
        }
        ,
        ue.ungzip = inflate$1;
        var Me = {};
        (0,
        h.assign)(Me, f, ue, Ae);
        var Ne = Me;
        function ownKeys$1(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function newSet() {
            return new Set
        }
        function newSetFromArray(e) {
            return new Set(e)
        }
        function newArrayFromSet(e) {
            var t = [];
            return e && e.forEach((function(e) {
                return t.push(e)
            }
            )),
            t
        }
        function objectKeys(e) {
            return Object.keys(e)
        }
        function objectValues(e) {
            return Object.values(e)
        }
        function objectEntries(e) {
            return Object.entries(e)
        }
        function overrideOptions(e, t) {
            var n = function _objectSpread$1(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ownKeys$1(Object(n), !0).forEach((function(t) {
                        _defineProperty(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys$1(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, e);
            t && objectKeys(e).forEach((function(e) {
                void 0 !== t[e] && (n[e] = t[e])
            }
            ));
            return n
        }
        function stringStartsWith(e, t, n) {
            return String.prototype.startsWith.call(e, t, n)
        }
        function _setPrototypeOf(e, t) {
            return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            _setPrototypeOf(e, t)
        }
        function _isNativeReflectConstruct() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }
        function _construct(e, t, n) {
            return _construct = _isNativeReflectConstruct() ? Reflect.construct : function _construct(e, t, n) {
                var i = [null];
                i.push.apply(i, t);
                var r = new (Function.bind.apply(e, i));
                return n && _setPrototypeOf(r, n.prototype),
                r
            }
            ,
            _construct.apply(null, arguments)
        }
        function _toConsumableArray(e) {
            return function _arrayWithoutHoles(e) {
                if (Array.isArray(e))
                    return _arrayLikeToArray(e)
            }(e) || function _iterableToArray(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || _unsupportedIterableToArray(e) || function _nonIterableSpread() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var qe = function() {
            function Logger() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                _classCallCheck(this, Logger),
                _defineProperty(this, "enabled", void 0),
                _defineProperty(this, "prefix", void 0),
                this.enabled = e;
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                    n[i - 1] = arguments[i];
                this.prefix = n
            }
            return _createClass(Logger, [{
                key: "isEnabled",
                value: function isEnabled() {
                    return this.enabled
                }
            }, {
                key: "setEnabled",
                value: function setEnabled(e) {
                    this.enabled = e
                }
            }, {
                key: "log",
                value: function log() {
                    if (this.enabled)
                        try {
                            for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                                n[i] = arguments[i];
                            (e = console).log.apply(e, ["[PubSub]"].concat(_toConsumableArray(this.prefix), n))
                        } catch (r) {}
                }
            }, {
                key: "error",
                value: function error() {
                    if (this.enabled)
                        try {
                            for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                                n[i] = arguments[i];
                            (e = console).error.apply(e, ["[PubSub]"].concat(_toConsumableArray(this.prefix), n))
                        } catch (error) {}
                }
            }, {
                key: "create",
                value: function create(e) {
                    return _construct(Logger, [this.enabled].concat(_toConsumableArray(this.prefix), [e]))
                }
            }]),
            Logger
        }()
          , Le = function() {
            function PingPong(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new qe;
                _classCallCheck(this, PingPong),
                _defineProperty(this, "connection", void 0),
                _defineProperty(this, "logger", void 0),
                _defineProperty(this, "timeout", void 0),
                _defineProperty(this, "timeoutMs", void 0),
                this.connection = e,
                this.logger = t
            }
            return _createClass(PingPong, [{
                key: "start",
                value: function start(e, t) {
                    this.timeoutMs = e,
                    this.log("Started: interval:".concat(t, ", timeout:").concat(e)),
                    this.reset()
                }
            }, {
                key: "handle",
                value: function handle(e) {
                    this.reset(),
                    stringStartsWith(e, r.PING) && (this.log("Ping Pong"),
                    this.connection.send(r.PONG))
                }
            }, {
                key: "stop",
                value: function stop() {
                    this.clearTimeout()
                }
            }, {
                key: "reset",
                value: function reset() {
                    var e = this;
                    this.clearTimeout(),
                    this.timeout = setTimeout((function() {
                        e.log("Timeout"),
                        e.connection.onTimeout()
                    }
                    ), this.timeoutMs)
                }
            }, {
                key: "clearTimeout",
                value: function(e) {
                    function clearTimeout() {
                        return e.apply(this, arguments)
                    }
                    return clearTimeout.toString = function() {
                        return e.toString()
                    }
                    ,
                    clearTimeout
                }((function() {
                    this.timeout && (clearTimeout(this.timeout),
                    this.timeout = void 0)
                }
                ))
            }, {
                key: "log",
                value: function log() {
                    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    (e = this.logger).log.apply(e, ["[Ping/Pong]"].concat(n))
                }
            }]),
            PingPong
        }()
          , Fe = function() {
            function Connection(e, t, n, i, r) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new qe;
                _classCallCheck(this, Connection),
                _defineProperty(this, "subscriptions", void 0),
                _defineProperty(this, "socket", void 0),
                _defineProperty(this, "defaultOptions", void 0),
                _defineProperty(this, "logger", void 0),
                _defineProperty(this, "closedByError", void 0),
                _defineProperty(this, "alive", void 0),
                _defineProperty(this, "welcomeTimeout", void 0),
                _defineProperty(this, "welcomRequestTimeout", void 0),
                _defineProperty(this, "options", void 0),
                _defineProperty(this, "pingPong", void 0),
                _defineProperty(this, "welcomeReceived", void 0),
                _defineProperty(this, "sessionId", void 0),
                _defineProperty(this, "sessionOffset", void 0),
                _defineProperty(this, "sessionOptions", void 0),
                _defineProperty(this, "timeoutMs", void 0),
                _defineProperty(this, "intervalMs", void 0),
                this.subscriptions = e,
                this.socket = t,
                this.defaultOptions = n,
                this.logger = o,
                this.alive = !0,
                this.sessionId = i,
                this.sessionOffset = r,
                this.welcomeReceived = !1,
                this.options = n,
                this.setWelcomeTimeout(),
                this.log("Created: options:", this.options);
                var s = this.logger.create("[Connection(" + this.socket.id() + ")]");
                this.pingPong = new Le(this,s)
            }
            return _createClass(Connection, [{
                key: "getOptions",
                value: function getOptions() {
                    return this.options
                }
            }, {
                key: "getSessionId",
                value: function getSessionId() {
                    return this.sessionId
                }
            }, {
                key: "getSessionOffset",
                value: function getSessionOffset() {
                    return this.sessionOffset
                }
            }, {
                key: "getSessionOptions",
                value: function getSessionOptions() {
                    return this.sessionOptions
                }
            }, {
                key: "getTimeoutMs",
                value: function getTimeoutMs() {
                    return this.timeoutMs
                }
            }, {
                key: "getIntervalMs",
                value: function getIntervalMs() {
                    return this.intervalMs
                }
            }, {
                key: "send",
                value: function send(e) {
                    this.socket.send(e)
                }
            }, {
                key: "onTimeout",
                value: function onTimeout() {
                    this.log("Timeout"),
                    this.terminateByError(n.KEEPALIVE_TIMEOUT)
                }
            }, {
                key: "onPacket",
                value: function onPacket(e) {
                    try {
                        if (this.alive) {
                            if (stringStartsWith(e, r.OPEN)) {
                                var t = JSON.parse(e.substring(1));
                                return this.clearWelcomeTimeout(),
                                this.onConnectionOpen(t),
                                s.OK
                            }
                            if (!this.welcomeReceived)
                                return void this.terminateByError(n.WELCOME_EXPECTED);
                            if (this.pingPong.handle(e),
                            stringStartsWith(e, r.PING) && e.length > 1)
                                return _slicedToArray(JSON.parse(e.substring(1)), 1)[0];
                            if (stringStartsWith(e, r.MESSAGE)) {
                                var i = e.slice(1, 2)
                                  , a = JSON.parse(e.substring(2));
                                this.onSubscriptionMessage(i, a)
                            }
                            if (stringStartsWith(e, r.PRESENCE) && e.slice(1, 2) === o.REGISTERED) {
                                var c = _slicedToArray(JSON.parse(e.substring(2)), 3)
                                  , u = c[0]
                                  , l = c[1]
                                  , h = c[2];
                                this.setOffset(u) && this.subscriptions.onRegistered(l, h)
                            }
                        }
                    } catch (f) {
                        this.terminateByError(n.CORRUPTED_PACKET)
                    }
                }
            }, {
                key: "onClose",
                value: function onClose() {
                    this.alive && (this.terminateByError(n.CONNECTION_CLOSED),
                    this.log("Connection close"))
                }
            }, {
                key: "onError",
                value: function onError(e) {
                    this.alive && (this.terminateByError(e),
                    this.log("Connection error"))
                }
            }, {
                key: "subscribe",
                value: function subscribe(e, t) {
                    this.log("Subscribe: channel:".concat(e, ", position:").concat(t));
                    var n = r.MESSAGE + i.SUBSCRIBE;
                    this.alive && (t ? this.send("".concat(n, '["').concat(e, '", "').concat(t, '"]')) : this.send("".concat(n, '["').concat(e, '"]')))
                }
            }, {
                key: "unsubscribe",
                value: function unsubscribe(e) {
                    this.log("Unsubscribe: channel:".concat(e)),
                    this.send("".concat(r.MESSAGE).concat(i.UNSUBSCRIBE, '["').concat(e, '"]'))
                }
            }, {
                key: "register",
                value: function register() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.log("Register: capabilities:".concat(e, ", activities:"), t);
                    var n = r.PRESENCE + o.REGISTER;
                    if (this.alive) {
                        var i = JSON.stringify(e)
                          , s = JSON.stringify(t);
                        this.send("".concat(n, "[").concat(i, ",").concat(s, "]"))
                    }
                }
            }, {
                key: "close",
                value: function close(e, t) {
                    this.terminate(!1, e, t)
                }
            }, {
                key: "terminateByError",
                value: function terminateByError(e) {
                    this.terminate(this.welcomeReceived, function isErrorClosingSession(e) {
                        return e === n.WELCOME_EXPECTED || e === n.WELCOME_INCONSISTENT || e === n.CORRUPTED_OFFSET || e === n.CORRUPTED_PACKET
                    }(e), e)
                }
            }, {
                key: "terminate",
                value: function terminate(e, t, n) {
                    this.alive && (this.log("Closing..."),
                    this.alive = !1,
                    this.closedByError = n,
                    this.pingPong.stop(),
                    this.clearWelcomeTimeout(),
                    e && this.welcomeReceived && this.subscriptions.onDetach(),
                    this.socket && (t && this.send("1"),
                    this.socket.close()),
                    this.log("Closed"))
                }
            }, {
                key: "onConnectionOpen",
                value: function onConnectionOpen(e) {
                    var t = _slicedToArray(e, 4)
                      , i = t[0]
                      , r = t[1]
                      , o = t[2]
                      , s = t[3];
                    if (this.welcomeReceived) {
                        if (this.sessionId !== i)
                            return void this.terminateByError(n.WELCOME_INCONSISTENT);
                        this.handshake(i, r, o, s),
                        this.subscriptions.onUpdate(s)
                    } else
                        this.welcomeReceived = !0,
                        this.log("Connected"),
                        this.log("SessionId:", i),
                        this.sessionId !== i && (this.sessionId = i,
                        this.sessionOffset = 0),
                        this.handshake(i, r, o, s),
                        this.subscriptions.onAttach(this)
                }
            }, {
                key: "handshake",
                value: function handshake(e, t, n, i) {
                    this.updateSessionOptions(i),
                    this.restartPingPong(t, n) && this.send("0" + JSON.stringify([e, t, n]))
                }
            }, {
                key: "onSubscriptionMessage",
                value: function onSubscriptionMessage(e, t) {
                    var n = t[0]
                      , r = t[1]
                      , o = String(t[2]);
                    if (this.setOffset(n)) {
                        if (e === i.SUBSCRIBED && this.subscriptions.onSubscribed(r, o),
                        e === i.UNSUBSCRIBED) {
                            var s = Number(t[2]);
                            this.subscriptions.onUnsubscribed(r, s)
                        }
                        if (e === i.MESSAGE) {
                            var a = 1 !== t[4] ? t[3] : function decode(e) {
                                var t = l.exports.Base64.atob(e).split("").map((function(e) {
                                    return e.charCodeAt(0)
                                }
                                ))
                                  , n = new Uint8Array(t);
                                return JSON.parse(Ne.inflate(n, {
                                    to: "string"
                                }))
                            }(t[3]);
                            this.subscriptions.onMessage(r, o, a)
                        }
                        e === i.POSITION && this.subscriptions.onPosition(r, o)
                    }
                }
            }, {
                key: "setOffset",
                value: function setOffset(e) {
                    return void 0 === this.sessionOffset || e - this.sessionOffset != 1 ? (this.terminateByError(n.CORRUPTED_OFFSET),
                    !1) : (this.sendAck(e),
                    this.sessionOffset = e,
                    !0)
                }
            }, {
                key: "sendAck",
                value: function sendAck(e) {
                    this.log("Ack: offset:".concat(e)),
                    this.send("".concat(r.MESSAGE).concat(i.ACK, "[").concat(e, "]"))
                }
            }, {
                key: "setWelcomeTimeout",
                value: function setWelcomeTimeout() {
                    var e = this;
                    this.options.welcomeRequestDelayMs <= 0 ? this.send("".concat(r.OPEN)) : this.welcomRequestTimeout = setTimeout((function() {
                        e.welcomRequestTimeout = void 0,
                        e.alive && !e.welcomeReceived && e.send("".concat(r.OPEN))
                    }
                    ), this.options.welcomeRequestDelayMs),
                    this.welcomeTimeout = setTimeout((function() {
                        e.alive && !e.welcomeReceived && (e.log("Welcome Timeout"),
                        e.terminateByError(n.WELCOME_TIMEOUT))
                    }
                    ), this.options.welcomeMaxDelayMs)
                }
            }, {
                key: "clearWelcomeTimeout",
                value: function clearWelcomeTimeout() {
                    this.welcomRequestTimeout && (clearTimeout(this.welcomRequestTimeout),
                    this.welcomRequestTimeout = void 0),
                    this.welcomeTimeout && (clearTimeout(this.welcomeTimeout),
                    this.welcomeTimeout = void 0)
                }
            }, {
                key: "restartPingPong",
                value: function restartPingPong(e, t) {
                    var n = 1e3 * e
                      , i = 1e3 * t;
                    return (this.intervalMs !== n || this.timeoutMs !== i) && (this.intervalMs = 1e3 * e,
                    this.timeoutMs = 1e3 * t,
                    this.log("Ping Interval", e, "Seconds"),
                    this.log("Ping Timeout:", t, "Seconds"),
                    this.pingPong.start(this.timeoutMs, this.intervalMs),
                    !0)
                }
            }, {
                key: "updateSessionOptions",
                value: function updateSessionOptions(e) {
                    this.sessionOptions = e,
                    this.options = overrideOptions(this.defaultOptions, e)
                }
            }, {
                key: "log",
                value: function log() {
                    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    (e = this.logger).log.apply(e, ["[Connection(" + this.socket.id() + ")]"].concat(n))
                }
            }]),
            Connection
        }()
          , ze = function() {
            function ConnectionFactory(e, t, n) {
                _classCallCheck(this, ConnectionFactory),
                _defineProperty(this, "subscriptions", void 0),
                _defineProperty(this, "options", void 0),
                _defineProperty(this, "logger", void 0),
                this.subscriptions = e,
                this.options = t,
                this.logger = n
            }
            return _createClass(ConnectionFactory, [{
                key: "create",
                value: function create(e, t, n) {
                    return new Fe(this.subscriptions,e,this.options,t,n,this.logger)
                }
            }]),
            ConnectionFactory
        }()
          , He = function() {
            function SafeClientListener(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new qe;
                _classCallCheck(this, SafeClientListener),
                _defineProperty(this, "listener", void 0),
                _defineProperty(this, "errorHandler", void 0),
                _defineProperty(this, "logger", void 0),
                this.listener = e,
                this.errorHandler = t,
                this.logger = n
            }
            return _createClass(SafeClientListener, [{
                key: "onConnect",
                value: function onConnect(e) {
                    var t = this;
                    this.safe((function() {
                        t.listener.onConnect && t.listener.onConnect(e)
                    }
                    ), "Connected")
                }
            }, {
                key: "onAttach",
                value: function onAttach() {
                    var e = this;
                    this.safe((function() {
                        e.listener.onAttach && e.listener.onAttach()
                    }
                    ), "Attached")
                }
            }, {
                key: "onDetach",
                value: function onDetach() {
                    var e = this;
                    this.safe((function() {
                        e.listener.onDetach && e.listener.onDetach()
                    }
                    ), "Detached")
                }
            }, {
                key: "onFailure",
                value: function onFailure(e) {
                    var t = this;
                    this.safe((function() {
                        t.listener.onFailure && t.listener.onFailure(e)
                    }
                    ), "Failed", e)
                }
            }, {
                key: "safe",
                value: function safe(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        n[i - 1] = arguments[i];
                    this.log.apply(this, n);
                    try {
                        e()
                    } catch (err) {
                        this.error(err),
                        this.logError("Listener callback failure: ", err)
                    }
                }
            }, {
                key: "error",
                value: function error(e) {
                    try {
                        this.errorHandler && this.errorHandler.error(e)
                    } catch (e) {}
                }
            }, {
                key: "log",
                value: function log() {
                    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    (e = this.logger).log.apply(e, ["[Listener]"].concat(n))
                }
            }, {
                key: "logError",
                value: function logError() {
                    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    (e = this.logger).error.apply(e, ["[Listener]"].concat(n))
                }
            }]),
            SafeClientListener
        }()
          , Qe = function() {
            function SocketFactory(e, t) {
                _classCallCheck(this, SocketFactory),
                _defineProperty(this, "factory", void 0),
                _defineProperty(this, "logger", void 0),
                this.factory = e,
                this.logger = t || new qe
            }
            return _createClass(SocketFactory, [{
                key: "create",
                value: function create(e, t, n) {
                    var i = this
                      , r = !0
                      , o = this.factory(t);
                    o.onopen = function() {
                        r && (i.log(e, "Open"),
                        n.onOpen(e))
                    }
                    ,
                    o.onmessage = function(t) {
                        r && (i.log(e, "Received:", t.data),
                        n.onMessage(e, t.data))
                    }
                    ,
                    o.onclose = function(t) {
                        r && (r = !1,
                        i.log(e, "Closed:", t),
                        n.onClose(e, t.code))
                    }
                    ,
                    o.onerror = function(t) {
                        r && (r = !1,
                        i.log(e, "Failed:", t),
                        n.onError(e))
                    }
                    ;
                    var s = this;
                    return {
                        id: function id() {
                            return e
                        },
                        send: function send(t) {
                            if (r)
                                try {
                                    s.log(e, "Send:", t),
                                    o.send(t)
                                } catch (err) {
                                    s.log(e, "Send error", err),
                                    r = !1,
                                    s.closeSocket(e, o),
                                    n.onClose(e)
                                }
                        },
                        close: function close() {
                            r && (s.log(e, "Close"),
                            r = !1,
                            s.closeSocket(e, o),
                            n.onClose(e))
                        }
                    }
                }
            }, {
                key: "closeSocket",
                value: function closeSocket(e, t) {
                    try {
                        t.close()
                    } catch (err) {
                        this.log(e, "Close error (ignored)", err)
                    }
                }
            }, {
                key: "log",
                value: function log(e) {
                    for (var t, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                        i[r - 1] = arguments[r];
                    (t = this.logger).log.apply(t, ["[Socket(" + e + ")]"].concat(i))
                }
            }]),
            SocketFactory
        }();
        function ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
                    _defineProperty(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Ve = function() {
            function CategoriesAggregator() {
                _classCallCheck(this, CategoriesAggregator),
                _defineProperty(this, "capabilities", newSet()),
                _defineProperty(this, "activities", function newMap() {
                    return new Map
                }())
            }
            return _createClass(CategoriesAggregator, [{
                key: "add",
                value: function add(e) {
                    var t = this;
                    e && (e.capabilities && e.capabilities.forEach((function(e) {
                        return t.capabilities.add(e)
                    }
                    )),
                    e.activities && objectEntries(e.activities).forEach((function(e) {
                        var n = _slicedToArray(e, 2)
                          , i = n[0]
                          , r = n[1]
                          , o = t.getActivitySet(i);
                        r && r.forEach((function(e) {
                            return o.add(e)
                        }
                        ))
                    }
                    )))
                }
            }, {
                key: "get",
                value: function get() {
                    return {
                        capabilities: this.convertCapabilities(),
                        activities: this.convertActivities()
                    }
                }
            }, {
                key: "convertCapabilities",
                value: function convertCapabilities() {
                    if (0 !== this.capabilities.size)
                        return newArrayFromSet(this.capabilities)
                }
            }, {
                key: "convertActivities",
                value: function convertActivities() {
                    if (0 !== this.activities.size) {
                        var e = {};
                        return this.activities.forEach((function(t, n) {
                            t && (e[n] = newArrayFromSet(t))
                        }
                        )),
                        e
                    }
                }
            }, {
                key: "getActivitySet",
                value: function getActivitySet(e) {
                    var t = this.activities.get(e);
                    return void 0 === t && (t = newSet(),
                    this.activities.set(e, t)),
                    t
                }
            }]),
            CategoriesAggregator
        }()
          , We = function() {
            function SafeSubscriber(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new qe;
                _classCallCheck(this, SafeSubscriber),
                _defineProperty(this, "subscriberId", void 0),
                _defineProperty(this, "subscriber", void 0),
                _defineProperty(this, "errorHandler", void 0),
                _defineProperty(this, "logger", void 0),
                this.subscriberId = e,
                this.subscriber = t,
                this.errorHandler = n,
                this.logger = i
            }
            return _createClass(SafeSubscriber, [{
                key: "onAttach",
                value: function onAttach(e) {
                    var t = this;
                    this.safe((function() {
                        t.subscriber.onAttach && t.subscriber.onAttach(e)
                    }
                    ), "Attached: continuation:".concat(e))
                }
            }, {
                key: "onDetach",
                value: function onDetach() {
                    var e = this;
                    this.safe((function() {
                        e.subscriber.onDetach && e.subscriber.onDetach()
                    }
                    ), "Detached")
                }
            }, {
                key: "onMessage",
                value: function onMessage(e) {
                    var t = this;
                    this.safe((function() {
                        t.subscriber.onMessage && t.subscriber.onMessage(e)
                    }
                    ), "Message: ", e),
                    this.log("Message: ", e)
                }
            }, {
                key: "onComplete",
                value: function onComplete() {
                    var e = this;
                    this.safe((function() {
                        e.subscriber.onComplete && e.subscriber.onComplete()
                    }
                    ), "Completed")
                }
            }, {
                key: "onFailure",
                value: function onFailure(e) {
                    var t = this;
                    this.safe((function() {
                        t.subscriber.onFailure && t.subscriber.onFailure(e)
                    }
                    ), "Failed", e)
                }
            }, {
                key: "safe",
                value: function safe(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        n[i - 1] = arguments[i];
                    this.log.apply(this, n);
                    try {
                        e()
                    } catch (err) {
                        this.error(err),
                        this.logError("Subscriber callback failure: ", err)
                    }
                }
            }, {
                key: "error",
                value: function error(e) {
                    try {
                        this.errorHandler && this.errorHandler.error(e)
                    } catch (e) {}
                }
            }, {
                key: "log",
                value: function log() {
                    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    (e = this.logger).log.apply(e, ["[Subscriber(".concat(this.subscriberId, ")]")].concat(n))
                }
            }, {
                key: "logError",
                value: function logError() {
                    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    (e = this.logger).error.apply(e, ["[Subscriber(".concat(this.subscriberId, ")]")].concat(n))
                }
            }]),
            SafeSubscriber
        }()
          , Ze = function() {
            function Subscription(e, t, n) {
                _classCallCheck(this, Subscription),
                _defineProperty(this, "callbackErrorHandler", void 0),
                _defineProperty(this, "logger", void 0),
                _defineProperty(this, "attached", !1),
                _defineProperty(this, "position", void 0),
                _defineProperty(this, "subscribers", {}),
                this.callbackErrorHandler = t,
                this.logger = n ? n.create("[Subscription(".concat(e, ")]")) : new qe
            }
            return _createClass(Subscription, [{
                key: "addSubscriber",
                value: function addSubscriber(e, t, n) {
                    this.log("Added: subscriberId:".concat(e, ", categories:"), n);
                    var i = new We(e,t,this.callbackErrorHandler,this.logger);
                    this.subscribers[e] = {
                        subscriber: i,
                        categories: n
                    },
                    this.attached && i.onAttach(!1)
                }
            }, {
                key: "updateSubscriber",
                value: function updateSubscriber(e, t) {
                    this.log("Updated: subscriberId:".concat(e, ", categories:").concat(t)),
                    this.subscribers[e] && (this.subscribers[e].categories = t)
                }
            }, {
                key: "removeSubscriber",
                value: function removeSubscriber(e) {
                    this.log("Removed: subscriberId:".concat(e)),
                    delete this.subscribers[e]
                }
            }, {
                key: "setPosition",
                value: function setPosition(e) {
                    this.position = e
                }
            }, {
                key: "getPosition",
                value: function getPosition() {
                    return this.position
                }
            }, {
                key: "isEmpty",
                value: function isEmpty() {
                    return 0 === Object.keys(this.subscribers).length
                }
            }, {
                key: "isAttached",
                value: function isAttached() {
                    return this.attached
                }
            }, {
                key: "getCategories",
                value: function getCategories() {
                    var e = new Ve;
                    return objectValues(this.subscribers).forEach((function(t) {
                        e.add(t.categories)
                    }
                    )),
                    e.get()
                }
            }, {
                key: "onAttach",
                value: function onAttach(e) {
                    var t = !e || this.position === e;
                    this.attached = !0,
                    this.position = e || this.position,
                    objectValues(this.subscribers).forEach((function(e) {
                        e.subscriber.onAttach(t)
                    }
                    ))
                }
            }, {
                key: "onDetach",
                value: function onDetach() {
                    this.attached = !1,
                    objectValues(this.subscribers).forEach((function(e) {
                        e.subscriber.onDetach()
                    }
                    ))
                }
            }, {
                key: "onComplete",
                value: function onComplete() {
                    this.attached = !1,
                    objectValues(this.subscribers).forEach((function(e) {
                        e.subscriber.onComplete()
                    }
                    ))
                }
            }, {
                key: "onFailure",
                value: function onFailure(e) {
                    this.attached = !1,
                    objectValues(this.subscribers).forEach((function(t) {
                        t.subscriber.onFailure(e)
                    }
                    ))
                }
            }, {
                key: "onMessage",
                value: function onMessage(e, t) {
                    this.setPosition(e),
                    objectValues(this.subscribers).forEach((function(e) {
                        e.subscriber.onMessage(t)
                    }
                    ))
                }
            }, {
                key: "log",
                value: function log() {
                    var e;
                    (e = this.logger).log.apply(e, arguments)
                }
            }]),
            Subscription
        }()
          , Ke = function() {
            function Subscriptions(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []
                  , i = arguments.length > 3 ? arguments[3] : void 0
                  , r = arguments.length > 4 ? arguments[4] : void 0;
                _classCallCheck(this, Subscriptions),
                _defineProperty(this, "listener", void 0),
                _defineProperty(this, "defaultOptions", void 0),
                _defineProperty(this, "capabilities", void 0),
                _defineProperty(this, "callbackErrorHandler", void 0),
                _defineProperty(this, "alive", !0),
                _defineProperty(this, "connection", void 0),
                _defineProperty(this, "sessionId", void 0),
                _defineProperty(this, "subscriptions", {}),
                _defineProperty(this, "waitingSubscribes", {}),
                _defineProperty(this, "pendingSubscribes", {}),
                _defineProperty(this, "pendingUnsubscribes", {}),
                _defineProperty(this, "options", void 0),
                _defineProperty(this, "subscriberIdGenerator", 0),
                _defineProperty(this, "numberOfReconnections", 0),
                _defineProperty(this, "categories", {}),
                _defineProperty(this, "confirmedCategories", void 0),
                _defineProperty(this, "sentCategories", void 0),
                _defineProperty(this, "registerTimeout", void 0),
                _defineProperty(this, "logger", void 0),
                this.listener = e,
                this.defaultOptions = t,
                this.capabilities = n,
                this.callbackErrorHandler = i,
                this.confirmedCategories = {},
                this.sentCategories = {},
                this.options = t,
                this.logger = r ? r.create("[Subscriptions]") : new qe,
                this.log("Created: options:", this.options)
            }
            return _createClass(Subscriptions, [{
                key: "close",
                value: function close() {
                    this.log("Closed"),
                    this.alive = !1,
                    this.cancelRegisterTimeout()
                }
            }, {
                key: "isAttached",
                value: function isAttached() {
                    return void 0 !== this.connection
                }
            }, {
                key: "isAuthenticated",
                value: function isAuthenticated() {
                    return this.isAttached() && void 0 !== this.sessionId && stringStartsWith(this.sessionId, "A")
                }
            }, {
                key: "getOptions",
                value: function getOptions() {
                    return this.options
                }
            }, {
                key: "getSessionId",
                value: function getSessionId() {
                    return this.sessionId
                }
            }, {
                key: "getChannels",
                value: function getChannels() {
                    return Object.keys(this.subscriptions)
                }
            }, {
                key: "getSubscription",
                value: function getSubscription(e) {
                    return this.subscriptions[e]
                }
            }, {
                key: "getWaitingSubscribes",
                value: function getWaitingSubscribes() {
                    return Object.keys(this.waitingSubscribes)
                }
            }, {
                key: "getPendingSubscribes",
                value: function getPendingSubscribes() {
                    return Object.keys(this.pendingSubscribes)
                }
            }, {
                key: "getPendingUnsubscribes",
                value: function getPendingUnsubscribes() {
                    return Object.keys(this.pendingUnsubscribes)
                }
            }, {
                key: "getNumberOfReconnections",
                value: function getNumberOfReconnections() {
                    return this.numberOfReconnections
                }
            }, {
                key: "subscribe",
                value: function subscribe(e, t, n) {
                    var i = this
                      , r = (++this.subscriberIdGenerator).toString();
                    return this.log("Subscriber added: channel:".concat(e)),
                    this.addSubscriber(e, r, t, n),
                    {
                        close: function close() {
                            i.log("Subscriber removed: channel:".concat(e)),
                            i.removeSubscriber(e, r)
                        },
                        update: function update(t) {
                            i.updateSubscriber(e, r, t)
                        }
                    }
                }
            }, {
                key: "addCapabilities",
                value: function addCapabilities(e) {
                    var t = this
                      , n = (++this.subscriberIdGenerator).toString();
                    return this.log("Capabilities Added: id:".concat(e)),
                    this.categories[n] = {
                        capabilities: e
                    },
                    this.checkCategories(),
                    {
                        close: function close() {
                            t.log("Capabilities Removed: id:".concat(e)),
                            delete t.categories[n],
                            t.checkCategories()
                        }
                    }
                }
            }, {
                key: "addActivities",
                value: function addActivities(e) {
                    var t = this
                      , n = (++this.subscriberIdGenerator).toString();
                    return this.log("Activities Added: id:".concat(e)),
                    this.categories[n] = {
                        activities: e
                    },
                    this.checkCategories(),
                    {
                        close: function close() {
                            t.log("Activities Removed: id:".concat(e)),
                            delete t.categories[n],
                            t.checkCategories()
                        }
                    }
                }
            }, {
                key: "onAttach",
                value: function onAttach(e) {
                    if (this.alive) {
                        this.connection = e;
                        var t = this.connection.getSessionId();
                        this.log("Attached: sessionId:".concat(t)),
                        this.options = overrideOptions(this.defaultOptions, this.connection.getSessionOptions()),
                        void 0 === this.sessionId ? (this.sessionId = t,
                        this.listener.onConnect(),
                        this.checkCategories(),
                        this.attachToNewSession()) : (this.numberOfReconnections++,
                        this.listener.onAttach(),
                        this.sessionId === t ? (this.attachToExistentSession(),
                        this.categoriesEquals(this.confirmedCategories, this.sentCategories) || this.pushCategories()) : (this.sessionId = t,
                        this.attachToNewSession(),
                        this.pushCategories()))
                    }
                }
            }, {
                key: "onUpdate",
                value: function onUpdate(e) {
                    this.alive && (this.options = overrideOptions(this.defaultOptions, e))
                }
            }, {
                key: "onDetach",
                value: function onDetach() {
                    this.alive && (this.log("Detached:"),
                    this.listener.onDetach(),
                    this.connection = void 0,
                    this.getSubscriptions().forEach((function(e) {
                        return e.onDetach()
                    }
                    )))
                }
            }, {
                key: "onMessage",
                value: function onMessage(e, t, n) {
                    if (this.alive) {
                        this.log("Message: channel:".concat(e, ", position:").concat(t, ", message:"), n);
                        var i = this.subscriptions[e];
                        i && i.onMessage(t, n)
                    }
                }
            }, {
                key: "onPosition",
                value: function onPosition(e, t) {
                    if (this.alive) {
                        this.log("Position: channelPattern:".concat(e, ", position:").concat(t));
                        var n = e
                          , i = ""
                          , r = e.indexOf("$");
                        r > -1 && (n = e.substring(0, r),
                        i = e.substring(r + 1)),
                        objectEntries(this.subscriptions).forEach((function(e) {
                            var r = _slicedToArray(e, 2)
                              , o = r[0]
                              , s = r[1];
                            stringStartsWith(o, n) && function stringEndsWith(e, t, n) {
                                return String.prototype.endsWith.call(e, t, n)
                            }(o, i) && s.setPosition(t)
                        }
                        ))
                    }
                }
            }, {
                key: "onSubscribed",
                value: function onSubscribed(e, t) {
                    if (this.alive) {
                        this.log("Subscribed: channel:".concat(e, ", position:").concat(t));
                        var n = this.subscriptions[e];
                        n && (delete this.pendingSubscribes[e],
                        n.onAttach(t)),
                        this.pushkWaitingSubscribes()
                    }
                }
            }, {
                key: "onUnsubscribed",
                value: function onUnsubscribed(e, t) {
                    var i = this;
                    if (this.alive) {
                        this.log("Unsubscribed: channel:".concat(e, ", reason:").concat(t)),
                        delete this.pendingUnsubscribes[e];
                        var r = this.subscriptions[e];
                        if (r)
                            if (t >= 500)
                                r.onDetach(),
                                this.sendError(n.CHANNEL_FAILURE),
                                setTimeout((function() {
                                    i.sendSubscribe(e, r.getPosition())
                                }
                                ), this.options.subscribeRetryTimoutMs);
                            else if (t >= 400) {
                                var o = function createSubscriptionFailure(e, t, n) {
                                    switch (e) {
                                    case 401:
                                        return _objectSpread({
                                            code: e,
                                            message: "user not authenticated",
                                            channel: t
                                        }, n);
                                    case 403:
                                        return _objectSpread({
                                            code: e,
                                            message: "channel access forbidden",
                                            channel: t
                                        }, n);
                                    case 404:
                                        return _objectSpread({
                                            code: e,
                                            message: "channel not found",
                                            channel: t
                                        }, n);
                                    case 430:
                                        return _objectSpread({
                                            code: e,
                                            message: "too many open channels",
                                            channel: t
                                        }, n);
                                    default:
                                        return _objectSpread({
                                            code: e,
                                            message: "unknown problem",
                                            channel: t
                                        }, n)
                                    }
                                }(t, e, {
                                    sessionId: this.sessionId
                                });
                                r.onFailure(o),
                                this.removeSubscription(e)
                            } else
                                204 === t && (r.onComplete(),
                                this.removeSubscription(e))
                    }
                }
            }, {
                key: "onRegistered",
                value: function onRegistered(e, t) {
                    this.alive && (this.confirmedCategories = {
                        capabilities: e,
                        activities: t
                    },
                    this.log("Registered: categories:", this.confirmedCategories),
                    this.categoriesEquals(this.confirmedCategories, this.sentCategories) && this.cancelRegisterTimeout())
                }
            }, {
                key: "addSubscriber",
                value: function addSubscriber(e, t, n, i) {
                    this.connection || this.log("Connection is not ready yet"),
                    this.hasSubscription(e) || (this.createSubscription(e),
                    this.sendSubscribe(e)),
                    this.subscriptions[e].addSubscriber(t, n, i),
                    this.categoriesNonEmpty(i) && this.checkCategories()
                }
            }, {
                key: "updateSubscriber",
                value: function updateSubscriber(e, t, n) {
                    var i = this.subscriptions[e];
                    i && (i.updateSubscriber(t, n),
                    this.checkCategoriesNow())
                }
            }, {
                key: "removeSubscriber",
                value: function removeSubscriber(e, t) {
                    var n = this.subscriptions[e];
                    n && (n.removeSubscriber(t),
                    n.isEmpty() && (this.removeSubscription(e),
                    this.sendUnsubscribe(e),
                    this.pushkWaitingSubscribes(),
                    this.checkCategoriesNow()))
                }
            }, {
                key: "getCategories",
                value: function getCategories() {
                    var e = new Ve;
                    return e.add({
                        capabilities: this.capabilities
                    }),
                    objectValues(this.categories).forEach((function(t) {
                        return e.add(t)
                    }
                    )),
                    objectValues(this.subscriptions).forEach((function(t) {
                        e.add(t.getCategories())
                    }
                    )),
                    e.get()
                }
            }, {
                key: "attachToExistentSession",
                value: function attachToExistentSession() {
                    var e = this;
                    objectEntries(this.subscriptions).forEach((function(t) {
                        var n = _slicedToArray(t, 2)
                          , i = n[0]
                          , r = n[1];
                        e.pendingSubscribes[i] ? e.sendSubscribe(i, r.getPosition()) : r.onAttach()
                    }
                    ))
                }
            }, {
                key: "attachToNewSession",
                value: function attachToNewSession() {
                    var e = this;
                    this.waitingSubscribes = {},
                    this.pendingSubscribes = {},
                    this.pendingUnsubscribes = {},
                    objectEntries(this.subscriptions).forEach((function(t) {
                        var n = _slicedToArray(t, 2)
                          , i = n[0]
                          , r = n[1];
                        return e.sendSubscribe(i, r.getPosition())
                    }
                    ))
                }
            }, {
                key: "getSubscriptions",
                value: function getSubscriptions() {
                    return objectValues(this.subscriptions)
                }
            }, {
                key: "sendError",
                value: function sendError(e) {
                    this.connection && e !== n.CHANNEL_FAILURE && this.closeConnection(!1, e)
                }
            }, {
                key: "sendSubscribe",
                value: function sendSubscribe(e, t) {
                    var i = this
                      , r = Date.now();
                    !this.pendingSubscribes.hasOwnProperty(e) && Object.keys(this.pendingSubscribes).length >= this.options.maxPendingRequests ? this.waitingSubscribes[e] = r : (this.log("Subscribe: channel:".concat(e, ", position:").concat(t)),
                    delete this.waitingSubscribes[e],
                    this.pendingSubscribes[e] = r,
                    this.connection && (t ? this.connection.subscribe(e, t) : this.connection.subscribe(e),
                    setTimeout((function() {
                        i.alive && i.pendingSubscribes[e] === r && i.sendError(n.SUBSCRIBE_TIMEOUT)
                    }
                    ), this.options.responseMaxDelayMs)))
                }
            }, {
                key: "sendUnsubscribe",
                value: function sendUnsubscribe(e) {
                    var t = this;
                    this.log("Unsubscribe: channel:".concat(e));
                    var i = Date.now();
                    this.pendingUnsubscribes[e] = i,
                    this.connection && (this.connection.unsubscribe(e),
                    setTimeout((function() {
                        t.alive && t.pendingUnsubscribes[e] === i && (delete t.pendingUnsubscribes[e],
                        t.sendError(n.UNSUBSCRIBE_TIMEOUT))
                    }
                    ), this.options.responseMaxDelayMs))
                }
            }, {
                key: "sendRegister",
                value: function sendRegister(e) {
                    this.log("Register: categories:", e),
                    this.connection && (this.sentCategories = e,
                    this.connection.register(e.capabilities, e.activities),
                    this.startRegisterTimeout())
                }
            }, {
                key: "startRegisterTimeout",
                value: function startRegisterTimeout() {
                    var e = this;
                    this.cancelRegisterTimeout(),
                    this.registerTimeout = setTimeout((function() {
                        e.alive && !e.categoriesEquals(e.confirmedCategories, e.sentCategories) && e.sendError(n.REGISTER_TIMEOUT)
                    }
                    ), this.options.responseMaxDelayMs)
                }
            }, {
                key: "cancelRegisterTimeout",
                value: function cancelRegisterTimeout() {
                    this.registerTimeout && (clearTimeout(this.registerTimeout),
                    this.registerTimeout = void 0)
                }
            }, {
                key: "pushkWaitingSubscribes",
                value: function pushkWaitingSubscribes() {
                    if (Object.keys(this.waitingSubscribes).length > 0) {
                        var e = Object.keys(this.waitingSubscribes)[0];
                        this.sendSubscribe(e, this.subscriptions[e].getPosition())
                    }
                }
            }, {
                key: "hasSubscription",
                value: function hasSubscription(e) {
                    return void 0 !== this.subscriptions[e]
                }
            }, {
                key: "createSubscription",
                value: function createSubscription(e) {
                    delete this.pendingUnsubscribes[e],
                    this.subscriptions[e] = new Ze(e,this.callbackErrorHandler,this.logger)
                }
            }, {
                key: "removeSubscription",
                value: function removeSubscription(e) {
                    delete this.subscriptions[e],
                    delete this.waitingSubscribes[e],
                    delete this.pendingSubscribes[e],
                    this.checkCategoriesNow()
                }
            }, {
                key: "pushCategories",
                value: function pushCategories() {
                    this.sentCategories = void 0,
                    this.sendRegister(this.getCategories())
                }
            }, {
                key: "checkCategories",
                value: function checkCategories() {
                    var e = this;
                    this.options.registerDelayMs ? setTimeout((function() {
                        return e.checkCategoriesNow()
                    }
                    ), this.options.registerDelayMs) : this.checkCategoriesNow()
                }
            }, {
                key: "checkCategoriesNow",
                value: function checkCategoriesNow() {
                    var e = this.getCategories();
                    this.categoriesEquals(this.sentCategories, e) || this.sendRegister(e)
                }
            }, {
                key: "categoriesNonEmpty",
                value: function categoriesNonEmpty(e) {
                    return e && (e.capabilities && e.capabilities.length > 0 || e.activities && objectKeys(e.activities).length > 0)
                }
            }, {
                key: "categoriesEquals",
                value: function categoriesEquals(e, t) {
                    return this.capabilitiesEquals(e, t) && this.activitiesEquals(e, t)
                }
            }, {
                key: "capabilitiesEquals",
                value: function capabilitiesEquals(e, t) {
                    var n = e && e.capabilities ? e.capabilities : []
                      , i = t && t.capabilities ? t.capabilities : []
                      , r = newSetFromArray(n)
                      , o = newSetFromArray(i);
                    return this.setEquals(r, o)
                }
            }, {
                key: "activitiesEquals",
                value: function activitiesEquals(e, t) {
                    var n = this
                      , i = e && e.activities ? e.activities : {}
                      , r = t && t.activities ? t.activities : {}
                      , o = objectKeys(i)
                      , s = objectKeys(r);
                    if (o.length !== s.length)
                        return !1;
                    var a = !0
                      , c = newSetFromArray(s);
                    return objectEntries(i).forEach((function(e) {
                        var t = _slicedToArray(e, 2)
                          , r = t[0]
                          , o = t[1];
                        if (c.has(r) || (a = !1),
                        a) {
                            var s = newSetFromArray(o)
                              , u = newSetFromArray(i[r]);
                            n.setEquals(s, u) || (a = !1)
                        }
                    }
                    )),
                    a
                }
            }, {
                key: "setEquals",
                value: function setEquals(e, t) {
                    if (e.size !== t.size)
                        return !1;
                    var n = !0;
                    return e.forEach((function(e) {
                        t.has(e) || (n = !1)
                    }
                    )),
                    n
                }
            }, {
                key: "closeConnection",
                value: function closeConnection(e, t) {
                    this.connection && (this.connection.close(e, t),
                    this.connection = void 0)
                }
            }, {
                key: "log",
                value: function log() {
                    var e;
                    (e = this.logger).log.apply(e, arguments)
                }
            }]),
            Subscriptions
        }()
          , $e = {}
          , Ge = {}
          , Je = {}
          , Xe = {};
        Object.defineProperty(Xe, "__esModule", {
            value: !0
        }),
        Xe.assert = function assert(e, t) {
            if (!e)
                throw new Error(t ? "assertion failed: " + t : "assertion failed")
        }
        ,
        Xe.getGlobal = function getGlobal() {
            if ("undefined" != typeof self)
                return self;
            if ("undefined" != typeof window)
                return window;
            if (void 0 !== u)
                return u;
            var e;
            try {
                e = new Function("return this")()
            } catch (t) {}
            return e
        }
        ,
        function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var t = Xe
              , n = function() {
                function CallQueue() {
                    this.length = 0,
                    this._max = 1e3,
                    this._first = 0
                }
                return CallQueue.prototype.push = function(e, t) {
                    return this[this.length++] = e,
                    this[this.length++] = t,
                    this.length < this._max
                }
                ,
                CallQueue.prototype.flush = function() {
                    for (; this._first < this.length; ) {
                        var e = this[this._first]
                          , t = this[this._first + 1];
                        this[this._first] = this[this._first + 1] = void 0,
                        this._first += 2,
                        e(t)
                    }
                    this.length = 0,
                    this._first = 0
                }
                ,
                CallQueue.prototype.empty = function() {
                    return this._first === this.length
                }
                ,
                CallQueue
            }()
              , i = function() {
                function Ring(e) {
                    this._ring = [new n],
                    this._current = this._ring[0],
                    this._pool = e
                }
                return Ring.prototype.enqueue = function(e, t) {
                    this._current || (this._current = this._pool.pop(),
                    this._current || (this._current = new n),
                    this._ring.push(this._current)),
                    this._current.push(e, t) || (this._current = void 0)
                }
                ,
                Ring.prototype.flush = function() {
                    for (; this._ring[0].flush(),
                    1 !== this._ring.length; )
                        this._pool.push(this._ring.shift());
                    this._current = this._ring[0]
                }
                ,
                Ring.prototype.empty = function() {
                    return 1 === this._ring.length && this._ring[0].empty()
                }
                ,
                Ring
            }();
            function defaultScheduler(e) {
                "function" == typeof setImmediate ? setImmediate(e) : setTimeout(e, 0)
            }
            var r = function() {
                function Async() {
                    var e = this;
                    this._pool = [],
                    this._mainRing = new i(this._pool),
                    this._idleRing = new i(this._pool),
                    this._flushing = !1,
                    this._scheduled = !1,
                    this._scheduler = void 0,
                    this._flusher = function() {
                        return e._scheduledFlush()
                    }
                }
                return Async.prototype.setScheduler = function(e) {
                    t.assert(null == e || "function" == typeof e),
                    this._scheduler = e
                }
                ,
                Async.prototype.enqueue = function(e, t) {
                    this._flushing || this._scheduled || this._schedule(),
                    this._mainRing.enqueue(e, t)
                }
                ,
                Async.prototype.enqueueIdle = function(e, t) {
                    this._flushing || this._scheduled || this._schedule(),
                    this._idleRing.enqueue(e, t)
                }
                ,
                Async.prototype.flush = function() {
                    t.assert(!this._flushing, "cannot recursively flush"),
                    this._flushing = !0;
                    try {
                        for (; this._mainRing.flush(),
                        !this._idleRing.empty(); ) {
                            var e = this._mainRing;
                            this._mainRing = this._idleRing,
                            this._idleRing = e
                        }
                    } finally {
                        this._flushing = !1,
                        this._mainRing.empty() && this._idleRing.empty() || this._scheduled || this._schedule()
                    }
                }
                ,
                Async.prototype._schedule = function() {
                    t.assert(!this._scheduled),
                    (this._scheduler || defaultScheduler)(this._flusher),
                    this._scheduled = !0
                }
                ,
                Async.prototype._scheduledFlush = function() {
                    this._scheduled = !1,
                    this.flush()
                }
                ,
                Async
            }();
            e.Async = r,
            e.async = new r,
            e.default = e.async
        }(Je);
        var Ye, et = {}, tt = {}, nt = u && u.__extends || (Ye = function extendStatics(e, t) {
            return Ye = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ,
            Ye(e, t)
        }
        ,
        function(e, t) {
            function __() {
                this.constructor = e
            }
            Ye(e, t),
            e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype,
            new __)
        }
        );
        Object.defineProperty(tt, "__esModule", {
            value: !0
        });
        var it = function(e) {
            function BaseError(t, n) {
                var i = this.constructor
                  , r = e.call(this, n) || this
                  , o = !1;
                if (r.constructor !== i && (Object.setPrototypeOf && Object.setPrototypeOf(r, i.prototype),
                o = !0),
                "stack"in r || (o = !0),
                r.name = t,
                o)
                    if (Error.captureStackTrace)
                        Error.captureStackTrace(r, i);
                    else {
                        var s = new Error(n);
                        s.name = t;
                        try {
                            throw s
                        } catch (s) {
                            r.stack = s.stack || String(s)
                        }
                    }
                return r
            }
            return nt(BaseError, e),
            BaseError
        }(Error);
        tt.default = it;
        var rt = u && u.__extends || function() {
            var e = function extendStatics(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                function __() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (__.prototype = n.prototype,
                new __)
            }
        }();
        Object.defineProperty(et, "__esModule", {
            value: !0
        });
        var ot = Xe
          , st = function(e) {
            function BaseUnhandledRejection(t, n, i) {
                var r = e.call(this, t, n + ": " + i) || this;
                r.reason = i;
                var o = r.reason && "object" === _typeof(r.reason) && r.reason.stack;
                return "string" != typeof o && (o = String(r.reason)),
                r.stack = r.name + ": " + o,
                r
            }
            return rt(BaseUnhandledRejection, e),
            BaseUnhandledRejection
        }(tt.default);
        et.BaseUnhandledRejection = st;
        var at = function(e) {
            function UnhandledRejection(t, n) {
                var i = e.call(this, "UnhandledRejection", "unhandled rejection", t) || this;
                return i.trace = n,
                i
            }
            return rt(UnhandledRejection, e),
            UnhandledRejection
        }(st);
        et.UnhandledRejection = at;
        var ct = function(e) {
            function PossiblyUnhandledRejection(t) {
                var n = e.call(this, "PossiblyUnhandledRejection", "possibly unhandled rejection", t.reason()) || this;
                return n.promise = t,
                n
            }
            return rt(PossiblyUnhandledRejection, e),
            PossiblyUnhandledRejection
        }(st);
        function emitRejectionEvent(e, t, n) {
            var i = new PromiseRejectionEvent(e,{
                cancelable: !0,
                promise: !0,
                reason: t
            });
            Object.defineProperty(i, "promise", {
                value: n
            });
            var r = ot.getGlobal();
            return !(!r.dispatchEvent || r.dispatchEvent(i))
        }
        et.PossiblyUnhandledRejection = ct,
        et.defaultUnhandledRejectionHandler = function defaultUnhandledRejectionHandler(e, t) {
            throw new at(e,t)
        }
        ,
        et.defaultPossiblyUnhandledRejectionHandler = function defaultPossiblyUnhandledRejectionHandler(t) {
            var n = !0;
            if (void 0 !== e && "function" == typeof e.emit ? e.emit("unhandledRejection", t.reason(), t) && (n = !1) : "function" == typeof PromiseRejectionEvent && emitRejectionEvent("unhandledrejection", t.reason(), t) && (n = !1),
            n) {
                var i = new ct(t);
                console.warn(i.stack)
            }
        }
        ,
        et.defaultPossiblyUnhandledRejectionHandledHandler = function defaultPossiblyUnhandledRejectionHandledHandler(t) {
            void 0 !== e && "function" == typeof e.emit ? e.emit("rejectionHandled", t) : "function" == typeof PromiseRejectionEvent && emitRejectionEvent("rejectionhandled", t.reason(), t)
        }
        ;
        var ut = {}
          , lt = {};
        Object.defineProperty(lt, "__esModule", {
            value: !0
        });
        var ht = "function" == typeof Error.captureStackTrace
          , ft = function() {
            function Stack(e) {
                void 0 === e && (e = Stack),
                ht ? Error.captureStackTrace(this, e) : this.stack = "dummy\n<no trace>"
            }
            return Stack.prototype.inspect = function() {
                var e = this.stack.split("\n");
                return e.shift(),
                e.join("\n")
            }
            ,
            Stack
        }();
        lt.default = ft,
        Object.defineProperty(ut, "__esModule", {
            value: !0
        });
        var dt = lt
          , pt = function() {
            function Trace(e) {
                void 0 === e && (e = Trace),
                this.stack = new dt.default(e)
            }
            return Trace.prototype.setSource = function(e) {
                e.sources ? (this.sources = e.sources.concat(e.stack),
                this.sources.length > Trace.traceLimit && (this.sources = this.sources.slice(0, Trace.traceLimit))) : this.sources = [e.stack]
            }
            ,
            Trace.prototype.inspect = function() {
                var e = this.stack.inspect();
                if (this.sources)
                    for (var t = this.sources.length - 1; t >= 0; t--)
                        e += "\n  from previous:\n" + this.sources[t].inspect();
                return e
            }
            ,
            Trace.traceLimit = 10,
            Trace
        }();
        ut.default = pt,
        Object.defineProperty(Ge, "__esModule", {
            value: !0
        });
        var _t, vt, yt, gt = Je, bt = et, mt = ut, wt = Xe, kt = !1;
        function internalResolver(e, t) {}
        function noop() {}
        !function(e) {
            e[e.Pending = 0] = "Pending",
            e[e.Fulfilled = 1] = "Fulfilled",
            e[e.Rejected = 2] = "Rejected"
        }(vt || (vt = {})),
        function(e) {
            e[e.RejectionHandled = 1] = "RejectionHandled",
            e[e.UnhandledRejectionNotified = 2] = "UnhandledRejectionNotified"
        }(yt || (yt = {}));
        var Et = {
            error: void 0
        };
        var St, Ct = new mt.default, Pt = 0, Ot = function() {
            function Promise(e) {
                var t = this;
                if (this._id = Pt++,
                this._state = 0,
                this._result = void 0,
                this._handlers = void 0,
                this._flags = 0,
                this._trace = void 0,
                _t && _t(this, "construct"),
                kt && (this._trace = new mt.default(Promise),
                St && this._setSource(St)),
                e !== internalResolver) {
                    if ("function" != typeof e)
                        throw new TypeError("Promise resolver is not a function");
                    var n = !1;
                    try {
                        e((function(e) {
                            n || (n = !0,
                            t._resolve(e))
                        }
                        ), (function(e) {
                            n || (n = !0,
                            t._reject(e))
                        }
                        ))
                    } catch (i) {
                        n || (n = !0,
                        this._reject(i))
                    }
                }
            }
            return Promise.prototype.then = function(e, t) {
                if (_t && _t(this, "then(" + _typeof(e) + ", " + _typeof(t) + ")"),
                1 === this._state && "function" != typeof e || 2 === this._state && "function" != typeof t)
                    return this;
                var n = new (Object.getPrototypeOf(this).constructor)(internalResolver);
                return n._setSource(this),
                this._enqueue(e, t, n, void 0),
                n
            }
            ,
            Promise.prototype.done = function(e, t) {
                if (_t && _t(this, "done(" + _typeof(e) + ", " + _typeof(t) + ")"),
                1 !== this._state || "function" == typeof e) {
                    var n = Ct;
                    kt && (n = new mt.default,
                    this._trace && n.setSource(this._trace)),
                    this._enqueue(e, t, void 0, n)
                }
            }
            ,
            Promise.prototype.catch = function() {
                if (1 === arguments.length) {
                    var e = arguments[0];
                    return this.then(void 0, e)
                }
                var t = arguments[0]
                  , n = arguments[1];
                return this.then(void 0, (function(e) {
                    var i = !1;
                    if ("function" == typeof t)
                        i = t.prototype instanceof Error || t === Error ? e instanceof t : t(e);
                    else {
                        if (!Array.isArray(t))
                            throw new TypeError("invalid predicate to .catch(), got " + _typeof(t));
                        for (var r = 0, o = t; r < o.length; r++) {
                            if (e instanceof o[r]) {
                                i = !0;
                                break
                            }
                        }
                    }
                    return i ? n(e) : Promise.reject(e)
                }
                ))
            }
            ,
            Promise.prototype.finally = function(e) {
                var t = this
                  , n = function runner() {
                    return e(t)
                };
                return this.then(n, n).return(this)
            }
            ,
            Promise.prototype.isFulfilled = function() {
                return 1 === this._state
            }
            ,
            Promise.prototype.isRejected = function() {
                return 2 === this._state
            }
            ,
            Promise.prototype.isPending = function() {
                return 0 === this._state
            }
            ,
            Promise.prototype.value = function() {
                if (!this.isFulfilled())
                    throw new Error("Promise is not fulfilled");
                return this._result
            }
            ,
            Promise.prototype.reason = function() {
                if (!this.isRejected())
                    throw new Error("Promise is not rejected");
                return this._result
            }
            ,
            Promise.prototype.suppressUnhandledRejections = function() {
                this._setRejectionHandled()
            }
            ,
            Promise.prototype.inspect = function() {
                return this.toString()
            }
            ,
            Promise.prototype.toString = function() {
                var e;
                switch (this._state) {
                case 0:
                    e = "pending";
                    break;
                case 1:
                    e = "fulfilled";
                    break;
                case 2:
                    e = "rejected";
                    break;
                default:
                    e = "unknown"
                }
                return "[Promise " + this._id + ": " + e + "]"
            }
            ,
            Promise.prototype.delay = function(e) {
                return this.then((function(t) {
                    return new Promise((function(n) {
                        setTimeout((function() {
                            return n(t)
                        }
                        ), e)
                    }
                    ))
                }
                ))
            }
            ,
            Promise.prototype.return = function(e) {
                return void 0 === e ? this.then(noop) : this.then((function() {
                    return e
                }
                ))
            }
            ,
            Promise.prototype.throw = function(e) {
                return this.then((function() {
                    return Promise.reject(e)
                }
                ))
            }
            ,
            Promise.prototype._setSource = function(e) {
                this._trace && e._trace && this._trace.setSource(e._trace)
            }
            ,
            Promise.prototype._resolve = function(e) {
                if (wt.assert(0 === this._state),
                e)
                    if (this !== e) {
                        if (e instanceof Promise)
                            return e._setSource(this),
                            e._setRejectionHandled(),
                            void (0 === e._state ? this._followPromise(e) : 1 === e._state ? this._fulfill(e._result) : this._reject(e._result));
                        if ("object" === _typeof(e) || "function" == typeof e) {
                            var t = this._tryGetThen(e);
                            if (t === Et)
                                return void this._reject(Et.error);
                            if ("function" == typeof t)
                                return void this._followThenable(e, t)
                        }
                        this._fulfill(e)
                    } else
                        this._reject(new TypeError("cannot resolve Promise to self"));
                else
                    this._fulfill(e)
            }
            ,
            Promise.prototype._tryGetThen = function(e) {
                try {
                    return e.then
                } catch (t) {
                    return Et.error = t,
                    Et
                }
            }
            ,
            Promise.prototype._fulfill = function(e) {
                wt.assert(0 === this._state),
                _t && _t(this, "_fulfill(" + _typeof(e) + ")"),
                this._state = 1,
                this._result = e,
                this._flush()
            }
            ,
            Promise.prototype._reject = function(e) {
                if (wt.assert(0 === this._state),
                _t && _t(this, "_reject(" + e + ")"),
                this._state = 2,
                this._result = e,
                this._trace && this._result instanceof Error && !this._result.trace) {
                    var t = this._trace;
                    this._result.trace = t;
                    var n = this._result.stack;
                    n && Object.defineProperty(this._result, "stack", {
                        enumerable: !1,
                        get: function get() {
                            return n + "\n  from Promise at:\n" + t.inspect()
                        }
                    })
                }
                1 & this._flags || gt.default.enqueueIdle(Promise._unhandledRejectionChecker, this),
                this._flush()
            }
            ,
            Promise.prototype._setRejectionHandled = function() {
                !(1 & this._flags) && 2 & this._flags && gt.default.enqueue(Promise._onPossiblyUnhandledRejectionHandledHandler, this),
                this._flags |= 1,
                _t && _t(this, "rejectionHandled")
            }
            ,
            Promise.prototype._doCheckUnhandledRejection = function() {
                1 & this._flags || 2 & this._flags || (this._flags |= 2,
                gt.default.enqueue(Promise._onPossiblyUnhandledRejectionHandler, this))
            }
            ,
            Promise.prototype._followPromise = function(e) {
                wt.assert(0 === this._state),
                _t && _t(this, "_follow([Promise " + e._id + "])"),
                e._enqueue(void 0, void 0, this, void 0)
            }
            ,
            Promise.prototype._followThenable = function(e, t) {
                var n = this;
                wt.assert(0 === this._state),
                _t && _t(this, "_follow([Thenable])");
                var i = !1;
                try {
                    t.call(e, (function(e) {
                        i || (i = !0,
                        n._resolve(e))
                    }
                    ), (function(e) {
                        i || (i = !0,
                        n._reject(e))
                    }
                    ))
                } catch (r) {
                    i || (i = !0,
                    this._reject(r))
                }
            }
            ,
            Promise.prototype._enqueue = function(e, t, n, i) {
                var r = {
                    promise: this,
                    onFulfilled: e,
                    onRejected: t,
                    slave: n,
                    done: i
                };
                if (0 !== this._state)
                    gt.default.enqueue(Promise._unwrapper, r);
                else if (this._handlers) {
                    var o = this._handlers.length;
                    this._handlers[o] = r
                } else
                    this._handlers = [r];
                this._setRejectionHandled()
            }
            ,
            Promise.prototype._flush = function() {
                if (this._handlers) {
                    var e = 0
                      , t = this._handlers
                      , n = t.length;
                    for (this._handlers = void 0; e < n; )
                        gt.default.enqueue(Promise._unwrapper, t[e++])
                }
            }
            ,
            Promise.prototype._unwrap = function(e) {
                var t = 1 === this._state ? e.onFulfilled : e.onRejected;
                if (e.done) {
                    if (_t && _t(this, "_unwrap()"),
                    "function" != typeof t)
                        return void (2 === this._state && Promise._onUnhandledRejectionHandler(this._result, e.done));
                    wt.assert(!St),
                    St = this;
                    try {
                        var n = t(this._result);
                        if (n)
                            (n instanceof Promise ? n : Promise.resolve(n)).done();
                        St = void 0
                    } catch (r) {
                        St = void 0,
                        Promise._onUnhandledRejectionHandler(r, e.done)
                    }
                } else {
                    var i = e.slave;
                    if (_t && _t(this, "_unwrap(" + i._id + ")"),
                    "function" == typeof t) {
                        wt.assert(!St),
                        St = i;
                        try {
                            i._resolve(t(this._result))
                        } catch (r) {
                            i._reject(r)
                        }
                        St = void 0
                    } else
                        1 === this._state ? i._fulfill(this._result) : i._reject(this._result)
                }
            }
            ,
            Promise.resolve = function(e) {
                var t = new Promise(internalResolver);
                return t._resolve(e),
                t
            }
            ,
            Promise.reject = function(e) {
                var t = new Promise(internalResolver);
                return t._reject(e),
                t
            }
            ,
            Promise.all = function(e) {
                return new Promise((function(t, n) {
                    if (wt.assert(Array.isArray(e), "thenables must be an Array"),
                    0 !== e.length)
                        for (var i = new Array(e.length), r = e.length, o = 0; o < e.length; o++)
                            follow(e[o], o);
                    else
                        t([]);
                    function follow(e, o) {
                        (e instanceof Promise ? e : Promise.resolve(e)).done((function(e) {
                            i[o] = e,
                            0 === --r && t(i)
                        }
                        ), (function(e) {
                            return n(e)
                        }
                        ))
                    }
                }
                ))
            }
            ,
            Promise.race = function(e) {
                return new Promise((function(t, n) {
                    wt.assert(Array.isArray(e), "thenables must be an Array");
                    for (var i = 0, r = e; i < r.length; i++) {
                        var o = r[i]
                          , s = o instanceof Promise ? o : Promise.resolve(o);
                        Promise.resolve(s).done(t, n)
                    }
                }
                ))
            }
            ,
            Promise.defer = function() {
                var e, t;
                return {
                    promise: new Promise((function(n, i) {
                        e = n,
                        t = i
                    }
                    )),
                    reject: t,
                    resolve: e
                }
            }
            ,
            Promise.delay = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                if (void 0 === arguments[1]) {
                    var n = arguments[0];
                    return new Promise((function(e) {
                        setTimeout(e, n)
                    }
                    ))
                }
                return Promise.resolve(arguments[0]).delay(arguments[1])
            }
            ,
            Promise.onUnhandledRejection = function(e) {
                if (!0 === e)
                    Promise._onUnhandledRejectionHandler = bt.defaultUnhandledRejectionHandler;
                else if (!1 === e)
                    Promise._onUnhandledRejectionHandler = noop;
                else {
                    if ("function" != typeof e)
                        throw new TypeError("invalid handler: boolean or function expected");
                    Promise._onUnhandledRejectionHandler = e
                }
            }
            ,
            Promise.onPossiblyUnhandledRejection = function(e) {
                if (!0 === e)
                    Promise._onPossiblyUnhandledRejectionHandler = bt.defaultPossiblyUnhandledRejectionHandler;
                else if (!1 === e)
                    Promise._onPossiblyUnhandledRejectionHandler = noop;
                else {
                    if ("function" != typeof e)
                        throw new TypeError("invalid handler: boolean or function expected");
                    Promise._onPossiblyUnhandledRejectionHandler = e
                }
            }
            ,
            Promise.onPossiblyUnhandledRejectionHandled = function(e) {
                if (!0 === e)
                    Promise._onPossiblyUnhandledRejectionHandledHandler = bt.defaultPossiblyUnhandledRejectionHandledHandler;
                else if (!1 === e)
                    Promise._onPossiblyUnhandledRejectionHandledHandler = noop;
                else {
                    if ("function" != typeof e)
                        throw new TypeError("invalid handler: boolean or function expected");
                    Promise._onPossiblyUnhandledRejectionHandledHandler = e
                }
            }
            ,
            Promise.setLongTraces = function(e) {
                kt = e
            }
            ,
            Promise.setTracer = function(e) {
                _t = "function" == typeof e ? e : void 0
            }
            ,
            Promise.flush = function() {
                gt.default.flush()
            }
            ,
            Promise._unwrapper = function(e) {
                e.promise._unwrap(e)
            }
            ,
            Promise._unhandledRejectionChecker = function(e) {
                e._doCheckUnhandledRejection()
            }
            ,
            Promise
        }();
        Ge.Promise = Ot,
        Ot.onUnhandledRejection(!0),
        Ot.onPossiblyUnhandledRejection(!0),
        Ot.onPossiblyUnhandledRejectionHandled(!0),
        Ge.default = Ot;
        var At = {};
        Object.defineProperty(At, "__esModule", {
            value: !0
        });
        var Tt = Ge
          , Rt = Xe;
        At.default = function polyfill(e) {
            void 0 === e && (e = !1);
            var t = Rt.getGlobal();
            return !!t && (e || "function" != typeof t.Promise ? (t.Promise = Tt.Promise,
            !0) : t.Promise instanceof Tt.Promise)
        }
        ,
        Object.defineProperty($e, "__esModule", {
            value: !0
        });
        var jt = Ge
          , xt = $e.default = jt.default;
        $e.Promise = jt.Promise;
        var It = ut;
        $e.Trace = It.default;
        var Ut = et;
        $e.UnhandledRejection = Ut.UnhandledRejection,
        $e.PossiblyUnhandledRejection = Ut.PossiblyUnhandledRejection;
        var Dt = et;
        $e.UnhandledRejectionError = Dt.UnhandledRejection;
        var Bt = At;
        $e.polyfill = Bt.default;
        var Mt = tt;
        $e.BaseError = Mt.default;
        var Nt = function() {
            function Timer() {
                _classCallCheck(this, Timer)
            }
            return _createClass(Timer, [{
                key: "schedule",
                value: function schedule(e) {
                    return new xt((function(t) {
                        setTimeout(t, e)
                    }
                    ))
                }
            }]),
            Timer
        }()
          , qt = {}
          , Lt = {};
        Object.defineProperty(Lt, "__esModule", {
            value: !0
        }),
        Lt.BaseEvent = void 0;
        var Ft = function() {
            function BaseEvent() {}
            return BaseEvent.prototype.attach = function(e, t) {
                return this._attach(e, t, !1)
            }
            ,
            BaseEvent.prototype.once = function(e, t) {
                return this._attach(e, t, !0)
            }
            ,
            BaseEvent.prototype._attach = function(e, t, n) {
                var i, r, o, s, a = this;
                if ("function" == typeof e)
                    r = e,
                    s = function result() {
                        return a.detach(r)
                    }
                    ;
                else if (t || "function" != typeof e.post) {
                    if ("object" !== _typeof(e) || void 0 === e)
                        throw new Error("Expect a function or object as first argument");
                    if ("function" != typeof t)
                        throw new Error("Expect a function as second argument");
                    i = e,
                    r = t,
                    s = function result() {
                        return a.detach(i, r)
                    }
                } else
                    o = e,
                    s = function result() {
                        return a.detach(o)
                    }
                    ;
                return this._listeners ? this._listeners = this._listeners.slice() : this._listeners = [],
                this._listeners.push({
                    deleted: !1,
                    boundTo: i,
                    handler: r,
                    event: o,
                    once: n
                }),
                s
            }
            ,
            BaseEvent.prototype.detach = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                this._detach.apply(this, e)
            }
            ,
            BaseEvent.prototype._detach = function() {
                for (var e, t, n, i = [], r = 0; r < arguments.length; r++)
                    i[r] = arguments[r];
                this._listeners && 0 !== this._listeners.length && (i.length >= 1 && ("function" == typeof i[0] ? t = i[0] : 1 === i.length && "function" == typeof i[0].post ? n = i[0] : e = i[0]),
                i.length >= 2 && (t = i[1]),
                this._listeners = this._listeners.filter((function(i) {
                    return void 0 !== t && i.handler !== t || void 0 !== n && i.event !== n || void 0 !== e && i.boundTo !== e || (i.deleted = !0,
                    !1)
                }
                )),
                0 === this._listeners.length && delete this._listeners)
            }
            ,
            BaseEvent.prototype.post = function(e) {
                throw new Error("abstract")
            }
            ,
            BaseEvent.prototype.listenerCount = function() {
                return this._listeners ? this._listeners.length : 0
            }
            ,
            BaseEvent.prototype._call = function(e, t) {
                this._listeners && (e.deleted || (e.once && (e.deleted = !0,
                this._listeners = this._listeners.filter((function(t) {
                    return t !== e
                }
                )),
                0 === this._listeners.length && delete this._listeners),
                e.event ? e.event.post.apply(e.event, t) : e.handler && e.handler.apply("object" === _typeof(e.boundTo) ? e.boundTo : this, t)))
            }
            ,
            BaseEvent
        }();
        Lt.BaseEvent = Ft;
        var zt = {}
          , Ht = u && u.__extends || function() {
            var e = function extendStatics(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                function __() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (__.prototype = n.prototype,
                new __)
            }
        }();
        Object.defineProperty(zt, "__esModule", {
            value: !0
        }),
        zt.ErrorSyncEvent = zt.VoidSyncEvent = zt.SyncEvent = void 0;
        var Qt = function(e) {
            function SyncEvent() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._recursion = 0,
                t
            }
            return Ht(SyncEvent, e),
            Object.defineProperty(SyncEvent.prototype, "evtListenersChanged", {
                get: function get() {
                    return this._listenersChanged || (this._listenersChanged = new Vt),
                    this._listenersChanged
                },
                enumerable: !1,
                configurable: !0
            }),
            SyncEvent.prototype.post = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                if (this._listeners && 0 !== this._listeners.length) {
                    if (this._recursion++,
                    "number" == typeof SyncEvent.MAX_RECURSION_DEPTH && Number.isInteger(SyncEvent.MAX_RECURSION_DEPTH) && SyncEvent.MAX_RECURSION_DEPTH > 0 && this._recursion > SyncEvent.MAX_RECURSION_DEPTH)
                        throw new Error("event fired recursively");
                    for (var n = this._listeners, i = 0; i < n.length; ++i) {
                        var r = n[i];
                        this._call(r, e)
                    }
                    this._recursion--
                }
            }
            ,
            SyncEvent.prototype._attach = function(t, n, i) {
                var r, o, s, a, c = null !== (o = null === (r = this._listeners) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0, u = e.prototype._attach.call(this, t, n, i);
                return this.evtListenersChanged && c !== (null !== (a = null === (s = this._listeners) || void 0 === s ? void 0 : s.length) && void 0 !== a ? a : 0) && this.evtListenersChanged.post(),
                u
            }
            ,
            SyncEvent.prototype._detach = function() {
                for (var t, n, i, r, o = [], s = 0; s < arguments.length; s++)
                    o[s] = arguments[s];
                var a = null !== (n = null === (t = this._listeners) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0
                  , c = e.prototype._detach.apply(this, o);
                return this.evtListenersChanged && a !== (null !== (r = null === (i = this._listeners) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0) && this.evtListenersChanged.post(),
                c
            }
            ,
            SyncEvent.MAX_RECURSION_DEPTH = 10,
            SyncEvent
        }(Lt.BaseEvent);
        zt.SyncEvent = Qt;
        var Vt = function(e) {
            function VoidSyncEvent() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Ht(VoidSyncEvent, e),
            VoidSyncEvent.prototype.post = function() {
                e.prototype.post.call(this, void 0)
            }
            ,
            VoidSyncEvent
        }(Qt);
        zt.VoidSyncEvent = Vt;
        var Wt = function(e) {
            function ErrorSyncEvent() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Ht(ErrorSyncEvent, e),
            ErrorSyncEvent.prototype.post = function(t) {
                if (0 === this.listenerCount())
                    throw new Error("error event posted while no listeners attached. Error: " + t.message);
                e.prototype.post.call(this, t)
            }
            ,
            ErrorSyncEvent
        }(Qt);
        zt.ErrorSyncEvent = Wt;
        var Zt = {}
          , Kt = {};
        Object.defineProperty(Kt, "__esModule", {
            value: !0
        });
        var $t = zt
          , Gt = function() {
            function EventQueue() {
                this.evtFilled = new $t.SyncEvent,
                this.evtDrained = new $t.SyncEvent,
                this._queue = [],
                this._flushing = !1
            }
            return EventQueue.global = function() {
                return EventQueue._instance || EventQueue.resetGlobal(),
                EventQueue._instance
            }
            ,
            EventQueue.resetGlobal = function() {
                EventQueue._instance = new EventQueue
            }
            ,
            EventQueue.prototype.empty = function() {
                return 0 === this._queue.length
            }
            ,
            EventQueue.prototype.add = function(e) {
                this._queue.push(e),
                1 !== this._queue.length || this._flushing || this.evtFilled.post(this)
            }
            ,
            EventQueue.prototype.flushOnce = function() {
                var e = 0 === this._queue.length
                  , t = this._flushing;
                this._flushing = !0;
                try {
                    var n = this._queue;
                    this._queue = [];
                    for (var i = 0; i < n.length; ++i)
                        n[i]()
                } finally {
                    this._flushing = t,
                    e || t || 0 !== this._queue.length || this.evtDrained.post(this)
                }
            }
            ,
            EventQueue.prototype.flush = function(e) {
                void 0 === e && (e = 10);
                var t = 0 === this._queue.length
                  , n = this._flushing;
                this._flushing = !0;
                try {
                    for (var i = 0; this._queue.length > 0; ) {
                        if ("number" == typeof e && i >= e)
                            throw this._queue = [],
                            new Error("unable to flush the queue due to recursively added event. Clearing queue now");
                        this.flushOnce(),
                        ++i
                    }
                } finally {
                    this._flushing = n,
                    t || n || 0 !== this._queue.length || this.evtDrained.post(this)
                }
            }
            ,
            EventQueue
        }();
        Kt.default = Gt;
        var Jt = u && u.__extends || function() {
            var e = function extendStatics(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                function __() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (__.prototype = n.prototype,
                new __)
            }
        }();
        Object.defineProperty(Zt, "__esModule", {
            value: !0
        }),
        Zt.ErrorQueuedEvent = Zt.VoidQueuedEvent = Zt.QueuedEvent = void 0;
        var Xt = Kt
          , Yt = zt
          , en = function(e) {
            function QueuedEvent(t) {
                void 0 === t && (t = {});
                var n = e.call(this) || this;
                return n._queued = !1,
                n.options = t,
                "boolean" == typeof t.condensed ? n._condensed = t.condensed : n._condensed = !1,
                "object" === _typeof(t.queue) && null !== t.queue && (n._queue = t.queue),
                n
            }
            return Jt(QueuedEvent, e),
            Object.defineProperty(QueuedEvent.prototype, "evtListenersChanged", {
                get: function get() {
                    return this._listenersChanged || (this._listenersChanged = new Yt.VoidSyncEvent),
                    this._listenersChanged
                },
                enumerable: !1,
                configurable: !0
            }),
            QueuedEvent.prototype.post = function() {
                for (var e = this, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                if (this._listeners && 0 !== this._listeners.length) {
                    var i = this._queue ? this._queue : Xt.default.global();
                    if (this._condensed) {
                        if (this._queuedData = t,
                        this._queuedListeners = this._listeners,
                        this._queued)
                            return;
                        this._queued = !0,
                        i.add((function() {
                            e._queued = !1;
                            for (var t = e._queuedData, n = e._queuedListeners, i = 0; i < n.length; ++i) {
                                var r = n[i];
                                e._call(r, t)
                            }
                        }
                        ))
                    } else {
                        var r = this._listeners;
                        i.add((function() {
                            for (var n = 0; n < r.length; ++n) {
                                var i = r[n];
                                e._call(i, t)
                            }
                        }
                        ))
                    }
                }
            }
            ,
            QueuedEvent.prototype._attach = function(t, n, i) {
                var r, o, s, a, c = null !== (o = null === (r = this._listeners) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0, u = e.prototype._attach.call(this, t, n, i);
                return this.evtListenersChanged && c !== (null !== (a = null === (s = this._listeners) || void 0 === s ? void 0 : s.length) && void 0 !== a ? a : 0) && this.evtListenersChanged.post(),
                u
            }
            ,
            QueuedEvent.prototype._detach = function() {
                for (var t, n, i, r, o = [], s = 0; s < arguments.length; s++)
                    o[s] = arguments[s];
                var a = null !== (n = null === (t = this._listeners) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0
                  , c = e.prototype._detach.apply(this, o);
                return this.evtListenersChanged && a !== (null !== (r = null === (i = this._listeners) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0) && this.evtListenersChanged.post(),
                c
            }
            ,
            QueuedEvent
        }(Lt.BaseEvent);
        Zt.QueuedEvent = en;
        var tn = function(e) {
            function VoidQueuedEvent() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Jt(VoidQueuedEvent, e),
            VoidQueuedEvent.prototype.post = function() {
                e.prototype.post.call(this, void 0)
            }
            ,
            VoidQueuedEvent
        }(en);
        Zt.VoidQueuedEvent = tn;
        var nn = function(e) {
            function ErrorQueuedEvent() {
                return null !== e && e.apply(this, arguments) || this
            }
            return Jt(ErrorQueuedEvent, e),
            ErrorQueuedEvent.prototype.post = function(t) {
                if (!this._listeners || 0 === this._listeners.length)
                    throw new Error("error event posted while no listeners attached. Error: " + t.message);
                e.prototype.post.call(this, t)
            }
            ,
            ErrorQueuedEvent
        }(en);
        Zt.ErrorQueuedEvent = nn;
        var rn = {}
          , on = u && u.__extends || function() {
            var e = function extendStatics(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                function __() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (__.prototype = n.prototype,
                new __)
            }
        }();
        Object.defineProperty(rn, "__esModule", {
            value: !0
        }),
        rn.ErrorAsyncEvent = rn.VoidAsyncEvent = rn.AsyncEvent = void 0;
        var sn = zt
          , an = function(e) {
            function AsyncEvent(t) {
                void 0 === t && (t = {});
                var n = e.call(this) || this;
                return n._queued = !1,
                n.options = t,
                "boolean" == typeof t.condensed ? n._condensed = t.condensed : n._condensed = !1,
                n
            }
            return on(AsyncEvent, e),
            Object.defineProperty(AsyncEvent.prototype, "evtListenersChanged", {
                get: function get() {
                    return this._listenersChanged || (this._listenersChanged = new sn.VoidSyncEvent),
                    this._listenersChanged
                },
                enumerable: !1,
                configurable: !0
            }),
            AsyncEvent.defaultScheduler = function(e) {
                "undefined" != typeof window ? setTimeout(e, 0) : setImmediate(e)
            }
            ,
            AsyncEvent.setScheduler = function(e) {
                AsyncEvent._scheduler = e
            }
            ,
            AsyncEvent.prototype.post = function() {
                for (var e = this, t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                if (this._listeners && 0 !== this._listeners.length)
                    if (this._condensed) {
                        if (this._queuedData = t,
                        this._queuedListeners = this._listeners,
                        this._queued)
                            return;
                        this._queued = !0,
                        AsyncEvent._scheduler((function() {
                            e._queued = !1;
                            for (var t = e._queuedData, n = e._queuedListeners, i = 0; i < n.length; ++i) {
                                var r = n[i];
                                e._call(r, t)
                            }
                        }
                        ))
                    } else {
                        var i = this._listeners;
                        AsyncEvent._scheduler((function() {
                            for (var n = 0; n < i.length; ++n) {
                                var r = i[n];
                                e._call(r, t)
                            }
                        }
                        ))
                    }
            }
            ,
            AsyncEvent.prototype._call = function(t, n) {
                t.event && t.event instanceof AsyncEvent ? t.event._postDirect(n) : e.prototype._call.call(this, t, n)
            }
            ,
            AsyncEvent.prototype._postDirect = function(e) {
                if (this._listeners && 0 !== this._listeners.length)
                    for (var t = this._listeners, n = 0; n < t.length; ++n) {
                        var i = t[n];
                        this._call(i, e)
                    }
            }
            ,
            AsyncEvent.prototype._attach = function(t, n, i) {
                var r, o, s, a, c = null !== (o = null === (r = this._listeners) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0, u = e.prototype._attach.call(this, t, n, i);
                return this.evtListenersChanged && c !== (null !== (a = null === (s = this._listeners) || void 0 === s ? void 0 : s.length) && void 0 !== a ? a : 0) && this.evtListenersChanged.post(),
                u
            }
            ,
            AsyncEvent.prototype._detach = function() {
                for (var t, n, i, r, o = [], s = 0; s < arguments.length; s++)
                    o[s] = arguments[s];
                var a = null !== (n = null === (t = this._listeners) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0
                  , c = e.prototype._detach.apply(this, o);
                return this.evtListenersChanged && a !== (null !== (r = null === (i = this._listeners) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0) && this.evtListenersChanged.post(),
                c
            }
            ,
            AsyncEvent._scheduler = AsyncEvent.defaultScheduler,
            AsyncEvent
        }(Lt.BaseEvent);
        rn.AsyncEvent = an;
        var cn = function(e) {
            function VoidAsyncEvent() {
                return null !== e && e.apply(this, arguments) || this
            }
            return on(VoidAsyncEvent, e),
            VoidAsyncEvent.prototype.post = function() {
                e.prototype.post.call(this, void 0)
            }
            ,
            VoidAsyncEvent
        }(an);
        rn.VoidAsyncEvent = cn;
        var un = function(e) {
            function ErrorAsyncEvent() {
                return null !== e && e.apply(this, arguments) || this
            }
            return on(ErrorAsyncEvent, e),
            ErrorAsyncEvent.prototype.post = function(t) {
                if (0 === this.listenerCount())
                    throw new Error("error event posted while no listeners attached. Error: " + t.message);
                e.prototype.post.call(this, t)
            }
            ,
            ErrorAsyncEvent
        }(an);
        rn.ErrorAsyncEvent = un;
        var ln, hn = {}, fn = {};
        Object.defineProperty(fn, "__esModule", {
            value: !0
        }),
        fn.shallowEquals = void 0,
        fn.shallowEquals = function shallowEquals(e, t) {
            if (e === t)
                return !0;
            if (_typeof(e) !== _typeof(t))
                return !1;
            switch (_typeof(e)) {
            case "boolean":
            case "number":
            case "string":
            case "function":
            case "symbol":
            case "undefined":
            default:
                return !1;
            case "object":
                if (null === e || null === t)
                    return !1;
                if (Array.isArray(e) || Array.isArray(t)) {
                    if (!Array.isArray(e) || !Array.isArray(t))
                        return !1;
                    if (e.length !== t.length)
                        return !1;
                    for (var n = 0; n < e.length; ++n)
                        if (e[n] !== t[n])
                            return !1;
                    return !0
                }
                var i = []
                  , r = [];
                for (var o in e)
                    e.hasOwnProperty(o) && i.push(o);
                for (var s in t)
                    t.hasOwnProperty(s) && r.push(s);
                if (i.sort(),
                r.sort(),
                i.join(",") !== r.join(","))
                    return !1;
                for (n = 0; n < i.length; ++n)
                    if (e[i[n]] !== t[i[n]])
                        return !1;
                return !0
            }
        }
        ,
        function(e) {
            var t = u && u.__extends || function() {
                var e = function extendStatics(t, n) {
                    return e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var n in t)
                            t.hasOwnProperty(n) && (e[n] = t[n])
                    }
                    ,
                    e(t, n)
                };
                return function(t, n) {
                    function __() {
                        this.constructor = t
                    }
                    e(t, n),
                    t.prototype = null === n ? Object.create(n) : (__.prototype = n.prototype,
                    new __)
                }
            }();
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.ErrorAnyEvent = e.VoidAnyEvent = e.AnyEvent = e.EventType = void 0;
            var n, i = fn, r = zt, o = rn, s = Zt;
            !function(e) {
                e[e.Sync = 0] = "Sync",
                e[e.Async = 1] = "Async",
                e[e.Queued = 2] = "Queued"
            }(n = e.EventType || (e.EventType = {}));
            var a = function() {
                function AnyEvent(e) {
                    this._events = [],
                    e && e.monitorAttach && (this.evtFirstAttached = new c,
                    this.evtLastDetached = new c)
                }
                return Object.defineProperty(AnyEvent.prototype, "evtListenersChanged", {
                    get: function get() {
                        return this._listenersChanged || (this._listenersChanged = new r.VoidSyncEvent),
                        this._listenersChanged
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                AnyEvent.prototype.attach = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    var i = n.Sync;
                    e.length > 0 && "number" == typeof e[0] && (i = e.shift());
                    var r, o, s, a = this;
                    return "function" == typeof e[0] || e[0] && "object" === _typeof(e[0]) && "function" == typeof e[0].post ? ("function" == typeof e[0] ? r = e[0] : s = e[0],
                    o = e[1]) : (a = e[0],
                    r = e[1],
                    o = e[2]),
                    this._attach(i, a, r, s, o, !1)
                }
                ,
                AnyEvent.prototype.once = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    var i = n.Sync;
                    e.length > 0 && "number" == typeof e[0] && (i = e.shift());
                    var r, o, s, a = this;
                    return "function" == typeof e[0] || e[0] && "object" === _typeof(e[0]) && "function" == typeof e[0].post ? ("function" == typeof e[0] ? r = e[0] : s = e[0],
                    o = e[1]) : (a = e[0],
                    r = e[1],
                    o = e[2]),
                    this._attach(i, a, r, s, o, !0)
                }
                ,
                AnyEvent.prototype._attach = function(e, t, a, c, u, l) {
                    var h, f, d = this, p = this.evtFirstAttached ? this.listenerCount() : 0;
                    switch (e) {
                    case n.Sync:
                        for (var _ = 0, v = this._events; _ < v.length; _++) {
                            (w = v[_])instanceof r.SyncEvent && (h = w)
                        }
                        h || (h = new r.SyncEvent,
                        this._events.push(h));
                        break;
                    case n.Async:
                        for (var y = 0, g = this._events; y < g.length; y++) {
                            (w = g[y])instanceof o.AsyncEvent && i.shallowEquals(w.options, u) && (h = w)
                        }
                        h || (h = new o.AsyncEvent(u),
                        this._events.push(h));
                        break;
                    case n.Queued:
                        for (var b = 0, m = this._events; b < m.length; b++) {
                            var w;
                            (w = m[b])instanceof s.QueuedEvent && i.shallowEquals(w.options, u) && (h = w)
                        }
                        h || (h = new s.QueuedEvent(u),
                        this._events.push(h));
                        break;
                    default:
                        throw new Error("unknown EventType")
                    }
                    return f = l ? c ? h.once(c) : h.once(t, a) : c ? h.attach(c) : h.attach(t, a),
                    this.evtFirstAttached && 0 === p && this.evtFirstAttached.post(),
                    this.evtListenersChanged && p !== this.listenerCount() && this.evtListenersChanged.post(),
                    function() {
                        var e = d.evtLastDetached ? d.listenerCount() : 0;
                        f(),
                        d.evtLastDetached && e > 0 && 0 === d.listenerCount() && d.evtLastDetached.post(),
                        d.evtListenersChanged && e !== d.listenerCount() && d.evtListenersChanged.post()
                    }
                }
                ,
                AnyEvent.prototype.attachSync = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return e.unshift(n.Sync),
                    this.attach.apply(this, e)
                }
                ,
                AnyEvent.prototype.onceSync = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return e.unshift(n.Sync),
                    this.once.apply(this, e)
                }
                ,
                AnyEvent.prototype.attachAsync = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return e.unshift(n.Async),
                    this.attach.apply(this, e)
                }
                ,
                AnyEvent.prototype.onceAsync = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return e.unshift(n.Async),
                    this.once.apply(this, e)
                }
                ,
                AnyEvent.prototype.attachQueued = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return e.unshift(n.Queued),
                    this.attach.apply(this, e)
                }
                ,
                AnyEvent.prototype.onceQueued = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    return e.unshift(n.Queued),
                    this.once.apply(this, e)
                }
                ,
                AnyEvent.prototype.detach = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    for (var n = this.listenerCount(), i = 0; i < this._events.length; ++i)
                        this._events[i].detach.apply(this._events[i], e);
                    this.evtListenersChanged && n !== this.listenerCount() && this.evtListenersChanged.post(),
                    this.evtLastDetached && n > 0 && 0 === this.listenerCount() && this.evtLastDetached.post()
                }
                ,
                AnyEvent.prototype.post = function(e) {
                    for (var t = [], n = 0; n < this._events.length; ++n)
                        t.push(this._events[n]);
                    for (n = 0; n < t.length; ++n)
                        t[n].post(e)
                }
                ,
                AnyEvent.prototype.listenerCount = function() {
                    for (var e = 0, t = 0; t < this._events.length; ++t)
                        e += this._events[t].listenerCount();
                    return e
                }
                ,
                AnyEvent
            }();
            e.AnyEvent = a;
            var c = function(e) {
                function VoidAnyEvent() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return t(VoidAnyEvent, e),
                VoidAnyEvent.prototype.post = function() {
                    e.prototype.post.call(this, void 0)
                }
                ,
                VoidAnyEvent
            }(a);
            e.VoidAnyEvent = c;
            var l = function(e) {
                function ErrorAnyEvent() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return t(ErrorAnyEvent, e),
                ErrorAnyEvent.prototype.post = function(t) {
                    if (0 === this.listenerCount())
                        throw new Error("error event posted while no listeners attached. Error: " + t.message);
                    e.prototype.post.call(this, t)
                }
                ,
                ErrorAnyEvent
            }(a);
            e.ErrorAnyEvent = l
        }(hn),
        function(e) {
            var t = u && u.__createBinding || (Object.create ? function(e, t, n, i) {
                void 0 === i && (i = n),
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function get() {
                        return t[n]
                    }
                })
            }
            : function(e, t, n, i) {
                void 0 === i && (i = n),
                e[i] = t[n]
            }
            )
              , n = u && u.__exportStar || function(e, n) {
                for (var i in e)
                    "default" === i || n.hasOwnProperty(i) || t(n, e, i)
            }
            ;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.flush = e.flushOnce = e.queue = void 0,
            n(Lt, e),
            n(zt, e),
            n(Zt, e),
            n(rn, e),
            n(hn, e);
            var i = Kt
              , r = Kt;
            Object.defineProperty(e, "EventQueue", {
                enumerable: !0,
                get: function get() {
                    return r.default
                }
            }),
            e.queue = function queue() {
                return i.default.global()
            }
            ,
            e.flushOnce = function flushOnce() {
                i.default.global().flushOnce()
            }
            ,
            e.flush = function flush(e) {
                void 0 === e && (e = 10),
                i.default.global().flush(e)
            }
        }(qt),
        function(e) {
            e.UNAUTHENTICATED = 4001
        }(ln || (ln = {}));
        var dn = function() {
            function Transport(e, t, n, i, r, o, a) {
                var c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : new qe;
                _classCallCheck(this, Transport),
                _defineProperty(this, "connectionFactory", void 0),
                _defineProperty(this, "socketFactory", void 0),
                _defineProperty(this, "timer", void 0),
                _defineProperty(this, "url", void 0),
                _defineProperty(this, "params", void 0),
                _defineProperty(this, "defaultOptions", void 0),
                _defineProperty(this, "listener", void 0),
                _defineProperty(this, "logger", void 0),
                _defineProperty(this, "alive", !0),
                _defineProperty(this, "socketIdGenerator", 0),
                _defineProperty(this, "numberOfConnectionAttempts", 0),
                _defineProperty(this, "options", void 0),
                _defineProperty(this, "online", !0),
                _defineProperty(this, "quality", s.OFFLINE),
                _defineProperty(this, "qualityEvent", new qt.AsyncEvent),
                _defineProperty(this, "socket", void 0),
                _defineProperty(this, "connection", void 0),
                _defineProperty(this, "sessionId", void 0),
                _defineProperty(this, "sessionOffset", void 0),
                _defineProperty(this, "previousConnectionError", void 0),
                this.connectionFactory = e,
                this.socketFactory = t,
                this.timer = n,
                this.url = i,
                this.params = r,
                this.defaultOptions = o,
                this.listener = a,
                this.logger = c,
                this.options = o,
                this.log("Created: options:", this.options)
            }
            return _createClass(Transport, [{
                key: "getOptions",
                value: function getOptions() {
                    return this.options
                }
            }, {
                key: "setOnline",
                value: function setOnline(e) {
                    var t = this.online;
                    this.online = e,
                    !e && t && this.connection && (this.closeConnection(n.CLIENT_OFFLINE),
                    this.closeSocket()),
                    !e && t && this.socket && this.closeSocket(),
                    e && !t && this.reconnect()
                }
            }, {
                key: "getQuality",
                value: function getQuality() {
                    return this.quality
                }
            }, {
                key: "addQualityListener",
                value: function addQualityListener(e) {
                    var t = this;
                    return this.qualityEvent.attach(e),
                    {
                        close: function close() {
                            t.qualityEvent.detach(e)
                        }
                    }
                }
            }, {
                key: "getSocket",
                value: function getSocket() {
                    return this.socket
                }
            }, {
                key: "getConnection",
                value: function getConnection() {
                    return this.connection
                }
            }, {
                key: "getSessionId",
                value: function getSessionId() {
                    return this.sessionId
                }
            }, {
                key: "getSessionOffset",
                value: function getSessionOffset() {
                    return this.sessionOffset
                }
            }, {
                key: "connect",
                value: function connect() {
                    this.assertNotClosed();
                    var e = this.buildUrl();
                    this.numberOfConnectionAttempts++;
                    var t = ++this.socketIdGenerator;
                    this.log("#".concat(this.numberOfConnectionAttempts, " attempt to open ").concat(e, " as socket #").concat(t)),
                    this.socket = this.socketFactory.create(t, e, this)
                }
            }, {
                key: "onOpen",
                value: function onOpen(e) {
                    this.isValidCallback(e) && this.socket && (this.connection = this.connectionFactory.create(this.socket, this.sessionId, this.sessionOffset),
                    this.previousConnectionError = void 0,
                    this.log("WS Connected"))
                }
            }, {
                key: "onClose",
                value: function onClose(e, t) {
                    this.isValidCallback(e) && this.reset(void 0, t)
                }
            }, {
                key: "onError",
                value: function onError(e) {
                    this.isValidCallback(e) && this.reset(n.CONNECTION_ERROR)
                }
            }, {
                key: "onMessage",
                value: function onMessage(e, t) {
                    this.isValidCallback(e) && this.connection && (this.numberOfConnectionAttempts = 0,
                    this.setQuality(this.connection.onPacket(t)))
                }
            }, {
                key: "isClosed",
                value: function isClosed() {
                    return !this.alive
                }
            }, {
                key: "close",
                value: function close() {
                    this.alive && (this.alive = !1,
                    this.connection && (this.connection.close(!0),
                    this.connection = void 0,
                    this.quality = s.OFFLINE),
                    this.closeSocket(),
                    this.log("Closed"))
                }
            }, {
                key: "reset",
                value: function reset(e, n) {
                    this.setQuality(s.OFFLINE),
                    this.closeConnection(e),
                    this.closeSocket(),
                    n === ln.UNAUTHENTICATED ? this.listener.onFailure(t.UNAUTHENTICATED) : this.scheduleReconnection()
                }
            }, {
                key: "assertNotClosed",
                value: function assertNotClosed() {
                    if (!this.alive)
                        throw new Error("Transport already cosed")
                }
            }, {
                key: "buildUrl",
                value: function buildUrl() {
                    var e = "".concat(this.url)
                      , t = 0;
                    return objectEntries(this.params).forEach((function(n) {
                        var i = _slicedToArray(n, 2)
                          , r = i[0]
                          , o = i[1];
                        o && (e += t++ ? "&" : "?",
                        e += r + "=" + o)
                    }
                    )),
                    this.sessionId && (e += "&sid=".concat(this.sessionId, "&offset=").concat(this.sessionOffset)),
                    this.previousConnectionError && (e += "&disconnected_by=".concat(this.previousConnectionError)),
                    e
                }
            }, {
                key: "isValidCallback",
                value: function isValidCallback(e) {
                    return !(!this.alive || e !== this.socketIdGenerator)
                }
            }, {
                key: "scheduleReconnection",
                value: function scheduleReconnection() {
                    var e = this
                      , t = this.numberOfConnectionAttempts
                      , n = this.backOffDelayWithJitter(t);
                    this.log("Scheduling #" + (t + 1) + " reconnection attempt in " + n + " millisec"),
                    this.timer.schedule(n).then((function() {
                        e.numberOfConnectionAttempts === t && e.reconnect()
                    }
                    ))
                }
            }, {
                key: "reconnect",
                value: function reconnect() {
                    if (this.alive && null == this.socket)
                        try {
                            this.connect()
                        } catch (err) {
                            this.scheduleReconnection()
                        }
                }
            }, {
                key: "backOffDelayWithJitter",
                value: function backOffDelayWithJitter(e) {
                    if (!this.online)
                        return this.options.maxReconnectionDelayMs;
                    var t = this.backOffDelay(e);
                    return this.options.reconnectionJitter ? Math.max(this.options.initialReconnectionDelayMs, Math.floor(Math.random() * t)) : t
                }
            }, {
                key: "backOffDelay",
                value: function backOffDelay(e) {
                    if (e < 16) {
                        var t = this.options.initialReconnectionDelayMs * Math.pow(this.options.reconnectionDelayPowBase, e);
                        return Math.min(t, this.options.maxReconnectionDelayMs)
                    }
                    return this.options.maxReconnectionDelayMs
                }
            }, {
                key: "closeConnection",
                value: function closeConnection(e) {
                    if (this.connection) {
                        var t = this.connection.getSessionId();
                        t && (this.sessionId = t,
                        this.sessionOffset = this.connection.getSessionOffset(),
                        this.options = overrideOptions(this.defaultOptions, this.connection.getSessionOptions())),
                        this.previousConnectionError = this.connection.closedByError,
                        e ? this.connection.onError(e) : this.connection.onClose(),
                        this.connection = void 0
                    }
                }
            }, {
                key: "closeSocket",
                value: function closeSocket() {
                    if (this.socket) {
                        try {
                            this.socket.close()
                        } catch (err) {
                            this.log("Socket close error: socketId=" + this.socketIdGenerator)
                        }
                        this.socket = void 0
                    }
                }
            }, {
                key: "setQuality",
                value: function setQuality(e) {
                    null != e && e !== this.quality && (this.quality = e,
                    this.qualityEvent.post(e))
                }
            }, {
                key: "log",
                value: function log() {
                    for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    (e = this.logger).log.apply(e, ["[Transport]"].concat(n))
                }
            }]),
            Transport
        }()
          , pn = function() {
            function Client(e, t, n) {
                var i = this;
                _classCallCheck(this, Client),
                _defineProperty(this, "options", void 0),
                _defineProperty(this, "WS", void 0),
                _defineProperty(this, "id", void 0),
                _defineProperty(this, "subscriptions", void 0),
                _defineProperty(this, "listener", void 0),
                _defineProperty(this, "transport", void 0),
                _defineProperty(this, "logger", void 0),
                this.options = e,
                this.WS = n,
                this.id = e.clientId ? e.clientId : this.generateId(8);
                var r = this
                  , o = this.options.uid ? "" + this.options.uid : void 0;
                this.logger = new qe(!!this.options.debug && this.options.debug),
                this.listener = new He(t,this.options.callbackErrorHandler,this.logger);
                var s = this.subscriptionOptions()
                  , a = {
                    onConnect: function onConnect() {
                        i.listener.onConnect(i.getOnConnectObject())
                    },
                    onAttach: function onAttach() {
                        i.listener.onAttach()
                    },
                    onDetach: function onDetach() {
                        i.listener.onDetach()
                    }
                };
                this.subscriptions = new Ke(a,s,this.options.capabilities,this.options.callbackErrorHandler,this.logger);
                var c = this.connectionOptions()
                  , u = new ze(this.subscriptions,c,this.logger)
                  , l = new Qe((function(e) {
                    return r.WS ? new r.WS(e) : new WebSocket(e)
                }
                ),this.logger)
                  , h = this.options.url
                  , f = {
                    uid: o,
                    token: this.options.token,
                    client_type: "web",
                    client_version: Client.version,
                    client_id: this.id
                }
                  , d = this.transportOptions()
                  , p = {
                    onFailure: function onFailure(e) {
                        i.listener.onFailure(createClientFailure(e)),
                        i.close()
                    }
                };
                this.transport = new dn(u,l,new Nt,h,f,d,p,this.logger)
            }
            return _createClass(Client, [{
                key: "getId",
                value: function getId() {
                    return this.id
                }
            }, {
                key: "getLogger",
                value: function getLogger() {
                    return this.logger
                }
            }, {
                key: "getState",
                value: function getState() {
                    return {
                        transport: {
                            isConnected: this.isAttached()
                        }
                    }
                }
            }, {
                key: "setOnline",
                value: function setOnline(e) {
                    this.transport.setOnline(e)
                }
            }, {
                key: "getQuality",
                value: function getQuality() {
                    return this.transport.getQuality()
                }
            }, {
                key: "addQualityListener",
                value: function addQualityListener(e) {
                    return this.transport.addQualityListener(e)
                }
            }, {
                key: "isAttached",
                value: function isAttached() {
                    return this.subscriptions.isAttached()
                }
            }, {
                key: "isAuthenticated",
                value: function isAuthenticated() {
                    return this.subscriptions.isAuthenticated()
                }
            }, {
                key: "addCapabilities",
                value: function addCapabilities(e) {
                    return this.subscriptions.addCapabilities(e)
                }
            }, {
                key: "addActivities",
                value: function addActivities(e) {
                    return this.subscriptions.addActivities(e)
                }
            }, {
                key: "isClosed",
                value: function isClosed() {
                    return this.transport.isClosed()
                }
            }, {
                key: "close",
                value: function close() {
                    this.subscriptions.close(),
                    this.transport.close()
                }
            }, {
                key: "connect",
                value: function connect() {
                    if (!this.isWebSocketSupported())
                        return this.listener.onFailure(createClientFailure(t.TRANSPORT_NOT_SUPPORTED, {
                            type: "websocket"
                        })),
                        this;
                    try {
                        this.transport.connect()
                    } catch (err) {
                        this.logger.error("Fatal transport error ", err),
                        this.listener.onFailure(createClientFailure(t.MALFORMED_URL, {
                            error: err
                        }))
                    }
                    return this
                }
            }, {
                key: "subscribe",
                value: function subscribe(e, t, n) {
                    return this.subscriptions.subscribe(e, t, n)
                }
            }, {
                key: "transportOptions",
                value: function transportOptions() {
                    var e = {
                        initialReconnectionDelayMs: 100,
                        maxReconnectionDelayMs: 3e4,
                        reconnectionDelayPowBase: 1.5,
                        reconnectionJitter: !0
                    };
                    return void 0 !== this.options.initialReconnectionDelayMs && (e.initialReconnectionDelayMs = this.options.initialReconnectionDelayMs),
                    void 0 !== this.options.maxReconnectionDelayMs && (e.maxReconnectionDelayMs = this.options.maxReconnectionDelayMs),
                    void 0 !== this.options.reconnectionDelayPowBase && (e.reconnectionDelayPowBase = this.options.reconnectionDelayPowBase),
                    e
                }
            }, {
                key: "connectionOptions",
                value: function connectionOptions() {
                    var e = {
                        welcomeMaxDelayMs: 1e4,
                        welcomeRequestDelayMs: 250
                    };
                    return void 0 !== this.options.welcomeMaxDelayMs && (e.welcomeMaxDelayMs = this.options.welcomeMaxDelayMs),
                    e
                }
            }, {
                key: "subscriptionOptions",
                value: function subscriptionOptions() {
                    var e = {
                        maxPendingRequests: 10,
                        responseMaxDelayMs: 1e4,
                        subscribeRetryTimoutMs: 3e4,
                        registerDelayMs: 250
                    };
                    return void 0 !== this.options.maxPendingRequests && (e.maxPendingRequests = this.options.maxPendingRequests),
                    void 0 !== this.options.responseMaxDelayMs && (e.responseMaxDelayMs = this.options.responseMaxDelayMs),
                    void 0 !== this.options.subscribeRetryTimoutMs && (e.subscribeRetryTimoutMs = this.options.subscribeRetryTimoutMs),
                    void 0 !== this.options.registerDelayMs && (e.registerDelayMs = this.options.registerDelayMs),
                    e
                }
            }, {
                key: "getOnConnectObject",
                value: function getOnConnectObject() {
                    var e = this;
                    return {
                        getId: function getId() {
                            return e.getId()
                        },
                        isAttached: function isAttached() {
                            return e.isAttached()
                        },
                        isAuthenticated: function isAuthenticated() {
                            return e.isAuthenticated()
                        },
                        getQuality: function getQuality() {
                            return e.getQuality()
                        },
                        addQualityListener: function addQualityListener(t) {
                            return e.addQualityListener(t)
                        },
                        addCapabilities: function addCapabilities(t) {
                            return e.addCapabilities(t)
                        },
                        addActivities: function addActivities(t) {
                            return e.addActivities(t)
                        },
                        subscribe: function subscribe(t, n, i) {
                            return e.subscribe(t, n, i)
                        }
                    }
                }
            }, {
                key: "isWebSocketSupported",
                value: function isWebSocketSupported() {
                    try {
                        return null !== this.WS || null !== WebSocket
                    } catch (err) {
                        return !1
                    }
                }
            }, {
                key: "generateId",
                value: function generateId(e) {
                    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = "", i = 0; i < e; i++)
                        n += t.charAt(Math.floor(Math.random() * t.length));
                    return n
                }
            }], [{
                key: "getVersion",
                value: function getVersion() {
                    return Client.version
                }
            }]),
            Client
        }();
        _defineProperty(pn, "version", "1.3.1");
        var _n = function connect(e, t, n) {
            return new pn(e,t,n).connect()
        }
          , vn = __webpack_require__(669)
          , yn = __webpack_require__.n(vn)();
        function isSpecialRequest(e) {
            return function isPlatformRequest(e) {
                return e.startsWith("/service/") || e.includes(".com/service/")
            }(e) || function isChessbombRequest(e) {
                return e.includes("chessbomb.com")
            }(e) || function isSubdomainRequest(e) {
                return /https:\/\/(?!www)([\S]+)chess.com/.test(e)
            }(e)
        }
        const gn = ["delete", "patch", "post", "put"];
        const bn = "sb"
          , random = ()=>Math.random().toString(36).substring(2, 15);
        const boolToInt = e=>(Object.keys(e).forEach((t=>{
            const n = e[t];
            "boolean" == typeof n && (e[t] = Number(n)),
            "object" == typeof n && null !== n && (e[t] = boolToInt(n))
        }
        )),
        e);
        var mn = [function addCsrfToken(e) {
            return e && !isSpecialRequest(e.url) && gn.includes(e.method) ? (e.data instanceof FormData || e.data instanceof URLSearchParams ? e.data.append("_token", window.context.csrf.token) : e.data = Object.assign({
                _token: window.context.csrf.token
            }, e.data || {}),
            e) : e
        }
        , function addRequestId(e) {
            return (()=>{
                const e = document.getElementById(bn);
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
        , function castBoolsToInts(e) {
            return !e || isSpecialRequest(e.url) || "object" == typeof e.data && (e.data = boolToInt(e.data)),
            e
        }
        ];
        function responseErrorInterceptor(e) {
            const t = e.config
              , n = e.response;
            if ("Cancel" === e.toString())
                return Promise.reject(e);
            try {
                t.data = JSON.parse(t.data)
            } catch (i) {
                return Promise.reject(e)
            }
            if (n && 403 === n.status && n.headers["x-chesscom-csrf-token"] && t && !t.data.retry) {
                const e = n.headers["x-chesscom-csrf-token"];
                return t.data._token = e,
                t.data.retry = !0,
                window.context.csrf.token = e,
                yn(t)
            }
            return Promise.reject(e)
        }
        Object.create,
        Object.defineProperty,
        Object.getOwnPropertyDescriptor,
        Object.getOwnPropertyNames,
        Object.getPrototypeOf,
        Object.prototype.hasOwnProperty;
        async function getSentryBrowser() {
            return __webpack_require__.e(48).then(__webpack_require__.bind(__webpack_require__, 48))
        }
        async function setSentryContext(e) {
            if (!(await async function isSentryAvailable() {
                try {
                    const e = await getSentryBrowser();
                    return Boolean(e.getCurrentHub().getClient())
                } catch (e) {
                    return !1
                }
            }()))
                return;
            (await getSentryBrowser()).configureScope((t=>{
                Object.keys(e).forEach((n=>{
                    t.setExtra(n, e[n])
                }
                ))
            }
            ))
        }
        const checkWindowObject = ()=>{
            (({key: e, value: t})=>{
                window.chesscom || (window.chesscom = {}),
                window.chesscom[e] || (window.chesscom[e] = t)
            }
            )({
                key: "logData",
                value: {}
            })
        }
          , log = ({key: e, value: t})=>{
            checkWindowObject(),
            window.chesscom.logData[e] = t,
            setSentryContext({
                [e]: t
            })
        }
        ;
        function responseInterceptor(e) {
            return e.headers && e.headers["x-chesscom-request-id-cdn"] && (log({
                key: "x-chesscom-request-id-cdn",
                value: e.headers["x-chesscom-request-id-cdn"]
            }),
            log({
                key: "x-chesscom-request-id-lb",
                value: e.headers["x-chesscom-request-id-lb"]
            })),
            e
        }
        function findExistingInterceptor(e, t) {
            var n;
            if (!t.name)
                throw new Error("interceptor must be a named function");
            return null == (n = e.handlers) ? void 0 : n.find((e=>{
                var n;
                return (null == (n = e.fulfilled) ? void 0 : n.name) === t.name
            }
            ))
        }
        !function registerInterceptors(e) {
            mn.forEach((t=>{
                findExistingInterceptor(e.interceptors.request, t) || e.interceptors.request.use(t)
            }
            )),
            findExistingInterceptor(e.interceptors.response, responseInterceptor) || e.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
        }(yn);
        var wn = yn.create({
            withCredentials: !0
        });
        async function publish(e) {
            var t;
            let n = window.PubSub.options.url[e.service || "base"];
            const i = e.path instanceof Array ? e.path.join("/") : e.path;
            n.endsWith("/") || i.startsWith("/") || (n += "/");
            const r = {};
            ["staging", "prod"].includes("staging") || (r.uid = null == (t = window.context.user) ? void 0 : t.uuid),
            e.params && Object.assign(r, e.params);
            const o = {};
            return e.requestId && (o["x-chesscom-request-id-client"] = e.requestId),
            e.clientId && (o["x-chesscom-play-client"] = e.clientId),
            e.headers && Object.assign(o, e.headers),
            wn({
                url: /^http[s]?:/.test(i) ? i : `${n}${i}`,
                data: e.data,
                method: e.method || "post",
                params: r,
                headers: o,
                withCredentials: !0
            })
        }
        var kn = Object.defineProperty
          , En = Object.getOwnPropertySymbols
          , Sn = Object.prototype.hasOwnProperty
          , Cn = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,n)=>t in e ? kn(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n;
        class Bus {
            constructor() {
                this.subscriptions = []
            }
            on(e, t) {
                this.subscriptions.push({
                    eventName: e,
                    handler: t
                })
            }
            off(e, t) {
                this.subscriptions = this.subscriptions.filter((n=>n.eventName !== e || n.handler !== t))
            }
            emit(e, t) {
                this.subscriptions.filter((t=>t.eventName === e)).forEach((e=>e.handler(t)))
            }
        }
        const Pn = "connect"
          , On = "disconnect"
          , An = "failure"
          , Tn = "message"
          , Rn = "reconnect"
          , jn = "subscribe"
          , xn = "subscribe_fail"
          , In = "unsubscribe"
          , Un = "error";
        var Dn, Bn;
        const Mn = window
          , Nn = Mn.PubSub
          , qn = Mn.context
          , Ln = null == (Dn = null == qn ? void 0 : qn.user) ? void 0 : Dn.uuid;
        if (Nn && Nn.options && !(null == (Bn = window.Config) ? void 0 : Bn.cypress)) {
            const e = new Bus;
            Nn.client = _n({
                debug: !1,
                uid: Ln,
                url: Nn.options.url.pubsub
            }, {
                onAttach: ()=>{
                    e.emit(Rn)
                }
                ,
                onConnect: ()=>{
                    e.emit(Pn)
                }
                ,
                onDetach: ()=>{
                    e.emit(On)
                }
                ,
                onFailure: t=>{
                    e.emit(An, {
                        failure: t
                    })
                }
            });
            const t = Nn.client.transport
              , n = t.onError;
            t.onError = function(...i) {
                n.apply(t, i),
                e.emit(Un)
            }
            ,
            Nn.subscribe = function subscribe(t, n={}) {
                let i = !0;
                const r = {
                    onAttach: n=>{
                        const r = {
                            channel: t,
                            isContinuation: n,
                            isInitial: i
                        };
                        e.emit(jn, r),
                        e.emit(`${jn}:${t}`, r),
                        i = !1
                    }
                    ,
                    onComplete: ()=>{
                        e.emit(In, {
                            channel: t
                        }),
                        e.emit(`${In}:${t}`, {
                            channel: t
                        })
                    }
                    ,
                    onDetach: ()=>{
                        e.emit(In, {
                            channel: t
                        }),
                        e.emit(`${In}:${t}`, {
                            channel: t
                        })
                    }
                    ,
                    onFailure: n=>{
                        const i = {
                            channel: t,
                            failure: n
                        };
                        e.emit(xn, i),
                        e.emit(`${xn}:${t}`, i)
                    }
                    ,
                    onMessage: n=>{
                        const i = {
                            channel: t,
                            message: n
                        };
                        e.emit(Tn, i),
                        e.emit(`${Tn}:${t}`, i)
                    }
                }
                  , o = Object.assign(r, n);
                try {
                    return Nn.client.subscribe(t, o)
                } catch (s) {
                    throw e.emit(Un),
                    s
                }
            }
            ,
            Nn.getState = function getState() {
                return Nn.client.getState()
            }
            ,
            Nn.isAttached = ()=>Nn.client.isAttached(),
            Nn.on = (...t)=>e.on(...t),
            Nn.off = (...t)=>e.off(...t),
            window.addEventListener("beforeunload", (()=>{
                Nn.client.close()
            }
            )),
            window.addEventListener("online", (()=>{
                Nn.client.setOnline(!0)
            }
            )),
            window.addEventListener("offline", (()=>{
                Nn.client.setOnline(!1)
            }
            ))
        }
        Nn && Nn.options && (Nn.fetch = async function fetch(e) {
            return publish(((e,t)=>{
                for (var n in t || (t = {}))
                    Sn.call(t, n) && __defNormalProp(e, n, t[n]);
                if (En)
                    for (var n of En(t))
                        Cn.call(t, n) && __defNormalProp(e, n, t[n]);
                return e
            }
            )({
                method: "get"
            }, e))
        }
        ,
        Nn.publish = publish)
    }()
}();
