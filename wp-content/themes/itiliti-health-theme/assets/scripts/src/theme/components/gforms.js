export const gforms = () => {
    //add classes depending on form field
    $('.gfield_select').closest('.gfield').addClass('has-select');
    $('.ginput_container_textarea').closest('.gfield').addClass('has-textarea');
    $(
            'input:not([type=radio]):not([type=checkbox]):not([type=file]):not([type=hidden])'
        )
        .closest('.gfield')
        .addClass('has-text-input');

    $('input, textarea, select')
        .on('change blur', function() {
            var $input = $(this);
            var hasValue = $input.val();

            if (hasValue != '' && hasValue != '(___) ___-____') {
                //note: accounts for tel input mask
                $input.parents('.gfield').addClass('has_value');
                //console.log(hasValue);
            } else {
                $input.parents('.gfield').removeClass('has_value');
            }
        })
        .each(function() {
            var $input = $(this);
            var hasValue = $input.val();

            if (hasValue != '' && hasValue != '(___) ___-____') {
                //note: accounts for tel input mask
                $input.parents('.gfield').addClass('has_value');
                //console.log(hasValue);
            } else {
                $input.parents('.gfield').removeClass('has_value');
            }
        });
};