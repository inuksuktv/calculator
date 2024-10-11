const script = require('./script')

describe('add', () => {
    test('adds 0 and 0', () => {
        expect(script.add(0, 0)).toBe(0);
    })

    test('adds 2 and 2', () => {
        expect(script.add(2, 2)).toBe(4);
    })
})

describe('subtract', () => {
    test('subtracts numbers', () => {
        expect(script.subtract(10, 4)).toBe(6);
    })

    test('subtracts negative numbers', () => {
        expect(script.subtract(-10, -4)).toBe(-6);
    })

    test('subtracts numbers of mixed sign', () => {
        expect(script.subtract(-8, 7)).toBe(-15);
    })
})

describe('multiply', () => {
    test('multiplies by zero', () => {
        expect(script.multiply(2, 0)).toBe(0);
    })

    test('multiplies negative numbers', () => {
        expect(script.multiply(-1, -4)).toBe(4);
    })

    test('multiples numbers of mixed sign', () => {
        expect(script.multiply(2, -3)).toBe(-6);
    })
})

describe('divide', () => {
    test('divides zero', () => {
        expect(script.divide(0, 1)).toBe(0);
    })

    test('divides negative numbers', () => {
        expect(script.divide(-9, -3)).toBe(3);
    })

    test('divides numbers of mixed sign', () => {
        expect(script.divide(-4, 2)).toBe(-2);
    })

    test('throws error when dividing by zero', () => {
        expect(() => script.divide(1, 0)).toThrow("Division by zero");
    })
})

describe('operate', () => {
    test('calls the add operator', () => {
        expect(script.operate(1, 1, script.add)).toBe(2);
    })

    test('calls the subtract operator', () => {
        expect(script.operate(6, 3, script.subtract)).toBe(3);
    })

    test('calls the multiply operator', () => {
        expect(script.operate(2, -4, script.multiply)).toBe(-8);
    })
    test('calls the divide operator', () => {
        expect(script.operate(-8, 4, script.divide)).toBe(-2);
    })
})