import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
Requirements = new Mongo.Collection('reqs');

Meteor.startup(() => {
  // code to run on server at startup
});
