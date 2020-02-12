import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * authReducers from "../../../store/reducers/authReducers";

const Logout = props => {
  const { onLogout } = props;

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/" />;
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(authReducers.authLogout())
  };
};

export default connect(null, mapDispatchToProps)(Logout);
