//---------------//
//Array VS Object//
//---------------//

const valdryanArray = ['Valdryan', 'Ivandito', 2022 - 1994, 'Data Engineer', ['Sofian', 'Gerry', 'Ruben']];

const valdryanObject = {
    firstName : 'Valdryan',
    lastName  : "Ivandito",
    age       : 2022 - 1994,
    job       : 'Data Engineer',
    friends   : ['Sofian', 'Gerry', 'Ruben']
};

console.log(valdryanObject);

console.log(valdryanObject.firstName);
console.log(valdryanObject['lastName']);

const nameKey = 'Name';
console.log(valdryanObject['first' + nameKey]);
console.log(valdryanObject['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Valdryan? (Choose between firstName, lastName, age, job, and friends): ');

if(valdryanObject[interestedIn]) {
    console.log(valdryanObject[interestedIn]);
}

else {
    console.log('Wrong request! (Choose between firstName, lastName, age, job, and friends)');
}

valdryanObject.location = 'Indonesia';
valdryanObject['twitter'] = '@valdryanivandito';
console.log(valdryanObject);

console.log(`${valdryanObject.firstName} has ${valdryanObject.friends.length} friends and his best friend is called ${valdryanObject.friends[0]}`);