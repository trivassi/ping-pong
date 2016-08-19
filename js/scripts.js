

function convert(input) {

  for (var i = 1; i <= input; i++) {

    if (i % 15 === 0) {
            console.log("ping-pong");
    }
    else if (i % 3 === 0) {
      console.log("ping");
    } else if (i % 5 === 0) {
      console.log("pong");

    }

    else   {

      console.log(i);

    }
  }
}

// Frontend
$(document).ready(function() {
  $("form").submit(function(event){
    inputNumber = parseInt($("#inputNumber").val());
    convert(inputNumber);
    // $("#result").text(outputArray.join("").toString());
    event.preventDefault();

  });
});
