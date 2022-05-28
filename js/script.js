import TabNav from './modules/tab-nav.js';
import AnimateScroll from './modules/animate-scroll.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MobileMenu from './modules/mobile-menu.js';
import Operating from './modules/operating.js';
import fetchAnimals from './modules/fetch-animals.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
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

fetchAnimals('./animals.json', '.numbers-grid');

const animateScroll = new AnimateScroll('[data-animation="scroll"]');
animateScroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const mobileMenu = new MobileMenu('[data-menu="button"]', '[data-menu="list"]');
mobileMenu.init();

const operating = new Operating('[data-week]', 'opened');
operating.init();

fetchBitcoin('https://blockchain.info/ticker', '.btc-value');
