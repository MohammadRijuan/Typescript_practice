// iife function

function f1(){
    console.log("abul");
}

function f1(){
    console.log("kuddus");
}

// it will override 1st one and give outout kuddus
f1()


// we can write iife function

// (function f1(){
//     console.log("abul");
// })();

// (function f1(){
//     console.log("kuddus");
// })();

// it will give abul and kuddus