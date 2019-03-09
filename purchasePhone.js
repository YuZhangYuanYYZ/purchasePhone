    function caculateTax(taxRate,total){
        return total*taxRate ;
    }

    function totalSpending(phonePrice,accesorieyPrice,taxRate,phoneAmount,totalSpendingMoney){  
        var moneyOfAcc = phoneAmount*accesorieyPrice;
        var moneyOfphone = phoneAmount*phonePrice;
        var total = moneyOfphone+moneyOfAcc;
        totalSpendingMoney = total+caculateTax(taxRate,total);   
        return totalSpendingMoney;
    }

    function isBankrupt(phonePrice,accesorieyPrice,taxRate,phoneAmount,thresholdSpending, bankMoney,totalSpendingMoney ){  
    return (((thresholdSpending-totalSpending(phonePrice,accesorieyPrice,taxRate,phoneAmount,totalSpendingMoney))>0)&&((bankMoney-totalSpending(phonePrice,accesorieyPrice,taxRate,phoneAmount,totalSpendingMoney))>0));
    }

    function main(){
        var thresholdSpending =4000;
        var bankMoney = 5000;
        var accesorieyPrice = 10;
        var phonePrice = 100;
        var taxRate = 0.1;
        var phoneAmount = 0;   
        var totalSpendingMoney = 0; 
        while (isBankrupt(phonePrice,accesorieyPrice,taxRate,phoneAmount,thresholdSpending,bankMoney,totalSpendingMoney )){
            phoneAmount = phoneAmount+ 1; 
        }
            totalSpendingMoney = totalSpending(phonePrice,accesorieyPrice,taxRate,phoneAmount,totalSpendingMoney)
            console.log("the number of phone you have bought is:"+phoneAmount+","+ "the money you have spent(with tax) is:$"+totalSpendingMoney);
    }
    
    main();

