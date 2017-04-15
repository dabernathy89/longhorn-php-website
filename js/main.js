jQuery(document).ready(function($){
    $('body').vegas({
        slides: [
            { src: 'img/backgrounds/1.jpg' },
            { src: 'img/backgrounds/2.jpg' },
            { src: 'img/backgrounds/3.jpg' },
            { src: 'img/backgrounds/4.jpg' },
            { src: 'img/backgrounds/5.jpg' },
            { src: 'img/backgrounds/6.jpg' },
            { src: 'img/backgrounds/7.jpg' },
            { src: 'img/backgrounds/8.jpg' },
            { src: 'img/backgrounds/9.jpg' },
            { src: 'img/backgrounds/10.jpg' },
            { src: 'img/backgrounds/11.jpg' },
            { src: 'img/backgrounds/12.jpg' },
            { src: 'img/backgrounds/13.jpg' },
        ],
        shuffle: true,
        overlay: '/img/background-overlay.png',
        timer: false,
        delay: 7500
    });
});