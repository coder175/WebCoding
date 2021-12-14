shapes();
function shapes() {
    var rectangle = new Rectangle(new Point(0, 0), new Point(1500, 10000));
    var path = new Path.Rectangle(rectangle);
    path.fillColor = 'white';
    var xrandom = Math.floor(Math.random() * 900) + 100;
    var yrandom = Math.floor(Math.random() * 500) + 100;
    console.log(xrandom);

    var shape1 = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 125) + 125, Math.floor(Math.random() * window.innerHeight - 125) + 125), 125);
    shape1.fillColor = 'green';

    var shape4 = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 100) + 100, Math.floor(Math.random() * window.innerHeight - 100) + 100), 86);
    shape4.fillColor = 'red';

    var shape2 = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 100) + 100, Math.floor(Math.random() * window.innerHeight - 100) + 100), 40);
    shape2.fillColor = 'orange';


    var shape3 = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 100) + 100, Math.floor(Math.random() * window.innerHeight - 100) + 100), 38);
    shape3.fillColor = 'blue';

    var shape0 = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 100) + 100, Math.floor(Math.random() * window.innerHeight - 100) + 100), 25);
    shape0.fillColor = 'yellow';

    var shape = new Shape.Circle(new Point(xrandom, yrandom), 100);
    shape.fillColor = 'black';

    var text = new PointText(new Point(xrandom - 70, yrandom + 9));
    text.fillColor = 'white';
    text.fontSize = "25";
    text.fontFamily = "Trebuchet MS";
    text.content = 'Hello, World!';
}


setInterval(function () {
    shapes();
}, 1000);