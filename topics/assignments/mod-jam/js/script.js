/**
 * Don't wake up Browser
 * Hubert Sia
 *  
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our tables for the messages
const messages  = [

    "Well you tried...",
    "Well, at least Browser will settle you for breakfest",
    "Press 'X' for a free cookie",
    "HIPPITY HOPPITY, here goes your life ",
    "Am I getting sue by Nintendo© for this?",
    "When life gives you apples, do not wake up the turtle -Sun Tzu",
    "Moshi are you there! Moshi.... MOOOOOOSHHIIII!",
    "The clown is Browser by the way"

];

//Empty array for the game over message
let gameoverMessage = "";


// Our Moshi
const moshi = {
    // The Moshi's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The Moshi's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },

    //Moshi's left eye
    leftEye: {
        x: 320,
        y: 450,
        size: 75

    },


    //Moshi's right eye
    righEye: {
        x: 320,
        y: 450,
        size: 75
    }
};


//Browser's positions
let imgBrowser = {
    x: 320,
    y: 260,
};

// Our apple
// Has a position, size, and speed of vertical movement
const apple = {
    x: 200,
    y: 520, // Will be random
    size: 30,
    speed: 5
};



/**
 * The score of points and misses
 */
let score = 0;
let miss = 0;

// Current state
let state = 'title';// State are title, game, game over

// Our microphone
let mic;

// Threshold sensitivity
const shoutThreshold = 0.04;

// Our custom fonts
let font


/** 
 * Our webcamera and pixel size 
 */
let video;
let pixelSize = 10; 


/** 
 * Preload our fonts and images
 */
function preload() {
    imgBrowser = loadImage('assets/images/clown.png');
    font = loadFont('assets/fonts/minecraft.ttf');
}


/**
 * Creates the canvas, setting up our web cam and mic and reset the apples
 */
function setup() {

    //Create canvas
    createCanvas(640, 480);

    // Setting up the webcam video. Hides the secondary camera
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.size(640 / pixelSize, 480 / pixelSize); 
    video.hide();

    // Set up for our microphone
    mic = new p5.AudioIn();
    mic.start();


    // Give the fly its first random position
    resetApple();



}



/**
 * Updates our game states
 */
function draw() {

    // Draw our start screen
    if( state === "title" ){
        title();
    }
    // Draw our gameplay
    else if( state === "game" ){
        game();
    }
    // Draw our game over screen
    else if( state === "gameover" ){
    gameover();
    }
}



function title(){
    background(127);
    image(video, 0,0);
    drawPixelatedVideo(); 

    push();
    textAlign(CENTER);
    fill("ffff");
    textFont(font);
    textSize(50);
    text("Don't wake up Browser", width / 2, height / 2);
    pop();

    push();
    textFont(font);
    textAlign(CENTER);
    textSize(18);
    fill(255);
    text("Move Moshi with the mouse to grab as much apples as possible", width / 2, height / 2 + 100);
    text("Make some noice to shoot the tongue for grabbing the apple", width / 2, height / 2 + 120);
    text("Miss 10 apples, you'll get a visit from Browser and a Game Over", width / 2, height / 2 + 140);

    pop();

    miss = 0;
    score = 0;

    if(mouseIsPressed){
        state = "game";
    }
}



function game(){
    
    background("#87ceeb");
    background(127);
    image(video, 0,0);
    drawPixelatedVideo(); 

    moveApple();    
    moveTongue();
    checkTongueAppleOverlap();
    drawApple();
    drawScore();  
    drawMiss();  
    moveMoshi();
    drawMoshi();
    checkVolume();

}


/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveApple() {
    // Move the fly
    apple.y += apple.speed;
    // Handle the fly going off the canvas
    if (apple.y > width) {
        resetApple();

            // Increase miss
            miss = miss + 1;
            console.log(miss);


            if(miss === 10){
                state = "gameover";
                gameoverMessage = messages[floor(random(messages.length))];

            }
    }
}

/**
 * Draws the fly as a black circle
 */
function drawApple() {
    push();
    noStroke();
    fill("#FF0000");
    ellipse(apple.x, apple.y, apple.size);
    pop();
}




