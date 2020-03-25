// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("#add").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    console.log(number1);
    var number2 = parseInt($("#num2").val());
    var result = add(number1, number2);
    $(".output").text(result);
    console.log(result);
  });
  $("#subtract").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = subtract(number1, number2);
    $(".output").text(result);
  });
  $("#multiply").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = multiply(number1, number2);
    $(".output").text(result);
  });
  $("#divide").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = divide(number1, number2);
    $(".output").text(result);
  });
});
