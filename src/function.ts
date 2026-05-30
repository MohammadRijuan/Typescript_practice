// function

// arrow function , normal function



// 1. normal function

// function add (num1:number,num2:number):number{
//     return num1+num2;
// }

// console.log(add(2,3));



// 2. arrow function

// const addArrow = (num1 : number, num2 :number) =>{ 
//     return num1+num2;
// }

// console.log(addArrow(7,3))






// 3. object function method

// u dont need to write function keyword in object method
// this is a keyword in JavaScript that refers to an object associated with the current execution context.


// const poorUser = {
//     name : "Rijuan",
//     balance : 50,
//     addBalance(money: number){
//         const total = this.balance + money;
//         return total;
//     }
// }

// console.log(poorUser.addBalance(1000))



const arr : number[] = [1,2,3,4,5]

const sqrArray = arr.map((num: number) =>{
    return num*num
})

console.log(sqrArray)