import React from "react";

import "./Post.css";

const post = props => {
  let donation = true;
  if (props.acceptingDonations === 0) {
    donation = false;
  }

  let missionStatement = true;
  if (!props.missionStatement) {
    missionStatement = false;
  }

  let website = true;
  if (!props.website) {
    website = false;
  }

  return (
    <article className="Post" onClick={props.clicked}>
      <div>
        <a href={props.orghunterUrl} target="_blank" rel="noopener noreferrer">
          <h1>{props.charityName}</h1>
        </a>
        <small>
          {props.city}, {props.state}, {props.zip}
        </small>
        <ul>
          <b>EIN</b> {props.ein}
        </ul>
        <ul>
          <b>Impacts </b> {props.category} Fields.
        </ul>
        <ul>
          <b>Accepting Donations?</b> {donation ? " Yes" : " No"}
        </ul>
        <ul>
          <b>Score</b> {props.score} / 5
        </ul>
        <ul>
          {website ? (
            <a href={props.website} target="_blank" rel="noopener noreferrer">
              <b>More Info</b>
            </a>
          ) : null}
        </ul>
        <ul>{missionStatement ? props.missionStatement : null}</ul>
      </div>
    </article>
  );
};

export default post;
