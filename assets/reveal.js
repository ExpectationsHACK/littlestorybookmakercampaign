document.querySelectorAll('[data-reveal]').forEach(el => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); } });
  }, { threshold: 0.15 });
  obs.observe(el);
});
