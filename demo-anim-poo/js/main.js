import {Ball} from "./ball.js";
import {Stage} from "../node_modules/konva/lib/Stage.js";
import {Layer} from "../node_modules/konva/lib/Layer.js";


let width = window.innerWidth;
let height = window.innerHeight;

let stage = new Stage({
    container: 'container',
    width: width,
    height: height,
});

let layer = new Layer();
stage.add(layer);

stage.on('click', (event) => {
    console.log('click', event);
    let ball = new Ball();
    ball.init(layer, event.evt.offsetX, event.evt.offsetY);
})
