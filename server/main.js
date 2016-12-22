//The collections that are used on the client must also be created on the server
//or they will not be avalible on the client.
import { Mongo } from 'meteor/mongo';
Requirements = new Mongo.Collection('reqs');
Classes = new Mongo.Collection('classes');
Nclasses = new Mongo.Collection('nclasses');


