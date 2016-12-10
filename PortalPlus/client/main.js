import angular from 'angular';
import angularMeteor from 'angular-meteor';
import compReqs from '../imports/components/compReqs/compReqs';
import addClass from '../imports/components/semesters/addClass';

angular.module('portal-plus', [
  angularMeteor,
  compReqs.name,
  addClass.name
]);