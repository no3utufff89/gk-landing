import { createFancy } from './funcyModals.js';
//eyes control
let paddingValue =
    window.innerWidth > 325 ? window.innerWidth - document.documentElement.clientWidth + 'px' : 0;
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

export const scrollYControl = elem => {
    return window.innerWidth;
};
export const disableScroll = () => {
    document.body.classList.add('no-scroll');
    document.body.style.cssText = `
    padding-right: ${paddingValue};
    `;
};
export const enableScroll = () => {
    document.body.classList.remove('no-scroll');
    document.body.style.cssText = '';
};
export const openModal = modal => {
    disableScroll();
    modal.classList.add('open');
    modal.querySelector('.modal__overlay').classList.add('open');
};
export const closeModal = modal => {
    modal.querySelector('.modal__overlay').classList.remove('open');
    modal.classList.remove('open');
};
