import observeBody from "./observe-body.js";
export const temaPC = window.matchMedia("(prefers-color-scheme: dark)");

export default function initTemas() {
  const link = document.querySelector(".theme");
  const temas = document.querySelectorAll(".tema");
  const classBody = document.body.classList;

  if (temaPC.matches) {
    classBody.remove("claro");
    classBody.add("escuro");
    temas.forEach((tema) => {
      tema.classList.add("ativo");
    });
  } else {
    classBody.remove("escuro");
    classBody.add("claro");
    temas.forEach((tema) => {
      tema.classList.remove("ativo");
    });
  }

  function alteraTema() {
    if (classBody.contains("claro")) {
      classBody.remove("claro");
      classBody.add("escuro");
      temas.forEach((tema) => {
        tema.classList.add("ativo");
      });
      observeBody();
    } else {
      classBody.remove("escuro");
      classBody.add("claro");
      classBody.remove("escuro");
      classBody.add("claro");
      temas.forEach((tema) => {
        tema.classList.remove("ativo");
      });
      observeBody();
    }
  }
  link.addEventListener("click", alteraTema);

  temas.forEach((tema) => {
    tema.addEventListener("click", alteraTema);
  });
}
