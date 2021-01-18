import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "../UI/Button/Button";
import ribbonBefore from "./ribbon-before.svg";
import ribbonAfter from "./ribbon-after.svg";
import * as actions from "../../store/actions/index";
import "./Post.css";

const Post = props => {
  const [saveClicked, setSaveClicked] = useState(false);

  const isAuthenticated = props.token !== null;

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

  const savePostHandler = () => {
    const postData = {
      charityName: props.charityName,
      ein: props.ein,
      url: props.url,
      website: props.website,
      city: props.city,
      state: props.state,
      zip: props.zipCode,
      category: props.category,
      missionStatement: props.missionStatement,
      alt: props.ein,
      key: props.ein
    };

    const cleanObj = postData => {
      for (let prop in postData) {
        if (postData[prop] === null || postData[prop] === undefined) {
          delete postData[prop];
        }
      }
      return postData;
    };

    if (isAuthenticated) {
      setSaveClicked(true);
      props.savePost(
        cleanObj(postData),
        localStorage.getItem("userId"),
        props.ein
      );
    }
  };

  const deletePostHandler = () => {
    if (isAuthenticated) {
      setSaveClicked(false);
    }
    props.deletePost(localStorage.getItem("userId"), props.ein);
  };

  return (
    <div className="Post">
      <article>
        <div className="PostButtons">
          <div
            className="Ribbon"
            onClick={saveClicked ? deletePostHandler : savePostHandler}
          >
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

const mapStateToProps = state => {
  return {
    token: state.authReducer.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    savePost: (postData, uid, ein) =>
      dispatch(actions.savePost(postData, uid, ein)),
    deletePost: (uid, ein) => dispatch(actions.deletePost(uid, ein))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
