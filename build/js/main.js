
$(document).ready(function(){
    var tl = new TimelineMax();

    $('.icon-wrap').click(function() {
        if($(this).hasClass('open')) {
            $(this).removeClass('open');
            tl.to('.icon-wrap', 0.3, {css:{width: '70px', boxShadow: '0px 6px 6px rgba(0,0,0,.28)'}})
            tl.to('.icon-wrap', 0.3, {css:{borderRadius: "50%"}}, '-=0.2')
            TweenMax.to('svg', 0.3, {fill: '#000', rotation: 0})
            TweenMax.to('input, label', 0.3, {width: 0})
        } else {
            $(this).addClass('open');
            tl.to('.icon-wrap', 0.7, {css:{borderRadius: "20px", width: '400px', boxShadow: 'rgba(0, 0, 0, 0.28) -3px 16px 52px 0px'}, ease: Elastic.easeOut.config(1, 0.7)})
            TweenMax.to('svg', 0.3, {fill: '#737272', rotation: '90deg'})
            TweenMax.to('input', 0.3, {width: '81%'})
            TweenMax.to('label', 0.3, {width: '78%'})
        }
        
    });

    $('input').focus(function() {
        $('.label-wrap').animate({opacity: 0},100);
    });
    $('input').blur(function() {
        if(!$(this).val() == '') {
            $('.label-wrap').animate({opacity: 0},100);
        } else {
            $('.label-wrap').animate({opacity: 1},1200);
        }
    });
});
