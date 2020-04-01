import React from "react";

import "./Navigation.css";
import NavigationItem from "./NavigationItem";

const navigation = props => (
  <div>
    <div className="Home">
      <NavigationItem link="/" exact>
        <p>Home</p>
      </NavigationItem>
    </div>

    <div className="Login">
      {props.isAuthenticated ? (
        <NavigationItem link="/donations">
          <p>Your Impacts</p>
        </NavigationItem>
      ) : null}
      {!props.isAuthenticated ? (
        <NavigationItem link="/auth">
          <p>Login</p>
        </NavigationItem>
      ) : (
        <NavigationItem link="/logout">
          <p>Logout</p>
        </NavigationItem>
      )}
    </div>
  </div>
);

export default navigation;
