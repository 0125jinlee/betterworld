import React from "react";
import { connect } from "react-redux";

import Aux from "../Aux/Aux";
import classes from "./Layout.css";
import Navigation from "../../components/Navigation/Navigation";

const layout = props => {
  return (
    <Aux>
      <nav className={classes.NavigationBar}>
        <Navigation isAuthenticated={props.isAuthenticated} />
      </nav>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token
  };
};

export default connect(mapStateToProps)(layout);
