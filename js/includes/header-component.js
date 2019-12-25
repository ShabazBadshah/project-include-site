const HEADER_COMPONENT_TRANSITION_MS = 250;
const hamburgerMenuIcon = $("#hamburger-menu-icon");
const mobileNav = $(".mobile-nav-bar > #social-nav-list-container");

$(document).ready(function() {
  let isOpen = true;

  hamburgerMenuIcon.click(function() {
    isOpen = !isOpen;
    !isOpen
      ? mobileNav.show(HEADER_COMPONENT_TRANSITION_MS)
      : mobileNav.hide(HEADER_COMPONENT_TRANSITION_MS);

    hamburgerMenuIcon.toggleClass("is-active");
  });
});
