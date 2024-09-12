/**
 * Italian flag
 * 
 */

"use strict";


function setup() {
    createCanvas(790, 755);


}



function draw() {
    background(99, 140, 250);
    redFlag();
    whiteFlag();
    greenFlag();
}

function redFlag(){

        push();
        noStroke();
        fill(250, 0, 0);
        rect(500, 190, 200, 400);
        pop();

}


function whiteFlag(){

        push();
        noStroke();
        fill(0, 128, 1);
        rect(300, 190, 200, 400);
        pop();

}



function greenFlag(){

        push();
        noStroke();
        fill(125, 125, 125);
        rect(100, 190, 200, 400);
        pop();

}