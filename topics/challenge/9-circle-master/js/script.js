/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can move a circle
 * on the canvas using their own circle to "lead" it around.
 */


"use strict"

const puck = {
  x: 350,
  y: 350,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};



const target = {
  x: 50,
  y: 350,
  size: 100,
  fill: "#404040",



    fills: {
    goal: "#33cc33", // Green
    idle: "#404040",// Grey


  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  moveUser();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
  moveTarget();
  drawTarget();
  checkPuck();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}



/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

/**
 * Display target
 */

function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}




/**
 *Move the puck
 */
 function moveTarget() {
    // Calculate the distance between the cursor and the puck
    // and put it into a "distance" variable (using const again since
    // we won't change this again later!)
    const distance = dist(user.x, user.y, puck.x, puck.y);
    // Calculate whether the mouse overlaps the creature by checking whether
    // the distance is less than its radius! (Half its diameter)
    const mouseIsOverlapping = (distance < puck.size/2);
    // Check if EITHER movedX OR movedY are NOT equal to zero
    // and store the result in our mouseIsMoving variable (another
    // const because we don't want to change it later)
    const mouseIsMoving = (movedX !== 0 || movedY !== 0);


     if (mouseIsOverlapping && mouseIsMoving) {
        // The cursor is overlapping the puck. Move the puck a pixel away 
        console.log("It works!!!");
        puck.x = user.x + 1;
        
    }


 
}



/**
 *Detect target
 */

 function checkPuck() {
    // Calculate the distance between the cursor and the puck
    // and put it into a "distance" variable (using const again since
    // we won't change this again later!)
    const distance = dist(puck.x, puck.y, target.x, target.y);
    // Calculate whether the mouse overlaps the creature by checking whether
    // the distance is less than its radius! (Half its diameter)
    const mouseIsOverlapping = (distance < target.size/2);
    // Check if EITHER movedX OR movedY are NOT equal to zero
    // and store the result in our mouseIsMoving variable (another
    // const because we don't want to change it later)
    const mouseIsMoving = (movedX !== 0 || movedY !== 0);


     if (mouseIsOverlapping && mouseIsMoving) {
        // The cursor is overlapping the puck. Move the puck a pixel away 
        console.log("target acquired!!!");
        target.fill = target.fills.goal;

    }else{

        target.fill = target.fills.idle;
    }

   }