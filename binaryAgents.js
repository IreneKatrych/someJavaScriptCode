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

function splitToParts(str) {
    let splitedStr = str.split(' ');
    return splitedStr;
}

function binaryAgent(str) {
    let splitedStr = splitToParts(str);
    let decimalStr = splitedStr.map(item => binaryToDecimal(item));
    let charStr = decimalStr.map(item => String.fromCharCode(item));
    let finalStr = charStr.join('');
    console.log(finalStr);
    return finalStr;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  
