//utilizar tooltips
$(document).ready( function (){
    //scroll
    $('a').click(function () {
        var recorre = this.hash

        $('html, body').animate({
                //restar el numero de px del navbar
                scrollTop: $(recorre).offset().top +30
            },
            1800
        );
    })

    //utiliza tooltip
    $('[data-bs-toggle="tooltip"]').tooltip();    
    
    //cambio de color para los titulos de: quienes somos, destacados y contacto
    $( ".cambioColor" ).click( function (){
        $( this ).css({
            "color" : "#0088b6" ,
        });
    });

    //muestra y oculta la descripcion de la tarjeta de forma independiente
    $( ".tituloTarjeta1" ).click( function (){
        $( ".textoTarjeta1" ).toggle( "fast" );
    });

    //muestra y oculta la descripcion de la tarjeta
    $( ".tituloTarjeta2" ).click( function (){
        $( ".textoTarjeta2" ).toggle( "fast" );
    });

    //muestra y oculta la descripcion de la tarjeta
    $( ".tituloTarjeta3" ).click( function (){
        $( ".textoTarjeta3" ).toggle( "fast" );
    });

    //muestra y oculta la descripcion de la tarjeta
    $( ".tituloTarjeta4" ).click( function (){
        $( ".textoTarjeta4" ).toggle( "fast" );
    });

    $( ".cambioColor" ).dblclick( function (){
        alert("!Necesitas mas información¡ CONTACTANOS");
    });
   
});

