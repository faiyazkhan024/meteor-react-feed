import { Meteor } from "meteor/meteor";

import { postCollection } from "../imports/api/post";

export const insertPost = (text) => {
  postCollection.insert({ text });
};

Meteor.startup(() => {
  if (postCollection.find().count() === 0) {
    [
      "First Post",
      "Second Post",
      "Third Post",
      "Fourth Post",
      "Fifth Post",
      "Sixth Post",
      "Seventh Post",
    ].forEach(insertPost);
  }
});
