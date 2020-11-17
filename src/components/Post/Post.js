import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";

import Button from "../UI/Button/Button";
import ribbonBefore from "./ribbon-before.svg";
import ribbonAfter from "./ribbon-after.svg";
import * as actions from "../../store/actions";
import "./Post.css";

const uuid = require("uuid");

const Post = props => {
  const [saveClicked, setSaveClicked] = useState(false);
  const [uid] = useState(uuid.v1());

  const dispatch = useDispatch();

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
    if (isAuthenticated) {
      setSaveClicked(true);
      dispatch(
        actions.savePost(
          {
            charityName: props.charityName,
            ein: props.ein,
            url: props.url,
            website: props.website,
            city: props.city,
            state: props.state,
            zip: props.zipCode,
            category: props.category,
            score: props.score,
            acceptingDonations: props.acceptingDonations,
            missionStatement: props.missionStatement,
            alt: props.ein,
            key: props.ein
          },
          props.token,
          uid
        )
      );
    }
  };

  const deletePostHandler = () => {
    if (isAuthenticated) {
      setSaveClicked(false);
    }
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
    loading: state.savePostReducer.loading,
    token: state.authReducer.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSavePost: (postData, uid, token) =>
      dispatch(actions.savePost(postData, uid, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
