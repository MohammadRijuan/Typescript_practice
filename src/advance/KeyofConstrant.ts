// key of constrant 


type richPeopleVehicles = {
    car:string;
    bike:string;
    boat:string;
}

type myVehicle1 = "bike" | "car" | "cng";
type myVehicle2 = keyof richPeopleVehicles;

const myVehicle : myVehicle2 = "car";


const myUser = {
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



