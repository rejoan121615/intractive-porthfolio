import { gsap } from "gsap";
import { EaselPlugin } from "gsap/EaselPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import Scrollbar from "smooth-scrollbar";
// gsap animation
gsap.registerPlugin(EaselPlugin, ScrollTrigger);

// install splitting
Splitting();

// Setup

// let scroller = document.querySelector("#main__container");

// const bodyScrollBar = Scrollbar.init(scroller, {
//     damping: 0.1,
//     // delegateTo: document,
//     // alwaysShowTracks: true,
// });

// ScrollTrigger.scrollerProxy("#main__container", {
//     scrollTop(value) {
//         if (arguments.length) {
//             bodyScrollBar.scrollTop = value;
//         }
//         return bodyScrollBar.scrollTop;
//     },
// });

// bodyScrollBar.addListener(ScrollTrigger.update);

// ScrollTrigger.defaults({ scroller: scroller });

// Only necessary to correct marker position - not needed in production
// if (document.querySelector(".gsap-marker-scroller-start")) {
//     const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
//     bodyScrollBar.addListener(({ offset }) => {
//         gsap.set(markers, { marginTop: -offset.y });
//     });
// }

gsap.set("#home", {
    display: "none",
});
// gsap.timeline()
//     .fromTo(
//         "#home .round",
//         {
//             opacity: 0,
//             y: -30 + "vh",
//         },
//         {
//             y: 0,
//             delay: 0.4,
//             duration: 0.8,
//             opacity: 1,
//             stagger: {
//                 amount: 0.8,
//             },
//             ease: "Bounce.easeOut",
//         }
//     )
//     .to("#home", {
//         y: 100 + "vh",
//         duration: 2,
//         ease: "power3.out",
//     })
//     .set("#home", {
//         display: "none",
//         duration: 0,
//     })
//     .from(
//         "#intro .line__one .char",
//         {
//             y: -100,
//             stagger: {
//                 each: 0.35,
//             },
//             duration: 1,
//             scale: 1.3,
//             x: -15,
//         },
//         "-=2.6"
//     )
//     .from(
//         "#intro .line__two .char",
//         {
//             y: -100,
//             stagger: {
//                 each: 0.35,
//             },
//             duration: 1,
//             scale: 1.3,
//             x: -15,
//         },
//         "-=3.2"
//     )
//     .from(
//         "#intro .img__container img",
//         {
//             x: 45,
//             y: 45,
//             opacity: 0.7,
//             duration: 0.8,
//             scale: 1.5,
//         },
//         "-=1.8"
//     )
// .set("body", {
//     onComplete: function () {
//         SmoothScroll();
//     },
// });

// add scroll trigger
// gsap.to("#intro .img__wrap")

// gsap scroll animation
ScrollTrigger.matchMedia({
    "(max-width: 991px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#intro",
                markers: true,
                scrub: 1,
                start: "0",
                end: "+=100%",
                pin: true,
            },
        })
            .to("#intro .line__one .char", {
                paddingLeft: 30,
                paddingRight: 30,
            })
            .to(
                "#intro .line__one",
                {
                    xPercent: -100,
                },
                "<"
            )
            .to(
                "#intro .line__two .char",
                {
                    paddingLeft: 30,
                    paddingRight: 30,
                },
                "<"
            )
            .to(
                "#intro .line__two",
                {
                    xPercent: 100,
                    onComplete: function () {
                        gsap.set("#intro .container", {
                            padding: 0,
                        });
                    },
                },
                "<"
            )
            .to(
                "#intro .img__wrap img",
                {
                    width: 100 + "vw",
                    y: -25 + "vh",
                },
                "<"
            );
    },
    "(min-width: 992px) and (max-width: 1365px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#intro",
                markers: true,
                scrub: 1,
                start: "0",
                end: "+=100%",
                pin: true,
            },
        })
            .to("#intro .line__one .char", {
                y: -60 + "vh",
                opacity: 0,
                stagger: {
                    amount: 0.35,
                    from: "end",
                },
            })
            .to(
                "#intro .line__two .char",
                {
                    y: 100 + "vh",
                    opacity: 0,
                    stagger: {
                        each: 0.08,
                        from: "end",
                    },
                    // duration: 3,
                },
                "<"
            )
            .to(
                "#intro .img__wrap img",
                {
                    width: 100 + "%",
                    duration: 1,
                    marginTop: -20 + 'vh'
                },
                "<"
            );
    },
});

// ScrollTrigger.matchMedia({
//     "(min-width: 992px)": function () {
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: "#intro .texts",
//                 markers: true,
//                 start: "0 50",
//                 end: "70% top",
//                 scrub: 1,
//             },
//         })
//             .fromTo(
//                 "#intro .line__one .char",
//                 {
//                     x: 0,
//                     opacity: 1,
//                 },
//                 {
//                     x: -400,
//                     opacity: 0,
//                     stagger: {
//                         amount: 1,
//                         from: "end",
//                     },
//                 }
//             )
//             .fromTo(
//                 "#intro .line__two .char",
//                 {
//                     y: 0,
//                     // opacity: 1,
//                 },
//                 {
//                     y: 350,
//                     // opacity: 0,
//                     stagger: {
//                         amount: 0.5,
//                         from: "end",
//                     },
//                 },
//                 "<"
//             );
//     },
// });
