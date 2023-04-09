'use strict';


// // 1. How to manipulation text element:
// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 1;
// document.querySelector('.highscore').textContent = 100;


// // 2. How to manipulation input element:
// document.querySelector('.guess').value = 777;
// console.log(document.querySelector('.guess').value);


// // 3. How to listen the event of the button element:
// document.querySelector('.check').addEventListener('click', function() {
//     console.log(document.querySelector('.guess').value);
// });

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = document.querySelector('.guess').value;
//     console.log(guess);
// });

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = document.querySelector('.guess').value;
//     console.log(guess);
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
// });

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value); 
//     console.log(guess, typeof guess);

//     if(!guess) {
//         document.querySelector('.message').textContent = '❌ No Number!';
//     }

//     else {
//         document.querySelector('.message').textContent = '🎉 Correct Number!'; 
//     }
// });


// // 4. Implementing Game Logic
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// // document.querySelector('.number').textContent = secretNumber;
// console.log(secretNumber);
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value); 

//     //When guess is not a number
//     if(!guess) {
//         document.querySelector('.message').textContent = '❌ No Number!';
//     } 
    
//     //When guess is a correct number
//     else if(guess === secretNumber) {
//         document.querySelector('.number').textContent = secretNumber;
//         document.querySelector('.message').textContent = '🎉 Correct Number!'; 
//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';

//         if(score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }
//     }

//     //When guess is too high
//     else if(guess > secretNumber) {
//         if(score > 1) {
//             score--;
//             document.querySelector('.score').textContent = score;
//             document.querySelector('.message').textContent = 'Too High!';
//         }

//         else{
//             score = 0;
//             document.querySelector('.score').textContent = score;
//             document.querySelector('.message').textContent = 'You Lost!'; 
//         }
//     }

//     //When guess is to low
//     else if(guess < secretNumber) {
//         if(score > 1) {
//             score--;
//             document.querySelector('.message').textContent = 'Too Low!';
//             document.querySelector('.score').textContent = score;
//         }

//         else{
//             score = 0;
//             document.querySelector('.message').textContent = 'You Lost!';
//             document.querySelector('.score').textContent = score; 
//         }
//     }
// });

// document.querySelector('.again').addEventListener('click', function() {
//     score = 20;
//     document.querySelector('.score').textContent = score;

//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     console.log(secretNumber);

//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';

//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
// });


// 5. Final Code
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;  
} 

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value); 

    //When guess is not a number
    if(!guess) {
        displayMessage('❌ No Number!');
    } 
    
    //When guess is a correct number
    else if(guess === secretNumber) {
        displayMessage('🎉 Correct Number!'); 
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //When guess is wrong
    else {
        if(score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
        }
        
        else {
            score = 0;
            document.querySelector('.score').textContent = score;
            displayMessage('You Lost!'); 
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);

    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});