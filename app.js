
const logo = document.querySelector('.logo');
logo.addEventListener('mousemove', ()=> logo.style.transform='scale(1.1)');
logo.addEventListener('mouseleave', ()=> logo.style.transform='scale(1)');
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-elite");
  if (!hero) return;

  hero.style.opacity = 0;
  hero.style.transform = "translateY(20px)";

  setTimeout(() => {
    hero.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    hero.style.opacity = 1;
    hero.style.transform = "translateY(0)";
  }, 80);
});
