const makeFixedRandomNumberGenerator = require('./make-fixed-random-generator')

test('should have a function getNumber', () => {
    const fixedRandomNumberGenerator = makeFixedRandomNumberGenerator()
    const result = typeof fixedRandomNumberGenerator.getNumber
    expect(result).toBe('function')
})

test('getNumber function should return the input number', () => {
    const inputNumber = 10
    const fixedRandomNumberGenerator = makeFixedRandomNumberGenerator(inputNumber)
    const result = fixedRandomNumberGenerator.getNumber()
    expect(result).toBe(inputNumber)
})