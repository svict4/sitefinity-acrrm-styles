$(document).ready(function () {
  // embed responsive helpers when in content block
  // youtube responsive helper
  if ($('.sfContentBlock iframe[src*="youtube"]')) {
    $('.sfContentBlock iframe[src*="youtube"]').wrap('<div class="video-responsive" />');
  }

  // google maps responsive helper
  if ($('.sfContentBlock iframe[src*="google.com/maps/embed"]')) {
    $('.sfContentBlock iframe[src*="google.com/maps/embed"]').wrap('<div class="map-responsive" />');
  }

  // table responsive helper
  if ($('.sfContentBlock table')) {
    $('.sfContentBlock table').wrap('<div class="table-responsive" />');
  }

  // Make cards all some height when in columns next to each other
  if ($('.sf_colsIn > .card').length > 0) {
    $('.sf_colsIn > .card').closest('.sf_colsIn').addClass('display-flex');
  }

  // If images have centering fix if anything is floated after it
  if ($('.sfContentBlock [style*="margin-left: auto; margin-right: auto"]').length) {
    $('.sfContentBlock [style*="margin-left: auto; margin-right: auto"]').parent('p').addClass('clearfix');
  }

  // accordion layouts
  if ($('.accordion-ws').length && $('.sfPageEditorWrp').length == 0) {
    $(document).on('click', '.accordion-ws .accordion-ws-toggle', function () {
      if ($(this).parent('.accordion-ws').hasClass('accordion-ws-active')) {
        $(this).attr('aria-expanded', 'false').siblings('.accordion-ws-content').slideUp('fast');
        $(this).parent('.accordion-ws').removeClass('accordion-ws-active');
      } else {
        $(this).attr('aria-expanded', 'true').siblings('.accordion-ws-content').slideDown('fast');
        $(this).parent('.accordion-ws').addClass('accordion-ws-active');
      }

      $('.accordion-ws .accordion-ws-toggle').not(this).attr('aria-expanded', 'false').siblings('.accordion-ws-content').slideUp('fast');
      $('.accordion-ws .accordion-ws-toggle').not(this).parent('.accordion-ws').removeClass('accordion-ws-active');
    });
  };

  $('.form-group select').formSelect();
});