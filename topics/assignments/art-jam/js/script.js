/**
 * Behold! EGG
 * Hubert Sia
 * 
 *A colorful EGG,
 *Click the left mouse button to see M O N K E Y
 *Move around the mouse to change and to pick the background color
 *Let's make our great nation EGGTASTIC!!!
 * 
 * 
 * 
 */

"use strict";

// The variable state for the functions
let mode = "egg";




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
        // Image x and y is dependant on the position of the Egg
        x: undefined,
        y: undefined,

};


let bark;

let rap;



// Load the image
function preload() {

        imgDK = loadImage('assets/images/dk_head.png'); 

}




//Egg Speed
let PosSpeedX = 5;
let PosSpeedY = 5;



// Once at the beginning of the program
function setup() {
        //Create the canvas
        createCanvas(640, 640);



        // Load my sounds
        bark = loadSound('assets/sounds/bark.wav');
        rap = loadSound ('assets/sounds/dk-rap.wav');


        //We put a HSB function for more interesting visuals (also helps with the mapping)
        colorMode(HSB,100);

}

// Every frame of the program
function draw() {

        background(220);
        TheBouncing();
        

        if (mode === "egg"){
             drawTheEgg();
        }
        else if ( mode === "dk"){
                EggHatched();
        }


    
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
          bark.play();
          
        }

        // If Egg's Y position reach the limite of the height of the canvas OR reaches
        // The Egg bounce off the wall
        if (theEgg.y > height - theEgg.size.h/5 || theEgg.y < theEgg.size.h/5) {
          PosSpeedY = -PosSpeedY;
          // Randomise the color of the egg
          fill(random(255),random(255), random(255));
          bark.play();


        }
         }   
         


         // When the mouse button is placed. It activates 'dk' mode
         function mousePressed(){

                mode = "dk";
                rap.play();
                bark.stop();

         }

         // When the mouse button is released. It activates
         function mouseReleased(){

                mode = "egg";
                background(255);
                rap.stop();

         }
         


         // Function for the Donkey Kong
         function EggHatched(){


                //Follows the speed position plus 5
                imgDK.x +=PosSpeedX + 5
                imgDK.y +=PosSpeedY + 5
 

                //DK follow the 
                imgDK.x = theEgg.x;
                imgDK.y = theEgg.y;




                        console.log('LMAO YOU LOOOKED!');

                        // The mapping for the background color
                        let mapColor = map(mouseX, 0, width, 0, 100);
                        background(mapColor, 80, 100);

                        //Spawns 4 Donkey Kong Heads
                          image(imgDK, imgDK.x-100, imgDK.y-100);
                          image(imgDK, imgDK.x-200, imgDK.y-200);
                          image(imgDK, imgDK.x-20, imgDK.y-200);
                          image(imgDK, imgDK.x-100, imgDK.y-300);
                          

                          //Size of the DK head
                          //Shrink the eggs to hide behind the head
                          push()    
                          imgDK.resize(200, 200);
                          pop();

           

                
                


         }






