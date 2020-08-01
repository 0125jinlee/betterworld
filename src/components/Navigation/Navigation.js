import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
  return {
    modalType: state.modalReducer.modalType,
    modalProps: state.modalReducer.modalProps,
    isAuthenticated: state.authReducer.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
