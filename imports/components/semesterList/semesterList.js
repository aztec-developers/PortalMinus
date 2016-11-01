//adds functionality to todosList.html

import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Semester } from '../../api/semester.js'
import { Tasks } from '../../api/tasks.js';

import template from './semesterList.html';


class semesterListCtrl {
  constructor($scope) { //function
    $scope.viewModel(this);

    this.helpers({
      semester() {
        return Semester.find({}, {
        sort: {
          createdAt: -1
        }
      });
    }
  })
}

   addSemester(newSemester) {
     // Insert a task into the Collection
     Semester.insert({
       task: new newSemester
     });

     //Clear form
     this.newSemester = '';
   }


   setChecked(semester) {
     Semester.update(semester._id, {
       $set: {
         checked: !semester.checked
       },
     });
   }

   removeSemester(semester) {
     Semester.remove(semester._id);
   }
 }

export default angular.module('semesterList', [
  angularMeteor
])
  .component('semesterList', {
    templateUrl: 'imports/components/todosList/semesterList.html',
    controller: ['$scope', semesterListCtrl] //from class TodosListCtrl
  });
