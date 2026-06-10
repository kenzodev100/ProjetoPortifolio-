var lampada = document.getElementById("lamp");
lampadaEstado = false;

lampada.addEventListener("click", function () {
  if (lampadaEstado == false) {
    lampada.src = "assets/lamp_on.png";
    lampada.alt = "lampada acesa";
    document.body.style.background =
      "radial-gradient(circle, white 8%, yellow 100%)";
    lampadaEstado = true;
  } else {
    lampada.src = "assets/lamp_off.png";
    lampada.alt = "lampada apagada";
    document.body.style.background =
      "radial-gradient(circle, white 8%, black 100%)";
    lampadaEstado = false;
  }
});