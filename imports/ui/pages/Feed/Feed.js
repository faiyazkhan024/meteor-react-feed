import { useTracker } from "meteor/react-meteor-data";
import React from "react";

import PostForm from "../../components/PostForm/PostForm";
import { postCollection } from "../../../api/post";

import "./Feed.css";

const Feed = () => {
  const posts = useTracker(() =>
    postCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );
  return (
    <>
      <div className="feedHeader">
        <h1>Welcome to Meteor React Feed!</h1>
        <button className="logout">
          <img src="https://img.icons8.com/ios/50/ffffff/shutdown--v1.png" />
        </button>
      </div>
      <PostForm />
      <div className="feedContainer">
        {posts.map((post) => (
          <>
            <div className="post" key={post._id}>
              <p>{post.text}</p>
            </div>
            <hr />
          </>
        ))}
      </div>
    </>
  );
};

export default Feed;
