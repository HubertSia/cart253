/**
 * Behold! EGG
 * Hubert Sia
 * 
 * A simple EGG,
 * An EGG, it has many utility. It is the beggining of a cycle
 * An EGG, a source for consuming as a food for energy
 * An EGG, a weapon to use during pranks and such
 * An EGG, has many uses
 * Let's make our great nation EGGTASTIC!!!
 * 
 * 
 * 
 */

"use strict";

// Once at the beginning of the program
function setup() {
createCanvas(640, 480);
}

// Every frame of the program
function draw() {
        drawTable();
        drawTheEgg();
        drawBG();

    
}

/*
*Draws a Table
*/
function drawTable(){
        // The table
        push();
        noStroke();
        fill(160, 82, 45);
        rect(0, 400, 640, 480);
        pop();
    
}

/*
*Draws a The E G G
*/
function drawTheEgg(){
    push();
    fill(255, 255, 255);
    ellipse(320, 270, 200, 290);
    pop();
}

