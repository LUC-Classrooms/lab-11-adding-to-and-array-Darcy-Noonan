
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
var dots = new Array(1); // creates an array with one element and assign it to "dots"

function setup() { // allows page to function
  createCanvas(500, 300);  // creates canvas space 
  dots[0] = new Dot(width/2, height/2); // creates Dot array, makes dot location at beginning 
}

function draw() { // opens drawing layer
  background(200); // grey background
  
  for(let i = 0; i < dots.length; i++){ // gives I properties 
    dots[i].move();  // allows dot to move
    dots[i].display(); // allows dot to be viewed
  }
  textSize(24); // gives text size
  fill(100, 0, 200); // color of text
  text("'dots' array length: " + dots.length, 100, 100); // text is specified, located

}

function mousePressed(){ // event handler- when mousePressed, X happens each time. 
  let obj = new Dot(mouseX, mouseY); // creates new object (dot) where mouse is pressed
  dots.push(obj); // creates another dot. Adds an object to the essay. .push takes the parenthesis and adds it to the array 

}


function Dot(X, Y){ // names functions 
  
  this.x = X; // names X 
  this.y = Y; // names Y 
  this.w = random (20, 50); // Randomized W (ellipse property)
  this.sx = random(-5, 5); // randomizes SX (ellipse property)
  this.sy = random(-5, 5); // randomized SY (ellipse property)
  this.r = random(0, 255); // randomized R (color)
  this.g = random(0, 255); // randomizes G (color)
  this.b = random(0, 255); // Randomizes B (color)
  
  this.display = function(){ // allows to be displayed 
    fill(this.r, this.g, this.b);  // color is made 
    ellipse(this.x, this.y, this.w, this.w); // ellipse X, y, w are given as arguments
  }
  
  this.move = function(){ // move function is called 
    this.x += this.sx; // xspeed
    this.y += this.sy; // yspeed 
    
    if (this.x < 0 || this.x > width){ // gives limits of the page 
        this.sx *= -1; // makes it move back onto the screen 
    }
    if (this.y < 0 || this.y > height){ // gives height limits 
        this.sy *= -1; // makes it move back onto the screen
    }
  }
    
}
