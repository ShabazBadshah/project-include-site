var HEADER_COMPONENT_TRANSITION_MS = 250;
var hamburgerMenuIcon = $("#hamburger-menu-icon");
var mobileNav = $(".mobile-nav-bar > #social-nav-list-container");
var isOpen = false;
mobileNav.hide();

$(document).ready(function () {
  // console.log(isOpen);
  hamburgerMenuIcon.click(function () {
    isOpen
      ? mobileNav.hide(HEADER_COMPONENT_TRANSITION_MS)
      : mobileNav.show(HEADER_COMPONENT_TRANSITION_MS);

    hamburgerMenuIcon.toggleClass("is-active");
    isOpen = !isOpen;
  });
});
