const fs = require('fs');
const readline = require('readline');
const xlsx = require(`xlsx`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    rl.question('Enter your phone number: ', (phoneNumber) => {
        const rawData = xlsx.readFile('./data/contacts.csv');

        const sheetName = rawData.SheetNames[0];
        const objData = xlsx.utils.sheet_to_json(rawData.Sheets[sheetName]);
        objData.push({name, phoneNumber});
        
        //console.log(objData);
        
        const convertToSheet = xlsx.utils.json_to_sheet(objData);
        const convertToCsv = xlsx.utils.sheet_to_csv(convertToSheet);
        fs.writeFileSync('./data/contacts.csv', convertToCsv);
        
        rl.close();
    });
});