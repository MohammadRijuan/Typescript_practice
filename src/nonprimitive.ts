// array , object


// let list : string[] = ['egg','milk']

// list.push("banana");
// console.log(list)



// let mixedArr : (number | string)[] = [1,"abid",2,"joy"]

// console.log(mixedArr)

// let arr : [number,number] = [1,2,3]
// let arr2 : [number,number] = [1,2]
// let destination : [string,string,number] = ['kaptai','zoo',2]



// referrence type

// const User: {
//     readonly school : string; // access modifier cannot assign other va;\laue
//     schools : string;
//     name?: string; //optional type ..it can be exist or not
//     roll: number;
// }={
//     school: "nmc",
//     schools: "nmc",
//     name: "abid",
//     roll: 123,
// }


// User.school = 'chowdhury'
// User.schools = 'chowdhury'



// referrence type object

const user : {
    firstName : string;
    lastName : string;
    age : number;
    isMarried?: boolean;  // optional type
    hobbies : string[];
} ={
    firstName : "abid",
    lastName : "joy",
    age : 23,
    hobbies : ['cricket','football']
}

user.firstName = "joy"

console.log(user)