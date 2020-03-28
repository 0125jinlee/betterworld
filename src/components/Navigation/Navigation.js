import React from "react";

import "./Navigation.css";
import NavigationItem from "./NavigationItem";

const navigation = props => (
  <ul className="Navigation">
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/donations">Your Impacts</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Login</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </ul>
);

export default navigation;
