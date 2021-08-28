import { createPopper } from "@popperjs/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// popper js
const rounds = document.querySelectorAll(
    "#js, #html , #figma, #bootstrap, #css,#git , #jquery, #gsap,#scss, #svg_2"
);
const pop = document.querySelectorAll(
    "#jspop, #htmlpop , #figmapop, #bootstrappop, #csspop ,#gitpop , #jquerypop, #gsappop ,#scsspop , #svg_2pop"
);
const roundsCircle = document.querySelectorAll(
    "#js .forthground, #html .forthground , #figma .forthground, #bootstrap .forthground, #css .forthground,#git .forthground , #jquery .forthground, #gsap .forthground,#scss .forthground, #svg_2 .forthground"
);

rounds.forEach((item, index) => {
    // createPopper(item, pop[index], {
    //     placement: 'left'
    // });
    // item.style.backgroundColor = pop[index].fill;
    pop[index].style.color = roundsCircle[index].getAttribute("fill");
});

function s(element, pop, pos = "left") {
    function a(a) {
        return document.querySelector(a);
    }
    createPopper(a(element), a(pop), {
        placement: pos,
    });
}

s("#js", "#jspop");
s("#html", "#htmlpop", "right");
s("#figma", "#figmapop");
s("#bootstrap", "#bootstrappop", "right");
s("#css", "#csspop", "right");
s("#jquery", "#jquerypop", "bottom");
s("#gsap", "#gsappop");
s("#scss", "#scsspop");
s("#svg_2", "#svg_2pop");
s("#git", "#gitpop", "bottom");

// TweenMax.set(path, { strokeDasharray: l });
// TweenMax.fromTo(path, 3, { strokeDashoffset: l }, { strokeDashoffset: 0 });

const allColorLine = gsap.utils.toArray(
    "#first_2 .color__line, #secound_4 .color__line, #secound_2 .color__line, #third_3 .color__line, #first_4 .color__line, #secound_3 .color__line, #first .color__line, #first_3 .color__line, #secound .color__line, #third_2 .color__line, #third .color__line, #third .color__line, #third_3 .color__line"
);

// set all stroke color and offset value
allColorLine.forEach((item, index) => {
    gsap.set(item, {
        strokeDasharray: item.getTotalLength(),
        strokeDashoffset: item.getTotalLength(),
    });
});

// first timeline
gsap.set(
    "#js .forthground, #html .forthground , #figma .forthground, #bootstrap .forthground, #css .forthground,#git .forthground , #jquery .forthground, #gsap .forthground,#scss .forthground, #svg_2 .forthground",
    {
        transformOrigin: "52.5% 52.5%",
        scale: 0,
    }
);

