//adds functionality to todosList.html

import angular from 'angular';
import angularMeteor from 'angular-meteor';


import template from './semesterList.html';


class semesterListCtrl {
  constructor() {
    this.semester = [{
      name: 'This is task 1'
    }, {
      name: 'This is task 2'
    }, {
      name: 'This is task 3'
    }];
  }
}

export default angular.module('semesterList', [
  angularMeteor
])
  .component('semesterList', {
    templateUrl: 'imports/components/semesterList/semesterList.html',
    controller: ['$scope', semesterListCtrl] //from class TodosListCtrl
  });
