

function setup() {
    createCanvas(600, 400);
    header1 = createElement('h1', 'GREAT');
    header2 = createElement('h1', 'Enter Your Alias !');
    header1.position(240,25);
    header2.position(185,70);    
    var hs = new HighscoreBackendUtils();   
    hs.getUserTable();
  }

  function draw(){
  }