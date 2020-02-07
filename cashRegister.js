   /* 
   Design a cash register drawer function checkCashRegister() that accepts 
   purchase price as the first argument (price), payment as the second 
   argument (cash), and cash-in-drawer (cid) as the third argument.
   
   cid is a 2D array listing available currency.
   
   The checkCashRegister() function should always return an object 
   with a status key and a change key.
   
   Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer 
   is less than the change due, or if you cannot return the exact change.
   
   Return {status: "CLOSED", change: [...]} with cash-in-drawer 
   as the value for the key change if it is equal to the change due.
   
   Otherwise, return {status: "OPEN", change: [...]}, with the change 
   due in coins and bills, sorted in highest to lowest order, 
   as the value of the change key. 
   */

  const currencyUnit = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01] ];

  function checkCashRegister(price, cash, cid) {
    let change = {};
    let priceOfGoods = price;
    let receivedMoney = cash;
    let availableMoney = [].concat(cid);

    //money to return
    let startDifference = receivedMoney - priceOfGoods;
    let differenceToOperate = startDifference;

    //amount of all money we have
    let amount = Math.round(availableMoney.reduce((sum, item) => sum + item[1], 0) * 100) / 100;;

    //creating array of available money that we need
    let banknotesWeNeed = [];
    for (let i = 0; i < currencyUnit.length; i++) {
        if(differenceToOperate >= currencyUnit[i][1]) {
            //looking if we have banknote that we need 
            let temporaryCurrency = availableMoney.filter(item => item[0] === currencyUnit[i][0]);
            //if we have - we add them to array of available money and decrease our differenceToOperate
            if(temporaryCurrency[0][1] > 0 && temporaryCurrency[0][1] <= differenceToOperate) {
                banknotesWeNeed.push([temporaryCurrency[0][0], temporaryCurrency[0][1]]);
                differenceToOperate -= temporaryCurrency[0][1];
                differenceToOperate = Math.round(differenceToOperate * 100) / 100;
            } else if(temporaryCurrency[0][1] > 0 && temporaryCurrency[0][1] > differenceToOperate) {
                let sum = Math.round((Math.floor(differenceToOperate / currencyUnit[i][1]) * currencyUnit[i][1]) * 100) / 100;
                differenceToOperate -= sum;
                differenceToOperate = Math.round(differenceToOperate * 100) / 100;
                let tempArr = [temporaryCurrency[0][0], sum];
                banknotesWeNeed.push(tempArr);
            }
        }
    };
    
    //build our result
    if(startDifference > amount || differenceToOperate !== 0) {
        //if we don't have enough money or banknotes we need
        change.status = 'INSUFFICIENT_FUNDS';
        change.change = [];
    } else if(startDifference == amount) {
        //if we should give all our money in drawner
        change.status = 'CLOSED';
        change.change = availableMoney;
    } else if(startDifference < amount) {
        //if we have enough money
        change.status = 'OPEN';
        change.change = banknotesWeNeed;
    }

    //output our results
    console.log('change = ' + startDifference + ' cash = ' + amount + ' \n status is ' + change.status + '\n change is ' + change.change);

    //return our results (object)
    return change;
  }
  
  //test program
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));    
  //{status: "OPEN", change: [["QUARTER", 0.5]]}
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));   
  //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));    
  //{status: "INSUFFICIENT_FUNDS", change: []}
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));    
  //{status: "INSUFFICIENT_FUNDS", change: []}
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));    
  //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

 