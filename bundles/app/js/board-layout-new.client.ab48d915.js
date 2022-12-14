!function() {
    "use strict";
    !function() {
        if ("undefined" != typeof __webpack_require__) {
            var e = __webpack_require__.u
              , t = __webpack_require__.e
              , o = new Map
              , n = new Map;
            __webpack_require__.u = function(t) {
                return e(t) + (o.has(t) ? "?" + o.get(t) : "")
            }
            ,
            __webpack_require__.e = function(r) {
                return t(r).catch((function(t) {
                    var i = n.has(r) ? n.get(r) : 2;
                    if (i < 1) {
                        var s = e(r);
                        throw t.message = "Loading chunk " + r + " failed after 2 retries.\n(" + s + ")",
                        t.request = s,
                        t
                    }
                    return new Promise((function(e) {
                        setTimeout((function() {
                            var t = "cache-bust=true" + ("&retry-attempt=" + (2 - i + 1));
                            o.set(r, t),
                            n.set(r, i - 1),
                            e(__webpack_require__.e(r))
                        }
                        ), 0)
                    }
                    ))
                }
                ))
            }
        }
    }(),
    function() {
        let e;
        function supportsUnderflow() {
            return "boolean" == typeof e || (e = !!window.chrome && function performManualUnderflowCheck() {
                const e = document.createElement("div")
                  , t = document.querySelector(".board")
                  , o = getComputedStyle(t)
                  , n = t.getBoundingClientRect();
                Object.assign(e.style, {
                    width: "calc(\n      (\n        (\n          (\n            (8.8rem / 8) - var(--subtractFrom)) * var(--shf)\n          ) / var(--shf)\n        ) * 8\n      )",
                    visibility: "hidden"
                }),
                document.body.appendChild(e);
                const r = 80 === e.offsetWidth && n.width > 10 * Number(o.getPropertyValue("--boardMinWidth").slice(0, -3));
                return document.body.removeChild(e),
                r
            }(),
            e || document.querySelector("html").classList.add("cls-board")),
            e
        }
        window.supportsUnderflow = supportsUnderflow;
        function dispatchResize() {
            window.dispatchEvent(new Event("resize"))
        }
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
        var t = new class CacheService {
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
        ("json_settings");
        let o, n, r, i = null;
        function getSavedSize() {
            if (null === i || isNaN(i))
                try {
                    i = Number(t.get("boardLayoutSize"))
                } catch (e) {
                    i = null
                }
            return i
        }
        const s = 10 * parseFloat(window.getComputedStyle(document.body).getPropertyValue("--boardMinWidth"));
        function setBoardWidth(e) {
            e < s || (supportsUnderflow() ? document.body.style.setProperty("--modifiedBoardWidth", `${e}px`) : document.body.style.setProperty("--modifiedBoardWidth", e - e % 8 + "px"))
        }
        function handleCustomResize() {
            const e = document.getElementById("board-layout-controls")
              , d = "rtl" === document.querySelector("html").getAttribute("dir") ? -1 : 1;
            let a, u, c;
            function setWidth(e) {
                e ? setBoardWidth(e) : document.body.style.removeProperty("--modifiedBoardWidth")
            }
            function onResize(e) {
                n = Math.max(Math.min(null != o ? o : 1 / 0, e), s),
                setWidth(n),
                dispatchResize()
            }
            function onMouseMove(e) {
                e.preventDefault(),
                e.stopPropagation(),
                onResize(u + (e.pageX - a) * d)
            }
            function onMouseUp(e) {
                e.preventDefault(),
                e.stopPropagation(),
                c.classList.remove("resizing"),
                document.removeEventListener("mousemove", r),
                document.removeEventListener("mouseup", onMouseUp),
                o && n < o ? function saveSize(e) {
                    i = e,
                    t.set("boardLayoutSize", e),
                    t.set("new-board-layout-cache", !0)
                }(n) : (!function removeSize() {
                    i = null,
                    t.remove("boardLayoutSize")
                }(),
                supportsUnderflow() && setWidth())
            }
            !function resetCustomResize(e) {
                e && (n = getSavedSize(),
                n && (o = getBoardContainerWidth(e),
                n = Math.min(o, n),
                setBoardWidth(n)))
            }(document.querySelector(".board")),
            dispatchResize(),
            e && e.addEventListener("mousedown", (function onMouseDown(e) {
                const t = document.querySelector(".board");
                if (!e.target)
                    return;
                const i = e.target;
                /resize/.test(i.className) && (e.preventDefault(),
                e.stopPropagation(),
                c = i,
                a = e.pageX,
                u = Number(t.offsetWidth),
                setWidth(),
                o = getBoardContainerWidth(t),
                onResize(n || o),
                i.classList.add("resizing"),
                r = function debounceAnimationFrame(e) {
                    let t;
                    return function run(...o) {
                        t && cancelAnimationFrame(t),
                        t = requestAnimationFrame((()=>{
                            t = null,
                            e(...o)
                        }
                        ))
                    }
                }(onMouseMove),
                document.addEventListener("mousemove", r),
                document.addEventListener("mouseup", onMouseUp))
            }
            ))
        }
        function getBoardContainerWidth(e) {
            return e.offsetWidth + parseInt(window.getComputedStyle(e).marginLeft, 10)
        }
        var d;
        const a = null == (d = document.querySelector("#board-layout-main .board")) ? void 0 : d.getBoundingClientRect().width;
        let u = document.body.clientHeight
          , c = !1;
        function updateBoardWidthsForClsBoard(e) {
            if (c && !1 === (null == e ? void 0 : e.isTrusted) && "modeResize" !== e.type)
                return;
            const t = Array.from(document.querySelectorAll("#board-layout-main .board"))
              , o = Boolean(getSavedSize());
            t.forEach((e=>{
                document.body.clientHeight < u || !c ? setWidth(e) : o || (document.body.style.removeProperty("--modifiedBoardWidth"),
                setWidth(e))
            }
            )),
            c = !0,
            u = document.body.clientHeight
        }
        function setWidth(e) {
            const t = e.getBoundingClientRect().width || a;
            t && setBoardWidth(t)
        }
        !function init() {
            !function handleClsBoard() {
                supportsUnderflow() || ["resize", "modeResize"].forEach((e=>window.addEventListener(e, updateBoardWidthsForClsBoard, !0)))
            }(),
            function handleResize() {
                document.addEventListener("DOMContentLoaded", handleCustomResize)
            }()
        }()
    }()
}();
