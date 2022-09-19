// Addition
function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
//Subtraction
function subtract(num1, num2) {
  let difference = num1 - num2;
  return difference;
}
//Multiplication
function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}
//Division
function divide(num1, num2) {
  let quotient = num1 / num2;
  return quotient;
}

function operators(operator, num1, num2) {
  if (operator == "*") {
    // if using * you are multiplying num1 and num 2
    alert(num1 + "*" + num2 + "=" + multiply(num1, num2));
  } else if (operator == "+") {
    // if using + you are adding num1 and num 2
    alert(num1 + "+" + num2 + "=" + add(num1, num2));
  } else if (operator == "/") {
    //if using / lets then alerts that you are dividing num 1 and 2
    alert(num1 + "/" + num2 + "=" + divide(num1, num2));
  } else if (operator == "-") {
    //if using - you are subtracting num 1 and 2
    alert(num1 + "-" + num2 + "=" + divide(num1, num2));
  }
}

let num1 = prompt("Choose your First Number");
let num2 = prompt("Now Choose your Second Number");
let operator = prompt("Choose your Operator");
operators(operator, num1, num2);
