/* ============================================
          JUNIORS - HERO
   ============================================ */

(function () {
  const cta = document.querySelector('.hero__cta');
  if (!cta) return;

  // Destino del CTA: se define en data-destino del HTML
  const destino = cta.dataset.destino;

  if (destino) {
    cta.href = destino;
    cta.removeAttribute('aria-disabled');
    return;
  }

  // Sin destino todavía: el botón no navega
  cta.addEventListener('click', (evento) => evento.preventDefault());
})();
