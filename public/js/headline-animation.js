document.fonts.ready.then(function () {
    anime.timeline({
        loop: false
    }).add({
        targets: '.job-title .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
    }).add({
        targets: '.job-title .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => (-.825 + 0.57 * 3 * i) + "em"
    }).add({
        targets: '.job-title .web',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
    }).add({
        targets: '.job-title .software',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.job-title .ampersand',
        opacity: [0, 1],
        translateX: ['100vw', 0],
        // translateY: '-1px',
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.job-title .developer',
        opacity: [0, 1],
        letterSpacing: '3em',
        marginRight: '-3em',
        easing: "easeOutExpo",
    })
});