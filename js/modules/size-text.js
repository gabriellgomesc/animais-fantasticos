export default function initTextoMaior() {
  const textos = document.querySelectorAll(".texto");

  function aumentaTexto() {
    document.documentElement.classList.toggle("textomaior");
    textos.forEach((texto) => {
      texto.classList.toggle("ativo");
    });
  }

  textos.forEach((texto) => {
    texto.addEventListener("click", aumentaTexto);
  });
}
