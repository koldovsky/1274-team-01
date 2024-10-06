function init() {
    import('./global.cursor-animation.js');
    import('./about-us-our-designers-gradient.js');
    import('./about-us-section-our-services.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});