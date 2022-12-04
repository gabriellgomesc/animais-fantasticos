export default function initModal() {
  const botaoLogin = document.querySelector('[data-modal="abrir"]');
  const botaoClose = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const menuButton = document.querySelector('[data-menu="button"]');

  if (botaoLogin && botaoClose && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
      menuList.classList.add("desativo");
      menuButton.classList.add("desativo");
    }

    function outsideClick(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoLogin.addEventListener("click", toggleModal);
    botaoClose.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", outsideClick);
  }
}
