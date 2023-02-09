rainSize = 5;
rainYIncAmount = [];
maxIncAmount = 20
minIncAmount = 5;
numRaindrops = 20;
dropsX = []
dropsY = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  resetRaindrops()
}

function draw() {
  background(220);
  fill(0,100,120) // rain colour
  for (i = 0; i < numRaindrops;i++) {
  drawRaindrop(dropsX[i],dropsY[i])
  dropsY[i]+=rainYIncAmount[i];
  if (dropsY[i] > windowHeight+((20*rainSize)/2)) {
      dropsY[i] = -(20*rainSize/2)
      dropsX[i] = int(random(windowWidth-((10*rainSize))))+(10*rainSize)/2
  }
  }
}
function drawRaindrop(x,y) {
  ellipse(x,y,10*rainSize,20*rainSize)
}
function resetRaindrops() {
  for (i = 0; i < numRaindrops;i++) {
    dropsX[i] = int(random(windowWidth-((10*rainSize))))+(10*rainSize)/2
  }
  for (i = 0; i < numRaindrops;i++) {
    dropsY[i] = 0
  }
  for (i = 0; i < numRaindrops;i++) {
    rainYIncAmount[i] = random(maxIncAmount-minIncAmount)+minIncAmount
  }
}