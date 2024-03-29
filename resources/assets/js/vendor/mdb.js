function scaleVideoContainer() {
    var t = $(window).height() + 5,
        e = parseInt(t) + "px";
    $(".homepage-hero-module").css("height", e) }

function initBannerVideoSize(t) { $(t).each(function() { $(this).data("height", $(this).height()), $(this).data("width", $(this).width()) }), scaleBannerVideoSize(t) }

function scaleBannerVideoSize(t) {
    var n, o, e = $(window).width(),
        i = $(window).height() + 5;
    $(t).each(function() {
        var t = $(this).data("height") / $(this).data("width");
        $(this).width(e), 1e3 > e && (o = i, n = o / t, $(this).css({ "margin-top": 0, "margin-left": -(n - e) / 2 + "px" }), $(this).width(n).height(o)), $(".homepage-hero-module .video-container video").addClass("fadeIn animated") }) }
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(t, e, i, n, o) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, o) }, easeInQuad: function(t, e, i, n, o) {
            return n * (e /= o) * e + i }, easeOutQuad: function(t, e, i, n, o) {
            return -n * (e /= o) * (e - 2) + i }, easeInOutQuad: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i }, easeInCubic: function(t, e, i, n, o) {
            return n * (e /= o) * e * e + i }, easeOutCubic: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e + 1) + i }, easeInOutCubic: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i }, easeInQuart: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e + i }, easeOutQuart: function(t, e, i, n, o) {
            return -n * ((e = e / o - 1) * e * e * e - 1) + i }, easeInOutQuart: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i }, easeInQuint: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e * e + i }, easeOutQuint: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e * e * e + 1) + i }, easeInOutQuint: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i }, easeInSine: function(t, e, i, n, o) {
            return -n * Math.cos(e / o * (Math.PI / 2)) + n + i }, easeOutSine: function(t, e, i, n, o) {
            return n * Math.sin(e / o * (Math.PI / 2)) + i }, easeInOutSine: function(t, e, i, n, o) {
            return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i }, easeInExpo: function(t, e, i, n, o) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i }, easeOutExpo: function(t, e, i, n, o) {
            return e == o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i }, easeInOutExpo: function(t, e, i, n, o) {
            return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i }, easeInCirc: function(t, e, i, n, o) {
            return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i }, easeOutCirc: function(t, e, i, n, o) {
            return n * Math.sqrt(1 - (e = e / o - 1) * e) + i }, easeInOutCirc: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i }, easeInElastic: function(t, e, i, n, o) {
            var a = 1.70158,
                s = 0,
                r = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (s || (s = .3 * o), r < Math.abs(n)) { r = n;
                var a = s / 4 } else var a = s / (2 * Math.PI) * Math.asin(n / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / s)) + i }, easeOutElastic: function(t, e, i, n, o) {
            var a = 1.70158,
                s = 0,
                r = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (s || (s = .3 * o), r < Math.abs(n)) { r = n;
                var a = s / 4 } else var a = s / (2 * Math.PI) * Math.asin(n / r);
            return r * Math.pow(2, -10 * e) * Math.sin((e * o - a) * (2 * Math.PI) / s) + n + i }, easeInOutElastic: function(t, e, i, n, o) {
            var a = 1.70158,
                s = 0,
                r = n;
            if (0 == e) return i;
            if (2 == (e /= o / 2)) return i + n;
            if (s || (s = o * (.3 * 1.5)), r < Math.abs(n)) { r = n;
                var a = s / 4 } else var a = s / (2 * Math.PI) * Math.asin(n / r);
            return 1 > e ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / s)) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - a) * (2 * Math.PI) / s) * .5 + n + i }, easeInBack: function(t, e, i, n, o, a) {
            return void 0 == a && (a = 1.70158), n * (e /= o) * e * ((a + 1) * e - a) + i }, easeOutBack: function(t, e, i, n, o, a) {
            return void 0 == a && (a = 1.70158), n * ((e = e / o - 1) * e * ((a + 1) * e + a) + 1) + i }, easeInOutBack: function(t, e, i, n, o, a) {
            return void 0 == a && (a = 1.70158), (e /= o / 2) < 1 ? n / 2 * (e * e * (((a *= 1.525) + 1) * e - a)) + i : n / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + i }, easeInBounce: function(t, e, i, n, o) {
            return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i }, easeOutBounce: function(t, e, i, n, o) {
            return (e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i }, easeInOutBounce: function(t, e, i, n, o) {
            return o / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i } }),
    function(t) { t.Package ? Materialize = {} : t.Materialize = {} }(window), Materialize.guid = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) }
        return function() {
            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t() } }(), Materialize.elementOrParentIsFixed = function(t) {
        var e = $(t),
            i = e.add(e.parents()),
            n = !1;
        return i.each(function() {
            return "fixed" === $(this).css("position") ? (n = !0, !1) : void 0 }), n };
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity, jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(t) {
        function e(t) {
            var e = t.length,
                n = i.type(t);
            return "function" === n || i.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t }
        if (!t.jQuery) {
            var i = function(t, e) {
                return new i.fn.init(t, e) };
            i.isWindow = function(t) {
                return null != t && t == t.window }, i.type = function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[s.call(t)] || "object" : typeof t }, i.isArray = Array.isArray || function(t) {
                return "array" === i.type(t) }, i.isPlainObject = function(t) {
                var e;
                if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
                try {
                    if (t.constructor && !a.call(t, "constructor") && !a.call(t.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) {
                    return !1 }
                for (e in t);
                return void 0 === e || a.call(t, e) }, i.each = function(t, i, n) {
                var o, a = 0,
                    s = t.length,
                    r = e(t);
                if (n) {
                    if (r)
                        for (; s > a && (o = i.apply(t[a], n), o !== !1); a++);
                    else
                        for (a in t)
                            if (o = i.apply(t[a], n), o === !1) break } else if (r)
                    for (; s > a && (o = i.call(t[a], a, t[a]), o !== !1); a++);
                else
                    for (a in t)
                        if (o = i.call(t[a], a, t[a]), o === !1) break; return t }, i.data = function(t, e, o) {
                if (void 0 === o) {
                    var a = t[i.expando],
                        s = a && n[a];
                    if (void 0 === e) return s;
                    if (s && e in s) return s[e] } else if (void 0 !== e) {
                    var a = t[i.expando] || (t[i.expando] = ++i.uuid);
                    return n[a] = n[a] || {}, n[a][e] = o, o } }, i.removeData = function(t, e) {
                var o = t[i.expando],
                    a = o && n[o];
                a && i.each(e, function(t, e) { delete a[e] }) }, i.extend = function() {
                var t, e, n, o, a, s, r = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof r && (u = r, r = arguments[l] || {}, l++), "object" != typeof r && "function" !== i.type(r) && (r = {}), l === c && (r = this, l--); c > l; l++)
                    if (null != (a = arguments[l]))
                        for (o in a) t = r[o], n = a[o], r !== n && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, s = t && i.isArray(t) ? t : []) : s = t && i.isPlainObject(t) ? t : {}, r[o] = i.extend(u, s, n)) : void 0 !== n && (r[o] = n));
                return r }, i.queue = function(t, n, o) {
                function a(t, i) {
                    var n = i || [];
                    return null != t && (e(Object(t)) ? ! function(t, e) {
                        for (var i = +e.length, n = 0, o = t.length; i > n;) t[o++] = e[n++];
                        if (i !== i)
                            for (; void 0 !== e[n];) t[o++] = e[n++];
                        return t.length = o, t }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n }
                if (t) { n = (n || "fx") + "queue";
                    var s = i.data(t, n);
                    return o ? (!s || i.isArray(o) ? s = i.data(t, n, a(o)) : s.push(o), s) : s || [] } }, i.dequeue = function(t, e) { i.each(t.nodeType ? [t] : t, function(t, n) { e = e || "fx";
                    var o = i.queue(n, e),
                        a = o.shift(); "inprogress" === a && (a = o.shift()), a && ("fx" === e && o.unshift("inprogress"), a.call(n, function() { i.dequeue(n, e) })) }) }, i.fn = i.prototype = { init: function(t) {
                    if (t.nodeType) return this[0] = t, this;
                    throw new Error("Not a DOM node.") }, offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
                    return { top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) } }, position: function() {
                    function t() {
                        for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                        return t || document }
                    var e = this[0],
                        t = t.apply(e),
                        n = this.offset(),
                        o = /^(?:body|html)$/i.test(t.nodeName) ? { top: 0, left: 0 } : i(t).offset();
                    return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (o.top += parseFloat(t.style.borderTopWidth) || 0, o.left += parseFloat(t.style.borderLeftWidth) || 0), { top: n.top - o.top, left: n.left - o.left } } };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var o = {}, a = o.hasOwnProperty, s = o.toString, r = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < r.length; l++) o["[object " + r[l] + "]"] = r[l].toLowerCase();
            i.fn.init.prototype = i.fn, t.Velocity = { Utilities: i } } }(window), function(t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t() }(function() {
        return function(t, e, i, n) {
            function o(t) {
                for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                    var o = t[e];
                    o && n.push(o) }
                return n }

            function a(t) {
                return m.isWrapped(t) ? t = [].slice.call(t) : m.isNode(t) && (t = [t]), t }

            function s(t) {
                var e = d.data(t, "velocity");
                return null === e ? n : e }

            function r(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t) } }

            function l(t, i, n, o) {
                function a(t, e) {
                    return 1 - 3 * e + 3 * t }

                function s(t, e) {
                    return 3 * e - 6 * t }

                function r(t) {
                    return 3 * t }

                function l(t, e, i) {
                    return ((a(e, i) * t + s(e, i)) * t + r(e)) * t }

                function c(t, e, i) {
                    return 3 * a(e, i) * t * t + 2 * s(e, i) * t + r(e) }

                function u(e, i) {
                    for (var o = 0; m > o; ++o) {
                        var a = c(i, t, n);
                        if (0 === a) return i;
                        var s = l(i, t, n) - e;
                        i -= s / a }
                    return i }

                function h() {
                    for (var e = 0; b > e; ++e) k[e] = l(e * w, t, n) }

                function d(e, i, o) {
                    var a, s, r = 0;
                    do s = i + (o - i) / 2, a = l(s, t, n) - e, a > 0 ? o = s : i = s; while (Math.abs(a) > g && ++r < y);
                    return s }

                function f(e) {
                    for (var i = 0, o = 1, a = b - 1; o != a && k[o] <= e; ++o) i += w;--o;
                    var s = (e - k[o]) / (k[o + 1] - k[o]),
                        r = i + s * w,
                        l = c(r, t, n);
                    return l >= v ? u(e, r) : 0 == l ? r : d(e, i, i + w) }

                function p() { S = !0, (t != i || n != o) && h() }
                var m = 4,
                    v = .001,
                    g = 1e-7,
                    y = 10,
                    b = 11,
                    w = 1 / (b - 1),
                    x = "Float32Array" in e;
                if (4 !== arguments.length) return !1;
                for (var C = 0; 4 > C; ++C)
                    if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C])) return !1;
                t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
                var k = x ? new Float32Array(b) : new Array(b),
                    S = !1,
                    P = function(e) {
                        return S || p(), t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(f(e), i, o) };
                P.getControlPoints = function() {
                    return [{ x: t, y: i }, { x: n, y: o }] };
                var T = "generateBezier(" + [t, i, n, o] + ")";
                return P.toString = function() {
                    return T }, P }

            function c(t, e) {
                var i = t;
                return m.isString(t) ? b.Easings[t] || (i = !1) : i = m.isArray(t) && 1 === t.length ? r.apply(null, t) : m.isArray(t) && 2 === t.length ? w.apply(null, t.concat([e])) : m.isArray(t) && 4 === t.length ? l.apply(null, t) : !1, i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i }

            function u(t) {
                if (t) {
                    var e = (new Date).getTime(),
                        i = b.State.calls.length;
                    i > 1e4 && (b.State.calls = o(b.State.calls));
                    for (var a = 0; i > a; a++)
                        if (b.State.calls[a]) {
                            var r = b.State.calls[a],
                                l = r[0],
                                c = r[2],
                                f = r[3],
                                p = !!f,
                                v = null;
                            f || (f = b.State.calls[a][3] = e - 16);
                            for (var g = Math.min((e - f) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
                                var C = l[y],
                                    S = C.element;
                                if (s(S)) {
                                    var P = !1;
                                    if (c.display !== n && null !== c.display && "none" !== c.display) {
                                        if ("flex" === c.display) {
                                            var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            d.each(T, function(t, e) { x.setPropertyValue(S, "display", e) }) }
                                        x.setPropertyValue(S, "display", c.display) }
                                    c.visibility !== n && "hidden" !== c.visibility && x.setPropertyValue(S, "visibility", c.visibility);
                                    for (var A in C)
                                        if ("element" !== A) {
                                            var E, M = C[A],
                                                I = m.isString(M.easing) ? b.Easings[M.easing] : M.easing;
                                            if (1 === g) E = M.endValue;
                                            else {
                                                var O = M.endValue - M.startValue;
                                                if (E = M.startValue + O * I(g, c, O), !p && E === M.currentValue) continue }
                                            if (M.currentValue = E, "tween" === A) v = E;
                                            else {
                                                if (x.Hooks.registered[A]) {
                                                    var F = x.Hooks.getRoot(A),
                                                        L = s(S).rootPropertyValueCache[F];
                                                    L && (M.rootPropertyValue = L) }
                                                var D = x.setPropertyValue(S, A, M.currentValue + (0 === parseFloat(E) ? "" : M.unitType), M.rootPropertyValue, M.scrollData);
                                                x.Hooks.registered[A] && (s(S).rootPropertyValueCache[F] = x.Normalizations.registered[F] ? x.Normalizations.registered[F]("extract", null, D[1]) : D[1]), "transform" === D[0] && (P = !0) } }
                                    c.mobileHA && s(S).transformCache.translate3d === n && (s(S).transformCache.translate3d = "(0px, 0px, 0px)", P = !0), P && x.flushTransformCache(S) } }
                            c.display !== n && "none" !== c.display && (b.State.calls[a][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (b.State.calls[a][2].visibility = !1), c.progress && c.progress.call(r[1], r[1], g, Math.max(0, f + c.duration - e), f, v), 1 === g && h(a) } }
                b.State.isTicking && k(u) }

            function h(t, e) {
                if (!b.State.calls[t]) return !1;
                for (var i = b.State.calls[t][0], o = b.State.calls[t][1], a = b.State.calls[t][2], r = b.State.calls[t][4], l = !1, c = 0, u = i.length; u > c; c++) {
                    var h = i[c].element;
                    if (e || a.loop || ("none" === a.display && x.setPropertyValue(h, "display", a.display), "hidden" === a.visibility && x.setPropertyValue(h, "visibility", a.visibility)), a.loop !== !0 && (d.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && s(h)) { s(h).isAnimating = !1, s(h).rootPropertyValueCache = {};
                        var f = !1;
                        d.each(x.Lists.transforms3D, function(t, e) {
                            var i = /^scale/.test(e) ? 1 : 0,
                                o = s(h).transformCache[e];
                            s(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (f = !0, delete s(h).transformCache[e]) }), a.mobileHA && (f = !0, delete s(h).transformCache.translate3d), f && x.flushTransformCache(h), x.Values.removeClass(h, "velocity-animating") }
                    if (!e && a.complete && !a.loop && c === u - 1) try { a.complete.call(o, o) } catch (p) { setTimeout(function() {
                            throw p }, 1) }
                    r && a.loop !== !0 && r(o), s(h) && a.loop === !0 && !e && (d.each(s(h).tweensContainer, function(t, e) { /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100) }), b(h, "reverse", { loop: !0, delay: a.delay })), a.queue !== !1 && d.dequeue(h, a.queue) }
                b.State.calls[t] = !1;
                for (var m = 0, v = b.State.calls.length; v > m; m++)
                    if (b.State.calls[m] !== !1) { l = !0;
                        break }
                l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []) }
            var d, f = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = i.createElement("div");
                        if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t }
                    return n }(),
                p = function() {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function() { e(n + i) }, i) } }(),
                m = { isString: function(t) {
                        return "string" == typeof t }, isArray: Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t) }, isFunction: function(t) {
                        return "[object Function]" === Object.prototype.toString.call(t) }, isNode: function(t) {
                        return t && t.nodeType }, isNodeList: function(t) {
                        return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0) }, isWrapped: function(t) {
                        return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t)) }, isSVG: function(t) {
                        return e.SVGElement && t instanceof e.SVGElement }, isEmptyObject: function(t) {
                        for (var e in t) return !1;
                        return !0 } },
                v = !1;
            if (t.fn && t.fn.jquery ? (d = t, v = !0) : d = e.Velocity.Utilities, 8 >= f && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (7 >= f) return void(jQuery.fn.velocity = jQuery.fn.animate);
            var g = 400,
                y = "swing",
                b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: e.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: i.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: d, Redirects: {}, Easings: {}, Promise: e.Promise, defaults: { queue: "", duration: g, easing: y, begin: n, complete: n, progress: n, display: n, visibility: n, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function(t) { d.data(t, "velocity", { isSVG: m.isSVG(t), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} }) }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };
            e.pageYOffset !== n ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
            var w = function() {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v }

                function e(e, i, n) {
                    var o = { x: e.x + n.dx * i, v: e.v + n.dv * i, tension: e.tension, friction: e.friction };
                    return { dx: o.v, dv: t(o) } }

                function i(i, n) {
                    var o = { dx: i.v, dv: t(i) },
                        a = e(i, .5 * n, o),
                        s = e(i, .5 * n, a),
                        r = e(i, n, s),
                        l = 1 / 6 * (o.dx + 2 * (a.dx + s.dx) + r.dx),
                        c = 1 / 6 * (o.dv + 2 * (a.dv + s.dv) + r.dv);
                    return i.x = i.x + l * n, i.v = i.v + c * n, i }
                return function n(t, e, o) {
                    var a, s, r, l = { x: -1, v: 0, tension: null, friction: null },
                        c = [0],
                        u = 0,
                        h = 1e-4,
                        d = .016;
                    for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, o = o || null, l.tension = t, l.friction = e, a = null !== o, a ? (u = n(t, e), s = u / o * d) : s = d; r = i(r || l, s), c.push(1 + r.x), u += 16, Math.abs(r.x) > h && Math.abs(r.v) > h;);
                    return a ? function(t) {
                        return c[t * (c.length - 1) | 0] } : u } }();
            b.Easings = { linear: function(t) {
                    return t }, swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2 }, spring: function(t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t) } }, d.each([
                ["ease", [.25, .1, .25, 1]],
                ["ease-in", [.42, 0, 1, 1]],
                ["ease-out", [0, 0, .58, 1]],
                ["ease-in-out", [.42, 0, .58, 1]],
                ["easeInSine", [.47, 0, .745, .715]],
                ["easeOutSine", [.39, .575, .565, 1]],
                ["easeInOutSine", [.445, .05, .55, .95]],
                ["easeInQuad", [.55, .085, .68, .53]],
                ["easeOutQuad", [.25, .46, .45, .94]],
                ["easeInOutQuad", [.455, .03, .515, .955]],
                ["easeInCubic", [.55, .055, .675, .19]],
                ["easeOutCubic", [.215, .61, .355, 1]],
                ["easeInOutCubic", [.645, .045, .355, 1]],
                ["easeInQuart", [.895, .03, .685, .22]],
                ["easeOutQuart", [.165, .84, .44, 1]],
                ["easeInOutQuart", [.77, 0, .175, 1]],
                ["easeInQuint", [.755, .05, .855, .06]],
                ["easeOutQuint", [.23, 1, .32, 1]],
                ["easeInOutQuint", [.86, 0, .07, 1]],
                ["easeInExpo", [.95, .05, .795, .035]],
                ["easeOutExpo", [.19, 1, .22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [.6, .04, .98, .335]],
                ["easeOutCirc", [.075, .82, .165, 1]],
                ["easeInOutCirc", [.785, .135, .15, .86]]
            ], function(t, e) { b.Easings[e[0]] = l.apply(null, e[1]) });
            var x = b.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function() {
                        for (var t = 0; t < x.Lists.colors.length; t++) {
                            var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e] }
                        var i, n, o;
                        if (f)
                            for (i in x.Hooks.templates) { n = x.Hooks.templates[i], o = n[0].split(" ");
                                var a = n[1].match(x.RegEx.valueSplit); "Color" === o[0] && (o.push(o.shift()), a.push(a.shift()), x.Hooks.templates[i] = [o.join(" "), a.join(" ")]) }
                        for (i in x.Hooks.templates) { n = x.Hooks.templates[i], o = n[0].split(" ");
                            for (var t in o) {
                                var s = i + o[t],
                                    r = t;
                                x.Hooks.registered[s] = [i, r] } } }, getRoot: function(t) {
                        var e = x.Hooks.registered[t];
                        return e ? e[0] : t }, cleanRootPropertyValue: function(t, e) {
                        return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]), e }, extractValue: function(t, e) {
                        var i = x.Hooks.registered[t];
                        if (i) {
                            var n = i[0],
                                o = i[1];
                            return e = x.Hooks.cleanRootPropertyValue(n, e), e.toString().match(x.RegEx.valueSplit)[o] }
                        return e }, injectValue: function(t, e, i) {
                        var n = x.Hooks.registered[t];
                        if (n) {
                            var o, a, s = n[0],
                                r = n[1];
                            return i = x.Hooks.cleanRootPropertyValue(s, i), o = i.toString().match(x.RegEx.valueSplit), o[r] = e, a = o.join(" ") }
                        return i } }, Normalizations: { registered: { clip: function(t, e, i) {
                            switch (t) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var n;
                                    return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                                case "inject":
                                    return "rect(" + i + ")" } }, blur: function(t, e, i) {
                            switch (t) {
                                case "name":
                                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var n = parseFloat(i);
                                    if (!n && 0 !== n) {
                                        var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        n = o ? o[1] : 0 }
                                    return n;
                                case "inject":
                                    return parseFloat(i) ? "blur(" + i + ")" : "none" } }, opacity: function(t, e, i) {
                            if (8 >= f) switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return i = n ? n[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")" } else switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                    return i;
                                case "inject":
                                    return i } } }, register: function() { 9 >= f || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var t = 0; t < x.Lists.transformsBase.length; t++) ! function() {
                            var e = x.Lists.transformsBase[t];
                            x.Normalizations.registered[e] = function(t, i, o) {
                                switch (t) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return s(i) === n || s(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : s(i).transformCache[e].replace(/[()]/g, "");
                                    case "inject":
                                        var a = !1;
                                        switch (e.substr(0, e.length - 1)) {
                                            case "translate":
                                                a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                break;
                                            case "scal":
                                            case "scale":
                                                b.State.isAndroid && s(i).transformCache[e] === n && 1 > o && (o = 1), a = !/(\d)$/i.test(o);
                                                break;
                                            case "skew":
                                                a = !/(deg|\d)$/i.test(o);
                                                break;
                                            case "rotate":
                                                a = !/(deg|\d)$/i.test(o) }
                                        return a || (s(i).transformCache[e] = "(" + o + ")"), s(i).transformCache[e] } } }();
                        for (var t = 0; t < x.Lists.colors.length; t++) ! function() {
                            var e = x.Lists.colors[t];
                            x.Normalizations.registered[e] = function(t, i, o) {
                                switch (t) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        var a;
                                        if (x.RegEx.wrappedValueAlreadyExtracted.test(o)) a = o;
                                        else {
                                            var s, r = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" }; /^[A-z]+$/i.test(o) ? s = r[o] !== n ? r[o] : r.black : x.RegEx.isHex.test(o) ? s = "rgb(" + x.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (s = r.black), a = (s || o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ") }
                                        return 8 >= f || 3 !== a.split(" ").length || (a += " 1"), a;
                                    case "inject":
                                        return 8 >= f ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")" } } }() } }, Names: { camelCase: function(t) {
                        return t.replace(/-(\w)/g, function(t, e) {
                            return e.toUpperCase() }) }, SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (f || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t) }, prefixCheck: function(t) {
                        if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                            var o;
                            if (o = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                    return t.toUpperCase() }), m.isString(b.State.prefixElement.style[o])) return b.State.prefixMatches[t] = o, [o, !0] }
                        return [t, !1] } }, Values: { hexToRgb: function(t) {
                        var e, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(i, function(t, e, i, n) {
                            return e + e + i + i + n + n }), e = n.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0] }, isCSSNullValue: function(t) {
                        return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t) }, getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px" }, getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block" }, addClass: function(t, e) { t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e }, removeClass: function(t, e) { t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ") } }, getPropertyValue: function(t, i, o, a) {
                    function r(t, i) {
                        function o() { c && x.setPropertyValue(t, "display", "none") }
                        var l = 0;
                        if (8 >= f) l = d.css(t, i);
                        else {
                            var c = !1;
                            if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(t, "display") && (c = !0, x.setPropertyValue(t, "display", x.Values.getDisplayType(t))), !a) {
                                if ("height" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var u = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);
                                    return o(), u }
                                if ("width" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var h = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);
                                    return o(), h } }
                            var p;
                            p = s(t) === n ? e.getComputedStyle(t, null) : s(t).computedStyle ? s(t).computedStyle : s(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === f && "filter" === i ? p.getPropertyValue(i) : p[i], ("" === l || null === l) && (l = t.style[i]), o() }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                            var m = r(t, "position");
                            ("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (l = d(t).position()[i] + "px") }
                        return l }
                    var l;
                    if (x.Hooks.registered[i]) {
                        var c = i,
                            u = x.Hooks.getRoot(c);
                        o === n && (o = x.getPropertyValue(t, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (o = x.Normalizations.registered[u]("extract", t, o)), l = x.Hooks.extractValue(c, o) } else if (x.Normalizations.registered[i]) {
                        var h, p;
                        h = x.Normalizations.registered[i]("name", t), "transform" !== h && (p = r(t, x.Names.prefixCheck(h)[0]), x.Values.isCSSNullValue(p) && x.Hooks.templates[i] && (p = x.Hooks.templates[i][1])), l = x.Normalizations.registered[i]("extract", t, p) }
                    if (!/^[\d-]/.test(l))
                        if (s(t) && s(t).isSVG && x.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i)) try { l = t.getBBox()[i] } catch (m) { l = 0 } else l = t.getAttribute(i);
                            else l = r(t, x.Names.prefixCheck(i)[0]);
                    return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l }, setPropertyValue: function(t, i, n, o, a) {
                    var r = i;
                    if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? e.scrollTo(n, a.alternateValue) : e.scrollTo(a.alternateValue, n);
                    else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", t)) x.Normalizations.registered[i]("inject", t, n), r = "transform", n = s(t).transformCache[i];
                    else {
                        if (x.Hooks.registered[i]) {
                            var l = i,
                                c = x.Hooks.getRoot(i);
                            o = o || x.getPropertyValue(t, c), n = x.Hooks.injectValue(l, n, o), i = c }
                        if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", t, n), i = x.Normalizations.registered[i]("name", t)), r = x.Names.prefixCheck(i)[0], 8 >= f) try { t.style[r] = n } catch (u) { b.debug && console.log("Browser does not support [" + n + "] for [" + r + "]") } else s(t) && s(t).isSVG && x.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[r] = n;
                        b.debug >= 2 && console.log("Set " + i + " (" + r + "): " + n) }
                    return [r, n] }, flushTransformCache: function(t) {
                    function e(e) {
                        return parseFloat(x.getPropertyValue(t, e)) }
                    var i = "";
                    if ((f || b.State.isAndroid && !b.State.isChrome) && s(t).isSVG) {
                        var n = { translate: [e("translateX"), e("translateY")], skewX: [e("skewX")], skewY: [e("skewY")], scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")], rotate: [e("rotateZ"), 0, 0] };
                        d.each(s(t).transformCache, function(t) { /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t]) }) } else {
                        var o, a;
                        d.each(s(t).transformCache, function(e) {
                            return o = s(t).transformCache[e], "transformPerspective" === e ? (a = o, !0) : (9 === f && "rotateZ" === e && (e = "rotate"), void(i += e + o + " ")) }), a && (i = "perspective" + a + " " + i) }
                    x.setPropertyValue(t, "transform", i) } };
            x.Hooks.register(), x.Normalizations.register(), b.hook = function(t, e, i) {
                var o = n;
                return t = a(t), d.each(t, function(t, a) {
                    if (s(a) === n && b.init(a), i === n) o === n && (o = b.CSS.getPropertyValue(a, e));
                    else {
                        var r = b.CSS.setPropertyValue(a, e, i); "transform" === r[0] && b.CSS.flushTransformCache(a), o = r } }), o };
            var C = function() {
                function t() {
                    return r ? A.promise || null : l }

                function o() {
                    function t(t) {
                        function h(t, e) {
                            var i = n,
                                o = n,
                                s = n;
                            return m.isArray(t) ? (i = t[0], !m.isArray(t[1]) && /^[\d-]/.test(t[1]) || m.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? s = t[1] : (m.isString(t[1]) && !x.RegEx.isHex.test(t[1]) || m.isArray(t[1])) && (o = e ? t[1] : c(t[1], r.duration), t[2] !== n && (s = t[2]))) : i = t, e || (o = o || r.easing), m.isFunction(i) && (i = i.call(a, S, k)), m.isFunction(s) && (s = s.call(a, S, k)), [i || 0, o, s] }

                        function f(t, e) {
                            var i, n;
                            return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                return i = t, "" }), i || (i = x.Values.getUnitType(t)), [n, i] }

                        function g() {
                            var t = { myParent: a.parentNode || i.body, position: x.getPropertyValue(a, "position"), fontSize: x.getPropertyValue(a, "fontSize") },
                                n = t.position === D.lastPosition && t.myParent === D.lastParent,
                                o = t.fontSize === D.lastFontSize;
                            D.lastParent = t.myParent, D.lastPosition = t.position, D.lastFontSize = t.fontSize;
                            var r = 100,
                                l = {};
                            if (o && n) l.emToPx = D.lastEmToPx, l.percentToPxWidth = D.lastPercentToPxWidth, l.percentToPxHeight = D.lastPercentToPxHeight;
                            else {
                                var c = s(a).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                b.init(c), t.myParent.appendChild(c), d.each(["overflow", "overflowX", "overflowY"], function(t, e) { b.CSS.setPropertyValue(c, e, "hidden") }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) { b.CSS.setPropertyValue(c, e, r + "%") }), b.CSS.setPropertyValue(c, "paddingLeft", r + "em"), l.percentToPxWidth = D.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / r, l.percentToPxHeight = D.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / r, l.emToPx = D.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / r, t.myParent.removeChild(c) }
                            return null === D.remToPx && (D.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16), null === D.vwToPx && (D.vwToPx = parseFloat(e.innerWidth) / 100, D.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = D.remToPx, l.vwToPx = D.vwToPx, l.vhToPx = D.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l }
                        if (r.begin && 0 === S) try { r.begin.call(p, p) } catch (w) { setTimeout(function() {
                                throw w }, 1) }
                        if ("scroll" === E) {
                            var C, P, T, M = /^x$/i.test(r.axis) ? "Left" : "Top",
                                I = parseFloat(r.offset) || 0;
                            r.container ? m.isWrapped(r.container) || m.isNode(r.container) ? (r.container = r.container[0] || r.container, C = r.container["scroll" + M], T = C + d(a).position()[M.toLowerCase()] + I) : r.container = null : (C = b.State.scrollAnchor[b.State["scrollProperty" + M]], P = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === M ? "Top" : "Left")]], T = d(a).offset()[M.toLowerCase()] + I), l = { scroll: { rootPropertyValue: !1, startValue: C, currentValue: C, endValue: T, unitType: "", easing: r.easing, scrollData: { container: r.container, direction: M, alternateValue: P } }, element: a }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, a) } else if ("reverse" === E) {
                            if (!s(a).tweensContainer) return void d.dequeue(a, r.queue); "none" === s(a).opts.display && (s(a).opts.display = "auto"), "hidden" === s(a).opts.visibility && (s(a).opts.visibility = "visible"), s(a).opts.loop = !1, s(a).opts.begin = null, s(a).opts.complete = null, y.easing || delete r.easing, y.duration || delete r.duration, r = d.extend({}, s(a).opts, r);
                            var O = d.extend(!0, {}, s(a).tweensContainer);
                            for (var F in O)
                                if ("element" !== F) {
                                    var L = O[F].startValue;
                                    O[F].startValue = O[F].currentValue = O[F].endValue, O[F].endValue = L, m.isEmptyObject(y) || (O[F].easing = r.easing), b.debug && console.log("reverse tweensContainer (" + F + "): " + JSON.stringify(O[F]), a) }
                            l = O } else if ("start" === E) {
                            var O;
                            s(a).tweensContainer && s(a).isAnimating === !0 && (O = s(a).tweensContainer), d.each(v, function(t, e) {
                                if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                                    var i = h(e, !0),
                                        o = i[0],
                                        a = i[1],
                                        s = i[2];
                                    if (x.RegEx.isHex.test(o)) {
                                        for (var r = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(o), c = s ? x.Values.hexToRgb(s) : n, u = 0; u < r.length; u++) {
                                            var d = [l[u]];
                                            a && d.push(a), c !== n && d.push(c[u]), v[t + r[u]] = d }
                                        delete v[t] } } });
                            for (var z in v) {
                                var _ = h(v[z]),
                                    V = _[0],
                                    W = _[1],
                                    H = _[2];
                                z = x.Names.camelCase(z);
                                var N = x.Hooks.getRoot(z),
                                    B = !1;
                                if (s(a).isSVG || "tween" === N || x.Names.prefixCheck(N)[1] !== !1 || x.Normalizations.registered[N] !== n) {
                                    (r.display !== n && null !== r.display && "none" !== r.display || r.visibility !== n && "hidden" !== r.visibility) && /opacity|filter/.test(z) && !H && 0 !== V && (H = 0), r._cacheValues && O && O[z] ? (H === n && (H = O[z].endValue + O[z].unitType), B = s(a).rootPropertyValueCache[N]) : x.Hooks.registered[z] ? H === n ? (B = x.getPropertyValue(a, N), H = x.getPropertyValue(a, z, B)) : B = x.Hooks.templates[N][1] : H === n && (H = x.getPropertyValue(a, z));
                                    var j, $, q, Y = !1;
                                    if (j = f(z, H), H = j[0], q = j[1], j = f(z, V), V = j[0].replace(/^([+-\/*])=/, function(t, e) {
                                            return Y = e, "" }), $ = j[1], H = parseFloat(H) || 0, V = parseFloat(V) || 0, "%" === $ && (/^(fontSize|lineHeight)$/.test(z) ? (V /= 100, $ = "em") : /^scale/.test(z) ? (V /= 100, $ = "") : /(Red|Green|Blue)$/i.test(z) && (V = V / 100 * 255, $ = "")), /[\/*]/.test(Y)) $ = q;
                                    else if (q !== $ && 0 !== H)
                                        if (0 === V) $ = q;
                                        else { o = o || g();
                                            var X = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";
                                            switch (q) {
                                                case "%":
                                                    H *= "x" === X ? o.percentToPxWidth : o.percentToPxHeight;
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    H *= o[q + "ToPx"] }
                                            switch ($) {
                                                case "%":
                                                    H *= 1 / ("x" === X ? o.percentToPxWidth : o.percentToPxHeight);
                                                    break;
                                                case "px":
                                                    break;
                                                default:
                                                    H *= 1 / o[$ + "ToPx"] } }
                                    switch (Y) {
                                        case "+":
                                            V = H + V;
                                            break;
                                        case "-":
                                            V = H - V;
                                            break;
                                        case "*":
                                            V = H * V;
                                            break;
                                        case "/":
                                            V = H / V }
                                    l[z] = { rootPropertyValue: B, startValue: H, currentValue: H, endValue: V, unitType: $, easing: W }, b.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), a) } else b.debug && console.log("Skipping [" + N + "] due to a lack of browser support.")
                            }
                            l.element = a
                        }
                        l.element && (x.Values.addClass(a, "velocity-animating"), R.push(l), "" === r.queue && (s(a).tweensContainer = l, s(a).opts = r), s(a).isAnimating = !0, S === k - 1 ? (b.State.calls.push([R, p, r, null, A.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : S++)
                    }
                    var o, a = this,
                        r = d.extend({}, b.defaults, y),
                        l = {};
                    switch (s(a) === n && b.init(a), parseFloat(r.delay) && r.queue !== !1 && d.queue(a, r.queue, function(t) { b.velocityQueueEntryFlag = !0, s(a).delayTimer = { setTimeout: setTimeout(t, parseFloat(r.delay)), next: t } }), r.duration.toString().toLowerCase()) {
                        case "fast":
                            r.duration = 200;
                            break;
                        case "normal":
                            r.duration = g;
                            break;
                        case "slow":
                            r.duration = 600;
                            break;
                        default:
                            r.duration = parseFloat(r.duration) || 1 }
                    b.mock !== !1 && (b.mock === !0 ? r.duration = r.delay = 1 : (r.duration *= parseFloat(b.mock) || 1, r.delay *= parseFloat(b.mock) || 1)), r.easing = c(r.easing, r.duration), r.begin && !m.isFunction(r.begin) && (r.begin = null), r.progress && !m.isFunction(r.progress) && (r.progress = null), r.complete && !m.isFunction(r.complete) && (r.complete = null), r.display !== n && null !== r.display && (r.display = r.display.toString().toLowerCase(), "auto" === r.display && (r.display = b.CSS.Values.getDisplayType(a))), r.visibility !== n && null !== r.visibility && (r.visibility = r.visibility.toString().toLowerCase()), r.mobileHA = r.mobileHA && b.State.isMobile && !b.State.isGingerbread, r.queue === !1 ? r.delay ? setTimeout(t, r.delay) : t() : d.queue(a, r.queue, function(e, i) {
                        return i === !0 ? (A.promise && A.resolver(p), !0) : (b.velocityQueueEntryFlag = !0, void t(e)) }), "" !== r.queue && "fx" !== r.queue || "inprogress" === d.queue(a)[0] || d.dequeue(a)
                }
                var r, l, f, p, v, y, w = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
                if (m.isWrapped(this) ? (r = !1, f = 0, p = this, l = this) : (r = !0, f = 1, p = w ? arguments[0].elements || arguments[0].e : arguments[0]), p = a(p)) { w ? (v = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (v = arguments[f], y = arguments[f + 1]);
                    var k = p.length,
                        S = 0;
                    if (!/^(stop|finish)$/i.test(v) && !d.isPlainObject(y)) {
                        var P = f + 1;
                        y = {};
                        for (var T = P; T < arguments.length; T++) m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? y.easing = arguments[T] : m.isFunction(arguments[T]) && (y.complete = arguments[T]) : y.duration = arguments[T] }
                    var A = { promise: null, resolver: null, rejecter: null };
                    r && b.Promise && (A.promise = new b.Promise(function(t, e) { A.resolver = t, A.rejecter = e }));
                    var E;
                    switch (v) {
                        case "scroll":
                            E = "scroll";
                            break;
                        case "reverse":
                            E = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            d.each(p, function(t, e) { s(e) && s(e).delayTimer && (clearTimeout(s(e).delayTimer.setTimeout), s(e).delayTimer.next && s(e).delayTimer.next(), delete s(e).delayTimer) });
                            var M = [];
                            return d.each(b.State.calls, function(t, e) { e && d.each(e[1], function(i, o) {
                                    var a = y === n ? "" : y;
                                    return a === !0 || e[2].queue === a || y === n && e[2].queue === !1 ? void d.each(p, function(i, n) { n === o && ((y === !0 || m.isString(y)) && (d.each(d.queue(n, m.isString(y) ? y : ""), function(t, e) { m.isFunction(e) && e(null, !0) }), d.queue(n, m.isString(y) ? y : "", [])), "stop" === v ? (s(n) && s(n).tweensContainer && a !== !1 && d.each(s(n).tweensContainer, function(t, e) { e.endValue = e.currentValue }), M.push(t)) : "finish" === v && (e[2].duration = 1)) }) : !0 }) }), "stop" === v && (d.each(M, function(t, e) { h(e, !0) }), A.promise && A.resolver(p)), t();
                        default:
                            if (!d.isPlainObject(v) || m.isEmptyObject(v)) {
                                if (m.isString(v) && b.Redirects[v]) {
                                    var I = d.extend({}, y),
                                        O = I.duration,
                                        F = I.delay || 0;
                                    return I.backwards === !0 && (p = d.extend(!0, [], p).reverse()), d.each(p, function(t, e) { parseFloat(I.stagger) ? I.delay = F + parseFloat(I.stagger) * t : m.isFunction(I.stagger) && (I.delay = F + I.stagger.call(e, t, k)), I.drag && (I.duration = parseFloat(O) || (/^(callout|transition)/.test(v) ? 1e3 : g), I.duration = Math.max(I.duration * (I.backwards ? 1 - t / k : (t + 1) / k), .75 * I.duration, 200)), b.Redirects[v].call(e, e, I || {}, t, k, p, A.promise ? A : n) }), t() }
                                var L = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return A.promise ? A.rejecter(new Error(L)) : console.log(L), t() }
                            E = "start" }
                    var D = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
                        R = [];
                    d.each(p, function(t, e) { m.isNode(e) && o.call(e) });
                    var z, I = d.extend({}, b.defaults, y);
                    if (I.loop = parseInt(I.loop), z = 2 * I.loop - 1, I.loop)
                        for (var _ = 0; z > _; _++) {
                            var V = { delay: I.delay, progress: I.progress };
                            _ === z - 1 && (V.display = I.display, V.visibility = I.visibility, V.complete = I.complete), C(p, "reverse", V) }
                    return t() }
            };
            b = d.extend(C, b), b.animate = C;
            var k = e.requestAnimationFrame || p;
            return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() { i.hidden ? (k = function(t) {
                    return setTimeout(function() { t(!0) }, 16) }, u()) : k = e.requestAnimationFrame || p }), t.Velocity = b, t !== e && (t.fn.velocity = C, t.fn.velocity.defaults = b.defaults), d.each(["Down", "Up"], function(t, e) { b.Redirects["slide" + e] = function(t, i, o, a, s, r) {
                    var l = d.extend({}, i),
                        c = l.begin,
                        u = l.complete,
                        h = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
                        f = {};
                    l.display === n && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() { c && c.call(s, s);
                        for (var i in h) { f[i] = t.style[i];
                            var n = b.CSS.getPropertyValue(t, i);
                            h[i] = "Down" === e ? [n, 0] : [0, n] }
                        f.overflow = t.style.overflow, t.style.overflow = "hidden" }, l.complete = function() {
                        for (var e in f) t.style[e] = f[e];
                        u && u.call(s, s), r && r.resolver(s) }, b(t, h, l) } }), d.each(["In", "Out"], function(t, e) { b.Redirects["fade" + e] = function(t, i, o, a, s, r) {
                    var l = d.extend({}, i),
                        c = { opacity: "In" === e ? 1 : 0 },
                        u = l.complete;
                    l.complete = o !== a - 1 ? l.begin = null : function() { u && u.call(s, s), r && r.resolver(s) }, l.display === n && (l.display = "In" === e ? "auto" : "none"), b(this, c, l) } }), b
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = function(t) { this.canvas = t.canvas, this.ctx = t;
                var i = function(t, e) {
                        return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e) },
                    o = this.width = i(t.canvas, "Width") || t.canvas.width,
                    a = this.height = i(t.canvas, "Height") || t.canvas.height;
                return o = this.width = t.canvas.width, a = this.height = t.canvas.height, this.aspectRatio = this.width / this.height, n.retinaScale(this), this };
        i.defaults = { global: { animation: !0, animationSteps: 60, animationEasing: "easeOutQuart", showScale: !0, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !0, scaleLabel: "<%=value%>", scaleIntegersOnly: !0, scaleBeginAtZero: !1, scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", responsive: !1, maintainAspectRatio: !0, showTooltips: !0, customTooltips: !1, tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"], tooltipFillColor: "rgba(0,0,0,0.8)", tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipFontSize: 14, tooltipFontStyle: "normal", tooltipFontColor: "#fff", tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipTitleFontSize: 14, tooltipTitleFontStyle: "bold", tooltipTitleFontColor: "#fff", tooltipTitleTemplate: "<%= label%>", tooltipYPadding: 6, tooltipXPadding: 6, tooltipCaretSize: 8, tooltipCornerRadius: 6, tooltipXOffset: 10, tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>", multiTooltipTemplate: "<%= value %>", multiTooltipKeyBackground: "#fff", segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"], segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"], onAnimationProgress: function() {}, onAnimationComplete: function() {} } }, i.types = {};
        var n = i.helpers = {},
            o = n.each = function(t, e, i) {
                var n = Array.prototype.slice.call(arguments, 3);
                if (t)
                    if (t.length === +t.length) {
                        var o;
                        for (o = 0; o < t.length; o++) e.apply(i, [t[o], o].concat(n)) } else
                        for (var a in t) e.apply(i, [t[a], a].concat(n)) },
            a = n.clone = function(t) {
                var e = {};
                return o(t, function(i, n) { t.hasOwnProperty(n) && (e[n] = i) }), e },
            s = n.extend = function(t) {
                return o(Array.prototype.slice.call(arguments, 1), function(e) { o(e, function(i, n) { e.hasOwnProperty(n) && (t[n] = i) }) }), t },
            r = n.merge = function(t, e) {
                var i = Array.prototype.slice.call(arguments, 0);
                return i.unshift({}), s.apply(null, i) },
            l = n.indexOf = function(t, e) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e) return i;
                return -1 },
            d = (n.where = function(t, e) {
                var i = [];
                return n.each(t, function(t) { e(t) && i.push(t) }), i }, n.findNextWhere = function(t, e, i) { i || (i = -1);
                for (var n = i + 1; n < t.length; n++) {
                    var o = t[n];
                    if (e(o)) return o } }, n.findPreviousWhere = function(t, e, i) { i || (i = t.length);
                for (var n = i - 1; n >= 0; n--) {
                    var o = t[n];
                    if (e(o)) return o } }, n.inherits = function(t) {
                var e = this,
                    i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments) },
                    n = function() { this.constructor = i };
                return n.prototype = e.prototype, i.prototype = new n, i.extend = d, t && s(i.prototype, t), i.__super__ = e.prototype, i }),
            f = n.noop = function() {},
            p = n.uid = function() {
                var t = 0;
                return function() {
                    return "chart-" + t++ } }(),
            m = n.warn = function(t) { window.console && "function" == typeof window.console.warn && console.warn(t) },
            v = n.amd = "function" == typeof define && define.amd,
            g = n.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t) },
            y = n.max = function(t) {
                return Math.max.apply(Math, t) },
            b = n.min = function(t) {
                return Math.min.apply(Math, t) },
            x = (n.cap = function(t, e, i) {
                if (g(e)) {
                    if (t > e) return e } else if (g(i) && i > t) return i;
                return t }, n.getDecimalPlaces = function(t) {
                if (t % 1 !== 0 && g(t)) {
                    var e = t.toString();
                    if (e.indexOf("e-") < 0) return e.split(".")[1].length;
                    if (e.indexOf(".") < 0) return parseInt(e.split("e-")[1]);
                    var i = e.split(".")[1].split("e-");
                    return i[0].length + parseInt(i[1]) }
                return 0 }),
            C = n.radians = function(t) {
                return t * (Math.PI / 180) },
            S = (n.getAngleFromPoint = function(t, e) {
                var i = e.x - t.x,
                    n = e.y - t.y,
                    o = Math.sqrt(i * i + n * n),
                    a = 2 * Math.PI + Math.atan2(n, i);
                return 0 > i && 0 > n && (a += 2 * Math.PI), { angle: a, distance: o } }, n.aliasPixel = function(t) {
                return t % 2 === 0 ? 0 : .5 }),
            T = (n.splineCurve = function(t, e, i, n) {
                var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                    a = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                    s = n * o / (o + a),
                    r = n * a / (o + a);
                return { inner: { x: e.x - s * (i.x - t.x), y: e.y - s * (i.y - t.y) }, outer: { x: e.x + r * (i.x - t.x), y: e.y + r * (i.y - t.y) } } }, n.calculateOrderOfMagnitude = function(t) {
                return Math.floor(Math.log(t) / Math.LN10) }),
            E = (n.calculateScaleRange = function(t, e, i, n, a) {
                var s = 2,
                    r = Math.floor(e / (1.5 * i)),
                    l = s >= r,
                    c = [];
                o(t, function(t) { null == t || c.push(t) });
                var u = b(c),
                    h = y(c);
                h === u && (h += .5, u >= .5 && !n ? u -= .5 : h += .5);
                for (var d = Math.abs(h - u), f = T(d), p = Math.ceil(h / (1 * Math.pow(10, f))) * Math.pow(10, f), m = n ? 0 : Math.floor(u / (1 * Math.pow(10, f))) * Math.pow(10, f), v = p - m, g = Math.pow(10, f), w = Math.round(v / g);
                    (w > r || r > 2 * w) && !l;)
                    if (w > r) g *= 2, w = Math.round(v / g), w % 1 !== 0 && (l = !0);
                    else if (a && f >= 0) {
                    if (g / 2 % 1 !== 0) break;
                    g /= 2, w = Math.round(v / g) } else g /= 2, w = Math.round(v / g);
                return l && (w = s, g = v / w), { steps: w, stepValue: g, min: m, max: m + w * g } }, n.template = function(t, e) {
                function n(t, e) {
                    var n = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("   ").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("   ").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t];
                    return e ? n(e) : n }
                if (t instanceof Function) return t(e);
                var i = {};
                return n(t, e) }),
            I = (n.generateLabels = function(t, e, i, n) {
                var a = new Array(e);
                return t && o(a, function(e, o) { a[o] = E(t, { value: i + n * (o + 1) }) }), a }, n.easingEffects = { linear: function(t) {
                    return t }, easeInQuad: function(t) {
                    return t * t }, easeOutQuad: function(t) {
                    return -1 * t * (t - 2) }, easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1) }, easeInCubic: function(t) {
                    return t * t * t }, easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1) }, easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) }, easeInQuart: function(t) {
                    return t * t * t * t }, easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1) }, easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2) }, easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t }, easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1) }, easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2) }, easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1 }, easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2)) }, easeInOutSine: function(t) {
                    return -0.5 * (Math.cos(Math.PI * t / 1) - 1) }, easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1)) }, easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1) }, easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2) }, easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1) }, easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t) }, easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) }, easeInElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i))) }, easeOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1) }, easeInOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        n = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1) }, easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e) }, easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1) }, easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2) }, easeInBounce: function(t) {
                    return 1 - I.easeOutBounce(1 - t) }, easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }, easeInOutBounce: function(t) {
                    return .5 > t ? .5 * I.easeInBounce(2 * t) : .5 * I.easeOutBounce(2 * t - 1) + .5 } }),
            O = n.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60) } }(),
            R = (n.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t, 1e3 / 60) } }(), n.animationLoop = function(t, e, i, n, o, a) {
                var s = 0,
                    r = I[i] || I.linear,
                    l = function() { s++;
                        var i = s / e,
                            c = r(i);
                        t.call(a, c, i, s), n.call(a, c, i), e > s ? a.animationFrame = O(l) : o.apply(a) };
                O(l) }, n.getRelativePosition = function(t) {
                var e, i, n = t.originalEvent || t,
                    o = t.currentTarget || t.srcElement,
                    a = o.getBoundingClientRect();
                return n.touches ? (e = n.touches[0].clientX - a.left, i = n.touches[0].clientY - a.top) : (e = n.clientX - a.left, i = n.clientY - a.top), { x: e, y: i } }, n.addEvent = function(t, e, i) { t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i }),
            z = n.removeEvent = function(t, e, i) { t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = f },
            V = (n.bindEvents = function(t, e, i) { t.events || (t.events = {}), o(e, function(e) { t.events[e] = function() { i.apply(t, arguments) }, R(t.chart.canvas, e, t.events[e]) }) }, n.unbindEvents = function(t, e) { o(e, function(e, i) { z(t.chart.canvas, i, e) }) }),
            W = n.getMaximumWidth = function(t) {
                var e = t.parentNode,
                    i = parseInt(N(e, "padding-left")) + parseInt(N(e, "padding-right"));
                return e.clientWidth - i },
            H = n.getMaximumHeight = function(t) {
                var e = t.parentNode,
                    i = parseInt(N(e, "padding-bottom")) + parseInt(N(e, "padding-top"));
                return e.clientHeight - i },
            N = n.getStyle = function(t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e) },
            j = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(t) {
                var e = t.ctx,
                    i = t.canvas.width,
                    n = t.canvas.height;
                window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio)) }),
            $ = n.clear = function(t) { t.ctx.clearRect(0, 0, t.width, t.height) },
            q = n.fontString = function(t, e, i) {
                return e + " " + t + "px " + i },
            Y = n.longestText = function(t, e, i) { t.font = e;
                var n = 0;
                return o(i, function(e) {
                    var i = t.measureText(e).width;
                    n = i > n ? i : n }), n },
            X = n.drawRoundedRectangle = function(t, e, i, n, o, a) { t.beginPath(), t.moveTo(e + a, i), t.lineTo(e + n - a, i), t.quadraticCurveTo(e + n, i, e + n, i + a), t.lineTo(e + n, i + o - a), t.quadraticCurveTo(e + n, i + o, e + n - a, i + o), t.lineTo(e + a, i + o), t.quadraticCurveTo(e, i + o, e, i + o - a), t.lineTo(e, i + a), t.quadraticCurveTo(e, i, e + a, i), t.closePath() };
        i.instances = {}, i.Type = function(t, e, n) { this.options = e, this.chart = n, this.id = p(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t) }, s(i.Type.prototype, { initialize: function() {
                return this }, clear: function() {
                return $(this.chart), this }, stop: function() {
                return i.animationService.cancelAnimation(this), this }, resize: function(t) { this.stop();
                var e = this.chart.canvas,
                    i = W(this.chart.canvas),
                    n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : H(this.chart.canvas);
                return e.width = this.chart.width = i, e.height = this.chart.height = n, j(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this }, reflow: f, render: function(t) {
                if (t && this.reflow(), this.options.animation && !t) {
                    var e = new i.Animation;
                    e.numSteps = this.options.animationSteps, e.easing = this.options.animationEasing, e.render = function(t, e) {
                        var i = n.easingEffects[e.easing],
                            o = e.currentStep / e.numSteps,
                            a = i(o);
                        t.draw(a, o, e.currentStep) }, e.onAnimationProgress = this.options.onAnimationProgress, e.onAnimationComplete = this.options.onAnimationComplete, i.animationService.addAnimation(this, e) } else this.draw(), this.options.onAnimationComplete.call(this);
                return this }, generateLegend: function() {
                return E(this.options.legendTemplate, this) }, destroy: function() { this.clear(), V(this, this.events);
                var t = this.chart.canvas;
                t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete i.instances[this.id] }, showTooltip: function(t, e) { "undefined" == typeof this.activeElements && (this.activeElements = []);
                var a = function(t) {
                    var e = !1;
                    return t.length !== this.activeElements.length ? e = !0 : (o(t, function(t, i) { t !== this.activeElements[i] && (e = !0) }, this), e) }.call(this, t);
                if (a || e) {
                    if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var s, r, c = this.datasets.length - 1; c >= 0 && (s = this.datasets[c].points || this.datasets[c].bars || this.datasets[c].segments, r = l(s, t[0]), -1 === r); c--);
                            var u = [],
                                h = [],
                                d = function(t) {
                                    var i, s, l, c, d, e = [],
                                        o = [],
                                        a = [];
                                    return n.each(this.datasets, function(t) { i = t.points || t.bars || t.segments, i[r] && i[r].hasValue() && e.push(i[r]) }), n.each(e, function(t) { o.push(t.x), a.push(t.y), u.push(n.template(this.options.multiTooltipTemplate, t)), h.push({ fill: t._saved.fillColor || t.fillColor, stroke: t._saved.strokeColor || t.strokeColor }) }, this), d = b(a), l = y(a), c = b(o), s = y(o), { x: c > this.chart.width / 2 ? c : s, y: (d + l) / 2 } }.call(this, r);
                            new i.MultiTooltip({ x: d.x, y: d.y, xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, xOffset: this.options.tooltipXOffset, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, titleTextColor: this.options.tooltipTitleFontColor, titleFontFamily: this.options.tooltipTitleFontFamily, titleFontStyle: this.options.tooltipTitleFontStyle, titleFontSize: this.options.tooltipTitleFontSize, cornerRadius: this.options.tooltipCornerRadius, labels: u, legendColors: h, legendColorBackground: this.options.multiTooltipKeyBackground, title: E(this.options.tooltipTitleTemplate, t[0]), chart: this.chart, ctx: this.chart.ctx, custom: this.options.customTooltips }).draw() } else o(t, function(t) {
                            var e = t.tooltipPosition();
                            new i.Tooltip({ x: Math.round(e.x), y: Math.round(e.y), xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, caretHeight: this.options.tooltipCaretSize, cornerRadius: this.options.tooltipCornerRadius, text: E(this.options.tooltipTemplate, t), chart: this.chart, custom: this.options.customTooltips }).draw() }, this);
                    return this } }, toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments) } }), i.Type.extend = function(t) {
            var e = this,
                n = function() {
                    return e.apply(this, arguments) };
            if (n.prototype = a(e.prototype), s(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
                var o = t.name || e.prototype.name,
                    l = i.defaults[e.prototype.name] ? a(i.defaults[e.prototype.name]) : {};
                i.defaults[o] = s(l, t.defaults), i.types[o] = n, i.prototype[o] = function(t, e) {
                    var a = r(i.defaults.global, i.defaults[o], e || {});
                    return new n(t, a, this) } } else m("Name not provided for this chart, so it hasn't been registered");
            return e }, i.Element = function(t) { s(this, t), this.initialize.apply(this, arguments), this.save() }, s(i.Element.prototype, { initialize: function() {}, restore: function(t) {
                return t ? o(t, function(t) { this[t] = this._saved[t] }, this) : s(this, this._saved), this }, save: function() {
                return this._saved = a(this), delete this._saved._saved, this }, update: function(t) {
                return o(t, function(t, e) { this._saved[e] = this[e], this[e] = t }, this), this }, transition: function(t, e) {
                return o(t, function(t, i) { this[i] = (t - this._saved[i]) * e + this._saved[i] }, this), this }, tooltipPosition: function() {
                return { x: this.x, y: this.y } }, hasValue: function() {
                return g(this.value) } }), i.Element.extend = d, i.Point = i.Element.extend({ display: !0, inRange: function(t, e) {
                var i = this.hitDetectionRadius + this.radius;
                return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2) }, draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke() } } }), i.Arc = i.Element.extend({ inRange: function(t, e) {
                var i = n.getAngleFromPoint(this, { x: t, y: e }),
                    o = i.angle % (2 * Math.PI),
                    a = (2 * Math.PI + this.startAngle) % (2 * Math.PI),
                    s = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360,
                    r = a > s ? s >= o || o >= a : o >= a && s >= o,
                    l = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
                return r && l }, tooltipPosition: function() {
                var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return { x: this.x + Math.cos(t) * e, y: this.y + Math.sin(t) * e } }, draw: function(t) {
                var i = this.ctx;
                i.beginPath(), i.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle), i.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0), i.closePath(), i.strokeStyle = this.strokeColor, i.lineWidth = this.strokeWidth, i.fillStyle = this.fillColor, i.fill(), i.lineJoin = "bevel", this.showStroke && i.stroke() } }), i.Rectangle = i.Element.extend({ draw: function() {
                var t = this.ctx,
                    e = this.width / 2,
                    i = this.x - e,
                    n = this.x + e,
                    o = this.base - (this.base - this.y),
                    a = this.strokeWidth / 2;
                this.showStroke && (i += a, n -= a, o += a), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, o), t.lineTo(n, o), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke() }, height: function() {
                return this.base - this.y }, inRange: function(t, e) {
                return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base } }), i.Animation = i.Element.extend({ currentStep: null, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }), i.Tooltip = i.Element.extend({ draw: function() {
                var t = this.chart.ctx;
                t.font = q(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var e = this.caretPadding = 2,
                    i = t.measureText(this.text).width + 2 * this.xPadding,
                    n = this.fontSize + 2 * this.yPadding,
                    o = n + this.caretHeight + e;
                this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below");
                var a = this.x - i / 2,
                    s = this.y - o;
                if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                            break;
                        case "below":
                            s = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill() }
                    switch (this.xAlign) {
                        case "left":
                            a = this.x - i + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            a = this.x - (this.cornerRadius + this.caretHeight) }
                    X(t, a, s, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, a + i / 2, s + n / 2) } } }), i.MultiTooltip = i.Element.extend({ initialize: function() { this.font = q(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = q(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0, this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight, this.ctx.font = this.titleFont;
                var t = this.ctx.measureText(this.title).width,
                    e = Y(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    i = y([e, t]);
                this.width = i + 2 * this.xPadding;
                var n = this.height / 2;
                this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset }, getLineHeight: function(t) {
                var e = this.y - this.height / 2 + this.yPadding,
                    i = t - 1;
                return 0 === t ? e + this.titleHeight / 3 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + this.titleHeight }, draw: function() {
                if (this.custom) this.custom(this);
                else { X(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var t = this.ctx;
                    t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function(e, i) { t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize) }, this) } } }), i.Scale = i.Element.extend({
            initialize: function() { this.fit() },
            buildYLabels: function() { this.yLabels = [];
                for (var t = x(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(E(this.templateString, { value: (this.min + e * this.stepValue).toFixed(t) }));
                this.yLabelWidth = this.display && this.showLabels ? Y(this.ctx, this.font, this.yLabels) + 10 : 0 },
            addXLabel: function(t) { this.xLabels.push(t), this.valuesCount++, this.fit() },
            removeXLabel: function() { this.xLabels.shift(), this.valuesCount--, this.fit() },
            fit: function() { this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var i, t = this.endPoint,
                    e = this.endPoint - this.startPoint;
                for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, i = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), i < this.yLabelWidth && (this.endPoint = t, this.calculateXLabelRotation()) },
            calculateXLabelRotation: function() { this.ctx.font = this.font;
                var i, n, t = this.ctx.measureText(this.xLabels[0]).width,
                    e = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = e / 2 + 3, this.xScalePaddingLeft = t / 2 > this.yLabelWidth ? t / 2 : this.yLabelWidth, this.xLabelRotation = 0, this.display) {
                    var a, o = Y(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = o;
                    for (var r = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > r && 0 === this.xLabelRotation || this.xLabelWidth > r && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) a = Math.cos(C(this.xLabelRotation)), i = a * t, n = a * e, i + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = i + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = a * o;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(C(this.xLabelRotation)) * o + 3) } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding },
            calculateYRange: f,
            drawingArea: function() {
                return this.startPoint - this.endPoint },
            calculateY: function(t) {
                var e = this.drawingArea() / (this.min - this.max);
                return this.endPoint - e * (t - this.min) },
            calculateX: function(t) {
                var i = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    n = i / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                    o = n * t + this.xScalePaddingLeft;
                return this.offsetGridLines && (o += n / 2), Math.round(o) },
            update: function(t) { n.extend(this, t), this.fit() },
            draw: function() {
                var t = this.ctx,
                    e = (this.endPoint - this.startPoint) / this.steps,
                    i = Math.round(this.xScalePaddingLeft);
                this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels, function(o, a) {
                    var s = this.endPoint - e * a,
                        r = Math.round(s),
                        l = this.showHorizontalLines;
                    t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(o, i - 10, s), 0 !== a || l || (l = !0), l && t.beginPath(), a > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, r), t.lineTo(this.width, r), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, r), t.lineTo(i, r), t.stroke(), t.closePath() }, this), o(this.xLabels, function(e, i) {
                    var n = this.calculateX(i) + S(this.lineWidth),
                        o = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + S(this.lineWidth),
                        a = this.xLabelRotation > 0,
                        s = this.showVerticalLines;
                    0 !== i || s || (s = !0), s && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), s && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5),
                        t.stroke(), t.closePath(), t.save(), t.translate(n, a ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * C(this.xLabelRotation)), t.font = this.font, t.textAlign = a ? "right" : "center", t.textBaseline = a ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
                }, this))
            }
        }), i.RadialScale = i.Element.extend({ initialize: function() { this.size = b([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 }, calculateCenterOffset: function(t) {
                var e = this.drawingArea / (this.max - this.min);
                return (t - this.min) * e }, update: function() { this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels() }, buildYLabels: function() { this.yLabels = [];
                for (var t = x(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(E(this.templateString, { value: (this.min + e * this.stepValue).toFixed(t) })) }, getCircumference: function() {
                return 2 * Math.PI / this.valuesCount }, setScaleSize: function() {
                var e, i, n, o, s, r, c, u, h, d, f, p, t = b([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    a = this.width,
                    l = 0;
                for (this.ctx.font = q(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++) e = this.getPointPosition(i, t), n = this.ctx.measureText(E(this.templateString, { value: this.labels[i] })).width + 5, 0 === i || i === this.valuesCount / 2 ? (o = n / 2, e.x + o > a && (a = e.x + o, s = i), e.x - o < l && (l = e.x - o, c = i)) : i < this.valuesCount / 2 ? e.x + n > a && (a = e.x + n, s = i) : i > this.valuesCount / 2 && e.x - n < l && (l = e.x - n, c = i);
                h = l, d = Math.ceil(a - this.width), r = this.getIndexAngle(s), u = this.getIndexAngle(c), f = d / Math.sin(r + Math.PI / 2), p = h / Math.sin(u + Math.PI / 2), f = g(f) ? f : 0, p = g(p) ? p : 0, this.drawingArea = t - (p + f) / 2, this.setCenterPoint(p, f) }, setCenterPoint: function(t, e) {
                var i = this.width - e - this.drawingArea,
                    n = t + this.drawingArea;
                this.xCenter = (n + i) / 2, this.yCenter = this.height / 2 }, getIndexAngle: function(t) {
                var e = 2 * Math.PI / this.valuesCount;
                return t * e - Math.PI / 2 }, getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t);
                return { x: Math.cos(i) * e + this.xCenter, y: Math.sin(i) * e + this.yCenter } }, draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    if (o(this.yLabels, function(e, i) {
                            if (i > 0) {
                                var a, n = i * (this.drawingArea / this.steps),
                                    o = this.yCenter - n;
                                if (this.lineWidth > 0)
                                    if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                    else { t.beginPath();
                                        for (var s = 0; s < this.valuesCount; s++) a = this.getPointPosition(s, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === s ? t.moveTo(a.x, a.y) : t.lineTo(a.x, a.y);
                                        t.closePath(), t.stroke() }
                                if (this.showLabels) {
                                    if (t.font = q(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var r = t.measureText(e).width;
                                        t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY) }
                                    t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, o) } } }, this), !this.lineArc) { t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                        for (var e = this.valuesCount - 1; e >= 0; e--) {
                            var i = null,
                                n = null;
                            if (this.angleLineWidth > 0 && (i = this.calculateCenterOffset(this.max), n = this.getPointPosition(e, i), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(n.x, n.y), t.stroke(), t.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) { null == i && (i = this.calculateCenterOffset(this.max)), null == n && (n = this.getPointPosition(e, i));
                                var a = this.getPointPosition(0 === e ? this.valuesCount - 1 : e - 1, i),
                                    s = this.getPointPosition(e === this.valuesCount - 1 ? 0 : e + 1, i),
                                    r = { x: (a.x + n.x) / 2, y: (a.y + n.y) / 2 },
                                    l = { x: (n.x + s.x) / 2, y: (n.y + s.y) / 2 };
                                t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(r.x, r.y), t.lineTo(n.x, n.y), t.lineTo(l.x, l.y), t.fillStyle = this.backgroundColors[e], t.fill(), t.closePath() }
                            var c = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                            t.font = q(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                            var u = this.labels.length,
                                h = this.labels.length / 2,
                                d = h / 2,
                                f = d > e || e > u - d,
                                p = e === d || e === u - d;
                            0 === e ? t.textAlign = "center" : e === h ? t.textAlign = "center" : h > e ? t.textAlign = "left" : t.textAlign = "right", p ? t.textBaseline = "middle" : f ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[e], c.x, c.y) } } } } }), i.animationService = { frameDuration: 17, animations: [], dropFrames: 0, addAnimation: function(t, e) {
                for (var i = 0; i < this.animations.length; ++i)
                    if (this.animations[i].chartInstance === t) return void(this.animations[i].animationObject = e);
                this.animations.push({ chartInstance: t, animationObject: e }), 1 == this.animations.length && n.requestAnimFrame.call(window, this.digestWrapper) }, cancelAnimation: function(t) {
                var e = n.findNextWhere(this.animations, function(e) {
                    return e.chartInstance === t });
                e && this.animations.splice(e, 1) }, digestWrapper: function() { i.animationService.startDigest.call(i.animationService) }, startDigest: function() {
                var t = Date.now(),
                    e = 0;
                this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames -= e);
                for (var i = 0; i < this.animations.length; i++) null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0), this.animations[i].animationObject.currentStep += 1 + e, this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps), this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject), this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance), this.animations.splice(i, 1), i--);
                var o = Date.now(),
                    a = o - t - this.frameDuration,
                    s = a / this.frameDuration;
                s > 1 && (this.dropFrames += s), this.animations.length > 0 && n.requestAnimFrame.call(window, this.digestWrapper) } }, n.addEvent(window, "resize", function() {
            var t;
            return function() { clearTimeout(t), t = setTimeout(function() { o(i.instances, function(t) { t.options.responsive && t.resize(t.render, !0) }) }, 50) } }()), v ? define(function() {
            return i }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function() {
            return t.Chart = e, i }
    }.call(this),
    function() { "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = { scaleBeginAtZero: !0, scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>' };
        e.Type.extend({ name: "Bar", defaults: n, initialize: function(t) {
                var n = this.options;
                this.ScaleClass = e.Scale.extend({ offsetGridLines: !0, calculateBarX: function(t, e, i) {
                        var o = this.calculateBaseWidth(),
                            a = this.calculateX(i) - o / 2,
                            s = this.calculateBarWidth(t);
                        return a + s * e + e * n.barDatasetSpacing + s / 2 }, calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing }, calculateBarWidth: function(t) {
                        var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
                        return e / t } }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) { t.restore(["fillColor", "strokeColor"]) }), i.each(e, function(t) { t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke }), this.showTooltip(e) }), this.BarClass = e.Rectangle.extend({ strokeWidth: this.options.barStrokeWidth, showStroke: this.options.barShowStroke, ctx: this.chart.ctx }), i.each(t.datasets, function(e, n) {
                    var o = { label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, bars: [] };
                    this.datasets.push(o), i.each(e.data, function(i, n) { o.bars.push(new this.BarClass({ value: i, label: t.labels[n], datasetLabel: e.label, strokeColor: e.strokeColor, fillColor: e.fillColor, highlightFill: e.highlightFill || e.fillColor, highlightStroke: e.highlightStroke || e.strokeColor })) }, this) }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, e, n) { i.extend(t, { width: this.scale.calculateBarWidth(this.datasets.length), x: this.scale.calculateBarX(this.datasets.length, n, e), y: this.scale.endPoint }), t.save() }, this), this.render() }, update: function() { this.scale.update(), i.each(this.activeElements, function(t) { t.restore(["fillColor", "strokeColor"]) }), this.eachBars(function(t) { t.save() }), this.render() }, eachBars: function(t) { i.each(this.datasets, function(e, n) { i.each(e.bars, t, this, n) }, this) }, getBarsAtEvent: function(t) {
                for (var a, e = [], n = i.getRelativePosition(t), o = function(t) { e.push(t.bars[a]) }, s = 0; s < this.datasets.length; s++)
                    for (a = 0; a < this.datasets[s].bars.length; a++)
                        if (this.datasets[s].bars[a].inRange(n.x, n.y)) return i.each(this.datasets, o), e;
                return e }, buildScale: function(t) {
                var e = this,
                    n = function() {
                        var t = [];
                        return e.eachBars(function(e) { t.push(e.value) }), t },
                    o = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: t.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function(t) {
                            var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e) }, xLabels: t, font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0, showLabels: this.options.scaleShowLabels, display: this.options.showScale };
                this.options.scaleOverride && i.extend(o, { calculateYRange: i.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new this.ScaleClass(o) }, addData: function(t, e) { i.each(t, function(t, i) { this.datasets[i].bars.push(new this.BarClass({ value: t, label: e, datasetLabel: this.datasets[i].label, x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1), y: this.scale.endPoint, width: this.scale.calculateBarWidth(this.datasets.length), base: this.scale.endPoint, strokeColor: this.datasets[i].strokeColor, fillColor: this.datasets[i].fillColor })) }, this), this.scale.addXLabel(e), this.update() }, removeData: function() { this.scale.removeXLabel(), i.each(this.datasets, function(t) { t.bars.shift() }, this), this.update() }, reflow: function() { i.extend(this.BarClass.prototype, { y: this.scale.endPoint, base: this.scale.endPoint });
                var t = i.extend({ height: this.chart.height, width: this.chart.width });
                this.scale.update(t) }, draw: function(t) {
                var e = t || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(e), i.each(this.datasets, function(t, n) { i.each(t.bars, function(t, i) { t.hasValue() && (t.base = this.scale.endPoint, t.transition({ x: this.scale.calculateBarX(this.datasets.length, n, i), y: this.scale.calculateY(t.value), width: this.scale.calculateBarWidth(this.datasets.length) }, e).draw()) }, this) }, this) } }) }.call(this),
    function() { "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = { segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, percentageInnerCutout: 50, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>' };
        e.Type.extend({ name: "Doughnut", defaults: n, initialize: function(t) { this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({ ctx: this.chart.ctx, x: this.chart.width / 2, y: this.chart.height / 2 }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) { t.restore(["fillColor"]) }), i.each(e, function(t) { t.fillColor = t.highlightColor }), this.showTooltip(e) }), this.calculateTotal(t), i.each(t, function(e, i) { e.color || (e.color = "hsl(" + 360 * i / t.length + ", 100%, 50%)"), this.addData(e, i, !0) }, this), this.render() }, getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) { t.inRange(n.x, n.y) && e.push(t) }, this), e }, addData: function(t, i, n) {
                var o = void 0 !== i ? i : this.segments.length; "undefined" == typeof t.color && (t.color = e.defaults.global.segmentColorDefault[o % e.defaults.global.segmentColorDefault.length], t.highlight = e.defaults.global.segmentHighlightColorDefaults[o % e.defaults.global.segmentHighlightColorDefaults.length]), this.segments.splice(o, 0, new this.SegmentArc({ value: t.value, outerRadius: this.options.animateScale ? 0 : this.outerRadius, innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout, fillColor: t.color, highlightColor: t.highlight || t.color, showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, startAngle: 1.5 * Math.PI, circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value), label: t.label })), n || (this.reflow(), this.update()) }, calculateCircumference: function(t) {
                return this.total > 0 ? 2 * Math.PI * (t / this.total) : 0 }, calculateTotal: function(t) { this.total = 0, i.each(t, function(t) { this.total += Math.abs(t.value) }, this) }, update: function() { this.calculateTotal(this.segments), i.each(this.activeElements, function(t) { t.restore(["fillColor"]) }), i.each(this.segments, function(t) { t.save() }), this.render() }, removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update() }, reflow: function() { i.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function(t) { t.update({ outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout }) }, this) }, draw: function(t) {
                var e = t ? t : 1;
                this.clear(), i.each(this.segments, function(t, i) { t.transition({ circumference: this.calculateCircumference(t.value), outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle) }, this) } }), e.types.Doughnut.extend({ name: "Pie", defaults: i.merge(n, { percentageInnerCutout: 0 }) }) }.call(this),
    function() { "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = { scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, bezierCurve: !0, bezierCurveTension: .4, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>', offsetGridLines: !1 };
        e.Type.extend({ name: "Line", defaults: n, initialize: function(t) { this.PointClass = e.Point.extend({ offsetGridLines: this.options.offsetGridLines, strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx, inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2) } }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) { t.restore(["fillColor", "strokeColor"]) }), i.each(e, function(t) { t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke }), this.showTooltip(e) }), i.each(t.datasets, function(e) {
                    var n = { label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, pointColor: e.pointColor, pointStrokeColor: e.pointStrokeColor, points: [] };
                    this.datasets.push(n), i.each(e.data, function(i, o) { n.points.push(new this.PointClass({ value: i, label: t.labels[o], datasetLabel: e.label, strokeColor: e.pointStrokeColor, fillColor: e.pointColor, highlightFill: e.pointHighlightFill || e.pointColor, highlightStroke: e.pointHighlightStroke || e.pointStrokeColor })) }, this), this.buildScale(t.labels), this.eachPoints(function(t, e) { i.extend(t, { x: this.scale.calculateX(e), y: this.scale.endPoint }), t.save() }, this) }, this), this.render() }, update: function() { this.scale.update(), i.each(this.activeElements, function(t) { t.restore(["fillColor", "strokeColor"]) }), this.eachPoints(function(t) { t.save() }), this.render() }, eachPoints: function(t) { i.each(this.datasets, function(e) { i.each(e.points, t, this) }, this) }, getPointsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.datasets, function(t) { i.each(t.points, function(t) { t.inRange(n.x, n.y) && e.push(t) }) }, this), e }, buildScale: function(t) {
                var n = this,
                    o = function() {
                        var t = [];
                        return n.eachPoints(function(e) { t.push(e.value) }), t },
                    a = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, offsetGridLines: this.options.offsetGridLines, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: t.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function(t) {
                            var e = i.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e) }, xLabels: t, font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth, showLabels: this.options.scaleShowLabels, display: this.options.showScale };
                this.options.scaleOverride && i.extend(a, { calculateYRange: i.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new e.Scale(a) }, addData: function(t, e) { i.each(t, function(t, i) { this.datasets[i].points.push(new this.PointClass({ value: t, label: e, datasetLabel: this.datasets[i].label, x: this.scale.calculateX(this.scale.valuesCount + 1), y: this.scale.endPoint, strokeColor: this.datasets[i].pointStrokeColor, fillColor: this.datasets[i].pointColor })) }, this), this.scale.addXLabel(e), this.update() }, removeData: function() { this.scale.removeXLabel(), i.each(this.datasets, function(t) { t.points.shift() }, this), this.update() }, reflow: function() {
                var t = i.extend({ height: this.chart.height, width: this.chart.width });
                this.scale.update(t) }, draw: function(t) {
                var e = t || 1;
                this.clear();
                var n = this.chart.ctx,
                    o = function(t) {
                        return null !== t.value },
                    a = function(t, e, n) {
                        return i.findNextWhere(e, o, n) || t },
                    s = function(t, e, n) {
                        return i.findPreviousWhere(e, o, n) || t };
                this.scale && (this.scale.draw(e), i.each(this.datasets, function(t) {
                    var r = i.where(t.points, o);
                    i.each(t.points, function(t, i) { t.hasValue() && t.transition({ y: this.scale.calculateY(t.value), x: this.scale.calculateX(i) }, e) }, this), this.options.bezierCurve && i.each(r, function(t, e) {
                        var n = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = i.splineCurve(s(t, r, e), t, a(t, r, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint) }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(r, function(t, e) {
                        if (0 === e) n.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var i = s(t, r, e);
                            n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y) } else n.lineTo(t.x, t.y) }, this), this.options.datasetStroke && n.stroke(), this.options.datasetFill && r.length > 0 && (n.lineTo(r[r.length - 1].x, this.scale.endPoint), n.lineTo(r[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(r, function(t) { t.draw() }) }, this)) } }) }.call(this),
    function() { "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = { scaleShowLabelBackdrop: !0, scaleBackdropColor: "rgba(255,255,255,0.75)", scaleBeginAtZero: !0, scaleBackdropPaddingY: 2, scaleBackdropPaddingX: 2, scaleShowLine: !0, segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>' };
        e.Type.extend({ name: "PolarArea", defaults: n, initialize: function(t) { this.segments = [], this.SegmentArc = e.Arc.extend({ showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, ctx: this.chart.ctx, innerRadius: 0, x: this.chart.width / 2, y: this.chart.height / 2 }), this.scale = new e.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, lineArc: !0, width: this.chart.width, height: this.chart.height, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, valuesCount: t.length }), this.updateScaleRange(t), this.scale.update(), i.each(t, function(t, e) { this.addData(t, e, !0) }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) { t.restore(["fillColor"]) }), i.each(e, function(t) { t.fillColor = t.highlightColor }), this.showTooltip(e) }), this.render() }, getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) { t.inRange(n.x, n.y) && e.push(t) }, this), e }, addData: function(t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({ fillColor: t.color, highlightColor: t.highlight || t.color, label: t.label, value: t.value, outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value), circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(), startAngle: 1.5 * Math.PI })), i || (this.reflow(), this.update()) }, removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update() }, calculateTotal: function(t) { this.total = 0, i.each(t, function(t) { this.total += t.value }, this), this.scale.valuesCount = this.segments.length }, updateScaleRange: function(t) {
                var e = [];
                i.each(t, function(t) { e.push(t.value) });
                var n = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n, { size: i.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }) }, update: function() { this.calculateTotal(this.segments), i.each(this.segments, function(t) { t.save() }), this.reflow(), this.render() }, reflow: function() { i.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, { xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), i.each(this.segments, function(t) { t.update({ outerRadius: this.scale.calculateCenterOffset(t.value) }) }, this) }, draw: function(t) {
                var e = t || 1;
                this.clear(), i.each(this.segments, function(t, i) { t.transition({ circumference: this.scale.getCircumference(), outerRadius: this.scale.calculateCenterOffset(t.value) }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw() }, this), this.scale.draw() } }) }.call(this),
    function() { "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers;
        e.Type.extend({ name: "Radar", defaults: { scaleShowLine: !0, angleShowLineOut: !0, scaleShowLabels: !1, scaleBeginAtZero: !0, angleLineColor: "rgba(0,0,0,.1)", angleLineWidth: 1, pointLabelFontFamily: "'Arial'", pointLabelFontStyle: "normal", pointLabelFontSize: 10, pointLabelFontColor: "#666", pointDot: !0, pointDotRadius: 3, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>' }, initialize: function(t) { this.PointClass = e.Point.extend({ strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) { t.restore(["fillColor", "strokeColor"]) }), i.each(e, function(t) { t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke }), this.showTooltip(e) }), i.each(t.datasets, function(e) {
                    var n = { label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, pointColor: e.pointColor, pointStrokeColor: e.pointStrokeColor, points: [] };
                    this.datasets.push(n), i.each(e.data, function(i, o) {
                        var a;
                        this.scale.animation || (a = this.scale.getPointPosition(o, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({ value: i, label: t.labels[o], datasetLabel: e.label, x: this.options.animation ? this.scale.xCenter : a.x, y: this.options.animation ? this.scale.yCenter : a.y, strokeColor: e.pointStrokeColor, fillColor: e.pointColor, highlightFill: e.pointHighlightFill || e.pointColor, highlightStroke: e.pointHighlightStroke || e.pointStrokeColor })) }, this) }, this), this.render() }, eachPoints: function(t) { i.each(this.datasets, function(e) { i.each(e.points, t, this) }, this) }, getPointsAtEvent: function(t) {
                var e = i.getRelativePosition(t),
                    n = i.getAngleFromPoint({ x: this.scale.xCenter, y: this.scale.yCenter }, e),
                    o = 2 * Math.PI / this.scale.valuesCount,
                    a = Math.round((n.angle - 1.5 * Math.PI) / o),
                    s = [];
                return (a >= this.scale.valuesCount || 0 > a) && (a = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) { s.push(t.points[a]) }), s }, buildScale: function(t) { this.scale = new e.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backgroundColors: this.options.scaleBackgroundColors, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, angleLineColor: this.options.angleLineColor, angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0, pointLabelFontColor: this.options.pointLabelFontColor, pointLabelFontSize: this.options.pointLabelFontSize, pointLabelFontFamily: this.options.pointLabelFontFamily, pointLabelFontStyle: this.options.pointLabelFontStyle, height: this.chart.height, width: this.chart.width, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, labels: t.labels, valuesCount: t.datasets[0].data.length }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels() }, updateScaleRange: function(t) {
                var e = function() {
                        var e = [];
                        return i.each(t, function(t) { t.data ? e = e.concat(t.data) : i.each(t.points, function(t) { e.push(t.value) }) }), e }(),
                    n = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n) }, addData: function(t, e) { this.scale.valuesCount++, i.each(t, function(t, i) {
                    var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[i].points.push(new this.PointClass({ value: t, label: e, datasetLabel: this.datasets[i].label, x: n.x, y: n.y, strokeColor: this.datasets[i].pointStrokeColor, fillColor: this.datasets[i].pointColor })) }, this), this.scale.labels.push(e), this.reflow(), this.update() }, removeData: function() { this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(t) { t.points.shift() }, this), this.reflow(), this.update() }, update: function() { this.eachPoints(function(t) { t.save() }), this.reflow(), this.render() }, reflow: function() { i.extend(this.scale, { width: this.chart.width, height: this.chart.height, size: i.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels() }, draw: function(t) {
                var e = t || 1,
                    n = this.chart.ctx;
                this.clear(), this.scale.draw(), i.each(this.datasets, function(t) { i.each(t.points, function(t, i) { t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e) }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function(t, e) { 0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y) }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, this.options.datasetFill && n.fill(), i.each(t.points, function(t) { t.hasValue() && t.draw() }) }, this) } }) }.call(this), $(document).ready(function() { scaleVideoContainer(), initBannerVideoSize(".video-container .poster img"), initBannerVideoSize(".video-container .filter"), initBannerVideoSize(".video-container video"), $(window).on("resize", function() { scaleVideoContainer(), scaleBannerVideoSize(".video-container .poster img"), scaleBannerVideoSize(".video-container .filter"), scaleBannerVideoSize(".video-container video") }) }),
    function() {
        var t, e, i, n, o, a = function(t, e) {
                return function() {
                    return t.apply(e, arguments) } },
            s = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1 };
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var i, n;
                for (i in e) n = e[i], null == t[i] && (t[i] = n);
                return t
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t) }, t.prototype.createEvent = function(t, e, i, n) {
                var o;
                return null == e && (e = !1), null == i && (i = !1), null == n && (n = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, i, n)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o }, t.prototype.emitEvent = function(t, e) {
                return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0 }, t.prototype.addEvent = function(t, e, i) {
                return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i }, t.prototype.removeEvent = function(t, e, i) {
                return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e] }, t.prototype.innerHeight = function() {
                return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, t
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function t() { this.keys = [], this.values = [] }
            return t.prototype.get = function(t) {
                var e, i, n, o, a;
                for (a = this.keys, e = n = 0, o = a.length; o > n; e = ++n)
                    if (i = a[e], i === t) return this.values[e] }, t.prototype.set = function(t, e) {
                var i, n, o, a, s;
                for (s = this.keys, i = o = 0, a = s.length; a > o; i = ++o)
                    if (n = s[i], n === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e) }, t }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
            function t() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") }
            return t.notSupported = !0, t.prototype.observe = function() {}, t }()), n = this.getComputedStyle || function(t, e) {
            return this.getPropertyValue = function(e) {
                var i;
                return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function(t, e) {
                    return e.toUpperCase() }), (null != (i = t.currentStyle) ? i[e] : void 0) || null }, this }, o = /(\-([a-z]){1})/g, this.WOW = function() {
            function o(t) { null == t && (t = {}), this.scrollCallback = a(this.scrollCallback, this), this.scrollHandler = a(this.scrollHandler, this), this.resetAnimation = a(this.resetAnimation, this), this.start = a(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass) }
            return o.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, o.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, o.prototype.start = function() {
                var e, i, n, o;
                if (this.stopped = !1, this.boxes = function() {
                        var t, i, n, o;
                        for (n = this.element.querySelectorAll("." + this.config.boxClass), o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e);
                        return o }.call(this), this.all = function() {
                        var t, i, n, o;
                        for (n = this.boxes, o = [], t = 0, i = n.length; i > t; t++) e = n[t], o.push(e);
                        return o }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (o = this.boxes, i = 0, n = o.length; n > i; i++) e = o[i], this.applyStyle(e, !0);
                return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
                    return function(e) {
                        var i, n, o, a, s;
                        for (s = [], i = 0, n = e.length; n > i; i++) a = e[i], s.push(function() {
                            var t, e, i, n;
                            for (i = a.addedNodes || [], n = [], t = 0, e = i.length; e > t; t++) o = i[t], n.push(this.doSync(o));
                            return n }.call(t));
                        return s } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0 }, o.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, o.prototype.sync = function(e) {
                return t.notSupported ? this.doSync(this.element) : void 0 }, o.prototype.doSync = function(t) {
                var e, i, n, o, a;
                if (null == t && (t = this.element), 1 === t.nodeType) {
                    for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), a = [], i = 0, n = o.length; n > i; i++) e = o[i], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), a.push(this.scrolled = !0)) : a.push(void 0);
                    return a } }, o.prototype.show = function(t) {
                return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t }, o.prototype.applyStyle = function(t, e) {
                var i, n, o;
                return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(a) {
                    return function() {
                        return a.customStyle(t, e, n, i, o) } }(this)) }, o.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(t) {
                    return window.requestAnimationFrame(t) } : function(t) {
                    return t() } }(), o.prototype.resetStyle = function() {
                var t, e, i, n, o;
                for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], o.push(t.style.visibility = "visible");
                return o }, o.prototype.resetAnimation = function(t) {
                var e;
                return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0 }, o.prototype.customStyle = function(t, e, i, n, o) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, { animationDuration: i }), n && this.vendorSet(t.style, { animationDelay: n }), o && this.vendorSet(t.style, { animationIterationCount: o }), this.vendorSet(t.style, { animationName: e ? "none" : this.cachedAnimationName(t) }), t }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
                var i, n, o, a;
                n = [];
                for (i in e) o = e[i], t["" + i] = o, n.push(function() {
                    var e, n, s, r;
                    for (s = this.vendors, r = [], e = 0, n = s.length; n > e; e++) a = s[e], r.push(t["" + a + i.charAt(0).toUpperCase() + i.substr(1)] = o);
                    return r }.call(this));
                return n }, o.prototype.vendorCSS = function(t, e) {
                var i, o, a, s, r, l;
                for (r = n(t), s = r.getPropertyCSSValue(e), a = this.vendors, i = 0, o = a.length; o > i; i++) l = a[i], s = s || r.getPropertyCSSValue("-" + l + "-" + e);
                return s }, o.prototype.animationName = function(t) {
                var e;
                try { e = this.vendorCSS(t, "animation-name").cssText } catch (i) { e = n(t).getPropertyValue("animation-name") }
                return "none" === e ? "" : e }, o.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t)) }, o.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t) }, o.prototype.scrollHandler = function() {
                return this.scrolled = !0 }, o.prototype.scrollCallback = function() {
                var t;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var e, i, n, o;
                    for (n = this.boxes, o = [], e = 0, i = n.length; i > e; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                    return o }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, o.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e }, o.prototype.isVisible = function(t) {
                var e, i, n, o, a;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, a = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = a + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, n = this.offsetTop(t), e = n + t.clientHeight, o >= n && e >= a }, o.prototype.util = function() {
                return null != this._util ? this._util : this._util = new e }, o.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, o }()
    }.call(this), $(window).scroll(function() { $(".navbar").offset() && ($(".navbar").offset().top > 50 ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse")) }), $(function() { $("a.page-scroll").bind("click", function(t) {
            var e = $(this);
            $("html, body").stop().animate({ scrollTop: $(e.attr("href")).offset().top }, 1500, "easeInOutExpo"), t.preventDefault() }) }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define([], function() {
            return e.apply(t) }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t) }("object" == typeof global ? global : this, function() { "use strict";

        function o(t) {
            return null !== t && t === t.window }

        function a(t) {
            return o(t) ? t : 9 === t.nodeType && t.defaultView }

        function s(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t }

        function r(t) {
            return s(t) && t.nodeType > 0 }

        function l(t) {
            var n = i.call(t);
            return "[object String]" === n ? e(t) : s(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n) && t.hasOwnProperty("length") ? t : r(t) ? [t] : [] }

        function c(t) {
            var e, i, n = { top: 0, left: 0 },
                o = t && t.ownerDocument;
            return e = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (n = t.getBoundingClientRect()), i = a(o), { top: n.top + i.pageYOffset - e.clientTop, left: n.left + i.pageXOffset - e.clientLeft } }

        function u(t) {
            var e = "";
            for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
            return e }

        function f(t, e, i) {
            if (i) { i.classList.remove("waves-rippling");
                var n = i.getAttribute("data-x"),
                    o = i.getAttribute("data-y"),
                    a = i.getAttribute("data-scale"),
                    s = i.getAttribute("data-translate"),
                    r = Date.now() - Number(i.getAttribute("data-hold")),
                    l = 350 - r;
                0 > l && (l = 0), "mousemove" === t.type && (l = 150);
                var c = "mousemove" === t.type ? 2500 : h.duration;
                setTimeout(function() {
                    var t = { top: o + "px", left: n + "px", opacity: "0", "-webkit-transition-duration": c + "ms", "-moz-transition-duration": c + "ms", "-o-transition-duration": c + "ms", "transition-duration": c + "ms", "-webkit-transform": a + " " + s, "-moz-transform": a + " " + s, "-ms-transform": a + " " + s, "-o-transform": a + " " + s, transform: a + " " + s };
                    i.setAttribute("style", u(t)), setTimeout(function() {
                        try { e.removeChild(i) } catch (t) {
                            return !1 } }, c) }, l) } }

        function m(t) {
            if (p.allowEvent(t) === !1) return null;
            for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
                if (i.classList.contains("waves-effect") && !(i instanceof SVGElement)) { e = i;
                    break }
                i = i.parentElement }
            return e }

        function v(t) {
            var e = m(t);
            if (null !== e) {
                if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled")) return;
                if (p.registerEvent(t), "touchstart" === t.type && h.delay) {
                    var i = !1,
                        o = setTimeout(function() { o = null, h.show(t, e) }, h.delay),
                        a = function(n) { o && (clearTimeout(o), o = null, h.show(t, e)), i || (i = !0, h.hide(n, e)) },
                        s = function(t) { o && (clearTimeout(o), o = null), a(t) };
                    e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", a, !1), e.addEventListener("touchcancel", a, !1) } else h.show(t, e), n && (e.addEventListener("touchend", h.hide, !1), e.addEventListener("touchcancel", h.hide, !1)), e.addEventListener("mouseup", h.hide, !1), e.addEventListener("mouseleave", h.hide, !1) } }
        var t = t || {},
            e = document.querySelectorAll.bind(document),
            i = Object.prototype.toString,
            n = "ontouchstart" in window,
            h = { duration: 750, delay: 200, show: function(t, e, i) {
                    if (2 === t.button) return !1;
                    e = e || this;
                    var n = document.createElement("div");
                    n.className = "waves-ripple waves-rippling", e.appendChild(n);
                    var o = c(e),
                        a = 0,
                        s = 0; "touches" in t && t.touches.length ? (a = t.touches[0].pageY - o.top, s = t.touches[0].pageX - o.left) : (a = t.pageY - o.top, s = t.pageX - o.left), s = s >= 0 ? s : 0, a = a >= 0 ? a : 0;
                    var r = "scale(" + e.clientWidth / 100 * 3 + ")",
                        l = "translate(0,0)";
                    i && (l = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", s), n.setAttribute("data-y", a), n.setAttribute("data-scale", r), n.setAttribute("data-translate", l);
                    var d = { top: a + "px", left: s + "px" };
                    n.classList.add("waves-notransition"), n.setAttribute("style", u(d)), n.classList.remove("waves-notransition"), d["-webkit-transform"] = r + " " + l, d["-moz-transform"] = r + " " + l, d["-ms-transform"] = r + " " + l, d["-o-transform"] = r + " " + l, d.transform = r + " " + l, d.opacity = "1";
                    var f = "mousemove" === t.type ? 2500 : h.duration;
                    d["-webkit-transition-duration"] = f + "ms", d["-moz-transition-duration"] = f + "ms", d["-o-transition-duration"] = f + "ms", d["transition-duration"] = f + "ms", n.setAttribute("style", u(d)) }, hide: function(t, e) { e = e || this;
                    for (var i = e.getElementsByClassName("waves-rippling"), n = 0, o = i.length; o > n; n++) f(t, e, i[n]) } },
            d = { input: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        i.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(i, t), i.appendChild(t);
                        var n = window.getComputedStyle(t, null),
                            o = n.color,
                            a = n.backgroundColor;
                        i.setAttribute("style", "color:" + o + ";background:" + a), t.setAttribute("style", "background-color:rgba(0,0,0,0);") } }, img: function(t) {
                    var e = t.parentNode;
                    if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        e.replaceChild(i, t), i.appendChild(t) } } },
            p = { touches: 0, allowEvent: function(t) {
                    var e = !0;
                    return /^(mousedown|mousemove)$/.test(t.type) && p.touches && (e = !1), e }, registerEvent: function(t) {
                    var e = t.type; "touchstart" === e ? p.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function() { p.touches && (p.touches -= 1) }, 500) } };
        return t.init = function(t) {
            var e = document.body;
            t = t || {}, "duration" in t && (h.duration = t.duration), "delay" in t && (h.delay = t.delay), n && (e.addEventListener("touchstart", v, !1), e.addEventListener("touchcancel", p.registerEvent, !1), e.addEventListener("touchend", p.registerEvent, !1)), e.addEventListener("mousedown", v, !1) }, t.attach = function(t, e) { t = l(t), "[object Array]" === i.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
            for (var n, o, a = 0, s = t.length; s > a; a++) n = t[a], o = n.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (d[o](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e) }, t.ripple = function(t, e) { t = l(t);
            var i = t.length;
            if (e = e || {}, e.wait = e.wait || 0, e.position = e.position || null, i)
                for (var n, o, a, s = {}, r = 0, u = { type: "mousedown", button: 1 }, d = function(t, e) {
                        return function() { h.hide(t, e) } }; i > r; r++)
                    if (n = t[r], o = e.position || { x: n.clientWidth / 2, y: n.clientHeight / 2 }, a = c(n), s.x = a.left + o.x, s.y = a.top + o.y, u.pageX = s.x, u.pageY = s.y, h.show(u, n), e.wait >= 0 && null !== e.wait) {
                        var f = { type: "mouseup", button: 1 };
                        setTimeout(d(f, n), e.wait) } }, t.calm = function(t) { t = l(t);
            for (var e = { type: "mouseup", button: 1 }, i = 0, n = t.length; n > i; i++) h.hide(e, t[i]) }, t.displayEffect = function(e) { console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), t.init(e) }, t }), Waves.attach(".btn, .btn-floating", ["waves-light"]), Waves.attach(".view .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a, .navbar form", ["waves-light"]), Waves.attach(".navbar-brand", ["waves-light"]), Waves.attach(".double-nav li", ["waves-light"]), Waves.init(), $(document).ready(function() { $("#preloader-markup").load("mdb-addons/preloader.html", function() { $("#mdb-preloader").delay(2500).fadeOut("slow") }) }),
    function(t) { t(document).ready(function() { t(document).on("click.card", ".card", function(e) { t(this).find(".card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({ translateY: 0 }, { duration: 225, queue: !1, easing: "easeInOutQuad", complete: function() { t(this).css({ display: "none" }) } }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && t(this).find(".card-reveal").css({ display: "block" }).velocity("stop", !1).velocity({ translateY: "-100%" }, { duration: 300, queue: !1, easing: "easeInOutQuad" })) }) }) }(jQuery), $(document).ready(function(t) { t(".card-share > a").on("click", function(e) { e.preventDefault(), t(this).parent().find("div").toggleClass("social-reveal-active"), t(this).toggleClass("share-expanded") }) }),
    function(t) {
        function e() {
            var e = +t(this).attr("length"),
                i = +t(this).val().length,
                n = e >= i;
            t(this).parent().find('span[class="character-counter"]').html(i + "/" + e), o(n, t(this)) }

        function i(e) {
            var i = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
            e.parent().append(i) }

        function n() { t(this).parent().find('span[class="character-counter"]').html("") }

        function o(t, e) {
            var i = e.hasClass("invalid");
            t && i ? e.removeClass("invalid") : t || i || (e.removeClass("valid"), e.addClass("invalid")) }
        t.fn.characterCounter = function() {
            return this.each(function() {
                var o = void 0 !== t(this).attr("length");
                o && (t(this).on("input", e), t(this).on("focus", e), t(this).on("blur", n), i(t(this))) }) }, t(document).ready(function() { t("input, textarea").characterCounter() }) }(jQuery),
    function(t) { t(["jquery"], function(t) {
            return function() {
                function r(t, e, i) {
                    return w({ type: o.error, iconClass: x().iconClasses.error, message: t, optionsOverride: i, title: e }) }

                function l(i, n) {
                    return i || (i = x()), e = t("#" + i.containerId), e.length ? e : (n && (e = g(i)), e) }

                function c(t, e, i) {
                    return w({ type: o.info, iconClass: x().iconClasses.info, message: t, optionsOverride: i, title: e }) }

                function u(t) { i = t }

                function h(t, e, i) {
                    return w({ type: o.success, iconClass: x().iconClasses.success, message: t, optionsOverride: i, title: e }) }

                function d(t, e, i) {
                    return w({ type: o.warning, iconClass: x().iconClasses.warning, message: t, optionsOverride: i, title: e }) }

                function f(t, i) {
                    var n = x();
                    e || l(n), v(t, n, i) || m(n) }

                function p(i) {
                    var n = x();
                    return e || l(n), i && 0 === t(":focus", i).length ? void C(i) : void(e.children().length && e.remove()) }

                function m(i) {
                    for (var n = e.children(), o = n.length - 1; o >= 0; o--) v(t(n[o]), i) }

                function v(e, i, n) {
                    var o = n && n.force ? n.force : !1;
                    return e && (o || 0 === t(":focus", e).length) ? (e[i.hideMethod]({ duration: i.hideDuration, easing: i.hideEasing, complete: function() { C(e) } }), !0) : !1 }

                function g(i) {
                    return e = t("<div/>").attr("id", i.containerId).addClass(i.positionClass).attr("aria-live", "polite").attr("role", "alert"), e.appendTo(t(i.target)), e }

                function y() {
                    return { tapToDismiss: !0, toastClass: "toast", containerId: "toast-container", debug: !1, showMethod: "fadeIn", showDuration: 300, showEasing: "swing", onShown: void 0, hideMethod: "fadeOut", hideDuration: 1e3, hideEasing: "swing", onHidden: void 0, closeMethod: !1, closeDuration: !1, closeEasing: !1, extendedTimeOut: 1e3, iconClasses: { error: "toast-error", info: "toast-info", success: "toast-success", warning: "toast-warning" }, iconClass: "toast-info", positionClass: "toast-top-right", timeOut: 5e3, titleClass: "toast-title", messageClass: "toast-message", escapeHtml: !1, target: "body", closeHtml: '<button type="button">&times;</button>', newestOnTop: !0, preventDuplicates: !1, progressBar: !1 } }

                function b(t) { i && i(t) }

                function w(i) {
                    function v(t) {
                        return null == t && (t = ""), new String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }

                    function g() { k(), P(), T(), A(), E(), S() }

                    function y() { c.hover(F, O), !o.onclick && o.tapToDismiss && c.click(I), o.closeButton && f && f.click(function(t) { t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && t.cancelBubble !== !0 && (t.cancelBubble = !0), I(!0) }), o.onclick && c.click(function(t) { o.onclick(t), I() }) }

                    function w() { c.hide(), c[o.showMethod]({ duration: o.showDuration, easing: o.showEasing, complete: o.onShown }), o.timeOut > 0 && (r = setTimeout(I, o.timeOut), p.maxHideTime = parseFloat(o.timeOut), p.hideEta = (new Date).getTime() + p.maxHideTime, o.progressBar && (p.intervalId = setInterval(L, 10))) }

                    function k() { i.iconClass && c.addClass(o.toastClass).addClass(a) }

                    function S() { o.newestOnTop ? e.prepend(c) : e.append(c) }

                    function P() { i.title && (u.append(o.escapeHtml ? v(i.title) : i.title).addClass(o.titleClass), c.append(u)) }

                    function T() { i.message && (h.append(o.escapeHtml ? v(i.message) : i.message).addClass(o.messageClass), c.append(h)) }

                    function A() { o.closeButton && (f.addClass("toast-close-button").attr("role", "button"), c.prepend(f)) }

                    function E() { o.progressBar && (d.addClass("toast-progress"), c.prepend(d)) }

                    function M(t, e) {
                        if (t.preventDuplicates) {
                            if (e.message === s) return !0;
                            s = e.message }
                        return !1 }

                    function I(e) {
                        var i = e && o.closeMethod !== !1 ? o.closeMethod : o.hideMethod,
                            n = e && o.closeDuration !== !1 ? o.closeDuration : o.hideDuration,
                            a = e && o.closeEasing !== !1 ? o.closeEasing : o.hideEasing;
                        return !t(":focus", c).length || e ? (clearTimeout(p.intervalId), c[i]({ duration: n, easing: a, complete: function() { C(c), o.onHidden && "hidden" !== m.state && o.onHidden(), m.state = "hidden", m.endTime = new Date, b(m) } })) : void 0 }

                    function O() {
                        (o.timeOut > 0 || o.extendedTimeOut > 0) && (r = setTimeout(I, o.extendedTimeOut), p.maxHideTime = parseFloat(o.extendedTimeOut), p.hideEta = (new Date).getTime() + p.maxHideTime) }

                    function F() { clearTimeout(r), p.hideEta = 0, c.stop(!0, !0)[o.showMethod]({ duration: o.showDuration, easing: o.showEasing }) }

                    function L() {
                        var t = (p.hideEta - (new Date).getTime()) / p.maxHideTime * 100;
                        d.width(t + "%") }
                    var o = x(),
                        a = i.iconClass || o.iconClass;
                    if ("undefined" != typeof i.optionsOverride && (o = t.extend(o, i.optionsOverride), a = i.optionsOverride.iconClass || a), !M(o, i)) { n++, e = l(o, !0);
                        var r = null,
                            c = t("<div/>"),
                            u = t("<div/>"),
                            h = t("<div/>"),
                            d = t("<div/>"),
                            f = t(o.closeHtml),
                            p = { intervalId: null, hideEta: null, maxHideTime: null },
                            m = { toastId: n, state: "visible", startTime: new Date, options: o, map: i };
                        return g(), w(), y(), b(m), o.debug && console && console.log(m), c } }

                function x() {
                    return t.extend({}, y(), a.options) }

                function C(t) { e || (e = l()), t.is(":visible") || (t.remove(), t = null, 0 === e.children().length && (e.remove(), s = void 0)) }
                var e, i, s, n = 0,
                    o = { error: "error", info: "info", success: "success", warning: "warning" },
                    a = { clear: f, remove: p, error: r, getContainer: l, info: c, options: {}, subscribe: u, success: h, version: "2.1.2", warning: d };
                return a }() }) }("function" == typeof define && define.amd ? define : function(t, e) { "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery) }), $(".smooth-scroll").on("click", "a", function(t) { t.preventDefault();
        var e = $(this).attr("href");
        $("body,html").animate({ scrollTop: $(e).offset().top }, 700) }),
    function(t) { t.fn.scrollTo = function(e) {
            return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this }, t.fn.dropdown = function(e) {
            var i = { inDuration: 300, outDuration: 225, constrain_width: !0, hover: !1, gutter: 0, belowOrigin: !1 };
            this.each(function() {
                function s() { void 0 !== n.data("induration") && (o.inDuration = n.data("inDuration")), void 0 !== n.data("outduration") && (o.outDuration = n.data("outDuration")), void 0 !== n.data("constrainwidth") && (o.constrain_width = n.data("constrainwidth")), void 0 !== n.data("hover") && (o.hover = n.data("hover")), void 0 !== n.data("gutter") && (o.gutter = n.data("gutter")), void 0 !== n.data("beloworigin") && (o.belowOrigin = n.data("beloworigin")) }

                function r() { s(), a.addClass("active"), o.constrain_width === !0 && a.css("width", n.outerWidth());
                    var e = 0;
                    o.belowOrigin === !0 && (e = n.height());
                    var i = n.offset().left,
                        r = 0,
                        l = o.gutter;
                    i + a.innerWidth() > t(window).width() && (r = n.innerWidth() - a.innerWidth(), l = -1 * l), a.css({ position: "absolute", top: n.position().top + e, left: n.position().left + r + l }), a.stop(!0, !0).css("opacity", 0).slideDown({ queue: !1, duration: o.inDuration, easing: "easeOutCubic", complete: function() { t(this).css("height", "") } }).animate({ opacity: 1 }, { queue: !1, duration: o.inDuration, easing: "easeOutSine" }) }

                function l() { a.fadeOut(o.outDuration), a.removeClass("active") }
                var n = t(this),
                    o = t.extend({}, i, e),
                    a = t("#" + n.attr("data-activates"));
                if (s(), n.after(a), o.hover) {
                    var c = !1;
                    n.unbind("click." + n.attr("id")), n.on("mouseenter", function(t) { c === !1 && (r(), c = !0) }), n.on("mouseleave", function(e) {
                        var i = e.toElement || e.relatedTarget;
                        t(i).closest(".dropdown-content").is(a) || (a.stop(!0, !0), l(), c = !1) }), a.on("mouseleave", function(e) {
                        var i = e.toElement || e.relatedTarget;
                        t(i).closest(".dropdown-button").is(n) || (a.stop(!0, !0), l(), c = !1) }) } else n.unbind("click." + n.attr("id")), n.bind("click." + n.attr("id"), function(e) { n[0] == e.currentTarget && 0 === t(e.target).closest(".dropdown-content").length ? (e.preventDefault(), r()) : n.hasClass("active") && (l(), t(document).unbind("click." + a.attr("id"))), a.hasClass("active") && t(document).bind("click." + a.attr("id"), function(e) {!a.is(e.target) && !n.is(e.target) && !n.find(e.target).length > 0 && (l(), t(document).unbind("click." + a.attr("id"))) }) });
                n.on("open", r), n.on("close", l) }) }, t(document).ready(function() { t(".dropdown-button").dropdown() }) }(jQuery), $(".rotate-btn").on("click", function() {
        var t = $(this).attr("data-card");
        $("#" + t).toggleClass("flipped") }),
    function(t) { t(document).ready(function() { t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(i) {
                var n = t(this);
                e(n) }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(e) {
                var n = t(this);
                i(n) }), t(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(n) {
                var o = t(this),
                    a = o.parent();
                a.hasClass("active") ? i(a) : e(a) }) }), t.fn.extend({ openFAB: function() { e(t(this)) }, closeFAB: function() { i(t(this)) } });
        var e = function(e) {
                if ($this = e, $this.hasClass("active") === !1) {
                    var n, o, i = $this.hasClass("horizontal");
                    i === !0 ? o = 40 : n = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({ scaleY: ".4", scaleX: ".4", translateY: n + "px", translateX: o + "px" }, { duration: 0 });
                    var a = 0;
                    $this.find("ul .btn-floating").reverse().each(function() { t(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: "0" }, { duration: 80, delay: a }), a += 40 }) } },
            i = function(t) { $this = t;
                var i, n, e = $this.hasClass("horizontal");
                e === !0 ? n = 40 : i = 40, $this.removeClass("active");
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({ opacity: "0", scaleX: ".4", scaleY: ".4", translateY: i + "px", translateX: n + "px" }, { duration: 80 }) } }(jQuery),
    function(t) {
        var e = 0,
            i = 0,
            n = function() {
                return i++, "materialize-lean-overlay-" + i };
        t.fn.extend({ openModal: function(i) { t("body").css("overflow", "hidden");
                var o = { opacity: .5, in_duration: 350, out_duration: 250, ready: void 0, complete: void 0, dismissible: !0, starting_top: "4%" },
                    a = n(),
                    s = t(this),
                    r = t('<div class="lean-overlay"></div>'),
                    l = ++e;
                r.attr("id", a).css("z-index", 1e3 + 2 * l), s.data("overlay-id", a).css("z-index", 1e3 + 2 * l + 1), t("body").append(r), i = t.extend(o, i), i.dismissible && (r.click(function() { s.closeModal(i) }), t(document).on("keyup.leanModal" + a, function(t) { 27 === t.keyCode && s.closeModal(i) })), s.find(".modal-close").on("click.close", function(t) { s.closeModal(i) }), r.css({ display: "block", opacity: 0 }), s.css({ display: "block", opacity: 0 }), r.velocity({ opacity: i.opacity }, { duration: i.in_duration, queue: !1, ease: "easeOutCubic" }), s.data("associated-overlay", r[0]), s.hasClass("bottom-sheet") ? s.velocity({ bottom: "0", opacity: 1 }, { duration: i.in_duration, queue: !1, ease: "easeOutCubic", complete: function() { "function" == typeof i.ready && i.ready() } }) : (t.Velocity.hook(s, "scaleX", .7), s.css({ top: i.starting_top }), s.velocity({ top: "10%", opacity: 1, scaleX: "1" }, { duration: i.in_duration, queue: !1, ease: "easeOutCubic", complete: function() { "function" == typeof i.ready && i.ready() } })) } }), t.fn.extend({ closeModal: function(i) {
                var n = { out_duration: 250, complete: void 0 },
                    o = t(this),
                    a = o.data("overlay-id"),
                    s = t("#" + a);
                i = t.extend(n, i), t("body").css("overflow", ""), o.find(".modal-close").off("click.close"), t(document).off("keyup.leanModal" + a), s.velocity({ opacity: 0 }, { duration: i.out_duration, queue: !1, ease: "easeOutQuart" }), o.hasClass("bottom-sheet") ? o.velocity({ bottom: "-100%", opacity: 0 }, { duration: i.out_duration, queue: !1, ease: "easeOutCubic", complete: function() { s.css({ display: "none" }), "function" == typeof i.complete && i.complete(), s.remove(), e-- } }) : o.velocity({ top: i.starting_top, opacity: 0, scaleX: .7 }, { duration: i.out_duration, complete: function() { t(this).css("display", "none"), "function" == typeof i.complete && i.complete(), s.remove(), e-- } }) } }), t.fn.extend({ leanModal: function(e) {
                return this.each(function() {
                    var i = { starting_top: "4%" },
                        n = t.extend(i, e);
                    t(this).click(function(e) { n.starting_top = (t(this).offset().top - t(window).scrollTop()) / 1.15;
                        var i = t(this).attr("href") || "#" + t(this).data("target");
                        t(i).openModal(n), e.preventDefault() }) }) } }) }(jQuery),
    function(t, e, i, n) {
        "use strict";

        function u(t, e, i) {
            return setTimeout(y(t, i), e) }

        function h(t, e, i) {
            return Array.isArray(t) ? (d(t, i[e], i), !0) : !1 }

        function d(t, e, i) {
            var o;
            if (t)
                if (t.forEach) t.forEach(e, i);
                else if (t.length !== n)
                for (o = 0; o < t.length;) e.call(i, t[o], o, t), o++;
            else
                for (o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t) }

        function f(e, i, n) {
            var o = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
            return function() {
                var i = new Error("get-stack-trace"),
                    n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    a = t.console && (t.console.warn || t.console.log);
                return a && a.call(t.console, o, n), e.apply(this, arguments) } }

        function g(t, e, i) {
            var o, n = e.prototype;
            o = t.prototype = Object.create(n), o.constructor = t, o._super = n, i && p(o, i) }

        function y(t, e) {
            return function() {
                return t.apply(e, arguments) } }

        function b(t, e) {
            return typeof t == s ? t.apply(e ? e[0] || n : n, e) : t }

        function w(t, e) {
            return t === n ? e : t }

        function x(t, e, i) { d(P(e), function(e) { t.addEventListener(e, i, !1) }) }

        function C(t, e, i) { d(P(e), function(e) { t.removeEventListener(e, i, !1) }) }

        function k(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode }
            return !1 }

        function S(t, e) {
            return t.indexOf(e) > -1 }

        function P(t) {
            return t.trim().split(/\s+/g) }

        function T(t, e, i) {
            if (t.indexOf && !i) return t.indexOf(e);
            for (var n = 0; n < t.length;) {
                if (i && t[n][i] == e || !i && t[n] === e) return n;
                n++ }
            return -1 }

        function A(t) {
            return Array.prototype.slice.call(t, 0) }

        function E(t, e, i) {
            for (var n = [], o = [], a = 0; a < t.length;) {
                var s = e ? t[a][e] : t[a];
                T(o, s) < 0 && n.push(t[a]), o[a] = s, a++ }
            return i && (n = e ? n.sort(function(t, i) {
                return t[e] > i[e] }) : n.sort()), n }

        function M(t, e) {
            for (var i, a, s = e[0].toUpperCase() + e.slice(1), r = 0; r < o.length;) {
                if (i = o[r], a = i ? i + s : e, a in t) return a;
                r++ }
            return n }

        function O() {
            return I++ }

        function F(e) {
            var i = e.ownerDocument || e;
            return i.defaultView || i.parentWindow || t }

        function it(t, e) {
            var i = this;
            this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) { b(t.options.enable, [t]) && i.handler(e) }, this.init() }

        function nt(t) {
            var e, i = t.options.inputClass;
            return new(e = i ? i : R ? St : z ? Ft : D ? zt : bt)(t, ot) }

        function ot(t, e, i) {
            var n = i.pointers.length,
                o = i.changedPointers.length,
                a = e & B && n - o === 0,
                s = e & ($ | q) && n - o === 0;
            i.isFirst = !!a, i.isFinal = !!s, a && (t.session = {}), i.eventType = e, at(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i }

        function at(t, e) {
            var i = t.session,
                n = e.pointers,
                o = n.length;
            i.firstInput || (i.firstInput = lt(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = lt(e) : 1 === o && (i.firstMultiple = !1);
            var a = i.firstInput,
                s = i.firstMultiple,
                r = s ? s.center : a.center,
                u = e.center = ct(n);
            e.timeStamp = c(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = ft(r, u), e.distance = dt(r, u), st(i, e), e.offsetDirection = ht(e.deltaX, e.deltaY);
            var h = ut(e.deltaTime, e.deltaX, e.deltaY);
            e.overallVelocityX = h.x, e.overallVelocityY = h.y, e.overallVelocity = l(h.x) > l(h.y) ? h.x : h.y, e.scale = s ? mt(s.pointers, n) : 1, e.rotation = s ? pt(s.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, rt(i, e);
            var d = t.element;
            k(e.srcEvent.target, d) && (d = e.srcEvent.target), e.target = d }

        function st(t, e) {
            var i = e.center,
                n = t.offsetDelta || {},
                o = t.prevDelta || {},
                a = t.prevInput || {};
            (e.eventType === B || a.eventType === $) && (o = t.prevDelta = { x: a.deltaX || 0, y: a.deltaY || 0 }, n = t.offsetDelta = { x: i.x, y: i.y }), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y) }

        function rt(t, e) {
            var a, s, r, c, i = t.lastInterval || e,
                o = e.timeStamp - i.timeStamp;
            if (e.eventType != q && (o > N || i.velocity === n)) {
                var u = e.deltaX - i.deltaX,
                    h = e.deltaY - i.deltaY,
                    d = ut(o, u, h);
                s = d.x, r = d.y, a = l(d.x) > l(d.y) ? d.x : d.y, c = ht(u, h), t.lastInterval = e } else a = i.velocity, s = i.velocityX, r = i.velocityY, c = i.direction;
            e.velocity = a, e.velocityX = s, e.velocityY = r, e.direction = c }

        function lt(t) {
            for (var e = [], i = 0; i < t.pointers.length;) e[i] = { clientX: r(t.pointers[i].clientX), clientY: r(t.pointers[i].clientY) }, i++;
            return { timeStamp: c(), pointers: e, center: ct(e), deltaX: t.deltaX, deltaY: t.deltaY } }

        function ct(t) {
            var e = t.length;
            if (1 === e) return { x: r(t[0].clientX), y: r(t[0].clientY) };
            for (var i = 0, n = 0, o = 0; e > o;) i += t[o].clientX, n += t[o].clientY, o++;
            return { x: r(i / e), y: r(n / e) } }

        function ut(t, e, i) {
            return { x: e / t || 0, y: i / t || 0 } }

        function ht(t, e) {
            return t === e ? Y : l(t) >= l(e) ? 0 > t ? X : Q : 0 > e ? Z : G }

        function dt(t, e, i) { i || (i = tt);
            var n = e[i[0]] - t[i[0]],
                o = e[i[1]] - t[i[1]];
            return Math.sqrt(n * n + o * o) }

        function ft(t, e, i) { i || (i = tt);
            var n = e[i[0]] - t[i[0]],
                o = e[i[1]] - t[i[1]];
            return 180 * Math.atan2(o, n) / Math.PI }

        function pt(t, e) {
            return ft(e[1], e[0], et) + ft(t[1], t[0], et)
        }

        function mt(t, e) {
            return dt(e[0], e[1], et) / dt(t[0], t[1], et) }

        function bt() { this.evEl = gt, this.evWin = yt, this.pressed = !1, it.apply(this, arguments) }

        function St() { this.evEl = Ct, this.evWin = kt, it.apply(this, arguments), this.store = this.manager.session.pointerEvents = [] }

        function Et() { this.evTarget = Tt, this.evWin = At, this.started = !1, it.apply(this, arguments) }

        function Mt(t, e) {
            var i = A(t.touches),
                n = A(t.changedTouches);
            return e & ($ | q) && (i = E(i.concat(n), "identifier", !0)), [i, n] }

        function Ft() { this.evTarget = Ot, this.targetIds = {}, it.apply(this, arguments) }

        function Lt(t, e) {
            var i = A(t.touches),
                n = this.targetIds;
            if (e & (B | j) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
            var o, a, s = A(t.changedTouches),
                r = [],
                l = this.target;
            if (a = i.filter(function(t) {
                    return k(t.target, l) }), e === B)
                for (o = 0; o < a.length;) n[a[o].identifier] = !0, o++;
            for (o = 0; o < s.length;) n[s[o].identifier] && r.push(s[o]), e & ($ | q) && delete n[s[o].identifier], o++;
            return r.length ? [E(a.concat(r), "identifier", !0), r] : void 0 }

        function zt() { it.apply(this, arguments);
            var t = y(this.handler, this);
            this.touch = new Ft(this.manager, t), this.mouse = new bt(this.manager, t), this.primaryTouch = null, this.lastTouches = [] }

        function _t(t, e) { t & B ? (this.primaryTouch = e.changedPointers[0].identifier, Vt.call(this, e)) : t & ($ | q) && Vt.call(this, e) }

        function Vt(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var i = { x: e.clientX, y: e.clientY };
                this.lastTouches.push(i);
                var n = this.lastTouches,
                    o = function() {
                        var t = n.indexOf(i);
                        t > -1 && n.splice(t, 1) };
                setTimeout(o, Dt) } }

        function Wt(t) {
            for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                var o = this.lastTouches[n],
                    a = Math.abs(e - o.x),
                    s = Math.abs(i - o.y);
                if (Rt >= a && Rt >= s) return !0 }
            return !1 }

        function Zt(t, e) { this.manager = t, this.set(e) }

        function Gt(t) {
            if (S(t, qt)) return qt;
            var e = S(t, Yt),
                i = S(t, Xt);
            return e && i ? qt : e || i ? e ? Yt : Xt : S(t, $t) ? $t : jt }

        function Ut() {
            if (!Nt) return !1;
            var e = {},
                i = t.CSS && t.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) { e[n] = i ? t.CSS.supports("touch-action", n) : !0 }), e }

        function ae(t) { this.options = p({}, this.defaults, t || {}), this.id = O(), this.manager = null, this.options.enable = w(this.options.enable, !0), this.state = Kt, this.simultaneous = {}, this.requireFail = [] }

        function se(t) {
            return t & ne ? "cancel" : t & ee ? "end" : t & te ? "move" : t & Jt ? "start" : "" }

        function re(t) {
            return t == G ? "down" : t == Z ? "up" : t == X ? "left" : t == Q ? "right" : "" }

        function le(t, e) {
            var i = e.manager;
            return i ? i.get(t) : t }

        function ce() { ae.apply(this, arguments) }

        function ue() { ce.apply(this, arguments), this.pX = null, this.pY = null }

        function he() { ce.apply(this, arguments) }

        function de() { ae.apply(this, arguments), this._timer = null, this._input = null }

        function fe() { ce.apply(this, arguments) }

        function pe() { ce.apply(this, arguments) }

        function me() { ae.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0 }

        function ve(t, e) {
            return e = e || {}, e.recognizers = w(e.recognizers, ve.defaults.preset), new be(t, e) }

        function be(t, e) { this.options = p({}, ve.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = nt(this), this.touchAction = new Zt(this, this.options.touchAction), we(this, !0), d(this.options.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]) }, this) }

        function we(t, e) {
            var i = t.element;
            if (i.style) {
                var n;
                d(t.options.cssProps, function(o, a) { n = M(i.style, a), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = o) : i.style[n] = t.oldCssProps[n] || "" }), e || (t.oldCssProps = {}) } }

        function xe(t, i) {
            var n = e.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n) }
        var p, o = ["", "webkit", "Moz", "MS", "ms", "o"],
            a = e.createElement("div"),
            s = "function",
            r = Math.round,
            l = Math.abs,
            c = Date.now;
        p = "function" != typeof Object.assign ? function(t) {
            if (t === n || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (o !== n && null !== o)
                    for (var a in o) o.hasOwnProperty(a) && (e[a] = o[a]) }
            return e } : Object.assign;
        var m = f(function(t, e, i) {
                for (var o = Object.keys(e), a = 0; a < o.length;)(!i || i && t[o[a]] === n) && (t[o[a]] = e[o[a]]), a++;
                return t }, "extend", "Use `assign`."),
            v = f(function(t, e) {
                return m(t, e, !0) }, "merge", "Use `assign`."),
            I = 1,
            L = /mobile|tablet|ip(ad|hone|od)|android/i,
            D = "ontouchstart" in t,
            R = M(t, "PointerEvent") !== n,
            z = D && L.test(navigator.userAgent),
            _ = "touch",
            V = "pen",
            W = "mouse",
            H = "kinect",
            N = 25,
            B = 1,
            j = 2,
            $ = 4,
            q = 8,
            Y = 1,
            X = 2,
            Q = 4,
            Z = 8,
            G = 16,
            U = X | Q,
            K = Z | G,
            J = U | K,
            tt = ["x", "y"],
            et = ["clientX", "clientY"];
        it.prototype = { handler: function() {}, init: function() { this.evEl && x(this.element, this.evEl, this.domHandler), this.evTarget && x(this.target, this.evTarget, this.domHandler), this.evWin && x(F(this.element), this.evWin, this.domHandler) }, destroy: function() { this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(F(this.element), this.evWin, this.domHandler) } };
        var vt = { mousedown: B, mousemove: j, mouseup: $ },
            gt = "mousedown",
            yt = "mousemove mouseup";
        g(bt, it, { handler: function(t) {
                var e = vt[t.type];
                e & B && 0 === t.button && (this.pressed = !0), e & j && 1 !== t.which && (e = $), this.pressed && (e & $ && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: W, srcEvent: t })) } });
        var wt = { pointerdown: B, pointermove: j, pointerup: $, pointercancel: q, pointerout: q },
            xt = { 2: _, 3: V, 4: W, 5: H },
            Ct = "pointerdown",
            kt = "pointermove pointerup pointercancel";
        t.MSPointerEvent && !t.PointerEvent && (Ct = "MSPointerDown", kt = "MSPointerMove MSPointerUp MSPointerCancel"), g(St, it, { handler: function(t) {
                var e = this.store,
                    i = !1,
                    n = t.type.toLowerCase().replace("ms", ""),
                    o = wt[n],
                    a = xt[t.pointerType] || t.pointerType,
                    s = a == _,
                    r = T(e, t.pointerId, "pointerId");
                o & B && (0 === t.button || s) ? 0 > r && (e.push(t), r = e.length - 1) : o & ($ | q) && (i = !0), 0 > r || (e[r] = t, this.callback(this.manager, o, { pointers: e, changedPointers: [t], pointerType: a, srcEvent: t }), i && e.splice(r, 1)) } });
        var Pt = { touchstart: B, touchmove: j, touchend: $, touchcancel: q },
            Tt = "touchstart",
            At = "touchstart touchmove touchend touchcancel";
        g(Et, it, { handler: function(t) {
                var e = Pt[t.type];
                if (e === B && (this.started = !0), this.started) {
                    var i = Mt.call(this, t, e);
                    e & ($ | q) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: _, srcEvent: t }) } } });
        var It = { touchstart: B, touchmove: j, touchend: $, touchcancel: q },
            Ot = "touchstart touchmove touchend touchcancel";
        g(Ft, it, { handler: function(t) {
                var e = It[t.type],
                    i = Lt.call(this, t, e);
                i && this.callback(this.manager, e, { pointers: i[0], changedPointers: i[1], pointerType: _, srcEvent: t }) } });
        var Dt = 2500,
            Rt = 25;
        g(zt, it, { handler: function(t, e, i) {
                var n = i.pointerType == _,
                    o = i.pointerType == W;
                if (!(o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                    if (n) _t.call(this, e, i);
                    else if (o && Wt.call(this, i)) return;
                    this.callback(t, e, i) } }, destroy: function() { this.touch.destroy(), this.mouse.destroy() } });
        var Ht = M(a.style, "touchAction"),
            Nt = Ht !== n,
            Bt = "compute",
            jt = "auto",
            $t = "manipulation",
            qt = "none",
            Yt = "pan-x",
            Xt = "pan-y",
            Qt = Ut();
        Zt.prototype = { set: function(t) { t == Bt && (t = this.compute()), Nt && this.manager.element.style && Qt[t] && (this.manager.element.style[Ht] = t), this.actions = t.toLowerCase().trim() }, update: function() { this.set(this.manager.options.touchAction) }, compute: function() {
                var t = [];
                return d(this.manager.recognizers, function(e) { b(e.options.enable, [e]) && (t = t.concat(e.getTouchAction())) }), Gt(t.join(" ")) }, preventDefaults: function(t) {
                var e = t.srcEvent,
                    i = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var n = this.actions,
                    o = S(n, qt) && !Qt[qt],
                    a = S(n, Xt) && !Qt[Xt],
                    s = S(n, Yt) && !Qt[Yt];
                if (o) {
                    var r = 1 === t.pointers.length,
                        l = t.distance < 2,
                        c = t.deltaTime < 250;
                    if (r && l && c) return }
                return s && a ? void 0 : o || a && i & U || s && i & K ? this.preventSrc(e) : void 0 }, preventSrc: function(t) { this.manager.session.prevented = !0, t.preventDefault() } };
        var Kt = 1,
            Jt = 2,
            te = 4,
            ee = 8,
            ie = ee,
            ne = 16,
            oe = 32;
        ae.prototype = { defaults: {}, set: function(t) {
                return p(this.options, t), this.manager && this.manager.touchAction.update(), this }, recognizeWith: function(t) {
                if (h(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return t = le(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this }, dropRecognizeWith: function(t) {
                return h(t, "dropRecognizeWith", this) ? this : (t = le(t, this), delete this.simultaneous[t.id], this) }, requireFailure: function(t) {
                if (h(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return t = le(t, this), -1 === T(e, t) && (e.push(t), t.requireFailure(this)), this }, dropRequireFailure: function(t) {
                if (h(t, "dropRequireFailure", this)) return this;
                t = le(t, this);
                var e = T(this.requireFail, t);
                return e > -1 && this.requireFail.splice(e, 1), this }, hasRequireFailures: function() {
                return this.requireFail.length > 0 }, canRecognizeWith: function(t) {
                return !!this.simultaneous[t.id] }, emit: function(t) {
                function n(i) { e.manager.emit(i, t) }
                var e = this,
                    i = this.state;
                ee > i && n(e.options.event + se(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= ee && n(e.options.event + se(i)) }, tryEmit: function(t) {
                return this.canEmit() ? this.emit(t) : void(this.state = oe) }, canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (oe | Kt))) return !1;
                    t++ }
                return !0 }, recognize: function(t) {
                var e = p({}, t);
                return b(this.options.enable, [this, e]) ? (this.state & (ie | ne | oe) && (this.state = Kt), this.state = this.process(e), void(this.state & (Jt | te | ee | ne) && this.tryEmit(e))) : (this.reset(), void(this.state = oe)) }, process: function(t) {}, getTouchAction: function() {}, reset: function() {} }, g(ce, ae, { defaults: { pointers: 1 }, attrTest: function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e }, process: function(t) {
                var e = this.state,
                    i = t.eventType,
                    n = e & (Jt | te),
                    o = this.attrTest(t);
                return n && (i & q || !o) ? e | ne : n || o ? i & $ ? e | ee : e & Jt ? e | te : Jt : oe } }), g(ue, ce, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: J }, getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & U && e.push(Xt), t & K && e.push(Yt), e }, directionTest: function(t) {
                var e = this.options,
                    i = !0,
                    n = t.distance,
                    o = t.direction,
                    a = t.deltaX,
                    s = t.deltaY;
                return o & e.direction || (e.direction & U ? (o = 0 === a ? Y : 0 > a ? X : Q, i = a != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === s ? Y : 0 > s ? Z : G, i = s != this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction }, attrTest: function(t) {
                return ce.prototype.attrTest.call(this, t) && (this.state & Jt || !(this.state & Jt) && this.directionTest(t)) }, emit: function(t) { this.pX = t.deltaX, this.pY = t.deltaY;
                var e = re(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t) } }), g(he, ce, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function() {
                return [qt] }, attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Jt) }, emit: function(t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e }
                this._super.emit.call(this, t) } }), g(de, ae, { defaults: { event: "press", pointers: 1, time: 251, threshold: 9 }, getTouchAction: function() {
                return [jt] }, process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    o = t.deltaTime > e.time;
                if (this._input = t, !n || !i || t.eventType & ($ | q) && !o) this.reset();
                else if (t.eventType & B) this.reset(), this._timer = u(function() { this.state = ie, this.tryEmit() }, e.time, this);
                else if (t.eventType & $) return ie;
                return oe }, reset: function() { clearTimeout(this._timer) }, emit: function(t) { this.state === ie && (t && t.eventType & $ ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = c(), this.manager.emit(this.options.event, this._input))) } }), g(fe, ce, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function() {
                return [qt] }, attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Jt) } }), g(pe, ce, { defaults: { event: "swipe", threshold: 10, velocity: .3, direction: U | K, pointers: 1 }, getTouchAction: function() {
                return ue.prototype.getTouchAction.call(this) }, attrTest: function(t) {
                var i, e = this.options.direction;
                return e & (U | K) ? i = t.overallVelocity : e & U ? i = t.overallVelocityX : e & K && (i = t.overallVelocityY), this._super.attrTest.call(this, t) && e & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && l(i) > this.options.velocity && t.eventType & $ }, emit: function(t) {
                var e = re(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t) } }), g(me, ae, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 }, getTouchAction: function() {
                return [$t] }, process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    n = t.distance < e.threshold,
                    o = t.deltaTime < e.time;
                if (this.reset(), t.eventType & B && 0 === this.count) return this.failTimeout();
                if (n && o && i) {
                    if (t.eventType != $) return this.failTimeout();
                    var a = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
                        s = !this.pCenter || dt(this.pCenter, t.center) < e.posThreshold;
                    this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, this._input = t;
                    var r = this.count % e.taps;
                    if (0 === r) return this.hasRequireFailures() ? (this._timer = u(function() { this.state = ie, this.tryEmit() }, e.interval, this), Jt) : ie }
                return oe }, failTimeout: function() {
                return this._timer = u(function() { this.state = oe }, this.options.interval, this), oe }, reset: function() { clearTimeout(this._timer) }, emit: function() { this.state == ie && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input)) } }), ve.VERSION = "2.0.7", ve.defaults = { domEvents: !1, touchAction: Bt, enable: !0, inputTarget: null, inputClass: null, preset: [
                [fe, { enable: !1 }],
                [he, { enable: !1 },
                    ["rotate"]
                ],
                [pe, { direction: U }],
                [ue, { direction: U },
                    ["swipe"]
                ],
                [me],
                [me, { event: "doubletap", taps: 2 },
                    ["tap"]
                ],
                [de]
            ], cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };
        var ge = 1,
            ye = 2;
        be.prototype = { set: function(t) {
                return p(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this }, stop: function(t) { this.session.stopped = t ? ye : ge }, recognize: function(t) {
                var e = this.session;
                if (!e.stopped) { this.touchAction.preventDefaults(t);
                    var i, n = this.recognizers,
                        o = e.curRecognizer;
                    (!o || o && o.state & ie) && (o = e.curRecognizer = null);
                    for (var a = 0; a < n.length;) i = n[a], e.stopped === ye || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && i.state & (Jt | te | ee) && (o = e.curRecognizer = i), a++ } }, get: function(t) {
                if (t instanceof ae) return t;
                for (var e = this.recognizers, i = 0; i < e.length; i++)
                    if (e[i].options.event == t) return e[i];
                return null }, add: function(t) {
                if (h(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t }, remove: function(t) {
                if (h(t, "remove", this)) return this;
                if (t = this.get(t)) {
                    var e = this.recognizers,
                        i = T(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update()) }
                return this }, on: function(t, e) {
                if (t !== n && e !== n) {
                    var i = this.handlers;
                    return d(P(t), function(t) { i[t] = i[t] || [], i[t].push(e) }), this } }, off: function(t, e) {
                if (t !== n) {
                    var i = this.handlers;
                    return d(P(t), function(t) { e ? i[t] && i[t].splice(T(i[t], e), 1) : delete i[t] }), this } }, emit: function(t, e) { this.options.domEvents && xe(t, e);
                var i = this.handlers[t] && this.handlers[t].slice();
                if (i && i.length) { e.type = t, e.preventDefault = function() { e.srcEvent.preventDefault() };
                    for (var n = 0; n < i.length;) i[n](e), n++ } }, destroy: function() { this.element && we(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null } }, p(ve, { INPUT_START: B, INPUT_MOVE: j, INPUT_END: $, INPUT_CANCEL: q, STATE_POSSIBLE: Kt, STATE_BEGAN: Jt, STATE_CHANGED: te, STATE_ENDED: ee, STATE_RECOGNIZED: ie, STATE_CANCELLED: ne, STATE_FAILED: oe, DIRECTION_NONE: Y, DIRECTION_LEFT: X, DIRECTION_RIGHT: Q, DIRECTION_UP: Z, DIRECTION_DOWN: G, DIRECTION_HORIZONTAL: U, DIRECTION_VERTICAL: K, DIRECTION_ALL: J, Manager: be, Input: it, TouchAction: Zt, TouchInput: Ft, MouseInput: bt, PointerEventInput: St, TouchMouseInput: zt, SingleTouchInput: Et, Recognizer: ae, AttrRecognizer: ce, Tap: me, Pan: ue, Swipe: pe, Pinch: he, Rotate: fe, Press: de, on: x, off: C, each: d, merge: v, extend: m, assign: p, inherit: g, bindFn: y, prefixed: M });
        var Ce = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
        Ce.Hammer = ve, "function" == typeof define && define.amd ? define(function() {
            return ve }) : "undefined" != typeof module && module.exports ? module.exports = ve : t[i] = ve
    }(window, document, "Hammer"),
    function(t) { "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer) }(function(t, e) {
        function i(i, n) {
            var o = t(i);
            o.data("hammer") || o.data("hammer", new e(o[0], n)) }
        t.fn.hammer = function(t) {
            return this.each(function() { i(this, t) }) }, e.Manager.prototype.emit = function(e) {
            return function(i, n) { e.call(this, i, n), t(this.element).trigger({ type: i, gesture: n }) } }(e.Manager.prototype.emit) }),
    function(t) {
        var e = { init: function(e) {
                var i = { menuWidth: 240, edge: "left", closeOnClick: !1 };
                e = t.extend(i, e), t(this).each(function() {
                    function a(i) { s = !1, r = !1, t("body").css("overflow", ""), t("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function() { t(this).remove() } }), "left" === e.edge ? (o.css({ width: "", right: "", left: "0" }), n.velocity({ left: -1 * (e.menuWidth + 10) }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function() { i === !0 && (n.removeAttr("style"), n.css("width", e.menuWidth)) } })) : (o.css({ width: "", right: "0", left: "" }), n.velocity({ right: -1 * (e.menuWidth + 10) }, { duration: 200, queue: !1, easing: "easeOutCubic", complete: function() { i === !0 && (n.removeAttr("style"), n.css("width", e.menuWidth)) } })) }
                    var i = t(this),
                        n = t("#" + i.attr("data-activates"));
                    240 != e.menuWidth && n.css("width", e.menuWidth);
                    var o = t('<div class="drag-target"></div>');
                    t("body").append(o), "left" == e.edge ? (n.css("left", -1 * (e.menuWidth + 10)), o.css({ left: 0 })) : (n.addClass("right-aligned").css("right", -1 * (e.menuWidth + 10)).css("left", ""), o.css({ right: 0 })), n.hasClass("fixed") && window.innerWidth > 992 && n.css("left", 0), n.hasClass("fixed") && t(window).resize(function() { window.innerWidth > 992 ? 0 !== t("#sidenav-overlay").css("opacity") && r ? a(!0) : (n.removeAttr("style"), n.css("width", e.menuWidth)) : r === !1 && ("left" === e.edge ? n.css("left", -1 * (e.menuWidth + 10)) : n.css("right", -1 * (e.menuWidth + 10))) }), e.closeOnClick === !0 && n.on("click.itemclick", "a:not(.collapsible-header)", function() { a() });
                    var s = !1,
                        r = !1;
                    o.on("click", function() { a() }), o.hammer({ prevent_default: !1 }).bind("pan", function(i) {
                        if ("touch" == i.gesture.pointerType) {
                            var s = (i.gesture.direction, i.gesture.center.x);
                            i.gesture.center.y, i.gesture.velocityX;
                            if (t("body").css("overflow", "hidden"), 0 === t("#sidenav-overlay").length) {
                                var u = t('<div id="sidenav-overlay"></div>');
                                u.css("opacity", 0).click(function() { a() }), t("body").append(u) }
                            if ("left" === e.edge && (s > e.menuWidth ? s = e.menuWidth : 0 > s && (s = 0)), "left" === e.edge) s < e.menuWidth / 2 ? r = !1 : s >= e.menuWidth / 2 && (r = !0), n.css("left", s - e.menuWidth);
                            else { s < window.innerWidth - e.menuWidth / 2 ? r = !0 : s >= window.innerWidth - e.menuWidth / 2 && (r = !1);
                                var h = -1 * (s - e.menuWidth / 2);
                                h > 0 && (h = 0), n.css("right", h) }
                            var d; "left" === e.edge ? (d = s / e.menuWidth, t("#sidenav-overlay").velocity({ opacity: d }, { duration: 50, queue: !1, easing: "easeOutQuad" })) : (d = Math.abs((s - window.innerWidth) / e.menuWidth), t("#sidenav-overlay").velocity({ opacity: d }, { duration: 50, queue: !1, easing: "easeOutQuad" })) } }).bind("panend", function(i) {
                        if ("touch" == i.gesture.pointerType) {
                            var a = i.gesture.velocityX;
                            s = !1, "left" === e.edge ? r && .3 >= a || -.5 > a ? (n.velocity({ left: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad" }), t("#sidenav-overlay").velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), o.css({ width: "50%", right: 0, left: "" })) : (!r || a > .3) && (t("body").css("overflow", ""), n.velocity({ left: -1 * (e.menuWidth + 10) }, { duration: 200, queue: !1, easing: "easeOutQuad" }), t("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function() { t(this).remove() } }), o.css({ width: "10px", right: "", left: 0 })) : r && a >= -.3 || a > .5 ? (n.velocity({ right: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad" }), t("#sidenav-overlay").velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), o.css({ width: "50%", right: "", left: 0 })) : (!r || -.3 > a) && (t("body").css("overflow", ""), n.velocity({ right: -1 * (e.menuWidth + 10) }, { duration: 200, queue: !1, easing: "easeOutQuad" }), t("#sidenav-overlay").velocity({ opacity: 0 }, { duration: 200, queue: !1, easing: "easeOutQuad", complete: function() { t(this).remove() } }), o.css({ width: "10px", right: 0, left: "" })) } }), i.click(function() {
                        if (r === !0) r = !1, s = !1, a();
                        else { t("body").css("overflow", "hidden"), t("body").append(o), "left" === e.edge ? (o.css({ width: "50%", right: 0, left: "" }), n.velocity({ left: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad" })) : (o.css({ width: "50%", right: "", left: 0 }), n.velocity({ right: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad" }), n.css("left", ""));
                            var i = t('<div id="sidenav-overlay"></div>');
                            i.css("opacity", 0).click(function() { r = !1, s = !1, a(), i.velocity({ opacity: 0 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function() { t(this).remove() } }) }), t("body").append(i), i.velocity({ opacity: 1 }, { duration: 300, queue: !1, easing: "easeOutQuad", complete: function() { r = !0, s = !1 } }) }
                        return !1 }) }) }, show: function() { this.trigger("click") }, hide: function() { t("#sidenav-overlay").trigger("click") } };
        t.fn.sideNav = function(i) {
            return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments) } }(jQuery),
    function(t) { t.fn.collapsible = function(e) {
            var i = { accordion: void 0 };
            return e = t.extend(i, e), this.each(function() {
                function a(e) { n = i.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function() { t(this).css("height", "") } }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function() { t(this).css("height", "") } }), n.not(e).removeClass("active").parent().removeClass("active"), n.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function() { t(this).css("height", "") } }) }

                function s(e) { e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function() { t(this).css("height", "") } }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({ duration: 350, easing: "easeOutQuart", queue: !1, complete: function() { t(this).css("height", "") } }) }

                function r(t) {
                    var e = l(t);
                    return e.length > 0 }

                function l(t) {
                    return t.closest("li > .collapsible-header") }
                var i = t(this),
                    n = t(this).find("> li > .collapsible-header"),
                    o = i.data("collapsible");
                i.off("click.collapse", ".collapsible-header"), n.off("click.collapse"), e.accordion || "accordion" === o || void 0 === o ? (n = i.find("> li > .collapsible-header"), n.on("click.collapse", function(e) {
                    var i = t(e.target);
                    r(i) && (i = l(i)), i.toggleClass("active"), a(i) }), a(n.filter(".active").first())) : n.each(function() { t(this).on("click.collapse", function(e) {
                        var i = t(e.target);
                        r(i) && (i = l(i)), i.toggleClass("active"), s(i) }), t(this).hasClass("active") && s(t(this)) }) }) }, t(document).ready(function() { t(".collapsible").collapsible() }) }(jQuery),
    function(t, e) { "function" == typeof define && define.amd ? define(["jquery"], function(t) {
            return e(t) }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery) }(this, function(t) {
        var e = function(t, e) {
                var i, n = document.createElement("canvas");
                t.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
                var o = n.getContext("2d");
                n.width = n.height = e.size;
                var a = 1;
                window.devicePixelRatio > 1 && (a = window.devicePixelRatio, n.style.width = n.style.height = [e.size, "px"].join(""), n.width = n.height = e.size * a, o.scale(a, a)), o.translate(e.size / 2, e.size / 2), o.rotate((-0.5 + e.rotate / 180) * Math.PI);
                var s = (e.size - e.lineWidth) / 2;
                e.scaleColor && e.scaleLength && (s -= e.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date };
                var r = function(t, e, i) { i = Math.min(Math.max(-1, i || 0), 1);
                        var n = 0 >= i ? !0 : !1;
                        o.beginPath(), o.arc(0, 0, s, 0, 2 * Math.PI * i, n), o.strokeStyle = t, o.lineWidth = e, o.stroke() },
                    l = function() {
                        var t, i;
                        o.lineWidth = 1, o.fillStyle = e.scaleColor, o.save();
                        for (var n = 24; n > 0; --n) n % 6 === 0 ? (i = e.scaleLength, t = 0) : (i = .6 * e.scaleLength, t = e.scaleLength - i), o.fillRect(-e.size / 2 + t, 0, i, 1), o.rotate(Math.PI / 12);
                        o.restore() },
                    c = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) { window.setTimeout(t, 1e3 / 60) } }(),
                    u = function() { e.scaleColor && l(), e.trackColor && r(e.trackColor, e.trackWidth || e.lineWidth, 1) };
                this.getCanvas = function() {
                    return n }, this.getCtx = function() {
                    return o }, this.clear = function() { o.clearRect(e.size / -2, e.size / -2, e.size, e.size) }, this.draw = function(t) { e.scaleColor || e.trackColor ? o.getImageData && o.putImageData ? i ? o.putImageData(i, 0, 0) : (u(), i = o.getImageData(0, 0, e.size * a, e.size * a)) : (this.clear(), u()) : this.clear(), o.lineCap = e.lineCap;
                    var n;
                    n = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, r(n, e.lineWidth, t / 100) }.bind(this), this.animate = function(t, i) {
                    var n = Date.now();
                    e.onStart(t, i);
                    var o = function() {
                        var a = Math.min(Date.now() - n, e.animate.duration),
                            s = e.easing(this, a, t, i - t, e.animate.duration);
                        this.draw(s), e.onStep(t, i, s), a >= e.animate.duration ? e.onStop(t, i) : c(o) }.bind(this);
                    c(o) }.bind(this) },
            i = function(t, i) {
                var n = { barColor: "#ef1e25", trackColor: "#f9f9f9", scaleColor: "#dfe0e0", scaleLength: 5, lineCap: "round", lineWidth: 3, trackWidth: void 0, size: 110, rotate: 0, animate: { duration: 1e3, enabled: !0 }, easing: function(t, e, i, n, o) {
                        return e /= o / 2, 1 > e ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i }, onStart: function(t, e) {}, onStep: function(t, e, i) {}, onStop: function(t, e) {} };
                if ("undefined" != typeof e) n.renderer = e;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    n.renderer = SVGRenderer }
                var o = {},
                    a = 0,
                    s = function() { this.el = t, this.options = o;
                        for (var e in n) n.hasOwnProperty(e) && (o[e] = i && "undefined" != typeof i[e] ? i[e] : n[e], "function" == typeof o[e] && (o[e] = o[e].bind(this))); "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = n.easing, "number" == typeof o.animate && (o.animate = { duration: o.animate, enabled: !0 }), "boolean" != typeof o.animate || o.animate || (o.animate = { duration: 1e3, enabled: o.animate }), this.renderer = new o.renderer(t, o), this.renderer.draw(a), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent"))) }.bind(this);
                this.update = function(t) {
                    return t = parseFloat(t), o.animate.enabled ? this.renderer.animate(a, t) : this.renderer.draw(t), a = t, this }.bind(this), this.disableAnimation = function() {
                    return o.animate.enabled = !1, this }, this.enableAnimation = function() {
                    return o.animate.enabled = !0, this }, s() };
        t.fn.easyPieChart = function(e) {
            return this.each(function() {
                var n;
                t.data(this, "easyPieChart") || (n = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new i(this, n))) }) } }), $(function() {
        var t = !0;
        $("#accordion").on("show.bs.collapse", function() { t && $("#accordion .in").collapse("hide") }) }),
    function(t) {
        t(document).ready(function() {
            function o(e) {
                var n = e.css("font-family"),
                    o = e.css("font-size");
                o && i.css("font-size", o), n && i.css("font-family", n), "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(e.val() + "\n");
                var a = i.html().replace(/\n/g, "<br>");
                i.html(a), e.is(":visible") ? i.css("width", e.width()) : i.css("width", t(window).width() / 2), e.css("height", i.height()) }
            Materialize.updateTextFields = function() {
                var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                t(e).each(function(e, i) { t(i).val().length > 0 || i.autofocus || void 0 !== t(this).attr("placeholder") || t(i)[0].validity.badInput === !0 ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active") }) };
            var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            t(document).on("change", e, function() {
                (0 !== t(this).val().length || void 0 !== t(this).attr("placeholder")) && t(this).siblings("label").addClass("active"), validate_field(t(this)) }), t(document).ready(function() { Materialize.updateTextFields() }), t(document).on("reset", function(i) {
                var n = t(i.target);
                n.is("form") && (n.find(e).removeClass("valid").removeClass("invalid"), n.find(e).each(function() { "" === t(this).attr("value") && t(this).siblings("label, i").removeClass("active") }), n.find("select.initialized").each(function() {
                    var t = n.find("option[selected]").text();
                    n.siblings("input.select-dropdown").val(t) })) }), t(document).on("focus", e, function() { t(this).siblings("label, i").addClass("active") }), t(document).on("blur", e, function() {
                var e = t(this);
                0 === e.val().length && e[0].validity.badInput !== !0 && void 0 === e.attr("placeholder") && e.siblings("label, i").removeClass("active"), 0 === e.val().length && e[0].validity.badInput !== !0 && void 0 !== e.attr("placeholder") && e.siblings("i").removeClass("active"), validate_field(e) }), window.validate_field = function(t) {
                var e = void 0 !== t.attr("length"),
                    i = parseInt(t.attr("length")),
                    n = t.val().length;
                0 === t.val().length && t[0].validity.badInput === !1 ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && i >= n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid"))) };
            var i = t(".hiddendiv").first();
            i.length || (i = t('<div class="hiddendiv common"></div>'), t("body").append(i));
            var n = ".materialize-textarea";
            t(n).each(function() {
                var e = t(this);
                e.val().length && o(e) }), t("body").on("keyup keydown autoresize", n, function() { o(t(this)) }), t(document).on("change", '.file-field input[type="file"]', function() {
                for (var e = t(this).closest(".file-field"), i = e.find("input.file-path"), n = t(this)[0].files, o = [], a = 0; a < n.length; a++) o.push(n[a].name);
                i.val(o.join(", ")), i.trigger("change") });
            var r, a = "input[type=range]",
                s = !1;
            t(a).each(function() {
                var e = t('<span class="thumb"><span class="value"></span></span>');
                t(this).after(e) });
            var l = ".range-field";
            t(document).on("change", a, function(e) {
                var i = t(this).siblings(".thumb");
                i.find(".value").html(t(this).val()) }), t(document).on("input mousedown touchstart", a, function(e) {
                var i = t(this).siblings(".thumb"),
                    n = t(this).outerWidth();
                i.length <= 0 && (i = t('<span class="thumb"><span class="value"></span></span>'), t(this).after(i)), i.find(".value").html(t(this).val()), s = !0, t(this).addClass("active"), i.hasClass("active") || i.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px" }, { duration: 300, easing: "easeOutExpo" }), "input" !== e.type && (r = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left, 0 > r ? r = 0 : r > n && (r = n), i.addClass("active").css("left", r)), i.find(".value").html(t(this).val()) }), t(document).on("mouseup touchend", l, function() { s = !1, t(this).removeClass("active") }), t(document).on("mousemove touchmove", l, function(e) {
                var n, i = t(this).children(".thumb");
                if (s) { i.hasClass("active") || i.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px" }, { duration: 300, easing: "easeOutExpo" }), n = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
                    var o = t(this).outerWidth();
                    0 > n ? n = 0 : n > o && (n = o), i.addClass("active").css("left", n), i.find(".value").html(i.siblings(a).val()) } }), t(document).on("mouseout touchleave", l, function() {
                if (!s) {
                    var e = t(this).children(".thumb");
                    e.hasClass("active") && e.velocity({ height: "0", width: "0", top: "10px", marginLeft: "-6px" }, { duration: 100 }), e.removeClass("active") } }) }), t.fn.material_select = function(e) {
            function i(t, e, i) {
                var o = t.indexOf(e),
                    a = -1 === o;
                return a ? t.push(e) : t.splice(o, 1), i.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"), i.find("option").eq(e).prop("selected", a), n(t, i), a }

            function n(t, e) {
                for (var i = "", n = 0, o = t.length; o > n; n++) {
                    var a = e.find("option").eq(t[n]).text();
                    i += 0 === n ? a : ", " + a } "" === i && (i = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(i) }
            t(this).each(function() {
                var n = t(this);
                if (!n.hasClass("browser-default")) {
                    var o = n.attr("multiple") ? !0 : !1,
                        a = n.data("select-id");
                    if (a && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), t("ul#select-options-" + a).remove()), "destroy" === e) return void n.data("select-id", null).removeClass("initialized");
                    var s = Materialize.guid();
                    n.data("select-id", s);
                    var r = t('<div class="select-wrapper"></div>');
                    r.addClass(n.attr("class"));
                    var l = t('<ul id="select-options-' + s + '" class="dropdown-content select-dropdown ' + (o ? "multiple-select-dropdown" : "") + '"></ul>'),
                        c = n.children("option, optgroup"),
                        u = [],
                        h = !1,
                        d = n.find("option:selected").html() || n.find("option:first").html() || "",
                        f = function(e, i, n) {
                            var o = i.is(":disabled") ? "disabled " : "",
                                a = i.data("icon"),
                                s = i.attr("class");
                            if (a) {
                                var r = "";
                                return s && (r = ' class="' + s + '"'), "multiple" === n ? l.append(t('<li class="' + o + '"><img src="' + a + '"' + r + '><span><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : l.append(t('<li class="' + o + '"><img src="' + a + '"' + r + "><span>" + i.html() + "</span></li>")), !0 } "multiple" === n ? l.append(t('<li class="' + o + '"><span><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : l.append(t('<li class="' + o + '"><span>' + i.html() + "</span></li>")) };
                    c.length && c.each(function() {
                        if (t(this).is("option")) o ? f(n, t(this), "multiple") : f(n, t(this));
                        else if (t(this).is("optgroup")) {
                            var e = t(this).children("option");
                            l.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")), e.each(function() { f(n, t(this)) }) } }), l.find("li:not(.optgroup)").each(function(a) { t(this).click(function(s) {
                            if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                                var r = !0;
                                o ? (t('input[type="checkbox"]', this).prop("checked", function(t, e) {
                                    return !e }), r = i(u, t(this).index(), n), v.trigger("focus")) : (l.find("li").removeClass("active"), t(this).toggleClass("active"), v.val(t(this).text())), activateOption(l, t(this)), n.find("option").eq(a).prop("selected", r), n.trigger("change"), "undefined" != typeof e && e() }
                            s.stopPropagation() }) }), n.wrap(r);
                    var p = t('<span class="caret">&#9660;</span>');
                    n.is(":disabled") && p.addClass("disabled");
                    var m = d.replace(/"/g, "&quot;"),
                        v = t('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + s + '" value="' + m + '"/>');
                    n.before(v), v.before(p), v.after(l), n.is(":disabled") || v.dropdown({ hover: !1, closeOnClick: !1 }), n.attr("tabindex") && t(v[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), v.on({ focus: function() {
                            if (t("ul.select-dropdown").not(l[0]).is(":visible") && t("input.select-dropdown").trigger("close"), !l.is(":visible")) { t(this).trigger("open", ["focus"]);
                                var e = t(this).val(),
                                    i = l.find("li").filter(function() {
                                        return t(this).text().toLowerCase() === e.toLowerCase() })[0];
                                activateOption(l, i) } }, click: function(t) { t.stopPropagation() } }), v.on("blur", function() { o || t(this).trigger("close"), l.find("li.selected").removeClass("selected") }), l.hover(function() { h = !0 }, function() { h = !1 }), t(window).on({ click: function() { o && (h || v.trigger("close")) } }), o && n.find("option:selected:not(:disabled)").each(function() {
                        var e = t(this).index();
                        i(u, e, n), l.find("li").eq(e).find(":checkbox").prop("checked", !0) }), activateOption = function(e, i) {
                        if (i) { e.find("li.selected").removeClass("selected");
                            var n = t(i);
                            n.addClass("selected"), l.scrollTo(n) } };
                    var g = [],
                        y = function(e) {
                            if (9 == e.which) return void v.trigger("close");
                            if (40 == e.which && !l.is(":visible")) return void v.trigger("open");
                            if (13 != e.which || l.is(":visible")) { e.preventDefault();
                                var i = String.fromCharCode(e.which).toLowerCase(),
                                    n = [9, 13, 27, 38, 40];
                                if (i && -1 === n.indexOf(e.which)) { g.push(i);
                                    var a = g.join(""),
                                        s = l.find("li").filter(function() {
                                            return 0 === t(this).text().toLowerCase().indexOf(a) })[0];
                                    s && activateOption(l, s) }
                                if (13 == e.which) {
                                    var r = l.find("li.selected:not(.disabled)")[0];
                                    r && (t(r).trigger("click"), o || v.trigger("close")) }
                                40 == e.which && (s = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], activateOption(l, s)), 27 == e.which && v.trigger("close"), 38 == e.which && (s = l.find("li.selected").prev("li:not(.disabled)")[0], s && activateOption(l, s)), setTimeout(function() { g = [] }, 1e3) } };
                    v.on("keydown", y)
                }
            })
        }
    }(jQuery),
    function(t) { "function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : this.Picker = t(jQuery) }(function(t) {
        function a(e, c, u, d) {
            function w() {
                return a._.node("div", a._.node("div", a._.node("div", a._.node("div", b.component.nodes(p.open), v.box), v.wrap), v.frame), v.holder, 'tabindex="-1"') }

            function x() { g.data(c, b).addClass(v.input).val(g.data("value") ? b.get("select", m.format) : e.value), m.editable || g.on("focus." + p.id + " click." + p.id, function(t) { t.preventDefault(), b.open() }).on("keydown." + p.id, A), l(e, { haspopup: !0, expanded: !1, readonly: !1, owns: e.id + "_root" }) }

            function C() { l(b.$root[0], "hidden", !0) }

            function k() { b.$holder.on({ keydown: A, "focus.toOpen": T, blur: function() { g.removeClass(v.target) }, focusin: function(t) { b.$root.removeClass(v.focused), t.stopPropagation() }, "mousedown click": function(e) {
                        var i = e.target;
                        i != b.$holder[0] && (e.stopPropagation(), "mousedown" != e.type || t(i).is("input, select, textarea, button, option") || (e.preventDefault(), b.$holder[0].focus())) } }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var e = t(this),
                        i = e.data(),
                        n = e.hasClass(v.navDisabled) || e.hasClass(v.disabled),
                        o = h();
                    o = o && (o.type || o.href), (n || o && !t.contains(b.$root[0], o)) && b.$holder[0].focus(), !n && i.nav ? b.set("highlight", b.component.item.highlight, { nav: i.nav }) : !n && "pick" in i ? (b.set("select", i.pick), m.closeOnSelect && b.close(!0)) : i.clear ? (b.clear(), m.closeOnClear && b.close(!0)) : i.close && b.close(!0) }) }

            function S() {
                var i;
                m.hiddenName === !0 ? (i = e.name, e.name = "") : (i = ["string" == typeof m.hiddenPrefix ? m.hiddenPrefix : "", "string" == typeof m.hiddenSuffix ? m.hiddenSuffix : "_submit"], i = i[0] + e.name + i[1]), b._hidden = t('<input type=hidden name="' + i + '"' + (g.data("value") || e.value ? ' value="' + b.get("select", m.formatSubmit) + '"' : "") + ">")[0], g.on("change." + p.id, function() { b._hidden.value = e.value ? b.get("select", m.formatSubmit) : "" }) }

            function P() { f && o ? b.$holder.find("." + v.frame).one("transitionend", function() { b.$holder[0].focus() }) : b.$holder[0].focus() }

            function T(t) { t.stopPropagation(), g.addClass(v.target), b.$root.addClass(v.focused), b.open() }

            function A(t) {
                var e = t.keyCode,
                    i = /^(8|46)$/.test(e);
                return 27 == e ? (b.close(!0), !1) : void((32 == e || i || !p.open && b.component.key[e]) && (t.preventDefault(), t.stopPropagation(), i ? b.clear().close() : b.open())) }
            if (!e) return a;
            var f = !1,
                p = { id: e.id || "P" + Math.abs(~~(Math.random() * new Date)) },
                m = u ? t.extend(!0, {}, u.defaults, d) : d || {},
                v = t.extend({}, a.klasses(), m.klass),
                g = t(e),
                y = function() {
                    return this.start() },
                b = y.prototype = { constructor: y, $node: g, start: function() {
                        return p && p.start ? b : (p.methods = {}, p.start = !0, p.open = !1, p.type = e.type, e.autofocus = e == h(), e.readOnly = !m.editable, e.id = e.id || p.id, "text" != e.type && (e.type = "text"), b.component = new u(b, m), b.$root = t('<div class="' + v.picker + '" id="' + e.id + '_root" />'), C(), b.$holder = t(w()).appendTo(b.$root), k(), m.formatSubmit && S(), x(), m.containerHidden ? t(m.containerHidden).append(b._hidden) : g.after(b._hidden), m.container ? t(m.container).append(b.$root) : g.after(b.$root), b.on({ start: b.component.onStart, render: b.component.onRender, stop: b.component.onStop, open: b.component.onOpen, close: b.component.onClose, set: b.component.onSet }).on({ start: m.onStart, render: m.onRender, stop: m.onStop, open: m.onOpen, close: m.onClose, set: m.onSet }), f = s(b.$holder[0]), e.autofocus && b.open(), b.trigger("start").trigger("render")) }, render: function(e) {
                        return e ? (b.$holder = t(w()), k(), b.$root.html(b.$holder)) : b.$root.find("." + v.box).html(b.component.nodes(p.open)), b.trigger("render") }, stop: function() {
                        return p.start ? (b.close(), b._hidden && b._hidden.parentNode.removeChild(b._hidden), b.$root.remove(), g.removeClass(v.input).removeData(c), setTimeout(function() { g.off("." + p.id) }, 0), e.type = p.type, e.readOnly = !1, b.trigger("stop"), p.methods = {}, p.start = !1, b) : b }, open: function(o) {
                        return p.open ? b : (g.addClass(v.active), l(e, "expanded", !0), setTimeout(function() { b.$root.addClass(v.opened), l(b.$root[0], "hidden", !1) }, 0), o !== !1 && (p.open = !0, f && n.css("overflow", "hidden").css("padding-right", "+=" + r()), P(), i.on("click." + p.id + " focusin." + p.id, function(t) {
                            var i = t.target;
                            i != e && i != document && 3 != t.which && b.close(i === b.$holder[0]) }).on("keydown." + p.id, function(e) {
                            var i = e.keyCode,
                                n = b.component.key[i],
                                o = e.target;
                            27 == i ? b.close(!0) : o != b.$holder[0] || !n && 13 != i ? t.contains(b.$root[0], o) && 13 == i && (e.preventDefault(), o.click()) : (e.preventDefault(), n ? a._.trigger(b.component.key.go, b, [a._.trigger(n)]) : b.$root.find("." + v.highlighted).hasClass(v.disabled) || (b.set("select", b.component.item.highlight), m.closeOnSelect && b.close(!0))) })), b.trigger("open")) }, close: function(t) {
                        return t && (m.editable ? e.focus() : (b.$holder.off("focus.toOpen").focus(), setTimeout(function() { b.$holder.on("focus.toOpen", T) }, 0))), g.removeClass(v.active), l(e, "expanded", !1), setTimeout(function() { b.$root.removeClass(v.opened + " " + v.focused), l(b.$root[0], "hidden", !0) }, 0), p.open ? (p.open = !1, f && n.css("overflow", "").css("padding-right", "-=" + r()), i.off("." + p.id), b.trigger("close")) : b }, clear: function(t) {
                        return b.set("clear", null, t) }, set: function(e, i, n) {
                        var o, a, s = t.isPlainObject(e),
                            r = s ? e : {};
                        if (n = s && t.isPlainObject(i) ? i : n || {}, e) { s || (r[e] = i);
                            for (o in r) a = r[o], o in b.component.item && (void 0 === a && (a = null), b.component.set(o, a, n)), ("select" == o || "clear" == o) && g.val("clear" == o ? "" : b.get(o, m.format)).trigger("change");
                            b.render() }
                        return n.muted ? b : b.trigger("set", r) }, get: function(t, i) {
                        if (t = t || "value", null != p[t]) return p[t];
                        if ("valueSubmit" == t) {
                            if (b._hidden) return b._hidden.value;
                            t = "value" }
                        if ("value" == t) return e.value;
                        if (t in b.component.item) {
                            if ("string" == typeof i) {
                                var n = b.component.get(t);
                                return n ? a._.trigger(b.component.formats.toString, b.component, [i, n]) : "" }
                            return b.component.get(t) } }, on: function(e, i, n) {
                        var o, a, s = t.isPlainObject(e),
                            r = s ? e : {};
                        if (e) { s || (r[e] = i);
                            for (o in r) a = r[o], n && (o = "_" + o), p.methods[o] = p.methods[o] || [], p.methods[o].push(a) }
                        return b }, off: function() {
                        var t, e, i = arguments;
                        for (t = 0, namesCount = i.length; t < namesCount; t += 1) e = i[t], e in p.methods && delete p.methods[e];
                        return b }, trigger: function(t, e) {
                        var i = function(t) {
                            var i = p.methods[t];
                            i && i.map(function(t) { a._.trigger(t, b, [e]) }) };
                        return i("_" + t), i(t), b } };
            return new y }

        function s(t) {
            var e, i = "position";
            return t.currentStyle ? e = t.currentStyle[i] : window.getComputedStyle && (e = getComputedStyle(t)[i]), "fixed" == e }

        function r() {
            if (n.height() <= e.height()) return 0;
            var i = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                o = i[0].offsetWidth;
            i.css("overflow", "scroll");
            var a = t('<div style="width:100%" />').appendTo(i),
                s = a[0].offsetWidth;
            return i.remove(), o - s }

        function l(e, i, n) {
            if (t.isPlainObject(i))
                for (var o in i) c(e, o, i[o]);
            else c(e, i, n) }

        function c(t, e, i) { t.setAttribute(("role" == e ? "" : "aria-") + e, i) }

        function u(e, i) { t.isPlainObject(e) || (e = { attribute: i }), i = "";
            for (var n in e) {
                var o = ("role" == n ? "" : "aria-") + n,
                    a = e[n];
                i += null == a ? "" : o + '="' + e[n] + '"' }
            return i }

        function h() {
            try {
                return document.activeElement } catch (t) {} }
        var e = t(window),
            i = t(document),
            n = t(document.documentElement),
            o = null != document.documentElement.style.transition;
        return a.klasses = function(t) {
            return t = t || "picker", { picker: t, opened: t + "--opened", focused: t + "--focused", input: t + "__input", active: t + "__input--active", target: t + "__input--target", holder: t + "__holder", frame: t + "__frame", wrap: t + "__wrap", box: t + "__box" } }, a._ = { group: function(t) {
                for (var e, i = "", n = a._.trigger(t.min, t); n <= a._.trigger(t.max, t, [n]); n += t.i) e = a._.trigger(t.item, t, [n]), i += a._.node(t.node, e[0], e[1], e[2]);
                return i }, node: function(e, i, n, o) {
                return i ? (i = t.isArray(i) ? i.join("") : i, n = n ? ' class="' + n + '"' : "", o = o ? " " + o : "", "<" + e + n + o + ">" + i + "</" + e + ">") : "" }, lead: function(t) {
                return (10 > t ? "0" : "") + t }, trigger: function(t, e, i) {
                return "function" == typeof t ? t.apply(e, i || []) : t }, digits: function(t) {
                return /\d/.test(t[1]) ? 2 : 1 }, isDate: function(t) {
                return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate()) }, isInteger: function(t) {
                return {}.toString.call(t).indexOf("Number") > -1 && t % 1 === 0 }, ariaAttr: u }, a.extend = function(e, i) { t.fn[e] = function(n, o) {
                var s = this.data(e);
                return "picker" == n ? s : s && "string" == typeof n ? a._.trigger(s[n], s, [o]) : this.each(function() {
                    var o = t(this);
                    o.data(e) || new a(this, e, i, n) }) }, t.fn[e].defaults = i.defaults }, a }),
    function(t) { "function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery) }(function(t, e) {
        function a(t, e) {
            var i = this,
                n = t.$node[0],
                o = n.value,
                a = t.$node.data("value"),
                s = a || o,
                r = a ? e.formatSubmit : e.format,
                l = function() {
                    return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction };
            i.settings = e, i.$node = t.$node, i.queue = { min: "measure create", max: "measure create", now: "now create", select: "parse create validate", highlight: "parse navigate create validate", view: "parse create validate viewset", disable: "deactivate", enable: "activate" }, i.item = {}, i.item.clear = null, i.item.disable = (e.disable || []).slice(0), i.item.enable = - function(t) {
                return t[0] === !0 ? t.shift() : -1 }(i.item.disable), i.set("min", e.min).set("max", e.max).set("now"), s ? i.set("select", s, { format: r, defaultValue: !0 }) : i.set("select", null).set("highlight", i.item.now), i.key = { 40: 7, 38: -7, 39: function() {
                    return l() ? -1 : 1 }, 37: function() {
                    return l() ? 1 : -1 }, go: function(t) {
                    var e = i.item.highlight,
                        n = new Date(e.year, e.month, e.date + t);
                    i.set("highlight", n, { interval: t }), this.render() } }, t.on("render", function() { t.$root.find("." + e.klass.selectMonth).on("change", function() {
                    var i = this.value;
                    i && (t.set("highlight", [t.get("view").year, i, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus")) }), t.$root.find("." + e.klass.selectYear).on("change", function() {
                    var i = this.value;
                    i && (t.set("highlight", [i, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus")) }) }, 1).on("open", function() {
                var n = "";
                i.disabled(i.get("now")) && (n = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + n + ", select").attr("disabled", !1) }, 1).on("close", function() { t.$root.find("button, select").attr("disabled", !0) }, 1) }
        var i = 7,
            n = 6,
            o = t._;
        a.prototype.set = function(t, e, i) {
            var n = this,
                o = n.item;
            return null === e ? ("clear" == t && (t = "select"), o[t] = e, n) : (o["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[t].split(" ").map(function(o) {
                return e = n[o](t, e, i) }).pop(), "select" == t ? n.set("highlight", o.select, i) : "highlight" == t ? n.set("view", o.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n) }, a.prototype.get = function(t) {
            return this.item[t] }, a.prototype.create = function(t, i, n) {
            var a, s = this;
            return i = void 0 === i ? t : i, i == -(1 / 0) || i == 1 / 0 ? a = i : e.isPlainObject(i) && o.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = o.isDate(i) ? i : s.create().obj) : i = o.isInteger(i) || o.isDate(i) ? s.normalize(new Date(i), n) : s.now(t, i, n), { year: a || i.getFullYear(), month: a || i.getMonth(), date: a || i.getDate(), day: a || i.getDay(), obj: a || i, pick: a || i.getTime() } }, a.prototype.createRange = function(t, i) {
            var n = this,
                a = function(t) {
                    return t === !0 || e.isArray(t) || o.isDate(t) ? n.create(t) : t };
            return o.isInteger(t) || (t = a(t)), o.isInteger(i) || (i = a(i)), o.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : o.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), { from: a(t), to: a(i) } }, a.prototype.withinRange = function(t, e) {
            return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick }, a.prototype.overlapRanges = function(t, e) {
            var i = this;
            return t = i.createRange(t.from, t.to), e = i.createRange(e.from, e.to), i.withinRange(t, e.from) || i.withinRange(t, e.to) || i.withinRange(e, t.from) || i.withinRange(e, t.to) }, a.prototype.now = function(t, e, i) {
            return e = new Date, i && i.rel && e.setDate(e.getDate() + i.rel), this.normalize(e, i) }, a.prototype.navigate = function(t, i, n) {
            var o, a, s, r, l = e.isArray(i),
                c = e.isPlainObject(i),
                u = this.item.view;
            if (l || c) {
                for (c ? (a = i.year, s = i.month, r = i.date) : (a = +i[0], s = +i[1], r = +i[2]), n && n.nav && u && u.month !== s && (a = u.year, s = u.month), o = new Date(a, s + (n && n.nav ? n.nav : 0), 1), a = o.getFullYear(), s = o.getMonth(); new Date(a, s, r).getMonth() !== s;) r -= 1;
                i = [a, s, r] }
            return i }, a.prototype.normalize = function(t) {
            return t.setHours(0, 0, 0, 0), t }, a.prototype.measure = function(t, e) {
            var i = this;
            return e ? "string" == typeof e ? e = i.parse(t, e) : o.isInteger(e) && (e = i.now(t, e, { rel: e })) : e = "min" == t ? -(1 / 0) : 1 / 0, e }, a.prototype.viewset = function(t, e) {
            return this.create([e.year, e.month, 1]) }, a.prototype.validate = function(t, i, n) {
            var c, u, f, p, a = this,
                s = i,
                r = n && n.interval ? n.interval : 1,
                l = -1 === a.item.enable,
                h = a.item.min,
                d = a.item.max,
                m = l && a.item.disable.filter(function(t) {
                    if (e.isArray(t)) {
                        var n = a.create(t).pick;
                        n < i.pick ? c = !0 : n > i.pick && (u = !0) }
                    return o.isInteger(t) }).length;
            if ((!n || !n.nav && !n.defaultValue) && (!l && a.disabled(i) || l && a.disabled(i) && (m || c || u) || !l && (i.pick <= h.pick || i.pick >= d.pick)))
                for (l && !m && (!u && r > 0 || !c && 0 > r) && (r *= -1); a.disabled(i) && (Math.abs(r) > 1 && (i.month < s.month || i.month > s.month) && (i = s, r = r > 0 ? 1 : -1), i.pick <= h.pick ? (f = !0, r = 1, i = a.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : -1)])) : i.pick >= d.pick && (p = !0, r = -1, i = a.create([d.year, d.month, d.date + (i.pick === d.pick ? 0 : 1)])), !f || !p);) i = a.create([i.year, i.month, i.date + r]);
            return i }, a.prototype.disabled = function(t) {
            var i = this,
                n = i.item.disable.filter(function(n) {
                    return o.isInteger(n) ? t.day === (i.settings.firstDay ? n : n - 1) % 7 : e.isArray(n) || o.isDate(n) ? t.pick === i.create(n).pick : e.isPlainObject(n) ? i.withinRange(n, t) : void 0 });
            return n = n.length && !n.filter(function(t) {
                return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted }).length, -1 === i.item.enable ? !n : n || t.pick < i.item.min.pick || t.pick > i.item.max.pick }, a.prototype.parse = function(t, e, i) {
            var n = this,
                a = {};
            return e && "string" == typeof e ? (i && i.format || (i = i || {}, i.format = n.settings.format), n.formats.toArray(i.format).map(function(t) {
                var i = n.formats[t],
                    s = i ? o.trigger(i, n, [e, a]) : t.replace(/^!/, "").length;
                i && (a[t] = e.substr(0, s)), e = e.substr(s) }), [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : e }, a.prototype.formats = function() {
            function t(t, e, i) {
                var n = t.match(/[^\x00-\x7F]+|\w+/)[0];
                return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length }

            function e(t) {
                return t.match(/\w+/)[0].length }
            return { d: function(t, e) {
                    return t ? o.digits(t) : e.date }, dd: function(t, e) {
                    return t ? 2 : o.lead(e.date) }, ddd: function(t, i) {
                    return t ? e(t) : this.settings.weekdaysShort[i.day] }, dddd: function(t, i) {
                    return t ? e(t) : this.settings.weekdaysFull[i.day] }, m: function(t, e) {
                    return t ? o.digits(t) : e.month + 1 }, mm: function(t, e) {
                    return t ? 2 : o.lead(e.month + 1) }, mmm: function(e, i) {
                    var n = this.settings.monthsShort;
                    return e ? t(e, n, i) : n[i.month] }, mmmm: function(e, i) {
                    var n = this.settings.monthsFull;
                    return e ? t(e, n, i) : n[i.month] }, yy: function(t, e) {
                    return t ? 2 : ("" + e.year).slice(2) }, yyyy: function(t, e) {
                    return t ? 4 : e.year }, toArray: function(t) {
                    return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g) }, toString: function(t, e) {
                    var i = this;
                    return i.formats.toArray(t).map(function(t) {
                        return o.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "") }).join("") } } }(), a.prototype.isDateExact = function(t, i) {
            var n = this;
            return o.isInteger(t) && o.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (o.isDate(t) || e.isArray(t)) && (o.isDate(i) || e.isArray(i)) ? n.create(t).pick === n.create(i).pick : e.isPlainObject(t) && e.isPlainObject(i) ? n.isDateExact(t.from, i.from) && n.isDateExact(t.to, i.to) : !1 }, a.prototype.isDateOverlap = function(t, i) {
            var n = this,
                a = n.settings.firstDay ? 1 : 0;
            return o.isInteger(t) && (o.isDate(i) || e.isArray(i)) ? (t = t % 7 + a, t === n.create(i).day + 1) : o.isInteger(i) && (o.isDate(t) || e.isArray(t)) ? (i = i % 7 + a, i === n.create(t).day + 1) : e.isPlainObject(t) && e.isPlainObject(i) ? n.overlapRanges(t, i) : !1 }, a.prototype.flipEnable = function(t) {
            var e = this.item;
            e.enable = t || (-1 == e.enable ? 1 : -1) }, a.prototype.deactivate = function(t, i) {
            var n = this,
                a = n.item.disable.slice(0);
            return "flip" == i ? n.flipEnable() : i === !1 ? (n.flipEnable(1), a = []) : i === !0 ? (n.flipEnable(-1), a = []) : i.map(function(t) {
                for (var i, s = 0; s < a.length; s += 1)
                    if (n.isDateExact(t, a[s])) { i = !0;
                        break }
                i || (o.isInteger(t) || o.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && a.push(t) }), a }, a.prototype.activate = function(t, i) {
            var n = this,
                a = n.item.disable,
                s = a.length;
            return "flip" == i ? n.flipEnable() : i === !0 ? (n.flipEnable(1), a = []) : i === !1 ? (n.flipEnable(-1), a = []) : i.map(function(t) {
                var i, r, l, c;
                for (l = 0; s > l; l += 1) {
                    if (r = a[l], n.isDateExact(r, t)) { i = a[l] = null, c = !0;
                        break }
                    if (n.isDateOverlap(r, t)) { e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t, i[3] || i.push("inverted")) : o.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                        break } }
                if (i)
                    for (l = 0; s > l; l += 1)
                        if (n.isDateExact(a[l], t)) { a[l] = null;
                            break }
                if (c)
                    for (l = 0; s > l; l += 1)
                        if (n.isDateOverlap(a[l], t)) { a[l] = null;
                            break }
                i && a.push(i) }), a.filter(function(t) {
                return null != t }) }, a.prototype.nodes = function(t) {
            var e = this,
                a = e.settings,
                s = e.item,
                r = s.now,
                l = s.select,
                c = s.highlight,
                u = s.view,
                h = s.disable,
                d = s.min,
                f = s.max,
                p = function(t, e) {
                    return a.firstDay && (t.push(t.shift()), e.push(e.shift())), o.node("thead", o.node("tr", o.group({ min: 0, max: i - 1, i: 1, node: "th", item: function(i) {
                            return [t[i], a.klass.weekdays, 'scope=col title="' + e[i] + '"'] } }))) }((a.showWeekdaysFull ? a.weekdaysFull : a.weekdaysShort).slice(0), a.weekdaysFull.slice(0)),
                m = function(t) {
                    return o.node("div", " ", a.klass["nav" + (t ? "Next" : "Prev")] + (t && u.year >= f.year && u.month >= f.month || !t && u.year <= d.year && u.month <= d.month ? " " + a.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + o.ariaAttr({ role: "button", controls: e.$node[0].id + "_table" }) + ' title="' + (t ? a.labelMonthNext : a.labelMonthPrev) + '"') },
                v = function() {
                    var i = a.showMonthsShort ? a.monthsShort : a.monthsFull;
                    return a.selectMonths ? o.node("select", o.group({ min: 0, max: 11, i: 1, node: "option", item: function(t) {
                            return [i[t], 0, "value=" + t + (u.month == t ? " selected" : "") + (u.year == d.year && t < d.month || u.year == f.year && t > f.month ? " disabled" : "")] } }), a.klass.selectMonth, (t ? "" : "disabled") + " " + o.ariaAttr({ controls: e.$node[0].id + "_table" }) + ' title="' + a.labelMonthSelect + '"') : o.node("div", i[u.month], a.klass.month) },
                g = function() {
                    var i = u.year,
                        n = a.selectYears === !0 ? 5 : ~~(a.selectYears / 2);
                    if (n) {
                        var s = d.year,
                            r = f.year,
                            l = i - n,
                            c = i + n;
                        if (s > l && (c += s - l, l = s), c > r) {
                            var h = l - s,
                                p = c - r;
                            l -= h > p ? p : h, c = r }
                        return o.node("select", o.group({ min: l, max: c, i: 1, node: "option", item: function(t) {
                                return [t, 0, "value=" + t + (i == t ? " selected" : "")] } }), a.klass.selectYear, (t ? "" : "disabled") + " " + o.ariaAttr({ controls: e.$node[0].id + "_table" }) + ' title="' + a.labelYearSelect + '"') }
                    return o.node("div", i, a.klass.year) };
            return o.node("div", (a.selectYears ? g() + v() : v() + g()) + m() + m(1), a.klass.header) + o.node("table", p + o.node("tbody", o.group({ min: 0, max: n - 1, i: 1, node: "tr", item: function(t) {
                    var n = a.firstDay && 0 === e.create([u.year, u.month, 1]).day ? -7 : 0;
                    return [o.group({ min: i * t - u.day + n + 1, max: function() {
                            return this.min + i - 1 }, i: 1, node: "td", item: function(t) { t = e.create([u.year, u.month, t + (a.firstDay ? 1 : 0)]);
                            var i = l && l.pick == t.pick,
                                n = c && c.pick == t.pick,
                                s = h && e.disabled(t) || t.pick < d.pick || t.pick > f.pick,
                                p = o.trigger(e.formats.toString, e, [a.format, t]);
                            return [o.node("div", t.date, function(e) {
                                return e.push(u.month == t.month ? a.klass.infocus : a.klass.outfocus), r.pick == t.pick && e.push(a.klass.now), i && e.push(a.klass.selected), n && e.push(a.klass.highlighted), s && e.push(a.klass.disabled), e.join(" ") }([a.klass.day]), "data-pick=" + t.pick + " " + o.ariaAttr({ role: "gridcell", label: p, selected: i && e.$node.val() === p ? !0 : null, activedescendant: n ? !0 : null, disabled: s ? !0 : null })), "", o.ariaAttr({ role: "presentation" })] } })] } })), a.klass.table, 'id="' + e.$node[0].id + '_table" ' + o.ariaAttr({ role: "grid", controls: e.$node[0].id, readonly: !0 })) + o.node("div", o.node("button", a.today, a.klass.buttonToday, "type=button data-pick=" + r.pick + (t && !e.disabled(r) ? "" : " disabled") + " " + o.ariaAttr({ controls: e.$node[0].id })) + o.node("button", a.clear, a.klass.buttonClear, "type=button data-clear=1" + (t ? "" : " disabled") + " " + o.ariaAttr({ controls: e.$node[0].id })) + o.node("button", a.close, a.klass.buttonClose, "type=button data-close=true " + (t ? "" : " disabled") + " " + o.ariaAttr({ controls: e.$node[0].id })), a.klass.footer) }, a.defaults = function(t) {
            return { labelMonthNext: "Next month", labelMonthPrev: "Previous month", labelMonthSelect: "Select a month", labelYearSelect: "Select a year", monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], today: "Today", clear: "Clear", close: "Close", closeOnSelect: !0, closeOnClear: !0, format: "d mmmm, yyyy", klass: { table: t + "table", header: t + "header", navPrev: t + "nav--prev", navNext: t + "nav--next", navDisabled: t + "nav--disabled", month: t + "month", year: t + "year", selectMonth: t + "select--month", selectYear: t + "select--year", weekdays: t + "weekday", day: t + "day", disabled: t + "day--disabled", selected: t + "day--selected", highlighted: t + "day--highlighted", now: t + "day--today", infocus: t + "day--infocus", outfocus: t + "day--outfocus", footer: t + "footer", buttonClear: t + "button--clear", buttonToday: t + "button--today", buttonClose: t + "button--close" } } }(t.klasses().picker + "__"), t.extend("pickadate", a) }), $.extend($.fn.pickadate.defaults, { selectMonths: !0, selectYears: 15, onRender: function() {
            var t = $(".datepicker").pickadate("picker").get("highlight", "yyyy"),
                e = $(".datepicker").pickadate("picker").get("highlight", "dd"),
                i = $(".datepicker").pickadate("picker").get("highlight", "mmm"),
                n = $(".datepicker").pickadate("picker").get("highlight", "dddd");
            console.log(t, e, i, n), $(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + n + '</div><div class="picker__month-display"><div>' + i + '</div></div><div class="picker__day-display"><div>' + e + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>") } }),
    function() {
        function h(t) {
            return document.createElementNS(n, t) }

        function d(t) {
            return (10 > t ? "0" : "") + t }

        function p(t) {
            var e = ++f + "";
            return t ? t + e : e }

        function C(e, n) {
            function V(t, e) {
                var a = s.offset(),
                    r = /^touch/.test(t.type),
                    u = a.left + m,
                    h = a.top + m,
                    d = (r ? t.originalEvent.touches[0] : t).pageX - u,
                    f = (r ? t.originalEvent.touches[0] : t).pageY - h,
                    p = Math.sqrt(d * d + f * f),
                    g = !1;
                if (!e || !(v - y > p || p > v + y)) { t.preventDefault();
                    var b = setTimeout(function() { E.popover.addClass("clockpicker-moving") }, 200);
                    o && s.append(E.canvas), E.setHand(d, f, !e, !0), i.off(l).on(l, function(t) { t.preventDefault();
                        var e = /^touch/.test(t.type),
                            i = (e ? t.originalEvent.touches[0] : t).pageX - u,
                            n = (e ? t.originalEvent.touches[0] : t).pageY - h;
                        (g || i !== d || n !== f) && (g = !0, E.setHand(i, n, !1, !0)) }), i.off(c).on(c, function(t) { i.off(c), t.preventDefault();
                        var o = /^touch/.test(t.type),
                            a = (o ? t.originalEvent.changedTouches[0] : t).pageX - u,
                            r = (o ? t.originalEvent.changedTouches[0] : t).pageY - h;
                        (e || g) && a === d && r === f && E.setHand(a, r), "hours" === E.currentView ? E.toggleView("minutes", w / 2) : n.autoclose && (E.minutesView.addClass("clockpicker-dial-out"), setTimeout(function() { E.done() }, w / 2)), s.prepend(W), clearTimeout(b), E.popover.removeClass("clockpicker-moving"), i.off(l) }) } }
            var a = t(x),
                s = a.find(".clockpicker-plate"),
                u = a.find(".picker__holder"),
                f = a.find(".clockpicker-hours"),
                C = a.find(".clockpicker-minutes"),
                S = a.find(".clockpicker-am-pm-block"),
                P = "INPUT" === e.prop("tagName"),
                T = P ? e : e.find("input"),
                A = t("label[for=" + T.attr("id") + "]"),
                E = this;
            if (this.id = p("cp"), this.element = e, this.holder = u, this.options = n, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = P, this.input = T, this.label = A, this.popover = a, this.plate = s, this.hoursView = f, this.minutesView = C, this.amPmBlock = S, this.spanHours = a.find(".clockpicker-span-hours"), this.spanMinutes = a.find(".clockpicker-span-minutes"), this.spanAmPm = a.find(".clockpicker-span-am-pm"), this.footer = a.find(".picker__footer"), this.amOrPm = "PM", n.twelvehour) {
                var I = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
                t(I);
                n.ampmclickable ? (this.spanAmPm.empty(), t('<div id="click-am">AM</div>').on("click", function() { E.spanAmPm.children("#click-am").addClass("text-primary"), E.spanAmPm.children("#click-pm").removeClass("text-primary"), E.amOrPm = "AM" }).appendTo(this.spanAmPm), t('<div id="click-pm">PM</div>').on("click", function() { E.spanAmPm.children("#click-pm").addClass("text-primary"), E.spanAmPm.children("#click-am").removeClass("text-primary"), E.amOrPm = "PM" }).appendTo(this.spanAmPm)) : (t('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function() { E.amOrPm = "AM", E.amPmBlock.children(".pm-button").removeClass("active"), E.amPmBlock.children(".am-button").addClass("active"), E.spanAmPm.empty().append("AM") }).appendTo(this.amPmBlock), t('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function() { E.amOrPm = "PM", E.amPmBlock.children(".am-button").removeClass("active"), E.amPmBlock.children(".pm-button").addClass("active"), E.spanAmPm.empty().append("PM") }).appendTo(this.amPmBlock)) }
            n.darktheme && a.addClass("darktheme"), t('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (n.twelvehour ? "3" : "1") + '">' + n.donetext + "</button>").click(t.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(t.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(t.proxy(this.toggleView, this, "minutes")), T.on("focus.clockpicker click.clockpicker", t.proxy(this.show, this));
            var L, D, R, z, F = t('<div class="clockpicker-tick"></div>');
            if (n.twelvehour)
                for (L = 1; 13 > L; L += 1) D = F.clone(), R = L / 6 * Math.PI, z = v, D.css("font-size", "140%"), D.css({ left: m + Math.sin(R) * z - y, top: m - Math.cos(R) * z - y }), D.html(0 === L ? "00" : L), f.append(D), D.on(r, V);
            else
                for (L = 0; 24 > L; L += 1) { D = F.clone(), R = L / 6 * Math.PI;
                    var _ = L > 0 && 13 > L;
                    z = _ ? g : v, D.css({ left: m + Math.sin(R) * z - y, top: m - Math.cos(R) * z - y }), _ && D.css("font-size", "120%"), D.html(0 === L ? "00" : L), f.append(D), D.on(r, V) }
            for (L = 0; 60 > L; L += 5) D = F.clone(), R = L / 30 * Math.PI, D.css({ left: m + Math.sin(R) * v - y, top: m - Math.cos(R) * v - y }), D.css("font-size", "140%"), D.html(d(L)), C.append(D), D.on(r, V);
            if (s.on(r, function(e) { 0 === t(e.target).closest(".clockpicker-tick").length && V(e, !0) }), o) {
                var W = a.find(".clockpicker-canvas"),
                    H = h("svg");
                H.setAttribute("class", "clockpicker-svg"), H.setAttribute("width", b), H.setAttribute("height", b);
                var N = h("g");
                N.setAttribute("transform", "translate(" + m + "," + m + ")");
                var B = h("circle");
                B.setAttribute("class", "clockpicker-canvas-bearing"), B.setAttribute("cx", 0), B.setAttribute("cy", 0), B.setAttribute("r", 2);
                var j = h("line");
                j.setAttribute("x1", 0), j.setAttribute("y1", 0);
                var $ = h("circle");
                $.setAttribute("class", "clockpicker-canvas-bg"), $.setAttribute("r", y);
                var q = h("circle");
                q.setAttribute("class", "clockpicker-canvas-fg"), q.setAttribute("r", 5), N.appendChild(j), N.appendChild($), N.appendChild(q), N.appendChild(B), H.appendChild(N), W.append(H), this.hand = j, this.bg = $, this.fg = q, this.bearing = B, this.g = N, this.canvas = W }
            k(this.options.init) }

        function k(t) { t && "function" == typeof t && t() }
        var t = window.jQuery,
            e = t(window),
            i = t(document),
            n = "http://www.w3.org/2000/svg",
            o = "SVGAngle" in window && function() {
                var t, e = document.createElement("div");
                return e.innerHTML = "<svg/>", t = (e.firstChild && e.firstChild.namespaceURI) == n, e.innerHTML = "", t }(),
            a = function() {
                var t = document.createElement("div").style;
                return "transition" in t || "WebkitTransition" in t || "MozTransition" in t || "msTransition" in t || "OTransition" in t }(),
            s = "ontouchstart" in window,
            r = "mousedown" + (s ? " touchstart" : ""),
            l = "mousemove.clockpicker" + (s ? " touchmove.clockpicker" : ""),
            c = "mouseup.clockpicker" + (s ? " touchend.clockpicker" : ""),
            u = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null,
            f = 0,
            m = 135,
            v = 110,
            g = 80,
            y = 20,
            b = 2 * m,
            w = a ? 350 : 1,
            x = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
        C.DEFAULTS = { "default": "", fromnow: 0, donetext: "Done", autoclose: !1, ampmclickable: !1, darktheme: !1, twelvehour: !0, vibrate: !0 }, C.prototype.toggle = function() { this[this.isShown ? "hide" : "show"]() }, C.prototype.locate = function() {
            var t = this.element,
                e = this.popover;
            t.offset(), t.outerWidth(), t.outerHeight(), this.options.align;
            e.show() }, C.prototype.show = function(n) {
            if (!this.isShown) { k(this.options.beforeShow), t(":input").each(function() { t(this).attr("tabindex", -1) });
                var o = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), t(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), e.on("resize.clockpicker" + this.id, function() { o.isShown && o.locate() }), this.isAppended = !0);
                var a = ((this.input.prop("value") || this.options["default"] || "") + "").split(":");
                if (this.options.twelvehour && "undefined" != typeof a[1] && (a[1] = a[1].replace("AM", "").replace("PM", "")), "now" === a[0]) {
                    var s = new Date(+new Date + this.options.fromnow);
                    a = [s.getHours(), s.getMinutes()] }
                this.hours = +a[0] || 0, this.minutes = +a[1] || 0, this.spanHours.html(d(this.hours)), this.spanMinutes.html(d(this.minutes)), this.toggleView("hours"), this.locate(), this.isShown = !0, i.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function(e) {
                    var i = t(e.target);
                    0 === i.closest(o.popover.find(".picker__wrap")).length && 0 === i.closest(o.input).length && o.hide() }), i.on("keyup.clockpicker." + this.id, function(t) { 27 === t.keyCode && o.hide() }), k(this.options.afterShow) } }, C.prototype.hide = function() { k(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), t(document.body).css("overflow", "visible"), this.isShown = !1, t(":input").each(function(e) { t(this).attr("tabindex", e + 1) }), i.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), i.off("keyup.clockpicker." + this.id), this.popover.hide(), k(this.options.afterHide) }, C.prototype.toggleView = function(e, i) {
            var n = !1; "minutes" === e && "visible" === t(this.hoursView).css("visibility") && (k(this.options.beforeHourSelect), n = !0);
            var o = "hours" === e,
                a = o ? this.hoursView : this.minutesView,
                s = o ? this.minutesView : this.hoursView;
            this.currentView = e, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), s.addClass("clockpicker-dial-out"), a.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(i), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function() { s.css("visibility", "hidden") }, w), n && k(this.options.afterHourSelect) }, C.prototype.resetClock = function(t) {
            var e = this.currentView,
                i = this[e],
                n = "hours" === e,
                a = Math.PI / (n ? 6 : 30),
                s = i * a,
                r = n && i > 0 && 13 > i ? g : v,
                l = Math.sin(s) * r,
                c = -Math.cos(s) * r,
                u = this;
            o && t ? (u.canvas.addClass("clockpicker-canvas-out"), setTimeout(function() { u.canvas.removeClass("clockpicker-canvas-out"), u.setHand(l, c) }, t)) : this.setHand(l, c) }, C.prototype.setHand = function(e, i, n, a) {
            var m, s = Math.atan2(e, -i),
                r = "hours" === this.currentView,
                l = Math.PI / (r || n ? 6 : 30),
                c = Math.sqrt(e * e + i * i),
                h = this.options,
                f = r && (v + g) / 2 > c,
                p = f ? g : v;
            if (h.twelvehour && (p = v), 0 > s && (s = 2 * Math.PI + s), m = Math.round(s / l), s = m * l, h.twelvehour ? r ? 0 === m && (m = 12) : (n && (m *= 5), 60 === m && (m = 0)) : r ? (12 === m && (m = 0), m = f ? 0 === m ? 12 : m : 0 === m ? 0 : m + 12) : (n && (m *= 5), 60 === m && (m = 0)), r ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : m % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== m && u && this.options.vibrate && (this.vibrateTimer || (navigator[u](10), this.vibrateTimer = setTimeout(t.proxy(function() { this.vibrateTimer = null }, this), 100))), this[this.currentView] = m, this[r ? "spanHours" : "spanMinutes"].html(d(m)), !o) return void this[r ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function() {
                var e = t(this);
                e.toggleClass("active", m === +e.html()) });
            a || !r && m % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
            var b = Math.sin(s) * (p - y),
                w = -Math.cos(s) * (p - y),
                x = Math.sin(s) * p,
                C = -Math.cos(s) * p;
            this.hand.setAttribute("x2", b), this.hand.setAttribute("y2", w), this.bg.setAttribute("cx", x), this.bg.setAttribute("cy", C), this.fg.setAttribute("cx", x), this.fg.setAttribute("cy", C) }, C.prototype.done = function() { k(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var t = this.input.prop("value"),
                e = d(this.hours) + ":" + d(this.minutes);
            this.options.twelvehour && (e += this.amOrPm), this.input.prop("value", e), e !== t && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), k(this.options.afterDone) }, C.prototype.remove = function() { this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (e.off("resize.clockpicker" + this.id), this.popover.remove()) }, t.fn.pickatime = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = t(this),
                    o = n.data("clockpicker");
                if (o) "function" == typeof o[e] && o[e].apply(o, i);
                else {
                    var a = t.extend({}, C.DEFAULTS, n.data(), "object" == typeof e && e);
                    n.data("clockpicker", new C(n, a)) } }) }
    }(), ! function(t, e) { "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipe = e() }(this, function() {
        "use strict";
        var t = function(t, e, i, n) {
            var o = { features: null, bind: function(t, e, i, n) {
                    var o = (n ? "remove" : "add") + "EventListener";
                    e = e.split(" ");
                    for (var a = 0; a < e.length; a++) e[a] && t[o](e[a], i, !1) }, isArray: function(t) {
                    return t instanceof Array }, createEl: function(t, e) {
                    var i = document.createElement(e || "div");
                    return t && (i.className = t), i }, getScrollY: function() {
                    var t = window.pageYOffset;
                    return void 0 !== t ? t : document.documentElement.scrollTop }, unbind: function(t, e, i) { o.bind(t, e, i, !0) }, removeClass: function(t, e) {
                    var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                    t.className = t.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }, addClass: function(t, e) { o.hasClass(t, e) || (t.className += (t.className ? " " : "") + e) }, hasClass: function(t, e) {
                    return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className) }, getChildByClass: function(t, e) {
                    for (var i = t.firstChild; i;) {
                        if (o.hasClass(i, e)) return i;
                        i = i.nextSibling } }, arraySearch: function(t, e, i) {
                    for (var n = t.length; n--;)
                        if (t[n][i] === e) return n;
                    return -1 }, extend: function(t, e, i) {
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            if (i && t.hasOwnProperty(n)) continue;
                            t[n] = e[n] } }, easing: { sine: { out: function(t) {
                            return Math.sin(t * (Math.PI / 2)) }, inOut: function(t) {
                            return -(Math.cos(Math.PI * t) - 1) / 2 } }, cubic: { out: function(t) {
                            return --t * t * t + 1 } } }, detectFeatures: function() {
                    if (o.features) return o.features;
                    var t = o.createEl(),
                        e = t.style,
                        i = "",
                        n = {};
                    if (n.oldIE = document.all && !document.addEventListener, n.touch = "ontouchstart" in window, window.requestAnimationFrame && (n.raf = window.requestAnimationFrame, n.caf = window.cancelAnimationFrame), n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !n.pointerEvent) {
                        var a = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var s = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            s && s.length > 0 && (s = parseInt(s[1], 10), s >= 1 && 8 > s && (n.isOldIOSPhone = !0)) }
                        var r = a.match(/Android\s([0-9\.]*)/),
                            l = r ? r[1] : 0;
                        l = parseFloat(l), l >= 1 && (4.4 > l && (n.isOldAndroid = !0), n.androidVersion = l), n.isMobileOpera = /opera mini|opera mobi/i.test(a) }
                    for (var c, u, h = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], f = 0; 4 > f; f++) { i = d[f];
                        for (var p = 0; 3 > p; p++) c = h[p], u = i + (i ? c.charAt(0).toUpperCase() + c.slice(1) : c), !n[c] && u in e && (n[c] = u);
                        i && !n.raf && (i = i.toLowerCase(), n.raf = window[i + "RequestAnimationFrame"], n.raf && (n.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"])) }
                    if (!n.raf) {
                        var m = 0;
                        n.raf = function(t) {
                            var e = (new Date).getTime(),
                                i = Math.max(0, 16 - (e - m)),
                                n = window.setTimeout(function() { t(e + i) }, i);
                            return m = e + i, n }, n.caf = function(t) { clearTimeout(t) } }
                    return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = n, n } };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(t, e, i, n) { e = e.split(" ");
                for (var o, a = (n ? "detach" : "attach") + "Event", s = function() { i.handleEvent.call(i) }, r = 0; r < e.length; r++)
                    if (o = e[r])
                        if ("object" == typeof i && i.handleEvent) {
                            if (n) {
                                if (!i["oldIE" + o]) return !1 } else i["oldIE" + o] = s;
                            t[a]("on" + o, i["oldIE" + o]) } else t[a]("on" + o, i) });
            var a = this,
                s = 25,
                r = 3,
                l = { allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function(t) {
                        return "A" === t.tagName }, getDoubleTapZoom: function(t, e) {
                        return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33 }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit" };
            o.extend(l, n);
            var c, u, h, d, f, p, m, v, g, y, b, w, x, C, k, S, P, T, A, E, M, I, O, F, L, D, R, z, _, V, W, H, N, B, j, $, q, Y, X, Q, Z, G, U, K, J, tt, et, it, nt, ot, at, st, rt, lt, ct, ut, ht = function() {
                    return { x: 0, y: 0 } },
                dt = ht(),
                ft = ht(),
                pt = ht(),
                mt = {},
                vt = 0,
                gt = {},
                yt = ht(),
                bt = 0,
                wt = !0,
                xt = [],
                Ct = {},
                kt = !1,
                St = function(t, e) { o.extend(a, e.publicMethods), xt.push(t) },
                Pt = function(t) {
                    var e = Je();
                    return t > e - 1 ? t - e : 0 > t ? e + t : t },
                Tt = {},
                At = function(t, e) {
                    return Tt[t] || (Tt[t] = []), Tt[t].push(e) },
                Et = function(t) {
                    var e = Tt[t];
                    if (e) {
                        var i = Array.prototype.slice.call(arguments);
                        i.shift();
                        for (var n = 0; n < e.length; n++) e[n].apply(a, i) } },
                Mt = function() {
                    return (new Date).getTime() },
                It = function(t) { lt = t, a.bg.style.opacity = t * l.bgOpacity },
                Ot = function(t, e, i, n, o) {
                    (!kt || o && o !== a.currItem) && (n /= o ? o.fitRatio : a.currItem.fitRatio), t[I] = w + e + "px, " + i + "px" + x + " scale(" + n + ")" },
                Ft = function(t) { nt && (t && (y > a.currItem.fitRatio ? kt || (hi(a.currItem, !1, !0), kt = !0) : kt && (hi(a.currItem), kt = !1)), Ot(nt, pt.x, pt.y, y)) },
                Lt = function(t) { t.container && Ot(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t) },
                Dt = function(t, e) { e[I] = w + t + "px, 0px" + x },
                Rt = function(t, e) {
                    if (!l.loop && e) {
                        var i = d + (yt.x * vt - t) / yt.x,
                            n = Math.round(t - ye.x);
                        (0 > i && n > 0 || i >= Je() - 1 && 0 > n) && (t = ye.x + n * l.mainScrollEndFriction) }
                    ye.x = t, Dt(t, f) },
                zt = function(t, e) {
                    var i = be[t] - gt[t];
                    return ft[t] + dt[t] + i - i * (e / b) },
                _t = function(t, e) { t.x = e.x, t.y = e.y, e.id && (t.id = e.id) },
                Vt = function(t) { t.x = Math.round(t.x), t.y = Math.round(t.y) },
                Wt = null,
                Ht = function() { Wt && (o.unbind(document, "mousemove", Ht), o.addClass(t, "pswp--has_mouse"), l.mouseUsed = !0, Et("mouseUsed")), Wt = setTimeout(function() { Wt = null }, 100) },
                Nt = function() { o.bind(document, "keydown", a), W.transform && o.bind(a.scrollWrap, "click", a), l.mouseUsed || o.bind(document, "mousemove", Ht), o.bind(window, "resize scroll", a), Et("bindEvents") },
                Bt = function() { o.unbind(window, "resize", a), o.unbind(window, "scroll", g.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", Ht), W.transform && o.unbind(a.scrollWrap, "click", a), Y && o.unbind(window, m, a), Et("unbindEvents") },
                jt = function(t, e) {
                    var i = ri(a.currItem, mt, t);
                    return e && (it = i), i },
                $t = function(t) {
                    return t || (t = a.currItem), t.initialZoomLevel },
                qt = function(t) {
                    return t || (t = a.currItem), t.w > 0 ? l.maxSpreadZoom : 1 },
                Yt = function(t, e, i, n) {
                    return n === a.currItem.initialZoomLevel ? (i[t] = a.currItem.initialPosition[t], !0) : (i[t] = zt(t, n), i[t] > e.min[t] ? (i[t] = e.min[t], !0) : i[t] < e.max[t] ? (i[t] = e.max[t], !0) : !1) },
                Xt = function() {
                    if (I) {
                        var e = W.perspective && !F;
                        return w = "translate" + (e ? "3d(" : "("), void(x = W.perspective ? ", 0px)" : ")") }
                    I = "left", o.addClass(t, "pswp--ie"), Dt = function(t, e) { e.left = t + "px" }, Lt = function(t) {
                        var e = t.fitRatio > 1 ? 1 : t.fitRatio,
                            i = t.container.style,
                            n = e * t.w,
                            o = e * t.h;
                        i.width = n + "px", i.height = o + "px", i.left = t.initialPosition.x + "px", i.top = t.initialPosition.y + "px" }, Ft = function() {
                        if (nt) {
                            var t = nt,
                                e = a.currItem,
                                i = e.fitRatio > 1 ? 1 : e.fitRatio,
                                n = i * e.w,
                                o = i * e.h;
                            t.width = n + "px", t.height = o + "px", t.left = pt.x + "px", t.top = pt.y + "px" } } },
                Qt = function(t) {
                    var e = "";
                    l.escKey && 27 === t.keyCode ? e = "close" : l.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, a[e]())) },
                Zt = function(t) { t && (Z || Q || ot || $) && (t.preventDefault(), t.stopPropagation()) },
                Gt = function() { a.setScrollOffset(0, o.getScrollY()) },
                Ut = {},
                Kt = 0,
                Jt = function(t) { Ut[t] && (Ut[t].raf && D(Ut[t].raf), Kt--, delete Ut[t]) },
                te = function(t) { Ut[t] && Jt(t), Ut[t] || (Kt++, Ut[t] = {}) },
                ee = function() {
                    for (var t in Ut) Ut.hasOwnProperty(t) && Jt(t) },
                ie = function(t, e, i, n, o, a, s) {
                    var r, l = Mt();
                    te(t);
                    var c = function() {
                        if (Ut[t]) {
                            if (r = Mt() - l, r >= n) return Jt(t), a(i), void(s && s());
                            a((i - e) * o(r / n) + e), Ut[t].raf = L(c) } };
                    c() },
                ne = { shout: Et, listen: At, viewportSize: mt, options: l, isMainScrollAnimating: function() {
                        return ot }, getZoomLevel: function() {
                        return y }, getCurrentIndex: function() {
                        return d }, isDragging: function() {
                        return Y }, isZooming: function() {
                        return J }, setScrollOffset: function(t, e) { gt.x = t, V = gt.y = e, Et("updateScrollOffset", gt) }, applyZoomPan: function(t, e, i, n) { pt.x = e, pt.y = i, y = t, Ft(n) }, init: function() {
                        if (!c && !u) {
                            var i;
                            a.framework = o, a.template = t, a.bg = o.getChildByClass(t, "pswp__bg"), R = t.className, c = !0, W = o.detectFeatures(), L = W.raf, D = W.caf, I = W.transform, _ = W.oldIE, a.scrollWrap = o.getChildByClass(t, "pswp__scroll-wrap"), a.container = o.getChildByClass(a.scrollWrap, "pswp__container"), f = a.container.style, a.itemHolders = S = [{ el: a.container.children[0], wrap: 0, index: -1 }, { el: a.container.children[1], wrap: 0, index: -1 }, { el: a.container.children[2], wrap: 0, index: -1 }], S[0].el.style.display = S[2].el.style.display = "none", Xt(), g = { resize: a.updateSize, scroll: Gt, keydown: Qt, click: Zt };
                            var n = W.isOldIOSPhone || W.isOldAndroid || W.isMobileOpera;
                            for (W.animationName && W.transform && !n || (l.showAnimationDuration = l.hideAnimationDuration = 0), i = 0; i < xt.length; i++) a["init" + xt[i]]();
                            if (e) {
                                var s = a.ui = new e(a, o);
                                s.init() }
                            Et("firstUpdate"), d = d || l.index || 0, (isNaN(d) || 0 > d || d >= Je()) && (d = 0), a.currItem = Ke(d), (W.isOldIOSPhone || W.isOldAndroid) && (wt = !1), t.setAttribute("aria-hidden", "false"), l.modal && (wt ? t.style.position = "fixed" : (t.style.position = "absolute", t.style.top = o.getScrollY() + "px")), void 0 === V && (Et("initialLayout"), V = z = o.getScrollY());
                            var h = "pswp--open ";
                            for (l.mainClass && (h += l.mainClass + " "), l.showHideOpacity && (h += "pswp--animate_opacity "), h += F ? "pswp--touch" : "pswp--notouch", h += W.animationName ? " pswp--css_animation" : "", h += W.svg ? " pswp--svg" : "", o.addClass(t, h), a.updateSize(), p = -1, bt = null, i = 0; r > i; i++) Dt((i + p) * yt.x, S[i].el.style);
                            _ || o.bind(a.scrollWrap, v, a), At("initialZoomInEnd", function() { a.setContent(S[0], d - 1), a.setContent(S[2], d + 1), S[0].el.style.display = S[2].el.style.display = "block", l.focus && t.focus(), Nt() }), a.setContent(S[1], d), a.updateCurrItem(), Et("afterInit"), wt || (C = setInterval(function() { Kt || Y || J || y !== a.currItem.initialZoomLevel || a.updateSize() }, 1e3)), o.addClass(t, "pswp--visible") } }, close: function() { c && (c = !1, u = !0, Et("close"), Bt(), ei(a.currItem, null, !0, a.destroy)) }, destroy: function() { Et("destroy"), Qe && clearTimeout(Qe), t.setAttribute("aria-hidden", "true"), t.className = R, C && clearInterval(C), o.unbind(a.scrollWrap, v, a), o.unbind(window, "scroll", a), Se(), ee(), Tt = null }, panTo: function(t, e, i) { i || (t > it.min.x ? t = it.min.x : t < it.max.x && (t = it.max.x), e > it.min.y ? e = it.min.y : e < it.max.y && (e = it.max.y)), pt.x = t, pt.y = e, Ft() }, handleEvent: function(t) { t = t || window.event, g[t.type] && g[t.type](t) }, goTo: function(t) { t = Pt(t);
                        var e = t - d;
                        bt = e, d = t, a.currItem = Ke(d), vt -= e, Rt(yt.x * vt), ee(), ot = !1, a.updateCurrItem() }, next: function() { a.goTo(d + 1) }, prev: function() { a.goTo(d - 1) }, updateCurrZoomItem: function(t) {
                        if (t && Et("beforeChange", 0), S[1].el.children.length) {
                            var e = S[1].el.children[0];
                            nt = o.hasClass(e, "pswp__zoom-wrap") ? e.style : null } else nt = null;
                        it = a.currItem.bounds, b = y = a.currItem.initialZoomLevel, pt.x = it.center.x, pt.y = it.center.y, t && Et("afterChange") }, invalidateCurrItems: function() { k = !0;
                        for (var t = 0; r > t; t++) S[t].item && (S[t].item.needsUpdate = !0) }, updateCurrItem: function(t) {
                        if (0 !== bt) {
                            var e, i = Math.abs(bt);
                            if (!(t && 2 > i)) { a.currItem = Ke(d), kt = !1, Et("beforeChange", bt), i >= r && (p += bt + (bt > 0 ? -r : r), i = r);
                                for (var n = 0; i > n; n++) bt > 0 ? (e = S.shift(), S[r - 1] = e, p++, Dt((p + 2) * yt.x, e.el.style), a.setContent(e, d - i + n + 1 + 1)) : (e = S.pop(), S.unshift(e), p--, Dt(p * yt.x, e.el.style), a.setContent(e, d + i - n - 1 - 1));
                                if (nt && 1 === Math.abs(bt)) {
                                    var o = Ke(P);
                                    o.initialZoomLevel !== y && (ri(o, mt), hi(o), Lt(o)) }
                                bt = 0, a.updateCurrZoomItem(), P = d, Et("afterChange") } } }, updateSize: function(e) {
                        if (!wt && l.modal) {
                            var i = o.getScrollY();
                            if (V !== i && (t.style.top = i + "px", V = i), !e && Ct.x === window.innerWidth && Ct.y === window.innerHeight) return;
                            Ct.x = window.innerWidth, Ct.y = window.innerHeight, t.style.height = Ct.y + "px" }
                        if (mt.x = a.scrollWrap.clientWidth, mt.y = a.scrollWrap.clientHeight, Gt(), yt.x = mt.x + Math.round(mt.x * l.spacing), yt.y = mt.y, Rt(yt.x * vt), Et("beforeResize"), void 0 !== p) {
                            for (var n, s, c, u = 0; r > u; u++) n = S[u], Dt((u + p) * yt.x, n.el.style), c = d + u - 1, l.loop && Je() > 2 && (c = Pt(c)), s = Ke(c), s && (k || s.needsUpdate || !s.bounds) ? (a.cleanSlide(s), a.setContent(n, c), 1 === u && (a.currItem = s, a.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === n.index && c >= 0 && a.setContent(n, c), s && s.container && (ri(s, mt), hi(s), Lt(s));
                            k = !1 }
                        b = y = a.currItem.initialZoomLevel, it = a.currItem.bounds, it && (pt.x = it.center.x, pt.y = it.center.y, Ft(!0)), Et("resize") }, zoomTo: function(t, e, i, n, a) { e && (b = y, be.x = Math.abs(e.x) - pt.x, be.y = Math.abs(e.y) - pt.y, _t(ft, pt));
                        var s = jt(t, !1),
                            r = {};
                        Yt("x", s, r, t), Yt("y", s, r, t);
                        var l = y,
                            c = { x: pt.x, y: pt.y };
                        Vt(r);
                        var u = function(e) { 1 === e ? (y = t, pt.x = r.x, pt.y = r.y) : (y = (t - l) * e + l, pt.x = (r.x - c.x) * e + c.x, pt.y = (r.y - c.y) * e + c.y), a && a(e), Ft(1 === e) };
                        i ? ie("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, u) : u(1) } },
                oe = 30,
                ae = 10,
                se = {},
                re = {},
                le = {},
                ce = {},
                ue = {},
                he = [],
                de = {},
                fe = [],
                pe = {},
                me = 0,
                ve = ht(),
                ge = 0,
                ye = ht(),
                be = ht(),
                we = ht(),
                xe = function(t, e) {
                    return t.x === e.x && t.y === e.y },
                Ce = function(t, e) {
                    return Math.abs(t.x - e.x) < s && Math.abs(t.y - e.y) < s },
                ke = function(t, e) {
                    return pe.x = Math.abs(t.x - e.x), pe.y = Math.abs(t.y - e.y), Math.sqrt(pe.x * pe.x + pe.y * pe.y) },
                Se = function() { G && (D(G), G = null) },
                Pe = function() { Y && (G = L(Pe), Ne()) },
                Te = function() {
                    return !("fit" === l.scaleMode && y === a.currItem.initialZoomLevel) },
                Ae = function(t, e) {
                    return t && t !== document ? t.getAttribute("class") && t.getAttribute("class").indexOf("pswp__scroll-wrap") > -1 ? !1 : e(t) ? t : Ae(t.parentNode, e) : !1 },
                Ee = {},
                Me = function(t, e) {
                    return Ee.prevent = !Ae(t.target, l.isClickableElement), Et("preventDragEvent", t, e, Ee), Ee.prevent },
                Ie = function(t, e) {
                    return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e },
                Oe = function(t, e, i) { i.x = .5 * (t.x + e.x), i.y = .5 * (t.y + e.y) },
                Fe = function(t, e, i) {
                    if (t - N > 50) {
                        var n = fe.length > 2 ? fe.shift() : {};
                        n.x = e, n.y = i, fe.push(n), N = t } },
                Le = function() {
                    var t = pt.y - a.currItem.initialPosition.y;
                    return 1 - Math.abs(t / (mt.y / 2)) },
                De = {},
                Re = {},
                ze = [],
                _e = function(t) {
                    for (; ze.length > 0;) ze.pop();
                    return O ? (ut = 0, he.forEach(function(t) { 0 === ut ? ze[0] = t : 1 === ut && (ze[1] = t), ut++ })) : t.type.indexOf("touch") > -1 ? t.touches && t.touches.length > 0 && (ze[0] = Ie(t.touches[0], De), t.touches.length > 1 && (ze[1] = Ie(t.touches[1], Re))) : (De.x = t.pageX, De.y = t.pageY, De.id = "", ze[0] = De), ze },
                Ve = function(t, e) {
                    var i, n, o, s, r = 0,
                        c = pt[t] + e[t],
                        u = e[t] > 0,
                        h = ye.x + e.x,
                        d = ye.x - de.x;
                    return i = c > it.min[t] || c < it.max[t] ? l.panEndFriction : 1, c = pt[t] + e[t] * i, !l.allowPanToNext && y !== a.currItem.initialZoomLevel || (nt ? "h" !== at || "x" !== t || Q || (u ? (c > it.min[t] && (i = l.panEndFriction, r = it.min[t] - c, n = it.min[t] - ft[t]), (0 >= n || 0 > d) && Je() > 1 ? (s = h, 0 > d && h > de.x && (s = de.x)) : it.min.x !== it.max.x && (o = c)) : (c < it.max[t] && (i = l.panEndFriction, r = c - it.max[t], n = ft[t] - it.max[t]), (0 >= n || d > 0) && Je() > 1 ? (s = h, d > 0 && h < de.x && (s = de.x)) : it.min.x !== it.max.x && (o = c))) : s = h, "x" !== t) ? void(ot || U || y > a.currItem.fitRatio && (pt[t] += e[t] * i)) : (void 0 !== s && (Rt(s, !0), U = s === de.x ? !1 : !0), it.min.x !== it.max.x && (void 0 !== o ? pt.x = o : U || (pt.x += e.x * i)), void 0 !== s) },
                We = function(t) {
                    if (!("mousedown" === t.type && t.button > 0)) {
                        if (Ue) return void t.preventDefault();
                        if (!q || "mousedown" !== t.type) {
                            if (Me(t, !0) && t.preventDefault(), Et("pointerDown"), O) {
                                var e = o.arraySearch(he, t.pointerId, "id");
                                0 > e && (e = he.length), he[e] = { x: t.pageX, y: t.pageY, id: t.pointerId } }
                            var i = _e(t),
                                n = i.length;
                            K = null, ee(), Y && 1 !== n || (Y = st = !0, o.bind(window, m, a), j = ct = rt = $ = U = Z = X = Q = !1, at = null, Et("firstTouchStart", i), _t(ft, pt), dt.x = dt.y = 0, _t(ce, i[0]), _t(ue, ce), de.x = yt.x * vt, fe = [{ x: ce.x, y: ce.y }], N = H = Mt(), jt(y, !0), Se(), Pe()), !J && n > 1 && !ot && !U && (b = y, Q = !1, J = X = !0, dt.y = dt.x = 0, _t(ft, pt), _t(se, i[0]), _t(re, i[1]), Oe(se, re, we), be.x = Math.abs(we.x) - pt.x, be.y = Math.abs(we.y) - pt.y, tt = et = ke(se, re)) } } },
                He = function(t) {
                    if (t.preventDefault(), O) {
                        var e = o.arraySearch(he, t.pointerId, "id");
                        if (e > -1) {
                            var i = he[e];
                            i.x = t.pageX, i.y = t.pageY } }
                    if (Y) {
                        var n = _e(t);
                        if (at || Z || J) K = n;
                        else if (ye.x !== yt.x * vt) at = "h";
                        else {
                            var a = Math.abs(n[0].x - ce.x) - Math.abs(n[0].y - ce.y);
                            Math.abs(a) >= ae && (at = a > 0 ? "h" : "v", K = n) } } },
                Ne = function() {
                    if (K) {
                        var t = K.length;
                        if (0 !== t)
                            if (_t(se, K[0]), le.x = se.x - ce.x, le.y = se.y - ce.y, J && t > 1) {
                                if (ce.x = se.x, ce.y = se.y, !le.x && !le.y && xe(K[1], re)) return;
                                _t(re, K[1]), Q || (Q = !0, Et("zoomGestureStarted"));
                                var e = ke(se, re),
                                    i = Ye(e);
                                i > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (ct = !0);
                                var n = 1,
                                    o = $t(),
                                    s = qt();
                                if (o > i)
                                    if (l.pinchToClose && !ct && b <= a.currItem.initialZoomLevel) {
                                        var r = o - i,
                                            c = 1 - r / (o / 1.2);
                                        It(c), Et("onPinchClose", c), rt = !0 } else n = (o - i) / o, n > 1 && (n = 1), i = o - n * (o / 3);
                                else i > s && (n = (i - s) / (6 * o), n > 1 && (n = 1), i = s + n * o);
                                0 > n && (n = 0), tt = e, Oe(se, re, ve), dt.x += ve.x - we.x, dt.y += ve.y - we.y, _t(we, ve), pt.x = zt("x", i), pt.y = zt("y", i), j = i > y, y = i, Ft() } else {
                                if (!at) return;
                                if (st && (st = !1, Math.abs(le.x) >= ae && (le.x -= K[0].x - ue.x), Math.abs(le.y) >= ae && (le.y -= K[0].y - ue.y)), ce.x = se.x, ce.y = se.y, 0 === le.x && 0 === le.y) return;
                                if ("v" === at && l.closeOnVerticalDrag && !Te()) { dt.y += le.y, pt.y += le.y;
                                    var u = Le();
                                    return $ = !0, Et("onVerticalDrag", u), It(u), void Ft() }
                                Fe(Mt(), se.x, se.y), Z = !0, it = a.currItem.bounds;
                                var h = Ve("x", le);
                                h || (Ve("y", le), Vt(pt), Ft()) } } },
                Be = function(t) {
                    if (W.isOldAndroid) {
                        if (q && "mouseup" === t.type) return;
                        t.type.indexOf("touch") > -1 && (clearTimeout(q), q = setTimeout(function() { q = 0 }, 600)) }
                    Et("pointerUp"), Me(t, !1) && t.preventDefault();
                    var e;
                    if (O) {
                        var i = o.arraySearch(he, t.pointerId, "id");
                        if (i > -1)
                            if (e = he.splice(i, 1)[0], navigator.pointerEnabled) e.type = t.pointerType || "mouse";
                            else {
                                var n = { 4: "mouse", 2: "touch", 3: "pen" };
                                e.type = n[t.pointerType], e.type || (e.type = t.pointerType || "mouse") } }
                    var s, r = _e(t),
                        c = r.length;
                    if ("mouseup" === t.type && (c = 0), 2 === c) return K = null, !0;
                    1 === c && _t(ue, r[0]), 0 !== c || at || ot || (e || ("mouseup" === t.type ? e = { x: t.pageX, y: t.pageY, type: "mouse" } : t.changedTouches && t.changedTouches[0] && (e = { x: t.changedTouches[0].pageX, y: t.changedTouches[0].pageY, type: "touch" })), Et("touchRelease", t, e));
                    var u = -1;
                    if (0 === c && (Y = !1, o.unbind(window, m, a), Se(), J ? u = 0 : -1 !== ge && (u = Mt() - ge)), ge = 1 === c ? Mt() : -1, s = -1 !== u && 150 > u ? "zoom" : "swipe", J && 2 > c && (J = !1, 1 === c && (s = "zoomPointerUp"), Et("zoomGestureEnded")), K = null, Z || Q || ot || $)
                        if (ee(), B || (B = je()), B.calculateSwipeSpeed("x"), $) {
                            var h = Le();
                            if (h < l.verticalDragRange) a.close();
                            else {
                                var d = pt.y,
                                    f = lt;
                                ie("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(t) { pt.y = (a.currItem.initialPosition.y - d) * t + d, It((1 - f) * t + f), Ft() }), Et("onVerticalDrag", 1) } } else {
                            if ((U || ot) && 0 === c) {
                                var p = qe(s, B);
                                if (p) return;
                                s = "zoomPointerUp" }
                            if (!ot) return "swipe" !== s ? void Xe() : void(!U && y > a.currItem.fitRatio && $e(B)) } },
                je = function() {
                    var t, e, i = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function(n) { fe.length > 1 ? (t = Mt() - N + 50, e = fe[fe.length - 2][n]) : (t = Mt() - H, e = ue[n]), i.lastFlickOffset[n] = ce[n] - e, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / t : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1 }, calculateOverBoundsAnimOffset: function(t, e) { i.backAnimStarted[t] || (pt[t] > it.min[t] ? i.backAnimDestination[t] = it.min[t] : pt[t] < it.max[t] && (i.backAnimDestination[t] = it.max[t]), void 0 !== i.backAnimDestination[t] && (i.slowDownRatio[t] = .7, i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t], i.speedDecelerationRatioAbs[t] < .05 && (i.lastFlickSpeed[t] = 0, i.backAnimStarted[t] = !0, ie("bounceZoomPan" + t, pt[t], i.backAnimDestination[t], e || 300, o.easing.sine.out, function(e) { pt[t] = e, Ft() })))) }, calculateAnimOffset: function(t) { i.backAnimStarted[t] || (i.speedDecelerationRatio[t] = i.speedDecelerationRatio[t] * (i.slowDownRatio[t] + i.slowDownRatioReverse[t] - i.slowDownRatioReverse[t] * i.timeDiff / 10), i.speedDecelerationRatioAbs[t] = Math.abs(i.lastFlickSpeed[t] * i.speedDecelerationRatio[t]), i.distanceOffset[t] = i.lastFlickSpeed[t] * i.speedDecelerationRatio[t] * i.timeDiff, pt[t] += i.distanceOffset[t]) }, panAnimLoop: function() {
                            return Ut.zoomPan && (Ut.zoomPan.raf = L(i.panAnimLoop), i.now = Mt(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Ft(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (pt.x = Math.round(pt.x), pt.y = Math.round(pt.y), Ft(), void Jt("zoomPan")) : void 0 } };
                    return i },
                $e = function(t) {
                    return t.calculateSwipeSpeed("y"), it = a.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05 ? (t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0) : (te("zoomPan"), t.lastNow = Mt(), void t.panAnimLoop()) },
                qe = function(t, e) {
                    var i;
                    ot || (me = d);
                    var n;
                    if ("swipe" === t) {
                        var s = ce.x - ue.x,
                            r = e.lastFlickDist.x < 10;
                        s > oe && (r || e.lastFlickOffset.x > 20) ? n = -1 : -oe > s && (r || e.lastFlickOffset.x < -20) && (n = 1) }
                    var c;
                    n && (d += n, 0 > d ? (d = l.loop ? Je() - 1 : 0, c = !0) : d >= Je() && (d = l.loop ? 0 : Je() - 1, c = !0), (!c || l.loop) && (bt += n, vt -= n, i = !0));
                    var u, h = yt.x * vt,
                        f = Math.abs(h - ye.x);
                    return i || h > ye.x == e.lastFlickSpeed.x > 0 ? (u = Math.abs(e.lastFlickSpeed.x) > 0 ? f / Math.abs(e.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, me === d && (i = !1), ot = !0, Et("mainScrollAnimStart"), ie("mainScroll", ye.x, h, u, o.easing.cubic.out, Rt, function() { ee(), ot = !1, me = -1, (i || me !== d) && a.updateCurrItem(), Et("mainScrollAnimComplete") }), i && a.updateCurrItem(!0), i },
                Ye = function(t) {
                    return 1 / et * t * b },
                Xe = function() {
                    var t = y,
                        e = $t(),
                        i = qt();
                    e > y ? t = e : y > i && (t = i);
                    var n, s = 1,
                        r = lt;
                    return rt && !j && !ct && e > y ? (a.close(), !0) : (rt && (n = function(t) { It((s - r) * t + r) }), a.zoomTo(t, 0, 200, o.easing.cubic.out, n), !0) };
            St("Gestures", { publicMethods: { initGestures: function() {
                        var t = function(t, e, i, n, o) { T = t + e, A = t + i, E = t + n, M = o ? t + o : "" };
                        O = W.pointerEvent, O && W.touch && (W.touch = !1), O ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : W.touch ? (t("touch", "start", "move", "end", "cancel"), F = !0) : t("mouse", "down", "move", "up"), m = A + " " + E + " " + M, v = T, O && !F && (F = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = F, g[T] = We, g[A] = He, g[E] = Be, M && (g[M] = g[E]), W.touch && (v += " mousedown", m += " mousemove mouseup", g.mousedown = g[T], g.mousemove = g[A], g.mouseup = g[E]), F || (l.allowPanToNext = !1) } } });
            var Qe, Ze, Ge, Ue, Ke, Je, ti, ei = function(e, i, n, s) { Qe && clearTimeout(Qe), Ue = !0, Ge = !0;
                    var r;
                    e.initialLayout ? (r = e.initialLayout, e.initialLayout = null) : r = l.getThumbBoundsFn && l.getThumbBoundsFn(d);
                    var c = n ? l.hideAnimationDuration : l.showAnimationDuration,
                        u = function() { Jt("initialZoom"), n ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (It(1), i && (i.style.display = "block"), o.addClass(t, "pswp--animated-in"), Et("initialZoom" + (n ? "OutEnd" : "InEnd"))), s && s(), Ue = !1 };
                    if (!c || !r || void 0 === r.x) return Et("initialZoom" + (n ? "Out" : "In")), y = e.initialZoomLevel, _t(pt, e.initialPosition), Ft(), t.style.opacity = n ? 0 : 1, It(1), void(c ? setTimeout(function() { u() }, c) : u());
                    var f = function() {
                        var i = h,
                            s = !a.currItem.src || a.currItem.loadError || l.showHideOpacity;
                        e.miniImg && (e.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (y = r.w / e.w, pt.x = r.x, pt.y = r.y - z, a[s ? "template" : "bg"].style.opacity = .001, Ft()), te("initialZoom"), n && !i && o.removeClass(t, "pswp--animated-in"), s && (n ? o[(i ? "remove" : "add") + "Class"](t, "pswp--animate_opacity") : setTimeout(function() { o.addClass(t, "pswp--animate_opacity") }, 30)), Qe = setTimeout(function() {
                            if (Et("initialZoom" + (n ? "Out" : "In")), n) {
                                var a = r.w / e.w,
                                    l = { x: pt.x, y: pt.y },
                                    h = y,
                                    d = lt,
                                    f = function(e) { 1 === e ? (y = a, pt.x = r.x, pt.y = r.y - V) : (y = (a - h) * e + h, pt.x = (r.x - l.x) * e + l.x, pt.y = (r.y - V - l.y) * e + l.y), Ft(), s ? t.style.opacity = 1 - e : It(d - e * d) };
                                i ? ie("initialZoom", 0, 1, c, o.easing.cubic.out, f, u) : (f(1), Qe = setTimeout(u, c + 20)) } else y = e.initialZoomLevel, _t(pt, e.initialPosition), Ft(), It(1), s ? t.style.opacity = 1 : It(1), Qe = setTimeout(u, c + 20) }, n ? 25 : 90) };
                    f() },
                ii = {},
                ni = [],
                oi = { index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function() {
                        return Ze.length } },
                ai = function() {
                    return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } } },
                si = function(t, e, i) {
                    var n = t.bounds;
                    n.center.x = Math.round((ii.x - e) / 2), n.center.y = Math.round((ii.y - i) / 2) + t.vGap.top, n.max.x = e > ii.x ? Math.round(ii.x - e) : n.center.x, n.max.y = i > ii.y ? Math.round(ii.y - i) + t.vGap.top : n.center.y, n.min.x = e > ii.x ? 0 : n.center.x, n.min.y = i > ii.y ? t.vGap.top : n.center.y },
                ri = function(t, e, i) {
                    if (t.src && !t.loadError) {
                        var n = !i;
                        if (n && (t.vGap || (t.vGap = { top: 0, bottom: 0 }), Et("parseVerticalMargin", t)), ii.x = e.x, ii.y = e.y - t.vGap.top - t.vGap.bottom, n) {
                            var o = ii.x / t.w,
                                a = ii.y / t.h;
                            t.fitRatio = a > o ? o : a;
                            var s = l.scaleMode; "orig" === s ? i = 1 : "fit" === s && (i = t.fitRatio), i > 1 && (i = 1), t.initialZoomLevel = i, t.bounds || (t.bounds = ai()) }
                        if (!i) return;
                        return si(t, t.w * i, t.h * i), n && i === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds }
                    return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = ai(), t.initialPosition = t.bounds.center, t.bounds },
                li = function(t, e, i, n, o, s) { e.loadError || n && (e.imageAppended = !0, hi(e, n, e === a.currItem && kt), i.appendChild(n), s && setTimeout(function() { e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null) }, 500)) },
                ci = function(t) { t.loading = !0, t.loaded = !1;
                    var e = t.img = o.createEl("pswp__img", "img"),
                        i = function() { t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null };
                    return e.onload = i, e.onerror = function() { t.loadError = !0, i() }, e.src = t.src, e },
                ui = function(t, e) {
                    return t.src && t.loadError && t.container ? (e && (t.container.innerHTML = ""), t.container.innerHTML = l.errorMsg.replace("%url%", t.src), !0) : void 0 },
                hi = function(t, e, i) {
                    if (t.src) { e || (e = t.container.lastChild);
                        var n = i ? t.w : Math.round(t.w * t.fitRatio),
                            o = i ? t.h : Math.round(t.h * t.fitRatio);
                        t.placeholder && !t.loaded && (t.placeholder.style.width = n + "px", t.placeholder.style.height = o + "px"), e.style.width = n + "px", e.style.height = o + "px" } },
                di = function() {
                    if (ni.length) {
                        for (var t, e = 0; e < ni.length; e++) t = ni[e], t.holder.index === t.index && li(t.index, t.item, t.baseDiv, t.img, !1, t.clearPlaceholder);
                        ni = [] } };
            St("Controller", {
                publicMethods: {
                    lazyLoadItem: function(t) { t = Pt(t);
                        var e = Ke(t);
                        e && (!e.loaded && !e.loading || k) && (Et("gettingData", t, e), e.src && ci(e)) },
                    initController: function() { o.extend(l, oi, !0), a.items = Ze = i, Ke = a.getItemAt, Je = l.getNumItemsFn, ti = l.loop, Je() < 3 && (l.loop = !1), At("beforeChange", function(t) {
                            var e, i = l.preload,
                                n = null === t ? !0 : t >= 0,
                                o = Math.min(i[0], Je()),
                                s = Math.min(i[1], Je());
                            for (e = 1;
                                (n ? s : o) >= e; e++) a.lazyLoadItem(d + e);
                            for (e = 1;
                                (n ? o : s) >= e; e++) a.lazyLoadItem(d - e) }), At("initialLayout", function() { a.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(d) }), At("mainScrollAnimComplete", di), At("initialZoomInEnd", di), At("destroy", function() {
                            for (var t, e = 0; e < Ze.length; e++) t = Ze[e], t.container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
                            ni = null }) },
                    getItemAt: function(t) {
                        return t >= 0 && void 0 !== Ze[t] ? Ze[t] : !1 },
                    allowProgressiveImg: function() {
                        return l.forceProgressiveLoading || !F || l.mouseUsed || screen.width > 1200 },
                    setContent: function(t, e) {
                        l.loop && (e = Pt(e));
                        var i = a.getItemAt(t.index);
                        i && (i.container = null);
                        var n, s = a.getItemAt(e);
                        if (!s) return void(t.el.innerHTML = "");
                        Et("gettingData", e, s), t.index = e, t.item = s;
                        var r = s.container = o.createEl("pswp__zoom-wrap");
                        if (!s.src && s.html && (s.html.tagName ? r.appendChild(s.html) : r.innerHTML = s.html), ui(s), ri(s, mt), !s.src || s.loadError || s.loaded) s.src && !s.loadError && (n = o.createEl("pswp__img", "img"),
                            n.style.opacity = 1, n.src = s.src, hi(s, n), li(e, s, r, n, !0));
                        else {
                            if (s.loadComplete = function(i) {
                                    if (c) {
                                        if (t && t.index === e) {
                                            if (ui(i, !0)) return i.loadComplete = i.img = null, ri(i, mt), Lt(i), void(t.index === d && a.updateCurrZoomItem());
                                            i.imageAppended ? !Ue && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : W.transform && (ot || Ue) ? ni.push({ item: i, baseDiv: r, img: i.img, index: e, holder: t, clearPlaceholder: !0 }) : li(e, i, r, i.img, ot || Ue, !0) }
                                        i.loadComplete = null, i.img = null, Et("imageLoadComplete", e, i) } }, o.features.transform) {
                                var u = "pswp__img pswp__img--placeholder";
                                u += s.msrc ? "" : " pswp__img--placeholder--blank";
                                var h = o.createEl(u, s.msrc ? "img" : "");
                                s.msrc && (h.src = s.msrc), hi(s, h), r.appendChild(h), s.placeholder = h }
                            s.loading || ci(s), a.allowProgressiveImg() && (!Ge && W.transform ? ni.push({ item: s, baseDiv: r, img: s.img, index: e, holder: t }) : li(e, s, r, s.img, !0, !0)) }
                        Ge || e !== d ? Lt(s) : (nt = r.style, ei(s, n || s.img)), t.el.innerHTML = "", t.el.appendChild(r)
                    },
                    cleanSlide: function(t) { t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1 }
                }
            });
            var fi, pi = {},
                mi = function(t, e, i) {
                    var n = document.createEvent("CustomEvent"),
                        o = { origEvent: t, target: t.target, releasePoint: e, pointerType: i || "touch" };
                    n.initCustomEvent("pswpTap", !0, !0, o), t.target.dispatchEvent(n) };
            St("Tap", { publicMethods: { initTap: function() { At("firstTouchStart", a.onTapStart), At("touchRelease", a.onTapRelease), At("destroy", function() { pi = {}, fi = null }) }, onTapStart: function(t) { t.length > 1 && (clearTimeout(fi), fi = null) }, onTapRelease: function(t, e) {
                        if (e && !Z && !X && !Kt) {
                            var i = e;
                            if (fi && (clearTimeout(fi), fi = null, Ce(i, pi))) return void Et("doubleTap", i);
                            if ("mouse" === e.type) return void mi(t, e, "mouse");
                            var n = t.target.tagName.toUpperCase();
                            if ("BUTTON" === n || o.hasClass(t.target, "pswp__single-tap")) return void mi(t, e);
                            _t(pi, i), fi = setTimeout(function() { mi(t, e), fi = null }, 300) } } } });
            var vi;
            St("DesktopZoom", { publicMethods: { initDesktopZoom: function() { _ || (F ? At("mouseUsed", function() { a.setupDesktopZoom() }) : a.setupDesktopZoom(!0)) }, setupDesktopZoom: function(e) { vi = {};
                        var i = "wheel mousewheel DOMMouseScroll";
                        At("bindEvents", function() { o.bind(t, i, a.handleMouseWheel) }), At("unbindEvents", function() { vi && o.unbind(t, i, a.handleMouseWheel) }), a.mouseZoomedIn = !1;
                        var n, s = function() { a.mouseZoomedIn && (o.removeClass(t, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > y ? o.addClass(t, "pswp--zoom-allowed") : o.removeClass(t, "pswp--zoom-allowed"), r() },
                            r = function() { n && (o.removeClass(t, "pswp--dragging"), n = !1) };
                        At("resize", s), At("afterChange", s), At("pointerDown", function() { a.mouseZoomedIn && (n = !0, o.addClass(t, "pswp--dragging")) }), At("pointerUp", r), e || s() }, handleMouseWheel: function(t) {
                        if (y <= a.currItem.fitRatio) return l.modal && (!l.closeOnScroll || Kt || Y ? t.preventDefault() : I && Math.abs(t.deltaY) > 2 && (h = !0, a.close())), !0;
                        if (t.stopPropagation(), vi.x = 0, "deltaX" in t) 1 === t.deltaMode ? (vi.x = 18 * t.deltaX, vi.y = 18 * t.deltaY) : (vi.x = t.deltaX, vi.y = t.deltaY);
                        else if ("wheelDelta" in t) t.wheelDeltaX && (vi.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? vi.y = -.16 * t.wheelDeltaY : vi.y = -.16 * t.wheelDelta;
                        else {
                            if (!("detail" in t)) return;
                            vi.y = t.detail }
                        jt(y, !0);
                        var e = pt.x - vi.x,
                            i = pt.y - vi.y;
                        (l.modal || e <= it.min.x && e >= it.max.x && i <= it.min.y && i >= it.max.y) && t.preventDefault(), a.panTo(e, i) }, toggleDesktopZoom: function(e) { e = e || { x: mt.x / 2 + gt.x, y: mt.y / 2 + gt.y };
                        var i = l.getDoubleTapZoom(!0, a.currItem),
                            n = y === i;
                        a.mouseZoomedIn = !n, a.zoomTo(n ? a.currItem.initialZoomLevel : i, e, 333), o[(n ? "remove" : "add") + "Class"](t, "pswp--zoomed-in") } } });
            var gi, yi, bi, wi, xi, Ci, ki, Si, Pi, Ti, Ai, Ei, Mi = { history: !0, galleryUID: 1 },
                Ii = function() {
                    return Ai.hash.substring(1) },
                Oi = function() { gi && clearTimeout(gi), bi && clearTimeout(bi) },
                Fi = function() {
                    var t = Ii(),
                        e = {};
                    if (t.length < 5) return e;
                    var i, n = t.split("&");
                    for (i = 0; i < n.length; i++)
                        if (n[i]) {
                            var o = n[i].split("=");
                            o.length < 2 || (e[o[0]] = o[1]) }
                    if (l.galleryPIDs) {
                        var a = e.pid;
                        for (e.pid = 0, i = 0; i < Ze.length; i++)
                            if (Ze[i].pid === a) { e.pid = i;
                                break } } else e.pid = parseInt(e.pid, 10) - 1;
                    return e.pid < 0 && (e.pid = 0), e },
                Li = function() {
                    if (bi && clearTimeout(bi), Kt || Y) return void(bi = setTimeout(Li, 500));
                    wi ? clearTimeout(yi) : wi = !0;
                    var t = d + 1,
                        e = Ke(d);
                    e.hasOwnProperty("pid") && (t = e.pid);
                    var i = ki + "&gid=" + l.galleryUID + "&pid=" + t;
                    Si || -1 === Ai.hash.indexOf(i) && (Ti = !0);
                    var n = Ai.href.split("#")[0] + "#" + i;
                    Ei ? "#" + i !== window.location.hash && history[Si ? "replaceState" : "pushState"]("", document.title, n) : Si ? Ai.replace(n) : Ai.hash = i, Si = !0, yi = setTimeout(function() { wi = !1 }, 60) };
            St("History", { publicMethods: { initHistory: function() {
                        if (o.extend(l, Mi, !0), l.history) { Ai = window.location, Ti = !1, Pi = !1, Si = !1, ki = Ii(), Ei = "pushState" in history, ki.indexOf("gid=") > -1 && (ki = ki.split("&gid=")[0], ki = ki.split("?gid=")[0]), At("afterChange", a.updateURL), At("unbindEvents", function() { o.unbind(window, "hashchange", a.onHashChange) });
                            var t = function() { Ci = !0, Pi || (Ti ? history.back() : ki ? Ai.hash = ki : Ei ? history.pushState("", document.title, Ai.pathname + Ai.search) : Ai.hash = ""), Oi() };
                            At("unbindEvents", function() { h && t() }), At("destroy", function() { Ci || t() }), At("firstUpdate", function() { d = Fi().pid });
                            var e = ki.indexOf("pid=");
                            e > -1 && (ki = ki.substring(0, e), "&" === ki.slice(-1) && (ki = ki.slice(0, -1))), setTimeout(function() { c && o.bind(window, "hashchange", a.onHashChange) }, 40) } }, onHashChange: function() {
                        return Ii() === ki ? (Pi = !0, void a.close()) : void(wi || (xi = !0, a.goTo(Fi().pid), xi = !1)) }, updateURL: function() { Oi(), xi || (Si ? gi = setTimeout(Li, 800) : Li()) } } }), o.extend(a, ne)
        };
        return t
    }), ! function(t, e) { "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipeUI_Default = e() }(this, function() { "use strict";
        var t = function(t, e) {
            var i, n, o, a, s, r, l, c, u, h, d, f, p, m, v, g, y, b, w, x = this,
                C = !1,
                k = !0,
                S = !0,
                P = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function(t, e) {
                        return t.title ? (e.children[0].innerHTML = t.title, !0) : (e.children[0].innerHTML = "", !1) }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function() {
                        return t.currItem.src || "" }, getPageURLForShare: function() {
                        return window.location.href }, getTextForShare: function() {
                        return t.currItem.title || "" }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
                T = function(t) {
                    if (g) return !0;
                    t = t || window.event, v.timeToIdle && v.mouseUsed && !u && z();
                    for (var i, n, o = t.target || t.srcElement, a = o.getAttribute("class") || "", s = 0; s < $.length; s++) i = $[s], i.onTap && a.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
                    if (n) { t.stopPropagation && t.stopPropagation(), g = !0;
                        var r = e.features.isOldAndroid ? 600 : 30;
                        y = setTimeout(function() { g = !1 }, r) } },
                A = function() {
                    return !t.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth },
                E = function(t, i, n) { e[(n ? "add" : "remove") + "Class"](t, "pswp__" + i) },
                M = function() {
                    var t = 1 === v.getNumItemsFn();
                    t !== m && (E(n, "ui--one-slide", t), m = t) },
                I = function() { E(l, "share-modal--hidden", S) },
                O = function() {
                    return S = !S, S ? (e.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() { S && I() }, 300)) : (I(), setTimeout(function() { S || e.addClass(l, "pswp__share-modal--fade-in") }, 30)), S || L(), !1 },
                F = function(e) { e = e || window.event;
                    var i = e.target || e.srcElement;
                    return t.shout("shareLinkClick", e, i), i.href ? i.hasAttribute("download") ? !0 : (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), S || O(), !1) : !1 },
                L = function() {
                    for (var t, e, i, n, o, a = "", s = 0; s < v.shareButtons.length; s++) t = v.shareButtons[s], i = v.getImageURLForShare(t), n = v.getPageURLForShare(t), o = v.getTextForShare(t), e = t.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(i)).replace("{{raw_image_url}}", i).replace("{{text}}", encodeURIComponent(o)), a += '<a href="' + e + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>", v.parseShareButtonOut && (a = v.parseShareButtonOut(t, a));
                    l.children[0].innerHTML = a, l.children[0].onclick = F },
                D = function(t) {
                    for (var i = 0; i < v.closeElClasses.length; i++)
                        if (e.hasClass(t, "pswp__" + v.closeElClasses[i])) return !0 },
                R = 0,
                z = function() { clearTimeout(w), R = 0, u && x.setIdle(!1) },
                _ = function(t) { t = t ? t : window.event;
                    var e = t.relatedTarget || t.toElement;
                    e && "HTML" !== e.nodeName || (clearTimeout(w), w = setTimeout(function() { x.setIdle(!0) }, v.timeToIdleOutside)) },
                V = function() { v.fullscreenEl && !e.features.isOldAndroid && (i || (i = x.getFullscreenAPI()), i ? (e.bind(document, i.eventK, x.updateFullscreen), x.updateFullscreen(), e.addClass(t.template, "pswp--supports-fs")) : e.removeClass(t.template, "pswp--supports-fs")) },
                W = function() { v.preloaderEl && (H(!0), h("beforeChange", function() { clearTimeout(p), p = setTimeout(function() { t.currItem && t.currItem.loading ? (!t.allowProgressiveImg() || t.currItem.img && !t.currItem.img.naturalWidth) && H(!1) : H(!0) }, v.loadingIndicatorDelay) }), h("imageLoadComplete", function(e, i) { t.currItem === i && H(!0) })) },
                H = function(t) { f !== t && (E(d, "preloader--active", !t), f = t) },
                N = function(t) {
                    var i = t.vGap;
                    if (A()) {
                        var s = v.barsSize;
                        if (v.captionEl && "auto" === s.bottom)
                            if (a || (a = e.createEl("pswp__caption pswp__caption--fake"), a.appendChild(e.createEl("pswp__caption__center")), n.insertBefore(a, o), e.addClass(n, "pswp__ui--fit")), v.addCaptionHTMLFn(t, a, !0)) {
                                var r = a.clientHeight;
                                i.bottom = parseInt(r, 10) || 44 } else i.bottom = s.top;
                        else i.bottom = "auto" === s.bottom ? 0 : s.bottom;
                        i.top = s.top } else i.top = i.bottom = 0 },
                B = function() { v.timeToIdle && h("mouseUsed", function() { e.bind(document, "mousemove", z), e.bind(document, "mouseout", _), b = setInterval(function() { R++, 2 === R && x.setIdle(!0) }, v.timeToIdle / 2) }) },
                j = function() { h("onVerticalDrag", function(t) { k && .95 > t ? x.hideControls() : !k && t >= .95 && x.showControls() });
                    var t;
                    h("onPinchClose", function(e) { k && .9 > e ? (x.hideControls(), t = !0) : t && !k && e > .9 && x.showControls() }), h("zoomGestureEnded", function() { t = !1, t && !k && x.showControls() }) },
                $ = [{ name: "caption", option: "captionEl", onInit: function(t) { o = t } }, { name: "share-modal", option: "shareEl", onInit: function(t) { l = t }, onTap: function() { O() } }, { name: "button--share", option: "shareEl", onInit: function(t) { r = t }, onTap: function() { O() } }, { name: "button--zoom", option: "zoomEl", onTap: t.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function(t) { s = t } }, { name: "button--close", option: "closeEl", onTap: t.close }, { name: "button--arrow--left", option: "arrowEl", onTap: t.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: t.next }, { name: "button--fs", option: "fullscreenEl", onTap: function() { i.isFullscreen() ? i.exit() : i.enter() } }, { name: "preloader", option: "preloaderEl", onInit: function(t) { d = t } }],
                q = function() {
                    var t, i, o, a = function(n) {
                        if (n)
                            for (var a = n.length, s = 0; a > s; s++) { t = n[s], i = t.className;
                                for (var r = 0; r < $.length; r++) o = $[r], i.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (e.removeClass(t, "pswp__element--disabled"), o.onInit && o.onInit(t)) : e.addClass(t, "pswp__element--disabled")) } };
                    a(n.children);
                    var s = e.getChildByClass(n, "pswp__top-bar");
                    s && a(s.children) };
            x.init = function() { e.extend(t.options, P, !0), v = t.options, n = e.getChildByClass(t.scrollWrap, "pswp__ui"), h = t.listen, j(), h("beforeChange", x.update), h("doubleTap", function(e) {
                    var i = t.currItem.initialZoomLevel;
                    t.getZoomLevel() !== i ? t.zoomTo(i, e, 333) : t.zoomTo(v.getDoubleTapZoom(!1, t.currItem), e, 333) }), h("preventDragEvent", function(t, e, i) {
                    var n = t.target || t.srcElement;
                    n && n.getAttribute("class") && t.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1) }), h("bindEvents", function() { e.bind(n, "pswpTap click", T), e.bind(t.scrollWrap, "pswpTap", x.onGlobalTap), t.likelyTouchDevice || e.bind(t.scrollWrap, "mouseover", x.onMouseOver) }), h("unbindEvents", function() { S || O(), b && clearInterval(b), e.unbind(document, "mouseout", _), e.unbind(document, "mousemove", z), e.unbind(n, "pswpTap click", T), e.unbind(t.scrollWrap, "pswpTap", x.onGlobalTap), e.unbind(t.scrollWrap, "mouseover", x.onMouseOver), i && (e.unbind(document, i.eventK, x.updateFullscreen), i.isFullscreen() && (v.hideAnimationDuration = 0, i.exit()), i = null) }), h("destroy", function() { v.captionEl && (a && n.removeChild(a), e.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), e.removeClass(n, "pswp__ui--over-close"), e.addClass(n, "pswp__ui--hidden"), x.setIdle(!1) }), v.showAnimationDuration || e.removeClass(n, "pswp__ui--hidden"), h("initialZoomIn", function() { v.showAnimationDuration && e.removeClass(n, "pswp__ui--hidden") }), h("initialZoomOut", function() { e.addClass(n, "pswp__ui--hidden") }), h("parseVerticalMargin", N), q(), v.shareEl && r && l && (S = !0), M(), B(), V(), W() }, x.setIdle = function(t) { u = t, E(n, "ui--idle", t) }, x.update = function() { k && t.currItem ? (x.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(t.currItem, o), E(o, "caption--empty", !t.currItem.title)), C = !0) : C = !1, S || O(), M() }, x.updateFullscreen = function(n) { n && setTimeout(function() { t.setScrollOffset(0, e.getScrollY()) }, 50), e[(i.isFullscreen() ? "add" : "remove") + "Class"](t.template, "pswp--fs") }, x.updateIndexIndicator = function() { v.counterEl && (s.innerHTML = t.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn()) }, x.onGlobalTap = function(i) { i = i || window.event;
                var n = i.target || i.srcElement;
                if (!g)
                    if (i.detail && "mouse" === i.detail.pointerType) {
                        if (D(n)) return void t.close();
                        e.hasClass(n, "pswp__img") && (1 === t.getZoomLevel() && t.getZoomLevel() <= t.currItem.fitRatio ? v.clickToCloseNonZoomable && t.close() : t.toggleDesktopZoom(i.detail.releasePoint)) } else if (v.tapToToggleControls && (k ? x.hideControls() : x.showControls()), v.tapToClose && (e.hasClass(n, "pswp__img") || D(n))) return void t.close() }, x.onMouseOver = function(t) { t = t || window.event;
                var e = t.target || t.srcElement;
                E(n, "ui--over-close", D(e)) }, x.hideControls = function() { e.addClass(n, "pswp__ui--hidden"), k = !1 }, x.showControls = function() { k = !0, C || x.update(), e.removeClass(n, "pswp__ui--hidden") }, x.supportsFullscreen = function() {
                var t = document;
                return !!(t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen) }, x.getFullscreenAPI = function() {
                var e, i = document.documentElement,
                    n = "fullscreenchange";
                return i.requestFullscreen ? e = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: n } : i.mozRequestFullScreen ? e = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + n } : i.webkitRequestFullscreen ? e = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + n } : i.msRequestFullscreen && (e = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), e && (e.enter = function() {
                    return c = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? t.template[this.enterK]() : void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT) }, e.exit = function() {
                    return v.closeOnScroll = c, document[this.exitK]() }, e.isFullscreen = function() {
                    return document[this.elementK] }), e } };
        return t });
var initPhotoSwipeFromDOM = function(t) {
    for (var e = function(t) {
            for (var o, a, s, r, e = t.childNodes, i = e.length, n = [], l = 0; i > l; l++) o = e[l], 1 === o.nodeType && (a = o.children[0], s = a.getAttribute("data-size").split("x"), r = { src: a.getAttribute("href"), w: parseInt(s[0], 10), h: parseInt(s[1], 10) }, o.children.length > 1 && (r.title = o.children[1].innerHTML), a.children.length > 0 && (r.msrc = a.children[0].getAttribute("src")), r.el = o, n.push(r));
            return n }, i = function u(t, e) {
            return t && (e(t) ? t : u(t.parentNode, e)) }, n = function(t) { t = t || window.event, t.preventDefault ? t.preventDefault() : t.returnValue = !1;
            var e = t.target || t.srcElement,
                n = i(e, function(t) {
                    return t.tagName && "FIGURE" === t.tagName.toUpperCase() });
            if (n) {
                for (var c, o = n.parentNode, s = n.parentNode.childNodes, r = s.length, l = 0, u = 0; r > u; u++)
                    if (1 === s[u].nodeType) {
                        if (s[u] === n) { c = l;
                            break }
                        l++ }
                return c >= 0 && a(c, o), !1 } }, o = function() {
            var t = window.location.hash.substring(1),
                e = {};
            if (t.length < 5) return e;
            for (var i = t.split("&"), n = 0; n < i.length; n++)
                if (i[n]) {
                    var o = i[n].split("=");
                    o.length < 2 || (e[o[0]] = o[1]) }
            return e.gid && (e.gid = parseInt(e.gid, 10)), e }, a = function(t, i, n, o) {
            var s, r, l, a = document.querySelectorAll(".pswp")[0];
            if (l = e(i), r = { galleryUID: i.getAttribute("data-pswp-uid"), getThumbBoundsFn: function(t) {
                        var e = l[t].el.getElementsByTagName("img")[0],
                            i = window.pageYOffset || document.documentElement.scrollTop,
                            n = e.getBoundingClientRect();
                        return { x: n.left, y: n.top + i, w: n.width } } }, o)
                if (r.galleryPIDs) {
                    for (var c = 0; c < l.length; c++)
                        if (l[c].pid == t) { r.index = c;
                            break } } else r.index = parseInt(t, 10) - 1;
            else r.index = parseInt(t, 10);
            isNaN(r.index) || (n && (r.showAnimationDuration = 0), s = new PhotoSwipe(a, PhotoSwipeUI_Default, l, r), s.init()) }, s = document.querySelectorAll(t), r = 0, l = s.length; l > r; r++) s[r].setAttribute("data-pswp-uid", r + 1), s[r].onclick = n;
    var c = o();
    c.pid && c.gid && a(c.pid, s[c.gid - 1], !0, !0) };
initPhotoSwipeFromDOM(".mdb-lightbox"),
    function(t) { t.fn.sticky = function(e) {
            function o() {
                return "number" == typeof n.zIndex ? !0 : !1 }

            function s() {
                return 0 < t(n.stopper).length || "number" == typeof n.stopper ? !0 : !1 }
            var i = { topSpacing: 0, zIndex: "", stopper: ".sticky-stopper" },
                n = t.extend({}, i, e),
                a = o(),
                r = s();
            return this.each(function() {
                function f() {
                    var n = d.scrollTop();
                    if (r && "string" == typeof h) var o = t(h).offset().top,
                        f = o - i - s;
                    else if (r && "number" == typeof h) var f = h;
                    if (n > c) {
                        if (e.after(u).css({ position: "fixed", top: s }), a && e.css({ zIndex: l }), r && n > f) {
                            var p = f - n + s;
                            e.css({ top: p }) } } else e.css({ position: "static", top: null, left: null }), u.remove() }
                var e = t(this),
                    i = e.outerHeight(),
                    o = e.outerWidth(),
                    s = n.topSpacing,
                    l = n.zIndex,
                    c = e.offset().top - s,
                    u = t("<div></div>").width(o).height(i).addClass("sticky-placeholder"),
                    h = n.stopper,
                    d = t(window);
                d.bind("scroll", f) }) } }(jQuery);
