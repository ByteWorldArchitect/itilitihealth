import Rellax from 'rellax';

export const parallax = () => {
    const $els = $('.wp-block-cover.has-parallax');

    if ($els.length) {
        $els.each(function() {
            $(this).prepend('<div class="rellax">');
        });

        new Rellax('.rellax', {
            speed: 3,
            center: true,
        });
    }
};