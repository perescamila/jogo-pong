let xBolinha=400;
let yBolinha=300;
let diametro=30;

let vxBolinha=9;
let vyBolinha=9;


function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background(0);
    circle(xBolinha,yBolinha,diametro);
    
    xBolinha+= vxBolinha;

// AS DUAS BARRAS SIGNIFICA OU

    if(xBolinha> width || xBolinha <0){
       
        vxBolinha*= -1;
    }

yBolinha+=vyBolinha;

if ( yBolinha> height || yBolinha<0){

    vyBolinha*= -1
}

  }