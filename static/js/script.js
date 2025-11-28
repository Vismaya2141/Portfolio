// script.js - Clean & Organized

// Floating Particles
const container = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.width = p.style.height = Math.random() * 8 + 4 + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 20 + 's';
    p.style.animationDuration = Math.random() * 20 + 15 + 's';
    container.appendChild(p);
}

// Scroll Reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Open Certificate in Lightbox
function openCertificate(pdfUrl) {
    document.getElementById('cert-iframe').src = pdfUrl + '#view=FitH';
    document.getElementById('cert-lightbox').style.display = 'flex';
}

// Close with Escape key
document.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        document.getElementById('cert-lightbox').style.display = 'none';
    }
});
// === WORKING DANCE CAROUSEL ===
const danceImages = [
    'images/dance1.jpg',
    'images/dance2.jpg', 
    'images/dance3.jpg',
    'images/dance4.jpg'
];

let currentIndex = 0;

function updateDanceCarousel() {
    const leftPhoto = document.getElementById('leftPhoto');
    const centerPhoto = document.getElementById('centerPhoto');
    const rightPhoto = document.getElementById('rightPhoto');
    
    // Previous (left side)
    const prevIndex = (currentIndex - 1 + 4) % 4;
    leftPhoto.src = '{{ url_for("static", filename="") }}' + danceImages[prevIndex];
    
    // Current (center)
    centerPhoto.src = '{{ url_for("static", filename="") }}' + danceImages[currentIndex];
    
    // Next (right side)
    const nextIndex = (currentIndex + 1) % 4;
    rightPhoto.src = '{{ url_for("static", filename="") }}' + danceImages[nextIndex];
    
    currentIndex = nextIndex; // Move to next
}

// CLICK HANDLERS
function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + 4) % 4;
    updateDanceCarousel();
}

// Auto-rotate every 4 seconds
setInterval(updateDanceCarousel, 4000);

// Start immediately
updateDanceCarousel();
// 🔥 DANCE CAROUSEL - LOADS YOUR REAL IMAGES
document.addEventListener('DOMContentLoaded', function() {
    const danceImages = [
        'images/dance1.jpg',
        'images/dance2.jpg',
        'images/dance3.jpg',
        'images/dance4.jpg'
    ];
    
    let currentIndex = 0;
    
    function updateDanceCarousel() {
        const leftPhoto = document.getElementById('leftPhoto');
        const centerPhoto = document.getElementById('centerPhoto');
        const rightPhoto = document.getElementById('rightPhoto');
        
        if (!leftPhoto || !centerPhoto || !rightPhoto) return;
        
        // Previous image (left side)
        const prevIndex = (currentIndex - 1 + 4) % 4;
        leftPhoto.src = '/static/' + danceImages[prevIndex];
        
        // Current image (center)
        centerPhoto.src = '/static/' + danceImages[currentIndex];
        
        // Next image (right side)
        const nextIndex = (currentIndex + 1) % 4;
        rightPhoto.src = '/static/' + danceImages[nextIndex];
        
        currentIndex = nextIndex;
    }
    
    window.moveCarousel = function(direction) {
        currentIndex = (currentIndex + direction + 4) % 4;
        updateDanceCarousel();
    };
    
    // Auto rotate every 4 seconds
    setInterval(updateDanceCarousel, 4000);
    
    // Initial load
    updateDanceCarousel();
});