/**
 * Resets the fly to the left with a random y
 */
function resetApple() {
    apple.y = 0;
    apple.x = random(0, 640);

    
}

/**
 * Moves the frog to the mouse position on x
 */
function moveMoshi() {
    moshi.body.x = mouseX;
    moshi.righEye.x = mouseX - 80;
    moshi.leftEye.x = mouseX + 80;
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
    fill("#046200");
    noStroke();
    ellipse(moshi.tongue.x, moshi.tongue.y, moshi.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#046200");
    strokeWeight(moshi.tongue.size);
    line(moshi.tongue.x, moshi.tongue.y, moshi.body.x, moshi.body.y);
    pop();


    // Draw the frog's body
    push();
    fill("#D21404");
    noStroke();
    ellipse(moshi.body.x, moshi.body.y, moshi.body.size);
    pop();

    drawEyes();

}

function drawEyes() {
    // Draw the left eye
    push();
    fill("#FFFFFF");
    ellipse(moshi.leftEye.x, moshi.leftEye.y, moshi.leftEye.size);
    pop();

    // Draw the right eye
    push();
    fill("#FFFFFF");
    ellipse(moshi.righEye.x, moshi.righEye.y, moshi.righEye.size);
    pop();

    // Draw the retinas in the left and right eyes
    push();
    fill("#000000");
    noStroke();
    ellipse(moshi.leftEye.x, moshi.leftEye.y, 25); 
    pop();

    push();
    fill("#000000");
    noStroke();
    ellipse(moshi.righEye.x, moshi.righEye.y, 25); 
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueAppleOverlap() {
    // Get distance from tongue to fly
    const d = dist(moshi.tongue.x, moshi.tongue.y, apple.x, apple.y);
    // Check if it's an overlap
    const eaten = (d < moshi.tongue.size/2 + apple.size/2);
    if (eaten) {

        // Increase score
        score = score + 1;
        ///console.log(score);

        // Reset the fly
        resetApple();
        // Bring back the tongue
        moshi.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on when my mic hears a sound (if it's not launched yet)
 */
function checkVolume(){
    let volume = mic.getLevel();
    if (volume > shoutThreshold && moshi.tongue.state === "idle") {
        moshi.tongue.state = "outbound";
}
}

// the score 
function drawScore(){
    push();
    textFont(font);
    textAlign(RIGHT, TOP);
    fill(255);
    textSize(32);
    text("Moshi ate: "+ score, width - 20, 20); 
    pop();
}


// the miss score 
function drawMiss(){
    push();
    textFont(font);
    textAlign(LEFT, TOP);
    fill(255);
    textSize(32);
    text("You miss: " + miss + "/10" , 20, 20); 
    pop();
}



function gameover() {


    background("#FF0000");
    
    imgBrowser.resize(100, 100); 
    image(imgBrowser, width / 2 - 50, height / 2 - 200);

    push();
    fill("ffff");
    textFont(font);
    textAlign(CENTER);
    textSize(32);
    fill(255);
    text("GAME OVER", width / 2, height / 2);
    text("Continue?", width / 2, height / 2 + 150);
    pop();





    
    // Show the random message set once during game over
    push();
    textFont(font);
    textAlign(CENTER);
    textSize(20);
    fill(255);
    text(gameoverMessage, width / 2, height / 2 + 100);
    pop();

    if (mouseIsPressed) {
        state = "title";
    }
 if (key === 'x' || key === 'X') { // Check if 'x' or 'X' is pressed
    window.open("https://en.wikipedia.org/wiki/HTTP_cookie", "_blank"); // Opens link in a new tab
  }

    
}

function drawPixelatedVideo() {

    image(video, 0, 0, width, height);
    video.loadPixels();

    for (let y = 0; y < video.height; y += pixelSize) {
        for (let x = 0; x < video.width; x += pixelSize) {
            let index = (x + y * video.width) * 10;
            let r = video.pixels[index + 0];
            let g = video.pixels[index + 1];
            let b = video.pixels[index + 2];

            fill(r, g, b);
            noStroke();
            rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
    }
}
