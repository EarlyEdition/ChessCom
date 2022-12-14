"use strict";
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[442], {
    18442: function(e, t, o) {
        o.r(t),
        o.d(t, {
            createRenderer: function() {
                return createDefaultRenderer
            }
        });
        var n, r, i = o(12117);
        function getCoordsFromSquare(e, t) {
            const o = function getAbsoluteFileRankFromSan(e, t) {
                const o = (0,
                i.g)(e);
                return t ? {
                    file: 9 - o.file,
                    rank: 9 - o.rank
                } : o
            }(e, t);
            return {
                x: 100 * o.file - 100,
                y: 100 * (8 - o.rank)
            }
        }
        (r = n || (n = {}))[r.Slide = 0] = "Slide",
        r[r.FadeOut = 1] = "FadeOut";
        const s = "element-pool";
        var a, c;
        function createElementPool({appendTo: e, elementType: t="div", insertBefore: o, startingCount: n=0}) {
            if (!e && !o)
                throw new i.C({
                    code: i.E.BadData,
                    message: 'When creating an element pool, you must provide an element to "appendTo" or "insertBefore".'
                });
            const r = Array(n).fill(void 0).map(createElement).map(hideElement);
            return {
                destroy: function destroy() {
                    r.forEach((e=>{
                        var t;
                        return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                    }
                    )),
                    r.length = 0
                },
                get: function get() {
                    return function showElement(e) {
                        return e.className = "",
                        e
                    }(r.pop() || createElement())
                },
                put: function put(e) {
                    return hideElement(e),
                    r.push(e),
                    e
                }
            };
            function createElement() {
                var n;
                const r = document.createElement(t);
                return r.className = s,
                e ? e.appendChild(r) : null == (n = null == o ? void 0 : o.parentNode) || n.insertBefore(r, o),
                r
            }
            function hideElement(e) {
                for (const t in e.dataset)
                    e.dataset[t] && (e.dataset[t] = "");
                return e.className = s,
                e.style.cssText = "",
                e
            }
        }
        (c = a || (a = {})).Created = "Created",
        c.DetailsSet = "DetailsSet",
        c.DragEnded = "DragEnd",
        c.DragStarted = "DragStart",
        c.PieceShown = "PieceShown",
        c.PieceHidden = "PieceHidden",
        c.PositionSetBySquare = "PositionSetBySquare";
        var l = o(95653)
          , d = Object.defineProperty
          , u = Object.defineProperties
          , m = Object.getOwnPropertyDescriptors
          , f = Object.getOwnPropertySymbols
          , g = Object.prototype.hasOwnProperty
          , y = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,o)=>t in e ? d(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: o
        }) : e[t] = o
          , __spreadValues = (e,t)=>{
            for (var o in t || (t = {}))
                g.call(t, o) && __defNormalProp(e, o, t[o]);
            if (f)
                for (var o of f(t))
                    y.call(t, o) && __defNormalProp(e, o, t[o]);
            return e
        }
          , __spreadProps = (e,t)=>u(e, m(t));
        const p = {
            a1: {
                x: 6.25,
                y: 93.75
            },
            a2: {
                x: 6.25,
                y: 81.25
            },
            a3: {
                x: 6.25,
                y: 68.75
            },
            a4: {
                x: 6.25,
                y: 56.25
            },
            a5: {
                x: 6.25,
                y: 43.75
            },
            a6: {
                x: 6.25,
                y: 31.25
            },
            a7: {
                x: 6.25,
                y: 18.75
            },
            a8: {
                x: 6.25,
                y: 6.25
            },
            b1: {
                x: 18.75,
                y: 93.75
            },
            b2: {
                x: 18.75,
                y: 81.25
            },
            b3: {
                x: 18.75,
                y: 68.75
            },
            b4: {
                x: 18.75,
                y: 56.25
            },
            b5: {
                x: 18.75,
                y: 43.75
            },
            b6: {
                x: 18.75,
                y: 31.25
            },
            b7: {
                x: 18.75,
                y: 18.75
            },
            b8: {
                x: 18.75,
                y: 6.25
            },
            c1: {
                x: 31.25,
                y: 93.75
            },
            c2: {
                x: 31.25,
                y: 81.25
            },
            c3: {
                x: 31.25,
                y: 68.75
            },
            c4: {
                x: 31.25,
                y: 56.25
            },
            c5: {
                x: 31.25,
                y: 43.75
            },
            c6: {
                x: 31.25,
                y: 31.25
            },
            c7: {
                x: 31.25,
                y: 18.75
            },
            c8: {
                x: 31.25,
                y: 6.25
            },
            d1: {
                x: 43.75,
                y: 93.75
            },
            d2: {
                x: 43.75,
                y: 81.25
            },
            d3: {
                x: 43.75,
                y: 68.75
            },
            d4: {
                x: 43.75,
                y: 56.25
            },
            d5: {
                x: 43.75,
                y: 43.75
            },
            d6: {
                x: 43.75,
                y: 31.25
            },
            d7: {
                x: 43.75,
                y: 18.75
            },
            d8: {
                x: 43.75,
                y: 6.25
            },
            e1: {
                x: 56.25,
                y: 93.75
            },
            e2: {
                x: 56.25,
                y: 81.25
            },
            e3: {
                x: 56.25,
                y: 68.75
            },
            e4: {
                x: 56.25,
                y: 56.25
            },
            e5: {
                x: 56.25,
                y: 43.75
            },
            e6: {
                x: 56.25,
                y: 31.25
            },
            e7: {
                x: 56.25,
                y: 18.75
            },
            e8: {
                x: 56.25,
                y: 6.25
            },
            f1: {
                x: 68.75,
                y: 93.75
            },
            f2: {
                x: 68.75,
                y: 81.25
            },
            f3: {
                x: 68.75,
                y: 68.75
            },
            f4: {
                x: 68.75,
                y: 56.25
            },
            f5: {
                x: 68.75,
                y: 43.75
            },
            f6: {
                x: 68.75,
                y: 31.25
            },
            f7: {
                x: 68.75,
                y: 18.75
            },
            f8: {
                x: 68.75,
                y: 6.25
            },
            g1: {
                x: 81.25,
                y: 93.75
            },
            g2: {
                x: 81.25,
                y: 81.25
            },
            g3: {
                x: 81.25,
                y: 68.75
            },
            g4: {
                x: 81.25,
                y: 56.25
            },
            g5: {
                x: 81.25,
                y: 43.75
            },
            g6: {
                x: 81.25,
                y: 31.25
            },
            g7: {
                x: 81.25,
                y: 18.75
            },
            g8: {
                x: 81.25,
                y: 6.25
            },
            h1: {
                x: 93.75,
                y: 93.75
            },
            h2: {
                x: 93.75,
                y: 81.25
            },
            h3: {
                x: 93.75,
                y: 68.75
            },
            h4: {
                x: 93.75,
                y: 56.25
            },
            h5: {
                x: 93.75,
                y: 43.75
            },
            h6: {
                x: 93.75,
                y: 31.25
            },
            h7: {
                x: 93.75,
                y: 18.75
            },
            h8: {
                x: 93.75,
                y: 6.25
            }
        }
          , h = i.U.WIDTH / 2
          , S = i.U.HEAD_HEIGHT
          , v = i.U.TAIL_PADDING
          , x = i.U.HEAD_WIDTH / 2;
        function createStraightArrow({from: e, polygon: t, to: o}) {
            const n = (0,
            i.N)({
                from: e,
                to: o
            });
            return t.setAttribute("transform", `rotate(${n} ${e.x} ${e.y})`),
            t.setAttribute("points", function getStraightArrowPoints({from: e, to: t}) {
                const o = (0,
                i.K)({
                    from: e,
                    to: t
                });
                return `\n    ${e.x - h} ${e.y + v},\n    ${e.x - h} ${e.y + o - S},\n    ${e.x - x} ${e.y + o - S},\n    ${e.x} ${e.y + o},\n    ${e.x + x} ${e.y + o - S},\n    ${e.x + h} ${e.y + o - S},\n    ${e.x + h} ${e.y + v}\n  `.trim()
            }({
                from: e,
                to: o
            })),
            t
        }
        const P = i.U.WIDTH / 2
          , E = i.U.HEAD_HEIGHT
          , C = i.U.TAIL_PADDING
          , b = i.U.HEAD_WIDTH / 2;
        function createKnightArrow({from: e, polygon: t, slope: o, to: n}) {
            let r = `rotate(${(0,
            i.M)({
                from: e,
                slope: o,
                to: n
            })} ${e.x} ${e.y})`;
            return i.S.includes(o) && (r += ` scale(-1, 1) translate(-${2 * e.x}, 0)`),
            t.setAttribute("transform", r),
            t.setAttribute("points", function getKnightArrowPoints({from: e}) {
                return `\n    ${e.x - P} ${e.y + C},\n    ${e.x - P} ${e.y + 25 + P},\n    ${e.x + 12.5 - E} ${e.y + 25 + P},\n    ${e.x + 12.5 - E} ${e.y + 25 + b},\n    ${e.x + 12.5} ${e.y + 25},\n    ${e.x + 12.5 - E} ${e.y + 25 - b},\n    ${e.x + 12.5 - E} ${e.y + 25 - P},\n    ${e.x + P} ${e.y + 25 - P},\n    ${e.x + P} ${e.y + C}\n  `.trim()
            }({
                from: e
            })),
            t
        }
        function createArrowsMethods({board: e}) {
            const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            t.setAttribute("viewBox", "0 0 100 100"),
            t.classList.add("arrows"),
            e.addToDom({
                el: t,
                type: i.cn.Arrows
            });
            const o = new Map;
            return {
                addArrows: function addArrows(e, n) {
                    e.forEach((e=>{
                        const r = function createArrow(e, t) {
                            if (!e.key)
                                return;
                            const {color: o, from: n, opacity: r, to: s} = e.data
                              , a = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                            a.setAttribute("id", `arrow-${n}${s}`),
                            a.setAttribute("data-arrow", `${n}${s}`),
                            a.setAttribute("class", "arrow");
                            const {arrowColors: c} = t.options;
                            a.style.fill = (0,
                            i.p)(o, c),
                            r && (a.style.opacity = String(r));
                            const l = p[n]
                              , d = p[s];
                            if (!l || !d)
                                return;
                            const u = (0,
                            i.K)({
                                from: l,
                                to: d
                            })
                              , m = (0,
                            i.L)({
                                from: l,
                                to: d
                            });
                            return i.cl.includes(m) && u === i.cm ? createKnightArrow({
                                from: l,
                                polygon: a,
                                slope: m,
                                to: d
                            }) : createStraightArrow({
                                from: l,
                                polygon: a,
                                to: d
                            })
                        }(e, n);
                        r && (t.appendChild(r),
                        o.set(e.key, r))
                    }
                    ))
                },
                removeArrows: function removeArrows(e) {
                    e.forEach((e=>{
                        const {key: n} = e
                          , r = o.get(n);
                        r && (t.removeChild(r),
                        o.delete(n))
                    }
                    ))
                }
            }
        }
        function createStyleDOM({boardStyles: e, options: t, pieceStyles: o}) {
            return updateStyles(t),
            {
                destroy: function destroy() {
                    const e = document.getElementById(getStyleId());
                    if (!e || !e.parentNode)
                        return;
                    e.parentNode.removeChild(e)
                },
                getStyleEl: getStyleEl,
                updateStyles: updateStyles
            };
            function getStyleEl() {
                return document.getElementById(getStyleId())
            }
            function getStyleId() {
                return t.useSharedStyleTag ? "board-styles-shared" : `board-styles-${t.id}`
            }
            function updateStyles(t) {
                const n = getStyleId();
                let r = getStyleEl();
                if (!r) {
                    r = document.createElement("style"),
                    r.type = "text/css",
                    r.id = n;
                    const e = document.head;
                    e && e.appendChild(r)
                }
                const s = function getStyleInnerHTML(t) {
                    const {boardStyle: n, id: r, pieceStyle: s} = t
                      , {path: a, format: c, isPseudo3d: l} = o[s]
                      , d = (0,
                    i.$)(a)
                      , u = e[n]
                      , m = l ? "::after" : ""
                      , f = i.co.reduce(((e,t)=>`${e}#board-${r} .piece.${t}${m}, #board-${r} .promotion-piece.${t}${m} { background-image: url('${d}/${t}.${c}'); }`), "");
                    return `\n      #board-${r}, .fade-in-overlay { background-image: url('${(0,
                    i._)(u[2])}'); }\n      .coordinate-light { fill: ${u[0]}; } .coordinate-dark { fill: ${u[1]}; } .highlight { background-color: ${u[4]}; }\n      ${f}\n    `
                }(t);
                r.innerHTML !== s && (r.innerHTML = s)
            }
        }
        function createBoard({el: e, options: t, testElement: o=i.i.Board}) {
            var n;
            const r = {
                [i.cn.Coordinates]: document.createComment("/Coordinates"),
                [i.cn.Squares]: document.createComment("/Squares"),
                [i.cn.BlinkingHighlights]: document.createComment("/Blinking Highlights"),
                [i.cn.Effects]: document.createComment("/Effects"),
                [i.cn.HoverSquare]: document.createComment("/Hover Square"),
                [i.cn.Pieces]: document.createComment("/Pieces"),
                [i.cn.MoveHints]: document.createComment("/MoveHints"),
                [i.cn.CaptureHints]: document.createComment("/Capture Hints"),
                [i.cn.Arrows]: document.createComment("/Arrows"),
                [i.cn.PromotionWindow]: document.createComment("/Promotion Window"),
                [i.cn.FadeSetup]: document.createComment("/Fade Setup")
            };
            Object.values(r).forEach((t=>e.appendChild(t)));
            let s = (0,
            i.cp)();
            return null == (n = s.resolve) || n.call(s, !0),
            t.test && (0,
            i.s)(e, {
                [i.T.Element]: o
            }),
            {
                addToDom: function addToDom({type: t, el: o, insertAfter: n=!1}) {
                    n ? e.insertBefore(o, r[t].nextSibling) : e.insertBefore(o, r[t])
                },
                animationComplete: function animationComplete(e) {
                    if (![i.A.All, i.A.Move].includes(e))
                        return Promise.resolve(!0);
                    return s.promise
                },
                el: e,
                flipBoard: function flipBoard(t, o) {
                    if (e.classList.toggle(i.aS.Flipped, t),
                    null == o ? void 0 : o.options.allowMarkings) {
                        const t = o.api.markings.getAllWhere({
                            types: [i.cq]
                        });
                        t.length > 0 && function updateTuckedEffects(t, o) {
                            t.forEach((t=>{
                                var n;
                                const {data: {square: r}, key: s} = t
                                  , a = null == (n = null == o ? void 0 : o.getEffectElements) ? void 0 : n.call(o).get(s);
                                if (a)
                                    return a.classList.contains("tuck-right") || a.classList.contains("tuck-top") ? (a.classList.remove("tuck-right"),
                                    void a.classList.remove("tuck-top")) : void ((0,
                                    i.cr)(r) && (0,
                                    i.cs)({
                                        square: r,
                                        isFlipped: e.classList.contains("flipped"),
                                        effectEl: a
                                    }))
                            }
                            ))
                        }(t, o.renderer)
                    }
                },
                setBoardEnabled: function setBoardEnabled() {},
                isAnimating: function isAnimating() {
                    return Boolean(e.dataset.testAnimating)
                },
                isFlipped: function isFlipped() {
                    return t.flipped
                },
                placeholders: r,
                setAnimatingStatus: function setAnimatingStatus(t) {
                    var o;
                    t ? (e.dataset.testAnimating = "true",
                    s = (0,
                    i.cp)()) : (delete e.dataset.testAnimating,
                    null == (o = s.resolve) || o.call(s, !0))
                }
            }
        }
        function getTextNodes(e, t) {
            const o = function getTextChar(e) {
                const t = ["8", "7", "6", "5", "4", "3", "2", "1", "a", "b", "c", "d", "e", "f", "g", "h"];
                return e ? [...t.slice(0, 8).reverse(), ...t.slice(-8).reverse()] : t
            }(t)
              , n = function getCoordinates(e) {
                return e === i.B.CoordinatesPositions.Outside ? [{
                    color: "grey",
                    fontSize: 3.1,
                    x: 2,
                    y: 3.5
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 2,
                    y: 16
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 2,
                    y: 28.5
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 2,
                    y: 41
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 2,
                    y: 53.5
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 2,
                    y: 66
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 2,
                    y: 78.5
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 2,
                    y: 91
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 10.35,
                    y: 99.25
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 22.85,
                    y: 99.25
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 35.35,
                    y: 99.25
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 47.85,
                    y: 99.25
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 60.35,
                    y: 99.25
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 72.85,
                    y: 99.25
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 85.35,
                    y: 99.25
                }, {
                    color: "grey",
                    fontSize: 3.1,
                    x: 97.85,
                    y: 99.25
                }] : [{
                    color: "light",
                    fontSize: 2.8,
                    x: .75,
                    y: 3.5
                }, {
                    color: "dark",
                    fontSize: 2.8,
                    x: .75,
                    y: 15.75
                }, {
                    color: "light",
                    fontSize: 2.8,
                    x: .75,
                    y: 28.25
                }, {
                    color: "dark",
                    fontSize: 2.8,
                    x: .75,
                    y: 40.75
                }, {
                    color: "light",
                    fontSize: 2.8,
                    x: .75,
                    y: 53.25
                }, {
                    color: "dark",
                    fontSize: 2.8,
                    x: .75,
                    y: 65.75
                }, {
                    color: "light",
                    fontSize: 2.8,
                    x: .75,
                    y: 78.25
                }, {
                    color: "dark",
                    fontSize: 2.8,
                    x: .75,
                    y: 90.75
                }, {
                    color: "dark",
                    fontSize: 2.8,
                    x: 10,
                    y: 99
                }, {
                    color: "light",
                    fontSize: 2.8,
                    x: 22.5,
                    y: 99
                }, {
                    color: "dark",
                    fontSize: 2.8,
                    x: 35,
                    y: 99
                }, {
                    color: "light",
                    fontSize: 2.8,
                    x: 47.5,
                    y: 99
                }, {
                    color: "dark",
                    fontSize: 2.8,
                    x: 60,
                    y: 99
                }, {
                    color: "light",
                    fontSize: 2.8,
                    x: 72.5,
                    y: 99
                }, {
                    color: "dark",
                    fontSize: 2.8,
                    x: 85,
                    y: 99
                }, {
                    color: "light",
                    fontSize: 2.8,
                    x: 97.5,
                    y: 99
                }]
            }(e);
            return n.map(((e,t)=>__spreadProps(__spreadValues({}, e), {
                text: o[t]
            }))).map((e=>`<text \n          x="${e.x}" \n          y="${e.y}" \n          ${e.fontSize ? `font-size="${e.fontSize}"` : ""} \n          class="coordinate-${e.color}">${e.text}</text>`)).join("")
        }
        function createCoordinatesMethods({board: e, options: t}) {
            return {
                setCoordinates: function setCoordinates({flipped: o, position: n}) {
                    if (removeCoordinates(),
                    n === i.B.CoordinatesPositions.Off)
                        return;
                    !function addCoordinates(o, n) {
                        const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        r.setAttribute("viewBox", "0 0 100 100"),
                        r.classList.add("coordinates"),
                        o === i.B.CoordinatesPositions.Outside && r.classList.add("outside");
                        t.test && (0,
                        i.s)(r, {
                            [i.T.Element]: i.i.Coordinates,
                            [i.T.Flipped]: n.toString(),
                            [i.T.Position]: o
                        });
                        r.innerHTML = getTextNodes(o, n),
                        e.addToDom({
                            el: r,
                            type: i.cn.Coordinates
                        })
                    }(n, o)
                }
            };
            function removeCoordinates() {
                const t = e.el.querySelector(".coordinates");
                t && t.parentNode.removeChild(t)
            }
        }
        function createFadeSetupMethods({board: e}) {
            let t;
            return {
                fadeSetup: function fadeSetup({options: o}) {
                    if (0 === o.fadeSetup)
                        return void (t && function removeFadeInOverlay() {
                            t && t.remove();
                            t = void 0
                        }());
                    t || function createFadeInOverlay(o) {
                        t = document.createElement("div"),
                        t.classList.add("fade-in-overlay"),
                        e.addToDom({
                            el: t,
                            type: i.cn.FadeSetup
                        }),
                        t.addEventListener("animationend", removeAnimation),
                        o.test && (0,
                        i.s)(t, {
                            [i.T.Element]: i.i.FadeInOverlay
                        })
                    }(o);
                    t && (t.style.animationDuration = o.fadeSetup / 1e3 + "s",
                    t.classList.add("animate"))
                }
            };
            function removeAnimation() {
                t && (t.style.animationDuration = "",
                t.classList.remove("animate"))
            }
        }
        function generateFadeOutSteps({animation: e, numSteps: t}) {
            return Array(t).fill(void 0).map(((o,n,r)=>{
                let i;
                let s = 2.86 - 2.86 * ((n + 1) / t);
                return s = s > 1 ? 1 : s,
                n === r.length - 1 && e.callback && (i = e.callback),
                {
                    callback: i,
                    el: e.el,
                    style: {
                        opacity: s.toString()
                    }
                }
            }
            ))
        }
        function generateSlideSteps({animation: e, isFlipped: t=!1, numSteps: o}) {
            const {el: n, from: r, to: i} = e;
            if (!r || !i)
                return [];
            const s = getCoordsFromSquare(r, t)
              , a = getCoordsFromSquare(i, t);
            if (!s || !a)
                return [];
            const c = (a.x - s.x) / o
              , l = (a.y - s.y) / o;
            return Array(o).fill(void 0).map(((e,t)=>{
                const r = t === o - 1
                  , i = r ? a : {
                    x: s.x + c * (t + 1),
                    y: s.y + l * (t + 1)
                };
                return {
                    el: n,
                    style: {
                        transform: r ? "" : `translate(${i.x}%, ${i.y}%)`,
                        zIndex: r ? "" : "10"
                    }
                }
            }
            ))
        }
        function createAnimations(e) {
            let t;
            const o = []
              , r = {
                [n.FadeOut]: generateFadeOutSteps,
                [n.Slide]: generateSlideSteps
            };
            return {
                add: function add(e, t) {
                    const {animationType: n, flipped: s} = t
                      , a = Math.max(Math.floor(function getDuration(e) {
                        switch (e) {
                        case i.B.Animation.Types.Slow:
                            return i.B.Animation.Speeds.Slow;
                        case i.B.Animation.Types.Fast:
                            return i.B.Animation.Speeds.Fast;
                        case i.B.Animation.Types.None:
                            return 0;
                        default:
                            return i.B.Animation.Speeds.Default
                        }
                    }(n) / 16), 1);
                    e.map((e=>r[e.type]({
                        animation: e,
                        isFlipped: s || !1,
                        numSteps: a
                    }))).forEach((e=>{
                        if (e.length > o.length) {
                            const t = Array(e.length - o.length).fill([]);
                            o.unshift(...t)
                        }
                        e.forEach(((e,t,n)=>{
                            const r = n.length - t;
                            o[o.length - r] = [...o[o.length - r], e]
                        }
                        ))
                    }
                    ))
                },
                flush: function flush() {
                    if (0 === o.length)
                        return void (t = !0);
                    o.splice(0, o.length - 1),
                    run()
                },
                run: run
            };
            function run() {
                t = o.length < 2;
                const n = o.shift();
                n && (e.isAnimating() || e.setAnimatingStatus(!0),
                n.forEach((e=>{
                    Object.entries(e.style).forEach((([t,o])=>{
                        e.el.style[t] = o
                    }
                    )),
                    e.callback && e.callback()
                }
                )),
                0 === o.length && e.setAnimatingStatus(!1),
                t || requestAnimationFrame((()=>{
                    run()
                }
                )))
            }
        }
        function createPiece({details: e, el: t, emitter: o, test: n}) {
            let r;
            const s = __spreadValues({}, e);
            return t.classList.add("piece"),
            o.emit(a.Created, __spreadValues({}, s)),
            setDetails(s.color, s.type),
            setPositionBySquare$1(s.square),
            n && (0,
            i.s)(t, {
                [i.T.Element]: i.i.Piece
            }),
            {
                el: t,
                getDetails: function getDetails() {
                    return e
                },
                setDetails: setDetails,
                setDraggingState: function setDraggingState(r) {
                    if (r)
                        return t.classList.add("dragging"),
                        o.emit(a.DragStarted, __spreadValues({}, e)),
                        void (n && (0,
                        i.s)(t, {
                            [i.T.Dragging]: "true"
                        }));
                    n && (0,
                    i.s)(t, {
                        [i.T.Dragging]: void 0
                    });
                    t.classList.remove("dragging"),
                    o.emit(a.DragEnded, __spreadValues({}, e))
                },
                setPositionByCoords: function setPositionByCoords(e) {
                    if (!e)
                        return;
                    t.style.transform = `translate(${e.x}%, ${e.y}%)`
                },
                setPositionBySquare: setPositionBySquare$1
            };
            function setDetails(s, c) {
                t.classList.remove(r),
                r = function generateShortString(e, t) {
                    return `${(0,
                    i.Z)(e)}${t}`
                }(s, c),
                t.classList.add(r),
                e.type = c,
                e.color = s,
                o.emit(a.DetailsSet, __spreadProps(__spreadValues({}, e), {
                    shortString: r
                })),
                n && (0,
                i.s)(t, {
                    [i.T.Type]: c,
                    [i.T.Color]: (0,
                    i.Z)(s),
                    [i.T.ShortString]: s === i.G.ColorsAsNumbers.Black ? c : c.toUpperCase()
                })
            }
            function setPositionBySquare$1(r, s) {
                if (n) {
                    const e = (0,
                    i.g)(r);
                    if (!e)
                        return;
                    e && !s && (0,
                    i.s)(t, {
                        [i.T.File]: e.file.toString(),
                        [i.T.Rank]: e.rank.toString(),
                        [i.T.Square]: r
                    })
                }
                (0,
                i.ct)({
                    el: t,
                    square: r
                }),
                o.emit(a.PositionSetBySquare, __spreadValues({}, e))
            }
        }
        function createPieceMovementMethods({board: e, emitter: t, options: o}) {
            const r = function createPieces({board: e, emitter: t, options: o}) {
                const r = createElementPool({
                    insertBefore: e.placeholders.pieces,
                    startingCount: 32
                })
                  , s = createAnimations(e);
                let c;
                const l = (0,
                i.cv)();
                return {
                    animations: s,
                    create: function create(e) {
                        const n = createPiece({
                            details: e,
                            el: r.get(),
                            emitter: t,
                            test: o.test
                        });
                        return l.set(e.square, n),
                        t.emit(a.PieceShown, __spreadValues({}, l.get(e.square))),
                        n
                    },
                    destroy: function destroy() {
                        r.destroy()
                    },
                    get: get,
                    getDraggingSquare: getDraggingSquare,
                    move: function move(e, t) {
                        const o = Array.isArray(e) ? e : [e]
                          , r = o.filter(Boolean).map((e=>e.kingTo || e.to))
                          , a = o.filter(Boolean).map((e=>get(e.from)))
                          , c = [];
                        o.forEach(((e,t)=>{
                            if (!e)
                                throw new i.C({
                                    code: i.E.ElementNotFound,
                                    message: "Move object does not exist."
                                });
                            const o = e.kingTo || e.to;
                            o && (a[t].setPositionBySquare(o),
                            e.animate && c.push({
                                el: a[t].el,
                                from: e.from,
                                to: o,
                                type: n.Slide
                            }),
                            l.set(o, a[t]),
                            r.includes(e.from) || l.deleteItem(e.from),
                            e.promotion && l.get(o).setDetails(e.color, e.promotion))
                        }
                        )),
                        c.length && s.add(c, t)
                    },
                    remove: function remove({animate: e, options: o, squares: d}) {
                        const u = [];
                        d.forEach((o=>{
                            if (!l.isDefined(o))
                                return;
                            const s = get(o).el;
                            function removeElement() {
                                if (!s)
                                    throw new i.C({
                                        code: i.E.ElementNotFound,
                                        data: {
                                            square: o
                                        },
                                        message: "Piece does not exist. Cannot remove."
                                    });
                                r.put(s),
                                t.emit(a.PieceHidden, o)
                            }
                            e ? u.push({
                                callback: removeElement,
                                el: get(o).el,
                                type: n.FadeOut
                            }) : removeElement(),
                            l.deleteItem(o)
                        }
                        )),
                        u.length && s.add(u, o),
                        c && !l.isDefined(c) && (c = void 0)
                    },
                    setDraggingState: setDraggingState,
                    setPositionByCoords: function setPositionByCoords(e, t) {
                        const o = get(e)
                          , n = getDraggingSquare();
                        n && setDraggingState(n, !1),
                        o.setPositionByCoords(t)
                    },
                    setPositionBySquare: function setPositionBySquare2(e, t) {
                        const o = get(e);
                        t !== e && (l.set(t, l.get(e)),
                        l.deleteItem(e)),
                        o.setPositionBySquare(t)
                    },
                    suspendOverSquare: function suspendOverSquare(e, t) {
                        get(e).setPositionBySquare(t, !0)
                    }
                };
                function get(e, t=!0) {
                    if (!e)
                        return l;
                    if (!l.isDefined(e) && t)
                        throw new i.C({
                            code: i.E.ElementNotFound,
                            data: {
                                square: e
                            },
                            message: "Piece does not exist."
                        });
                    return l.isDefined(e) ? l.get(e) : void 0
                }
                function getDraggingSquare() {
                    return c
                }
                function setDraggingState(e, t) {
                    get(e).setDraggingState(t),
                    c = t ? e : void 0
                }
            }({
                board: e,
                emitter: t,
                options: o
            });
            return {
                destroy: r.destroy,
                dragPiece: function dragPiece(e) {
                    if (!e)
                        return;
                    e.toSquare ? r.suspendOverSquare(e.square, e.toSquare) : e.coords && r.setPositionByCoords(e.square, e.coords);
                    r.setDraggingState(e.square, !0)
                },
                dropPiece: function dropPiece() {
                    const e = r.getDraggingSquare();
                    if (!e)
                        return;
                    r.setPositionBySquare(e, e),
                    r.setDraggingState(e, !1)
                },
                illegalMove: function illegalMove(e, t) {
                    if (e) {
                        const {renderer: s} = t;
                        null == s || s.blinkHighlights([(n = e,
                        r = o.checkBlinkingSquareColor,
                        {
                            data: {
                                color: r,
                                interval: 500,
                                opacity: .5,
                                square: n,
                                times: 3
                            },
                            key: n,
                            type: i.cu
                        })], t)
                    }
                    var n, r
                },
                loadPieces: function loadPieces(e, t) {
                    const o = e.pieces;
                    r.animations.flush();
                    const n = o.keys()
                      , i = r.get().keys().filter((e=>!n.includes(e)));
                    r.remove({
                        options: t.options,
                        squares: i
                    }),
                    o.keys().forEach((e=>{
                        const t = o.get(e)
                          , n = r.get(e, !1);
                        if (!n)
                            return void r.create(t);
                        const {type: i, color: s} = n.getDetails();
                        i === t.type && s === t.color || n.setDetails(t.color, t.type)
                    }
                    )),
                    r.animations.run()
                },
                makeMove: function makeMove(e, t) {
                    if (r.animations.flush(),
                    e.drop)
                        return void r.create({
                            color: e.color,
                            square: e.kingTo || e.to,
                            type: e.piece
                        });
                    e.EPCapturedSquare ? r.remove({
                        animate: e.animate,
                        options: t.options,
                        squares: [e.EPCapturedSquare]
                    }) : r.get(e.to, !1) && !(0,
                    i.k)(e) && r.remove({
                        animate: e.animate,
                        options: t.options,
                        squares: [e.to]
                    });
                    const o = [e, e.rookMove].filter(Boolean);
                    r.move(o, t.options),
                    r.animations.run()
                },
                removePiece: removePiece,
                undoMove: function undoMove(e, t) {
                    if (r.animations.flush(),
                    e.drop)
                        return void removePiece(e.to, t);
                    const {movedPieces: o, restoredPiece: n, promotedSquare: s} = (0,
                    i.o)(e);
                    r.move(o, t.options),
                    n && r.create(n);
                    if (s) {
                        const e = r.get(s)
                          , {color: t} = e.getDetails();
                        e.setDetails(t, i.G.Piece.Types.Pawn)
                    }
                    r.animations.run()
                }
            };
            function removePiece(e, t) {
                r.remove({
                    options: t.options,
                    squares: [e]
                })
            }
        }
        function createPromotionWindowMethods({board: e, options: t}) {
            let o, n;
            const r = {
                b: void 0,
                n: void 0,
                q: void 0,
                r: void 0
            };
            return {
                closePromotionWindow: function closePromotionWindow() {
                    if (!o)
                        throw new i.C({
                            code: i.E.ElementNotFound,
                            message: "Promotion window does not exist."
                        });
                    o.style.display = "none"
                },
                openPromotionWindow: function openPromotionWindow(s, a) {
                    const {options: {flipped: c}, run: l} = a
                      , {color: d, file: u, position: m} = function getPromotionWindowDetails({flipped: e, promotionMove: t}) {
                        let o;
                        o = e ? t.color === i.G.ColorsAsNumbers.White ? "bottom" : "top" : t.color === i.G.ColorsAsNumbers.White ? "top" : "bottom";
                        const n = t.color
                          , r = (e ? "hgfedcba" : "abcdefgh").indexOf(t.to.slice(0, 1)) + 1;
                        return {
                            color: n,
                            file: r,
                            position: o
                        }
                    }({
                        flipped: c,
                        promotionMove: s
                    });
                    o || function createPromotionWindow() {
                        o = document.createElement("div"),
                        o.classList.add("promotion-window"),
                        t.test && (0,
                        i.s)(o, {
                            [i.T.Element]: i.i.PromotionWindow
                        });
                        e.addToDom({
                            el: o,
                            type: i.cn.PromotionWindow
                        })
                    }();
                    n || function createCloseButton(e) {
                        n = document.createElement("i"),
                        n.className = "close-button icon-font-chess x",
                        t.test && (0,
                        i.s)(n, {
                            [i.T.Element]: i.i.PromotionCloseButton
                        });
                        o.appendChild(n),
                        n.addEventListener(i.P, (t=>{
                            t.stopPropagation(),
                            e((0,
                            i.t)(i.u.BoardEvents.PromotionAreaClosePointerdown))
                        }
                        ))
                    }(l);
                    r.q || function createPieces2(e) {
                        Object.keys(r).forEach((n=>{
                            const s = document.createElement("div");
                            s.addEventListener(i.P, (t=>{
                                t.stopPropagation(),
                                (0,
                                i.x)(t) ? e((0,
                                i.t)(i.u.UserEvents.PointerdownRight)) : e((0,
                                i.t)(i.u.BoardEvents.PromotionPiecePointerdown, {
                                    piece: n
                                }))
                            }
                            )),
                            s.classList.add("promotion-piece"),
                            r[n] = s,
                            t.test && (0,
                            i.s)(r[n], {
                                [i.T.Element]: i.i.PromotionPiece,
                                [i.T.Type]: n
                            }),
                            o.appendChild(s)
                        }
                        ))
                    }(l);
                    setPieceOrder(m),
                    setPromotionWindowFile(u),
                    setPieceColors(d),
                    t.test && (0,
                    i.s)(o, {
                        [i.T.Color]: (0,
                        i.Z)(d),
                        [i.T.File]: u.toString(),
                        [i.T.Position]: m
                    });
                    !function showPromotionWindow() {
                        o.style.display = ""
                    }()
                }
            };
            function setPieceColors(e) {
                Object.keys(r).forEach((o=>{
                    r[o].className = `promotion-piece ${(0,
                    i.Z)(e)}${o}`,
                    t.test && (0,
                    i.s)(r[o], {
                        [i.T.Color]: (0,
                        i.Z)(e)
                    })
                }
                ))
            }
            function setPieceOrder(e) {
                "top" === e ? o.classList.add("top") : o.classList.remove("top")
            }
            function setPromotionWindowFile(e) {
                o.style.transform = `translateX(${100 * (e - 1)}%`
            }
        }
        function createHighlightsMethods({board: e, options: t}) {
            const o = createElementPool({
                insertBefore: e.placeholders.squares,
                startingCount: 3
            })
              , n = (0,
            i.cv)()
              , r = t.test;
            return {
                addHighlights: function addHighlights(e) {
                    e.forEach((e=>{
                        const {square: t} = e.data;
                        if (n.isDefined(t) || !e)
                            return;
                        const o = createHighlightEl(t, e);
                        n.set(t, o)
                    }
                    ))
                },
                blinkHighlights: function blinkHighlights(t) {
                    t.forEach((t=>{
                        const {color: o, interval: n, opacity: s, square: a, times: c} = t.data
                          , l = createHighlightEl(a, t);
                        e.addToDom({
                            el: l,
                            type: i.cn.BlinkingHighlights
                        }),
                        r && (0,
                        i.s)(l, {
                            [i.T.Element]: i.i.BlinkingHighlight,
                            [i.T.Square]: a,
                            [i.T.Color]: o,
                            [i.T.Interval]: n,
                            [i.T.Opacity]: s,
                            [i.T.Times]: c,
                            [i.T.Type]: i.T.Blinking
                        }),
                        function blinkHighlight({el: e, interval: t, opacity: o, times: n}) {
                            let r = 0
                              , i = !0;
                            const s = setInterval((()=>{
                                if (r += 1,
                                r !== 2 * n)
                                    i ? (e.style.opacity = "0",
                                    i = !1) : (e.style.opacity = o.toString(),
                                    i = !0);
                                else if (clearInterval(s),
                                e) {
                                    const t = e.parentNode;
                                    t && t.removeChild(e)
                                }
                            }
                            ), t / 2)
                        }({
                            el: l,
                            interval: n,
                            opacity: s,
                            times: c
                        })
                    }
                    ))
                },
                removeHighlights: function removeHighlights(e) {
                    e.forEach(removeHighlight)
                }
            };
            function createHighlightEl(e, t) {
                const n = o.get();
                return (0,
                i.s)(n, {
                    [i.T.Element]: i.i.Highlight
                }),
                n.classList.add("highlight"),
                function updateHighlightElementStyles(e, t) {
                    if (!e)
                        throw new i.C({
                            code: i.E.ElementNotFound,
                            data: {
                                highlight: t
                            },
                            message: "Highlight does not exist."
                        });
                    const {data: {color: o, opacity: n}} = t
                      , r = o || ""
                      , s = String(n);
                    e.style.backgroundColor !== r && (e.style.backgroundColor = r);
                    e.style.opacity !== s && (e.style.opacity = s)
                }(n, t),
                (0,
                i.ct)({
                    el: n,
                    square: e
                }),
                n
            }
            function removeHighlight(e) {
                const {square: t} = e.data;
                if (!n.isDefined(t))
                    return;
                const r = n.get(t);
                o.put(r),
                n.deleteItem(t)
            }
        }
        function getPointerPosition({el: e, event: t, flipped: o}) {
            const n = e.getBoundingClientRect()
              , {x: r, y: s} = (0,
            i.v)(t)
              , a = n.width / 8
              , c = {
                x: Math.round((r - n.left) % a),
                y: Math.round((s - n.top) % a)
            }
              , l = Math.ceil((r - n.left) / a)
              , d = Math.ceil((n.bottom - s) / a)
              , u = o ? 9 - l : l
              , m = o ? 9 - d : d
              , f = (0,
            i.d)({
                file: u,
                rank: m
            })
              , g = {
                x: (r - n.left - a / 2) / n.width * 800,
                y: (s - n.top - a / 2) / n.height * 800
            }
              , y = function getCoordsInsideBoard(e) {
                let t = Math.max(e.x, -50);
                t = Math.min(t, 750);
                let o = Math.max(e.y, -50);
                return o = Math.min(o, 750),
                {
                    x: t,
                    y: o
                }
            }(g)
              , p = function getSquareInsideBoard(e, t) {
                let o = Math.max(e, 1);
                o = Math.min(o, 8);
                let n = Math.max(t, 1);
                return n = Math.min(n, 8),
                (0,
                i.d)({
                    file: o,
                    rank: n
                })
            }(u, m);
            return {
                coords: g,
                coordsInsideBoard: y,
                coordsInsideSquare: c,
                square: f,
                squareInsideBoard: p
            }
        }
        function createDefaultRenderer({el: e, emitter: t=(0,
        l.a)(), options: o=(0,
        i.c7)(), boardStyles: n=i.c4, pieceStyles: r=i.c5, testElement: s}) {
            const a = createBoard({
                el: e,
                options: o,
                testElement: s
            })
              , c = {
                board: a,
                el: e,
                emitter: t,
                options: o
            }
              , d = function createAssetsMethods({boardStyles: e, el: t, options: o, pieceStyles: n}) {
                const r = createStyleDOM({
                    boardStyles: e,
                    options: o,
                    pieceStyles: n
                });
                return {
                    destroy: function destroy() {
                        r.destroy()
                    },
                    updateBoardImage: function updateBoardImage(e) {
                        r.updateStyles(e.options)
                    },
                    updatePieceBaseImage: function updatePieceBaseImage(e) {
                        togglePseudo3d(e.options.pieceStyle),
                        r.updateStyles(e.options)
                    },
                    togglePseudo3d: togglePseudo3d
                };
                function togglePseudo3d(e) {
                    const o = n[e].isPseudo3d;
                    t.classList.toggle(i.aS.Pseudo3d, Boolean(o))
                }
            }(__spreadProps(__spreadValues({}, c), {
                boardStyles: n,
                pieceStyles: r
            }))
              , u = createPieceMovementMethods(c);
            a.isFlipped() && a.flipBoard(!0),
            d.togglePseudo3d(o.pieceStyle);
            const m = __spreadProps(__spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, function createAnalysisOverlayMethods({board: e}) {
                const {classList: t} = e.el;
                return {
                    addAnalysisOverlay: function addAnalysisOverlay() {
                        t.add("analysis-overlay")
                    },
                    removeAnalysisOverlay: function removeAnalysisOverlay() {
                        t.remove("analysis-overlay")
                    }
                }
            }(c)), createArrowsMethods(c)), d), createCoordinatesMethods(c)), createFadeSetupMethods(c)), function createHoverSquareMethods({board: e, options: t}) {
                const o = function createHoverSquareEl() {
                    const o = document.createElement("div")
                      , n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    return n.setAttribute("viewBox", "0 0 100 100"),
                    n.innerHTML = '<rect x="0" y="0" width="100" height="100" stroke="rgba(255, 255, 255, 0.65)" stroke-width="10" fill="none"/>',
                    o.append(n),
                    o.classList.add("hover-square"),
                    o.style.visibility = "hidden",
                    e.addToDom({
                        el: o,
                        type: i.cn.HoverSquare
                    }),
                    t.test && (0,
                    i.s)(o, {
                        [i.T.Element]: i.i.HoverSquare
                    }),
                    o
                }();
                return {
                    hideHoverSquare: function hideHoverSquare() {
                        o && (o.style.visibility = "hidden")
                    },
                    showHoverSquare: function showHoverSquare(e) {
                        o.style.visibility = "",
                        t.test && (0,
                        i.s)(o, {
                            [i.T.Element]: i.i.HoverSquare
                        }),
                        (0,
                        i.ct)({
                            el: o,
                            square: e
                        })
                    }
                }
            }(c)), function createMoveHintsMethods({board: e}) {
                const t = {};
                return {
                    addCaptureHints: function addCaptureHints(o) {
                        o.forEach((o=>{
                            t[o] && removeHint(o),
                            t[o] = createHintFromSquare(o, {
                                isPotentialCapture: !0
                            }),
                            e.addToDom({
                                el: t[o],
                                type: i.cn.CaptureHints
                            }),
                            t[o].style.borderWidth = .1 * t[o].clientWidth + "px"
                        }
                        ))
                    },
                    addMoveHints: function addMoveHints(o) {
                        o.forEach((o=>{
                            t[o] || (t[o] = createHintFromSquare(o),
                            e.addToDom({
                                el: t[o],
                                type: i.cn.MoveHints
                            }))
                        }
                        ))
                    },
                    removeHints: function removeHints(e) {
                        e.forEach(removeHint)
                    }
                };
                function createHintFromSquare(e, t={}) {
                    const o = document.createElement("div");
                    return (0,
                    i.s)(o, {
                        [i.T.Element]: t.isPotentialCapture ? i.i.PotentialCapture : i.i.Hint
                    }),
                    o.classList.add(t.isPotentialCapture ? "capture-hint" : "hint"),
                    (0,
                    i.ct)({
                        el: o,
                        square: e
                    }),
                    o
                }
                function removeHint(e) {
                    t[e] && (t[e].parentNode.removeChild(t[e]),
                    delete t[e])
                }
            }(c)), createHighlightsMethods(c)), createPromotionWindowMethods(c)), u), {
                animationComplete: a.animationComplete,
                createRenderer: createDefaultRenderer,
                destroy: function destroy() {
                    d.destroy(),
                    u.destroy(),
                    e.innerHTML = ""
                }
            }), t), {
                extendRenderer: function extendRenderer(e) {
                    Object.assign(m, e(c))
                },
                flipBoard: a.flipBoard,
                setBoardEnabled: a.setBoardEnabled,
                getCoordsFromSquare: getCoordsFromSquare,
                getPieces: function getPieces() {
                    return function formatPiecesAsObject(e) {
                        const t = {};
                        return e.forEach((e=>{
                            const o = e.className.split(" ")
                              , n = o.find((e=>e.startsWith("square-")))
                              , r = o.find((e=>e.startsWith("w") || e.startsWith("b")));
                            if (!n || !r)
                                return;
                            const [s,a] = r
                              , c = parseInt(n[n.length - 2], 10)
                              , l = parseInt(n[n.length - 1], 10)
                              , d = (0,
                            i.d)({
                                file: c,
                                rank: l
                            });
                            d && (t[d] = {
                                color: (0,
                                i.cw)(s),
                                type: a
                            })
                        }
                        )),
                        t
                    }(Array.from(e.querySelectorAll(".piece")))
                },
                getPointerPosition: getPointerPosition,
                getRendererOptions: ()=>({
                    boardStyles: n,
                    el: e,
                    options: o,
                    pieceStyles: r
                }),
                getBoardContainerAspectRatio: ()=>1,
                isAnimating: a.isAnimating,
                name: i.bx.Types.Default,
                resize: function resize() {}
            });
            return m
        }
    }
}]);
