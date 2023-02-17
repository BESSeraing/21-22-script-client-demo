export class Square {
    color;
    size;
    posX;
    posY;
    speed;
    element;
    move() {
        this.posX += this.speed;
        if (this.posX > this.element.parentElement.offsetWidth) {
            this.posX = 0;
        }
        this.element.style.left = this.posX + 'px';
    }

    toElement() {
        this.element = document.createElement('div');
        this.element.style.backgroundColor = this.color;
        this.element.style.position = 'absolute';
        this.element.style.left = this.posX + 'px';
        this.element.style.top = this.posY + 'px';
        this.element.style.height = this.size + 'px';
        this.element.style.width = this.size + 'px';

        document.getElementById("viewPort").appendChild(this.element);

    }
}
