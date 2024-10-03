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
let prenumber = document.createElement("p")
prenumber.style.color = "hsl(0,0%,80%)"
var firstNumber = [];
var secondNumber = [];
function numberButtonClick(number){
    firstNumber.push(number);
    numberinp.innerHTML = firstNumber.join("");
}

onebtn.addEventListener("click", function () {
numberButtonClick("1")
  })

  twobtn.addEventListener("click", function () {
    numberButtonClick('2')
  })

  threebtn.addEventListener("click", function () {
    numberButtonClick('3')
  })

  fourbtn.addEventListener("click", function () {
    numberButtonClick("4")
  })

  fivebtn.addEventListener("click", function () {
    numberButtonClick("5")
  })

  sixbtn.addEventListener("click", function () {
    numberButtonClick("6")
  })

  sevenbtn.addEventListener("click", function () {
    numberButtonClick("7")
  })

  eightbtn.addEventListener("click", function () {
    numberButtonClick("8")
  })

  ninebtn.addEventListener("click", function () {
    numberButtonClick("9")
  })
if(
  clearbtn.addEventListener("click", function () {
    firstNumber.splice(`...`);
    numberinp.innerHTML = firstNumber;
  }));
else if(
    deletebtn.addEventListener("click", function(){
        firstNumber.join(``);
        firstNumber = firstNumber.splice(0, firstNumber.length - 1);
        numberinp.innerHTML = firstNumber;
        numberinp.innerHTML.trim(",");
    })
);
else if(
  plusbtn.addEventListener("click", function () {
    firstNumber.push("+");
    firstNumber = new Array(firstNumber.join(""));
    prenumber.innerHTML = firstNumber;
    split.appendChild(prenumber);
    secondNumber
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
