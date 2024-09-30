/**
 * Behold! EGG
 * Hubert Sia
 * 
 *A colorful EGG,
*Click the left mouse button to see M O N K E Y
*Move around the mouse to change the background color
*Let's make our great nation EGGTASTIC!!!
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

let imgDK = {
        // Image x and y is dependant to the position of the Egg
        x: undefined,
        y: undefined,

};



// Load the image
function preload() {

        imgDK = loadImage('assets/images/dk_head.png'); 

}




//Egg Speed
let PosSpeedX = 5;
let PosSpeedY = 5;



// Once at the beginning of the program
function setup() {
        createCanvas(640, 640);
        colorMode(HSB,100);

}

// Every frame of the program
function draw() {

        Bg();
        drawTheEgg();
        TheBouncing();
        EggHatched();



    
}


/**
 * Draw Background
 */
function Bg(){

  let mapColor = map(mouseX, 0, width, 0, 100);

  background(mapColor, 80, 100);


}

/*
*Draws a The E G G
*/
function drawTheEgg(){

        push();
        
        ellipse(theEgg.x, theEgg.y, theEgg.size.w/2, theEgg.size.h/2);
        //console.log('ellipse');
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


                imgDK.x +=PosSpeedX + 5
                imgDK.y +=PosSpeedY + 5
 

                imgDK.x = theEgg.x;
                imgDK.y = theEgg.y;



                if (mouseIsPressed){

                        console.log('It clicked!')
                          image(imgDK, imgDK.x-100, imgDK.y-100);
                          image(imgDK, imgDK.x-200, imgDK.y-200);
                          image(imgDK, imgDK.x-20, imgDK.y-200);
                          image(imgDK, imgDK.x-100, imgDK.y-300);
                          
                          push()       
                          
                          imgDK.resize(200, 200);
                          theEgg.size.h = 0;
                          theEgg.size.w = 0;
                          pop();

                        
                }else{

                        theEgg.size.w = 200;
                        theEgg.size.h = 290;
                }


         }






