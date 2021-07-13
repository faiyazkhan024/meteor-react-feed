import React, { useState } from "react";

import { postCollection } from "../../../api/post";

const PostForm = () => {
  const [text, setText] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!text) return;

    postCollection.insert({
      text: text.trim(),
      createdAt: new Date(),
    });

    setText("");
  };

  return (
    <form className="post-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Type to add new Post"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
