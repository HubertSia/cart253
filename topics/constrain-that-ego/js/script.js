/**
 * Constrain that Ego!
 * Pippin Barr
 * 
 * This ego is out of control...
 */

"use strict";

// My ego
let ego = {
    x: 200,
    y: 200,
    size: 1,
    fill: 200
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Updates (expands and darkens) and displays the ego
 */
function draw() {
    // Pink background
    background(255, 200, 200);

    // Update the ego
    // Fill gets darker, symbolizing the negative energy
    ego.fill = ego.fill - 0.5;
    // Size gets bigger, symbolizing taking up emotional space
    ego.size = ego.size + 1;
    // Constrain the ego between 0 and the width of the canvas
    ego.size = constrain(ego.size, 0, width);
    

/**
*As you can see constrain() takes three arguments:

-The number to constrain (this is often in a variable!)
-The minimum the number is allowed to be
-The maximum the number is allowed to be
constrain() will take that information and give back 
a version of the first number that is constrained to be within the minimum and maximum.
**/


    // Draw the ego
    push();
    noStroke();
    fill(ego.fill);
    ellipse(ego.x, ego.y, ego.size);
    pop();
}