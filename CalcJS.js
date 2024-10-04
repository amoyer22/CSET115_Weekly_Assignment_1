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
let radic = document.getElementById("radic");
let sqr = document.getElementById("sqr");
let dot = document.getElementById("dot");
prenumber.style.color = "hsl(0,0%,80%)";
let clicked = false;
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
    operator = op;
    switch (operator) {
      case "+":
      case "-":
      case "÷":
      case "*":
        prenumber.innerHTML = firstNumber.join("") + " " + operator;
        split.appendChild(prenumber);
        numberinp.innerHTML = "";
        clicked = true;
        break;
    }
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
dot.addEventListener("click", function () {
    numberButtonClick(".");
  });
clearbtn.addEventListener("click", function () {
  firstNumber.splice(0);
  secondNumber.splice(0);
  clicked = false;
  numberinp.innerHTML = firstNumber;
  prenumber.innerHTML = secondNumber;
});
radic.addEventListener("click", function () {
  let num1 = Number(firstNumber.join(""));
  switch (true) {
    case num1 >= 0:
      let sqrtresult = Math.sqrt(num1);
      prenumber.innerHTML =
        "√(" + firstNumber.join("") + ") = ";
      split.appendChild(prenumber);
      numberinp.innerHTML = sqrtresult.toString();
      firstNumber = [sqrtresult.toString()];
      secondNumber = [];
      clicked = false;
      break;
    default:
        numberinp.innerHTML = "no";
  }
});
sqr.addEventListener("click", function () {
    let num1 = Number(firstNumber.join("")); 
    switch(true){
        case num1 >=0:
            let sqrsum = num1 * num1;
            
      prenumber.innerHTML =
        "sqr (" + firstNumber.join("") + ") = ";
      split.appendChild(prenumber);
      numberinp.innerHTML = sqrsum.toString();
      firstNumber = [sqrsum.toString()];
      secondNumber = [];
      clicked - false;
      break;
      default:
        numberinp.innerHTML = "no";
        break;
    }
  });
equalbtn.addEventListener("click", function () {
  let num1 = Number(firstNumber.join(""));
  let num2 = Number(secondNumber.join(""));
  let sum;
  switch (operator) {
    case "+":
      sum = num1 + num2;
      break;
    case "-":
      sum = num1 - num2;
      break;
    case "*":
      sum = num1 * num2;
      break;
    case "÷":
      sum = num1 / num2;
      break;
    default:
      sum = "error";
  }
  prenumber.innerHTML =
  num1 + " " + operator + " " + num2 + " " +"=";
  numberinp.innerHTML = sum.toString();
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
if(
    deletebtn.addEventListener("click", function(){
        firstNumber.join(``);
        firstNumber = firstNumber.splice(0, firstNumber.length - 1);
        numberinp.innerHTML = firstNumber;
    })
);
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
