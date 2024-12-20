import Swiper from 'swiper';
import { Navigation ,Thumbs, FreeMode  } from 'swiper/modules';
new Swiper(".exploreSwiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".exploreSwiper-navigation .swiper-button-next",
        prevEl: ".exploreSwiper-navigation .swiper-button-prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
 new Swiper(".cityRentSwiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".cityRentSwiper-navigation .swiper-button-next",
        prevEl: ".cityRentSwiper-navigation .swiper-button-prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
 new Swiper(".clientReviewSwiper", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".clientReviewSwiper-navigation .swiper-button-next",
        prevEl: ".clientReviewSwiper-navigation .swiper-button-prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
  let thumbSwiper = new Swiper('.thumb-swiper', {
    modules: [FreeMode, Thumbs],
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

 new Swiper('.main-swiper', {
    modules: [Navigation, Thumbs],
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumbSwiper,
    },
  });


