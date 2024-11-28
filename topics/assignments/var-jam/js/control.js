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

// Variable to track the active key
let activeKey = null;

// Preloard the sound files on the loop
function preload() {
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/white-keys/white-keynote${i}.wav`);
  }
}


/***
 * At the start scene
 */
function setup() {
  createCanvas(900, 500);
  background("green");
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;
}



/**
 * At my draw 
 */
function draw() {
  drawPiano();
}



/**
 * Draw piano
 */
function drawPiano() {
  // Loop the shapes of the keys 7 times
  for (let i = 0; i < 7; i++) {
    fill(activeKey === i ? "yellow" : "white");
    stroke("black");
    rect(pianoKeys.position.x + i * pianoKeys.white.w, pianoKeys.position.y, pianoKeys.white.w, pianoKeys.white.h);
  }
}

/**
 * On the key pressed
 */
function keyPressed() {
  if (keyMap[key] !== undefined) {
    // Play the piano
    activeKey = keyMap[key];
    pianoNotes[activeKey].play();
  }
}

/**
 * On release of the key
 */
function keyReleased() {
  // Return to null
  activeKey = null;
}
