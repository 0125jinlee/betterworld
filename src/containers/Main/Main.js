import React from "react";
import { Route, Link } from "react-router-dom";

import Search from "../../components/Search/Search";
import Posts from "../../components/Posts/Posts";
import "./Main.css";

const main = props => {
  return (
    <div className="Main">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/auth">Authenticate</Link>
            </li>
            <li>
              <Link to="/dona">Donations</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className="Title">BETTER WORLD</h1>
      <Route
        path="/"
        exact
        render={() => (
          <section className="Home">
            <Search />
            <Posts />
          </section>
        )}
      />
      <Route path="/auth" exact render={() => <h1>Authenticate</h1>} />
      <Route path="/dona" exact render={() => <h1>Donations</h1>} />
    </div>
  );
};

export default main;
