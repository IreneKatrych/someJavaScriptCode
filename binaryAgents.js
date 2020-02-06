/*
This program could interpret binary string to 
normal string, with letters...
*/

//this function get binary number and convert it
//to decimal number
function binaryToDecimal(num) {
    let j = 0;
    let decimal = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        if(num[i] == 1) {
            decimal += 1 * Math.pow(2, j);
        }
        j++;
    }
        return decimal;
}

//this function get string and split it by space
//to array of binary numbers 
function splitToParts(str) {
    let splitedStr = str.split(' ');
    return splitedStr;
}

//this function convert binary string to sentence
function binaryAgent(str) {
    let splitedStr = splitToParts(str);
    let decimalStr = splitedStr.map(item => binaryToDecimal(item));

    //convert decimal numbers to letters
    let charStr = decimalStr.map(item => String.fromCharCode(item));

    //join string to sentence
    let finalStr = charStr.join('');

    console.log(finalStr);

    //return result
    return finalStr;
  }
  

  //testing function
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  //Should return: Aren't bonfires fun!?
