// Parallax for the hero.
// Desktop (fine pointer + viewport >= 900px): the wireframe layers follow the pointer
// while it is inside the hero (back 3px, mid 7px, front 12px) and drift back to center on leave.
// Mobile (coarse pointer or viewport < 900px): the wireframe is hidden via CSS; only the
// technical grid background (.hero::before) moves gently with scroll (max 56px) while the
// hero crosses the viewport.
// Static under prefers-reduced-motion (JS returns and CSS forces transforms to none).
function initHeroMotion(): void {
  const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mqFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const hero = document.querySelector<HTMLElement>('.hero');

  if (mqReduced.matches || !hero) return;

  const heroEl = hero;
  const BREAKPOINT = 900;
  const BG_MAX = 56;
  const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-wf-layer]'));
  const depths = layers.map((layer) => Number(layer.dataset.wfDepth ?? 0));
  const current = layers.map(() => ({ x: 0, y: 0 }));
  const round = (value: number): number => Math.round(value * 100) / 100;
  const clampUnit = (value: number): number => Math.max(-1, Math.min(1, value));
  const clamp01 = (value: number): number => Math.max(0, Math.min(1, value));

  // Start as null so the first applyMode call always binds the listeners for the current mode.
  let mode: 'desktop' | 'mobile' | null = null;
  let pointerX = 0;
  let pointerY = 0;
  let scrollProgress = 0;

  function isMobile(): boolean {
    return !mqFinePointer.matches || window.innerWidth < BREAKPOINT;
  }

  function onPointerMove(event: PointerEvent): void {
    const rect = heroEl.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    pointerX = clampUnit(((event.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY = clampUnit(((event.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function onPointerLeave(): void {
    pointerX = 0;
    pointerY = 0;
  }

  function onScroll(): void {
    const rect = heroEl.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    scrollProgress = clamp01(-rect.top / window.innerHeight);
    heroEl.style.setProperty('--hero-bg-y', `${round(scrollProgress * BG_MAX)}px`);
  }

  function applyMode(): void {
    const next = isMobile() ? 'mobile' : 'desktop';
    if (next === mode) return;

    if (mode === 'desktop') {
      heroEl.removeEventListener('pointermove', onPointerMove);
      heroEl.removeEventListener('pointerleave', onPointerLeave);
    } else if (mode === 'mobile') {
      window.removeEventListener('scroll', onScroll);
    }

    mode = next;

    if (mode === 'desktop') {
      heroEl.addEventListener('pointermove', onPointerMove);
      heroEl.addEventListener('pointerleave', onPointerLeave);
      pointerX = 0;
      pointerY = 0;
      scrollProgress = 0;
      heroEl.style.removeProperty('--hero-bg-y');
    } else {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  function tick(): void {
    requestAnimationFrame(tick);
    if (mode !== 'desktop') return;
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const depth = depths[i] ?? 0;
      const position = current[i] ?? { x: 0, y: 0 };
      const targetX = pointerX * depth;
      const targetY = pointerY * depth;
      position.x += (targetX - position.x) * 0.12;
      position.y += (targetY - position.y) * 0.12;
      if (Math.abs(position.x) < 0.01) position.x = 0;
      if (Math.abs(position.y) < 0.01) position.y = 0;
      const transform = `translate3d(${round(position.x)}px, ${round(position.y)}px, 0)`;
      if (layer.style.transform !== transform) {
        layer.style.transform = transform;
      }
    }
  }

  window.addEventListener('resize', applyMode, { passive: true });
  applyMode();
  requestAnimationFrame(tick);
}

initHeroMotion();
