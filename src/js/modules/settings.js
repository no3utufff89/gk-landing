import { Navigation, Pagination } from 'swiper/modules';

export const SLIDER_SETTINGS = {
    roomSlider: {
        modules: [Navigation, Pagination],
        observer: true,
        observeParents: true,
        speed: 800,
        loop: true,
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
    },
    plansSlider: {
        modules: [Navigation, Pagination],
        observer: true,
        observeParents: true,
        speed: 800,
        loop: true,
        slidesPerView: 1,
        preventClicks: true,
        spaceBetween: 20,
        initialSlide: 3,
        navigation: {
            nextEl: '.plans-right',
            prevEl: '.plans-left',
        },
        breakpoints: {
            1440: {},
            1260: {},
            375: {
                slidesPerView: 1,
            },
            300: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },
        pagination: {
            el: '.bullets',
            dynamicBullets: true,
            dynamicMainBullets: 1,
            clickable: true,
        },
    },
    houseSlider: {
        modules: [Navigation, Pagination],
        loop: true,
        loopedSlidesLimit: null,
        slidesPerView: 'auto',
        spaceBetween: 40,
        speed: 800,
        virtual: {
            addSlidesAfter: 4,
        },
        breakpoints: {
            1400: {
                spaceBetween: 40,
            },
            320: {
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: '.house-slider__control_right',
            prevEl: '.house-slider__control_left',
        },
    },
};
