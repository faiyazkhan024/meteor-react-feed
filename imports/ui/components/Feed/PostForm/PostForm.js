import React, { useState } from "react";

import { Meteor } from "meteor/meteor";

import "./PostForm.css";

const PostForm = () => {
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!text) return;
    Meteor.call("post.create", text);
    setText("");
  };

  return (
    <div className="postFormContainer">
      <form className="postForm" onSubmit={submitHandler}>
        <textarea
          type="text"
          className="postInput"
          placeholder="Type to add new Post"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit" className="postBtn">
          Post
          {/* <img src="https://img.icons8.com/material-outlined/50/ffffff/send-letter.png" /> */}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
