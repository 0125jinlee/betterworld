import React from "react";

import NavigationItem from "../../components/Navigation/NavigationItem";
import "./Donations.css";

const donations = props => {
  return (
    <div className="Donations">
      <div className="Logo">
        <NavigationItem link="/" exact>
          <img src="/Logo.png" alt="Logo" />
        </NavigationItem>
        <NavigationItem link="/" exact>
          <h1>Better World</h1>
        </NavigationItem>
      </div>
      <div className="Test">
        <h1>TESTTESTTEST</h1>
      </div>
    </div>
  );
};

export default donations;
