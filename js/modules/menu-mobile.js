export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"');

  function openMenu() {
    if (menuList.classList.contains("desativo")) {
      menuList.classList.remove("desativo");
      menuList.classList.remove("desativo2");
      menuList.classList.add("ativo");
      menuButton.classList.add("ativo");
    } else {
      menuList.classList.add("desativo");
      menuList.classList.add("desativo2");
      menuList.classList.remove("ativo");
      menuButton.classList.remove("ativo");
    }
  }

  menuButton.addEventListener("click", openMenu);
}
