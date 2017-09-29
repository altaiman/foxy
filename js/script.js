$(function(){
    $(document).on('click', 'a', function(event){
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });

    $('[data-modal]').on('click', function() {
        var target = $(this).attr('data-modal');

        $.fancybox.open({
            src: target
        });
    });

    $('.form__btn[type="submit"]').on('click', function(e) {
        e.preventDefault();

        var form = $(this).parent(),
            errors = false;

        $(form).find('.form__field_error').removeClass('form__field_error');

        $(form).find('.form__field input').each(function(i, el) {
            if ($(el).val().trim() === '') {
                $(el).parent().addClass('form__field_error');
                errors = true;
            }
        })

        if (errors) return;

    });

    $('.step__title').on('click', function() {
        $(this).parent().toggleClass('step_open');
        $(this).parent().find('.step__content').stop().slideToggle(200);
    });

    // $('.step__title').first().trigger('click');

    $('.hearts svg .cls-1').each(function(i,el) {
        $(el).css('animation-duration', 2-i + 's');
        $(el).css('animation-delay', '.' + i + 's');
        $(el).css('animation-play-state', 'running');
    });


    // landing aniamtions
    window.sr = ScrollReveal();
    sr.reveal('.welcome__content *', { duration: 500, mobile: false}, 50);
    sr.reveal('.section__inner_service', { duration: 1000, mobile: false});
    sr.reveal('.service__item', { duration: 500, mobile: false}, 150);
    sr.reveal('.promotion__item', { duration: 500, delay: 250, mobile: false}, 150);
    sr.reveal('.analysis *:not(img):not(.analysis__ill)', { duration: 700, mobile: false}, 100);
    sr.reveal('.reasons *', { duration: 500, mobile: false }, 25);
    sr.reveal('.get *', { duration: 500, mobile: false}, 50);

    var d = true;

    setInterval(function() {
        var filter = $('.plashka defs #f1').children().first(),
            val = $(filter).attr('stdDeviation');
        (d) ?  ++val : --val;

        if (val === 15) {
            d = false;
        } else if (val === 1) {
            d = true;
        }
        
        $(filter).attr('stdDeviation', val);
    }, 200)

    $('.menu-btn').on('click', function() {
        $(this).toggleClass('menu-btn_open');
        $('.menu').finish().slideToggle();
    });

});