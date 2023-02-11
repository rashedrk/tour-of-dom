const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightblue'
}
const places = document.getElementById('places-container');
places.classList.remove('large-text');
places.classList.add('text-center')