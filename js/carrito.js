
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function abrirPopupCarrito() {
  document.getElementById("popup-carrito").style.display = "block";
}

function cerrarPopupCarrito() {
  document.getElementById("popup-carrito").style.display = "none";
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
  document.getElementById("cart-count").textContent = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  document.getElementById("cart-count").textContent = 0;
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

  document.getElementById("cart-count").textContent = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);

  const mensaje = btn.nextElementSibling;
  mensaje.classList.remove("d-none");
  setTimeout(() => mensaje.classList.add("d-none"), 2000);

  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  document.getElementById("cart-count").textContent = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
  actualizarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cart-count").textContent = carrito.reduce((acc, p) => acc + (p.cantidad || 1), 0);
  actualizarCarrito();
});