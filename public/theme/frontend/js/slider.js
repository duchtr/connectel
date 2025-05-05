var SLIDER = {
  slidePartner: function () {
    if (typeof Tech.$(".slide-partner") === "undefined") return;
    const swiperBanner1 = new Swiper(".slide-partner", {
      slidesPerView: 3,
      spaceBetween: 8,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      loop: true,
      speed: 3000,
      breakpoints: {
        576: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 8,
        },
        991: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
        1023: {
          slidesPerView: 10,
          spaceBetween: 24,
        },
      },
    });
  },
  slideFeedback: function () {
    if (typeof Tech.$(".slide-feedback") === "undefined") return;
    const swiperBanner1 = new Swiper(".slide-feedback", {
      slidesPerView: 1,
      spaceBetween: 8,
      pagination: {
        el: ".pagination-feedback",
        clickable: true,
      },
      navigation: {
        nextEl: ".button-feedback-next",
        prevEl: ".button-feedback-prev",
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          direction: "vertical",
          effect: "fade",
          autoHeight: true,
        },
      },
    });
  },
  init: function () {
    SLIDER.slidePartner();
    SLIDER.slideFeedback();
  },
};
Tech.Query.ready(function () {
  setTimeout(function () {
    SLIDER.init();
  }, 100);
});
