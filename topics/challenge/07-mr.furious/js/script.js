
/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

let sky = {
    r: 160,
    b: 180,
    g:  200,
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  
  //Truning the sky dark
  sky.r = sky.r - 1;
  sky.b = sky.b - 1;
  sky.g = sky.g - 1;
    
  background(sky.r, sky.b, sky.g);

  //We turn red by lowering the g and the b values
  mrFurious.fill.g = mrFurious.fill.g * 0.999;
  mrFurious.fill.b = mrFurious.fill.b * 0.999;

  //Mr. Furious is shaking
  mrFurious.x = mrFurious.x - random()*10;
  mrFurious.y = mrFurious.y - random()*10;



  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();
}