import {Circle} from "../node_modules/konva/lib/shapes/Circle.js";

export class Ball {
    radius= 25;
    color= "#FF3224";

    dirX = 0;
    dirY = 1;
    speed = 10;

    circle; // va être un objet de type Circle;

    init(layer, posX, posY) {
        this.circle = new Circle({
            x: posX,
            y: posY,
            radius: this.radius,
            fill: this.color,
        });
        layer.add(this.circle);
        this.fall();

    }

    fall() {
        console.log(this.circle);
        let pos = this.circle.absolutePosition();

        let offsetX = this.dirX * this.speed;
        let offsetY = this.dirY * this.speed;

        let nextPos = {x: pos.x + offsetX, y: pos.y +offsetY};

        // if (nextPos.y < height) {
            this.circle.absolutePosition(nextPos);
        // }
        requestAnimationFrame(() => this.fall());

    }

}
