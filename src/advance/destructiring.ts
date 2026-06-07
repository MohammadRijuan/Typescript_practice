// mapped types

const arryofNum : number[] = [1,2,3,4,5]

const arryofStr : string[] = ["a", "b", "c", "d"]

const arrayofMap : number[] = arryofNum.map(num => num * 2);


type AreaofNum ={
    height: number;
    width: number;
}

// type Areaofstr ={
//     height: number;
//     width: number;
// }

type height = AreaofNum["height"];


type AreaOfString<T> ={
    [key in keyof T] : string;
}

const area1 : AreaOfString<{height: string; width: string}> = {
    height: "10",
    width: "20",
}

