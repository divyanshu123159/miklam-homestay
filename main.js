// 1. Load Navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('navbar-container');
    if (container) container.innerHTML = html;
  })
  .catch(err => console.log('Error loading navbar:', err));

// 2. Error-Proof WhatsApp (Index Page)
const indexBtn = document.getElementById("whatsappBtn");
if (indexBtn) {
  indexBtn.onclick = function() {
    const num = "917018300591"; 
    const message = `Check-in: ${document.getElementById("checkin").value}%0A` +
                    `Check-out: ${document.getElementById("checkout").value}%0A` +
                    `Guests: ${document.getElementById("guests").value}%0A` +
                    `Meal: ${document.getElementById("meal").value}`;
    window.open(`https://wa.me/${num}?text=Hi, booking request:%0A${message}`, "_blank");
  };
}

// 3. Error-Proof Gallery
const autoGallery = document.getElementById('auto-gallery');
if (autoGallery) {
  const totalImages = 40; 
  const imageFolder = 'images/'; 
  for (let i = 1; i <= totalImages; i++) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-type', 'image');
    const fileName = `${imageFolder}img (${i}).jpg`; 
    item.setAttribute('data-src', fileName);
    item.innerHTML = `<img src="${fileName}" alt="Spiti Homestay ${i}" loading="lazy">`;
    autoGallery.appendChild(item);
  }
}

// 4. Lightbox Interaction
document.addEventListener('click', (e) => {
  const item = e.target.closest('.gallery-item');
  if (!item) return;
  const overlay = document.getElementById('lightboxOverlay');
  const imgEl = document.getElementById('lightboxImage');
  if (overlay && imgEl) {
    imgEl.src = item.getAttribute('data-src');
    imgEl.style.display = 'block';
    overlay.style.display = 'flex';
  }
});
