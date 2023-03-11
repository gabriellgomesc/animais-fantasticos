export default function observeBody() {
  const modal = document.querySelector('[data-modal="theme"]');
  const classBody = document.body.classList.contains("escuro");
  const textThemes = document.querySelector(".theme");
  const borderFunc = document.querySelector("[data-semana]::after");

  if (classBody) {
    modal.classList.add("dark");
    textThemes.innerHTML = "LIGHT MODE";
  } else {
    modal.classList.remove("dark");
    textThemes.innerHTML = "DARK MODE";
  }
}
