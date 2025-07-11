// ================================
// Feanyui Beauty — main.js
// ================================

window.addEventListener('load', function () {
  const gliderElement = document.querySelector('.glider');

  const glider = new Glider(gliderElement, {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  });

  // Auto-scroll every 4 seconds
  setInterval(() => {
    glider.scrollItem('next');
  }, 4000);

  // Click-to-enlarge images using BasicLightbox
  document.querySelectorAll('.glider img').forEach(image => {
    image.addEventListener('click', () => {
      basicLightbox
        .create(`<img src="${image.src}" style="max-width: 90vw; max-height: 90vh;">`)
        .show();
    });
  });
});
