// type assertion mean assuming type what i define it ... here ts will not conflict because m assuming that variable...we have to confirm first before defining anything

let anyone: any;

anyone = 'Rijuan';



const KgToGmConverter = (input: number | string) : string | number | undefinded =>{
    if (typeof input === 'number') {
        return input * 1000;
    }
    else if (typeof input === 'string') {
        const [Totalkg] = input.split(" ");
        return Number(Totalkg) * 1000;
     }
}

const result1 = KgToGmConverter(2) as number;
console.log(result1); 

const result2 = KgToGmConverter('3 kg') as string;
console.log(result2);
