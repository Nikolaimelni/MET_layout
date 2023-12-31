'use strict';

const form = document.querySelector('.contacts__form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
});
