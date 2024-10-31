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


const messages = [

    "Well you tried...",
    "Well, at least Browser will settle you for breakfest",
    "Press 'X' for a free cookie during gameplay ",
    "HIPPITY HOPPITY, here goes your life ",
    "Am I getting sue by Nintendo© for this?",
    "When life gives you apples, do not wake up the turtle -Sun Tzu",
    "Moshi are you there! Moshi.... MOOOOOOSHHIIII!"

];



// Our frog
const moshi = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 250
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },

    leftEye: {
        x: 320,
        y: 400,
        size: 75

    },

    righEye: {
        x: 320,
        y: 400,
        size: 75
    }
};

let imgBrowser = {
    x: 320,
    y: 260,
};
// Our apple
// Has a position, size, and speed of horizontal movement
const apple = {
    x: 200,
    y: 520, // Will be random
    size: 30,
    speed: 5
};



// The current score
let score = 0;
let miss = 0;

// Current state
let state = 'title';

// Our microphone
let mic;

 // Threshold based on your microphone sensitivity
const shoutThreshold = 0.04;

let font

function preload() {
    imgBrowser = loadImage('assets/images/clown.png');
    font = loadFont('assets/fonts/minecraft.ttf');
}


let video;



/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    // Our microphone is our audio 
    mic = new p5.AudioIn();
    mic.start();


    // Give the fly its first random position
    resetApple();



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
    image(video, 0,0);
    

    push();
    textAlign(CENTER);
    fill("ffff");
    textFont(font);
    textSize(50);
    text("Don't wake up Browser", width / 2, height / 2);
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
            }
    }
}

/**
 * Draws the fly as a black circle
 */
function drawApple() {
    push();
    noStroke();
    fill("#000000");
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

function drawEyes(){
        

    
    //Draw the eyes

        push();
        fill("#FFFFF");
        ellipse(moshi.leftEye.x, moshi.leftEye.y, moshi.leftEye.size)
        pop();

        push();
        ellipse(moshi.righEye.x, moshi.righEye.y, moshi.righEye.size)
        fill("#FFFFF");
        pop();


    //Draw the eyes retinals
    push();
    fill("#000000");
    noStroke();
    ellipse(moshi.leftEye.x, moshi.leftEye.y, 50)
    pop();

    push();
    fill("#000000");
    noStroke();
    ellipse(moshi.righEye.x, moshi.righEye.y, 50)
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

// the score mechanic
function drawScore(){
    push();
    textAlign(RIGHT, TOP);
    textSize(32);
    text(score, width, 0);
    pop();
}


// the score mechanic
function drawMiss(){
    push();
    textAlign(LEFT, TOP);
    textSize(32);
    text(miss, width, 0);
    pop();
}



function gameover(){

    background(127);


    push();
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);
    pop();

    image(imgBrowser);

//Size of the DK head
    push()    
    imgBrowser.resize(200, 200);
    pop();


    if(mouseIsPressed){
        state = "title";
    }

}