//Pantalla principal o Login
const app = document.getElementById("app");
const pantallaLogin = `<h1 class="app-container-title">Bienvenidos</h1>
            <form class="form" id="login-form">
              <input
                name="username"
                type="text"
                placeholder="👮‍♂️ Usuario"
                required
              />
              <input
                name="password"
                type="password"
                placeholder="🔒 Contraseña"
                required
              />
              <input type="submit" value="Login" />
            </form>
            <button onclick="renderRegistro()">Crear cuenta</button>`;
const pantalla404 = ` <h1 class="app-container-title">404</h1>
            <p>Pagina en construcción</p>
            <button>Logout</button>`;
// app.innerHTML = pantallaLogin;
function renderLogin() {
  app.innerHTML = pantallaLogin;
  //Logica de Login
  const loginForm = document.getElementById("login-form");

  loginForm.onsubmit = (evento) => {
    evento.preventDefault();
    const username = evento.target.username.value;
    const password = evento.target.password.value;

    for (usuario of bdUsuarios) {
      if (usuario.username === username) {
        if (usuario.password === password) {
          app.innerHTML = pantalla404;
          return;
        }
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }
  };
}
renderLogin();

//Pantalla Registro
const pantallaRegistro = `<h1 class="app-container-title">Registro</h1>
            <form class="form" id="register-form">
              <input
                name="username"
                type="text"
                placeholder="👮‍♂️ Usuario nuevo"
                required
              />
              <input
                name="password1"
                type="password"
                placeholder="🔒 Contraseña"
                required
              />
              <input
                name="password2"
                type="password"
                placeholder="🔒 Repetir Contraseña"
                required
              />
              <input type="submit" value="Crear" />
            </form>
            <button onclick="renderLogin()">Volver al Login</button>`;
function renderRegistro() {
  app.innerHTML = pantallaRegistro;

  const registerForm = document.getElementById("register-form");
  registerForm.onsubmit = (evento) => {
    evento.preventDefault();
    const username = evento.target.username.value;
    const password1 = evento.target.password1.value;
    const password2 = evento.target.password2.value;

    //revisar que no exista el usuario
    for (usuario of bdUsuarios) {
      if (usuario.username === username) {
        alert("Usuario ya existe");
        return;
      }
    }

    //revisar que las contraseñas sean iguales
    if (password1 !== password2) {
      alert("Las contraseñas no coinciden");
      return;
    }
    const nuevoID = bdUsuarios[bdUsuarios.length - 1].id + 1;
    //crear usuario
    const nuevoUsuario = {
      username: username,
      password: password1,
      id: nuevoID,
    };
    //actualizo mi bd de trabajo
    bdUsuarios.push(nuevoUsuario);
    //actualizo localStorage
    const bdUsuariosJSON = JSON.stringify(bdUsuarios);
    localStorage.setItem("usuarios", bdUsuariosJSON);
    app.innerHTML = pantalla404;
  };
}