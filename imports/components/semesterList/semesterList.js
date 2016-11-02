//adds functionality to todosList.html

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './semesterList.html';


class semesterListCtrl {
  constructor($scope) { //function
    $scope.viewModel(this);
    this.semester = [{
      name: 'sem1'
    }, {
      name: 'sem2'
    }, {
      name: 'sem3'
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
