// Import core module (file system)
const fs = require('fs');

// Read some string from ./data.read1.txt (synchronous method)
const data = fs.readFileSync('./data/read1.txt', 'utf-8');
console.log(data);

// Write some string to ./data.write1.txt (synchronous method)
try {
    fs.writeFileSync('./data/write1.txt', 'Hello World! Synchronous method');
} catch(err) {
    console.log(err);
}

// Read some string from ./data.read2.txt (asynchronous method)
fs.readFile('./data/read2.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// Write some string to ./data/write2.txt (asynchronous)
fs.writeFile('./data/write2.txt', 'Hello World! Asynchronous method', (err) => {
    console.log(err);
});

