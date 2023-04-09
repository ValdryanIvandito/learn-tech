//-----------------------------------------------------//
const threshold = 10;

for (let rep = 1; rep <= threshold; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
//-----------------------------------------------------//

console.log('\n');

//-----------------------------------------------------//
const valdryan = [
    'Valdryan',
    'Ivandito',
    2022 - 1995,
    'Data Engineeer',
    ['Sofian', 'Gerry', 'Ruben'],
    true
];

for (let i = 0; i < valdryan.length; i++) {
    console.log(valdryan[i], typeof valdryan[i]);
}
//-----------------------------------------------------//

console.log('\n');

//-----------------------------------------------------//
const types = [];

for (let j = 0; j < valdryan.length; j++) {
    // Reading from valdryan array
    console.log(valdryan[j], typeof valdryan[j]);

    // Filling types array
    //types[j] = typeof valdryan[j];
    types.push(typeof valdryan[j]);
}

console.log(types);
//-----------------------------------------------------//

console.log('\n');

//-----------------------------------------------------//
const actualYear = 2022;
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let x = 0; x < years.length; x++) {
    ages.push(actualYear - years[x]);
}

console.log(ages);
//-----------------------------------------------------//

console.log('\n');

//-----------------------------------------------------//
// Continue
console.log (`--- ONLY STRINGS ---`);
for (let a = 0; a < valdryan.length; a++) {
    if (typeof valdryan[a] !== 'string') continue;
    console.log(valdryan[a], typeof valdryan[a]);
}
//-----------------------------------------------------//

console.log('\n');

//-----------------------------------------------------//
// break
console.log (`--- BREAK WITH NUMBER ---`);
for (let b = 0; b < valdryan.length; b++) {
    if (typeof valdryan[b] === 'number') break;
    console.log(valdryan[b], typeof valdryan[b]);
}
//-----------------------------------------------------//

console.log('\n');

//-----------------------------------------------------//
// Looping backward
for (let i = valdryan.length - 1; i >= 0; i--) {
    console.log(i, valdryan[i]);
}
//-----------------------------------------------------//

console.log('\n');

//-----------------------------------------------------//
// Nested Loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
//-----------------------------------------------------//