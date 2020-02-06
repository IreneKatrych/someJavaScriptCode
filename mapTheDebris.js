/*
This function get array with name and avgAlt and calculate orbital period
of satelite of Earth. It return array with satelite name and
its orbital period as object.
*/

//calcularing orbital period
function getOrbitalPeriod(gm, earthRadius, avgAlt) {
    return Math.round(2 * Math.PI * Math.pow((Math.pow(earthRadius + avgAlt, 3)/ gm), 1/2));
}

//creating ner array of objects
function orbitalPeriod(arr) {
    //constants
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    let newArr = [].concat(arr);
    for (let i = 0; i < newArr.length; i++) {
        newArr[i].orbitalPeriod = getOrbitalPeriod(GM, earthRadius, newArr[i].avgAlt);
        delete newArr[i].avgAlt;
    }
    return newArr;
  }
  
  //test the function
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  