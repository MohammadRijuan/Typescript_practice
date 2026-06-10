class Person {
    constructor(
        public name: string,
        public age: number
    ) {}

    getSleep(hours: number): void {
        console.log(`${this.name} is sleeping ${hours} hours a day`);
    }
}

// Student inherits from Person
class Student extends Person {
    constructor(
        name: string,
        age: number,
        public grade: string
    ) {
        super(name, age); // call Person constructor
    }
}

const student1 = new Student("Fahad", 20, "A+");

console.log(student1.name); // Fahad
console.log(student1.grade); // A+
student1.getSleep(8); // inherited method