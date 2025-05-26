const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scroll-boxshadow");
  } else {
    header.classList.remove("scroll-boxshadow");
  }
});
