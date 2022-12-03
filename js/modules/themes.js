export default function initTemas() {
  const claro = document.querySelector("body").classList;
  const temas = document.querySelectorAll(".tema");

  const temaPC = window.matchMedia("(prefers-color-scheme: dark)");
  if (temaPC.matches) {
    document.body.classList.remove("claro");
    document.body.classList.add("escuro");
    temas.forEach((tema) => {
      tema.classList.add("ativo");
    });
  } else {
    document.body.classList.remove("escuro");
    document.body.classList.add("claro");
    temas.forEach((tema) => {
      tema.classList.remove("ativo");
    });
  }

  function alteraTema() {
    if (claro[0] === "claro") {
      document.body.classList.remove("claro");
      document.body.classList.add("escuro");
      temas.forEach((tema) => {
        tema.classList.add("ativo");
      });
    } else {
      document.body.classList.remove("escuro");
      document.body.classList.add("claro");
      temas.forEach((tema) => {
        tema.classList.remove("ativo");
      });
    }
  }
  temas.forEach((tema) => {
    tema.addEventListener("click", alteraTema);
  });
}
