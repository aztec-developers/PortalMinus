import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList';
import semesterList from '../imports/components/semesterList/semesterList';
angular.module('simple-todos', [
  angularMeteor,
  todosList.name
]);

function duplicate(){
  var rectangle = document.getElementById("Rectangle");

}
function tableRows(){
  var table = document.getElementById("table");
  var tableRow = table.insertRow(1);
  var cell1 = tableRow.insertCell(0);
  var cell2 =  tableRow.insertCell(1);

}
