import {
    mobileMenu
} from './components/mobileMenu';
import {
    desktopMenu
} from './components/desktopMenu';
import {
    parallax
} from './components/parallax';
import {
    gforms
} from './components/gforms';

// make $ global
!window.$ && (window.$ = jQuery);

$(() => {
    mobileMenu();
    desktopMenu();
    gforms();
    parallax();
});