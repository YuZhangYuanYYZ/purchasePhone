function caculateTax(taxRate, total) {
    return total * taxRate;
}

function spendingMoney(phonePrice, accesorieyPrice, phoneAmount, taxRate) {
    var totalSpendingMoney = phoneAmount * (phonePrice + accesorieyPrice);
    return totalSpendingMoney + caculateTax(taxRate, totalSpendingMoney);
}

function isBankrupt(thresholdSpending, bankMoney, allSpendingMoney) {
    return (((thresholdSpending - allSpendingMoney) > 0) && ((bankMoney - allSpendingMoney) > 0));
}

function buyPhones(thresholdSpending, bankMoney) {
    var phoneAmount = 0;
    var allSpendingMoney = 0;
    var accesorieyPrice = 10;
    var phonePrice = 100;
    var taxRate = 0.1;
    while (isBankrupt(thresholdSpending, bankMoney, allSpendingMoney)) {
        phoneAmount = phoneAmount + 1;
        allSpendingMoney = spendingMoney(phonePrice, accesorieyPrice, phoneAmount, taxRate);
    }
    return {
        phoneAmount: phoneAmount,
        allSpendingMoney: spendingMoney(phonePrice, accesorieyPrice, phoneAmount - 1, taxRate),
    };
}

function formateOutput(phoneAmount, allSpendingMoney) {
    return {
        buyPhones: "the number of phone you have bought is:" + (phoneAmount) + ",",
        spendMoney: "the money you have spent(with tax) is:$" + allSpendingMoney,
    }
}

function main() {
    var thresholdSpending = 4000;
    var bankMoney = 5000;
    var phoneAmount = buyPhones(thresholdSpending, bankMoney).phoneAmount - 1;
    var allSpendingMoney = buyPhones(thresholdSpending, bankMoney).allSpendingMoney;
    console.log(formateOutput(phoneAmount, allSpendingMoney).buyPhones + formateOutput(phoneAmount, allSpendingMoney).spendMoney);
}

main();