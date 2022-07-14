/*
 CanvasJS HTML5 & JavaScript Charts - v3.6.6 GA - https://canvasjs.com/ 
 Copyright 2022 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     https://canvasjs.com/license/

*/
/*tslint:disable*/
/*eslint-disable*/
/*jshint ignore:start*/
(function() {
    function na(h, m) { h.prototype = eb(m.prototype);
        h.prototype.constructor = h;
        h.base = m.prototype }

    function eb(h) {
        function m() {}
        m.prototype = h; return new m }

    function Xa(h, m, v) {
        "millisecond" === v ? h.setMilliseconds(h.getMilliseconds() + 1 * m) : "second" === v ? h.setSeconds(h.getSeconds() + 1 * m) : "minute" === v ? h.setMinutes(h.getMinutes() + 1 * m) : "hour" === v ? h.setHours(h.getHours() + 1 * m) : "day" === v ? h.setDate(h.getDate() + 1 * m) : "week" === v ? h.setDate(h.getDate() + 7 * m) : "month" === v ? h.setMonth(h.getMonth() + 1 * m) : "year" === v && h.setFullYear(h.getFullYear() +
            1 * m);
        return h
    }

    function X(h, m) { var v = !1;
        0 > h && (v = !0, h *= -1);
        h = "" + h; for (m = m ? m : 1; h.length < m;) h = "0" + h; return v ? "-" + h : h }

    function Ga(h) { if (!h) return h;
        h = h.replace(/^\s\s*/, ""); for (var m = /\s/, v = h.length; m.test(h.charAt(--v));); return h.slice(0, v + 1) }

    function Ca(h) {
        h.roundRect = function(h, v, r, w, qa, F, x, E) {
            x && (this.fillStyle = x);
            E && (this.strokeStyle = E);
            "undefined" === typeof qa && (qa = 5);
            this.lineWidth = F;
            this.beginPath();
            this.moveTo(h + qa, v);
            this.lineTo(h + r - qa, v);
            this.quadraticCurveTo(h + r, v, h + r, v + qa);
            this.lineTo(h + r,
                v + w - qa);
            this.quadraticCurveTo(h + r, v + w, h + r - qa, v + w);
            this.lineTo(h + qa, v + w);
            this.quadraticCurveTo(h, v + w, h, v + w - qa);
            this.lineTo(h, v + qa);
            this.quadraticCurveTo(h, v, h + qa, v);
            this.closePath();
            x && this.fill();
            E && 0 < F && this.stroke()
        }
    }

    function Ra(h, m) { return h - m }

    function Q(h) { var m = ((h & 16711680) >> 16).toString(16),
            v = ((h & 65280) >> 8).toString(16);
        h = ((h & 255) >> 0).toString(16);
        m = 2 > m.length ? "0" + m : m;
        v = 2 > v.length ? "0" + v : v;
        h = 2 > h.length ? "0" + h : h; return "#" + m + v + h }

    function fb(h, m) {
        var v = this.length >>> 0,
            r = Number(m) || 0,
            r = 0 > r ? Math.ceil(r) :
            Math.floor(r);
        for (0 > r && (r += v); r < v; r++)
            if (r in this && this[r] === h) return r;
        return -1
    }

    function r(h) { return null === h || "undefined" === typeof h }

    function Da(h) { h.indexOf || (h.indexOf = fb); return h }

    function gb(h) { if (S.fSDec) h[W("`eeDwdouMhrudods")](W("e`u`@ohl`uhnoHuds`uhnoDoe"), function() { S._fTWm && S._fTWm(h) }) }

    function Ya(h, m, v) {
        v = v || "normal";
        var r = h + "_" + m + "_" + v,
            w = Za[r];
        if (isNaN(w)) {
            try {
                if (!va) {
                    var qa = document.body;
                    va = document.createElement("span");
                    va.innerHTML = "";
                    var F = document.createTextNode("Mpgyi");
                    va.appendChild(F);
                    qa.appendChild(va)
                }
                va.style.display = "";
                P(va, { position: "absolute", left: "0px", top: "-20000px", padding: "0px", margin: "0px", border: "none", whiteSpace: "pre", lineHeight: "normal", fontFamily: h, fontSize: m + "px", fontWeight: v });
                w = Math.round(va.offsetHeight);
                va.style.display = "none"
            } catch (x) { w = Math.ceil(1.1 * m) }
            w = Math.max(w, m);
            Za[r] = w
        }
        return w
    }

    function N(h, m) {
        var v = [];
        if (v = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4, 2],
                dashDot: [4, 2, 1, 2],
                longDash: [8,
                    2
                ],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2]
            }[h || "solid"])
            for (var r = 0; r < v.length; r++) v[r] *= m;
        else v = [];
        return v
    }

    function J(h, m, v, w, pa) { w = w || [];
        pa = r(pa) ? hb ? { passive: !1, capture: !1 } : !1 : pa;
        w.push([h, m, v, pa]); return h.addEventListener ? (h.addEventListener(m, v, pa), v) : h.attachEvent ? (w = function(m) { m = m || window.event;
            m.preventDefault = m.preventDefault || function() { m.returnValue = !1 };
            m.stopPropagation = m.stopPropagation || function() { m.cancelBubble = !0 };
            v.call(h, m) }, h.attachEvent("on" + m, w), w) : !1 }

    function ib(h) {
        if (h._menuButton) h.exportEnabled ?
            (P(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor }), La(h._menuButton), h._menuButton.title = h._cultureInfo.menuText) : ta(h._menuButton);
        else if (h.exportEnabled && w) {
            var m = !1;
            h._menuButton = document.createElement("button");
            ua(h, h._menuButton, "menu");
            h._toolBar.appendChild(h._menuButton);
            J(h._menuButton, "touchstart", function(h) { m = !0 }, h.allDOMEventHandlers);
            J(h._menuButton, "click", function() {
                "none" !== h._dropdownMenu.style.display || h._dropDownCloseTime && 500 >= (new Date).getTime() -
                    h._dropDownCloseTime.getTime() || (h._dropdownMenu.style.display = "block", h._menuButton.blur(), h._dropdownMenu.focus())
            }, h.allDOMEventHandlers, !0);
            J(h._menuButton, "mousemove", function() { m || (P(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColorOnHover, color: h.toolbar.fontColorOnHover }), 0 >= navigator.userAgent.search("MSIE") && P(h._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" })) }, h.allDOMEventHandlers, !0);
            J(h._menuButton, "mouseout", function() {
                m || (P(h._menuButton, {
                    backgroundColor: h.toolbar.itemBackgroundColor,
                    color: h.toolbar.fontColor
                }), 0 >= navigator.userAgent.search("MSIE") && P(h._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }))
            }, h.allDOMEventHandlers, !0)
        }
        if (h.exportEnabled && h._dropdownMenu) {
            P(h._dropdownMenu, { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor });
            for (var v = h._dropdownMenu.childNodes, r = [h._cultureInfo.printText, h._cultureInfo.saveJPGText, h._cultureInfo.savePNGText], pa = 0; pa < v.length; pa++) P(v[pa], {
                backgroundColor: h.toolbar.itemBackgroundColor,
                color: h.toolbar.fontColor
            }), v[pa].innerHTML = r[pa]
        } else !h._dropdownMenu && (h.exportEnabled && w) && (m = !1, h._dropdownMenu = document.createElement("div"), h._dropdownMenu.setAttribute("tabindex", -1), v = -1 !== h.theme.indexOf("dark") ? "black" : "#888888", P(h._dropdownMenu, {
                position: "absolute",
                zIndex: 1,
                userSelect: "none",
                MozUserSeelct: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
                cursor: "pointer",
                right: "0px",
                top: "25px",
                minWidth: "120px",
                outline: 0,
                fontSize: "14px",
                fontFamily: "Arial, Helvetica, sans-serif",
                padding: "5px 0px 5px 0px",
                textAlign: "left",
                lineHeight: "10px",
                backgroundColor: h.toolbar.itemBackgroundColor,
                boxShadow: "2px 2px 10px" + v
            }), h._dropdownMenu.style.display = "none", h._toolBar.appendChild(h._dropdownMenu), J(h._dropdownMenu, "blur", function() { ta(h._dropdownMenu);
                h._dropDownCloseTime = new Date }, h.allDOMEventHandlers, !0), v = document.createElement("div"), P(v, { padding: "12px 8px 12px 8px" }), v.innerHTML = h._cultureInfo.printText, v.style.backgroundColor = h.toolbar.itemBackgroundColor, v.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(v),
            J(v, "touchstart", function(h) { m = !0 }, h.allDOMEventHandlers), J(v, "mousemove", function() { m || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover) }, h.allDOMEventHandlers, !0), J(v, "mouseout", function() { m || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor) }, h.allDOMEventHandlers, !0), J(v, "click", function() { h.print();
                ta(h._dropdownMenu) }, h.allDOMEventHandlers, !0), v = document.createElement("div"), P(v, { padding: "12px 8px 12px 8px" }),
            v.innerHTML = h._cultureInfo.saveJPGText, v.style.backgroundColor = h.toolbar.itemBackgroundColor, v.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(v), J(v, "touchstart", function(h) { m = !0 }, h.allDOMEventHandlers), J(v, "mousemove", function() { m || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover) }, h.allDOMEventHandlers, !0), J(v, "mouseout", function() { m || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor) },
                h.allDOMEventHandlers, !0), J(v, "click", function() { h.exportChart({ format: "jpeg", fileName: h.exportFileName });
                ta(h._dropdownMenu) }, h.allDOMEventHandlers, !0), v = document.createElement("div"), P(v, { padding: "12px 8px 12px 8px" }), v.innerHTML = h._cultureInfo.savePNGText, v.style.backgroundColor = h.toolbar.itemBackgroundColor, v.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(v), J(v, "touchstart", function(h) { m = !0 }, h.allDOMEventHandlers), J(v, "mousemove", function() {
                m || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover,
                    this.style.color = h.toolbar.fontColorOnHover)
            }, h.allDOMEventHandlers, !0), J(v, "mouseout", function() { m || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor) }, h.allDOMEventHandlers, !0), J(v, "click", function() { h.exportChart({ format: "png", fileName: h.exportFileName });
                ta(h._dropdownMenu) }, h.allDOMEventHandlers, !0))
    }

    function $a(h, m, v) {
        h *= ga;
        m *= ga;
        h = v.getImageData(h, m, 2, 2).data;
        m = !0;
        for (v = 0; 4 > v; v++)
            if (h[v] !== h[v + 4] | h[v] !== h[v + 8] | h[v] !== h[v + 12]) { m = !1; break }
        return m ?
            h[0] << 16 | h[1] << 8 | h[2] : 0
    }

    function ka(h, m, v) { return h in m ? m[h] : v[h] }

    function Ma(h, m, v) { if (w && ab) { var r = h.getContext("2d");
            Na = r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
            ga = Sa / Na;
            h.width = m * ga;
            h.height = v * ga;
            Sa !== Na && (h.style.width = m + "px", h.style.height = v + "px", r.scale(ga, ga)) } else h.width = m, h.height = v }

    function jb(h) {
        if (!kb) {
            var m = !1,
                v = !1;
            "undefined" === typeof oa.Chart.creditHref ? (h.creditHref = W("iuuqr;..b`ow`rkr/bnl."),
                h.creditText = W("B`ow`rKR/bnl")) : (m = h.updateOption("creditText"), v = h.updateOption("creditHref"));
            if (h.creditHref && h.creditText) {
                h._creditLink || (h._creditLink = document.createElement("a"), h._creditLink.setAttribute("class", "canvasjs-chart-credit"), h._creditLink.setAttribute("title", "JavaScript Charts"), P(h._creditLink, { outline: "none", margin: "0px", position: "absolute", right: "2px", top: h.height - 14 + "px", color: "dimgrey", textDecoration: "none", fontSize: "11px", fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" }),
                    h._creditLink.setAttribute("tabIndex", -1), h._creditLink.setAttribute("target", "_blank"));
                if (0 === h.renderCount || m || v) h._creditLink.setAttribute("href", h.creditHref), h._creditLink.innerHTML = h.creditText;
                h._creditLink && h.creditHref && h.creditText ? (h._creditLink.parentElement || h._canvasJSContainer.appendChild(h._creditLink), h._creditLink.style.top = h.height - 14 + "px") : h._creditLink.parentElement && h._canvasJSContainer.removeChild(h._creditLink)
            }
        }
    }

    function sa(h, m) {
        Ha && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var v = document.createElement("canvas");
        v.setAttribute("class", "canvasjs-chart-canvas");
        Ma(v, h, m);
        w || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(v);
        return v
    }

    function P(h, m) { for (var v in m) h.style[v] = m[v] }

    function ua(h, m, v) {
        m.getAttribute("state") || (m.style.backgroundColor = h.toolbar.itemBackgroundColor, m.style.color = h.toolbar.fontColor, m.style.border = "none", P(m, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
        m.getAttribute("state") !==
            v && (m.setAttribute("state", v), m.setAttribute("type", "button"), P(m, { padding: "5px 12px", cursor: "pointer", "float": "left", width: "40px", height: "25px", outline: "0px", verticalAlign: "baseline", lineHeight: "0" }), m.setAttribute("title", h._cultureInfo[v + "Text"]), m.innerHTML = "<img src='" + lb[v].image + "' alt='" + h._cultureInfo[v + "Text"] + "' />", P(m.childNodes[0], { height: "95%", pointerEvents: "none" }))
    }

    function La() { for (var h = null, m = 0; m < arguments.length; m++) h = arguments[m], h.style && (h.style.display = "inline") }

    function ta() {
        for (var h =
                null, m = 0; m < arguments.length; m++)(h = arguments[m]) && h.style && (h.style.display = "none")
    }

    function Ta(h, m, v, r, w) { if (null === h || "undefined" === typeof h) return "undefined" === typeof v ? m : v;
        h = parseFloat(h.toString()) * (0 <= h.toString().indexOf("%") ? m / 100 : 1); "undefined" !== typeof r && (h = Math.min(r, h), "undefined" !== typeof w && (h = Math.max(w, h))); return !isNaN(h) && h <= m && 0 <= h ? h : "undefined" === typeof v ? m : v }

    function ba(h, m, v, w, pa) {
        this._defaultsKey = h;
        this._themeOptionsKey = m;
        this._index = w;
        this.parent = pa;
        this._eventListeners = [];
        h = {};
        this.theme && r(this.parent) && r(m) && r(w) ? h = r(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[m]) && (null === w ? h = this.parent.themeOptions[m] : 0 < this.parent.themeOptions[m].length && (w = Math.min(this.parent.themeOptions[m].length - 1, w), h = this.parent.themeOptions[m][w]));
        this.themeOptions = h;
        this.options = v ? v : { _isPlaceholder: !0 };
        this.setOptions(this.options, h)
    }

    function Ea(h, m, v, r, w) {
        "undefined" ===
        typeof w && (w = 0);
        this._padding = w;
        this._x1 = h;
        this._y1 = m;
        this._x2 = v;
        this._y2 = r;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }

    function ia(h, m) { ia.base.constructor.call(this, "TextBlock", null, m, null, null);
        this.ctx = h;
        this._isDirty = !0;
        this._wrappedText = null;
        this._initialize() }

    function Ua(h, m) { Ua.base.constructor.call(this, "Toolbar", "toolbar", m, null, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar" }

    function ya(h, m) {
        ya.base.constructor.call(this,
            "Title", "title", m, null, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (r(this.options.margin) && h.options.subtitles)
            for (var v = h.options.subtitles, w = 0; w < v.length; w++)
                if ((r(v[w].horizontalAlign) && "center" === this.horizontalAlign || v[w].horizontalAlign === this.horizontalAlign) && (r(v[w].verticalAlign) && "top" === this.verticalAlign || v[w].verticalAlign === this.verticalAlign) && !v[w].dockInsidePlotArea === !this.dockInsidePlotArea) { this.margin = 0; break }
                "undefined" === typeof this.options.fontSize &&
            (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null }
    }

    function Ia(h, m, v) { Ia.base.constructor.call(this, "Subtitle", "subtitles", m, v, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0; "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null } }

    function Va() {
        this.pool = []
    }

    function Ja(h) { var m;
        h && Ka[h] && (m = Ka[h]);
        Ja.base.constructor.call(this, "CultureInfo", null, m, null, null) }
    var Ha = !1,
        S = {},
        w = !!document.createElement("canvas").getContext,
        oa = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "light1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditHref: "",
                creditText: "CanvasJS",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
                publicProperties: { title: "readWrite", subtitles: "readWrite", toolbar: "readWrite", toolTip: "readWrite", legend: "readWrite", axisX: "readWrite", axisY: "readWrite", axisX2: "readWrite", axisY2: "readWrite", data: "readWrite", options: "readWrite", bounds: "readOnly", container: "readOnly", selectedColorSet: "readOnly" }
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: w ? "transparent" : null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white", publicProperties: { options: "readWrite", chart: "readOnly" } },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                backgroundColor: w ? "transparent" : null,
                borderColor: w ? "transparent" : null,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: null,
                maxHeight: null,
                markerMargin: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
                publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "black",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
                updated: null,
                hidden: null,
                publicProperties: { options: "readWrite", chart: "readOnly" }
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                titleBackgroundColor: w ? "transparent" : null,
                titleBorderColor: w ? "transparent" : null,
                titleBorderThickness: 0,
                titleCornerRadius: 0,
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                labelBackgroundColor: w ? "transparent" : null,
                labelBorderColor: w ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelPlacement: "outside",
                labelTextAlign: "left",
                prefix: "",
                suffix: "",
                includeZero: !1,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                tickPlacement: "outside",
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "#A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: w ? "transparent" : null,
                valueFormatString: null,
                margin: 2,
                publicProperties: { options: "readWrite", stripLines: "readWrite", scaleBreaks: "readWrite", crosshair: "readWrite", bounds: "readOnly", chart: "readOnly" }
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: null,
                labelBorderColor: w ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1,
                publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
            },
            ScaleBreaks: {
                autoCalculate: !1,
                collapsibleThreshold: "25%",
                maxNumberOfAutoBreaks: 2,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: { options: "readWrite", customBreaks: "readWrite", axis: "readOnly", autoBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" }
            },
            Break: {
                startValue: null,
                endValue: null,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: {
                    options: "readWrite",
                    scaleBreaks: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Crosshair: {
                enabled: !1,
                snapToDataPoint: !1,
                color: "grey",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: w ? "grey" : null,
                labelBorderColor: w ? "grey" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: w ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontSize: 12,
                labelFontColor: "#fff",
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                valueFormatString: null,
                updated: null,
                hidden: null,
                publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: "default",
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelTextAlign: "left",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: "gray",
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "white",
                fallingColor: "red",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                neckHeight: null,
                neckWidth: null,
                reversed: !1,
                valueRepresents: null,
                linkedDataSeriesIndex: null,
                whiskerThickness: 2,
                whiskerDashType: "solid",
                whiskerColor: null,
                whiskerLength: null,
                stemThickness: 2,
                stemColor: null,
                stemDashType: "solid",
                upperBoxColor: "white",
                lowerBoxColor: "white",
                type: "column",
                xValueType: "number",
                axisXType: "primary",
                axisYType: "primary",
                axisXIndex: 0,
                axisYIndex: 0,
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: w ? "transparent" : null,
                legendMarkerBorderThickness: 0,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: w ? "transparent" : null,
                markerBorderThickness: 0,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
                publicProperties: { options: "readWrite", axisX: "readWrite", axisY: "readWrite", chart: "readOnly" }
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                textAlign: "left",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            },
            CultureInfo: { decimalSeparator: ".", digitGroupSeparator: ",", zoomText: "Zoom", panText: "Pan", resetText: "Reset", menuText: "More Options", saveJPGText: "Save as JPEG", savePNGText: "Save as PNG", printText: "Print", days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "), months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ") }
        },
        Ka = { en: {} },
        x = w ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
        Fa = w ? "Impact, Charcoal, sans-serif" : "Arial",
        za = { colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "), colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "), colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ") },
        H, Z, U, da, ha;
    Z = "#333333";
    U = "#000000";
    H = "#666666";
    ha = da = "#000000";
    var ca = 20,
        E = 14,
        Wa = {
            colorSet: "colorSet1",
            backgroundColor: "#FFFFFF",
            title: { fontFamily: Fa, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 },
            subtitles: [{ fontFamily: Fa, fontSize: E, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
            data: [{ indexLabelFontFamily: x, indexLabelFontSize: E, indexLabelFontColor: Z, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
            axisX: [{
                titleFontFamily: x,
                titleFontSize: ca,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: U,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 0,
                gridColor: H,
                stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: x, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: x,
                titleFontSize: ca,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: U,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 0,
                gridColor: H,
                stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ha,
                    color: da,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            axisY: [{
                titleFontFamily: x,
                titleFontSize: ca,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: U,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 1,
                gridColor: H,
                stripLines: [{
                    labelFontFamily: x,
                    labelFontSize: E,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: { labelFontFamily: x, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            axisY2: [{
                titleFontFamily: x,
                titleFontSize: ca,
                titleFontColor: Z,
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: U,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: H,
                tickThickness: 1,
                tickColor: H,
                gridThickness: 1,
                gridColor: H,
                stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: x, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            legend: { fontFamily: x, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
            toolTip: { fontFamily: x, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 },
            toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" }
        };
    U = Z = "#F5F5F5";
    H = "#FFFFFF";
    da = "#40BAF1";
    ha = "#F5F5F5";
    var ca = 20,
        E = 14,
        bb = {
            colorSet: "colorSet2",
            title: {
                fontFamily: x,
                fontSize: 33,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [{ fontFamily: x, fontSize: E, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }],
            data: [{ indexLabelFontFamily: x, indexLabelFontSize: E, indexLabelFontColor: "#666666", indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
            axisX: [{
                titleFontFamily: x,
                titleFontSize: ca,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickThickness: 1,
                tickColor: "#BBBBBB",
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                crosshair: { labelFontFamily: x, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: x,
                titleFontSize: ca,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                crosshair: {
                    labelFontFamily: x,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            axisY: [{
                titleFontFamily: x,
                titleFontSize: ca,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                crosshair: { labelFontFamily: x, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            axisY2: [{
                titleFontFamily: x,
                titleFontSize: ca,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                crosshair: { labelFontFamily: x, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            legend: { fontFamily: x, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
            toolTip: { fontFamily: x, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 },
            toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" }
        };
    U = Z = "#F5F5F5";
    H = "#FFFFFF";
    da = "#40BAF1";
    ha = "#F5F5F5";
    ca = 20;
    E = 14;
    Fa = {
        colorSet: "colorSet12",
        backgroundColor: "#2A2A2A",
        title: { fontFamily: Fa, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 },
        subtitles: [{ fontFamily: Fa, fontSize: E, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
        toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" },
        data: [{
            indexLabelFontFamily: x,
            indexLabelFontSize: E,
            indexLabelFontColor: U,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        }],
        axisX: [{
            titleFontFamily: x,
            titleFontSize: ca,
            titleFontColor: U,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: E,
            labelFontColor: U,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H,
            tickThickness: 1,
            tickColor: H,
            gridThickness: 0,
            gridColor: H,
            stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ha,
                color: da,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        axisX2: [{
            titleFontFamily: x,
            titleFontSize: ca,
            titleFontColor: U,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: E,
            labelFontColor: U,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H,
            tickThickness: 1,
            tickColor: H,
            gridThickness: 0,
            gridColor: H,
            stripLines: [{
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: { labelFontFamily: x, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
            scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        axisY: [{
            titleFontFamily: x,
            titleFontSize: ca,
            titleFontColor: U,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: E,
            labelFontColor: U,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H,
            tickThickness: 1,
            tickColor: H,
            gridThickness: 1,
            gridColor: H,
            stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
            crosshair: { labelFontFamily: x, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY2: [{
            titleFontFamily: x,
            titleFontSize: ca,
            titleFontColor: U,
            titleFontWeight: "normal",
            labelFontFamily: x,
            labelFontSize: E,
            labelFontColor: U,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: H,
            tickThickness: 1,
            tickColor: H,
            gridThickness: 1,
            gridColor: H,
            stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
            crosshair: {
                labelFontFamily: x,
                labelFontSize: E,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ha,
                color: da,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        legend: { fontFamily: x, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
        toolTip: { fontFamily: x, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: U, backgroundColor: "rgba(0, 0, 0, .7)" }
    };
    H = "#FFFFFF";
    U = Z = "#FAFAFA";
    da = "#40BAF1";
    ha = "#F5F5F5";
    var ca = 20,
        E = 14,
        cb = {
            light1: Wa,
            light2: bb,
            dark1: Fa,
            dark2: {
                colorSet: "colorSet2",
                backgroundColor: "#32373A",
                title: { fontFamily: x, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 },
                subtitles: [{ fontFamily: x, fontSize: E, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
                toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" },
                data: [{
                    indexLabelFontFamily: x,
                    indexLabelFontSize: E,
                    indexLabelFontColor: U,
                    indexLabelFontWeight: "normal",
                    indexLabelLineThickness: 1
                }],
                axisX: [{
                    titleFontFamily: x,
                    titleFontSize: ca,
                    titleFontColor: U,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: E,
                    labelFontColor: U,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: H,
                    tickThickness: 1,
                    tickColor: H,
                    gridThickness: 0,
                    gridColor: H,
                    stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: {
                        labelFontFamily: x,
                        labelFontSize: E,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: ha,
                        color: da,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
                }],
                axisX2: [{
                    titleFontFamily: x,
                    titleFontSize: ca,
                    titleFontColor: U,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: E,
                    labelFontColor: U,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: H,
                    tickThickness: 1,
                    tickColor: H,
                    gridThickness: 0,
                    gridColor: H,
                    stripLines: [{
                        labelFontFamily: x,
                        labelFontSize: E,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: { labelFontFamily: x, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
                }],
                axisY: [{
                    titleFontFamily: x,
                    titleFontSize: ca,
                    titleFontColor: U,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: E,
                    labelFontColor: U,
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: H,
                    tickThickness: 1,
                    tickColor: H,
                    gridThickness: 1,
                    gridColor: H,
                    stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: x, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisY2: [{
                    titleFontFamily: x,
                    titleFontSize: ca,
                    titleFontColor: U,
                    titleFontWeight: "normal",
                    labelFontFamily: x,
                    labelFontSize: E,
                    labelFontColor: U,
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: H,
                    tickThickness: 1,
                    tickColor: H,
                    gridThickness: 1,
                    gridColor: H,
                    stripLines: [{ labelFontFamily: x, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: {
                        labelFontFamily: x,
                        labelFontSize: E,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: ha,
                        color: da,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
                }],
                legend: { fontFamily: x, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
                toolTip: { fontFamily: x, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: U, backgroundColor: "rgba(0, 0, 0, .7)" }
            },
            theme1: Wa,
            theme2: bb,
            theme3: Wa
        },
        T = {
            numberDuration: 1,
            yearDuration: 314496E5,
            monthDuration: 2592E6,
            weekDuration: 6048E5,
            dayDuration: 864E5,
            hourDuration: 36E5,
            minuteDuration: 6E4,
            secondDuration: 1E3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
        },
        hb = function() { var h = !1; try { var m = Object.defineProperty && Object.defineProperty({}, "passive", { get: function() { h = !0; return !1 } });
                window.addEventListener && (window.addEventListener("test", null, m), window.removeEventListener("test", null, m)) } catch (v) { h = !1 } return h }(),
        Za = {},
        va = null,
        mb = function() { this.ctx.clearRect(0, 0, this.width, this.height);
            this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height)) },
        xa = function(h) { h.width = 1;
            h.height = 1;
            h.getContext("2d") && h.getContext("2d").clearRect(0, 0, 1, 1) },
        nb = function(h, m, v) { m = Math.min(this.width, this.height); return Math.max("theme4" === this.theme ? 0 : 300 <= m ? 12 : 11, Math.round(m * (h / 400))) },
        Aa = function() {
            var h = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                m = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                v = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                r = "January February March April May June July August September October November December".split(" "),
                w = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                x = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                F = /[^-+\dA-Z]/g;
            return function(E, N, M) {
                var H = M ? M.days : m,
                    Q = M ? M.months : r,
                    J = M ? M.shortDays :
                    v,
                    T = M ? M.shortMonths : w;
                M = "";
                var S = !1;
                E = E && E.getTime ? E : E ? new Date(E) : new Date;
                if (isNaN(E)) throw SyntaxError("invalid date");
                "UTC:" === N.slice(0, 4) && (N = N.slice(4), S = !0);
                M = S ? "getUTC" : "get";
                var P = E[M + "Date"](),
                    K = E[M + "Day"](),
                    $ = E[M + "Month"](),
                    a = E[M + "FullYear"](),
                    d = E[M + "Hours"](),
                    c = E[M + "Minutes"](),
                    b = E[M + "Seconds"](),
                    e = E[M + "Milliseconds"](),
                    f = S ? 0 : E.getTimezoneOffset();
                return M = N.replace(h, function(l) {
                    switch (l) {
                        case "D":
                            return P;
                        case "DD":
                            return X(P, 2);
                        case "DDD":
                            return J[K];
                        case "DDDD":
                            return H[K];
                        case "M":
                            return $ +
                                1;
                        case "MM":
                            return X($ + 1, 2);
                        case "MMM":
                            return T[$];
                        case "MMMM":
                            return Q[$];
                        case "Y":
                            return parseInt(String(a).slice(-2));
                        case "YY":
                            return X(String(a).slice(-2), 2);
                        case "YYY":
                            return X(String(a).slice(-3), 3);
                        case "YYYY":
                            return X(a, 4);
                        case "h":
                            return d % 12 || 12;
                        case "hh":
                            return X(d % 12 || 12, 2);
                        case "H":
                            return d;
                        case "HH":
                            return X(d, 2);
                        case "m":
                            return c;
                        case "mm":
                            return X(c, 2);
                        case "s":
                            return b;
                        case "ss":
                            return X(b, 2);
                        case "f":
                            return X(String(e), 3).slice(0, 1);
                        case "ff":
                            return X(String(e), 3).slice(0, 2);
                        case "fff":
                            return X(String(e),
                                3).slice(0, 3);
                        case "t":
                            return 12 > d ? "a" : "p";
                        case "tt":
                            return 12 > d ? "am" : "pm";
                        case "T":
                            return 12 > d ? "A" : "P";
                        case "TT":
                            return 12 > d ? "AM" : "PM";
                        case "K":
                            return S ? "UTC" : (String(E).match(x) || [""]).pop().replace(F, "");
                        case "z":
                            return (0 < f ? "-" : "+") + Math.floor(Math.abs(f) / 60);
                        case "zz":
                            return (0 < f ? "-" : "+") + X(Math.floor(Math.abs(f) / 60), 2);
                        case "zzz":
                            return (0 < f ? "-" : "+") + X(Math.floor(Math.abs(f) / 60), 2) + X(Math.abs(f) % 60, 2);
                        default:
                            return l.slice(1, l.length - 1)
                    }
                })
            }
        }(),
        ea = function(h, m, v) {
            if (null === h) return "";
            if (!isFinite(h)) return h;
            h = Number(h);
            var r = 0 > h ? !0 : !1;
            r && (h *= -1);
            var w = v ? v.decimalSeparator : ".",
                x = v ? v.digitGroupSeparator : ",",
                F = "";
            m = String(m);
            var F = 1,
                E = v = "",
                N = -1,
                M = [],
                H = [],
                Q = 0,
                J = 0,
                T = 0,
                S = !1,
                P = 0,
                E = m.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            m = null;
            for (var K = 0; E && K < E.length; K++)
                if (m = E[K], "." === m && 0 > N) N = K;
                else {
                    if ("%" === m) F *= 100;
                    else if ("\u2030" === m) { F *= 1E3; continue } else if ("," === m[0] && "." === m[m.length - 1]) { F /= Math.pow(1E3, m.length - 1);
                        N = K + m.length - 1; continue } else "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || (S = !0);
                    0 > N ? (M.push(m), "#" === m || "0" === m ? Q++ : "," === m && T++) : (H.push(m), "#" !== m && "0" !== m || J++)
                }
            S && (m = Math.floor(h), E = -Math.floor(Math.log(h) / Math.LN10 + 1), P = 0 === h ? 0 : 0 === m ? -(Q + E) : String(m).length - Q, F /= Math.pow(10, P));
            0 > N && (N = K);
            F = (h * F).toFixed(J);
            m = F.split(".");
            F = (m[0] + "").split("");
            h = (m[1] + "").split("");
            F && "0" === F[0] && F.shift();
            for (S = E = K = J = N = 0; 0 < M.length;)
                if (m = M.pop(), "#" === m || "0" === m)
                    if (N++, N === Q) {
                        var $ = F,
                            F = [];
                        if ("0" === m)
                            for (m = Q - J - ($ ? $.length : 0); 0 < m;) $.unshift("0"), m--;
                        for (; 0 < $.length;) v = $.pop() + v, S++, 0 === S %
                            E && (K === T && 0 < $.length) && (v = x + v)
                    } else 0 < F.length ? (v = F.pop() + v, J++, S++) : "0" === m && (v = "0" + v, J++, S++), 0 === S % E && (K === T && 0 < F.length) && (v = x + v);
            else "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || !/[eE][+-]*[0]+/.test(m) ? "," === m ? (K++, E = S, S = 0, 0 < F.length && (v = x + v)) : v = 1 < m.length && ('"' === m[0] && '"' === m[m.length - 1] || "'" === m[0] && "'" === m[m.length - 1]) ? m.slice(1, m.length - 1) + v : m + v : (m = 0 > P ? m.replace("+", "").replace("-", "") : m.replace("-", ""), v += m.replace(/[0]+/, function(a) { return X(P, a.length) }));
            x = "";
            for (M = !1; 0 < H.length;) m =
                H.shift(), "#" === m || "0" === m ? 0 < h.length && 0 !== Number(h.join("")) ? (x += h.shift(), M = !0) : "0" === m && (x += "0", M = !0) : 1 < m.length && ('"' === m[0] && '"' === m[m.length - 1] || "'" === m[0] && "'" === m[m.length - 1]) ? x += m.slice(1, m.length - 1) : "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || !/[eE][+-]*[0]+/.test(m) ? x += m : (m = 0 > P ? m.replace("+", "").replace("-", "") : m.replace("-", ""), x += m.replace(/[0]+/, function(a) { return X(P, a.length) }));
            v += (M ? w : "") + x;
            return r ? "-" + v : v
        },
        Oa = function(h) {
            var m = 0,
                v = 0;
            h = h || window.event;
            h.offsetX || 0 === h.offsetX ?
                (m = h.offsetX, v = h.offsetY) : h.layerX || 0 == h.layerX ? (m = h.layerX, v = h.layerY) : (m = h.pageX - h.target.offsetLeft, v = h.pageY - h.target.offsetTop);
            return { x: m, y: v }
        },
        ab = !0,
        Sa = window.devicePixelRatio || 1,
        Na = 1,
        ga = ab ? Sa / Na : 1,
        V = function(h, m, v, r, w, x, F, E, N, M, Q, S, H) {
            "undefined" === typeof H && (H = 1);
            F = F || 0;
            E = E || "black";
            var J = 15 < r - m && 15 < w - v ? 8 : 0.35 * Math.min(r - m, w - v);
            h.beginPath();
            h.moveTo(m, v);
            h.save();
            h.fillStyle = x;
            h.globalAlpha = H;
            h.fillRect(m, v, r - m, w - v);
            h.globalAlpha = 1;
            0 < F && (H = 0 === F % 2 ? 0 : 0.5, h.beginPath(), h.lineWidth = F, h.strokeStyle =
                E, h.moveTo(m, v), h.rect(m - H, v - H, r - m + 2 * H, w - v + 2 * H), h.stroke());
            h.restore();
            !0 === N && (h.save(), h.beginPath(), h.moveTo(m, v), h.lineTo(m + J, v + J), h.lineTo(r - J, v + J), h.lineTo(r, v), h.closePath(), F = h.createLinearGradient((r + m) / 2, v + J, (r + m) / 2, v), F.addColorStop(0, x), F.addColorStop(1, "rgba(255, 255, 255, .4)"), h.fillStyle = F, h.fill(), h.restore());
            !0 === M && (h.save(), h.beginPath(), h.moveTo(m, w), h.lineTo(m + J, w - J), h.lineTo(r - J, w - J), h.lineTo(r, w), h.closePath(), F = h.createLinearGradient((r + m) / 2, w - J, (r + m) / 2, w), F.addColorStop(0,
                x), F.addColorStop(1, "rgba(255, 255, 255, .4)"), h.fillStyle = F, h.fill(), h.restore());
            !0 === Q && (h.save(), h.beginPath(), h.moveTo(m, v), h.lineTo(m + J, v + J), h.lineTo(m + J, w - J), h.lineTo(m, w), h.closePath(), F = h.createLinearGradient(m + J, (w + v) / 2, m, (w + v) / 2), F.addColorStop(0, x), F.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = F, h.fill(), h.restore());
            !0 === S && (h.save(), h.beginPath(), h.moveTo(r, v), h.lineTo(r - J, v + J), h.lineTo(r - J, w - J), h.lineTo(r, w), F = h.createLinearGradient(r - J, (w + v) / 2, r, (w + v) / 2), F.addColorStop(0,
                x), F.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = F, F.addColorStop(0, x), F.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = F, h.fill(), h.closePath(), h.restore())
        },
        W = function(h) { for (var m = "", r = 0; r < h.length; r++) m += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(r)); return m },
        db = window && window[W("mnb`uhno")] && window[W("mnb`uhno")].href && window[W("mnb`uhno")].href.indexOf && (-1 !== window[W("mnb`uhno")].href.indexOf(W("b`ow`rkr/bnl")) || -1 !== window[W("mnb`uhno")].href.indexOf(W("gdonqhy/bnl")) ||
            -1 !== window[W("mnb`uhno")].href.indexOf(W("gheemd"))),
        kb = db && -1 === window[W("mnb`uhno")].href.indexOf(W("gheemd")),
        lb = {
            reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" },
            pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" },
            zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=" },
            menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC" }
        };
    (function() {
        S.fSDec = function(h) { for (var m = "", r = 0; r < h.length; r++) m += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(r)); return m };
        delete oa[S.fSDec("Bi`su")][S.fSDec("bsdehuIsdg")];
        S.pro = { sCH: oa[S.fSDec("Bi`su")][S.fSDec("bsdehuIsdg")] };
        S.pos = ["cm", "cs", "um"];
        S._fTWm = function(h) {
            if ("undefined" === typeof S.pro.sCH && !db) try {
                var m = (new Date).getMonth() % 3,
                    r, w, x = h[S.fSDec("buy")];
                x[S.fSDec("udyuC`rdmhod")] = S.fSDec("unq");
                x[S.fSDec("gnou")] = 11 + S.fSDec("qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg");
                x[S.fSDec("ghmmRuxmd")] = S.fSDec("fsdx");
                r = "cm" === S.pos[m] || "um" === S.pos[m] ? 0 : h.width - x[S.fSDec("ld`rtsdUdyu")](S.fSDec("B`ow`rKR!Ush`m")).width;
                w = "um" === S.pos[m] ? 0 : h.height - 11;
                x[S.fSDec("ghmmUdyu")](S.fSDec("B`ow`rKR!Ush`m"), r, w);
                "cs" === S.pos[m] && (h[S.fSDec("^bsdehuMhoj")].style.right = S.fSDec("`tun"))
            } catch (E) {}
        }
    })();
    ba.prototype.setOptions = function(h, m) {
        if (oa[this._defaultsKey]) {
            var r = oa[this._defaultsKey],
                w;
            for (w in r) "publicProperties" !== w && r.hasOwnProperty(w) && (this[w] = h && w in h ? h[w] : m && w in m ?
                m[w] : r[w])
        } else Ha && window.console && console.log("defaults not set")
    };
    ba.prototype.get = function(h) { var m = oa[this._defaultsKey]; if ("options" === h) return this.options && this.options._isPlaceholder ? null : this.options; if (m.hasOwnProperty(h) || m.publicProperties && m.publicProperties.hasOwnProperty(h)) return this[h];
        window.console && window.console.log('Property "' + h + "\" doesn't exist. Please check for typo.") };
    ba.prototype.set = function(h, m, r) {
        r = "undefined" === typeof r ? !0 : r;
        var w = oa[this._defaultsKey];
        if ("options" ===
            h) this.createUserOptions(m);
        else if (w.hasOwnProperty(h) || w.publicProperties && w.publicProperties.hasOwnProperty(h) && "readWrite" === w.publicProperties[h]) this.options._isPlaceholder && this.createUserOptions(), this.options[h] = m;
        else { window.console && (w.publicProperties && w.publicProperties.hasOwnProperty(h) && "readOnly" === w.publicProperties[h] ? window.console.log('Property "' + h + '" is read-only.') : window.console.log('Property "' + h + "\" doesn't exist. Please check for typo.")); return }
        r && (this.stockChart || this.chart ||
            this).render()
    };
    ba.prototype.addTo = function(h, m, r, w) {
        w = "undefined" === typeof w ? !0 : w;
        var x = oa[this._defaultsKey];
        x.hasOwnProperty(h) || x.publicProperties && x.publicProperties.hasOwnProperty(h) && "readWrite" === x.publicProperties[h] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[h] && (this.options[h] = []), h = this.options[h], r = "undefined" === typeof r || null === r ? h.length : r, h.splice(r, 0, m), w && (this.stockChart || this.chart || this).render()) : window.console && (x.publicProperties &&
            x.publicProperties.hasOwnProperty(h) && "readOnly" === x.publicProperties[h] ? window.console.log('Property "' + h + '" is read-only.') : window.console.log('Property "' + h + "\" doesn't exist. Please check for typo."))
    };
    ba.prototype.createUserOptions = function(h) {
        if ("undefined" !== typeof h || this.options._isPlaceholder)
            if (this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
                this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
                var m = this.parent.options[this.optionsName],
                    r = m.length;
                this.options._isPlaceholder || (Da(m), r = m.indexOf(this.options));
                this.options = "undefined" === typeof h ? {} : h;
                m[r] = this.options
            } else this.options = "undefined" === typeof h ? {} : h, h = this.parent.options, this.optionsName ? m = this.optionsName : (m = this._defaultsKey) && 0 !== m.length ? (r = m.charAt(0).toLowerCase(), 1 < m.length && (r = r.concat(m.slice(1))), m = r) : m = void 0, h[m] = this.options
    };
    ba.prototype.remove = function(h) {
        h = "undefined" === typeof h ? !0 : h;
        if (this.isOptionsInArray) {
            var m = this.parent.options[this.optionsName];
            Da(m);
            var r = m.indexOf(this.options);
            0 <= r && m.splice(r, 1)
        } else delete this.parent.options[this.optionsName];
        h && (this.stockChart || this.chart || this).render()
    };
    ba.prototype.updateOption = function(h) {
        !oa[this._defaultsKey] && (Ha && window.console) && console.log("defaults not set");
        var m = oa[this._defaultsKey],
            w = {},
            x = this[h],
            E = this._themeOptionsKey,
            J = this._index;
        this.theme && r(this.parent) && r(E) && r(J) ? w = r(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent &&
            (this.parent.themeOptions && this.parent.themeOptions[E]) && (null === J ? w = this.parent.themeOptions[E] : 0 < this.parent.themeOptions[E].length && (w = Math.min(this.parent.themeOptions[E].length - 1, J), w = this.parent.themeOptions[E][w]));
        this.themeOptions = w;
        h in m && (x = h in this.options ? this.options[h] : w && h in w ? w[h] : m[h]);
        if (x === this[h]) return !1;
        this[h] = x;
        return !0
    };
    ba.prototype.trackChanges = function(h) { if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[h] = this.options[h] };
    ba.prototype.isBeingTracked =
        function(h) { this.options._oldOptions || (this.options._oldOptions = {}); return this.options._oldOptions[h] ? !0 : !1 };
    ba.prototype.hasOptionChanged = function(h) { if (!this.sessionVariables) throw "Session Variable Store not set"; return this.sessionVariables[h] !== this.options[h] };
    ba.prototype.addEventListener = function(h, m, r) { h && m && (this._eventListeners[h] = this._eventListeners[h] || [], this._eventListeners[h].push({ context: r || this, eventHandler: m })) };
    ba.prototype.removeEventListener = function(h, m) {
        if (h && m && this._eventListeners[h])
            for (var r =
                    this._eventListeners[h], w = 0; w < r.length; w++)
                if (r[w].eventHandler === m) { r[w].splice(w, 1); break }
    };
    ba.prototype.removeAllEventListeners = function() { this._eventListeners = [] };
    ba.prototype.dispatchEvent = function(h, m, r) { if (h && this._eventListeners[h]) { m = m || {}; for (var w = this._eventListeners[h], x = 0; x < w.length; x++) w[x].eventHandler.call(w[x].context, m) } "function" === typeof this[h] && this[h].call(r || this.chart, m) };
    Ea.prototype.registerSpace = function(h, m) {
        "top" === h ? this._topOccupied += m.height : "bottom" === h ? this._bottomOccupied +=
            m.height : "left" === h ? this._leftOccupied += m.width : "right" === h && (this._rightOccupied += m.width)
    };
    Ea.prototype.unRegisterSpace = function(h, m) { "top" === h ? this._topOccupied -= m.height : "bottom" === h ? this._bottomOccupied -= m.height : "left" === h ? this._leftOccupied -= m.width : "right" === h && (this._rightOccupied -= m.width) };
    Ea.prototype.getFreeSpace = function() {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied -
                this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
        }
    };
    Ea.prototype.reset = function() { this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding };
    na(ia, ba);
    ia.prototype._initialize = function() {
        r(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = r(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = r(this.padding.right) ?
            0 : Number(this.padding.right) | 0, this.bottomPadding = r(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = r(this.padding.left) ? 0 : Number(this.padding.left) | 0)
    };
    ia.prototype.render = function(h) {
        if (0 !== this.fontSize) {
            h && this.ctx.save();
            var m = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var r = 0;
            this._isDirty && this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + r);
            "middle" === this.textBaseline && (r = -this._lineHeight / 2);
            this.ctx.font = this._getFontString();
            this.ctx.rotate(Math.PI /
                180 * this.angle);
            var w = 0,
                x = this.topPadding,
                E = null;
            this.ctx.roundRect || Ca(this.ctx);
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, r, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            this.ctx.fillStyle = this.fontColor;
            for (r = 0; r < this._wrappedText.lines.length; r++) {
                E = this._wrappedText.lines[r];
                if ("right" === this.horizontalAlign || "right" === this.textAlign) w = this.width - E.width - this.rightPadding;
                else if ("left" === this.horizontalAlign ||
                    "left" === this.textAlign) w = this.leftPadding;
                else if ("center" === this.horizontalAlign || "center" === this.textAlign) w = (this.width - (this.leftPadding + this.rightPadding)) / 2 - E.width / 2 + this.leftPadding;
                this.ctx.fillText(E.text, w, x);
                x += E.height
            }
            this.ctx.font = m;
            h && this.ctx.restore()
        }
    };
    ia.prototype.setText = function(h) { this.text = h;
        this._isDirty = !0;
        this._wrappedText = null };
    ia.prototype.measureText = function() {
        this._lineHeight = Ya(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return { width: this.width, height: this.height }
    };
    ia.prototype._getLineWithWidth = function(h, m, r) {
        h = String(h);
        if (!h) return { text: "", width: 0 };
        var w = r = 0,
            x = h.length - 1,
            E = Infinity;
        for (this.ctx.font = this._getFontString(); w <= x;) { var E = Math.floor((w + x) / 2),
                F = h.substr(0, E + 1);
            r = this.ctx.measureText(F).width; if (r < m) w = E + 1;
            else if (r > m) x = E - 1;
            else break }
        r > m && 1 < F.length && (F = F.substr(0, F.length - 1), r = this.ctx.measureText(F).width);
        m = !0;
        if (F.length === h.length || " " === h[F.length]) m = !1;
        m && (h = F.split(" "), 1 < h.length && h.pop(), F = h.join(" "), r = this.ctx.measureText(F).width);
        return { text: F, width: r }
    };
    ia.prototype._wrapText = function() {
        var h = new String(Ga(String(this.text))),
            m = [],
            r = this.ctx.font,
            w = 0,
            x = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) x = w = 0;
        else
            for (; 0 < h.length;) {
                var E = this.maxHeight - (this.topPadding + this.bottomPadding),
                    F = this._getLineWithWidth(h, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
                F.height = this._lineHeight;
                m.push(F);
                var J = x,
                    x = Math.max(x, F.width),
                    w = w + F.height,
                    h = Ga(h.slice(F.text.length, h.length));
                E && w > E && (F = m.pop(), w -= F.height, x = J)
            }
        this._wrappedText = { lines: m, width: x, height: w };
        this.width = x + (this.leftPadding + this.rightPadding);
        this.height = w + (this.topPadding + this.bottomPadding);
        this.ctx.font = r
    };
    ia.prototype._getFontString = function() {
        var h;
        h = "" + (this.fontStyle ? this.fontStyle + " " : "");
        h += this.fontWeight ? this.fontWeight + " " : "";
        h += this.fontSize ? this.fontSize + "px " : "";
        var m = this.fontFamily ? this.fontFamily + "" : "";
        !w && m && (m = m.split(",")[0], "'" !== m[0] &&
            '"' !== m[0] && (m = "'" + m + "'"));
        return h += m
    };
    na(Ua, ba);
    na(ya, ba);
    ya.prototype.setLayout = function() {
        if (this.text) {
            var h = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                m = h.layoutManager.getFreeSpace(),
                w = m.x1,
                x = m.y1,
                E = 0,
                J = 0,
                F = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                N, H;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = m.width - 4 - F * ("center" === this.horizontalAlign ? 2 : 1)), J = 0.5 * m.height - this.margin - 2, E = 0) : "center" ===
                this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = m.height - 4), J = 0.5 * m.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = m.width - 4), J = 0.5 * m.height - 4));
            var M;
            r(this.padding) || "number" !== typeof this.padding ? r(this.padding) || "object" !== typeof this.padding || (M = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, M += this.padding.bottom ? this.padding.bottom : this.padding.top ?
                this.padding.top : 0) : M = 2 * this.padding;
            this.wrap || (J = Math.min(J, 1.5 * this.fontSize + M));
            J = new ia(this.ctx, {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                fontWeight: this.fontWeight,
                horizontalAlign: this.horizontalAlign,
                verticalAlign: this.verticalAlign,
                borderColor: this.borderColor,
                borderThickness: this.borderThickness,
                backgroundColor: this.backgroundColor,
                maxWidth: this.maxWidth,
                maxHeight: J,
                cornerRadius: this.cornerRadius,
                text: this.text,
                padding: this.padding,
                textBaseline: "top"
            });
            M = J.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (x = m.y1 + 2, H = "top") : "bottom" === this.verticalAlign && (x = m.y2 - 2 - M.height, H = "bottom"), "left" === this.horizontalAlign ? w = m.x1 + 2 : "center" === this.horizontalAlign ? w = m.x1 + m.width / 2 - M.width / 2 : "right" === this.horizontalAlign && (w = m.x2 - 2 - M.width - F), N = this.horizontalAlign, this.width = M.width, this.height = M.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (w = m.x1 + 2, x = m.y2 - 2 -
                (this.maxWidth / 2 - M.width / 2), E = -90, H = "left", this.width = M.height, this.height = M.width) : "right" === this.horizontalAlign ? (w = m.x2 - 2, x = m.y1 + 2 + (this.maxWidth / 2 - M.width / 2), E = 90, H = "right", this.width = M.height, this.height = M.width) : "center" === this.horizontalAlign && (x = h.y1 + (h.height / 2 - M.height / 2), w = h.x1 + (h.width / 2 - M.width / 2), H = "center", this.width = M.width, this.height = M.height), N = "center");
            J.x = w;
            J.y = x;
            J.angle = E;
            J.horizontalAlign = N;
            this._textBlock = J;
            h.layoutManager.registerSpace(H, {
                width: this.width + ("left" === H || "right" ===
                    H ? this.margin + 2 : 0),
                height: this.height + ("top" === H || "bottom" === H ? this.margin + 2 : 0)
            });
            this.bounds = { x1: w, y1: x, x2: w + this.width, y2: x + this.height };
            this.ctx.textBaseline = "top"
        }
    };
    ya.prototype.render = function() { this._textBlock && this._textBlock.render(!0) };
    na(Ia, ba);
    Ia.prototype.setLayout = ya.prototype.setLayout;
    Ia.prototype.render = ya.prototype.render;
    Va.prototype.get = function(h, m) { var r = null;
        0 < this.pool.length ? (r = this.pool.pop(), Ma(r, h, m)) : r = sa(h, m); return r };
    Va.prototype.release = function(h) { this.pool.push(h) };
    na(Ja, ba);
    var Pa = { addTheme: function(h, m) { cb[h] = m }, addColorSet: function(h, m) { za[h] = m }, addCultureInfo: function(h, m) { Ka[h] = m }, formatNumber: function(h, m, r) { r = r || "en"; if (Ka[r]) return ea(h, m || "#,##0.##", new Ja(r)); throw "Unknown Culture Name"; }, formatDate: function(h, m, r) { r = r || "en"; if (Ka[r]) return Aa(h, m || "DD MMM YYYY", new Ja(r)); throw "Unknown Culture Name"; } };
    "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Pa : "function" === typeof define && define.amd ? define([], function() { return Pa }) :
        (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Pa);
    x = Pa.Chart = function() {
        function h(a, d) { return a.x - d.x }

        function m(a, d, c) {
            d = d || {};
            r(c) ? (this.predefinedThemes = cb, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName =
                c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
            this.theme = r(d.theme) || r(this.predefinedThemes[d.theme]) ? "light1" : d.theme;
            m.base.constructor.call(this, "Chart", this.optionsName, d, this.index, this.parent);
            var b = this;
            this._containerId = a;
            this._objectsInitialized = !1;
            this.overlaidCanvasCtx = this.ctx = null;
            this._indexLabels = [];
            this._panTimerId = 0;
            this._lastTouchEventType = "";
            this._lastTouchData = null;
            this.isAnimating = !1;
            this.renderCount = 0;
            this.disableToolTip = this.animatedRender = !1;
            this.canvasPool = new Va;
            this.allDOMEventHandlers = [];
            this.panEnabled = !1;
            this._defaultCursor = "default";
            this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
            this._dataInRenderedOrder = [];
            (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", d = a = 0, a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, d = this.options.height ? this.height : 0 < this.container.clientHeight ?
                this.container.clientHeight : this.height, this.width = a, this.height = d, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof za[this.colorSet] ? za[this.colorSet] : za.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction =
                "ltr", w || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = sa(a, d), this._preRenderCanvas = sa(a, d), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ca(this.ctx),
                    this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Ca(this._preRenderCtx), w ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = sa(a, d), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = sa(a, d), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor =
                    "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Ca(this.overlaidCanvasCtx)), this._eventManager = new da(this), this.windowResizeHandler = J(window, "resize", function() {
                        b._updateSize() &&
                            b.render()
                    }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), P(this._toolBar, { position: "absolute", right: "1px", top: "1px" }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, J(this.overlaidCanvas, "click", function(a) { b._mouseEventHandler(a) }, this.allDOMEventHandlers), J(this.overlaidCanvas, "mousemove", function(a) { b._mouseEventHandler(a) }, this.allDOMEventHandlers), J(this.overlaidCanvas,
                        "mouseup",
                        function(a) { b._mouseEventHandler(a) }, this.allDOMEventHandlers), J(this.overlaidCanvas, "mousedown", function(a) { b._mouseEventHandler(a);
                        ta(b._dropdownMenu) }, this.allDOMEventHandlers), J(this.overlaidCanvas, "mouseout", function(a) { b._mouseEventHandler(a) }, this.allDOMEventHandlers), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a) { b._touchEventHandler(a) }, this.allDOMEventHandlers), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" :
                        "touchmove",
                        function(a) { b._touchEventHandler(a) }, this.allDOMEventHandlers), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) { b._touchEventHandler(a) }, this.allDOMEventHandlers), J(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) { b._touchEventHandler(a) }, this.allDOMEventHandlers), this.toolTip = new X(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
        }

        function v(a, d) {
            for (var c = [], b, e = 0; e < a.length; e++)
                if (0 == e) c.push(a[0]);
                else {
                    var f, l, t;
                    t = e - 1;
                    f = 0 === t ? 0 : t - 1;
                    l = t === a.length - 1 ? t : t + 1;
                    b = Math.abs((a[l].x - a[f].x) / (0 === a[l].x - a[t].x ? 0.01 : a[l].x - a[t].x)) * (d - 1) / 2 + 1;
                    var B = (a[l].x - a[f].x) / b;
                    b = (a[l].y - a[f].y) / b;
                    c[c.length] = a[t].x > a[f].x && 0 < B || a[t].x < a[f].x && 0 > B ? { x: a[t].x + B / 3, y: a[t].y + b / 3 } : {
                        x: a[t].x,
                        y: a[t].y +
                            b / 9
                    };
                    t = e;
                    f = 0 === t ? 0 : t - 1;
                    l = t === a.length - 1 ? t : t + 1;
                    b = Math.abs((a[l].x - a[f].x) / (0 === a[t].x - a[f].x ? 0.01 : a[t].x - a[f].x)) * (d - 1) / 2 + 1;
                    B = (a[l].x - a[f].x) / b;
                    b = (a[l].y - a[f].y) / b;
                    c[c.length] = a[t].x > a[f].x && 0 < B || a[t].x < a[f].x && 0 > B ? { x: a[t].x - B / 3, y: a[t].y - b / 3 } : { x: a[t].x, y: a[t].y - b / 9 };
                    c[c.length] = a[e]
                }
            return c
        }

        function x(a, d, c, b, e, f, l, t, B, k) {
            var n = 0;
            k ? (l.color = f, t.color = f) : k = 1;
            n = B ? Math.abs(e - c) : Math.abs(b - d);
            n = 0 < l.trimLength ? Math.abs(n * l.trimLength / 100) : Math.abs(n - l.length);
            B ? (c += n / 2, e -= n / 2) : (d += n / 2, b -= n / 2);
            var n = 1 ===
                Math.round(l.thickness) % 2 ? 0.5 : 0,
                p = 1 === Math.round(t.thickness) % 2 ? 0.5 : 0;
            a.save();
            a.globalAlpha = k;
            a.strokeStyle = t.color || f;
            a.lineWidth = t.thickness || 2;
            a.setLineDash && a.setLineDash(N(t.dashType, t.thickness));
            a.beginPath();
            B && 0 < t.thickness ? (a.moveTo(b - l.thickness / 2, Math.round((c + e) / 2) - p), a.lineTo(d + l.thickness / 2, Math.round((c + e) / 2) - p)) : 0 < t.thickness && (a.moveTo(Math.round((d + b) / 2) - p, c + l.thickness / 2), a.lineTo(Math.round((d + b) / 2) - p, e - l.thickness / 2));
            a.stroke();
            a.strokeStyle = l.color || f;
            a.lineWidth = l.thickness ||
                2;
            a.setLineDash && a.setLineDash(N(l.dashType, l.thickness));
            a.beginPath();
            B && 0 < l.thickness ? (a.moveTo(b - n, c), a.lineTo(b - n, e), a.moveTo(d + n, c), a.lineTo(d + n, e)) : 0 < l.thickness && (a.moveTo(d, c + n), a.lineTo(b, c + n), a.moveTo(d, e - n), a.lineTo(b, e - n));
            a.stroke();
            a.restore()
        }

        function E(a, d) {
            E.base.constructor.call(this, "Legend", "legend", d, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.ghostCtx = this.chart._eventManager.ghostCtx;
            this.items = [];
            this.optionsName = "legend";
            this.height = this.width =
                0;
            this.orientation = null;
            this.dataSeries = [];
            this.bounds = { x1: null, y1: null, x2: null, y2: null };
            "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.lineHeight = Ya(this.fontFamily, this.fontSize, this.fontWeight);
            this.horizontalSpacing = this.fontSize
        }

        function H(a, d, c, b) {
            H.base.constructor.call(this, "DataSeries", "data", d, c, a);
            this.chart = a;
            this.canvas = a.canvas;
            this._ctx = a.canvas.ctx;
            this.index = c;
            this.noDataPointsInPlotArea = 0;
            this.id = b;
            this.chart._eventManager.objectMap[b] = { id: b, objectType: "dataSeries", dataSeriesIndex: c };
            a = d.dataPoints ? d.dataPoints.length : 0;
            this.dataPointEOs = [];
            for (d = 0; d < a; d++) this.dataPointEOs[d] = {};
            this.dataPointIds = [];
            this.plotUnit = [];
            this.axisY = this.axisX = null;
            this.optionsName = "data";
            this.isOptionsInArray = !0;
            null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
            this.axisPlacement = this.getDefaultAxisPlacement();
            "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
        }

        function F(a, d, c, b, e, f) {
            F.base.constructor.call(this, "Axis", d, c, b, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = a.ctx;
            this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
            this.labels = [];
            this.dataSeries = [];
            this._stripLineLabels = this._ticks = this._labels = null;
            this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
            this.isOptionsInArray = !0;
            "axisX" === e ? ("left" === f || "bottom" === f ? (this.optionsName = "axisX", r(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", r(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" === f || "bottom" === f ? (this.optionsName = "axisY", r(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2",
                r(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
            "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
            "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
            this.type = e;
            "axisX" !== e || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
            this._position = f;
            this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
            this.labelAngle = (this.labelAngle % 360 + 360) % 360;
            90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
            this.options.scaleBreaks && (this.scaleBreaks = new U(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
            this.stripLines = [];
            if (this.options.stripLines && 0 < this.options.stripLines.length)
                for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new M(this.chart,
                    this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
            this.options.crosshair && (this.crosshair = new Z(this.chart, this.options.crosshair, this));
            this._titleTextBlock = null;
            this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
            this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum =
                null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
            this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            null !== this.minimum && null !== this.viewportMinimum &&
                (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.trackChanges("viewportMinimum");
            this.trackChanges("viewportMaximum")
        }

        function U(a, d, c, b) {
            U.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", d, null, b);
            this.id = c;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = b;
            this.optionsName = "scaleBreaks";
            this.isOptionsInArray = !1;
            this._appliedBreaks = [];
            this.customBreaks = [];
            this.autoBreaks = [];
            "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
            this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
            if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
                for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new ca(this.chart, "customBreaks", this.options.customBreaks[a],
                    a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
                this._appliedBreaks.sort(function(a, b) { return a.startValue - b.startValue });
                for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue,
                    this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--)
            }
        }

        function ca(a, d, c, b, e, f) {
            ca.base.constructor.call(this, "Break", d, c, b, f);
            this.id = e;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.scaleBreaks = f;
            this.optionsName = d;
            this.isOptionsInArray = !0;
            this.type = c.type ? this.type : f.type;
            this.fillOpacity = r(c.fillOpacity) ? f.fillOpacity : this.fillOpacity;
            this.lineThickness = r(c.lineThickness) ? f.lineThickness :
                this.lineThickness;
            this.color = c.color ? this.color : f.color;
            this.lineColor = c.lineColor ? this.lineColor : f.lineColor;
            this.lineDashType = c.lineDashType ? this.lineDashType : f.lineDashType;
            !r(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
            !r(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
            "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue =
                a);
            this.spacing = "undefined" === typeof c.spacing ? f.spacing : c.spacing;
            "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = f.spacing);
            this.size = f.parent.logarithmic ? 1 : 0
        }

        function M(a, d, c, b, e) {
            M.base.constructor.call(this, "StripLine", "stripLines", d, c, e);
            this.id = b;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.label = this.label;
            this.axis = e;
            this.optionsName = "stripLines";
            this.isOptionsInArray = !0;
            this._thicknessType = "pixel";
            null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null)
        }

        function Z(a, d, c) {
            Z.base.constructor.call(this, "Crosshair", "crosshair", d, null,
                c);
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = c;
            this.optionsName = "crosshair";
            this._thicknessType = "pixel"
        }

        function X(a, d) { X.base.constructor.call(this, "ToolTip", "toolTip", d, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.currentDataPointIndex = this.currentSeriesIndex = -1;
            this._prevY = this._prevX = NaN;
            this.containerTransitionDuration = 0.1;
            this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
            this.optionsName = "toolTip";
            this._initialize() }

        function da(a) {
            this.chart =
                a;
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.ghostCanvas = sa(this.chart.width, this.chart.height);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            this.mouseoveredObjectMaps = []
        }

        function ha(a) { this.chart = a;
            this.ctx = this.chart.plotArea.ctx;
            this.animations = [];
            this.animationRequestId = null }
        na(m, ba);
        m.prototype.destroy = function() {
            var a = this.allDOMEventHandlers;
            this._animator && this._animator.cancelAllAnimations();
            this._panTimerId &&
                clearTimeout(this._panTimerId);
            for (var d = 0; d < a.length; d++) { var c = a[d][0],
                    b = a[d][1],
                    e = a[d][2],
                    f = a[d][3],
                    f = f || !1;
                c.removeEventListener ? c.removeEventListener(b, e, f) : c.detachEvent && c.detachEvent("on" + b, e) }
            this.allDOMEventHandlers = [];
            for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
            for (; this.container && this.container.hasChildNodes();) this.container.removeChild(this.container.lastChild);
            for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes();) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
            this.container = this._canvasJSContainer = null;
            this.toolTip.container = null;
            this.canvas && xa(this.canvas);
            this.overlaidCanvas && xa(this.overlaidCanvas);
            this._preRenderCanvas && xa(this._preRenderCanvas);
            this._breaksCanvas && xa(this._breaksCanvas);
            this._eventManager && this._eventManager.ghostCanvas && xa(this._eventManager.ghostCanvas);
            this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton =
                this._zoomButton = null
        };
        m.prototype._updateOptions = function() {
            var a = this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof za[this.colorSet] ? za[this.colorSet] : za.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor || (this.backgroundColor =
                "rgba(0,0,0,0)");
            this.updateOption("culture");
            this._cultureInfo = new Ja(this.options.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && w;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            this.toolbar = new Ua(this, this.options.toolbar);
            if (this.options.zoomEnabled || this.panEnabled) {
                if (this._zoomButton) P(this._zoomButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), this._zoomButton.title = this._cultureInfo.zoomText;
                else {
                    var d = !1;
                    ta(this._zoomButton = document.createElement("button"));
                    ua(this, this._zoomButton, "pan");
                    this._zoomButton.title = this._cultureInfo.panText;
                    this._toolBar.appendChild(this._zoomButton);
                    this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
                    J(this._zoomButton, "touchstart", function(a) { d = !0 }, this.allDOMEventHandlers);
                    J(this._zoomButton, "click", function() { a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, ua(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, ua(a, a._zoomButton, "pan"));
                        a.render() }, this.allDOMEventHandlers);
                    J(this._zoomButton, "mousemove", function() {
                        d ? d = !1 : (P(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") &&
                            P(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }))
                    }, this.allDOMEventHandlers);
                    J(this._zoomButton, "mouseout", function() { d || (P(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && P(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" })) }, this.allDOMEventHandlers)
                }
                this._resetButton ? (P(this._resetButton, {
                    borderRight: this.toolbar.buttonBorderThickness +
                        "px solid " + this.toolbar.buttonBorderColor,
                    backgroundColor: a.toolbar.itemBackgroundColor,
                    color: a.toolbar.fontColor
                }), this._resetButton.title = this._cultureInfo.resetText) : (d = !1, ta(this._resetButton = document.createElement("button")), ua(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor, this._toolBar.appendChild(this._resetButton), J(this._resetButton, "touchstart", function(a) { d = !0 }, this.allDOMEventHandlers),
                    J(this._resetButton, "click", function() {
                        a.toolTip.hide();
                        a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent("hidden", { chart: a, toolTip: a.toolTip }, a.toolTip);
                        a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, ua(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                        if (a.sessionVariables.axisX)
                            for (var b = 0; b < a.sessionVariables.axisX.length; b++) a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum =
                                null;
                        if (a.sessionVariables.axisX2)
                            for (b = 0; b < a.sessionVariables.axisX2.length; b++) a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
                        if (a.sessionVariables.axisY)
                            for (b = 0; b < a.sessionVariables.axisY.length; b++) a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
                        if (a.sessionVariables.axisY2)
                            for (b = 0; b < a.sessionVariables.axisY2.length; b++) a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum =
                                null;
                        a.resetOverlayedCanvas();
                        0 >= navigator.userAgent.search("MSIE") && P(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" });
                        ta(a._zoomButton, a._resetButton);
                        a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
                        a._dispatchRangeEvent("rangeChanging", "reset");
                        a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter,
                            a.stockChart));
                        a.render();
                        a.syncCharts && a.syncCharts(null, null);
                        a._dispatchRangeEvent("rangeChanged", "reset");
                        a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart))
                    }, this.allDOMEventHandlers), J(this._resetButton, "mousemove", function() {
                        d || (P(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") &&
                            P(a._resetButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }))
                    }, this.allDOMEventHandlers), J(this._resetButton, "mouseout", function() { d || (P(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && P(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" })) }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
                this.zoomEnabled ||
                    this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), La(a._zoomButton, a._resetButton)) : (this.zoomEnabled = !0, this.panEnabled = !1))
            } else this.panEnabled = this.zoomEnabled = !1;
            ib(this);
            "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? ua(a, a._zoomButton, "zoom") : ua(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && ua(a,
                a._resetButton, "reset"));
            this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
            for (var c in this.toolTip.options) this.toolTip.options.hasOwnProperty(c) && this.toolTip.updateOption(c)
        };
        m.prototype._updateSize = function() {
            var a;
            a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
            var d = 0,
                c = 0;
            this.options.width ? d = this.width : this.width = d = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
            this.options.height ? c = this.height :
                this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
            if (this.canvas.width !== d * ga || this.canvas.height !== c * ga) { for (var b = 0; b < a.length; b++) Ma(a[b], d, c);
                this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
                a = !0 } else a = !1;
            return a
        };
        m.prototype._initialize = function() {
            this.isNavigator = r(this.parent) || r(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? !1 : !0;
            this._animator ? this._animator.cancelAllAnimations() : this._animator =
                new ha(this);
            this.removeAllEventListeners();
            this.disableToolTip = !1;
            this._axes = [];
            this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
            this._updateOptions();
            this.animatedRender = w && this.animationEnabled && 0 === this.renderCount;
            this._updateSize();
            this.clearCanvas();
            this.ctx.beginPath();
            this.axisX = [];
            this.axisX2 = [];
            this.axisY = [];
            this.axisY2 = [];
            this._indexLabels = [];
            this._dataInRenderedOrder = [];
            this._events = [];
            this._eventManager && this._eventManager.reset();
            this.plotInfo = { axisPlacement: null, plotTypes: [] };
            this.layoutManager = new Ea(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
            this.data = [];
            this.title = null;
            this.subtitles = [];
            var a = 0,
                d = null;
            if (this.options.data) {
                for (var c = 0; c < this.options.data.length; c++)
                    if (a++, !this.options.data[c].type || 0 <= m._supportedChartTypes.indexOf(this.options.data[c].type)) {
                        var b = new H(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                        "error" === b.type && (b.linkedDataSeriesIndex = r(this.options.data[c].linkedDataSeriesIndex) ?
                            c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
                        null === b.name && (b.name = "DataSeries " + a);
                        null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" ===
                            b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
                        null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints &&
                            b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                        "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a) { return a.x }) && b.dataPoints.sort(h) : b.dataPoints.sort(h));
                        this.data.push(b);
                        var e = b.axisPlacement,
                            d = d || e,
                            f;
                        "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement &&
                            (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' +
                            b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (f = 'You cannot combine "' + b.type + '" with pie chart');
                        if (f && window.console) { window.console.log(f); return }
                    }
                for (c = 0; c < this.data.length; c++) {
                    if ("none" == d && "error" === this.data[c].type && window.console) { window.console.log('You cannot combine "' + b.type + '" with error chart'); return }
                    "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement =
                        d || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex])
                }
            }
            this._objectsInitialized = !0;
            this._plotAreaElements = []
        };
        m._supportedChartTypes = Da("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        m.prototype.setLayout = function() {
            for (var a = this._plotAreaElements, d = 0; d < this.data.length; d++)
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                    if (!this.data[d].axisYType || "primary" === this.data[d].axisYType)
                        if (this.options.axisY && 0 < this.options.axisY.length) {
                            if (!this.axisY.length)
                                for (var c = 0; c < this.options.axisY.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new F(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" ===
                                    this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new F(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                            this.data[d].axisY = this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0];
                            this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new F(this, "axisY", this.options.axisY,
                            0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new F(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[d].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[d]);
                    if ("secondary" === this.data[d].axisYType)
                        if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                            if (!this.axisY2.length)
                                for (c = 0; c < this.options.axisY2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new F(this, "axisY2", this.options.axisY2[c], c,
                                    "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new F(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                            this.data[d].axisY = this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0];
                            this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] =
                            new F(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new F(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[d].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[d]);
                    if (!this.data[d].axisXType || "primary" === this.data[d].axisXType)
                        if (this.options.axisX && 0 < this.options.axisX.length) {
                            if (!this.axisX.length)
                                for (c = 0; c < this.options.axisX.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] =
                                    new F(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new F(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                            this.data[d].axisX = this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0];
                            this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ?
                            this._axes.push(this.axisX[0] = new F(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new F(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[d].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[d]);
                    if ("secondary" === this.data[d].axisXType)
                        if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                            if (!this.axisX2.length)
                                for (c = 0; c < this.options.axisX2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] =
                                    new F(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new F(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                            this.data[d].axisX = this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0];
                            this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisX2.length || ("normal" ===
                            this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new F(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new F(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[d].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[d])
                }
            if (this.axisY) {
                for (c = 1; c < this.axisY.length; c++) "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
                for (c = 0; c < this.axisY.length - 1; c++) "undefined" ===
                    typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10)
            }
            if (this.axisY2) { for (c = 1; c < this.axisY2.length; c++) "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0); for (c = 0; c < this.axisY2.length - 1; c++) "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10) }
            this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness =
                0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
            if (this.axisX)
                for (c = 0; c < this.axisX.length; c++) "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
            if (this.axisX2)
                for (c = 0; c < this.axisX2.length; c++) "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
            this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness &&
                "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
            c = !1;
            if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled))
                for (d = 0; d < this._axes.length; d++)
                    if (!r(this._axes[d].viewportMinimum) || !r(this._axes[d].viewportMaximum)) { c = !0; break }
            c ? (La(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness +
                "px solid " + this.toolbar.buttonBorderColor, this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor) : (ta(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
            gb(this);
            this._processData();
            this.options.title && (this.title = new ya(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
            if (this.options.subtitles)
                for (d = 0; d < this.options.subtitles.length; d++) c = new Ia(this, this.options.subtitles[d], d), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
            this.legend = new E(this, this.options.legend);
            for (d = 0; d < this.data.length; d++)(this.data[d].showInLegend || "pie" === this.data[d].type || "doughnut" === this.data[d].type || "funnel" === this.data[d].type ||
                "pyramid" === this.data[d].type) && this.legend.dataSeries.push(this.data[d]);
            this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
            for (d = 0; d < this._axes.length; d++)
                if (this._axes[d].scaleBreaks && this._axes[d].scaleBreaks._appliedBreaks.length) { w ? (this._breaksCanvas = sa(this.width, this.height, !0), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx); break }
            this._preRenderCanvas = sa(this.width, this.height);
            this._preRenderCtx =
                this._preRenderCanvas.getContext("2d");
            "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || F.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace())
        };
        m.prototype.renderElements = function() {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var d = 0; d < this.subtitles.length; d++) this.subtitles[d].dockInsidePlotArea || this.subtitles[d].render();
            this.legend.dockInsidePlotArea ||
                this.legend.render();
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) F.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
            else return;
            for (d = 0; d < a.length; d++) a[d].setLayout(), a[d].render();
            var c = [];
            if (this.animatedRender) { var b = sa(this.width, this.height);
                b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height) }
            jb(this);
            var a = this.ctx.miterLimit,
                e;
            this.ctx.miterLimit =
                3;
            w && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (d = 0; d < this.plotInfo.plotTypes.length; d++)
                for (var f = this.plotInfo.plotTypes[d], l = 0; l < f.plotUnits.length; l++) {
                    var t = f.plotUnits[l],
                        B = null;
                    t.targetCanvas && xa(t.targetCanvas);
                    t.targetCanvas = null;
                    this.animatedRender && (t.targetCanvas = sa(this.width, this.height), t.targetCanvasCtx = t.targetCanvas.getContext("2d"), e = t.targetCanvasCtx.miterLimit, t.targetCanvasCtx.miterLimit = 3);
                    "line" === t.type ? B = this.renderLine(t) : "stepLine" === t.type ? B = this.renderStepLine(t) : "spline" === t.type ? B = this.renderSpline(t) : "column" === t.type ? B = this.renderColumn(t) : "bar" === t.type ? B = this.renderBar(t) : "area" === t.type ? B = this.renderArea(t) : "stepArea" === t.type ? B = this.renderStepArea(t) :
                        "splineArea" === t.type ? B = this.renderSplineArea(t) : "stackedColumn" === t.type ? B = this.renderStackedColumn(t) : "stackedColumn100" === t.type ? B = this.renderStackedColumn100(t) : "stackedBar" === t.type ? B = this.renderStackedBar(t) : "stackedBar100" === t.type ? B = this.renderStackedBar100(t) : "stackedArea" === t.type ? B = this.renderStackedArea(t) : "stackedArea100" === t.type ? B = this.renderStackedArea100(t) : "bubble" === t.type ? B = B = this.renderBubble(t) : "scatter" === t.type ? B = this.renderScatter(t) : "pie" === t.type ? this.renderPie(t) : "doughnut" ===
                        t.type ? this.renderPie(t) : "funnel" === t.type ? B = this.renderFunnel(t) : "pyramid" === t.type ? B = this.renderFunnel(t) : "candlestick" === t.type ? B = this.renderCandlestick(t) : "ohlc" === t.type ? B = this.renderCandlestick(t) : "rangeColumn" === t.type ? B = this.renderRangeColumn(t) : "error" === t.type ? B = this.renderError(t) : "rangeBar" === t.type ? B = this.renderRangeBar(t) : "rangeArea" === t.type ? B = this.renderRangeArea(t) : "rangeSplineArea" === t.type ? B = this.renderRangeSplineArea(t) : "waterfall" === t.type ? B = this.renderWaterfall(t) : "boxAndWhisker" ===
                        t.type && (B = this.renderBoxAndWhisker(t));
                    for (var k = 0; k < t.dataSeriesIndexes.length; k++) this._dataInRenderedOrder.push(this.data[t.dataSeriesIndexes[k]]);
                    this.animatedRender && (t.targetCanvasCtx.miterLimit = e, B && c.push(B))
                }
            this.ctx.miterLimit = a;
            this.animatedRender && this._breaksCanvasCtx && c.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
            this.animatedRender && 0 < this._indexLabels.length &&
                (e = sa(this.width, this.height).getContext("2d"), c.push(this.renderIndexLabels(e)));
            var n = this;
            if (0 < c.length) n.disableToolTip = !0, n._animator.animate(200, n.animationDuration, function(a) {
                n.ctx.clearRect(0, 0, n.width, n.height);
                n.ctx.drawImage(b, 0, 0, Math.floor(n.width * ga), Math.floor(n.height * ga), 0, 0, n.width, n.height);
                for (var e = 0; e < c.length; e++) B = c[e], 1 > a && "undefined" !== typeof B.startTimePercent ? a >= B.startTimePercent && B.animationCallback(B.easingFunction(a - B.startTimePercent, 0, 1, 1 - B.startTimePercent), B) :
                    B.animationCallback(B.easingFunction(a, 0, 1, 1), B);
                n.dispatchEvent("dataAnimationIterationEnd", { chart: n })
            }, function() { c = []; for (var a = 0; a < n.plotInfo.plotTypes.length; a++)
                    for (var e = n.plotInfo.plotTypes[a], d = 0; d < e.plotUnits.length; d++) { var f = e.plotUnits[d];
                        f.targetCanvas && xa(f.targetCanvas);
                        f.targetCanvas = null }
                b = null;
                n.disableToolTip = !1;
                n.dispatchEvent("dataAnimationEnd", { chart: n }) });
            else {
                if (n._breaksCanvas)
                    if (w) n.plotArea.ctx.drawImage(n._breaksCanvas, 0, 0, this.width, this.height);
                    else
                        for (k = 0; k < n._axes.length; k++) n._axes[k].createMask();
                0 < n._indexLabels.length && n.renderIndexLabels();
                n.dispatchEvent("dataAnimationIterationEnd", { chart: n });
                n.dispatchEvent("dataAnimationEnd", { chart: n })
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || ta(this._zoomButton, this._resetButton);
            this.toolTip._updateToolTip();
            this.renderCount++;
            Ha && (n = this, setTimeout(function() {
                var a = document.getElementById("ghostCanvasCopy");
                a && (Ma(a, n.width, n.height), a.getContext("2d").drawImage(n._eventManager.ghostCanvas,
                    0, 0))
            }, 2E3));
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (k = 0; k < this._axes.length; k++) this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx)
        };
        m.prototype.render = function(a) { a && (this.options = a);
            this._initialize();
            this.setLayout();
            this.renderElements();
            this._preRenderCanvas && xa(this._preRenderCanvas) };
        m.prototype.attachPlotAreaEventHandlers = function() {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.panEnabled ? "move" : "default",
                capture: !0,
                bounds: this.plotArea
            })
        };
        m.prototype.categoriseDataSeries = function() {
            for (var a = "", d = 0; d < this.data.length; d++)
                if (a = this.data[d], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= m._supportedChartTypes.indexOf(a.type)) {
                    for (var c = null, b = !1, e = null, f = !1, l = 0; l < this.plotInfo.plotTypes.length; l++)
                        if (this.plotInfo.plotTypes[l].type === a.type) { b = !0;
                            c = this.plotInfo.plotTypes[l]; break }
                    b || (c = {
                        type: a.type,
                        totalDataSeries: 0,
                        plotUnits: []
                    }, this.plotInfo.plotTypes.push(c));
                    for (l = 0; l < c.plotUnits.length; l++)
                        if (c.plotUnits[l].axisYType === a.axisYType && c.plotUnits[l].axisXType === a.axisXType && c.plotUnits[l].axisYIndex === a.axisYIndex && c.plotUnits[l].axisXIndex === a.axisXIndex) { f = !0;
                            e = c.plotUnits[l]; break }
                    f || (e = {
                        type: a.type,
                        previousDataSeriesCount: 0,
                        index: c.plotUnits.length,
                        plotType: c,
                        axisXType: a.axisXType,
                        axisYType: a.axisYType,
                        axisYIndex: a.axisYIndex,
                        axisXIndex: a.axisXIndex,
                        axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex &&
                            a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                        axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                        dataSeriesIndexes: [],
                        yTotals: [],
                        yAbsTotals: []
                    }, c.plotUnits.push(e));
                    c.totalDataSeries++;
                    e.dataSeriesIndexes.push(d);
                    a.plotUnit = e
                }
            for (d = 0; d < this.plotInfo.plotTypes.length; d++)
                for (c = this.plotInfo.plotTypes[d],
                    l = a = 0; l < c.plotUnits.length; l++) c.plotUnits[l].previousDataSeriesCount = a, a += c.plotUnits[l].dataSeriesIndexes.length
        };
        m.prototype.assignIdToDataPoints = function() { for (var a = 0; a < this.data.length; a++) { var d = this.data[a]; if (d.dataPoints)
                    for (var c = d.dataPoints.length, b = 0; b < c; b++) d.dataPointIds[b] = ++this._eventManager.lastObjectId } };
        m.prototype._processData = function() {
            this.assignIdToDataPoints();
            this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var d = this.plotInfo.plotTypes[a],
                        c = 0; c < d.plotUnits.length; c++) {
                    var b = d.plotUnits[c];
                    "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" ===
                        b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b)
                }
            this.calculateAutoBreaks()
        };
        m.prototype._processMultiseriesPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var t = this.data[a.dataSeriesIndexes[l]],
                        B = 0,
                        k = !1,
                        n = !1,
                        p;
                    if ("normal" === t.axisPlacement || "xySwapped" === t.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ?
                        this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (t.dataPoints[B].x && t.dataPoints[B].x.getTime || "dateTime" === t.xValueType) f = !0;
                    for (B = 0; B < t.dataPoints.length; B++) {
                        "undefined" === typeof t.dataPoints[B].x && (t.dataPoints[B].x = B + (a.axisX.logarithmic ? 1 : 0));
                        t.dataPoints[B].x.getTime ? (f = !0, b = t.dataPoints[B].x.getTime()) : b = t.dataPoints[B].x;
                        e = t.dataPoints[B].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        e < d.min && "number" === typeof e && (d.min = e);
                        e > d.max && "number" === typeof e && (d.max = e);
                        if (0 < B) { if (a.axisX.logarithmic) { var s = b / t.dataPoints[B - 1].x;
                                1 > s && (s = 1 / s);
                                c.minDiff > s && 1 !== s && (c.minDiff = s) } else s = b - t.dataPoints[B - 1].x, 0 > s && (s *= -1), c.minDiff > s && 0 !== s && (c.minDiff = s);
                            null !== e && null !== t.dataPoints[B - 1].y && (a.axisY.logarithmic ? (s = e / t.dataPoints[B - 1].y, 1 > s && (s = 1 / s), d.minDiff > s && 1 !== s && (d.minDiff = s)) : (s = e - t.dataPoints[B - 1].y, 0 > s && (s *= -1), d.minDiff > s && 0 !== s && (d.minDiff = s))) }
                        if (b < q && !k) null !== e && (p = b);
                        else {
                            if (!k && (k = !0, 0 < B)) { B -= 2; continue }
                            if (b > g &&
                                !n) n = !0;
                            else if (b > g && n) continue;
                            t.dataPoints[B].label && (a.axisX.labels[b] = t.dataPoints[B].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === e ? c.viewPortMin === b && p < b && (c.viewPortMin = p) : (e < d.viewPortMin && "number" === typeof e && (d.viewPortMin = e), e > d.viewPortMax && "number" === typeof e && (d.viewPortMax = e))
                        }
                    }
                    t.axisX.valueType = t.xValueType = f ? "dateTime" : "number"
                }
        };
        m.prototype._processStackedPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var d =
                        a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, l = [], t = [], B = Infinity, k = -Infinity, n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var p = this.data[a.dataSeriesIndexes[n]],
                        q = 0,
                        g = !1,
                        s = !1,
                        h;
                    if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var Qa = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        u = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (p.dataPoints[q].x && p.dataPoints[q].x.getTime || "dateTime" === p.xValueType) f = !0;
                    for (q = 0; q < p.dataPoints.length; q++) {
                        "undefined" === typeof p.dataPoints[q].x && (p.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
                        p.dataPoints[q].x.getTime ? (f = !0, b = p.dataPoints[q].x.getTime()) :
                            b = p.dataPoints[q].x;
                        e = r(p.dataPoints[q].y) ? 0 : p.dataPoints[q].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        if (0 < q) { if (a.axisX.logarithmic) { var m = b / p.dataPoints[q - 1].x;
                                1 > m && (m = 1 / m);
                                c.minDiff > m && 1 !== m && (c.minDiff = m) } else m = b - p.dataPoints[q - 1].x, 0 > m && (m *= -1), c.minDiff > m && 0 !== m && (c.minDiff = m);
                            null !== e && null !== p.dataPoints[q - 1].y && (a.axisY.logarithmic ? 0 < e && (m = e / p.dataPoints[q - 1].y, 1 > m && (m = 1 / m), d.minDiff > m && 1 !== m && (d.minDiff = m)) : (m = e - p.dataPoints[q - 1].y, 0 > m && (m *= -1), d.minDiff > m && 0 !== m && (d.minDiff = m))) }
                        if (b < Qa &&
                            !g) null !== p.dataPoints[q].y && (h = b);
                        else {
                            if (!g && (g = !0, 0 < q)) { q -= 2; continue }
                            if (b > u && !s) s = !0;
                            else if (b > u && s) continue;
                            p.dataPoints[q].label && (a.axisX.labels[b] = p.dataPoints[q].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === p.dataPoints[q].y ? c.viewPortMin === b && h < b && (c.viewPortMin = h) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? l[b] ? l[b] += e : (l[b] = e, B = Math.min(e, B)) : t[b] ? t[b] += e : (t[b] = e, k = Math.max(e,
                                k)))
                        }
                    }
                    a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (d.dataPointYPositiveSums ? (d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums, l), d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums, t)) : (d.dataPointYPositiveSums = l, d.dataPointYNegativeSums = t));
                    p.axisX.valueType = p.xValueType = f ? "dateTime" : "number"
                }
                for (q in l) l.hasOwnProperty(q) && !isNaN(q) && (a = l[q], a < d.min && (d.min = Math.min(a, B)), a > d.max && (d.max = a), q < c.viewPortMin || q > c.viewPortMax ||
                    (a < d.viewPortMin && (d.viewPortMin = Math.min(a, B)), a > d.viewPortMax && (d.viewPortMax = a)));
                for (q in t) t.hasOwnProperty(q) && !isNaN(q) && (a = t[q], a < d.min && (d.min = a), a > d.max && (d.max = Math.max(a, k)), q < c.viewPortMin || q > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = a), a > d.viewPortMax && (d.viewPortMax = Math.max(a, k))))
            }
        };
        m.prototype._processStacked100PlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, l = !1, t = !1, B = [], k = 0; k < a.dataSeriesIndexes.length; k++) {
                    var n =
                        this.data[a.dataSeriesIndexes[k]],
                        p = 0,
                        q = !1,
                        g = !1,
                        s;
                    if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var h = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        m = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ?
                        this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (n.dataPoints[p].x && n.dataPoints[p].x.getTime || "dateTime" === n.xValueType) f = !0;
                    for (p = 0; p < n.dataPoints.length; p++) {
                        "undefined" === typeof n.dataPoints[p].x && (n.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                        n.dataPoints[p].x.getTime ? (f = !0, b = n.dataPoints[p].x.getTime()) : b = n.dataPoints[p].x;
                        e = r(n.dataPoints[p].y) ? null : n.dataPoints[p].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        if (0 < p) {
                            if (a.axisX.logarithmic) {
                                var u =
                                    b / n.dataPoints[p - 1].x;
                                1 > u && (u = 1 / u);
                                c.minDiff > u && 1 !== u && (c.minDiff = u)
                            } else u = b - n.dataPoints[p - 1].x, 0 > u && (u *= -1), c.minDiff > u && 0 !== u && (c.minDiff = u);
                            r(e) || null === n.dataPoints[p - 1].y || (a.axisY.logarithmic ? 0 < e && (u = e / n.dataPoints[p - 1].y, 1 > u && (u = 1 / u), d.minDiff > u && 1 !== u && (d.minDiff = u)) : (u = e - n.dataPoints[p - 1].y, 0 > u && (u *= -1), d.minDiff > u && 0 !== u && (d.minDiff = u)))
                        }
                        if (b < h && !q) null !== e && (s = b);
                        else {
                            if (!q && (q = !0, 0 < p)) { p -= 2; continue }
                            if (b > m && !g) g = !0;
                            else if (b > m && g) continue;
                            n.dataPoints[p].label && (a.axisX.labels[b] = n.dataPoints[p].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === e ? c.viewPortMin === b && s < b && (c.viewPortMin = s) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? l = !0 : 0 > e && (t = !0), B[b] = B[b] ? B[b] + Math.abs(e) : Math.abs(e))
                        }
                    }
                    n.axisX.valueType = n.xValueType = f ? "dateTime" : "number"
                }
                a.axisY.logarithmic ? (d.max = r(d.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(d.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), d.min =
                    r(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : l && !t ? (d.max = r(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = r(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : l && t ? (d.max = r(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = r(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)) : !l && t && (d.max = r(d.viewPortMax) ? -1 : Math.max(d.viewPortMax, -1), d.min = r(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99));
                d.viewPortMin = d.min;
                d.viewPortMax = d.max;
                a.dataPointYSums = B
            }
        };
        m.prototype._processMultiYPlotUnit = function(a) {
            if (a.dataSeriesIndexes &&
                !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f, l, t = !1, B = 0; B < a.dataSeriesIndexes.length; B++) {
                    var k = this.data[a.dataSeriesIndexes[B]],
                        n = 0,
                        p = !1,
                        q = !1,
                        g, s, h;
                    if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement) var m = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum :
                        a.axisX.logarithmic ? 0 : -Infinity,
                        u = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (k.dataPoints[n].x && k.dataPoints[n].x.getTime || "dateTime" === k.xValueType) t = !0;
                    for (n = 0; n < k.dataPoints.length; n++) {
                        "undefined" === typeof k.dataPoints[n].x && (k.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
                        k.dataPoints[n].x.getTime ?
                            (t = !0, b = k.dataPoints[n].x.getTime()) : b = k.dataPoints[n].x;
                        if ((e = k.dataPoints[n].y) && e.length) { f = Math.min.apply(null, e);
                            l = Math.max.apply(null, e);
                            s = !0; for (var z = 0; z < e.length; z++) null === e.k && (s = !1);
                            s && (p || (h = g), g = b) }
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        f < d.min && (d.min = f);
                        l > d.max && (d.max = l);
                        0 < n && (a.axisX.logarithmic ? (s = b / k.dataPoints[n - 1].x, 1 > s && (s = 1 / s), c.minDiff > s && 1 !== s && (c.minDiff = s)) : (s = b - k.dataPoints[n - 1].x, 0 > s && (s *= -1), c.minDiff > s && 0 !== s && (c.minDiff = s)), e && (null !== e[0] && k.dataPoints[n - 1].y && null !==
                            k.dataPoints[n - 1].y[0]) && (a.axisY.logarithmic ? (s = e[0] / k.dataPoints[n - 1].y[0], 1 > s && (s = 1 / s), d.minDiff > s && 1 !== s && (d.minDiff = s)) : (s = e[0] - k.dataPoints[n - 1].y[0], 0 > s && (s *= -1), d.minDiff > s && 0 !== s && (d.minDiff = s))));
                        if (!(b < m) || p) {
                            if (!p && (p = !0, 0 < n)) { n -= 2;
                                g = h; continue }
                            if (b > u && !q) q = !0;
                            else if (b > u && q) continue;
                            k.dataPoints[n].label && (a.axisX.labels[b] = k.dataPoints[n].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            if (c.viewPortMin === b && e)
                                for (z = 0; z < e.length; z++)
                                    if (null === e[z] && g < b) {
                                        c.viewPortMin =
                                            g;
                                        break
                                    }
                            null === e ? c.viewPortMin === b && g < b && (c.viewPortMin = g) : (f < d.viewPortMin && (d.viewPortMin = f), l > d.viewPortMax && (d.viewPortMax = l))
                        }
                    }
                    k.axisX.valueType = k.xValueType = t ? "dateTime" : "number"
                }
        };
        m.prototype._processSpecificPlotUnit = function(a) {
            if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var t = this.data[a.dataSeriesIndexes[l]],
                        B = 0,
                        k = !1,
                        n = !1,
                        p = b = 0;
                    if ("normal" === t.axisPlacement || "xySwapped" ===
                        t.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX &&
                        this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (t.dataPoints[B].x && t.dataPoints[B].x.getTime || "dateTime" === t.xValueType) f = !0;
                    for (B = 0; B < t.dataPoints.length; B++) "undefined" !== typeof t.dataPoints[B].isCumulativeSum && !0 === t.dataPoints[B].isCumulativeSum ? (t.dataPointEOs[B].cumulativeSumYStartValue = 0, t.dataPointEOs[B].cumulativeSum = 0 === B ? 0 : t.dataPointEOs[B - 1].cumulativeSum, t.dataPoints[B].y = 0 === B ? 0 : t.dataPointEOs[B - 1].cumulativeSum) : "undefined" !== typeof t.dataPoints[B].isIntermediateSum &&
                        !0 === t.dataPoints[B].isIntermediateSum ? (t.dataPointEOs[B].cumulativeSumYStartValue = p, t.dataPointEOs[B].cumulativeSum = 0 === B ? 0 : t.dataPointEOs[B - 1].cumulativeSum, t.dataPoints[B].y = 0 === B ? 0 : b, p = 0 === B ? 0 : t.dataPointEOs[B - 1].cumulativeSum, b = 0) : (e = "number" !== typeof t.dataPoints[B].y ? 0 : t.dataPoints[B].y, t.dataPointEOs[B].cumulativeSumYStartValue = 0 === B ? 0 : t.dataPointEOs[B - 1].cumulativeSum, t.dataPointEOs[B].cumulativeSum = 0 === B ? e : t.dataPointEOs[B - 1].cumulativeSum + e, b += e);
                    for (B = 0; B < t.dataPoints.length; B++)
                        if ("undefined" ===
                            typeof t.dataPoints[B].x && (t.dataPoints[B].x = B + (a.axisX.logarithmic ? 1 : 0)), t.dataPoints[B].x.getTime ? (f = !0, b = t.dataPoints[B].x.getTime()) : b = t.dataPoints[B].x, e = t.dataPoints[B].y, b < c.min && (c.min = b), b > c.max && (c.max = b), t.dataPointEOs[B].cumulativeSum < d.min && (d.min = t.dataPointEOs[B].cumulativeSum), t.dataPointEOs[B].cumulativeSum > d.max && (d.max = t.dataPointEOs[B].cumulativeSum), 0 < B && (a.axisX.logarithmic ? (p = b / t.dataPoints[B - 1].x, 1 > p && (p = 1 / p), c.minDiff > p && 1 !== p && (c.minDiff = p)) : (p = b - t.dataPoints[B - 1].x, 0 > p &&
                                (p *= -1), c.minDiff > p && 0 !== p && (c.minDiff = p)), null !== e && null !== t.dataPoints[B - 1].y && (a.axisY.logarithmic ? (e = t.dataPointEOs[B].cumulativeSum / t.dataPointEOs[B - 1].cumulativeSum, 1 > e && (e = 1 / e), d.minDiff > e && 1 !== e && (d.minDiff = e)) : (e = t.dataPointEOs[B].cumulativeSum - t.dataPointEOs[B - 1].cumulativeSum, 0 > e && (e *= -1), d.minDiff > e && 0 !== e && (d.minDiff = e)))), !(b < q) || k) {
                            if (!k && (k = !0, 0 < B)) { B -= 2; continue }
                            if (b > g && !n) n = !0;
                            else if (b > g && n) continue;
                            t.dataPoints[B].label && (a.axisX.labels[b] = t.dataPoints[B].label);
                            b < c.viewPortMin &&
                                (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            0 < B && (t.dataPointEOs[B - 1].cumulativeSum < d.viewPortMin && (d.viewPortMin = t.dataPointEOs[B - 1].cumulativeSum), t.dataPointEOs[B - 1].cumulativeSum > d.viewPortMax && (d.viewPortMax = t.dataPointEOs[B - 1].cumulativeSum));
                            t.dataPointEOs[B].cumulativeSum < d.viewPortMin && (d.viewPortMin = t.dataPointEOs[B].cumulativeSum);
                            t.dataPointEOs[B].cumulativeSum > d.viewPortMax && (d.viewPortMax = t.dataPointEOs[B].cumulativeSum)
                        }
                    t.axisX.valueType = t.xValueType = f ? "dateTime" : "number"
                }
        };
        m.prototype.calculateAutoBreaks = function() {
            function a(a, b, c, e) { if (e) return c = Math.pow(Math.min(c * a / b, b / a), 0.2), 1 >= c && (c = Math.pow(1 > a ? 1 / a : Math.min(b / a, a), 0.25)), { startValue: a * c, endValue: b / c };
                c = 0.2 * Math.min(c - b + a, b - a);
                0 >= c && (c = 0.25 * Math.min(b - a, Math.abs(a))); return { startValue: a + c, endValue: b - c } }

            function d(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    var b = a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
                        c = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate &&
                        1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                    if (b || c)
                        for (var d = a.axisY.dataInfo, f = a.axisX.dataInfo, g, k = f.min, l = f.max, n = d.min, p = d.max, f = f._dataRanges, d = d._dataRanges, q, t = 0, B = 0; B < a.dataSeriesIndexes.length; B++) {
                            var h = e.data[a.dataSeriesIndexes[B]];
                            if (!(4 > h.dataPoints.length))
                                for (t = 0; t < h.dataPoints.length; t++)
                                    if (b && (q = (l + 1 - k) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, g = h.dataPoints[t].x.getTime ? h.dataPoints[t].x.getTime() : h.dataPoints[t].x, q = Math.floor((g - k) / q), g < f[q].min &&
                                            (f[q].min = g), g > f[q].max && (f[q].max = g)), c) { var m = (p + 1 - n) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100; if ((g = "waterfall" === a.type ? h.dataPointEOs[t].cumulativeSum : h.dataPoints[t].y) && g.length)
                                            for (var w = 0; w < g.length; w++) q = Math.floor((g[w] - n) / m), g[w] < d[q].min && (d[q].min = g[w]), g[w] > d[q].max && (d[q].max = g[w]);
                                        else r(g) || (q = Math.floor((g - n) / m), g < d[q].min && (d[q].min = g), g > d[q].max && (d[q].max = g)) }
                        }
                }
            }

            function c(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks &&
                    a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
                    for (var b = a.axisX.dataInfo, c = b.min, d = b.max, f = b._dataRanges, g, k = 0, l = 0; l < a.dataSeriesIndexes.length; l++) {
                        var n = e.data[a.dataSeriesIndexes[l]];
                        if (!(4 > n.dataPoints.length))
                            for (k = 0; k < n.dataPoints.length; k++) g = (d + 1 - c) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b = n.dataPoints[k].x.getTime ? n.dataPoints[k].x.getTime() : n.dataPoints[k].x, g = Math.floor((b - c) / g), b < f[g].min && (f[g].min = b), b > f[g].max && (f[g].max =
                                b)
                    }
            }
            for (var b, e = this, f = !1, l = 0; l < this._axes.length; l++)
                if (this._axes[l].scaleBreaks && this._axes[l].scaleBreaks.autoCalculate && 1 <= this._axes[l].scaleBreaks.maxNumberOfAutoBreaks) { f = !0;
                    this._axes[l].dataInfo._dataRanges = []; for (var t = 0; t < 100 / Math.max(parseFloat(this._axes[l].scaleBreaks.collapsibleThreshold) || 10, 10); t++) this._axes[l].dataInfo._dataRanges.push({ min: Infinity, max: -Infinity }) }
            if (f) {
                for (l = 0; l < this.plotInfo.plotTypes.length; l++)
                    for (f = this.plotInfo.plotTypes[l], t = 0; t < f.plotUnits.length; t++) b =
                        f.plotUnits[t], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? d(b) : 0 <= b.type.indexOf("stacked") && c(b);
                for (l = 0; l < this._axes.length; l++)
                    if (this._axes[l].dataInfo._dataRanges) {
                        var B =
                            this._axes[l].dataInfo.min;
                        b = (this._axes[l].dataInfo.max + 1 - B) * Math.max(parseFloat(this._axes[l].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        var k = this._axes[l].dataInfo._dataRanges,
                            n, p, f = [];
                        if (this._axes[l].dataInfo.dataPointYPositiveSums) { var q = this._axes[l].dataInfo.dataPointYPositiveSums;
                            n = k; for (t in q)
                                if (q.hasOwnProperty(t) && !isNaN(t) && (p = q[t], !r(p))) { var g = Math.floor((p - B) / b);
                                    p < n[g].min && (n[g].min = p);
                                    p > n[g].max && (n[g].max = p) }
                            delete this._axes[l].dataInfo.dataPointYPositiveSums }
                        if (this._axes[l].dataInfo.dataPointYNegativeSums) {
                            q =
                                this._axes[l].dataInfo.dataPointYNegativeSums;
                            n = k;
                            for (t in q) q.hasOwnProperty(t) && !isNaN(t) && (p = -1 * q[t], r(p) || (g = Math.floor((p - B) / b), p < n[g].min && (n[g].min = p), p > n[g].max && (n[g].max = p)));
                            delete this._axes[l].dataInfo.dataPointYNegativeSums
                        }
                        for (t = 0; t < k.length - 1; t++)
                            if (n = k[t].max, isFinite(n))
                                for (; t < k.length - 1;)
                                    if (B = k[t + 1].min, isFinite(B)) { p = B - n;
                                        p > b && f.push({ diff: p, start: n, end: B }); break } else t++;
                        if (this._axes[l].scaleBreaks.customBreaks)
                            for (t = 0; t < this._axes[l].scaleBreaks.customBreaks.length; t++)
                                for (b =
                                    0; b < f.length; b++)
                                    if (this._axes[l].scaleBreaks.customBreaks[t].startValue <= f[b].start && f[b].start <= this._axes[l].scaleBreaks.customBreaks[t].endValue || this._axes[l].scaleBreaks.customBreaks[t].startValue <= f[b].start && f[b].start <= this._axes[l].scaleBreaks.customBreaks[t].endValue || f[b].start <= this._axes[l].scaleBreaks.customBreaks[t].startValue && this._axes[l].scaleBreaks.customBreaks[t].startValue <= f[b].end || f[b].start <= this._axes[l].scaleBreaks.customBreaks[t].endValue && this._axes[l].scaleBreaks.customBreaks[t].endValue <=
                                        f[b].end) f.splice(b, 1), b--;
                        f.sort(function(a, b) { return b.diff - a.diff });
                        for (t = 0; t < Math.min(f.length, this._axes[l].scaleBreaks.maxNumberOfAutoBreaks); t++) b = a(f[t].start, f[t].end, this._axes[l].logarithmic ? this._axes[l].dataInfo.max / this._axes[l].dataInfo.min : this._axes[l].dataInfo.max - this._axes[l].dataInfo.min, this._axes[l].logarithmic), this._axes[l].scaleBreaks.autoBreaks.push(new ca(this, "autoBreaks", b, t, ++this._eventManager.lastObjectId, this._axes[l].scaleBreaks)), this._axes[l].scaleBreaks._appliedBreaks.push(this._axes[l].scaleBreaks.autoBreaks[this._axes[l].scaleBreaks.autoBreaks.length -
                            1]);
                        this._axes[l].scaleBreaks._appliedBreaks.sort(function(a, b) { return a.startValue - b.startValue })
                    }
            }
        };
        m.prototype.renderCrosshairs = function(a) {
            for (var d = 0; d < this.axisX.length; d++) this.axisX[d] != a && (this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && !this.axisX[d].crosshair._hidden) && this.axisX[d].showCrosshair(this.axisX[d].crosshair._updatedValue);
            for (d = 0; d < this.axisX2.length; d++) this.axisX2[d] != a && (this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && !this.axisX2[d].crosshair._hidden) &&
                this.axisX2[d].showCrosshair(this.axisX2[d].crosshair._updatedValue);
            for (d = 0; d < this.axisY.length; d++) this.axisY[d] != a && (this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && !this.axisY[d].crosshair._hidden) && this.axisY[d].showCrosshair(this.axisY[d].crosshair._updatedValue);
            for (d = 0; d < this.axisY2.length; d++) this.axisY2[d] != a && (this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && !this.axisY2[d].crosshair._hidden) && this.axisY2[d].showCrosshair(this.axisY2[d].crosshair._updatedValue)
        };
        m.prototype.getDataPointAtXY =
            function(a, d, c) {
                c = c || !1;
                for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) { var f = null;
                    (f = this._dataInRenderedOrder[e].getDataPointAtXY(a, d, c)) && b.push(f) }
                a = null;
                d = !1;
                for (c = 0; c < b.length; c++)
                    if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type)
                        if (e = ka("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= e / 2) { d = !0; break }
                for (c = 0; c < b.length; c++) d && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type &&
                    "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
                return a
            };
        m.prototype.getObjectAtXY = function(a, d, c) { var b = null; if (c = this.getDataPointAtXY(a, d, c || !1)) b = c.dataSeries.dataPointIds[c.dataPointIndex];
            else if (w) b = $a(a, d, this._eventManager.ghostCtx);
            else
                for (c = 0; c < this.legend.items.length; c++) { var e = this.legend.items[c];
                    a >= e.x1 && (a <= e.x2 && d >= e.y1 && d <= e.y2) && (b = e.id) }
            return b };
        m.prototype.getAutoFontSize = nb;
        m.prototype.resetOverlayedCanvas =
            function() { this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height) };
        m.prototype.clearCanvas = mb;
        m.prototype.attachEvent = function(a) { this._events.push(a) };
        m.prototype._touchEventHandler = function(a) {
            if (a.changedTouches && this.interactivityEnabled) {
                var d = [],
                    c = a.changedTouches,
                    b = c ? c[0] : a,
                    e = null;
                switch (a.type) {
                    case "touchstart":
                    case "MSPointerDown":
                        d = ["mousemove", "mousedown"];
                        this._lastTouchData = Oa(b);
                        this._lastTouchData.time = new Date;
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                        d = ["mousemove"];
                        break;
                    case "touchend":
                    case "MSPointerUp":
                        var f = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time : 0,
                            d = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > f ? ["mouseup", "click"] : ["mouseup"];
                        break;
                    default:
                        return
                }
                if (!(c && 1 < c.length)) {
                    e = Oa(b);
                    e.time = new Date;
                    try { var l = e.y - this._lastTouchData.y,
                            f = e.time - this._lastTouchData.time; if (1 < Math.abs(l) && this._lastTouchData.scroll || 5 < Math.abs(l) && 250 > f) this._lastTouchData.scroll = !0 } catch (t) {}
                    this._lastTouchEventType =
                        a.type;
                    if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                    else
                        for (c = 0; c < d.length; c++)
                            if (e = d[c], l = document.createEvent("MouseEvent"), l.initMouseEvent(e, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null), b.target.dispatchEvent(l), !r(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < f || "click" === e) a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault()
                }
            }
        };
        m.prototype._dispatchRangeEvent = function(a, d) {
            var c = { chart: this };
            c.type = a;
            c.trigger = d;
            var b = [];
            this.axisX && 0 < this.axisX.length && b.push("axisX");
            this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
            this.axisY && 0 < this.axisY.length && b.push("axisY");
            this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
            for (var e = 0; e < b.length; e++)
                if (r(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e])
                    for (var f = 0; f < this.axisY.length; f++) c[b[e]].push({ viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum });
                else if ("axisY2" === b[e])
                for (f = 0; f < this.axisY2.length; f++) c[b[e]].push({ viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum });
            else if ("axisX" === b[e])
                for (f = 0; f < this.axisX.length; f++) c[b[e]].push({ viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum });
            else if ("axisX2" === b[e])
                for (f = 0; f < this.axisX2.length; f++) c[b[e]].push({
                    viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum
                });
            this.dispatchEvent(a, c, this)
        };
        m.prototype._mouseEventHandler = function(a) {
            "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
            var d = Oa(a),
                c = a.type,
                b, e;
            a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
            m.capturedEventParam && (b = m.capturedEventParam, "mouseup" === c && (m.capturedEventParam = null, b.chart.overlaidCanvas.releaseCapture ? b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup",
                b.chart._mouseEventHandler, !1)), b.hasOwnProperty(c) && ("mouseup" !== c || b.chart.overlaidCanvas.releaseCapture ? a.target !== b.chart.overlaidCanvas && w || b[c].call(b.context, d.x, d.y) : a.target !== b.chart.overlaidCanvas && (b.chart.isDrag = !1)));
            if (this.interactivityEnabled)
                if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
                else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), Ha && window.console && (window.console.log(c + " --\x3e x: " + d.x + "; y:" + d.y), e && window.console.log(a.which),
                    "mouseup" === c && window.console.log("mouseup")), !e) {
                if (!m.capturedEventParam && this._events) {
                    for (var f = 0; f < this._events.length; f++)
                        if (this._events[f].hasOwnProperty(c))
                            if (b = this._events[f], e = b.bounds, d.x >= e.x1 && d.x <= e.x2 && d.y >= e.y1 && d.y <= e.y2) {
                                b[c].call(b.context, d.x, d.y);
                                "mousedown" === c && !0 === b.capture ? (m.capturedEventParam = b, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === c && (b.chart.overlaidCanvas.releaseCapture ?
                                    b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                break
                            } else b = null;
                    a.target.style.cursor = b && b.cursor ? b.cursor : this._defaultCursor
                }
                c = this.plotArea;
                if (d.x < c.x1 || d.x > c.x2 || d.y < c.y1 || d.y > c.y2) {
                    this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.resetOverlayedCanvas();
                    for (f = 0; f < this.axisX.length; f++) this.axisX[f].crosshair && this.axisX[f].crosshair.enabled &&
                        (this.axisX[f].crosshair.hide(), this.axisX[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[f].options }, this.axisX[f].crosshair));
                    for (f = 0; f < this.axisX2.length; f++) this.axisX2[f].crosshair && this.axisX2[f].crosshair.enabled && (this.axisX2[f].crosshair.hide(), this.axisX2[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[f].options }, this.axisX2[f].crosshair));
                    for (f = 0; f < this.axisY.length; f++) this.axisY[f].crosshair && this.axisY[f].crosshair.enabled && (this.axisY[f].crosshair.hide(),
                        this.axisY[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[f].options }, this.axisY[f].crosshair));
                    for (f = 0; f < this.axisY2.length; f++) this.axisY2[f].crosshair && this.axisY2[f].crosshair.enabled && (this.axisY2[f].crosshair.hide(), this.axisY2[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[f].options }, this.axisY2[f].crosshair))
                }
                this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
            }
        };
        m.prototype._plotAreaMouseDown = function(a, d) {
            this.isDrag = !0;
            this.dragStartPoint = { x: a, y: d }
        };
        m.prototype._plotAreaMouseUp = function(a, d) {
            if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
                var c = d - this.dragStartPoint.y,
                    b = a - this.dragStartPoint.x,
                    e = 0 <= this.zoomType.indexOf("x"),
                    f = 0 <= this.zoomType.indexOf("y"),
                    l = !1;
                this.resetOverlayedCanvas();
                if ("xySwapped" === this.plotInfo.axisPlacement) var t = f,
                    f = e,
                    e = t;
                if (this.panEnabled || this.zoomEnabled) {
                    if (this.panEnabled)
                        for (e = f = 0; e < this._axes.length; e++) c = this._axes[e], c.logarithmic ?
                            c.viewportMinimum < c.minimum ? (f = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * f, c.sessionVariables.newViewportMaximum = c.viewportMaximum * f, l = !0) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / f, c.sessionVariables.newViewportMaximum = c.viewportMaximum / f, l = !0) : c.viewportMinimum < c.minimum ? (f = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + f, c.sessionVariables.newViewportMaximum =
                                c.viewportMaximum + f, l = !0) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - f, c.sessionVariables.newViewportMaximum = c.viewportMaximum - f, l = !0);
                    else if ((!e || 2 < Math.abs(b)) && (!f || 2 < Math.abs(c)) && this.zoomEnabled) {
                        if (!this.dragStartPoint) return;
                        c = e ? this.dragStartPoint.x : this.plotArea.x1;
                        b = f ? this.dragStartPoint.y : this.plotArea.y1;
                        e = e ? a : this.plotArea.x2;
                        f = f ? d : this.plotArea.y2;
                        2 < Math.abs(c - e) && 2 < Math.abs(b - f) && this._zoomPanToSelectedRegion(c,
                            b, e, f) && (l = !0)
                    }
                    l && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: this.stockChart.sessionVariables._axisXMin, maximum: this.stockChart.sessionVariables._axisXMax }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging",
                        this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)), l && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (La(this._zoomButton, this._resetButton), ua(this, this._zoomButton, "pan"), ua(this, this._resetButton,
                        "reset")))
                }
            }
            this.isDrag = !1;
            if ("none" !== this.plotInfo.axisPlacement) {
                this.resetOverlayedCanvas();
                if (this.axisX && 0 < this.axisX.length)
                    for (l = 0; l < this.axisX.length; l++) this.axisX[l].crosshair && this.axisX[l].crosshair.enabled && this.axisX[l].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (l = 0; l < this.axisX2.length; l++) this.axisX2[l].crosshair && this.axisX2[l].crosshair.enabled && this.axisX2[l].renderCrosshair(a, d);
                if (this.axisY && 0 < this.axisY.length)
                    for (l = 0; l < this.axisY.length; l++) this.axisY[l].crosshair &&
                        this.axisY[l].crosshair.enabled && this.axisY[l].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (l = 0; l < this.axisY2.length; l++) this.axisY2[l].crosshair && this.axisY2[l].crosshair.enabled && this.axisY2[l].renderCrosshair(a, d);
                if (this.axisX && 0 < this.axisX.length)
                    for (l = 0; l < this.axisX.length; l++) this.axisX[l].crosshair && this.axisX[l].crosshair.enabled && this.axisX[l].crosshair.renderLabel();
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (l = 0; l < this.axisX2.length; l++) this.axisX2[l].crosshair && this.axisX2[l].crosshair.enabled &&
                        this.axisX2[l].crosshair.renderLabel();
                if (this.axisY && 0 < this.axisY.length)
                    for (l = 0; l < this.axisY.length; l++) this.axisY[l].crosshair && this.axisY[l].crosshair.enabled && this.axisY[l].crosshair.renderLabel();
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (l = 0; l < this.axisY2.length; l++) this.axisY2[l].crosshair && this.axisY2[l].crosshair.enabled && this.axisY2[l].crosshair.renderLabel()
            }
        };
        m.prototype._plotAreaMouseMove = function(a, d) {
            if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
                var c = 0,
                    b = 0,
                    e = c = null,
                    e = 0 <= this.zoomType.indexOf("x"),
                    f = 0 <= this.zoomType.indexOf("y"),
                    l = this;
                "xySwapped" === this.plotInfo.axisPlacement && (c = f, f = e, e = c);
                c = this.dragStartPoint.x - a;
                b = this.dragStartPoint.y - d;
                if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
                    this.toolTip.hide();
                    this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
                    for (var t = 0; t < this.axisX.length; t++) this.axisX[t].crosshair && this.axisX[t].crosshair.enabled && (this.axisX[t].crosshair.hide(), this.axisX[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[t].options }, this.axisX[t].crosshair));
                    for (t = 0; t < this.axisX2.length; t++) this.axisX2[t].crosshair && this.axisX2[t].crosshair.enabled && (this.axisX2[t].crosshair.hide(), this.axisX2[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[t].options }, this.axisX2[t].crosshair));
                    for (t = 0; t < this.axisY.length; t++) this.axisY[t].crosshair && this.axisY[t].crosshair.enabled && (this.axisY[t].crosshair.hide(), this.axisY[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[t].options },
                        this.axisY[t].crosshair));
                    for (t = 0; t < this.axisY2.length; t++) this.axisY2[t].crosshair && this.axisY2[t].crosshair.enabled && (this.axisY2[t].crosshair.hide(), this.axisY2[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[t].options }, this.axisY2[t].crosshair))
                } else this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, d);
                if ((!e || 2 < Math.abs(c) || !f || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled))
                    if (this.panEnabled) e = {
                        x1: e ? this.plotArea.x1 + c : this.plotArea.x1,
                        y1: f ? this.plotArea.y1 +
                            b : this.plotArea.y1,
                        x2: e ? this.plotArea.x2 + c : this.plotArea.x2,
                        y2: f ? this.plotArea.y2 + b : this.plotArea.y2
                    }, clearTimeout(l._panTimerId), l._panTimerId = setTimeout(function(b, c, e, f) {
                        return function() {
                            l._zoomPanToSelectedRegion(b, c, e, f, !0) && (l._dispatchRangeEvent("rangeChanging", "pan"), l.stockChart && (l.stockChart.navigator && l.stockChart.navigator.enabled) && (l.stockChart._rangeEventParameter.type = "rangeChanging", l.stockChart.dispatchEvent("rangeChanging", l.stockChart._rangeEventParameter, l.stockChart)), l.render(),
                                l._dispatchRangeEvent("rangeChanged", "pan"), l.stockChart && (l.stockChart.navigator && l.stockChart.navigator.enabled) && (l.stockChart._rangeEventParameter.type = "rangeChanged", l.stockChart.dispatchEvent("rangeChanged", l.stockChart._rangeEventParameter, l.stockChart)), l.dragStartPoint.x = a, l.dragStartPoint.y = d)
                        }
                    }(e.x1, e.y1, e.x2, e.y2), 0);
                    else if (this.zoomEnabled) {
                    this.resetOverlayedCanvas();
                    c = this.overlaidCanvasCtx.globalAlpha;
                    this.overlaidCanvasCtx.fillStyle = "#A89896";
                    var b = e ? this.dragStartPoint.x : this.plotArea.x1,
                        t = f ? this.dragStartPoint.y : this.plotArea.y1,
                        B = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                        k = f ? d - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                    this.validateRegion(b, t, e ? a : this.plotArea.x2 - this.plotArea.x1, f ? d : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                    this.overlaidCanvasCtx.globalAlpha = 0.7;
                    this.overlaidCanvasCtx.fillRect(b, t, B, k);
                    this.overlaidCanvasCtx.globalAlpha = c
                }
            } else if (this.toolTip.mouseMoveHandler(a,
                    d), "none" !== this.plotInfo.axisPlacement) {
                if (this.axisX && 0 < this.axisX.length)
                    for (e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (e = 0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, d);
                if (this.axisY && 0 < this.axisY.length)
                    for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a,
                        d);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, d);
                if (this.axisX && 0 < this.axisX.length)
                    for (e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].crosshair.renderLabel();
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (e = 0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].crosshair.renderLabel();
                if (this.axisY && 0 < this.axisY.length)
                    for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].crosshair.renderLabel();
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].crosshair.renderLabel()
            }
        };
        m.prototype._zoomPanToSelectedRegion = function(a, d, c, b, e) {
            a = this.validateRegion(a, d, c, b, e);
            d = a.axesWithValidRange;
            c = a.axesRanges;
            if (a.isValid)
                for (b = 0; b < d.length; b++) e = c[b],
                    d[b].setViewPortRange(e.val1, e.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2), this.stockChart && (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: e.val1, maximum: e.val2 });
            return a.isValid
        };
        m.prototype.validateRegion = function(a, d, c, b, e) {
            e = e || !1;
            for (var f = 0 <= this.zoomType.indexOf("x"), l = 0 <= this.zoomType.indexOf("y"), t = !1, B = [], k = [], n = [], p = 0; p < this._axes.length; p++)("axisX" === this._axes[p].type &&
                f || "axisY" === this._axes[p].type && l) && k.push(this._axes[p]);
            for (l = 0; l < k.length; l++) {
                var p = k[l],
                    f = !1,
                    q = p.convertPixelToValue({ x: a, y: d }),
                    g = p.convertPixelToValue({ x: c, y: b });
                if (q > g) var s = g,
                    g = q,
                    q = s;
                if (p.scaleBreaks)
                    for (s = 0; !f && s < p.scaleBreaks._appliedBreaks.length; s++) f = p.scaleBreaks._appliedBreaks[s].startValue <= q && p.scaleBreaks._appliedBreaks[s].endValue >= g;
                if (isFinite(p.dataInfo.minDiff))
                    if (s = p.getApparentDifference(q, g, null, !0), !(f || !(this.panEnabled && p.scaleBreaks && p.scaleBreaks._appliedBreaks.length) &&
                            (p.logarithmic && s < Math.pow(p.dataInfo.minDiff, 3) || !p.logarithmic && s < 3 * Math.abs(p.dataInfo.minDiff)) || q < p.minimum || g > p.maximum)) B.push(p), n.push({ val1: q, val2: g }), t = !0;
                    else if (!e) { t = !1; break }
            }
            return { isValid: t, axesWithValidRange: B, axesRanges: n }
        };
        m.prototype.preparePlotArea = function() {
            var a = this.plotArea;
            !w && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
            if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
                var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
                if (this.axisY && 0 < this.axisY.length && this.axisY[0]) { var c = this.axisY[0];
                    a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1;
                    a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1;
                    a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2;
                    a.y2 = d.y2 > d.y1 ? d.y2 : c.lineCoordinates.y2;
                    a.width = a.x2 - a.x1;
                    a.height = a.y2 - a.y1 }
                this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1, a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1, a.x2 = d.x2 > c.lineCoordinates.x2 ?
                    d.x2 : c.lineCoordinates.x2, a.y2 = d.y2 > d.y1 ? d.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
            } else d = this.layoutManager.getFreeSpace(), a.x1 = d.x1, a.x2 = d.x2, a.y1 = d.y1, a.y2 = d.y2, a.width = d.width, a.height = d.height;
            w || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
            a.layoutManager = new Ea(a.x1, a.y1, a.x2, a.y2, 2)
        };
        m.prototype.renderIndexLabels = function(a) {
            var d = a || this.plotArea.ctx,
                c = this.plotArea,
                b = 0,
                e = 0,
                f = 0,
                l = f = e = 0,
                t = 0,
                B = b = 0,
                k = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var n = this._indexLabels[a],
                    p = n.chartType.toLowerCase(),
                    q, g, l = ka("indexLabelFontColor", n.dataPoint, n.dataSeries),
                    s = ka("indexLabelFontSize", n.dataPoint, n.dataSeries),
                    t = ka("indexLabelFontFamily", n.dataPoint, n.dataSeries),
                    B = ka("indexLabelFontStyle", n.dataPoint, n.dataSeries),
                    k = ka("indexLabelFontWeight", n.dataPoint, n.dataSeries),
                    h = ka("indexLabelBackgroundColor", n.dataPoint, n.dataSeries);
                q = ka("indexLabelMaxWidth", n.dataPoint, n.dataSeries);
                g = ka("indexLabelWrap", n.dataPoint, n.dataSeries);
                var m = ka("indexLabelLineDashType", n.dataPoint, n.dataSeries),
                    u = ka("indexLabelLineColor", n.dataPoint, n.dataSeries),
                    z = r(n.dataPoint.indexLabelLineThickness) ? r(n.dataSeries.options.indexLabelLineThickness) ? 0 : n.dataSeries.options.indexLabelLineThickness : n.dataPoint.indexLabelLineThickness,
                    b = 0 < z ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                    y = { percent: null, total: null },
                    C = null;
                if (0 <= n.dataSeries.type.indexOf("stacked") ||
                    "pie" === n.dataSeries.type || "doughnut" === n.dataSeries.type) y = this.getPercentAndTotal(n.dataSeries, n.dataPoint);
                if (n.dataSeries.indexLabelFormatter || n.dataPoint.indexLabelFormatter) C = { chart: this, dataSeries: n.dataSeries, dataPoint: n.dataPoint, index: n.indexKeyword, total: y.total, percent: y.percent };
                var D = n.dataPoint.indexLabelFormatter ? n.dataPoint.indexLabelFormatter(C) : n.dataPoint.indexLabel ? this.replaceKeywordsWithValue(n.dataPoint.indexLabel, n.dataPoint, n.dataSeries, null, n.indexKeyword) : n.dataSeries.indexLabelFormatter ?
                    n.dataSeries.indexLabelFormatter(C) : n.dataSeries.indexLabel ? this.replaceKeywordsWithValue(n.dataSeries.indexLabel, n.dataPoint, n.dataSeries, null, n.indexKeyword) : null;
                if (null !== D && "" !== D) {
                    var y = ka("indexLabelPlacement", n.dataPoint, n.dataSeries),
                        C = ka("indexLabelOrientation", n.dataPoint, n.dataSeries),
                        A = ka("indexLabelTextAlign", n.dataPoint, n.dataSeries),
                        v = n.direction,
                        e = n.dataSeries.axisX,
                        f = n.dataSeries.axisY,
                        x = !1,
                        h = new ia(d, {
                            x: 0,
                            y: 0,
                            maxWidth: q ? q : 0.5 * this.width,
                            maxHeight: g ? 5 * s : 1.5 * s,
                            angle: "horizontal" ===
                                C ? 0 : -90,
                            text: D,
                            padding: 0,
                            backgroundColor: h,
                            textAlign: A,
                            fontSize: s,
                            fontFamily: t,
                            fontWeight: k,
                            fontColor: l,
                            fontStyle: B,
                            textBaseline: "middle"
                        });
                    h.measureText();
                    n.dataSeries.indexLabelMaxWidth = h.maxWidth;
                    if ("stackedarea100" === p) { if (n.point.x < c.x1 || n.point.x > c.x2 || n.point.y < c.y1 - 1 || n.point.y > c.y2 + 1) continue } else if ("rangearea" === p || "rangesplinearea" === p) {
                        if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum || Math.max.apply(null, n.dataPoint.y) < f.viewportMinimum || Math.min.apply(null, n.dataPoint.y) >
                            f.viewportMaximum) continue
                    } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) { if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum || n.dataPoint.y < f.viewportMinimum || n.dataPoint.y > f.viewportMaximum) continue } else if (0 <= p.indexOf("column") || "waterfall" === p || "error" === p && !n.axisSwapped) { if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum || n.bounds.y1 > c.y2 || n.bounds.y2 < c.y1) continue } else if (0 <= p.indexOf("bar") || "error" ===
                        p) { if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum || n.bounds.x1 > c.x2 || n.bounds.x2 < c.x1) continue } else if ("candlestick" === p || "ohlc" === p) { if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum || Math.max.apply(null, n.dataPoint.y) < f.viewportMinimum || Math.min.apply(null, n.dataPoint.y) > f.viewportMaximum) continue } else if (n.dataPoint.x < e.viewportMinimum || n.dataPoint.x > e.viewportMaximum) continue;
                    l = t = 2;
                    "horizontal" === C ? (B = h.width, k = h.height) : (k = h.width, B = h.height);
                    if ("normal" ===
                        this.plotInfo.axisPlacement) {
                        if (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) y = "auto", t = 4;
                        else if (0 <= p.indexOf("stacked")) "auto" === y && (y = "inside");
                        else if ("bubble" === p || "scatter" === p) y = "inside";
                        q = n.point.x - ("horizontal" === C ? B / 2 : B / 2 - s / 2);
                        "inside" !== y ? (e = c.y1, f = c.y2, 0 < v ? (g = n.point.y + ("horizontal" === C ? s / 2 : 0) - k - t - b, g < e && (g = "auto" === y ? Math.max(n.point.y, e) + s / 2 + t : e + s / 2 + t, x = g + k > n.point.y)) : (g = n.point.y + s / 2 + t + b, g > f - k && (g = "auto" === y ? Math.min(n.point.y, f) + s / 2 - k - t : f + s / 2 - k, x = g < n.point.y))) : (e = Math.max(n.bounds.y1,
                            c.y1), f = Math.min(n.bounds.y2, c.y2 - k + s / 2), b = 0 <= p.indexOf("range") || "error" === p ? 0 < v ? Math.max(n.bounds.y1, c.y1) + s / 2 + t : Math.min(n.bounds.y2, c.y2) + s / 2 - k + t : (Math.max(n.bounds.y1, c.y1) + Math.min(n.bounds.y2, c.y2)) / 2 - k / 2 + s / 2 + ("horizontal" === C ? t : 0), 0 < v ? (g = Math.max(n.point.y, b), g < e && ("bubble" === p || "scatter" === p) && (g = Math.max(n.point.y - k - t, c.y1 + t))) : (g = Math.min(n.point.y, b), g > f - k - t && ("bubble" === p || "scatter" === p) && (g = Math.min(n.point.y + t, c.y2 - k - t))), g = Math.min(g, f))
                    } else 0 <= p.indexOf("line") || 0 <= p.indexOf("area") ||
                        0 <= p.indexOf("scatter") ? (y = "auto", l = 4) : 0 <= p.indexOf("stacked") ? "auto" === y && (y = "inside") : "bubble" === p && (y = "inside"), g = n.point.y + s / 2 - k / 2 + t, "inside" !== y ? (e = c.x1, f = c.x2, 0 > v ? (q = n.point.x - ("horizontal" === C ? B : B - s / 2) - l - b, q < e && (q = "auto" === y ? Math.max(n.point.x, e) + l : e + l, x = q + B > n.point.x)) : (q = n.point.x + ("horizontal" === C ? 0 : s / 2) + l + b, q > f - B - l - b && (q = "auto" === y ? Math.min(n.point.x, f) - ("horizontal" === C ? B : B / 2) - l : f - B - l, x = q < n.point.x))) : (e = Math.max(n.bounds.x1, c.x1), Math.min(n.bounds.x2, c.x2), b = 0 <= p.indexOf("range") || "error" ===
                            p ? 0 > v ? Math.max(n.bounds.x1, c.x1) + s / 2 + l : Math.min(n.bounds.x2, c.x2) - B / 2 - l + ("horizontal" === C ? 0 : s / 2) : (Math.max(n.bounds.x1, c.x1) + Math.min(n.bounds.x2, c.x2)) / 2 + ("horizontal" === C ? 0 : s / 2), q = 0 > v ? Math.max(n.point.x, b) - ("horizontal" === C ? B / 2 : 0) : Math.min(n.point.x, b) - B / 2, q = Math.max(q, e));
                    "vertical" === C && (g += k - s / 2);
                    h.x = q;
                    h.y = g;
                    h.render(!0);
                    z && ("inside" !== y && (0 > p.indexOf("bar") && ("error" !== p || !n.axisSwapped) && n.point.x > c.x1 && n.point.x < c.x2 || !x) && (0 > p.indexOf("column") && ("error" !== p || n.axisSwapped) && n.point.y > c.y1 &&
                        n.point.y < c.y2 || !x)) && (d.lineWidth = z, d.strokeStyle = u ? u : "gray", d.setLineDash && d.setLineDash(N(m, z)), d.beginPath(), d.moveTo(n.point.x, n.point.y), 0 <= p.indexOf("bar") || "error" === p && n.axisSwapped ? d.lineTo(q + (0 < n.direction ? -l : B + l) + ("vertical" === C ? -s / 2 : 0), g + ("vertical" === C ? -k / 2 : k / 2 - s / 2) - t) : 0 <= p.indexOf("column") || "error" === p && !n.axisSwapped ? d.lineTo(q + B / 2 - ("horizontal" === C ? 0 : s / 2), g + ("vertical" === C ? (g - k < n.point.y ? 0 : -k) + t : (g - s / 2 < n.point.y ? k : 0) - s / 2)) : d.lineTo(q + B / 2 - ("horizontal" === C ? 0 : s / 2), g + ("vertical" ===
                        C ? g - k < n.point.y ? 0 : -k : (g - s / 2 < n.point.y ? k : 0) - s / 2)), d.stroke())
                }
            }
            d = { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 };
            for (a = 0; a < this._indexLabels.length; a++) n = this._indexLabels[a], h = ka("indexLabelBackgroundColor", n.dataPoint, n.dataSeries), n.dataSeries.indexLabelBackgroundColor = r(h) ? w ? "transparent" : null : h;
            return d
        };
        m.prototype.renderLine = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx :
                d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                for (var f = [], l, t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var B = a.dataSeriesIndexes[t],
                        k = this.data[B];
                    c.lineWidth = k.lineThickness;
                    var n = k.dataPoints,
                        p = "solid";
                    if (c.setLineDash) { var q = N(k.nullDataLineDashType, k.lineThickness),
                            p = k.lineDashType,
                            g = N(p, k.lineThickness);
                        c.setLineDash(g) }
                    var s = k.id;
                    this._eventManager.objectMap[s] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: B
                    };
                    s = Q(s);
                    b.strokeStyle = s;
                    b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var s = k._colorSet,
                        h = s = k.lineColor = k.options.lineColor ? k.options.lineColor : s[0];
                    c.strokeStyle = s;
                    var m = !0,
                        u = 0,
                        z, r;
                    c.beginPath();
                    if (0 < n.length) {
                        for (var C = !1, u = 0; u < n.length; u++)
                            if (z = n[u].x.getTime ? n[u].x.getTime() : n[u].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !C)))
                                if ("number" !== typeof n[u].y) 0 < u && !(k.connectNullData || C || m) && (c.stroke(), w && b.stroke()), C = !0;
                                else {
                                    z = a.axisX.convertValueToPixel(z);
                                    r = a.axisY.convertValueToPixel(n[u].y);
                                    var D = k.dataPointIds[u];
                                    this._eventManager.objectMap[D] = { id: D, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: u, x1: z, y1: r };
                                    m || C ? (!m && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(l.x, l.y), p = k.nullDataLineDashType, c.setLineDash(q)), c.lineTo(z, r), w && b.lineTo(z, r)) : (c.beginPath(), c.moveTo(z, r), w && (b.beginPath(),
                                        b.moveTo(z, r))), C = m = !1) : (c.lineTo(z, r), w && b.lineTo(z, r), 0 == u % 500 && (c.stroke(), c.beginPath(), c.moveTo(z, r), w && (b.stroke(), b.beginPath(), b.moveTo(z, r))));
                                    l = { x: z, y: r };
                                    u < n.length - 1 && (h !== (n[u].lineColor || s) || p !== (n[u].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(z, r), h = n[u].lineColor || s, c.strokeStyle = h, c.setLineDash && (n[u].lineDashType ? (p = n[u].lineDashType, c.setLineDash(N(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(g))));
                                    if (0 < n[u].markerSize || 0 < k.markerSize) {
                                        var A = k.getMarkerProperties(u,
                                            z, r, c);
                                        f.push(A);
                                        D = Q(D);
                                        w && f.push({ x: z, y: r, ctx: b, type: A.type, size: A.size, color: D, borderColor: D, borderThickness: A.borderThickness })
                                    }(n[u].indexLabel || k.indexLabel || n[u].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "line", dataPoint: n[u], dataSeries: k, point: { x: z, y: r }, direction: 0 > n[u].y === a.axisY.reversed ? 1 : -1, color: s })
                                }
                        c.stroke();
                        w && b.stroke()
                    }
                }
                $.drawMarkers(f);
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop",
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
                c.restore();
                c.beginPath();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderStepLine = function(a) {
            var d =
                a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                for (var f = [], l, t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var B = a.dataSeriesIndexes[t],
                        k = this.data[B];
                    c.lineWidth = k.lineThickness;
                    var n = k.dataPoints,
                        p = "solid";
                    if (c.setLineDash) { var q = N(k.nullDataLineDashType, k.lineThickness),
                            p = k.lineDashType,
                            g = N(p, k.lineThickness);
                        c.setLineDash(g) }
                    var s =
                        k.id;
                    this._eventManager.objectMap[s] = { objectType: "dataSeries", dataSeriesIndex: B };
                    s = Q(s);
                    b.strokeStyle = s;
                    b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var s = k._colorSet,
                        h = s = k.lineColor = k.options.lineColor ? k.options.lineColor : s[0];
                    c.strokeStyle = s;
                    var m = !0,
                        u = 0,
                        r, y;
                    c.beginPath();
                    if (0 < n.length) {
                        for (var C = !1, u = 0; u < n.length; u++)
                            if (r = n[u].getTime ? n[u].x.getTime() : n[u].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !C)))
                                if ("number" !== typeof n[u].y) 0 <
                                    u && !(k.connectNullData || C || m) && (c.stroke(), w && b.stroke()), C = !0;
                                else {
                                    var D = y;
                                    r = a.axisX.convertValueToPixel(r);
                                    y = a.axisY.convertValueToPixel(n[u].y);
                                    var A = k.dataPointIds[u];
                                    this._eventManager.objectMap[A] = { id: A, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: u, x1: r, y1: y };
                                    m || C ? (!m && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || p === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(l.x, l.y), p = k.nullDataLineDashType, c.setLineDash(q)),
                                        c.lineTo(r, D), c.lineTo(r, y), w && (b.lineTo(r, D), b.lineTo(r, y))) : (c.beginPath(), c.moveTo(r, y), w && (b.beginPath(), b.moveTo(r, y))), C = m = !1) : (c.lineTo(r, D), w && b.lineTo(r, D), c.lineTo(r, y), w && b.lineTo(r, y), 0 == u % 500 && (c.stroke(), c.beginPath(), c.moveTo(r, y), w && (b.stroke(), b.beginPath(), b.moveTo(r, y))));
                                    l = { x: r, y: y };
                                    u < n.length - 1 && (h !== (n[u].lineColor || s) || p !== (n[u].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(r, y), h = n[u].lineColor || s, c.strokeStyle = h, c.setLineDash && (n[u].lineDashType ? (p = n[u].lineDashType,
                                        c.setLineDash(N(p, k.lineThickness))) : (p = k.lineDashType, c.setLineDash(g))));
                                    if (0 < n[u].markerSize || 0 < k.markerSize) D = k.getMarkerProperties(u, r, y, c), f.push(D), A = Q(A), w && f.push({ x: r, y: y, ctx: b, type: D.type, size: D.size, color: A, borderColor: A, borderThickness: D.borderThickness });
                                    (n[u].indexLabel || k.indexLabel || n[u].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepLine", dataPoint: n[u], dataSeries: k, point: { x: r, y: y }, direction: 0 > n[u].y === a.axisY.reversed ? 1 : -1, color: s })
                                }
                        c.stroke();
                        w && b.stroke()
                    }
                }
                $.drawMarkers(f);
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
                c.restore();
                c.beginPath();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: K.xClipAnimation,
                    easingFunction: K.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderSpline = function(a) {
            function d(a) {
                a = v(a, 2);
                if (0 < a.length) {
                    b.beginPath();
                    w && e.beginPath();
                    b.moveTo(a[0].x, a[0].y);
                    a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle);
                    a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
                    w && e.moveTo(a[0].x, a[0].y);
                    for (var c = 0; c < a.length - 3; c += 3)
                        if (b.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), w && e.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c +
                                2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), 0 < c && 0 === c % 3E3 || a[c + 3].newStrokeStyle || a[c + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(a[c + 3].x, a[c + 3].y), a[c + 3].newStrokeStyle && (b.strokeStyle = a[c + 3].newStrokeStyle), a[c + 3].newLineDashArray && b.setLineDash(a[c + 3].newLineDashArray), w && (e.stroke(), e.beginPath(), e.moveTo(a[c + 3].x, a[c + 3].y));
                    b.stroke();
                    w && e.stroke()
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx;
                b.save();
                var f = this.plotArea;
                b.beginPath();
                b.rect(f.x1, f.y1, f.width, f.height);
                b.clip();
                for (var l = [], t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var B = a.dataSeriesIndexes[t],
                        k = this.data[B];
                    b.lineWidth = k.lineThickness;
                    var n = k.dataPoints,
                        p = "solid";
                    if (b.setLineDash) { var q = N(k.nullDataLineDashType, k.lineThickness),
                            p = k.lineDashType,
                            g = N(p, k.lineThickness);
                        b.setLineDash(g) }
                    var s = k.id;
                    this._eventManager.objectMap[s] = { objectType: "dataSeries", dataSeriesIndex: B };
                    s = Q(s);
                    e.strokeStyle = s;
                    e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness,
                        4) : 0;
                    var s = k._colorSet,
                        h = s = k.lineColor = k.options.lineColor ? k.options.lineColor : s[0];
                    b.strokeStyle = s;
                    var m = 0,
                        u, r, y = [];
                    b.beginPath();
                    if (0 < n.length)
                        for (r = !1, m = 0; m < n.length; m++)
                            if (u = n[m].getTime ? n[m].x.getTime() : n[m].x, !(u < a.axisX.dataInfo.viewPortMin || u > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !r)))
                                if ("number" !== typeof n[m].y) 0 < m && !r && (k.connectNullData ? b.setLineDash && (0 < y.length && (k.options.nullDataLineDashType || !n[m - 1].lineDashType)) && (y[y.length - 1].newLineDashArray = q, p = k.nullDataLineDashType) :
                                    (d(y), y = [])), r = !0;
                                else {
                                    u = a.axisX.convertValueToPixel(u);
                                    r = a.axisY.convertValueToPixel(n[m].y);
                                    var C = k.dataPointIds[m];
                                    this._eventManager.objectMap[C] = { id: C, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: m, x1: u, y1: r };
                                    y[y.length] = { x: u, y: r };
                                    m < n.length - 1 && (h !== (n[m].lineColor || s) || p !== (n[m].lineDashType || k.lineDashType)) && (h = n[m].lineColor || s, y[y.length - 1].newStrokeStyle = h, b.setLineDash && (n[m].lineDashType ? (p = n[m].lineDashType, y[y.length - 1].newLineDashArray = N(p, k.lineThickness)) : (p = k.lineDashType,
                                        y[y.length - 1].newLineDashArray = g)));
                                    if (0 < n[m].markerSize || 0 < k.markerSize) { var D = k.getMarkerProperties(m, u, r, b);
                                        l.push(D);
                                        C = Q(C);
                                        w && l.push({ x: u, y: r, ctx: e, type: D.type, size: D.size, color: C, borderColor: C, borderThickness: D.borderThickness }) }(n[m].indexLabel || k.indexLabel || n[m].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: n[m], dataSeries: k, point: { x: u, y: r }, direction: 0 > n[m].y === a.axisY.reversed ? 1 : -1, color: s });
                                    r = !1
                                }
                    d(y)
                }
                $.drawMarkers(l);
                w && (c.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(f.x1, f.y1, f.width, f.height), e.beginPath());
                b.restore();
                b.beginPath();
                return {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: K.xClipAnimation,
                    easingFunction: K.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = 0,
                    l, t, B, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width,
                        0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                    p = a.axisX.dataInfo.minDiff;
                isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
                p = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && f > n && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < f) && (n = Math.max(this.options.dataPointWidth ?
                    this.dataPointWidth : -Infinity, f));
                p < f && (p = f);
                p > n && (p = n);
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n],
                        g = this.data[q],
                        s = g.dataPoints;
                    if (0 < s.length)
                        for (var h = 5 < p && g.bevelEnabled ? !0 : !1, f = 0; f < s.length; f++)
                            if (s[f].getTime ? B = s[f].x.getTime() :
                                B = s[f].x, !(B < a.axisX.dataInfo.viewPortMin || B > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[f].y) {
                                l = a.axisX.convertValueToPixel(B);
                                t = a.axisY.convertValueToPixel(s[f].y);
                                l = a.axisX.reversed ? l + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + n) * p << 0 : l - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + n) * p << 0;
                                var m = a.axisX.reversed ? l - p << 0 : l + p << 0,
                                    u;
                                0 <= s[f].y ? u = k : (u = t, t = k);
                                t > u && (b = t, t = u, u = b);
                                b = s[f].color ? s[f].color : g._colorSet[f % g._colorSet.length];
                                V(c, a.axisX.reversed ? m : l, t, a.axisX.reversed ?
                                    l : m, u, b, 0, null, h && (a.axisY.reversed ? 0 > s[f].y : 0 <= s[f].y), (a.axisY.reversed ? 0 <= s[f].y : 0 > s[f].y) && h, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[f];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: f, x1: l, y1: t, x2: m, y2: u };
                                b = Q(b);
                                w && V(this._eventManager.ghostCtx, a.axisX.reversed ? m : l, t, a.axisX.reversed ? l : m, u, b, 0, null, !1, !1, !1, !1);
                                (s[f].indexLabel || g.indexLabel || s[f].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "column",
                                    dataPoint: s[f],
                                    dataSeries: g,
                                    point: { x: l + (m - l) / 2, y: 0 > s[f].y === a.axisY.reversed ? t : u },
                                    direction: 0 > s[f].y === a.axisY.reversed ? 1 : -1,
                                    bounds: { x1: l, y1: Math.min(t, u), x2: m, y2: Math.max(t, u) },
                                    color: b
                                })
                            }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.yScaleAnimation, easingFunction: K.easing.easeOutQuart, animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k }
            }
        };
        m.prototype.renderStackedColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = [],
                    l = [],
                    t = [],
                    B = [],
                    k = 0,
                    n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                g = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(g) /
                    Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > n && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < k) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                g < k && (g = k);
                g > n && (g = n);
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1,
                    e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var h = a.dataSeriesIndexes[s],
                        m = this.data[h],
                        u = m.dataPoints;
                    if (0 < u.length) {
                        var r = 5 < g && m.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (k = 0; k < u.length; k++)
                            if (b = u[k].x.getTime ? u[k].x.getTime() : u[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y) {
                                n = a.axisX.convertValueToPixel(b);
                                var y = n - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                    C = y + g << 0,
                                    D;
                                if (a.axisY.logarithmic ||
                                    a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y) t[b] = u[k].y + (t[b] ? t[b] : 0), 0 < t[b] && (p = a.axisY.convertValueToPixel(t[b]), D = "undefined" !== typeof f[b] ? f[b] : q, f[b] = p);
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y) B[b] = u[k].y + (B[b] ? B[b] : 0), D = a.axisY.convertValueToPixel(B[b]), p = "undefined" !== typeof l[b] ? l[b] : q, l[b] = D;
                                else if (p = a.axisY.convertValueToPixel(u[k].y), 0 <= u[k].y) { var A = "undefined" !== typeof f[b] ? f[b] : 0;
                                    p -= A;
                                    D = q - A;
                                    f[b] = A + (D - p) } else A =
                                    l[b] ? l[b] : 0, D = p + A, p = q + A, l[b] = A + (D - p);
                                b = u[k].color ? u[k].color : m._colorSet[k % m._colorSet.length];
                                V(c, y, a.axisY.reversed ? D : p, C, a.axisY.reversed ? p : D, b, 0, null, r && (a.axisY.reversed ? 0 > u[k].y : 0 <= u[k].y), (a.axisY.reversed ? 0 <= u[k].y : 0 > u[k].y) && r, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[k];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: h, dataPointIndex: k, x1: y, y1: p, x2: C, y2: D };
                                b = Q(b);
                                w && V(this._eventManager.ghostCtx, y, p, C, D, b, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || m.indexLabel || u[k].indexLabelFormatter ||
                                    m.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn", dataPoint: u[k], dataSeries: m, point: { x: n, y: 0 <= u[k].y ? p : D }, direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: y, y1: Math.min(p, D), x2: C, y2: Math.max(p, D) }, color: b })
                            }
                    }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.yScaleAnimation, easingFunction: K.easing.easeOutQuart, animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q }
            }
        };
        m.prototype.renderStackedColumn100 = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx :
                d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = [],
                    l = [],
                    t = [],
                    B = [],
                    k = 0,
                    n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                g = this.options.dataPointWidth ?
                    this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > n && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < k) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                g < k && (g = k);
                g > n && (g = n);
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var h = a.dataSeriesIndexes[s],
                        m = this.data[h],
                        u = m.dataPoints;
                    if (0 < u.length)
                        for (var r = 5 < g && m.bevelEnabled ? !0 : !1, k = 0; k < u.length; k++)
                            if (b = u[k].x.getTime ? u[k].x.getTime() : u[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y) {
                                n = a.axisX.convertValueToPixel(b);
                                p = 0 !== a.dataPointYSums[b] ?
                                    100 * (u[k].y / a.dataPointYSums[b]) : 0;
                                var y = n - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                    C = y + g << 0,
                                    D;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y) { t[b] = p + ("undefined" !== typeof t[b] ? t[b] : 0); if (0 >= t[b]) continue;
                                    p = a.axisY.convertValueToPixel(t[b]);
                                    D = f[b] ? f[b] : q;
                                    f[b] = p } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y) B[b] = p + ("undefined" !== typeof B[b] ? B[b] : 0), D = a.axisY.convertValueToPixel(B[b]), p = l[b] ? l[b] : q, l[b] = D;
                                else if (p = a.axisY.convertValueToPixel(p), 0 <= u[k].y) { var A = "undefined" !== typeof f[b] ? f[b] : 0;
                                    p -= A;
                                    D = q - A;
                                    a.dataSeriesIndexes.length - 1 === s && 1 >= Math.abs(e.y1 - p) && (p = e.y1);
                                    f[b] = A + (D - p) } else A = "undefined" !== typeof l[b] ? l[b] : 0, D = p + A, p = q + A, a.dataSeriesIndexes.length - 1 === s && 1 >= Math.abs(e.y2 - D) && (D = e.y2), l[b] = A + (D - p);
                                b = u[k].color ? u[k].color : m._colorSet[k % m._colorSet.length];
                                V(c, y, a.axisY.reversed ? D : p, C, a.axisY.reversed ? p : D, b, 0, null, r && (a.axisY.reversed ? 0 > u[k].y : 0 <= u[k].y), (a.axisY.reversed ? 0 <= u[k].y : 0 > u[k].y) &&
                                    r, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[k];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: h, dataPointIndex: k, x1: y, y1: p, x2: C, y2: D };
                                b = Q(b);
                                w && V(this._eventManager.ghostCtx, y, p, C, D, b, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || m.indexLabel || u[k].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn100",
                                    dataPoint: u[k],
                                    dataSeries: m,
                                    point: { x: n, y: 0 <= u[k].y ? p : D },
                                    direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: y,
                                        y1: Math.min(p, D),
                                        x2: C,
                                        y2: Math.max(p,
                                            D)
                                    },
                                    color: b
                                })
                            }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: K.yScaleAnimation,
                    easingFunction: K.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
                }
            }
        };
        m.prototype.renderBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = 0,
                    l, t, B, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ?
                    this.dataPointWidth : 1,
                    n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                    p = a.axisX.dataInfo.minDiff;
                isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
                p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && f > n && (f =
                    Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < f) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                p < f && (p = f);
                p > n && (p = n);
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q =
                        a.dataSeriesIndexes[n],
                        g = this.data[q],
                        s = g.dataPoints;
                    if (0 < s.length) {
                        var h = 5 < p && g.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (f = 0; f < s.length; f++)
                            if (s[f].getTime ? B = s[f].x.getTime() : B = s[f].x, !(B < a.axisX.dataInfo.viewPortMin || B > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[f].y) {
                                t = a.axisX.convertValueToPixel(B);
                                l = a.axisY.convertValueToPixel(s[f].y);
                                t = a.axisX.reversed ? t + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + n) * p << 0 : t - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount +
                                    n) * p << 0;
                                var m = a.axisX.reversed ? t - p << 0 : t + p << 0,
                                    u;
                                0 <= s[f].y ? u = k : (u = l, l = k);
                                b = s[f].color ? s[f].color : g._colorSet[f % g._colorSet.length];
                                V(c, a.axisY.reversed ? l : u, a.axisX.reversed ? m : t, a.axisY.reversed ? u : l, a.axisX.reversed ? t : m, b, 0, null, h, !1, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[f];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: f, x1: u, y1: t, x2: l, y2: m };
                                b = Q(b);
                                w && V(this._eventManager.ghostCtx, u, a.axisX.reversed ? m : t, l, a.axisX.reversed ? t : m, b, 0, null, !1, !1, !1, !1);
                                (s[f].indexLabel ||
                                    g.indexLabel || s[f].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: s[f], dataSeries: g, point: { x: 0 <= s[f].y ? l : u, y: t + (m - t) / 2 }, direction: 0 > s[f].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(u, l), y1: t, x2: Math.max(u, l), y2: m }, color: b })
                            }
                    }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas,
                    0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.xScaleAnimation, easingFunction: K.easing.easeOutQuart, animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k }
            }
        };
        m.prototype.renderStackedBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = [],
                    l = [],
                    t = [],
                    B = [],
                    k = 0,
                    n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                g =
                    this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > p && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < k) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                g < k && (g = k);
                g > p && (g = p);
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var h = a.dataSeriesIndexes[s],
                        m = this.data[h],
                        u = m.dataPoints;
                    if (0 < u.length) {
                        var r = 5 < g && m.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (k = 0; k < u.length; k++)
                            if (b = u[k].x.getTime ? u[k].x.getTime() : u[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" ===
                                typeof u[k].y) {
                                p = a.axisX.convertValueToPixel(b);
                                var y = p - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                    C = y + g << 0,
                                    D;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y) t[b] = u[k].y + (t[b] ? t[b] : 0), 0 < t[b] && (D = f[b] ? f[b] : q, f[b] = n = a.axisY.convertValueToPixel(t[b]));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y) B[b] = u[k].y + (B[b] ? B[b] : 0), n = l[b] ? l[b] : q, l[b] = D = a.axisY.convertValueToPixel(B[b]);
                                else if (n = a.axisY.convertValueToPixel(u[k].y),
                                    0 <= u[k].y) { var A = f[b] ? f[b] : 0;
                                    D = q + A;
                                    n += A;
                                    f[b] = A + (n - D) } else A = l[b] ? l[b] : 0, D = n - A, n = q - A, l[b] = A + (n - D);
                                b = u[k].color ? u[k].color : m._colorSet[k % m._colorSet.length];
                                V(c, a.axisY.reversed ? n : D, y, a.axisY.reversed ? D : n, C, b, 0, null, r, !1, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[k];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: h, dataPointIndex: k, x1: D, y1: y, x2: n, y2: C };
                                b = Q(b);
                                w && V(this._eventManager.ghostCtx, D, y, n, C, b, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || m.indexLabel || u[k].indexLabelFormatter ||
                                    m.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar", dataPoint: u[k], dataSeries: m, point: { x: 0 <= u[k].y ? n : D, y: p }, direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(D, n), y1: y, x2: Math.max(D, n), y2: C }, color: b })
                            }
                    }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx &&
                    this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.xScaleAnimation, easingFunction: K.easing.easeOutQuart, animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q }
            }
        };
        m.prototype.renderStackedBar100 = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b =
                    null,
                    e = this.plotArea,
                    f = [],
                    l = [],
                    t = [],
                    B = [],
                    k = 0,
                    n, p, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                g = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ?
                    Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && k > p && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < k) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                g < k && (g = k);
                g > p && (g = p);
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(),
                    this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var s = 0; s < a.dataSeriesIndexes.length; s++) {
                    var h = a.dataSeriesIndexes[s],
                        m = this.data[h],
                        u = m.dataPoints;
                    if (0 < u.length) {
                        var r = 5 < g && m.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (k = 0; k < u.length; k++)
                            if (b = u[k].x.getTime ? u[k].x.getTime() : u[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof u[k].y) {
                                p = a.axisX.convertValueToPixel(b);
                                var y;
                                y = 0 !== a.dataPointYSums[b] ? 100 *
                                    (u[k].y / a.dataPointYSums[b]) : 0;
                                var C = p - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                    D = C + g << 0;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < u[k].y) { t[b] = y + (t[b] ? t[b] : 0); if (0 >= t[b]) continue;
                                    y = f[b] ? f[b] : q;
                                    f[b] = n = a.axisY.convertValueToPixel(t[b]) } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= u[k].y) B[b] = y + (B[b] ? B[b] : 0), n = l[b] ? l[b] : q, l[b] = y = a.axisY.convertValueToPixel(B[b]);
                                else if (n = a.axisY.convertValueToPixel(y), 0 <= u[k].y) {
                                    var A =
                                        f[b] ? f[b] : 0;
                                    y = q + A;
                                    n += A;
                                    a.dataSeriesIndexes.length - 1 === s && 1 >= Math.abs(e.x2 - n) && (n = e.x2);
                                    f[b] = A + (n - y)
                                } else A = l[b] ? l[b] : 0, y = n - A, n = q - A, a.dataSeriesIndexes.length - 1 === s && 1 >= Math.abs(e.x1 - y) && (y = e.x1), l[b] = A + (n - y);
                                b = u[k].color ? u[k].color : m._colorSet[k % m._colorSet.length];
                                V(c, a.axisY.reversed ? n : y, C, a.axisY.reversed ? y : n, D, b, 0, null, r, !1, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[k];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: h, dataPointIndex: k, x1: y, y1: C, x2: n, y2: D };
                                b = Q(b);
                                w && V(this._eventManager.ghostCtx,
                                    y, C, n, D, b, 0, null, !1, !1, !1, !1);
                                (u[k].indexLabel || m.indexLabel || u[k].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar100", dataPoint: u[k], dataSeries: m, point: { x: 0 <= u[k].y ? n : y, y: p }, direction: 0 > u[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(y, n), y1: C, x2: Math.max(y, n), y2: D }, color: b })
                            }
                    }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.xScaleAnimation, easingFunction: K.easing.easeOutQuart, animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q }
            }
        };
        m.prototype.renderArea =
            function(a) {
                var d, c;

                function b() { D && (0 < g.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? C = y : 0 > a.axisY.viewportMaximum ? C = t.y1 : 0 < a.axisY.viewportMinimum && (C = y), f.lineTo(m, C), f.lineTo(D.x, C), f.closePath(), f.globalAlpha = g.fillOpacity, f.fill(), f.globalAlpha = 1, w && (l.lineTo(m, C), l.lineTo(D.x, C), l.closePath(), l.fill()), f.beginPath(), f.moveTo(m, u), l.beginPath(), l.moveTo(m, u), D = { x: m, y: u }) }
                var e = a.targetCanvasCtx || this.plotArea.ctx,
                    f = w ? this._preRenderCtx :
                    e;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var l = this._eventManager.ghostCtx,
                        t = a.axisY.lineCoordinates,
                        B = [],
                        k = this.plotArea,
                        n;
                    f.save();
                    w && l.save();
                    f.beginPath();
                    f.rect(k.x1, k.y1, k.width, k.height);
                    f.clip();
                    w && (l.beginPath(), l.rect(k.x1, k.y1, k.width, k.height), l.clip());
                    for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                        var q = a.dataSeriesIndexes[p],
                            g = this.data[q],
                            s = g.dataPoints,
                            B = g.id;
                        this._eventManager.objectMap[B] = { objectType: "dataSeries", dataSeriesIndex: q };
                        B = Q(B);
                        l.fillStyle = B;
                        B = [];
                        d = !0;
                        var h = 0,
                            m, u, r, y = a.axisY.convertValueToPixel(a.axisY.logarithmic ?
                                a.axisY.viewportMinimum : 0),
                            C, D = null;
                        if (0 < s.length) {
                            var A = g._colorSet[h % g._colorSet.length],
                                v = g.lineColor = g.options.lineColor || A,
                                x = v;
                            f.fillStyle = A;
                            f.strokeStyle = v;
                            f.lineWidth = g.lineThickness;
                            c = "solid";
                            if (f.setLineDash) { var R = N(g.nullDataLineDashType, g.lineThickness);
                                c = g.lineDashType; var aa = N(c, g.lineThickness);
                                f.setLineDash(aa) }
                            for (var ja = !0; h < s.length; h++)
                                if (r = s[h].x.getTime ? s[h].x.getTime() : s[h].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !ja)))
                                    if ("number" !==
                                        typeof s[h].y) g.connectNullData || (ja || d) || b(), ja = !0;
                                    else {
                                        m = a.axisX.convertValueToPixel(r);
                                        u = a.axisY.convertValueToPixel(s[h].y);
                                        d || ja ? (!d && g.connectNullData ? (f.setLineDash && (g.options.nullDataLineDashType || c === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (d = m, c = u, m = n.x, u = n.y, b(), f.moveTo(n.x, n.y), m = d, u = c, D = n, c = g.nullDataLineDashType, f.setLineDash(R)), f.lineTo(m, u), w && l.lineTo(m, u)) : (f.beginPath(), f.moveTo(m, u), w && (l.beginPath(), l.moveTo(m, u)), D = { x: m, y: u }), ja = d = !1) : (f.lineTo(m, u), w && l.lineTo(m,
                                            u), 0 == h % 250 && b());
                                        n = { x: m, y: u };
                                        h < s.length - 1 && (x !== (s[h].lineColor || v) || c !== (s[h].lineDashType || g.lineDashType)) && (b(), x = s[h].lineColor || v, f.strokeStyle = x, f.setLineDash && (s[h].lineDashType ? (c = s[h].lineDashType, f.setLineDash(N(c, g.lineThickness))) : (c = g.lineDashType, f.setLineDash(aa))));
                                        var Y = g.dataPointIds[h];
                                        this._eventManager.objectMap[Y] = { id: Y, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: m, y1: u };
                                        0 !== s[h].markerSize && (0 < s[h].markerSize || 0 < g.markerSize) && (r = g.getMarkerProperties(h, m,
                                            u, f), B.push(r), Y = Q(Y), w && B.push({ x: m, y: u, ctx: l, type: r.type, size: r.size, color: Y, borderColor: Y, borderThickness: r.borderThickness }));
                                        (s[h].indexLabel || g.indexLabel || s[h].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: s[h], dataSeries: g, point: { x: m, y: u }, direction: 0 > s[h].y === a.axisY.reversed ? 1 : -1, color: A })
                                    }
                            b();
                            $.drawMarkers(B)
                        }
                    }
                    w && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas,
                        0, 0, this.width, this.height), a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
                    f.restore();
                    return { source: e, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 }
                }
            };
        m.prototype.renderSplineArea = function(a) {
            function d() {
                var c = v(r, 2);
                if (0 < c.length) {
                    if (0 <
                        n.lineThickness) {
                        b.beginPath();
                        b.moveTo(c[0].x, c[0].y);
                        c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle);
                        c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
                        for (var d = 0; d < c.length - 3; d += 3)
                            if (b.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), w && e.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), c[d + 3].newStrokeStyle || c[d + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(c[d + 3].x, c[d + 3].y), c[d + 3].newStrokeStyle && (b.strokeStyle = c[d + 3].newStrokeStyle),
                                c[d + 3].newLineDashArray && b.setLineDash(c[d + 3].newLineDashArray);
                        b.stroke()
                    }
                    b.beginPath();
                    b.moveTo(c[0].x, c[0].y);
                    w && (e.beginPath(), e.moveTo(c[0].x, c[0].y));
                    for (d = 0; d < c.length - 3; d += 3) b.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), w && e.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y);
                    a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? m = h : 0 > a.axisY.viewportMaximum ? m = f.y1 : 0 < a.axisY.viewportMinimum && (m = h);
                    u = { x: c[0].x, y: c[0].y };
                    b.lineTo(c[c.length -
                        1].x, m);
                    b.lineTo(u.x, m);
                    b.closePath();
                    b.globalAlpha = n.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    w && (e.lineTo(c[c.length - 1].x, m), e.lineTo(u.x, m), e.closePath(), e.fill())
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = a.axisY.lineCoordinates,
                    l = [],
                    t = this.plotArea;
                b.save();
                w && e.save();
                b.beginPath();
                b.rect(t.x1, t.y1, t.width, t.height);
                b.clip();
                w && (e.beginPath(), e.rect(t.x1, t.y1, t.width, t.height), e.clip());
                for (var B =
                        0; B < a.dataSeriesIndexes.length; B++) {
                    var k = a.dataSeriesIndexes[B],
                        n = this.data[k],
                        p = n.dataPoints,
                        l = n.id;
                    this._eventManager.objectMap[l] = { objectType: "dataSeries", dataSeriesIndex: k };
                    l = Q(l);
                    e.fillStyle = l;
                    var l = [],
                        q = 0,
                        g, s, h = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        m, u = null,
                        r = [];
                    if (0 < p.length) {
                        var y = n._colorSet[q % n._colorSet.length],
                            C = n.lineColor = n.options.lineColor || y,
                            D = C;
                        b.fillStyle = y;
                        b.strokeStyle = C;
                        b.lineWidth = n.lineThickness;
                        var A = "solid";
                        if (b.setLineDash) {
                            var x = N(n.nullDataLineDashType,
                                    n.lineThickness),
                                A = n.lineDashType,
                                F = N(A, n.lineThickness);
                            b.setLineDash(F)
                        }
                        for (s = !1; q < p.length; q++)
                            if (g = p[q].x.getTime ? p[q].x.getTime() : p[q].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !s)))
                                if ("number" !== typeof p[q].y) 0 < q && !s && (n.connectNullData ? b.setLineDash && (0 < r.length && (n.options.nullDataLineDashType || !p[q - 1].lineDashType)) && (r[r.length - 1].newLineDashArray = x, A = n.nullDataLineDashType) : (d(), r = [])), s = !0;
                                else {
                                    g = a.axisX.convertValueToPixel(g);
                                    s = a.axisY.convertValueToPixel(p[q].y);
                                    var R = n.dataPointIds[q];
                                    this._eventManager.objectMap[R] = { id: R, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: q, x1: g, y1: s };
                                    r[r.length] = { x: g, y: s };
                                    q < p.length - 1 && (D !== (p[q].lineColor || C) || A !== (p[q].lineDashType || n.lineDashType)) && (D = p[q].lineColor || C, r[r.length - 1].newStrokeStyle = D, b.setLineDash && (p[q].lineDashType ? (A = p[q].lineDashType, r[r.length - 1].newLineDashArray = N(A, n.lineThickness)) : (A = n.lineDashType, r[r.length - 1].newLineDashArray = F)));
                                    if (0 !== p[q].markerSize && (0 < p[q].markerSize || 0 < n.markerSize)) {
                                        var aa =
                                            n.getMarkerProperties(q, g, s, b);
                                        l.push(aa);
                                        R = Q(R);
                                        w && l.push({ x: g, y: s, ctx: e, type: aa.type, size: aa.size, color: R, borderColor: R, borderThickness: aa.borderThickness })
                                    }(p[q].indexLabel || n.indexLabel || p[q].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({ chartType: "splineArea", dataPoint: p[q], dataSeries: n, point: { x: g, y: s }, direction: 0 > p[q].y === a.axisY.reversed ? 1 : -1, color: y });
                                    s = !1
                                }
                        d();
                        $.drawMarkers(l)
                    }
                }
                w && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation =
                    "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(t.x1, t.y1, t.width, t.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderStepArea =
            function(a) {
                var d, c;

                function b() { D && (0 < g.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? C = y : 0 > a.axisY.viewportMaximum ? C = t.y1 : 0 < a.axisY.viewportMinimum && (C = y), f.lineTo(m, C), f.lineTo(D.x, C), f.closePath(), f.globalAlpha = g.fillOpacity, f.fill(), f.globalAlpha = 1, w && (l.lineTo(m, C), l.lineTo(D.x, C), l.closePath(), l.fill()), f.beginPath(), f.moveTo(m, u), l.beginPath(), l.moveTo(m, u), D = { x: m, y: u }) }
                var e = a.targetCanvasCtx || this.plotArea.ctx,
                    f = w ? this._preRenderCtx :
                    e;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var l = this._eventManager.ghostCtx,
                        t = a.axisY.lineCoordinates,
                        B = [],
                        k = this.plotArea,
                        n;
                    f.save();
                    w && l.save();
                    f.beginPath();
                    f.rect(k.x1, k.y1, k.width, k.height);
                    f.clip();
                    w && (l.beginPath(), l.rect(k.x1, k.y1, k.width, k.height), l.clip());
                    for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                        var q = a.dataSeriesIndexes[p],
                            g = this.data[q],
                            s = g.dataPoints,
                            B = g.id;
                        this._eventManager.objectMap[B] = { objectType: "dataSeries", dataSeriesIndex: q };
                        B = Q(B);
                        l.fillStyle = B;
                        B = [];
                        d = !0;
                        var h = 0,
                            m, u, r, y = a.axisY.convertValueToPixel(a.axisY.logarithmic ?
                                a.axisY.viewportMinimum : 0),
                            C, D = null;
                        c = !1;
                        if (0 < s.length) {
                            var A = g._colorSet[h % g._colorSet.length],
                                v = g.lineColor = g.options.lineColor || A,
                                x = v;
                            f.fillStyle = A;
                            f.strokeStyle = v;
                            f.lineWidth = g.lineThickness;
                            var R = "solid";
                            if (f.setLineDash) { var aa = N(g.nullDataLineDashType, g.lineThickness),
                                    R = g.lineDashType,
                                    F = N(R, g.lineThickness);
                                f.setLineDash(F) }
                            for (; h < s.length; h++)
                                if (r = s[h].x.getTime ? s[h].x.getTime() : s[h].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !c))) {
                                    var Y = u;
                                    "number" !==
                                    typeof s[h].y ? (g.connectNullData || (c || d) || b(), c = !0) : (m = a.axisX.convertValueToPixel(r), u = a.axisY.convertValueToPixel(s[h].y), d || c ? (!d && g.connectNullData ? (f.setLineDash && (g.options.nullDataLineDashType || R === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (d = m, c = u, m = n.x, u = n.y, b(), f.moveTo(n.x, n.y), m = d, u = c, D = n, R = g.nullDataLineDashType, f.setLineDash(aa)), f.lineTo(m, Y), f.lineTo(m, u), w && (l.lineTo(m, Y), l.lineTo(m, u))) : (f.beginPath(), f.moveTo(m, u), w && (l.beginPath(), l.moveTo(m, u)), D = { x: m, y: u }), c =
                                        d = !1) : (f.lineTo(m, Y), w && l.lineTo(m, Y), f.lineTo(m, u), w && l.lineTo(m, u), 0 == h % 250 && b()), n = { x: m, y: u }, h < s.length - 1 && (x !== (s[h].lineColor || v) || R !== (s[h].lineDashType || g.lineDashType)) && (b(), x = s[h].lineColor || v, f.strokeStyle = x, f.setLineDash && (s[h].lineDashType ? (R = s[h].lineDashType, f.setLineDash(N(R, g.lineThickness))) : (R = g.lineDashType, f.setLineDash(F)))), r = g.dataPointIds[h], this._eventManager.objectMap[r] = { id: r, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: h, x1: m, y1: u }, 0 !== s[h].markerSize && (0 < s[h].markerSize ||
                                        0 < g.markerSize) && (Y = g.getMarkerProperties(h, m, u, f), B.push(Y), r = Q(r), w && B.push({ x: m, y: u, ctx: l, type: Y.type, size: Y.size, color: r, borderColor: r, borderThickness: Y.borderThickness })), (s[h].indexLabel || g.indexLabel || s[h].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepArea", dataPoint: s[h], dataSeries: g, point: { x: m, y: u }, direction: 0 > s[h].y === a.axisY.reversed ? 1 : -1, color: A }))
                                }
                            b();
                            $.drawMarkers(B)
                        }
                    }
                    w && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.globalCompositeOperation =
                        "source-atop", a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
                    f.restore();
                    return { source: e, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 }
                }
            };
        m.prototype.renderStackedArea =
            function(a) {
                function d() { if (!(1 > k.length)) { for (0 < A.lineThickness && b.stroke(); 0 < k.length;) { var a = k.pop();
                            b.lineTo(a.x, a.y);
                            w && r.lineTo(a.x, a.y) }
                        b.closePath();
                        b.globalAlpha = A.fillOpacity;
                        b.fill();
                        b.globalAlpha = 1;
                        b.beginPath();
                        w && (r.closePath(), r.fill(), r.beginPath());
                        k = [] } }
                var c = a.targetCanvasCtx || this.plotArea.ctx,
                    b = w ? this._preRenderCtx : c;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var e = null,
                        f = null,
                        l = [],
                        t = this.plotArea,
                        h = [],
                        k = [],
                        n = [],
                        p = [],
                        q = 0,
                        g, s, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum :
                            0),
                        r = this._eventManager.ghostCtx,
                        u, z, y;
                    w && r.beginPath();
                    b.save();
                    w && r.save();
                    b.beginPath();
                    b.rect(t.x1, t.y1, t.width, t.height);
                    b.clip();
                    w && (r.beginPath(), r.rect(t.x1, t.y1, t.width, t.height), r.clip());
                    for (var e = [], C = 0; C < a.dataSeriesIndexes.length; C++) { var D = a.dataSeriesIndexes[C],
                            A = this.data[D],
                            v = A.dataPoints;
                        A.dataPointIndexes = []; for (q = 0; q < v.length; q++) D = v[q].x.getTime ? v[q].x.getTime() : v[q].x, A.dataPointIndexes[D] = q, e[D] || (n.push(D), e[D] = !0);
                        n.sort(Ra) }
                    for (C = 0; C < a.dataSeriesIndexes.length; C++) {
                        D = a.dataSeriesIndexes[C];
                        A = this.data[D];
                        v = A.dataPoints;
                        z = !0;
                        k = [];
                        q = A.id;
                        this._eventManager.objectMap[q] = { objectType: "dataSeries", dataSeriesIndex: D };
                        q = Q(q);
                        r.fillStyle = q;
                        if (0 < n.length) {
                            var e = A._colorSet[0],
                                x = A.lineColor = A.options.lineColor || e,
                                R = x;
                            b.fillStyle = e;
                            b.strokeStyle = x;
                            b.lineWidth = A.lineThickness;
                            y = "solid";
                            if (b.setLineDash) { var aa = N(A.nullDataLineDashType, A.lineThickness);
                                y = A.lineDashType; var F = N(y, A.lineThickness);
                                b.setLineDash(F) }
                            for (var Y = !0, q = 0; q < n.length; q++) {
                                var f = n[q],
                                    fa = null,
                                    fa = 0 <= A.dataPointIndexes[f] ? v[A.dataPointIndexes[f]] : { x: f, y: null };
                                if (!(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!A.connectNullData || !Y)))
                                    if ("number" !== typeof fa.y) A.connectNullData || (Y || z) || d(), Y = !0;
                                    else {
                                        g = a.axisX.convertValueToPixel(f);
                                        var la = h[f] ? h[f] : 0;
                                        if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) { p[f] = fa.y + (p[f] ? p[f] : 0); if (0 >= p[f] && a.axisY.logarithmic) continue;
                                            s = a.axisY.convertValueToPixel(p[f]) } else s = a.axisY.convertValueToPixel(fa.y), s -= la;
                                        k.push({ x: g, y: m - la });
                                        h[f] = m - s;
                                        z || Y ? (!z &&
                                            A.connectNullData ? (b.setLineDash && (A.options.nullDataLineDashType || y === A.lineDashType && A.lineDashType !== A.nullDataLineDashType) && (z = k.pop(), y = k[k.length - 1], d(), b.moveTo(u.x, u.y), k.push(y), k.push(z), y = A.nullDataLineDashType, b.setLineDash(aa)), b.lineTo(g, s), w && r.lineTo(g, s)) : (b.beginPath(), b.moveTo(g, s), w && (r.beginPath(), r.moveTo(g, s))), Y = z = !1) : (b.lineTo(g, s), w && r.lineTo(g, s), 0 == q % 250 && (d(), b.moveTo(g, s), w && r.moveTo(g, s), k.push({ x: g, y: m - la })));
                                        u = { x: g, y: s };
                                        q < v.length - 1 && (R !== (v[q].lineColor || x) || y !==
                                            (v[q].lineDashType || A.lineDashType)) && (d(), b.beginPath(), b.moveTo(g, s), k.push({ x: g, y: m - la }), R = v[q].lineColor || x, b.strokeStyle = R, b.setLineDash && (v[q].lineDashType ? (y = v[q].lineDashType, b.setLineDash(N(y, A.lineThickness))) : (y = A.lineDashType, b.setLineDash(F))));
                                        if (0 <= A.dataPointIndexes[f]) { var E = A.dataPointIds[A.dataPointIndexes[f]];
                                            this._eventManager.objectMap[E] = { id: E, objectType: "dataPoint", dataSeriesIndex: D, dataPointIndex: A.dataPointIndexes[f], x1: g, y1: s } }
                                        0 <= A.dataPointIndexes[f] && 0 !== fa.markerSize &&
                                            (0 < fa.markerSize || 0 < A.markerSize) && (la = A.getMarkerProperties(A.dataPointIndexes[f], g, s, b), l.push(la), f = Q(E), w && l.push({ x: g, y: s, ctx: r, type: la.type, size: la.size, color: f, borderColor: f, borderThickness: la.borderThickness }));
                                        (fa.indexLabel || A.indexLabel || fa.indexLabelFormatter || A.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea", dataPoint: fa, dataSeries: A, point: { x: g, y: s }, direction: 0 > v[q].y === a.axisY.reversed ? 1 : -1, color: e })
                                    }
                            }
                            d();
                            b.moveTo(g, s);
                            w && r.moveTo(g, s)
                        }
                        delete A.dataPointIndexes
                    }
                    $.drawMarkers(l);
                    w && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(t.x1, t.y1, t.width, t.height), r.restore());
                    b.restore();
                    return {
                        source: c,
                        dest: this.plotArea.ctx,
                        animationCallback: K.xClipAnimation,
                        easingFunction: K.easing.linear,
                        animationBase: 0
                    }
                }
            };
        m.prototype.renderStackedArea100 = function(a) {
            function d() { for (0 < A.lineThickness && b.stroke(); 0 < k.length;) { var a = k.pop();
                    b.lineTo(a.x, a.y);
                    w && y.lineTo(a.x, a.y) }
                b.closePath();
                b.globalAlpha = A.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                b.beginPath();
                w && (y.closePath(), y.fill(), y.beginPath());
                k = [] }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = null,
                    l = this.plotArea,
                    t = [],
                    h = [],
                    k = [],
                    n = [],
                    p = [],
                    q =
                    0,
                    g, s, m, r, u, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    y = this._eventManager.ghostCtx;
                b.save();
                w && y.save();
                b.beginPath();
                b.rect(l.x1, l.y1, l.width, l.height);
                b.clip();
                w && (y.beginPath(), y.rect(l.x1, l.y1, l.width, l.height), y.clip());
                for (var e = [], C = 0; C < a.dataSeriesIndexes.length; C++) {
                    var D = a.dataSeriesIndexes[C],
                        A = this.data[D],
                        v = A.dataPoints;
                    A.dataPointIndexes = [];
                    for (q = 0; q < v.length; q++) D = v[q].x.getTime ? v[q].x.getTime() : v[q].x, A.dataPointIndexes[D] = q, e[D] || (n.push(D), e[D] = !0);
                    n.sort(Ra)
                }
                for (C = 0; C < a.dataSeriesIndexes.length; C++) {
                    D = a.dataSeriesIndexes[C];
                    A = this.data[D];
                    v = A.dataPoints;
                    r = !0;
                    e = A.id;
                    this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: D };
                    e = Q(e);
                    y.fillStyle = e;
                    k = [];
                    if (0 < n.length) {
                        var e = A._colorSet[q % A._colorSet.length],
                            x = A.lineColor = A.options.lineColor || e,
                            R = x;
                        b.fillStyle = e;
                        b.strokeStyle = x;
                        b.lineWidth = A.lineThickness;
                        u = "solid";
                        if (b.setLineDash) {
                            var aa = N(A.nullDataLineDashType, A.lineThickness);
                            u = A.lineDashType;
                            var F = N(u, A.lineThickness);
                            b.setLineDash(F)
                        }
                        for (var Y = !0, q = 0; q < n.length; q++) {
                            var f = n[q],
                                fa = null,
                                fa = 0 <= A.dataPointIndexes[f] ? v[A.dataPointIndexes[f]] : { x: f, y: null };
                            if (!(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!A.connectNullData || !Y)))
                                if ("number" !== typeof fa.y) A.connectNullData || (Y || r) || d(), Y = !0;
                                else {
                                    var la;
                                    la = 0 !== a.dataPointYSums[f] ? 100 * (fa.y / a.dataPointYSums[f]) : 0;
                                    g = a.axisX.convertValueToPixel(f);
                                    var E = h[f] ? h[f] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        p[f] =
                                            la + (p[f] ? p[f] : 0);
                                        if (0 >= p[f] && a.axisY.logarithmic) continue;
                                        s = a.axisY.convertValueToPixel(p[f])
                                    } else s = a.axisY.convertValueToPixel(la), s -= E;
                                    k.push({ x: g, y: z - E });
                                    h[f] = z - s;
                                    r || Y ? (!r && A.connectNullData ? (b.setLineDash && (A.options.nullDataLineDashType || u === A.lineDashType && A.lineDashType !== A.nullDataLineDashType) && (r = k.pop(), u = k[k.length - 1], d(), b.moveTo(m.x, m.y), k.push(u), k.push(r), u = A.nullDataLineDashType, b.setLineDash(aa)), b.lineTo(g, s), w && y.lineTo(g, s)) : (b.beginPath(), b.moveTo(g, s), w && (y.beginPath(), y.moveTo(g,
                                        s))), Y = r = !1) : (b.lineTo(g, s), w && y.lineTo(g, s), 0 == q % 250 && (d(), b.moveTo(g, s), w && y.moveTo(g, s), k.push({ x: g, y: z - E })));
                                    m = { x: g, y: s };
                                    q < v.length - 1 && (R !== (v[q].lineColor || x) || u !== (v[q].lineDashType || A.lineDashType)) && (d(), b.beginPath(), b.moveTo(g, s), k.push({ x: g, y: z - E }), R = v[q].lineColor || x, b.strokeStyle = R, b.setLineDash && (v[q].lineDashType ? (u = v[q].lineDashType, b.setLineDash(N(u, A.lineThickness))) : (u = A.lineDashType, b.setLineDash(F))));
                                    if (0 <= A.dataPointIndexes[f]) {
                                        var G = A.dataPointIds[A.dataPointIndexes[f]];
                                        this._eventManager.objectMap[G] = { id: G, objectType: "dataPoint", dataSeriesIndex: D, dataPointIndex: A.dataPointIndexes[f], x1: g, y1: s }
                                    }
                                    0 <= A.dataPointIndexes[f] && 0 !== fa.markerSize && (0 < fa.markerSize || 0 < A.markerSize) && (E = A.getMarkerProperties(q, g, s, b), t.push(E), f = Q(G), w && t.push({ x: g, y: s, ctx: y, type: E.type, size: E.size, color: f, borderColor: f, borderThickness: E.borderThickness }));
                                    (fa.indexLabel || A.indexLabel || fa.indexLabelFormatter || A.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea100",
                                        dataPoint: fa,
                                        dataSeries: A,
                                        point: { x: g, y: s },
                                        direction: 0 > v[q].y === a.axisY.reversed ? 1 : -1,
                                        color: e
                                    })
                                }
                        }
                        d();
                        b.moveTo(g, s);
                        w && y.moveTo(g, s)
                    }
                    delete A.dataPointIndexes
                }
                $.drawMarkers(t);
                w && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(l.x1, l.y1, l.width, l.height), y.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderBubble = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this.plotArea,
                    e = 0,
                    f, l;
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(b.x1, b.y1, b.width, b.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(),
                    this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
                for (var t = -Infinity, h = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
                    for (var n = a.dataSeriesIndexes[k], p = this.data[n], q = p.dataPoints, g = 0, e = 0; e < q.length; e++) f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[e].z || (g = q[e].z, g > t && (t = g), g < h && (h = g));
                for (var s = 25 * Math.PI, m = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI,
                        s), k = 0; k < a.dataSeriesIndexes.length; k++)
                    if (n = a.dataSeriesIndexes[k], p = this.data[n], q = p.dataPoints, 0 < q.length)
                        for (c.strokeStyle = "#4572A7 ", e = 0; e < q.length; e++)
                            if (f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[e].y) {
                                f = a.axisX.convertValueToPixel(f);
                                l = a.axisY.convertValueToPixel(q[e].y);
                                var g = q[e].z,
                                    r = 2 * Math.max(Math.sqrt((t === h ? m / 2 : s + (m - s) / (t - h) * (g - h)) / Math.PI) << 0, 1),
                                    g = p.getMarkerProperties(e, c);
                                g.size = r;
                                c.globalAlpha =
                                    p.fillOpacity;
                                $.drawMarker(f, l, c, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                                c.globalAlpha = 1;
                                var u = p.dataPointIds[e];
                                this._eventManager.objectMap[u] = { id: u, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: e, x1: f, y1: l, size: r };
                                r = Q(u);
                                w && $.drawMarker(f, l, this._eventManager.ghostCtx, g.type, g.size, r, r, g.borderThickness);
                                (q[e].indexLabel || p.indexLabel || q[e].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bubble",
                                    dataPoint: q[e],
                                    dataSeries: p,
                                    point: { x: f, y: l },
                                    direction: 1,
                                    bounds: { x1: f - g.size / 2, y1: l - g.size / 2, x2: f + g.size / 2, y2: l + g.size / 2 },
                                    color: null
                                })
                            }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderScatter = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this.plotArea,
                    e = 0,
                    f, l;
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(b.x1, b.y1, b.width, b.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1,
                    b.width, b.height), this._eventManager.ghostCtx.clip());
                for (var t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var h = a.dataSeriesIndexes[t],
                        k = this.data[h],
                        n = k.dataPoints;
                    if (0 < n.length) {
                        c.strokeStyle = "#4572A7 ";
                        Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                        for (var p = 0, q = 0, e = 0; e < n.length; e++)
                            if (f = n[e].getTime ? f = n[e].x.getTime() : f = n[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof n[e].y) {
                                f = a.axisX.convertValueToPixel(f);
                                l = a.axisY.convertValueToPixel(n[e].y);
                                var g = k.getMarkerProperties(e,
                                    f, l, c);
                                c.globalAlpha = k.fillOpacity;
                                $.drawMarker(g.x, g.y, g.ctx, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                                c.globalAlpha = 1;
                                Math.sqrt((p - f) * (p - f) + (q - l) * (q - l)) < Math.min(g.size, 5) && n.length > Math.min(this.plotArea.width, this.plotArea.height) || (p = k.dataPointIds[e], this._eventManager.objectMap[p] = { id: p, objectType: "dataPoint", dataSeriesIndex: h, dataPointIndex: e, x1: f, y1: l }, p = Q(p), w && $.drawMarker(g.x, g.y, this._eventManager.ghostCtx, g.type, g.size, p, p, g.borderThickness), (n[e].indexLabel || k.indexLabel ||
                                    n[e].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "scatter", dataPoint: n[e], dataSeries: k, point: { x: f, y: l }, direction: 1, bounds: { x1: f - g.size / 2, y1: l - g.size / 2, x2: f + g.size / 2, y2: l + g.size / 2 }, color: null }), p = f, q = l)
                            }
                    }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderCandlestick = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d,
                b = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e =
                    null,
                    f = null,
                    l = this.plotArea,
                    t = 0,
                    h, k, n, p, q, g, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    s = a.axisX.dataInfo.minDiff;
                isFinite(s) || (s = 0.3 * Math.abs(a.axisX.range));
                s = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * l.width * (a.axisX.logarithmic ? Math.log(s) / Math.log(a.axisX.range) : Math.abs(s) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && e > f && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && f < e) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                s < e && (s = e);
                s > f && (s = f);
                c.save();
                w && b.save();
                c.beginPath();
                c.rect(l.x1, l.y1, l.width, l.height);
                c.clip();
                w && (b.beginPath(), b.rect(l.x1, l.y1, l.width, l.height), b.clip());
                for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var Qa = a.dataSeriesIndexes[m],
                        u = this.data[Qa],
                        z = u.dataPoints;
                    if (0 < z.length)
                        for (var y = 5 < s && u.bevelEnabled ? !0 : !1, t = 0; t < z.length; t++)
                            if (z[t].getTime ? g = z[t].x.getTime() : g = z[t].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !r(z[t].y) && z[t].y.length && "number" === typeof z[t].y[0] && "number" === typeof z[t].y[1] && "number" === typeof z[t].y[2] && "number" === typeof z[t].y[3]) {
                                h = a.axisX.convertValueToPixel(g);
                                k = a.axisY.convertValueToPixel(z[t].y[0]);
                                n = a.axisY.convertValueToPixel(z[t].y[1]);
                                p = a.axisY.convertValueToPixel(z[t].y[2]);
                                q = a.axisY.convertValueToPixel(z[t].y[3]);
                                var C = h - s / 2 << 0,
                                    v = C + s << 0,
                                    f = u.options.fallingColor ? u.fallingColor : u._colorSet[0],
                                    e = z[t].color ? z[t].color : u._colorSet[0],
                                    A = Math.round(Math.max(1, 0.15 * s)),
                                    x = 0 === A % 2 ? 0 : 0.5,
                                    F = u.dataPointIds[t];
                                this._eventManager.objectMap[F] = { id: F, objectType: "dataPoint", dataSeriesIndex: Qa, dataPointIndex: t, x1: C, y1: k, x2: v, y2: n, x3: h, y3: p, x4: h, y4: q, borderThickness: A, color: e };
                                c.strokeStyle = e;
                                c.beginPath();
                                c.lineWidth = A;
                                b.lineWidth = Math.max(A, 4);
                                "candlestick" === u.type ? (c.moveTo(h - x, n), c.lineTo(h - x, Math.min(k, q)), c.stroke(), c.moveTo(h -
                                    x, Math.max(k, q)), c.lineTo(h - x, p), c.stroke(), V(c, C, Math.min(k, q), v, Math.max(k, q), z[t].y[0] <= z[t].y[3] ? u.risingColor : f, A, e, y, y, !1, !1, u.fillOpacity), w && (e = Q(F), b.strokeStyle = e, b.moveTo(h - x, n), b.lineTo(h - x, Math.min(k, q)), b.stroke(), b.moveTo(h - x, Math.max(k, q)), b.lineTo(h - x, p), b.stroke(), V(b, C, Math.min(k, q), v, Math.max(k, q), e, 0, null, !1, !1, !1, !1))) : "ohlc" === u.type && (c.moveTo(h - x, n), c.lineTo(h - x, p), c.stroke(), c.beginPath(), c.moveTo(h, k), c.lineTo(C, k), c.stroke(), c.beginPath(), c.moveTo(h, q), c.lineTo(v, q), c.stroke(),
                                    w && (e = Q(F), b.strokeStyle = e, b.moveTo(h - x, n), b.lineTo(h - x, p), b.stroke(), b.beginPath(), b.moveTo(h, k), b.lineTo(C, k), b.stroke(), b.beginPath(), b.moveTo(h, q), b.lineTo(v, q), b.stroke()));
                                (z[t].indexLabel || u.indexLabel || z[t].indexLabelFormatter || u.indexLabelFormatter) && this._indexLabels.push({ chartType: u.type, dataPoint: z[t], dataSeries: u, point: { x: C + (v - C) / 2, y: a.axisY.reversed ? p : n }, direction: 1, bounds: { x1: C, y1: Math.min(n, p), x2: v, y2: Math.max(n, p) }, color: e })
                            }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width,
                    this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(l.x1, l.y1, l.width, l.height), b.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderBoxAndWhisker = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d,
                b = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = this.plotArea,
                    l = 0,
                    t, h, k, n, p, q, g, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    s = a.axisX.dataInfo.minDiff;
                isFinite(s) || (s = 0.3 * Math.abs(a.axisX.range));
                s = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * f.width * (a.axisX.logarithmic ? Math.log(s) / Math.log(a.axisX.range) : Math.abs(s) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && e > l && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && l < e) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                s < e && (s = e);
                s > l && (s = l);
                c.save();
                w && b.save();
                c.beginPath();
                c.rect(f.x1, f.y1, f.width, f.height);
                c.clip();
                w && (b.beginPath(),
                    b.rect(f.x1, f.y1, f.width, f.height), b.clip());
                for (var m = !1, m = !!a.axisY.reversed, v = 0; v < a.dataSeriesIndexes.length; v++) {
                    var u = a.dataSeriesIndexes[v],
                        z = this.data[u],
                        y = z.dataPoints;
                    if (0 < y.length)
                        for (var C = 5 < s && z.bevelEnabled ? !0 : !1, l = 0; l < y.length; l++)
                            if (y[l].getTime ? g = y[l].x.getTime() : g = y[l].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !r(y[l].y) && y[l].y.length && "number" === typeof y[l].y[0] && "number" === typeof y[l].y[1] && "number" === typeof y[l].y[2] && "number" === typeof y[l].y[3] && "number" ===
                                typeof y[l].y[4] && 5 === y[l].y.length) {
                                t = a.axisX.convertValueToPixel(g);
                                h = a.axisY.convertValueToPixel(y[l].y[0]);
                                k = a.axisY.convertValueToPixel(y[l].y[1]);
                                n = a.axisY.convertValueToPixel(y[l].y[2]);
                                p = a.axisY.convertValueToPixel(y[l].y[3]);
                                q = a.axisY.convertValueToPixel(y[l].y[4]);
                                var D = t - s / 2 << 0,
                                    A = t + s / 2 << 0,
                                    e = y[l].color ? y[l].color : z._colorSet[0],
                                    x = Math.round(Math.max(1, 0.15 * s)),
                                    F = 0 === x % 2 ? 0 : 0.5,
                                    R = y[l].whiskerColor ? y[l].whiskerColor : y[l].color ? z.whiskerColor ? z.whiskerColor : y[l].color : z.whiskerColor ? z.whiskerColor :
                                    e,
                                    aa = "number" === typeof y[l].whiskerThickness ? y[l].whiskerThickness : "number" === typeof z.options.whiskerThickness ? z.whiskerThickness : x,
                                    E = y[l].whiskerDashType ? y[l].whiskerDashType : z.whiskerDashType,
                                    Y = r(y[l].whiskerLength) ? r(z.options.whiskerLength) ? s : z.whiskerLength : y[l].whiskerLength,
                                    Y = "number" === typeof Y ? 0 >= Y ? 0 : Y >= s ? s : Y : "string" === typeof Y ? parseInt(Y) * s / 100 > s ? s : parseInt(Y) * s / 100 : s,
                                    fa = 1 === Math.round(aa) % 2 ? 0.5 : 0,
                                    la = y[l].stemColor ? y[l].stemColor : y[l].color ? z.stemColor ? z.stemColor : y[l].color : z.stemColor ?
                                    z.stemColor : e,
                                    Ba = "number" === typeof y[l].stemThickness ? y[l].stemThickness : "number" === typeof z.options.stemThickness ? z.stemThickness : x,
                                    G = 1 === Math.round(Ba) % 2 ? 0.5 : 0,
                                    J = y[l].stemDashType ? y[l].stemDashType : z.stemDashType,
                                    H = y[l].lineColor ? y[l].lineColor : y[l].color ? z.lineColor ? z.lineColor : y[l].color : z.lineColor ? z.lineColor : e,
                                    M = "number" === typeof y[l].lineThickness ? y[l].lineThickness : "number" === typeof z.options.lineThickness ? z.lineThickness : x,
                                    S = y[l].lineDashType ? y[l].lineDashType : z.lineDashType,
                                    L = 1 === Math.round(M) %
                                    2 ? 0.5 : 0,
                                    T = z.upperBoxColor,
                                    wa = z.lowerBoxColor,
                                    ra = r(z.options.fillOpacity) ? 1 : z.fillOpacity,
                                    O = z.dataPointIds[l];
                                this._eventManager.objectMap[O] = { id: O, objectType: "dataPoint", dataSeriesIndex: u, dataPointIndex: l, x1: D, y1: h, x2: A, y2: k, x3: t, y3: n, x4: t, y4: p, y5: q, borderThickness: x, color: e, stemThickness: Ba, stemColor: la, whiskerThickness: aa, whiskerLength: Y, whiskerColor: R, lineThickness: M, lineColor: H };
                                c.save();
                                0 < Ba && (c.beginPath(), c.strokeStyle = la, c.lineWidth = Ba, c.setLineDash && c.setLineDash(N(J, Ba)), c.moveTo(t - G, k),
                                    c.lineTo(t - G, h), c.stroke(), c.moveTo(t - G, p), c.lineTo(t - G, n), c.stroke());
                                c.restore();
                                b.lineWidth = Math.max(x, 4);
                                c.beginPath();
                                V(c, D, Math.min(q, k), A, Math.max(k, q), wa, 0, e, m ? C : !1, m ? !1 : C, !1, !1, ra);
                                c.beginPath();
                                V(c, D, Math.min(n, q), A, Math.max(q, n), T, 0, e, m ? !1 : C, m ? C : !1, !1, !1, ra);
                                c.beginPath();
                                c.lineWidth = x;
                                c.strokeStyle = e;
                                c.rect(D - F, Math.min(k, n) - F, A - D + 2 * F, Math.max(k, n) - Math.min(k, n) + 2 * F);
                                c.stroke();
                                c.save();
                                0 < M && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(N(S, M)), c.strokeStyle = H, c.lineWidth =
                                    M, c.moveTo(D, q - L), c.lineTo(A, q - L), c.stroke());
                                c.restore();
                                c.save();
                                0 < aa && (c.beginPath(), c.setLineDash && c.setLineDash(N(E, aa)), c.strokeStyle = R, c.lineWidth = aa, c.moveTo(t - Y / 2 << 0, p - fa), c.lineTo(t + Y / 2 << 0, p - fa), c.stroke(), c.moveTo(t - Y / 2 << 0, h + fa), c.lineTo(t + Y / 2 << 0, h + fa), c.stroke());
                                c.restore();
                                w && (e = Q(O), b.strokeStyle = e, b.lineWidth = Ba, 0 < Ba && (b.moveTo(t - F - G, k), b.lineTo(t - F - G, Math.max(h, p)), b.stroke(), b.moveTo(t - F - G, Math.min(h, p)), b.lineTo(t - F - G, n), b.stroke()), V(b, D, Math.max(k, n), A, Math.min(k, n), e, 0, null, !1, !1, !1, !1), 0 < aa && (b.beginPath(), b.lineWidth = aa, b.moveTo(t + Y / 2, p - fa), b.lineTo(t - Y / 2, p - fa), b.stroke(), b.moveTo(t + Y / 2, h + fa), b.lineTo(t - Y / 2, h + fa), b.stroke()));
                                (y[l].indexLabel || z.indexLabel || y[l].indexLabelFormatter || z.indexLabelFormatter) && this._indexLabels.push({ chartType: z.type, dataPoint: y[l], dataSeries: z, point: { x: D + (A - D) / 2, y: a.axisY.reversed ? h : p }, direction: 1, bounds: { x1: D, y1: Math.min(h, p), x2: A, y2: Math.max(h, p) }, color: e })
                            }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation =
                    "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(f.x1, f.y1, f.width, f.height), b.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderRangeColumn =
            function(a) {
                var d = a.targetCanvasCtx || this.plotArea.ctx,
                    c = w ? this._preRenderCtx : d;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var b = null,
                        e = this.plotArea,
                        f = 0,
                        l, t, h, f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                    l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
                    var k = a.axisX.dataInfo.minDiff;
                    isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                    k = this.options.dataPointWidth ? this.dataPointWidth :
                        0.9 * (e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                    this.dataPointMaxWidth && f > l && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && l < f) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                    k < f && (k = f);
                    k > l && (k = l);
                    c.save();
                    w && this._eventManager.ghostCtx.save();
                    c.beginPath();
                    c.rect(e.x1, e.y1, e.width, e.height);
                    c.clip();
                    w && (this._eventManager.ghostCtx.beginPath(),
                        this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                    for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                        var p = a.dataSeriesIndexes[n],
                            q = this.data[p],
                            g = q.dataPoints;
                        if (0 < g.length)
                            for (var s = 5 < k && q.bevelEnabled ? !0 : !1, f = 0; f < g.length; f++)
                                if (g[f].getTime ? h = g[f].x.getTime() : h = g[f].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && !r(g[f].y) && g[f].y.length && "number" === typeof g[f].y[0] && "number" === typeof g[f].y[1]) {
                                    b = a.axisX.convertValueToPixel(h);
                                    l =
                                        a.axisY.convertValueToPixel(g[f].y[0]);
                                    t = a.axisY.convertValueToPixel(g[f].y[1]);
                                    var m = a.axisX.reversed ? b + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + n) * k << 0 : b - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + n) * k << 0,
                                        v = a.axisX.reversed ? m - k << 0 : m + k << 0,
                                        b = g[f].color ? g[f].color : q._colorSet[f % q._colorSet.length];
                                    if (l > t) { var u = l;
                                        l = t;
                                        t = u }
                                    u = q.dataPointIds[f];
                                    this._eventManager.objectMap[u] = { id: u, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: f, x1: m, y1: l, x2: v, y2: t };
                                    V(c, a.axisX.reversed ?
                                        v : m, l, a.axisX.reversed ? m : v, t, b, 0, b, s, s, !1, !1, q.fillOpacity);
                                    b = Q(u);
                                    w && V(this._eventManager.ghostCtx, a.axisX.reversed ? v : m, l, a.axisX.reversed ? m : v, t, b, 0, null, !1, !1, !1, !1);
                                    if (g[f].indexLabel || q.indexLabel || g[f].indexLabelFormatter || q.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeColumn", dataPoint: g[f], dataSeries: q, indexKeyword: 0, point: { x: m + (v - m) / 2, y: g[f].y[1] >= g[f].y[0] ? t : l }, direction: g[f].y[1] >= g[f].y[0] ? -1 : 1, bounds: { x1: m, y1: Math.min(l, t), x2: v, y2: Math.max(l, t) }, color: b }), this._indexLabels.push({
                                        chartType: "rangeColumn",
                                        dataPoint: g[f],
                                        dataSeries: q,
                                        indexKeyword: 1,
                                        point: { x: m + (v - m) / 2, y: g[f].y[1] >= g[f].y[0] ? l : t },
                                        direction: g[f].y[1] >= g[f].y[0] ? 1 : -1,
                                        bounds: { x1: m, y1: Math.min(l, t), x2: v, y2: Math.max(l, t) },
                                        color: b
                                    })
                                }
                    }
                    w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                        0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                    c.restore();
                    return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 }
                }
            };
        m.prototype.renderError = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d,
                b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0 : !1;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = !1,
                    l = this.plotArea,
                    t = 0,
                    h, k, n, p, q, g, s, m = a.axisX.dataInfo.minDiff;
                isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(l.x1, l.y1, l.width, l.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.clip());
                for (var v = 0, u = 0; u < this.data.length; u++) !this.data[u].type.match(/(bar|column)/ig) || !this.data[u].visible || this.data[u].type.match(/(stacked)/ig) && v || v++;
                for (var z = 0; z <
                    a.dataSeriesIndexes.length; z++) {
                    var y = a.dataSeriesIndexes[z],
                        C = this.data[y],
                        D = C.dataPoints,
                        A = r(C._linkedSeries) ? !1 : C._linkedSeries.type.match(/(bar|column)/ig) && C._linkedSeries.visible ? !0 : !1,
                        F = 0;
                    if (A)
                        for (e = C._linkedSeries.id, u = 0; u < e; u++) !this.data[u].type.match(/(bar|column)/ig) || !this.data[u].visible || this.data[u].type.match(/(stacked)/ig) && F || (this.data[u].type.match(/(range)/ig) && (f = !0), F++);
                    e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth :
                        1;
                    t = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (A ? v : 1))) << 0 : 0.3 * this.width;
                    f && (t = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (A ? v : 1))) << 0 : 0.03 * this.width);
                    u = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? l.height : l.width) * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) :
                        Math.abs(m) / Math.abs(a.axisX.range)) / (A ? v : 1)) << 0;
                    this.dataPointMaxWidth && e > t && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, t));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && t < e) && (t = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                    u < e && (u = e);
                    u > t && (u = t);
                    if (0 < D.length)
                        for (var E = C._colorSet, t = 0; t < D.length; t++) {
                            var e = C.lineColor = C.options.color ? C.options.color : E[0],
                                R = {
                                    color: D[t].whiskerColor ? D[t].whiskerColor : D[t].color ? C.whiskerColor ? C.whiskerColor : D[t].color : C.whiskerColor ? C.whiskerColor : e,
                                    thickness: r(D[t].whiskerThickness) ? C.whiskerThickness : D[t].whiskerThickness,
                                    dashType: D[t].whiskerDashType ? D[t].whiskerDashType : C.whiskerDashType,
                                    length: r(D[t].whiskerLength) ? r(C.options.whiskerLength) ? u : C.options.whiskerLength : D[t].whiskerLength,
                                    trimLength: r(D[t].whiskerLength) ? r(C.options.whiskerLength) ? 50 : 0 : 0
                                };
                            R.length = "number" === typeof R.length ? 0 >= R.length ? 0 : R.length >= u ? u : R.length : "string" === typeof R.length ? parseInt(R.length) * u / 100 > u ? u : parseInt(R.length) * u / 100 > u :
                                u;
                            R.thickness = "number" === typeof R.thickness ? 0 > R.thickness ? 0 : Math.round(R.thickness) : 2;
                            var aa = { color: D[t].stemColor ? D[t].stemColor : D[t].color ? C.stemColor ? C.stemColor : D[t].color : C.stemColor ? C.stemColor : e, thickness: D[t].stemThickness ? D[t].stemThickness : C.stemThickness, dashType: D[t].stemDashType ? D[t].stemDashType : C.stemDashType };
                            aa.thickness = "number" === typeof aa.thickness ? 0 > aa.thickness ? 0 : Math.round(aa.thickness) : 2;
                            D[t].getTime ? s = D[t].x.getTime() : s = D[t].x;
                            if (!(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax) &&
                                !r(D[t].y) && D[t].y.length && "number" === typeof D[t].y[0] && "number" === typeof D[t].y[1]) {
                                var ja = a.axisX.convertValueToPixel(s);
                                b ? k = ja : h = ja;
                                ja = a.axisY.convertValueToPixel(D[t].y[0]);
                                b ? n = ja : q = ja;
                                ja = a.axisY.convertValueToPixel(D[t].y[1]);
                                b ? p = ja : g = ja;
                                b ? (q = a.axisX.reversed ? k + (A ? v : 1) * u / 2 - (A ? F - 1 : 0) * u << 0 : k - (A ? v : 1) * u / 2 + (A ? F - 1 : 0) * u << 0, g = a.axisX.reversed ? q - u << 0 : q + u << 0) : (n = a.axisX.reversed ? h + (A ? v : 1) * u / 2 - (A ? F - 1 : 0) * u << 0 : h - (A ? v : 1) * u / 2 + (A ? F - 1 : 0) * u << 0, p = a.axisX.reversed ? n - u << 0 : n + u << 0);
                                !b && q > g && (ja = q, q = g, g = ja);
                                b && n > p &&
                                    (ja = n, n = p, p = ja);
                                ja = C.dataPointIds[t];
                                this._eventManager.objectMap[ja] = { id: ja, objectType: "dataPoint", dataSeriesIndex: y, dataPointIndex: t, x1: Math.min(n, p), y1: Math.min(q, g), x2: Math.max(p, n), y2: Math.max(g, q), isXYSwapped: b, stemProperties: aa, whiskerProperties: R };
                                x(c, Math.min(n, p), Math.min(q, g), Math.max(p, n), Math.max(g, q), e, R, aa, b);
                                w && x(this._eventManager.ghostCtx, n, q, p, g, e, R, aa, b);
                                if (D[t].indexLabel || C.indexLabel || D[t].indexLabelFormatter || C.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: D[t],
                                    dataSeries: C,
                                    indexKeyword: 0,
                                    point: { x: b ? D[t].y[1] >= D[t].y[0] ? n : p : n + (p - n) / 2, y: b ? q + (g - q) / 2 : D[t].y[1] >= D[t].y[0] ? g : q },
                                    direction: D[t].y[1] >= D[t].y[0] ? -1 : 1,
                                    bounds: { x1: b ? Math.min(n, p) : n, y1: b ? q : Math.min(q, g), x2: b ? Math.max(n, p) : p, y2: b ? g : Math.max(q, g) },
                                    color: e,
                                    axisSwapped: b
                                }), this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: D[t],
                                    dataSeries: C,
                                    indexKeyword: 1,
                                    point: { x: b ? D[t].y[1] >= D[t].y[0] ? p : n : n + (p - n) / 2, y: b ? q + (g - q) / 2 : D[t].y[1] >= D[t].y[0] ? q : g },
                                    direction: D[t].y[1] >= D[t].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: b ?
                                            Math.min(n, p) : n,
                                        y1: b ? q : Math.min(q, g),
                                        x2: b ? Math.max(n, p) : p,
                                        y2: b ? g : Math.max(q, g)
                                    },
                                    color: e,
                                    axisSwapped: b
                                })
                            }
                        }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(l.x1, l.y1, l.width,
                    l.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderRangeBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = 0,
                    l, t, h, k, f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                l = this.options.dataPointMaxWidth ?
                    this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
                var n = a.axisX.dataInfo.minDiff;
                isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
                n = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && f > l && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth :
                    Infinity, l));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && l < f) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                n < f && (n = f);
                n > l && (n = l);
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var q = a.dataSeriesIndexes[p],
                        g = this.data[q],
                        s = g.dataPoints;
                    if (0 < s.length) {
                        var m = 5 < n && g.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (f = 0; f < s.length; f++)
                            if (s[f].getTime ? k = s[f].x.getTime() : k = s[f].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !r(s[f].y) && s[f].y.length && "number" === typeof s[f].y[0] && "number" === typeof s[f].y[1]) {
                                l = a.axisY.convertValueToPixel(s[f].y[0]);
                                t = a.axisY.convertValueToPixel(s[f].y[1]);
                                h = a.axisX.convertValueToPixel(k);
                                h = a.axisX.reversed ? h + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + p) *
                                    n << 0 : h - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + p) * n << 0;
                                var v = a.axisX.reversed ? h - n << 0 : h + n << 0;
                                l > t && (b = l, l = t, t = b);
                                b = s[f].color ? s[f].color : g._colorSet[f % g._colorSet.length];
                                V(c, l, a.axisX.reversed ? v : h, t, a.axisX.reversed ? h : v, b, 0, null, m, !1, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[f];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: f, x1: l, y1: h, x2: t, y2: v };
                                b = Q(b);
                                w && V(this._eventManager.ghostCtx, l, a.axisX.reversed ? v : h, t, a.axisX.reversed ? h : v, b, 0, null, !1, !1, !1, !1);
                                if (s[f].indexLabel || g.indexLabel || s[f].indexLabelFormatter || g.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeBar", dataPoint: s[f], dataSeries: g, indexKeyword: 0, point: { x: s[f].y[1] >= s[f].y[0] ? l : t, y: h + (v - h) / 2 }, direction: s[f].y[1] >= s[f].y[0] ? -1 : 1, bounds: { x1: Math.min(l, t), y1: h, x2: Math.max(l, t), y2: v }, color: b }), this._indexLabels.push({
                                    chartType: "rangeBar",
                                    dataPoint: s[f],
                                    dataSeries: g,
                                    indexKeyword: 1,
                                    point: { x: s[f].y[1] >= s[f].y[0] ? t : l, y: h + (v - h) / 2 },
                                    direction: s[f].y[1] >= s[f].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(l,
                                            t),
                                        y1: h,
                                        x2: Math.max(l, t),
                                        y2: v
                                    },
                                    color: b
                                })
                            }
                    }
                }
                w && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: K.fadeInAnimation, easingFunction: K.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderRangeArea = function(a) {
            function d() {
                if (z) {
                    for (var a = null, c = h.length - 1; 0 <= c; c--) a = h[c], b.lineTo(a.x, a.y2), e.lineTo(a.x, a.y2);
                    b.closePath();
                    b.globalAlpha = n.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    e.fill();
                    if (0 < n.lineThickness) {
                        b.beginPath();
                        b.moveTo(a.x, a.y2);
                        for (c = 0; c < h.length; c++) a = h[c], b.lineTo(a.x, a.y2);
                        b.moveTo(h[0].x, h[0].y1);
                        for (c = 0; c < h.length; c++) a = h[c],
                            b.lineTo(a.x, a.y1);
                        b.stroke()
                    }
                    b.beginPath();
                    b.moveTo(s, m);
                    e.beginPath();
                    e.moveTo(s, m);
                    z = { x: s, y: m };
                    h = [];
                    h.push({ x: s, y1: m, y2: r })
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = w ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = [],
                    l = this.plotArea;
                b.save();
                w && e.save();
                b.beginPath();
                b.rect(l.x1, l.y1, l.width, l.height);
                b.clip();
                w && (e.beginPath(), e.rect(l.x1, l.y1, l.width, l.height), e.clip());
                for (var t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var h = [],
                        k = a.dataSeriesIndexes[t],
                        n = this.data[k],
                        p = n.dataPoints,
                        f = n.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: k };
                    f = Q(f);
                    e.fillStyle = f;
                    var f = [],
                        q = !0,
                        g = 0,
                        s, m, r, u, z = null;
                    if (0 < p.length) {
                        var y = n._colorSet[g % n._colorSet.length],
                            v = n.lineColor = n.options.lineColor || y,
                            D = v;
                        b.fillStyle = y;
                        b.strokeStyle = v;
                        b.lineWidth = n.lineThickness;
                        var A = "solid";
                        if (b.setLineDash) { var x = N(n.nullDataLineDashType, n.lineThickness),
                                A = n.lineDashType,
                                F = N(A, n.lineThickness);
                            b.setLineDash(F) }
                        for (var R = !0; g < p.length; g++)
                            if (u = p[g].x.getTime ?
                                p[g].x.getTime() : p[g].x, !(u < a.axisX.dataInfo.viewPortMin || u > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !R)))
                                if (null !== p[g].y && p[g].y.length && "number" === typeof p[g].y[0] && "number" === typeof p[g].y[1]) {
                                    s = a.axisX.convertValueToPixel(u);
                                    m = a.axisY.convertValueToPixel(p[g].y[0]);
                                    r = a.axisY.convertValueToPixel(p[g].y[1]);
                                    q || R ? (n.connectNullData && !q ? (b.setLineDash && (n.options.nullDataLineDashType || A === n.lineDashType && n.lineDashType !== n.nullDataLineDashType) && (h[h.length - 1].newLineDashArray = F, A = n.nullDataLineDashType,
                                        b.setLineDash(x)), b.lineTo(s, m), w && e.lineTo(s, m), h.push({ x: s, y1: m, y2: r })) : (b.beginPath(), b.moveTo(s, m), z = { x: s, y: m }, h = [], h.push({ x: s, y1: m, y2: r }), w && (e.beginPath(), e.moveTo(s, m))), R = q = !1) : (b.lineTo(s, m), h.push({ x: s, y1: m, y2: r }), w && e.lineTo(s, m), 0 == g % 250 && d());
                                    u = n.dataPointIds[g];
                                    this._eventManager.objectMap[u] = { id: u, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: g, x1: s, y1: m, y2: r };
                                    g < p.length - 1 && (D !== (p[g].lineColor || v) || A !== (p[g].lineDashType || n.lineDashType)) && (d(), D = p[g].lineColor || v, h[h.length -
                                        1].newStrokeStyle = D, b.strokeStyle = D, b.setLineDash && (p[g].lineDashType ? (A = p[g].lineDashType, h[h.length - 1].newLineDashArray = N(A, n.lineThickness), b.setLineDash(h[h.length - 1].newLineDashArray)) : (A = n.lineDashType, h[h.length - 1].newLineDashArray = F, b.setLineDash(F))));
                                    if (0 !== p[g].markerSize && (0 < p[g].markerSize || 0 < n.markerSize)) {
                                        var aa = n.getMarkerProperties(g, s, r, b);
                                        f.push(aa);
                                        var E = Q(u);
                                        w && f.push({ x: s, y: r, ctx: e, type: aa.type, size: aa.size, color: E, borderColor: E, borderThickness: aa.borderThickness });
                                        aa = n.getMarkerProperties(g,
                                            s, m, b);
                                        f.push(aa);
                                        E = Q(u);
                                        w && f.push({ x: s, y: m, ctx: e, type: aa.type, size: aa.size, color: E, borderColor: E, borderThickness: aa.borderThickness })
                                    }
                                    if (p[g].indexLabel || n.indexLabel || p[g].indexLabelFormatter || n.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeArea", dataPoint: p[g], dataSeries: n, indexKeyword: 0, point: { x: s, y: m }, direction: p[g].y[0] > p[g].y[1] === a.axisY.reversed ? -1 : 1, color: y }), this._indexLabels.push({
                                        chartType: "rangeArea",
                                        dataPoint: p[g],
                                        dataSeries: n,
                                        indexKeyword: 1,
                                        point: { x: s, y: r },
                                        direction: p[g].y[0] >
                                            p[g].y[1] === a.axisY.reversed ? 1 : -1,
                                        color: y
                                    })
                                } else R || q || d(), R = !0;
                        d();
                        $.drawMarkers(f)
                    }
                }
                w && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderRangeSplineArea = function(a) {
            function d(a, c) {
                var d = v(r, 2);
                if (0 < d.length) {
                    if (0 < k.lineThickness) {
                        b.strokeStyle = c;
                        b.setLineDash && b.setLineDash(a);
                        b.beginPath();
                        b.moveTo(d[0].x, d[0].y);
                        for (var f = 0; f < d.length - 3; f += 3) {
                            if (d[f].newStrokeStyle || d[f].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(d[f].x, d[f].y), d[f].newStrokeStyle && (b.strokeStyle = d[f].newStrokeStyle),
                                d[f].newLineDashArray && b.setLineDash(d[f].newLineDashArray);
                            b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                    }
                    b.beginPath();
                    b.moveTo(d[0].x, d[0].y);
                    w && (e.beginPath(), e.moveTo(d[0].x, d[0].y));
                    for (f = 0; f < d.length - 3; f += 3) b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y), w && e.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                    d = v(x, 2);
                    b.lineTo(x[x.length - 1].x, x[x.length - 1].y);
                    for (f = d.length - 1; 2 < f; f -= 3) b.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x,
                        d[f - 2].y, d[f - 3].x, d[f - 3].y), w && e.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y);
                    b.closePath();
                    b.globalAlpha = k.fillOpacity;
                    b.fill();
                    w && (e.closePath(), e.fill());
                    b.globalAlpha = 1;
                    if (0 < k.lineThickness) {
                        b.strokeStyle = c;
                        b.setLineDash && b.setLineDash(a);
                        b.beginPath();
                        b.moveTo(d[0].x, d[0].y);
                        for (var g = f = 0; f < d.length - 3; f += 3, g++) {
                            if (r[g].newStrokeStyle || r[g].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(d[f].x, d[f].y), r[g].newStrokeStyle && (b.strokeStyle = r[g].newStrokeStyle), r[g].newLineDashArray &&
                                b.setLineDash(r[g].newLineDashArray);
                            b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                        d = v(r, 2);
                        b.moveTo(d[0].x, d[0].y);
                        for (g = f = 0; f < d.length - 3; f += 3, g++) { if (r[g].newStrokeStyle || r[g].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(d[f].x, d[f].y), r[g].newStrokeStyle && (b.strokeStyle = r[g].newStrokeStyle), r[g].newLineDashArray && b.setLineDash(r[g].newLineDashArray);
                            b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y) }
                        b.stroke()
                    }
                    b.beginPath()
                }
            }
            var c = a.targetCanvasCtx ||
                this.plotArea.ctx,
                b = w ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = [],
                    l = this.plotArea;
                b.save();
                w && e.save();
                b.beginPath();
                b.rect(l.x1, l.y1, l.width, l.height);
                b.clip();
                w && (e.beginPath(), e.rect(l.x1, l.y1, l.width, l.height), e.clip());
                for (var t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var h = a.dataSeriesIndexes[t],
                        k = this.data[h],
                        n = k.dataPoints,
                        f = k.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: h };
                    f = Q(f);
                    e.fillStyle = f;
                    var f = [],
                        p = 0,
                        q,
                        g, m, r = [],
                        x = [];
                    if (0 < n.length) {
                        var u = k._colorSet[p % k._colorSet.length],
                            z = k.lineColor = k.options.lineColor || u,
                            y = z;
                        b.fillStyle = u;
                        b.lineWidth = k.lineThickness;
                        var C = "solid",
                            D;
                        if (b.setLineDash) { var A = N(k.nullDataLineDashType, k.lineThickness),
                                C = k.lineDashType;
                            D = N(C, k.lineThickness) }
                        for (g = !1; p < n.length; p++)
                            if (q = n[p].x.getTime ? n[p].x.getTime() : n[p].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !g)))
                                if (null !== n[p].y && n[p].y.length && "number" === typeof n[p].y[0] && "number" ===
                                    typeof n[p].y[1]) {
                                    q = a.axisX.convertValueToPixel(q);
                                    g = a.axisY.convertValueToPixel(n[p].y[0]);
                                    m = a.axisY.convertValueToPixel(n[p].y[1]);
                                    var F = k.dataPointIds[p];
                                    this._eventManager.objectMap[F] = { id: F, objectType: "dataPoint", dataSeriesIndex: h, dataPointIndex: p, x1: q, y1: g, y2: m };
                                    r[r.length] = { x: q, y: g };
                                    x[x.length] = { x: q, y: m };
                                    p < n.length - 1 && (y !== (n[p].lineColor || z) || C !== (n[p].lineDashType || k.lineDashType)) && (y = n[p].lineColor || z, r[r.length - 1].newStrokeStyle = y, b.setLineDash && (n[p].lineDashType ? (C = n[p].lineDashType,
                                        r[r.length - 1].newLineDashArray = N(C, k.lineThickness)) : (C = k.lineDashType, r[r.length - 1].newLineDashArray = D)));
                                    if (0 !== n[p].markerSize && (0 < n[p].markerSize || 0 < k.markerSize)) { var E = k.getMarkerProperties(p, q, g, b);
                                        f.push(E); var R = Q(F);
                                        w && f.push({ x: q, y: g, ctx: e, type: E.type, size: E.size, color: R, borderColor: R, borderThickness: E.borderThickness });
                                        E = k.getMarkerProperties(p, q, m, b);
                                        f.push(E);
                                        R = Q(F);
                                        w && f.push({ x: q, y: m, ctx: e, type: E.type, size: E.size, color: R, borderColor: R, borderThickness: E.borderThickness }) }
                                    if (n[p].indexLabel ||
                                        k.indexLabel || n[p].indexLabelFormatter || k.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: n[p], dataSeries: k, indexKeyword: 0, point: { x: q, y: g }, direction: n[p].y[0] <= n[p].y[1] ? -1 : 1, color: u }), this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: n[p], dataSeries: k, indexKeyword: 1, point: { x: q, y: m }, direction: n[p].y[0] <= n[p].y[1] ? 1 : -1, color: u });
                                    g = !1
                                } else 0 < p && !g && (k.connectNullData ? b.setLineDash && (0 < r.length && (k.options.nullDataLineDashType || !n[p - 1].lineDashType)) && (r[r.length -
                                    1].newLineDashArray = A, C = k.nullDataLineDashType) : (d(D, z), r = [], x = [])), g = !0;
                        d(D, z);
                        $.drawMarkers(f)
                    }
                }
                w && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l.x1, l.y1, l.width, l.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: K.xClipAnimation, easingFunction: K.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderWaterfall = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = w ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx,
                    e = null,
                    f = this.plotArea,
                    l = 0,
                    h, m, k, n, p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    l = this.options.dataPointMinWidth ? this.dataPointMinWidth :
                    this.options.dataPointWidth ? this.dataPointWidth : 1;
                m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
                var q = a.axisX.dataInfo.minDiff;
                isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
                q = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (f.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth &&
                    l > m && (l = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && m < l) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, l));
                q < l && (q = l);
                q > m && (q = m);
                c.save();
                w && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(f.x1, f.y1, f.width, f.height);
                c.clip();
                w && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(f.x1, f.y1, f.width, f.height), this._eventManager.ghostCtx.clip());
                for (var g = 0; g < a.dataSeriesIndexes.length; g++) {
                    var s =
                        a.dataSeriesIndexes[g],
                        r = this.data[s],
                        v = r.dataPoints,
                        e = r._colorSet[0];
                    r.risingColor = r.options.risingColor ? r.options.risingColor : e;
                    r.fallingColor = r.options.fallingColor ? r.options.fallingColor : "#e40a0a";
                    var u = "number" === typeof r.options.lineThickness ? Math.round(r.lineThickness) : 1,
                        z = 1 === Math.round(u) % 2 ? -0.5 : 0;
                    if (0 < v.length)
                        for (var y = 5 < q && r.bevelEnabled ? !0 : !1, C = !1, D = null, A = null, l = 0; l < v.length; l++)
                            if (v[l].getTime ? n = v[l].x.getTime() : n = v[l].x, "number" !== typeof v[l].y) {
                                if (0 < l && !C && r.connectNullData) var x =
                                    r.options.nullDataLineDashType || !v[l - 1].lineDashType ? r.nullDataLineDashType : v[l - 1].lineDashType;
                                C = !0
                            } else {
                                h = a.axisX.convertValueToPixel(n);
                                m = 0 === r.dataPointEOs[l].cumulativeSum ? p : a.axisY.convertValueToPixel(r.dataPointEOs[l].cumulativeSum);
                                k = 0 === r.dataPointEOs[l].cumulativeSumYStartValue ? p : a.axisY.convertValueToPixel(r.dataPointEOs[l].cumulativeSumYStartValue);
                                h = a.axisX.reversed ? h + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + g) * q << 0 : h - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount +
                                    g) * q << 0;
                                var F = a.axisX.reversed ? h - q << 0 : h + q << 0;
                                m > k && (e = m, m = k, k = e);
                                a.axisY.reversed && (e = m, m = k, k = e);
                                e = r.dataPointIds[l];
                                this._eventManager.objectMap[e] = { id: e, objectType: "dataPoint", dataSeriesIndex: s, dataPointIndex: l, x1: h, y1: m, x2: F, y2: k };
                                var R = v[l].color ? v[l].color : 0 < v[l].y ? r.risingColor : r.fallingColor;
                                V(c, a.axisX.reversed ? F : h, a.axisY.reversed ? k : m, a.axisX.reversed ? h : F, a.axisY.reversed ? m : k, R, 0, R, y, y, !1, !1, r.fillOpacity);
                                e = Q(e);
                                w && V(this._eventManager.ghostCtx, a.axisX.reversed ? F : h, m, a.axisX.reversed ? h : F,
                                    k, e, 0, null, !1, !1, !1, !1);
                                var aa, R = h;
                                aa = "undefined" !== typeof v[l].isIntermediateSum && !0 === v[l].isIntermediateSum || "undefined" !== typeof v[l].isCumulativeSum && !0 === v[l].isCumulativeSum ? 0 < v[l].y ? m : k : 0 < v[l].y ? k : m;
                                0 < l && D && (!C || r.connectNullData) && (C && c.setLineDash && c.setLineDash(N(x, u)), c.beginPath(), c.moveTo(D, A - z), c.lineTo(R, aa - z), 0 < u && c.stroke(), w && (b.beginPath(), b.moveTo(D, A - z), b.lineTo(R, aa - z), 0 < u && b.stroke()));
                                C = !1;
                                D = F;
                                A = 0 < v[l].y ? m : k;
                                R = v[l].lineDashType ? v[l].lineDashType : r.options.lineDashType ? r.options.lineDashType :
                                    "shortDash";
                                c.strokeStyle = v[l].lineColor ? v[l].lineColor : r.options.lineColor ? r.options.lineColor : "#9e9e9e";
                                c.lineWidth = u;
                                c.setLineDash && (R = N(R, u), c.setLineDash(R));
                                (v[l].indexLabel || r.indexLabel || v[l].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({ chartType: "waterfall", dataPoint: v[l], dataSeries: r, point: { x: h + (F - h) / 2, y: 0 <= v[l].y ? m : k }, direction: 0 > v[l].y === a.axisY.reversed ? 1 : -1, bounds: { x1: h, y1: Math.min(m, k), x2: F, y2: Math.max(m, k) }, color: e })
                            }
                }
                w && (d.drawImage(this._preRenderCanvas, 0,
                    0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(f.x1, f.y1, f.width, f.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: K.fadeInAnimation,
                    easingFunction: K.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        var W = function(a, d, c, b, e, f, l, h, m) {
            if (!(0 > c)) {
                "undefined" === typeof h && (h = 1);
                if (!w) { var k = Number((l % (2 * Math.PI)).toFixed(8));
                    Number((f % (2 * Math.PI)).toFixed(8)) === k && (l -= 1E-4) }
                a.save();
                a.globalAlpha = h;
                "pie" === e ? (a.beginPath(), a.moveTo(d.x, d.y), a.arc(d.x, d.y, c, f, l, !1), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(d.x, d.y, c, f, l, !1), 0 <= m && a.arc(d.x, d.y, m * c, l, f, !0), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth =
                    2, a.fill());
                a.globalAlpha = 1;
                a.restore()
            }
        };
        m.prototype.renderPie = function(a) {
            function d() {
                if (k && n) {
                    for (var a = 0, b = 0, c = 0, d = 0, e = 0; e < n.length; e++) {
                        var f = n[e],
                            l = k.dataPointIds[e];
                        g[e].id = l;
                        g[e].objectType = "dataPoint";
                        g[e].dataPointIndex = e;
                        g[e].dataSeriesIndex = 0;
                        var h = g[e],
                            p = { percent: null, total: null },
                            t = null,
                            p = m.getPercentAndTotal(k, f);
                        if (k.indexLabelFormatter || f.indexLabelFormatter) t = { chart: m.options, dataSeries: k, dataPoint: f, total: p.total, percent: p.percent };
                        p = f.indexLabelFormatter ? f.indexLabelFormatter(t) :
                            f.indexLabel ? m.replaceKeywordsWithValue(f.indexLabel, f, k, e) : k.indexLabelFormatter ? k.indexLabelFormatter(t) : k.indexLabel ? m.replaceKeywordsWithValue(k.indexLabel, f, k, e) : f.label ? f.label : "";
                        m._eventManager.objectMap[l] = h;
                        h.center = { x: y.x, y: y.y };
                        h.y = f.y;
                        h.radius = A;
                        h.percentInnerRadius = F;
                        h.indexLabelText = p;
                        h.indexLabelPlacement = k.indexLabelPlacement;
                        h.indexLabelLineColor = f.indexLabelLineColor ? f.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : f.color ? f.color : k._colorSet[e %
                            k._colorSet.length];
                        h.indexLabelLineThickness = r(f.indexLabelLineThickness) ? k.indexLabelLineThickness : f.indexLabelLineThickness;
                        h.indexLabelLineDashType = f.indexLabelLineDashType ? f.indexLabelLineDashType : k.indexLabelLineDashType;
                        h.indexLabelFontColor = f.indexLabelFontColor ? f.indexLabelFontColor : k.indexLabelFontColor;
                        h.indexLabelFontStyle = f.indexLabelFontStyle ? f.indexLabelFontStyle : k.indexLabelFontStyle;
                        h.indexLabelFontWeight = f.indexLabelFontWeight ? f.indexLabelFontWeight : k.indexLabelFontWeight;
                        h.indexLabelFontSize =
                            r(f.indexLabelFontSize) ? k.indexLabelFontSize : f.indexLabelFontSize;
                        h.indexLabelFontFamily = f.indexLabelFontFamily ? f.indexLabelFontFamily : k.indexLabelFontFamily;
                        h.indexLabelBackgroundColor = f.indexLabelBackgroundColor ? f.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                        h.indexLabelMaxWidth = f.indexLabelMaxWidth ? f.indexLabelMaxWidth : k.indexLabelMaxWidth ? k.indexLabelMaxWidth : 0.33 * q.width;
                        h.indexLabelWrap = "undefined" !== typeof f.indexLabelWrap ?
                            f.indexLabelWrap : k.indexLabelWrap;
                        h.indexLabelTextAlign = f.indexLabelTextAlign ? f.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                        h.startAngle = 0 === e ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : g[e - 1].endAngle;
                        h.startAngle = (h.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        h.endAngle = h.startAngle + 2 * Math.PI / C * Math.abs(f.y);
                        f = (h.endAngle + h.startAngle) / 2;
                        f = (f + 2 * Math.PI) % (2 * Math.PI);
                        h.midAngle = f;
                        if (h.midAngle > Math.PI / 2 - u && h.midAngle < Math.PI / 2 + u) { if (0 === a || g[c].midAngle > h.midAngle) c = e;
                            a++ } else if (h.midAngle >
                            3 * Math.PI / 2 - u && h.midAngle < 3 * Math.PI / 2 + u) { if (0 === b || g[d].midAngle > h.midAngle) d = e;
                            b++ }
                        h.hemisphere = f > Math.PI / 2 && f <= 3 * Math.PI / 2 ? "left" : "right";
                        h.indexLabelTextBlock = new ia(m.plotArea.ctx, {
                            fontSize: h.indexLabelFontSize,
                            fontFamily: h.indexLabelFontFamily,
                            fontColor: h.indexLabelFontColor,
                            fontStyle: h.indexLabelFontStyle,
                            fontWeight: h.indexLabelFontWeight,
                            textAlign: h.indexLabelTextAlign,
                            backgroundColor: h.indexLabelBackgroundColor,
                            maxWidth: h.indexLabelMaxWidth,
                            maxHeight: h.indexLabelWrap ? 5 * h.indexLabelFontSize : 1.5 * h.indexLabelFontSize,
                            text: h.indexLabelText,
                            padding: 0,
                            textBaseline: "top"
                        });
                        h.indexLabelTextBlock.measureText()
                    }
                    l = f = 0;
                    p = !1;
                    for (e = 0; e < n.length; e++) h = g[(c + e) % n.length], 1 < a && (h.midAngle > Math.PI / 2 - u && h.midAngle < Math.PI / 2 + u) && (f <= a / 2 && !p ? (h.hemisphere = "right", f++) : (h.hemisphere = "left", p = !0));
                    p = !1;
                    for (e = 0; e < n.length; e++) h = g[(d + e) % n.length], 1 < b && (h.midAngle > 3 * Math.PI / 2 - u && h.midAngle < 3 * Math.PI / 2 + u) && (l <= b / 2 && !p ? (h.hemisphere = "left", l++) : (h.hemisphere = "right", p = !0))
                }
            }

            function c(a) {
                var b = m.plotArea.ctx;
                b.clearRect(q.x1,
                    q.y1, q.width, q.height);
                b.fillStyle = m.backgroundColor;
                b.fillRect(q.x1, q.y1, q.width, q.height);
                for (b = 0; b < n.length; b++) {
                    var c = g[b].startAngle,
                        d = g[b].endAngle;
                    if (d > c) {
                        var e = 0.07 * A * Math.cos(g[b].midAngle),
                            f = 0.07 * A * Math.sin(g[b].midAngle),
                            l = !1;
                        if (n[b].exploded) { if (1E-9 < Math.abs(g[b].center.x - (y.x + e)) || 1E-9 < Math.abs(g[b].center.y - (y.y + f))) g[b].center.x = y.x + e * a, g[b].center.y = y.y + f * a, l = !0 } else if (0 < Math.abs(g[b].center.x - y.x) || 0 < Math.abs(g[b].center.y - y.y)) g[b].center.x = y.x + e * (1 - a), g[b].center.y = y.y + f * (1 - a),
                            l = !0;
                        l && (e = {}, e.dataSeries = k, e.dataPoint = k.dataPoints[b], e.index = b, m.toolTip.highlightObjects([e]));
                        W(m.plotArea.ctx, g[b].center, g[b].radius, n[b].color ? n[b].color : k._colorSet[b % k._colorSet.length], k.type, c, d, k.fillOpacity, g[b].percentInnerRadius)
                    }
                }
                a = m.plotArea.ctx;
                a.save();
                a.fillStyle = "black";
                a.strokeStyle = "grey";
                a.textBaseline = "middle";
                a.lineJoin = "round";
                for (b = b = 0; b < n.length; b++) c = g[b], c.indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height / 2, d = 0, d = "left" === c.hemisphere ? "inside" !==
                    k.indexLabelPlacement ? -(c.indexLabelTextBlock.width + p) : -c.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? p : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness && (d = c.center.x + A * Math.cos(c.midAngle), e = c.center.y + A * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness,
                        a.setLineDash && a.setLineDash(N(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(), a.moveTo(d, e), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -p : p), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
                a.save()
            }

            function b(a, b) {
                var c = 0,
                    c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                    d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                    e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                    f = b.indexLabelTextBlock.y +
                    b.indexLabelTextBlock.height / 2;
                return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f
            }

            function e(a) { for (var c = null, d = 1; d < n.length; d++)
                    if (c = (a + d + g.length) % g.length, g[c].hemisphere !== g[a].hemisphere) { c = null; break } else if (g[c].indexLabelText && c !== a && (0 > b(g[c], g[a]) || ("right" === g[a].hemisphere ? g[c].indexLabelTextBlock.y >= g[a].indexLabelTextBlock.y : g[c].indexLabelTextBlock.y <= g[a].indexLabelTextBlock.y))) break;
                else c = null; return c }

            function f(a, c, d) {
                d = (d || 0) + 1;
                if (1E3 < d) return 0;
                c = c || 0;
                var l = 0,
                    k = y.y - 1 * w,
                    h = y.y + 1 * w;
                if (0 <= a && a < n.length) {
                    var p = g[a];
                    if (0 > c && p.indexLabelTextBlock.y < k || 0 < c && p.indexLabelTextBlock.y > h) return 0;
                    var q = 0,
                        t = 0,
                        t = q = q = 0;
                    0 > c ? p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 > k && p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 + c < k && (c = -(k - (p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 + c))) : p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 < k && p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 + c > h && (c = p.indexLabelTextBlock.y + p.indexLabelTextBlock.height /
                        2 + c - h);
                    c = p.indexLabelTextBlock.y + c;
                    k = 0;
                    k = "right" === p.hemisphere ? y.x + Math.sqrt(Math.pow(w, 2) - Math.pow(c - y.y, 2)) : y.x - Math.sqrt(Math.pow(w, 2) - Math.pow(c - y.y, 2));
                    t = y.x + A * Math.cos(p.midAngle);
                    q = y.y + A * Math.sin(p.midAngle);
                    q = Math.sqrt(Math.pow(k - t, 2) + Math.pow(c - q, 2));
                    t = Math.acos(A / w);
                    q = Math.acos((w * w + A * A - q * q) / (2 * A * w));
                    c = q < t ? c - p.indexLabelTextBlock.y : 0;
                    k = null;
                    for (h = 1; h < n.length; h++)
                        if (k = (a - h + g.length) % g.length, g[k].hemisphere !== g[a].hemisphere) { k = null; break } else if (g[k].indexLabelText && g[k].hemisphere ===
                        g[a].hemisphere && k !== a && (0 > b(g[k], g[a]) || ("right" === g[a].hemisphere ? g[k].indexLabelTextBlock.y <= g[a].indexLabelTextBlock.y : g[k].indexLabelTextBlock.y >= g[a].indexLabelTextBlock.y))) break;
                    else k = null;
                    t = k;
                    q = e(a);
                    h = k = 0;
                    0 > c ? (h = "right" === p.hemisphere ? t : q, l = c, null !== h && (t = -c, c = p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 - (g[h].indexLabelTextBlock.y + g[h].indexLabelTextBlock.height / 2), c - t < s && (k = -t, h = f(h, k, d + 1), +h.toFixed(z) > +k.toFixed(z) && (l = c > s ? -(c - s) : -(t - (h - k)))))) : 0 < c && (h = "right" === p.hemisphere ?
                        q : t, l = c, null !== h && (t = c, c = g[h].indexLabelTextBlock.y - g[h].indexLabelTextBlock.height / 2 - (p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2), c - t < s && (k = t, h = f(h, k, d + 1), +h.toFixed(z) < +k.toFixed(z) && (l = c > s ? c - s : t - (k - h)))));
                    l && (d = p.indexLabelTextBlock.y + l, c = 0, c = "right" === p.hemisphere ? y.x + Math.sqrt(Math.pow(w, 2) - Math.pow(d - y.y, 2)) : y.x - Math.sqrt(Math.pow(w, 2) - Math.pow(d - y.y, 2)), p.midAngle > Math.PI / 2 - u && p.midAngle < Math.PI / 2 + u ? (k = (a - 1 + g.length) % g.length, k = g[k], a = g[(a + 1 + g.length) % g.length], "left" === p.hemisphere &&
                        "right" === k.hemisphere && c > k.indexLabelTextBlock.x ? c = k.indexLabelTextBlock.x - 15 : "right" === p.hemisphere && ("left" === a.hemisphere && c < a.indexLabelTextBlock.x) && (c = a.indexLabelTextBlock.x + 15)) : p.midAngle > 3 * Math.PI / 2 - u && p.midAngle < 3 * Math.PI / 2 + u && (k = (a - 1 + g.length) % g.length, k = g[k], a = g[(a + 1 + g.length) % g.length], "right" === p.hemisphere && "left" === k.hemisphere && c < k.indexLabelTextBlock.x ? c = k.indexLabelTextBlock.x + 15 : "left" === p.hemisphere && ("right" === a.hemisphere && c > a.indexLabelTextBlock.x) && (c = a.indexLabelTextBlock.x -
                        15)), p.indexLabelTextBlock.y = d, p.indexLabelTextBlock.x = c, p.indexLabelAngle = Math.atan2(p.indexLabelTextBlock.y - y.y, p.indexLabelTextBlock.x - y.x))
                }
                return l
            }

            function l() {
                var a = m.plotArea.ctx;
                a.fillStyle = "grey";
                a.strokeStyle = "grey";
                a.font = "16px Arial";
                a.textBaseline = "middle";
                for (var c = a = 0, d = 0, l = !0, c = 0; 10 > c && (1 > c || 0 < d); c++) {
                    if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && A - d <= x) l = !1;
                    l && (A -= d);
                    d = 0;
                    if ("inside" !== k.indexLabelPlacement) {
                        w = A * v;
                        for (a = 0; a < n.length; a++) {
                            var h =
                                g[a];
                            h.indexLabelTextBlock.x = y.x + w * Math.cos(h.midAngle);
                            h.indexLabelTextBlock.y = y.y + w * Math.sin(h.midAngle);
                            h.indexLabelAngle = h.midAngle;
                            h.radius = A;
                            h.percentInnerRadius = F
                        }
                        for (var t, r, a = 0; a < n.length; a++) {
                            var h = g[a],
                                u = e(a);
                            if (null !== u) {
                                t = g[a];
                                r = g[u];
                                var C = 0,
                                    C = b(t, r) - s;
                                if (0 > C) {
                                    for (var D = r = 0, E = 0; E < n.length; E++) E !== a && g[E].hemisphere === h.hemisphere && (g[E].indexLabelTextBlock.y < h.indexLabelTextBlock.y ? r++ : D++);
                                    r = C / (r + D || 1) * D;
                                    var D = -1 * (C - r),
                                        J = E = 0;
                                    "right" === h.hemisphere ? (E = f(a, r), D = -1 * (C - E), J = f(u, D), +J.toFixed(z) <
                                        +D.toFixed(z) && +E.toFixed(z) <= +r.toFixed(z) && f(a, -(D - J))) : (E = f(u, r), D = -1 * (C - E), J = f(a, D), +J.toFixed(z) < +D.toFixed(z) && +E.toFixed(z) <= +r.toFixed(z) && f(u, -(D - J)))
                                }
                            }
                        }
                    } else
                        for (a = 0; a < n.length; a++) h = g[a], w = "pie" === k.type ? 0.7 * A : 0.8 * A, u = y.x + w * Math.cos(h.midAngle), r = y.y + w * Math.sin(h.midAngle), h.indexLabelTextBlock.x = u, h.indexLabelTextBlock.y = r;
                    for (a = 0; a < n.length; a++)
                        if (h = g[a], u = h.indexLabelTextBlock.measureText(), 0 !== u.height && 0 !== u.width) u = u = 0, "right" === h.hemisphere ? (u = q.x2 - (h.indexLabelTextBlock.x + h.indexLabelTextBlock.width +
                            p), u *= -1) : u = q.x1 - (h.indexLabelTextBlock.x - h.indexLabelTextBlock.width - p), 0 < u && (!l && h.indexLabelText && (r = "right" === h.hemisphere ? q.x2 - h.indexLabelTextBlock.x : h.indexLabelTextBlock.x - q.x1, 0.3 * h.indexLabelTextBlock.maxWidth > r ? h.indexLabelText = "" : h.indexLabelTextBlock.maxWidth = 0.85 * r, 0.3 * h.indexLabelTextBlock.maxWidth < r && (h.indexLabelTextBlock.x -= "right" === h.hemisphere ? 2 : -2)), Math.abs(h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - y.y) < A || Math.abs(h.indexLabelTextBlock.y + h.indexLabelTextBlock.height /
                            2 - y.y) < A) && (u /= Math.abs(Math.cos(h.indexLabelAngle)), 9 < u && (u *= 0.3), u > d && (d = u)), u = u = 0, 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? (u = q.y2 - (h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2 + 5), u *= -1) : u = q.y1 - (h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2 - 5), 0 < u && (!l && h.indexLabelText && (r = 0 < h.indexLabelAngle && h.indexLabelAngle < Math.PI ? -1 : 1, 0 === f(a, u * r) && f(a, 2 * r)), Math.abs(h.indexLabelTextBlock.x - y.x) < A && (u /= Math.abs(Math.sin(h.indexLabelAngle)), 9 < u && (u *= 0.3), u > d && (d = u)));
                    var H = function(a,
                        b, c) { for (var d = [], e = 0; d.push(g[b]), b !== c; b = (b + 1 + n.length) % n.length);
                        d.sort(function(a, b) { return a.y - b.y }); for (b = 0; b < d.length; b++)
                            if (c = d[b], e < 0.7 * a) e += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                            else break };
                    (function() {
                        for (var a = -1, c = -1, d = 0, f = !1, k = 0; k < n.length; k++)
                            if (f = !1, t = g[k], t.indexLabelText) {
                                var l = e(k);
                                if (null !== l) {
                                    var h = g[l];
                                    C = 0;
                                    C = b(t, h);
                                    var q;
                                    if (q = 0 > C) {
                                        q = t.indexLabelTextBlock.x;
                                        var m = t.indexLabelTextBlock.y - t.indexLabelTextBlock.height /
                                            2,
                                            s = t.indexLabelTextBlock.y + t.indexLabelTextBlock.height / 2,
                                            r = h.indexLabelTextBlock.y - h.indexLabelTextBlock.height / 2,
                                            u = h.indexLabelTextBlock.x + h.indexLabelTextBlock.width,
                                            B = h.indexLabelTextBlock.y + h.indexLabelTextBlock.height / 2;
                                        q = t.indexLabelTextBlock.x + t.indexLabelTextBlock.width < h.indexLabelTextBlock.x - p || q > u + p || m > B + p || s < r - p ? !1 : !0
                                    }
                                    q ? (0 > a && (a = k), l !== a && (c = l, d += -C), 0 === k % Math.max(n.length / 10, 3) && (f = !0)) : f = !0;
                                    f && (0 < d && 0 <= a && 0 <= c) && (H(d, a, c), c = a = -1, d = 0)
                                }
                            }
                        0 < d && H(d, a, c)
                    })()
                }
            }

            function h() {
                m.plotArea.layoutManager.reset();
                m.title && (m.title.dockInsidePlotArea || "center" === m.title.horizontalAlign && "center" === m.title.verticalAlign) && m.title.render();
                if (m.subtitles)
                    for (var a = 0; a < m.subtitles.length; a++) { var b = m.subtitles[a];
                        (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render() }
                m.legend && (m.legend.dockInsidePlotArea || "center" === m.legend.horizontalAlign && "center" === m.legend.verticalAlign) && (m.legend.setLayout(), m.legend.render())
            }
            var m = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var k =
                    this.data[a.dataSeriesIndexes[0]],
                    n = k.dataPoints,
                    p = 10,
                    q = this.plotArea,
                    g = k.dataPointEOs,
                    s = 2,
                    w, v = 1.3,
                    u = 20 / 180 * Math.PI,
                    z = 6,
                    y = { x: (q.x2 + q.x1) / 2, y: (q.y2 + q.y1) / 2 },
                    C = 0;
                a = !1;
                for (var D = 0; D < n.length; D++) C += Math.abs(n[D].y), !a && ("undefined" !== typeof n[D].indexLabel && null !== n[D].indexLabel && 0 < n[D].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof n[D].label && null !== n[D].label && 0 < n[D].label.toString().length) && (a = !0);
                if (0 !== C) {
                    a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
                    var A = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width, q.height) / 2;
                    k.radius && (A = Ta(k.radius, A));
                    var x = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Ta(k.innerRadius, A) : 0.7 * A;
                    k.radius = A;
                    "doughnut" === k.type && (k.innerRadius = x);
                    var F = Math.min(x / A, (A - 1) / A);
                    this.pieDoughnutClickHandler = function(a) {
                        m.isAnimating || !r(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && m._animator.animate(0,
                            500,
                            function(a) { c(a);
                                h();
                                m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
                                m.dispatchEvent("dataAnimationEnd", { chart: m }) }))
                    };
                    d();
                    l();
                    l();
                    l();
                    l();
                    this.disableToolTip = !0;
                    this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
                        var b = m.plotArea.ctx;
                        b.clearRect(q.x1, q.y1, q.width, q.height);
                        b.fillStyle = m.backgroundColor;
                        b.fillRect(q.x1, q.y1, q.width, q.height);
                        for (var b = g[0].startAngle + 2 * Math.PI * a, c = 0; c < n.length; c++) {
                            var d = 0 === c ? g[c].startAngle : e,
                                e = d + (g[c].endAngle - g[c].startAngle),
                                f = !1;
                            e > b && (e = b, f = !0);
                            var l = n[c].color ? n[c].color : k._colorSet[c % k._colorSet.length];
                            e > d && W(m.plotArea.ctx, g[c].center, g[c].radius, l, k.type, d, e, k.fillOpacity, g[c].percentInnerRadius);
                            if (f) break
                        }
                        h();
                        m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
                        1 <= a && m.dispatchEvent("dataAnimationEnd", { chart: m })
                    }, function() { m.disableToolTip = !1;
                        m._animator.animate(0, m.animatedRender ? 500 : 0, function(a) { c(a);
                            h();
                            m.dispatchEvent("dataAnimationIterationEnd", { chart: m }) });
                        m.dispatchEvent("dataAnimationEnd", { chart: m }) })
                }
            }
        };
        var oa = function(a, d, c, b) { "undefined" === typeof c && (c = 1);
            0 >= Math.round(d.y4 - d.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(d.x1), Math.round(d.y1)), a.lineTo(Math.round(d.x2), Math.round(d.y2)), a.lineTo(Math.round(d.x3), Math.round(d.y3)), a.lineTo(Math.round(d.x4), Math.round(d.y4)), "undefined" !== d.x5 && (a.lineTo(Math.round(d.x5), Math.round(d.y5)), a.lineTo(Math.round(d.x6), Math.round(d.y6))), a.closePath(), a.fillStyle = b ? b : d.color, a.fill(), a.globalAplha = 1, a.restore()) };
        m.prototype.renderFunnel =
            function(a) {
                function d() { for (var a = 0, b = [], c = 0; c < z.length; c++) { if ("undefined" === typeof z[c].y) return -1;
                        z[c].y = "number" === typeof z[c].y ? z[c].y : 0;
                        a += Math.abs(z[c].y) } if (0 === a) return -1; for (c = b[0] = 0; c < z.length; c++) b.push(Math.abs(z[c].y) * F / a); return b }

                function c() {
                    var a = U,
                        b = $,
                        c = L,
                        d = ba,
                        e, f;
                    e = Y;
                    f = Q - P;
                    d = Math.abs((f - e) * (b - a + (d - c)) / 2);
                    c = ba - L;
                    e = f - e;
                    f = c * (f - Q);
                    f = Math.abs(f);
                    f = d + f;
                    for (var d = [], g = 0, k = 0; k < z.length; k++) { if ("undefined" === typeof z[k].y) return -1;
                        z[k].y = "number" === typeof z[k].y ? z[k].y : 0;
                        g += Math.abs(z[k].y) }
                    if (0 ===
                        g) return -1;
                    for (var l = d[0] = 0, h = 0, n, p, b = b - a, l = !1, k = 0; k < z.length; k++) a = Math.abs(z[k].y) * f / g, l ? n = 0 == Number(c.toFixed(3)) ? 0 : a / c : (p = V * V * b * b - 4 * Math.abs(V) * a, 0 > p ? (p = c, l = (b + p) * (e - h) / 2, a -= l, n = e - h, h += e - h, n += 0 == p ? 0 : a / p, h += a / p, l = !0) : (n = (Math.abs(V) * b - Math.sqrt(p)) / 2, p = b - 2 * n / Math.abs(V), h += n, h > e && (h -= n, p = c, l = (b + p) * (e - h) / 2, a -= l, n = e - h, h += e - h, n += a / p, h += a / p, l = !0), b = p)), d.push(n);
                    return d
                }

                function b() {
                    if (u && z) {
                        for (var a, b, c, d, e, f, k, l, h, n, p, q, t, m, s, B = [], y = [], v = { percent: null, total: null }, C = null, A = 0; A < z.length; A++) s = O[A],
                            s = "undefined" !== typeof s.x5 ? (s.y2 + s.y4) / 2 : (s.y2 + s.y3) / 2, s = g(s).x2 + 1, B[A] = M - s - X;
                        s = 0.5 * X;
                        for (var A = 0, D = z.length - 1; A < z.length || 0 <= D; A++, D--) {
                            b = u.reversed ? z[D] : z[A];
                            a = b.color ? b.color : u.reversed ? u._colorSet[(z.length - 1 - A) % u._colorSet.length] : u._colorSet[A % u._colorSet.length];
                            c = b.indexLabelPlacement || u.indexLabelPlacement || "outside";
                            m = b.indexLabelTextAlign || u.indexLabelTextAlign || "left";
                            d = b.indexLabelBackgroundColor || u.indexLabelBackgroundColor || (w ? "transparent" : null);
                            e = b.indexLabelFontColor || u.indexLabelFontColor ||
                                "#979797";
                            f = r(b.indexLabelFontSize) ? u.indexLabelFontSize : b.indexLabelFontSize;
                            k = b.indexLabelFontStyle || u.indexLabelFontStyle || "normal";
                            l = b.indexLabelFontFamily || u.indexLabelFontFamily || "arial";
                            h = b.indexLabelFontWeight || u.indexLabelFontWeight || "normal";
                            a = b.indexLabelLineColor || u.options.indexLabelLineColor || a;
                            n = "number" === typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" === typeof u.indexLabelLineThickness ? u.indexLabelLineThickness : 2;
                            p = b.indexLabelLineDashType || u.indexLabelLineDashType ||
                                "solid";
                            q = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !== typeof u.indexLabelWrap ? u.indexLabelWrap : !0;
                            t = u.dataPointIds[A];
                            x._eventManager.objectMap[t] = { id: t, objectType: "dataPoint", dataPointIndex: A, dataSeriesIndex: 0, funnelSection: O[u.reversed ? z.length - 1 - A : A] };
                            "inside" === u.indexLabelPlacement && (B[A] = A !== ca ? u.reversed ? O[A].x2 - O[A].x1 : O[A].x3 - O[A].x4 : O[A].x3 - O[A].x6, 20 > B[A] && (B[A] = A !== ca ? u.reversed ? O[A].x3 - O[A].x4 : O[A].x2 - O[A].x1 : O[A].x2 - O[A].x1, B[A] /= 2));
                            t = b.indexLabelMaxWidth ? b.indexLabelMaxWidth :
                                u.options.indexLabelMaxWidth ? u.indexLabelMaxWidth : B[A];
                            if (t > B[A] || 0 > t) t = B[A];
                            y[A] = "inside" === u.indexLabelPlacement ? O[A].height : !1;
                            v = x.getPercentAndTotal(u, b);
                            if (u.indexLabelFormatter || b.indexLabelFormatter) C = { chart: x.options, dataSeries: u, dataPoint: b, total: v.total, percent: v.percent };
                            b = b.indexLabelFormatter ? b.indexLabelFormatter(C) : b.indexLabel ? x.replaceKeywordsWithValue(b.indexLabel, b, u, A) : u.indexLabelFormatter ? u.indexLabelFormatter(C) : u.indexLabel ? x.replaceKeywordsWithValue(u.indexLabel, b, u, A) : b.label ?
                                b.label : "";
                            0 >= n && (n = 0);
                            1E3 > t && 1E3 - t < s && (t += 1E3 - t);
                            T.roundRect || Ca(T);
                            c = new ia(T, { fontSize: f, fontFamily: l, fontColor: e, fontStyle: k, fontWeight: h, horizontalAlign: c, textAlign: m, backgroundColor: d, maxWidth: t, maxHeight: !1 === y[A] ? q ? 4.28571429 * f : 1.5 * f : y[A], text: b, padding: da });
                            c.measureText();
                            I.push({ textBlock: c, id: u.reversed ? D : A, isDirty: !1, lineColor: a, lineThickness: n, lineDashType: p, height: c.height < c.maxHeight ? c.height : c.maxHeight, width: c.width < c.maxWidth ? c.width : c.maxWidth })
                        }
                    }
                }

                function e() {
                    var a, b, c, d, e, f = [];
                    e = !1;
                    c = 0;
                    for (var g, k = M - $ - X / 2, k = u.options.indexLabelMaxWidth ? u.indexLabelMaxWidth > k ? k : u.indexLabelMaxWidth : k, l = I.length - 1; 0 <= l; l--) { g = z[I[l].id];
                        c = I[l];
                        d = c.textBlock;
                        b = (a = q(l) < O.length ? I[q(l)] : null) ? a.textBlock : null;
                        c = c.height;
                        a && d.y + c + da > b.y && (e = !0);
                        c = g.indexLabelMaxWidth || k; if (c > k || 0 > c) c = k;
                        f.push(c) }
                    if (e)
                        for (l = I.length - 1; 0 <= l; l--) a = O[l], I[l].textBlock.maxWidth = f[f.length - (l + 1)], I[l].textBlock.measureText(), I[l].textBlock.x = M - k, c = I[l].textBlock.height < I[l].textBlock.maxHeight ? I[l].textBlock.height :
                            I[l].textBlock.maxHeight, e = I[l].textBlock.width < I[l].textBlock.maxWidth ? I[l].textBlock.width : I[l].textBlock.maxWidth, I[l].height = c, I[l].width = e, c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, I[l].textBlock.y = c - I[l].height / 2, u.reversed ? (I[l].textBlock.y + I[l].height > ma + C && (I[l].textBlock.y = ma + C - I[l].height), I[l].textBlock.y < ra - C && (I[l].textBlock.y = ra - C)) : (I[l].textBlock.y < ma - C && (I[l].textBlock.y = ma - C), I[l].textBlock.y + I[l].height > ra + C && (I[l].textBlock.y = ra + C - I[l].height))
                }

                function f() {
                    var a,
                        b, c, d;
                    if ("inside" !== u.indexLabelPlacement)
                        for (var e = 0; e < O.length; e++) 0 == I[e].textBlock.text.length ? I[e].isDirty = !0 : (a = O[e], c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, b = u.reversed ? "undefined" !== typeof a.x5 ? c > wa ? g(c).x2 + 1 : (a.x2 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1 : "undefined" !== typeof a.x5 ? c < wa ? g(c).x2 + 1 : (a.x4 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1, I[e].textBlock.x = b + X, I[e].textBlock.y = c - I[e].height / 2, u.reversed ? (I[e].textBlock.y + I[e].height > ma + C && (I[e].textBlock.y = ma + C - I[e].height), I[e].textBlock.y < ra - C && (I[e].textBlock.y =
                            ra - C)) : (I[e].textBlock.y < ma - C && (I[e].textBlock.y = ma - C), I[e].textBlock.y + I[e].height > ra + C && (I[e].textBlock.y = ra + C - I[e].height)));
                    else
                        for (e = 0; e < O.length; e++) 0 == I[e].textBlock.text.length ? I[e].isDirty = !0 : (a = O[e], b = a.height, c = I[e].height, d = I[e].width, b >= c ? (b = e != ca ? (a.x4 + a.x3) / 2 - d / 2 : (a.x5 + a.x4) / 2 - d / 2, c = e != ca ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2, I[e].textBlock.x = b, I[e].textBlock.y = c) : I[e].isDirty = !0)
                }

                function l() {
                    function a(b, c) {
                        var d;
                        if (0 > b || b >= I.length) return 0;
                        var e, f = I[b].textBlock;
                        if (0 > c) {
                            c *= -1;
                            e =
                                p(b);
                            d = h(e, b);
                            if (d >= c) return f.y -= c, c;
                            if (0 == b) return 0 < d && (f.y -= d), d;
                            d += a(e, -(c - d));
                            0 < d && (f.y -= d);
                            return d
                        }
                        e = q(b);
                        d = h(b, e);
                        if (d >= c) return f.y += c, c;
                        if (b == O.length - 1) return 0 < d && (f.y += d), d;
                        d += a(e, c - d);
                        0 < d && (f.y += d);
                        return d
                    }

                    function b() {
                        var a, d, e, f, g = 0,
                            k;
                        f = (Q - Y + 2 * C) / n;
                        k = n;
                        for (var l, h = 1; h < k; h++) {
                            e = h * f;
                            for (var t = I.length - 1; 0 <= t; t--) !I[t].isDirty && (I[t].textBlock.y < e && I[t].textBlock.y + I[t].height > e) && (l = q(t), !(l >= I.length - 1) && I[t].textBlock.y + I[t].height + da > I[l].textBlock.y && (I[t].textBlock.y = I[t].textBlock.y +
                                I[t].height - e > e - I[t].textBlock.y ? e + 1 : e - I[t].height - 1))
                        }
                        for (l = O.length - 1; 0 < l; l--)
                            if (!I[l].isDirty) { e = p(l); if (0 > e && (e = 0, I[e].isDirty)) break; if (I[l].textBlock.y < I[e].textBlock.y + I[e].height) { d = d || l;
                                    f = l; for (k = 0; I[f].textBlock.y < I[e].textBlock.y + I[e].height + da;) { a = a || I[f].textBlock.y + I[f].height;
                                        k += I[f].height;
                                        k += da;
                                        f = e; if (0 >= f) { f = 0;
                                            k += I[f].height; break }
                                        e = p(f); if (0 > e) { f = 0;
                                            k += I[f].height; break } } if (f != l) { g = I[f].textBlock.y;
                                        a -= g;
                                        a = k - a;
                                        g = c(a, d, f); break } } }
                        return g
                    }

                    function c(a, b, d) {
                        var e = [],
                            f = 0,
                            g = 0;
                        for (a = Math.abs(a); d <=
                            b; d++) e.push(O[d]);
                        e.sort(function(a, b) { return a.height - b.height });
                        for (d = 0; d < e.length; d++)
                            if (b = e[d], f < a) g++, f += I[b.id].height + da, I[b.id].textBlock.text = "", I[b.id].indexLabelText = "", I[b.id].isDirty = !0, I[b.id].textBlock.measureText();
                            else break;
                        return g
                    }
                    for (var d, e, f, g, k, l, n = 1, m = 0; m < 2 * n; m++) {
                        for (var s = I.length - 1; 0 <= s && !(0 <= p(s) && p(s), f = I[s], g = f.textBlock, l = (k = q(s) < O.length ? I[q(s)] : null) ? k.textBlock : null, d = +f.height.toFixed(6), e = +g.y.toFixed(6), !f.isDirty && (k && e + d + da > +l.y.toFixed(6)) && (d = g.y + d + da - l.y,
                                e = a(s, -d), e < d && (0 < e && (d -= e), e = a(q(s), d), e != d))); s--);
                        b()
                    }
                }

                function h(a, b) { return (b < O.length ? I[b].textBlock.y : u.reversed ? ma + C : ra + C) - (0 > a ? u.reversed ? ra - C : ma - C : I[a].textBlock.y + I[a].height + da) }

                function m(a, b, c) {
                    var d, e, g, l = [],
                        h = C,
                        p = []; - 1 !== b && (0 <= W.indexOf(b) ? (e = W.indexOf(b), W.splice(e, 1)) : (W.push(b), W = W.sort(function(a, b) { return a - b })));
                    if (0 === W.length) l = ga;
                    else {
                        e = C * (1 != W.length || 0 != W[0] && W[0] != O.length - 1 ? 2 : 1) / k();
                        for (var t = 0; t < O.length; t++) {
                            if (1 == W.length && 0 == W[0]) { if (0 === t) { l.push(ga[t]);
                                    d = h; continue } } else 0 ===
                                t && (d = -1 * h);
                            l.push(ga[t] + d);
                            if (0 <= W.indexOf(t) || t < O.length && 0 <= W.indexOf(t + 1)) d += e
                        }
                    }
                    g = function() { for (var a = [], b = 0; b < O.length; b++) a.push(l[b] - O[b].y1); return a }();
                    var q = {
                        startTime: (new Date).getTime(),
                        duration: c || 500,
                        easingFunction: function(a, b, c, d) { return K.easing.easeOutQuart(a, b, c, d) },
                        changeSection: function(a) {
                            for (var b, c, d = 0; d < O.length; d++) b = g[d], c = O[d], b *= a, "undefined" === typeof p[d] && (p[d] = 0), 0 > p && (p *= -1), c.y1 += b - p[d], c.y2 += b - p[d], c.y3 += b - p[d], c.y4 += b - p[d], c.y5 && (c.y5 += b - p[d], c.y6 += b - p[d]), p[d] =
                                b
                        }
                    };
                    a._animator.animate(0, c, function(c) { var d = a.plotArea.ctx || a.ctx;
                        ha = !0;
                        d.clearRect(y.x1, y.y1, y.x2 - y.x1, y.y2 - y.y1);
                        d.fillStyle = a.backgroundColor;
                        d.fillRect(y.x1, y.y1, y.width, y.height);
                        q.changeSection(c, b); var e = {};
                        e.dataSeries = u;
                        e.dataPoint = u.reversed ? u.dataPoints[z.length - 1 - b] : u.dataPoints[b];
                        e.index = u.reversed ? z.length - 1 - b : b;
                        a.toolTip.highlightObjects([e]); for (e = 0; e < O.length; e++) oa(d, O[e], u.fillOpacity);
                        v(d);
                        J && ("inside" !== u.indexLabelPlacement ? n(d) : f(), s(d));
                        1 <= c && (ha = !1) }, null, K.easing.easeOutQuart)
                }

                function k() { for (var a = 0, b = 0; b < O.length - 1; b++)(0 <= W.indexOf(b) || 0 <= W.indexOf(b + 1)) && a++; return a }

                function n(a) { for (var b, c, d, e, f = 0; f < O.length; f++) e = 1 === I[f].lineThickness % 2 ? 0.5 : 0, c = ((O[f].y2 + O[f].y4) / 2 << 0) + e, b = g(c).x2 - 1, d = I[f].textBlock.x, e = (I[f].textBlock.y + I[f].height / 2 << 0) + e, I[f].isDirty || 0 == I[f].lineThickness || (a.strokeStyle = I[f].lineColor, a.lineWidth = I[f].lineThickness, a.setLineDash && a.setLineDash(N(I[f].lineDashType, I[f].lineThickness)), a.beginPath(), a.moveTo(b, c), a.lineTo(d, e), a.stroke()) }

                function p(a) { for (a -= 1; - 1 <= a && -1 != a && I[a].isDirty; a--); return a }

                function q(a) { for (a += 1; a <= O.length && a != O.length && I[a].isDirty; a++); return a }

                function g(a) { for (var b, c = 0; c < z.length; c++)
                        if (O[c].y1 < a && O[c].y4 > a) { b = O[c]; break }
                    return b ? (a = b.y6 ? a > b.y6 ? b.x3 + (b.x4 - b.x3) / (b.y4 - b.y3) * (a - b.y3) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2), { x1: a, x2: a }) : -1 }

                function s(a) { for (var b = 0; b < O.length; b++) I[b].isDirty || (a && (I[b].textBlock.ctx = a), I[b].textBlock.render(!0)) }

                function v(a) {
                    x.plotArea.layoutManager.reset();
                    a.roundRect || Ca(a);
                    x.title && (x.title.dockInsidePlotArea || "center" === x.title.horizontalAlign && "center" === x.title.verticalAlign) && (x.title.ctx = a, x.title.render());
                    if (x.subtitles)
                        for (var b = 0; b < x.subtitles.length; b++) { var c = x.subtitles[b]; if (c.dockInsidePlotArea || "center" === c.horizontalAlign && "center" === c.verticalAlign) x.subtitles.ctx = a, c.render() }
                    x.legend && (x.legend.dockInsidePlotArea || "center" === x.legend.horizontalAlign && "center" === x.legend.verticalAlign) && (x.legend.ctx = a, x.legend.setLayout(), x.legend.render());
                    S.fNg && S.fNg(x)
                }
                var x = this;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    for (var u = this.data[a.dataSeriesIndexes[0]], z = u.dataPoints, y = this.plotArea, C = 0.025 * y.width, D = 0.01 * y.width, A = 0, F = y.height - 2 * C, E = Math.min(y.width - 2 * D, 2.8 * y.height), J = !1, H = 0; H < z.length; H++)
                        if (!J && ("undefined" !== typeof z[H].indexLabel && null !== z[H].indexLabel && 0 < z[H].indexLabel.toString().length) && (J = !0), !J && ("undefined" !== typeof z[H].label && null !== z[H].label && 0 < z[H].label.toString().length) && (J = !0), !J && "function" === typeof u.indexLabelFormatter ||
                            "function" === typeof z[H].indexLabelFormatter) J = !0;
                    J = J || "undefined" !== typeof u.indexLabel && null !== u.indexLabel && 0 < u.indexLabel.toString().length;
                    "inside" !== u.indexLabelPlacement && J || (D = (y.width - 0.75 * E) / 2);
                    var H = y.x1 + D,
                        M = y.x2 - D,
                        Y = y.y1 + C,
                        Q = y.y2 - C,
                        T = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
                    if (0 != u.length && (u.dataPoints && u.visible) && 0 !== z.length) {
                        var P, G;
                        a = 75 * E / 100;
                        var X = 30 * (M - a) / 100;
                        "funnel" === u.type ? (P = r(u.options.neckHeight) ? 0.35 * F : u.neckHeight, G = r(u.options.neckWidth) ? 0.25 * a : u.neckWidth, "string" ===
                            typeof P && P.match(/%$/) ? (P = parseInt(P), P = P * F / 100) : P = parseInt(P), "string" === typeof G && G.match(/%$/) ? (G = parseInt(G), G = G * a / 100) : G = parseInt(G), P > F ? P = F : 0 >= P && (P = 0), G > a ? G = a - 0.5 : 0 >= G && (G = 0)) : "pyramid" === u.type && (G = P = 0, u.reversed = u.reversed ? !1 : !0);
                        var D = H + a / 2,
                            U = H,
                            $ = H + a,
                            ma = u.reversed ? Q : Y,
                            L = D - G / 2,
                            ba = D + G / 2,
                            wa = u.reversed ? Y + P : Q - P,
                            ra = u.reversed ? Y : Q;
                        a = [];
                        var D = [],
                            O = [],
                            E = [],
                            Z = Y,
                            ca, V = (wa - ma) / (L - U),
                            ea = -V,
                            H = "area" === (u.valueRepresents ? u.valueRepresents : "height") ? c() : d();
                        if (-1 !== H) {
                            if (u.reversed)
                                for (E.push(Z), G = H.length -
                                    1; 0 < G; G--) Z += H[G], E.push(Z);
                            else
                                for (G = 0; G < H.length; G++) Z += H[G], E.push(Z);
                            if (u.reversed)
                                for (G = 0; G < H.length; G++) E[G] < wa ? (a.push(L), D.push(ba), ca = G) : (a.push((E[G] - ma + V * U) / V), D.push((E[G] - ma + ea * $) / ea));
                            else
                                for (G = 0; G < H.length; G++) E[G] < wa ? (a.push((E[G] - ma + V * U) / V), D.push((E[G] - ma + ea * $) / ea), ca = G) : (a.push(L), D.push(ba));
                            for (G = 0; G < H.length - 1; G++) Z = u.reversed ? z[z.length - 1 - G].color ? z[z.length - 1 - G].color : u._colorSet[(z.length - 1 - G) % u._colorSet.length] : z[G].color ? z[G].color : u._colorSet[G % u._colorSet.length], G ===
                                ca ? O.push({ x1: a[G], y1: E[G], x2: D[G], y2: E[G], x3: ba, y3: wa, x4: D[G + 1], y4: E[G + 1], x5: a[G + 1], y5: E[G + 1], x6: L, y6: wa, id: G, height: E[G + 1] - E[G], color: Z }) : O.push({ x1: a[G], y1: E[G], x2: D[G], y2: E[G], x3: D[G + 1], y3: E[G + 1], x4: a[G + 1], y4: E[G + 1], id: G, height: E[G + 1] - E[G], color: Z });
                            var da = 2,
                                I = [],
                                ha = !1,
                                W = [],
                                ga = [],
                                H = !1;
                            a = a = 0;
                            Da(W);
                            for (G = 0; G < z.length; G++) z[G].exploded && (H = !0, u.reversed ? W.push(z.length - 1 - G) : W.push(G));
                            T.clearRect(y.x1, y.y1, y.width, y.height);
                            T.fillStyle = x.backgroundColor;
                            T.fillRect(y.x1, y.y1, y.width, y.height);
                            if (J &&
                                u.visible && (b(), f(), e(), "inside" !== u.indexLabelPlacement)) { l(); for (G = 0; G < z.length; G++) I[G].isDirty || (a = I[G].textBlock.x + I[G].width, a = (M - a) / 2, 0 == G && (A = a), A > a && (A = a)); for (G = 0; G < O.length; G++) O[G].x1 += A, O[G].x2 += A, O[G].x3 += A, O[G].x4 += A, O[G].x5 && (O[G].x5 += A, O[G].x6 += A), I[G].textBlock.x += A }
                            for (G = 0; G < O.length; G++) A = O[G], oa(T, A, u.fillOpacity), ga.push(A.y1);
                            v(T);
                            J && u.visible && ("inside" === u.indexLabelPlacement || x.animationEnabled || n(T), x.animationEnabled || s());
                            if (!J)
                                for (G = 0; G < z.length; G++) A = u.dataPointIds[G],
                                    a = { id: A, objectType: "dataPoint", dataPointIndex: G, dataSeriesIndex: 0, funnelSection: O[u.reversed ? z.length - 1 - G : G] }, x._eventManager.objectMap[A] = a;
                            !x.animationEnabled && H ? m(x, -1, 0) : x.animationEnabled && !x.animatedRender && m(x, -1, 0);
                            this.funnelPyramidClickHandler = function(a) {
                                var b = -1;
                                if (!ha && !x.isAnimating && (r(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && (b = u.reversed ? z.length - 1 - a.dataPointIndex : a.dataPointIndex, 0 <= b)) {
                                    a = b;
                                    if ("funnel" === u.type || "pyramid" === u.type) u.reversed ? z[z.length - 1 - a].exploded =
                                        z[z.length - 1 - a].exploded ? !1 : !0 : z[a].exploded = z[a].exploded ? !1 : !0;
                                    m(x, b, 500)
                                }
                            };
                            return { source: T, dest: this.plotArea.ctx, animationCallback: function(a, b) { K.fadeInAnimation(a, b);
                                    1 <= a && (m(x, -1, 500), v(x.plotArea.ctx || x.ctx)) }, easingFunction: K.easing.easeInQuad, animationBase: 0 }
                        }
                    }
                }
            };
        m.prototype.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a,
                    1E3 / 60)
            }
        }();
        m.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        m.prototype.set = function(a, d, c) { c = "undefined" === typeof c ? !0 : c; "options" === a ? (this.options = d, c && this.render()) : m.base.set.call(this, a, d, c) };
        m.prototype.exportChart = function(a) {
            a = "undefined" === typeof a ? {} : a;
            var d = a.format ? a.format : "png",
                c = a.fileName ? a.fileName :
                this.exportFileName;
            if (a.toDataURL) return this.canvas.toDataURL("image/" + d);
            var b = this.canvas;
            if (b && d && c) {
                c = c + "." + d;
                a = "image/" + d;
                var b = b.toDataURL(a),
                    e = !1,
                    f = document.createElement("a");
                f.download = c;
                f.href = b;
                if ("undefined" !== typeof Blob && new Blob) {
                    for (var l = b.replace(/^data:[a-z\/]*;base64,/, ""), l = atob(l), h = new ArrayBuffer(l.length), h = new Uint8Array(h), m = 0; m < l.length; m++) h[m] = l.charCodeAt(m);
                    d = new Blob([h.buffer], { type: "image/" + d });
                    try { window.navigator.msSaveBlob(d, c), e = !0 } catch (k) {
                        f.dataset.downloadurl = [a, f.download, f.href].join(":"), f.href = window.URL.createObjectURL(d)
                    }
                }
                if (!e) try { event = document.createEvent("MouseEvents"), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), f.dispatchEvent ? f.dispatchEvent(event) : f.fireEvent && f.fireEvent("onclick") } catch (n) { d = window.open(), d.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), d.document.close() }
            }
        };
        m.prototype.print = function() {
            var a = this.exportChart({ toDataURL: !0 }),
                d = document.createElement("iframe");
            d.setAttribute("class", "canvasjs-chart-print-frame");
            P(d, { position: "absolute", width: "100%", border: "0px", margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" });
            d.style.height = this.height + "px";
            this._canvasJSContainer.appendChild(d);
            var c = this,
                b = d.contentWindow || d.contentDocument.document || d.contentDocument;
            b.document.open();
            b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
            b.document.body && b.document.body.style && (b.document.body.style.margin = "0px 0px 0px 0px", b.document.body.style.padding =
                "0px 0px 0px 0px");
            b.document.close();
            setTimeout(function() { b.focus();
                b.print();
                setTimeout(function() { c._canvasJSContainer.removeChild(d) }, 1E3) }, 500)
        };
        m.prototype.getPercentAndTotal = function(a, d) {
            var c = null,
                b = null,
                e = c = null;
            if (0 <= a.type.indexOf("stacked")) b = 0, c = d.x.getTime ? d.x.getTime() : d.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], c = a.plotUnit.yAbsTotals[c], e = isNaN(d.y) ? 0 : 0 === c ? 0 : 100 * (d.y / c));
            else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
                for (c = b = 0; c < a.dataPoints.length; c++) isNaN(a.dataPoints[c].y) ||
                    (b += a.dataPoints[c].y);
                e = isNaN(d.y) ? 0 : 100 * (d.y / b)
            }
            return { percent: e, total: b }
        };
        m.prototype.replaceKeywordsWithValue = function(a, d, c, b, e) {
            var f = this;
            e = "undefined" === typeof e ? 0 : e;
            if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
                var l = "#percent",
                    h = "#total",
                    m = this.getPercentAndTotal(c, d),
                    h = isNaN(m.total) ? h : m.total,
                    l = isNaN(m.percent) ? l : m.percent;
                do {
                    m = "";
                    if (c.percentFormatString) m = c.percentFormatString;
                    else { var m = "#,##0.",
                            k = Math.max(Math.ceil(Math.log(1 / Math.abs(l)) / Math.LN10), 2); if (isNaN(k) || !isFinite(k)) k = 2; for (var n = 0; n < k; n++) m += "#";
                        c.percentFormatString = m }
                    a = a.replace("#percent", ea(l, m, f._cultureInfo));
                    a = a.replace("#total", ea(h, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", f._cultureInfo))
                } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
            }
            return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
                if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1,
                    a.length - 1);
                a = Ga(a.slice(1, a.length - 1));
                a = a.replace("#index", e);
                var l = null;
                try { var g = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                    g && 0 < g.length && (l = Ga(g[2]), a = Ga(g[1])) } catch (k) {}
                g = null;
                if ("color" === a) return "waterfall" === c.type ? d.color ? d.color : 0 < d.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[l % c._colorSet.length] : d.color ? d.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
                if (d.hasOwnProperty(a)) g = d;
                else if (c.hasOwnProperty(a)) g = c;
                else return "";
                g = g[a];
                null !== l && (g = g[l]);
                if ("x" === a)
                    if (c.axisX && "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || d.x && d.x.getTime) { if (!c.axisX.logarithmic) return Aa(g, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = f.axisX && f.axisX.autoValueFormatString ? f.axisX.autoValueFormatString : "DD MMM YY", f._cultureInfo) } else return ea(g, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", f._cultureInfo);
                else return "y" ===
                    a ? ea(g, d.yValueFormatString ? d.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", f._cultureInfo) : "z" === a ? ea(g, d.zValueFormatString ? d.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", f._cultureInfo) : g
            })
        };
        na(E, ba);
        E.prototype.setLayout = function() {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                d = a.layoutManager.getFreeSpace(),
                c = null,
                b = 0,
                e = 0,
                f = 0,
                l = 0,
                h = this.markerMargin = this.chart.options.legend &&
                !r(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
            this.height = 0;
            var m = [],
                k = [];
            if ("top" === this.verticalAlign || "bottom" === this.verticalAlign) this.orientation = "horizontal", c = this.verticalAlign, f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width, l = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * d.height;
            else if ("center" === this.verticalAlign) {
                this.orientation = "vertical";
                if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" ===
                    this.horizontalAlign) c = this.horizontalAlign;
                f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * d.width;
                l = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height
            }
            this.errorMarkerColor = [];
            for (var n = 0; n < this.dataSeries.length; n++) {
                var p = this.dataSeries[n];
                if (p.dataPoints && p.dataPoints.length)
                    if ("pie" !== p.type && "doughnut" !== p.type && "funnel" !== p.type && "pyramid" !== p.type) {
                        var q = p.legendMarkerType = p.legendMarkerType ? p.legendMarkerType : "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type && "scatter" !==
                            p.type && "bubble" !== p.type || !p.markerType ? "error" === p.type && p._linkedSeries ? p._linkedSeries.legendMarkerType ? p._linkedSeries.legendMarkerType : H.getDefaultLegendMarker(p._linkedSeries.type) : H.getDefaultLegendMarker(p.type) : p.markerType,
                            g = p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: p, dataPoint: null }) : p.name,
                            s = p.legendMarkerColor = p.legendMarkerColor ? p.legendMarkerColor : p.markerColor ? p.markerColor : "error" === p.type ? r(p.whiskerColor) ?
                            p._colorSet[0] : p.whiskerColor : p._colorSet[0],
                            w = p.markerSize || "line" !== p.type && "stepLine" !== p.type && "spline" !== p.type ? 0.75 * this.lineHeight : 0,
                            v = p.legendMarkerBorderColor ? p.legendMarkerBorderColor : p.markerBorderColor,
                            u = p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : p.markerBorderThickness ? Math.max(1, Math.round(0.2 * w)) : 0;
                        "error" === p.type && this.errorMarkerColor.push(s);
                        g = this.chart.replaceKeywordsWithValue(g, p.dataPoints[0], p, n);
                        q = {
                            markerType: q,
                            markerColor: s,
                            text: g,
                            textBlock: null,
                            chartType: p.type,
                            markerSize: w,
                            lineColor: p._colorSet[0],
                            dataSeriesIndex: p.index,
                            dataPointIndex: null,
                            markerBorderColor: v,
                            markerBorderThickness: u
                        };
                        m.push(q)
                    } else
                        for (var z = 0; z < p.dataPoints.length; z++) {
                            var y = p.dataPoints[z],
                                q = y.legendMarkerType ? y.legendMarkerType : p.legendMarkerType ? p.legendMarkerType : H.getDefaultLegendMarker(p.type),
                                g = y.legendText ? y.legendText : p.legendText ? p.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: p, dataPoint: y }) : y.name ? y.name : "DataPoint: " +
                                (z + 1),
                                s = y.legendMarkerColor ? y.legendMarkerColor : p.legendMarkerColor ? p.legendMarkerColor : y.color ? y.color : p.color ? p.color : p._colorSet[z % p._colorSet.length],
                                w = 0.75 * this.lineHeight,
                                v = y.legendMarkerBorderColor ? y.legendMarkerBorderColor : p.legendMarkerBorderColor ? p.legendMarkerBorderColor : y.markerBorderColor ? y.markerBorderColor : p.markerBorderColor,
                                u = y.legendMarkerBorderThickness ? y.legendMarkerBorderThickness : p.legendMarkerBorderThickness ? p.legendMarkerBorderThickness : y.markerBorderThickness || p.markerBorderThickness ?
                                Math.max(1, Math.round(0.2 * w)) : 0,
                                g = this.chart.replaceKeywordsWithValue(g, y, p, z),
                                q = { markerType: q, markerColor: s, text: g, textBlock: null, chartType: p.type, markerSize: w, dataSeriesIndex: n, dataPointIndex: z, markerBorderColor: v, markerBorderThickness: u };
                            (y.showInLegend || p.showInLegend && !1 !== y.showInLegend) && m.push(q)
                        }
            }!0 === this.reversed && m.reverse();
            if (0 < m.length) {
                p = null;
                s = g = y = z = 0;
                y = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, f) : this.itemMaxWidth = Math.min(this.itemWidth,
                    f) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, f) : this.itemMaxWidth = f;
                w = 0 === w ? 0.75 * this.lineHeight : w;
                y -= w + h;
                for (n = 0; n < m.length; n++) {
                    q = m[n];
                    v = y;
                    if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType) v -= 2 * 0.1 * this.lineHeight;
                    if (!(0 >= l || "undefined" === typeof l || 0 >= v || "undefined" === typeof v)) {
                        if ("horizontal" === this.orientation) {
                            q.textBlock = new ia(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: v,
                                maxHeight: this.itemWrap ? l : this.lineHeight,
                                angle: 0,
                                text: q.text,
                                horizontalAlign: "left",
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle"
                            });
                            q.textBlock.measureText();
                            null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + h + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                            if (!p || p.width + Math.round(q.textBlock.width + w + h + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > f) p = { items: [], width: 0 }, k.push(p), this.height += g, g = 0;
                            g = Math.max(g, q.textBlock.height)
                        } else q.textBlock = new ia(this.ctx, { x: 0, y: 0, maxWidth: y, maxHeight: !0 === this.itemWrap ? l : 1.5 * this.fontSize, angle: 0, text: q.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (w + h + ("line" === q.chartType || "spline" === q.chartType ||
                            "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < l - this.lineHeight ? (p = { items: [], width: 0 }, k.push(p)) : (p = k[z], z = (z + 1) % k.length), this.height += q.textBlock.height;
                        q.textBlock.x = p.width;
                        q.textBlock.y = 0;
                        p.width += Math.round(q.textBlock.width + w + h + (0 === p.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                        p.items.push(q);
                        this.width = Math.max(p.width, this.width);
                        s = q.textBlock.width + (w + h + ("line" === q.chartType || "spline" ===
                            q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))
                    }
                }
                this.itemWidth = s;
                this.height = !1 === this.itemWrap ? k.length * this.lineHeight : this.height + g;
                this.height = Math.min(l, this.height);
                this.width = Math.min(f, this.width)
            }
            "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width /
                2, b = d.y1 + d.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y2 - this.height);
            this.items = m;
            for (n = 0; n < this.items.length; n++) q = m[n], q.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[q.id] = { id: q.id, objectType: "legendItem", legendItemIndex: n, dataSeriesIndex: q.dataSeriesIndex, dataPointIndex: q.dataPointIndex };
            this.markerSize = w;
            this.rows = k;
            0 < m.length && a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
            this.bounds = { x1: e, y1: b, x2: e + this.width, y2: b + this.height }
        };
        E.prototype.render = function() {
            var a = this.bounds.x1,
                d = this.bounds.y1,
                c = this.markerMargin,
                b = this.maxWidth,
                e = this.maxHeight,
                f = this.markerSize,
                l = this.rows;
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            for (var h = 0, m = 0; m < l.length; m++) {
                for (var k = l[m], n = 0, p = 0; p <
                    k.items.length; p++) {
                    var q = k.items[p],
                        g = q.textBlock.x + a + (0 === p ? 0.2 * f : this.horizontalSpacing),
                        s = d + h,
                        r = g;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(a, d, b, Math.max(e - e % this.lineHeight, 0));
                    this.ctx.clip();
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(g - 0.1 * this.lineHeight, s + this.lineHeight /
                        2), this.ctx.lineTo(g + 0.85 * this.lineHeight, s + this.lineHeight / 2), this.ctx.stroke(), r -= 0.1 * this.lineHeight;
                    if ("error" === q.chartType) {
                        this.ctx.strokeStyle = this.errorMarkerColor[0];
                        this.ctx.lineWidth = f / 8;
                        this.ctx.beginPath();
                        var w = g - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                            u = s + 0.15 * this.lineHeight,
                            v = 0.7 * this.lineHeight,
                            y = v + 0.02 * this.lineHeight;
                        this.ctx.moveTo(w, u);
                        this.ctx.lineTo(w + v, u);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(w + v / 2, u);
                        this.ctx.lineTo(w + v / 2, u + y);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(w, u + y);
                        this.ctx.lineTo(w + v, u + y);
                        this.ctx.stroke();
                        this.errorMarkerColor.shift()
                    }
                    $.drawMarker(g + f / 2, s + this.lineHeight / 2, this.ctx, q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor, q.markerBorderColor, q.markerBorderThickness);
                    q.textBlock.x = g + c + f;
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) q.textBlock.x += 0.1 * this.lineHeight;
                    q.textBlock.y = Math.round(s + this.lineHeight / 2);
                    q.textBlock.render(!0);
                    this.ctx.restore();
                    n = 0 < p ? Math.max(n, q.textBlock.height) : q.textBlock.height;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                    g = Q(q.id);
                    this.ghostCtx.fillStyle = g;
                    this.ghostCtx.beginPath();
                    this.ghostCtx.fillRect(r, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - r, q.textBlock.height);
                    q.x1 = this.chart._eventManager.objectMap[q.id].x1 = r;
                    q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
                    q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x +
                        q.textBlock.width;
                    q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + q.textBlock.height - this.lineHeight / 2
                }
                h += n
            }
        };
        na(H, ba);
        H.prototype.getDefaultAxisPlacement = function() {
            var a = this.type;
            if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" ===
                a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
            if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
            if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
            "error" !== a && window.console.log("Unknown Chart Type: " + a);
            return null
        };
        H.getDefaultLegendMarker = function(a) {
            if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" ===
                a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
            if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
            if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
            if ("error" === a) return "none";
            window.console.log("Unknown Chart Type: " + a);
            return null
        };
        H.prototype.getDataPointAtX =
            function(a, d) {
                if (!this.dataPoints || 0 === this.dataPoints.length) return null;
                var c = { dataPoint: null, distance: Infinity, index: NaN },
                    b = null,
                    e = 0,
                    f = 0,
                    l = 1,
                    h = Infinity,
                    m = 0,
                    k = 0,
                    n = 0;
                "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (n = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n =
                    0 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
                for (;;) { f = 0 < l ? n + e : n - e; if (0 <= f && f < this.dataPoints.length) { var b = this.dataPoints[f],
                            p = this.axisX.logarithmic ? b.x > a ? b.x / a : a / b.x : Math.abs(b.x - a);
                        p < c.distance && (c.dataPoint = b, c.distance = p, c.index = f);
                        b = p;
                        b <= h ? h = b : 0 < l ? m++ : k++; if (1E3 < m && 1E3 < k) break } else if (0 > n - e && n + e >= this.dataPoints.length) break; - 1 === l ? (e++, l = 1) : l = -1 }
                return d || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ?
                    a.getTime() : a) ? d && null !== c.dataPoint ? c : null : c
            };
        H.prototype.getDataPointAtXY = function(a, d, c) {
            if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || d < this.chart.plotArea.y1 || d > this.chart.plotArea.y2) return null;
            c = c || !1;
            var b = [],
                e = 0,
                f = 0,
                l = 1,
                h = !1,
                m = Infinity,
                k = 0,
                n = 0,
                p = 0;
            if ("none" !== this.chart.plotInfo.axisPlacement)
                if (p = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: d }), this.axisX.logarithmic) var q = Math.log(this.dataPoints[this.dataPoints.length -
                        1].x / this.dataPoints[0].x),
                    p = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(p / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
                else q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * (p - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            for (;;) {
                f = 0 < l ? p + e : p - e;
                if (0 <= f && f < this.dataPoints.length) {
                    var q = this.chart._eventManager.objectMap[this.dataPointIds[f]],
                        g = this.dataPoints[f],
                        s = null;
                    if (q) {
                        switch (this.type) {
                            case "column":
                            case "stackedColumn":
                            case "stackedColumn100":
                            case "bar":
                            case "stackedBar":
                            case "stackedBar100":
                            case "rangeColumn":
                            case "rangeBar":
                            case "waterfall":
                            case "error":
                                a >=
                                    q.x1 && (a <= q.x2 && d >= q.y1 && d <= q.y2) && (b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y1 - d), Math.abs(q.y2 - d)) }), h = !0);
                                break;
                            case "line":
                            case "stepLine":
                            case "spline":
                            case "area":
                            case "stepArea":
                            case "stackedArea":
                            case "stackedArea100":
                            case "splineArea":
                            case "scatter":
                                var r = ka("markerSize", g, this) || 4,
                                    w = c ? 20 : r,
                                    s = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                                s <= w && b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: s });
                                q =
                                    Math.abs(q.x1 - a);
                                q <= m ? m = q : 0 < l ? k++ : n++;
                                s <= r / 2 && (h = !0);
                                break;
                            case "rangeArea":
                            case "rangeSplineArea":
                                r = ka("markerSize", g, this) || 4;
                                w = c ? 20 : r;
                                s = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - d, 2)));
                                s <= w && b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: s });
                                q = Math.abs(q.x1 - a);
                                q <= m ? m = q : 0 < l ? k++ : n++;
                                s <= r / 2 && (h = !0);
                                break;
                            case "bubble":
                                r = q.size;
                                s = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                                s <= r / 2 && (b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: s
                                }), h = !0);
                                break;
                            case "pie":
                            case "doughnut":
                                r = q.center;
                                w = "doughnut" === this.type ? q.percentInnerRadius * q.radius : 0;
                                s = Math.sqrt(Math.pow(r.x - a, 2) + Math.pow(r.y - d, 2));
                                s < q.radius && s > w && (s = Math.atan2(d - r.y, a - r.x), 0 > s && (s += 2 * Math.PI), s = Number(((180 * (s / Math.PI) % 360 + 360) % 360).toFixed(12)), r = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), w = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === w && 1 < q.endAngle && (w = 360), r >= w && 0 !== g.y && (w += 360, s < r && (s += 360)), s > r && s < w && (b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: 0
                                }), h = !0));
                                break;
                            case "funnel":
                            case "pyramid":
                                s = q.funnelSection;
                                d > s.y1 && d < s.y4 && (s.y6 ? d > s.y6 ? (f = s.x6 + (s.x5 - s.x6) / (s.y5 - s.y6) * (d - s.y6), s = s.x3 + (s.x4 - s.x3) / (s.y4 - s.y3) * (d - s.y3)) : (f = s.x1 + (s.x6 - s.x1) / (s.y6 - s.y1) * (d - s.y1), s = s.x2 + (s.x3 - s.x2) / (s.y3 - s.y2) * (d - s.y2)) : (f = s.x1 + (s.x4 - s.x1) / (s.y4 - s.y1) * (d - s.y1), s = s.x2 + (s.x3 - s.x2) / (s.y3 - s.y2) * (d - s.y2)), a > f && a < s && (b.push({ dataPoint: g, dataPointIndex: q.dataPointIndex, dataSeries: this, distance: 0 }), h = !0));
                                break;
                            case "boxAndWhisker":
                                if (a >=
                                    q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4) b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), h = !0;
                                break;
                            case "candlestick":
                                if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y2 - q.borderThickness / 2 && d <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness &&
                                    d >= q.y1 && d <= q.y4) b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), h = !0;
                                break;
                            case "ohlc":
                                if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y2 && d <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && d >= q.y1 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y4 + q.borderThickness / 2) b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a),
                                        Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d))
                                }), h = !0
                        }
                        if (h || 1E3 < k && 1E3 < n) break
                    }
                } else if (0 > p - e && p + e >= this.dataPoints.length) break; - 1 === l ? (e++, l = 1) : l = -1
            }
            a = null;
            for (d = 0; d < b.length; d++) a ? b[d].distance <= a.distance && (a = b[d]) : a = b[d];
            return a
        };
        H.prototype.getMarkerProperties = function(a, d, c, b) {
            var e = this.dataPoints;
            return {
                x: d,
                y: c,
                ctx: b,
                type: e[a].markerType ? e[a].markerType : this.markerType,
                size: e[a].markerSize ? e[a].markerSize : this.markerSize,
                color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
                borderColor: e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
                borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
            }
        };
        na(F, ba);
        F.prototype.createExtraLabelsForLog = function(a) {
            a = (a || 0) + 1;
            if (!(5 < a)) {
                var d = this.logLabelValues[0] || this.intervalStartPosition;
                if (Math.log(this.range) / Math.log(d / this.viewportMinimum) <
                    this.noTicks - 1) { for (var c = F.getNiceNumber((d - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), !0), b = Math.ceil(this.viewportMinimum / c) * c; b < d; b += c) b < this.viewportMinimum || this.logLabelValues.push(b);
                    this.logLabelValues.sort(Ra);
                    this.createExtraLabelsForLog(a) }
            }
        };
        F.prototype.createLabels = function() {
            var a, d, c = 0,
                b = 0,
                e, f = 0,
                l = 0,
                b = 0,
                b = this.interval,
                h = 0,
                m, k = 0.6 * this.chart.height,
                n;
            a = !1;
            var p = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                q = p.length ? r(this.scaleBreaks.firstBreakIndex) ?
                0 : this.scaleBreaks.firstBreakIndex : 0;
            if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
                e = this.viewportMaximum;
                if (this.labels) { a = Math.ceil(b); for (var b = Math.ceil(this.intervalStartPosition), g = !1, c = b; c < this.viewportMaximum; c += a)
                        if (this.labels[c]) g = !0;
                        else { g = !1; break }
                    g && (this.interval = a, this.intervalStartPosition = b) }
                if (this.logarithmic && !this.equidistantInterval)
                    for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, g = q; b < this.logLabelValues.length; b++)
                        if (c =
                            this.logLabelValues[b], c < this.viewportMinimum) b++;
                        else {
                            for (; g < p.length && c > p[g].endValue; g++);
                            a = g < p.length && c >= p[g].startValue && c <= p[g].endValue;
                            n = c;
                            a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: n, label: this.labels[n] ? this.labels[n] : null }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : ea(n, this.valueFormatString, this.chart._cultureInfo), a = new ia(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: f,
                                maxHeight: l,
                                angle: this.labelAngle,
                                text: this.prefix + a + this.suffix,
                                backgroundColor: this.labelBackgroundColor,
                                borderColor: this.labelBorderColor,
                                cornerRadius: this.labelCornerRadius,
                                textAlign: this.labelTextAlign,
                                fontSize: this.labelFontSize,
                                fontFamily: this.labelFontFamily,
                                fontWeight: this.labelFontWeight,
                                fontColor: this.labelFontColor,
                                fontStyle: this.labelFontStyle,
                                textBaseline: "middle",
                                borderThickness: 0
                            }), this._labels.push({ position: n, textBlock: a, effectiveHeight: null }))
                        }
                g = q;
                for (c = this.intervalStartPosition; c <= e; c = parseFloat(1E-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase,
                        this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
                    for (; g < p.length && c > p[g].endValue; g++);
                    a = g < p.length && c >= p[g].startValue && c <= p[g].endValue;
                    n = c;
                    a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: n, label: this.labels[n] ? this.labels[n] : null }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : ea(n, this.valueFormatString, this.chart._cultureInfo), a = new ia(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: f,
                        maxHeight: l,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        textAlign: this.labelTextAlign,
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        borderThickness: this.labelBorderThickness,
                        cornerRadius: this.labelCornerRadius,
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle"
                    }), this._labels.push({ position: n, textBlock: a, effectiveHeight: null }))
                }
            } else
                for (this.intervalStartPosition =
                    this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), e = Xa(new Date(this.viewportMaximum), this.interval, this.intervalType), g = q, c = this.intervalStartPosition; c < e; Xa(c, b, this.intervalType)) {
                    for (a = c.getTime(); g < p.length && a > p[g].endValue; g++);
                    n = a;
                    a = g < p.length && a >= p[g].startValue && a <= p[g].endValue;
                    a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: new Date(n), label: this.labels[n] ? this.labels[n] : null }) : "axisX" === this.type && this.labels[n] ?
                        this.labels[n] : Aa(n, this.valueFormatString, this.chart._cultureInfo), a = new ia(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: f,
                            backgroundColor: this.labelBackgroundColor,
                            borderColor: this.labelBorderColor,
                            borderThickness: this.labelBorderThickness,
                            cornerRadius: this.labelCornerRadius,
                            maxHeight: l,
                            angle: this.labelAngle,
                            text: this.prefix + a + this.suffix,
                            textAlign: this.labelTextAlign,
                            fontSize: this.labelFontSize,
                            fontFamily: this.labelFontFamily,
                            fontWeight: this.labelFontWeight,
                            fontColor: this.labelFontColor,
                            fontStyle: this.labelFontStyle,
                            textBaseline: "middle"
                        }), this._labels.push({ position: n, textBlock: a, effectiveHeight: null, breaksLabelType: void 0 }))
                }
            if ("bottom" === this._position || "top" === this._position) h = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ?
                Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * T[this.intervalType + "Duration"] * this.interval, f = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (l = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
            else if ("left" === this._position || "right" === this._position) h = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height *
                Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * T[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (f = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), l = "undefined" ===
                typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
            for (b = 0; b < this._labels.length; b++) { a = this._labels[b].textBlock;
                a.maxWidth = f;
                a.maxHeight = l; var s = a.measureText();
                m = s.height }
            e = [];
            q = p = 0;
            if (this.labelAutoFit || this.options.labelAutoFit)
                if (r(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position ||
                    "top" === this._position)
                    if (f = 0.9 * h >> 0, q = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = f;
                        this.sessionVariables.labelMaxHeight = l;
                        this.sessionVariables.labelAngle = this.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (c = 0; c < this._labels.length; c++)
                            if (!this._labels[c].breaksLabelType) {
                                a = this._labels[c].textBlock;
                                for (var v, g = a.text.split(" "), b = 0; b < g.length; b++) n = g[b], this.ctx.font = a.fontStyle + " " +
                                    a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, n = this.ctx.measureText(n), n.width > q && (v = c, q = n.width)
                            }
                        c = 0;
                        for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                            if (!this._labels[c].breaksLabelType) {
                                a = this._labels[c].textBlock;
                                s = a.measureText();
                                for (g = c + 1; g < this._labels.length; g++)
                                    if (!this._labels[g].breaksLabelType) { d = this._labels[g].textBlock;
                                        d = d.measureText(); break }
                                e.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                                b = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (l - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                if (r(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                    if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : Math.min((b - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), n = (k - (m + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI /
                                            180 * Math.abs(-25)), !r(this.options.labelWrap)) this.labelWrap ? r(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), this.sessionVariables.labelWrap = this.labelWrap, d && s.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle) : r(this.options.labelMaxWidth) ?
                                        (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelMaxWidth = f, d && s.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelWrap = this.labelWrap);
                                    else {
                                        if (r(this.options.labelWrap))
                                            if (!r(this.options.labelMaxWidth)) this.options.labelMaxWidth <
                                                f ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = l);
                                            else if (!r(d))
                                            if (b = s.width + d.width >> 0, g = this.labelFontSize, q < f) b - 2 * f > p && (p = b - 2 * f, b >= 2 * f && b < 2.2 * f ? (this.sessionVariables.labelMaxWidth = f, r(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ?
                                                g : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * f && b < 2.8 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = g) : b >= 2.8 * f && b < 3.2 * f ? (this.sessionVariables.labelMaxWidth = Math.max(f, q), this.sessionVariables.labelWrap = !0, r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ?
                                                g : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * f && b < 3.6 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * f && b < 5 * f ? (r(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n) : b > 5 * f && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelFontSize = g, this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelAngle = this.labelAngle));
                                            else if (v === c && (0 === v && q + this._labels[v + 1].textBlock.measureText().width - 2 * f > p || v === this._labels.length - 1 && q + this._labels[v - 1].textBlock.measureText().width - 2 * f > p || 0 < v && v < this._labels.length - 1 && q + this._labels[v + 1].textBlock.measureText().width - 2 * f > p &&
                                                q + this._labels[v - 1].textBlock.measureText().width - 2 * f > p)) p = 0 === v ? q + this._labels[v + 1].textBlock.measureText().width - 2 * f : q + this._labels[v - 1].textBlock.measureText().width - 2 * f, this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n;
                                        else if (0 === p)
                                            for (this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), s = a.measureText(), b < this._labels.length - 1 && (g = b + 1, d = this._labels[g].textBlock, d.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), d = d.measureText(), s.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25))
                                    }
                                else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : Math.min((b - f * Math.cos(Math.PI /
                                    180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), n = 0 != this.labelAngle ? (k - (m + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : f, this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - n * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, r(this.options.labelWrap)) ? r(this.options.labelWrap) && (this.labelWrap && !r(this.options.labelMaxWidth) ?
                                    (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelMaxHeight = l) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelMaxHeight = b < 0.9 * h ? 0.9 * h : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ?
                                    this.options.labelMaxWidth : n) : (r(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = l)
                            }
                        for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap,
                            a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                    } else
                        for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = r(this.options.labelMaxWidth) ? r(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = r(this.options.labelFontSize) ? r(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize :
                            this.options.labelFontSize, a.angle = this.labelAngle = r(this.options.labelAngle) ? r(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = r(this.options.labelWrap) ? r(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = r(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = l : this.sessionVariables.labelMaxHeight,
                            a.measureText();
            else if ("left" === this._position || "right" === this._position)
                if (f = r(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, l = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                    this.sessionVariables.labelFontSize = this.labelFontSize;
                    this.sessionVariables.labelMaxWidth = f;
                    this.sessionVariables.labelMaxHeight = l;
                    this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ?
                        0 : this.sessionVariables.labelAngle;
                    this.sessionVariables.labelWrap = this.labelWrap;
                    for (c = 0; c < this._labels.length; c++)
                        if (!this._labels[c].breaksLabelType) {
                            a = this._labels[c].textBlock;
                            s = a.measureText();
                            for (g = c + 1; g < this._labels.length; g++)
                                if (!this._labels[g].breaksLabelType) { d = this._labels[g].textBlock;
                                    d = d.measureText(); break }
                            e.push(a.height);
                            this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                            b = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (l - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                            Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                            Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                            r(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? r(this.options.labelWrap) ? r(this.options.labelWrap) && (r(this.options.labelMaxWidth) ? r(d) || (h = s.height + d.height >> 0, h - 2 * l > q && (q = h - 2 * l, h >= 2 * l && h < 2.4 * l ? (r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelFontSize =
                                r(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : h >= 2.4 * l && h < 2.8 * l ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : h >= 2.8 * l && h < 3.2 * l ? (this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelWrap = !0, r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ?
                                this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : h >= 3.2 * l && h < 3.6 * l ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : h > 3.6 * l && h < 10 * l ? (r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ?
                                this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : h > 10 * l && h < 50 * l && (r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight =
                                l, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ?
                                this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = l) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? f : Math.min((b - l * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), l), r(this.options.labelWrap)) ? r(this.options.labelWrap) && (this.labelWrap && !r(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth :
                                this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : b, r(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth =
                                f) : (this.sessionVariables.labelMaxHeight = l, r(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap)
                        }
                    for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap =
                        this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                } else
                    for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = r(this.options.labelMaxWidth) ? r(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = r(this.options.labelFontSize) ? r(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize =
                        this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = r(this.options.labelAngle) ? r(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = r(this.options.labelWrap) ? r(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = r(this.sessionVariables.labelMaxHeight) ?
                        this.sessionVariables.labelMaxHeight = l : this.sessionVariables.labelMaxHeight, a.measureText();
            for (c = 0; c < this.stripLines.length; c++) {
                var f = this.stripLines[c],
                    x;
                if ("outside" === f.labelPlacement) {
                    l = this.sessionVariables.labelMaxWidth;
                    if ("bottom" === this._position || "top" === this._position) r(f.options.labelWrap) && !r(this.sessionVariables.stripLineLabelMaxHeight) ? x = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = x = f.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                    if ("left" === this._position || "right" === this._position) r(f.options.labelWrap) && !r(this.sessionVariables.stripLineLabelMaxHeight) ? x = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = x = f.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                    r(f.labelBackgroundColor) && (f.labelBackgroundColor = "#EEEEEE")
                } else l = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, x = r(f.options.labelWrap) || f.labelWrap ? "bottom" === this._position ||
                    "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, r(f.labelBackgroundColor) && (r(f.startValue) && 0 !== f.startValue ? f.labelBackgroundColor = w ? "transparent" : null : f.labelBackgroundColor = "#EEEEEE");
                a = new ia(this.ctx, {
                    x: 0,
                    y: 0,
                    backgroundColor: f.labelBackgroundColor,
                    borderColor: f.labelBorderColor,
                    borderThickness: f.labelBorderThickness,
                    cornerRadius: f.labelCornerRadius,
                    maxWidth: f.options.labelMaxWidth ? f.options.labelMaxWidth : l,
                    maxHeight: x,
                    angle: this.labelAngle,
                    text: f.labelFormatter ?
                        f.labelFormatter({ chart: this.chart, axis: this, stripLine: f }) : f.label,
                    textAlign: this.labelTextAlign,
                    fontSize: "outside" === f.labelPlacement ? f.options.labelFontSize ? f.labelFontSize : this.labelFontSize : f.labelFontSize,
                    fontFamily: "outside" === f.labelPlacement ? f.options.labelFontFamily ? f.labelFontFamily : this.labelFontFamily : f.labelFontFamily,
                    fontWeight: "outside" === f.labelPlacement ? f.options.labelFontWeight ? f.labelFontWeight : this.labelFontWeight : f.labelFontWeight,
                    fontColor: f.labelFontColor || f.color,
                    fontStyle: "outside" ===
                        f.labelPlacement ? f.options.labelFontStyle ? f.labelFontStyle : this.fontWeight : f.labelFontStyle,
                    textBaseline: "middle"
                });
                this._stripLineLabels.push({ position: f.value, textBlock: a, effectiveHeight: null, stripLine: f })
            }
        };
        F.prototype.createLabelsAndCalculateWidth = function() {
            var a = 0,
                d = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var c = this.chart.isNavigator ? 0 : 5;
            if ("left" === this._position || "right" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                    for (d =
                        0; d < this._labels.length; d++) { var b = this._labels[d].textBlock,
                            e = b.measureText(),
                            f = 0,
                            f = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                        a < f && (a = f);
                        this._labels[d].effectiveWidth = f }
                for (d = 0; d < this._stripLineLabels.length; d++) "outside" === this._stripLineLabels[d].stripLine.labelPlacement && (this._stripLineLabels[d].stripLine.value >= this.viewportMinimum && this._stripLineLabels[d].stripLine.value <= this.viewportMaximum) &&
                    (b = this._stripLineLabels[d].textBlock, e = b.measureText(), f = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[d].effectiveWidth = f)
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + c
        };
        F.prototype.createLabelsAndCalculateHeight = function() {
            var a = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var d, c = 0,
                b = this.chart.isNavigator ? 0 : 5;
            if ("bottom" === this._position || "top" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                    for (c = 0; c < this._labels.length; c++) { d = this._labels[c].textBlock; var e = d.measureText(),
                            f = 0,
                            f = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                        a < f && (a = f);
                        this._labels[c].effectiveHeight = f }
                for (c = 0; c < this._stripLineLabels.length; c++) "outside" ===
                    this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum) && (d = this._stripLineLabels[c].textBlock, e = d.measureText(), f = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[c].effectiveHeight = f)
            }
            return (this.title ? this._titleTextBlock.measureText().height +
                2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + b
        };
        F.setLayout = function(a, d, c, b, e, f) {
            var l, h, m, k, n = a[0] ? a[0].chart : d[0].chart,
                p = n.isNavigator ? 0 : 10,
                q = n._axes;
            if (a && 0 < a.length)
                for (var g = 0; g < a.length; g++) a[g] && a[g].calculateAxisParameters();
            if (d && 0 < d.length)
                for (g = 0; g < d.length; g++) d[g].calculateAxisParameters();
            if (c && 0 < c.length)
                for (g = 0; g < c.length; g++) c[g].calculateAxisParameters();
            if (b && 0 < b.length)
                for (g = 0; g < b.length; g++) b[g].calculateAxisParameters();
            for (g = 0; g < q.length; g++)
                if (q[g] && q[g].scaleBreaks &&
                    q[g].scaleBreaks._appliedBreaks.length)
                    for (var s = q[g].scaleBreaks._appliedBreaks, w = 0; w < s.length && !(s[w].startValue > q[g].viewportMaximum); w++) s[w].endValue < q[g].viewportMinimum || (r(q[g].scaleBreaks.firstBreakIndex) && (q[g].scaleBreaks.firstBreakIndex = w), s[w].startValue >= q[g].viewPortMinimum && (q[g].scaleBreaks.lastBreakIndex = w));
            for (var v = w = 0, u = 0, z = 0, y = 0, x = 0, D = 0, A, F, E = h = 0, H, J, K, s = H = J = K = !1, g = 0; g < q.length; g++) q[g] && q[g].title && (q[g]._titleTextBlock = new ia(q[g].ctx, {
                text: q[g].title,
                horizontalAlign: "center",
                fontSize: q[g].titleFontSize,
                fontFamily: q[g].titleFontFamily,
                fontWeight: q[g].titleFontWeight,
                fontColor: q[g].titleFontColor,
                fontStyle: q[g].titleFontStyle,
                borderColor: q[g].titleBorderColor,
                borderThickness: q[g].titleBorderThickness,
                backgroundColor: q[g].titleBackgroundColor,
                cornerRadius: q[g].titleCornerRadius,
                textBaseline: "top"
            }));
            for (g = 0; g < q.length; g++)
                if (q[g].title) switch (q[g]._position) {
                    case "left":
                        q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.height;
                        q[g]._titleTextBlock.maxHeight = q[g].titleWrap ?
                            0.8 * f.width : 1.5 * q[g].titleFontSize;
                        q[g]._titleTextBlock.angle = -90;
                        break;
                    case "right":
                        q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.height;
                        q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? 0.8 * f.width : 1.5 * q[g].titleFontSize;
                        q[g]._titleTextBlock.angle = 90;
                        break;
                    default:
                        q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.width, q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? 0.8 * f.height : 1.5 * q[g].titleFontSize, q[g]._titleTextBlock.angle = 0
                }
                if ("normal" === e) {
                    for (var z = [], y = [], x = [], D = [], M = [], N = [], P = [], Q = []; 4 >
                        w;) {
                        var G = 0,
                            T = 0,
                            S = 0,
                            X = 0,
                            W = e = 0,
                            L = 0,
                            Z = 0,
                            U = 0,
                            V = 0,
                            O = 0,
                            $ = 0;
                        if (c && 0 < c.length)
                            for (x = [], g = O = 0; g < c.length; g++) x.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateWidth() : 0)), O += x[g], L += c[g] && !n.isNavigator ? c[g].margin : 0;
                        else x.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                        P.push(x);
                        if (b && 0 < b.length)
                            for (D = [], g = $ = 0; g < b.length; g++) D.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateWidth() : 0)), $ += D[g], Z += b[g] ? b[g].margin : 0;
                        else D.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                        Q.push(D);
                        l = Math.round(f.x1 + O + L);
                        m = Math.round(f.x2 - $ - Z > n.width - p ? n.width - p : f.x2 - $ - Z);
                        if (a && 0 < a.length)
                            for (z = [], g = U = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates = {}), a[g].lineCoordinates.width = Math.abs(m - l), a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.width ? a[g].titleMaxWidth : a[g].lineCoordinates.width), z.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateHeight() : 0)), U += z[g], e += a[g] && !n.isNavigator ? a[g].margin : 0;
                        else z.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() :
                            0));
                        M.push(z);
                        if (d && 0 < d.length)
                            for (y = [], g = V = 0; g < d.length; g++) d[g] && (d[g].lineCoordinates = {}), d[g].lineCoordinates.width = Math.abs(m - l), d[g].title && (d[g]._titleTextBlock.maxWidth = 0 < d[g].titleMaxWidth && d[g].titleMaxWidth < d[g].lineCoordinates.width ? d[g].titleMaxWidth : d[g].lineCoordinates.width), y.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateHeight() : 0)), V += y[g], W += d[g] && !n.isNavigator ? d[g].margin : 0;
                        else y.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
                        N.push(y);
                        if (a && 0 < a.length)
                            for (g =
                                0; g < a.length; g++) a[g] && (a[g].lineCoordinates.x1 = l, m = Math.round(f.x2 - $ - Z > n.width - p ? n.width - p : f.x2 - $ - Z), a[g]._labels && 1 < a[g]._labels.length && (h = k = 0, k = a[g]._labels[1], h = "dateTime" === a[g].valueType ? a[g]._labels[a[g]._labels.length - 2] : a[g]._labels[a[g]._labels.length - 1], v = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), u = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height -
                                    h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle))), !a[g] || (!a[g].labelAutoFit || r(A) || r(F) || n.isNavigator || n.stockChart) || (h = 0, 0 < a[g].labelAngle ? F + u > m && (h += 0 < a[g].labelAngle ? F + u - m - $ : 0) : 0 > a[g].labelAngle ? A - v < l && A - v < a[g].viewportMinimum && (E = l - (L + a[g].tickLength + x + A - v + a[g].labelFontSize / 2)) : 0 === a[g].labelAngle && (F + u > m && (h = F + u / 2 - m - $), A - v < l && A - v < a[g].viewportMinimum && (E = l - L - a[g].tickLength - x - A + v / 2)), a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 < a[g].labelAngle &&
                                    0 < h ? m -= h : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 > a[g].labelAngle && 0 < E ? l += E : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 === a[g].labelAngle && (0 < E && (l += E), 0 < h && (m -= h))), n.panEnabled ? U = r(n.sessionVariables.axisX.height) ? n.sessionVariables.axisX.height = U : n.sessionVariables.axisX.height : n.sessionVariables.axisX.height = U, h = Math.round(f.y2 - U - e + G), k = Math.round(f.y2), a[g].lineCoordinates.x2 = m, a[g].lineCoordinates.width = m - l, a[g].lineCoordinates.y1 =
                                h, a[g].lineCoordinates.y2 = h + a[g].lineThickness / 2, "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.y1 = a[g].lineCoordinates.y1 + z[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0) - ("inside" === a[g].tickPlacement ? a[g].tickLength : 0), a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2), a[g].bounds = { x1: l, y1: h, x2: m, y2: k - (U + e - z[g] - G), width: m - l, height: k - h }), G += z[g] + a[g].margin;
                        if (d && 0 < d.length)
                            for (g = 0; g < d.length; g++) d[g].lineCoordinates.x1 = Math.round(f.x1 + O + L), d[g].lineCoordinates.x2 =
                                Math.round(f.x2 - $ - Z > n.width - p ? n.width - p : f.x2 - $ - Z), d[g].lineCoordinates.width = Math.abs(m - l), d[g]._labels && 1 < d[g]._labels.length && (k = d[g]._labels[1], h = "dateTime" === d[g].valueType ? d[g]._labels[d[g]._labels.length - 2] : d[g]._labels[d[g]._labels.length - 1], v = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), u = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height -
                                    h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle))), n.panEnabled ? V = r(n.sessionVariables.axisX2.height) ? n.sessionVariables.axisX2.height = V : n.sessionVariables.axisX2.height : n.sessionVariables.axisX2.height = V, h = Math.round(f.y1), k = Math.round(f.y2 + d[g].margin), d[g].lineCoordinates.y1 = h + V + W - T, d[g].lineCoordinates.y2 = h, "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.y1 = d[g - 1].bounds.y1 - y[g] + (d[g]._titleTextBlock ? d[g]._titleTextBlock.height : 0)), d[g].bounds = {
                                    x1: l,
                                    y1: h + (V +
                                        W - y[g] - T),
                                    x2: m,
                                    y2: k,
                                    width: m - l,
                                    height: k - h
                                }, T += y[g] + d[g].margin;
                        if (c && 0 < c.length)
                            for (g = 0; g < c.length; g++) L = n.isNavigator ? 0 : 10, c[g] && (l = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), L = c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[c[g]._labels.length - 1].textBlock.height / 2 : p, h = Math.round(f.y1 + V + W < Math.max(L, p) ? Math.max(L, p) : f.y1 + V + W), m = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), L = 0 < a.length ? 0 : c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[0].textBlock.height /
                                2 : p, k = Math.round(f.y2 - U - e - L), c[g].lineCoordinates = { x1: l - S, y1: h, x2: m - S, y2: k, height: Math.abs(k - h) }, "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.x1 = c[g].lineCoordinates.x1 - (x[g] - (c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0)) + ("outside" === c[g].tickPlacement ? c[g].tickLength : 0), c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2), c[g].bounds = { x1: l - (x[g] + S), y1: h, x2: m, y2: k, width: m - l, height: k - h }, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth <
                                    c[g].lineCoordinates.height ? c[g].titleMaxWidth : c[g].lineCoordinates.height), S += x[g] + c[g].margin);
                        if (b && 0 < b.length)
                            for (g = 0; g < b.length; g++) b[g] && (l = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2), m = Math.round(l), L = b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[b[g]._labels.length - 1].textBlock.height / 2 : 0, h = Math.round(f.y1 + V + W < Math.max(L, p) ? Math.max(L, p) : f.y1 + V + W), L = 0 < a.length ? 0 : b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[0].textBlock.height / 2 : 0, k = Math.round(f.y2 - (U + e + L)), b[g].lineCoordinates = { x1: l + X, y1: h, x2: l + X, y2: k, height: Math.abs(k - h) }, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.x1 = b[g].lineCoordinates.x1 + (D[g] - (b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0)) - ("outside" === b[g].tickPlacement ? b[g].tickLength : 0) - 2, b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2), b[g].bounds = { x1: l, y1: h, x2: m + (D[g] + X), y2: k, width: m - l, height: k - h }, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.height ? b[g].titleMaxWidth :
                                b[g].lineCoordinates.height), X += D[g] + b[g].margin);
                        if (a && 0 < a.length)
                            for (g = 0; g < a.length; g++) a[g] && (a[g].calculateValueToPixelConversionParameters(), a[g].calculateBreaksSizeInValues(), a[g]._labels && 1 < a[g]._labels.length && (A = (a[g].logarithmic ? Math.log(a[g]._labels[1].position / a[g].viewportMinimum) / a[g].conversionParameters.lnLogarithmBase : a[g]._labels[1].position - a[g].viewportMinimum) * Math.abs(a[g].conversionParameters.pixelPerUnit) + a[g].lineCoordinates.x1, l = a[g]._labels[a[g]._labels.length - ("dateTime" ===
                                a[g].valueType ? 2 : 1)].position, l = a[g].getApparentDifference(a[g].viewportMinimum, l), F = a[g].logarithmic ? (1 < l ? Math.log(l) / a[g].conversionParameters.lnLogarithmBase * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1 : (0 < l ? l * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1));
                        if (d && 0 < d.length)
                            for (g = 0; g < d.length; g++) d[g].calculateValueToPixelConversionParameters(), d[g].calculateBreaksSizeInValues(), d[g]._labels && 1 < d[g]._labels.length && (A = (d[g].logarithmic ?
                                    Math.log(d[g]._labels[1].position / d[g].viewportMinimum) / d[g].conversionParameters.lnLogarithmBase : d[g]._labels[1].position - d[g].viewportMinimum) * Math.abs(d[g].conversionParameters.pixelPerUnit) + d[g].lineCoordinates.x1, l = d[g]._labels[d[g]._labels.length - ("dateTime" === d[g].valueType ? 2 : 1)].position, l = d[g].getApparentDifference(d[g].viewportMinimum, l), F = d[g].logarithmic ? (1 < l ? Math.log(l) / d[g].conversionParameters.lnLogarithmBase * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1 :
                                (0 < l ? l * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1);
                        for (g = 0; g < q.length; g++) "axisY" === q[g].type && (q[g].calculateValueToPixelConversionParameters(), q[g].calculateBreaksSizeInValues());
                        if (0 < w) {
                            if (a && 0 < a.length)
                                for (g = 0; g < a.length; g++) s = M[w - 1][g] === M[w][g] ? !0 : !1;
                            else s = !0;
                            if (d && 0 < d.length)
                                for (g = 0; g < d.length; g++) H = N[w - 1][g] === N[w][g] ? !0 : !1;
                            else H = !0;
                            if (c && 0 < c.length)
                                for (g = 0; g < c.length; g++) J = P[w - 1][g] === P[w][g] ? !0 : !1;
                            else J = !0;
                            if (b && 0 < b.length)
                                for (g = 0; g < b.length; g++) K = Q[w -
                                    1][g] === Q[w][g] ? !0 : !1;
                            else K = !0
                        }
                        if (s && H && J && K) break;
                        w++
                    }
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), d[g].calculateBreaksInPixels();
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels()
                } else {
                    p = [];
                    A = [];
                    E = [];
                    v = [];
                    F = [];
                    u = [];
                    M = [];
                    for (N = []; 4 > w;) {
                        U = X = T = S = Z = L = W = e = Q = P = G = V = 0;
                        if (a && 0 < a.length)
                            for (E = [], g = X = 0; g < a.length; g++) E.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateWidth() : 0)), X += E[g], e += a[g] && !n.isNavigator ? a[g].margin : 0;
                        else E.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                        M.push(E);
                        if (d && 0 < d.length)
                            for (v = [], g = U = 0; g < d.length; g++) v.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateWidth() : 0)), U += v[g], W += d[g] ? d[g].margin : 0;
                        else v.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() :
                            0));
                        N.push(v);
                        if (c && 0 < c.length)
                            for (g = 0; g < c.length; g++) c[g].lineCoordinates = {}, l = Math.round(f.x1 + X + e), m = Math.round(f.x2 - U - W > n.width - 10 ? n.width - 10 : f.x2 - U - W), c[g].labelAutoFit && !r(z) && (0 < !a.length && (l = 0 > c[g].labelAngle ? Math.max(l, z) : 0 === c[g].labelAngle ? Math.max(l, z / 2) : l), 0 < !d.length && (m = 0 < c[g].labelAngle ? m - y / 2 : 0 === c[g].labelAngle ? m - y / 2 : m)), c[g].lineCoordinates.x1 = l, c[g].lineCoordinates.x2 = m, c[g].lineCoordinates.width = Math.abs(m - l), c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth <
                                c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width);
                        if (b && 0 < b.length)
                            for (g = 0; g < b.length; g++) b[g].lineCoordinates = {}, l = Math.round(f.x1 + X + e), m = Math.round(f.x2 - U - W > b[g].chart.width - 10 ? b[g].chart.width - 10 : f.x2 - U - W), b[g] && b[g].labelAutoFit && !r(x) && (0 < !a.length && (l = 0 < b[g].labelAngle ? Math.max(l, x) : 0 === b[g].labelAngle ? Math.max(l, x / 2) : l), 0 < !d.length && (m -= D / 2)), b[g].lineCoordinates.x1 = l, b[g].lineCoordinates.x2 = m, b[g].lineCoordinates.width = Math.abs(m - l), b[g].title && (b[g]._titleTextBlock.maxWidth =
                                0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width);
                        if (c && 0 < c.length)
                            for (p = [], g = S = 0; g < c.length; g++) p.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateHeight() : 0)), S += p[g] + c[g].margin, L += c[g].margin;
                        else p.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                        F.push(p);
                        if (b && 0 < b.length)
                            for (A = [], g = T = 0; g < b.length; g++) A.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateHeight() : 0)), T += A[g], Z += b[g].margin;
                        else A.push(Math.ceil(b[0] ?
                            b[0].createLabelsAndCalculateHeight() : 0));
                        u.push(A);
                        if (c && 0 < c.length)
                            for (g = 0; g < c.length; g++) 0 < c[g]._labels.length && (k = c[g]._labels[0], h = c[g]._labels[c[g]._labels.length - 1], z = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), y = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)));
                        if (b && 0 < b.length)
                            for (g = 0; g < b.length; g++) b[g] && 0 < b[g]._labels.length && (k = b[g]._labels[0], h = b[g]._labels[b[g]._labels.length - 1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), D = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - h.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)));
                        if (n.panEnabled)
                            for (g = 0; g < c.length; g++) p[g] = r(n.sessionVariables.axisY.height) ?
                                n.sessionVariables.axisY.height = p[g] : n.sessionVariables.axisY.height;
                        else
                            for (g = 0; g < c.length; g++) n.sessionVariables.axisY.height = p[g];
                        if (c && 0 < c.length)
                            for (g = c.length - 1; 0 <= g; g--) h = Math.round(f.y2), k = Math.round(f.y2 > c[g].chart.height ? c[g].chart.height : f.y2), c[g].lineCoordinates.y1 = h - (p[g] + c[g].margin + V), c[g].lineCoordinates.y2 = h - (p[g] + c[g].margin + V), "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.y1 = c[g].lineCoordinates.y1 + p[g] - (c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0) - ("inside" ===
                                c[g].tickPlacement ? c[g].tickLength : 0), c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2), c[g].bounds = { x1: l, y1: h - (p[g] + V + c[g].margin), x2: m, y2: k - (V + c[g].margin), width: m - l, height: p[g] }, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width), V += p[g] + c[g].margin;
                        if (b && 0 < b.length)
                            for (g = b.length - 1; 0 <= g; g--) b[g] && (h = Math.round(f.y1), k = Math.round(f.y1 + (A[g] + b[g].margin + G)), b[g].lineCoordinates.y1 =
                                k, b[g].lineCoordinates.y2 = k, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.y1 = k - A[g] + (b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0)), b[g].bounds = { x1: l, y1: h + (b[g].margin + G), x2: m, y2: k, width: m - l, height: T }, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width), G += A[g] + b[g].margin);
                        if (a && 0 < a.length)
                            for (g = 0; g < a.length; g++) {
                                L = a[g]._labels && 0 < a[g]._labels.length ? a[g]._labels[0].textBlock.fontSize /
                                    2 : 0;
                                l = Math.round(f.x1 + e);
                                h = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 < Math.max(L, 10) ? Math.max(L, 10) : f.y1) : f.y1 < Math.max(L, 10) ? Math.max(L, 10) : f.y1;
                                m = Math.round(f.x1 + X + e);
                                k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - S > n.height - Math.max(L, 10) ? n.height - Math.max(L, 10) : f.y2 - S) : f.y2 > n.height - Math.max(L, 10) ? n.height - Math.max(L, 10) : f.y2;
                                if (c && 0 < c.length)
                                    for (L = 0; L < c.length; L++) c[L] && c[L].labelAutoFit && (m = 0 > c[L].labelAngle ? Math.max(m, z) : 0 === c[L].labelAngle ? Math.max(m, z / 2) : m, l =
                                        0 > c[L].labelAngle || 0 === c[L].labelAngle ? m - X : l);
                                if (b && 0 < b.length)
                                    for (L = 0; L < b.length; L++) b[L] && b[L].labelAutoFit && (m = b[L].lineCoordinates.x1, l = m - X);
                                a[g].lineCoordinates = { x1: m - P, y1: h, x2: m - P, y2: k, height: Math.abs(k - h) };
                                "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.x1 = a[g].lineCoordinates.x1 - (E[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0)) + ("outside" === a[g].tickPlacement ? a[g].tickLength : 0), a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2);
                                a[g].bounds = {
                                    x1: m - (E[g] +
                                        P),
                                    y1: h,
                                    x2: m,
                                    y2: k,
                                    width: m - l,
                                    height: k - h
                                };
                                a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.height ? a[g].titleMaxWidth : a[g].lineCoordinates.height);
                                a[g].calculateValueToPixelConversionParameters();
                                a[g].calculateBreaksSizeInValues();
                                P += E[g] + a[g].margin
                            }
                        if (d && 0 < d.length)
                            for (g = 0; g < d.length; g++) {
                                L = d[g]._labels && 0 < d[g]._labels.length ? d[g]._labels[0].textBlock.fontSize / 2 : 0;
                                l = Math.round(f.x1 - e);
                                h = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 <
                                    Math.max(L, 10) ? Math.max(L, 10) : f.y1) : f.y1 < Math.max(L, 10) ? Math.max(L, 10) : f.y1;
                                m = Math.round(f.x2 - U - W);
                                k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - S > n.height - Math.max(L, 10) ? n.height - Math.max(L, 10) : f.y2 - S) : f.y2 > n.height - Math.max(L, 10) ? n.height - Math.max(L, 10) : f.y2;
                                if (c && 0 < c.length)
                                    for (L = 0; L < c.length; L++) c[L] && c[L].labelAutoFit && (m = 0 > c[L].labelAngle ? Math.max(m, z) : 0 === c[L].labelAngle ? Math.max(m, z / 2) : m, l = 0 > c[L].labelAngle || 0 === c[L].labelAngle ? m - U : l);
                                if (b && 0 < b.length)
                                    for (L = 0; L < b.length; L++) b[L] &&
                                        b[L].labelAutoFit && (m = b[L].lineCoordinates.x2, l = m - U);
                                d[g].lineCoordinates = { x1: m + Q, y1: h, x2: m + Q, y2: k, height: Math.abs(k - h) };
                                "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.x1 = d[g].lineCoordinates.x1 + (v[g] - (d[g]._titleTextBlock ? d[g]._titleTextBlock.height : 0) - 2) - ("outside" === d[g].tickPlacement ? d[g].tickLength : 0), d[g].lineCoordinates.x2 = d[g].lineCoordinates.x1 + d[g].lineThickness / 2);
                                d[g].bounds = { x1: d[g].lineCoordinates.x1, y1: h, x2: m + v[g] + Q, y2: k, width: m - l, height: k - h };
                                d[g].title && (d[g]._titleTextBlock.maxWidth =
                                    0 < d[g].titleMaxWidth && d[g].titleMaxWidth < d[g].lineCoordinates.height ? d[g].titleMaxWidth : d[g].lineCoordinates.height);
                                d[g].calculateValueToPixelConversionParameters();
                                d[g].calculateBreaksSizeInValues();
                                Q += v[g] + d[g].margin
                            }
                        for (g = 0; g < q.length; g++) "axisY" === q[g].type && (q[g].calculateValueToPixelConversionParameters(), q[g].calculateBreaksSizeInValues());
                        if (0 < w) {
                            if (a && 0 < a.length)
                                for (g = 0; g < a.length; g++) s = M[w - 1][g] === M[w][g] ? !0 : !1;
                            else s = !0;
                            if (d && 0 < d.length)
                                for (g = 0; g < d.length; g++) H = N[w - 1][g] === N[w][g] ? !0 :
                                    !1;
                            else H = !0;
                            if (c && 0 < c.length)
                                for (g = 0; g < c.length; g++) J = F[w - 1][g] === F[w][g] ? !0 : !1;
                            else J = !0;
                            if (b && 0 < b.length)
                                for (g = 0; g < b.length; g++) K = u[w - 1][g] === u[w][g] ? !0 : !1;
                            else K = !0
                        }
                        if (s && H && J && K) break;
                        w++
                    }
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels();
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(),
                            a[g].calculateBreaksInPixels();
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), d[g].calculateBreaksInPixels()
                }
        };
        F.render = function(a, d, c, b, e) {
            var f = a[0] ? a[0].chart : d[0].chart;
            e = f.ctx;
            f.alignVerticalAxes && f.alignVerticalAxes();
            e.save();
            e.beginPath();
            a[0] && e.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
            d[0] && e.rect(5, d[d.length - 1].bounds.y1, d[0].chart.width - 10, d[0].bounds.height);
            e.clip();
            if (a && 0 < a.length)
                for (var l = 0; l < a.length; l++) a[l].renderLabelsTicksAndTitle();
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderLabelsTicksAndTitle();
            e.restore();
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderLabelsTicksAndTitle();
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderLabelsTicksAndTitle();
            f.preparePlotArea();
            f = f.plotArea;
            e.save();
            e.beginPath();
            e.rect(f.x1, f.y1, Math.abs(f.x2 - f.x1), Math.abs(f.y2 - f.y1));
            e.clip();
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderStripLinesOfThicknessType("value");
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderStripLinesOfThicknessType("value");
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderStripLinesOfThicknessType("value");
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderStripLinesOfThicknessType("value");
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderInterlacedColors();
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderInterlacedColors();
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderInterlacedColors();
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderInterlacedColors();
            e.restore();
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderGrid(),
                    w && (a[l].createMask(), a[l].renderBreaksBackground());
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderGrid(), w && (d[l].createMask(), d[l].renderBreaksBackground());
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderGrid(), w && (c[l].createMask(), c[l].renderBreaksBackground());
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderGrid(), w && (b[l].createMask(), b[l].renderBreaksBackground());
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderAxisLine();
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderAxisLine();
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderAxisLine();
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderAxisLine();
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderStripLinesOfThicknessType("pixel");
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderStripLinesOfThicknessType("pixel");
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderStripLinesOfThicknessType("pixel");
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderStripLinesOfThicknessType("pixel")
        };
        F.prototype.calculateStripLinesThicknessInValues =
            function() {
                for (var a = 0; a < this.stripLines.length; a++)
                    if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                        var d = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                            c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue),
                            d = this.getApparentDifference(d, c);
                        this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value * Math.sqrt(Math.log(Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue) / Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue)) /
                            Math.log(d)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - d) / 2;
                        this.stripLines[a].thickness = d;
                        this.stripLines[a]._thicknessType = "value"
                    }
            };
        F.prototype.calculateBreaksSizeInValues = function() {
            for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ?
                    this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !r(this.scaleBreaks.options.spacing), e, f = 0; f < d.length; f++) e = b || !r(d[f].options.spacing), d[f].spacing = Ta(d[f].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0, d[f].size = 0 > d[f].spacing ? 0 : Math.abs(d[f].spacing / c), this.logarithmic && (d[f].size = Math.pow(this.logarithmBase, d[f].size))
        };
        F.prototype.calculateBreaksInPixels = function() {
            if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
                var a =
                    this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
                for (var d = 0; d < a.length && !(a[d].startValue > this.conversionParameters.maximum); d++) a[d].endValue < this.conversionParameters.minimum || (r(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = d), a[d].startValue >= this.conversionParameters.minimum && (a[d].startPixel = this.convertValueToPixel(a[d].startValue), this.scaleBreaks.lastBreakIndex = d), a[d].endValue <= this.conversionParameters.maximum &&
                    (a[d].endPixel = this.convertValueToPixel(a[d].endValue)))
            }
        };
        F.prototype.renderLabelsTicksAndTitle = function() {
            var a = this,
                d = !1,
                c = 0,
                b = 0,
                e = 1,
                f = 0;
            0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
            if ("undefined" === typeof this.options.interval) {
                if ("bottom" === this._position || "top" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, l, h = this.viewportMaximum, m = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length -
                                1; 0 <= k; k--) { p = this._labels[k]; if (p.position < this.viewportMinimum) break;
                            p.position > this.viewportMaximum || !(k === this._labels.length - 1 || l < Math.log(h / p.position) * m / e) || (c.push(p), h = p.position, l = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle))) }
                        this._labels = c
                    } else {
                        for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (l = p.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.height *
                            Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += l);
                        c > this.lineCoordinates.width * e && this.labelAutoFit && (d = !0)
                    }
                if ("left" === this._position || "right" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var c = [], n, h = this.viewportMaximum, m = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                            p = this._labels[k];
                            if (p.position < this.viewportMinimum) break;
                            p.position > this.viewportMaximum || !(k === this._labels.length - 1 || n < Math.log(h / p.position) *
                                m) || (c.push(p), h = p.position, n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = c
                    } else { for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (n = p.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + p.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += n);
                        b > this.lineCoordinates.height * e && this.labelAutoFit && (d = !0) }
            }
            this.logarithmic && (!this.equidistantInterval &&
                this.labelAutoFit) && this._labels.sort(function(a, b) { return a.position - b.position });
            var k = 0,
                p, q;
            if ("bottom" === this._position) {
                for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y <<
                    0), this.ctx.lineTo(b, q.y + this.tickLength << 0), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + p.textBlock.height - p.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? p.textBlock.width *
                    Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - Math.abs(p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), p.textBlock.x = q.x, p.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd",
                    function() { for (k = 0; k < a._labels.length; k++)
                            if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) { a.ctx.lineWidth = a.tickThickness;
                                a.ctx.strokeStyle = a.tickColor; var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                                a.ctx.save();
                                a.ctx.beginPath();
                                a.ctx.moveTo(b, q.y << 0);
                                a.ctx.lineTo(b, q.y - a.tickLength << 0);
                                a.ctx.stroke();
                                a.ctx.restore() } }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 +
                    this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("top" === this._position) {
                for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle =
                    this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y - this.tickLength << 0), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === p.textBlock.angle ? (q.x -= p.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + p.textBlock.height - p.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 <
                    this.labelAngle ? q.x : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (p.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) +
                        ((p.textBlock.height - p.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), p.textBlock.x = q.x, p.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                    for (k = 0; k < a._labels.length; k++)
                        if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle =
                                a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(b, q.y << 0);
                            a.ctx.lineTo(b, q.y + a.tickLength << 0);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("left" === this._position) {
                for (k =
                    0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x - this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (p.textBlock.y =
                    q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
                    ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                    for (k = 0; k < a._labels.length; k++)
                        if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position), a.tickThickness)) {
                            a.ctx.lineWidth =
                                a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(q.x << 0, b);
                            a.ctx.lineTo(q.x + a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("right" ===
                this._position) {
                for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || p.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(p.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x + this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ?
                    (p.textBlock.y = q.y, p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (p.textBlock.y = "inside" === this.labelPlacement ? q.y - p.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), p.textBlock.x = "inside" === this.labelPlacement ? q.x - p.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
                        ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (p.textBlock.height - p.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                    for (k = 0; k < a._labels.length; k++)
                        if (p = a._labels[k], !(p.position < a.viewportMinimum || p.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(p.position),
                                a.tickThickness)) { a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor; var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(q.x << 0, b);
                            a.ctx.lineTo(q.x - a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore() }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            }
            f =
                0;
            if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationEnd", function() { for (k = 0; k < a._labels.length; k++) p = a._labels[k], p.position < a.viewportMinimum || (p.position > a.viewportMaximum || d && 0 !== f++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), p.textBlock.render(!0), a.ctx.restore()) }, this);
            else
                for (k = 0; k < this._labels.length; k++) p = this._labels[k], p.position < this.viewportMinimum || (p.position > this.viewportMaximum || d && 0 !== f++ % 2 && this.labelAutoFit) || p.textBlock.render(!0)
        };
        F.prototype.renderInterlacedColors =
            function() {
                var a = this.chart.plotArea.ctx,
                    d, c, b = this.chart.plotArea,
                    e = 0;
                d = !0;
                if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                    for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) d ? (d = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(c.x, d.x), b.y1, Math.abs(c.x - d.x), Math.abs(b.y1 - b.y2)), d = !1) :
                        d = !0;
                else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                    for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) d ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), d = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x1, Math.min(c.y, d.y), Math.abs(b.x1 - b.x2), Math.abs(d.y - c.y)), d = !1) : d = !0;
                a.beginPath()
            };
        F.prototype.renderStripLinesOfThicknessType = function(a) {
            if (this.stripLines &&
                0 < this.stripLines.length && a) {
                for (var d = this, c, b = 0, e = 0, f = !1, l = !1, h = [], m = [], l = !1, b = 0; b < this.stripLines.length; b++) { var k = this.stripLines[b];
                    k._thicknessType === a && ("pixel" === a && (k.value < this.viewportMinimum || k.value > this.viewportMaximum || r(k.value) || isNaN(this.range)) || "value" === a && (k.startValue <= this.viewportMinimum && k.endValue <= this.viewportMinimum || k.startValue >= this.viewportMaximum && k.endValue >= this.viewportMaximum || r(k.startValue) || r(k.endValue) || isNaN(this.range)) || h.push(k)) }
                for (b = 0; b < this._stripLineLabels.length; b++)
                    if (k =
                        this.stripLines[b], c = this._stripLineLabels[b], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range))) {
                        a = this.getPixelCoordinatesOnAxis(c.position);
                        if ("outside" === c.stripLine.labelPlacement)
                            if (k && (this.ctx.strokeStyle = k.color, "pixel" === k._thicknessType && (this.ctx.lineWidth = k.thickness)), "bottom" === this._position) {
                                var n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
                                this.ctx.beginPath();
                                this.ctx.moveTo(n, a.y << 0);
                                this.ctx.lineTo(n, a.y + this.tickLength << 0);
                                this.ctx.stroke();
                                0 === this.labelAngle ? (a.x -= c.textBlock.width / 2, a.y += this.tickLength + c.textBlock.fontSize / 2 + 5) : (a.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                            } else "top" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(n, a.y << 0), this.ctx.lineTo(n, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= c.textBlock.width /
                                    2, a.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (a.x += (c.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (c.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x <<
                                    0, n), this.ctx.lineTo(a.x - this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" ===
                                this._position && (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x + this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                        else c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? r(k.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, r(k.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), a.y = -90 === c.textBlock.angle ?
                            "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth :
                            this.chart.plotArea.height - 3, c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? r(k.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, r(k.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), a.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 +
                                this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), a.y - c.textBlock.height > this.chart.plotArea.y1 ?
                            r(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : r(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3, a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width -
                            3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), a.y - +c.textBlock.height > this.chart.plotArea.y1 ? r(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 - 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : r(k.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize /
                            2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                        c.textBlock.x = a.x;
                        c.textBlock.y = a.y;
                        m.push(c)
                    }
                if (!l) {
                    l = !1;
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (b = 0; b < h.length; b++) k =
                        h[b], k.showOnTop ? f || (f = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() { this.ctx.save();
                            this.ctx.beginPath();
                            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                            this.ctx.clip(); for (e = 0; e < h.length; e++) k = h[e], k.showOnTop && k.render();
                            this.ctx.restore() }, k)) : k.render();
                    for (b = 0; b < m.length; b++) c = m[b], c.stripLine.showOnTop ? l || (l = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        for (e = 0; e < m.length; e++) c =
                            m[e], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (d.ctx.save(), d.ctx.beginPath(), d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height), d.ctx.clip(), c.textBlock.render(!0), d.ctx.restore())
                    }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(!0);
                    this.ctx.restore();
                    l = !0
                }
                if (l)
                    for (l = !1, b = 0; b < m.length; b++) c = m[b], "outside" === c.stripLine.labelPlacement && c.textBlock.render(!0)
            }
        };
        F.prototype.renderBreaksBackground = function() {
            this.chart._breaksCanvas &&
                (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore())
        };
        F.prototype.createMask = function() {
            if (this.scaleBreaks &&
                0 < this.scaleBreaks._appliedBreaks.length) {
                var a = this.scaleBreaks._appliedBreaks;
                w ? (this.maskCanvas = sa(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
                this.maskCtx.save();
                this.maskCtx.beginPath();
                this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.maskCtx.clip();
                for (var d = 0; d < a.length; d++) a[d].endValue < this.viewportMinimum ||
                    (a[d].startValue > this.viewportMaximum || isNaN(this.range)) || a[d].render(this.maskCtx);
                this.maskCtx.restore()
            }
        };
        F.prototype.renderCrosshair = function(a, d) { isFinite(this.minimum) && isFinite(this.maximum) && (this.crosshair.render(a, d), this.crosshair.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this, value: this.crosshair.value }, this)) };
        F.prototype.showCrosshair = function(a) {
            r(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a),
                null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a))
        };
        F.prototype.renderGrid = function() {
            if (this.gridThickness && 0 < this.gridThickness) {
                var a = this.chart.ctx;
                a.save();
                var d, c = this.chart.plotArea;
                a.lineWidth = this.gridThickness;
                a.strokeStyle = this.gridColor;
                a.setLineDash && a.setLineDash(N(this.gridDashType, this.gridThickness));
                if ("bottom" === this._position || "top" === this._position)
                    for (b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum ||
                        this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0, a.moveTo(d, c.y1 << 0), a.lineTo(d, c.y2 << 0), a.stroke());
                else if ("left" === this._position || "right" === this._position)
                    for (var b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d =
                        1 === a.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0, a.moveTo(c.x1 << 0, d), a.lineTo(c.x2 << 0, d), a.stroke());
                a.restore()
            }
        };
        F.prototype.renderAxisLine = function() {
            var a = this.chart.ctx,
                d = w ? this.chart._preRenderCtx : a,
                c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
                b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
                e, f;
            d.save();
            if ("bottom" === this._position || "top" === this._position) {
                if (this.lineThickness) {
                    this.reversed ? (e = this.lineCoordinates.x2, f = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, f = this.lineCoordinates.x2);
                    d.lineWidth = this.lineThickness;
                    d.strokeStyle = this.lineColor ? this.lineColor : "black";
                    d.setLineDash && d.setLineDash(N(this.lineDashType, this.lineThickness));
                    var l = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                    d.beginPath();
                    if (this.scaleBreaks && !r(this.scaleBreaks.firstBreakIndex))
                        if (r(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                        else
                            for (var h = this.scaleBreaks.firstBreakIndex; h <= this.scaleBreaks.lastBreakIndex; h++) d.moveTo(e,
                                l), d.lineTo(this.scaleBreaks._appliedBreaks[h].startPixel + c, l), e = this.scaleBreaks._appliedBreaks[h].endPixel + b;
                    e && (d.moveTo(e, l), d.lineTo(f, l));
                    d.stroke()
                }
            } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
                this.reversed ? (e = this.lineCoordinates.y1, f = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, f = this.lineCoordinates.y1);
                d.lineWidth = this.lineThickness;
                d.strokeStyle = this.lineColor;
                d.setLineDash && d.setLineDash(N(this.lineDashType, this.lineThickness));
                l = 1 === this.lineThickness %
                    2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
                d.beginPath();
                if (this.scaleBreaks && !r(this.scaleBreaks.firstBreakIndex))
                    if (r(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                    else
                        for (h = this.scaleBreaks.firstBreakIndex; h <= this.scaleBreaks.lastBreakIndex; h++) d.moveTo(l, e), d.lineTo(l, this.scaleBreaks._appliedBreaks[h].startPixel + b), e = this.scaleBreaks._appliedBreaks[h].endPixel + c;
                e && (d.moveTo(l, e), d.lineTo(l, f));
                d.stroke()
            }
            w &&
                (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), d.clearRect(0, 0, this.chart.width, this.chart.height));
            d.restore()
        };
        F.prototype.getPixelCoordinatesOnAxis = function(a) {
            var d = {};
            if ("bottom" === this._position || "top" === this._position) d.x = this.convertValueToPixel(a), d.y = this.lineCoordinates.y1;
            if ("left" === this._position || "right" === this._position) d.y =
                this.convertValueToPixel(a), d.x = this.lineCoordinates.x2;
            return d
        };
        F.prototype.convertPixelToValue = function(a) {
            if ("undefined" === typeof a) return null;
            var d = 0,
                c = 0,
                b, d = !0,
                e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
            if (this.logarithmic) {
                a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
                if (c <= this.conversionParameters.reference === ("left" === this._position ||
                        "right" === this._position) !== this.reversed)
                    for (c = 0; c < e.length; c++) {
                        if (!(e[c].endValue < this.conversionParameters.minimum))
                            if (d)
                                if (e[c].startValue < this.conversionParameters.minimum) {
                                    if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) { a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)); break } else a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) /
                                        Math.log(e[c].endValue / e[c].startValue)), b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue));
                                    d = !1
                                } else if (b > e[c].startValue / this.conversionParameters.minimum) { b /= e[c].startValue / this.conversionParameters.minimum; if (b < e[c].size) { a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b; break } else a *= e[c].endValue / e[c].startValue / e[c].size;
                            b /= e[c].size;
                            d = !1 } else break;
                        else if (b > e[c].startValue / e[c -
                                1].endValue) { b /= e[c].startValue / e[c - 1].endValue; if (b < e[c].size) { a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b; break } else a *= e[c].endValue / e[c].startValue / e[c].size;
                            b /= e[c].size } else break
                    } else
                        for (c = e.length - 1; 0 <= c; c--)
                            if (!(e[c].startValue > this.conversionParameters.minimum))
                                if (d)
                                    if (e[c].endValue > this.conversionParameters.minimum) {
                                        if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) >
                                            e[c].startValue) { a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)); break } else a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue));
                                        d = !1
                                    } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                    b /= e[c].endValue / this.conversionParameters.minimum;
                    if (b > 1 / e[c].size) { a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b; break } else a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size;
                    d = !1
                } else break;
                else if (b < e[c].endValue / e[c + 1].startValue) { b /= e[c].endValue / e[c + 1].startValue; if (b > 1 / e[c].size) { a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b; break } else a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size } else break;
                d = a * this.viewportMinimum
            } else {
                a = b = (c - this.conversionParameters.reference) /
                    this.conversionParameters.pixelPerUnit;
                if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
                    for (c = 0; c < e.length; c++) {
                        if (!(e[c].endValue < this.conversionParameters.minimum))
                            if (d)
                                if (e[c].startValue < this.conversionParameters.minimum) {
                                    if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) { a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size; break } else a += e[c].endValue - this.conversionParameters.minimum -
                                        e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), b -= e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue);
                                    d = !1
                                } else if (b > e[c].startValue - this.conversionParameters.minimum) { b -= e[c].startValue - this.conversionParameters.minimum; if (b < e[c].size) { a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b; break } else a += e[c].endValue - e[c].startValue - e[c].size;
                            b -= e[c].size;
                            d = !1 } else break;
                        else if (b > e[c].startValue - e[c -
                                1].endValue) { b -= e[c].startValue - e[c - 1].endValue; if (b < e[c].size) { a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b; break } else a += e[c].endValue - e[c].startValue - e[c].size;
                            b -= e[c].size } else break
                    } else
                        for (c = e.length - 1; 0 <= c; c--)
                            if (!(e[c].startValue > this.conversionParameters.minimum))
                                if (d)
                                    if (e[c].endValue > this.conversionParameters.minimum)
                                        if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) {
                                            a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) /
                                                e[c].size;
                                            break
                                        } else a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), d = !1;
                else if (b < e[c].endValue - this.conversionParameters.minimum) {
                    b -= e[c].endValue - this.conversionParameters.minimum;
                    if (b > -1 * e[c].size) { a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b; break } else a -= e[c].endValue - e[c].startValue -
                        e[c].size;
                    b += e[c].size;
                    d = !1
                } else break;
                else if (b < e[c].endValue - e[c + 1].startValue) { b -= e[c].endValue - e[c + 1].startValue; if (b > -1 * e[c].size) { a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b; break } else a -= e[c].endValue - e[c].startValue - e[c].size;
                    b += e[c].size } else break;
                d = this.conversionParameters.minimum + a
            }
            return d
        };
        F.prototype.convertValueToPixel = function(a) {
            a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
            return this.logarithmic ? this.conversionParameters.reference +
                this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5
        };
        F.prototype.getApparentDifference = function(a, d, c, b) {
            var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            if (this.logarithmic) {
                c = r(c) ? d / a : c;
                for (var f = 0; f < e.length && !(d < e[f].startValue); f++) a > e[f].endValue || (a <= e[f].startValue && d >= e[f].endValue ? c = c / e[f].endValue * e[f].startValue * e[f].size : a >= e[f].startValue && d >= e[f].endValue ? c = c / e[f].endValue * a * Math.pow(e[f].size, Math.log(e[f].endValue / a) / Math.log(e[f].endValue / e[f].startValue)) : a <= e[f].startValue && d <= e[f].endValue ? c = c / d * e[f].startValue * Math.pow(e[f].size, Math.log(d / e[f].startValue) / Math.log(e[f].endValue / e[f].startValue)) : !b && (a > e[f].startValue && d < e[f].endValue) &&
                    (c = a * Math.pow(e[f].size, Math.log(d / a) / Math.log(e[f].endValue / e[f].startValue))))
            } else
                for (c = r(c) ? Math.abs(d - a) : c, f = 0; f < e.length && !(d < e[f].startValue); f++) a > e[f].endValue || (a <= e[f].startValue && d >= e[f].endValue ? c = c - e[f].endValue + e[f].startValue + e[f].size : a > e[f].startValue && d >= e[f].endValue ? c = c - e[f].endValue + a + e[f].size * (e[f].endValue - a) / (e[f].endValue - e[f].startValue) : a <= e[f].startValue && d < e[f].endValue ? c = c - d + e[f].startValue + e[f].size * (d - e[f].startValue) / (e[f].endValue - e[f].startValue) : !b && (a > e[f].startValue &&
                    d < e[f].endValue) && (c = a + e[f].size * (d - a) / (e[f].endValue - e[f].startValue)));
            return c
        };
        F.prototype.setViewPortRange = function(a, d) { this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d);
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d) };
        F.prototype.getXValueAt = function(a) { if (!a) return null; var d = null; "left" === this._position ? d = this.convertPixelToValue(a.y) : "bottom" === this._position && (d = this.convertPixelToValue(a.x)); return d };
        F.prototype.calculateValueToPixelConversionParameters =
            function(a) {
                a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                var d = { pixelPerUnit: null, minimum: null, reference: null },
                    c = this.lineCoordinates.width,
                    b = this.lineCoordinates.height,
                    c = "bottom" === this._position || "top" === this._position ? c : b,
                    b = Math.abs(this.range);
                if (this.logarithmic)
                    for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue &&
                        this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue /
                            this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
                else
                    for (e = 0; e < a.length && !(this.viewportMaximum <
                            a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ?
                        c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum -
                        a[e].startValue) / (a[e].endValue - a[e].startValue)));
                d.minimum = this.viewportMinimum;
                d.maximum = this.viewportMaximum;
                d.range = b;
                if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? -1 : 1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
                if ("left" === this._position || "right" === this._position) this.logarithmic ?
                    (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? 1 : -1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
                this.conversionParameters = d
            };
        F.prototype.calculateAxisParameters = function() {
            if (this.logarithmic) this.calculateLogarithmicAxisParameters();
            else {
                var a = this.chart.layoutManager.getFreeSpace(),
                    d = !1,
                    c = !1;
                "bottom" === this._position || "top" === this._position ? (this.maxWidth =
                    a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
                var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                    b = 4;
                "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
                var a = Math.max(b, Math.floor(this.maxWidth / a)),
                    e, f, l, b = 0;
                !r(this.options.viewportMinimum) && (!r(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
                if (r(this.options.viewportMinimum) && !r(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
                else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
                if (r(this.options.viewportMaximum) && !r(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
                else if (null === this.viewportMaximum ||
                    isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
                if (this.scaleBreaks)
                    for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
                        if ((!r(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !r(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !r(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!r(this.sessionVariables.newViewportMaximum) &&
                                this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !r(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !r(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) { this.scaleBreaks._appliedBreaks.splice(b, 1); break }
                if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length)
                        for (e = 0; e < this.dataSeries.length; e++) "dateTime" === this.dataSeries[e].xValueType && (c = !0);
                    e = null !== this.viewportMinimum ?
                        this.viewportMinimum : this.dataInfo.viewPortMin;
                    f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                    0 === f - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, f += b, e -= b);
                    Infinity !== this.dataInfo.minDiff ? l = this.dataInfo.minDiff : 1 < f - e ? l = 0.5 * Math.abs(f - e) : (l = 1, c && (d = !0))
                } else "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) ||
                    isFinite(f) ? isFinite(e) ? isFinite(f) || (f = e) : e = f : (f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === e && 0 === f ? (f += 9, e = 0) : 0 === f - e ? (b = Math.min(Math.abs(0.01 * Math.abs(f)), 5), f += b, e -= b) : e > f ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5), 0 <= f ? e = f - b : f = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), 0.05), 0 !== f && (f += b), 0 !== e && (e -=
                        b)), l = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > f && (f = 0));
                b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum, null, !0);
                if ("axisX" === this.type && c) {
                    this.valueType =
                        "dateTime";
                    this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") :
                        b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * T.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * T.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * T.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * T.secondDuration) <= a ? (this.interval = 10,
                            this.intervalType = "second") : b / (15 * T.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * T.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * T.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * T.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * T.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * T.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * T.minuteDuration) <= a ? (this.interval =
                            10, this.intervalType = "minute") : b / (15 * T.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * T.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * T.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * T.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * T.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * T.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * T.hourDuration) <= a ? (this.interval = 6, this.intervalType =
                            "hour") : b / (1 * T.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * T.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * T.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * T.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * T.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * T.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * T.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * T.monthDuration) <= a ? (this.interval =
                            2, this.intervalType = "month") : b / (3 * T.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * T.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * T.yearDuration) <= a ? 1 : b / (2 * T.yearDuration) <= a ? 2 : b / (4 * T.yearDuration) <= a ? 4 : Math.floor(F.getNiceNumber(b / (a - 1), !0) / T.yearDuration), this.intervalType = "year"));
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = e - l / 2;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum =
                        f + l / 2;
                    d ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString =
                        "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                    this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
                } else {
                    this.intervalType = "number";
                    b = F.getNiceNumber(b, !1);
                    this.interval = this.options && 0 < this.options.interval ? this.options.interval : F.getNiceNumber(b / (a - 1), !0);
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? e - l / 2 : Math.floor(e / this.interval) * this.interval;
                    if (null === this.viewportMaximum ||
                        isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? f + l / 2 : Math.ceil(f / this.interval) * this.interval;
                    0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = F.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
                }
                if (null === this.minimum || null === this.maximum)
                    if ("axisX" === this.type ? (e =
                            null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === f - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, f += b, e -= b), l = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(f) ? 0 === e && 0 === f ? (f += 9, e = 0) : 0 === f - e ? (b = Math.min(Math.abs(0.01 * Math.abs(f)),
                            5), f += b, e -= b) : e > f ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5), 0 <= f ? e = f - b : f = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), 0.05), 0 !== f && (f += b), 0 !== e && (e -= b)) : (f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), l = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1, this.includeZero && (null === this.minimum ||
                            isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > f && (f = 0)), Math.abs(this.getApparentDifference(e, f, null, !0)), "axisX" === this.type && c) {
                        this.valueType = "dateTime";
                        if (null === this.minimum || isNaN(this.minimum)) this.minimum = e - l / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
                        if (null === this.maximum || isNaN(this.maximum)) this.maximum =
                            f + l / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)
                    } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - l / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)),
                        null === this.maximum && (this.maximum = "axisX" === this.type ? f + l / 2 : Math.ceil(f / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
                r(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
                r(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
                this.range = this.viewportMaximum - this.viewportMinimum;
                this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
                this.valueFormatString || (this.valueFormatString = F.generateValueFormatString(this.range, 2))
            }
        };
        F.prototype.calculateLogarithmicAxisParameters =
            function() {
                var a = this.chart.layoutManager.getFreeSpace(),
                    d = Math.log(this.logarithmBase),
                    c;
                "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
                var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
                    b, e, f, l;
                l = 1;
                if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
                if (null === this.viewportMaximum ||
                    isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
                if (this.scaleBreaks)
                    for (l = 0; l < this.scaleBreaks._appliedBreaks.length; l++)
                        if ((!r(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[l].startValue || !r(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[l].startValue || !r(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[l].startValue) && (!r(this.sessionVariables.newViewportMaximum) &&
                                this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[l].endValue || !r(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[l].endValue || !r(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[l].endValue)) { this.scaleBreaks._appliedBreaks.splice(l, 1); break }
                        "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax,
                    1 === e / b && (l = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= l, b /= l), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(e) ? (e = "undefined" === typeof this.options.interval ? 0 :
                        this.options.interval, b = 1) : 0 >= b ? b = e : isFinite(e) || (e = b), 1 === b && 1 === e ? (e *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === e / b ? (l = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= l, b /= l) : b > e ? (l = Math.min(b / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? b = e / l : e = b * l) : (l = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= l), 1 !== b && (b /= l)), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ?
                    e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
                l = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
                var h = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) ||
                    null === this.viewportMinimum ? b : this.viewportMinimum);
                this.intervalType = "number";
                l = Math.pow(this.logarithmBase, F.getNiceNumber(Math.abs(Math.log(l) / d), !1));
                this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = F.getNiceExponent(Math.log(l) / d / (a - 1), !0), c = F.getNiceNumber(h / (a - 1), !0));
                if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval));
                if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval));
                1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval &&
                    (this.interval = F.getNiceExponent(Math.ceil(Math.log(l) / d) / (a - 1)), c = F.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)));
                if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / b && (l = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= l, b /= l), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ?
                    e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(e) ? 1 === b && 1 === e ? (e *= this.logarithmBase, b /= this.logarithmBase) : 1 === e / b ? (l = Math.pow(this.logarithmBase, this.interval), e *= l, b /= l) : b > e ? (l = Math.min(0.01 * (b / e), 5), 1 <= e ? b = e / l : e = b * l) : (l = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= l), 1 !== b && (b /= l)) : (e = "undefined" ===
                    typeof this.options.interval ? 0 : this.options.interval, b = 1), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) /
                    d / this.interval)), r(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum :
                    this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval)), r(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum ||
                    isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
                this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
                this.viewportMaximum = Math.min(this.viewportMaximum,
                    this.maximum);
                this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
                b =
                    Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval);
                this.range = this.viewportMaximum / this.viewportMinimum;
                this.noTicks = a;
                if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) { for (d = Math.floor(this.viewportMinimum / c + 0.5) * c; d < this.viewportMinimum;) d += c;
                    this.equidistantInterval = !1;
                    this.intervalStartPosition = d;
                    this.interval = c } else this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval &&
                    (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval))), this.equidistantInterval = !0, this.intervalStartPosition = b;
                if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) { d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2; if (isNaN(d) || !isFinite(d)) d = 2; if (2 < d)
                        for (l = 0; l < d - 2; l++) this.valueFormatString += "#" }
            };
        F.generateValueFormatString = function(a, d) {
            var c = "#,##0.",
                b = d;
            1 > a && (b += Math.floor(Math.abs(Math.log(a) /
                Math.LN10)), isNaN(b) || !isFinite(b)) && (b = d);
            for (var e = 0; e < b; e++) c += "#";
            return c
        };
        F.getNiceExponent = function(a, d) { var c = Math.floor(Math.log(a) / Math.LN10),
                b = a / Math.pow(10, c),
                b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1); return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20)) };
        F.getNiceNumber = function(a, d) { var c = Math.floor(Math.log(a) / Math.LN10),
                b = a / Math.pow(10, c),
                b = d ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10; return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20)) };
        F.prototype.getLabelStartPoint = function() {
            var a = T[this.intervalType + "Duration"] * this.interval,
                a = new Date(Math.floor(this.viewportMinimum / a) * a);
            if ("millisecond" !== this.intervalType)
                if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
                else if ("minute" === this.intervalType) { if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0) } else if ("hour" === this.intervalType) {
                if (0 < a.getMinutes() || 0 < a.getSeconds() ||
                    0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("day" === this.intervalType) { if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0) } else if ("week" === this.intervalType) {
                if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0),
                    a.setSeconds(0), a.setMilliseconds(0)
            } else if ("month" === this.intervalType) { if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0) } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0),
                a.setSeconds(0), a.setMilliseconds(0));
            return a
        };
        na(U, ba);
        na(ca, ba);
        ca.prototype.createUserOptions = function(a) { if ("undefined" !== typeof a || this.options._isPlaceholder) { var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Da(this.parent[this.optionsName]), d = this.parent.options[this.optionsName].indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options[this.optionsName][d] = this.options } };
        ca.prototype.render = function(a) {
            if (0 !==
                this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
                var d = this.ctx,
                    c = this.ctx.globalAlpha;
                this.ctx = a || this.ctx;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
                    e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
                this.ctx.strokeStyle =
                    this.lineColor;
                this.ctx.fillStyle = this.color;
                this.ctx.beginPath();
                this.ctx.globalAlpha = 1;
                Q(this.id);
                var f, h, m, r, k, n;
                a = Math.max(this.spacing, 3);
                var p = Math.max(0, this.lineThickness);
                this.ctx.lineWidth = p;
                this.ctx.setLineDash && this.ctx.setLineDash(N(this.lineDashType, p));
                if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
                    if (b = 1 === p % 2 ? (b.x << 0) + 0.5 : b.x << 0, h = 1 === p % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, m = this.chart.plotArea.y2 +
                            p / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, m = this.chart.plotArea.y1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b - p / 2, y1: e, x2: h + p / 2, y2: m }, this.ctx.moveTo(b, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(b, m), this.ctx.lineTo(h, m), this.ctx.lineTo(h, e);
                    else if ("wavy" === this.type) {
                    r = b;
                    k = e;
                    f = 0.5;
                    n = (m - k) / a / 3;
                    for (var q = 0; q < n; q++) this.ctx.bezierCurveTo(r + f * a, k + a, r + f * a, k + 2 * a, r, k + 3 * a), k += 3 * a, f *= -1;
                    this.ctx.bezierCurveTo(r + f * a,
                        k + a, r + f * a, k + 2 * a, r, k + 3 * a);
                    r = h;
                    f *= -1;
                    this.ctx.lineTo(r, k);
                    for (q = 0; q < n; q++) this.ctx.bezierCurveTo(r + f * a, k - a, r + f * a, k - 2 * a, r, k - 3 * a), k -= 3 * a, f *= -1
                } else { if ("zigzag" === this.type) { f = -1;
                        k = e + a;
                        r = b + a;
                        n = (m - k) / a / 2; for (q = 0; q < n; q++) this.ctx.lineTo(r, k), r += 2 * f * a, k += 2 * a, f *= -1;
                        this.ctx.lineTo(r, k);
                        r += h - b; for (q = 0; q < n + 1; q++) this.ctx.lineTo(r, k), r += 2 * f * a, k -= 2 * a, f *= -1;
                        this.ctx.lineTo(r + f * a, k + a) } } else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
                    if (e = 1 === p % 2 ? (e.y << 0) + 0.5 : e.y <<
                        0, m = 1 === p % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, h = this.chart.plotArea.x2 + p / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, h = this.chart.plotArea.x1 - p / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b, y1: e - p / 2, x2: h, y2: m + p / 2 }, this.ctx.moveTo(b, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(h, e), this.ctx.lineTo(h, m), this.ctx.lineTo(b, m);
                    else if ("wavy" === this.type) {
                    r = b;
                    k = e;
                    f = 0.5;
                    n =
                        (h - r) / a / 3;
                    for (q = 0; q < n; q++) this.ctx.bezierCurveTo(r + a, k + f * a, r + 2 * a, k + f * a, r + 3 * a, k), r += 3 * a, f *= -1;
                    this.ctx.bezierCurveTo(r + a, k + f * a, r + 2 * a, k + f * a, r + 3 * a, k);
                    k = m;
                    f *= -1;
                    this.ctx.lineTo(r, k);
                    for (q = 0; q < n; q++) this.ctx.bezierCurveTo(r - a, k + f * a, r - 2 * a, k + f * a, r - 3 * a, k), r -= 3 * a, f *= -1
                } else if ("zigzag" === this.type) { f = 1;
                    k = e - a;
                    r = b + a;
                    n = (h - r) / a / 2; for (q = 0; q < n; q++) this.ctx.lineTo(r, k), k += 2 * f * a, r += 2 * a, f *= -1;
                    this.ctx.lineTo(r, k);
                    k += m - e; for (q = 0; q < n + 1; q++) this.ctx.lineTo(r, k), k += 2 * f * a, r -= 2 * a, f *= -1;
                    this.ctx.lineTo(r + a, k + f * a) }
                0 < p && this.ctx.stroke();
                this.ctx.closePath();
                this.ctx.globalAlpha = this.fillOpacity;
                this.ctx.globalCompositeOperation = "destination-over";
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.globalAlpha = c;
                this.ctx = d
            }
        };
        na(M, ba);
        M.prototype.createUserOptions = function(a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Da(this.parent.stripLines), d = this.parent.options.stripLines.indexOf(this.options));
                this.options = "undefined" ===
                    typeof a ? {} : a;
                this.parent.options.stripLines[d] = this.options
            }
        };
        M.prototype.render = function() {
            this.ctx.save();
            var a = this.parent.getPixelCoordinatesOnAxis(this.value),
                d = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
            if (0 < d) {
                var c = null === this.opacity ? 1 : this.opacity;
                this.ctx.strokeStyle = this.color;
                this.ctx.beginPath();
                var b = this.ctx.globalAlpha;
                this.ctx.globalAlpha = c;
                Q(this.id);
                var e, f, h,
                    m;
                this.ctx.lineWidth = d;
                this.ctx.setLineDash && this.ctx.setLineDash(N(this.lineDashType, d));
                if ("bottom" === this.parent._position || "top" === this.parent._position) e = f = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, h = this.chart.plotArea.y1, m = this.chart.plotArea.y2, this.bounds = { x1: e - d / 2, y1: h, x2: f + d / 2, y2: m };
                else if ("left" === this.parent._position || "right" === this.parent._position) h = m = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, f = this.chart.plotArea.x2, this.bounds = {
                    x1: e,
                    y1: h - d / 2,
                    x2: f,
                    y2: m + d / 2
                };
                this.ctx.moveTo(e, h);
                this.ctx.lineTo(f, m);
                this.ctx.stroke();
                this.ctx.globalAlpha = b
            }
            this.ctx.restore()
        };
        na(Z, ba);
        Z.prototype.showAt = function(a) {
            if (!this.enabled) return !1;
            var d = this.chart,
                c = !1;
            d.resetOverlayedCanvas();
            d.clearedOverlayedCanvas = this.parent.type;
            this.chart.renderCrosshairs(this.parent);
            if ("xySwapped" === d.plotInfo.axisPlacement)
                if ("bottom" === this.parent._position)
                    for (var b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum &&
                        a <= d.axisY[b].viewportMaximum ? a : null);
                else if ("top" === this.parent._position)
                for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
                for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
            else {
                if ("right" === this.parent._position)
                    for (b = 0; b < d.axisX2.length; b++) this.parent ===
                        d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null)
            } else if ("bottom" === this.parent._position)
                for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
            else if ("top" === this.parent._position)
                for (b = 0; b < d.axisX2.length; b++) this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
                for (b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
            else if ("right" === this.parent._position)
                for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
            for (b = 0; b < d.axisX.length; b++) a = d.axisX[b]._crosshairValue, d.axisX[b].crosshair && (d.axisX[b].crosshair.enabled && !r(a) &&
                a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum) && (d.axisX[b].showCrosshair(a), d.axisX[b].crosshair._updatedValue = a, this === d.axisX[b].crosshair && (c = !0));
            for (b = 0; b < d.axisX2.length; b++) a = d.axisX2[b]._crosshairValue, d.axisX2[b].crosshair && (d.axisX2[b].crosshair.enabled && !r(a) && a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum) && (d.axisX2[b].showCrosshair(a), d.axisX2[b].crosshair._updatedValue = a, this === d.axisX2[b].crosshair && (c = !0));
            for (b = 0; b < d.axisY.length; b++) a = d.axisY[b]._crosshairValue,
                d.axisY[b].crosshair && (d.axisY[b].crosshair.enabled && !r(a) && a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum) && (d.axisY[b].showCrosshair(a), d.axisY[b].crosshair._updatedValue = a, this === d.axisY[b].crosshair && (c = !0));
            for (b = 0; b < d.axisY2.length; b++) a = d.axisY2[b]._crosshairValue, d.axisY2[b].crosshair && (d.axisY2[b].crosshair.enabled && !r(a) && a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum) && (d.axisY2[b].showCrosshair(a), d.axisY2[b].crosshair._updatedValue = a, this === d.axisY2[b].crosshair &&
                (c = !0));
            this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
            return c
        };
        Z.prototype.hide = function() { this.chart.resetOverlayedCanvas();
            this.chart.renderCrosshairs(this.parent);
            this._hidden = !0 };
        Z.prototype.render = function(a, d, c) {
            var b, e, f, h, m = null,
                w = null,
                k = null,
                n = "";
            if (!this.valueFormatString)
                if ("dateTime" === this.parent.valueType) this.valueFormatString = this.parent.valueFormatString;
                else {
                    var p = 0,
                        p = "xySwapped" === this.chart.plotInfo.axisPlacement ?
                        50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0);
                    this.valueFormatString = F.generateValueFormatString(this.parent.range, p)
                }
            var k = null === this.opacity ? 1 : this.opacity,
                p = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit *
                    this.thickness),
                q = this.chart.overlaidCanvasCtx,
                g = q.globalAlpha;
            q.globalAlpha = k;
            q.beginPath();
            q.strokeStyle = this.color;
            q.lineWidth = p;
            q.save();
            this.labelFontSize = Math.abs(r(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
            this.labelMaxWidth = r(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
            this.labelMaxHeight = r(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
            0 < p && q.setLineDash && q.setLineDash(N(this.lineDashType, p));
            k = new ia(q, { x: 0, y: 0, padding: { top: 2, right: 3, bottom: 2, left: 4 }, backgroundColor: this.labelBackgroundColor, borderColor: this.labelBorderColor, borderThickness: this.labelBorderThickness, cornerRadius: this.labelCornerRadius, maxWidth: this.labelMaxWidth, maxHeight: this.labelMaxHeight, angle: this.labelAngle, text: n, horizontalAlign: "left", fontSize: this.labelFontSize, fontFamily: this.labelFontFamily, fontWeight: this.labelFontWeight, fontColor: this.labelFontColor, fontStyle: this.labelFontStyle, textBaseline: "middle" });
            if (this.snapToDataPoint) {
                var s =
                    0,
                    n = [];
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    var v = null;
                    if ("bottom" === this.parent._position || "top" === this.parent._position) s = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: d });
                    else if ("left" === this.parent._position || "right" === this.parent._position) s = this.parent.convertPixelToValue({ y: d });
                    for (var x = 0; x < this.parent.dataSeries.length; x++)(v = this.parent.dataSeries[x].getDataPointAtX(s, !0)) && 0 <= v.index && (v.dataSeries = this.parent.dataSeries[x], null !== v.dataPoint.y && v.dataSeries.visible &&
                        n.push(v));
                    v = null;
                    if (0 === n.length) return;
                    n.sort(function(a, b) { return a.distance - b.distance });
                    v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                    x = 0;
                    if ("rangeBar" === n[0].dataSeries.type || "error" === n[0].dataSeries.type)
                        for (var v = Math.abs(a - this.parent.convertValueToPixel(n[x].dataPoint.y[0])), u = 0, s = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (var z = 0; z < n[s].dataPoint.y.length; z++) u = Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y[z])), u < v && (v = u, x = s);
                            else u =
                                Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y)), u < v && (v = u, x = s);
                    else if ("stackedBar" === n[0].dataSeries.type)
                        for (var v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), y = u = 0, s = x = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (z = 0; z < n[s].dataPoint.y.length; z++) u = Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y[z])), u < v && (v = u, x = s);
                            else y += n[s].dataPoint.y, u = Math.abs(a - this.parent.convertValueToPixel(y)), u < v && (v = u, x = s);
                    else if ("stackedBar100" === n[0].dataSeries.type)
                        for (var v =
                                Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), C = y = u = 0, s = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (z = 0; z < n[s].dataPoint.y.length; z++) u = Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y[z])), u < v && (v = u, x = s);
                            else y += n[s].dataPoint.y, C = n[s].dataPoint.x.getTime ? n[s].dataPoint.x.getTime() : n[s].dataPoint.x, C = 100 * (y / n[s].dataSeries.plotUnit.dataPointYSums[C]), u = Math.abs(a - this.parent.convertValueToPixel(C)), u < v && (v = u, x = s);
                    else
                        for (v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)),
                            s = x = u = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (z = 0; z < n[s].dataPoint.y.length; z++) u = Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y[z])), u < v && (v = u, x = s);
                            else u = Math.abs(a - this.parent.convertValueToPixel(n[s].dataPoint.y)), u < v && (v = u, x = s);
                    z = n[x];
                    if ("bottom" === this.parent._position || "top" === this.parent._position) {
                        b = 0;
                        if ("rangeBar" === this.parent.dataSeries[x].type || "error" === this.parent.dataSeries[x].type) {
                            v = Math.abs(a - this.parent.convertValueToPixel(z.dataPoint.y[0]));
                            for (s = u = 0; s < z.dataPoint.y.length; s++) u = Math.abs(a - this.parent.convertValueToPixel(z.dataPoint.y[s])), u < v && (v = u, b = s);
                            m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataPoint.y[b]) << 0;
                            this.value = z.dataPoint.y[b];
                            k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.y[b] }) : r(this.options.label) ? ea(c ? c : z.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) :
                                this.label
                        } else if ("stackedBar" === this.parent.dataSeries[x].type) {
                            v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                            y = u = 0;
                            for (s = x; 0 <= s; s--) y += n[s].dataPoint.y, u = Math.abs(a - this.parent.convertValueToPixel(y)), u < v && (v = u, b = s);
                            m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y) << 0) + 0.5 : this.parent.convertValueToPixel(y) << 0;
                            this.value = y;
                            k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.y }) : r(this.options.label) ?
                                ea(c ? c : z.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else if ("stackedBar100" === this.parent.dataSeries[x].type) {
                            v = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                            C = y = u = 0;
                            for (s = x; 0 <= s; s--) y += n[s].dataPoint.y, C = n[s].dataPoint.x.getTime ? n[s].dataPoint.x.getTime() : n[s].dataPoint.x, C = 100 * (y / n[s].dataSeries.plotUnit.dataPointYSums[C]), u = Math.abs(a - this.parent.convertValueToPixel(C)), u < v && (v = u, b = s);
                            m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(C) << 0) + 0.5 : this.parent.convertValueToPixel(C) <<
                                0;
                            this.value = C;
                            k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: C }) : r(this.options.label) ? ea(c ? c : C, this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataPoint.y) << 0, this.value = z.dataPoint.y, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.y }) :
                            r(this.options.label) ? ea(c ? c : z.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        b = e = m;
                        f = this.chart.plotArea.y1;
                        h = this.chart.plotArea.y2;
                        this.bounds = { x1: b - p / 2, y1: f, x2: e + p / 2, y2: h };
                        k.x = b - k.measureText().width / 2;
                        k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                        k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                        k.y + k.height > this.chart.bounds.y2 ? k.y =
                            this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1)
                    } else if ("left" === this.parent._position || "right" === this.parent._position) {
                        f = h = w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataPoint.x) << 0;
                        b = this.chart.plotArea.x1;
                        e = this.chart.plotArea.x2;
                        this.bounds = { x1: b, y1: f - p / 2, x2: e, y2: h + p / 2 };
                        C = !1;
                        if (this.parent.labels)
                            for (n = Math.ceil(this.parent.interval), s = 0; s < this.parent.viewportMaximum; s += n)
                                if (this.parent.labels[s]) C = !0;
                                else { C = !1; break }
                        if (C) { if ("axisX" === this.parent.type)
                                for (s = this.parent.convertPixelToValue({ y: d }), v = null, x = 0; x < this.parent.dataSeries.length; x++)(v = this.parent.dataSeries[x].getDataPointAtX(s, !0)) && 0 <= v.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.x }) : r(this.options.label) ? v.dataPoint.label : this.label) } else "dateTime" === this.parent.valueType ? k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: z.dataPoint.x
                        }) : r(this.options.label) ? Aa(z.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.x }) : r(this.options.label) ? ea(z.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                        this.value = z.dataPoint.x;
                        k.y = h + k.fontSize / 2 - k.measureText().height /
                            2 + 2;
                        k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                        "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2)
                    }
                } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    s = this.parent.convertPixelToValue({ x: a });
                    for (x = 0; x < this.parent.dataSeries.length; x++)(v =
                        this.parent.dataSeries[x].getDataPointAtX(s, !0)) && 0 <= v.index && (v.dataSeries = this.parent.dataSeries[x], null !== v.dataPoint.y && v.dataSeries.visible && n.push(v));
                    if (0 === n.length) return;
                    n.sort(function(a, b) { return a.distance - b.distance });
                    z = n[0];
                    b = e = m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataPoint.x) << 0;
                    f = this.chart.plotArea.y1;
                    h = this.chart.plotArea.y2;
                    this.bounds = { x1: b - p / 2, y1: f, x2: e + p / 2, y2: h };
                    C = !1;
                    if (this.parent.labels)
                        for (n = Math.ceil(this.parent.interval),
                            s = 0; s < this.parent.viewportMaximum; s += n)
                            if (this.parent.labels[s]) C = !0;
                            else { C = !1; break }
                    if (C) { if ("axisX" === this.parent.type)
                            for (s = this.parent.convertPixelToValue({ x: a }), v = null, x = 0; x < this.parent.dataSeries.length; x++)(v = this.parent.dataSeries[x].getDataPointAtX(s, !0)) && 0 <= v.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.x }) : r(this.options.label) ? v.dataPoint.label : this.label) } else "dateTime" === this.parent.valueType ?
                        k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.x }) : r(this.options.label) ? Aa(z.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.x }) : r(this.options.label) ? ea(z.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                    this.value = z.dataPoint.x;
                    k.x = b - k.measureText().width / 2;
                    k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
                    k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) {
                    !r(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (s = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
                    for (x = 0; x < this.parent.dataSeries.length; x++)(v = this.parent.dataSeries[x].getDataPointAtX(s, !0)) && 0 <= v.index && (v.dataSeries = this.parent.dataSeries[x], null !== v.dataPoint.y && v.dataSeries.visible && n.push(v));
                    if (0 === n.length) return;
                    n.sort(function(a, b) { return a.distance - b.distance });
                    x = 0;
                    if ("rangeColumn" === n[0].dataSeries.type || "rangeArea" === n[0].dataSeries.type || "error" === n[0].dataSeries.type || "rangeSplineArea" === n[0].dataSeries.type || "candlestick" === n[0].dataSeries.type || "ohlc" === n[0].dataSeries.type ||
                        "boxAndWhisker" === n[0].dataSeries.type)
                        for (v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y[0])), s = u = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (z = 0; z < n[s].dataPoint.y.length; z++) u = Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y[z])), u < v && (v = u, x = s);
                            else u = Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y)), u < v && (v = u, x = s);
                    else if ("stackedColumn" === n[0].dataSeries.type || "stackedArea" === n[0].dataSeries.type)
                        for (v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)),
                            s = y = u = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (z = 0; z < n[s].dataPoint.y.length; z++) u = Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y[z])), u < v && (v = u, x = s);
                            else y += n[s].dataPoint.y, u = Math.abs(d - this.parent.convertValueToPixel(y)), u < v && (v = u, x = s);
                    else if ("stackedColumn100" === n[0].dataSeries.type || "stackedArea100" === n[0].dataSeries.type)
                        for (v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), s = C = y = u = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (z =
                                    0; z < n[s].dataPoint.y.length; z++) u = Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y[z])), u < v && (v = u, x = s);
                            else y += n[s].dataPoint.y, C = n[s].dataPoint.x.getTime ? n[s].dataPoint.x.getTime() : n[s].dataPoint.x, C = 100 * (y / n[s].dataSeries.plotUnit.dataPointYSums[C]), u = Math.abs(d - this.parent.convertValueToPixel(C)), u < v && (v = u, x = s);
                    else
                        for (v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), s = u = 0; s < n.length; s++)
                            if (n[s].dataPoint.y && n[s].dataPoint.y.length)
                                for (z = 0; z < n[s].dataPoint.y.length; z++) u =
                                    Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y[z])), u < v && (v = u, x = s);
                            else u = Math.abs(d - this.parent.convertValueToPixel(n[s].dataPoint.y)), u < v && (v = u, x = s);
                    z = n[x];
                    b = 0;
                    if ("rangeColumn" === this.parent.dataSeries[x].type || "rangeArea" === this.parent.dataSeries[x].type || "error" === this.parent.dataSeries[x].type || "rangeSplineArea" === this.parent.dataSeries[x].type || "candlestick" === this.parent.dataSeries[x].type || "ohlc" === this.parent.dataSeries[x].type || "boxAndWhisker" === this.parent.dataSeries[x].type) {
                        v =
                            Math.abs(d - this.parent.convertValueToPixel(z.dataPoint.y[0]));
                        for (s = u = 0; s < z.dataPoint.y.length; s++) u = Math.abs(d - this.parent.convertValueToPixel(z.dataPoint.y[s])), u < v && (v = u, b = s);
                        w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(z.dataPoint.y[b]) << 0;
                        k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataPoint.y[b] }) : r(this.options.label) ? ea(c ? c : z.dataPoint.y[b], this.valueFormatString,
                            this.chart._cultureInfo) : this.label;
                        this.value = z.dataPoint.y[b]
                    } else if ("stackedColumn" === this.parent.dataSeries[x].type || "stackedArea" === this.parent.dataSeries[x].type) {
                        v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y));
                        y = u = 0;
                        for (s = x; 0 <= s; s--) y += n[s].dataPoint.y, u = Math.abs(d - this.parent.convertValueToPixel(y)), u < v && (v = u, b = s);
                        w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y) << 0) + 0.5 : this.parent.convertValueToPixel(y) << 0;
                        k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: z.dataPoint.y
                        }) : r(this.options.label) ? ea(c ? c : z.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = y
                    } else if ("stackedColumn100" === this.parent.dataSeries[x].type || "stackedArea100" === this.parent.dataSeries[x].type) {
                        v = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y));
                        y = u = 0;
                        for (s = x; 0 <= s; s--) y += n[s].dataPoint.y, C = n[s].dataPoint.x.getTime ? n[s].dataPoint.x.getTime() : n[s].dataPoint.x, C = 100 * (y / n[s].dataSeries.plotUnit.dataPointYSums[C]),
                            u = Math.abs(d - this.parent.convertValueToPixel(C)), u < v && (v = u, b = s);
                        w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(C) << 0) + 0.5 : this.parent.convertValueToPixel(C) << 0;
                        k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: C }) : r(this.options.label) ? ea(c ? c : C, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = C
                    } else "waterfall" === this.parent.dataSeries[x].type ? (w = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z.dataSeries.dataPointEOs[z.index].cumulativeSum) <<
                        0) + 0.5 : this.parent.convertValueToPixel(z.dataSeries.dataPointEOs[z.index].cumulativeSum) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: z.dataSeries.dataPointEOs[z.index].cumulativeSum }) : r(this.options.label) ? ea(c ? c : z.dataSeries.dataPointEOs[z.index].cumulativeSum, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = z.dataSeries.dataPointEOs[z.index].cumulativeSum) : (w = 1 === q.lineWidth % 2 ? (r(a) ? d : this.parent.convertValueToPixel(z.dataPoint.y) <<
                        0) + 0.5 : r(a) ? d : this.parent.convertValueToPixel(z.dataPoint.y) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : z.dataPoint.y }) : r(this.options.label) ? ea(c ? c : z.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = z.dataPoint.y);
                    f = h = w;
                    b = this.chart.plotArea.x1;
                    e = this.chart.plotArea.x2;
                    this.bounds = { x1: b, y1: f - p / 2, x2: e, y2: h + p / 2 };
                    k.y = h + k.fontSize / 2 - k.measureText().height / 2 + 2;
                    k.y - k.fontSize / 2 < this.chart.bounds.y1 ?
                        k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                    "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2)
                }
                n = null;
                if ("bottom" === this.parent._position || "top" === this.parent._position) "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize /
                    2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), b >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && e <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && (0 < p && (q.moveTo(b, f), q.lineTo(e, h), q.stroke(), this._hidden = !1), q.restore());
                if ("left" === this.parent._position ||
                    "right" === this.parent._position) "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width), h >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && f <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && (0 < p && (q.moveTo(b, f), q.lineTo(e,
                    h), q.stroke(), this._hidden = !1), q.restore())
            } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position) b = e = m = 1 === q.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, f = this.chart.plotArea.y1, h = this.chart.plotArea.y2, this.bounds = { x1: b - p / 2, y1: f, x2: e + p / 2, y2: h };
                else if ("left" === this.parent._position || "right" === this.parent._position) f = h = w = 1 === q.lineWidth % 2 ? (d << 0) + 0.5 : d << 0, b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = { x1: b, y1: f - p / 2, x2: e, y2: h + p / 2 };
                if ("xySwapped" === this.chart.plotInfo.axisPlacement)
                    if ("left" ===
                        this.parent._position || "right" === this.parent._position) {
                        C = !1;
                        if (this.parent.labels)
                            for (n = Math.ceil(this.parent.interval), s = 0; s < this.parent.viewportMaximum; s += n)
                                if (this.parent.labels[s]) C = !0;
                                else { C = !1; break }
                        if (C) {
                            if ("axisX" === this.parent.type)
                                for (s = this.parent.convertPixelToValue({ y: d }), v = null, x = 0; x < this.parent.dataSeries.length; x++)(v = this.parent.dataSeries[x].getDataPointAtX(s, !0)) && 0 <= v.index && (k.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: c ? c : this.parent.convertPixelToValue(a)
                                }) : r(this.options.label) ? v.dataPoint.label : this.label)
                        } else "dateTime" === this.parent.valueType ? k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : this.parent.convertPixelToValue(d) }) : r(this.options.label) ? Aa(c ? c : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (k.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : this.parent.convertPixelToValue(d)
                        }) : r(this.options.label) ? ea(c ? c : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label);
                        k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2;
                        k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                        "left" === this.parent._position ? k.x =
                            this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2)
                    } else {
                        if ("bottom" === this.parent._position || "top" === this.parent._position) k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : this.parent.convertPixelToValue(a) }) : r(this.options.label) ? ea(c ? c : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label, k.x = b - k.measureText().width /
                            2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2)
                    }
                else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    C = !1;
                    n = "";
                    if (this.parent.labels)
                        for (n = Math.ceil(this.parent.interval), s = 0; s < this.parent.viewportMaximum; s += n)
                            if (this.parent.labels[s]) C = !0;
                            else { C = !1; break }
                    if (C) { if ("axisX" === this.parent.type)
                            for (s = this.parent.convertPixelToValue({ x: a }), v = null, x = 0; x < this.parent.dataSeries.length; x++)(v = this.parent.dataSeries[x].getDataPointAtX(s, !0)) && 0 <= v.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : this.parent.convertPixelToValue(a) }) : r(this.options.label) ? c ? c : v.dataPoint.label : this.label) } else "dateTime" === this.parent.valueType ? k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c ? c : this.parent.convertPixelToValue(a)
                    }) : r(this.options.label) ? Aa(c ? c : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" }) : r(this.options.label) ? ea(c ? c : this.parent.convertPixelToValue(a),
                        this.valueFormatString, this.chart._cultureInfo) : this.label);
                    k.x = b - k.measureText().width / 2;
                    k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
                    k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) k.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c ? c : this.parent.convertPixelToValue(d)
                    }) : r(this.options.label) ? ea(c ? c : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label, k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), "left" === this.parent._position ? k.x =
                    this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 -
                    k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
                0 < p && (q.moveTo(b, f), q.lineTo(e, h), q.stroke(), this._hidden = !1);
                q.restore();
                this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d)
            }
            if ("bottom" === this.parent._position || "top" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(m);
            if ("left" === this.parent._position || "right" === this.parent._position) this._updatedValue =
                this.parent.convertPixelToValue(w);
            this._textBlock = k;
            r(c) || this.renderLabel();
            q.globalAlpha = g
        };
        Z.prototype.renderLabel = function() { r(this._textBlock) || (r(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden) || this._textBlock.render(!0) };
        na(X, ba);
        X.prototype._initialize = function() {
            this.updateOption("updated");
            this.updateOption("hidden");
            if (this.enabled) {
                this.container = document.createElement("div");
                this.container.setAttribute("class",
                    "canvasjs-chart-tooltip");
                this.container.style.position = "absolute";
                this.container.style.height = "auto";
                this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
                this.container.style.zIndex = "1000";
                this.container.style.pointerEvents = "none";
                this.container.style.display = "none";
                var a = document.createElement("div");
                a.style.width = "auto";
                a.style.height = "auto";
                a.style.minWidth = "50px";
                a.style.lineHeight = "normal";
                a.style.margin = "0px 0px 0px 0px";
                a.style.padding = "5px";
                a.style.fontFamily = "Calibri, Arial, Georgia, serif";
                a.style.fontWeight = "normal";
                a.style.fontStyle = w ? "italic" : "normal";
                a.style.fontSize = "14px";
                a.style.color = "#000000";
                a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
                a.style.textAlign = "left";
                a.style.border = "2px solid gray";
                a.style.background = w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
                a.style.textIndent = "0px";
                a.style.whiteSpace = "nowrap";
                a.style.borderRadius = "5px";
                a.style.MozUserSelect = "none";
                a.style.WebkitUserSelect = "none";
                a.style.msUserSelect = "none";
                a.style.userSelect = "none";
                w || (a.style.filter = "alpha(opacity = 90)",
                    a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
                a.innerText = "Sample Tooltip";
                this.container.appendChild(a);
                this.contentDiv = this.container.firstChild;
                this.container.style.borderRadius = this.contentDiv.style.borderRadius;
                this.chart._canvasJSContainer.appendChild(this.container)
            }
        };
        X.prototype.mouseMoveHandler = function(a, d) {
            this._lastUpdated && 4 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this.chart.resetOverlayedCanvas(),
                this._updateToolTip(a, d))
        };
        X.prototype._updateToolTip = function(a, d, c) {
            c = "undefined" === typeof c ? !0 : c;
            this.container || this._initialize();
            this.enabled || this.hide();
            if (!this.chart.disableToolTip) {
                if ("undefined" === typeof a || "undefined" === typeof d) { if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                    a = this._prevX;
                    d = this._prevY } else this._prevX = a, this._prevY = d;
                var b = null,
                    e = null,
                    f = [],
                    h = 0;
                if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                    if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                        var m = [];
                        if (this.chart.axisX)
                            for (var v = 0; v < this.chart.axisX.length; v++) { for (var h = this.chart.axisX[v].convertPixelToValue({ y: d }), k = null, b = 0; b < this.chart.axisX[v].dataSeries.length; b++)(k = this.chart.axisX[v].dataSeries[b].getDataPointAtX(h, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[v].dataSeries[b], null !== k.dataPoint.y && m.push(k));
                                k = null }
                        if (this.chart.axisX2)
                            for (v = 0; v < this.chart.axisX2.length; v++) {
                                h = this.chart.axisX2[v].convertPixelToValue({ y: d });
                                k = null;
                                for (b = 0; b < this.chart.axisX2[v].dataSeries.length; b++)(k =
                                    this.chart.axisX2[v].dataSeries[b].getDataPointAtX(h, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[v].dataSeries[b], null !== k.dataPoint.y && m.push(k));
                                k = null
                            }
                    } else {
                        m = [];
                        if (this.chart.axisX)
                            for (v = 0; v < this.chart.axisX.length; v++)
                                for (h = this.chart.axisX[v].convertPixelToValue({ x: a }), k = null, b = 0; b < this.chart.axisX[v].dataSeries.length; b++)(k = this.chart.axisX[v].dataSeries[b].getDataPointAtX(h, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[v].dataSeries[b], null !== k.dataPoint.y && m.push(k));
                        if (this.chart.axisX2)
                            for (v =
                                0; v < this.chart.axisX2.length; v++)
                                for (h = this.chart.axisX2[v].convertPixelToValue({ x: a }), k = null, b = 0; b < this.chart.axisX2[v].dataSeries.length; b++)(k = this.chart.axisX2[v].dataSeries[b].getDataPointAtX(h, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[v].dataSeries[b], null !== k.dataPoint.y && m.push(k))
                    }
                    if (0 === m.length) return;
                    m.sort(function(a, b) { return a.distance - b.distance });
                    c = m[0];
                    for (b = 0; b < m.length; b++) m[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && f.push(m[b]);
                    m = null
                } else {
                    if (b = this.chart.getDataPointAtXY(a,
                            d, c)) this.currentDataPointIndex = b.dataPointIndex, this.currentSeriesIndex = b.dataSeries.index;
                    else if (w)
                        if (b = $a(a, d, this.chart._eventManager.ghostCtx), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b]) { b = this.chart._eventManager.objectMap[b]; if ("legendItem" === b.objectType) return;
                            this.currentSeriesIndex = b.dataSeriesIndex;
                            this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1 } else this.currentDataPointIndex = -1;
                    else this.currentDataPointIndex = -1;
                    if (0 <= this.currentSeriesIndex) {
                        e =
                            this.chart.data[this.currentSeriesIndex];
                        k = {};
                        if (0 <= this.currentDataPointIndex) b = e.dataPoints[this.currentDataPointIndex], k.dataSeries = e, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - h), "waterfall" === e.type && (k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                        else {
                            if (!this.enabled || "line" !== e.type && "stepLine" !== e.type && "spline" !== e.type && "area" !== e.type &&
                                "stepArea" !== e.type && "splineArea" !== e.type && "stackedArea" !== e.type && "stackedArea100" !== e.type && "rangeArea" !== e.type && "rangeSplineArea" !== e.type && "candlestick" !== e.type && "ohlc" !== e.type && "boxAndWhisker" !== e.type) return;
                            h = e.axisX.convertPixelToValue({ x: a });
                            k = e.getDataPointAtX(h, c);
                            r(k) || (k.dataSeries = e, this.currentDataPointIndex = k.index, b = k.dataPoint)
                        }
                        if (!r(k) && !r(k.dataPoint) && !r(k.dataPoint.y))
                            if (k.dataSeries.axisY)
                                if (0 < k.dataPoint.y.length) {
                                    for (b = c = 0; b < k.dataPoint.y.length; b++) k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ?
                                        c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                                    c < k.dataPoint.y.length && c > -k.dataPoint.y.length && f.push(k)
                                } else "column" === e.type || "bar" === e.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && f.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && f.push(k) : "bubble" === e.type ? (c = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size / 2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum -
                                    c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && f.push(k)) : "waterfall" === e.type ? (c = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && f.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === e.type || "stackedBar" === e.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <=
                                    k.dataSeries.axisY.viewportMaximum) && f.push(k);
                        else f.push(k)
                    }
                }
                if (0 < f.length) {
                    if (this.highlightObjects(f), this.enabled) {
                        c = "";
                        c = this.getToolTipInnerHTML({ entries: f });
                        if (null !== c) {
                            this.contentDiv.innerHTML = c;
                            if (this.isToolTipDefinedInData && r(this.options.content) && r(this.options.contentFormatter))
                                for (h = this.contentDiv.getElementsByTagName("span"), b = 0; b < h.length; b++) h[b] && (h[b].style.color = h[b].getAttribute("data-color"));
                            h = !1;
                            "none" === this.container.style.display && (h = !0, this.container.style.display =
                                "block");
                            try {
                                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor =
                                    this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[e.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index %
                                        f[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily =
                                    this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : w ? "italic" : "normal"
                            } catch (n) {}
                            "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type || "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ?
                                a = a - 10 - this.container.clientWidth : (a = f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                            0 > a && (a += this.container.clientWidth + 20);
                            a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                            d = 1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !==
                                f[0].dataSeries.type && "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : d : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                            d = -d + 10;
                            0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                            this.fixMozTransitionDelay(a, d);
                            !this.animationEnabled || h ? this.disableAnimation() :
                                (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                            this.positionLeft = a;
                            this.positionBottom = d;
                            this.container.style.left = a + "px";
                            this.container.style.bottom = d + "px"
                        } else this.hide(!1), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
                        d = [];
                        for (b = 0; b < f.length; b++) d.push({ xValue: f[b].dataPoint.x, dataPoint: f[b].dataPoint, dataSeries: f[b].dataSeries, dataPointIndex: f[b].index, dataSeriesIndex: f[b].dataSeries._index });
                        d = {
                            chart: this.chart,
                            toolTip: this.options,
                            content: c,
                            entries: d
                        };
                        this._entries = f;
                        this.dispatchEvent("updated", d, this)
                    }
                } else this.hide(), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this)
            }
        };
        X.prototype.highlightObjects = function(a) {
            var d = this.chart.overlaidCanvasCtx;
            if (r(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas) this.chart.resetOverlayedCanvas(), d.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip";
            d.save();
            var c = this.chart.plotArea,
                b = 0;
            d.beginPath();
            d.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
            d.clip();
            for (c = 0; c < a.length; c++) {
                var e = a[c];
                if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
                    var b = this.chart.data[e.dataSeriesIndex],
                        f = b.dataPoints[e.dataPointIndex],
                        h = e.dataPointIndex;
                    !1 === f.highlightEnabled || !0 !== b.highlightEnabled && !0 !== f.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type ||
                        "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (f = b.getMarkerProperties(h, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), $.drawMarkers([f]), "undefined" !== typeof e.y2 && (f = b.getMarkerProperties(h, e.x1, e.y2, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF",
                            f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), $.drawMarkers([f]))) : "bubble" === b.type ? (f = b.getMarkerProperties(h, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = e.size, f.color = "white", f.borderColor = "white", d.globalAlpha = 0.3, $.drawMarkers([f]), d.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? V(d, e.x1, e.y1, e.x2, e.y2, "white",
                            0, null, !1, !1, !1, !1, 0.3) : "pie" === b.type || "doughnut" === b.type ? W(d, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ? oa(d, e.funnelSection, 0.3, "white") : "candlestick" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), d.lineTo(e.x3 - b, Math.min(e.y1, e.y4)), d.stroke(), d.beginPath(), d.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), d.lineTo(e.x3 -
                            b, Math.max(e.y2, e.y3)), d.stroke(), V(d, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), d.globalAlpha = 1) : "ohlc" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, e.y2), d.lineTo(e.x3 - b, e.y3), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y1), d.lineTo(e.x1, e.y1), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4), d.lineTo(e.x2, e.y4), d.stroke(), d.globalAlpha = 1) : "boxAndWhisker" ===
                        b.type ? (d.save(), d.globalAlpha = 1, d.strokeStyle = e.stemColor, d.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (d.beginPath(), d.moveTo(e.x3, e.y2 + e.borderThickness / 2), d.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), d.lineTo(e.x3, e.y3 - e.borderThickness / 2), d.stroke()), d.beginPath(), V(d, e.x1 - e.borderThickness / 2, Math.max(e.y2 + e.borderThickness / 2, e.y3 + e.borderThickness / 2), e.x2 + e.borderThickness / 2, Math.min(e.y2 - e.borderThickness / 2, e.y3 - e.borderThickness /
                            2), "transparent", e.borderThickness, e.color, !1, !1, !1, !1), d.globalAlpha = 1, d.strokeStyle = e.whiskerColor, d.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), d.stroke(), d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), d.stroke()), d.globalAlpha = 1, d.strokeStyle = e.lineColor, d.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (d.beginPath(),
                            d.moveTo(e.x1, e.y5), d.lineTo(e.x2, e.y5), d.stroke()), d.restore(), d.globalAlpha = 1) : "error" === b.type && x(d, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3))
                }
            }
            d.restore();
            d.globalAlpha = 1;
            d.beginPath()
        };
        X.prototype.getToolTipInnerHTML = function(a) {
            a = a.entries;
            var d = null,
                c = null,
                b = null,
                e = 0,
                f = "";
            this.isToolTipDefinedInData = !0;
            for (var h = 0; h < a.length; h++)
                if (a[h].dataSeries.toolTipContent || a[h].dataPoint.toolTipContent) { this.isToolTipDefinedInData = !1; break }
            if (this.isToolTipDefinedInData &&
                (this.content && "function" === typeof this.content || this.contentFormatter)) a = { chart: this.chart, toolTip: this.options, entries: a }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
            else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                for (var m = null, r = "", h = 0; h < a.length; h++) c = a[h].dataSeries, b = a[h].dataPoint, e = a[h].index, f = "", 0 === h && (this.isToolTipDefinedInData && !this.content) && (this.chart.axisX && 0 < this.chart.axisX.length ? r += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] :
                    "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (r += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}"), r += "</br>", r = this.chart.replaceKeywordsWithValue(r, b, c, e)), null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type ||
                    "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}",
                        m = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type ||
                    "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ?
                        c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") : "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title +
                        "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
                    null === d && (d = ""), !0 === this.reversed ? (d = this.chart.replaceKeywordsWithValue(f, b, c, e) + d, h < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(f, b, c, e), h < a.length - 1 && (d += "</br>")));
                null !== d && (d = r + d)
            } else {
                c = a[0].dataSeries;
                b = a[0].dataPoint;
                e = a[0].index;
                if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent) return null;
                "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" ===
                    c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? f = b.toolTipContent ?
                    b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ?
                        "" : "'{color}'") + "\"'>" + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" ===
                    c.type || "ohlc" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content &&
                        "function" !== typeof this.content ? this.content : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
                null === d && (d = "");
                d += this.chart.replaceKeywordsWithValue(f, b, c, e)
            }
            return d
        };
        X.prototype.enableAnimation = function() { if (!this.container.style.WebkitTransition) { var a = this.getContainerTransition(this.containerTransitionDuration);
                this.container.style.WebkitTransition = a;
                this.container.style.MsTransition = a;
                this.container.style.transition = a;
                this.container.style.MozTransition = this.mozContainerTransition } };
        X.prototype.disableAnimation = function() {
            this.container.style.WebkitTransition && (this.container.style.WebkitTransition =
                "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
        };
        X.prototype.hide = function(a) { this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas()) };
        X.prototype.show = function(a, d, c) { this._updateToolTip(a, d, "undefined" === typeof c ? !1 : c) };
        X.prototype.showAtIndex = function(a, d) {};
        X.prototype.showAtX = function(a, d) {
            if (!this.enabled) return !1;
            this.chart.clearedOverlayedCanvas = null;
            var c, b, e, f = [];
            e = !1;
            d = !r(d) && 0 <= d && d < this.chart.data.length ? d : 0;
            if (this.shared)
                for (var h = 0; h < this.chart.data.length; h++) c = this.chart.data[h], (b = c.getDataPointAtX(a, !1)) && (b.dataPoint && !r(b.dataPoint.y) && c.visible) && (b.dataSeries = c, f.push(b));
            else c = this.chart.data[d], (b = c.getDataPointAtX(a, !1)) && (b.dataPoint && !r(b.dataPoint.y) && c.visible) && (b.dataSeries = c, f.push(b));
            if (0 < f.length) {
                for (h = 0; h < f.length; h++)
                    if (b = f[h], b.dataPoint.x < b.dataSeries.axisX.viewportMinimum ||
                        b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum) e = !0;
                    else { e = !1; break }
                if (e) return this.hide(), !1;
                this.highlightObjects(f);
                this._entries = f;
                h = "";
                h = this.getToolTipInnerHTML({ entries: f });
                if (null !== h) {
                    this.contentDiv.innerHTML = h;
                    if (this.isToolTipDefinedInData && r(this.options.content) && r(this.options.contentFormatter))
                        for (b = this.contentDiv.getElementsByTagName("span"), h = 0; h < b.length; h++) b[h] && (b[h].style.color =
                            b[h].getAttribute("data-color"));
                    h = !1;
                    "none" === this.container.style.display && (h = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : w ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 <
                            f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[c.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ?
                            this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize ||
                            0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : w ? "italic" : "normal"
                    } catch (m) {}
                    "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type ?
                        c = mouseX - 10 - this.container.clientWidth : (c = "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y) - this.container.clientWidth << 0 : f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
                    0 > c && (c += this.container.clientWidth + 20);
                    c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c =
                        Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                    f = 1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type && "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) :
                        f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y) : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                    f = -f + 10;
                    0 < f + this.container.clientHeight + 5 && (f -= f + this.container.clientHeight + 5 - 0);
                    this.fixMozTransitionDelay(c, f);
                    !this.animationEnabled || h ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                    this.container.style.left = c + "px";
                    this.container.style.bottom = f + "px"
                } else return this.hide(!1), !1
            } else return this.hide(), !1;
            return !0
        };
        X.prototype.fixMozTransitionDelay = function(a, d) { if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
            else { var c = parseFloat(this.container.style.left),
                    c = isNaN(c) ? 0 : c,
                    b = parseFloat(this.container.style.bottom),
                    b = isNaN(b) ? 0 : b;
                10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0) } };
        X.prototype.getContainerTransition = function(a) {
            return "left " +
                a + "s ease-out 0s, bottom " + a + "s ease-out 0s"
        };
        da.prototype.reset = function() { this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.eventObjects = [];
            w && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath()) };
        da.prototype.getNewObjectTrackingId = function() { return ++this.lastObjectId };
        da.prototype.mouseEventHandler = function(a) {
            if ("mousemove" === a.type || "click" === a.type) {
                var d = [],
                    c = Oa(a),
                    b = null;
                if ((b =
                        this.chart.getObjectAtXY(c.x, c.y, !1)) && "undefined" !== typeof this.objectMap[b])
                    if (b = this.objectMap[b], "dataPoint" === b.objectType) {
                        var e = this.chart.data[b.dataSeriesIndex],
                            f = e.dataPoints[b.dataPointIndex],
                            h = b.dataPointIndex;
                        b.eventParameter = { x: c.x, y: c.y, dataPoint: f, dataSeries: e.options, dataPointIndex: h, dataSeriesIndex: e.index, chart: this.chart };
                        b.eventContext = { context: f, userContext: f, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                        d.push(b);
                        b = this.objectMap[e.id];
                        b.eventParameter = { x: c.x, y: c.y, dataPoint: f, dataSeries: e.options, dataPointIndex: h, dataSeriesIndex: e.index, chart: this.chart };
                        b.eventContext = { context: e, userContext: e.options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                        d.push(this.objectMap[e.id])
                    } else "legendItem" === b.objectType && (e = this.chart.data[b.dataSeriesIndex], f = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = {
                        x: c.x,
                        y: c.y,
                        dataSeries: e.options,
                        dataPoint: f,
                        dataPointIndex: b.dataPointIndex,
                        dataSeriesIndex: b.dataSeriesIndex,
                        chart: this.chart
                    }, b.eventContext = { context: this.chart.legend, userContext: this.chart.legend.options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }, d.push(b));
                e = [];
                for (c = 0; c < this.mouseoveredObjectMaps.length; c++) { f = !0; for (b = 0; b < d.length; b++)
                        if (d[b].id === this.mouseoveredObjectMaps[c].id) { f = !1; break }
                    f ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c]) }
                this.mouseoveredObjectMaps = e;
                for (c = 0; c < d.length; c++) {
                    e = !1;
                    for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
                        if (d[c].id === this.mouseoveredObjectMaps[b].id) { e = !0; break }
                    e || (this.fireEvent(d[c], "mouseover", a), this.mouseoveredObjectMaps.push(d[c]));
                    "click" === a.type ? this.fireEvent(d[c], "click", a) : "mousemove" === a.type && this.fireEvent(d[c], "mousemove", a)
                }
            }
        };
        da.prototype.fireEvent = function(a, d, c) {
            if (a && d) {
                var b = a.eventParameter,
                    e = a.eventContext,
                    f = a.eventContext.userContext;
                f && (e && f[e[d]]) && f[e[d]].call(f, b);
                "mouseout" !== d ? f.cursor && f.cursor !== c.target.style.cursor &&
                    (c.target.style.cursor = f.cursor) : (c.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
                "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
                "click" === d && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b)
            }
        };
        ha.prototype.animate = function(a, d, c, b, e) {
            var f = this;
            this.chart.isAnimating = !0;
            e = e || K.easing.linear;
            c && this.animations.push({ startTime: (new Date).getTime() + (a ? a : 0), duration: d, animationCallback: c, onComplete: b });
            for (a = []; 0 < this.animations.length;)
                if (d = this.animations.shift(), c = (new Date).getTime(), b = 0, d.startTime <= c && (b = e(Math.min(c - d.startTime, d.duration), 0, 1, d.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d), d.animationCallback(b), 1 <= b && d.onComplete) d.onComplete();
            this.animations = a;
            0 < this.animations.length ? this.animationRequestId =
                this.chart.requestAnimFrame.call(window, function() { f.animate.call(f) }) : this.chart.isAnimating = !1
        };
        ha.prototype.cancelAllAnimations = function() { this.animations = [];
            this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
            this.animationRequestId = null;
            this.chart.isAnimating = !1 };
        var K = {
                yScaleAnimation: function(a, d) { if (0 !== a) { var c = d.dest,
                            b = d.source.canvas,
                            e = d.animationBase;
                        c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / ga, a * c.canvas.height / ga) } },
                xScaleAnimation: function(a,
                    d) { if (0 !== a) { var c = d.dest,
                            b = d.source.canvas,
                            e = d.animationBase;
                        c.drawImage(b, 0, 0, b.width, b.height, e - e * a, 0, a * c.canvas.width / ga, c.canvas.height / ga) } },
                xClipAnimation: function(a, d) { if (0 !== a) { var c = d.dest,
                            b = d.source.canvas;
                        c.save();
                        0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / ga, b.height / ga);
                        c.restore() } },
                fadeInAnimation: function(a, d) { if (0 !== a) { var c = d.dest,
                            b = d.source.canvas;
                        c.save();
                        c.globalAlpha = a;
                        c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / ga, c.canvas.height / ga);
                        c.restore() } },
                easing: {
                    linear: function(a,
                        d, c, b) { return c * a / b + d },
                    easeOutQuad: function(a, d, c, b) { return -c * (a /= b) * (a - 2) + d },
                    easeOutQuart: function(a, d, c, b) { return -c * ((a = a / b - 1) * a * a * a - 1) + d },
                    easeInQuad: function(a, d, c, b) { return c * (a /= b) * a + d },
                    easeInQuart: function(a, d, c, b) { return c * (a /= b) * a * a * a + d }
                }
            },
            $ = {
                drawMarker: function(a, d, c, b, e, f, h, m) {
                    if (c) {
                        var r = 1;
                        c.fillStyle = f ? f : "#000000";
                        c.strokeStyle = h ? h : "#000000";
                        c.lineWidth = m ? m : 0;
                        c.setLineDash && c.setLineDash(N("solid", m));
                        "circle" === b ? (c.moveTo(a, d), c.beginPath(), c.arc(a, d, e / 2, 0, 2 * Math.PI, !1), f && c.fill(),
                                m && (h ? c.stroke() : (r = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = r))) : "square" === b ? (c.beginPath(), c.rect(a - e / 2, d - e / 2, e, e), f && c.fill(), m && (h ? c.stroke() : (r = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = r))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - e / 2, d + e / 2), c.lineTo(a + e / 2, d + e / 2), c.lineTo(a, d - e / 2), c.closePath(), f && c.fill(), m && (h ? c.stroke() : (r = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = r)), c.beginPath()) :
                            "cross" === b && (c.strokeStyle = f, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d - e / 2), c.lineTo(a + e / 2, d + e / 2), c.stroke(), c.moveTo(a + e / 2, d - e / 2), c.lineTo(a - e / 2, d + e / 2), c.stroke())
                    }
                },
                drawMarkers: function(a) { for (var d = 0; d < a.length; d++) { var c = a[d];
                        $.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness) } }
            };
        return m
    }();
    x.version = "v3.6.6 GA";
    window.CanvasJS && (x && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = x)
})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() { return this.context_ || (this.context_ = new C(this)) }

    function W(a, b, c) { var g = M.call(arguments, 2); return function() { return a.apply(b, g.concat(M.call(arguments))) } }

    function N(a) { return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;") }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) { a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px") }

    function D() { return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ] }

    function t(a, b) { for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) { for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f }
        return c }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) { var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(","); if (4 != b.length || "a" != a.charAt(3)) b[3] = 1; return b }

    function E(a, b, c) { return Math.min(c, Math.max(b, a)) }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) { c = Q(a);
            b = "#"; for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3] } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else { var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3) }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = { color: b, alpha: c }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) { a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
        a.currentX_ = g.x;
        a.currentY_ = g.y }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) { h = e.x1_ / f;
                c = e.y1_ / d; var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0) } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) { return a.offset - b.offset });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) { var t = f[r];
                n.push(t.offset * m + u + " " + t.color) }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) { a = a.m_; return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r } }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) { this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = [] }

    function I(a, b) { if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR"); if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR"); switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat"; break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b; break;
            default:
                throw new A("SYNTAX_ERR"); }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height }

    function A(a) { this.code = this[a];
        this.message = a + ": DOM Exception " + this.code }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) { a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a)) },
        init_: function(a) { a = a.getElementsByTagName("canvas"); for (var b = 0; b < a.length; b++) this.initElement(a[b]) },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = { butt: "flat", round: "round" },
        d = C.prototype;
    d.clearRect = function() { this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = "" };
    d.beginPath = function() { this.currentPath_ = [] };
    d.moveTo = function(a, b) { var c = s(this, a, b);
        this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y };
    d.lineTo = function(a, b) { var c = s(this, a, b);
        this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) { e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e) };
    d.quadraticCurveTo = function(a, b, c, g) { a = s(this, a, b);
        c = s(this, c, g);
        g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
        R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c) };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) { this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath() };
    d.strokeRect = function(a, b, c, g) { var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) { var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g; return e };
    d.createRadialGradient = function(a, b, c, g, e, f) { var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f; return d };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) { var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), ""); var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');") } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = { x: null, y: null }, d = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) { if (null == c.x || f.x < c.x) c.x = f.x; if (null == d.x || f.x > d.x) d.x = f.x; if (null == c.y || f.y < c.y) c.y = f.y; if (null == d.y || f.y > d.y) d.y = f.y }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() { this.stroke(!0) };
    d.closePath = function() { this.currentPath_.push({ type: "close" }) };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() { this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop()) };
    d.translate = function(a, b) { z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1) };
    d.rotate = function(a) { var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1) };
    d.scale = function(a, b) { this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0) };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) { z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0) };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else { var l = document.createElement("div").style; try { l.font = h } catch (u) {}
            h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" } }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75; break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25 }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05; break;
            case "center":
                d = r = 500 }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, { x: -d, y: 0 }, { x: r, y: h.size });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) { this.drawText_(a, b, c, d, !1) };
    d.strokeText = function(a,
        b, c, d) { this.drawText_(a, b, c, d, !0) };
    d.measureText = function(a) { this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild); var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a)); return { width: this.textMeasureEl_.offsetWidth } };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) { return new I(a, b) };
    w.prototype.addColorStop = function(a, b) { b = G(b);
        this.colors_.push({ offset: a, color: b.color, alpha: b.alpha }) };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();
/*tslint:enable*/
/*eslint-enable*/
/*jshint ignore:end*/