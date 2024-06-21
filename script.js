let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    operand1 = '';
    operand2 = '';
    operator = '';
}

function calculate() {
    let expression = display.value;
    let result = eval(expression);
    display.value = result;
}
