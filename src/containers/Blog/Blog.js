import React from "react";

import Search from "../../components/Search/Search";
import Posts from "../../components/Posts/Posts";
import "./Blog.css";

const blog = props => {
  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Donations</a>
            </li>
            <li>
              <a href="/">Authenticate</a>
            </li>
          </ul>
        </nav>
      </header>
      <Search />
      <Posts />
    </div>
  );
};

export default blog;
