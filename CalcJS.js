let clearbtn = document.getElementById("clear");
let deletebtn = document.getElementById("delete");
let exponent = document.getElementById("exponent");
let divide = document.getElementById("divide");
let sevenbtn = document.getElementById("7")
let eightbtn = document.getElementById("8")
let ninebtn = document.getElementById("9")
let multiply =document.getElementById("multiply")
let fourbtn =document.getElementById("4")
let fivebtn = document.getElementById("5")
let sixbtn = document.getElementById("6")
let minusbtn = document.getElementById("minus")
let onebtn = document.getElementById("1")
let twobtn = document.getElementById("2")
let threebtn = document.getElementById("3")
let plusbtn = document.getElementById("plus")
let zerobtn = document.getElementById("0")
let dotbtn = document.getElementById("dot")
let equalbtn = document.getElementById("equal")
let numberinp = document.getElementById("number")
var numberary = [ ]

    onebtn.addEventListener("click",function(){
        numberary.push ("1")
        numberary = numberary.join(" ")
        numberinp.innerHTML = numberary;
    })
    twobtn.addEventListener("click",function(){
        numberinp.innerHTML = "2";
    })
calculator();

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
