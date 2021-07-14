import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

import { postCollection } from "../../../api/post";

import "./PostForm.css";

const PostForm = () => {
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!text) return;

    postCollection.insert({
      text: text,
      userId: Meteor.userId(),
      userEmail: Meteor.user().emails[0].address,
      createdAt: new Date(),
    });

    setText("");
  };

  return (
    <form className="postForm" onSubmit={submitHandler}>
      <textarea
        type="text"
        className="postInput"
        placeholder="Type to add new Post"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit" className="postBtn">
        <img src="https://img.icons8.com/material-outlined/50/ffffff/send-letter.png" />
      </button>
    </form>
  );
};

export default PostForm;
