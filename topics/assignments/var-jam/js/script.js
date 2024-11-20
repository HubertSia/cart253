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

// At the start
function setup() {
  createCanvas(900, 500);
  background("green");

 }





