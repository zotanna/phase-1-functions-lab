function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42; 

    const distanceInBlocks = Math.abs(pickupLocation - headquartersLocation);
    return distanceInBlocks;
  } 
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264; 
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet;
}
function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;
    return distanceInFeet;
  }
  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination- start) * feetPerBlock;
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const distanceBeyond400Feet = distanceInFeet - 400;
      return distanceBeyond400Feet * 0.02; 
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25; 
    } else {
      return 'cannot travel that far';
    }
  }
  