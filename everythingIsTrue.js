/*
This function check if every object in array has some property
and if this property isn't false
*/

function truthCheck(collection, pre) {
    let checker = true;

    for (let i = 0; i < collection.length; i++) {
        //checking if object has property
        if(collection[i].hasOwnProperty(pre) == false) {
            checker = false;
        } 
        //checking if this property is not false
        else if (Boolean(collection[i][pre]) == false) {
            checker = false;
        }
    }

    console.log(checker);
    return checker;
  }
  
  //test the function
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); //return 'true'
  