import React, { useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Main from "./containers/Main/Main";
import Authenticate from "./containers/Authenticate/Authenticate";
import Donations from "./containers/Donations/Donations";
import Logout from "./containers/Authenticate/Logout/Logout";
import * as actions from "./store/actions/index";

const App = props => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/auth" exact component={Authenticate} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/logout" component={Logout} />
        <Route path="/donations" exact component={Donations} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <div className="App">{routes}</div>;
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
