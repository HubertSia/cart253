/**
 * The DK piano
 * Hubert Sia
 * 
 * This one is callback to the Art-Jam. Donkey Kong is back! 
 * Every key press generates a new Donkey Kong head, and the keyboard sounds come straight from the DK Rap itself.
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



// Image of Donkey Kong
let dkImage;

// Array to store Donkey Kong image positions
let dkPositions = [];


// Track the active key
let activeKey = null;

/**
 * Preload our assets
 */
function preload() {
  
  // Load Donkey Kong image
  dkImage = loadImage('assets/images/dk_head.png'); 

  // Load in our DK piano keys
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/dk-keys/${i}dk.wav`);
  }
}


/***
 * At the start scene
 */
function setup() {
  // Draw canvas
  createCanvas(900, 500);
  background("yellow");
  
  // Set-up the key position
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;
}



/**
 * At my draw 
 */
function draw() {
  
  // Draws our piano
  drawPiano();
  
  // Draws our DK image
  drawDK();
  
  
}





/**
 * Draw piano
 */
function drawPiano() {
  // Loop the shapes of the keys 7 times
  for (let i = 0; i < 7; i++) {
    
    // When the key is pressed turn yellow and white when is idle
    fill(activeKey === i ? "brown" : "white");
    stroke("black");
    rect(pianoKeys.position.x + i * pianoKeys.white.w, pianoKeys.position.y, pianoKeys.white.w, pianoKeys.white.h);
  }
}


/**
 * Draw Donkey Kong
 */

function drawDK() {
  
    // Draw Donkey Kong images at their stored positions with random scales
  for (let dk of dkPositions) {
    
    // Scale image by random factor
    image(dkImage, dk.x, dk.y, dk.scale * 50, dk.scale * 50);
  
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
    
// Add a new Donkey Kong image at a random position with random scale
    dkPositions.push({
      
      // Ensure it fits within the canvas
      x: random(0, width - 50),
      y: random(0, height - 50),
      
      // Random scale between 0.5x and 2x
      scale: random(0.5, 2), 
    });
    
  }
}

/**
 * On release of the key
 */
function keyReleased() {
  // Return to null
  activeKey = null;
}
