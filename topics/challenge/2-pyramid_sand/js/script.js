/**
 * Pyramid and sand
 *
 */

"use strict";


function setup() {
    createCanvas(790, 755);

}


function draw() {
        background(99, 140, 250);
        sand();
        
}

function sand(){

    //push();
    ellipse(0, 600, 725, 590);
    ellipse(590, 750, 870, 590);
    noStroke();
    fill(255, 255, 0)
    //pop();
}