// instance of typeguard/ type narrowing


class Person {
    name:string;

    constructor (name:string){
        this.name = name;
    }
}

class Student extends Person{
    constructor(name:string){
        super(name);
    }

    Study(hours:number){
        return ` the student ${this.name} has studied for ${hours} hours today`
    }
}
class Teacher extends Person{
    constructor(name:string){
        super(name);
    }

    EarnMoney(hours:number){
        return ` the teacher ${this.name} has earned money for ${hours} hours today`
    }
}


// first way



// const getUserinfo = ( user: Person)=>{
//     if( user instanceof Student){ // type guard using instanceof
//         return user.Study(5);
//     }
//     else if ( user instanceof Teacher){
//         return user.EarnMoney(5);
//     }
//     else {        return `the user ${user.name} is neither a student nor a teacher`;
//     }
// }



// 2nd another way

const isStudent = (user: Person)=>{
    return user instanceof Student; // type guard using instanceof // will give true or false

}

const isTeacher = (user: Person)=>{ 
    return user instanceof Teacher; // type guard using instanceof // will give true or false

}

const getUserinfo = ( user: Person)=>{
    if(isStudent(user)){ // type guard using instanceof
        return user.Study(5);
    }
    else if ( isTeacher(user)){
        return user.EarnMoney(5);
    }
    else {        return `the user ${user.name} is neither a student nor a teacher`;
    }
}

const student1 = new Student("Fahad");
const teacher1 = new Teacher("Alice");

console.log(getUserinfo(student1)); // the student Fahad has studied for 5 hours today
console.log(getUserinfo(teacher1)); // the teacher Alice has earned money for 5 hours today
