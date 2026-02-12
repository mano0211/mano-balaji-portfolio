// Set current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Navbar shrink on scroll
const nav = document.getElementById("nav");
const onScroll = () => {
  if (window.scrollY > 20) nav.classList.add("is-scrolled");
  else nav.classList.remove("is-scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
// Call once on load
onScroll();

// Reveal on scroll using IntersectionObserver
const revealEls = document.querySelectorAll(".reveal");
revealEls.forEach((el) => {
  const delay = el.getAttribute("data-delay");
  if (delay) el.style.setProperty("--d", `${delay}ms`);
});
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => io.observe(el));

// Smooth scrolling for anchor links (optional but nice)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    }
  });
});