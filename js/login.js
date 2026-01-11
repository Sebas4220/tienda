// Overlay and popup helpers
function lockBodyScroll() {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}
function unlockBodyScroll() {
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}

// Open popup: type = 'login' or 'register'
function abrirPopup(type = 'login') {
  const popupId = type === 'register' ? 'popup-register' : 'popup-login';
  const overlayId = type === 'register' ? 'popup-register-overlay' : 'popup-login-overlay';

  const popup = document.getElementById(popupId);
  let overlay = document.getElementById(overlayId);

  // Ensure overlay exists and has common class
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = overlayId;
    overlay.className = 'popup-overlay';
    document.body.appendChild(overlay);
  }

  // Close other popup if open
  if (type === 'login') {
    document.getElementById('popup-register')?.classList.remove('show');
    document.getElementById('popup-register-overlay')?.classList.remove('show');
  } else {
    document.getElementById('popup-login')?.classList.remove('show');
    document.getElementById('popup-login-overlay')?.classList.remove('show');
  }

  if (!popup) return;
  popup.classList.add('show');
  popup.setAttribute('aria-hidden', 'false');
  overlay.classList.add('show');

  lockBodyScroll();

  // focus primer input
  const first = popup.querySelector('input, button, [tabindex]:not([tabindex="-1"])');
  if (first) first.focus();
}

// Close popup: type optional ('login'|'register'), if omitted closes both
function cerrarPopup(type) {
  if (!type || type === 'login') {
    const popup = document.getElementById('popup-login');
    const overlay = document.getElementById('popup-login-overlay');
    if (popup) { popup.classList.remove('show'); popup.setAttribute('aria-hidden', 'true'); }
    if (overlay) overlay.classList.remove('show');
  }
  if (!type || type === 'register') {
    const popup = document.getElementById('popup-register');
    const overlay = document.getElementById('popup-register-overlay');
    if (popup) { popup.classList.remove('show'); popup.setAttribute('aria-hidden', 'true'); }
    if (overlay) overlay.classList.remove('show');
  }

  // unlock if no popups open
  const anyOpen = document.querySelector('.popup-login.show') || document.querySelector('#popup-register.show');
  if (!anyOpen) unlockBodyScroll();
}

// Convenience wrappers
function abrirPopupLogin() { abrirPopup('login'); }
function cerrarPopupLogin() { cerrarPopup('login'); }
function abrirPopupRegister() { abrirPopup('register'); }
function cerrarPopupRegister() { cerrarPopup('register'); }

// Event wiring
document.addEventListener('DOMContentLoaded', () => {
  // Navbar triggers (if exist)
  document.getElementById('btn-login-nav')?.addEventListener('click', (e) => { e.preventDefault(); abrirPopupLogin(); });
  document.getElementById('btn-register-nav')?.addEventListener('click', (e) => { e.preventDefault(); abrirPopupRegister(); });

  // Ensure overlays exist and close on click
  ['popup-login-overlay','popup-register-overlay'].forEach(id => {
    let ov = document.getElementById(id);
    if (!ov) {
      ov = document.createElement('div');
      ov.id = id;
      ov.className = 'popup-overlay';
      document.body.appendChild(ov);
    }
    ov.addEventListener('click', () => {
      if (id.includes('login')) cerrarPopup('login');
      else cerrarPopup('register');
    });
  });

  // Close buttons (data-popup-close attribute)
  document.querySelectorAll('[data-popup-close]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.getAttribute('data-popup-close');
      cerrarPopup(type);
    });
  });

  // Forms
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email')?.value?.trim();
      const pass = document.getElementById('password')?.value?.trim();
      if (!email || !pass) { alert('Por favor completa todos los campos'); return; }
      alert('Inicio de sesión exitoso ✅');
      cerrarPopupLogin();
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name')?.value?.trim();
      const email = document.getElementById('reg-email')?.value?.trim();
      const pass = document.getElementById('reg-password')?.value?.trim();
      if (!name || !email || !pass) { alert('Por favor completa todos los campos'); return; }
      alert('Registro exitoso ✅');
      cerrarPopupRegister();
    });
  }

  // Google buttons
  document.getElementById('btn-google-login')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Login con Gmail iniciado ✅');
    cerrarPopupLogin();
  });
  document.getElementById('btn-google-register')?.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Registro con Gmail iniciado ✅');
    cerrarPopupRegister();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarPopup();
  });
});
