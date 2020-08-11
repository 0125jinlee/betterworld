import React from "react";

import NavigationItem from "../../components/Navigation/NavigationItem";
import "./MyPage.css";

const MyPage = () => {
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
    </div>
  );
};

export default MyPage;
