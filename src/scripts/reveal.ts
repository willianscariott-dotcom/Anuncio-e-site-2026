// Progressive reveal: content is visible by default (no opacity:0 in CSS).
// When an element enters the viewport we only add a small rise animation.
// Respects prefers-reduced-motion and works without IntersectionObserver.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

if (reduceMotion.matches || !('IntersectionObserver' in window)) {
  // Keep everything static and visible.
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-animated');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
  );

  for (const item of items) {
    observer.observe(item);
  }
}
