// Backend
var list = [];

function replaceNumbers(input) {

  for (var i = 1; i <= input; i++) {

    if (i % 15 === 0) {
      list.push("ping-pong")
    } else if (i % 3 === 0) {
        list.push("ping")
    } else if (i % 5 === 0) {
        list.push("pong")
    } else {
        list.push(i)
    }
  }
}

// Frontend
$(document).ready(function() {
  $("form").submit(function(event){

    event.preventDefault();
    inputNumber = parseInt($("#inputNumber").val());
    replaceNumbers(inputNumber);
    
    list.forEach(function(list) {
    $("ul#list").append("<li>" + list + "</li>");
    // $("#result").text(outputArray.join("").toString());
    });
  });
});
