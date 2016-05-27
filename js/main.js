"use strict";

$(document).ready(function () {

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
});