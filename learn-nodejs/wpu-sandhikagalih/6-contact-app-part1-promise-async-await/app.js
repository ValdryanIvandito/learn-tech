// Import modules
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// if data directory not exist, then make it
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// if contacts.json file not exist, then make it
const filePath = './data/contacts.json';
if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8');
}

// Old Code - Callback Hell! (Asynchronous)
// rl.question('Enter your name: ', (name) => {
//     rl.question('Enter your phone number: ', (phoneNumber) => {
//         fs.readFile('./data/contacts.json', 'utf-8', (err, dataBuffer) => {
//             if(err) throw err;

//             const contact = {name, phoneNumber};
//             const contacts = JSON.parse(dataBuffer);

//             contacts.push(contact);
//             fs.writeFile('./data/contacts.json', JSON.stringify(contacts), (err) => {
//                 if(err) throw err;

//                 console.log(`Your name is ${name} and your phone number is ${phoneNumber}.`);
//                 console.log('Thankyou for submitting the data');
//                 rl.close();
//             });
//         });
//     });
// });

// Solve Callback Hell Issue Use Promise & Async Await
// const question1 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter your name: ', (name) => {
//             resolve(name);
//         });
//     });
// };

// const question2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter your phone number: ', (phoneNumber) => {
//             resolve(phoneNumber);
//         });
//     });
// };

// const question3 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter your email: ', (email) => {
//             resolve(email);
//         });
//     });
// };

// Refactoring question1-3
const askQuestion = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (value) => {
            resolve(value);
        });
    });
};

const main = async () => {
    const name = await askQuestion('Enter your name: ');
    const phoneNumber = await askQuestion('Enter your phone number: ');
    const email = await askQuestion('Entern your email: ');

    const contact = {name, phoneNumber, email};
    const dataBuffer = fs.readFileSync('./data/contacts.json', 'utf-8');
    const contacts = JSON.parse(dataBuffer);

    contacts.push(contact);
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts));

    console.log(`Your name is ${name} and your phone number is ${phoneNumber}.`);
    console.log('Thankyou for submitting the data');
    rl.close();
};

main();