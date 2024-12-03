/**
 * The positive piano
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
let positive;
 // Store positive messages array
let messages;

// Tracking the active key
let activeKey = null;
let displayedMessage = "";
// Timer for the message
let messageTime = 0;

// Function to preload sounds
function preload() {
  
  // Loads our arrays of cat sounds
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/cat/meow${i}.mp3`);
  }

  //Loads our positive messages in the JSON file
  positive = loadJSON("assets/data/positive.json");
}

// Setup the canvas
function setup() {
  createCanvas(900, 500);
  background("yellow");
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;

  // Extract messages from JSON
  messages = positive.positiveMessages;
}

/**
 * Draw the piano, display the message, and handle secret button
 */
function draw() {
  drawPiano();
  displayMessage();
}

/**
 * Draw the piano keys
 */
function drawPiano() {
  for (let i = 0; i < 7; i++) {
    fill(activeKey === i ? "blue" : "white");
    stroke("black");
    rect(
      pianoKeys.position.x + i * pianoKeys.white.w,
      pianoKeys.position.y,
      pianoKeys.white.w,
      pianoKeys.white.h
    );
  }
}


/**
 * Display the random message while playing
 */
function displayMessage() {
  if (messageTime > 0) {
    fill("black");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(displayedMessage, width / 2, height - 150);
    messageTime--;
  } else {
    displayedMessage = ""; // Clear message when timer ends
  }
}

/***
 * When a key is pressed
 */
function keyPressed() {
  if (keyMap[key] !== undefined) {
    activeKey = keyMap[key];
    pianoNotes[activeKey].play();

    // Pick a random message and show it
    displayedMessage = random(messages);
    messageTime = 60; // Display for 1 second
  }

  // Secret button for 'E'
  if (key === 'e' || key === 'E') {
    window.open("https://www.funnycatpix.com/", "_blank");
  }
}

// Reset active key when released
function keyReleased() {
  activeKey = null;
}
