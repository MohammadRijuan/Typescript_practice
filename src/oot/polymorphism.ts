// Parent/Base class
class Person {

    // Common behavior for all persons
    goSleep() {
        return 'I am a normal person who sleep 8 hours a day';
    }
}

// Student inherits all properties and methods from Person
class Student extends Person {

    // Overriding the parent method
    // Student provides its own implementation
    goSleep() {
        return 'I am a student who sleep 7 hours a day';
    }
}

// Developer inherits from Person
class Developer extends Person {

    // Overriding the parent method
    // Developer provides its own implementation
    goSleep() {
        return 'I am a developer who sleep 5 hours a day';
    }
}

// Function accepts Person type
// Because Student and Developer are also Person,
// we can pass their objects as well.
const gettingSleep = (param: Person) => {

    // Polymorphism happens here
    // TypeScript only knows param is Person,
    // but at runtime it will call the correct
    // goSleep() method based on the actual object.
    return param.goSleep();
};

// Creating objects
const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

console.log(gettingSleep(person1));
// Output: I am a normal person who sleep 8 hours a day

console.log(gettingSleep(person2));
// Output: I am a student who sleep 7 hours a day

console.log(gettingSleep(person3));
// Output: I am a developer who sleep 5 hours a day



// another example


// Parent class
class Shape {

    // Generic method
    getArea(): number {
        return 0;
    }
}

// Circle class
class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        // Call Person's constructor
        super();
        this.radius = radius;
    }

    // Overriding getArea()
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Rectangle class
class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
    }

    // Overriding getArea()
    getArea(): number {
        return this.height * this.width;
    }
}

// Polymorphic function
const calculateArea = (shape: Shape) => {
    return shape.getArea();
};

const circle = new Circle(10);
const rectangle = new Rectangle(10, 20);

console.log(calculateArea(circle));     // 314.159...
console.log(calculateArea(rectangle));  // 200