/**
 * The Camers buzz piano
 * Hubert Sia
 * 
 * 
 * Adds particles but with a twist. I included the camera as the background to make it stand out. 
 * Each key press triggers particles of different colors, adding a cool effect.
 * 
 * Made with p5
 * https://p5js.org/
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

// Array to track currently active keys
let activeKeys = [];

let webcam; // Webcam feed

// Colors for each key
let colors = [
   // Red for 'C'
  [255, 0, 0],   
  
   // Green for 'D'
  [0, 255, 0], 
  
  // Blue for 'E'
  [0, 0, 255], 
  
   // Yellow for 'F'
  [255, 255, 0], 
  
  // Magenta for 'G'
  [255, 0, 255],
  
  // Cyan for 'A'
  [0, 255, 255], 
  
  // White for 'B'
  [255, 255, 255] 
];


/**
 *  Preloading our assets
 */
function preload() {
  
  // Preloard our sounds in a loop
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/white-keys/white-keynote${i}.wav`);
  }
}

/**
 * At my start
 */
function setup() {
  //Create our canvas
  createCanvas(900, 500);
  background("green");
  
  // Set-up our piano position
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;

  // Initialize webcam and size
  webcam = createCapture(VIDEO);
  webcam.size(width, height);
  webcam.hide();
}

/**
 * At the draw
 */
function draw() {
  // Camera set up
  image(webcam, 0, 0, width, height);

  // Draw visuals for all active keys
  for (let keyIndex of activeKeys) {
    drawVisuals(keyIndex);
  }

  drawPiano();
}

/**
 * Draw piano
 */
function drawPiano() {
  // Loop our 7 key pianos
  for (let i = 0; i < 7; i++) {
    if (activeKeys.includes(i)) {
      
       // Highlight active key
      fill(255, 255, 0, 200);
    } else {
      
      // Normal key
      fill(255, 255, 255, 150); 
    }
    stroke("black");
    rect( pianoKeys.position.x + i * pianoKeys.white.w, pianoKeys.position.y, pianoKeys.white.w, pianoKeys.white.h);
  }
}

/**
 *  Draw the background visuals
 */
function drawVisuals(keyIndex) {
  let color = colors[keyIndex];
  noStroke();
  fill(color[0], color[1], color[2], 150);

  // Fill canvas with small ellipses
  for (let i = 0; i < 100; i++) {
    ellipse(random(width), random(height), random(5, 20));
  }
}


/**
 * On the key pressed
 */
function keyPressed() {
  if (keyMap[key] !== undefined) {
    let keyIndex = keyMap[key];
    if (!activeKeys.includes(keyIndex)) {
      
      // Add key to active keys
      activeKeys.push(keyIndex); 
      
      // Play the note
      pianoNotes[keyIndex].play(); 
    }
  }
}

/**
 * On release of the key
 */
function keyReleased() {
  
  // Found anything on the keymap array
  if (keyMap[key] !== undefined) {
    let keyIndex = keyMap[key];
    
    // Remove key from active keys
    activeKeys = activeKeys.filter(k => k !== keyIndex); 
  }
}
