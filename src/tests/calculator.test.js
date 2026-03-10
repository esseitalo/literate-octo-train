const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator', () => {
  // addition tests
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('adds zero to a number', () => {
      expect(add(7, 0)).toBe(7);
    });
  });

  // subtraction tests
  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('subtracts a larger number from a smaller one', () => {
      expect(subtract(3, 7)).toBe(-4);
    });

    test('subtracts zero', () => {
      expect(subtract(5, 0)).toBe(5);
    });
  });

  // multiplication tests
  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies two negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });

    test('multiplies a positive and a negative number', () => {
      expect(multiply(3, -4)).toBe(-12);
    });
  });

  // division tests
  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('divides resulting in a decimal', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });
  });

  // modulo tests
  describe('modulo', () => {
    test('returns the remainder of two positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('modulo returns zero when evenly divisible', () => {
      expect(modulo(9, 3)).toBe(0);
    });

    test('modulo with a larger divisor returns the dividend', () => {
      expect(modulo(5, 7)).toBe(5);
    });

    test('throws an error when modulo divisor is zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  // power (exponentiation) tests
  describe('power', () => {
    test('raises a number to a positive integer exponent', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('power of zero exponent returns 1', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('power with exponent 1 returns the base', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('power with fractional exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('power of a negative base with an even exponent returns positive', () => {
      expect(power(-3, 2)).toBe(9);
    });
  });

  // square root tests
  describe('squareRoot', () => {
    test('returns the square root of a perfect square', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('returns the square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('returns the square root of a non-perfect square', () => {
      expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
    });

    test('throws an error for the square root of a negative number', () => {
      expect(() => squareRoot(-9)).toThrow('Cannot calculate square root of a negative number');
    });
  });
});
