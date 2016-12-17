import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './addClass.html';
import { Mongo } from 'meteor/mongo';
Classes = new Mongo.Collection('classes');
SemesterClasses = new Mongo.Collection('semesterClasses');


class addClassCtrl {

    constructor($scope) {
            $scope.viewModel(this);
            this.helpers({
                classes() {
                    return Classes.find({});
                },
                semesterClasses() {
                    return SemesterClasses.find({});
                }
            });
        }
        /*
	db.classes.insert([
		{units:3, name:'Introduction to Computer Programming', number:'CS-107', teacher:'N/A'},
		{units:3, name:'Intermediate to Computer Programming', number:'CS-108', teacher:'N/A'},
		{units:3, name:'Machine Organization and Assembly Language', number:'CS-237', teacher:'Lindeneau'},
		{units:4, name:'Calculus I', number:'MATH-150', teacher:'N/A'},
		{units:4, name:'Calculus II', number:'MATH-151', teacher:'N/A'},
		{units:3, name:'Discrete Mathematics', number:'MATH-245', teacher:'N/A'},
		{units:3, name:'Basic Statistical Methods', number:'STAT-250', teacher:'N/A'},
		{units:3, name:'Elementary Statistics', number:'STAT-119', teacher:'N/A'},
		{units:3, name:'Introduction to Linear Algebra', number:'MATH-254', teacher:'N/A'},
		{units:3, name:'Principles of Physics', number:'PHYS-195', teacher:'N/A'},
		{units:1, name:'Principles of Physics', number:'PHYS-195L', teacher:'N/A'},
		{units:3, name:'Principles of Physics', number:'PHYS-196', teacher:'N/A'},
		{units:1, name:'Principles of Physics', number:'PHYS-196L', teacher:'N/A'},
		{units:5, name:'General Chemistry', number:'CHEM-200', teacher:'N/A'},
		{units:5, name:'General Chemistry', number:'CHEM-201', teacher:'N/A'},
	])
	*/

    filterClasses() {
        filterClasses();
    }
    addThisClass($event) {
        addThisClass($event);
    }
    finalizeClass() {
        finalizeClass();
    }
    removeClasses() {
        removeClasses();
    }
    tester() {
        tester();
    }
}

