//object destructuring


// const person = {
//    id : 1,
//    name : {
//     firstName : "Rijuan",   
//     middleName : "monju",
//     lastName : "sijan"
//    },
//     age : 20,
//     city : "ctg"
// }

// // we will not define type while destructuring because it will automatically infer the type from the object

// const {name : {firstName, lastName} ,age, city} = person;  // we are destructuring the name object from the person object and then destructuring the firstName and lastName from the name object

// console.log(age);




//array destructutiring

const friends : string[] = ['Alice', 'Bob', 'Charlie'];

const [friend1, bestfriend, friend3] = friends;  // we are destructuring the friends array and assigning the values to friend1, friend2 and friend3

console.log(bestfriend); // Output: Alice