// 9 Lada Bratsykhina, carousel without animation for catalogs section on index.html
const lamps = [
  {
    id: "1",
    image: "img/catalogs/aurora-lamp.webp",
    imageAltText: "Aurora Lamp from the Classic Collection",
    name: "Aurora Lamp",
    collection: "CLASSIC COLLECTION",
    collectionYear: "2023",
  },
  {
    id: "2",
    image: "img/catalogs/luminous-haven.webp",
    imageAltText: "Luminous Haven Lamp from the Wooden Life Collection",
    name: "Luminous Haven",
    collection: "WOODEN LIFE COLLECTION",
    collectionYear: "2024",
  },
  {
    id: "3",
    image: "img/catalogs/wooden-blocks.webp",
    imageAltText: "Wooden Blocks Lamp from the Wooden Life Collection",
    name: "Wooden Blocks",
    collection: "WOODEN LIFE COLLECTION",
    collectionYear: "2024",
  },
  {
    id: "4",
    image: "img/catalogs/cake-in-the-ocean.webp",
    imageAltText: "Cake in the Ocean Lamp from the Ceiling Fixtures Collection",
    name: "Cake in the Ocean",
    collection: "CEILING FIXTURES",
    collectionYear: "2022",
  },
  {
    id: "5",
    image: "img/catalogs/arretia-lamp.webp",
    imageAltText: "Arretia Bedside Lamp from the Bedside Lamps Collection",
    name: "Arretia Lamp",
    collection: "BEDSIDE LAMPS",
    collectionYear: "2022",
  },
];

function productHTML(product) {
  return `
                <article class="catalogs__carousel-lamp">
                    <img src="${product.image}" alt="${product.imageAltText}"
                        class="catalogs__carousel-lamp-image" />
                    <h3 class="catalogs__carousel-lamp-title">${product.name}</h3>
                    <p class="catalogs__carousel-lamp-collection">${product.collection}</p>
                    <p class="catalogs__carousel-lamp-year">${product.collectionYear}</p>
                </article>
`;
}

const slides = [
  productHTML(lamps[0]),
  productHTML(lamps[1]),
  productHTML(lamps[2]),
  productHTML(lamps[3]),
  productHTML(lamps[4]),
];

let currentIndex = 0;

function renderSlides() {
  const slidesContainer = document.querySelector(".catalogs__carousel-container");
  slidesContainer.innerHTML = slides[currentIndex];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIndex =
      currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
    slidesContainer.innerHTML += slides[secondSlideIndex];
    if (window.matchMedia("(min-width: 992px)").matches) {
      const thirdSlideIndex =
        secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
      slidesContainer.innerHTML += slides[thirdSlideIndex];
      const forthSlideIndex =
        thirdSlideIndex + 1 >= slides.length ? 0 : thirdSlideIndex + 1;
      slidesContainer.innerHTML += slides[forthSlideIndex];
    }
  }
}

function nextSlide() {
  currentIndex = currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
  renderSlides();
}

function prevSlide() {
  currentIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
  renderSlides();
}

renderSlides();

const buttonPrev = document.querySelector(".catalogs__carousel-button--prev");
const buttonNext = document.querySelector(".catalogs__carousel-button--next");

buttonPrev.addEventListener("click", prevSlide);
buttonNext.addEventListener("click", nextSlide);

window.addEventListener('resize', renderSlides);