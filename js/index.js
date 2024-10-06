function init() {
  import("./index.catalogs-carousel.js");
  import("./index.section-image-gallery.partial.js");
  import("./global.cursor-animation.js");
  import("./index.services.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
