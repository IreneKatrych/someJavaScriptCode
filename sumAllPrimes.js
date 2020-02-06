/*
This program get number. Create array of prime numbers between 1 and 
its number. Return amount of all that prime numbers.
*/

//filling array from 2 to argument number
function fillArr(num) {
    let arr = [];

    for(let i = 2; i <= num; i++) {
        arr.push(i);
    }

    return arr;
}

//checking if number is prime
function isPrime(num) {
    //2 is first prime number
    if(num == 2) {
        return true;
    } else {
    let arr = [];
    //filling array from 2 to num
    for(let i = 2; i < num; i++) {
        arr.push(i);
    }

    let condition = false;
    let i = 0;

    //check if num has remainder by dividing 
    //on other numbers between 2 and this number
    do{
        if(num % arr[i] != 0){
            condition = true
        } else {
            condition = false;
        }
        i++;
    } while (condition == true && i < arr.length);

    //result (true or false)
    return condition;
    }
}

//main function
function sumPrimes(num) {
    //filling an array
    let arrOfNums = fillArr(num);

    //getting only prime numbers from array
    let arrOfPrimes = arrOfNums.filter(item => isPrime(item));

    //getting amount of all elements of array
    let sumOfPrimes = arrOfPrimes.reduce((sum, item) => sum + item, 0);

    //result
    return sumOfPrimes;
  }
  

  //test program
  sumPrimes(10);
  console.log(sumPrimes(10));       //17
  console.log(sumPrimes(20));       //77
  console.log(sumPrimes(2));       //2
  console.log(sumPrimes(1));       //0