
"use strict";

let bird = {
    x: 120,
    y: 480,
    size: 50,
    velocity: {
        x: 0,
        y: 0,
    },
    // NEW! The minimum velocity for x and y movement. Note that it's NOT ZERO
    // because we use negative x velocity to move left and negative y
    // velocity to move up
    minVelocity: {
      // Sort of assuming that birds move faster horizontally than vertically...
      // But maybe that's not true...
      x: -3,
      y: -2  
    },
    // NEW! Same again with the maximum velocity
    maxVelocity: {
        x: 3,
        y: 2
    },
    acceleration: {
        x: 0.025,
        y: -0.05
    }
}

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);
    
    /*// Add bird.velocity.x to bird.x and store it back in bird.x
    // Or more simply: Increase bird.x by bird.velocity.x
    bird.x = bird.x + bird.velocity.x;
*/
    
    // Add bird.velocity.x to bird.x and store it back in bird.x
    // Or more simply: Increase bird.x by bird.velocity.x
    bird.x += bird.velocity.x;

    bird.velocity.x = bird.velocity.x + bird.acceleration.x;
    bird.velocity.y = bird.velocity.y + bird.acceleration.y;
    
    // NEW! Constrain the bird's velocity
    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y, bird.maxVelocity.y);
    
    // Move the bird by adding its velocity in x and y
    bird.x = bird.x + bird.velocity.x;
    bird.y = bird.y + bird.velocity.y;
    
    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);
}