// Crear usuarios demo si no existen
if (!localStorage.getItem("usuarios")) {
  const usuarios = [
    {
      id: 1,
      email: "admin@demo.com",
      password: "1234",
      rol: "admin",
      nombre: "Administrador"
    },
    {
      id: 2,
      email: "melani@demo.com",
      password: "1234",
      rol: "modelo",
      nombre: "Melani",
      descripcion: "Modelo profesional"
    },
    {
      id: 3,
      email: "laura@demo.com",
      password: "1234",
      rol: "modelo",
      nombre: "Laura",
      descripcion: "Modelo independiente"
    }
  ];

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

if (!localStorage.getItem("melani")) {
  localStorage.setItem("melani", JSON.stringify({
    nombre: "Melani",
    edad: "24",
    altura: "1.70m",
    medidas: "90 - 60 - 90",
    cabello: "Castaño",
    ojos: "Verdes"
  }));
}

// LOGIN
function login(email, password) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  const user = usuarios.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Credenciales incorrectas");
    return;
  }

  localStorage.setItem("usuarioActual", JSON.stringify(user));

  if (user.rol === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "panel-modelo.html";
  }
}