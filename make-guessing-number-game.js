module.exports = makeGuessingNumberGame

function makeGuessingNumberGame(randomNumberGenerator) {
    const target = randomNumberGenerator.getNumber()
    let triesNumber = 0
    function guessNumber(number) {
        if(triesNumber < 2) {
            triesNumber++
            if(target < number) return "The number is lower"
            if(target > number) return "The number is higer"
            return "Correct you won"
        }
        if(triesNumber === 2) {
            if(target === number) return "Correct you won"
            return "You lose"
        }
    }
    return {
        guessNumber
    }
}