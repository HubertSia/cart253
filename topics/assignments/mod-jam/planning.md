# Planning

## Starting point

The initial idea:

> Moshi (bootleg Yoshi) eating apple-wings
> Not letting Browser (bootleg Bowser) grapping 10 apple-wings

## Experience design

The experience:

> The user plays as Moshi the friendly dinosaur. Their goal is to consume 10 apple-wings that will move on screen
> by shooting the tongue with a voice mic. They have to avoid 10 misses or else Browser will win the game

## Breaking it down

Basic things to do:

- Draw the Moshi (Bascically draw the head of bootleg Yoshi)
- Draw Moshi's tongue
- Move the Moshi with the mouse movement (X axis)
- Move the apple-wings, it will spawn on both edges of the canvas (moving in a random Y Axis, and flying on a linear direction)
- Figure out if the tongue hits the fly?
- Adding a score points of 10

Questions:

- What does the Moshi look like?
  - He is composes of a lot of circles and oval ellipse
- How does the user control the Moshi?
  - User controls the dinosaur with the mouse position, just to the left and right
  - User launches the tongue with a mic sounds. They need to shout to the mic in order to launch the TONGUE
- How does the apple-wings move?
  - The apple-wings starts on the left at a random y position, and moves to the right in a line
  - It will also starts on the right at a random y position, and moves to the left in a line
- What does the tongue look like?
  - A red line coming out from Moshi
- What happens if the user doesn't consume the apple-wings?
  - If the apple-wings from the left/right goes off the right/left side, it just resets to a new random y on the left/right.
  - If the players contiues to miss 10 times. It will be a game over, showing Browser with a mencacing look
- What does it all look like on the screen? Layout?
  - At the start, they will be a menu screen, giving the intro information on how it works
  - In the game, Moshi at the bottom, fly moving across, tongue shooting out of frog
  - Moshi must consume as much apple-wings as possible before Browser reaches to 10
  - If the players miss the apple-wings 10 times. It will be consider a game over

## The program starts to form....

What is there?

- Moshi (in game)

  - Position and size
  - Position and size of tongue
  - The tongue reaches for the apple

- Moshi (title screen)

  - Position and size

- Browser (title screen)

  - Position and size

- The apple-wings

  - Position and the size
  - Velocity

- The score on how much Moshi consumed the apple-wings

- How much Moshi missed the apple-wings before 10

- States will sets the conditions

Moshi (in game)
body
x
y
size
tongue
x
y
size
speed
state

Moshi (title screen)
body
x
y
size

Browser (title screen)
body
x
y
size

apple-wings
x
y
size
speed

score = 0

miss = 10

state = title

```

What happens in this project?

- Start (setup)
  - Create a canvas
  - Reset the fly position


- Every frame (draw)
  -if my state is "title"
    - Load the title screen
  if my state is "game"
   -Load the game sequence
  if my state is "game over"
    - Load my Game Over sequence






- Creating my function for the "title" state = the title screen
    - Draw the background (make it interesting)
    - Draw the title of the game
    - Draw the "start" title
    - Draw the "instruction"
    - Draw both Moshi (title screen) and Browser (title screen)
    - Load title screen music


    If my mouse is pressed once
      Load my "game" state




- Creating my function for the "game" state = the game sequence
  -Draw the background
  -Move and draw the speed of the apple-wings
  -Move and draw Moshi's tongue
  -Check if the tongue overlaps the apple-wings
  -Draw the apple wings
  -Move Moshi's head
  -Draw Moshi's head
  -Check if the apple-wings has crossed to the other side




- Move and draw the apple-wings
  - Add the apple-wings's speed to it x
  - Draw a circle at the apple-wings's position with its size (red)

- Move and Moshi's head
  - Move the Moshi to the mouse's x position
  - Draw a red circle at the Moshi's position with its size
  - Draw the left eye of Moshi
  - Draw the right eye of Moshi

- Move and draw the tongue
  - Move the tongue
    - If the tongue isn't launched, just do nothing... don't draw it
    - If the tongue is launched, move it up (by its speed)
    - If the tongue is coming back, move it down (by its speed)
    - If the tongue hits the top, send it back down
    - If the tongue gets back to the frog, Moshi stop it

  - Draw the tongue
    - Draw a line from the Moshi to the tongue position
    - Draw a circle at the end of the tongue

- Check if the tongue hit the apple-wing
  - Check if tongue circle and hit the apple-wing circle overlap
  - If they do, then reset the hit the apple-wing
  - If they don't.... nothing... just keep being a tongue
  - Add a point to the score point



- Check if the apple-wings goes to the other side
  - Check if apple-wings and hit the opposite side from there spawn
  - If they do, then reset the hit the apple-wing



  - Start counting but if it reaches to 10
    - Load the "Game Over" state


- Creating the "Game Over" function
    - Draw background (make it interesting)
    - Load title game over
    - Draw Browser







- If the user shout at a certain frequency with the mic
  - If the tongue is still inside the frog's mouth
    - Launch the tongue
```
