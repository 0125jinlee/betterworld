import React, { useState } from "react";
import { connect } from "react-redux";
import { toTitleCase, cleanObj } from "../../utils/utility";
import useLocalStorage from "react-use-localstorage";

import Button from "../UI/Button/Button";
import ribbonBefore from "./ribbon-before.svg";
import ribbonAfter from "./ribbon-after.svg";
import * as actions from "../../store/actions/index";
import "./Post.css";

const Post = props => {
  const [categoryCheck] = useState(props.category.length !== 0);
  const [missionStatementCheck] = useState(props.missionStatement.length !== 0);
  const [saved, setSaved] = useLocalStorage("saved");

  const { savePost } = props;
  const { deletePost } = props;

  const savePostHandler = ein => {
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
      key: props.ein,
      saved: true
    };

    if (props.isAuthenticated) {
      cleanObj(postData);
      savePost(cleanObj(postData), localStorage.getItem("userId"), props.ein);
    }

    let savedList;

    try {
      savedList = JSON.parse(saved);
    } catch (e) {
      savedList = {};
    }
    savedList[ein] = true;
    setSaved(JSON.stringify(savedList));
  };

  const deletePostHandler = ein => {
    let savedList;

    try {
      savedList = JSON.parse(saved);
    } catch (e) {
      savedList = {};
    }
    savedList[ein] = false;
    setSaved(JSON.stringify(savedList));

    deletePost(localStorage.getItem("userId"), props.ein);
  };

  return (
    <div className="Post">
      <article>
        <div className="PostButtons">
          {props.isAuthenticated ? (
            <div
              className="Ribbon"
              onClick={
                saved[props.ein] === true
                  ? () => deletePostHandler(props.ein)
                  : () => savePostHandler(props.ein)
              }
            >
              <img
                src={saved[props.ein] === true ? ribbonAfter : ribbonBefore}
                alt="Ribbon"
              />
            </div>
          ) : null}
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
            {categoryCheck ? (
              <>
                <span>{`${props.category} Fields`}</span>
                <br></br>
                <br></br>
              </>
            ) : null}
            {missionStatementCheck ? props.missionStatement : null}
          </ul>
        </div>
      </article>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null
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
