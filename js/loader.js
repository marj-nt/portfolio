$("html").addClass("disable-scrolling");
$("body").addClass("disable-scrolling");

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut(1000);
  $("html").removeClass("disable-scrolling");
  $("body").removeClass("disable-scrolling");
});
