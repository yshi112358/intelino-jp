"use strict";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ scroller: ".main-inner" });
ScrollTrigger.config({ ignoreMobileResize: false });

const tl_top = gsap.timeline({
    scrollTrigger: {
        trigger: '.top',
        start: 'bottom bottom',
        end: 'bottom top',
        // markers: true,
        scrub: 0.5,
    }
});

tl_top.to('.top-inner', {
    width: '100dvw',
    height: '100dvh',
    "border-radius": '0dvh',
    "margin-top": '0dvh',
    duration: 1,
}, "top-inner").to('.top-inner-text', {
    opacity: 0,
    duration: 1,
}, "top-inner").to('.header-inner', {
    scale: 0.8,
    y: "-1dvh",
    width: "150dvh"
}, "top-inner").to('.top-inner-cover', 10, {
    opacity: 0.7,
}, "top-inner-cover").fromTo('.about-inner-img', 10, {
    autoAlpha: 0,
}, {
    autoAlpha: 1,
}, "top-inner-cover").to('.about', {
    "background-color": "transparent",
});

const tl_about_start = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        end: 'center bottom',
        // markers: true,
        scrub: 0.7,
    }
});
tl_about_start.fromTo('.about-inner-text',
    {
        autoAlpha: 0,
        scaleX: 2,
    },
    {
        autoAlpha: 1,
        scaleX: 1,
    }, "about-inner").fromTo('.about-inner-cover', {
        autoAlpha: 0,
        y: "-10dvh",
        scale: 2,
    }, {
        autoAlpha: 1,
        y: "0dvh",
        scale: 1,
    }, "about-inner");

const tl_about_end = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'center+=10% center',
        end: 'bottom top',
        // markers: true,
        scrub: 0.7,
    }
});

tl_about_end.to('.about-inner-cover-detail', {
    opacity: 0,
}, "<").to('.about-inner-cover-arrow', {
    opacity: 0,
}, "<").to('.about-inner-text', {
    opacity: 0,
}, "<").to('.about-inner-img', {
    opacity: 0,
    x: "20dvw",
}, "<").to('.top-inner', {
    opacity: 0,
    y: "-10dvh",
    scaleY: 1.2
}, "<").to(".main-inner", {
    // "scroll-snap-type": "none",
});

const tl_learn_end = gsap.timeline({
    scrollTrigger: {
        trigger: '.learn',
        start: 'bottom top',
        end: 'bottom top',
        // markers: true,
        scrub: 0.7,
    }
});

tl_learn_end.to(".main-inner", {
    "scroll-snap-type": "none",
});


const tl_classroom_start = gsap.timeline({
    scrollTrigger: {
        trigger: '.classroom',
        start: 'top center',
        end: 'center center',
        // markers: true,
        toggleActions: 'play none none reverse',
    }
});
tl_classroom_start.fromTo('.classroom-inner-text',
    {
        autoAlpha: 0,
        y: 100,
    },
    {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
    }, "achievements-inner").fromTo('.classroom-inner-classroom', {
        autoAlpha: 0,
        y: 100,
    }, {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
    }, "achievements-inner");

const tl_awards_start = gsap.timeline({
    scrollTrigger: {
        trigger: '.awards',
        start: 'top center',
        end: 'center center',
        // markers: true,
        toggleActions: 'play none none reverse',
    }
});
tl_awards_start.fromTo('.awards-inner-text',
    {
        autoAlpha: 0,
        y: 100,
    },
    {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
    }, "awards-inner").fromTo('.awards-inner-awards-row', {
        autoAlpha: 0,
        y: 100,
    }, {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
    }, "awards-inner").to(".main-inner", {
        // "scroll-snap-type": "y mandatory",
    });
const tl_achievement_end = gsap.timeline({
    scrollTrigger: {
        trigger: '.achievements',
        start: 'bottom-=10% center',
        end: 'bottom top',
        // markers: true,
        scrub: 0.7,
    }
});
tl_achievement_end.to('.achievements-inner', {
    opacity: 0,
    y: -100,
});

window.setTimeout(setClassroomAnimation, 1000);
window.addEventListener('resize', setClassroomAnimation);

function setClassroomAnimation() {
    classroom_col_container.forEach((e, i) => {
        let classroom_row_width = e.children[0].offsetWidth;
        e.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(' + classroom_row_width * (-1) ** i + 'px)' },
        ], {
            duration: 20000,
            iterations: Infinity,
        });
    });
}

window.setTimeout(setAwardSnap, 1000);
window.addEventListener('resize', setAwardSnap);

function setAwardSnap() {
    let classroom = document.querySelector('.classroom');
    let style_c = window.getComputedStyle(classroom);
    let value_c = Number(style_c.getPropertyValue('height').replace('px', ''));

    let awards = document.querySelector('.awards');
    let style_a = window.getComputedStyle(awards);
    let value_a = Number(style_a.getPropertyValue('height').replace('px', ''));

    let dvw = window.innerWidth / 100;
    let value = value_c + 2 * dvw - (window.innerHeight - value_a - 2 * dvw);
    document.querySelector('.achievements-inner').style.top = String(-value) + "px";
}


const tl_purchase_start = gsap.timeline({
    scrollTrigger: {
        trigger: '.purchase',
        start: 'top center',
        end: 'top center',
        // markers: true,
        scrub: 0.7,
    }
});

tl_purchase_start.fromTo('.purchase-inner-img',
    {
        autoAlpha: 0,
        y: 100,
    },
    {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
    }, "purchase-inner").fromTo('.purchase-inner-text', {
        autoAlpha: 0,
        y: 100,
    }, {
        duration: 0.5,
        autoAlpha: 1,
        y: 0,
    }, "purchase-inner");

const tl_purchase_end = gsap.timeline({
    scrollTrigger: {
        trigger: '.purchase',
        start: 'bottom-=30% top',
        end: 'bottom top',
        // markers: true,
        scrub: 0.7,
    }
});

tl_purchase_end.to('.purchase-inner', {
    opacity: 0,
    y: -100,
});

var main_inner = document.querySelector('.main-inner');
var top_scrollTop = 0;
var learn_scrollTop = document.querySelector('.learn').getBoundingClientRect().top;
var classroom_scrollTop = document.querySelector('.classroom').getBoundingClientRect().top;
var purchase_scrollTop = document.querySelector('.purchase').getBoundingClientRect().top;


const yellow = "#ffd400";
const white = "#ffffff";
function setPageIndicator(index) {
    document.querySelectorAll('.page-indicator-inner-col-circle').forEach((item, item_index) => {
        if (item_index == index) {
            item.style.backgroundColor = yellow;
            item.style.width = '1.5dvh';
            item.style.height = '1.5dvh';
        } else {
            item.style.backgroundColor = white;
            item.style.width = '1dvh';
            item.style.height = '1dvh';
        }
    });
}

setPageIndicator(0);
main_inner.addEventListener('scroll', function () {
    let main_inner_scrollTop = main_inner.scrollTop;
    if (main_inner_scrollTop < learn_scrollTop) {
        setPageIndicator(0);
    } else if (main_inner_scrollTop < classroom_scrollTop) {
        setPageIndicator(1);
    } else if (main_inner_scrollTop < purchase_scrollTop) {
        setPageIndicator(2);
    } else {
        setPageIndicator(3);
    }
});

