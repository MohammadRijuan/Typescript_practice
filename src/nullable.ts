// nullable types


const getUser = (input : string | null)=> {
    if (input ){
        console.log(`From Db : ${input}`);
    }
    else{
        console.log('from db : All user')
    }
}


getUser('Rijuan');


// unknown type

const discount = (input: unknown): void => {
    if (typeof input === 'number') {
        const totalDiscount = input * 0.9;
        console.log(totalDiscount);
    } 
    else if (typeof input === 'string') {
        const [totalDiscount] = input.split(' ');
        console.log(Number(totalDiscount) * 0.9);
    } 
    else {
        console.log('Invalid input');
    }
};

discount(10);      // 9
discount('20 Tk');   // ['20%']
discount(null);    // Invalid input



// void

// this function will not return anything

const Errormsg = (msg : string): never => {
    throw new Error(msg);
}

Errormsg('This is an error message');