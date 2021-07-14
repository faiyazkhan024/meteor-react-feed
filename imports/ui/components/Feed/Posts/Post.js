import React from "react";

import "./Post.css";

const Post = (props) => {
  return (
    <div className="post" key={props._id}>
      <p className="userInfo">
        <b>By: {props.userEmail} </b>
      </p>
      <br />
      <p>{props.text}</p>
    </div>
  );
};

export default Post;
