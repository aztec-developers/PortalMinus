import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './compReqs.html';
import { Mongo } from 'meteor/mongo';
Requirements = new Mongo.Collection('reqs');

class compReqsCtrl {
	constructor($scope) {
	$scope.viewModel(this);


	this.helpers ({
		reqs(){
			return Requirements.find({});
		}
	});
    }
}

export default angular.module('compReqs', [
        angularMeteor
    ])
    .component('compReqs', {
        templateUrl: 'imports/components/compReqs/compReqs.html',
        controller: ['$scope', compReqsCtrl]
    });
