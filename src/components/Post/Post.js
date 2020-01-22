import React from "react";

import "./Post.css";

const post = props => (
  <article className="Post" onClick={props.clicked}>
    <div className="Title">
      <h1 style={{ textAlign: "center" }}>{props.charityName}</h1>
    </div>
    <div className="Info">
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
        <b>ZIP:</b> {props.zipcode}
      </p>
      <p>
        <b>CATEGORY:</b> {props.category}
      </p>
    </div>
  </article>
);

export default post;
