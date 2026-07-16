// --- LOGIKA MENU HAMBURGER ---
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Fungsi untuk toggle menu (muncul/hilang saat diklik)
function toggleMenu() {
  menu.classList.toggle('translate-x-full');
}

// Event listener untuk klik pada tombol menu
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Mencegah klik tombol dianggap sebagai klik di luar menu
  toggleMenu();
});

// Menutup menu jika pengguna mengklik di area mana pun di luar menu
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.add('translate-x-full');
  }
});

// --- LOGIKA SLIDESHOW HOBI ---
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".slideshow-card");

  cards.forEach(card => {
    const images = card.querySelectorAll(".slideshow-images img");
    let index = 0;
    let interval;

    // Mulai slideshow saat kursor masuk ke card
    card.addEventListener("mouseenter", () => {
      interval = setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
      }, 1200);
    });

    // Hentikan slideshow saat kursor keluar dari card
    card.addEventListener("mouseleave", () => {
      clearInterval(interval);
      images.forEach(img => img.classList.remove("active"));
      images[0].classList.add("active"); // Kembali ke gambar pertama
    });
  });
});
