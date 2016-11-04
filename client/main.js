import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import semesterList from '../imports/components/semesterList/semesterList'
import '../imports/startup/accounts-config.js';

angular.module('portal-plus', [
  angularMeteor,
  todosList.name,
  semesterList.name,
  'accounts.ui'
]);
