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

// Arrays to store particles
let pianoParticles = [];
let backgroundParticles = [];

// Reaction state
let backgroundReaction = false;
let reactionTimer = 0;

function preload() {
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/white-keys/white-keynote${i}.wav`);  // Added backticks around the string
  }
}

function setup() {
  createCanvas(900, 500);
  background("green");
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;

  // Generate initial background particles
  for (let i = 0; i < 100; i++) {
    backgroundParticles.push(new BackgroundParticle());
  }
}

function draw() {
  background("green");

  // Update and draw background particles
  updateBackgroundParticles();

  // Draw the piano
  drawPiano();

  // Update and draw piano particles
  updatePianoParticles();

  // Handle reaction timer
  if (backgroundReaction) {
    reactionTimer--;
    if (reactionTimer <= 0) {
      backgroundReaction = false;
    }
  }
}

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

function keyPressed() {
  if (keyMap[key] !== undefined) {
    activeKey = keyMap[key];
    pianoNotes[activeKey].play();
    generatePianoParticles(activeKey);

    // Trigger background reaction
    triggerBackgroundReaction();
  }
}

function keyReleased() {
  activeKey = null;
}

// Class for piano particles
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

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.lifespan -= 5;
  }

  show() {
    noStroke();
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.lifespan);
    ellipse(this.x, this.y, this.size);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

function generatePianoParticles(keyIndex) {
  const x = pianoKeys.position.x + keyIndex * pianoKeys.white.w + pianoKeys.white.w / 2;
  const y = pianoKeys.position.y + pianoKeys.white.h - 20;
  const keyColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

  for (let i = 0; i < 20; i++) {
    pianoParticles.push(new Particle(x, y, color(keyColors[keyIndex])));
  }
}

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

// Class for background particles
class BackgroundParticle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.vx = random(-1, 1);
    this.vy = random(0.5, 2);
    this.size = random(2, 5);
    this.color = color(255, random(100, 200), random(100, 255), 150); // Light blue shades
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Wrap around the canvas
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }

    // React to piano key presses
    if (backgroundReaction) {
      this.size = random(5, 10);
      this.color = color(random(200, 255), random(100, 255), random(100, 255), 200);
    } else {
      this.size = max(this.size - 0.1, 2); // Gradually return to normal size
    }
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}

function updateBackgroundParticles() {
  for (let particle of backgroundParticles) {
    particle.update();
    particle.show();
  }
}

function triggerBackgroundReaction() {
  backgroundReaction = true;
  reactionTimer = 30; // Reaction lasts for 30 frames
}