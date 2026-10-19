/* ============================================
          JUNIORS - CONTACTO
   ============================================ */

(function () {
  const boton = document.querySelector('.contacto__boton');
  if (!boton) return;

  // Destino del CTA: se define en data-destino del HTML
  const destino = boton.dataset.destino;

  if (destino) {
    boton.href = destino;
    boton.removeAttribute('aria-disabled');
    return;
  }

  // Sin destino todavía: el botón no navega
  boton.addEventListener('click', (evento) => evento.preventDefault());
})();
