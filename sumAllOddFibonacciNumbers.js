/*
This program get number, search all add fibbonacci numbers 
between this number and '1' and return their amount
*/

//check if number is odd
function isOdd (num) {
    return num % 2 != 0;
}

//get array of fibonacci numbers from 1 to argument number
function getFibonacciArr(num) {
    let fibonacciArr = [1, 1];
    let i = 1;
    let condition;

    //filling array
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

    //return result array
    return fibonacciArr;
}

//getting amount of numbers 
function sumFibs(num) {
    //get fibonacci array
    let fibsArr = getFibonacciArr(num);

    //get only odd numbers from fibonacci array
    fibsArr = fibsArr.filter(num => isOdd(num));

    //get amount
    let sumOfOdds = fibsArr.reduce((sum, item) => sum + item, 0);

    //return result (number)
    return sumOfOdds;
  }
  
  //test the program
  sumFibs(4);
  console.log(sumFibs(4));      //5
  console.log(sumFibs(10));     //10
  console.log(sumFibs(30));     //44
  console.log(sumFibs(100));    //188