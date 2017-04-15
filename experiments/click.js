var rad = 200;
var cen = 400;
var sides = 1;
var color = 'blue';

new Circle(cen, cen, 5).fill(color).addTo(stage);
var current = new Path().moveTo(cen, cen).stroke(color, 3).addTo(stage);

stage.on('click', function(e){
	sides++;
	var next = new Path().stroke(color, 3).moveTo(rad + cen, cen);
	for(var k = 1; k <= sides; k++){
		next.lineTo(rad * Math.cos((k * 2 * Math.PI) / sides) + cen,
					 rad * Math.sin((k * 2 * Math.PI) / sides) + cen);
	}
	next.lineTo(rad + cen, cen);
	current.morphTo(next, '300ms');
});