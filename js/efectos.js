$(document).ready(function(){

    
    //Efecto de barra de navegación
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    //Efecto header
    if( $(window).width()> 800 ){
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });
        $('header .textos').animate({
            opacity: 1,
            marginTop: 0
        }, 1500);
    }
    //Scroll acercade
    var menu = $('#plato').offset().top
        galeria = $('#galeria').offset().top;
        acercade = $('#acerca-de').offset().top;
    
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });
    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 580
        }, 500);
    });
});