// script.js
let display = document.getElementById('display');
let expression = '';

function addToDisplay(value) {
  if (expression === '0' && value !== '.') {
    expression = '';
  }
  expression += value;
  display.innerText = expression;
}

function clearDisplay() {
  expression = '';
  display.innerText = '0';
}

function calculate() {
  try {
    let result = eval(expression);
    display.innerText = result;
    expression = '';
  } catch (error) {
    display.innerText = 'Error';
  }
}

function addPercentage() {
  let currentValue = parseFloat(expression);
  let percentageValue = currentValue / 100;
  expression = percentageValue.toString();
  display.innerText = expression;
}

function backspace() {
    expression = expression.slice(0, -1);
    display.innerText = expression;
  }