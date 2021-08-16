"use strict";
import "../scss/style.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";




// // split texts
// Splitting();
// // gsap plugins
// gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({
//     duration: 1,
// });
// // animation
// gsap.set("#full__container", {
//     overflow: 'hidden'
// })
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

// // name animation

// // startNameAnimation()

// function startNameAnimation() {
//     let nameTl = gsap.timeline();
//     nameTl
//         .to("#full__container", {
//             // overflowY: "initial",
//             duration: 0,
//         })
//         .to("#name", {
//             display: "flex",
//             duration: 0,
//         })
//         .from(".line_two .char,.line_one .char", {
//             y: -300,
//             opacity: 0,
//             stagger: {
//                 amount: 1,
//             },
//         })
//         .to("body", {
//             overflowY: "scroll",
//             duration: 0,
//             onComplete: function () {
//                 reverseText();
//             },
//         });
//     return nameTl;
// }

// function reverseText() {
//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#name",
//             start: "85% 80%",
//             scrub: 1,
//             end: "40% 10%",
//         },
//     });
//     tl.to(".line_two .char, .line_one .char", {
//         y: -300,
//         opacity: 0,
//         stagger: {
//             amount: 1,
//         },
//     });
// }

// // image scroll animation

// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#name",
//         start: "top bottom",
//         end: "top center",
//         scrub: 0.8,
//     }
// }).to("#image .img__container #img", {
//     onStart: function () {
//         const blink = document.querySelector("#image .blink");
//         const image = document.querySelector("#image #img");
//         image.style.display = "inline-block";
//         blink.style.display = "none";
//     },
//     width: 100 + "%",
//     y: -20 + "vh",
//     ease: 'linear'
// }).to("#image .img__container", {
//     y: -10 + 'vh'
// }, '<')




// // ------------------- front end header ---------------------------- >
// const front_end_heading =
//     "#front__end .line_one .char, #front__end .line_two .char";
// gsap.set("#front__end #path", {
//     transformOrigin: "center",
// });
// gsap.timeline({
//     scrollTrigger: {
//         trigger: "#front__end #text__container",
//         start: "bottom bottom",
//         scrub: 1,
//         pin: true,
//     },
// })
//     .from(front_end_heading, {
//         y: -300,
//         opacity: 0,
//         stagger: {
//             amount: 1,
//         },
//     })
//     .to(front_end_heading, {
//         y: -300,
//         opacity: 0,
//         stagger: {
//             amount: 1,
//         },
//     });
