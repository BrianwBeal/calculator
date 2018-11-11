$(document).ready(() => {

  $("#calculator").submit(() => {

    $("#showRequest>span").empty();
    $("#showResult").empty();

    let firstValue = parseInt($("input#first").val());
    let operatorValue = $("#operator").val();
    let secondValue = parseInt($("input#second").val());
    let resultValue = 0;

    if (operatorValue === "add") {
      resultValue = (firstValue + secondValue);
      $("#showOperatorValue").append(operatorValue);
      $("#showFirstValue").append(firstValue);
      $("#etc").append("and");
      $("#showSecondValue").append(secondValue);

    } else if (operatorValue === "subtract") {
      resultValue = (firstValue - secondValue);
      $("#showOperatorValue").append(operatorValue);
      $("#showFirstValue").append(secondValue);
      $("#etc").append("from");
      $("#showSecondValue").append(firstValue);

    } else if (operatorValue === "multiply") {
      resultValue = (firstValue * secondValue);
      $("#showOperatorValue").append(operatorValue);
      $("#showFirstValue").append(firstValue);
      $("#etc").append("by");
      $("#showSecondValue").append(secondValue);

    } else if (operatorValue === "divide") {
      resultValue = (firstValue / secondValue);
      $("#showOperatorValue").append(operatorValue);
      $("#showFirstValue").append(firstValue);
      $("#etc").append("by");
      $("#showSecondValue").append(secondValue);

    }

    $("#showResult").append(resultValue);

    event.preventDefault();
  });
});
