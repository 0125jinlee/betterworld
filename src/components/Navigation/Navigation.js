import React from "react";

import NavigationItem from "./NavigationItem";
import Button from "../UI/Button/Button";
import "./Navigation.css";

const Navigation = props => (
  <div className="Bar">
    {!props.isAuthenticated ? null : (
      <NavigationItem link="/mypage">
        <Button btnType="MyPage">MY PAGE</Button>
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

export default Navigation;
