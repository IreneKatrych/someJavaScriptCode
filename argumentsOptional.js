/*
This function add together different number of arguments
if they are numbers. If not - it returns 'undefined'.
Also, this function could get one argument, then 
another one and then return its sum. 
*/

function addTogether() {
    //get arguments and turn them into array
    let args = [].slice.call(arguments);
    
    //check if all of arguments is numbers
    // and returns 'undefined' if not
    for (let i = 0; i < args.length; i++) {
        if(typeof args[i] != 'number') {
            return undefined;
        }
    }

    //find sum of all arguments 
    if(args.length > 1) {
       return args.reduce((sum, item) => sum + item, 0);
    } 
    //check if it is only one argument and call function
    else if(args.length == 1){
        return function(num) {
            
            //check if second argument is num
            //if not returns 'undefined'
            if(typeof num != 'number') {
                return undefined;
            } else {
                //return sum of first and second argument
                //if they are numbers
                return args[0] + num;
            }   
        }
    }
  }
  
  //calling function to check how it work
  console.log(addTogether(2,3));
  console.log(addTogether(2)([3])); 
  console.log(addTogether(3)(4));
  console.log(addTogether(2, 3, 4, 5, 6));
  console.log(addTogether(2, 3, 4, 5, 'i'));
