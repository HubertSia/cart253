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


function theFace(){
       // push();
        ellipse(400, 400, 600, 600);    
        fill(0, 0, 0);    
        strokeWeight(20);
       // pop();
}


function theEyes(){
        //push();
        ellipse(250, 300, 50, 130);
        ellipse(550, 300, 50, 130);
        noFill();
        //pop();
}


function theSmile(){


      arc(400, 500, 400, 300, HALF_PI, PI);

}