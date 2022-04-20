function setup() {
  let cvs = createCanvas(400, 400);
  cvs.parent("my-container");
}

function draw() {
  background(220);
  fill(51)
  rect(30,30,200,20)
  rect(30,50,200,125)
  fill(color(0,200,0))
  rect(38,60,180,60)
  rect(180,110,7,7)
  rect(189,110,7,7)
  rect(198,110,7,7)
  rect(189,102,7,7)
  fill(color(0,0,200))
  rect(75,130,50,30)
  fill(51)
  rect(30,180,200,60)
  rect(30,240,200,30,0,0,20,20)
  fill('rgba(100%,0%,100%,0.5)')
  rect(35,185,190,50)
  rect(185,225,7,7)
  rect(194,225,7,7)
  rect(203,225,7,7)
  rect(194,217,7,7)
  fill(color(0,150,0))
  rect(240,180,120,80)
  ellipse(300,210,20,35)
  fill(51)
  ellipse(300,200,5,10)
}