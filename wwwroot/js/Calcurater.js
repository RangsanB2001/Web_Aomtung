let display = document.getElementById('display');
let expression = [];

function appendToDisplay(value) {
    expression.push(value);
    display.value += value;
}

function clearDisplay() {
    expression = [];
    display.value = '';
}

function calculate() {
    try {
        let result = eval(expression.join(''));
        display.value = result;
        expression = [result.toString()]; // Store result as the new expression
    } catch (error) {
        display.value = 'Error: ' + error.message;
        expression = [];
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key >= '0' && event.key <= '9') {
        appendToDisplay(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendToDisplay(event.key);
    } else if (event.key === '.' || event.key === ',') {
        if (!expression.includes('.')) {
            appendToDisplay('.');
        }
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Backspace') {
        expression.pop();
        display.value = display.value.slice(0, -1);
    }
});
