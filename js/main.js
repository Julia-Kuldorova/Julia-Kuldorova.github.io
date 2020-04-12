$(function(){

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "17px",
        readOnly: true,
        ratedFill: "#ffc000"
    });
    $(".product__item--rate-star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        ratedFill: "#ffc000"
    });

    $(".slider__inner").slick({
        infinite: true,
        prevArrow:
       '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
     nextArrow:
       '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>'
    });


    $(".slider__bottom-inner").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:
       '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
     nextArrow:
       '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>'
    });

    var mixer = mixitup(".products__inner-box");

    
    var jqBar = $('#counts'); // селектор для вашего блока
    var jqBarStatus = true;
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        if (scrollEvent && jqBarStatus) { 
            jqBarStatus = false;
            /* выполнение скрипта jqbar с определенными параметрами */
            $(".number").spincrement({
                thousandSeparator: ",",
                duration: 4200
                });
        }
        
    });
});