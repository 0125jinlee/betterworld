import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItem.css";

const navigationItem = props => (
  <div className="NavigationItem">
    <NavLink to={props.link} exact={props.exact} activeClassName="active">
      {props.children}
    </NavLink>
  </div>
);

export default navigationItem;
