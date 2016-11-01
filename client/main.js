import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import semesterList from '../imports/components/semesterList/semesterList'

angular.module('simple-todos', [
  angularMeteor,
  todosList.name,
  semesterList.name
]);
