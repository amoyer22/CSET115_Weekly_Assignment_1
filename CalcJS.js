let clearbtn = document.getElementById("clear");
let deletebtn = document.getElementById("delete");
let exponent = document.getElementById("exponent");
let divide = document.getElementById("divide");
let sevenbtn = document.getElementById("7");
let eightbtn = document.getElementById("8");
let ninebtn = document.getElementById("9");
let multiply = document.getElementById("multiply");
let fourbtn = document.getElementById("4");
let fivebtn = document.getElementById("5");
let sixbtn = document.getElementById("6");
let minusbtn = document.getElementById("minus");
let onebtn = document.getElementById("1");
let twobtn = document.getElementById("2");
let threebtn = document.getElementById("3");
let plusbtn = document.getElementById("plus");
let zerobtn = document.getElementById("0");
let equalbtn = document.getElementById("equal");
let dotbtn = document.getElementById("dot");
let split = document.getElementById("split");
let numberinp = document.getElementById("number");
let prenumber = document.createElement("p");
prenumber.style.color = "hsl(0,0%,80%)";
var clicked = false;
var firstNumber = [];
var secondNumber = [];
function numberButtonClick(number) {
  if (!clicked) {
    firstNumber.push(number);
    numberinp.innerHTML = firstNumber.join("");
  } else if (clicked) {
    secondNumber.push(number);
    numberinp.innerHTML = secondNumber.join("");
  }
}
function operatorButtonClick(op) {
  if (!clicked) {

    operator = op
    prenumber.innerHTML = firstNumber.join("") + " " + operator;
    split.appendChild(prenumber);
    numberinp.innerHTML = "";
    clicked = true;
  }
}

onebtn.addEventListener("click", function () {
  numberButtonClick("1");
});

twobtn.addEventListener("click", function () {
  numberButtonClick("2");
});

threebtn.addEventListener("click", function () {
  numberButtonClick("3");
});

fourbtn.addEventListener("click", function () {
  numberButtonClick("4");
});

fivebtn.addEventListener("click", function () {
  numberButtonClick("5");
});

sixbtn.addEventListener("click", function () {
  numberButtonClick("6");
});

sevenbtn.addEventListener("click", function () {
  numberButtonClick("7");
});

eightbtn.addEventListener("click", function () {
  numberButtonClick("8");
});

ninebtn.addEventListener("click", function () {
  numberButtonClick("9");
});
clearbtn.addEventListener("click", function () {
  firstNumber.splice(`...`);
  secondNumber.splice(`...`);
  clicked = false;
  numberinp.innerHTML = firstNumber;
  prenumber.innerHTML = secondNumber;
});
equalbtn.addEventListener("click", function () {
  let num1 = Number(firstNumber.join(""));
  let num2 = Number(secondNumber.join(""));
  let sum = num1 + num2;
  numberinp.innerHTML === sum;
});
plusbtn.addEventListener("click", function () {
  operatorButtonClick("+");
});
minusbtn.addEventListener("click", function () {
  operatorButtonClick("-");
});
multiply.addEventListener("click", function () {
  operatorButtonClick("*");
});
divide.addEventListener("click", function () {
  operatorButtonClick("÷");
});

// calculator();

// function calculator() {
//   operator = (prompt("What do you want to do?  '+', '-', '/', '*'"));
//   result = mathy(operator)
//   console.log(result);
// }
// function mathy(operator) {
//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//   }
//   return result;
// }
