import "../scss/style.scss";
// transform span
import splitting from "splitting";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// split texts
splitting();

// gsap responsive

let xs = window.matchMedia("(min-width: 576px)");
let sm = window.matchMedia("(min-width: 768px)");
let md = window.matchMedia("(min-width: 992px)");
let lg = window.matchMedia("(min-width: 1200px)");
let xl = window.matchMedia("(min-width: 1400px)");
let xxl = window.matchMedia("(min-width: 1800px)");
// reset window position 
// gsap transition
const loadTl = gsap.timeline();
loadTl
    .set("#loader", {
        display: "flex",
    })
    .to("#loader .inner", {
        width: 0,
        delay: 0.5,
        stagger: {
            amount: 1.2,
        },
    })
    .to("#loader", {
        display: "none",
    })
    .from("#name .line__one .char", {
        opacity: 0,
        y: -100 + "%",
        duration: 2.5,
        stagger: {
            amount: 1,
            from: "end",
        },
    })
    .from(
        "#name .line__two .char",
        {
            x: -300,
            opacity: 0,
            duration: 2.5,
            stagger: {
                amount: 1,
                from: "end",
            },
        },
        "<"
    )
    .from(
        "#name #main__img",
        {
            x: -100,
            y: 100,
            opacity: 0,
            duration: 2.5,
        },
        "=-2"
    )
    .to("body", {
        // overflow-x: "visible",
        overflowY: "visible",
    });

// name section scroll trigger
const nameTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#name",
        start: "top top",
        end: "bottom center",
        scrub: 1,
    },
});

nameTl
    .to("#name .line__one .char", {
        opacity: 0,
        y: -100 + "%",
        stagger: {
            amount: 1,
            from: "end",
        },
    })
    .to(
        "#name .line__two .char",
        {
            x: -300,
            opacity: 0,
            stagger: {
                amount: 1,
                from: "end",
            },
        },
        "<"
    );

// highlight image scroll animation
const mainImg = "#name #main__img";

gsap.timeline({
    scrollTrigger: {
        trigger: "#name",
        start: "center center",
        end: "+100%",
        scrub: 1,
        pin: true,
    },
})
    .set(mainImg, {
        position: "absolute",
        display: "block",
        right: 0,
        top: 0,
        x: 0,
        y: 0,
    })
    .to(mainImg, {
        width: 100 + "vw",
        y: -5 + "%",
        x: function () {
            console.log(xl);
            if (xxl.matches) {
                return 150;
            } else if (xl.matches) {
                return 105;
            } else if (lg.matches) {
                return 90;
            } else if (md.matches) {
                return 75;
            } else if (sm.matches) {
                return 60;
            } else if (xs.matches) {
                return 25;
            } else {
                return 15;
            }
        },
    });

// front end developer section animation 
gsap.timeline({
    scrollTrigger: {
        trigger: "#front__end__developer",
        markers: true,
        scrub: 1,
        start: "0% 65%",
        end: '50% 80%'
    }
})
    .from("#front__end__developer .first__line .char", {
        x: -300,
        opacity: 0,
        duration: 2.5,
        stagger: {
            amount: 1,
        },
    })
    .from("#front__end__developer .sec__line .char", {
        x: -300,
        opacity: 0,
        duration: 2.5,
        stagger: {
            amount: 1,
        },
    })
    .to("#front__end__developer .first__line .char", {
        x: 300,
        opacity: 0,
        duration: 2.5,
        stagger: {
            amount: 1,
            from: "end",
        },
    })
    .to("#front__end__developer .sec__line .char", {
        x: 300,
        opacity: 0,
        duration: 2.5,
        stagger: {
            amount: 1,
            from: "end",
        },
    });

