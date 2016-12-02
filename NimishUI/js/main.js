var year = 2017;
// function removeSemester(){
//   var nodeRemoval= document.getElementById("springChildContainer");
//   var nodeRemoval1 = document.getElementById("fallChildContainer");
//   if(nodeRemoval){
//     nodeRemoval.parentNode.removeChild(nodeRemoval);
//   }
//   if(nodeRemoval1){
//     nodeRemoval1.parentNode.removeChild(nodeRemoval1);
//   }
// }
/*Adding Classes*/

function addSpringClasses(){
  var classDiv = document.createElement("div");
  classDiv.setAttribute("class","panel-item");
  var classP = document.createElement("p");
  classP.setAttribute("class", "dragP");
  classDiv.appendChild(classP);

}
/* Adding Semesters*/
function addSemesterSpring(){
  //removeSemester();
  var table = document.getElementById("LeftTable");
  var addSpring = document.getElementById("SpringSemesterTemplate");
  var clone = addSpring.cloneNode(true);
  var row = document.getElementById("tr2");
  var cell = document.getElementById("td0");
  var addSemesterButton = document.getElementById("springChildContainer");
  var newRow = table.insertRow(table.rows.length);
  var newCell = newRow.insertCell(0);
  newCell.appendChild(addSemesterButton);
  cell.appendChild(clone);



}
function addSemesterFall(){
  // removeSemester();
  var table = document.getElementById("LeftTable");
  var addFall = document.getElementById("FallSemesterTemplate");
  var clone = addFall.cloneNode(true);
  var row = document.getElementById("tr2");
  var cell = document.getElementById("td1");
  cell.appendChild(clone);

  var addSemesterButton = document.getElementById("fallChildContainer");
  var newRow = table.insertRow(table.rows.length);
  var newCell = newRow.insertCell(1);
  newCell.appendChild(addSemesterButton);
}
/*Drag and Drop*/
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function( event ) {

}, false);

 document.addEventListener("dragstart", function( event ) {//The dragging of the element
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
}, false);


document.addEventListener("dragend", function( event ) {//When the element is already dragged.
    // reset the transparency
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {// Prevents default to allow drop
    // prevent default to allow drop
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function( event ) {// the hover zone of the target
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "dragP" ) {
        event.target.style.background = "#999";

    }

}, false);

document.addEventListener("dragleave", function( event ) {//When the drop already happens
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.className == "dragP" ) {
        event.target.style.background = "";

    }

}, false);

document.addEventListener("drop", function( event ) {//Remove the
    // prevent default action (open as link for some elements)
    event.preventDefault();
    if(event.target.lastChild != dragged){
         while (event.target.hasChildNodes()) {
           event.target.removeChild(event.target.lastChild);

        }
        }
    // move dragged elem to the selected drop target
    if ( event.target.className == "dragP" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );

    }
    var bar = document.getElementById("progressBar");
    var width=0;
    var counter=0;
    var id = setInterval(frame, 20);

    function frame(){

      width+=10;
      if(  width != counter && width%10 === 0   ){
        clearInterval(id);
      }
      counter = width;
      bar.style.width = width + "%";
      document.getElementById("progressText").innerHTML = width + "%";
    }

}, false);
//
// function filterFunction(){
//     var input, filter, ul, div, a, i;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("mainUL");
//     div = ul.getElementsByTagName('div');
//
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < div.length; i++) {
//         a = div[i].getElementsByClassName("dragLi")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             div[i].style.display = "";
//         } else {
//             div[i].style.display = "none";
//         }
//     }
// }
