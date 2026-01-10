function abrirPopupLogin() {
  const popup = document.getElementById("popup-login");
  popup.style.display = "block";
  popup.setAttribute("aria-hidden", "false");
}

function cerrarPopupLogin() {
  const popup = document.getElementById("popup-login");
  popup.style.display = "none";
  popup.setAttribute("aria-hidden", "true");
}

// Escuchar clic en el enlace del navbar
document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.getElementById("btn-login-nav");
  if (navBtn) {
    navBtn.addEventListener("click", (e) => {
      e.preventDefault(); // evita que recargue la página
      abrirPopupLogin();
    });
  }
});

document.getElementById("btn-google-login").addEventListener("click", function() {
  // Aquí conectarías tu flujo real de OAuth con Google
  alert("Login con Gmail iniciado ✅");
  cerrarPopupLogin();
});

function abrirPopupLogin() {
  const login = document.getElementById("popup-login");
  const register = document.getElementById("popup-register");
  if (register) register.style.display = "none"; // cerrar registro si está abierto
  login.style.display = "block";
  login.setAttribute("aria-hidden", "false");
}

function cerrarPopupLogin() {
  const login = document.getElementById("popup-login");
  login.style.display = "none";
  login.setAttribute("aria-hidden", "true");
}

function abrirPopupRegister() {
  const register = document.getElementById("popup-register");
  const login = document.getElementById("popup-login");
  if (login) login.style.display = "none"; // cerrar login si está abierto
  register.style.display = "block";
  register.setAttribute("aria-hidden", "false");
}

function cerrarPopupRegister() {
  const register = document.getElementById("popup-register");
  register.style.display = "none";
  register.setAttribute("aria-hidden", "true");
}

// Escuchar clic en navbar
document.addEventListener("DOMContentLoaded", () => {
  const regBtn = document.getElementById("btn-register-nav");
  if (regBtn) {
    regBtn.addEventListener("click", (e) => {
      e.preventDefault();
      abrirPopupRegister();
    });
  }

  // Gmail register
  const googleBtn = document.getElementById("btn-google-register");
  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      alert("Registro con Gmail iniciado ✅");
      cerrarPopupRegister();
    });
  }

  // Registro form
  document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    if(name && email && password){
      alert("Registro exitoso ✅");
      cerrarPopupRegister();
    } else {
      alert("Por favor completa todos los campos");
    }
  });
});
