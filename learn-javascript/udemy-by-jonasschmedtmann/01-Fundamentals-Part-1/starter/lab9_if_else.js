//Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(Number("string")));

const money = 1;
// const money = 0;
if(money) {
    console.log("Don't spend it all ;)");
}

else {
    console.log("You should get a job!");
}

let height = 0;
// let height = 100;
if(height) {
    console.log("YAY! Height is defined");
}

else {
    console.log("Height is not DEFINED!")
}