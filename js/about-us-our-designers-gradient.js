function addGradientAnimation(element, colors) {
    element.style.backgroundImage = `linear-gradient(90deg, ${colors.join(", ")})`;
    element.classList.add('animated-gradient');
}

const designerstitle = document.querySelector('.our-designers__title');
addGradientAnimation(designerstitle, ['#d41822', '#9a7253', '#a33f25']);

const designersNames = document.querySelectorAll('.our-designers__name');
designersNames.forEach((designerName) => {
    addGradientAnimation(designerName, ['#ff7e5f', '#ffd700', '#ff7e5f']);
});
