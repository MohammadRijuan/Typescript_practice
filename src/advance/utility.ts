// utility


type product = {
    name:string;
    price:number;
    discount:number;    
    stock:number;
    color?: string;
}


type productSummary = Pick<product, "name" | "price">;

type productWithoutStock = Omit<product, "stock" | "color">;

type productWithColor = Required<product>;

const product : productWithColor = {
    name: "laptop",
    price: 1000,   
    discount: 100,
    stock: 10,
    color: "black", 
}

type optionalProduct = Partial<product>; // after hovering it will be question mark

type readonlyProduct = Readonly<product>;  // after hovering it will be readonly

const emptyObj: Record<string, unknown> = {};


const product1={
    id: 1,
    name: "laptop",
    price: 1000,
}
