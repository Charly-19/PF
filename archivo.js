const button = document.getElementById("ver_mas"); //se creo boton para desplegar más información/     
const colapsar = document.getElementById("colapsar");  //se creo un segundo boton para revertir el despliegue/
button.addEventListener("click", () => {
  if (colapsar.classList.contains("oculto")) {
    colapsar.classList.remove("oculto");
    button.innerHTML = "Ver menos";
  } else {
    colapsar.classList.add("oculto");
    button.innerHTML = "Ver mas";
  }
}); //para que pueda desplegar y volver a su estado anterior se escogio el evento if-else por presentarse más sencillo para su realización/

