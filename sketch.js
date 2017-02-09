function setup() {
  createCanvas(720,480);
  background(230);
  colorMode(RGB);
}

function draw() {
  strokeWeight(2);
  //capelli
  line(340,130,325,105);
  line(370,125,380,60);
  line(350,195,350,270);
  //collo
  line(360,195,360,270);
  line(370,195,370,270);
  line(395,150,430,130);
  //testa
  fill(0);
  ellipse(360,160,70,70);
  fill(140);
  noStroke();
  ellipse(350,170,8,8);
  ellipse(350,140,6,6);
  ellipse(375,180,5,5);
  fill(250);
  ellipse(370,155,30,30);
  fill(100);
  ellipse(370,155,5,5);
  //corpo
  fill(200);
  ellipse(width/2,420,55,55);
  fill(0);
  rect(width/2,270,80,150);
  fill(200);
  rect(width/2,280,80,8);
}
