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
        initialSlide: 2,
        rewind: true,
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
            el: '.plans-pagination',
            dynamicBullets: true,
            dynamicMainBullets: 1,
            clickable: true,
            bulletClass: 'plans-pagination__bullet',
            modifierClass: 'plans-pagination__',
            bulletActiveClass: 'plans-pagination__bullet_main',
        },
    },
    houseSlider: {
        modules: [Pagination, Navigation],
        loop: true,
        spaceBetween: 40,
        preventClicks: true,
        speed: 800,
        initialSlide: 3,
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        navigation: {
            nextEl: '.house-slider__control_right',
            prevEl: '.house-slider__control_left',
        },
        breakpoints: {
            300: {
                slidesPerGroup: 1,
            },
        },
        pagination: {
            el: '.house-pagination',
            dynamicBullets: true,
            dynamicMainBullets: 1,
            clickable: true,
            bulletClass: 'house-pagination__bullet',
            modifierClass: 'house-pagination__',
            bulletActiveClass: 'house-pagination__bullet_main',
        },
    },
};
