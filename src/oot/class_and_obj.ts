// object orient typescript - oot/oop

class Animal {
    name:string;
    species:string;
    sound:string;

    constructor ( name:string, species:string, sound:string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound(){
        return `${this.name} says ${this.sound}`;
    }
}


const fahad = new Animal("fahad","kutto"," gew gew");

console.log(fahad.makeSound());


// more professional

class Person {
    constructor(public name: string, private age: number, private salary: number) {}
}

const person1 = new Person("fahad", 30, 50000);

console.log(person1)