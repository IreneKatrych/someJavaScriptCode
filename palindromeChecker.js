function reverseArr(arr) {
    let reversedArr = [];
    let givenArr = [].concat(arr);
    for (let i = givenArr.length - 1; i >= 0; i--) {
        reversedArr = reversedArr.concat(givenArr[i]);
    }
    return reversedArr;
}

function palindrome(str) {
    // Good luck!
    let check = true;
    let strArr = str.split('');
    let regex = /[A-Za-z0-9]/;
    strArr = strArr.filter(item => regex.test(item));
    strArr = strArr.map(item => item.toLowerCase());
    let reversedArr = reverseArr(strArr);
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] != reversedArr[i]) {
            check = false;
            break;
        }
    }
    console.log(strArr, reversedArr, check);
    return check;
  }
  
  
  
  palindrome("eye");
  palindrome('To *  ChEck smth');
  