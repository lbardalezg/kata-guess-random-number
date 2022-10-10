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
    test('second move has a lower number', () => {
        const randomNumberGenerator = makeFixedRandomNumberGenerator(5)
        const guessingNumberGame = makeGuessingNumberGame(randomNumberGenerator)
        guessingNumberGame.guessNumber(10)
        const secondGuessResult = guessingNumberGame.guessNumber(3)
        const higerMessage = "The number is higer"
        expect(secondGuessResult).toBe(higerMessage)
    })
})

describe('User case 3', () => {
    test('when third move is incorrect, returns You lose', () => {
        const randomNumberGenerator = makeFixedRandomNumberGenerator(4)
        const guessingNumberGame = makeGuessingNumberGame(randomNumberGenerator)
        guessingNumberGame.guessNumber(10)
        guessingNumberGame.guessNumber(3)
        const thirdGuessResult = guessingNumberGame.guessNumber(5)
        const loseMessage = "You lose"
        expect(thirdGuessResult).toBe(loseMessage)
    })
})
