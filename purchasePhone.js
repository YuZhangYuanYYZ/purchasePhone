function caculateTax(totalPrice, taxRate) {
    return totalPrice * taxRate;
}

function calculateTotal(n, accesorieyPrice, phonePrice, taxRate) {
    var moneyOfAcc = n * accesorieyPrice;
    var moneyOfphone = n * phonePrice;
    var total = moneyOfphone + moneyOfAcc;
    var totalSpendingMoney = total + caculateTax(total, taxRate);
    return totalSpendingMoney;
}

function isBankrupt(thresholdSpending, totalSpendingMoney, bankMoney) {
    return ((thresholdSpending - totalSpendingMoney) > 0) && ((bankMoney - totalSpendingMoney) > 0);
}

function buyUntilBankrup(phonePrice, accesorieyPrice, bankMoney, threshold, taxRate) {
    var total = 0;
    var n = 0;
    while (!isBankrupt(threshold, total, bankMoney)) {
        n = n + 1;
        total = calculateTotal(n, accesorieyPrice, phonePrice, taxRate);
    }
    return {
        amount: n,
        totalCost: total,
    };
}

function formatPrice(price) {
    return '$' + price;
}

function printShopItem(shoppingItem) {
    var formatedCost = formatPrice(shoppingItem.totalCost);
    console.log("the number of phone you have bought is:" + shoppingItem.account);
    console.log("the money you have spent(with tax) is:$" + formatedCost);
}

function main() {
    var phonePrice = 100;
    var accesorieyPrice = 10;
    var bankMoney = 5000;
    var thresholdSpending = 4000;
    var taxRate = 0.1;
    var shoppingItem = buyUntilBankrup(phonePrice, accesorieyPrice, bankMoney, thresholdSpending, taxRate);
    printShopItem(shoppingItem);
}

main();