/**
 * The positive piano
 * Hubert Sia
 * 
 * This one is all about positivity. 
 * The keyboard makes cat meowing sounds—because why not?—and displays positive messages at the same time. 
 * I also added a secret button, just for fun. The idea behind this is that life is always filled with positivity if you look for it.

 * 
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

// Messages to display
let positive;

 // Store positive messages array
let messages;

// Tracking the active key
let activeKey = null;

// Display the message
let displayedMessage = "";

// Timer for the message
let messageTime = 0;

/**
 *  Preloading our assets
 */
function preload() {
  
  // Loads our arrays of cat sounds
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/cat/meow${i}.mp3`);
  }

  //Loads our positive messages in the JSON file
  positive = loadJSON("assets/data/positive.json");
}

/**
 * At the start of our scene
 */
function setup() {
  
  //Create our canvas
  createCanvas(900, 500);
  background("yellow");
  
  //Set-up our key position
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;

  // Extract messages from JSON
  messages = positive.positiveMessages;
}

/**
 * Draw the piano, display the message, and handle secret button
 */
function draw() {
  
  // Draw our keyboards
  drawPiano();
  
  // Draw our message
  displayMessage();
}

/**
 * Draw the piano keys
 */
function drawPiano() {
  
  // Loops our 7 keys
  for (let i = 0; i < 7; i++) {
    // Active blue, idle on white
    fill(activeKey === i ? "blue" : "white");
    stroke("black");
    rect(pianoKeys.position.x + i * pianoKeys.white.w, pianoKeys.position.y, pianoKeys.white.w, pianoKeys.white.h);
  }
}


/**
 * Display the random message while playing
 */
function displayMessage() {
  //If my timer does not reach 0
  if (messageTime > 0) {
    // Draw the random message
    fill("black");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(displayedMessage, width / 2, height - 150);
    messageTime--;
  } else {
    // Clear message when timer ends
    displayedMessage = ""; 
  }
}

/***
 * When a key is pressed
 */
function keyPressed() {
  // Check in the array of the keymap
  if (keyMap[key] !== undefined) {
    
    //Play the music
    activeKey = keyMap[key];
    pianoNotes[activeKey].play();

    // Pick a random message and extract the correct language
    const randomMessage = random(messages);
    
     // Default according to the html lang
    const htmlLang = document.documentElement.lang;
    
    // Fallback to default languange
    displayedMessage = randomMessage[htmlLang] ;
     
    // Display for 1 second
    messageTime = 60;
  }
  // Secret button for 'E'
  if (key === 'e' || key === 'E') {
    window.open("https://www.funnycatpix.com/", "_blank");
  }
}

// Reset active key when released
function keyReleased() {
  activeKey = null;
}
