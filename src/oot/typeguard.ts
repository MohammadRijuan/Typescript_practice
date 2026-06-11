// type guard 


type alphaNumeric = number | string;

const add =(num1 : alphaNumeric, num2 : alphaNumeric) => {

    if(typeof num1 === 'number' && typeof num2 ==="number"){
        return num1+ num2;
    }
    else {
        return num1.toString() + num2.toString(); // concatanate as strings
    }
}


const sum = add(5, 10); // 15
console.log(sum);

const concatWord = add(5,"hello");

console.log(concatWord); 


// another example 

type User = {
    name: string;
}

type Adminuser = {
    name: string;
    role : "Admin";
}

const GetUserinfo = (user : User | Adminuser) =>{
    if("role" in user){ //role wrap in typeguard otherswise it will give error because role is not in user type
        return `name is ${user.name} and his role is ${user.role}`;
    }
    else {
        return `name is ${user.name} and his role is user`;
    }
}

const fahad = GetUserinfo({name : "Fahad", role : "Admin"});
console.log(fahad)