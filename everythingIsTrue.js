function truthCheck(collection, pre) {
    // Is everyone being true?
    let checker = true;
    for (let i = 0; i < collection.length; i++) {
        if(collection[i].hasOwnProperty(pre) == false) {
            checker = false;
        } else if (Boolean(collection[i][pre]) == false) {
            checker = false;
        }
        
    }
    console.log(checker);
    return checker;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  