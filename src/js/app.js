import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp(); // для коректной работы пребразования файлов в webp формат

export const burgerBtn = document.querySelector('.burger-menu');
export const eyeBtn = [...document.querySelectorAll('.advantages__eye-icon')];
export const eyeBlocks = [...document.querySelectorAll('.advantages__eye-block')];
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',

    grabCursor: true,

    breakpoints: {
        1440: {
            spaceBetween: 21,
        },
        768: {
            spaceBetween: 16,
        },
        320: {
            spaceBetween: 20,
        },
    },

    // If we need pagination
});
eyeBtn.forEach((eye, index) => {
    eye.addEventListener('click', () => {
        for (let i = 0; i < eyeBlocks.length; i += 1) {
            if (index === i) {
                eyeBlocks[i].style.opacity = eyeBtn[i].classList.contains('active')
                    ? '1'
                    : `${eyeBlocks[i].opacity}`;
                if ((eyeBlocks[i].style.opacity = '')) eyeBlocks[i].style.opacity = '0';
                eyeBtn[i].classList.toggle('active');
            } else {
                eyeBtn[i].classList.remove('active');
                eyeBlocks[i].style.opacity = '';
            }
        }
    });
});
