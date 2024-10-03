/**
 * Time and JavaScript and p5 
 * 
 * 
 * We’ve been doing it all along, but it’s worth reviewing really specifically how time works in our programs, specifically “what gets executed when” is a big question. And as we begin to add events to our programs, this gets even more important.
 */

"use strict";

const ball = {
    x: 0,
    y: 200,
    size: 50
};

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    
    ball.x += 1;
    
    push();
    noStroke();
    ellipse(ball.x, ball.y, ball.size);
    pop();
}