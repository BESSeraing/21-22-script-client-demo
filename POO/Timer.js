export class Timer {

    milliseconds = 0;

    domElement;

    thick() {
        this.milliseconds += (1000/60);
        this.domElement.textContent = Math.floor(this.milliseconds / 1000);
    }

    toDomElement() {
        this.domElement = document.createElement('div');
        this.domElement.style = "border: 1px solid #333;position: absolute; width: 300px; height: 100px;";
        document.getElementById("viewPort").appendChild(this.domElement);

    }

}
