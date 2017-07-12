/*! Explore prototype 2017-06-30 */
window.Modernizr = function(a, b, c) {
    function d(a) {
        t.cssText = a;
    }
    function e(a, b) {
        return d(x.join(a + ";") + (b || ""));
    }
    function f(a, b) {
        return typeof a === b;
    }
    function g(a, b) {
        return !!~("" + a).indexOf(b);
    }
    function h(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!g(e, "-") && t[e] !== c) return "pfx" == b ? e : !0;
        }
        return !1;
    }
    function i(a, b, d) {
        for (var e in a) {
            var g = b[a[e]];
            if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g;
        }
        return !1;
    }
    function j(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + z.join(d + " ") + d).split(" ");
        return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), 
        i(e, b, c));
    }
    function k() {
        o.input = function(c) {
            for (var d = 0, e = c.length; e > d; d++) E[c[d]] = !!(c[d] in u);
            return E.list && (E.list = !(!b.createElement("datalist") || !a.HTMLDataListElement)), 
            E;
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), 
        o.inputtypes = function(a) {
            for (var d, e, f, g = 0, h = a.length; h > g; g++) u.setAttribute("type", e = a[g]), 
            d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", 
            /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, 
            d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, 
            q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)), 
            D[a[g]] = !!d;
            return D;
        }("search tel url email datetime date month week time datetime-local number range color".split(" "));
    }
    var l, m, n = "2.7.1", o = {}, p = !0, q = b.documentElement, r = "modernizr", s = b.createElement(r), t = s.style, u = b.createElement("input"), v = ":)", w = {}.toString, x = " -webkit- -moz- -o- -ms- ".split(" "), y = "Webkit Moz O ms", z = y.split(" "), A = y.toLowerCase().split(" "), B = {
        svg: "http://www.w3.org/2000/svg"
    }, C = {}, D = {}, E = {}, F = [], G = F.slice, H = function(a, c, d, e) {
        var f, g, h, i, j = b.createElement("div"), k = b.body, l = k || b.createElement("body");
        if (parseInt(d, 10)) for (;d--; ) h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), 
        j.appendChild(h);
        return f = [ "&#173;", '<style id="s', r, '">', a, "</style>" ].join(""), j.id = r, 
        (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", 
        i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), 
        k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), 
        !!g;
    }, I = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c) return c(b).matches;
        var d;
        return H("@media " + b + " { #" + r + " { position: absolute; } }", function(b) {
            d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position;
        }), d;
    }, J = function() {
        function a(a, e) {
            e = e || b.createElement(d[a] || "div"), a = "on" + a;
            var g = a in e;
            return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), 
            g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), 
            e = null, g;
        }
        var d = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return a;
    }(), K = {}.hasOwnProperty;
    m = f(K, "undefined") || f(K.call, "undefined") ? function(a, b) {
        return b in a && f(a.constructor.prototype[b], "undefined");
    } : function(a, b) {
        return K.call(a, b);
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError();
        var c = G.call(arguments, 1), d = function() {
            if (this instanceof d) {
                var e = function() {};
                e.prototype = b.prototype;
                var f = new e(), g = b.apply(f, c.concat(G.call(arguments)));
                return Object(g) === g ? g : f;
            }
            return b.apply(a, c.concat(G.call(arguments)));
        };
        return d;
    }), C.flexbox = function() {
        return j("flexWrap");
    }, C.flexboxlegacy = function() {
        return j("boxDirection");
    }, C.canvas = function() {
        var a = b.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"));
    }, C.canvastext = function() {
        return !(!o.canvas || !f(b.createElement("canvas").getContext("2d").fillText, "function"));
    }, C.webgl = function() {
        return !!a.WebGLRenderingContext;
    }, C.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H([ "@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(a) {
            c = 9 === a.offsetTop;
        }), c;
    }, C.geolocation = function() {
        return "geolocation" in navigator;
    }, C.postmessage = function() {
        return !!a.postMessage;
    }, C.websqldatabase = function() {
        return !!a.openDatabase;
    }, C.indexedDB = function() {
        return !!j("indexedDB", a);
    }, C.hashchange = function() {
        return J("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
    }, C.history = function() {
        return !(!a.history || !history.pushState);
    }, C.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a;
    }, C.websockets = function() {
        return "WebSocket" in a || "MozWebSocket" in a;
    }, C.rgba = function() {
        return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba");
    }, C.hsla = function() {
        return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla");
    }, C.multiplebgs = function() {
        return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background);
    }, C.backgroundsize = function() {
        return j("backgroundSize");
    }, C.borderimage = function() {
        return j("borderImage");
    }, C.borderradius = function() {
        return j("borderRadius");
    }, C.boxshadow = function() {
        return j("boxShadow");
    }, C.textshadow = function() {
        return "" === b.createElement("div").style.textShadow;
    }, C.opacity = function() {
        return e("opacity:.55"), /^0.55$/.test(t.opacity);
    }, C.cssanimations = function() {
        return j("animationName");
    }, C.csscolumns = function() {
        return j("columnCount");
    }, C.cssgradients = function() {
        var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);";
        return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), 
        g(t.backgroundImage, "gradient");
    }, C.cssreflections = function() {
        return j("boxReflect");
    }, C.csstransforms = function() {
        return !!j("transform");
    }, C.csstransforms3d = function() {
        var a = !!j("perspective");
        return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight;
        }), a;
    }, C.csstransitions = function() {
        return j("transition");
    }, C.fontface = function() {
        var a;
        return H('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0]);
        }), a;
    }, C.generatedcontent = function() {
        var a;
        return H([ "#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}' ].join(""), function(b) {
            a = b.offsetHeight >= 3;
        }), a;
    }, C.video = function() {
        var a = b.createElement("video"), c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        } catch (d) {}
        return c;
    }, C.audio = function() {
        var a = b.createElement("audio"), c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), 
            c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), 
            c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""));
        } catch (d) {}
        return c;
    }, C.localstorage = function() {
        try {
            return localStorage.setItem(r, r), localStorage.removeItem(r), !0;
        } catch (a) {
            return !1;
        }
    }, C.sessionstorage = function() {
        try {
            return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0;
        } catch (a) {
            return !1;
        }
    }, C.webworkers = function() {
        return !!a.Worker;
    }, C.applicationcache = function() {
        return !!a.applicationCache;
    }, C.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect;
    }, C.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg;
    }, C.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")));
    }, C.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")));
    };
    for (var L in C) m(C, L) && (l = L.toLowerCase(), o[l] = C[L](), F.push((o[l] ? "" : "no-") + l));
    return o.input || k(), o.addTest = function(a, b) {
        if ("object" == typeof a) for (var d in a) m(a, d) && o.addTest(d, a[d]); else {
            if (a = a.toLowerCase(), o[a] !== c) return o;
            b = "function" == typeof b ? b() : b, "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a), 
            o[a] = b;
        }
        return o;
    }, d(""), s = u = null, function(a, b) {
        function c(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
        }
        function d() {
            var a = s.elements;
            return "string" == typeof a ? a.split(" ") : a;
        }
        function e(a) {
            var b = r[a[p]];
            return b || (b = {}, q++, a[p] = q, r[q] = b), b;
        }
        function f(a, c, d) {
            if (c || (c = b), k) return c.createElement(a);
            d || (d = e(c));
            var f;
            return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), 
            !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f);
        }
        function g(a, c) {
            if (a || (a = b), k) return a.createDocumentFragment();
            c = c || e(a);
            for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
            return f;
        }
        function h(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, 
            b.frag = b.createFrag()), a.createElement = function(c) {
                return s.shivMethods ? f(c, a, b) : b.createElem(c);
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
            }) + ");return n}")(s, b.frag);
        }
        function i(a) {
            a || (a = b);
            var d = e(a);
            return !s.shivCSS || j || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), 
            k || h(a, d), a;
        }
        var j, k, l = "3.7.0", m = a.html5 || {}, n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, p = "_html5shiv", q = 0, r = {};
        !function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement;
                }();
            } catch (c) {
                j = !0, k = !0;
            }
        }();
        var s = {
            elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: l,
            shivCSS: m.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: m.shivMethods !== !1,
            type: "default",
            shivDocument: i,
            createElement: f,
            createDocumentFragment: g
        };
        a.html5 = s, i(b);
    }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, 
    o.mq = I, o.hasEvent = J, o.testProp = function(a) {
        return h([ a ]);
    }, o.testAllProps = j, o.testStyles = H, o.prefixed = function(a, b, c) {
        return b ? j(a, b, c) : j(a, "pfx");
    }, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), 
    o;
}(this, this.document), function(a, b) {
    function c(a) {
        var b = a.length, c = kb.type(a);
        return kb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    function d(a) {
        var b = zb[a] = {};
        return kb.each(a.match(mb) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function e(a, c, d, e) {
        if (kb.acceptData(a)) {
            var f, g, h = kb.expando, i = a.nodeType, j = i ? kb.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = bb.pop() || kb.guid++ : h), 
            j[k] || (j[k] = i ? {} : {
                toJSON: kb.noop
            }), ("object" == typeof c || "function" == typeof c) && (e ? j[k] = kb.extend(j[k], c) : j[k].data = kb.extend(j[k].data, c)), 
            g = j[k], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[kb.camelCase(c)] = d), 
            "string" == typeof c ? (f = g[c], null == f && (f = g[kb.camelCase(c)])) : f = g, 
            f;
        }
    }
    function f(a, b, c) {
        if (kb.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? kb.cache : a, i = f ? a[kb.expando] : kb.expando;
            if (g[i]) {
                if (b && (d = c ? g[i] : g[i].data)) {
                    kb.isArray(b) ? b = b.concat(kb.map(b, kb.camelCase)) : b in d ? b = [ b ] : (b = kb.camelCase(b), 
                    b = b in d ? [ b ] : b.split(" ")), e = b.length;
                    for (;e--; ) delete d[b[e]];
                    if (c ? !h(d) : !kb.isEmptyObject(d)) return;
                }
                (c || (delete g[i].data, h(g[i]))) && (f ? kb.cleanData([ a ], !0) : kb.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null);
            }
        }
    }
    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(Bb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Ab.test(d) ? kb.parseJSON(d) : d;
                } catch (f) {}
                kb.data(a, c, d);
            } else d = b;
        }
        return d;
    }
    function h(a) {
        var b;
        for (b in a) if (("data" !== b || !kb.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function i() {
        return !0;
    }
    function j() {
        return !1;
    }
    function k() {
        try {
            return Y.activeElement;
        } catch (a) {}
    }
    function l(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a;
    }
    function m(a, b, c) {
        if (kb.isFunction(b)) return kb.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return kb.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (Qb.test(b)) return kb.filter(b, a, c);
            b = kb.filter(b, a);
        }
        return kb.grep(a, function(a) {
            return kb.inArray(a, b) >= 0 !== c;
        });
    }
    function n(a) {
        var b = Ub.split("|"), c = a.createDocumentFragment();
        if (c.createElement) for (;b.length; ) c.createElement(b.pop());
        return c;
    }
    function o(a, b) {
        return kb.nodeName(a, "table") && kb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function p(a) {
        return a.type = (null !== kb.find.attr(a, "type")) + "/" + a.type, a;
    }
    function q(a) {
        var b = ec.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function r(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) kb._data(c, "globalEval", !b || kb._data(b[d], "globalEval"));
    }
    function s(a, b) {
        if (1 === b.nodeType && kb.hasData(a)) {
            var c, d, e, f = kb._data(a), g = kb._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) kb.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = kb.extend({}, g.data));
        }
    }
    function t(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !kb.support.noCloneEvent && b[kb.expando]) {
                e = kb._data(b);
                for (d in e.events) kb.removeEvent(b, d, e.handle);
                b.removeAttribute(kb.expando);
            }
            "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), 
            kb.support.html5Clone && a.innerHTML && !kb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, 
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }
    function u(a, c) {
        var d, e, f = 0, g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
        if (!g) for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !c || kb.nodeName(e, c) ? g.push(e) : kb.merge(g, u(e, c));
        return c === b || c && kb.nodeName(a, c) ? kb.merge([ a ], g) : g;
    }
    function v(a) {
        bc.test(a.type) && (a.defaultChecked = a.checked);
    }
    function w(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--; ) if (b = yc[e] + c, 
        b in a) return b;
        return d;
    }
    function x(a, b) {
        return a = b || a, "none" === kb.css(a, "display") || !kb.contains(a.ownerDocument, a);
    }
    function y(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = kb._data(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = kb._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), 
        (c && "none" !== c || !e) && kb._data(d, "olddisplay", e ? c : kb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function z(a, b, c) {
        var d = rc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function A(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += kb.css(a, c + xc[f], !0, e)), 
        d ? ("content" === c && (g -= kb.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= kb.css(a, "border" + xc[f] + "Width", !0, e))) : (g += kb.css(a, "padding" + xc[f], !0, e), 
        "padding" !== c && (g += kb.css(a, "border" + xc[f] + "Width", !0, e)));
        return g;
    }
    function B(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = kc(a), g = kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
            d = g && (kb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function C(a) {
        var b = Y, c = uc[a];
        return c || (c = D(a, b), "none" !== c && c || (jc = (jc || kb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), 
        b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), 
        b.close(), c = D(a, b), jc.detach()), uc[a] = c), c;
    }
    function D(a, b) {
        var c = kb(b.createElement(a)).appendTo(b.body), d = kb.css(c[0], "display");
        return c.remove(), d;
    }
    function E(a, b, c, d) {
        var e;
        if (kb.isArray(b)) kb.each(b, function(b, e) {
            c || Ac.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== kb.type(b)) d(a, b); else for (e in b) E(a + "[" + e + "]", b[e], c, d);
    }
    function F(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(mb) || [];
            if (kb.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function G(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0, kb.each(a[i] || [], function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), 
                f(k), !1);
            }), j;
        }
        var g = {}, h = a === Rc;
        return f(c.dataTypes[0]) || !g["*"] && f("*");
    }
    function H(a, c) {
        var d, e, f = kb.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && kb.extend(!0, a, d), a;
    }
    function I(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0]; ) j.shift(), 
        f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f) for (h in i) if (i[h] && i[h].test(f)) {
            j.unshift(h);
            break;
        }
        if (j[0] in d) g = j[0]; else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break;
                }
                e || (e = h);
            }
            g = g || e;
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b;
    }
    function J(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function K() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function L() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    function M() {
        return setTimeout(function() {
            $c = b;
        }), $c = kb.now();
    }
    function N(a, b, c) {
        for (var d, e = (ed[b] || []).concat(ed["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function O(a, b, c) {
        var d, e, f = 0, g = dd.length, h = kb.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = $c || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: kb.extend({}, b),
            opts: kb.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $c || M(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = kb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (P(k, j.opts.specialEasing); g > f; f++) if (d = dd[f].call(j, a, k, j.opts)) return d;
        return kb.map(k, N, j), kb.isFunction(j.opts.start) && j.opts.start.call(a, j), 
        kb.fx.timer(kb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function P(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = kb.camelCase(c), e = b[d], f = a[c], kb.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = kb.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function Q(a, b, c) {
        var d, e, f, g, h, i, j = this, k = {}, l = a.style, m = a.nodeType && x(a), n = kb._data(a, "fxshow");
        c.queue || (h = kb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, 
        i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, j.always(function() {
            j.always(function() {
                h.unqueued--, kb.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ l.overflow, l.overflowX, l.overflowY ], 
        "inline" === kb.css(a, "display") && "none" === kb.css(a, "float") && (kb.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")), 
        c.overflow && (l.overflow = "hidden", kb.support.shrinkWrapBlocks || j.always(function() {
            l.overflow = c.overflow[0], l.overflowX = c.overflow[1], l.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], ad.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
            k[d] = n && n[d] || kb.style(a, d);
        }
        if (!kb.isEmptyObject(k)) {
            n ? "hidden" in n && (m = n.hidden) : n = kb._data(a, "fxshow", {}), f && (n.hidden = !m), 
            m ? kb(a).show() : j.done(function() {
                kb(a).hide();
            }), j.done(function() {
                var b;
                kb._removeData(a, "fxshow");
                for (b in k) kb.style(a, b, k[b]);
            });
            for (d in k) g = N(m ? n[d] : 0, d, j), d in n || (n[d] = g.start, m && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function R(a, b, c, d, e) {
        return new R.prototype.init(a, b, c, d, e);
    }
    function S(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function T(a) {
        return kb.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    var U, V, W = typeof b, X = a.location, Y = a.document, Z = Y.documentElement, $ = a.jQuery, _ = a.$, ab = {}, bb = [], cb = "1.10.1", db = bb.concat, eb = bb.push, fb = bb.slice, gb = bb.indexOf, hb = ab.toString, ib = ab.hasOwnProperty, jb = cb.trim, kb = function(a, b) {
        return new kb.fn.init(a, b, V);
    }, lb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, mb = /\S+/g, nb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ob = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, pb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, qb = /^[\],:{}\s]*$/, rb = /(?:^|:|,)(?:\s*\[)+/g, sb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, tb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, ub = /^-ms-/, vb = /-([\da-z])/gi, wb = function(a, b) {
        return b.toUpperCase();
    }, xb = function(a) {
        (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (yb(), 
        kb.ready());
    }, yb = function() {
        Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xb, !1), a.removeEventListener("load", xb, !1)) : (Y.detachEvent("onreadystatechange", xb), 
        a.detachEvent("onload", xb));
    };
    kb.fn = kb.prototype = {
        jquery: cb,
        constructor: kb,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : ob.exec(a), 
                !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof kb ? c[0] : c, kb.merge(this, kb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), 
                    pb.test(e[1]) && kb.isPlainObject(c)) for (e in c) kb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this;
                }
                if (f = Y.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = f;
                }
                return this.context = Y, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : kb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, 
            this.context = a.context), kb.makeArray(a, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return fb.call(this);
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
        },
        pushStack: function(a) {
            var b = kb.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return kb.each(this, a, b);
        },
        ready: function(a) {
            return kb.ready.promise().done(a), this;
        },
        slice: function() {
            return this.pushStack(fb.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        map: function(a) {
            return this.pushStack(kb.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: eb,
        sort: [].sort,
        splice: [].splice
    }, kb.fn.init.prototype = kb.fn, kb.extend = kb.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || kb.isFunction(h) || (h = {}), 
        j === i && (h = this, --i); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e], 
        d = f[e], h !== d && (k && d && (kb.isPlainObject(d) || (c = kb.isArray(d))) ? (c ? (c = !1, 
        g = a && kb.isArray(a) ? a : []) : g = a && kb.isPlainObject(a) ? a : {}, h[e] = kb.extend(k, g, d)) : d !== b && (h[e] = d));
        return h;
    }, kb.extend({
        expando: "jQuery" + (cb + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === kb && (a.$ = _), b && a.jQuery === kb && (a.jQuery = $), kb;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? kb.readyWait++ : kb.ready(!0);
        },
        ready: function(a) {
            if (a === !0 ? !--kb.readyWait : !kb.isReady) {
                if (!Y.body) return setTimeout(kb.ready);
                kb.isReady = !0, a !== !0 && --kb.readyWait > 0 || (U.resolveWith(Y, [ kb ]), kb.fn.trigger && kb(Y).trigger("ready").off("ready"));
            }
        },
        isFunction: function(a) {
            return "function" === kb.type(a);
        },
        isArray: Array.isArray || function(a) {
            return "array" === kb.type(a);
        },
        isWindow: function(a) {
            return null != a && a == a.window;
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ab[hb.call(a)] || "object" : typeof a;
        },
        isPlainObject: function(a) {
            var c;
            if (!a || "object" !== kb.type(a) || a.nodeType || kb.isWindow(a)) return !1;
            try {
                if (a.constructor && !ib.call(a, "constructor") && !ib.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (d) {
                return !1;
            }
            if (kb.support.ownLast) for (c in a) return ib.call(a, c);
            for (c in a) ;
            return c === b || ib.call(a, c);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        error: function(a) {
            throw Error(a);
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Y;
            var d = pb.exec(a), e = !c && [];
            return d ? [ b.createElement(d[1]) ] : (d = kb.buildFragment([ a ], b, e), e && kb(e).remove(), 
            kb.merge([], d.childNodes));
        },
        parseJSON: function(c) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = kb.trim(c), 
            c && qb.test(c.replace(sb, "@").replace(tb, "]").replace(rb, ""))) ? Function("return " + c)() : (kb.error("Invalid JSON: " + c), 
            b);
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser(), d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), 
                d.async = "false", d.loadXML(c));
            } catch (f) {
                d = b;
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || kb.error("Invalid XML: " + c), 
            d;
        },
        noop: function() {},
        globalEval: function(b) {
            b && kb.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b);
            })(b);
        },
        camelCase: function(a) {
            return a.replace(ub, "ms-").replace(vb, wb);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: jb && !jb.call("﻿ ") ? function(a) {
            return null == a ? "" : jb.call(a);
        } : function(a) {
            return null == a ? "" : (a + "").replace(nb, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? kb.merge(d, "string" == typeof a ? [ a ] : a) : eb.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (gb) return gb.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
        },
        merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d) for (;d > f; f++) a[e++] = c[f]; else for (;c[f] !== b; ) a[e++] = c[f++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e); else for (f in a) e = b(a[f], f, d), 
            null != e && (i[i.length] = e);
            return db.apply([], i);
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f), kb.isFunction(a) ? (d = fb.call(arguments, 2), 
            e = function() {
                return a.apply(c || this, d.concat(fb.call(arguments)));
            }, e.guid = a.guid = a.guid || kb.guid++, e) : b;
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = null == d;
            if ("object" === kb.type(d)) {
                f = !0;
                for (i in d) kb.access(a, c, i, d[i], !0, g, h);
            } else if (e !== b && (f = !0, kb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), 
            c = null) : (k = c, c = function(a, b, c) {
                return k.call(kb(a), c);
            })), c)) for (;j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g;
        },
        now: function() {
            return new Date().getTime();
        },
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        }
    }), kb.ready.promise = function(b) {
        if (!U) if (U = kb.Deferred(), "complete" === Y.readyState) setTimeout(kb.ready); else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xb, !1), 
        a.addEventListener("load", xb, !1); else {
            Y.attachEvent("onreadystatechange", xb), a.attachEvent("onload", xb);
            var c = !1;
            try {
                c = null == a.frameElement && Y.documentElement;
            } catch (d) {}
            c && c.doScroll && function e() {
                if (!kb.isReady) {
                    try {
                        c.doScroll("left");
                    } catch (a) {
                        return setTimeout(e, 50);
                    }
                    yb(), kb.ready();
                }
            }();
        }
        return U.promise(b);
    }, kb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        ab["[object " + b + "]"] = b.toLowerCase();
    }), V = kb(Y), function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n;
            if ((b ? b.ownerDocument || b : S) !== K && J(b), b = b || K, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (M && !d) {
                if (e = xb.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && Q(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return eb.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && B.getElementsByClassName && b.getElementsByClassName) return eb.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (B.qsa && (!N || !N.test(a))) {
                    if (l = k = R, m = b, n = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = p(a), (k = b.getAttribute("id")) ? l = k.replace(Ab, "\\$&") : b.setAttribute("id", l), 
                        l = "[id='" + l + "'] ", i = j.length; i--; ) j[i] = l + q(j[i]);
                        m = rb.test(a) && b.parentNode || b, n = j.join(",");
                    }
                    if (n) try {
                        return eb.apply(c, m.querySelectorAll(n)), c;
                    } catch (o) {} finally {
                        k || b.removeAttribute("id");
                    }
                }
            }
            return y(a.replace(ob, "$1"), b, c, d);
        }
        function d(a) {
            return wb.test(a + "");
        }
        function e() {
            function a(c, d) {
                return b.push(c += " ") > D.cacheLength && delete a[b.shift()], a[c] = d;
            }
            var b = [];
            return a;
        }
        function f(a) {
            return a[R] = !0, a;
        }
        function g(a) {
            var b = K.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function h(a, b, c) {
            a = a.split("|");
            for (var d, e = a.length, f = c ? null : b; e--; ) (d = D.attrHandle[a[e]]) && d !== b || (D.attrHandle[a[e]] = f);
        }
        function i(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : a[b] === !0 ? b.toLowerCase() : null;
        }
        function j(a, b) {
            return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }
        function k(a) {
            return "input" === a.nodeName.toLowerCase() ? a.defaultValue : b;
        }
        function l(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || _) - (~a.sourceIndex || _);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function m(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function n(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function o(a) {
            return f(function(b) {
                return b = +b, f(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function p(a, b) {
            var d, e, f, g, h, i, j, k = W[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = D.preFilter; h; ) {
                (!d || (e = pb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = qb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ob, " ")
                }), h = h.slice(d.length));
                for (g in D.filter) !(e = vb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return b ? h.length : h ? c.error(a) : W(a, i).slice(0);
        }
        function q(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function r(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = U++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = T + " " + f;
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) if (j = b[R] || (b[R] = {}), 
                (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === C) return h === !0;
                } else if (i = j[d] = [ k ], i[1] = a(b, c, g) || C, i[1] === !0) return !0;
            };
        }
        function s(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function t(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function u(a, b, c, d, e, g) {
            return d && !d[R] && (d = u(d)), e && !e[R] && (e = u(e, g)), f(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || x(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : t(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = t(r, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--; ) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        for (k = r.length; k--; ) (l = r[k]) && (j = e ? gb.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = t(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : eb.apply(g, r);
            });
        }
        function v(a) {
            for (var b, c, d, e = a.length, f = D.relative[a[0].type], g = f || D.relative[" "], h = f ? 1 : 0, i = r(function(a) {
                return a === b;
            }, g, !0), j = r(function(a) {
                return gb.call(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                return !f && (d || c !== H) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
            } ]; e > h; h++) if (c = D.relative[a[h].type]) k = [ r(s(k), c) ]; else {
                if (c = D.filter[a[h].type].apply(null, a[h].matches), c[R]) {
                    for (d = ++h; e > d && !D.relative[a[d].type]; d++) ;
                    return u(h > 1 && s(k), h > 1 && q(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(ob, "$1"), c, d > h && v(a.slice(h, d)), e > d && v(a = a.slice(d)), e > d && q(a));
                }
                k.push(c);
            }
            return s(k);
        }
        function w(a, b) {
            var d = 0, e = b.length > 0, g = a.length > 0, h = function(f, h, i, j, k) {
                var l, m, n, o = [], p = 0, q = "0", r = f && [], s = null != k, u = H, v = f || g && D.find.TAG("*", k && h.parentNode || h), w = T += null == u ? 1 : Math.random() || .1;
                for (s && (H = h !== K && h, C = d); null != (l = v[q]); q++) {
                    if (g && l) {
                        for (m = 0; n = a[m++]; ) if (n(l, h, i)) {
                            j.push(l);
                            break;
                        }
                        s && (T = w, C = ++d);
                    }
                    e && ((l = !n && l) && p--, f && r.push(l));
                }
                if (p += q, e && q !== p) {
                    for (m = 0; n = b[m++]; ) n(r, o, h, i);
                    if (f) {
                        if (p > 0) for (;q--; ) r[q] || o[q] || (o[q] = cb.call(j));
                        o = t(o);
                    }
                    eb.apply(j, o), s && !f && o.length > 0 && p + b.length > 1 && c.uniqueSort(j);
                }
                return s && (T = w, H = u), r;
            };
            return e ? f(h) : h;
        }
        function x(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d;
        }
        function y(a, b, c, d) {
            var e, f, g, h, i, j = p(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && B.getById && 9 === b.nodeType && M && D.relative[f[1].type]) {
                    if (b = (D.find.ID(g.matches[0].replace(Bb, Cb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length);
                }
                for (e = vb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !D.relative[h = g.type]); ) if ((i = D.find[h]) && (d = i(g.matches[0].replace(Bb, Cb), rb.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && q(f), !a) return eb.apply(c, d), c;
                    break;
                }
            }
            return G(a, j)(d, b, !M, c, rb.test(a)), c;
        }
        function z() {}
        var A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R = "sizzle" + -new Date(), S = a.document, T = 0, U = 0, V = e(), W = e(), X = e(), Y = !1, Z = function() {
            return 0;
        }, $ = typeof b, _ = 1 << 31, ab = {}.hasOwnProperty, bb = [], cb = bb.pop, db = bb.push, eb = bb.push, fb = bb.slice, gb = bb.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
            return -1;
        }, hb = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ib = "[\\x20\\t\\r\\n\\f]", jb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", lb = jb.replace("w", "w#"), mb = "\\[" + ib + "*(" + jb + ")" + ib + "*(?:([*^$|!~]?=)" + ib + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + lb + ")|)|)" + ib + "*\\]", nb = ":(" + jb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + mb.replace(3, 8) + ")*)|.*)\\)|)", ob = RegExp("^" + ib + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ib + "+$", "g"), pb = RegExp("^" + ib + "*," + ib + "*"), qb = RegExp("^" + ib + "*([>+~]|" + ib + ")" + ib + "*"), rb = RegExp(ib + "*[+~]"), sb = RegExp("=" + ib + "*([^\\]'\"]*)" + ib + "*\\]", "g"), tb = RegExp(nb), ub = RegExp("^" + lb + "$"), vb = {
            ID: RegExp("^#(" + jb + ")"),
            CLASS: RegExp("^\\.(" + jb + ")"),
            TAG: RegExp("^(" + jb.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + mb),
            PSEUDO: RegExp("^" + nb),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ib + "*(even|odd|(([+-]|)(\\d*)n|)" + ib + "*(?:([+-]|)" + ib + "*(\\d+)|))" + ib + "*\\)|)", "i"),
            bool: RegExp("^(?:" + hb + ")$", "i"),
            needsContext: RegExp("^" + ib + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ib + "*((?:-\\d)?\\d*)" + ib + "*\\)|)(?=[^-]|$)", "i")
        }, wb = /^[^{]+\{\s*\[native \w/, xb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yb = /^(?:input|select|textarea|button)$/i, zb = /^h\d$/i, Ab = /'|\\/g, Bb = RegExp("\\\\([\\da-f]{1,6}" + ib + "?|(" + ib + ")|.)", "ig"), Cb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d);
        };
        try {
            eb.apply(bb = fb.call(S.childNodes), S.childNodes), bb[S.childNodes.length].nodeType;
        } catch (Db) {
            eb = {
                apply: bb.length ? function(a, b) {
                    db.apply(a, fb.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        F = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, B = c.support = {}, J = c.setDocument = function(a) {
            var c = a ? a.ownerDocument || a : S, e = c.parentWindow;
            return c !== K && 9 === c.nodeType && c.documentElement ? (K = c, L = c.documentElement, 
            M = !F(c), e && e.frameElement && e.attachEvent("onbeforeunload", function() {
                J();
            }), B.attributes = g(function(a) {
                return a.innerHTML = "<a href='#'></a>", h("type|href|height|width", j, "#" === a.firstChild.getAttribute("href")), 
                h(hb, i, null == a.getAttribute("disabled")), a.className = "i", !a.getAttribute("className");
            }), B.input = g(function(a) {
                return a.innerHTML = "<input>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
            }), h("value", k, B.attributes && B.input), B.getElementsByTagName = g(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length;
            }), B.getElementsByClassName = g(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 
                2 === a.getElementsByClassName("i").length;
            }), B.getById = g(function(a) {
                return L.appendChild(a).id = R, !c.getElementsByName || !c.getElementsByName(R).length;
            }), B.getById ? (D.find.ID = function(a, b) {
                if (typeof b.getElementById !== $ && M) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, D.filter.ID = function(a) {
                var b = a.replace(Bb, Cb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete D.find.ID, D.filter.ID = function(a) {
                var b = a.replace(Bb, Cb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== $ && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), D.find.TAG = B.getElementsByTagName ? function(a, c) {
                return typeof c.getElementsByTagName !== $ ? c.getElementsByTagName(a) : b;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, D.find.CLASS = B.getElementsByClassName && function(a, c) {
                return typeof c.getElementsByClassName !== $ && M ? c.getElementsByClassName(a) : b;
            }, O = [], N = [], (B.qsa = d(c.querySelectorAll)) && (g(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || N.push("\\[" + ib + "*(?:value|" + hb + ")"), 
                a.querySelectorAll(":checked").length || N.push(":checked");
            }), g(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && N.push("[*^$]=" + ib + "*(?:''|\"\")"), 
                a.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                N.push(",.*:");
            })), (B.matchesSelector = d(P = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && g(function(a) {
                B.disconnectedMatch = P.call(a, "div"), P.call(a, "[s!='']:x"), O.push("!=", nb);
            }), N = N.length && RegExp(N.join("|")), O = O.length && RegExp(O.join("|")), Q = d(L.contains) || L.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, B.sortDetached = g(function(a) {
                return 1 & a.compareDocumentPosition(c.createElement("div"));
            }), Z = L.compareDocumentPosition ? function(a, b) {
                if (a === b) return Y = !0, 0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return d ? 1 & d || !B.sortDetached && b.compareDocumentPosition(a) === d ? a === c || Q(S, a) ? -1 : b === c || Q(S, b) ? 1 : I ? gb.call(I, a) - gb.call(I, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
            } : function(a, b) {
                var d, e = 0, f = a.parentNode, g = b.parentNode, h = [ a ], i = [ b ];
                if (a === b) return Y = !0, 0;
                if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : I ? gb.call(I, a) - gb.call(I, b) : 0;
                if (f === g) return l(a, b);
                for (d = a; d = d.parentNode; ) h.unshift(d);
                for (d = b; d = d.parentNode; ) i.unshift(d);
                for (;h[e] === i[e]; ) e++;
                return e ? l(h[e], i[e]) : h[e] === S ? -1 : i[e] === S ? 1 : 0;
            }, c) : K;
        }, c.matches = function(a, b) {
            return c(a, null, null, b);
        }, c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== K && J(a), b = b.replace(sb, "='$1']"), !(!B.matchesSelector || !M || O && O.test(b) || N && N.test(b))) try {
                var d = P.call(a, b);
                if (d || B.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return c(b, K, null, [ a ]).length > 0;
        }, c.contains = function(a, b) {
            return (a.ownerDocument || a) !== K && J(a), Q(a, b);
        }, c.attr = function(a, c) {
            (a.ownerDocument || a) !== K && J(a);
            var d = D.attrHandle[c.toLowerCase()], e = d && ab.call(D.attrHandle, c.toLowerCase()) ? d(a, c, !M) : b;
            return e === b ? B.attributes || !M ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e;
        }, c.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        }, c.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (Y = !B.detectDuplicates, I = !B.sortStable && a.slice(0), a.sort(Z), Y) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return a;
        }, E = c.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += E(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d]; d++) c += E(b);
            return c;
        }, D = c.selectors = {
            cacheLength: 50,
            createPseudo: f,
            match: vb,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(Bb, Cb), a[3] = (a[4] || a[5] || "").replace(Bb, Cb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return vb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && tb.test(d) && (c = p(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), 
                    a[2] = d.slice(0, c)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(Bb, Cb).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = V[a + " "];
                    return b || (b = RegExp("(^|" + ib + ")" + a + "(" + ib + "|$)")) && V(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== $ && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[R] || (q[R] = {}), j = k[a] || [], n = j[0] === T && j[1], m = j[0] === T && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ T, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[R] || (b[R] = {}))[a]) && j[0] === T) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[R] || (l[R] = {}))[a] = [ T, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || 0 === m % d && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var d, e = D.pseudos[a] || D.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return e[R] ? e(b) : e.length > 1 ? (d = [ a, a, "", b ], D.setFilters.hasOwnProperty(a.toLowerCase()) ? f(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; ) d = gb.call(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, d);
                    }) : e;
                }
            },
            pseudos: {
                not: f(function(a) {
                    var b = [], c = [], d = G(a.replace(ob, "$1"));
                    return d[R] ? f(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }),
                has: f(function(a) {
                    return function(b) {
                        return c(a, b).length > 0;
                    };
                }),
                contains: f(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || E(b)).indexOf(a) > -1;
                    };
                }),
                lang: f(function(a) {
                    return ub.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(Bb, Cb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = M ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === L;
                },
                focus: function(a) {
                    return a === K.activeElement && (!K.hasFocus || K.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !D.pseudos.empty(a);
                },
                header: function(a) {
                    return zb.test(a.nodeName);
                },
                input: function(a) {
                    return yb.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type);
                },
                first: o(function() {
                    return [ 0 ];
                }),
                last: o(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: o(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: o(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: o(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: o(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: o(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; b > ++d; ) a.push(d);
                    return a;
                })
            }
        };
        for (A in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) D.pseudos[A] = m(A);
        for (A in {
            submit: !0,
            reset: !0
        }) D.pseudos[A] = n(A);
        G = c.compile = function(a, b) {
            var c, d = [], e = [], f = X[a + " "];
            if (!f) {
                for (b || (b = p(a)), c = b.length; c--; ) f = v(b[c]), f[R] ? d.push(f) : e.push(f);
                f = X(a, w(e, d));
            }
            return f;
        }, D.pseudos.nth = D.pseudos.eq, z.prototype = D.filters = D.pseudos, D.setFilters = new z(), 
        B.sortStable = R.split("").sort(Z).join("") === R, J(), [ 0, 0 ].sort(Z), B.detectDuplicates = Y, 
        kb.find = c, kb.expr = c.selectors, kb.expr[":"] = kb.expr.pseudos, kb.unique = c.uniqueSort, 
        kb.text = c.getText, kb.isXMLDoc = c.isXML, kb.contains = c.contains;
    }(a);
    var zb = {};
    kb.Callbacks = function(a) {
        a = "string" == typeof a ? zb[a] || d(a) : kb.extend({}, a);
        var c, e, f, g, h, i, j = [], k = !a.once && [], l = function(b) {
            for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++) if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                e = !1;
                break;
            }
            c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable());
        }, m = {
            add: function() {
                if (j) {
                    var b = j.length;
                    !function d(b) {
                        kb.each(b, function(b, c) {
                            var e = kb.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c);
                        });
                    }(arguments), c ? g = j.length : e && (i = b, l(e));
                }
                return this;
            },
            remove: function() {
                return j && kb.each(arguments, function(a, b) {
                    for (var d; (d = kb.inArray(b, j, d)) > -1; ) j.splice(d, 1), c && (g >= d && g--, 
                    h >= d && h--);
                }), this;
            },
            has: function(a) {
                return a ? kb.inArray(a, j) > -1 : !(!j || !j.length);
            },
            empty: function() {
                return j = [], g = 0, this;
            },
            disable: function() {
                return j = k = e = b, this;
            },
            disabled: function() {
                return !j;
            },
            lock: function() {
                return k = b, e || m.disable(), this;
            },
            locked: function() {
                return !k;
            },
            fireWith: function(a, b) {
                return b = b || [], b = [ a, b.slice ? b.slice() : b ], !j || f && !k || (c ? k.push(b) : l(b)), 
                this;
            },
            fire: function() {
                return m.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!f;
            }
        };
        return m;
    }, kb.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", kb.Callbacks("once memory"), "resolved" ], [ "reject", "fail", kb.Callbacks("once memory"), "rejected" ], [ "notify", "progress", kb.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return kb.Deferred(function(c) {
                        kb.each(b, function(b, f) {
                            var g = f[0], h = kb.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && kb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? kb.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, kb.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = fb.call(arguments), g = f.length, h = 1 !== g || a && kb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : kb.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? fb.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && kb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    }), kb.support = function(b) {
        var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
        f = Y.createElement("select"), h = f.appendChild(Y.createElement("option")), e = l.getElementsByTagName("input")[0], 
        d.style.cssText = "top:1px;float:left;opacity:.5", b.getSetAttribute = "t" !== l.className, 
        b.leadingWhitespace = 3 === l.firstChild.nodeType, b.tbody = !l.getElementsByTagName("tbody").length, 
        b.htmlSerialize = !!l.getElementsByTagName("link").length, b.style = /top/.test(d.getAttribute("style")), 
        b.hrefNormalized = "/a" === d.getAttribute("href"), b.opacity = /^0.5/.test(d.style.opacity), 
        b.cssFloat = !!d.style.cssFloat, b.checkOn = !!e.value, b.optSelected = h.selected, 
        b.enctype = !!Y.createElement("form").enctype, b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, 
        b.inlineBlockNeedsLayout = !1, b.shrinkWrapBlocks = !1, b.pixelPosition = !1, b.deleteExpando = !0, 
        b.noCloneEvent = !0, b.reliableMarginRight = !0, b.boxSizingReliable = !0, e.checked = !0, 
        b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete l.test;
        } catch (m) {
            b.deleteExpando = !1;
        }
        e = Y.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), 
        e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, 
        e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = Y.createDocumentFragment(), 
        g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        l.attachEvent && (l.attachEvent("onclick", function() {
            b.noCloneEvent = !1;
        }), l.cloneNode(!0).click());
        for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
        b.clearCloneStyle = "content-box" === l.style.backgroundClip;
        for (k in kb(b)) break;
        return b.ownLast = "0" !== k, kb(function() {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", g = Y.getElementsByTagName("body")[0];
            g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", 
            b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            kb.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === l.offsetWidth;
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, 
            b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, 
            d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), 
            typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", 
            b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", 
            l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), 
            g.removeChild(c), c = l = e = d = null);
        }), c = f = g = h = d = e = null, b;
    }({});
    var Ab = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Bb = /([A-Z])/g;
    kb.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? kb.cache[a[kb.expando]] : a[kb.expando], !!a && !h(a);
        },
        data: function(a, b, c) {
            return e(a, b, c);
        },
        removeData: function(a, b) {
            return f(a, b);
        },
        _data: function(a, b, c) {
            return e(a, b, c, !0);
        },
        _removeData: function(a, b) {
            return f(a, b, !0);
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && kb.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b;
        }
    }), kb.fn.extend({
        data: function(a, c) {
            var d, e, f = null, h = 0, i = this[0];
            if (a === b) {
                if (this.length && (f = kb.data(i), 1 === i.nodeType && !kb._data(i, "parsedAttrs"))) {
                    for (d = i.attributes; d.length > h; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = kb.camelCase(e.slice(5)), 
                    g(i, e, f[e]));
                    kb._data(i, "parsedAttrs", !0);
                }
                return f;
            }
            return "object" == typeof a ? this.each(function() {
                kb.data(this, a);
            }) : arguments.length > 1 ? this.each(function() {
                kb.data(this, a, c);
            }) : i ? g(i, a, kb.data(i, a)) : null;
        },
        removeData: function(a) {
            return this.each(function() {
                kb.removeData(this, a);
            });
        }
    }), kb.extend({
        queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = kb._data(a, c), d && (!e || kb.isArray(d) ? e = kb._data(a, c, kb.makeArray(d)) : e.push(d)), 
            e || []) : b;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = kb.queue(a, b), d = c.length, e = c.shift(), f = kb._queueHooks(a, b), g = function() {
                kb.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return kb._data(a, c) || kb._data(a, c, {
                empty: kb.Callbacks("once memory").add(function() {
                    kb._removeData(a, b + "queue"), kb._removeData(a, c);
                })
            });
        }
    }), kb.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? kb.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = kb.queue(this, a, c);
                kb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && kb.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                kb.dequeue(this, a);
            });
        },
        delay: function(a, b) {
            return a = kb.fx ? kb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d);
                };
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, c) {
            var d, e = 1, f = kb.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [ g ]);
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--; ) d = kb._data(g[h], a + "queueHooks"), 
            d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c);
        }
    });
    var Cb, Db, Eb = /[\t\r\n\f]/g, Fb = /\r/g, Gb = /^(?:input|select|textarea|button|object)$/i, Hb = /^(?:a|area)$/i, Ib = /^(?:checked|selected)$/i, Jb = kb.support.getSetAttribute, Kb = kb.support.input;
    kb.fn.extend({
        attr: function(a, b) {
            return kb.access(this, kb.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                kb.removeAttr(this, a);
            });
        },
        prop: function(a, b) {
            return kb.access(this, kb.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return a = kb.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a];
                } catch (c) {}
            });
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).addClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(mb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
                for (f = 0; e = b[f++]; ) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                c.className = kb.trim(d);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).removeClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(mb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                c.className = a ? kb.trim(d) : "";
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a, d = "boolean" == typeof b;
            return kb.isFunction(a) ? this.each(function(c) {
                kb(this).toggleClass(a.call(this, c, this.className, b), b);
            }) : this.each(function() {
                if ("string" === c) for (var e, f = 0, g = kb(this), h = b, i = a.match(mb) || []; e = i[f++]; ) h = d ? h : !g.hasClass(e), 
                g[h ? "addClass" : "removeClass"](e); else (c === W || "boolean" === c) && (this.className && kb._data(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : kb._data(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0) return !0;
            return !1;
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = kb.isFunction(a), this.each(function(c) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, c, kb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : kb.isArray(f) && (f = kb.map(f, function(a) {
                    return null == a ? "" : a + "";
                })), d = kb.valHooks[this.type] || kb.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f));
            })) : f ? (d = kb.valHooks[f.type] || kb.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, 
            "string" == typeof c ? c.replace(Fb, "") : null == c ? "" : c)) : void 0;
        }
    }), kb.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = kb.find.attr(a, "value");
                    return null != b ? b : a.text;
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (kb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && kb.nodeName(c.parentNode, "optgroup"))) {
                        if (b = kb(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = kb.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = kb.inArray(kb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === W ? kb.prop(a, c, d) : (1 === g && kb.isXMLDoc(a) || (c = c.toLowerCase(), 
            e = kb.attrHooks[c] || (kb.expr.match.bool.test(c) ? Db : Cb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = kb.find.attr(a, c), 
            null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), 
            d) : (kb.removeAttr(a, c), b)) : void 0;
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(mb);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = kb.propFix[c] || c, kb.expr.match.bool.test(c) ? Kb && Jb || !Ib.test(c) ? a[d] = !1 : a[kb.camelCase("default-" + c)] = a[d] = !1 : kb.attr(a, c, ""), 
            a.removeAttribute(Jb ? c : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!kb.support.radioValue && "radio" === b && kb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !kb.isXMLDoc(a), g && (c = kb.propFix[c] || c, 
            f = kb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = kb.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Gb.test(a.nodeName) || Hb.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        }
    }), Db = {
        set: function(a, b, c) {
            return b === !1 ? kb.removeAttr(a, c) : Kb && Jb || !Ib.test(c) ? a.setAttribute(!Jb && kb.propFix[c] || c, c) : a[kb.camelCase("default-" + c)] = a[c] = !0, 
            c;
        }
    }, kb.each(kb.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = kb.expr.attrHandle[c] || kb.find.attr;
        kb.expr.attrHandle[c] = Kb && Jb || !Ib.test(c) ? function(a, c, e) {
            var f = kb.expr.attrHandle[c], g = e ? b : (kb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return kb.expr.attrHandle[c] = f, g;
        } : function(a, c, d) {
            return d ? b : a[kb.camelCase("default-" + c)] ? c.toLowerCase() : null;
        };
    }), Kb && Jb || (kb.attrHooks.value = {
        set: function(a, c, d) {
            return kb.nodeName(a, "input") ? (a.defaultValue = c, b) : Cb && Cb.set(a, c, d);
        }
    }), Jb || (Cb = {
        set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", 
            "value" === d || c === a.getAttribute(d) ? c : b;
        }
    }, kb.expr.attrHandle.id = kb.expr.attrHandle.name = kb.expr.attrHandle.coords = function(a, c, d) {
        var e;
        return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null;
    }, kb.valHooks.button = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && d.specified ? d.value : b;
        },
        set: Cb.set
    }, kb.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Cb.set(a, "" === b ? !1 : b, c);
        }
    }, kb.each([ "width", "height" ], function(a, c) {
        kb.attrHooks[c] = {
            set: function(a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b;
            }
        };
    })), kb.support.hrefNormalized || kb.each([ "href", "src" ], function(a, b) {
        kb.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4);
            }
        };
    }), kb.support.style || (kb.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b;
        },
        set: function(a, b) {
            return a.style.cssText = b + "";
        }
    }), kb.support.optSelected || (kb.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }
    }), kb.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        kb.propFix[this.toLowerCase()] = this;
    }), kb.support.enctype || (kb.propFix.enctype = "encoding"), kb.each([ "radio", "checkbox" ], function() {
        kb.valHooks[this] = {
            set: function(a, c) {
                return kb.isArray(c) ? a.checked = kb.inArray(kb(a).val(), c) >= 0 : b;
            }
        }, kb.support.checkOn || (kb.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var Lb = /^(?:input|select|textarea)$/i, Mb = /^key/, Nb = /^(?:mouse|contextmenu)|click/, Ob = /^(?:focusinfocus|focusoutblur)$/, Pb = /^([^.]*)(?:\.(.+)|)$/;
    kb.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = kb._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = kb.guid++), 
                (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                    return typeof kb === W || a && kb.event.triggered === a.type ? b : kb.event.dispatch.apply(l.elem, arguments);
                }, l.elem = a), c = (c || "").match(mb) || [ "" ], i = c.length; i--; ) g = Pb.exec(c[i]) || [], 
                o = q = g[1], p = (g[2] || "").split(".").sort(), o && (k = kb.event.special[o] || {}, 
                o = (f ? k.delegateType : k.bindType) || o, k = kb.event.special[o] || {}, m = kb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && kb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), 
                k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), 
                kb.event.global[o] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = kb.hasData(a) && kb._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(mb) || [ "" ], j = b.length; j--; ) if (h = Pb.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = kb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, 
                    m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    i = f = m.length; f--; ) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), 
                    g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || kb.removeEvent(a, n, q.handle), 
                    delete k[n]);
                } else for (n in k) kb.event.remove(a, n + b[j], c, d, !0);
                kb.isEmptyObject(k) && (delete q.handle, kb._removeData(a, "events"));
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [ e || Y ], o = ib.call(c, "type") ? c.type : c, p = ib.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Ob.test(o + kb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), 
            o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[kb.expando] ? c : new kb.Event(o, "object" == typeof c && c), 
            c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            c.result = b, c.target || (c.target = e), d = null == d ? [ c ] : kb.makeArray(d, [ c ]), 
            k = kb.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !kb.isWindow(e)) {
                    for (j = k.delegateType || o, Ob.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), 
                    l = i;
                    l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a);
                }
                for (m = 0; (i = n[m++]) && !c.isPropagationStopped(); ) c.type = m > 1 ? j : k.bindType || o, 
                g = (kb._data(i, "events") || {})[c.type] && kb._data(i, "handle"), g && g.apply(i, d), 
                g = h && i[h], g && kb.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && kb.acceptData(e) && h && e[o] && !kb.isWindow(e)) {
                    l = e[h], l && (e[h] = null), kb.event.triggered = o;
                    try {
                        e[o]();
                    } catch (q) {}
                    kb.event.triggered = b, l && (e[h] = l);
                }
                return c.result;
            }
        },
        dispatch: function(a) {
            a = kb.event.fix(a);
            var c, d, e, f, g, h = [], i = fb.call(arguments), j = (kb._data(this, "events") || {})[a.type] || [], k = kb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = kb.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                g = 0; (e = f.handlers[g++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, 
                a.data = e.data, d = ((kb.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), 
                d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (;j != this; j = j.parentNode || this) if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? kb(d, this).index(j) >= 0 : kb.find(d, this, null, [ j ]).length), 
                f[d] && f.push(e);
                f.length && h.push({
                    elem: j,
                    handlers: f
                });
            }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h;
        },
        fix: function(a) {
            if (a[kb.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Nb.test(e) ? this.mouseHooks : Mb.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new kb.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = f.srcElement || Y), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button, h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, 
                f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), 
                a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), 
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), 
                a;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === k() && this.blur ? (this.blur(), !1) : b;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return kb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : b;
                },
                _default: function(a) {
                    return kb.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = kb.extend(new kb.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? kb.event.trigger(e, null, b) : kb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, kb.removeEvent = Y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c));
    }, kb.Event = function(a, c) {
        return this instanceof kb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, 
        c && kb.extend(this, c), this.timeStamp = a && a.timeStamp || kb.now(), this[kb.expando] = !0, 
        b) : new kb.Event(a, c);
    }, kb.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i, this.stopPropagation();
        }
    }, kb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        kb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !kb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), kb.support.submitBubbles || (kb.event.special.submit = {
        setup: function() {
            return kb.nodeName(this, "form") ? !1 : (kb.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target, d = kb.nodeName(c, "input") || kb.nodeName(c, "button") ? c.form : b;
                d && !kb._data(d, "submitBubbles") && (kb.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0;
                }), kb._data(d, "submitBubbles", !0));
            }), b);
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && kb.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function() {
            return kb.nodeName(this, "form") ? !1 : (kb.event.remove(this, "._submit"), b);
        }
    }), kb.support.changeBubbles || (kb.event.special.change = {
        setup: function() {
            return Lb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (kb.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), kb.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), kb.event.simulate("change", this, a, !0);
            })), !1) : (kb.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Lb.test(b.nodeName) && !kb._data(b, "changeBubbles") && (kb.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || kb.event.simulate("change", this.parentNode, a, !0);
                }), kb._data(b, "changeBubbles", !0));
            }), b);
        },
        handle: function(a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b;
        },
        teardown: function() {
            return kb.event.remove(this, "._change"), !Lb.test(this.nodeName);
        }
    }), kb.support.focusinBubbles || kb.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0, d = function(a) {
            kb.event.simulate(b, a.target, kb.event.fix(a), !0);
        };
        kb.event.special[b] = {
            setup: function() {
                0 === c++ && Y.addEventListener(a, d, !0);
            },
            teardown: function() {
                0 === --c && Y.removeEventListener(a, d, !0);
            }
        };
    }), kb.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this;
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, 
            d = b) : (e = d, d = c, c = b)), e === !1) e = j; else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return kb().off(a), h.apply(this, arguments);
            }, e.guid = h.guid || (h.guid = kb.guid++)), this.each(function() {
                kb.event.add(this, a, e, d, c);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, kb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), 
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this;
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), 
            this.each(function() {
                kb.event.remove(this, a, d, c);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                kb.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, c) {
            var d = this[0];
            return d ? kb.event.trigger(a, c, d, !0) : b;
        }
    });
    var Qb = /^.[^:#\[\.,]*$/, Rb = /^(?:parents|prev(?:Until|All))/, Sb = kb.expr.match.needsContext, Tb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    kb.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(kb(a).filter(function() {
                for (b = 0; e > b; b++) if (kb.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) kb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? kb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        has: function(a) {
            var b, c = kb(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (kb.contains(this, c[b])) return !0;
            });
        },
        not: function(a) {
            return this.pushStack(m(this, a || [], !0));
        },
        filter: function(a) {
            return this.pushStack(m(this, a || [], !1));
        },
        is: function(a) {
            return !!m(this, "string" == typeof a && Sb.test(a) ? kb(a) : a || [], !1).length;
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sb.test(a) || "string" != typeof a ? kb(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && kb.find.matchesSelector(c, a))) {
                c = f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? kb.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? kb.inArray(this[0], kb(a)) : kb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            var c = "string" == typeof a ? kb(a, b) : kb.makeArray(a && a.nodeType ? [ a ] : a), d = kb.merge(this.get(), c);
            return this.pushStack(kb.unique(d));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), kb.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return kb.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return kb.dir(a, "parentNode", c);
        },
        next: function(a) {
            return l(a, "nextSibling");
        },
        prev: function(a) {
            return l(a, "previousSibling");
        },
        nextAll: function(a) {
            return kb.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return kb.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return kb.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return kb.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return kb.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return kb.sibling(a.firstChild);
        },
        contents: function(a) {
            return kb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : kb.merge([], a.childNodes);
        }
    }, function(a, b) {
        kb.fn[a] = function(c, d) {
            var e = kb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = kb.filter(d, e)), 
            this.length > 1 && (Tb[a] || (e = kb.unique(e)), Rb.test(a) && (e = e.reverse())), 
            this.pushStack(e);
        };
    }), kb.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? kb.find.matchesSelector(d, a) ? [ d ] : [] : kb.find.matches(a, kb.grep(b, function(a) {
                return 1 === a.nodeType;
            }));
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !kb(f).is(d)); ) 1 === f.nodeType && e.push(f), 
            f = f[c];
            return e;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    });
    var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Vb = / jQuery\d+="(?:null|\d+)"/g, Wb = RegExp("<(?:" + Ub + ")[\\s/>]", "i"), Xb = /^\s+/, Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Zb = /<([\w:]+)/, $b = /<tbody/i, _b = /<|&#?\w+;/, ac = /<(?:script|style|link)/i, bc = /^(?:checkbox|radio)$/i, cc = /checked\s*(?:[^=]|=\s*.checked.)/i, dc = /^$|\/(?:java|ecma)script/i, ec = /^true\/(.*)/, fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, gc = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: kb.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, hc = n(Y), ic = hc.appendChild(Y.createElement("div"));
    gc.optgroup = gc.option, gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead, 
    gc.th = gc.td, kb.fn.extend({
        text: function(a) {
            return kb.access(this, function(a) {
                return a === b ? kb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? kb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || kb.cleanData(u(c)), 
            c.parentNode && (b && kb.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && kb.cleanData(u(a, !1)); a.firstChild; ) a.removeChild(a.firstChild);
                a.options && kb.nodeName(a, "select") && (a.options.length = 0);
            }
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return kb.clone(this, a, b);
            });
        },
        html: function(a) {
            return kb.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                if (!("string" != typeof a || ac.test(a) || !kb.support.htmlSerialize && Wb.test(a) || !kb.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || [ "", "" ])[1].toLowerCase()])) {
                    a = a.replace(Yb, "<$1></$2>");
                    try {
                        for (;e > d; d++) c = this[d] || {}, 1 === c.nodeType && (kb.cleanData(u(c, !1)), 
                        c.innerHTML = a);
                        c = 0;
                    } catch (f) {}
                }
                c && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = kb.map(this, function(a) {
                return [ a.nextSibling, a.parentNode ];
            }), b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++], e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), kb(this).remove(), e.insertBefore(c, d));
            }, !0), b ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b, c) {
            a = db.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, m = k - 1, n = a[0], o = kb.isFunction(n);
            if (o || !(1 >= k || "string" != typeof n || kb.support.checkClone) && cc.test(n)) return this.each(function(d) {
                var e = l.eq(d);
                o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c);
            });
            if (k && (i = kb.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 
            1 === i.childNodes.length && (i = d), d)) {
                for (g = kb.map(u(i, "script"), p), f = g.length; k > j; j++) e = i, j !== m && (e = kb.clone(e, !0, !0), 
                f && kb.merge(g, u(e, "script"))), b.call(this[j], e, j);
                if (f) for (h = g[g.length - 1].ownerDocument, kb.map(g, q), j = 0; f > j; j++) e = g[j], 
                dc.test(e.type || "") && !kb._data(e, "globalEval") && kb.contains(h, e) && (e.src ? kb._evalUrl(e.src) : kb.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fc, "")));
                i = d = null;
            }
            return this;
        }
    }), kb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        kb.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = kb(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), 
            kb(f[d])[b](c), eb.apply(e, c.get());
            return this.pushStack(e);
        };
    }), kb.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = kb.contains(a.ownerDocument, a);
            if (kb.support.html5Clone || kb.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, 
            ic.removeChild(f = ic.firstChild)), !(kb.support.noCloneEvent && kb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || kb.isXMLDoc(a))) for (d = u(f), 
            h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
            if (b) if (c) for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]); else s(a, f);
            return d = u(f, "script"), d.length > 0 && r(d, !i && u(a, "script")), d = h = e = null, 
            f;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++) if (f = a[p], 
            f || 0 === f) if ("object" === kb.type(f)) kb.merge(o, f.nodeType ? [ f ] : f); else if (_b.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Zb.exec(f) || [ "", "" ])[1].toLowerCase(), 
                k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], 
                e = k[0]; e--; ) h = h.lastChild;
                if (!kb.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), 
                !kb.support.tbody) for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h : h.firstChild, 
                e = f && f.childNodes.length; e--; ) kb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (kb.merge(o, h.childNodes), h.textContent = ""; h.firstChild; ) h.removeChild(h.firstChild);
                h = m.lastChild;
            } else o.push(b.createTextNode(f));
            for (h && m.removeChild(h), kb.support.appendChecked || kb.grep(u(o, "input"), v), 
            p = 0; f = o[p++]; ) if ((!d || -1 === kb.inArray(f, d)) && (g = kb.contains(f.ownerDocument, f), 
            h = u(m.appendChild(f), "script"), g && r(h), c)) for (e = 0; f = h[e++]; ) dc.test(f.type || "") && c.push(f);
            return h = null, m;
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = kb.expando, i = kb.cache, j = kb.support.deleteExpando, k = kb.event.special; null != (c = a[g]); g++) if ((b || kb.acceptData(c)) && (e = c[h], 
            f = e && i[e])) {
                if (f.events) for (d in f.events) k[d] ? kb.event.remove(c, d) : kb.removeEvent(c, d, f.handle);
                i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, 
                bb.push(e));
            }
        },
        _evalUrl: function(a) {
            return kb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), kb.fn.extend({
        wrapAll: function(a) {
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).wrapAll(a.call(this, b));
            });
            if (this[0]) {
                var b = kb(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; ) a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            return kb.isFunction(a) ? this.each(function(b) {
                kb(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = kb(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = kb.isFunction(a);
            return this.each(function(c) {
                kb(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                kb.nodeName(this, "body") || kb(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var jc, kc, lc, mc = /alpha\([^)]*\)/i, nc = /opacity\s*=\s*([^)]*)/, oc = /^(top|right|bottom|left)$/, pc = /^(none|table(?!-c[ea]).+)/, qc = /^margin/, rc = RegExp("^(" + lb + ")(.*)$", "i"), sc = RegExp("^(" + lb + ")(?!px)[a-z%]+$", "i"), tc = RegExp("^([+-])=(" + lb + ")", "i"), uc = {
        BODY: "block"
    }, vc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, wc = {
        letterSpacing: 0,
        fontWeight: 400
    }, xc = [ "Top", "Right", "Bottom", "Left" ], yc = [ "Webkit", "O", "Moz", "ms" ];
    kb.fn.extend({
        css: function(a, c) {
            return kb.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (kb.isArray(c)) {
                    for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = kb.css(a, c[h], !1, f);
                    return g;
                }
                return d !== b ? kb.style(a, c, d) : kb.css(a, c);
            }, a, c, arguments.length > 1);
        },
        show: function() {
            return y(this, !0);
        },
        hide: function() {
            return y(this);
        },
        toggle: function(a) {
            var b = "boolean" == typeof a;
            return this.each(function() {
                (b ? a : x(this)) ? kb(this).show() : kb(this).hide();
            });
        }
    }), kb.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = lc(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": kb.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = kb.camelCase(c), j = a.style;
                if (c = kb.cssProps[i] || (kb.cssProps[i] = w(j, i)), h = kb.cssHooks[c] || kb.cssHooks[i], 
                d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(kb.css(a, c)), 
                g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || kb.cssNumber[i] || (d += "px"), 
                kb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), 
                h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d;
                } catch (k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = kb.camelCase(c);
            return c = kb.cssProps[i] || (kb.cssProps[i] = w(a.style, i)), h = kb.cssHooks[c] || kb.cssHooks[i], 
            h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lc(a, c, e)), "normal" === g && c in wc && (g = wc[c]), 
            "" === d || d ? (f = parseFloat(g), d === !0 || kb.isNumeric(f) ? f || 0 : g) : g;
        }
    }), a.getComputedStyle ? (kc = function(b) {
        return a.getComputedStyle(b, null);
    }, lc = function(a, c, d) {
        var e, f, g, h = d || kc(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        return h && ("" !== i || kb.contains(a.ownerDocument, a) || (i = kb.style(a, c)), 
        sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, 
        i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i;
    }) : Y.documentElement.currentStyle && (kc = function(a) {
        return a.currentStyle;
    }, lc = function(a, c, d) {
        var e, f, g, h = d || kc(a), i = h ? h[c] : b, j = a.style;
        return null == i && j && j[c] && (i = j[c]), sc.test(i) && !oc.test(c) && (e = j.left, 
        f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, 
        i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i;
    }), kb.each([ "height", "width" ], function(a, c) {
        kb.cssHooks[c] = {
            get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && pc.test(kb.css(a, "display")) ? kb.swap(a, vc, function() {
                    return B(a, c, e);
                }) : B(a, c, e) : b;
            },
            set: function(a, b, d) {
                var e = d && kc(a);
                return z(a, b, d ? A(a, c, d, kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), kb.support.opacity || (kb.cssHooks.opacity = {
        get: function(a, b) {
            return nc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = kb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === kb.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), 
            "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e);
        }
    }), kb(function() {
        kb.support.reliableMarginRight || (kb.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? kb.swap(a, {
                    display: "inline-block"
                }, lc, [ a, "marginRight" ]) : b;
            }
        }), !kb.support.pixelPosition && kb.fn.position && kb.each([ "top", "left" ], function(a, c) {
            kb.cssHooks[c] = {
                get: function(a, d) {
                    return d ? (d = lc(a, c), sc.test(d) ? kb(a).position()[c] + "px" : d) : b;
                }
            };
        });
    }), kb.expr && kb.expr.filters && (kb.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !kb.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || kb.css(a, "display"));
    }, kb.expr.filters.visible = function(a) {
        return !kb.expr.filters.hidden(a);
    }), kb.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        kb.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, qc.test(a) || (kb.cssHooks[a + b].set = z);
    });
    var zc = /%20/g, Ac = /\[\]$/, Bc = /\r?\n/g, Cc = /^(?:submit|button|image|reset|file)$/i, Dc = /^(?:input|select|textarea|keygen)/i;
    kb.fn.extend({
        serialize: function() {
            return kb.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = kb.prop(this, "elements");
                return a ? kb.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !kb(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a));
            }).map(function(a, b) {
                var c = kb(this).val();
                return null == c ? null : kb.isArray(c) ? kb.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Bc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Bc, "\r\n")
                };
            }).get();
        }
    }), kb.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = kb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (c === b && (c = kb.ajaxSettings && kb.ajaxSettings.traditional), kb.isArray(a) || a.jquery && !kb.isPlainObject(a)) kb.each(a, function() {
            f(this.name, this.value);
        }); else for (d in a) E(d, a[d], c, f);
        return e.join("&").replace(zc, "+");
    }, kb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        kb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), kb.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var Ec, Fc, Gc = kb.now(), Hc = /\?/, Ic = /#.*$/, Jc = /([?&])_=[^&]*/, Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mc = /^(?:GET|HEAD)$/, Nc = /^\/\//, Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Pc = kb.fn.load, Qc = {}, Rc = {}, Sc = "*/".concat("*");
    try {
        Fc = X.href;
    } catch (Tc) {
        Fc = Y.createElement("a"), Fc.href = "", Fc = Fc.href;
    }
    Ec = Oc.exec(Fc.toLowerCase()) || [], kb.fn.load = function(a, c, d) {
        if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), kb.isFunction(c) ? (d = c, 
        c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && kb.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function(a) {
            f = arguments, h.html(e ? kb("<div>").append(kb.parseHTML(a)).find(e) : a);
        }).complete(d && function(a, b) {
            h.each(d, f || [ a.responseText, b, a ]);
        }), this;
    }, kb.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        kb.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), kb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fc,
            type: "GET",
            isLocal: Lc.test(Ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": kb.parseJSON,
                "text xml": kb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? H(H(a, kb.ajaxSettings), b) : H(kb.ajaxSettings, a);
        },
        ajaxPrefilter: F(Qc),
        ajaxTransport: F(Rc),
        ajax: function(a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, 
                f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), 
                f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (kb.lastModified[g] = v), 
                v = w.getResponseHeader("etag"), v && (kb.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, 
                l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [ l, x, w ]) : p.rejectWith(n, [ w, x, s ]), 
                w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [ w, m, f ? l : s ]), 
                q.fireWith(n, [ w, x ]), j && (o.trigger("ajaxComplete", [ w, m ]), --kb.active || kb.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = kb.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? kb(n) : kb.event, p = kb.Deferred(), q = kb.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!l) for (l = {}; b = Kc.exec(h); ) l[b[1].toLowerCase()] = b[2];
                        b = l[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? h : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [ r[b], a[b] ]; else w.always(a[w.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || v;
                    return k && k.abort(b), d(0, b), this;
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), 
            m.type = c.method || c.type || m.method || m.type, m.dataTypes = kb.trim(m.dataType || "*").toLowerCase().match(mb) || [ "" ], 
            null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Ec[3] || ("http:" === Ec[1] ? "80" : "443")))), 
            m.data && m.processData && "string" != typeof m.data && (m.data = kb.param(m.data, m.traditional)), 
            G(Qc, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === kb.active++ && kb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), 
            m.hasContent = !Mc.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&" : "?") + m.data, 
            delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&" : "?") + "_=" + Gc++)), 
            m.ifModified && (kb.lastModified[g] && w.setRequestHeader("If-Modified-Since", kb.lastModified[g]), 
            kb.etag[g] && w.setRequestHeader("If-None-Match", kb.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), 
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = G(Rc, m, c, w)) {
                w.readyState = 1, j && o.trigger("ajaxSend", [ w, m ]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout");
                }, m.timeout));
                try {
                    u = 1, k.send(s, d);
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x);
                }
            } else d(-1, "No Transport");
            return w;
        },
        getJSON: function(a, b, c) {
            return kb.get(a, b, c, "json");
        },
        getScript: function(a, c) {
            return kb.get(a, b, c, "script");
        }
    }), kb.each([ "get", "post" ], function(a, c) {
        kb[c] = function(a, d, e, f) {
            return kb.isFunction(d) && (f = f || e, e = d, d = b), kb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            });
        };
    }), kb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return kb.globalEval(a), a;
            }
        }
    }), kb.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), kb.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = Y.head || kb("head")[0] || Y.documentElement;
            return {
                send: function(b, e) {
                    c = Y.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), 
                    c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, 
                        c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"));
                    }, d.insertBefore(c, d.firstChild);
                },
                abort: function() {
                    c && c.onload(b, !0);
                }
            };
        }
    });
    var Uc = [], Vc = /(=)\?(?=&|$)|\?\?/;
    kb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Uc.pop() || kb.expando + "_" + Gc++;
            return this[a] = !0, a;
        }
    }), kb.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = kb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, 
        i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), 
        c.converters["script json"] = function() {
            return h || kb.error(f + " was not called"), h[0];
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments;
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)), h && kb.isFunction(g) && g(h[0]), 
            h = g = b;
        }), "script") : b;
    });
    var Wc, Xc, Yc = 0, Zc = a.ActiveXObject && function() {
        var a;
        for (a in Wc) Wc[a](b, !0);
    };
    kb.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && K() || L();
    } : K, Xc = kb.ajaxSettings.xhr(), kb.support.cors = !!Xc && "withCredentials" in Xc, 
    Xc = kb.support.ajax = !!Xc, Xc && kb.ajaxTransport(function(c) {
        if (!c.crossDomain || kb.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), 
                    c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h]);
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = kb.noop, 
                            Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort(); else {
                                l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    k = i.statusText;
                                } catch (m) {
                                    k = "";
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404;
                            }
                        } catch (n) {
                            e || f(-1, n);
                        }
                        l && f(h, k, l, j);
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {}, 
                    kb(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d();
                },
                abort: function() {
                    d && d(b, !0);
                }
            };
        }
    });
    var $c, _c, ad = /^(?:toggle|show|hide)$/, bd = RegExp("^(?:([+-])=|)(" + lb + ")([a-z%]*)$", "i"), cd = /queueHooks$/, dd = [ Q ], ed = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bd.exec(b), f = e && e[3] || (kb.cssNumber[a] ? "" : "px"), g = (kb.cssNumber[a] || "px" !== f && +d) && bd.exec(kb.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, kb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    kb.Animation = kb.extend(O, {
        tweener: function(a, b) {
            kb.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ed[c] = ed[c] || [], ed[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? dd.unshift(a) : dd.push(a);
        }
    }), kb.Tween = R, R.prototype = {
        constructor: R,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (kb.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = R.propHooks[this.prop];
            return a && a.get ? a.get(this) : R.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = R.propHooks[this.prop];
            return this.pos = b = this.options.duration ? kb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : R.propHooks._default.set(this), this;
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = kb.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                kb.fx.step[a.prop] ? kb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[kb.cssProps[a.prop]] || kb.cssHooks[a.prop]) ? kb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, kb.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = kb.fn[b];
        kb.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e);
        };
    }), kb.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = kb.isEmptyObject(a), f = kb.speed(b, c, d), g = function() {
                var b = O(this, kb.extend({}, a), f);
                (e || kb._data(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d);
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, c = null != a && a + "queueHooks", f = kb.timers, g = kb._data(this);
                if (c) g[c] && g[c].stop && e(g[c]); else for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                for (c = f.length; c--; ) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), 
                b = !1, f.splice(c, 1));
                (b || !d) && kb.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = kb._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = kb.timers, g = d ? d.length : 0;
                for (c.finish = !0, kb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), kb.each({
        slideDown: S("show"),
        slideUp: S("hide"),
        slideToggle: S("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        kb.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), kb.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? kb.extend({}, a) : {
            complete: c || !c && b || kb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !kb.isFunction(b) && b
        };
        return d.duration = kb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in kb.fx.speeds ? kb.fx.speeds[d.duration] : kb.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            kb.isFunction(d.old) && d.old.call(this), d.queue && kb.dequeue(this, d.queue);
        }, d;
    }, kb.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, kb.timers = [], kb.fx = R.prototype.init, kb.fx.tick = function() {
        var a, c = kb.timers, d = 0;
        for ($c = kb.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || kb.fx.stop(), $c = b;
    }, kb.fx.timer = function(a) {
        a() && kb.timers.push(a) && kb.fx.start();
    }, kb.fx.interval = 13, kb.fx.start = function() {
        _c || (_c = setInterval(kb.fx.tick, kb.fx.interval));
    }, kb.fx.stop = function() {
        clearInterval(_c), _c = null;
    }, kb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, kb.fx.step = {}, kb.expr && kb.expr.filters && (kb.expr.filters.animated = function(a) {
        return kb.grep(kb.timers, function(b) {
            return a === b.elem;
        }).length;
    }), kb.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            kb.offset.setOffset(this, a, b);
        });
        var c, d, e = {
            top: 0,
            left: 0
        }, f = this[0], g = f && f.ownerDocument;
        return g ? (c = g.documentElement, kb.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), 
        d = T(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e) : void 0;
    }, kb.offset = {
        setOffset: function(a, b, c) {
            var d = kb.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = kb(a), h = g.offset(), i = kb.css(a, "top"), j = kb.css(a, "left"), k = ("absolute" === d || "fixed" === d) && kb.inArray("auto", [ i, j ]) > -1, l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), 
            kb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), 
            null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l);
        }
    }, kb.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === kb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), kb.nodeName(a[0], "html") || (c = a.offset()), c.top += kb.css(a[0], "borderTopWidth", !0), 
                c.left += kb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - kb.css(d, "marginTop", !0),
                    left: b.left - c.left - kb.css(d, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Z; a && !kb.nodeName(a, "html") && "static" === kb.css(a, "position"); ) a = a.offsetParent;
                return a || Z;
            });
        }
    }), kb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        kb.fn[a] = function(e) {
            return kb.access(this, function(a, e, f) {
                var g = T(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? kb(g).scrollLeft() : f, d ? f : kb(g).scrollTop()) : a[e] = f, 
                b);
            }, a, e, arguments.length, null);
        };
    }), kb.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        kb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            kb.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return kb.access(this, function(c, d, e) {
                    var f;
                    return kb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, 
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? kb.css(c, d, h) : kb.style(c, d, e, h);
                }, c, g ? e : b, g, null);
            };
        });
    }), kb.fn.size = function() {
        return this.length;
    }, kb.fn.andSelf = kb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = kb : (a.jQuery = a.$ = kb, 
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return kb;
    }));
}(window);