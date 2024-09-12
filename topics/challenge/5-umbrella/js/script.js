/**
 * Umbrella
 * 
 */

"use strict";



function setup() {
    createCanvas(400, 400);

    
}


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