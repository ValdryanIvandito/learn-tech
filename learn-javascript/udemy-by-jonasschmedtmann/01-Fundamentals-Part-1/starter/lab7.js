const name_ = "Felicia";
const age = 23;

if (age >= 18) {
    console.log(`${name_} can start driving licence 🚙`)
}

else {
    const yearLeft = 18 - age;
    console.log(`${name_} is too young, wait another ${yearLeft} years 😉`)
}

const birthYear = 2000;
let century

if(birthYear <= 2000) {
    century = 20;
    console.log(`${birthYear} birthYear is ${century} century.`)
}

else {
    century = 21;
    console.log(`${birthYear} birthYear is ${century} century.`)
}