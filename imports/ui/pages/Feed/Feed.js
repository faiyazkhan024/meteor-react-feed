import React from "react";

import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";

import FeedHeader from "../../components/Feed/FeedHeader/FeedHeader";
import PostForm from "../../components/Feed/PostForm/PostForm";
import Post from "../../components/Feed/Posts/Post";

import postCollection from "../../../api/collections/post";

import "./Feed.css";

const Feed = () => {
  const posts = useTracker(() =>
    postCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  const logout = () => Meteor.logout();
  return (
    <>
      <FeedHeader onLogout={logout} />
      <PostForm />
      <div className="postContainer">
        {posts.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </>
  );
};

export default Feed;
