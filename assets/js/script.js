$(document).ready(function () {
  $(".service-slider").slick({
    slidesToShow: 2.15,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><img src='assets/images/right-arrow.png' /></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><img src='assets/images/right-arrow.png' /></button>",

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // testimonial slider
  $(".home-testimonial .testimonial-slider").slick({
    arrows: false,
    slidesToShow: 1.25,
    infinite: false,
    dots: true,
  });
});
