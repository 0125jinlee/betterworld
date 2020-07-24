import React, { useState } from "react";
import Button from "../UI/Button/Button";

import "./Post.css";

const Post = props => {
  const [buttonVisible, setButtonVisible] = useState(false);

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
    <div className="Post">
      <article
        onMouseEnter={() => {
          setButtonVisible(true);
        }}
        onMouseLeave={() => {
          setButtonVisible(false);
        }}
        onClick={props.onClick}
      >
        <div className="PostButtons">
          {buttonVisible ? <Button btnType="Website">WEBSITE</Button> : null}
          {buttonVisible ? <Button btnType="Save">SAVE</Button> : null}
        </div>
        <div className="PostInfo">
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
    </div>
  );
};

export default Post;
