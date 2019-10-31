

$(document).ready(function () {
    // Animations init
    new WOW().init();

    /*  To change slides */

    $('#slideUp').on('click', function(){
        scrollUp();
    });
    $('#slideDown').on('click', function(){
        scrollDown();
    });

    $(document).keydown(function(e) {
        switch(e.which) {

            case 38: scrollUp();
            break;

            case 40: scrollDown();
            break;
    
            default: return;
        }
        e.preventDefault();
    });
    /*  To change slides ends*/

    /* OVERLAY NAVBAR TOOGLE */
    $('.navbar-toggler').on('click', function(){
        openNav();
    });
    $('.closeBtn').on('click', function(){
        closeNav();
    });
    /* OVERLAY NAVBAR TOGGLE */
});


/*  SCROLL TO CLOSE SLIDES */

function scrollUp() {
    if  ($("a[href='#section-home']").hasClass('active')) {
        return;
    }
    else if ($("a[href='#section-skills']").hasClass('active')) {
        $('html, body').animate({
            scrollTop: $("#section-home").offset().top
           }, 200);
    }
    else if ($("a[href='#section-projects']").hasClass('active')) {
        $('html, body').animate({
            scrollTop: $("#section-skills").offset().top
           }, 200);
    }
    else if ($("a[href='#section-works']").hasClass('active')) {
        $('html, body').animate({
            scrollTop: $("#section-projects").offset().top
           }, 200);
    }
}

function scrollDown() {
    /*if  ($("a[href='#section-contact']").hasClass('active')) {
        return;
    }
    else if ($("a[href='#section-works']").hasClass('active')) {
        $('html, body').animate({
            scrollTop: $("#section-projects").offset().top
           }, 200);
    }*/
    if ($("a[href='#section-projects']").hasClass('active')) {
        $('html, body').animate({
            scrollTop: $("#section-works").offset().top
           }, 200);
    }
    else if ($("a[href='#section-skills']").hasClass('active')) {
        $('html, body').animate({
            scrollTop: $("#section-projects").offset().top
           }, 200);
    }
    else if ($("a[href='#section-home']").hasClass('active')) {
        $('html, body').animate({
            scrollTop: $("#section-skills").offset().top
           }, 200);
    }
}
/*  SCROLL TO CLOSE ENDS */

/* Overlay NAVBAR TOGGLER */
function openNav() {
    $('#myNav').css('width', '100%');
}

function closeNav(){
    $('#myNav').css('width', '0');
}
/* Overlay NAVBAR TOGGLER ENDS*/
