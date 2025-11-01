document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animClass = entry.target.getAttribute("data-anim");
        entry.target.classList.add(animClass);
        observer.unobserve(entry.target); // deja de observar una vez animado
      }
    });
  }, { threshold: 0.2 });

  sections.forEach((section) => observer.observe(section));
});
