const Unit = require('./Unit');



const lengthCalculator = {

    add: function (lengthA, lengthB) {
        return {
            len: (lengthA.len) * (lengthA.unit) + (lengthB.len) * (lengthB.unit),
            unit: Unit.MM
        }
    },

    subtract: function (lengthA, lengthB) {
        return {
            len: (lengthA.len) * (lengthA.unit) - (lengthB.len) * (lengthB.unit),
            unit: Unit.MM
        }
    },

    isEqual: function (lengthA, lengthB) {

        return ((lengthA.len) * (lengthA.unit) == (lengthB.len) * (lengthB.unit));
    }
}

module.exports = lengthCalculator;