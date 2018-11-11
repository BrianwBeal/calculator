$(document).ready(() => {

  $("#calculator").submit(() => {

    $("#showResult").empty();

    let firstValue = parseInt($("input#first").val());
    let operatorValue = $("#operator").val();
    let secondValue = parseInt($("input#second").val());
    let resultValue = 0;

    if (operatorValue === "add") {
      resultValue = (firstValue + secondValue);
    } else if (operatorValue === "subtract") {
      resultValue = (firstValue - secondValue);
    } else if (operatorValue === "multiply") {
      resultValue = (firstValue * secondValue);
    } else if (operatorValue === "divide") {
      resultValue = (firstValue / secondValue);
    }

    $("#showResult").append(resultValue);

    event.preventDefault();
  });
});
