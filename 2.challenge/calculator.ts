/**
 * Let's make a calculator
 */

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(command: Command, a: number, b: number): number {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw new Error("unknown error");
  }
}

console.log(calculate("add", 1, 3)); //4
console.log(calculate("substract", 1, 3)); //-2
// console.log(calculate("substsssract", 1, 3)); //-2