ScrollTrigger.matchMedia({
    "(min-width: 0px) and (max-width: 399px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#skill__img",
                start: "380% 90%",
                end: "+=120% 20%",
                scrub: 1,
            },
        })
            .to(
                "#first_2 .color__line, #first_4 .color__line, #first .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    delay: 1,
                }
            )
            .to(
                "#js .forthground, #html .forthground , #figma .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#figmapop, #jspop, #htmlpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .to(
                "#first_3 .color__line, #secound .color__line, #secound_2 .color__line, #secound_4 .color__line, #secound_3 .color__line,#third_2 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#bootstrap .forthground, #css .forthground , #jquery .forthground, #gsap .forthground, #git .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele =
                            "#bootstrappop, #csspop, #jquerypop, #gsappop, #gitpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .fromTo(
                "#third .color__line",
                {
                    strokeDashoffset: -278,
                },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#third_3 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "<"
            )
            .to(
                "#scss .forthground, #svg_2 .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#scsspop, #jspop, #svg_2pop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            );
    },
    "(min-width: 400px) and (max-width: 599px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#skill__img",
                start: "320% 90%",
                end: "+=120% 20%",
                scrub: 1,
            },
        })
            .to(
                "#first_2 .color__line, #first_4 .color__line, #first .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    delay: 1,
                }
            )
            .to(
                "#js .forthground, #html .forthground , #figma .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#figmapop, #jspop, #htmlpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .to(
                "#first_3 .color__line, #secound .color__line, #secound_2 .color__line, #secound_4 .color__line, #secound_3 .color__line,#third_2 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#bootstrap .forthground, #css .forthground , #jquery .forthground, #gsap .forthground, #git .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele =
                            "#bootstrappop, #csspop, #jquerypop, #gsappop, #gitpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .fromTo(
                "#third .color__line",
                {
                    strokeDashoffset: -278,
                },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#third_3 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "<"
            )
            .to(
                "#scss .forthground, #svg_2 .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#scsspop, #jspop, #svg_2pop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            );
    },
    "(min-width: 600px) and (max-width: 767px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#skill__img",
                start: "290% 90%",
                end: "+=120% 20%",
                scrub: 1,
            },
        })
            .to(
                "#first_2 .color__line, #first_4 .color__line, #first .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    delay: 1,
                }
            )
            .to(
                "#js .forthground, #html .forthground , #figma .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#figmapop, #jspop, #htmlpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .to(
                "#first_3 .color__line, #secound .color__line, #secound_2 .color__line, #secound_4 .color__line, #secound_3 .color__line,#third_2 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#bootstrap .forthground, #css .forthground , #jquery .forthground, #gsap .forthground, #git .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele =
                            "#bootstrappop, #csspop, #jquerypop, #gsappop, #gitpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .fromTo(
                "#third .color__line",
                {
                    strokeDashoffset: -278,
                },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#third_3 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "<"
            )
            .to(
                "#scss .forthground, #svg_2 .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#scsspop, #jspop, #svg_2pop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            );
    },
    "(min-width: 768px) and (max-width: 991px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#skill__img",
                start: "215% 90%",
                end: "+=210% 0%",
                scrub: 1,
            },
        })
            .to(
                "#first_2 .color__line, #first_4 .color__line, #first .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    delay: 1,
                }
            )
            .to(
                "#js .forthground, #html .forthground , #figma .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#figmapop, #jspop, #htmlpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .to(
                "#first_3 .color__line, #secound .color__line, #secound_2 .color__line, #secound_4 .color__line, #secound_3 .color__line,#third_2 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#bootstrap .forthground, #css .forthground , #jquery .forthground, #gsap .forthground, #git .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele =
                            "#bootstrappop, #csspop, #jquerypop, #gsappop, #gitpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .fromTo(
                "#third .color__line",
                {
                    strokeDashoffset: -278,
                },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#third_3 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "<"
            )
            .to(
                "#scss .forthground, #svg_2 .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#scsspop, #jspop, #svg_2pop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            );
    },
    "(min-width: 992px) and (max-width: 1199px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#skill__img",
                start: "170% 100%",
                end: "+=650% 0%",
                scrub: 1,
            },
        })
            .to(
                "#first_2 .color__line, #first_4 .color__line, #first .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    delay: 1,
                }
            )
            .to(
                "#js .forthground, #html .forthground , #figma .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#figmapop, #jspop, #htmlpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .to(
                "#first_3 .color__line, #secound .color__line, #secound_2 .color__line, #secound_4 .color__line, #secound_3 .color__line,#third_2 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#bootstrap .forthground, #css .forthground , #jquery .forthground, #gsap .forthground, #git .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele =
                            "#bootstrappop, #csspop, #jquerypop, #gsappop, #gitpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .fromTo(
                "#third .color__line",
                {
                    strokeDashoffset: -278,
                },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#third_3 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "<"
            )
            .to(
                "#scss .forthground, #svg_2 .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#scsspop, #jspop, #svg_2pop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            );
    },
    "(min-width: 1200px) and (max-width: 1399px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#skill__img",
                start: "110% 100%",
                end: "+=750% 0%",
                scrub: 1,
            },
        })
            .to(
                "#first_2 .color__line, #first_4 .color__line, #first .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    delay: 1,
                }
            )
            .to(
                "#js .forthground, #html .forthground , #figma .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#figmapop, #jspop, #htmlpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .to(
                "#first_3 .color__line, #secound .color__line, #secound_2 .color__line, #secound_4 .color__line, #secound_3 .color__line,#third_2 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#bootstrap .forthground, #css .forthground , #jquery .forthground, #gsap .forthground, #git .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele =
                            "#bootstrappop, #csspop, #jquerypop, #gsappop, #gitpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .fromTo(
                "#third .color__line",
                {
                    strokeDashoffset: -278,
                },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#third_3 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "<"
            )
            .to(
                "#scss .forthground, #svg_2 .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#scsspop, #jspop, #svg_2pop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            );
    },
    "(min-width: 1400px) and (max-width: 1649px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#skill__img",
                start: "120% 80%",
                end: "165% 0%",
                scrub: 1,
            },
        })
            .to(
                "#first_2 .color__line, #first_4 .color__line, #first .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    delay: 1,
                }
            )
            .to(
                "#js .forthground, #html .forthground , #figma .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#figmapop, #jspop, #htmlpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .to(
                "#first_3 .color__line, #secound .color__line, #secound_2 .color__line, #secound_4 .color__line, #secound_3 .color__line,#third_2 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#bootstrap .forthground, #css .forthground , #jquery .forthground, #gsap .forthground, #git .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele =
                            "#bootstrappop, #csspop, #jquerypop, #gsappop, #gitpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .fromTo(
                "#third .color__line",
                {
                    strokeDashoffset: -278,
                },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#third_3 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "<"
            )
            .to(
                "#scss .forthground, #svg_2 .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#scsspop, #jspop, #svg_2pop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            );
    },
    "(min-width: 1650px)": function () {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#skill__img",
                start: "120% 80%",
                end: "165% 0%",
                scrub: 1,
            },
        })
            .to(
                "#first_2 .color__line, #first_4 .color__line, #first .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                    delay: 1,
                }
            )
            .to(
                "#js .forthground, #html .forthground , #figma .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#figmapop, #jspop, #htmlpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .to(
                "#first_3 .color__line, #secound .color__line, #secound_2 .color__line, #secound_4 .color__line, #secound_3 .color__line,#third_2 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#bootstrap .forthground, #css .forthground , #jquery .forthground, #gsap .forthground, #git .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele =
                            "#bootstrappop, #csspop, #jquerypop, #gsappop, #gitpop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            )
            .fromTo(
                "#third .color__line",
                {
                    strokeDashoffset: -278,
                },
                {
                    strokeDashoffset: 0,
                    duration: 1,
                }
            )
            .to(
                "#third_3 .color__line",
                {
                    strokeDashoffset: 0,
                    duration: 1,
                },
                "<"
            )
            .to(
                "#scss .forthground, #svg_2 .forthground",
                {
                    scale: 1.38,
                    duration: 0.5,
                    onStart: function () {
                        const ele = "#scsspop, #jspop, #svg_2pop";
                        gsap.timeline()
                            .to(ele, {
                                display: "block",
                            })
                            .to(ele, {
                                opacity: 1,
                            });
                    },
                },
                "=-0.2"
            );
    },
});
