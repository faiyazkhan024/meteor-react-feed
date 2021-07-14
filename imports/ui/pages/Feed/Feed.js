import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React from "react";

import PostForm from "../../components/PostForm/PostForm";
import { postCollection } from "../../../api/post";

import "./Feed.css";

const Feed = () => {
  const posts = useTracker(() =>
    postCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  const logout = () => Meteor.logout();
  return (
    <>
      <div className="feedHeader">
        <h1>Welcome to Meteor React Feed!</h1>
        <button className="logout" onClick={logout}>
          <img src="https://img.icons8.com/ios/50/ffffff/shutdown--v1.png" />
        </button>
      </div>
      <PostForm />
      <div className="feedContainer">
        {posts.map((post) => (
          <div className="post" key={post._id}>
            <p className="userInfo">
              <b>By: {post.userEmail} </b>
            </p>
            <br />
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feed;
