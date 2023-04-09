'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

// console.log(btnShowModal);

// for(let i = 0; i < btnShowModal.length; i++) {
//     console.log(btnShowModal[i].textContent);
// }


// // 1. Code-1
// for(let i = 0; i < btnShowModal.length; i++) {
//     btnShowModal[i].addEventListener('click', function() {
//         console.log('Button clicked');
//         modal.classList.remove('hidden');    
//         overlay.classList.remove('hidden');    
//     })
// };

// btnCloseModal.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });


//2. Code-2 (More DRY)
const showModal = function() {
    console.log('Button clicked');
    modal.classList.remove('hidden');    
    overlay.classList.remove('hidden'); 
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(x) {
    //console.log('A key was pressed');
    //console.log(x);
    console.log(x.key);

    if(x.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})