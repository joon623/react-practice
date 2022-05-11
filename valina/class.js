/*
* class expressions
* An important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed.
* Code like the following will throw a ReferenceError:
* */

let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

console.log(Rectangle.name);

let Rectangle2 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

console.log(Rectangle2.name);


const Triangle = class {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
}

// Generator methods
class Polygon {
    constructor(...sides) {
        console.log(sides)
        this.sides = sides;
    }

    // method
    * getSides() {
        for (const side of this.sides) {
            yield side
        }
    }
}

const pentagon = new Polygon(1, 2, 3, 4, 5);
console.log([...pentagon.getSides()])

// Static methods and properties
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static displayName = "Point"

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance;    // undefined
p2.displayName; // undefined
p2.distance;    // undefined

console.log(Point.displayName)
console.log(Point.distance(43, 511))

// Binding this with prototype and static methods
class Animal {
    speak() {
        return this;
    }

    static get() {
        return this;
    }
}


let obj = new Animal();
console.log(obj.speak()); // Animal {}
console.log(Animal.get()); // [class Animal]

let speak = obj.speak;
speak(); // undefined


function Meeting() {
}

Meeting.prototype.speak = function () {
    return this;
}

Meeting.eat = function () {
    return this;
}

let meeting = new Meeting()
let meetingSpeak = meeting.speak();
console.log(meetingSpeak.speak())
meetingSpeak.speak();  // global object (in non–strict mode)

let meetingEat = Meeting.eat;
meetingEat();
console.log(meetingEat())

console.log(Meeting.eat())


// Private field declarations
class Square {
    #height = 100;
    #width;

    constructor(height, width) {
        this.#height = height;
        this.#width = width
    }

    #length = 1001;
}


const square = new Square(20, 30);
console.log(square.height)

class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} is my cat`);
    }
}

class Cheeze extends Cat {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} always attacks`)
    }
}

const cheeze = new Cheeze("cheeze");
console.log(cheeze.speak())
console.log(cheeze.name)

class MyArray extends Array {
    // override species to the parent Array constructor
    static get [Symbol.species]() {
        return Array;
    }
}

let a = new MyArray(1, 2, 3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true

// Mix-ins
let calculatorMixin = Base => class extends Base {
    calc() {
    }
}

let randomizerMixin = Base => class extends Base {
    randomize() {
    }
}