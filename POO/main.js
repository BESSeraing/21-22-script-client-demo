import {Square} from "./Square.js";
import {Timer} from "./Timer.js";
let timer = new Timer();
timer.toDomElement();

let fps = 1000/60;

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
    timer.thick();
    document.getElementById("timerDiv").textContent = Math.floor(timer/60/60) + ':' + (Math.floor(timer/60) % 60);
    square.move();
    squareRed.move();
}

setInterval(anim, fps);
