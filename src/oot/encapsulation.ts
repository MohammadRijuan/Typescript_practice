class SchoolAccount{
    public userId:number;
    public Roll :number;
    private payment :number;

    constructor(userId:number,Roll:number,payment:number){
        this.userId = userId;
        this.Roll = Roll;
        this.payment = payment;
    }

    addPayment(payment:number){
        return this.payment = this.payment + payment;
    }
}

const fahad = new SchoolAccount(1,2,2000)

console.log(fahad.addPayment(1000));

