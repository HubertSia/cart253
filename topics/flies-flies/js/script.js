/**
 * Flies flies
 * Pippin Barr
 * 
 * A program for drawing flies on the canvas. The flies are stored
 * in an array. We display them with a for...of loop
 */

"use strict";

// Our array of flies (specifically "fly data" really)
// Each fly has a position and a size
let flies = [
    {
        x: 100,
        y: 125,
        size: 10,
        // NEW
        buzziness: 4
    },
    {
        x: 160,
        y: 170,
        size: 14,
        // NEW
        buzziness: 2
    },
    {
        x: 180,
        y: 50,
        size: 5,
        // NEW
        buzziness: 3
    }
];



let array = [1, 2, 3, 4, 5];
// Let's remove one element starting at index 2
array.splice(2, 1); 
// Now the array is [1, 2, 4, 5]

/**
 * Create the canvas
 */
function setup() {
    // Let's make it tiny for some reason
    createCanvas(200, 200);
}

/**
 * Display the flies in the array
 */
function draw() {
    background("#87ceed");

    // Display each fly in the array
    for (let fly of flies) {
        drawFly(fly);
    }
}

/**
 * Draws the provided fly to the canvas
 */
function draw() {
    background("#87ceeb");
    
    // Go through all the flies
    for (let fly of flies) {
        moveFly(fly);
        drawFly(fly);
        createFly(fly);
    }
}

/**
 * Moves the fly by changing its position randomly
 * according to its buzziness
 */
function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}



function drawFly(fly){
    push();
    noStroke();
    fill(0);
    ellipse(fly.x, fly.y, fly.size);
    pop();
}


/**
 * Creates a fly (data) with random numbers
 */
function createFly() {
    // Generate the random fly
    let fly = {
        x: random(0, width),
        y: random(0, height),
        size: random(10, 20),
        buzziness: random(2, 8)
    };
    // Return the random fly
    return fly;
}


function keyPressed() {
    let fly = createFly();
    flies.push(fly);
}

function mousePressed() {
    // Note we have to check *every* fly in the array to see if it was clicked
    for (let fly of flies) {
        // Get the distance between the click and the fly
        let d = dist(mouseX, mouseY, fly.x, fly.y);
        // Check if the click is inside the fly
        if (d < fly.size/2) {
            // If so, get the *index* of this fly in the array
            let index = flies.indexOf(fly);
            // And now use splice to *remove* the fly at that index
            // Remember we provide the index and the *number of elements*
            // to remove. In this case just the one.
            flies.splice(index, 1);
        }
    }
}