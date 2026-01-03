// 1. Load Navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('navbar-container');
    if (container) container.innerHTML = html;
  })
  .catch(err => console.log('Error loading navbar:', err));

// This code strictly looks for img1.jpg, img2.jpg, etc.
// This code looks STRICTLY for "images/img1.jpg"
const autoGallery = document.getElementById('auto-gallery');

if (autoGallery) {
  const totalImages = 40; 
  const imageFolder = 'images/'; 

  for (let i = 1; i <= totalImages; i++) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.setAttribute('data-type', 'image');
    
    // This matches the "img (1).jpg" format shown in your folder
    const fileName = `${imageFolder}img (${i}).jpg`; 
    
    item.setAttribute('data-src', fileName);
    item.innerHTML = `
      <img src="${fileName}" 
           alt="Spiti Homestay ${i}" 
           loading="lazy"
           onerror="console.error('Browser cannot find: ' + this.src)">`;
    autoGallery.appendChild(item);
  }
}

// 3. Lightbox Interaction
document.addEventListener('click', (e) => {
  const item = e.target.closest('.gallery-item');
  if (!item) return;

  const overlay = document.getElementById('lightboxOverlay');
  const imgEl = document.getElementById('lightboxImage');
  const src = item.getAttribute('data-src');

  if (overlay && imgEl) {
    imgEl.src = src;
    imgEl.style.display = 'block';
    overlay.style.display = 'flex';
  }
});

// Close Lightbox logic
const overlay = document.getElementById('lightboxOverlay');
if (overlay) {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.id === 'lightboxClose') {
      overlay.style.display = 'none';
    }
  });
}
