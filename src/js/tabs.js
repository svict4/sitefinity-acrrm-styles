$(document).ready(function () {
    $('.tabs-ws').each(function( ) {
        var initialContent = $(this).find('.tabs-header .tab-ws:first-child .tab-ws-toggle').siblings('.tab-ws-content').html();

        $(this).find('.tabs-body').prepend(initialContent);

        $(this).find('.tabs-header-indicator').css({
            width: $(this).find('.tab-ws-toggle').first().innerWidth()
        })
    });

    $('.tab-ws .tab-ws-toggle').on('click', function () {
        var $this = $(this);

        $this.closest('.tabs-header').siblings('.tabs-body')
        var clickedContent = $this.siblings('.tab-ws-content').html();
        $this.closest('.tabs-header').siblings('.tabs-body').empty();
        $this.closest('.tabs-header').siblings('.tabs-body').prepend(clickedContent);

        $this.parents('.tab-ws').siblings('.tabs-header-indicator').css({
            left: $(this).position().left,
            width: $(this).innerWidth()
        })

        if ($(window).innerWidth() < 768) {
            $this.parents('.tabs-header').find('.tab-ws-toggle.active').not(this).siblings('.tab-ws-content').slideUp('fast');
            $this.siblings('.tab-ws-content').slideToggle('fast', function() {
                $('html, body').animate({
                    scrollTop: $this.offset().top - 95
                }, 300);
            });

            if ($this.hasClass('active')) {
                $this.removeClass('active');
            } else {
                $('.tab-ws .tab-ws-toggle').removeClass('active');
                $this.addClass('active');
            }
        } else {
            $('.tab-ws .tab-ws-toggle').removeClass('active');
            $this.addClass('active');
        }

        
    });

    $(window).resize(function () {
        $('.tab-ws .tab-ws-toggle.active').each(function () {
            var $this = $(this);

            $(this).parents('.tab-ws').siblings('.tabs-header-indicator').css({
                left: $this.position().left,
                width: $this.innerWidth()
            });
        });

        $('.tab-ws .tab-ws-toggle.active').siblings('.tabs-header-indicator').css({
            left: $(this).position().left,
            width: $(this).innerWidth()
        });
    });
});