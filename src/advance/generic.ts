// dynamically generalize

type genericArray<T> = Array<T>;




// const frnds: string[] = ['Alice', 'Bob', 'Charlie'];
//alternative
const frnds: genericArray<string> = ['Alice', 'Bob', 'Charlie'];




// const roll: number[] = [1, 2, 3];
//alternative
const roll: genericArray<number>= [1, 2, 3];

// object array generic
const user : genericArray<{ name: string; age: number }>=[
    {
        name : 'Rijuan',
        age : 20
    },
    {
        name : 'Monju',
        age : 18
    }   

]





// const isBoolean: boolean[] = [true, false, true];
const isBoolean: genericArray<boolean> = [true, false, true];




// example 2

type Coordinate<X,Y> = [X,Y]

const co1 : Coordinate<number,number> = [10,20];

const co2 : Coordinate<string,string> = ['10','20'];


