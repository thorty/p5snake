class Snake {

  constructor() {
    this.tails = 0;
    this.body = [];
    this.body[0] = createVector(width / resolution / 2, height / resolution / 2);
    this.xdir = 0;
    this.ydir = 0;
    this.color = "255"
  }


  show() {
    noStroke();
    let c = color(this.color);
    fill(c);
    let b;
    for (b of this.body) {
      rect(b.x, b.y, 1, 1);
    }
    fill(220);
    textSize(1);
    text(this.tails, floor(width/resolution/2), 1);  
  }

  dir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }


  update() {
    let tail = this.body[this.body.length - 1].copy();
    this.body.shift();
    tail.x += this.xdir;
    tail.y += this.ydir;
    //tail.x = constrain(tail.x, 0, (width / resolution) - 1);
    //tail.y = constrain(tail.y, 0, (height / resolution) - 1);
    this.body.push(tail);
  }

  gameEnds() {
    let head = this.body[this.body.length - 1]    
    if (head.x < 0 || head.x >= width / resolution || head.y < 0 || head.y >= height / resolution) {      
      return true;
    }    
    for (let i = 0; i < this.body.length - 2; i++) {
      if (head.x === this.body[i].x && head.y === this.body[i].y) {        
        return true;
      }
    }


  }


  eat(food) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x === food.x && y === food.y) {
      this.grow(food.r, food.g, food.b);
      return true;
    } else {
      return false;
    }
  }

  grow(r, g, b) {
    this.tails++;
    let tail = this.body[this.body.length - 1].copy();
    tail.r = r;
    tail.g = g;
    tail.b = b;
    this.color = "rgb(" + floor(r) + "," + floor(g) + "," + floor(b) + ")";
    this.body.push(tail);
  }



}