// key of constrant 


type richPeopleVehicles = {
    car:string;
    bike:string;
    boat:string;
}

type myVehicle1 = "bike" | "car" | "cng";
type myVehicle2 = keyof richPeopleVehicles;

const myVehicle : myVehicle2 = "car";


type User = {
    id:number ,
    name:string,
    addreess: {
        city:string,
    }
}


const myUser: User = {
    id:1,
    name: "rijuan",
    addreess: {
        city: "ctg",
    }

};


const myid = myUser["id"];
const myname = myUser["name"];
const mycity = myUser["addreess"];

console.log({myid, myname, mycity});


const getFromobj = <x>(obj: x, key: keyof x ) =>{
    return obj[key];
}


const result = getFromobj(myUser, "name");

console.log(result)



