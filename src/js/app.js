import { Swiper } from 'swiper';
import { burgerControls, eyeControls, resizeControl, videoControl } from './modules/controls.js';
import * as flsFunctions from './modules/functions.js';
import { pageElements } from './modules/pageElements.js';
import { SLIDER_SETTINGS } from './modules/settings.js';
import { Virtual } from 'swiper/modules';

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
let innerSlider;
function initRooms() {
    innerSlider = new Swiper('.rooms-swiper-inner', {
        modules: [Virtual],
        loop: true,
        slidesPerView: 'auto',
        breakpoints: {
            1440: {
                spaceBetween: 21,
                centeredSlides: true,
            },
            300: {
                spaceBetween: 20,
            },
        },
    });

    innerSlider.forEach(slider => {
        if (slider.slides.length === 3) {
            const customSettings = {
                loop: false,

                breakpoints: {
                    1440: {
                        centeredSlides: false,
                        slidesPerView: 2.5,
                    },
                    300: {
                        slidesPerView: 1.1,
                        spaceBetween: 20,
                    },
                },
            };
            const newSwttings = { ...slider.params, ...customSettings };
            slider.destroy();
            slider = new Swiper('.rooms-swiper-inner', newSwttings);
        }
        if (slider.slides.length === 2) {
            const customSettings = {
                loop: false,
                slidesPerView: 2.3,
                spaceBetween: 21,
                slidesOffsetBefore: 10,
                breakpoints: {
                    1440: {
                        centeredSlides: false,
                        allowTouchMove: false,
                    },
                    300: {
                        slidesPerView: 1.1,
                        spaceBetween: 20,
                        slidesOffsetBefore: 0,
                    },
                },
            };
            const newSwttings = { ...slider.params, ...customSettings };
            slider.destroy();
            slider = new Swiper('.rooms-swiper-inner', newSwttings);
        }
        if (slider.slides.length === 1) {
            const customSettings = {
                loop: false,
                slidesPerView: 1,
            };
            const newSwttings = { ...slider.params, ...customSettings };
            slider.destroy();
            slider = new Swiper('.rooms-swiper-inner', newSwttings);
            if (window.innerWidth > 1260) {
                slider.slides[0].style.cssText = `
            max-width: 1215px; margin: 0 auto`;
            }
            if (window.innerWidth > 1600) {
                slider.slides[0].style.cssText = `
            max-width: 1500px; margin: 0 auto`;
            }
        }
    });
}
initRooms();
window.addEventListener(
    'resize',
    flsFunctions.debounce(function () {
        initRooms();
    }, 250)
);
