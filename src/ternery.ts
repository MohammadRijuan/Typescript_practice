// ternery , nullisgh coalescing & optinal chaining
// ? : ternary operator : decision making
// ?? : nullish coalescing operator
// ?. optional chaining

const age = 20;

const Adult = age >= 18 ? "Yes" : "No";

console.log(Adult);


// nullish 
//unedfined and null accept the nullish operator ...it cannot work on other value.... 
const usertheme = undefined;
// const usertheme = null;
// const usertheme = "";

const selectedTheme = usertheme ?? "light";

console.log(selectedTheme);
