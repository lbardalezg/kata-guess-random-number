module.exports = makeGuessingNumberGame

function makeGuessingNumberGame(randomNumberGenerator) {
    const target = randomNumberGenerator.getNumber()
    let triesNumber = 0
    function guessNumber(number) {
        if(target === number) return "Correct you won"
        if(triesNumber < 2) return handleIncorrectIntermediateGuesses(number)
        if(triesNumber >= 2) return handleIncorrectLastGuess(number)
    }
    function handleIncorrectIntermediateGuesses(number) {
        triesNumber++
        if(target < number) return "The number is lower"
        return "The number is higer"
    }
    function handleIncorrectLastGuess(number) {
        return "You lose"
    }
    return {
        guessNumber
    }
}