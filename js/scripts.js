var list = [];

function replaceNumbers(input) {

  for (var i = 1; i <= input; i++) {

    if (i % 15 === 0) {

      list.push("ping-pong")
      // console.log(list);

    } else if (i % 3 === 0) {

        list.push("ping")
        // console.log(list);

    } else if (i % 5 === 0) {
        list.push("pong")
        // console.log(list);

    } else   {
        list.push(i)
    }
  }
  console.log(list);
}

function appendList(list){

}

// Frontend
$(document).ready(function() {
  $("form").submit(function(event){
    inputNumber = parseInt($("#inputNumber").val());
    replaceNumbers(inputNumber);
    $("ul#list").append("<li>" + list + "</li>");
    // $("#result").text(outputArray.join("").toString());
    event.preventDefault();

  });
});
