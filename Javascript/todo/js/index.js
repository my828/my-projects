
/* Create a "close" button and append it to each list item
//.getElementsByTagName --> get all elements with specified tag name. 
var nodeList = document.getElementsByTagName("li")

for (var i = 0; i < nodeList.length;i++) {
    var span = document.createElement("span");
                        // "\u00D7" for multiple sign. 
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
} 
*/

let state = []
// Click on a close button to hide the current list item
//.getElementsByClassName --> get all elements with the specified class name.
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
} 

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
   
    // add close button
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  if (typeof(Storage) !== "undefined") {
    // Store
    let list = JSON.stringify(docuemtn.)
    // Retrieve
    console.log(localStorage.getItem("lastname"));
} else {
    console.log("Sorry, your browser does not support Web Storage...");
}
  //add time
  var date = new Date();
  document.getElementById("datetime").innerHTML = date.toLocaleDateString();

