/**
 * The piano
 * Hubert Sia
 */

"use strict";

// Array to store sound files
let pianoNotes = [];

// Key mappings to notes
let keyMap = {
  'a': 0, // C
  's': 1, // D
  'd': 2, // E
  'f': 3, // F
  'g': 4, // G
  'h': 5, // A
  'j': 6, // B
};

// Piano dimensions
let whiteKeyWidth = 90;
let whiteKeyHeight = 400;
let blackKeyWidth = 60;
let blackKeyHeight = 200;
let pianoX; 
let pianoY = 50; 

// Preload the piano keys sounds
function preload() {
 // for (let i = 0; i < 7; i++) {
    //pianoNotes[i] = loadSound("assets/sounds/bark${i}.wav"); // Replace with actual file paths
 // }
}

/**
 * Creates the canvas, setting up our program
 */
function setup() {
  createCanvas(900, 500);
  background("green");
  
  // Caculate the starting X to center the piano
  let pianoWidth =  7 * whiteKeyWidth;
  pianoX = (width - pianoWidth) / 2;

 }



/**
 * Updates our game states
 */
function draw() {
  drawPiano();
}


// draw the piano
function drawPiano() {

  // Set up our loop for white keys
  for (let i = 0; i < 7; i++) {
    fill("white");
    stroke("black");
    rect(pianoX + i * whiteKeyWidth, pianoY, whiteKeyWidth, whiteKeyHeight);
  }

  //Set up our loop for black keys
  for (let i = 0; i < 6; i++) {
    if (i !== 2) { 
      fill("black");
      rect(pianoX + i * whiteKeyWidth + whiteKeyWidth * 0.72, pianoY, blackKeyWidth, blackKeyHeight);
    }
   }
}
