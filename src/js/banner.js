// import {
//     jarallax,
//     jarallaxElement,
//     jarallaxVideo
// } from 'jarallax';

// jarallaxVideo();
// jarallaxElement();

// $(document).ready(function () {
//     jarallax(document.querySelectorAll('.jarallax'), {
//         speed: 0.2
//     });
// })

$('.jarallax').jarallax({
    speed: 0.2
});

$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton({
        direction: 'left',
        hoverEnabled: false
    });

    $('.slick-slider-1').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev btn btn-circle btn-lg btn-white"><i class="fas fa-arrow-left"></i><span class="sr-only">Previous<span></button>',
        nextArrow: '<button type="button" class="slick-next btn btn-circle btn-lg btn-white"><i class="fas fa-arrow-right"></i><span class="sr-only">Previous<span></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: '40px'
            },
          }
        ]
    });
    
    detectVideoContainerOrientation(); //fire once on document ready
});

function detectVideoContainerOrientation() {
  $('.has-video-no-parallax video').each(function() {
    var $this = $(this).parent('.has-video-no-parallax');
    if( $this.outerHeight() / $this.width() < 0.70 ) {
      $this.addClass('video-landscape');
      $this.removeClass('video-portrait');
    } else {
      $this.addClass('video-portrait');
      $this.removeClass('video-landscape');
    }
  })
}