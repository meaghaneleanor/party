"use strict";

(function ($) {
  $.fn.extend({
    rotaterator: function rotaterator(options) {
      var defaults = {
        fadeSpeed: 3500,
        pauseSpeed: 0,
        child: null
      };
      var options = $.extend(defaults, options);
      return this.each(function () {
        var o = options;
        var obj = $(this);
        var items = $(obj.children(), obj);
        items.each(function () {
          $(this).hide();
        });
        if (!o.child) {
          var next = $(obj).children(':first');
        } else {
          var next = o.child;
        }
        $(next).fadeIn(o.fadeSpeed, function () {
          $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
            var next = $(this).next();
            if (next.length == 0) {
              next = $(obj).children(':first');
            }
            $(obj).rotaterator({ child: next, fadeSpeed: o.fadeSpeed, pauseSpeed: o.pauseSpeed });
          });
        });
      });
    }
  });
})(jQuery);
$(document).ready(function () {
  $('#rotate').rotaterator({ fadeSpeed: 3500, pauseSpeed: 0 });
  $('img.testimonial-form-close-button').on('click', function () {
    $('.bs-example-modal-lg').modal('hide');
  });
  $('.panel-heading').on('click', function () {
    $('.is-open').removeClass('is-open');
    $(this).find('img.plus-icon').toggleClass('is-open');
  });
  $('.home-tabs li').on('click', function () {
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
  });
  $('.home-tabs li.second').on('click', function () {
    $('.tab-one-content').addClass('closed-tab');
    $('.tab-two-content').removeClass('closed-tab');
    $('.tab-three-content').addClass('closed-tab');
  });
  $('.home-tabs li.third').on('click', function () {
    $('.tab-one-content').addClass('closed-tab');
    $('.tab-two-content').addClass('closed-tab');
    $('.tab-three-content').removeClass('closed-tab');
  });
  $('.home-tabs li.first').on('click', function () {
    $('.tab-one-content').removeClass('closed-tab');
    $('.tab-two-content').addClass('closed-tab');
    $('.tab-three-content').addClass('closed-tab');
  });
  $(".image-rotate").click(function () {
    //alert($( this ).css( "transform" ));
    if ($(this).css("transform") == 'none') {
      $(this).css("transform", "rotate(90deg)");
    } else {
      $(this).css("transform", "");
    }
  });
});