function replace(hide0, hide1, hide2, show) {
  document.getElementById(hide0).style.display= "none";
  document.getElementById(hide1).style.display= "none";
  document.getElementById(hide2).style.display= "none";
  document.getElementById(show).style.display= "block";
}

// Get the modal
var modal = document.getElementById("form-modal");

// Get the button that opens the modal
var btn = document.getElementById("modal-btn");


// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}