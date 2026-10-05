// Keep project disclosures accessible when visitors expand their details.
document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    detail.querySelector('summary').setAttribute('aria-expanded', String(detail.open));
  });
});

// Content stays visible if the browser lacks IntersectionObserver.
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll('.project, .expertise-grid article').forEach((element) => {
    revealObserver.observe(element);
  });

  // Highlight the navigation link for the section currently in view.
  const navigationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        document.querySelectorAll('.header nav a').forEach((link) => {
          const isCurrentSection = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('active', isCurrentSection);
        });
      });
    },
    { rootMargin: '-20% 0px -50% 0px' },
  );

  document.querySelectorAll('#work, #about, #contact').forEach((section) => {
    navigationObserver.observe(section);
  });
}
