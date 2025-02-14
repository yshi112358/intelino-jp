"use strict";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ scroller: ".main-inner" });

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
    width: '100vw',
    height: '100vh',
    "border-radius": '0vh',
    "margin-top": '0vh',
    duration: 1,
}, "top-inner").to('.top-inner-text', {
    opacity: 0,
    duration: 1,
}, "top-inner").to('.header-inner', {
    scale: 0.8,
    y: "-1vh",
    width: "150vh"
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
        y: "-10vh",
        scale: 2,
    }, {
        autoAlpha: 1,
        y: "0vh",
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
    x: "20vw",
}, "<").to('.top-inner', {
    opacity: 0,
    y: "-10vh",
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

classroom_col_container.forEach((e, i) => {
    window.setTimeout(() => {
        let classroom_row_width = e.children[0].offsetWidth;
        console.log(classroom_row_width);
        gsap.to(e, {
            x: classroom_row_width * (-1) ** i,
            duration: 30,
            ease: "none",
            repeat: -1,
        })
    }, 1000);
});

window.setTimeout(() => {
    let element = document.querySelector('.achievements-inner');
    let style = window.getComputedStyle(element);
    let value = Number(style.getPropertyValue('height').replace('px',''))-window.innerHeight;
    // console.log(window.innerHeight)
    // console.log(value);
    document.querySelector('.achievements-inner').style.top = String(-value)+"px";
}, 1000);
