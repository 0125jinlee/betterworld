import React from "react";

import "./Post.css";

const post = props => {
  let donation = true;
  if (props.acceptingDonations === 0) {
    donation = false;
  }

  let category = true;
  if (props.category === "Not Provided") {
    category = false;
  }

  let missionStatement = true;
  if (!props.missionStatement) {
    missionStatement = false;
  }

  let website = true;
  if (!props.website) {
    website = false;
  }

  let image = Math.ceil(Math.random() * (13 - 1)) + 1;

  return (
    <article className="Post" onClick={props.onClick}>
      <div>
        <img
          className="PostImage"
          src={`/PostPictures/${image}.jpg`}
          alt="PostPicture"
          height="160"
          width="330"
        />
        <ul>
          <a
            href={props.orghunterUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{props.charityName}</h2>
          </a>
          <small>
            {props.city}, {props.state}, {props.zip}
          </small>
        </ul>
        <ul>
          {category && (
            <>
              <b>Impacts </b> <span>{`${props.category} fields`}</span>
            </>
          )}
        </ul>
        <ul>
          <b>Accepting Donations?</b> {donation ? " Yes" : " No"}
        </ul>
        <ul>
          {website ? <b>More Info</b> : null}
          <br></br>
          {missionStatement ? props.missionStatement : null}
        </ul>
      </div>
    </article>
  );
};

export default post;
