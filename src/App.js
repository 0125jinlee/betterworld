import React, { useEffect, Suspense } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import Main from "./containers/Main/Main";
import Logout from "./containers/Authenticate/Logout/Logout";
import Posts from "./components/Posts/Posts";
import * as actions from "./store/actions/index";
import "./App.css";

const MyPage = React.lazy(() => {
  return import("./containers/MyPage/MyPage");
});

const Authenticate = React.lazy(() => {
  return import("./containers/Authenticate/Authenticate");
});

const App = props => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" render={props => <Authenticate {...props} />} />
      <Route path="/" exact component={Main} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/mypage" render={props => <MyPage {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" render={props => <Authenticate {...props} />} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App">
      <div className="MainNav">
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
        <Layout></Layout>
      </div>
      <div className="Posts">
        <Posts />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
