// 9 Lada Bratsykhina, animated carousel for catalogs section on index.html
const response = await fetch('api/index.catalogs-lamps.json');
const lamps = await response.json();

renderProducts(lamps);

// Function to render the products to the DOM by creating HTML structure dynamically
function renderProducts(products) {
  let productsHtml = '';
  for (const product of products) {
    productsHtml += `
                <article class="catalogs__carousel-lamp">
                    <img src="${product.image}" alt="${product.imageAltText}"
                        class="catalogs__carousel-lamp-image" />
                    <h3 class="catalogs__carousel-lamp-title">${product.name}</h3>
                    <p class="catalogs__carousel-lamp-collection">${product.collection}</p>
                    <p class="catalogs__carousel-lamp-year">${product.collectionYear}</p>
                </article>
`;
  }
  const productsContainer = document.querySelector('.catalogs__carousel-container');
  productsContainer.innerHTML = productsHtml;
}

// Carousel Initialization
const carousel = document.querySelector('.catalogs__carousel');
const carouselInner = carousel.querySelector('.catalogs__carousel-container');
const prevButton = document.querySelector('.catalogs__carousel-button--prev');
const nextButton = document.querySelector('.catalogs__carousel-button--next');

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

// Setup the carousel with cloned slides
setupCarousel();

// Function to determine the number of slides per view based on window width
function getSlidesPerView() {
  const width = window.innerWidth;
  if (width >= 992) return 4;
  if (width >= 768) return 2;
  return 1;
}

// Function to setup carousel by cloning slides for infinite loop
function setupCarousel() {
  // Remove clones if they exist
  slides = slides.filter(slide => !slide.classList.contains('clone'));

  // Clone slides for infinite loop
  const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
  const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

  // Add clones to the carousel
  carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

  // Update slide list
  slides = Array.from(carouselInner.children);

  updateCarousel();
}

// Function to clone a slide and add 'clone' class
function cloneSlide(slide) {
  const clone = slide.cloneNode(true);
  clone.classList.add('clone');
  return clone;
}

// Function to transform the carousel inner container to show the correct set of slides 
// based on the current slide index
function updateCarousel() {
  const slideWidth = carouselInner.children[0].getBoundingClientRect().width;
  carouselInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listener for Prev Button
prevButton.addEventListener('click', () => {
  if (--currentIndex < 0) {
    // Loop back to the end clone
    currentIndex = slides.length - slidesPerView * 2 - 1;
    carouselInner.style.transition = 'none';
    updateCarousel();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        carouselInner.style.transition = '';
      });
    });
  }
  updateCarousel();
});

// Event listener for Next Button
nextButton.addEventListener('click', () => {
  carouselInner.style.transition = '';
  if (++currentIndex >= slides.length - slidesPerView) {
    // Loop back to the first clone
    currentIndex = slidesPerView;
    carouselInner.style.transition = 'none';
    updateCarousel();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        carouselInner.style.transition = '';
      });
    });
  }
  updateCarousel();
});

// Event listener for window resize to support responsiveness
window.addEventListener('resize', () => {
  slidesPerView = getSlidesPerView();
  setupCarousel();
});