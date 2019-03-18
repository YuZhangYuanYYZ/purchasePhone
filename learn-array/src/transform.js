function transform(data) {
    var resultData = new Array;
    var resultData = data.map(function (data) {
        data.name = data.name.toUpperCase();
        data.totalPoints = data.cards.reduce(function (accumulator, currentValue) {
            debugger;
            return accumulator + currentValue.point;
        }, 0);
        data.cards = data.cards;
        return data;
    });
    return resultData;
}

module.exports = transform