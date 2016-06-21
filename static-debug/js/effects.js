$( document ).ready(function() {
    $('#up').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
    return false;
    });

    if(document.location.pathname == "/index/about/")
        $("#navbar-right a[href='/index/about/']").css({"border-right": "1px solid #000000"});

     if(document.location.pathname == "/index/works/")
        $("#navbar-right a[href='/index/works/']").css({"border-right": "1px solid #000000"});

    if(document.location.pathname == "/index/contact/")
        $("#navbar-right a[href='/index/contact/']").css({"border-right": "1px solid #000000"});



});