import "../scss/style.scss";
// transform span
import splitting from "splitting";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// split texts
splitting();

// gsap transition
const loadTl = gsap.timeline();
loadTl
    // .set("#loader", {
    //     display: "flex",
    // })
    // .to("#loader .inner", {
    //     width: 0,
    //     delay: 0.5,
    //     stagger: {
    //         amount: 1.2,
    //     },
    // })
    // .to("#loader", {
    //     display: "none",
    // })

    .to("body", {
        overflow: "visible",
    })

    .from("#name .line__one .char", {
        opacity: 0,
        y: -100 + "%",
        duration: 2.5,
        stagger: {
            amount: 1,
            from: 'end'
        },
    })
    .from("#name .line__two .char", {
        x: -300,
        opacity: 0,
        duration: 2.5,
        stagger: {
            amount: 1,
            from: 'end'
        }
    }, '<')
    .from("#name #main__img", {
        width: 0,
        height: 0,
        opacity: 0,
        duration: 2.5
    }, '=-2');

    // start scroll trigger 
