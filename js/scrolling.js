// Sidenav appears after landing

if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
    // true for mobile device
    document.write("mobile device");
  }else{
    // false for not mobile device
    document.write("not mobile device");

    $('.sidenav').fadeOut();

    $(window).scroll(function() {
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
    });
  }



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


