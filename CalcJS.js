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
let dotbtn = document.getElementById("dot");
let equalbtn = document.getElementById("equal");
let numberinp = document.getElementById("number");
var numberary = [];

if (
  onebtn.addEventListener("click", function () {
    numberary.push("1");
    numberary = new Array(numberary.join(""));
    numberinp.innerHTML = numberary;
  })
);
else if (
  twobtn.addEventListener("click", function () {
    numberary.push("2");
    numberary = new Array(numberary.join(""));
    numberinp.innerHTML = numberary;
  })
);
else if (
  threebtn.addEventListener("click", function () {
    numberary.push("3");
    numberary = new Array(numberary.join(""));
    numberinp.innerHTML = numberary;
  })
);
else if (
  fourbtn.addEventListener("click", function () {
    numberary.push("4");
    numberary = new Array(numberary.join(""));
    numberinp.innerHTML = numberary;
  })
);
else if (
  fivebtn.addEventListener("click", function () {
    numberary.push("5");
    numberary = new Array(numberary.join(""));
    numberinp.innerHTML = numberary;
  })
);
else if (
  sixbtn.addEventListener("click", function () {
    numberary.push("6");
    numberary = new Array(numberary.join(""));
    numberinp.innerHTML = numberary;
  })
);
else if (
  sevenbtn.addEventListener("click", function () {
    numberary.push("7");
    numberary = new Array(numberary.join(""));
    numberinp.innerHTML = numberary;
  })
);
else if (
  eightbtn.addEventListener("click", function () {
    numberary.push("8");
    numberary = new Array(numberary.join(""));
    numberinp.innerHTML = numberary;
  })
);
else if (
  ninebtn.addEventListener("click", function () {
    numberary.push("9");
    numberary = new Array(numberary.join(""));
    numberinp.innerHTML = numberary;
  })
);
else if (
    clearbtn.addEventListener("click", function () {
      numberary.splice(`...`);
      
      numberinp.innerHTML = numberary;
    })
  );
  else if (
    add.addEventListener("click", function () {
      numberary.push("+");
      numberary = new Array(numberary.join(""));
      numberinp.innerHTML = numberary;
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
