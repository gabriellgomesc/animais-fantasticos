export default function observeBody() {
  const modal = document.querySelector('[data-modal="theme"]');
  const classBody = document.body.classList[0];
  if (classBody === "escuro") {
    modal.classList.add("dark");
  } else {
    modal.classList.remove("dark");
  }
}
