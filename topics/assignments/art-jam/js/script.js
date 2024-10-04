/**
 * Behold! Self-Drawing E G G and M O N K E Y !!!
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

// The variable state mode
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


// Variable of the DK image
let imgDK = {
        // Image x and y is dependant on the position of the Egg
        x: undefined,
        y: undefined,

};

//Empty Variables for the musics
let pong;
let mii;
let rap;



// Preload the image and the music
function preload() {

        imgDK = loadImage('assets/images/dk_head.png'); 
        mii = loadSound ('assets/sounds/mii.mp3');

}




//Egg Speed
let PosSpeedX = 5;
let PosSpeedY = 5;



// Once at the beginning of the program
function setup() {
        //Create the canvas
        createCanvas(640, 640);



        // Load my sounds
        rap = loadSound ('assets/sounds/dk-rap.mp3');
        pong = loadSound ('assets/sounds/pong.mp3');

        // Play mii.mp3 at the start
        mii.play();


        //We put a HSB function for more interesting visuals (also helps with the mapping)
        colorMode(HSB,100);

}

// Every frame of the program
function draw() {

        TheBouncing();
        


        //Activated the stater accordingly
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

        // The ellipse takes the position of X and Y of the Egg along with his size
        push();
        ellipse(theEgg.x, theEgg.y, theEgg.size.w/2, theEgg.size.h/2);
        pop();


      
}


/*
* Function the makes the E G G bounce
*/
function TheBouncing(){


        // The speed of the egg goes faster
        theEgg.x += PosSpeedX;
        theEgg.y += PosSpeedY;

        // If Egg's X position reach the limit of the width of the canvas
        // The Egg bounce off the wall
        if (theEgg.x > width - theEgg.size.w/5 || theEgg.x < theEgg.size.w/5) {
          PosSpeedX = -PosSpeedX;

          //Randomise the color of the Egg
          //Play pong.mp3 on hit
          fill(random(255),random(255), random(255));
          pong.play();
          
        }

        // If Egg's Y position reach the limite of the height of the canvas
        // The Egg bounce off the wall
        if (theEgg.y > height - theEgg.size.h/5 || theEgg.y < theEgg.size.h/5) {
          PosSpeedY = -PosSpeedY;
          // Randomise the color of the egg
          //Play pong.mp3 on hit
          fill(random(255),random(255), random(255));
          pong.play();


        }
         }   
         


         // When the mouse button is placed. It activates 'dk' mode
         //Plays the rap song and pauses the mii music
         function mousePressed(){

                mode = "dk";
                rap.play();
                mii.pause();

         }

         // When the mouse button is released. It activates 'egg' mode
         //Pauses the rap song and plays the mii music
         function mouseReleased(){

                mode = "egg";
                background(255);
                rap.pause();
                mii.play();

         }
         


         // Function for the Donkey Kong
         function EggHatched(){


                //Follows the speed position plus 5
                imgDK.x +=PosSpeedX + 5
                imgDK.y +=PosSpeedY + 5
 

                //DK follow the EGG
                imgDK.x = theEgg.x;
                imgDK.y = theEgg.y;




                        console.log('LMAO YOU LOOOKED!');

                        // The mapping for the background color
                        // It changes the background according to the value XY mouse
                        let mapColor = map(mouseX, 0, width, 0, 100);
                        background(mapColor, 80, 100);
                        pong.stop();

                        //Spawns 4 Donkey Kong Heads
                          image(imgDK, imgDK.x-100, imgDK.y-100);
                          image(imgDK, imgDK.x-200, imgDK.y-200);
                          image(imgDK, imgDK.x-20, imgDK.y-200);
                          image(imgDK, imgDK.x-100, imgDK.y-300);
                          

                          //Size of the DK head
                          push()    
                          imgDK.resize(200, 200);
                          pop();

           

                
                


         }






