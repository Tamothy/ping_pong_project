//Business Logic (back-end)
var pingPongNumber = function(y) {
    if (y % 15 === 0) {
      return "pingpong";
    } else if (y % 3 === 0) {
       return "ping";
    } else if (y % 5 === 0) {
       return "pong";
    } else {
      return y;
  }
};
//User Interface (front-end)
$(document).ready(function () {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var num = $("input#number").val();
    var outcome = pingPongNumber(num);
    $(".results").append("<li>" + outcome + "</li>");
    $("#reveal").show();
  });
});
