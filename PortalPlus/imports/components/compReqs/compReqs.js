//adds functionality to todosList.html

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './compReqs.html';

class compReqsCtrl {
  constructor() {
    this.reqs = [{text:"COMPETENCY REQUIREMENTS"},
    {text:"GRADUATION WRITING ASSESSMENT REQUIREMENT"},
    {text:"AMERICAN INSTITUTIONS REQUIREMENT SATISFIED"},
    {text:"UNIT, RESIDENCE AND GPA REQUIREMENTS"},
    {text:"CULTURAL DIVERSITY"},
    {text:"IVA.  EXPLORATIONS - NATURAL SCIENCES"},
    {text:"IVC.  EXPLORATIONS - HUMANITIES"},
    {text:"PREPARATION FOR THE MAJOR"},
    {text:"MAJOR REQUIREMENTS"},
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
