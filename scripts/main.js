// =========================
// Hamburger toggle (for mobile nav)
// =========================
/*document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});

// =========================
// Glider + Auto Scroll + Lightbox
// =========================
window.addEventListener('load', function () {
  const gliderElement = document.querySelector('.glider');

  if (gliderElement) {
    const glider = new Glider(gliderElement, {
      slidesToShow: 5,
      slidesToScroll: 1,
      draggable: true,
      scrollLock: true,
      duration: 1.2,
      rewind: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 4 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 3 }
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 2 }
        }
      ]
    });

    // Auto-scroll every 3.5 seconds
    setInterval(() => {
      if (gliderElement.glider) {
        gliderElement.glider.scrollItem('next');
      }
    }, 3500);

    // Lightbox for images and videos
    document.querySelectorAll('.glider img, .glider video').forEach(media => {
      media.addEventListener('click', () => {
        if (media.tagName.toLowerCase() === 'img') {
          basicLightbox.create(`<img src="${media.src}" style="max-width: 90vw; max-height: 90vh;">`).show();
        } else if (media.tagName.toLowerCase() === 'video') {
          basicLightbox.create(`
            <video controls autoplay style="max-width: 90vw; max-height: 90vh;">
              <source src="${media.src}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          `).show();
        }
      });
    });
  }
});*/
