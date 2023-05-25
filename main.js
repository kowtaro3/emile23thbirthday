'use strict';

{
  /* 写真 */

  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
      if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click',() => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }

    dots[0].classList.add('current');
    }

    function updateDots() {
      dots.forEach(dot => {
        dot.classList.remove('current');
      });
      dots[currentIndex].classList.add('current');    
    }

updateButtons();
setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });

window.addEventListener('resize', () => {
  moveSlides();
});



/* プレゼント */

const presentopen = document.getElementById('presentopen');
const presentopen2 = document.getElementById('presentopen2');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');


presentopen.addEventListener('click', () => {
  modal.classList.remove('hidden2');
  mask.classList.remove('hidden2');
});

presentopen2.addEventListener('click', () => {
  modal.classList.remove('hidden2');
  mask.classList.remove('hidden2');
});

yes.addEventListener('click', () => {
  modal.classList.add('hidden2');
  mask.classList.add('hidden2');
});

no.addEventListener('click', () => {
  modal.classList.add('hidden2');
  mask.classList.add('hidden2');
});

mask.addEventListener('click', () => {
  // modal.classList.add('hidden2');
  //mask.classList.add('hidden2');
  no.click();
});


/* 手紙 */

const letteropen = document.getElementById('letteropen');
const read = document.getElementById('read');
const notyet = document.getElementById('notyet');
const modalwindow = document.getElementById('modalwindow');
const cover = document.getElementById('cover');

letteropen.addEventListener('click', () => {
  modalwindow.classList.remove('hidden3');
  cover.classList.remove('hidden3');
});

read.addEventListener('click', () => {
  modalwindow.classList.add('hidden3');
  cover.classList.add('hidden3');
});

notyet.addEventListener('click', () => {
  modalwindow.classList.add('hidden3');
  cover.classList.add('hidden3');
});

cover.addEventListener('click', () => {
  // modal.classList.add('hidden2');
  //mask.classList.add('hidden2');
  notyet.click();
});

}