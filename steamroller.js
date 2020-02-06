/*
This program get nested array and return all elements in
simple one-dimensional array
*/

//ckeck if element is nested
function isNested(item) {
    if(item.length == undefined) {
        return false;
    } else if (typeof(item) == 'string') {
        return false;
    } else {
        return true;
    }
}

//flatten array
function steamrollArray(arr) {
    // I'm a steamroller, baby
    
    let newArr = [].concat(arr);
    let flattedArr = [];

    for (let i = 0; i < newArr.length; i++) {
        //if element isn't nested - concatenate it to result array
        if(isNested(newArr[i]) == false) {
            flattedArr = flattedArr.concat(newArr[i]);
        } else {
            //if it is nested - call this function one more time
            flattedArr = flattedArr.concat(steamrollArray(newArr[i]));
        }
    }

    //results
    return flattedArr;
  }
  
  //test function
  steamrollArray([1, [2], [3, [[4]]]]);
  console.log(steamrollArray([1, [2], [3, [[4]]]])); //[1, 2, 3, 4]