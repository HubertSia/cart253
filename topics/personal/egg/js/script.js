/**
 * Behold! EGG
 * Hubert Sia
 * 
 * A simple EGG,
 * An EGG, it has many utility. It is the beggining of a cycle
 * An EGG, a source for consuming as a food for energy
 * An EGG, a weapon to use during pranks and such
 * An EGG, has many uses
 * Let's make our great nation EGGTASTIC!!!
 * 
 * 
 * 
 */

"use strict";



//The making of the E G G 
let theEgg = {

        x: 320,
        y: 320,
        size: {

           w: 200,
           h: 290
     
        }
        

}


//Egg Speed
let PosSpeedX = 5;
let PosSpeedY = 5;



// Once at the beginning of the program
function setup() {
createCanvas(640, 640);
}

// Every frame of the program
function draw() {

        background('#ede8d0');
        drawTheEgg();
        TheBouncing();

        

    
}


/*
*Draws a The E G G
*/
function drawTheEgg(){
        push();
        // We use the variable names mouseX and mouseY instead
        // of numbers for the red and green of the circle's fill
        //fill(mouseX, mouseY, 0);
        ellipse(theEgg.x, theEgg.y, theEgg.size.w/2, theEgg.size.h/2);
        console.log('ellipse');
        pop();


      
}

// Make my egg bounce

function TheBouncing(){


        // Our position of the Egg becomes the speed
        theEgg.x += PosSpeedX;
        theEgg.y += PosSpeedY;

        
        if (theEgg.x > width - theEgg.size.w/2 || theEgg.x < theEgg.size.w/2) {
          PosSpeedX = -PosSpeedX;
          fill(random(255),random(255), random(255));
          
        }
        if (theEgg.y > height - theEgg.size.h /2 || theEgg.y < theEgg.size.h/2) {
          PosSpeedY = -PosSpeedY;
          fill(random(255),random(255), random(255));

        }
         }    