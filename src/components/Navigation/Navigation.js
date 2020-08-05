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
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">
        <Button btnType="Login">LOG IN</Button>
      </NavigationItem>
    ) : (
      <NavigationItem link="/logout">
        <Button btnType="Login">LOG OUT</Button>
      </NavigationItem>
    )}
  </div>
);

export default Navigation;
