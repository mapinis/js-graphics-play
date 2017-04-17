var circle = {
    rad: 100,
    color: 'blue'
};
var pulley = {
    color: 'brown',
    strokeWeight: 10
};

new Circle(circle.rad + pulley.strokeWeight + 10, 400, circle.rad).fill(circle.color).addTo(stage);
new Circle(800 - (circle.rad + pulley.strokeWeight + 10), 400, circle.rad).fill(circle.color).addTo(stage);

