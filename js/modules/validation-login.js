export default function initValidationLogin() {
  const login = document.querySelector("#login");
  const containerModal = document.querySelector('[data-modal="container"]');

  function handleChange(event) {
    const target = event.target;
    if (!target.checkValidity()) {
      target.classList.add("invalido");
      target.nextElementSibling.innerText = target.validationMessage;
    }
  }
  login.addEventListener("change", handleChange);
}
