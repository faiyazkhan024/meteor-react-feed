import React from "react";

import { useTracker } from "meteor/react-meteor-data";

import { postCollection } from "../api/post";
import Feed from "./pages/Feed/Feed";
import PostForm from "./components/PostForm/PostForm";

const App = () => {
  const posts = useTracker(() =>
    postCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );
  console.log(posts);
  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <PostForm />

      <ul>
        {posts.map((post) => (
          <Feed key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default App;
