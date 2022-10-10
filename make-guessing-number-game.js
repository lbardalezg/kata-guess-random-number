module.exports = makeGuessingNumberGame

function makeGuessingNumberGame(randomNumberGenerator) {
    const target = randomNumberGenerator.getNumber()
    function guessNumber(number) {
        if(target < number) return "The number is lower"
        return "Correct you won"
    }
    return {
        guessNumber
    }
}