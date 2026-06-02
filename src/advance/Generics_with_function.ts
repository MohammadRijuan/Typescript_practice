// Generics with function

// const createArrayWithString = (value : string) => [value];


// const createArrayWithNumber = (value : number) => [value];


// const createArrayWithObj = (value: {
//     id: number;
//     name: string;  
// })=>{
//     return [value];
// }


//for their alternative we can use generic function



const createArrayWithGeneric = <T>(value : T) : T[] => [value];

const result1 = createArrayWithGeneric("Hello");

const result2 = createArrayWithGeneric(100);

const result3 = createArrayWithGeneric({
    id: 1,
    name: "Rijuan",
});


// multiple generics
const createTuple = <T, U>(first: T, second: U): [T, U] => {
    return [first, second];
};

const result = createTuple<string, number>("Rijuan", 20);



// 

const AddStdnt = <T>(studentInfo: T): T=>{
    return {
        course : "TypeScript",
        ...studentInfo
    }
}


const student1 = {
    name : "Rijuan",
    age : 20
}

const result4 = AddStdnt(student1);
console.log(result4);