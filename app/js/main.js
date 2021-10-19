$(function () {
    $(".rate").rateYo({
        rating: 5,
        starWidth: "12px",
        ratedFill: "#ffa726"
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        smartSpeed: 650,
    });
});

