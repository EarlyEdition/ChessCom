"use strict";
(("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis = ("undefined" != typeof self ? self : this).wpJsonpChessCom_analysis || []).push([[511], {
    65116: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return se
            }
        });
        var a = i(41252);
        const r = 120
          , n = 550
          , s = 1440;
        var l = i(24452)
          , o = i(18160);
        const c = /(M{1,2}|D{1,2}|Y{2,4}|.)/g
          , d = {
            DAY: "day",
            MONTH: "month",
            YEAR: "year"
        }
          , u = {
            YEAR_MONTH_DATE: o.Z.trans("Year + Month + Date"),
            YEAR_MONTH: o.Z.trans("Year + Month Only"),
            YEAR: o.Z.trans("Year Only")
        }
          , p = 0
          , h = 11
          , m = [o.Z.trans("January"), o.Z.trans("February"), o.Z.trans("March"), o.Z.trans("April"), o.Z.trans("May"), o.Z.trans("June"), o.Z.trans("July"), o.Z.trans("August"), o.Z.trans("September"), o.Z.trans("October"), o.Z.trans("November"), o.Z.trans("December")]
          , y = "bottom"
          , f = [o.Z.trans("Sun"), o.Z.trans("Mon"), o.Z.trans("Tue"), o.Z.trans("Wed"), o.Z.trans("Thu"), o.Z.trans("Fri"), o.Z.trans("Sat")]
          , v = {
            CALENDAR: "calendar",
            FORMAT: "format",
            MONTH: "month",
            YEAR: "year"
        }
          , g = {
            [u.YEAR]: v.YEAR,
            [u.YEAR_MONTH]: v.MONTH,
            [u.YEAR_MONTH_DATE]: v.CALENDAR
        };
        var D = {
            name: "FormDatepickerViewWrapper",
            components: {
                IconFont: i(35559).Z
            },
            props: {
                headingTitle: {
                    type: String,
                    default: ""
                }
            },
            emits: ["click-heading"],
            methods: {
                emitHeadingClick() {
                    this.$emit("click-heading")
                },
                emitIconClick(e="") {
                    this.$emit(`click-${e}-icon`)
                }
            }
        }
          , k = {
            heading: "form-datepicker-section-wrapper-heading",
            icon: "form-datepicker-section-wrapper-icon",
            title: "form-datepicker-section-wrapper-title",
            "icon-left": "form-datepicker-section-wrapper-icon-left",
            "icon-right": "form-datepicker-section-wrapper-icon-right"
        }
          , $ = i(51900);
        var w = (0,
        $.Z)(D, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", [i("div", {
                class: e.$style.heading
            }, [i("icon-font", {
                class: [e.$style.icon, e.$style["icon-left"]],
                attrs: {
                    name: "chevron-left"
                },
                on: {
                    click: function(t) {
                        return e.emitIconClick("left")
                    }
                }
            }), e._v(" "), i("span", {
                class: e.$style.title,
                domProps: {
                    textContent: e._s(e.headingTitle)
                },
                on: {
                    click: e.emitHeadingClick
                }
            }), e._v(" "), i("icon-font", {
                class: [e.$style.icon, e.$style["icon-right"]],
                attrs: {
                    name: "chevron-right"
                },
                on: {
                    click: function(t) {
                        return e.emitIconClick("right")
                    }
                }
            })], 1), e._v(" "), i("div", [e._t("default")], 2)])
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = k.locals || k
        }
        ), null, null).exports;
        const addZeros = (e,t)=>{
            const i = e.toString()
              , a = t - i.length > 0 ? t - i.length : 0;
            return `${"0".repeat(a)}${i}`
        }
          , currentDatePieceIsSelected = ({currentDate: e={}, displayDate: t={}, datePiece: i, dateValue: a})=>{
            const r = null !== a && a === e[i]
              , n = e.year === t.year
              , s = e.month === t.month;
            switch (i) {
            case d.YEAR:
                return r;
            case d.MONTH:
                return r && n;
            default:
                return r && s && n
            }
        }
          , valueWithinLimits = ({value: e, limitStart: t, limitEnd: i})=>(isNaN(Number(t)) || !t || Number(e) >= Number(t)) && (isNaN(Number(i)) || !i || Number(e) <= Number(i))
          , currentDatePieceIsDisabled = ({limits: e={}, datePiece: t, dateValue: i, displayDate: a={}})=>{
            const r = e.end || {}
              , n = e.start || {};
            switch (t) {
            case d.YEAR:
                return !valueWithinLimits({
                    value: i,
                    limitEnd: r.year,
                    limitStart: n.year
                });
            case d.MONTH:
                return !valueWithinLimits({
                    value: new Date(a.year,i),
                    limitEnd: new Date(r.year,r.month),
                    limitStart: new Date(n.year,n.month)
                });
            default:
                return !valueWithinLimits({
                    value: new Date(a.year,a.month,i),
                    limitEnd: new Date(r.year,r.month,r.day),
                    limitStart: new Date(n.year,n.month,n.day)
                })
            }
        }
          , getDateRangeForYear = e=>{
            const t = (e=>{
                const t = String(e)
                  , i = String(e / 100);
                return {
                    century: Number(t.slice(0, t.indexOf(".") - 1)),
                    year: Number(i.slice(i.indexOf(".")))
                }
            }
            )(e)
              , i = Math.ceil(100 * t.year / 20)
              , a = 100 * t.century + 20 * i
              , r = [];
            for (let n = a - 19; n <= a; n++)
                r.push(n);
            return r
        }
          , formatDate = (e,t)=>{
            const i = (e=>{
                const t = {};
                return t.D = e.getDate(),
                t.DD = addZeros(t.D, 2),
                t.M = e.getMonth() + 1,
                t.MM = addZeros(t.M, 2),
                t.YYYY = e.getFullYear(),
                t.YY = `${t.YYYY}`.slice(-2),
                t
            }
            )(e);
            return t.match(c).reduce(((e,t)=>e + (i[t] || t)), "")
        }
          , isValidDate = e=>{
            const t = new Date(e);
            return !isNaN(t.getTime())
        }
        ;
        var C = i(31663).default.extend({
            components: {
                DatepickerWrapper: w
            },
            props: {
                currentDate: {
                    type: Object,
                    required: !0
                },
                displayDate: {
                    type: Object,
                    required: !0
                },
                headingTitle: String,
                formatType: String,
                limits: {
                    type: Object,
                    default: ()=>({})
                }
            },
            data: ()=>({
                currentDatePieceIsDisabled: currentDatePieceIsDisabled,
                currentDatePieceIsSelected: currentDatePieceIsSelected,
                datePieceValues: d,
                monthNames: m,
                formatTypes: u
            }),
            methods: {
                isDisabled(e, t, i) {
                    return currentDatePieceIsDisabled({
                        datePiece: t,
                        dateValue: e,
                        displayDate: i,
                        limits: this.limits
                    })
                },
                isSelected(e, t) {
                    return currentDatePieceIsSelected({
                        currentDate: this.currentDate,
                        displayDate: this.displayDate,
                        datePiece: t,
                        dateValue: e
                    })
                }
            }
        })
          , b = Object.defineProperty
          , _ = Object.defineProperties
          , O = Object.getOwnPropertyDescriptors
          , S = Object.getOwnPropertySymbols
          , T = Object.prototype.hasOwnProperty
          , M = Object.prototype.propertyIsEnumerable
          , __defNormalProp = (e,t,i)=>t in e ? b(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , E = C.extend({
            name: "FormDatepickerCalendar",
            data: ()=>({
                shortWeekdayLabels: f
            }),
            computed: {
                daysInCurrentMonth() {
                    return ((e,t,i=36)=>{
                        const a = new Date(e,t)
                          , r = new Date(a.getFullYear(),a.getMonth(),1).getDay()
                          , n = new Date(a.getFullYear(),a.getMonth() + 1,0).getDate();
                        let s = r > 0 ? new Array(r).fill({
                            date: null
                        }) : [];
                        return s = s.concat(new Array(n).fill({}).map(((e,t)=>({
                            date: t + 1
                        })))),
                        i - s.length > 0 && (s = s.concat(new Array(i - s.length).fill({
                            date: null
                        }))),
                        s
                    }
                    )(this.displayDate.year, this.displayDate.month)
                }
            },
            methods: {
                handleDaySelect(e) {
                    var t;
                    this.isDisabled(e, this.datePieceValues.DAY, this.displayDate) || this.$emit("day-selected", (t = ((e,t)=>{
                        for (var i in t || (t = {}))
                            T.call(t, i) && __defNormalProp(e, i, t[i]);
                        if (S)
                            for (var i of S(t))
                                M.call(t, i) && __defNormalProp(e, i, t[i]);
                        return e
                    }
                    )({}, this.displayDate),
                    _(t, O({
                        day: e
                    }))))
                }
            }
        })
          , Y = {
            "calendar-view": "form-datepicker-calendar-calendar-view",
            grid: "form-datepicker-calendar-grid",
            day: "form-datepicker-calendar-day",
            selected: "form-datepicker-calendar-selected",
            disabled: "form-datepicker-calendar-disabled",
            empty: "form-datepicker-calendar-empty",
            weekdays: "form-datepicker-calendar-weekdays"
        };
        var x = (0,
        $.Z)(E, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("datepicker-wrapper", e._g({
                attrs: {
                    "heading-title": e.headingTitle
                }
            }, e.$listeners), [i("div", {
                class: e.$style["calendar-view"]
            }, [i("div", {
                class: e.$style.weekdays
            }, e._l(e.shortWeekdayLabels, (function(t) {
                return i("span", {
                    key: t,
                    domProps: {
                        textContent: e._s(t)
                    }
                })
            }
            )), 0), e._v(" "), i("div", {
                class: e.$style.grid
            }, e._l(e.daysInCurrentMonth, (function(t, a) {
                var r, n, s;
                return i("span", {
                    key: a,
                    class: [e.$style.day, (r = {},
                    r[e.$style.empty] = !t.date,
                    r), (n = {},
                    n[e.$style.selected] = e.isSelected(t.date, e.datePieceValues.DAY),
                    n), (s = {},
                    s[e.$style.disabled] = e.isDisabled(t.date, e.datePieceValues.DAY, e.displayDate),
                    s)],
                    domProps: {
                        textContent: e._s(t.date)
                    },
                    on: {
                        click: function(i) {
                            return e.handleDaySelect(t.date)
                        }
                    }
                })
            }
            )), 0)])])
        }
        ), [], !1, (function form_datepicker_calendar_injectStyles(e) {
            this.$style = Y.locals || Y
        }
        ), null, null).exports
          , N = {
            name: "FormDatepickerControls",
            components: {
                V5Button: i(56279).V5Button
            },
            props: {
                formatType: String,
                formatTypes: Object,
                hideFormatButton: Boolean,
                limits: {
                    type: Object,
                    default: ()=>({})
                }
            },
            computed: {
                yearMonthDateFormat() {
                    return this.formatType === this.formatTypes.YEAR_MONTH_DATE
                },
                isTodayEnabled() {
                    const e = new Date;
                    return !currentDatePieceIsDisabled({
                        limits: this.limits,
                        datePiece: d.DAY,
                        dateValue: e.getDate(),
                        displayDate: {
                            month: e.getMonth(),
                            year: e.getFullYear()
                        }
                    })
                }
            },
            methods: {
                emitButtonClick(e="") {
                    this.$emit(`click-${e}`)
                }
            }
        }
          , A = {
            "datepicker-controls": "form-datepicker-controls-datepicker-controls",
            buttons: "form-datepicker-controls-buttons",
            button: "form-datepicker-controls-button"
        };
        var F = (0,
        $.Z)(N, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                class: e.$style["datepicker-controls"]
            }, [i("div", {
                class: e.$style.buttons
            }, [e.yearMonthDateFormat ? i("v5-button", {
                class: e.$style.button,
                attrs: {
                    "data-cy": "form-datepicker-controls-today",
                    disabled: !e.isTodayEnabled,
                    size: "x-small",
                    theme: "secondary"
                },
                domProps: {
                    textContent: e._s(e.$trans("Today"))
                },
                on: {
                    click: function(t) {
                        return e.emitButtonClick("today")
                    }
                }
            }) : e._e(), e._v(" "), i("v5-button", {
                class: e.$style.button,
                attrs: {
                    size: "x-small",
                    theme: "danger"
                },
                domProps: {
                    textContent: e._s(e.$trans("Clear"))
                },
                on: {
                    click: function(t) {
                        return e.emitButtonClick("clear")
                    }
                }
            }), e._v(" "), e.hideFormatButton ? e._e() : i("v5-button", {
                class: e.$style.button,
                attrs: {
                    size: "x-small",
                    theme: "basic-light"
                },
                domProps: {
                    textContent: e._s(e.$trans("Format"))
                },
                on: {
                    click: function(t) {
                        return e.emitButtonClick("format")
                    }
                }
            }), e._v(" "), i("v5-button", {
                class: e.$style.button,
                attrs: {
                    size: "x-small",
                    theme: "primary"
                },
                domProps: {
                    textContent: e._s(e.$trans("Close"))
                },
                on: {
                    click: function(t) {
                        return e.emitButtonClick("close")
                    }
                }
            })], 1)])
        }
        ), [], !1, (function form_datepicker_controls_injectStyles(e) {
            this.$style = A.locals || A
        }
        ), null, null).exports
          , V = C.extend({
            name: "FormDatepickerFormat",
            methods: {
                handleFormatSelect(e) {
                    this.$emit("format-selected", e)
                }
            }
        })
          , I = {
            format: "form-datepicker-format-format",
            selected: "form-datepicker-format-selected"
        };
        var R = (0,
        $.Z)(V, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("datepicker-wrapper", e._g({
                attrs: {
                    "heading-title": e.$trans("Select Date Format")
                }
            }, e.$listeners), [i("div", {
                class: e.$style["month-view"]
            }, e._l(e.formatTypes, (function(t) {
                var a;
                return i("div", {
                    key: t,
                    class: [e.$style.format, (a = {},
                    a[e.$style.selected] = e.formatType === t,
                    a)],
                    domProps: {
                        textContent: e._s(t)
                    },
                    on: {
                        click: function(i) {
                            return e.handleFormatSelect(t)
                        }
                    }
                })
            }
            )), 0)])
        }
        ), [], !1, (function form_datepicker_format_injectStyles(e) {
            this.$style = I.locals || I
        }
        ), null, null).exports
          , P = Object.defineProperty
          , Z = Object.defineProperties
          , j = Object.getOwnPropertyDescriptors
          , L = Object.getOwnPropertySymbols
          , H = Object.prototype.hasOwnProperty
          , B = Object.prototype.propertyIsEnumerable
          , form_datepicker_monthsvue_type_script_lang_js_defNormalProp = (e,t,i)=>t in e ? P(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i
          , q = C.extend({
            name: "FormDatepickerMonths",
            methods: {
                handleMonthSelect(e) {
                    var t;
                    this.isDisabled(e, this.datePieceValues.MONTH, this.displayDate) || this.$emit("month-selected", (t = ((e,t)=>{
                        for (var i in t || (t = {}))
                            H.call(t, i) && form_datepicker_monthsvue_type_script_lang_js_defNormalProp(e, i, t[i]);
                        if (L)
                            for (var i of L(t))
                                B.call(t, i) && form_datepicker_monthsvue_type_script_lang_js_defNormalProp(e, i, t[i]);
                        return e
                    }
                    )({}, this.displayDate),
                    Z(t, j({
                        month: e
                    }))))
                }
            }
        })
          , W = {
            "month-view": "form-datepicker-months-month-view",
            month: "form-datepicker-months-month",
            selected: "form-datepicker-months-selected",
            disabled: "form-datepicker-months-disabled",
            empty: "form-datepicker-months-empty"
        };
        var z = (0,
        $.Z)(q, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("datepicker-wrapper", e._g({
                attrs: {
                    "heading-title": e.headingTitle
                }
            }, e.$listeners), [i("div", {
                class: e.$style["month-view"]
            }, e._l(e.monthNames, (function(t, a) {
                var r, n;
                return i("div", {
                    key: t,
                    class: [e.$style.month, (r = {},
                    r[e.$style.selected] = e.isSelected(a, e.datePieceValues.MONTH),
                    r), (n = {},
                    n[e.$style.disabled] = e.isDisabled(a, e.datePieceValues.MONTH, e.displayDate),
                    n)],
                    domProps: {
                        textContent: e._s(t)
                    },
                    on: {
                        click: function(t) {
                            return e.handleMonthSelect(a)
                        }
                    }
                })
            }
            )), 0)])
        }
        ), [], !1, (function form_datepicker_months_injectStyles(e) {
            this.$style = W.locals || W
        }
        ), null, null).exports
          , K = C.extend({
            name: "FormDatepickerYear",
            computed: {
                computedHeadingTitle() {
                    const e = this.displayDateRange[this.displayDateRange.length - 1];
                    return `${this.displayDateRange[0]} - ${e}`
                },
                displayDateRange() {
                    return getDateRangeForYear(this.displayDate.year)
                }
            },
            methods: {
                handleYearSelect(e) {
                    this.isDisabled(e, this.datePieceValues.YEAR, this.displayDate) || this.$emit("year-selected", e)
                }
            }
        })
          , J = {
            "year-view": "form-datepicker-years-year-view",
            year: "form-datepicker-years-year",
            selected: "form-datepicker-years-selected",
            disabled: "form-datepicker-years-disabled",
            empty: "form-datepicker-years-empty"
        };
        var U = {
            name: "FormDatepicker",
            components: {
                FormDatepickerCalendar: x,
                FormDatepickerMonths: z,
                FormDatepickerYears: (0,
                $.Z)(K, (function() {
                    var e = this
                      , t = e.$createElement
                      , i = e._self._c || t;
                    return i("datepicker-wrapper", e._g({
                        attrs: {
                            "heading-title": e.computedHeadingTitle
                        }
                    }, e.$listeners), [i("div", {
                        class: e.$style["year-view"]
                    }, e._l(e.displayDateRange, (function(t) {
                        var a, r;
                        return i("div", {
                            key: t,
                            class: [e.$style.year, (a = {},
                            a[e.$style.selected] = e.isSelected(t, e.datePieceValues.YEAR),
                            a), (r = {},
                            r[e.$style.disabled] = e.isDisabled(t, e.datePieceValues.YEAR, e.displayDate),
                            r)],
                            domProps: {
                                textContent: e._s(t)
                            },
                            on: {
                                click: function(i) {
                                    return e.handleYearSelect(t)
                                }
                            }
                        })
                    }
                    )), 0)])
                }
                ), [], !1, (function form_datepicker_years_injectStyles(e) {
                    this.$style = J.locals || J
                }
                ), null, null).exports,
                FormDatepickerFormat: R,
                FormDatepickerControls: F
            },
            props: {
                options: {
                    type: Object,
                    default: ()=>({})
                },
                initialValue: {
                    type: String,
                    require: !0
                }
            },
            emits: ["input", "day-selected", "close"],
            data: ()=>({
                currentDate: {
                    day: null,
                    month: null,
                    year: null
                },
                currentView: v.CALENDAR,
                displayDate: {
                    month: null,
                    year: null
                },
                formattedDate: "",
                formatType: u.YEAR_MONTH_DATE,
                formatTypes: u,
                today: new Date,
                views: v
            }),
            computed: {
                currentMonthName() {
                    return m[this.currentDate.month]
                },
                currentDateNativeObject() {
                    const {year: e, month: t, day: i} = this.currentDate;
                    return new Date(e,t,i)
                },
                dateStringFormat() {
                    return this.options.format || "MM/DD/YYYY"
                },
                displayMonthName() {
                    return m[this.displayDate.month]
                }
            },
            watch: {
                currentDate: {
                    handler() {
                        this.setFormattedDate()
                    },
                    deep: !0
                }
            },
            mounted() {
                this.readFormatTypeFromInitialValue(),
                this.setInitialDate()
            },
            methods: {
                changeToNextMonth() {
                    this.displayDate.month === h ? (this.setDisplayMonth(p),
                    this.displayDate.year++) : this.setDisplayMonth(this.displayDate.month + 1)
                },
                changeToPreviousMonth() {
                    this.displayDate.month === p ? (this.setDisplayMonth(h),
                    this.displayDate.year--) : this.setDisplayMonth(this.displayDate.month - 1)
                },
                changeToNextYear() {
                    this.displayDate.year++
                },
                changeToPreviousYear() {
                    this.displayDate.year--
                },
                closeCalendar() {
                    this.$emit("close")
                },
                clearCalendar() {
                    this.clearFormattedDate(),
                    this.closeCalendar()
                },
                clearFormattedDate() {
                    this.formattedDate = "",
                    this.$emit("input", this.formattedDate)
                },
                handleDaySelect(e) {
                    this.setCurrentDay(e.day),
                    this.setCurrentMonth(e.month),
                    this.setCurrentYear(e.year),
                    this.$emit("day-selected")
                },
                handleMonthSelect(e) {
                    this.setDisplayMonth(e.month),
                    this.setDisplayYear(e.year),
                    this.formatType === u.YEAR_MONTH && (this.setCurrentMonth(e.month),
                    this.setCurrentYear(e.year)),
                    this.handleNextSelectAction(u.YEAR_MONTH, this.views.CALENDAR)
                },
                handleNextSelectAction(e, t) {
                    this.formatType === e ? this.setFormattedDate() : this.setCurrentView(t)
                },
                handleYearSelect(e) {
                    this.setDisplayYear(e),
                    this.formatType === u.YEAR && this.setCurrentYear(e),
                    this.handleNextSelectAction(u.YEAR, this.views.MONTH)
                },
                handleFormatSelect(e) {
                    this.formatType = e,
                    Object.prototype.hasOwnProperty.call(g, this.formatType) ? this.setCurrentView(g[this.formatType]) : this.setCurrentView(this.views.CALENDAR),
                    this.setFormattedDate()
                },
                isCurrentView(e) {
                    return e === this.currentView
                },
                readFormatTypeFromInitialValue() {
                    this.initialValue && (this.formatType = ((e,t,i)=>{
                        t.match(c);
                        const a = i && e.includes(i) ? ((e,t,i)=>e.split("").reduce(((e,a,r)=>a === i ? [...e, t[r]] : e), []))(e, t, i) : (e=>{
                            const t = e.split(/\D/)
                              , i = t.find((e=>4 === e.length));
                            switch (t.length) {
                            case 0:
                                return ["Y", "M", "D"];
                            case 1:
                                return ["M", "D"];
                            case 2:
                                return [i ? "" : "Y", "D"];
                            default:
                                return []
                            }
                        }
                        )(e)
                          , r = -1 === a.indexOf("Y")
                          , n = -1 === a.indexOf("M")
                          , s = -1 === a.indexOf("D")
                          , l = isValidDate(e);
                        return l && r && !n && !s ? u.YEAR : l && r && n && !s ? u.YEAR_MONTH : u.YEAR_MONTH_DATE
                    }
                    )(this.initialValue, this.dateStringFormat, this.options.replaceWith),
                    Object.prototype.hasOwnProperty.call(g, this.formatType) && this.setCurrentView(g[this.formatType]))
                },
                setCurrentDay(e) {
                    e && (this.currentDate.day = e)
                },
                setCurrentMonth(e) {
                    this.currentDate.month = e
                },
                setCurrentView(e) {
                    this.currentView = e
                },
                setCurrentYear(e) {
                    this.currentDate.year = e
                },
                setDisplayMonth(e) {
                    this.displayDate.month = e
                },
                setDisplayYear(e) {
                    this.displayDate.year = e
                },
                setDateToToday() {
                    this.setCurrentMonth(this.today.getMonth()),
                    this.setCurrentYear(this.today.getFullYear()),
                    this.setCurrentDay(this.today.getDate()),
                    this.setDisplayYear(this.today.getFullYear()),
                    this.setDisplayMonth(this.today.getMonth()),
                    this.setFormattedDate()
                },
                setFormattedDate() {
                    const {dateStringFormat: e, formatType: t} = this
                      , {replaceWith: i} = this.options
                      , a = ((e,t,i="")=>{
                        const {YEAR: a, YEAR_MONTH: r} = u;
                        switch (t) {
                        case a:
                            return e.replace(i ? /[MD]/g : /[^Y]/g, i);
                        case r:
                            return e.replace(i ? /D/g : /(\W+D+)|(D+\W+)|(D+)/g, i);
                        default:
                            return e
                        }
                    }
                    )(e, t, i);
                    this.formattedDate = formatDate(this.currentDateNativeObject, a),
                    this.$emit("input", this.formattedDate),
                    this.options.closeOnSelect && this.closeCalendar()
                },
                setInitialDate() {
                    const e = new Date(this.initialValue);
                    isValidDate(this.initialValue) ? (this.setCurrentDay(e.getDate()),
                    this.setCurrentMonth(e.getMonth()),
                    this.setCurrentYear(e.getFullYear()),
                    this.setDisplayMonth(e.getMonth()),
                    this.setDisplayYear(e.getFullYear()),
                    this.setFormattedDate()) : this.setDateToToday()
                }
            }
        }
          , G = {
            calendar: "form-datepicker-calendar",
            inner: "form-datepicker-inner"
        };
        var Q = (0,
        $.Z)(U, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                class: e.$style.calendar
            }, [i("div", {
                class: e.$style.inner
            }, [i("form-datepicker-calendar", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isCurrentView(e.views.CALENDAR),
                    expression: "isCurrentView(views.CALENDAR)"
                }],
                ref: "calendar-view",
                attrs: {
                    "current-date": e.currentDate,
                    "display-date": e.displayDate,
                    "heading-title": e.displayMonthName + " " + e.displayDate.year,
                    limits: e.options.limits
                },
                on: {
                    "click-heading": function(t) {
                        return e.setCurrentView(e.views.MONTH)
                    },
                    "click-left-icon": e.changeToPreviousMonth,
                    "click-right-icon": e.changeToNextMonth,
                    "day-selected": e.handleDaySelect
                }
            }), e._v(" "), i("form-datepicker-format", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isCurrentView(e.views.FORMAT),
                    expression: "isCurrentView(views.FORMAT)"
                }],
                ref: "format-view",
                attrs: {
                    "current-date": e.currentDate,
                    "display-date": e.displayDate,
                    "format-type": e.formatType
                },
                on: {
                    "format-selected": e.handleFormatSelect
                }
            }), e._v(" "), i("form-datepicker-months", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isCurrentView(e.views.MONTH),
                    expression: "isCurrentView(views.MONTH)"
                }],
                ref: "month-view",
                attrs: {
                    "current-date": e.currentDate,
                    "display-date": e.displayDate,
                    "heading-title": String(e.displayDate.year),
                    "format-type": e.formatType,
                    limits: e.options.limits
                },
                on: {
                    "click-heading": function(t) {
                        return e.setCurrentView(e.views.YEAR)
                    },
                    "click-left-icon": e.changeToPreviousYear,
                    "click-right-icon": e.changeToNextYear,
                    "month-selected": e.handleMonthSelect
                }
            }), e._v(" "), i("form-datepicker-years", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isCurrentView(e.views.YEAR),
                    expression: "isCurrentView(views.YEAR)"
                }],
                ref: "year-view",
                attrs: {
                    "current-date": e.currentDate,
                    "display-date": e.displayDate,
                    "format-type": e.formatType,
                    limits: e.options.limits
                },
                on: {
                    "click-left-icon": function(t) {
                        return e.setDisplayYear(e.displayDate.year - 20)
                    },
                    "click-right-icon": function(t) {
                        return e.setDisplayYear(e.displayDate.year + 20)
                    },
                    "year-selected": e.handleYearSelect,
                    "view-changed": e.setCurrentView
                }
            })], 1), e._v(" "), i("form-datepicker-controls", {
                attrs: {
                    "format-type": e.formatType,
                    "format-types": e.formatTypes,
                    "hide-format-button": e.options.hideFormatButton,
                    limits: e.options.limits
                },
                on: {
                    "click-clear": e.clearCalendar,
                    "click-close": e.closeCalendar,
                    "click-format": function(t) {
                        return e.setCurrentView(e.views.FORMAT)
                    },
                    "click-today": e.setDateToToday
                }
            })], 1)
        }
        ), [], !1, (function form_datepicker_injectStyles(e) {
            this.$style = G.locals || G
        }
        ), null, null).exports;
        const X = (0,
        i(92866).iH)(!1);
        var ee = {
            components: {
                FormDatepicker: Q
            },
            data: ()=>({
                options: null,
                initialValue: null,
                isDatePickerOpen: X,
                position: {
                    placement: y,
                    left: -4e3,
                    top: -4e3
                }
            }),
            computed: {
                hasInitialValue() {
                    return null !== this.initialValue
                },
                style() {
                    let e = this.position.left;
                    return window.innerWidth < n ? {
                        transform: `translate(-50%, ${this.position.top}px)`
                    } : (window.innerWidth < s && (e -= r),
                    {
                        transform: `translate(${e}px, ${this.position.top}px)`
                    })
                }
            },
            methods: {
                handleWindowClick(e) {
                    this.$directiveEl.contains(e.target) || this.$el.contains(e.target) || (this.close(),
                    this.removeClickEventListener())
                },
                close() {
                    this.position = {
                        placement: y,
                        left: -4e3,
                        top: -4e3
                    },
                    setTimeout((()=>{
                        X.value = !1
                    }
                    ))
                },
                open(e, t=y) {
                    X.value ? this.close() : (X.value = !0,
                    this.addClickEventListener(),
                    this.$nextTick((()=>{
                        this.position = (0,
                        l.bt)(e, this.$el, t, 10)
                    }
                    )))
                },
                onDateSelect: e=>e,
                handleDaySelect() {
                    this.close()
                },
                handleCloseDatepicker() {
                    this.removeClickEventListener(),
                    this.close()
                },
                addClickEventListener() {
                    window.addEventListener("click", this.handleWindowClick)
                },
                removeClickEventListener() {
                    window.removeEventListener("click", this.handleWindowClick)
                }
            }
        }
          , te = {
            component: "datepicker-component"
        };
        var ie = (0,
        $.Z)(ee, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                ref: "datepicker",
                class: e.$style.component,
                style: e.style,
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [e.hasInitialValue ? i("form-datepicker", {
                attrs: {
                    options: e.options,
                    "initial-value": e.initialValue
                },
                on: {
                    close: e.handleCloseDatepicker,
                    input: e.onDateSelect
                }
            }) : e._e()], 1)
        }
        ), [], !1, (function datepicker_injectStyles(e) {
            this.$style = te.locals || te
        }
        ), null, null).exports;
        const ae = (0,
        a.Z)({
            formDatepicker: {
                component: ie,
                el: "#form-datepicker"
            }
        })
          , getDirectiveElement = (e,t)=>{
            let i;
            return Object.prototype.hasOwnProperty.call(t.value, "selector") ? i = t.value.selector : "focus" === t.arg && e.hasChildNodes() && (i = "input"),
            i ? e.querySelector(i) : e
        }
          , re = []
          , ne = [];
        var se = {
            bind(e, t, i) {
                ne.push(t);
                const a = getDirectiveElement(e, t)
                  , directiveClickListener = ()=>{
                    const t = ne[a.dataset.listenerIndex]
                      , r = ae.createInstance("formDatepicker");
                    r.$children[0].$directiveEl = a,
                    r.$children[0].options = t.value,
                    r.$children[0].initialValue = ((e,t,i)=>t.value.initialValue ? t.value.initialValue : i.componentInstance ? i.componentInstance.value : e.value ? e.value : "")(e, t, i),
                    r.$children[0].onDateSelect = t.value.onDateSelect,
                    r.$children[0].open(a, t.value.placement)
                }
                ;
                a.addEventListener(t.arg, directiveClickListener),
                a.dataset.listenerIndex = re.length,
                re.push(directiveClickListener)
            },
            componentUpdated(e, t) {
                const i = getDirectiveElement(e, t);
                ne[i.dataset.listenerIndex].value = t.value
            },
            unbind(e, t) {
                getDirectiveElement(e, t).removeEventListener(t.arg, re[e.dataset.listenerIndex])
            }
        }
    },
    69947: function(e, t) {
        t.Z = {
            props: {
                darkMode: {
                    type: Boolean,
                    default: !1
                },
                lightMode: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                themeClasses() {
                    return {
                        "light-mode": this.lightMode,
                        "dark-mode": this.darkMode
                    }
                }
            }
        }
    },
    37398: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return g
            }
        });
        var a = i(35559)
          , r = i(6898)
          , n = i(69947)
          , s = {
            name: "FormInput",
            components: {
                IconFont: a.Z
            },
            directives: {
                tooltip: r.Z
            },
            mixins: [n.Z],
            props: {
                ariaLabel: String,
                autocomplete: String,
                autocapitalize: {
                    type: String
                },
                autocorrect: {
                    type: String
                },
                autofocus: Boolean,
                disabled: {
                    type: Boolean,
                    default: !1,
                    required: !1
                },
                iconLeft: {
                    type: String,
                    required: !1
                },
                iconLeftTooltip: {
                    type: String,
                    default: ""
                },
                iconRight: {
                    type: String,
                    required: !1
                },
                iconRightTooltip: {
                    type: String,
                    default: ""
                },
                id: String,
                maxlength: Number,
                name: String,
                placeholder: {
                    type: String,
                    required: !1
                },
                readonly: {
                    type: Boolean,
                    default: !1,
                    required: !1
                },
                size: {
                    type: String,
                    required: !1
                },
                spellcheck: {
                    type: String
                },
                type: {
                    type: String,
                    default: "text"
                },
                value: {
                    type: [String, Number],
                    required: !1
                }
            },
            emits: ["input", "enter", "keyup", "focus", "blur"],
            computed: {
                inputClasses() {
                    const {$style: e, iconLeft: t, iconRight: i, lightMode: a, size: r} = this;
                    return [e.input, e[r], {
                        [e.left]: t,
                        [e.right]: i,
                        "light-mode": a
                    }]
                }
            },
            methods: {
                blurEvent(e) {
                    this.$emit("blur", e)
                },
                focusEvent(e) {
                    this.$emit("focus", e)
                },
                keyupEvent(e) {
                    this.$emit("keyup", e)
                },
                keyupEnterEvent(e) {
                    this.$emit("enter", e)
                },
                onIconClick(e) {
                    this.$emit(`icon-click-${e}`)
                },
                updateValue(e) {
                    this.$emit("input", e)
                }
            }
        }
          , l = {
            component: "form-input-component",
            wrapper: "form-input-wrapper",
            icon: "form-input-icon",
            left: "form-input-left",
            right: "form-input-right",
            input: "form-input-input",
            large: "form-input-large",
            "x-large": "form-input-x-large"
        }
          , o = i(51900);
        var c = (0,
        o.Z)(s, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                class: [e.$style.component, e.themeClasses]
            }, [e.iconLeft ? i("icon-font", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.iconLeftTooltip,
                    expression: "iconLeftTooltip"
                }],
                class: [e.$style.icon, e.$style.left],
                attrs: {
                    name: e.iconLeft,
                    theme: "primary"
                },
                on: {
                    click: function(t) {
                        return e.onIconClick("left")
                    }
                }
            }) : e._e(), e._v(" "), i("input", {
                class: e.inputClasses,
                attrs: {
                    id: e.id,
                    "aria-label": e.ariaLabel,
                    autocapitalize: e.autocapitalize,
                    autocomplete: e.autocomplete,
                    autofocus: e.autofocus,
                    autocorrect: e.autocorrect,
                    disabled: e.disabled,
                    maxlength: e.maxlength,
                    name: e.name,
                    placeholder: e.placeholder,
                    readonly: e.readonly,
                    spellcheck: e.spellcheck,
                    type: e.type
                },
                domProps: {
                    value: e.value
                },
                on: {
                    blur: function(t) {
                        return e.blurEvent(t)
                    },
                    focus: function(t) {
                        return e.focusEvent(t)
                    },
                    input: function(t) {
                        return e.updateValue(t.target.value)
                    },
                    keyup: [function(t) {
                        return e.keyupEvent(t)
                    }
                    , function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.keyupEnterEvent(t)
                    }
                    ]
                }
            }), e._v(" "), e.iconRight ? i("icon-font", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.iconRightTooltip,
                    expression: "iconRightTooltip"
                }],
                class: [e.$style.icon, e.$style.right],
                attrs: {
                    name: e.iconRight
                },
                on: {
                    click: function(t) {
                        return e.onIconClick("right")
                    }
                }
            }) : e._e()], 1)
        }
        ), [], !1, (function injectStyles(e) {
            this.$style = l.locals || l
        }
        ), null, null).exports
          , d = {
            name: "LoaderCircle"
        }
          , u = {
            component: "loader-circle-component",
            dot: "loader-circle-dot",
            animate: "loader-circle-animate",
            circle2: "loader-circle-circle2",
            circle3: "loader-circle-circle3",
            circle4: "loader-circle-circle4",
            circle5: "loader-circle-circle5",
            circle6: "loader-circle-circle6",
            circle7: "loader-circle-circle7",
            circle8: "loader-circle-circle8",
            circle9: "loader-circle-circle9",
            circle10: "loader-circle-circle10",
            circle11: "loader-circle-circle11",
            circle12: "loader-circle-circle12"
        };
        var p = (0,
        o.Z)(d, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                class: e.$style.component
            }, [i("div", {
                class: [e.$style.dot, e.$style.circle1]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle2]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle3]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle4]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle5]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle6]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle7]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle8]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle9]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle10]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle11]
            }), e._v(" "), i("div", {
                class: [e.$style.dot, e.$style.circle12]
            })])
        }
        ), [], !1, (function loader_circle_injectStyles(e) {
            this.$style = u.locals || u
        }
        ), null, null).exports
          , h = i(43608)
          , m = i(86673)
          , y = i(87692)
          , f = {
            name: "FormAutocomplete",
            components: {
                FormInput: c,
                LoaderCircle: p
            },
            props: {
                additionalOptions: {
                    type: Array,
                    required: !1
                },
                ariaLabel: {
                    type: String,
                    required: !1
                },
                autocapitalize: {
                    type: String
                },
                autocorrect: {
                    type: String
                },
                autofocus: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean
                },
                dropdownOptions: {
                    type: Array,
                    required: !0
                },
                dontClearInput: {
                    type: Boolean,
                    default: !1
                },
                debounceWait: {
                    type: Number,
                    default: 250
                },
                exceptionMessage: {
                    type: String,
                    required: !1
                },
                inputAutocomplete: {
                    type: String
                },
                inputId: {
                    type: String
                },
                inputName: {
                    type: String
                },
                initialInputValue: {
                    type: String
                },
                inputPlaceholder: {
                    type: String
                },
                isDarkMode: {
                    type: Boolean,
                    required: !1,
                    default: !1
                },
                lightMode: {
                    type: Boolean
                },
                isSearching: {
                    type: Boolean,
                    required: !0,
                    default: !1
                },
                labelKey: {
                    type: String
                },
                leftIcon: {
                    type: String,
                    default: "magnifying-glass"
                },
                popover: {
                    type: Boolean,
                    default: !0
                },
                popoverClass: {
                    type: String
                },
                rightIcon: {
                    type: String,
                    default: "x"
                },
                size: {
                    type: String
                },
                showInitialOptions: {
                    type: Boolean,
                    default: !1
                },
                spellcheck: {
                    type: String
                }
            },
            emits: ["clear-input", "selected", "blur", "keyup", "enter"],
            data() {
                return {
                    debounceFunc: (0,
                    h.Z)(this.handleInput, this.debounceWait, {
                        maxWait: 1e3
                    }),
                    searchCriteria: "",
                    selectedOption: {},
                    isFocused: !1
                }
            },
            computed: {
                clearIcon() {
                    return this.disabled || "" === (this.searchCriteria && this.rightIcon) ? "" : this.rightIcon
                },
                hasInitialValue() {
                    return void 0 !== this.initialInputValue && null !== this.initialInputValue
                },
                isOpen() {
                    var e;
                    return !!(this.showInitialOptions && this.dropdownOptions.length && this.isFocused && this.searchCriteria === (null != (e = this.initialInputValue) ? e : "")) || (this.dontClearInput ? this.searchCriteria !== this.initialInputValue && this.selectedOption[this.labelKey] !== this.searchCriteria && (!this.showInitialOptions || this.isFocused) && this.dropdownOptions.length > 0 || this.exceptionMessage || this.isSearching : this.hasInitialValue ? this.searchCriteria !== this.initialInputValue && this.selectedOption[this.labelKey] !== this.searchCriteria : "" !== this.searchCriteria && this.selectedOption[this.labelKey] !== this.searchCriteria)
                }
            },
            mounted() {
                this.handleBlur(),
                this.autofocus && this.focus()
            },
            created() {
                m.Z.on(y.U3.AUTOCOMPLETE_CLEAR_SELECTED, (()=>{
                    this.clearInput()
                }
                ))
            },
            methods: {
                focus() {
                    const e = this.$el.querySelector("input");
                    e && e.focus()
                },
                handleEnter(e) {
                    this.debounceFunc.flush(),
                    this.$nextTick((()=>{
                        this.$emit("enter", e)
                    }
                    ))
                },
                handleInput() {
                    this.$emit("keyup", this.searchCriteria)
                },
                handleBlur() {
                    if (this.isFocused = !1,
                    this.hasInitialValue && Object.keys(this.selectedOption).length)
                        this.searchCriteria = this.selectedOption[this.labelKey] !== this.initialInputValue ? this.selectedOption[this.labelKey] : this.initialInputValue;
                    else if (Object.keys(this.selectedOption).length)
                        this.searchCriteria = this.selectedOption[this.labelKey];
                    else if (this.initialInputValue)
                        this.searchCriteria = this.initialInputValue;
                    else {
                        if (this.dontClearInput)
                            return !1;
                        this.searchCriteria = ""
                    }
                    this.$emit("blur")
                },
                handleFocus() {
                    this.isFocused = !0
                },
                setSelectedOption(e) {
                    this.debounceFunc.cancel(),
                    this.selectedOption = e,
                    this.searchCriteria = e[this.labelKey] || "",
                    this.$nextTick((()=>{
                        this.$emit("selected", e)
                    }
                    ))
                },
                clearInput() {
                    this.searchCriteria = "",
                    this.handleInput(),
                    this.setSelectedOption({}),
                    this.$emit("clear-input")
                },
                setToInitialValue() {
                    this.searchCriteria = this.initialInputValue
                }
            }
        }
          , v = {
            component: "form-autocomplete-component",
            input: "form-autocomplete-input",
            loader: "form-autocomplete-loader",
            dropdown: "form-autocomplete-dropdown",
            popover: "form-autocomplete-popover",
            "popover-x-large": "form-autocomplete-popover-x-large",
            "not-empty": "form-autocomplete-not-empty",
            item: "form-autocomplete-item",
            "exception-message": "form-autocomplete-exception-message",
            icon: "form-autocomplete-icon"
        };
        var g = (0,
        o.Z)(f, (function() {
            var e, t = this, i = t.$createElement, a = t._self._c || i;
            return a("div", {
                class: t.$style.component
            }, [a("form-input", {
                class: t.$style.input,
                attrs: {
                    id: t.inputId,
                    autocapitalize: t.autocapitalize,
                    autocomplete: t.inputAutocomplete,
                    autocorrect: t.autocorrect,
                    "aria-label": t.ariaLabel,
                    disabled: t.disabled,
                    "icon-left": "none" == t.leftIcon ? "" : t.leftIcon,
                    "icon-right": t.clearIcon,
                    "light-mode": t.lightMode,
                    name: t.inputName,
                    "is-dark-mode": t.isDarkMode,
                    placeholder: t.inputPlaceholder,
                    size: t.size,
                    spellcheck: t.spellcheck
                },
                on: {
                    enter: t.handleEnter,
                    focus: t.handleFocus,
                    blur: t.handleBlur,
                    input: function(e) {
                        return t.debounceFunc()
                    },
                    "icon-click-right": t.clearInput
                },
                model: {
                    value: t.searchCriteria,
                    callback: function(e) {
                        t.searchCriteria = e
                    },
                    expression: "searchCriteria"
                }
            }), t._v(" "), a("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isOpen,
                    expression: "isOpen"
                }],
                class: [t.$style.dropdown, (e = {},
                e[t.$style.popover] = t.popover,
                e[t.$style["popover-x-large"]] = "x-large" === t.size,
                e[t.popoverClass] = t.popoverClass,
                e[t.$style["not-empty"]] = t.dropdownOptions.length > 0,
                e)]
            }, [t.isSearching ? a("loader-circle", {
                class: t.$style.loader
            }) : t._l(t.dropdownOptions, (function(e, i) {
                return a("li", {
                    key: i,
                    attrs: {
                        "data-cy": "dropdown-option-" + i
                    }
                }, [a("div", {
                    class: t.$style.item,
                    on: {
                        mousedown: function(i) {
                            return t.setSelectedOption(e)
                        }
                    }
                }, [t._t("default", (function() {
                    return [t._v("\n          " + t._s(e[t.labelKey]) + "\n        ")]
                }
                ), {
                    option: e
                })], 2)])
            }
            )), t._v(" "), t._l(t.additionalOptions, (function(e, i) {
                return a("li", {
                    key: "additionalOption_" + i
                }, [a("div", {
                    class: t.$style.item
                }, [t._t("additionalOption", null, {
                    additionalOption: e,
                    searchCriteria: t.searchCriteria,
                    action: t.setSelectedOption
                })], 2)])
            }
            )), t._v(" "), t.exceptionMessage ? a("li", [a("div", {
                class: t.$style.item
            }, [a("div", {
                class: t.$style["exception-message"]
            }, [t._v("\n          " + t._s(t.exceptionMessage) + "\n        ")])])]) : t._e()], 2)], 1)
        }
        ), [], !1, (function form_autocomplete_injectStyles(e) {
            this.$style = v.locals || v
        }
        ), null, null).exports
    }
}]);
