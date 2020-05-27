function replace(hide0, hide1, hide2, show) {
  document.getElementById(hide0).style.display= "none";
  document.getElementById(hide1).style.display= "none";
  document.getElementById(hide2).style.display= "none";
  document.getElementById(show).style.display= "block";
}

var modal = document.getElementById("form-modal");
var btn = document.getElementById("modal-btn");

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}