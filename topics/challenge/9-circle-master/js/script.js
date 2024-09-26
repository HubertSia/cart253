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


let threshold = 100;

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
    
  
    const distance = dist(user.x, user.y, puck.x, puck.y);
    /**
   * 
   * 
   * 
   *  const overlap = (distance < user.size / 2 + puck.size / 2);
    if(overlap){
      console.log("Overlap!");
      const dx = user.x - puck.x
      const dy = user.y - puck.y

      if(abs(x) < abs(y)){

      // It's closer on x
        if(dx < 0){
          puck.x +=1
        
        }

        else if (dx > 0){
          puck.x -= 1;
        
        }
  

      } 

    }

   * 
   * 
   * 
   * 
   *  */  




     if( distance < threshold){

    if(user.x < puck.x){

      puck.x += 5;  
    }else if (user.x > puck.x){
      puck.x -= 5;
    }

    if(user.y < puck.y){

      puck.y += 5;  
    }else if (user.y > puck.y){
      puck.y -= 5;
    }

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


     if( distance < threshold){


     if (puck.x == target.x) {
        // The cursor is overlapping the puck. Move the puck a pixel away 
        console.log("target acquired!!!");
        target.fill = target.fills.goal;

    }  if (puck.y == target.y) {
      // The cursor is overlapping the puck. Move the puck a pixel away 
      console.log("target acquired!!!");
      target.fill = target.fills.goal;

  }
    
    
    else{

        target.fill = target.fills.idle;
    }

   }

  }