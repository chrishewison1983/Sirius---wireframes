/*! Explore prototype 2017-06-30 */
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
}(jQuery, this, this.document);