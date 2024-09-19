

"use strict";


function setup() {

}


function draw() {


    // Check if there is freezing rain
    // ("If there is freezing rain", the condition)
    if (thereIsfreezingRain) {
    // There is freezing rain, so stay at home
    // ("then I'm going to stay at home", the consequence)
    stayAtHome();
  }



// Check if the condition is true
if (condition) {
    // If it's true, the things inside these curly brackets
    // will be executed
  }



  // Check if there is freezing rain
// ("If there is freezing rain", the condition)
if (thereIsFreezingRain) {
    // There is freezing rain, so stay at home
    // ("then I'm going to stay at home", the consequence)
    stayAtHome();
  }
  else {
    // There is no freezing rain, so go to the café
    // ("Otherwise, I'm going to the café)
    goToCafe();
  }


// Check if there is freezing rain
// ("If there is freezing rain", the condition)
if (thereIsfreezingRain) {
    // There is freezing rain, so stay at home
    // ("then I'm going to stay at home", the consequence)
    stayAtHome();
  }
  // There's no freezing rain, so check the temperature
  // ("Otherwise, if it's 12 degrees or warmer")
  else if (temperature >= 12) {
    // There is no freezing rain, and the temperature is 12
    // degrees or more, so go for a walk
    // ("I'll go for a walk")
    goForAWalk();
  }
  // Neither of the previous conditions were true
  // ("Otherwise")
  else {
    // There is no freezing rain and the temperature is below
    // 12, so go to the café
    // ("I'm going to the café)
    goToCafe();
  }
  


}