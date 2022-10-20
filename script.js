// DOKUM
var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// COLLAPSIBLE GROUP buat info tiap Universitas
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// UNIVERSITAS
function clickFunction(content){
  var expandUniv = document.getElementById("expandedUniv");

  // use the same src in the expanded univ as the button being clicked
  expandUniv.src = content.dataset.source;
}
