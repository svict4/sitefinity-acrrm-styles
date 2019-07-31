$(document).ready(function () {
    mainNavDeviceFunctionality();
});

function mainNavDeviceFunctionality() {
    $('.nav-toggle').on('click', function () {
        $('.search-dropdown').removeClass('active');
        $('html').addClass('nav-device-open');
        $('body').css({
            top: -($('html').scrollTop()),
            position: 'fixed'
        });

        if ($(this).attr('aria-expanded', false)) {
            $(this).attr('aria-expanded', true);
        } else {
            $(this).attr('aria-expanded', false);
        }
    });

    $('.nav-toggle-subLevel').on('click', function () {
        $(this).parents('.has-children').toggleClass('has-children-open');

        $(this).siblings('ul').slideToggle();
    });

    $('.nav-mobile-close').on('click', function () {
        $('html').removeClass('nav-device-open'); 

        var topVal = parseInt($('body').css('top'));

        $('body').css({
            position: 'static'
        });
        setTimeout(function () {
            $('html').scrollTop(-(topVal));
            $('body').attr('style', '');
        }, 1);
    });

    if ($('.search-toggle').length) {
        $('.search-toggle').on('click', function () {
          if (!$(this).parents('.search-dropdown').hasClass('active')) {
            $('body').css({
                top: -($('html').scrollTop()),
                position: 'fixed'
            });
            $(this)
              .attr('aria-expanded', 'true')
              .parents('.search-dropdown').addClass('active');
          } else {
            var topVal = parseInt($('body').css('top'));
    
            $('body').css({
                position: 'static'
            });
            setTimeout(function () {
                $('html').scrollTop(-(topVal));
                $('body').attr('style', '');
            }, 1);

            $(this)
              .attr('aria-expanded', 'false')
              .parents('.search-dropdown').removeClass('active');
          }
        })
      }

    $('.nav-mobile-outer').on('click', function (e) {
        e = window.event || e; 
        if(this === e.target) {
            if ($('html').hasClass('nav-device-open')) {
                var topVal = parseInt($('body').css('top'));

                $('body').css({
                    position: 'static'
                });

                setTimeout(function () {
                    $('html').scrollTop(-(topVal));
                    $('body').attr('style', '');
                    $('html').removeClass('nav-device-open'); 
                    $('.nav-toggle').attr('aria-expanded', false);
                }, 1);
            } else {
                $('html').addClass('nav-device-open'); 
            }
        }
    });
};