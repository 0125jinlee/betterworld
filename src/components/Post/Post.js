import React from "react";

import "./Post.css";

const post = props => {
  let category = true;
  if (props.category === "Not Provided") {
    category = false;
  }

  let missionStatement = true;
  if (!props.missionStatement) {
    missionStatement = false;
  }

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  return (
    <article className="Post" onClick={props.onClick}>
      <div>
        <img
          className="PostImage"
          src={props.src}
          alt={props.alt}
          height="160"
          width="330"
        />
        <ul>
          <a
            href={props.orghunterUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{toTitleCase(props.charityName)}</h2>
          </a>
          <small>
            {toTitleCase(props.city)}, {props.state}, {props.zip}
          </small>
        </ul>
        <ul>
          {category && (
            <>
              <span>{`${props.category} Fields`}</span>
            </>
          )}
          <br></br>
          <br></br>
          {missionStatement ? props.missionStatement : null}
        </ul>
      </div>
    </article>
  );
};

export default post;
