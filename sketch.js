var lineX = 0;

var url ="http://api.open-notify.org/iss-now.json";

var issX = 100;
var issY = 100;
var img; 
var counter = 1000;
var visitedX =[];
var visitedY = [];

function setup() {
  createCanvas(1000,500);
  img = loadImage("wold-map.jpg"); 
  setInterval(askISS, 500);
  
}

function askISS() {
  loadJSON(url, gotData, "jsonp");
}

function gotData(data) {
  var lat = data.iss_position.latitude;
  var long = data.iss_position.longitude;
  // issX = map(lat, -90, 90, 0, width);
  // issY = map(long, -180, 180, 0, height);
   
   issX = (width/360) * (180 + long);
   issY = (height/180) * (90 - lat);
   
   visitedX.push(issX);
   visitedY.push(issY);
   
  console.log(lat);
  console.log(long);
}

function draw() {
  // background(51);
  image(img, 0, 0);
  fill(255);
  ellipse(issX, issY, 10, 10);
  
  
  for(var i = 1; i < visitedX.length; i++)
  {
  // stroke(255);
      line(visitedX[i-1], visitedY[i-1], visitedX[i], visitedY[i]);
  }
  
  
  // stroke(255);
  // line(lineX, 0, lineX, height);
  // lineX += 3;
  // if(lineX > width) {
  //   lineX = 0;
  // }
}