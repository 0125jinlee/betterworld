import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "../UI/Button/Button";
import ribbonBefore from "./ribbon-before.svg";
import ribbonAfter from "./ribbon-after.svg";
import * as actions from "../../store/actions/";
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
    const { savePost } = props;

    if (isAuthenticated) {
      setSaveClicked(true);
      savePost(
        {
          charityName: props.charityName
          // ein: props.ein,
          // url: props.url,
          // website: props.website,
          // city: props.city,
          // state: props.state,
          // zip: props.zipCode,
          // category: props.category,
          // score: props.score,
          // acceptingDonations: props.acceptingDonations,
          // missionStatement: props.missionStatement,
          // alt: props.ein,
          // key: props.ein,
        },
        localStorage.getItem("userId")
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
    savePost: (postData, uid) => dispatch(actions.savePost(postData, uid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
