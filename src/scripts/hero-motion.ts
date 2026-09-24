// Interactive parallax for the hero wireframe.
// Desktop (fine pointer + viewport >= 900px): layers follow the pointer while it
// is inside the hero (back 3px, mid 7px, front 12px) and drift back to center on leave.
// Mobile (coarse pointer or viewport < 900px): gentle vertical parallax driven by
// scroll while the hero crosses the viewport (max 12px, small layer difference).
// Static under prefers-reduced-motion. Animates transform only, via requestAnimationFrame.
function initHeroMotion(): void {
  const mqReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mqFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const hero = document.querySelector<HTMLElement>('.hero');
  const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-wf-layer]'));

  if (mqReduced.matches || !hero || layers.length === 0) return;

  const heroEl = hero;
  const BREAKPOINT = 900;
  const depths = layers.map((layer) => Number(layer.dataset.wfDepth ?? 0));
  const current = layers.map(() => ({ x: 0, y: 0 }));
  const round = (value: number): number => Math.round(value * 100) / 100;
  const clampUnit = (value: number): number => Math.max(-1, Math.min(1, value));

  let mode: 'desktop' | 'mobile' = isMobile() ? 'mobile' : 'desktop';
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
    scrollProgress = clampUnit(-rect.top / window.innerHeight);
  }

  function applyMode(): void {
    const next = isMobile() ? 'mobile' : 'desktop';
    if (next === mode) return;
    mode = next;
    if (mode === 'desktop') {
      heroEl.addEventListener('pointermove', onPointerMove);
      heroEl.addEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('scroll', onScroll);
      scrollProgress = 0;
    } else {
      heroEl.removeEventListener('pointermove', onPointerMove);
      heroEl.removeEventListener('pointerleave', onPointerLeave);
      window.addEventListener('scroll', onScroll, { passive: true });
      pointerX = 0;
      pointerY = 0;
      onScroll();
    }
  }

  function tick(): void {
    requestAnimationFrame(tick);
    const desktop = mode === 'desktop';
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const depth = depths[i] ?? 0;
      const position = current[i] ?? { x: 0, y: 0 };
      const targetX = desktop ? pointerX * depth : 0;
      const targetY = desktop ? pointerY * depth : scrollProgress * depth;
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
