/**
 * Smile face
 * 
 * 
 * 
 */

"use strict";



function setup() {
    createCanvas(800, 800);

}


function draw() {
        background(255, 255, 0);
        theFace();
        theEyes();
        theSmile();
}


function theFace() {
        push();
        noFill();
        strokeWeight(20);
        ellipse(400,400, 600, 600);    
        pop();
}


function theEyes() {
        push();
        fill(0, 0, 0);    
        strokeWeight(20);
        ellipse(250, 300, 50, 130);
        ellipse(550, 300, 50, 130);
        pop();
}


function theSmile() {

      pop();
      noFill();
      strokeWeight(20); 
      arc(400, 500, 400, 300, 0, PI);
      push();
}