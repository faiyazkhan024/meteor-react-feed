import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import React from "react";

import Auth from "./pages/Auth/Auth";
import Feed from "./pages/Feed/Feed";

const App = () => {
  const user = useTracker(() => Meteor.user());

  console.log(Meteor);
  return <div>{user ? <Feed /> : <Auth />}</div>;
};

export default App;
