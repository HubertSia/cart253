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

let webcam; // Webcam feed

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
  background("green");

  image(webcam, 0, 0, width, height);

  drawPiano();
}

function drawPiano() {
  for (let i = 0; i < 7; i++) {
    // Add transparency 
    if (activeKey === i) {
      fill(255, 255, 0, 200);
    } else {
      fill(255, 255, 255, 150);
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

function keyPressed() {
  if (keyMap[key] !== undefined) {
    activeKey = keyMap[key];
    pianoNotes[activeKey].play();
  }
}

function keyReleased() {
  activeKey = null;
}
