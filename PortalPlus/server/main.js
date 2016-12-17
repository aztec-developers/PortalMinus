import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
Requirements = new Mongo.Collection('reqs');
Classes = new Mongo.Collection('classes');
SemesterClasses = new Mongo.Collection('semesterClasses');

Meteor.startup(() => {
  // code to run on server at startup
});
