/*
This program take array with two numbers and 
search smallest common multiple of all numbers
between first and second numbers
*/

//get array of all numbers between initial numbers
function getFullArr(arr) {
    let newArr = [].concat(arr);
    let filledArr = [];

    //get numbers in growing order
    newArr = newArr.sort(function(a,b){ return a-b;})
    
    //filling array
    for(let i = newArr[0]; i <= newArr[1]; i++) {
        filledArr = filledArr.concat(i);
    }

    //return filled array
    return filledArr;
}


//check if number could be divided by all
//array elements without remainder
function checker(num, arr) {
    let i = 0;
    let condition;
    do {
        if(num % arr[i] == 0){
            condition = true;
        } else {
            condition = false;
        }
        i++;
    } while (condition == true && i < arr.length);

    //return result (true or false)
    return condition;
}


//main function
function smallestCommons(arr) {

    //getting full array
    let fullArr = getFullArr(arr);

    //getting largest value of array
    let i = fullArr[fullArr.length - 1];

    //check all next numbers if its could be 
    //smallest common multiple
    let condition = false;
    do{
        condition = checker(i, fullArr);
        if(condition == false) {
            i++;
        }
    } while(condition == false);

    //return result (number)
    return i;
  }
  
  
  //test the program
  smallestCommons([1,5]);
  console.log(smallestCommons([1,5]));      //60
  console.log(smallestCommons([5, 1]));     //60
  console.log(smallestCommons([2, 10]));    //2520
  console.log(smallestCommons([1, 13]));    //360360
  console.log(smallestCommons([23, 18]));   //6056820
 