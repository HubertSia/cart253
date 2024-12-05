/**
 * The piano that draws
 * Hubert Sia
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


// Array to hold generated shapes
let shapes = [];


// Load the key sounds
function preload() {
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/pain/pain${i}.wav`);
  }
}


/***
 * At the start scene
 */
function setup() {
  createCanvas(1000, 600);
  background("#ADD8E6");
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;

}

/**
 * At my draw 
 */
function draw() {
  drawPiano();
  drawShapes();
  updateShapes();

}



/**
 * Draw piano
 */
function drawPiano() {
  // Loop the shapes of the keys 7 times
  for (let i = 0; i < 7; i++) {
    fill(activeKey === i ? "red" : "white");
    stroke("black");
    rect(pianoKeys.position.x + i * pianoKeys.white.w, pianoKeys.position.y, pianoKeys.white.w, pianoKeys.white.h);
  }
}


/**
 * System of generate random shapes
 */
function generateRandomShape() {
  
  // Our type of shapes and radomise it
  let shapeType = random(["circle", "rectangle", "triangle"]);
  
  // Value of the shapes and randomize it values
  let shape = {
    type: shapeType,
    x: random(width),
    y: random(height),
    size: random(10, 100),
    color: color(random(255), random(255), random(255)),
    speedX: random(2, 5),
    speedY: random(2, 5),
  };
  
  return shape;
}


// Draws the shapes 
function drawShapes() {
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    fill(shape.color);
    noStroke();
    
    // Randomize the position and size of the circle
    if (shape.type === "circle") {
      ellipse(shape.x, shape.y, shape.size);
      
    // Randomize the position and size of the rectangle
    } else if (shape.type === "rectangle") {
    // Randomize the position and size of the triangle
      rect(shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type === "triangle") {
      triangle(shape.x, shape.y - shape.size / 2, shape.x - shape.size / 2, shape.y + shape.size / 2, shape.x + shape.size / 2, shape.y + shape.size / 2);
    }
  }
}

/**
 * Check the speed and bounce of the shapes
 */
function updateShapes() {
  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.x += shape.speedX;
    shape.y += shape.speedY;

    // Check for horizontal bouncing
    if (shape.x + shape.size / 2 > width || shape.x - shape.size / 2 < 0) {
      shape.speedX *= -1; 
    }

    // Check for vertical bouncing
    if (shape.y + shape.size / 2 > height || shape.y - shape.size / 2 < 0) {
      shape.speedY *= -1; 
    }
  }
}


/**
 * On the key pressed
 */
function keyPressed() {
  if (keyMap[key] !== undefined) {
        
    // Play the piano sound
    activeKey = keyMap[key];
    pianoNotes[activeKey].play();
    
    
     // Create a new random shape
    let newShape = generateRandomShape();
    
    // Add it to the shapes array
    shapes.push(newShape); 
  }
}


/**
 * On release of the key
 */
function keyReleased() {
  // Return to null
  activeKey = null;
}