import { Navigation, Pagination } from 'swiper/modules';
import { SLIDER_SETTINGS } from './settings.js';
import 'swiper/css/pagination';
export const createRoomsSlider = sliderContainerTagName => {
    new Swiper(sliderContainerTagName, SLIDER_SETTINGS.roomSlider);

    (function () {
        const allSlides = document.querySelectorAll('.swiper-slide-duplicate');
        allSlides.forEach(element => {
            element.removeAttribute('data-fancybox');
        });
    })();
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
        navigation: {
            nextEl: '.house-slider__control_right',
            prevEl: '.house-slider__control_left',
        },
        pagination: {
            el: '.bullets',
            dynamicBullets: 5,
            clickable: true,
        },
    });
}
