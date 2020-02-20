import React from "react";

import classes from "./Navigation.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigation = props => (
  <ul className={classes.Navigation}>
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
