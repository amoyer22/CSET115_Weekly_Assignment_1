const { countReset } = require("console");
const { userInfo } = require("os");
const prompt = require(`prompt-sync`)();
let result ;
let num1 = Number(prompt("Choose first number"));
let num2 = Number(prompt("choose second number"));
calculator();

function calculator() {
  operator = (prompt("What do you want to do?  '+', '-', '/', '*'"));
  result = mathy(operator)
  console.log(result);
}
function mathy(operator) {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
  }
  return result;
}
