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

class compReqsCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      reqs(){
        return Requirements.find({});
      }
    });
  }
}
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

export default angular.module('compReqs', [
  angularMeteor
])
  .component('compReqs', {
    templateUrl: 'imports/components/compReqs/compReqs.html',
    controller: ['$scope', compReqsCtrl]
  });
