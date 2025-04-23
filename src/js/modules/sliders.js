import { Navigation, Pagination } from 'swiper/modules';
import { SLIDER_SETTINGS } from './settings.js';
import 'swiper/css/pagination';
// export const createRoomsSlider = sliderContainerTagName => {
//     new Swiper(sliderContainerTagName, {
//         modules: [Navigation, Pagination],
//         observer: true,
//         observeParents: true,
//         speed: 800,
//         loop: true,
//         preventClicks: true,
//         initialSlide: 2,
//         centeredSlides: false,
//         spaceBetween: 21,
//         breakpoints: {
//             1440: {
//                 spaceBetween: 21,
//                 slidesPerView: 'auto',
//                 centeredSlides: true,
//             },
//             1000: {
//                 spaceBetween: 16,
//                 slidesPerView: 'auto',
//             },
//             300: {
//                 spaceBetween: 20,
//                 height: 252,

//                 slidesPerView: 'auto',
//             },
//         },
//         pagination: {
//             el: '.slider-points',
//             clickable: true,
//             bulletClass: 'control-element',
//             bulletElement: 'li',
//             type: 'custom',
//         },
//     });

//     (function () {
//         const allSlides = document.querySelectorAll('.swiper-slide-duplicate');
//         allSlides.forEach(element => {
//             element.removeAttribute('data-fancybox');
//         });
//     })();
// };
export const roomsSlider = () => {
    const allBtns = [...document.querySelectorAll('.outer-slide')];
    const attrText = [];
    allBtns.forEach(item => {
        attrText.push({
            title: item.getAttribute('data-label'),
            text: item.getAttribute('data-text'),
        });
    });

    const roomSlider = new Swiper('.rooms-swiper-outer', {
        modules: [Navigation, Pagination],
        loop: true,
        slidesPerView: 1,
        noSwiping: true,
        observer: true,
        spaceBetween: 40,
        allowTouchMove: false,
        on: {
            paginationUpdate: () => {
                const activePagElem = document.querySelector('.slider-points__point-active');
                if (!activePagElem) return;
                const activSticker = activePagElem.querySelector('.room__sticker');
                const activePagElemWidth = activePagElem.offsetWidth;
                const activePagElemHeight = activePagElem.offsetHeight;
                const activStickerWidth = activSticker.offsetWidth;
                const activStickerHeight = activSticker.offsetHeight;
                const leftOffset = (activStickerWidth - activePagElemWidth) / 2;
                const bottomOffset = activePagElemHeight + 24;
                activSticker.style.cssText = `
            left:-${leftOffset}px;
            bottom:${bottomOffset}px;
            `;
                const activeMobileStiker = document.querySelector('.mobile-sticker__desc');
                activeMobileStiker.textContent = activSticker.querySelector('p').textContent;
            },
        },
        breakpoints: {
            1260: {
                pagination: {
                    el: '.slider-points',
                    clickable: true,
                    type: 'bullets',
                    bulletClass: 'slider-points__point',
                    bulletActiveClass: 'slider-points__point-active',
                    clickableClass: 'clickable-pagination',
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    bulletElement: 'div',
                    enabled: true,
                    renderBullet: function (index, className) {
                        return `
                        <div class="${className}">${attrText[index].title}
                            <div class="room__sticker">
                                <p class="room__desc">${attrText[index].text}</p>
                            </div>
                        </div>
                        `;
                    },
                },
            },
            300: {
                pagination: {
                    el: '.slider-points',
                    clickable: true,
                    type: 'bullets',
                    bulletClass: 'slider-points__point',
                    bulletActiveClass: 'slider-points__point-active',
                    clickableClass: 'clickable-pagination',
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    bulletElement: 'div',
                    enabled: true,
                    renderBullet: function (index, className) {
                        return `
                        <div class="${className}">${attrText[index].title}
                            <div class="room__sticker">
                                <p class="room__desc">${attrText[index].text}</p>
                            </div>
                        </div>
                        `;
                    },
                },
            },
        },
    });

    new Swiper('.rooms-swiper-inner', {
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
    window.addEventListener('resize', () => {
        if (window.innerWidth < 1260) {
            console.log('df');
        }
    });
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
