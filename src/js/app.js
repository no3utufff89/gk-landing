'use strict';
import { Swiper } from 'swiper';

import {
    burgerControls,
    eyeControls,
    resizeControl,
    tabsControl,
    videoControl,
    windowResizeControl,
} from './modules/controls.js';
import * as flsFunctions from './modules/functions.js';
import { pageElements } from './modules/pageElements.js';
import { SLIDER_SETTINGS } from './modules/settings.js';
import { createHouseSlider, createPlansSlider, createRoomsSlider } from './modules/sliders.js';
flsFunctions.isWebp();

const elements = pageElements();

eyeControls(elements);
burgerControls(elements);
resizeControl(elements);
videoControl(elements);
tabsControl(elements);
//sliders
new Swiper('.rooms-slider-wrapper', SLIDER_SETTINGS.roomSlider);
new Swiper('.plans-swiper', SLIDER_SETTINGS.plansSlider);
// new Swiper('.house-swiper', SLIDER_SETTINGS.houseSlider);
// createPlansSlider('.plans-swiper');
createHouseSlider('.house-swiper');
windowResizeControl();

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
