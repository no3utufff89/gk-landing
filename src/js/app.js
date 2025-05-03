import { Swiper } from 'swiper';
import {
    burgerControls,
    eyeControls,
    modalControl,
    openModal,
    resizeControl,
    videoControl,
} from './modules/controls.js';
import * as flsFunctions from './modules/functions.js';
import { pageElements } from './modules/pageElements.js';
import { SLIDER_SETTINGS } from './modules/settings.js';
import { roomsSlider } from './modules/sliders.js';

flsFunctions.isWebp();

const elements = pageElements();

eyeControls(elements);
burgerControls(elements);
resizeControl(elements);
videoControl(elements);
//sliders
new Swiper('.plans-swiper', SLIDER_SETTINGS.plansSlider);

new Swiper('.house-swiper', SLIDER_SETTINGS.houseSlider);
// roomsSlider();
const winDowsize = window.innerWidth;

const outerSlider = new Swiper('.rooms-swiper-outer', {
    loop: true,
    slidesPerView: 1,
    noSwiping: true,
    observer: true,
    spaceBetween: 40,
    allowTouchMove: false,
});
let innerSlider;
function roominit() {
    innerSlider = new Swiper('.rooms-swiper-inner', {
        loop: true,
        speed: 800,
        nested: true,
        noSwiping: false,
        preventClicks: true,
        initialSlide: 0,
        watchOverflow: true,
        slidesPerView: 'auto',

        breakpoints: {
            1440: {
                spaceBetween: 21,
                centeredSlides: true,
            },
            1000: {
                spaceBetween: 16,
            },
            300: {
                spaceBetween: 20,
                height: 252,
                centeredSlides: false,
            },
        },
    });

    innerSlider.forEach(slider => {
        if (slider.slides.length === 3) {
            slider.params.loop = false;
            slider.params.slidesPerView = 'auto';
            slider.params.centeredSlides = false;
            slider.originalParams.initialSlide = 2;
            // slider.params.breakpoints[1440].centeredSlides = false;
            slider.params.rewind = true;
            slider.update();
        }
        if (slider.slides.length < 3) {
            slider.params.loop = false;
            slider.params.slidesPerView = 2;
            slider.params.centeredSlides = false;
            slider.update();
        }
        if (window.innerWidth < 700) {
            slider.params.centeredSlides = false;
            slider.update();
        }

        if (slider.slides.length === 2) {
            slider.params.loop = false;
            slider.params.slidesPerView = 2;
            slider.originalParams.allowTouchMove = false;
            slider.originalParams.enabled = false;
            slider.params.breakpoints[1440].centeredSlides = false;

            slider.update();
        }
        if (slider.slides.length < 2) {
            slider.params.loop = false;
            slider.params.slidesPerView = 1;

            slider.update();
        }
    });
}
roominit();
window.addEventListener(
    'resize',
    flsFunctions.debounce(function () {
        roominit();
    }, 250)
);

const paginationSlider = new Swiper('.pagination-slider', {
    enabled: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    virtualTranslate: false,
    setWrapperSize: true,
    watchSlidesProgress: false,
    centeredSlidesBounds: true,
    preventInteractionOnTransition: true,
    initialSlide: 1,
    breakpoints: {
        1260: {
            allowTouchMove: false,
            slidesPerView: 'auto',
        },
        300: {
            spaceBetween: 8,
            allowTouchMove: true,
        },
    },
});
const pagButtons = [...document.querySelectorAll('.rooms-pagination__item')];

pagButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        const dataIndex = item.getAttribute('data-index');
        for (let i = 0; i < pagButtons.length; i += 1) {
            if (index === i) {
                pagButtons[i].classList.add('rooms-pagination__item-active');
            } else {
                pagButtons[i].classList.remove('rooms-pagination__item-active');
            }
        }
        outerSlider.slideTo(dataIndex, 100, false);
        paginationSlider.slideToClickedSlide();
        const allSlideCategories = [...document.querySelectorAll('.outer-slide')];
        const dataText = allSlideCategories[index].getAttribute('data-text');
        const dataTextDest = document.querySelector('.current-room-info__text');
        dataTextDest.textContent = dataText;
    });
});

const inp = document.querySelectorAll('input[type=tel]');
if (inp) {
    inp.forEach(item => {
        item.addEventListener('focus', () => {
            item.parentNode.querySelector('.questions-form__placeholder').style.display = 'none';
        });
        item.addEventListener('blur', () => {
            if (item.value.length === 0)
                item.parentNode.querySelector('.form__placeholder').style.display = 'block';
        });
        Inputmask({ mask: '+7 999 999-99-99' }).mask(item);
    });
}
