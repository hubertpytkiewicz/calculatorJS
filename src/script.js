console.log("Halo");

let display = document.querySelector(".calculator-display");
let keys = document.querySelector(".calculator-keys");

let firstNumber = null;
let secondNumber = null;
let currentOperation = null;

const checkInputCorrectness = (str) => {
  if (str) return true;
  else return false;
};

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const operation = key.classList.contains("operator") ? key.value : null;
    console.log(`${key.value}${operation ? operation : ""}`);

    if (!operation) {
      if (key.value === ".") {
        if (!display.value.includes(".")) {
          display.value += key.value;
        }
      } else if (key.value === "0") {
        if (!(display.value === "0")) {
          display.value += key.value;
        }
      } else {
        if ((display.value === "0" && key.value != ".") || !firstNumber) {
          display.value = key.value;
        } else {
          display.value += key.value;
        }
      }
    } else if (operation === "=") {
      secondNumber = parseFloat(display.value);
      console.log(
        `First number: ${firstNumber} Second number: ${secondNumber} Current operation: ${currentOperation}`
      );
      if (currentOperation === "+") {
        display.value = firstNumber + secondNumber;
      }
      if (currentOperation === "-") {
        display.value = firstNumber - secondNumber;
      }
      if (currentOperation === "*") {
        display.value = firstNumber * secondNumber;
      }
      if (currentOperation === "/") {
        display.value = firstNumber / secondNumber;
      }
      firstNumber = null;
      secondNumber = null;
      currentOperation = null;
    } else if (operation === "all-clear") {
      firstNumber = null;
      secondNumber = null;
      currentOperation = null;
      display.value = "0";
    } else {
      currentOperation = operation;
      if (!firstNumber) {
        firstNumber = parseFloat(display.value);
      } else {
        secondNumber = parseFloat(display.value);
      }
      display.value = "0";
    }
  }
});
