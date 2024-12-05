/**
 * The Christmas piano
 * Hubert Sia
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

// Arrays to store particles
let pianoParticles = [];
let backgroundParticles = [];

// Reaction state
let backgroundReaction = false;
let reactionTimer = 0;

// Amplitude analysis object
let amplitude;
let fft;

/**
 * Preloading our assets
 */
function preload() {
  
  // Load our piano keys in the loop
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/x-mas/christmas${i}.mp3`);
  }
}

/**
 * At the start of our scene
 */
function setup() {
  createCanvas(900, 500);
  background("green");
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;

  // Initialize amplitude and FFT objects
  amplitude = new p5.Amplitude();
  fft = new p5.FFT();

  // Generate initial background particles
  for (let i = 0; i < 100; i++) {
    backgroundParticles.push(new BackgroundParticle());
  }
}

/**
 * At the draw
 */
function draw() {
  background("green");

  // Update and draw background particles
  updateBackgroundParticles();

  // Draw the piano
  drawPiano();

  // Update and draw piano particles
  updatePianoParticles();

  // Visualizer (FFT)
  drawVisualizer();

  // Handle reaction timer
  if (backgroundReaction) {
    reactionTimer--;
    if (reactionTimer <= 0) {
      backgroundReaction = false;
    }
  }
}

/**
 * Draw piano
 */
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


/**
 * On the key pressed
 */
function keyPressed() {
  if (keyMap[key] !== undefined) {
    activeKey = keyMap[key];
    pianoNotes[activeKey].play();
    generatePianoParticles(activeKey);

    // Trigger background reaction
    triggerBackgroundReaction();
  }
}

/**
 * Return to null on releasde
 */
function keyReleased() {
  activeKey = null;
}

/**
 * Class for the particle system
 */
class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, -5);
    this.size = random(5, 10);
    this.lifespan = 255;
    this.color = color;
  }
  
  
/**
 * Update the movements and lifespan
 */
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.lifespan -= 5;
  }

  /**
 * Display and visualized the particles
 */
  show() {
    noStroke();
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.lifespan);
    ellipse(this.x, this.y, this.size);
  }

/**
 * Once the lifespan drops 0. Make it disapear for new ones
 */
  isDead() {
    return this.lifespan <= 0;
  }
}


/**
 * Draws our particle system when we play our piano keys
 */
function generatePianoParticles(keyIndex) {
  
  // Set the particles near the key area and each with a color
  const x = pianoKeys.position.x + keyIndex * pianoKeys.white.w + pianoKeys.white.w / 2;
  const y = pianoKeys.position.y + pianoKeys.white.h - 20;
  const keyColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  
  // Loop the colors and generate 20 particles
  for (let i = 0; i < 20; i++) {
    pianoParticles.push(new Particle(x, y, color(keyColors[keyIndex])));
  }
}

/**
 * Draws our particle system when we play our piano keys
 */
function updatePianoParticles() {
  for (let i = pianoParticles.length - 1; i >= 0; i--) {
    const particle = pianoParticles[i];
    particle.update();
    particle.show();
    if (particle.isDead()) {
      pianoParticles.splice(i, 1);
    }
  }
}

/**
 * Class for background particles
 */ 
class BackgroundParticle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-1, 1);
    this.vy = random(0.5, 2);
    this.size = random(2, 5);
    this.color = color(255, random(100, 200), random(100, 255), 150);
  }
  
/**
 * Update the movements
 */
  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around the canvas
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }

    // React to piano key presses (with sound amplitude influence)
    if (backgroundReaction) {
      
      // Get current sound amplitude
      let level = amplitude.getLevel(); 
      
      // Increase size based on sound amplitude
      this.size = random(10 + level * 50, 20 + level * 100); 
      this.color = color(random(200, 255), random(100, 255), random(100, 255), 200);
    } else {
      this.size = max(this.size - 0.1, 2);
    }
  }

  /**
   * Create the ellipse particle
   */
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}

 /**
   * Generate our particles in the background
   */
function updateBackgroundParticles() {
  for (let particle of backgroundParticles) {
    particle.update();
    particle.show();
  }
}
/**
 * The particle reaction in the background
 */ 
function triggerBackgroundReaction() {
  backgroundReaction = true;
  
  //Reaction lasts for 30 frames
  reactionTimer = 30; 
}

// Draws the audio visualizer based on FFT data
function drawVisualizer() {
  
   // Get the frequency spectrum
  let spectrum = fft.analyze(); 
  noFill();
  
  // Set stroke color to light blue 
  stroke(173, 216, 230);
  strokeWeight(2);

  // Draw the spectrum as bars
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    
    // Map the spectrum value to height
    let h = -height + map(spectrum[i], 0, 255, height, 0); 
    
    // Draw bars
    rect(x, height, width  / spectrum.length, h);
  }
}

