import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp(); // для коректной работы пребразования файлов в webp формат

export const burgerBtn = document.querySelector('.burger-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
});
