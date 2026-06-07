

type a = null;
type b = undefined;

type c = a extends number ? true : b extends undefined ? true : false;


type RichPeopleVehcles = {
    car:string;
    bike:string;
    boat:string;
}


type checkVehicle = <T>(vehicle: T) => T extends keyof RichPeopleVehcles ? true : false;