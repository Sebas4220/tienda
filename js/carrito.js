// carrito.js (actualizado mínimamente para integrarse con productos.js)
// Cambios mínimos:
// - usar window.carrito como estado compartido (productos.js lo lee)
// - guardarCarrito emite 'carrito:changed' tras persistir
// - las mutaciones llaman a guardarCarrito() para notificar en tiempo real
// - añadir listener 'storage' para sincronizar entre pestañas
// - abrir/cerrar popup robustos con overlay y listener global de cierre
// - cuando un producto se elimina (o su cantidad baja a 0), intentar recargar la página
//   llamando a window.recargarPaginaAlEliminar() si existe, o usando location.reload() como fallback
// El resto del comportamiento se mantiene igual.

window.carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Helpers mínimos (no sobrescriben si ya existen)
if (typeof safeNumber !== "function") {
  window.safeNumber = function (v, fallback = 0) {
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : fallback;
  };
}
if (typeof convertirPrecio !== "function") {
  window.convertirPrecio = function (n) {
    return '$' + Number(n || 0).toFixed(2);
  };
}

function guardarCarrito() {
  try {
    localStorage.setItem("carrito", JSON.stringify(window.carrito));
  } catch (e) {
    console.warn("No se pudo guardar carrito en localStorage:", e);
  }
  // Notificar a productos.js y otros listeners que el carrito cambió
  try {
    document.dispatchEvent(new CustomEvent('carrito:changed', { detail: { carrito: window.carrito } }));
  } catch (e) { /* ignore */ }
}

/* Abrir / cerrar popup carrito (robustos: crean/usan overlay y manejan aria-hidden) */
function abrirPopupCarrito() {
  const popup = document.getElementById("popup-carrito");
  if (!popup) return;

  // Crear overlay si no existe
  let overlay = document.getElementById("popup-carrito-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "popup-carrito-overlay";
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
  }

  overlay.style.display = "block";
  overlay.style.zIndex = "1055";
  overlay.setAttribute("aria-hidden", "false");

  popup.style.display = "block";
  popup.style.zIndex = "1060";
  popup.setAttribute("aria-hidden", "false");
}

function cerrarPopupCarrito() {
  const popup = document.getElementById("popup-carrito");
  const overlay = document.getElementById("popup-carrito-overlay");

  if (popup) {
    popup.style.display = "none";
    popup.setAttribute("aria-hidden", "true");
  }
  if (overlay) {
    overlay.style.display = "none";
    overlay.setAttribute("aria-hidden", "true");
  }
}

/* Listener global para cerrar popup (overlay o botones .btn-close dentro del popup) */
document.addEventListener("click", (e) => {
  // Cerrar si se hace click en el overlay
  if (e.target && e.target.id === "popup-carrito-overlay") {
    cerrarPopupCarrito();
    return;
  }
  // Cerrar si se hace click en un botón con clase .btn-close dentro del popup
  const closeBtn = e.target.closest && e.target.closest("#popup-carrito .btn-close");
  if (closeBtn) {
    e.preventDefault();
    cerrarPopupCarrito();
  }
});

