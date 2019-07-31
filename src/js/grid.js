(function() {
    // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, result;

    var later = function(context, args) {
      timeout = null;
      if (args) result = func.apply(context, args);
    };

    var debounced = restArguments(function(args) {
      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(this, args);
      } else {
        timeout = _.delay(later, wait, this, args);
      }

      return result;
    });

    debounced.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
    };

    return debounced;
  };
})

$(document).ready(function () {
  if ($('.section-header-sticky').length) {
    $(window).on('scroll', function () { 
      if ($(window).scrollTop() > 0) {
          $('.section-header-sticky').addClass('section-header-sticky-active')
      } else {
          $('.section-header-sticky').removeClass('section-header-sticky-active')
      }
    });
  }
});