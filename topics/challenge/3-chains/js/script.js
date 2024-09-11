/**
 * Chains
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
    chains();



    }


    function chains(){
        ellipse(395, 0, 213, 306);
        ellipse(395, 210, 213, 306);
        ellipse(395, 400, 213, 306);
        ellipse(395, 600, 213, 306);
        ellipse(395, 800, 213, 306);
        noFill();
        strokeWeight(30);
    }


