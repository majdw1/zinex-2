
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

// ========== MOBILE V9 PARALLAX & FAB BEHAVIOR ==========
(function() {
  const hero = document.querySelector(".hero-elite");
  const fab = document.querySelector(".whatsapp-fab");
  let lastScrollY = 0;

  function onScrollV9() {
    const w = window.innerWidth || document.documentElement.clientWidth;
    if (w > 768) return; // mobile only

    const y = window.scrollY || window.pageYOffset || 0;
    lastScrollY = y;

    if (hero) {
      const offset = Math.min(40, y * 0.12);
      hero.style.transform = `translateY(${offset * -1}px)`;
    }

    if (fab) {
      if (y > 220) {
        fab.style.opacity = "1";
        fab.style.transform = "translateY(0)";
      } else {
        fab.style.opacity = "0";
        fab.style.transform = "translateY(20px)";
      }
    }
  }

  window.addEventListener("scroll", onScrollV9, { passive: true });
  onScrollV9();
})();
