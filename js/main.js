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
            '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-prev.png" alt=""></button>',
        nextArrow:
            '<button class="slick-arrow slick-next"><img src="images/icons/arrow-next.png" alt=""></button>',
        variableWidth: true
    });
    $('.comments-slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
            '<button class="slick-arrow slick-prev"><img src="../images/icons/arrow-prev.png" alt=""></button>',
        nextArrow:
            '<button class="slick-arrow slick-next"><img src="../images/icons/arrow-next.png" alt=""></button>',
        dots: true
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

    gsap.registerPlugin(ScrollTrigger);


    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".advantages",
            start: "center bottom"
        }
    })

    tl1.from(".advantages__info-box", { x: 100, opacity: 0, duration: 1.5})

    let tl2  = gsap.timeline({
        scrollTrigger: {
            trigger: ".join",
            start: "center bottom"
        }
    })

    tl2.from(".join__aside", { x: -100, opacity: 0, duration: 1.5})
        .from(".join__box-bottom-wrapper",{ y: 100, opacity: 0, duration: 1.5} )

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