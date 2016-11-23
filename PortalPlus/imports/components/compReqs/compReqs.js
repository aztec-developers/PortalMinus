//adds functionality to todosList.html

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './compReqs.html';

class compReqsCtrl {
  constructor() {
    this.reqs = [{text:"COMPETENCY REQUIREMENTS",status:"complete"},
    {text:"GRADUATION WRITING ASSESSMENT REQUIREMENT",status:"incomplete"},
    {text:"AMERICAN INSTITUTIONS REQUIREMENT SATISFIED",status:"complete"},
    {text:"UNIT, RESIDENCE AND GPA REQUIREMENTS",status:"incomplete"},
    {text:"CULTURAL DIVERSITY",status:"incomplete"},
    {text:"IVA.  EXPLORATIONS - NATURAL SCIENCES",status:"incomplete"},
    {text:"IVA.  EXPLORATIONS - SOCIAL AND BEHAVIORAL SCIENCES",status:"incomplete"},
    {text:"IVC.  EXPLORATIONS - HUMANITIES",status:"incomplete"},
    {text:"PREPARATION FOR THE MAJOR",status:"complete"},
    {text:"MAJOR REQUIREMENTS",status:"complete"},
    ];
  }
}


export default angular.module('compReqs', [
  angularMeteor
])
  .component('compReqs', {
    templateUrl: 'imports/components/compReqs/compReqs.html',
    controller: ['$scope', compReqsCtrl]
  });
