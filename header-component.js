const HEADER_COMPONENT_TRANSITION_MS = 250;

$(document).ready(function() {
  let isOpen = true;

  $("#hamburger-menu-icon").click(function() {
    isOpen = !isOpen;
    if (!isOpen) {
      $(".mobile-nav-bar > #social-nav-list-container").show(
        HEADER_COMPONENT_TRANSITION_MS
      );
    } else {
      $(".mobile-nav-bar > #social-nav-list-container").hide(
        HEADER_COMPONENT_TRANSITION_MS
      );
    }
    $(this).toggleClass("is-active");
  });
});
