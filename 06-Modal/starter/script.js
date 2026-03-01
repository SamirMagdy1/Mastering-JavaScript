'use strict';

// Define our elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// To select multiple elements with same class
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  //   console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Adding EventListeners
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// Handlling Keyboard events
document.addEventListener('keydown', function (e) {
  // Passing an event object to our handler function that contain the information about the event
  //   console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
