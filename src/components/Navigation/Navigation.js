import React from "react";

import "./Navigation.css";
import NavigationItem from "./NavigationItem";
import Button from "../UI/Button/Button";

const navigation = props => (
  <div className="Bar">
    {!props.isAuthenticated ? (
      <NavigationItem link="/" exact>
        <Button btnType="Home">HOME</Button>
      </NavigationItem>
    ) : (
      <NavigationItem link="/donations">
        <Button btnType="Impacts">YOUR IMPACTS</Button>
      </NavigationItem>
    )}
    <Button btnType="Login">
      {!props.isAuthenticated ? (
        <NavigationItem link="/auth">LOG IN</NavigationItem>
      ) : (
        <NavigationItem link="/logout">LOG OUT</NavigationItem>
      )}
    </Button>
  </div>
);

export default navigation;
