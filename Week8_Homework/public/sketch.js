var socket;

function setup(){
   createCanvas(600, 600);
    background(0);
    
    socket = io.connect('http://localhost:3000')
}

function draw(){
    fill(255, 255, 255, 5);
    ellipse(mouseX, mouseY, 60, 60);
    
}

function mouseClicked() {
        background (0);
    }