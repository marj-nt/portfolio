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

    $('.sidenav .hamburger-icon').click(function() {
        console.log('test')
        if (mainOpen === false) {
            $('.project-nav').fadeOut();
            
            $('.main-nav').fadeIn();
            $('.sidenav .hamburger-icon').html('&#10005;');
            mainOpen = true;
        } else if(mainOpen === true) {
            $('.main-nav').fadeOut();
            $('.project-nav').fadeIn();
            $('.sidenav .hamburger-icon').html('&#9776;');
       
            mainOpen = false;
        }
    })

    var navOpen = false;

    var activeMenu = 1;

    $('.hamburger-sm').click(function() {
        if(navOpen === false) {
          $('.sidenav-sm').addClass('open');
          $('.sidenav-sm').css('height', '75vh');
          $('.sidenav-sm .hamburger-sm').html('&#10005;');
          $('.sidenav-sm .active-menu').fadeIn();
          $('.sidenav-sm .project-nav').fadeIn();
          navOpen = true;
        } else if(navOpen === true) {
            $('.sidenav-sm').css('height', 'auto');
            $('.sidenav-sm .active-menu').fadeOut();
          $('.sidenav-sm .project-nav').fadeOut();
          $('.sidenav-sm').removeClass('open');
          $('.sidenav-sm .hamburger-sm').html('&#9776;');

          navOpen = false;
          activeMenu = 1;

          $('.sidenav-sm .project-nav').fadeOut()
            $('.sidenav-sm .main-nav').fadeOut()
            $('.active-menu').html('&#8594;MAIN NAV')
        }

    })

    $('.active-menu').click(function() {
        if(activeMenu === 1) {
            $('.sidenav-sm .project-nav').fadeOut()
            $('.sidenav-sm .main-nav').fadeIn()
            $('.active-menu').html('&#8592;PROJECT NAV')
            activeMenu = 2;
        } else if (activeMenu === 2) {
            $('.sidenav-sm .project-nav').fadeIn()
            $('.sidenav-sm .main-nav').fadeOut()
            $('.active-menu').html('&#8594;MAIN NAV')
            activeMenu = 1;
        }
    })









