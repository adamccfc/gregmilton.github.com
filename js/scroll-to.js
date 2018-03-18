(function () {
  'use strict';

  $('[data-scroll-to]').click(function() {
    // Get the pages id to scroll to
    var id = $(this).data('scroll-to');
    // Scroll the page to the id
    $('html, body').animate({
      scrollTop: $('#' + id).offset().top
    }, 2000);

  });
}());
