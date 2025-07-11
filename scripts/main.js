<!-- Glider and Lightbox Scripts -->
<script src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5/dist/basicLightbox.min.js"></script>

<script>
  // Glider initialization and Lightbox
  window.addEventListener('load', function () {
    new Glider(document.querySelector('.glider'), {
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

    // Lightbox for image clicks
    document.querySelectorAll('.glider img').forEach(image => {
      image.addEventListener('click', () => {
        basicLightbox.create(`<img src="${image.src}" style="max-width: 90vw; max-height: 90vh;">`).show();
      });
    });
  });
</script>
