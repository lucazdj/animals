import initTabNav from './modules/tab-nav.js';
import initAccordionList from './modules/accordion-list.js';
import initSmoothScroll from './modules/smooth-scroll.js';
import initAnimateScroll from './modules/animate-scroll.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMobileMenu from './modules/mobile-menu.js';
import initOperating from './modules/operating.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import SmoothScroll from './modules/smooth-scroll.js';

const smoothScroll = new SmoothScroll('[data-animation="smooth"] a[href^="#"]');
smoothScroll.init();

initTabNav();
initAccordionList();
initAnimateScroll();
initModal();
initTooltip();
initDropdownMenu();
initMobileMenu();
initOperating();
initFetchAnimals();
initFetchBitcoin();
