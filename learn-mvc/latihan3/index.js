// Synchronous Process
// console.log('Hello Binarian!');
// console.log('Javascript');
// console.log('Developer');

// Asynchronous Process
// console.log('Hello Binarian!');
// setTimeout(function() { console.log('Javascript!') }, 100);
// console.log('Developer');

// ===================================================================================================================== //

// const fs = require('fs');

// fs.readFile('contoh.txt', { encoding: 'utf-8' }, (err, data) => {
//     console.log('Ini muncul pertama');
//     console.log('Isi File:', data);
// });

// console.log('Ini muncul kedua');

// ===================================================================================================================== //

// const fs = require('fs');

// const data = fs.readFileSync('contoh.txt', { encoding: 'utf-8' });
// console.log(data);

// console.log('Ini muncul kedua');

// ===================================================================================================================== //

// const fs = require('fs');

// const dataAsync = fs.readFile('contoh.txt', { encoding: 'utf-8' }, () => {});
// const dataSync = fs.readFileSync('contoh.txt', { encoding: 'utf-8 '});
// console.log('1', dataAsync);
// console.log('2', dataSync);

// const func1 = function() {
//     'Hello';
// }

// const func2 = function() {
//     'Hello2';
// }

// ===================================================================================================================== //

// asynchronous process
// console.log('Hello Binarian');
// setTimeout(() => {
//     console.log('Javascript');
// }, 100);
// setTimeout(() => {
//     console.log('hello 2')
// }, 0);
// console.log('Developer');

// ===================================================================================================================== //

// set interval
// let urutan = 0
// let variabelSetInterval = setInterval(function() {
//   // === set timeout didalam set interval
//   setTimeout(function() {
//     console.log('Hai Janet')
//   })

//   console.log('Hai, Budi ! urutan:', urutan);
//   urutan = urutan + 1

//   // stop set interval
//   if(urutan === 10) clearInterval(variabelSetInterval);
// }, 1000)

// console.log('Apakah aku jalan duluan ?');

