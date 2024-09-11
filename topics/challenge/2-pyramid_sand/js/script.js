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
        pyramid();
        pyramid2();
        
}

function sand(){

    //push();
    ellipse(0, 600, 725, 590);
    ellipse(590, 750, 970, 690);
    noStroke();
    fill(255, 210, 0); 
    //pop();
}



function pyramid(){

    //push();
    triangle(185, 485, 390, 530, 325, 287);
    fill(128, 128, 128);
    noStroke();
    //pop();
}

function pyramid2(){
    triangle(390, 530, 485, 460, 325, 287);
    fill(255, 255, 0);    
    noStroke();
}