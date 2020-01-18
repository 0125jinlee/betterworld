import React from "react";

import "./Post.css";

const post = props => (
  <article className="Post" onClick={props.clicked}>
    <h1>Test</h1>
    <div className="Info">
      <div className="Charity">Charity</div>
      <div className="Description">Description</div>
    </div>
  </article>
);

export default post;
