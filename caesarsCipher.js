function moveTo13 (num) {
    if(/\W/.test(num) == true){
        return num;
    } else if(num + 13 > 25) {
        return num + 13 - 26;
    } else {
        return num + 13;
    }
}

function rot13(str) { // LBH QVQ VG!
    let encodedStr = str;
    let decodedStr = '';
    let alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let strArr = encodedStr.split('');
    let numArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if(/\W/.test(strArr[i]) == true) {
            numArr = numArr.concat(strArr[i]);
        } else {
            numArr = numArr.concat(alphabet.indexOf(strArr[i]));
        }
    }
    console.log(numArr);
    numArr = numArr.map(item => moveTo13(item));
    decodedStr = numArr.map(item => /\W/.test(item) == true?item:alphabet[item]).join('');
    /*for (let i = 0; i < numArr.length; i++) {
        if(/\W/.test(numArr[i]) == true) {
            decodedStr += numArr[i];
        } else {
            decodedStr += alphabet[numArr[i]]; 
        }
    }*/
    console.log(numArr);
    console.log(encodedStr + ' = ' + decodedStr);
    return decodedStr;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
  rot13('LBH QVQ VG!')