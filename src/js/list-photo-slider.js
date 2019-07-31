$(document).ready(function() {
    $('.photo-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        // slidesToShow: 2,
        // slidesToScroll: 3,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev btn btn-circle btn-lg btn-white"><i class="fas fa-arrow-left"></i><span class="sr-only">Previous<span></button>',
        nextArrow: '<button type="button" class="slick-next btn btn-circle btn-lg btn-white"><i class="fas fa-arrow-right"></i><span class="sr-only">Previous<span></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  centerMode: true,
                //   centerPadding: '80px'
                }
              },
          ]
    });
});