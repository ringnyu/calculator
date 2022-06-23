let num1 = parseInt(prompt("Please enter first number: "));
let operator = prompt(
  "What operation do you want to carryout?: " +
    "\n" +
    "+ for Addition" +
    "\n" +
    "- for Subtration" +
    "\n" +
    "* for Multiplication" +
    "\n" +
    "/ for Division"
);
let num2 = parseInt(prompt("Please enter second number: "));
let results = 0;

switch (operator) {
  case "+":
    results = num1 + num2;
    alert(num1 + " " + operator + " " + num2 +" " + " = " + results);
    break;
  case "-":
    results = num1 - num2;
    alert(num1 + " " + operator + " " + num2 +" " + " = " + results);
    break;
  case "*":
    results = num1 * num2;
    alert(num1 + " " + operator + " " + num2 +" " + " = " + results);
    break;
  case "/":
    results = num1 / num2;
    alert(num1 + " " + operator + " " + num2 +" " + " = " + results);
    break;

  default:
        alert("wrong Inputs")
    break;
}
