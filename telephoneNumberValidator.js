/*
This function check if input telephone number is
valid (american numbers only)
*/

function telephoneCheck(str) {
    let telNum = str;
    let checker = false;
    //regular expression to check telephone number
    let telRegex = /^1? ?(\(\d{3}\)|\d{3})(-| )?\d{3}(-| )?\d{4}$/;

    //if telephone number is valid - return true
    if(telRegex.test(telNum) == true) {
        checker = true;
    }

    //output result
    console.log(telNum + ' is ' + checker);

    //return result (true or false)
    return checker;
  }
  
  //test program 
  telephoneCheck("555-555-5555");       //true
  telephoneCheck('(555) 555-5555');     //true
  telephoneCheck('1234567890123');      //false
  telephoneCheck('4 777 777 7777');     //false
  telephoneCheck('1 777 777 7777');     //true