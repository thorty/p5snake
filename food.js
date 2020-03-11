class Food{

  constructor(){
    this.x = floor(random((width/resolution)-1));
    this.y = floor(random((height/resolution)-1));     
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }


  show(){
    noStroke();
    fill(this.r,this.g,this.b);
    rect(this.x,this.y,1,1);
    
  }
}