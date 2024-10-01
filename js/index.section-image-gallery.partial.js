export function reduceOpacity() {
    const img_gal = document.querySelector('.image-gallery');
    img_gal.addEventListener('mouseover', function() {
        const text_header = this.querySelector('.image-gallery-text-header')
        text.classList.add('active');
        const text_caption = this.querySelector('.image-gallery-text-caption')
        text.classList.add('active');
    });

    img_gal.addEventListener('mouseout', function() {
        const text_header = this.querySelector('.image-gallery-text-header')
        text.classList.remove('active');
        const text_caption = this.querySelector('.image-gallery-text-caption')
        text.classList.remove('active');
    });
};
