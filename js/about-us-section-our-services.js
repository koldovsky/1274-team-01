const root = document.documentElement;
const accentColor = getComputedStyle(root).getPropertyValue('--accent-text-color');

const accordionButtons = document.querySelectorAll('.our-services__accordion-item-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        accordionButtons.forEach(button => button.style.color = '');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            button.style.color = accentColor;
        }
    })
});

const historyItem = document.querySelector('.our-services__company-history-item');



/*
// Select all service cards
const serviceCards = document.querySelectorAll('.service-card');

// Add hover effect for each card
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
*/