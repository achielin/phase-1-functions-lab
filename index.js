// Code your solution in this file!
function distanceFromHqInBlocks(location){
  if(location > 42) {
    return location - 42;
  } else {
    return 42 - location;
  }
}

function distanceFromHqInFeet(location){
  return 264*distanceFromHqInBlocks(location)
}

function distanceTravelledInFeet(start, stop) {
 return Math.abs((stop - start) * 264);
}

function calculatesFarePrice(start, stop) {
  const totalDistance = distanceTravelledInFeet(start, stop);

  if (totalDistance <= 400) {
    const price = 0;
    return price;
  } else if (totalDistance <= 2000) {
    const price = (totalDistance - 400) * 0.02;
    return price;
  } else if (totalDistance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
  



