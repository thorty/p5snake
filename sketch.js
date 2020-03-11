var snake;
var food;
var resolution = 20;
var isGameOver = false;

function setup() {
  createCanvas(600, 400);
  frameRate(10);
  snake = new Snake();
  food = new Food();
}

function keyPressed() {
  if (isGameOver){
    isGameOver = false;
    snake = new Snake();
    food = new Food();    
    loop();
  }
  if (keyCode === LEFT_ARROW) {
    snake.dir(-1,0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1,0);
  } else if (keyCode === UP_ARROW) {
    snake.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0,1);
  }
}



function draw() {
  background(0);
  scale(resolution);
  if(snake.eat(food)){
    food = new Food();    
  }
  snake.update();
  snake.show();
  food.show();
  if(snake.gameEnds()){    
    gameOver();
  }
}


function gameOver() {   
  isGameOver = true;
  textSize(4);
  textAlign(CENTER, CENTER);
  fill(220, 50, 100);
  text('GAME OVER', width /resolution/ 2, height /resolution/ 2);  
  noLoop();
}

