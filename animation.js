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
        start: 'top center-=10%',
        end: 'center center',
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