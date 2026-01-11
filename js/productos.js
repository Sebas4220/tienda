// Lista de productos con categorías ajustadas
const productos = [
// 🎧 Audio
  {
    nombre: "AirPods Pro 2",
    precio: 9.5,
    oferta: "",
    categoria: "Audio",
    imagen: "./img/Productos/AirPodsMaximantados.png" 
  },
  { 
    nombre: "AirPods 3ra", 
    precio: 9, 
    oferta: 8, 
    categoria: "Audio", 
    imagen: "./img/Productos/AirPodsMaximantados.png"  
  },
  { 
    nombre: "AirPods Pro 2 ANC", 
    precio: 10.5, 
    oferta: "", 
    categoria: "Audio", 
    imagen: "./img/Productos/AirPodsMaximantados.png" 
  },
  { 
    nombre: "AirPods 4ta", 
    precio: 11, 
    oferta: "", 
    categoria: "Audio", 
    imagen: "./img/Productos/AirPodsMaximantados.png"  
  },
  { 
    nombre: "AirPods Max imantados", 
    precio: 24, 
    oferta: "", 
    categoria: "Audio",
    imagen: "./img/Productos/AirPodsMaximantados.png" 
  },
  { 
    nombre: "AirPods Max", 
    precio: 15.8, 
    oferta: "", 
    categoria: "Audio", 
    imagen: "./img/Productos/AirPodsMax.png" 
    
  },
  { 
    nombre: "Audífonos Buds 3 Pro", 
    precio: 10.5, 
    oferta: "", 
    categoria: "Audio",
    imagen: "./img/Productos/AudífonosBuds3Pro.png" 
  },

  // ⌚ Relojes
  { nombre: "Reloj serie 10 Apple Watch", 
    precio: 18, 
    oferta: "", 
    categoria: "Relojes", 
    imagen: "./img/Productos/Relojserie10.png"
  },
  { nombre: "Reloj serie 10 Nike", 
    precio: 18, 
    oferta: "", 
    categoria: "Relojes", 
    imagen: "./img/Productos/Relojserie10Nike.png"
  },
  { nombre: "Reloj Ultra 2", 
    precio: 20, 
    oferta: "", 
    categoria: "Relojes", 
    imagen: "./img/Productos/RelojUltra2.png"
  },
  { nombre: "Reloj Ultra 2 varias correas", 
    precio: 13.5, 
    oferta: "", 
    categoria: "Relojes",
    imagen: "./img/Productos/RelojUltra2variascorreas.png"
  },
  { nombre: "Reloj Ultra 3", 
    precio: 7.5, 
    oferta: "", 
    categoria: "Relojes",
    imagen: "./img/Productos/RelojUltra3.png"
  },
  { nombre: "Reloj KT80", 
    precio: 30, 
    oferta: "", 
    categoria: "Relojes",
    imagen: "./img/Productos/RelojKT80.png"
  },
  { nombre: "Reloj H08", 
    precio: 28.5, 
    oferta: "", 
    categoria: "Relojes",
    imagen: "./img/Productos/RelojH08.png"
  },
  // 🔌 Accesorios
  { nombre: "Cargador iPhone 2 en 1", 
    precio: 3.5, 
    oferta: "", 
    categoria: "Accesorios", 
    imagen: "./img/Productos/CargadoriPhone2en1.png"
  },
  { nombre: "Taco 20w", 
    precio: 2.8, 
    oferta: "", 
    categoria: "Accesorios", 
    imagen: "./img/Productos/Taco20w.png"
},
  { nombre: "Cable de iPhone", 
    precio: 1.4,   
    oferta: "", 
    categoria: "Accesorios", 
    imagen: "./img/Productos/cablelightningusb.png" 
  },
  { nombre: "Cable C a C iPhone", 
    precio: 2.1, 
    oferta: "", 
    categoria: "Accesorios", 
    imagen: "./img/Productos/CableCaCiPhone.png"
  },
  { nombre: "Cable 4 en 1", 
    precio: 2, oferta: "", 
    categoria: "Accesorios", 
    imagen: "./img/Productos/Cabla4en1.png"
  },
  { nombre: "Lápiz táctil", 
    precio: 6.5, oferta: "", 
    categoria: "Accesorios", 
    imagen: "./img/Productos/Lápiztáctil.png"
  },
  { nombre: "Cinta LED neón 5M",
     precio: 11.8, oferta: "",
      categoria: "Accesorios",
       imagen: "./img/Productos/AirPodsMax.png"
  },
  { nombre: "Estabilizador L09",
     precio: 29, oferta: "",
      categoria: "Accesorios",
       imagen: "./img/Productos/AirPodsMax.png"
  },

  // 💡 Iluminación
  { nombre: "Panel selfie", precio: 4, oferta: "", categoria: "Iluminación", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Panel selfie RGB", precio: 6, oferta: "", categoria: "Iluminación", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Panel LED RL900", precio: 22, oferta: "", categoria: "Iluminación", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Panel RL19", precio: 24, oferta: "", categoria: "Iluminación", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Panel RL16", precio: 20, oferta: "", categoria: "Iluminación", imagen: "./img/Productos/AirPodsMax.png" },

  // 🎮 Gamer
  { nombre: "Control PS3", precio: 7.5, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Control PS4", precio: 12.5, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Control PS5", precio: 73, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Estación de carga PS5", precio: 12.3, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Estación para PS5", precio: 32, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Control gamer con sensor", precio: 15, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Game Stick", precio: 19, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Game TV Stick (caja roja)", precio: 31, oferta: "", categoria: "Gamer", imagen: "./img/Productos/AirPodsMax.png" },

  // 💻 Tecnología
  { nombre: "Proyector HY300", precio: 42, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Proyector M300 Max", precio: 60, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX8", precio: 10.6, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX8 x2", precio: 15, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX21", precio: 23, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX27", precio: 31, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono DJI Mini", precio: 155, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX29", precio: 27, oferta: "", categoria: "Tecnología", imagen: "./img/Productos/AirPodsMax.png" },
  { nombre: "Micrófono SX23", precio: 26, oferta: "", categoria: "Tecnología" }
];


// productos.js (completo, actualizado: recarga la página al eliminar un producto)
// - Reemplaza botón "Agregar" por controles (- cantidad + eliminar) en tiempo real
// - Mantiene controles tras recargar si el producto está en el carrito
// - Escucha evento 'carrito:changed' y sincroniza; incluye fallback que re-renderiza
// - Añade función recargarPaginaAlEliminar() y la llama cuando se elimina un producto

(function () {
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

  const contenedor = document.getElementById("productos");
  if (!contenedor) {
    console.error('Elemento con id="productos" no encontrado.');
    return;
  }

  // Normalizar nombre para comparaciones
  function nombreNormalizado(s) {
    return String(s || '').trim().toLowerCase();
  }

  /**
   * Recarga la página después de una pequeña espera.
   * Se expone en window por si otras partes del código quieren usarla.
   * delay en ms (por defecto 120) para permitir que localStorage y eventos se propaguen.
   */
  function recargarPaginaAlEliminar(delay = 120) {
    setTimeout(() => {
      try { location.reload(); } catch (e) { /* ignore */ }
    }, Number(delay) || 120);
  }
  window.recargarPaginaAlEliminar = recargarPaginaAlEliminar;

  /**
   * Crea los controles (- cantidad +) y botón eliminar para una tarjeta.
   * Llama a las funciones globales cambiarCantidad/eliminarDelCarrito.
   * Al eliminar, además de llamar a eliminarDelCarrito, reemplaza inmediatamente
   * los controles por el botón "Agregar" y recarga la página (según petición).
   */
  function crearControlesCantidad(nombreProducto, cantidad) {
    const wrapper = document.createElement("div");
    wrapper.className = "mt-1 d-flex align-items-center justify-content-center gap-2";
    wrapper.setAttribute("data-product-name", nombreProducto);

    const btnMinus = document.createElement("button");
    btnMinus.className = "btn btn-sm btn-outline-secondary";
    btnMinus.type = "button";
    btnMinus.textContent = " - ";
    btnMinus.addEventListener("click", () => {
      const idxCarrito = (window.carrito || []).findIndex(item => nombreNormalizado(item.nombre) === nombreNormalizado(nombreProducto));
      if (idxCarrito !== -1 && typeof window.cambiarCantidad === "function") {
        window.cambiarCantidad(idxCarrito, -1);
      }
    });

    const span = document.createElement("span");
    span.className = "mx-2 fw-bold cantidad-en-tarjeta";
    span.textContent = cantidad;

    const btnPlus = document.createElement("button");
    btnPlus.className = "btn btn-sm btn-outline-secondary";
    btnPlus.type = "button";
    btnPlus.textContent = " + ";
    btnPlus.addEventListener("click", () => {
      const idxCarrito = (window.carrito || []).findIndex(item => nombreNormalizado(item.nombre) === nombreNormalizado(nombreProducto));
      if (idxCarrito !== -1 && typeof window.cambiarCantidad === "function") {
        window.cambiarCantidad(idxCarrito, 1);
      }
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn btn-sm btn-outline-danger";
    btnEliminar.type = "button";
    btnEliminar.title = "Eliminar del carrito";
    btnEliminar.innerHTML = `<i class="bi bi-trash"></i>`;
    btnEliminar.addEventListener("click", () => {
      const idxCarrito = (window.carrito || []).findIndex(item => nombreNormalizado(item.nombre) === nombreNormalizado(nombreProducto));
      if (idxCarrito !== -1 && typeof window.eliminarDelCarrito === "function") {
        // Llamar a la función global que elimina del carrito
        window.eliminarDelCarrito(idxCarrito);

        // Reemplazo inmediato de los controles por el botón "Agregar" en la tarjeta
        const cardBody = wrapper.closest('.card-body');
        if (cardBody) {
          const prodIndex = (window.productos || []).findIndex(prod => nombreNormalizado(prod.nombre) === nombreNormalizado(nombreProducto));
          const nuevoBtn = document.createElement('button');
          nuevoBtn.className = 'btn-comprar btn btn-comprar w-100';
          nuevoBtn.type = 'button';
          nuevoBtn.setAttribute('data-index-original', prodIndex);
          nuevoBtn.setAttribute('data-index', prodIndex);
          nuevoBtn.setAttribute('aria-label', `Agregar ${nombreProducto} al carrito`);
          nuevoBtn.textContent = 'Agregar al carrito';
          // enlazar el click al agregar
          nuevoBtn.addEventListener('click', function () {
            if (typeof window.agregarAlCarrito === 'function') agregarAlCarrito(prodIndex, nuevoBtn);
            // después de agregar, reemplazar por controles
            setTimeout(() => reemplazarBotonPorControles(prodIndex), 60);
          });
          wrapper.replaceWith(nuevoBtn);
        }

        // Emitir evento por si hay listeners externos
        try { document.dispatchEvent(new CustomEvent('carrito:changed', { detail: { carrito: window.carrito } })); } catch (e) {}

        // Recargar la página para asegurar estado consistente (según petición)
        recargarPaginaAlEliminar();
      }
    });

    wrapper.appendChild(btnMinus);
    wrapper.appendChild(span);
    wrapper.appendChild(btnPlus);
    wrapper.appendChild(btnEliminar);

    return wrapper;
  }

  /**
   * Reemplaza el botón "Agregar" por los controles en la tarjeta correspondiente.
   * indexProducto es el índice usado en render (puede ser data-index o data-index-original).
   */
  function reemplazarBotonPorControles(indexProducto) {
    // intentar obtener nombre desde window.productos si existe
    const nombre = (Array.isArray(window.productos) && window.productos[indexProducto] && window.productos[indexProducto].nombre) || null;
    // si no hay nombre, intentar buscar por botón en DOM y extraer título
    const btnSelector = `button.btn-comprar[data-index="${indexProducto}"], button.btn-comprar[data-index-original="${indexProducto}"]`;
    const btn = contenedor.querySelector(btnSelector);
    let cardBody = btn ? btn.closest(".card-body") : null;

    if (!cardBody && nombre) {
      const titleEl = Array.from(contenedor.querySelectorAll(".card-title"))
        .find(t => nombreNormalizado(t.textContent) === nombreNormalizado(nombre));
      if (titleEl) cardBody = titleEl.closest(".card-body");
    }

    if (!cardBody) return;

    const titleText = (cardBody.querySelector(".card-title")?.textContent || "").trim();
    const item = (window.carrito || []).find(p => nombreNormalizado(p.nombre) === nombreNormalizado(titleText));
    const cantidad = item ? (item.cantidad || 0) : 0;

    if (cantidad > 0) {
      const controles = crearControlesCantidad(titleText, cantidad);
      const existing = cardBody.querySelector('[data-product-name="' + titleText + '"]');
      if (existing) existing.replaceWith(controles);
      else if (btn) btn.replaceWith(controles);
      else cardBody.appendChild(controles);
    }
  }

  /**
   * Renderiza la lista de productos.
   * Mantiene tu HTML y añade data-index-original para mapear índices si la lista está filtrada.
   * Añade listeners que reemplazan el botón por controles inmediatamente después de agregar.
   * Además: al renderizar, si el producto ya está en window.carrito, se muestran los controles
   * (esto asegura que los controles permanezcan tras recargar la página).
   */
  function renderProductos(lista) {
    if (!contenedor) return;
    contenedor.innerHTML = "";
    (lista || []).forEach((p, index) => {
      const precioUSD = safeNumber(p.precio, 0);
      const ofertaUSD = (p.oferta !== undefined && p.oferta !== "") ? safeNumber(p.oferta, null) : null;

      const col = document.createElement("div");
      col.className = "col-md-2 col-6 mt-0 p-1";
      col.innerHTML = `
        <div class="card h-100 text-center">
          ${ofertaUSD !== null ? `<p class="oferta-title">En Oferta</p>` : ""}
          <img src="${p.imagen || './img/Productos/default.jpg'}" class="card-img-top" alt="${p.nombre || ''}">
          <div class="card-body">
            <h6 class="card-title">${p.nombre || 'Producto'}</h6>
            <div class="rating">★★★★★</div>

            ${ofertaUSD !== null 
              ? `<p class="oferta oferta mb-1">${convertirPrecio(ofertaUSD)}</p>
                 <p class="preciol muted"><del>${convertirPrecio(precioUSD)}</del></p>`
              : `<p class="precio fw-bold">${convertirPrecio(precioUSD)}</p>`}

            <button
              class="btn-comprar btn btn-comprar w-100 m-0"
              data-index="${index}"
              data-index-original="${index}"
              aria-label="Agregar ${p.nombre} al carrito"
            >
              Agregar al carrito
            </button>

            <small style="color: var(--color-principal); font-weight: bold;" class="d-none mt-2">Agregado con Éxito</small>
          </div>
        </div>
      `;
      contenedor.appendChild(col);

      // Si el producto ya está en el carrito, reemplazar el botón por controles ahora
      const prodInCart = (window.carrito || []).find(item => nombreNormalizado(item.nombre) === nombreNormalizado(p.nombre));
      if (prodInCart) {
        const cardBody = col.querySelector('.card-body');
        if (cardBody) {
          const controles = crearControlesCantidad(p.nombre, prodInCart.cantidad || 1);
          const existingBtn = cardBody.querySelector('button.btn-comprar');
          if (existingBtn) existingBtn.replaceWith(controles);
          else cardBody.appendChild(controles);
        }
      }
    });

    // Enlazar botones "Agregar" recién creados: llamarán a agregarAlCarrito y luego reemplazarán el botón por controles
    contenedor.querySelectorAll('button.btn-comprar').forEach(btn => {
      if (btn.dataset.bound === "true") return;
      btn.dataset.bound = "true";

      btn.addEventListener("click", function () {
        const idx = parseInt(btn.getAttribute("data-index-original") || btn.getAttribute("data-index"), 10);
        if (typeof window.agregarAlCarrito === "function") {
          window.agregarAlCarrito(idx, btn);
        }
        // Reemplazar el botón por controles en tiempo real (pequeña espera para que carrito se actualice)
        setTimeout(() => {
          reemplazarBotonPorControles(idx);
        }, 60);
      });
    });
  }

  // Render inicial (si existe window.productos)
  if (Array.isArray(window.productos)) {
    renderProductos(window.productos);
  } else {
    console.warn('La variable global "productos" no está definida. Llama a renderProductos(productos) cuando la definas.');
  }

  // Listener global 'carrito:changed' con re-enlace y fallback de auto-refresh
  if (!window.__productosCarritoListenerAdded) {
    document.addEventListener('carrito:changed', () => {
      // actualizar wrappers existentes
      contenedor.querySelectorAll('[data-product-name]').forEach(wrapper => {
        const nombre = wrapper.getAttribute('data-product-name');
        const item = (window.carrito || []).find(p => nombreNormalizado(p.nombre) === nombreNormalizado(nombre));
        if (item) {
          const span = wrapper.querySelector('.cantidad-en-tarjeta');
          if (span) span.textContent = (item.cantidad || 0);
        } else {
          // si ya no está en carrito, reemplazar controles por botón "Agregar"
          const cardBody = wrapper.closest('.card-body');
          if (!cardBody) return;
          const prodIndex = (window.productos || []).findIndex(prod => nombreNormalizado(prod.nombre) === nombreNormalizado(nombre));
          const nuevoBtn = document.createElement('button');
          nuevoBtn.className = 'btn-comprar btn btn-comprar w-100';
          nuevoBtn.type = 'button';
          nuevoBtn.setAttribute('data-index-original', prodIndex);
          nuevoBtn.setAttribute('aria-label', `Agregar ${nombre} al carrito`);
          nuevoBtn.textContent = 'Agregar al carrito';
          nuevoBtn.addEventListener('click', function () {
            if (typeof window.agregarAlCarrito === 'function') agregarAlCarrito(prodIndex, nuevoBtn);
            setTimeout(() => reemplazarBotonPorControles(prodIndex), 60);
          });
          wrapper.replaceWith(nuevoBtn);
        }
      });

      // Asegurar que botones "Agregar" estén enlazados
      contenedor.querySelectorAll('button.btn-comprar').forEach(btn => {
        if (btn.dataset.bound === "true") return;
        btn.dataset.bound = "true";
        btn.addEventListener("click", function () {
          const idx = parseInt(btn.getAttribute("data-index-original") || btn.getAttribute("data-index"), 10);
          if (typeof window.agregarAlCarrito === "function") agregarAlCarrito(idx, btn);
          setTimeout(() => reemplazarBotonPorControles(idx), 60);
        });
      });

      // FALLBACK: re-renderizar productos para asegurar consistencia (pequeña demora)
      setTimeout(() => {
        try {
          if (typeof renderProductos === "function" && Array.isArray(window.productos)) {
            renderProductos(window.productos);
          }
        } catch (e) {
          console.error("Error al auto-refrescar productos:", e);
        }
      }, 120);
    }, { passive: true });

    // Escuchar cambios en localStorage (otras pestañas)
    window.addEventListener('storage', (e) => {
      if (e.key === 'carrito') {
        try {
          window.carrito = JSON.parse(e.newValue) || [];
        } catch (err) {
          window.carrito = [];
        }
        // re-sincronizar tarjetas
        try {
          if (typeof renderProductos === "function" && Array.isArray(window.productos)) {
            renderProductos(window.productos);
          }
        } catch (e) { /* ignore */ }
      }
    });

    window.__productosCarritoListenerAdded = true;
  }

  // Exponer funciones útiles en window para compatibilidad
  window.renderProductos = renderProductos;
  window.reemplazarBotonPorControles = reemplazarBotonPorControles;
  window.recargarPaginaAlEliminar = recargarPaginaAlEliminar;
})();
