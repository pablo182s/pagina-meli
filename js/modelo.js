function guardarPerfil() {
  const user = getUsuarioActual();
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  const index = usuarios.findIndex(u => u.id === user.id);

  usuarios[index].descripcion =
    document.getElementById("descripcion").value;

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  localStorage.setItem("usuarioActual", JSON.stringify(usuarios[index]));

  alert("Perfil actualizado");
}