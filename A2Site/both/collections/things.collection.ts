import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import {Thing} from '../models/thing.model';

export const Things = new MongoObservable.Collection<Thing>('things');

/* function loggedIn() {
  return !!Meteor.user();
}

Things.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
}); */
