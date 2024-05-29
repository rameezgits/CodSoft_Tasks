// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = evaluate(previousInput, currentInput, operator);
                    operator = '';
                    previousInput = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (previousInput) {
                        previousInput = evaluate(previousInput, currentInput, operator);
                    } else {
                        previousInput = currentInput;
                    }
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
            }

            updateDisplay();
        });
    });

    clearButton.addEventListener('click', () => {
        currentInput = '';
        operator = '';
        previousInput = '';
        updateDisplay();
    });

    function evaluate(val1, val2, op) {
        const num1 = parseFloat(val1);
        const num2 = parseFloat(val2);

        if (op === '+') return (num1 + num2).toString();
        if (op === '-') return (num1 - num2).toString();
        if (op === '*') return (num1 * num2).toString();
        if (op === '/') return (num1 / num2).toString();
    }

    function updateDisplay() {
        display.innerText = currentInput || previousInput || '0';
    }

    updateDisplay();
});
