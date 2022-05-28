import TabNav from './modules/tab-nav.js';
import initAnimateScroll from './modules/animate-scroll.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMobileMenu from './modules/mobile-menu.js';
import initOperating from './modules/operating.js';
import initFetchAnimals from './modules/fetch-animals.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import SmoothScroll from './modules/smooth-scroll.js';
import AccordionList from './modules/accordion-list.js';

const smoothScroll = new SmoothScroll('[data-animation="smooth"] a[href^="#"]');
smoothScroll.init();

const accordionList = new AccordionList('[data-animation="accordion"] dt');
accordionList.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimateScroll();
initDropdownMenu();
initMobileMenu();
initOperating();
initFetchAnimals();
initFetchBitcoin();
