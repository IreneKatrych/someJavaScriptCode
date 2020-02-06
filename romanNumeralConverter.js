/*
This function convert decimal numbers to roman numbers
*/


function convertToRoman(num) {

    //main decimal numbers
    let decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    //main roman numbers
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

    //converting to roman
    do {
        //if our number is bigger then main decimal number 
        //program take it roman number equivalent
        //and subtract it from initial value
        if (proccesNum >= decimalNumbers[i]) {
            romanResult += romanNumbers[decimalNumbers[i]];
            proccesNum -= decimalNumbers[i];
        } else { //if less - just skip it
            i++;
        }
        //doing it until initial value will be equal '0'
    } while(proccesNum != 0);

    //output result
    console.log(num + ' = ' + romanResult);

    //return result
    return romanResult;
   }
   
   //test the function
   convertToRoman(36);      //XXXVI
   convertToRoman(1984);    //MCMLXXXIV
  
   