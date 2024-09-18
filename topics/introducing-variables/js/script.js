/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

function setup() {
    // Create the canvas
    createCanvas(480, 480);
}

function draw() {
    background(0);
    
   // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(255, 255, 0);
    // If we set the ellipse's (x,y) coordinates to
    // *half* the width and *half* the height, it will
    // always end up in the centre of our canvas.
    // That's math, baby! / means division
    ellipse(width/2, height/2, 100, 100);
    pop();
}