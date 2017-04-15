var cen = 400;
var colorRoller = 'blue';
var colorCircle = 'red';
var sides = 8;
var radSmall = 195;
var radBig = 390;

new Circle(cen, cen, radBig).stroke(colorCircle, 3).addTo(stage);

var roller = new Path().stroke(colorRoller, 3).moveTo(cen, cen);
	for(var k = 1; k <= sides; k++){
		roller.lineTo(radSmall * Math.cos((k * 2 * Math.PI) / sides) + cen - radSmall,
					 radSmall * Math.sin((k * 2 * Math.PI) / sides) + cen);
	}
	roller.lineTo(cen, cen);

roller.addTo(stage);

roller.attr({ rotation: 0, origin: { x: cen - radSmall, y: cen } });
roller.animate(new KeyframeAnimation('5s', {
	from: { rotation: 0 },
	to: { rotation: 2 * Math.PI }
}, { repeat: Infinity }));
/*roller.animate(new KeyframeAnimation('5s', {
	from: { x: 0, y: 0, origin: { x: 0, y: 0 } },
	'50%': { x: cen, y: cen, origin: { x: cen - radSmall, y: cen } },
	to: { x: 0, y: 0, origin: { x: 0, y: 0 } }
}, { repeat: Infinity }));*/