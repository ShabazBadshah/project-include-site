var ROOT_IMG_DIR = "/assets/gallery/homepage/";
var TRANSITION_DELAY_MS = 2000;

var galleryItem;

var appGalleryImageSrc = [
  ROOT_IMG_DIR + "2.png",
  ROOT_IMG_DIR + "4.png",
  ROOT_IMG_DIR + "1.png",
  ROOT_IMG_DIR + "3.png",
];

$(document).ready(function () {
  galleryItem = $("img.intro-container--gallery-container--gallery");
  var currImageIdx = 0;
  var lengthAppGalleryImages = appGalleryImageSrc.length;

  setInterval(function () {
    galleryItem
      .fadeTo(TRANSITION_DELAY_MS, 0.1, function () {
        galleryItem.attr("src", appGalleryImageSrc[currImageIdx]);
        currImageIdx %= lengthAppGalleryImages;
        currImageIdx++;
      })
      .fadeTo(TRANSITION_DELAY_MS, 1);
  }, TRANSITION_DELAY_MS * 3);
});
