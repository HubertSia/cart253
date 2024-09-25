/**
 * 
 *When we say something like “if there is freezing rain, then I will stay home” we’re essentially already 
 *doing logic in the sense that we draw a conclusion based on whether 
 *the proposition “there is freezing rain” is true or false. (The conclusion being: staying home or not.)
 *If we think about things this way (and computers do), then we can use some other parts of logic to make our code simpler.
 */

"use strict";



function setup() {

}



function draw() {

    // Check if there is freezing rain
// ("If there is freezing rain", the condition)
if (thereIsFreezingRain) {
    // There is freezing rain!
    // Check if there is also darkness...
    // ("and it's dark")
    if (lightLevels < 10) {
        // There is freezing rain and it's also dark!
        // So we stay at home
        // ("then I'm going to stay at home", the consequence)
        stayAtHome();      
    }  
}



//===========================================================



// Check if there is freezing rain or deep snow
// ("If there is freezing rain OR deep snow", the first part of condition)
if (thereIsFreezingRain || snowLevel > 5) {
    // There is freezing rain or deep snow (or both!)
    // So we stay at home
    // ("then I'm going to stay at home", the consequence)
    stayAtHome();      


}



//===========================================================



// Check if there is NOT freezing rain
// ("If there is no freezing rain", the first part of condition)
// (Or "If NOT freezing rain")
if (!thereIsFreezingRain) {
    // There is no freezing rain
    // So we go for a walk
    // ("then I'll go for a walk", the consequence)
    goForWalk();      
}



//===========================================================



/**
 * 
 * 
 * Summary
 * Using the logic operators && (AND), || (OR), and ! (NOT) is a great way to make our programs more and more specific. 
 * Crucially, it often allows us to express really reasonable ideas in a concise way.
 * 
 * 
 */



}