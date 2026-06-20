function cargarUsuarios() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  const contenedor = document.getElementById("lista");

  contenedor.innerHTML = usuarios
    .filter(u => u.rol === "modelo")
    .map(u => `
      <div class="card p-2 mb-2">
        <h5>${u.nombre}</h5>
        <p>${u.email}</p>
        <button onclick="eliminarUsuario(${u.id})" class="btn btn-danger btn-sm">
          Eliminar
        </button>
      </div>
    `).join("");
}

function eliminarUsuario(id) {
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));

  usuarios = usuarios.filter(u => u.id !== id);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  cargarUsuarios();
}