// Addition

const add = function (num1, num2) {
  return num1 + num2;
};

// Subtraction

var subtract = function (num1, num2) {
  return num1 - num2;
};

// Multiplying

var multiply = function (num1, num2) {
  return num1 * num2;
};

// Division

var divide = function (num1, num2) {
  return num1 / num2;
};

var number1 = Number(prompt("What's first number?")); // Changes from string to number

var number2 = Number(prompt("What's second number?"));

var operator = prompt("What's your operator?");

var checkOperator = function (operator, number1, number2) {
  if (operator == "+") {
    return add(number1, number2);
  } else if (operator == "-") {
    subtract(number1, number2);
  } else if (operator == "*") {
    multiply(number1, number2);
  } else if (operator == "/") {
    divide(number1, number2);
  } else {
    alert("You didnt put a valid operator");
  }
};

console.log(
  `${number1} ${operator} ${number2} = ${checkOperator(
    operator,
    number1,
    number2
  )}`
);
