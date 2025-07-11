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
window.addEventListener("load", function () {
  const glider = new Glider(document.querySelector(".glider"), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  });

  // ===== Auto Scroll Logic =====
  let autoScrollInterval = setInterval(() => {
    glider.scrollItem(glider.slide + 1);
  }, 3500); // Change every 3.5 seconds

  // Optional: Pause on hover
  const gliderContainer = document.querySelector(".glider-contain");
  gliderContainer.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
  gliderContainer.addEventListener("mouseleave", () => {
    autoScrollInterval = setInterval(() => {
      glider.scrollItem(glider.slide + 1);
    }, 3500);
  });

  // ===== Lightbox for Images Only =====
  document.querySelectorAll(".glider img").forEach((img) => {
    img.addEventListener("click", () => {
      basicLightbox
        .create(`<img src="${img.src}" style="max-width: 90vw; max-height: 90vh;" />`)
        .show();
    });
  });
});
