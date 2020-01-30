function getOrbitalPeriod(gm, earthRadius, avgAlt) {
    return Math.round(2 * Math.PI * Math.pow((Math.pow(earthRadius + avgAlt, 3)/ gm), 1/2));
}

function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;
    let newArr = [].concat(arr);
    for (let i = 0; i < newArr.length; i++) {
        newArr[i].orbitalPeriod = getOrbitalPeriod(GM, earthRadius, newArr[i].avgAlt);
        delete newArr[i].avgAlt;
    }
    return newArr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  