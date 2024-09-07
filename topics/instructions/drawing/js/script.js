/**
 * Drawing Module
 * Hubert Sia
 * 
 * Taught by Pippin Barr
 * 
 * 
 * 
 */

"use strict";


    // Once at the beginning of the program
function setup() {
    
    // A nice square canvas to work with 
    createCanvas(640, 640); 


}


/**
 * Draws a bright red record
 */
function draw() {

    // Generated a background
    background(150);
    
     /* 
    // The start of your drawing
    push();

    // Generates a circle(x, y, width, height). It generates the circle in the center(x, y) of the canvas
    ellipse(320, 320, 480);

    //Fills the color of the shape
    fill('red');

    //Modified the line of the shape
    stroke(255);

    //The end of your drawing
    pop();

*/



  // The main part of the record is red
    push();
    fill(255, 0, 0);
    stroke(255, 255, 255);
    ellipse(320, 320, 480, 480);
    pop();

    // The label on the record
    push();
    fill(255, 255, 255);
    // Wont draw the line
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();

    // The hole in the record
    push();
    fill(150, 150, 150);
    stroke(50, 50, 50);
    ellipse(320, 320, 20, 20);
    pop(); 
}