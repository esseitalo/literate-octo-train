/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports four basic arithmetic operations:
 *   - addition       (+)  : add <a> <b>
 *   - subtraction    (-)  : subtract <a> <b>
 *   - multiplication (×)  : multiply <a> <b>
 *   - division       (÷)  : divide <a> <b>
 *
 * Usage:
 *   node calculator.js <operation> <number1> <number2>
 *
 * Examples:
 *   node calculator.js add 3 5        → 8
 *   node calculator.js subtract 10 4  → 6
 *   node calculator.js multiply 3 7   → 21
 *   node calculator.js divide 20 4    → 5
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Error: Division by zero is not allowed.");
  }
  return a / b;
}

// CLI entry point — only runs when executed directly (not when required as a module)
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  if (!operation || arg1 === undefined || arg2 === undefined) {
    console.error("Usage: node calculator.js <operation> <number1> <number2>");
    console.error("Operations: add, subtract, multiply, divide");
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = parseFloat(arg2);

  if (isNaN(a) || isNaN(b)) {
    console.error("Error: Both arguments must be valid numbers.");
    process.exit(1);
  }

  let result;
  switch (operation.toLowerCase()) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      try {
        result = divide(a, b);
      } catch (err) {
        console.error(err.message);
        process.exit(1);
      }
      break;
    default:
      console.error(`Unknown operation: "${operation}"`);
      console.error("Operations: add, subtract, multiply, divide");
      process.exit(1);
  }

  console.log(`${a} ${operation} ${b} = ${result}`);
}

module.exports = { add, subtract, multiply, divide };
