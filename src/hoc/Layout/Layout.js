import React from "react";
import { connect } from "react-redux";

import Aux from "../Aux/Aux";
import Navigation from "../../components/Navigation/Navigation";
import "./Layout.css";

const layout = props => {
  return (
    <Aux>
      <nav className="Navigation">
        <Navigation isAuthenticated={props.isAuthenticated} />
      </nav>
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token
  };
};

export default connect(mapStateToProps)(layout);
