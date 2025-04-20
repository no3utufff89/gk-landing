import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
export function createFancy() {
    Fancybox.bind('[data-fancybox]', {
        on: {
            close: () => {
                Fancybox.destroy();
            },
        },
        contentClick: false,
        wheel: false,
        Carousel: {
            infinite: false,
        },
        Thumbs: {
            showOnStart: false,
        },
        Hash: true,
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ['close'],
            },
        },
    });
    Fancybox.Fancybox.bind('[data-fancybox="all"]', {
        Carousel: {
            infinite: false,
        },
        Thumbs: {
            showOnStart: false,
        },
    });
    Fancybox.bind('[data-fancybox="living_room"]', {
        Carousel: {
            infinite: true,
        },
        Thumbs: {
            showOnStart: false,
        },
    });
    Fancybox.bind('[data-fancybox="bath"]', {
        Carousel: {
            infinite: true,
        },
        Thumbs: {
            showOnStart: false,
        },
    });
    Fancybox.bind('[data-fancybox="house"]', {
        Carousel: {
            infinite: true,
        },
        Thumbs: {
            showOnStart: false,
        },
    });
    Fancybox.bind('[data-fancybox="video"]', {
        Carousel: {
            infinite: true,
        },
        Thumbs: {
            showOnStart: false,
        },
    });
}
