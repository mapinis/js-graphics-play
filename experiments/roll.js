var cen = 400;
var colorRoller = 'blue';
var colorCircle = 'red';
var sides = 2;
var radSmall = 195;
var radBig = 390;

new Circle(cen, cen, radBig).stroke(colorCircle, 3).addTo(stage);

/*var roller = new Path().stroke(colorRoller, 3).moveTo(cen, cen);
	for(var k = 1; k <= sides; k++){
		roller.lineTo(radSmall * Math.cos((k * 2 * Math.PI) / sides) + cen - radSmall,
					 radSmall * Math.sin((k * 2 * Math.PI) / sides) + cen);
	}
	roller.lineTo(cen, cen);

roller.addTo(stage);

roller.attr({ rotation: 0, origin: { x: cen, y: cen } });
roller.animate(new KeyframeAnimation('5s', {
	from: { rotation: 0 },
	to: { rotation: 2 * Math.PI }
}, { repeat: Infinity }));*/

var points = [];
for(var k = 1; k <= sides; k++){
		points.push([radSmall * Math.cos((k * 2 * Math.PI) / sides) + cen - radSmall,
					 radSmall * Math.sin((k * 2 * Math.PI) / sides) + cen]);
	}

var circles = [];
points.forEach(function(point) {
	circles.push(new Circle(point[0], point[1], 5).fill(colorRoller).addTo(stage))
}, this);

circles.forEach(function(circle) {
	circle.animate()
}, this);

