// Code your solution in this file!{
    // challenge 1
    //that takes in a pickup location for a passenger, 
   // and returns the number of blocks from Scuber headquarters on 42nd Street.
     //For example, if the pickup location is 50 (i.e., 50th Street), the return value should be 8.
function distanceFromHqInBlocks(blocks){
const headquarters = 42
if(blocks>42)
{
    return blocks-headquarters
}
else
{
    return headquarters-blocks
}
}
//distanceFromHqInBlocks(50)

// challenge 2
//The distanceFromHqInBlocks function's return value can then be used for another function, 
//distanceFromHqInFeet
//that translates the number of blocks from headquarters to the distance in feet. 
//Each block in Manhattan is 264 feet long.


function distanceFromHqInFeet(blocks){
    let distanceInFeet = distanceFromHqInBlocks(blocks)*264 // calling a function inside another function
  return distanceInFeet
}

// challenge3
// Write a function called distanceTravelledInFeet that takes in both the start and destination blocks,
//  and returns the number of feet travelled. Remember, each block in Manhattan is 264 feet long. 
//  For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St,
//  returns 1056 ((38-34)*264). You can assume that we are only calculating distance uptown/downtown,
//   not from river to river.

function distanceTravelledInFeet(start, destination) {
if(start<destination){
    return (destination-start)*264
}
    else {
        return (start-destination)*264
    }
  }

  //challenge4
//   Given the same starting and ending block as the previous test (hint hint), 
//   return the fare for the customer. The first four hundred feet are free. 
//   For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, 
//     which are free!). Then Scuber charges a flat fare for a distance over 2000 feet 
//     and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — 
//   the function returns '' if a ride over 2500 feet is requested.
  function calculatesFarePrice(start, destination) {
    let distance=distanceTravelledInFeet(start, destination);
    if (distance<400){
        return 0
    }
    else if(distance>400 && distance<=2000){
        return (distance- 400) * 0.02;
    }
    else if(distance>2000 && distance<=2500){
        return 25;
    }
    else if(distance>2500){
        return "cannot travel that far"
    }
  }