/**
 * The piano
 * Hubert Sia
 * 
 * A normal piano, which serves as the default version and our control for comparing the variations.

 * 
 * 
 */

"use strict";

// Array to store sound files
let pianoNotes = [];

// Key mappings to notes
let keyMap = {
  
  // C note
  a: 0,
  
  // D note
  s: 1, 
  
  // E note
  d: 2, 
  
  // F note
  f: 3,
  
  // G note
  g: 4, 
  
  // A note
  h: 5, 
  
  // B note
  j: 6, 
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

// Track the active key
let activeKey = null;

// Preloard the sound files on the loop
function preload() {
  
  // Loop our piano keys
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/white-keys/white-keynote${i}.wav`);
  }
}


/***
 * At the start scene
 */
function setup() {
  // Create our canvas
  createCanvas(900, 500);
  background("green");
  
  // Set-up our key position
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;
}



/**
 * At my draw 
 */
function draw() {
  
  // Display the piano 
  drawPiano();
}



/**
 * Draw piano
 */
function drawPiano() {
  // Loop the shapes of the keys 7 times
  for (let i = 0; i < 7; i++) {
    // Active turn yellow, white on idle
    fill(activeKey === i ? "yellow" : "white");
    stroke("black");
    rect(pianoKeys.position.x + i * pianoKeys.white.w, pianoKeys.position.y, pianoKeys.white.w, pianoKeys.white.h);
  }
}

/**
 * On the key pressed
 */
function keyPressed() {
  
  // Check on my keymap for anything
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
