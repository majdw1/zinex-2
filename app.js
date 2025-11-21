
// simple scroll-in animations
document.addEventListener("DOMContentLoaded", () => {
  const animated = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.16 }
  );

  animated.forEach((el) => observer.observe(el));
});

// sticky header shrink effect
document.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  if (window.scrollY > 40) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const mobileBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector("nav");

if (mobileBtn){
 mobileBtn.addEventListener("click", () => {
   navMenu.classList.toggle("active");
   mobileBtn.classList.toggle("open");
 });
}
