(this.webpackJsonpbetterworld = this.webpackJsonpbetterworld || []).push([
  [3],
  {
    86: function(e, t, a) {},
    87: function(e, t, a) {},
    88: function(e, t, a) {},
    90: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(39);
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      function l(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
              var a = [],
                n = !0,
                r = !1,
                l = void 0;
              try {
                for (
                  var i, c = e[Symbol.iterator]();
                  !(n = (i = c.next()).done) &&
                  (a.push(i.value), !t || a.length !== t);
                  n = !0
                );
              } catch (u) {
                (r = !0), (l = u);
              } finally {
                try {
                  n || null == c.return || c.return();
                } finally {
                  if (r) throw l;
                }
              }
              return a;
            }
          })(e, t) ||
          (function(e, t) {
            if (e) {
              if ("string" === typeof e) return r(e, t);
              var a = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a
                  ? Array.from(a)
                  : "Arguments" === a ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var i = a(0),
        c = a.n(i),
        u = a(9),
        o = a(2),
        s =
          (a(86),
          function() {
            return c.a.createElement(
              "div",
              { class: "loader" },
              c.a.createElement("h2", null, "LOADING")
            );
          }),
        d = a(87),
        m = a.n(d),
        h = function(e) {
          var t = null,
            a = [m.a.InputElement];
          switch (
            (e.invalid && e.shouldValidate && e.touched && a.push(m.a.Invalid),
            e.elementType)
          ) {
            case "input":
              t = c.a.createElement(
                "input",
                Object.assign({ className: a.join(" ") }, e.elementConfig, {
                  value: e.value,
                  onChange: e.changed
                })
              );
              break;
            case "textarea":
              t = c.a.createElement(
                "textarea",
                Object.assign({ className: a.join(" ") }, e.elementConfig, {
                  value: e.value,
                  onChange: e.changed
                })
              );
              break;
            case "select":
              t = c.a.createElement(
                "select",
                { className: a.join(" "), value: e.value, onChange: e.changed },
                e.elementConfig.options.map(function(e) {
                  return c.a.createElement(
                    "option",
                    { key: e.value, value: e.value },
                    e.displayValue
                  );
                })
              );
              break;
            default:
              t = c.a.createElement(
                "input",
                Object.assign({ className: a.join(" ") }, e.elementConfig, {
                  value: e.value,
                  onChange: e.changed
                })
              );
          }
          return c.a.createElement(
            "div",
            { className: m.a.InputElement },
            c.a.createElement("label", { className: m.a.Label }, e.label),
            t
          );
        },
        f = a(22),
        v = a(11),
        g = a(40),
        p = a(16);
      a(88),
        (t.default = Object(u.b)(
          function(e) {
            return {
              loading: e.authReducer.loading,
              error: e.authReducer.error,
              isAuthenticated: null !== e.authReducer.token,
              searchResult: e.searchReducer.searchResult,
              authRedirectPath: e.authReducer.authRedirectPath
            };
          },
          function(e) {
            return {
              onAuth: function(t, a, n) {
                return e(g.a(t, a, n));
              },
              onSetAuthRedirectPath: function() {
                return e(g.c("/"));
              }
            };
          }
        )(function(e) {
          var t = l(
              Object(i.useState)({
                email: {
                  elementType: "input",
                  elementConfig: {
                    type: "email",
                    placeholder: "Email Address"
                  },
                  value: "",
                  validation: { required: !0, isEmail: !0 },
                  valid: !1,
                  touched: !1
                },
                password: {
                  elementType: "input",
                  elementConfig: { type: "password", placeholder: "Password" },
                  value: "",
                  validation: { required: !0, minLength: 6 },
                  valid: !1,
                  touched: !1
                }
              }),
              2
            ),
            a = t[0],
            r = t[1],
            u = l(Object(i.useState)(!0), 2),
            d = u[0],
            m = u[1],
            g = e.searchResult,
            b = e.authRedirectPath,
            E = e.onSetAuthRedirectPath;
          Object(i.useEffect)(
            function() {
              g || "/" === b || E();
            },
            [g, b, E]
          );
          var y = [];
          for (var j in a) y.push({ id: j, config: a[j] });
          var S = y.map(function(e) {
            return c.a.createElement(h, {
              key: e.id,
              elementsType: e.config.elementType,
              elementConfig: e.config.elementConfig,
              value: e.config.value,
              invalid: !e.config.valid,
              shouldValidate: e.config.validation,
              touched: e.config.touched,
              changed: function(t) {
                return (function(e, t) {
                  var l = Object(p.b)(
                    a,
                    Object(n.a)(
                      {},
                      t,
                      Object(p.b)(a[t], {
                        value: e.target.value,
                        valid: Object(p.a)(e.target.value, a[t].validation),
                        touched: !0
                      })
                    )
                  );
                  r(l);
                })(t, e.id);
              }
            });
          });
          e.loading && (S = c.a.createElement(s, null));
          var A = null;
          e.error && (A = c.a.createElement("h2", null, e.error.message));
          var N = null;
          return (
            e.isAuthenticated &&
              (N = c.a.createElement(o.a, { to: e.authRedirectPath })),
            c.a.createElement(
              "div",
              { className: "Auth" },
              c.a.createElement(
                "div",
                { className: "Logo" },
                c.a.createElement(
                  v.a,
                  { link: "/", exact: !0 },
                  c.a.createElement("img", { src: "/Logo.png", alt: "Logo" })
                ),
                c.a.createElement(
                  v.a,
                  { link: "/", exact: !0 },
                  c.a.createElement("h1", null, "Better World")
                )
              ),
              c.a.createElement(
                "div",
                {
                  className: "AuthBox",
                  onSubmit: function(t) {
                    t.preventDefault(),
                      e.onAuth(a.email.value, a.password.value, d);
                  }
                },
                c.a.createElement("h1", null, d ? "Sign Up" : "Sign In"),
                c.a.createElement(
                  "form",
                  { className: "authForm" },
                  N,
                  A,
                  c.a.createElement("div", { className: "Input" }, S),
                  c.a.createElement(
                    "div",
                    { className: "AuthButtons" },
                    c.a.createElement(
                      f.a,
                      {
                        clicked: function(e) {
                          e.preventDefault(), m(!d);
                        },
                        btnType: "Sign"
                      },
                      "SWITCH TO ",
                      d ? "SIGN IN" : "SIGN UP"
                    ),
                    c.a.createElement(f.a, { btnType: "Submit" }, "SUBMIT")
                  )
                )
              )
            )
          );
        }));
    }
  }
]);
//# sourceMappingURL=3.d6b79456.chunk.js.map
