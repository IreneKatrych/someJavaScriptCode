function dropElements(arr, func) {
    // Drop them elements.
    let sortedArr = [];
    let i = 0;
    let condition = false;
    do {
        if(func(arr[i]) == false){
            i++;
        } else {
            sortedArr = arr.slice(i);
            condition = true;
        }
    } while(condition == false && i < arr.length);
   
    return sortedArr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))