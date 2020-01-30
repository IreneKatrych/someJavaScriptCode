function isOdd (num) {
    return num % 2 != 0;
}

function getFibonacciArr(num) {
    let fibonacciArr = [1, 1];
    let i = 1;
    let condition;
    do {
        let sum = fibonacciArr[i] + fibonacciArr[i - 1];
        if(sum <= num) {
            fibonacciArr.push(sum);
            i++;
            condition = true;
        } else {
            condition = false;
        }
    } while (condition == true);
    return fibonacciArr;
}

function sumFibs(num) {
    let fibsArr = getFibonacciArr(num);
    fibsArr = fibsArr.filter(num => isOdd(num));
    let sumOfOdds = fibsArr.reduce((sum, item) => sum + item, 0);
    return sumOfOdds;
  }
  
  sumFibs(4);
  

  console.log(sumFibs(1000));