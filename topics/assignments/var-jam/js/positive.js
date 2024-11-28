/**
 * The piano
 * Hubert Sia
 */

"use strict";

// Array to store sound files
let pianoNotes = [];

// Key mappings to notes
let keyMap = {
  a: 0, // C
  s: 1, // D
  d: 2, // E
  f: 3, // F
  g: 4, // G
  h: 5, // A
  j: 6, // B
};

// Piano dimensions
const pianoKeys = {
  position: {
    x: undefined,
    y: 50,
  },
  white: {
    w: 90,
    h: 400,
  },
};

// Messages to display
const messages = [
  "Believe in yourself!",
  "Love your hair!",
  "Nice piano piece!",
  "You are great!",
  "You should become a musicision!",
  "Keep on pressing!",
  "Press 'E' ",
];

// Variable to track the active key
let activeKey = null;
let displayedMessage = "";
let messageTime = 0;

// Function to preload sounds
function preload() {
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/white-keys/white-keynote${i}.wav`);
  }
}

// Setup the canvas
function setup() {
  createCanvas(900, 500);
  background("green");
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;
}

// Draw the piano and display the message
function draw() {
  drawPiano();
  displayMessage();
  secretButton();
}

// Draw the piano keys
function drawPiano() {
  for (let i = 0; i < 7; i++) {
    fill(activeKey === i ? "yellow" : "white");
    stroke("black");
    rect(
      pianoKeys.position.x + i * pianoKeys.white.w,
      pianoKeys.position.y,
      pianoKeys.white.w,
      pianoKeys.white.h
    );
  }
}

// Display the random message while playing
function displayMessage() {
  if (messageTime > 0) {
    fill("black");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(displayedMessage, width / 2, height - 150);
    messageTime--;
  }
}

// When a key is pressed
function keyPressed() {
  if (keyMap[key] !== undefined) {
    activeKey = keyMap[key];
    pianoNotes[activeKey].play();
    
    // Pick a random message and show it immediately, reset messageTime
    displayedMessage = random(messages);
    messageTime = 60; // The message will display for ~1 second
  }
}

// Reset active key when released
function keyReleased() {
  activeKey = null;
}

/**
 * Activate secret button
 */
function secretButton(){


    // Check if 'f' or 'F' is pressed
    // Opens link in a new tab (Leads to Crab Rave)
    if (key === 'e' || key === 'E') { 
     
        window.open("https://www.funnycatpix.com/","_blank"); 
      }
    

}