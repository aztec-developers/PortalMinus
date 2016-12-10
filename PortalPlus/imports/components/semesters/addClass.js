import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './addClass.html';

class addClassCtrl {
    constructor($scope) {
        $scope.viewModel(this);

        // | CURRENT PROBLEM |
        this.helpers({
            filterClasses() {
                // Declare variables
                var input, filter, table, tr, td, i;
                input = document.getElementById("searchForClasses");
                filter = input.value.toUpperCase();
                table = document.getElementById("classes");
                tr = table.getElementsByTagName("tr");

                // Loop through all table rows, and hide those who don't match the search query
                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[1];
                    if (td) {
                        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            }
        });

        /* 
        | PROBLEM I POSTED ON SLACK |

		this.classes = [{
	      text: 'Class'
	    }, {
	      text: 'Class'
	    }, {
	      text: 'Class'
	    }];

        */

    }
}

export default angular.module('addClass', [
        angularMeteor
    ])
    .component('addClass', {
        templateUrl: 'imports/components/semesters/addClass.html',
        controller: ['$scope', addClassCtrl]
    });
