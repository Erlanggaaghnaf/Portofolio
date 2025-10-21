const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

function showMenu() {
  menu.classList.remove('translate-x-full');
}

function hideMenu() {
  menu.classList.add('translate-x-full');
}

menuBtn.addEventListener('mousedown', (e) => {
  e.preventDefault();
  showMenu();
});

menuBtn.addEventListener('mouseup', (e) => {
  e.preventDefault();
  hideMenu();
});

menuBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  showMenu();
}, { passive: false });

menuBtn.addEventListener('touchend', (e) => {
  e.preventDefault();
  hideMenu();
}, { passive: false });

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".slideshow-card");

  cards.forEach(card => {
    const images = card.querySelectorAll(".slideshow-images img");
    let index = 0;
    let interval;

    card.addEventListener("mouseenter", () => {
      interval = setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
      }, 1200);
    });

    card.addEventListener("mouseleave", () => {
      clearInterval(interval);
      images.forEach(img => img.classList.remove("active"));
      images[0].classList.add("active");
    });
  });
});
