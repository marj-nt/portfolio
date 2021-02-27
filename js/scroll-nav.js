// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener("scroll", function () {
  if ($(window).width() < 768) {
    // detects new state and compares it with the new one
    if (document.body.getBoundingClientRect().top < scrollPos) {
      $(".sidenav-sm").fadeOut();
    } else {
      $(".sidenav-sm").fadeIn(200);
    }
    // saves the new position for iteration.
    scrollPos = document.body.getBoundingClientRect().top;
  }
});
