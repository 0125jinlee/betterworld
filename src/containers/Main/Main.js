import React from "react";

import Search from "../../components/Search/Search";
import Posts from "../../components/Posts/Posts";
import Banner from "../../images/Banner.png";
import Logo from "../../images/Logo.png";
import "./Main.css";

const main = () => {
  return (
    <div className="Main">
      <div className="Logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="TitleBox">
        <h1 className="Title">BETTER WORLD</h1>
      </div>
      <div className="Top">
        <Search />
        <img src={Banner} alt="Banner" />
      </div>
      <div className="Bottom">
        <Posts />
      </div>
    </div>
  );
};

export default main;
