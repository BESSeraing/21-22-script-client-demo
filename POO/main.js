import {Square} from "./Square.js";

let square = new Square();
square.posX = 0;
square.posY = 200;
square.color = '#0000FF';
square.speed = 10;
square.size = 50;
square.toElement();


let squareRed = new Square();
squareRed.posX = 400;
squareRed.posY = 100;
squareRed.color = '#FF9999';
squareRed.speed = 1;
squareRed.size = 10;
squareRed.toElement();

function anim() {
    square.move();
    squareRed.move();
}

setInterval(anim, 1000/60);
