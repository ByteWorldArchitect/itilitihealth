export const mobileMenu = () => {
    $('.menu-toggle').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('is-active');
        setTimeout(() => {
            document.body.classList.toggle(
                'scroll-lock',
                this.classList.contains('is-active')
            );
        });
    });

    $(window).on('scroll', function() {
        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        $('.site-header').toggleClass('in-body', scrollTop > 50);
    });
};