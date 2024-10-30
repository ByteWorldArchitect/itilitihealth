export const desktopMenu = () => {
    $('.site-navigation .menu > li > a').click(function() {
        $(this).toggleClass('is-active');
    });
};