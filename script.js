const header = document.querySelector("header");
const mobileMenu = document.querySelector("#mobile-menu");
const navLinks = document.querySelector("#nav-links");

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scroll-boxshadow");
  } else {
    header.classList.remove("scroll-boxshadow");
  }
});

// Product tabs functionality
function showTab(tabName) {
  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });

  // Remove active class from all buttons
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // Show selected tab content
  document.getElementById(tabName).classList.add("active");

  // Add active class to clicked button
  event.target.classList.add("active");
}

// Add click functionality to insight cards
document.addEventListener("DOMContentLoaded", function () {
  // Insight cards functionality
  document.querySelectorAll(".insight-card").forEach((card) => {
    card.addEventListener("click", function () {
      const title = this.querySelector(".card-title").textContent;
      console.log("Clicked on:", title);
      // Add your navigation logic here
    });
  });

  // Add hover effects to insight cards
  document.querySelectorAll(".insight-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

// Mobile menu toggle functionality
if (mobileMenu && navLinks) {
  mobileMenu.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking on nav links
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileMenu.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
      mobileMenu.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
}

// Handle window resize to close mobile menu on larger screens
window.addEventListener("resize", () => {
  if (window.innerWidth > 968) {
    if (mobileMenu && navLinks) {
      mobileMenu.classList.remove("active");
      navLinks.classList.remove("active");
    }
  }
});
