import React, { useState } from "react";
import Button from "../UI/Button/Button";

import ribbonBefore from "./ribbon-before.svg";
import ribbonAfter from "./ribbon-after.svg";
import "./Post.css";

const Post = props => {
  const [saveClicked, setSaveClicked] = useState(false);

  let category = true;
  if (props.category === "Not Provided") {
    category = false;
  }

  let missionStatement = true;
  if (!props.missionStatement) {
    missionStatement = false;
  }

  const toTitleCase = str => {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const saveToMyPage = () => {
    setSaveClicked(!saveClicked);
  };

  return (
    <div className="Post">
      <article>
        <div className="PostButtons">
          <div className="Ribbon" onClick={saveToMyPage}>
            <img src={saveClicked ? ribbonAfter : ribbonBefore} alt="Ribbon" />
          </div>
          <a href={props.url} target="to_blank">
            <Button btnType="Website">VISIT WEBSITE</Button>
          </a>
        </div>
        <div className="PostInfo">
          <div
            className="PostImage"
            style={{
              backgroundImage: `url(${props.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <ul>
            <h2>{toTitleCase(props.charityName)}</h2>
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
