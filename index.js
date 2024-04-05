function distanceFromHqInBlocks (blockNumber)  {
  if(blockNumber>42){
    return blockNumber-42;
  }else{
    return 42-blockNumber;
  }
  
    }


function distanceFromHqInFeet(street){
const feetPerBlock = 264;
const hqstreet = 42;
let distance;
if (street>=hqstreet){
  distance=(street-hqstreet)*feetPerBlock;
}else{
  distance = (hqstreet-street)*feetPerBlock;
}
return distance;
}
function distanceTravelledInFeet(start,destination){
   const feetPerBlock = 264;
   const hqstreet = 42;
   let distance;
   if(start<=destination){
    distance = (destination-start)*feetPerBlock;
   }else{
    distance = (start-destination)*feetPerBlock;
   }
   return distance;
}
function calculatesFarePrice(start,destination){
  const feetPerBlock = 264;
  const freeSampleDistance = 400;
  const minimumChargeDistance = 2000;
  const maximumAllowedDistance = 2500;
  const chargePerFoot = 0.02;
  let distance = distanceTravelledInFeet(start,destination)
  if(distance<=freeSampleDistance){
    return 0;
  }else if(distance<=maximumAllowedDistance){
    return(distance-freeSampleDistance)*chargePerFoot;
  }else if (distance>=maximumAllowedDistance){
    return 25;
  }else{
    return"Distance exceeds maximum allowed distance. Cannot calculate fare"
  }
}
function calculatesFarePrice(start,destination){
  const distance = distanceTravelledInFeet(start,destination)
  if(distance<= 400){
    return 0;
  }else if(distance>400 && distance<= 2000){
    return (distance -400)*0.02;
  }else if(distance>2000 && distance<2500){
    return 25;
  }else {
    return "cannot travel that far";
  }
}
  



