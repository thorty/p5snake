class Snake {

  constructor() {
    this.tails = 1;
    this.body = [];
    this.body[0] = createVector(0, 0)
    this.xdir = 0;
    this.ydir = 0;    
    this.color = "255"
    this.head =this.body[0] ;
  }


  show() {
    noStroke();        
    let c = color(this.color);
    fill(c);      
    let b;    
    for (b of this.body) {           
      rect(b.x, b.y, 1, 1);
    }
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
    tail.x = constrain(tail.x, 0, (width / resolution) - 1);
    tail.y = constrain(tail.y, 0, (height / resolution) - 1);
    this.body.push(tail);    
  }

  eat(food) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x === food.x && y === food.y) {
      this.grow(food.r,food.g,food.b);
      return true;
    } else {
      return false;
    }
  }

  grow(r,g,b) {
    this.tails++;
    let tail = this.body[this.body.length - 1].copy();
    tail.r = r;
    tail.g = g;
    tail.b =b;    
    this.color="rgb("+floor(r)+","+floor(g)+","+floor(b)+")";
    this.body.push(tail);
  }



}