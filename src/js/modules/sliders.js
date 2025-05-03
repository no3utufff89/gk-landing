import { Controller, Navigation, Pagination } from 'swiper/modules';
import { SLIDER_SETTINGS } from './settings.js';
import 'swiper/css/pagination';
import Swiper from 'swiper';

export function roomsSlider() {
    const winDowsize = window.innerWidth;
    let outerSlider;
    let innerSlider;
    let paginationSlider;
    outerSlider = new Swiper('.rooms-swiper-outer', {
        modules: [Navigation, Controller],
        loop: true,
        slidesPerView: 1,
        noSwiping: true,
        observer: true,
        spaceBetween: 40,
        allowTouchMove: false,
    });

    innerSlider = new Swiper('.rooms-swiper-inner', {
        loop: true,
        speed: 800,
        nested: true,
        noSwiping: false,
        preventClicks: true,
        initialSlide: 2,
        centeredSlides: false,
        spaceBetween: 21,

        breakpoints: {
            1440: {
                spaceBetween: 21,
                slidesPerView: 'auto',
                centeredSlides: true,
            },
            1000: {
                spaceBetween: 16,
                slidesPerView: 'auto',
            },
            300: {
                spaceBetween: 20,
                height: 252,

                slidesPerView: 'auto',
            },
        },
    });
    paginationSlider = new Swiper('.pagination-slider', {
        modules: [Controller],
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
}
// export const createPlansSlider = sliderContainerTagName => {
//     new Swiper(sliderContainerTagName, SLIDER_SETTINGS.plansSlider);
//     (function () {
//         const allSlides = document.querySelectorAll('.swiper-slide-duplicate');
//         allSlides.forEach(element => {
//             element.removeAttribute('data-fancybox');
//         });
//     })();
// };
// export function createHouseSlider(sliderContainerTagName) {
//     const houseSwiper = new Swiper(sliderContainerTagName, {
//         loop: true,
//         spaceBetween: 40,
//         slidesPerView: 'auto',
//         module: [Navigation, Pagination],
//         preventClicks: true,
//         speed: 800,
//         initialSlide: 3,
//         navigation: {
//             nextEl: '.house-slider__control_right',
//             prevEl: '.house-slider__control_left',
//         },
//         pagination: {
//             el: '.bullets',
//             dynamicBullets: 3,
//             dynamicMainBullets: 1,
//             clickable: true,
//         },
//     });
// }
