function transform(data) {
    var resultData = data.map(function (data) {
        return {
        name: data.name.toUpperCase(),
        totalPoints:data.cards.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.point;
        }, 0),
        cards:data.cards
        }
    });
    return resultData;
}

module.exports = transform