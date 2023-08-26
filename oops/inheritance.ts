class Shape {
  getArea() {
    // The implementation of getArea() can be defined here for common behavior
  }
}

class Circle extends Shape {
  constructor(public radius: number, public color: string = '') {
    super();
  }

  getArea() {
    return 3.14 * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(public length: number, public width: number, public color: string = '') {
    super();
  }

  getArea() {
    return this.length * this.width;
  }
}
