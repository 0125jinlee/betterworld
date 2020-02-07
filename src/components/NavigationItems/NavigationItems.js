import React from "react";

import classes from "./NavigationItem.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={classes.navigationItems}>
    <NavigationItem link="/" exact>
      Main
    </NavigationItem>
    <NavigationItem link="/donations">Donations</NavigationItem>
    <NavigationItem link="/auth">Authenticate</NavigationItem>
    <NavigationItem link="logout">Logout</NavigationItem>
  </ul>
);

export default navigationItems;
