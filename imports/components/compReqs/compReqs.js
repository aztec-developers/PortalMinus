//adds functionality to todosList.html

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './compReqs.html';

//Note! The 'import' and 'new Mongo...' below MUST be done in both the client and the server.
//Check the server's main.js ! The server one is technically more important than the client one.
//The server import/instantiation does the actual collection creation/linking. The client one
//only accesses the server one IFF the server one had been created.
import { Mongo } from 'meteor/mongo';
Requirements = new Mongo.Collection('reqs');
Classes = new Mongo.Collection('classes');
Nclasses = new Mongo.Collection('nclasses');




class compReqsCtrl {
  constructor($scope) {

    $scope.viewModel(this);

    this.helpers({
      reqs(){
        return Requirements.find({});
      },

      classes(){
        return Classes.find({});
      },

      nclasses(){
        return Nclasses.find({});
      }  
    }) 
  }

    addClass(selectedClass) {
      console.log(selectedClass);
      Nclasses.insert({
        name: selectedClass.class.name,
        abr: selectedClass.class.abr,
        teacher: selectedClass.class.teacher

      });
      // add code to allow to remove in server.js
      Classes.remove({
        name: selectedClass.class.name,
        abr: selectedClass.class.abr,
        teacher: selectedClass.class.teacher
      });
    }


    returnClass(selectedClass) {
      console.log(selectedClass);
      NClasses.remove(
        selected.MongoID.ObjectID
      );
      Classes.insert({
      name: selectedClass.class.name,
      abr: selectedClass.class.abr,
      teacher: selectedClass.class.teacher
      });
    }



}

Classes.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId && doc.owner === userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return true;
  },
  fetch: ['owner']
});


export default angular.module('compReqs', [
  angularMeteor
])
  .component('compReqs', {
    templateUrl: 'imports/components/compReqs/compReqs.html',
    controller: ['$scope', compReqsCtrl]
  });



/*
The following info must be added to the database.
After meteor has been started, run 'meteor mongo' from the command line (no quotes).
Run the command below to insert all of the database values.

db.reqs.insert([{text:"COMPETENCY REQUIREMENTS",status:"complete"},
  {text:"GRADUATION WRITING ASSESSMENT REQUIREMENT",status:"incomplete"},
  {text:"AMERICAN INSTITUTIONS REQUIREMENT SATISFIED",status:"complete"},
  {text:"UNIT, RESIDENCE AND GPA REQUIREMENTS",status:"incomplete"},
  {text:"CULTURAL DIVERSITY",status:"incomplete"},
  {text:"IVA.  EXPLORATIONS - NATURAL SCIENCES",status:"incomplete"},
  {text:"IVA.  EXPLORATIONS - SOCIAL AND BEHAVIORAL SCIENCES",status:"incomplete"},
  {text:"IVC.  EXPLORATIONS - HUMANITIES",status:"incomplete"},
  {text:"PREPARATION FOR THE MAJOR",status:"complete"},
  {text:"MAJOR REQUIREMENTS",status:"complete"}])*/

