class Size {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

        resize(newWidth, newHeight) {
            this.width = newWidth;
            this.height = newHeight;
        }
}

class Position{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
}

class ProgramWindow{
    screenSize = new Size(800, 600)
    constructor(size = new Size(200, 100), position = new Position()){
        this.size = size;
        this.position = position;
    }
}

let testObj = new ProgramWindow(new Size(50, 60), new Position());
console.log(testObj.size.width);