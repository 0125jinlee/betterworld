import React from "react";

import Search from "../../components/Search/Search";
import "./Main.css";

const main = () => {
  return (
    <div className="Main">
      <div className="Logo">
        <a aria-current="page" class="active" href="/">
          <img src="/Logo.png" alt="Logo" />
        </a>
        <a aria-current="page" class="active" href="/">
          <h1>Better World</h1>
        </a>
      </div>
      <div className="Search">
        <Search />
      </div>
    </div>
  );
};

export default main;
