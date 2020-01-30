function telephoneCheck(str) {
    let telNum = str;
    let checker = false;
    //let telRegex = /\d{10,11}|(\d{3})-\1-\d{4}/;
    let telRegex = /^1? ?(\(\d{3}\)|\d{3})(-| )?\d{3}(-| )?\d{4}$/;
    if(telRegex.test(telNum) == true) {
        checker = true;
    }
    // Good luck!
    console.log(telNum + ' is ' + checker);
    return checker;
  }
  
  telephoneCheck("555-555-5555");
  telephoneCheck('(555) 555-5555');