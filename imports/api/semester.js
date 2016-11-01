import { Mongo } from 'meteor/mongo';
import { Tasks } from '../../api/tasks.js';

export const Semester = new Mongo.Collection('Tasks');
