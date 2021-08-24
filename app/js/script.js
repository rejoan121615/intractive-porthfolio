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

function SmoothScroll() {
    let scroller = document.querySelector("#main__container");

    const bodyScrollBar = Scrollbar.init(scroller, {
        damping: 0.1,
        // delegateTo: document,
        // alwaysShowTracks: true,
    });

    ScrollTrigger.scrollerProxy("#main__container", {
        scrollTop(value) {
            if (arguments.length) {
                bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: scroller });

    // Only necessary to correct marker position - not needed in production
    if (document.querySelector(".gsap-marker-scroller-start")) {
        const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
        bodyScrollBar.addListener(({ offset }) => {
            gsap.set(markers, { marginTop: -offset.y });
        });
    }
}

gsap.timeline()
    .fromTo(
        "#home .round",
        {
            opacity: 0,
            y: -30 + "vh",
        },
        {
            y: 0,
            delay: 0.4,
            duration: 0.8,
            opacity: 1,
            stagger: {
                amount: 0.8,
            },
            ease: "Bounce.easeOut",
        }
    )
    .to("#home", {
        y: 100 + "vh",
        duration: 2,
        ease: "power3.out",
    })
    .set("#home", {
        display: "none",
        duration: 0,
    })
    .from(
        "#intro .line__one .char",
        {
            y: -100,
            stagger: {
                each: 0.35,
            },
            duration: 1,
            scale: 1.3,
            x: -15,
        },
        "-=2.6"
    )
    .from(
        "#intro .line__two .char",
        {
            y: -100,
            stagger: {
                each: 0.35,
            },
            duration: 1,
            scale: 1.3,
            x: -15,
        },
        "-=3.2"
    )
    .from(
        "#intro .img__container img",
        {
            x: 45,
            y: 45,
            opacity: 0.7,
            duration: 0.8,
            scale: 1.5,
        },
        "-=1.8"
    )
    .set("body", {
        onComplete: function () {
            SmoothScroll();
        },
    });
