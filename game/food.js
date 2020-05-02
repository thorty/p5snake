class Food{

  constructor(){
    this.neonColors = ["#ff009a", "#fc00ff","#95ff00", "#efff6d", "#ff9b00", 
    "#fe0000", "#011efe", "#00FFFF", "#FFFFFF", "#40E0D0", "#00FA9A"]
    this.x = floor(random((width/resolution)-1));
    this.y = floor(random((height/resolution)-1));     
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.palette = random(this.neonColors)
  }


  show(){
    noStroke();
    while (document.body.style.backgroundColor === this.palette){
      this.palette = random(this.neonColors)
    }
    fill( this.palette);
    rect(this.x,this.y,1,1);
    
  }
}