// spread operator
// it will need every sector

// array typpe


// const friends : string[] = ['Alice', 'Bob', 'Charlie'];

// const newFriends : string[] = ['David', 'Eve'];


// // friends.push(newFriends);  //wrong way   // output: ['Alice', 'Bob', 'Charlie', ['David', 'Eve']]  
// friends.push(...newFriends);  //correct way  // output: ['Alice', 'Bob', 'Charlie', 'David', 'Eve']

// console.log(friends); // Output: ['Alice', 'Bob', 'Charlie', 'David', 'Eve']




// object type


// const person = {
//     name : "Rijuan",
//     age : 20,
//     city : "ctg"
// }

// const newPerson = {
//     hobby: "coding",
//     profession : "student"
// }

// const userInfo = {...person, ...newPerson}  // it will merge the two objects into one object

// console.log(userInfo) // Output: { name: 'Rijuan', age: 20, city: 'ctg', hobby: 'coding', profession: 'student' }





// rest operator

// const sendInvite = (frnd1:string, frnd2:string, frnd3:string) =>{
//     // console.log(`You are invited ${frnd1}, ${frnd2}, ${frnd3}`);
//     const friends = [frnd1, frnd2, frnd3];
//     console.log(`You are invited ${friends.join(", ")}`);
    
// }



// this is rest operator


// const sendInvite = (...frnds:string[]) =>{
//     frnds.forEach((frnd:string) =>{
//         console.log(`You are invited ${frnd}`);
//     }
    
// )}


// sendInvite("Alice", "Bob", "Charlie") // Output: You are invited Alice, Bob, Charlie
