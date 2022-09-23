/* Tutorial 4
   Example 1 JavaScript code
*/

class Square {
    constructor(side) {
      this.side = side;
    }
    calcPerimeter() {
        return this.side * 4;
    }
    calcArea() {
        return this.side * this.side;
    }
    calcDiagonal() {
        return Math.sqrt(2 * this.calcArea()).toFixed(3);
    }
    describe() {
        return console.log("Square with side " + this.side + " has perimeter of " + this.calcPerimeter() + ", area of " + this.calcArea()+ ", and diagonal of " + this.calcDiagonal());
    }
  }

sq1 = new Square(2);
sq2 = new Square(3);
sq3 = new Square(4);

sq1.describe();
sq2.describe();
sq3.describe();