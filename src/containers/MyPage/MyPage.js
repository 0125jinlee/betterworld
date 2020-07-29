import React from "react";

import NavigationItem from "../../components/Navigation/NavigationItem";
import "./MyPage.css";

const MyPage = props => {
  return (
    <div className="MyPage">
      <div className="Logo">
        <NavigationItem link="/" exact>
          <img src="/Logo.png" alt="Logo" />
        </NavigationItem>
        <NavigationItem link="/" exact>
          <h1>Better World</h1>
        </NavigationItem>
      </div>
      <div className="Page">
        <div className="pageTitle">
          <h1>Your Interests</h1>
        </div>
        <div className="savedCharities"></div>
      </div>
    </div>
  );
};

export default MyPage;
