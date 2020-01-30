function fillArr(num) {
    let arr = [];
    for(let i = 2; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}

function isPrime(num) {
    if(num == 2) {
        return true;
    } else {
    let arr = [];
    for(let i = 2; i < num; i++) {
        arr.push(i);
    }
    let condition = false;
    let i = 0;
    do{
        if(num % arr[i] != 0){
            condition = true
        } else {
            condition = false;
        }
        i++;
    } while (condition == true && i < arr.length);
    return condition;
    }
}

function sumPrimes(num) {
    let arrOfNums = fillArr(num);
    let arrOfPrimes = arrOfNums.filter(item => isPrime(item));
    let sumOfPrimes = arrOfPrimes.reduce((sum, item) => sum + item, 0);
    return sumOfPrimes;
  }
  
  sumPrimes(10);


  console.log(sumPrimes(10));