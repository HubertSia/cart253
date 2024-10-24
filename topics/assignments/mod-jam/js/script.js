/**
 * Moshi vs Browser
 * Hubert Sia
 * 
 * Moshi th 
 * 
 * Instructions:
 * Moshi (bootleg Yoshi) eating apple-wings
 * Not letting Browser (bootleg Bowser) grapping 10 apple-wings

 * Idea:
 * With the Frogfrogfrog project as our base template. It's going to be revamp game with a bootleg characters of Yoshi and Bowser
 * A title with instructions, and ending screen.\
 *A mic control system wich allows the players to shout to activate the tongue. (Suggested to use the map function)
 *The sound plays when ate the flying apples
 *Apple wings spawns at a random positions (from left to right or right to left)
 *Make sure the players grab as much the apple-wings as possible. If players miss 10 apples, Browser wins a it is consider a game over.
 * 
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const moshi = {
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

const browser = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    }
}
// Our applewing
// Has a position, size, and speed of horizontal movement
const applewing = {
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
    resetAppleFly();
}

function draw() {
    if( state === "title" ){
        title();
    }else if( state === "game" ){
        game();
    }else if( state === "gameover" ){
    gameover();
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
    moveAppleWing();    
    moveTongue();
    checkTongueAppleWingOverlap();
    drawAppleWing();
    drawScore();    
    moveMoshi();
    drawMoshi();



}


/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveAppleWing() {
    // Move the fly
    applewing.x += applewing.speed;
    // Handle the fly going off the canvas
    if (applewing.x > width) {
        resetAppleFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawAppleWing() {
    push();
    noStroke();
    fill("#000000");
    ellipse(applewing.x, applewing.y, applewing.size);
    pop();
}




/**
 * Resets the fly to the left with a random y
 */
function resetAppleFly() {
    applewing.x = 0;
    applewing.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveMoshi() {
    moshi.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    moshi.tongue.x = moshi.body.x;
    // If the tongue is idle, it doesn't do anything
    if (moshi.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (moshi.tongue.state === "outbound") {
        moshi.tongue.y += -moshi.tongue.speed;
        // The tongue bounces back if it hits the top
        if (moshi.tongue.y <= 0) {
            moshi.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (moshi.tongue.state === "inbound") {
        moshi.tongue.y += moshi.tongue.speed;
        // The tongue stops if it hits the bottom
        if (moshi.tongue.y >= height) {
            moshi.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawMoshi() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(moshi.tongue.x, moshi.tongue.y, moshi.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(moshi.tongue.size);
    line(moshi.tongue.x, moshi.tongue.y, moshi.body.x, moshi.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(moshi.body.x, moshi.body.y, moshi.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueAppleWingOverlap() {
    // Get distance from tongue to fly
    const d = dist(moshi.tongue.x, moshi.tongue.y, applewing.x, applewing.y);
    // Check if it's an overlap
    const eaten = (d < moshi.tongue.size/2 + applewing.size/2);
    if (eaten) {

        // Increase score
        score = score + 1;
        console.log(score);

        // Reset the fly
        resetAppleFly();
        // Bring back the tongue
        moshi.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (moshi.tongue.state === "idle") {
        moshi.tongue.state = "outbound";
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