import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Tasks } from '../../api/tasks.js';

import template from './todosList.html';

class TodosListCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.helpers({
      tasks() {
        // Show newest tasks at the top
        return Tasks.find({}, {
          sort: {
            createdAt: -1
          }
        });
      }
    })
  }

  addTask(newTask) {
    // Insert a task into the collection

    Tasks.insert({
      text: newTask,
      createdAt: new Date
    });

     // Clear form
     this.newTask = '';
   }

  setChecked(task) {
    // Set the checked property to the opposite of its current value
    Tasks.update(task._id, {
      $set: {
        checked: !task.checked
      },
    });
  }

  removeTask(task) {
    Tasks.remove(task._id);
  }
 }

 export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todosList/todosList.html',
    controller: ['$scope', TodosListCtrl]
  });

function inputDropDown(){
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

var dropdowns = document.getElementsByClassName("dropdown-content");
var i;
for (i = 0; i < dropdowns.length; i++) {
  var openDropdown = dropdowns[i];
  if (openDropdown.classList.contains('show')) {
    openDropdown.classList.remove('show');
  }
}
}

}
