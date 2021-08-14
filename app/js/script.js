'use strict';
import '../scss/style.scss'
import gsap from 'gsap';

gsap.defaults({
    duration: 1.4
})
// animation 
gsap.timeline().to("#intro .cover", {
    x: 0,
    delay: 0.5,
    ease: 'ease-in'
}).to("#intro .dot", {
    width: 105 + 'vw',
    height: 105 + 'vh',
}).to("#intro .dot", {
    borderRadius: 0,
}, '-=0.4').to("#intro", {
    display: 'none'
})