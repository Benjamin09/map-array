$(document).ready(function() {
  $("#favorite").submit(function(event) {
    var firstName =$("#firstName").val();
    console.log(firstName);

    var born =$("#born").val();
    console.log(born);

    var color =$("#color").val();
    console.log(color);

    var country =$("#country").val();
    console.log(country);

    var food =$("#food").val();
    console.log(food);

    var drink =$("#drink").val();
    console.log(drink);

    var result = [$("#firstName").val(),$("#born").val(), $("#color").val(), $("#country").val(), $("#food").val(), $("#drink").val()]

    var newArray =[result[1], result[0], result[2]];
    //newArray = ["slovakia", "katie", "black"]
    //newArray = ["slovakia", "katie", "black", "katie", "slovakia", "black", "country", "food"]
    console.log(newArray);

    newArray.push(result[0], result[4]);

    console.log(newArray);

    $("#result").append("<li>" + result[0] +"</li>");
    $("#result").append("<li>" + result[1] +"</li>");
    $("#result").append("<li>" + result[2] +"</li>");
    $("#result").append("<li>" + result[3] +"</li>");
    $("#result").append("<li>" + result[4] +"</li>");
    $("#result").append("<li>" + result[5] +"</li>");

    $("#result").append("<li>" + result[1] + " " + result[2] +"</li>");
    $("#result").append("<li>" + newArray +"</li>");




  event.preventDefault();
  });
});
