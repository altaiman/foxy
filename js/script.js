$(function(){
    $(document).on('click', 'a', function(event){
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
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

    if ($(window).width() <= 768) {
        $('.service').mCustomScrollbar({
            axis: 'x',
            setWidth: 282
        });
    }


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

});