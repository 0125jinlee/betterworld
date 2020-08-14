import React, { useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
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

  const savePostHandler = event => {
    event.preventDefault();
    setSaveClicked(!saveClicked);
    const post = {
      charityName: props.charityName,
      url: props.url,
      city: props.city,
      state: props.state,
      zip: props.zip,
      category: props.category,
      missionStatement: props.missionStatement
    };

    props.onSavePost(post, props.token);
  };

  return (
    <div className="Post">
      <article>
        <div className="PostButtons">
          <div className="Ribbon" onClick={savePostHandler}>
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
    token: state.authReducer.token,
    userId: state.authReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSavePost: (postData, token) => dispatch(actions.savePost(postData, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
