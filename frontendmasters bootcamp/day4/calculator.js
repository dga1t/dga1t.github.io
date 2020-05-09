let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
const screen = document.querySelector(".screen");

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        // this is not a number
        handleSymbol(value);
    } else {
        // this is a number
        handleNumber(value);
    }
    rerender();
}

function handleSymbol(value){
    
    // its more convinient to use 'switch' instead of 'if-else' here
    // if (symbol === 'C') {
    //     buffer = '0';
    //     runningTotal = 0;
    // }

    switch (value) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator === null) {
                // need two numbers to do math
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = +runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '×':
        case '-':
        case '+':
        case '÷':
            handleMath(value);
            break;
    }
}

function handleMath (value) {
    if (buffer === "0") {
        // do nothing
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;

    buffer = '0';
}

function flushOperation(intBuffer) {

    // also possible to do using switch like in handleSymbol function

    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
} 

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

function rerender() {
    screen.innerText = buffer;
}

function init() {
    document
        .querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            buttonClick(event.target.innerText);
        });
}

init();