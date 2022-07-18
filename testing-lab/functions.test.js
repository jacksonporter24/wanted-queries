let functionsTest = require('./functions')

test('this should return 2', () => {
    expect(functionsTest.returnTwo()).toBe(2)
}),

test('This should say Hello, James.', () => {
    expect(functionsTest.greeting('Jack')).toBe('Hello Jack.')
}),

test('This function should add two numbers together', () => {
    expect(functionsTest.add(1, 2)).toBe(3)
    expect(functionsTest.add(5, 9)).toBe(14)
})

//Describing all the above

describe('Describing Math Problems', () => {

    test("Multiply", () => {
        expect(myFunctions.multiply(2, 10)).toBe(20)
    }),

    test("Divide", () => {
        expect(myFunctions.divide(80, 10)).toBe(8)
    }),

    test("Subtract", () => {
        expect(myFunctions.subtract(77, 7)).toBe(70)
    })
})
