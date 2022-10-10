const makeFixedRandomNumberGenerator = require('./make-fixed-random-generator')


test('should have a function getNumber', () => {
    const fixedRandomNumberGenerator = makeFixedRandomNumberGenerator()
    const result = typeof fixedRandomNumberGenerator.getNumber
    expect(result).toBe('function')
})