/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let mic;

function setup() {
  createCanvas(400, 400);

  //https://p5js.org/examples/sound-mic-input.html
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input
  mic.start();
}

function draw() {
  let volume = mic.getLevel()*1000;
  background(220);
  circle(200,200,volume)
}
