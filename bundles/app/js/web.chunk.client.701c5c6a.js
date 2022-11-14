"use strict";
(("undefined" != typeof self ? self : this).wpChessCom_Yybx = ("undefined" != typeof self ? self : this).wpChessCom_Yybx || []).push([[4338], {
    74959: function(t, e, n) {
        var i = n(97032);
        const getValue = (t,e)=>i.Z.isString(e) && i.Z.isObject(t) ? t[e] : i.Z.isFunction(e) ? e(t) : void 0
          , compareValues = (t,e,n,i)=>{
            const o = getValue(t, n)
              , s = getValue(e, n);
            return null == o ? 1 : null == s ? -1 : o > s ? "desc" === i ? -1 : 1 : o < s ? "desc" === i ? 1 : -1 : 0
        }
        ;
        e.Z = {
            remove(t, e) {
                const n = i.Z.isFunction(e) ? t.findIndex(e) : t.indexOf(e);
                -1 !== n && t.splice(n, 1)
            },
            range(t, e) {
                const n = [];
                for (let i = t; i < e; i++)
                    n.push(i);
                return n
            },
            uniq: (t,e)=>i.Z.isFunction(e) ? t.filter(((n,i)=>t.findIndex((t=>e(t) === e(n))) === i)) : e ? t.filter(((n,i)=>t.findIndex((t=>t[e] === n[e])) === i)) : t.filter(((e,n)=>t.indexOf(e) === n)),
            sortBy(t, e, n) {
                const o = i.Z.isArray(e) ? e : [e]
                  , s = i.Z.isArray(n) ? n : [n]
                  , r = t.slice(0);
                return r.sort(((t,e)=>{
                    let n = 0;
                    for (let i = 0; i < o.length && 0 === n; i++)
                        n = compareValues(t, e, o[i], s[i]);
                    return n
                }
                )),
                r
            }
        }
    },
    70136: function(t, e, n) {
        var i = n(18637);
        const o = {};
        ["setTimeout", "setInterval", "clearTimeout", "clearInterval"].forEach((t=>{
            o[t] = i.Z[t].bind(i.Z)
        }
        )),
        e.Z = o
    },
    97032: function(t, e) {
        function isNull(t) {
            return null === t
        }
        function isUndefined(t) {
            return void 0 === t
        }
        function isObject(t) {
            return !isNull(t) && "object" == typeof t
        }
        e.Z = {
            isString: t=>"string" == typeof t,
            isFunction: t=>"function" == typeof t,
            isNumber: t=>"number" == typeof t,
            isNil: t=>isNull(t) || isUndefined(t),
            isObject: isObject,
            isPlainObject: t=>!!isObject(t) && (t.constructor && "Object" === t.constructor.name),
            isArray: t=>Array.isArray(t),
            isError(t) {
                if (!isObject(t))
                    return !1;
                const e = Object.prototype.toString.call(t);
                return "[object Error]" === e || "[object DOMException]" === e
            },
            isUndefined: isUndefined
        }
    },
    39297: function(t, e, n) {
        var i = n(79816)
          , o = n(24452)
          , s = n(74959)
          , r = n(70136)
          , l = n(97032);
        const getOptions = t=>l.Z.isString(t.value) ? {
            content: t.value
        } : t.value
          , noop = ()=>{}
        ;
        e.Z = {
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
                bind(t, e) {
                    this.instances.push({
                        element: t,
                        options: getOptions(e || {
                            value: t.getAttribute("title")
                        })
                    }),
                    t.removeAttribute("title"),
                    t.addEventListener("mouseenter", this.showTooltip),
                    t.addEventListener("focus", this.showTooltip)
                },
                update(t, e) {
                    const n = this.instances.find((e=>e.element === t));
                    n && (n.options = getOptions(e))
                },
                unbind(t) {
                    const e = this.instances.find((e=>e.element === t));
                    e && (this.active === e && this.hideTooltip({
                        target: e.element
                    }),
                    s.Z.remove(this.instances, e),
                    t.removeEventListener("mouseenter", this.showTooltip),
                    t.removeEventListener("focus", this.showTooltip),
                    t.removeEventListener("mouseleave", this.hideTooltip),
                    t.removeEventListener("blur", this.hideTooltip))
                },
                showTooltip({target: t}) {
                    const e = this.instances.find((e=>e.element === t));
                    if (!e || !e.options || !e.options.content)
                        return;
                    const n = e.options.delay || 400
                      , s = e.options.position || "top"
                      , l = e.options.padding || 0;
                    this.clearTooltip(),
                    e.element.classList.contains(i.xL.CONFIRM_OPEN) || (this.active = e,
                    e.element.addEventListener("mouseleave", this.hideTooltip),
                    e.element.addEventListener("blur", this.hideTooltip),
                    this.showTimeout = r.Z.setTimeout((()=>{
                        this.showFrame = window.requestAnimationFrame((()=>{
                            this.$refs && this.$refs.content && e.options && (this.$refs.content.textContent = e.options.content),
                            this.$el.classList.add(s),
                            (0,
                            o._O)(e.element, this.$el, s, l)
                        }
                        ))
                    }
                    ), n)),
                    !1 !== e.options.closeOnScroll && this.hideOnScroll(t),
                    this.hideOnDocumentVisibilityChange(t)
                },
                hideOnDocumentVisibilityChange(t) {
                    this.hideOnDocumentVisibilityChangeHandler = ()=>{
                        this.hideTooltip({
                            target: t
                        })
                    }
                    ,
                    document.addEventListener("visibilitychange", this.hideOnDocumentVisibilityChangeHandler)
                },
                hideOnScroll(t) {
                    this.hideOnScrollHandler = ()=>{
                        this.hideTooltip({
                            target: t
                        })
                    }
                    ,
                    window.addEventListener("scroll", this.hideOnScrollHandler)
                },
                hideTooltip({target: t}) {
                    this.instances.find((e=>e.element === t)) && (this.clearTooltip(),
                    this.hideFrame = window.requestAnimationFrame((()=>{
                        this.$refs && this.$refs.content && (this.$refs.content.textContent = null),
                        (0,
                        o.fs)(this.$el)
                    }
                    )))
                },
                clearTooltip() {
                    this.active && (this.active.element.removeEventListener("mouseleave", this.hideTooltip),
                    this.active.element.removeEventListener("blur", this.hideTooltip),
                    this.active = null),
                    r.Z.clearTimeout(this.showTimeout),
                    window.cancelAnimationFrame(this.hideFrame),
                    window.cancelAnimationFrame(this.showFrame),
                    window.removeEventListener("scroll", this.hideOnScrollHandler),
                    document.removeEventListener("visibilitychange", this.hideOnDocumentVisibilityChangeHandler)
                }
            }
        }
    },
    24452: function(t, e, n) {
        n.d(e, {
            MD: function() {
                return getUserPopoverPosition
            },
            bt: function() {
                return getPosition
            },
            _O: function() {
                return positionTooltip
            },
            fs: function() {
                return removePositionStyle
            }
        });
        var i = n(93644);
        const o = "top"
          , s = "right"
          , r = "bottom"
          , l = "left"
          , c = "bottom-left"
          , getUserPopoverPosition = (t,e=220,n=320)=>{
            const i = {
                top: null,
                left: null,
                right: null,
                x: null,
                y: null
            }
              , c = t.width / 2
              , d = window
              , h = d.innerHeight - 310
              , a = t.bottom + e < d.innerHeight
              , u = n - 28 - 12
              , f = n - u
              , p = t.left + c + u < d.innerWidth;
            return a ? (i.top = t.bottom,
            i.y = r) : (i.top = h,
            i.y = o),
            p ? (i.left = t.left + c - f,
            i.right = window.innerWidth - t.right,
            i.x = s) : (i.left = t.left + c - u,
            i.right = window.innerWidth - t.right,
            i.x = l),
            i.top = Math.round(i.top),
            i.left = Math.round(i.left),
            i.right = Math.round(i.right),
            i
        }
          , getPosition = (t,e,n,i=0)=>{
            if (!t || !e)
                return null;
            const d = t.getBoundingClientRect()
              , h = {}
              , a = window.innerWidth - d.x
              , canFitTop = ()=>d.top - (e.clientHeight + i) > 0
              , canFitLeft = ()=>d.left - (e.clientWidth + i) > 0;
            return n === o && canFitTop() || n === r && !(d.bottom + e.clientHeight + i < window.innerHeight) ? (h.left = d.left - (e.clientWidth - d.width) / 2,
            h.rtlLeft = a - e.clientWidth / 2 - d.width / 2,
            h.top = d.top - e.clientHeight - i,
            h.placement = o) : n === r || n === o && !canFitTop() ? (h.left = d.left - (e.clientWidth - d.width) / 2,
            h.rtlLeft = a - e.clientWidth / 2 - d.width / 2,
            h.top = d.bottom + i,
            h.placement = r) : n === l && canFitLeft() || n === s && !(d.right + e.clientWidth + i < window.innerWidth) ? (h.left = d.left - e.clientWidth - i,
            h.rtlLeft = d.rtlLeft - e.clientWidth - i,
            h.top = d.top - (e.clientHeight - d.height) / 2,
            h.placement = l) : n === s || n === l && !canFitLeft() ? (h.left = d.right + i,
            h.rtlLeft = d.rtlLeft + i,
            h.top = d.top - (e.clientHeight - d.height) / 2,
            h.placement = s) : n === c && (h.left = d.right - d.width / 2 - e.clientWidth - i,
            h.rtlLeft = d.rtlLeft - e.clientWidth - i,
            h.top = d.bottom + i,
            h.placement = c),
            {
                left: Math.round(h.left),
                placement: h.placement,
                rtlLeft: Math.round(h.rtlLeft),
                top: Math.round(h.top)
            }
        }
          , positionTooltip = (t,e,n,o=0)=>{
            if (!t || !e)
                return null;
            const s = getPosition(t, e, n, o);
            return (0,
            i.t)() ? e.style.transform = `translate(-${s.rtlLeft}px, ${s.top}px)` : e.style.transform = `translate(${s.left}px, ${s.top}px)`,
            e.classList.add(s.placement),
            e
        }
          , removePositionStyle = t=>t ? (t.style.transform = "translate(-100%, -100%)",
        t.classList.remove(l, s, r, o),
        t) : null
    },
    18637: function(t, e, n) {
        let i;
        i = "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};
        const o = i;
        e.Z = o
    },
    94338: function(t, e, n) {
        var i = n(65094);
        const o = n(52439).default.extend(i.Z);
        let s, r = !1;
        const getTooltip = ()=>{
            if (s || (s = new o),
            !r) {
                const t = document.createElement("div");
                document.body.appendChild(t),
                s.$mount(t),
                r = !0
            }
            return s
        }
        ;
        e.Z = {
            bind: (t,e)=>getTooltip().bind(t, e),
            componentUpdated: (t,e)=>getTooltip().update(t, e),
            unbind: (t,e)=>getTooltip().unbind(t, e)
        }
    },
    93644: function(t, e, n) {
        n.d(e, {
            t: function() {
                return isRtl
            }
        });
        const isRtl = ()=>"rtl" === document.querySelector("html").getAttribute("dir")
    },
    83077: function(t, e, n) {
        n.d(e, {
            s: function() {
                return render
            },
            x: function() {
                return i
            }
        });
        var render = function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                staticClass: "tooltip tip vue-tooltip"
            }, [n("div", {
                staticClass: "arrow"
            }), t._v(" "), n("div", {
                ref: "content",
                staticClass: "inner"
            })])
        }
          , i = []
    },
    65094: function(t, e, n) {
        var i = n(83077)
          , o = n(14284)
          , s = (0,
        n(51900).Z)(o.Z, i.s, i.x, !1, null, null, null);
        e.Z = s.exports
    },
    14284: function(t, e, n) {
        var i = n(39297);
        e.Z = i.Z
    },
    51900: function(t, e, n) {
        function normalizeComponent(t, e, n, i, o, s, r, l) {
            var c, d = "function" == typeof t ? t.options : t;
            if (e && (d.render = e,
            d.staticRenderFns = n,
            d._compiled = !0),
            i && (d.functional = !0),
            s && (d._scopeId = "data-v-" + s),
            r ? (c = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                o && o.call(this, t),
                t && t._registeredComponents && t._registeredComponents.add(r)
            }
            ,
            d._ssrRegister = c) : o && (c = l ? function() {
                o.call(this, (d.functional ? this.parent : this).$root.$options.shadowRoot)
            }
            : o),
            c)
                if (d.functional) {
                    d._injectStyles = c;
                    var h = d.render;
                    d.render = function renderWithStyleInjection(t, e) {
                        return c.call(e),
                        h(t, e)
                    }
                } else {
                    var a = d.beforeCreate;
                    d.beforeCreate = a ? [].concat(a, c) : [c]
                }
            return {
                exports: t,
                options: d
            }
        }
        n.d(e, {
            Z: function() {
                return normalizeComponent
            }
        })
    }
}]);
