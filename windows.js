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
  
  class Position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
  
    move(newX, newY) {
        this.x = newX;
        this.y = newY;
    }
  }
  
  class ProgramWindow {
    constructor(size = new Size(200, 100), position = new Position()) {
        this.size = size;
        this.position = position;
        this.screenSize = new Size(800, 600); // Inicializar screenSize en el constructor
    }
  
    resize(newSize) {
        // Limitar el tamaño mínimo a 1x1
        newSize.width = Math.max(newSize.width, 1);
        newSize.height = Math.max(newSize.height, 1);
  
        // Limitar el tamaño máximo según la posición actual
        newSize.width = Math.min(newSize.width, this.screenSize.width - this.position.x);
        newSize.height = Math.min(newSize.height, this.screenSize.height - this.position.y);
  
        this.size = newSize;
    }
  
    move(newPosition) {
        // Limitar la posición mínima a 0,0
        newPosition.x = Math.max(newPosition.x, 0);
        newPosition.y = Math.max(newPosition.y, 0);
  
        // Limitar la posición máxima según el tamaño actual
        newPosition.x = Math.min(newPosition.x, this.screenSize.width - this.size.width);
        newPosition.y = Math.min(newPosition.y, this.screenSize.height - this.size.height);
  
        this.position = newPosition;
    }
  }
  
  function changeWindow(windowInstance, newSize, newPosition) {
    windowInstance.resize(newSize);
    windowInstance.move(newPosition);
    return windowInstance;
  }
  
  // Crear una instancia de ProgramWindow con los valores especificados
  let testObj = new ProgramWindow();
  console.log("Antes del cambio:");
  console.log(testObj);
  
  // Cambiar la ventana a una anchura de 400, altura de 300, y posición en x = 100, y = 150
  testObj = changeWindow(testObj, new Size(400, 300), new Position(100, 150));
  console.log("Después del cambio:");
  console.log(testObj);
  
  const size = new Size(1080,764);
  size.width;
  size.height;
  size.resize(1090,1080);
  size.width;
  size.height;