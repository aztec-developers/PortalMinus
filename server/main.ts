import { Meteor } from 'meteor/meteor';

import { loadThings } from './imports/fixtures/things';


Meteor.startup(() => {
  loadThings();
});