/* Renderizar contenido del carrito en el popup */
function actualizarCarrito() {
  const carritoContenido = document.getElementById("carrito-contenido");
  const carritoTotal = document.getElementById("carrito-total");

  if (!carritoContenido || !carritoTotal) return; // evita errores si faltan elementos

  if (!Array.isArray(window.carrito) || window.carrito.length === 0) {
    carritoContenido.innerHTML = "<p>No hay productos en el carrito.</p>";
    carritoTotal.textContent = convertirPrecio(0);
    return;
  }

  let totalUSD = 0;
  let html = "<div class='row g-2'>";

  window.carrito.forEach((p, i) => {
    // Normalizar precios a número (USD)
    const precioUSD = safeNumber(p.precio, 0);
    const ofertaUSD = p.oferta !== undefined && p.oferta !== "" ? safeNumber(p.oferta, null) : null;
    const precioFinalUSD = ofertaUSD !== null ? ofertaUSD : precioUSD;
    const cantidad = safeNumber(p.cantidad, 1);
    const subtotalUSD = precioFinalUSD * cantidad;
    totalUSD += subtotalUSD;

    html += `
      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-body d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <img src="${p.imagen || './img/Productos/default.jpg'}" 
                   alt="${p.nombre || ''}" 
                   class="rounded me-3" 
                   style="width:50px; height:50px; object-fit:cover;">
              <div>
                <h6 class="mb-1">${p.nombre || 'Producto'}</h6>
                ${ofertaUSD !== null 
                  ? `<small><del >${convertirPrecio(precioUSD)}</del> <span class="ofertaCarrito fw-bold">${convertirPrecio(ofertaUSD)}</span></small>` 
                  : `<small class="fw-bold">${convertirPrecio(precioUSD)}</small>`}
                <div class="mt-1">
                  <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${i}, -1)"> - </button>
                  <span class="mx-2 fw-bold">${cantidad}</span>
                  <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${i}, 1)"> + </button>
                </div>
                <small class="text-muted">Subtotal: ${convertirPrecio(subtotalUSD)}</small>
              </div>
            </div>
            <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${i})" aria-label="Eliminar ${p.nombre}">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  html += "</div>";
  carritoContenido.innerHTML = html;
  carritoTotal.textContent = convertirPrecio(totalUSD);
}

/* Utilidad local: intenta recargar la página usando la función expuesta por productos.js si existe,
   o con location.reload() como fallback. delay en ms (por defecto 120). */
function _recargarPaginaSiCorresponde(delay = 120) {
  setTimeout(() => {
    try {
      if (typeof window.recargarPaginaAlEliminar === "function") {
        window.recargarPaginaAlEliminar(delay);
      } else {
        location.reload();
      }
    } catch (e) {
      try { location.reload(); } catch (err) { /* ignore */ }
    }
  }, Number(delay) || 120);
}

function cambiarCantidad(index, delta) {
  if (!Array.isArray(window.carrito) || !window.carrito[index]) return;

  // detectar si la operación eliminará el producto
  const willRemove = ((window.carrito[index].cantidad || 1) + delta) <= 0;
  const removedName = willRemove ? window.carrito[index].nombre : null;

  window.carrito[index].cantidad = (window.carrito[index].cantidad || 1) + delta;
  if (window.carrito[index].cantidad <= 0) {
    window.carrito.splice(index, 1);
  }

  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = window.carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);

  // persistir y notificar
  guardarCarrito();
  actualizarCarrito();

  // si se eliminó el producto, recargar la página para que productos.js pueda mostrar el botón "Agregar"
  if (willRemove && removedName) {
    _recargarPaginaSiCorresponde();
  }
}

function vaciarCarrito() {
  window.carrito = [];
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = 0;
  guardarCarrito();
  actualizarCarrito();
  // recargar para asegurar consistencia en productos.js
  _recargarPaginaSiCorresponde();
}

function agregarAlCarrito(index, btn) {
  const producto = productos[index];
  const existente = window.carrito.find(p => p.nombre === producto.nombre);

  if (existente) {
    existente.cantidad = (existente.cantidad || 1) + 1;
  } else {
    window.carrito.push({ ...producto, cantidad: 1 });
  }

  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = window.carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);

  const mensaje = btn ? btn.nextElementSibling : null;
  if (mensaje && mensaje.classList) {
    mensaje.classList.remove("d-none");
    setTimeout(() => mensaje.classList.add("d-none"), 2000);
  }

  // persistir y notificar
  guardarCarrito();
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  if (!Array.isArray(window.carrito) || !window.carrito[index]) return;

  // capturar nombre antes de eliminar (por si queremos recargar)
  const removedName = window.carrito[index].nombre;

  window.carrito.splice(index, 1);

  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = window.carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);

  guardarCarrito();
  actualizarCarrito();

  // intentar recargar la página para que productos.js muestre el botón "Agregar" inmediatamente
  _recargarPaginaSiCorresponde();
}

// Sincronizar entre pestañas (storage)
window.addEventListener('storage', (e) => {
  if (e.key === 'carrito') {
    try {
      window.carrito = JSON.parse(e.newValue) || [];
    } catch (err) {
      window.carrito = [];
    }
    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.textContent = window.carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
    if (typeof sincronizarTarjetas === "function") sincronizarTarjetas();
    actualizarCarrito();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = window.carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
  actualizarCarrito();
});

// Exponer funciones globales (compatibilidad con HTML inline)
window.abrirPopupCarrito = abrirPopupCarrito;
window.cerrarPopupCarrito = cerrarPopupCarrito;
window.actualizarCarrito = actualizarCarrito;
window.cambiarCantidad = cambiarCantidad;
window.vaciarCarrito = vaciarCarrito;
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.guardarCarrito = guardarCarrito;
