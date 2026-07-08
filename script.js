const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultShow = false;

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener("click", function () {
        const value = button.textContent;

        if (button.classList.contains("numbers")) {
            handleNumber(value);
        } else if (button.classList.contains("operations")) {
            handleOperation(value);
        } else if (button.classList.contains("equals")) {
            handleEquales();
        }
    });
}


function handleNumber(value) {
    if (resultShow) {
        screen.value = "";
        resultShow = false;
    }

    screen.value += value

    if (operator != "") {
        secondNumber += value;
    }
}

function clearCalculator() {
        screen.value = "";
        firstNumber = "";
        secondNumber = "";
        operator = "";
}

function handleOperation(value) {
    if (value === "C") {
        clearCalculator();
        return;
    }

    if (screen.value === "") {
        return;
    }

    if (operator !== "") {
        return;
    }

    firstNumber = screen.value;
    operator = value;
    screen.value += value;
    resultShow = false;
}

function calculate(numb1, numb2, operator) {
    switch (operator){
        case "+":
            return numb1 + numb2;
        case "-":
            return numb1 - numb2;
        case "*":
            return numb1 * numb2;
        case "/":
            if(numb2 === 0){
                return "Error";
            }
            return numb1 / numb2;
        default:
            return "Error";
    }
}

function handleEquales(){
    if (firstNumber === "" || operator === "" || secondNumber === "") {
        return;
    }

    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    const result = calculate(num1, num2, operator);

    screen.value = result;

    firstNumber = "";
    secondNumber = "";
    operator = "";
    resultShow = true;
}

















