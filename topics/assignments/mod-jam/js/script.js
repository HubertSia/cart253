/**
 * Moshi vs Browser
 * Pippin Barr
 * 
 * # Planning

## Starting point

The initial idea:

> Moshi (bootleg Yoshi) eating apple-wings
> Not letting Browser (bootleg Bowser) grapping 10 apple-wings

## Experience design

The experience:

> The user plays as Moshi the friendly dinosaur. Their goal is to consume 10 apple-wings that will move on screen
> by shooting the tongue with a voice mic. They have to avoid 10 misses or else Browser will win the game

## Breaking it down

Basic things to do:

- Draw the Moshi (Bascically draw the head of bootleg Yoshi)
- Draw Moshi's tongue
- Move the Moshi with the mouse movement (X axis)
- Move the apple-wings, it will spawn on both edges of the canvas (moving in a random Y Axis, and flying on a linear direction)
- Figure out if the tongue hits the fly?
- Adding a score points of 10

Questions:

- What does the Moshi look like?
  - He is composes of a lot of circles and oval ellipse
- How does the user control the Moshi?
  - User controls the dinosaur with the mouse position, just to the left and right
  - User launches the tongue with a mic sounds. They need to shout to the mic in order to launch the TONGUE
- How does the apple-wings move?
  - The apple-wings starts on the left at a random y position, and moves to the right in a line
  - It will also starts on the right at a random y position, and moves to the left in a line
- What does the tongue look like?
  - A red line coming out from Moshi
- What happens if the user doesn't consume the apple-wings?
  - If the apple-wings from the left/right goes off the right/left side, it just resets to a new random y on the left/right.
  - If the players contiues to miss 10 times. It will be a game over, showing Browser with a mencacing look
- What does it all look like on the screen? Layout?
  - At the start, they will be a menu screen, giving the intro information on how it works
  - In the game, Moshi at the bottom, fly moving across, tongue shooting out of frog
  - Moshi must consume as much apple-wings as possible before Browser reaches to 10
  - If the players miss the apple-wings 10 times. It will be consider a game over
 * 
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};



// The current score
let score = 0;

// Current state
let state = 'title';


/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
}

function draw() {
    if( state === "title" ){
        title();
    }else if( state === "game" ){
        game();
    }else if (state === "game-over"){
        
    }
}



function title(){
    background(127);

    push();
    text("FROGFROGFROG", 100, 100);
    pop();


    if(mouseIsPressed){
        state = "game";
    }
}



function game(){
    
    background("#87ceeb");
    moveFly();    
    moveTongue();
    checkTongueFlyOverlap();
    drawFly();
    drawScore();    
    moveFrog();
    drawFrog();



}


/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}




/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size/2 + fly.size/2);
    if (eaten) {

        // Increase score
        score = score + 1;
        console.log(score);

        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}





// the score mechanic
function drawScore(){
    push();
    textAlign(RIGHT, TOP);
    textSize(32);
    text(score, width, 0);
    pop();
}