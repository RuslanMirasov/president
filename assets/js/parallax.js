const parallaxElements = document.querySelectorAll('[data-parallax]');

// const updateParallax = () => {
//   const viewportHeight = window.innerHeight;

//   parallaxElements.forEach(el => {
//     const rect = el.getBoundingClientRect();
//     const elementCenter = rect.top + rect.height / 2;

//     const isCenterVisible = elementCenter > 0 && elementCenter < viewportHeight + 150;

//     const currentTransform = el.style.transform;

//     if (isCenterVisible) {
//       if (currentTransform === 'translate(-50%, 0px)') return;
//       el.style.transform = 'translate(-50%, 0px)';
//     } else {
//       if (currentTransform === 'translate(-50%, 110px)') return;
//       el.style.transform = 'translate(-50%, 110px)';
//     }
//   });
// };

// const updateParallax = () => {
//   const viewportHeight = window.innerHeight;

//   parallaxElements.forEach(el => {
//     const rect = el.getBoundingClientRect();
//     const elementCenter = rect.top + rect.height / 2;

//     const isCenterVisible = elementCenter > 0 && elementCenter < viewportHeight + 150;

//     if (isCenterVisible) {
//       el.style.transform = `translate(-50%, 0px)`;
//     } else {
//       el.style.transform = `translate(-50%, 110px)`;
//     }
//   });
// };

//parallax on desctop

const updateParallax = () => {
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;

  const isMobile = viewportWidth < 1024;
  const isVerticalScreen = window.matchMedia('(orientation: portrait)').matches;

  parallaxElements.forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0;
    const rect = el.getBoundingClientRect();
    const offsetTop = rect.top + scrollTop;
    const elementCenter = offsetTop + rect.height / 2;
    const viewportCenter = scrollTop + viewportHeight / 2;
    const distance = elementCenter - viewportCenter;

    const blockHeight = el.offsetHeight;
    const isBlockTooSmall = blockHeight < viewportHeight;
    const isVisible = rect.top < viewportHeight && rect.bottom > 0;

    if (isMobile || isVerticalScreen || isBlockTooSmall) {
      if (isVisible) {
        el.style.transform = `translate(-50%, 0px)`;
      } else {
        el.style.transform = `translate(-50%, 100px)`;
      }
    } else {
      const translateY = distance * -speed;
      el.style.transform = `translate(-50%, ${translateY}px)`;
    }
  });
};

const onScroll = () => {
  requestAnimationFrame(updateParallax);
};

window.addEventListener('scroll', onScroll);
window.addEventListener('resize', onScroll);
document.addEventListener('DOMContentLoaded', updateParallax);
