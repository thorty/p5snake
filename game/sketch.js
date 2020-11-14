var snake;
var food;
var resolution = 20;
var isGameOver = true;

function preload() {
  pixelfont = loadFont('assets/VT323-Regular.ttf');
  soundFormats('wav');
  damage = loadSound('assets/damage');
  eat = loadSound('assets/eat');
}

function setup() {
  createCanvas(600, 400);
  frameRate(10); 
}

function keyPressed() {
  if (isGameOver) {    
    isGameOver = false;
    snake = new Snake();
    food = new Food();
    loop();
  }
  if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  }
}



function draw() {
  background(0);
  scale(resolution);
  if (isGameOver) {
    startScreen();
  } else {
    if (snake.eat(food)) {
      food = new Food();
      setDocumentBackground(food);
    }
    snake.update();
    snake.show();
    food.show();
    if (snake.gameEnds()) {
      damage.play();
      gameOver();
    }
  }
}

function startScreen() {  
  textSize(2);
  textAlign(CENTER, CENTER);
  fill(200, 0, 180);
  textFont(pixelfont);
  text('You are what you eat!', width / resolution / 2, height / resolution / 3);
  fill(220);
  textSize(1);
  text('Press Any Key to start!', width / resolution / 2, (height / resolution / 3) + 3);  
}

function gameOver() {  
  isGameOver = true;
  textSize(4);
  textAlign(CENTER, CENTER);
  fill(250);
  textFont(pixelfont);
  text('GAME OVER', width / resolution / 2, height / resolution / 3);
  fill(220);
  textSize(1);
  text('Press Any Key to start!', width / resolution / 2, (height / resolution / 3) + 3); 
  noLoop();
  localStorage["key"] = value;
  window.location = "highscore.html"
}

function setDocumentBackground(food) {
  //document.body.style.backgroundColor = "rgb(" + food.r + "," + food.g + "," + food.b + ")";
  document.body.style.backgroundColor = food.palette;
}

