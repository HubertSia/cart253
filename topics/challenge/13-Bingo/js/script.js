

/**
 * Boingo
 * Pippin Barr
 *
 * Multiple balls that bounce around on the canvas
 */

"use strict";


let balls = []; // Array to store multiple balls

/**
 * Set up the canvas and populate the balls array
 */
function setup() {
  createCanvas(400, 400);
  // Add five balls to start with different initial positions
  
  for (let i = 0; i < 5; i++) {
    balls.push(createBall(random(width), random(height)));
  }
}

/**
 * Creates a random ball at the specified x and y position
 */
function createBall(x, y) {
  const newBall = {
    x: x,
    y: y,
    size: 20,
    fill: "#000000",
    velocity: {
      x: random(-5, 5),
      y: random(-5, 5)
    }
  };
  return newBall;
}

/**
 * Moves and draws each ball
 */
function draw() {
  background("#87ceeb");

  // Loop through all balls and move, bounce, and draw each one
  for (let ball of balls) {
    moveBall(ball);
    bounceBall(ball);
    drawBall(ball);
  }
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ball) {
  ball.x += ball.velocity.x;
  ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ball) {
  const bounceX = (ball.x > width || ball.x < 0);
  const bounceY = (ball.y > height || ball.y < 0);

  if (bounceX) {
    ball.velocity.x *= -1;
  }
  if (bounceY) {
    ball.velocity.y *= -1;
  }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {
  push();
  noStroke();
  fill(ball.fill);
  ellipse(ball.x, ball.y, ball.size);
  pop();
}

/**
 * Adds a new ball at the mouse position when the canvas is clicked
 */
function mousePressed() {
  balls.push(createBall(mouseX, mouseY));
}
