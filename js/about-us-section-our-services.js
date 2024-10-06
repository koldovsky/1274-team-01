const root = document.documentElement;
const accentColor = getComputedStyle(root).getPropertyValue(
  "--accent-text-color"
);

const accordionButtons = document.querySelectorAll(
  ".our-services__accordion-item-button"
);

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    accordionButtons.forEach((button) => (button.style.color = ""));
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      button.style.color = accentColor;
    }
  });
});

const historyItems = document.querySelectorAll(
  ".our-services__company-history-item"
);
let i = 0;
const intervalDuration = 1000; // Duration for each animation (1 second in this case)

function animateItems() {
  historyItems.forEach((item) => {
    item.style.transform = "scale(1)";
  });
  const currentItem = historyItems[i % historyItems.length];
  currentItem.style.transform = "scale(1.05)";
  currentItem.style.transition = "transform 0.5s ease";
  i++;
}

// Set interval to run the animation repeatedly
setInterval(animateItems, intervalDuration);
