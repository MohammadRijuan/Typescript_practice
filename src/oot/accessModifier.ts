// access modifiers in TypeScript


class BankAccount {
    public readonly id: number; // can be accessed from anywhere, but cannot be modified after initialization
    public name: string;
    private balance : number; // can only be accessed within the class

    constructor(id : number , name: string, balance : number){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    addBalance (bal:number){
        return ` the user named ${this.name} has ${this.balance + bal}`;
    }

}

const fahad = new BankAccount(1, "Fahad", 1000);
console.log(fahad.name); // can access public property
console.log(fahad.id);  
// console.log(fahad.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
console.log(fahad.addBalance(500)); // the user named Fahad has 1500