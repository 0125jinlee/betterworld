import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as authActions from "../../../store/actions/authActions";

const Logout = props => {
  const { onLogout } = props;

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(authActions.logout())
  };
};

export default connect(null, mapDispatchToProps)(Logout);
