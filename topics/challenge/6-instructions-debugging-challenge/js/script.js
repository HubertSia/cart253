/**
 * An Alien
 * Pippin Barr
 *
 * It is an alien. Yep, drawing anything moderately complex with
 * shapes is pretty painful!
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    // 640x480 canvas
    createCanvas(640, 480);
}

/**
 * Draws the alien
 */
function draw() {
    // Black background
    background("black");

    drawAlien();
}

/**
 * The actual alien drawing function
 */
function drawAlien() {
    // Apply this as the default
    noStroke();

    // Draw the body
    push();
    fill(127);
    ellipse(320, 480, 300, 200);
    pop();

    // Draw the head
    push();
    fill(100);
    ellipse(320, 240, 230, 300);
    pop();

    // Draw the eyes
    push();
    fill(0);
    ellipse(250, 220, 40, 90);
    ellipse(390, 220, 40, 90);
    pop();

    // Draw the nostrils
    push();
    fill(0);
    ellipse(300, 250, 10, 10);
    ellipse(340, 250, 10, 10);
    pop();

    // Draw the mouth
    push();
    strokeWeight(10);
    stroke(0, 200, 0);
    noFill();
    angleMode(DEGREES);
    arc(320, 240, 200, 100, 65, 115);
    pop();
}