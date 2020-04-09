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

    var mixer = mixitup(".products__inner-box");
});