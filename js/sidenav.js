// https://jsfiddle.net/cse_tushar/Dxtyu/141/

$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

$("a").click(function(){
    alert("The paragraph was clicked.");
  });
  


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sidenav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.sidenav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

