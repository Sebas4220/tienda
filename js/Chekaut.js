/* ===========================
   CHECKOUT: JS (pegar después de tus funciones existentes)
   =========================== */

/* Abre el panel de checkout */
function abrirCheckout() {
  const panel = document.getElementById('checkout-panel');
  if (!panel) return;
  panel.style.display = 'flex';
  panel.setAttribute('aria-hidden', 'false');
  document.getElementById('checkout-currency-label').textContent = monedaActual || 'USD';
  renderCheckout();
  // opcional: focus en primer campo
  const name = document.getElementById('ship-name');
  if (name) name.focus();
}

/* Cierra el panel de checkout */
function cerrarCheckout() {
  const panel = document.getElementById('checkout-panel');
  if (!panel) return;
  panel.style.display = 'none';
  panel.setAttribute('aria-hidden', 'true');
}

/* Renderiza items y totales en el checkout */
function renderCheckout() {
  const container = document.getElementById('checkout-items');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const totalEl = document.getElementById('checkout-total');
  if (!container || !subtotalEl || !totalEl) return;

  if (!Array.isArray(carrito) || carrito.length === 0) {
    container.innerHTML = '<p>No hay productos en el carrito.</p>';
    subtotalEl.textContent = convertirPrecio(0);
    totalEl.textContent = convertirPrecio(0);
    return;
  }

  let totalUSD = 0;
  let html = '';

  carrito.forEach((p) => {
    const precioUSD = safeNumber(p.precio, 0);
    const ofertaUSD = (p.oferta !== undefined && p.oferta !== "") ? safeNumber(p.oferta, null) : null;
    const precioFinalUSD = ofertaUSD !== null ? ofertaUSD : precioUSD;
    const cantidad = safeNumber(p.cantidad, 1);
    const subtotalUSD = precioFinalUSD * cantidad;
    totalUSD += subtotalUSD;

    html += `
      <div class="item">
        <img src="${p.imagen || './img/Productos/default.jpg'}" alt="${p.nombre || ''}">
        <div style="flex:1">
          <div class="d-flex justify-content-between">
            <strong>${p.nombre}</strong>
            <small class="muted">${cantidad} x ${convertirPrecio(precioFinalUSD)}</small>
          </div>
          <div class="d-flex justify-content-between">
            <small class="muted">${p.categoria || ''}</small>
            <strong>${convertirPrecio(subtotalUSD)}</strong>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  subtotalEl.textContent = convertirPrecio(totalUSD);
  const envioUSD = 0;
  totalEl.textContent = convertirPrecio(totalUSD + envioUSD);
}

/* Inicializa el formulario del checkout */
function initCheckoutForm() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('ship-name').value.trim();
    const phone = document.getElementById('ship-phone').value.trim();
    const address = document.getElementById('ship-address').value.trim();
    const city = document.getElementById('ship-city').value.trim();
    const payMethod = document.querySelector('input[name="pay-method"]:checked')?.value || 'cash';

    if (!name || !phone || !address || !city) {
      alert('Por favor completa todos los datos de envío.');
      return;
    }

    if (!Array.isArray(carrito) || carrito.length === 0) {
      alert('Tu carrito está vacío.');
      return;
    }

    const totalUSD = carrito.reduce((acc, p) => {
      const precio = safeNumber(p.oferta ?? p.precio, 0);
      return acc + precio * safeNumber(p.cantidad, 1);
    }, 0);

    const pedido = {
      id: 'PED-' + Date.now(),
      fecha: new Date().toISOString(),
      cliente: { name, phone, address, city },
      metodoPago: payMethod,
      items: carrito.map(p => ({ nombre: p.nombre, cantidad: p.cantidad, precioUSD: p.precio })),
      totalUSD
    };

    // Simulación: mostrar confirmación y vaciar carrito
    alert(`Pedido ${pedido.id} creado.\nTotal: ${convertirPrecio(pedido.totalUSD)}\nMétodo: ${payMethod}`);

    if (typeof vaciarCarrito === 'function') vaciarCarrito();
    cerrarCheckout();

    // Si tienes backend, aquí puedes enviar `pedido` con fetch()
    // fetch('/api/pedidos', { method: 'POST', body: JSON.stringify(pedido), headers: {'Content-Type':'application/json'} })
  });
}

/* Enlaza botones y eventos relacionados con el checkout */
document.addEventListener('DOMContentLoaded', () => {
  // Cerrar con botón
  const closeBtn = document.getElementById('checkout-close');
  if (closeBtn) closeBtn.addEventListener('click', cerrarCheckout);

  // Cerrar al hacer click en overlay
  const overlay = document.getElementById('checkout-overlay');
  if (overlay) overlay.addEventListener('click', cerrarCheckout);

  // Enlazar botones "Finalizar compra" (popup carrito)
  document.querySelectorAll('.btn-finalizar-compra').forEach(btn => {
    btn.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (typeof cerrarPopupCarrito === 'function') cerrarPopupCarrito();
      abrirCheckout();
    });
  });

  initCheckoutForm();
});



