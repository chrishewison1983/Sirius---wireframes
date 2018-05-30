/*! Explore prototype 2017-12-20 */
!function(a, b, c, d) {
    "use strict";
    function e(a) {
        var b, c = this;
        if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, 
        this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, 
        this.layer = a, !a || !a.nodeType) throw new TypeError("Layer must be a document node");
        this.onClick = function() {
            return e.prototype.onClick.apply(c, arguments);
        }, this.onMouse = function() {
            return e.prototype.onMouse.apply(c, arguments);
        }, this.onTouchStart = function() {
            return e.prototype.onTouchStart.apply(c, arguments);
        }, this.onTouchMove = function() {
            return e.prototype.onTouchMove.apply(c, arguments);
        }, this.onTouchEnd = function() {
            return e.prototype.onTouchEnd.apply(c, arguments);
        }, this.onTouchCancel = function() {
            return e.prototype.onTouchCancel.apply(c, arguments);
        }, e.notNeeded(a) || (this.deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), 
        a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), 
        a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), 
        a.addEventListener("touchmove", this.onTouchMove, !1), a.addEventListener("touchend", this.onTouchEnd, !1), 
        a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
            var e = Node.prototype.removeEventListener;
            "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d);
        }, a.addEventListener = function(b, c, d) {
            var e = Node.prototype.addEventListener;
            "click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
                a.propagationStopped || c(a);
            }), d) : e.call(a, b, c, d);
        }), "function" == typeof a.onclick && (b = a.onclick, a.addEventListener("click", function(a) {
            b(a);
        }, !1), a.onclick = null));
    }
    function f(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^[\\/'"]+|(;\s?})+|[\\/'"]+$/g, "")), 
        a;
    }
    0 === a("head").has(".foundation-mq-small").length && a("head").append('<meta class="foundation-mq-small">'), 
    0 === a("head").has(".foundation-mq-medium").length && a("head").append('<meta class="foundation-mq-medium">'), 
    0 === a("head").has(".foundation-mq-large").length && a("head").append('<meta class="foundation-mq-large">'), 
    0 === a("head").has(".foundation-mq-xlarge").length && a("head").append('<meta class="foundation-mq-xlarge">'), 
    0 === a("head").has(".foundation-mq-xxlarge").length && a("head").append('<meta class="foundation-mq-xxlarge">'), 
    e.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, e.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), 
    e.prototype.deviceIsIOS4 = e.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), 
    e.prototype.deviceIsIOSWithBadTarget = e.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), 
    e.prototype.needsClick = function(a) {
        switch (a.nodeName.toLowerCase()) {
          case "button":
          case "select":
          case "textarea":
            if (a.disabled) return !0;
            break;

          case "input":
            if (this.deviceIsIOS && "file" === a.type || a.disabled) return !0;
            break;

          case "label":
          case "video":
            return !0;
        }
        return /\bneedsclick\b/.test(a.className);
    }, e.prototype.needsFocus = function(a) {
        switch (a.nodeName.toLowerCase()) {
          case "textarea":
          case "select":
            return !0;

          case "input":
            switch (a.type) {
              case "button":
              case "checkbox":
              case "file":
              case "image":
              case "radio":
              case "submit":
                return !1;
            }
            return !a.disabled && !a.readOnly;

          default:
            return /\bneedsfocus\b/.test(a.className);
        }
    }, e.prototype.sendClick = function(a, d) {
        var e, f;
        c.activeElement && c.activeElement !== a && c.activeElement.blur(), f = d.changedTouches[0], 
        e = c.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, b, 1, f.screenX, f.screenY, f.clientX, f.clientY, !1, !1, !1, !1, 0, null), 
        e.forwardedTouchEvent = !0, a.dispatchEvent(e);
    }, e.prototype.focus = function(a) {
        var b;
        this.deviceIsIOS && a.setSelectionRange ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus();
    }, e.prototype.updateScrollParent = function(a) {
        var b, c;
        if (b = a.fastClickScrollParent, !b || !b.contains(a)) {
            c = a;
            do {
                if (c.scrollHeight > c.offsetHeight) {
                    b = c, a.fastClickScrollParent = c;
                    break;
                }
                c = c.parentElement;
            } while (c);
        }
        b && (b.fastClickLastScrollTop = b.scrollTop);
    }, e.prototype.getTargetElementFromEventTarget = function(a) {
        return a.nodeType === Node.TEXT_NODE ? a.parentNode : a;
    }, e.prototype.onTouchStart = function(a) {
        var c, d, e;
        if (a.targetTouches.length > 1) return !0;
        if (c = this.getTargetElementFromEventTarget(a.target), d = a.targetTouches[0], 
        this.deviceIsIOS) {
            if (e = b.getSelection(), e.rangeCount && !e.isCollapsed) return !0;
            if (!this.deviceIsIOS4) {
                if (d.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
                this.lastTouchIdentifier = d.identifier, this.updateScrollParent(c);
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = a.timeStamp, this.targetElement = c, 
        this.touchStartX = d.pageX, this.touchStartY = d.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), 
        !0;
    }, e.prototype.touchHasMoved = function(a) {
        var b = a.changedTouches[0], c = this.touchBoundary;
        return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c ? !0 : !1;
    }, e.prototype.onTouchMove = function(a) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick = !1, 
        this.targetElement = null), !0) : !0;
    }, e.prototype.findControl = function(a) {
        return a.control !== d ? a.control : a.htmlFor ? c.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
    }, e.prototype.onTouchEnd = function(a) {
        var d, e, f, g, h, i = this.targetElement;
        if (!this.trackingClick) return !0;
        if (a.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
        if (this.lastClickTime = a.timeStamp, e = this.trackingClickStart, this.trackingClick = !1, 
        this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (h = a.changedTouches[0], 
        i = c.elementFromPoint(h.pageX - b.pageXOffset, h.pageY - b.pageYOffset) || i, i.fastClickScrollParent = this.targetElement.fastClickScrollParent), 
        f = i.tagName.toLowerCase(), "label" === f) {
            if (d = this.findControl(i)) {
                if (this.focus(i), this.deviceIsAndroid) return !1;
                i = d;
            }
        } else if (this.needsFocus(i)) return a.timeStamp - e > 100 || this.deviceIsIOS && b.top !== b && "input" === f ? (this.targetElement = null, 
        !1) : (this.focus(i), this.deviceIsIOS4 && "select" === f || (this.targetElement = null, 
        a.preventDefault()), !1);
        return this.deviceIsIOS && !this.deviceIsIOS4 && (g = i.fastClickScrollParent, g && g.fastClickLastScrollTop !== g.scrollTop) ? !0 : (this.needsClick(i) || (a.preventDefault(), 
        this.sendClick(i, a)), !1);
    }, e.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null;
    }, e.prototype.onMouse = function(a) {
        return this.targetElement ? a.forwardedTouchEvent ? !0 : a.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, 
        a.stopPropagation(), a.preventDefault(), !1) : !0 : !0 : !0;
    }, e.prototype.onClick = function(a) {
        var b;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, 
        !0) : "submit" === a.target.type && 0 === a.detail ? !0 : (b = this.onMouse(a), 
        b || (this.targetElement = null), b);
    }, e.prototype.destroy = function() {
        var a = this.layer;
        this.deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), 
        a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), 
        a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), 
        a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1);
    }, e.notNeeded = function(a) {
        var d;
        if ("undefined" == typeof b.ontouchstart) return !0;
        if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
            if (!e.prototype.deviceIsAndroid) return !0;
            if (d = c.querySelector("meta[name=viewport]"), d && -1 !== d.content.indexOf("user-scalable=no")) return !0;
        }
        return "none" === a.style.msTouchAction ? !0 : !1;
    }, e.attach = function(a) {
        return new e(a);
    }, "undefined" != typeof define && define.amd ? define(function() {
        return e;
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, 
    module.exports.FastClick = e) : b.FastClick = e, "undefined" != typeof e && e.attach(c.body);
    var g = function(b, d) {
        return "string" == typeof b ? d ? a(d.querySelectorAll(b)) : a(c.querySelectorAll(b)) : a(b, d);
    };
    b.matchMedia = b.matchMedia || function(a) {
        var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
        return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", 
        e.appendChild(f), function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', 
            c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                matches: b,
                media: a
            };
        };
    }(c), function() {
        function a() {
            c && (f(a), jQuery.fx.tick());
        }
        for (var c, d = 0, e = [ "webkit", "moz" ], f = b.requestAnimationFrame, g = b.cancelAnimationFrame; d < e.length && !f; d++) f = b[e[d] + "RequestAnimationFrame"], 
        g = g || b[e[d] + "CancelAnimationFrame"] || b[e[d] + "CancelRequestAnimationFrame"];
        f ? (b.requestAnimationFrame = f, b.cancelAnimationFrame = g, jQuery.fx.timer = function(b) {
            b() && jQuery.timers.push(b) && !c && (c = !0, a());
        }, jQuery.fx.stop = function() {
            c = !1;
        }) : (b.requestAnimationFrame = function(a) {
            var c = new Date().getTime(), e = Math.max(0, 16 - (c - d)), f = b.setTimeout(function() {
                a(c + e);
            }, e);
            return d = c + e, f;
        }, b.cancelAnimationFrame = function(a) {
            clearTimeout(a);
        });
    }(jQuery), b.Foundation = {
        name: "Foundation",
        version: "5.0.0",
        media_queries: {
            small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        init: function(a, b, c, d, e) {
            var f = [ a, c, d, e ], h = [];
            if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, 
            b && "string" == typeof b && !/reflow/i.test(b)) this.libs.hasOwnProperty(b) && h.push(this.init_lib(b, f)); else for (var i in this.libs) h.push(this.init_lib(i, b));
            return a;
        },
        init_lib: function(a, b) {
            return this.libs.hasOwnProperty(a) ? (this.patch(this.libs[a]), b && b.hasOwnProperty(a) ? this.libs[a].init.apply(this.libs[a], [ this.scope, b[a] ]) : this.libs[a].init.apply(this.libs[a], b)) : function() {};
        },
        patch: function(a) {
            a.scope = this.scope, a.data_options = this.lib_methods.data_options, a.bindings = this.lib_methods.bindings, 
            a.S = g, a.rtl = this.rtl;
        },
        inherit: function(a, b) {
            for (var c = b.split(" "), d = c.length - 1; d >= 0; d--) this.lib_methods.hasOwnProperty(c[d]) && (this.libs[a.name][c[d]] = this.lib_methods[c[d]]);
        },
        random_str: function(a) {
            var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            a || (a = Math.floor(Math.random() * b.length));
            for (var c = "", d = 0; a > d; d++) c += b[Math.floor(Math.random() * b.length)];
            return c;
        },
        libs: {},
        lib_methods: {
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this, e = arguments;
                    clearTimeout(c), c = setTimeout(function() {
                        a.apply(d, e);
                    }, b);
                };
            },
            data_options: function(b) {
                function c(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0;
                }
                function d(b) {
                    return "string" == typeof b ? a.trim(b) : b;
                }
                var e, f, g, h, i = {}, j = b.data("options");
                if ("object" == typeof j) return j;
                for (g = (j || ":").split(";"), h = g.length, e = h - 1; e >= 0; e--) f = g[e].split(":"), 
                /true/i.test(f[1]) && (f[1] = !0), /false/i.test(f[1]) && (f[1] = !1), c(f[1]) && (f[1] = parseInt(f[1], 10)), 
                2 === f.length && f[0].length > 0 && (i[d(f[0])] = d(f[1]));
                return i;
            },
            delay: function(a, b) {
                return setTimeout(a, b);
            },
            empty: function(a) {
                if (a.length && a.length > 0) return !1;
                if (a.length && 0 === a.length) return !0;
                for (var b in a) if (hasOwnProperty.call(a, b)) return !1;
                return !0;
            },
            register_media: function(b, c) {
                Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '">'), 
                Foundation.media_queries[b] = f(a("." + c).css("font-family")));
            },
            addCustomRule: function(a, b) {
                if (b === d) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length); else {
                    var c = Foundation.media_queries[b];
                    c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }");
                }
            },
            loaded: function(a, b) {
                function c() {
                    b(a[0]);
                }
                function d() {
                    if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                        var a = this.attr("src"), b = a.match(/\?/) ? "&" : "?";
                        b += "random=" + new Date().getTime(), this.attr("src", a + b);
                    }
                }
                return a.attr("src") ? (a[0].complete || 4 === a[0].readyState ? c() : d.call(a), 
                void 0) : (c(), void 0);
            },
            bindings: function(b, c) {
                var d = this, e = !g(this).data(this.name + "-init");
                return "string" == typeof b ? this[b].call(this) : (g(this.scope).is("[data-" + this.name + "]") ? (g(this.scope).data(this.name + "-init", a.extend({}, this.settings, c || b, this.data_options(g(this.scope)))), 
                e && this.events(this.scope)) : g("[data-" + this.name + "]", this.scope).each(function() {
                    var e = !g(this).data(d.name + "-init");
                    g(this).data(d.name + "-init", a.extend({}, d.settings, c || b, d.data_options(g(this)))), 
                    e && d.events(this);
                }), void 0);
            }
        }
    }, a.fn.foundation = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            return Foundation.init.apply(Foundation, [ this ].concat(a)), this;
        });
    };
}(jQuery, this, this.document), function(a, b, c) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.0.1",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            is_hover: !0,
            mobile_show_parent_link: !1,
            scrolltop: !0
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "addCustomRule register_media throttle");
            var e = this;
            e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), a("[data-topbar]", this.scope).each(function() {
                {
                    var b = a(this), c = b.data("topbar-init");
                    a("section", this), a("> ul", this).first();
                }
                b.data("index", 0);
                var d = b.parent();
                d.hasClass("fixed") || d.hasClass(c.sticky_class) ? (e.settings.sticky_class = c.sticky_class, 
                e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), 
                c.assembled || e.assemble(b), c.is_hover ? a(".has-dropdown", b).addClass("not-click") : a(".has-dropdown", b).removeClass("not-click"), 
                e.addCustomRule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), 
                d.hasClass("fixed") && a("body").addClass("f-topbar-fixed");
            });
        },
        toggle: function(c) {
            var d = this;
            if (c) var e = a(c).closest("[data-topbar]"); else var e = a("[data-topbar]");
            var f = e.data("topbar-init"), g = a("section, .section", e);
            d.breakpoint() && (d.rtl ? (g.css({
                right: "0%"
            }), a(">.name", g).css({
                right: "100%"
            })) : (g.css({
                left: "0%"
            }), a(">.name", g).css({
                left: "100%"
            })), a("li.moved", g).removeClass("moved"), e.data("index", 0), e.toggleClass("expanded").css("height", "")), 
            f.scrolltop ? e.hasClass("expanded") ? e.parent().hasClass("fixed") && (f.scrolltop ? (e.parent().removeClass("fixed"), 
            e.addClass("fixed"), a("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : e.parent().removeClass("expanded")) : e.hasClass("fixed") && (e.parent().addClass("fixed"), 
            e.removeClass("fixed"), a("body").addClass("f-topbar-fixed")) : (e.parent().hasClass(d.settings.sticky_class) && e.parent().addClass("fixed"), 
            e.parent().hasClass("fixed") && (e.hasClass("expanded") ? (e.addClass("fixed"), 
            e.parent().addClass("expanded")) : (e.removeClass("fixed"), e.parent().removeClass("expanded"), 
            d.update_sticky_positioning())));
        },
        timer: null,
        events: function() {
            var c = this;
            a(this.scope).off(".topbar").on("click.fndtn.topbar", "[data-topbar] .toggle-topbar", function(a) {
                a.preventDefault(), c.toggle(this);
            }).on("click.fndtn.topbar", "[data-topbar] li.has-dropdown", function(b) {
                var d = a(this), e = a(b.target), f = d.closest("[data-topbar]"), g = f.data("topbar-init");
                return e.data("revealId") ? (c.toggle(), void 0) : (c.breakpoint() || (!g.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), 
                d.hasClass("hover") ? (d.removeClass("hover").find("li").removeClass("hover"), d.parents("li.hover").removeClass("hover")) : (d.addClass("hover"), 
                "A" === e[0].nodeName && e.parent().hasClass("has-dropdown") && b.preventDefault())), 
                void 0);
            }).on("click.fndtn.topbar", "[data-topbar] .has-dropdown>a", function(b) {
                if (c.breakpoint()) {
                    b.preventDefault();
                    var d = a(this), e = d.closest("[data-topbar]"), f = e.find("section, .section"), g = (d.next(".dropdown").outerHeight(), 
                    d.closest("li"));
                    e.data("index", e.data("index") + 1), g.addClass("moved"), c.rtl ? (f.css({
                        right: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * e.data("index") + "%"
                    })) : (f.css({
                        left: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        left: 100 * e.data("index") + "%"
                    })), e.css("height", d.siblings("ul").outerHeight(!0) + e.data("height"));
                }
            }), a(b).off(".topbar").on("resize.fndtn.topbar", c.throttle(function() {
                c.resize.call(c);
            }, 50)).trigger("resize"), a("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function(b) {
                var c = a(b.target).closest("li").closest("li.hover");
                c.length > 0 || a("[data-topbar] li").removeClass("hover");
            }), a(this.scope).on("click.fndtn.topbar", "[data-topbar] .has-dropdown .back", function(b) {
                b.preventDefault();
                var d = a(this), e = d.closest("[data-topbar]"), f = e.find("section, .section"), g = (e.data("topbar-init"), 
                d.closest("li.moved")), h = g.parent();
                e.data("index", e.data("index") - 1), c.rtl ? (f.css({
                    right: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    right: 100 * e.data("index") + "%"
                })) : (f.css({
                    left: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    left: 100 * e.data("index") + "%"
                })), 0 === e.data("index") ? e.css("height", "") : e.css("height", h.outerHeight(!0) + e.data("height")), 
                setTimeout(function() {
                    g.removeClass("moved");
                }, 300);
            });
        },
        resize: function() {
            var b = this;
            a("[data-topbar]").each(function() {
                var d, e = a(this), f = (e.data("topbar-init"), e.parent("." + b.settings.sticky_class));
                if (!b.breakpoint()) {
                    var g = e.hasClass("expanded");
                    e.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && b.toggle(e);
                }
                f.length > 0 && (f.hasClass("fixed") ? (f.removeClass("fixed"), d = f.offset().top, 
                a(c.body).hasClass("f-topbar-fixed") && (d -= e.data("height")), e.data("stickyoffset", d), 
                f.addClass("fixed")) : (d = f.offset().top, e.data("stickyoffset", d)));
            });
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches;
        },
        assemble: function(b) {
            {
                var c = b.data("topbar-init"), d = a("section", b);
                a("> ul", b).first();
            }
            d.detach(), a(".has-dropdown>a", d).each(function() {
                var b = a(this), d = b.siblings(".dropdown"), e = b.attr("href");
                if (c.mobile_show_parent_link && e && e.length > 1) var f = a('<li class="title back js-generated"><h5><a href="#"></a></h5></li><li><a class="parent-link js-generated" href="' + e + '">' + b.text() + "</a></li>"); else var f = a('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');
                1 == c.custom_back_text ? a("h5>a", f).html(c.back_text) : a("h5>a", f).html("&laquo; " + b.html()), 
                d.prepend(f);
            }), d.appendTo(b), this.sticky(), this.assembled(b);
        },
        assembled: function(b) {
            b.data("topbar-init", a.extend({}, b.data("topbar-init"), {
                assembled: !0
            }));
        },
        height: function(b) {
            var c = 0;
            return a("> li", b).each(function() {
                c += a(this).outerHeight(!0);
            }), c;
        },
        sticky: function() {
            var c = (a(b), this);
            a(b).on("scroll", function() {
                c.update_sticky_positioning();
            });
        },
        update_sticky_positioning: function() {
            var c = "." + this.settings.sticky_class, d = a(b);
            if (a(c).length > 0) {
                var e = this.settings.sticky_topbar.data("stickyoffset");
                a(c).hasClass("expanded") || (d.scrollTop() > e ? a(c).hasClass("fixed") || (a(c).addClass("fixed"), 
                a("body").addClass("f-topbar-fixed")) : d.scrollTop() <= e && a(c).hasClass("fixed") && (a(c).removeClass("fixed"), 
                a("body").removeClass("f-topbar-fixed")));
            }
        },
        off: function() {
            a(this.scope).off(".fndtn.topbar"), a(b).off(".fndtn.topbar");
        },
        reflow: function() {}
    };
}(jQuery, this, this.document), function(a, b) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.0.0",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": Foundation.media_queries.small,
                small: Foundation.media_queries.small,
                medium: Foundation.media_queries.medium,
                large: Foundation.media_queries.large,
                xlarge: Foundation.media_queries.xlarge,
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(b, c, d) {
                    if (/IMG/.test(b[0].nodeName)) {
                        var e = b[0].src;
                        if (new RegExp(c, "i").test(e)) return;
                        return b[0].src = c, d(b[0].src);
                    }
                    var f = b.data("interchange-last-path");
                    if (f != c) return a.get(c, function(a) {
                        b.html(a), b.data("interchange-last-path", c), d();
                    });
                }
            }
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.data_attr = "data-" + this.settings.load_attr, 
            this.bindings(b, c), this.load("images"), this.load("nodes");
        },
        events: function() {
            var c = this;
            return a(b).off(".interchange").on("resize.fndtn.interchange", c.throttle(function() {
                c.resize.call(c);
            }, 50)), this;
        },
        resize: function() {
            var b = this.cache;
            if (!this.images_loaded || !this.nodes_loaded) return setTimeout(a.proxy(this.resize, this), 50), 
            void 0;
            for (var c in b) if (b.hasOwnProperty(c)) {
                var d = this.results(c, b[c]);
                d && this.settings.directives[d.scenario[1]](d.el, d.scenario[0], function() {
                    if (arguments[0] instanceof Array) var a = arguments[0]; else var a = Array.prototype.slice.call(arguments, 0);
                    d.el.trigger(d.scenario[1], a);
                });
            }
        },
        results: function(a, b) {
            var c = b.length;
            if (c > 0) for (var d = this.S('[data-uuid="' + a + '"]'), e = c - 1; e >= 0; e--) {
                var f, g = b[e][2];
                if (f = this.settings.named_queries.hasOwnProperty(g) ? matchMedia(this.settings.named_queries[g]) : matchMedia(g), 
                f.matches) return {
                    el: d,
                    scenario: b[e]
                };
            }
            return !1;
        },
        load: function(a, b) {
            return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), 
            this["cached_" + a];
        },
        update_images: function() {
            var a = this.S("img[" + this.data_attr + "]"), b = a.length, c = 0, d = this.data_attr;
            this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b;
            for (var e = b - 1; e >= 0; e--) {
                if (c++, a[e]) {
                    var f = a[e].getAttribute(d) || "";
                    f.length > 0 && this.cached_images.push(a[e]);
                }
                c === b && (this.images_loaded = !0, this.enhance("images"));
            }
            return this;
        },
        update_nodes: function() {
            var a = this.S("[" + this.data_attr + "]:not(img)"), b = a.length, c = 0, d = this.data_attr;
            this.cached_nodes = [], this.nodes_loaded = 0 === b;
            for (var e = b - 1; e >= 0; e--) {
                c++;
                var f = a[e].getAttribute(d) || "";
                f.length > 0 && this.cached_nodes.push(a[e]), c === b && (this.nodes_loaded = !0, 
                this.enhance("nodes"));
            }
            return this;
        },
        enhance: function(c) {
            for (var d = this["cached_" + c].length, e = d - 1; e >= 0; e--) this.object(a(this["cached_" + c][e]));
            return a(b).trigger("resize");
        },
        parse_params: function(a, b, c) {
            return [ this.trim(a), this.convert_directive(b), this.trim(c) ];
        },
        convert_directive: function(a) {
            var b = this.trim(a);
            return b.length > 0 ? b : "replace";
        },
        object: function(a) {
            var b = this.parse_data_attr(a), c = [], d = b.length;
            if (d > 0) for (var e = d - 1; e >= 0; e--) {
                var f = b[e].split(/\((.*?)(\))$/);
                if (f.length > 1) {
                    var g = f[0].split(","), h = this.parse_params(g[0], g[1], f[1]);
                    c.push(h);
                }
            }
            return this.store(a, c);
        },
        uuid: function(a) {
            function b() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
            }
            var c = a || "-";
            return b() + b() + c + b() + c + b() + c + b() + c + b() + b() + b();
        },
        store: function(a, b) {
            var c = this.uuid(), d = a.data("uuid");
            return d ? this.cache[d] : (a.attr("data-uuid", c), this.cache[c] = b);
        },
        trim: function(b) {
            return "string" == typeof b ? a.trim(b) : b;
        },
        parse_data_attr: function(a) {
            for (var b = a.data(this.settings.load_attr).split(/\[(.*?)\]/), c = b.length, d = [], e = c - 1; e >= 0; e--) b[e].replace(/[\W\d]+/, "").length > 4 && d.push(b[e]);
            return d;
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0);
        }
    };
}(jQuery, this, this.document), function(a, b, c, d) {
    "use strict";
    var e = function() {}, f = function(e, f) {
        if (e.hasClass(f.slides_container_class)) return this;
        var j, k, l, m, n, o, p = this, q = e, r = 0, s = !1;
        q.children().first().addClass(f.active_slide_class), p.update_slide_number = function(b) {
            f.slide_number && (k.find("span:first").text(parseInt(b) + 1), k.find("span:last").text(q.children().length)), 
            f.bullets && (l.children().removeClass(f.bullets_active_class), a(l.children().get(b)).addClass(f.bullets_active_class));
        }, p.update_active_link = function(b) {
            var c = a('a[data-orbit-link="' + q.children().eq(b).attr("data-orbit-slide") + '"]');
            c.parents("ul").find("[data-orbit-link]").removeClass(f.bullets_active_class), c.addClass(f.bullets_active_class);
        }, p.build_markup = function() {
            q.wrap('<div class="' + f.container_class + '"></div>'), j = q.parent(), q.addClass(f.slides_container_class), 
            f.navigation_arrows && (j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)), 
            j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))), f.timer && (m = a("<div>").addClass(f.timer_container_class), 
            m.append("<span>"), m.append(a("<div>").addClass(f.timer_progress_class)), m.addClass(f.timer_paused_class), 
            j.append(m)), f.slide_number && (k = a("<div>").addClass(f.slide_number_class), 
            k.append("<span></span> " + f.slide_number_text + " <span></span>"), j.append(k)), 
            f.bullets && (l = a("<ol>").addClass(f.bullets_container_class), j.append(l), l.wrap('<div class="orbit-bullets-container"></div>'), 
            q.children().each(function(b) {
                var c = a("<li>").attr("data-orbit-slide", b);
                l.append(c);
            })), f.stack_on_small && j.addClass(f.stack_on_small_class), p.update_slide_number(0), 
            p.update_active_link(0);
        }, p._goto = function(b, c) {
            if (b === r) return !1;
            "object" == typeof o && o.restart();
            var d = q.children(), e = "next";
            s = !0, r > b && (e = "prev"), b >= d.length ? b = 0 : 0 > b && (b = d.length - 1);
            var g = a(d.get(r)), h = a(d.get(b));
            g.css("zIndex", 2), g.removeClass(f.active_slide_class), h.css("zIndex", 4).addClass(f.active_slide_class), 
            q.trigger("before-slide-change.fndtn.orbit"), f.before_slide_change(), p.update_active_link(b);
            var i = function() {
                var a = function() {
                    r = b, s = !1, c === !0 && (o = p.create_timer(), o.start()), p.update_slide_number(r), 
                    q.trigger("after-slide-change.fndtn.orbit", [ {
                        slide_number: r,
                        total_slides: d.length
                    } ]), f.after_slide_change(r, d.length);
                };
                q.height() != h.height() && f.variable_height ? q.animate({
                    height: h.height()
                }, 250, "linear", a) : a();
            };
            if (1 === d.length) return i(), !1;
            var j = function() {
                "next" === e && n.next(g, h, i), "prev" === e && n.prev(g, h, i);
            };
            h.height() > q.height() && f.variable_height ? q.animate({
                height: h.height()
            }, 250, "linear", j) : j();
        }, p.next = function(a) {
            a.stopImmediatePropagation(), a.preventDefault(), p._goto(r + 1);
        }, p.prev = function(a) {
            a.stopImmediatePropagation(), a.preventDefault(), p._goto(r - 1);
        }, p.link_custom = function(b) {
            b.preventDefault();
            var c = a(this).attr("data-orbit-link");
            if ("string" == typeof c && "" != (c = a.trim(c))) {
                var d = j.find("[data-orbit-slide=" + c + "]");
                -1 != d.index() && p._goto(d.index());
            }
        }, p.link_bullet = function() {
            var b = a(this).attr("data-orbit-slide");
            "string" == typeof b && "" != (b = a.trim(b)) && p._goto(parseInt(b));
        }, p.timer_callback = function() {
            p._goto(r + 1, !0);
        }, p.compute_dimensions = function() {
            var b = a(q.children().get(r)), c = b.height();
            f.variable_height || q.children().each(function() {
                a(this).height() > c && (c = a(this).height());
            }), q.height(c);
        }, p.create_timer = function() {
            var a = new g(j.find("." + f.timer_container_class), f, p.timer_callback);
            return a;
        }, p.stop_timer = function() {
            "object" == typeof o && o.stop();
        }, p.toggle_timer = function() {
            var a = j.find("." + f.timer_container_class);
            a.hasClass(f.timer_paused_class) ? ("undefined" == typeof o && (o = p.create_timer()), 
            o.start()) : "object" == typeof o && o.stop();
        }, p.init = function() {
            p.build_markup(), f.timer && (o = p.create_timer(), o.start()), n = new i(f, q), 
            "slide" === f.animation && (n = new h(f, q)), j.on("click", "." + f.next_class, p.next), 
            j.on("click", "." + f.prev_class, p.prev), j.on("click", "[data-orbit-slide]", p.link_bullet), 
            j.on("click", p.toggle_timer), f.swipe && j.on("touchstart.fndtn.orbit", function(a) {
                a.touches || (a = a.originalEvent);
                var b = {
                    start_page_x: a.touches[0].pageX,
                    start_page_y: a.touches[0].pageY,
                    start_time: new Date().getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                j.data("swipe-transition", b), a.stopPropagation();
            }).on("touchmove.fndtn.orbit", function(a) {
                if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                    var b = j.data("swipe-transition");
                    if ("undefined" == typeof b && (b = {}), b.delta_x = a.touches[0].pageX - b.start_page_x, 
                    "undefined" == typeof b.is_scrolling && (b.is_scrolling = !!(b.is_scrolling || Math.abs(b.delta_x) < Math.abs(a.touches[0].pageY - b.start_page_y))), 
                    !b.is_scrolling && !b.active) {
                        a.preventDefault();
                        var c = b.delta_x < 0 ? r + 1 : r - 1;
                        b.active = !0, p._goto(c);
                    }
                }
            }).on("touchend.fndtn.orbit", function(a) {
                j.data("swipe-transition", {}), a.stopPropagation();
            }), j.on("mouseenter.fndtn.orbit", function() {
                f.timer && f.pause_on_hover && p.stop_timer();
            }).on("mouseleave.fndtn.orbit", function() {
                f.timer && f.resume_on_mouseout && o.start();
            }), a(c).on("click", "[data-orbit-link]", p.link_custom), a(b).on("resize", p.compute_dimensions), 
            a(b).on("load", p.compute_dimensions), a(b).on("load", function() {
                j.prev(".preloader").css("display", "none");
            }), q.trigger("ready.fndtn.orbit");
        }, p.init();
    }, g = function(a, b, c) {
        var d, e, f = this, g = b.timer_speed, h = a.find("." + b.timer_progress_class), i = -1;
        this.update_progress = function(a) {
            var b = h.clone();
            b.attr("style", ""), b.css("width", a + "%"), h.replaceWith(b), h = b;
        }, this.restart = function() {
            clearTimeout(e), a.addClass(b.timer_paused_class), i = -1, f.update_progress(0);
        }, this.start = function() {
            return a.hasClass(b.timer_paused_class) ? (i = -1 === i ? g : i, a.removeClass(b.timer_paused_class), 
            d = new Date().getTime(), h.animate({
                width: "100%"
            }, i, "linear"), e = setTimeout(function() {
                f.restart(), c();
            }, i), a.trigger("timer-started.fndtn.orbit"), void 0) : !0;
        }, this.stop = function() {
            if (a.hasClass(b.timer_paused_class)) return !0;
            clearTimeout(e), a.addClass(b.timer_paused_class);
            var c = new Date().getTime();
            i -= c - d;
            var h = 100 - i / g * 100;
            f.update_progress(h), a.trigger("timer-stopped.fndtn.orbit");
        };
    }, h = function(b) {
        var c = b.animation_speed, d = 1 === a("html[dir=rtl]").length, e = d ? "marginRight" : "marginLeft", f = {};
        f[e] = "0%", this.next = function(a, b, d) {
            a.animate({
                marginLeft: "-100%"
            }, c), b.animate(f, c, function() {
                a.css(e, "100%"), d();
            });
        }, this.prev = function(a, b, d) {
            a.animate({
                marginLeft: "100%"
            }, c), b.css(e, "-100%"), b.animate(f, c, function() {
                a.css(e, "100%"), d();
            });
        };
    }, i = function(b) {
        {
            var c = b.animation_speed;
            1 === a("html[dir=rtl]").length;
        }
        this.next = function(a, b, d) {
            b.css({
                margin: "0%",
                opacity: "0.01"
            }), b.animate({
                opacity: "1"
            }, c, "linear", function() {
                a.css("margin", "100%"), d();
            });
        }, this.prev = function(a, b, d) {
            b.css({
                margin: "0%",
                opacity: "0.01"
            }), b.animate({
                opacity: "1"
            }, c, "linear", function() {
                a.css("margin", "100%"), d();
            });
        };
    };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
        name: "orbit",
        version: "5.0.0",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            slides_container_class: "orbit-slides-container",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: e,
            after_slide_change: e
        },
        init: function(b, c) {
            var d = this;
            if ("object" == typeof c && a.extend(!0, d.settings, c), a(b).is("[data-orbit]")) {
                var e = a(b), g = d.data_options(e);
                new f(e, a.extend({}, d.settings, g));
            }
            a("[data-orbit]", b).each(function(b, c) {
                var e = a(c), g = d.data_options(e);
                new f(e, a.extend({}, d.settings, g));
            });
        }
    };
}(jQuery, this, this.document), function() {
    var a, b, c, d, e, f, g, h, i = [].slice, j = {}.hasOwnProperty, k = function(a, b) {
        function c() {
            this.constructor = a;
        }
        for (var d in b) j.call(b, d) && (a[d] = b[d]);
        return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, 
        a;
    };
    g = function() {}, b = function() {
        function a() {}
        return a.prototype.addEventListener = a.prototype.on, a.prototype.on = function(a, b) {
            return this._callbacks = this._callbacks || {}, this._callbacks[a] || (this._callbacks[a] = []), 
            this._callbacks[a].push(b), this;
        }, a.prototype.emit = function() {
            var a, b, c, d, e, f;
            if (d = arguments[0], a = 2 <= arguments.length ? i.call(arguments, 1) : [], this._callbacks = this._callbacks || {}, 
            c = this._callbacks[d]) for (e = 0, f = c.length; f > e; e++) b = c[e], b.apply(this, a);
            return this;
        }, a.prototype.removeListener = a.prototype.off, a.prototype.removeAllListeners = a.prototype.off, 
        a.prototype.removeEventListener = a.prototype.off, a.prototype.off = function(a, b) {
            var c, d, e, f, g;
            if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
            if (d = this._callbacks[a], !d) return this;
            if (1 === arguments.length) return delete this._callbacks[a], this;
            for (e = f = 0, g = d.length; g > f; e = ++f) if (c = d[e], c === b) {
                d.splice(e, 1);
                break;
            }
            return this;
        }, a;
    }(), a = function(a) {
        function c(a, b) {
            var e, f, g;
            if (this.element = a, this.version = c.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), 
            this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), 
            !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element.");
            if (this.element.dropzone) throw new Error("Dropzone already attached.");
            if (c.instances.push(this), this.element.dropzone = this, e = null != (g = c.optionsForElement(this.element)) ? g : {}, 
            this.options = d({}, this.defaultOptions, e, null != b ? b : {}), this.options.forceFallback || !c.isBrowserSupported()) return this.options.fallback.call(this);
            if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), 
            !this.options.url) throw new Error("No URL provided.");
            if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, 
            delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), 
            (f = this.getExistingFallback()) && f.parentNode && f.parentNode.removeChild(f), 
            this.options.previewsContainer !== !1 && (this.previewsContainer = this.options.previewsContainer ? c.getElement(this.options.previewsContainer, "previewsContainer") : this.element), 
            this.options.clickable && (this.clickableElements = this.options.clickable === !0 ? [ this.element ] : c.getElements(this.options.clickable, "clickable")), 
            this.init();
        }
        var d, e;
        return k(c, a), c.prototype.Emitter = b, c.prototype.events = [ "drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete" ], 
        c.prototype.defaultOptions = {
            url: null,
            method: "post",
            withCredentials: !1,
            parallelUploads: 2,
            uploadMultiple: !1,
            maxFilesize: 1,
            paramName: "file",
            createImageThumbnails: !0,
            maxThumbnailFilesize: 10,
            thumbnailWidth: 120,
            thumbnailHeight: 120,
            filesizeBase: 1e3,
            maxFiles: null,
            filesizeBase: 1e3,
            params: {},
            clickable: !0,
            ignoreHiddenFiles: !0,
            acceptedFiles: null,
            acceptedMimeTypes: null,
            autoProcessQueue: !0,
            autoQueue: !0,
            addRemoveLinks: !1,
            previewsContainer: null,
            capture: null,
            dictDefaultMessage: "Drop files here or click to upload",
            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
            dictFallbackText: "Please use the fallback form below to upload your files",
            dictFileTooBig: "Sorry, the filesize is too large ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
            dictInvalidFileType: "Sorry, you can't upload files of this type.",
            dictResponseError: "Server responded with {{statusCode}} code.",
            dictCancelUpload: "Cancel upload",
            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
            dictRemoveFile: "Remove file",
            dictRemoveFileConfirmation: !0,
            dictMaxFilesExceeded: "You can not upload any more files.",
            accept: function(a, b) {
                return b();
            },
            init: function() {
                return g;
            },
            forceFallback: !1,
            fallback: function() {
                var a, b, d, e, f, g;
                for (this.element.className = "" + this.element.className + " dz-browser-not-supported", 
                g = this.element.getElementsByTagName("div"), e = 0, f = g.length; f > e; e++) a = g[e], 
                /(^| )dz-message($| )/.test(a.className) && (b = a, a.className = "dz-message");
                return b || (b = c.createElement('<div class="dz-message"><span></span></div>'), 
                this.element.appendChild(b)), d = b.getElementsByTagName("span")[0], d && (d.textContent = this.options.dictFallbackMessage), 
                this.element.appendChild(this.getFallbackForm());
            },
            resize: function(a) {
                var b, c, d;
                return b = {
                    srcX: 0,
                    srcY: 0,
                    srcWidth: a.width,
                    srcHeight: a.height
                }, c = a.width / a.height, b.optWidth = this.options.thumbnailWidth, b.optHeight = this.options.thumbnailHeight, 
                null == b.optWidth && null == b.optHeight ? (b.optWidth = b.srcWidth, b.optHeight = b.srcHeight) : null == b.optWidth ? b.optWidth = c * b.optHeight : null == b.optHeight && (b.optHeight = 1 / c * b.optWidth), 
                d = b.optWidth / b.optHeight, a.height < b.optHeight || a.width < b.optWidth ? (b.trgHeight = b.srcHeight, 
                b.trgWidth = b.srcWidth) : c > d ? (b.srcHeight = a.height, b.srcWidth = b.srcHeight * d) : (b.srcWidth = a.width, 
                b.srcHeight = b.srcWidth / d), b.srcX = (a.width - b.srcWidth) / 2, b.srcY = (a.height - b.srcHeight) / 2, 
                b;
            },
            drop: function() {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragstart: g,
            dragend: function() {
                return this.element.classList.remove("dz-drag-hover");
            },
            dragenter: function() {
                return this.element.classList.add("dz-drag-hover");
            },
            dragover: function() {
                return this.element.classList.add("dz-drag-hover");
            },
            dragleave: function() {
                return this.element.classList.remove("dz-drag-hover");
            },
            paste: g,
            reset: function() {
                return this.element.classList.remove("dz-started");
            },
            addedfile: function(a) {
                var b, d, e, f, g, h, i, j, k, l, m, n, o;
                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), 
                this.previewsContainer) {
                    for (a.previewElement = c.createElement(this.options.previewTemplate.trim()), a.previewTemplate = a.previewElement, 
                    this.previewsContainer.appendChild(a.previewElement), l = a.previewElement.querySelectorAll("[data-dz-name]"), 
                    f = 0, i = l.length; i > f; f++) b = l[f], b.textContent = a.name;
                    for (m = a.previewElement.querySelectorAll("[data-dz-size]"), g = 0, j = m.length; j > g; g++) b = m[g], 
                    b.innerHTML = this.filesize(a.size);
                    for (this.options.addRemoveLinks && (a._removeLink = c.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), 
                    a.previewElement.appendChild(a._removeLink)), d = function(b) {
                        return function(d) {
                            return d.preventDefault(), d.stopPropagation(), a.status === c.UPLOADING ? c.confirm(b.options.dictCancelUploadConfirmation, function() {
                                return b.removeFile(a);
                            }) : b.options.dictRemoveFileConfirmation ? c.confirm(b.options.dictRemoveFileConfirmation, function() {
                                return b.removeFile(a);
                            }) : b.removeFile(a);
                        };
                    }(this), n = a.previewElement.querySelectorAll("[data-dz-remove]"), o = [], h = 0, 
                    k = n.length; k > h; h++) e = n[h], o.push(e.addEventListener("click", d));
                    return o;
                }
            },
            removedfile: function(a) {
                var b;
                return a.previewElement && null != (b = a.previewElement) && b.parentNode.removeChild(a.previewElement), 
                this._updateMaxFilesReachedClass();
            },
            thumbnail: function(a, b) {
                var c, d, e, f;
                if (a.previewElement) {
                    for (a.previewElement.classList.remove("dz-file-preview"), f = a.previewElement.querySelectorAll("[data-dz-thumbnail]"), 
                    d = 0, e = f.length; e > d; d++) c = f[d], c.alt = a.name, c.src = b;
                    return setTimeout(function() {
                        return function() {
                            return a.previewElement.classList.add("dz-image-preview");
                        };
                    }(this), 1);
                }
            },
            error: function(a, b) {
                var c, d, e, f, g;
                if (a.previewElement) {
                    for (a.previewElement.classList.add("dz-error"), "String" != typeof b && b.error && (b = b.error), 
                    f = a.previewElement.querySelectorAll("[data-dz-errormessage]"), g = [], d = 0, 
                    e = f.length; e > d; d++) c = f[d], g.push(c.textContent = b);
                    return g;
                }
            },
            errormultiple: g,
            processing: function(a) {
                return a.previewElement && (a.previewElement.classList.add("dz-processing"), a._removeLink) ? a._removeLink.textContent = this.options.dictCancelUpload : void 0;
            },
            processingmultiple: g,
            uploadprogress: function(a, b) {
                var c, d, e, f, g;
                if (a.previewElement) {
                    for (f = a.previewElement.querySelectorAll("[data-dz-uploadprogress]"), g = [], 
                    d = 0, e = f.length; e > d; d++) c = f[d], "PROGRESS" === c.nodeName ? g.push(c.value = b) : g.push(c.style.width = "" + b + "%");
                    return g;
                }
            },
            totaluploadprogress: g,
            sending: g,
            sendingmultiple: g,
            success: function(a) {
                return a.previewElement ? a.previewElement.classList.add("dz-success") : void 0;
            },
            successmultiple: g,
            canceled: function(a) {
                return this.emit("error", a, "Upload canceled.");
            },
            canceledmultiple: g,
            complete: function(a) {
                return a._removeLink && (a._removeLink.textContent = this.options.dictRemoveFile), 
                a.previewElement ? a.previewElement.classList.add("dz-complete") : void 0;
            },
            completemultiple: g,
            maxfilesexceeded: g,
            maxfilesreached: g,
            queuecomplete: g,
            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'
        }, d = function() {
            var a, b, c, d, e, f, g;
            for (d = arguments[0], c = 2 <= arguments.length ? i.call(arguments, 1) : [], f = 0, 
            g = c.length; g > f; f++) {
                b = c[f];
                for (a in b) e = b[a], d[a] = e;
            }
            return d;
        }, c.prototype.getAcceptedFiles = function() {
            var a, b, c, d, e;
            for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted && e.push(a);
            return e;
        }, c.prototype.getRejectedFiles = function() {
            var a, b, c, d, e;
            for (d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a.accepted || e.push(a);
            return e;
        }, c.prototype.getFilesWithStatus = function(a) {
            var b, c, d, e, f;
            for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.status === a && f.push(b);
            return f;
        }, c.prototype.getQueuedFiles = function() {
            return this.getFilesWithStatus(c.QUEUED);
        }, c.prototype.getUploadingFiles = function() {
            return this.getFilesWithStatus(c.UPLOADING);
        }, c.prototype.getActiveFiles = function() {
            var a, b, d, e, f;
            for (e = this.files, f = [], b = 0, d = e.length; d > b; b++) a = e[b], (a.status === c.UPLOADING || a.status === c.QUEUED) && f.push(a);
            return f;
        }, c.prototype.init = function() {
            var a, b, d, e, f, g, h;
            for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), 
            this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(c.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), 
            this.clickableElements.length && (d = function(a) {
                return function() {
                    return a.hiddenFileInput && document.body.removeChild(a.hiddenFileInput), a.hiddenFileInput = document.createElement("input"), 
                    a.hiddenFileInput.setAttribute("type", "file"), (null == a.options.maxFiles || a.options.maxFiles > 1) && a.hiddenFileInput.setAttribute("multiple", "multiple"), 
                    a.hiddenFileInput.className = "dz-hidden-input", null != a.options.acceptedFiles && a.hiddenFileInput.setAttribute("accept", a.options.acceptedFiles), 
                    null != a.options.capture && a.hiddenFileInput.setAttribute("capture", a.options.capture), 
                    a.hiddenFileInput.style.visibility = "hidden", a.hiddenFileInput.style.position = "absolute", 
                    a.hiddenFileInput.style.top = "0", a.hiddenFileInput.style.left = "0", a.hiddenFileInput.style.height = "0", 
                    a.hiddenFileInput.style.width = "0", document.body.appendChild(a.hiddenFileInput), 
                    a.hiddenFileInput.addEventListener("change", function() {
                        var b, c, e, f;
                        if (c = a.hiddenFileInput.files, c.length) for (e = 0, f = c.length; f > e; e++) b = c[e], 
                        a.addFile(b);
                        return d();
                    });
                };
            }(this))(), this.URL = null != (g = window.URL) ? g : window.webkitURL, h = this.events, 
            e = 0, f = h.length; f > e; e++) a = h[e], this.on(a, this.options[a]);
            return this.on("uploadprogress", function(a) {
                return function() {
                    return a.updateTotalUploadProgress();
                };
            }(this)), this.on("removedfile", function(a) {
                return function() {
                    return a.updateTotalUploadProgress();
                };
            }(this)), this.on("canceled", function(a) {
                return function(b) {
                    return a.emit("complete", b);
                };
            }(this)), this.on("complete", function(a) {
                return function() {
                    return 0 === a.getUploadingFiles().length && 0 === a.getQueuedFiles().length ? setTimeout(function() {
                        return a.emit("queuecomplete");
                    }, 0) : void 0;
                };
            }(this)), b = function(a) {
                return a.stopPropagation(), a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            }, this.listeners = [ {
                element: this.element,
                events: {
                    dragstart: function(a) {
                        return function(b) {
                            return a.emit("dragstart", b);
                        };
                    }(this),
                    dragenter: function(a) {
                        return function(c) {
                            return b(c), a.emit("dragenter", c);
                        };
                    }(this),
                    dragover: function(a) {
                        return function(c) {
                            var d;
                            try {
                                d = c.dataTransfer.effectAllowed;
                            } catch (e) {}
                            return c.dataTransfer.dropEffect = "move" === d || "linkMove" === d ? "move" : "copy", 
                            b(c), a.emit("dragover", c);
                        };
                    }(this),
                    dragleave: function(a) {
                        return function(b) {
                            return a.emit("dragleave", b);
                        };
                    }(this),
                    drop: function(a) {
                        return function(c) {
                            return b(c), a.drop(c);
                        };
                    }(this),
                    dragend: function(a) {
                        return function(b) {
                            return a.emit("dragend", b);
                        };
                    }(this)
                }
            } ], this.clickableElements.forEach(function(a) {
                return function(b) {
                    return a.listeners.push({
                        element: b,
                        events: {
                            click: function(d) {
                                return b !== a.element || d.target === a.element || c.elementInside(d.target, a.element.querySelector(".dz-message")) ? a.hiddenFileInput.click() : void 0;
                            }
                        }
                    });
                };
            }(this)), this.enable(), this.options.init.call(this);
        }, c.prototype.destroy = function() {
            var a;
            return this.disable(), this.removeAllFiles(!0), (null != (a = this.hiddenFileInput) ? a.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), 
            this.hiddenFileInput = null), delete this.element.dropzone, c.instances.splice(c.instances.indexOf(this), 1);
        }, c.prototype.updateTotalUploadProgress = function() {
            var a, b, c, d, e, f, g, h;
            if (d = 0, c = 0, a = this.getActiveFiles(), a.length) {
                for (h = this.getActiveFiles(), f = 0, g = h.length; g > f; f++) b = h[f], d += b.upload.bytesSent, 
                c += b.upload.total;
                e = 100 * d / c;
            } else e = 100;
            return this.emit("totaluploadprogress", e, c, d);
        }, c.prototype._getParamName = function(a) {
            return "function" == typeof this.options.paramName ? this.options.paramName(a) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + a + "]" : "");
        }, c.prototype.getFallbackForm = function() {
            var a, b, d, e;
            return (a = this.getExistingFallback()) ? a : (d = '<div class="dz-fallback">', 
            this.options.dictFallbackText && (d += "<p>" + this.options.dictFallbackText + "</p>"), 
            d += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', 
            b = c.createElement(d), "FORM" !== this.element.tagName ? (e = c.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), 
            e.appendChild(b)) : (this.element.setAttribute("enctype", "multipart/form-data"), 
            this.element.setAttribute("method", this.options.method)), null != e ? e : b);
        }, c.prototype.getExistingFallback = function() {
            var a, b, c, d, e, f;
            for (b = function(a) {
                var b, c, d;
                for (c = 0, d = a.length; d > c; c++) if (b = a[c], /(^| )fallback($| )/.test(b.className)) return b;
            }, f = [ "div", "form" ], d = 0, e = f.length; e > d; d++) if (c = f[d], a = b(this.element.getElementsByTagName(c))) return a;
        }, c.prototype.setupEventListeners = function() {
            var a, b, c, d, e, f, g;
            for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function() {
                var d, e;
                d = a.events, e = [];
                for (b in d) c = d[b], e.push(a.element.addEventListener(b, c, !1));
                return e;
            }());
            return g;
        }, c.prototype.removeEventListeners = function() {
            var a, b, c, d, e, f, g;
            for (f = this.listeners, g = [], d = 0, e = f.length; e > d; d++) a = f[d], g.push(function() {
                var d, e;
                d = a.events, e = [];
                for (b in d) c = d[b], e.push(a.element.removeEventListener(b, c, !1));
                return e;
            }());
            return g;
        }, c.prototype.disable = function() {
            var a, b, c, d, e;
            for (this.clickableElements.forEach(function(a) {
                return a.classList.remove("dz-clickable");
            }), this.removeEventListeners(), d = this.files, e = [], b = 0, c = d.length; c > b; b++) a = d[b], 
            e.push(this.cancelUpload(a));
            return e;
        }, c.prototype.enable = function() {
            return this.clickableElements.forEach(function(a) {
                return a.classList.add("dz-clickable");
            }), this.setupEventListeners();
        }, c.prototype.filesize = function(a) {
            var b, c, d, e, f, g, h, i;
            for (g = [ "TB", "GB", "MB", "KB", "b" ], d = e = null, c = h = 0, i = g.length; i > h; c = ++h) if (f = g[c], 
            b = Math.pow(this.options.filesizeBase, 4 - c) / 10, a >= b) {
                d = a / Math.pow(this.options.filesizeBase, 4 - c), e = f;
                break;
            }
            return d = Math.round(10 * d) / 10, "<strong>" + d + "</strong> " + e;
        }, c.prototype._updateMaxFilesReachedClass = function() {
            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), 
            this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached");
        }, c.prototype.drop = function(a) {
            var b, c;
            a.dataTransfer && (this.emit("drop", a), b = a.dataTransfer.files, b.length && (c = a.dataTransfer.items, 
            c && c.length && null != c[0].webkitGetAsEntry ? this._addFilesFromItems(c) : this.handleFiles(b)));
        }, c.prototype.paste = function(a) {
            var b, c;
            if (null != (null != a ? null != (c = a.clipboardData) ? c.items : void 0 : void 0)) return this.emit("paste", a), 
            b = a.clipboardData.items, b.length ? this._addFilesFromItems(b) : void 0;
        }, c.prototype.handleFiles = function(a) {
            var b, c, d, e;
            for (e = [], c = 0, d = a.length; d > c; c++) b = a[c], e.push(this.addFile(b));
            return e;
        }, c.prototype._addFilesFromItems = function(a) {
            var b, c, d, e, f;
            for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], null != c.webkitGetAsEntry && (b = c.webkitGetAsEntry()) ? b.isFile ? f.push(this.addFile(c.getAsFile())) : b.isDirectory ? f.push(this._addFilesFromDirectory(b, b.name)) : f.push(void 0) : null != c.getAsFile ? null == c.kind || "file" === c.kind ? f.push(this.addFile(c.getAsFile())) : f.push(void 0) : f.push(void 0);
            return f;
        }, c.prototype._addFilesFromDirectory = function(a, b) {
            var c, d;
            return c = a.createReader(), d = function(a) {
                return function(c) {
                    var d, e, f;
                    for (e = 0, f = c.length; f > e; e++) d = c[e], d.isFile ? d.file(function(c) {
                        return a.options.ignoreHiddenFiles && "." === c.name.substring(0, 1) ? void 0 : (c.fullPath = "" + b + "/" + c.name, 
                        a.addFile(c));
                    }) : d.isDirectory && a._addFilesFromDirectory(d, "" + b + "/" + d.name);
                };
            }(this), c.readEntries(d, function(a) {
                return "undefined" != typeof console && null !== console ? "function" == typeof console.log ? console.log(a) : void 0 : void 0;
            });
        }, c.prototype.accept = function(a, b) {
            return a.size > 1024 * this.options.maxFilesize * 1024 ? b(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(a.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : c.isValidFile(a, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (b(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), 
            this.emit("maxfilesexceeded", a)) : this.options.accept.call(this, a, b) : b(this.options.dictInvalidFileType);
        }, c.prototype.addFile = function(a) {
            return a.upload = {
                progress: 0,
                total: a.size,
                bytesSent: 0
            }, this.files.push(a), a.status = c.ADDED, this.emit("addedfile", a), this._enqueueThumbnail(a), 
            this.accept(a, function(b) {
                return function(c) {
                    return c ? (a.accepted = !1, b._errorProcessing([ a ], c)) : (a.accepted = !0, b.options.autoQueue && b.enqueueFile(a)), 
                    b._updateMaxFilesReachedClass();
                };
            }(this));
        }, c.prototype.enqueueFiles = function(a) {
            var b, c, d;
            for (c = 0, d = a.length; d > c; c++) b = a[c], this.enqueueFile(b);
            return null;
        }, c.prototype.enqueueFile = function(a) {
            if (a.status !== c.ADDED || a.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected.");
            return a.status = c.QUEUED, this.options.autoProcessQueue ? setTimeout(function(a) {
                return function() {
                    return a.processQueue();
                };
            }(this), 0) : void 0;
        }, c.prototype._thumbnailQueue = [], c.prototype._processingThumbnail = !1, c.prototype._enqueueThumbnail = function(a) {
            return this.options.createImageThumbnails && a.type.match(/image.*/) && a.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(a), 
            setTimeout(function(a) {
                return function() {
                    return a._processThumbnailQueue();
                };
            }(this), 0)) : void 0;
        }, c.prototype._processThumbnailQueue = function() {
            return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, 
            this.createThumbnail(this._thumbnailQueue.shift(), function(a) {
                return function() {
                    return a._processingThumbnail = !1, a._processThumbnailQueue();
                };
            }(this)));
        }, c.prototype.removeFile = function(a) {
            return a.status === c.UPLOADING && this.cancelUpload(a), this.files = h(this.files, a), 
            this.emit("removedfile", a), 0 === this.files.length ? this.emit("reset") : void 0;
        }, c.prototype.removeAllFiles = function(a) {
            var b, d, e, f;
            for (null == a && (a = !1), f = this.files.slice(), d = 0, e = f.length; e > d; d++) b = f[d], 
            (b.status !== c.UPLOADING || a) && this.removeFile(b);
            return null;
        }, c.prototype.createThumbnail = function(a, b) {
            var c;
            return c = new FileReader(), c.onload = function(d) {
                return function() {
                    return "image/svg+xml" === a.type ? (d.emit("thumbnail", a, c.result), null != b && b(), 
                    void 0) : d.createThumbnailFromUrl(a, c.result, b);
                };
            }(this), c.readAsDataURL(a);
        }, c.prototype.createThumbnailFromUrl = function(a, b, c) {
            var d;
            return d = document.createElement("img"), d.onload = function(b) {
                return function() {
                    var e, g, h, i, j, k, l, m;
                    return a.width = d.width, a.height = d.height, h = b.options.resize.call(b, a), 
                    null == h.trgWidth && (h.trgWidth = h.optWidth), null == h.trgHeight && (h.trgHeight = h.optHeight), 
                    e = document.createElement("canvas"), g = e.getContext("2d"), e.width = h.trgWidth, 
                    e.height = h.trgHeight, f(g, d, null != (j = h.srcX) ? j : 0, null != (k = h.srcY) ? k : 0, h.srcWidth, h.srcHeight, null != (l = h.trgX) ? l : 0, null != (m = h.trgY) ? m : 0, h.trgWidth, h.trgHeight), 
                    i = e.toDataURL("image/png"), b.emit("thumbnail", a, i), null != c ? c() : void 0;
                };
            }(this), null != c && (d.onerror = c), d.src = b;
        }, c.prototype.processQueue = function() {
            var a, b, c, d;
            if (b = this.options.parallelUploads, c = this.getUploadingFiles().length, a = c, 
            !(c >= b) && (d = this.getQueuedFiles(), d.length > 0)) {
                if (this.options.uploadMultiple) return this.processFiles(d.slice(0, b - c));
                for (;b > a; ) {
                    if (!d.length) return;
                    this.processFile(d.shift()), a++;
                }
            }
        }, c.prototype.processFile = function(a) {
            return this.processFiles([ a ]);
        }, c.prototype.processFiles = function(a) {
            var b, d, e;
            for (d = 0, e = a.length; e > d; d++) b = a[d], b.processing = !0, b.status = c.UPLOADING, 
            this.emit("processing", b);
            return this.options.uploadMultiple && this.emit("processingmultiple", a), this.uploadFiles(a);
        }, c.prototype._getFilesWithXhr = function(a) {
            var b, c;
            return c = function() {
                var c, d, e, f;
                for (e = this.files, f = [], c = 0, d = e.length; d > c; c++) b = e[c], b.xhr === a && f.push(b);
                return f;
            }.call(this);
        }, c.prototype.cancelUpload = function(a) {
            var b, d, e, f, g, h, i;
            if (a.status === c.UPLOADING) {
                for (d = this._getFilesWithXhr(a.xhr), e = 0, g = d.length; g > e; e++) b = d[e], 
                b.status = c.CANCELED;
                for (a.xhr.abort(), f = 0, h = d.length; h > f; f++) b = d[f], this.emit("canceled", b);
                this.options.uploadMultiple && this.emit("canceledmultiple", d);
            } else ((i = a.status) === c.ADDED || i === c.QUEUED) && (a.status = c.CANCELED, 
            this.emit("canceled", a), this.options.uploadMultiple && this.emit("canceledmultiple", [ a ]));
            return this.options.autoProcessQueue ? this.processQueue() : void 0;
        }, e = function() {
            var a, b;
            return b = arguments[0], a = 2 <= arguments.length ? i.call(arguments, 1) : [], 
            "function" == typeof b ? b.apply(this, a) : b;
        }, c.prototype.uploadFile = function(a) {
            return this.uploadFiles([ a ]);
        }, c.prototype.uploadFiles = function(a) {
            var b, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L;
            for (w = new XMLHttpRequest(), x = 0, B = a.length; B > x; x++) b = a[x], b.xhr = w;
            p = e(this.options.method, a), u = e(this.options.url, a), w.open(p, u, !0), w.withCredentials = !!this.options.withCredentials, 
            s = null, g = function(c) {
                return function() {
                    var d, e, f;
                    for (f = [], d = 0, e = a.length; e > d; d++) b = a[d], f.push(c._errorProcessing(a, s || c.options.dictResponseError.replace("{{statusCode}}", w.status), w));
                    return f;
                };
            }(this), t = function(c) {
                return function(d) {
                    var e, f, g, h, i, j, k, l, m;
                    if (null != d) for (f = 100 * d.loaded / d.total, g = 0, j = a.length; j > g; g++) b = a[g], 
                    b.upload = {
                        progress: f,
                        total: d.total,
                        bytesSent: d.loaded
                    }; else {
                        for (e = !0, f = 100, h = 0, k = a.length; k > h; h++) b = a[h], (100 !== b.upload.progress || b.upload.bytesSent !== b.upload.total) && (e = !1), 
                        b.upload.progress = f, b.upload.bytesSent = b.upload.total;
                        if (e) return;
                    }
                    for (m = [], i = 0, l = a.length; l > i; i++) b = a[i], m.push(c.emit("uploadprogress", b, f, b.upload.bytesSent));
                    return m;
                };
            }(this), w.onload = function(b) {
                return function(d) {
                    var e;
                    if (a[0].status !== c.CANCELED && 4 === w.readyState) {
                        if (s = w.responseText, w.getResponseHeader("content-type") && ~w.getResponseHeader("content-type").indexOf("application/json")) try {
                            s = JSON.parse(s);
                        } catch (f) {
                            d = f, s = "Invalid JSON response from server.";
                        }
                        return t(), 200 <= (e = w.status) && 300 > e ? b._finished(a, s, d) : g();
                    }
                };
            }(this), w.onerror = function() {
                return function() {
                    return a[0].status !== c.CANCELED ? g() : void 0;
                };
            }(this), r = null != (G = w.upload) ? G : w, r.onprogress = t, j = {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            }, this.options.headers && d(j, this.options.headers);
            for (h in j) i = j[h], w.setRequestHeader(h, i);
            if (f = new FormData(), this.options.params) {
                H = this.options.params;
                for (o in H) v = H[o], f.append(o, v);
            }
            for (y = 0, C = a.length; C > y; y++) b = a[y], this.emit("sending", b, w, f);
            if (this.options.uploadMultiple && this.emit("sendingmultiple", a, w, f), "FORM" === this.element.tagName) for (I = this.element.querySelectorAll("input, textarea, select, button"), 
            z = 0, D = I.length; D > z; z++) if (l = I[z], m = l.getAttribute("name"), n = l.getAttribute("type"), 
            "SELECT" === l.tagName && l.hasAttribute("multiple")) for (J = l.options, A = 0, 
            E = J.length; E > A; A++) q = J[A], q.selected && f.append(m, q.value); else (!n || "checkbox" !== (K = n.toLowerCase()) && "radio" !== K || l.checked) && f.append(m, l.value);
            for (k = F = 0, L = a.length - 1; L >= 0 ? L >= F : F >= L; k = L >= 0 ? ++F : --F) f.append(this._getParamName(k), a[k], a[k].name);
            return w.send(f);
        }, c.prototype._finished = function(a, b, d) {
            var e, f, g;
            for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = c.SUCCESS, this.emit("success", e, b, d), 
            this.emit("complete", e);
            return this.options.uploadMultiple && (this.emit("successmultiple", a, b, d), this.emit("completemultiple", a)), 
            this.options.autoProcessQueue ? this.processQueue() : void 0;
        }, c.prototype._errorProcessing = function(a, b, d) {
            var e, f, g;
            for (f = 0, g = a.length; g > f; f++) e = a[f], e.status = c.ERROR, this.emit("error", e, b, d), 
            this.emit("complete", e);
            return this.options.uploadMultiple && (this.emit("errormultiple", a, b, d), this.emit("completemultiple", a)), 
            this.options.autoProcessQueue ? this.processQueue() : void 0;
        }, c;
    }(b), a.version = "4.0.1", a.options = {}, a.optionsForElement = function(b) {
        return b.getAttribute("id") ? a.options[c(b.getAttribute("id"))] : void 0;
    }, a.instances = [], a.forElement = function(a) {
        if ("string" == typeof a && (a = document.querySelector(a)), null == (null != a ? a.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
        return a.dropzone;
    }, a.autoDiscover = !0, a.discover = function() {
        var b, c, d, e, f, g;
        for (document.querySelectorAll ? d = document.querySelectorAll(".dropzone") : (d = [], 
        b = function(a) {
            var b, c, e, f;
            for (f = [], c = 0, e = a.length; e > c; c++) b = a[c], /(^| )dropzone($| )/.test(b.className) ? f.push(d.push(b)) : f.push(void 0);
            return f;
        }, b(document.getElementsByTagName("div")), b(document.getElementsByTagName("form"))), 
        g = [], e = 0, f = d.length; f > e; e++) c = d[e], a.optionsForElement(c) !== !1 ? g.push(new a(c)) : g.push(void 0);
        return g;
    }, a.blacklistedBrowsers = [ /opera.*Macintosh.*version\/12/i ], a.isBrowserSupported = function() {
        var b, c, d, e, f;
        if (b = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) if ("classList" in document.createElement("a")) for (f = a.blacklistedBrowsers, 
        d = 0, e = f.length; e > d; d++) c = f[d], c.test(navigator.userAgent) && (b = !1); else b = !1; else b = !1;
        return b;
    }, h = function(a, b) {
        var c, d, e, f;
        for (f = [], d = 0, e = a.length; e > d; d++) c = a[d], c !== b && f.push(c);
        return f;
    }, c = function(a) {
        return a.replace(/[\-_](\w)/g, function(a) {
            return a.charAt(1).toUpperCase();
        });
    }, a.createElement = function(a) {
        var b;
        return b = document.createElement("div"), b.innerHTML = a, b.childNodes[0];
    }, a.elementInside = function(a, b) {
        if (a === b) return !0;
        for (;a = a.parentNode; ) if (a === b) return !0;
        return !1;
    }, a.getElement = function(a, b) {
        var c;
        if ("string" == typeof a ? c = document.querySelector(a) : null != a.nodeType && (c = a), 
        null == c) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector or a plain HTML element.");
        return c;
    }, a.getElements = function(a, b) {
        var c, d, e, f, g, h, i, j;
        if (a instanceof Array) {
            e = [];
            try {
                for (f = 0, h = a.length; h > f; f++) d = a[f], e.push(this.getElement(d, b));
            } catch (k) {
                c = k, e = null;
            }
        } else if ("string" == typeof a) for (e = [], j = document.querySelectorAll(a), 
        g = 0, i = j.length; i > g; g++) d = j[g], e.push(d); else null != a.nodeType && (e = [ a ]);
        if (null == e || !e.length) throw new Error("Invalid `" + b + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
        return e;
    }, a.confirm = function(a, b, c) {
        return window.confirm(a) ? b() : null != c ? c() : void 0;
    }, a.isValidFile = function(a, b) {
        var c, d, e, f, g;
        if (!b) return !0;
        for (b = b.split(","), d = a.type, c = d.replace(/\/.*$/, ""), f = 0, g = b.length; g > f; f++) if (e = b[f], 
        e = e.trim(), "." === e.charAt(0)) {
            if (-1 !== a.name.toLowerCase().indexOf(e.toLowerCase(), a.name.length - e.length)) return !0;
        } else if (/\/\*$/.test(e)) {
            if (c === e.replace(/\/.*$/, "")) return !0;
        } else if (d === e) return !0;
        return !1;
    }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(b) {
        return this.each(function() {
            return new a(this, b);
        });
    }), "undefined" != typeof module && null !== module ? module.exports = a : window.Dropzone = a, 
    a.ADDED = "added", a.QUEUED = "queued", a.ACCEPTED = a.QUEUED, a.UPLOADING = "uploading", 
    a.PROCESSING = a.UPLOADING, a.CANCELED = "canceled", a.ERROR = "error", a.SUCCESS = "success", 
    e = function(a) {
        var b, c, d, e, f, g, h, i, j, k;
        for (h = a.naturalWidth, g = a.naturalHeight, c = document.createElement("canvas"), 
        c.width = 1, c.height = g, d = c.getContext("2d"), d.drawImage(a, 0, 0), e = d.getImageData(0, 0, 1, g).data, 
        k = 0, f = g, i = g; i > k; ) b = e[4 * (i - 1) + 3], 0 === b ? f = i : k = i, i = f + k >> 1;
        return j = i / g, 0 === j ? 1 : j;
    }, f = function(a, b, c, d, f, g, h, i, j, k) {
        var l;
        return l = e(b), a.drawImage(b, c, d, f, g, h, i, j, k / l);
    }, d = function(a, b) {
        var c, d, e, f, g, h, i, j, k;
        if (e = !1, k = !0, d = a.document, j = d.documentElement, c = d.addEventListener ? "addEventListener" : "attachEvent", 
        i = d.addEventListener ? "removeEventListener" : "detachEvent", h = d.addEventListener ? "" : "on", 
        f = function(c) {
            return "readystatechange" !== c.type || "complete" === d.readyState ? (("load" === c.type ? a : d)[i](h + c.type, f, !1), 
            !e && (e = !0) ? b.call(a, c.type || c) : void 0) : void 0;
        }, g = function() {
            var a;
            try {
                j.doScroll("left");
            } catch (b) {
                return a = b, setTimeout(g, 50), void 0;
            }
            return f("poll");
        }, "complete" !== d.readyState) {
            if (d.createEventObject && j.doScroll) {
                try {
                    k = !a.frameElement;
                } catch (l) {}
                k && g();
            }
            return d[c](h + "DOMContentLoaded", f, !1), d[c](h + "readystatechange", f, !1), 
            a[c](h + "load", f, !1);
        }
    }, a._autoDiscoverFunction = function() {
        return a.autoDiscover ? a.discover() : void 0;
    }, d(window, a._autoDiscoverFunction);
}.call(this);