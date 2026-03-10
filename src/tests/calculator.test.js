/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Tests cover all four basic arithmetic operations:
 *   - add      (+)
 *   - subtract (-)
 *   - multiply (×)
 *   - divide   (÷)
 *
 * Includes example operations from the reference image:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

// --- Addition (+) ---
describe("add", () => {
  // Example from image: 2 + 3 = 5
  test("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive integers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds two negative numbers", () => {
    expect(add(-5, -7)).toBe(-12);
  });

  test("adds floating-point numbers", () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });

  test("adding zero returns the same number", () => {
    expect(add(42, 0)).toBe(42);
  });
});

// --- Subtraction (-) ---
describe("subtract", () => {
  // Example from image: 10 - 4 = 6
  test("10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive integers", () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test("returns a negative result when subtrahend is larger", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts a negative number (equivalent to addition)", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracts floating-point numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test("subtracting zero returns the same number", () => {
    expect(subtract(99, 0)).toBe(99);
  });
});

// --- Multiplication (×) ---
describe("multiply", () => {
  // Example from image: 45 * 2 = 90
  test("45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive integers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplying by zero returns zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplying by one returns the same number", () => {
    expect(multiply(55, 1)).toBe(55);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  test("multiplies two negative numbers to return a positive", () => {
    expect(multiply(-6, -7)).toBe(42);
  });

  test("multiplies floating-point numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// --- Division (÷) ---
describe("divide", () => {
  // Example from image: 20 / 5 = 4
  test("20 / 5 = 4", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive integers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("returns a decimal for non-even division", () => {
    expect(divide(10, 3)).toBeCloseTo(3.333);
  });

  test("divides a negative number by a positive", () => {
    expect(divide(-20, 4)).toBe(-5);
  });

  test("divides two negative numbers to return a positive", () => {
    expect(divide(-15, -3)).toBe(5);
  });

  test("dividing by one returns the same number", () => {
    expect(divide(77, 1)).toBe(77);
  });

  test("divides floating-point numbers", () => {
    expect(divide(7.5, 2.5)).toBeCloseTo(3.0);
  });

  // Edge case: division by zero
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed.");
  });
});

// --- Modulo (%) ---
describe("modulo", () => {
  test("10 % 3 = 1", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("modulo with 5 % 2 = 1 (from image)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test("works with negative dividend", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test("works with floating-point numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("throws an error when divisor is zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// --- Exponentiation (**) ---
describe("power", () => {
  test("2 ** 8 = 256", () => {
    expect(power(2, 8)).toBe(256);
  });

  test("power with 2 ^ 3 = 8 (from image)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("any number to the power of 0 is 1", () => {
    expect(power(99, 0)).toBe(1);
  });

  test("any number to the power of 1 is itself", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("handles negative exponent (returns fraction)", () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test("handles fractional exponent (square root)", () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });
});

// --- Square Root (√) ---
describe("squareRoot", () => {
  test("squareRoot(25) = 5", () => {
    expect(squareRoot(25)).toBe(5);
  });

  test("square root with √16 = 4 (from image)", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("squareRoot(0) = 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("squareRoot(2) is approximately 1.414", () => {
    expect(squareRoot(2)).toBeCloseTo(1.414);
  });

  test("squareRoot(1) = 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("throws an error for negative input", () => {
    expect(() => squareRoot(-9)).toThrow("Square root of a negative number is not allowed.");
  });
});
