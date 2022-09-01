var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
let mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}; 
let j = 0.01;
let i = 0;
let isGreater = false;
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']; // Event Listeners
// Function to give random colors : 
function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
// Function to get random integer from range : 
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); 

class Particle {  
  constructor(x,y,radius,color,gravity){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.gravity = gravity;
  }
  update(){
    j++;
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    this.y += (this.gravity);
    if(this.y + this.radius > canvas.height){
      this.gravity = -this.gravity;
    }
    
  }
}
//   function Object(x, y, radius, color) {
//     _classCallCheck(this, Object);

//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//   }

//   _createClass(Object, [{
//     key: "draw",
//     value: function draw() {
//       c.beginPath();
//       c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//       c.fillStyle = this.color;
//       c.fill();
//       c.closePath();
//     }
//   }, {
//     key: "update",
//     value: function update() {
//       this.draw();
//     }
//   }]);

//   return Object;
// }(); // Implementation


let particles;

function init() {
  particles = [];

  for (var i = 0; i < 400; i++) {
    let x = ((Math.random() * canvas.width) - 800) + 800;
    let y = ((Math.random() * canvas.height) - 300) ;
    let particle = new Particle(x,y,40,randomColor(colors),randomIntFromRange(1,2))
    particles.push(particle)
    console.log(particles)
  }
} // Animation Loop


init();
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgb(0,0,0,1)"
  c.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
    particle.update()
    })
}

animate();


/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function (module, exports) {




function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
module.exports = {
    randomIntFromRange: randomIntFromRange,
    randomColor: randomColor,
    distance: distance
  }})
