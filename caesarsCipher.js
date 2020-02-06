/*
This program could convert Caesar Cipher to normal sentence
 */

//this function get number of letter in alphabet
// and move it on 13 position or 
// return non number if get it
function moveTo13 (num) {
    if(/\D/.test(num) == true){
        return num;
    } else if(num + 13 > 25) {
        return num + 13 - 26;
    } else {
        return num + 13;
    }
}


//this function convert cipher to sentence
function rot13(str) { 
    let encodedStr = str;
    let decodedStr = '';
    let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //split string to array of symbols
    let strArr = encodedStr.split('');

    //get array of letter positions in alphabet
    let numArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if(/\W/.test(strArr[i]) == true) {
            numArr = numArr.concat(strArr[i]);
        } else {
            numArr = numArr.concat(alphabet.indexOf(strArr[i]));
        }
    }
 
    //get array of positions moved on 13
    numArr = numArr.map(item => moveTo13(item));

    //get decrypted sentence
    decodedStr = numArr.map(item => /\W/.test(item) == true ? item : alphabet[item]).join('');
    /*for (let i = 0; i < numArr.length; i++) {
        if(/\W/.test(numArr[i]) == true) {
            decodedStr += numArr[i];
        } else {
            decodedStr += alphabet[numArr[i]]; 
        }
    }*/
 
    //output and return result
    console.log(encodedStr + ' = ' + decodedStr);
    return decodedStr;
  }
  
  // test program
  rot13("SERR PBQR PNZC"); //FREE CODE CAMP
  rot13('LBH QVQ VG!'); //YOU DID IT!