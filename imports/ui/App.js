import React from "react";

import { useTracker } from "meteor/react-meteor-data";

import { postCollection } from "../api/post";
import Feed from "./pages/Feed/Feed";

const App = () => {
  const posts = useTracker(() => postCollection.find({}).fetch());
  console.log(posts);
  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <ul>
        {posts.map((post) => (
          <Feed key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default App;
