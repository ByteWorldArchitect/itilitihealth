(() => {
    var z = Object.create,
        h = Object.defineProperty,
        F = Object.getPrototypeOf,
        H = Object.prototype.hasOwnProperty,
        J = Object.getOwnPropertyNames,
        K = Object.getOwnPropertyDescriptor;
    var Q = t => h(t, "__esModule", {
        value: !0
    });
    var T = (t, n) => () => (n || (n = {
        exports: {}
    }, t(n.exports, n)), n.exports);
    var U = (t, n, c) => {
            if (n && typeof n == "object" || typeof n == "function")
                for (let s of J(n)) !H.call(t, s) && s !== "default" && h(t, s, {
                    get: () => n[s],
                    enumerable: !(c = K(n, s)) || c.enumerable
                });
            return t
        },
        V = t => t && t.__esModule ? t : U(Q(h(t != null ? z(F(t)) : {}, "default", {
            value: t,
            enumerable: !0
        })), t);
    var A = T((f, g) => {
        (function(t, n) {
            typeof f == "object" && typeof g == "object" ? g.exports = n() : typeof define == "function" && define.amd ? define([], n) : typeof f == "object" ? f.sal = n() : t.sal = n()
        })(f, function() {
            return (() => {
                "use strict";
                var t = {
                        855: (s, l, u) => {
                            function O(e, a) {
                                var o = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    a && (i = i.filter(function(y) {
                                        return Object.getOwnPropertyDescriptor(e, y).enumerable
                                    })), o.push.apply(o, i)
                                }
                                return o
                            }

                            function w(e) {
                                for (var a = 1; a < arguments.length; a++) {
                                    var o = arguments[a] != null ? arguments[a] : {};
                                    a % 2 ? O(Object(o), !0).forEach(function(i) {
                                        I(e, i, o[i])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : O(Object(o)).forEach(function(i) {
                                        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(o, i))
                                    })
                                }
                                return e
                            }

                            function I(e, a, o) {
                                return a in e ? Object.defineProperty(e, a, {
                                    value: o,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[a] = o, e
                            }
                            u.d(l, {
                                default: () => G
                            });
                            var q = "Sal was not initialised! Probably it is used in SSR.",
                                R = `Your browser does not support IntersectionObserver!
Get a polyfill from here:
https://github.com/w3c/IntersectionObserver/tree/master/polyfill`,
                                r = {
                                    root: null,
                                    rootMargin: "0% 50%",
                                    threshold: .5,
                                    animateClassName: "sal-animate",
                                    disabledClassName: "sal-disabled",
                                    enterEventName: "sal:in",
                                    exitEventName: "sal:out",
                                    selector: "[data-sal]",
                                    once: !0,
                                    disabled: !1
                                },
                                m = [],
                                b = null,
                                j = function(e) {
                                    e && e !== r && (r = w(w({}, r), e))
                                },
                                E = function(e) {
                                    e.classList.remove(r.animateClassName)
                                },
                                N = function(e, a) {
                                    var o = new CustomEvent(e, {
                                        bubbles: !0,
                                        detail: a
                                    });
                                    a.target.dispatchEvent(o)
                                },
                                v = function() {
                                    document.body.classList.add(r.disabledClassName)
                                },
                                P = function() {
                                    b.disconnect(), b = null
                                },
                                k = function() {
                                    return r.disabled || typeof r.disabled == "function" && r.disabled()
                                },
                                B = function(e, a) {
                                    e.forEach(function(o) {
                                        var i = o.target,
                                            y = i.dataset.salRepeat !== void 0,
                                            Y = i.dataset.salOnce !== void 0,
                                            D = y || !(Y || r.once);
                                        o.intersectionRatio >= r.threshold ? (function(d) {
                                            d.target.classList.add(r.animateClassName), N(r.enterEventName, d)
                                        }(o), D || a.unobserve(i)) : D && function(d) {
                                            E(d.target), N(r.exitEventName, d)
                                        }(o)
                                    })
                                },
                                C = function() {
                                    var e = [].filter.call(document.querySelectorAll(r.selector), function(a) {
                                        return ! function(o) {
                                            return o.classList.contains(r.animateClassName)
                                        }(a, r.animateClassName)
                                    });
                                    return e.forEach(function(a) {
                                        return b.observe(a)
                                    }), e
                                },
                                S = function() {
                                    v(), P()
                                },
                                p = function() {
                                    document.body.classList.remove(r.disabledClassName), b = new IntersectionObserver(B, {
                                        root: r.root,
                                        rootMargin: r.rootMargin,
                                        threshold: r.threshold
                                    }), m = C()
                                },
                                L = function() {
                                    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                    P(), Array.from(document.querySelectorAll(r.selector)).forEach(E), j(e), p()
                                },
                                x = function() {
                                    var e = C();
                                    m.push(e)
                                };
                            let G = function() {
                                var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r;
                                if (j(e), typeof window == "undefined") return console.warn(q), {
                                    elements: m,
                                    disable: S,
                                    enable: p,
                                    reset: L,
                                    update: x
                                };
                                if (!window.IntersectionObserver) throw v(), Error(R);
                                return k() ? v() : p(), {
                                    elements: m,
                                    disable: S,
                                    enable: p,
                                    reset: L,
                                    update: x
                                }
                            }
                        }
                    },
                    n = {};

                function c(s) {
                    if (n[s]) return n[s].exports;
                    var l = n[s] = {
                        exports: {}
                    };
                    return t[s](l, l.exports, c), l.exports
                }
                return c.d = (s, l) => {
                    for (var u in l) c.o(l, u) && !c.o(s, u) && Object.defineProperty(s, u, {
                        enumerable: !0,
                        get: l[u]
                    })
                }, c.o = (s, l) => Object.prototype.hasOwnProperty.call(s, l), c(855)
            })().default
        })
    });
    var M = V(A());
    var W = t => {
        document.body ? t() : document.addEventListener("DOMContentLoaded", t)
    };
    W(() => {
        let t = document.querySelectorAll("[data-sal-disabled]");
        if (t.length > 0) {
            let {
                matches: c
            } = window.matchMedia("(min-width:800px)");
            t.forEach(s => {
                s.removeAttribute(c ? "data-sal-disabled" : "data-sal")
            })
        }
        let n = !document.body.classList.contains("in-n-out");
        M.default({
            once: n
        })
    });
})();
//# sourceMappingURL=block-addons.js.map