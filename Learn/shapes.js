
var circle = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 125) + 125, Math.floor(Math.random() * window.innerHeight - 625) + 325), 50);
circle.fillColor = 'red';

var circle = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 100) + 100, Math.floor(Math.random() * window.innerHeight - 500) + 200), 60);
circle.fillColor = 'orange';

var circle = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 100) + 100, Math.floor(Math.random() * window.innerHeight - 500) + 200), 70);
circle.fillColor = 'yellow';

var circle = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 100) + 100, Math.floor(Math.random() * window.innerHeight - 500) + 200), 80);
circle.fillColor = 'green';

var circle = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 100) + 100, Math.floor(Math.random() * window.innerHeight - 500) + 200), 90);
circle.fillColor = 'blue';

var circle = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 125) + 125, Math.floor(Math.random() * window.innerHeight - 625) + 325), 100);
circle.fillColor = 'indigo';

var circle = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 100) + 100, Math.floor(Math.random() * window.innerHeight - 500) + 200), 105);
circle.fillColor = 'violet';

var circle = new Shape.Circle(new Point(Math.floor(Math.random() * window.innerWidth - 100) + 100, Math.floor(Math.random() * window.innerHeight - 500) + 200), 110);
circle.fillColor = 'grey';
circle.fillColor = 'orangered';
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }