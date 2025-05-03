export const pageElements = () => {
    const burgerBtn = document.querySelector('.burger-menu');
    const eyeBtn = [...document.querySelectorAll('.advantages__eye-icon')];
    const eyeBlocks = [...document.querySelectorAll('.advantages__eye-block')];
    const offerLink = document.querySelector('.offer-block__link');
    const offerText = document.querySelector('.offer-block__text');
    const allTabBtns = [...document.querySelectorAll('.slider-points__btn')];
    const allTabBlocks = [...document.querySelectorAll('.slider-wrapper')];
    const videoPlayBtn = document.querySelector('.video__play-btn');
    const resizeBtn = [...document.querySelectorAll('.room__resize-btn')];
    const houseResizeBtn = [...document.querySelectorAll('.house-slider__resize-btn')];
    const roomControls = [...document.querySelectorAll('.control-element')];
    const modalBtn = document.querySelectorAll('.bank-offers__action-element');
    const modal = document.querySelectorAll('.modal');
    const successModal = document.querySelector('.success-modal');
    const subtmitDtn = document.querySelector('.questions-form__btn');
    const modalSubmitBtn = document.querySelector('.modal__btn');
    return {
        burgerBtn,
        eyeBtn,
        eyeBlocks,
        offerLink,
        offerText,
        allTabBtns,
        allTabBlocks,
        videoPlayBtn,
        resizeBtn,
        houseResizeBtn,
        roomControls,
        modalBtn,
        modal,
        successModal,
        subtmitDtn,
        modalSubmitBtn,
    };
};
