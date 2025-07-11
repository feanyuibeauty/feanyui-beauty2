// =========================
// Optional: Hamburger toggle (if using mobile nav)
// =========================
document.addEventListener("DOMContentLoaded", function () {
  // const menuToggle = document.querySelector(".menu-toggle");
  // const navLinks = document.querySelector(".nav-links");

  // menuToggle.addEventListener("click", function () {
  //   navLinks.classList.toggle("active");
  // });
});

// =========================
// Glider + Auto Scroll + Lightbox
// =========================
window.addEventListener('load', function () {
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    scrollLock: true,
    duration: 1.2,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    rewind: true, // allows endless loop-like behavior
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

  // Autoscroll function
  setInterval(() => {
    const glider = document.querySelector('.glider').glider;
    if (glider) {
      glider.scrollItem('next');
    }
  }, 3500);

  // Lightbox for images
  document.querySelectorAll('.glider img').forEach(image => {
    image.addEventListener('click', () => {
      basicLightbox.create(`<img src="${image.src}" style="max-width: 90vw; max-height: 90vh;">`).show();
    });
  });
});
