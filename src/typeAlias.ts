
type Name = {
  firstName: string;
  middleName: string;
  lastName: string;
};

// Type alias for a person
type Person = {
  id: number;
  name: Name;
  age: number;
  city: string;
};

// Creating objects using the Person type
const person1: Person = {
  id: 1,
  name: {
    firstName: "Rijuan",
    middleName: "Monju",
    lastName: "Sijan",
  },
  age: 20,
  city: "Chattogram",
};

const person2: Person = {
  id: 2,
  name: {
    firstName: "John",
    middleName: "A",
    lastName: "Doe",
  },
  age: 25,
  city: "Dhaka",
};

// Function that accepts a Person
function getFullName(person: Person): string {
  return `${person.name.firstName} ${person.name.middleName} ${person.name.lastName}`;
}

// Using the function
console.log(getFullName(person1));
console.log(getFullName(person2));

// Accessing properties
console.log(person1.age);
console.log(person2.city);