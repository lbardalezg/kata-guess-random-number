const makeFixedRandomNumberGenerator = require('./make-fixed-random-generator')
const makeGuessingNumberGame = require('./make-guessing-number-game')

describe('User case 1: wins on the first move', () => {
    test('first move has the same number', () => {
        const randomNumberGenerator = makeFixedRandomNumberGenerator(5)
        const guessingNumberGame = makeGuessingNumberGame(randomNumberGenerator)
        const firstGuessResult = guessingNumberGame.guessNumber(5)
        const successMessage = "Correct you won"
        expect(firstGuessResult).toBe(successMessage)
    })
})

describe('User case 2', () => {
    test('first move has a higer number', () => {
        const randomNumberGenerator = makeFixedRandomNumberGenerator(5)
        const guessingNumberGame = makeGuessingNumberGame(randomNumberGenerator)
        const firstGuessResult = guessingNumberGame.guessNumber(10)
        const lowerMessage = "The number is lower"
        expect(firstGuessResult).toBe(lowerMessage)
    })
})