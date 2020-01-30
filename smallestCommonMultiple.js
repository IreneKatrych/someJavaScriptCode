function getFullArr(arr) {
    let newArr = [].concat(arr);
    newArr = newArr.sort(function(a,b){ return a-b;})
    let filledArr = [];
    for(let i = newArr[0]; i <= newArr[1]; i++) {
        filledArr = filledArr.concat(i);
    }
    return filledArr;
}

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
    return condition;
}

function smallestCommons(arr) {
    let fullArr = getFullArr(arr);
    let i = fullArr[fullArr.length - 1];
    let condition = false;
    do{
        condition = checker(i, fullArr);
        if(condition == false) {
            i++;
        }
    } while(condition == false);
    return i;
  }
  
  
  smallestCommons([1,5]);
  console.log(smallestCommons([1,5]))