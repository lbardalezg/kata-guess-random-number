module.exports = makeGuessingNumberGame

function makeGuessingNumberGame(randomNumberGenerator) {
    const target = randomNumberGenerator.getNumber()
    let triesNumber = 0
    function guessNumber(number) {
        if(target === number) return "Correct you won"
        return handleIncorrectGuesses(number)
    }
    function handleIncorrectGuesses(number) {
        triesNumber++
        if(triesNumber > 2) return "You lose"
        if(target < number) return "The number is lower"
        return "The number is higer"
    }
    return {
        guessNumber
    }
}