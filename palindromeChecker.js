/*
This program check if string is palindrome
Letters and digits only include
*/

//reverse array
function reverseArr(arr) {
    let reversedArr = [];
    let givenArr = [].concat(arr);

    for (let i = givenArr.length - 1; i >= 0; i--) {
        reversedArr = reversedArr.concat(givenArr[i]);
    }
    
    return reversedArr;
}

//check palindrome
function palindrome(str) {
    let check = true;
    let regex = /[A-Za-z0-9]/;

    //convert string to array
    let strArr = str.split('');

    //get only letters and digits from array
    strArr = strArr.filter(item => regex.test(item));

    //convert all letters to lower case
    strArr = strArr.map(item => item.toLowerCase());

    //get reverse array
    let reversedArr = reverseArr(strArr);

    //check if original and reversed strings are the same
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] != reversedArr[i]) {
            check = false;
            break;
        }
    }

    //output result to console
    console.log(strArr, reversedArr, check);

    //return result
    return check;
  }
  
  
  //test function
  palindrome("eye");    //true
  palindrome('To *  ChEck smth');   //false
  