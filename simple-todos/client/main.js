import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import semesterList from '../imports/components/semesterList/semesterList';
angular.module('simple-todos', [
  angularMeteor,
  todosList.name
]);
var i = 0;
function duplicate(){
  var myDiv = document.getElementById('templateDuplicate');
  var divClone = myDiv.cloneNode(true);
  document.body.appendChild(divClone);
}
