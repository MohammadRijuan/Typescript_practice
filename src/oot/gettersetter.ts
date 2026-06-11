class BankAccount {
    private _balance: number;

    constructor(balance: number) {
        this._balance = balance;
    }

    // Setter
    set deposit(amount: number) {
        this._balance += amount;
    }

    // Getter
    get balance(): number {
        return this._balance;
    }
}

const fahad = new BankAccount(1000);

fahad.deposit = 1200; // calls the setter

console.log(fahad.balance); // calls the getter