filterClasses = function() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchForClasses");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableClasses");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0].lastChild.textContent;
        if (td) {
            if (td.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

resetFilter = function() {
    var input, filterTable, filterTR;
    input = document.getElementById("searchForClasses");
    input.value = '';
    filterTable = document.getElementById("tableClasses");
    filterTR = filterTable.getElementsByTagName("tr");
    for (i = 0; i < filterTR.length; i++) {
        filterTR[i].style.display = "";
    }
}

alert = function(text, msTime) {
    var footer, alert;
    footer = document.getElementById("modalFooter");
    if (footer.getElementsByClassName('alert').length === 0) {
        alert = document.createElement('div');
        alert.className = 'alert alert-danger text-left';
        alert.id = 'alertMessage';
        alert.setAttribute('role', 'alert');
        alert.appendChild(document.createTextNode(text));
        footer.insertBefore(alert, footer.childNodes[0]);
        setTimeout(function() {
            $("#alertMessage").fadeTo(500, 0).slideUp(500, function() {
                $(this).remove();
            });
        }, msTime);
    }

}

// Can be refined to use classes DB calls
addThisClass = function($event) {
    var clone, table, tableBody, tableRows, tableRowsLength, tableData, tableDataText, semesterTable, semesterTableBody, semesterTableRows, semesterTableRowsLength;
    clone = $event.currentTarget.cloneNode(true);
    table = document.getElementById('queuedClasses');
    tableBody = table.getElementsByTagName('tbody')[0];
    tableRows = tableBody.getElementsByTagName('tr');
    tableRowsLength = tableBody.getElementsByTagName('tr').length;
    tableData = clone.getElementsByTagName('td');
    tableDataText = tableData[2].textContent;
    semesterTable = document.getElementById('tableSemester0');
    semesterTableBody = semesterTable.getElementsByTagName('tbody')[0];
    semesterTableRows = semesterTableBody.getElementsByTagName('tr');
    semesterTableRowsLength = semesterTableRows.length;

    // Need to skip semesterTableRow[0] which are <th>'s
    if (semesterTableRowsLength > 1) {
        for (var j = 1; j < semesterTableRowsLength; j++) {
            var finder;
            if (finder = SemesterClasses.findOne({ number: tableData[1].textContent })) {
                if (tableData[1].textContent == finder.number) {
                    alert('Sorry, you already added that class to the semester.', 3000);
                    return;
                }
            }
        }
    }
    if (tableRowsLength < 7) {
        for (var i = 0; i < tableRowsLength; i++) {
            if (tableRows[i].getElementsByTagName('td')[1].textContent == tableData[1].textContent) {
                alert('Sorry, you already added that class to the queue.', 3000);
                return;
            }
        }
        var remove = '<span class="glyphicon glyphicon-remove text-danger pull-right" style="padding-top: 2px; !important;" title="Delete Class"></span>';
        tableData[2].innerHTML = tableDataText + remove;
        tableBody.appendChild(clone);
    } else {
        alert('You cannot have more than 7 classes queued.', 3000);
    }
    /* Reset Filter */
    resetFilter();
}

// This function using the semesterClasses DB Will replace finalizeClass()
tester = function() {
    var table, tableBody, tableRows, tableRowsLength;
    table = document.getElementById('queuedClasses');
    tableBody = table.getElementsByTagName('tbody')[0];
    tableRows = tableBody.getElementsByTagName('tr');
    tableRowsLength = tableBody.getElementsByTagName('tr').length;
    var allClassesLength = document.getElementById('tableSemester0').getElementsByTagName('tr').length - 1;
    if ((allClassesLength + tableRowsLength) <= 7) {
        for (var i = 0; i < tableRowsLength; i++) {
            /* might need to alter addThisClass() code to check through semesterClasses DB instead of each <tr> */
            var classData = tableRows[i].getElementsByTagName('td');
            var units = classData[0].childNodes[0].textContent;
            var name = classData[0].childNodes[1].textContent;
            var number = classData[1].textContent;
            var teacher = classData[2].textContent;
            SemesterClasses.insert({ units: units, name: name, number: number, teacher: teacher });
        }
        tableBody.remove(tableRows);
        tableBody = document.createElement('tbody');
        table.appendChild(tableBody);
    } else {
        var btn = document.getElementById('addClasses');
        var footer = document.getElementById("modalFooter");
        btn.setAttribute('data-dismiss', '');
        alert('Sorry, you can only have a maximum of 7 classes in each semester.', 4000);
    }
    /* Reset Filter */
    resetFilter();
}

finalizeClass = function() {
    var clone, table, tableBody, tableRows, tableRowsLength, semesterTable, semesterTableBody, allClassesLength;
    table = document.getElementById('queuedClasses');
    tableBody = table.getElementsByTagName('tbody')[0];
    tableRows = tableBody.getElementsByTagName('tr');
    tableRowsLength = tableBody.getElementsByTagName('tr').length;
    semesterTable = document.getElementById('tableSemester0');
    semesterTableBody = semesterTable.getElementsByTagName('tbody')[0];
    var allClassesLength = document.getElementById('tableSemester0').getElementsByTagName('tr').length - 1;
    if ((allClassesLength + tableRowsLength) <= 7) {
        for (var i = 0; i < tableRowsLength; i++) {
            clone = tableRows[i].cloneNode(true);
            semesterTableBody.appendChild(clone);
        }
        tableBody.remove(tableRows);
        tableBody = document.createElement('tbody');
        table.appendChild(tableBody);
    } else {
        var btn = document.getElementById('addClasses');
        var footer = document.getElementById("modalFooter");
        btn.setAttribute('data-dismiss', '');
        alert('Sorry, you can only have a maximum of 7 classes in each semester.', 4000);
    }
    /* Reset Filter */
    resetFilter();
}

removeClasses = function() {
    var table, tableBody, tableRows, tableRowsLength;
    table = document.getElementById('queuedClasses');
    tableBody = table.getElementsByTagName('tbody')[0];
    tableRows = tableBody.getElementsByTagName('tr');
    tableRowsLength = tableRows.length;
    for (var i = 0; i < tableRowsLength; i++) {
        tableBody.remove(tableRows);
    }
    tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
}

export default angular.module('addClass', [
        angularMeteor
    ])
    .component('addClass', {
        templateUrl: 'imports/components/semesters/addClass.html',
        controller: ['$scope', addClassCtrl]
    });
