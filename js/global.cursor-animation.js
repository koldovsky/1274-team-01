document.addEventListener('mousemove', (e) => {
    const shadow = document.createElement('div');
    shadow.classList.add('cursor-shadow');
    shadow.style.left = `${e.pageX}px`;
    shadow.style.top = `${e.pageY}px`;
    document.body.appendChild(shadow);

    setTimeout(() => {
        shadow.remove();
    }, 500);
});