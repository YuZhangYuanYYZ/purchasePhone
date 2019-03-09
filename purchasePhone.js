var phonePrice = 100;
var accesorieyPrice = 10;
var bankMoney = 5000;
var thresholdSpending = 4000;
var taxRate    = 0.1;
var totalSpendingMoney=0;
var phoneNumber;
var total;
var moneyOfAcc;
var moneyOfphone;

function caculateTax(totalPrice){
    var tax = totalPrice*taxRate;
    return tax;
}

function totalSpending(){      
    var n =0;
    while (isBankrupt(thresholdSpending, totalSpendingMoney, bankMoney )){
    n = n+1;
    moneyOfAcc = n*accesorieyPrice;
    moneyOfphone = n*phonePrice;
    total = moneyOfphone+moneyOfAcc;
    totalSpendingMoney = total+caculateTax(total);   
}
   function isBankrupt(thresholdSpending, totalSpendingMoney, bankMoney ){  
   return ((thresholdSpending-totalSpendingMoney)>0)&&((bankMoney-totalSpendingMoney)>0);
   }
    phoneNumber = n;
}
totalSpending();
console.log("the number of phone you have bought is:"+phoneNumber+" the money you have spent(with tax) is:$"+totalSpendingMoney);


