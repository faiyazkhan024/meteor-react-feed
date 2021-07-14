import { Meteor } from "meteor/meteor";

import { Accounts } from "meteor/accounts-base";
import { postCollection } from "../imports/api/post";

const SEED_EMAIL = "admin@admin.com";
const SEED_PASSWORD = "password";

export const createPost = (text, userId, userEmail) => {
  postCollection.insert({ text, userId, userEmail, createdAt: new Date() });
};

Meteor.startup(() => {
  if (!Accounts.findUserByEmail(SEED_EMAIL)) {
    Accounts.createUser({
      email: SEED_EMAIL,
      password: SEED_PASSWORD,
    });
  }
  const user = Accounts.findUserByEmail(SEED_EMAIL);

  if (postCollection.find().count() === 0) {
    [].forEach((post) => createPost(post, user._id, user.email));
  }
});
