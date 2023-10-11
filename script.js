

$(document).ready(function(){
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 5000, // Time in milliseconds between slides
      dots: true, // Show navigation dots
      arrows: false, // Hide navigation arrows
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  });
  