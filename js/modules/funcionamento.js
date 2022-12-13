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
  console.log(link, temas);
  
  link.addEventListener("click", observeBody);
  temas.forEach((tema) => {
    tema.addEventListener("click", observeBody);
  });

  function observeBody() {
    const classBody = document.body.classList;
    if (classBody.contains("claro")) {
      funcionamento.classList.add("dark");
    } else {
      funcionamento.classList.remove("dark");
    }
  }

  if (weekOpen && timeOpen) {
    funcionamento.classList.add("aberto");
  }
}
