let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

/* Abrir popup carrito mostrando overlay (crea overlay si no existe) */
function abrirPopupCarrito() {
  const popup = document.getElementById("popup-carrito");
  if (!popup) return;

  let overlay = document.getElementById("popup-carrito-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "popup-carrito-overlay";
    overlay.className = "popup-overlay"; // usa tu clase CSS existente
    document.body.appendChild(overlay);

    // cerrar al hacer click en el overlay
    overlay.addEventListener("click", () => {
      cerrarPopupCarrito();
    });
  }

  // Asegurar z-index correcto para que el popup quede por encima del overlay
  overlay.style.zIndex = "1055";
  overlay.style.display = "block";
  overlay.setAttribute("aria-hidden", "false");

  popup.style.display = "block";
  popup.style.zIndex = "1060";
  popup.setAttribute("aria-hidden", "false");
}

/* Cerrar popup carrito y ocultar overlay */
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

function actualizarCarrito() {
  const carritoContenido = document.getElementById("carrito-contenido");
  const carritoTotal = document.getElementById("carrito-total");

  if (!carritoContenido || !carritoTotal) return; // evita errores si faltan elementos

  if (!Array.isArray(carrito) || carrito.length === 0) {
    carritoContenido.innerHTML = "<p>No hay productos en el carrito.</p>";
    carritoTotal.textContent = convertirPrecio(0);
    guardarCarrito();
    return;
  }

  let totalUSD = 0;
  let html = "<div class='row g-2'>";

  carrito.forEach((p, i) => {
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
                  ? `<small><del class="preciol">${convertirPrecio(precioUSD)}</del> <span class="ofertaCarrito fw-bold">${convertirPrecio(ofertaUSD)}</span></small>` 
                  : `<small class="fw-bold">${convertirPrecio(precioUSD)}</small>`}
                <div class="mt-1">
                  <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${i}, -1)"> - </button>
                  <span class="mx-2 fw-bold">${cantidad}</span>
                  <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad(${i}, 1)"> + </button>
                </div>
                <small class="text-muted">Subtotal: ${convertirPrecio(subtotalUSD)}</small>
              </div>
            </div>
            <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${i})">
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
  guardarCarrito();
}

function cambiarCantidad(index, delta) {
  carrito[index].cantidad = (carrito[index].cantidad || 1) + delta;
  if (carrito[index].cantidad <= 0) carrito.splice(index, 1);
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = 0;
  actualizarCarrito();
}

function agregarAlCarrito(index, btn) {
  const producto = productos[index];
  const existente = carrito.find(p => p.nombre === producto.nombre);

  if (existente) {
    existente.cantidad = (existente.cantidad || 1) + 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);

  const mensaje = btn.nextElementSibling;
  if (mensaje) {
    mensaje.classList.remove("d-none");
    setTimeout(() => mensaje.classList.add("d-none"), 2000);
  }

  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
  actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
  actualizarCarrito();

  // Si el overlay ya está en el DOM, enlazar cierre por click
  const existingOverlay = document.getElementById("popup-carrito-overlay");
  if (existingOverlay) {
    existingOverlay.addEventListener("click", () => cerrarPopupCarrito());
  }

  // Enlazar botón de cerrar dentro del popup (asegura que funcione aunque overlay cubra algo)
  const closeBtn = document.querySelector("#popup-carrito .btn-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      cerrarPopupCarrito();
    });
  }

  // Cerrar con Escape si el popup está abierto
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const popup = document.getElementById("popup-carrito");
      if (popup && popup.style.display !== "none") cerrarPopupCarrito();
    }
  });
});
