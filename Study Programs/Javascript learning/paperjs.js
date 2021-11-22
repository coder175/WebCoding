var xrandom = Math.floor(Math.random() * 1000) + 1;
var yrandom = Math.floor(Math.random() * 500) + 1;
console.log(xrandom);
var shape = new Shape.Circle(new Point(xrandom, yrandom), 100);
shape.fillColor = 'black';

var text = new PointText(new Point(xrandom - 70, yrandom));
text.fillColor = 'white';
text.fontSize = "25";
text.fontFamily = "Trebuchet MS";
text.content = 'Hello, World!';

var rectangle = new Rectangle(new Point(50, 50), new Point(150, 100));
var path = new Path.Rectangle(rectangle);
path.fillColor = 'white';
path.selected = true;