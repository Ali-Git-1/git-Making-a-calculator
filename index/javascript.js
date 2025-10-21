let firstNumber = "";
let secondNumber = "";
let operation = null;

function appendNumber(num) {
  let display = document.getElementById("display");
  if (!operation) {
    firstNumber += num;
    display.innerHTML = firstNumber;
  } else {
    secondNumber += num;
    display.innerHTML = secondNumber;
  }
}
function setOperation(op) {
  if (firstNumber == "") return;
  operation = op;
  document.getElementById("display").innerHTML = operation;
}
function calculate() {
  if (firstNumber == "" || secondNumber == "" || !operation) return;
  let result = 0;
  let num1 = parseFloat(firstNumber);
  let num2 = parseFloat(secondNumber);
  if (operation == "+") {
    result = num1 + num2;
  } else if (operation == "-") {
    result = num1 - num2;
  } else if (operation == "/") {
    result = num1 / num2;
  } else if (operation == "*") {
    result = num1 * num2;
  }
  document.getElementById("display").innerHTML = result;
  firstNumber = result.toString();
  secondNumber = "";
  operation = null;
}
function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  operation = null;
  document.getElementById("display").innerHTML = 0;
}
