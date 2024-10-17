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
- Move the frog with the mouse movement (X axis)
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

- Moshi
  - Position and size
  - Position and size of tongue
  - What is the tongue doing?
- The apple-wings
  - Position and the size
  - Velocity
- The score on how much Moshi consumed the apple-wings
- How much Moshi missed the apple-wings before 10
- States will sets the conditions

frog
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

fly
    x
    y
    size
    speed
```

What happens in this project?

- Start (setup)
  - Create a canvas
- Every frame (draw)
  - Draw the background
  - Move and draw the fly
    - Add the fly's speed to it x
    - Draw a circle at the fly's position with its size (black)
  - Move and draw the frog
    - Move the frog to the mouse's x position
    - Draw a green circle at the frog's position with its size
  - Move and draw the tongue
    - Move the tongue
      - If the tongue isn't launched, just do nothing... don't draw it
      - If the tongue is launched, move it up (by its speed)
      - If the tongue is coming back, move it down (by its speed)
      - If the tongue hits the top, send it back down
      - If the tongue gets back to the frog, then stop it
    - Draw the tongue
      - Draw a line from the frog to the tongue position
      - Draw a circle at the end of the tongue
  - Check if the tongue hit the fly
    - Check if tongue circle and fly circle overlap
    - If they do, then reset the fly
    - If they don't.... nothing... just keep being a tongue

Events

- If the user clicks the mouse
  - If the tongue is still inside the frog's mouth
    - Launch the tongue
