import TabNav from './modules/tab-nav.js';
import initAnimateScroll from './modules/animate-scroll.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMobileMenu from './modules/mobile-menu.js';
import initOperating from './modules/operating.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import SmoothScroll from './modules/smooth-scroll.js';
import AccordionList from './modules/accordion-list.js';

const smoothScroll = new SmoothScroll('[data-animation="smooth"] a[href^="#"]');
const accordionList = new AccordionList('[data-animation="accordion"] dt');
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
smoothScroll.init();
accordionList.init();
tabNav.init();
modal.init();

initAnimateScroll();
initTooltip();
initDropdownMenu();
initMobileMenu();
initOperating();
initFetchAnimals();
initFetchBitcoin();