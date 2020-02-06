/*
This function gets an array and function as arguments.
Then it goes through array and if element meets
condition of argument function, it returns this and
all next elements of array.
*/


function dropElements(arr, func) {
    let sortedArr = [];
    let i = 0;
    let condition = false;

    //check if element meets condition
    do {
        if(func(arr[i]) == false){
            i++;
        } else {
            sortedArr = arr.slice(i);
            condition = true;
        }
    } while(condition == false && i < arr.length);
   
    //return result
    return sortedArr;
  }
  
  //test function
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));       //[1, 2, 3]
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))     //[3, 4]