const sliders = document.querySelectorAll('[data-slider]');
const heroSlider = document.querySelector('.swiper--hero');
const heroSliderThumb = document.querySelector('.swiper--thumb');

export const initSliders = () => {
  if (sliders.length > 0) {
    sliders.forEach(sliderWrapper => {
      const swiper = sliderWrapper.querySelector('.swiper');
      const { effect = 'slide', speed = '600', spaceBetween = '0,0,0', slidesPerView = '1,1,1', slidesPerGroup = '1,1,1' } = sliderWrapper.dataset;

      const arrowPrev = sliderWrapper.querySelector('[data-arrow-prev]');
      const arrowNext = sliderWrapper.querySelector('[data-arrow-next]');
      const pagination = sliderWrapper.querySelector('[data-pagination]');

      const options = {
        allowTouchMove: true,
        effect,
        speed,
        breakpoints: {
          0: {
            slidesPerView: Number(slidesPerView.split(',')[2]),
            slidesPerGroup: Number(slidesPerGroup.split(',')[2]),
            spaceBetween: Number(spaceBetween.split(',')[2]),
          },
          768: {
            slidesPerView: Number(slidesPerView.split(',')[1]),
            slidesPerGroup: Number(slidesPerGroup.split(',')[1]),
            spaceBetween: Number(spaceBetween.split(',')[1]),
          },
          1280: {
            slidesPerView: Number(slidesPerView.split(',')[0]),
            slidesPerGroup: Number(slidesPerGroup.split(',')[0]),
            spaceBetween: Number(spaceBetween.split(',')[0]),
          },
        },
      };

      if (arrowPrev && arrowNext) {
        options.navigation = {
          prevEl: arrowPrev,
          nextEl: arrowNext,
        };
      }

      if (pagination) {
        options.pagination = {
          el: pagination,
          clickable: true,
          dynamicBullets: true,
        };
      }

      new Swiper(swiper, options);
    });
  }

  if (heroSlider) {
    const heroSwiperThumb = new Swiper(heroSliderThumb, {
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      freeMode: true,
      loop: false,
      allowTouchMove: true,
      breakpoints: {
        0: {
          spaceBetween: 4,
        },
        768: {
          spaceBetween: 14,
        },
        1280: {
          spaceBetween: 24,
        },
      },
    });

    const heroSwiper = new Swiper(heroSlider, {
      allowTouchMove: false,
      effect: 'fade',
      loop: false,
      speed: '1000',
      watchSlidesProgress: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      thumbs: {
        swiper: heroSwiperThumb,
      },
    });

    heroSwiper.on('slideChange', () => {
      const realIndex = heroSwiper.realIndex;
      heroSwiperThumb.slides.forEach(slide => slide.classList.remove('swiper-slide-thumb-active'));
      const activeSlide = heroSwiperThumb.slides[realIndex];
      if (activeSlide) {
        activeSlide.classList.add('swiper-slide-thumb-active');
      }
      heroSwiperThumb.slideTo(realIndex);
    });
  }
};
