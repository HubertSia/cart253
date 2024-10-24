/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 0
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    width: 80,
    height: 10
};

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
    moveBall(ball);

    drawBlock(paddle);
    drawBlock(ball);

    handleBounce(ball, paddle);


}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
  if (keyIsDown(LEFT_ARROW)) {
    paddle.x -= 5;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    paddle.x += 5;
  }
}

/**
 * Moves the ball
 */
function moveBall(ball) {
    
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

function handleBounce(ball, paddle) {

}



function drawBlock(paddle, ball){

    
    drawPaddle();
    drawBall();
}

/**
 * Draws the paddle on the canvas
 */
function drawPaddle() {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(paddle.x, paddle.y, paddle.width, paddle.height);
    pop();
}

/**
 * Draws the ball on the canvas
 */
function drawBall() {
    push();
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(ball.x, ball.y, ball.width, ball.height);
    pop();
}

