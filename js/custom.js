(function () {
    // smoothScroll();
    MainTitleTimeline();
    portfolioWrapTimeline();
    Training();

    $('.MainTraining .tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();

        $('.MainTraining .tab_menu>li').removeClass('on')
        $('.MainTraining .tab_menu>li').eq(IDX).addClass('on')
        $('.MainTraining .tab_con .con').removeClass('on')
        $('.MainTraining .tab_con .con').eq(IDX).addClass('on')
    })
})();


function smoothScroll() {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(1)
}



function MainTitleTimeline() {
    var TL1 = gsap.timeline({
        scrollTrigger: {
            trigger: '.MainTitle',
            pin: true,
            scrub: 1,

            end: () => '+=' + document.querySelector('.MainTitle').offsetWidth * 3,
        }
    });

    TL1
        .to('.MainTitle .inner .keyword', {
            x: -250,
            duration: 10,
            // ease: "bounce",
        })
        .from('.MainTitle .inner .word .s01', {
            x: 500,
            autoAlpha: 0,
            duration: 10,
            // ease: "bounce",
        })
        .from('.MainTitle .inner .word .s02', {
            x: 500,
            autoAlpha: 0,
            duration: 10,
        })
        .from('.MainTitle .inner .word .s03', {
            x: 500,
            autoAlpha: 0,
            duration: 10,
        })
        .to('.MainTitle .inner .key_box', {
            y: -50,
            duration: 10,
        })
        .from('.MainTitle .slogan strong', {
            autoAlpha: 0,
            duration: 10,
        })
        .to('.MainTitle .slogan .box', {
            width: 1000,
            duration: 10,
        })
        .to('.page', {
            xPercent: -100,
            ease: "none",
            duration: 110,
        })
        .from('.MainTitle .introduce_wrap .clock', {
            autoAlpha: 0,
            duration: 110,
        })
        .from('.MainTitle .introduce_wrap #Line .g01 path', {
            strokeDashoffset: 2036,
            delay: 5,
            duration: 10,
        })
        .to('.MainTitle .introduce_wrap #Line .g01 #BC', {
            opacity: 1,
            scale: 3,
            transformOrigin: "50% 50%",
            delay: 2,
            duration: 5,
        })
        .to('.MainTitle .introduce_wrap #Line .g01 text', {
            opacity: 1,
            delay: 2,
            duration: 5,
        })
        .from('.MainTitle .introduce_wrap #Line .g02 path', {
            strokeDashoffset: 2036,
            delay: 5,
            duration: 10,
        })
        .to('.MainTitle .introduce_wrap #Line .g02 #BC', {
            opacity: 1,
            scale: 3,
            transformOrigin: "50% 50%",
            delay: 2,
            duration: 5,
        })
        .to('.MainTitle .introduce_wrap #Line .g02 text', {
            opacity: 1,
            delay: 2,
            duration: 5,
        })
        .from('.MainTitle .introduce_wrap #Line .g03 path', {
            strokeDashoffset: 2036,
            delay: 5,
            duration: 10,
        })
        .to('.MainTitle .introduce_wrap #Line .g03 #BC', {
            opacity: 1,
            scale: 3,
            transformOrigin: "50% 50%",
            delay: 2,
            duration: 5,
        })
        .to('.MainTitle .introduce_wrap #Line .g03 text', {
            opacity: 1,
            delay: 2,
            duration: 5,
        })
        .from('.MainTitle .introduce_wrap #Line .g04 path', {
            strokeDashoffset: 2036,
            delay: 5,
            duration: 10,
        })
        .to('.MainTitle .introduce_wrap #Line .g04 #BC', {
            opacity: 1,
            scale: 3,
            transformOrigin: "50% 50%",
            delay: 2,
            duration: 5,
        })
        .to('.MainTitle .introduce_wrap #Line .g04 text', {
            opacity: 1,
            delay: 2,
            duration: 5,
        })
        .set({}, {}, "+=100")
}



function portfolioWrapTimeline() {

    const tlw = gsap.timeline();


    const wrap = gsap.utils.toArray(".MainPortfolio .slide_wrap .con");

    const wm = gsap.to(wrap, {
        xPercent: -100 * (wrap.length + 1),
        ease: "none",
        scrollTrigger: {
            trigger: '.MainPortfolio',
            pin: true,
            scrub: 1,
            snap: 1 / (wrap.length + 1),//scrub: 0일 경우 작동하지 않음
            start: 'top top',
            end: '1200% center'
        }

    })

    const itmsH = gsap.utils.toArray(".MainPortfolio .slide_wrap .slide .inner .desc h3");
    const itmsP = gsap.utils.toArray(".MainPortfolio .slide_wrap .slide .inner .desc p");
    const itmsD = gsap.utils.toArray(".MainPortfolio .slide_wrap .slide .inner .desc .table");
    const itmsL = gsap.utils.toArray(".MainPortfolio .slide_wrap .slide .inner .desc .link");
    const itmsMU = gsap.utils.toArray(".MainPortfolio .slide_wrap .slide .inner .mokup .sub_mokup .sub");

    itmsH.forEach((it, idx) => {
        const mm = gsap.from(it, {
            x: 200,
            autoAlpha: 0,
            delay: 0.5,
            scrollTrigger: {
                trigger: it,
                containerAnimation: wm,
                toggleActions: 'restart reverse restart reverse',
            }
        })
    });

    itmsP.forEach((it, idx) => {
        const mm = gsap.from(it, {
            x: 200,
            autoAlpha: 0,
            delay: 1,
            scrollTrigger: {
                trigger: it,
                containerAnimation: wm,
                toggleActions: 'restart reverse restart reverse',

            }
        })
    });

    itmsD.forEach((it, idx) => {
        const mm = gsap.from(it, {
            x: 200,
            autoAlpha: 0,
            delay: 1.5,
            scrollTrigger: {
                trigger: it,
                containerAnimation: wm,
                toggleActions: 'restart reverse restart reverse',

            }
        })
    });

    itmsL.forEach((it, idx) => {
        const mm = gsap.from(it, {
            x: 200,
            autoAlpha: 0,
            delay: 2,
            scrollTrigger: {
                trigger: it,
                containerAnimation: wm,
                toggleActions: 'restart reverse restart reverse',

            }
        })
    });

    itmsMU.forEach((it, idx) => {
        const mm = gsap.from(it, {
            x: 200,
            autoAlpha: 0,
            delay: 1,
            scrollTrigger: {
                trigger: it,
                containerAnimation: wm,
                toggleActions: 'restart reverse restart reverse',

            }
        })
    });
}

function Training() {
    const TL2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.MainTraining',
            pin: true,
            scrub: 1,
            start: "-=200",
            end: "+=400",
        }
    })

    TL2
        .from('.MainTraining .title', {
            y: 200,
            autoAlpha: 0,
            duration: 2,
        })
        .from('.MainTraining .inner', {
            y: 200,
            autoAlpha: 0,
            duration: 2,
        })
}




function watch() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    document.querySelector('.MainTitle .introduce_wrap .clock .hour').style.transform = `rotate(${h * (360 / 12)}deg)`
    document.querySelector('.MainTitle .introduce_wrap .clock .minuite').style.transform = `rotate(${m * (360 / 60)}deg)`
    document.querySelector('.MainTitle .introduce_wrap .clock .second').style.transform = `rotate(${s * (360 / 60)}deg)`

}

setInterval(watch, 1000)