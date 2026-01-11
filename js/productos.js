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

// productos.js (completo, robusto)
// - Normaliza nombres y usa atributos normalizados en DOM
// - Al cambiar categoría vacía buscador y rangos y aplica filtros
// - Escucha 'carrito:changed' y actualiza tarjetas sin recarga
(function () {
  // Helpers mínimos
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

  function nombreNormalizado(s) {
    return String(s || '').trim().toLowerCase();
  }

  function crearControlesCantidad(nombreProducto, cantidad) {
    const normalized = nombreNormalizado(nombreProducto);
    const wrapper = document.createElement("div");
    wrapper.className = "mt-1 d-flex align-items-center justify-content-center gap-2";
    wrapper.setAttribute("data-product-name", normalized);

    const btnMinus = document.createElement("button");
    btnMinus.className = "btn btn-sm btn-outline-secondary";
    btnMinus.type = "button";
    btnMinus.textContent = " - ";
    btnMinus.addEventListener("click", () => {
      const idxCarrito = (window.carrito || []).findIndex(item => nombreNormalizado(item.nombre) === normalized);
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
      const idxCarrito = (window.carrito || []).findIndex(item => nombreNormalizado(item.nombre) === normalized);
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
      const idxCarrito = (window.carrito || []).findIndex(item => nombreNormalizado(item.nombre) === normalized);
      if (idxCarrito !== -1 && typeof window.eliminarDelCarrito === "function") {
        window.eliminarDelCarrito(idxCarrito);
      }
    });

    wrapper.appendChild(btnMinus);
    wrapper.appendChild(span);
    wrapper.appendChild(btnPlus);
    wrapper.appendChild(btnEliminar);

    return wrapper;
  }

  function reemplazarBotonPorControles(indexProducto) {
    const nombre = (Array.isArray(window.productos) && window.productos[indexProducto] && window.productos[indexProducto].nombre) || null;
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
    const normalizedTitle = nombreNormalizado(titleText);
    const item = (window.carrito || []).find(p => nombreNormalizado(p.nombre) === normalizedTitle);
    const cantidad = item ? (item.cantidad || 0) : 0;

    if (cantidad > 0) {
      const controles = crearControlesCantidad(titleText, cantidad);
      const existing = cardBody.querySelector('[data-product-name="' + normalizedTitle + '"]');
      if (existing) existing.replaceWith(controles);
      else if (btn) btn.replaceWith(controles);
      else cardBody.appendChild(controles);
    }
  }

  function renderProductos(lista) {
    if (!contenedor) return;
    contenedor.innerHTML = "";
    (lista || []).forEach((p, index) => {
      const precioUSD = safeNumber(p.precio, 0);
      const ofertaUSD = (p.oferta !== undefined && p.oferta !== "") ? safeNumber(p.oferta, null) : null;
      const normalized = nombreNormalizado(p.nombre);

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
              data-product-name-normalized="${normalized}"
              aria-label="Agregar ${p.nombre} al carrito"
            >
              Agregar al carrito
            </button>

            <small style="color: var(--color-principal); font-weight: bold;" class="d-none mt-2">Agregado con Éxito</small>
          </div>
        </div>
      `;
      contenedor.appendChild(col);

      const prodInCart = (window.carrito || []).find(item => nombreNormalizado(item.nombre) === normalized);
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

    // Enlazar botones "Agregar"
    contenedor.querySelectorAll('button.btn-comprar').forEach(btn => {
      if (btn.dataset.bound === "true") return;
      btn.dataset.bound = "true";
      btn.addEventListener("click", function () {
        const idx = parseInt(btn.getAttribute("data-index-original") || btn.getAttribute("data-index"), 10);
        if (typeof window.agregarAlCarrito === "function") {
          window.agregarAlCarrito(idx, btn);
        }
        setTimeout(() => reemplazarBotonPorControles(idx), 60);
      });
    });
  }

  /* ---------------------------
     FILTROS: aplicar, limpiar y comportamiento al cambiar categoría
     --------------------------- */
  function aplicarFiltros() {
    const buscadorEl = document.getElementById("buscador");
    const categoriaEl = document.getElementById("categoria");
    const precioMinEl = document.getElementById("precioMin");
    const precioMaxEl = document.getElementById("precioMax");

    const texto = (buscadorEl?.value || "").trim().toLowerCase();
    const categoria = (categoriaEl?.value || "").trim();

    const precioMinRaw = precioMinEl?.value;
    const precioMaxRaw = precioMaxEl?.value;
    const precioMin = (precioMinRaw === "" || precioMinRaw === undefined) ? -Infinity : parseFloat(precioMinRaw);
    const precioMax = (precioMaxRaw === "" || precioMaxRaw === undefined) ? Infinity : parseFloat(precioMaxRaw);

    const min = Number.isFinite(precioMin) ? precioMin : -Infinity;
    const max = Number.isFinite(precioMax) ? precioMax : Infinity;
    const lower = Math.min(min, max);
    const upper = Math.max(min, max);

    const filtrados = (window.productos || []).filter(p => {
      const nombre = (p.nombre || "").toLowerCase();
      const precio = Number(p.precio) || 0;
      const matchTexto = texto === "" || nombre.includes(texto);
      const matchCategoria = categoria === "" || (p.categoria || "") === categoria;
      const matchPrecio = precio >= lower && precio <= upper;
      return matchTexto && matchCategoria && matchPrecio;
    });

    renderProductos(filtrados);
  }

  function limpiarFiltros() {
    const buscador = document.getElementById("buscador");
    const categoria = document.getElementById("categoria");
    const precioMin = document.getElementById("precioMin");
    const precioMax = document.getElementById("precioMax");

    if (buscador) buscador.value = "";
    if (categoria) categoria.value = "";
    if (precioMin) precioMin.value = "";
    if (precioMax) precioMax.value = "";

    aplicarFiltros();
    if (buscador) buscador.focus();
  }

  function vaciarFiltrosExceptoCategoria() {
    const buscador = document.getElementById("buscador");
    const precioMin = document.getElementById("precioMin");
    const precioMax = document.getElementById("precioMax");
    if (buscador) buscador.value = "";
    if (precioMin) precioMin.value = "";
    if (precioMax) precioMax.value = "";
  }

  /* Enlazado de eventos y render inicial */
  document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("buscador");
    const categoria = document.getElementById("categoria");
    const precioMin = document.getElementById("precioMin");
    const precioMax = document.getElementById("precioMax");
    const btnLimpiar = document.getElementById("btn-limpiar-filtros");

    if (buscador) buscador.addEventListener("input", aplicarFiltros);

    if (categoria) {
      categoria.addEventListener("change", (e) => {
        // limpiar los demás filtros y aplicar
        vaciarFiltrosExceptoCategoria();
        aplicarFiltros();
        // UX: desplazar suavemente a productos
        const productosEl = document.getElementById("productos");
        if (productosEl) productosEl.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    if (precioMin) precioMin.addEventListener("input", aplicarFiltros);
    if (precioMax) precioMax.addEventListener("input", aplicarFiltros);

    if (btnLimpiar) {
      btnLimpiar.addEventListener("click", (e) => {
        e.preventDefault();
        limpiarFiltros();
      });
    }

    // Render inicial con todos los productos si existen
    if (Array.isArray(window.productos)) {
      renderProductos(window.productos);
    } else {
      console.warn("window.productos no está definido al cargar productos.js");
    }
  });

  // Escuchar cambios del carrito para sincronizar tarjetas sin recarga
  if (!window.__productosCarritoListenerAdded) {
    window.__prevCarritoSnapshot = JSON.stringify(window.carrito || []);
    document.addEventListener('carrito:changed', () => {
      try {
        const prev = JSON.parse(window.__prevCarritoSnapshot || "[]");
        const curr = window.carrito || [];
        const prevNames = prev.map(p => nombreNormalizado(p.nombre));
        const currNames = curr.map(p => nombreNormalizado(p.nombre));
        const removedNames = prevNames.filter(n => !currNames.includes(n));

        // actualizar cantidades y añadir controles si es necesario
        curr.forEach(item => {
          const normalized = nombreNormalizado(item.nombre);
          const wrapper = contenedor.querySelector(`[data-product-name="${normalized}"]`);
          if (wrapper) {
            const span = wrapper.querySelector('.cantidad-en-tarjeta');
            if (span) span.textContent = (item.cantidad || 0);
          } else {
            const prodIndex = (window.productos || []).findIndex(prod => nombreNormalizado(prod.nombre) === normalized);
            if (prodIndex !== -1) reemplazarBotonPorControles(prodIndex);
          }
        });

        // reemplazar controles por botón para removidos (transición sutil)
        removedNames.forEach(name => {
          const cardBody = Array.from(contenedor.querySelectorAll('.card-body')).find(cb => {
            const t = cb.querySelector('.card-title')?.textContent || '';
            return nombreNormalizado(t) === name;
          });
          if (!cardBody) return;
          const controls = cardBody.querySelector(`[data-product-name="${name}"]`) || cardBody.querySelector('.mt-1');
          if (controls) {
            controls.style.transition = 'opacity .18s ease';
            controls.style.opacity = '0';
            setTimeout(() => {
              const prodIndex = (window.productos || []).findIndex(prod => nombreNormalizado(prod.nombre) === name);
              const nuevoBtn = document.createElement('button');
              nuevoBtn.className = 'btn-comprar btn btn-comprar w-100';
              nuevoBtn.type = 'button';
              nuevoBtn.setAttribute('data-index-original', prodIndex);
              nuevoBtn.setAttribute('data-product-name-normalized', name);
              nuevoBtn.setAttribute('aria-label', `Agregar ${name} al carrito`);
              nuevoBtn.textContent = 'Agregar al carrito';
              nuevoBtn.addEventListener('click', function () {
                if (typeof window.agregarAlCarrito === 'function') agregarAlCarrito(prodIndex, nuevoBtn);
                setTimeout(() => reemplazarBotonPorControles(prodIndex), 60);
              });
              if (controls.parentNode) controls.parentNode.replaceChild(nuevoBtn, controls);
            }, 180);
          }
        });

        // re-enlazar botones nuevos
        contenedor.querySelectorAll('button.btn-comprar').forEach(btn => {
          if (btn.dataset.bound === "true") return;
          btn.dataset.bound = "true";
          btn.addEventListener("click", function () {
            const idx = parseInt(btn.getAttribute("data-index-original") || btn.getAttribute("data-index"), 10);
            if (typeof window.agregarAlCarrito === "function") agregarAlCarrito(idx, btn);
            setTimeout(() => reemplazarBotonPorControles(idx), 60);
          });
        });

        window.__prevCarritoSnapshot = JSON.stringify(curr);
      } catch (err) {
        try { if (typeof renderProductos === "function" && Array.isArray(window.productos)) renderProductos(window.productos); } catch (e) {}
      }
    }, { passive: true });

    // sincronizar con storage (otras pestañas)
    window.addEventListener('storage', (e) => {
      if (e.key === 'carrito') {
        try {
          window.carrito = JSON.parse(e.newValue) || [];
        } catch (err) {
          window.carrito = [];
        }
        try { if (typeof renderProductos === "function" && Array.isArray(window.productos)) renderProductos(window.productos); } catch (e) {}
      }
    });

    window.__productosCarritoListenerAdded = true;
  }

  // Exponer funciones globales
  window.renderProductos = renderProductos;
  window.reemplazarBotonPorControles = reemplazarBotonPorControles;
})();
