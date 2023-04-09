// Import core module
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Easy Method (Synchronous)
// rl.question('Enter your name: ', (name) => {
//     rl.question('Enter your phone number: ', (phoneNumber) => {

//         const contact = {name, phoneNumber};
//         const dataBuffer = fs.readFileSync('./data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(dataBuffer);

//         contacts.push(contact);
//         fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));

//         console.log(`Your name is ${name} and your phone number is ${phoneNumber}.`);
//         console.log('Thankyou for submitting the data');
//         rl.close();
//     });
// });

// Callback Hell! (Asynchronous)
rl.question('Enter your name: ', (name) => {
    rl.question('Enter your phone number: ', (phoneNumber) => {
        fs.readFile('./data/contacts.json', 'utf-8', (err, dataBuffer) => {
            if(err) throw err;

            const contact = {name, phoneNumber};
            const contacts = JSON.parse(dataBuffer);

            contacts.push(contact);
            fs.writeFile('./data/contacts.json', JSON.stringify(contacts), (err) => {
                if(err) throw err;

                console.log(`Your name is ${name} and your phone number is ${phoneNumber}.`);
                console.log('Thankyou for submitting the data');
                rl.close();
            });
        });
    });
});