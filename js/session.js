function getUsuarioActual() {
  return JSON.parse(localStorage.getItem("usuarioActual"));
}

function logout() {
  localStorage.removeItem("usuarioActual");
  window.location.href = "index.html";
}

// PROTEGER PÁGINAS
function protegerPagina(rolPermitido) {
  const user = getUsuarioActual();

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  if (rolPermitido && user.rol !== rolPermitido) {
    alert("No tienes permisos");
    window.location.href = "index.html";
  }
}