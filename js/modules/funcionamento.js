export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const daysWeek = funcionamento.dataset.semana.split(",").map(Number);
  const timeWeek = funcionamento.dataset.horario.split(",").map(Number);
  const now = new Date();
  const dayNow = now.getDay();
  const timeNow = now.getUTCHours() - 3;
  const weekOpen = daysWeek.indexOf(dayNow) !== -1;
  const timeOpen = timeNow >= timeWeek[0] && timeNow < timeWeek[1];

  const link = document.querySelector(".theme");
  const temas = document.querySelectorAll(".tema");

  const classBody = document.body.classList;

  link.addEventListener("click", observeBody);
  temas.forEach((tema) => {
    tema.addEventListener("click", observeBody);
  });

  observeBlack();

  function observeBlack() {
    if (classBody.contains("claro")) {
      funcionamento.classList.add("dark");
    } else if (
      funcionamento.classList.contains("light") &&
      classBody.contains("claro")
    ) {
      funcionamento.classList.remove("light");
      funcionamento.classList.add("dark");
    } else {
      funcionamento.classList.remove("dark");
      funcionamento.classList.add("light");
    }
  }

  function observeBody() {
    if (
      classBody.contains("escuro") &&
      funcionamento.classList.contains("light")
    ) {
      funcionamento.classList.remove("light");
      funcionamento.classList.add("dark");
    } else {
      funcionamento.classList.remove("dark");
      funcionamento.classList.add("light");
    }

    observeBlack();
  }

  if (weekOpen && timeOpen) {
    funcionamento.classList.add("aberto");
  }
}
