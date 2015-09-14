var orientationoffset = {
  tiltLR: 0,
  tiltFB: 0,
  dir: 0
};
var currentorientation = {
  tiltLR: 0,
  tiltFB: 0,
  dir: 0
};

var items = [{
  uri: "microwave",
  location: {
    dir: 10
  },
  color: "blue"
}, {
  uri: "flower",
  location: {
    dir: 90
  },
  color: "red"
}, {
  uri: "flower",
  location: {
    dir: 130
  },
  color: "red"
}, {
  uri: "flower",
  location: {
    dir: 140
  },
  color: "red"
}, {
  uri: "flower",
  location: {
    dir: 190
  },
  color: "red"
}, {
  uri: "lamp",
  location: {
    dir: -90
  },
  color: "white",
  controlON: "http://cumulus.teco.edu:81/21345gjphtnch87/ON",
  controlOFF: "http://cumulus.teco.edu:81/21345gjphtnch87/OFF"
}];


var svgPinElement = d3.select('#svgtest');
var svgPin = svgPinElement.append("svg")
  .attr('version', "1.1")
  .attr('xmlns', "http://www.w3.org/2000/svg")
  .attr(':xmlns:xlink', "http://www.w3.org/1999/xlink")
  .attr("width", 105)
  .attr("height", 105);

svgPin.append("defs")
  .append("g")
  .attr('id', 'shape')
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 50)
  .attr("height", 50);

svgPin.select("defs")
  .select("g")
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 50)
  .attr('stroke', '#000000')
  // .attr('fill',"url('./img/flower.png')");
  .attr("fill", "url(#flowerpattern)");

svgPin.select("defs")
  .append('pattern')
  .attr('id', 'flowerpattern')
  .attr("width", 100)
  .attr("height", 100)
  .append('image')
  .attr("xlink:href", "./img/flower.png")
  .attr("width", 100)
  .attr("height", 100);

var pinX = 50;
var pinY = 50;

svgPin.append("use")
  .attr('id', 'flowerpin')
  .attr("xlink:href", "#shape")
  .attr("x", pinX)
  .attr("y", pinY)
  .attr("class", "relate-pin");
// .attr('transform',"rotate("+getLocation().dir+" "+pinX+" "+pinY+")");

// svgPin.append("image")
//     .attr("x", pinX-50)
//     .attr("y", pinY-50)
//     .attr("xlink:href", 'img/flower.png')
//     .attr('width', 100)
//     .attr('height', 100);


// Flower PIN
//need to select
var pinX = 50;
var pinY = 50;
// d3.select('#flowerpin')
// .attr('transform',"rotate("+getLocation().dir+" "+pinX+" "+pinY+")")
// .attr("transform", "translate("+x+", "+y+")");


var flowerPin = document.getElementById('flowerpin');
var rotationAnimation;
var i = 0;

function startPinRotationDemo() {
  rotationAnimation = setInterval(function() {
    flowerPin.style.webkitTransform = 'rotate(' + i + 'deg)';
    i++;
    //reset if we reached the full circle - actually not necessary because of the periodicity of the circle
    if (i > 360) i = 0;
  }, 50);
}

function stopPinRotationDemo() {
  clearInterval(rotationAnimation);
}

// Gets the browser prefix
// Code from https://css-tricks.com/controlling-css-animations-transitions-javascript/
var browserPrefix = "";
navigator.sayswho = (function() {
  var N = navigator.appName,
    ua = navigator.userAgent,
    tem;
  var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
  M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
  M = M[0];
  if (M == "Chrome") {
    browserPrefix = "webkit";
  }
  if (M == "Firefox") {
    browserPrefix = "moz";
  }
  if (M == "Safari") {
    browserPrefix = "webkit";
  }
  if (M == "MSIE") {
    browserPrefix = "ms";
  }
})();

// d3.selectAll("circle").transition()
//     .duration(750)
//     .delay(function(d, i) { return i * 10; })
//     .attr("r", function(d) { return Math.sqrt(d * scale); });