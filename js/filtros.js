/* ---------------------------
  Función aplicarFiltros (usa el array global `productos`)
--------------------------- */
function aplicarFiltros() {
  const buscadorEl = document.getElementById("buscador");
  const categoriaEl = document.getElementById("categoria");
  const precioMinEl = document.getElementById("precioMin");
  const precioMaxEl = document.getElementById("precioMax");

  const texto = (buscadorEl?.value || "").trim().toLowerCase();
  const categoria = (categoriaEl?.value || "").trim();

  // Manejar campos vacíos como no límite
  const precioMinRaw = precioMinEl?.value;
  const precioMaxRaw = precioMaxEl?.value;
  const precioMin = (precioMinRaw === "" || precioMinRaw === undefined) ? -Infinity : parseFloat(precioMinRaw);
  const precioMax = (precioMaxRaw === "" || precioMaxRaw === undefined) ? Infinity : parseFloat(precioMaxRaw);

  const min = Number.isFinite(precioMin) ? precioMin : -Infinity;
  const max = Number.isFinite(precioMax) ? precioMax : Infinity;

  // Asegurar lower/upper si el usuario invirtió min/max
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);

  const filtrados = productos.filter(p => {
    const nombre = (p.nombre || "").toLowerCase();
    const precio = Number(p.precio) || 0;
    const matchTexto = texto === "" || nombre.includes(texto);
    const matchCategoria = categoria === "" || (p.categoria || "") === categoria;
    const matchPrecio = precio >= lower && precio <= upper;
    return matchTexto && matchCategoria && matchPrecio;
  });

  // Renderizar la lista filtrada
  renderProductos(filtrados);
}

/* ---------------------------
  Función limpiarFiltros y binding del botón
--------------------------- */
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

/* ---------------------------
  Reiniciar todos los filtros y aplicar la categoría seleccionada
  (guarda la categoría seleccionada, limpia todo, vuelve a establecerla y aplica)
--------------------------- */
function reiniciarFiltrosYSeleccionarCategoria(selectedValue) {
  // limpiar todo
  limpiarFiltros();

  // volver a establecer la categoría seleccionada y aplicar
  const categoriaEl = document.getElementById("categoria");
  if (categoriaEl) {
    categoriaEl.value = selectedValue || "";
  }

  // aplicar filtros con la categoría recién establecida
  aplicarFiltros();
}

/* ---------------------------
  Enlazar eventos (actualizado)
--------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");
  const categoria = document.getElementById("categoria");
  const precioMin = document.getElementById("precioMin");
  const precioMax = document.getElementById("precioMax");
  const btnLimpiar = document.getElementById("btn-limpiar-filtros");

  if (buscador) buscador.addEventListener("input", aplicarFiltros);

  // Al cambiar de categoría: reiniciar todos los filtros y aplicar la categoría seleccionada
  if (categoria) {
    categoria.addEventListener("change", (e) => {
      const seleccionado = (e.target?.value || "").trim();
      reiniciarFiltrosYSeleccionarCategoria(seleccionado);

      // opcional: mover foco al contenedor de productos para mejorar UX
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

  // Render inicial con todos los productos
  renderProductos(productos);
});
