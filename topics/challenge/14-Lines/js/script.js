/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100); // Set color mode to HSB
}

function draw() {
    // Draw background gradient using horizontal lines
    for (let y = 0; y < height; y++) {
        let hue = map(y, 0, height, 0, 360); // Map y-position to hue
        stroke(hue, 80, 90); // Set color with varying hue
        line(0, y, width, y); // Draw horizontal line across the canvas
    }

    // Variables for vertical lines
    let x = 0;
    let color = 0;
    let weight = 1;
    let vLength = height;

    // Draw vertical lines across the canvas
    while (x <= width) {
        stroke(color);
        strokeWeight(weight);
        line(x, 0, x, vLength);
        
        // Increment values for next vertical line
        x += 50;
        color += 25;
        weight += 1;
        vLength -= 20;
    }

    // Variables for horizontal lines
    let y = 0;
    color = 0;
    weight = 1;
    let hLength = width;

    // Draw horizontal lines from top to bottom of the canvas
    while (y <= height) {
        stroke(color);
        strokeWeight(weight);
        line(0, y, hLength, y);

        // Increment values for next horizontal line
        y += 50;
        color += 25;
        weight += 1;
        hLength -= 20;
    }
}