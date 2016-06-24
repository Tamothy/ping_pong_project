//Business Logic (back-end)
var pingPongNumber = function(y) {
  if ( y < 3) {
    return true;
  } else {
    return "Please enter a number!";
  }
};
//User Interface (front-end)
$(document).ready(function () {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var num = $("input#number").val();
    var outcomes = pingPongNumber(num);
    $(".results").text(outcomes);
    $("#reveal").show();
  });
});
