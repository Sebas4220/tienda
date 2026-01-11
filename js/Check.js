// JS: mostrar/ocultar info según radio seleccionado
function mostrarInfoPago() {
  const selected = document.querySelector('input[name="pay-method"]:checked');
  const value = selected ? selected.value : null;

  const blocks = {
    cash: document.getElementById('pay-info-cash'),
    card: document.getElementById('pay-info-card'),
    usd:  document.getElementById('pay-info-usd')
  };

  // Ocultar todos y mostrar solo el seleccionado
  Object.values(blocks).forEach(b => { if (b) b.style.display = 'none'; });
  if (value && blocks[value]) blocks[value].style.display = '';
}

// Enlazar listeners al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar vista según radio por defecto
  mostrarInfoPago();

  // Añadir listener a todos los radios del grupo
  document.querySelectorAll('input[name="pay-method"]').forEach(radio => {
    radio.addEventListener('change', mostrarInfoPago);
  });
});

// JS: mostrar/ocultar info según radio seleccionado
function mostrarInfoPago() {
  const selected = document.querySelector('input[name="pay-method"]:checked');
  const value = selected ? selected.value : null;

  const blocks = {
    cash: document.getElementById('pay-info-cash'),
    card: document.getElementById('pay-info-card'),
    usd:  document.getElementById('pay-info-usd')
  };

  Object.values(blocks).forEach(b => { if (b) b.style.display = 'none'; });
  if (value && blocks[value]) blocks[value].style.display = '';
}

document.addEventListener('DOMContentLoaded', () => {
  mostrarInfoPago();
  document.querySelectorAll('input[name="pay-method"]').forEach(radio => {
    radio.addEventListener('change', mostrarInfoPago);
  });
});
