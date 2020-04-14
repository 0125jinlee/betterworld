(this.webpackJsonpbetterworld = this.webpackJsonpbetterworld || []).push([
  [0],
  {
    13: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return c;
        });
      var a = n(2),
        r = function(e) {
          return { type: a.f, data: e };
        },
        c = function() {
          return { type: a.g };
        };
    },
    16: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return r;
      }),
        n.d(t, "a", function() {
          return c;
        });
      var a = n(44),
        r = function(e, t) {
          return Object(a.a)({}, e, {}, t);
        },
        c = function(e, t) {
          var n = !0;
          if (!t) return !0;
          if (
            (t.required && (n = "" !== e.trim() && n),
            t.minLength && (n = e.length >= t.minLength && n),
            t.maxLength && (n = e.length <= t.maxLength && n),
            t.isEmail)
          ) {
            n =
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                e
              ) && n;
          }
          if (t.isNumeric) {
            n = /^\d+$/.test(e) && n;
          }
          return n;
        };
    },
    2: function(e, t, n) {
      "use strict";
      n.d(t, "e", function() {
        return a;
      }),
        n.d(t, "f", function() {
          return r;
        }),
        n.d(t, "g", function() {
          return c;
        }),
        n.d(t, "c", function() {
          return u;
        }),
        n.d(t, "d", function() {
          return o;
        }),
        n.d(t, "a", function() {
          return i;
        }),
        n.d(t, "b", function() {
          return l;
        }),
        n.d(t, "h", function() {
          return s;
        });
      var a = "FETCHING_DATA",
        r = "RECEIVED_DATA",
        c = "RECEIVED_ERROR",
        u = "AUTH_START ",
        o = "AUTH_SUCCESS",
        i = "AUTH_FAIL",
        l = "AUTH_LOGOUT",
        s = "SET_AUTH_REDIRECT_PATH";
    },
    21: function(e, t, n) {
      "use strict";
      var a = n(2),
        r = n(16),
        c = {
          token: null,
          userId: null,
          error: null,
          loading: !1,
          authRedirectPath: "/"
        },
        u = function(e, t) {
          return Object(r.b)(e, { error: null, loading: !0 });
        },
        o = function(e, t) {
          return Object(r.b)(e, {
            token: t.idToken,
            userId: t.userId,
            error: null,
            loading: !1
          });
        },
        i = function(e, t) {
          return Object(r.b)(e, { error: t.error, loading: !1 });
        },
        l = function(e, t) {
          return (
            localStorage.removeItem("token"),
            localStorage.removeItem("expirationDate"),
            localStorage.removeItem("userId"),
            Object(r.b)(e, { token: null, userId: null })
          );
        },
        s = function(e, t) {
          return Object(r.b)(e, { authRedirectPath: t.path });
        };
      t.a = function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case a.c:
            return u(e);
          case a.d:
            return o(e, t);
          case a.a:
            return i(e, t);
          case a.b:
            return l(e);
          case a.h:
            return s(e, t);
          default:
            return e;
        }
      };
    },
    38: function(e, t, n) {
      "use strict";
      n(13);
      var a = n(5),
        r = (n(21), n(22)),
        c = n.n(r),
        u = function(e, t, n) {
          return function(r) {
            r(a.b());
            var u = { email: e, password: t, returnSecureToken: !0 },
              o =
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCy23NFq-9Dm6qCTkocHZEr9CnpacRiBhw";
            n ||
              (o =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCy23NFq-9Dm6qCTkocHZEr9CnpacRiBhw"),
              c.a
                .post(o, u)
                .then(function(e) {
                  var t = new Date(
                    new Date().getTime() + 1e3 * e.data.expiresIn
                  );
                  localStorage.setItem("token", e.data.idToken),
                    localStorage.setItem("expirationDate", t),
                    localStorage.setItem("userId", e.data.localId),
                    r(a.c(e.data.idToken, e.data.localId)),
                    r(i(e.data.expiresIn));
                })
                .catch(function(e) {
                  r(a.a(e.response.data.error));
                });
          };
        },
        o = function() {
          return function(e) {
            var t = localStorage.getItem("token");
            if (t) {
              var n = new Date(localStorage.getItem("expirationDate"));
              if (n <= new Date()) e(a.d());
              else {
                var r = localStorage.getItem("userId");
                e(a.c(t, r)), e(i((n.getTime() - new Date().getTime()) / 1e3));
              }
            } else e(a.d());
          };
        },
        i = function(e) {
          return function(t) {
            setTimeout(function() {
              t(a.d());
            }, 1e3 * e);
          };
        };
      n.d(t, "c", function() {
        return a.e;
      }),
        n.d(t, "a", function() {
          return u;
        }),
        n.d(t, "b", function() {
          return o;
        });
    },
    48: function(e, t, n) {
      e.exports = n(85);
    },
    5: function(e, t, n) {
      "use strict";
      n.d(t, "b", function() {
        return r;
      }),
        n.d(t, "c", function() {
          return c;
        }),
        n.d(t, "a", function() {
          return u;
        }),
        n.d(t, "d", function() {
          return o;
        }),
        n.d(t, "e", function() {
          return i;
        });
      var a = n(2),
        r = function() {
          return { type: a.c };
        },
        c = function(e, t) {
          return { type: a.d, idToken: e, userId: t };
        },
        u = function(e) {
          return { type: a.a, error: e };
        },
        o = function() {
          return { type: a.b };
        },
        i = function(e) {
          return { type: a.h, path: e };
        };
    },
    57: function(e, t, n) {},
    58: function(e, t, n) {},
    59: function(e, t, n) {},
    61: function(e, t, n) {},
    80: function(e, t, n) {},
    81: function(e, t, n) {},
    82: function(e, t, n) {},
    83: function(e, t, n) {},
    84: function(e, t, n) {},
    85: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(19),
        u = n.n(c),
        o = n(14),
        i = n(7),
        l = (n(57), n(12)),
        s = function(e) {
          return e.children;
        },
        m =
          (n(58),
          n(59),
          function(e) {
            return r.a.createElement(
              "div",
              { className: "NavigationItem" },
              r.a.createElement(
                o.b,
                { to: e.link, exact: e.exact, activeClassName: "active" },
                e.children
              )
            );
          }),
        d = function(e) {
          return r.a.createElement(
            "div",
            { className: "Bar" },
            r.a.createElement(
              "button",
              { className: "Home" },
              e.isAuthenticated
                ? r.a.createElement(
                    m,
                    { link: "/donations" },
                    r.a.createElement("p", null, "YOUR IMPACTS")
                  )
                : r.a.createElement(
                    m,
                    { link: "/", exact: !0 },
                    r.a.createElement("p", null, "HOME")
                  )
            ),
            r.a.createElement(
              "button",
              { className: "Login" },
              e.isAuthenticated
                ? r.a.createElement(
                    m,
                    { link: "/logout" },
                    r.a.createElement("p", null, "LOG OUT")
                  )
                : r.a.createElement(
                    m,
                    { link: "/auth" },
                    r.a.createElement("p", null, "LOG IN")
                  )
            )
          );
        },
        h =
          (n(61),
          Object(i.b)(function(e) {
            return { isAuthenticated: e.authReducer.token };
          })(function(e) {
            return r.a.createElement(
              s,
              null,
              r.a.createElement(
                "nav",
                { className: "Navigation" },
                r.a.createElement(d, { isAuthenticated: e.isAuthenticated })
              ),
              r.a.createElement("main", { className: "Content" }, e.children)
            );
          })),
        f = n(41),
        E = n(42),
        g = n(47),
        b = n(43),
        p = n(18),
        v = n(46),
        y = n(22),
        I = n.n(y),
        S = n(13),
        T =
          (n(80),
          (function(e) {
            function t() {
              var e;
              return (
                Object(f.a)(this, t),
                ((e = Object(g.a)(
                  this,
                  Object(b.a)(t).call(this)
                )).handleChange = function(t) {
                  t.preventDefault(),
                    e.setState({ searchTerm: t.target.value });
                }),
                (e.handleSubmit = function(t) {
                  t.preventDefault();
                  var n = e.state.searchTerm;
                  e.props.dispatch(
                    (function(e) {
                      return function(t, n) {
                        return I.a
                          .get(
                            "http://localhost:9000/searchAPI?searchTerm=".concat(
                              e
                            )
                          )
                          .then(function(e) {
                            t(S.a(e.data));
                          })
                          .catch(function(e) {
                            return t(S.b());
                          });
                      };
                    })(n)
                  );
                }),
                (e.state = { searchTerm: "" }),
                (e.handleChange = e.handleChange.bind(Object(p.a)(e))),
                (e.handleSubmit = e.handleSubmit.bind(Object(p.a)(e))),
                e
              );
            }
            return (
              Object(v.a)(t, e),
              Object(E.a)(t, [
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      "div",
                      { className: "container" },
                      r.a.createElement(
                        "h1",
                        { className: "searchTitle" },
                        "Show and support what you love"
                      ),
                      r.a.createElement(
                        "form",
                        {
                          onSubmit: this.handleSubmit,
                          className: "searchForm"
                        },
                        r.a.createElement("input", {
                          type: "text",
                          placeholder: "What do you want to support today?",
                          onChange: this.handleChange
                        }),
                        r.a.createElement(
                          "button",
                          { className: "button", onClick: this.handleSubmit },
                          "SEARCH"
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(a.Component)),
        N = Object(i.b)(function(e) {
          return { state: e.searchReducer };
        })(T),
        R =
          (n(81),
          function() {
            return r.a.createElement(
              "div",
              { className: "Main" },
              r.a.createElement(
                "div",
                { className: "Logo" },
                r.a.createElement(
                  "a",
                  { "aria-current": "page", className: "active", href: "/" },
                  r.a.createElement("img", { src: "/Logo.png", alt: "Logo" })
                ),
                r.a.createElement(
                  "a",
                  { "aria-current": "page", className: "active", href: "/" },
                  r.a.createElement("h1", null, "Better World")
                )
              ),
              r.a.createElement(
                "div",
                { className: "Search" },
                r.a.createElement(N, null)
              )
            );
          }),
        k = n(5),
        A = Object(i.b)(null, function(e) {
          return {
            onLogout: function() {
              return e(k.d());
            }
          };
        })(function(e) {
          var t = e.onLogout;
          return (
            Object(a.useEffect)(
              function() {
                t();
              },
              [t]
            ),
            r.a.createElement(l.a, { to: "/" })
          );
        }),
        O =
          (n(82),
          function(e) {
            var t = !0;
            0 === e.acceptingDonations && (t = !1);
            var n = !0;
            "Not Provided" === e.category && (n = !1);
            var a = !0;
            e.missionStatement || (a = !1);
            var c = !0;
            return (
              e.website || (c = !1),
              r.a.createElement(
                "article",
                { className: "Post", onClick: e.clicked },
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "a",
                    {
                      href: e.orghunterUrl,
                      target: "_blank",
                      rel: "noopener noreferrer"
                    },
                    r.a.createElement("h1", null, e.charityName)
                  ),
                  r.a.createElement(
                    "small",
                    null,
                    e.city,
                    ", ",
                    e.state,
                    ", ",
                    e.zip
                  ),
                  r.a.createElement(
                    "ul",
                    null,
                    r.a.createElement("b", null, "EIN"),
                    " ",
                    e.ein
                  ),
                  r.a.createElement(
                    "ul",
                    null,
                    r.a.createElement("b", null, "Impacts "),
                    n ? e.category + " Fields" : "..."
                  ),
                  r.a.createElement(
                    "ul",
                    null,
                    r.a.createElement("b", null, "Accepting Donations?"),
                    " ",
                    t ? " Yes" : " No"
                  ),
                  r.a.createElement(
                    "ul",
                    null,
                    r.a.createElement("b", null, "Score"),
                    " ",
                    e.score,
                    " / 5"
                  ),
                  r.a.createElement(
                    "ul",
                    null,
                    c
                      ? r.a.createElement(
                          "a",
                          {
                            href: e.website,
                            target: "_blank",
                            rel: "noopener noreferrer"
                          },
                          r.a.createElement("b", null, "More Info")
                        )
                      : null
                  ),
                  r.a.createElement("ul", null, a ? e.missionStatement : null)
                )
              )
            );
          }),
        C =
          (n(83),
          Object(i.b)(function(e) {
            return { searchResult: e.searchReducer.searchResult };
          })(function(e) {
            if (Array.isArray(e.searchResult)) {
              var t = e.searchResult.map(function(e) {
                return r.a.createElement(O, {
                  charityName: e.charityName,
                  ein: e.ein,
                  orghunterUrl: e.url,
                  website: e.website,
                  city: e.city,
                  state: e.state,
                  zip: e.zipCode,
                  category: e.category,
                  score: e.score,
                  acceptingDonations: e.acceptingDonations,
                  missionStatement: e.missionStatement
                });
              });
              return r.a.createElement(
                "div",
                { className: "Results" },
                r.a.createElement(
                  "h2",
                  { className: "ResultsTopic" },
                  "SEARCH RESULTS ",
                  e.searchResult.recordCount
                ),
                r.a.createElement("div", { className: "Posts" }, t)
              );
            }
            return null;
          })),
        w = n(38),
        D =
          (n(84),
          r.a.lazy(function() {
            return n.e(4).then(n.bind(null, 91));
          })),
        j = r.a.lazy(function() {
          return n.e(3).then(n.bind(null, 92));
        }),
        _ = Object(l.g)(
          Object(i.b)(
            function(e) {
              return { isAuthenticated: null !== e.authReducer.token };
            },
            function(e) {
              return {
                onTryAutoSignup: function() {
                  return e(w.b());
                }
              };
            }
          )(function(e) {
            var t = e.onTryAutoSignup;
            Object(a.useEffect)(
              function() {
                t();
              },
              [t]
            );
            var n = r.a.createElement(
              l.d,
              null,
              r.a.createElement(l.b, {
                path: "/auth",
                render: function(e) {
                  return r.a.createElement(j, e);
                }
              }),
              r.a.createElement(l.b, { path: "/", exact: !0, component: R }),
              r.a.createElement(l.a, { to: "/" })
            );
            return (
              e.isAuthenticated &&
                (n = r.a.createElement(
                  l.d,
                  null,
                  r.a.createElement(l.b, {
                    path: "/donations",
                    render: function(e) {
                      return r.a.createElement(D, e);
                    }
                  }),
                  r.a.createElement(l.b, { path: "/logout", component: A }),
                  r.a.createElement(l.b, {
                    path: "/auth",
                    render: function(e) {
                      return r.a.createElement(j, e);
                    }
                  }),
                  r.a.createElement(l.b, {
                    path: "/",
                    exact: !0,
                    component: R
                  }),
                  r.a.createElement(l.a, { to: "/" })
                )),
              r.a.createElement(
                "div",
                { className: "App" },
                r.a.createElement(
                  "div",
                  { className: "MainNav" },
                  r.a.createElement(
                    a.Suspense,
                    { fallback: r.a.createElement("p", null, "Loading...") },
                    n
                  ),
                  r.a.createElement(h, null)
                ),
                r.a.createElement(
                  "div",
                  { className: "Posts" },
                  r.a.createElement(C, null)
                )
              )
            );
          })
        );
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var L = n(15),
        z = n(45),
        x = { searchResult: {}, isFetching: !1, isError: !1 },
        H = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : x,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCHING_DATA":
              return { searchResult: {}, isFetching: !0, isError: !1 };
            case "RECEIVED_DATA":
              return { searchResult: t.data, isFetching: !1, isError: !1 };
            case "RECEIVED_ERROR":
              return { isFetching: !1, isError: !0 };
            default:
              return e;
          }
        },
        U = n(21),
        F = Object(L.c)({ searchReducer: H, authReducer: U.a }),
        P = Object(L.d)(F, Object(L.a)(z.a));
      u.a.render(
        r.a.createElement(
          i.a,
          { store: P },
          r.a.createElement(o.a, null, r.a.createElement(_, null))
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[48, 1, 2]]
]);
//# sourceMappingURL=main.f26e43c5.chunk.js.map
