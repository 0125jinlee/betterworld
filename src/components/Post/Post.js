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

  let imagesArr = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg"
  ];
  let usedImages = {};
  let usedImagesCount = 0;

  function displayImage() {
    let num = Math.ceil(Math.random() * (13 - 1)) + 1;
    if (!usedImages[num]) {
      usedImages[num] = true;
      usedImagesCount++;
      if (usedImagesCount === imagesArr.length) {
        usedImagesCount = 0;
        usedImages = {};
      } else {
        displayImage();
      }
      return imagesArr[num];
    }
  }

  return (
    <article className="Post" onClick={props.onClick}>
      <div>
        <img
          className="PostImage"
          src={`/PostPictures/${displayImage()}`}
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
          {missionStatement ? props.missionStatement : null}
        </ul>
      </div>
    </article>
  );
};

export default post;
