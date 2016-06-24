//Business Logic
var pingPongNumber = function(num) {
  for (var index = 1; index <= num; index += 1) {
    if (index % 15 === 0) {
      $(".results").append("<li>" + "pingpong" + "</li>");
    } else if (index % 3 === 0) {
      $(".results").append("<li>" + "ping" + "</li>");
    } else if (index % 5 === 0) {
      $(".results").append("<li>" + "pong" + "</li>");
    } else {
      $(".results").append("<li>" + index + "</li>");
    }
  }
};
//User Interface
$(document).ready(function () {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var numberValue = $("input#number").val();
    pingPongNumber(numberValue);
    $("#reveal").show();
  });
});
