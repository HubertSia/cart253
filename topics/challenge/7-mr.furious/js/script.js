
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

// The sky fill
let sky = {
    r: 160,
    b: 180,
    g: 200,
};

// The annoying bird
let bird = {

  x: 0,
  y: 0,
  size: 10,
  speed: 0.25


};


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
  sky.r -= 1;
  sky.b -= 1;
  sky.g -= 1;
    
  background(sky.r, sky.b, sky.g);

  //We turn red by lowering the g and the b values
  mrFurious.fill.g -= 1;
  mrFurious.fill.b -= 1;

  //Mr. Furious is shaking
  mrFurious.x = width/2 + random()*10;
  mrFurious.y = width/2 +random()*10;

  //Move bird
  bird.x += bird.speed;
  bird.y += bird.speed;

  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();



 // draw the bird

 push();
 noStroke();
 fill('yellow');
 rectMode(CENTER);
 rect(bird.x, bird.y, bird.size, bird.size)
 pop();


}