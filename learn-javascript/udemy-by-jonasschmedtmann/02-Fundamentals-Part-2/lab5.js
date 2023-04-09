const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(`The last index is ${friends [friends.length - 1]}`); //Show data in the last index

friends[1] = 'Jay'; //Change index[1] data which is 'Steven' to 'Jay'
console.log(friends);
console.log(`The Index[1] data has been changed from Steven to ${friends[1]}`);
console.log(`\n`);

const lastName = 'Ivandito';
const job = 'Blockchain Developer';
const birthYear = 1994;
const actualYear = 2022;
const valdryan = ['Valdryan', lastName, actualYear - birthYear, job, friends];
console.log(valdryan);
console.log(`The length of this array is ${valdryan.length}`);
console.log(`\n`);

function calcAge(actualYear, birthYear) {
    return actualYear - birthYear;
} 
const years = [1998, 1945, 2000, 2012, 2022];

const age1 = calcAge(actualYear, years[0]);
const age2 = calcAge(actualYear, years[1]);
const age3 = calcAge(actualYear, years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(actualYear, years[0]), calcAge(actualYear, years[1]), calcAge(actualYear, years[years.length - 1])];
console.log(ages);