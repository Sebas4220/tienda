
// --- Claves de localStorage ---
const STORAGE_KEY_MONEDA = "miapp_moneda";
const STORAGE_KEY_TASA  = "miapp_tasa";

// --- Estado inicial (lee localStorage si existe) ---
let monedaActual = localStorage.getItem(STORAGE_KEY_MONEDA) || "USD"; // "USD" o "Bs"
let tasaCambio = Number(localStorage.getItem(STORAGE_KEY_TASA)) || 800; // 1 USD = X Bs

// --- Helpers ---
function safeNumber(v, fallback = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

function formatNumber(value) {
  return new Intl.NumberFormat('es-VE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
}

// Convierte precio (valor en USD) a la representación según monedaActual
function convertirPrecio(precioUSD) {
  const n = safeNumber(precioUSD, 0);
  if (monedaActual === "USD") {
    return `$${formatNumber(n)} USD`;
  } else {
    return `${formatNumber(n * tasaCambio)} Bs`;
  }
}

// Actualizar tasa manualmente (y refrescar vistas)
function setTasaCambio(nuevaTasa) {
  tasaCambio = safeNumber(nuevaTasa, tasaCambio);
  localStorage.setItem(STORAGE_KEY_TASA, tasaCambio);
  if (typeof renderProductos === "function") renderProductos(Array.isArray(window.productos) ? window.productos : []);
  if (typeof actualizarCarrito === "function") actualizarCarrito();
}

/* ----------------- Helpers para etiqueta de moneda con imagen ----------------- */
// Copia el HTML del item del dropdown correspondiente para mostrar imagen + texto
function updateCurrencyLabelFromItem(code) {
  const label = document.getElementById("currentCurrency");
  if (!label) return;
  // Buscar item por data-currency
  const item = document.querySelector(`.dropdown-item[data-currency="${code}"]`);
  if (item) {
    // Copiar el HTML del item (incluye <img> si existe)
    // Normalizar: si el item contiene solo texto o elementos extra, mantenemos solo la parte visible
    label.innerHTML = item.innerHTML;
  } else {
    // Fallback: mostrar solo el código
    label.textContent = code;
  }
}

/* ----------------- Cambio de moneda ----------------- */
// Cambiar moneda y refrescar vistas (guarda en localStorage)
function cambiarMoneda(nuevaMoneda) {
  monedaActual = nuevaMoneda === "Bs" ? "Bs" : "USD";
  localStorage.setItem(STORAGE_KEY_MONEDA, monedaActual);

  // actualizar etiqueta si existe copiando el HTML del item correspondiente
  updateCurrencyLabelFromItem(monedaActual);

  // elegir la lista correcta para renderizar
  const listaParaRender = Array.isArray(window.productos) ? window.productos
                        : (typeof productos !== "undefined" && Array.isArray(productos) ? productos : []);

  if (typeof renderProductos === "function") renderProductos(listaParaRender);
  if (typeof actualizarCarrito === "function") actualizarCarrito();
}

/* ----------------- Listeners seguros para el dropdown (sin inline onclick) ----------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar etiqueta desde localStorage o estado (usa el HTML del item si existe)
  const saved = localStorage.getItem(STORAGE_KEY_MONEDA) || monedaActual;
  updateCurrencyLabelFromItem(saved);

  // Enlazar botones del dropdown (usa IDs currency-usd / currency-bs si existen)
  const btnUsd = document.getElementById("currency-usd");
  const btnBs  = document.getElementById("currency-bs");

  if (btnUsd) {
    btnUsd.addEventListener("click", (e) => {
      e.preventDefault();
      cambiarMoneda("USD");
    });
  }

  if (btnBs) {
    btnBs.addEventListener("click", (e) => {
      e.preventDefault();
      cambiarMoneda("Bs");
    });
  }

  // Compatibilidad: proteger enlaces que usen data-currency (copiar HTML del item)
  document.querySelectorAll('.dropdown-item[data-currency]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const cur = el.getAttribute('data-currency');
      if (cur) cambiarMoneda(cur);
    });
  });

  // Render inicial: usar window.productos si existe, si no usar variable productos si está definida
  const listaInicial = Array.isArray(window.productos) ? window.productos
                      : (typeof productos !== "undefined" && Array.isArray(productos) ? productos : []);
  if (typeof renderProductos === "function") renderProductos(listaInicial);

  // Refrescar carrito si existe la función
  if (typeof actualizarCarrito === "function") actualizarCarrito();
});


