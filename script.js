let firstNumber = 0;
let secondNumber = 0;
let selectedOperator = null;

function addDigit(digit) {
  if (document.getElementById("result").value === "0") {
    document.getElementById("result").value = digit;
  } else {
    document.getElementById("result").value += Number(digit);
  }
}

function operator(selectOperator) {
  selectedOperator = selectOperator;
  firstNumber = document.getElementById("result").value;
  secondNumber = 0;
  clearinput();
}

function clearinput() {
  document.getElementById("result").value = 0;
}

function calculate() {
  secondNumber = document.getElementById("result").value;
  switch (selectedOperator) {
    case "+":
      secondNumber = parseInt(firstNumber) + parseInt(secondNumber);
      break;
    case "-":
      secondNumber = parseInt(firstNumber) - parseInt(secondNumber);
      break;
    case "*":
      secondNumber = parseInt(firstNumber) * parseInt(secondNumber);
      break;
    case "/":
      secondNumber = parseInt(firstNumber) / parseInt(secondNumber);
      break;
  }
  document.getElementById("result").value = secondNumber;
  selectedOperator = "";
}

function resetAll() {
  firstNumber = 0;
  secondNumber = 0;
  selectedOperator = "";
  document.getElementById("result").value = "0";
}
