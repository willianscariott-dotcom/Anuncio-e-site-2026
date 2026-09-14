const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

document.documentElement.classList.add('js-reveal');

if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
  for (const item of items) {
    item.classList.add('is-revealed');
  }
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -48px 0px' },
  );

  for (const item of items) {
    observer.observe(item);
  }
}
