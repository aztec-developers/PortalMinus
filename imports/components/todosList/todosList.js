//adds functionality to todosList.html

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './todosList.html';

class TodosListCtrl {
  constructor($scope) { //function
    $scope.viewModel(this);
    this.tasks = [{
      task: 'class 1'
    }, {
      task: 'class 2'
    }, {
      task: 'class 3'
    }];
 }
 }

export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todosList/todosList.html',
    controller: ['$scope', TodosListCtrl] //from class TodosListCtrl
  });
