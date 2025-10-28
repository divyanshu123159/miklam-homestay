
  // load navbar.html and inject it into the div
  fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar-container').innerHTML = html;
    })
    .catch(err => {
      console.log('Error loading navbar:', err);
    });

// WhatsApp integration
  const whatsappNumber = "+919876543210"; // TODO: replace with your real number

  document.getElementById("whatsappBtn").addEventListener("click", function () {
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;
    const meal = document.getElementById("meal").value;

    const message =
      `Hi, I want to book at Miklam Homestay.%0A` +
      `Check-in: ${checkin}%0A` +
      `Check-out: ${checkout}%0A` +
      `Guests: ${guests}%0A` +
      `Meal plan: ${meal}%0A` +
      `Room type: Standard Mountain Room%0A` +
      `Please confirm availability.`;

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  });
  
  const overlay = document.getElementById('lightboxOverlay');
  const closeBtn = document.getElementById('lightboxClose');
  const imgEl = document.getElementById('lightboxImage');
  const vidEl = document.getElementById('lightboxVideo');

  // Find all gallery items
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const type = item.getAttribute('data-type');
      const src = item.getAttribute('data-src');

      // reset
      imgEl.style.display = 'none';
      vidEl.style.display = 'none';
      vidEl.pause();

      if (type === 'image') {
        imgEl.src = src;
        imgEl.style.display = 'block';
      } else if (type === 'video') {
        vidEl.src = src;
        vidEl.style.display = 'block';
        vidEl.play();
      }

      overlay.style.display = 'flex';
    });
  });

  // close when clicking X
  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    vidEl.pause();
  });

  // close when clicking outside content
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
      vidEl.pause();
    }
  });

