function convertToRoman(num) {
    let decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumbers = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }
    let romanResult = '';
    let proccesNum = num;
    let i = 0;
    do {
        if (proccesNum >= decimalNumbers[i]) {
            romanResult += romanNumbers[decimalNumbers[i]];
            proccesNum -= decimalNumbers[i];
        } else {
            i++;
        }
    } while(proccesNum != 0);
    console.log(num + ' = ' + romanResult);
    return romanResult;
   }
   
   convertToRoman(36);
   convertToRoman(1984);
  
   