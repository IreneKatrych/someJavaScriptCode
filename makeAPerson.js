/*
Creating a class of Person
It could get first and last name and also set them
*/

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    
    //this method get full name of person
    this.getFullName = function() {
      return fullName;
    };
    
    //this method get first name of person
    this.getFirstName = function() {
        return fullName.match(/^\w+/).join('');
    };

    //this method get last name of person
    this.getLastName = function () {
        return fullName.match(/\w+$/).join('');
    };

    //this method set full name of person
    this.setFullName = function (firstAndLast) {
        fullName = firstAndLast;
    };

    //this method set first name of person
    this.setFirstName = function (first) {
        fullName = fullName.replace(/^\w+/, first);
    };

    //this method set last name of person
    this.setLastName = function (last) {
        fullName = fullName.replace(/\w+$/, last);
    };

  };
  
  //test the class
  var bob = new Person('Bob Ross');
  bob.getFullName();
  bob.setFullName("Haskell Curry");
  console.log(bob.getFirstName());