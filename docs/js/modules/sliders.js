import { Controller, Navigation, Pagination } from 'swiper/modules';
import { SLIDER_SETTINGS } from './settings.js';
import 'swiper/css/pagination';
import Swiper from 'swiper';
let outerSlider;
let innerSlider;
let paginationSlider;

export const roomsSlider = () => {
    outerSlider = new Swiper('.rooms-swiper-outer', {
        modules: [Navigation, Controller],
        loop: true,
        slidesPerView: 1,
        noSwiping: true,
        observer: true,
        spaceBetween: 40,
        allowTouchMove: false,
        // thumbs: {
        //     swiper: paginationSlider,
        // },
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
        slideToClickedSlide: true,
        // init: false,
        enabled: true,
        slidesPerView: 'auto',
        // slidesOffsetBefore: 0,

        centeredSlides: true,
        virtualTranslate: false,
        setWrapperSize: true,
        watchSlidesProgress: false,
        centeredSlidesBounds: true,
        initialSlide: 1,
        // virtualTranslate: true,

        breakpoints: {
            1260: {
                // spaceBetween: 10,
                allowTouchMove: false,
                slidesPerView: 'auto',
            },
            300: {
                spaceBetween: 8,
                allowTouchMove: false,
            },
        },
    });
    // paginationSlider.wrapperEl.style.transform = 'translateX(10px)';
    // paginationSlider.slidesEl.style.width = '50px';
    // paginationSlider.controller.control = outerSlider;
};
export const createPlansSlider = sliderContainerTagName => {
    new Swiper(sliderContainerTagName, SLIDER_SETTINGS.plansSlider);
    (function () {
        const allSlides = document.querySelectorAll('.swiper-slide-duplicate');
        allSlides.forEach(element => {
            element.removeAttribute('data-fancybox');
        });
    })();
};
export function createHouseSlider(sliderContainerTagName) {
    const houseSwiper = new Swiper(sliderContainerTagName, {
        loop: true,
        spaceBetween: 40,
        slidesPerView: 'auto',
        module: [Navigation, Pagination],
        preventClicks: true,
        speed: 800,
        initialSlide: 3,
        navigation: {
            nextEl: '.house-slider__control_right',
            prevEl: '.house-slider__control_left',
        },
        pagination: {
            el: '.bullets',
            dynamicBullets: 3,
            dynamicMainBullets: 1,
            clickable: true,
        },
    });
}

const pagButtons = [...document.querySelectorAll('.rooms-pagination__item')];

pagButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        const dataIndex = item.getAttribute('data-index');

        outerSlider.slideTo(dataIndex, 800, false);

        const allSlideCategories = [...document.querySelectorAll('.outer-slide')];
        const dataText = allSlideCategories[index].getAttribute('data-text');
        const dataTextDest = document.querySelector('.current-room-info__text');
        dataTextDest.textContent = dataText;
        console.log(`realIndex`, index);

        // console.log(`realIndex`, realIndex);

        // console.log('outerIndex', outerSlider.activeIndex);

        // console.log(paginationSlider.getTranslate());

        // console.log(`paginationSlider.minTranslate()`, paginationSlider.minTranslate());
    });
});
