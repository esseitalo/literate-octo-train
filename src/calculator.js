/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports four basic arithmetic operations:
 *   - addition       (+)  : add <a> <b>
 *   - subtraction    (-)  : subtract <a> <b>
 *   - multiplication (×)  : multiply <a> <b>
 *   - division       (÷)  : divide <a> <b>
 *   - modulo         (%)  : modulo <a> <b>
 *   - exponentiation (**) : power <base> <exponent>
 *   - square root    (√)  : squareRoot <n>
 *
 * Usage:
 *   node calculator.js <operation> <number1> [number2]
 *
 * Examples:
 *   node calculator.js add 3 5            → 8
 *   node calculator.js subtract 10 4      → 6
 *   node calculator.js multiply 3 7       → 21
 *   node calculator.js divide 20 4        → 5
 *   node calculator.js modulo 10 3        → 1
 *   node calculator.js power 2 8          → 256
 *   node calculator.js squareRoot 25      → 5
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

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Error: Modulo by zero is not allowed.");
  }
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Error: Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// CLI entry point — only runs when executed directly (not when required as a module)
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;
  const singleArgOps = ["squareroot"];

  if (!operation || arg1 === undefined) {
    console.error("Usage: node calculator.js <operation> <number1> [number2]");
    console.error("Operations: add, subtract, multiply, divide, modulo, power, squareRoot");
    process.exit(1);
  }

  const a = parseFloat(arg1);
  if (isNaN(a)) {
    console.error("Error: number1 must be a valid number.");
    process.exit(1);
  }

  let b;
  if (!singleArgOps.includes(operation.toLowerCase())) {
    if (arg2 === undefined) {
      console.error(`Usage: node calculator.js ${operation} <number1> <number2>`);
      process.exit(1);
    }
    b = parseFloat(arg2);
    if (isNaN(b)) {
      console.error("Error: number2 must be a valid number.");
      process.exit(1);
    }
  }

  let result;
  try {
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
        result = divide(a, b);
        break;
      case "modulo":
        result = modulo(a, b);
        break;
      case "power":
        result = power(a, b);
        break;
      case "squareroot":
        result = squareRoot(a);
        break;
      default:
        console.error(`Unknown operation: "${operation}"`);
        console.error("Operations: add, subtract, multiply, divide, modulo, power, squareRoot");
        process.exit(1);
    }
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const label = operation.toLowerCase() === "squareroot" ? `squareRoot(${a})` : `${a} ${operation} ${b}`;
  console.log(`${label} = ${result}`);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
