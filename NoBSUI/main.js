function addclass(id) {
	var container = document.getElementsByClassName("pane");
	var addclass = container[id];
	var clone = addclass.cloneNode(true);
	clone.innerHTML = '<div id="'+ id +'" class="pane-item added"><p>3 Units : CS310 Data Structures</p></div>'
	var pane = document.getElementById("pane" + id);
	clone.id = id++;
	pane.insertBefore(clone, pane.childNodes[2]);
}