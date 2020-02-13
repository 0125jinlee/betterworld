import React from "react";

import Search from "../../components/Search/Search";
import Posts from "../../components/Posts/Posts";
import "./Main.css";

const main = () => {
  return (
    <div className="Main">
      <h1 className="Title">BETTER WORLD</h1>
      <Search />
      <Posts />
    </div>
  );
};

export default main;
