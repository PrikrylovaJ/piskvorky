'use strict';

let kdoJeNaTahu = 'circle';
let btnElements = document.querySelectorAll('.btn');
const iconElm = document.querySelector('.icon-left');

const hra = (event) => {
    if (kdoJeNaTahu === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    kdoJeNaTahu = 'cross';
    iconElm.src = 'images/cross.svg';
    } else if (kdoJeNaTahu === 'cross') {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    kdoJeNaTahu = 'circle';
    iconElm.src = 'images/circle.svg';
    } else {
    event.target.style.display ='none';
  } 
}

for (let i = 0; i < btnElements.length; i++) {
  const btnElm = btnElements[i];
  btnElm.addEventListener('click', hra);
}
