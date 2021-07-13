import React from "react";

import "./Feed.css";

const Feed = ({ post }) => {
  return <li>{post.text}</li>;
};

export default Feed;
