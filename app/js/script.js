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

gsap.timeline()
    .to("#intro .cover", {
        x: 0,
        stagger: {
            amount: 1.3,
        },
        delay: 0.5,
        duration: 1.3,
    })
    .to("#intro .line", {
        height: 0,
        delay: 0.4,
        stagger: {
            amount: 0.4,
            from: "end",
        },
        onComplete: function () {
            document.querySelector("#intro").remove();
            startNameAnimation();
        },
    });
// startNameAnimation()

// name animation

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
            markers: true,
            start: "85% 80%",
            scrub: 3,
            end: '40% 10%'
        },
    });
    tl.to(".line_two .char, .line_one .char", {
        y: -300,
        opacity: 0,
        stagger: {
            amount: 1,
        },
    });
}
// image scroll animation 
const proImgTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#image',
        
    }
})