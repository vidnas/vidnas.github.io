$(document).ready(function () {
    $(".header").height($(window).height());
})

$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
});


function replace(hide0, show) {
  document.getElementById(hide0).style.display= "none";
  document.getElementById(show).style.display= "block";
}