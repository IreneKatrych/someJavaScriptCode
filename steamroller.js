function isNested(item) {
    if(item.length == undefined) {
        return false;
    } else if (typeof(item) == 'string') {
        return false;
    } else {
        return true;
    }
}


function steamrollArray(arr) {
    // I'm a steamroller, baby
    let newArr = [].concat(arr);
    let flattedArr = [];
    for (let i = 0; i < newArr.length; i++) {
        if(isNested(newArr[i]) == false) {
            flattedArr = flattedArr.concat(newArr[i]);
        } else {
            flattedArr = flattedArr.concat(steamrollArray(newArr[i]));
        }
        
    }
    return flattedArr;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);
  console.log(isNested("a"));