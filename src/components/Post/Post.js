import React from "react";

import "./Post.css";

const post = props => {
  if (props.charities[0]) {
    return (
      <article className="Post" onClick={props.clicked}>
        <div className="title">
          <h1 style={{ textAlign: "center" }}>
            {props.charities[0].charityName}
          </h1>
        </div>
        <div className="content">
          <p>
            <b>EIN:</b> {props.charities[0].ein}
          </p>
          <p>
            <b>WEBSITE:</b> {props.charities[0].website}
          </p>
          <p>
            <b>CITY:</b> {props.charities[0].city}
          </p>
          <p>
            <b>STATE:</b> {props.charities[0].state}
          </p>
          <p>
            <b>ZIP:</b> {props.charities[0].zipcode}
          </p>
          <p>
            <b>CATEGORY:</b> {props.charities[0].category}
          </p>
        </div>
      </article>
    );
  }
};

export default post;
