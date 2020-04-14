(this.webpackJsonpbetterworld = this.webpackJsonpbetterworld || []).push([
  [3],
  {
    87: function(e, t, a) {},
    88: function(e, t, a) {},
    89: function(e, t, a) {},
    90: function(e, t, a) {},
    92: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(37);
      function l(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            if (
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            ) {
              var a = [],
                n = !0,
                l = !1,
                r = void 0;
              try {
                for (
                  var c, i = e[Symbol.iterator]();
                  !(n = (c = i.next()).done) &&
                  (a.push(c.value), !t || a.length !== t);
                  n = !0
                );
              } catch (u) {
                (l = !0), (r = u);
              } finally {
                try {
                  n || null == i.return || i.return();
                } finally {
                  if (l) throw r;
                }
              }
              return a;
            }
          })(e, t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var r = a(0),
        c = a.n(r),
        i = a(7),
        u = a(12),
        o =
          (a(87),
          function() {
            return c.a.createElement(
              "div",
              { class: "loader" },
              c.a.createElement("h2", null, "LOADING")
            );
          }),
        s = a(88),
        d = a.n(s),
        m = function(e) {
          var t = null,
            a = [d.a.InputElement];
          switch (
            (e.invalid && e.shouldValidate && e.touched && a.push(d.a.Invalid),
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
            { className: d.a.InputElement },
            c.a.createElement("label", { className: d.a.Label }, e.label),
            t
          );
        },
        h =
          (a(89),
          function(e) {
            return c.a.createElement(
              "button",
              {
                disabled: e.disabled,
                className: ["Button", [e.btnType]].join(" "),
                onClick: e.clicked
              },
              e.children
            );
          }),
        v = a(38),
        f = a(16);
      a(90),
        (t.default = Object(i.b)(
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
                return e(v.a(t, a, n));
              },
              onSetAuthRedirectPath: function() {
                return e(v.c("/"));
              }
            };
          }
        )(function(e) {
          var t = l(
              Object(r.useState)({
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
            i = t[1],
            s = l(Object(r.useState)(!0), 2),
            d = s[0],
            v = s[1],
            g = e.searchResult,
            p = e.authRedirectPath,
            b = e.onSetAuthRedirectPath;
          Object(r.useEffect)(
            function() {
              g || "/" === p || b();
            },
            [g, p, b]
          );
          var E = [];
          for (var y in a) E.push({ id: y, config: a[y] });
          var j = E.map(function(e) {
            return c.a.createElement(m, {
              key: e.id,
              elementsType: e.config.elementType,
              elementConfig: e.config.elementConfig,
              value: e.config.value,
              invalid: !e.config.valid,
              shouldValidate: e.config.validation,
              touched: e.config.touched,
              changed: function(t) {
                return (function(e, t) {
                  var l = Object(f.b)(
                    a,
                    Object(n.a)(
                      {},
                      t,
                      Object(f.b)(a[t], {
                        value: e.target.value,
                        valid: Object(f.a)(e.target.value, a[t].validation),
                        touched: !0
                      })
                    )
                  );
                  i(l);
                })(t, e.id);
              }
            });
          });
          e.loading && (j = c.a.createElement(o, null));
          var N = null;
          e.error && (N = c.a.createElement("h2", null, e.error.message));
          var S = null;
          return (
            e.isAuthenticated &&
              (S = c.a.createElement(u.a, { to: e.authRedirectPath })),
            c.a.createElement(
              "div",
              { className: "Auth" },
              c.a.createElement(
                "div",
                { className: "Logo" },
                c.a.createElement(
                  "a",
                  { "aria-current": "page", class: "active", href: "/" },
                  c.a.createElement("img", { src: "/Logo.png", alt: "Logo" })
                ),
                c.a.createElement(
                  "a",
                  { "aria-current": "page", class: "active", href: "/" },
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
                  S,
                  N,
                  c.a.createElement("div", { className: "Input" }, j),
                  c.a.createElement(
                    "div",
                    { className: "Sign" },
                    c.a.createElement(
                      h,
                      {
                        clicked: function(e) {
                          e.preventDefault(), v(!d);
                        },
                        btnType: "Danger"
                      },
                      "SWITCH TO ",
                      d ? "SIGN IN" : "SIGN UP"
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: "Submit" },
                    c.a.createElement(h, { btnType: "Success" }, "SUBMIT")
                  )
                )
              )
            )
          );
        }));
    }
  }
]);
//# sourceMappingURL=3.db2a957e.chunk.js.map
