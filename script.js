// ============ NAV SCROLL EFFECT ============
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// ============ HAMBURGER MENU ============
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// ============ PAGE SWITCHING ============
function showPage(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");

  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  const navEl = document.getElementById("nav-" + page);
  if (navEl) navEl.classList.add("active");

  navLinks.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(triggerReveal, 100);
}

// ============ HERO BG ZOOM EFFECT ============
const heroBg = document.getElementById("heroBg");
if (heroBg) {
  setTimeout(() => heroBg.classList.add("loaded"), 100);
}

// ============ SCROLL REVEAL ============
function triggerReveal() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = (i % 4) * 0.1 + "s";
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  reveals.forEach((el) => {
    el.classList.remove("visible");
    observer.observe(el);
  });
}
// Run reveal on initial load
triggerReveal();
