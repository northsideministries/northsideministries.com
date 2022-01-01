// Realm giving embed code

/* eslint-disable */
export function embedModded() {
  !(function(e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var i = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
      (n.c = t),
      (n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            n.d(
              o,
              i,
              function(t) {
                return e[t];
              }.bind(null, i)
            );
        return o;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = "/"),
      n((n.s = 1));
  })([
    function(e, t, n) {
      "use strict";
      e.exports = n(2);
    },
    function(e, t, n) {
      e.exports = n(5);
    },
    function(e, t, n) {
      const o = n(3);
      (t.iframeResize = o),
        (t.iframeResizer = o),
        (t.iframeResizerContentWindow = n(4));
    },
    function(e, t, n) {
      var o, i, r;
      !(function(n) {
        if ("undefined" != typeof window) {
          var a,
            c = 0,
            u = !1,
            d = !1,
            s = "message".length,
            l = "[iFrameSizer]",
            f = l.length,
            m = null,
            g = window.requestAnimationFrame,
            h = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 },
            p = {},
            y = null,
            w = {
              autoResize: !0,
              bodyBackground: null,
              bodyMargin: null,
              bodyMarginV1: 8,
              bodyPadding: null,
              checkOrigin: !0,
              inPageLinks: !1,
              enablePublicMethods: !0,
              heightCalculationMethod: "bodyOffset",
              id: "iFrameResizer",
              interval: 32,
              log: !1,
              maxHeight: 1 / 0,
              maxWidth: 1 / 0,
              minHeight: 0,
              minWidth: 0,
              resizeFrom: "parent",
              scrolling: !1,
              sizeHeight: !0,
              sizeWidth: !1,
              warningTimeout: 5e3,
              tolerance: 0,
              widthCalculationMethod: "scroll",
              onClose: function() {
                return !0;
              },
              onClosed: function() {},
              onInit: function() {},
              onMessage: function() {
                x("onMessage function not defined");
              },
              onResized: function() {},
              onScroll: function() {
                return !0;
              }
            },
            b = {};
          window.jQuery &&
            ((a = window.jQuery).fn
              ? a.fn.iFrameResize ||
                (a.fn.iFrameResize = function(e) {
                  return this.filter("iframe")
                    .each(function(t, n) {
                      D(n, e);
                    })
                    .end();
                })
              : S("", "Unable to bind to jQuery, it is not fully loaded.")),
            (i = []),
            (r = "function" == typeof (o = _) ? o.apply(t, i) : o) === n ||
              (e.exports = r),
            (window.iFrameResize = window.iFrameResize || _());
        }
        function v() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function I(e, t, n) {
          e.addEventListener(t, n, !1);
        }
        function E(e, t, n) {
          e.removeEventListener(t, n, !1);
        }
        function T(e) {
          return (
            l +
            "[" +
            (function(e) {
              var t = "Host page: " + e;
              return (
                window.top !== window.self &&
                  (t =
                    window.parentIFrame && window.parentIFrame.getId
                      ? window.parentIFrame.getId() + ": " + e
                      : "Nested host page: " + e),
                t
              );
            })(e) +
            "]"
          );
        }
        function O(e) {
          return p[e] ? p[e].log : u;
        }
        function M(e, t) {
          k("log", e, t, O(e));
        }
        function S(e, t) {
          k("info", e, t, O(e));
        }
        function x(e, t) {
          k("warn", e, t, !0);
        }
        function k(e, t, n, o) {
          !0 === o && "object" == typeof window.console && console[e](T(t), n);
        }
        function z(e) {
          function t() {
            i("Height"),
              i("Width"),
              j(
                function() {
                  P(z), A(N), g("onResized", z);
                },
                z,
                "init"
              );
          }
          function n(e) {
            return "border-box" !== e.boxSizing
              ? 0
              : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) +
                  (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0);
          }
          function o(e) {
            return "border-box" !== e.boxSizing
              ? 0
              : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) +
                  (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0);
          }
          function i(e) {
            var t = Number(p[N]["max" + e]),
              n = Number(p[N]["min" + e]),
              o = e.toLowerCase(),
              i = Number(z[o]);
            M(N, "Checking " + o + " is in range " + n + "-" + t),
              i < n && ((i = n), M(N, "Set " + o + " to min value")),
              i > t && ((i = t), M(N, "Set " + o + " to max value")),
              (z[o] = "" + i);
          }
          function r(e) {
            return k.substr(k.indexOf(":") + s + e);
          }
          function a(e, t) {
            var n, o, i;
            (n = function() {
              var n, o;
              H(
                "Send Page Info",
                "pageInfo:" +
                  ((n = document.body.getBoundingClientRect()),
                  (o = z.iframe.getBoundingClientRect()),
                  JSON.stringify({
                    iframeHeight: o.height,
                    iframeWidth: o.width,
                    clientHeight: Math.max(
                      document.documentElement.clientHeight,
                      window.innerHeight || 0
                    ),
                    clientWidth: Math.max(
                      document.documentElement.clientWidth,
                      window.innerWidth || 0
                    ),
                    offsetTop: parseInt(o.top - n.top, 10),
                    offsetLeft: parseInt(o.left - n.left, 10),
                    scrollTop: window.pageYOffset,
                    scrollLeft: window.pageXOffset,
                    documentHeight: document.documentElement.clientHeight,
                    documentWidth: document.documentElement.clientWidth,
                    windowHeight: window.innerHeight,
                    windowWidth: window.innerWidth
                  })),
                e,
                t
              );
            }),
              (o = 32),
              b[(i = t)] ||
                (b[i] = setTimeout(function() {
                  (b[i] = null), n();
                }, o));
          }
          function c(e) {
            var t = e.getBoundingClientRect();
            return (
              F(N),
              {
                x: Math.floor(Number(t.left) + Number(m.x)),
                y: Math.floor(Number(t.top) + Number(m.y))
              }
            );
          }
          function u(e) {
            var t = e ? c(z.iframe) : { x: 0, y: 0 },
              n = { x: Number(z.width) + t.x, y: Number(z.height) + t.y };
            M(
              N,
              "Reposition requested from iFrame (offset x:" +
                t.x +
                " y:" +
                t.y +
                ")"
            ),
              window.top !== window.self
                ? window.parentIFrame
                  ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](
                      n.x,
                      n.y
                    )
                  : x(
                      N,
                      "Unable to scroll to requested position, window.parentIFrame not found"
                    )
                : ((m = n), d(), M(N, "--"));
          }
          function d() {
            !1 !== g("onScroll", m) ? A(N) : L();
          }
          function g(e, t) {
            return R(N, e, t);
          }
          var h,
            y,
            w,
            v,
            T,
            O,
            k = e.data,
            z = {},
            N = null;
          "[iFrameResizerChild]Ready" === k
            ? (function() {
                for (var e in p) H("iFrame requested init", B(e), p[e].iframe, e);
              })()
            : l === ("" + k).substr(0, f) && k.substr(f).split(":")[0] in p
            ? ((w = k.substr(f).split(":")),
              (v = w[1] ? parseInt(w[1], 10) : 0),
              (T = p[w[0]] && p[w[0]].iframe),
              (O = getComputedStyle(T)),
              (z = {
                iframe: T,
                id: w[0],
                height: v + n(O) + o(O),
                width: w[2],
                type: w[3]
              }),
              (N = z.id),
              p[N] && (p[N].loaded = !0),
              (y = z.type in { true: 1, false: 1, undefined: 1 }) &&
                M(N, "Ignoring init message from meta parent page"),
              !y &&
                (function(e) {
                  var t = !0;
                  return (
                    p[e] ||
                      ((t = !1),
                      x(
                        z.type + " No settings for " + e + ". Message was: " + k
                      )),
                    t
                  );
                })(N) &&
                (M(N, "Received: " + k),
                (h = !0),
                null === z.iframe &&
                  (x(N, "IFrame (" + z.id + ") not found"), (h = !1)),
                h &&
                  (function() {
                    var t,
                      n = e.origin,
                      o = p[N] && p[N].checkOrigin;
                    if (
                      o &&
                      "" + n != "null" &&
                      !(o.constructor === Array
                        ? (function() {
                            var e = 0,
                              t = !1;
                            for (
                              M(
                                N,
                                "Checking connection is from allowed list of origins: " +
                                  o
                              );
                              e < o.length;
                              e++
                            )
                              if (o[e] === n) {
                                t = !0;
                                break;
                              }
                            return t;
                          })()
                        : ((t = p[N] && p[N].remoteHost),
                          M(N, "Checking connection is from: " + t),
                          n === t))
                    )
                      throw new Error(
                        "Unexpected message received from: " +
                          n +
                          " for " +
                          z.iframe.id +
                          ". Message was: " +
                          e.data +
                          ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains."
                      );
                    return !0;
                  })() &&
                  (function() {
                    switch (
                      (p[N] && p[N].firstRun && p[N] && (p[N].firstRun = !1),
                      z.type)
                    ) {
                      case "close":
                        C(z.iframe);
                        break;
                      case "message":
                        (e = r(6)),
                          M(
                            N,
                            "onMessage passed: {iframe: " +
                              z.iframe.id +
                              ", message: " +
                              e +
                              "}"
                          ),
                          g("onMessage", {
                            iframe: z.iframe,
                            message: JSON.parse(e)
                          }),
                          M(N, "--");
                        break;
                      case "autoResize":
                        p[N].autoResize = JSON.parse(r(9));
                        break;
                      case "scrollTo":
                        u(!1);
                        break;
                      case "scrollToOffset":
                        u(!0);
                        break;
                      case "pageInfo":
                        a(p[N] && p[N].iframe, N),
                          (function() {
                            function e(e, o) {
                              function i() {
                                p[n] ? a(p[n].iframe, n) : t();
                              }
                              ["scroll", "resize"].forEach(function(t) {
                                M(n, e + t + " listener for sendPageInfo"),
                                  o(window, t, i);
                              });
                            }
                            function t() {
                              e("Remove ", E);
                            }
                            var n = N;
                            e("Add ", I), p[n] && (p[n].stopPageInfo = t);
                          })();
                        break;
                      case "pageInfoStop":
                        p[N] &&
                          p[N].stopPageInfo &&
                          (p[N].stopPageInfo(), delete p[N].stopPageInfo);
                        break;
                      case "inPageLink":
                        !(function(e) {
                          var t,
                            n = e.split("#")[1] || "",
                            o = decodeURIComponent(n),
                            i =
                              document.getElementById(o) ||
                              document.getElementsByName(o)[0];
                          i
                            ? ((t = c(i)),
                              M(
                                N,
                                "Moving to in page link (#" +
                                  n +
                                  ") at x: " +
                                  t.x +
                                  " y: " +
                                  t.y
                              ),
                              (m = { x: t.x, y: t.y }),
                              d(),
                              M(N, "--"))
                            : window.top !== window.self
                            ? window.parentIFrame
                              ? window.parentIFrame.moveToAnchor(n)
                              : M(
                                  N,
                                  "In page link #" +
                                    n +
                                    " not found and window.parentIFrame not found"
                                )
                            : M(N, "In page link #" + n + " not found");
                        })(r(9));
                        break;
                      case "reset":
                        W(z);
                        break;
                      case "init":
                        t(), g("onInit", z.iframe);
                        break;
                      default:
                        t();
                    }
                    var e;
                  })()))
            : S(N, "Ignored: " + k);
        }
        function R(e, t, n) {
          var o = null,
            i = null;
          if (p[e]) {
            if ("function" != typeof (o = p[e][t]))
              throw new TypeError(t + " on iFrame[" + e + "] is not a function");
            i = o(n);
          }
          return i;
        }
        function N(e) {
          var t = e.id;
          delete p[t];
        }
        function C(e) {
          var t = e.id;
          if (!1 !== R(t, "onClose", t)) {
            M(t, "Removing iFrame: " + t);
            try {
              e.parentNode && e.parentNode.removeChild(e);
            } catch (e) {
              x(e);
            }
            R(t, "onClosed", t), M(t, "--"), N(e);
          } else M(t, "Close iframe cancelled by onClose event");
        }
        function F(e) {
          null === m &&
            M(
              e,
              "Get page position: " +
                (m = {
                  x:
                    window.pageXOffset !== n
                      ? window.pageXOffset
                      : document.documentElement.scrollLeft,
                  y:
                    window.pageYOffset !== n
                      ? window.pageYOffset
                      : document.documentElement.scrollTop
                }).x +
                "," +
                m.y
            );
        }
        function A(e) {
          null !== m &&
            (window.scrollTo(m.x, m.y),
            M(e, "Set page position: " + m.x + "," + m.y),
            L());
        }
        function L() {
          m = null;
        }
        function W(e) {
          M(
            e.id,
            "Size reset requested by " +
              ("init" === e.type ? "host page" : "iFrame")
          ),
            F(e.id),
            j(
              function() {
                P(e), H("reset", "reset", e.iframe, e.id);
              },
              e,
              "reset"
            );
        }
        function P(e) {
          function t(t) {
            d ||
              "0" !== e[t] ||
              ((d = !0),
              M(o, "Hidden iFrame detected, creating visibility listener"),
              (function() {
                function e() {
                  Object.keys(p).forEach(function(e) {
                    !(function(e) {
                      function t(t) {
                        return "0px" === (p[e] && p[e].iframe.style[t]);
                      }
                      p[e] &&
                        null !== p[e].iframe.offsetParent &&
                        (t("height") || t("width")) &&
                        H("Visibility change", "resize", p[e].iframe, e);
                    })(e);
                  });
                }
                function t(t) {
                  M(
                    "window",
                    "Mutation observed: " + t[0].target + " " + t[0].type
                  ),
                    q(e, 16);
                }
                var n = v();
                n &&
                  ((o = document.querySelector("body")),
                  new n(t).observe(o, {
                    attributes: !0,
                    attributeOldValue: !1,
                    characterData: !0,
                    characterDataOldValue: !1,
                    childList: !0,
                    subtree: !0
                  }));
                var o;
              })());
          }
          function n(n) {
            !(function(t) {
              e.id
                ? ((e.iframe.style[t] = e[t] + "px"),
                  M(e.id, "IFrame (" + o + ") " + t + " set to " + e[t] + "px"))
                : M("undefined", "messageData id not set");
            })(n),
              t(n);
          }
          var o = e.iframe.id;
          p[o] && (p[o].sizeHeight && n("height"), p[o].sizeWidth && n("width"));
        }
        function j(e, t, n) {
          n !== t.type && g && !window.jasmine
            ? (M(t.id, "Requesting animation frame"), g(e))
            : e();
        }
        function H(e, t, n, o, i) {
          var r,
            a = !1;
          (o = o || n.id),
            p[o] &&
              (n && "contentWindow" in n && null !== n.contentWindow
                ? ((r = p[o] && p[o].targetOrigin),
                  M(
                    o,
                    "[" +
                      e +
                      "] Sending msg to iframe[" +
                      o +
                      "] (" +
                      t +
                      ") targetOrigin: " +
                      r
                  ),
                  n.contentWindow.postMessage(l + t, r))
                : x(o, "[" + e + "] IFrame(" + o + ") not found"),
              i &&
                p[o] &&
                p[o].warningTimeout &&
                (p[o].msgTimeout = setTimeout(function() {
                  !p[o] ||
                    p[o].loaded ||
                    a ||
                    ((a = !0),
                    x(
                      o,
                      "IFrame has not responded within " +
                        p[o].warningTimeout / 1e3 +
                        " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."
                    ));
                }, p[o].warningTimeout)));
        }
        function B(e) {
          return (
            e +
            ":" +
            p[e].bodyMarginV1 +
            ":" +
            p[e].sizeWidth +
            ":" +
            p[e].log +
            ":" +
            p[e].interval +
            ":" +
            p[e].enablePublicMethods +
            ":" +
            p[e].autoResize +
            ":" +
            p[e].bodyMargin +
            ":" +
            p[e].heightCalculationMethod +
            ":" +
            p[e].bodyBackground +
            ":" +
            p[e].bodyPadding +
            ":" +
            p[e].tolerance +
            ":" +
            p[e].inPageLinks +
            ":" +
            p[e].resizeFrom +
            ":" +
            p[e].widthCalculationMethod
          );
        }
        function D(e, t) {
          function o(e) {
            var t = e.split("Callback");
            if (2 === t.length) {
              var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
              (this[n] = this[e]),
                delete this[e],
                x(
                  a,
                  "Deprecated: '" +
                    e +
                    "' has been renamed '" +
                    n +
                    "'. The old method will be removed in the next major version."
                );
            }
          }
          var i,
            r,
            a = (function(n) {
              var o;
              return (
                "" === n &&
                  ((e.id =
                    ((o = (t && t.id) || w.id + c++),
                    null !== document.getElementById(o) && (o += c++),
                    (n = o))),
                  (u = (t || {}).log),
                  M(n, "Added missing iframe ID: " + n + " (" + e.src + ")")),
                n
              );
            })(e.id);
          a in p && "iFrameResizer" in e
            ? x(a, "Ignored iFrame, already setup.")
            : (!(function(t) {
                var n;
                (t = t || {}),
                  (p[a] = {
                    firstRun: !0,
                    iframe: e,
                    remoteHost:
                      e.src &&
                      e.src
                        .split("/")
                        .slice(0, 3)
                        .join("/")
                  }),
                  (function(e) {
                    if ("object" != typeof e)
                      throw new TypeError("Options is not an object");
                  })(t),
                  Object.keys(t).forEach(o, t),
                  (function(e) {
                    for (var t in w)
                      Object.prototype.hasOwnProperty.call(w, t) &&
                        (p[a][t] = Object.prototype.hasOwnProperty.call(e, t)
                          ? e[t]
                          : w[t]);
                  })(t),
                  p[a] &&
                    (p[a].targetOrigin =
                      !0 === p[a].checkOrigin
                        ? "" === (n = p[a].remoteHost) || "file://" === n
                          ? "*"
                          : n
                        : "*");
              })(t),
              (function() {
                switch (
                  (M(
                    a,
                    "IFrame scrolling " +
                      (p[a] && p[a].scrolling ? "enabled" : "disabled") +
                      " for " +
                      a
                  ),
                  (e.style.overflow =
                    !1 === (p[a] && p[a].scrolling) ? "hidden" : "auto"),
                  p[a] && p[a].scrolling)
                ) {
                  case "omit":
                    break;
                  case !0:
                    e.scrolling = "yes";
                    break;
                  case !1:
                    e.scrolling = "no";
                    break;
                  default:
                    e.scrolling = p[a] ? p[a].scrolling : "no";
                }
              })(),
              (function() {
                function t(t) {
                  1 / 0 !== p[a][t] &&
                    0 !== p[a][t] &&
                    ((e.style[t] = p[a][t] + "px"),
                    M(a, "Set " + t + " = " + p[a][t] + "px"));
                }
                function n(e) {
                  if (p[a]["min" + e] > p[a]["max" + e])
                    throw new Error(
                      "Value for min" + e + " can not be greater than max" + e
                    );
                }
                n("Height"),
                  n("Width"),
                  t("maxHeight"),
                  t("minHeight"),
                  t("maxWidth"),
                  t("minWidth");
              })(),
              ("number" != typeof (p[a] && p[a].bodyMargin) &&
                "0" !== (p[a] && p[a].bodyMargin)) ||
                ((p[a].bodyMarginV1 = p[a].bodyMargin),
                (p[a].bodyMargin = p[a].bodyMargin + "px")),
              (i = B(a)),
              (r = v()) &&
                (function(t) {
                  e.parentNode &&
                    new t(function(t) {
                      t.forEach(function(t) {
                        Array.prototype.slice
                          .call(t.removedNodes)
                          .forEach(function(t) {
                            t === e && C(e);
                          });
                      });
                    }).observe(e.parentNode, { childList: !0 });
                })(r),
              I(e, "load", function() {
                var t, o;
                H("iFrame.onload", i, e, n, !0),
                  (t = p[a] && p[a].firstRun),
                  (o = p[a] && p[a].heightCalculationMethod in h),
                  !t && o && W({ iframe: e, height: 0, width: 0, type: "init" });
              }),
              H("init", i, e, n, !0),
              p[a] &&
                (p[a].iframe.iFrameResizer = {
                  close: C.bind(null, p[a].iframe),
                  removeListeners: N.bind(null, p[a].iframe),
                  resize: H.bind(null, "Window resize", "resize", p[a].iframe),
                  moveToAnchor: function(e) {
                    H("Move to anchor", "moveToAnchor:" + e, p[a].iframe, a);
                  },
                  sendMessage: function(e) {
                    H(
                      "Send Message",
                      "message:" + (e = JSON.stringify(e)),
                      p[a].iframe,
                      a
                    );
                  }
                }));
        }
        function q(e, t) {
          null === y &&
            (y = setTimeout(function() {
              (y = null), e();
            }, t));
        }
        function U() {
          "hidden" !== document.visibilityState &&
            (M("document", "Trigger event: Visiblity change"),
            q(function() {
              J("Tab Visable", "resize");
            }, 16));
        }
        function J(e, t) {
          Object.keys(p).forEach(function(n) {
            (function(e) {
              return (
                p[e] &&
                "parent" === p[e].resizeFrom &&
                p[e].autoResize &&
                !p[e].firstRun
              );
            })(n) && H(e, t, p[n].iframe, n);
          });
        }
        function V() {
          I(window, "message", z),
            I(window, "resize", function() {
              var e;
              M("window", "Trigger event: " + (e = "resize")),
                q(function() {
                  J("Window " + e, "resize");
                }, 16);
            }),
            I(document, "visibilitychange", U),
            I(document, "-webkit-visibilitychange", U);
        }
        function _() {
          function e(e, n) {
            n &&
              (!(function() {
                if (!n.tagName)
                  throw new TypeError("Object is not a valid DOM element");
                if ("IFRAME" !== n.tagName.toUpperCase())
                  throw new TypeError(
                    "Expected <IFRAME> tag, found <" + n.tagName + ">"
                  );
              })(),
              D(n, e),
              t.push(n));
          }
          var t;
          return (
            (function() {
              var e,
                t = ["moz", "webkit", "o", "ms"];
              for (e = 0; e < t.length && !g; e += 1)
                g = window[t[e] + "RequestAnimationFrame"];
              g || M("setup", "RequestAnimationFrame not supported");
            })(),
            V(),
            function(o, i) {
              switch (
                ((t = []),
                (function(e) {
                  e &&
                    e.enablePublicMethods &&
                    x(
                      "enablePublicMethods option has been removed, public methods are now always available in the iFrame"
                    );
                })(o),
                typeof i)
              ) {
                case "undefined":
                case "string":
                  Array.prototype.forEach.call(
                    document.querySelectorAll(i || "iframe"),
                    e.bind(n, o)
                  );
                  break;
                case "object":
                  e(o, i);
                  break;
                default:
                  throw new TypeError("Unexpected data type (" + typeof i + ")");
              }
              return t;
            }
          );
        }
      })();
    },
    function(e, t, n) {
      !(function(t) {
        if ("undefined" != typeof window) {
          var n = !0,
            o = 10,
            i = "",
            r = 0,
            a = "",
            c = null,
            u = "",
            d = !1,
            s = { resize: 1, click: 1 },
            l = 128,
            f = !0,
            m = 1,
            g = "bodyOffset",
            h = g,
            p = !0,
            y = "",
            w = {},
            b = 32,
            v = null,
            I = !1,
            E = "[iFrameSizer]",
            T = E.length,
            O = "",
            M = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 },
            S = "child",
            x = !0,
            k = window.parent,
            z = "*",
            R = 0,
            N = !1,
            C = null,
            F = 16,
            A = 1,
            L = "scroll",
            W = L,
            P = window,
            j = function() {
              ce("onMessage function not defined");
            },
            H = function() {},
            B = function() {},
            D = {
              height: function() {
                return (
                  ce("Custom height calculation function not defined"),
                  document.documentElement.offsetHeight
                );
              },
              width: function() {
                return (
                  ce("Custom width calculation function not defined"),
                  document.body.scrollWidth
                );
              }
            },
            q = {},
            U = !1;
          try {
            var J = Object.create(
              {},
              {
                passive: {
                  get: function() {
                    U = !0;
                  }
                }
              }
            );
            window.addEventListener("test", ne, J),
              window.removeEventListener("test", ne, J);
          } catch (e) {}
          var V,
            _,
            Q,
            X,
            Y,
            K,
            G,
            Z =
              Date.now ||
              function() {
                return new Date().getTime();
              },
            $ = {
              bodyOffset: function() {
                return (
                  document.body.offsetHeight +
                  we("marginTop") +
                  we("marginBottom")
                );
              },
              offset: function() {
                return $.bodyOffset();
              },
              bodyScroll: function() {
                return document.body.scrollHeight;
              },
              custom: function() {
                return D.height();
              },
              documentElementOffset: function() {
                return document.documentElement.offsetHeight;
              },
              documentElementScroll: function() {
                return document.documentElement.scrollHeight;
              },
              max: function() {
                return Math.max.apply(null, ve($));
              },
              min: function() {
                return Math.min.apply(null, ve($));
              },
              grow: function() {
                return $.max();
              },
              lowestElement: function() {
                return Math.max(
                  $.bodyOffset() || $.documentElementOffset(),
                  be("bottom", Ee())
                );
              },
              taggedElement: function() {
                return Ie("bottom", "data-iframe-height");
              }
            },
            ee = {
              bodyScroll: function() {
                return document.body.scrollWidth;
              },
              bodyOffset: function() {
                return document.body.offsetWidth;
              },
              custom: function() {
                return D.width();
              },
              documentElementScroll: function() {
                return document.documentElement.scrollWidth;
              },
              documentElementOffset: function() {
                return document.documentElement.offsetWidth;
              },
              scroll: function() {
                return Math.max(ee.bodyScroll(), ee.documentElementScroll());
              },
              max: function() {
                return Math.max.apply(null, ve(ee));
              },
              min: function() {
                return Math.min.apply(null, ve(ee));
              },
              rightMostElement: function() {
                return be("right", Ee());
              },
              taggedElement: function() {
                return Ie("right", "data-iframe-width");
              }
            },
            te =
              ((V = Te),
              (Y = null),
              (K = 0),
              (G = function() {
                (K = Z()), (Y = null), (X = V.apply(_, Q)), Y || (_ = Q = null);
              }),
              function() {
                var e = Z();
                K || (K = e);
                var t = F - (e - K);
                return (
                  (_ = this),
                  (Q = arguments),
                  t <= 0 || t > F
                    ? (Y && (clearTimeout(Y), (Y = null)),
                      (K = e),
                      (X = V.apply(_, Q)),
                      Y || (_ = Q = null))
                    : Y || (Y = setTimeout(G, t)),
                  X
                );
              });
          oe(window, "message", function(t) {
            var n = {
              init: function() {
                (y = t.data),
                  (k = t.source),
                  ue(),
                  (f = !1),
                  setTimeout(function() {
                    p = !1;
                  }, l);
              },
              reset: function() {
                p
                  ? ae("Page reset ignored by init")
                  : (ae("Page size reset by host page"), Se("resetPage"));
              },
              resize: function() {
                Oe("resizeParent", "Parent window requested size check");
              },
              moveToAnchor: function() {
                w.findTarget(i());
              },
              inPageLink: function() {
                this.moveToAnchor();
              },
              pageInfo: function() {
                var e = i();
                ae("PageInfoFromParent called from parent: " + e),
                  B(JSON.parse(e)),
                  ae(" --");
              },
              message: function() {
                var e = i();
                ae("onMessage called from parent: " + e),
                  j(JSON.parse(e)),
                  ae(" --");
              }
            };
            function o() {
              return t.data.split("]")[1].split(":")[0];
            }
            function i() {
              return t.data.substr(t.data.indexOf(":") + 1);
            }
            function r() {
              return t.data.split(":")[2] in { true: 1, false: 1 };
            }
            function a() {
              var i = o();
              i in n
                ? n[i]()
                : (!e.exports && "iFrameResize" in window) ||
                  ("jQuery" in window &&
                    "iFrameResize" in window.jQuery.prototype) ||
                  r() ||
                  ce("Unexpected message (" + t.data + ")");
            }
            E === ("" + t.data).substr(0, T) &&
              (!1 === f
                ? a()
                : r()
                ? n.init()
                : ae(
                    'Ignored message of type "' +
                      o() +
                      '". Received before initialization.'
                  ));
          }),
            oe(window, "readystatechange", ze),
            ze();
        }
        function ne() {}
        function oe(e, t, n, o) {
          e.addEventListener(t, n, !!U && (o || {}));
        }
        function ie(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
        function re(e) {
          return E + "[" + O + "] " + e;
        }
        function ae(e) {
          I && "object" == typeof window.console && console.log(re(e));
        }
        function ce(e) {
          "object" == typeof window.console && console.warn(re(e));
        }
        function ue() {
          var e;
          !(function() {
            function e(e) {
              return "true" === e;
            }
            var o = y.substr(T).split(":");
            (O = o[0]),
              (r = t !== o[1] ? Number(o[1]) : r),
              (d = t !== o[2] ? e(o[2]) : d),
              (I = t !== o[3] ? e(o[3]) : I),
              (b = t !== o[4] ? Number(o[4]) : b),
              (n = t !== o[6] ? e(o[6]) : n),
              (a = o[7]),
              (h = t !== o[8] ? o[8] : h),
              (i = o[9]),
              (u = o[10]),
              (R = t !== o[11] ? Number(o[11]) : R),
              (w.enable = t !== o[12] && e(o[12])),
              (S = t !== o[13] ? o[13] : S),
              (W = t !== o[14] ? o[14] : W);
          })(),
            ae("Initialising iFrame (" + location.href + ")"),
            (function() {
              function e(e, t) {
                return (
                  "function" == typeof e &&
                    (ae("Setup custom " + t + "CalcMethod"),
                    (D[t] = e),
                    (e = "custom")),
                  e
                );
              }
              "iFrameResizer" in window &&
                Object === window.iFrameResizer.constructor &&
                ((t = window.iFrameResizer),
                ae("Reading data from page: " + JSON.stringify(t)),
                Object.keys(t).forEach(de, t),
                (j = "onMessage" in t ? t.onMessage : j),
                (H = "onReady" in t ? t.onReady : H),
                (z = "targetOrigin" in t ? t.targetOrigin : z),
                (h =
                  "heightCalculationMethod" in t ? t.heightCalculationMethod : h),
                (W =
                  "widthCalculationMethod" in t ? t.widthCalculationMethod : W),
                (h = e(h, "height")),
                (W = e(W, "width")));
              var t;
              ae("TargetOrigin for parent set to: " + z);
            })(),
            (function() {
              t === a && (a = r + "px");
              se(
                "margin",
                (function(e, t) {
                  -1 !== t.indexOf("-") &&
                    (ce("Negative CSS value ignored for " + e), (t = ""));
                  return t;
                })("margin", a)
              );
            })(),
            se("background", i),
            se("padding", u),
            ((e = document.createElement("div")).style.clear = "both"),
            (e.style.display = "block"),
            (e.style.height = "0"),
            document.body.appendChild(e),
            ge(),
            he(),
            (document.documentElement.style.height = ""),
            (document.body.style.height = ""),
            ae('HTML & body height set to "auto"'),
            ae("Enable public methods"),
            (P.parentIFrame = {
              autoResize: function(e) {
                return (
                  !0 === e && !1 === n
                    ? ((n = !0), pe())
                    : !1 === e &&
                      !0 === n &&
                      ((n = !1),
                      fe("remove"),
                      null !== c && c.disconnect(),
                      clearInterval(v)),
                  ke(0, 0, "autoResize", JSON.stringify(n)),
                  n
                );
              },
              close: function() {
                ke(0, 0, "close");
              },
              getId: function() {
                return O;
              },
              getPageInfo: function(e) {
                "function" == typeof e
                  ? ((B = e), ke(0, 0, "pageInfo"))
                  : ((B = function() {}), ke(0, 0, "pageInfoStop"));
              },
              moveToAnchor: function(e) {
                w.findTarget(e);
              },
              reset: function() {
                xe("parentIFrame.reset");
              },
              scrollTo: function(e, t) {
                ke(t, e, "scrollTo");
              },
              scrollToOffset: function(e, t) {
                ke(t, e, "scrollToOffset");
              },
              sendMessage: function(e, t) {
                ke(0, 0, "message", JSON.stringify(e), t);
              },
              setHeightCalculationMethod: function(e) {
                (h = e), ge();
              },
              setWidthCalculationMethod: function(e) {
                (W = e), he();
              },
              setTargetOrigin: function(e) {
                ae("Set targetOrigin: " + e), (z = e);
              },
              size: function(e, t) {
                Oe(
                  "size",
                  "parentIFrame.size(" + (e || "") + (t ? "," + t : "") + ")",
                  e,
                  t
                );
              }
            }),
            pe(),
            (w = (function() {
              function e(e) {
                var n = e.getBoundingClientRect(),
                  o = {
                    x:
                      window.pageXOffset !== t
                        ? window.pageXOffset
                        : document.documentElement.scrollLeft,
                    y:
                      window.pageYOffset !== t
                        ? window.pageYOffset
                        : document.documentElement.scrollTop
                  };
                return {
                  x: parseInt(n.left, 10) + parseInt(o.x, 10),
                  y: parseInt(n.top, 10) + parseInt(o.y, 10)
                };
              }
              function n(n) {
                var o = n.split("#")[1] || n,
                  i = decodeURIComponent(o),
                  r =
                    document.getElementById(i) ||
                    document.getElementsByName(i)[0];
                t !== r
                  ? (function(t) {
                      var n = e(t);
                      ae(
                        "Moving to in page link (#" +
                          o +
                          ") at x: " +
                          n.x +
                          " y: " +
                          n.y
                      ),
                        ke(n.y, n.x, "scrollToOffset");
                    })(r)
                  : (ae(
                      "In page link (#" +
                        o +
                        ") not found in iFrame, so sending to parent"
                    ),
                    ke(0, 0, "inPageLink", "#" + o));
              }
              function o() {
                "" !== location.hash && "#" !== location.hash && n(location.href);
              }
              w.enable
                ? Array.prototype.forEach && document.querySelectorAll
                  ? (ae("Setting up location.hash handlers"),
                    Array.prototype.forEach.call(
                      document.querySelectorAll('a[href^="#"]'),
                      function(e) {
                        "#" !== e.getAttribute("href") &&
                          oe(e, "click", function(e) {
                            e.preventDefault(), n(this.getAttribute("href"));
                          });
                      }
                    ),
                    oe(window, "hashchange", o),
                    setTimeout(o, l))
                  : ce(
                      "In page linking not fully supported in this browser! (See README.md for IE8 workaround)"
                    )
                : ae("In page linking not enabled");
              return { findTarget: n };
            })()),
            Oe("init", "Init message from host page"),
            H();
        }
        function de(e) {
          var t = e.split("Callback");
          if (2 === t.length) {
            var n = "on" + t[0].charAt(0).toUpperCase() + t[0].slice(1);
            (this[n] = this[e]),
              delete this[e],
              ce(
                "Deprecated: '" +
                  e +
                  "' has been renamed '" +
                  n +
                  "'. The old method will be removed in the next major version."
              );
          }
        }
        function se(e, n) {
          t !== n &&
            "" !== n &&
            "null" !== n &&
            ((document.body.style[e] = n),
            ae("Body " + e + ' set to "' + n + '"'));
        }
        function le(e) {
          var t = {
            add: function(t) {
              function n() {
                Oe(e.eventName, e.eventType);
              }
              (q[t] = n), oe(window, t, n, { passive: !0 });
            },
            remove: function(e) {
              var t,
                n,
                o,
                i = q[e];
              delete q[e],
                (t = window),
                (n = e),
                (o = i),
                t.removeEventListener(n, o, !1);
            }
          };
          e.eventNames && Array.prototype.map
            ? ((e.eventName = e.eventNames[0]), e.eventNames.map(t[e.method]))
            : t[e.method](e.eventName),
            ae(ie(e.method) + " event listener: " + e.eventType);
        }
        function fe(e) {
          le({
            method: e,
            eventType: "Animation Start",
            eventNames: ["animationstart", "webkitAnimationStart"]
          }),
            le({
              method: e,
              eventType: "Animation Iteration",
              eventNames: ["animationiteration", "webkitAnimationIteration"]
            }),
            le({
              method: e,
              eventType: "Animation End",
              eventNames: ["animationend", "webkitAnimationEnd"]
            }),
            le({ method: e, eventType: "Input", eventName: "input" }),
            le({ method: e, eventType: "Mouse Up", eventName: "mouseup" }),
            le({ method: e, eventType: "Mouse Down", eventName: "mousedown" }),
            le({
              method: e,
              eventType: "Orientation Change",
              eventName: "orientationchange"
            }),
            le({
              method: e,
              eventType: "Print",
              eventName: ["afterprint", "beforeprint"]
            }),
            le({
              method: e,
              eventType: "Ready State Change",
              eventName: "readystatechange"
            }),
            le({ method: e, eventType: "Touch Start", eventName: "touchstart" }),
            le({ method: e, eventType: "Touch End", eventName: "touchend" }),
            le({
              method: e,
              eventType: "Touch Cancel",
              eventName: "touchcancel"
            }),
            le({
              method: e,
              eventType: "Transition Start",
              eventNames: [
                "transitionstart",
                "webkitTransitionStart",
                "MSTransitionStart",
                "oTransitionStart",
                "otransitionstart"
              ]
            }),
            le({
              method: e,
              eventType: "Transition Iteration",
              eventNames: [
                "transitioniteration",
                "webkitTransitionIteration",
                "MSTransitionIteration",
                "oTransitionIteration",
                "otransitioniteration"
              ]
            }),
            le({
              method: e,
              eventType: "Transition End",
              eventNames: [
                "transitionend",
                "webkitTransitionEnd",
                "MSTransitionEnd",
                "oTransitionEnd",
                "otransitionend"
              ]
            }),
            "child" === S &&
              le({ method: e, eventType: "IFrame Resized", eventName: "resize" });
        }
        function me(e, t, n, o) {
          return (
            t !== e &&
              (e in n ||
                (ce(e + " is not a valid option for " + o + "CalculationMethod."),
                (e = t)),
              ae(o + ' calculation method set to "' + e + '"')),
            e
          );
        }
        function ge() {
          h = me(h, g, $, "height");
        }
        function he() {
          W = me(W, L, ee, "width");
        }
        function pe() {
          var e;
          !0 === n
            ? (fe("add"),
              (e = 0 > b),
              window.MutationObserver || window.WebKitMutationObserver
                ? e
                  ? ye()
                  : (c = (function() {
                      function e(e) {
                        function t(e) {
                          !1 === e.complete &&
                            (ae("Attach listeners to " + e.src),
                            e.addEventListener("load", i, !1),
                            e.addEventListener("error", r, !1),
                            c.push(e));
                        }
                        "attributes" === e.type && "src" === e.attributeName
                          ? t(e.target)
                          : "childList" === e.type &&
                            Array.prototype.forEach.call(
                              e.target.querySelectorAll("img"),
                              t
                            );
                      }
                      function n(e) {
                        ae("Remove listeners from " + e.src),
                          e.removeEventListener("load", i, !1),
                          e.removeEventListener("error", r, !1),
                          (function(e) {
                            c.splice(c.indexOf(e), 1);
                          })(e);
                      }
                      function o(e, o, i) {
                        n(e.target), Oe(o, i + ": " + e.target.src, t, t);
                      }
                      function i(e) {
                        o(e, "imageLoad", "Image loaded");
                      }
                      function r(e) {
                        o(e, "imageLoadFailed", "Image load failed");
                      }
                      function a(t) {
                        Oe(
                          "mutationObserver",
                          "mutationObserver: " + t[0].target + " " + t[0].type
                        ),
                          t.forEach(e);
                      }
                      var c = [],
                        u =
                          window.MutationObserver ||
                          window.WebKitMutationObserver,
                        d = (function() {
                          var e = document.querySelector("body");
                          return (
                            (d = new u(a)),
                            ae("Create body MutationObserver"),
                            d.observe(e, {
                              attributes: !0,
                              attributeOldValue: !1,
                              characterData: !0,
                              characterDataOldValue: !1,
                              childList: !0,
                              subtree: !0
                            }),
                            d
                          );
                        })();
                      return {
                        disconnect: function() {
                          "disconnect" in d &&
                            (ae("Disconnect body MutationObserver"),
                            d.disconnect(),
                            c.forEach(n));
                        }
                      };
                    })())
                : (ae("MutationObserver not supported in this browser!"), ye()))
            : ae("Auto Resize disabled");
        }
        function ye() {
          0 !== b &&
            (ae("setInterval: " + b + "ms"),
            (v = setInterval(function() {
              Oe("interval", "setInterval: " + b);
            }, Math.abs(b))));
        }
        function we(e, t) {
          var n = 0;
          return (
            (t = t || document.body),
            (n =
              null !== (n = document.defaultView.getComputedStyle(t, null))
                ? n[e]
                : 0),
            parseInt(n, o)
          );
        }
        function be(e, t) {
          for (
            var n = t.length, o = 0, i = 0, r = ie(e), a = Z(), c = 0;
            c < n;
            c++
          )
            (o = t[c].getBoundingClientRect()[e] + we("margin" + r, t[c])) > i &&
              (i = o);
          return (
            (a = Z() - a),
            ae("Parsed " + n + " HTML elements"),
            ae("Element position calculated in " + a + "ms"),
            (function(e) {
              e > F / 2 &&
                ae("Event throttle increased to " + (F = 2 * e) + "ms");
            })(a),
            i
          );
        }
        function ve(e) {
          return [
            e.bodyOffset(),
            e.bodyScroll(),
            e.documentElementOffset(),
            e.documentElementScroll()
          ];
        }
        function Ie(e, t) {
          var n = document.querySelectorAll("[" + t + "]");
          return (
            0 === n.length &&
              (ce("No tagged elements (" + t + ") found on page"),
              document.querySelectorAll("body *")),
            be(e, n)
          );
        }
        function Ee() {
          return document.querySelectorAll("body *");
        }
        function Te(e, n, o, i) {
          var r, a;
          !(function() {
            function e(e, t) {
              return !(Math.abs(e - t) <= R);
            }
            return (
              (r = t !== o ? o : $[h]()),
              (a = t !== i ? i : ee[W]()),
              e(m, r) || (d && e(A, a))
            );
          })() && "init" !== e
            ? e in { init: 1, interval: 1, size: 1 } || !(h in M || (d && W in M))
              ? e in { interval: 1 } || ae("No change in size detected")
              : xe(n)
            : (Me(), ke((m = r), (A = a), e));
        }
        function Oe(e, t, n, o) {
          N && e in s
            ? ae("Trigger event cancelled: " + e)
            : (e in { reset: 1, resetPage: 1, init: 1 } ||
                ae("Trigger event: " + t),
              "init" === e ? Te(e, t, n, o) : te(e, t, n, o));
        }
        function Me() {
          N || ((N = !0), ae("Trigger event lock on")),
            clearTimeout(C),
            (C = setTimeout(function() {
              (N = !1), ae("Trigger event lock off"), ae("--");
            }, l));
        }
        function Se(e) {
          (m = $[h]()), (A = ee[W]()), ke(m, A, e);
        }
        function xe(e) {
          var t = h;
          (h = g), ae("Reset trigger event: " + e), Me(), Se("reset"), (h = t);
        }
        function ke(e, n, o, i, r) {
          var a;
          !0 === x &&
            (t === r ? (r = z) : ae("Message targetOrigin: " + r),
            ae(
              "Sending message to host page (" +
                (a =
                  O + ":" + (e + ":" + n) + ":" + o + (t !== i ? ":" + i : "")) +
                ")"
            ),
            k.postMessage(E + a, r));
        }
        function ze() {
          "loading" !== document.readyState &&
            window.parent.postMessage("[iFrameResizerChild]Ready", "*");
        }
      })();
    },
    function(e, t, n) {
      "use strict";
      n.r(t);
      var o,
        i = n(0),
        r = !1,
        a = [],
        c = function(e) {
          var t = e.data;
          if (
            t &&
            t.type &&
            a[t.type] &&
            "function" == typeof a[t.type].callback
          ) {
            var n = t.data ? JSON.parse(t.data) : null;
            a[t.type].callback(n);
          }
        },
        u = function() {
          o &&
            (o.remove(),
            document.querySelector("#".concat("embed-iframe-wrapper")).remove());
          (r = !1),
            (a = []),
            (o = null),
            (document.body.style.overflow = ""),
            (document.documentElement.style.overflow = ""),
            (document.documentElement.style.height = "");
        },
        d = function(e) {
          u(),
            (document.body.style.overflow = "hidden"),
            (document.body.style.height = "100%"),
            (document.documentElement.style.overflow = "hidden"),
            (document.documentElement.style.height = "100%"),
            (o = document.createElement("iframe")),
            (document.body.style.overflow = "hidden"),
            (o.style.position = "absolute"),
            (o.style.top = 0),
            (o.style.bottom = 0),
            (o.style.left = 0),
            (o.style.right = 0),
            (o.style.zIndex = -1),
            (o.style.overflow = "scroll"),
            (o.style.width = "1px"),
            (o.style.minWidth = "100%"),
            (o.height = "100%"),
            (o.frameBorder = 0),
            (o.src = e),
            (o.id = "embed-iframe"),
            document.body.appendChild(o);
          var t = document.querySelector("#".concat("embed-iframe")),
            n = document.createElement("div");
          return (
            (n.id = "embed-iframe-wrapper"),
            n.setAttribute(
              "style",
              "-webkit-overflow-scrolling: touch; overflow-y: auto; position: fixed; top: 0; right:0; bottom:0; left: 0; width: 100%; height: 100%; z-index: 2147483647; background: rgba(238, 238, 238, 0.85);"
            ),
            t.parentNode.insertBefore(n, t),
            n.appendChild(t),
            Object(i.iframeResizer)(
              { minHeight: document.documentElement.clientHeight },
              "#embed-iframe"
            ),
            o
          );
        },
        s = function(e, t) {
          r || (window.addEventListener("message", c), (r = !0)),
            (a[e] = { callback: t });
        },
        l = function() {
          u(), window.removeEventListener("message", c);
        },
        f = function() {
          (document.querySelector(
            "#".concat("embed-iframe-wrapper")
          ).style.background = ""),
            (o.style.zIndex = 2147483648);
        },
        m = !1,
        g = function(e, t) {
          "function" == typeof e && e(t);
        },
        h = function(e) {
          var t = document.createElement("a");
          return (t.href = e), t;
        },
        p = function(e, t) {
          var n = h(document.getElementById("r-embed-script").src);
          "https:" === location.protocol || "http:" === n.protocol
            ? (g(t.beforeOpenCallback),
              d(e),
              s("donor-form-loaded", function() {
                g(t.afterOpenCallback), f();
              }),
              s("close-donor-form", function(e) {
                !(function(e, t) {
                  l(), g(e, t);
                })(t.afterCloseCallback, e);
              }))
            : window.open(e, "_blank");
        },
        y = function(e) {
          var t = h(document.getElementById("r-embed-script").src),
            n = e.formId
              ? ""
                  .concat(t.origin, "/GiveRedirect?formId=")
                  .concat(e.formId, "&siteId=")
                  .concat(e.siteId)
              : ""
                  .concat(t.origin, "/")
                  .concat(
                    location.pathname.split("/")[1],
                    "/-/go?page=donor-form"
                  );
          e.recurrenceId && (n += "&recurrenceId=".concat(e.recurrenceId)),
            e.individualId && (n += "&individualId=".concat(e.individualId)),
            e.recurrenceData &&
              (n += "&recurrenceData=".concat(
                encodeURIComponent(JSON.stringify(e.recurrenceData))
              )),
            e.fundId && (n += "&fundId=".concat(e.fundId)),
            e.amount && (n += "&amount=".concat(e.amount)),
            e.pledgeData &&
              (n += "&pledgeData=".concat(
                encodeURIComponent(JSON.stringify(e.pledgeData))
              )),
            (n += "&integrationType=".concat(e.formId ? "EMBED" : "REALM")),
            p(n, e);
        };
      (window._REALM = { EMBED: { show: y } }),
        (function() {
          if (!m) {
            document.querySelectorAll(".r-activate-form").forEach(function(e) {
              e.addEventListener(
                "click",
                function(e) {
                  e.preventDefault();
                  var t = {
                    formId: e.target.dataset.formId,
                    siteId: e.target.dataset.siteId
                  };
                  y(t);
                },
                !0
              );
            });
            var e = Array.from(document.getElementsByTagName("a")),
              t = h(
                document.getElementById("r-embed-script").src
              ).origin.toLowerCase();
            e.forEach(function(e) {
              var n = e.href.toLowerCase();

              // MODIFIED HERE

              //n.toLowerCase().includes(t) &&
              n.includes("/give") &&
              e.addEventListener(
                "click",
                function(e) {
                  e.preventDefault();
                  var t =
                    (function(e) {
                      for (; e && !e.href; ) e = e.parentNode;
                      return e && e.href;
                    })(e.target) + "?integrationType=EMBED";
                  p(t, {});
                },
                !0
              );
            }),
              (m = !0);
          }
        })();
    }
  ]);
  
}
/* eslint-enable */

export default function embedGiving() {
  document.getElementById('r-embed-script').src = 'https://onrealm.org/Assets/Embed/giving-embed.js?v=' + Date.now();
}