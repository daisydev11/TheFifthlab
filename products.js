// Header scroll effect
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scroll-boxshadow");
  } else {
    header.classList.remove("scroll-boxshadow");
  }
});

// Mobile menu functionality
const mobileMenuToggle = document.getElementById("mobile-menu");
const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
const overlayBg = document.getElementById("overlay-bg");

function toggleMobileMenu() {
  mobileMenuToggle.classList.toggle("active");
  mobileMenuOverlay.classList.toggle("active");
  overlayBg.classList.toggle("active");
  document.body.style.overflow = mobileMenuOverlay.classList.contains("active")
    ? "hidden"
    : "";
}

mobileMenuToggle.addEventListener("click", toggleMobileMenu);
overlayBg.addEventListener("click", toggleMobileMenu);

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenuOverlay.classList.contains("active")) {
      toggleMobileMenu();
    }
  });
});

// Close mobile menu on window resize if it's open
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && mobileMenuOverlay.classList.contains("active")) {
    toggleMobileMenu();
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});