"use strict";
import "../scss/style.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";

// split texts
Splitting();
// gsap plugins
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({
    duration: 1,
});
// animation

// gsap.timeline()
//     .to("#intro .cover", {
//         x: 0,
//         stagger: {
//             amount: 1.3,
//         },
//         delay: 0.5,
//         duration: 1.3,
//     })
//     .to("#intro .line", {
//         height: 0,
//         delay: 0.4,
//         stagger: {
//             amount: 0.4,
//             from: "end",
//         },
//         onComplete: function () {
//             document.querySelector("#intro").remove();
//             startNameAnimation();
//         },
//     });


// name animation
startNameAnimation()

function startNameAnimation() {
    let nameTl = gsap.timeline();
    nameTl
        .to("body", {
            // overflowY: "initial",
            duration: 0,
        })
        .to("#name", {
            display: "flex",
            duration: 0,
        })
        .from(".line_two .char,.line_one .char", {
            y: -300,
            opacity: 0,
            stagger: {
                amount: 1,
            },
        })
        .to("body", {
            overflowY: "scroll",
            duration: 0,
            onComplete: function () {
                reverseText();
            },
        });
    return nameTl;
}

function reverseText() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#name",
            start: "85% 80%",
            scrub: 1,
            end: '40% 10%'
        },
    });
    tl.to(".line_two .char, .line_one .char", {
        y: -300,
        opacity: 0,
        stagger: {
            amount: 1,
        },
    })
}
// image scroll animation 
gsap.to("#image .img__container #img", {
    onStart: function () {
       const container = document.querySelector("#image .img__container");
        const image = document.querySelector('#image #img');
        image.style.display = 'inline-block';
        container.style.width = '100%';
        container.style.height = 'initial';
        container.style.backgroundColor = 'transparent';
        container.style.animation = 'none';
    },
    width: 100 + '%',
    y: -20 + 'vh',
    scrollTrigger: {
        trigger: '#image',
        start: 'top 70%',
        end: '-2% top',
        scrub: 1,
        markers: true,
    }
})