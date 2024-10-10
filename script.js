
// Make the carousel draggable
const carousel = document.getElementById('galleryCarousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Stop the fn from running
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // The higher the multiplier, the faster the scroll
    carousel.scrollLeft = scrollLeft - walk;
});

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

// Reveal efek pada elemen tertentu
sr.reveal('.image-container', { delay: 200, origin: 'top' });
sr.reveal('.hero-section ', { delay: 300, origin: 'top' });
sr.reveal('.cards-section, .product, .cta-content, .contact', { delay: 200, origin: 'top' });



// peta 

var map = L.map('map').setView([-6.6752, 106.8711], 15); // Koordinat Desa Leuwimalang

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([-6.6752, 106.8711]).addTo(map)
    .bindPopup('Lokasi Proyek di Desa Leuwimalang.')
    .openPopup();

