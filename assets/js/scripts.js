import { popup } from './popup.js';
import { fixHeaderOnScroll, hidePreloader, initNavigationMenu } from './helpers.js';
import { initSliders } from './sliders.js';
import { initScrollToBlock } from './scrollToBlock.js';
import { initAccordeons } from './accordeon.js';
import { initTabs } from './tabs.js';

popup.init();
window.popup = popup;
initNavigationMenu();
initSliders();
fixHeaderOnScroll();
initScrollToBlock();
initAccordeons();
initTabs();

setTimeout(() => {
  hidePreloader();
}, 300);
