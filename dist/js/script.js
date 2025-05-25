const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menuNavigation = document.querySelector(".menu");

// Mengaktifkan/menonaktifkan kelas 'is-active' pada menu hamburger dan 'menu-active' pada navigasi mobile
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("is-active");
  menuNavigation.classList.toggle("menu-active");
});

// Menambahkan/menghapus kelas 'nav-scroll-active' pada navbar saat scroll
window.addEventListener("scroll", () => {
  menuNav.classList.toggle("nav-scroll-active", window.scrollY > 0);

  // Tutup menu mobile saat menggulir (opsional, tapi baik untuk UX)
  menuBar.classList.remove("is-active");
  menuNavigation.classList.remove("menu-active");
});

// Fungsionalitas Preloader
const loader = document.querySelector(".loader");

function hideLoader() {
  loader.classList.add("loader-active");
}

// Sembunyikan preloader setelah 1.5 detik (dikurangi dari 3s untuk persepsi pemuatan yang lebih cepat)
window.onload = () => {
  setTimeout(hideLoader, 1500);
};

// Fungsi untuk membuat tombol "Hubungi Kami Sekarang!" di hero section scroll ke bagian kontak
document.querySelector(".header .title .btn").addEventListener("click", function() {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});