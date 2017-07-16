var angle = 0;
var slider;
var increasing;

function setup() {
  createCanvas(400, 400);
  angle = 0;
  increasing = true;
  slider = createSlider(0, TWO_PI, PI / 4, PI/32);
}

function draw() {
  background(51);
  angle = slider.value();
  // if (increasing) {
  // 	angle += .001;
  // } else {
  // 	angle -= .001;
  // }
  // if (angle > PI/2) {
  // 	increasing = false;
  // }
  // if (angle < -PI/2) {
  // 	increasing = true;
  // }
  stroke(255);
  translate(200, height);
  branch(100);

}

function branch(len) {
	line(0,0,0,-len);
	translate(0,-len);
	if (len > 4) {
		push();
		rotate(angle);
		branch(len * .73);
		pop();
		push();
		rotate(-angle);
		branch(len * .73);
		pop();
	}
}