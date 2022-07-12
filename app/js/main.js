$(function () {
    $(".rate").rateYo({
        rating: 5,
        starWidth: "12px",
        ratedFill: "#ffa726"
    });
    $(".star-rate").rateYo({
        rating: 5,
        starWidth: "12px",
        ratedFill: "#ffa726"
    });

    $('.weekly__inner').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        smartSpeed: 650,
    });
    $('.followers__inner').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 3,
        dots: false,
        smartSpeed: 650,
    });
});

