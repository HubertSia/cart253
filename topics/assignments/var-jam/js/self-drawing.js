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


// Array to hold generated shapes
let shapes = [];


// Load the key sounds
function preload() {
  for (let i = 0; i < 7; i++) {
    pianoNotes[i] = loadSound(`assets/sounds/pain/pain${i}.wav`);
  }
}


function setup() {
  createCanvas(1000, 600);
  background("#ADD8E6");
  pianoKeys.position.x = (width - 7 * pianoKeys.white.w) / 2;

}

function draw() {
  
  drawPiano();
  drawShapes();
  updateShapes();

}




function drawPiano() {
  for (let i = 0; i < 7; i++) {
    fill(activeKey === i ? "red" : "white");
    stroke("black");
    rect(
      pianoKeys.position.x + i * pianoKeys.white.w,
      pianoKeys.position.y,
      pianoKeys.white.w,
      pianoKeys.white.h
    );
  }
}

// Function to generate a random shape and position (the magic)
function generateRandomShape() {
  let shapeType = random(["circle", "rectangle", "triangle"]);
  let shape = {
    type: shapeType,
    x: random(width),
    y: random(height),
    size: random(50, 100),
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

    if (shape.type === "circle") {
      ellipse(shape.x, shape.y, shape.size);
    } else if (shape.type === "rectangle") {
      rect(shape.x, shape.y, shape.size, shape.size);
    } else if (shape.type === "triangle") {
      triangle(
        shape.x, shape.y - shape.size / 2,
        shape.x - shape.size / 2, shape.y + shape.size / 2,
        shape.x + shape.size / 2, shape.y + shape.size / 2
      );
    }
  }
}


// Allows for the shape to bounce
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

function keyPressed() {
  if (keyMap[key] !== undefined) {
    activeKey = keyMap[key];
    pianoNotes[activeKey].play();
    let newShape = generateRandomShape(); // Create a random shape
    shapes.push(newShape); // Add it to the shapes array
  }
}

function keyReleased() {
  activeKey = null;
}


