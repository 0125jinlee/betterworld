import React from "react";
import { Route, Link } from "react-router-dom";

import Search from "../../components/Search/Search";
import Posts from "../../components/Posts/Posts";
import Authenticate from "../../components/Authenticate/Authenticate";
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
              <Link to="/auth">Login</Link>
            </li>
            <li>
              <Link to="/impacts">Your Impacts</Link>
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
      <Route
        path="/auth"
        exact
        render={() => (
          <section className="Authenticate">
            <Authenticate />
          </section>
        )}
      />
      <Route path="/impacts" exact render={() => <h1>Donations</h1>} />
    </div>
  );
};

export default main;
