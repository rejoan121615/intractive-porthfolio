import { gsap } from "gsap";
import { EaselPlugin } from "gsap/EaselPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import Splitting from "splitting";
import './skill'
// gsap animation
gsap.registerPlugin(EaselPlugin, ScrollTrigger, CSSRulePlugin);

// install splitting
Splitting();

// Setup
const separate = (target) => {
    const allWords = Splitting({
        target: document.querySelector(target),
        by: "words",
    });
    let whoEven = [],
        whoOdd = [];
    allWords[0].words.forEach((item, index) => {
        if (index % 2) {
            whoEven.push(item);
        } else {
            whoOdd.push(item);
        }
    });
    return [whoEven, whoOdd];
};

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
    "(max-width: 575px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#intro",
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
                    y: -7 + "vh",
                },
                "<"
            );

        // who am i animation
        // construct all words

        let [firstOne, firstTwo] = separate("#whoAmI .articleOne h3");
        let [secOne, secTwo] = separate("#whoAmI .articleTwo h3");

        // animations
        // first comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleOne",
                start: "55% 50%",
                pin: true,
                scrub: 1,
            },
        })
            .fromTo(
                firstOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleOne .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
        // secound comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleTwo",
                start: "55% 50%",
                pin: true,
                scrub: 1,
            },
        })
            .fromTo(
                secOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleTwo .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
    },
    "(min-width: 576px) and (max-width: 767px)": function (param) {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#intro",
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
                    y: -40 + "vh",
                },
                "<"
            );

        // who am i animation
        // construct all words

        let [firstOne, firstTwo] = separate("#whoAmI .articleOne h3");
        let [secOne, secTwo] = separate("#whoAmI .articleTwo h3");

        // animations
        // first comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleOne",

                start: "40% 50%",
                pin: true,
                scrub: 1,
            },
        })
            .fromTo(
                firstOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleOne .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
        // secound comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleTwo",

                start: "55% 50%",
                pin: true,
                scrub: 1,
            },
        })
            .fromTo(
                secOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleTwo .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
    },
    "(min-width: 768px) and (max-width: 991px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#intro",
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
                },
                "<"
            )
            .to(
                "#intro .img__wrap img",
                {
                    y: -30 + "vh",
                },
                "-=0.3"
            );

        // who am i animation
        // construct all words

        let [firstOne, firstTwo] = separate("#whoAmI .articleOne h3");
        let [secOne, secTwo] = separate("#whoAmI .articleTwo h3");

        // animations
        // first comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleOne",

                start: "35% 50%",
                pin: true,
                scrub: 1,
            },
        })
            .fromTo(
                firstOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleOne .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
        // secound comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleTwo",

                start: "55% 50%",
                pin: true,
                scrub: 1,
            },
        })
            .fromTo(
                secOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleTwo .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
    },
    "(min-width: 992px) and (max-width: 1199px)": function () {
        // intro animation
        gsap.timeline({
            scrollTrigger: {
                trigger: "#intro",
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
                    marginTop: -20 + "vh",
                },
                "<"
            )
            .to(
                "#intro .container",
                {
                    maxWidth: 100 + "%",
                },
                "-=0.2"
            );
        // article animation
        // who am i animation
        // construct all words

        let [firstOne, firstTwo] = separate("#whoAmI .articleOne h3");
        let [secOne, secTwo] = separate("#whoAmI .articleTwo h3");

        // animations
        // first comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleOne",

                start: "25% 50%",
                pin: true,
                scrub: 1,
            },
        })
            .fromTo(
                firstOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleOne .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
        // secound comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleTwo",

                start: "55% 50%",
                pin: true,
                scrub: 1,
            },
        })
            .fromTo(
                secOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleTwo .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
    },
    "(min-width: 1200px) and (max-width: 1399px)": function (param) {
        // intro animation
        gsap.timeline({
            scrollTrigger: {
                trigger: "#intro",
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
                    marginTop: -20 + "vh",
                },
                "<"
            )
            .to(
                "#intro .container",
                {
                    maxWidth: 100 + "%",
                },
                "-=0.2"
            );
        // article animation
        // who am i animation
        // construct all words

        let [firstOne, firstTwo] = separate("#whoAmI .articleOne h3");
        let [secOne, secTwo] = separate("#whoAmI .articleTwo h3");

        // animations
        // first comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleOne",
                start: "0% 15%",
                end: "120% 100%",
                // pin: true,
                scrub: 1,
            },
        })
            .fromTo(
                firstOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleOne .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
        // secound comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleTwo",

                start: "10% 20%",
                end: "50% 30%",
                scrub: 1,
            },
        })
            .fromTo(
                secOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleTwo .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
    },
    "(min-width: 1400px) and (max-width: 1800px)": function (param) {},
    "(min-width: 1400px)": function () {
        // intro animation
        gsap.timeline({
            scrollTrigger: {
                trigger: "#intro",
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
                    marginTop: -20 + "vh",
                },
                "<"
            )
            .to(
                "#intro .container",
                {
                    maxWidth: 100 + "%",
                },
                "-=0.2"
            );
        // article animation
        // who am i animation
        // construct all words

        let [firstOne, firstTwo] = separate("#whoAmI .articleOne h3");
        let [secOne, secTwo] = separate("#whoAmI .articleTwo h3");

        // animations
        // first comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleOne",
                start: "0% 25%",
                end: "120% 100%",
                // pin: true,
                scrub: 1,
            },
        })
            .fromTo(
                firstOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleOne .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
        // secound comment
        gsap.timeline({
            scrollTrigger: {
                trigger: "#whoAmI .articleTwo",

                start: "10% 20%",
                end: "50% 30%",
                scrub: 1,
            },
        })
            .fromTo(
                secOne,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    duration: 2,
                    y: 0,
                    stagger: {
                        amount: 2,
                    },
                }
            )
            .fromTo(
                ".articleTwo .name",
                {
                    opacity: 0,
                    y: 25,
                },
                {
                    opacity: 1,
                    y: 0,
                }
            );
    },
});

// ScrollTrigger.matchMedia({
//     "(min-width: 992px)": function () {
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: "#intro .texts",
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


ScrollTrigger.matchMedia({
    "(min-width: 0px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#skills .container',
                // markers: true,
                start: '15% 90%',
                end: 'center center',
                scrub: 1
            }   
        }).fromTo("#skills .texts .char", {
            x: 100 + 'vw',
            scale: 1.5,
            letterSpacing: 10
        }, {
            x: 0,
            scale: 1,
            letterSpacing: 'initial',
            stagger: {
                amount: 0.5
            }
        })
        // round animation 
        gsap.fromTo("#skills .rounds h1", {
            xPercent: 100
        }, {
            xPercent: -90,
            duration: 10,
            repeat: -1,
            ease: 'linear'
        })
    }
})