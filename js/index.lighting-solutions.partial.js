const materials = document.querySelectorAll('.list-of-materials li');

materials.forEach(material => {
    material.addEventListener('mouseenter', () => {
        material.style.transform = 'scale(1.05)';
        material.style.transition = 'transform 0.3s ease-in-out';
        material.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    material.addEventListener('mouseleave', () => {
        material.style.transform = 'scale(1)';
        material.style.boxShadow = 'none';
    });
});