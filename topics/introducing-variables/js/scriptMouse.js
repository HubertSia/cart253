

"use strict";

function setup() {
    // Create the canvas
    createCanvas(640, 640);
}

function draw() {
    background(0);
    

   /** // Draw a circle at the mouse coordinates
    push();
    noStroke();
    fill(255, 0, 0);
    // We use the variable names mouseX and mouseY instead
    // of numbers for the x and y coordinates of our circle
    // JavaScript will *use the values inside them* (the numbers)
    // to send as the x and y arguments of ellipse()
    // And that will mean the ellipse will be drawn with its (x, y)
    // position set to the current mouse (x, y) position.
    ellipse(mouseX, mouseY, 100, 100);
    pop();

*/ 


//======================================================


/*// Draw an ellipse that grows based on the mouse position
    push();
    noStroke();
    fill(255, 0, 0);
    // We use the variable names mouseX and mouseY instead
    // of numbers for the width and height of the ellipse
    // This causes it to be bigger the further from the origin (0,0)
    ellipse(width/2, height/2, mouseX, mouseY);
    pop();
*/

//===================================================================

// Draw a circle that changes colour based on the mouse position
    push();
    noStroke();
    // We use the variable names mouseX and mouseY instead
    // of numbers for the red and green of the circle's fill
    fill(mouseX, mouseY, 0);
    ellipse(width/2, height/2, 100, 100);
    pop();



}