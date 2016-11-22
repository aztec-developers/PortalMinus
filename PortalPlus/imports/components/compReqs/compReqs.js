//adds functionality to todosList.html

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './compReqs.html';

class compReqsCtrl {
  constructor() {
  }
}

export default angular.module('compReqs', [
  angularMeteor
])
  .component('compReqs', {
    templateUrl: 'imports/components/compReqs/compReqs.html',
    controller: ['$scope', compReqsCtrl] 
  });
