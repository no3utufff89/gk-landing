import { createFancy } from './funcyModals.js';
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

export const scrollYControl = elem => {
    return window.innerWidth;
};
