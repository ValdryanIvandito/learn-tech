// Example how to use this contact app: 
// node app add --name="John" --phoneNumber="087723423542" --email="john@gmail.com" 

const yargs = require('yargs');
const { saveContact } = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Add new contact',
    builder: {
        name: {
            describe: 'Full name',
            demandOption: true,
            type: 'string',
        },
        phoneNumber: {
            describe: 'Phone number',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
    },
    handler(argv) {
        const contact = {
            name: argv.name,
            phoneNumber: argv.phoneNumber,
            email: argv.email,
        };
        saveContact(argv.name, argv.phoneNumber, argv.email);
    },
});

yargs.parse();