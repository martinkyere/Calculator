const calcDiscription = document.querySelector(".calcdiscription");
const currentResult = document.querySelector(".currentresult");
const addition = document.querySelector(".addition")
const userInput = document.querySelector(".user-input")
const subtraction = document.querySelector(".subtraction")
const division = document.querySelector(".division")
const multiplication = document.querySelector(".multiplication")


const result = 0;
let newResult = result;
let logEntries = [];


function outputResult (name, font){
    currentResult.textContent = name;
    calcDiscription.textContent = font;
}

// Gets user input from input field!
function userInputNumber() {
    return parseInt(userInput.value);
} 

// Generates and writes calculation log!
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calculationDiscription =`${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(newResult, calculationDiscription);

}

function writeToLog(
    operationIdentifier,
    previouseResult,
    operationNumber,
    result
    ) {
const logEntry={
    operation: operationIdentifier,
    prevResult: previouseResult,
    number: operationNumber,
    result: result
    }
    logEntries.push(logEntry);
    console.log(logEntries)
    }


function add (){
    const inputValue = userInputNumber();
    const userNumber = newResult;
    newResult += inputValue;
    createAndWriteOutput('+', userNumber, inputValue);
    writeToLog('ADD', userNumber, inputValue, result);
}

function subtract () {
    const inputValue = userInputNumber();
    const userNumber = newResult;
    newResult -= inputValue;
    createAndWriteOutput('-', userNumber, inputValue);
    writeToLog('SUBTRACT', userNumber, inputValue, result);
}

function multiply () {
    const inputValue = userInputNumber();
    const userNumber = newResult;
    newResult *= inputValue;
    createAndWriteOutput('*', userNumber, inputValue);
    writeToLog('MULTIPLY', userNumber, inputValue, result);
}

function divide () {
    const inputValue = userInputNumber();
    const userNumber = newResult;
    newResult /= inputValue;
    createAndWriteOutput('/', userNumber, inputValue);
    writeToLog('DIVIDE', userNumber, inputValue, result);
}


addition.addEventListener('click', add);
subtraction.addEventListener('click', subtract);
multiplication.addEventListener('click', multiply);
division.addEventListener('click', divide);

