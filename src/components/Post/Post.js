import React from "react";

import "./Post.css";

const post = props => (
  <article className="Post" onClick={props.clicked}>
    <div>
      <h2 style={{ textAlign: "center" }}>{props.charityName}</h2>
      <p>
        <b>EIN:</b> {props.ein}
      </p>
      <p>
        <b>WEBSITE:</b> {props.website}
      </p>
      <p>
        <b>CITY:</b> {props.city}
      </p>
      <p>
        <b>STATE:</b> {props.state}
      </p>
      <p>
        <b>ZIP:</b> {props.zip}
      </p>
      <p>
        <b>CATEGORY:</b> {props.category}
      </p>
      <p>
        <b>SCORE:</b> {props.score}
      </p>
    </div>
  </article>
);

export default post;
