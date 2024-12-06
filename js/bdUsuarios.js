//Base de datos de usuarios de trabajo
const bdUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [
    { username: "admin", password: "admin", id: 1 },
  ];
  
  // //Ver si tengo algo en localStorage
  // const bdLocalStorage = localStorage.getItem("usuarios");
  // console.log(bdLocalStorage);
  
  // //Decidir con que lleno mi BD
  // if (bdLocalStorage) {
  //   const bdJS = JSON.parse(bdLocalStorage);
  //   console.log(bdJS);
  //   bdUsuarios = bdJS;
  // }