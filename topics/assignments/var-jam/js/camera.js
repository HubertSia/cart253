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

// Array to track currently active keys
let activeKeys = [];

let webcam; // Webcam feed

// Colors for each key
let colors = [
  [255, 0, 0],    // Red for 'C'
  [0, 255, 0],    // Green for 'D'
  [0, 0, 255],    // Blue for 'E'
  [255, 255, 0],  // Yellow for 'F'
  [255, 0, 255],  // Magenta for 'G'
  [0, 255, 255],  // Cyan for 'A'
  [255, 255, 255] // White for 'B'
];

function preload() {
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/white-keys/white-keynote${i}.wav`);
  }
}

function setup() {
  createCanvas(900, 500);
  background("green");
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;

  // Initialize webcam 
  webcam = createCapture(VIDEO);
  webcam.size(width, height);
  webcam.hide();
}

function draw() {
  image(webcam, 0, 0, width, height);

  // Draw visuals for all active keys
  for (let keyIndex of activeKeys) {
    drawVisuals(keyIndex);
  }

  drawPiano();
}

function drawPiano() {
  for (let i = 0; i < 7; i++) {
    if (activeKeys.includes(i)) {
      fill(255, 255, 0, 200); // Highlight active key
    } else {
      fill(255, 255, 255, 150); // Normal key
    }

    stroke("black");
    rect(
      pianoKeys.position.x + i * pianoKeys.white.w,
      pianoKeys.position.y,
      pianoKeys.white.w,
      pianoKeys.white.h
    );
  }
}

function drawVisuals(keyIndex) {
  let color = colors[keyIndex];
  noStroke();
  fill(color[0], color[1], color[2], 150);

  // Fill canvas with small ellipses
  for (let i = 0; i < 100; i++) {
    ellipse(random(width), random(height), random(5, 20));
  }
}

function keyPressed() {
  if (keyMap[key] !== undefined) {
    let keyIndex = keyMap[key];
    if (!activeKeys.includes(keyIndex)) {
      activeKeys.push(keyIndex); // Add key to active keys
      pianoNotes[keyIndex].play(); // Play the note
    }
  }
}

function keyReleased() {
  if (keyMap[key] !== undefined) {
    let keyIndex = keyMap[key];
    activeKeys = activeKeys.filter(k => k !== keyIndex); // Remove key from active keys
  }
}
