$(function(){


    $('select.select-box').styler();

    setTimeout(function() {
	      $('input, select').styler();
    }, 100)

    $('.play-slider__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:
            '<button class="slick-arrow slick-prev"><img src="../images/icons/arrow-prev.png" alt=""></button>',
        nextArrow:
            '<button class="slick-arrow slick-next"><img src="../images/icons/arrow-next.png" alt=""></button>',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.comments-slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
            '<button class="slick-arrow slick-prev" aria-label="Prev"><img src="../images/icons/arrow-prev.png" alt=""></button>',
        nextArrow:
            '<button class="slick-arrow slick-next" aria-label="Nпгext"><img src="../images/icons/arrow-next.png" alt=""></button>',
        dots: true
    });

    $('.blog__aside-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
            '<button class="slick-arrow slick-prev" aria-label="Prev"><span class="icofont-thin-left"></span></button>',
        nextArrow:
            '<button class="slick-arrow slick-next" aria-label="Nпгext"><span class="icofont-thin-right"></span></button>'
    });

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "16px",
        readOnly: true,
        ratedFill: "#ffcc00"
    });

    $(".qfa__item .qfa__item-btn").on("click", function  () {
        $(this).closest('.qfa__item').children('.qfa__item-bottom').slideToggle();
        $(this).toggleClass('active');
    })

    $(".search__btn-top").on("click", function () {
        $(this).closest('.header-top').children('.header-search').addClass("active");
    })

    $(".search-form__btn-close").on("click", function () {
        $(".header-search").removeClass("active")
    })

    $(".header-top__btn-menu").on("click", function () {
        $(".header-bottom").toggleClass("active")
    })

    $(".btn-contact__close").on("click", function () {
        $(".btn-contact__close").addClass("hidden")
        $(".contact__btn-wrapper").addClass("hidden")
    })

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({

        "(min-width: 1000px)": function () {
            let tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".advantages",
                    start: "center bottom"
                }
            });
            tl1.from(".advantages__info-box", { x: 100, opacity: 0, duration: 1.5})

            let tl2  = gsap.timeline({
                scrollTrigger: {
                    trigger: ".join",
                    start: "center bottom",
                }
            })

            tl2.from(".join__aside", { x: -100, opacity: 0, duration: 1.5})
                .from(".join__box-bottom-wrapper",{ y: 100, opacity: 0, duration: 1.5} )
        },


        // "(max-width: 570px)": function () {
        //     let tl4 = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: ".advantages__items-row-top",
        //              start: "top center"
        //         }
        //     });
        //     tl4.from(".advantages__item-1", { x: -20,  opacity: 0,  duration: .05}, "-=1")
        //     tl4.from(".advantages__item-2", { x: 20,  opacity: 0,  duration: .05})
        //
        //
        //     let tl5 = gsap.timeline({
        //         scrollTrigger: {
        //             trigger: ".advantages__items-row-right",
        //             start: "top center"
        //         }
        //     });
        //     tl5.from(".advantages__item-3", { x: -20,  opacity: 0,  duration: .05}, "-=1")
        //     tl5.from(".advantages__item-4", { x: 20,  opacity: 0,  duration: .05})
        //
        // }

    })


    let tl3  = gsap.timeline({
        scrollTrigger: {
            trigger: ".comments",
            start: "center bottom"
        }
    })

    tl3.from(".comments-headline", { x: 100, opacity: 0, duration: 1.5})


    let tl4  = gsap.timeline({
        scrollTrigger: {
            trigger: ".qfa",
            start: "center bottom"
        }
    })

    tl4.from(".qfa__img", { x: 100, opacity: 0, duration: 1.5})
});