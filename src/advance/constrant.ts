// constrain : provide strict rules


interface Student {
    name: string;
    age: number;
}

const AddStdnt = <T extends Student>(studentInfo: T) => {
    return {
        course: "TypeScript",
        ...studentInfo,
    };
};


const student2 = {
    name: "Hasan",
    age: 22,
    email: "hasan@gmail.com",
};

const result2 = AddStdnt(student2);

console.log(result2);