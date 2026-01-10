
  // Aplicar filtros
  function aplicarFiltros() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    const categoria = document.getElementById("categoria").value;
    const precioMin = parseFloat(document.getElementById("precioMin").value) || 0;
    const precioMax = parseFloat(document.getElementById("precioMax").value) || Infinity;

    const filtrados = productos.filter(p => {
      const matchTexto = p.nombre.toLowerCase().includes(texto);
      const matchCategoria = categoria === "" || p.categoria === categoria;
      const matchPrecio = p.precio >= precioMin && p.precio <= precioMax;
      return matchTexto && matchCategoria && matchPrecio;
    });

    renderProductos(filtrados);
  }

  // Eventos de filtros
  document.getElementById("buscador").addEventListener("input", aplicarFiltros);
  document.getElementById("categoria").addEventListener("change", aplicarFiltros);
  document.getElementById("precioMin").addEventListener("input", aplicarFiltros);
  document.getElementById("precioMax").addEventListener("input", aplicarFiltros);
