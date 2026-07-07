const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let operator = "";

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener("click", function () {

        const value = button.textContent;

        if (button.classList.contains("numbers")) {
            screen.value += value
            if(operator != ""){
                secondNumber += value;
            }
        }


        if (button.classList.contains("operations")) {

            if (value === "C") {
                screen.value = "";
                firstNumber = "";
                secondNumber = "";
                operator = "";
                return;
            }
            if(screen.value === ""){
                return;
            }

            firstNumber = screen.value;
            operator = value;
            screen.value += value;
           
        }


        if (button.classList.contains("equals")) {
            if (firstNumber === "" || operator === "" || secondNumber.value === "") {
                return;
            }
            
            const numb1 = Number(firstNumber);
            const numb2 = Number(secondNumber);
            let result

            if(operator === "+"){
                result = numb1 + numb2;
            }
            screen.value = result;
        }
    });
}