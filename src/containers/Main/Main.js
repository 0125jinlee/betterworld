import React from "react";

import Search from "../../components/Search/Search";
import Posts from "../../components/Posts/Posts";
import Banner from "../../images/Banner.png";
import Logo from "../../images/Logo.png";
import "./Main.css";

const main = () => {
  return (
    <div className="Main">
      <img className="Banner" src={Banner} alt="Banner" />
      <img className="Logo" src={Logo} alt="Logo" />
      <h1 className="Title">BETTER WORLD</h1>
      <div className="Top">
        <Search />
      </div>
      <div className="Bottom">
        <Posts />
      </div>
    </div>
  );
};

export default main;
