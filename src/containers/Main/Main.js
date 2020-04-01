import React from "react";

import Search from "../../components/Search/Search";
import Posts from "../../components/Posts/Posts";
import "./Main.css";

const main = () => {
  return (
    <div className="Main">
      <div className="Title">
        <img src="/Logo.png" alt="Logo" />
        BETTER WORLD
      </div>
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
