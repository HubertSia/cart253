/**
 * Welcome to the piano
 * Hubert Sia

 * 
 * 
 * 
 */

"use strict";

// The variable state mode



// Preload the image and the music
function preload() {


}






// Once at the beginning of the program
function setup() {
        //Create the canvas
        createCanvas(900, 500);
        background("red")


}

// Every frame of the program
function draw() {
        push();
        rect(0 , 50 , 90, 400);
        rect(100 , 50 , 90, 400);
        rect(200 , 50 , 90, 400);
        rect(300 , 50 , 90, 400);
        rect(400 , 50 , 90, 400);
        rect(500 , 50 , 90, 400);
        rect(600 , 50 , 90, 400);
        pop();



        push();
        fill('black')
        rect(65 , 50 , 60, 200);
        rect(165, 50 , 60, 200);
        rect(365, 50 , 60, 200);
        rect(465, 50 , 60, 200);
        rect(565, 50 , 60, 200);
        pop();


    
}










