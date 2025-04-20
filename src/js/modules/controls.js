import { createFancy } from './funcyModals.js';
import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';
import { SLIDER_SETTINGS } from './settings.js';
//eyes control
export function eyeControls(elements) {
    elements.eyeBtn.forEach((eye, index) => {
        eye.addEventListener('click', () => {
            for (let i = 0; i < elements.eyeBlocks.length; i += 1) {
                if (index === i) {
                    elements.eyeBlocks[i].style.opacity = elements.eyeBtn[i].classList.contains(
                        'active'
                    )
                        ? '1'
                        : `${elements.eyeBlocks[i].opacity}`;
                    if ((elements.eyeBlocks[i].style.opacity = ''))
                        elements.eyeBlocks[i].style.opacity = '0';
                    elements.eyeBtn[i].classList.toggle('active');
                } else {
                    elements.eyeBtn[i].classList.remove('active');
                    elements.eyeBlocks[i].style.opacity = '';
                }
            }
        });
    });
}
export function burgerControls(elements) {
    elements.burgerBtn.addEventListener('click', () => {
        elements.burgerBtn.classList.toggle('active');
    });
}
export function resizeControl(elements) {
    elements.resizeBtn.forEach(el => el.addEventListener('click', createFancy));
    elements.houseResizeBtn.forEach(el => el.addEventListener('click', createFancy));
}
export function videoControl(elements) {
    elements.videoPlayBtn.addEventListener('click', createFancy);
}

export function tabsControl(elements) {
    elements.allTabBtns.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            for (let i = 0; i < elements.allTabBlocks.length; i += 1) {
                if (index === i) {
                    elements.allTabBlocks[i].classList.add('slider-wrapper_active');
                    elements.allTabBtns[i].classList.add('slider-points__btn_active');
                } else {
                    elements.allTabBlocks[i].classList.remove('slider-wrapper_active');
                    elements.allTabBtns[i].classList.remove('slider-points__btn_active');
                }
            }
        });
    });
}
export function windowResizeControl() {
    window.addEventListener('resize', () => {
        if (window.innerWidth === 1000) {
            console.log('<1000');
        }
    });
}
