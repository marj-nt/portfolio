// Sidenav appears after landing



    $('.sidenav').fadeOut();

    $(window).scroll(function() {
        if($(window).width() > 768) {
            var hT = $('.intro').offset().top,
            hH = $('.intro').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
            if (wS > (hH - hT)){
                $('.sidenav').css('opacity', 1);
                $('.sidenav').fadeIn();
            } else {
                $('.sidenav').fadeOut();
            }
        } 
        else {

        }
    })

 
  



// Scroll

$(document).on("scroll", onScroll);

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sidenav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight() > scrollPos ) {
            $('.sidenav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}




    var mainOpen = false;

    $('.hamburger-icon').click(function() {
        console.log('test')
        if (mainOpen === false) {
            $('.project-nav').fadeOut();
            
            $('.main-nav').fadeIn();
            $('.hamburger-icon').html('&#10005;');
            mainOpen = true;
        } else if(mainOpen === true) {
            $('.main-nav').fadeOut();
            $('.project-nav').fadeIn();
            $('.hamburger-icon').html('&#9776;');
       
            mainOpen = false;
        }
    })







