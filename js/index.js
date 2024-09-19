// 9 Lada Bratsykhina, section catalogs on index.html: js code for Ebla Carousel
import { addPrevNextBtnsClickHandlers } from './EmblaCarousel.js';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadScript('https://unpkg.com/embla-carousel@latest/embla-carousel.umd.js');

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './css/index.section-catalogs.partial.css';
    document.head.appendChild(link);

    const OPTIONS = { loop: true, slidesToScroll: '1' }

    const emblaNode = document.querySelector('.embla');
    const viewportNode = emblaNode.querySelector('.embla__viewport');
    const prevBtnNode = emblaNode.querySelector('.embla__button--prev')
    const nextBtnNode = emblaNode.querySelector('.embla__button--next')

    const emblaApi = EmblaCarousel(viewportNode, OPTIONS)

    const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
      emblaApi,
      prevBtnNode,
      nextBtnNode
    )

    emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
  } catch (error) {
    console.error('Failed to load script:', error);
  }
});
