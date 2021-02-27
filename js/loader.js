$("html").addClass("disable-scrolling");
$("body").addClass("disable-scrolling");
$(".sidenav-sm").fadeOut();

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut(1000);
  $("html").removeClass("disable-scrolling");
  $("body").removeClass("disable-scrolling");
});
