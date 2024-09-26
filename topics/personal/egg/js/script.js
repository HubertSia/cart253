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

let img = {

        x: undefined,
        y: undefined,

};

// Load the image.
function preload() {
  img = loadImage('/topics/personal/egg/assets/images/dk_head.png');
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
        EggHatched();

        

    
}


/*
*Draws a The E G G
*/
function drawTheEgg(){
        push();
        ellipse(theEgg.x, theEgg.y, theEgg.size.w/2, theEgg.size.h/2);
        console.log('ellipse');
        pop();


      
}

// Make my egg bounce

function TheBouncing(){


        // The speed of the egg goes faster
        theEgg.x += PosSpeedX;
        theEgg.y += PosSpeedY;

        // If Egg's X position reach the limit of the width of the canvas
        // The Egg bounce off the wall
        if (theEgg.x > width - theEgg.size.w/5 || theEgg.x < theEgg.size.w/5) {
          PosSpeedX = -PosSpeedX;

          //Randomise the color of the Egg
          fill(random(255),random(255), random(255));
          
        }

        // If Egg's Y position reach the limite of the height of the canvas OR reaches
        // The Egg bounce off the wall
        if (theEgg.y > height - theEgg.size.h/5 || theEgg.y < theEgg.size.h/5) {
          PosSpeedY = -PosSpeedY;
          // Randomise the color of the egg
          fill(random(255),random(255), random(255));

        }
         }   
         
         
         function EggHatched(){


                img.x +=PosSpeedX + 5
                img.y +=PosSpeedY + 5


                img.x = theEgg.x;
                img.y = theEgg.y;

                if (mouseIsPressed){

                        console.log('It clicked!')
                          image(img, img.x-100, img.y-100);

                          img.resize(200, 200);
                          theEgg.size.h = 0;
                          theEgg.size.w = 0;
                        
                }else{

                        theEgg.size.w = 200;
                        theEgg.size.h = 290;
                }


         }



