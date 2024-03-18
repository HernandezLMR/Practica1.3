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
    screenSize = Size(800, 600)
    constructor(size = Size, position = Position){
        this.size = size;
        this.position = position;
    }
}