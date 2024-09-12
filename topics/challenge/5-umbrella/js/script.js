/**
 * Git Workflow Example
 * Pippin Barr
 * 
 * Some sample code for playing with version control.
 * Draws a pyramid in the centre of the canvas and a
 * red circle at the user's mouse position.
 */

"use strict";

/**
 * Create a canvas, hides the cursor
*/
function setup() {
    // A 640x480 canvas
    createCanvas(400, 400);

    // Don't show the cursor!
    noCursor();
}

/**
 * Draws a top-down view of a pyramid and also a red circle
 * at the position of the user's cursor
*/
function draw() {
    background("red");

    push();
    strokeWeight(10);
    line(200, 200, 200, 300);
    pop();


    push();
    noFill();
    stroke('yellow');
    strokeWeight(10);
    arc(220, 300, 40, 60, 0, PI);
    pop();

    beginShape();
    fill('blue');
    arc( 200, 200, 200, 200, PI, 0);
    arc(266, 200, 66, 66, P1, 0)
   
}