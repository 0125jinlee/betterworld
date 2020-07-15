(this.webpackJsonpbetterworld = this.webpackJsonpbetterworld || []).push([
  [0],
  {
    11: function(e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        c = n(13);
      n(59);
      t.a = function(e) {
        return r.a.createElement(
          "div",
          { className: "NavigationItem" },
          r.a.createElement(
            c.b,
            { to: e.link, exact: e.exact, activeClassName: "active" },
            e.children
          )
        );
      };
    },
    12: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return r;
      }),
        n.d(t, "b", function() {
          return c;
        });
      var a = n(3),
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
    21: function(e, t, n) {
      "use strict";
      var a = n(3),
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
    22: function(e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a);
      n(61);
      t.a = function(e) {
        return r.a.createElement(
          "button",
          {
            disabled: e.disabled,
            className: ["Button", [e.btnType]].join(""),
            onClick: e.clicked
          },
          e.children
        );
      };
    },
    3: function(e, t, n) {
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
    39: function(e, t, n) {
      "use strict";
      n(12);
      var a = n(6),
        r = (n(21), n(23)),
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
    57: function(e, t, n) {},
    58: function(e, t, n) {},
    59: function(e, t, n) {},
    6: function(e, t, n) {
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
      var a = n(3),
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
    61: function(e, t, n) {},
    62: function(e, t, n) {},
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
        o = n(13),
        i = n(9),
        l = (n(57), n(2)),
        s = function(e) {
          return e.children;
        },
        m = (n(58), n(11)),
        d = n(22),
        h = function(e) {
          return r.a.createElement(
            "div",
            { className: "Bar" },
            e.isAuthenticated
              ? r.a.createElement(
                  m.a,
                  { link: "/donations" },
                  r.a.createElement(d.a, { btnType: "Impacts" }, "YOUR IMPACTS")
                )
              : r.a.createElement(
                  m.a,
                  { link: "/", exact: !0 },
                  r.a.createElement(d.a, { btnType: "Home" }, "HOME")
                ),
            r.a.createElement(
              d.a,
              { btnType: "Login" },
              e.isAuthenticated
                ? r.a.createElement(m.a, { link: "/logout" }, "LOG OUT")
                : r.a.createElement(m.a, { link: "/auth" }, "LOG IN")
            )
          );
        },
        f =
          (n(62),
          Object(i.b)(function(e) {
            return { isAuthenticated: e.authReducer.token };
          })(function(e) {
            return r.a.createElement(
              s,
              null,
              r.a.createElement(
                "nav",
                { className: "Navigation" },
                r.a.createElement(h, { isAuthenticated: e.isAuthenticated })
              ),
              r.a.createElement("main", { className: "Content" }, e.children)
            );
          })),
        E = n(41),
        g = n(42),
        b = n(47),
        p = n(43),
        v = n(18),
        T = n(46),
        y = n(23),
        I = n.n(y),
        R = n(12),
        k =
          (n(80),
          (function(e) {
            function t() {
              var e;
              return (
                Object(E.a)(this, t),
                ((e = Object(b.a)(
                  this,
                  Object(p.a)(t).call(this)
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
                            "https://us-central1-betterworld-aac7e.cloudfunctions.net/api/searchAPI?searchTerm=".concat(
                              e
                            )
                          )
                          .then(function(n) {
                            try {
                              t(R.a({ searchTerm: e, result: n.data }));
                            } catch (a) {
                              console.log(a);
                            }
                          })
                          .catch(function(e) {
                            return t(R.b());
                          });
                      };
                    })(n)
                  );
                }),
                (e.state = { searchTerm: "" }),
                (e.handleChange = e.handleChange.bind(Object(v.a)(e))),
                (e.handleSubmit = e.handleSubmit.bind(Object(v.a)(e))),
                e
              );
            }
            return (
              Object(T.a)(t, e),
              Object(g.a)(t, [
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
        S = Object(i.b)(function(e) {
          return { state: e.searchReducer };
        })(k),
        A =
          (n(81),
          function() {
            return r.a.createElement(
              "div",
              { className: "Main" },
              r.a.createElement(
                "div",
                { className: "Logo" },
                r.a.createElement(
                  m.a,
                  { link: "/", exact: !0 },
                  r.a.createElement("img", { src: "/Logo.png", alt: "Logo" })
                ),
                r.a.createElement(
                  m.a,
                  { link: "/", exact: !0 },
                  r.a.createElement("h1", null, "Better World")
                )
              ),
              r.a.createElement(
                "div",
                { className: "Search" },
                r.a.createElement(S, null)
              )
            );
          }),
        N = n(6),
        O = Object(i.b)(null, function(e) {
          return {
            onLogout: function() {
              return e(N.d());
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
        C =
          (n(82),
          function(e) {
            var t = !0;
            0 === e.acceptingDonations && (t = !1);
            var n = !0;
            "Not Provided" === e.category && (n = !1);
            var a = !0;
            e.missionStatement || (a = !1);
            var c = !0;
            e.website || (c = !1);
            var u = Math.ceil(12 * Math.random()) + 1;
            return r.a.createElement(
              "article",
              { className: "Post", onClick: e.onClick },
              r.a.createElement(
                "div",
                null,
                r.a.createElement("img", {
                  className: "PostImage",
                  src: "/PostPictures/".concat(u, ".jpg"),
                  alt: "PostPicture",
                  height: "160",
                  width: "330"
                }),
                r.a.createElement(
                  "ul",
                  null,
                  r.a.createElement(
                    "a",
                    {
                      href: e.orghunterUrl,
                      target: "_blank",
                      rel: "noopener noreferrer"
                    },
                    r.a.createElement("h2", null, e.charityName)
                  ),
                  r.a.createElement(
                    "small",
                    null,
                    e.city,
                    ", ",
                    e.state,
                    ", ",
                    e.zip
                  )
                ),
                r.a.createElement(
                  "ul",
                  null,
                  n &&
                    r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement("b", null, "Impacts "),
                      " ",
                      r.a.createElement(
                        "span",
                        null,
                        "".concat(e.category, " fields")
                      )
                    )
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
                  c ? r.a.createElement("b", null, "More Info") : null,
                  r.a.createElement("br", null),
                  a ? e.missionStatement : null
                )
              )
            );
          }),
        w =
          (n(83),
          Object(i.b)(function(e) {
            return {
              searchTerm: e.searchReducer.searchTerm,
              searchResult: e.searchReducer.searchResult
            };
          })(function(e) {
            if (Array.isArray(e.searchResult) && 0 !== e.searchResult.length) {
              var t = e.searchResult.map(function(e) {
                return r.a.createElement(C, {
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
                  "div",
                  { className: "ResultsTopic" },
                  'SEARCH RESULTS FOR "',
                  e.searchTerm,
                  '"'
                ),
                r.a.createElement("div", { className: "Posts" }, t)
              );
            }
            return null;
          })),
        j = n(39),
        D =
          (n(84),
          r.a.lazy(function() {
            return n.e(4).then(n.bind(null, 90));
          })),
        x = r.a.lazy(function() {
          return n.e(3).then(n.bind(null, 91));
        }),
        L = Object(l.g)(
          Object(i.b)(
            function(e) {
              return { isAuthenticated: null !== e.authReducer.token };
            },
            function(e) {
              return {
                onTryAutoSignup: function() {
                  return e(j.b());
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
                  return r.a.createElement(x, e);
                }
              }),
              r.a.createElement(l.b, { path: "/", exact: !0, component: A }),
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
                  r.a.createElement(l.b, { path: "/logout", component: O }),
                  r.a.createElement(l.b, {
                    path: "/auth",
                    render: function(e) {
                      return r.a.createElement(x, e);
                    }
                  }),
                  r.a.createElement(l.b, {
                    path: "/",
                    exact: !0,
                    component: A
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
                  r.a.createElement(f, null)
                ),
                r.a.createElement(
                  "div",
                  { className: "Posts" },
                  r.a.createElement(w, null)
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
      var _ = n(15),
        z = n(45),
        P = { searchTerm: "", searchResult: [], isFetching: !1, isError: !1 },
        H = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : P,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case "FETCHING_DATA":
              return { searchResult: [], isFetching: !0, isError: !1 };
            case "RECEIVED_DATA":
              return {
                searchTerm: t.data.searchTerm,
                searchResult: t.data.result,
                isFetching: !1,
                isError: !1
              };
            case "RECEIVED_ERROR":
              return { isFetching: !1, isError: !0 };
            default:
              return e;
          }
        },
        U = n(21),
        F = Object(_.c)({ searchReducer: H, authReducer: U.a }),
        B = Object(_.d)(F, Object(_.a)(z.a));
      u.a.render(
        r.a.createElement(
          i.a,
          { store: B },
          r.a.createElement(o.a, null, r.a.createElement(L, null))
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
//# sourceMappingURL=main.202e84ec.chunk.js.map
