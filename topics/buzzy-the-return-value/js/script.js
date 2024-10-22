/**
 * Buzzy the return value
 * Pippin Barr
 * 
 * Two flies that buzz around on the canvas
 */

"use strict";

// Our flies that will buzz around


let buzzyTheFly = undefined;
let jazzyTheFly = undefined;

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);
        // A pretty calm fly
    buzzyTheFly = createFly(2);
    // A not calm fly
    jazzyTheFly = createFly(10);

}

function createFly(flybuzziness) {
    let fly = {
        // Position (random)
        x: random(100, width - 100),
        y: random(100, width - 100),
        // Size (default)
        size: 20,
        // How much to move per frame (parameter)
        buzziness: flybuzziness
    };
    return fly;
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    moveFly(buzzyTheFly);
    moveFly(jazzyTheFly);

    drawFly(buzzyTheFly);
    drawFly(jazzyTheFly);
}

/**
 * Move the fly passed in by updating its position
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

/**
 * Draw the fly passed in using its properties
 */
function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}