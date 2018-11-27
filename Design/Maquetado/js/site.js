///*---------------------------------
//    OCULTAR Y MOSTRAR BOTON IR ARRIBA
// ----------------------------------*/
//$(function () {
//    $(window).scroll(function () {
//        var scrolltop = $(this).scrollTop();
//        if (scrolltop >= 50) {
//            $(".ir-arriba").fadeIn();
//        } else {
//            $(".ir-arriba").fadeOut();
//        }
//    });
//
//});


/*----------------------------------
Iniciamos smoothScroll
--------------------------------*/
smoothScroll.init({
    speed: 10, // Integer. How fast to complete the scroll in milliseconds
    offset: 60, // Integer. How far to offset the scrolling anchor location in pixels

});


/*----------------------------------
Iniciamos WOW
--------------------------------*/
var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();


/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {
    // grosor de menu
    var nav = $('#menu');
    var bar = $('#bar-contact');
    var imgmenu = $('#img-menu');
    var position_bar = bar.position();
    var top_position = position_bar.top + bar.height();

    var scroll = $(window).scrollTop();

    /*---------------------------------
        OCULTAR Y MOSTRAR BOTON IR ARRIBA
     ----------------------------------*/
    if (scroll >= top_position + 50) {
        $(".ir-arriba").fadeIn();
    } else {
        $(".ir-arriba").fadeOut();
    }
    /*---------------------------------
        CABECERA FIJA
     ----------------------------------*/
    if (scroll >= top_position) {
        nav.addClass("fixed-top");
        $('#index').addClass("index-margin");
    } else {
        nav.removeClass("fixed-top");
        $('#index').removeClass("index-margin");
    }
    /*---------------------------------
       CABECERA ANIMADA
     ----------------------------------*/
    if (scroll >= top_position + 40) {
        nav.addClass("cabecera-scroll");
    } else {
        nav.removeClass("cabecera-scroll");
    }
    /*---------------------------------
       ACTIVACION IMAGEN BARRA DE MENU
     ----------------------------------*/
    if (scroll >= top_position) {
        imgmenu.removeClass("panel-pub-img-hidden");
    } else {
        imgmenu.addClass("panel-pub-img-hidden");
    }

    /*---------------------------------
       ACTIVACION DE MENU
     ----------------------------------*/
    var offset = 80;
    var position_inicio_ini = $('#inicio').position().top - offset;
    var position_inicio_fin = $('#inicio').position().top + $('#inicio').height();

    if (scroll > position_inicio_ini && scroll <= position_inicio_fin) {
        if ($('#menu-inicio').hasClass("active") == false) {
            $(".nav-item").removeClass("active");
            $('#menu-inicio').addClass("active");
        }
    }

    var position_nosotros_ini = $('#nosotros').position().top - offset;
    var position_nosotros_fin = $('#nosotros').position().top + $('#nosotros').height();

    if (scroll > position_nosotros_ini && scroll <= position_nosotros_fin) {
        if ($('#menu-nosotros').hasClass("active") == false) {
            console.log(scroll);
            console.log(position_nosotros_ini);
            $(".nav-item").removeClass("active");
            $('#menu-nosotros').addClass("active");
        }
    }

    var position_estudia_ini = $('#estudia').position().top - offset;
    var position_estudia_fin = $('#estudia').position().top + $('#estudia').height();

    if (scroll > position_estudia_ini && scroll <= position_estudia_fin) {
        if ($('#menu-estudia').hasClass("active") == false) {
            $(".nav-item").removeClass("active");
            $('#menu-estudia').addClass("active");
        }
    }

    var position_trabaja_ini = $('#trabaja').position().top - offset;
    var position_trabaja_fin = $('#trabaja').position().top + $('#trabaja').height();

    if (scroll > position_trabaja_ini && scroll <= position_trabaja_fin) {
        if ($('#menu-trabaja').hasClass("active") == false) {
            $(".nav-item").removeClass("active");
            $('#menu-trabaja').addClass("active");
        }
    }

    var position_galeria_ini = $('#galeria').position().top - offset;
    var position_galeria_fin = $('#galeria').position().top + $('#galeria').height();

    if (scroll > position_galeria_ini && scroll <= position_galeria_fin) {
        if ($('#menu-galeria').hasClass("active") == false) {
            $(".nav-item").removeClass("active");
            $('#menu-galeria').addClass("active");
        }
    }

    var position_viaja_ini = $('#viaja').position().top - offset;
    var position_viaja_fin = $('#viaja').position().top + $('#viaja').height();

    if (scroll > position_viaja_ini && scroll <= position_viaja_fin) {
        if ($('#menu-viaja').hasClass("active") == false) {
            $(".nav-item").removeClass("active");
            $('#menu-viaja').addClass("active");
        }
    }

    var position_contacto_ini = $('#contacto').position().top - offset;
    var position_contacto_fin = $('#contacto').position().top + $('#contacto').height();

    if (scroll > position_contacto_ini && scroll <= position_contacto_fin) {
        if ($('#menu-contacto').hasClass("active") == false) {
            $(".nav-item").removeClass("active");
            $('#menu-contacto').addClass("active");
        }
    }

    //    if (scroll >= top_position) {
    //        nav.addClass("cabecera-scroll");
    //        bar.addClass("panel-pub-hidden");
    //    } else {
    //        nav.removeClass("cabecera-scroll");
    //        bar.removeClass("panel-pub-hidden");
    //    }
});
