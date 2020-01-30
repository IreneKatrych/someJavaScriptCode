var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    
    this.getFullName = function() {
      return fullName;
    };
    
    this.getFirstName = function() {
        return fullName.match(/^\w+/).join('');
    };

    this.getLastName = function () {
        return fullName.match(/\w+$/).join('');
    };

    this.setFullName = function (firstAndLast) {
        fullName = firstAndLast;
    };

    this.setFirstName = function (first) {
        fullName = fullName.replace(/^\w+/, first);
    };

    this.setLastName = function (last) {
        fullName = fullName.replace(/\w+$/, last);
    };

  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
  bob.setFullName("Haskell Curry");
  console.log(bob.getFirstName());