import React from "react";

import "./Post.css";

const post = props => (
  <article className="Post" onClick={props.clicked}>
    <div className="Title">
      <h1>{props.charityName}</h1>
    </div>
    <div className="Info">
      <p>{props.ein}</p>
      <p>{props.website}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zipcode}</p>
      <p>{props.category}</p>
    </div>
  </article>
);

export default post;
