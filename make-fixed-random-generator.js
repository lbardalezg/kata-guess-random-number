module.exports = makeFixedRandomNumberGenerator

function makeFixedRandomNumberGenerator(number) {
    function getNumber() {
        return number
    }
    return {
        getNumber
    }
}