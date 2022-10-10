const makeFixedRandomNumberGenerator = require('./make-fixed-random-generator')
const makeGuessingNumberGame = require('./make-guessing-number-game')

test('User case 1', () => {
    const randomNumberGenerator = makeFixedRandomNumberGenerator(5)
    const guessingNumberGame = makeGuessingNumberGame(randomNumberGenerator)
    const firstGuessResult = guessingNumberGame.guessNumber(5)
    const successMessage = "Correct you won"
    expect(firstGuessResult).toBe(successMessage)
})