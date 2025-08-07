export const throttle = (func, limit) => {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
};

export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const hidePreloader = () => {
  const preloader = document.querySelector('[data-preloader]');
  if (!preloader) return;

  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 200);
};

export const fixHeaderOnScroll = () => {
  const header = document.querySelector('.header');

  const updateHeader = () => {
    if (window.scrollY > 0) {
      header.classList.add('fix');
      return;
    }
    header.classList.remove('fix');
  };

  const throttledScroll = throttle(updateHeader, 100);
  const debouncedScrollEnd = debounce(updateHeader, 100);

  updateHeader();
  window.addEventListener('scroll', () => {
    throttledScroll();
    debouncedScrollEnd();
  });
};

export const initNavigationMenu = () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.navigation ');
  const menuLinks = document.querySelectorAll('.menu__link');

  const toggleMenu = () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  };

  burger.addEventListener('click', toggleMenu);
  menuLinks.forEach(link => link.addEventListener('click', toggleMenu));
};
