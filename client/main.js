import angular from 'angular';
import angularMeteor from 'angular-meteor';
import compReqs from '../imports/components/compReqs/compReqs';

angular.module('portal-plus', [
  angularMeteor,
  compReqs.name
]);

