import React from "react";

import "./Navigation.css";
import NavigationItem from "./NavigationItem";
import Button from "../UI/Button/Button";

const navigation = props => (
  <div className="Bar">
    {!props.isAuthenticated ? (
      <NavigationItem link="/" exact>
        <Button btnType="Home">
          <p>HOME</p>
        </Button>
      </NavigationItem>
    ) : (
      <NavigationItem link="/donations">
        <Button btnType="Impacts">YOUR IMPACTS</Button>
      </NavigationItem>
    )}
    <Button btnType="Login">
      {!props.isAuthenticated ? (
        <NavigationItem link="/auth">
          <p>LOG IN</p>
        </NavigationItem>
      ) : (
        <NavigationItem link="/logout">
          <p>LOG OUT</p>
        </NavigationItem>
      )}
    </Button>
  </div>
);

export default navigation;
