let width = window.innerWidth;
let height = window.innerHeight;
let fallingObjects = [];

setInterval(fall, 1000/60);



let stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
});

let dragLayer = new Konva.Layer();

let colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'cyan',
    'purple',
];
let colorIndex = 0;
let layersArr = [];


/*
 * create 10 layers each containing 1000 shapes to create
 * 10,000 shapes.  This greatly improves performance because
 * only 1,000 shapes will have to be drawn at a time when a
 * circle is removed from a layer rather than all 10,000 shapes.
 * Keep in mind that having too many layers can also slow down performance.
 * I found that using 10 layers each made up of 1,000 shapes performs better
 * than 20 layers with 500 shapes or 5 layers with 2,000 shapes
 */
for (let i = 0; i < 1; i++) {
    let layer = new Konva.Layer();
    layersArr.push(layer);

    for (let n = 0; n < 1; n++) {
        addCircle(layer);
    }

    stage.add(layer);
}
stage.add(dragLayer);



stage.on('mousedown', function (evt) {
    let circle = evt.target;
    fallingObjects.push(circle);

});

function fall() {
    for (let fallingObject of fallingObjects) {
        let pos = fallingObject.absolutePosition();
        let nextPos = {x: pos.x, y: pos.y +10};

        if (nextPos.y < height) {
            fallingObject.absolutePosition(nextPos);
        }
    }
}

function addCircle(layer) {
    let color = colors[colorIndex++];
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    let randX = Math.random() * stage.width();
    let randY = 10 ;
    let circle = new Konva.Circle({
        x: randX,
        y: randY,
        radius: 20,
        fill: color,
    });

    layer.add(circle);
}
