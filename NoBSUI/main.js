/* WASSSUPPP, figured this shit out! 
*  Make it better now.
*/

// Global Vars
var panes = document.getElementsByClassName("pane");
// var paneItems = document.getElementsByClassName("pane-item");

// This will go in the adding new semester ;)
makeAddClassListeners(panes.length);

/* Takes a length of the panes collection from the global var
*  and assigns a new EventListener to every pane.
*/
function makeAddClassListeners(panesLength) {
	var getPaneItem;
	for (var i = 0; i < panesLength; i++) {
		getPaneItem = panes[i].lastChild.previousSibling;
		getPaneItem.addEventListener("click", function() {
			addClasses(this, this.parentNode);
		});
	}

}

/* Takes current pane-item and adds it as an actual class.
*  By changing the innerHTML and incrementing the id,
*  we add it to the parent of that pane-item which is the
*  correct pane. Sexy
*/
function addClasses(node, parent) {
    var clone = node.cloneNode(true);
    var paneLength = parent.getElementsByTagName('div').length;
    clone.className = 'pane-item added gray-bot-border';
    clone.innerHTML = '<p>3 Units : CS310 Data Structures</p>'
    clone.setAttribute('id', 'class' + (paneLength - 1));
    parent.insertBefore(clone, parent.childNodes[paneLength]);
}

// // Don't really need this anymore. Old Method
// function getId(ele, num) {
// 	if (ele[num].id === "")
// 		console.log("The element you were trying to get does not have an id.")
// 	return ele[num].id;
// }