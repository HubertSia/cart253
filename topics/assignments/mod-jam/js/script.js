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
    "The clown is Browser by the way",
    "Pess 'F' to pay respect"


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
let font;

// Our background music
let music;


/** 
 * Our webcamera and pixel size 
 */
let capture;
let pixelSize = 10; 


/** 
 * Preload our fonts and images
 */
function preload() {
    imgBrowser = loadImage('assets/images/clown.png');
    font = loadFont('assets/fonts/minecraft.ttf');
    music = loadSound('assets/sounds/drunk_mario_theme.mp3');
}


/**
 * Creates the canvas, setting up our web cam and mic and reset the apples
 */
function setup() {

    //Create canvas
    createCanvas(640, 480);

    // Setting up the webcam video. Hides the secondary camera
    capture = createCapture(VIDEO);
    capture.hide();

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

    // Display our start screen
    if( state === "title" ){
        title();
    }
    // Display our gameplay
    else if( state === "game" ){
        game();
        

    if (!music.isPlaying()) { // Play the music only once at the start of the game
        music.loop = true;
        music.play();
    }
    }
    // Display our game over screen
    else if( state === "gameover" ){
    gameover();
    music.stop();

    }
}


/**
 * Draw our title screen
 */
function title() {

    //Set the pixelated camera-video background 
    drawPixelatedVideo(); 

    //Draw the title of the game
    push();
    textAlign(CENTER);
    fill("ffff");
    textFont(font);
    textSize(50);
    text("Don't wake up Browser", width / 2, height / 2);
    pop();

    // Draw the instruction of the game
    push();
    textFont(font);
    textAlign(CENTER);
    textSize(19);
    fill(255);
    text("Move Moshi with the mouse to grab as much apples as possible", width / 2, height / 2 + 100);
    text("Make some noise to shoot the tongue for grabbing the apple", width / 2, height / 2 + 125);
    text("Miss 10 apples, you'll get a visit from Browser and a Game Over", width / 2, height / 2 + 150);
    pop();

    // Set the score and the miss to 0
    miss = 0;
    score = 0;

    //Transition to the gameplay
    if(mouseIsPressed){
        state = "game";
    }
}

/**
 * Draw the gameplay
 */
function game() {
    
    //Set the pixelated camera-video background 
    background("white");
    background(127);
    drawPixelatedVideo(); 

    //Able to move the apples
    moveApple(); 
    
    //Tongue movement
    moveTongue();

    //Detect the tongue overlapp the apple
    checkTongueAppleOverlap();
    
    //Spawn Apples
    drawApple();
    
    //Display Score
    drawScore();  
    
    //Display Miss
    drawMiss(); 
    
    //Move Moshi
    moveMoshi();
    
    // Display Moshi
    drawMoshi();
    
    // Detect volume of the mic
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

            // If the user miss 10
            // Change state to game-over
            if(miss === 10){
                state = "gameover";
                gameoverMessage = messages[floor(random(messages.length))];

            }
    }
}

/**
 * Draws the apple as a red circle
 */
function drawApple() {
    
    // Draw a red ellipse
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
    
    // Starts at 0
    // Spawns at a random X position
    apple.y = 0;
    apple.x = random(0, 640);

    
}

/**
 * Moves the frog to the mouse position on x
 */
function moveMoshi() {
    
    // Our Moshi is move by the horizontal  position of the mouse
    // Moshi's eyes also follows the mouse position
    moshi.body.x = mouseX;
    moshi.righEye.x = mouseX - 80;
    moshi.leftEye.x = mouseX + 80;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the Moshi's x
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
 * Displays the tongue (tip and line connection) and Moshi (body)
 */
function drawMoshi() {
    // Draw the tongue tip
    push();
    fill("#00ff00");
    noStroke();
    ellipse(moshi.tongue.x, moshi.tongue.y, moshi.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#00ff00");
    strokeWeight(moshi.tongue.size);
    line(moshi.tongue.x, moshi.tongue.y, moshi.body.x, moshi.body.y);
    pop();


    // Draw Moshi's body
    push();
    fill("#D21404");
    noStroke();
    ellipse(moshi.body.x, moshi.body.y, moshi.body.size);
    pop();

    // Display the eyes
    drawEyes();

}


/**
 * Draw the eyes of Moshi
 */
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

// Draw the score 
function drawScore(){
    push();
    textFont(font);
    textAlign(RIGHT, TOP);
    fill(255);
    textSize(32);
    text("Moshi ate: "+ score, width - 20, 20); 
    pop();
}


//Draw the miss score 
function drawMiss(){
    push();
    textFont(font);
    textAlign(LEFT, TOP);
    fill(255);
    textSize(32);
    text("You miss: " + miss + "/10" , 20, 20); 
    pop();
}


/**
 * Draw the game over screen
 */
function gameover() {

    // Red background
    background("#FF0000");
    
    // Draw Browser
    imgBrowser.resize(100, 100); 
    image(imgBrowser, width / 2 - 50, height / 2 - 200);

    // Display game over text
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

    // Go back to game
    if (mouseIsPressed) {
        state = "title";
    }
    
    //Calls in the secret button
    secretButton();
    
}


/**
 * Activate secret button
 */
function secretButton(){

    
    // Check if 'x' or 'X' is pressed
    // Opens link in a new tab (wich is the free "cookies")
    if (key === 'x' || key === 'X') { 
     
    window.open("https://en.wikipedia.org/wiki/HTTP_cookie", "_blank"); 
  }

      // Check if 'f' or 'F' is pressed
    // Opens link in a new tab (Leads to Crab Rave)
    if (key === 'f' || key === 'F') { 
     
        window.open("https://youtu.be/LDU_Txk06tM?si=GMZtFGGcxx87uikD&t=73", "_blank"); 
      }
    

}

/**
 * Display up our pixelated video camera
 * 
 * Source: https://editor.p5js.org/zoewujw/sketches/ShlQBGNPg
 * 
 */
function drawPixelatedVideo() {


  //Mapping the pixel to the size of the Pixel Grid
  let gridSize = int(map(100, 0, 640, 5, 50));
  
  
  //load the pixel data from the capture
  //into pixel array
  capture.loadPixels();
  
  background(0, 150, 255);

    //Looping the pixels in our webcam
    for (let y = 0; y < capture.height; y += gridSize) {
    for (let x = 0; x < capture.width; x += gridSize) {
      
      // at the current position, get the red
      // value (an approximation for brightness)
      // and use it to create the diameter
      let index = (y * capture.width + x) * 4;
      
      // Brightness value of each pixel
      let r = capture.pixels[index];
      
      //Our diameter for our grid
      let dia = map(r, 0,255, gridSize,2);

      
      // Draw our rectangle/pixel
      // Using the diameter to caculate the grid
      fill('green');
      noStroke();
      rect(x + gridSize/20,y + gridSize/20, dia, dia);
    }
  }
}
