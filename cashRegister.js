function getCash(change, cid) {
    let currencyUnit = [["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]];
    let moneyToReturn = change;
    let currencyIn = [].concat(cid);
    let result = [];
    for (let i = 0; i < currencyUnit.length; i++) {
        if(moneyToReturn >= currencyUnit[i][1]) {
            let temp = currencyIn.filter(item => item[0] === currencyUnit[i][0]);
            if(temp[0][1] > 0 && temp[0][1] <= moneyToReturn) {
                result = result.concat([...temp]);
                moneyToReturn -= temp[0][1];
                moneyToReturn = Math.round(moneyToReturn * 100) / 100;
            } else if(temp[0][1] > 0 && temp[0][1] > moneyToReturn) {
                let sum = Math.round((Math.floor(moneyToReturn / currencyUnit[i][1]) * currencyUnit[i][1]) * 100) / 100;
                moneyToReturn -= sum;
                moneyToReturn = Math.round(moneyToReturn * 100) / 100;
                let tempArr = [temp[0][0], sum];
                result = result.concat([tempArr]);
            }
        }
    };
    if(moneyToReturn != 0) {
        result = false;
    };
    return result;
}

function checkCashRegister(price, cash, cid) {
    let cashToReturn = {
        status: '',
        change: []
    };
    let statusArr = ['OPEN', 'CLOSED', 'INSUFFICIENT_FUNDS'];
    let sumOfChange = cash - price;
    let sumOfCashInDrawer = Math.round(cid.reduce((sum, item) => sum + item[1], 0) * 100) / 100;
    if(sumOfChange > sumOfCashInDrawer || getCash(sumOfChange, cid) == false) {
       cashToReturn.status = statusArr[2];
    } else if(sumOfCashInDrawer == sumOfChange) {
        cashToReturn.status = statusArr[1];
        cashToReturn.change = cid;
    } else if(sumOfChange < sumOfCashInDrawer) {
        cashToReturn.status = statusArr[0];
        cashToReturn.change = [].concat(getCash(sumOfChange, cid));
    }
    console.log('change = ' + sumOfChange + ' cash = ' + sumOfCashInDrawer + ' \n status is ' + cashToReturn.status + '\n change is ' + cashToReturn.change);
    // Here is your change, ma'am.
    return cashToReturn;
  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  